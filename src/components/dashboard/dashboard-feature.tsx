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
    "67fJPKL9bNFBapm57RXNM1TPaNDjnmq7c85L3QWK1gvy1SWLfnUPvYkm7qJdqQjtpU8nQRRDWKvBWCNyMXsamS9a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55nLGu7zton5b28j5SU1rsk9xZkCBX2HoFqio6iENSMme5LRHNobuCg1V1DQjo28ABffa9nUWa64CqMxGGVXoGTh",
  "key1": "3ofTWxGuU9yjptZFpPQauttYtY364zEmXKSefxaqghTZk1NEmGWnEQiw9h7T46va3j9EbXusKtnuUjtNDdFUUTss",
  "key2": "4ymygZJ89vQjNZEWKiLV2cxnHRBw4WYthYfxjhCdsMjCM3sfBnDcMqjbFQvqABciaXE4Fzfj8ym2vBsSSDpWpEuN",
  "key3": "5pcrJcFYSLePzEegmoghJH7DiWBb8NmwZv4SughpaNV2bpvFf1pMkJw8baafe4Td7YfgWcnYBCL3p2gTx1tRPf3T",
  "key4": "kqKirtp84K577FzgqPNUKguWSxrSE6cZp5P694fFcAuMNBS5MXC1huy8bF6g73sdMhLBUxFUzbXLssrtPBKQ6dG",
  "key5": "3vJHp5Sdzg4s86k948WBLGmF5KEStsLAktzHAbUgQfxhPViwfsURQWgupFRCJpn2jEQspkLF4meNzXHvUBBj1Ftu",
  "key6": "3fiX2SxqP3zbzkAs1KeKg6nAi8oqf2agNwv3sDVEt3hbdSsF4xFtfeKq8MwC3XeocUJJGinLxj9pwkXeCZ1jDbgQ",
  "key7": "4qqY1BheBsSvdQgPJpZhQxgk8FjwNsW5ihKK5nAy7sbFzuPjScpA9VnjDjVp8Jfanrv1f5ZPrUQThUgoWJdxqTQa",
  "key8": "413vCDj4iVBmQtWcVVZmpvYRygspHkLKfqijrzUtxaUoX22RqubaScS3qXcHk6Us4xAmfaj7tzz5zwUiy7y73jGt",
  "key9": "5XVgRkoFDWMSuVkN47DbC7wvy49vzXgNwbdYeA5JXrXiT1CefmthnLpnHhv6PRx9iZJmFWaWL8Ds6d5yqRnsk5oB",
  "key10": "5zQoAodDUsJQrQhkptNJnGKHgaqxq1S49ate7U7unQUcyHPDqkEdtgXucqcizqUtrN63uXe6Hu616qiXxvoFnB5r",
  "key11": "5T4sYBnopnhZvbv7vGMe7q3Vxq7uCmtt17m2Sagfh28PP2kSSFfdzUDtV7Sna2nBzPCCpszgnze6S6oJHMRTK8ua",
  "key12": "4tmmEUsserc6A8utzYufa3rp8aLJLF6H9QMrgZhbZXUwuKWoo3mqzdGcNd8R45RBaENymNYBoYbG5Cn8YvjqzgBN",
  "key13": "42L46twPL5Pq4wZotZ3gC6Wpgqh2TLMKNcm5KJkkF2MYCjUPRjV5cYYnXSD9Fejr8JgsZfsbc9gs8acddmgCNRpj",
  "key14": "2cM8Vw5j2bYr2rV9LTQP3twkLKCdTce3KYJf4u8gpRzWWC6qoNC78Smwwfk86mqRF5BrRtCPmtPywmjWMsToX112",
  "key15": "313ngq199CiPHZFBpUY7rYQianzgVCtyBT7pf5s38dNwT8Suu1vSq5c9ukfiURsvHXJjWvvovUwvP6umv1U1aJy4",
  "key16": "5LxiNz6UGHcaZQTHnURtNkVNn68adg7x8K6WUhp8j3qrcepjZMum5UxbbaWyXTASGcDHu3mH1AAGpDhKuiUHdU1s",
  "key17": "3ZCTdWb6uez6dNW3afAzuMa3mF7KixjHwvDamrnSbjBuTPo6RxMnaVimeZExHyava1B6fMK7Gp4F2fMNeDYTZbiR",
  "key18": "4BtyUNGddqCfYB9p9QGeHB1cYLiQg6pD6XrYW9h7MWGP4zPdBhuFUDCtwHGCCsbXGJyEfYScj3vkxFki6sN33pkh",
  "key19": "4yyuZT85HDUXskQzB6iq6AmBWdRwRGZDQLfrWXDx2EUVmCvXgCPPqWcS5gMZQA1Mt2veRuoQ6aVFTXz3RqyiQB89",
  "key20": "46NTqpagAa9jgYp22kTMSHpFNLuAkoqTy531iC3bueS4p14CYHLf4th6EJzLEzNNJMzm67ZTUSG5ETkM6wcW8153",
  "key21": "57Ly5gqRoop7HgqSRJpH1JnfBdjico9inDTWtAE8qCcQ6qTFBnKJFJGDGVi4vbStdx3ePNmJbrmYQPp8UGWfo8oN",
  "key22": "4jGXogxSKuShGBNx861CdtugjNRZfWV2YLj4c8AGoq2EvxChCvPo8MPcN9Gtayp2z6oPSC3yRVVH5UX3VtJfduLr",
  "key23": "4zFH8fr7cSwjJF1x2NffUsXEEZ9KaFucLXmUv57SdA68yep8DnUZRxqWS8Wh38MHDJL8Gxh2Vcsz13djdHCMGqPw",
  "key24": "3MFhtWNqMNq9fFDWBdEmFFDua9hun2QxBTRA77gzb4s2WnATDwk2M5hkTqABo3ZNDse4ekT9rGtGfNUScWv7j6FF",
  "key25": "5D3YwNsG5hNCoQLR1C3on4bHSd1HgqSXq632Xv2Twf4LhQLnG9XB8FPrfuSdLchfu4L9G91QE8cha3uR9ijAGnB",
  "key26": "5TbwJFXvofEi5pmpynFybjPRniVxK75ZGai3RbsgR4uenrmZ67sZYdzSSw59m1bFGmMZyHWFVyhKEpFa5TWr9GB2",
  "key27": "2SLxSnUMQxpw2JjneriMPoFpVwRkhB5i66MdVLYoFj9YqqhotdZC7Q8p3tbwyWWH236JgvUE1fHyztkBzfhBBHmP",
  "key28": "XoPQ4bV99FnSk4Hna1MSJHTWFfWbRcXHp3kibJ2mx1VkVmADrmXvtfwKUa516pSowdiWaDpJeyQ3Wm3pT2mVSuc",
  "key29": "2UJb4c9CpKcMqpbN3RxX1qm9o5mYDnqbU3rb65Via2NT7Fw8cgh5aYo4UEqZnYCTBBmdb5b3SVqYm1ju7j3MWgkE",
  "key30": "23TAv6dssUzGHptRbkggTH5L1QnLfnvPPNzvdBAszmDwm8eJynpV7syE9gMudeN2ucFKsQatzcACtCUpvEPis1Df",
  "key31": "37Set93WTjduBYgDxTJUfvDBLy2MiTgeFchcBx6h4u8hnndQFrb8Q9RXb8ATwMZvNLD9VqymDPXuw2uA3erWwRC6"
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
