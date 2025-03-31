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
    "Q1Gp2KUWzLfvXgKeA4wHfb8tUpfdFFYDaoA18oNJqoR82KMDUqCK6vPXdUwsnfjhbv22v2Hf6e3HE6R2drTYu26"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ks9RwnkpLDe8otpESS6QmGVHjcbBHnKACAsBMrAnUgFaEwBbzP5JX22W4MyR1Zw7estC5zES4WDtAy8evXWRek7",
  "key1": "29HN46dgSvp8GF9pUrCD88orUg9fiQMx5rPY8Ka7558qk3meZvFBBNziJUerEykMtjtJaT5xBUuTJLAgS7HVtub3",
  "key2": "jzZtYnkos562Che6fJ4NymCfmWEg6q4DP1bKEuzAZ6zrK6yWEu8q2n1MJ4itcGrcjDJUpy3rfym6koxhggT6pTu",
  "key3": "32mpUMhBPky7dNqNbUzoGfUScq9ykwAMPFWGxCmnWWLXvse96Vf4ZPumSC5NLwYaooNDX92Nu9ydqxzDds3shtQA",
  "key4": "2fy3GMiHoDkQUZSRru4NdPhFKxh6ESKAumrKgz1pTgHZX5ZTuH12wbMmrMosdwYURQ5Dn5GLCGsSyXnwKGpD65eh",
  "key5": "y2AgjeiDetAwsPJSE8h2xEi2i9bioTHMtLRYyHs64LPuKXjTTrMWNZDcgwjFthWQm5MwpRioc3e9FBMqDEZyV6g",
  "key6": "3XRmLkyNqF3NpvZJJBn46Wm9EbL52R9eBh6hs8tcEg5nqsYxbSnifAWW9ZjxgJvDF3ry42sqRt8PBBhtChPrv4aN",
  "key7": "4sfWPMyqgFzRDHDmm5yzLtJNExFqnMmQq7Jdfc2FPBHciVdJ5KNNwceYJeU1nfbLDioPcRaE7MB6dLnDwzL1CwV8",
  "key8": "5zjWRw4UufTnDFVB1Y1QnpukwzMQ2hJymL8DeY1zQ9bqduts84ZfTYBa3bzb3qiixddncEB9Uy3XLuj2LAo3rSwK",
  "key9": "5E1Sm5U242uSBszqpnAtcPtRsFbDpHeKcNHd4iXSBNRKAYZcPVkFB1BL1ztmXpDuqNMDFAmu68PbhbqZUYcy2RnV",
  "key10": "2CgezviTMpfLVCJBm5hWZPFjhBwMMBchyKCxCK4Cx3GF2ipwkMjDkgSsisocqH1tbhh1n1FjFBitgUUNqbvvng9f",
  "key11": "5GQqaH26omsWxdAkG3hVQsq3YXVTBTTpywDxNVE4FyoUNRso3b9V2m7YyodLix5TofioDwyiooUrhyeJiymVgxJv",
  "key12": "2pzwGWrVG8JenHDNjHqKgAgLojCiWqy3WQn9gYTipkvUNqkQWsGhsTJNdWgZgv8etzpTVJ68pnQCUifxXuA63RHm",
  "key13": "3Sc18zsu4yLaq1Ki8FGPDbHSYQaA9E4RxUvcD4z2JopXTZd4wp1VPtPn5o9QN8wFdc5Hv3UnrbPUCCJ1ZwUqFXUM",
  "key14": "4SZWGTZqMUNydzwfYmsgwa4EsihYqo4RNEJVQ5TxS3HUEbW1ot5GjRDBXGvxBSjiVKE5Mfxrkwk9LJ4s31q4jWpR",
  "key15": "5hkECtzEvrjiRBSXSYPQ6Va6hdSGyeyQQWWzQaB9EnfK1rFuRwnM7tQLdD3XHR7i7hU9685i4yB4vqjk9HpfaJxC",
  "key16": "2Qy9Mfdz1bkXfUvwFoo362rdKZc5ZeaYrUzqb1E8QfPsaKSfYLtaGqpYbTCEu84sWEQFDuY9FBGKucTwokgrr6vK",
  "key17": "52Fbrys514G9yZxMpMv66GvxFuoHBci91KqHAqzjFzNwaTmFK4TA4vXbxdXtcaqyExkSKLj22JoAo1Lx2v3vpGVE",
  "key18": "5sbVNQLMS1P7gKF73q9aHhyibE77CxeQcZ893UqCrPRkUFAQjGJgQJvHM9XN7S15LhhmaGcTcqD8bds4eB4zgbdG",
  "key19": "4VHSaPuL7niymgHuEnGV41Sv8DqhU2scZdYsfy3CPqqdAV6q3VfBBgeBtJtmXnyzWUYdAWkkuZWp2cuFcwj897Nj",
  "key20": "z3feZdxcXRMzf391yb58iYoW2ny1ySpkJtqEjhwSoxwdthdqm1CHmJ3JHxMre3TMDwYTtQJ3pBiorbnwb6nr3iW",
  "key21": "YkV8oYWGgHkKybtiUBQcwAnyxBoFkcDt1ubKtL4u63m7eTZL9RvRQ3drQCLJsqJZt7zsVMKB4DPX5pTft4dMZsM",
  "key22": "4RG6wCywJBtBFHp3xRBwtkVBLZov5MSbJFoFRMA4tfp4WPnKVjpTCLcArvN7V5caxvpzqqKDjsDvkjF8sZ8tue8",
  "key23": "3JRndRqacMdRUH9fjR2oM5kMM5631sUQkzrE4veXTfuZqZGcQStfuPGfxnFWHbD2erVtxAySqtdmbwza6zBaCaQa",
  "key24": "5Pw14aJSE53uBBZuPUvnr2qBtrWvg295KAaRSjApqU2gF44b455b4nvhrKxGqGCRokXFP5VWh1PeTGbG1YTh7iqd",
  "key25": "6P3YjRQ3msm8HUHF7tpvaBkFPV8g7FHi5HnrYC3jQL9BjbZM6Nx5n9cU1AmAb36nVBNKwZnassanAYFmEsnXsak",
  "key26": "2xmE8iVciFFcTpohe7xTahe9JogHxtEgYMy8FF2MzHMLGGF6yf9WbpEhpui5Ua2vcVc6DvwLNpTwAJmqN3x3WBFo",
  "key27": "43xTN9dC7UweRmZbm1UQmroNdqhxAbw21wzDJ5RcJaJtt58HDAHPAecZ82jnvGGXT5yDRQuzHsQS89HxUzBqP7Fn",
  "key28": "4cA6XfnSL8kihxFembEA7k8rkKFevsMi9vs6jXhnSFb1SWzK8joopmz6PzJx8zPCJSxkbDfbCN5yF2iPxPXWbC7b",
  "key29": "2vUKrcZT7LNFbU73E3abSvQPu6zWxaoDh2AtEeb3bdX6g9F3uSkC2vbVR6EciChj8kMCaMZxsrhMAXVgW9fJa3Ne",
  "key30": "43wSvbBM2rzvxCJfTKAm41qkPcFBtxqXx1g4JPKFRGHzX7Km8kBorg5mwD1Vt6bnDY9mjx9ceQFa4Ey7nXGAqSZa",
  "key31": "4n563PrsJB75Wkfk9uFP8YXiibub2mdwjXxnqHRSJgtuygxCuUH8Bu1HCxhPa1eYdHXmDCQhv5eB4qCgVRceFThG",
  "key32": "5jrWgUVDx7DLrfkTLKVC2iQZoKMmMEnW62Db5rjJuChoNc6fnzMWazcaNQzeJpbZK1aoGuJJp8cqYGmnNGHnCz6P",
  "key33": "NemmY4sYCCxxGKbZMvdUjSVuX2poBHPVEwVwXmwj3NuoCbEXRv1YBeRVpHwaS7Ch1FABETBiJ7uTXb3gmNdmCqF",
  "key34": "5NtVdLDbtuSNZe1bzXqN2XeeyVxvtw8DmuTVVktBwtfrpA5XxWzMM5ecE9Yff4tt7dAWuV3p5J6n5ETAyhrt4QHP"
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
