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
    "hKC3VpdVwZe4XAJ94smRHi1Mb3ozqr5QTCYoLNd6cmoiuXXMoERdjoNnLaohrDESo8S5jSDtjpzZaehhB29KNG9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36ekgGcYsMiAYek95JFu2xQJPkh56GVzWP3kzaTkrTjMrNePckFHZvboyqbutfWskGza1WG8rf3XtxSwKgJW8kZT",
  "key1": "4kxyfb1kZQ3pAdoDsH2SYeppm1oJRrMrr2yuAFQnHf7vGegBWhdjLMyPPpVWaf7MpG74JTFtdPGEr9hMaUniffwd",
  "key2": "5P4x8iB721QuJYdSu2VXEPtdKU2ig5rTeUMrjBEQ57P9Kvjyb9StcEBHZRgepTJEyKCWWHrufb9DqGGU9iMpeiNh",
  "key3": "4Zxybpc1dcjtwQ5Yzz4uaREbVyeh164ZUYhG2oLzkgztaEydCJTada5VjANuczjHtEkQW4e68YotNZVgPqYdxZx4",
  "key4": "4SwikrWBfXGHuQ1wB9NVgw6YLcJyDrySj8rmeZKuRzkGRnpXmmjrEzcHFvD9Y9d8nLoFTDhNeBtLhd9ygcZvJRzR",
  "key5": "NLZPeDAdWYj4vNTRgM7zuHz2vECGUqmTy7EyCuRXX6Q6ZwEJTHhv3444JHf7VTA5DYmohdU46G6o8bJgx4jemRt",
  "key6": "3WeembsHfXKwSVKajbtefQ2R2xyS2zRXtJiPg7Nm5ZjCsByUWCHowZ7etbxKGrckVMwgDhFgCkGGVVcv7tf1wKXU",
  "key7": "5GBzSfNXUh3HqRq8cYbX1YgbzvG27FLtcbFXSKcCamLYRbo1Xe4FDtALg4i83FJUNpoEs1TVj7sn9S8R613jodZr",
  "key8": "2mHfmSZxrgwCcUh8ZbaKN4iVo5VvYAXHk8kYhemX5vvB5pbFZmNV9g83su5trjFE1fS6CzgAJNuKAy2Gy2DaEttm",
  "key9": "KFFTmCaNpUd9WKXkA4rTp5h7us7trmHVFTdgxn6joFEQQvUoLcXrqU7fa6sRCJsZrw5CKt8Xtz2NMhSuWRbbbVF",
  "key10": "2B5gMaDH5TBeyDZosPS5APbQ5MzRKFp2rGjtJfcFYRP3yd7Y6h3MpfkMowneWiaJeN1D44X2uftD3KkFxngMcDVv",
  "key11": "4yfmjoQmDG5Z7RihZKHAUKB9SyrTcZsJG7LTZpaahrY9EEF6PFMMsnTNzUVsDdDMSN7fQUHLqs7jJvMXYh4f2UFW",
  "key12": "43v1EFJJNBEcoSBYJKdBBe8ytyU1pu6u8xx4USaQCpEMDv1Jd4PDc2ZeAw4KhkUkbg7mHBKphNh8mvkhXLdNVnda",
  "key13": "4jvR9cfofp2wUVxvm715CrwpxAQVEwq3tDt8G8x3WHmWmonCFGFA3Q4cgti37Vo6roKT3A99gdG3ZgUwCPvBLfhq",
  "key14": "5gAk6WwyBiSyLjKVb3T8XEYunjHNoSVkSCH1HnEnaxoyLBdgHNUyKSdT4fp2yWLqEQ7gk5jPf2ujBHRDingkqEQR",
  "key15": "4dRBpLw7uE3LprnkxhtQgGaoez5ooz4cxqgN4yVvwGXduwwwgneBwNFhtUYWgFMkfQunVzeHFUURYK2d3KVDoVRs",
  "key16": "5QiJBMXLM2sET5F6VztSb8PWQwHYGB2smsbwwZSXbq8jmty2MBY567PnxAYHZxQxuKpq2XrGq9HMrKuTPkvoxzi3",
  "key17": "4is2wgqyuKETikD2SeMVDrdb1GUzztDE2oJ5N3Q5BupdXtNr2zsxF8nk8H3Pnn5ieGfLUbhGgG6dWcb5s49FbHhv",
  "key18": "36rwjYXNnU7T2inS3CGwCyCvr8vAVduqwVuWDJrye3ULcGoYUdki38Qm6QKq1jSsuQtqcCkteXZLaLJRAV4QQhZf",
  "key19": "4DevDaFht8LK4PT99Y7fR8WL2V5yVrHLBgRL4hWgnyVPGJih59cJUhHqT9wJpTAZEMk69253osc1BC8B53V5CRCi",
  "key20": "66tMZJwSpmd5QiD1HZgUwGpzF1w2svJ4AXd4ztq44FYrhr3jyXiTSYwabiE7SogMp85oZjpPQodcXh7voCQ5zL4S",
  "key21": "2JF6nXTQsDvtFxdD17X9yUEtMDKSHKL23EfWhN1eSJsWj6HQiXvV3ZnsS6RJXSLtw3LhCnBNoq8YQddvG3MPiTAv",
  "key22": "5hAhQVN93cENSt1twBDczfJHZqk3oevpQnZen6C41KvkE5BLGFfU2b4izy3NBXw3mfBW69JnyCP5SHvncZL1w9dw",
  "key23": "35MvyZDnL4R8YonNmp8xrKaWrvsS4uCeJ7jNeVv3jWoy16UzQRvwGA6mTvjU6xGiHmZUE1RLM1pmQE1napR7cVs",
  "key24": "8abmexEDT6knL1MoAUPqEeGxzjxZQkkVbUtsigpLJQ8XaVCBGUv5Lg1TSZnahj3oYjFArCYuHYCUPP9oXn5NVyQ",
  "key25": "23nT1HpbNxsbBj74WC5Qot5jNviSqqhCR8DYJFigYF2Mgmr4CpAq2jEZ6AraPoNa1H26Sgw7bJJc6Ycn4WnbRw9t",
  "key26": "5vEPfystkAGor9yRekxWfZ4GecNqWxP8BhkKGJRqcFcdAh4YHtPAQj8eNgNazxPu4dH6rHYZf7ouoEYyRTXc4Utm",
  "key27": "3f4rXJh1BkwTbheGMrxdJwQ8vp1U6eJjmwBSZxkb5TeroovhF1Xte6Gf6hpMBGcvGoWWPboaaDze5UpgwFzczGLP",
  "key28": "3GQ4Cp1UhqemEb9Jv9a8LxSWnyUNwkLdCAGp8FKwQKmqExk4a73gda8ifTQEnV1T6keizSmdePwrKvdvA95zGZWm",
  "key29": "3eg8Lha5jGfhpHHm6HXMAexQrmJu4zB9kMX4WxUzQBKo7NdupTjZGcRUKnFD2Joki9L3VnfaJa8vzfLdjzGHghco",
  "key30": "4u5rZk2m8adNxDjY4zp4rjFVd2BRN3eEeoxov6CSG7uvFrS7fUi49njRgZD3G7RzperiU1pepiL2z891cs55inuU",
  "key31": "66MPwLRiiP7aPD6pwPE8pbdjMcCtQsx7tcmtKT7gkYkfBRnYtz44rjvJDZWX6mCQB3uiFQ8dkHKAo7rnxPFXxj4w",
  "key32": "4nb61xKJXiB1Rp5ajYP3esfDYnEk6EVH2R78XwBkwSwVUyjT9UmkLPgBwzzoCXRsr7xBDjZcaMjKkPAoJ8R82SST",
  "key33": "24WNtAWVWSbbB6ZkLT1zNagbRa8YVxMnc8i5TUs9CZmTEPoYUZxuyWi3VbyQ6uRsf9Af2encQvyWHBqbqDmCsExy",
  "key34": "4FBnkNhW5h9kVUAE7upzbGCAk2DraBsHkekRPLnpbhrtPHq8i2QunhvHsy86tyMH3BVmrXc9BG5JAcuotMgfeWqH",
  "key35": "2pfacbki6vSfVbXY7kpXcDiimLuxytbf2AxxipB2ZuHCHYMpkFzUQXYoWXaYWeddtTuGkzMKjdok7f4UdkkgQHjz",
  "key36": "5opBTDCjSvRW76hf5XPvYJ6icNA7fMrfDidQBAQRCVMN4MTLHBEWbL2vGEkParcQFi3QDfbb2KNLAkhNMLjvoSbx"
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
