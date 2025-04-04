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
    "1KyUu5p559BzoK9ftKft8K1Y34rQX2tuqDwsGa77bGVmZsbxqDEcNua5csJLtfqSduff9UmdckNAkrU4dAp6ZAH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g14MnwHn83WSK9kNp7vkwt9GBA6Cr1FxVfXgsuUX57M3qJWqimAMmKeYivXtHN4LCFuxMJfNyGTaLELXwXRp27p",
  "key1": "2LnJPV6MjWxpsEPRADrLtjfaHjgXfJQNznAvjh8pTxq1cVR5htJQddBkWS1DcZzS6jwtV7roZSMrxnoep3rZCkPP",
  "key2": "31aLQQjr6Zv2UVK8bLdiNg52BZDoSNkSeKeXNL9J52ySqTUxTWZXRq31RUmS5ggj4zomY3ZPqnzZFKVxY6k9H1hf",
  "key3": "2eku2VaA2ULug4MnTvcA5mdb9vxUDhMz8QoHmQtAJW64BgA4PGrLvyZ3dk2su1YHo6AuaK5N133ATWepuz82HCA8",
  "key4": "51S2iQcyijsrr3ymzjAJGezaoKB89YQVvcatQ7b73Na6x3ejMz4aypcRLw8objedM8PCxvGYTCgpwjaMydU6syMx",
  "key5": "4rksZcr8vW45VLMM9RK8wm89DyLABm65Pd1fcaCucdomPFPjSwKYjqM6dLBzajMRfgLgHsfEKWD1t5jr1j3U6oQd",
  "key6": "3dsH2FJvnREuQCnXujC2A4Sv31DmnjLj3ibF9XCZjRZjE2M3JtQMZy5duAp7cEgKGyS4axB8MTS15nQJdKbN2E92",
  "key7": "5u6ezh1LoaASj7AZT1fbvk8djTaXL8zxoQ1VD4S6waXUYQukP1ZsuMXmSU7fFhE8S2C4VWwgNb8RdYBUVmc4vtiM",
  "key8": "5yfmUEDL79LabuK74QLgjqeYrcmscrKb3igiWWQRoV5Vo5zsKDs7kfaiQJh77K6LT8bFqAsm4ffuKnt8dpuSLNPP",
  "key9": "3TYupBkMj4eDXWeuhc5JBvTMtBDuDZyUEBQxRnYviJagYLUHECk35ksUdKWR3x6tXjU6mA5wrpStVfZQJAM2rDDL",
  "key10": "4T5SfH3ey63YgGW5LycBQpZr1dLK4ACRQgG4Bjjr4qemJFXn8sZxF8v2vE9mVknEkbWk39p68CwsvaPMS4MsGfaT",
  "key11": "4Pd2chY9xRKKMwZLe1bbkWBZ8W3nQbCLVnG19g4furBs7RK6TBWACpqbSXZcxnqwsyDFJDCcie2Y2Za6esFH2Sgg",
  "key12": "3bdohRiVBRofUZGSmdp5UBASJyDGvyRd4Mjm7GfssccH3fHmK12ARZ5DoJ9kswU6ABe82cGEeJzM9Hh6J2EGAcyU",
  "key13": "3SipUEkteZRFD8cuPpgEYxeYq1fSsDsSyXKHxFv6CdzbfsPFCE42hTx8v8zhTPXX9cDXNB5Xyg89zW1bDWdE39HW",
  "key14": "4oUb6EQ4vhX2k96FAk1HhKqnXmKY34x7cVa8fNiaPwq2LcqaPp3RAQYbvTmuEpDu7sCG83R7tMPLbYjsR64H2gwr",
  "key15": "2FW5cqY1pVquqaCCZdEjBaFDtAfCbd8b1btba39od6kqccaSCVyqLwqpoPjxnkJzLUt14CmCCq7B7vL2AV8EdvhS",
  "key16": "4BQL7SUdF6CbgB2R3nAE2RoXMcf7hEGdrECFCCPXhVRg7AmujNn8ssN93n8qpuDsjDN7NbsYuP9k1w7uJ2d9sDDW",
  "key17": "2KBSPC4bYWVkGWwh8pc6LenPtWqZwLfQ6gQDiNFBH6Ysz6Hcz3iXQmPm8SiPSjYUSLKxNkywFvuNjiPfLW5x5thJ",
  "key18": "AreELJn8bX7ByJMGQZUFSLHgi7ikgYUPL7M4dfCaZvzrhgWrRag9hJpZTYPwAcpEBFZ958udUaM8mXaTLWtJvWf",
  "key19": "5imVEi5rTnpHc49zehkRQgENFrXmcB2Gt6hKdp3tLf3m3KRYXGLy2TB3NhRjFFNyXV84mBdL3ZUvsFDr41Nyp7d",
  "key20": "ipj9ycUjDpPjbFnb3At17V71L2f3DsTKuL9SHY4jN45D5VWNtWVHSc9jWjFkgPpm4NaJ4kTcksxVgVpaZFhLqoP",
  "key21": "3JgYR1qGHCvNrpQhuQxLUDTWbhQWKsZqi6EAYZMXkF9ydA56bHRp3YQEqYF6e3sCicqU2vWNHj5JdY82QN8srApT",
  "key22": "67PHbtY7M31Tbboa5PTzF2xc4LosEVQRAVKGYq98TXvMqWDbLdG872fEki6hSUypukbFFUpGBcWXAUGisGgtRQKd",
  "key23": "4x8VE6Y2ksMgDmndo1iiVqyK4pevaatGTW9fd7zA6kZg6VcC7qUuU8FwBhKQsxxUdFmFUotBCLSgDwuR9Z8d7ZhH",
  "key24": "37Nt6dMfu3PP3hcDCtQfKcmzMcikZn8u5LAfmG4aZscRxYiDu263FDFGmEF77SuW88vducEkow9BuQaeuBLZTWmY",
  "key25": "EVRVNCAnctct74gHeZBqcaVGqiNJF4vtVeFnvQ1EV1eiNmJD9b1SyFxCq9wvokeKDc77i89sctLiYBvsXduKADj",
  "key26": "2pXcJ21y2M9cR9FSW1JnsFGPsWsyiv4Qf1hVLF2C5ym91pScvbUZK7PUeUSAhAaqe5umpFWYBVYVS4Fs3FybaE6x",
  "key27": "8bNeN8f7AqDvfVERQDk8HoaVMp8RHtgL6QWWw2GggVWcKhFxV8gU5PFCSqwH5fLxLB7wefxRvTEusjm3WjBLfvQ",
  "key28": "33ypRFZJD9JkaLr22Lbg11TBAySZZjexXXu3KcFMvufv31QZx6ArvUxtqNdmbgMMygbugwGm435vkhKqqZ7aswGW",
  "key29": "4coNxrk7k44w9ALhWAHrqQDKBmey8H9TSCPygoEY6nBZxHHWKHfdmUcBieY5QGYMB3JBjpzhHqLB4qZddEhJcS37",
  "key30": "38FL7LupeVDuGorWRgSmjua6b71g5dJoPupkvfSwrSfBP4ds5TvT25fr8FuoZ2bPhVdaiaGJQh3zcRRQymjMEtjH",
  "key31": "2WogJP2b6THo4QESwhadsFkFfioe5kvQPvUbPJtDHgLkgLrGzrej1GFvAk1YxpTWFSFB2vsUTZMLC2YzFjBVcwLS",
  "key32": "5NzpR8R8WhXV8SaFSMqSQ9nUnigR4UtCZG47PzWhb94dJU1zUv6vzeXyK5A5NLgCRt4d7tsihfKJGQhtpmBqDF2g",
  "key33": "4iK4iSdZpfy8nc1quP8HkQzTw8T6XLQKYJFXuYjPZ7EWkbcxvhKjKfKUmu2djGbaeZzZUmH8FeqBc8P8GDZA55hx",
  "key34": "3eVZiJ5TY8UmfnvWabw8AjviePPcHVn9T8tcwWC1twQffQSGn6SpF6ZKKDUJNzgwYekewE1PKtdghVsh61hVk2N6",
  "key35": "2Ew1SwEmnBNs2Khm5tKPbex4UzsW9mN9uSekqNHPLKcwt7kS496Yiny22911a7JUbY4PumSUJbJjsaGBRLy1S5rz",
  "key36": "4agK83L3vKjtzmkNKNvQbEhEzqAVxM4JDGtiqcjpTEaN7v95AY9PGEcfyZke22xpgqijRR7S33Ruq3DpisgDTRAN",
  "key37": "2vUJPvyUbeLiHdaoxYUr9A9cSVvr8EaPBm1rSsCY4GnJsUXR9b41YJGweMQ51ySFrzsHfr9TK4WsUG1w3NQNg9ti"
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
