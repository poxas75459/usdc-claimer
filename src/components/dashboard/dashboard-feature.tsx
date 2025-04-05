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
    "5x85HorrjqEJvL3P83DEMjednDHVyQnAwLWqhSh3MyPJjEJUsUXSDCN3Ye4iQvhwpQWpsg9TsyvCCHXHfQxNFDSn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PxSPP7srKpzpErQoCJpnwYU6rEs1dRqoDdC43GXvoFMav2vEuTcZ9i245wsB97RkMGErBrFPr9xBzwceqkRvY91",
  "key1": "4reCjUdqtLQWXDSjXgWTeYbnpmMGvxQAbUoAJS67FD46wnwcY1K18MNRvov1dvgP4cksMuGyJ1mNUUtre97DC4cg",
  "key2": "3tTGVXThFe2uEVRw48ArDqP1fzAFoMoAuf9rKhi3VLkYse2JfhWHefwPXwNMMNvuTay2Cmd6e3BGG5EpnwsLpQsA",
  "key3": "3Egid5CYBZUutsUQRWyZkDKfMaKappprX83b5KyVhDgSomVUYVRa45hygiyUqXmiettMKJXyqUxjEyLHgER8BhL4",
  "key4": "5hLFqkdgbjdGcuKGG8gK5Lj8QgfAqcbLnRBvm95QnocJAvsy1JxH6iejYeETrJQ29zXS7AXTMS6K7vogWWFYdPCE",
  "key5": "4BhhwMwTiTM8NTniMNDF7B1VLLXtzgMEYBMZ8XAb2CXtX9bcxD7QKMcw77iinztDqobACPLbafpyTA4VVn7MoJEa",
  "key6": "2szye1w71CiwRM7oENFcpwhf18sFyjX86Q8UbMHNcT75WKEoCD6ZgFbzT5bQaCp4qaByEDDgWWYmhXuz45eTbDQX",
  "key7": "2LdH5UqHPqke4NmVknVXXnJGHchB6zHAZh5hYPBWNCaGRjekpTJvkC8Sw5TFRGgWb3gqS2H4GTnUtvQgMLbCbu6H",
  "key8": "QZxnM254hRGpmnK6uiKUWTPTrgQkVu3fiVzDBCkitLDw2zeynuScTEqhRoMRZPhf45eCZ6uQnCZS1ZVn4Q6f2Tz",
  "key9": "23AVcZNMREAAFqxC748P1ZctDHpe4dzeEfmaJoLKb3aaRNeaFsvMQ3h3gMePtBCTYrP9NQjJAAaE7D7QbWxx6RhW",
  "key10": "2PiGnUumfcpYHJgnokZs64TGxhJUvsqBqwUabF8UaNmyrVnencdxs9VLzNig45UpvxMqmpRrdeZ9yB6AmdsUiZmg",
  "key11": "3qW3WLepKx5rZ9s26S5WszWX77bkgn1cjgGAada8ahpfWebLoNr2Kceci8kxtCpaQ8U47KRmFcoRL5m48K1UCHFy",
  "key12": "42R4TavD5WTbsGYdEPwQA5F4yexRG77E3hyyt3GFQyvUv4L75UR6S3V5EKUqpkaa8dC4hHBqvEu365W3NEpxGBCQ",
  "key13": "63NNvzSMHza8jsXgNemirkBaKcmstuDjwb2ARZ7AP14WcycSG9agtbgCKaeU4gthH5RtPS2ta4gboK8A68wWfS1H",
  "key14": "2ycv3PkoqBaaLkEzVj6vyNKN7DgvSZvirwGv35SJjiXKqugXm9qQB5imyoKCPyyrFzbUyvMqGz6j983ErMm24fyB",
  "key15": "8zd6GGR2q96kX86Rv2Svp3AjFH9EAXUHAUbxWLt77Gs8PaGeuBGKF7EWcpAhZ94FxXtRNQTwbCdtqJRRU4w6how",
  "key16": "5hz3FJzzhF8QKvjq2gE3bdweDmKFPWZPQsdDr381qXUwiN3KnE7haDv9DcD2vLLuoi1s4G3T6yzN9mET3eKKQEsM",
  "key17": "4F8PZJLEBEquHuxsz4MizArxJ6xKAJsm74BstZf7DDQfsmtMuM8drWsJEn1Ej1o2YkiNvQcTZEvoirGrgQTkLRCP",
  "key18": "55jqZgXVD3kTT8Pn8FLgkKQfLpC5qNLwj3C42y6MJQMcjeTo6duebsUWgzjFLHzUfULqK1KCcbM1woFZFkQJsoMz",
  "key19": "3H2rvhLgnUN7CDRi1Y134hnrort1wtg59KNRLjRoUiRxAv94ckdFMmX4eSiHYXWw7SgavsdzqvW3mgfdRwTQRrCM",
  "key20": "4xhezmMTXJMpoyiFNgUx84esjVKTgG8GHWG9cCaGpKHyDMYJj2BiQVNS4J5hPDuCkordTuEnRAM1TE48gZ5s6Z33",
  "key21": "4rCYvBCKVMCFRe2Mrup9jDecfatLqVRuD33v8srZeRgP7tM5x67jmn1Bqf1EjyGNENcYGnbVipanGepAQXG4263L",
  "key22": "3kFL4sq1PCJM6UijHrMZuWw2LZxP1x5QDXr7VoF4cHmWhEKynQg1TN4SYqakBoWPVaS8zGVgY74K1fPrAjDRXiHQ",
  "key23": "5B3uALSmD2eKsdsgj6cWShU4fHCpJhKfPWp1LUy36F7KtWQkW5ihRuD5N2wdHutF7RoVqYp3r4Zr2FAzicg6nHGe",
  "key24": "2EWbTeX9L3y3v6FtksfmP9RsfWUNFAE8pr9ciqYJZEEhT5mBCbhNT8zmWX2H2A1ex5iYjQNFSHHCRpXQrv1ZK4ZV",
  "key25": "4k7QeMQ6kxo9nZCRBJJpxo12gPRFq2o9fuyNSUvafsTuFtBSe8GfzzC16bCvQN6NDCHRvhnkKnXMZFvD1ezBiGVS",
  "key26": "3HKddUm2SQR2YPiYsqFk4ddfbArHv8T1ccqBD6sVJ1ttnrmZMvumygAcCcvnVFLXr39GT963Q9DZMnd1TwsewXDw"
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
