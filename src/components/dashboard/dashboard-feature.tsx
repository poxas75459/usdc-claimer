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
    "4HNP7vGU8Ui6cqc8hHvNssiW4JqswRH5TACaMGEPLAgPPF973pFsrNcwjwLPLvTWKxYKJNf1Ad2WyxM8M6k7GC6f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NNxCNEsDPeWxZ1on4dYFYUyBg1Saom81d2m7YENDXwiUSNRUc2Pjf39uoVknNFCKrpa4WkSHfLvoAdDpR2xrQMn",
  "key1": "2CBbWtsqm1apD5yo65moDh3vFbb1tB91Yyn6Cu7zgTjWzxfKa5gXzZMjfxHbinZ5yFVV3TNzfX5CXWoXmHiJ4V5y",
  "key2": "2jAnmeimkB6aMxxBoLkVUabLgVUMW1ScsGTMg9jgwonQ3MTFZKmLY3GyTtJ8jsBwME5DrdXRiYSpyfShaqtDCgG2",
  "key3": "5vzF56CXj4nTedRQkMQmY61WsVgFWSXkm3Lnz9vnrjmfwE9gmtYpv3eJ7uzn4CLf42Fc8ZjRb75nNtP5JiGtWS9d",
  "key4": "4rfnUiyTjUoZZrLMkynQm6KWUmNYx4pzrNsR2ZF4RcCDreBNqRkwmje5hfGw6pAnmEQcp5bzr9DnsYH9qiZB593s",
  "key5": "3gkVyx83P3Wv2R3BBUSs7PtJZzrBexb6BN4FAG676xiYGgpTiZgB2jadVP4c467KSZzpe3ikMGetry5tN3KJcRTb",
  "key6": "Pw6sFqTvP87SDMup7jntWgVwjG3RFLSnupfBAjTVBuQyLcdPDbooFVmpRpUJ1wZFsnh9GJSebgScDhR3pHn5sdS",
  "key7": "29EX3hUVMWTEc27kVkkK3hnUTRRtM5FUMZcTY6tg8MQGmAmDZKvV8CB6pSuUKGKhywpA6x7az96YHaoa6jAcsiSW",
  "key8": "2vUyT9mGXZnVewTpap2uDsjb2g6Hmc8pQznaEzYpoD8icvnXnvwX3tLcaA1Tvf8X7tZX5MMPxw9DZiRTg3WBnKzk",
  "key9": "63iyygN2H4YRF3RTHrzXFXXKoFmhCuXWexBBVTJY2VY7sQGiWd1LA2UdUS3n3n5qj2k5W26d8iubZXiXNtSGtG19",
  "key10": "2v8EpC4wr57HtANeoEtt3KV5HLUxcpTcAczxkGbGEg7Eiynh84Y9ee4htPMmEnt7Uo4TnhCDm5hCFUsz17QB5zWc",
  "key11": "2RmDVfg9CF7TRiSpbxYo6jc8qmWUpzWQfqMXzNEp2dccrD5JvcooLT9UWePjxaggEaAgMbQ5QhNzYBfyVTx5DsJM",
  "key12": "siYeU6Lq9QsPxiNhncXNNuqNpwuJmsPbSuotmQiovm4FsrP2piiiEiTmYE9comWeu2WnAmwo9ZAvymdpiv7EczJ",
  "key13": "BxBfXvLJTnXJhBK6aNjxtLuSBxiMehZsGLcWSQfkcvt7VK3N8tgzogiDxRTFRrHiPBayc6w24S6M69PyqNLdQcV",
  "key14": "iSqZRGCFoWzF4FX8kfLXA8aVfmjT4ayQHTWcrf1khEw8EEdGQXwebezSAWhUm6EbQqji73VmPTB32KPdJbKLCZb",
  "key15": "5gTm15kmLAm5ab18zS4VatNUVrGMAP42bnv7YtPyEatj5CVgGYWwo2o6CxkyELNjh99czsDP8btaQvz7hUQA65Y",
  "key16": "4zV9QQWNCXBW1jm5uHqgTmxBoqWiDv43JcHHpyDaJpSFmE3QrdDmrTYwixA5bJn3zMfnaCcyscb8EJ1EiZqR4S8v",
  "key17": "5CcuqoRcNwgnMQFk6GXxJkfKFzNjBmj3BPARH6s7yV1DLQcHyjL4VADqiLGJTwq4kDMGRBhfPVtzmrwC8j8FZBgw",
  "key18": "t1vy5DV2gFyv8hpq5dnYj5z4n4GksbTpH6ZTrfkyWjXWbpWgT5JEkZCrXV7w9j4Ck6Wcu7msQiXkYNLVgm2WfTT",
  "key19": "5n2WgyM2bgzWWHJP6zncxZuoCo1bqdbFwrgrY1efeGYaZn9k9CH3yatQdonvgM1pg71G6PdJdjVz5jz2Ucve2kXz",
  "key20": "4mLE1aUusxrN6wZmzFSuwFapWmzZg7EYPZdjPZyJVb7J8GUmCYQpoXUyXWxN4RJdiYz16kdGD5ArcumW5kp25MEK",
  "key21": "5PHuaYbqbGwY14dqMVFPmJP7oS55PPwsC542fvJSrAAa7NZ1bNct85LFsRGH4Vp63cNqxmXJLruNeg6R5DTks6Wf",
  "key22": "54YmNE2s2fp9yAPuWaGPBFf1meTHgYGT3h8bHQN5MRrrkkkbeJRVXDT1r4kAMAQkQZARNeWPv9PVqedFBWR42jk2",
  "key23": "H1gSdccqAPnJ3aZKJXNZyLqXi6BBA5CgyN7AQwUyFQhwuS9BTsMCXnJoTVdSxA7Sx9fGXpDMj2aUg55jySWnqES",
  "key24": "2E5ryVgodzxBAiGyWKjR17cyEbrPppx59X53jCjSBJc9uShtS69n2ipUPeDkyQshYaTYctmHKqSWvAXHQVZ8rtEx",
  "key25": "xfcvX9AnTVPFHencSaJgjc4jHkqNTunNGLWkwWEREpYWY5ZCwhf8S28nTtoGuJjNyNfgAQ5qBaMCZAadGu7c7WF",
  "key26": "4ZebufLPHkjQ8ioC7XYDqSBPiffcM6feTzQJqx6RKfL6TeLsTrKM1ZuMKPp1FQcMV5Rpggdey7myioesJRdaq6sm",
  "key27": "5WZViTWaFSHeQ4vNzg6GQbeuKwDfWtkzFKWgawDWKtfCKFn3MPPhcRWRZvSquuSomYE9HhjnJm9TTH8hJXEaH4LU",
  "key28": "39VPcCybVDenpavqYxdonBMm7f7Ki4qVUWQMBbMKgKLDaR7DZvbikGY4414fwnarhMh5iozUfhbC1tH6QbjTXJgH",
  "key29": "44AqXRzevhNwhAPreTpPn9HN7WWLmeZDJgnLtWAcsyu9oFdC338QTsS2gPXju7arWmgaaP5zPaxJfEJ3WstGK8gy",
  "key30": "4HgpvM7zgmt4mXW176RPWTtAGDpQrpMyTcbx4ZB7XEEUYKTe13gFhPfmpo2Qg7JoE32mryjvDmnwRZHHuVdixuLc",
  "key31": "q4ZUa4xvt2D7YDty1wwW2AKxJTbnZFpYYautKxqTPBSV93gcLk5ZFKxSj7x1aKQvvrPfckqgWKS3Z6TZTjjt5UA",
  "key32": "2ViDJ8B1XZEWuU4jB1JXpd3JaXhkfMuQhjrqT2x3TVuuK65BPZZ3ny644aVYFAjNz4LGmquk9kvDECCK5uhYJiia",
  "key33": "5SY4Xz8o1oisz6u19b4VrjMU4eyxFtPoahFwW7Sg2SypWMWRVan3VDgQ2CuU4qRALmEsHtv4Q884z2tF9T4xkpJC"
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
