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
    "37uSgYxzyPXMzpuoogknbymP7YtLZ3C3YEshpEUKaUN4Q5StkKhhUBm1ht9UTy3SATWyFcFLX9ygkYDs5MSkJ54y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41Vr35v7XvX4Y8zFH1WEGRJHasxvzXZLra2QDaGhRtoUJPW5aDfb5oqVjF79v5bf6fA5VAhGABvNPxF4jb2P2jq5",
  "key1": "3LLiy7cd27fTiaiwktMBoJFCSr9xTURU5qnyb2ucq8DoYJqoody7uzU4T5dEdEdry3AwP4wtR3ZjirGwRb9jgiG",
  "key2": "GAy8385RxjArmT9mYrmksJLyp9CmiVY4yWyDZNxoL84LD1VnihrwfSYKRxQ7dTTSy1ZMPa5csNCJdQNgv6mA5Yk",
  "key3": "hLu4n3ukJqxp3VojqmN2dW4sjpVpiDm9m3HBuahcuws4mjoAvhBDNyKf8VjJQMzMzMNTjDctHvwcNXcxFnNnGXP",
  "key4": "BNV5BgrZwWVyd754XtFifmcyCURR1eh4c2LtAvUgBwGQusaPaRRtoSjs4tUBjcNyUQuPru32HdmTSLdnrhLwaAo",
  "key5": "2geCv6qv8wx4fdiC2Nv5fSnYMVRWCP63EuYjDn7DA3tcvphtgmbZUYyCvCPUvBUK9K4yXy6qtF9PgjARy2vnj7q5",
  "key6": "61q5Y9ZbZ2m9Fg1byxNHW586nQ7tfmXERgz9Vo1NSN2R7GbjAfWAuHZ8D42zAmDgFnydo7v8QFadC98FeFvfN81c",
  "key7": "zfLbyLnBR2ps8HR2ZW3EJncKKRSefT14w3ohxbLYz1r9hbFLJW2QbFBFxRDmQ95NpbhQhdrtpubhWqfnXt8wSng",
  "key8": "2bRtrn3jYtwSbxRDEERFYXPfTCv4d2vCDeTsaUguDCt1nWGKERFSXVvKXYS8rzeo6mT6cFdN6UbffBMW7MNRFvRj",
  "key9": "4jMeEbUc1wTbUnYgTX6kA5dhNGbHHe8jhgQhX9ypNYQf5izZ65ifaArRxhXc8iQArFzeUAKRAmTiZ1BLCnXGFJZ6",
  "key10": "3KgUHukcMYUEfz58ZnMgWkBKZerd7fZsuqzzv4RnSJwck7osmoethnkUMfEhCGzGhHsHZaReg4PR8mvMe2bZCf9R",
  "key11": "t7gqNpgyM3k1dEmCcv5S7PJQmHBmT77SYxF9EtmdvhXEPhPHQJ5TWWBgfrNKCH44heWufeNeopssNd6ysSg7EJx",
  "key12": "3twLxtXMiVxCQNaSK1FFsH7tgvvoT6J31sTonZJjGVbHqDzHuPeMTThbnaxa5z8No3DmfFkdrqJvHTzfXkfmDw3u",
  "key13": "3b7etkW8ZSF2zh72ECDY33zokatKj29Vcqf5YqKGvYHcUVZLKFrwNuMDF1BHrUTiofDjHkSDmexEHVS7ypFfrEja",
  "key14": "59A2dyPCzFprT92kYnsjEcQkqkUu7wn6mpc96sgEXE2oDssVnh4L7dj6SyBC31sksMs2MPCAE6QFweaEot1uPCct",
  "key15": "3G9HG8t4oY6raK8mvR2HArhz7b7sXcRQNSRN7uRpUeUEnSdhHB1Ba9YZaFAGu1YWNSBvtAFvJGLh9aqwGpcuUuak",
  "key16": "z75qAQsCx5kDiUxdNJYPXMs4FTBkg78Dk9FeuKyj3EWYBPgmUK9JYJgdSv6opd2bEtsJF7iE7GBSEYEMbK9RBt6",
  "key17": "2QkZxBresubajrAio5XoPfjarVdvL9DmMjhTpH9zQ36GJ6BjTsNuJM5cSYvtBHhjhcJD1pg42WHRRUNM2xXcUtG1",
  "key18": "5wJGGN8PzV6b2dXdhCtcbeenJK9cDJ9vbAdtsGSuBD8fAvwfFsnPPEZ431Ba73Qsg2pLVvGNsEa1aZ7WCUxU21hk",
  "key19": "5wQifUdLjd9c8LeBvMqaZerVzrRUBhXcGvfcZ8E8VCNqUiXS3ctwWTshX2vxZUUzTxAMYrAJEFDzpUHGvMzirymK",
  "key20": "2fCYk9rCAfB52saYcuNzwzCoyLZ6PxXDsBNBNWM4BZcEYkvufraBR7vSFxW82Mtke2xjs9ixcadGigEYiX15PrNY",
  "key21": "3vGN6GamLqeKJRDxLnTrir1TcK2m8h4rmZoAfgSNNVfjMv23wDsWgRHQgjUi5KBHnzRpBbnxJvJcUGAgex4uzfbo",
  "key22": "tYhqrg2WnTYrBMbeEq4dfso2ykNqjki4d1QN9Dimft1zYWvobRe7FnHn2VibR2FXU2dFzfLo8sUfVQBcSKX9DtV",
  "key23": "5jnu9QGcECdFqThoELzXSA5EqpPV9EmTGGaUcb8XNTWpZqzt6Ue8f1RdAW7AuGntDf2W4ngSUTGAaTTnjpmSMYz9",
  "key24": "2wdJm6BsDQd1hLPHbe27PsnFBMyGBXfQQFXm9pb9aYR8EgNp8yBFCwVQUW58TWDWaf2EX79EvNDn6tvQ1wn2wpPj",
  "key25": "58e1t5t64NYhnG3CJ8td6mYmi55bacWNTbtWYqWWF9wYTyPDWZNFyHtNW5oyDn3JtuqYy5pVTHkRrqkjpJZBb39F",
  "key26": "X4M6qEFhk5VD2HiiYxYeoUSjFC7Z8XcroM2cyzvnfnT8Yu7JFieuvuagD1cNhRmbEp5rK8TpJit5bZBEc8kFhcQ",
  "key27": "ScRcPGKqjJuZTHGLPQqCtQe4NQGfcSDQdfRyrscVwvGDSnXDFguyVMmmnnMTSgro6BjJD8Td5BFL9rmEB54n4hN",
  "key28": "3rpvBvDcL6HtnmJz91geTsPadT5zbhBqqy9UG9i166TrNBLA1x2Z84vSX8hPfL4Waz4YaX4Lakzj4SLjr4Q2toQX",
  "key29": "2v3JTzdbdbmNz8RbKr2srGyuG3rv8tbkd2j9zsDcqc3PcgV6eJ2mgwRzw6oA71GShsU3AJU7Qe5ctL1NLRFPk74w",
  "key30": "2iBzwQco2edcvXUWure21HBJE49C7asCYEo9U9js3VzS5PV3nt6M2yStpBUMowEb4dkcoBkcmGvW3ZVKFkzr6A9n",
  "key31": "3G45w3mEBsf9yJSStbbCyXZ2RtppoNdimG3em8StYcJHPgsKahZfFjBosFedeNFan1TQaW8rzKHKsXXWiGZatqGU",
  "key32": "5N8N5K8G8t611EyZPgMsGRd4CNmhEQoTsMRpYQ53LtM35VEvstDGzo9BRvqSy71ZD61SdMt5HcGTt5h1bAAgrpy",
  "key33": "576WBqkJvVi6nNFKATbFF1uL6XqmRLiynt69uBmsR5aquESdxfJNQ5ZjoQrG4oryNrW7frz1eeQhvWMVpRqGDzg3",
  "key34": "4mekYKV8NY4pLG38CT14Mb3hxCEnjVJDkPoWtspynVAzGBf5BLozTHfebHG443gNVpoKXPXS1yinEWwhGnrkr1br",
  "key35": "5h9VY2FAhoYWfzQVyBvuVsKrxZcgvSJHLChS7FC9RSy37ivgWZx9TEZFHFDT81KqRszaDpweuSQAEDah6qztrz3H",
  "key36": "4md5TjomAt8j5pcgoNMdha7L3oTSfhkrKPPEV6q1RqdJZKsPAeUMiwSuqedE23k3zfYKHHe7nddNypGRhH2YgJ3N"
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
