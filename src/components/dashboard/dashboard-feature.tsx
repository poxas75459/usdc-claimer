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
    "4gxWXgbPKCzfxYM2zSzeJa2fsgA9PD1hsJkYZWUdCgbBN3xTC6L1mi1a4ZwGgkEUKdKtHo16hNkFMeyeBDDFeWhG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Gy9k34dkWUpJ1XxTFXJc1S64Hw7ZMrCqtjgpSwJ6HKYhqg3z7Gpwygu2jbpJVEvTJc1em6GYM8uVMEDLEVjuhx6",
  "key1": "67eMAYjWWCaDKiUSbykFn6pakQdSAGQRFikg4NcjSStbaEhnALcNE4wqj3swMqimCidnJLbmmTJ7TDQi4Vz4CrCx",
  "key2": "3oYmgRLfbDETT9pRjFact3GUw5Yh2qzHLYmg3kAGoCZ81CTZaoQbksiJiNewgyEWyQRAS9PSgeujPQAmLNECJLGj",
  "key3": "jNga6gBJfnVqMeZSC1z4w3uSnMBHhFD2w7Z8VDJNBe1THXKDnpyPk6U2ZAZ8H8CHsVvzPQPePhrDaZasKYmAm7d",
  "key4": "2VGUYjN5Ba5eM6rzWNj9xjQWvkrzQXknedwKKnZfqiPtPB9Fw41uq92oSSkcUDgAFak9vdgP4xm88rLHdKaivTgK",
  "key5": "pGDpPFccgs3bbj6F31y5GkX8vhKGnRafUposmXKcY99iFSYoXsgwibL4FsNYB2hVDaANVbK3Gxwyo1gbUc4fHzi",
  "key6": "5gehPNs3JEaXwSXpxVPeV7ZFEDd4GncydERtgXcJ1VoKkVsa3zi6mg9ohcfBr9CaAt85wJjPLRSUjnirWevgMdYb",
  "key7": "56UYdaZ1jKaQChSo2BGHNPDzgkoucadHsctUWsD6MfjNwcyVRqnW1cKnxjupD9Coa85PH88yvWLujd7jXR4cHr9E",
  "key8": "3idMVsWH6vb46oJLn5AH6qGn4brTpHS1NHGhrKXbrigkQb4BDGXZXwvugNjTf7W3ZFCkGvZqV4Y1rntABMzmoufq",
  "key9": "2QAVQpmjLAtEavJsZ1Par5pUkzQ4R3kDbRfsVp2TMhdo8Hk1a56nJhwr4DdVCEWK41v8BAaiHHFdSY6k5Nv7rghn",
  "key10": "2ehPnS3konvDuYGzJGkLbTG6TkUmHCeNjZQCihtNEfFXrdddoT7LgSgqZptnXu22MvKm98dbCxTuDqfJtq5yJ35n",
  "key11": "4DzPC7AWHHqFBbYGfCXDxZawvCJKPEaZgQDmKtFJWr452ZauazN5BwLEfRz8swfN6V1Tjh2ThAbjgZnZMoDuiJpL",
  "key12": "qKgP9Tp1tAGPUwFJWEhDTkhAmGC3RYVpATqgycUSr97Qn1WPPexD68GVZP66YanqSivcw6qERmLeQbTg8Yt6kCy",
  "key13": "3jVS4h7LKhFVyJsAmnGn3xP68M25mLH4EPnWE3oBG4utgerZfJ1vkD6siehpgrwXB5z7AL3epjgsS9yxkEjAn4eh",
  "key14": "4zGMeJUieCPdZ91RYpVrZyfpnAuyZ8ZWPoE7ptG3sMKmTxqLQFBbAbUro47wjbPBjCvvw1M7vaSY1MpMxFsjsx26",
  "key15": "4RcwtmztajYTQv43wntoubmvNLg8yFp9faidY6MV8b9XU5BQG9tCkHDV8bBLbzJSHj21WAuCMHTr3TKwWa7JXgSd",
  "key16": "5R7To5gKXy1SC71EFyHcZxUG3U8uSchHg1k8TLn4AzgdgSrAB3CZhL8dX2ZE8SwqxQrRL92pbDaTuXbwHP4UKuGo",
  "key17": "2QT2UwPUDqDuuQM7LqF3daLTqt62NsNMpchqV1DVFmcnDnr7Qx7J2mtWRY1nzCrDv9hPkNF1JjgHkNxNuqCtUTWD",
  "key18": "3U1rg2f9eHNRhY8o4ByUNuLu5GZDjTTT9NzgxBQLJn87vCLAQVNKMS7otESg9i87EUeiqG5gme3PvXhQtxbxAz3j",
  "key19": "pL9pw24xZVCbnkZ1PMbjG2ZA3GjfPgzkqb6SmUHev2M1cKKQhuNx27zpz29KbfQSj7245FvRejwep4nf8DCgfUM",
  "key20": "3yHuKfoYMixvUxM46PdtbKFEaLorCWbE2QyYFEL4poPppNviPCuL2WMAVxC5ZBvXQExC1MdAkYqmh7bZhg9tFFBs",
  "key21": "4xZ51hvhceUhh9ZqoY4u5pMy1L9sJcULAVL1x4NLeBDujRXSYi8YRgo6gQWGouqqMYYySCmraqxXLAtfTi6cFt6d",
  "key22": "2p4g2LyhxGmGtePEztTefBbtMoXZKcL5KuHmdrJpYDTvxFNBoCbJZs43qGbZXa384RBTUbBFUDFqsvXx6Qn1SFAr",
  "key23": "4FBAotWXpxZkxVAWJehCptbcqcovuYBbEFBzaQwtcTuUgJLxp9Ds7hcC4xBpiJEtMt6jcCMKWoH2Bh4o8Y9HxeCh",
  "key24": "2qTtFuq8Z8AfXSWc8WtwT1st9dyqiuFN6MQCANsMV9AbGjc6Q3QuVt75TqpsHeQTb66Jo8mWSvEUUZD8FUWUBpAi",
  "key25": "5i3oF6AHMStJhxgH6ZdV3rqv4xCdXxV8rUg4QhY3wQSYibZfFYug4c1fUfB2xQsDkEJVxsMdJ8shnCoutqCxnXRP",
  "key26": "3yE29A3hqanHorRbrK48QnLR7VxjqETM8u6yxpyi2eUyBSFmZoM2PNxo9sXhbZtiiRrWPhgodnhqaHGowHgExDdK",
  "key27": "5S4E8yvnSz1q1LK1SdbRbnHUPuRmn9nmbrvrD5RXNU9wmmvhUn6U3v1kCefboJZBXBi7jHqFxyCTKpD4CwvvCQmp",
  "key28": "5ZMyKZPjSzV7N8torqhYXDxkFZNZtSXHWYty9diFdfcnWr7kXkfBgV2um4JiW4wedMVYNTPZRJDU7apKqEbwzUnM",
  "key29": "4L5btVD2LZo885vkH2JiFR2SbQMhYBG9z5Vy3yaKg3vUcwy1no1MPzv7n9dTBbNE5LAj8ECc2CXVZJ56QxgdDf4r",
  "key30": "25A8i1vizDGLzft2Hgc9R3HzKNnamwW8iLBkgs7tdG77YcdMHBxw5KKpZhxVXe9LmRjMptrKR9ab5HvwnVM453m6",
  "key31": "4hSytXioUEuKAK3UQPo9ggnVutCSrNTUGJYYvQ81pEyiJdyY3YnCRWVYRgMUR73YKYRTRuc2sJuBLEKWj9EKV9y7",
  "key32": "3aHJrrmAJuynutjnPaC28NXnSvbiwtDpEstfy5Xh56rtFwXQmMeg2A4hhAX5PCbJxRn1XqtpAnG6HZS39mjqrJmS",
  "key33": "UmbbPH1UJXTCzqi9zj6GJw2rY3ezjtZ9TyTAwLoucyQx8gJxkYvHxrTu1NxuCxTGG2Yj65jkLiwbaCDaDiJhVw2",
  "key34": "66XNLFtWQHxXZ2P58aMZRTU58SeVx9LJJg9nWvH98KYG7qPZLvCeNUz1Nsp5irQiEHdSu2fY3U6gB5WnnTSFJK4h",
  "key35": "3ypixHJ31cDVYhDULzFghQEn7cMazT13CBv4hSywKo9jYfHYVow7whqHoE2Xw5PoNEsR5Gx9uxzdk4Q6PWzQ3R2E",
  "key36": "5ttLdXoWEU6FrUxcgFoGteiZyA2GZ56BBXS4h8aAaFcEXVGg1CvmXjxEuAEHwoLYkxioWJKCtDsbrU7xLvvD99yU"
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
