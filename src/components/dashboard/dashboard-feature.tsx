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
    "3QspfCifcFckfFEfmw9FRgH7ym4wKAcumadcn51WNNo19o52wNi1NSKRh5Xasamojas8KpcztXwLgwWtmMKf5xgH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ySYYJox9EJtLLnFLgm4qyybTYkrBW49NHM7twNzTQUDyz8quPPGwv6wvYJNQq5FkPU64C3yxDYenuENLtfmrUTg",
  "key1": "PM4j6gKFezo45Dhup2D5FhytJ7i6vLjoXp2Ms2kA9FMaPz7eKhjQai7a1xYRRhKGcPXRdvevM1Br86RB8h8rtY1",
  "key2": "UK1a8qqqqt7xi78wt6jzQVidJ91omCnLLcSEy2yZmC8i5zPDC1EHUt8uw27V3V5UZP97HJgstWsA3BaGHb9c1tr",
  "key3": "2KLvazghVWvaVZSwVrJAk2LNhVPcDQc6suK6ftv7hnx67LHQ8Fne1VdPXrygw2GQmTvq3L4KUDhhSNQXQzfvCu88",
  "key4": "5zqmgJ1sSPxetaQH1qFQfZzVXcyYsty35mMD6kh92vtyJY8sZngt3GRy7zNYwrCL7CbAY8yBqr9gmBajTZK27ytK",
  "key5": "ABHXDpsCwBZZatLJ1KRjrN48QoiUXo9HG1Ltnr2ZqxVesQkagEm7fNzsSxef9ZjESVtWQJ8Sgpa71s8XN3mX4y2",
  "key6": "5RiGcpmonpD1Gb1vubfMbfAyY6DD1HR14UhZMVCvdYHK8fsyWpkHmCsAMpbYq8Ryv6YFC1nsiHKS75CrHYEyjCU3",
  "key7": "4129H75GdbpwjKbG3RJRkrsu6pDDKDq6uSPyjDuQ1F5hYz4wKAegEFULg6d5fbgU5kqBtFkhYZcdgEGHpYmJGu67",
  "key8": "5GvjCSjWAninSBn4zGV8uKV2AeQkpwAiyRSrftV4VByeisLzbh7hF7RzWn6ruAn4rQK9S4Nfgfzr1x72Yf4XUcrm",
  "key9": "2BThEKKv5ruJ6WVCVyrMAR2hMzbhvZtvQDbd3N2ed5xgoUV94cEKgWFqfQuYBR3TH3WsRpmeWqRidxBnMBvrVr74",
  "key10": "4yDv4zW6zJiiq61YEEkxm4FVfwyJTqFACrWYC5LRbnWhdC3cSsMk8FUeFCjaH2dBYHY1McVywU3EkjQmjo85Ggxm",
  "key11": "2WmToq8tjYHy2swKE894aHVprg6PiCyhnVBmuq38MCEtnV1B4Nxw7LDNU7QG6iFJZ5r17SKfZvvMQyQwXfFsMixK",
  "key12": "4HbPu9yavbVgfADmYup5aehpjSpFQuUZenDAEroSgkGThysGc59igpVpTTZtD4u7L9K9JXovvCBCwTytLRFyz4wa",
  "key13": "3VWVDTmoWWGjwWyK5HscBU3HV38BC6z5wW8Kpv8piBZHafsg8DbXBgky7GzBv2iKffkC2jmDDQNXa12pKYDVYAtk",
  "key14": "PVnHYUUpCW5sMZ3FLMYuq9TksT3Uw4J1xbTsjfsncRqWD335AYS26FzcPTTDVj4aVaUjx545qCv2k8MMAVSUtHS",
  "key15": "3VmeUFVpPX84V94CXCZ8N6df39evaMMDaHBFEBQ62fAPusrfjQCi1GYmsNqeaxdAQMNZcBqYM7eiLeMXHZJWBZSc",
  "key16": "4ZTt2AhaKx24wAbiBCn2XUsvPdUicXCXU1eWUCkjNNVw1CMKHfXS3vce2aYz8UvRxzk2VmvTHELgFMjjkhLH5G6o",
  "key17": "3kZoH4JjuPEXFbtVRGTCD22KaWREJaymvHAr5KKjRpxgfCchZV6KAcHTj3wfWvAYmw5neTtQy1mULPA9LYjZUdY7",
  "key18": "bfABMdnPcqFeG1xfTnrE2p4NWbS6J864xf9A5nPQUyGk8Z93zcp4J5h7NEuC6utxb4A6voVWHJeWmyEmDZkXD4m",
  "key19": "2kPvJVCL6QtTs7QZVWaCCi5uSmGNZuEPpZiuTwLjwvJ1oYtAFfaV5iL3KLrqMhMkhz7GPyCMkHvaxtLBXMqgELjA",
  "key20": "4834mdvD7YCjm3kLjSmbaDxvWNekuxEvjXsQtZddEXyKsxbiBP68LyeSWkLhXsF3iR12hjjpofkpU1QhygGM9r9V",
  "key21": "ayLLzqbcgpwAm4qB3i1CnwmYqhTtz8tro4QDLjzEEJxbECPEcamYJff8wf5G9F7RjMgaaER7kJFemiEycZ5H6LL",
  "key22": "2k2puwSxvkteEf1o4EGf7w3kiynX4XD4Htrabefq6mtU3Kg5eB1CimPu9JkGwHttKaFU5gVVhQAWhJZjjb7MsuTn",
  "key23": "zF6nQipuWtQFknqU6SWeD5sk4tRKuZTGNJGJG3wzcVEaiiVqx7wRuaPiu85dNwwmHt7cWwr3iBT4G7diTufXuki",
  "key24": "3bk1tuUvDGuFkCgVUC5mu2wSeo8pxgFErdSRdPVAyifokzoSDJrUz2UX3BeKwfCxx5pyk42djARjvWMyTy2JMQav",
  "key25": "5NjH453UjoRznSk4sDPNn5cYhxEwWySR36B7FcQ1UUsQmZhiYQL9UBnaG5AXrmmncwQ7rL77SAsehG19MiNFUpYy",
  "key26": "5YpZtrkz8Jxvf3otSVvJ5FmpLMX2NF18ZXAPYaJzXPKnsvT86C5vmGxVhUMPU6Xyty1oSVdZLjeDp1x7hShDzyKd",
  "key27": "3NdT9t7Ak3JA6P9pBURvKmBBpDVbNJVvJRckko4reEv4RgApLjQdtvqfp2m49c3pEQg5oxBJbgj6cs5Gk9zg8aFa",
  "key28": "3WVWqjK9gdsqmFAnBi4AqStJWdnjfnXSkRQGuxpB79C8uUv94CgokjrLyMxU4sYjRK1kZVWmWQqereFoqsWqh4jr",
  "key29": "58xTVfGwMccvvvMAVPnjmwqwkhBp9FmG37ucdFPyZaeoMQSmyYEEv3LJLQfzerT7cVfHb4sQHFWLD4VHqiCBWJQd",
  "key30": "2LSYswtVZPFHz3gY95PX6ahxvqL13DZKT5XxVaF6eMgcyr6U7cUVZr6SWtuEDnLN79rXPDFW6fu3GC3qWk9Da9sw",
  "key31": "5oKcqcEFBC6Pyov2wUERX4r2vjdKfMixQJcoceAatgRANA1rm3kUYXxT4XGZf8Aog2H6qheSTxpBoudbvJyJjPii",
  "key32": "2iqVEs87AFPrCndFNeao6mgpJPxjegrKZ9NZp9PoYc4fbw4dDDfcMRg5meTNTJiGbKq2h73poERuHn62nAvFQ3US",
  "key33": "26BFMNHvYfkAS3KtpSEY1aYa9erXiLgarezJCWgqbX7ZT9Kn5ng6Pa4o9MFPnzXTe1TJK1QCYz5gmtjUicNsVhst",
  "key34": "U8MHUbxH2F8JEREnGE8xQYPnyKSvHa5EBGHp7pH28nGYE85N2PY75PGyMazTdeaL1Eaprk7ksQ8YmzE922CU92a"
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
