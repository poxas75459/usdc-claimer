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
    "4HVPGRnSSgcfD7QoEeDXwwCAqwYzvmzVBxdWrp7xJNbeYy6PUSfPYtsZSnZGXFgxVviRfe6mzJBEaidcHbSHSkFV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TBrqzmt2MM2dmyjCb2fz6VYkRorLevYRCYkmpAAKc524WbaQBkXNqEjsBUaWwQgT6LiQssWRt365qCZGBGAEdvd",
  "key1": "HzaSnn4RSP1GqH38NFkGR7qzdEbdXRjcdQNco6Af8BDpm8n1zXbbERvwMEjg9qZzANr46Nh48VddvD1YwQAjCoT",
  "key2": "66XdPheuKENp1urSSLqCuwiCL7Bfg2d2BLgQGcJ1z72qs8GUXUxN6UNJtbG6zgjLuHsXkjgcs9jyCz2pRKgZvyn2",
  "key3": "2inAgnvzKDPwNkmJ6eh5a4YsXSuTZGTyCTgtkS1zr9nu5PLth4tVSsmomL2FKLFRxtJZ1QkimWAWo7QoLq649arE",
  "key4": "42tAcCr17dKsFViuL4sJFP7wiKakokowHXLSjUz4cbgR8yh3DpHnfAdLY3mBGC4cpN1pvpQxhxCtBYTWFZakXcWZ",
  "key5": "4nxCMUcBkMvFtmw4EmSRoQyMLypyvjPf4k7tZUe96vcYBsRiFcxS6g2P73BiwqazgNh2NSbovDEkqdpTBdUTKt7f",
  "key6": "4TEJbBpNZzhS4SYZ7Qw73JoLRF8rgHNWJByWvoQC9UwkgF2qGwBieBjp173aPWba9cLmsvrQEnX2RPWGphJhawyE",
  "key7": "56r9iMzBzb5J3eyLufcRdLM3S49Sfn7ep1T7FJSL2hmi39Y5mytPNMtDdo1ahrw4SF9VBPMiNwMnmTcehQg4XcTt",
  "key8": "2arC1j42M1dRwTH7PH4XWfuw21rs61wUZXGbD8vVdAD5gHqiraPYAtnqhh4PSiCYiw8v5ktrLZ54uYvgCZS1Y1bA",
  "key9": "22BymwqN8qVLNX8wTFmNKz8PmHbQia1Eq2KR9xHxd8rkuuwqD9CSL5PEp4yrz9MajcHRvArxjakkFwHUUMzc5xQd",
  "key10": "4Ym9PfwG58r9CqU6NdcsnPGNmxPAu6MWNEL73nNSoGokuZX3e8v6gpc4jCB9c1tfGYx9bF7myiocJ2f4ivGB5ebY",
  "key11": "3gRvM9UwLxztyBLpvD9VZFrFSgq16EbNS7ut8AebzHkRBwJ5VnaJDsgrii3VEET267sUjg6SspHHuYfLdDtSzxCL",
  "key12": "4tZ93EyKhu74nRaGCRxQE9FrvpTaytB55KigcSdjUX3gCRZbe2J1e8tUNE9QbKJMWVMMfpGYvW63Pn7GfKCaZ3FK",
  "key13": "2fAfFap1bbrnFRhEPvfKpq83UxZ2vFkcK6jjVP1qKaw8FheHbXLEo5TvToXupKJBsUR5Ek1Xk3xYSyjcfXKqLar",
  "key14": "2NPVvGLR3WPBjUexTxmpdhon9rexxMqu3Zqxp3cdDnxgX6ZejjqZzkLRvfvuL1mowdc3QNfMxYMiUPYKYn8Perh",
  "key15": "59S76gwAYx6cZTEK3y6q5TcPNmAZbhdqfdmA8oNFTdoswboGAGrR7Tykzatbva9v81t9Ung6BzzXxZwxeQAVQcLE",
  "key16": "4yipvhsJLpwJx34ZTfE2YELvtQz5uuqxjcvm3LAfuLKNjqDix6QLgzDRVYC8ev5Sm4cvv9tAvRXq4fcNSiSDNr7S",
  "key17": "BdXn346CUz5zoDtLnJMvBt33CQiagxbosNCYyWNGEudNeQRXfNXfGdsaJPuYXG7nFf5wV6uCSTbMmu9XGfDatB7",
  "key18": "3327dehQu6oSuCEzZ14zu1k2SpXV76rM8X1saWEMb1yCCQefHWp5rFQ8SfjpQanjbzvMdYb2o91LDBCHt7BaXRju",
  "key19": "4ZBZCbQUFgk5rwEUvMpzZQjpETFeq6GU3sivLzv4mCa869vu91tSdz8vm9VG5i8DMpwrDAwmepzn9BuRRyoCV5w7",
  "key20": "25jk2WkCnxa2Qtny86sHkzoL6NfwFfF4eyqncxd6wEYog7wfFMK7bQz8ubCvGdRj3yy8TDMugiKnnETj2W5imQ3C",
  "key21": "45EBPJqirZfSDakLRSDGjTPPtVJm9JMNzexE2V2xsMuzP46MNwmtbLT3xE38BmTXQuhSjW61baq7hU6VjoZxUJEu",
  "key22": "3zuiDB49YWjNFv4bE479ae6cukcpxeAu4mm76VMYpwGyDGvDBfKnaPhja2unn4Tncjwg88giU1yXGTHafRTTmf2c",
  "key23": "2QWZpFyGeJce9CjG66D7N8ZDjrJCH8Erc2r4CW4F6uirxtWtLMJZ9Dut6P1C9xMvJ8XR2hoGU16kw45EtjsSYw2V",
  "key24": "5ToLwkn7av9qAByiepxqcCw2o6uiKeYthFeQynQcTrqPSJMUuDNg6UtuJejrChR4LQNd4dhUoMeGcqSbu1if3Ki9",
  "key25": "43qEamfwJrsr5ZRjj5BmgwpVuPoxUcfpP2MR8GSd3THJr8u53YiugY9v5mFmYfFa7VzQo48biyS7oze5EZzGxeG9",
  "key26": "1yJDhpg7uDsrn1xwBbvLe8bro91ErbN6CjtHYZy8ZBqChmzUEo1z9Y3dVBK8fPmXdKSZcrUyFfHAQHpbpyzhfmS",
  "key27": "2UMH9kvgLLfeAn9q2GsETyYpNTexmnwaY949Cs7Z2Dh3Fz17DoKs3hbtKk3m9izhM1RkkqhvbYJf4qEUAGrhGg64",
  "key28": "2d8vwN949FF9ZWeTBQHpNTHer5Jp1QwkNvgkpabNyQwyT5pH6Ve9yodTF38J2zu95Qu9jENR1iVm6yXEk3SEgYQG",
  "key29": "3cbtLpsSCXhahkYi3tGAnHoUhoA88pRaAg4T14t4dGp9Bpt5D7JC3ssw9gW3xbgvMyUMub9sCL92xy99AfCrHY7T",
  "key30": "61EW6RWvh1KYnq77ZN3BWC355tqMFKz1CmVC193SsTBuWk2kai84aTvHtpehSRhxds3G4wogpxDYecj9pEEAZ5ZZ",
  "key31": "voB1E7b21SxpEb97NY46cUJePKRjZck6frMDB4dT4e7ePfDzhSZQVVVX9rDSAxSRQj63M5Ut3wYwjjYkitnA4Xc",
  "key32": "2QQ5XPNSeNdAyhgaDyCCm7wWfrRno1T8yoxnLAASytDW9YPgcQrXnH3ywFAYbcep5DirMpn1TbdLHxdSraq6QKpR",
  "key33": "4bK9bQYoWdFkn9G47euyo8AVjsRU1pWF4ZAzDi4pmKCK4oGjNcJPNRsSR4jjVzc6c5wnDi7XYDqZtVuuPsdT6SZz",
  "key34": "64AzGpYe4Ve8rqD37pqSqZxecg58Nv1aNozoaCbNp8sLnQVwDYxvBA4ZJkCpdaoQp3CkmnDpQoZecZDkEqiw2iAN",
  "key35": "2YX5SXiACGWpgZxEn7iQWw3ExCS88dKiBTRYFsG15s4mCzwDkSCmaoiwqgguy96Jyo6Lb3KfWkFBCXXyMWsZHNF5",
  "key36": "32w1VSaCn73doV57tumbF3sT6YBXx7gWst1vChd6tP8JkCxkxU1DZwBK9TjkfczMEf3x1ZtuF5dc1uA7rsGCCk7x"
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
