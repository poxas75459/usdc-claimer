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
    "2WNd5JrsDYEUMM7ULeTmaLd2BvVR5UuAN6JZfgtTccTdLCBAYDZ1o9TJrC6sZ1e9gUxzvfcwfi3M5wGYvmb94aKY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qrBiNxxQEP9TuPjMH6nm8xfLnTceTAkjmKmpFNMGZfMSGtqczAsJRS7ppGK3VN8jgjafY6gApSEH9r2vdaAhCJ2",
  "key1": "5yqULtP7hVzzo2GxdBzqmZnSH4CCzbZpkEhmKTWArmuXcdx7SaAG7bqsxheA53M8b4W127orV6ERpGhi3HByTzfD",
  "key2": "3A7VvJVmFz3JLCVNzPvCcEcCXxui4gZd7PuS9wbrgpswCDwV8yFuJ75yUyXiinPR3ekGg3cphnc5foCLjT2tZXvs",
  "key3": "4VjYyD1r7fKSWt5ZWT4C6J8FaRNqbC3fdWAGMrajw9c2M38ftvLAZgNR5ybq97aGvZvkF16WY5FYeZbE4NisRece",
  "key4": "5LinCof3xccj3Y4KTX1rwoHB4CFSL2fRHGpQBj6q4DEwMRWNdJicsV4U86pVMiZYApetnUv6n5tANkaRKQV3qD4j",
  "key5": "3sso4RrC8jBpyuMG5Y65T8MgKwywQ6gMpMtwWVZoGprA76LSBX3iDEW5NbBSi35RShNH6wvnbtMXqck11odEhT4d",
  "key6": "5HrqFzTL7EtMoGeVEm8rKgRUvcZTXRHMifhhMtaC3CP9drdJiiBj8RMpcoX6rnDvx5jLXV2ptvgk1PCgKBHCvPRp",
  "key7": "2QRSYNXsjfpRB1hwnktQ3uaTqPZZ3moFDnTc4QD5G3KznEPngBC3greBFUBowpjRtA9Z2LcanX1Nu7y2TucBx5Sh",
  "key8": "2Ese4ZJqsKJ5RRxCMwH4691LLMCyvg2oCJ9GzVzCFMeKeDxuC9iPXCMFEJPbryqN6dm5uEDStf29UoAmQDFz49me",
  "key9": "2MEVucbqdHRbmAkQb8NcAf1xKdZefxJzvRTXQt5QLJQzkET4jEWFryJnD7vVWYNVVXo62nQ68Pv7ZuxsqnSaT9dq",
  "key10": "57f16MC6BAJH9e3YUCobDP4pjrnAQ6DHL7rMUZUvHkzUDCuC4Xvm2c3TaDxvb1rRmMhhifre3M7AtTVyhxfydTGA",
  "key11": "5ZTSKM1XmMzVHEx4od2CQgewh96SjqkBamknAixpiFGdhmrcfBb9gfmwqoVBiNx3Q7VD8TMXQF5oVqVoFXF4Z5iD",
  "key12": "3cpMPB6ATtXyuzPgpiW2s69BNThm3xCQrAY58bzGdG2EJYJT2sbNcJWfyvX9EoL9zVPCKKWhmStLSrnqmhs9e1g",
  "key13": "5s8i63RrtbobvQRh36ugDooHQFDVHM8fxeXfVCCeE48u3S6aNaJUTkQDeauLEyVSveKJU9BPJiBhoJk73oS3LkYw",
  "key14": "4fL9TSNeeR33haGBYgYu7xEoF4GhB3q7QDq3k4P9Wx3ZfYV68xpZP5Pc5zTH9U7WuZKitSQ6xt2zAPHy2WF8JhGU",
  "key15": "3rkdcLFgJm26SGA2LhYEmEkQs9uyri2m7TK3QNE4tZyy4K4cQCpoUKdA3PmjDPq4UFYAd9UHrQbtvkUCiEvNDW2Q",
  "key16": "3FLRjEJJV3zLWyHZnoc1wkUsD8gHTx9Psv73r8gRP6eyQNPabUoGYQXM5EXyXsUDEHJjHtrmLnRGSfd2732DwGEw",
  "key17": "CZ7tmSmMAqZgLLG4As7E18hCtk3eLm1gbCAyRsTpciGLFyWDtmtquNwzD4WdecXCAfwev9yhiQtZn2T31toA5dh",
  "key18": "yuqQwyVdDYphby75uasLbZh1pSP9cu51DTQxxD2tVTgxorpCaDo3Bp5sAAixafhnCaDsreYk2nP1RVePobf5cnK",
  "key19": "3UsLMqCxjzQzNuYeaxfFzCzK5XxgnuUonZa6Vnd4zAdrca2f9NTzmuoWAbycoKmLpsSvMn7HPQdtMDx7YU8JqCH2",
  "key20": "4Cn2nxRKQKSp6MsMvFt4Tt3kKBm82B5PeWz1zSrxgrgDKYpeaFuJrpJjS7oqar8UvyXefYikstHjCYLbHMicLkey",
  "key21": "CjP9SFD6QJVMuXjyuVSwZxerFLcuNsNTCNoqGcFhsg2X2t8F5CGqMYs9ykGU2rvadaZsQvWxMw5Rij3ND4LVZ7h",
  "key22": "3TMtU74hc2ASRmZiMpyKkoCdTrzyGf7CoRxtUErAoGirAomeY5fReF5vkXnruWo8JXGSWsaueH9gTCfnrYtLqQDX",
  "key23": "3ggPMnXQwqBMMqahn22wU5BR57kbpQgsc3DZRW96LhaJqWk2ogY6jXCcCH5CMMwTEL3XnixnRJNTvLshMUEBHwmx",
  "key24": "5UjnxCCMhL7AyW9A2d5Xpss1tpuLUptBQrgCA3UfxvKwbzJNAfuJRZZahafy9BTuJhV4pZAuHZ4vz3TaSV6xP5bX",
  "key25": "3RDyu6gkUFz7oW2LAHutTuVcpnUnNajZfnnEJZ6sfnnvMxCnw1ALD9ADtQLwv4fDwR7yLcXkLwPQoF3VxmxuoXp8",
  "key26": "5kShbxBgo3zFEoz2ZvYc3fU8r9ecFi8JKE6yJZKkgrZbvmZUZeaRmnWeNAzgs9hZrwhwyknL87HZF3GDuzfhNUuV",
  "key27": "2ZRM3v4a2LSUruQbeXmxJUbu8GvFf39DywSA1X5JDKBs99rMunKmTdCV6oNGd9bFoNdNajn1SDujawuQngdkBdmA",
  "key28": "2WiidsjNJpCBjV26TfeRE3xrbSt6BNQJUhPkfzUT52NPhDXz3MLc3dx5VbZXKAzKwGy81od8oGqHpRzDnnMn1T7z",
  "key29": "4R8WZggqtwBBorZgQS4ihJGdLF5WaazgTZ2FeAXbbL4wBiZ4XowYkoMsBB7eg5wEmsvWBAC2a8E8vpRjgM2kFbLL",
  "key30": "x9pYsBEn79Xw56ZTfP8UwaAu5o1CsrTWAQtQGn5Er1aoM5R37MEi92CmQrEC3rD4VWsHjYRrDpdTg4EQqdYHVws",
  "key31": "3x3M91iUTQ53CuWCBWMr6Dj39QpCtg653a5QvBAKZVexftFhTRZjZPup8fRYgPXa1ptxxNgLnhiCWQvVoYNR1gP5"
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
