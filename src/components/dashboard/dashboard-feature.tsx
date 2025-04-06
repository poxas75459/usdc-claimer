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
    "YHXWjNPPFcXx6moRnkTGChckznZf38uMrUzqHBj1zwxbKTUMxFYDpazqnYzyXr84aFKci9T48YNwHYWEbqqPRJu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kT6V4A9qNWfecMeQ6hPeWZd96WcZd4hrrXaGNkVkzY4duTyvd6C8cBeY6C6gyDYiiShGHkgmyBpjtkL54bwTuEU",
  "key1": "hmsUgXsDRyARHqWZyP3YEfkP5JDzEBt4DsijqmCrxGRtUuSw4UxwnS2AGNHFcLesyThk3RqbYZz4bcG2T9SZHR1",
  "key2": "4p83A9UGZHhnc654HAJyu6FbY8hXLkagZSwkxRaHVHNrhiRR2rfowa5t4XusEPFbP9wVjvZybB4rd3bqTWdw2e4L",
  "key3": "2DS5nr9RrDL9Fg3qw1h6QHsmPwyisNDZRH55hawKYHYe1NDrUvjZbFeFSU1jJ5coe81HkLovLtzFfJFFCCrFDKz8",
  "key4": "3jFJWQ6fgVHmGPW8Udenk4Jhutjf7uJF8bb6N6eKs3dDh6D6nVGvryhTr5P7zgx3jmdphAJuFHCWozZS45xN9B6Z",
  "key5": "2hLoGhbG5u6FffoUA6hsrPmUTc2gtigS8A2T5jKp7pH1STfgRUA7x1LqJbK4VBCohR5B8VYNiXR4wwfCXjqNq63Q",
  "key6": "3ZfwbVRmH6ymZZ7Ws66HFoa9oKmvmuNT1sBr2wAVAUqA6rKmKHtJvupCMupLR8J7ZX5QMs98YEkpzDqixq56kFWq",
  "key7": "4vMaNYJ74WzKzPD1k797911FFfzFqWNDJm89QYx2mvqBFa1msWgfQQAPvVfA6jDBwZfnxpnHtRdiL5gKj9mA5SCe",
  "key8": "4Why8893doMji28fYRpvuouTfJ8uhxdVc4SDN4YkArFyCpj2qa73DZY3APemfz4aT1TDVMKKoKi9nHCM1fC26FJw",
  "key9": "41k6kyfw4CYowd12HPNLuz9KkMbgJssFxVHi1xdpGNk3DtB9pEgCwc2pHDmDTcbFtxArq5bpEH2SvwjwkUX3iHLc",
  "key10": "2tjvsjH5AqXHPsxFKbghK3bSVXStbWcs8B3NhBWYWtUmVdmgiT8vV43GmPKnVNyQK43wjWxzhzndAPToxhV22mog",
  "key11": "5muNQWZZjByvn5E9jeq6DdBKv3yp1pQGkiAoE5pYHstLD6LEJtqVzwNshxoMaNTnRXbNg9U9HBETjd9YWdJnhw34",
  "key12": "MTdDV9geEQ4rDA37whQp9jVz8eyvP45B7XVUZqmDDALwdHDrmgEXYrs3QN6ZcdXeEbYqe3mTK97P9tuDhgaiXDc",
  "key13": "38whyUYbHPu1bAbJt3ZS3EMJsqfXsUo7X5mwps1XzhMwePU6w2Ry2sAt7o4czHvCeV329MuNRrXNdparJgoxEhwh",
  "key14": "3dDd1PiPG5fBaRMHgbYrmbPBvKqxJxcPsX3QrvBh6zLkXYd3HJdEeQ81MSYes3qwntFQwmKjW1rXS88cM5BaYbe5",
  "key15": "5DJ9VkxwhBvJh9xtzLWi6RGJebbgvwnjQw187PtJmqm68fBrD9uDtedjEzgybMjKf97jVL9wPjCJnMU4GgivyqP3",
  "key16": "2V9L6u42MH2U9ESAMY8Y7jLAVFkC1nzuHvZ3wBCWAMeNwSY2G2jtPZNxp523qJVzx77cQ1fNncUPd9ar4oWYUAP8",
  "key17": "ey4kzwXeTUSYAVMHw2PiVPzaa7YaukVKD9Y8fX6YhBHfkMdhpHKpYdxn8k4cbys9LzLcT8mQ2mntfinP8voJukT",
  "key18": "5djsk1McshSB71FxLmDVSLR2LbsejLQHZK6vvNAjU29XL1rcY4VRfiLn5b5oHAiZiCimrSPppVZdrwJzWHhGJKe8",
  "key19": "3YcCFPQi3sdpwgRt3mMzWCUEumWDbQrX7nbRd1w5fxZkZKMbvmqL5nhTJeop6gJKatAXkbiedxoQmkW4UuH8tNgM",
  "key20": "59xUJcvCxZChnzbTcEsRJAmeH6SuDyeVfcAvwL5uhpP3bRGZTubgLjHLX6pvSEcEsLyrxJAZAjZReJTfFYCPvuoJ",
  "key21": "5XAHcQq9QT3V9bH2cb4yPKvk4cd5jdUPgbEUj9SfVx8hSf7CrYSvkFiX4U4c6jyxRBSB2y68h7QR7dXwkXB5Lzaz",
  "key22": "5c3BvXtYnMxYaKEfmBaJByr672UQKCwMZcbKyUJPWMVPnn5W1Pr3rTH3AYjBzqiHMr264UphwpSwmKSQpjT18bd6",
  "key23": "WByQG37a9ooZ2sLMfZvoArKucEeV7EzMxTVYAYe4cjkxiHvKawrqkyvBn3ibnJn9XFAFUsa5HFkLP6ab7MEhEke",
  "key24": "23qGoM9bL3DzXLzfkn3NyoMSyeqkACdQNtc9SdTJbQzBGQawgsNVkhooR9bbmeuzQoaCuUfE6KRvtfqLMHJKiXyb",
  "key25": "qVm1NQAUsV86SJPBW2UK52VuJwcrQxvkRFRvTmp2L25TFU58DutTaVqo5jrHjCP98zf9YjueRsPTzp1YGWXjtpb",
  "key26": "ccf9RpjMXzYy1aXSauxkcf9aeWZVFFjgptby4QZrRTYsNmCwcjqkLPT6BShF45Wnc773fwfmSakTKkbuu3TexPp",
  "key27": "3PLvtmw6nqecX85p4MT7c3k83BuQ8PFZxfLbDPhqPTUmNGSUaLQUBYY8JW9eQKGiqtU7kvhrSkf7ugobmV898GoV",
  "key28": "5DyR9ARNiBy9HSnxEbcRrQFCAsokFdQgbZHUa7My99JmPDynTqJenERg2iHmrXLjYTGPVn4gc5ceaBXs9ui332sC",
  "key29": "5gPLHxQmZ2MWx3dFJx6MAgBK8fyeV9QU1EXrzUcJL4hRCLFFuScQ3z2mfwDAhZxQhiZWKgZDq3FvPFyhQ352E499",
  "key30": "2NSHfLJNV5ykm9nvWWzAVp4KC579P2MxpWWRjS2hsUC7TJhNghMfaLwLVr9CjwLLR1Pc17GMhNmjADEwTBJ22Dtp",
  "key31": "2s8sZQfjQU2oLmwQnFtax7xDbEgegioYVVgVXibMXPR4RQTTQLfeKcGA5xSbJCcXbp2rriJtxDUyzcZuVKdvsQAf",
  "key32": "24GFkCDibUwjjYB3eQFBJjMB1gewJEfRpy8exzWwSptqbsWsSi1roVBRWWoATRfftF4JqNvH7dfuV3TkcwdZnXMb",
  "key33": "4xJw43fSJQ8kWNZhfiVyjFnaJs5sb2k1Ez31gvSdrY4hMs3KrCjyAxULNEKhUqQxbQSk3RD5LYbUv962dVJzQAYM",
  "key34": "5vvFtU4PTRebffbPKJFGgMPfvNFsMFNrcwDYr9vGavwwVMH8BZU97LxynpgKZEZwZDFiSrcDyWrhqJdTcDsd8kh8",
  "key35": "3kHyyNobqBk5ChiNz2d5BH4BzcEDTbpDbTg2QpBk9aRZGzAvAEKDM9SN8icFfwVwyC29VADUacKHyCT8pHteyGR2",
  "key36": "4rMZaYeBzgkYhGSXezv85DJQ3Pjboe2t9xm1jB5TrHJvfkutXqbaNmBxf12daYWnk1EmAYXRmiXh682jwktfcQAe",
  "key37": "2UpTmmNwDBDoNhinhEgzXwWTRTfBtFBew1RpbYg2t3MgfG17MtDdjbxQYzbR1wHLpWjFDnuqQdVk9Pg3QQQFP5xo",
  "key38": "3Rck49MokPaAF24CRKxGCvSma44wLRcqAM7RyCnrxUdCG41VSa2tbjJjoTtBoveVTuermpCqXNpRxJdhfijVNX2J",
  "key39": "3nk5BEregLuChsqFWrZMXMdDGZPGNkozFqeJHLTMkhdufWywmkK6nRDhHU8uqcWXCn9F7ZAka6EVXMfMm7amGYDX",
  "key40": "34SDdaGmnZsdyzyePfhwjPD4heCaj1cL7t491wRmJwH8Agyia8YWKvzWjNY4w3o1XJswwWkVmqatnEinyqoEc85"
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
