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
    "mNuaK31JfkYPp2j2nVgMxhA5rtVM13QM4dTSfFNna8hs7aaGLCKYXbAtQXDK1u5xWubAnfpEcZJf87rcqyoFM7c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mLBg4NiC7ZjX592hXkCvQotYwdQ9gpZ5EvaScAWKjiRkCnzbZuMJ8zMExbVybfK2QibApCbXYiWXoXbk8yzpejM",
  "key1": "3FFrMaXEyjSTRdajFgSYRMFnXTEedko3CZrUEEtg2LmcwcnYcajafe1JaXbepH2cddQRXm5Kj8Xgv4sW7UJE6C45",
  "key2": "58EA4Tdzy6V7npTy7r71fMJZMQ7Bzc64K33efn27uitfMRHwMzt53a5G3cSJvp6NMftrftpHGAnqhb2YoLrfeHnL",
  "key3": "55qjS1oB53X3ZGCFq8ebTDpunQswQ365JrrWAatY8zf5vdNuJkHbWEsw8EooComCWry5aDkdu1v2VmrCNs4KnHKy",
  "key4": "FTr6wrmMDXNidhYkV1jBqsLWjJszbZdpGjBWCxLcF81zTNehoSSvTgKczRCWAgDgwBZPgvvLdoMmjP43knaX49b",
  "key5": "5vRCETywsawxZrfCSiapK9rZwTLrHx21xa43jrqUdCUQifB3Z1RaMYBDQ11Q6v6rrSwWaAW34HRMqMGoc36e8yks",
  "key6": "4HVGJUxcpew6FBcZAtmosybKFjq7focECD1zYyjicGt8wZBFDFquWvkAX65dwthvtsoUZKpm8mNqFeKWQAeoy2g1",
  "key7": "2CPFHPFpXKKYt9jUh62Uvkeckh1xeTwVH83FKaz8SbZi48VDEmf2u5jUgppojDzrtgfHs8UDx79HZ4owNjpZTW6m",
  "key8": "4SxwucSruAzwxrjCGB8mWvzLzDc2b97Ce6Hn6tL9c9F9sRis5QNzG8Ek54T5uNVQeUMjmPQr5DBJV4S2TVtkmG5C",
  "key9": "5hrYmRDE8WsTJmVRE3oFTceTwefzrVYowZBgGy3dRzB9mH4Km9ZSqnL47de2dvDb6ixmoWRiA8jfNtUpAf3PgUdr",
  "key10": "4k7ofCxzGc25Xevab2bs6qUEpYDA7U2dPJAyQ3W25ifXbJ4K6GrUuuWgSt3nvnts6SxFyuYeqzX76sSEmiQBPsHA",
  "key11": "2ruB6jqtgFnxHxw2sNC1MHH6M47hVdhRqXtS4fYvUm9CGdm5HqpoBv6qwUFhQeck6bDwJ6uRa5mKRQtpWohfait",
  "key12": "3ibCMy86DfyzcAEQgc2KCt2VhiHXCBpJmd8VNcy11CFEbTP19mMFpiMhe2pEgNfB1TjnoQMQvMXjVAvE2UeyHDas",
  "key13": "2E597XBg27CMgUeor1raCMTEUZ2cjsdk6pTyYeWghSC6tg8H9ZfSxtBHL3xJP1G1ZHu7NWnyUPLejZHmGdd3DxeT",
  "key14": "4udXnsgjMMZgH5twjeERGcKooiXwMorePv2AbBAJhztw5CsThyfTTEnhjc56wdkmQ4sxyk9Q697HNw5fp5Dsvh9f",
  "key15": "yzY5rSAD1CGmcgd4nhxVFWwAHhWBhGrR1zC3yqMpA77MRCaHqH3TbJSBC6oVPhhhz48NzuibHffTNpVqomdkLuo",
  "key16": "63a8QvjkSGMUS4MDQdVhVqjsFMLpfAmgGaKCswsyh3TLvNHMBsQebdvkoPzTB889x3eW65e7F9BKMKQXjM4WjrnB",
  "key17": "2EFesxXZMdokqwhTgMUA3CH41jCFvh886CG1sEwmXmG4N9urX2oJsAiLJSCNzSQhu88cE7T7uYN8RP2JrrAy7Gra",
  "key18": "3wUY4KF4KUz9dG7qRjsbD2nnpR1Kerqpi3XjoNFz2gayEVZiPgsnwZSWPpFUy8LB7vDAWfsujW1nbiyXs9rrawka",
  "key19": "5tsuS5jygkN3dir7VUP8GAT8hC7FyHy9vkKb1dh43b6zPT2n9w5MCTrfu7wDUgEyWp4FkmQ5PEzBU7Trbbe97BmH",
  "key20": "2z6vHcDTcfTaJNqYoDehprb3XsD5iX6YX5ZNXCpoxwqmY8KpsdTdsJV8DWpfRcTNMUuJ1VnFsy2QcMAEmegskdpt",
  "key21": "59mxwdzVJKQzcKEhS6TK1an5HJaUzu3Cbd5nM19rvj837zyixvVwiwqNeVVaB4hH46gtp1rVDhar8xmSMaDhWY17",
  "key22": "b1YxTmnhMQ2DxfupSwN7xGSyt82pkGWcNLhDo2Eo8sKFxA41mNhEsP66aWkGAWYWHUNv9qbqt2EpMoNTGJo7G9y",
  "key23": "5FGV85GiWkhLp8zuHf7sfQS7KHAp7LXkmvNeHnugDrcbKS2rtUvvV5dTPTPXUkTHUcSTpLL52zNf3QYDfHyt21ze",
  "key24": "4Nqq5H8t8M8zTcQdx68ZwtGdMjw2nDK2dzeeC9w3aZUqHc7688nvk7qLGGPgZHJ7NSwV1BZBCgxAaK48QxYC7i24",
  "key25": "2oUv6n73wjdTELeTJrwAxo3HzXitUFte9kJSwGHVg9jfkhtaeoPyBBu1swbi7yqWuyuBhaesFv7jNyBynFZbqYAW",
  "key26": "3anDNbxpCUKXkdqiwxqC2yTY2xsm64J3Su6j9LZemHtAmNQLZuh7kZoY7DV1rXfxUAkg47TLNBqonvbXQ8cvJmFF",
  "key27": "2Sn44hNQL6Z3L2EnLEieKhrW7Tz6bZ3rCHoqNv8efK16Z5UeQ1ThEeEA4V29F8eYEWrZoxjxN3RxAXqad4dyyh1V",
  "key28": "4naqX2HDg164rt3eyVfVZXDnLHCGuMMgPzyDTjMR1NDL4WVFP6mg5gUDdpQDu9H6vwufgZenQvDTTbcXTxYkQPvJ",
  "key29": "4ezLvEfPXSJxRkMhkioBxyah1L5MDXWTXsqb1iUATVJzeqEGo8zSe12MNPxJ79yrthUrJYVniZRPG9Ni57AyXYtd",
  "key30": "2tUgDmFs5SdceSeiBxxriX4jbEX26zGHohJQKqboBpUTspLVAHVkY1NbUbPq6etrF6aKPk6kwQcM4wtqooMZDkAJ",
  "key31": "5GpqEWuECE5yHQE65LxzAE6s9idsAyHmUL1BNKtouyFV289g96MUtnJVNmDiCVffjGhXZ7i2v6TMFhFGcjRC8jEi",
  "key32": "2BgWX32qbF3q26BwmBJnEHWuKK1rLpsCkbb273RuGMQBcG9pJkg47E8XA5Vpw2jiUFZV2vuCgxeqNGT3wwxKp2sG",
  "key33": "28RwgatWjqwWsuGohwEDs77Ne2av2VHhR1nQ8ZFbLkZJQyL8iPM565Wd1XTbeeNU3d4QXxRoWmbYxwRfnEWQeoXt",
  "key34": "3uMKNtsCD2pcWXr6EJojYpHVkKwg4K9fnPzeweZNcd374fcmo2Qh5uk6EfnXQKwNh2XLATVfm4Ni9ACDMteojqPh",
  "key35": "2RxjtfortJBC4TaE61MSpFhVRJQVbuewnXFv8UMn1TL3Ck4YhSmhioKpCUx1pE7rgjLdgxnHSLpeqTNdm13PkWXX",
  "key36": "WAcVDsNVmA6X3eaMwXqFFpsM8Rmnr6m1SmUHfEqHXJ2LNE4BnZX4Qsh9ps9Mv7QhRrhL9GrKRvyjF4Pq2EhxWdT",
  "key37": "7MSZXMJztWFujRz7vSwBB3EkT4UN1QP3ry8usSnxSZUx4X194qv5jxZArnz37zjiYkfxtKPuyKYBJphr49HrXqH",
  "key38": "MqhassrH9zh6HAUKC3DyfRyjUAfTpcoStnpTm4LuDDeCRtcyYonJVEn72MKGTXzvVftG5pPN4dQccaMfw6erk3M"
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
