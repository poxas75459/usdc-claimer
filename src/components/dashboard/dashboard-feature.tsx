/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "48etWfC5qzuufrveUofbYmmcbFxKUKmRXTETVMkcWHG2Frmwf5ykkXSKrLkoSYMjZKyAcikdL5TEgbannbCpPr5N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BzbWxpxay6BxKiADFLjqvfDWmckMMc8MvLPf3C6ciwFrQj1qFfa8vGBNQgQaaC5MtLQXcs3GGnMV94hGzF4qhVB",
  "key1": "2eEkumErJNhJCb5oErWKUuSr2hnntRv5HncxLVwHrkAw5gkkJyUVFVf2ewD1voB9HWaVbruaT2gemoqkcMutN3PQ",
  "key2": "45f3UYNBUeYjGUYXAFWgcBJ4sSKcMSZypGQ1vwhtQF1swUNk5dy1gXE6FQCn6S8jTgdiQR2p45naU42ZzpJkEAqz",
  "key3": "4cpJpjM41cjj5kmnXUqLvnk42BZpu6vwvG2LVVHJpBV7HLv1a2K11MbJszagZGeMdKThgLuQXgcKsaZN4HH43q2h",
  "key4": "2vdajQc5LS4rFr3SeSq3KQUF7UveY8YXrMbRtyohpTiGYhgTCRAMDuZnW2rS4nwRqeUhdnT154NuaTgmrjWkV6Ee",
  "key5": "3e5KQi9UGdCBQ5MJByAoMqJa87CfyuURBmmtvAmFHJz7Pi8o2bhtNB3xDDc2qgjteuoaa2UiyswKgcynBtdm4yaH",
  "key6": "27EhBcr5owAkb3HAVsgBV5cyjLYwTD7ao3zyE2FkjGEdccmaVv2XUBMTqW7eq9oMxP3GMQ8H5Mfh3u7s9bw4Jqjn",
  "key7": "4yXGsPMjQbPoVkuE7TurySD3NedUY9i7o6qypd3JhN8Coh2MESSE9GsBD1W7uRBnRPmZBYsJMext4y7BBULny1ws",
  "key8": "53wxEbPP8qUcufnC5vWskcKBasEgFuiyo1BHttDwNXknN5gMXAdxRenXUyGujaSKkPikQ3nBVn3FmVjLVkDnJt3F",
  "key9": "2Bx4KhntNiREGTs44xrxtHDp6RXPNzekyFbXQp5FZvQFEmmL1fkGDyZvwFJ9W2vx3BTr2Emn7GGQsJdMghRq4fFA",
  "key10": "2nMN4PGs56W2poQGXSXQgjLFAHryAD1yVSjoFihPHQkfj2cuwTZZqoftgWMPaYWSGyYRSyJPHUuGgGQctWmJofgm",
  "key11": "4Bv5pEcYVqyXFid3wT1BJN3C6tM74d6AfHknfXPKjrxDB7VW5fVt7iJr1A2wDFgTKmPfz9VDxyhqC3TpL3rAnnRZ",
  "key12": "38meNoCp1JbhGV24omB9vDW1vc9oVGfJ3T4oFDcFNA3MbRuPC3rpp4kRxfgFQDi9Wh3ZdGdifs1rMDn3Y9dcAyuv",
  "key13": "3VWff9p89q46erRobzJPWgeTvQXrCTwjZFJQAjEx2cKz4p6TgKRRGBFqH7RAKRVuUZgEnv7YzK1SZeucmL6K8XDn",
  "key14": "245iH1w5tsqsZ6FiLK68mtqiwbXFwShYt8W1Eq9KBjJTd9UvWJk5pzij8YnfCWinjm2R5s52ky9Phf4koq8us7S5",
  "key15": "2nTfRoj5oWrzNbXfDRhxETtrEU97sc1bC6vE9of1MmSGRVrsYnm9GWUZBRtcA9Pi5K2ZeGJB5CaK7BYrcEEbhFsY",
  "key16": "32pLWoYCaPU1Qyosu3K3uSueQVsX9zGFwCoH6s4MMcXMU6mLMQJPcJEyz1YpwKkWy2bv8EyYtGose194Ahh1C7sF",
  "key17": "298Wi3cFVHz4HKpj3qgJJAvrpa8M2emgGp7ZyHewDLwBASrjjxokzenXG65cM1bVLK1oZ5yaSZ6S82cDLYWjDQyL",
  "key18": "55YzD9FCKmuZuiB8TWtm3UKPK67jeX9xBfCD3Bj61E1AsmKUXyCa4wNcqQc6JkWvSmxknjRDrAaM2oSAvZZkK3Vb",
  "key19": "46jaopzXkQrZWNeFfsvdbsKHFn1VbKoaCqeRn7ErRau9aCkjmTKMJT4ei3iTcqEWz8SXMw912NFPVzvx2SF6D7Dq",
  "key20": "5H1rzhYW5SnFjdXy3fJfa7c7TmikTT1L5KVktqRYYsYGCAmTS7RHXAbY6Un8eJgQqN5PuxrCqfdp6J33zQgr6SHM",
  "key21": "3FGsY8hQD4eTs7xk8xDeEWRz7tqXsrCrPaW8PmYWVqkDwAxVZw8CFJpgH9okiR5ZZauppQo5F3t5eddbYHGdL6r2",
  "key22": "4yjTLmVZGoxkAKtaqwgCnvkL95DXQh28RoaSewWqTPqjj6vQtuCkcnTn2BoGMopgZtPekRbPK3L2R5wCDpadbdnb",
  "key23": "4BK26HUAMZMGfKV2SY5xF7rSg48SfQZNYnVrvRDo8KfsFibLzvwLQLLS6rW4z68KqGczQE9xPgMXY6PjiXFjdQy4",
  "key24": "4xQvuTq3cMgCzDWkDHVFhjSnN1G9QSbQ3qXJ6aWQf9XvpsCXe4Ch9ENLLWbSwCeCsDU4jXjN1tQCJWre5oLaWRCH",
  "key25": "r5go9EJyjaz8dTj82zeLFVfHSxZLmwKr9mMKjnQrXJ63kTnk7piopEfuQx1WQyKx713eGy8Y49thKJ9qNhLnS99",
  "key26": "2TEpJnHB417ziForneKmyVyZbBAZ4mR1DasxhR6TtfC7Mxwp5psT6eEvQUqw817VBVZYDyte5GmFnD7xLLaVnLGS",
  "key27": "4kw9B55kTHryj1T2Kd6U49yDC2wWbWcVCxppBzWQ4EA91osra2xVQyMecMrcoFTnbgCzMCUsbVhzNmHapfyBnvZ5",
  "key28": "4usKWyhRmbdNPjJZp2Ddz9FRVfuyVxhYd65z6t9BxEveaBQiMc8hZmF2UQNthCcRk682KC7V342ccLE14MjG683W",
  "key29": "R7ygbCGrACXyZd3jLNYTT1qahKiEWZgqDFy3KYJQr42o8foSamZyACM7J4rGt55GLBNn4Dgdw5v53AWYArLjpoD",
  "key30": "RmxaWg7WErvcFM1EJbCcWFDoUGqAihSHSrpZUgHgvB9iebwaWdX2ZPzmb7grJoo5DJfegHwTp3z1d3Y8Fm71WgB",
  "key31": "5K8isJmbzGzw4rpkvpQn4QhCCxC1K5Xa85c7Bfawsmi5YB36P1sYXLn9xpMnT1Ykxos1vQ8NuEZUEtoZ3Jnbwqx",
  "key32": "2hhfw6idQYwNj4E5qAcKcYSLdsZ7hHh8WheArz4P8fULHMH7Sv9SmRYenXPKfWK1rEQ7tNXTeHotPqZKELdXPfGF",
  "key33": "466kJpZyDnmk7Hup6wG9xhTuLUgFj1qwLUxMhq4Z18R1s5CD4vVqg2ge7wktsxFQXdS8YggYJ6x5vHMi76c733iX",
  "key34": "4A4XgEHc7o5nAsNKuntMuwBJApEwsDPSsUSXJxLyUqBjNjg6XBQpmcv3JZ2MnxTtXM2cJxmeCeCYwNyA6hGgU6E7"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
