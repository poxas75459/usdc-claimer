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
    "2jgXEBuAGkJtTW4Sonm65fNrSZ66y3J9MqpFEUFDkVLhEbgd1fUHTJvHihrpZVWo3cFWucao7E3pokgpg6Fqx5Bb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WsY44ABfVnPpwUTyUEh53XN757YEHesqaxAzt98sT1cY1XacUNF9Hr8zZEeRxVj29h5RVToGJwrRxQy2ejy1EjG",
  "key1": "47gwX8m4VYn32aHUGRVUfYvQNjw5Titw3UuzxKkXLTLbtv2McjFZjfq9wotT3Zd8nPjp8dBPHKJSVXF5jbNjoQjM",
  "key2": "2MhDGjUF9ydiBywZAcjTVVitG7FwPXURjDwnQQHSxRcqj1cbmN3hqwLpUA5nrZizzDfsXJeXgTJK2BjGPKb6jH32",
  "key3": "4QMDqta9gB28jy5Anvb7EarG8BobFfAnUGELvjqomkoVUixkDXBj6bAMAZgUEdqJrodFjhriTsUjruAYFJpFsoGY",
  "key4": "3WRzShEuqdsnKLXRYDZnsi6DziZS5JMkHFnQR4G1U4KniPgBrFKMmh5NJnER6GUnAynngKaXiHxJZAP9kzVLQPD",
  "key5": "4ebPLnVd1tuyV3agcEXk1PTozahn7RKnU37TTNZPofhhkq5DrKdnYaLhUTQgsQf7zNSMYwXRGu51uCkcvobnHbAH",
  "key6": "67R65cddUCgxYcrx3tnUYfhXaYWhaBSbyxygMALLi4SzSPvU3Rs95saG5pSTCmyE7amKoghCtEGN689XM1vCEg3W",
  "key7": "3optFPv5V7GLdC77y5MZEgcoJpAEPjS4aRxMFjQ6n6As6WURcKhhsePFQGvNKn6ecZ4RWZ1RsnV4KNhz9o6PVq1Y",
  "key8": "2fVSeCs4PEuqHdrmaTiqcWsqJPfoWQqtY3rmupyqnHrcGYTFsSEFujyGXqB5CVaYANtQUCdXnKrJdC4LDDed5MpX",
  "key9": "3rhEhVVdATXvANRhcm1yLigwnb1vbig8H2pnWED9MiFrX3Yj1QUATuwgWSXo7BgXVWAv1EC7ybt9pJEmQ72pqton",
  "key10": "2hhaUF5BQyS27k8UsifSkPjzN4GdEuR3E6kFXhi4gHTiAhW3iCSgojrruofT6yJeDgww7dpHMLXq86L5oaGKiRi2",
  "key11": "sk9YwDwzDBqPdvFDHaKWGaxKev6U2Ttb1B2FYFFrHeAcuTn9LHKQB71mucMtGXbqyNdr1Xyi1oavDRuWq9f6isR",
  "key12": "erVfiWQJj7hN3iBmus7BR94iEvRgaydFmqigZqoqg8WmnqNxyixnYFaz4WAFnr6RkwB33AsJgPRm4Aocy7szCpX",
  "key13": "3Ri9L3wiGfCNwMKoa5KBoVK88SmE823n53CfFEMfcR3CyWTcbLHMpJWqZVcR2eRaapaAyv6aNHXk4nVYan1dGZfE",
  "key14": "5HQzM88vFKvBg5UQZ5xeQDEJ7jqS6LsYHYpF72ttXrH9q186CuiaQqToxngm7cAVdjrmqdC8gZVJ1m3uECe3QLVX",
  "key15": "iSWeCJqvQxjx87yCnuKCJxRadEFAisdS5QePRzbSjziFbQEettEEjxN79nGDUbGqYY7PcTyYEAq1TuujUArT1Tx",
  "key16": "4a9otaWCZYPHbw4N5oajhZDGd7xQ3quv1KAicrdFcKQ6d44eWSAH6ZSTeCRLwQTwULymNnChotn4u9VK7JbREjvM",
  "key17": "5KFX4wc2Db6qpX5YDmNYtCgw6WXpKFeFssGfSzux6kB3w8w7pRu2BqhzgVmkVmHUwf5A83PEWU9Xxa3PpzSVJHsT",
  "key18": "2mRsdchySJA5mqGHE5niUGs9ud89K42GbkKdNY5Z4uu8N13eMtw6EhNJL8dvt8PJ2Y7nWFnaM4JSRhXAFJ21CKoK",
  "key19": "3w71sqfBhTYS32NqH19YHETeQn4LjLaU3kdWdjxbVPPFMKz5H1fkGKz7Ywf1evDanXNnMJweGWRhF7qgz382dkAf",
  "key20": "2dPVavfm4aJhbaJ4svhbfE11wZ6dSyKWXjfTJtyJqHKBtQyViCN17jFaVXWukS83gP2WpDpCK6W6dveDcvzPfVEg",
  "key21": "6481kmGNp7rnSA5JtxqGdx3uhpMXaD4pAVE4Ufj1E9EJy2Ur994oTetUjNLqoq2uPKickHqfwAwHeqJrz2tNf32p",
  "key22": "2kxdtnsCFisEVnSYnEoAVip3RCiJ6XFpuHU1y8KkiG9TqMUfXtZLhPNkW26avJ6cy2zkXXgGAWzvQ3aTpKPu19vv",
  "key23": "61XAfZAbBxYqJaNiZgCiob3pu3S3YM1W1UsvXzUsJ7mf7zDMzKQeEULoFr2uNmxB7MZdWPMNsKbNMm5nKXZ8ikSy",
  "key24": "5oAmGRdBDD5ZXoxApSswN1sjsrQrPMCTuZTVXGMAQbo9uhm7KivyRY9ewLxcsZekMPyr3rHtrUbV6XjeXRizarzB",
  "key25": "4nspDVRL1TUMQaZfQQhu8kX4pRobcvnXssBzMWHr3hSLtVkEcnr65u77X4jhdi4dhLpYHZLqyQCJN6Y4JkZV9x9W",
  "key26": "4ggZG7cLywEviwPkZsaNdjKkiACDPYN1ahfePGhe48L2NLTLoCpBtDQvHyTWT1gQyWiVCEK2mZYmrwEdgRmnU7cD",
  "key27": "4j9uT8cUx1sB5kbKMfimCTSfCpApJzUJtKLqDBvRqxyTMCg15fMAXMWuLPsrZJFXizGSAsSbKnw9aeuPapASKw1a"
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
