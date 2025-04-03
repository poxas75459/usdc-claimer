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
    "5G813ndLsDU4aYhqG3AYyMeaA2weFk7MhrosUTiWFkShPhNL48WKPdM4iaxg1QDFJLyrT7qmofgRu8UuHxQqaZho"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WZzhU8Q6KVMu4p45KTkcYJudkGWpVdLAqDsWJKg9KeGdMSGZZoG9L6yXDMQaRofsg5TmPFS42EkDwNeEDah2uVe",
  "key1": "PP4M1tMFjbdZpTSKbJnkuWqRmnqC7ZjQF6Q1fd895PBM4iivGEwHwzodhbTzrnSFNfMwSMAc5KQNHNwfUZbJadz",
  "key2": "3ZBUU7wgCZ1Zim751FdP5Ao6GKvSpJkwUarxMQC3fzxiaqpcaSwRjHWYAALBUErfzAG27YKYWmiSa42kFUu7FEot",
  "key3": "4zQGiz45YbZRJ9xjXjrCj4juura3CyrqXkSpPzo7yMMMTZ7sbS5fmU1UA74uTGzdFaLGmH2SZoZcoEy2HvA6DCdf",
  "key4": "3Hk9wbdPXRfMAtwJ9YVxeUW7c6xWKamiHHmbw9bmcqLGeHS7eQF6EsRdKTk1p5f7gfLExg3mhDEtQzkqNXJnCug",
  "key5": "2NmvvMZAqxrGscWzPStL9qk614hBiQCRvStsv8daVSZtPxbZU8QB1TLMh9B3EaoEAQsNqGo7UmGZ2WY91BygMupu",
  "key6": "d1SYpyakVJPsSMtGABUy9oYb7gvKxRuLkWGnQferqZ87JVyPVVMLXQsLMDiRR8aRiCFxwaRE1WbKmuMgbn5g3hC",
  "key7": "613kyt9rUbvoJ2yGqhDgJNQFZBd7JJqWpaCxnszx9FALGYGY9w1cDM36AczPtDrZ7UEdf5koV9eus37GuwsCmXcp",
  "key8": "4A1YYCkvqtGetRWDPhK245FhR2sL6rQb4A42jxhPCxMvERUcbYKqH5svHuM7dpxEgGbC52G69xRCDduVpYVRhmH4",
  "key9": "7MkcicAXzs13tHhWdtRihw7tj9gykkHJkC3m7VuZQyhAsA1xbEtL5UJhsobKpJwqsCxHWnbq1WAPMKbvLkKN8sA",
  "key10": "5dwDvWEQFCoXZc5nQ7ZiteSnM9sHEPMnzKotNPX6uB4JbXSL2cY4hYgaXMMkvuiFzXFYUn5hT6fUVdCsbBuMm192",
  "key11": "5jFEbSAXKWfbsjuhLy4U2bGn2Y7k121swVYBb3b8E8DSUERzKztpzJf66RXGoRTeDAAkozQPibYgr1Dr2phCTUon",
  "key12": "4YJTg3DLX1ZkpwyRpq8DCWFHM1AXoGwH7egX5HQ4ei4LsfUZKFwPfgZfbSMtdfGLLCf5iKGPEyxKNFmDQdcu8aJH",
  "key13": "5DGEhSxkKwZ4QVeJxeTfK6vgq6VGr18eA2t4vKwHs377MBd9PscQ8hKzq7auQJZxL4ukZyaSJFzBi7ZEvtxQCs8b",
  "key14": "e8Vkz3NHvc6iCCCYVMgpgkrfLvFURGyxSPj6GGeDkoyVYKbmB8dx9sJbXHDcqh6qXhJubHh8wJWMYwYF4BQtnfG",
  "key15": "4FLM4JPcXPU8QMzYzaomjGRNYuZE4RPLjL2dfaGJtHYS1pp8TW2Vq7kDDBo7jHF812KY3bThu2rKMRoSGcN6YCGH",
  "key16": "3eSkxqLxrsV97Xy2Xt5qybCFZ328DcUvCpMsgxqtCbWR4LUikioUhH7gxuNAuDHrwDbXxsT6J9aQrLogJet8xEyH",
  "key17": "63B1sBUJTgAWkD8nPZ5kF93W4UpbB9YaKir61M4U5Ve5FG3VWzkDiL1k3VWgezFd1QZ7m8g2LMxVM7iBxnJ3WJjQ",
  "key18": "2vZ4WxkoRAfYNmudzPfg7oNJz1nPnGzX2HF8mp2LnMNXA9CgMyte6tKHxzUEQm6R318g9pftcvKu4u4uWLzfKctB",
  "key19": "wvhJq8hubucTzpPmEdfgz9m7df1NX6Pq5ga3Jdis2zfFnoW79wWW4JuyejfX4FVyJh8psCrGkpbU1beJg2qNKMK",
  "key20": "P31QeMr49CPrTzWW9g5CNjYYcvi1dsER2ThJLPR9KTT4FrGxR8tH3sT3KTShi2SgDUJXWnTy2st4y1FUjszDdpH",
  "key21": "4ZrQvtM1MJrNTKhnszqo4s7BMEvAdz1agKorUyj32AmqbFD7Jg1bKJEiRRSh64RsCe6K8y8sb8yJELxwzK117FSw",
  "key22": "4DNaae6e8JkHZfYrQMFKmfVvG8KJqq6eZpDRFaoAH4UQszPGhSCHgdb9vh5XdybtV8xSZmKuEgpamud8pXahq61y",
  "key23": "4AXhVZeWwhmzCsocWr9Sh8GCrf6Gn8Y3uVfWS4pAzDTBDECFVADm8hzNwFhQph8LagczrS7qJFvnFN7tjiDEjcUk",
  "key24": "23Do6rfsPG3Y8Sroy9V9ckQAu83Skiq6Qgh7ktWrz6VjNDqhFtR2JXA2kgiSzK4S1dY42FdYgsQjB8gFmqy9Dzvc",
  "key25": "TYy6aWaKzFP9J2YjEyBS3nNRA9zoRboReccqEzuzSbEY14eP2TEGZo3x1qVE4qni48pKV49RxZ7UWex5xvPhy5G",
  "key26": "25xFf39RrHSqX7jWXfz5NyBXRjLUU8WqtRqLPCgdXnpquSdmjMmPcJwkxDJpeJRTRk7Jzw7DpKNU5crRsgggCzm8",
  "key27": "2F1yb2pvRTCc2VicAiNm3YhPtLvUE2grTU9wsfQNmCXNxbrxif8GWdRj5TmG2mvpzfvtnTmxoEFLExr3FEsuyzDP",
  "key28": "3i5woZFuijKkW2N35rvwMPzErSzbRPXCipazcS6gbpFn6en6FynqbvKKmwst8bQPgdhPzsPNoYV9oiAW6Wg9toUy",
  "key29": "rrMBzoqWy9WQ29mCJer588dz83NjvSccvc6dX242eWvxBx9roP3Xn4LXaMBuTfQXeid9ZQY2TpuKexzpGDAkoMW",
  "key30": "vgh4DfLeWop6XF8V45eukELGv2QdK7CbrpV27kawDD5FDXJJTF1xN3n3VFyBUibuQ97RRkebL67o5uQGTQbAmR5",
  "key31": "3gEuYDjY1CqB9inxRjXvrDNhGeUD1dNqw8LYmznxycThmpgfauXCpR258WmW1aX5GfkXQmtrzZVH1uZeLu32quFL",
  "key32": "2X36RFdgp9sgMZMeErrRoToy2tRPCwEmy4693CKnf1ru5Q1YzyenH4f7o7VJgxEKQiC7G98PhqvgCM2g6QHsGj4g",
  "key33": "4GeQ5diDVmiY7Hd5QAhrpndV3HpDmY7oXoziMZZ5h4RBbPTV9Ws8p8DK5ha9FcCiCgkW6hPVjQWa7EyURYhqNZvA",
  "key34": "Nd3z3dK3KqJaPhvwGVbHum8sZC1nKXa1c9PgNDYPTxyXQnW6rddsBR7eE6iCHcFePoiX4xEBBuDKL7shh8dmDqg",
  "key35": "5nqEun2sHu7beY5jnsmbcSZrKbZodrfCDo1ihdbbyTfrmRFjXLcB6DoyeQxrR7QrPFLwjLiZXUUuiQw4H3eknfd4",
  "key36": "51CAXPofpFUVRTPc7MgweZk6SxcCJxgepvHWadJNsXJPMkPZ8zCfqt3tTcs9f2FqEUEs4EZowxhPsUWNzNNDyxRu",
  "key37": "5RZH4popKY5zV7RpkTT8Tae7WVpSBsNMcboE72yuyzQmZWRk1uZqftexs4pH3H7GjKNZHPaDcw7pcMAcc8qy6K2i",
  "key38": "KYfEPUU88bdEqiptmZuyqhpR6TinTJkjDo33ys1d6jY3eR1nrk9tMycrd6DNMbykX4dW6ek2yPTroYcdqeuqy9a",
  "key39": "4hz7Vn7dx2y2jyvH7nmMUp5S4vVhnxpRio799kMjVU1igq7JAcKTeczVi286ULpkKx3eYNwqe3hkbDAeqZnvuPtF",
  "key40": "45Cg8eojRVn7PHDncK8iGYXxaNnus9t3H6dg5NpCMiDMkq2SRhYLG23SaaZfBsqCqH7V2Bg1UK3e6svRZ3EryzwE"
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
