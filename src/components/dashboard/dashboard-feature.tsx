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
    "5Zkv7BQ2BkDEBu8yGLJpTKJ4Xe7N8LD8C5dGQ18iKH46TxrFS4Z9naVZBeWDyebjxjpVuEpyw1ghN4LmggrxKc65"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o9A2kU6JLZka6cTBtAoM8sr1FMSHCE1GdAvjCupaRvWCPzZHvQv9DxHCkKDiYUKKEYMv7iCnWTF3UJK5DBq5yoD",
  "key1": "ZorQqDWCKNFqBcJbjZX1CnSJAqcNyADorNmmyXLqM4u4vPamHKw91bRv1C9rYrdPAMjH1hnkYztZhHoncTNwrGP",
  "key2": "3FxrTZHCMFJUrz7Ag5quM2Zz7Dm8pB5qdmG6yhuauFHLtYqNggUwHm1RnisdiaMgjPW6yWgfHQFNBPL7u575eGX7",
  "key3": "5hb7BjtMYFqeynUUWnidNLNZpy4FpAtmBfwE2v9DQHsEktF2EERLGxSr1Arw6DZMyKiKkVq6Vg7JPmzbxioGteSN",
  "key4": "5fm9AxVLUw4yEVBbEW7tuMxD7jTFDJX4J9NVM75kbMT36SA5N7SUD4NkFXS2NpoQsGRz7NiaGoVqh7V73mpcnkqF",
  "key5": "4T2yCxaT1iWZpXwFHa2drPkNhZkdJZD1dqZCTubgUjrgKrcpoEx8EfsC38nF5vMvryQUcgiUzDjYjxRS4DrGcgWp",
  "key6": "5kX9PzQ7QN4CPZdSBtqB1WnmSRG23LM5NJFY3zbKQmCV3xQQx6BUWSgCREoPLoQajJg2qBV9KM5tysphoE16YuQr",
  "key7": "2rG63EY7DAFUvcoyjakYNmHLmw9qLcz9PL89dLMHp7vZMxhdVzGwHCvvsqxzjFdTxf1scBxjyQuV3j5eCNScAEMS",
  "key8": "2ogEwoX5JssKidMWT1xzBtUkZDMedTDLKfEfdotg3LvMDG7v8ScRh93JPCe7GziLZCQ1kM1gL2JHjdVdySTtPch9",
  "key9": "2L8egX3BKE3aSzXZN56BqsWtNxJrNw3G4qo1XnxLmMQArmDCcLZ16KhsZSJ8ossQJThD7yRFW8Y3jWuyMR1SexsA",
  "key10": "4nwPebmZMMqCPLmiBoyMKmPycnfiremPyj4NXTLigUj4cX7KbDYHx1GGPxpsXb83Y5JVjPnBCZ96jc82TmeSdiyn",
  "key11": "3eN4Ra3hXXAWmTHExW2b2xL7FSXv3Z6LdjjTW9TYgFQUNtGGpKbDjDE5q59vd8srx5hEXmFEtNfwQHSucZcAUsgS",
  "key12": "4hGM1EokTJRSVXDjojoMag9RnH5daJrbXqtyTHGGuyfC7EBdWEqjjCYZ9Ffb64kKJWxSfigzCr9btJQ5TYqeJfx",
  "key13": "5q5hLG6E3ErNmFUKTW8n94NRNguQBLJSbKsP6nQiwwNb8UYfe8tcR4E42MKCFehksX2yPJfMojUJZ7ThuU2ajMzg",
  "key14": "213q1FF1iVDS1CoDi7BkiU36ujbRBpNM6sNifBssXdHocQCYtxudsoJpVbbP7qwMzvtutLMNL3fkob7m3qYWRxcT",
  "key15": "3PPoukkpt56mgaNkJUsBWZyE42M3tYwayNvJHQyis5hozJ14gHqM4qFz7vwws8cqiqF2dnnAQSGbd3SiUPRRhkzV",
  "key16": "d6WP63sbWFVYT8gkUPV8wUha7Br6fJzfR544gKp549uckrRKnxMVtX5NySzt1hipht7QxJ623xbR5myfTvQmYkt",
  "key17": "2Bv1BetMJ366iX5HK19CLxbdrpLi8oLi9fuvey3rKGaNXMKMWYC7udKYEv1hYi9uWehE2bzwfjHbYsVkcLktTxfX",
  "key18": "YWK8dQ4Xsxdk7kUT6ML3FJS3Z7Gk7JgnSzjktTGSypeEvJrTNWKp4MQn8946f3Pu9ubuZZEa5QmDvX3BojhGVXE",
  "key19": "3iFj7kJsrYJsgSHgXpFPdyngti5X3ig4gqhSD2KeAi9bi2tYE1pnEH9Y2iopEAaxLPpZdWQ6RQDkkchDQAbHf48T",
  "key20": "M8FUzP3HwwBxqRX2qdWMEKqZZ5FUe1fERFoDMipR4CVCAJDZPnLQMPd5U2jp5GvYrmbPQKj5XYws5MTBeXPiVbo",
  "key21": "3U3PCpbJARafibkQwFqKXZxqjGCTeqC1jt3scLFyuxxx5XJJpyxZmjpLPy9XQUxkygPSjz4YYEq4BvD4tu1bmdsJ",
  "key22": "3mR4wpDcHpRzobqjcfFqGqM7Ef9n4e8RKcn7tBZj2uKDH2KivFax2PZDf8wqUqx9Needzzed8QLtVevtVxtos7PQ",
  "key23": "52HeTaQjWBQmu65ApfKXEpYFM8ADmJ8ZS8pDs9hcTFhgSXDgYx2aqLmEhh3b5d9gK9bmDq4zR7uc48MuEDjy9Cis",
  "key24": "3mHXRKsXCDSf1T1AuyHPNU6RHiH9xRMKB5HUQAyteKPUbotkV2a4zhmrwg1otDZYaF4uPuM2xqFQpWy32LMnn4WK",
  "key25": "46Dk5CFMmyZA7Kwk7vZGMK4wXWgi3xpS2tbMQx82c9o9GPKJXzaPpuRQ1DHLofmNjHFJUfZ8o6MDzPQEjQfHGy1E",
  "key26": "aHZD5Swi97YviTw1zkpmhvin3FGfcbzcQyP6rbTNZexwXqm92Y5W7AQCv7TMYQb9bSoyK5s5s5CkPmfAxrkkmBk",
  "key27": "cZMSQpsQ2CcY7Qc7x2ZRBNPM9Uc7Ksa8Va9KPG49YnmzB7ukhmrTspVBytHFSYZQAHewn311gP2Mq2BegSono4n",
  "key28": "eNsVjkxbqBZRXhFJsQFhjDAYkYbmVdUtszq7VfXqXGpDqHrdVy4rwhT7Das123wpmLcJHmnaFqTTUUudqVkuKLT",
  "key29": "3AeX1VqabUZ62i86DnbhhCrNd2BinLTnrHkMwEVby66wViBXw5f5Ru69qDVkTWt2zfDE1oyKxPuvZF31nqWGPm2L",
  "key30": "3S6QgCBUMMpnSmxx4FxGUGzPptd4Ze6BiAZ9dnREbs6tFAWnFFpKB49ER9q5AQRNeV1CFwkQUD77wC53XkNPiJxG",
  "key31": "36StsG1scgsuv3q9K3uSGs7ft9evaP6TMZ91gdgGSHWBwzYipjueMAjqPPQSvugxk3sDeoPupp7C4SWwaZCx9n8w",
  "key32": "49rUPu7nQkkk8LtGYC1SRL9kYEAMQ7eDypQjJT9WENJNX4HMYZmWuChKGyhzxDpjUj92syXde3AQ88k1nJiLZD55",
  "key33": "24zawUxBsD1hg353Wdgo4jxTwkdoQSGjx53Y9Zwvd2Tw7QcWSszKPYa8rQubeCMqZTv64omgmPa2WWrtPJEyZ7Xv",
  "key34": "E3KanW9b28ZDURAMWU2kaF5PXcmi8wS7UyQ5nDbks8AgoAUQP5S7Ewzcq2L9idjUqbQExa3bafTNFN1vWGvzUfA",
  "key35": "3VUNv4ZMB5ZKXaXSAxSevKvfUXWdtNEro4yP1ivQymmuhb3LutqKSJD7KeoPnLTcNVrPGvc7o8tZWL9eC9xLmjk4",
  "key36": "5ZV4YM7sLBMbELq7fiLKsUMbWpi4LdaG3VmHHySEHwWE4VANgZy4jB7G2WyK94PQaoYu6zWHf5N98PEt8uRUFhNs",
  "key37": "2CbBKYTSNirdsYfTbSbKCr1B5AwsJS5gXZZa5W2RnKzWq7ixUCmkM6gj3NQySJAwPZQwiZ2rbW3JUB3LQhs2ak7T",
  "key38": "VEyA4bZyso13twp7XiusrE6eMYccqnxTr5nLNzAD7Xz7uhaVVzSQFb4eqetQpQYUnGevNHueUDd6WyVcKze8ABq",
  "key39": "EzCbpwMmsAQfbeH2odVSRuK5pnbW6uUvqjzdTyXbiJKdPFEGwnX3iog7NFeZcJbxCtEVrGhaxWVku9eZnrwC6BQ",
  "key40": "4DBgnrYyPGQL5M6RTFj8ZR2JeBbtPqDZTk21p7KYufyeVkWk25rRvQ7bi3kVdEwi38gCcwEf8LTnhQVPjRxzcKHm",
  "key41": "3VLsugyRMqZJarcGocKM2FSFPhUNetbzu9Hstnphu6Jh9CG6EfUH3HDtYyiJu9SaiGtdeY73U37puRjZ82ZgfG4o",
  "key42": "4nW4KGMYisxYVdBMz1oskYu5L6CeD4HGhkb9nk1JfkLrWxzu2DPtrbg5JPKS4B5wRsXPeVuiaCmfGi1gBDkn2jMB",
  "key43": "MtuHLKMi4zqF2sTufcKAnkdKbbFbopooYAobKiraUrbiWY7DKDVaKoo7HqqssvjoVNYr52w2ywVnDPef4Ywygod",
  "key44": "41p6WKNh6o7v3z3Pp2DVY6noFtTbbnemqaEqgtZZXJUD1nienNGBGvise5SMwfgY547ysjhPUnSoBAsAm4L7Ughn"
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
