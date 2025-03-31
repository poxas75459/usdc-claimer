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
    "2SFYQW9tbvibXMhBrakhjQmpvXZUV9cZ3UBdNxUGZHAsnsLPLTAKL54xSUxe3EpeERPqXGencbHzXMDUGdgh5mge"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zNV8net6QkZyLgVYrPm8vCZCuBEbEVtdrqmyU24Uau5X2VZ1jWK3ecUpCgakoCjbLVfnqcXUEtknGJGewemUJps",
  "key1": "4duq1L1C1fAdY8f5fQqvDYfjkCxH9DHPBMNWek55XuRJZZ1s5p8c1ztaPH5fv5Tzfk4GpBvtmWWrhwSmgZhfjdLt",
  "key2": "23yMhwsQDoTw2PvhZD7G6efZ9Dr9e1mDTvSpQ5y2LbKamek5xwnCfuP5mTEnJTiVxP7zJerRHoZsQyL7BiDkdbxC",
  "key3": "5aozULwVceW6PYhFy1cV3vFLPnCc7aiYmysJMkAbXks7v6o5LQVhv2ZNUVcYK2jkcHz8BGwKb6F1HKC6G7NcucUU",
  "key4": "22r8S59UfRy9qpX8TtNbzzuftesXEZEscpaL4X11HuxuRJYE2T58Q9y8PcR3uEFrc16BoDWxtrK1SmxmoiFCjmC7",
  "key5": "R1zbKSWdLV4ghFeM3HzTpN3dHRx73N1wEDCjhajpRdQD8D7KdPcByMYf77BjyLgNukkUTiextvBjgBwfsu51Q5b",
  "key6": "2sPftWY4Q5KveoTo5WsC4v2LB5vsi94XCra9Y2uADMRdjYawCwBuFoMqFoZ9N1xsDNTdiniWuqTGnm1WLnagav2r",
  "key7": "jkJuHseLMKrdeJzxZ4c7uL8VDm7XDpVgR51j7ojt5kpiGG9W9gtgVmtjPtuMrdSoS7bWA3gR4nBx1Mw8XTehSwv",
  "key8": "5S7S8L9SLvT2vnD4CLcQ8zDBN6h9eq2KnTrPjypsi9kyiNizDZJWX37vD1VvHGgdv4J5PsYtuNJBfiKbWy2xfBre",
  "key9": "Bt6oNLp9ssdYaEw95TUsa6vuFTTtg9QNPWmYPVJVSLZzPZS3MS4zkMa7gE6EbizCYeqmmFwWh9gMVNi5q7mRhqT",
  "key10": "2aiFYi7ddCqaTNNbzchTdXteKhdkyyHwviyThgFEHL5cU9oiXN2UKrngkmXSHZuMSN5fGE9bwQtEaYKEobHaFt2j",
  "key11": "YgWV3PMadfnXZATk4opmBhSKsYAvajFb7RJAVAqdZfhh9pKAB6PTVnvYANxiBnEBBE7PZNWtQHGMr2MzQWExi6L",
  "key12": "fhintrRft78cgEXexPYNA2GcgmF7RqqCRJqUyEdW8yAMa6Dk56PHBw7yWVAZ7z7oq7ZMoYqUiDMQ5t9kDjztbog",
  "key13": "4eg21R6CWCnygQAt3hKYZXrUk8GBRV9CqqY58XSkYXufmfDjZiqQi5vxxZSsRD7P5ssjgGdjowzmjzCyfik8NnSM",
  "key14": "5ufFLaxkEpd1J3Yuoo9FdorFu7P2HKPcKiyU283VkrnYLgGssBwYcYc8FZLJSTjQAQZpSPt64kJT9dwTECGw3VCZ",
  "key15": "Cd1cwzmpYhV3MN7DDuesSnhVKwN6c9fZVkr8DzFgg469dqmuLCF7jiskh6jvQNHrBu2w7tEcPqfcnfEthToS7sw",
  "key16": "J1QbZi9Tudevw3S4wvpuJndeiL5RUwmgAMxNKREgh45tWR8eiGG1kkKFW83MMFpSMLexYwWCZaQVG4eoPEyUd8b",
  "key17": "48xmJncJkxxnrrUe5xuG4toD1QNntvxkYTagRkk3H6kUGM7Ju5eSkQwe4dAmMjfk9SEbbFcki4BHVgwQS7UeUj3L",
  "key18": "4zD37x3qtFzpTp6N35ptCEXZ4rX1MttviEZGrdn8LWznjvkyzP6QK2Lbkhz5rxLRtUwySmRJhFvL5JuUjGQ6AKni",
  "key19": "4PWpN2QZVwVsERiVnu4onw6KhdV2AjTiUZTZLHnfM7VFwSk3Sgao95MZt4qpqqsCoyW9DifdvCw14agovPweRDDn",
  "key20": "2HZzwduWbupDR2pPZP27i2uJnWo49gyTEk2jBtVdyDW8vBeYPCmAACte2gWYfiJPeLtoUWyJqQrJgkth9YUZYG9d",
  "key21": "3hr15dansFySPKSBpG9v8vXJ8DnsZkdmrAaFqzufayokASt2J7Zu65XojKNQFi6Ky5Rz8JNekYH5MeES1iN7HF4s",
  "key22": "4XLZNN37DKusPgMdsTWSDRBRbPyqUcRAx6yu6dGd5Xi7f5kd3ABusBZ9Wkqp4tJ7Y5XBgLcTCnznry1j5rk6Aqb1",
  "key23": "5R2cCwt2x9vzsZCnipZHHC1Lf8pAtGZGhx6F9UWDdwUNp3VeN1ta3zZqCvwTAWX3r7FnDQGjYTQRzHDdWwpbSoQ1",
  "key24": "3NKquGD7XqSoPfcTs5JeB2SAJx7touFSuh6BMhcu7vFLB29cBdX3qUDvyeUcAUh6gFYpCi1UwboTmoAkGan8VwEH",
  "key25": "4kA6S31TrNR1SYuczkm1N9aVN6QJ5pz8obht5bRMeiaAYh4Fy6muJPn5vCK35p3TryuY4LoX8Kas2YTGPN6pYhwB",
  "key26": "2FRhpy91VL8cFH9MwjPuq93JwZybEwCXAcY1TQXriqnu7tPshwmGdqxwXfrLda6U8QDjXUf5keaFzKh12KyvnkUK",
  "key27": "41NpA3yqak5rWERVzayygfevoLL2XxTZgEoxuoHjUC81QJxtmQFSS1Ex8xjntwXxUeWDRLDdUL22SFT128sqGJhV",
  "key28": "3A643y5t2ySNvD6rmadYwee3Rd79ueDKbSrWTki4pVccikV8TWD9ZewjQa5qZmKDhre6CUeEZwRSMefdj3fQAx6L",
  "key29": "3osQ5k2o7qFFiUQbPhjCBSuLyNwzT365dsaoRyKtycr7vxxGmNBxW24ZxeYD7fG2Ja4YiDsRsPa1xwivj33cPUcQ",
  "key30": "55BHTaNyioFhD3A7djbHskxD7h4vhUxTq5VUphqNnJ7PY7DE5HfwHCByzyaDdpAAHRF45g3vwNnGpmmUaSEaaHeJ",
  "key31": "3Yeiiokkkoh9r1ACdvz2DxF5B8SF7ZSRYbRPLqSr9P8X4C2THVsDpkDjcpfZPRX5FjMxtfotYi3YTgWGrrobmehX",
  "key32": "bkjuxaegyXGhH8MN5o6tB7DqGsFbHxxmWCuKtsgGS6DnLdfxJQEz1kxEEdr8Ek6it4tkXg1ixbPZtxtoVzL3x2N",
  "key33": "3aBKPuxXGBVAbLDYPbHin2m2CF3PvTXBmsGUpfUYjTg24Xh4HHy3HxrjoBc89hbCFeiHhLPi9ZTFLq9BxAPHbTYH",
  "key34": "4wPv4NfUt8kHYiucxXTb932NyVN72b9cNGa9Xsh6tamhYcBA4NGmnXqrSvLuFRQRJuS17J1kqxHcmFwecZTnkJAT",
  "key35": "2btCVYm84Vf5AmeGFgegDnTsH1DS4nNKxGenGStLVbe2PShsAdXycR5YPoxTcag7r9cTBUkoH7LPYtzYcD2ttUrv",
  "key36": "5BHxnqeY21sEMTpZiJF6j9N9d2KHLu4MFth9xMLcuuBsKb3SQanWr7nhA5qu4g5sUxJQoYmumviGpCBTfGaAf2di",
  "key37": "4Fyi29M3C6V7372z37PjFkd8imYxhMtCtKLUPgxC7471FWmeKPKTDXMZtcBhxQGjijPAHyfGgqFRqeg75U1TJNQm",
  "key38": "4jZDkgKTvzJtGL7Z6qaihfBD8dMGBhz6hFmKV6SYqDLR2LeaUwUgQF2fBjxBuuke89NZTDvE3iSCUCUSVev1sYH3",
  "key39": "3mLJ2db43BxrVcwcGN6SLFsWsCycv1DSXz1yKnPoKNBahUkrAQytxGoCSFntC5UPryEJv1WZnx2WMnDT16j7YWe3"
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
