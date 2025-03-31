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
    "2Z6BktTTpvjxGTrGpFHKzAPcgHk84RK54fWCUmFKbWe82LbgrMZDjqECh78JYhvDp1MMpBMgCgxMJftdcUQESeAf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pjbV4Hggde4mEEUh5yowHRpQPHSDoasgDcjXLujYuY7UYGoSLLX9T3Ap7BdcFccpaAHQjUViqLiGpMGcWenFAN4",
  "key1": "5HR7sNSyM5mygo5kDDeL3qyfptdpJBVVGrSVxmj6kNqHUEGAVHtZrDTB7gikC3HYJ6iC9FRz7R847okPozCuVfiC",
  "key2": "85EKnMhLuEdTk3xq9Sspv62GsQ7UdhPEBJau66q9BfnGR9SEhzH1xji2ncvRCUAohwcwXGJRRqzg7jVcCPgLqEQ",
  "key3": "SBEdd5Vofp4ZDKf75JYgH5TDxTjvhC4EN3MjxMyibx8dtsvEC36SgypYoqu3RSJ6FrfV8VPKdMQXd2iCjyBALtK",
  "key4": "2qYHhBrG5tpbJzbSbLXUHzYEJaYDyYa6xRGJftPNemShiArXAyTTmyFVR95gSBRB7eJp4x68XJA5voVpFerjsevh",
  "key5": "fvWJsaXe8GzLDMXzmk8BcsnP1P3WkPtZmXtzV2kxJMntmiDSuZqgt5VWs6SYwmF6pDw5YE5Q8pikbWjqCYLfzqo",
  "key6": "27WX6A9RsRFLY5vxBZWdRHmNwerzYCYPK9JVP6Q5dDEdeXtASkqM97FB53RHujTJSmsXxjo3UpH4eshJnWyyMMxa",
  "key7": "3SZTh4wACmKVGypQKS8rjxsxdmWbjxn1A2ugmQvgc1obFVK1NMCM8zzitSoyY7wC1E1vs1NJZb37nEusD3uBzKaM",
  "key8": "2Ewj7WLZyuBRc8SmkEogJbSGE7AP7qRQNkb7nBkMFDAe2c5zTpf4F36BEHFomdp8PqFc1TSQW4QgaCtZDoWfNQzz",
  "key9": "3oUF61GbmKHkwPdnhoKGoSyDunMZbLAFirXVJL2MmLsAvcWHso6GoMzEni9FiosmHx8MatP7g2jCPFF5WtBNerCx",
  "key10": "2nm6m6ErTCQ9gZ46Mua62hDFgua2hJp4UkwX7C3zFGdhicgh68ZZV4ug1MtW3yCoGbyDwerdYzRQyz9dpSZKcxi2",
  "key11": "4g2MUkHHgZwLdJAuc2kGnM1YpRiCy5aaybyHN6LC46eGn2f6vTXMiMSNMuZcnUVETjCXj9zfJTMG9ERVxgpJf6aU",
  "key12": "3mAHnf1XEo69NDmUMzPraj8wYbF8fzsxtiGCXTN5qbrk1q74Ls8DpDZMBBrhTo9r9f4BMPeRc5rHzMQbNbFaMHDn",
  "key13": "2JScMBTrKckMR8znokN8jpEXyG5kauoxrozpUWXeZQxnd1nTM2wkU4qnfEwQX96EBWnJJQB651ymTyfmJ4bhsGmZ",
  "key14": "4sGWCzTL8mp66xnQfhrZPe2v3Xn39GDeWsCfCpvuCo6AfdzbBSBoBfymrBwhZjw9THzWu4XBSjjeXGYCuq8rd9Xt",
  "key15": "4jUWUw1UPNCSmust9hyvdTAwsnTgnnXRiEdqauAxEm5ajpyBmTtCPeLJNbYD37DzJAM22rmiNfGbPEeCok5Nwvzk",
  "key16": "5FxPieQDXcYSsZEu6s1nZdMisBwvwmsx9rN5zDGYRMyeCuQNtceQnZETFeM6cz4ajFHspPMG8incbA2inmMimQJx",
  "key17": "2f95Cd3P33VD3mD1KjLHH1XNXy3vAo1qA8rpbRNro31egBsvhQ5cQgUAGYikBjTx381UXaMaY8W5xxUjW3539fSL",
  "key18": "AJAe6CCTwk98JWdfP2hkHY15zMWrEEUczFcM7Bh8Bp2F8PZTTa4kfLy3d2ybjVfZuVY66QVLfPVx8UMULU6r4Qy",
  "key19": "BA3Sh44aqKn2fhsfVAKET9kWYanRyX57k5G14cwnw1rndaaUMqrzUgxMhJ5e8SHYCRArSJfq4DKKFxUCNC2PWkb",
  "key20": "2QYSErX52DPRdkgPeo4GvSQjUssN8rCYMwLsQc6itbyg42e1viXkmB96P9Y17nG3GPZvbwuPhpQArN1RxyR3kGWX",
  "key21": "3ewbtmmEAzXudQuknWCVvSmJuMuXsA8rTBc1jUaihYafvduSjtFxi2wdwqdPxfNMiqkx2DUrgSp9M2dpw2i7ncVK",
  "key22": "XhMkF34fFPzAYvzWmmcxscAt2ZS2XDgdpfDZaV3dPr7UZYMKUpPANcZBUUL6v53d8jnhi2Lx6XUsAEuEJfkx7Wn",
  "key23": "4PemMBgVsB3zVj3rcsyFFfYbn8xzFgRYsP314AaqQCQjk7tHTXXQMFNcy6tJRrgvc9yoUtEoTpjtcZ1bB1DFLRmB",
  "key24": "2XRKDFYYC7xNsM3Udh1K2ziTNUTGarwiLmZiSpHh5j9QgpJ2XbCtDqdNK7KhLtm6w1qZne2oRbYe7VDtfsMuLKC",
  "key25": "3zEkBheeRYudtGtWhLLYg1314Q2vmgVJYjsg4q2jM9oYufLaZVZbR9LQgfJg2r2SyHFqPCpouEKXgd3e2xgkADME",
  "key26": "4XVjWeCdnv55uEoybmgYnyoAv45hk5yNrtSyBW5WXXCfkLzb9Xdo4wFAfozXG9hoVz64Wt7XpUaC6bVt4ybxq9pw",
  "key27": "4XzzukN2fcBRZnG3eEHUYZ3mNc9VqhzG8ZmumV2JnMpFrzdfHd7QQXgLd7GRi7wpBpCZNUHdt6d2ZtRjaPnZfXKi",
  "key28": "2xNK5mHv9WzuvpydoC67875Zj5EmCL69er3R55VmQxSZUg3cyq8nLKWpnwV3jidBatag4Qj7YRSVadbEBqtHyyPg",
  "key29": "5Huq4VM5AXAmsBmTrFHipnHfftHLYpQnHGMJ6Ltas7DxssGPqEwputLfFr28vnJFRzFUYHQ6htASbQUbcnQS4usA",
  "key30": "62Yr7z5rRBuHvJQq21DKo6jXjeVKpQfvh8Cbot3ek7F36FbuWXSYr83FWTv5MwZwS9cSL1BpMTUMUhxuVYYDXQrg",
  "key31": "2muRgsuBnJ8eoduefNQJe8X7sLJ5v3GeNAdNXkTomM51wmb1viyzuEsvUNGJiws1U5t6r28EEvwyWkhLRWggb2gs",
  "key32": "3rbXHLjpyajkp53kfrjEkYBf7Wb34BFBc81pCNvqVnEEfJW89SwrQaisagDHUwP5V525YLz8BFYZuzssSnmmV55n",
  "key33": "4X95tV19WvPhcJDj5vnTmmzn2DhiivcbzHHbpk5q8oa5rGGQJTYGWrLRUwisp2o9tcxEgnZ7ELRdMwS8ePyVoD71",
  "key34": "66A4Kw32EqmBcQdqqq9BXd1xGmxY8Xyx4n1xLfDxZ2opH59ALDqSNSgmPgEEFdJqzZjUPt4yxysD2HekJMg18faZ",
  "key35": "2jgHLVYtFQ3hoBZBdCeufFgpjHuwCnhE8D964QrHYXekrrZzwz3uoaauLK8CewTfnB8YJJ6ALcGDpJihx7tAmduS",
  "key36": "F8fhEp6DnSaHT5MHkvHJztYUR5f15zfeHodQTkQwsH9GTDMKqsPETLfJ3FUwxLGsEaUeHxckj9TTXVGp31pMS4H",
  "key37": "3CeL7bRtKaouhmFKRrr9FSxYA8qG8ZNVQpkuNH4j7uhrBdzWGjBbfq4D1rndxgGGRHmGANV3rKW6VEVRUcgXR5Gj",
  "key38": "2TRZfLvDuzxazwLCEfd6Mme96ToLxa7B51Z5RjsM6CJmKeyqTuav1KxULe9H89o6mobadvd8QTt1KZic4bKa6u9V",
  "key39": "4GfPte79iCeiHjTeHdRwqqwYDpuUufCUJHCSLGDh2ZFiob8c5rEWkcHi1e394ASVDMwvxpp32MVA9u9ZUBL4Ca1y",
  "key40": "gP5HGaGyYukKQT2T7Qvz8mwSsHcguhZntoj3iRYajXReftG5HSoabjfD5nnPfhgeJtBDm7WttKkFfByCSPM7QnP",
  "key41": "5Kw4CBabZwAcsQWgUhfUX4pU5EN8f4rrvJU1zR1EZgxRnZxrfiXLiU6R8KsvQvjc2nEaXGFhiEBDVdHg5caLZyn8",
  "key42": "47G6WTUtd6whQB1Nhj1ns5hQjazL5V6WpB7UFNp1sea7J8uiEAk1cmCt2KUF7o13dKc9zpQwXZfk13bGu2MELoN5"
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
