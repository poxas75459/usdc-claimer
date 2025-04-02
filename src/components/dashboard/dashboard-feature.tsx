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
    "3e5srsaKhhnLtjsF8pJfAjCWQNtrUtD7ZbL6F8gXJUvBJRPhzzHRqMaf6vjNNpeJNj1AWVqxvQpHMLmBks6ggttg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pfSoErH1mk78CwQhbhPEVkDjJqcbZ41vVZ7bZhWCnmyv1qyzxf7MYArVkP6pxwZeNZiScrHC1d4THjxXwJuC2dv",
  "key1": "5APw61uraz9vM7hJXyaGBkmNUpYc54ZdexgpWLg919bWTGxM9P4ALpEQfm1zsPdo8NCJRbRCyMRgPdiPYh9wU2gh",
  "key2": "2M7VPcLM1HkPL8WHDPmkbJRe3JHuoQDPjjwEtqHTANUmrJS8zkePyKtALKazG3SQtq8j7A9A5rc8UPpJn8V7Yg4k",
  "key3": "24KoV41Yn6D4ec4AsUN1meAGV8j3em1K8LWkJyRDDLZLX8mesMw3tb4CepuAsgGdaTVeeAjFAy3e1c7tXFqfr74g",
  "key4": "31XprKiB7hnaP9UPV1XueNAU1eymKayFPbtdRbrEXrupCW73Mwkwf2ai6cJi4Mr7cKSQkCtEw7AuF3nczNGz8z8c",
  "key5": "3bc3oxuLcd6zvd33TZM7i44y8EX6CWkNcRWuDBbQMb7xi4qDFk9W6rBpj7g5Y4D59FcmNt6zGU3j6pC9tDxbXYXF",
  "key6": "58Qc8XtBoYGdm49LxwZuwQ4xWbk7MCYddwX8sQC99PQP6cRXTC4qQK6TdSnzZn28isk4GipaVXtqm4JwFZhDcHy",
  "key7": "3AJjDTQjCGsnqoyXVsPY2cEWLtjqkjJtJwDfq1HV4ciWNPN9wump5JJuEGMDHi16U7CwJNxj6cHkdnq5PTbyMMWq",
  "key8": "5Umn7GFHZG9CYa7aB8zPDmMNwRudwqWL8D3jJAud7emhBWdgy7usucXtfHEjriKVpbTNmn9rRLNqEmFP9VksEEvU",
  "key9": "62DSmDBGD9VbKcvoxhanBjWUsYwom4inCBWnfGg28wku7uhVrg9xjn1iR9re7JXiaarRhKLdEaLMnEt1Rrrp39Kj",
  "key10": "2zH1sRmkcQBuUqP7xGxJzEWQDDbUrqkGhoA3D3kCFv9u6HNHkNhzpakTS7PeCbhn27as5A9ifpZBUzUKyFjaBois",
  "key11": "2M7JatarXLRbcU1dThRQaPk5QBsU6U4YBfbor6cFZggT9C39DNsdDqYWeD3KEf4qx5226nz7spNPyzUCVqhF1jJp",
  "key12": "5TsTQn9Dh4X6UgSdWHU5tZ2EVJ3XKzKBQJXSrRgCYFxQB6fYDzXf9BzGEm7MdWPugqnKyj2aPNUNBjNsVtWu73o6",
  "key13": "31yWFHkonKaZpVHT4JAFNVZP5eovzX5SgWz5H6NchuwqJArjq2D4fAdkTHrUWQirfHwM1oWhaLtpK9exc5BHyGW4",
  "key14": "2gibHKQ4bAKUb41ByyqA3yfnMcQPzLtvw4hs6EStXZD39CNEC5BuwxGV4F7NsVqgW7p78f2S5cqTSHQZxqw4Kri9",
  "key15": "3zELhq1P4MUiypS2RhB7jQa4jX7uPERA9VEMLJ5YaBaEcqWDgHH8aYSkGFvLQCyMHZ93yuHm5pBFFNvhJKW4Wfew",
  "key16": "2BWwdU9rLxKJEPzdW2nWssbPU1nTtYYzL9bZHMSKWM3LNpXCkYGw5yProim8U4YYbev6787o2tMmMR2SYiyhLEn3",
  "key17": "4dSj5greZvMAoF5qkaLe46otKXht1QELzHquM6DUcZfsEBK3gbiqxSTeDis5WCBvauvxnjHQacBSCs64ChJetDDm",
  "key18": "2BzyMozSWqRyDUg8LjqbmfjjARNW9fQXLwKDeedrj6JW4vRNeAnC5VWiinJReY8urU5sZqYiKtMjWH5aveKPTm2N",
  "key19": "a3R7kxFzVdRhQber5DVgBeabPgvpBhdBhZbVam2JEpzFoxfxi6ckvM3rkkmVpDMbRBZdgMjSGy5KYF26cwVgL3a",
  "key20": "39Fofgzqyy35W9f13LL1N3gtgTgh3AxyieMUypHLrHs6VHCM7jigme4F6UN4TSPsJqmQVYnoPGssyiY82LoikYZN",
  "key21": "2PJDZWsUtff3EnmzPR4ptqp6ahjPwgJVRTfXY19NQTmHWeoCCUUPgiTU2efAgiZQmnpy4dyikgEMUd2VhtLi1HTw",
  "key22": "GwftjkM6sYuwoYxgbnDw2kykM5PFe31spCdgNsQpnmwdmd3NwzwVnHHS1iHJXMJxwqHEovGSvCgVEWu6PCJnHpY",
  "key23": "5N3YiZbDxbWVw7y1u5Pbsfa1SiH31Yrt5oKcy6Yp3YkLoi7Q4WD5ZdEu13uPZM3yL5gdXAWdDwY5z4dYCVBjwNVd",
  "key24": "5EVbA3MBc9zWGNa9RLTk2waHBYXJAJVrTuY1sQB9JXnTYaX77Dzp8PdNX8Tby7yjViKzDTRmptkTvi199i3vYLbJ",
  "key25": "yDEMFXnqQcqgtDWYpLv1ofwVqhMtcvZ3hEavxnrFqTNutX4jbNVtpAkQGvGB9X8ejXvs1vFCyYQDU4ajKiCk6p9",
  "key26": "2FLhkE8F6x1nQNJE7DPkGFpQV6FYiTELt8RigE1LvGBpd5Wntq9ns1gWC9xTwxfzpTzo35cashBmKL5Uyee3hecv",
  "key27": "2hpbVVoRqeqiRcyNGZvofoHhkJpYL8xNdAzP4P8iv1ojNvxo7T7Nfe1P8WZmU5qmJGaa68YTBBDBWsrW3iUhHuGJ",
  "key28": "43YbsNRiCUE1zyuZGwsBWkEkAwbhZRBMGW6NCdYqP6dYe5uQppNignw5ieJTEn2wUqkznpjt9gr5y5rSLzjZ4ik6",
  "key29": "2epGKFvfGpadDR8BH3eonq4jrWd49BqZr2aesWB64JxZ4mwgxy14TkcVch1o9CCdKiwHhgXkSsZtA5TQ1hjxEqAE",
  "key30": "2onJU1AqXKQuPiMdDRBfVzjKX1CK5WPzBj1j9o5Jw7RmGH12N1Xt25CewgmG5Jh3V8tSJMqY61W4vXN7m7XoePd6",
  "key31": "25HX26KCDRzbJ9GryoZdBpd8vf4cYfpsx3ZiCrZcECCcjLj7T7kATAAnZP9RCLGppHx8nKiDn9gvaWMb8gx4cqF3",
  "key32": "2rAiFzWSBtjgpaoB7S8WQVxqZtDrHJ6c8VU2uNyHcGNa5DWiqszrKGVqW9WdPVo2JHd6FgLYGnkPGrRhQ8XCtjVE",
  "key33": "3Kfk7XAwyyqzqt23QHYbU98fZPdMp4Um8of1XShGsumbwvCqxaaUcSyN5qs9xd3tCZt6UF79YBCRAo28QbnDWCYP",
  "key34": "3gJgL84yAB63NHG6ZMeC3emuvWQqVjENSPV3RzQk47ZSxwb5Mixwe13wjXmKuPvBFg8qPM99yHPndAYWvtywefqy",
  "key35": "3mtBKfzv4aHN8o2PnxpZLsMTggdnwsTk6coLgodD1zZEpPxZF5RmXz2dfiQpF5Tz1AbDPQYErDK58segRT31G2W1",
  "key36": "5qfvPNX6K3RYa3bsfZQr1t9pJqUETSkYL14JzkXzpSo66xjFHdFk8WJPVea7wwTAMjXSbpoNd5ueopnsgNebyTNB",
  "key37": "3eSDUz7CbmsRhj3EyzHnJE6t3AYtwFkjai4YsKD9e2HVUcU19MDLk6qjYYiGLWZpoqcJ3X5hHL4Jmx75m1ppcV1n",
  "key38": "3KDbnJcuXMK6DiTQqTgXJvF8SkfcuWSiyPFVMJkJs8sA8BoxdM7TzHPWaJBLSeN4exoYE8wFqXRAQV41V4u7f95f",
  "key39": "54mTZuiGETyh3ukSreHKfed1XKj3iXZsM5nRdzy1138EyRwCJD1TMtaWTH92ETZiFb3g4Ec9TJkLgT25ihoihKTX",
  "key40": "4vAqJdvofF3fAY5BcmisZmL1NEqHiZhr5GDjzovjhB7Gv2Yhz5heCXGiiU8FgmX9D8Nc233hpgSrgxWBakVHtQGc",
  "key41": "4DrU2BzSCQok8DNQcs9bUENHtv4CBAxpAWcCn2kwbBjEjJbEaMf5PK2XWP3Ckuugwq4Sr79CXpz22Stbx9Q1LqV4"
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
