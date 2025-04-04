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
    "5yCzjS6wgCYXt2ZiHCsEgEPhgYSnB4MAmcpb1bTtMsMNaMdcSoqKy3xmZCmoxySRPPNsMqfMSKmeBQ6VbyGti2Xs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d6pw96xMRDpRU1ncdd8avprX9mA67gsuSYW9YnALPkiPfzqXW1HDERvpFUYEkrU3nKehawW7mNux316ToPZcQhq",
  "key1": "3WeaNjMTs1JEVWrytgzZPfoytUzyQ9JWegjxaEtp4c9MvQydRwMQmhksWAKrGp7gjGjqtjc5bV5sb2A41PfvV5tP",
  "key2": "4YfaQvH7Qumuby3RXskdvvdedyH8bphBZ67mLWgDsFoq3cd1SvQPmPDf3cd8v2x9j4cc9YTwTSoxLiTWfRz5Jm9p",
  "key3": "3Lv1e9P9ahtMuvntuneg2efnyFWiK57ziWxtoNNWrbCrBhVDpkAVNU6hWmdFy6jhpP2TY6ACR5BabX3Xin4FLxxC",
  "key4": "4A6Aq88kbFLrSe5xFYBWXbzGHe3oTmmxLBcySq9H3BC3Uz5sBXyepy537G5SopYNXDd5b7RmNZSNk4EuKcgbKuhN",
  "key5": "5Se3qM5tpsSmmU6fZi5M3VsiPdKZN4qmGsAP42i7sV2qkTBKkC51sEejPfmHSrXFpwsMyjktgNR1sb9ewDXqc6Rp",
  "key6": "2KG5v4j6bj5HZDL3JhxUZVw7BXTVeoHRTHpKji172sa1Hw8Ad7d59dFxAb7rbJCnKZyryEYNCT36jyn3PMFQgRtS",
  "key7": "4mY4Py4QsjKbgLDtZN1kVBJpCi293i9cMEikNehEsSgT8bEaXVb4X6mxSsXGfHgWKfSqDiZiYcj2TKUBRSAbT2Nh",
  "key8": "3ZW6GsF6oYY4PQPoKxNSF12g32SFqAmL99nNXf3c78Es98Ky9qZHpttLE2EJqjbCQig9kYjpqLiiY862c5BJQ6We",
  "key9": "3U617cbxKT2dXwUhr3wXj9pP8aBLFr55vakZYW1PTCBWuV1MRsTgDSrxvaTRMw7r6ZfyTeSMmdZucCZ2PTmkym2v",
  "key10": "4Kx9Afs3SUXSmMAQj2rgQBEvzCTJ7L4yKXMzHQNqHEjcxDp39eD19baZ5upbhzJ7ALqie3aW6tU6ocfmL8wuKQTh",
  "key11": "5p7t12J8X7FHwwKhg3QBmRgLLWUu1Z9WXx6e81SHspZXCn76GfQWbxYgQTdi7U5dyEpqhLAuzRHhXs6omBL9Temk",
  "key12": "3GX7tvGrDm1X3nDG11WdDuuadcm9Lay269nfYdgeUrBd9WvZtykMpdwdnVwGPatpF2jxJbCRcc8irGe3m9SyeheY",
  "key13": "4YKg7Jysu2qwNHdTmrXS6L1gfysvygwn194di5CaKkQAmJCf6Xbei9jQPDub1tMd5zDDACTj4NBhPHnGjm28zz4S",
  "key14": "Szuo7F27H2TUdjaqWdeNcC7ahzsnjCiDGvsPk2xCfGc1skAhdGEpUMAT5ieHJza5rFajzy5boKWLtH7hvD3pZgR",
  "key15": "AgibAnpwcKBwj33kprkWJQb3WYJ3iu7EoiajN5e5MXM6p7A7SPQdDJyqMbs1cMp9J9ecDQV6PpSf6gzHuLf9n2K",
  "key16": "495msJs35oZCZ7vkCbSCgHvQvruk8vrwNQsNWzMf1tTYXo9phJrSULSCocfs6dRoMMSfapkRBXJzh152rHn9vnVJ",
  "key17": "4KzC6r8bjgHjz9TdjZJ5Ak4Wyz9Bn1cij6QUgZkvccvKhN9pX5L6EvC8hYKMoodkoWzzUMWf7HQWTJn17ZiDMpRM",
  "key18": "2Ga4MkyxhEiE3oc2Kr6aRyCGsNkfrd2Ffd7NoizrqJZVhcZYy6EgG9zS1VWBEBdhBQXunKwAtQG1gznjFCVZGcah",
  "key19": "34kMDAWaCRm15L6wEJBruHtrviRMoyBCdkdf9FkNsPeqYiPxuYpxdeNpL1cn3Z2ctfzjA4xgrp3GPRPwm7EA9tvE",
  "key20": "4At5EU3HdvZD9VuHeTmyUEEs3w4ceh3LSrWPcKUPDvyf48dA3RVbwfcRTyy2EcdryZdbTwQKmtTap4p6Eqw7mK6J",
  "key21": "3Zt4qtRj1PMXSnGhZbbia9SCedaPotmZCjv4ywSqNMWoTqZMiVTvygsKHYr5pT5pjHoxDBnXbB8TBh77pFR2aQsh",
  "key22": "3PpkSXsvbAF2GFutBpPhCdnfDCno2MZX1vv5iZzX4oFhgSBQAWWvdkJfE9fvViUrMAHY4kVtzoB6NJwFZ7JYfTf6",
  "key23": "3JBazs83aPii9XxiAiym7NcXF4qdMDEcYeUSB2MbcE3S5jZTFfpkouhYzYJGS7Fzu4XR49KyDMVjBmLGR7BmNQFA",
  "key24": "fiwDTgs8JdcTDv2VJ2NPRpK8JhYVT6eAJZHdFAkGhJi63dALNgy17ULZwn2tvE35gXUc189ndRn8XnxuK2yPpSP",
  "key25": "3qcn92Rsr7Y2N9QGAjJr5KECt36KhzyQreJhPyADhxqvWEdBqgrqupDcP5s17gE2YHirnSZ4M1Rh7VAYYBQrRtxC",
  "key26": "4x9ri8wHWSQ7rUgPjjcHVogYcdXNG2Ebwqy46XKcBYP38EL2dDksqgPHirTrJhLDdx1Z586ek2QCXQzzcw2zWWvs",
  "key27": "3BrRkyk85PwsFAH42ncUDZdcWAtLeMPR4qD9SmhyKR8MpHn5UxN2VdSXsi9wjUxt2ZKhFvbsg7zdEAub5Ha2iheX",
  "key28": "22e5fSDbAWCXzgzjWo7TMGphmPCDjw7Ntws14DFqnVWktKL7mXqXPfqaVbofBTktgoLDNwjPAFMsf5MDoxVpuTXp",
  "key29": "62jU6HRCQn36fo1AYQSWuy7Y4LgeF6rwZYBaAQ7J6NdMXmwVk3MhgVdY9VaFyohjev5d8wkjUtSGHVStnbpTP6hX",
  "key30": "3PBrRqKRK6RKtHAsQ6AFN1GVzgi2hVmzJeddUArYnHa9U2CiKecVMzmBKiDUWXFZ8tJfkVqF4kh6qgyvA6FXc2B2",
  "key31": "HbiY2EeMY6Yj6yWWLEdSC1C5fYYGP4MfjrXRvFjmFW2oAMYQC8xxazA3ro4GrSxFePXAgmvZrhouus1kG73tZQp",
  "key32": "3pH4erpUdUUeK7N4Cm65T11VpSNRU25b92XbiqaM5qXJSQtFj7ySmU6cjKQKeLm8JThfPpcCrwhu4ssDZrFMWXLi",
  "key33": "34y4Z5kkMkFKqGAwCP7STad3JXeNJR3J4sqcZwieEqXyZiZVxVzC226GY2pmN9RDbsQe9hRBGusMriJXm2TDrD6Z",
  "key34": "5i5LbKuc9aNFWdEBgQ48ufZJxBwJC3dBmsd4JFnKfxbqzF2W9vSH6aoYYAtq1r5Zx2BNUV6LABKb4FH3P1T9bEaR",
  "key35": "2bP4RVHtf7fBnRX5mtknwexoLp1o1yjpC2DV8fkZk1YfgteNh18guLVeDvi9QVvVH1a3Tra1XmwoR7GuoShuqpwv",
  "key36": "3c61jCGPhf23oPoxDiKDcPojL7XU2EUzpJREowujvsn8ukgr1P5Vs87oWvvx1RjU6xCjMZL6TLRRkHWfZ3QLxswu",
  "key37": "5FWoDhGZmwXnimF32m7rBooidEExzrjv7dETRGRdwEvbykiReEJ2NLxpyDpBvd5URyN8ieE2bcUEeqLN7c9f9dsh",
  "key38": "2XcZUDcXPASX8DmaEj5NURjLAtdJVA8jYh1TBFeE2QKb1GiLEkSgRW67zmGQQCiZHPcRoBQtiy9LpnGpR2MJfKV",
  "key39": "3MqJd2FLb8TffMvzFaAVEwWazJunTdXJBMbDyNnASvTZadLMs61VmfGQfdgPqhZJyJCsDia9uMQAe47bboQjfZT"
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
