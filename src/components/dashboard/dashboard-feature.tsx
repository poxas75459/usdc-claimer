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
    "Z6cAwntZf6MeSyRE9UgbLBR2kdVpgvF9fayHv5Gqxg2hC2dnawE41Bwy51QLt7Sec3BwD4ChDZBaRZyxVYWcs8g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mLojkkp5mYbArv7hXFZL9uX2Uv618HUrCwNbreEm8Z8982RVK43G99CM5EARbPUgt4ZzhzbuHHkMq3y7iv38jLJ",
  "key1": "5Aybcqna9Dw6hxb6snjhiEfeMTmD6Hq7dJA3oU4Rcrfht8bCZUG8nrCXssMRwP9Vu1ahxgeb3SiYs18DkAE4B77a",
  "key2": "2ZafEv89u2PxUkPv8oSd9qUPei2m6jaZMwQ7qmgqtfjwF5DUEGK8FykhH99Tz9bt26HaKXSbZnTytcH6Ph4Bv2SY",
  "key3": "8QD13xuGJ9bqKfXk2cSo3aYbcCg5CPCDUrVNbi4WGimJTnvXQSB71gfY8TpEkhViRLuJeCYr8cRohJr9kBwzavL",
  "key4": "5xKvi2hDXohnyxeyQeQXqJQLEHABfFHb4aBc9urX8ZD3yZP28zxG9PiBbY4aPisjy6YBKFyykXEz9EdXh8azgdqS",
  "key5": "2bUCJdV5rVyvTNxmXFYiyyGmNyodTnFD3xyktya5ZBFTqQu81sL2zf2ft376cMtS2jZo5cVpDhgq7iCakVLxthyL",
  "key6": "LBgx84AxTguqcuoi6JDhjYu73Da9DxC8KuPoFnDvrKfD3sGLmuq9RtFkLp7k9JugLzd16AmkgUhS7pUVhNNqV7n",
  "key7": "4kfsK4x1pnNoZ4TNqmu4s4PXAxQbiYLwsjT3jqGkVG1fG13sCkM6jP68kD3piV3yiD3GGcX4PdctRLeWKJ6YWAQ3",
  "key8": "2G43B3xLkB4ReptgusC3zJg1v8Wa3CUfq2KktRnYG2dZv58PrXFnyKsmwUAUe8rirtxtf9F2PvFMY8SKre6sFT4E",
  "key9": "4Qj1vfUt5EVrz31CfWUa3nj7i6KhGHJBkmQ1EMBKay4aXBspSXq4aUbeZdVwKGcs7nX763TxJDam9SeECL8uSqT6",
  "key10": "K1H37GpBxgrddHLaSeSnkMiDaXiEVCwwApuZgn4j2crXLa6uRb9ZQEbYdGhUyudagasEusoHunhk1k499qC2QxT",
  "key11": "4krFALKwb5ZmTbUCMxQqpdtky7AoenvxcK15ejybgZU3KrtBUiqpVvz1GVGLG99YX1C62WjbBQnXqQvYNzPnxj6a",
  "key12": "yLsz69Yj53FSne3WnygdjSzvdDrBM7gYECMhVWs74Br4ZnMx6GPixoiDgyweWH3JrNrmvFr7xtbkX4FWTAL368x",
  "key13": "3Fym6puyziLBBm86vZCExknVYups3HnVR2XdndJWNVhQ7DMa3ZuziqnMDyrj6SKD3jSecAcCaxAsnwja5ApE5t3x",
  "key14": "u18odDYgPSR3K2h54zofNRfKsQMhtNejRHJhV6E8Hh4oBx8emoAxHqQWowB5zCLh3wxup32X8bLhvDPtTuULoD3",
  "key15": "54E8ZcuFE9AhqbCGqBnNtygYQeyLFj27sj2Cwcm35Yo5oREzo6Xczd4Vh8RD58MyxK63u8aTMXDt7qT9QhinX3jh",
  "key16": "2iozhJWg25WYEccKFFLNyhMxLMGaaSSJTvRsz3U1JT9EoWe2m1cg4P3XxmzvJxNpaLeifdtMB9v1mWqvbiRUcYVg",
  "key17": "6fLVJufp5gi6qUKXXYMxhLK5HpHZdAr7eP54ewJiFyWGEk1ETJvsPnThkGcXfdpFWUVnb7SbNUw4MrEerTsXZ65",
  "key18": "2J3aPcw5hTJngxbcsmAZyergEkiZwVJ5J9n3KazihjezbPsSvdodFPUf2QagYAcZ9QE8abmzpE7749HEYJkn5WGL",
  "key19": "5b3FZktBKkGSMLdnCj18jakUhVi4RNNRA9L3MRqCgQScDEK1ifREgCQtz2M9BLYpTYkXpyUwCmYf7YqJCseMx1vy",
  "key20": "5teW5rQEaXPANTr5EQJPY1XA6pgMP3T8ZhH7V1bkHZkQBSZ3nffYrKN8wj2SYYQkWXwVwQAq5Ut46tJK98pQZsAH",
  "key21": "3VwD9Epb88rRVSnThu8hajn7MH6nmuxefvXYSa4qE43nP6uGgEjYYMG4TnZ6vuftcMB45JHgVnKvZPXwGP7i3hCS",
  "key22": "4gjEqvxUvFum8rT26LEdrUzZmd4MsuchGTb5fnA8pLSNKcHC4NQSQ1AMrxScAvWtsy2p3M7yApt1ySpkhV7wJ8fy",
  "key23": "3Njf1c7dNPYoHfVot7aFoY8pUw1Euy3nS3ZwvHvo562Noe4eYGDFHNCjYLzX7fMfMxXu1bKZC6MVbaCdYA1WjQvq",
  "key24": "3uZaHGrWx4KG94EoLJkYeYbT5AjkhX8XPUJwP72eJAzzcte7N5FTQsbMK8qTqB5t1M3PUetXs8k7AV8adwD3GJUQ",
  "key25": "2oxurmrB5UebxXLazr9BxL1DV4bzSD5wGeQFqcEMziCdhVwdrUHY6Qy8jKDQz3Ppj61bCccUWgfriG7NaawPDYxP",
  "key26": "AQbEeKTf5v5zkYqm4fBEuP6fjSDE8eCQ8xhBn3LB3Li1fpvx3k2z8utwh2S71RqbCx1v9cY2h6yP3kKk3xbDusy",
  "key27": "5ruJWKciYhq8nDvGq9yXiFjAibRkDJnhQtDVxveidi65k8Y3YwRSr5NUchXZ5JTNthDgbm7PZSkCHk5PSXwsW3PP",
  "key28": "4wm6muXkwWedhKeHiiJakxSztqgTFrYh96CnbpRp68CLyKb9mWCjuMLVCKv1D98cZgZ2jFSWxkMtVfW4yMwQuJXk",
  "key29": "4g6wLezf1tYJNPmZkJNKT5eLkV7bf1U7aJqyfD71MhrYPNSb6ZuTtLxLeXz3S39H5inPHkTow5Qmxwtvsem98VL5",
  "key30": "FaSGuZWoy4op8ZHtqQQymDdhdhLnS8so1ouBug7no41BM59o8A51s1PbjJtmMe2qdo5GMSYBQLtEvsdEbUkSuLu",
  "key31": "2Rfwv5Vn19e85KHtUvRhpi8Tn52nVKpJDvLw6HqfVeDUYa23bSjnBFCjHUfoETwY3ht6BjCCnyHfJFQyXtrnoWmq",
  "key32": "4Lm8o2vZVTnTSGw53M66T9LTb2kayJ3ETqNKbCEsYvXNsts2goyuLMjHoPzHFayGPJYSJ1ZznhZMCC3FaAtK4J8i",
  "key33": "uotqUMT5Bb5XkWVbozT6sgPBsUvwABT5SCuPhJwBs1oGKTN2MeX9taHrHYhf1n2AKb2qvCht1wtCWKrknwmy4Ry",
  "key34": "2mc5YGyUEvrYYdtyc9QXP3jcTbiysaP21gUT41w6CAejdkNVg6YiAH77GxfPpHuv1GdGRGGeEnXHcnpXym3F52Wj",
  "key35": "6dokxCMi9Y4wPKB6YPd28EU6RsMWaci494auqzXAJbWxw4mWs9GWo9wUpB9Lv81kZb3G9uDMfAAPCNQsaCiMVgt",
  "key36": "4oQwVkPQTegkmWacGZdjWgbmm2bKZscVMubxrdr4f5Dgcve2jD5iVV2VufPNZCv7YgjuzV7cJwBgZ9rXApLk2CMa",
  "key37": "3QnTSjmVeEC1Xs1PXFvnpS5SmNtJfi4B38q4XmmL1P3QEKjMiY3hhwhzjtxJvFhQrQk65uzJc1iVvggTDRWtHJEh",
  "key38": "5o5Jz2YQETQ4ESS7h8yzst3e8sqEgA9wE4gMnjjs4WE9LGPdCvF17L8pGMu5TdqA7kEWvyEs7YFgzPyFQqrCqEiX",
  "key39": "2yoxf2b9x9vXE9tLC66rzHEqUDwLpSyfgysoB7USuiyffzBb7gijvbMxJtuAnoBShgusL5GDGhX2WfERHzzNwcfX",
  "key40": "2wv1sAJfCwStJD2VzLsZh7RhkRZ6wdPAXiC3AaoXJvwnxoNEhZXectfHkZCujWbRMvvynugQ48s39EH1ttnwRY1z",
  "key41": "2sVsn7sUSAAkZSQu54xoeE3172PuN3iEYrSTjFmu1gjo2fisCaATJzQFYnoQi48CSc5ppT3Kzty7Ubw4Npa7rzBh",
  "key42": "4uoBPfMAW9Vi2M6q5QVf5niAvyf923qcepGtKXV3TmpHyj6njtq1EWxjzPUibkjdQb2QB5Z5bvHTyRF8oQauE41B",
  "key43": "2JSG1kHSw9V5V2LGjztehKHmpGn5r79HFaTFtiEMbNrkUBBG5Zn5kVZtZ5rkZMh1t4eaSmx1Gu1Nwyne8QRAj7XR",
  "key44": "5gnAKWKGBCV7TrMp9oV7F4vyXr9NvxNvgzVXDfyVNtR7bpHXAVvp8nvc58xJsKxki2qjaRaPbgPM2C7LZxy4aqGf",
  "key45": "2Lmu2vue4TjEdKaWSL3ZHGAFzPQGng2Wr7u9UZb8UAbtHiQosF2Sd9HuuwCbq1LouMZnXvEEzi5ucUpmbmwo2viX",
  "key46": "4P5zXpGv4CtDBfcEQ99N8KNwUEV5ZmYjWQXcRVWutJ5MVAbc5JX52YGEbB7W1eiaEf7u7mgtTVmX26X1bNoTheD5",
  "key47": "4Q5uygqn7BZSXdEXG3o8CUGQrkRdHxQhCVkBp3fu1zsdzCA3Dn9WER3oDv34BTGb5UvNg2TcPSqV8M3P7K66zTe1",
  "key48": "3qWbERT7kELaRR4gJh88fMMfPA35cse8rimA5p9QLeUtTjy6VmDnfAj1gc9QbcJtaMQE1zKX3MSAjLYuFHBfQiDm",
  "key49": "5sjBcravvQUZxXuVtPaYyYgSXqSAGN6B3WfqTTr1Hie5vt61vSo7e1GBCbehudLWnz5BayDDAW7wEEAhZoj76XzJ"
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
