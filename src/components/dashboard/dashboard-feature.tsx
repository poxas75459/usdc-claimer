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
    "2hQhMrPpFC3iskRAoB5xwRSHK7nvfe5Tde6q3feqsWAbPQT4NfH946Pe1uVr4oGnQeUTR27ijaAL5y7Ekd7W499g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ovPXPMHtczAuZjn2CvP1hWd5jB7HXuJvck5sryYzx5r9EfbSJ6nFdrB5eZukbC3RVKmGdSA6GSfiuAQJuvwKpsq",
  "key1": "SiVahGj2QjyhJFF9VahoRorNXav94PxV9kAsCCgTCvDPSGaTXUo7zcYvCyaDJxMsUidawYvDx5sAYicc13yfyoK",
  "key2": "5qWq1BpqXWyfYXDxX3QxP3ubqHNUbEcqY6XXij4vKkYTQ9yJaKjph8ZqEGD5X13M5grynua6mPFWAJ3ECgeCvmdX",
  "key3": "4M8gWBQ9pwHk6knksr66WCdBTN4PrdwUA5xthZsq9jjxY2AsmqyGTKcg2cbsogED9PnTDF4e1FvjSBdzYvBcHdvx",
  "key4": "5PDCfq2NYXPsvdFtLw8rZKagzBMrR7JT9jEmYzpTZaMHixjicpx18FTWYpF9qTASXBVatLxeefdgdz5NLqFTQQHq",
  "key5": "36yD8j26ettfNnSA2oqHkM7kH8Pzj33S3kxaP1u2oQaGQ54LDoArmg3Fj1mGeZNmzYyJgiuBDabwfV4EZjuBHeQq",
  "key6": "2XsiNGWazxb1VvvhYRA4uCC81bSq5QdyuUFg5YGe622b9WrVBM1WJyPFSS2x5Gpka7mXkMuDbPvPCQfMU4mtnYmm",
  "key7": "4p1ZUWhA1KLxzo6qnvXaBctczJPXzYdg9UBjchDPzhDX22ikKSBsUc7Vtmtq98Km36soUGd3tULTvwC6XxRU1NS7",
  "key8": "p7GwtWw9W9W4jaGKYWKeba4vyJYGvob5Yf1cXQGvQ5MVXEm5KU3FgUCknQrDW4zz4devwRFASir6mJQFLazrwih",
  "key9": "4qTrUXuFtXwJnaABDXvKTFtn4pUYiFYRHWbCaiZ4KjJoCXaFQgDQrwYShBhswhM5RtEakumzGaLbNnpGKW5RfGvi",
  "key10": "5Q5en14gs3hPUYwYodpZc7ho8osQgdT76epZSvTzXz7jz3V73XJNxHq5TxUtgpmLp1pHvVfJJeS3d44GXVVBBFYq",
  "key11": "3ZbrE55ScirB7bfHqGZUEC9dZqQopJ4hb22WeV6EdVQ4MfpzqWQ3v4SufJw87Q8gnkTbJTK8wtmp2efbCYpocWLW",
  "key12": "3v2oviNq7FY3aKJ3DKaPHrWRjQya2J6hypP7EtRHHyX1pUEGEnTVMbVYDhKmmdtmLjoSSZC5P4Wk4ANnJpV27Y8v",
  "key13": "3Ky7eqR1xwErpuBzdk1jVuDA1sZUAo35k48SxTWCQ5zMEs2kFGeNshUc5QXniw5wS4Kptq7oZKJbkN1Ksi9VEUa8",
  "key14": "5LGiGVTySfQky4VioFQv6AftSeFfaK9wW6L5xc6dMKgzEW8HeB3STihKgsDKyE5ZumThkoQNUfJoSYq5CTsGWdCs",
  "key15": "5gnz4AMCfuoYFMUQG2yxKr7NhEm2quZbehrZyvfszDS4KZzein5mJXvQrYH76HW24GijqfNdiy2PGxQqXSvGKyzZ",
  "key16": "8oU5GdLm2HeXnCSoobcszZyAzuQMduamKauDtTyydnTM131vknVLWMypFq22wvUgADqs3Bn54YgVhcxbAX8tz2G",
  "key17": "5FpMFU78QEtAgjbs8KzpPfaqissqB4d8wm9t6QmfyUPHGtq1E3Qe55vdHbvpzAiQK6Lhz4WpaT381oxuH6AytFU9",
  "key18": "4Ndvg2WxkGfwxaMbHzY1cFiqkKsxdm8vtQeDHvcxuRCf1qfU7KGtJ56D6nAcYpTGS7SebZwbYwSL6dvZrSNaJ3Ey",
  "key19": "3n88DSZTk3mTXHKJ7e4HgNs7M3PQTRxitn4y3jamino2oQK4coEwRi5fY89iaAgrEBqCw6mNYgmGdp8SmF1ubc4Q",
  "key20": "3QAztkCrasKfMwUkjzxNiexb5dcLyT8qCC1QvTk1c9cqcRTmzbis6MdYRPZVEDTwGAV5gNf3b8hakoT2iaPKzfFd",
  "key21": "2hUhHx2SnheC1i4ofXqCBKNadwZh3VC3Rf3HErWamxpAygiTfeWJL5ZjJ9VoX5rWjVe6NEGUeLBEfUWdhu8iVEau",
  "key22": "3kivEw9kcaXUw3DWWeCMyW8o9BHpZk8sjgejVxSVBS6XdM3jmmG7USTqKH9VX6ACWU41aefeaup6cwF8J6hESwtG",
  "key23": "5vgqFzps94MfU7gpM8H2MH56rdxY7C93qsYEEaReQAiwqqM9GMtuKQJDV7SXg1XyJk2MK7DMcpqnda1WVb5ZwFi2",
  "key24": "2nhhKs1PCqQRxv3MYg43uBAPiSNoCb2WDvKrFvzkzoRaMThKmhJXsWirkPG2xybvxNm4qwLGY7MiefhyTJybFmz6",
  "key25": "3VtTrYFJAcD73cLvpJP4ux5u8ArFZDvbeREuA8HPGMfNnSS6jjjqkLep8L2QnxjrvuDeMNEZH8JJCzASABdVhmpo",
  "key26": "k9p222qogGZ6hBtX3NG747j4XtjrjmBUsJwKUDmmyrcZjw1n8WoGytghzZkB7yJSopm5X6zGgxEqCPHokPGAWEz",
  "key27": "2to18xX5ddqHKiNRaiXYi25zqqGBevh4hsJ4E3W6BrArVD7HuG64ZAj9kyv2uEHfLpd8HBuaKYghwUdgWEp1Ldb9",
  "key28": "2S7Fv5sHFWNavuray8UVPFnrrnLxbL83VZFMLpkaGCN3rh2DNs2vPGg1E2enRuxWWm1gMWwtFPm4xevZfZpbbzaG",
  "key29": "4dSDZPccBhN4UCEdH615UiZSHrcFGiWBer51PMxvyEtSNJA51Ei5GhhrM2Qy4XWrc8DwC4Ld3Z7oygVdhsGXdo4d",
  "key30": "5Dt4t4dE6P4z1iNiRUx243FNHevNaznuVpnHzSLqKuJS8F56FssDYTVV1buFZECp1SKrd7E3KeqquJmBRBJsEEAj",
  "key31": "3RT9wJ49yKrkVzuqayrkNBho5gKsPab6qjwkzriUVhKrDUMJafhXXobHdhyDgKuWug1m1CaJu2CQZ6fH7BErYNjp",
  "key32": "2VkCaFAdCR9ZxyfNH1RD7afsj738mzosRKRbGuZ3BstEvXHotFNRTho1nppynmtCj2MSacqHBGkVWqQ4ndjboSdt",
  "key33": "2Jeybi7NdH25ZY2Bo3eC5FQZZRvQitouQRwHzPkyBXMez9H5mQ27vruexhdFKG6Zxfm1WRcxCGbcnTD4DpACSwmo",
  "key34": "61Dgorxy5fsdeubEgA3vNSESk4Su97CXXx9uFB9JH5rfRahaVEVnoUGmn7wPNLnjVnexKmVwxcg2zLVZgdirsj8J",
  "key35": "EDhrckiBUnnBvsaQLeq8vj6W5p4miWTbpwDsDPsRx5mN7jbwQNL1NMC4zzwBTNKsDLVhwZRZRUG9SK5VniNuUTK",
  "key36": "4WY4BQ7U3zQfq9MCgJ1vbJBaz32h7mnkW1cXNiViREYFLWCwMEK8sdRKt81xUftgchmVEV9fQ8LA94ycdjW152if",
  "key37": "LJZHAzT7F4BoczLv8B7Bw3tCKA3tYyNoKZ98qL3nhkWyZjSTqs66UZsXt8tGrBjDb8HhYTrorG2Kr3QZTzL6GDX",
  "key38": "4eBXYXS9mq3WYZq7RgVZJ3c6dQTRPTA29tSranasiQUtw2HkGWmUq4CSLxwwFdJ62QxFx66XRbGYEbohQofmaAWL"
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
