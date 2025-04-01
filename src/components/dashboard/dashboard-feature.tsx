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
    "M2bBuLvaz3r5PCE6FnWs5HX4aorpQoAydKU8iEfLrRwBdL2rSbtkxkJEcLWUDASqBGkSHsAeF61i1hT5hH7vihw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yubm6NbTYJWcTQNciNN9SUJyWGVS7BCz932kmBczpERiEm36iwTt7DgLcw9BQyp16zNVkqLtHEohRTSSt8zrt4C",
  "key1": "3zZP1rKvdFd672JSKCEKDxQo7YtwzMNLnJMsSmzNQhmVdeq8UhC2LFAvMHGzwKGvZCx2xkYK44mqpqjLpjZRBbCU",
  "key2": "4Umzhzg6B1cFxizMh3KZ9CREfm985sWvPr9tYU4Pp5WToKmMa2Vih5CZJ6qvzqaHr78Lv3b3fo1NJM6gUpTRmavW",
  "key3": "3KASBYoJ4d8d6PM6j9PYg6Ssp6xFwCYwAL6nJA2z1pzCZYHagcFy3y88Uv5aBNyWZuhfS4t7bSxGmJP2QQygRuww",
  "key4": "3GHnJAFuEhEBBGcUbHLL7rU6o3NeQKSXSyPrUNw26AHPpmbkoAdBdp3zAJGPCjkhfAGZAbbgJmNJxkqcFQgKBJ3Z",
  "key5": "34cAGEGTAGe8vhCoB3FXajECAmAp59LJdcmMWNCQEUfT75c1b83cMXtRDLFaekjixPShPZnchdJRTTLHwTCJUSee",
  "key6": "2ooMYUFKxDBWK6W9oHwQF3oPQcmxJYkCocP8hpVSUiviqSei9dNGdDU2NscgKKXQ5CUNsZbFCK7MkyZroNBDm11n",
  "key7": "5Pech8ZF5cSYe4o5tkQUjwC6SePtxAXdR3ZYqbXYxCiZ4Kw67RS8T8wSoq9RRASf5j8Js6bgumacB8TQizWdTjE7",
  "key8": "3p82yywNgB2HFiqwChUNoJRXzPH1gg6vx9bwz44R6V2Kc2vkEekhiPeN3bAujQrukbnetiyfRYi2F3mA9nBtoHcV",
  "key9": "4DeDcTRdU4a82C713b2LKB1wU7maErBU2yv7w3iuwo5S1zPAi6Y8NVgXAydEHUKz6ybunGEsNpCXCYymuaPGzqkd",
  "key10": "2azBjveMeqbP6g756QyAM5HzbUxokqkoQkVJFDKLxHT8vG17VfFwmKNZTLbc3ADC2Q6cTWNAp93fRzF272MhK2GK",
  "key11": "obxSewWpfNQi9F1PtGfLgDLBNe6TUEReNdce8aPT6bQtGktZsS13gKeEojbf53AZU1v5Z2qrgexoxvwnD3Qvyjy",
  "key12": "4VXSPYYGAxfbf7XBz22yJfFKC9Brg59MzSYPtUWwBAB2CTkFthhJbtWAcGuzAALCDs3HNiPpgRy6kTdT8eyF36EG",
  "key13": "2TEHejZr6jMfD6fqwLPtumFWQijBVXqu7TJwGjS9sKRas7Cm986bsfvDekbpGGCi3wLGQT11JTHxCwKB9SKPipSW",
  "key14": "4t57Gwm4AgKDdvJNJQJ1kchty3L6ctj8tfAGRHr3ffAKNsdb5j93cnPMR1qTDCLhyZxa5W9iDHm2wDvWvBQApyRj",
  "key15": "LkRwN3pnqg5yRQxr5kgX3yiygALTpo2TVPHy4w1PuAPSk11p4FdfQRLKLuEGERuurSMB1T7owABqBvThNuG7WaU",
  "key16": "sgCpf7AneAnx7rQt3MmNohSgmWTp3QS9Pdbzm54aa5C7V5GboxWYvRUFX4pKUL3hKuQ8zy1A1KmeKPMWURUyioe",
  "key17": "5cB2kncxiM2L5atMAFisQkSWdMHSAvT5H5QxDuzXPeRxvdaYDrNnJRXY1JyZS85bv9c7mzL92w9A7mRgpumGrLNN",
  "key18": "2Gnhdkic9NK3mpJd1dZfmwAetxiqj1a3dx6vhXvCoLQzx1fGguHb8ck3VKfEp9vAfryBiD6jDzjU2GV15NuJ78mN",
  "key19": "4j4EuFqZgyeu8wb9Zo25pviYpha6DDAAdNQk1C2HTNNyvxB6GmRQMbRVGhDfSg2tXNHeVnvkgSAzsJ7fD8Lbnius",
  "key20": "45XvADVZx2s3nGEDBaaj4snNtSWtom1tcGmJWrZAuJVueddQ6DbP2SBeWn5iQPCkf42EsnmKaW3m1K6H2K5Mzjwk",
  "key21": "4JxNbLiu3eurQSZ8n5VBfJDNCUs5YiNYt4Ve6HQBkgiYw6sd6nqgEjtz319dqvC7AtG78nYof9YaBmUjBAshhf9z",
  "key22": "Riswvfhyxu8xiUnz1PLmaBn2LMjeerYxMxzS6PvCstriiBcB6CwcVh8rXS3JTtQZhZ2vBuoGtRmdprvk3EUecGC",
  "key23": "3MyLgcpkZHXdFdmu7cfbVS57482iNCKN2rc8a3rYYeAbFpZ1w7tMzAwooXSFKy7hPgyd7h33Vwzx62nVzZW2fugp",
  "key24": "5m5qmUWZz2bbY4hNn6TP2LtJwwe3ahLF95WH56rPxgesQ53sq3TaiDh4Wo6nXH5nnqWCS6qHZEZpHpmeDFUQ6Tv",
  "key25": "fCAvPnw4xtmxQLPRfkciun7U39qHeQg3zHpfwrfp8px1oduCQwB1suBWsHJR2DJ39z58BJoRLoqExEqNuNpZ7m7",
  "key26": "26homEAqupntR98oMU44W1YG83vs4fFJToHwES3sT4uciFtaC9GF2NFw3c364yzHKpPxGiV8aQoijqoC9ZiD2Uxy",
  "key27": "3hXfPCM5934YMKPDcLHBzcM8weZrZ1CyQNJqAFkUuFkAsFXo4TQfXxTgx3ShWLMxFsPKfccn1f2eGcCM3SAeakii",
  "key28": "35chTNuqEhcaVTZqX4AvqPYFLJytL6tRiPSTD9PYEhL3KaGtUkrN7uLeeW1SxLGnpe42NEeGNmNHRxvenkZ6SsNq",
  "key29": "26XnvYg5R8WoqxVirKJHJ89YtrgYn2UNA6qP9vTnv6eorgbdecPiia9wSRds5BwUr8X2yLsAdj7fjUNJ1VKokJCY",
  "key30": "61Wh9upfVaeNLb3g41YKdkBALucz9kyYrkeyLQyevqGqqn7XLeb8t6bBzWPNXuY6FU6kauiQrJSDdr2SYkBUivZq",
  "key31": "2PeMDAzRerizgubeexqtv6QFA72SMJVD3K6s2u8DndAMQDzWoXi4bNyBx5S3yXBXfwgodyCSU7F9t2NLWW9ZqjVN",
  "key32": "jUDX1bGAKwNVB8vKtw7jGdzWQnHHPhcmKoW1GxNYjb3a7TBaxLSvwZEyW9nnUTHsBuNoGMaAGmbaHYoAHaVevTF",
  "key33": "tPjzSbuab9EuoR4TDUfnursZRwRrVAcvcSUS6SLbzBkhFUBf8Wu9sVxU2TkrbcwjaDsKfCHmceviDiM1zQC8CsY",
  "key34": "3K9MyB9mCc9GztmCdQxgPjREVjvC9Tf6TojPVREDpCYCsjWAevUnsGuxnx6FUJg7pPnUn2MtVt5d2j1CP4fRBxis",
  "key35": "2GSkkmNVAzWzG87XMMCRqN9VZyVAP5cQUN48htJZ6h7SdRKcPvmZ3VPXrZztJhHkXmpMsMct3mP74zsY3PL3Aapi",
  "key36": "5w7idbrF17JsYow8jTzTPEpFuMUbnmaGGbQ1PfY4HXCFnzZfKa2KAjUFjikSp4278bUy8RuAUdx99Zs3XCaUUUkp",
  "key37": "34WLE3DRVmu1jhRRYVCrLv8rRGv9TqTaWaa3YvdyRtePVCWBDkeTdivterw5r1UVnrqzTETy3BcfZPxAMYaovXDs",
  "key38": "3JRuca5Gi1eTrerPtdkMQDCyB8C637B5fcHA68isv9FK2wwSWo9QLBYC2jJi1ptARTxzua16Ks914WwTTukii64i",
  "key39": "CKthRWVtzz1kj7LtD8St9RseUZRn4Ni67wyJ5FJ6V8XvZPMSNLqj7WsFsmQehZXxWUfgaJyQ46kHTJLMoWpdV32",
  "key40": "2J2yrCH6xX3i4QCG6UUWewygru6rrYXsaWY1aeWnbXtmiSnDLz5fdgFRfDjzKWPL1JeqpVW1mZFqCoB73o8cRwBR",
  "key41": "5kbVQ8qbMPDBtskQS2jU8Np9PttQF6bVqBaqbqm5QpNsMitzmoJm48n3eQ9wKpEobfZ637m6HCqPLNsRAyUAmUg7",
  "key42": "5rfUkWzeKi2JsbSjLn6MYDzaJJBeTCfM487MhUr2rHPDvB5tGVpQsmsjcGGu2cCs3zPDHi3esoAcFvzASP4LmfRn",
  "key43": "4nKo7KqvCQqe17ksdTF7NwG9WSMB9zmSNkFEnFKyyH9wV7V6v76CdZRm5YWeiPiGuKxnQN7PNvRLANp8vUqdTiiY",
  "key44": "ZizmhxYHcdHPJLVpogmfJdsVLfpnMFSW27fn4MyRcotFr4cvQtuMyQVGYD4zEdGrbiAdj3WKmqVpJzPDPMc5jsf",
  "key45": "sbLQukSUVWXZeZxYhFhqsBGHFLK2LsxRrVbnF4818SVPupczyKKKvzYpCwuvkpaFbXfENBCd3xLtDZtZzopm9uf"
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
