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
    "2zya5PjD2pdcoBnNw6Vc7cqsn9oQpchKqkZh7kCVVJ51o8PRrkB1z3EoqYobULQUZJtEjyRHBgV9cmWZBQbjd51a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HEb2Qq54ao4mdp874fgv2MYnVxn8RaYCpQTLiebPCMXf7gomRsvTgzWtyWPMkyEG83cXHXowZPt3WdeuzvjjdvW",
  "key1": "5dmxf1BCY1wtKDHC9SSmUzkEDPm5BhbMXyLjDTQdFY8BA5wa2TLMwqeiBb2UsWr22qwN6hYL58zcmPHZ1jzUagPc",
  "key2": "5WQ8SUHsi1n8HkHEabCgC5UzfKcXqUgd3VkAFro92R4nhZyEnwmCPNVWGLuFJTYrdbPP5nS7Ck8Tam5fnvCNjgC8",
  "key3": "47aETPG1eZbTgGhAHkTqYwqSzeLxaNH2CyA3PNCu7ZjAr2fBovytmpiCkdSZ3r91ZY85eZvHfgRQATFur1Zzsfya",
  "key4": "3RtjMkUgfXo1BiTr7BHrQ1TxVDTqAVaCAPbKjf7PzXKZCvCSExr6ZnCpfouXXuNJ3ZqoZMoWv95Mi6P5hK33bvpq",
  "key5": "gKU4YmFGXs17qop7KwTkDuBT1mkYsSavoPiPyK41GAfJta1ExX1Pzh239cw1N3B1ncSyy9YAkudsB9JTtYGdT2N",
  "key6": "5omHbivzmzX8U5A1ZwibUmmNNzJkWRqwN5xR1VU1881ypZ4taRy2Nx8odeWZmjjGKvgp1Mp5aV8SajGyp89FUqwk",
  "key7": "5ahoNuZo1nmDhjdDryqHygW15xAn6FS1GTNTjKPALEDRrLrNjDmaApXL4HbZnGa6UmkNhVLXbtBvToMKhhjxR7kQ",
  "key8": "3CQTeb4XJiVvCNKkg8TJxxDpZGCVf1CxXw3xVaNpC9c7L5MLbBjzimLqGsWyGuPi24u81MH6UkEvkjEwU14hdkVg",
  "key9": "4K6MyubHgC1N7KdozVrqurLxAomesYZJP3cLVmjbiK1Uqku5bRtTx7EHqTNWNofSkAERFRFBPniLUk7ijjj8KQYT",
  "key10": "2UAU7dT2VDdqr5bW6nipg5kBsw2ctCkBXC67LQ32BjhNzqZLaqbtCzXty49pzdXr8at67FmyMrDU51gsggprAQSf",
  "key11": "4iKaLh47iR4JTU4wZ6Fargfn7k9mWzN3k4W3LG2QUwDE8h8fysvSH1rmvQ7HA7aVs1GiuJAEGszDMraCGZc4vbmz",
  "key12": "4w5kV7idvGmpKbcummCPiGBmNUz8db25RTMcz2hrfws99M8ko7b8YM7YeeopUw1nbjP4MbSZJcCJkp2WQPPeQ6z8",
  "key13": "G1t88F8nQXQpfsuZAQjQp8SsKNzroo5qc1gwKio8ubn1qZXimXHaGQimyxnox98dWSfqyPtcdS8bmSrT815aaMg",
  "key14": "59nTS7tAgt8ekLfCfrAvVEPNLpMQSDyrBu57A283P4eT65HpaHvaHXrzdaQaTfgYAa8ncjtPvhbgwEY37bbbmhx4",
  "key15": "452nUwQ2K9ALCKpL8nVtSNPkwD3oGhJxe2Y5DrDBG6tbVmTjwRXjXfzjfkcCpvRYYMGHKecVM7oMJ2tfpW7c38vt",
  "key16": "EgzRSqQzs9x8CTAn4K64aCBxF29qyayL7EdVR1MVGEzAcAyCbz4XXHRZuEM56ky1HJRD6zce9hvEtpGCAE2Qzeb",
  "key17": "4eeEGcwu8h554ZveUVhoMAeyrVVoZzdEptST4LqhLLQxfvXdJxcgMVqSowSQWvDhBjgHTygk6MHjuuAijBbifmm3",
  "key18": "7SjHbPyy2QHHwEVjQCfEJ8qG5ADkWSYretLPuyiq4EUJ7ndivkM4t9NFvQSfDtsjG2gxpKjm7QAWPK56XKiHu5s",
  "key19": "2gfvYMgYArpvtbaWeB1KoqT26b1TWBLNwweVqQE7Ez78NPHVE4TQoeBU1QHMgjiH8JmNtrdfBguMKX4MX87CcEKv",
  "key20": "46imnasBza7BVA3Ga8hQEVUPMdqeHV3hSg6S24CKsK3XgiCMBhckju11F9sfDsW9n4kSfK4bypZMS91jrkRWiDoA",
  "key21": "2arMfSGJtmhQ84FpQ8QpaP3Yh8KkwNiuSqjKe9U32fDzgkX89wi8fgY8NE89JHixqzAQhjH4nbDx9rP3Jto4BPQ",
  "key22": "4LpgUnStfV4tQUZroPHrhRu8jdr2BMRZdR4bt2A7GqwkhQbvddiuYJ2Caf1yrNeDR8nRmS73TmGg6yox31Yzt4Y2",
  "key23": "2Neib9f2W5zq6EnAc3fzs1ZKNnsHgcDLWzSUMfThfvwtVLzDfH9uBpx5DRh9PVGwjvKxNZ62tZX5G3Yc46retZiW",
  "key24": "4ix56dt9m7bTE8Ee2S5MCmdxG8YA9Uf5wmCAkHwaBF9NiM5wGmUVh6eVd4ezTYxUyPZ1Ly6GPCB1t6h6Nd4DbzbR",
  "key25": "2JQFBQgicWUbhcPFcGH68k58XYwaStF3N1bo5MpdeufaG8u4TqLtumWvwEr1quHMiL4uzn4ATStHr6Cr6qx8Ma55",
  "key26": "26RBTnvprx487RT133Yv182pfP5bVwXo6x8ngDGc8WFhuFLhtknq459ez8t5Y8Ruj3TMbcvLZFrbcdRT3jRkagf2",
  "key27": "8kfR4B82c1oQqSHEKSkQrGYbJj4SC17XLggJsEsRWuVV2fYue8ZxPqSVYGK86s49eCRnJ8p1z9rHPP3G643ebtq",
  "key28": "3AWGhfxgByuQv5m729a27ZMTw8HgMxJ46upt7qoa64vsp9YrfHjEHJx7uZqXFREV5DEQdYYP61eoYR7gapyeTxoM",
  "key29": "NfdN7ReiPPy4UKvGJw6MV3DrRZ7cFSRQMFZ9uU3bSwNwZboLsB7LKdbvxrYh6Tk5PDeBe3rUFLgYN245xXG4Vng",
  "key30": "4axncHMb8ft9nrsFHeq3xfobzxKj9L773qkM1nm9Kjt8zjwvhWuUuam6NLMDKn4t3ESM1SZoCE9qibm4iLAhRkE7",
  "key31": "2zLie9QTKXnutvwNkg7tPhuv4wb1YPcQLoEx4AquMbsjg65ZsbgQRV7cvtRHuDKv4qMMSvdZfU3mGyhJkcNGKdyb",
  "key32": "5UkEVxh4xfCMzeLZwxUe7ymmS5ER8HgmGqaW1Kp7yQJxBKgfqcEj4N4vSm9kiajBFKTKtX5yGzietPPm47kbutN4",
  "key33": "4zRo74uiTt2oN2AUm5HKpEPYNDe4tGThtJJzgXsqDpdaAnAgRM9pt1TGbYkrRYPQ2Rjp1pG2xqrmq1M7k81XtEaf",
  "key34": "3aKR36PLEmBAmQjLVubkim32rxhAdgw41eRKZPtUgLrfRLAkDiMYRpf6aiodPuUTWet2L8h8QCApkYc5gDeKyHD2",
  "key35": "4kPapaeAQLta2PeXid2XnRbVvrWxPi86Ajbb1FYLCjr3Sv8q9P7Yx3J9z9L19tBGmDuDZPZnnWRrpfhVjoAE2ZmY",
  "key36": "2YRRQgzc65kQz2Smr5cCUiGBiKe17xgxTbmnreTfuaUGsynF4rzbp4poF5gX36awmJ9oCCXVTgTDzfUM54oPp394",
  "key37": "2CaSEF87JMJutHkm9qUyNWMcRQvNbQbXhcpZGircfmEVGfWZnvGwD2Z13yGtTpb8sBQzS6ShsUnXJ3rpRshC39SG"
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
