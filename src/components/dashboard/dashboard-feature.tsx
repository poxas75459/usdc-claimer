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
    "3arEChFWKWq6JmfQymnYUaEKMzxKeumRTkcCJTwLwFntrkXCBEeBHUDMP8NWijjtEiV7yXBX4yrpkvGTqXuXcRmD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RJeT9EzQ3LnrQsNJ5zThy5HSx7swEXJ1XrUfMRV6D9XdaS5K4M5AvmxVaFsRd8oAqyL2dLRdCto3cNugMwi8uxx",
  "key1": "5FY54PC3gbBYce5zynUJmWqu5PxKEH35Mxix8caKJtJZzRQSKAwtNNy2eCqLyYzmwP5CLqvwwfe2kL3qViEzh1i7",
  "key2": "3Y8YYo4FFdgCkQmrCusbkioQr3KPrgpXC9XjvjpZLqMdfWDAQy3ddcJJSh7g1fc7HRYXCB2xvkMkLZouB1NzNUGm",
  "key3": "3GCMRpmxxumtoWTUhBFWYtJo5G3sYsa5xHzD6kdKphr5Ynas6HMfD9dehKxKqhddquPigxpA5dJu7h4K3cZs2vak",
  "key4": "2C4nmx5kgB6EEtWcuDPhzQvEdhFmMvwTi56opDUFMrPr1DT82uBysPLX6DEwvvi8QaU9PdsLGEdYb83cHs3c96wT",
  "key5": "4QAYRRxh5FbAce63For3uLYW6tATQ2Kqm3j5YMmBMTEj4c6Ap7PMPLudmaPn1BsFo9cYamjxHbeE3z3fvNTd4Quh",
  "key6": "4KNhzTVny8remE6Fiix6ycMzKBccmcvgadD42sRgyZRewBk6rWEhNZzX6VLdS2rcLBef7qEFcyc3MU1epKvoPePF",
  "key7": "654iuZUhzyDNmXijPmFRBSbMgvQeGmFhRLcwQDJNNSJQSprsZ9YNcKPwSEZEWYZWghpXpCLJgZqGARPDx6UGc3tA",
  "key8": "bae5PdSotz8BxGKP8T1Jm8TeiRnWzcwGvmnatx7aVWMxTCQQLJfrAeDRgnYwrB8kbWjTdDUpwzMUEgW4NjbwmdW",
  "key9": "5G9kSBTbBthpuPHoKyLHpvmBnUAk27trPxVofBLBCXYzRiR5eMQ8pLxpTTZr9wTFVDiLRSxrWnS9Rf2zWt4Jnbd4",
  "key10": "53CfnWzwmteSZ4kPE8p749XPxND1YAKHGdFVeuz5584A6zkpdnH7FUePsiWtgm6cfCA4hBtCSqXKi2MVmsAiHwzv",
  "key11": "23FD4kr7tDL9FQcK33ipsHonX19YELBMrpeDHM5UMFUco5srKAcLqvvuFwzR1DPTuDzmJYWggt8UMMJLR4cZGK2A",
  "key12": "5rmZnu8QGu5troTrF3NbWpnaAdiz5MBGk6ucZrmApfxQ3hNeB51YHnYtYHTHumthcJ9E1waKY2VUgdoTHKHqrtFe",
  "key13": "5gHVRbLMy2pbRiBXF4eF7TxGVse2KYWyf7ruMUHunfRrthhWmF8qqgk3qtUwE8FLond4jsi7mi3j44BYJcHkmMbe",
  "key14": "2dueUAExkzMhtCvt4maxMxiVjZ2Wd4fo4jnAzgp9D5pKoMHZpu5sMWCD4y5ovYPFtuEMuvobqEBVECsbSe76nGWq",
  "key15": "3iKdp8tp6QS2tJ66WsBZekr9cNzTyREhmEtNYn3UgJD2epriPrAXuAeQDuKjgMjszppew1KD1wq9LhmZds4xMQgt",
  "key16": "3E5wyeT88AcwCSpREgDibLRaAar27BgqhWb9NBAmTihHwmzviR89btgSss13BfDh7ubct4fXUqpWW1ck4SuaWUms",
  "key17": "5Bc9zaBzrDX1z6PwnrG49wcZqWrEEE8SqNiiQjobWPntXjCanv2W1uVbSWNPGNLwcbTdZJNngGVABQr54XM7C7Aq",
  "key18": "5bhfigv7Hte7FopYQZFyXNMPamQYPJzqLz33uc77738vPdE8149sdcaScuFopyLD6sDooxVJuZkgbS7bpxMbstts",
  "key19": "u6s21xR9wRaQLkXfD2Ab2HYDewKLFppJGx8MHNisYhhaZJmwQBj9vxdSHpbpA1HVySArniHnRRDXXTNxoGf96T6",
  "key20": "5hH9fociSj938D9zpDeyYHcXPWNq1PWPb5w4VZKeXTbhN9oCzrdsDSubq4MenPExuEz14wfUPwEbyfMmvahCdr7w",
  "key21": "4vpFVqd2HuJGwL4wY94CDSL31DqnwgD6CBdt871N4dxXGqdazrcWf3sTgKLFPLRpZpm8CLHL6RwDFkaQT1hsGEhf",
  "key22": "3YmYZrPK8cDnt7ARYUXKnejM8R7FYn8WQMTQ5r64Q2ePWad3J1JJjqkbxfjGoGQY1mv3DE3tJmWZZaDugrAuHBRY",
  "key23": "49sRZrZE5bY1AbYYSoLqKykh4WkW9cMEQprPjfuHhgmeuNdLXyceuXV1zNHGdgr5MQpG9bQL182GnwuuwwCWR6uU",
  "key24": "54KK8bHNXSSnY1Ge3ujuRKaXAeaNmRFwQ8iXxwQFTqUpQa4d6ud9w3zn9r6JEYKVwmAsCfdekBTKu34KVMBTSHX1",
  "key25": "5itjjEvsLcz589GDj7mtSmF3heHwQnBtoE92JcuRtJv8oQWpVPUjBbyv5FpLikH4Vv9hYCXqn3cry6ewXBnYdyBR",
  "key26": "4zTGYQBdWeAo1b8FocbbYrSCbiZKVRDSnsMQw1rDNNUQG9FpybjnqAJumUMPeqwSdhF43MVy8rkkicEqv3a8P1N8",
  "key27": "264pGtAEs3799WMiuddRbf2KqYsJQ51pKZU9WU1Z5DDkn1dZMwXALZHmAF5EXn6grwhge9Bq2EKw5Z8QDsD6h7YB",
  "key28": "2QT4SGqtN1jN6Eweq92DJECVVxuSgdKvfY4N8B8N9V3XywX1wSek4BfmM1BcB2T4E9b8Bf9siC3e89FWP552HFwY",
  "key29": "5W883fKoVsPKxLx3od1npBgrLqF6rUjkvPF5mgP9pCM3esR2TDisJiSVfPaFkLVwneHCJdCWrLrJqjnAWxfHXHFk",
  "key30": "5CshRYuJc2qA1kBxQyMwLJUkevxTnpyC5jc4CkpteL6HbnSM4dux95ReDZY9duKb8UiGw6chTPpZq1Qc4ThNSTZv",
  "key31": "5iKzPYfAsZczvcVvCT94462nBqsGWMzozXRJZSAeKokEVhh9nChayYEM9kVq8m1N5LRwpRN8MnCN1jAwhnjPfWj4",
  "key32": "5RnHAnHYe1LAwifBV7sXdv9WDBuLCRr15PQLrispCstF8uaJZfgw5yEEnknQUuvokxTUKU9FHYRezwrn7p2Uzktz",
  "key33": "3fXWZfAvrLKEZHxRJju4ndy4SuZ4p7AZWzBPrXYTRPnvqrWDSwykTFEJhaW7xCufbFL8TQtA15S7wDz6QqC6cq1N",
  "key34": "4Jv3bySFarKUS8dQ4oaaDXZEbVL3xdkppSwwgukvyxj57XYv527Kkv9auYc6AsgZWExX17TzfX78o2ZiinKaAugE",
  "key35": "3ESKcu6uvQC7mQe4wCQmwKj2tDxy772kkEFWTpczFJJgtVGV9okMSkf4Tk2W3c69kKUBd1CEEvM4B3ugFxB2imK9",
  "key36": "5ARnEVwVbL3GhKKwBoPkB6muETdWh5XL7mHcMkNsQteJVJYpYJMpWnFfABWW1Z4M8qtQmzrSk1iT3FGXsjDXBoRQ",
  "key37": "41RxEYz6xAvMyiaZaMBGZyYcjmAVcYawBhJ6Ei3GueNokLRUaPmYvgjZquP9VgnhFLrXj9n6iqgB3JMsST6RihVu",
  "key38": "2KV1HejEGr5w4XcDc6aEocSbPvmDjaMByE8xYoqjBu6Miwd2HtYuPmWuWGYjywL7L1GNJLqYUs5HtnL7N1S5td6p",
  "key39": "5JPDjah695B92CqHEfvDW7Fv7M5X4PHR6uh5vJrpKzRv2Be9DstYnHwEAURTUhXXhVjaT8iGdSVNE4aHpdwqQoKK",
  "key40": "2McbU8VzaYWwjQjmiKKPtRhWosJoeii9d8URkMxnutr5f79G3yx3fAAyAtXUUvbNx3w1aEQfm1741QcVRgvZRtna"
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
