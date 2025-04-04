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
    "4qawVcCzrFU9hmBGi7HKxqoDuYka63qaJ5GAn2hgKoN7YF3YZC2pGW1T62oo81Yw5eZbALiJKSMPb7dNoUjZWPXk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Upt5LLHtsJiT91RzWBm8UPshWjfMWsuGeG2BGPfG5s29FNwAgDFVuQiygyNBFF53SdturznM2QYpY1qMgbiMoYm",
  "key1": "3NbBifCa4ojH5ZX3J21b9wVwP9WRZdicNTiDNRY9HvDnPeTWyUHfVahwHiUJ2aNNUsrovhQEqHR5XKApfuEVVJM4",
  "key2": "2qhLh5KCtFNt29HZYAPHyUVdYD7eCrCVgTi6zVEfnmCPgrCXddXUrg8VhMjayfg3CXWrnWX15t2wTyPijEWZV7Cm",
  "key3": "5iAYKo47QSkYE2oBjcq3oAz6qv51F2E3tcYhEDKHiyjhZvrfxwazqFiZi76Hos5VwePQKC9zeEq2fMyeSBW6eBPn",
  "key4": "56ioM6pbUboD9TtjsLUkwPtFZxix5xSsc27PaZbGrryVG4J3NM3FBMAqu52yVNdYm5td6MQWn5CEaRUHzCCUu5Yh",
  "key5": "NoY7i3R7EN671Y68KThhkxZsjkp2GC7LiX5gcULqzyohLDxQNJmJ6GrTpVNMCtL7avRcjnvptn3VysMFvwzAq7Q",
  "key6": "uYEs8FgdEm5Dyao9XocsJo3UVPvqWhfNKUNevjmg2z2KmC1ZqStWzNwFsELKD4N2SUpHuN9vyRLnczNJhdx1NPd",
  "key7": "49NajvPCxnRovJqNstsx9q7Pn2zZK795NQExKDFEpsK5EW7rXz5nP17qbJsJevbWrzx2a6A75rHn7zms8Ni886Yz",
  "key8": "3ihAMvsMjiEQbutmMhFRZaFBavcz75Go6XStqSAoGdSP7vpm22Ye5cy36HWosyGeRTiu22cXaiSuVC1TXcsoewPb",
  "key9": "3mCanWSvd5Wp1RavXRgYDBhv9Y3W5nbw2uPjnBzsGBTg3SPMMbyWt1AGCoFxEGZMZ6aLpuBeavtGfLumRyhKi5FX",
  "key10": "NH3ndgp9Uxjz796fsDMR14cLGufQgvnZjf9jP1V32qeo2yQYmW3MNfJjynpJ1DHGuifAWYZ7X4iPFZ2r3J2f15K",
  "key11": "3JJZ5sLfrVCiHkKsvGf2kax3ZAaVTeJwHU3v8Qy7c1qQG9GG5DRzSot9wbH11dV9Gq4VnqCiPLuoqYuAhzqLoJCm",
  "key12": "4A2fP2EoCco6cWeoWZcJnqeTMNnx1LDWbsSaVim3GWjfhjPfcbwzkQq2DLNMJmHghd1C685yGf6RcUdzArvpvYpE",
  "key13": "65ASzyb9J3PRaExp7VmR3KQww6XfPD8gvyKt5S2wy87Y9xE9w6atTcLoAL2SMAXjXxykTwB1pyiMtJF6NeKpa8NW",
  "key14": "36q18QzDvwmMjSEWz3RQxam1KBsTgSxsEUBfmJGskC9qdxyafmhmaNZfwsP6Hwxqtv3xgthtRnBiKXopS3V21s3f",
  "key15": "5HykQ2N8HUrDp842oh3JtYUyi4VA3q4iT71YKhJxHCCqXoBYnp9xBcKkPw4WRJ5PrTYgzktJYqnV8qhWFRSdPFNA",
  "key16": "5EkyfuSDAoZVxET4GNi4gGBtwdqgDT28Z1DeHTuMhjdQ4PjJniv8LEkNxiVsQHCz1Ufa2WsaYuPbuojR7V6cCK2o",
  "key17": "4cShi4rNj5a8cHeY1RE37GuwNFJPcst2oXGHVtZuzx6Zf9zgQ3fVfv3JLUYAEPaE3y3JyZB5K8z6eDs2S2wNFgKA",
  "key18": "4E6zAQbkWssWCzB4VT7bAi38BgFZfMea6dhBDqa8ERenhHnFjefciYvZswum1wGsDMWc3vEwXASUUfJEKitbHeua",
  "key19": "4TxReW8c1EKpGcQAGBHcwW1goWNTaULqDC7Y7eDv5fwBH3KBa8TbZ9tLtsMNL9i2Qymt1uQSViSZykGnhQ6eDk7a",
  "key20": "4B99ZpY8PfXwiVnFCHEX5WVJ14A3NAVemEKt3af7wYtRBtSJ1f21Ho3eYtrLZVCPhbzzJp3MdJ7qwKx6594cM9Ja",
  "key21": "5jQfQ2LKEcoSuBYE4xpEB51FAWXe46R8YuTj6g6WnPy1bQ5sw6b7ZAsFaPcWjJ9ghprF4qQASdQGxWTp2yYqxuFP",
  "key22": "BF2Vv5HNCvxv3mE8LrKygUVGHFSg4YAV5Z1dLfQTFsV7GCJrhtVqj6wXvwaUNv6omRtxecigQfZk5qFs3CBNS36",
  "key23": "3Czg9J985t6zd5DsYqbdDzWFbwTMzch8J9E4JgtpPdCL3wBF45BjUiRdhZF6YkSrkotgNryYPYFupbpBaZkqtsHp",
  "key24": "4JuSwQv496VFz7LtDYdAeh5E5YsuNCF7T9bqgNxYi2hh9xoGXCv1Se91xwzttcqfuWTFqZ4sWuWCZwoWTutAcgcv",
  "key25": "2b4yMe7MeVuycu31Zs7k4R3a8oVW4h2wRQGpfanqgcdAXdhM93orxvZMFyQcnPtDP1PXF8sGmnNv5fzxXT3pHyUS",
  "key26": "4aJ3HsdF3T3dp6DyTaEHCmhzCvj2uQS4tUXmgunBwmfgFmZFotLW9GhfGf6Q9tgpsoB6fZW5rnzEVs3fYkWZNT9c",
  "key27": "3rXttyH86SJQchD2pwqc7ySmJkhJdomrmhQfF21kjJGLmm1ifHDywMK1ba6DZ98yL4FQXr5L5RnhBuQTBQc2nAbJ",
  "key28": "sbgw5tCs8nxGzm6anW7EsyBoisdPBYmABPE4f3j3bkFYAL5mehTmgdMS75CXVKPernq8HMBZ9zDzDxrbTZV972g",
  "key29": "3ThXCJa4yuLCnByWGfLZHe2VKzw4im2Aryh9FnzZV3m1kKhLnAf4d2U6avYDEqiAyCurFxVvjxfSoQsQ8sQAZaL4",
  "key30": "3aT1sQxVxS1vpKBtmgYT9G2zZ29iZqYH2ViCUq1Yxygsvm4h46fRyzzcXiMwLSc5J22kyUt9V9it9LWqFfrC5iRu",
  "key31": "4BnFXN3qGkmYuRzaxuXpLJoVyUMLQY6eJDF7MW7yAeDCqL89vNNVUf9WzBWw7v1hHAiYEy4wvCCAfNgFMiCCb766",
  "key32": "4PK5Ayo29uGvQhvkkBVKHrWMuNLD9LKNmZmq3yyo8NRtPvqEu2AJQ9YoB48G42Yk8yCk8GourtxxFbYCKERCwKTd",
  "key33": "311kZ9zUm8yDtDVvqctWsHbK7HBK3LQc1zULTwHBRzPGvTDMQt9PoSjVFUWxQqMSFAvQpRAeX12VRKifmoYQUwXc",
  "key34": "5oqL5gtvPgED4CanHcFghBZbv18HBD7HYrBcoohJSa3uwXU1xiK6feqpfLSaWLdNzf2Bz4ksDZbKYzU4eca4TfpG",
  "key35": "5iUNk3ajJ2rNzkYNrRLaFDPZB8rwM3XrCj9Az73WMuLW9sd6JaedfLtqJrrRXAYdAMvtw5SnGVT5fTLbURRxd3gP",
  "key36": "2k3znHfwghLA8kvmwe8f9GLjS1k77vuorDNqBaXxN1JqrgBxBYXqsLNr2h7U4MBz8j87i6GDoA1juAnGmphAmh5s",
  "key37": "arGRNBGRKDGWEhrd3SzF2d3SRkx9VS1XaFXqvgC7coY6dECvQ9chK3St3M5g3sBom15jZy8SYmKBegn7siyY6Ds",
  "key38": "nPBuM6taTgkCJ4Smgn9cQiavYMxKfnzbAvgydZXzwzicERw6GN1Y4yJXMYWccrMjU4tjq76JECAsXedDTsy2NxL",
  "key39": "3mJGunKw6QBKZBb3tJbNWkhA32jiQ1DpPATcWLANBn3FspdhQZ8qhvAjes9j7iRK3zMYd9xpgKqARhGS8ZWt9m3y",
  "key40": "4tCZbVBKbbaD3t7raYrK2JH3g1HF9m3EB27jm3eWykJ7DbbgYdKzv1MLrdwaDJ3qvbvtYatkuzqRCnh1aegjJTWH",
  "key41": "bkqFq2PxJngtNexPkuHPcpnkAnAq4SUdxoXwxurm2LKT7de7XtYTVYAcs2sYzDs619fSfHJat2wEknBEy9zFaXj",
  "key42": "4u6vSoXaVEWy481ETQe3hwbB596ChvircNqNYjKaakZagYFMMcARE1NU1NyK3vGoFaL3u4DBo6cDoyLXb5XVSFQY",
  "key43": "4NyGwpYzxxrnuxCXrvnig42faSHPvq4Q4LwxsLWdJE5QdHdLMVoSqgfiYnLiFCyuprsssWc6oa3mZSTFW73kRSEo",
  "key44": "3DsN4qyrCQzAYtQMuMraKto74iVcobJCfQtegcC2Ye6Z9LX3EM89CUzqFar8qVPk19zHSFdFrko39eiLAQDZ45Gx",
  "key45": "4QWDtyBPme7eCg4861SQqGntAsxcsUEHirTkqrMzQFmMYNcHX5XSbHRqTA9LXXB5Ljmw7TXjB3sjikZ3oodKmESD"
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
