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
    "3p3BiDmaSgSHkjgAm9H5XYAtYnRrZVj198gN3ReH8q19YM6199rTVjTtrayUAZJ6Mk9vUVnycLHqcVL8YYcFXyTn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ytDHWe36wwHFsDBRhM6XFD1gFc9cHVT85JMECx5rUCFboCqPbwXQcYvYJapVo2CvZ1DGCaFKK7fuif1s2rZN8ti",
  "key1": "1dZYJ2ypRXNgWmtRogjagwrM7peKCc19PBEcFDpFv9n8L9EHeH9LF1qNo8xYxNJUG6XBWM3tE6o5KaPdk4NXA7V",
  "key2": "481T62SVFJz9u6ovpZXibUXECt4GFwGFwMP75F21JYoCe33FXzMw9vaJfPcjZdENXqZC5UEC2yKsZe8xReothoXF",
  "key3": "5yPrZk1xuBSQz4zaaUzc2kgFGr1odmXE8GpngC5oXhnxqfJYJCdT8mr4y1PLDmCAGAHhsF2zmrCFCPfbfk4zc5nU",
  "key4": "44PaKyG3xEYLxFy4W9UfJtYDJvZkEqYoGZbMMpUa3rbtiqHcTdAh7Co2swuxoq9WeusTdW1SVyhqpvUVk3xm6n2e",
  "key5": "54b42Cq6oje7qhn7uNg8i6DgF83UG5stF2o65Ze9mgb5hj2ypYCS6GSK48krHLMFT2q2pFbUALKXK99WKQTbwt8y",
  "key6": "2GzyW2xGixLHnU434vcXBY2nasLEDncNEJCWDCQUrSd4ErtycN8hWmZEQy2WckrdoVxL6jmZSEK2gXHwQ682N1o2",
  "key7": "4tfNu11YZZZPCmRsTpfQEVgWvSjBNMBca7XQoVRktpvCSYg74hPcTshPiZfSSSCxVtZuEVmynND7zVm15EVZg6xD",
  "key8": "4kDyt9XMZj1tTqTmAwJtcyWf1oNtiFvdn6zqoRUg5wi7VzwRcAH6aXvoo3f54NCdj7f4jDh9VJBHCkRrSuzp7BdP",
  "key9": "3cyZF42NTQdCjv5rUMVyivEPMbivyL3xo7jHncoQuTstxjyatKkTfpbg4MSDNmkqbSWze9LcLL6GJx7U8eSGfsHk",
  "key10": "3SDNxmrSVV22vyfhRWePjWN7tVnouGEkdY9T8TuQwbjCuUBs9j3LAuLUfTa13zSNk3hwQ5Azxt45n8Lg1WUCa63U",
  "key11": "3PGuubEN84La3fifLyAJ4KMii6NGZNRUbTLDdoYd2uExzvoWmz9i24WdiVZt3i2AqAribZBcjsZt6tYXxmHB3zjh",
  "key12": "4iTXpgGVQF18u25ChnWB4UGVNxHJncb5a1XM2RQ1YN9w7b52fNkaRvnRFoTL1tVgCpWAZC8sgi1sB73HWP9xuf7e",
  "key13": "3RzhnAb9WwvY1fYTabuR9RLAyH9Su6LSjS3hSbmWzFuYF7em8G7y41tebcnrN1FhLMQircgMcfTJDNLVT3DRfGGb",
  "key14": "3cddbVyLWctkvfDca1iGSCvuvsHS9z8f1xues89kPeYnH5YPCF47R1JZj8KxakEfDEdX7jCJcZnvWvfqGZE1mB3m",
  "key15": "xwS4UQtUhG2HLvbajGomwPBmgZwKnxhoNWg5Ss8WSWEuVj4HYpkTvsvkDYf2Zm5NAo3YRLTZoc83VibTE3BDKnh",
  "key16": "2wdWCB3DrhVXnZn8CTkTAJdM1XF3yEJvP1vS9Dfczb9bVnhXLXFpdr7WmTucLgMaEUY2nyuVYeyQQbe7YcYBQJ96",
  "key17": "2NMDXfgYgxbFdXeHnZbUubetAwETssj93cyym6YnCoqMvPy8kBhsNrLuEjmQ26haQR49sQmAx9b5PZ8pkrka7mHZ",
  "key18": "3c88NYshgmaprn7h7SxTgvyNqFbPi2n4d9z1PB87qQhdrrUND3GfyMqg5FAB7VjusCkixc8n8DsErejkwNA6HMgg",
  "key19": "4UokgUdgKiA51zgPr1DsXMJKe9MYsb542joGoAd7LFUEdQebv6AgFcZFGzwghrmiBqJvdAj6U7govWHiHLwV7ydL",
  "key20": "3G5xDyUQTVUMmNzSJWLbdSKJC2BZBeLFTgmaYUzLdi4nhiQZuayfgzRp2jKDvZpZdNDi4r4rNB14pQuU66xBWSEa",
  "key21": "33VNXH7rCKArUDya7xKKUC5JECBXFdCTQxUWquqjd9epqJ3kGrY2s2TKCmRi5WftMZ3b5iUpKRKXoDDno658SuyD",
  "key22": "2EaW34MmZcEfB8cyMA8BARMpMTVvLxDj7aJfQV7gBdpnspfok78eYqxuU1mnz1JEGHkFSoD56oTevkY5E24hFQ1f",
  "key23": "5ihNi7xuVhogmooMuuFAJaEawmQPmvMLiER28M1fTnXy2SfriTQwp7cD9gw9Eng5ExLH7B9wnk3LsPvHArHdBhdA",
  "key24": "67JMy7Ta1N1bDcwURQARoAUYZL4Hr9tKam8n4yP24qUDNw9aifCw6d4YXLrCYE6NWys8WQVAncBAViWtvxmqYDRN",
  "key25": "hpLiprQmrEZ1m4TEKYUGUpSgPydaLcFWrnVyEp72zf3rkJ4NZbsjqQKbR8jMsRvvK6REj2EeFf6VvqXmRwmhDh5",
  "key26": "4DfhVUa5c4TkyJpBx8nDochX5QahiZdK8hGtuiJn76RBETxnz6R4jB16JgdiSzSEutMKwZVjA5jH8JdC5yX9hT6D",
  "key27": "4ZYCy5T5FToiTbgxAGEYXWX9XmSiqQsWbZvsr3b1ZUPEVuDVwEYkamrNAXP7jeVkWZi4F28R8nSvJP3ZwTUgyoCe",
  "key28": "3JqhVLFM7iU2dJm4yHUUkVsXALDi9nVWoWH8FHVN87grQba2pHPjEeu9UWoDUpVrffZ5HAtaAkShsySMqqvGHCvy",
  "key29": "2j392AAyxJzGvc14m1aRReVEn7QHotyGUtruJFWdivfZsJiemxFqBgL7iVrMXzv7B9qZLJCrE2NngqsVJ119Bs2Q",
  "key30": "KvKvSgSZdQYPbHUkYXYSQWJz4hMqcGUBv2oGsjJB6uq5b5ktWWAgWTdpxB4jp5udNHQZF82TZmE4d3vJnjrh3mN",
  "key31": "4utDm5CMHhuvn6N4hpWwrbSGrHGuJieUv5Mp7zyWot8s412zKkX6hhWJqSwpmYoXRme8k5Eb5A953gVhmXyHEojM",
  "key32": "2Zc5AoU1ShfDhcaaBVEuRN6f2qB4DFybAySQ7uSwhc3ULy7BxJ2QgVVNYUcM27CQcS89dkVD19ZxnGY9vog5dWsr",
  "key33": "4inpVmyFRkk7NzxmsSCZENrg9BkC2QpRwM2T1pRLriUtr6kUe6oiSFVcqo1WUeycdMiRW253vYxAnykarzmWJaEG",
  "key34": "3v6tbJS2BCcyN776JjpEj9heN2Jik8Km4FPEtphu2MNbahu8XSsD3oTNHcqUuFfAnSGB6LWfKJY1gGzStXwfYjm9",
  "key35": "5C15B4kUZQCTZJGuVmcsfz6dksxZWcMmWTFRifeXweSvNj9PmFSCSNF5dDwjFLVpeQ2ANLjhS1KNi87afrSxC67Z",
  "key36": "5fdMPioetHBfCsrPXr5oZe2yzdW6u5FTBmxU3rTxYGuddzx7RDZNpkW4o4WoVzu1gdEZnBeuWTiESb6Y42XPipVQ",
  "key37": "5SeFGSzgVoqEVDcXW1deLqK2tJTASd2xym4PbxwLLgnLPVHyyLT1KFFgsxa1MbS4WHbdJfBhTWFxFtN3WvzM5BjQ",
  "key38": "3Jk1uKkqd3fWXamzV67rwCUknXz4rqkgMVLjRVmQq47mpXCfHf2ZFJZMEiJXP44P1KM12hJcwih1AyyKm9juSnbE"
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
