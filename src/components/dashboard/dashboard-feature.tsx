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
    "32Q9xoDeQu1djLVvoDnVmSmo8v3Zf5Hfywk12YsnewgWA3cAiEtQAowe4u87AMDsKsEkbikThkbs8JDbDULmegzh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xqhC2qQQhXKw1b4X6EqdEdMLLS2rTykSVzHkg7w9cyVyEaJ5u4WLjius5iSt1BBKnsjLohnGVmweTv6VMn2JtvH",
  "key1": "AUNEwLQREyVrZx2BWC9UnJWgNUQb131jH5fPKiEfkCtZpdnFWjd7td8wQ3uoHDWmbGT2euFRfSeP8YCfAak7s5D",
  "key2": "3moDes6tJDPULG4pJBrtYRe7TSabK3CcT5cBWX8XiwB6XokuG62FNB6sCbYchw9RMeif3z9LRZCQW7TpJrwqbyqX",
  "key3": "3rreqVhwsnbsh3MzXVCWC2m6CjNm22hwxCsQwgDzynZdWLC7MmyuqjWgYgwvA2QuRJWvaVo6iVbUn7P65A7rydhf",
  "key4": "2EJAMfX5TkzVP2A6vWPYagQQPYJ7usQgThSA5wJM8YxQN6vZgfScKxZ9DpuWfUcLRKhSZ4axncgsf5uLDEo4waGZ",
  "key5": "514oQo3HHBofBQ1ew65m21USvihELBybJDDrEZcDVw6YHZJD1Xp5rFuSyShtyKntoFPZxMd27XJGyeKAV95vwxaj",
  "key6": "3EiJv2RedBejpGoUKRAYWQbRWMm79zw6m2kgSMsNZ53SgwD1VBCpB7qxMKNPhjUjrrknyXwXPGKTctvduiPruKwV",
  "key7": "3tovBVGj7hZH9FJ4ZDABgEGwFuD9mTEwE3wfxbbBxafX2TKZ9hDMqk3v2xypbC3FGVd1zjqrcwELk6b3NyT9hVzb",
  "key8": "3cvM3B1efuVjjMbnk4NNjJd8fWnHJuRTX4f2Cp7DxbCdetzwweXFGUMZLgLsjVXiqbEtheUcCzr6FjGMBwwcZPJJ",
  "key9": "35CMvhfMbfsAs1PNpqh5vWCH3gdXosgEhvSZxj4hUYHou576vgWqsxvsuadZ2zHHVvfpkvxJ5DBUGaKpKqJ8Spj9",
  "key10": "4bDQjbbGF9zAHoSCW8qkxDZaExcBvQQuMVmgZ4XZe4uGPzmMgafPJHZ4FD5ssDs5GMkyx9jAKngHabQqykkEN15h",
  "key11": "2gPN1vP1xejdNac1UH7Q8CUtmBxsvEnuZSv5NCUu34vsYi1nADnVDi7MJXLgk2mYW4fsxJmtWC5FqyAmbCPVxKx",
  "key12": "5iC98o3vpAKLCDsJ96K6WtvnnNUsFXJAuVfeEyKQobY9VWHScVc8rStegShnmT63arKJyUo6dmLC7JQmTWqXCwg9",
  "key13": "4FkidBMrQhJs9rXvN2s3yhvtHNVjhuR1W6QRz9iVnkqASYBmA9C4ciqzyoyK5EvAkPFRvUA2uikqhxbcC9RZgQEu",
  "key14": "2o3MkKDWBXUB5hBd8kjEJAhm18YSULzfMHy4xyLoJWxTG1qvLjvccrALEyo8WnFWhKvQs5LG2oZ8JYxf1PkuYcx7",
  "key15": "5zJ7vcSr4MTNP6Ugu1hr3AxMCkg4UdEizoQbR3YzjMb5APyXqHaRxJ9PwGDaYCaDXSSGvCwKnFBsXmD4JqzuepPB",
  "key16": "d75j8mKXR6FsDNWZcxtC7CStT6Qqppn5BMRM8eSxktuL67YQfMag1BYDrSVyQQ2cB3CwWiozLKGoWLNwD8g6X9V",
  "key17": "5iPMTLTRCeum9KppWymLtCNAKcimCX2yoBcJjYaV8YHU3rS8T2oJMNJfujEzDqvPtvwb4815QxbkvezPWby2Wja",
  "key18": "3AunFHccormMv6GBJqCy6QbsCW1XDXTEx3ExDmBo97widjBCLBRT8qYHFoBgtUQZGLCn7WxcmNgtTWMB1qHTJbFj",
  "key19": "3vLg1ALYsfJC3N1e1TG6EZom1B9ZhwMueN69zpM5p7JMikGxPYbHfDpseFaTs5vNtsFcSgMjbAK3M6RkxR2oiuUm",
  "key20": "5DF7xjeaoa5mV6yorgerJosbejQFmS34XPzWYgkCqCYgXzxQHNY5hZYWW7Y9LxLN233mZ8zNZQMuc1brUdFQaXrn",
  "key21": "2NMN4qnRXiaqnjZRmTrx7Boo3MQULsekE55DdCX5caXC9m4Mw9CWBHRcaUdrRQ5HRP1ktcsfWvXQHKfNknQ5b8gG",
  "key22": "3x3BuQa3j3dNaAW9Eh5udx38NjTVdY3gZ81NkREfRKWw2ERoaN5SDkDPmftn56WJ9WiKRLBEZjBdeAioayeE2qXn",
  "key23": "zpX7s4uhcZXiuovB6wj2jgccnPExNq1dvhV89ykS85pDyft4uKiP2gwtPj6mKwfc31aVkN9bueusEYTaAfUgANE",
  "key24": "22jmaSe4LeH7b4fKnVvknimgC1vZ4FLS4x9YrZXabuiotjzcqGwMQgfEkzeCirNzTZx8D95NHfna6bF5C56bFJB2",
  "key25": "33EdGyeigzMq1V2YP3qgsmrAAJhKbMS4WmtCdVfvFz896TY173nu5vqrbkgMD1eoE3LxnzyV1wTPw8cqbujt5p2X"
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
