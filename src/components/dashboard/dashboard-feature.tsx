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
    "4PqtLYEfpz5ZzzuD53ZBknbZaabvjdxoXyoeewsqFsmruj3BxxXeQ1nv3o3sm3Lqg4TKSUDadpGsaEiaMThb8X46"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PqQtjrKSwvMAFMCQgCsJJvPHWxuSyfJUumZWQ9MmTmUEpYRW4EcYqxGiNhWAMrKuoQCQ2daM2TwHjkHSHkqnebF",
  "key1": "44KuykpJAH8aT5VV1NUSRMjzibVZeXkecnXD6sT7fo3c7LuFEX37SeScHFxfcaVPJAL6PMjjtxwrvZqwFWfD1BEG",
  "key2": "3kXYTJKjRu7NqmZfE6Rs1yZRsdNr9yN3iWik1ZWr675b3vLoK4Dhg72GaNKNP66E1KwknKdKxuefR5vJyZRM4jgR",
  "key3": "2aHjGEJVYwiydgjnmzhpvoY3Z3r5XPHA68y4QRDJSvM6DnuCtbJjyvGtpQbATZrYtGcvL6aLPertey6oSDtkpWMa",
  "key4": "29WutXFq6qENntijjYEk26uehdQARhtQ1d48Jz3ZHZMKydUz5uFPPVw9HbLjY39SPsUSe4dxZNkAK3E1veAXVLjz",
  "key5": "2gMQTjAhTdDig7XQNguFc14mKtvZ83gjKtxscozqi9QKpKZzeaaSr9X9sgbmqH4HBZDWBqFMsNjfQR2gN1nSN9Jm",
  "key6": "5HZy5vZrtWbhHAdbosrndcBHd5AvRP1SdKB5QuWvCy7Ak6qU8er6UFeeQRdfSeoJLN59DE2CYM8Gqyhqa8saBuZJ",
  "key7": "43U1GJWybu1rWH6bTeLePfbM1MjEoXHkxeksrfRszQ6DbpXw8vjRDnq8CBitNnrHKkbFN3Q2f5moJXRkkk689LQq",
  "key8": "4Snr1d2JF4n7qSCX5BEMrafCbcWw4ieUjarxPZ6P4i2LMABYJp4wYGuVwjZDqgujmMBt8r136nenjuZYLtrWeNKE",
  "key9": "M8Rtng563J4vfL8adQy1Jheesm6cMJAUg3hhyvEpwPyAqnrLwFmwr1zrpRfPtnT7Ak5D8p1GXy17CDvmXC8wBf5",
  "key10": "5tHyjokxsWitTLC5HyH3M8YxxhygZCoy4raqnPnG3fCgiu25bvzHMkk4rYGmCteQKaEyeDExKE95wUvVGUiE9wz7",
  "key11": "5QY4XoZLFaQJJhd1he7WhPp3SAWPx3tCekfQJgTgyBpXv8crahJ2LxSFad1hnMuXBBMhA4tmUvst7svBbWkG91Ye",
  "key12": "GBHfrWNvsud1a9Xxzn2Ku2W2hjsVeToPAqD83jFdHm26gt4kLUsp8SskVyxFUqQ8aqZ8C9fAue6FZQSN7TR34rV",
  "key13": "gYgfLRY2qda7hdCH9ALTJ4G6uxtNq5YJGpiVSeoDx1o9ZEU1vMMiFcpdzpePFF4WGEaAKweMzEfTrQt5LNUFCZc",
  "key14": "2hFTm6frkTfvcV1zzR5fuG5H55qkHZ1enBYLF2y9TfjXjyGsdH9gd2ZRkCevKwCU2cgACxVWNxjAUbgLmsC9s4QW",
  "key15": "53M44uxoAYzyiLUYrnJ1DSLdJKa9TJKgt5GBiJ3Un5qmWRftRwnXtwDm8SYwTMLo2u52JPRCzQJiw6ELw7P4crtH",
  "key16": "5nCC6XDhgHJeRwa7Pxgfk5XqvphHcyXiLDZXH5TbdLh8Xq5N7c5ey5Gx7CpBCkjZtUNzaUC8gPWFfZUeVc632sFW",
  "key17": "H7qj8r6RztYqq7GFC32eJrsdTbAM7HU3NfWDsevZ7CPVLi1Gut3XDwD1bHuQdksjFJZS4dFowehak2cmiJvVvGb",
  "key18": "4WAFAuFxjxktAhEopQ7D2FjuzHvXZyE4hZ9BDZaciwSYoZUeE5DsE1w97K467rdzCy6nwLvnmo7XnAZxMRDjw2fn",
  "key19": "4MU8pyds3SY3SdwgPpWUaWXGLQsyBJ4vRFDeWX6LXEitQAVes9LUfGn6B1gJhtoHCbVfeo2PriYZZ1ELtusVi7Uh",
  "key20": "3JhMTR93S9evz9hDJnMa7tEByDADPQrkLi2iPK9Wef4v5gnEP3vSuRzpriUHdQ2C5d3dvEcjSZ3jnhj2E1NbQ1FR",
  "key21": "47sNneyncoFeCmcWYyo23sg5DQpMTDwMUe3CHMqBB5pbaf6FKQ1G1oWMPUjLUmSNjW6RHbNb53WmqCasUU4dPLma",
  "key22": "2uJ3guYNb18aPGDZq5y1vojew3s5J51VmMEufejcsj74VY1EiMT5eLDnauPZ8LTBVjcWUrQsSA2YHXdkQDYKJjcM",
  "key23": "5Zof7kyjoXkLeznkzuQrFf2UGd7Eh7ZjDxGgFX2oH5pRNdvne3zXHC3NFGdmd8fnbng51P3CGNx1f3yUT9y3BH9D",
  "key24": "376KAxhgL1SHbyLLjoUmZ14KosGToNgt5YsNvuap4XdHLEukB3F4E26a9TdjJXuHkacDT6nCJg2bQ73QhupCDXer",
  "key25": "56HrjVh4w9iWettzLCnssdtG4tBswdsWfQMewta1FVn9psPn3WWGJ52i7UVazDyC8gPzUQUuUxyB1RTUkhQpVZQz"
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
