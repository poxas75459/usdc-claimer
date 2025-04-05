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
    "54TzvCVHXYqiwVeidXHvh8QSYwdBHTiGpV3GhTb1MvPaxUjmbngjzL56LKbaWaG2yd8nvmUb5DNvwCF9iaWKS6mK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XwrSV7vLn71JryHHggwQqu4KGdByYuEj6HSQ9rsX4twMcwpCJn3Ak13u3JdBVknEndB6KrgqjHdt2D5oU2FiD9y",
  "key1": "QzfDF2WLMoBWTjfKxCmKzoDdt34Wnap32NyAkrJ5daEpRboo4LgPoa8Z3o82JGSsQkhzdNhsv2hYPKcJAe1ztH3",
  "key2": "5ESPGSE1H7Nvm7dAnhWRUTTRECPm5bQySMptwoAHsoYzNiLB89LWfM9hHn6qSQ54vghohkFxe5UkZCFEFPs1SumW",
  "key3": "49fWU8WWCvd3TFhYnnax5s9njWQz79J8HZ1mnVzZGzfWWr49Z2GETg8ut344YUcuasa6ojtFky4pYyU2jieHjUn5",
  "key4": "Fs5JAmNJmAfWDG9cUK4yJqLDAaDyiakuHtAUrimCg4GGMmnQhxN9CMBsSkdwwF5PJSzuHHa5WEUsahT5cZKtsfe",
  "key5": "5Bq4EA7mGbqa27QMoguu86ipagQQuehLrWyWP973qjxMtd7xjrEi7mDFQy3qqH6dP54ZgSQjwFYyj2oBq7hgcsWB",
  "key6": "qchr7s2kTVvBcHwCEf8YHWo5zmTtUy1efC2eJwcyp9EKBP9kBjc9iqHN5UCZFqb9GqXiEvquDXkbMJh1117uRHQ",
  "key7": "58PEPfgwD2XEJBg6tgzFZSkCmooFPfP2MHnhrdzgcgqLHEqtgjUi6s94nQc4KrzKcTuiFV16TSfr7c5aEt8WBS44",
  "key8": "T5aD4KAsG3GcFG5VFQQQTqRqh7QjAR6JyYPHXsjbQga2mt63L2kx78Dkre9GvwCeDpoducovzMNdbu5tPABGk7X",
  "key9": "24eR3LgRXZwaEzoiTyNUQZr6Prvdap8kcKoAGyyYMqmrJfn6LG1VYybdknE1LT4UeqA2DLh2kb82jsAuk1LyL287",
  "key10": "3ur9itk9sCKaCS5FPF2CfCq8s5igQnqsk2SFkiX4Snm4HMHf6NhSprn1JUUQpYynoaVkzKZLrBqQMFP2xV5GJbAe",
  "key11": "5jwPSaEdfKTwCK1kPbdi9M3qmuqngbWvJ6pLAyGevdNFnHA8MLb3ukWrN3LnzGCzHvht9Ug9y2YP4tgSWNiJVPw8",
  "key12": "2caCRcE1D5E8HvJQJMhKhdFGvTF6Ad38YtvxoMV22e3tig5E4fprby4vzYFBcMNXhUEZ8JJ2p5Nq6prUPgJriH1a",
  "key13": "4zPBG5Uxi6BVsui3FtFC6ZrCmWH3S4aH4nLLg7nW8wShiKs7XJhEBCPg4a31v6Lts4gj2J5p1jzmmQmpFittHKvV",
  "key14": "4yJQQN5iP97X4DHaaYft5MEaLvSr2sfkPGyjuL2gmMyNDJRA6js9bZSqijg1viNcja6XqrUJQA4Tdf7b9Q9YMrie",
  "key15": "22zqTn6gg9MgHBMydeZe5xo8u2bcQyWn7zyzG5gDR2gmb2x7QN93HTUu3HNBBXWh8cxcM6Ae7xbFKbaEw1UakYiD",
  "key16": "5i6EPXsA1XVs4cSVzUbBAqrZvN2mhkKJzmcbYyMhseG6qVwCytbHGQXsGHjxqjYUSoKiE5fFHzn2pdQBWxgrC97m",
  "key17": "5QTgzsA3pWAnS9Uikd6dA2vbyoP2oP9GGeoTFwejbbtYrhtnjP9pUitMozdRhrX1fkPXEevwpWuKB6MqAPZpPgVP",
  "key18": "3wM69FnoY2j5EbzUvQfZhpuErQ8vizfEoRoFLbRT8Nfjmzuq86KCsf31crqZA14WRdVgURbJZ8ycGdEcRnonb2dG",
  "key19": "37hD6ZpAj9GHZBLAqdwZLqPhKd2yvsy9AEUy1qwS8NUur6mYFf3RNesLpDNSCQxCrPPHX6jBKneQtqbZr2Vx2mTV",
  "key20": "Aa9EMnRVSxd5hjuC51uENtHB2Ef12oDomrk9Lyb2XeM6pD1dJ9XGy3ZrhPh7M8aLS1t6KhM7npkhpH4CKFGkxyc",
  "key21": "5kjgCwYzAFFVt3AS4kBD66a6SteXR9ar8SqYq4ALyYLieXHug6a4ER7oWbrWbBirsG41YfaGxkXrJcV5w4wzfYJ2",
  "key22": "2zcUSjFk5qbwvTSJ4haZHd1EU9XzW8ikr9WkLqqAytFSK6jNvy9jPyXf4ymP2eR4PU6ieF6oc2xADWrD2ZMQanJz",
  "key23": "2XJh3a91FmhtKUThfzXodHmYyaHwrSQe6XHa4q4bjWtdJwCJ4Ph3PteK1mZKN31mJ8u7XD9pRcKnV9yHBqLCqgeA",
  "key24": "4J8j5BXRG7xGvUBEPM8XymZEcCvBZwEm3J1qNKf8TUXeKbC5ebebzz9do1Tp4mp1vjgmhukDg2Vmk4Zgo5vGKLGG",
  "key25": "34bsRs5kZTELy9hucE7BqR8xrdYELDnmoNbwb5voP1TDFaYi5hQWwFiPagK7z3zy4UBvxeXTYzq72hxbUEPS5tf",
  "key26": "5LHp54MF6PHmiVuFitFcSG2yBRimeAtcgPq59XMZELcjHC7KWq6PYoYEWonV89jM9Ah4CTe9TgfZHsC1o1aJC7NC",
  "key27": "2YRJr6bjVjwgxQmHuTAce3artzRseyugoDm49NjT81f2Hi42nVr6s6fRT8vWqsvb1uJAJUH2KaK9BGek1fASwDEh",
  "key28": "2PVhwCTvapnt7z3GbmF5ZdsA9TdK45EbHCx6DQvtJwxGPcQfF5FjP4kTR7ozmpdtJEBsSsUyp72XiZS1seJzUimR"
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
