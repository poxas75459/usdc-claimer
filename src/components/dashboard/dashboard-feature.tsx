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
    "3d6UeM8YfnUoLrxS5yGxCXngESV7oFC6zFVygCSEjP4C9TYhx87dNbdoGwC1LDQWGfLsNq2pzn6acEQqqYNBXaUZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LRof5Ybivp7pNPPdJKBCXcwHkiCzpTkySfN3riEw9E9NHA3SC6k2LGqJ7nwBfKYVc7H6Gg8VcRS1Y2iQDC4xvRR",
  "key1": "DN24v1kENXgkepknXFcaWV3pAAoyiTdV5KCdayPDyEbaZPBxa8DPy3iviVov3wFHVxxQhshrEThBvTb8Z3hXxCG",
  "key2": "VYKda26zroCXskyeV98e2B7sbKreoz5UkSYVxifsm2MAAF6E2WrrTJyAiGRvC9f8a2ppuY6ZexeuKTKZ8a78i6Z",
  "key3": "BkpvBxTPumbVsugXhxkETvXNtnwC2R41s3sxmgP3TajVxepNzghGx4Fb3zgggYhC2qk1GJEZv4s3VQ4ZRW7xYWR",
  "key4": "3xEcyJnMZADeJNDGoJW5khuTkC8gjwZnNxRtak62KkTQwrK4Jz5qAbMYRpYrv6KedMgkd2nbsfvWcE4ew84rKdh9",
  "key5": "2swgajCjJsxXh6cSUPYpY7J4rjHvrqA3jZZPoKNVNDitAqGZUcF2BVoPEQaxsAgxwBfaa5LgcArVxTVYb663zrnB",
  "key6": "5bhthXp2kmta5ks9aYFcQCHSQEK9W8unGU5CsmoaLA3S5nvw3sP7GeR2PCrNu9EHAUREaHbWN1Ajg7xphnJ6Rtio",
  "key7": "2sqaexcuAAj58BT9JEqSpquQ81H79tiCmimYQ9wRKnpet8BUAfMdWuTytQZCTZcKpmcYkied8WWn84Kr4FEZeYUr",
  "key8": "5Csbps8PhKSALkKCzFpoRKXFCMFkX1B4XspdbtSps1DcFrn8rixiZDrJb1UAToeKtj2GwYW7nAtdyfrUVkBWbACv",
  "key9": "5jZBn8PSUUfWXG9MD1yDdth8XkpW4f8GeMWkWpnuHKU88Ax2aRrq6kJWz4anja5XSa3arGzo8sXT9EbPLXw7upPC",
  "key10": "35oarvKdFqUrLMdJZVkq61fGhWJ3rzPcQ9mtj4cZhJxCSRZaXWVGUJieGb2E9YdmUHQcf936xxdpxooR39NZHi8K",
  "key11": "2JDRnTMFi7Y8GsiGdxWXwDe9CsmNtBGnR5FpwVmM5xcocFbVSvVvCp9ewPiGRo9Lxp1LeeXZsuM81dybvGqnSKnX",
  "key12": "4xejevq1x6UYDWV2MSEiLbLLYuYwZBdkvn45oGe82sssJM1wjDwx8AtHYBzdk5PtxCHKAZFoybocC3Lkd2AbpeV5",
  "key13": "4qEvdehA6A7aCWNBzMtSZS3Zf7q9kTizQ2K1cwA1XXXrBuu4rPWHEkyj9Lwjc2WrthKfZig8FoFdjX1BWdi3wedy",
  "key14": "2TY7syKd19SHdj9qvcnZGeBDyGYTHDmTbb9jmbxFdFmYJ2zEQpGrFTrKfJBMRRY7bPLhcg6PyYLwTgw4g1hPdjBK",
  "key15": "3N8vmzpwo3PGP6Uu5VwR8wUDXiY1dCpsbu95twYezuSTeiQrisNQ8Bg2s8Gchxym65dZ26TubWyQLveHGuFjV6sW",
  "key16": "2ioDpVBkar1BreTvUcyZ1gEJ9N4jdZtXBNEzj52HSA1XyXxaFA7uE8MMuC2H7dUpr8dKBBL9a57VEQtSuC6PwJF4",
  "key17": "QeMjxayDYJSxeTgZubhLcXWEqKN5Qug7R5JmVJQjMnKzQMvfzKgmREKqJa34ThRH3y2ceQ4kCbJKj6ajzKvoBcw",
  "key18": "4JDDSq38oVdBf9pEhgP5fR7B8jQ26Hoam74DeouUgsmHs8SoGUdqDbuJKyTH3ETTQ7UEtrFdM3e5NCAoePR96FaH",
  "key19": "3jiJiWZSJtUYARsB76773zeK7MX8Pr5az8LYjvuudTtPRFiNWD3RnfZ41ndfG5BxKYzr6UkGJkBJ7RfMVDHo8bWD",
  "key20": "5r7mVKmEcMMz3UyWcpzVjMueehT51fmaExKnH65Z3nBTSihyMU5kL3iDsPZQsyY6NQQtzBEyEsvnVkoZw3AjeR6c",
  "key21": "JJCHxs9j7zR6YqEtbLtEUovjyGpWzwTbTpzWCygeS18YCrdsNm7BznwuTmrEmJtDrApYSSWdmKxqxAqNaWjjGAc",
  "key22": "4DGc2zTTYNM1ThFgnHRYQxod16t92DUTr7WD3wKUoY1XxsPvSvihvTqD3gVeS2WiYkyYAYdDsgn8w3U2P6SVZC4Z",
  "key23": "8T4CmT7bs1no6U2W4Kfykn3gdSib1e3YJH4Rs2Boo295GFBGrX5pf5q8f1CFVv5miwUzxcLcwfWhYwRYBsyD47v",
  "key24": "368wrwYuvyLmrrRLCKFRefpuFJR8v7kVUWeBNRosBeLVFn3SH2JD3tUe3VAt53JkRUddCSEnQR9b2huuWu7m1i7q",
  "key25": "Wt526mq7YP2ghYjZYbEeNkzA1hYKMeY7GNaEEeV74PBLeEMmVD8hFdbcZq5UwmW5t32NHXNa7WjeBiD54f6zTE5",
  "key26": "NwPdyJTTJdKQHcoqyKWQPBYNy776QDcvKZ47VcUEXbaJVUs7N5SLXq1uuPMBGbHMxgsnWkvZqUQYEio4FTyNjBU",
  "key27": "e6EM7MNyTruBbNAi7VCxRRmiLfm4fwfnJyzYVjLC2DExQyrXTfY8wiTsrkHsC3aMRQ3TSpj1KsnnxjtBPhQeoAp",
  "key28": "5Nxs7duHQp487MJo1hmLdWbsijkhcwFbmuyev8sjAJDCQ2YcTziJJLN77DF3pTWe5L4n3mZR7E1a99dLWq6tMwgS",
  "key29": "5fjUn9ycsGvvDcZ3FQ6npHPi8snoBFWqmz7dBWmdSKXpEtbGgSaJC8R6GK9wDbvdiWTCSKa16qccq1THRiBnT4Mo",
  "key30": "3UwcnNYdmPhccc8MpSBpx1GMpYLZUhgme8pbS3QnpMm1pgfADBhZs2ehYsGpb2dNd3mahAZtr6UH8MmmdysmhFaM",
  "key31": "4M1GBC5kRmxdiPRYraediNeJk7LJER9dPFTkMmpu9YyAbK8q2KyJBqgbqjRXGQrPxzuygd9NLbqV6g5CmpMthgZK",
  "key32": "hUtLHmAD86LoRRxZ59AoX4hd2WhkXzvo457iXVPu7v35LZ5G3PhFW8ezDgr62k3zdMb1eGPSzUT1Yim8NhkaQ5B",
  "key33": "dxT5Z6BKxV9i36vvoUDibXNJZrzjxfPfVetXdXvLZ6wYZtnkXtDP4F85EAeBFMNk8jZw2unrtpdGdeAJSGQjiYC",
  "key34": "HkyKsvnsfnTeLaFt4xEyNydYnecaCVUCVrsT6eruGaVxkbNmPNxkBKkGwDvvS39uog6GXYRsLn1PxsgPghimJf5",
  "key35": "3vwR3b58sMQaEuSUqGfofeZU2r8FCSF5hRt4FMAwDVLvUt35XvR4Sgfh46MsFsQGVBhRiLRaTTvYQgLEwwU92yL4",
  "key36": "jUQaJ27os4bL9Wfo3nbgdTrXhR8NPaebbhJYMCJaMp6NjixWHu1myzb7D2eSu241CXbaa6T3E6vmTLpwpKHmn8w",
  "key37": "24NeqqW4zwsJuKosW5gJJyZDY7MAU5CJ3DGDQPWfpwRXhcQpvKdjFDzEemrFm8hGDJsumWM7ZZi2EqepSqaH8rHs",
  "key38": "4kvAKi33qLCtSUMcm3Mt6njFsicDP33PGdAoUv4hvj1rZqkp4XYhRbErBA1sq4RfP1q8p7LxE6GxnPLtqLTu2oob",
  "key39": "24vBB5wy251bkMWSwwbkAz6Zne7Q2ooWGMjHXbfgkRjZ4XfwbP9nY9uTiT2eeWuuHVegjp1PysKkfzqnbr1NN157",
  "key40": "2EfZjda1c6MtiKzAF9CmsEuCxUrm3V32TAzxqUx3BF8cpjdKjaJvLFyHTrRcQah2yAGkCcv5WsfugZRLJw4zcuto",
  "key41": "3bakWANjRTrgCCUbzWNfu34MN1h1yMEVb6e4WgURZVR5tGgD6QyEeWokzKyRzMY6vs8TszkWYHfbCbDhXGTDiCxz",
  "key42": "sF6oQSteoSXyHhnMjgz8FY4mcoYZoLuDXYJND95SnAmHtNSvS2Wcz7arRkZTWS1sSw4ZRW5cfVHrr2kPEx3agNT",
  "key43": "5KCYewvATED3HHBK1bVTwWV8VtiroKcKgb65VkJZtqV4859G72tGDtxZGGRUppUwUAfWDG3CfpWetJbgUU6QTwVw"
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
