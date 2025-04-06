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
    "2DvHBrDJ31Rr9rDFttTBgLGFrgoCRoBw7A9Tvk36DHYvnQHWxHtJfhRDVtURSFyCFazmkV5aruoTJHHWVYru7Pxm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KNkZn95kxgCMjMCuNoRFjSk8ynpDPeyHPE1rAPU3nrhrm1BGZAzqgakvNwKSFxiMFC3wr1y9GrZ5f5EGTs4usuh",
  "key1": "3FveNWCaQqArUFY34stcuf7tiCujPhgS9Edj1kxZ2hzyqfnQEs4rYzpzHg4pqyAnVGdzaGZC8V94xHRAVRcFm3EB",
  "key2": "4T2LihMBPDeChSCZD7KgKEA6PLyCEfCi6UTFCFUR9dvjZVnfGdvaYwNrKggzDvEdiaAnxD5mWPMh3tBpttwT912E",
  "key3": "5QLBdz6sFmyvJ6DpaiCnMn1LLE3eUagfbwxjEsuDHQkfaVAQfENF38iVF5eVUWY9vHKvV13fT99Y5A9xmSxEmgaZ",
  "key4": "44pN7XHnjNymkLHGbMNdREqYBDvF8sDeSgQ2mAC4UMT82ADRmWcQp8b9JcSZfS43xCS6E2r7R9djug5WFp8878TD",
  "key5": "5Dhz1s3gCMSd3mbVR1oYqriKEfiWRGGBtZJoFv8gss8HiZ5WWHWiM4vqd3Q7R3pnVqQgHoQkuHJNKxUoZW43yzXk",
  "key6": "526dW15XFLGoNXYyPhG1ttc676as8xFVaWr8UgkrTABiKYA9rRVSWUQqHHnTGaVUxf2vTzngNyirK8TSQTFyhCcP",
  "key7": "3YRt2s776XGuL1Fauy5NdTpx8XxwjPMEpsNFcsH9qFdiw9eCLtTNFbqXibAqisoLbGJGYJU1xNsG99wC1MA8cG8J",
  "key8": "2wwkX2Q9Kite4d4NEQ5c3oopaxdtNqLCXZq3nk1rTT2LBxtH1Ryh4yms58CXQesfypYWoXa8HuiyL5A8WFwimFrK",
  "key9": "2LpZA5BRKfJAxiXiEyzySB8tSmTbJTE3TNoRAxhQvBxrFUeoVTwRyresDY9MNhy4Bn7SASUKfUAe5XSFqbpuUano",
  "key10": "32EmVto4gicicq5WrW756F8Dk3pD7w2ZtQgow1hPb9Ky28iFvNdE9f25fYMpGPsgiyTf2Y4aQR2sREi28hpxapEB",
  "key11": "5koA2MYnAygxWfhjRFWRDn8Ne6fSaFrnExbsouYNq47fV52yR6p3LqgjAY4BtxGMj8mf4QwdDh3sHMSnfjSsZC7k",
  "key12": "26iVQssPc4DtoDHnb4N61UVTvTvwkaNVP4QpKrusCgn7nqo3VxWjgNwxg3TFq5SEERtaPfLipy3XAHcLCjGPPpt1",
  "key13": "5fRQVDHqATnB27NCyrXZt8CrZubGqKTScDo59TyXP2QhqJYiVYUfBYmEF7iw9QFX7Ly7Ae6NLAVsDik91KwwrHmD",
  "key14": "3C7N7PoPzn1tSVoEh3u1JgtUi8NTKbHLL1HQKkZajUtnXDqZ1aHLHi2umc8TeKPk7x2zp1wzmue51gHfhMiBwUkG",
  "key15": "24v5xvoqDpDUHNiNkygC96NXCSfQ6PGxib57MsW9HRqMnPugHWtiAjZpydTNM8gNobmwWKE4DkecHPh2NFSr6Rvq",
  "key16": "38gGWd2DnUVwcGQa47FCxdDAgwtPMPU76LSTts41N3bvWYyfZqRpZMkTCqUXCFYbYQf2aUsFhTu9V51Qgwpt6BDE",
  "key17": "52ccZDNzXWCgyVvSyS62en9vLpuqHWXqHXs7U2VoMknC8YoiELwmx1UyD71E1J1Pjw38AQLaaUAJQGbeuhwRWZ8x",
  "key18": "59o9eo8BQhpZQjo2aJ85N5xrFWxutxrYe7JHirQp5BgT4VyhuKWRCdr29ghRh8XKTe1kac7oXZjH59fTK3W2f5tW",
  "key19": "3ic5G5SbdQmxZqbZQCvR9f34fGpJQrUGKozCqpvwayZdZNvWJFmgvUJLLTpefvXPbp54SmaaH4VMwwokFEgdFBEC",
  "key20": "QMsyrj5BLYwGqZ1wtRo8RXL7WJJ27cBjay1ApSxqdvrLcfpCWfo6dybUeWL3WZcMvC9p7rSKuHT9eFMsHjPQADt",
  "key21": "2YVNpKrtifCVJGgq6bqAk3m56zFi3pDs3BWUjCrQeoqFphGoiX8MEVP3hqFF9aWYdLwAi2BibHjugB2Cv2JxdvGT",
  "key22": "2HMYaH9TKL84zXu3Xv6ihXbUmpeKXPjWSoKY5J2UoLAYdim3CLCxL5Sh57tT9t5jp4y7tLdwnj6RJF2xYL2pEBn",
  "key23": "36qpLvXjcBHbQqFj5CbHrK9kkHshwK6duVkAffqEAiF3vE8q5aGpFFnQatUGQ54EwWZhocri7dLqvtDapPvnA88p",
  "key24": "2WUzp6vDBnMTFD2WHz99Q6euB8jEQaei3e39nVe3TXsE2BQZyViYw9WskYGx8AmQ7YjQepTH8LETTp9Ubk2RApHk",
  "key25": "64G5Q777aZyyRmaQRJkF5GpYjVYiMiGMHzuTShCsFq6pqENCdFPwuAMQEyn1cyf941DFNUmE4yXBvepoDZ8VixLn",
  "key26": "67AYZDQFTY3QLpxAB99YbYzZVP7rhyRGHrvKgPqGauVGboGVxjm8G3sgQaMdob3TxF1LcD1mQvv7WK2f9Rhjn4Fo",
  "key27": "YM4AaBeJXzrGiAfmkkGUrqfTAQMGZ6mt8n64uA6uqJr78NAiUdUj4bcHW1qxhWrq3KLhEhb2iChDfvDWWBJ5N4Q",
  "key28": "3Ja8Af4W7txCNLmwvsvwze5FgjuXGTerVTqi22Y5s25oPGNRP53mRcywCpcTpq1c5NEXfchnPMJQzSrEzYYcCSjK",
  "key29": "5U1EJDBoDDLKTKAUX9Yvb33UkgB1VCrTZc5KVoWr1zaJXxNj3pfwhXAfUELciwWCwsMPGDgJ8jqUKUwnRnfCXxwY",
  "key30": "46Pv9i9sGzfBd4fpPdnuenqtQZ7uxy5kQhrMFnebQUgEJLhmVGNq7u4h53hDv71wiNBnwdF4fQoW9QTLFkSVYx3A",
  "key31": "3koyXyXLyc6EbqKt3o5q9vKs4pfDBRWQnpuudCiP9GCSE1V4rahufvcuRmVYnyyQir7eqUaEgaytCFowzuWu4sqS",
  "key32": "5ru7VRrV74kuebBryhM7d6CL25axjGtpyn1wPSbUWbiYnkXLk3Q1gbDVaFMxcH1iVGb2nri4Z4R2mpC7u3mJ9Zh1",
  "key33": "5ppN6Ab6XuQbKcxBpkE9Tb8VBnwG5nBNuLyUjrcjTgJ7Huhp6wkqcLXa4xgEmr4r5ndNf1tpQDZ8vK5UCAYF5Gq6",
  "key34": "Zw1JN7nuq5uCrq2V5u9ApZReCAQHg56WfSAjyUqoKdsxpPkZyPVGnFkk1fXZhzmDVYPUNVneqmdc5NYRLkgiYFg",
  "key35": "2FsF6KRsBfLc5aRPTFty3PnNSaaeJx9aPibjr9cNsKWNCwg3SAAt22mFovCrxBg5DrF9qV1gerH2mE8Dcv5obLPG",
  "key36": "29ADsJKi933ExNANGtT41TJVta4AwT3QRvUu9ZjXLxxS6peZ99A8XusZFNktk4yti2pUF3ua8H7vT9ZsXYPkE59f",
  "key37": "34gkydjGg1a4BWYJZD3dD3bsHEwdbHKK9dg7F93RdDyspVQs3Gx4kKYKWtx8yCLbkdqZMKcARDhbUDw4orynD6Nx",
  "key38": "4aqD8BadmeGRu6J8N2346nw7QScuV7YjXHz3VvL5gyDrnA3iYP1QCLVSDXcefozRCpsrNFcd5WauRhkwYVebvEzw",
  "key39": "32KXgGcQG9SiBAZkH4Vfcqzq1bik3cAATEgBSCgN9i4p67w9GGPjofRTN9mZCQ1PGXt2Y5i59wHQeHzwdGuRz5jv",
  "key40": "648v8enaJgFQ9xv7GtXZYZQfzpbiVrGd84pEyYEYt7NNfKqvssEPdN6gwAwKiCBU9thRnHnx1XKC961uwjTX7JJH",
  "key41": "3cQTP1imZpLXWbz7sA1gVbEmNaJQaQ4Bgs8ygf2dsqYPwT24TZCuLLct8K1Qtk9BxbMGJAxXVh1GLFM4P6sNx7mE",
  "key42": "5V1nPLR5gR15Rtv6jo6kKrHDHbJnpHms6Lmo6wBo95uQcardbJM5Kib2ng8BegwVUSeVjdeDqBkpReT99bGiXsuy",
  "key43": "uiCBSYtDwJAnkXNJrUG8edJJ5eNGj1NDG2uF9iKqu5VpDH6N7qGUWs7TUEFVnvnVwC1JEFRu2yraSSY2QkLY9u6",
  "key44": "57nLHqY7AtGSHDTWxhoY9hMjdW2qNDzJnVEpU9ghtM5qwyjCH5cLS9VCBaCQ25YHKKn23Vg2LRZQ9XwomJ72FEay",
  "key45": "o7VnFpLTece6uVtNVJcxtBj6YnnGyAQxGAyAKC81E89vyNGLpwML2Hqed265XaZN4GpFnojxYZC75YGyU7V4P6o",
  "key46": "zxQrfprEgKwgoMLX4AzLFdxKqFrEHrtTAmuRRazp7UvLjNjzVHPDShVFUuZCddXNxk8yRcVeqeTdUktMUWWqUoH"
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
