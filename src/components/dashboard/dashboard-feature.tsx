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
    "bS97j6X7i7uEe88492uNEGhYPs6y1no1gZzyh8ZAxuhXzrcRuAecJusGk8K5TRDp37pm4scM2DTH3bTKEVpp1Z1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aZQCL25kUwS7XyYGYKthoBZJGPys8jYwv1DZ4RZnBj2T5gA3F8Nf64GouScc6TttqAzjnaUPjZU6fSTS2EuYDQ5",
  "key1": "2CLPwb4Sy8EXbD2L5vSdLk8TFBjHMjUF2Tp7sjgiDYZm4YNRmJor3HWSShND1tGzrcB58wvzirg7nT1hkwNYSja1",
  "key2": "5bZyko6ziy9YuvNKTxfKhvDpz6pa2S6mYbLUGJsCVeiM5jfx6LmtoMrHpq8Z3Rz46afbb6t9NoZXfuGd5dn9ZGiB",
  "key3": "5tyRSehN2GKpYZHPjyr8Ms8SPSk3PaQTuxQ7mPPihAgRpkN76NnS2XJt2E7rgbMEvWfi2dKmf8YPRLFWW4kKE4pY",
  "key4": "72ttAqwUiwz6iEE6QBsSLZoPW84AHe9vRtsTPBxwj1ED7W2y32oPAUpmz7TQNQWmMJKX2p27cr6zqmhoA74kdTf",
  "key5": "c1byLU6pX4iujfhhdk8yhwaBE5Yg4Z3fYcmhtPH7gXSWPwSK6Q4GnGKJ96FX3uSeKkjeviaL8aTnvTUoKV9gtV6",
  "key6": "4mFRvF4ALdxXcXx4uWKzLzsGiTzun2a3Wg6FD4jJG45WzYYNQPzrqzyxD3ssVwZ2M4ak4DVLyPntkXuC74mv5Rkw",
  "key7": "Wv3uERBAJsx8NLZMS6RTjSZKxt8bECmVR7HxArVjcjHQ8eK5cPAdjs7rmQUgxQc8rSTtq4BS82KYWyFfLvYhKqL",
  "key8": "4h8a2mttS2g8qsjdLsK2LwgzW8u5RezrQnpgEfivcuKKCZPeEwrenDpghyyJkcjuwq7RM38q66VHyyXGCGXeLVfL",
  "key9": "4V6VNZayKAejoMmuRbfV871f4hhKa3WQEvSmPL1TDXJztaQG7JY6yW22Rt34jhiF9rnKT3gwF7KrUSnMu3z343C9",
  "key10": "HDkPFiHpTmc7r7DUkXCZytyrrCqTdYR52Jjup71N5LV76LdCgKN3QCaphJG2AuNr4dWcNkdZDV1JMBrd22mVRQe",
  "key11": "63gYrqjyzd9UBJXrTivB1YuoDJd6rFwjPefkXDXUBodkduQaL16h43xJw1GcvK1FEuyk8QMjTV44p6ake4XhwPbV",
  "key12": "62g7bDghcomcSvjLHmAKuoCcS9dQZyWYsvpHXUeTUskudWFNjXAEPFRHsBMezUdbkQbDjkSf4K1yGy6dBtAJBRRB",
  "key13": "456iY8cBowofsmEGtuyBsnySr2rAUwMMdqYd6GWWagMhfVJ99umKSweJ7w9G58knvZ11WZqk5D5RjJdiwkPRBVzy",
  "key14": "g8mo8zaL9vtfWrEFB8j8ZqxaG1WVJ4ehauauWrzZ5SwL91voCTA6jSgPBqpjwQmAKfzJMawkk15aND72d65Pp3J",
  "key15": "2HsUmVywNAUKKKgJ5YWJ2Rm7Ex5t1LtF6Qi9mSSWTopt3rewRVLepaMh7WkC4PCmqe3LENtGgbkgtGZ3Exdubvna",
  "key16": "C3JdFCoLPdo1YPiPEqTpzRsMxBXuwxxJ2Z9U5CBEkf9sN2Mn6fv87FjCXZ6xvq548H2CU6zhrxRFhSGxaUdpVrQ",
  "key17": "EosVHMTxd37rj8h4uSMaiVYERFs7Ac7ZV49VrD4v8Z3B3iTYy28BbhE5GDuqLjCxShWJggXj7EQK63XmKHNmLGN",
  "key18": "2Z6RgABzDhp1CBtV8mGuNWKPpAmT749AtFNonAU54ybwv2SD8XtvrX5XrGYTgBT7kLDA7SRm8GszbDaBA9BHKQHe",
  "key19": "zSfbkx2qR4WoUDRgnFpWM2qJM6AbFWbHBaD591Ls6qGhpoWgWVvuH9CeexfnMtBVX4sNH6vbqvLTf75gAbaAcff",
  "key20": "2E1W3skgiiAsFoNrEQnJKACfZ5t5fVcLUupBKkDWR4QAhc3hRrqXpXmDbL7Qyja3cokyF31hbmNiMKhHHb8vGgDy",
  "key21": "2BEddvGQnB8mcorVNqqh89r4jh1UbPjjt4RXWy5hS3dWVVUEnGnHnzLSA9KxogBRxUJzmtqThSx7wvXSmGiMqRDV",
  "key22": "2Ly8ifTckmJFkdijAZywyySED2buAkde1osCaAg1pn1biNeFjuhUdBjR6LY6HmQ3TQcJtptu2Gwp1YXjkfXV6fR5",
  "key23": "5cz1JZfYL18q8BnD9Ykv5YpS2Wr7DKsDjmkY7UAR8ygSutfE3dJwBiAW1dVr8Dh5wme769oqpuQbPKcBYaUbkUSt",
  "key24": "2e7YgbYzrYgvgcKRJ3nWuq3dtEm2Z24fn9XoXZjT6XHRNft1fB8yarZXbiQu1ddK4YuEp5idCoiDLRqYBBN1wFUT",
  "key25": "3MhBJ6vYe4n5kzY4mkwzfWCn9qi5E1aFc3ZefFaMFY5oUKd1V4d1tFo39799TfNnVAPjDkVrLQJpd71EDLmFeCP6",
  "key26": "4eE9QnY7xBWy1M1pvsc8wc9MsqTFY61wSrgEg8yZRCUFE1q2kFLABSQABR9TxCUQ1jbXUUFvPbfBs1ubXLBagFpv",
  "key27": "qxBkAprqLLtz5Cb2E375YK37Eg4mevkbSbfnFY8VyqghGr4Zn3UnFrk3fKGLmCmcVb3GgjDuD4k92MFbZzcFn4z",
  "key28": "Tbv1F9Z5HAvixugdD5mRgCahBbdNaBd1XYSLqgofYjmVEj58xTYF1J9XvXsJBTW7Yqja5oNQysmByBUj8RXWNPm",
  "key29": "2fLLQHbvjKmxnFF4KJPsQaWXKr8thsRJS34V1xp3gtneAvD9qeaNuL6ALBVg1nVPQt4MbcY78SoZubHExJrx7Fta",
  "key30": "3EW8oppxDbD2zuaKqEej2LtHfLx2B5PXCHD9kLocByttv1JtxYpzLFvnPckMKteWm8ftqqmkGNf66mh18ZMEd9r5",
  "key31": "45H7hjrXchiNMSjfN631M9DMNNnPEMiFjFPAs6zkh3JF4nrMEUuHhYtFE3zb2zz6TqXVi2KiVsi4ZLfDh1bdVyD2",
  "key32": "3NK25UL33UnCZBW9o67ZZoVbFMNDsjYKJ352BSfAqR72LDFStsGSE7U39xfhM92HfA4314oV74sn4Ae9uUpNfp9V",
  "key33": "3PJUhcixkmEqtytpVCgrGGFEfmEk1FVYN7gik1wJeqNVundkqJKZhsW1rAzzuiSwR2V7naoCB2gakRNMjKRnNEzo",
  "key34": "3jrkuhzB37bx2NLdwTpnG3H8xPFGDZhHqtcRHndq84uTrwDApLJobBzfeMNLLD43MJSEkkVXXXZBTQmJ9ez8PnJ4",
  "key35": "46keCXKPvKHC8EStNkQCJ93cmH2QQk8fZ5HDs88A6Rhcc4hxEaka31dUR6Y7r35wFrXmZQDPrKyixnn7oQcPH1sX",
  "key36": "27UaA7EdnofMYxF19iUx5viARfCbbbpoLo3fJppRsknuP98XShctUToy6DqVvKGWPaLDTb63jUxV5JGpdH42KySW",
  "key37": "4HNpYRTBJ8vB2pheqoifi3vt8y4ctAEf1UtHL8ASqsj1J7TzQCKLbJA8vgD9CvW2SdRym857knddAyMJifLkkVAQ",
  "key38": "2y96rDpbqC57k2Z9ZiZD8H9A9xFSUDBc8duNpM6xhyZHZKxCZ7pz8p6oYqUAe1RLGo3htikVdVTUcRgELTKT4CCQ",
  "key39": "BaRRp7GwfnXaWQHbZ6K8YuWdLwLFLa7fhaTkkuEV1vfaAEe5maB13qk2xAztPfzvm3V5uvwiMWVpGRZvxw2utYt"
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
