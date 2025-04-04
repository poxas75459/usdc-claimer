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
    "5GWrHN67CvExVZZ3Bmx71wDP4xYqXaojk2SAn23fGtuowS1dqH4gFBaAktF5HUeEjnJeJ4NMkPWiRM2QbyA812FU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x6Wm6HhTbj7DfpDPdWex8rZNt56e5xXEJxw9kGKY7EczivuNFZf2q9cbdNQBvj9jjuiCZbJkmPJaeAJytZkTvNC",
  "key1": "595Sf3KVZhzdnkcGS8cJTnZHFWe22ouMhpjYH6ZTiqzRKctdSbWsufsMiLvecGA9jjFmQafD6pXgPCrmpCJyFzAP",
  "key2": "3xoEknvd4U1WvYPfFN7nZcB5AtkFVabE8waG5ebJEqQBJZPaG5HVHRfXsNswwfZNLuJirTWwW3DHjDa7tAWRocrd",
  "key3": "4x3uoXAHQT8VD9TwZ9CK4zovWgoeksAT2qDaFBA3nz8NNcR6udhdm2xSk77pVn1MhfWYVz1sw6wRjQpCXhdAwjeJ",
  "key4": "seDqD2QT6J8KhucsYSz3cZoL4g2esQv37ZcQUivZNDYMGavXwW1bAd2UMatQ1jY5HbMynuhpVvATdQt1V58sfAU",
  "key5": "KubHDrJaAcgSjDYr5KnhDCgdeRAfEt8yfi2FNUhxrdYof1jpZNHtRfKuB2Aspcod8Awe8qbn4uv4JWyagXLu1Xd",
  "key6": "2Xw3suwghHNofpQ5hC8MnY52JF33TkM52eCtEP2yam674afrv1wGcrZT9woRY4oa1RcfXL6fQtSAfjcGLPqNkmZT",
  "key7": "2oYsiuhUn51yERY9iuZm4p7dMnuvMacoo96t5MonVtLcdTP238bV5euZoTKwPsKxMejhs2DTtLWbUYv3MPpXXzf4",
  "key8": "5HEwQHANYXnZTxTYD1Susn5L7jgWenpvXQFFHs8SDK5RndEDuswNPSn4NKwtr7QthxY6wsHSTby7KvLV3PxS8mnN",
  "key9": "3Xgkp6WxKtokSGjH6gbuW6YPZmiKsGVTvVYvE9sv2N9qUDanJkXYchzT8gD74wczhZinYYw7UD4YnY2toJpfG7XL",
  "key10": "4qjh2EAgD4MU8kiEMhWKcejZreBKfroxBZarSsuGqwhCzduEJtZAsm6xjYr7Xsi7DpPfK3sikkUA8puMwYxSwKkt",
  "key11": "3RUtU1nKnh9wkKKZMRwQV3EaZ8suh1RxRnfp1oGeJk8xdL2LMsNuaBF51dYXPWZqsHEfUf3JropuHXC1rN9ovD3w",
  "key12": "yF6SpvAyoAHHqYzU11B8rCfCEmBE9S5GhHyK55rBzc4UvrwzgbEwqAfaQhu3gGb9p2p7RRpS3noipq8Nx1LYBSp",
  "key13": "2CEvsPugjyDzAwhHkeKcF5EejHnYHAhLv9q18C86ZEeviqPcUDuo4b7aRAhbi3RKqAwSwx6nfkT7sDuy7EBvbdeT",
  "key14": "xzK45g2UVvSyidWa2YUj8zaafS56AqmV3G2ZP3tMPp2Q1VguF9HVYJpDEdRKheR1vLEqG886HbyU2F5DYPpgvRm",
  "key15": "2oQHRGy1miHukRJWF2m3q9YMamVXcWtx2RBA7xV8iUPT73uEjMmNYvLtSHfdViwVtvSnLqN5KvxThhjHQgwFZLio",
  "key16": "ens1hsXwn3AbxtLqv92w6qVrfmtKHsjjWnq3iu16cjzfAH2RZJEm7ASm4SXfANjvv3sC8FtpYir4UZ1pu8o2iy6",
  "key17": "fryY54KgL2NziDL88FrgJi7UMZUkHYiLBMgxeoj7NrE5RLHqA9P3XEzXZzHR7yM6aNS8iq6XBDeKcwY5uQm5wGF",
  "key18": "4r9adRWuCDJAEASDB39C8GKoTAJvFd4JCnBKvhcQeEcQ2wWj7xoconap2EaPMEWPpdJo8ntNsvrHxZyFkZMeYoBc",
  "key19": "5ZZeFt3Hw1jYtjoDKYbSH1LUr3cyCyhMKqbZYtneVbSRE9fMu71S3sB5XJNtL9EzTtTrFRzy4xjdexQaRTUmx3iT",
  "key20": "5wohCNPWGdxQFFX9NQZatnAfuqej34cEwHfK64d9MHjEvUevnfZ9mS3HEGwiuuPyqZKe9W2GWdYfSGgnb9yLigF8",
  "key21": "5BsL75WjzYLwwj1r86LeVVGoTU1SDchSptfJEdY2XybDdgGxSCmFqzR1mKypvr9MFF6feP41XPzhvcZYeLnwWs66",
  "key22": "4FidT81U2SkpUjJCA8PA5csV756QiFTM11VVeqmuuxxDroKW14yBos5XKPMGc9ujTKff2djVkLtwZH1pS5L4EKt",
  "key23": "41asHV8hqiVCKxCBwH2UgRSPQEyy7tZUSCNtwqgwe5ypF6tisK67u4YFtWLUj2Y7Fx8gQQoh8gy7RqphgzddUVc7",
  "key24": "4PwhgxAMLu1MsfX3fguAPnMUaBDr7bXGAHKEphSAxVE2styZwth4vPmfQwj659U5yDzZh9tGCuxmTe8GWAc948FU",
  "key25": "j2HRjkx29SC7j2LcXNy7cNv8c3WgnrYbPF8B5ZZeyuKo71oJ81uyiiFTnTw8FopcJUMQ4hWdA8D4iZQ9YFTtf7v",
  "key26": "hzonL4zZBjyb6DrEjNoZe73C2JTQ3Yof1FCgwzh62uMFCvCvgtRQ7Zbxc5h9jz9FL9axYpSk8XEuybfgYMkp25M",
  "key27": "5iJHuwVvkMNMaYBJxk71dRHrb9pofbkaxcyq5pGYfXur8MnDDSNTC17Lw9U8xxd3knH4i9RPvuTzyfrhwXQsumb4",
  "key28": "2ERpHan6EGpM1BrA3EZe9epAeKA7ALXfwTBDDFErJGBeuMFZd2FXuZF3MhcBnqg3d2yiHuekyoWaPF4WoqDwR3S7",
  "key29": "37CLRJsV2LYQ7Wcg5cApAvC5ZhB3NgoGrzJHVqV6UAC1vyqVLzgqHedG2ki2g86fX4diU9Mqpe9QUgm2S8qM4wYt",
  "key30": "5JpaF9nq41J25S7Fp7NjdEtwqwNXokEWKC4Vx7rryHyK1KmxNDnEPTkJfD3gEDveW1eTTqnXUzofqrbDTwQHHzcF",
  "key31": "5VvGSvwtMY1TQ5pJHJJcQQUrozzCt55Wthxi46AsYYXX5fmJjVVbphHGjdBJe6MobNbfT246kmuqYxBdCbqXYXWf",
  "key32": "93PogANMkTuzm4r5ra56hvNNturK8zbPTk7hTYhQZaSRFxZjiPevxAeW9uLkJuPp3tRyKKiA9D4BCtKxdHACdXz",
  "key33": "3qAwEfZ1qfW388JBQWZQ6oDsJRHVA8p3kvTZSA3xLkNzNNxH1oczFMLSDU1a3HBuWPUpovPRDZkHWGCfHpyvzToS",
  "key34": "4bHGGKhLdkLpAZGFkwky7MJgQsv2w3pTgFcE7kHbuJvqjw94xEiqhKLtCWDrTeYTwKp1UHC3EvCzwz7MvaitqNgi",
  "key35": "5ndEt2pUcrw1yw73WUvYqxkabRzxRkgrkqLQR5BWXeovpCeXAB5vB9RZ2kuEWHd8aFyC3tv36ep3SxCZzVwpmPbq",
  "key36": "2xp6dBPkqmcvwb958vBfHmjacSoYk1Dcc8uiV7aMEvgHxHraX9L65ZF3ERRcXg9hCMV7EhSakB1oeKkbnTv5rzEt"
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
