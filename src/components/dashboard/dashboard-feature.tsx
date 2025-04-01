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
    "4wjeBANiZbKbw3Us7KXHwFhv9qQ578FWNUCVMbh9tTMWEtRYHdkYtVb2UrmzTMtXJ8r6L8UmWYJWYa4shbVJ7FQC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FQCLciPcmuXUkpbxxuWUxFCLww6WzMxYkhGyKRkkLFmTfskSpfZsjymWQmpQAud7der3kpmFjt6HAdtTuGzDhYN",
  "key1": "5iu8X5ZSChjEwSMwTpA2XuKuPAnRambSCZjFbSBF967QcU2nRjCymmF2GNgX31vip3uuwTfWAw4BrLsNUxnqG5Hf",
  "key2": "5gjfRBuAVDfdySwZendyTqAxk6M22kgepb5S5bu36J7pRx6bbmM9eP2YWQVJgTmx9V4vBQgwgoLvV5sPMTymj6di",
  "key3": "4LpVhQFRxRKzCUrT2rmoEfhqXCFkK92LiX2866RkMoWonsUvwvv6G598p26G5aNJCxZh7x4ZJipbrCfqXD1qEMJ8",
  "key4": "56MecbE1V2nuwTDtwFsz4V12BVDZj42NTo9upddHjPoHoyMP5GhqW8nMn7pYM83ioQ2nhU5ACteNv2mKWApEkMn5",
  "key5": "5rsy5uVTFUWmJSPiBcpzpMgSF3zuLzxZvz8HNkHpb4eVMGWHzYXPqmUYQ3mEcsK2eXbTNHVQLn1VJtfpkLWwmjUJ",
  "key6": "5Dajied1mmYLxfP2nfr6ovszEuqXKWG4uyLGjVHom3fiPuDfK2dYBfRZPKRLJxLxFSecZ3TVesf44546JZTqCReG",
  "key7": "58ZQg628GPpGy9MxKUCk16C6NXN8j1248pynJMdfHpf5AvAxFb7rCegmfbKg5bQv3buciSMnGYT41Ye5eC9x44N7",
  "key8": "4TNj4fgNWKdkLuBvDZAXjApTG7kBgJPRDVMAgebqQ1Z6gBXC9341NQZvFB39LfjyZ1iG9QUzEPgbTUebcedHxwSz",
  "key9": "2jNd41etJG3eP39GZr6s6VEyzBR3zGM2TN1zH2giirpuDJDfhGGBwFmXbdmKQWcu6rUd3zjPoi7y467yPcn7G2Zm",
  "key10": "5F7ZJeyiNtDWEnXRhYx1emErQaGAA4R3e1o3rSjLzvxP22CxTUkPc6bFSjKGEBxYXovDKVyQvmftpJzmi295FT5F",
  "key11": "2x3RqmRuB9xAc5XBChG3mZvavxD1yZiiN4hmR62VFTuPaWD4B3eizm5vYE3R41uXVBk2QTF9KdpR4xczbhAZLbtN",
  "key12": "5vDDM2q5xt1oMQYuQcStDthEocNjGVXohde5EhWcUb3Gscrh75tYBQoPsCNTSmXCMBLx6x9cur3E64ZZXkj1RBwT",
  "key13": "2sGu9y5qMeCESFdWzGhrsHWwipVjRqEmeHLX3JZT84mRT5p5WsocUir2fy9ZKxtB8fBHXsYqSoi3JUfWQQAmiJTU",
  "key14": "3rJtDwgTtf1ovt2cBMnhNunypKwxXdEoQnNrCC98cWhzV5DzqxWTc1kdSBB5YTumYc9QQyttFCwef4k5mQm2fs46",
  "key15": "RRoDNRniG62FTJHWAvBHPTFATUL2GMgfXZ4j7D5kaaexBtJ36aFYpApTDUyBZPSy9NCtJraZgmmNtoBtT9FkgaQ",
  "key16": "29ZAkRMw9cfB12xeuHxz3sXCnwSi1rTM4jUQCW8VFjAZnzTacNqpMd2fRVSTUJrDuRo1KTEn6RdyutUaaP7nsR7a",
  "key17": "2tX2F2XUYdNzfS1Kz2smcS14rWGRzhREa5uE7w7q5DP22k9S3DcLsonkBrEx1WBLM1GGj5E5rXqWQSAHkwtusLPn",
  "key18": "3kAbxYL7N4dDAioeVvjK4G6rDnVsJES7HpvZojiEbGY64N87WS4oWAEp5VM39RESqBsJLbLsFhSsbpoqucbHSsqY",
  "key19": "323QVd43sJyGeoRTzeZ3uMjLSKFFgb2WS7FEok3TFmh81a4o16HkAQwfQeCe6PYDQcbJaQfZfC6eGHPvE35LHcMS",
  "key20": "3ZfKkxQr7baAyfJhaRkzgqBacrBS41LjgBNtqfapW1fPZGtfy7N3FSACfDUiSDXYHcnT2TDbY5azCah8ucbN7hbj",
  "key21": "4wvRVC9quepx6jAEWR5TStZB3cyoFfPKVFBQ9ip7itUHPUbcep9JE82aPB1LqL4Z9S732Q3piF9yYc7tQRhyw11T",
  "key22": "666gBRYmpPYAPvrGkGtCTK7AsUY5uT2Fob1ZkBhaKiMryqnRkyM4Wrr8Lbc57w3CXNZjNZHJSrNyiYPdLTNbbZ6e",
  "key23": "659EHMWnj7hWh1tXkYsqpBpPUCYGFs41hYX9Lz8oVQYEpvgv9pxUXU18qgR8Zt7M4tvT162FoUYKRDyqLKSyjAQa",
  "key24": "qDrMzqZ2z5zerJoGuT3Q7Kz5dLib192Rtx6DgnATNowtER9w4x2PwfeYWcqCfgoiQYeWrTQgGgysFEAYWARysRk",
  "key25": "iCNPkMiK1c3Pp3f8WdyJu4MygJ2TPHSysR3oRX7GkDJwBzta5KzjQye2zDdfyT2giMNgCt1cQtTLEEeMxqWyDSP",
  "key26": "65wvafdurSg5soAkBsJgGmX13uBdcwTQF16VTAyq8hizYyB6e6vC9qyEPwY9uLMkgT7YHydXEQ1DzMnaxfqyvzdS",
  "key27": "3cdhEhzRcKX56aoJ9EzhRTe7SMyoKKMvRMPYmNwddcdg692vHan2ekM5mSffZjgRZR8GVKuyDRHNbcAFvT7kLXui",
  "key28": "5j8iSSvRHgtb7CyJtMkC8kWwL353oCGL8ud53u9qjsRkkjEr7bwwDPJetyN2DdMBjDr5DLFmUsYijyfEZzxgTYLk",
  "key29": "2BG4hGW4nNU5RFvRwcD1KHWnQ7b86iSSPt2iex5ec3C3jGiCetBr6NNT6bY74mwpz6TjpiEmRMRQL2MJukKXCVys",
  "key30": "5HzTvGww7RV15jk1v7jbkUosvGVZYRDC9sZNxhiemUvhJ4NyG2pzY174qveTVx9ZGWB11WXuZrC12Ht1tqQ4YBdv",
  "key31": "3ECR3xaMkJ8mRN3tapH73HtkeN5C7W6Yin8vZ5rVBd8EugP14pG8z5mysVUvPMzxNX4XjmFQVxtk33zhYTZt9cn5",
  "key32": "5eE8Fm8Qd7Mrd6MWy6uUhnShFXqwbsq5XXpJBa22KZXss8hPNPww5uB3RVt29WW67RtHRoTKdNia122h5jhX1zeh",
  "key33": "5LDjLQWCGVad5h9ivvQSEkF2dJdCDRdzdneRt441gKqepNJRvQHQVCwu3R7AoUWikcAyamfmQ3SgrAmhs1Wrv1po",
  "key34": "5aJmgnaf2m6fJ72h9MTbEyz5cqMytoHjFPAZ3Ksp85VSGbLjP22wy6fn1wzdEhjbrDcRxPPCv6S8ZD44jaRgcwJ9",
  "key35": "3KrYXnKYsZpB7FRxicgjQRihhs2hkkaWXSV2UMHe9LejB2jPuGsQHrgdFNMVCZyQYhidTanUSZUAt7jwR7eeDPNX",
  "key36": "3YpZi14xTsmq5ofSvfaJFFDT2okNM1z49gWV3VPHVoNwaoqNcwmUM1ZyN69EHKv3aeHMPrT8dbUCHySbY1PWtHoc",
  "key37": "45JA8xaK8ap7xx8UXxjsYEM7dJ76tKmDUUJDbrrXZbJd7LEbYsydKe4fENzLFZeu85XcZY86MwmkXETGgjpnfLUP",
  "key38": "3RJgZYbUSfAh34Lvog5MkAjfqh9m1v7tLDpwHn2jJ5CFrfatwva9f6RogAmYPKxasLrAGkrrUPyAiVJj1EbqJQEL",
  "key39": "46ri7778nJtgMBxUqPo8X5tQRg8L6cn556Jwnr6mRZ6si7gCHMcDsw8Qh2xUdsgNwPkVJCjJoAm3nXmAQc5VqWYd"
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
