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
    "58qFAoMKhpPUDhdHpquH8DoexUQ7A4KmKpYRmacLqot9VLegzkQCnYoJ19L58h9XTP5iUJ8XA7K8V43Q5GUeByXA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w72Vf7xtRLRq9FbV5j6yUSRfCBX63G3H2C7t5bXEsTNTNSKcbZdDZsstn8J1cdDxsuKzbruZJ9p5dqVoHQBBhds",
  "key1": "4EvsYkHo1C2zo2Zwzwub7mNjbVXoXpdCqFY8AKN4aztdFhV2EYS2BHtecWmubZ5PmZWALrE6wMPUD8f55MDSwo16",
  "key2": "3x4GafdAyG5qaCRkoMxNe8XAJy4SVBZ2WH3rr4GPXtnDZQKPU9Tgt6Weux8qGALCeQBsv65FBmETBJbibx9NK31c",
  "key3": "JsQR9q61N4e7PL3vfG6ws8ps1CtPwwWMAiCxQvm2jtKAHEooSYHzGKw4pvhC46csVizKCLB6GWZRj32pku49aTk",
  "key4": "5boPzd2RaSJKePRc4x4S6FhMbqdsiP49pv7STiYPVBhF14cZcpchUfBWNGQ5RVin4g4JNbJPyEoXhGZdAG6Y9zxY",
  "key5": "49qaLyHvKgzuRQDRZuCdUrR6JAhhi2wo81avWpMcPpwZNcVDcTRARFxKCmnoK6dqNkbFJ7baoc3wRA5LnbHkFJiU",
  "key6": "Xbh1jeBKh6tEhMRj1E6vQ9NW9MFxMfvRnwc7UfVWhrd5da5KYzhsQLsCNWJB66kuLRF49AUc2Jy3SyJB61FkyXk",
  "key7": "4WEqSbXUeD1J2zbJMGuvXxhr8MYDYsZm4iRhc7sGnZ4z5Xm5n6sQXtFdktvzn3ayf5ZNX4kXdnatxZRUvpn6trvB",
  "key8": "4iVKHi6vMWi1MU1NREVqrxm8U7LvmNCkzfkSfEaYAjYtuta2JX2dbaVbXd2abt7HvEqPdfsmgbVYKbEE9tVSoCj8",
  "key9": "2A2bHxgncrzHEnX8wi3cvmKttVU73wS3r9pcnj96tnEofmdRJQsjhYHD5K9bSRkX4SwAyz5LbXmmUJ9KShhDXDyP",
  "key10": "42xe5ELBAKwdpPvHUnxEbCTBgGvibBKSozCeCbCGYC3AmeGK8xa36MTAxzuDXgViST5SZ7QZxW3fknipa9VAwP3u",
  "key11": "4bMt7B1BGBGbHh5y4QXtA8jQuvYw5DCtJaLKEvirjAabpmWBbuEoQrZFUR7KDvP9dzbw6z5bG6J75BFqPmEyy5VY",
  "key12": "586Lgcy8WYdcPYwdRxdahoMavnzdg9rPGeTd3TzRJURcwkbjtiFaFPm6ToJJzjH3jSiEwr8N4R4hJkDuAoBJEF1",
  "key13": "4NBLrnreVi7wGwrDrjm1MUbWczYyhV9VsFEPcdjriSZ33wdn6Tky2cSZkgS5RKmWkyVT5zTiRbN9NwCzKE8dhPCL",
  "key14": "qdrc7sC7c8emEsAkpPiEeWRUbLVeiuJAkFfe1ywDp7XhvXzh3mVN2tdkjXmeR8Vr6Q9y5UoZeHHt8rwiDLEzLo7",
  "key15": "4QLTh2U13f8y3LmS25p29cZMANq4JQ3F1uxp6Ch7euaPEsdJ47yDmUybARcKGqsb7VavQwVnj5CvdsDZmagrtvfw",
  "key16": "2Ymc7FMpF5sf6xU7kv2JjoJtK7MPKUxSJpYVX2L933g9R56r3WVSVLdDpWhBYWesMkmUTUXGEDAaScYkZnoh51Tv",
  "key17": "3CJD7j2nBJyYkrEYpfpuiQVaqmEqWRXCKpMkxDce7NzErxXwWnkARGq4YaYzHSs57AWgVs3ijJhECtMHMeR8pjT8",
  "key18": "5KYgxqL2Y3BTUATwKFAyf2Vn7NSepP4Ptd1i6q7cX63ev9Khvnf41MMF25ModC86VFwfYHkeJ4wkjujx2PaGPRt",
  "key19": "3QTaXwwkP2LaKwvPvYfR7yaRV7j89op8t5FigLB2EsW8gUW2chLr1LvY5yZ9tMgFBHKEKqVGJCi6Aqozds7LFGBR",
  "key20": "29U3btLUJxeVGh31QAUX6Kvhci1VwUft8Y32iBUXpfSHwGJg4KhysQNL7S5Jvd7gc2m5pkziLjQLVQTrfc9wosW8",
  "key21": "2GXEKDhbEVgPEfc3V6Uw5uX3WncQWHVZBy1hT5xQEsQ2FqEgrBmxgMhof57Wodp6MXgKG3xErMsUwjCxMVmojZHy",
  "key22": "49DEb9cwPqG8Fqu3oPdjvvF7awzuT2o3CEeAvEn9qqjzBQuk8GS8Tk1dYvxskBL18QgTuqdcoSt2o33nUgBHke2p",
  "key23": "5UEiZR2suBBn3Tz983YA3uHdcsctREwkXJG87LB65E6Xab4ZvMfykvjNKG8BFa29n9JWsR1fZ45nzBdgq56BHpAf",
  "key24": "4XPRsF3yKBwdhDe4u7tKdKEg2iZ36EGWhBLyP3DVc3q8a4gzndquS1iyFNeuTDT9fZeHRLUegxgg6t9ZVNSdcGKB",
  "key25": "3nMbkJ13yBWG6biZtN3Hmz9AXx8EC7BVa77TCBNzxej6AmR89g2KwzgPXzUwGp2xfABfpwskfRdXRCs9LHKSV7CT",
  "key26": "4w1fVcXMtxod7ePdx541Z6YdKhaJoChy2Duogz2uttBq9y11K4jwWm4RanzXkRX4dBb5CHSwFV4NMe2q1fMU1fGT",
  "key27": "5k75REvDosySbDuPXdoQnXtThSCmTV5Yt5VG8WnKjJ8iYKEAfK6hNazzZLi7eiyjzE7q7UJbb186ZkWx6Bs4V3R1",
  "key28": "5tgngyo3v2ypdcxGwUPDqPdUvvVXF1dr8oiKXZAM6815J9pAcYKcdbHBSqcUTVgaPTRRuAVAsjtyPjhb6Zh7eA1Y",
  "key29": "4aVgC7oHck7JUDBo2yEY3myZ56Zza5NbgMubWBjoFKn62QM6DmcywQAcv4a8reGDitYhfyWz28h7zvdJrXrZSjgR",
  "key30": "4WELkD8GrWqbEAWpEjmPnLi5PmhrsEJQuDdZVsJcE1htBDbjsX9ZahV4qkA3rmbn93kjTLPKTHhqkWC4WB2ncSh2",
  "key31": "5bV5K61mPczgRKcGY37mheYWAh3Rk2DgPTEPyYHyaamX8zAqWYWi2FCZDPK4Quutjj9TwK1se9zp4Akd9C6VL7VM",
  "key32": "vog9SNaQeQJFDxVEKALxqe3iRmC1kpK35iqXpTYSiNhxm5M6MTTHCDJZ13kR9sVVfmCG5ZKsF7sBfn2JZKwA4oP",
  "key33": "2cCgX5rwfsmzZxHkAxLackzeUfKZt2JSR8GZzcadeprUX9KqKBnucQTLrAkdyJpMy7s7299DYFij8ykxrbCudZ3d",
  "key34": "4DM2NWbHbjHnrzvfCtmqY8MbXn7KkdWpM2KSopTcseTBcBatVmh6epcUxn75o1xUzS3Tww7FAT2WqN3iqa7AxW5m",
  "key35": "4jNELCV4DzBVfnfHjqcPGYvsPXABpPQWEeqULBpP2zxarhHZP2C2ihXpmsgkJe5GPHrCovZPhQPk16fvk2FhMdLy",
  "key36": "4uGPLCSDB9rRSPc8YW6b8j65eFD42tEujAEaDiZzJ9ejXghJGWzbCk4aihyF3moMr27DLksGQv5mhFiLzJ4YCgzq",
  "key37": "5CJYjcSGFjpG11VpYiD95UUkPdCxFh3Krkuu3Di2sgmUQrkrkGQDp7bTupkuKMVKD2LHg68o97MuKyFVYo6syfgy",
  "key38": "5cHyh3PELA764oj3tX55JRJt3PFEwcz9wvPsLy2zstAiyayd6TStJSEeqR57b1w3ryAD4imP5UTPpEvjWDjZjb8",
  "key39": "2QJd3BVcWEB9NWpgGMmfCeR6NFCyBWCLh5vrYYgxfbM8W4srimDvbQYLakdpd8YvHon6CnHARHcxhzMwYHNYfM4J",
  "key40": "5dpMHEBrMCXa4gCZq41AgTw4M7671BC7oUgjkJGRJfs4ieK7duRWqJ8oe1vmVdGJ6tWwq6khCk1GU1VEoVa2kYNe",
  "key41": "3NaDxBBrko5PFWseGEtEzAg2mZpxZ5QKTq5UJMhDZs1w7PsYkX5kpR6QKNegLrqhE8r9SykHGqnktt4UU18t5KYK",
  "key42": "3pHFaMARBBLvQYUqnm2CUV7EJ7pMy8jDTTpJd7iwTqCRbQjnTYeHa3GEHSUJepzpwE1UPPLsVekc335oY4C6H2Et",
  "key43": "29dZzZH1HFMKeCnePc8DZwR6Y4ou52dfEfoGZfuZrRpEgJTXC8BmEpgeCxzGFeKefYxkSyU2wmPyj89ww9nAY37W",
  "key44": "5VXneSwcXu8HdJwnwKdU6TkqJGnQsptH99dbrSTWpXwycUE2U1hK6f3ryNtYxEUJZug3XfKWN98EbqH7JgpCJqzT",
  "key45": "5u38MVeUGhSDaSQB36GcsRfMWdCLRYgXhh242CFyT9GYiskoqrrryC43Hd5rGMxL8fpsEVYrGcNgwNbJvtZNfuGZ",
  "key46": "LXiqc2w2AhgTxEudpYAgCUbDEqCqxjs52CyComGpsRG2t7VuJWmj9ZX7zwGadt66JowiUiz7VE58mUd9GWL1ijs",
  "key47": "48cCrs4cARyxekwAz97NuVVm4gbDUQL3GP7LbspGyenpapiru4nsGDD8E59fLrkxwLeMMJKv6HgnjnxNDKGWEwyF",
  "key48": "2VGmVJd5B1zCFG4PMi7xcQydtX1LzToxpFCKuKHGwDYnf3M84zfX1Hyct6jntSpPc3Z25YcgVJWPW9xJNm1wFmEn",
  "key49": "5y1KWxUnEVEF62VTuSgse6EVpuZeEdfGcwp2XwmZCYVMGXQkGD9vdkLZNF3m3xS4dGATCyXNFLAoJeayHh7dscU2"
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
