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
    "3xJjLXLQ8AX9P2CzFq6wiwPmecckjZ8Nbk2hpVwFTm7gMthAYwVQsqh9Rart7hosvWv1ibPNDQNGawDdneqaDr7Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mgsyRckRgoh5qDBfM9tYs2L9AHt1uaMAThFihbZ7UceaBZKaCmEVSQeDbaQHzEP5Yyn1Hm4pjMsRzweSwgzRDHD",
  "key1": "4EtBCuMe8p47ULzdGC3iCi84Pmd46uPi28XKkuEg8gra7nmozxjuDutk5x5c7Zw2uz2VwoULiBvCzLg8sGNv4ZG3",
  "key2": "2LxTcCM2sUf4tAyvx3bCVMHd4KiWT5DfwTLyXS6TMH3BxKuQnpRCY3a7dPhiSvRMHLRWd5X5myag55KmHhkURnsL",
  "key3": "2WJVdter4RqTHXDz2TLz5a8hMwWK5EuG7eqDiYKtjCt71RTJUddQuneWUNkXkEYKSwTMmgqZXprj8Q1ghsMJ4iia",
  "key4": "3FFaNggiv441F5reFfh1XjydykjKQBXH3qq2XuP1nXmJHbqvYYACGCMKisAyMXmsBUdJ4eSTFwJHPT966GgB14WK",
  "key5": "5YYz8yQPHSwfiPTT9DdCjtNw7gXpJAULAJMVWyyp8GJkDedrV79YVL4QH5LSmhgMxsRfUJTPToJcybfDkowgUmw6",
  "key6": "5jdK2Agi7JiQY9umqmzAFX6dzjmMpRRQVbR4aAWDXBJmiT4b7YkibsV7L5qKVSLYhzaaXeJFarWkaBh2QWMKegWu",
  "key7": "55HHTYdSa8AuzUS9EVXWWfSvTfC6W4prsgxM2fUTuPq2i5rACBd5MkY8ky3oTBJ1WjSSr2GcRT3VC9SB5oN9q4uc",
  "key8": "5BJitkm9AV7qtSp7bVTiSLULi5VANTMGkP27e7JLFBo4xQ9vUTLzkKaki5aqEMeue1gtNq8Sw4RRqdEBHEvWYzEh",
  "key9": "544TsictXsjZrZpdEqHte8B1JWwtGg17ekaExTr9arr7hA33iUooTczCMM4yvg1jKubUZ3SVQKZ7LF1i9dj12ubD",
  "key10": "eyGw3nKwkXcxDbApGsq9gsk2fKryFAdnfnxpiTm2NRLZxrvogKibgZeMkriGWfnh76nU4dTPaLY7tP13P88Pyhn",
  "key11": "5fjspfXuvxy5MEZ37ed8SxMPWKAbz3EUo9b1QLY52noLMNu81FPUxXz355yTRFwYnKZnwJN28fEXrN2sonHbdURF",
  "key12": "2SgCsCkL4pmPtfUw25gJepoXmqkXuW8BQxPCu8QDsjgZbyy7DBjcxhEz8uvsWdKQBV9uWxWKJT5EyS9CxA8gj7ZT",
  "key13": "2W7gfkqFrSpBRfvzq5unV5HCHV1nhbzKcV6Vh7zuiNdNzGb8pRxQRaNEjiMgxVBq51q2DoPvezMHb8Ay2ezNM22E",
  "key14": "3ryKo8beGytMiAvJAd3ttaX81T5KX387ZGmpg4RZgEXHuD77uQMMGe7nsDEn3gb7rArEb1SqTWYRfWXKNceHhKgr",
  "key15": "3j7xwRrbDYQyCBJUApsYPRsSTobsSLCTw2jrYQk3fRhogo5iexJf7HiPNMzMWvXj1A67Hoc4Cmvq1mrZRMM67hFR",
  "key16": "wCRaT6t5wuZgq9L9MNFotrR6ETufoqLVQHhcn8B1GZiiUiG4GJnLAAq7WwcvzV6tvMDazzPcw3hup8zjrjFVzq8",
  "key17": "3e9hnqEqmPmvVLLSwx2LXT7w2WuqrfrZU3uNgJR3HAMP3oF15PegU6XEzQBxzfinQBpPGzciEzb8Txd4fy6grotX",
  "key18": "5gSUNuNZKAdotyk5D4sb3X4LfVpmK7dXH2MPDoVxZRr5N96cpqhGb9vin387yju5iHUxtA4S2M2RzqDHvaDQqKhp",
  "key19": "4JUE9tHKnrwKk6E8Naj9pAH9UmfdCTLpVvwPEPmy6WpVPr2rpdnWXZE3n21STsoSPPdSMi5f21YQGJ5QEVy8w9XW",
  "key20": "4gyG5FcsD1ZRk3W7jTtVEVm16asyuFqTEgvePJyXJQDfypxWhDxmng9knfZZZAVnSZsvB2hd7yVNSCQoyx3WYyuG",
  "key21": "f7pgY3Y7NSyU6PwSayPdeDnZRCVwUs7kejzsPKPxRiW5Exd5cx2mspieN2GRUJhDLELbBijiFpAL2HvhMuBThYW",
  "key22": "BbRskhGAQMZeaVHKvGV6CkmwDgMZ61VeHpBABq62xW6gEc1fgRDaUa3CKdw9F9PRUs6nk77sX9sPNmFgFG47ipv",
  "key23": "62GxTnDQ2FPRYAdQSQBaELQBN8gG8CrsoWtCWb5i1Hc1ZoG4Lqh4BrnSsm4bcC7FAQMzZfuTM7Mn7XpCUTBA19PK",
  "key24": "4TA2VU1vzPBeHq3NwhV9LCPEJucJGaRLn1Q5Wh5XnFQKxbNFCXqXEQE1vE356cSy3Xuo1pkeZ1fnvQpa9qwRz1Dv",
  "key25": "5yQFuMhqLjGvGSRWmkcHgxch5rPksRxCmYAoAaJractb9JdLmwZYEE5hsPQanfK59aQCs2FLjV9xaDpicbcsUCJE",
  "key26": "317Ku8ffbpD9ctEiLM2GktFio5TJuWRo5C7shGxV8CiHW7UVK3ZoQtE8gJ9K8v1nQYReaSpEPekCn9fzeSQuuQu7",
  "key27": "3mkoKxw1zn9AL2CwpxeQEds9hUR1ZQ4ADhb8XeBAKyowsK1it5wPDW3PBaMueJecCSUbhJMECJcJNJKUxe5oHZq3",
  "key28": "5MddCN6SDPiJTutoAxpFK5oLpqUdNynYdbx8p8HsuZVdyLPeY3v8dfxx2gSsJzjbsyGCRoJt3pydh7RvjUSxQQUn",
  "key29": "2CqjW7KKNYB4CJktQvbTA3TCixpe22dkwoKgMm2y9bJgKfWMNTmmLm71a9VnB3cZP7H5CXqcEkMtAy99iPABeLtT",
  "key30": "5eYDCWsrV2qm77GLQ6T95Ah4we7pj4M2BH3EUHfwP9r9BLm2eAyajWSgkbWK9gyiDBrPrHpg1LXZKan5V6b5Rg2W",
  "key31": "2MG84nggNSd5AvoCFEC1kRNznmapf4XTEL2WRG2fBuqzcPttKbHqcUidNjcUAUYZFHvodmrgjEtJBTmCqznB5H8v",
  "key32": "5LaZcZuTYeX93jNbGoFrLp8oKScb4BRKr1SsGQgML2xsoU8wbMMKsLSfHkNxEyEjEUHxsihLfDfKfF8VNwvqgFca"
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
