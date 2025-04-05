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
    "46g5qtW6QHzs2tjMRjKzUsfridXZ1TQgKPKi9guRbzxfLRCsF6dLh9haqJeanE3zB7GoS78TzdbPf7ceACiKZ19K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G6sYLQ7DvMNc47EdrKrLb5hTWHFd1ueYqkiSD2NMbSWnGoot6EnGHxKssTxEEydHbX8xGw2yVRhfBrHWrjRSZiM",
  "key1": "2fw7peJ9wxrLm2Cpp8cPN5ow14Up1BMBefE71JRW3Q4UEMJ7ghP2AEhQSbTcbiti4NF8T8T84LWJ2BJRMbgCZuSN",
  "key2": "62TATQA2c3iv4CWTYyWm1L2YRYwZxCPCmevAwy6gm5r1dDMWjdCT6sGyU2PSEQpTJ6pV6y97cwyR8zqSEyWYV75y",
  "key3": "MsnxSzmWymdJcrKjy9ZuXGWXVyCV7JBruZP8ti2g3iJs1oGyaMyJwGqyFW2MHUgUf8xKtoqPTbFnsBSx1JGFFLL",
  "key4": "4nCmXzrZm8rD8veb44swUpfxU52SVPg7U7tsTVaGzoWZWMiEHdzoftx348t4kKHxuNhQ82jwQgitY8stUvEch8T2",
  "key5": "639Jrj7LKp5QPnXcwWa8AaKSuVZanVhY5s8HFNqE4gcEv4SDyCE1AuPm3LuViEFnNyLrL7VyAn2MQrRAop6tLrca",
  "key6": "QB3niwpAsUifvJuCbWcV5n3ZDMf9cDaoE8aMC9HXW7WWKteHo2HDGvH3omYccCWocPoNrcXEw3qDKjgQe3QKted",
  "key7": "644QpjGcdvMjJNo22Ao7hMvTKueaaWD4fCSRX4EiMW3QDrenn4U1YHAQvhgMKban18dGfikvMozKiYveHrtEvQEq",
  "key8": "2eJednKhoMB8FdtTtRmtHMP8tm8NYSJ1Ra6zaXXfnYfU8NEubEPepbSqoe5HE3b2yJXahpttYF9L9LzgPCkpgtYi",
  "key9": "UFCuDv9wq1vkmyLHM5gJMNbrYE7mk41Uf6q5p1xtWu5kXToaeyxL83Yp1oBfzWmgXmc3VKFYKnvaDwVmgJAsnwC",
  "key10": "aJnRHgMQRjn9mD8z6hEAUfiwVPcqAWSz4FYMacUyQ1mLpvnVYSy93Mkk5kkicqCHTBSUYKXQ1SUJzRKi7WVKxVi",
  "key11": "z4nxGceYvAN4YzgSMJSQb793m53asTgoe9AenGRBGjNb6kEuhyh5XvyuFjoq44qCJyFCj4uEhpgZkTqm2YfMTww",
  "key12": "3HU7UD6TQxtLScNG5B34YhH8F798qrh8ZyGcfoPmsti9Yw4dEG88uFJzLdn2JKCjhgXTc35PBAmPGRASvLo7Ttsn",
  "key13": "wEKTSAMUZ67BjnmPk47bmhfrz9mJqcJVZcA9YsAE3offmJfufQM8FRbuPNeKAN1r3WZEUJnGFSaA3tf4vE6cQUR",
  "key14": "CmJj6XjNL1oFuEP7K7wmMW4VXXfnkxKYJsS7eRZAmJEFKN4pbpycqTjXVyw6FB86ui9wKNo8UJYhBABMtsvJrAm",
  "key15": "vpESgnoDF9STdLvAxdS3zVzJ2wTeejkBy1cSgQoMyBah9zPnDVnaAs9jAfsvkqNEfSrn2Ke6KJtDEZw3UvrjAjh",
  "key16": "3oJ975ZB4AAst4to1cmRHjEmKgQGjefWF2PJf1VV2wUP8DDyB2PaM4L7ry7hbrsCsUXHgnDEzUtYiLbg7dR52MF",
  "key17": "GKyiXsMYofDKk8w88by1zh8Fn5oJbzGU6HRVEJkDxHEF9uoVke72AwXQUGFT517c4oKpog7fpuP7oFR5cu1Ehos",
  "key18": "2rH4PAcwt2t6Fj1cZWSuqAnctHxwxHnAK8t7pHVtc3R2b4AGoDPTK2zPLuWS4TiYSSGtFWte5wETBMGvuQ3YYiv8",
  "key19": "3MbXqpAwbrVuomvLLiNqd8Kba5Vu3oUbas6FTbSRx3H7x7L7yfsqHNEJoUZDyLysCXn3VJUYwVfKWKCU6BMsqpgF",
  "key20": "4ZZ3WSEv25e8ggubsacM1TDRGas93D2LduqnVzQTFU8b2rdCkRVw2F4feCP9v8g1UKLQ1uKv32VwhfTB9A4Pg6Qw",
  "key21": "2ekfK88Xr7cjmxcBXq9PDby83bGcwrVM9xDz79J72qqVmyUCneuHauRV2gh295DYAFpmpRKkM1qHHAfVTcS4T8FP",
  "key22": "3SRKLfWqWWkrsrWFC5zJTsSPiuiq5Dv3shsnZpyRBSMPaZRVD4g7J8Gmdwmeasm9MthqnrtZhQk7vFvZdEFB8Dxy",
  "key23": "23SVhG353jWzqRekRxthTFn6QQKKyhZNesCpDzeZ8o5PcWYeEad8c2WoaYb8hPbE7KZC9Y3NR7CqH56kPww633Ym",
  "key24": "2mdj9YNWhJ2iRCuCJmSjcPhR7rwpqkEcuUSPe1wc2teYURB4FVB4K2vTe1msa1vje8mZ5HvXKEiSyJwXD5rAjDJr",
  "key25": "3eoVUwHJS67Lb1QddEiHThweMTnjzNNWuhT3BQq5FGwitNTSQYaoCnn9sYjsgcEhJDsU1mQNgztYn54HDeGwxi22",
  "key26": "5NN1iRQ7v4v1GWvF9WAEKKBBkSVbcdVRhPYCk3hHpCoaZ8YSYP5VWP8AD4mQLuoFBex2CLHtXUPqvJKdAKY7aVPn",
  "key27": "4M9SN96krvkg3zrLoH513Sr8z4KJvjcVAC6hPvJFHdUUDgtwWNkfDxsg7HuGDSSkZgbratQNXWCqDwerc56QDbVM",
  "key28": "VGyPu5qy4Y7qBjd3Ys9rDebL58GeLnGdR2SeWM1FCoHS3ozKV7fcJ7jKrh3Rzdg73TZ5RhLTVZU5v6ZAhv8fMBR",
  "key29": "3fWBRwR2cVLW92tWDZCFgKHMYMRDZkRwsGbmafE5KQhgU9jSSn7nS1Lw6ymujqcPYUWRSHeBhEfM7Nxy2qmYaYgR",
  "key30": "2dNudtsMeWFVS7d4TYjTphjgy4nS3HF67JKbZTEPWisjMkM8CfLSCniYXRgzDFB1gkvDSiXrugjhb2Q2L2ef1nY6",
  "key31": "5XYbiomjYGS2nsVpXBtVzpsXPYuZ74ydQedkaTwMzrvfAPbGRZtz9KQVoQrDw9YmmuK5wDDGJYtuT79w3VJRKwXU",
  "key32": "3sCVNnSnf3xxtBPG5qk9rFaBuEmz5DVXkKPXLom43eGtjW2MCxUU6BJ17KNxXfYdY7pE9sE4ZSC8JDwmXUXy4jBU",
  "key33": "4veA2pZTrmu2iMTiAsRfRCGyNdAF1BLb8m4BgJ45M4Dbu6VSBr3VT15HVuwkwP6ZPMzGxgc449JHzsdPjd8cv2CW",
  "key34": "LzkWnnSPeQeep7K1eqy8pgNgTTbZTXwtdwu7uzGN36J3WcU9wqucyQaaJLfxuDDm7V6y53fxiXb3opLPwpjZLkt",
  "key35": "hgreUfn3ricztHh996kphwXDFA3M6EvGQGk7kcSzxAiyBPAZwZWkcrj39qLuo2fdDCJsHmK6gQAmFHswpRGYnZm",
  "key36": "2i6BTwFEbAYedeykiDC7bWgF2sWoupXuYS7RgfkL3VRNp3d8Ub9JbFTVxU96nVTJGHggiBvqXiPt8zMv1C4HrfN5",
  "key37": "1iMUjJoBcH9d43JYZ4WwvbWdvNXhQJSVDkA6aAL8tfbiLrAWikiYPzWmi7PfFgb8qGY4TBmYcxywahCNZimav6b",
  "key38": "4bPuJZxnWaFJKqPRs3xuZ2e1QYRDCHB2i6tVKAoRa369ZCunYMnnXkjEV8dwX5nmUrjRWc5ek1ta1WpUwS7cJtWm",
  "key39": "2J5nMRLzd825tNxp4BFBeuygHHqL5saT3NxiGY2gazP6R8zkGugKCMyZNRGKM4C9QtqWa15NyReaRviewx1uijpG",
  "key40": "5RvmtaN4kBjrMfBPRYaCcjGKadkZuiRfGnxhztMpXdrDtEXbx1ZvAsy6Hr8phfGazeMacBAzi9fb1jeyokuW6C6C",
  "key41": "2Awhd8HhA7e1QoDZZjgckgMEhNNb8strhcKyn4JePhZZ5YKEFv3PBGW3VJfPTEKt9vbwdGoe8he53LoA1YUGSUcq",
  "key42": "51R3XwodXQeEwWHWZjve8275YVriw1gctrWuGV2ieUUo3iTteSmyEY6kPNjwdLdeQBfb4uE1wSi2e4sRt6zvoF7H"
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
