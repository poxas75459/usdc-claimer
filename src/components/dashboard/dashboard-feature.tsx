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
    "23DxYrkHbxo7yNQBdajKc5fEAWM7PsxaKwck2j2PMeFSwEM115DyXC8yTzvoHr3vqCfvDLvUGrxKFpuDa2PsbA4C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vWZedPzrmGcdLKiUMMiQA2HnHhF8xcXVPMF1N1jKPYQcmEEXyepr8NfRSiFRv9ys7pGqm8RVmHcsvgEnCpM91Vo",
  "key1": "4NhftuhVS8Lc7kSPogZSG3iKMuwNEcqaQ4E3nD6qEyYn8VxroQDtNiPxyxgvVqUNpMZuJQXVgiZEr89JZuSVR55T",
  "key2": "54fxFro4ZpbSgLBP4D55cnX3MaLQj2Tnd98s6DBpZBV7iDxpJgS4EU1KUYsZ9Y9w6KxynRrTRAtPX3kejmK8Le1F",
  "key3": "34WACzVFdVxeF2DytnwKcSQJT7161MG6kF4au2yGVP2XkAP9AtFwJq5WtyMXrtXzjB8xz4zF4feeKShJDfxdV8nz",
  "key4": "3VdkR1Eg9hys62FRBn1P9ET4H3aTmBvCw9MrqRAYAGTy1au2KGTZNjyRSRRTdGRqVRSYB7vFTxxSHA8p4ebNMG1S",
  "key5": "4TjnqXtSnk7TaTsLAHEL9zdL1GnRYg9FHPGoEBpoBh9MpYm9GHxjdseWM8uEvsbfjFnChb3bPwxQdoM6AEhEhGcj",
  "key6": "5SH7UT28KLPb5ozjdXC6MHyxmagvHpNMc7WydCmd7wuS7dTgKnnDDrfnZzUAUizRp3mrL3hLCdEkGycc9HMiJq6f",
  "key7": "5pYn964RLvpegpbmiocivMbvW9ezJQgFS6AssGZj5o2UxtZ5o29Y1wQFv5jn4KbBPWYxgmwhffxXFYeX4qT3Z5Qz",
  "key8": "3EwbQMhVUhguV5UK1AE1ZN7UrtsBcEZc1u1cYnBp2vXWBmbQWWyQznsCsVLgRp7x8b3XDwndApscxCUNH3kM1LB7",
  "key9": "UueUAPkp9h8UAHFg8aShVZhRJX3xjt5zyvVKHrccPog9fzVBFxtkQLDA6ZpGzXzLyKiKYyJ75dZHsRsTa4zz85D",
  "key10": "4ox2Boy1oqVay7ZuRVLz4aidHcNs1R96HqwahPdQcBRMuG8fbgCpAQMVJA9zsa5GjxAwN1Xeee6c2RvNyip9mHGn",
  "key11": "2gysgkXTt1P62jQE84ZkABC6iVRX6sMXnqjtnYLubtPvgck5KJo3Sv7F4s9VeUs5hjPoxEd58QBr3AuqgcYfPF9W",
  "key12": "2Coxn2a6wGb7AYguAm39bMdmH3fzgFNB9UaUwHEbRRRgJFUpH5EvHGSQwt3N54JSQs9TKKRny3xcTBpmPY7MNMvW",
  "key13": "ZF41MdHhMBB2mckEsY4a8YFGBam9m2KxUCVejomQ7jcAWmnL2ZP6ZDNgPXYo2EKU2ScyTs4eNp6iNoXBE4tsPHC",
  "key14": "5X9oiUya4upmkCafmKKpXRqfAh56kUtW4Y6YpgXxh31xtu2y6sBV1kztVcMRsgVgUDTm11Tc24hDQmLMczfksbyJ",
  "key15": "cE3KikaQfPK2XFQUc7hzCL4hmDkFWLUZCz7t9nMGvqYGifkxzvCnTH4j2LvKMtBsRaibJM12T9scBwAxwoZS2K1",
  "key16": "MtjXBwVar89jQFX8knyCoYxTp2m2qtghH2jcP2FqrWsS5KpbDt4BDj3p8Skzseb7M1v62gHfzegvb9ytKA511HR",
  "key17": "3ZB6j1sVAfQDWmBuWQuafKt3RLmHr6ufD83qto4bdK11Z9A3nA8TSa9KkFzCP2PeRmueGQg5ZSwR9nDdp35BZ1ST",
  "key18": "kN7XkY2CBXdJXkVksFP4og8MxXsoLSkwCj2zUEaR5deC3pB8sfj2rkfpBYJ3m1HCHZzTU5ys4PyEdo2kxSFpdhH",
  "key19": "oziy3F2nxkVNsL1PMN6ZLf3LACyERWjZPtH2Z5eg3RUEANyy6itGJthB8a8ryHznnfckEdb76zUtW5jjhD2GoyL",
  "key20": "2M57fAd39g7GKPxkXrSvV99mrW4G7vXsxwwS5X2h4SRwvBvTDiWpbjzStZdPB8L2uMoU6YWhEMrBUMtXbNuPbDin",
  "key21": "3bqpu6bYEBf4KP52LruG8K154qCiuhJCefamjJUtnAunZeafueT6dwy61FpL59DgjaiaWNRg7d3WKnGGuj3bySzD",
  "key22": "3uJWD3mnHyPWW8n1WPjJ3K2kEKQnaDJ7b5x6TtWEMra8VM2Moo3pxy2c4YYTXxJ1aKVRDDwgSkMEK5vD1D4DRQNS",
  "key23": "4b4Mg3x7bWYpqRbavLcyLQi6FtpYJ3JdZYGtWq7H5D7L4eQxZC4U7kCioBTJ89atVao1X7rCTSXXzYtEpXBQRV7S",
  "key24": "2G8m7ej4jxngKyWFZQuBBxNaqdjcFX5Kuxc83kdgJuQunTZniPwNWNGnxxgcExoyP99EJaCHVPXKRAedtQSMapWD",
  "key25": "hNgnpiURvL5ep6d2cKuh84G4nKhT5cXP1qggeaSSA6sctKFWbAEmktME36yQNonyegYHxefGGvS47d7ddoCUBBm",
  "key26": "57d4zLEgDWDkwHYMsiMw2Yha8fz6xLwPk2ZvJsbv7SodcDwoXt8pz1VtPEepky4Tta9pbMrPijrCkJQE6NMfet7q",
  "key27": "4jgi7wJJxMDpKc3atK7G3jdcKTqnEHMjTzDR4CE67bKxbtAu2h3emrnxKL3BZEDujNdnPzvLHNPH2BD5kwni5TTX",
  "key28": "BteGDD6QoNjmWdfCJ7dZzCpQ9NPZrQ96a6tSMCmfD26xr5GGp1uXonDRWNtg9abGkb7gFgnYF5rARwsvfFxfwpB",
  "key29": "3Xzy2iRdakDfDcPtgK2gKub96w1A1idnpu4FVPDKhViGZJGAoVaayRS4Mtgj3TnrAXGWXLL7zxkBaGpF5jLBARqw",
  "key30": "4wEWESeRcRdiWH8LpFbSa7KhGNaHoqLeAZEUXvMdetRRSQJaner1WmzWE7KQ9RQ8HBvoqRv1QkivjiQcrmkmXoXf",
  "key31": "4FroxciMxWCAmM9tLYnonnCNBnxxarFPZFgQ5KKwrhr2oEAfyZPsnj7u6cuDRYkRc862FNNer9Bnqt7qgCF8jrLX",
  "key32": "3Cs8BS42GB8EpU7LK6y3m95cSjbZg7dnua5RPyuxUmeR6FHH3ra2YYcUyunFZhTivdsQT8cWPxmzAw5vHC2N1bSh",
  "key33": "LkjRedjJ2r8YcsZ7C31roFCrvDBJBoM2FMpcog2Nz5WNAhgDrfoxRrUrrbPMHbBmcvo7fQNnwUi87WwhpwuiBx2",
  "key34": "2igjak2NwfnDWAmTwWDVVTN9bv56kWXuBNj999Mssqfp7aSSpUp7DdDDqpKdqELZrVpiWEBWX96BFu3hi6LLtXRi",
  "key35": "2JuS4Uai9RVd6G4wfLAr7L7X8RCv2KupXXmu1ic1s6HYFfdGUVL2wafQXWVz62swXjGQK4P3RmCBWiVRqjYDcmL7",
  "key36": "Wg78XcjThge6mDEuKy9jh7hTXAJQQXsEh9nap73CRjcKVPiouU8eX1a1dRyycMtGz5ZqJD9qDDAzjJ1wJKpLqEa",
  "key37": "4DHMWRHSviMBxporKLVD3tUJxJdRqjv4q5RqWjbw5bgGzBqFduemmcJcnS9kgrSRwyf2AsWDgQnYPAVkEhAMH5ha",
  "key38": "5f6jXgWCb8tbqZK5vVFXAZ5P7tEynPkaH9y9uG73yWgX9gZ2HfKczPa25ZPrqPFuGkpN2p6fY3CMAQJznDWpXXxi",
  "key39": "5U5vp2eQGqnrTY7qoej9Zp7r3ExceEe7MS6NhTP5fPo5Mv5gHyRNDrEbmLvBpgmmh88xvgjGhiMiXTwKWuLXuh6d",
  "key40": "2qxD4E6NNwE2AjJn9wcokY2xBChfDqtJvPPScaNZnruwKXZVk26EWuHWZSF4oSNFCx2joMLsWZ8daybu6M92xaET",
  "key41": "4TZgbyGjG6Yyfg8hNSV34qob8SoCMRrVNeTgC4EGr4qVtvzBnxM4HBhDwY2wr55DQ5xHS6QZMAd9jsenZrnoLPby"
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
