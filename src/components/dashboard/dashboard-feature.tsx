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
    "5ypYKSPrNQaYaiKkdoS1TeVgMPQLDuVa4GLta54P6DQH3U9cduweAoToQmPqJjSmUs4Qe6a6m5i9zZ1kQZYyN9NV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jrAz2uD8pMaXXaLCiu4m11G5cza67t2GwaMfP2M5Eo7Z9AAoHaHpBhkcLCTcvQ7zYmHTYwUvMQGWohfY73E43Lf",
  "key1": "5maz8t6g62MdLScrZfirQWxtDTHtKKJNzE6nfSu5eegLmfx7Tn6vPYHspDfHP8uyi6AeXEbJVNonsshdAqhV15FR",
  "key2": "3Ue8Pb5M4ipR4iDD1RDFYnKtPMtA2bmbyyHzDQi7hykQa5jhAQ8bh67Uc2wBPHPRTAMSFPqZe18JGNqMYPGGBZke",
  "key3": "4ACca8uEws4nn4iLri4UTAU1g35BpbPCgXiGPUKPEVfoqnxNufhdRmKYJR7vrtjxfXYwHJqRY4nucpBNxa4jSkuw",
  "key4": "EDBmD1SCkGRAFqizCaNUspXCvbAzmBiZpq62za9wSezB7jr82spH6Q6fy1DkTbGHpVBGqsQRVVK4mH4PU8Qvykc",
  "key5": "5Wr4LNSFp2bk9DXGtrLno1YMm4eg2ZMpyoBVqfBUneu3D37jQg5qAv96LC7oTmuAJMwviDNUnMTzYHvpTHDiGpb7",
  "key6": "3fVmn9LWHvN5EpN8LoHSyGfmYbsLgn7KUDL3Z8We6qAnQUYp9D2Bp3jbyaxzLmfsExzw2ShNtP16sroe6jujPoGK",
  "key7": "3anPPHDctreEdNMYP6TCjDaSJRnhswuZosJyuniYBMDyW5cFU6SPaAGJeRpRZMNgv5BKFR5QTPxRyadWUFKcKeZ6",
  "key8": "YHt56TsugHzG1mpT3AVkBYw9qAiFuFbvCKAeHgDo7x5XNkTbgbZHDaCmotgBLoEskPkZP5CWWBoMc5eechCfUiJ",
  "key9": "3SLNzoHydE4NqwJPpb6SY7kEAM2Hjf4nqGxFD9KMxhrTM4zzRmPM14gvoUrQ2xC3KSTAL6bvzwdjCDEzefKSgHrU",
  "key10": "3rs2jCPBV6Jqf9uijowNVhJZG5rooFeWTfTu2LcSeLxw7ng4vo4MRKrSzDUm7vkR7tGF1vEphnGd7h1UhcX6xdqR",
  "key11": "4uUJw4yy9xRTYs9cGUwC8NgSY1q2dMiePKqtkk2w7mreNLPMTEirjv262swLkpbLCuRCWyJWuEHM6tPJLbLBXLwU",
  "key12": "2EjtaAA3LjoXJ7YkhfAcqd71C8XUvC1qN3X3oVQj6nJFkGURH9vGeeoeuLVNY2xgqB1wcgJkysSiZfT43c8bJ49P",
  "key13": "64RwZuCycskLqnsweMSz2ASf34EBLsEUUgLToZDPPududVF1hCduUKApkaRPz4MPmRpbXJ1W18mGsAopM6WQYtdj",
  "key14": "4nYHhui6q94ZDXAUgTHVDR1DFXKMx9V4c5fAz4a48LX2AucpV9bJGH6BL8D66pNDgn4iDCxwZUqEsvxDo8utDe71",
  "key15": "5poRown53x6XU8SXqspxY2SHKSJuxo3UXLwpwNYxfFtosXjWMsRXb4VPttTFtvKEPzwMUHsoGmJz51mQDkMgQzmy",
  "key16": "nEsLAMSZj7opx9eN176YKgKDBgybMaQM6bPJU1BbLtNPMBKztUUG8a4N3yDN2arBMymukdW6hGRUjsn5LHZv29C",
  "key17": "2JtjmUgrtutazzvuAQww45xEQdEfQoNff2cAAZWnJ2nuFVK2u48bQY8J2j5AVp7QPmBsfeBPEkr6nAFgTrC88J1c",
  "key18": "9n1mmTfPFMbihaZt8x4QYTUHzztyPUQNbhHLbL3xxUAFqek2re9TW7Ppn3Nv8T1TyzU8YznVpcAtMubqPdMTirZ",
  "key19": "2725nys31BzRfkxa928tJ4p8riPXreuwNDGB7s6P9rjLLMoR8vEKVUmj5AEzHQ29Hw4CBkbjBYenfaahzSRBtZvU",
  "key20": "3cgQSXK4kAQrCe3fZojx5kpvLiRALjPweBvL1pbNLwku1CMNMo467SAJVkT6irqufWpUgiGBJ5keLxsFQMd4xqZa",
  "key21": "3D26s5pPrJytDHJPaMgiXYEaeo3ZtRP4GruzYoM2qpMk3H7WCCQ3GLwjzbAVbo8TfFJKAaGbSVXVVh5zrsWh8BwY",
  "key22": "3ix5ABk3y5YCP2cLWnyq1Ak3j1BMwkfevwHnHrw4dY5f49q48SuWZmUFBe3u476yhT8XvKV83qNQEpPHQxTpXo2q",
  "key23": "25BAxh494LA5z52XCsQ178ztP6GWMX4XhhzURjRbqJkCMwYQuejJxassVgUcmMEnEHQg6N3soMtBo5sFoLikE4FK",
  "key24": "WbDpvwBLPeyJQDAC3fmiZmDq6wHZf29zVuRDsHfuRNdq5hrCPNyysKWMDUfXt2wYQmE3Y1zWR3cGdQenRqEeUfM",
  "key25": "624E4iosLns96nvi4U9EF7zuvvTu89RRDfSQT4zzDpyYH1xcYxxBwqq2Zx27S1bFMQUB3huiPLPYCRXk3GwrBQ6g",
  "key26": "7eib3uaTNkXGebLEtdZJFgbkRvb3uvwWsuUjRfgn3VSKM2mCBgwXFoSJeMrPmBDC82RmiPfwdsP3tyBp822N5o5",
  "key27": "67eUEPtVeGA7HWLctsh9yrsCu6yu4uHQp3dmFoJkYY8EHbBjw8rqwgXJJh4mB8vNAWBvx6XXeQjo2bWMRCvyhRmJ",
  "key28": "3gBUsQHGCQRiWQpuxXH3KSxCWaCteKQEKmznWRjLymuwR7vMaMETv3GHjvW8QPjgh4vNtqnoSMRRd7kUisLE4MPu",
  "key29": "3haTN2szSnWwcoicK8E63jzaB6zVyBvE9t3Yw6VDs24MUwXZFiBeqw7koYu4HX5wN4r9cao2x4brsLnuVKZ6EoyF",
  "key30": "3KpvJsTQNdRCxMzVMgoKkp8WfFhHnEMVax6VW3wtbMdmUjGH2cnpAShcfnwhJ1sd6wLkNDb455mTWcHQey7A5F6R",
  "key31": "5aCY4wZNMk3MpNtEgAZXLJzSWimZqJFRDWDPdsusKYyaz4CevpL86kt5wmg146158uVU9igvxN2Wx2LH54uMyDZF",
  "key32": "6yn8xwAmafvacWLXoQeQWEfUTmQbfkp16Cs5y2Qu2CF8iS66hGDHjB7f6jAq3qyVW2KjUrhTPJnucZuEHViye1W",
  "key33": "5mbBp4muVDa2zhP2ShW2fafGbyFn86CVVxqXRSLJ767mQsp3nSMfK27MEmFLSpzQ1Rs8Bjps4dFcm6LSqbS9f7Jv",
  "key34": "mh2ReaBAF3dhvrRuXaQTG2e61tveSjzaPpVPAy9xBrLaR28BjgkphmbFGw8qUUFHarEfAa8i3RKsdfpmDzQyFNF",
  "key35": "48xHUWKMnS5zSvDbu3goxkb5mi27v6oTwmd8o2ev8Qp1LW8aufhYHydHsE9Bv5vASzeg8k3CYZajH8e8L28e976A",
  "key36": "iSjMdmfkECUyKZSwqQEbQSQGVJZtFAHuY2suBTa3hemgEEFmBx45RiREyZUH2iSAATvDjUoWSGXKd1vbiJyrA9G",
  "key37": "URNuokwDRSTNyf1kbaKT2YQfKthtN1fhtQVT4mh5EhCjsLYnJsorzv7pPfLa76iVRe9u17Zg58122fybfdefTCa",
  "key38": "3zwQ45BeDj6LtdZfpPtzwFEQkUdowMCHL3od4HWmEypupQULvErResRzfFJyrzFVmBuNNa9eXnrg1vP5nuLYvLNd",
  "key39": "3PKwLQx3xTYJaJTZNZjKRHzDSVzagEj8aSBD6L7h26RBj8nbT7GXrBqc7sGh6qojyX9erMEUPWDKxA2FwCuHtB2x",
  "key40": "fZJBZ71NDBuSX5M9Mshiq2vuMQW3js65oGMVntPa99cSC8397E1r6vPCu1FBJGVYGsBu7M7omPW8oQYg4YuzQ42",
  "key41": "427msomcMD7mJRomfXCpFQAthuV7191mpHP8gw4AZ5LWirnxJBQLDmCXSwWBoXCzmzq1dZEsYr1QGkKM4aPMmxjH",
  "key42": "2T1u4b3xvLYcwDvqfqNkjaAHPpSWEdoRsBYTxXZAb2HNz4Nee2djiaMKZtNFH5N4VBzq2CZLss5D1aRoDZYfQYYE",
  "key43": "5x7DidEcBDfBKcz2w6pLmnRWEm7oB1btYaCHURqcyYTbpZB7xVKq7eug8XRioZsunEvuRVMXJN8GSmM8KS84dDdu",
  "key44": "4kDMheqcQzYY4EMQsoZQUVBVRVPiqMmCXR5ueK1UKjXxw3c7aDGZXs2Gt8WLLMhFWx9jxfSRJQZYEZcEMLpNae5Y",
  "key45": "2guE7naMGx5ibwTdy5hpbcZSEMdK2wCTvz7AXCu9QisJgRMkZjMycJgZN4FUerKisKByWvgTZGdGGBsGEDRResWS"
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
