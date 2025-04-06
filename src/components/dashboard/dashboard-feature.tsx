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
    "3dr6Yn333DRGWaYQXjEwTHP1oTM4kqTC169KvB7a7Wd3JkB9mZwNZXxicbbaAvpUnKTjWVibseTc55hWcTuTKF2B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "562pWJiriMfBgqTetRJdpUHaDVYG5F7966X5s5MyLf3HAFe1AL3euPzJQ691WxRneqtpq9bGrLLgrM64mURmiD3E",
  "key1": "2xpBqC7qzBgzaWZ413QK6ZMrTv7oU2eXv1Q8YfA4yzD9XFzFCWDgosrsDBW6Vpiws4TYquXDQQxrz3FaHh4QRF9r",
  "key2": "21wfynL6DwyBUfWMFwUq7Q6MBELausDZkmDCNyqvXWQdrDcAYaAUiai3esXppaoXmUBCui5oaHCo1hS46ScSGgjF",
  "key3": "3q9JuHNCzZPCq3Zjg9gBUDvMZ9BMt6FqvWckQYuzuHQ1n3hGtbr8qskE9CTXaBTdXfSSVg7ERdEiJNhxpnhBuAgK",
  "key4": "4vB8JG9axJbtP41Du8fRzntKEW9B5U9p5bf2i4J4NmXhgtwVLGCyCt1baCtYob7vKSWajw5Er2QtWn7hKDcxr1rz",
  "key5": "5j4Lq6doWRC71fmKNcjMVdMJfgx47qP9XxsSWNEfPgkJU85S3jD7mWctgYwTUUTip3Ksmy23LGztExRHTxpaVp4S",
  "key6": "4jjD1oiWA7e8jRiPoDvCdkAFX36BTUtMC7jvNJxdnwyVQtP6EMxqciEqiE8vLtYJvbAZ233PfRqSnjTJUJEzMB35",
  "key7": "2oq46HUHwzWCKppSeh7cuw1gPrj3esW4DtL6hXYaYu23aDZJuh7Hbh8tH18o9YXWPCCJXcFoWzLri42PQkE65sQ",
  "key8": "4SsVcsNpYmFNq5omCyzBRzUsN1cM67BuJmHrmSw6geJY8dxsNG3A5zqiSdNnnLzFUaQjW8R2qzoaiyRhdvH3BK5V",
  "key9": "5rqqTk8q5m9JrGxC1u8MRKQJokjpdXaZWWxDZLMZnLmhGaqh9Ge69uJGgsBHSjwee4DjRJWC8asqu9LihtDLwz8w",
  "key10": "5urD4dU4U6gyBriZ699NSQS6h6VdbJTgeipQ3X5FvkBTJRgEYkYTfz1d3jLwh9r114MAmK4cL431JFjQfzm9wpCH",
  "key11": "59ZQvyuK3v8GtFZmNBApJHDUupqT5Jb68xKG8c9bKrrymQVa1kJqP7vtf72oPejv5aof2yoC2YF3JcLvbDWVSq9s",
  "key12": "3MDGj3DYxCiCRWbZHKeC1vKKxY1V2yhRvaeV38JKHgFr94dHKPz7BV6BuiGLTdJCGoZyNgBDJxjnCQVrz8atjYUB",
  "key13": "5j2Fp5bt1ZAqwCso9G7zEhVq4qp72aS7sG8Yj2zXjYfmtfALNwX5EBrk7TgUQXXTqYLzStaeENKhfxLrtRTkQroM",
  "key14": "3fBCKfyHfe22VEQAhz3f6vsJ1FZGEU1EhNuy7ft4iSwUT6ywANu4C24MDhx24Wz8qLCDoH1ZfUB9qNBwJ27hMT3c",
  "key15": "3ZZyHwEGzghf1viNYLtW8PP8fSPiGpHvjcTLTGoKPftCUsKCZh6H6zRkwXmtpH1zpLrrgvFZLvAKw2EWSu75zgkG",
  "key16": "4L5DJc7ax6rvaivzvD5RT353Zqaa1iyAiQYDaM3MFo6Jt3HQ5NVBv2ieNwSxYDA5Pq2WTUMU7emM9mRwgm2xHcFw",
  "key17": "5itRgYMVvqA2izgXtY6sJqgTn1hesfUwWG8EJnmMyUgGsiBQ8U2BWbToCuCG2PiDCE8fKB72AcMvnRtMC1ZEJ7aW",
  "key18": "3G39BfeBWDFxervtMLZjp2yMjShtXP1L8PztkRf2fECN4SDywXuQTQ71tPYQPuz7i2pTxAg96HvQtod3KTz5PX21",
  "key19": "2ML9TrojyReX73TGitiSQZwNNa83Ge8NizsAeZV5xZoHMdgRp7MxykoHatEXJc5teDiVjLeJRvsdgNKv1iW9wpTM",
  "key20": "2nzt9Yg4cDp9fhyNaTvszECWdzwpvtL1AgQwwoz1SQMXPtKF29hTMjszNCpdgQpBikKp6NM7EeEsHMyfV6yEMsyB",
  "key21": "3na5WuVuZ9cyBUSJwemmc8Bgob3ksXUihsmznVH2UJsX6pT9ahWh7VqvDipqdtsYYimJ6KdFxBmQ1QC5nmJBuTz2",
  "key22": "3iaitFTUDEdN4G1jFTRD3BNBnT9EgUbFknzkYKF3Atbrk4WYa77k7cikn6zFyFLmZuaKfHKgq6YbhBfq9AAGdo38",
  "key23": "3qrQxMTz7tWkVrNc3LH9pF7gRzai3muDHJREfoTPyLXVzjPKm8aQMkMGpJGcg6Rvm6dQAoKTy5vN97GkneaPimD9",
  "key24": "byQnPBVLB2oZH5QNSEywpXVL3Lz7bHYazWErqTSxfw7JF5FdEZrB5Wp3GmDHDwBCVacieDjc6Cb2xcRwggVY49L",
  "key25": "4u74vLM3WwJgUaqsNVgcgHdp6FdH9YgPEZojxseToHok7arj28iyauQg1HzWJp4rQzCXajG5sdsGBdbMzE3L1fNN",
  "key26": "5hzNGtErmnk2czCRNLAZTCNxZfF2gBAhdqD6qKyKGCBuHt3d4eH8oudksBeTSV6w31Lgyirb5AsfP3RG6mRGibUf",
  "key27": "43tm8432LYNDVWG7hBVLKwtq1pD6Hj5aLmnyGHcQxbcfKuSwNPjBHrwymV3exWkpDrEVbarCuENBUvPz2875FbCs",
  "key28": "2o4yr4bHBnF8f6wUkm87hFzYW9RtoxgoH5n8KT9ttw2evzuNCt6wxkCGHM35t7VQnXaDfD7Sit39GLzQrfCd5s4p",
  "key29": "5RtW51cmuU9ybNqt9PT6Tmj1ona4SCYmRu8FMrC6GPwt5vDoy7mWdZjc1Upjuv7QrVQfwMqj6aQVRPBrWB1hN7Gg",
  "key30": "yzoiA84quAJVZDBaUPiRLyaF7mP1BQdwHaTcsi87UquY1gPWwHtU4xqvQGReHGzMQwhQ2p75RJhWXLv6bYakuaw",
  "key31": "3qkj83fydpypvArQ913o155D3zsbpu1ZJmJyBw6AKLdMfjx27TSnuPe4wrSRF12vpd9P84zeTZ5SAJKT9EurAZkH",
  "key32": "4DRkd4yMJLCWhrRCSo4xe8cwZtCAvupEwuF46m5SnQTKbWZvbDEB7Z5KgUFoEWCY43yBWxmoqDzD7VDsgfQX4gBu",
  "key33": "4Kig41s9r8MHkn5Vrw7uVaF52LHKPJ9bgSSLknu2667qbW1Dc6Ac71JFfdaosV5nuo6JpqfcmkSttkEUkU7nZTb2",
  "key34": "56JYXqxF665NkmDvncKmhfpAdDjQf6euUzCsyKReuDiRhEeP7EWQBiU6DJrE6H7aJne8DGNawXvvpHWV8ekFri9C",
  "key35": "2nhbKeZvw32iUy1eGCWxYKwqS2rJA3MVHB4SbXXxdLagrrXBGpWjU9xqrhkBJr749kNGqZsmWFxsrtJkDoBqR92u",
  "key36": "59EHZnnXmHXbWyR7MrDdciL8waikm3h8e6yYSgd3hvckujUD8DLDLLuTUB8zCMvvMbp4emirrLpkYfSnrJPGYJgw",
  "key37": "2HSNsoX4Ue9UTbskBiAnCMwjrNGCB4FnCY7mdJRwZoBUUFkfsi6P5QXcgfS9azfUS6NMqx5RFM97VJ3vZGp1czHV",
  "key38": "HDFrTvtSoyf25ZkRsiNS8Vja34iH7EEMoue6e5tEpMp4ag6hwsQkJ4ASmn1swCP6ZS7oSNMGPQV2oNe9Dfvmk33"
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
