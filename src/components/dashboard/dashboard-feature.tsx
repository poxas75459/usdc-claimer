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
    "4QMKrSQCz8xUAkVFU9x1Tv3vYc4SAA9iHpaSGJhoQRRRfBDZg6o1XoStPyR32PsFnpBzrGRz4GakgaDFHrdvXGsy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57QQ34neG3e7vEFZsDhYTHaEy1bEbNpMc8WFeTYTL5VCH34BJFpbHRyagG3Sv34Wk3uLUo9GduXcmsKEcMqw9uVm",
  "key1": "2rhKG771guyGHotihWM7bdbu3KM92LsDsCo6nM9bssYg7kVXAxCqTmtEtL6amdkFnnB64fWN1XNZKaHVybWkCN4p",
  "key2": "2YptJ89Sc8BG3K3CCHha9ak865zpbnUkRue7CrqPRH2mbQXQR5qTfHEpnBD3Q3wjx2tPFGJbH331tcLiz1oSLkMm",
  "key3": "adQH3HmxgzB7P1j8jE5eQtTyGi2B4i52a5pLc5FyDkVb1SQynCF4Q5cnVGsEaMyAoP8J2D4SeWzB6CEim2Yf5rs",
  "key4": "3B7oCgoj9HVAGfYDSX7ekmoTSRcbHfjQsywhTpagMZGBrNYTEYK4zS23LhumbNHMHGymZ1gcJJR6hVfnf2AjdG9R",
  "key5": "3pphvTLb6mj6q7XAefqJPKLZH9cJHAwCgK54CrRGWsYa4agYDPAMZzvRXeg25KazjVJ6eNth8bjP5pX6vKn5YYzH",
  "key6": "3nabpm656jUQfRqFjMH74vxP4o8sRYJKmn7Q8SuEB6BznWj9iuR8VmzS1EXHouL2P7XUSiNVcGXV6hySfDu9zNSo",
  "key7": "4Ypf6rDPsctotmvEFzKK16vmq7JF4xS6QcQ1NkdfHDex7D6m4FWKEKzgNJnoQsqjnoGUjCCL7zYumhawmfXshM85",
  "key8": "wUQViGYAVgFyMpPRVaPTmw1iHqZaNeqpsByKQzAaiaoGCZafii7R1vFTYdfLWySuKSf2c6r7kgKVtKaSaSA4jDP",
  "key9": "3KGqpx5wvvPj5e1JpUzV7YfdJNKyGjpsuHvSVbzR1b7kpaLjPxejbSeCjPBHfMTtPv1rdHXmWCtQd6vMRt1TT3KR",
  "key10": "m66QbiqJZVWK2TWnAtL88h75oTNjcsos4r1aTFu7a6wecdry5cs1aCFiKaN5LkSi8vCkR797xNVeEpgpKm2jH93",
  "key11": "2mkeJ6ijEGS6uWryWvH879dFq5syumogYtsT16Py1A3UKACGhn7ceqkrahsPejENoPBnLsPepVWDYsaR1yhLSiuE",
  "key12": "3bnh2UyKWj45MUKmFLCzD5aHmRfwR1R5AQf86JhX5rRqc3aTLkUgjsiRtbrpHrhG3KGsfAi6PU4gFussbtgypRC1",
  "key13": "5X4k9ZgpVfJJbR464AqiBV9y4NveZj56WNGnTMcFNgqcWGYHPS5VJCrY7hhEda6h9PimemAubjN2JM9vhmqDTmN2",
  "key14": "5UaDCGrHyQeXkYu6q1KGHX34K5L2Stn33rvfd1Mi8PtxMz3yc7893nuLxJQ6nVL6tVvR7RzoByrAs7edCF84GGZ2",
  "key15": "2saxzjBfHuAdzwVAND5bMyoM2cXFJyv91bm6qxTjZtyz77deEwZz2H6B8bipi2mKLxFDDpJy7NdMto1ugKRf2E2e",
  "key16": "5jF63P4gJAhanCZ4TqG5QWU5st6TovmDj8y7pguneGhBcswWWy7xvnPmqthvhq5VvgBTk81W2dFLS3mCbTZ9FKpp",
  "key17": "3tyz7aHeNhsfyHwM8VHpfEhmuyjSuNX8fGHm22PGaVVpHBmxuyAZ9ZYrJtgu57eDSdbCe4fJMRvHH1UXuUgFdGAP",
  "key18": "5MHcdh27zNrGySLzCiE3zSbznNDYFuxpoYmer61KNRiM24i2pi1pe4SJ57JXGbbGFXFguD9Ev7Q6nnZVZhFLkRrx",
  "key19": "3HzWvFNXrSqavvKvecwxgWGFNqkx48dbkUv2kR2tUb71iEfqy6TuLdjodEz8jV3cee2tZ23SWyP9fahwB9KJiepi",
  "key20": "5KDjqPmb3QehSRh5JVWMK5oeaimq4Mss6ZHK1WK4JCp79XFn2CpuwQLTuBYdXeFjLSJufH4WwbHTpyTVS2RNzCa7",
  "key21": "4SbSsqeF5MLVfA7fhL21JiYv3WJKdCAzbkvLB5XjMu3SFHBy5hBhtcMf7kfbXnvdSenCFv166xNPysm8B9eZfWU1",
  "key22": "pXzeXE6YF5w9SBgSRdr2ovPGyrVb9QRbYkQEMCz4oic4NxTVgXQMP8FewxJzeGKSMqQMuYvS6CNb2Uvhvn4wMsW",
  "key23": "4KUxm3Hj6JcqimMUTwCvReWgNgVTfsJPpAawnKau5puQd2mtbQ9graobcFZGKnqfLtq9UQhd5bKhgmHQStNKPtVt",
  "key24": "5t4CoPTDuMrnqzwjY1Azyq3yNGoZ9LNQ2k742c3EREJ34kANA5F4GNVgrKoCkfXmv3ix85ipafr1YLQbKsogUDgF",
  "key25": "2WaesvDbqWoz3HwvfbEmej2D47YXVe6R3S3qMGxEjGbbMMbRpV8JS9NKvqrChWpYvf95RRMAbyhN1P59QLFkLajt",
  "key26": "4waWft4fChhiyckv2GN3TbKHktkZb99UiJWbNm3A52GD2fuBxCVSvcw9PdYC1jMpedrBMRKyGnEsgWx7BVvpm86D",
  "key27": "28Nmd3GDKFLqffPmLHrMeGqGDpMoDUXArhQsmx5hQxCUjrQnyhbdz7hfe16XLPWwZiXKN9bbrhgdowkPUyZgPitT",
  "key28": "Gz4jnK2N4KvKnfz9Xsw8BN41g35GjoMsTvafVtFNnsJtkvcmsGQPuvdYpva4BTenTUxYDytup66C6ZP2AKwMrWT",
  "key29": "LeZbE7x9CHa6Kq4kxMuCcUYKPm8Pgr2Q3tbjejKbvGLUpfczct7sDUQqAGHeqNADLLRwQR2WH8jr5YoyHwamUmo",
  "key30": "38LwuQBzLLecZRrR1m9n5g4xBWzuE4iTftn7P5hXbh1f4edLpSeBM2Zyt28YnfMf9mmmgBWdFRJ9aMRt3vJQEjKg",
  "key31": "3oJgY8AEQxJEKpgg5kMpRuBxN6dVNCknMFdw2RM97Nk6XP6dkjrbsWJdvvVkvm6PJkcyahLf7DZVRfdXxZZ2jD7i",
  "key32": "59wNYvRPFHmopaE3AqBaGsCSW856QX7uwVaG782A8gZCkExoiGLK1TmdDYNfHb9jkq48MSPtYYDapYeaYPL4d7Yk",
  "key33": "2SJ3U3GfrDpTPfs9M1JUwB6BzSDcQcxNDZVQJxcQEQamCZ7HHjps91Jesy5gRBaNEVjVzGa6QeiAtmnmZWeQkB5",
  "key34": "ns3XgB1w2hi6xhgQsGNkSXG4GgKRuuahLoXrd5BkSq65X9Eq12brHfT5aTniarDTDkftTUBwfx7cmFtNtBXNBii",
  "key35": "2xzNxEsGeo1HEckkkL9B7Ya3yJtjkPjjSmbkEuwty4np9XE9PyNQWo8h3SL7cbGYhkHp8bCAKQF6HofXGMc3scWs",
  "key36": "2kzEjDcA6AkmAqd5NJVYqiDXC7e31Vpf5Uy96GopGDSQAaGTeWHtLwhWt8bpCZsuLuLY2TjV1YreTvbWmKyHz1Hj",
  "key37": "594mHCx1KY621zesPTmzzL1wEeGX3NwCZeWFKEgPJvNDXfYRhuqtKEhvzh5x5vzh94EP1aE8mrg33S9HGjUeSNib",
  "key38": "UNSAPAUuG2H8NBNhQe8nhLYKDcgt8cb54KYDGBatMRTuL7A7n9JhGYf4U63rhAQZwhwCuoyeGzYZsC7Yv1ta7qf",
  "key39": "iZsxuMZAgU9F9mxa9mMdCAvTUTQpEVK5ThiinGJsb31pq4V39PqqbupwczcBbzpKoNzfBgyVzGLwStVGE8sKaB2",
  "key40": "4ScCCcffy9uWPeCBPHphvEoZgHpej3krgnAvVmjAdoTihPvRQugswtu8FXUWQnuDEBcQic2dtEUZYCcA84M47mui",
  "key41": "3xLfNLnpctynRx1yTud69QXuS467X2gMF7pyCRmsX6iGx3cw1LRjCbJxsFE9noGUBy4vhPAwPRE1f5uTkydtEoCk",
  "key42": "65D7jgUtxGiLXSfqGLSSzeaNh3LCNPgEhvrKUhJ86wFG8BVwCnPjYHgH7zLp78mxFUFrezEjWZsq6B9y9HBbpuS6",
  "key43": "2h67BvQ2mQcincGYei5Ax3okY1Zpb2Krs5FvcwJxv9fbPTSWN6LBvw8sUvJJuWCNWYneoe8YkGVX8qSFHhWsmGyq",
  "key44": "4KXtjtavA9Nh2vXTNDSyUQACAuKP7fghtvRBPyeB2FZhZeaLvba74c9T6HTaMAfpxsMMuXkHU2bUVJAnhrcVxnNk",
  "key45": "4nVDW91y2jHxqNVVS8fVZSHTkeAntbw7PzcJCX2pbCS6LKWaaDpMaeJHLBX2gJPTHpWw3q3xzV5KMzPXw1DZoxqC",
  "key46": "4aFTnRhsS7f5JJ9yTBWspUAPUBvAwEi3EWZkm2swYLMQRBwyJQ4UXZKbDpfXJ3Yw37bgDkHXLKtUDADZQdZJ5h8X",
  "key47": "4RRMoL56Vx3oHCQHVmG3NQ2u4qZfJKxtGyC2RjixMFSYGqUZPqiLrD7uSpwHx3Z7EAW2zNCv977uxDVM6AtVynHc"
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
