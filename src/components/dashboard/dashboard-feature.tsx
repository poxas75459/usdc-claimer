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
    "5mBVRkPezDnmHxTZ7LztDmseg53ucL6962JugpVh5AneZSo73UAe8zS4HJg7tAYCwXBzAP65dUwt4jDh8Bw9sCTC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c5uhTURPxmqgaVweLdTg8hUhupDTvZTrhDM55QaKhh5sxG37mzGuCNRFTx7dVK7iM6NEQAG8ujZ1dr7Q5L5HmbJ",
  "key1": "4aK4wqSEAvL3ZD3KWyPbCvEFQqUtPYbstVzFW5DDnD4YyDiY4udcZ46J29QzuzkX7YMqJkazuUEdqAwZ2J6RPs5W",
  "key2": "521FtVTirdYFogtjKanNei7Yf7GpRK3fPup4JXVJhwoLHAQHEBbY2wXDMXTvX7KAnWCbJTCYNPUHsgiHsL3G8dJn",
  "key3": "3ynHjfA9FLR76WeNDf5psGKAQqdx4cktLaNpsuQysBq9e5PiFKaa4iEQLhrVsCSzKntAXHKNjYwpoAMrJYVKH98b",
  "key4": "3V1GvW37RtKdDHMGpEeoK8g2P5vUZ8K4VQzgB9cgoEFmwA6ctnimaTFHhv1HCfuSmySWrT9kwoapGZPe7QTu5gjK",
  "key5": "48yotRGGzFY4CY4Kz3KjoAtXzEA8ktuH7BUW3hFeay4rF1rnVNfjCAvkrZuWoUJ1ksmWVHSUCg373igkrAvNcsXv",
  "key6": "5dChEyLViwAC3dbqL5Qk97Tbxo7yZhnRtYMrB666dyrqvwHYw5DVzzqjGuqQeAVeVRDEeBPazE511TFJehhtVyRt",
  "key7": "59syNcbL8SzWcsKXNTxNSKFLwzkJdaG27LHS4UDQzH7gputVpGwzSGGyuFMGHq8ob6Rb3XA27XWbM5AmqqLaFBqk",
  "key8": "3y6r8HJbFy5stjDS93bS39gZQNXK6nHqi1nrATor9H74T9nRk5gKpRnkTTgCMd4byhnfgJ1fUVH4WDG6dpzn519G",
  "key9": "46RjVnQWvj8tivMHpCBHgGD9pTrDA4FsT5QGn7zAdo1e6DsMtPYiUrrKh4wXo5y4KXrWSbxMyjjgWoE9A13U7WiR",
  "key10": "4VS44gHjuzqYYxhk12pkwyfHALggEYQnzzSKByJkPFuWYiQHSoXJzbHToS8qAAB1fdxq8MbjK3SXgRK9tC2x1T3X",
  "key11": "vBfVZT76Bw3irfzSvPbLysUHynk3iKBsRhsk351zy8g2gwG9FHppePW4TehyVo5tFiFnEp4RebP81TETCHpUc6h",
  "key12": "2zSHAahVue4mnzrU4FuPeMW3Wu5CNQMgpyx8aC8ArMhPySjLuXYNa8Y9ZxvTUk3HnMCGgnUrNLVJJhJAwWx3fzrj",
  "key13": "22r1ndWHiT5YmqR1yXLZzXPfHqxw3mvB2uPWAkrAw4fR363v4RRqu66YmuGAgwr7sAVHipTRoa6Aguk2sDAyvUQ1",
  "key14": "33k9LacLUWvXCT3eh96Uz9zNwRSMBJuWV9bgNGV4gnuLAahjENA11xWmcJcu5ePP2YB8cYdbw95pcfXjJPCry9u4",
  "key15": "4zDfZ8A4nZ1Er6vrLKUVAhw7X77vMSs4P9FW467AAH9z9USZ3RVZJJYcoQysVhs48DaxT9afdhnrxF1EdYReCDqe",
  "key16": "39vGu4b8GXsA3CPuuF7UPXdq3sTRh8coGgnCLoa5rGpTouovqNWntQjaJ46aJ7sErmm872RmGv3uRrnULJvm1ubF",
  "key17": "2DvftZu34FnNhrZQucs7L9fcEY2hyWZx47BsjT82J9PFa2tN9Aw8UGfVg6BX7xSsYFYz24XTWdEf5dfwkhTdb56S",
  "key18": "2iotCCbHgPHJsNwuMwcwnQagPgAxT6oDqofXDUXBRugbAH97gAK6GQrWCTNbVW6eBfheMYJ1dRgABjRuXr2vu2Kp",
  "key19": "cYi8wa4q1GcarkGtpFkHecZRzcYw7fmyTMeVCJxGV5jVADtUp6WgQLQNQmr9Qb6NWvfxHaVEzDhcPujpnQy79cT",
  "key20": "34GdNae1T9vY7CyEd5MYFzgYoWN1HyrA21CJuqjhUr8cLay797GrargLCCer8c5GWmXuEZpQmGWwnC5mtgCVGhQ7",
  "key21": "452WQ9qu7EMznCNq1GDeBUmobB9Ea44D1z7hRkU6rrE5hEy9kNhQuErfJzmQbMEFuUmSDYrGhzV8HmHhJkA3taZ3",
  "key22": "wSxnaRQbpCXbyQruZvdmeRme82aVtcHkJA8wAdeuX1GkZ8Dbqmk6JaFjz5uKbRfybDiKYSeUNxWYVEEMBAs39Ca",
  "key23": "51nMVyE2LuB66HPpCG8na9rqM12LyNEBxWcgReca9nruJBX7rajZizT9bHNLMJrXzZSJpeAhUiUZqCMQVnWe8QyY",
  "key24": "5PWB8pnSApZrH91RrpPgPosZjwTKcAe91PyarZ4JvtUvhSbQpJfHVLmuweiU4qVnNok1Uqhpe49hvGNDT17fT6gP",
  "key25": "bgLfL54tyWkJ8oUXwfGSo5ZHqnqSzi8JNij1eAtdBzRVSEtwquNLxkmCGkUnBVrtE6iMnaitv7yxTqQ3xhEHrFp",
  "key26": "5FWFbrw6pw65LyCAjHQcJLWi5UFNYvWLzVGQT9QcRz6d98GpbrN2jJyBuuRUnAqaNPsLT7GjoMq6B8vJWxL5v1E6",
  "key27": "2gFxgKyajAobqqUZkiJ9PuxNPkPLXYrLcbUoGvusT7HS7zsUrEugRhESmXXnAPvxUJRCXzgo6Gwq2SXunkWGXRA8",
  "key28": "55hKjdFmqsj2KU9d8BATDpWNRdjUHQuYVqSbtXxvR8NLk8Pdd16GUxnAswFYSsDyWvrb6YK5GGAUSnEH9xcMS4WK",
  "key29": "4h7tdpvNUaajMv2uMMoxjHawg4fGdRPDTgJCdgVjmCGx19fE2pYMuNDv5tc3kVTGAi97VAbsE9KKaYDtw9VaSLxQ",
  "key30": "4gmHtNkhNU9vLYom1weoj9hdwR6fndTxHhnFpwfyHLbvQNfCNjt23UQ5hJ7mKYRyueJgcYByyQDBHHnk74aUrkgr",
  "key31": "5oLftYWzts4fVFdRxfaCYTqzXAoaDyqG2StPkKVRyTE89TkChHo1moRsTh7uqG9oSDDuJdnkrBmQUvrN8ZyW4Ck8",
  "key32": "2BAaqS6V5CGff5d7cJU2z9dcPYokvwfokQireV7MpaGxNLuQYbSkAs3wHN38JrBzXSQGMbqZLCnCM3tzpPGnTF8z",
  "key33": "4NqRVrqhdh3kYsFLiuCdPoDFcNHMeRfHQV3BaKyVi8Qu5rUKd8LBuy2GFh46ugh6yV4WLA57LZvwg183cBfw8JG2"
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
