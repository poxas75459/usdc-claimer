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
    "3ptY8GrS7ykX1NDuJJ7kfpbRPbWm8PgrRY3kiHvPbGvM8UYf1W1jkr9TXE5tFFsv6Hv3mBeaN1KywWTqnbY9JYNp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qzpD9dm2ifGurRy7vaYNSFUkU1ZTDkzusBLSxYD64mpb4iu4QGdH6Yfd4Vs9W5FNi5HMyjdzdbYzTvzei3JpQug",
  "key1": "34mWiwxBweQH64YyfSanFnLXj4U7PrQCrvp8M3xAdn8Ry4D2jd2uH85zRj9UKSoSi9nad8X5iNZKvDgESp1NsVGe",
  "key2": "eMtPqkEKD7tJLDLXHGqbcMLdnbqrQxbJXNoEw9u8Zjcy9q4Sm15dAKkGhXLVNJf9F3Sr1kHNNZjhpsqTXsT76NW",
  "key3": "25QPw8F2fWcpmoeJgqEUcqcTAAEs88rogGBX1jfoxkcDNXbBYCkcs45Cn8zLrLVuvuzZEeAMgZP5wM6cVYuEzXAx",
  "key4": "4r2XPtssYKtYhUwEDgTMQJdFtpdmm3nmppzcoNHGA8Vcdqh16Jr1Q9gkY8obd9WexaE9nE7GuFjB2RfUX6EG5h9C",
  "key5": "5tJLZF6EfCvT83asq8XoAs8BTYDCWxFtAk4rorbjPYsd32VpdfDDnybSzM7xZjT1q825SjW77hCezdnUdVq6oLnd",
  "key6": "NvcZGC8KHrBEzBUvS2Fgrp6dr4WxizCaEo3aZwt7jpEcvCaxPr4G2hufnWN7oYYvftBtqXfgspuJ4Aafk3CsArP",
  "key7": "5YgC51h9xacZn72vdeHncmnnDcXfmR16P8d2H2nnGu9yLv84e7SchyYxW1rWknixN4FuriuAU156z3DW3CSaUkzv",
  "key8": "45VccSX2KriYwVyCuadcNbxSPKF9v5RYfZtdwUWwotg9BviFmaQ1hr8uKYxCraKrHSf3TEyweh6Wmq1SfuT3H5M2",
  "key9": "5DFms5sjeZr4zQZDED1y2mVx5TUZFGaVX6Q5EcBnEr8BYiK8wRPc2p4zQjBagw2z8MhKKj598apLTqDMwBJH4p36",
  "key10": "3u4M9ERKcoCt1Mqecj6GFygVMcwAftEB5z4MfwE9tZDYrBpgf15xXGnZECYLMc38UYXPQ9AFb4HEMMJCAcse6bKi",
  "key11": "2LTzaL4JrsECzotr18uvcf6PUkMQF2igFvh2SenhL4Y7pJEU1d3aKb6FhBVd9AMYgmXjwY31UJ3PKbzyjPHXHUvb",
  "key12": "5gAunLCXCbU9wD5AS3jCDX5nq2ctMWwZKUxMNmBNTV4ZJQvzzh4HoubNULrJrwZgSSeXxBvCNqRaPLnwsq64QExv",
  "key13": "5CpUJaCd8HhhpBZrSFAzXoghfjgFHRrErhL5EpVGppLYZ7yAcbeaLb6jvVjk1Hx5NkdjgygxL7zC55edAGDiMKBQ",
  "key14": "3GX7TcbaKQpSotR4FAjRxw1jEYMMw1vQguQiSxHA1DGBjppQdsEt8gULk2EfCcJSfHh76u76yki7r1TmKqKTRUtm",
  "key15": "5tyAuHbz6uaP3ejxzNaEmknm7hmGezq5HKc4HSwnzDXUhwxYoBDgQDiUZZdotrp725GQcK462UHJacGAu24P1NUv",
  "key16": "4ECLboa3ByQjk2Y49afpFbUgyjM1opR8ijfL52PsgZHpqPNN4FQnwxtsQgxoiYuAERDXqiJcx6kG4sSPZdUN33kg",
  "key17": "5VYj4B3Y7jt4dGJb2FdFordmDFsvsFrqKkmLrBYR6xcX3Nmct8Bqz97RxR5oMnjeBsFCoVrreqCFQw3MLVZJuTQQ",
  "key18": "2Rqqp6m1qfzGnAgjBggZMphihPQcNfwJS15GBDtm7yoKE29up9HXnAw9gvZN6xL5rcTXf4iy6A2BP4d9CDm5Fr6v",
  "key19": "4T62phnNPmR5wAfFBdJy3BTsuBuFWEwVSSeo4bU6y5gDpsEXqtoXBUVHk6zvSdRAPU4GbeBf7tg9B4EkoRDcyqtJ",
  "key20": "4UbPjm4BdfkbHRUuVVdo1CxUQDiWE6xnhUJKxvFQUTtbp9DS69gZ48LZv6mtSSvqnVZxvqUCPcAtexzoSSAco37B",
  "key21": "2wkVC6ozDKGZabDCgRRGSmbWvuWcKRgZdy1Z4ggCFoaVsvvWaXyWmx9iJjEgN2q7gdagtnwfd6scdMrgEJN3GMEt",
  "key22": "3pUKcSPFEKzKkhjBhJyzdVAoULCLVSPCBanC7MKwdStH9Uafy4vGhU461iPhk6MysMHvTfY4GCxqa8hSLyj2yRVx",
  "key23": "5NQayu2A6kDcoXUTFLcs5oVRWm9AjSvvkSfqSknejcaquMrNSPqYjH8idmaGAfKZ3Xbm8hiHXcFmQsupEXALvGjB",
  "key24": "4Vo3pZwi3ik7e1Btrd6D17bktvpecjtfLerKAmYbiQ6rsgefLN4Bo5SKrNjukymVUZ4xRxBkhTEXUztQEtdwzA8c",
  "key25": "5YDgZm1Ph74dn7VeRRoba3HFXWzMBNNrDzTdoZnpDBmcDS6X51YG7Ghye1FH1riWBgwXs3zk8pXhBwQAoxLn5v6a",
  "key26": "5zMrHAkQhET8uJU3X74wuwrAb4fzX1qj5GAGqt1YqLp6iPLDtDySkUBriwoYLXy23wQHMwALGJRstCYq3wV6k1Pt",
  "key27": "5L5uZTh5RA3kHFfKVxnd6zwBpc8jA3DGSfpSuQX3yWpJqaDuypg8SJz93HPihuL3HzebvufKnFPamW8bnEmWRCBC",
  "key28": "5E9x1iULMhnm7fYMGHzcFcYios1vh3C4myEXf214CCwPMWGRi9mca3aRMvWBkrFhjgAU4tA4VWJMf3Vb9WEbYcCK",
  "key29": "DQZXqGpqtZETB8XmqeiYA5Bse97bZhPFPWJNruLQDaKW744cVGLn6nktqWn19h19NbKSNMz6CP7o3yLGEFRCypJ",
  "key30": "2KixbNJhG7xSbx7C4hMbtVeiDQFygF6FLgCLLJE98A7YaJB1ktvHjWmAe6b6yp7F3iLsGXDf4J7kFkwXbDkx8kUZ",
  "key31": "3nZx7WHsQ8AXGT2ggk3K6XvVSjnq22xanjxdcQ1tGZMevxtCnSbm6BmmKFzDKt3n2C4LJbafYNn17kdUhAZ2zRX7",
  "key32": "2nGqQAXq5ypA2KX9ThxrxkNbuoYKd7gQGXRZXUmBoQBr16Bqn3po1ADQnRnUxEUexjm8pW9bsrcJkXyCTZPUaEPQ",
  "key33": "cRPQczaM5Ka4rQPVLf9WsNgj5s9DY5Z7cDDY3qK3tVtWEyvqZp8Q5waWeuNyffbUbs1huMed1Lo55vL6VRzmDwR",
  "key34": "Nj6xsMzCWCaaG3JEsc1v43GjUrN3kWjdQKdm2mBXvY2ox1qXsgppvvttsvvhiNkkvHav2p4MfMNoUqpLv9Pdpmo",
  "key35": "5S3HPAATFmCVzMesNVoF5n6D92HosYMqzRL93NC2xpLr3K2fXKvYHqPFiMCwzVK3Spody8M5FVm5S762fHLStb7u",
  "key36": "45YpFK8Cj5vhSFtoyH8sYjkhuY8VmZXaDSbvfXWq36KmxecXpk4RtQ5jprNpfGtnnuapP9ximW3tN3TLEKdznJzs",
  "key37": "4gPe5GrNX5VjLNnQxjKgQaokH11HW1Zy855B1V1Eo43LwQSGfkNFXowvRQKu7gQTkM7bGxUQdr1TWrh1QnjNWyZr",
  "key38": "66jNRproxHcniCzEVSKxAGSERYVgwkKAmPkg4aChz4WtW9Atzqd2oPJgZ9EE1egx1npeKQZDfcRkPMHr9q2YzGCg",
  "key39": "5ijcF3GU2W7N24hwwMrcCP3aquSWG5jBWvPjYvEdmdr35ckZ9q9PPG8na35NYgb3L9r1AyFVrCB12zdXnX6SCZBs",
  "key40": "5MYUAuDHReyvn2NZkdbzPcQA5fegeCibsdGPVzTR8cBywJ6RhPJuxfvRHxXiCcHGdXz16dNvCDnoUAA95Q36ftei",
  "key41": "32j1RVcTArvtBjUm5CJaeuYUkSSZNgGLcEUoVwQXKFxUj6vaXmMrVDwjpWzigjibBDiu4UMdcXzMfgksGPPFpeVo",
  "key42": "3HTaZadLbT5WoN2FmZuqzvWBE3kdruL7xjLkicQYDigyPWDLTxe3qbkY4uBV1LvDg7Jx2avsWERadCrNga7iYUvk",
  "key43": "4AvSwQtZvi5DGR7AA8KwY6b6mysY7ucdtDMc7JXxG5cwNHGcCPJaoy5HnzdAkSVmuw4rhcwgNhXiXUYzNEDXP35T",
  "key44": "5NFm5hY6hxsRvnR9fbmUP9413bTmwb96J2oAgusUnTpNbdhUAkG5KNyFBnTK7ADptzhGd9nJ4MwqgumLmm1MKvg5",
  "key45": "5x6FKDX4hPDugdMgYLo79YkQ1jkAQkyG8DB88awMKZVP9p1Dp93ZXGUKB7RdUuAvGdKZ9RL2V2Y9DSwVxNE9Fyob",
  "key46": "4dapFrNmE66dGt6zLNVFiFb3e6Qom7pzAsMSgRDanw9EJU33uanjQ8YRXJkNA7oACQVkjc28g2bUpR62HY7bC6CX"
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
