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
    "tjs9eeUnmnSUQUju2QnqZ1gydUJb8RvB39jmqVbwqwpBF7xCUP2fYCa44rMLnKLFbx5pNmiN93dgYY3toVeZmcV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DNRZRLGZuCmjKNiyNmWcNDzADTRYwTsQvjmKXqjWyw8x76v2PWPPhHmr9fNdKmxGE3wp69X8xYmv4C3kgzx7D5H",
  "key1": "NTG1XHXMWm8P6PB6HHyktt6zTxa9kddwUyakEHTiKZyerGfSghWNYyReJjqf7U7hPtWfPLQVDR8EMZbyTiDUFJd",
  "key2": "5gqWbi2SGbuKKscAEocV7WhPXxkuVmghsBb4Bm1YBZQGX4KqXYaAdsyRAd3SwiEFErPePN42rEZP6RwDy9ikqntJ",
  "key3": "4jQLPu9Zzr71VwrKMw1oegQCh2CkqoRbr5ueyykLdzBcSFAH3AYpBeN5wjU9nyBRP27yxn1ayAeeKcMxbeHZnQaK",
  "key4": "cN7FPUgwBj85VZGqhagwqVNsoZEXEtMfNVzvNZ9dspgNp734z6jePh1DQVZwF1aCcqsWhn9FGvVK5vZNJrWGjwY",
  "key5": "3M33CZF9bm2RmSrhjcjtwK1sA3zUNardxzwgkQ64LnSFWzCJ9mGy8Bsvdk2oXtUVosLYTtd41VNpfPpTcGaAsxNw",
  "key6": "58Sr4E5AXCEJp9AFrSqfQbU6FRS1qvihbsfu2hPPJNHndxUeCFedQ8d35D2BWuQ1USPBmU4Y3P43NCFzNsGvQvoe",
  "key7": "3YpuVVnXYYgTT2sfDnsukguGbHpGZJo7RkY4471wMwDYfaCZaXjJmCt7Q1ewdkGjivU4DQC3KyrGnhEQZrVRkRWP",
  "key8": "5bm8uwGiJ99PTWGzxcYwmwPFkNXbZsCKHBzCeELBC7ctfGqe6RsUGSzYmphCR333kuck2cnu4h3TjQc98NFEWqvF",
  "key9": "3nut3kK5GyVQ91tsyHhZiq7e4orqe953GpskfE4fPRjQvcy2TCxW9P2GFATxj1t3WdjXvhD519b8Rz4ojtdjGv5u",
  "key10": "3qvNkJv5acsxNEec6HbNJCYdQPt8YCxdN8EPn3ZoCTGsoX5BYYytGX7CAXFtLiwBp9WfevAZta9Ny2LCq3DGHrii",
  "key11": "547MvyvCuGZbXynABcQ5qDqBSwt7HbZ45RpZBjiADgQWjqrd4f1KMAEYeJeLQ1pnCTYMbjNBoJNvxF9HcHFKCpKB",
  "key12": "5w3eBMXbsVbDk7EdaY8zxfqj386B9LPyy6pvAWUjoWDQPWWAKM46vqZrv4LxezF4udkJfaDtDF5bcGNsDXuyAAVP",
  "key13": "4r28yPoM2UH2auY9baXGBzxSPUvZY5CPhpPUk3yQ1ZVzFtLHy8Fz8rf1zq83N6qakn7FyGsiGWKp9zdceBrBV8Ym",
  "key14": "U3p3P2o5VKNJd9UfyCR7pLVsMWJ6sivwktr2pMYTxxk8u5rEpzuDkJYWVKSVTeDBwmDq4y1T8vzZVtotsAm4WsZ",
  "key15": "33spFGSC5mYRY2TU2HkjnM5t1ToRW7EhzBoEw6VskACUgXVppWKYAXuR5VhZTbJZgrMpRkF35EDov3S6H6noPZdG",
  "key16": "4piYPdv2uQK4MqdxRDyHudYv1EwmbJXJ7YxZUsHREUnnCBE57ovAuTekkYxu33J6P7esMHouEbecW4cjqvsAh5e1",
  "key17": "2DPNtfYi8HsfFm99oVhiaxYxyosFfNtpMcdzHWhomtonXoAwhkFU3vwPfoYbS6rCoYZTNegCtk2iUWYMd9RdHKPH",
  "key18": "2Z9W7bTATCNd5jm9oDLsrS8qN7rkmVVdkLPBFTrejwts1f9YR3fKpfQi8NooYymx7tSxsT67TsQnkziJSPQf2YD6",
  "key19": "jwEh3oB4npWhPGE5mXF6Ftc92G3cVyAKA4ajoibXwh2EZbF58y82BXXFZWxMRu6C9W5B1fpTMZsGTFPo1YS7dcw",
  "key20": "5WoeLQoVPqk15mPCnuZy5T2kPZmde1TFTt9W314QFnNx4PYZfgrRKzZU11FtLsXp2GkyKxUvvqM3kyCJgxgheV5W",
  "key21": "4APBdk92ftSeYp1gC3JHgW2xtc9GorU5GrdwtoDN7tKtqPA6FLBbc8fgK1Lc38mJRnWcyVK2sf377KenYKb8C2fZ",
  "key22": "4eQN86xB5TaVjDdzjEvP8aYDWDG4VK3ELHsgiNTDGuz2gQuUfoZJySy9msoMoM7fgGHnodxKtnFsCZzXh7CRj2Ki",
  "key23": "hA2jih1JfzKv6u11qhctuMXfzLxwvVruqPGnK2uegRWqsHJmod7gHUnqZCvDxnCA74ikUwRNfn4e5YuYicktQme",
  "key24": "3Chv7Eqzx2mFZ5FpconYyx6TkoCz8v7GiT5vYa857wrpD8MrxArswm42BwXwjRnEhc2VPNk1fsePxu67YzVvzqtG",
  "key25": "3jHD9CnwjbhNRYCk5rRV7ejEtL6FAbXYxrqtCXDBsLPwWrra1hBQoAwCwe42bTbc6cwNmGu6JTvCweAXnx8fHcqf",
  "key26": "4R65eh327zJ1H1eU9ruLoX6NUrXqxA3t4CevQvwU2DHhvgp619kYJ6aJdH3BJEq22DXsoRdgs9i8MU8i6dmjdiqo",
  "key27": "2ry6T3SCEEYnJmsNdzdEBdjCbgR6CvzWhPL8u1dvn34B7fzC8fpqm3i5oigZ8S13bV1BgNTnYwcV4W7CD86MbBfn",
  "key28": "4W4CZL6QL5GyCjnz3oZNLT3BHeytGj2aKW1hbzP3A7eohrmsMwYVjsqBrDt4wW5tSSV97p8kuSkUpKXPxXZxLv8",
  "key29": "66gdDDBn3GXvTihC8N3xzWufLgdbz9HFFwxsXrgkqgb1DBENpEUFVbaYvp4U3zUfGaLSSiN5ZJYi6g1VHh7q8Ncy",
  "key30": "4UDC3yhjmnCq9MRgsraUnTGyNx3qPrB7iugVm5kitDVmidEfuBof2JkyUSwCooujXPmUaBq2Xr8ckgqScKK4LnoM",
  "key31": "2hTuGX2MTsu5rg3vSCd1XKJkV3z7haupc2XQ2Ct3t2Qib6X7PcAdVFT6f3amgtNQVq2kyUu8d3nf3SxgpwPwYiHH",
  "key32": "HDNHbKhBmgkNARLCbLBvDUE6TcFfByTUJs8jecgxXRr8SCkcFqef9pxRtoTxxtAeoXFQRXDLPbqr2HCywkgvXU2",
  "key33": "v7DSVdEpHX2hi15PZKVyrivhFMa1JKJaNLHfvrDghiDdAwH2NU2uCaQiZCM1pgUQF7FByyFGWBYy8nedyVzowh1",
  "key34": "hwfBwKSZvo9ksSGP3VW7vb2EgPyxzPLaFWakxibDiyRZTREFqCTnb9ULCSbmAazvfKnvLuMcjCxAfynfRsSB1UY",
  "key35": "277J9X1ayfHQK7QyXm8hRwZowDE9b5hi7ahEWqFq3kwKdJ7rdQnC9chRUUMKPBkGVkGYNfMn28Ka2H9Yein4ebEo",
  "key36": "S3xRSMzgo8YQhHZPPr8tNjHvZTdYWTfJsC177D68hfTvks93j1g7pX4xfSepBKgnTbMudV1Sfz1hJQPtHfo9VBA",
  "key37": "4y1GF668srUbhFKEZcBGhnUYd6h9qtxYTHstCvLyg2aNzJqdUEWdo6wXYiemCfZCv388okapWS9bNAN32cmpEF4k",
  "key38": "5jbncj3KC9uEpZqwrFntUrdWCjwoe5tSxgVQzvCKpuk1LEp4zY8PcFWwRkzCzHzNtn7549KGwDSJ1HbjNEs43AoQ",
  "key39": "5LQaP2UrLrxYPSMfYwVXR61LVBHf87JkzmGedWHSWRmCfUrat9tqR9uHFFqSzFHCQuY33EapMndsAp8JetxRpZsa",
  "key40": "2GspSfrrwH6VHYYb59ADWc7FLz5wC2mLH4VvdoHENKPLpyKEuqZkrM4Rrr5wD74QVNDSdS9cZD2ura5MHnaUQD2Y",
  "key41": "5sjfwrB5gVVUyJH6JjktcTdwF3veEvUttLJ5Y562xe3n2a54M9PJP23xzrekijzkZc7sFnfodeCno7RUrL4g8efi",
  "key42": "5wX79qKXydgteaLMLVpU8HeAp6UNy8ut9Q4q1YmGFG1P4c3xaTG6f9pS3mJW2Uszk1RMX8aaXP6aRHzyDVFhJoV",
  "key43": "4cNz98kaYfs8bF6FtTv9n7DxEVVrgbQS6eSHYEpvTbKTvj78aX5a5zhDn1dfUz4446qdNcwZoFZ1jaNxmExyK5Em",
  "key44": "2RjUyPSNh3AEjmbU2pneokJPzJjcchK2NN94adppDci2eTbLexzXek3q6nXX1tbGbJeYaNBpy8gGZZA7KTUeajqU",
  "key45": "YJLP45oSy1gqXQo1X8QKC41cTz42zHCUdjcqQAbyhvWvhs9rakANDTqmCrfTkEF1FQYPcPhXo8Mv3UbiaiPTk5t",
  "key46": "5oWJyZa1dAmb6G2ReXBsBG7emb7pNvB2xCUXpcwc98tkTZrZVfHeXwCzVcVt1FH9fq62WBHWGtCAzBAT5XpUfLE9",
  "key47": "5XNXbKR3UBU887vnczCHxpKnvr9W6q2ZyMSra5yTbXKphBuRv7v1yrgxjvbxFyz4ULkDyq3WZj4fjFp5En71Xgyq"
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
