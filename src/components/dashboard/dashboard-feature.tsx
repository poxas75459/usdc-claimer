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
    "kDYw3mbFrNpn1m4GLFF2jRw1Wm7ykmUrijVRHScRSZwGNYEAwUhKxAcVgb2Gy6tNpcgeMUZFNtR36L36KqogrEQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FTHf846HH1ZTGvYRdyPJVFxxfDJJ5DYDc6TtpP5M8EGVp6tWy2CeNuJtXHXgn2ypxCQybUoaT8Q1fKmFUbUxyq9",
  "key1": "bCHVp6zWfHYXTPe2k6ZMfK4nkfGdGzfiesa4FvgzTgZeRMx5gWqsDEeetRM1UXFnoFRjsPXK4qgxsfPfdAWVYQH",
  "key2": "3bU99jyPbaZLQNYUtfC1ohn1Uz64c9ivc5W2ufsvH6eYVDjYgAT2NW55fYXgRKjt2yh6BzYRCW6rwwshSnE2RnzN",
  "key3": "3tREDCazxdFRbZLi7TMmcEio2LvgapwVp4HNHKEvhz4wNQcMzdfz2RyA2hVFhUfFiM1QExDA1cqJPDhD6wt7DcjA",
  "key4": "4eJ1pipNaaRX3DWifCsuA9sBgnx32dpUSf1HVe9MMU8Mdij6hXaMFZpYwbHtNibNbMdpG3naRRjfTJYj8CTn12JE",
  "key5": "2Zm7vWV7zqWU7VpKtC1wTXZfisJgV2M9pyaYp8AwZpn46BDRrmUgDcYRr2yDkzLsvFij38MwGr9BUdKvb7dkfzac",
  "key6": "3UNzcMwRhukV5BhpfDSV6Q6WNj9ceet5GZEVfnQg4WxQq9hQKKNVzsLZZqHj5MrMFzC5faysWsCdLvDo54xdQxZC",
  "key7": "3ZS1tyyYnPBPBWSkKM77ewJMLfLHU1vbeHZxGvDg8Cr3uRT1qtpy9FqT318FKVMYdjMuxVFZJ4PiZurMiVwcuThg",
  "key8": "4uiXhbPtoEBxezpKidr3D7GY6N73EWHbm4WuYingggLkUbW4tfh99dtEyde5VuQ6Z9fndiZuqK48ahPSviXZrQzk",
  "key9": "63tpWiLzqMTpuwFt8A9HDcoMZLZfoLnNbeLEbxHaz7braBuapZAiQKe65Eur3vhCFX63Kkon6j1SigH9ajzv23UD",
  "key10": "45P8nNXA6JVtBS85xbdcfZSaQdGuM9z8PCw9R4JMk1mYiW1Hx5nXkiaRLGj54JUsdzY8Dimo96bQWb9difc3guAo",
  "key11": "53Me9rG852EEd4YxE9mnvB8ZFnoR3zdxBY7c3gXQL4zeh9tbRa12Avenym7kgXhup17JjYo6JT9tKcPXfUxoywS7",
  "key12": "2LtDYittUkXCq44eEkgA7T7tLfHJxdLCyWoqq5MUyb3FgR6sTBXM1s81L55L9neAXjxvwu5hk7sPWMCoEaA7yaY5",
  "key13": "wYFTs2YcsLiQcUdQ2qSseeqjpwaHWrv4RZ8wbzbZ9z3Z9BSZL5pScaqSJEcqMh7zhR2ppxXHdgYaCs833B98HMa",
  "key14": "3drxUxLhMU5ujcXPdBU9xntxbJgDCV4yfa49WFDiweLzqoGfatPrabDe9MRbt3yjYRtnWE3yi9aZxFnX2z1bJMBN",
  "key15": "9hS6gJtt36KAfidwrRsuDNC716EXwQUd2yhPR3WRV1f4NaThq81jz5G1S5N5aGefkRf2y5A3c47arJ32EJZv8fg",
  "key16": "t7FUk4WSFuiHEEXbhPw9k228mZBCTZRQmNNLbui6HBjh5WoizuwgrzDyRESDMCWHUd2a7amzHCGLyizm9thEKDy",
  "key17": "2aSkNJkmiaPoG5c2JNjJ6xd4LFdNdZGAhqzrmPN71bbofEhSxo9vY8wU46Q4Ff9qcMJbKFQoRmrPSnM5hQxcfe2K",
  "key18": "MQzjJJ8BaZrFvmmHQNfPmWXVbHKmWY99WCRivCcXnQiR44ZArPgf6uyf73bExc1exLQBdk22EZRdYxC52oijZHt",
  "key19": "5y8xmrT2WcoRvV2pnyxKP9Zgp5sSbcGeVzYoR8pYZYkcfS6qNXEXmEfqjyfN67mTFQi4HcqVcgYEEcPkAAw94VZt",
  "key20": "43FV2PdowVyrgFt7xWxScPZteZbWv6ehdssAEffrGg9gd6xuiU1x1eiWp6oTV32aNQPYjmUTLYhRkLn1a1YYakmi",
  "key21": "4isNuqSFGjujVfsuQX8cerqTj5Vi6EkgqBXfMRA7mop1P7pYsHc5womWaR4LF6Zz3AHT7U5uBm8D8DNo3bcLk7wi",
  "key22": "3rXTvdfcxSyntXHHMJM6UKk74zM4VZrzc2LWnR17w9wcWM9XEXiiAQMLyZVtZX7wzWTtnanMw735MKF4562dCcot",
  "key23": "5EcW7M1P1tYCxMXsJjv6MvbzDExi1gatTQ1A8KXeLvEqFjfpM9co6b6zXZbeRMBzpP3vQLW7jZzEYQgHZjbKMGQc",
  "key24": "3bssVeh8gaBZKKuy1miDVVCX8J8RZeo8fm4NkEZ8uFqWt4FRY9Gvxo6afQCaPywkeCKH6pgT76ATXRnHESNiwQnL",
  "key25": "zSEJbh6HubWUQ9wUobbU7gfoW4jVVFLMuTU24bK7uwykoSaJjnFZACDZKWdAyJTW9d1JnfqNPsEMsAMBfa8WpVn",
  "key26": "4wqMMzno8fD4Tvyy3RnGP4bTJzpqa7onuWMCRis9q6hbFUpGMXtHeyFLHG3U5Xwxay28HETJjtwAWVxLhsaLPvW",
  "key27": "65Q88Z7biiZMQZXPaamCVYtb1oo1a5q4gkYs9i7kWeAavcgB2eP4GJUpW9NbBR7vG9sphMeDzh4KcA63fDueeNP"
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
