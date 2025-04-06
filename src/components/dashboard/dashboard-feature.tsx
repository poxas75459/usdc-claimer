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
    "4cjoCuwPdedRyYbCi6eaPQvmzBi7y7nhx55x8VojiuABjXVzRtZnKw2JXGozxjXsqsVcDe8FaDXyu3HH2QCRkaX8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EvdD1rsJ8cAJk44PQoZ6UyFtSD1mYp23Fp2kZwb7u4gdf87Xugugbj9Y2dJpifQWfsF6BL23qprAbTFW2pTUX7F",
  "key1": "4NEsPtC33ZQnRbmfpjjSTghi9xGsAvgYyp8zfRYyjjyYV6Dep6aeZ4vbLHVxHivLmwXkqX17qb26yTVtip6G57nE",
  "key2": "5Ltoqhk2BfCZBZJ3DTsgE2Xgw7GGbdigrtaQTf34ieiEVdGY1vMroiZTPMNxDqjyVUAQvXCWcyDTFqKvsoYVDJNZ",
  "key3": "5BWLuE5o8AYb2BijsjkYNyUACznpzxFUUmvktxktwmD5vj7o7jG6JzoS7QGcUG8k5VKweW6EH9wUvraQoTJmxTWR",
  "key4": "2GiGKwizrqRLK3LdMw4pgz621Xa9YaxCiczcSNTtfnnc9w4jz4KqTp3CyJW2L3ggj5ZXzm3castCUTTDz1RDv9dy",
  "key5": "5tchFcCkETJxvsoEFrATso3pNFZnr2hGJxhX7NE1CZ7dNDwuwWjx9vVsaWeYaQa6Vehf2YvdT8L3ZLZ1sgdjHWdf",
  "key6": "2ejyGhygF2eP8V7kUkAgURYek6ubp6sp8iTvgzDzadBQ8beNLxNwhGCWECNhUdvriQD7ftB9GVDxm564jyyr1g9s",
  "key7": "3GgBLhQogsHjwR3jHigfpMzKKh8tUC5PzUCQJyqgnhZAJjeQqsFnbNnWbSfspXN2FnMNoxdFEt42ckduyJNz9ywp",
  "key8": "4JRj2K6TWjMjzaCGQ3y62mai5SFaSBcmqEenK1ZwWM4iDBsby1Zf4UWZfnhSbBv52CbDpw4wj2BAobUwLCemuxyp",
  "key9": "3K1ZnbbS7dFNvfJnXYqZWC1JY1YzvRkBgPS2mW1dd4TmtP6uTNoBf6HuBJXKcWrphX9bDLZBK6SkCwWEwt5oK1JX",
  "key10": "2BQstjUhHRhyUjETU7nE67GrSYr7tzYpvPzQ9mChY1hap8wP4uurFSt6nEoaNVz8cGebJ2vSAmwjRrcPRZnKtabR",
  "key11": "hhUWNUeLhPH1c54KbUk2Guy3AbFWdLeHKti94WajNjUan9CdoSzDCWm75Mw1uNYhbfopYPUZmN89YvQCUTw4Bcy",
  "key12": "3UzCdZfEXygcu6qpsTANuoCWhKenisVsSWxModfuptjqxFMfz1qvgJYgyAQutqeFTcAbeWjrhQcquwWKM8F2UWCP",
  "key13": "gFRkkmGW1UXsbEsZ2dE2np6WBiWyJsNdWZwFW3yXWrDxU8kTvgtZPUCyjjW5NfQhHwJ3wKsH3Mb4FFeYZEbSrSb",
  "key14": "yXA5BGZbBmyCKBC432e5G1jYSNREQ76pCUXHJxx6GrwiWVCEyu2HjwqVuERKHdx7UdADYwbtWiQUb6gTArujYdd",
  "key15": "Bif5hWPydbhGVEPx6DThUPunFDRZkvVsYhrX4onivpSHbMMZYm5QmZYip4BSYYaieiZ7RFcSyY8niU2iPS7cUhv",
  "key16": "3bx7PwWeRZvZQNtUREr4WvBLuQMUb1rWUZQyrWjDGFXWK32wUL1rkRuMG4cJBzVPamS74ia74qXdatZY8sX6muhc",
  "key17": "5YTX6mb8CUf1RHE357YH1KEvWWR6xKtrxWXR6cQJ7nYi5FVV9Q5hJKXrxHWPEmuSNWUBi4jgfDk75x6uXeu3fuG1",
  "key18": "36UCaFQ4DhjZjvYqZcz5VtBUBzcj1mFuNAyVnJQ97pahGRE6fU2CTsvitaXetoqJaw1Vd7tKr5EsaRGoWDdw8EPB",
  "key19": "3QXiqqJb8CV9tqYg5c4BJgiw3VpcCtRyc9dx7bgMEiyVY4dkSv8YBC3qkbS87NRqomR4y8LoJnDJfbU12Tfpph9N",
  "key20": "Er1MhqVbS6v3c36x6jW2gKE6W6gHtZPv93c8BUFtJuBzK23Ca51gSWxVAQTBzMxShsRyE5kwECGbdRZQvHxapDz",
  "key21": "3EJ6xD3LL9smCpraLtLyLDg5J8WgWKbQYwgTQVMgra6NZraEGMvnmvc41oprMYhu8PeFnXNiAvLQVCkXBS1xnue6",
  "key22": "4D9pyYE89fQVfGikuubCP5pgWbnNJi9HcZCQA7NLW1L8ZQ9SC6ub2myQjFL9BatPePWfYLuy3W5jphaLR3ohfYhw",
  "key23": "5UZsz61ZV5pNQ6HyVcAhPB3R7QGvEnWueD3Gn28dRTHCWuqGE2P66nXVqNq5ShdtzyJKZfzWr6UfzPvrL53uZKV",
  "key24": "v5GBSoh3Qpg8CqXKzUGgUR2zaGXv4MtF5GxNnfTZpBkcVZxAXaoP2W2iN4DnoBSvui7nLAFXZWov4SBYos39oju",
  "key25": "628aY3DsSNodouwsFSYAbStvXjgT9odeoQyqcGatF5nKLiW3ZnzGK6hwriDRSDrrRAqWQBy8HaQkacA7hUMatMmo",
  "key26": "2PKNdcrL8McQ3GzApASct56zEdjE3kYyY6ZBmH6GWoKQEWEikSgT9RN8yE3atygotw5GYfgKenVcbhsuotFwmgfG",
  "key27": "3jWyTtjNzGd9v2mxPvXmBT4A4DLLTmeajqwsQTZ4Uxw7HoGs5Byfb7vbAGtX15xZyQ1n1gQ5Kmhucu7Rv6a4q2Bm",
  "key28": "SqHihAL4ciFa3QNdWpYhCuXJ95G1fQU6dLrVmBYBPD8yGnFGXM55Sn2pVBNg7iPRQr8S4A49vpbUVtxPevkr4Ju",
  "key29": "2gHFjHe2SWY7fDUd9Rs1zDpeSpzh4Qrc1ek2f1b7uHxDfPwpEV5jDXmHTrC6ge3jRX6nVbtvBeabetVB7e4oGFei",
  "key30": "4fWBDJVS13qU8JVyBBW2XDwRmPEpjxopvhZZtikygTBfnDcDngND6ayyR27M9xPEyd6abdabb1APR1Ct6wtoHSoi",
  "key31": "2rYRiK5otu8KX8XfQC5f3AAoW4swoe9SgWXP5KkyVKDYcfZXtwMQSSMowjxFFEwPHA2fG74B8Tf1WSU6F8Znam8b",
  "key32": "5SLdiAwH9cJ9EcUvRd75H5nF2UTEnXCwDLF8Kt2vDSA482BYWgGdUg8ZCqNMMkut6jCWxxzyCW3sxTshGmQruEiZ",
  "key33": "3LATV6QSnvs7ZU6y9a3SY6taDmu79E5fHVK2mqn71VzSM9oRuS4EpYJRox9hcjx6DdJd7wmwM4oXJkwPVwV62LxQ",
  "key34": "4b9Wjj5rGFgTktaczUq1WYe9Z5sBcRxoh85REoUvbebfsk1CVz5ZvHQq4LnV9Lqju7b3LA6HYcqcw6YNKfn4MDCe",
  "key35": "5obt3UTq3hbkU5sUDF7P67RDa7YY9DUsiw49hvKjSvdbBq5aZVWfhPwaVpQgDvVNEYVBc6q2efjj65mBSMMGzBmD",
  "key36": "bJyVdfXiamobP7VRnkLquTNMiDJJgRW5s8SLCJWkh6d8ATYvLnh7ShXXvS9kAcr3MrSZF1aZbK9ucYd4YH5p3dx",
  "key37": "2K1ygcrDgFbwtJN7dJWWmtgzEWzX6NXZRwkGdBgr91hU44rDS2aQiudC6aYRe397MdtvcovYeYrn8Zu2cXPS9Mkh",
  "key38": "4WAwVN6JRnATVGvRyWrh2wmZyf6jVTqK56E9N9PSaE2xu5Ys1cjQ31CWy2TJgxp7qucSNCGsAcvwYJPvtQxqzKDE",
  "key39": "24WEbxGiwt9GngggGStYCKXSPihz8LtR2DGboN9w7Mtb5q5z2vKtiJoL7fAcwTAx4VESwyvyKPdRUASDRiAtDdgF",
  "key40": "3B7w7Wv8P3W5FgrHG1AvKZw2CZLfkyhY8LnT4Ygw7KC3pjtifJ9cVCbPFbUtQWCsX4uE8h7ynEPyKeUd8cqyAXoC"
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
