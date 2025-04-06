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
    "2Qkkbe89gs5atsmr1wLqxaVP8pQYHrSarZehVmNoZsM6Kp5Rps62vWnbrUCTmknyA2X7yz14F2zDDoCoSnrpdYd5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fJeLiZJb6j8MtoLd4YDUU1PFmURtbfLur4DWgvkjYawjobwWu3zRrCQygKMxCZjFcpTFcSnyKdGZa81WgKcBikM",
  "key1": "5uk3q1JqWTghBgmKcmaxEVWhAHwkmTrScQiL9sk4F5hwJ3iMg6mYQ746AJJgw2XDtJhxHJE9DUXKFL2GhRW9Pww2",
  "key2": "2WiCYfzAPNmKLW3KNV95vnJQxjoSy22dn1U6dqz64oujfhgQjv9qHXNNVCW82ZtsvMFUco6RsLJURkpJip5zv2pe",
  "key3": "5aPZH5yaQJWqoFjackbPDtpr2bHawvDnDdwtVwv6SLsorLK9hEaucHpBNkY3PDSGWzpc7m3gEPXoyCyPnfsFyyEe",
  "key4": "22iAUTunW9hNA6yU7xDFKBy6yVBymYGiL4ksNdSsUzg6H3hQdfZiqDN4X9dmXqoeSeyqUNrrK8kw5qvLMBXKWhGu",
  "key5": "5E8nmxMTNkrfubKtxF6ShrN1X1vn8E1Qc7Rp4y9784WUGrtQJE1Bjygg7ReUpntnD3qrVgKociyHJ2cieuFksbmb",
  "key6": "29ozKPhTkFT4mLbFBfWfUYoX23bLoR7TJd9kcu6GXkHSfSwcdWog9415EwNc5bvZGbByKN5uvP3Ty5MPNrWSKLy4",
  "key7": "VEQkNbrka8X5pBW8ijMSQbnXRYrz4sscuCNf7XsicHNVF38Z16djsuMakw7GGMEH56Rssrom8SwUBty7izJ2gfT",
  "key8": "5oDSihKfiQxnwTDXZADJf6yLrjJkWHw4WA24SYWJaWznyx8vwGoPgYAp68mBQCLKhyWcJ1iDFxe8DjigsdRjjV2B",
  "key9": "5BqEPu9PnUFRDdFrbrjx9sHiGVNLVebkhCeatpmMCeuaYioZjHnzgXAGmUbYZ9XDhPmAnvGVkiLgVqMqAtY6icCG",
  "key10": "4DQBK6WUe68VVvZefGFFQDRE1EFrauKxCUEZCcpTzSLzFd3QPaFu5hj9WenMH8B2tNQHaYdCxx99TFKhVovn9EWv",
  "key11": "3chw3B1dFAnyYUWjGaKfqTLSuwkJWfppgT5xKp36iB7kZbckF9wpziYHedyncEFy1hT9DUDUVhQ1ruPppXzYxNUD",
  "key12": "34vpwS1LLSdnWu8s9sYvGotqDa34a52b712CugCUDssevfCKbzK6zEtMawdRK6XxcvQGpHCMivbiYudLvVBpCTBP",
  "key13": "2i2bdxYxEpjNaKNXqN47FR3rd3DZKFQUCUphfNRCevuS3YngYZHmVzPPvxNEsZUAtSSfr5L2CZuhz4DWjPjYbWud",
  "key14": "5WkgW3XdmSykbR257VsDkaXwEWv3wLWnChVK3hKUT6GapsRXkcLuVTUGQoBjHRfEJxtrDeixz746TP2NnJuPR1R7",
  "key15": "5MdC4DagV2jckJDCPwTeyq2C3LZnxxmhdTqMQ3ssJKP4htp4BzNhWyFanA276FpHVPPWKqgNwjGAxd6cP6seMc5K",
  "key16": "45Me7FsQNtc8WLexhqm2i6u86nxZn4xU1k2Kaiz9ia5aQtV3zF6NkoQcyieJmxn45pcubL1qZUGsJku7qzWnorNJ",
  "key17": "4kurjYNsBGAcxWN6RMTWKC4XTCV6Jf6ZcqQj8EBet3UKeu14hnDeq3Y9pGMYqkuH6FBTmt15aB54ww8izHKPgxUG",
  "key18": "QQWVniYa24ooL3cLNY41cZi4krWkcrdaTWQvhoAuvB69skRxfDwS7E3Ppua4HSAMp5wHgtq2Fa4f2aWykfCxULq",
  "key19": "4hJ1DdAX7eSD12MV8UzJMV2299sR7zcYo94h6yEk6qz6DapD5ac5RHsH8j9nP922Gx818Qcozye7n4aW6b6TKFxq",
  "key20": "5Kbn1HpNdWMvoAnsNttFPcPhEB5GB8T5ZkhfahnE1ysGgTo18x8mGo6oKNDsK24jpNv9RjJGZwSo8GTgq5sTTcPd",
  "key21": "2VsysgirR6eLyhtxVaYscWEVBL5vik6RuALQvd47p16PGhpeGmaqz9ZYQegx5vgDbVa7tx5JMMGtwcr4HhmmFK2Y",
  "key22": "3SddHfWzPb6HNqT8Jjp8z2MTFjSEfxnf7QnsnJh6D4kAXwRxoSM1ybJb3pwmMebrNP1Rh9jSs5Rs9y8wVXm3U6Sd",
  "key23": "5csMA7yYViHXJYumvyAzfUF9AM2dmyPrxTmAEB8xdpSbx763gM65G9zWhKVzWD52kdbAJWz83GCmvVmhFNJdGaUn",
  "key24": "YqCZn6xycYHLdyH8DSXmmmUjUNzdsWFHWXT6YeRZtiiQ4rCGWTT2U5bkNeevLyVjUFohDpAbBSjRMJJBNMBUK8z",
  "key25": "3mqVYjEB5vLZhC3GHYp9SH5aePA6sXkT3ZXBNCfeUvuqncgLNeyxeebSEpexgNSdFuYwiRayuH4EhjZbBrf3RmiL",
  "key26": "2zoDh1BKuCCqyGWKEbUx5PsXJNLXe7gSqwSaBXFa7STVbphprr9icYKKP5fEZWoeEuF1XuXQGYZT2DWUuMVB3vgg",
  "key27": "5HsFGnLV6KWbZRsvLKzqR43xBx53MEHTbE9qPKboavpEJpTVKdaMF6xg2HRzGQQyFH7R9khPSTUuLK3X57XQRzKd",
  "key28": "3tjU1q5Cqo5kdHzkHLu9tv4RhyDySXyMZrq2PaQKqTcZ53ssRkJwPcufSDpfExmRV74qvv6AtsC4hUezbVrBiYw8",
  "key29": "4J2F9wdaBUdFcVZc1AE59kQp3nYLDRsWDvhypeD6s3xmnjByiGjnbDmvzbpB4PeeeJfy68unrW3tZRL63dfUymuF",
  "key30": "3U8HVQ3HHgjf3biB5eRfeFGxr1fy7a9Vr4K2JTULwU4gh4jADE7AqHdPgSiiAMxcnimCcy6iutAPdKufkJnM9qVA",
  "key31": "2y2xow8W3ZpnQ2FgTNqHvaoRYHbxCEqSqU54JCkCHirSJ5JqxeJx38yPSsxdffhssqDF8kFZA8f7v28bTFxPNYAL",
  "key32": "KWS1S8jzeyYXcZ7Xtiq6SvhMQQwVGXvTbtYCcAGzSFjbNoEPtp8EasoLwGGiok7PdnCgXPVS9XHyaNqT4qVXw3g",
  "key33": "2dTta6VkmorYJBMvkBy8GnmbM2dG4MvygnkwiaRHA5v1VF7HSwT8A9Wh71CVwNiCiBZFoDXaDsXZaoXKQhKxV78z",
  "key34": "2Vw8i618fEzLTr8sUdrNUK1YiDsYgRXabDVVQns9NNAu8AXco9hH4PGL9FQUvtDw6zm9ZZEMugWXVm2KdEbru46f",
  "key35": "283Ny57tfiyQFnsBzuRciH3q5HUxA6m5BETRP53k7UaShDhBDV9F6KjUxfEbibTdXP4hvnEyGesXzEzdHf3Pvq3i",
  "key36": "38bttfYuMCuxiQsN3ZamnDCZXTxBJT8JqNMdcAexLJ8kXZ2hbmucKLfpnSGjA31zTi94gkhBHoygq82cPDwh3Kpc",
  "key37": "5iRdH9PyQ4Eno9HdQtdYPSjgv4pUWXU5Hy4iYUZ8WCN6ZFqyi2CP6tHbctSQAAeFXHSzxcYBCwQhaXXF4E39XZo4"
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
