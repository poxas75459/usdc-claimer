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
    "2tFL1srBk6GMJjHK5F2Ppab144kSBqziDMAa25WBxKhVhJLWPGVrVwt9HhvfjvZ9mnYg3th2sjbXy6AXmGceSfhJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VN5UCbN9NzosCNnvwb24crf8saJY65XtWPZXRQ5TJGmMScKCZGaPo6WG3nfWziTn8ZKpnpmTkuHwum9Zbj2DzDD",
  "key1": "5LL1VmoWtTaswmfYWuagAVB6sWHzUd367ppds6behhYGFqJtnpsgsdnRJ5QsEEfKKsifiUrTD8BcMDLknYenRRr1",
  "key2": "wqdeGY4WwTReqskzmEZAeFMmYfJ2NnHTpexPX9sCe1R68knwt9MdsHQyMFx5Nf8Z1c5CMQDyYZbbMhemuaCPrt4",
  "key3": "4cT2PyoddFhq55f7TKrvTx8uzusTdGfScLNh14nE5zG9UR2vAUuiqcPi54usEC4aVPochFky4FXJQkCYMM64bRQG",
  "key4": "5xEFH3q4ce4n3Lv2w7LMKfEqK4H4BrwJYa5nUbNaY48NFsKsp7Mh8LsxH6RAYF5UbmTed8yrJG4GnKChRGqqkJd2",
  "key5": "3kymQ3FKPdMUEuk8vjkwpxTnsbcFnpueh6cSghbyKvMH3rTQWbGQQvDRB7RHpKE5nJBMuqDbf2TWen9dp5DZNE1s",
  "key6": "2U9uawxM48mcLtUzEesP9CN112prGXTkBbbv4ST6qYfNQeEh9zPMmCan3cfqueRjxmt5MYHJtAFACpe5Xs3Ykrp1",
  "key7": "4BGC68J5NWKFfTZ5Bm1N8tyARdagCxf5opSMf136UZeTmcUmvZcRUBvPNuPNsfzK22X5krkgAY1C7fZUL4Wq9vVV",
  "key8": "2rJmyZofgaM1T7yeAKi4UixotHxtn3YryRzsBfX1NrvmUgvqqi3nNy9CLXE1DdERSMh9N8oRGyWc85okwdD6tPgy",
  "key9": "4rFgUCz4iPi8BLCWxmGxp3TAYDBJ6qFzFZBnTGkebHGcqT9Un8YHzuK2RnL3GQyUUdDezCuWpuNhnp2QKjZYZJaY",
  "key10": "MqeGyQnHxXDQWLXMjZxwejErmEuVLw7jXorotQbqwWjbUwCzuSJCW1p3irb2roYCXMXfNNzDyzxgHvLm3bm5teX",
  "key11": "394qLTWxQoTvKSJACzSwkP9QjvXP7ogVpfBP87scgjrATgLn9BcEqdMxzVjThwH4f2Eg3LfWUx9mnPJvs3tL9L3h",
  "key12": "5ELqjDxXa7hBTvEaLN8ct5SqqHXrHFuZWu1Wut7yRfHFv9Kh9t3pD7bJYPGFyNise1bNxLYyLWjeW2iqL2Gz3UpW",
  "key13": "4BpEsAKcDcMCWewy1Hbo87rrbqt91jt5w68iMNxiNuXbxw1fZq8QHg4szDMP77DkeHx7f51HeW4n7HHKXGFVQLSr",
  "key14": "Bq22az5rPrUF9rUor2JivPTbVrEi35D7T8njxo6YSvMyQjY4Jnsdb4FRLCVTqXhh76qmPmrBbkmzQhM9Yy73dPn",
  "key15": "3RdCecaWSnm4EDPXFh1deLM331uPRnJYyyC77ytuvcwb1yuSXUgb81LHgGdqFApuF4bgE36KpUWBCYoQEqmYFre9",
  "key16": "2X8bF6Yv87cwbcqzU4jvcm5n674bn7TLzXFksReJntwReVa2XvUQnKt9AWy98MPkcu7v4iF8JcHrAgZGPBQSSgkr",
  "key17": "2HfJLVd7FuzMz4N9pegAnmZmsSghwRYWmWByVAi7CFjjaBy8DcTHEVKKeSLhimLapkKLrqsrygHP9qjjoWtk4d5n",
  "key18": "ptgejzfzJqtBMinnNUTyRUEQsjS2Ma6JzdJD7q3ZY1sxhzrjUXLHj7opYkch7cipi5VwNf8974r7SU8PRW5zcZK",
  "key19": "4FHaA41Cc7chNHG2LbCEYWg5xyaUXDnUjwhTrQPPRNi96SXSrPaspbnjJKseXwKCjFCFkAPz6oyzUVbzaCQYJj7K",
  "key20": "SBxwDdhCXx7RQSEWX9S2CQopSojE1wd1HRvPeWKDxa6CuNKZhaipBRcC9D3F8f6pJeGPGkGu9hG2VikhHJ86mKS",
  "key21": "26yxqcb2FiK5G9G3Y1K7mm9qaL9AYriS2NXqPNSMv6o2goV8BycmRCEJPBRVi29f4Q3Kgm6961PqmaQ4St7deguM",
  "key22": "3Yctxoa5tnRF15iBQs6KD6BhgBCt1NEfnedHZbcGmoSKyzyKDkoz7CkTFsL7J7o9weU8g45VV2b9sVw9CYX3W9bK",
  "key23": "8KdZDPVJoTLkZyyLWULzDVkKZugQNt7xeMEng5X9g785miAaueZS2eQ7RURAHP6YsoT8pPZp19KRJbsH457AUL1",
  "key24": "3mhHPzCNU9UJND9ekB49HG32ynuj57kqECPatigeai8ySjoiKD5usaky2rZgK52GJYg4Cxct8zbkQcWWDsyK7uvj",
  "key25": "3NwaqLuAQAEjTQQ1vbq3F7yUmaAWqT95RsAHFmuMTCxhpqJX4VZhc2HH1qNkpEV1FwPEuQF2JcFJGLnFUWd3oEFT",
  "key26": "3LZQAEai1KzquPe3qZfppevXhFiFEfMGkMFLNsEWubAyDDtBBiiyNrGfeUV8hgZGnYKyqmmF9duZdvngaz4U7cao",
  "key27": "5Z8VZArg5eMJhtiuorqNjD8mvdfz7kSmEugGihiKNmzfwKXNzPub4GWRwKAxPYDHaqABvCi2EBZuWr7Z435X9PWH",
  "key28": "W2dEYPhRPY3u68hgEDXKaT73MEv6j1nuMJh7tDw6u52pumD7Xq3qb31PpqEbsPRxWpnp3iGdrk1Z6XPiY1G8qrM",
  "key29": "5cLzi2X9BmMbyySGoWXxFKvvEhXzJz1wR4pfGXMmvthujeupTsZVBicXmBMN8GnmuwugJbXa6QZukuNJYPtD7Q2D",
  "key30": "3z1RP9VmMW2XjLrqwaXBXdHSdMjeCkfHvVN2oFFVom6aqcRrTPyZRWpvaCDTx6tE31M54zupUCWABYBJgs3j2R5E",
  "key31": "2CcxZvWNqmsVs6zWgdzJGpXZbzxokCCwksrBbTZ7Lks51MbrE8iUC4KcBf5xYo7JMwRPVH6Ggn89aSQii99hopfX",
  "key32": "58tyWyL3N1Ctux3KRVdF1HY1oLqedWBqbSqJEJWBaVUVLSWeXjPHcLMRHi4weAHqA6cSDN2v9GdWtXj2eNfzKyVd",
  "key33": "5UEPAH5km9cwsyFrwziaGQG4BK4WVecmLUp3JcZLobuu4KXPvqXcfe1A6XNwG3Wk3g5jR74Cim5YVpF98GzgZeZi",
  "key34": "5r9vxG4bA9VDkPtUCsmRAEGGyz6Mn6DsGZP36rq4wER4Rwtcqk7jjk6NdDxYKdDuZ51V9v88qo4NLbAH5isC8es",
  "key35": "5wyzK6GRz7ThwahMCvcUdgWnaGdR6zw9oQmLuDpcdohKXQke8CyYHaZ2n7qwxckyBSfBxA2eHJEkt92sM929yCiv",
  "key36": "5oTz4Q8ZxXXMPguAcLQnJqVGU2CDuEV86aRgkaebdiPhTGqqqHuSvVUBdieE6iDKtJD7oLVA2i1CyQmrjigutHiL",
  "key37": "5SkrhE66rxSFG1PJqMQW269uNa9oR5CkuNFQRJbruYny3yWPwJGyrhyrqP6YVGvDoQ4LtCHsdwKjDbBZ2FZhVHmK",
  "key38": "3BUqNkZ4kVrbDDzKTWC9cv7Nm1uirVSJadF6od4nDEnHehL6AVM4Hz93Qwyt5gDoFt19AEKzmWKtezbuFgayJMH3",
  "key39": "3cW4fjV6ipLYZ3CtjPDEf2jyNvWoiE6WaWR2YfjTNeR72jN4Ajpq6vJeFyAHYRpv9RsGuvnB5DkjqxP2R7SR85C3",
  "key40": "34zcsc3h1djNNZTCmQDagbKgaGq7QgS9BwA7fF7gumjcKCV8i8e5XzMDwj3VjiQVaXEdgn7M4s6vegTDN8bneNcH",
  "key41": "Vfv7A6GnrPcS4BjbKd68UHzqiJ94JSZ3dVzgCdTgHzTUD7EVZHdWLJY5Cd733v41kVYDrw1ANBabrzd9HFSVxMX",
  "key42": "jMmFwaPt3YpnTtAFQBMXSjvNCy6GPuxH67z2g3Xgse2zXUDfaNJyMHtrs2g8QfcWSacyx5uyaTiivm2msjDPEMi",
  "key43": "3Da4NQrfLZmL31De83S9ygEPMXLcNTUpZqJYSsyMy68MDqFrrFFVnbdwKR4tTuwNtYhhBTYJ3zfewy5YMz23ahzL",
  "key44": "4zR37nFCzsX2mkgXMEgReRPiGxjbJx7UjbyD8tmdjvDLMsz4omnaHdnEm1LZPsbmJmHbuQXDZ2KCXM868w6gWs9G",
  "key45": "4WrfBdiMBJMdgXkPGfgVfFCnbdqLF7sdb76hCxQY2rBfFvUFzy74aRAT4M4Gq8pPNyrBLkMZHHtCffnywrccLpb2",
  "key46": "3UpALj1yYqvU2f88ifkETTu9YzfY8UbDLGLG5ixUDWQVc3fAq24gmFNtcJicf4twUWiWjAYdFYE3zAP9gR2FcnJF",
  "key47": "56ZUFQqNsFEPfRNd4pjfARAcVZH6gjQnEf7cSJyUJ6voeS1ZcYikditbemFPE1oNWk6G2RY5bTdnQrzrRMLYCmz6",
  "key48": "63yY4WgCrq1p6BHg3kpxJoN8d1KdWLEuDg4CYMHGT5p2xoDXSwzZAgRSyKvzZQh2254nfAavFh5SFpPKQNYJ5iWZ"
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
