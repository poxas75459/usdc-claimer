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
    "3yQnph9cwXWBhvR2xmFbYiq2mbRgquo2ws3JwfEqMf39owf1CM9Mu2GUCad57rYUZ7MadvemYBBmekhvWx3GugA7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jvKeLJLhDctkZuzN9CAmgEboB5gUZnBBBVhT4M9x7d6gsFkE4LTHFwLz2Jjes3CEXgRaFr8LWSHQhBVCuCF65PU",
  "key1": "4gYyPSHVzCqkYHJe8zr1VX1U5wHnFvAMaCJ1EaBCBNhUDQsfWsNU79Zk9SqrBYFK6GKCPQ9TUzo37VEQdpSK9NWU",
  "key2": "5H2RPiAdPwkyaAm1b7iEEM5ReDqbtjkqVnfHPsYN57WDrQjNRMqGyQvMwSyFMjbHo3iCpfhn9qnvriubNnWHYd9n",
  "key3": "5P5byjCXproB8d2PwvGmS5eXYkeJMVTskrx7uMPhQ9uhkcbedVLAoL2FLcZEpfiux9ak9RuexSnHqEPSnHgxDfmq",
  "key4": "Xzp73XrqneVHcAre7kzZZgp9hAocYpiypgZB3VmMZpeYq5JbfBubfLRwVeyWc6DLRjKSFnyMhwPcUifhFPRGybj",
  "key5": "53mJh5625kG4gockjgLmLNN1y3vQDc1C3U4htQKgHMP232QNhWLzKpBTLbfRwYqxHJk7CVJkmmjTxJ7FDvQKSHMm",
  "key6": "3qbvt1Q4hrEJBYgZHmXghf1ZeBVMsmnDaQXc3DuKqPuo144Pkya4ocAmoVQxNvG6MwzMySfXe2SE51vB198pkJzE",
  "key7": "5fMHwzedrsQrNiDgTUrDABoyVvAtyC7AVjrrENRvUReRPtY265xe4q5MvzjUfGuW1GYk1b9wYkiLzU41W7awD7PW",
  "key8": "5MrxkmhNHuAta6AUNZdMZAfQVzqNkGCut6aKwRtVanbAYWA9VumBDqsqUoZXLNPFdxU6SCQd5rzQrykbzbPNPrpv",
  "key9": "34V4Uw5NspewiWqzm4pM8PdKTTM71ZP8CGHD3GvtpizrvL8qsy93U3Wccm8S3j8qMUNJP2Ji13zKepGaLDtRhmNR",
  "key10": "3Pbdjfw6b6M7xEEpCpoVwgVtdUmgLFMMa3HTQDyeypAiAf4pp3NjA6796mgEsHD6HnCVybvrADueHjYpVc4Yz2b5",
  "key11": "mD7YRP8WKnzmHwk3kffB6wRQnwLZH2h3ifry1qUWWTZgMZAvPTtitd1k4vg2XwVjMSEHXdt1dqoD8rVNJ5TBfQE",
  "key12": "fPQw6SMtHfhvXyohHJgoqSd1cLVoEEB2gvtZwGUXsJbtiCpm3Wpyc4ufPZwh7hc4ZTU1cyhXzbqueGhqjnUrp7m",
  "key13": "2qqBf75znmdR74qExgv1y6RUbakXkPWAc5zr9GqHUNSApgJEUW6bfnHErLBLWdfEDSAc4SJ41N8gXewavuzDFPu5",
  "key14": "23aDNM5QdraDQdCK2kbKcg3XtQBXdWyVHcSBSvuGK3oLAsUFfVkeeqq9S4xQuvEA79zZ7jYADLBrWuiwf1Tehs9S",
  "key15": "6nqKuj1qdePtRe1VvMzuepkoddH6nLFpQNPP4WSMWDuqZuxfxUEREGUC4awdXcunRfEmH5dCaQfvifxXfuYi4YE",
  "key16": "5qvgwSKvxXmRkKF2SQ1fKmz2nArnjeADFaCUPJqY8HSiL5Kof3ynfognq5GL9kD78tppHRWA7SjooL5atMZv2VMV",
  "key17": "2jQ5zcWmY1RntEzRciSRDFiV5pBFfiFy6PrWMx2aoxidgBUDrqojD5k1yJgDkH4rtHuJQpfULLUhPo2A3PnQ35z2",
  "key18": "4T7P9SReQdrjDpA7VyGQAaM1kS9hktPZ4j8NkR9dskgZtojyErTC7zW8GNAiPvgZYG1xoe8r5BSuKLqxFkGjbHnT",
  "key19": "4aYGwap3VuQXQdcN4u2d7NAZQoK6NJ4x2brpNzvrieAky5BqqzWdkTNGz85aWpKZa9ZGa7yp4PmFpi1B8Vu4rNsw",
  "key20": "4T6St5vRP4q5LxzRLj8kBxbHp5j1eCTigD4JhC9UNErfMCNJbcU5ZgCdFTRbsZNc2XRiaxQoyx47kRE4horm7hJQ",
  "key21": "5Bcv1TFUgjcZCFhmVhbfRn5vVzkBVHV79FHbWJhP4uV84TvqAqfYVnszT68GbQFrtREEa5b3XXSDSgyAVbdFbdwP",
  "key22": "5FWV5wcpHYMeqGu6L31yrXk1oZxpYw8vyLTusGu8BB5ABSgV3H9z6WdAnURsewusJ8j5Nwtm9k7dNVjm4MfpwFGK",
  "key23": "4xGNK37m1aezE4AYPghrmz2qUKpwCvZo4rzJeHLojdZzPecwsDdXJNBpci6NWauFM3cm4pR7kVV43gSC4GkZDQWY",
  "key24": "43h9ZE8VMYCcNhef1nsEzhbc7rWMCYt5K325rta5vjVmTtcT6JWVVwTGUbVvw9Ssr7gpeLrhVcszimSLHLYo2zYZ",
  "key25": "598HG55A5N1HjBauf2b4rZoX9ExUgyvhwnmrMFLgSzsWgdEQPEry5vphVgnUJkRm3eRSavezXRFFZVSZc41wFqr3",
  "key26": "2Z3bnSbtLycK4y5Ykzd7tgeFqz9jdyxaK7FvNboXpvse7u4cnu7ywMdT5S51b3TW8z5eJhUYuzLQiLJgU1pmcpRK",
  "key27": "2rChkDkrJi7bifTBtkxpxxUSAYzbrFCvYxxrvvAyprmqmKyCMfcsmidRmw9WP3diEGKb15o8R3ffBYaxCuUHJzPr",
  "key28": "2BQxzxocmGD25tYibTQxHcWxrWvgx7n89ivAGESwsT752bh7feRyhTcyvzpA8kVTUBVS9ZMSLRJj22UdLjVSSapE",
  "key29": "Lwv4DcTNrSJJAtneKsFBCUzNAUyCRKnvKVzBtkmSPYcWTnJc4LP4nxfsw9nerUQruL79UdSotNRmN2Gg6wgBiGW",
  "key30": "moW8iy39AWkYBcFJ1HdFVr7uPDvZZQxi7JBwgG8BugdBruhJvPSpfVW6xn3hJyKEfMGWaKLzuhuGc8HnCXUrafs",
  "key31": "3u1WqoDGBcURnTWxk8u9B8zr1Hmc3kE6uU1oSHATnCFop9Tc72nyhQRb3JMMGM6Kt9B4dbk2cTQWtgtg2c2NEEEM",
  "key32": "3QtmkK6fx5d7Vo3c6DwirKxqamENrPxyDG4BMDP8DVnhCCe2VZNuzhWMk3nmL921fgfmCP5erFwbpnm7tYLWcPWp",
  "key33": "2dsw7qvDcvP6xvPDiPZva2H3aWtKC4isMs9XVqmG5tv962X5TjPp4hNgETgZQVohB5h3gpZqKsx3Vo8BbxMaCkjw",
  "key34": "vtWNjTDj1NhxRvDWeSLe561ZLRwFfabcAx8e5wSuoLUUc2czdkQe8mAG3ETRB7CQV19rDKxQAgKiWxFb9PREhJa",
  "key35": "4d6Zo9QEYSHHjFHniSqnJGAmXP9LKHYsMGPELFtqi1uidenA89UwjNjfdmcfid3QQk9TVVQKFyvmubrbfzXWCfrr",
  "key36": "4gmosRfnbs4M6XZyn1yw3Uuh45LPBDLjXorxj66QgiukebP8gVVwYA8cZFu79LridVZmHABHTuaxMtiC2swGS9S7",
  "key37": "51K3Kftg8t7k4EDLtNh3XPNxJdKq8hTtp99poAFAYoLEkabcS6h1hRC5ywreYFS57wxWix6UCWpzpJxdhKsbEDxE",
  "key38": "4LxYXvWMjkWPXaxWGNguCA5xHU3dDSyJrhQsyFJ5EaUvbNtKBeWJ2JcbCrg51VNt9N55b1XUY16WM852ZDtxoMbL",
  "key39": "76WvYewgbeXHseViY54coBeXAk9usK1AVJzF4PgXiGoSgFhx76oKF2mw7ud4AxQ1QfAhz1ZbFvuqV4jLLGMfv9D",
  "key40": "oSxGoZJPjZf9vh4zu41pNBtXcMpVJ7XLW86yRRaHcLXWXumAp3qPfg7c4rfLM9EfjZ2WAZYoDhxn3V9Kr17PHw3",
  "key41": "2FiUCHjnm9nHzDPiiiSKgvJPeAgWtUpwTdNbkGtjER8jC5QQqCyJTcLC7ftRzLstUVUzxSJoq33vyukrYWRGyt4F",
  "key42": "314osktHsbbFtzdr8vavQeJXeKo6541mLgeeFCvGDncy81JrppKujry1NNbpXjyKFEtFXVzkuA6MfeE8FD29dT6k",
  "key43": "5G1QLinq4e1FrURao777NWQTmXn2sGNdMzMkyyWP9TY1eYLmt876i9hHTKh4XaU5T5sqjgWoNwiCZ53ciAFdgqBk",
  "key44": "Cd9PccaVhNeRoTN4Mehwom3R29sEwZRw9YGM9sQDwJGw1DDjDnb8Pe5NPebiTdhqj7PRZUqYx2ZTpyk1ank1Hkx",
  "key45": "mvCDuwViYYq3QxtRbGW65T1n937jbzsGy4GyB3tVvZfMPoj986QR3F97XZAkasonBJ9NeU3o3y1nJZK2NVJdQ8c",
  "key46": "5fHm5qaPcUCBr7MDnypRAwnwSxeNn2c8stKwb6jSuFBAVDvFqyDiWokTND6D2qDj7MWjC1oPb8sJMhR5mqz7THXH"
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
