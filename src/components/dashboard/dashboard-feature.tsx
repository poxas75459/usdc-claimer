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
    "22ALYdHtrYLkBH2J5R4uNhkYvUvtQrRZq6zFQAoQEtsa6xsD7AZKsTHo2K4eUScJBJrXqsmQ17U6goHjRKBPyWe4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "343sdJDUvGpTcCdphRhhGdHZMHcJRMAETdfikYXb5569RLyEoCR122i9nNibXSCRw3hMTECpVUMzuUz6DuFCQz6r",
  "key1": "2u1rm9dQraKj9ewCPVM1zeinQEYyTudkU7Ed74mkt4WuHxGwtNHjuVrUE2XCPFD3wXSs5HczhNw42NcCakoR79nX",
  "key2": "2BApqJ7wo7V1NsUXqfaShuzs7RKozu2GwvQX77ZhpnomkmCVV15HBrqmNB6ZEis5G1e7m9XGqiowhwme72B58dRv",
  "key3": "4DRaCKDWFPJUmGCDbCCaCGcCUqLtdWMknTK5XAecQWqrvkZrCva6wedCAFH1eZozNL6oer7372oDD89YRVt8eimE",
  "key4": "2fqbKSwnhhjLqTnvsNXdLhcJneTCgNxnzfTcgXTwGorvJeMK8j3HGX8WwDHnw21B4e9rVDpiX6ZZtqJ5Zz81VDCa",
  "key5": "5mBKyuhD92YftuX1t4EwWA1Mo7dXNKHHGHsMriCxpHW7ASR2CRupDQN2KPN4zMwnrWmyMVo7cGvVRJFxmMwRb6MS",
  "key6": "4hkRBDu1sJAogvVreksyrbS4TV3zzv21kKwPYRhjapstqxxrYi1YnBGcs43AiWu7G4M8UGVz2LBUQsgoNQAq15wA",
  "key7": "6514CFqTKbEoWCtTRgUxubb9uU91iNXTgVDxvqA6j5Mm25ccwCxg16DbuZwY3eKYEDXr2kSYZAd5cDrbZe2cAQKh",
  "key8": "ZJYKn84TrJPQfY8tGxqnsjLM74zhHYazjNbxCPhwsHaQEvWrmg2SP3EYPgbpvYjzpPBQdy7g6CkKhw6S634ZRZ4",
  "key9": "h6HJcuCe1FSXyUvy1SMDU3pPBSvBw9mftnJ6Vvt3uuVft5cH3gtzPSyySamzoe7ssw167LCFE14zUMErBJQuQhx",
  "key10": "5TdzF1SuUJRwKuGyjtjcWT9vEwouf8LSh3gH2ufUh4gZBCQdVUTeCvENcs9g8pVvmdETBi95McdKUoZsqgs9Bovs",
  "key11": "L3ZzQr9wZK3BzcetZRsxqKzWzCMMhQiNkTwSTLPAXWiZQzPrnaaZS5Ken6VYpw1ReoLkKP9DyDHvXEXxRqvYgEf",
  "key12": "2cDqHFdnoym9ivH6KSCGZuE8t6Euno2NGwNJBRSG8XbTWpXeN6RTcY3pg9adiV9C5gdNxswMFJLn8jNbgwqUXYuS",
  "key13": "5zCPtTmMg75puu4PLKg1TkWMBEYuZk4G3Tz6tVK5EKbofGes6cVffswDaa5u7XphrjcFSRCsJ3mEv4UkgkJwz9iz",
  "key14": "2XjGjQK8qkLg8dMDu8UoBkR2G7NizXDfbmaqZRo2GuNDWzBEzyzSz2yhLLDZ3HqtwKoA1349JJGUptsMKNYHJXLU",
  "key15": "5vT7gCdUjgdmdA83E56mhaLUTBbLT8h3XNCf4YKCicS9SzLt1faGLoBu6V6kgTCoLsFq9JMpS53LmnjNYVnAoNmR",
  "key16": "gdQxE1jfLN3pZwQuGXgy7QvnsQ7ZSjo3iRfmiCNfHqosXw74m6RxMgpopEpvztiFtMkmqPDQRDupWL2cQyq6jZa",
  "key17": "5jK6yVzaJn1f6v3Bh5rXgi2sWaLN5cpfJYUdjbFRuhJh1ja5G31M5mUvJsmEyfQhkY41wc8iTPTQKdyNsjwN3NYA",
  "key18": "4jy9z4CLfip2y7VidSfcdGGieiK4k2Teges9mh74eatnnnKFfhjAHYe2YZfE61s9buGEza9nSKFtA8nh6Wu1zFWR",
  "key19": "3YXyjALhKYBCtRoddrzG9uFr5CjtGQ2cCqs1T4nisNR17LQCfPYw2Kt5p6mSikaCkMqAG4j6PpWYR7Le3QJymDnB",
  "key20": "2vmXdRXXt1p67wiRRib9p5VHg1tyiWvdkLZAZiE6zH6e48hLSqjhBv5Hk1B5GMrEB9HjYsJHkxjm6QC6s6HGWnrU",
  "key21": "5XjXqHSUFbWLkyCU8715JCzNr1mZZhAZJTB6Wo1hR1VQWxUHrE9HnoXaEByHVRWPi7sMvg7t86dv88AQPQMSebnJ",
  "key22": "zoB6GBQGt82egAML8vk48EStMGoRmxKEWy9CGmYTHCgFyjYy6EyhpmLPn4tkPcqpRK1eyrJQxdayjVFPUm8nmBi",
  "key23": "4bc6zcmgZ55MWn5vpxNVGiUA1XgJjyyBZhKVxesPnpwyx9ErxcMYQkwXXtLbPmaibtVYGVoqSDF6LaMYxwsdPWnN",
  "key24": "4GeQfrFrMKGap2BQPyDozskoZX7cWCPReK9MzJmC15RdaQMCFPqQVpF3qH6RMpGsYKmaK63NLZZ1BMur2pjY9RnN",
  "key25": "2QqyprdmPQNAvo8z9CgMvP6nQd3jumUdEa9jQXwMxmBRaNFxV7F7FkVD12T7RbCyMRwAC1kh8rnZeHVYpRQzmEb7",
  "key26": "3dgtnV3Kyxv4aRSCzdfWDk3RUuPUYf8EiiU6pFkXpG7cymS82SAsQALpvpJejwVsZug9QXZLSSwy9WGH6YEEqZkq",
  "key27": "35X8aFAJRtF49ZF98BQJqyKHH52nDZ9SBxBvUhL5ZrC2w1mJsQsfJrGR3EWnWZUPQtjp7YVK1hVaqVXXusFyBJtW",
  "key28": "5YrXudWmDxghywD8EDsLFXW7S2WEusMmA5CLkXgmToKJR2Y4BSNY5wVM8USLLDa8ZGhEiuuS8Co7LPB3E9zTw6xh",
  "key29": "23n2RYj4rHT6zFPVE8JpTJU5BaYjqSDByibMAd8JH8TJh6TTzpHrEpdMriH5F59LzgkZVGubFH2PgfZLAGGqrk14",
  "key30": "5wCXQAjmXyMMt1UyA2V8z9qTo7npmxbLg1dckpekUsVsZSfFCw24DCKdio3WohQiLFth2x3diLiHrZWJP8LevfnW",
  "key31": "oXZ2mMveuh4VqF5GUvdR7Q7zDYpBGgrrZ6ezDXVshTaHFqAn5HUyE6xjoD6xRRgsL9B4H2sH4WYGSVDrBcH4AVj",
  "key32": "S2JPdUT1ucxaabdid7wW2yXWt3p4QiSfgEdR6DF4PLAArYRvSU59HHxGDDGfmKyrPRJ9Q1q4pqryQwAtphh4hDm",
  "key33": "332wdbqsWixUdmhr4fgGaJjzdPX8NnoaSdju38VesPxKd3H2bv9GycrZoASKZnNeGZbmfPgZd3QHfga9vSv2kXZo",
  "key34": "4L43Vfj9vSZj1sEQVWWC8LLEFKVfu18Qg3SrmLtSEewtbfdLisohWam5VNC8UrXYm4BDSYaLKKJJncTTpBvBBK14",
  "key35": "5dseAyESBkYEz1zK6xeqo33ZX5qYioQsNwAUjX4TbKzaqq9oZ7wS5HtQSs9RvqKtqQL1xVuw36WiwBQYc7LpgDN3",
  "key36": "4JJApfSQv1tLf6q8aoeY54U4RMA3w5WL5SYYyMeZDwmGWpFaqg9PLm8kRZkDFN9Ci7yMyYkwdfrc2ntCnqRTtHU5",
  "key37": "tokt2KdFfRxTjrX3XMUbS6BLx9KCr2qnhP1pPCt9E7iJEN7t4xQmYW3voAia76DccH8Ku4CTieaWiuB7LipnVH7",
  "key38": "5xZY2ZPQiNoj4ck83QNLnCVV744XoZavqzG3pHCzTTsdyuqpsvgCW8M5EVe8PBpob4AzWSryc7txfq1m7zifKPF8",
  "key39": "3eMoKygfi8kKLJdu1EYYe43LGSfrykvsgE6s3Woz1GzXcdRJerG93H6yG6i8e27YZ7F2vb25Gy1YvhykBmbTxRcv",
  "key40": "4rxWoc4vhsXtpZYMcJmjHkTFCAHbSjEP1LGQ2zqyfmsB4oyAPvRs3d57p6VC3NgTqQwFzXVm5gBR5AQRZ4GE9eyi",
  "key41": "3GJaFfYkW6mufhVcKd63i5HEP2grQdEoHjxJef7xDgBzcaDh3qgC3aK5dF8ppK5mBq9kmGfxUJtkPcNmaMdUsRQJ",
  "key42": "2e8Xou7noj3SsAkJrQWBX1VHwmuShPpLoobJX5JNoNyWtuMe8Hu3TsXt4mrvh43RoWcVEoKQETekqT7DmDYcyd7Q",
  "key43": "9FwwVTHhjJfDYsg4NaKAxamt9Gro7R4FAu6sypUUmLHc7wxsefHn6wiSvQJuGQX3GeJ2jjJZ95au5qKK2VGdDUo",
  "key44": "5mZJEkfawdUXhAxPd3a8PqSKhuPcaVnNWU38ENy4LbZwyB7EPEH3umCA5NQLPBUexPdpX6x93coyK91CrTeeUm2T",
  "key45": "3tPsgMCQyZNEL8kdQBdQs8qGeR9Bzey7LD5Ag9MLVouqJNGXRTLZ1CLQ897SjTTCKhE35tfrq8mSjw1xRF1ZvHUC"
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
