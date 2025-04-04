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
    "4Qvyqje91ThTifxpyAfUreUxSeodDHAZTayTEtfDbLhZNPfFNuXbDinqi9EoAn2kEaZV255Mb3sYrqGms2h4tZaJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t78xazka58cAAY1QDeDdVkWLWvidVFRHUyTHdD74HCfEq3QejiLBjuQJ9RQJpBFi37VJzNFpKpBL2ginwaLttfG",
  "key1": "2a3ZQNjvTsscV5ZhehpqnqCvd9acV5AU11RRPgT9U6owdNAYkXPoXmcvQqxFMdTxo6WJRJ1naowP7fUMnrTr882J",
  "key2": "5Xt3kMD1htCkfqwpn69vp2h4gGn7efabwksUiz3EiEX2bmzfg3m4dTmEQhSwbpSCiBWaqgfmcRExi3JaePmhUqRU",
  "key3": "eogoyC9uBnsewoZgh4fLDbrokhqRfbiEvJxJNfTcj6s2eBp91REsosueda3pL75gX1UAnVAZc1QMfzwJNv2P9E7",
  "key4": "46tKt2HdeN5wJcXbUQsZeBDDhHxTtUsZu3zXRJMjrMHo4wqMipTivc8N5L7QStmrzYhwFsqtXWWGpoSk1HsQ8CEM",
  "key5": "4F2eEJ3sTHPrVxS8Jhe1KaJqK4cg9wz36qgkZrTyURWYM4WXL3t2C5PRsay2F4Z5QjH1v93Rhps1r3f2U41LSZK4",
  "key6": "4UjSDpVWPX8fTEAh9vDtWrJrQF5eC6mANZ75m2fEGNh1k6g4kMpKGPw8gz3UQ7nsyhdH3JsoVunUND9t94atghWd",
  "key7": "52KH9XVDvsNxaM3R8e3v8TtsUW2UtCmaEnAkkTvKamVnck57ZjZK5cdyADXHuQ89KFnJqs5zLdw78knSokWxFLZT",
  "key8": "4sk4JpuWazreYqzvVUzbPUtTcA9UxdBLvRipijroLku3cyDRT4VEKhQKd3YQw2kDWqm3qob6s5hmdUJ8JCicr7MZ",
  "key9": "Dr2p6tqWooJQXFyNCgRw78KVBVtkGdJ3iTgAajgRmXEcwBzECW9D4DixahtpsFdB8YYeGaRHLiZAkBudaeA7wcP",
  "key10": "41Sn7Q615xgbwG9FhgxygfDS1HfJiwp3CV5PcZ7obD7orS7jrjs6QDzU8UEov1ZdxcXkoufFiznydDyTaixHC9UP",
  "key11": "2FgJ95iLkC78k9R1P9GLGPagk2VZo7CtavBSY91heVPtuSBJeFgUk5G8ZQYsbVXngydtrYtZcNovSQX7PwsPDkRe",
  "key12": "2h3JsAy17MULDByqT5FPRURJC3S4Dy3W9d8jXrG2f9osdbhMdorygVcrfbhuGqpTgNpZVaomDLryCcZDGiT33mwa",
  "key13": "2sUpa3UNccxmgiyPjr3LB32r1sG5MWizwmjWw5TxTmvTranqTJJyC8BRDcMpUYFudoqke49bLfxKU328ZRxv886e",
  "key14": "4eqL2gtVcq2DhEreiNrJT6q3ZVsqYNvZeNGiEYXq1tRgVfeWcbkkSgCCNArvKRjpyQdPSYAQMdLTR6w7qipcCk88",
  "key15": "FHNfk3dLikxGWfcU4NzLXdDbNbJKQDGNuknLmYCS8ezn6EdjViv63hu1JHkZbBr7iC4KBvBExRZX6FVnX9Q6nxh",
  "key16": "4KXR2MPNdpokPUvRWJwYLPo4ZcFtSaUw56SA15yuFbuLsdA1Bo9hRkL42gEAnJvtphqqaNXkwF6zxYbd3u39dYuE",
  "key17": "6QcK2iSrZgXcLbZjNqzSNoqwJCshEsrofSGx5aUucJFKte5k8UfmEXt9CZky1MreCynuBq1kJjzesbN1HJScQEL",
  "key18": "5TvEDw2bNJHmdjuCJADWPrUA32e2tjpi7bLfahsxZZnyHYpTXKVJUE5VbzXqKLU1nuyxSpbgU6RmANzJZEjFriLu",
  "key19": "3J1Va75qW8kyPwLSR31TP61cKtsnz9wpXENp3PJZViSHb7mJTEHq6wh9JMQr5E9A7bF2JH9aCLS31g2SptyERVvU",
  "key20": "5fGRs6RxG5VkLMhkvE8Lcockis2UaaxQYcwqnJQXfTKXG8TqBKf6oGmKcL19ieHbHTqsJKyCQoNp2QU4zoVtcmKY",
  "key21": "2ofSTq8krFzSgiY7hNty9RXMVkQCiYoV2ibwqfxVA3rZ7xxk5CfFP9jQS8Xxkh85KigmmjresNeFgipjgKZijSGT",
  "key22": "5wDj5UCa2RSttzLy3CjhyajLQeBxhoQNVBqEiGKwdSDuG1K3jaQKvDpcSsZixZM38WowJXziEJevZRod8vN4gaV9",
  "key23": "e9iiuxUkRz4sdyxYU7Gq8GvvJSymnoGkcaK2PN49ugbD1GVf65VgmmhMxhEHrsnS4ixk93QUT3jC7KAjbkEaCo6",
  "key24": "3s7GpGR79GD643aXSzaB1a6ckgrKYoyXj62z7acCJDbaZTPj1u7bbVzzaWBRaav74ypXkB66EVTP8SNCQEpaz44b",
  "key25": "UavybmgkpswPi4Qqh9f6UaM7FAfKuNFLjth5jZnusHsnA9Xb9TEWvqR1g7He1bERPtaddwJUXiN2v4chLJ4xQjb",
  "key26": "4CBTNLBQVbF5H3wgMCeazmVwPjobzeKXyUomcHeM7zqx3UpXEhMLEDN897AjmGyHP63k3KnHonP8nppyC5rsdpfS",
  "key27": "3odVy1rgQwRwrt1TJNi5mkUQDRPpfh4Ycn2cvEpC3BGLHTuv2i6D1gLYssx9tJAHLcybJQDQABi8cwAByFX65KkX",
  "key28": "42XYLvP9sPAucw5BpjT3R6H7uKXWNemcgCGYZcN4V8MTwru54PPLteTkPRFUFhdjjBv683fJC8VNE6JZm6RALpYy",
  "key29": "4nWrUAEr8SKKybiXesNXhij8WtddffU2fKiP9VTQzC8TLFavKoonrm9DYcaCNNgXkcta7ZnwPQiStyzNeaGFhUBG",
  "key30": "2P9ZserVgXGLZZRxwwty9RNJFi3yomG1nSXGXTYksKjkdun25SQrZKemboeejx14kZJqqC7nvDoKbrxfADc2vW8v"
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
