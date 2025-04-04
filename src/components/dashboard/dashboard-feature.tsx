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
    "3qiJv5vPKVLvRciGpNGnE6d7qL97xwJ8C7FXpLvDdReqWbzyAYZNyiahBNccRN2t3R1SSkTiWn1jmXdLxXVm6V2m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m9e3Nxfxz6rKGzH5pZUmaKmbEBRcToAovgMk1zeNXayT7AdwE8sd846YeosAfZyEyFqzLvPaAHEnSe11rs4cc5Q",
  "key1": "4yNDxH5eheYhX41r3FBdCFSGG5aXFn9MUtZSqcUc1zQcqdj9X7aZnU4NM9T7BcWoDXUND2YkeQ2GpLKVenXbRcXS",
  "key2": "5c5ZLy4QCdh81X1MJWj9cSwhj99KoWeXNzaxRAC6xe4WnWTfRPUmBRxBFLVtaHQ9BoSPTADhaSrMnf7GdCWztmp2",
  "key3": "49NB6W5oqiwg5etmQncyNCKnsGGLpJDXPSxtbatoWDFTr92oDaQsRYNsA2dmjJ4MQ6Mm3SS2FW5LbxpyGTCo3Fq",
  "key4": "2X3RVFveBfpfENMDW5wLf6gbfCiqghAXqkMc3YYyp1i6Q4GcYgv7KdXYozMsfLjGrgL7W7gYEuu6XAn5Pp6s7Si3",
  "key5": "4A6ZKG5fXzhkTwStoxYMr52369czQbAHsF76SWxJYisG8yBx3evF7KwVyj2tVHSTEDbkqM4sG4daAJuPHrwauZsU",
  "key6": "5TKKUWxQ5uX5AXTjuz2NnV1VbHtqfaXcPwrhnPLtkAucVrDktzq8EqCD6KGzpEbugy1kJ5Hzt1qSCVcodikWCe72",
  "key7": "3Mvr7NiwrUwsBTMmGjd3MovKsHpuKv1fRSRieYHYmCAafvEsUGYxh6Y7wdx3srFUATtsxggdioihGJ8ejc8ECYjj",
  "key8": "23LFvsdkuxQNK6MaYCuoRNEq9cgbBh6RSqgymfQ1dPCuuqW4httbRMT6YxU2kCAwG9PemwkDuQSfX3cqTFQpsxeg",
  "key9": "4kD6qg1tG7yZ9krjb5vJPKs7aDUHCGvfvNM3efk4W1BCAdhrqxnMNCGNSE9BLGyPz1GwUfdQn27A3TqK1McrSX3V",
  "key10": "vtVaCSoAr8GjMz7HXTVhQ2CnvacJeD2EdtjkXd5o6K5rk5R9Dv6N4KsNqoGPocBh9RryBgopU7hikxGh35X5Xen",
  "key11": "4XKHQqsKe49iTnVqF5seRQCwzqZWQ3R45y4XAPhog19Em9uqbG1ydWBfQp3oZcryAkpWuNL9km9HYmDxVxhFp3Xo",
  "key12": "2h4jC4Eb1FJwZE7qo2ep46XuR2AuYLkYWrHFNomfjv3DGV44GiNqKdrPDhX5uN7a6QUZXqLrdSvutJpSrwouhE1Y",
  "key13": "2tTAzAYftQNoR2AMpZLrHkTYVti5GXiYrMrwgZYtJ8WWbfqxXKYVKJB3pFE8GuU5PHPbZrPZpG97N8VmmmDrSyPr",
  "key14": "5HHm2cc3sGGD2S5cUJYKNan1DDgfSg6iavqn3tx3TRPmLd8LtbvMHe9a9L1LSVfk3jfkZ9wSzYhpLM2ZxagCi2GT",
  "key15": "uWffBPmHh7rsn3GNkYKhWPGnw546RRx67C2Ah5YSsfEcetwDBJhywFttTpCtjvjLYkKP6VMrjSEFf5536d2Ynd4",
  "key16": "5idY7oc3wmEL1WJgMCeygTpvELA1vLJe8qVDg8p7AeGJ198pQJhU6E4GiWK1TJbXzWkmBa8s3rGbXo7wvPhBEBut",
  "key17": "4uMWDB3kupA3DAZAnAjnUQpdVEWPftkdNiAwyteN7Us6XATEvZrDmr6RH51c45BCkeJs8yHgBugygCxyXKYLWCCx",
  "key18": "awTB8N5bEkaE1KZC7Ys4pLCUg1xgXSYFYw3tEXKyGHuPgoqqEjUeKFbRHWoZjyQfh9crjxyp2euZw5UDavpxNce",
  "key19": "5XAuzjTiXuv6r3EEwg8Du9SiphSzFEWgvJpYLeSiWrLAMqepa4DHgPDtNdVXANgPLsGxnjX7XBKxkXF4NxK54G6d",
  "key20": "4vAE1ZW9kgWC3NhXSEMBxsUwqKYZYzh9PDUXHZ3PHKjaW2MA3tMybSujFiSqe65wzp2bGrkYSKDBpUWszuBx2Mci",
  "key21": "2YHf7Q1RxAjDhH65iMQqT6BXt6Fm6HtHQxUkQ17YcxwRM3nPDMXf2q7aqgpWhFPy1jdWi4zXfvw7kyxun2ipwBQC",
  "key22": "5WboszGR3THFs7PAK7k14qh4rLcuXbGMwzzdu79VzWZjVraWvoDjLp5prDetwKgFV1Q2TfpKgKHdu5Y7wV1A5Lhm",
  "key23": "4RcCJNETzyc7v1d9fqyk2rBaYeowwYvR2vSzs5J6VhoDkvY93dDK6V4qRY8ghx9Jk5cKkGGjWWNfinMQ5nCHniQ3",
  "key24": "5LuT9PsYscQPVgrVsRS8ohPtXEn5wqaNsYVJvRumH6goEa8CUGZu7tKw8tm5sL97Nq8er3ne5W9jnLivLbx6CAEP",
  "key25": "ZLvNzDtUj2tvpetWei55bJhDLrfKZej3zZigpjfYpXHuZR5mg2PwZb9JpKCoQYmNTowuiGyBDPEdBE5hT3vRq6U",
  "key26": "fhR8hjp3esaMLm2WVKatsSEAk6t774KKyn2cyjx9dz336H6uZgdVtRNfitYgcs1bZMeUjP4t2ugXRJdLtD6yhWw",
  "key27": "Tq5dryeFcEzn8peXTF2utGTa71Vg6fokw57BtKdEPp5xAHQ4wbq4zVN89vKvqxAuKrFWKpkwFtiY6ULUhRrUXo9",
  "key28": "xcZnxh1K8k4Cm27snMV46K2FpFcXaFFu9G5Bzsab3CiGgfuHowLQYCyshcTsXe2ykvKcn3nAeakzjtWd6Xpsofs",
  "key29": "3qdyMSF9LbZSq4JvdcrrDqTE9ZNouj39SKvQEANhKZKQpYGqVDKzZrG4BXVVGwGsBzqyF6fFCerWq2ENxG7orDP9",
  "key30": "2Y5JDkvQ248Qgrbp28my1egYJ2V6E6LKKroKUtjUdWAxdGqCmp6Z18B4F2nLoG24KproU3Qo1nD6Dh1TeQAbXkF2",
  "key31": "24hNL5NL7SJiXnTo71iVnHohwvCPTdKoVx3o74XuNE9in6Do6Za65252LiizhNx7bHacA12JVoK5ojHdE7CNNUFR",
  "key32": "3117pkQFpH7LX6fnhLMxs1msEQbk1hnAF68fGvBm22ev2xeE8Pk4LhaB2xKdvX8tVamUZ5Pz1RJbwSvySc7dAfJb",
  "key33": "5A83PF1K9MNRaAJELk71LgKP9Nkfb7s2eLsTP8hu1v4D5uPW9yQHbotAySjHXSs4d8RDP1ueBP3MEm8XicHcSPW6",
  "key34": "ef3jvNU7zs1B6C518sMqTotHnrSoTWFTqh5N8ebyQe4Ac5GAM7i8yeRsKzzhs7k3SWuCQ5apr8RrqQ7pM3ALbLG",
  "key35": "5ENYjzUMxNGQiLRDttS2m4U5xcFSnuew2A6c9EPinCj7isfaLfEnXwNtBsSL2sQ79FcH4uT8koTusF3V1mKWFgif",
  "key36": "GvpiY5AzbVZW6p4EAz1oxtVvCji85wqHcHLbJwYmVfdUsMAHfeZLr1ybdAx3Me56XbPHBtUMmmobMA7MBPeyaM7",
  "key37": "5GjxSq5yGDoRW3tcuHY5Qa8RZEPHYHUTjRhRC5kaUA4eKgKnMS5SNHyckvibN2nKLDhPvqJUXBhqdMoCE89s7Erq",
  "key38": "3oGGnXAiaovWnSm5p1wvyQW1QX6dkdrJNPecsc9mXhND2WLRmmS5zMpHFaPVmQG3BZGqSuQa5KVU24dr8cj7idxj",
  "key39": "3h26xaYEyabYx45ynX2YEZgayS5o3oyqLBd9t4jzQDwR9HDAY7Tpun1GQe4bz4bXe8dmvEh8eHzanvkxdcjpGQxb",
  "key40": "kULfUHnmNgVz8Cwdtt5ZtogAbbs8aryLdA7Q5n3RfcgKwajDnkwbUY41vPZqeWU6TnR8ADGa6w6yxPWB1fScwF3",
  "key41": "4D5KPUS3u57wXkuLq99UfCiJQRQPyLcdMK3FJGmFQBoFDgY2DGJqgtVKEyyvbNX1mfPjkWow7mBYY4YEouLupf63",
  "key42": "43kxtVy66kFvgi1Q5fbqALU5SPj7RxN8Zsnr2sX4wmYMnx8NG3NtrfgvgLS37fxto9L1BnuvS4FBJwBQiWQHtX7V",
  "key43": "35Vu1MdzgsH3QosMLWqupbTtXAbEeat52Vj9898iToziprCgEVV4Ye3wBBpCuST3Ap7S9QRGssn8CF6NsuDcFdPy"
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
