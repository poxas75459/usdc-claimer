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
    "3AcQ3gyPtBCnyCWXFqtbqUnWrVVP8pa3HNFMx4dVj9rwV7oppmHrRX5Wv5uHgxEAoUrZCMoSfwbRqNYNurHxjDdE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64UkFeQrDchm7BDprXWw6SJshCmsLp3U2DHezA2cQjZM1SSbG1bQGtZF1o5K3zgnNNy34BXvFrof4x5jYcnwdwLb",
  "key1": "3NXR85Gkddc6jjnWMM5gAXrUWMLRRn59wqjY66FCS7nUWvbekcWtjsgHXRMriRzE3ikzWKnahQiYmWvw9DKcxB7e",
  "key2": "65v62knwWs2Sgbw1H3v3qbem9C14e5s92ejkE2Q45cb4YjA41ysAYy8Br2jY7TDPM5u4BrhHJqTj6VaLpgUp8En4",
  "key3": "4hZyWoLHtijp8njN6aprc8GGQkot7fErmH5959SwwjR7nScLKiWsf3DkjPbkJx8KMqnwUMH46ETgPe4uYYWcKn4Q",
  "key4": "4HrJ1EtU7Vq1JeMBVeU9VnBHb3hx28vByxaf2WkQh1s1DC3apKptS2sKgrsygdxWL17uv5yB2Sq5fxjjU1tWAD4",
  "key5": "4AsF1qvKHy5Mygwsjct1KtSRShDhmmT2NytCJQcjAdQ4r4Cq8HFJEFjLGDkGXAAcfT5rNsmVfciAfJAFFGJYRC47",
  "key6": "3eDgQLqRuK3UQypZTxekUQraN6PYm3BWSN7ckUQ2aCCHnh5GLiHPKxJsSAM6zAWkJa7N6jfFS8eSonSK79utiHfa",
  "key7": "5Vbi4nbapUGwUNaMRXoCq2joPHw6jYP7Mev7ahjBNVaQKBieLLByZh6Q5tesbEy38CSPPgHzo23akdmaLDuKaopy",
  "key8": "jWbM6MTbZefLUTMRxyvcPovKgPmQBjW8p97XHRBUkSYPcHjngPS1qAnp7mVnsTonCpSFoehhhuW3oyogVFgR1dZ",
  "key9": "V5pi92xBWTewQuFR36k33v3L2b2szjieUHThuV9V9Phr2fWiP8tzZB6QWQr8KgY3bKMKHy5eysM6spHpF5XxkdG",
  "key10": "Sgd1HY1dreDzVrtoJboG4vRMw3bx3ZiDKi14mHejstja5dWWdkrjJBRLhtPEraEMmWtzm85cWGwmcFzf3N3wptf",
  "key11": "2UaqW8VZSS18XrCXd1s95yS195N92chc5m2vKXGxuqxkiifTuLKwJiydnEs3QjwCUkqP1LQafJFSuLpr5MXd1ww9",
  "key12": "3mMaf2JdPrQTdYFBJEJuWUsrMQbU2jEkGXnidubGYVGH6jSpFaPukAucv7YpEcGMpBEAqLTxQ2qto46uUTkRUZY",
  "key13": "3yJPDEdTzn8ZwC4yzL1fsxFYDQf9LM2iuqAdT7D3q7QAkQ8mVqz2RMphrHuR7xyVYtWeYqkNxytFyRyAtWkwawnM",
  "key14": "4VUFG6xwgxh2Q1VV8A5DrjfSRBVKqkQy92sevM3RXe9nCpzpJvNhpgMnZ1Qbvj17J33HiHntq1pHfNrNHi9SeMWj",
  "key15": "ektdtDSzFvX54URwNTmc3Ktzcz3y57QoRdo4eQiSNvSACcy1kx2vft9ypKiTuXegg7Y9kbqu5cE9cAwXNNTKBrA",
  "key16": "2fzsZtsLC5WmSG3RyUNjXgGcg3g2TUFr941JrX5kcHqJyFB7JfuhoANunZLjkXVrjR6d78VhADssXhJSKY4bBSyG",
  "key17": "4fwvWnxoZ4qYhm3VqiSKxnA5rZedE1a1Siy1wRrUhuviiJJp9zCjSVMvMfyFzVnv28PVBcm3S5nSiuBCZ6XXgquA",
  "key18": "5f4pMKSHyQHoXbzEFnQ9MNPctQmUgwNq9R7cWrPwggXXrwceAf8BnDpAVNvvJHCZYTyH7cCeCALoaJbvM4uTfQtT",
  "key19": "un1wq4nkmuSbi9XTFGuj285YPSyfR3pY3qp7Pi4jV5tuFVgBjWvNnQ1wiZgdwSY1CkskfZCAEiUtZy6TmaT5mbd",
  "key20": "5GPeq1Apsuxth2XqeobAHCzL8eScKhd5STEdsCNtH1bgnUknTqqbLCY6HujftTKTr6es2xsST8Q5xDbdsMhVZ4Fr",
  "key21": "4FpbZDRbDdHm2HjRC3gLhYiEDULvHv9TwAReeHeMUQWrAyqo8xogYL6gp3GqHTxi8n3UTwojn8fus7gkwuggABJz",
  "key22": "37FZGxmNCvWiGWT5FygJehtL657uiuJS67Lzxv96rf3kuPv8QnoXDnbJxy1EbeGU28TZm9fsy7udw5pttDwHnPQk",
  "key23": "4zMUXnGF9QW1UkwW9phnsuxkHwiCWMqcKQfM9dHreRobrVjaJyxnGWiTrzQSK8TA8Bb3x9PgL54aCmXeFDpov4Fm",
  "key24": "3wHGnTAEoJ3UNCbjRbsyaYZmFrTGyT59525HttmG2mGDVkvgPeyUAKDZyGZkyy8wFZgLphTp8BJHkGLBSLh7k18J",
  "key25": "5bZSYKzLZcYngZ2xAYqBB3VW4oTfkLctQufFgeagzPcmmCWVCsQa3fzDo1Q4XnvsNLxfMqskhp6kM18ZtgfCrr81",
  "key26": "8PoayakTKBhYjiuCjttkKxtiPQD1BJ4GPgHrirUMFF48egcv2DZy4PToZoi757rFPidL3sb4b9U6uUw844VS5Gh",
  "key27": "2n4E5RCunDkjVKEtDE4mZGD4XmcQbJqyHigZgqvEWPraXkfqoX2o8QAay7BF7Xv7H8fy1gZUs4kPsSDeBvoRRWKw",
  "key28": "4ucLa1ReHAeD4C4HJhLaAibuaKHtVZMj5rCLGYaW85yj9xsELEFjZy9rxxH6nL1QwjUrwFK2ePY5nXHGDC2XwzBC",
  "key29": "4vA7SJiAXB3Pm8UA1WZsbUARcthx6ZxmuRsWgtAga8jwfFCEtNcZphWtyUjQm9Sextg4Zu21PGecSvfsxWGtMGuz",
  "key30": "5bHGftKKGyEeUWeCFLjmyocnzP5HJKWVoHvQqMsvxpX5QkozaaB7bBtBgcU6U8DaMSxMkQegvicKwASpW3ZMSYzc",
  "key31": "42KtbQe2E62ceNEuPqU6pn2MYe67gi9inJaeBBsUn4E4fUzRibMNb1QfCqY5xw31FFuvcvKEUrvvL6btPMyYGVCV",
  "key32": "4ot9HsTFnLtvrfRHUV5AgDK68xyehLrGtChoCcFmdqKPvLKRjj8EtBgbeqgUhr6GmxodZZqRSrxahsUuhwvr4cqN",
  "key33": "2WF5ELvfSF12esJhTzFU1mrTiW2mEcjPhWnE5wkMqanVnXQc12rcSy4NnJfuL6PGkBB6iJkdLY7oCGRz65FzgKxe",
  "key34": "JUN3M7jF1qzoF55cMWmCH6JFF555CeSe6CXP7W26j2Fn22ezwxhUVR3HJibX5EPoRcX7q7EuXAoZmzCsoZqEBHo",
  "key35": "51HUCCuMQpPRQFLPiercaDQRsrvRQCPeMwCG3UCEFxzVyJh3Yc7AcsJzPWRjRAcciviEaogHHdXUhVyHbLrH8RiX",
  "key36": "B15zPhD8cbGpjx5VnSgXG8uzCdcMVJv2Yq1iWkPqab8C1vJe6wf41cnDDembNCHDkKJo2T1nStrtnrHSgYYVwWj",
  "key37": "3DKjgQX8CF7yHTuPcNhpdYURmniAdWYPwT83H5Eky4LshvZN416Cp46eHc1YjLLifSMshdcxXhzxekfP8mj6rcWN"
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
