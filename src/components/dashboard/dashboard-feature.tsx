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
    "2pQiN95yBheAxShvFmZGufWw9BiuJq7cQhq917xsZ24nJQJcCDdTHh5uxjgVRSixe1Pwhoanx7aL2g4CrogpR1G1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QSEnr8tcstp5QFEW2APkkNQZSG47mT3s7SWfuzk3VKJvbwCQn33MshaHN7WiFTWMLFCSczQufvZYqYezE2iscrW",
  "key1": "4ud1JvosaBinK9XgixcKxWyk8ciAs87zPh6UxH8D95xgWwBoLr9BxMmwjvqkJ6Ge781XVSNzcwx4vJRU68UERwF3",
  "key2": "4HHdvhn1jp7AzbMdKsLiA9EdfLxcmAHz8HN4qwQzAY7E2CkxE79dLkLVEWqvzZj6zrxPMLn9wt1SqZN45zrFZdrT",
  "key3": "3yMU7kySPjtgmAxhFKBpp6WX1kUxa6bMgHRqE7T6Atpk6wryQ6oEVipNKPL9zrckjssmeoQQ1MH7bng79mp5GcRR",
  "key4": "2ZTiLJ57ssBn9HAdc8xMwnqUxuU83WGtwUhqECZiYx2x7grnFDiyAzUFHs9W9FmnmwWi47c1qFUyt8knTwXwAeu7",
  "key5": "3qSyG8QoeqCuuVADyoTq9r6KJm5ek6uKJcd1UYNruAda2FpnSu71YyKwy8t3enA4wXfNcbAsJrr2D5NhSd8sCnLr",
  "key6": "2e9rJeQSSP6nVVwbXEYZmHvjPkRJUpY8qafVpgyBBRdJdss3Ny8oPs5jwbdZneizcjxXdPi3PaADXfTeq3zAEssL",
  "key7": "41KX7ki8orWM4k38xgcf5rYTKAj8tmhKWCC76rrWK9m1upbrp8wU8wz6oDvqkdNSoVmvTQZbc3zTuZxSkYbfxYMJ",
  "key8": "2YVk6grLer2FYX63R89P6ANud7o1svFaLZYxsXMDxCzuaxMSpjek4mMQG6VGR6PXmKKWukGAzXsFkXcbWJe3Qzq4",
  "key9": "2dxbk7tVKRFx5nQVurSrkR7G8vBLqaLPwcG6xDycKTwziwH4KpqaAsbDby2hQuCSmYztXAKSSXndVJLpJG4dai7g",
  "key10": "Le7i3Mu9dm3jFXE6FMFhLjtmPLYEYFrrAAh8uLqum3F47uY9zuJmTVi7XUKqd3HLmQmaPcUu5QYWJ4z3HKUz15c",
  "key11": "5UmCJrDMToZC3eSPKCbUBoJ2uSQcYRqbAwaPbs9dv52DN8bqRAmgQDXvmfJofGqCUn3skx3wizfDjaoN2JHNdFrT",
  "key12": "5CNu7exX2fcruetf7oquduFKwBrf4vo6SGWL4mLJsiqcGu9YkMwqvVxmCwS8dBaJWvTJVj76Bjv4CQ7rpS8KSkpK",
  "key13": "2sE35s78wwYYCLHYhSmFfKU4DwaemA4TLG94EmQ4Gqt21MNQjEd9ouKobhvFWJWA7S5dVddRPYt7rbfqetgzKRtP",
  "key14": "3WcgJrznobPgNR37AxngiBRgbyqZV3FXEbHJjEyAXvVox2LDxoytHn2qWYaoLH1swCf2LRLynyKezH8GN7M6hvcZ",
  "key15": "23UwVQeU9QzWQ2t52arY34h7VKnGxFskPo6htL8L65CiUG1ED3VTQZ8d3w2Fw7hSrRy2kcfr1bDnkwPmmZDTQpaB",
  "key16": "5PSJTwdL2aG31mSYDxdAAzEys7CAKVspUM3P7viL3c18ar5ukjtdRhK5AVEzMJZW7dFLf6vpzY3PejNpcjyS7CBu",
  "key17": "4wKWve6anpdahMdtFF7P92cEZWbgpRjwyq4qQQ7i5PhjmSBtQvRRskr2CPcqvgwHkS3sRu5eVj7yg1qq7p5HMwXy",
  "key18": "5xERsCMKD7CEGoon41J3yi4FKArYXmwBimbB8wrxrUfG4NNS4yraXuUeML7kUFSM1SohzTTYEBFCG9pxypNDSpBg",
  "key19": "Sz98CUQCpnMHCYpVLgageiV6guA4szGMuFJFa2pjKPhUqxPzv4WHjthZrJi9aVgvr59gU7tmtoR2A5xhVF4KF2W",
  "key20": "38zhjBtx4jcVMRK5X2MEGboD3TQ4wixSaNFnhJ4f2dVJgo9S8p5mUY4vW7k8V9F1uCNoSWwYkaVFkFNqAaED2E8n",
  "key21": "5MeNfnTdeEULZWEekWbNpS9ThuxaYH1LtvgFa9Zyq977ew5zbwjYXL7FbrMAACv1fsVTY42pdw35BsKHvKez5kR7",
  "key22": "358RCCCwnXc3jB1dCXZqRwaQZA6iHRTfHoVPUf4493UHCVd57ddwdB5FYpDyKEzFN6Wm1XiB5NedsAasBS289wVu",
  "key23": "5ES6At5hh99JPy32KBzC8wRt2Ksv9s36d4Vw7Ee764ZRt6xdxya6QVMZVgL5hZqBkaB8ZCB1PachVJPJkEDA2dDn",
  "key24": "36iLcVjHPnvCVmZCV7xSgGPk3PwZCdDrEVR6orLU3NQPEJEM5YKJ8MGsdcivNjFNhnWxtdLJHuuaFtiZLo37H9Bo",
  "key25": "2pwixA97DJWGJabnuas72j1jRXbWeQXc4so5FqmGjBAhRoGMB3PPrFQFvqCVcwiZGZo3UCut6KRQjDPB7sE1rvQR",
  "key26": "3oTrmndVpaq7pBuJtZcoAgVsBfYF5hpnun7E3CPudEEJWbNFBs4qvYJxtuXBk3itv2iYNL1KU1GabZnc7u6cGoj5",
  "key27": "jK7c9rUQDnL3ChFuVCjXkEh6ZRnszeenWRzru1szCmWz3qkhyK58RZsHpHHezALfKGv4dWJWe4UNviui6FKVMtf",
  "key28": "GyFZD6j4C5Bxoffye9TGrzTGHbSsYPHgq6QeErNrs6gsDkbAvu6g5M4z759f2mAWPceygw5hMEPLeQ9oF9Frbmu",
  "key29": "2q7xDg28CtjYGZNwRRULvVPMPTNz3AK5fpFwMsHsiVztWwMdhTcMppCz1oMbtd6uxx8nwjutCSNhMLreyhezZ4FE",
  "key30": "3YYkYN5tLyZfsXsVrtxdchv8XfotqDpCXSrMFWuFfge4ihRB4bxJtKAySEk2BQC9Wddn4B8g73ejHeNC1SqVFkZy",
  "key31": "4P8TUY5B6URUeNfQmPKXCqbk85cpa5mCs8nfWe7akR5URCrwtxaEwLkWTDJeikM8nqni7gVDfGhhzujqxyEFj1St",
  "key32": "5XXkepKVCrpkwVXo5Fg6swpJ4kBEZQ2BZwEb6h4GCHUUac2zxXrHRsGLQ2buHKDCLQkv66LfJhtffo3E1LzgK8oP",
  "key33": "2xi7n3SxbDyu2Zcc8cuUhJ1uUcA44s6FyEuT5xowWqGfqgwbVRHQ7NBanvdfSq65utsPp7uSY1S6mJhh1nSWEE8E",
  "key34": "6YVJNQSVSt4FKKcJ85z8U9YXqWBWC2t3zKpAeEjV3C7RR1pfLXP6ybiQiJCvkus8sMJvVvHt8oxaRy6BHrK6WM1",
  "key35": "5WXaphyLb3e8dVba4kAEMKsdDVSumLq63ZAPfhDRQnUQezFknHti2atnCNxkYsAS683z8ZiCYuYCqhQy3K3UvBzN",
  "key36": "56nMu5C4LYRVdo98WYdciqdeQsQTEn1uRPwXzmPjMDT5TmYGQCQ2zsqxLhKStRPEA4EYrt1o8uPHfHGw6qdPKDHK"
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
