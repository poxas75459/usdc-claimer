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
    "rBZwxWkNjdsc9TDkbNreTRqZvxebDw6Vbu2du1yB6RZQNdwttHPWTm8VcsmN1AS4PMvSUYBx3qB74U3pneWGyrE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gVuhLLmUtRej46spgUsUtjM9GP9C58t2NKfJuR6MQdsTG7aF4cdNn9QTgY3VCjNduEfTPoD9uegDemWj79DyudP",
  "key1": "3gSLUKSTNhfXzKc4siv6Kgt5pRoTR3NfFcU2nnWjrtTibspd7ca7vzmpMmZLh3SgBQheK9XDingYxJxNGt7iM6UJ",
  "key2": "4pUWV3BBbdU4tL2VREwmtpDdATxAaUqVt8bTU9rw7Bup1m9nQciibQYPyusiue2YBvFfdzkKHG6rgxrk4wFsZ1LT",
  "key3": "5JMPyq4NJRhyFNDXxLusiU7dmuzPcvZH1bLtRkrvHeN1HEYDjG1xKqcQE6THJWLA5PASYUKe3WA8con3VcrprWPz",
  "key4": "5LrPZvQmheTehc48DR6v3aZAmxac7Qu4CczXKPyrMDuGprpX5AEqdg5ib2uW51FswRgsMuQh56TUBwaMhybmPawT",
  "key5": "4yMfrk9z9a8T4vkE8JtZfXxsTKnUWMR1hLLTWpG9yJz21EMpQebfoZLrA8y4zXYGYwyyzWLdd2G8QYAdicLxghno",
  "key6": "57gYq9tkB3CBDCHiXuo9rMgDNF7rHQcJZiVzUcRAyPic5UYviVmGiPgjFdN6MmnAVnasA6shQxffZqCSEtmqmjs4",
  "key7": "49RXRvGZKcTiHMpqowAyfUD97SfTBsEmj3eNLigQ46pfLCerDXpumjLbapWpWFPjbtLhWESshKzjURjxykoZyBG4",
  "key8": "5wPG7iBeUVLyAWWuDXrVHM8Gqf9vawfYTzpfvfPChVN4dZb8iFpPnqygJGeVyC2cxuQwkZiNauerzGuGeS4adxVg",
  "key9": "nJXc62sYbjbXeSja5iEEwimthjC2Wxh4LEfMRwFVppnELf5e2AEKq8VYzvhoCmdWeFjbadoLxNvbgNcrt3R5yLw",
  "key10": "257KMiyHNTwWhNnwR8n2aUAFr2TLzWMn1kFLXxDy8GTXgxQep9zjND92hfrf3nUcCjes144SaWKVrXU3iLJWfL1a",
  "key11": "RkSAQuiffKcJQeAXN1bEwHNc7yr6zjCMtkhkeKmrw4phSoVgG9pKPcxEYPADtC9c2gwCFKZ3n1x6UyRpTPmhxbp",
  "key12": "2m3mUFztphVPVZ7Sh1rYNqxvwpcyfNPzVESWcYe1c2PXnQo92hR5qmpmVfxwAf9YsdGYRPFXLEq8R21s7Noi1E6C",
  "key13": "4jVdqyLPUcf46JTcqewqxc4Ubqx7ZSX864uKGSsRfBHTYpQoyQq5NKRmeKGSetzm653F9LCK96V3jRCKAdhCj8r4",
  "key14": "kkaqSyTfEg82LRv7Ej25FbdSJ16HZX5JmUGYXBvixmgbMAasGdxonxqNAHk7uxaN7q9XK8aQ4J3yo7R4oJxhaHx",
  "key15": "caAeoPTtcbTjSGFGtef9LKx4VQis3mkrks1EeAwKfJZwDLFK9QTTGk8nmhLRbrFq1Mbdm3eXNzgpyH9QYZLT53Z",
  "key16": "4yzu3ZgGDBdojN8Rdv4JrUqJMuiXCA1n1qG1jAMnaadLau5pTZ7re2yzYqjxsUoAe3q42c9tqcJdTjWfU8wGq3HT",
  "key17": "3yMssEEM1vQwJieoFf8MVpDeYHGdAYThyHbzhjMqLSmUmdbF3udjBRaKGqHGvPJJbz6o6yksU44VAnyFo9qd2fyo",
  "key18": "3NvsQv4UVAVcayL1UUCpB44ky3gSYvTJmo681mkgaKKTkp2ijbGt3njZBnvpLQMKfQBvkbY9Zj4y4NBLzg9rfzsF",
  "key19": "WWoQ6aG7kuKb4J7fxSrZrzhRuBeZT1RBxS6GThJ8Ja3hURbrQRWh5kYgceSG5X1MA38eSuc1Njz8szuiDVkYYLf",
  "key20": "SKbPa146sD2LYKr57jjo8xy8su6ZdZ8iF8hYRooAhfxw6nnx4rbhtZfWhzArPV1s3tWVHNR9WX4MsPCwUSTEcbG",
  "key21": "gPgMF6X8yGuuWHLhKPfdSwRkoNhff6vbx2qWtqcTqHnAXZRbwzw3qnXHHwdWdP6zxEPWWdMH7bf7WJgo86yXKAJ",
  "key22": "3xkoTy586LSEeHA8cRGrXaojBwQx6umueF52YJXiX1A5Bs27Zom8qW6BLWbDpSLjdwmmbbkNLaKb7Ebck1V1SDMY",
  "key23": "3XxSTvntxbrctNTLw3rMhb7oTnjh5GNaiL5KasMot34Xs6tfn3oKR13fFGUEk256i2ivHKhPNAERByUQKHFiVtZU",
  "key24": "2Pf7JeMh3MuZD2QzeAuHDMwMsoWqjRSAnz5ToDpo99MK3LMDP5v8gqxhjDvzAtFJj4RcEw7H8iyeULy3vcjksvwC",
  "key25": "2Ff9fn7TfksGvo6Qd5V8ggUA1ZVZnCXodDnmmckpLyjRN1pRUu8WEaHaAwzRBGQ6VK4tEap1wDY6KMHwgxMTGx6r",
  "key26": "4fH9FqhzMW4XiVXwEw95Hb2gXKQB1mnXFkA7M5srXBrsZWT8f6ENpKZBinqMKwFoP66EnjqMuu3S4PYszWVak4jg",
  "key27": "4WXyDRuSQkm7oQbopraHT4rK7doHTRgEEtvjJ7Hxn1YgnWbvVjJ9DEyQL5mNV8joKrg5yrBVZxA1tvJUDKCaJN5G",
  "key28": "51JGLq63CKCP4TM1xXsN37uoKvrSsLWZ7KjLXG5NdN1t4dHxg2KLYCXMYFFAYo4JcjfaBSR1b16y6Kt1dU5cgmYD",
  "key29": "43L71ToL6k6edL1YtB75mfz67yPEybH8DZxwfTiS9Y9HzyPQgEohdCjLUFZS7vWTSwG1mnquCrVG17NeW51THmww",
  "key30": "5HptJpTiF4ynMkRS6JDRfTF18DT1DVcN5WYcSY43J8Qe1AQwj2qMH7ZqT5g5zAW2DCvUH93NDGqFxxLpuoG3xgdv",
  "key31": "Dvk2zb9CMLYMpcz3TYuomnorf9T5sy8fuxHafNNR7mehp4MAcRcfbTrVgEV9BpcURhJiKSN9tXMeMer39Z549g2",
  "key32": "5Vd6Gayw6h4ek2dU6Uf1axnLecWUfEqEeVTRjzsw6nqk47UmGSH4eHmHtWKVNsmtmdjCmpuCSbKMCxX1bXriZTqo",
  "key33": "ZaHehuLVwezv54mnz4enStQ3BcPYbvymCe43Qn5vkMAuFz5PwBdf3Y8QQNC2V61HxEBnNcLTSm8UiMok3VQX8g3",
  "key34": "4yQ2HAFjEBAJ184snLk3u4WZCLvmURvcphG1xgMoteKCkF2TmvmEcDQqSLwPet3iF7hZX6N4AUsjXJkmaBh1aSQC",
  "key35": "2M3t4FZbXiNF6EcBoxUkoPbkEvbQ56HNiEga1hmkonHGm277ABrSkRemN7t4aty8tEtXnhvFtDLrcod2GxGEBHAW",
  "key36": "2TPM5gnAwbo2JjACEPmSCgNYTsfq1Stt7tqZam7TB9MkygKNDb5hKiux3jAWkNYvUXHjuyk37XVaGP1pB66T8bAP"
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
