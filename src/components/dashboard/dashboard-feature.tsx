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
    "2pnWs7SeBLkoDHYyE2FeSrchPdE3Y1mXkwvTe2AYf8ZV725j3txNMco26Kspj9qwpi92MJh4UP3y6ynsCriQncYx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZAn3GrJzFjdVeBS14KX6vyP9E4eH27e41LRUBDHbDAtBGaRLmNVVqi7QPVqwB2os1kut7HwUtDU7puZLEbbKF17",
  "key1": "5cyNtM8tucfLzh2xgcC52V1AEbERGTTkY7rWVKT2phvh6Q1VbUTnea5iRny9tmgVAc5TZaGDwzNJU9ydGq7mLXar",
  "key2": "4r6kCGGiN5HGNzufpXrmaC3rtWBRLW19Hizcj1x38ygjBPKYHWjWyZtWZFs4x5CxhWXixwX1YvuhzSa9seUHv7gE",
  "key3": "4JHAxLH9uZsnsftDvrLRhfRb3LaQfxyF6e3S1rkf7RUtuwbTyNbnEt2RAmbmoPwN5zcFGQjPsYWuU9N15s89K7zk",
  "key4": "YogGWfssMaUcNzTajsPtvfkMdLfSinFktaCdGTaqbUSuZdCKKFo7dubLRhAmdD9RbUWAoNDgG5sWMCc7qSccR3p",
  "key5": "4GCvUN3dkNW6wEa6SHL3e4hMe26HZnRs2AMZ7PhhFWAuGv4KeSoepU8NVRHAFccxirVsM4PseCFZcEfDfAaVmH7n",
  "key6": "2CMmtSA2cE5MCXbRpnmekHKTEQDFnVSPiDV5kPair3nqD3enqETdfr6MXZZCQhdPazAJUNo5yqcT39K5Cc6yaeag",
  "key7": "pGUVwUd8VCw2hEvN9PPHGzaqMC8ZgJSmf5zV4fXGFCUDHSmBedNU1k637MwQTTUsYFr9to374VHr75jJ6Gkv8Cw",
  "key8": "62VYN3c39YFJKVhbQys7CzPQrJUm6Mu7nvCiP4cQ3yy1LpZK6Uw46T3TGh6MGsLYCMjssVwMxd8UbPRkLt1EChq8",
  "key9": "4ZbkAQdzCcUW39sA8vYQoFAZrNniCBhavN7oofeEbHVbvu4Lw7mYWRC7XMcFRwXwEHdrs6xrhABhXATLrKC2a5qF",
  "key10": "3PTYrwcxov6sQAPh8dbXgUjX25RvSCABqGLZNBLHUTjeGcpPgQfftHoDiuLPGPN67vhLYP2C142M85qRCiDNJ5vB",
  "key11": "AvMVjtGNQBpfHUkxgyTjbMGXgbbQVWxLdDrCqdfJJhsMA9Tyr2d9K7HnrVY5AXcPysra9oibiMuH6ArdAzjTGVz",
  "key12": "37ugz5XCN4zivPoGk4fLBRHsLhp22g7LM6F6FiB9f6gzus1eewjgsi9oReJLZNy4Zys7LN4bTYcgg5bN4mfzRuKg",
  "key13": "5V6dTD222pr4pHXQciz85ZT8BZDKcJuhR88wJ6am1JXGmfHm5EqRZ5Ycoj5duLxy9RNENxqU8UEYibUGkCYWNMde",
  "key14": "9RDfRmo4qkP1N9nYX4XP8sQpgWfGYiVr4pkmUxN3umDxPU1nZBbozr6xKXrx4W13gfLwZrkCUKSmywiGvBXMm1G",
  "key15": "2eJSg2Y1uhTBSTNvoPk7u2vDtL9jcsKEt86urHfyMRr3KKfifs7FwDpFA9hcLJcm2qLWprtyCBdGrKf2LU8DaGm8",
  "key16": "EwUhtseWeAuFabEgyMriaBGMD8e1isuGZvBJdqv2s1gadyVLpCXW7Bw6zoVuTxrKgZtz7DjPhWCWpPGoA9p49PB",
  "key17": "3ULTwvKF8RgM8rUTjorzZwzHopkbJztGVSQnXZucv3WJq7g5wiDTTUrbJTB9KyNHUQ4X3XUhqKu5bGyEhH5oWZ4e",
  "key18": "35n2QiC8NBfZWjoPVGiopvAP412GMkxpXyCTquAdqDCRq9t54hWNzDbrLvUcCYSxqp7Zp1b3kTLrbhMdBuAaEZcE",
  "key19": "63vh8eaG8QNyaHamTLWJEaTRVLiFk82dUAyJRTGSc6i6dji2q8dsqN3zarxe7zNgP4M98r6basnzWF1WkB4HYCzv",
  "key20": "3iJsEA4ogsyCaVLGZTtGkgVXSgi7W2DCSYsBEq4S6aHDKiKm14JUH8j6qd75XvTTyrY3AcPFBGMgp36fesoKrunf",
  "key21": "2fAKd9rkDDYpqQmKPNRxeR5HSYb6GEQQq2vewdvbRzxY1FxjW4Gs9pjEnEDyH5BZFcnnXhQS9dmRyWP9xut1P7fp",
  "key22": "51uwmric6pGP8rwswphGWUnwJDT2MBJ2WjWxbxu4nPe2kkY39zoVqZKBxp59e7PoC1NxrU3MpDibh6zvhYaUkJxT",
  "key23": "2toAuJvQtpbRQJK7otPQciKoMNo15DGMoYjafna6Tc68eMqaX34aenLDVerqKCxWSmq4LRWCVG5McmXkXBuyetUR",
  "key24": "naS5rtmBmzueCmAyXgsZ8xP7XUJKbbYCYLKzAgtF8pV9wMt4jdn9rHrXXZxokDqi3WC4mRDRKhFpTUDT2uypkvm",
  "key25": "4f1ausNsrqZmeKFgdxzVHt7LyauGNkyFS8ijp7ynxZGqLMr5RxPVeU7GFmtPhBnXi4ssarp6ccTiGzmP4KBUXUc4",
  "key26": "4LpqTHj74NdDNZNZjkKu2S4xvyKZ5UAmpQLSBqg4sg85ovQ49FeVgQaZBP233nyqyqYG55B1WNGHqWap1o3iZ9t5",
  "key27": "3kTyVspjGQgyaaEDaqAmEibzQ7he8HD9gfbA4yR1guGy5kjtTqWrQL8vpeAsLJRyskBW4VAXnwpAapDKw41KpCJ",
  "key28": "6KQhtpHhD6f3Vzr5KT9Py7PGSXLMuCxNoHuyqKtfvhZ62eLj8HqNz4a4wdShEyRkT11fkVQaXFypmwE7Ay3oCjS",
  "key29": "3MT8qVkisLKv8GMRCewcjZnGkiGuYS5S5tK8S2NC1k3SkqUBqPvR9DoetWjjPKvfzKNYF1rPWSWQvLU2inPd1MRL",
  "key30": "55abpjDZLLXkzNhWEg7APvc5rWtX1RrM1hhNJvkKMze8K8TvzSpSF1v7nChNy5HTrh6GDPmwQHpd16BRPV8Wt8mX",
  "key31": "2LuusoHhJ6RUtd5JZ7s5DzY3i88U7ZujAGxE8hLuHugZPU6CbDHQCQsqFKQLjRDWb3fJdAJfXrb1SGBfkh7fTW6L",
  "key32": "ZeuGN8D2xHojchGLL5r8Xvm3yjHaizpneJuskKRCw3AN9PdU6XAbspVELcY8BAvw4a7EduU3hB2PgfNRJ1jARyY",
  "key33": "58cg1uoJHB8bPCXX4mjqcrnZLJCHufeg2Yxc25qZcyRNQDqgLmBLZjQArSzygLkwEWRg4LY23xQoJaB5swR6YnyH",
  "key34": "5jVKMgiDwtDjgrTNdRAPgfbm4hjPbkBCd5bF7tx2GRJGeAK2ic9cHyQLh2R7hAaBv5PVXUgLxSHufJJXM1Ja8Udd",
  "key35": "5R3vVVUKBuaxEu6R7FMUbZ48b7ZL2ZcMsFdVwVByyaga9XmWBuDUsUsDQjm16mYE47WtJqYKdykuByApQU6mN5XL",
  "key36": "5nNcCipaRYVDGqBB1PZtP2WJd6SSrFXbPiPvkfkrjyd8vLovGB2f4ZBbBGGQTPvtY9ApmveKwGBe7hXbVgRBDMJT",
  "key37": "2C9a4Bba7dbUAz8VPqi9vZERuT8qk4CKdMPbRTpxZEY3UQb6DvuGVSVhSdFyaTD4DaHUwzxQdWscTLokZ9Hw7nuu",
  "key38": "3Rxs3mcxuYx75GvjfCdeuyBXpfsQejs9RcVA1b7ZU5UfBfw3pFdkViPfGwnHogTR41tv59359w1ZMA9i6EMJKqTi",
  "key39": "MsQtp4VuE9aAc87XaprqFCv6dc7phQfekDDABku37yofWMt32rEDCFGNruFACnAY8smWivoHiXc6DK7TFisMf4a",
  "key40": "3ewor5RvaZTdHK6vtzQqgqu2KHS5jo9FZgRjF3LdFs2xY2598dsff79phKZUZ9acr1Ko4jXmLZA8z3UZTV7Nyr1C",
  "key41": "2YgBBZRVx6eAaG88eWt4xQ4LpyhocmnamX1iap9XtdBx67gBuKREvhxnUT62eeVBAdPFv8sqtVgN8Jd7iyHnoy1Y",
  "key42": "BkPPxfmrBGX5ye6BE8K6s9FZbRrwYR1MmWHfmkhsJjEjfhvtZ7xkb2KTa51eL4ctkK3zFfwWuYgdCyBRpGGnyhZ",
  "key43": "229iyAxss2cbnYaZsksyPPrAN8ocPpaLgrBGj19kQa9pExMHknxtusUg2Be6gmiK3jCnPeZuHuhBwAojzpbFCWYX",
  "key44": "248yZQ4YDo6ZmXbz72oFazZL5K35oiNWNsFjqkEwFbEZm9XxYehwokjgScryCB5Zz69X3q8Ngnqf3nr61D8Co6tV"
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
