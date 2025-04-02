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
    "2u8MQTJqKzMzXkgo5XuoDvnm6R4kU4Jc7FzKjUfmWMnV8xfDC8vJmGwyQed9WdUMJxgoQuCNbfiSYLhQJpweYKr4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b5yKtUrnvygn82PhhDGrvhEVuEzA4qe1414geyBaHwwETRNo8cUHP77Ub7MZSDbPoYRTK6CkpmrPA8Wn167BmDz",
  "key1": "3sGsNZoRcrGMNZeY2mz6n9vG82bCcC7eS8F3uHfLwcJFJpHSKHQ2E9KN5qESMFU9vaK7XMCnH3YSEaiBNvX9x9Xv",
  "key2": "32A73fyihTekDJMYiFvjWfi4qZ4QQPKgzkYpBx2WLUC5wQoVxVkEyr6CB3yLHTW7fDXv6jvcnTiRS4jSrbxXqiww",
  "key3": "uFXXsU4HkzH4b23uwvJ5Axy2zTbxarg473RUDr6Zc3nszm8hu6tkikQKkM2WwaAasZMX3c7U5TZhihRswX5J96R",
  "key4": "3ttVWMBBjF564MQ4nWX5QAvPe2EYevMQsBvN8eNcokfLBBFKSF9nAUvk9XA4t4cUv6PDd43FqoxW1X8tmUGu6DLg",
  "key5": "4y7MqbCceaXkCTHNtakVV9hZRmec5ZQZCz6Zo1cAaxDtQscr4VrN6dnLbX4nxJLvDZdHRszp5sTKXVUcJNQBrwPV",
  "key6": "M2zijiGUenxNjsX4C9hZ5jmxdHZtTFSE6PM8Lkq7H7JJ36EinzC8NivYdMqUp1drwqtQHgaBUniNh2osyvuq18L",
  "key7": "3TxYcndymPy2Ua9rVZiy7FWAyGwmvZvFqz1fCDL9b7YCcSywunVyB2NXFGsQT4c2tNLYMeGqiKXYzfSwjEFGad6L",
  "key8": "5naSHGrN8kWFdEfZSMa9ah3NaGHbXA7ekRF3yn7ZMCbQ8LMw596oaCHiiRTobiknvqbFUASE7sZcV3tmUGbCHP35",
  "key9": "3D5P5Hza5g1xsoLC4PFSAMDewdW1trVcuYBVR57x3Zu5sTzcWNzyS6rBAkTKR4uLs4ZyvjoML13tHrTsS2dJ1nvx",
  "key10": "2Dps8AAYWuQR3W3ZViTe6HketQmNw5oQhXBshVCUroGpkvWQ7y89h6XpNyDD2yojcwijt3WwKeukfxmxKepGdZwu",
  "key11": "31aJdg4841giwesdkcfNX2VnNjSF3Mzv1TYxRkZD9JUPTHHwSqsYuwYB6uwLL82DCqt9kcytSd59N3WTKWudc5Mg",
  "key12": "4kmY8jVajH6EZSwZPriVysPArNdku9s8taMvDxJcH9FVnDZzgwnRGsNU9FbR3Jc2QWiPTzAvERGxuWvDAC6NvUc5",
  "key13": "dqiFT5h3sVjG3RDXE23g7PwFruUQso3dFMAVPYxicGg1xEXo32uFZzdsLWF9SLKJMUp19E1LDmMEwpZbXWg3gMX",
  "key14": "66NjzVVJGhg6ijR5tqjfCkvVgSpskmMbtwAtHJCvaZvro7N631rUE5cdY41iJvoZ9cCcgdhBRGA7348ewysSsMip",
  "key15": "2dtwk4VJ8q72n1VUSsQh3WDx9pFjP1roW1MXLx3cv1z3Nx6Csq8GiFjbqdkF6kwhqB2a2JEPC5LuZ9sfX8b5cNfh",
  "key16": "HrfWfmQvX4x8vJpkjUoZBA1Df8U7zRjV4TG6nNS6ouRPTTPhjeWE8roXNENCtiJ87C18hMPXjQDahk27o54Mgue",
  "key17": "24gvY9PADukRHEAbJUuJSXFivHYGHV3qDnNDYFMRy2dTgHvWks97SbJac4ZHYeV8JGu5Eep1f4pNY8yZUWTrMhRS",
  "key18": "3iKCmNqWXvCsKHPH5Z1GHeUF48pgqCNZxnVxzehP2nrPFjW12mj8SqoQXYdj5TGmQepf7CRL8pDMZJ7aQRmQW649",
  "key19": "GoibKnKmGyAHsJHbkgf1eqpxhNv4RygnggFRtAXea6axLoYgHKHXyhhwcnue6WLTpsSyR4pzp4zknJwSehwmG6U",
  "key20": "TNujaRzcb6YbaPUd1uysq3zYhrN9pPTR9Hsc91DigZ8KCtoLNXEAqSYq5QuG39aRxR7XxK8jy6arJX32htkKr5N",
  "key21": "48Ls5R7Wyujb5sfs5mzuqGgXwD9zVo4EzwUJ7kRfrUpywNRnbaf1qcxVKRC3UwbuGcbWxFUrrDG2pgU8Qy5HiHM3",
  "key22": "5bze9E1WtKJf51XqRfAqmrUDnxtynxPacYzCP8pmcsBtyiPF9yQsPngue9gDee1SHDKctGQU4i5ojyYWLdkjWWYh",
  "key23": "496YQPZfSsJcx6TZQFkaUEvcsmWeg3ZhTftc3uouUHooN7Ltgoqq7azLKnvayLUnKM6W7hVPdTV91pGCQpGTW4Vc",
  "key24": "5TneoZJdrRBh5Uj4658Ldnur3q35ibX6BgTSxkpZmjGAo8DLPBXKCmrX1ziALvBiaoaZVmB9LLpLjyexNpCtpE1J",
  "key25": "dt4viafA6FtnrrL84dzY1YBAdssWhgXoKxBiX1rG9Ux1dCFTbepHQLLTgdwErB3eFbUCoPduxoD8GLAYRPfcFbN",
  "key26": "4fPDafrbambLsAq5uPjcXmsxUTnXKiUkVJkJGS1RLEefufvC8tigw98S6LmFbCZMwx34MeBni143t3G4mToAEWvu",
  "key27": "5kBq5zihuNBNoj1eex3VJLLLn1TqPpNonsy9pCAvGWY9ECeLuLL7XuGy7KBh7GfxiUQ45AbwgTWGUyoTAx9svWbr",
  "key28": "2Nph7b3UWBZdzX2PeKBaALRWn3cg9G337p1usBdExETnaez118SG7HeD347BpecZxXJK3sL6hCbpdJmsibLNBs8v"
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
