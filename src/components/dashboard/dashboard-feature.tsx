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
    "3dnM7RpReiGeEsd9C13NpCx3y7YXQKvxNUg1CmMkbSFckWf1DCbq8j7W4LN5qp2hgjuCESWRtb5HMVF8DNWCcfHj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bgohSxxUDqWdXEZyazFXvvCMDgrjmbnfkhmTYiyCaLbLRg5Ki62BB3so1aFVBj4mw5oQLL1mjtVWL3P9b3xtYoi",
  "key1": "5Pmecx4vNhig9Af3zTrqorY4XssDtd4NkHQ75o5iJ62QfSbgn13GCbHoD4mBbUpoyMDWCW2RAiybjwLTCYb1FQbn",
  "key2": "wNaBWr2QsD2bGS9fjXE7X5UDEE59A3vuQCFZoroZ5ds2F7VcyNd4Kr16SyFntSs5UyL9npMitCwCD7JbogDJD8c",
  "key3": "3LRZrWj1H428UgrMeymFSQCBx7CAQ3HPNe8k8AKz6Keje4ZT6aJku1nPVCj99nCNjoPy87TFmHVm8u5DridD6Qu8",
  "key4": "2C8ZfLDpm8iF8xKbmoq1rTSN14L6ynwwXdtxdJQZiVRAwj23e5xzY3vpi7cX46DAqgfF2efaJTMBJ2ELRWdERs4g",
  "key5": "MsMhe5Wdu82xbuNTSJXMejCs7S19LNz75p6aVCj2M5KZJWNM4bb4vLjkLixjajGEQ7g8a6g4dfvf8n22MMJ6eNN",
  "key6": "3qHBUtybCmX3Kv79AN8kQi6m7YL1zw2auzqRHnWQ8Pe1YeWhpFys3vhaSFA8EcjqUC8dh2M3Hj3cea1t1QcW9M4K",
  "key7": "33dcaGp5vWDY2sCrkx1rvTpt3JEzmRY1AyEntNpghPEMgnn9pqz5o44gtib3q8Z6xAy49V55FRsQrU5gKM7pQe2G",
  "key8": "2X1PfHe11pTpR5k8jLWrrSrnk3Q9UNqWZhfBb8NR9XjtbMv9SV5XJqUGvT245ABcEvRYBxNopLeDGsJHAUNUUuXf",
  "key9": "64sVQtvqENqF4Qq1xEcgVsvj6x8aQYSNEUZHFcGEfbkQzQftrXZUWqSbHRZ2bePX3cUpj94rfDacUqfHXBKPoaSG",
  "key10": "2B3UE2haX4WxdfjoVCM1mnVaN7eRFVt5d2HVNEuXk4VzVBHJ3Mv7TXazxhFLFmsThtnJug7r1VXPGs3crfDGG6C4",
  "key11": "3pw5EzbzZAbknGKLumHaqHfNy9QFgZsAHH88MAy5Psc2Vk2K2u9uxE8CGQXEFrQsh8iqYT6cjasLARBbcbEcEbpk",
  "key12": "471CkAx1ErnoqQUzp2fRqLmWgTWHqVKjC6cEboM9vLYaEgnfY2UzG3yDutsJ648L6E7eZ5QJv2KJwaTvkBTKsDWh",
  "key13": "5pm4Re8CcNSeACU4eoG7dL8aGFvpzWeNLB3sU8xjaJzSLBRz8M9YYyx9o5G7AUpEVso3jR6zJYeSSSpc1pSrFnF2",
  "key14": "kzGxU7R9mjPXTqZSWFD5WGNecqC6FnempWcJ8rcif1gYcCeATiguDBjaSVhVu8bBwRngeUQB97Yqd5VajVKXiB3",
  "key15": "38wvg4x9uuWJtVnrEYZrqrfPWpAbHfGycYsoKkYFdSjE4sxRAp7KPpyK7tG5V4R2t7fZS4K4TNVCQgeDN2pW1V9V",
  "key16": "2LhJQgWNRbE8iTZxZ8DdfNp2mHbm8Cv9vd8JtuerderepqzjcYa3Wq9s95tZSKGmp5ug9r34GNPa1BhF7U2o1gra",
  "key17": "4MYwxGAxa88qmEXw34z8kcHonP65T7yhM295ExWemSaFwYmfzRvwnhWSiKm1xtCAWpyduSj5zA3Az9VFcR4AhHHB",
  "key18": "55uzPBBGTmCp8HTKB1oq4TDfUMBvAYcg5A6GaRC77X8Sbd8D4QXndi3vyPW5UN7zhume9bZ7qMzcdiUGacM9CWeK",
  "key19": "3scbg5KmGCgTMAonQhiYZXmUGMEvRLdq9xNTvLmE7XvmPcGQymrckZcSGCMAGtFAMrD8TW5JoLk4gRWB7qgvK9Zd",
  "key20": "5hx4yJ2MM6ZHm7o5Sv6PCrFoupeKWvZYXHnZaF61NeHw31tBCEq7wAXCastixJk1H9jgMCCUMEATq4DRLu5M76rN",
  "key21": "4jVuBRcF1xQyCUM8DffdgPyTXhVapLDHPqvhN6ZQ3GgFRFNeLzHDy1pnYC4j8W6XKHHaoaNbxZ11TDjEZYvYuY71",
  "key22": "5RJtwh1oigFo7oPydeNDhuZXXgeKQaDLfJRZJeFZ4EXkWbZSgkRD7qdAd74VbZQsnJTxGAcLywwmnwZg2FgiVB78",
  "key23": "M2noYV7iTpJ2uPVXqfF7gyLEztWxgyKni2KQ8PtF8upkXKJNgVPo18bMo8hygc7vj7gkPXs8kWBiDFb3DxUd3y6",
  "key24": "qiRh8Pg7wgkbNphrecSVu5KuiCf4e1RrGjsGYxJMWPb8SESAUqaATFTzSJEiCLhr2bonBDAYtThfMPPkPtpXprd",
  "key25": "5mddMJQgQYpKBGLwCt7uS3mySnnCKhURBRZpCfnE4KTpQguFfkVg53me6jKZa4oeTQckwyN37WVhonN9D7A9DsVY",
  "key26": "5F4iTBJQmmohfa6x91vN4EZG5oKdvxwhdYfETKPRcHAjEcsnM6DeBRD11pLLKPKpjtyQnnzEq9A72psq9XgymMTG",
  "key27": "5cn3E9jiotGRGyCT4vGVnVypv2X7hoiX9KANZQwhPui2fmyeCUCUUvLUDkHstWuiTLNzV1yxY4etg86e5q8y9qQC",
  "key28": "4nQNwfgtQmCrWkmQmA6NPuAA344ynkXCbqk1mLyGGzBwh2VZ2AUXXTEvB7zEgez2BBVrzEoJT4JLcncYHawiYi6T",
  "key29": "e6thC9AsEAgjntszZhEJSZakRhioew7CLjzKvtJzSPAQjE9kvV9u37SLzYpRpvsbJT9L6NYCoZECdm56FoDxDHe",
  "key30": "24hwf8kV2ekoWrXThYEy6MtLoBHmP4tkG3evtasHCYBdxxCHXaNLkP9PLcG7qShkYrFUZAFMfckvbARveeETWs6v",
  "key31": "345xiT5ofGNdBnKSz5R7nVmihbfojYPAvkvzzVqYW56Sz2sCgVirisEJV1jDs2HLgNLWgSgvMJrJY1MKrXBjdWgv",
  "key32": "5zHPz3F9mRhpxRwfaZvgp31h9vbnfunyhEzXbJcoJY9MTPYDQZ13NSYe7JNPUvRizQspCgkBc61r7yyb931WRGmy",
  "key33": "5VxMTojALUdnwMd72dfhu8tsGTUrKgcj2PVmxNyXtTpv8y5nCq8RBySS7yrXd6D7mU4QvD8XLpnZpwwBWyRs9bxY",
  "key34": "5ycR5F4dPg2LbSx923zxceL67iicRMMHoLDKgn5rTugRgS39wETazJ6Jx7arM3xeaiq32oCzBcgjr9G8m394WBoq",
  "key35": "2hU8cpwtCV4GLbNo3bgydZ1SdaWNnittTj5KJnGaKYtgngqjnr7LnjnCQoz2ZL2ymGHqHgW5YYw9954nHKzSq48f",
  "key36": "3fcb5n71osDAribd3BWu4htKaXEiF9kZCKFdmPPfF7jiLuVFrvuAfhSMkqHipkPwsAbK3u1XuQYWq7BKG1Gzvxon",
  "key37": "4yaghWudqx2MCFvQW8WU93CRYGve4uYDzbUhgd1H3WVKJFo9sfj2qBMKQQVHwUZ3YXNd1Kvsu7JMEpvSBg5hRbt3"
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
