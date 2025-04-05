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
    "CoMmYFH2kyqRywLx6Ps58MQBwsJy5y6eer325PMdumBCqs6tNdaqbBYfyTxx89aKwMHAWh43UEPnRpMohXviGUM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JmLE4sn3T5LugzpPWa4Rk6ZQmVF3rVzW83ySgVV6dVLVECXkNaeWRRBZqHJfCubRK1TxXE7eR95WPj2fZ9AKtaW",
  "key1": "2Ejb5KDV8VNPw8SeEe3yFacpN95ujm4k9Jb1YwaXpokqVy3wSP71BUsMgZPCkZ2W2hoTKhvEzVdX7GqEMYMp5MrC",
  "key2": "5Vh1MrngbKPdaaDtVzxTT5p3RVTA83pu9LTiATTSFywgQjFkceMQwz9UZ8vkiTeSztemq7nNpBubobzZjgdspZNK",
  "key3": "55uNoHggicZghE186HLwBsJoCweS2cHLkmgkfxb5Fvig2oaDYG1xE6y1iLBffa9YxREUauUZ2FE8M73oG65Rnr7a",
  "key4": "3nmb2TEqY6BnvZ95VSeA44qAKpoiEkdU9yEDxGW57xh8XwBDDkCQKvciPPDojqXTAkj4fFgT9TkQt1HrW8nYkEPH",
  "key5": "NVVZAWpmiDjJvV7qfyiLYTj7G9DufBqRYskEXQzL4yLTZrvJZXCYo6X6wGKFGQBzikuSXZAqC5RFb7aWaFnR5mc",
  "key6": "4VphuDkBBRJ2K8ZNdAg1R15onb5QrNyZC96oNiQXyq3YWzgpKVGyAj145W3qQBkzi7YkcegnkT6ZWH7ZqDpqkKcX",
  "key7": "8HhibzYmiY5v7D2JysqVW8WeAhAjjLScwxaAojBPgxqEPQfC8k4NFPUfjcyq2r2P8Lwoj3ZospyF9K8fNYatFA8",
  "key8": "3zkqd5VGFcy3VjgRXaZkVzqLtNWijGASWib6rZA5BAi5j5QpvHdYgEK2gyJti66RzzvWiMBWz1cBriU9e8MccTop",
  "key9": "2cqGVgcxG9G73PR11ZGqWkfmamq51qqeLBcaB3d5eSk3KzVzJVsaxUhjTNduYLvx1hDtMUGep3Chps7hUBV6WxUa",
  "key10": "4L5MgEnN2YmsG9Bc4KkPf2niWEzUwFGsfgwTkNA4JBnpFz2MVdPmAZcVz25qeJE5M5FvgDRrLgipZrW266hB4QjW",
  "key11": "2Z1nxCSbcR6epTfxwYWpcjRfNzoEhEYLCxZ8SzDXDQ51C8PEVWaf6H9EFNmod9zS1zihX2N5qsgxMW2R3bq3mNC3",
  "key12": "2UCnpTttnEvXxKY76FtMFq6tfHZwgDAYh5QuwvwpitGRcG4KcjBqQYqgH7STzkL4UMDivCdmscs1atygGhLQsWyo",
  "key13": "4m7fnL59cAJF3U5VeQSoLAqvipiAMENj5DRHRm5MV8XF1PQEmw14ojR3xEYERPAohJ2idvPifwC7DcMdyv2JKaEQ",
  "key14": "dbHbdoCd5knoGjKAxuKFByM6d5cb1eqirEfF1i2n9ZBuLzNU7pSEuXtNxM6MmW1LHfWjcmjaQpphrtDTNCao2SE",
  "key15": "54idR9twsRF6SyttFAN7ZZE5FEDJiLRVF9W1qEFHEbZQu6ReSwTP1ZMFE3of9ysX3VE9gqGH6Q1ebyCVs6RmwFEq",
  "key16": "3W3hrhDK4UHzN3A8HVydDH6TDhRurymaFAesf1qh66oKU9qY3TqWVLg7NPYYxr6fUfZLE1SveWaeSX8sNeEpxbTg",
  "key17": "2aqZGtESB4KiT9VxDmHSwjwhSynPaMQxzirT9p9XyQEF28EceKw5nizUAkHdeomBqsfeRPEfkq6uLC37LLrd9ijr",
  "key18": "2NPBbZuoBjVMEnhh3yruNafRR8SxMYgbP61Wn4DF11YJyiSSBs8HfzFZWjwt5MExbwoEyS1MPUS9LkrdnBKYqj6L",
  "key19": "3aB9o3LNMmUhat3L2unp6AA3gFrcHxgH2pyKff5En4d4A2HJNQT9bLjKxZyyDzE3EXbUdTNqbCDAU2bDKxukjzEG",
  "key20": "5p3gmA6Qz437sWhGghw7ZSu6zkUQUc6RqwzGQctpcgFMCcTQKmvbdMqMXM95ft3iQu1CazVKReYeSmMdhaNFdb72",
  "key21": "5HY4kvHfLtJfDNQw99HckPBSm8uTHoAWqL46RzksQSJszhrZLjZBk7QdrQozTYaRbGF3ewHvHFX6oCwbPsu9ergm",
  "key22": "296jiZVhDbjRKhZn4EcPKYfeVwcH2CRjd7S4DkM87cqcpLy7AWZXF5kR7r4dnCdcZ2K4B6bGFECy7w2dgswov5XZ",
  "key23": "34YRx8LgqrKut6ntbkCnq8pN5eh3Q3y9CqyuAzurAttFW2vpbUcdrZ4dQFsTUwjqiKvGJz2Dy9fFHp5hPvra3EHG",
  "key24": "92oLUVsVhPHeQCa2nTq7SyRbG4KZtwNcuN4P5tij6UVKtSyExrQgnkzMjrGA1hTWQRifpiQEQipgE3APh87AQkc",
  "key25": "3zFLKw8yrR2cdg13DGNNv1dVFVCwMM4Vemka48oggX7pNnuvYAKvXgVoMCmW1cJ8Xv9yNC2EBzNTrCQpjFj2DLV7",
  "key26": "4AkcZqBgtMjB6NXUrtWLSRoEykWHa2zz33vs8qYeuCZ65xFGohLo4snnhv3GgNPz56jmLFvoWZnXGfV9nZSjVL7B",
  "key27": "5GTkPzQS1vpo6MxA51ckHASEgM6BLzLr6nWwYkSq1hjt5jHwJd8qJKPdcmhfuomPUAZS1heWCiEBLHWKzjqK7wyB",
  "key28": "5vHnWoxhwcCRdvzJ9GWy2V9wYcwWki5i3dyhjTxk15tN5r25KmxaTRBqGLjNRWQC11t1ujuWnfVDJrtvfysNofke",
  "key29": "4FKzM8aWm9YYFUHadXMz9iSvJyvMMst2CnbaXmTs4eGkZaufQAHtg9JKfmYptvYabPcBdKFcHPKCTzPs8eT4mCCP",
  "key30": "58zNk6R1TGBq3GUFoHfiP9KcJkL2yPmiksu9cVM4FyYWtw6AC7RbYFQgRB7ckBV7ptMdEJtz29wQR2TFupzWXDLq",
  "key31": "395EpNnEMqfZgxQ3HMmqotBx1Bgh8WPB7HqTYnnkHnJcU1uj828nCev1eCz7FYjivktZHHrmPawoqh8aunac7MHU",
  "key32": "5Yp6XSXZtqzq8dLbqkMVHvwbfP7FdaKyxsR9fwFoL2gY2yrKJ8xzjwqwkUF4yDhf8251ysh2vnUo8CfGW18nACAq",
  "key33": "2TwxCT7opHAYMqSKPDGyXVzUUjgDapNCZZMNskYUc2tqQJTjLtZ8dkD8ccm3jbrbjfhNVdrLNpXvdgFLcEcfxbxj",
  "key34": "2KJqgxYYpyB6R3NUYWhtffPPQDhpfnkKzcXsp1ms17mfBKZYzt1m5WXYCw5Ndxpe6x9qPKyrqPutgPauT2BUERrH",
  "key35": "51o2eoC4CpfvCaoU3MDkXT2WruaPMTK6FK1GgkzdNTWzQJuShUyKBcEwTiLzJehyfLJEwKTa7DtLh2w52h2XWYUn",
  "key36": "ZCPF2cT7ikYeSib9KGREMN3C1ja6aWwiPrSBeazrJeaveYNpw8Y5KarPc8e4FKFx2NFhJoYDo9gSPkTu6tyiNGN",
  "key37": "527N7PSfTMcpxZ9a4mCRZXFUuFnSqpz5kxzEJ89nwN394QDSpBBPjfx87bv4N6XaLp13D4g4g1u2zNRxWs8Y5j2x",
  "key38": "4tfrqKcmgaiQo3JP8hqCJeViniXBFRQPUEJx56HTEp1hEhnKeryXh5YREso4nwEKeqbRoPg64s8HiAow4ArBZH4N",
  "key39": "3BrsY5t4qA3PiUNi6jEUuN7zmUai1rguhAhpMMi567TGzA24h7h1k5ZHMya58HeAVo9WsihRSM5JZsshaiXEjcH6",
  "key40": "4kCRYitun7GZq4c7NTPTgn8p7D1grEBh53mSBnDc1JRF7rZFiyGB1WuEzDECCdb97p3mbDgdgtmGeQB2BttdJ3sq"
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
