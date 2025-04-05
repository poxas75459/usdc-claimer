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
    "3f8DW4jmNaYXjgXSPnD2j9VyNYMxuMvRqz71cyJYAKh5bMKKoY4mKg6PCLBgTXo24zxB6meNJsGnvZocBoHCAf62"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45JtVBc8pEBtdYUTcgV33T7xg8Nt7NwHgh1eaeqc32CUCfe8BpiECv53153jm9i4tnmoQcQYd86F4TLz6Fuc4Xpa",
  "key1": "62GeaN57vGhqsHm6Zpgf8TmTuPUZF1kjwPDXHTR5apXar3vWHxiSqZZS1zDfuL27kN8zTAiXPqZymDuTqFTVFiym",
  "key2": "4ko8RdrFPEH6ENNA28DpmuWuMM8cshN83mbu1hVkGuYq16RoMieuE1gcvpN4QodHa81bkrzkn3baNUNuuWQGSod2",
  "key3": "4DdtYdpbBKAkutcqo4WJDFqTLWfb48m1MmQjGofTw6nS7YDLNvGcjHvLPzoZAjviV15kemaKMY4cjVbrU7MSYVkq",
  "key4": "4N6abnFcfxnErcxiC9fVyqFLX71N7YMydSPEQQSvVYWTyiLG7jqYEA66vBLDdq5yk6Hd38qF3Az1ajDRbcC6mGpB",
  "key5": "4k9FuJL9JqFq94fAKtLRXiSEmAsYgqwjSFoxt1jS7APLq2xkqxWzFXMNPTVmXxCqRCgneTcxEUUwVW5Fvr5pkuT3",
  "key6": "2rd3ViXYwYQUog4ZJ2WL3VFE65EP8QJAq7X5M3M9dJr8dcNGHe5Kw5EXDoQDY7L1PpURYeo5yuVLdpYY8rdpW5M8",
  "key7": "5MsnmEcjvbKhNLMm8CVqikbRqJR1ZUX6zxkRE9MnNf7MGq5DGa1ZjTFyqLDGRZ3AT8PDRRbbPTNWw595HbAVjNoM",
  "key8": "5UcgzJ5oR9xtyTieiEJC4bX5hHYmhUqM8a4nShSpwTrHSeoDjKv3TT8kp3YMorXhmDEPuZQgQX9HM4jwFFZtjqgn",
  "key9": "5sUSZSsQCjNEa8hrrpafXZkSnqVGeMBijr3DfmHadRb4DXagSdnbsejjMWZpAHtWS31C87c4zVsjyfta5LAgdh2q",
  "key10": "NAzrL31W1vJ2VY3Sgq1B33M7PfA8joLt2ACWmiMEg3aLpTKxLgsjFBsxxXzAY5hySk1QUew8trGXWEmFnftcQPe",
  "key11": "3H9DQpDqB8NadY7M7Hnw87K8YHT9U5hBoioknyHp5iWTe5u7v14PVqCyLydKRrNNd2pVQf3Vnj4St2r4WAyNeGMk",
  "key12": "3pd1BtwW8XRemu2VQfDaR1xzpGonpkZ8WKS7qhK3nVYfS8CjaAtxj3M3M2zH9uFydx84sMzaJKsGhFS6Ma8UeFJg",
  "key13": "F51ieZ9hD6iboQ3KzFizUPiSaXw6ynghprDPC9yA1WP4jNCwq3sMV6kES4hypbgUrEhMn2K26hMLHraaew5tm7t",
  "key14": "3MScWrM8MJ5n9PEHtjodrHoye4jiarRFhmBp8UDgKdMKJvDDcxg1HTLLFgDizMB6EXbECeWdjkixuY9QrQZJJGvM",
  "key15": "5zJpXMopEVteZfMSAr2E9edhSinsWLfcwYfAuHn65oY3wbD2CqsaUugFF9jFoh8fb3TMHHKQkbgVKvZNkfQe3NVG",
  "key16": "3KiUnFwyQJDkDuRNUj4aSSEGfR3RvAZxR4rNnw8TT8HnSK2jzMmLBcsrHpw5gZ3YVnFELFJEdruHt1Bq4W2SGqAJ",
  "key17": "66Pcei5jhzSWNnPELCNnvNxDuyQLQhzC8fNo9tTo4T1pgihEdMBh3XTpzAMrfLR6W1QS74JgStHNXi8yQkStnDFq",
  "key18": "2RMrLk6oR7FqzxgUnEXmmFLCcP8TgcbirjeYFBhKmENfhono5rFCE4WFvhixH6nuaqKNHcQcfRxjL3N4kPgPf3iK",
  "key19": "2HtkV6m3eFpwpYKZ6rS9ZmMwjr255N3DrQfewVH9h4Fn8HC3uHFKFmPXpt8PaoUJRjxWENFiVzM3rox2oCXw6gEG",
  "key20": "2gUzH67MpoK1wAumQi2HadkGGS1bpeBKDQiwAenmLz11yCJL3v1ziAw3ioWWeN3Vazchxmzw5TAvUedNdyDL4UdT",
  "key21": "5RUEMNomZ5FxTixHnyf29YS5SekeSiwVG5SXChpFf6mRRozspBkZ5Py8GJNr7nY9x3NQFW6skCuT1Mkto1YZvW9y",
  "key22": "2iKijwXENqEaqHXYct1GwRiYKdpVkeNqguoA9H62qSw7XZ5dMzLCWUcm9hPgV7KHUaH1uv8xwypeYwob9aofGPRp",
  "key23": "mNuKAGim8z3VNMa3zCNdrszX6exfwP5WxRso79gEhBbtTFtpQNg83c3zHqSkKhSd1BLHFLSv5K9o1STZNb1mbS3",
  "key24": "5qHjx6AdqX4HHJerbSbnJ3GjWdcoNFTQFVqPuXvkUhXqzaQUEugpT6CRBMF3LccA6dbM7qJ5ixtyKqBjLVQ2Nbs7",
  "key25": "4XxCn9FfRdSbCTpVhpzrAMAXhxrtyKjpcmL9k4kMQWbJiDL9ki6pMZbN4jCqopSwEGBYrwiL98LqzHRUfjXGLH8K",
  "key26": "5GmxzmAnk9VS3EbwbaL2KVN38wALwPDu3DFCdMQ2aF4XS2JkfMN1knUyYSDTRBM6rnS3t9yEGgTpGB1eWYJjWrYX",
  "key27": "dLK1skNksFasWxqH4cNRgABQrvzYW8fC4QqeYNMCiixtwRYmjzXywENap6jJSyJuVtVM88ARgk1nNVKGVbgyGqP",
  "key28": "sG9UXxCzmfavNrCz55rNgqehTZsv5HfRruTBgGY9Q3Sho6YAT573xDGWr4ZjUV9R7UyZ6CkABemxN2yP6qJLJEp",
  "key29": "2a8wwZobbtiaCZ5eoL2YzEjWDNHM6c6FyjCh6ajnBrW4EL4eBffqj6Poq6SYVZCAL29fpyAGSfLqBxNzYtnjDNjj"
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
