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
    "5UcYUHXpYzSRaToWXnVaDbR5SRJpsX47eSt4o5XSFUTHB8G6S2pFBWkeqzAYLUyBeuAq24Aj4UAwP4EeZUQUGeK9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qoib3ejv5kLuzW9A8hP6U8M2kiPx2cPJviQde1hRA3vrLm8zwcyX68dCCWRGePH24GjvdNWiYAGR1AxfaRmuyNK",
  "key1": "e8AKNs9aDvvPcN93GaYonbhcZqRHzmxrk3nLKjqppVE6KRXYGZesefua3WWdW4AsRVAgRodG5vRYtYQrpwNKhDr",
  "key2": "4szaZxDog69fsVajkkf65ZsQXTJ1CUqiAtQCtTiDxNQadrvbGjt6x4aSLL6ebQPu8hgz9XJBBve4TH9c1hfMpmQp",
  "key3": "2F8NWsYWi2PR3gJnkeUAxu6TWY8SZxFpxy56pEWXdaj2QZMyf6QNzUFWiuTfZYPxvdGkbz63oBQ3bHYEFd8fcSpV",
  "key4": "4smi8gtRL1b2r8at19KinuJdZ9tMqVBEFCqzShD1c8JGRvqz8c799CD7HZxRH85V6bKPKDG74Fy8tHYgv8jLMG1a",
  "key5": "5yPDAdp4FvrYwqf8Xqkfok87TNyBYHVbXFPQwRCmp6fgmo1R2ohkdoFKych6vR3WMZ9mm5Lq3bh5afmo6gLTCojF",
  "key6": "bfggnqxx6jdjzB8TLpGWwHK9xXwaaENoYq3TM8qw3UDuvWw4UdWhsNRBAT1xSspgdACFpAFpvRCR1kYNy3fQDsq",
  "key7": "p5FWbso2JugAZtL7G9JDVWrjEYZm1xzsa5zhP636oVzG5zayGJmCBHSFc3aJ1Vsyzyente3PD7ZYun5roQiQDnH",
  "key8": "4HqUNGm5UYRHCs4PMV5VBmQeLvfhEQ3JAZg1TJekx6ZxEzFLtLkcrjV7jMKnE4B5wKCgKw9dLho58XwXhiSZqAZc",
  "key9": "5DKmHtKfWQ4bbNKiWaAXNZ6tYMwL7JVPUrFjkpXVEimkxjwitouHTv4XXw4qxznPE5VqZrbvCJmACEeYzc4SMTLB",
  "key10": "4F4BZfVxHREMtAyygKCKs4uPAjYyjYCxNfnHkWTCtYT9zpBfqX9n19JwPFcmJsFhPbZn5FEZVxyv1T7XfCWJ1Yvg",
  "key11": "5UKXSw5zwr3u6rnFDHUbwYqpS9ZpernWwrQtysGKszVRb7ybEug54Y9fkk2PceVrN8tjeHvqUQSbGa5JZagknaLA",
  "key12": "3JaEEEZ9PTUn9wBRU7hJWgcSPtSkNsP7aw2x1UWFkCiJ8WGncbD3WtdDBBNZ6haXaC6zyQ57QvBr27WPTiQ62Hrt",
  "key13": "4oQmUNqGQfqEwczrDAtH3My9sMfawgRvrQk9zQPMzk2JSyxvkih1BpGwJae123LuUtdLotgp9Qh2BipnejNbaq9w",
  "key14": "5V6AYYincUgYNfjSsmxxNyDFahqxkxtb6o9VmPvfoBzGHxoHdsJo3e8kXr3n1k8PAEnF4yMziGVhvibMb74bmMQo",
  "key15": "4BbSW2DLqmxSohm1bKtkfQpnFRmhXNE3nFup3zmU5aGhEWqPWW5opjAQTakEJWJRu12K44tSrgCbw3jit2R9HumC",
  "key16": "5WpEPiu2VC9ER6fpNDCG6TkoTaQwvwhwN9Ete8tKyQDLE5RBijm2RidXmSqSa1timzjpnVUjgSUoTWPitEZtHmBD",
  "key17": "3Ap64r3S1Nkboi7kBiCApsxVazjWdGx9CYkDi1itEQyg1wyHKFrrFfmMGenVFnUSszbAntdfmAEN9n1hvDgTU72Z",
  "key18": "2HqSna6Tauok7165HWKK4QddKCq245MCD2UCK6rWX2boHnAhVmfnd4mPUiv8CiaHcqhRFc9DzxXkhEdcN1CE7ewW",
  "key19": "PbuNcHRJwJmM6gSmGcHDQNkBc1Lr6yaSzMdDFjxdpcBc1X4JbXF9fggMGk5111xZTQgyaWxij5dDuKM1c8tP9eZ",
  "key20": "2EGFgqB15LSQm5KUnQhXuQJSFCDYy4UY4nt4FJjZ2dAsmpAWT9PEsqnu15DYTfn4F4AhSfvVujsMiw1QAetmFrdE",
  "key21": "4yaeT98icnufE8zNKayEhG1EzfAfDJkNS8QtietrJvtemquVHwTVKTZtfUxCJ4s1BcjLFpJJrrEuSpJ3dwYhyo8k",
  "key22": "5weVczs5CotLLq3xfdxc9WbNKerTbaAchDqZQnvcMN7Bo5J8p3QJW2yZdQP5uLRMQbVqbpitNsAUdoWbZ75LE96t",
  "key23": "4eDk3FXc6wWD5KUjReEUC5GCuXAwyh45hxYmr3S9YLhBACk6wHRtsb9pAyjKUwsa6iBNydDcwc2PjGtrpxqqPZ8y",
  "key24": "4eviLTh4LVjPcxeH4d3QeUrKPyWxre8wFjAZFWZps5fZ3S3rAD8qduhrrr4HF4Mka8PTre3dKsZZu4ath8cc4LjQ",
  "key25": "xT7TnFo5LWRYfbZaQxW62WZtLEXcCZ8CXDmo5g3Wqxr8Zmjyav7bDbxAFJRNngix6aPqk5KzazQZTosvVaGB9c2",
  "key26": "4HB2ziyAZMFBiQtruNeSMh7S8NbFte2Ywa7YTWc9az5dqDNCW4hAwzdmvViU8tE6rBVSoF8B6LqPa4F3rVHj73G3",
  "key27": "29Avm2LebwBt8zz8UYfQC2gwaG4ockW2A31SLvb4msx4mEqgKP2XCwp62Cxi672rz7wc2JtKcoofYpv4bDJNrGs1",
  "key28": "5cutiD7svosXtkuwB9YqehBQUcDdD7H5zHoKXfJgiqzKaaQ1Ez5DaqdWYCKRrob79QxMkPBFtHSpSiFvzuMDmpvV",
  "key29": "4uhczDFdTtXZAy36fAezmsSVQNcRWP4GDBj9GswYjjmM9LEzrp6qLNBxhS3SqMguzNW6mnQnRqKM9ug3Nd8vbxez",
  "key30": "628qy5hWP2d6kSomv63i46Z4jThawHYkAjeqTKE2b7NEwV5cXAtNgCNTmRz6iF1aE5sirptQSZiHMMojFBtWYfbK",
  "key31": "3hxM7aum8pTzdu49zW7hbL6Z2cnexjgABYsvnL9MjpmeJbZuiAb7vevniA7tMk3hkrEhPphT52YJrKSkUznaitk6",
  "key32": "jjHBhFtLmgSzSogcw4nxMSJoETRvoX9bnUzRytEy8ART1ZoN4ayoqHy5wMmXgfUyYsHCSdqdtSqLA3vbSJ5it3r",
  "key33": "2RH8kXb5ZSHTSnWyPCaUnSKatYXHrUAPcwnnkVCSe85crxjareqkNJJhVLctepSow1KE723FxVfaRGzsFdGYo2JH",
  "key34": "2fXh9kn9ujM9pzxeSoxsH1XotNZaMYFt7XK39aLQsEeckZxD7gEwccLH4strc6JEdRsrsVvTuHUKRxw1PcBG5nNr",
  "key35": "iC6qtZqgRDdfKheiuTvBWf7FbFWhHcovn3JnMTSredkKAUVMkZLezEb8ohY3EhHX5UZpA8dpiL2hKzj7H1LekNZ",
  "key36": "3hzVXBeejH1ivN5arnBxGfhDf4r7saeafWmCeoNDC17hFahcsbHsQ4h6Ad2hENWQEZ9edmZ63AX9utWBMYMgVC1C",
  "key37": "3TkrmcgxwneJSqa6nnAzbYmvE2Gx9xv5Kxt6oFtVeJQEtcDiJx9qGLQm26esPpN8mK6BBCDmrkrMqnxWG9SbJnYQ",
  "key38": "5eKwb5EgdmuFhDDJFWoMzvKW5txJcGMvZUSMb9uZwnFN89qE12mGrTBvpAVgT87M3751A7npZE1XMiPj8vEsJ52A",
  "key39": "61SFkug5RVAYKCSY6TMBpPgS4d2TbxJnUaFDKNCd13ZdLB3ubtbLum67vqcxLRwCcrPErWfPCTMTvF1zN3msmwSm",
  "key40": "32hdzSN488GsXChdNywdDStCNxk2dqbWr53EBafV4unvKKmUosPNUoEpwDvgjgp5EqxbRKccMi7bU82rijid8uAY"
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
