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
    "565LhfmnHYCPRKjrBk1cRVFmQaqgYD2N9RbtaNSfwcGn8K8PDruZtH6xcSANJqW8oPCQBXLGRuXD1eH89c2YeEC3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7rsivwKBDJroJEbzPeUCrX7k55BGFxiAo7MnEJH8XDYaxA3yHc6iej6HX755Jv6ZgEDRhhHY8j7x2YRrRLrtzmJ",
  "key1": "3B41FVhpmGWtLrbhWR7bwrrG7ugjEM3WPCm5jDSpWVUdH51eZFwMTuoMBo376Q1ibD6hNLk2ULdGtwpyfcPq8fn4",
  "key2": "2HafZpuuyFuEyRV9Qj2v6FCTtfsoPQbQgfgAr2BE8KhJELB3CR1wKwE4Xws8CLDmuaTFag9khppnV75AqoeC8r1p",
  "key3": "2Tng9AQAfb4x9Ck59MaF5WShUouxbBPbdJiSAiBN3pY7GvEP5W7CppVDQpJTMhXVszXqv1KtV98AGMwcwpNwrYLa",
  "key4": "ipnCT8cKozpmsWYRYwJvTDtRSQ81WAupSaUqqQmxGKkSdVMYGUV3NWhXux5u9EVUg8mBxNw2GRfcxSY3zyzovdS",
  "key5": "4Lcx2mKUyfMEmLyaEMf7257XYhmUWg6d8i9nCwknekBNpqckaSSXSuxmZEw3w3omEaMJMGcgKEfXFCeaiV4ioeVG",
  "key6": "4PaoaLD38hEgd1LJWSKNMomkPJxEVAdb2WgXLoAunUUDZ6RJBkFRfZdr5dezBFa1aFXq7x2gCX16mAQUCzpxN4PN",
  "key7": "4Xhn3p5cL4AwyUxB15d4sL8E4VK2ZDWTEsqSfXSbdqpRVDbJpySNUpZHHed6NataedcVVrPVPrSzH4uUyGVA4eum",
  "key8": "2qB7U913RmbpUDLc2of2CwfdKZ3wmHuw81SHDF6F2sjYws5dUJhBVEn9cjgamEgwgcn9XyaS3HURqHhsdf44yzkF",
  "key9": "142C8SHGpqWBCVbPiLSftGNFFup9wtKVQTTxyRWByBdZ9PWBWd1yKZ4v7UCyP4GeRRcXpUvJVMobWHBcueNgED3",
  "key10": "4huWckkN1cmfDFpqfhTrG9LdD1RNjzNqqBadqvrmA8DYiYL6gMgHdhRcQpN4NNFMSaAQWuKk6xtudNKSGYpF14bF",
  "key11": "2urQXwXtRawW7R52kfW5uTNKF63nihg2oGY82vRuNj4XcZ483xHSyhq8yor7XvB8HdGDTWZ6bvuLXL2QVfy5U9Es",
  "key12": "39GX5mW3UJ6UuHHZmWCCj8c7Bh9Z9j6UTGZXxL4D7QgWXvX5U4tGNXboMkCB5ouGdGJe82rgzMmyQwxnWRuRPDwJ",
  "key13": "4RnWKLL6iD1zVKhicrqJm65Qwt5ZjC8LZ4JaXkJESafFhDNfGyBSAKCnr2AdEQzVHDBoFuzcgaVDzo4hACLBrUJ1",
  "key14": "mtqSCbk4KHdj9WPrrezbHXJUR5vYkSojYLkxA2ykCiD4dJGfnYxN8RAuWh9U8pnwyHKmTVAyK5pvDA8PcLKMtTc",
  "key15": "BMPdAPsksof3XcTKYzupkSU3onU4RUStobEZPaaV5RgBrXZoztJ4d8AML6gqc4oWFRNqVtcA98fWXLpEWcMXcd8",
  "key16": "4cwxtJPahwTtTVGwqFAWwJcZC5RMeLf4X3sudmCsoYXnmp6jPvJtEezYPKHycpNf9e4mCGoPN8CUd6WU2McFYobD",
  "key17": "4x7w9fDdwsuXVpDLHiS9Y2CxJCEhZiG54NYcb4FFDBEDNECMfbQkkhzHpFJKnzx9PymbA9Ue4PCcUfkXrqHq8SaW",
  "key18": "YU6U1vbSp64bh5KQ5GWnJTi6iBH7Kgt8wucz2V2sjCWnMjBP5nKfbwKxxKFZMa52VuqorkU3F9EY92aQGGRYQU7",
  "key19": "34T8AUoJXg6mwSCFopnpsWi7S91nDR3KZzz1xPd2k6b7JsHmi33VngyuppqiqphSFTz69p5zZDSUdVwDMwJZPesF",
  "key20": "312pk9uYVcde9sAABzWkix7QmBvxDMdUfLXBx6JhziPDCWTjh8FNt8WUG4BRVCgescxiZsYvg6Ue5N4oT7gX97e9",
  "key21": "2EoWYsaC9MzaHP9qFj52EnasqnEWZnkyNFt9Wz9bymyrzdXKJSHing1B2VpKrJ1VWBxohGeja6cVYPijSKhuZTdv",
  "key22": "YmZ54svxHoicMWsFwrMqqgErTipU2z5Wq1N1T6rCqgHq5LKQj51tzw3X7pJge2Au5ZmV3vhcyP7WsKw4Q3jdtbo",
  "key23": "2KiVdsJyPKw45YwTvANL5qMc7V7P6TPFuhCrLPFyWzDcDay17QsdPFygfYLGdBJ1QipVcEH1if1h68wzs4MHCHDs",
  "key24": "5kQQzuwwUSVtm1S46bXAou4CayabWCNKMLUo3v6Vw2qgrsmp3N97CiLfnBqnapRHSfrKg7kwRWHMMWZPUz8sF3db",
  "key25": "21nCvqHi3bNmKxX1112DbwLDY6qDVRTgvbypavS2fdG172uYManGfWFWYeXzejqGaBJpAgfmvwRuzTCi4LVa3Yhh",
  "key26": "5UsP29qRsevFcG1MtWN8j3mPn69XEyAJFu3JsdjCJMT4c4czeHcukUzJb3KeD43nuU4bdALyuFZ7o9z2juCApdJa",
  "key27": "4DLqKGw2J8HrP7CmRBkbbEXJrUyWBTYibF12Ts7A696vKzZEzzDciauWXKDdC9kG8peEuRaycjKwsQqhCW68BvGk",
  "key28": "46CqkNy5NuxVnNsCW45nomJJ8eN7FW637vGBw66STG7N1saEms6qiC6at5EuHWU6qo9ke6kBQ3KDLnw3WCNNGRAD"
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
