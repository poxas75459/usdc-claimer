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
    "2Q1wXV9xfcBK6tm7HjoCoGMkHAEi4NisQ8WRuXiHiexBUXa8X1oqbCQTjvVxbNqqMenE6s5F3G2w9G8MCocScVX3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ddyPfsSY8NA9oK36LcGD9cgSVCwLE4L49m59EWYUxbABT23kib5f2UMApDyLoXaiTRhz1WQUUuEseM8gyfra3i9",
  "key1": "5myG4t12mZpHiH1fodGCQjydNUqCw3AhV6UEjRMGJNZwSjb554YjXEtSEZqcea8PaKENK36q1fTwnUw8FYUvsKPg",
  "key2": "UwjNA8UF8UiLx38qZLLYWqgPk3K8xLgZk1X3v1mv68zSjjSHb8Akx2VJHn2dVJT4A1wv36o8WcF6d173aXLM6GG",
  "key3": "ZBpEAWY4nyGgWW9gqKe57qDnPEg6dyh9i4WptHcfhDLafFYypwgJWJq9ZMXzAfeWVrWW5kdFxLziP15HxHLBjs5",
  "key4": "3pD2igWewJKMd16gHqLsZLWSsbLEav619DHQQyA463qYARehLcJN2ioFtkMqQXzJ6jLsPp1g4xecesYb6mA8Znoo",
  "key5": "9yRzeebWTuuvkfSY6JaQwK8M9HfcBnjYveFKJ4UxA18nPAiumbWMwxiDjJm6nv1Uy4SkJKmRf682proiDm3tgY3",
  "key6": "446Ju2VTxhbPoVudJzfymVs4LHscjKp49Vs8U7q7JyBGr6gTZzydMxA3XC5DqkQBaC2WuJToCPRNcHvuhmUEMeH8",
  "key7": "cKEHWacpzUcrh9iZd16BcKE8TV9DfjGDkpSGXdw7yhp4gsDAtCr7k1ciZfe4jaFp2EvCUxsRn7u6KpNCcwhmy4H",
  "key8": "3H6H8iSapHUBCWCYCMs6XVvPrZsX1igNLU32adJe4q2xUvGrmLZt92w6BSUKsVAB1FGtoyZ1Lt7wQUHkMmgvKyAi",
  "key9": "2HUEYwe9Yrg9JkWbaWVpndvqpiCUjYMa62QprUF4MaFm9WYRsGcPjUkmWA8aobf3TGMiqbyuH32m9qSUp6uLnxMk",
  "key10": "44RSDn5hzh3WcRkCumf19hLJF1wvk4BcJYFdwbwEmLPmpPA2U1UkkFdsg5wTq6GCkgA8wNoZbKdbMdDPnV4Y6crJ",
  "key11": "ZjVniTp1HSXB3vwXLuks13JH8Z8SdVLBhztL1a4EbzrMxyDHbkTUrgReur2zFTpjEf9Uuhciju2HPcvqiXD8hqw",
  "key12": "633GnUYVu3PZarpTNnmAbpuifJH5PxFD4J8htYjXDGst1Y5rQcWfXzWyPxPNRgjUj4Yt58vho1U3dQ2SdgG7peev",
  "key13": "6WPLGF9DR7CGwfhdbtajn8M3R5xaZ5n36tGZ6Q1m5PqBHoTY4x1UZ4A5Ww3VASws1bVMBRjzqvub2C8GkJzCUAq",
  "key14": "4EgBe3z2MFvau3vNDbbKU2vv7a9Ksf2Qnp71DokLBYxTMQ8nNHK7MjxPf8Kxu5rHzeR9gE513751qxo7dis3sU5V",
  "key15": "5Aw7WMoeMZL47m82bSN7cntA5N75mvQBgMVy2d9iWf12tpXbhNdK17NNbHjZ94Cj5riGmBh6rPccViaaQni7wurX",
  "key16": "2CTMPENevdLZmCudAsyEAdDzryp3akwUUiry6nDtdsmsuNxp4UpHSj5P7MfzvqJ1sBjDdej28t53fR2oG8YvsJc4",
  "key17": "2EsvBFfdN2WgY4uG4ZAKYfqyyZofqqZvsVp555oDoW1iiFPBgNBr8K2Z6zmkL4UJTis8bytJ5oaM1YgE9kdLt7SA",
  "key18": "HSrWTyhWgTxgciUGghQprJnWhCWvxS9o7k73GegwH3e5Vah9DBKVvAq4Q1mN5ydLH69e2Pz7RDjP6vpMYgyuEQt",
  "key19": "2nwB3z161V44sEa6M1PupJdxp12jwTGodW4zN3s4oXdrhJg2Q5i4gD4At3uXNgJ3Kge65J4F9cPxVBpEnf96Yd9S",
  "key20": "28xkKwZ1KLGMeKBMMjXmMjAwRVXGkrkF5vHF4C13YDw4EYmDtrvDn8DNPbRGweTkzNKJCCb5mPB41ZbVFDfp6fu9",
  "key21": "55LAx8QPTHHSXLZzgSozoQq5Pp68vrMa7iwPPxZiM5kyXyt68ys8pSbwoxm2w2mP2iHS4k1XetXYwFRT6iCTRSED",
  "key22": "D58CQYo9J4cihp8BGFsBEmHDtiZ2pH1CErtc7TwW7uhMVjksgY4zH2L4KFsFamvMxoCLCaWBCr3eY7ERBWd73XK",
  "key23": "4Jg2XJWCKggqQkgR77xCxX4CaRQFwWFqYyDxTEYokj5KmVJs2CtorGQgCwdgReWVKiNQ9mN3h6LoYT7C2qac4NfR",
  "key24": "4kRpmZH9uUiJBo8SRV8HQeaNY4WFdnGSHLCuoc4VXdvyrLb4B693aG1Kk2YLNScdfm53dkzqFsujrxgfQzrMpKvK",
  "key25": "4FbULiJNshKRwsFpMSbmbgr4c35zcG12P2cArVg32HbySZLWRCLsjNvsS9HgTWfLVubmr3DhkPC9DBmH3L9rmPWv",
  "key26": "3Skpr7eMDPdAt9ockLRpM1nTsNRnQmY6UUvdVVnjPh3RP44yacsQyLKjuGNftPHP29Lj6adHRYFMMhk1VQ9rzvgj",
  "key27": "4Pwd9gbWZRKQiw1oUv2Rs6gvhAhd2Ak8xnUXdEyduHvhL4gRKUFNEQ3b53vL5WBJNHnxdLdm8LxTV7YcUZPaEQLj",
  "key28": "5NY224KnVxVn9K2Zk6zqjgnzACCZwX9tKM8fXJuHSg4tSsqzMPiLSY2ZaQnRupJUaMCMhNgZnXctQ5ZXLgDrpEBh"
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
