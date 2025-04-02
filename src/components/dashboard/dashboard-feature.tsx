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
    "3jmRt3WWewDS6SonKpUqA8xp1NJ6x42hCRVktiaeDyDvNjzEuqThn3zTXRkb99DfBpvWJRJc2EN9asZegQzZsrJN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38EAKEy4QfTgKG9vkuHGwtm1PRJqSw1TGV4CRyrJL94TzxjE7Qe2FCFN4PesRVKcL7nieJBBmxQQf962vgXug4Sh",
  "key1": "2q7fuNDuu6jJLdGpnyiqmjBRRFPc8ZScp8EVABs1ahpZDrDszrvpht1D8TdAM1UPZQiR5fQkyESPcP4aVuFnJMAQ",
  "key2": "4xu5rPTrCsJoHKtmbPt4AVViyCUU3eJGhB8UvbVPtcPkw4gL5Y9uVjueYus9P4TRRwvAGQYJu4jBQeatJxBc3vWj",
  "key3": "4iNCyaJfXT9xxUP7siYdaSvBfj3rN764Yqikwf8DoQ4Ywn6EJ3ZUnZK8uR4GfT4rgeL7DwSUzt6doBBkfSLeWdAX",
  "key4": "4SSYqe1tBUeDtGWxGpVcqWv9gDFfgn9cKgRgcgaxPXbC9waa9DTUGhaAw2PJ5PtiKgj9Rx6Aork7wCiNyCK4zqBJ",
  "key5": "3Eb2JZ8ctCeZLRGnXDoZSkVzXQCmuKH83cWcw8tZ6MLrtCU7kxESL8vwyDdwPkJaXCdJVMQsCNbviA2J8U7t1QNC",
  "key6": "4kLLn4xntjkMAftNEg4UeFzVVwJScforqxK49QxDzETtkcA5V7T7LUdukZNjR5oteZjdNbbz6FBL6y1vJPzwwgoG",
  "key7": "5NGC3uZayNjPamgCMQ1bTJ4h7LXf4cDYG8y6Z6XQ32853F7ud9Bdz5jeWM5qyqic31EpjcWiQzzrEvs99SE5cv4D",
  "key8": "NWcgBs4dG8MURTUZSzkntthd91CSZtN1SJZ9n479ik37Ji4au7Qb15YqDGpiArxfdGzm4GwhkZEKo5b5b6KYXDd",
  "key9": "4rMMEP5VVnTJcFU78JzYGkMSgT2L59A2xKbrdVHh7qvbzZFqoFeMGbVqhT2uzVzifAtSRFQyn7hyytFa8qnNWqWi",
  "key10": "KpR9QMThVssCe5HJE4zSa6ibbqF7aTmhvwd2jTXTd4BzKKtMVfEVPm4yv2bcqxjPLdb6UhPfvQmJ7v1C1fDZx7r",
  "key11": "3pgSY1Qknj1cfV9LW4875jkU7dC4hKomS3M6mYePmCqMLhh9ggf4P7hqajEad2147SYZgqgJ6LyL4ANy55NUy6r6",
  "key12": "4uCR6kR67A4Jeqsn3tSMSLmCS5LJ9PukDsXzUEQS3hhev3fKJnCapKhzo8zQFaiq6hjH71c9u76nXbLHRfibrQt7",
  "key13": "5zVs8mEwdeiJa5ePZ5e72DSCtXffGf8cMNvxrYXyju82fudYC5dq2EoBNRTgDbswSjhjqryKxMQq9PsMDzqiZv3g",
  "key14": "4QDen885bBUawG5YkK3gHUjEWiNzwWSF8xXDsKTK5DSr8o1pHs1eCn8ShRyVAw2pDf4ztuY42JAmRciCVvbJSu9Q",
  "key15": "4BqsiUMotrcjF829ikhF5HUHX4sGo2Y3AmbDgXcVWiWaGF7HUVDntyafKTzpuZnMq7KLWe9WJn8wUdnjRJ247g8C",
  "key16": "Z5FVHqxty3tTMt6YNkLSd9dy9Em13Eb9SXSgmCKaUJmBd3bbvPZBcmybDK5V2LtTFP95RT9aVqwD6hVCCD7JPSQ",
  "key17": "4pFGMRKheaYMVGzyfaY6iVRbFSNyKAFzvpTHp2ezf7tRtsDnftfKynJpsypbn68tRz4p3nvXfk7BoXsYU2Q3KubH",
  "key18": "5YxtBsyJmGqMeB3XxXymKsbL77Qa1epbLQCSqKMQt8swYWjjCBLVCxAsUbzWrDbxEdqRimgBNaK51w12on49vxsc",
  "key19": "2e5BADTAdcD81sXeTtZ6adtaaRdEA1SDNEYdba1gBc9HjFDAWaTaSXCc1Yf76a38g7ZYGFfedJnanzDEiYiAHNrT",
  "key20": "3Hp59ZMXjsbx3FZDA4ZJRbMCdykA46VxW12a42xB9csCsiTbQX8ZwBWWqbx3ADFL1r2toPTAoYCbdgoKGwcX39PN",
  "key21": "2TYGu1mTrv7qJqC26n4FFctDyYWiGNtqJPeoyXCAJLzEiTPykU2zMKjWKodZyQK6eTdYJtcfD3YUhm8dhj3fdaGR",
  "key22": "5tcNcnmdV5M62XsBWcZR26crHvvasrPiCvjaDKM3aJP2Xcbtcc2bJXavKShb82vPSuNGj1TWA7vsfMk51fspStMk",
  "key23": "2BgFQ7ZhjkzTKTpKTgXT6m1LYaV7eSfBPouLtsVzJCa4aRkhpTc8DvHF5MH8dj1mVsQ5Mj68FonNWdNSuLDktmHS",
  "key24": "5L7mriWQJbtBKeo1uNkpBECVfEn7woB9CRzFEhzRH19JieWh94BSoYz6MDyPyw3aMk8T4TvBtSUR61eQrecS2qgf",
  "key25": "cBcRCPZYJxrn2sbchWU72zNi3aPQcJhDZz4qHZDiveh2sy9P1E4d1h9bSmDFwUSS9Jha11sCjCD5JXbBT3pEYdm",
  "key26": "4MqabQC1LexxthdMj6o4Fjh1wacb1NVdbUfuQW9mNMKoyAkUnWyz92yxK1iCUEi2oCyu82Ekanq3j61XWMuTcDkc",
  "key27": "2xT1UbtgUpsTaffssTm8xfUkp91ec99aLqext6QCVJrdU3SyrPmNfjE31QTp4dGZpuaWoJMicSaMug8XZuQrvgRo",
  "key28": "67fuAXTEnoGs42Ne4h35VCqbySSCDyyEnZhREkoFfLgdZd1WfjKrHirxZBr8ecHct2szdbfeeWbqpYNeC6iuJEVk",
  "key29": "4yMq1sTEovMoeCjAj93nUcNHw56xVWbirkdHhvnjDxLEp8tj6L694fKhB7KqFryFLFUS4e9vfzFh1dgr49q6g8Dm",
  "key30": "az9pFwR42vQvyQ7LZVqQPsvqx3ZAaWv8JwXeyjadiH3waLi6Vvm5BFn3WCLKCigxmYtCFf8dZV4njDuPtDoE3Up",
  "key31": "4Ah2PG9D7Vf2gQgQzd6mKAmvnMwd3e85GQJimqeNcYnq1EtE1ymW3SUQpPzaFowNnthrfPkRrZ4Mos6ZKqTx4YHR"
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
