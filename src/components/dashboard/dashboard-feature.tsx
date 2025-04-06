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
    "G3GvqTtDfoZ4uZsUdyyCGpgqgobE2hLSvD2BY5d6NYgbHJJSAFoeXJn6Wuxz3RDeh9kkYcy4R4rbbDiAZCqaYrb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uVHUwSaQjJAHFUYqLpbZdxk7bV1piVZ1jnhYjqybqAF6Gmk2ZwA7swZ9iSRHSBBT1Y3sxBxGqoMM3Zi1PMnWArg",
  "key1": "bcVditDxgthDXdW6jSBNNYHkQ6iDv5tPe67H83A3spgtSSV9uCVmmQRxN4M7AwJzfUXkNcaVmCMSx3m6WEPN3HX",
  "key2": "DkJPTir9LNa31iPwQ9yCEtYQFmcpumMQXq4uRzKyhw159EuvuRkpRaC6qgyQoR45WqPv6RkyBZhBKiX4Q3Xvjbt",
  "key3": "wHApnUAP6GRAWP2dehfn5ymiDkefyqnkcy4CqcEqxqvyLyF1P1iFuU395jQ1j8kaDcVB5AjgAd9Y3yNUEFRQkhq",
  "key4": "rgRJnqciuDjEGMRosJCCD6CW14G6nmTpoAxMqsr484ubiqY9w4a8bCsUBQjszzFx4AyMFfw3TpZodzDEUSVVpWP",
  "key5": "4u9BdxfCb4Rvh7MAto81pheCi9ktm7RAKtn4mh18kak5Kjto5eMdiBAUSWF3T7F18hg6uB6KjSL7beQxJxpCBUwp",
  "key6": "2y4nDi8c5o5csQYV77cMvYR9U7JestS1EKKUmr4FU8cLnrsr9azs13bj1JiYa22KwRKKH8Mrze2TiNp4VFnVRJWc",
  "key7": "3nXN2X6P5KUHGCotz9f31cYyQge9W41UMmuKpjPCiZv5ZaMZDWNZD4ibEG8vYiwbpMB8Uqe51vtBP1x4LTL8cMkN",
  "key8": "5KKBanMdG3Pew7752hVg7iExMiQtuoEoHE2bMg3KNyB6ghKETVwqFsFBKm25ZNhDr5P5CtfkxbrZZHXjjHgCYXmu",
  "key9": "2U6AekhinQxDJFXAzvvuCWsJZV2oqpoEVe5pdeeBgFgwv9NqjsH1Rk6AMFae2iTd9Vj7SimkGfJxxFnJ66xrQbCZ",
  "key10": "2qh5ikKcob33BBk6JTNqfbyGb3byUxiVNEgc8jyuxsxYAm1NwNgDbFzQPWauLa3AQj6pHU9HZGfTomQ9KwcFw3Ph",
  "key11": "2tVmCxHwiDZB93A8fKSjNLgw3UkmRtwShy8Syu8iQ7veu17qW2aYJ7BtuY3Tz928J1Mf8rkCyfF2H79We2Tg6w2U",
  "key12": "KST9mJr1mtweEFmHZLgqs4ycWAEETDg3s6kjvTJXm33kXQ7MvKawJRzdQ72DVVj44JwGHXs2biYCxwDmY7SggTC",
  "key13": "2U9cRkcw7tvRVWjvmYniutrUbSRgDYVo1khrGDRodbadxxqtyu5Wqtxd4KEmEhjFnVqBDPCMEENbdhqpxEpzH6Fo",
  "key14": "XirA34uSHGL1eQeY5VCwDdrRjtX9tpqJaaj9qkcHsAKRqydRhDEpJ7WFWs7aTRe8CDytn5naMyEt9NtwbrAkWZH",
  "key15": "FQEJadgeVVjYJy7xQYXuF6Z45mhF8R9RuQgemoSX6pnvopX9ZaMuiT77ssRCq1W1ovCGMWpySQKosbqsvT6FXbe",
  "key16": "49vPVqmgsPVmzHeGs2UjAPYuc75kWuxnBmMKeCK7ZPt5FJiNYCLRQWawunh8STV1ddQCkorgtoL5Bw29R4VxK1U3",
  "key17": "5ZcBjQkM2xzEAPvxakMdeuipYLzxxx2Pi3W5ofKdcixKUNhQ2zs1LiCP2Hhb6sk7Qz7etr79rizVDVdqaxB66hTw",
  "key18": "3ycphTJWpE7hSitGDezBxGLS3mg8g23LwftD5AmyQRKbyBya6veNxwd8fyRUmbAFs98j52Q4ro4VKPN81ofes8Rp",
  "key19": "bXWNbwVubYJE4bvFTaHxqMFSZWmqt6MgPbPJDjnfeRgjrmXbRNiX6oz1D1vavEDMBHBjkjWmDkDqNvX5fG3Ktuo",
  "key20": "cw1Hu3k5FdRcSLzj8v5krSmtETFjqHtAMCJ4uGXcuyDpWD4X3yyRd9dq5wRrKg1cTtDZRM7Rq88Xfth5aqfdAjw",
  "key21": "4i2A3PSzyRrEM8xSX5oD7xZd186Jnp4uFrivV311miccUqSmbFfVAZq4NTcWcg3Ep2HzCdUpeTvb1EejBW5f54Au",
  "key22": "56jgkzcmEzuNSXU8x8rnMcgmwNPeaCMeYSB1GfodrBmFpEf1BrL2e9BFYsS36NXHNovDryZtcxQeY1PHkmg5L8uA",
  "key23": "2VehBudgo5geD3HCYpb7m2raFzci34b6jnR6n7NoW568tB5CCRADqGpVoJPfdc9ZRZHEQDZZtyV4PdSqyQNDpSKz",
  "key24": "rsfurEKUyLazU4Kogx3pHGJm7PPDqK9ENwoj3SXkfxRcWEBrp8sgYr9AVYc3tPCXkZPzgacQGmMuqQrsRbU7VhJ",
  "key25": "59Hg2UoNBPjcRoBTGNBMdEDjuy8uCRyiyZvSMn5J5iweMRcm4QMJyXY9SD59v8X7HJgSWHzaNEsoBxMmp3hPC4FW",
  "key26": "3pm3oem1BAXECkUXGY5uW9GppyhAtZhFrfTpkNsQpWk7gFCnUhjBAb32rwiZj8BQebpBmtAVyTN1meKW29nkx73m"
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
