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
    "4Z5TZRP5adbeTtsVFdgU7vD6NDqx6amZC7fHUzY8gVD17A2qzhLFSpfi3tv1Noqx2sasNSYg3hGStS7xLacxCars"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66irqNvVVTVadgSmYuHEAiQ3M7uwvWMy9bBKupcjF5b6WWRvBaTttRFqfzcFpRQQAcVWSL6NmDdMy57CZNhLS64Z",
  "key1": "5FZTRwt3u4em2fC65rVcaJo7qJyfqwZ5HygRdbWqJtigxBNJjELYaatCY7C7HP6Yt5LdZnFqgWV5R2Dw2qJdQQBA",
  "key2": "3rreRs25CCN3aL7wb5MTGu3GFjsDHAjEBivQCBGjBdAQqGZox35NVakmNB69nbc7SGvXx2KTjAbtDsGmFSuDmJvQ",
  "key3": "2czb7TTPdxDBKoCzYNGY1Mju8kNAS8uJgsp3Hs9j1dHvoRWE45XCBTXBK6ExAhisXU5x3WopqDvbbbQ8LZSM9ViC",
  "key4": "etBS3sV77Hw1tGrCvAnfvUXB1sLvUtBRvhhpCaeNZyfvk3Qm9ZRj3tK8UehhkNNSYpuuuAifyP6k1b4tqrSc4uT",
  "key5": "5Lk1MLNiKMPt2yP9XYGTToBuxTsYKRUDcnuMxtA9WehgRTvmVkLiX3WYPuPVeSVZYy6LjdekmySEsmCyu6JQXDsb",
  "key6": "3gKzFRdTZpDRJY3wj1h4cVYbn3UFwdFcWz72gptpB61KrpJKEWTuh977nsr1kExQxTUbuy7GDGzw7nRo43EpSACr",
  "key7": "pwT3Mu63Eh42H8nRg34NHxYgAXbr2YCsCEVmcyqDHgyD6M62dXGXsVzXwRdpGY5sgzNKFkdRkgDK1zJa9jF4n3t",
  "key8": "UUB3SfbFVq2it7uHuFgPWYVwjR3ri7eZw95UUcfXh2wyKG9zDMdrBYf14z4i2mM2evYRRFNKHi8BLMt4GhZU1Va",
  "key9": "3VEQiNUsWdndu7cFHTXvvbPyBeNRFt74FPFR74CVgkrJefatVzzu1c4UC6A3SUmKcpmUEeSmfM1QDY1bbAiUbL2D",
  "key10": "yWs5ZC2t6bbzw8w9TyiChuFXEY1ofgrqRPi3Y35ToAswAzkeZwP1vJcJyFNFsJQULXckJJRiMgDTGiUbPuWJnWA",
  "key11": "17u63FEYvJ1qKQNJ2UVAKU3bTruBcR6kiRTTAdsJm6U5BAWpyL2XAY2LAhZKgHUJR5Y2q9SnmXejCHrpJZKLYMj",
  "key12": "2543up8xcEc6k44M9LDuPj7AUEhCSPCZi8VV6mctmpbtQNGMHhX4t55uxMhLgGhRYHNy5chFkPPTZAQhqY7nVhg6",
  "key13": "3xWXESNghjmsnocHaxkzn2s9pNqDNjYaWFQHDds42vpR2yiLEJZwNUtB7gb5dwTyYYNAKb4PtotYbC1aHusP7c53",
  "key14": "3RKcE4a2CttJZ45rdfKNLCSJNRRrnjN5mE18drwjtfnnbbMq2tnL8RmF8xhoyh126a8ZdpMm9NaMBssPTo7nEZa7",
  "key15": "5S6RgFJUfccNzv1kdaFP1YugXd5bH4ZCwC6x73EydbAUE8yMB1R4mBDzVegBfQ1QLaSADgpcZwRuTWF8XmV4B7oL",
  "key16": "2aQ2h5H8jMYvumJvzd8yUaPqWYqjjBqz1NBzUrsfeNJD9ggpRQzGXEdgm6gR3WYQ4CL5Wc3oPhGsE4nPRP9QaR7G",
  "key17": "24gstWcLQQgz9fryV56VXX4Amz7z51M9Mo1KUyfXxDpvZbzRDd8gwZhdvemfHBGHaofqXaN2UCCm1Tiw1ExAb3xF",
  "key18": "52t5YRGc87psRsQvcMKSK9qb427zxTyWPC3sDEDyTN3mzzbQ1H8YrDnbKZHnvmxwrm9pPvAGVvXiCHCrdztAzgKC",
  "key19": "Cj2m56U2gg63MreevhLERnZCSQoHBkX8nkEFvw1XuRBesv4qVoHYTD1FC1Z7ZdKgPbAJqC67EEVnrH3gCqQemGL",
  "key20": "5Pd5j72fTXbpfUWMsthePd52dRRJPKy2R8rxByLPHgxFUAm9rmRU5ngjnWkC9b71vKv8Lm5XVgFRGVmaNH9H43Yu",
  "key21": "3bN9BEa8Upm2cDtmDMJGLjwRDpxENV6FxjzQ6DbeTEy1Cdd2H4f5g5QWjVhcNu5qn7bmyUHxFAiKP3H9kHwkT4SH",
  "key22": "5BgduszbuNd7hdm2KknKr8HZVLaPYLAF9LGFAzpsnCVR9Avu7TmMkeahHfJHwUAwjLMbm98MUU4NAmvUfw6Gw3GJ",
  "key23": "foPJavqBr4g3m67Q9mCD9PJs5qhFwkjWcgUUAXJBLBBRZrsc19eGTpwaSsYKS88dJxtE6V5TVpUKBiETjbCZMHo",
  "key24": "5dsJPLCFEHpxXeX4e56YxzFZ1jQF7TGyHy3URp18st6a3tU7N61tGVp5z6CF2vMKAXiwotMh1qg6gMYXx9ZkvHKN",
  "key25": "4PXyHZKE8cN4x518t7FYQudBeGjHVkVBTc3fFM69SAhzxDN8S6mjcRn16XMApajmsdAupbszPhusZvZVtMgjQwNN",
  "key26": "2QEvmMDtFaHvLkEyCYC6FGcEHMVqSfpbLEQG78V9wsLYM5V4rp6vc3iNJqqVNz4VeJTprsUNy1J6gqmNLzdqrRKP",
  "key27": "46gimm4ztFk9WKqQr8XLwD6YFYRsz8VH7UsTxu4y1BFPHevY4faVKkS4wLKbTCE7tGKAecdzjYEefSAyWTfaWo88",
  "key28": "my8GEsc9AkEka9grEP49i9UgD1ucnwLaoTDA6zwvwC8oymBhyh5RVw72p1FAwtCr8wNkGdYE6YFFkH4ck6EZpiz",
  "key29": "2GWmjkQ6mTZDWQbqAfFpzMtLLC6jNtc5HFVWm2xTteFgSHGHn7BGocGXBQ7Kd5HZswcJEi3xZc1MyQg57nRyNvy",
  "key30": "5jhKtMKmU1tuShrxbGuUAg3mi1RScgqUPNMfTdE5ACujQAxPw2xYp8SZeL5C9j1mtV9xoLzenJ3FByPD3t4Y5pEU",
  "key31": "51u21aLs9zxWB8WyFG7mSp8t4z3ei4ACHzeSAT8FYsrW3isMPdFUyUgnZuF2HJ4MbLgvqsdKJZQc9ZPoRaVXdre2",
  "key32": "4o3NFBZoBGTtjicUNkyCPUYmxpG99YdfCVUPaf4G2WNcsfa4qoEacnJw3WLF1So691NALbRCBxmTUBRwiVuopRf7",
  "key33": "2VoUyhx1Tgf49DjpgJbUBSY4TRz83isJrA3Am9WAenMERd2utLYFz4RcbUd1sqNFUbe6T1xKzDz38nis7eGcoUdc"
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
