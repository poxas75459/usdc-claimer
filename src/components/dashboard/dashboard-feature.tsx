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
    "2puDtk9ztESYGCCJpQxdKU6bfrNVwUk9ZWw2CHCpthHAdGWyFuR2g1wrZWUVx43FC2PvVCVGKt5s81dnWHRn2egv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pdkhaokTC7V8G59nEhLpPj95BYamQWDa4tAd6LKZyWfKuw1fWG7uw6NqRHWeJ6uZJ4zPkMBoJN95ajngDEzz4qb",
  "key1": "5fWHRpcYNJBsKYgMuEzAH3PZxh2vPETagEeYv9TL8pukhLSazeYa17yv5VyQut24wpXx5rvMUY4kDD7wAFNWGoe3",
  "key2": "2dgAzfGd4FNGHFUBRnKHTjjGk3Vv6956iKoeUTntVp996KcoC288a2PkNRkBfUPs222uvjrrBafrkK2XEsRSuE1E",
  "key3": "5ZqenTfeWUsxeqME6qyVny4Ng5G953SFMd4g1fUpnViQn513X3dfX7j16eAoMonmgEi5qi4ZbLDMnAGfPMjU8VrT",
  "key4": "2ZBbKMZZmZBH7J1sJ9FJQXVbUQHcc5sdXVoovnVSx7kHwQvxVpuTDaDzrAaNJuohqGsub6BRDJhhRw75wFEBmkyR",
  "key5": "3KyKkH9KjWv2mfpYEfTYiQ7DHFYBvRGiV4CcBhng1WbCu6DhhBvK3TvGbwvKR6P7Di6CrygFXyHz1VMYE7dq7SRS",
  "key6": "4HLoZbKh5AinfNqNPVGfVMYXgWWoYo2zPLzeB3CPNJBcsM78MqrkZ5sDon5TPHGdDY4voTRKm9gKpjuN9MF87spk",
  "key7": "i1TkHBEzfPEWX8NmHEnavAD6ajRtzBb5suTXvW91UrYRfPizti6s19f1QMptsmfvb3oB9NjaBccH2Zc9qFZiJMc",
  "key8": "32rqKBrbe33HY2pBdSEbs3Qjgvmhe1LCzKAJmM15R4h9teXK3T7Qi7Rd2jxgMVs27gwCvNJPonCHz9aWJ6cJSnMr",
  "key9": "2BbZeR39CkbUixSQz1AMAbMuuCTh4zneHkzeBKgspCByhd3tTTxr6Lx3KvFsoGDYiZ7quyd56Vvbkrp7Z3MDd22j",
  "key10": "owPK39HDVU1SA3obazty4EVfy5Q7UNWNzryLk82tMcZ9GEBQMZ443LsTxmHFfptHYhAGTmLe7tBNRaz2szm6ACm",
  "key11": "3tByZhc9ChhDtN2c8xdNbudFsjX11GtSdbdE8fjNrz4TUT9eZjFgn4VbcCnkdZVN3mw4HXx6bsdGwT6cv8HJ2R9g",
  "key12": "EgPhuK9Fz5JFvAEBUNzK4o2ZJeWPe7LkoUZBk46E8roXR7vEft5pSJQzwNmAmoNM7dSt7g9qFD2pBTR45W3umNv",
  "key13": "5kmkuNDcuFxTzKpmwcNNbDXFiRrvAKKg4RFydJAib7ov46PXHMLiZmUHP1EGDYYrwtiLuSGN7vgZvLbsnK7i77wG",
  "key14": "nx9a8aZKwhxn3pQGgLj6vY2wy9FApPD2kGyW7KJhK4iH8yQ7bKoHV64FXA97mYeTk2c5hDaRPHjPNyVAbVQbWGq",
  "key15": "58xNCZd3ZEnQZpg1bqG6cq84yVpoXmofT23rx1Vj8KApD8kgtA88SDsukAUGpfpmfimG3aLNa15C2QibhNxubS9a",
  "key16": "56rG6m1gSxGw9Yo1kLvw7aqnSbuTshn9DP7URTRMH7oDnyqfb2GmiBDLHzqnGDQTxNhp6Vzs9Dx27uLcomXhw1uz",
  "key17": "5u2tdYEPT1B8heAfUkt8ewie8xMfv9yjpmAXQNob4aU2ECLN9kMLXCUdHbMtX5m7NCXonr1wUXzKC5vh4LJynb2W",
  "key18": "5n1CCbfAxZu9mdHFCpP2cE79nvCjhdr8SvLHgyiEbNJGxSBCkbh6GTr7URk3tpBAeykyVZuCCpMsbpe8jJgTSznB",
  "key19": "4P2PCeQezftT4VkAxtTKAdvmMPp3WT9XvLuRapk4wDu5g3o8jLUzv3atBXc1wydpLSYj2yKmpZK5QiKbRPwHYfCv",
  "key20": "3C2LeTGpxH9R213mShUQjun5Doqr16KZnoSoX6YRM4nJc6nhqZcrGimhkbW8kvbyoyRGUM6rUXAaCCz2KfzL6evW",
  "key21": "5b7tFTjEx87gwYN4MjxUKGzMRAn13QRhQMABsDZ7nPXLUKicSHkM1pxRW3qAcWyTgMpJqvASKUn85GXgXjc1BjJq",
  "key22": "2T4AcrUZ2WGBYTdykPNkPiMdC56obCVQ5Suzq4SKARkeb9h4aDWf4ffxgU6hbZruced4P9ZGM9AvqdqWmPosUHMS",
  "key23": "3Sz27iaWyc9W5oFqe37JiPFhrRjBZsod9A5SZTSdY499Nh3CdsV1xdbjzdTJmMxM9ERiH5rjqBZwnNr9w553Coph",
  "key24": "3rDoeuyrrrjfVPERR3s9Xmie3vqnay66W8Rt2ZFJ8aERwmGrdTAyNTgmXZ8ydeo7kWyTXoej6YwDZxgnWF1zemjG",
  "key25": "EDYVbJF7rKwDqF8i1mPkHR3Nduecbkg6JEzShUJR65MM7cutbok8i1PcDiBcy8QLUMdy2zVYEBUQsf9HWSJPSek",
  "key26": "JaUz4KHB6Jkd1n5VRboM7CDsSH4bUnpATGdAtbtb5WtTnf1DUfwN3MpRhZkbbCoh2YQnZwgB9Bd1PNAggrUcLJr",
  "key27": "nT2zoQjkMGCD67CpHHJ37PbqiAxmB3XNnqRRJYW6RGvJCZUSuZh9u3MGYL84BBTYeHyHgcsv3rz5NBmDMkMBmJQ",
  "key28": "3ymrJgXq8R7Hj6VbCFsyDwfnT5BUd4S9dfEn1wpsgW4y23JrwQ9f3AB7UAk4mP2EYr8kb2sKqmJZXm8Z3iKk2LWd",
  "key29": "4CJGidrzLChZCMupktt4rd6AGMgjNPmrw5cpa9HPWioNqjDE5mortcSSGyWpri7hUSiK8Rigqv3f55JAxDDpbvSz",
  "key30": "2A2wd24KEoz569HZEgmVaPHt3CroWYcMDbDUDjSskShECzGmbuMAqd7iPJG5LhVi4jJ9L6t3VVDyHhu6VenvhkFR",
  "key31": "48v2STbyJT7wQMp6wJeoKUcQsQZgqFXzX6vKUC4cpR2tau1MUEWtbEqQUytznqGF4XaVQgqPJ6cngSxX1L68SNw3",
  "key32": "5XHZRSrC8zpYidLX32GWKGTmKBTo81vymvF2cuAVCmJUKLVvKn6jP7GgRBoZMZYab9XYS9NqTQVvs5Lh56ptkBsG",
  "key33": "2ufMaomqgBf8XvLbW2kcWKv1CMDsoTpsedzsMcdneS6MCc3xCM5iRS8S8GMDdeWzrxSs2GGZ4jt5HyG7TrKQbdoz",
  "key34": "66WGA8UxJSdGnDCFrjDpjyRCs3dLxoMQK1ST62vtzZWqFprLP7L5SSfCLUCDGxde5XiS9i26GeiomZEJHFvCjYrE",
  "key35": "3oPGHEYLahuqNXXTG1Q9iWYPwjoZcvspsK83GVAeM3v5seTHVE1bF24PNvkD2oPVBTxpTgh9HVdSPdXrwKtYQ6Zg"
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
