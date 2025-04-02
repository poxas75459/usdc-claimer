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
    "tbE2LHDymvgsmEwfGqPCYaqnrmS4PVs4JrrHWgMyiwy71AwarTzdJgtpmGSvyVqFX35FjJSB3a8CFYkprk4uj15"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oRVsEWs2A9uWxo53etSuWo8szkX9FgxvTMdghPzKYWFzfBELtENjsxkuPssThemoEr2HP9s4DEUUNMsX4yzwErc",
  "key1": "n5JEYyMiJjRnTT3QfdmysZusyzN3hkYmmBu2N9NV9nC8bjW68hpSpsJkW6dKtS3mDgiRzexQTvaWEv8Y8kn5jmi",
  "key2": "3K1PxBwrCGLnS5hHriEdupFLaNXhEvc7EtVxqbyt4T4n15Pd6j6odv5Ep2W9xzmo8CJjfaVbiK5oRodnWoTVBVNt",
  "key3": "28NnFEvbupaiNSHTkVwFVcc2PmMzoSqA27byxpjV77mz6U5Ah1y77qmnkMpXLXYT2k1gEuV8ypb5g8TtYRZSnF75",
  "key4": "5oy664JEshvJHQWZDckGb4SUGpS6DZDBjpkTt3Fi6bfRqLQdGfduVGizsHGHUb4vCcJfPNstWMgxt6VpFqLZhNYx",
  "key5": "67dEMu917tAPNt9G74P6p25sjEK2e1xr5WrQtn5HjabL2H1EWxNi6ee7aSY1XG25QUjzGqGJX9cDRELx5Kd5jWzF",
  "key6": "6SJMP3RzQPxpBBrT342xepBGsNHJeo4z4gWPeEjQDAaTd9Z53gJvj3zXEdipVzByeERXRQbECz5npbfZCq1nLdL",
  "key7": "329FMNcqt4vDuppdyzrUqiqTqqJAWYJpTnyAVAasf6WKSow7W166KvB9FrUq3H9Vx2FKMT4tG5uCdrcr22JRFwTe",
  "key8": "4bJBQyQzG3hGUQBQPqcQEReZWD4hmk5ZjygfNK7R1i1evXhT7PVnrKTA7PRUq89z1pYZKSS4xcsh1R1oTW62Ndvk",
  "key9": "3U8RFMJ41HJLCvJqNsNNS49zN7wEvT75qG6N82rwbRUDEGRmox3wfPd1HRxFQqE2dikiXpnwRt7nabeszbsNG1gr",
  "key10": "2b1v5rsrjU7m6AmRaQEGVLKviopv3zWg1evQqNkwQpqvjah9Uc3qzP2Nx4BycMFdjvnNmnTQghKsMU1Vsd55KEJ6",
  "key11": "4M9KUqSFnd37JjXKbS5boixuyAscYqV3ZNrYFJvJsVoKBjPACiWgVkRWQtYvzaHYnU9XykKXEb9meiyuyzXnGx2N",
  "key12": "UJH9T8J3N7xBgYterJarKiiZCC4GvtnU64WsctFAXrfsXA1m5E55Y4SnPa49XvQnq3f8ziF9UD7ePa3WxPftsbZ",
  "key13": "3oPA7TyMYbR5oKHsFzNo2CJbxV6dxwPdck7ZgW59fUHKwhoXRePQbEMWRNSmDmSy1asEdEpMoWLxBK2vouuzCAfH",
  "key14": "3BuMBRuvrExUN1mRS5qEGA7H1KLinCqr2Kpw6n2S91exY5wJymB28cuCoPPmViZh2Ts6o9judSdRSYa9wEVdbZ8o",
  "key15": "2ABdNhBaphBjSdSZm5aMYGzR3cKvbjM9CvDA6ba4TN6PjUhc2TNqBywWSnebMZWEDmwzwpBWv1haChUsiHRuoMpA",
  "key16": "3D9AjwHEJMqcDTYPRGRca8Fo6Kp7SyAgz2rEbL18wdY6bXorcGGKN276aVkyuYBPatNJ65qTNfWqvdtafbGcZ4ff",
  "key17": "hKAsTEELKdWEn4TLyWLTumQ2x7PraqgGGHeUfnd54UhUiYxYv2mcppEmKxVQx7FUnWPQHeDyaPXDiPoKzQGqxSw",
  "key18": "KnRZsywecdWmxGvgP3evsLX2Hi93TYoSMwf79492itTiypZ51aGQREC4H562wt8nnGbnWCgRGpaNA4Ea7PeotuP",
  "key19": "4eZJyrWfEmWUrvF1os5SKRSYb9TfCcGb1jvSREMqhwWuuGUVotyRzEpcsig9VHyMDjFDKGG1KzoAMSgAF9MsgBin",
  "key20": "5D6dZmqCRE8RHRPkqLXeAaJgY1JZFyxdEsGsFMTo7imA8Z3Wp93TFsqLM2mUGb4EfFsEZDfPahhJqXhBycyTXYX8",
  "key21": "2jXAkD8MpoV6vsdT7EvHZANi1TPrCiTjunu2xaS9KC1uaLgH8VTcG3FvTK3Hj6zZvrsm5eA1U3C92biUSmv73XCx",
  "key22": "28GYxepcKXDta29aNouoR8XrzspLCRY4yCx48WtJGqBYkLvsBwFM5axR8GXAHmcnmw1wVUawCxt78gjMbdRuQu5F",
  "key23": "5zADXSebFEvxfSQgifwP56A2yP5mGNjSqQWCCmjBu7W8K6F4k22oYavWdZZdpBEW4HTE5voaCKZ1rJeA5Jq1LQ3g",
  "key24": "5ygFgbskgyQaq1UZ7aFzWK3hLXAH2dYDV7XKDPzRHjQYD8LF47tD4LcNsqiMw4Szw4zzhHaahJDMkvdXnHXGSLv1",
  "key25": "5xF9ZBHPGtSQVD5bfpQY5vDZakpPoaC6kEsNWxcsFeZFhxbQ5LvJoUzuvb2T5pyXWCrWXTwfqauRVyRm9bBFpgzB",
  "key26": "2MCJFZwgbfZh2cDd2A3H2NbqqHmKfChmWdsYM7Ytuu3ytchxpfiKSQ7SNnD8aViW7VCLM455givLAPBAR8JtYXdb",
  "key27": "3xxsR6arz2Qr73c6Xdofa5HbtyYBP7QVHKuZKmkTwjN1HVxbp5fHDooXBX3cvXfo3a1dQAzbpo2rjdWZER4xSXUw",
  "key28": "AF1EjskQmAriLqjbh5eLC43k9HuUVQDoVp4SdExGayYZPfrhRMgD6rWULKZ6KZWNEnqfY61iTmDhsf24jMC2w1b",
  "key29": "5cYkRYwGnxFdyMFGZjbmErvQZLz2zTXrWCkzCh6ZEYbniKx9hPTkw7sd8Hr9s3ognyLBkwQmKf79v6Nod2hvHMuZ",
  "key30": "2r6U594KnbmBuxn9EHc2wvQ4t5gFrVZsG2d3o1v15K8i71ZYaJSN5QWQ2XtR4FsvQF3YrUQ9MEWnF7myFnmTotjD",
  "key31": "66qmYHBz21FaGFN2mn2Gk22hej9cef7JQ9QeidCapnxbPBpPkehUYPENKF5pS85cJPToP5jF7uj4MZWKZDiyxTXr",
  "key32": "2DuBvAWwrSLJvgkcQpMfCzSmTmZU7YxVGpUEeza9yJQj58RsPsvKRfb7Z5AQeUZRBy8yMaBVzAB2kh5hfT4sLzjT",
  "key33": "2roNHXutc9EDfFFjobeCRYc1pnqNAdMYu19mPGuAmrN7DZPu3g1gNizjyhhBZ5MXfw8qGBZuFjToiTw8xQ2E6A7m",
  "key34": "3oZRnD3UjHbjmK1b62gTzYbf892TXRA4gDkLhe1jLDMYtoR5LZayjKnhKXerVEBT9wpWxbZEgJnrUsRDanexKgjQ",
  "key35": "3QhZy5d9jKvZjrfw9ReSbNkxmum3E3NjxoFRR6T6Dgx8sRpi3WJvXWy85aMCzz5mejCmrSMusjRuBye3NBM8x1ms",
  "key36": "2xxsp8rLxAPnJku4WWPLecsM7LuZGGm1avBxqVSTMa49v6w5tPa3MYj5DeXC8RA1LqGZhjydX736rPi977Fae2pr",
  "key37": "3B6Mrk3WSriTXyEDtqkFjJJAnNX3VU5Uw9scSCh1pvyYzbdDaweyayjSzkCMwotWJTjdaWkXF9PEyLCvjV9A4hwj",
  "key38": "2cJgddNCHqAXBCVM84vnkEDhCB5wAjSfG7ixJhnMDFg4TSAXzguiTN8hjaNQUwDXeVB7uwxRyhi6NxWGSVSXTnNF",
  "key39": "2gDovKMv457vqmXuAwLG2UPSbRy7nVDjn7nL9aY7HXV9wsZJqAbPtXB6feRdF1WEKhrqUTUsxP1zKrxYHvwhHg1w",
  "key40": "2p9rnkAfufF81s6QpeX6StZJd8T3i9uKoSCkaHGJbRRS28VAyk7Q5fotR8zsAX7DhxtdGUbKs73TnFaALWinp6gh",
  "key41": "5QEMRr4PgCiPBLLn3TJ2SgjBLw6qnZ1c1HcJk8nDLsnJLVenN22R9LzeaF4rDcSc2TK2DivM5MKdsg2CKz2Jx7YM",
  "key42": "4Gbo7L8pDH39dnApaBDjTzwe3Yv5kFJ1TaNbV3uVf5fmt7us3yRdoJ4pMP6QJqy1ni1WZjJj4PiBt8vvNm7WQNzW",
  "key43": "kSStZnwKCQeW9UThPYranHhz3mvFm8fTBfpEAHL6jkLgRQxTRBzx9ASKLcpDrW5Zn3UKjie4rSYrU3Peqqiwky4",
  "key44": "2ecfDeMVyvbYwbt4RUD9cErT9tm1vRsAJPw2QadKAfhxgvmzzy3EtW4HF5HjwBKzpn1vk7itCJMkS4FkZbzmGi2w",
  "key45": "2vczepw9Qa8htimpikkzBehY8LEYR1X5ER4aXCGGd2zb1X1eEwQstUh7ZzFq3kB9cDBQX2Vw1M1wpiH2NT6NJBG6",
  "key46": "5rTspxBbmSFFrexB9weU9SU5E3XYqrWHvM6rddMPeJNYpQhG1bjA5QTff8LG4LZoX3jYYCKXqVae5b7tf7dWUKMr",
  "key47": "5ZcWgjp9X4B5KvBA3DRgVy5bta3pD1LDLDWcKzywEEDcYoH8V2SuL5HRKmfdScvR9ea5cxsgVTH8rSAteGzZAhC9"
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
