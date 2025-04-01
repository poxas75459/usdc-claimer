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
    "3ZvrSz836GqwZGdxGKHjswEAQXL7k786FtSfc4UXBhu2pziEy9fnZD6hZJ9639en1GGVvgyk8Ns3T2Fe7D5PQezC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BqPeX2daygJKB8gnLTYobNVU8gEpMoywpEpia5hx2i22Gt55nNS3oQ26sgT1Q3vtcetLtdvUSi5kDQU637oZiRW",
  "key1": "5MvGRcrULwsn43n3ePGLPTLAfPrwfcscALsQQEC13ZEmQbaYZreV4qMztf6miskFvisvCfPucUAjRjZjYreHP6Ev",
  "key2": "2cvXsCLuq23At3SnH1NEyrWFCAq9FjQHxUEZTWAswcatYvG8Qj96NyZBhGyzyYknFhWa3zfz9JHgo8FM4jJwfiMP",
  "key3": "4QSuG4N8ewn4txwDFho3EEA25ryR9asFjh1ujSJ2PZ2QNHp5ajRj2JPmvKRozmKACEdWMX2ZBTacPWNa2hhjTyuA",
  "key4": "2iDGD99MZTutCnn7c5fBFzv5YjD3WjJKWtBJh3bXgJ4iP2JVcXpQcK77g4JszssN9K8YxAL1JkSQXN23DBvhthWf",
  "key5": "3vEzXCCdqWCeMZKoprj1M5ctqi3nzUmzuaayQe6cgXNHPU8RmqQppsdb8Rbp2viBDPNgZFc7sjx3efKR3AVDH8eC",
  "key6": "3unLhh7gx7BC5nye4YjatK4MiHNp2dLyy5835MNP56y4ZzLxzHxonm8Fhe95qMV4YqGMtZ8MKyZwkExYUxCYvqvz",
  "key7": "5K3AkuafHZJ1pyfFx1NotCs4d33gzPLKzFusx1V4L29NVZz6NwRKiwZ93YGZ6SR4PkGWNfwhWj1kMmkGs6HLye7G",
  "key8": "3Ymcs6uVrtzhFsQJGd6PxqCdEKviuLhPpxKaA6GwW35CVwV1WEQJ8QC5b6makur2QLm653BsKwTSnzcYE7kpHnb8",
  "key9": "52cznn5nNgXLPspFANN78i9nPeJTPksNcmTx9RDp8ebKQU7NwPTwTeQiHcdWr55TBs912WQLD1EZhC5bMFwTd1P5",
  "key10": "4fmbkjxDA1hik8NdktyL6rXQ3NxKNX2bCzstF3EmfRE3Zb3dErdLVGMx4Ufj4yoAcF7X5EjtVZj63A9EuXsV44RR",
  "key11": "4kgjXw3kz1q1bS7WjRC5KMFho6Dp86NdBHNM55Nawqzuy3DfgzgEm1TGiwVR2RLHWdkiEZAMr9BbwFL9xtaPxUW8",
  "key12": "4QED9jLnZSTBcq9FCtAANY5MGSY22zwjWtuKEaVcKoVx7SPrr6yryT6vb4421tqETLwMhQDFis4WDWXSmHzzNSjD",
  "key13": "2SLwUSXqEgQyvppbV3gomHdTXgttCe3xmUYRCqVNpfmn5FiQMXWdtTjUCBqW21JCpyoH3LLNXnFfALLziyq999K9",
  "key14": "3BtDgUVNUp9KaPcukc3MrHzG7MqoKnBjQHsyD4d7rTva3mWZkjdwexc1nQnJ9Mkkz4q6ZsBEWuHYEK2JP26atFfy",
  "key15": "3bcMJR2cQQdakbRRcq2eRpuF7Uoy3nWtk9eThdv3eZF7WYUR7MV7QnLHhnL9DSvqKvGkGNtg77bCFSEAeUt6itqt",
  "key16": "5of97FgcYGEUYHWJwY2ZPy7jzdTtADCamPJNKyi4zemxM26QctGGCfFGonG3cjVaSEMAYDBAqEsdxGhHfe7Ts4UQ",
  "key17": "5bzbs56m4LrBPXbfPrWVzqxmqrWQtg3Q715936wwZEt2VZyiqjLSVnHNbeKSFzww4VJxnd139dgXrMpBz9xJFRVZ",
  "key18": "5HUFENLizrxFQ4rd4bzoUYrbDWGJkXRrz3RKHU8rRKY6BRHotTvLZGYAVZmatP5u3QU14b2eDzU2YjTLE4Wy9HcY",
  "key19": "5ceejCjrm1GM5UppGkYwDEbyW4BUayzSXfsmyqkMu6nyxe5GV8GkcYQPhpHisQhCue2pgbdyXFqfJ4WUoFN9Hqjg",
  "key20": "4q5tUTJELLkABCPJRE731u5ze4SRLjtbMwd4JF8tftKCwMNd3Z4JuD75owvfhMd6hMeDwCCf7WbPkKMrd4pMw34N",
  "key21": "RTTrXyB7joY3J12kM8J5qoPPDZ62LJxCjnsYbcWBEgTRTt7nApZbkHxFzbcQPpMTDGeFAQBoeyaD5szeN6cWnH8",
  "key22": "3vRWpzxyqJx5khEDFZpyWteiadkXqbogyeXhFmFL5XiJnDBEgGPGSrkxJNEXz7z5LEdgxcdMpP7cLvKXh191MQfs",
  "key23": "3i8SJchsZzvY5rsKXdggSuFJb3s7zaszLqYce98NLf39S4qnsjcTprFYZ4d3aav8RCvdWF1b3XAWsZMYFfr7Xquz",
  "key24": "5UHW3cz4apiaWwkx4osPcifAmWt2CDgsmQRiXPio77cJfDDn8zvbmTBCgNeQSsJWarVVX6jcUhp5uYJQV1GXRupS",
  "key25": "5UTWwL7jR4WTATTHpL6DaMUdFuntJjBJqpEMH17geC2bG5ZJvGNVjyMmNVyKKszFENd6HMEzXZQfkfiBXF9d5pSw",
  "key26": "2gpHDust3ciGCCZCjC7oUmzkof2GCwPwWi8pj2FxRuTcAeppi8HxEbakDxiMZTqs9rXf7QJ46doUojhf9ZLiruU6",
  "key27": "2p465t2PugS5XM8V3Cv2NWAcZw3f5GY92QqMARHKMtwQAnFiz9qKS92Zhd9wBa1nFBd6B44E7gi7ACFckaCLyXPa",
  "key28": "5pfb98Zf6vkM8BmT27PThybh1Cr4ZiJgz5idENHrVNRTzYjBjseSXT2Sby8fAdg5XqxDaw1WwRSayvCwWhuYXu42",
  "key29": "3rmFta6EYs4khArRBcrBWNGRcHt2RoUwVTbC9qKUVSyMBd5GB65kKpbnmvP7ip2ySip6q7ToaLK3utvwVfRNtMyZ",
  "key30": "2z6SXTVE9MdB6SLcwNfy9tUZcj8TwNbHHsYhnSuaSDNUQouZZNs9nChphHzQaWNg94hgs53o9CubsGcoNEsPz3Le",
  "key31": "665dGgM1sUzCUEmou6MUk1H7Qddopmtrr6ZCvGJVvCBidqwEqeSTXGLPbmHB23tmPNFrG4txskxUxE13nzuQvW7B",
  "key32": "ErsCCRPaoipbbQuxbrjXF73LiEReizy7qfmR9TYAnpizLSHK8hGxp9DcUwMF6ikGfKFCitnuguZ62STSVNLCejY",
  "key33": "2u7HL9NTdPHs6jsxDmj3KiVPB9k7vrpHd7ouWKvcZVNYRSAieLp95BuiTffeugy31PW5MKbiDXs9cprcF7W33osy",
  "key34": "5ey4FiKmDNbYfrQMmNNmZTf4FcnZUHBb8SFGCBX2HYjs6Pv4QsYJfXboBpMpRH5xA5USjUgjWgyf8fWWqrSyAB9E",
  "key35": "5XEWCkcTACVUHXTugvyfzv98kRnwD2v67NKTyzjrPV114fDnvJQz3Ndn28T6RrgtZVbQEtpHKFBQJvuyvqXY7D6d",
  "key36": "YmfqzNAA6e7v4Hpv1ecq1huowz2iYpR1Eur1ndJ5stDhHAmsYWNgnAPHnd3pLz4z8ZUpbjbjendRYsNW2sqteSN"
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
