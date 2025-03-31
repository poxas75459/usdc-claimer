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
    "4cZhfWgRAfwHfSWAV3o59BfJU6UCTLDrApBu37A74R63E8PT6i3M4iCtiZQg88FFVvGYa4kMW9MmhGmxjbtCTKpk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23YXV8GeNRqPvzFhaVuXLtt4Un9iciL7sV9M164nE7zAZPSZmYfqeEb4RLdVcAYq7Dfggmi8VWLxtTHVdETZuE5t",
  "key1": "5oUiXhxaPNcAYYmFo1c29LZo5g7yW9zUcBSTUCaq1Hdm1W5WQooGWBCxedp4K2cP33jEUrEJD666dscW84BDtkcd",
  "key2": "VbjfTEeMQAXcnknMBxZA8KWrM5VeMw5Xx95uyVoEAdxc59F49j6Ent12Rq33Zo5KPHnwSnvL4VyN63oixZfEn9B",
  "key3": "3dn7pbRHCAkrbhv17CPJczfZyHVida7nj7RSoMDqVSa1Qz5DcdNTH6dquT8eDeq763K4p4iAhAChMcdAuXdxkjbs",
  "key4": "5PitpSeVmJfak3HAfznj2ZkAV7gXizTN4AhEiPcBN3squBbiZf6CqjaMTULyENqM6SHFnwaEK3Pninbq7nkinEYq",
  "key5": "2vAa3wXQ5ff3KhypGoMUSab6ptunRr77qKnR5yHfewXNMiRSsnF9yL15JC4a8LFpFN1EiKbKJQ7ACc137djTf9k",
  "key6": "qxniA9mo4Yc1acaXnVUV5F8oCwZQQvvdyuDEKuPvS5HhZtfkcQXwpFtDAXP8YrFKzbvYoneiwxUUedpmTcXKLzw",
  "key7": "1k85cLz7GPYVpSvTKVDDr5wdte8tZXGFykEDdq886bnYrbWYq7WHzigMZxAorxcEnkxHDXMbKNcKMgYVm1qhcaL",
  "key8": "4gKb9GZTANCe96opCePeZJWQPBqV3KMNNf7p92PLHR4mwVrTYZTSyWc9o8trZcFdn6UkyupyTgA5Nssi1LKi7YHE",
  "key9": "2SLEgnyriWuXTUhCJgF3s4unZ7ULhBoPMsEqV7XwVSBKfNiaB76QJrGYLL4TT1inGgvVLRzpumtYMTrF5FC4wdZP",
  "key10": "5PAmaLaW822BeEwu923YRF6HLqq4oCCFe75J95RMALh9ZdZE4pRfGVqADd3ANjWPxgR9YmqrCFoadQbEX7PnojuP",
  "key11": "4e8U57z686ECzsNDuLr2QkEXvBweEgMS1wXHEHeuK3ypgxiaF1ZTH3WDGDbVfX6tWXbpzPPbPHeWspcwrJruJqWs",
  "key12": "5keym9HUb1Zc33UGxyjppzGKV9g358dH5KvaQAqiZmeViqenoFCbmYWJwgcf3MYgxj51p3mhhFmMztzp4dkgpZLt",
  "key13": "54tg5RnQM8qr3yKXwCXCZRNJz3zggghkjRfeLCTy3ih2ex3MRanLM5yU4d54pyKe7kXAhwnrKiXsqUANLi1F9D2x",
  "key14": "5xLqq4JDS31UqkzmrmxTtJDVfYVMFJmEDER9ojQxGoJ7yJf9KmyUwU3XczmxvayRjkmyRgHyqGSDWf7U92kz2K2L",
  "key15": "wJ7xydbkVxBHZHdbiy53RSTiKeWibPDUZ5bvNmsi4ysN2vySc2eo4MMCwakziNNfgWnPTite5m2cZKuWrA5ixrC",
  "key16": "38Trg68kkmWDubzaoMNTuYHNJdMZfC592WVhDh5xpSeUPdauCYgGFGHPt9cp8YKEbRtskW648Af9TpMHk9ejXfs5",
  "key17": "3wJkkzroq4o3Z6MtATh1WXcYdgvZ7TWHB4Kn122B2YG23rdpxw73WwCM9jNUveYpuRdJxwNW7fPgzqgtUJcvJ5Gh",
  "key18": "c652bJi4xBsdKKcDAvE3wLJSnpJ3uSrzYZ5opp8cGp37eC71FoGE1SgV8PNAgUYuw645ZjkQpyv5PoromSCWByj",
  "key19": "2JT4VEZzf5MahWMYB4pCah2JrZ3LVz7zKdER4UCd6shrzR5jVHgZvLcuReCF8hz6RwDRv1S1Sg9iQC4vc8KjaGcB",
  "key20": "4fVS8noGdVNaa8ssnQqNr14u7FBi8oNRtuSHfUTwMoZg1nofD9kQwYrRA24QWfz4Lxjik1Wsm8YbGXuWe5r4vZRt",
  "key21": "5mrjrzcXnNhkZFAENam7JRz8p8gJ1UVWjWh5WT35YUWNmzNMxi3drVVp8bHeLzSqci42BWoznZL5EdefG4eTb7ym",
  "key22": "51V8i3c5VJNZZcoTXxJa7mjc9UaEHoUPyHwsmYGyn5dFaSheEe3AW9VFCd4xotUGCERgwJ1STvVZo48rXzJd3bA3",
  "key23": "2ZJHCBAtBmLNj2qhmtaQXqUKEHDsZ6n9DjDJCPeZK8aK4qsZSNCzgoMP3ehZZkwx7oUqswCk3jZm7EtCAQK16tsm",
  "key24": "5S3hRhzvDDsk6TD2uM3BmLzWLZxrFsHm8LjXhdB8xFJK98R2VgSW9m6a3nUWjZ4eXASqdcvX5ZAoM4BTZEyaKoBA",
  "key25": "64mCpWZ7Tp6nJ8gBEsaWhc6VTTGehebvA69SbH99MMrPYGkZirATEiDsPcdwzA236sYXnCrN5MwnutY2yHJBdeXc",
  "key26": "Biia11YaoVsRR7amzeNDVuH8ahhCcRrNN2vxpz9gnBFkAuG65rLTrEp82cVoGxhMxdxTPPhJvc1r4gGVxzPduux",
  "key27": "TxnwzDzyZFYghZ921txCpEV8eQcefcH1TCYzL98DYJUTxdcHK3YTKvJwZ49M7ZRbPEYk56LdochjbLou5878psr",
  "key28": "4qAgfFpMUL5WpGtGfsK2ZtN2PUfGLZk8cgASNidc5nKr8RikBV1eM7JUiE5Z6tzVa6zDY7kPgbcL7LP3J1NiFFuq",
  "key29": "35finNNeEUAjnXEXsuGE4GLKAF8QQCfuN29n39EKVpSp1WLXv86VGarva7cWcG78gokEn7uU53w9XfzeRdgnFNH3",
  "key30": "2nPGGGiR78zga5qjEYoZkN63L3YDNrEhmJBkkS1EhfvZGitZggKoRLTctoZXtKSc7zmJznaXeW8kwNSTb59wt2Mr"
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
