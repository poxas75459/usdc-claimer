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
    "56uZLFcijNadMFgMx6YgzCyu18gT6yWmNvWTZd62GFYYjcoujefh5VQGcQiAnkkeSw42gXVdHeyZs1pg1Hfiqki2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G7Ruy5wgKVQKdh8f3Cvosq7uU9e3Enw88Bgw5ezw4BGymTRY3oUGStCQQNpVxpaLMc5Hm49WNN69727MyGMw7DP",
  "key1": "35bgXSdJAeBajKLQnQ2P9iLr4qHrZSiUptukAzafUbxneaFvpV144aXY3bzV5tDq1BUp7ZetCU2Hg1nZbD9FEFBD",
  "key2": "ii5Pxds2gkUWugvsqZ7MTcFRuoQjJ9179QpzwMwTczbn9YfRETkUkBjQLpK9exsZD7dXxPFkiDdafHBhhuR55Ze",
  "key3": "59swkLLQCzXQZFE4A8UpyyteGkGHmeJfmWvhCEfVvFTnb3VbqvcGLPyV3kMSBGzvjVhG82x9tELf9MLG2xzyakeY",
  "key4": "444huRtv5Ri81vvmPvu8WG8vaokxkY6RTUU4yMYawW98oRsZdaNyhYnAtcLJzfHsBc9mDp1Q8jYSmPB4dPUzGyRL",
  "key5": "4Wx5WoDbjp24gb5dGnKGkjcj8niEVSj8pFgZunGQtCMi13aZbnaJnjH5HZLxzNxRRcyDVYZXrri5X6iZ8m9Yu44L",
  "key6": "5Xh72vpiTz6NTX5o957VKhSvYUzjG72f7xGZVaCmnYFWfGYHuTb3oPGaUm6zYo5hefg5gkj2NWhp4g84AwhWQGVJ",
  "key7": "37wqN86zi5GxMgUUkF9Xx1BwhgcvhaHdxdpxi8fSnbDCHFxSiYYsVFtRqJ8sgBmL2E6E93jtN7P2RZZptsmsyZ7C",
  "key8": "Ed7Q3f6Gjnak63KNHZMPY5K3TrvuwvaCFzrguVGyQVzSRX1RSyMYbdShquzDCbCRTuFvdD9dT4MruthiWN3LR5X",
  "key9": "49NiKTzzwwW96XeyCKVJ34AyU6WRamfRYCPY5qjhXCnSzWGcAXMQ6AxnvkLrqFbYHznQSEgwnF3aZQd7qxS8A4zE",
  "key10": "2pqAycBffMR6C1EgVcpBFosTvWNCiENgYcRDFchj11wDCBoCJDZCPkYW4B4AzkfDAtttdi5RREnBVr9Ci2DZ82Jk",
  "key11": "4fbYe52GqBa7eynHP6b6RxCMXfkGQq9o56rYeU76QMtJg1sMYm6CJm1b1AqGHsWS9n3XFJ3nrZhf5MXtGhykmbKE",
  "key12": "4fNnxMv2wKjcRdegYuAqZ643KvrsPFcZ8zBCwGBPCcri6iPX6LAu2ndR3YxjMaMXLv2aFp3xpy79xK5ycLZpezJ8",
  "key13": "2hydTGvqEhN4EznFL1dYba42DL3XRAAFrhMRt4Nx7a27FeZzAncdQfs2w1kuBUMdTpTLXnvkostJ5hwNeC5yPb6j",
  "key14": "39JGL47hdXW65xEusqRhJ4wiqQJEY9dZSZQ7LhYPo2nQj3Tg5V5naMqJSweePK1ZYj4WcFY3oSBKHnCahQ8BUSQ1",
  "key15": "5Em8ZhVqoVXLNqRRuF6nSwH57Pic31WupBhftkxrMavZP6bnRqxjJcGxJsPfnDDmfPsjpaiJfk2QjP86Fnh6JM36",
  "key16": "4HaPVso8UA2oWqFzz24ynZZmq9qfhYuce68Eb7jWF77ZaGmCwkomLb2HrWDt1ayhWiiCApScQvGncdNx8cshwKRG",
  "key17": "5hxveoqGxidcPXM4x5DrZf5BLvGy2RPws98RhGvMTbj1zmj59W2LqPjzd7MF7JumognwCyN98vBepn71LgZmpufU",
  "key18": "3FzfAvkoG2ARMhMbmxJvtoP5NWTGs4qf1iqgyXn2c9dRZDxkHunzfHVVRaZcitWnDXTdiTdJzeHrGExscATG5VoM",
  "key19": "3SgDe54orJgZUKLN3tVkLUdxAcYm4oy4GCJrCwMwPZNdWMkoo6WnTViYG4Hr8FqLrA238b8KqYEn9gkMCQvBKEdu",
  "key20": "2hKpnwN4L8RHEMyfucgWgA9Z5NMhJZahALerfkVjsrLhCgJx6rrWt15snEMy3BMQS2XkFBPCJ9pQBpvEtH79LQJm",
  "key21": "5jF4ZyruJsJ4ChG9m4Th3PXx2qGkSjbvPQ75cVn1U7Ee23QR4P5a8SXBj8yghDbMEbiDYaig2EaJwRMtvdZo1ub2",
  "key22": "YcwxkME1JcgtxP9ExaYLquLiMWjQxrjseGZrqzUVdFcVmZrLi55w53rrATsZpYHrnTnUtLFwcxMfqhqufmLDaBW",
  "key23": "qrhcwYLYcyWZSCdjJFTeRBdYWP5LzmQCrSr7BEvtcRtobNy58VjqWRrk8hmfAaTD1nUhqKP56ZJ3F1HrANGJPuR",
  "key24": "LYRw1b8kcVEneCCeFknBguRkX56JKQAcXEBbDUU1fRUrLeghqrBpiknBwkPas5j9ii32TeWFu7txsQs4myAdgZ5",
  "key25": "31Ep4eXNe1Q7FPEqzzrjGrkacGbKMK22NZaq1An7B2dn9rRnNE57avK2z6pqXxSQ4oLkmSVw9C6zc573mHtQS8SM",
  "key26": "3UqYTFNzqJS8k9uJBxHRu1hBwa9wsgd11Z4s1vkHVXv4GaYDB1jgF5ubwX2cZ3W1ERkxauXW6XY6sFX6q6E2y6wY",
  "key27": "3nGL1dimsckzeWfjfUeH3R3zud9QktVj4ekadH81FieEYWdF8D6CBWzC7za7VtL3oQ3ZRzTvMY9TfpLGebrmM1XT",
  "key28": "3TMEUJt8j8uVzBv9ZHKiBH1SmhJrpeG35oUDJo8mc8wn6oKsrC9ES1T3nBJ3Yqi4CGi2apcFZJ5Y2vETYn7QKc9f",
  "key29": "7woWjVffyWRXYCLVV393UzbHc3TcSZwu3DVqxpkwScMokhasGQ9wn7aZuiETAK7eQe91hL6h31fcBHkWHTAXoZq",
  "key30": "3AiGheewf3D9pATickVGRCaEi2QnJxS4sVpUsARZmm8Acr2zBcJGH4qP9wmcuxardhoNpjCnRpYCu3TJtpfXD9Au",
  "key31": "2K4kGJHRDoiK3PmtAqhQ7ddb6VHf5cpsnbVfF5xquMVaTz94xSsP4vAgvSdqGpDTcKfBgauZBJy6ogm7988vLVnJ",
  "key32": "5KNVHSHYFtGMCzuqdttqZSgXr1V5NKUtdnAM2iTndjBxVSGHhyVvAJNMNKJB4ASSbNFHyuSvQSZnxNHtMcEAC1ne",
  "key33": "5nzdwrjue1YwJZDrM4puQvt4Y38nL3TCKSaYvsQYQPKMzaGbdvxE2BKoqvvpcjgiUZMh6szLZaMzKLnExDo8dkp8"
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
