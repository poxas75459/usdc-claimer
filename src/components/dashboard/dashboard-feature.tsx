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
    "46jwPi9PFCCFUaXh56ihwAsGp6cUvNV53dS4qX41DRHZzvydohQGX8uveg2q4FWtbKhS47dJVFJPQpSSw5DcAjDK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G2UcTZjDx7VD8KRSjZmK6wqXZR4e73Gb3bQxDns1TdLBbNhK94qJcnfSWoZ3VxGypFw4MW7bYpozVvTSN1bCJC8",
  "key1": "3nMyQNP7nD3xLUECh6Cp48dRNSGe5o8EobbwcLT8gTNN4LCbWzD2KNsjDT5vfwHSqQsUWvwYGNgHTPzyavub3xZd",
  "key2": "5fVL3Rv4ANKnCKiN5yzEhbZLBg5VWQ7Rz2y99YGsaJgn17fcvyjaQLrEs2ewrtRkVMRqw919wmv6ATfcmhmqpwPv",
  "key3": "5F5DqkHjxGj82XwzkLugt3aJNukTvpgvcjF1cxxY6rdrBsi5T7t7uMQvyFaZfNXuUTzTqxhxHDv2Bow8g45djUqQ",
  "key4": "4ozn3Uc4uUdPK6GVR7CUW7jFHPNFqLykPgchTyVQKKfbTHfqNTxartrd1CMf9j2AESipb1w8arHqyNrMmUdj8ZAD",
  "key5": "3gbKGAuKbuwou26cbBCrreXDtDcK1a1tBx44TPyppFLPMzwXA4nvn4pP9SPrgq1byhgBD5jeJ7tQh8mMFqHWkevF",
  "key6": "2FdSMdS33rUDDdw5jCxU51NiKo36LtVxBxvjpkNPJHxQWRLxdyWTfciG4UFrB1aUgqsgN5nXLhQS3CYtLy8YJmu2",
  "key7": "2xf86snV6ELWnqsAGmLfZ7wgJDcxUMQYgTtyijbuF16wgdbT7gGLG4R7HEfaCye4Hvyh4TiJuhc6aRrhHudbTmLp",
  "key8": "32R4oSjcEoRbeVcjTjYUddAnavZrw8vpg9wSXLXfk377FB3GLEBnzgkPbg3xmgtpQbjeugft8xLGbPDQ2yhamCQw",
  "key9": "2QzV9inqW6VWnXSebuibHdQ42H1FLAMDS99sCC1tRH7zGqBL6sHEsNmXifCDLSQ24LuympssMmoiF3gbTRDqdjeM",
  "key10": "wXQEiU5GWSoBb2TLjZcvV21JvqumMTpgcZpmWkfGbyV13xLbGohY3Z8mQ9GPVG7ZxszUvGDfND9iTfsC4D6eWmd",
  "key11": "55P9RTQxZQ7zXYjumcYXceDvDfskLMPFHikf6MdnHKDsGGD7HvUKwaEoYC4uVH1rcxcJb4MTuaRbh8nTvyPBMKn1",
  "key12": "2SNMheGdsmNyJX1jNTMULeBziqaEiUGecMiQiCmVdWa2wZD6cAYWCris5piMSy3iYTujJXnhiaRBQEybkVbb5hSg",
  "key13": "2YtNm9TXyDHZwQLgYpSwV1VksKfiEYSdhpfNwowyxb33etoHa4nqvb8NwhHqTXiC79pBpY7zkE9SoDFpaB7ipFhv",
  "key14": "ssmZod6hDJ77U7VE5PucFLQ2CqYGsPZXuwD5KQBYSs1WZMAadyqKgfda8EJbEZNihPrCPvP4jsCX36id5jg4uQ2",
  "key15": "4QCnvmovf9Ri287ZpwMNje1Fs6E8JahAajU684Zw7Ru55gsBk33g1VkGvQnspC3P6T7vqsmpa9yxp6JVekrTsFqq",
  "key16": "33MKVdur8bqiQ5hWbdy8gs4R1zasye6cmGbBHDPbtqFQ5puvv667JVn7xN2Tz9XvGWaZsu8T78kUhkinJDvsMuvw",
  "key17": "2aYqqTdty6gptxhyHE5UCd1xk32Rf4ZHJgZC7wKY1Z8rMw5HXhj35CbETotqYVfkb3a4gjmqtrDyVF6VhxgYbeCj",
  "key18": "5gsSfg1jXYbnJLzuhpxUDLaAvoDRUcTw3G3RZXZvEASrQmsqUCanmmyh5NA4EafJKRKVmZi5czvoDFxGpaxvX2jp",
  "key19": "4sFAHzKCb3QcRLGTdDQzUvPZAj7wAGbA8XkCK3wBNZC4FCkSBP4mRZNrnP7qCQyED8oVBbv9NdYfzx2x9YauzPXK",
  "key20": "5ucrbsFT9y2yH27ZcPDacginVcqrXJxw6SWRtujSzVaQRVDCM23sJf9ca7tjeA2uQVLrWh4azSYVHk92AFYQQqVP",
  "key21": "3DzouW9iTnMSDgr5jpkMfT2rGJC5tuhsEkYTANFa5sqAQrya4Z6iHMmSm1eDivxDhRHGcEWZyJqR5937hfhASSY5",
  "key22": "63gCpDbBu8oh9KosJeLHLKSie2knwT1HQL9XoDETYk9whTpMgKTFE7hm8MJ4tJKdHcnpb2WeRRGDj44fiqh3gzdj",
  "key23": "4iiGMWxkiLjxifKFJ8Lcr3GJABuYddVWta6cDhCzxg7ecatiE3wQkJGXnaJsypzQKPfhjWJtdjyudb1tYVT8rzXZ",
  "key24": "xG9SRXDNMi5ZZ6BwC3k8NVt1oLqHkv6N7NdkEyUyYPXmEpYfGe9C3QzgzjcQFF91XHViQY8yNYmebz8t9pKvd9Z",
  "key25": "5mgSqdoZ19VTG77ddbepnLqogbgdQM8wEY8JGc9Hj6pyW2yVGb3XCe6wXYsDqrMSB9jtGa6brrWvERzWJqWRRTN7",
  "key26": "5QA6FpBN7L76ihh3bQrtKtPHAfNsRArHFRYjCCFYVjkezFUQEha11eMse4mKP1pxM8C7ZpFRuJddkywgTF7SSdpx"
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
