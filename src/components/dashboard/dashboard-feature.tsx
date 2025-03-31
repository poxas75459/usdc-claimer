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
    "49hCKi8nvBhqf6Scy5LrpK8VgkmE9Sebr2vAfFYAWhnHiaUY2Mxx7d5gnty8pEndF86B15qE3w6D6mdrecxAz9PH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yAytbQRL2nppKzdG8424qvXgSYrBhDjaafTVg29ErkYpMCvuF1m34wYtGHuhnmZqfhvBjFPa2BQM8JXT9FmihV4",
  "key1": "52MwMBHcmvLRiwTxEqWb6d3UDPeCUXF1etvBFx2Z3jSKDyTZ7fuZLpngzWTMvogYxBqA9kbdC4fzCN9iw64v3yrM",
  "key2": "2UVDDpEU2U3T3BFiJTSxts7cwSjUkRwVtvBf6q2M2SufLiPReaKHoQoXZ51j1338CLLWvygwSxRC13f5aMLcuV1S",
  "key3": "3gJfpWEe2MhG9ZisLExFfMqXLBg8bAGUAvKdwaz1VzHTFwvC5eQ5Ftzbx75HEkL7DMTSTEsSqeRMJUMCGxL5VRyg",
  "key4": "2RBor4T7zUVU8oXwgEwrjcZasFAk7kNHVNDUFYjvVDg6LTS2H7ehfXPX9EbBunS6myndiyS9d4ks6kKFc8MyHUEh",
  "key5": "5Nr9CR1DFs6CXTyi9Du8Tn62EUYiNF84UUjCBS9LwnGmfkLisPBp4Mb4kcSg1ZX2kcv7VbUi1S3hTJd72hYs3ALh",
  "key6": "5YPz97DtYLo26nnd2vHTkQ7B43UJv544hgDDeVvpfSvagzUGs9oiG1KzAV2t2dgDXsi2RqTxAq5LVMjRCUCVsvYF",
  "key7": "4VyBLXd2Sz2MpNApuptzYmasvUwUvx78CiD2T8aPToLhyPPy5hzRXw3r3sS3jps3YBAeUL9LhzRztDSAk9wGPkhm",
  "key8": "46oXrX95Si1sGBYF3xhTkJZUvsCyyGkxNrKJCdmyFU7NJqgPzigLx4BRQDu2JpRJaCXbGZMz5313baSHwtBmuEwa",
  "key9": "5sB3DF1CsHPw5H19UmjvU5iRmnTg4JDXcciiFE3nDk42KLhyD8CmF2gGkb64e4YDnfbLiroNtbfp1sL7dKnm7ncV",
  "key10": "2qkXSv2f5Wy6kFfxQ5zB3pcwN9dJTEbea9o6zh4nxnpnRRXqg4e9ebyqEVBieSwJFRRnstDrbGeDkwtBey9vBAdQ",
  "key11": "3X1rF1Un4cWpUHrfcKj3afr5QDDN81am56p3kWimPQbQhVBJSobVzrcWe4DDESc678242bzgiAQdNw8kso3XMvKB",
  "key12": "4YGCRxu6MCXfkBe6M1yxUrFCrdjCRvVM2iAjAssN18NYZrudah2aQngPqxUdtahQMNkACrPTn2aD57kNdGCVtsZG",
  "key13": "2vdhMLU77UkeGA776ieSdeyzFzknCTknzndRM621kuFwWq7UwT9F4CXhYHm8oZcgsAGAsZNMz4dWbL8uHgFgPCJk",
  "key14": "3EnhpjS3c5F3syBNYyDHEj9dqvjans5B5A7FBewpfoYzh7qfDUuiWUPkvgmfiLvttkPjkxRCL1gHhZpR6SfhKLUv",
  "key15": "33pz9G5eSMvPdhE3W36y1hbjX28QjA2kbbSRsokxayBLaaakjwGsaKL9ze641WFFh6jaYkP73fXhrfoKLeKF6C1p",
  "key16": "48FMhQpxYJPVF4AVbQVJEs3jLdF3Yp5WFH5ZCkpnXniAu16J9bTGcZD4yN3Zn41cbTNeBWdkWKV2xkQJ3xjJymda",
  "key17": "HrBuHsHh7c8H6ASMHTwphpdoF9zvZRNS9Nk64dQFpjSEajynNEgyLZbLjqfbtA2zVL9psshr7HwZLryd6G6Z8X8",
  "key18": "4Q5NnFfXBD45PRKLDcfCHLGsNSX32Gi1BHoSm1f1apk3UHH59sS21dHAsjMAhH7gb6URsgxqDnN9bcPNLmrkovkT",
  "key19": "3ofWKhF4yvDdSR7WYcUfzJSNChQj3CDSSo19ci9BN7pCVPUQowkDrxHbrZeXPzb8LUheVQoFk4hsypzwQi6MbWeg",
  "key20": "3hnZB9CQKKYtsmkGqhoF6tiqwFFzV7JDYGZ3m4xPFn3is6MvW3jjHy99UzrEQTB7hVdmE1yfVCDspNCmSboSks9V",
  "key21": "4iCYTrMsdtecanGpF3BgE3UcH2XtGb3pCtLyf1Ytj2y7x2VbKL1hfmnsPVgku22rmEEEXgEsSpdkd555L98WFrwP",
  "key22": "dBYMLLjQEQW4CPLUivD1A1eyaDuE529boGJBC1Sqgr9Fraq4TCH3kopc6fGYtgm9DJBGGhaGtQfbsAozzNLhtTN",
  "key23": "2q5YMxZP4hsHpTAi9PoMfXiLb3GEZaAsDfd3bmcGYqKDjsscz5LEQN4WcVnvGQpkqNgSqrk2bBEv9sm8sKvVLLCJ",
  "key24": "22uPTjjVqSUWfJ2pPogSQU7wP5K6iHUg21MdcS1T5ATDUkpzdHYZF7sJaX6azARxAJgpbPJG53FmoNQavRLBvAEt",
  "key25": "3A7m3oTi8cSfTpg8FbgR8ZavHF3EKufwwqKT96Nx1DfFzyZzpwGavAc6hnR6ZQLHtRRffTn8p6xQuUMpqDRdFdQC",
  "key26": "2xWcmPd3E7ihKbD631dCiB8invQsGiAKArF6TFPh4DWuQMrcZ5CXaW5J5Zuh72RfznGyXe5t9QuBxy8btjx2ZsQL",
  "key27": "3pGTFH8su8uoV8wrqXZq7ZGZpPGLnY6E3cuK3WCSB2fTYa3auyobCUxVNUiyN6xkWhcaMQN5Z73emx6h72NnfrCi",
  "key28": "4JZdktiJWn7WJbbCG3zRRfS1xwTqNHvNhKEwE8cobJrUB3EYwtj1FXw9VrkMzgyA5ZW9oEHovPWrnJwCoWyvMhNe",
  "key29": "5qBCbEPQzEZdqJUfbJRubxYebshEQn5aawDYGsFxbHzqNpp8caDUaSj3QdTkzQs3GqGaFZmE998ckK7GWdNe7AWb",
  "key30": "4vYqRNSTMea2zBUgYvEFJP6nXzcBR5YYJLS853moZFdk7Pxm7WqLuHfSXPHWSRcaZs6W376vW455GQHeotcHF1BQ",
  "key31": "3TKAARfnzkG5SiWyHSkkgPXzF7aVe7qjdt5QRCjReNuSKsSTLoeY69k2tZoLGDmmFAVUm9m4LKjJHjudirVyQvUi",
  "key32": "5DSh91kLA3AYC3jQFjknCUKMo4y72k8KiqAmG2MhFgSD8kVoaSjcYNj5SLqwkgk8wF1NFBd4CYugzRaCf9Y9P58",
  "key33": "42grAasEauUUssmPHGxRpUQSM8LvmbtNeAcrqBZLDLuFmVMbGby4QYtMFijZ2k2t59mS6iQ47pBfKL4hmrxXWx5n",
  "key34": "5a6N5MsQ1NwZRbMmkFtjuWoLBcjffFMknMUZpYjhqm5mGDyrrcasZojyNmBHQcdsPYjgxECQvyKoHYQHs7iuq6Yg",
  "key35": "3uKu1oFvHEZmV6GNiTw8WvTG667g74MoqXnWLYWpFovaNbXnvncbYf6zoHuYCzPaHd2UV5edXMNrmyShzDUaET55",
  "key36": "pDEpg8cYtyQjwktAv6iTkwdHUTXvdnyt1EPtCT9EPVw54jcP471W9JTMysmBftNcEQ2bpjXbND5fezDoZGx2ZDd",
  "key37": "21HufL9raitYtAYhRdaAoohzvXq4CnPDRBky9tydZPrWYbRkKJjRC1oHNRkYB491yKXEnX6kn8DdH1VUJwW4ABu1",
  "key38": "4P69oBY2HGerrCUyaqS2xJCjtPH47pFx9eucXpMHoYxGT2HpvocxxwBiksFcv4Hvnt4ydqsEU73LxGQBecEM9XLq",
  "key39": "4CoixhoB2c5na66VNaM71EsjvYVLRC5PE3h9dTFu2YLC5wWPW9gjru533oewZayzSz2B9qxeWdGKyxK7rV8f6U83",
  "key40": "4BBpw39KjX2hhmkSuQqA5pJCgjMu1nTkirV1stRfaNC6TApPGbGK1JbRpK1kGekXEJdidKT8J78GHWEQzVZ3RRBU"
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
