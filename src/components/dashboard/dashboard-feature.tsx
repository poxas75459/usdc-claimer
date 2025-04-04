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
    "4YKgNH5J33FTqbG7Wx32arRZFiRVJZmZwicBJG671ETpwwKMt9pLF1K4wGKCt971ZTjSgZjVADqvTyjHWLa4epYR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SKPsfiMTCqViHH5e6QnJ2gCPUPuUdS8e6JRfeSjcxct17BoxWNYAfe3WMYPsx1cNDBvQLyUM4Q6tQC8hrskXuRq",
  "key1": "4EEHWF39M5dennm4GPXpH565tuXLXDfo28k9nvQp5hV2FMGXLgB5igs2zdFTCCchVzNijT2vxz95eswFdgdgKeYM",
  "key2": "5BXgwMooqmQuqxzqucBaihArQ4po7hWfY2B1ysD5pgGbmo2ctEGJKzifcwV672ywqYtsRAcdXXTpH9TKLhawfjb3",
  "key3": "3sD1yH9gXGES7TgyLnE8yuAv2udqKq32kUbWvNmqP8U8bULSd5m6xD16ycTmgqdgkifYV739oRpRVraV2XtF9hqj",
  "key4": "4y68CMkroQayodmwp2JtHNU72jjqDCPrdDd3YWiQmVPxwzBz5DWfG2V4LNuU5fxwZi2hgof4qHthp7tf4uvfJaGL",
  "key5": "4SCSkJ8YuMSbArh5wo6yhKsoo3mV3CwrBspEdEdhxRWq4iDBeY83V8RZWxGHqPJGzhCVq7qkaCJRuwyDPSCdx6bC",
  "key6": "E58v5YvzLfQHw6DHMuphVfgx2J7q9Lu7CJuuJarNejmWsUBdvgXyQ3piXTdUzSkekMs1kbzYhBfKCHFtLp8NSiD",
  "key7": "xoKuquJnrs3bDZekjeCQXCfYiRxdbiDMN9pDjmL31xSAJPXm3NFZWotcakWYTWe6ZRjMbRKEt4didDgzUEJ96g1",
  "key8": "oaEx1kpwY8fb75eFAKHraxh2xvsYsntAVtmuJjmqEYoj1tQNkx7ueFtJt9cxjkk4kZDccXVSmrzxNnmvpiSkxqY",
  "key9": "2xRtS6qcjXXsASk9ZmJC832eUkfvQyL2UejAgnwjLXfNok9vTcXtfWp8dvEcpBGNVr6xFQ4SFbd611kH4uWBDCUu",
  "key10": "4CMjECSDYQF3CxbMu5qEQwLXyAT3ivbx4a5mQAbHpZSCkHhZvmiP2tkzGQePomKRSHQLbwzqGtXn2n9nK52Eb234",
  "key11": "2pnuqTb69hPcZs3xKuChLaSKdzTpCQ4SewixAitkSE6dMNLimCVJzR34ryze2F9uuYRzHxRZyU15Zx57gk2vscAP",
  "key12": "4RvuAtR43Wcdak29htGHotVykgbVJJx1JCsejdTzNZ5tG9VNpTdVKE7edmHRNqqrc3ZRZMXjTJUdUo1AJjzXAbLi",
  "key13": "2MUhgWRFfs6oihmwPs1jynuTdGAQFaDanF6nwZ6VM3tJSvc1CSLiRufTNnpfGR7uWRPV84xqsPMdWH76thJ9TYaE",
  "key14": "3VR9hCELiPrYzc3kkHjsHZm93CyRMoqDHmxtop1G2n2CrnEfhG1yQM1gL371uwv2KUanX3u91ewex7sco1pERG6X",
  "key15": "5uirFBA39zFhp1XLhCTAd954EMYeT9kY3gU2B1CWjZVK2EYYrRN6TDoD8kMSsAEcKj9pzw5KBKXk2aY1b8x3dWKE",
  "key16": "25qZEVx5ZoobDkquogy7g4Fb9GJhs3G9Jzr4xZSDBr2w23ueKADzXwpUmpQG2DvWLd1U9cbL33JF8VAxrQ6ucY1c",
  "key17": "4SnX4RBSRaEJgV4uG2Noabytmrmd37P8r8WHgkwU7rW9anagS81qTiew8XmqgMijkXc6DHThgghRgVz7mSpkEr9q",
  "key18": "62KzNsZEq8E3PHqbax2Nf3uqxpJi3Sab7VYK2V3mio9hhn2vRQHscueaqeTJyPXYYMg3x2Vv3C1Jv32AAMHVXkfF",
  "key19": "wuMi9tZtWPRnxhWWxzpKc1YVcqCcf9QzhBWHxmHdqNUjd3bF8ZZmqAh9zJfL73qno6voTUGFtontPT1JYZPqccq",
  "key20": "474ycjWZF35pRgBaHu1kqfHM8spBS5rqCELQefSzU9uFsY9ihooBizmvoVoGPFQv8rSZH2BUpQweU3GvufU6jfW7",
  "key21": "5XYwtjuxpkEG5VySbkLejh63JXXRREhUHKTySZQPuPobYA4Jg82wAMQU8vftW4agHGke5nHGRoyCrxaX5iDEuoVA",
  "key22": "4nFQkxam3xzH3FakULzvfNJ8adTUHhE5ErXVKPdbpzANy1D9CK9PHSNVQvXrNKmk67B3bM3QSs96oeoayCHdp7qc",
  "key23": "5WEbMJWzyJ3Z4o33Np3reab98oBk7Shu17FcQjECgGp685QAKm66WY3GP6EGuVof81f31j8uHU7zC82EGHtxfPSj",
  "key24": "ZDm4KVj8kGr4RTt9ccbHCcN7YgTu76pVYa3nho9hFn9gkmvjEkMG6vcikHWbtnsbb6YS73muxEZfYeyLRGmrUwE",
  "key25": "34ae5synSMuzoCLj8qgSizQKx2UBucZzmZKXxf7z1ZpyTQVcK3HeY9haV7YHvjofZkPWPJr6gQwjQtjMLYQWfGRN",
  "key26": "22nXbiahzCdqBzDMZZm7kmN1C57BVyRwRanczSRgKZuSDxRyF7UnfCBnswR5rYckxseREwCrGqHxYc7Ep4qpm1fr",
  "key27": "BW4qdrCoqvs43Z36PqEkur6CpvxJfhVd5n9WdCqU97hwXZjTuXXabcL7aJcsVSvrRJDAoxpdMauD8hGb5jobeN7"
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
