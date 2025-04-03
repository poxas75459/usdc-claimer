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
    "3BqaU72ZVFub79vocwo6RbdPcumqhUuZJ8xJnH7Nab7exvchTcsVivnGZq8Aw43mobGJXugRktxXucE95X89SeF8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rGdZ4wwix1331iBUPJBBcbXkktAaw8dENLP6W1Vivvp6fkcpYo1UcKaT774J9qrvRFL4J2Run5az9LVBV9Y1MGS",
  "key1": "3npk9872PvGnErConSppHiaMaizvp7DxE29eSuKiNUZ5z8WZBnAbkoHaCejJpnRis1zsTLCJHxeS3LNgqJfhJJU6",
  "key2": "5Bv33jWvQ7KCifpKFJpVcU56iJPEZCZd8UhuJ7JGNXwcJ7HxLK4jFNqjXkAtFxBahFLCxwETL3PtY3ccGk7QQj1u",
  "key3": "4mprGFVmYnvw59YbsVtoKQbq341133WbqV4qqg1TuQqAnDCDhzV3i3RoP88CyauGbsBk2dxua8o8eYnaST86by1e",
  "key4": "UwTELyDSfEB3WzRJDeCQuwWGkEaE3XA62AZeczmqAzczVuRZ7vDTwwd9wemqTPLVfEgBV3ssA9eTjWigqPhiCvd",
  "key5": "3jhgeUtAgLZXSn2YBGG5cQvK7jvLdeLXx1RcjHCNQyiUQD5ixEQStkpvjSTUKUe5m8Ly7ZqLFf7SWuWfQdf1xwbr",
  "key6": "4BLr3LGFDnHMSkq2zC5153gevrKg8byFgYANUJFJeAFVt3fpnZcmJPFAwSw2iXjckzLWH2xxsfCGFViWZWdgHZuN",
  "key7": "3wf38gpQXcFxVPe2Q7AHWjNR4FNbMNF9rpxYa7jQwZA5GkW9d8iNotSnPmmmFqwMjSJqaL8CnvENdc3FXKbVqPiu",
  "key8": "46reAiAwoA7vSa4MgZFC9jkjgV8UHWwYGd1SVZDXqQ8NgPf1Hs6ywaCKd28swrDkk6nukJSUyHceKQxj9pjcxQSm",
  "key9": "Vk75TZBD6V9uv47wzAiAmxHLrQ7yY9s2Y5eNGbzJPWozPacb5HbCYSrUbq4fiBdriMaoq5zHEsxe2rHg7hQRzEH",
  "key10": "23hPbKpmJKKXxtZ2A9GtYw2z3NeL9rpxd4s39AewEfprw3cMXYKdLMaAfk56ZPfUJX2adG6csd23VyvrwJxLFKq3",
  "key11": "4JQBx5jTVRNYZCkhJwD6r2WqZFUyCh3RDopS9q3xBS9v8syaXgJ4mtY7W2jzbxMNEPdYykMjeKRKu1tfeWyGbhUZ",
  "key12": "395aG4nH6tyZde7rjLo5P1PwoUp7njjMVnB2VaiNz6kdn3LVKj8A2CMHeZh7s2drefUuimkJkdw2b6HdgREfUm8s",
  "key13": "5vNvKPLnehVWNq4JNsEfAorZAkTbShHn8WQVPD68wUhRmaJQmuwrqETZYvA2cMrEbkBbrHeQBE7ciGQP6eBT7whR",
  "key14": "4KbtRAJgE3JdF5da24HokaQ3bJAXcxvHg1Kon9Ji8wJQfMtqvq13ZCFtrtLHiU4ksKjKnTyc8v4834pwSfomfzv",
  "key15": "4HyedNH6whuU6mEHVcxnrn8SZBJD8MGMKkkHustoxbqpDfiMNgqHxVktaJshn2bYXmtKqew7SEgfBtNhWi4vR2sS",
  "key16": "4PBK6ws3npTko4drL6fXNRVvVdbHZxSjaFgq7ZpwhTGcbVieWTC98WTD2WS3e6WoLgX6sBxtuxmA3hNkiC2uz56F",
  "key17": "12CngNVXLFbavNQBio7VeTmyG2p7QgoyWrPJ1RbQG1VXy2BFzWXmbVrZeLpQ7scjTzS4oKs9jBSUVP8WyryZcPD",
  "key18": "4HcE2h9W12vmQcwBRBZA8p8S32Guxh3hLj4SbZ5Z5TP781YWdPkrDUA7JHbvJrLCBD67ZpdK2ZEp2fAXtfNuBMhT",
  "key19": "2ebFAszzPp4jXGtzajzsGoVpJKKY3rmqGs8Pu4bWAnvYWe3iyYRCQGe7dfEYmLaWG2cwEpe3bwwFTaetC8VFUXEf",
  "key20": "5dkkWh6VRRrPMRMuxz7QFYMQvsYgazLFqouDf3rXiUsEXVTTeB8LVCZfruPm6wRTrTTXbT6oiHMBj7jWHnp3B8tL",
  "key21": "4gKDx5mpoqZNCV2aGNRLBLVfquy6BvcfCmUF1dNpENC3GfRQmb5zgzWQJSG2xQy7PwKyWHCRJzoU4UUKH8EYbwct",
  "key22": "4VsxDkxQZ1n6TNUrVaa3McEKhXDw5GaKqJ4HXYwLuJojAkqvFjdTyzf6FN7vPbPSe7q1wL1pnTpcjX8LtXKimX3g",
  "key23": "4KKYUTU2tb6PK1uwhpssj62LarqgWv2xSNeHwjosQaVfFxkV8Vz4DGgHEDDveEixo2cHQN4Rf4NtJiB6zk1kkXJ9",
  "key24": "3te42BhX8vku3xT15jMyL5gfS1vMW4YM39v9QL8jSpHPmutQx1xmp89bW4biv9nry43FE2YmogVCftjDbg1K24gk",
  "key25": "5fp5i6UDmTcDqUsbME2ot8r4vhLiKXrvTJBKXwXkfojL67d3yCimGe7dbtF9d7oE4g8pFKbMes8RxQVoT9bhLWVy",
  "key26": "VsaEeSZDDTkvi9usCehBBYiAMssibdeQqa8g5hjQeXUrSJf4tZqxDWEBJ4F4yV7RHVSooTFHVgUvU3AXNhKHFXp",
  "key27": "2AQNQdEqgeTK5LtEYCznhMeKHaoFWAqEfBibjBL2KEWiTEsij5d9VXMXSv1YoeUwR8FLZQW4v4KYtkYY1WxuSXm1",
  "key28": "BPYWQbLwHRgwPGbn1Vrfs6bsbpQ1r6jrf6VFZMt7mYB5ny37YkdzdVeHSdGoa1Nj4FUZVMZetAFCpMJRpvC2XgS",
  "key29": "3QLooWiAUpX1Sn8FApiArMMW45hVSDRyCi6qQjuHsZBn7ifAgN1S3MhVwbbL4jrfuCXpDLq6vYcuVAVi9CbKbZqK",
  "key30": "2fMk8czgANfPFCTae1jCgJJFuZYg5Hp53wx7Kg1wp7RTVaYSkw2T3nvnwgwR6bbGZ11BfRSPT7G5LQgNJofjRVHu",
  "key31": "3f9rxdpDMF2pMjSWxuFhcTTA4XRpXPGztUFNujnLzhsoH11vUgbT8zBKRxLJYBRbeor4yDgCbvEBfCfo1igqZeNN",
  "key32": "4o5VzqqnKFKksb2r2TtxgdMbaaBHCe6zETsG3N9ywqbjcn9E6eRrKLbUJLxQA7aLjtDpPefdD4i1NzS35zhNM18F",
  "key33": "3LDVLBZbDdUVnPPU6UVwmzYbyTt3Won9aj3E31jUR4cLS5C42ur86JaALj7Sqh3EHK2o5yPFUKQGGHVVeTzKKeNj",
  "key34": "31ANiPtDCrdA3a7xiBU3t42eXabSsYJSCskzWgVqCRFhuhsgwA1wy4KpLrWVSMhgmrDTeutbgRLMrQNwjyGwxEZF",
  "key35": "5q2qW2RxCWWEEF5KCm9QiKSWvjbYS4ZFbtYTiECWcyeaaxXJb9FftGVjd5naWr12HTVcXxPgyfrwiDnHWrAk1zSy",
  "key36": "5bEVRJHnZ2PxhsQKy1rUQuaF3Ah1bvursXza16YJnuDuqGiYkg46V5ZjVRqn4b4QF6ZJbMoeQAF4Z4ZeBVUtjqvS",
  "key37": "5yzrGvNYA3aEmb4uKAwVBjt7feyzMS3wXHurSuxBBRPV3yn8K2umiGH5JQWVMy4YNxt5XbmJxUZB7ytwu2qaRH4t",
  "key38": "WqxTtnj2dcNczrwbnnEGLH3dAYmKnCxXLdpd4DbT9TEinfFcsFjHvXwX6vjv5WB5fQUEXwZx8HHjJzxgsfkeo6s",
  "key39": "51RDNivmmM11uvGJSr9PaFj1k7SkoBysF1uxN3XyRFkorTVYtJwZuKNDyxC1U93FU77vYtcqCu9VGNoYNPP1cBfN",
  "key40": "2j463ExRF3pvuPTfpZW8epmj63ujNyfZ2a7LGpSrpdAvSEF9butuj5DrsxUp8dBaH6aGuvpRMfbDotpZ84UJvf7H",
  "key41": "25Y4tfTnTQErA7mu2vAunRRn4ss4tevuywC2XeiREhgnDdTbRPT3M4325ksmJq6koRSmPD86etX22zgo5N5w6wWc",
  "key42": "4aQFEHHJYwz64x9f8roBQT6NSs1kGjH4nk7SRDuG671QtvaphqT5oDUudafkJi36mFM4H3UTKLLskwFHscAdYTax",
  "key43": "3jCam9Qo1LLFBdsUj7vRksGi4SaDqpcpcMZjUToJtsaTKgk8Wx9pZRcxHjTguj5B1ysqvjRVRPm8f31bVg2tDqWv",
  "key44": "5yWxqqrctd248qhqL28gityJCUwBUiQsohZBB3MVxrgBWcFxxjqGncoo3rhRm6KhHLMCzYWqVt2tqdFTMfYSmQse",
  "key45": "5jBWobUFtr4GsADmw1eMG9Moy31tco25UtmVmfwzPu3XgeNisUMUfyTrtzz7zexeBcpfv4DMSRNH6iiAL9aLhShx"
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
