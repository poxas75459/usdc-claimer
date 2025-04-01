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
    "2hAxGrmZSUMcEiJUBfkSas4nze8JBwXUoFk9AnbVW4XPz5JowvxtcSrK1tNL8aqo1FzGe1VC8yeQz8HMu8rUBnEc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sDPoJ9NggTixUcmJ1Xqp9tQRVfXz2n5g7v7LoCqjMEuiqzh77BbZkhGbrk1TFyLZGzpHtyj8a1CDHb2JE8qQ4rq",
  "key1": "3RWPgiy9R52smfCeWF9Z4QeZMoUS7xciKoxJgByh9CuV9BEcegkXMwxabZZ6eBY14Yw84y4vFsUodnrqnrTW5SXh",
  "key2": "4vgfAoZAC7JyDS7C5zhmjs8CEKQChLG14WeeAUdFPH9oPeAyZB6iFnFwLhNzqb2pNiSQ1jrg4mcXrA7wzQMhmYov",
  "key3": "sbUJZXdiFQicn1vEz1qFn1PgdVDP1sEDXVtGvMog6mVbgEpos2ZzVs8iAYYpLaj43qwUbudsi3RH9z9JJRpinEy",
  "key4": "2m3pJSN9L8zCRa18EA9qY2zci2zbMnNr5g8DqgwgSaUV2VSf9gt6jPwG4Cc4VCMniKUjEgjRA2teRS7awGs3jo5t",
  "key5": "3Cqe3igBvwAz7L5EDpjAu9ZzLqXrJ3Y2JqPaKNAbGXSxUcRhTTVbaEb6QhNaNiw54713Zy8imyttKv8YWoBb1D7R",
  "key6": "2Vo72t383gkpxSwb8fkMSE9MwP8yLKtn4jLKWB9xnXaT53BrZ9EL25EJcpxg8czqUZGiMoD1witx4QXc9y8FCw8v",
  "key7": "o9KDUsqtCfbWsFcSvxH2PxPLKb9sF4FbtYmhMX427LBo5aT75JFFSbmDoZYhtNCu2AdjSjDuXBdTK2KzU79cX9w",
  "key8": "3aeFe26H2bjTpsjNdsmoJeKHCv44Uj1GUvn4C35WHG74qZqE8ToGk85Q5jnLPaWvjCDBpxzzQSS7BW2SUZCdPg2n",
  "key9": "57FCbtCX6inqedG43MLi7XAfhPmnw6GDsqqMDFpAFqPLXbWWtL4WVMAnAHDGnszxQmDm7pmSV7NH8AR5L2zVnDkz",
  "key10": "4vQp9kJbtvtkNsFfPfFq66eLbga42mhvfeU3dbWGuLFmxh8nHHrMSaXkMQ5cxaedr2MAZGmJDZ1Lxv8S2bgX1Cu2",
  "key11": "5keDvnxYc9TgFVj1ENVCw6nRAn299CQzdAmd2GE8XvECPK2LzSTwcNKVynoMongK7cRfSHPWKhDE9n6tDgYHfjFH",
  "key12": "3tdLBpQcZw2wm4wGxfQzgBAZNeacbSHeK74bGCSuvaZMuTMcKPm8REizVJ8EGQs4yHNT7P4jPPaknHqeaptYeyXg",
  "key13": "4tWUP9bxhppEixuzh5F3SJJKKD5nHqMfSoxQvq3TGh5qLeShCC8QRQT9bzi1VbNpEyGJwhes8HTmEr4YWVzervWs",
  "key14": "ombSZUe6iensCCrzX6GLBQEp5GJE5XHvHoVcNMt77ZV3ZT9APJ8qtFZ8Mw5x3fcb8obr9KZAicCuBkT3pMGAfNw",
  "key15": "23U7MvenFWgKBd3VW3SMKhcoWvJRXhKvWQFWz7YX7wpYHZav6cB952JQpBZ2BrqAxeZhvCsaDFnLk6xHEDrW2PfG",
  "key16": "2rpwnxvY19tbz2FS1M8pMsFuDumhWtyyXKZdeNAZBYHgFX2D1JBzWAkoBARdQXTzxE4kdfsUqjGhSTNGHBmHoXaC",
  "key17": "3PrXcyFU4WJBajzrQj9rTCcH3kBChzAvgeysigjFk4jokCkKzbndFhEF3W5NGAXFvFbK15hNnDeSymXx1LCQNDnP",
  "key18": "K2sd3mSDYAS37JFau95jhH5FLXTaNWvrRGqZX1vZNfDamqsUGHRbg2PufC1e2qdaJkanayomeRGVzrm1f1gE8QQ",
  "key19": "5VcQ4jeVVXjhH8jbE2WSo8AD16DkWHopUGpAZcMkKrymebZbQanZekR2SxdgvSLAwEfF1adnnXE9tdyDjhnX5vJS",
  "key20": "5vN6MDuMU4PKiXefNNvibTgtifeEPy8Me2NHxy29ZLAeHheqyAJAwP5GkQRXDNTiQyxCnK4airuoTuAzWV4hjyHL",
  "key21": "2QRo5wff2jS9699ruHg7RUMhY19rv413NqXyBjzXzyHyipov1zfpwBYRqpkKT8RzsaMdbyygUwpZ7jN7AcCvWk9K",
  "key22": "a3zuo9n1RofWbiSDKySK1mWpjaEDai5EqNPDWaAvx8y9WKvosNPBRDwhqX4WNVCoBezsbwfZNhiEjasH6xEAGKF",
  "key23": "T4kHmynYLxe4mL5kDCuCoV3bafMNULfs8fJd8KMfcfsggGybdpPdEqh8SRCwp9kpsuymGmDYNEKKv3AFxaBZe6A",
  "key24": "2qYPcGUkMh3or51cEj8LwDhchBtw9jwLfcRcKEMSobShaTmu2SKLxpcisaNCC3PGJ72d7RV2bXd1se3cdbpErW1j",
  "key25": "2sD8SvfLGUq2hBaqjZyrNv4P81pYiLEmpKVTKic8BK1M5TAfUd8cRsueMWqBVfuzGrjnntAiTphGGGKj7yfQFcYA",
  "key26": "QjhuUGuvkKxYpM8LvYwu9GNf8TxEbemxHPR6S9nkyETxm4LLDfjhH7FWw8f4Q6SZ5YoLo4UoWRAJM4SrfN3EDzL"
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
