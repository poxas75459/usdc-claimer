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
    "2S48HGzUTPXz3X7DHgUrQhLCXVCc4f2YPAEFww7aRbFxHVWpibonhBMy3JmEB8pvgNwjeu9QE9e1PKqVzkHEnWpR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dioLKUrZm9K8s7HMVveadLPCHNtUxBHcBE2Hq4MAFmmZx6NWjK475CaZGXwpBysKEVQ3trwCze9S1PiaAtd3RwT",
  "key1": "3a4uGqYCsHyKpZuYrykNBzsQTzLapbJNsGqFCNYtkLix8zz6gzH9wzaPwsNHXfdhQDqL85HzVvkWqnbox6SLm2cF",
  "key2": "5NSjDtLh5BWL9iXUpnQ8xLsohiGT4vcLYJK1PhrQZEtfYV3vu4swUxoTnxUgHn41CAZ2MqNrgePmc7YTPVbE5yMp",
  "key3": "2mwpcEj4aqDJmYXs4o3VVjC69MeXkRgvnMnszHbvjU9HSnvExni9k8P6zbXkAMCqrRKR6L248xU4NKcQbF3kaxD2",
  "key4": "2oBGqmzGE4F8okMm8y9DXunmjdrfqG4i9dViBLsLyunV3AhSaFj4FzgFZ7xUeDL6nsS9UueVf7h6QX3h1GpkrAWt",
  "key5": "77URXuXTeEM5qYZyMrET1NJZAjpWqJNeDCu78TLBhphNPvHLckgPRUdSY3ejMUdWqEPiQ8wvJEtywhsTPYEDTkG",
  "key6": "4sXVXy8toYYTZE1s1YSncAy7A5TYGxUzBnybMFTNQPUPnjagAaLxDmekGfiMLUdNxpd1Nqh8Wtqc3qk7ZbPyEbJr",
  "key7": "3tp7WHVcicPFbu9fFaYmmPbDnKdnmswfJ5qdVFeTrD9gwCePTxfoHT6LULLGJJZTRJLjRuaCkqQUzzLJb85XESja",
  "key8": "3UpRLQvnuNmgSHo1cbNr9SK5DFAQ2y2SuKnkDb7SUaqbBSiUJ76CfLCbQ7wJngAB9YzYoCnKBxEvKGHhmoFAxExU",
  "key9": "23KitYnQjymyhtFMe9YYwpfvbkPvSoY3khdCkp7xnyZCGQmjSiviegSJemGWmnxLcNWEWVreGCtprzXNQJqhttjg",
  "key10": "4us6up5SVbCXWhgoGgScJvMKfu7jUC1g3TJRFumAuwMRgVS4gtTomQRgBZaHtXmgpCMoFNa2VuLgxzhMRrKUB1kf",
  "key11": "23cshEbSRCW7193WSmHqE4mpfuCZ8oG2xsZBmkCoYgd8XT31Vu1ojGZdBLbNF2bMUGhTCHf9BjyEieBcyDomGS99",
  "key12": "3wGAJeXNpDCPqY1KnNpmwFG7X6tTdb5QP4DUcdtcT3q82FUv5R7N1wngg1HcbqZt5DffQx5SCYJhiKKqZ86nTpoK",
  "key13": "5pmLrM5iQEZooQJDfBwsZ4H117BfSn7A8onpmARCT7hWrT4UkbQoagsXY7LWKEoqKF5hY17FKqkKo54iJXWiFiZ5",
  "key14": "2KmqsVN1ZynGXBrRMi2KhatkpQmpkQTzVhQLc4vS1GqQZxe7vQvqXLzhKH8hYx7eWt6AzmcGtryWtt5pbjS2ZGHS",
  "key15": "5JVHZZhY75tWdmmrJhudKuvwJqQegNPnGDGXQMJbVb4w4E9zAd7KBRUUfQvnnPyyLt1qphLgTvYw7HRMcWQhMR53",
  "key16": "2tLJsZim7ZmbV8hbwGBpjE9FmNrdG3UGWnSBprcoEkms7PN2jts4RGSDnKCLVaZMLWeQhQKrJwEfi7TU23w2Zfdj",
  "key17": "zBN91d8m4w6Y5CCT38ssFUjUvn65tyVgFFoVSpfSwYzxbxW2ueYcEJRUGHJZmF8QdqRjP3aoM5uPWhUSHskb48o",
  "key18": "WtdCyfba9EM6JM6gj47rBLHzw4WSoeSseNaWztynRC5ybqjprH9Y6pXDB3stDmayjTLQWnSDeyFGH6cLbfVB8bg",
  "key19": "4JoogSx28nZ5nBzb495kxMhG9LkmZbtdfF5SVSNhy4xtcZXKBH4XKNKsokDjsYxZbhqyivZtMVMFYULMtT9uuZxB",
  "key20": "3cQQrgbHa17L6KVHNRR1mqvmUEnnW1jFPmDJkhQfT4QWA4qymcmbNy5sNvc6ecQNFreuJztqUJhwxbCyJybomFud",
  "key21": "5hgVTpp9Jadn9HvRnPnZh8vWavcCT68Hufe5jN1mYrEmx21JZQ7LD3Lb2nndB2B8JQzSd63cJ5QLGTwRjBi3Qe8w",
  "key22": "4D5ZmPjnKDfGhUbUdtiPLja4RmaRs8HVjdq3URrxMtSEPsD91RVc1QVeHSyvHaX4a7xcH58hi5uxFtuTLUFavueE",
  "key23": "4X54g9uesTGCg4ditAeYJLBWuTrxQm8iCjDh5fJhVM4jxxW2aj8pt8UZG7EETfmAGSDvfcNsean7jRPcgovDMvCj",
  "key24": "3kPG4TE5UM2inUqY6eviCNs3pdCT9SpjoyoYZh6coJnLKDZ2CB19AqhWoazkdcE9VgjQ3VCZJfQaWoDM8DKhM6hH"
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
