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
    "2i6nJ24PFbTfi7F7vC1cD3V8iocZEiV9kBTPhy6GJRNRSrKKJuTsVNEboc2vJcfZ8UtvTM4WnMk4HHaoL3kMNiig"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GnBp6HPKxA7t6GoDdAhToNdH7ydbwk5PvPTTzVbePaDvq8URf7MosTwx6jDS6Mfm7AfZPqqocDu9hCY2HXZxnWz",
  "key1": "3j8PqvptG2Lx4gJ4khnhKwZLWH26tLZosgacHeBqxhQmHTs7oywqsLW6hbkqjJsPoK3nqvsnYrNxEAuCV41Fu44Q",
  "key2": "5vinbmHocc2cxCaB2hAyZ6zX5z5onsp8KH2Gob9GL1E71AnJy8fawaVHVMZqm2fq592fiJaqygD9TydRLszUJKmy",
  "key3": "5MXFZvkuGbGF4uyhEGwoWCGmxfK3wjebDbG9uqjLtPCPcFjdxD1WFrgUAkjREbAd2V5CnnQtqkdSv7i5YDtZ8fo4",
  "key4": "5QUo4S5YqzNd1xa8wgwNMXdEjUA1Qp5UDnb5hp2HfkGbHrY75zpWzHKnT1AhXTckv4LotmzGJ1eXHB29iXMZ4TaA",
  "key5": "4fZbwkrp8sKUhoEWNaHdnuq1sQ5A2VJCqARTqyPftN7C9uGWGxDYLkwi8Bcz5PWiJwL8zGRFM2aQA9AtDtV9k6FS",
  "key6": "du6acsegAkVoTHEuzqjwhjCPFrKGN4qHRAEDeZ6gyHw8pHyHj1xx4oWGaGfR6A2pMeep5aQus1jBeMutg97x8xX",
  "key7": "3BfXd5RAEE6F41D7wPVbYB4gPn7gMh5SK1gbLT3bfPHVtKShXduRukLGeLNEJu8GYLMUFmUT4v1nhSQz7Uref1ou",
  "key8": "3MHZEBdagkxtB1sRe6mPgFaSUUKCZGT5p7ae2kRHoDFEHKjHEdmG9UmHB9s6ckoYXPFmjWzvBoEHe4VDdhVDd79j",
  "key9": "3kCDs5i2JR6HioN1TByvJRN8iNmzYTifMoSokzCjqJ4vL2oMWTjH15sUGNgwi8DH6XZJdE9fwRAjSdBRLi8RTCXe",
  "key10": "669YonSM91Cc12J2XLYpJJT1KmSTQVBthaoGet3MLRn9kro6AZGzB8QCGJ2q2FNujQjpxpTnQN8XHgs9wm6QcSmQ",
  "key11": "4trh5cB3h2jrrL7wRSfj9uEsxdZYGaZ4tTZgQutKPhiCPWBYT8z2CRcA31Au5o5Yej3Eay5FtuCerjoCQBv4WThn",
  "key12": "5hoZeV5Jno4GqEHAPRNyPpdqWExZhvXKgMKDhGRGoPrNfP4GAcL5nMVSHe3G5tUBr13YJSPifwJfdCzdne1tynJK",
  "key13": "65z6bU8ZwNb4nJJjcaeioeCBEeUo796sPDjnLduYWJxJf9kwHLQJCvWcdaktwPoACcqLEqTmvYwtq5hVD4UtVoQ",
  "key14": "4Tvu8T2KDEVPPeUcS57FncQSRoirHYhWzHNBxwcUduZBN2B8rsxA2iSKwcej1YarPYuEQUqhUaQKDg8ENjFh419V",
  "key15": "XayLaq9EvF8KL57xZt9ZKMUCETVMDRPHoR8TV4wBwmXTYQ4JoWByTPPYyvfCHXjfQHaDh2U6HFCUEj2BtZfBpJE",
  "key16": "3Xdwb64aVvE3yDf4G1PmWQGUi33bFAsU5adWtYuHqD9Bx54VgAYcfPeqGqLMhHbUpM5ojG3utuSgvRbdXDC8hKAq",
  "key17": "2ha6cbrwNYFDm2uCD52NPCUVCN5m66AE4PXwH4XAC5CcBy7maXRmMZQVpwuLFXf2jj2PS32FQEbfihkgd4kRu9q2",
  "key18": "H9xNqEDEwQX7ukx1LdZDa64R5RdnHVCFirW6adPSyrbFa7DuoupmBUQ9gZQwY35v6UaqiobqoNcBXDgsffkGWzZ",
  "key19": "2sjeuNu1SPwhcMv7Q2jisSALSW8MKvi5aN3CHxVzFn6kDLTDsgG3Umf45KLMbLPq8xBqSerrqwb2Qh4KTNq2S53R",
  "key20": "aSFunUE6coWhq7igdYWkB8cEjKjsDxWG9imYRfhhvwC8a2qcswnbMSLV9dFRrhL8Ns3kSMJxSAfg5zEZgqHvveg",
  "key21": "4YxbnE7518hzsnXqNtwotZAaxDzc1KTYXSbYsqkn1iY8UjPvVMX3guppEcpoV1Tc3FPjUio8w9RK8j5kPVewMQF6",
  "key22": "38pynYFvVHWwskYs5vXJDoedEcMTWFhiyjAUGSmnaVcQQjqdj9zoPGTXmiwYetNkK7LBaqkHLpwN7L6AyTaJhkGc",
  "key23": "47NTZ9FY4GiGDU3rLAhRyYspnmAUSUTNush4mHEkaHBvjMfEhS4KE1a9zuXfnvQGpNXHxTrXc8KFWo3j2gGywWrn",
  "key24": "4k3BcEYpAd7KBYuJ4eFHN9viLyVtftEHqh5upHfAmuQoWPPk7nu2cTjnYe7PrFFhesygbqSsP8FJB8tx8vrsXC5M",
  "key25": "2dbzJj7CPbnoeCG9wSRPuYNCEUwQKSeoV35GX2Woy9re8XZVQocNJfZDgzWHFqdvTeY91XwmrJReY8jXiERpuvBE",
  "key26": "2MysBTv4e4HSB88N8gR2jKPccmyXtdYCM9tsZC1tfqHfGBo4W1yTd3mho4hxcGsMpwNUBMzBUmzTg3LsxSKXn2te",
  "key27": "2J9rzpeaqnfxJs2hXaLmBRQZg9aDWmxjr23Qu3sfvNsRAZbzMSvXh6jE4i22TKvbpHHpde2nhyPL5ju5gCzNFXJr",
  "key28": "4KDKias5DZ57furz9C9Cb9DMUN1rXRy2Bcc9PcamPqyYQsdzqiSj65ryumyfJVkexuMxaJJs8BpbGBXdbgvrENT5",
  "key29": "2Ejsk9SYvxjJBGYmszm6UsX1Vj8nmaEr9nGvkEwr3mSRCs2tRNdMtaZmMFHNkFTKTQuJqf73oB9eJ3A3p9HHAmiH",
  "key30": "5JzHn6qp2QMLZYxFibAYtYFXBDnXPMvPFKRsngprXftekn1KZckC9bwWMJcHz9B2S5XKiuM7p3YsA4WmDYmsStPu",
  "key31": "G1CQJ7EgYYpPEsUPZVrpu9cq2KpUHzBKTwsfSWUVtMsAqvFn1wkNzjMfWxa4s49S3QrrMnSqDr2CXVLjDBRhceJ",
  "key32": "4RT93ydt4onc4GsFDrd3DWJfHeJYXQmNMNkgSgkUuLweQdYXF1j8z2gbRDwt9ipVZw3prVxMmNwSwYxaWYpdja7q",
  "key33": "5yrHRkeEutXWwMMWkRmjAkhSSoSEAV6VqN9pik4xv3cH7orWQeZceeGfohYDd8qLJk5YxDTEGZtQRQvpBPKpTo2s",
  "key34": "yanhiN1wBoyNKMenbAHwRvzqKW99CPwwguoWRj9PEbeQfbFV8s4Ep18M5AC8WzpLyr5ornfDrPTuiYxShyByahe",
  "key35": "4JHepHGUdmKr1RtgamkFzZntMPgDfPAG4GQcVaJg6jCJRDnrmAMSvFusBifpcWAo8jCQXAza51Bo98exuVXjUXLz",
  "key36": "5GPs7hSrog8D2qxboJJeFjcWQgoReY5dqtPmVAQNM8xFHFk5fEgddLZkLqehdQLb2hUJsoAACFatmawZvunzbDwX",
  "key37": "5J7JBSzcEJvKm5Si1stwDsE9Fsyy7DrnUVc7g53o521htWK9DEZRgmrJzpk8UAJkvmL7zKxqGNjm7uoN6D5zHLix",
  "key38": "2b873k1sd7JNjwgULRj1HSSQSBBfb8gVetGt3jNDqXZzw42khG5oVaTGME61JZhcinFb1ftnbVVisPunBjkUJ2hz",
  "key39": "2tiLUpSWnWg8WYJXuXPztwdUjoAZuuWSWu7J19kgcxgwqT271SjRqgYrqemg5kPuhv5MA4xdnQUTbmWeLa21auv6",
  "key40": "3VXwZMp1GGLM8xqcJ9gVMabrag4AwKpdYxrGuzGHsEdPUsQZcqpNKnHBpLpZ3BZSeyUxquEDaPQEh5Xvv6iZqU8w",
  "key41": "o2DEEk5trYz1XipBoyVPo2fMfvmqdseYmTKrxvHCqzCjzA4m3PrASa7MueiNjpYgnXjg49T431rZNQ2JFQgkwVa",
  "key42": "2AbRy49mY3DRz6Zc1UMxhnHEzPkSgi6YwMRHc6prnRoxMGmHeZHJsH8z85iTFYqPRjkCSXKjabiVmx46MrK3hT3c",
  "key43": "2ZDnvYRbzbiGyFjUa4FEXHmd95BGpNfBijr8VvN9ULtv4ux5QR3CaquJTomuphuTLENRu9qsjbiBAgmq7AfuxEGQ",
  "key44": "4R8cxiHzZyiUtd96djNsFXwsEpGQZkhf2oee4N6zYxNoMMiKym7twrfBBSoQVtYLzQEzKV9zxYpxe9aXkDC4NdjM",
  "key45": "48uWGJHhmV7fRhbLFqkuJuwN4W9pTMo1wdm6CJUmCf6taiChCSqZinsW9vi8sMQBRcsj2AJDacAX2wrzAYAXWBdq",
  "key46": "4E9WRX3fBmieA1SqbZPMKdgfsr8mqdpigjh6ibtbiKtdwxxJRZfVucfSV3hUQQaXXEqdW2dDAAiMdr6jYiRH3hHG",
  "key47": "2UvgqgzcMqUQepUuGqHDC5aT7zMaVVR3z7dkSBNCpcFY2QyNiNMmtw2hUATsaNwpea1fMLRPkyNCWrhLS2koa2ip",
  "key48": "Y6R7Y7De1RKH7i1hkXCdBMmPvwSuoLvHH6iyeBd6BBT1gXCwkreK96Xj5Lj85T3n8zJV5EDHhM9Lj3xrpvfXrnd"
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
