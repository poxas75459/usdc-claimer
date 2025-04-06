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
    "CHHQcgmr47HDuviQyvMSgM7Jrqo8rss7A45kca5fQLe4pLsr6YyKDYE3VXVTdB6Ay7d5Jgoscmz3TNSeQX43QV6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Uonqa5SVtk37Ag2zoMVbhDAjmXVpqXmWaas2F72gmv9Kh11PNWwbAEF6NxD94ZGuDJdNm1ZsUpDa5pVThtPXJXj",
  "key1": "5odLCca7sNUbsGieug5vB76yUq6MZjEBBH8USP7ANT7mtLbpbTJhFEuQGyvFQStPJQkNv1hLjrEKDPvBMz7geyqK",
  "key2": "uDfRzKFMqMcaNa1CEeh7XcToBPeswhKyruzDrVHMxrkfH1DAjuegMM8K1cXSScpuwmfNJam9VH1A6A21bdNgFdp",
  "key3": "3PmHPKBcyyca4yF1fXJxfwLEAiJoDS4iBNTxardDRfrRgoexyEJV9X2ZJFYbMkewagAPSKThZf1rwjejdvVU8yXG",
  "key4": "37Xd6oQpk1wk284xcAvmZ9dXRg6Rs2WUAYAT3rXBByHjQXDbXCsb8zMd5rXoSuieZYUNj314KuFcTR7y3VqtVVCu",
  "key5": "SVKYGdfHybTVoB4WatgygdU7AvKLQJAjGWXj8eEAtGCZ1pRFZNmnQ2RWt6U1JJfycxJSx6Nb65V9URGEW6ercUr",
  "key6": "2uuB9v3KvggaWEhcyhkcFvtNpGNu4CBW2YaofxTe2ZTjEvd1iDnrdJeM2BAGUhUFzgf2hXcUQBkids7qb8sjR5Q6",
  "key7": "2e8D4cVTsHmcL9nYZfECTB4EzQT5Vr3Svke8eWboc7WMixrmFkM29oA1vaMbzGVUSCK27zEDVa4rkbfkZEpcpLmm",
  "key8": "44iLxY1PMxyHC8jPQ1Ju5ANDrQhfW4PfaAtrtQCFD9rpFqrBbMNFkqUaihiUwZMXjtSwraMMYoctiAp4LiGBVCPH",
  "key9": "5omAqCGmpgjbkyyfaXex4xq5RgcyfNDNYDk17o3vaPMefkzNiL6XXwyuiSbPDd7eABs482Hm8goPMtS1bekHUYi8",
  "key10": "581vqdjnDnbPA8LRo42sQfdB9FjkPj8ANMSsjWrDruFaL8w6UHQYpTVXBHBQgeeudTsPv7iSTpWU7mpUs1mHzTiG",
  "key11": "3SNipaZDvRKFywYYBn5gfwccmEZqH4PtcBRGck7sJuhL9CpzZAHFnUeJHggai7E6fqSaMaYJc9xBVefftMv1Cykr",
  "key12": "3mDat2U69L55hwoi3YktaCgCbASNRF8kr1LgDc5PUgKbgmWMnYVvbxRDVGS3sXrz2zKre4iXKiSZDtzyVj8CzFhJ",
  "key13": "2BhZ2EFxLvRLiqbhB64s4HQBwk6WaDfycLYRT1XRSEz3nrdQ4oS4CzMQ6i6RkZkdCbAQNUSsj8ANdG2xkd2CsbCL",
  "key14": "VxcRnoaedrJbyrf7GzLuvyfWxpbABhNfvaVJRL6Zu17Fu7Ma4e9VQYmyJ9XzMoe7PRzva8WgDZWhLhwRTLkVexW",
  "key15": "5zV7y1XDvFYG2SXwaJvmvmbwaU9yZ6KTxZ7rGNWMqdGWWHuEmrQ4yNKdqXuKZZ9dGX5yE79wfMcjqdeMjacu1Nd7",
  "key16": "H4LVLGVcvn9ifc7wkvssiy3BXF7n4xvchd6W8JJqmSJBGhWWCB2yxZVxFwym8mMz1c8sgmKPpUSAJ4vEua9tkaV",
  "key17": "57uAwS8ojRTYxhzqKyJjnaV9MNBaL9JZX2JwhLZ4Th43cFu1jGoyfbFESF2e2zW888SFsWggQadqyQxFGaXTCjfQ",
  "key18": "39a56Fbd9fhvVxE7DcshaLhnc6G2BJ4TCYRvf7HdKg5Bq2G3VPAPTjmJxLe8p4tPMwqJtR8yUMRdbHpVavDbzqb3",
  "key19": "5TJFrsM7cNALyxspDJARt971M76imLk2qHW3TLF7Hk74Ykr7iqQcwdL1VyWk84f2QBmjXEBKCz4fNnjmzKNksdhw",
  "key20": "51G5cEXp7wx5tT4u1Gmy5W9wkuMvdBgi5Vnv2RpfGJQeNzvTKMKkXbx8guV4vcYkNSHtbCfssyAywib31NJzutBR",
  "key21": "2d1fmRyHYFNsfXenGFYc4VZbvTD3iyXU5RDhzCsqKrWKMUeT7mTDYT3tuCmBTZp4VScJ5qrbr7obQKwm7PFJ4MUy",
  "key22": "5QEeRiRrLc2zVgzff8N9FUAbKpdXimeNm42QUFLTco97ozwEBbK6FHeXb7TXsffDCVq7rDcWjFDTcsJhdPyJz5fF",
  "key23": "51Mtb8qBiCdA3HiLyR2SMaEV4JdxS5twEgQvwRkDj8nhBc91VFFukwtpEXMsQFVBri3mxx77S8VmKPdYgxy8e5nf",
  "key24": "3Mg3TesNB4U3h9JRTyyRUrNnqSxdRekUA1ywNqYi1zn8dta1oFZEreymCvbSkXPkM4NNZQYSWk72QPgnDEpRZaM4",
  "key25": "4g35rcj6S8DgYb4BjQvzgB4DMxYjFcrZqiM6b5uAdmcHv9GZiSD6DkriZTYujdd6tT5LnE55ZLgVsr4eeHd2L2Pq",
  "key26": "mb6TFazxoaU7wR3ppPAMsdc1TNdbL329xYJpphNQA2FDU4dzqKxt5vYZWeKFnkHZuZb9YSmQV2CvQABqK6t15Rm",
  "key27": "5D1BYaRYo2arxSmzhUv1ZKQTMgRyr9L2u4HrkYdT6eFPc2oEbwMtaZWiB1B5A3vayWpafoA6VAoqsyEMmLJ4NH7",
  "key28": "4pswDFdHH3cPDAiefrSGjzKVk2DvXxihw42k766YzR9rjcZT1jKfu7XRVURrXbUFNFxTxoNgHekdKpB4irsRaovy",
  "key29": "f4QQT8FzB5kHYbgLqR91AMV8NfiVAkHR7egsZ7dYcMC7pRkGu7cqZyNyMDszXKkM5s74AnAXNXn7Voxq8EzqK3p",
  "key30": "5oQyZ4ZKJmKyLzKu4aEddYbcgKQEpsX1Zpj1ezQDLt5PXHNrWKiCHtAbLgJrZurwfXm1tQpFeS8etEam561z2Mof",
  "key31": "5Qxsm2SPHXqjQtvxqkBqhVYGhYtm5FeCbsjgvuKo9DPovw2rZh6JzqbB4642D9Eb8X5yugMr83FrhNpDTebp9oWo",
  "key32": "2ze8jAprNzaFoo5dSPQmp5uwxxp7gNxVp2oa5qKCLYBnNkZBo6MTbK4bZ7HMoUAwC1gi6FFKTWwnuZvtDUFNhCJj",
  "key33": "4C3je2jph1ygi935kUxLpXsc5wrqiwNdy5gTnCanSsE9Ad73AkXjrtmVD2wonRDtY5NFp6PCC6f7cWuXcmwgEPLT",
  "key34": "2EikiUYnbN3Ro1F8e1aijV1y3EAsqGenPX2JKVyH5J8RxQs87dZ5KdJTQJtFZG7SvQSxpmpHiuDsrreLGLHuTmE2",
  "key35": "29B2D47djabkS7ZQ2vjMV4RuupdBRR21B5Z7K46mjMLir6PG7z1tUTCqFW3WUuKjL6qoAisV3qrwL8PMs4tfA2oJ",
  "key36": "5opef97YXhxWYK9YANqc5AZbvuEiyr1VR8qgk2m3N8kiW2AUaQQ65uk7QEuhn1BjdQwDX6Gh4Zv8aHV3Gk9GBF9J",
  "key37": "2ebnNVHBULRYpQZ7AP2EC4KSheK1vyobMr6K8GzmAWyoQYAUaMw4mpt3vTAt1Wr8vFkHj5bn1hMddnTL4LKjjPT6",
  "key38": "3RPLbxqiuknj4DeHN5dDxyiSFcmYqnZwjLmQxJwT4vKTKguA5bLfzNifEFJuxwekRb8qR2F4a6bR33sEAuBZEgAM",
  "key39": "4DkJE6P9n9Aa6V4uRKD9qiMAuHQcBRNaD9BxJiUDKuceE7bhhu8kQzusEtvNPM6QqZ4G6aEuJqrWeYFRCEv4XjrX",
  "key40": "5QBgwQ1EatBe5E1usdA8LdDohos5zKoHZGLtXvnAz2briE23uqhS1muAufwAW3hPcp9Ke29ityCr9qzKjTVd9Tsz",
  "key41": "2zoGF5agJyACDa7je4qdyHocL5qSWjws4yEJg9ZJbXp7afwSpzjS2VfATrFxTpU3XyVACPEjwrXFD5kptRtGA3c1",
  "key42": "5CwYfwhxE4UDaY39oZt48k5deTjQ9TPevELteKde8VTvNC7AJHx8EnQfFopt3fEHdHsSECv5DgjnwPtAE8QKaKfA",
  "key43": "5CPe1XefKX6itm95czoXwbogqQ5du2uyGPVw1dr1Q8BydkCyVkEgD88f5Grdb5msn4kdXgg5zdBHNxHUxLsZLPvQ",
  "key44": "5Y5igrVP44EiKKJeozqAjoYb237pq2Ytc4LML4UjdrpXcssg6fuQrSJ7iaxRbUj39FAzG6VDdKx2xeMhrEmAtNQu",
  "key45": "aH23gdqDSTchZdA2aNNF2oTriUe1PUoCiGf2dhXhshpkyv7gPYhnAmu4pa8kuzksW8ridbdrFQhmioYA8XCBKWq",
  "key46": "32Md1HSYjk6g4CDsHopcbAJPqmS8stqP6Fz4iJkJpqWApEy2ZtZG8EMeW2TggyRXgdk4dypSH6cPBpwv6krkN9vm",
  "key47": "4Q7ZquzHmMAbowcgTi3QHqZNpRvFqzXNoeby6jtTKHQAzQVXX9vDkxJfqz1ACThmggARDG2wPynzHFdAzoXkpkuB"
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
