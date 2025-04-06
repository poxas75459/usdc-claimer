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
    "4ZXTxDjxQ7zEu6bmvicBRAQg1LQkVnbnnp48fRRRiYKd8BjVzxckYWHf3zXmrnSaLDgrPVAGiLMRmou1b4M3wYyV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49kjtXpTkrFKQeRQXnDWxhyQh1shTyGUuQfCL6jBCdxoTQxDraQw3M9nGaJGRPgxUMUmhisRwJRFCB9WLqNATjwC",
  "key1": "2ZwWyo9KJMVnAQC3bZCkKZgDCwgsJ627VtNnFzS6L4xkwe3BmQLjYDxLyBNKTRM746cbs7y7P8eggUrLPNbEVCeZ",
  "key2": "2vh3XJ6p9yknLZEL4CEeUCUAPrcpWNYmvsjzoBwTXVVJ8jwdG8PTqgwmZzQfsX9PpwAmGwZCRXNd6R8UavBfueqL",
  "key3": "FynBsWZJ4Ha68VD2KTNCVuxdtrFCk5MRhr4YMHdnEJroCLvHtT6kU5SSJWeE1A5jsma23ZkdCYwUjZeBaQ79Pt2",
  "key4": "2PjVPwvHdt7NcAFkMRiL3gv6UHbnbdHW9JHFQKcC7uEoVBrgUMxggzP1oynBmGaWob8ZZiePHar9DxqnovFE3CW5",
  "key5": "eaSUvNe5Nsqf7kB23PktZBVEdpMZFmkPSoHX2HScJRvVdtZh49pKtsyPBrgXtYQYbuyFw9iAxUEy4kuRbkAirUF",
  "key6": "Td17zC94YPm1vH8CMDb9SEb4AT7EieHbPRLGGAqxq5wriyia7Cawf4bZfzAr2JdFw5BsH84zCw5iEgwyJ3jAV22",
  "key7": "29atPKydcHxwZk3hFw29Rop4BGTv4pV6HS2Jfxt4Udq1ANgHufSgsRLvgRFvbwbPsguHZfHTSDVoJKu6fqN1nbQ6",
  "key8": "5GXTwEr9Mtk28jLCi6CAut7cEQS6d7W1xhbvXLfaXZKWpX4HuQdTgk1jYYU8QVPfqQEwt56jEz6k2jbxrMwa15z5",
  "key9": "3XP1z2hNvXx4nfegGMg1Cf3gxru8kiBmQJ9Uj8SsJ9C4MbyQbsyYrwqCzg9LCD2XzMk9V1Zx26nYHwkqarzdaz9d",
  "key10": "5wXW5oLeSB5gWeiWi8H2Z9DTN5rartBN3Bvz6GmEFdSKjLV3H7fVLKfEkXPJRFc1dhdTnJqatgMYu7yHRpjCycuY",
  "key11": "56M19zjkC1XtRj3aTwNhT9GYgjhTpRBcMqvwjkUh7Fi9ioui7EpoAg9rqCpA11Q36LK4raKMdZ34vnVwubv7Aykg",
  "key12": "kLxNjFDg8yQsNUGVgFcXQA5aBRmJbLYZySV8JcPr4azz4rPfu3igz5rS4g7Z9ySViwY6TiTTP5YMbQxy2ggAXXy",
  "key13": "pRLrhabZpFJFb3QQNozDbNhHe4XvmzRDKhmk5HTpNwzFvYESMnX1FAXpmXCRY6kPfnUCbYP3c6buUUebE4WZyDm",
  "key14": "4oJWMep3S8koqpJUoMxJDqANjVnrKf5X8jtGWbXDFUwcZWLr6T3Bcgu82dat4893bt2yjZs2VeRjKypN1EUFvpLW",
  "key15": "xZcuoKT3EuQXXgfJRsV6hUdrMCKgCERh5EEGNpW332HSHFGxeKBEKEbHX7vDAWhvWU1HdLZiSpvWsyauvgaeKga",
  "key16": "5ogVgPiTwv7qYv7QgkHAhqLMTnF7YnWT9LqcKG2LVSNATwWRYPQ9Xm5viFx3iAd1WyexEYw9iXJRkkUpkeDjYokM",
  "key17": "2ZvuYQZCec4zeWT4r79YJJTgbYYY2UQnHgrCxQKpbMMAXoKdgF8UCG7wYNYK5sHmbzczpNhstBGhZRpB9NuaS7rX",
  "key18": "2J7iX4QFFoSWMU8tWkaod5nH8d3ZupkPFkqpR6yR3mxSqnSvHcxrAiTHBpDfMVQXGSxGzNeNdTyQeo5LPZstUmej",
  "key19": "4bn7ommixCNedRJTxccvpqHbNf6Lc77zbbqGWcr6mj3hEUneyh1GkmkBGGcbGVxzZBW9r117rzd7qUpRvaT3BsA2",
  "key20": "YBe3CM4YDJQ2fjTupVPgMLpMaFS156kZTwmjce6pMqbigRAMqgvuUz2XUXJxCJmWPZ8RzANQ6EBAVCucrUZctbp",
  "key21": "jr7wccLuDnXRFQnnSGDZrnP9PB1VkY2JtZFxU42VFKvv15iYkSN3mL2Xuvcoq65xMwt8f4mm6nGPHPDfnizVsJE",
  "key22": "48krSd8qeC7FzteUCZA9NsmSrUvTjSjY1zhZtEvijVFdLJ6uu3FoGDF6cXjPTiCxxVMnqEpeouJqSMqYcGfvYxcx",
  "key23": "5cng3XCpvNzp1bpFo4fPcMCJUb2QC3pCjgGMmNzJhLjrpdMPk4DTqH7bUheVThRWEDyZsG98sszeaSwqEdEEAN6Y",
  "key24": "GwyEvqksqYEe3NEa1xvJB1THAB1jqZxTPoAp8mV9napYp98zTEJUYdck6bkJn9TZhg7r4PntXxLn8mQ81rELGTH",
  "key25": "CGgynDsoeuYhQi3BrSkYM2YKpEg1tRZdFM1iJdwDk1BpqywsQVQSRkQr2ehELyoWsJcnNDznXhmNC5fecmKJ1Ak",
  "key26": "5yzKkrDFDrUE4K463Aj4b7os89yEmHxqdseJY74p1bxSyBH4D7oasiDKD8ULTFTNnWcs2P2ySfkFQAFezzCMSwb9",
  "key27": "36kxA9pKuhXFMD4HA1P69ApZZXuasUf8dKd6bzhmzJq5Kwk1PEERk3B4ZmE95iDiVfRutp9frLi9PiPpY8VGN7UA",
  "key28": "58bxKZp4Dozqiy8mEM4dZK6PT8zFZZeK6wVJWiWGZtPUYn5wtqPzLNLeBF9sFaGE3uo1iVgbBCPNa1n4dXRhryQM",
  "key29": "476H8QZ6TueqEJrL46vVDX1TZLq45P8DJHBdZrwdp3SpKMvtTjtSw39nrXWMJCSBUSPkD7VRnsmPsmqA4HLNsW4w",
  "key30": "93GKQ2mBe2oRAtKdj2A33GMtp1hYhTXxLBHtd85TpGMwhCCK1BswxxocvGDE8kdaFYQKPtqRrsYrxrmQv8RTKof",
  "key31": "3coPrbCueXsQbb69MJdauJMdbo6GyHBQDt7zqcLfqsJNsdKNdRmP87naUa4Lm4PVkc3PsHeNT2hPTGBVA4dcg71B",
  "key32": "jp7a5Q4tdEz2YsDt9GLGSEcpc3M7BtoWNGEfePhWXZc2jauKAuHAvgozrhHVheVYAiqa7hSMS8vcrRzdRKXhxWH"
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
