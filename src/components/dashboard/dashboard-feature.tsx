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
    "4HB5DYcjBwZezC8QJeMY9VFtUyQk3xdJc2Ki1J9FXjS8o9GqWv7KB813ZZtE7Qfi74RW2wS3PVpdAaaqPxF6ShFm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43bk34LcuYX4NW8yQiE7RwCUKBbgnFE2ky7WQtYkgVC9VE4jTEo2iqaKfSws7BGKKGugjmdufr78BbULveSxoJQi",
  "key1": "5Wn1QEoCcGKHxKCsJHZhdeydWjFh6iUZ96R8xtSKBqoez9tfakog7JJLsquCSvKeWz398V8jtYvaK1swYQ6586Ra",
  "key2": "3fRtAwHzmxvv8W2grAswGYFkNBkT7Ss19CAfurNJyLq6E8odyV5P7zPZDsqR3YG34rCZzRe7xTK4HGLBuc8PJWjr",
  "key3": "5Bs2mSwY76hexq13NfiBreC1iJbA7DF4217EUQGEfXoVXs54RZqQd6C9EGXo7Btes649SHdBnuJ9oiPdaq52ZSve",
  "key4": "48ZqqnDA5Lr7YHrSqonkwSobVA5xWP6dqfpMxq5oH2krhnnhdvbzcn9kwDj8nNmrtMJiywwduHU7cWdbrChv7kUv",
  "key5": "5JpaJHWz1krmqLYaTMkJR5KFFKm2UftCjfLX1JFo9r2gNyVvtrvjSVRf6BcPg5cWAwuFYWv3YHLhf2SdTzUraQBY",
  "key6": "4AXHp6NPtJzJJ8jSmWb51fFUav7zLQvcSZThafQ3R3wfJfLoAUnqrvLGVbQkJXpCkDSYFf3QQzrxGYtWfmh9LrGD",
  "key7": "2etUYkscEojeKS8yJVw8XcL3WNaK2V925gyvYvsF1adpQ9wfcVr8M7LLbqsXpPR29o9pACCUAQL5mDRB4CaWa5is",
  "key8": "4iLfg3FPBmLjv9B9GuoMC6XsfWd5YtkNM6FhrS8phtfmdbj3Y6dFx48ZZD97Cw9mCqJXeam3Jcib4ycpVfc1gcPD",
  "key9": "TarFHLiwBGt8Vw3fU3ETVKPBvqnVth4CMjR64cUwLJ9LzvUeqyFXTBje9sU6gmi12TuVY5cw39rz8S5Uhiweyky",
  "key10": "3GsC1vkutu9QvCRfDFUrjyTXFf9HmgjpnmNAhY8iFKuEwjFBT4h5iYgYdyvMn9MSqicgqwEpGmZAJH5hd1CHBj5F",
  "key11": "35RZwn3o65bXfPS9NZLCbASLos6QBha2vPQ7q6opKVNDfXP8rtSv9xjWXxNQ6J99FGAj1fsksjzJhUY2tVhrmYBH",
  "key12": "3yKnWZkWg8vp3fpzCK6FvTgob9pRfz5ZvwWnSpBdXci9et7AJBWXkZj8WPygRQmq5YkwF7bSd84wxGB7mweWFgbq",
  "key13": "2XAfhushqunfUBgYCGprE3ppoq1JCnogVre4zdZ1GkcbaqUnNUJypehKPWWxddEyUsHtxGaed2rvwM2wrZBN1MDw",
  "key14": "3BAaEBC1iF8ovx6ao46ez13Uf9w4zNc2DjLLJdSxAtc1N18EC1HNwQ9xTtC1DjmQTUCYb4FfA2t9JFVY3PPntmr8",
  "key15": "5MHrajvP8HCBWA9jmdgcQr5W9zWkVt8tJmmKSrnM192HKXEYrcmLqMTsQrPCVkdmVeNweGByGSUNHB9DZ3kqVkdR",
  "key16": "2biqZKnWupQCJu1twpyyAG1e7Q2kD1XsFPyHowzGrrmwjqedNJan1M4CUDzGtNiic1FgVMcLDJzmRn5Je7ySy99e",
  "key17": "uJtkZ3HFQX3L1UYGK2DwZ4AKCpHsa2NUdEvjaTxCBf4jkb7osL4vmMta6VeLHkGrVciwNXz4TygY2megXpoTZb3",
  "key18": "5u3GGiGwE3iEN3nE6TTUC2w2rrHAaeWfRo1T1KfGoaPA7xDxFaQxM1itT4Mm8HamFm1hZNV3pv44bFu41DsVKnaQ",
  "key19": "3Gp2ZpioW5eyr61v8JDisTtXktazJhqU37km37DFKZgUChzHHRdKkf98JpiXSGymc7cfKandagfpswTcQiC4tHvc",
  "key20": "5uQKxD4U4QkY5ofEZRPKonUoiQUFKay6bnSmtDEXcdxS5neAamHrNgPjQUrXrB2ywBk4BLHd4CfvBYjAtsaxgWtz",
  "key21": "31V6aJTkeW2cPWHkhz5BeJDHyHX13273JTyxLkz4572qeZ4NrwwW64vnwJUPbPa6qyLK8S8LaW3qNNJ3JYG95HFP",
  "key22": "ELD35Qdf7xh1DaEr88Q62THup7b2pJC7iGNrkxaVYp5tgmw9n2xvsfU4ZskdVHoWc6ZFHAF5VrVPKrmZ7AGTqtV",
  "key23": "8XWsNqaVKEED61nxTR9RZ9YYT33s3ShwaquXvH41c9VDMTBaasQxmKzsMhNvmg9cWi4ubLdaRCy9L9q7hXAeEce",
  "key24": "61y24C7HYSrDvtzBUJ1a5kuBa7xnjfNmiPeVCxjaHSFp5fp9HQEhfZ6RGX87CQUp89s8J1yWi8zE5zPUAd6RLwU8",
  "key25": "3VL91C2o6hmUZoJGuHU5HdsHzQbpXVHyTM5GVh35PWeXCnJRZpMXLjJVmgeGYdh2VrcUeJ272fi2HeSfYJVgkaHx",
  "key26": "2F3SJXUTf2mqLKgu1t8fyZ249cX6DygrJxJGJH2nYsCVt251dAAPPgQogxNikhD4uC5BN7exb8dyWWCmehsxQbYb",
  "key27": "2zntuqUn2UmyoMkHdk1KuUQ1aJgCerRA3DYmQUgxp1rV24V9cAEg2Rdw3qy1v2sQH94VMt9aWTXGACo3DnF6ttFV",
  "key28": "3ER4GEzSiY8BsiuZ9js7V2a14CoqEk5eQvxLQYnHda4WsfSnCH8wfMEZUXS3JXJUb6Uw1G2fuiJokcnzaTqEHHxz",
  "key29": "4xT38RCXouJKP6gKAuizA5Sezvx3fbpdhKeQaMiZzgaLpzKR2hbJQMkS1WjZMQXDoGe5TGYPWThcbm9CWo9siTAD",
  "key30": "5T1uX9n7mrmWXPHPW4u3Aa27dYxrntu3QLSarXTMeCaTvqHiRzrosYFwDFA7yeyC41J1gAk4iunB1WT9tBbMtM1U",
  "key31": "4kmeoKVmpaTTsCPstxbckf3GTzTtTVPNsFgA6WwLJaamMWQt5hdx5WWV6AQTktBojhskPvBbX2qzdsYjFvnbsvoQ",
  "key32": "4KtTknEWtNnumzEhWFFpkTWeDc9xCscXw3pynwoPMJRU3PCZwmLv6U2pZ13CA6t2sms1eae9ZWu7mva9MrNbdj3r",
  "key33": "3t9bBQJBgqxv6dWjJTcVChXwwafwtNrjuRKwgzZ48jPNt7Rk7xCXcGJURjwSF1EwKDGVDTBHMdXd5A28Eadyn3Vq"
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
