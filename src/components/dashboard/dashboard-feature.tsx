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
    "3gkp2tPEyo2XbNdFHEFqB4cHLjEmfLrKYfEA5ZVXMmHdHeax8rVKkuor5Ptg77nBvuYuf3Rx8ebaa99tuUrzV3US"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uJeLiKSqQUZj4kw6hmXpCMXYXs7GW8RxQ3LRZNVbLRZZtZr6mdRpMzx2Q86FP8dFK6hdNHxmMpbWUTZCJR7Utkx",
  "key1": "3enehxmVzcrq6G5GMPKXDjduq185F9Qz9Nu5ArbxdxYbMXJ71k4QgnoCdt6sUH2U4vRqF4tNxaJLynmQowphugwh",
  "key2": "2QiF5K2vdBNG3A1dtBJbjx8qgMKnygbuB5QuZmLHRVaLJqdEbf1koDAH5aV9ckLFRGucLCtqWKWejG6vR3L64mjS",
  "key3": "3ShPvqyEMTNeKModf6UsnZDSezkd6RvZWHr2qPBu22eW3QEHV493sRXMmoVSP7wrLhe9F9Wr7F1FtDEdaeoWf2rg",
  "key4": "qDKcDYBxZPkGzCGd8ZcQEK8giFX1cLqRP32mTJtVMD6GxEFzGFSpm6Zf234hs6UcTJCsw36hYZLjuuDTG1wYfrM",
  "key5": "L2YCyqr1vgfBgbYe2kwnAtHBbNwSB9HKCX1Eduprc4CnAtecrs3AFNXPZY1vfLie6sKQaADS67fjgmQvEnBBh4m",
  "key6": "42vHCK4siNQvQesqkWgyvMBYXovqKrnicK7v5sVwmfp3sFZTGDtewzbWDGofgzoJugJ3jSgnp722d4T7BmBYf2Hg",
  "key7": "SusAvjtiGkHnmrJnJq8TtctV3yFYUPBj14S1biFYBPojntixxzAsbaxNhCxaNVZdPN38K327rzzYfUHfxirVqdc",
  "key8": "2nd1sSPjKqgnm7yk1jYqm2KvKoyujoqATD79s4QrweJ2orVnFrigvErbNv1jfXvvKniPBqP3NQ8KpHk9ayiKiVWH",
  "key9": "5bpxhd7TqqQzeNc3v56vZoG8UF7F2zfdL7caNroL9kiYBLJVLZsMasoWP13r8Fw9ZPAraiHfg9gvoKG9jaXWsT21",
  "key10": "2MndzFezjSTykvbQ3JmJNtNUVugPfJQWgqV2LMxAm4X61c4xhfVAQnqCUCjYsrUkeoAHEHGxYRXa83aiqdzTBGBX",
  "key11": "3Fwj34gvPLfsmWJzydusoUgZHdUZg3aFRGpg4Nr1xqds9FWnNHjjNnPW3S3hZAJPSSUGVrxfi3wJvz8RQVG5mpQN",
  "key12": "5Nh22SXP44PpfoCgk6yVUx4MBGZ5ce4wHWo8oMvnsV33FyTSsVNvpU5yzJ2YzZiHgZ4W4HfsCYK51KyfEPT29D6h",
  "key13": "3mvWPp5wGwqwcTMdKNMim1XG5Q6u6M8f2a7jRqEaAYK7Bu59DoZCjcpCyhdzqiwBM1nvnkXtABMQCLLbJW7h3rbx",
  "key14": "4oJBeVYYeg34DtW7jXbHnSffma5v4zdfyLLfsnDFFd989bdDAsP9N8CbqRQGicmuNiMGgWFvEMdC1ox9855HSsiN",
  "key15": "41MhqLfk7NqU3Te59pJfMHDeR5cm3rSYkT3NfQP7a27tn9nEvrFx7X9K11w3ZcVYE31JvdNaqto66SmbRQ5zBdeD",
  "key16": "4Rw7CBLpRzh5WJtY5eUr5EQht6JShyV1DZn3cYJRLFxbS1KvfXhTUMkk7mAMq6jpRXabh3km9eYYfXMHywsgFLoT",
  "key17": "5Jbg1eRJa3Sfj9mWYgLNX159a61ZWYhvbyKmDYPSnRJQe6rtYQJ9eQkKa4bkjHkRXk6nam1ZVBeTQbW7rimXcLxN",
  "key18": "2rP2CT9MriTY7Dg5b1PLfRC9rZMmC8gqpJuEX3zaCnw8Fo9yAVphaWZxJe8hqspRkuuiRQEjo4WrcMPVtpngNURm",
  "key19": "5tJndjL3N6L5riFHk2BAVjBLtLw9Jebx27EvrQttMdWJp5GSU7dzhSy8xbre5XexhQFJjBDcrf9K6WbnBRxJbkzc",
  "key20": "58pQ4z4mvyCWdakW5WmKWuL3XXa9eR9mZw4M162ekAcV41uqpkxxhzms7jexU7aVnL1t7fyd2toavb1xcuDWodED",
  "key21": "5bCnFpCqky4tmhXVpTxfEusZcm1XgSDjUB7uphQ5F7oF42an7uz5oVezyAxT5aER4c1saWi64ia4koa6aEMDTeU7",
  "key22": "51y9QUTek1Kus64PdDPCzhcnekkYWEVsh23zaQ6nUfun7WNmnssHetA8dTuPusftrjXsaYBzkF7yxzt9AivgJBaJ",
  "key23": "5r3FzoWdTA7vyjdaYf4bjn8ohXEkb8dieUJ2ncZJVU6QLH2DLE98Vkppbnw6HbonAhXHtKgxYVp2FEZGAh1UU5zF",
  "key24": "4bd9oRy1bk7TyBwV5fHNnizzMGGu4ra5iDvx6x3p8keXLqmoWA33G5uYry4TrA9D4wvcyBWSdzkSWEcGKXn8GGK9",
  "key25": "4Md9coj1EePcX8fRS7AeTAUhXSJvjab5ZKQvtSjDbxHPPxak8iNjoc2qqaB4eKe2H6MuVtezzV3Dkh2CyNGBGpV4",
  "key26": "523rzAkaAR1ByvDACphua7MhcQLTpfTUXFDXeHsQHMBUr1CSWP9cwjss1szdasAgvm7cNez4h9qivTysfaRfcZYW",
  "key27": "24yCuMxfatJkbrgCHqUrFZXHA9HuHWEe795hJ3b2taPzXZbrzzaF9qEpPQRDoaYkheywTqqqSsExz12wTudAKLqg",
  "key28": "3GAz9iViMfK7W9Z7nWfowZC1cU4eJRmGr8qFpB7YBZup41yjbkW8rA1zU9xTuRK3KQzMrQT4d8edJEVUkUzNadRV",
  "key29": "59XuYppfCNc2Jdjf4XEdPaxtrXuL4R2Zcucw36keoJ5DGRfUkc4Mwj8zU1i59rkGkHjLdpzWTgcoBN8VHcFNPoyT",
  "key30": "4RQiRGhxjSVVviemCH1d5fuMcekixH5ecWYpnzTRkuV5RTBf4bJb4Gk7CfkuaFmN8LnsSHPLDEqz5Gcx6r59gDZM",
  "key31": "3bhtjup78qMgGwEov8Xpe6LqGDzo8DXytBjQ2S3KfiKTSAjxtoKfMp5YeQHwFcYiDkYEXz3YoZA8zCNPSJMGKG3j",
  "key32": "54RxeNXxRHR87NHwE23KZ2dGPXd13yMX5umaK9P6GoUtEWBGwZCPQLsqUir56wcrZGJWvQfnDZm9xQgHvHGXEG3k",
  "key33": "2fKHaoUqfnWZoMoRRV6ttS8rJ3T6SA2G7gc31NfusHAR6UGhn8mA8LWKBbacfmakZtHmDuhJtpZVspdSTmNjgdgn",
  "key34": "4KtEo876HCT8ZRCnUK1eaFWBvGn8FCum6w1iUjJzxLFoerjTgkVaMCRa8MoECHbj3cpEDoXdnW7PRSTTYLdyFjhp",
  "key35": "ep8M3Vvccz2dp5h264nDN1bPebaNt3esjT6SzC8do29Tjxg6hxzU1quTUfFkq9CkrbEEy43AjwRLh5VCsufFNqn",
  "key36": "51Tb9ZcZVAH44cFfXCV1KFdUDzqQQV6GRZUX4qQbt7j5zzFbxKzrjEeEtZ9PHFjLvsdDFvHBG22NXy6RZ5DysPLw",
  "key37": "589W19TYDaDmBEdCVpPWEbS6FKx5q1iHsQeVcJ2sCERSzTVYgcHGkR5aM5uQJLHnNBwy68JDZ53x4P5jSZgM9Hbe",
  "key38": "2aD4yE4MF15rqNz8PNmStRnNdqB8FwrPML33Phxiq1dMSDKwnm5GN21F7cQQPgs2uLX9b9raPzu9nNLMmYtW3Yfy"
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
