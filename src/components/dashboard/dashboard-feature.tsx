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
    "U27ELZCdixTo2MiYPWjEjh6FqGtFSefJGnPVnu95xCjTs8d8QUJ7PmrECBPoDDoTXgK3ENVmgeUUNN4GCC4boYH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K8CJmcCj6BzsC2RZ5pisTGGhJeYUpLRXTxbNiB2aHRviAwduYuGrNj4paKcJJrdZLDwqNTmpGXFtspaTtDg9g6r",
  "key1": "TVL29nQKQoqkmCzgFJFsGFssvSkR4QFMH9REr3RuDCvtbqZvNsCMGFSYXM9WKhAnCMX8G7vbiwDHyRq2PWnPi8c",
  "key2": "5NLuw7LiDV8t3QxdapSUzc1T8SgsQ86bovTmFSX1WJp3geHMZkoJ2t12CFrqAWReXXb2kH8HNEYT4Jeskpxvpvhg",
  "key3": "5oz2dzdwzE5ZfRDm4PZAstEtqogaNnmpXtpN73bNoQ7PzxiKBGicuAA9SJKm162YwYtCLzHefeD29MUSjKrnrLG",
  "key4": "5LhTjk3VdiYzsZcXewkZBKT7qLT45oK716fuiG4YNP5njgMcKeHZjQmshTdJtDvStbJrsFeP82TojkCRGFYnokFh",
  "key5": "34dXQ4AMDtxbR6SyN8VTmN26YuukBbHpJVpAAvTuSwbMWZvntH6WHv7skUZTbCm5udwBF1XgRd21EfcKpJfhBskh",
  "key6": "2M5ZVjuc5kwGnK8pm2J1BP3KF3hWQUD9THisPfi5JqFVTz4yKJfJudyEK6gjUxrkMbmc76rK1ttJzGyrcTu8i9vA",
  "key7": "q4XU9NhUfEkaeAV62JqkcWJa9UnrVWuNqYhrnLfrE2UJStRXTjffsNrbV6w6CeuRZEXZGqvfD4RQrvT4VkotX4L",
  "key8": "oHHQgsrvPz78S5usQweFLqu1vAoSNZTwPYwsXt5TB4UbGMnbmPLMrWd4RPz2DJo49CJJgXY385miiKTccYhnfD7",
  "key9": "D9pTpEoXrouhEGv5hffuSTPJwpJ82PSS9MNu2zcyZmzb7UayfyG6Ko6rphNd8a7nvHvwyfn27mbdWecfCMZchE4",
  "key10": "4Thc7UjhrVshNpEBhavRJZbx7LuDJFCCAAVmPzHjnUkrFGM4MPxCvCpq6cMbFhmL4UUKv4aejdZWSVKgiCuak1L8",
  "key11": "5d9wV2iHSGPjr9KvaCcEEafmEg317ZjYAkuvf1oA6aWKGASiWJhSEMCEXkqrJYfR7XjpWa1Q3tQqACafXZF6P6oe",
  "key12": "3nDDCS8EkgeXFsjvNrTtxAUJ8fYTWQdExnxyj3ccMH6tDjX6fX1afwffoLV8PtfgYaHbWtkMJ89MWPxWWzsYSrwK",
  "key13": "2iCHjt8WASirXtuoxqkEWHR4Z8r21qmUmSXcUvnqsdHSNzTAsRAmJ44URjn4rj7PTx5UKtSZWKXEmCMkS4mE9jWA",
  "key14": "3D7utfWe7BUPyHnig5YaaBNBhh8PZ19cbNqz2xd3yBp5kBEpuCk9hPW7NrJjErg3pZ6Dz4ArF2hht4k7d6uXgMWD",
  "key15": "3GYjyunZJ8Upq2GwAZ8NnXkQYpDuVmHKogdhungneLHK7rTk9ELkSeE9eUFH873ZSa1ZnzbSZq14s53PCXjJbZEW",
  "key16": "266wk3Ls5T2JSyFTJsrqPTPV15XjVDFRYF5wnAoMbPjNRzzMGycmMfgFgBRWwLrTbpKdgN7AhtbABiURqga3Z3py",
  "key17": "5Sbon3AL56EPdbboY3bSigqy6TqgFX8Yz7dvNfR5uCqxpftPbPsF7v5j854qKFkWWP2Dqt1t4NGuJZUUAMgn8poF",
  "key18": "3smVUpMK2sCPxJNdMLBfn4H16owrwobT6iScSS6ncGyBP6waRnMx45NVja8GtmNW68qkTJWih4PNmdzBeyKyQVdz",
  "key19": "56Kd4DaxRRepaZz75qG2BijiGnPE9e5ytAGUbeCSKK12pueSfUk729cmeKXsB4XPujQAsDwGQfr7RoDyoieWxKmd",
  "key20": "2YttcE9Aok9CXSHDdBcNQA3X6cdWN364SBpeTWL6U5geZi8rANJTupHmn7DtE4ZY1wXzV6D3yAZdH1FG4ddqgaSA",
  "key21": "9hc4E7vfzopoyBWTS3G1fX539AawEa5kgRT5Ge4Cau3GJnc9hLUWTmwWwf7ru51gVxX7fXQBxKYtwcCHzpFymJY",
  "key22": "wvf7tbq9VLouA2YFHSs7VgoXc1h77w2aD9dYVQhx96aFx21Q8QcyopaCKgBDpRJJHbpRN6X6cvjAnHykr3ADc8D",
  "key23": "28kou6Ra6uNDfVA4G1iJjimYj2zvJup6um7raW2NurTr2tFh28Gxx59d4vyRfgJpcfHDxqJvDwKbQCiTrHSmwhKq",
  "key24": "4mL7C9YzQr6bRhUD5TLCpX1PiGHGsoS1svydBwpyYaWixLYN58tfTckCcKo1m6Ko5w61RAg3Eo1Joobu8CaBPCQj",
  "key25": "dz3ofBoZv1PTrHpkC7NpD4d9qiMKmbf4EFFMoPZKVxNpGYi9ugdfMgfPWDnFow5nfgr9DeJPDYrGLmpcnxB4WFS",
  "key26": "4wVLYYTDsXuXdmk1NJJej8LuRiVqxgFKHRkkgbi6n9xeQZiSqiVcSKkreg2Nhzd9JJfgdWMhS9GFib7yz7NT8LDP",
  "key27": "3yy2VG6V5hwDP5f6DgDM7YczLJuSAG4YBTWSSMfdPSCuzoB32fphHDW7ytDk2JRGZ73wppC2nNSjGPLDJdjXzSEA",
  "key28": "3HMRjCiHDEQYUKNuiPFZUw2veXehsPKTLfjD5zrrgqkDDnK2i8s2ZiMEMpMcj2BcTY1yYoFrVJFjaJXQUD7RHD5a",
  "key29": "oHNDkJQZ8TJZ9Bq7h37EBVpBBQTHmfYKgb1sXt7Ff3JokZXkrnrqgF48o17pc91JN1zGYJFfQ6od7ASUSs1uxGA",
  "key30": "sW5n4Li653Q3fw2jcs1ymadqeB1MdT7TgvRjf4UXPGa9Yz7CNhzR3nb2rGmaRJ2SofyvTmXGpXah7JP8N3yzaBg",
  "key31": "5nAbtyxaJgE9vP6P6CveVSnTcMbm3CJmc2HFsTz5oosmvrPUnqtNidafvDeeE38qR4Fyn7uC5RMVNvZSy5kRw3rd",
  "key32": "2n5N1egRdPtWn2teCTLun5x4JR1E1DLwkdX9bRuqK4FZvRJaTp7z9YUpC3tLhpWxnQqghRrJCJ7L1VNBiByF2ykx",
  "key33": "5Af9DmC8u924hKw4b3j9AEUV3D95frcGKfcGSuRomrHnYBKKHaB6cFUW21vDiQdaxeHSnW1SDsVWeHuXqyP7ABYD",
  "key34": "5JGSXCWtukdcAQxxo5j9Ch1e6k1gVwJ2h12PDe8s9365R5SdubkrZ5Pq3b6MSRjfcYzjzWQZcT4m5PqrBWQYCn2i"
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
