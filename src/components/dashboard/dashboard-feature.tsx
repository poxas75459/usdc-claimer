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
    "5HyMj6eURfC9G8Na13VudP9H3QCsswQtStABEKGkTVTWkheHmt55NARvKjDwLrrkM6tpysQ6xVK8rjtrLdASHUVF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64vb1pMK2FTJnRm7bg1beHdDaDyXGeJ3qbhpz394MUQ1Uugmrp5Fgq7xoKYFFB1ibKPrWvTRHLSPQjjzk6Sos8bM",
  "key1": "4AwkkzBn5uFj1TsNpKL57QwnyUqLtVghqQ8eBBTMsu1RHz6o2QnKueH2oSLHGrg8vHmxLBJqGeEAHBvSiVG1YPDa",
  "key2": "5rAPqw4aC1cjao5kAF1jwarHhvfziXECQcVwqM4UJTPybuDPbcX3xZ1quoWQQCehYrVx5RV4qjYSZEH3FT8ALbjJ",
  "key3": "3fCpAN4SdsLS7LcvFzBa6psPLHL22rYR9F4ALfv8F4FeADwUK93ex9LocHMVDNMdmng1Js74s314EpZCQxP3r5v5",
  "key4": "38CFNKt5ASv7GeCfnhxu9zwHdbLH3BoztkpSLjpT9dUSAm87CWx26uyZH9kQQywaEvoXiJwH9qzrxUTxg2BaNsZh",
  "key5": "3MLGYpjZdEqtTW54cNG8jCwxk9T8TvDNWG7uwyVmHg9HXiAXd2yHpzcghLSxdZwvQHvjwQXZxD4KAZp1LmTiQoHB",
  "key6": "3WzkwfHkm1jGCGYK7VtSgqkcbT8X8dJwn4Dr9QZopN3Eq3x3Jgbkss6hCcTgo6bEbFEBm1maGHJXsMVppyPCYN5u",
  "key7": "4JEJpsrbCjmLaYJ9rJqZYJ9vTEJaGNAHMpNHwW3NbggL9onsZjG5PmKfjyyTzJh2vNuYAbhSwAmheHyvMiTre8HT",
  "key8": "uyLe1txMBkuwQ4XfEwvcRptA9W827Ze1dXhDitGqa7dyCsrgChQsWuwzqWBvbnzcGsisMKRjzrZaYAyAgwPyDUc",
  "key9": "4zxoHS7QfowugZYyLyLjwSf2Vn6qBbLFUMhSTEGZfLBdDnEEivA7nYY4HTtruLoxrcW7KpBEjo7QLEBPZVzCSjko",
  "key10": "3P5Q2horEu5cpQykHYZFJXAjbcjj7sWGPGnBw6ztMNx3wm7rvNW2PERSNkKaqMBREoMgxnsLaLaVTvx4X3mtDB8",
  "key11": "4ubqknHsj8LzdhBAQEevG891rDJh7p7RAiGPYtAgbGCfCq52t8gbM81gwqP28QiwR9pdxhmV9CNtboaiA9PiEaBV",
  "key12": "29WnycWfg9B92NTTD73teRLekgzsshaVh5rPr6c7AgL8qKxh3M1YAxLMRfhuAYHxi8t3nMYWjaz23DNGEYaWj3DR",
  "key13": "d3HWyusKTJyBD1yEs9JfdJgbQJ8L68xA9vEro97y2wPv4PQv4QD7qTdjCkv86PWfuJdPQmwAG5PkVpgzVarZKr2",
  "key14": "4tdKPGm7JDpgg6Up3GVb9H2Dv5LdpaXJyHZtvyvzC39vKgirwqc88BU1UJMWL33v6MrtQYNHFmScrAV7oS6utpBy",
  "key15": "66ns46JnmhzrpFKdS8za1vmcySfpR9kLdt7GpB4CZncChM1ASVyHBKjFA2zsa1uP74DbyxR1pPMPgekPTwWCYwBx",
  "key16": "5hZYCv24hyPDhii67zJFi3ffWsBq5MvoKAqZxTbLEm4RwEa3KE3QDfFLdf82osfsxgs2zBjd9e26tD1RWWJpA49V",
  "key17": "7u39EqQcZ855tB9E8CzSo2v9rwioz7xRqJZUZ9DUz6SFAh2h2kSzAA4UHjroF5jtMyKiEnBxhMPKjfzozk8z34r",
  "key18": "y7HMFjxwfJcgGMkkALV8HNVKWzTAxHCyTgEZRxD8Vzw2By9St1YTAH34CVVCKKCEU9KgTiWM5AYWopa5A6TrA6R",
  "key19": "3H5rPKhpPZZVXvoZ3rjLjYq785hHNEuM5vCkGJez6MxT4igWA39ZSM82JEGv8iAU1uLPi46vMMMSKhjNv9Sz8Lu2",
  "key20": "4qkm9xDA5PUwrsYqeABeEhXHXPRbfpmYMLTsRfcajSTKjoQh57TParzF94SKgSf3FRASqaUGgYc8XzCLwvLATk7i",
  "key21": "56aM9bWe5NVRLAaaXYd2jfyYmFJGXW6Uo6L4SA4g5akJ4TD5qJyS7MyByiAiUg77q7vhZ3UsVKfyTjNe5R1k9ynY",
  "key22": "3C64XyF3Dqfe8ge7fKovPwPw8sCX1dh3hZAAHzxuerW9ydXtVCjCcQooDZZL25fVJiJeBXbJZFbMBJEpWQuvpyM5",
  "key23": "67WE9LhkEiSBNKFTo8eqkujvN1eYxuJJ4GWUfW8pK47iXkvcFZzouPkSdBQProKYNwBfJBDvNAnceBtiMp7wXqMr",
  "key24": "354TTr3zfEhkTj9iaPaMwzXJ68CND9C5YNrap9DGotRJ8QrEHqRAnspi87j7wCh7oZopU3pXjxEGxP55euAcBPrH",
  "key25": "54CTTY1xzt1bUnm4wocNVWc4oPMKq5aPkoXJtnB2zNGw3owjAj2CHb4Re6HqM1LuEAcUwdz8xoVzRAXbzPpDmg3f",
  "key26": "4sUoE7CDeGqzF3iaX7wkJ2JJvMk6AnectxoxbXY579U3ufp1ofhhGTzDHFg4dYE8QkWZZX6aC6tSZWLDPaB4EYTj"
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
