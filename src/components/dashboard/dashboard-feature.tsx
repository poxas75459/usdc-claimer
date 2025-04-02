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
    "4cqBVcMzrBiHd1K51yNmnBvf9zK3EbGdE4Ki9tx5fkh72cYCjYfHCEHCunmWgpR1ipFPQwNAHRYTTQTALevGGE9h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9jFkyC9SS6k9UDUXKKCZuamCqdT36efDkZG9S2UuxBXYhM2etvQFTZvkqZ2WfeZzMu3LPr3qcSwg7fjKeEUZ3hU",
  "key1": "nqp9EhFdsd2xGpAiy4wS9kaybgAGzPGe74ok2UfVYDV5NTXSAq7WSukBBK2tcp5KLwHczpnAj3GRDzfa4DxswMp",
  "key2": "54kD1J6W78mUxCMBSnpm8ZSZnxDD9mTYHQmg58pNURwHFaxSfj6L3jFu4zJUceLZyVKTHuLuySHyrCLund3tXobG",
  "key3": "5wA7VWothxJcJNJJyoPWDhfPwm8SZXi8gG7PQ7QrQGG74bWuLND1NXSrD2fJQrArfprcGCkiwUS7NShDbGGWnTGv",
  "key4": "27eC6WQMHbNbbPXejtnWSYqdDEtPZUnz3DAK6pNY9eerMy9TUnTqhrEtDDgdc8LL9bazgXRDN3rLgFSD7Phn4UuE",
  "key5": "7RF5Am4RkrWdpqEoK6sRc8Xv6ExJPTX1ngVXfFY2BRPDorpgKWR1iJKSafAgj9vvFeovkyUjzii5VuzkTgdGdxQ",
  "key6": "2Cdk7UMVX2iw1ABSuSUjrZSQpTgEj3KBMt4Yi5vcPBFBqamJeoAwDZ4SeHH8MxjBwYQ4pYLt5jxERUioMzWA1gG",
  "key7": "3EM64UJ3qKDRNCn4Coc2eoTpurXR5tgXFj6uEcE758iyyQPny3zMgJUq3drov6MTeRGCxRp7zPayyy81HD3SxpX9",
  "key8": "4ofFtUvKqm86awZLFmzwj77aY1eWXSRHvc6zRttSCnhWSNHquhJ7rg4qgewzZcN2bNhhYTDn1KfVqWyMNMJDtwKx",
  "key9": "xGHUJnC8UyDWpdgbhS8kJKZ15Sto8RF6KJaNncJatBQXXAYyHv1dDoueeqKYznrstW2zVPHcbtNtnFWmcgUehoq",
  "key10": "qw6qhDMSmdADz33bWc6vqpA66taHaSS2jyJxrqfRy56KSrwNKZX7yHLSmDxSkTYMyoAcZkDzZcWWEPU9awuBs5H",
  "key11": "2FNnLJUho4WXjEkD5GK4oCj48v9hNGw25eQ29kpthMo4JGb8fbbLJuFdyPFSMQqv4UiaS9AB7tmsgxiDGu28wv2s",
  "key12": "3zQzs9t3ZbcdkEsukvqRScr1L7yuYsaLVGGhxHq1jsdbgbzSPKrun6shNjFC3C47ZGUVp7zJr8ZHkj9jBQXovsaP",
  "key13": "42GYet986GTEwq4SxiPFtyE2CtmZPutSqVqTSVFWuinz2aeRBbWDrVgLLVyubUmmQcRrPBqXsDjKhqvaZgDsmTsw",
  "key14": "3M9ZTursSzd3DYxuhm6UZC3aELtFCDQdXKG1tee1SwPWLggBBZqoqRaEFE8tkHeeZHCoN3QF8pNCdKc7un3YDSzG",
  "key15": "3gESJrD1PpJ4EDtQEzJFn6bT7rkck1seoqYTZSnPuK7P2vxEPnxq2Eg7JLhe8gcKrX8Hz2MXMmNM9Kj5YM5RQFCY",
  "key16": "3k34mZEtumGQhcZaxPMQbJ8Xar32ERyjWwgYSGjzNYwQAeaYQNdDyGLuPjP3NEK2DkQE5KK1XCowkti81pRCsuHA",
  "key17": "3iWXwm65frdBRLRp5epAVJYCFcvwgsXaiF1n3xqYkmVuoj9xskgSNTcswVoQQdeiKsySYn6F8qbM3aaPmoxNUev9",
  "key18": "5ZW5Mv8RpkEk5vXbrwGUaXj9YyroR3bc3CvpUAZ3W4DMEuJSTNRBH6kfBwQKUAWP93iqHxfPN5EqEACuyx496vqY",
  "key19": "3rVwtNn7CZPR45SAqxFieuk2Swc7foYBBwjkLVkpbjn8g4UDA9VCpz1kr9TWhE4BnKdQ7QMT2moGhm4ggmuLYWLV",
  "key20": "VGuVdoXiapNQAGKMcuwvC4Beyff1GSjoP8ocLA3PWYoeUYmQTm6Te6Auqe4UU16C98AFh5ZRCsHT93FwyRxXFpr",
  "key21": "3oT4Hgqo7QX5EH8UPDxaY7hbPNC9jzHTvoYvaKEBhU3RyUmYt6hjoPp8Y6GWvyqB5WGqmG2TeheWSfM5brV2afuv",
  "key22": "i9q6cP6ufJrccaKCdR4QMsR34SH7ZS2rb8Z4jhdWNnkz6uSFUrEcVSUFva4vMNjNKKUqNyUdBGS8VQ3J163AyDd",
  "key23": "5CfNGJVdR4zYHotg75Enp8ArFgWGdGPWN28eCVx78MWQ9KNM2zS8FDDbtpqYNg542QHdaMZjctTXJiPrZ3ZdkPup",
  "key24": "2Tvr53pEaVZmLN3t9LmZ1gdgNhJfyrz1GAdw2QwjKhPEibKG8kYtUQXv6YZiBwY6RTaGYzfuf5C5yvsaxvjDK3eQ",
  "key25": "5eLPsyd2zv8ntSjaSsG5z84QvsjZBoigW9BqTaQz7txQiCK7feuZTqmGyJUQnn3stgB6mAAwZLu6Z6cWv6ogpjq4",
  "key26": "21JJPCnMmoYAPh4JYjHhn2aDujTTRg7ZTuFfEAs4eDgvU7wX3aSyGQTnyEEv9nWinKKMkShYF8BPVm8ex4ncUHGU",
  "key27": "4vUzA8nYwE3q8oNtCGuzRg8uRZNtheBf17ApKr147UZ4mPEd8L3ZxMXcjVaYswLwfAu9ErgdzZv444nUctDCna2Z",
  "key28": "3z1QEdSYjR9CdSzJbzq46EFzGZ97q9A3oiYhy1g2jue9H1qk7uMa6SX6yaKYCMmXxMg4rHPznhNoPAwxRjjPrJQY",
  "key29": "3Mr2NG4UMvF2KLGNZJaXgoE6WyX2gpBmD3wJR9Qq8756ZfGtXbbQuNSURNqXR8dkSYjYym7HtqsHKdUshmfcsQmL"
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
