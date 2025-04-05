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
    "kw2ynRbjtavRXJf3T6ZXamAsnaMfXQpvocMpi54z2aE4RmR8d8rk2LShojLj9SYoXdJebWu14RDw2QKqMjW3RoU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52PUM8aqwabMMN6hVGDzgwuKSEEHsNL8JaTCG2onZ8ahnQTkTkRGZA4TDgjRtNeSvjjiEpWqJTvX39h9WBh3LQZN",
  "key1": "5BC3kaNFGmriRYVZ4uwZ9cHasueM7aForDmJTVRWWZ9tETS4jF8yB12Pe28Q9yoQnCC16KGJ1f1f2CSdwgj1C5kM",
  "key2": "2x37U56P2bk5VzBrEPotcQSaGRUnWu5KmbAm3iRU3EwpzepKXxBbRJiLwGPTGhc2Me4MVPWMM3jJs1swCEt6RMW2",
  "key3": "CAmFPu983WakqLBd6eemwF8Ch3nVtErvUFavPgrJZXW52PGX1RzErEFKqr1DBWXyMSzL77hivGWgrPJE6aY61pL",
  "key4": "5YSkS4GCCGfe21ZU9AemYU8VBDmivhngu9KwnK8iz83smv6t5uEUnvrLkCvSrPAFmW5kn4s39uCFsgz35qmT9pQU",
  "key5": "4s57ejEa4yXASwP3dtYuJcVpdqmZGf9yHZK6UKpPUPEkEccZ3KrnEJ5xTgfzLzLxee36guyTNahoQXD1Rqgs7wCa",
  "key6": "3NQ9eksxBuzXyXvzYzH8HVLVEGC95t4WGrgkPWLf7tLMmUzzHz54eFTcVmpZN8Eoenf9DxtfgEcyzkZvdH9HtKcu",
  "key7": "u8Np2C7vvyYCAzLLXsbxquY2QHSpPDYsyS7skUomZn77AMrftAp85CJmarGWqx5cjSVxs8V3zDDqUGr1TdoZWZ2",
  "key8": "3Y85BKzewFwV5xSwLVEtHXjjZZfQPMxkDuHj4BHKUDV7XHU9UsstTsQyxWAi8E4SxpkkgL7temmPfYhAkYzi96sE",
  "key9": "3L9ZrWaGtAUux4Kd3aJwUyhb4N3EnysNkyX3L6Pdr41FZWa2d2kWsiLFHcp4F3nnKyjAaoAbort1JC88rEPFz475",
  "key10": "NuM5jhiQeuRRHEyYb2QuiUNM8SSU2U61sipfQiYQeQJGLvtK4fH86cgW77w2gcjjR3eNE4r57hsVEbumXZJNwai",
  "key11": "4uca6fGeDc88CVXUM5kcTf4jS2Yoj9YUpB1ECbd277EqsoVyCDKxyf4bcujJD4TYJzMefG9tfyZ71TsWjMvGCCKF",
  "key12": "GA19WHrCdiL3ZGykWy8muPyKRndDJ4Y9hgeiFLWivDkvjBbg9nqDc38vBXRANeVdc7aXXksr9URCJSp2K9a1wof",
  "key13": "3B8HsAYQyJsq5F3Dr89n3gVmwpePzBP845AZeKpGAFax2X7DQePmsPXLpBhpoNNxJrJPJ85s7AHYse9S93bTAaz4",
  "key14": "RwdEARswHFPZvzKXkwDmbM36r2MMcUm9os371tMZdc9TwoYBKZYB7fmjh6z2RLwQSZYU1yGcdwLKJHAd7Ci6ybM",
  "key15": "5EQgD8ZdwSwjnWQX2e9JfQvmCq9GZaRx3KuzcC5QEVjRa4DJCvXY3e9VSdrHF73Vm4KLeEdH5wPDVDwccKa6m3w8",
  "key16": "5oCdCD9j8j4GhLW71H9zwmgqbyVt4ZB2bdwGRjxiBzpGjvj7W9e1vRMZ5mM7uupHArQ9hDjbhxwPCBFqiTk2SXmM",
  "key17": "4WgNJ7JhxPykWPtVGZwm9vJqcddxdyp8fEnz14f1e5n8YgQsGUGUc4qte2Quqy7YTd8WmYZ7qkAMD731511rUPje",
  "key18": "4dX1oZkLVVD4cn9SRW1V5EUaiZ1q1aggXzVBdPVpiKMstskigau1dufB3MdzHXYKWBFAkJCj2Gq28Krtx7FVSXyD",
  "key19": "3hgAGdd1K4PwDc7U3ytEPSCDmLhYx8xBfJe7EksJedDGaatwh7L6KdE5PcUJrZ2cGpDDiNCDGcpkDEka8aWQ9c56",
  "key20": "3jCihstqj8YkAb4vSq8gNxY5BodNtQxwoa21Pz4e85oBKAZo4aVmBvLrXpPp5SCb5bWrziWwcvz83jwAvyE3nFfu",
  "key21": "5uUCpGTTsC1vxGpbhFAkzxkTPqcF6NJcnaXeU6nRUW5YJJLsGLMv5tkUmEAvpwggKMmgZaqUfwS834ZES7Fgi4pb",
  "key22": "3G2rvEJ6yu1b3svnhthzYAwDZuXxyzZCpeuEkGvv9GVvxYCThTCEzPHB5zxfjcaasHYygvAJHNgoEDjdPxvvCQX3",
  "key23": "5kwVQWZux5RnrmBThrJQUkQMNXQFH9GzUqVDMhUkbVRm5A9rzWKyEPtazmAr4GTGnXibM2DhEW7sFFNPfJVQtf9i",
  "key24": "471Bq22AqHW9uWK6m3PeKX66yHPH1rLx4WKZdbP3nLYdMJHXHWnxgghj4fdHnQNjdwM3C5sdDmu26otAZzEYpb4H",
  "key25": "4igtXqP6MEspZM5hAs6VS84JKumDQ6dEWQZ2f15pVmBRtGCrhBdv1CTKPnbEJfEdkiVNa1FN9goQfe6ZbupowfCR",
  "key26": "5CkoxP2fUxb4PrzwopcY1uehuDKBgBj75mkRzPuWEhtZy2kK2JBEM4NHpj5p18dAeGR8CuCdH5A34LornUhf2QaK",
  "key27": "e2kvTtcLWEikbFJgbVJ1GpzHNCRhmQVCJNWv2cXfRyuhcVDzLomeEukrkJtvbTTN7xyfP2DMfHZ1hsKVa7aPtam",
  "key28": "4u2maGFEcNwzREVR9JLhuF7kgwUTXjMQDCfZi6Kt2wChu4bb5NeSowxaSjiiTeyEranUeAQQMdAQdJ9KNbhvw6rV",
  "key29": "3SAmzHHfzwDXygEyWkbScXNTyzCRPuqQFRNCx4syrT51rz7mRW6BxQe4eBboSFSWYUGnAKoXS1pZHhtoQtjs6ZCv",
  "key30": "N3tCieZSB1w6q3G1rvrdtTW5gYZtdDVpsNVFhj9AZQatB8kx53Xs2zpGBmbkWJbSqoqMCb6XvbFm3Y4s52DFhjQ",
  "key31": "5FvDBTCm8GzXcPGmpX22gUKrP3Pu9dibobuL83Jpkc3ofzoD47RWKyEcFfpqJq7i5P5hyyrYXj6UhPRXVepB7nWr",
  "key32": "65dxyUaPGTEsVLQoUjStxP2Z3nHkv88rsSKSP1k5bxp2SbSZDw9Wu38k5EJ3MRpJL7sfgrTFGhpVRmiwbspcyCyo",
  "key33": "3vYC4NCRqpwjqHFJh2RhcMAS1tyPkyoEuCdpbxxGvk9dCFLX85CXTz23Yb3Bug8GLpK4sMoKwY6iWgs1WcUs2nNM",
  "key34": "3r71K9w9RgtbdpDuRjFu9HLkfZo89X4iyHhKhJ9zTczzG6nRPxNj8f1bAZtGNcpZhHdghTFkW8xua4ZWeA83cxfe",
  "key35": "23VLT2TtyFrDipsUdBsCFEqA16tKhCm8MssWFGufLmF4DCPipsWatVXCDDSamTDA5W8xNc8y6W2W7o9czdf56Xjo",
  "key36": "4Butt7Dq9neCW8L1tjdRvSQKrbdkY2qFQcDvtcypg7eMqdmT7Le7uqQQsjTEiQrjb9a38UAkE4UD6SM3EuZL77Hi",
  "key37": "2bfyKSUjoTkrhevnvsSXGcGu6YsvUSQJm9EASx13sGpGchiJf8g3RLUDX5bFJ3prpy68oh8dSxWro1cNetwaeYRk",
  "key38": "32x2MARRfQhZkngQJzY35569ULXkkxUkjFNQyXoQc1wSUx7EWLbfvHZTHWVVsiaaPGJDcxp7hRwF4Ww5fkb4Z6Hx",
  "key39": "4B7GXz5uCD7Z3s4jJ6KXR8TeTi13LJ8FoDxr89FDbBjTyaQgCGvQVCHCjrinZzd9HX2Y7QFaoEKeNEn5jsykW1R2",
  "key40": "3eFuVBU8vp42kncihQZGCYM57ixiNjvmQZRhaLXTUgAfdYbzbQ1t5xgyptqLLgGR196yjdxVkXsCGrCKE5XMM6Hb",
  "key41": "2S2S9WngTvB5QVPSYZp5mrnG9QbsSRtLvwEhJtBrUgHDTTtCVx8owHxnpBrm5ACHXWyGTVi6q4nBHiBmEnfBYRSy"
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
