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
    "5Koukyekd8EtSqbTufkfBCC6P42Mce3WapQq9i5SAo8sV5LxH2RMtYWq265UBzHPp6qUjgzRqU75GSMxykhS7cVE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41ssL8S2gX7T58zgaYZHebwAp1zZsPFb1bfpBq8J54aZKX3Gzm7kE22eZHUNhQgNa6pZCzDrFbNefeSvhyLizros",
  "key1": "48rjBdNcoPQQ7QEaExdZgGRjUsZ24C1QvHT6nwpXycZfvDrjXNw65LRmfR1fffkKhSH69BNyMdMRrF5FoLZTAXZy",
  "key2": "457JDv4PMJycJDRwEcTHeu4xnqrCEpziT9pcLMNNxjS9rGsEdELd9AwnmnBvQFWuvw8N5VCDCtZdJyxsMgNXSCZt",
  "key3": "4u83A6JyvySPdQrb8EMRY42cegiGawkvnsMaxkbbrbXja1DMDctYAVmkw4xsvsRpgqNt4e9S46WmGCyJPFHPe7tv",
  "key4": "27eWkDYo5R6FLGRsTCbe4eKNTRcDaC5U3vfucgi6tfiUSFs1JWwNbMGj76Ko17sfSjR8FL541Lq4ZpMYDyJ1JsJx",
  "key5": "5koqP5gbSUSdroZTDYPk1WiXKebzGaDJjPAL4JmPuHYEvHRSW4cNkXSsZ4FXzB3cjTwqxAAArA9mp2w1YZx4YrCr",
  "key6": "9N8QQtxFqFxWCWzLwUR2LKxFrfJnMvhCFXWaGZ1PS5NFnZN5thNEV61GQB8Fb797TsuB7NCzrjjaj3xFAjF1414",
  "key7": "4B2UV8ohyiyEfvx5ZK42rHsZ7YAojrjZ9hCwdThH3Z2dqAfcg29N9mj5vRFCv7EbdF9wzHKq127tMZAZ5krGPRoB",
  "key8": "2vmjbXA7HGms8Q5mSvgUmdcWX54CzcGyYnCx6yBafWZFNhEGDFtt5Tt6Q73AAHszKDvzdCnjotCM3wa9iwMwssuE",
  "key9": "244WTj1MUjXu8JMe6t8ntuwj6GFALsFwo2DSUrSSv7nStftMqm3cVS1dFWo97ASkrzUhza2BSfio8pojpc3myWuc",
  "key10": "5J9GbMmPrSCSWeG9wBBvZ71aXCxMtUwh5yNgYCAGojqsQxmwV4wgpEhpQPz1PH8nusTTrQyJ6GFEWZMbJDWXvmbk",
  "key11": "4wSF2UH4sRF813NLij48zXa4Bw5eCpmyVHxb2aEYSmnDft1QoPAfigJMwmcoErLKscpRuhwbTWj16TswaPzfWdA6",
  "key12": "3D4bt8dmr4quMJjiRTizwJeVc5hfuYZkQ6d7F2UV9Bstg7Tn4EapEh9kXr4CKj9crFWM6jtk4vYuZihSyMTQBuuV",
  "key13": "yJLGX6RznNasjSejyo4xwTT4HtQ96pBLTqCgk5cVwPdKgWD5uEiryo6BG7Du9FmKdciogfokdQhMkQZZkcdfxGf",
  "key14": "PA375J9BhhzgUtRE4HuRshGNbdcbAg3Ec3Fkc6rdoT7YQu2d2Q9P7jzHf5JBtTRxMsDsPfpYQAirT8Cv41s5W9x",
  "key15": "2qfttfVC9ycNzGNoyQtN9nTa9q2Tn3eJLUHbvp2BM9U7MXvDpXVjFHKB3fMEE5wj9uvim5XQscCXeekVwZT2jhzx",
  "key16": "2PAEpkiRfHHpxR7BxpcqQAjmicfWxRKCU9mpKTbsoVjHkiWwwNUQfRxHPd7pCtfbrJiKGt2JNX6pp14AWz65Gu3B",
  "key17": "2yfV3w5yWkmotQaQizmjheDLDV3UUGQWoARCX4kYgwrAaBwK4yVJCWsQXEhkp2uoDnUSFQicpgCFjJKMXKtaRpVs",
  "key18": "3zYX5kxTE5t71V1QUDKpnjzAsheXcu3AJXhhG5BSB3bMwFhLEKNvszDDN1QvzxQsN4qqobyRWNUAoBX1fpCPfjXh",
  "key19": "duzGaL13jEhvcqSFGpNMe4JjNMomkLHrEesGxLeGJwbmPAZwwWRtVMRFsUAg2guK2cPhJDiGT1fGevDrsH62k15",
  "key20": "3z5nUfjv84oAsvLgierrnid3vejB1y9r3YYMpZGmBkLj9tZZL6r36Zv7dqjuotpivW6hmb7rv6h3YNCcfweji45V",
  "key21": "4fwgrF52akeDqQDyki1CFNyq2EpAjWet9hnuf1ZjQ2rDzwQCevhSdFkSSp3utrSHZceHtg3z3A8p2NUkKomMukA5",
  "key22": "3H3yXZUJKft491Dt2fViZniWBMiwCoUujR3bi9iE2MERy9TnrE4ZgMWUGpUTcpvXEGfViAMYfazq18ZSCpXpLq41",
  "key23": "5GHVY1o5c7W5FJtMJQN6QepBWKADgR2qu62DpTqmvsFubRCDwygQSMBqTv2Xdc9UoovnyZpk8KqyMJNQZSfghigH",
  "key24": "32euf8pEjVKMLTYwamq1ounybrgZHWpCnqycKzSNd9piuTEgfPa8ReteNZQ2ZYpC7QRsiKZkLMiLZnnRm2KMBCPJ",
  "key25": "5q55j4h4Ya6zGPhzroNxiwJ6TiSAJpgPi4VFvt8RRaR2JcLGKvnrxTFBkitgF5jhP9z5K9JFrowgabWxUaKRNJfw",
  "key26": "b4Uetv2yP89N44MJfxcxAgLquiechSSS39vkJzFtqzwJMe1YHfUfjoTtUMAegsuYBfrCcXZ28Jgj6ZpH5ERSGaC",
  "key27": "5xBr95t7r8TH3oXnafa2kKhGzc9EYxv2nrKG6KCxhKaTp62A1SPhifxXcXMVgqYTSBcwUsGYnVPg9z6oCcfL4onw",
  "key28": "3eFFCWLL81iHRXa3FbY16HrdZgMkTaU7kWiRzGTVJx4e8RCpdnn4KEr1AuYdqtfeT7Mq6Zv6z34FtjAmX43M9BEZ",
  "key29": "4tm6rcpX4CfMPF5rCCZmhnKn4XC8rveZjf8pHSezg87FTsYmchzAPr7Q6HBG17Db2avGF1ictkwcykwfAYZwG2A7",
  "key30": "5WfsABhZ8R86XSAx7G6ymi325PgHsMtgzNb2oNgwdVFkatpy2uNvSoi6YLNufEVevzhDYiTJEGXN3odcJ5Q6LBQS",
  "key31": "2n2R2oh4WbcEx76ViHKjiwHAmbBmEy1eyA4NwZDynMYpnVmz74VUVryerNo5m5ftuFAv47hvBp7pKxRZ2XBaWd4",
  "key32": "2J7XL9Rr7yi8Zf9d5YUyJaGNidcvCFCdEG8MM2uAwDYuKXcnUhAHGJr5FXhogg5fDihNqpaAo2kSQYEFg7VYVR5u",
  "key33": "5QLZrqYqKxHkUzNxGPY4s9kMjVQcZocJR3p9WNqzcuecPWtmMxPpkC8HC2jn8KPcWhgbjte69mkSaMqVXLdam2RB",
  "key34": "3fWxywgd8iDeqVNfo4inJhFWASun5vKq6bfFW77KC4kphT9zb6R1GxNvwfwfdYGzM99pHj5FUkqnX9WAuLV7A2Ze",
  "key35": "4MBSyugQitzStJTye9pkTZRuKpZaBtSUiBr6VCCAvTeHz9oG1sQNBioNFTAdboFY449nmZfTFbnkJyFjQrCzRByb"
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
