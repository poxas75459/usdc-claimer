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
    "zm99LMDgDANXZ91288nX3HyvkgHk3qMsCiXc4iKHfqp9uV2YAg4EJnJPBt4XSpYZBu3ybbKZAsYakvMhSKvCLSj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L4BW5ixp6tyPq5MKiQpoVMRRTj231FdwL9pcYq59HY9GVBUjo6xoykstb76ovT37zQdRLuKLmzxvbSthbABPvHk",
  "key1": "34hq9wdV9wdva8WgRGCe4X587Fq9coXmZGLjGV9zCUbQEZR3XsB2nvcm7N3nvjQWZznHxhaoPYm71HXvZA5Vz1bB",
  "key2": "VBSGBnDrLKm37GSUe6c17vMPMCBQBhkw4jF2586nMQ6a6ifgnGZTdroropmZd2Hn1v15b226SMQy7cvnY4GAfa5",
  "key3": "3sbvHAchy9eJjpge1fVdHn1gApbSvFXSoVC8LEdBjNLXYenEbQp6D3PiMaCRPyuoqixan6iCpyGUH7NDiUYmTtRM",
  "key4": "46SXKtpJXXQ96bNyuSfDfA6vUJb1uEd84mYRLsMwcmM3xivC5AjKCC3P6X8mncXQRbfN6UmLBDxMgECBTzBd8v6",
  "key5": "62Qy5tsRM5YE5N3r1pThkMfLjDyu23nXCreZmSfbHBRbMLrACBVsprKD8CvuAAsFgc1wbtJkVJfj115zHKV2K4Vd",
  "key6": "317DW9gqafn4QzbW4amA7JUdJaAPXwbP79d3pnwEowhzmdfPRD78bFQxdcL2HnPpeBLUTwwGWo23gdKVDhhCT68h",
  "key7": "3c8aq5hhD9pUspsxj4M6NjLYM2JcjmmfDqtPCfFgxGN1N8r5MForNmyw3s4UxFtXTtUq9aVf3qYNqgrBtHBHwgcv",
  "key8": "5PMnU7RieEnLh1eqWNHMqMLUKbhzVxqykd7CCnBffWXsmTEFPYR8TunXjx8fJ9Qitw9VaLtiMdLPE8UBfykg4bCP",
  "key9": "58riYKeXBGVHz26tPUcHK68KBRqkRwku6WRovXbPcbnp3zBVtQqEb7Z6PHToMAHzfCmhdcWCZ5guJPL6B42upe1K",
  "key10": "4DArcVyckNk5QQGyRH24SNuv9eA6dgWYh1oNNVEN46gD8bCkCT6iYxVw377ApZ2WRmuT9ozF6Nr463fAmXucoDLD",
  "key11": "Phs6mqWAKtKy2T9g4u6o2USUrLByfJdS3XxucD3aMDpGNkTnf2vmJLTJ5S8RQ31LFJtToTFVWSeK2ZqwRjBRGN8",
  "key12": "2oy8fextJUd5LV5u2TQTssEeBdaXyztLzzRRXjmsUyCFm1FMYsCkK755thMwMYJYUL4Kk5mGrQXRwLbxeH1JZpix",
  "key13": "LXX9baUCA71TY1QzGuGRM3ZXoEULgJAJtLYL4BJrZCJE5aMriNtC4UBs2BsqdJAW6EK97wLc4eAAQLarMKrDV4k",
  "key14": "kEXafU3KUbaj9CW4xfCrZ4bB9sYKmX9WiBLA9QXZhbTc3uHFTTC7EHTV8HUv892LrhmH7Y8SnbgsjTcQUZGhaSY",
  "key15": "26S9QsEW4nZTHYKerENCHCetjcenxkZ5bHQcaFhoJdfqDBDkqRtf4uThwhawtZZNjfw8KrHm8A7CBu2eq6zfazg5",
  "key16": "3qo4DcugbJpo3HG1DAV43oz9TEsaV5ZKUymKEyaLqssEc41H3jw1zMscJ8TvQA9HqB6Jy69Tk3DwYsoscvRbXhzd",
  "key17": "FyfVaid6xz7EqJHkpmNAEnVDbR7pWuPDjWYduj7qTAnkNZWeEKbFDquCsSfEgdqoyzKUAbEvpDJ1Zz8MYhCdeiR",
  "key18": "5VQat4aA6zVNJrmUeUEucbfBuftP9kyD6aG8wdHufiJCBLRJa3i82Vd8jP9m6cKzcip6VRjrTfxDwCqcpm6HUTZ4",
  "key19": "2F6wganrYA8bFSjXVCR4ev8weGjkGRkGpgoFakhLBkQKLhQkN78ghQ62zvRcyuiPUGuxQxraTVGs6Z73DD6YKRxW",
  "key20": "4vP1HPSCHDftqSL9kDeSXGXHjdvMvDqBZvNheG9A7GX1jTLa2QwpSvGK2dm8BLdEJNvGbA4c7oECMgkK8N2vjL3a",
  "key21": "4unsffcgrnHwatkbDTTposuaa2baZHwPiAV7xG2pocZR5bMEtBy5HtqqS59DnN1DoKsft6w9SXf8WY62Vyr6KQhp",
  "key22": "2nonMdAZEUXd5NCBkRsniQumrf3K4BFUajZHDKDBJc1yfv6f5n9SWDZnUAcKhJoxKwJtU15npVdBdXXHbCL3qM6D",
  "key23": "4jKb7QB56XkzSYduchYG3fp7GHyLwQTWvr9UPeHmNFDsq5GkdX1dczLobcAA6Ws6QFhQMSyw3dB2BAaaNafmqT1Q",
  "key24": "2Cb8hG1izr69zHTcvvMiESmDsHqhaLkzvCUL7igGA1dZK5a72SzfDF1pw9rpHTTpmDcR2wv2RLD3YWniaqPkUE58",
  "key25": "4xxe7uSSJTQ2v8QBRRtotuJA7qWyZos58ugFhETEs7N5FZkhwmPRCKoCbE9a1B2rYXRx745FqM9vFqn9z2wA1LWL",
  "key26": "2eZ1cCXukBZZ9mCjAgcjotc32rCRwNKDPKpCAfbzvmkAWMFp1dh3Aktgw8Y7pU5Q3KcU1M5mvRW3LmQ3vyg6Fxza",
  "key27": "2Yx55MXqwZh8MyaCGgKtGz92feGz67qQV963D33iHxZ6anfZFgztA1Ss55yJSajBAFNFUzftC9gkbNUbMer4SFe6",
  "key28": "63ctF2a8xzpDJnv19xUuBDSYa6ow5YHs9B7NeMo1PoAPPFk4pkgnoUsVKcbAcYZbQSZtr78kCaFS3J5tMwvbL4Er",
  "key29": "2HenmaYeUN32feXEV7KrERr3KaXMQDtybLeXEuJeR3Uu4wpbPumzVNtMsTU3yCk78GeWdTbGrUMS7TgLpWzZDQ3V",
  "key30": "3vexVEotvxL5JLRiuqSt9b1TdEwRr82d8ifMERMnr2jVLchgQyhBjMQe6EqPa8ggkHrapTyjEvMQVnAeyZmExxEc",
  "key31": "3CQfzsVdE3y1XqbBuD9KhqMxbb5AAEVNpWwGrW5Me8SHUH34XT2DsJQvxSedqpcoLJF6vXhr6ijfirXvz8e1J88M",
  "key32": "xGhwidjPKeo1oq29h7JUnyFscWath5kbcGqXN2UtfZ46bBSwbs3yZahbf8B5YUYbeKcZaUPcmUxe98FggisohKa",
  "key33": "3FP9PJJAB2qwcJC7nd44grkTxCc1sx54z82wX2d3s3mRnkNQLdPii1xmFmdkp1vknyHKpZxmKqjzzaB68WUcg6UF",
  "key34": "517crFqUoTwL3nJ5d2VkRGShsMi3eghXq1AhkURcSTgi6ZvRf1yWBEcpGTqG2JwweCoBGCfXjRP6FHts2N6i7Zuy",
  "key35": "4ek1EfFKmfumUHVhkYVeziSRBXzBBRRVY6RtGaKZzCSDEx5tJX1FHpan4gNX1YArA1Gd4GupdaqzV7B8XoZ9fkPg",
  "key36": "2KGnNjmyt66mFMGTviuQZdpC1G1eBRrpMp2YZnSGRzd7Y6rMPt3FPKAPuMv5FBdkLToxpfnJaHZrPBsbGL446kAd",
  "key37": "57Z1ZLkqdt3dDKCcooLmE4DQu27Ze6Yf84GWau7AiXDzPAusw1XgagysKqdDzftgZyVzddVf2SaGh8ZL9g3fXXwj",
  "key38": "3Fc1JfHTfjHk234YiRfKv2a7y18zomxRC6W851tnJWnPGsP7Sq8bqTJC7DZz83sVu1X8WcV6KJy17dBciL1xn1A9",
  "key39": "2QfrD5UG14MpQ7ep1qzV8zZdp5xR1nfCT7SAcqWck9fDLWbW1weEgWaJJESFySiRVqC13fcambxJhwAZkiSfvdqd",
  "key40": "2DTk8FCCeFbyQu4QjctFAjraQYVpjXxjAxVXYPtcBvn2ZACz6eEMkcrivFFnjSmQY9X3rFK83MbTKUQKh2ENBRE5",
  "key41": "KnMkb54bd9m9de6ebGnFBudBRpjqnSUTjpQi6xGaWuzp6gW4Aa3d7uz5kzfA1b69PwezZYQLCHEicsSACv849UL",
  "key42": "4EFZzsfjBBhbgourzbbB3BQKcQEmJChHaGTxzetcbHv78TTd3T4wE2qKFXYu4fvJcvYrDxUaTXN9KjNFvZjyENps"
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
