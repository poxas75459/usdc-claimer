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
    "4meArQg6uE6csEVUCLNSu1ngNHQyWi1a7wM3E4yQkCvZcbqLioGnHZHqhWRbry7JyLUeGQECr1aNcFJY5nScerXs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pe5z24KL9noNxRivyx9AjsVxJCvXcPe32Deon2pPxUDipcMAkCAFaXLGP1VXoKTid7aJNnPWQQbg866DkyrkKmx",
  "key1": "sAJQDHkBk4mmVzrZ5wD2cXQwHSeH3pjABzYNdbyxwR6jBdYFMa9TVuBf5afATkqpLzYJ1fZNTGBzVCzjVixFUb6",
  "key2": "4WBk4WAkZ1jgJGPPtSXySW75S3L64QP8f4XGsqsUZj3Y11RmXsCVCA1tu1duinLzn6atbhbtxvhismqkAVGE1wau",
  "key3": "5SePDmbpwsrk84Ji2wFgpykwbWh7DqyTg6iDDRwtGiUSJpHNFyMRToq1yXRQnwhYXqR6Qk5j2ww2peEvBvgehtLy",
  "key4": "t9dqtwPZB8wwTqEVVrt7G2t1c38LvFPwcHmqq3YHCc34m8fkJC4AsAuTECVz6P849jdCRGhykdyWXm3xuCtdoM8",
  "key5": "5M5XjrUgRgcBVqKcnnoa5xBZ5H83BUTCWZa95KnexdRLAxQ8xJoFEDhuiKa9QN2wDdfASzumHSVLwzShgKYsDsAv",
  "key6": "4H1TZXwJx34eTmZAtcHtmCyGzqi5b8vDbZ5LvgAQiYVdYULfTVTSDyUPK3Cvehut2DHntvPyxAL99VRNuYKkmDs5",
  "key7": "5CqA1YbyX11yQ5riRxbMSLau5Vk5xRt48ccwKMGNG3nGPW3sdu9VMzkxaEye8wigB9B1AzbVj9KgqnjQLAJp38gK",
  "key8": "55BaYhBBQycrNbwcPwHGnptud2m7oDwyyUHekTbnVyNeifJgEiwPBC1aEUH58bN3AZEcQTMHD9oLr7aXaHMTqdr6",
  "key9": "p9uiFdXzEjRZwWRaqPjPdQSNUYstc7mG6AkTWr3wWh9f9VjhtCm8dDnHqRxysRKRxoB6NEU6ECvLznxbWUBnSgH",
  "key10": "2gEb2NEzgAyLnvnc7AcAZk1j9fE46R5NhDgmQ4wLwS5bhtfZiRHkTdDJo9g9EHjS9T5RshtSdPYbTBSjgyxyGFL1",
  "key11": "LsEpTtErQbmz54Hqe8BhG8vmi5iRTk6jbMnWQ2K4sJdjbXcs3ttWCWyb7AGZN5kGPUtna97TAmfTvaNS8dhKmKE",
  "key12": "4inoHvhfXben7r95AVYpPjeSmeqgoCzGRoDX5MMWUaK2oyRjmh1oJUaqxQNkeyCwME3ma2DMDTjQDpdZkPcvRxbC",
  "key13": "3HKFbyWHFTWBtXu84vwfRLmbiS6RwMdHvBAhPM8jzY8AeWmJp69zovGk2mvfEcP5WxMiGw8R6pEx2mEwW1oo7djK",
  "key14": "2iqcduau3pLHzRCgFbbP6sricuDRsJ7AjrH6SVJRuxbvJd8PVyh8uWjcrTnjV6hMWLDMNcLSifCWsxNKCUutc5mf",
  "key15": "4fA1MPNPaaNFNRZa5HgBqN6HbQ6nty8zkx6gvY2QTJu18mGSQ66iffAuSM7LpuspLXLvfUdTRCnomHMCboqLyCTx",
  "key16": "2cQHsRK9oWUssX5diCKuWsA212zLqB1G8TqgP6kXAyQAGLG5qXHsAdBUweDXZuDkTTXAzJAS3HuN5eZYrPiBAXuB",
  "key17": "4tufWmyzVVzd8aRE3NvCqn1vHEEXDh9SjCAMt3xjNTyGv696P2h2WfGgoiXRa75bAVe3PvG3hYhmMm7vx6UFZZvD",
  "key18": "21NxsgM5PGYDr9zqwqsuGjpsk5diquoFCT81muAYWa5DJoJMYrspjZLizvMs7AMmjQyPKLQvoXuy1fk9gftgr5NW",
  "key19": "5v59eS8aiSmBqCPpW4HW3F9xf17H4hbnokC75z1KPaoZaWSAC8giz8SEXTyHWU3xuEkA5t2286wGiAchbSsNT7Wt",
  "key20": "3NYsuda3JULfjSR787scZ2W5WXZSqbke7e6epPPN6r9PQ8mhEKZdzPUd6WE873Bpi4BGUcXdHCk5ApaddsggG7YL",
  "key21": "2fFSb4hwWoTzuky7VEdaf791FKbwEv8WaWeDStoMD1oK2wkiQ6EMeESd8ZEqz1HD7razoc2uPvupd5bpqfw2oAuZ",
  "key22": "2L5bQjmxhkpauKiRANFA6DN1ufz8DKBPLimJ5pcSU8DkRCfgeeJUtLM5gMRtnCFExaaLWwnymGZbwsafgyiRN1Jd",
  "key23": "oy5Mxqt728UM8zAJFaGr6BNSyfqVJ2TE8g8woD9mbiJRERTExWBwTuVRXoQA7t8DzrjU91cS9BojakH8y1T5duR",
  "key24": "3jMDtzTpnDZKLytmntet8CtWzr2WyCSyUZET25UgykAuVmirGUk6ZP7j8MGh72FPH5fsc9P1dTs4fE4LYSVJG3rJ",
  "key25": "2bDPFcjesuS271eX4hGuW6NuRekEKSVaDeF2kAvaj245E5VyC8jmWNdjkHkMjPapNAqbstmn3EXU8xfkLeRsCDnb"
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
