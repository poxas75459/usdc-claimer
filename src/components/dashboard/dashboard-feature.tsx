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
    "5YpUdm6MEHeDoJkSmyMgZkwwGCNLdnWbBJDTZXwH2kNQ8NUHF4dQiQUDq4sTCobYNSD9nVhqsKXRTtWVhZ572kUr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t6BYueMTs2KE1do94M2GaEHioYYi1XiiHESjesmL9JwYtvyfYuMCmDa8VB9fZq4nWLNvGdnQLddxw8At7vmD7Lt",
  "key1": "4cLnHNHFmFDuz8bDGz2RtVM9e3svV5Puhy8oDJWaeyfD7LCKmv7gyS7fdWekXzoTHmjAezrqY5j1KCJ24P5kUYuU",
  "key2": "3H2fqfrE3tnbTCtozq8Q2UiX2vRWzBTPPBYNYySa3LxqoCm6Mxycbrpe8CZHLTShSrNXcg9EXpBH3ERDsVM8JCuo",
  "key3": "4QrE7xrWXGjbgY5P2jtwMdYxhFhkrobgVvHC73eDVmEtszszQNfnoo2AwmjbAn7VKhYS4s6E4FWhKVobwGfnQtrS",
  "key4": "3BcfZZcz3HSkM16Qr1KvmH7gRAD713wddeyhSjd5JvXS4LSqPUd7FhF4dRhmA3uvJyoY4aLuS8umbJ2Q1Pxv9Sin",
  "key5": "5sPPy2anzy5gk8cygHCFKoLiMBcpAvCWmfLqhPH5nExF4isnxU2zp1oUXtBDeeoAARufGKfawigWZdcGwBvi1hkf",
  "key6": "2fzSZYeZWfUW8rMLDHLHH13odDR9EkQQ1QbS2r48vjTXtSDUofiAFZqx4dAruTbL8XuYEZcJ2uMhCF7ypNVuJ38k",
  "key7": "5s6mooHLCT3BdNZdse1KtWRSErnEPeihcw8EnNsTZ1nnKvew1f2Q7ZzqPqSqLvwuktE5PpZbLxLHyvthLqgQ3wGG",
  "key8": "4BiLk2CznMd2298K9jn7YBNY8ZMpDKqT1ow7NLHA92cCzsdAa4ZgVtEayZgb33izyuz24QYgjDssiPx9pK3UCYkA",
  "key9": "4Zm28youe8cqmnTmEatJRYJ6eT1N5pdqiGfQGaa8zVMmgvZkjpfuqX1A8KW3oSAK5UMTCFWidUW9R2f3pFZqUqdB",
  "key10": "62vio3PgiscvqwzYmYhahDGfnsJTCdmFEb1d3DgN2RA1Js9osgTya4w3Ly42Mw1t7MMfvvp5PSwrD4772WVGRiy1",
  "key11": "5AsRbN1cwRjKVwfrWZWBvtipZWVzbmkTu2KyYCvt9kwbZRjc9hxpgGFH7RvLHu1fAAmiuKEbndUM8oQkrYAxVx36",
  "key12": "35LLM9JoTPk7znxKw4A3aCq5BLjiMbN8F1PrTHuMTnyTQACaid5JdahAuThVpBjskiXvVDxXi7aPQvW2aa4SQnnt",
  "key13": "2DmWUxcfERSpfn9Qx9JCHoAzrDutwoJEgWWZX1iZyYBDxTNPRyC73ERBVE3v7vPHtdPXcNXqq8z9mdinuYmHr4dp",
  "key14": "2jnt5sXf3pJZjM24JXqQzVWSiJx6YsWBnFweAcewpDDAxb1TBbm3ShcdcfWYKow9WpM7gaVuWBV1gpTZs6Jr2Q5B",
  "key15": "3r1gTAfS1mBmwPGjXEHaDognZYfrheuVB4e6CyRBNkER6CyKFoaFzLQJhTwSUjECkq6DpVp1yDbrKVnfWfLxnXi9",
  "key16": "2z4uURuN6MLhkh5NLvvbh8cNgaVduFtZnLLjpiM8pi4x2JD8J4gz7DmLcyVcUzT9ZpEk44sNVjLs1hTZEY2MC4S1",
  "key17": "jWu6E8fCJRxcKrDVyReBvC1E5cbyojjEsTDZXRzpiWwP2tP8rSnyrY9Y7SdMx9QyLwTRH55N9aUpvXLhKj3b1T2",
  "key18": "2DKUKKx7yWXjXYsAVMuok14hWRzGHhkFujTsCsoooryaqxCD7Ezyvew4CvhhVPpk4wc5W2RavzywWGq6ZnbzNWAq",
  "key19": "4JxKrka2vcaTpNbwfXyyjAVY3TVXGYW8LjdiwKvfLk9bcCp6Fb1REzMnxBu1RjARs7kRZMwb4LbnNRn5au9faSHT",
  "key20": "kNQXwhrXarQTRPUmsk3F4pooSPKMHke4Fv5Xo4qgv4BmV8E5Xsj3cK9gTT79LtxopQxFchdTADufVoP3qH3K9dv",
  "key21": "2pW2vbKhjdDUaLXp45wwirGabxy54Nkx8jBzH51adefbVoBPEE1zrcRgHUMMBu29hsn176hj2Nm9HFyntoYgLeKR",
  "key22": "2nfXxC8FcEfQuAetTknDt5JQrYnGVxbiyT1KWtuuKBG9LJdhao3qzhK75UE4TGnSwCFKWMMYrg2CrBMDRNQaeaR8",
  "key23": "3eAF2HwqUA8oBsWntiyzbchf8EyyAja1DYQztHTBrC2devamrCYef9MrXLWRurYGG176e8jiLmDQUvtAtS8UVvQf",
  "key24": "46JXVyzqVixMzpEnHZ4kJytLBvJjYjuKKGToAchwUxjaUDc5yLgkWn1aAPMzM4xUddnsTsJBczcgrXg34xhwVnMf",
  "key25": "3QVSrxmiUwfRtnGzhU7vic9HXixsm29TQEKMpY6A2pbUEATmU8uGtPz3wKcNu16v66EjD6aNt2DfUHtSr6G7VxUq",
  "key26": "4UvVzCxyxavswzb7C1ZHPMSpZEowDdVMFGNNWGZSc4Jg9anKKAsbV6SptswqoBKi1kEFgQysiLEk15MGeFfLmN5i",
  "key27": "5R68hUTuVN2sd5nDAAhf3r6c1UBfdP7zf61naHZq9Wv7CDfi9v4csaoTPrFGBFW5x6vL9Km3Hg6DYT4dTFPrkBCw",
  "key28": "2gGg5JjwMG4zUa3rxWFyBQnS5gicA98Ezcys65PfJURo9TcAULXj3SrBBxUbrS7HqPJ51A6b835LYqud5cZuscxo",
  "key29": "2LrAfr4pJF7aCdSH4gP9ktPPyvFRKXGowWgMs22dfseiztbRYVMGiEJpU4aJ5BRdMvdnUZtJo5C5i4wN4gFAs1Fi",
  "key30": "61FurJU3NY792AWtpuSUBZw9a782Vzjv124Fe3AkCMXr6N5ojFCYq3pezTPGUiidCbqCUvtbgf2HkE38mXMd1bpG",
  "key31": "v1qvjdG54sANpt3zUDMkhLZWuchU9NA5Tu5d29XGRYuaNXhwEg7uCBNkxQXEwhw3HZFigQV9fUGv5PN7hF8Fhry",
  "key32": "2AHg89swnKi8e1t4ywCSoW4enhTXy2Fn3yoomx8tc3xVnt6WK9UWknadcZu67aQh1Uc1NmPsQTRuXHQ7ARsji6YH",
  "key33": "2ziujLB9xYPc2HULBDreVaBDbqUR24rsJNnnM226ogSRX538pVcFw7wV15QPp5x3X1ejT6ae3KmD2f8ypkS7TF3m"
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
