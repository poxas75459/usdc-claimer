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
    "3RMS4V7PpcceJNXyVonKV1gRozXpPwxGpwsQ1wbYZWyspF6SzhPm6GNmCjGXWMCc5ZAuMfyqJciscgRSibxsX5xQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33zpyqdA88ZmCJwrXQHNNuLomjhVKgXwo2YeGjymPi5nRZeHXDYckzt3ngAcRdFnMQvATz8qKM7Ke4KnBwHd7Rmp",
  "key1": "5v4TDT6AAdxR7VHiaJjfRyq5E1mmhy24EbEbySBUPdYEKkAbrr4nna1vzZPyQBAW6FPgbwBjUUi6Pt3XKWwrMsY2",
  "key2": "3CCXVXKaoLUt2SxSW37jaMZ76rC5f6d8cbACARTbjqSGCK4Wox7aiZ9MVA69Y7BbousgU8psgdyFD6TTyJjRfotc",
  "key3": "gch6zwukyPWQJP5mEuWx61mxodm5iNXsi1iSuiat5QNhLSuW4roRYfH7YtzJAFMKca47skSKYyAG1KmkVLZkGog",
  "key4": "4dGkPzvRsERGcYm4N5SZC7NxxzLhjQrqAmXzqqczJCt5Gy37RxYEnnenDjHLH8HWAqYFJJraiVT3DNwnf1e8Z6Zx",
  "key5": "SwMbie9LW8rnqCqkJ8NFakX5Vd8KSZ895RpFJ7tr32ivPwFEFMsk8zPaE6puCHM82VpZdyG4cEqRGccuGMudrfv",
  "key6": "9UGuByH95tD3UGFMtL9uDGorK8ijatmz6Sdsx9okaRi6fY8PhFsiocA6ZGagtd2CjGnwKXa6yRnHnCZXK2dn3sx",
  "key7": "4zy9oJh5e7JXNunfPXWbsbHk6C34RoHjepNTgRiBp7AdtbEcAiDoFymnZMmK87uWvv16Xks5ogFMpUzUvdWd5mbn",
  "key8": "5gRpBXvUhx6BSqFqcyULjH7rkY6gudJPu4gtfeboK3vuWzLpjiPn7piyMcSU5W6YQG3s8VJ3GCQ8S9FTtcsEtHp1",
  "key9": "4xRSdJyqLtEE9ybLfR13wbkdY1nGap2hqRsf6scY6mBuCaLZ4NQt8TCGVS7aZSSifTyahTr3tX1WbLaJxSfFuayZ",
  "key10": "2vmiK73QF3PHkM8oFRp1orMo5qqwFxH9bQBYXee3KgfzqBQ2tFScagm2A6y8rScL7bBnW1V8h2zjR1hpQR6GC1qb",
  "key11": "2Vf2hby7GPZKfYDq5xN2MYBrUcNi3ekfuVZnN2crTQmFE5EqSiGVnwwuro5cjuyq6BqEUdpQd2QxDQFi1byiKz6x",
  "key12": "ys2zSoBeLBAi5U4mn9X7Rwvp8piMrNwauBWkajwRTxH9uHjxXkhzB4nf7fbVeDajXFp9EJx7vvCitD6pe9cjzE1",
  "key13": "41JqXJDykHWaux6hYLA1s1iVvkkmWwnqNGiLRX9xqXbB4xkMhYb84EE7PFy67q4aW3J5Gc7wodwd62eM6F7FabSr",
  "key14": "3CDKZS2t7eqRBDJqBTb8vcLr1H7nFLdpqkVVnZyx6wc8NswpTLhvWUMowFACzuyopdR6LtbyTzv3sFsa36H6epED",
  "key15": "4aahpGRtyik5JbqqCTprKzGhpNaZexCwzgjPLHsMZpeKfxAijkSYqVwVvTPyQnMPex31ZGKotrkqswSf2hwyrWzA",
  "key16": "5xajdxn4ex6Ju3BiKPpVH7tRcEUZhxiNgjW1xnZ4L6YY5krCm26yiFSN6ZR9gcrpZAv7WPZ7MiKaJfLh4bEFzGBn",
  "key17": "5CSaYqUCoRYfQKAvb3t2efJvw4JxANUqZjAdm5frNM5Xwda16VeVyW37HjWAd6vT55sbknkHC3kreN3Gdpe4K7En",
  "key18": "3HxcZ2gyX9aEmt6kSLryEch4D4A3Edv5oebQtg6mh2HruR3LXAmC7jjVZXjH7vvVums2ytcvL8JLaRtDfU6AzTos",
  "key19": "2xCNf2ZwhpJbGj7AZzK7vbMKdFtypBHm4MRuvYDpQrMxstYMYLNKSJTc2ixifGdNNoxvG6LdfsBGoniynxe8obnP",
  "key20": "593ig1JfYpvLQuMHijQKyiqWiqRJfk4tZruD3HbKHRxNgj6oPYz8Jb8qqaVLnZ6jYirPGg33YnfcCMxfvv1zNMme",
  "key21": "5bHgd4b5k1H5TvBWqxAA4ZSoa3wEDTayjq4Axer2KVULAPF3X7QEs6KWoVnjgdBTjqvzXZ4qboLxYom2yMix8v5h",
  "key22": "4QmV5QNc6T9eKjzoceWiCZ9XHwnuXiq3eonQr73kCMuCL2iHc5EZwdzQaeoCq3nA3G7hk4JHbPtUABFxmC6ME2kW",
  "key23": "2U38rMXwqcXffJgfSf1CCWJTS5AozKRxLup8y16d7TXretmS6RvRrnDhEj4eLYQtjB81FTnw4CtSFSKZSu55u7rw",
  "key24": "2iWbfDL36KUNsNgxWMwnXducRbShxaWvaLFScsNRQp4JUWsn9fGy4RWT1mMqsog6KFzcah6mfejZUWN3BLDLAoc5",
  "key25": "4rTd8ezCiFhMCA6Mkf31JYYSAP4i3u1gspGBSPrbxuHWNUBYrFguaQpDULmRYyHHchh6HGgjQudDzTuwta3dZZYL",
  "key26": "3dSZRnahSM3fqPARsYEF1nBhysBjQUs9MJks1S7AiwinyB81hQL6Fr1jgtiZFEPxMMMs4Z5MPjq9oWo45pzvq3B1",
  "key27": "2vxz3PL3LzkoqW7EdYRR6zkD4PFyyTC2Wo7iUnW24YwAm59Lt4tGFLEVcgNMkE81vAZZRBF22gRMDnYafkFRWfrx"
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
