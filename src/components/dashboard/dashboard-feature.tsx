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
    "2AyHd1YyfZZvFLb1JdZKwohJXxJG4bwU1EuGbBAhQzjA6EydPxJXj7Qr4DdcEhGYb94Up3LG1KB6wrNsyQf2L6pt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G1yZhnckabRt3gk8doNim6bdT517MHHcpjE4A2s9Xkk4HhEmjWGLQ2Ce6o4ceBBDkJ8Wug3zWTXQBRUg2dJmt2v",
  "key1": "2Jq1yDA5117mKoL7zAv5ZSaaokQVceYE4xt4hciSKRAs1Z4fM5EVqfcExfg4UVX5Vawchi8CMz2pHh4j8MBPZ8vK",
  "key2": "3bPw6wfjWPrQNpX9RDjZphChZuSqPRNZcNDnQzmAVkxh8sbKExDEWoF3wmzWCSsC9AaGvCKypi2QxykS7kqdUFd7",
  "key3": "3wvVGnRxAF9BsL653WYQ7zyPdTWvTvixr7zzwrkK75JcmARxK9NK6pPQgKHoHwibEbzSrabfqKeq9tYKk9iy6zYV",
  "key4": "3JCV1YjrUYGc9vdVWLrspUZUir5hZN9PMtnFcW356FVvumsnHuGKkQWYxkmX4t8ZNj1ct73cHBmJguPhjgG6AYX2",
  "key5": "3xwC8fGtrfvLj39eFv8U9nAvLSqR8agC7hMYt3UZjts3fgzpBkSvCLyD3ydqjgJ58jgEFA4AMRWJ9KumRnGJVtxy",
  "key6": "38jeNmwMNMXeaTd6tfi9WkGUA2EbNNUisrz4S71aQwmNWwp9fZuSM2Jd2zVetfdTrDLei42HP72ojRghcXE1knck",
  "key7": "5XRZSNGVs4ZB1us7hUJCHjJEzDUYwPZ2FJvf7t7XgztydYRug5rFFv3Xm4FkYYADTTs2Ac6yDz8KMXoFpqoi7xgg",
  "key8": "euXYAtzf9CP2T3KEAaJ87jL4AJPkhmjVanYuDz5PsCzwR96YAKEhaeC7jYAnnHSzMB5qjsZnGs9ogf2asJ8W7gb",
  "key9": "3GJVuwA1XJDSsPa2qpN5mYbrij4dWhz8M9GtxVVTcKNAsaYFyZkAdzmD3NnjWZBym2AKbCQWeGuu1JjpntsygYua",
  "key10": "5eAPo2HSJNAGDCg8ghW1kqJ6FhvdWuURLkB5bkYuvEHCYrJ79rSr7g468z6BSarvH8vufU5zEjwGAWoyduXojztX",
  "key11": "56qdNL65emMtcLD4EAnfsnTzQhjmQC8U8unMEmWfqNdD2UvG9fqHMC24Ms7rsvSExUnnEVvTxG3aMv3fBjiRn621",
  "key12": "4Cfg9tcWQcZLxx6aVz3w55BBSwkjFqJe8fGB8avnRULpF5uWUgZdDWqrqBbaibcbktyFdyQXidC28pgS7emfK1Uo",
  "key13": "2t2TUkPoWvsWpVQfYjmb7p8e37Ju8F8xo4EtsHG93WHdgaz8c2oRoEoxabH5Rf5y61Ji3zparURamDEmjZe9yFYC",
  "key14": "B429zMPCKLe8fNaFSNgFb6nZi3Wg1hQbgC8pvHecMGWxPhhUy4af3jP39cDN2Fr2m3T1wgm1EjnDPLduu69q4m1",
  "key15": "3PS8zaGPZpTCFQ4Z7XkMJPYufzpZDpoaG1tV1mFsTVskX6VPwUhSPD28z7ptWiSMwJes8r7dtjzmUVcx1B5vsvhu",
  "key16": "4CZYETNJJURiP2RCch1ssvXsxqVWiyaFzf4hxQkEosmczfHD7B9NLCQscTF5ZakUoFh3AAhgBZXymCptiZD9eBqp",
  "key17": "3CLUgF57MuNj1YWt3945aJ8d5w2guLL6fbbe4vWgdiDCGWJzKbR6KxHTYHL2soQ9nJM9LznQ6NQj9gvcdvMnZkkB",
  "key18": "2gS49SoBtfVY39WxtGr49SQn7iMMgjDVvroYXa3mx9U3jgboWjNUehQQaPdoDrKHaGJwpUVoPz6om53N1M5bSWa5",
  "key19": "2rcQ5yJ584mFzGkKJRza8K4L59VWhf1C1AsR3GuuRq1iyjA1Ajo3zEdcGxAHJd7gqjrgFWYcs7YUXFP44jvmBXUy",
  "key20": "4GGmxQdcuba5S65hbeo6DN3fKbhvtEF85J3W3pJNWpb9ZMBjSAPKTZKrDPsKXGhKswjkKkyche49ZTBiqCqYmB1h",
  "key21": "1FJHd4UF3yrDsz159dYd41d29XPg2qMbVcVTWdAizxkCg5LSbw8oaiyRezbah1dNugxWE2iXxGS656VovHdEtgm",
  "key22": "2Ga8gXdEFKXJ34DNF11JWeLn7vgXRbJykuRxp2CewUoRWEBFjecfTC7o2yXzyUHDph2GcTxKoWajb2PghN7AdCMv",
  "key23": "5fe26cKStKWuQd6af9vmEZwvQ2yrfiFjN4tSpRUKppnvQN1AUxMct6MB3MrmtaNWVnog6HgCE1euRv71F7LMoMK9",
  "key24": "f9X7XqVhL1XSdUp2A3UHqXKK8UMRsN8XU8Wrou3shmMcyXVxVEHp1YbEuWmDhiKV6c1W4R9hDXJycDDyWp9sj1Q",
  "key25": "2vdDcRez1aQnrenop1gmDvyqs1MbF2s6P3EXq1P24arRN3V2EQoU6uJct61Tf2P87Lsv5R52YKp7bmTCqTiPXQGT",
  "key26": "5XkENY2Cnp7mw5yyfn9wv5zdgi93SWmcufgfBvaibx7oex2jMaTEtk2BEZ5WzDvvo8p1Qx499TX1vb5CejVjrHc3",
  "key27": "2UJw1v1rimb3LhiWbXvMecArt2D1mxKUoCmPxvAXH51DiU4rqvk8JDpDTWaHUF1mYdfPcFKyYjtpcMqGdgV74wdM",
  "key28": "4sbqxuQRGAfU3ycyncTAbUf56LCQ6ovz7gcyGU8uFU5gGjpxTBbPcHqKmtAGL5h2rzJ1xUPCVdAvBgadyr7S9TZN",
  "key29": "4ioLbQtKZa9Wycy1LP4MEaSwttouGJet1615SZyQBcHegdfK3h1LnCqexWRRPjfgSJ7zroQJ1uhamnbuNgm1j18i",
  "key30": "2RwyJifzPWEJtXHHEp73mkatAQryLrS4qJm5jLNZBnuGqvqktTdc9SpoZoBFZ2d4Q58dYehEwpWieZoAYqyCZ1pY",
  "key31": "2tSnKr7KaA56qK2geGKc9Ww5AREFDnZdt11oKXrtdNHRbQtqg1zTdis1vPaSKJg8fEpPspGGH5WLcT9MQ1NXgVon",
  "key32": "4138JFu7qmD6p7BGwSY6WQLYBroNjHxaPfiCNWx4V54AqsWMiEA2bcQicFGjdhkEvftRudX8bhy8eJXYQBZAM61k",
  "key33": "53s9Yi4UXSjjz3LdQQ6nhmbhuy44xCZVHKscED55U93kmYqSW49BXPx8tMjs52jfoWaoTSPVNWjZacp3koVHzBxX",
  "key34": "2CDTBrNNKwVZkohcGKTLNEtnSxuNjzfb5DaNeg2PgGnJzdZhdsA25AhyvRw2rvatwswBZNKV3isV1vKj22iJdygY",
  "key35": "65Zt6xTHrrpLZsBGJ5iuocDMefMLte29KtXRsBmge8WL3TF5FrbuTCj83xZk4Js7isuNTqjBTtoVRBcJTCPkxB5o",
  "key36": "8YWuKtDHRk4PjSqkj5hRXDgBqBKPkQYwbwCWKaWeVy21ytSxTQRoazhqyWqgemGHzr4ij2CY9nKQxzvG23mhWbS",
  "key37": "2XEGRooMcD8HKTdrC7xuTimnvxZct4emPNF9sePdzFePJxth2NUnZ316yHkuJwmhm9s3bnn2zeWFphCkB3WNUsJ2",
  "key38": "3aSiDuETyVF7uneAJNL31VrnUePLedtFMKGqcmW5be8zarKwtnrwy7jTT7rAPdNMdb9BPk6BTo2vUKgR9eCdsMhL",
  "key39": "49yH8FkuxN34e2c27LJkXPFnRzEV4xHbAKsuMoVqCsvPDdqrKLjYgXeJ7SjMajqHxn8HCtSr2R4VfuvEeyuX9oUB",
  "key40": "2h3W6p3ETE759yftp7BXJtMqsH46LrbnbBPKSNVS5hEUj37z5TwYxJdJ2L9ZPKGTc1HuX7wpK1ckG5eY3tj2yGvn",
  "key41": "5NBJFJYRvuKKzkBoh8gxiehj5CNfn1CFnMxMGKvcDJyw1KrJvQbjCy87Zu9bWBvpDCE6ndVK17RKrBveqPSMzZgQ",
  "key42": "4oaznyyaLAdqtW3bTQTB6wKAShjKSUd28QN6M1Cwcufxd6tJqDmq9wHNMmaLhDJhEX83nrbPRavBk7yPL8mTByzo",
  "key43": "YNVciim9ky8k7n5RVYR94bysPUUj6XXJQj2MWDMWjt8rpdJwLGzrAzWsZSHHoSukdLajgbfDiyFs56Dukx2cg7p",
  "key44": "nG2mszKvuoccopxwf1umyZqdr5i8ZKZFEvasBfVj5nBx4DapEz1JzCXPfaUzezV2YqcRwJgZSSn9iHk7y2oWtkB",
  "key45": "296FL5s5YoUc54Lh8hzyjus2Z4FW7xHngN5rbKQHC3Wu5KBEeVvjEEw26LwMaqCSbykFZZBp3rnqp6a95aEM6mZo",
  "key46": "4paWxSkC7eWYHP6jQtahq4XkyDfSzt6huvLGbbmP5768yiiXvp2xJBTmgyFbTASbqYLF9KrbFg8Ctpxi8am2gwVd",
  "key47": "24NrYPmmQLb4f9PedB3YwRrjT2k4iUxGEWKnYPHxZFzpZhPzJgxCfLC9euaq7tXCgwRVYHynHGb9hvLfo5tYN3to",
  "key48": "5478MG35nR5dpoPr9ASrgybFijheiAZCHeN8SV6R5yPNanZgwobJzCdKufGePLWzjn1Nzp6GeHynddwrr6exsk15"
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
