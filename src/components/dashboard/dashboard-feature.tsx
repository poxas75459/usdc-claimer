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
    "2qgcmjYx4rZaDkCdUpiGHM9tU1TpoCVMn4f4fyLKPZMc3LC1UUJhLuG7oitg77GMMG9SfHQLsvLNv7ypfxhcmohJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BqjkMHtmF62ERCHbW4rbsKAYAGNRgCfvBimNn9ULFTEyXG2ftxk7SYNTLVBSqyNLYfG9rtusvz8pQyJCJNe5aRQ",
  "key1": "2WY7LiS6Y2szcwvsejHTG1HYdDHdPpH8i7UrBAA9y8AAvHMCJwyK3JmhgVbavbHWMNqaV5YFVcBCNGwzJCkxVw4p",
  "key2": "n4gtPa87mqsU6TXUejP567fvHjwoZzFmcYdLk2Nj2Mn8vgZHvuAaG2xhT9BMdArgEYjarHEFuewv8BAXbcneYeB",
  "key3": "2LdyRY3o6rWjzMyyuuinUXHAEEUqsn7Yb3Z6gfPMyaLzWanpM8jJzVi8rcQX4Net5YTX6utCbdDUZMuEpEGxhkqZ",
  "key4": "2Rhn2qFx9xMnGyBnEimqfsSrt1Gxo1VVCPX68A6RdzK17tCkEEzwVp1vq8ji14zJSKDEHXpPAKF3JUx7CVjYATqj",
  "key5": "5dmqFdaGbnRZcbPpHAhKx5p5BeVj1ZvAR7A6xGBdTthURCcn7MjK9C6MqCKKZuMA2S8HHRP9HaJAcsp5WfE5YkZL",
  "key6": "UTfBw2Y98AX4bvjMaV84A1A8YrBov7yiXWh4oBhNs2RnDXsUK1ofaokPzvPgxkt2D4DsdG1rKbTNKVRdFecHvo7",
  "key7": "3GxPDSHRdmaf2nDd2bYGjaPthas8ReEAjYPz6JvKbubWtkNkcnd9G6y3gRcVJ519qELXznwFCsuXmxmRhcxggUFW",
  "key8": "5EyFfv16aupsPFYrQqP4c7jBpBHjybW5QzZbKDyvdBNyvubpRbKEJGzSCs9PQC9xCcGcxCb8YCoxcn5yPejFL5Br",
  "key9": "35BqJ1kTXvpnvk9Bjkryq8MZFuV6Aj7Q82UT1aFv6pFbquMngFghDZwiytXN3UHt1KsFqprBGW9XNE9vWe849uAg",
  "key10": "h2ff1SyLStw6mvDJJqMXYfLQyrD1LFefPW9uDx4vu2XUnhYTmCtHDNwQMx5P4JTMVUFz258RgBmFwV5y8gpL4eX",
  "key11": "2LzenCQGoBgzw3LfsdyDF6cb13AF8sF2gSTqvZ8JyyPhFQ6VnApEpGKGi7kYX5WCtp4ZRWRPdPz3szzLyPHLdUef",
  "key12": "f5aqpyRtzGDz4qAJhKScKUvipd3v8A2KJDNMJBA2Bp2xZLEsWcDLiZFzJczmPz6xSPbkFEqYRWSif9WS6Ju4F4X",
  "key13": "2tPSuXjmybMRidcifC3f8BAKhSnx2teDDrAegMv82key2mvf9KwKwAh5JY5GuiuUjd5FnTnYMgJAwcCnNv9bMe1Z",
  "key14": "3M9bZHY4ZKrc7Aa6VCT8waQngBF1nBHLJxnZe8FKPEhRZMvr9cq3kf7g6eQfNz5dRk6YpD96b4dxDSbNecDQ1eTJ",
  "key15": "SDVfcaB7j9hESRiAAvAxafNcmZq1tDRAGsn8sfijZ93YrKXQFLSL9hPSzkN844EhJUJ4gdLbjkkcc1L9c6qbngx",
  "key16": "4NwEhkf6ZVE9f8gXW5w7Ce84kxeaF3gZztyXf7Z5Vt9VUyQHBSobtZBNdMgeCstxQk2MgicmRU1MVskiUe9Y1Bvx",
  "key17": "3Zod4qwEAm9xkpkVNUuodFPYZEBCeJbt9nJYnMCkPoCTmDQzBjWx6qhfBjGY88aKRXXqKzRWzYe3qhdiSDF9Jsis",
  "key18": "3fxt7NhtuyWhs1sjJ5R8tueKiVmquwFqcE11UuZEoH6UHTjiAH37rw5HjHZx23rWTHk6oWZkaHKA6wkqzcYfmmp7",
  "key19": "46ekDeAHWGMztvz3iqpmF2sUjkkdvT8r8NTfp2tBxM1m4StC72jNhXPqUxQQif2uoaN1BNY7zvd4dof28ihYFdYS",
  "key20": "x2aSB3jT6zNH5cmPoZchJMKangp5biM8D8Z6VxAVY24sHGDUyyBPBraQEvXuC6vwMDmbtmxZ4ovQrkJEM2uRP2k",
  "key21": "5gUEfE7zn3ijusThtNQU5YyNEcyiJvcaf7WrJXzCr8q7qsqnEqKmakKYhxWPZigfDwvppr2sqbohe8cSS434CwyC",
  "key22": "4LeARxTfXF8QgVdThSTXSd4Buj3TeGMoR8qLWkD6c78YxFH6TG2mEgWkCacc4hr8NkW7VtrtySGfb2KKYVxqtyBu",
  "key23": "4dicJNRjYxtgvQACKr6sxwntgQAEqAhZa3NGkXnKVaPSziYgivywqYP8cCdVHi7EBF34WacRsrYfZXBKcFZEnMCM",
  "key24": "4eeu2E8UD8V3rswore7r25XPYJ3M6TMwgUHfnkwsXH7LR6kuHGZbLvNrUjZJRFNAhPMZGVKuVe51vFsG9pq1DWs6",
  "key25": "2wtoCYRDkjE9dpckS5nshL8H8zZg7VLFUxhSf7FfFnX4xyZBQ9HGJEtNT5f92qKXVrAXDBtwQ9qvsC8SVpm1na7d",
  "key26": "3mCycPNGy5eWMRP3VKxzA7LdUECV7RSstHyxMKU9x2xF9NU1PeA1A2kCxqJ9zdtjYSdbgAbxJi6KgMuFSLhC2xwb",
  "key27": "kiBJ7XXbpWcTYM2ZBUbEk4AWnsSuSAHYS3TgG7cHjTBWYDQtEyspUoy28aQmzrysTf94KvTrdTnZDm9aUfosDuy",
  "key28": "3h4z7ThFnTxV8wucPpfKXPfx9p4SkzKbRRgFRpja1ZCELnKW8jjVibugtLbVAjVaTJBTyf53cJpy8X3HEDgjvgkz",
  "key29": "3cpP8RSaaZXJ5xWkiGJ1S3KMuJ2tkq8sBBXi5X3pU9HFSNfh6TvpUuPcPHsgrk89Cgjyz8Arf5c9didKe9nKBTMC"
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
