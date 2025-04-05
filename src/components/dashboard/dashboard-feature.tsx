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
    "3arqgw7oPgjMywq8vm6dPyNuD7m9bE5zUGmymqy5rJRiSzV6epMmgAu8WCoQhfHZ4TqdUva9UeMpmJK9SH72xDit"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cSXM6DGqmmZXxDshysmZNcBZevanAvanMdnB6MPFaRYXQaN4rSWYNQxwc7tsCRvoXUApPSotGwR9SChRRPvbcpx",
  "key1": "27JRGGgF6QfEww31KrFBJoo9hsADiFybVWFhkqbK1tDjy45aG3KPWqVRjNxg4cwSwEhZVX8nuoafzzfw5vRg8Aby",
  "key2": "5Fyc5ZTYuqGkNnHajUADxURGxN3EK1UgeP1uc2Qcz9DKivNMqPRY5ib1HcvHiyxqduk6sM4S1tKSjCHggEKtS93x",
  "key3": "YRx2XyFmzGcuo2x5FohMuM6nbi5TJJWuA176kSCA9QTW8FoKtdrC7tFgmFTGzEFEd97J8YoJGGCZQzm4P3EodCg",
  "key4": "3FkpUQH8tme9U56MsX3qnQwcm8ZBN3d3gdtu1r4WzHb7acftmVfWPbURcFdP7aYXJBjMxoDEfwJUjemJB8aUuoze",
  "key5": "3pwtAEQrLNqTXndw3sExcC3oBcukMbCmGrWXpYPCibZAY5nWVCeYcqZR36VjuNcG6WkuTt8fn122mLq8KyVy8Lgi",
  "key6": "2T6yWLZ7V1pRA2raoXurNjohfdv7DRYhySSpGZb6AgdFqXjCiBB5ikVgVrr2LxLmTfQdZMerwWJiUwUMvtMSpa2B",
  "key7": "3WoqQVupfkRyD2jwjLFeyffmyQ3Nd9NpbyMfYwEAHhg89GXADRyJeiq7PkMbaGQzc2LhEBVxJVzQHn2c9DdfUvaN",
  "key8": "3qyPpqHceqf3pLM1gFHVMUTBfzcanSRyLqxv7PqKprNPtDVHVR4N8LndoDJuNBAUdVHWUJB74gYXjQ9rapBxsXng",
  "key9": "2SGMs5LpfRpYSiqtR7ft8tY9q6d5b8JLYRE26zNVDsXD3kVzgBN8EZfNPpRzLNYWG1vQp59ALo8TENRneAetkoPo",
  "key10": "4ETahUsVj3v6wE2WnGgbVCyVP8Ch8WrmWHNKmPbBaaLy1M1nJ6ZUteiWSPTJAT3XC12CmfydqCRYNaEXUtUbvPbU",
  "key11": "4bZr2GpTf4pg9VHzM94j16LQHx1nmcnBoiD6797tXCLcBzBuuqxojJNNeETw7edv8S2VaCo7pVqbuptAMChH1Wt5",
  "key12": "3Js8Ji3iUDWH8iRy9mpRqyUiCoPivFxyCmwtWLKV3bV3eLtnpQ5povDhxtV8ER3pgXYUFDabGxDGs7zg3LWtYnWK",
  "key13": "2ci3LEFiL7wo4uYiBJp1hksAwFjWSohfdacuRMcZ1s9byjjidamy2uXHdwXaPwbuz6UusNW3QGffLEkqLygXAA7U",
  "key14": "UzstWEbBE7AEEqDDsA1eUd9perQPyu3GfGHJ2M5USURivazjuD7cPWppDWzE9GciGmson2fpBh8xtJoJ6kh7tCi",
  "key15": "4FLdqcUUC1GWh48nPzXJ4AGSn5m3atYZw6is6mnApfuDX8gkttyStcQQrj8bTpHtwcLi3kbb7rdxtcRubFYDnKmH",
  "key16": "2Y9tssjKUeWay2vWTjh7xy5teXSct4299dW3M5b5vAaFVRhFJAEoLRVHG538QJ1BTeb8EKgbd4ocePepopXKiSeA",
  "key17": "229isg7DFh1PU7kvCSpsdoLqJQ12B1zurTQciTacUM8vhiX4GGbUhRsRWZuSzvEHcVuTEbsANpS32aUJLJWCrt4p",
  "key18": "2JZX2obcwaFfS3kvyARqT4gzDbtubnFWpyMFVYc2niiQ4AttMs5TKQoGqg1ohe3eP8P9EPtcVJDKj9hkJqxSA1hn",
  "key19": "3qZsbQxZB8s2YyWZtKo6WXDYiq5u5xPtfUjZwzWSiPYeuAwYDSRCBdQubstVu4YCnft3CdX1Ss2Ernpo2isBwWnP",
  "key20": "Aq16xo7ttBE9er66rJf4SdtzcVVzpQAh9mdgCJVMNtgChmkjEMhYVvLuA9ahJWSUNnJEyCuc9GxeHsUWqGMu8zR",
  "key21": "D8mFNAWvpKqG5eJmqaYvAKdjcvnKZDfL6njbzUc1qX7EUmVcQnWgKX1wnLVYmN41KzrviykGFp8YYtLLM86XDdZ",
  "key22": "2bwhZiuWuhQ1fLvHaBMGzfPEWBcyg77XfkR3kW1TTcdipyNDX9quCUCCwfUoduNKahbcJjXYvdRSR2b5YdpGyvXS",
  "key23": "5tvexpjx4kZ7GtoPP1cLrP2ragdcdiXPELYhDjQ4gMRLxToNUjxF3UyJFUCqfL3iB6nt3CmfKnznSd3yBysxShUK",
  "key24": "4uvLz7UzgYgWsEjLuVBWzzw2H9Ejf6CL9ZEckSY8PomjDfRzFN5WDgfwfHsPoKXhcGXztHrUQvvUWXiJiEE8RF4V",
  "key25": "5Az5nsE6GVjGYavDRkhxZk7RZjQ1Rt9Fr7e7xyuNxSLkm8id9qDQrZFFZAabTs3SegJBLFMe7tNvrYEgUbJpubjb",
  "key26": "2Vv5z1F7Qw6Nv1WGvhmcV5hD5V4iFh3p4C5XgkLWQ9meQySWs8Zs6yX25x9WRSU485XL5qGZDVFCvwjkPyVfVgyp",
  "key27": "4KDqp8YVq173XoDeN7hvoHsHs53mXVhKE5TqRsvTVqsY56fy7Hhd9awKtDvuY9eTouGruwjNiCfqBhVrvEoYgCBY",
  "key28": "2bqFFc6EMgbkFxxcvHvyaWb3q7BoHp8T4CnxCCBdG5M6U6oCNYXoSUczvxqt1VQa84xn6n4YYPJ421P3cLZNerkk",
  "key29": "5HSHdoUda75tzAtf4W4VdNLQzUGzCZ2h6r8B3cU5JGKbbb2Auxec7Rn4vjHS9ASkmxErnG9TuDyCsm99oPEZuKMY",
  "key30": "22gNDnHFLf37mGXkPRdqhdN5v97af3xaWVae7B7u7R22BEwL11x5MtwgrTWvtqDFtNBKq9N2dn4j7hqoWFavCd5D",
  "key31": "2RjeVUQpn9yc9ADtUCbGvJAKCbxdLW2kXXT91NMzCVuchvWHjgcu4yUE7Qxgq3HAhmdrhW9xZTr3gPU3GgaaJQyF",
  "key32": "3P5tHSHqsZJMGi42sRXcLguL7W5N3nNAAp2ir4GjSZipRTNxaR8tAyh1q6gbWP1d4UZzpP3RJdU6sPSXXzgdoke7",
  "key33": "2VrDxAcj7B2P66dbwJH7tdt4UtRjoKGMn6AYH1dPhBs6XnkADDkQfRVVRqoFM32BnpwigJZQzd2MPAtY4mbz352r",
  "key34": "51K9rzNdcZPEmkJmaddacL3T4TyymNynTpWJhF2f3Y6FddDKKwadLo8MjsbVPnmUrNsH9fPzL9rNQs1PeTuQon15",
  "key35": "4xKUNSKaXd7d9bzNTc5AJhgbode4sZWUVKkzK6E2M4M8Cbvwz31Qhan2bGvZp2opFnxwWJweobfgfDTUDNVVFDuT",
  "key36": "4geXYYezMUVpa1qzFigsRFyrPTW8q8QyTfsdLHTqhT6YkNNMCCxAp2YM5LVtUfxHULMtWZPQZotFkC3TVfkosvWX",
  "key37": "2HBV4oEWp8CKQmQioahidzUuJHMtWhg3dhajwX9q8dR8rop6XSWHukTbxUBxad1kcnzvDousGzv4xv9VsWVAxVJN",
  "key38": "5WSJ1MZ8bqZ6KoaV4uWmskGVj1wHrRKNpxor4RQPVi5MZ3jAYy4kXfep4ThgKokpuW6vGb53Ke259CK76fMvQZcH"
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
