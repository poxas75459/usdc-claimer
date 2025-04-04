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
    "3DSB6jv2rWa7mx1JSyHAxSSqVwWZu5QbDqa8iqtvnFRrgr5kaQwTBX3bZmPPYJezALZAHToWsvH7nBgbHCCoTvAs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qjQJXZ4bC5fWFCMFmtDjEnssDVQAuAzczNXC2kKc7bEQQwN5jKFMdtubMNRPap1NoNeUgvr3yxUBUGfFbTFvp46",
  "key1": "3WJYc13yskxpjEt45ENWJ9hNxTPu8UpYVZ2oRzj8SJFdBHY37wktbgbSse5DpjBGXUJFN14W1E1xV2rT3TU5TWqQ",
  "key2": "5zM4djsoTfSACfR2F91aasgn2FvGNuzM7hSysopue2ymg78WUA9FqQR4xcwy4CNQNimgiwkLGsWuMntjZ5y74iUA",
  "key3": "4fzfev1ti3ao19Us7ToDavnoEwu3HNZrEi5yiPHsSLzL9BpBYuHRQNwuGEouDTdR1dESWjdvBQq9Kggk5m3nJsoP",
  "key4": "2j12YMYVJMT2oBfmpDhptAV4tL5otvooSQFusHdaFYmwhwTkCoPW1FuZy8ourd3nomKcXT8vM1iT5hoGF4jyyZux",
  "key5": "32fh3WuAfteUdo8DbnxXGMsFoP6XRXAEhDTWPjHqfEpkvSo3Sf8kegnvHgJFdfn5pfB9Ukbgb9XQh5imMMpbg7Fe",
  "key6": "VLTtoU9tuENf4N6zT1NnKq589R3yuPH3bij7B7XgeAWYS7S2zkKFHwcgKzstb1d7t7iE97gsALMPqcteso3dhBB",
  "key7": "42YLWxdbaeMr97gvSVhZmP2A93DFn4tiJHdhDE22EtXhPztt7goymu5yTpPvtSFGFkiHsmJHc4EwnWG2iAUyv4u2",
  "key8": "3ttRej5HU8e5hR4Hs2FjNjzwcGwW12Z6Bt2bavYNqaXGmtQ7Lo2wH1WwyQa7Ddax9rVryGrYj8i1ek9VrgrwACzm",
  "key9": "4Yc8EQjUrPncuWCbKgSFL3j2pbxipAQTeK7LumhiojjGAwQfnqxjQoB4uJ4Q6Y7YjbAbnCUw7e84qog93rmPuzjq",
  "key10": "3JD1Qm2SebSE3iQFqWqELiRS8dz87v1sNq3gkz3DmjS8gsxf2iPRgSJCJR11SkZUr1sVfC5kyhF4fSirVG4PrsiR",
  "key11": "51GnkEteMKeBwiBAgGkcsZeUJEPvroV6t2DUgwGyLYU1GXvwBCNpSgNua12Y7juu8FiBsFiCqzZj9bfbgznQu46r",
  "key12": "66SLTWVqL4LWrg9R2vi6nco37QBzoppTFyHLbvDU4bw93QjEgBT7hymzugKYa85VcrQLqhdaBLxEvkruKBc94R7g",
  "key13": "tgtFQpsDYmuG7hc8MfpW8Z9U5HogURxHVe5bwL19Q63UWnc7KdP3GqdaSV9aCE2q5RG6GYmZJzteEkK1e9Rmm5F",
  "key14": "2JNy1PBHQJXoTgPZoDHqPGmB1wc3UonRhmAW3MiQWaEtntbCaACmZuGxUowRags883mps3mqAVzjRmbz323NUKDk",
  "key15": "2efv4f7fuf3xfGiMGpxsEKvsR2g8xCgQE2Xrqsd3NuCna7CqpQMydowsYNyxHarSfbGRiAvxPp8ygK51bcEDRULH",
  "key16": "5zhsLbaEjm88zi2vSVJS4tAdkf7bcMe1JB81Z76um9sMBiyZBGirsgsv53jkZBcR9DYRkbtiPdbVb3Wayi7W673N",
  "key17": "61ovJgPRKGRbZGgMXrP3yPssEwELBD5xs3VRo6xbdb9X8jSgh4CyEGMK6SdHkpcNWr1gBwcrmNaJwmQEf63jtwcL",
  "key18": "3QtqCjbUpFX4GBWMHid14KetXnN9fLEeGqfZ9wfMwP9fuseuom1WHeSE71sLkxPBWAcVfsL727Se1JMu9VEc6UwD",
  "key19": "3NVYUL2d5zQ2ErCWjG89caikk3f7NbpkL8ikeHJWpuasdCrTdmvGwB8aAB61R17ZbZt2iDeNwCyCrfRkxnP5qwDh",
  "key20": "5HLP9NkdoPectBeTiVVqKEWWNyE6eTnoDoQTfVE1GntAe1xMYNm95kkWY2fmT5Uepjfpo3VgeFBsQUXvz6TH62Ue",
  "key21": "5cEP1gFkQ85TYob4m5GzLG6s1yQkg9vjyWDjqfri5Fwrn6eXUhSwE8o1PbaUHUYd9KTe4qjCNw4ZwrrPKrvHkS2y",
  "key22": "4xDTSnYUKxDcg6oVNiXoTEoyNeWGgsHYbtXs7S7FLqwLgqjhHkjXkoUgcgQref4AMD4PBAP5dMxHSZG3Ls7dB43T",
  "key23": "4GUi2jyhYj2zZjwEzSkx5pqaEN1DCSsTf4y322nvvd1vSgf49YJDb9bSWWVHhdy5s5w21C3MzEvhfJrD7Nai3KnU",
  "key24": "4ez7fqfHjy6mX8H5qG1YCYsd4PHeNkmuavB4GW3HhDLpkn6MW4VCnVQJgM9qe1qiGiCAiieYjFXSN3HpKQYZMAhv"
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
