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
    "55SLnG2bEaiVrNdrD9SmZpBhMCZojbnqe1je4K9GjyF5PTgseNdRYBqzRm87c5f7XfjyLb63WxwhJywMKxgoo9AA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zWncewvq6nSd3rwb1SMSE871xq5avztKo6AT5M7cEyAQHi2McuejSsi7kehhZjf1jM9ikaJBj5rd9KeSwbUB3kQ",
  "key1": "5XfHVC7tvFgwvUV4SMJerH2FeTULU7KbqJhhrxFCzPnirBZpgFiygNRQdLgME7kaqLs4sRLCLbbXWx6jWoS8QZhi",
  "key2": "33ofWyKw34wyLsPKPu8MLaYTM61nuEX3h4jruZ1BeyR8hXaiwA91Y8ddFiXUFC64FKAmfYT9oyK1tTvAkoQZPwLG",
  "key3": "4BQemrLCVfDt5z5b9sU5z3cuQsUAZUYkpxgXeqJkUQRzxtdhHhb9ou46owC5TKx5J97xsLPrwmqnb9Ak5XxT6o7s",
  "key4": "4bxe69FY7YWaXoCo65FpmAJC7eyC7mYRDMCeMkjvLi76rGjBMZ7sRqQ88w9DqoB7AqamdvfDYuWHNkCwNm3M2YG1",
  "key5": "5WeWy5yZyamdLHEgrstRo1ae6SS1rhYup3789XDnhN2beEFcLWHp93UJ7F1xnerLiZ7A4tWMyagQCbmgAVhfLy2",
  "key6": "4RNNwgMVqqcp2a2s5VDs86xTNwsarkeR5ibm7sKhJkTEjs9PmKG239rCuJwTCEwcpgRgJgrDtR5uxWD6DXuNLGFt",
  "key7": "2pyRqhHmbtcCvhx3jPXSTEisvz2HtipJ5ZMVjPMgRQaSQUoJ3ofVVnogx9osTwYkm8kXWvdiRPucKW6jUikC7jMC",
  "key8": "taSuqCRrjr49M4AXu5Yg7vmbaiVKMa1NVLC7pEVtyh3v2j5VSXmyoRBSndtbWDJ7MTxbNGcMqVjihPxtKkEMkCq",
  "key9": "5mCfnZqxPcPqQnbYgEPuWmzhUpmN62nyxUmSUhxbQqRWs9xjzJ2nmmBwJaov1xa7BUNWag1jdNJhTCY69oGo9UYa",
  "key10": "5Zpx6Xp2CKYa4gM1jY6Qhh9j8oZeLvx4AnPvC17YEKvybb7DqRdbWvBCfCbwagzaYYuiPA5H7L2jyMfAtjJnVnQX",
  "key11": "5sNDQThFscVMKojWRxjBpSJi71u8uKAV4Ar6PmT3uhAkB5rWajXLHDTmksKdVxMBcg8kWH4vjLqNQCQrm8CrHXhj",
  "key12": "22bqiu9pZpA8dNaACN59CT4ED8ySFFpd86F6oC91Ekq1B4LKvvej9t8sFrEkifmUV9GhgTu1qCjuaKPCWeSarwXp",
  "key13": "5YCdEVGMBBGa7p7aGpC2yoYpQGw5tqM3owBMxZJVu4QNqR7nL4nyY2nuKW8bg5A8LMw81hZP1MHjyMaWWVEgW7zr",
  "key14": "3KeBHGUqaTDoJU924ZEM2Yrv29aw4ZuXzSLMJQjG2tgg2CxUmDD3WrfN2P49V5urUdPdCarGChJwEJQVYmjqiV3n",
  "key15": "5nUydGfEZCG6bP3VuawuZwRUKDvDUB47KtbHBVQq7sSigBfvwBJoz59xTbZWBy3XibWQ6Gx6BGF7qRXKkXVVXzh5",
  "key16": "4ACtTChe21aoAJiF82LZd6acvEoNgZbQhnC3bK8BJzJ6gfWKtPTRWm4TNv7vLT28MhcDBznGz8KVucGkLaxWMXmJ",
  "key17": "3r6MWananNzF8eEvoRtEjHvmr5bx31Amw7gHYaCXpLAjPj6TWBKXRAeSxoxaaLvm5w4sk7wKRaceCpmZuEXcr7KL",
  "key18": "5cUmDBxf2XQT1WrA9u2BC9RrdXHNDwuH4MrKG3hWVAssmTdK7nqAY2kwQEBuCxY87ctn4zsdo2Q9jZpgpmyNgZJJ",
  "key19": "6eHyFV9MUXeE6Nft8ULbBGVC2mg3eom8a5ZZJttxeMDk6JdtdMk3cYJVW8kEp5bMwiQRvr8ibNpKPUGpAji6tkx",
  "key20": "5fTbNuxyhnXpTcKRc5T6wK11DdTbqVcx73T7kcFLk8UPV2y5js5LGZj1qWmrzXv7A1LNnhzkDwMkPf8ZoDYtL367",
  "key21": "3Q6Ht9fKSsuhiK1kxRA1njH4e5FepXRkq9DQtx3bxGMP5YKzGY1JcYeBwBz8YUUKFT5wt8cYWPv9kQkKhSaP4byG",
  "key22": "5sftwBsvHQc6BdB8xWYUrSRfSKys3kFZs9qptcz6GkSs6y3XxxDLV6xuKhZEGBdamZRyfMnocdB5gzo5WPymxWed",
  "key23": "4Wgws2PLy45VkJTBZ287C6oMohd8Wkq7bP1QTv7UKgjtKaesQkYGhE4aKAtNKy3PRRW9T6Jupd62M1kYwARSsxA1",
  "key24": "2v4T9szZgJNNvQNdaok5TFLpj6BwaGPBknW51YLxx6cCV1VZeYfoLNd3UN9VYUGunUufbxEEKo8N5RK3outmLSti",
  "key25": "3zSbv4Vwo7vM3vQBAVuPpwzTwS5uWokj1hyEr6w3E7DnZ7eLYn7y4jnehHrns2WLqC2dA4E9vWAJCZsCDpQUyRXT",
  "key26": "3v6ZbQabo4M8gTPGg25njnXzQcpDyVdfnMvbsjsgVdiBuaEYCgSpt9yhJJsrL9qbfQbEy1UC2KBmoZ6HiQRDvvu7",
  "key27": "2yQNnrQtm1VgKEW3NH93ymJw28CtpQz6dNqV8S1VqJfGKwoi6aGpmDWV2Q4mqyp9vauW52FVFWrNExnyPCRDD1Gh",
  "key28": "2CQdm7WnJ4yjy84pgfw7sPFEDH8DkFcWoEmJ5T5cBcg9RTRbeEdankM1hR6LtZyZz7qGSpWmRkVKsiFd4NhvpCP4",
  "key29": "5BrFtYb1ao5i8BSBt8jDenYKvKBd1VPzExA3fZjfRK23t9xR21UudiVau982J3NBErjXiqxdDv8UwKLtWuZp8dX",
  "key30": "2eEAXeQrAWyh9rcAafgb6T6GYEJ2UDyqouM1oHu4yG3AWYtJC5VqGJTSUqvraL5xM2ZNAsDRbFCVjYvA1D6x1ueQ",
  "key31": "5mHS2hyuEBXkSoPWqjrhbLFVV1rCc3GHifhpioyWJ6MypSK9gxCxE7tF83xDJaQVF652SSR7HfAr49RCLv1WU5an",
  "key32": "4UrmaFof5tGyF5cc6xWcVUCKxBcBdP7ztBXMiUL4rhmA2BsGiLe5i1Jgc1VPXqjtLow6H4ZNMFtZ2da35CVwG8x7",
  "key33": "46aCXww4qmo8fjjn1XeFtoMDtsJzC6sNNeU4zMkLKgBjd6yM3h2EqPZhmFafTJDsNwBSpuEr6wGuBTduDjVpNuwa",
  "key34": "28urZHuD3DEfgVyXDjU9nHWZH2ZoG6Py3S8VKNC5UBVewHvE8P5u9osucjALHrqDR9ZpeHCNJgdantVAptJ9JBrD",
  "key35": "2Zos8zfbz34XgKd7VDBGoxnC2x294JhTUy9DvHcEM9i9vDpw1VfnpzZn3uq9nT4krwUomWm9Yf9TvWfGy7Qhazfw",
  "key36": "WszTDkSwoRj48xu4wMeyGgUsEpb2yC3cqaHPCX9nEWkh4r1UuCbQn4ZH3to2ozbjQMAzSwnXW2LQu6cJFKEfsK7",
  "key37": "4KMg8HGGErgmeuNUGQprVCq8MR48gVrBd48egji3ikpzugttMtasLpdBMc97pCe3YKP51zukn3Px2nxhvQApdWHr",
  "key38": "2zaqYC4x3BP36R2JMF9sEt8VKkTu6iKcEtaxkbGZgF55X6gX5egHgCjUPn2wAy7dbV6QqPTS6yZ8fTeBRNZFBCNh",
  "key39": "5vashn9PMoCamfvnbcZnJafuMD3wBRZQUX4BxgMdCBGLyjqjQX6zWptujmsCAyvaDsVe5N5NWZB3MwWvdriRKyur",
  "key40": "5novXi3QAMxwxFKAis7sSTNNEi92hufsgtNw7az1HTYeXhHxtTadkJUzsTeT7pVYHt9CZ9f4ffdmBYNeRQ2zBHrb",
  "key41": "uiDdh5RvcjaVDgFuz3hFM9y9LriWr9E4k7xpZw9T6YvG7sxmqwgmhxDEUPsEScoLasdQ7zcSwe4DVgski4yzML6",
  "key42": "XskggnNPgdTpJ7GoEfkAXmh2pNpF44xNckaNWDdGEgqeiJvjjXKgFY6HmGGpzmPT3h4NtcNLwLX1UurTvxA9LkN",
  "key43": "5pTDsCM3rQCVGN6mTL63Vsy2NmNH9pBQKtHCDAVQQ1V8fv1Y3AWYxtw1BaPepVFLfojWrzwmvqmew4dbRAUqBjfA",
  "key44": "56H3tCvAkjGv1ZWT8TgMpxvbBK2KD9HKXNwr6U8LEm8EoZqUL3gS812BH8fZ3ekP4cChMd3hMXrbgUXLVtJSBzHt",
  "key45": "4w7ux7ombmZVVP5bwvk9u3W4FS42aFoLZoGEwuM7nSavGrQcAAyoSMfQkCveGrjpaYaKi3kTTMhU9BFAwZ7YQkuV",
  "key46": "4aa8w7FjMcWH2Rwz68vjXELx5cYdxAj6ichHvRH3raPkRgjutB6ib1b87oi4HYWxGTsqWavFFY7WfJ3SjKUoP5c9"
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
