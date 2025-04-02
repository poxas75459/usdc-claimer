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
    "4tmLh5FdkY8vCBZqY4DFvJsnhcRk5HhwSCHbLRrgcNbgMEUBQzxEdXs1ccwjQsqYo3RqPoRoictLg1KaCXvvnVYE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YX3cjq7Qr1Cg2eJfK4fPcTkS5qnpT5kqCq15mDUXHnahiXNwFsUVp5D7zDUcM5aEcq6xudV7AqXK2rkyc5oecTi",
  "key1": "2uTQfHpdvhtByv2VX7M4No8rwGtMZaQ7HcBUCGqUNgS7jE2ZRkMyFYRH6Nd6fpPVf4nWZ8fvEbnTZ7sKQ42k6uqR",
  "key2": "4XD4C2b3uSwE8bzXWMUJrQDrQLxGuePkVGb6436N7mHahd9Sx5shhU8zoc6Lbb6hHdFP8RaTUp6Xcq4nz8Zk4yAb",
  "key3": "bfNHiMDrBnoyozkLQYqQwCaiRdz2PyRLqa4ao6rbjntuLvAG6cuMCr3hin3xPo3YdBANfvviyS6WykPAmqud7PB",
  "key4": "3uQYZGNpwiiUyMKkvDHdmNTY3t7h9PFPGqpeozQiuJGRMBsCu3GVSe6ngjxMLxpFuPtV73CjgyZJeb7eXT7nruMW",
  "key5": "333KDCFdahmuJuFntbtUxt8pQvXJrvECq1PFx8FpesijZKLLGTU6ajdBEzFkPecD9hkZJMiMz9ENmfe1iWvdKHvH",
  "key6": "2ZkfFHCnmXr8q5qccbrhuEL4bEzbLXoWpaYxNuN3Fvpe14PqJMUSwbsmtgHrFd85P9rDABatK2md9bycdRLVUHbC",
  "key7": "4eVrUk29PE2Sfj6uu7qowGzCdM36saFmX95T7rcmm8w4bLpcZSp47S5PN6qFdMsgYKkxpHY1REKxeEjCupPxcjsr",
  "key8": "5KWicCc5X8n8djWYa4uerCAHrqCY56W245Z3Mvm3pGKZtBtb9pfBhCmwTsNitrcq3DpaUYzg44EYkV86LYfgpsWr",
  "key9": "2rqiqaa6qqiHKE7fSfUD17yUjsVEmF2iRhogdCm5R69JrDuxFizyT5FPDrfBkZyZofLHKHZg8B3rhPRFpduzmqdf",
  "key10": "5eu4Bmrc7vXLogR7HHuNkyn9FQ3SKXstajbDFYomBqTBSQKmKtTKcEvonLK4Dr87CZka8rjxX73C1ETM8Nu6f1BX",
  "key11": "59eZBTKNP98Wm3WsrfB2CF2CHJ9zQM4DX2o13xXoqoND39D1G1xC8Nqt5zCMwvDxdSTMCVcx5AkJvFpiYVCUjwAy",
  "key12": "3AJ4uBEHMa3YPDUYMRbyE7swu95ENJfsFi2nW9niMmuSdXHkmfbVrYd3hCPdp1umNcowoyhq95gdS4LyzvPBTvir",
  "key13": "3sXAvgegeYwr5b1iEhsuysYnVkfsnbp73Te26mxmH9wUERkEBv2kuyQuRVJDH4rditgA2ShF9GMXF6e6mN3pN4Pw",
  "key14": "2tLpZkhirpQySjb9zydMZT9mqp49hkqXSmJjZ4ZF929cHAizkeWHJNvM1wyJnBPwAxF8BGSceWhVimTw8LTEpsyy",
  "key15": "3SCkRYA8KXsv7PMPRoWZWz7UesG1HeSHUW4dRkTzLwk9Rhjw7DyAUzgHFiMTpz9dsYZmqJaJAy3PL94QpzY2PPf4",
  "key16": "3ygAnchz1m8GyRAxUP4qCSti7UYRmvBA85YgxhhfDFicrDmGgW7CsUAYkNFnMgfHhfQWwQsebSswVPrPrXN2yrgo",
  "key17": "4nsaHUoqShfsiH3nnoGHammCa8tE9RmH1WWsbuxtrfjtyMTsYDFzZ4wfJXbEdsSapDNeDrs8BFGQbNkNy5dK73RZ",
  "key18": "2RQbLS4ZTssh8Zux2So41F4j4b32tQBkmVn4tqNTnCf5R8ywya5aynKUdwtb5fUmfwophbqJJKb2HmJVxgWdP2Ep",
  "key19": "AgJoN7UKevJrKM9K452F5X5wjACUX7yX4SJghmqft9AhhuJmnzL5RtDu7EjgNSTytuatR9g1Pev1jnBiydYKi2z",
  "key20": "2Wt9qDAFhbevzmWCiPA7ddNGRmdfoJ73v4u8QmsREmXX5uoxYbpfyW5sqG2MAgXJZRm7CfiooRTdCzFg9MN3Xt3q",
  "key21": "2HvDQLRrFh3mi4kEcsxficsSH6LLbkrRj7By89vk9XerHjuN2YMYMNuAiA34ENXiuR1MTTdgcehrFcR8dhUwyf62",
  "key22": "KEbJKLDNSkh2RjtmRSLm3ifujSscsgLK2xTaWrCAMaXQkevkF8K56hWSNSsrTQPEvNf3YzNuX2oxCsbnDiGUhpT",
  "key23": "5KDtJEkqD32ePugzbGzhR1nuf1FQt75DHJkUNwKSeMjGme6iec8Hb7Qw1bsQ59c3u2PDLuTknHewWDkWoqgShMkp",
  "key24": "47YuuLttnJwA4KX87pFbt2ow2tUay3yLZ845QHQJNyzBroFVuHJBciZHR8kxz9DHZ7RETqyaYro5XeqDiqaRCSko",
  "key25": "25fPKCKJCw7QyQGkv85gazjYLNKYEmC1NLRX6amxF1NA1nRgXyjJrdXVNg7dfyMrRfyW5NFb55FfdCsTVfL47W22",
  "key26": "4FdbLWqGp9UECVAyc5mfTQbKBCe6kfVWhYYJkvtbYt7ajER2jAqftY864oYUjdZeJuaj1STBGe6UoCUSyDhwGtEP",
  "key27": "4vvsM8oLy67BzSQ1jqowyRHRPAxDZhS181ZFt5Bn7PPsQ6cdZsJDYW5Q4miXVq8RhbcTpHVUsnVTEaVD8MNG1mTi",
  "key28": "3VZDPuXhEBqed1BP6AJFkb3N1145LByrU4V9xKq6GGDSWq7qUg9pYXijCWqSDpUhcZ15NW4bQAGD8jU1aBmtw7Nw",
  "key29": "5cHtgWbvg6b91yJzd6kxZ8Wqb1U55FssDB4x1E8cFuffV2gZz85tDgMLB2xMhN9EawMZFQ4A2ATwBybaDBFFudAm",
  "key30": "4Fx6H3xJwBW7isgfeg4rjJKeaGH5e2SkgrJ1JGEuPiZAkwVpSHMrSuBdoaAxoQWe4T8XR1Qzf24a2EJ2Ku4RgitA",
  "key31": "2BpaDmw1JxLSDzTVQdhUZ456hvETZTQi2KmyfoZNiATcqZrHRmezBHZKdkUw2tnzKj4JFPdLGbpwBv6YDa9ue59c",
  "key32": "HtHdVrhcDbPG5kxWz2AiuMyAtBu4tPSSttFGfzjZKKQt3wVmerH8veCSfb4bqCEXjX9hzHUcUmybHFjZTvW1E7T",
  "key33": "2Nd4oqR3Q5LnPyjq7ZPj67LgaBTAJ5cyqHLWCrEqpRPN4JkHud81hEnqgoL2EdYunSPi2kzRuuXPGfLLKuS2YSn9",
  "key34": "5KKSTRtW67xNM7XMpyB4PhgyFza1pypSFzQvwk69Xip74QSzfvGTYx2FH1JcGqWoF5ddUHnLkbdn11k83KPve7hT",
  "key35": "3Dj77LB7pXYMNzPFjgZRBF5uweaZathJpAvTkMzkPqB2mhx4xu7arrDkpYDd1KnQmhnNBwcsE3mK8wyPWpbTnU9L",
  "key36": "3j9EFuvT4ARL6jYrptWTuh6fhvUeBWEDNtnrGPpR7SnTPQndkaQMiy5JAT2emoWmZVamd5XrFzAkACw5EfVkr7yR",
  "key37": "4MBcJoNTUs84ieFHtrHqNFRg4vY7jDwwuvtRJeQZU61Npz7cckWcPR5A3YEw94zm1GAht26JxMwPXJiCZQhptYeb",
  "key38": "sYHvoZhBNMMyFGo74Yo2FMrBKfZi5ZaiwtFJTGwKVHGd5F74injWmbyeNZf58ZtUQv63HxhsqHoPthB2bWijZaa",
  "key39": "4DJD6p9BmzkpNeNnQGzQvyZq8m3V9hxfuQwAUMjLWXANwv9DmsxeyAspeuScbC4DrvMcMz35tyrqbNQHNgUvVP1Z",
  "key40": "AdJesABcD4yqyifdEXigEa7BEzXLxL5RN1nnAv7ypcvBY2G59SRXxhZeyttvzfk2KMLa3PnAfjh6KFLMQCrdEWp",
  "key41": "2NsbEFqTL1WNJELzP2YCxEHXrpCJ4Bx5t61r8XTh5qkuemtBPuZMpJ2Fu5RT2xBMWqPju4zNoTV7UGSHHmrStZ4W",
  "key42": "4YpcSUGfFD8GqMiY2UJGBHvDMzLh2Haa8YBz1iztUbHAg7yrRZwz5XeSXdNaUoNmSmiQuXpzmdK6LNmVt3dNuj6L",
  "key43": "2QcigJSTX1qTGoYKRGNnBJF2F5cgqEXX1xpNStBNKi1vJza2PHry68z9DG8NvM8fTrKnDv4DBKE8B6h62RwsejxL",
  "key44": "4WTRJGpF3a29TKYsfSSSv1GVW81JMhHDCm2JHLkqvzFjxhhNrdHLGjUELEgUweQSEgUVWyKSDsVspRXinmDJmBFj",
  "key45": "4NDErFgxjK1wWkBaPHhtdQfLeVgaqrtgfBfCxd7eTxdYBWDBraGqA9ghDX2ThASqphovnfzQaKbEXEA9BfeAFuZQ",
  "key46": "2i9ALzMY88dEkEiF6miS2w9No5azyRHxAZuWjAZLE7fMjxSNC6acT1zo7VydgXZwufRwMkMxrnM2T6n6xgC7BDwW",
  "key47": "nzKefXj7nuYZPCWCANR4RTWrNkhSMFCBCH7zHnCjzLLHDyM7gj91CQ3cWj1GJpciRfsnja66dS5mmk7P3h6Qg8W",
  "key48": "zH1QeuVkWfV1V9kTug9oSxxaz2djXdQR2csq9mPsqH7fSpxeTRPgzmBN41rUm8NiAPBpvZFuUtU4f6R1JfUpm6K"
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
