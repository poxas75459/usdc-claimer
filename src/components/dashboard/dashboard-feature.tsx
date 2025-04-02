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
    "UW4mZ7Ufv6opvKnvfgZTDCaujQUyfSMqX2BtJZxh71effJLr2NWa54VkpKkzX4DSmmm1xPf43E24R1Le8ZyKPbA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a5drq5eG9BJi6KSpgHq7G7aywQU384WRD1V4BB2fbDM8286AHyATF8bcxLmcwh2Dii1FgJvbM69L3J1vAcSxRex",
  "key1": "3kvTFNXe3VhvuHCLX7w94VDxCJscB6JFAPRYT3yTmPWMrKNsTAbcvszwF3jQPLRh3mZB3S66F1ZS3Bi1cMcjZAwj",
  "key2": "4j1mxwHMoT2o3sn1SABvTH1zwKxUDQpFZHyf9APdNhwDUGhHATggRWL9oZW8xgyqmN8hB4o2SE2GnyGGp9Cp3Htq",
  "key3": "4WTdaFpY1napqQxhHcE28dD3ayKJ7HDigV6WG2YdA88BN2Xnvf8Lxo4Non6yy887XjfEbG58uLAorj14dUY6PxGs",
  "key4": "rBzQa8rKtDSDXuSxgdthNyJQU17khf5n7WPMFx1it2fdK9aGYKjpDLzxs3EF3xm7JqQZmmMyDdDYhTTE7PfkjKL",
  "key5": "4dxCUuVnXfr3tuQrzqLCtpZYkCyDe3s9mFHK7Y1iX8FdSs8z3GA2b1sL5pBmNVnqucrTsQYRpVKXKkRbvYMn1zjz",
  "key6": "fYCtbXanxNbQoW3uu3m5v4asSCuaaZF1bL59zfDBJYByGynYVRw6iSp6wC9iNGfWJ6RZo5vLmRtjUXukGiCh2SK",
  "key7": "2otQYanrzQKZG7fuoK2HS1csh2PgZrXhnGvNn9U3XGEvsZACVRXn3mSGVhLjJK5VErtFRGwt3RMYiXQqYMpQKz4K",
  "key8": "NFcEbuNUSwp3SgBdsXM3wGoVrA7GofuzHpUfXeUjFa8Qm75saQi11xb92ioyiwt6qPoGAsFyFFjtUYrDNRogfGp",
  "key9": "5ZuEMJwVdnATXVMwPZHRtJus8w7a5pEZiPr6nYABi4caSigvAev61GsvNTtdkofmtAFwjp9RBUn4PGnrdswznN4r",
  "key10": "3XkVxCVumC4fxhrYxpNvaL2P1Kc8hRnbbegu4Rzz2mvXR8Nn71eAYzbT1iHiNdZi2yMA17VuT7Bes1ZH273kmFnP",
  "key11": "DCtGaeNLMrByKDmvp8W9g5fXTXPHxZd3YtnH6xLZA43So6m7YZc5USJ1Z32NfoGU3R5zoyBSvD1k5cJE1Gs3htQ",
  "key12": "4KSvqJULbCtUhnPYuAtpMLW7TfZgmFknxC6j2jVf1mbjm5QVqYwR23g7wm3zTiPfG4gKBYqkqvNfHxLYXK9sagYK",
  "key13": "2HCxn41mydaspYvub2ftv75KLGUivnpvft3s9JnFmVc1XcDa3gjZDLBV2RpmRMvFMMvk4Qht3nGvfWHuVXoA1pCZ",
  "key14": "4rgaxMPPZJAbKqE19mHi2V1J6Ee97rVgcevtdWS6KW5JrVLLt4gL5Acnu8HSUZbgty5XAsnb4cmftd9bv76krxiL",
  "key15": "4Q2f1HJvF4TwqdMUX54byua3HRB9vj6Nwrpges8fUX5PkvewQQvSbQHnXdudNfEU3CJYnRbCWGE4Z7yMMH3efibT",
  "key16": "42pQdjZHNDKTWBoUSCQ2BYomM9kpswAugh1qMYcA3dFnhsYv4gkRqKjFRe1NVHERadhHoxuwdqao2mouU5Ds3nuk",
  "key17": "5cFnEGw1KscPYmu1fBria1uz1nVUc5BkkYd1LXAkbzBK9wG57cNqtRNRXheFHffVkqZhzu5uy56wP2bpLqsGQxWW",
  "key18": "54fjKUoVwmq5nxsDpQ53eoUv1Dy8Mq3S1cT2zAPkpgnzbkwDmnSaA7Q7ydnq8EREUhTbBaVeQAbCJM9FPvTwz8v7",
  "key19": "5ZiYWqrVP1nHZACQBNtqWrJz4jZ7eaeAKEshddgvqZFPYdnoW7JN8YkYDeSD6UZDNjiRNhNFi8ojwnyGioXQczdk",
  "key20": "P5WrbUqNhYX7CkQ57J4BgEdaLJUBPt8DhGpTZtD64h7qbpcx7R5grb31n5jnERKas4oxhbg8ciDG979oZXUScko",
  "key21": "BAhGw78F1AA4ARGYeXyuJ75pxsr6CYayha9VgrAQC2Vo9SH84htyXXe2TQQ8gaGJqE61hABeJkZePk5rDqcV3Vx",
  "key22": "cmyDDvhctxsZhsrFfiqsvUHiBFZfGZKjx9zazDaheWZZBTu4jPeTfEa1nbxvY4vDYJsKN8Fr8gY7xNTPToznFev",
  "key23": "3an3JmzFFwwV8xth3zPd1FrYm6orpFfp3zYnkUf1MC3eMkv1hM1AJ86LP1X131MBqVtDCHagiydXttdTR9v14w2A",
  "key24": "YK6vP7wzBmV444vqgJNNxLNY8jgDmt1fjrGvrc3W3J4xhyURqwQSB7Ws2gX4rLo5cAo8nvyjQPP3GBJRt9mTrYy",
  "key25": "22Ag5AxQYX9mSFQRBq46RJiUKvRH1197m6xwwrY7WuV1wad1QRCJ7CqhkGVbGtHEsiXRM668mZoe7KdP3trCaSWb",
  "key26": "4F1qDDQaq6SdHNSSjSKZK6mvEgz59eAietkMYaRC5Hrp3DETxELY2yucoonggqqCKVCAYL7Qw1LMwyyqGFmKr5sV",
  "key27": "54ZHnvYJxgeWVVVukRUMV5qMybwKvshhiTpCtG4XP4tZwjsxLMeWJ1pFBhTtrqEiizSh8A5ozzaZyiWFUy5d94ri",
  "key28": "21baURqHWq6naGY2sU7aHGM1a4H1ER5kjFxNVg3tEPy2wZyTBPppJLB4kQb3uhNUCtbqmaP8Dn65fRYbmKcKvWzD",
  "key29": "2E9qu6ckafRtRo1BaDP1najJe2NMBHHqWgMsgxiXjbU8RKANQKXu2iXWZk83Ny32NvZgwZzB4cu4D4Zc21HAtWXR",
  "key30": "PpPa5xUkNvyxRqPvLKpUqhzfLAMxMgzm3X1wjjhgyckbCCzL8iEANnRD8ryzGPhWRwBRBvMUSiwXXtxGbxxKJS6",
  "key31": "5KCTS2pkyYqTnu2Q7XvGrvvgce25HBwPBYj6Jmv9HDsBsHTaF3evTvLRepAvtjFJtGhYqH3r76d8EH2TR4JV98AE"
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
