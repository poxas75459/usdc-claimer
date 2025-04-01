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
    "5fZnkLH7T8bj5qJyg9b7MSaZqxLv6ZnXS79xa8h4ACXBWUtL97Az66o9XvkYFPLy5kmzarEoWmQVchk1w8ajSwX8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EUcxZ9y61MhTqbKcAueYtJAjAPzJJmFmM3LNbRPh4YxnjGudFKZbVsafyFPEgtaCYC8dS94NQrpDrZHRnUjdBpu",
  "key1": "2QXg8hnRrRLKRGgs3kNzDoRcW5vPH8HhQixNbdDFf9a6F6FUQ5Fhe7vafDy3SREMHPiSbMxmJZNtkQThras4LYi8",
  "key2": "2FLEMnEfsyYd4cMRnN5DRFZwsb9bD8rgwMpyxp1RajkcAvfiZDF54WzD2xsx3GNHLkpbLugjqTt2r356Q9VSmgNf",
  "key3": "2rvZDcBdGaCzT7nAKqGAxzGRyj4jPYsQcmEUTxyPsbWXDYCKhSf8RCbeGSzP68Lwo4f1vaEbEQz4DNjY35VjwCEr",
  "key4": "VD5ufMbGA6dDgY4Lw7LHnQAH8aLHspwGBha3tyXdwaMcpSJPP4ZX7iDGButUyb1fGY87AmCGfLVHJj5Lc9AJtAQ",
  "key5": "4mibXof2diqJRQDCHc3QdWNvFgNnxUTPaKukMB3u6bTbfdoJaaRztj5TfdMzvHCv4QGRrnub4Lyz7SxAEgNaPjFc",
  "key6": "38VUphorvqydnMZqH1rYz3KTpuVJQJ7cX3n2AwJ5v1fLCikTPYsPVPd19mkLSSCMGDBjD3d8oFUQG8o9GAwNcjy2",
  "key7": "43cZ4xLhGM2JhqpYhozECgzPkCrrJNVUY9TJoQ6d6ZLRz7jAMDyXPGXUJ4vZL38qGVRA2w5ufs1kP9z9mJioxfTt",
  "key8": "3Z16jfhRBHMBDVpHVbf7qDvSezBDbqh2VTYR5nAX1U2j9ZGxErenDq5LNCSeQapdVDLEtQA9FXfyqQq3G2m7nGpU",
  "key9": "2TLtkweqkARXfWoccqyLpPwZNXDJ1eBeZ9r4mWFQnrexiS1HLKTsfyDoUQXnSNH3toPSLGEDJx6HDbCsqTEn2iw1",
  "key10": "5P5eGczYb4bhSi9VFZ8RTVbvJxfUHfSfGrLzaCcS4waUbq3S9Xp2pvcEEHnxyKmJou5JaJWHDKjJ5uHTaY4uELHn",
  "key11": "JQYPTNruZWtn5HypQxUz9GC7fsK1V92AU5BsK3bafXCTCJCXqaMMBqgevPH7conBU2WTZd9FNNX61wneCkSfjbQ",
  "key12": "5g1W7JkLCryEJpVGvEKMzjVRyarLqkvUh9z7Qn2VLaELMQnfc6TRhBn55XN2wKGMW18NG6qpCgBgpkTAUVv3zx5z",
  "key13": "4J4EVPXm253nAquuGkXdJn3cTgRedkbHt6AcdxqgAewnnw8rn31pFfAy7kzmYxUX5afWinPHvHKVgLCF5s1BvBZh",
  "key14": "4jRHEDt8We5jVsdS4NUoGQJR3bS6EuR5Y7TJT8V6NUCTuHtqyPFHaVfpXEakvqr6GsQtH1yX277ig71rwbw3NNat",
  "key15": "4nD8NTWkAeeG45SAzS8nX6AZVMxbiWKKAsrAQF3F7VwmNqQnRJhf5nupHVzXiNcxfncW8NbET5HKL5qAt9N19FBA",
  "key16": "4hnZRjM3RupXnK5jRbMuzgptuaQjuJLQbY6SwCKyLfi9uAcXhnDGYa8tTiiFoBTtHUjdaBwXYeLE9WDXS34ycnHg",
  "key17": "JV81Co6cH7Ad5x14xrLDwTwke7dfsvmAXWm41p1reUPsvEKASTZiDAQ4TZ9cHaZx8MzLttbAfFFrKnFyExLGrg5",
  "key18": "4QjwCxQqWahDdiwzSkcdi9tuR3CAsmAnf6JFk7G6SB5BJEiZjgV8QECHvRKorFm78avCTizfKwtGiUtRwob73eyf",
  "key19": "62no73KmPheGErBkF52LQbPsuD8FytVpRChxX4eGfN12wzjJy9UBSnGDuMX5EzLQFqHRkmsxkn3Z9rXRHLWenp1H",
  "key20": "2cYGqnvX9KoiKTGUTnDs37e32bxYTWFWUGtBwL3LK1hqPF65FF2uv3Xx5Uc8iN7sK7oDst7U6ayVDvand8NGanRZ",
  "key21": "XSviWFpeEaitu6gYAMk8ZwVRB67Ly5BGajFrS5MCjRBkDELZNzXKX74TzPhwXav34vzGg9SVmpDpwCFeYUXMLTZ",
  "key22": "5bixePkMvBh96Ws5WRVhwur7Zi2VzAKwVoGqcPjbqAz2cefRWMeuXkSKmqQXoX9hCE3dSbpHWZ8Yg1HoTxPMe2jE",
  "key23": "4edUaUkkwaCp7tkjCmU8xCTo4oRdijFuHXNRZMYRSdg36qv5ZWpXRCcR1bkYJBHP7izMEwLCkFSdqdSGuf88LJsk",
  "key24": "3daDwZsBeXBoZQUynv55h6G5soAftKvK7tGiFvawV5JrvMSK6958Pt16wKSCUTHXJVQysMMjBU6tyVvTQ9ePMoZY",
  "key25": "4cpDkR8XzQWWbudo6ksSiJUr4KakLeyBfSty1SYsxBLS1hn9cQe251Y4SqR3yoZNP6suQb66qmRQS3UDm62xStSJ",
  "key26": "4XFwWt7B2mfQzE3gjtnWqFNZqhAwmGjThubt4z7KSwkPUkGvDou5SyHJcK61ANCqHCiH6e1wiRHdoNL8HE2GjbXA",
  "key27": "2v3Ei1ttprMQvLp6QuLFsPfPhgtNUgAq4Qsj5EjT3A1vysKuRzQz2hK6PDvhwQuNRZddrZxdMzy1L2b62PhNZAZm",
  "key28": "2LF9rcCZhpVy7GanD7t9H8MqaVdd8oYyG3C6nrVT5tf4UmiujwSBSBRQsiwUXGf14Wx12hcbHLyUKrfTHXMHw3iA",
  "key29": "2vAo2ekXqk4bRzw7GDK3vAWp3fd5YPxipYoudtihbqjdrocisZGkU7ozUYJu6rHjzagU5zQNCHshLHsr4Dugcz2c",
  "key30": "ZR4okuxtdz9dbj1TiZqFsX7e27gpynaB2yFj2fUwWBSDjSdVshE5kgVNiimi45GcGmQtr5uvVpQSidt4MtDuR9n",
  "key31": "2F1KMW3yJZkNCAfUGDFWykDYBxYxqQ7toKQonbavVB1yjwDNB3Ca3QpepHRe5sA9VT8d6TcSYBWbNfPFduEVKwP2",
  "key32": "4D4D9Aa5PUZW9r4Bx63vxKjrASRyZS6nTzh5UN4VbSnmLBGHJ6hTAAEu6Tz4xiYpupGBCfTSb6xhnGpbStmonbv6",
  "key33": "ZiJraMC5achbRwgX6w2oJM2KUdSqkotpUz4XKqsMy4F74odDU9zoUgVLipd3WEn5vt8mAw9SozC9PjafLFyvx4f",
  "key34": "3s4VX5wvNTVTjnFkrEsTBr7mWTWmCmS6DxrVqtFueJ7eFMakMsgpMabMoWNKdTQvXAs6PwwTzBhpqwEAX4bCHC32"
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
