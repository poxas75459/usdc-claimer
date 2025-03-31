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
    "5ViCDUE2NACtJVp3w2dqESF3SR8zZ5KmP7rA5NN5r4cnxQ8mtJsh3KU3YzV21Rp2oBCBZ4vxRhDPq69swgP6JG5G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fpw5tjhfxat2BAwmvpqqPepTCwxFC4oijwucxeoqKBUEU3gBPUbPtxQPmz8daMjRRXqi9NxFsx4wTmFAnR81qyJ",
  "key1": "4d76fnR9zSFQCZXo2q7b3V3tKe4EMknTLiNksvHxzd2CUcYRmabXQaMhm6oPBPYGtwL7ZDdbWCdi21oJNPn6Vhwf",
  "key2": "2sFo1QPXA3MTuRbmLHmARJLKbQqZjhTuFbpGgdzJ3ah6m5EvTbTp2k2xwpxBG1fSAEWJh3h75Ny8DzMJqJtKFhrq",
  "key3": "2wHsXYNh7mcFrrYudmmtmTdn6DCeXPGJNcMP9Bo2zk8bmh3DJq7dL8D8ZmHmb87v3591ew7RzVuTvYg5EjmQejJm",
  "key4": "r66GT52ubMY7d9imQvxYu6qZYTqrrgcHiP2VBFU57ECCrGZ5aTDNNyomoJuHZ6LKdoPNqAbZucL2Gy9Ej81Sc5V",
  "key5": "XCSpbyuYmsuSJDa3z2iu5QTV1hPMGxDdQKAWsYAUFrccMS1iTWpbc6AuoXeAAdSwk23f7qEgwnB5mriYF3ZVvXe",
  "key6": "4vu2w88PLLEkPV5Hf7JmhMZCRvJBpiRW9o9dX3jQWjSpCcgnGq9SCNYCvmns1CVM638CQxemRK4haVKvgEuA9BAy",
  "key7": "5vdR1r19kbKMj8QTxB7aE265McUNP4ufiMLeYDmMfxjedDf9zGmnjGcU4gcaMjrhYQsZsSAC5N48GDtjuZgqUMLJ",
  "key8": "3rifxg4EgTzWahDBFqyrdVgzZ13QkVBH2cBExGkSyMdcbyAKc13AooCe83eKfQ4sL3AvfnGefCQTYc5kBKqHDLYP",
  "key9": "3T8xf7uB9ug3h25taV9CC3R35EwCRiDt4nADBMLN6Wje6dtQ57gcw5KxECuFkMXHk3dDCVg7LiEUcBq69iv7h2mv",
  "key10": "3Nb4NesJZQbwP8pG8PncSadc5Sd5FWAe4PhMxEGZcAvtMB4rm5BUQYLCvx75PF7YX6wLfcgnoyk2TpCUwsJrgmWJ",
  "key11": "2bUpeQRemKiL2HMDLuDxVz5HPVXJFm1T8BEFJ6q39J8cCCsf5GBqEmLjPyAJSDAAPo8rEfW8tLLdPwGz8iHBbzFT",
  "key12": "3heux6oX2fWATMkgxgbJ6zfWw84uF5Zp88rMEMEnr9ntGbMk3HYsTX2CFbbw1Px6f3qoWodTKCCmj3pAwjmF3DLe",
  "key13": "5GuVo2YwZPDd1Kp34zKRUBWBSCogyi6Rg5x2o3quU7cjG6SnRsxXNZ59Xg8F43aCWHP9TsPNox7WbgUPvCvukXuv",
  "key14": "35V3jfvRv9m3muHQj1SXoMmSFiVNFDHqcM1C7CufhrsN9ju43hzvksZ5PMBWRqcpGi3ck3T2MuBJh8HxETianFda",
  "key15": "4FggGwHvUwPzwoxQtxczJoRbYNjg2HUe9ZV6T3aCf2PotN1S2zhmMiyCX9N5PX9PPz7MvprKTQCKvxcsEb8WbQNW",
  "key16": "4kniT8tGdMZtabPn1aXhQ1vQfFrDHZVAuCRinqQNjNdJuwdKDuEYtNMpQr2GdGaNrnqd5UveiLSFE94VdjdRFtDk",
  "key17": "4Rw79dNZyQ3BAwCtuiWKHRo3NHKecY4BsfYw99rfujFWVaGuevuqQi1k4ZKmPn7HbzYsQzL6PpYm3pDsN4KsurnL",
  "key18": "2f8hz9DTtu65oMKzRFqkzfWUe3mA4s7apMrLa6ahBHPLLgBWp58VTAMSyHctJp2Pu88HGzgoxepNCPy1rB9DYPbk",
  "key19": "3eamNmtLiZRuLjdvh3SzmpZ9X4DN5pS1myx3QUcMn1NeDLzszUtAYUcBjzeVPfsUGxaeYB4qACcTeG4r8AkzWA5V",
  "key20": "2yBzoCwcjh6nXmre6jYmczzDERbF2AMDSTgUp5CQfeXx4sBibvatapsaF8w1q4N1moyoZcCPxfyMsJYcd7QAkjXy",
  "key21": "odcvUAFhyXUHZLqdDfBHWnyVmWt6Fi4bXD74qSPVN3Y9hFriVn4cwJgsf6ZFRMuJXWJeiwZEhbJEdZj25CjnXnL",
  "key22": "Wsmo5piMynzY6G7fU5ABkmo6i4AWaVACS8PYxhvm7JTVckTPN4kGYHHJs21gXz5DBzwtsj4g8Y1e5Ljd4XDdS2V",
  "key23": "5f4mMvHDmoBpDDQxdEkLMddvfAmKNmCKUyArBNKh247b6ZAuzm5vVhDzTEMJmvimy3B4ur4T4JDtEzJe35cKBiR6",
  "key24": "2YghC8efkBxR9XDYGzgAZf4t1Dx4EZr6ahEDy96hGNp44kghE3qQo3a94DKkNhVwn3SyKb1wdrmNY1gs5UtDXN97",
  "key25": "2MjZQwcARFHqbqeuogcirJPYJRb1StqKAyEUAZwuVUS4Mto16HDwjaQ9gBjVxxAZx5MvA1T7kZwv2cM8noyJe2u9",
  "key26": "SQgnmnZET6ijBHWx8k1HzEguXw6JHALoS3zXiQnaZdW2PxLCHJVJ2ZKHsTPeEq76P8739tu4QjQEPP4ysUTZazA",
  "key27": "5F4YtkkefdSVKXG2goBHZ58nhAzAbKHNQ1nCtkBXezh49FEFVJkMaS6mkLBd4fxU1pxLfsNter49hxMnTXfJ8Nd1",
  "key28": "4foxibmD4SeyZiuLFejQ3jzhUzMxH1RMN3nfrRbgc6xdXwYSe1hZYbSqb3jmRWiuriRtnvxQvFewwKQnZmuGQRga",
  "key29": "24cJme8DBjxrRsvZrkUwcVeSLwtz6k5VhvxMNUmBNj2AhryhNeSMx6DZ5yMn7CBKN3tnKFJBSABm15JfL2q1iu6f",
  "key30": "2ZGKdad8YPEfN43D57scy32D5iPtn9UEQszAeYL6XyHx6ytL3s3UcM93LRG3AE7UKotg3hUCDJfDk213XWNzdizE",
  "key31": "5PCHTYnYB8oEGEc5JLjBaqKYLSdWgZ9LkUFdBVEupsFFHVLFn9jmAixKjLszgKLLXR4cg9yALEzE74RokNE9cYuo",
  "key32": "6yMRUBSi1cQyiQsEtue3dbyE9qMcWXDnnDZmexjAafqtntwvsesfggqSo4dB8ueaU7CjcsMCz751hszRjc8m4L5",
  "key33": "5UT3dAbUN5S2wAUkhJ1LhmgTkXbCogjnBt4D9aowzbqhTcjydcxyLhBR2Mx2uDsyHSTJNhKK6kt7V17bf2Ze21Qo",
  "key34": "5cA5xuvJB2hn1A9E938GNrUNa6byr75x4vCNNKVai713fzHFsd1eKPJPYWkYNEkQY6VTAP2eXJw1dPB9VkyFD1Zb",
  "key35": "4qEUsbQzh1Vv3N1p5EXcW1yTxN6pJSKevgWhGTS24n5uv6oVHm9JJqqgeHuJqwXdXqYsjco7ZN3gnHHTMeWeeg1x",
  "key36": "qPNPtRBao4qsVwb2meiwiSVRmMEeCRiaQfFVf1YvxjaaH6k4d9KfNvp4onYB3nAaWMzRzKqrggQRVjD1xpaFMit",
  "key37": "53AZukPNim7pQCm4SXPAB9RcVYcxpZWHcHYEX4krrbemnmGestfuqKFum5vv71anT7hmT31UzpVdS7NefvZ3BSNr",
  "key38": "49ZjJb7jPYNMBn9GycCHaFv79ujN2CU1f6cATD9f8hs8dszdMXKVn4KtPFqn3qBjZio5oCaXiDf3eriJGPxRHhQc",
  "key39": "2hsom1GYMjQLVJcpXDPKDUdA1VUZgRuwHyZVU7SpsxD2kCsS95fw4dVUv2dRozRoyCGvtaqpou8jJUHC2DHzjUsw",
  "key40": "5ZMvPnVYTjshU9D3fia1m7PUPqosSbm6zduxiGsbaymUw7rWKvFnrjAEUpWHwNxYZ7HA4xsq5Bey58GcDs8sJxg8",
  "key41": "73JTg2WXRNjvaW6FBDGdvB6RsbwK8AJmQpLFA6sJreWhcjigjto1HQSQtBMDGzeEM6ThcuBEj4VqnrScYTXuDyp"
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
