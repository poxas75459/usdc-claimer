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
    "5Ct8QGruHEEZYh5ait3dSiCRbphSZjn8FQRTD2RwEPbYfxgC2PTYr3r6L8ktruJGHoJcMYFn9qWMy84AGSMKd7Fn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eb4FFKVN1UYgjAxMvKvRoUTLxUMyECf4n89qyS3QuSWQgrmW35UTpqufBEjxW1TN1FLYFYartmi3xrY6WSoQoP2",
  "key1": "FWPss8pJZsr8NPqLBkgYJKfnaYnWPfDj39ySmj9vScoL7iBxhN5uC9h3BHdheZPXeNa9nrvbNtkCSG7yP7SfZYx",
  "key2": "1MEZajPF9dVYj9u4FPQzZQRjw9335cWBPMvBuTXf7xsQaT6Y944BfahN5HzdkHmAmtcbMw4Zz2nfeDBtiTa2Sut",
  "key3": "3RAoey7AvDELEnS1cBKYhYncmZhVDPVtLGnvGeQiTDQX44k6PPpdqQG178diAuFcnN9cEbiM2eNv4pJCEE2VDj7M",
  "key4": "qzG7jzthiCzyHnN7hjfrG3d7eeob4tDuLQ2isuuGPCCa6hffqQHMV3WzfP8TMYeT6DecSun4Pus6Q1My9kJNYkL",
  "key5": "4xm66FREa2ehv1wvX8orUCqanGnAiXrWAVujqJiQkrxyEdPwjDFwcSsTL9v9vGCqYTNDXt5GorJcTUdidWSXhhSS",
  "key6": "dhcyQ8u55o4rtvfSYF6f3FFhdAr8vkfDgBHKvuk8nFZyWj2Uobx4Ry6RinefTUuX8oraXWy1eRKYswCZh1Eymde",
  "key7": "25Ta4qpqYB1UVGimH7o2WTUVFVfdrRMyNBcG6bgV6k81Aw2srkRkx4keYDyJxBgyJJ6EFAdBbZQNeLKSvqjYE5Ah",
  "key8": "3ce8NtD84Y3D1WQpFsKLKgWi8prpNLVtjUA2wSuyseYkG8bu7UNbF2nKzcvN12rdtD12JYuih1YE3CAQAmAt51x1",
  "key9": "56vduqxHvmkZeN5G5JKkThbeDvgSUejqQqMpoV4yL1JVcp4fAtX3uc6tVH8fVt3UEMMmnYQFdfvMNbvcXQUYZFcg",
  "key10": "4qVBxfUDgSUZggmDp2XT7undGCYrZSRiJjQrUwA9WtfLrFqaxwYGkcdiYDojkXTP6LEsPfE6FRyJX3vuyUSvfhQa",
  "key11": "5ZeRwvJxohD8e3wVGqq4L1RPywikVRQyJaGDaLBp9RwCBwGsrbRF9zkQgZehHS8ECRMijBTi62UpwEgJd4nmLajr",
  "key12": "5o15hrSmKhta3afsgHo5sso6M8qudP7iXSHaBFvjBLLwKPDugcQ8B6AkH5wpVCGMVhEaTqwqMPYgrvSrxJ5LEa2g",
  "key13": "2Qk3BJq5iKDd3tNw1qXzjpvpeFZSfzufkhNm2BkcLmARsLGoeNLiEfNCtQ22htiPbrQkiazRbDjWkHYAYWz2km5Y",
  "key14": "3STy3kBvVigo1QRYYE85hSfPAmUHUjdCPm9jWNHxPVdyFvcxXzNXM9XmrW6pfoFYmVvd1FnV7dEqVCrz9jmPHHRm",
  "key15": "2zusHkvke6bfhQazxfcLgHKf88tHViYnMR2gSfzs6HEiMvYG61Ckt5V2s7Jhq7HtdeWQYnTJe4TXe7xkXroFQdWA",
  "key16": "2CYptk3ynp2Uw8aqsZ8UsGfCVVrXGosiZVtjTV86QLcCKxTuFugDR9QYoBPNS7K91eXoj9FUph374Rkjr5Rg3PiL",
  "key17": "5Fd3qhdoqjp8J5FRtF5rqsT8sTmyuoo61HKMck8dLdEiZ3i2n7ALs9tPPMbrKwQSNheLdNW4bvCFQCfS1NjLGcfx",
  "key18": "3tcfnqkfGUKX1VCy3QGqWiVkzrYkKwd7aZZpCr53ZEcHCL9vaTUbMXn348cwku4v4xykkMhTP4H5FhPsHeUG57Am",
  "key19": "3PzMLKonk7r4oEqamENDrBrhUwmmMq2kmzNqqBZSbrPggDquvoBipGUt2oFWWT7VSCocWBKx2yhUvVbKSusRR37J",
  "key20": "3UHfomXA67X3paiPcGiPckZ7AppN4uqbKfz7Bo3aeHpEvPiDCdoW3AWKRTSr6ZYQek9j5Kj1xMr2cGZW5GZHxzCe",
  "key21": "3WmmyykBYCf4P953KvFw62ZWJaQ2XPqCyjg6EW1sdw94ChV9se6fEai7Vo4EDXDYortP1VySjqFXKUFq1A9EZ5xM",
  "key22": "2o6nsUPVxWhxXTLpncnGexmMHbSFiVwErDGrSBKcPV3hn5xRRhxnQujByeBnKbSErnUBaZEJ8a856xWi1zyAHW5X",
  "key23": "387QbHnitUBQJ34T7ZVJ5QwFD9jGGsbzQwLUuHJv3XNvc1c2CUSWTcv2cFATvkUiwdh8owWT1qVgUjqSdRXf6j6F",
  "key24": "22CJrkiSybnP3KNk4p26fWUKhZQ7iB8PDChBqVGaN4VQABjN9MMvGuxujMsU28fyKzUGNB6FGAWNC2FPiukpqkVN",
  "key25": "4VDYtTy5sfcfZ1WJ6j4GFEmV8MKhNc7bM5dPo9VvWVHjDcp91D51Em2rmFRxiE2ikpvRhdy1x8FZfpVNEtQtCBaE",
  "key26": "3p5K4gn3q7mHtVBknqi4pi91krwe224Zcidtgew4pBJSpeLMYGovP4v7gw6X6PTLkaCRQ1evdwr4EaML8KNZRZsZ",
  "key27": "29sZeMcg4mfQ3GjGMZqJqpRxYhhYFFJXxGXD7H8nHmMVqUEq149nBHTq76noemyaGzaiD18Y4JymAEjqadrzcDL5",
  "key28": "5iafqv6wC7sNwUvcQatg7hkZma2AEBhc1fH5baH66VaUtwYPuyusmnzEwRrVY62SAcWoK2U4qzmgrgYCoFNya79Y",
  "key29": "64YJyk9pKVNPtQaR7bn9YBurmn777XApEk9oj7uG2HuTQgaSX1ZBxN7kDWDqMdBFNKJf2Q2625PrbF1a3fJZWxEe",
  "key30": "4Ss9YyTEvqBAbHmiPuQrwuicJJ1VMddYbD3tTsm22jBjoPMyZgRAbf3xuqmMQSE5RxwtwRoS75UzrM6cRTegJDZw",
  "key31": "41hvJV7TfNKAHCboAuBRtBr7WAfjMbJsfy6ZJR38EpovhLR7Q3p7DyyYoef1nMxAxjCRpwmd7akVbS9gQkcYStRG",
  "key32": "3ro5BFnibD5i5hwcfikNYedEDKgkKxbDMiHxa1LaY8Zb3xG26rRC8ydzfLY4UUGeAah94RgPjzA3jeZUjgDahmXv",
  "key33": "63rinNtLt7r9bnwKHsbDwpbGk4jyuTYzqebeoPRQhaj9rqSdnTo5o9VmcQuMtZoAZQ3dKDxhcUd92jAcnFrruGBk",
  "key34": "4aBAhxXsseHiwNFWNqPUsBZb1qFZ7z92WWtKqnVcZiZPKNwwWYLoQ2YP9ftPN5pHbAWtDG8YSpvkSDFua3dxC61A",
  "key35": "4DUg9PTCQ5JdD4HMQyYBqrr3bB18Ebjbny3JUvXKGAVZcJjNLk2mp5h3937M6BooNMPQDZjj1e8RcRvNVS6S4BP",
  "key36": "3DKxaSuCGWVaxW7i6jX3ewPPFHjZJu53eX6dr9wu5Bwc4KUQhzPtYoTA4usuDvFZCMrefZaSiMrvgxtMBU4u29Co",
  "key37": "4BKAtb3zQqKU2eJgtPrD3Pxvy4XY7cJw1c4wrGBJ1vcKzUpBTGUwhb4a7ik8jScv59EHWo6UeUEMN8aVZkJoUExy",
  "key38": "3PbUMipbZgn4xS1NM8ixQwdrEUKyskEGaRooXGyExEWc8nGXJ15LyMjM67hhdPkMcjN3KcReL6NcdKUh9u81oJhA",
  "key39": "44EAxTTKbdFJ5UabSEBUBgPCuSSUwKZqmoUzzuaLgK1BFfN1xxAvKG1y7V8Wn6AUhy6LZpTGkqaoy6riqGD7U3Uq",
  "key40": "jVVEHeMc7xX3Y1NjfzFCq6ZfSnjaUfcCLXtwxULxUr8vWDCHcv5cAUxJ4sppboQ1nYsSHHjzAbnjFJABjh9uB5P",
  "key41": "fYHNDjE1mGb9spQMB7xUog4pir6t1MVNt8f5MTXKevnEHkrXsUK3fSBhHjhDwH5xDNZcZjVrx9rt7Xs7QypJZ4P",
  "key42": "fe7mY1cR7kQHJs1d2U6j5s3ShtPiQeeyTpnHBfsvt7DC5p3DjvCMMkZHgxQ7AyZ1iZ2XiAMbaVb3YeidubLhLyE",
  "key43": "4DsyFPEs4M9UWSroZwHcoXdfyULKbdhW5jnxASR4EfJ8FBzTJCXQKoiPcQrM8ztcYyLYA2jP3aLH9bGi5jwfsGJY",
  "key44": "62qSApX5HiiFyJw5LMwdnjxsQQrzGpr39egHmkjp1KAiCZDB6t1L1i8uz3YSMUJX1hfPjaAsnrjh4NzbMt8xkGaq",
  "key45": "2CQKMEpgs7N3qFeJGb4hgR1rYmjXtpPwkkDZEYJUrVebwusLAfiwtNELrWsBNfwCJa3k5M7HXrVd35H52o2fQKQY"
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
