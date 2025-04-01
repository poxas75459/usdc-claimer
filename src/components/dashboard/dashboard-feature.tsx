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
    "3ffCGgasxFMfSe2eQBoBdt2WqPdehyvba5dd5VoMY95z2J5xMLWchmKEQrBa8AY4Vp2ahP1jhmoxcdJiFM5fo2Dt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tHzdg95x6n1TwcspYazu89egAYqXqwK4EwKF5DMyisNqcJjFGnajvZsD8NoVaNCaYjRNzSy19PVAMZT93K5obn5",
  "key1": "4GNmPpfj5gYoHRJmiM3prmGZpqMJCandwh7WMb9Wwp36F6FzrjiQtsPURMTjoFvd1ZjrnguVoWLdZRpYFKbvCjMs",
  "key2": "8gBeeEtSKdXntStGXLrNaLQWJoBvbw5uHubzkpEFjX7mAX2eTrzwa5dEDkhctCBmjFDJpbizbsVkrbrXNLD5jo7",
  "key3": "4cj1E1fdy7nhDPBnBizK4qqZ2vidCDnDgUjMi3miJn1Pbm6TDAohXLEnDRkcSeBzmE64erY6ZYTSgBsoesNKZZR8",
  "key4": "5fUZCsAeiR3SPVwD8UJBVHunHRmH6npzr8f5KK2rnoEwafznj3URo1xNgjWZFz28BQFCHVJAFd7AAUTnwrjTCYFr",
  "key5": "4Hk14rsK9siThGr6moGPRcLpngoRqx7feh4jAvTs21gh6KHmr3KmNGU6sjmaytd7heoxTgmakw53BXMyDkSDQwdP",
  "key6": "63XtsvYSZq6vhACzSKZyEeYYY6zZqqoKJorUTo24RM7D9ptmAVoQVVzpfhqoNaT7ZGj9N3oRy7y3M8cS5qEdphen",
  "key7": "2cuma4j4Wf7v3QCLosZYcpQbJ3miN5DBpzRe4wCFHS2XUkVZsRQFe9X9FRxai6F8ELPgQuq3KmnHmvR5nbTmhJuh",
  "key8": "33yMahkZC4sYr4gGAfMu51PyneUvbCUJwq7mpbvxChixhhED5Jojmbcg3yzgMCdwsbnU7L4sm6zbPEjp6Jx92T47",
  "key9": "QnV8GuF94gsfY9TYCEXtXFXUswANzpPa9fbpnXjcdb7Z1tbvgzcMujXyUtXBFg1GWxzKiz22kMrR4er3qQsQ68Q",
  "key10": "2dgSY7WSueKT58Kxz1vWb8oFps7PunYam3VTWiUMsgeSPW6VrYTbC6EwvPyC1LzHMSLgGkYbCj3erGToXf7ES66j",
  "key11": "8K8hsawjfZWpqGFqHBP1P9Q2wbbCBN2ibgkNM88nUiaUtqaXornv2QuV8dV7WAUbr2aWN6QEpwyKnAd7Km2wvMs",
  "key12": "4pL1KAs3ijT2PmfJkAXKiMWuGgVXBQcvQ9Q62jXqW6sf9EX7eKVXz479GGbB7119ZAtDynhqipsusmxfn9hiZBZh",
  "key13": "5aLzcbpTstUySw7kwqwhSRpSuZEEaNJqLACL5PzXqt99Q93YJ9uJBn6apYKbLokE1UXhBrdEgM1fydGXC3UNWgKm",
  "key14": "2wxyCoBYYbxX7kzqzwdAJ49aFszKp7iMY78knDmrt1XxwA4Nuh2DZtp7YMhZxVnP5ZABm7agF1DJaw6JjD868TVy",
  "key15": "sLEdXiippxdKWbdzGyAgx1QovTWx869kEgAaXmJcN63nWxB4MMdRUNZmrukTEw3arVrGb1jFrNaknXmJCjVqt8k",
  "key16": "2LxAJGiuMuqVNZgeU3Rnyx3pCcrLqTgBEVPP22srDe87v41Xfkc9mEnUiALQxc9BSMCxqKa92J9PxU38k1UoCtx6",
  "key17": "ixJGKsxyzKvDgVec7mZczXd2ZGNnpyKinstwz3D5j4FpBbAWftmpSuc9kH3Kni457uUAnVkc7TYibLK3rTtnefp",
  "key18": "4WE2o1fVUJGCqjns88ZKC5PcVir7xEvhMPCXjcjh8CMFpuGM4PHsQT47mrEhA7h2ztuVo8pJN1f2PQxmnYDmv1S",
  "key19": "2AUwRJEVode6NGTQ8M6fS9wd7WjDUyvHvnpUbZUTtYekJ3V48f7F7WHvyNsfeHTyEvudWWTfLCHwWEVptXvJyP8B",
  "key20": "3YeW79FhMKvr7xDXpkNfyFS3hWBZchy9f9CmB7xuXYH8UawFgyN3v2ebi2aB7vDpEYYsVgJqJmDS7XQjKs6t9tBa",
  "key21": "WjsUoSKes1hsQuCNi1WgJXrjWXxzn4K5JewJ2eJwHAPMmtmZroYCVLC9fJXnCmW1gGFvwLw8FKVZDWZhU4CEvR4",
  "key22": "4ASowowka5Lsh2sXskwqjDttWxicUSiAofbfuYzXGhXqgbJ7cZKfc9Zrgx8skb21RVxG9u1ZEWqyM3q3oUdKAmP2",
  "key23": "5Rq4HxSatxNig5A7an734qGDibrzms9vHpP7AefaZwvscCfTyw2eSZszaLoYktmcwpC6WDJ7eY5mHQS79m9tG5M6",
  "key24": "ZSSDhBqtcvYpeFT7ZoVmEqLCAiVjSqnB6XaJUdHHKEJZPaZXRA4v5Uw2KBPQoGTSAcveF5TCKpn9RtZCNHdT434",
  "key25": "2uwnLUxdSh4wq7JaEH4KtobBTRrrYK6pY9356F5ZGQ6SB2jPgejZ8RFvGbLjVMzQUSZzMZ5c4ELZu9RWkwH6MrgM",
  "key26": "4s7Wsm5B4KaQ5tKovDKMRjbozpwJFtVFWcAAKZUYRbubfgVTSicRRoiZyWn8k28F2r9xDGsaSpyiGf9ejmN3LSuC"
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
