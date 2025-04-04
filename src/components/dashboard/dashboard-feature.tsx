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
    "4L5QjGsaDKcdtiPHuK4uCD7ZXeoaaPgnZwNRWZc3dK7PhRuqwsfnwmZ8oN4GBr49NNRTu46zogCiunX1gTHtkDtQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MWtw3pz4nvMtsZVM1aXp6HKXpqq3ctqAPeSaadXt3N6VWwNAHmSZTKfkddBQnJotabqoVEih5HFPnyq18eVF5mp",
  "key1": "Mv8fB1d8rVooGKxryWet82BtCdfJEH4jJSvx7dhcyUBNvmL827oAN2McwbbLpsXHuakGrysKBwrEa3SiZH1aedB",
  "key2": "5nJWn6DhkVAahU2c1BMBi37V5aDojAr8u9k8G7x1fuWajqVNChStX4Rs4PuCxzF6onmfixmGv5FeAdJNhHf9o8DN",
  "key3": "2LtmBVqSUXg86J1D8516obigoY1fFkmhimxNYSEZqACZ8B4joCpBfGTbRv3SHmD3pVxRoq6cn8J9MipvV8c5FHzD",
  "key4": "DEWhR6caSiADoEYgMVigNTC3Pn7Eq8QYp7JtQSwdcn3GRPDdxqxBWvGBxoZ8mgLGN1WGTtRTSHAAbzCzcFRMQLf",
  "key5": "4U34pszDzvRiced7AfhwoeVvH9KBthA7CF3nnmFiBNCj6oByrx4xXcnmf5KZKF8YwhFWDsQenL5CuDAK297GYg1g",
  "key6": "ihXoZCgHFUTmm7YvapGuR4vCCT4g82H6KK2CNCPSzzXQvF65XAf9rL6dAXkr88Z4Ks2JUJMDAcaUbzYQm1pU8Sk",
  "key7": "Dhsc9fQsADXYsPRfbDsfeNGvYBA8uSy9meSUzPe4cJPrCjBrjPjiSXcmjxGsKuPaCWZ5XaNXxfRHVMdWDnfipes",
  "key8": "4nSvLS7gTbn8VPQWjg7crqPVus3tpMzJ72TcJd4RgbKzzhbaTQUNxWiBTmjqf4XzYVmuDLN3bQQdr1iu4dfSfimU",
  "key9": "5inPsXCRwAyAW4hT12xSpB9p1VCuaNeoXVBMGqGCWkYUaJNy7d4hjFh62YdnbMvQZRAmyjbfAH2Eq3gsaNrRH4Tg",
  "key10": "U2HvNDeWvfXoGEsnZY9grdFtMRmJ4f6X9HLZNDcMfdKkbcu1CQVbxYS6RKWHeNKGtJiGaXgEu5KXTxpmDzr6TwK",
  "key11": "2Zi61DnbgdaPA392DVVkc5VGoyPjuAEd1ZwPHZsS1brZYiDuhjipYP6QRv4MxkwpE2ztYSa9U3cmupJjukDnPtLX",
  "key12": "3FMVpcETesGCtbKpW2BvCL9n5enDBPCVuoUttatKFVLRfFPQmZ7taZhcqFdCrj7UJgqnjxB6T5B7Ep9U7TDDeUUD",
  "key13": "4pdhUqDsAGhVpyB3FeTGBU41xgeZrq13Yt76ugDTPrgNg2Kn8y6E4125DWXzD6QLMKAWjywfzJ7HkeLAbmwR82F6",
  "key14": "4VPHHPtxC4paYMfkq8aiaAmoy1sjuL6mxvgGDq72FGnaEDZs1jASJjHY7dCsKm2GBfBboUwRdvn23gtXpyRTrUoV",
  "key15": "31KHHMwhVJLQ1rhFseJ9LACkkczSmkp87oSQdc6eqxzRc128LFzRhSGRh3xFEpYiZAaNnRf5h2yEqMB8eQPmVzUY",
  "key16": "4PhfTsixidYCoV36SEAQntJL7jTnopfk4MweKBJQUdzSDHLKhDUbfomsRKt6xxYiL6RwGmxqpgi8Cfj9EuVMTvr6",
  "key17": "65Bo1sXVMHAW1xvmgBPDtW6G5Z4ok5Z3J2g5d5Ks1HgevVmyo5ZNiAu2BxvZPFuos42Lq6L1WeSv42nLVFc4tbgr",
  "key18": "3GncQeXDivqrtvQ5oHVXm291XqqEvyaSzSfCsNBecx3TzR64gbLSx8d6C79czFGAPRrFyFPCC8FdREcwUubKkfTi",
  "key19": "3sbnPtRTNYLJe9WCeoypXw9ZykU2LC1MyT8Wd6LunJJ3NYaR6WefXXEK7xhCoL2H3MV2vUcWDmzwZjtztsRwsRS",
  "key20": "d4yxXzwdL8LeaMbDQH2vXpi7V5GmkkToFNmdiEVfp2DPTJ1EmVraBY3JaKpJHk21p8Yc7KB7HmB3Ra3oRLFqr2b",
  "key21": "2THLMiKDvhM4SY4pCxkD355keMBoyrTpbp438vhwaDcDKFaQC327QScq2MN9MqjoEmbgz8ftHm7NWs8RtpabF3c3",
  "key22": "2UDUEmezyfw6RmmKvbCFoLpHbsWKAnUKYvfXTUmt5EJYCVrjZkYSqDRuJzpv9oxPsBZVWceWTKSAD7GWgEMvQyXV",
  "key23": "4UmRgBZmoZhRigeGn4F8Pm6M9PfCiXAZHPtpCUoEZAzSZNV2bAVKDtpFP9Ynx2fGMzVnvJteogD4jWuyR2fvU4VL",
  "key24": "5HjmGvrRfy6Ft7333xoJLNbbqGVEABiezwSh88qQBqsNdfRKGPZ8WdtAtdV5DF2rNEpKZpeywW2ceT2nsDnaW67T",
  "key25": "5Ys8MtctQA8HWFcGdR6TV878Bfp8eJ4UmATMLzurnF1kT6yGf1NzXfQfux2A45AM3rmY4pSUCCrciyABHgDzqhMn",
  "key26": "3wS2ubJdVu8SB5xuZ87H972cnw8CPsjFppExXzanSK9exqMFHug76d5MqQnaRVpQ4JEPxyzXcNiWoPCd3ps3ZSfN",
  "key27": "Sv1WkMymqQXVzfAJvsMvprt47NYQD4MXwXbKRbhuP5Ag8Gz2EWnnEtmiaReKqv53Rd27Ev5yHJTpTuy8VERU8mQ",
  "key28": "583LF31NvfVhKuKZPtxHFW2webYBqKZqqNdr81MqbEvY7g5jfUBdYQJAwAi1n7VvWFFzrC8umtALcXZ6tfQz56YM",
  "key29": "4LhookHzXdS7T9btoeqBiKpG323KM3keBFbeppkPb3mE8Eo1yscUjLgNpgiaWEXivKXdvqZAkhfYxZmqbEvKgrK4",
  "key30": "3jmtzA1MfuWtnT7MS8zgkv2xhr3PvairXT8wCgFJGgCuJMaypiejuZq5Mieo1PN2QCn8mpiWHhigtq9DTn8LUUWF",
  "key31": "4B5dub8nvWJq3HsKaqJLP2e6AowUyCZFZTqV4QpcAVHrM4mWxhZktG37MktTgncQ5f9rwk5vNn3oHKEYgvgEvLJQ",
  "key32": "gcVjupQEfbAUUBnYHqiiwEkw4cFEWZJWHSrfr4iuZv2m92GXxkr7ueUYf7zo3U56KBgL6x1Nk4WAutZf3xFj4yS",
  "key33": "2sTphunPzZGoLZnDza2HxaWHhp79GAuW4srBa14uFcTeSaToUk5xyzokYkahAWsbtd9S4k7SV4fP9fkMAidfjeUW",
  "key34": "4MxhWJDjL6PJ3xTmLRzb6AfucQAnKGwBhNjzXLbsFEFou7MKghuxooD4NHxJDp5iGQeevLuAAnshR4mHfAonjskg",
  "key35": "5CbZdfnbN5eG3rUkwY5TaCddqAg8cpbVAkk1CDsBGBAqvRigZEYYaMduKpFAxHsMPCSZ2GsC8VxPfGbHB83AyzxC",
  "key36": "3FW6rwyd139SiuQXhfJHumDCGMHAEagyJKzvTSJ3UYsF69Qr2WkKtGkeHpDGPUqnTd7afM8VpQE3DR4wha5MLXu",
  "key37": "MMY6ZdxxqMmuyuXdaDc72bn18bthxydRiwrQRkbDFgVSsLdupG98sjsNWVEGUJSJ4Ejdri3RFmNCQ41Ts6pkYHc",
  "key38": "5bbCPzLGt32zWPeGeRr9y5DhztJkvxjS2dtH49FwMFnujUF4daWyQwBeyd1inCbTLCECtPWc6DDWFm8DsCtMSoq4",
  "key39": "4GzaMyYo2CJdTsqq6SY3gbkSpZKbksZRUusrijwKVv6jYHAwTzmNBqb3gPSVZ8yBfTs6VkCHU7szZ8wieB3XaoXq",
  "key40": "2CvMU9U4dssZRZmyJDRahhmKqzLk1FvkLNm4CYVD9bCrtbs6Z5aBHjsUi1EF3pMHBawgFYoYpHsgVkPebRegZhNo",
  "key41": "65aF4fx9cgwGL867uxnvPFFCvMeAe2vWikj2skHR6ihqjrtNj1urSUtWxZij7Xjxuw5gaXcA9hh6Eg3g9qz7MZWW"
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
