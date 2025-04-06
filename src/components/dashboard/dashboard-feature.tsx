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
    "4Za1wx13WsvdP8SEA8VofoowJXfs4pnntDBrHRjdSXqJRqNYkpZ4znfwK6Qy7HPT4AYSAUmzXdABKTYftadsMPJb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vZVwQkp4sWr77zWkaExWZ75WEY1mx7WpBaCYwo3C4TVcU7ETcckxbNtH4j8DdgHBpaT1S4kpkzjE7q1woDRUdnw",
  "key1": "3GpLEFSC6vZUjhfKuJyfnkR8KUfiKfySkmXx23bLi7P2qfido4YAgy6Sf2myC7hib4J5XzUEziYLLeb1x2qLq8fB",
  "key2": "5uu1n2iD6qBSLkiTm3AvtmJZmPkXDGFGUBXdcK25xesi8DnLnGEAk4syEXiXU9y7FbqVHg7Vo8Dc1w72ShqqM6BQ",
  "key3": "2Xt9Z7tzoN69hJbPGazoF8h7qWc9n9Pdq6LhE8VeavjKFFboGuXU5UPtHRPneuQ2Bz4SPirsFowiXmxdCuRCYAGm",
  "key4": "3hteVDBG6rmSVtXkgvbVp4C6kwbbfAX2SgzFzSpZ5K2FezxGLaLUCENX8hF3vFmdyu6bgtVJf6BAQsQTabUJKVno",
  "key5": "osdVBEAbKKkzrjegDrthhLpEg9ccTUFSBUf4bL9okN8k3fhpoQQZRJiC9VLrT4VAKLmFQaEf2giodmC3MGuY2Fv",
  "key6": "5NbpoL3wyJ1YgZHeVmeQ53gUHVG2mVLHcE8sxZEbVRHEqrnQfst1Emqgud2DgXq46zXEn1MDUYMBKL53csjAz8hy",
  "key7": "3aDJmTB1ECgzjhsNWwrNNQpeAzgm2sCyB5YcXW6t2Dfpm2kW2z6Ny6vmnLKcDLd2mtB6THh4FUwVQiLCPb3XueSr",
  "key8": "2y6PmzB3a9NKDXNe4n3UpkuNeJaqhvtjtVMAbzjEjv9npjHMHHCQv2KD5kt1h6AbTsVAKRbwNB2CXMQ3Bh9yfXLo",
  "key9": "8PLmT6EBVzXzagU3P11Y15Rn9MyoQasvpybDFR9f1BKJXA3ZpUFzbUCeivPqBzGzsrAbBUJGqGMzppZpXdw73dY",
  "key10": "QQk5TR1TeQsSMrLVYc5jpeAmYigiq2ZXsegNLSJAMzd3hAw2iK7Up5JaQ7stxM9By4TEqrEyNPwFTT6btywjbQc",
  "key11": "2hKpE274RaEJyD9CACZtwqZmWLGA4NuMfERUi4xVRRicVmxEbBBcnFvxV8WLb2yZ6yHNu2M9Hw3nm3WqDcWDjqRw",
  "key12": "5DzMdF7oUgA9vUfdeo6jMRUpZUqNazeumeC6AV4Be3e7223bzhiNiAMQEHk38NyJBtQLVGBbojuJZqQGGkSo5f7A",
  "key13": "4i4q84b1mP5UjsMxQkYuuHa8E9j1nEoQHMeLSxuASy9xtCHS4axQN2PXvmnsJ9mq35DEceAvDNZdA1aUJNJkF2rh",
  "key14": "5fAE5XkCntTnt4dQLxgWXHpWuMRzdQYWLjg296Vz6e5nqHTUCVVmaZa9mQpkSsBhjrw2APSjJiBTrUUr3Vfs1voE",
  "key15": "sxyFEsEgHytyM3LTZNzTyHhS7i6sDFaTBDwenmhwc3VUNwdi6c76DQskeMvm9te5FtDq4oLbfcQxQUJC8qgynSB",
  "key16": "25dhivL1kNSfnyetT1vGWtW9iZT3p3sSnUgqWZpvgWe9v3fHB2VaX4MbGGBM9nj1w4MBHZ7qosjkYKqdv2jpFsD1",
  "key17": "iCZ3VfjqkCcFpTrzTkzZ1jnRom2rjbbhUeDzpmu84FYgkLsKG7aXxwTLSBb5n9QFo1oCBrZbaYjvBqGGqxWZUyP",
  "key18": "DPHC4Vbb4DtEScszRzBZrWJfFdbCTtY6D6ibBXfrXQEoAvH27QnKiKxVn8siiYYseTDCoDoheeWZ5JWeZfaJNYd",
  "key19": "49DpSEza2GjubUej9WpzPobcTAmFUHTFe1Cfb4o34yRFpi9JW5n6DeBWJYjR2TiNxvxihi8N5tLmyyYnLNQKcDFm",
  "key20": "2qn9KKiJCwV7xVWswu927fDbTLajpv3nYaSx59pcrcMsAYvNVQUrCpfk4rByovg6Qsthao7HG6dpPkQ4t2dezNzF",
  "key21": "hS7tDiDk2t9yAr8nyVPYg3UZ5bnD67Y3BZkdiierVzpMUizot5ad12CcgY6DkTtZAZX7G9EoZ6Std48hNLJqB25",
  "key22": "2P5yFUtSf36Q1p7dyLtXbDg9E3UKwChtbtE4M7v92P6WMmS2oDdKN2JoZctKV6rDn7fXZ3NbNPHNw1cs6NXKCYan",
  "key23": "4o5TMd4y1JUHrPxLhk3eXuSrw8q8AJ5LDaUvq6UtLAN3ytqjwNiQLmXgf3Pet7FiybXhuaN9pDS5MzpJJDWrtGk1",
  "key24": "3hZ6KFfhK8LvftCxK8hjhHtoMHuZeLV7ss9eGKDb6taNqwq5yCCWHq4RzSHS3EyE5kNnQd3MWCJXMW4bky4TwKEq",
  "key25": "2gYTS6btZjBZeTugWzi7Fx1hvJzbmhN9WhCKzt89mi3Zyxgu64zW6Hx9P1RhWwi9ddny8kL5S5RmDkSouSBJwsnD",
  "key26": "4P7QCpEdN5X3aB3DTxj44SGhSTSemE4PaYTDDGkExsnAT3HhQE8iQqoTHZx7FE2eknsCN7U7BaV3TVPko4gw2jsW"
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
