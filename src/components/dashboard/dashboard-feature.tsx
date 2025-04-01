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
    "5jFjtt3z27aekMsaRwsPwSLtH2dpoL8QWBjZBWpPrf3NMs5MUQajus48XZC3S8DxYtV44ntvFAKn3pJ5tTBwbR9m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57B1jxmwg6nKGJdxMWt4z2U5MtquCcozJCg16dx3GYMLwBwMPp5YHWMTUDJDKgX9wEUGLbaRSfpzwMbwhtw1Fbpa",
  "key1": "53cTJdaVx2J2MuqTGQRYCH1NtDLWBAx7H98isHeowb6VSxrDyNK2bhHhMjRoH9KNDtmTLUjyMQsLhpuTsBtVL751",
  "key2": "pd1V8U13EuuiFHKos3VxxVhAvmvVP8b1EoWHPMe9UdwYoFrQvgtqmGNqYfS8qHdKgnfAcCsVixHn8dFTSmseRCB",
  "key3": "2SwMz62QhR7WtWq4cinocwBMxLKDorTXMRo2ymjij68YLfjBgE8fjTocF2Ecj5aAiTY74TY3zwFruo2ejEQmiybd",
  "key4": "4QSrVR67xh5LW8MLznkBRyV4xQZ8QjU7CPno1WSdJxL9thR9LrH38vbabMneVLfGz4DeV67CMKFemBN7grn2tVjb",
  "key5": "2SKKbf46JqsxW1EeVh1hHXKwxgQvcwGiZELvbPLsztC7VWGD4x5FgMeobzFPct2cZviJNMcRMjgDZR7DbXbNuHLo",
  "key6": "3cBgqEHbWxtr9Pqo4DynDsKFn2bwuVoJRxJnGHtanNQuRHLf1zZNetrJwdABcgRYkZ3JRdNcU85FjcLDj7wipZgV",
  "key7": "5cSySyJUJNHN1iX1zg36pEUaYuX9c9iSGVumpojWkxamSXQ5BNT9jxqRKx5HiAgSYTKUmJAA8wGUve54SYWQvPCp",
  "key8": "3c7c77JT8Hy5R6d7EXsmXC5Q9MMLsLa9qG3e7GorE2E1dacSpEoeF4nfhEP7ZRDdui5n74fwXdAKZQoXiqHYJthx",
  "key9": "3MHwoi1jcMP77cf5Lh8x3tC31hzMQna9qfAPv4Guoce9opDAhnL8Z7RpQzSdbDvzoFiYGBU5bGH3NKdR6PDsaMXf",
  "key10": "34emdJv2L8M2pUuVtY8eDYSY5LSfKqYeiAcu8ESorEcHsrXmieJEbWmkMbTm4ki9ctwRbNoP6gHz3sqfJbTVEcc",
  "key11": "3924pVk1Vk5RDd7DjT8J3UmRNJM7RJjN21zFa8EXBSgbavBD6WEkxkBizgxVUE1FoiceWvAfZ3s9bPqAff2zLkFc",
  "key12": "2Ef86Ucffe95rG6YFJFPEcCWV2dXLw6X4kdbBApKmie6X8n594NzxzxhTxw8eCBcAi5vdiP68Tzm22f6K1YBPqnK",
  "key13": "42b6QwMAeiQxsvYtGdEzmpfCSjkSBunC4cfHFqsuzaG2FGwLc1trr3kZaMzABAaJAqZxut7tRzhk9HSqcwCRLJJj",
  "key14": "VTur2PRxAd6dxK6EBVwFyLPpVaZbnrfyHscjyovJ78fqs7kt6M5ZkQagTi8Bp7SEiXyXy8yybJzDB6fAn391kx6",
  "key15": "fScMWApJsJrYuXfaVM4VgdAwGnmcLNEtBkxad3jAkUpWQtuKNf9ZVXU9aU9TDfQE43s3qzyujooJ5Ett7Z7DbDT",
  "key16": "3A7dmSUVsPZSY72UQ3yHdzFdogqt5bgNEAMvHVzcEW7dPtY2xT7t1xuw5fuMFHYcbtotwYMrkkYjDQLgurRod6Qz",
  "key17": "3GhmffXsabsYb3tVd3zdrvx7hLawnSsEZrrMW6hpQvXszy8ZCJJgBKjG8eWhFYjMtG8WPJvMGHKXaX9rJ7ee3zC8",
  "key18": "3nRcWsi888tpyrU99sAKxqsoKxvmbKuHTHzYVU6X9aqVkiCfp9EoSg8GDdBEc9ADo8oTyNorW8SmwGYgpHZDk7mT",
  "key19": "4wRkowiPN5BWKweFXMYERY5W8bkjUN1fZVfJcp8ipf4vE9rFWE3abd9AD1C6G94szrYZr12zMxpk5PY5utL83JbG",
  "key20": "5N649zVkgb7UqYkXefmmpViDMQd6GQt1URdq6b8VeAPA8w5F8GzdDszFgTi9HqSEoKVzWcWRs6Lj1zgH2UK97LZW",
  "key21": "59JrKc2MSMFbJWEjLcsfqhyKnF3T74KcMgxSVTuHBRcG695MKS31prsFsNPzYChVjh4Bd5Qxjhn2CTxf85dMA8Wh",
  "key22": "335zd5Wf1mR1sBnAZ62RL1XBUBErnmpPap4knVA2vSFwNDZAHf644pXRD9u2yASqyY6SjfKEogA3vCTwu6LQP699",
  "key23": "5UkSjrxa6u6WACqbTjfhBQHx41gmmqPCARMqDabo6kzjTTAtffmFF3hduu8miysNstZSgpJZ4GUVnvjvRkiTvQdU",
  "key24": "3DzWiyGD1Fc2UtV7J3iEsM4Lipj83qmVSg5aUdVM8TCo5685B9niRWQox8gmJkZAevVEwLUZMM6ppFCXryh2UkRR",
  "key25": "3aPzYL8JhTR9vN57NGYkdpwQtLNKMV92tUj3RsnWpiVfKyx111GvChHu9MoTofpy3cmpqi1qpYEAaNLkypRShC2r",
  "key26": "B8bnC2cVpefmN4o3PhNcYK1q19wS8aajTCxHFqHM2VfPMoJZvK4gaA5cCQBzqN1Qw56diy5KxnDjJg1TgkJUn8b",
  "key27": "x5c7xnjYCwRuVS1C3uuZoK7ByiHdgoBBtWHtmsPTMoSvF9Jw7xrsMvM1PmzkbckqERj3oqmz4yk5kuXSyp6YWmo",
  "key28": "4Ee7MUBSkMeRqAoiQMvRtqMAhbUQBKgXZuJhv5S7YAiA7r681hYAG9c9J62Gb4DttC3RhdoxMF5RdJ8wHdKv6mry"
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
