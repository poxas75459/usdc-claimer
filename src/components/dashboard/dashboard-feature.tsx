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
    "KWj8AUZC1ApPRhzvBQFfVtgu4VWvSzTp33MoikCMxn8MBkUnA7oMn5vZSkidfEgX1gTnTaKRktmXFieQsnocqb9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tZzWT9ypYQSXFLNwW8bgiaW3bWie5SX8meU3zsH6JAzwyp8Z8hynQonND3tesxvrB3FGrtNheqpn5mme2HtvevK",
  "key1": "2UZhg4H3ZVU3M1sBiwWTFBgJmoZRpNRbxRT75UFTkMcanzXhnXY6uHPLNehCDqmzNMPpkDA4Rzvx7dvf4eJmygBT",
  "key2": "gYZqwJv6NmhfwMKzxVBMNJstaYb5iPMFeSx3DCW6HYUbm5i1aUyvBNWBtwKJoSMkULWgpn7MpsZJCzHsPTaLap5",
  "key3": "2YC68NoYyWaqZJt1wsD3yWmHYZhaYSed8mDdPE2ADDs2hUSpKh1RvbNLCYcFPt92eR4EsHfA6WcwGNYmAud3xYT3",
  "key4": "CDK8da9VXx7gYekNAXReDRR8K7GTeBmnQJmpo5wNFgjs7ok4i2Q5ZPuyLKood5cQ98zqnR6a8HVWLeamoeWK42s",
  "key5": "54AjN3NRiDBHMh7ubY8h4Xr1UpGgiqLUJiCQdhr7zKG8R35XTR1EYrZSfmAvymq5JEsaR8VpreLVnBbsNBGjj8uT",
  "key6": "5ADcnVpK5m65rokVvPjswT4TpxE5EdHZ5GcT4uZnPXxspe2ta1ermjnrsJuKrcpWoj9cuq7vqEsvXiiLpsSEJFu3",
  "key7": "ox4qquZU5puhsK7BZkKcuH2ZqfwczQo8bJH3i57tsojbJSNNqc4zjTwmpTY9XG9j3Hxiw7SiicFi7aHaortSrz1",
  "key8": "WYvv5S2JkgUyMGgFB2LMGZcU6zt7XJxxtZfteNi24v9H9ZxRpSDFfDR9s4Ks3FFJhhoE4HnafY19zCeUbnuvzjk",
  "key9": "5ZsktQW6FcJuJ6XZUJ1okcpJY7qycncKV9iwr8BT33dc2J5bSjcX4dfZEkgQnTj3UAuvfXeFFAiXs3DzJQt9Uoca",
  "key10": "2Udgqu41mK4tHVAuw1mX5Zux4o2VQP2EMwkpun5tL8ekPd23o5yVRFxbyT2QD29BKTTs2LYh8ua2K2Zvn6hKn61X",
  "key11": "2BftMgMMybK9eGuJhEUL63A3uT3WqPqGBL9oiamAUDRhpsjr9AAwdEGFafLmNpnKtNZEoBD3vuU4sam5T8rbBMnv",
  "key12": "Cc2dPnNu2swpyy7uMH8t9CJ5uYQ4mw8jt6uZTYLyRPawggSonRwR8xQPGeRkBDnHLUHhWEaGw3Ta2jrQSFMnun7",
  "key13": "34xnziWfbnHZbqSkREyNiHERsHjaagWhAMSvsqFd4xoydGUm3tr9g694y5XBU4Hykff2qiLG4SnUtNZf9zPSEeaG",
  "key14": "2F8LMeFTLH6NMTMbjWhrshwjFJ2gzzsYEr4Qx8nopfUHSG6AGPfm7bVZ34PcSNJRPVr9EZGWswtvupPuuja92zkM",
  "key15": "44j8VPY4s6MvACfZKR3t1FC12YSda2dZU2obn4RZZC9eBAQnDPgGHV5x5Y5Q7SVCpChe5QAZKt1Yhx3e1X7cmdU1",
  "key16": "122ZqYWd8QSzJimiY9qrdjeoLF4mTSpYQcdFWxQv5SNkhCt83ZmdpsapEKynFoP1BfqEHif5xRhK2pu6knTQCKny",
  "key17": "kvhyTgwj523ZbHVKDyaJfUuMBNrU1nAVy1nib8rvCsCBBd7AbuHdg4GovhVHFgm9jDX3B8Tvthe1n8V3DBrqGGh",
  "key18": "2Fzz1g8v3WjX45Ti9q2oKsgWSZhF1efw3oqE6fT55UchFzeK8ZJ88Lygcrfn5neMqxxyGYFx3MySiJSXYocgzpuB",
  "key19": "2t8ouVpDbSqwHfYZKhxyjKu3JA2zCZefrfwsLtN8fL1nrVVAHp8cmAkVP8rXBiMvMuW4DzvuWGhr7GjYpLA5LMMY",
  "key20": "26mfA6Yv2fHKp9KyxjhjXq7h7X95jojwBCnkiXzcfeT1oiMJX3G2EjcUmDR2HBGXL4bVX1CEZcm4rNGq3PPL6UDm",
  "key21": "4oY8gTLHkNFE5236SH6PySNj54jBaX26ozkrEjuGgyzLRAgzXUsK3VauuRp7vvsTysbRm3SSkWzffYnnt1JMrxjD",
  "key22": "4VoEaC2rq8mW7jUgGWPsf8F5LqdvyYaFxQ6CRYEtsvHgCGU36PGs7GJm66TtgXBjHrkGHcPpzwLnvpW4fwGevYSf",
  "key23": "5WWM2q8wYQuNuhyK9GhGkqfRDzaJuX4xGqz3p2cH3mWH4GT5gBCdg97wdyAD5gfof5roUWnrJFhEyzXXPMSwpsog",
  "key24": "3hrMAXEPxzkJZDKDNUdwmTNEzHABWJJvATLNhfZCQML7bS4J6qLHisdZxZzpe6KZG8g7B84YR2taNuxPZpkAoej7",
  "key25": "3fFfxAq1DZs1hgARPYX1SJMwDrMXDyv2RjZCgUeCbYPQNG5b1yiukTRbE7RUeHn7PdkDTA6rhRHGrUWFd486wshe",
  "key26": "5TZFSkAk9f1dU1MfBVHT9qtzf3QtzCmxCZqmba6p7nsQFCidL5cMNHkJstXg9DN11V3QXudeAimRQWcMqE1xteUQ",
  "key27": "3QpT47RRPYNEccMueBRfCuzjhZA1vJmXyZW3JjopRzTE6zqVUaeL5RDk8K8PHMsG6K67CQmbXkkwB5jbKY3fuDQk",
  "key28": "2xGrktYxZkZvStDGt6CQndWedrcZDJ2udwPgCFYgS7KDPMdS7HSF5nzypbfGBuu556YcQwf9SiAyrMfDV7H2xfTj",
  "key29": "5yK7kcKpm3kgMr2az27vSFP4oBGNeuXLqhZGjsLpi8nPjTTtqKUAF3gGCKR3yuTuoMdGibVzRaM4t93rApQKRBR6",
  "key30": "33Z7cKofWPdgv9QDH8nwDjmLC1A4ZY9RFBSeeKBHLGneHVseEmAZiRgMDAEynqm6cAJMN4Yf7ge66mkzac5zJvU2",
  "key31": "4KRqz4uuoDkBAwqHQLihCyJy4FAQCuhZ6PtF6xokH3L9suczoXX8aicEq8MzWYRLz8Wg1vG62UJHx2dudDzmHKH2"
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
