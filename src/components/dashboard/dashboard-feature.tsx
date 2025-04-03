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
    "4kbzb39qA3ZPqjQj6v9VfJZwykdCmHn7upkdZykvGgbqt6BRdoRLcbMQhveirwtWwYVzbFSmawaZMT8VnFXkDby6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EafbcdYatAduWoYRXG1nRM9nBCCx6UvCWpFZFaajKMHnDs7yoUvr68bYNtXVhr19GN3KupJA5MLZrHdbgVBQSSP",
  "key1": "xHV7V5nTRzHVNSRP4zVdLK91JWG71WCoHMZVdqkTwaX4yTfDMUuPMffeUgW8atRppjrtjrZLaiAzVeEpnesthLu",
  "key2": "3Y5GssL4SN1B4t6RwvbkZbzcojypeX1CscMj7A5aUTNBg1U3ZDxArH3NbXDqBBWEjdSNoQEvxNPDsTSfCpAaaExS",
  "key3": "FGHAseV35G8Ksrus6sWTfu84sDEJ9JjL2sCwGaiNN6WbHFU8JKiHe6cjJ5APQnRRuyaNRVVf2S95AR3WN6xWucb",
  "key4": "4jSDrv1kFUZ9ZTGhRtEcMB92dW6aSDH8Ko7MHX39R1tNnF3AEBMCrhRyhyY8GZkHyF7XBLKGuJj49fm1i4KjvnhW",
  "key5": "4Sjoj7kSMnpPChbYGx8Di7BYnPnsJav5ToSS16DsbBAwf9SPMUBhWcB11YdpZRmDi65us8Gjah3b7Z9WmPUUUnB3",
  "key6": "4yC5LfhGyYpdPQundCr6iNdRzLAK3wkzYxcnRnC5Wh1N8fdDoYQ6Pn2ZeQ5Jsjy8AZGS7ZwTN6g5ktEV81a1UZQj",
  "key7": "5J9ZG6228w4LPgyEWZ2QxhiPpw9fTQU7bCmbS9Tz26GJiLY8CtTdbqS2MW4rCQhiK99S7oqZ2wnd4BxaryhBRyxW",
  "key8": "3tTLSw4CGeEKgXXgwc4qHMsukjw8k3Br8KvTBGoSUkKNdxn1CBJpCVgQYBvcWKjUxJ8PGiNj7EYrzxAxbaL6g6ik",
  "key9": "4BCMcP2X3P5Kcofj4wTvoZ5b2jmtTQTbTNFJ7WCqCx9iQrV5r69PwBfc3Kt25bkpj4baxkf38PVGPdomt42rv6mf",
  "key10": "jMxo2gBUTyK7SRzbxaNRaUkwGyExcEjZK4opa6yLencY4Z2Ymmzf8PL3r3YRmtmyyNdhkAJZRYx4iggpPCYoauE",
  "key11": "5FUGLsrSc9ufqpP9ps34wuyAzjs7XG3oi7EwzTBv7NxzMnYgayW3XJJcTERfhE5HsXnN4jWG4H5snbaCWpjqFJPE",
  "key12": "3H1ow7DjRyNWeejiBPfNZZCRtrSDPDpDtes74LUPkLTuBczuBw5JRXZjD1Q3BxnU55uMTdrtH6R16EhT4N3EfpUb",
  "key13": "5S3rLTdBaoyQhLp6f7EYW4sdWLeqoQRwKgHUoyTSZUfLdQRmd1cCVU3k2CKeF3FkTbUjFnyswrGvVravr7BKDDP5",
  "key14": "KbmEhA7Qh38qbHhmg9xHEBrm4gtryzRgwA84mkwUF8DR8nSgJCEiFBxUnF7QAr5FsyDRqHANncXkM66Vpb2YLpx",
  "key15": "38j2nrv9XkD8qfQ3tSNikkJ18r4gEE39Db97aKAtjJZ73XggmNMtj2XJoJjT5SPH83zpfjf4cSvTBC7zQjd1AXxo",
  "key16": "WxBCAYVi2aemmLHnEEyDZL9Wz7SwcUFfkA7PnR93n8Pq8CZQVkLUqr8UzjbRbQWkFybYLwi1CzBDARTQN49dYZq",
  "key17": "4MehcgCWpgmUwd1sYGduUf1yBKTNQCQJ31Dx1v8n5wia7aapRgf3oducSMcbDiH2hCJYgNof74SRHPUdCVo1rBuT",
  "key18": "uyjwGnZQtQQ77pRwbScsdNPEqMquN1yzjH11j8xH8bBtJY7qj7W7KuTu5HC34jfpoZXLmxbCThLe6MBEiWepCeX",
  "key19": "3mzokgzADFTa21DYdsncHdr11TTe5PTNxby6wUpdGHxZLt7f6aHQSnvU98GvSarXFdcescn8h368iJkAEQ5z7T3g",
  "key20": "66aTpkMQBj7TJjfCCrLUsC2YbveM1YNxNsGe9tvcjTEZAR9BoPhTEgMk2s2eyKr6kC3TS4TqdbjJgxqdPZBcBNju",
  "key21": "29YE2TGcnrT6VVTXdYZBCjA2HTVMqKy9YjkHLJa4SX5vLNZVEhwBPeQaoRpmZHMYxEr6n1z9vRSGrhjPsicXVpxu",
  "key22": "4yRjLXn4yUoMr5f6esbe2aaX7M9tqLKgVh17cmkXnCncTHaoXMxm7aWebqmBUYX23ifGM5GqoV7mdoMMimYdXhe7",
  "key23": "2jTjo2vrtEHqE2L9pg6taVEMWnnqKmcZoetxm8tJcopunq4j6d4xwuKoD9yJ87YeWapvChqYRjCzGiWKcS2ZnEoR",
  "key24": "44juWijbbmKEMQkrgxG2RMihCLyxwYxon7aEWCGbDSobXV9aUHUYxFZQHCv9puAvycG9G4QhtYRyWqWNijLpAPBG",
  "key25": "rcqAqWukwEu2ECMWYkT6kJsX9kK3cawxAMxPxBGc5i4V5fGvQuGnUnvKkfZVqtrmNr6Q3RkJQBDWKouPJsLB4Hh",
  "key26": "5y3ypjEErP7HU3LtwjuBfVJ6RVwF24WbAEwpAdCHYEiFZFNXDb3RcAjyLaKXnt2KBZULYMGgqsvgZ88b3A8F488V",
  "key27": "5c47m8BRaGSFoJaRif56g3WpVxqU8Aa3RQuf8ECgsAYRc32GghpwvxBKeiCkNmyUjoeMGFnDw3efDNfHWJY49zwW",
  "key28": "4EpsMrmH7LuQvCjNVWjHQ3bHBmkG1qWjuk8jZXe7sfitg9a4kimmzvLcM3LWTcpev82TkgZittZyN7mPdUGvqP4y",
  "key29": "3z1h3LQw2KEVVRbNdK35F3pmiyVzcWpsEvLNvhmtZmUzBTXv8Gova9Ypz9tfRFjBWs9PyZA1RfumSPZ4FRn91NUT",
  "key30": "3qTqoNnNANeCd19jJBMpwynnLrUA7vKBmu3hdT86ag5TEi727GPFTdEXFRsWEPS2a7DUgwYf8LtYCWeWpHk6y7TG",
  "key31": "5sEXsbhrjZE3NeTUyPHuspRDD7HKGLgovyopfG1Nk56PAN5GC7ZVPgmT1741RZHa6m9gcLLzYNiJuERDjg3H26ec",
  "key32": "4Gx3t9B11VSswQ6qb5d3cfckyvSKBAa9Sstfa2VDvCzu44ZjDUBtrVrcu9UHqzsPNgvozg5ch3YWpe3thcsNWy9t",
  "key33": "52XYVLq5R75z5H6Ki5bkxvmtA2WMtmK3a3EqM6Ccek1p12ypuXJSne5m5s3UamgCNP7XbTiSwjdSCZ4t3ihUqa8P",
  "key34": "4Vx4tsvFRwLrn37VB4CTyicZwfGdptiu9RYxj1HXtwM2F3SoD12VUx5FNaYTMzjwxevfmQ7nHYohmgSP5ZmtV59Q",
  "key35": "257BUo59SR9QqM9QsVbdJmzToGRDsR3MxVsn9BhC7s1xy5LgNc1XP7Vw2zCJ1avGKvrND1bGzXy1Ke6FMKaceFSe",
  "key36": "5DskjoVGaNEq1mvifMWZUyq79HTQuaATSC9qbuwDJ6RUVUf7PtRqfE6udQeKbfGcQjqxD5wQVTfXar6jy6eoKMQE",
  "key37": "5FgR8M9UQS9Cqe2ucT8h99HHrmr3scr5ZqxjbgfbKXSGbWr5d27A1q8QAq9XNz9i5YrMTSVzZkh9cFfEqYdedxi1",
  "key38": "5KUiZCSuQYn2H6HELVkBRzCD9eZSFo6BvevgZkUwjiqBuX28996hKD8SjRSgmcBmycF7nnmNzueF9RHxVZiFToAx",
  "key39": "2mgV2sV95Ar7GQ441b2zkGr2sRXsmwuD7NYUJUNtwEbPfbZpsbNrFULVw2WiMHuyX7DTZeJc5afbLH1hx93ac6cH",
  "key40": "5HMU8x7Ugg41w8LP7EjmRvLeexVRpQ33jyBeUuo3DWgo2NdJHDaPBjeFmr84S5Q7hSU9HPeXpeF8XKNgibbhftEo",
  "key41": "39uj1V8c8uaETsLQYe5bnsSf4zc2pAKpUKHFGFH9XFbvKs9o5hAKydkat9yYHn8VuMhuLFEHp5LyehevCLkS8c9r",
  "key42": "294bcKs4WuNSiH61RKuqphugJgKXrnEb8tzjdUJdfQwJqnkDuMvU2R9Co1tf1LLBxkJtrz6CvWGmkH9BXR73zm5i",
  "key43": "4hsHMePeDb9hgvT1pacNsP3iqMMVNuYfYUYWt3aixg3L4vdWv9SPcJHGcpqdAXc7G8uYTcuAxo51ifSKX6VZvUdW",
  "key44": "4UvXaackb4tAYCoemRRJaohcE5FnKKfRjG4yyr9mgxKi7YL8jBjJkKTNzVNjucsyvywGdybiJsVaThEE5FG6neSh",
  "key45": "5pNmhxFgqFXzhAf9KS6Yo5WoBbAtFd2ZVJdGgdnLzryRBiUb7QcPRpekLZbY8qtPwRMb3d1Yi8kZmcZ6EgY8gamx",
  "key46": "3NZndXbeCys1SyxeGbZQwX2naKdTu4c86r4BDXfXpeweoGFUJWYBMcDjtfo2MzFEi1xFTDJsNGUeR8vZzUGRyeUm",
  "key47": "2jpfDWFwz9JdcsViHSix61vcxNhysGBTVgkZUWLdwXa1CnKHzg6GBxmi5ExGkSd7iRPxqS5Mj7HHai29RbEeb3Qr",
  "key48": "3cBNTf3iHjBe77HgstnEFoAPg68qKXCW2XvxNPCoj6QAJKk6Ww6Sq8CArgbDyQXX2jHfNrQxyuhvD7ZMyqNLVMXa",
  "key49": "cs9mRjEguukWhboYrc373eiwnHFNPiBSym9tNhqamFuTKbo5rzQuuDvZjYcBpKfHQaKjsYDDWSg3PeFE1rj6fgd"
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
