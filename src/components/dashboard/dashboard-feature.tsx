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
    "3kA9wACVGm6K6nHKj8UUghTYTiHPup1cKPikj9GmemnoJFUtAU4KLGbfQZnmFrokEUaxr4PrAtQFyYnNcoER3xZi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pdEM9N1GguMTmzcQR45mqrexzv2VcgMZgHaapxuP6tgx2KdCtAfG2Y48Lhp5US6FKwgLBax1fKyrBj2kg2xxz5b",
  "key1": "2nkkDW6K5Ms7w1eLF6sz7uGjC19nwV1JAvjqS27tFNraV3XCRAuzvX8FFSVM1rexHwLVKnbrPv98yjKECE5yJgCV",
  "key2": "61LxDy3jRWgAnAMbEqPnAJRj5desmL69Kp3gRHzymes67VhZdSNmLZh8V713eHD8qsF8MnVsinv8nxEUmomiLbUf",
  "key3": "3MwmQyPCKFcSEcjR9xKCukBU9zycrJiRj5oBwqwk5WqsqP3GRtXybvV7HivSWJNvQrKCAdLqNsqzNqCEMs584g9k",
  "key4": "42wzWL6AHBsSNUqvZsY35Hmh8P3adWUSoiGDrJibAQEtfYeiJxVuhu317vbBpMgdAknjGfcd9JuHFdomkaSc2qAh",
  "key5": "5KkpTR7RTBKt8JGAS9xgd9jFXhRCjrigXWa37RNmdd9yFMPcvnTYBhd64ihponwNHLa36cMsttuim4FfKPHHpSbB",
  "key6": "65W2Np7d9ffEHyznujjshmcUfLsGBqgsnQ3jKMaPkLQ5jfF3vkwL3YPBEn4ape541e6i62WLB4AP2YzcYBfTHs6A",
  "key7": "2xdBMj75JFcg4UStzvaMcgiwh832t9XjjduPPgEG34G9zssNxEwssUmrf8agjtBhdW4QMshU7fNFQcLgLjeW4ZyY",
  "key8": "4g5wcYwDnYDVhyf9S3BD9tAD4EEHJ7DCMVxCtz2CHbaffTFXE3oQLhJTtBjzJ3QnB6Bq387wRchc6ECYYJfa5Uv3",
  "key9": "3L5GyhpxDfmETrjAogaizsu3QqmJWZgu45oETB5S8jTv5uqjhcBkxfDrdjC7HawvyzbEa6G3vAzqiqiubTmJvkiv",
  "key10": "3XV1QKV2P79KnasBe6k8JNasRFASi5rYzuMFsrdsfrQppzYToES7mFLDQH6m3EpjEitgLUQhQJgR9z5EZYM66ibs",
  "key11": "2iS7GJc81CUjNY3CMD6GNpiDKhSSrUNBbjn5VuZ8oEGpBBpnfLvaLk8KHNzaZo8hyRH7yyxpPp2N3iC21aT3P316",
  "key12": "m46kTG2Jr9qZDHj91TGoacAhNo8xkJxsaQjcpCe4De7dEQAZZxdHXXNpdN8wYo5UecKGM3ojyNy3GTeDSgNAwL1",
  "key13": "3NdhQJoaVGx5xNqbwRonPrCw8T1kBgXjobX2p9TznpjTezxQ3E79xzdgQgrMnC2NU6tnoYcc78R8vhFkHQfatZgp",
  "key14": "5awVCDGsN1ggLTHykTrvckpttSswCbqAByzBXNJ4SNRQPCiPzwxamSEKGPTj3auVtBomEqbSUgttYWKDjJ5YRDGj",
  "key15": "5pomAUScpqKEoJF5fwTL2Ua6cJ5ZMY8T9EQvmXAt4TXWktNykuY8XNLBzuuVsjUr5yKHVvxKUDci1QJZKwpXcf8L",
  "key16": "4oq2jdTzFACyvxWWKSMVnxaH5U8B4F5uRVXrBG1tWoe1Ydd95ggnN6yrhKFkRutj8oNw1LReDoaR5ctKU9Eopgo2",
  "key17": "CnSgYsee9jHdWfdUjoL6pPnahcAD7CafRuSRA5BLq2cVWhABmbU1TNi7MW1UyGY8oAqhGFjGhEgHwXPhdjwJFey",
  "key18": "628k35x2NhuMrJJ59XuXNZyvoJdqCDy4TVaAhv5WDibweHoyF52fVp9ReEsdxPY9hRGgMyFrVN2fpzVQByAVdL1a",
  "key19": "3zQKbTNhWQEv9zgLpa4bfSMwDDrYaBPdMy3tpsti37yRFwVydewkpwu9uWB3UjeQopzn2dqErQYMTanAPeaghEsg",
  "key20": "pS3YukQxc4hfBcwu6KyQii9TjAZKuBZk5CqqPPPVnmEtDKGaUv7dWn4uBCou2HD4zoCtg3SL4UvQthCEtgTfWJD",
  "key21": "mnnxCRHwAG3QWUFo1K9oHr6XTiBjuYVyKRfpd4WuzcF4y1YZb8igtLmEYPkWgZT6ix2m2ccjYBLyCu4MPK5fdMA",
  "key22": "4ZRsmqZVqM89i9gkhRCJwWbgF8pAKyhsSXqYuPKVXhDhQjXCqWhxVGgfbkMov1y2cWJmDGtkQkB2DzrKZZKUGTWm",
  "key23": "23imqJvjVdHYA1he26y2BagbueTh9XxsLqAvwNwhs22QgQ7G4YD8CJsN1jQnKbCfDjXRN8CiigiAMEi4DJ6tmUiY",
  "key24": "5uESUyugknDNTCqTqFQ1oPDKdCkYj9iBGBnicJ95sLaiTVMKop123iVBdX8cetAeemjLRmANSN7ZV62f432HbKXP",
  "key25": "5pf5MzGLLgWZyDWfGmr94jLhLSWnTT4D7mfRp1cVu5ApYDVr7JXWLb8xWQKVCmwmGeTntiWShRFpbCGxmJTbMHDT",
  "key26": "3NCsFKHTiNGd9yjDjuFeGoQXvSytXgZ3iN6T7v4vKoYZXajzVjQhh5MzPhUjkPs1QS9imChsaqbgRDfxTqpcTUq",
  "key27": "dryVDLa5qfESW1oQdeSETxehzfc4m2spoAgN5Fuhz5wu1gy29dujH7b2odcZRrpvxwazry2e6cUp3i9oAXG9ggU",
  "key28": "57AWQ6uUz3Nm7yE9SqUBY6ibkfR4Y2VB6oZVqQeHXP9UREsXNqD3YQ6ATg7nTtjZti6NbVXL51Eue1wDFvETFmAz",
  "key29": "5GP7SYY1uDSN4SZeFEdvpHb3Z8YhweSrnd6cV8uQtYi3HcRMXqCJAWSiVMa5r9RLoAaXkbvvveSw5kEW3aboUH3z",
  "key30": "4gMeVsfPwBKHwi6aJYBoP6xP4ZTGAUzALoMS2fmw6rugwRAGDyaiQyjV2WPvZvCKQWLfF13K1mUZu8WVxcSk8Q2x",
  "key31": "JEKCzN9mE6JEa5JUT9utbgjXxUmcTXf3otzYue1AEZmummsN5dGVenLxckoQnYeVPAdUZbNx4etfJJHjGyNZmFP",
  "key32": "4z2QyDJgHnSLDo3f3jJ7VNWak6nrM9M3k379sZ8HHmNgt8fa4cForTZMH2NhkLCSF33dpKygx4smb4unMvY8tE5K",
  "key33": "4MxE3ScrtJXgYCKuHATDnrbUgy5x486J2csddNnDtjRCFAGoEdtbMEcfWDZw75W5EpphQdr4fa6xxfN4ecjpft3j",
  "key34": "qPZr1gag8R96WW9Juj8vX1cjXtgmsHbaHGqjjjE4mdbHeADmYB7TcyVuVhPr6GGaxabeL5S6LV9bNdnKxCStPQZ",
  "key35": "2ekh7388VwjCigbCPkQMkCX4nR2bUrMokrqykeMJLwqEDZbFXV8yEriL5z2wWFYUq4Xo38BUpwcVJqq9r5w8QZGJ",
  "key36": "5m2eF1Vf27vp59sWV8Dfq6xQ4pbpkJeSg6SUiPYMrrNoj8wVmyTXByAM9CcZ65xGKbVKyeQytnRbHWuk7yKNzW7M",
  "key37": "2ngCPJMdgvMcVtvYTaTWinUq51dLAJVLvg65kPPWSAZU8cmn36nJVRtVq2ahwbMmQdUMLWwFVJ4Pwx5wyH6Exs4w",
  "key38": "2EPnz63w3jHdi4ahdP99u9ZjLpdqycxq6eSbvEA3nY7YYQRFhAuzF2wfbGD8evKbEgE2PKLWVHRWa6GvEg7y4Pac",
  "key39": "2SBWET838uLQRSkK1rRHczZbv3zED6ZMbN5EmxX75cMjkhQ7KnFXoGok6DiEyWzrofoDuXU6eEfRNraiyStRAm9V",
  "key40": "2jzvtF4b1k2zn1GngcoKFnGUqtmdzdPfAP5rZzMdiPzhaok4MbavLsfCgUzC8Ex3K54U4XC62w3StvptiX5oFxBc",
  "key41": "T9JMoLk6UkCpGTHazk7skUEmbqsLgXszrzyFWUNo1CxDfxqLF6e3ACxWxQb1BBHGrbjk5fcTTYmRyfzqcrZW7GG",
  "key42": "54QwDSVT1xZSrV1sF5XYhAdJMjVNmzCuoL5eLDfmsvncPdQKyUB3EmvVQTWmRm7ctbpFLtk45JuRPVRuiZsfz587",
  "key43": "5rafLQEFVG5Jmpuy7X5h4RQW44PRs9Mxe9hCkKSjioAGse3gRSQJqmCzCDdfXJfNwQbvCxapYFZabu8Z4ijK22CJ",
  "key44": "46DGzqmxWcFdCmB7hdrHgr1EZa12j93SVtEvpaHTvBXjsqLdVeai6CWwAqRWfZFzqrBWNnQHo3fCsBq41KQF1JBx"
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
