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
    "48i1pcLWusJ7UwEyyXQ9QYe2sZScNC8RGFg3KjZRuavjZZL8eBoo6wBf2Kk992BqVStYUSsjCYbSAwQR8aXUht8K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XEBDjLpvCA7swHNjHwJhtuFPEmetQ6mhnzeMYr4KX3JdFuchTbagpR9ELbyVvm6ZJonrCpNNH53tWcXNc7KyGLA",
  "key1": "37BpVXbHy3jDgAEt9mJHndJ8LYAqb2hRWd69THZKmszKQxZ41PiMNHCLa3Y2hnhX8YwmEAcapi81R93fwoKck2hT",
  "key2": "4KqVeSmFDt9UMMR5DzHhbufZ8iXcbiuLGyAZQsbpXZLF54FafjcuRLWPVvQiSPcD9q5GcTHvfGeoN1roRz8szGc7",
  "key3": "3KbpH6366NkGCrZ5FpgDzRqSgyCq8GWhvfAVHvbMAU1gwL8N6uzsSRqygjxmnhLiWpyZDCWAdgZzruAfBnDc5zeV",
  "key4": "cT37AvvS3U9ZwrvC915VtWU8aHLV56DxtdBkDPj2TvWqgD7pSsVS4XEKBr6gWqLkv3wnBvePMSsheTNntvUmaf8",
  "key5": "675T89tGiZFLcbVqA4NgPgLecQ1LQUx6TrjJxxgj8DaWXv9KuKiTuFYZ9chm6Exhgc3nB2JuMSkUERXUDwvys5gj",
  "key6": "5fUHp9T17m9aeKx5v22MLfbojC4wxYeNmKoQZGM2H75LGsBvYeg7JBSJYY9v6ZxKRi6GQwyQYpvZh9UoQWePN94M",
  "key7": "2qHrm2cEyoX5DPUBoav34jNeDeqB5raVNm8CYWLQgkKR3Amodbw33LHGAvL6icG4vbe1toYp9FTRkCA5sb2ixFPs",
  "key8": "tdT9cbdMEWyBzv9QJHdmpjk2re3KQfpDHoZmMgu4FhSMQuQvUGj7E7BjrzAAt5j6pq3mr5LxqDnRZwp7rYMFkZW",
  "key9": "42s7vfYoYDZnmy3eQWmsfLBSNwXR7JTDio9yFNZxsnsSJfAg8sroddxfTuD8JEkXkJRq2UbZADfNzgnp9nRWhkKp",
  "key10": "3fX98fNMUSejyTvy1FB6ZAaBDeKhAE7HBZMvZ6u39nwpy1Gqf1nrak83sWZK1ukXDmVpdn4rHrJ97pL6aeQT1xWk",
  "key11": "2GeaWihEy9Tdjf5yNG6FZz5QbnCZccAm982kXsVYdhucM5ThHJeQLjM8tUQyxvn8eL4X7AevUuP122HJpPHZMSNm",
  "key12": "2xfHHXWYewJBnxsHPrm9HgX1UtSEhi2MBzQHxe5cQPkPthRsLFLtRroierrf7SnzvYAtr1FxVgtt5KhmRj2rdiHQ",
  "key13": "2RaMZFybWpXVRuDTp4rKkPj3kzm62TKwg93so36pPVXWV6T7mXbeVnPvvrN1nBo4hLfwdjnEQ7qqQSZp7U8M7yn5",
  "key14": "3W6SZ1w6Ey5UomNjrZFEfSQiu75jjjvRchKZG7eWD3thYo8eQEFnpVJTbmpZq9iwH5PzB4sHMNB3YpvpiuK4uS1Z",
  "key15": "52aSqNcYxR2P9bffdPMpiBEDiEPyuKVqneBdd9nsRGhtJuU75mcFZc3zRQrp8bWHNLggY5RNLVHrKFzVrhv5XnQ3",
  "key16": "5fbVmJ3dRTi5tYK9ivbXLqiUH8n3bpY7FhcS6aZ5MUDSpB1EowsLLbErYvs729C1oXUg5y6cLRHZcdNZmUdSEF2X",
  "key17": "4NRMiEGmUXP4rJy5h9hpEHLRGrVKEmNwLXBJLhnsHjCTSxUe4j67C2bX6QKfkDmcqb29D6SSkkNQV6zfr8Pi2ZLr",
  "key18": "36HmUCKMXFFRfzVA5Zw8Bhym8ioG4AZ45tk7v7B4BvnKnGxS5RUm2fM1NVe68HW45QYWZV3MaS4mUAYvFWXittoT",
  "key19": "4Bei4R8furNJfg7DHywoVLfSopB4BEgUve6PqQSMN6AUM8kZAPLTzZko2PLXkKAosWVmGrG7q7xNF3xheYpHfcm",
  "key20": "uhuzvUWKdkYD4GygGxBy3QRAh2tDveroUvipKZ2Dyh1jG5RTmv8uPDPmypwS93LRSLS3mGr9tjQboP9S9j5E2Sv",
  "key21": "2rw99ywFzwi1X5AQxiktNMu9ZsuAcvGxUJTESLgmS7YYL7uCtaJQnE1hzAXwjhovXCSSC4iGZHyB8ag9KxKbGSC3",
  "key22": "3vgoU3zPtxowXt7LttHmAn8tWjhHcn1HtAciBr6j54wFtjXS9w6kewGE7b83Jbo96sZQExfqFz163TYcr3BGb9cn",
  "key23": "3hc8kaiLDS48um32jEgJaSV3Pok48DCCHVorTxV5Avy97j6RQAhcRmooCdUoM7WytrdtwmHJRH3MqXrfStfV5NJA",
  "key24": "4iKGfLpEVHFanYSvcghBM19JgDTKuaBUACMpPB8LgrbPHGA1TN164WEK3uD8ymJkCWZyB2iYeFV5TwP1RwH9ck5A",
  "key25": "c9G2rEqx2fjkiyRuKw3PQS3Rar6YSMdiY5ftHfxqGJnNb97yK8YywAi6HzPxHtwUkXXGm7N6Yk8sk3USLLUcTdC",
  "key26": "3EQ8FdYfwLuKGXLHPgGbB6Lm3XQ5egeDFEQxbgqBcsr6pNtZeiG4LdB2ZikmhKC8Mt7ZVhGhBqwTFPkpAuwzLt9",
  "key27": "4VnTQqqUUUNGKRvNTWppYmmCL7yRxe1rnMk77jENJn7SF3EpMgko7benXCv7fx3CVN9JeH8mpKjsB9ERqS4wHWNB"
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
