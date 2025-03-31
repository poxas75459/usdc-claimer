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
    "3G32PJMobFZepV4otHJKxJLikD9ksUy22jkSHXHzVrQDnh6V3DuxkQkztsfyQrtB7Yvr1ZpjCyZ65w5erqy6c1K7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "366dma5jRVSKN2S7JACZxdTgNMihUzDjPBfcN7ufpSfP8CosQjWxAKcvFRNcwWznTqibPnbpZH8fm1Mtg5TjnGXo",
  "key1": "2Ws22YLVYTsJ7bUb6ZjjPYgEaqnMT8yURiqBvHAscoemWaK9c3e4EW25rAhuen4bNSBUGtjjED9ww1naM1jSmorm",
  "key2": "CmtS8PGjtNipfszu1frzaBijbCPE7EFdrtRsWDgHxXVFsWmhhtPLKMzZ4sVDLWTpe7SZWtL2Nn6FYtCrWWZQytP",
  "key3": "5jzdruPjCKRQk6nZkJKggQjQn7ZHu6mFRC6cqwNDW5zDUFSyL9u4KYxcpYbxzmj3VpVs4iYvzyGPXpCTPmGyiYpf",
  "key4": "3KoHntpMLq7xTfyRQQ7k2wzAHKA5dF3iLeFqc1oLiZPJmut9csgCgtF3yEKUjbHWo7jPueVcHx3D9hmPUPjGusF2",
  "key5": "3A2szpnRPfeUJdsZvKpKbB8SvUCXGqZQKeQpZhgtBxSHGgA6WTXaRvH3wEioAoGCPT7kqq874teLu3vQJjP7Wjan",
  "key6": "MZXHoWwdoT6bfAAfLpc6Kfytbea2swEZsMAnry75oovU6755XYi71aPNTYqeL4hC5TniwyDe48pb1bMRPmgmLrd",
  "key7": "3xaVe8gbqrKvhGKk6jqnbU5xpunidZaXrpjcHg6jbQ5Af8QKVDh5exurWAFzhifczohaWxA3ESXpPEAhQSB6X5DK",
  "key8": "56dX9stq94BPkpJk8616HFrRepAiM7C4SmZXWZjjmCi81G9oTHqxtqoCHDLXuqjFW5peDsWaSMi8M9yeyQFecHeh",
  "key9": "4WQVMXHzLe3mDdJzPfnGtFrJ1ERhahYNzbtShPLmGSUQXPB82JJqGtEnND4NewJRpKVm83jvmunhLB5LKUMeeHXs",
  "key10": "2mbFgE9eT1J7dwJgxsT4WVnHzLUZvY8adiLMQWgN8GV7NUGmz9YfccVxgvWjntqbKJuyh12t1xDUVohr4zDnaEAr",
  "key11": "2xtXLFEaKYvoiAXgz1K7myrTSZNsNJHYiRNWbUpTLNWCjnGKkrH1wPFhD1jxmbEhRnaESe29kv27xDqhsNgNjcWg",
  "key12": "3ETLe71v5Mq7pBUaQKqcUytdMf28ArCaX3mpsRhYvfdbdEbS2eiGmzPoej8oGkaJFEzUDytS3jWPb5gofcS95hug",
  "key13": "3cEgkz7vVnA1jSLKeZ2SEKdkyiweaLSCUFw84PtqXg7wzCMCZJKLAtiFrDEXxwGKByhMzX3hP7eRfd4QDsPYESBt",
  "key14": "478PZtuUYmXaNK26Vfwe5MnTsTmwL9RAxwrhQdv1yJAzLrA9FqMrvyqTngcDaJBH2Mp9q7WGYgwLLkzvGmhD9ztB",
  "key15": "3uCv854ZDKzhYq4CQtZ6bFp2jwePBi8TYKJxgVSjgXuHsS6rH8G1WwFuBwVy1V4AcANnxAYLycNdP5jxxY7TguMG",
  "key16": "4ShHFTT3kS45NPaSSu6EN7iFPD7DeVnUYCTi7zorz4b8MgoDZ7icb72S925cHKBVDrTQiU35i3mpNNwr3Zab777c",
  "key17": "5R7wPt7gpHGuxmhkWh7hqRfjn45hHAsr4kUvyXMzUUU6JTT5NDnNKZEidG13WAMNBy4MWk8v511T2Bgp4VxSmMEE",
  "key18": "56JrE4DyWxnWUuNnz4Dgt6oaUaJqU66GMMne1XuXV2fZpUNBXF5xZRXWDnVvStzGdyjjp3yT1xby7fA7xxiZCFJC",
  "key19": "5LDQVpa4cZ3ZU6tojP2Rrm2yuChdtvens3fbY3SQR7R8gjzEZETSkzxZdK1xpwHRPMaTdy8WmZdhWfUFKtgZjBxh",
  "key20": "2wh8DbdK8BM7ke8DoknnoyreY96XNjr2jBEKLZ9A4sudWzCAX3B42gRcU65h5rYoGiU6gb1BuBsTmh636iGieUQu",
  "key21": "27EZtFswjYRJvLFBw1nPn9eigHW8qycDX7AZpgAnYNGnZ5cJ11DSa2S5TvVgeCosy69rWCKf7HesMCUdaSJUV56B",
  "key22": "8oRGAEg21zuXD64AnhL8y9N8PjhJjWghoop7geYywwsfC5ubLZ9QQAcmBEnLAinZjrr7RbLkD7MPvbxAWMqEXok",
  "key23": "ykEcknafHyBbT8CE3Kr8J769c6rT65ArFgcUpRyLiFx8DrsGnoBjFxujXeKhykMvpAtFn4hQX87niMnyXWEimRm",
  "key24": "3s5wDaYRVAmZQ81rQXaycXmTfPPxKporJmGYjegVkj7d7b1YkDhWBjbYnWaseF4QTbiTaP1DXDcH2avZ1Lf1a6Tt",
  "key25": "3RDsPxi7J7nur3gb6wPEC58yxkeFzWuiFVu3232PamDMN3NpAd3hamU9W8ZnuGKReoM5LXaqhEU9XFcfYiTGsBnF",
  "key26": "4yY4tefY39LiW2UxXr7ixnVMCeN2rEq5hCcQkJXnEt1JuqgN8kYYF5rW1oDAXuGE2tw7DEAvfGyPrmVzPpdgLJMz",
  "key27": "5fjok5GVc32f9roK6mmZntaDrxVjSVs1E5HkXc47R2TjqFcxKYiJax9qgkQydAMstNnc6a7V11amQfjnPu8AWs4N",
  "key28": "5U6echRT71gLjgzwJhQ5UYDS2zGv35ZVUDSxAjuLtFqtBoBwcv4nADLHGRPgzU366HyAA31T3ysFWytqWjGHsZMv",
  "key29": "5qTLMFs6aMK4JT3SUfcsgdRQGEsc1C1ERKXdERQ1hVMST56dFvupm2dbtt7D5v9tRAZK9BSUApu2gdKLn7zaQv9N",
  "key30": "3QyoKqEBCT3cmz5eSfjWBqRm3QCrUBfiAV2cU4Gf3E8zxdPuawazrXY44eV9anU3hAE7YhwAo5yH5wwqZp7JQtEN",
  "key31": "2k1xKz5xwXNn62gFQQhZnum3gMngMuc29vjwXsgqCTksyoXV6bYufwDeEMn6v65borq5hbX86jA4zmbpheVMTDV3",
  "key32": "2YZUbx5afj4ZUmXkhxM3exeTD8GuuT83cSqCjk2uSpjJ2o8ig5VQk3SzDHgcqxsrYtbEvxjEoYkLRiPvvyoTsGVG",
  "key33": "5kQAPKV3AkLpX5RjFCq48gZo5QhX5Pp58ktxJANnNxNvYtS7S55gGBjH2NkjLML4wcEqiJngNaSCyPBj7WVPNxuc",
  "key34": "4fD8ufDUeUuf7anRiu4TtcMcBh7DczF198Daw9vLcvwA3nf8NjfPjAqZ7TfyNQ3KNpzamJii81zDurzoV8XE58V4",
  "key35": "637vpWrs7xF4ae3xriMWgRrVJkL7ss3nTNqPBvsYkoCYjy5GMCHHAGfvDzjT1mWsxsCFAWD2wncKgxS7y6LuxuLs",
  "key36": "4VWJA8a4yPVHiNTYKc8tFNQ5pyN2vYECsommbCUt6HB2ByPUX9nBWN8RADPDF1kKbJUPHfEp94kd9pgZVJu6EidY",
  "key37": "5KqH8xmShYu7jyfAfHy5Z5w6aDwQMi2GSg4iey4BsSrAuqi2SN1dNxvoAX1sQvwk2DCJhyXJLDm1YF6u9PKeSA9z",
  "key38": "2CZNfUWPPuWTfe3hD4pzWCmTUVbJNfyux4tpZcSzZVCnG9zcXoQmQuinLyncHUY2H7EGwH24yJ1wQjT8Vhv77seQ"
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
