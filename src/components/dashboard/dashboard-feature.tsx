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
    "2fYpSsLtb73FE9ZUe8Gpz69X7PMHVgTHHNJZp5v16gJDZwMktwrnEV26mEyLza1rZ8TUhQ3hiaDrZvg8KzZpCYfm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XnnBx78zGZw8uW3HhV4GgXdPAAV96pRZoLL934NZKc7i3BgAtK7riA3hjkAykQyT9kjacWjToVJGWn2D1EihzcF",
  "key1": "4ikAXZ6b2y1Zv3B7Aggu2Y1T3hZpootRxt7sWybN5QHkEj6wu9Xpn4ZRBfVnENpgyi5Cjy5Pqa7re6sgFxbpxHn6",
  "key2": "TVez5CtwbFAzAhfF2wYJvpMvKRTVxNsMfozZWnhaH8aDPF2h1Ct899FHLM5a7K76DisUxu5vox72vEe8YZRPSD6",
  "key3": "4w2vNjKaDw8GX8XiyW6LDBzDri3zASQv2YrjJSqCY678PoWsdq4hshVu6gvoPCBsG6xosEggRSBUtQ2Xsh54xHj6",
  "key4": "JswLXhgj1A82dS45ATwcQJWWKafTx6J9RDgS583mQHo7v5zbHLHvsTwuJuh39zoxX9nMopRAv55e3Byf7YVjbdD",
  "key5": "67kNzj1HHX8LqAKvfBJ6FoZti9sjKZAWXBX4T4DXbKxN79Sf8hoxhg8AVSBhH2ZmokMxpV5GpnJKczydt6wVJm2P",
  "key6": "24WCoVVYaY5GwTxEy8NiSTy1dQPmWkneaom6H8mVU4N2jpwEkBfZKdbedCnVQ4afweuaffsfikKCfjRLUj4TisnN",
  "key7": "k4MAYTgBPZ9LhFiJCXwE9EoZB2ot1bwENUGVJJXTsRAxGeQTmLpmDCgmvqtHanWiuoo3Nsyr2hmgwoZGMpoBuWo",
  "key8": "ipRwybVvMr8dqM3csuJ7coWQwxkPt5TsJBDwwGPBux5AaR4wuuWKi4wSjRBU8RMATJfi1uhqFYNQ6xykSbdqr31",
  "key9": "5N8FBM2n7q5iTXXHENQAGtpuMjaHKKEqyUaBM3ryEvA23kuEkqtYRRu6B2wbKXEaVR6WLvkS1fZeGpK9NmsfL4bn",
  "key10": "qFJ9VbWx1UuHfdRWj4bYsfoaYXRrZG8trPkGst73FBgf6eyRurAFAAKqHUvjQQui2cr6yVcbkaR9E9CejqcDY6H",
  "key11": "4fMFjSnYa8LAr2rj59dHJ8siNsqfEV1uWPzDF5ZDEzpuecxuCEvgJRxBmXvZWn1pWFQfExtqPYZG9h2sr527NMoC",
  "key12": "5KbYXtnfqJCvY7XM1c6NtX5CAnQ8phk9WbqsqRwUC7fArH21yC2biL4cDadUJZnzP9BiTDKR1dRpGXxgYCvQFA91",
  "key13": "2EQ4mfyup28j5RZba2bvUgCL1wbgaQeUNNowvpxWppYFtuRVyUa4L3FqxNo6rGcr4dwRDKXyhR4NoK8rXYzJYQYr",
  "key14": "2b6SumLHsmNracYwTNrRXFdHkqYVFdu3eFCgBTiVnLZZ7mcZ2w1TUw5bGJKHTZdPjQrrv3wsMf9kfRQEXfu463e9",
  "key15": "HuJtSUa2xeQG9oPqgkN2SrUaA9aMuuimzvaVjUQxxqFEL9cZiCJcebj4NFnvJ3kXrDhSx96UqSsJrEKp1LbmXay",
  "key16": "3jpM6ZytjeZiq6zHQQKPBUBqVGg3fqn4MppKmmaeWvHSZ5S6U6avahab5FAYv2PtfqrisAaWWw7RTSocUTUfZVas",
  "key17": "4uWb36av6CZMK42DoY6nj9uRYUrpuoUPG3WBv7P95yKy9avkN1VnZ2KCsjkXPBqEMm6SoCwiqAiX4roi1VNQmzUp",
  "key18": "7Jy2uCfBqZjYhttk4TphfAHDrpiAyATxALx9sNUYsPtQtkYv2N2zbph8EGehUKR6QrxmHohV63S2NvUdLC9cre7",
  "key19": "44W8aMVMndeQ1dYBfu6N6XDSPwg9aZbQ4Au68i3kx5zKxqSLjrmtD9A9gEMtUs1M1yeh83nzDZe54Bmghnz8pVet",
  "key20": "uZwDJ1yk1fykPeivsai3Qa6pLpUczwjZRrL6MyxZLi7A59u3pMEKAKGQ6Vi8XFxyG4fwNkESZzCxgo4FBRirCkc",
  "key21": "3nuArZv2HabnAVch6NgTVFmCMjm7dtqPRfq7trRs5tU8vT51yJeG5otfrhaZXmxLxe9AZEZkW5Qd4r9iYxyBz3WA",
  "key22": "5EYFMFPkjMJXNkNKvMNhapVn7Q6BBgTfTfuy1aXddTUhL3TT9R9vg294aNQ6c1gKFKbUgG9NrtgcBUwuwi2Y4kPd",
  "key23": "4FjgWidhudDb6UkbCj8Qnexv25oYbTSabnUbd1RFqTvQ6kuae5VuCDsoDPP5MypWSYWvpTXbkWbeUtZdXnXtMwRf",
  "key24": "5T8PavmSEdgR6TbF8qVMKhkuqEB87VaA4ANh4FnATcSoofej2kKYmoj9QRAnMe2T7tfeu1FvpfB6snGZnuLcQkc2",
  "key25": "4LAiqhtTyApvnYjjb5txKPmqcpFntzLgJFm5YtFY8SRdrcCyigHfw9NzDW1oa6XH8GzkkvDxGQZk65SrxA3jPE79",
  "key26": "cbCcnrN5YhCYbZsh3MkJD11npaDtLAr16PLkMMpp36yJcWxF97W4UULkqhDPmqNZjx7QBex7VPutZ4KL4tFcFdM",
  "key27": "ahPmyYxsSb6RG2bfsKUC94cjSyEk3GsuT4awmYRbdCvrQ5fFkrKhaSeda3HJqxJTY5kbMnZyJCgpaaC3bSEux3z",
  "key28": "59xx1FUGZ7HZgHJALL8h7DbEQX7T7wVGQ4CM487ucdoHnmdtPTYDK7AmSGqbFJrWhRJbbeApVMafwLwvTMdufCAU",
  "key29": "dRPKLGtPHLoi7RjisuLNkrCVSVrojJFbhNUQYKNmfJtNBqJemvfsNYs6S4ZXcbckmpnDxyD6yH8x9HFd7B2hmVo",
  "key30": "4Ek99FQ3Lrf1N17kcNmJz6nRrQYqzLBPqUKF2fFdxetGtr5bygscyH2oaMaJnzU76EhG2CdzxW2rjUDv5zL7eseg",
  "key31": "XTiTTPSuyxivALuwkEjYroRrcrMCCYwkKjz2epm4LyFaCfxz4jcLS6NczC3QqJUMXS3Esyj9jMEdbhk86Sg5pjy",
  "key32": "3eVj8k4UgMA73suiMSf3hGdAyYCSMgY53HP5KFy4Q3EBusKCsHFwUMRroYoEGZzC8wVkKBiqNR9Mi7bXRpxYW3ro",
  "key33": "4zLPYuviMs93rGpwgipELKo6hqr7fYc9CfkPDY5npCyWUCieczif3ha7V83VL9um86eCFxtWxvhn2RoTmtPC4edy",
  "key34": "2B6bD2rWtx6TVRcFWpqQp3EkMG6dyEZYbTSGWs6MAjP6RkssfRgxpebUUWu2rFxu7NiB4SYtN7xQ13P9cSkiY6f7",
  "key35": "5RrcepPh8P5Xieo76Bz7rqw2VyCM7KFDwmucybqDFAf2z8MSfjmqbcMbeL7S9TWvoqU2NvvtJDEeFftEYwDmjB2K",
  "key36": "4XMAcJCz4wNEfeFQMF5dJfAHmB11sRgJFRKL7yk3Xzq9oXeZMYqi95e7s6VqgvdcwkJSaWyYmpyo1YBRRTG6SCG4",
  "key37": "2Xwcagru5u7wS9eyVH7kUtEr4naSqyNdLPESnA9X9Umco3FXJHqTgxraH7svmFhbSuHGcYXUDwMprgYgoHquaLyY",
  "key38": "5ZNQoQXgSM4bHMinxTsKyRguccVng9F65migBZqhTih7RRhFAt2H9RgVLS6Y4bqQLtWUzAWZVks3k7kG8zYtzWMi",
  "key39": "2oQSxWVFeeCm6C5CBjFcPsvqGH9k4FgRpiLrYyjSowAhiMD6DJ22UNTPaBGaf9wcZUcyoUkC1JXB7g7SwFuVdj18",
  "key40": "mjbv1GNNTAqJZgcGMA91gDCfaNoewhxgJk5YStjc8SF2k2eiWSWNUhbkcr113fNzwmSjNpm3LpW4yT49zNQbhAy",
  "key41": "3E4xUDfVs7MTFP6yDrg6axdeRJUw3rx3Zzuf2utSXMRWJeshEPMnZVU3T5JPfPzAjEMHeUsbXPRTBZqGbjMu2QeL",
  "key42": "7ERUK3E6XSH8UdjZf4SNuHH3vDBw5jPy7vkPJ2peLTFG3SY8EGiiguLu7yr8RFZrp9ctD3KK3eYZNd7Z2PoH1yD",
  "key43": "2SNNoc1Y7TVDniEeswY65GmW3X7teeh4STZHWZCqWeCzcQNjzPjmWPx5jjuZ8yw9ms7V5HGwDSj42Kc44cMWFRU2",
  "key44": "23AgcPyaVBCfZ611DjrEQjKbcVyydL81EbfXffokXY8CMcTtesxi6gf4iac2wuRt5G4x8k2W3k5ez6va4Qc6AN3A",
  "key45": "3Z3PqMRZ6yA6T4y5UwiW4FkyeFdd3KEczGUMMWMHJ4cZfVvWBW6RDxXehN7UcMrPAAewWh6ES4LPi57bmckHWjHx",
  "key46": "2ETxNTZ7faDm2gLyYZV5Dae9B7w1UUofv8c6bLq9Mwub4uugCZrcRhXNTv1EQwM286s4Vatoyte3zwqA9mrAA3DS",
  "key47": "2t1zzhEH4qznVyE9bzCaVQBabDPmrm1cDQ3DPxRtpcrwTjSyr6W7mXwA55BnUq6XqH6BD9dinXuPfeGETyGXfwse",
  "key48": "4avHpHMi7fhhxRE5VB76qiAmVRzRDpWWZuYa7RJawNPsiRJm9gDD97cppTSFJ1Wx5eRccQngEZu9tNV47fVtyE2s",
  "key49": "4MEhy7mHWQWF9zknEn7JprCULi1tSK9RCYxmg82Y2S2nzoQAoc2NhzpTHyQKXWi4oY7cURSZjYeAKHiU48iuPzEN"
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
