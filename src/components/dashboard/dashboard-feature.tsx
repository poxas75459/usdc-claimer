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
    "3krKuuZuepqVhUYX8jLqcsQYJdnsNnVSfM269YnJowUKLcLSkj34JFotAiEckYbZ9FAYisufUhBtwgLE5cUEPPPp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HoLdKkhTrupoox9FK6YAo5RkxThNrbnttnTLLvC8W43wgVDSQyrc9mZNYw6GMgJ1y3zMuura1ou5RZX6otytnqm",
  "key1": "3XcUvEzscjDX35TyCEGGjeJST3teA96Bs9GW1iw3PQcDb98Xnp5js2UTK7VM9u7pQnVrKAHdwc7m5FjfxtEYkepN",
  "key2": "33e9Yaj4qYyufAmvXXkCjM9QFU5o1VVptN1TpeGpoNhE1vPwLBBmRqRj4wyPV96y3fZMPYLZGMLGZhCUPmoYk6Qj",
  "key3": "fYzdeQztQZEHZpvsArMoH8ZkTeES72eNKsc5gRWeBw3CfePfvrVLqMgTsGfaJXi23PM5PQGD5PH17FaxeCfiRWd",
  "key4": "4kMBf5fuZQDPB9iyUHMJ6PqNtXow8gZEbBesJBN7vh1cX2JaP8B61rvCBfPqEga1Xu47yadqvLhBeEYf8xNgwso9",
  "key5": "Yx4SECvKjUYparqQqLC8CdiM8rDjv2UcPACgAGKPCje9zkJ8a8EMPttv3XqbyKEJcZQXi4cpxTPqBSohGh2Cetg",
  "key6": "4Mv9bPnWDNE5ez5NmwrBM7xZrB9od9gJmDx67RmGRaKCtAWmMYHSYJLycuxPaJ3EVWDMoZv8m3h2SFWpGHu4NmbP",
  "key7": "5HSBcYvKdzqZhXkfU2k9WQxxjxfKgwPPbDSux1JN1qTovwatrAQuEkMqzCXUeJchaAmrzf8VFVhFDwC6r1gaVBmg",
  "key8": "jb2gi5McdV7HK7TCT2uDCou58PojT9X4Pu3cjXgXzfob2HUrhcB2XXXfJdBprnG3Xh9LTU3TPupfC7dJxK3mmod",
  "key9": "57ByiGzkRsD8pzUS2v1gEGB54SVojQhm4FpCD6mFoGdF4LgRKi8gUUsxJxJMWCbFzQMwQyZ64mJidgxmhPZspm5J",
  "key10": "5tQiez1XSKuEjvE2rFZFg9mWzHQXRpRBdLhsTEMbj54Gvi5gD3gXWYysfuArEKzCcDz7j4b2cf7kfrQZkwjRLiSa",
  "key11": "5F9gTju12M1iL27xiK76TZg7iyphR4LfKoSjLbpVPFAJtufKxKfcA6LXdp3QgUXF5LsvDqe4KEskwGC7LS3iDT6j",
  "key12": "2mKgQDNPttjQU7DMyxqFLT6LQVJFiMXAhB9AmUpPoRiVNTmBe4Vi9sGUW9voMFEfAQuyyGv3sfa4HtjbGwf7oDqb",
  "key13": "3xR41Cv6toaiNBfXW5Qv29VpM3NNs5DVeGMkHxu54rMCXkNTUaAniJgNuGLkJYT5eQ7ZmaxEh9A4eHgjsjZS5Rka",
  "key14": "2t6Hs4nHrJBwQT7Jxo3KDd7MinhWZ7rYKWSVLWA5DMjxauohsqPQvQH22VrZwuMiHFURVJG4KajV9yZDQkN1qmtp",
  "key15": "zjWb4kNeHtKrQeKCY4rJm8iF5XQQLTna3zqfu4wkPw2BxSHgJiiFF9b4uRaVdnKrjjWD497ayHdaiByqSLkzrU1",
  "key16": "5P5a53N6zqVkGUiANTUVjN6rjAZn4ZNQAK6a1NgoLPa3qDv6tQhau6ND33ghVNt6YdB2QPPfW11CdViMhPKffD1q",
  "key17": "2VghUydMF547Jkw9XgmPUG8pJwqZEgqhh3P7skngMDcELfC4qQ2mffNaP899YuGGhHgpJW94eLjxnMqjyM1F28Es",
  "key18": "3JExBFMWup1KpsMVLAxP9bkS7MXyiGYBK1WgnFFMoSxKfuNRJ8XK68QmXmYtU7s4a3gKJBEoSNJK7njuHwwSuoMP",
  "key19": "2Q7vxD17WpooCsbg5mhVU24JAFKu4tZ2Fcv2pexTpLAhTcJJnPTcDxq6PDYFRkHTqDC2ztetaBqUcJhCCjX8x3Am",
  "key20": "qScUP3MQadJtd37mEMhefBggqyiaJnCTedzJxqv9zxR2zNgrtVLPnqhosm7rwCLzg7butLyN1sGcoyR7vQFmgwo",
  "key21": "TeKLkQmbqEbwCZiqSMMfCfscUuRxq3xX5fHGyMqSHDy57EhuVkbwNnuaBTB2vf8gUPbud8fedEzHsbmZwVmnZnX",
  "key22": "27judLXMnDTE17LsqqXU7yKBpNGq4hXVvYK6K8F72Us3urmh4NeW7ppkzzXwiyqVx8kPC6xwN9bpjMGDjYeM48df",
  "key23": "K5CYiLj1bzteJCjZNZpkBtyTUR6pqhtyZYNSdtaEyxRwuU91uoKkgxJ1ZsWxksyaWBaLakqL9RQcysEpt62v2v1",
  "key24": "2a4ZEdSHXg8tMg7yziAQYB3khNPbjsko8K5uv4SpW4YMw3Ci1dfLnHpGyJe8qBmMACnhQTLK4z5kGDb3SRyMfYgL",
  "key25": "2yA5rbMBgxzK7VHYWTx1BSYTqpiezoPWLbKb91q7LwMLp1dWPkvwfer2pQWGFZE1iTY1rnmmhHeQQ731zsZKJgsJ",
  "key26": "35wAut3b5k2uEB5AZ4YBcg6ttjmfGjLPMicrUFPGRTM6R7iu4QsFucdtZLr5H84a35R7EF2zHm1dz8WN1QdSXjrY",
  "key27": "X9SuDmo23n7J7hQBTSkHEEEg4ikSkyHkQYjLMEj63YoLSZ7zpV6VbJHQ5LnnnaNspGDCvAm95JeaJGcDQkysW1G",
  "key28": "2UWNb4hrGBFq3kxpbBFXqS8D6RTNe4Y2hb3Fmt2e3inmwnrSqrqHb9Dotq8ZQbicjc5U6enTmj5ums19bHqXeuxs",
  "key29": "3E17PTrmi3TN3pToZBvxjYHYK76VJyduZ9H3M8Q4SWxrnsqNE9mRvKM3DrD71bpnwdkucyyhbMXQwLdbnD56Tdbp",
  "key30": "4BK1YhRwBtxeMWR5Xy4AQ3XN9iPwpssHAQRxGuXLfEWYeE73axxfcpdZoA3U1zxCwNxttBkPeTz87rrydxPjbfeS",
  "key31": "3jk1xPxDxx1zpehzwbVicfmC1K9y2RGLJK2qaSbHN3kvXh96Y3tR1gSTWiuqdC12S9RXHT8boU7Pu13JgUZhd3ru",
  "key32": "4PamvWRavK6jpURzqVxmtkAK9PuY5dyFqRw4yGBM35UNAxfS4sprWN88GMx2mcCqZKwdKhpdhSYbJrcvc1BLWmbc",
  "key33": "2UieAPH4VFMK3Jm1gfpuv7EvnUa8G79XFNfzJdVrdJu6cW4u2SD4XmviMi2SFoRf52XAzHYrMpjtW2tcdFfEwzNX",
  "key34": "4GGm4n8v55gXSzFqv7dDDq4Z9hJkuF9HUsVVZPZzXfnMbxU2GYpKdfWYgChzLCGZf1pC6KqbnDMZwhKMv33t9MUh",
  "key35": "4ac6ednAcGva2Rgid4zvhnBQB5izRUP8C96GuRjtLZ78rwj2RFKzMaDHLLx2JfGqL3FQVSW72eQ4grE5yDWXtWSV",
  "key36": "jLTCLMgshAM3cTJnXFjLJckvteyqZ48U19HUUBKUn2gR6Kcabpi9zcwWtzfRWXHjnk52Us7BN2FrBJsk23xDkB7",
  "key37": "5yG1jjfCMNrP6rEwLUrzPGAoPWFdbiLkPV6cRYgDML571ouZK8VS7LK7agbsiDcqD6AoP91dvWmqprJHZzLdM7Bp",
  "key38": "2swpkGArtuu76F5FZ2cwHLL1kxtn4mkAuU7cgMEbKaUK4YaCMgDkW2anTvt8o73A9KnojCA2HMK9D7U55CwRajZ4",
  "key39": "4aKDCqbTedpGTYjWFGHzMcyCiWpLAyjhNERvmEeCJkC7w8kfCgtvQBFABpKtASYub73PJ6LgeW9WZgSf91gY5h8X",
  "key40": "4iuHoEoWkJ8dcmENeTQiLzZbaJ5f7EYPGn9A4o1z929ahmGyunpRyVmoaKKdMa6Z2WTn75WHpoWUDZTtwti3BZRd"
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
