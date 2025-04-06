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
    "2B9t7v7rE4UaBJbvVPUGkCSA6By7udbDLh3ig1KcwWDGdCaJsgYcoHtoK9QGxzzD6L2axcMuRcy8xhueMMCGdPkq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mMhWocLpGA5A8yBR8qmirgr54CDGXwww1jYAySq3i6Ui4izXLMdqmwLikhA7DApXdCnB5ZPFgTtN3RVixnmF7cY",
  "key1": "3XTfN6XqUfuXgPuzM1jkSdqcAotpXCfcHGgeBTnsBfwGU3YL5hcZ6egRtgLJdVtkzBCJLV8b3PiJTQthqh5mxpRx",
  "key2": "4hHHyFvMC6rqf8VLFxgcHaMtHvmfhsDnz3oFpDrJdPv4WbuR8CGzfZbKgq73oEHmPb1ZyZbZYYHK1WjsBwh4J2aE",
  "key3": "29hbVehqf91eHga382CqyBKofGyD73jzxjd6W7oKxCuZxj1Wt84buWqCqQZpLmDv2Df7aANLes86US4uaU6YTx6L",
  "key4": "4SRKSXxJByHLAeLAKYnVXGDRSQ99QHBFKfPt95cymYp35p1y6GumDdfrebEdva3CrUBnNb7WBzTd257mmwaqYK2Y",
  "key5": "44PCdweRP9KQJHMD1y9eskdBSiYB6iix4CgLYsC3YDMva5UTZiUSpPZ8HCnmGnf8MKNA2erzmmwAowARW3a9nuXz",
  "key6": "598ESVurgZ6m4idLqcA5dWESu7WTgY65wTEieyjyg5ZDjmoaDEXdQKNsDum2SZwKcZpRZJctKeh9URFPbEEUL9XC",
  "key7": "4ZkALvLbFyC5yQkWomR9u4XLzHxLDsYFS4sKsT3vu4DqNYo5ak19mCTy5tvyDMuBGZeGV2fVE6SEjd5K2HXjLEPb",
  "key8": "VpuVhUm3aDYvieuHEohuK72MVKiTbieF2GqRymKvnM4E248QpMZ1eJ4b8Hm2urxx4UhuQTdjCva3uyVxAKfJh9h",
  "key9": "2zTvi4U91mxWeb7Q7JaFzboTWUBJFZig66dgBKSj9Dad7YnA4kLigkLgLsHuxftjMxHMa84j7JvmfDi3UVS8oBXZ",
  "key10": "3kKkAkcMHtZnqJWXgrXegSwAVApbgwYmiEP2g2344iEC2s1VrhN5R1ZXGtrRSGjVXk1uw1kDhAvAeUpQxNPvZ1ry",
  "key11": "Ja5bkn9JUUbsLbbuVaaZZApz5sG1rofwM9MdxsDkxefQZiaCHtyPCM12P5C8PgrKBbhh4m8o21mjwmARoxXCUgA",
  "key12": "QrdZuksUe6Lf5FEBwXCL1fxqWy9Nuk952j1vFSmraUypmGVZTyFznPeFJx8FGc5taGopng9jgT9y7DYJ6ZKjgME",
  "key13": "5FkV5yhk9JUVbJX8zDeFJVnWvL8acsEdRNxjytrDCJ29AsU259b1oc39gYEMzG7AvJDs1VMgufbgNzLaPCSPRmEL",
  "key14": "66b71AzBDixBffJY25rBTQwrf2cXaJ1isbFbkxxscVdLt1dtWNP9i2xTiyyfzJmvw9e34tfZekCjhrZT6BxWH2LB",
  "key15": "2apWpKTJB6z6EUA7JcZoMbUf5TeNqnCEjkKT3bB4GdjA7cLFYZhujq2jBxkFogUxkWW3E39GQR5iZbBR5BjQCMx9",
  "key16": "34pPjEjGiMdC6fn1ejjfPt7MQKr94vqbg4PNvqtyJk7iz2noM8J97WQPBKLov6tDokMKXdB73kDhXYpRMiTj5iJA",
  "key17": "59USVMcWc8UeQE4Vfzev3prtkVdoXvBLdDWJEJBQGtynUv1FHRUYfhxaawVs4MgC9juGAQZJmVPpnvV73rVzKaQP",
  "key18": "4i8Dw8YCnz8uU3NVPARHpfJSTpxnwu2jAYqBzA2Agdkc5k5dqqitXXg1n3mCw6rVFh6kJyHeBvTDY2LNTk2br7rE",
  "key19": "47uH51Qaj2LYXesHrigHQKo1BPkWBBLjUyAHzriDcSZqdukQU56Jmkhpzdk557hZd3fxqeVV94MzBvaDDXVzkQx",
  "key20": "53AajXf63J8deZQgYagyBNko68J3sF4dNea7P3prEK2DVoW8FZM4BkGRhPDtXSg6cLMnCQimfAwPMh5xVMeRHNbZ",
  "key21": "5ty3SUvUuNjSCCeDvzA7CEvjtP4VPVkFeJ93NJzeNCcfZ2q5cP1rg55grLZYcS88GBpVzG3NMg5fmyCYUhojw9FD",
  "key22": "67PqoN6a33FXw1aRgqVdWySzhCzGSPqUCM6ohhf8wZW7JKMR5zcYe1Ffau7hoijCPJZJ3SoAxuu6D5sGub5gS62R",
  "key23": "21kwSMFEtmyc81myBXe8tCWADhQVLWhmWLzxPGnvrsF62a1SdXT7XvSqS26bNuFmGPtALx8iheWTvqmL43Nw3kL7",
  "key24": "3S1MPsBkf3jaEi2y4jkH1W21jweW98cD3SJ1sc1yEbcX5x4SezpRZoaJenVkxgkMNMaC8HhxLrt8aHUzp1aJd7jb",
  "key25": "2x9BBetvV8m4Sqj1ureGUBXNv9x3HuVG7YcQPTxzwb7VCcPxr947XWGxqAqFjnsPEsFfonTXAwG2KK3XavGLSB7f",
  "key26": "4m1BdrNfRf8sz3CiQq3aCZw9tDhfSxs9D77TFVwuMiS8nGuUbd22RggerkTKdov6d4X1YGudUVvYfkpxud1tY9FS",
  "key27": "2j42zyf3pxJGE3r49NQzqKjZuasXrdxA2K6iA5hP2chZGdm1zHySp5rmcBXBTN36CytbNkd8L5LmdnbnMiZanVML",
  "key28": "3P87gusHhnV2eVE31Lgm9GSuXAxaJEHqPtW1oKfD8ykUKzvTSLDnxKrN1NrBJgU5Qg8Cng5aYEK2Q7n6q9qjBTdR",
  "key29": "49AQxcpvsn7gqUxwb2UTLz3FJ7zWJGxTWFtAi2ruroVgsGSAxzgNsyNyeo45Mee6SyorgMrCJxFQeJx8r6HDR8xm",
  "key30": "jRmhrfbrMQgX7znGD8iCBFURsEkRzQYFwFjJQmm4jDgkSnzZvfnL6orKLz4hWUVnMbDPem5fP8hjn59ZEn497PC",
  "key31": "33UYDqSwULGEt8F36FvUzLjpWKq9GWR48ZWAx4bWqkVRrP9BTSnCdji4bR5DKD9qV4HkK5Yaw5yrgd2H8RHybt3K",
  "key32": "487yeWm4xoQaw6WrfmYaUVHySiiZLonaPL4TuFd1Wv129iUtKbDYd93EVtNwq8qZAXC4rnDrfsUrWR56RQviK5iQ",
  "key33": "2ctpjmfWRmn6sped6oGGwcqQX8UAsUtZFF9RQTqQsoYsxafWMEtoxutug5rjc8VU9GcMYNd8BidBbNzPiCS8SKJm",
  "key34": "31PHy1t69gDNr58bgasaQ1a9hZwKesW5KWNTinGCDwBcdT3BHpUpLFiyberbgGwmgXHwjJqGwQxbCpA42bBZxEUb",
  "key35": "35Jr4fXLoFw2V5V2TAfvGwKn7LPhCwqpzjAhF9X3QVjngViBQJTUZXsPxthdnc8foDrKEhMkPxjJsJ19noqzy4b6",
  "key36": "5zpd9kpENnGmdmz8GEhjMtNe9twiqyAG2V2aKBWxiM1exbXhrNWQ27p8aFUbRbGEwpbYb1Go4kaAfmgbkuUbj2uN",
  "key37": "2DNJk6HmpqvuDxd5CfWx8rhUpaGdjLw6DERHhV3RgnT7miLVaSLhJuBip5HEfEj7iTNFfgNZ9fVh3xRG4sETKoRW",
  "key38": "5cPziMRzPHpHXqUhjBjW9MzC7zrx8Q2YfqmdgiGyQNWN2wnjXi6Wrd4Bj8FiZ8KQX7UGkMX6JJYadbhEdxWv75JW",
  "key39": "3V9fh1t9k8tyskN1fhaWCv1gX6dTnSpqY5eudsDjP3QQ3HH2whufP6uCN2S7dTc9xo8ffL7G85YAEMXHZq871HSa"
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
