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
    "54GZakN8ytNExDpUMmgs6ipHX7bDohV4t9t4XW5PiMFWKsZPo2tYekwHFPeP4ZRiiTSnMDvbDP4TYUXLpyP6da9M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oEBQH8UArKCQs9Ep3RfQZjdjCYbdqxmnScqoUuDq3riYXV8B1ij8mWbV1g6iS9mXkXSa9a7dqGbmbdAVkCyRpuW",
  "key1": "w8aJmPteUPkXR9cQ4hHu9LF8SN5rtGdqSc8e63ye2t6Un4jpkJmNh871SbNvsM52QjZUyJYqNoiWv94SHEzK98m",
  "key2": "2Sf58EKFHWpEGUuKwUjFiPc35hcJEYE5n81q2Vy9NtKCwqBNZiGqnVMECjfdJ5NEPjmwX1fBygj3VQGW8hzvAQ4v",
  "key3": "5PojsYKtWLidU5bdXaHdoGEKfGtasemkAVk1KdHeyKp6QuSEUZ6tVviKS52qyeBH44nebgy2emPpWP1yrFoNUyrF",
  "key4": "vfjkB5AjixJTyFt5HUSbLbZtsYc3t93TZWpA94rroqrnTiJarS9QBN9K84tf18XeAPXcMW1c9crAzUQfDGdSpqA",
  "key5": "62ALprC3hF52HaZtr5yTZm28jjHv4opF3D5gs2RJvSaz8SzLoFhBKFqYkDQqmBQBD6Roy33ymWR2VuuXMA8f1wmV",
  "key6": "3siVmSoCsYyiCdD15AhUD76ZJAgxKGV2G7zxfALoZfWJL3E3wy1PUvVByQt39g2acBrMmQQxAZBWpEyAZrzzJ5Jc",
  "key7": "3sWcNyexh1s8TEWCUiRMvCHq74zE395K1ReBQMe5X4G8nDkeyPfRAAsyk7dVWNBqRZHRqiBAJeq2qERB9fEk6hp",
  "key8": "5iqzQjwdgSHTxXfcbr8HD9pnhzuLpzQDKbUULmcNFE5XHHJeunaAHFfG6RNavzWrJTXwhy2x9VCuryMnc3hqGwHK",
  "key9": "44Tq6kJexv998XDb7SzsZSs8Rq46AAyY3xsXknK1gs4eQkMWjYEgj568YbVosSu92hQxZuZ6RNnSPhaGsQDZjBAZ",
  "key10": "JNEo4ouEmRsX2mJgwkTGkh7b6t92r7wfnRL3wNPtzHozdukW3MEHFXMEXeKCduJL6cAyDv7642kaf23UN96a9Up",
  "key11": "3f2G1CkYsXP4ekA3MY6nS3Ug7tedGLjMiw4Ur6Ncyuvvkmj3PqFrHqaNBcPQV97i7wzi4sd6cHZJAqGXipYUQ4HA",
  "key12": "4ppWcw8w67vU9VyHuWKVKn1GUUSGhrs8KgJDTmnqJW4zd5CgavKKwMLh4v5TvaJz72gJn7WKxU24dc4qtvEV2PwG",
  "key13": "3gq1TaYYgeTbjLXuKpneT5kHcrLP17Wjgdgdawdvebio8wUTDzpqvHuvduKjrUWSzyHeBfsd4NEybBhut6Jf2HS3",
  "key14": "NQynxTKt2ZK2UGjieGyqZhB2jTASwK9oHT8YRWzREudaKkoGGMM4AUgQYSnniQpFREi2PgjiNrS9Da5v8EJRMLR",
  "key15": "2GXMPvVg19sdyPv453LPNyribmrtLAUWD1jiCmqmQ7MkDn6tLfzEYnv3qxVfgpJMzKb6AqRpY4JY1xSDAneeiN4L",
  "key16": "Z2ifNxsPH8GtF4rVwaZAtbhNTv1WdowbuSsNc5pY8wzfftagZUgW1wxXDJFRftDXTBtcfE64AmUArxPmRhKLU2N",
  "key17": "3oxVWXiGh35sMf1wqU8p6iHLo53cMwvoB1DCZNs41ac4AHfpU7P2DFdm3KgdZ4bzEdKimnnZhpwcvz4WLihfV6aT",
  "key18": "5cXgnzmgPoMj8hEpc8dY1Gt65NgXEgHDpXUsHd1tFxWxTQ6MpChJoHqUBoh2CQwn3V1sqgMqZbRmbD3TSmUQ2QV",
  "key19": "4HAoo4P7gV5oySgv6FBMYyDeX1kyJKbWiaZZhEUfCvTwzM8giLThVWtdBV6Mbj1PdEBFfKaeLTKFZUJCuJK1ZR8i",
  "key20": "2FffKrdkyXwug2aCQX7TVTdEtZvNKvrSwbk3bcNpMcic8WjFmb2qEvxfeG4YMnWpMMAPNWsc6FYnoFJR7d4j3CDv",
  "key21": "2v3carqaNXAgySCm9XpB3wE9WU3f7neX2bgCwjaiQXgKq3cjNVXfoPEcKGTinJjktw26CBGNNPWgGwJPnuP8ZFtE",
  "key22": "51hGp8dmKmaWnrLsxiSsoTca5D5sA4K2ssG3AythdjrR73at68x2iXQXuAEphFgjfoPoHS7oJpGvgrqQwDuzC7mx",
  "key23": "3LNRyNZtVXsuyA9LZZAg492zXEEF1QH2Gm37M3bgH1fZWRZZTrD7qVkTCuwVNCDk5uMJ5PGsnMfK5pGs7NxZss91",
  "key24": "5kDSczKiEQ6jqWkWyPwGVbKZaWKeNZXRPXAG8CHsYBarUesrsHJEH18bpMVzWHWqn9VathriigE3VWsRJkh6Npbg",
  "key25": "2xetps3sXFXPypkn9KvLMdyUf32Ddg7jg1zy9szAaLR9v8BZ1zs3uwUEJWat24Y6pMgVgy2skAXZigGW6BstDBm7",
  "key26": "4xPsebZiKRjnt5PHTEvcDkyv4Bg6vnkX29FGeeWykuVEwaFGaWVGgmyZts6u5nodry6YkMSpW2tJtHByYFU5sdfL",
  "key27": "5BbWpz7LamBYXknrGQnTaai2E2PZgYxvLeLVWY98NFwDeyyx1zRXjRVmvTx85V5WEvy6gtVvPaVUSXErJrLsPGiH",
  "key28": "4pUXDTyVGq8fTYv2jK5r9BA4agWXePS1ugWX6xZb3vJuBJXo2V9QQRrNX1L3aukaugGx3a1PRLrcpk2H5AzYRVNv",
  "key29": "3GeS73VjFUv6i6A3xo9M2Csw3KkiqGw8NowDerjA3uYRS1iQ4sZ24TkfhJXhkHFxmkVRKm7J4GCEWBRjDQxAGYto",
  "key30": "2zQCj7x8EzWcWURHocN34hBMZmX1bcM3rGVaBU37YWSTsHsMrkYZ2FZLvFp4HNTX6s8nN6unkEH6BnXjyhBs1jjn",
  "key31": "5x3mk1BMPTjEcP6vYhntSCfFUkyd9NtGWn7NKokYMoDpxPGQuHg2mDtXVThNSeCXXjxjRJxwHs5wUJAgfmJxHLcg",
  "key32": "55ksht3r1H5Fy4CwHyEQLhZVKd68SRk2hiHvyJyGRrZqV23op6tVZnKfZtMFUYaNyMC1NzshHUrYcNyBTpgSNZs7",
  "key33": "pVv42YJ9LCpEUkUwwgCjKQkg8CNiGBs25BN6PVX5KmGCEny1gLEN7UN3JANLP36uuwwHapp4NmfygCvvW8LZxiY",
  "key34": "5DbYCvZmE5n9WMMyLePk9wBvUzHjZN8hRrR2yLfFvMoUb2fLZnaZGMPx6hd12yBEp1YSY41uo2H1RpCjqVPP16Ue",
  "key35": "5s69ih1r5VK9aM71f1LZDonYfuHxSEYrxmH3ykxbAYNxEm8bZTn7SewVqs9wzkiEywHUdxeC138SipDCp1xRJ68j",
  "key36": "2YyWfqUTFCwE7cz4r9BNYdpRNhzuChKjHNET1x7TPNERUvztXwp9R38KRNSDCRP2kyoaQHXn4zwXdiNo1xwL8TWD",
  "key37": "4jqkgyZF2WRCBLosP5HyRF6yMgh1Mfx3u99YrVf61589hXj5zJTnh441P8pcCRS8G9GDtuF8qUgisXXM8ki47rCm",
  "key38": "46UAZEZQiL7jpoajGVhFc4dXSG9gi2EPWSGkHrQ7EWqMBYKiziZYum4xnumysSy7P8y5YPwzoKtE49W8XwZofiiG",
  "key39": "4WukgCDrzVk7CdLQHZABfXzqzXAKMmnkuZgsrwTNTE4ByyqEjcmw2tG8nhD3g3sXANgYTDpyQHyeGihCm6i6amjS"
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
