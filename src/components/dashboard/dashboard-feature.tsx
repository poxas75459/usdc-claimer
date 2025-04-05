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
    "3kA3EKjbydPDwfkvWvTUbhfUQo3wzo9MFVSUomcfG9FccrBkP9o1a5zTyXdpbLfLXw22L4hGUjY6DqZ6rMVWviKq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KteVC5mMXd41nanmhYxVcB6ozstWQCb96XxcGJvQUf3d7s422Cc4WKSqoMDbEoXrkps9AbjcU3sV3UeDbBFiYnS",
  "key1": "2dbPjwe3oPKFpho7GzScEsbArNL4oxG7A17f4hz4GLAhLYipr6zy19TEVSBWpmeXnNj6PjHkRA3QxTa8g8szsWvS",
  "key2": "ceox52i291AmMgiBhVFo2zkvL6T9jtKwpXEJQ9NYsdgUt6fUDg2tpo4kGqcRadAoDfZ1Y47J3GhyNhaxgD6tpV8",
  "key3": "5URbxyYpbD4K9bTwy6KJqQVxA7jGcTdRrRyp48d1q7RbWDBmCEBDbptP6zexruyxgrec4iJpcsUsoABUgYqfyakU",
  "key4": "3TsgifTK9qA91Zwo3z9DDvDSKhngdfbsdG2X3mSNJwpmSzp63gMzHvoKeTFVrsN9k5z9vYbSLmGCVLKARw8ZHqkd",
  "key5": "5x5rmftHzQA6XYv1eiQXZXnNEK5gsNo3cDWVpiU3cTefPhDxAyzwAJuFWcMDma2zuEi8Fbdnjv5JtxCUuxA1b6Q2",
  "key6": "Wyz8YaPLC4gMz8wbjZcVXsgnE8YrFf1rwUFZ5iPeNiKZqFeHr4E2tvzBLutaPZ3Bg7pm2xHxZs5ntWqWhQMeBEb",
  "key7": "vE1WdRhiTFFpUNPNegmHTUTeKvBjJNc5effM92UQ8h2JuxFPPFXwTHijaqhqP8fQQ3QEPDMSSy5LpFzAGMmS2p1",
  "key8": "2tnakyyfWLyMDQsSThrfwdDLfscTvzqFAxVmQhZ7y3xfSELVC3kpV31TZxYcxNfHfQxpQnos8NAiNtkToPgxTT1N",
  "key9": "4nbDY6K7THbArV9iKmUTgVBNtQJ55kweWv6e6bVnaJ9UFUbZhM6tdX7b1SBgtr26Poi2AvFMPJYifvyZoLNzpuwX",
  "key10": "4nVjS7QmdXrkCdxMDoRHtx8NN8e3ssJuxYqcntMY9yFWWDUcUwtqP498BNf2jD39d5zUKFF3SquUZababKEgoGD1",
  "key11": "eJmKBjX3yhGL4Q23xhzi89nJNve54N29tuzvETPD1CYrqneFRXgpnpXp4xMoemxugKq8tHDW43S4gGR5M1fkbrn",
  "key12": "2ougKotPvNBtRwgb66oXspwm2BFPtsMSe3WzebN8eacop1o1fL2Eh9WUHoJ35mARiYfffqrjAer7R71hSR3nW3Lr",
  "key13": "3yKCEwZDPc6VwYkjbgYRXksYSUydE7mzmPpTbzE4UDGLPXDvNNTebp6Qyx5jiS7kTLfPxQDbbMJipKuy32UhdWvk",
  "key14": "3U1asCwrSV4HuEmrGo9RcjYCdoo94inivueTdVp2StAQPzaK1dWQTVAS8uEwpBzWyRfgkyywM2ApyqfVwY5gNDs1",
  "key15": "2SM68yCoMj2FfdQ94UdD8WJB6JfrtSsPc48Cd6u79R6Z92TTavZiivgiNcuozbfZwv4h3Xj17ve4S1vYhWWbKfzf",
  "key16": "2QXunkr1TAXStgshNEWX9uqSbJ323kFsMPgWLj5y5XgB8mWy9G26S5bLNYmA5XMJ7Ex8mTGrmkDoywZDSMfdDzBW",
  "key17": "2YGQET5wSHnTtScJpATtnDrCvtthx1c3qTHq6ghHtVTjm2MR9QunGcu5QcDVz9Yx7q3anYqnxihh2QwsbT7jJT2u",
  "key18": "kygfuVyWAjUibFSpNZrKFAaqUwWQmRWbayWThgBTXUEbU5uhWNjGQ4Zd2KJEEY8XFHEqTZUWT1Y9o42XythNMW1",
  "key19": "f346wQLgRkjiysqcPGQHroNGc9epziex9cT8Y8BYsi947Fi3tju2uSBtXhCKe2jie53pGkSnVBM6qsuhqC9gt9m",
  "key20": "4jkw8s6XK8N7WospBxWNuVYhsUWS3cSShZTHbotxwvyJ2vSCK7cbLGTDzz1CNrjmkij44TbcDo7TNEK8pLAsyvba",
  "key21": "2Y6ZBfZnzSoLwRYqbov3KUHrbDWp68GSEekVAcxQxKS3yd1cFSAB5QBqbZKjow5qzQ5xFbnKWu9qBvqj5bdr1q81",
  "key22": "Lw1PhLjic5uSbTxw8jamjJo9wwEhSg4mEX2xuCHuJA9Qy4vyFxyCSrGNMqxcobsR2MhfXb8TcGqu9B94YCwbsGi",
  "key23": "5H8KjDY85pZDrxh7WryLbZjnUSwqjQjggnJqwissHaTqUgfbddrL2RmfUYTZBTThCzEqvVYsNGeSuUXmCKo8RrQ7",
  "key24": "5BPi9pZFmshMipMQeMyoKFLdBRU9H8MizkgyneiGidZR65JxnfCV5gqm6PtUo4R4rVLYTH37VGNkBa1kLEFwHXW9",
  "key25": "Lfid3pxEA2GvBx5PzoMVEL7ewukmF9R5KEVPC9oAGEs1n1Km7kmfCbpNFgpz3DdQobY5rFNyJPcvucGt6HrdUdj",
  "key26": "KUJYoC3WhTGJWXhC3zebcyHRfr4v56AmBngmqZyKRkAprh4ARgqbHLKwwcQvfC158RwHJcnGCMkKVNq6WPeEG7x",
  "key27": "3SJTuWBJSMgF6fVR1e2M4ncUE1CGubTzzDFhWp1g8fguht3K3XxZsPWXLES2dAbBUxZ2Rf8VUFbHKnnoqMd3bEg6",
  "key28": "5q1j1ydFMdoL5srC4siJcSr9vry93hJSRjtTuP88qVU4dMTYYP1W1hWUQbhMZbv8L6VHVJsGEK9FymWphZFoULWB",
  "key29": "2pwvnhKAwh4AbEhAPpVJMWqchkwgMz5DxRi77vtWrLBJFxPu2viwhVK6e2JmQw3P23ETQcavMnC8Y3FTgM8nXTkR"
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
