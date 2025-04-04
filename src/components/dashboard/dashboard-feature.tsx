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
    "2fc1gACgnuBfLuLtu5EYpbHXAwPpLCtEXcJrxULqdZ3NyYUMKHbNAv3S3SMqTBzdTycSdVpC9c3r9B13tr72NUhg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YDbztTq9SRzoMtwAU5dV1H8Kr2UcHggYCkSHV15kbqBeZmVoxJvi4jLHzeytZDH3KMSfXe2nfTmZdAo4kyCzjuV",
  "key1": "iAVuDVRYcwviwGEuoWcweobsNeZmXnkkNi4rzcsbStTHNbWzgXX5fE6FWp9TLZYvbrGQ27m7JGMutMHrqqStAw1",
  "key2": "ERg2CwPxMJPAtiq5FfNu9xun1LbkXE22dZTNJmmhgoDjDey3jGXF9zXo5obt1LX6PHARbomhWJMyLJtdmowqFwe",
  "key3": "297fWRzZmCzNZVsr7voBtAvGwY1xFxB8envw9pS9izHsjAiNDzvK6JAXmfW5ufg3PR3kHR4ZBTUL2arnAfnAgNvS",
  "key4": "473wkEvd6Bxjsk9ReZYTKwyZNt1n5YcxnU8zbQ2AQn9hi1Q3bfnGFW2RABSB976aFtL5k32Nhjt1boJqSTfb4gEC",
  "key5": "3xLPKWAK98prRpuJnRVayRtRmxLjN3gdCzFuuBtBqx2TmErAGNQuppcY6Jxj2qCpAY8jUS4vG4iYEpEYEu1MAf93",
  "key6": "4eX3C6s2RHtUvBg1SnUXCQSDBnPyiCQZQ7NPJio7WTJUjzdNfRJwjCBd63YLD3EyTpGEVYK9puGoruwnbZZ1WTWZ",
  "key7": "5vuCbXSQ1JVyDDJ3NFrAmiekXpSB2kthZpu7WzG3CJ2wBxeMxeLeMJxSDJQ5cyEscXebf6i7KLMhR62ofTGhg8GG",
  "key8": "33zu9FZy8jRUYESPLDc5hdmdCH8kzE7wdfVnRzoXZ8dpV7SnUy9ZqA1pSt3NSf7sMJDsNM1j5RvczsMzwFNzPRrz",
  "key9": "2hUQ5KBDnVPMM9TDVoSEUTncLs7RmH1XQkkYoS9rBe88G6BK9zxoNLRK9KzEJbmPeLZfFf4AgxAncqy3dkUB3MrH",
  "key10": "3xRbqznasysLvADbsrMqg5z5dfsb9wQBX3qZ487TUhuf9J3E7YxVbA3P7gctKX4QPGWs6rfbyyYRM1tfFqabCRBT",
  "key11": "5HnAcbV8cd3wAnxWq6oWfvXw2WpvJgPZdvQ68wihao2vkCLcNVrfhdvvqCLUsz3gt2BWq1jYJbfVfngPCpGyuS4a",
  "key12": "2trJEV7o5gVe8HequiLDieK2FBL4sxeWRb7RixRss17bwYfiw2h4YTz9eUK6MZG25zuGgi9SpsjAQC1GjzPunXBv",
  "key13": "4EuXzNMi391sKB5gyRkt7bxq1JPHpXyvwiw2hSjoKrLEqCLo5xyspFwvE9AXNugXm3nQMSjRp43R8VQywh7Jtk7o",
  "key14": "5LQZpJx2QqueRXcsokq6BRa8Be49Hq38m4aoat4xU6jvNgLDfFb2E4ZAVpZADTV3Nd4auYmDLjvoPgMEor9ropwz",
  "key15": "3U9xQFBRrkYVzSv5wkftK6QruHPyFt8jW7eQwfjTVGQS6gASWaU9utg9EraoXKXA46KNg7mUfXJk1WEYnc7XkBw2",
  "key16": "5yFhgSLTK1Lme3BVtDtaqECMVNmsMicYVQJX1kZBfykoYp1jd2F7yChKRBGVEReYCJCQGaACJKQDijiJoLi86Ata",
  "key17": "p2DFWYJwKGAFyK4P7EE88ZdUJr9U451woQiuhT9qbGDx6GsqZUyYBYa9QjZfHgVUvwgZttJZF64CjdX2cs1wtEp",
  "key18": "3sitqiZmKsqsH6HP7s9kULwjQDkT8E2Nssgtq1ao3NkAUYWopVvmXna3WdzcT4jL3Goui2k1azZuexU7yawXChif",
  "key19": "5aecGPJP1G2NFNJcRayLrXM5djwPz3g8gDkxaijEJKsSVZYo89Ug2rPTYKaBunrG4Txhvahmv5zhf8Q5KwmC2nMj",
  "key20": "2WZwnvEfSCfFhYU3jWXV4hVVQNXQ1eYmxWKeizQwbjETpgE2NDtNb47BQiTWZHStEHt1keNxSCaBXp1E1bX2Ek7K",
  "key21": "3pLw5E2YYZeV1Vvg6w8PW8rY6EbfKZhfSU8BNqKhzBxj1LHw2jVVUfW4ViJt4K4KdsHz8zW7DbctUBoAai3tMWu9",
  "key22": "4QaRdPCrKTmQyUh8MhPjRbwfHaxeGq1c6VVUi5nnhPz3DHBoruJYhz1qoDxPuctBZR6vLHBZX4pYREt3BmxwGaAK",
  "key23": "25TnNNQDt2mH9SGTSCxHGm9mgFsNTsuZEdUJuMXNGqUvMnLUDpLV894YhN9QGrCuS4CNDUsAsXRbEZXVWm6iNjop",
  "key24": "5ZhGt9ShfT75c5AzbtKTVjBbmYPyGMcHwwQ72QUZPZFyR9GWc98wDvsssjezC5BFXLaRL54Q3C4YrQpMc4nz66zz",
  "key25": "vXLyHyREzP977VTw6MrCsoHwuFUegv6a32SH7D4mAsCKVWuCehXDaJ1pEj8NautgDihMf7RyRbrMcpUYXpxfWDC",
  "key26": "5fdmpZ8wriYBrqaiP55KdNqnUhXCcTtVDzwdeBz3iakdNVcAN29yjCY7u1Q9HfC6cchCUeqiw5nDF1iCWVeFyJdb",
  "key27": "3YrnAMwZ8aRcBGbyjxDhTfGBJWBSjNYwPkEmouTG4N3fJs61YyLzmqat4ngnx8TpqAXgjaU56hcfL3EtPH3gNM3H",
  "key28": "dWR24YSnNmGhAaB9bH3Tbk8sfvM3mk5CzNRp4pWULMPu58BPvPnq8sE11KqhQpxrp15UjswJd2vpJ7xLtmAAVxS",
  "key29": "2yvVjWTmYKSbbqZ8jCQBHPTExg87oSNsVdekFxxavL4xyt4eyReaJD7Bo1hTGcniS1Mj3tSgWtydBJyzvbnVLfiE",
  "key30": "3PBGwJhqZ3xrVY9Gh5hhq2sNmQDj7Mv6w4HdtGVr3XA4CcdruRUYeSMkVJwiGqmxouXjWqtPBEaMo3SxUbJ4B2Tw",
  "key31": "3bC9VwESrUgZztXXF7tCaBrAhjD7gKQMhTyPPFwQUZfKpj54rh6N9YfA5F8A2w8KXVP2ohpyxQA37J9qoCWujBQ9",
  "key32": "3gUaN9dprFKVz9Nh3aAFemHuUvh4tb2CrkJcwYENvbpkT7AvT14u5pFEtoHurNCnSxNJwacGfCMy9F3KxFVDjoXP",
  "key33": "3qLoYNmSDxn8NtEA56r34m3gneYCNk4D9j86eAWZ45yMJd2MernhA56bSkbkFqETQ6NVdqqcuLkJdCkXzjtTxmmc",
  "key34": "126ksygGJdn2u5avyQdjwbU83ja7crpxSZMJTQs4gVRyF1wJuMuJpN2qt6fa7xovt2QHzM21qmYNWfyN7TYDiuxW",
  "key35": "21ZXCFK3xib36n6MtNEUxLyrXSPx5Yn16veVRzDYsP6mhZBisPqnNtVKuUyZk7wvEVYWgacL6B3fX9RDTHmFzvga",
  "key36": "3kvwTZD9EVujKfYbnNe6oePFDEG4r5jpuKUanuhv9k1wBw11BGMHnYxTtwhTujd5NQ1SDxMuUhGkXc9RQAYMSBh4",
  "key37": "28jawL9VfQyrcBZtF4Y6T1fBf1gqrvsEzWMtBD4DYLRxWF1zdPFha7bCY4QrKdJ5DEaHx2KpCsWmoZ6RE49BZRRS",
  "key38": "5976DXq9ZfKV7Lu7Ss7CQ1rSApbhtPX9P8uPc6iReWKutqhUCY8zygcq8BmybFLVkmoGSHRorav14ityBFeHrmdd",
  "key39": "63ApiFGoRU1539R4HJwALCnc3JNUqV4tXyxqTY7f1SQejR6XiUwyB9WSnVgjq3aZqT8UFjCm66KK3p6Y5WrV3uJ",
  "key40": "22LK9hs4KPZ9GzPg2iU1QxQMagH4BjUUp28QBWhSkLeWmQF9LRaRgVSejawFjQBbwo3MsP3BvmKDtTvSjMnhAboz"
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
