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
    "28mppph6rpYFYz9MuxgL6hMdUKS7MQ8Lz2hSdR2ACB5wuCmLtZEnhfty52HAqNBudYYynBTQbRHX5DCiMxnPpRsY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "79rbVJSuXoG1mGtKHXQWnJTDp9KLsGogTs4Y78x7X8E3QysKefrtmMZppATdDvz8MuKqutErFFC6MsYyjPpW2rS",
  "key1": "2FVNMHwV2EhEViE4nLAcWo1JJoLWkokyzWfGGotUTpMixZ8LcSsSPuDoKV4B45pPpcm7vrAzx68diFoWs45Yfbpx",
  "key2": "2Txx5d1nmkUaZmcKKFiZkXqvqsocbbi6jm1yC4KNPniDohvbk2CBHb5TeHVAY4emSScv45q4XYiFpTXapVyn3W2D",
  "key3": "2hR8S6ei1mF1pK9ExpjLKiYcci5ve4DM5Mohjjbu3YwgfCtz3tD5hJcD2mXuGS3T21jf478ik3c1BchnX87cN1ms",
  "key4": "2D4mtfqhbxi2FgZLn4uV4F6EEomZPD5ASyvk6v1mDtMb1jF23sWjYDw3F1Vvkns9asFRbiTNEv1kL743xibzTy8h",
  "key5": "4bBKsaMnMaGUuXckAK7G5ttcdXTM24LNwLR1hsVtXPFru92WfLf5R9JofRukrc36pPQaLFdb9rw2DH4pAH2aNnde",
  "key6": "4YXoh8uJGwMTeRbjpW2YEP2aS4KJeZYN71xZeXTGvm5eL1tGKi9XZWotjAoXQcVAsTjfXJ3cKM4xJPahC4NoUstq",
  "key7": "58uJiWbHYoDhQffGkCpxNUmB4WwZT69msaFGEeEBUR9vqmbsxsM1nLanG641Tmq1kpTmZGp9oPLpKXk3apfgNHmE",
  "key8": "3gdrMUygC6czearZMWuYoK334NvCUdD7TZUZcT9ZXdPqZg9yhXAWmBef9BacR6HoNuMQGtXWCryXqPUVkDhjjsUQ",
  "key9": "3D2mq16SF8FyQYVd5JY4rpVPkvf7hsU7oda1tzknQZV7dBcrAv8Mv5j8K2bKNQfqik7uwJZ2H5mRZLX6RFG4gbj8",
  "key10": "2yXg4BYcxzSaoZ6rwBksxWtj4zgcJyaAJmRXECV7QTBVWGPzwZA1oEJ4rXVjGmjbjUyn4ND45ALnfwt3dsJWzKhN",
  "key11": "2hsjivR3nS5F3n7LwnK2B1bwbVq3CaKSPRsiDEqKyPeyb3LniLtdWysv5sK6NqrWHrtei3M1TTi6rpeu8NiDLgpf",
  "key12": "47JbXVDTc1uC5T8LjTLLHGcZypeqcBxYkpu6BMBFXYZj7pfQgsVBTwrspKaYZE9gz7J6gnThd2x7Vs8yKJSrsSUc",
  "key13": "4nUj6C6nmM5uBdq1bwkwFVemg2HFcwpwTJB8gftx863gwTmf3CQdeRBrr3YNK8MSq8tAcRQXqjmuT9LxmSMjtZtU",
  "key14": "2W6qWovMGrTQLV3GdVyovVGqLpYdD8J35Fep1iEpZsyCd3N5sL4QGCdrEA66doSeEYVt7orig1avYhRktKZAZMCJ",
  "key15": "iZUvncabksei7AtmA3CZTgeMSE5Q3vsrTdQZFZDdYRjYHxo8cvXZ7PfaTBRfN8AjBHhztWoK1pch6f2Y2st6JqL",
  "key16": "42wm4tQzuv35QVupMmKcPbUqV6RHp1eYcrjCBCvfALBwhqP8FSJVPyizJdAqUXRbX66vwMBiQHt4KeWL1eQHTB6D",
  "key17": "35qPjRwcjdaTT4gvydr4hYaDi9FqKRe289q7h5tK8r2GYM6L2rc4KSgFvJrj9Nt9rR3RSUWhQ741DhH67Lo8DmRM",
  "key18": "3WojNoAhojRsXZ4MUpyQUWiQyJX7fesLgHxRkMYUWoqtdj5uduUnSzs3Wh1xLzvgap5HCyx9yTYTFKBcTVddzwgc",
  "key19": "3YeNtrhZf582hjZ9hVbZbSzPbNExDejKy5p2CJaNg5i9DGrPLgpuc1FR174zREaqi5mg8XG3PYfkNgNBwNa5kxUG",
  "key20": "5EKDTDsfuGkvWpLkycwnFaRixcqF3gSLjRcrWg4joALuRv5ULHkVnfsQT1N2uDs8CHojaWnkyjYz7NMCK5XZ6rP",
  "key21": "Ds9VtY2CnuHSDBrR9Mtm6Y88ds7a2NMHB34PxP2jV31v2Y3AMbMQHhJDfsRSrAvYFFnFUDTf5mZLGeio1imFNYt",
  "key22": "4rMq8LjuPCjb58TreAwk1pjLV5hvJhCJwfmCpDqhpJbuse9qc36PQ9EXpT9xitKWCyazXDYJQCoVxgTugzC1PDZ7",
  "key23": "FEPMFuyXjDE5HnqgVpUHwuAfiY6rXU2fqVSWH1prmbAAQnXc3En7aVc7v58z1Z22wzkAE8UoE6MREHUiWBfNs67",
  "key24": "2S96fHzytrTQ3ZfP6sy6vjAurvLwAMfQpQJQo75SBCJbyrC4SZ24SxuWZHmP5dRG9yLSRENibEQweBARA5zMVosJ",
  "key25": "5XSa1w3sA5UEbRc3GZPCUzmoEZ2sHTVj5nZtE6q9PWHxHZWsRHo5t4rbWTcZkkNE9QCgJiGkaAceNov2qQGqt3HV",
  "key26": "bXf4fUt23SbE6SkvMfHiB1QQPaufNDHaiGFCNWwp7Y7TnU9gGWdLmwhtCkJwtS7jRduNgxysuRr9F1X3G42eBxC",
  "key27": "2Gti3c6GgbSvQAfD246ksAjW3YJspZDmm2ewHVrrQa28FDhDpgMF29BSHxk7ipLFMPM4UD5LBVTPa44EacAEbVd9",
  "key28": "JD7LWF6w4z3d5JUkvaYsnS8VEFDpYc5vUtVobUnDndh2zBxS3HCQYgx7va6bo28fpR57w1CscSSjhn4KEp1zyYv",
  "key29": "4cCaKyy18n33ietR71o3gGtfbEm6jE4njSjtDzdaDksuNbJLMHGs6QoWfwp3BF2XXxv1BMoKZvyLWiCGk1Le3LSx",
  "key30": "56MyjK52DAnpamUsbenXQa5stXZmtHM2gRWnLioqQEBtJTQxEmBrFrJZYVEEpdGaou8BArMJVgrQCfEPaHmmsVgc",
  "key31": "3UEM1YHXkCvyv2CC87jfSFecBrdVpke4sprMsNWywY7JqGCkV2eTDkDJXLQWoZ8XV18jacxYr2XfFvoNvCzuJZP5",
  "key32": "LQ2cu8VehjnmvRHLEXAU51nGQmxxMGe5nvzsXhKPdTtvg4r8QYf81Tb1h1KJrCz9221ZeWpCq45Jj2hj3XTiYou",
  "key33": "3q887PUhoaicpdyuwj61yFNVsNnVGHw9P4xqjm4SjBaEEmrcNgjju4XmeppJzhbXQJfPK1csgg39SibZtEzYDiys",
  "key34": "67U2VSbEFLtq47WAY5W8gVdeY2C6yxKDm1TZELB58zV4JswLj8F4nGfvhWWfY7pHw6SGM8vTgFguvUh2GXxL6kfk",
  "key35": "2CA8Ktvh9DjWZemr7eHKvfgWK7BGsR2zBx8cL9rVM9fQxw4ycdvipTj1cJa6zBRmFPEEbspvY6p9njwC4LJA6pw8",
  "key36": "5m3JzRckaH3d9sGQn6UzPWYtmYmMDpyrhYZSVXKccLmuzg1obmDJyg7CiS2RHCATyn1uvAHznsAi7We7nQFfbVY",
  "key37": "6651h79HXiUan9C2q7eLL9QF1CqfxqNNHY5gqsFKYKi4YLxussrFeYKir5Lt2yE1zS9hut9YtQrYd1yhTDqwJtCz",
  "key38": "2hRaXMFLXEMQzq4B1n4TXVjUjxC7k82UJmQFXEaftRcwEfacNg8ThemNuWR36QLgeuMBLkFsc3TnzR4yxAXQrQCG",
  "key39": "3GGuuxfNWvLQRKTTLWNxJGhyepeB9dZFQ2EVucAViFHH8KxEZw8LJ9YeatSAwmUqhPUTkim3w1E2zA3HvErgQt5m",
  "key40": "4YAs3cTiCZtXTFrRtyFQS4XY7E2dZETtXt1Tg1C1xW3phjMSszEq3rCisLNxQsYorzPZVRZpy9qiwzinzK6Z42rv",
  "key41": "4WLnLMtm2xwSHoBmUJtUfeX9TCTop9t5SXGHwTLJyKyoUohhdwo3nSXRJ5kEyv3GEQkC8qLBPsyXL6Wv5kuitMMj",
  "key42": "4d6ZPuvP63ALh14XTW8FFu7eqtNSzAJLabRje2FEuFfbTsQTuWwjJcrFixUczUFZRnV7pJQbki4Tckcye62YzDQS",
  "key43": "uJ9eLDcc6FK2VFHUJp9FJTSxzqrLAS7n5eq4pyfrdhRBzuEwNoUSm5ACCRjsSVKMBJNyMZRibVJ1xnGJE6i5KWN"
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
