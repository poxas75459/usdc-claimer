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
    "5AkAuPFptxPUT3cgMdgmxGTBBuTSaYiqRGcF15wEv1btafmuHxxgFuuo5DR1sb2eYgwEij2k5a5iq1suvRv3hRUG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A95QFcUjboGTugMojuBHUa8NkpwvboCB2bTnbczhqw3WkQVE3dxxJ2Zrtb8DHvBMVaGj57yffJj8E6xVDjQRsi3",
  "key1": "22u5BWYaRAtLMdnGc4WedBFDgtPrF4wVSDnBxbAaPZvoCSkCMrA9jBP67G8SA3df316qqZjVX5tTzoBFcv6ZDZ46",
  "key2": "4FVCbKoqDntUrsYLEBHGYp4ePFXR3V2yMaCReHoLP4RndMdZWjusg6xWMGrCMtiN2ZUJS9jHbbaJkYAkwkbnUXyK",
  "key3": "5uzvkhMUV13JdgAnZ3ocFo4LwTnR5iRuTyA8Hna4NiiJve2KugAjHJviwnFDE2JaSXePanqfephBg61S8YdfGTSD",
  "key4": "4CKxpQqBYLynawwMHYJCKUGqVuwv2nnRtMF36Ge5oZFzxu9bCoxKBgNQe1JpSjDEAJMMR8vJyhC1gzYufaBunCFb",
  "key5": "63PtBcYo3xNjtbnY5SRSbH3M7Dc5ciJi1AxDtVmoC1oeSDmfHtubR1Ft4UidBCHKDGv64kPmXug2zy3WhSSnvbFh",
  "key6": "4AcD7p3ZRkuf1yXi7Jks2wob5FWXLCBWYCeG4kkWPFQzVk3W315JSJVvmZZQUc7Q6BAtfVh9kNBHCmiH45YAd3jU",
  "key7": "gbnBViN7XMtdcDnK9RZTz287sYUikDPfdh7pDSj4iixXNnTS5TpHdo8xjTSSPHMuAihmTdcQsSXMGmL1MV9JAhg",
  "key8": "5pVCQE8D111hnFjSZP7hBsE9YkCaSVgSHrNpqYBh8wx2VbRqfTsjmVNtn8kUC4H6rKQZ9Rwn6KpNy8oGWDcH7uuB",
  "key9": "28xsCnHxDFVoDcEfmbLYxAAWLcD9XQP6yJFQYAdqm28c2fJyPC9aXMvZpHmaNZajA5pF9j19cuUcbMQMtSexbe8E",
  "key10": "4jds8Qunhpj6qV126H2UXXV7P3kBSNscCmvUimoPCWBMwmtLo954XdsuBxBGLfiCbhz7ujyKd5hmYFCe3oHtWdep",
  "key11": "4aTNmgTPNKcKVYdvkp2NbruXgCNq1L3pWEqF1CkMiBwuRKKPcvUh14npaXWeYCpHUzcKdcr9e8L3oLHxFru9nwgh",
  "key12": "SrLnTGGK3qWAQx2kZfxrDUKjwADKbCWxyU9mQzXPnWH2MJ3PvaV2ZrRcjhMDAatvNM2vtBLVS8JW1Y3kDcZtXpF",
  "key13": "nzvkSEet8koWnVDkEDqdAaSQzJgtTec57yZugV9N9NeYRiyuB9YThX5RvmQvERBZnYGkWz6ubxHKiWcDPihBYqv",
  "key14": "2hqh69HL9pguPD4XBPPLm41fV9FHgaFYcB3NEkGSuvWaxF35Np9Abwv3mXxHeEVucySN4E6V9uMkG2uHNVowewX1",
  "key15": "vXy4gVBZH16d3pbJjsH3u7MvTskwDYfiy487qUf9eic9ze4XfWtQ8g3mgbFpJwoffGmzgTWwjxRPUSeuxJC2muf",
  "key16": "5KSSkWEznnCPrZRACtsG1d9hZNHan2kXxQMNezGPKu5KPDVKfpeU1uJ8W7bSfAw3ULoEDjzUvCX6VXfJomLRwGbR",
  "key17": "57QgTWfkP8hKsqWk3cyH8QiMda23q8JcT5W1WCKHKbBEnbA5JVGynVm8v7RKWmbVxLLNAjFZEaLrZg9wJYZTMpgV",
  "key18": "2Tr618yHUiXci6wr7fu8QJYSFv3usu3Gznx97zz4RVmHrXWJtKD1yqtzyuKR8XvuVyVMCAuXvMHnhdKmtgdsVKv",
  "key19": "sqTMnEMDq2UDQbT66oWybYEyFBLy4ukRK4iXAdA8ZLDG9NPjeyVc5YzpHYgQMMEN8eQUnHvsk488UtWd8G59reL",
  "key20": "kH3tzxRxFUrfvRWiQPMuGM2E7xxvKhB8s7N5WjQBJGLWzqbWLnCJv5itr9724qnpEzoAizYwZgcvyZi8GHNanvU",
  "key21": "5kLjX8PYYdVgk235mRJHfVfWTzRazP9n1kDHAaMrJyxcpeBzLiFdT5XSExs2XU6gepY5Lnr4qpc1rZD5eg8AomyU",
  "key22": "3mVMsXty4kukVwdEMRcSb4BMtQThPSXxWX84zd31CYXErxdELjk9rcdcAfKJXLfBTp45M37wB8mKqrQFK9XvY6n9",
  "key23": "5LMhnjqnTFiG5ptEAKYGwb2tde9jJ69iApEN5fKy152FAA3LtTuK2wYhUR9epRbJ5AP6FNFrQpRgjqKsRbTBTj4M",
  "key24": "3JhcfEA8oWL6mRAmRrdJxFdrfH3zRhXag6smUbj1GayrzYVVJmaHjyu479BbNsfykpK87ytHWS1njKNQqoX54iFW",
  "key25": "3V3ZnRZSGp6qmqhGgj2UBMKRifZQafc4Ek6een3ggV4WQSLxmFFTF31snxZMxkPw6aeBuBKVtUXwwNWWNbKvo4qr",
  "key26": "62z5b8E1fDysmrXXGCndkHSuMEpDfnuvBRg279QJWHWg8wiuBGufbytYvPnBEnxam4QvxgoSjxJEoQqALCYEq6xe",
  "key27": "4yoBeS8JMVnsDqaYzumtvciSetZRbPoYvDz6WmboeQ7K2q8trxVuqsG9E9bYrmSfMpWNAnu3GHQXk2uZm5iozHCL",
  "key28": "3xUMbYdh6exNFn9KmeyhUgjiYXvNpLNmSqgNhQ3xSR2CTDZ9oodj2yCQGjLwpJXaLUBBayAbS6XGCeW5pFyGBer",
  "key29": "5ShLQ4i2FzGwEZuJHS38MgtZxZCvs7wsPsNWgfgwwFU2dzFKVUpnyjSKgVEuqwUxD2VxhCUjPhaXASjsdKHX4nqo",
  "key30": "3YwNsYJgsFhvGJwag2aUe8Ns2saECBQB9LgKqpQLtLhBbG12SBriu4J6AhYaN4gn1wPaoLzhQxoXeEMARmeoezRn",
  "key31": "6pPskyiffL74qeu7QHsTB2gZk6NJTe468N8MCQ45q2WHkVgSzHQQzZGhVfgDCECaSWwR2MGwyfLU49vwdTGjdo8",
  "key32": "5hmL57i643qoE7YzGe6jzAHQUFnVjUrxiQQhEPH1eYNXhNKXXZmmAnBFvRxZVnqpNUAfLUje692avHr7w5MPF3qz",
  "key33": "U5uNNJVZgjf8LHeFhoDSy13M2ufFCNim3Eef3MbaaNro6BNtkWMYK9SePwstWEbE3hizmc92FYyad1JzxZQqU62",
  "key34": "5t5q6SpvamPVJ5VUisMtPz5XBvUfvzyZQXGh6cKTiq1aav8b7rbLP4hs6s5n83M6oVGftNFfNLTpxjY32gHyka7",
  "key35": "212BcKS14pEZxBgb65VTS5uasT9UMPKqwaFW9fRnUuYqRzhv9PVZf1dC3RB42CpmLAtYsFpGnQPfs13oU9gNxiHT",
  "key36": "22p1KsL48M4JGkZyG513hoFtvKvjJbX6V77NCFGLiLvzfxiisSkQU8LzenZGfDUB27J51PZJTHwmENk1EpPKwKDZ",
  "key37": "2jvU2cLRZhku3AvVWUCrCGPTL3pyvJM6DWuWhn8LYybxWYkqTMuzU8nPckwuFxkhnLvwkpYqTWwsukDBijyv7jYD",
  "key38": "3YisAgV7mrMDK8cfzzfmpPCy2CqKcQR4xHzXxFntehYFFoikEXSeU3ujhwojY6X97Qc8MFp8Z3gEz81CbLB3rx4M",
  "key39": "my9berJhDRQGPC2bdoxWENezjqZsNofz4znj73B36fcGUL7YAUjkgvYR7jWA8ZrN5WdbMqLCAwXVDundtLZxwqh",
  "key40": "G86tacWj9XfJLz5Jcq1BrQPrTL5qFsTc293dqCp2ms6F1uiT941KtCbuQqT99rPFeU5uYvQuEstFztgN7h2vdLK",
  "key41": "4de5Are1j286RKaQyxJu9WNBgfs944CTdMPBvqbetRL9v6uZ4sE2sa8BTF4apnjUdwA77ZwEcDVSsDq84gFkFs7g",
  "key42": "7iCngjBC1ttYAbNmZgpZSwEyP1Pa9xJAqSABAXkMn5ZwbgQqr3VRiZ6mtA9rv5DvnmiNGss87fKrmYviB1nHybL",
  "key43": "qx37qgXieie1EHBY4cqSZfqTghhC35B5pRcPoaM5kdtmFU43N14fayuGeZEDqh7GAN3U7Fg156LWFjq4nhAcDp7",
  "key44": "5QxmRbLgbPG438YZ8bNdQZtxh4v6uCA3BMKZRs89Hd9GsovVGKtjij5iq86dT3wmXPxYWdmK8SqeFncLXGwoQxcz",
  "key45": "3BcBf6tCWeFjZgzcA85zCND4GKimxTYSGcqH5RS6acSEcjswJt5UWJV4eyzoVKnd5D4c6gZNUtsEhsJyHBqSSvwh",
  "key46": "RaLGZTUq6tJre9mSssgENhS15YtEeEv1mjcbHPGA1nBcpnDUZYjhXmrTfEtdB75va9jmiFcA9DqMto2Q5HrVqAg"
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
