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
    "q3RfWyi9vTR9erfaFWLG2QKRNVxPYRTVSaJGvLg31UbG5qq6tLEwVryuSqNZ7ZBYQMcckKGRYkyzRuy4yREnXks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CVdX79u1C3isWrbAzQbDpjzo9sVSoN4NiHvd7Ld4Tjaf3jKru2XAe4b6GmSmQyejCv7sHoDiHspaqmiM8KdknSQ",
  "key1": "4SArz7hWvnJPvNDM4A1Y41wDxWYKD1kAoe2EGBkRH2NBLovKQVn6WhoW26MoeG73MUpEHHNkE8WdPmQ44Azn9SjR",
  "key2": "QkA4ATujpaq9A7858Vm56fcysrBmn5GCz4NaZKQA3JYuH7h3t9KEeeTK34cKzCnQVee3UpdhRFaMuubu4LFazhp",
  "key3": "4Mfqhu14rP3kyff6nm2AdgtQZXQqdVvxHQ5EYqkQNiwezJ6kgV3Q4CqckcaiNrDgvbsqV3XPyyQB9ronKxucZysC",
  "key4": "23oLajqXTK8JDm1f4n9jSaCAxxzYvpKXq9dYqr58KnikjR2vPtG1hB3SXHJoQUBp9n4vUKiN1LdYDsxcPAzymyMk",
  "key5": "jih2QrFisvhk124vCuswBy8Gko2x9ruedFMvXAj4ZzUFe5EBnicEgaq6ob43wGNEgFHAnagq5dAU5HseMTf22eZ",
  "key6": "31aDW3SM1fFu6RCjPmJsWBcjdUSv6s8JHZds9sFvLBjhmZexYV97oxEph9j5KJ9SWU7XYpCczmVWDMz3qe86vGQ6",
  "key7": "2meWkF8NRjqMgnc7gvNq3kfZt81XhZM9sAxzJ4sJQik2DUzC24uiXUEgHvzRVWjptikYKqkqvWAfEYPEBSUJSga3",
  "key8": "q793bFyQG38oKnpfBH7fNTZBMjL6RKa6PXHjxp9tGyHsv2otxtoJNpKTbqfH5tCNjUbZ8zHNjosGaimGuuPDggk",
  "key9": "5LHZTR6qUCdmAeE9ifuMcxxDjQUtJFSyoSdZSrdx6hz55wCMrdrZeDRLfW213e4tYZz7MJLqqZ1APPvqe9ddzHX",
  "key10": "5cDiutaFq5ZAEauU67xY91oBR25w3kb24u3LVeTvbNNgZxpudjnNCkRnWi4tWA2Wc4kbz9KvWpZ6HFpHgJd3u2YJ",
  "key11": "3KyorD6LFbuvWYYEKR3B3CX219A9hv28duciXTbVcv2kvt2gKyigL4kNvToK1RuzqGempcjJVubodfW1JC3k98F2",
  "key12": "5AnHrgJVjBwxYNxNtDdcKiXq1EUwSQGkZeYBKZmnTHy7PAzRCzqD8dF1oTEwNaYenvViEpfQnJpUcGqiauVAmQXY",
  "key13": "2uQceDU6YeitFc4WXiFe3TayDMUy7xJ1hVYFFRLJnwAXF58VMrD6afXX538PyYDfKr4o7dwCLd6VXaRVGCnMqyUo",
  "key14": "4Fxu3BuEunQxomqWtfmEd4GdwwPjrPaoUGy1aeA2huqyVH2PX69wTRQcMDqzcXnCgqqLreKZfNiNNyFW5WPYE9nj",
  "key15": "5BL2LtPiK85kkW1aZbVwrHiQeUtujaYNzaxkArSHF2Beyds2yXcVEMysyy5sXBVmEL6EhGeiLqHqhutoda2Qq42m",
  "key16": "4RHcyPCviAzyRPHBYkmsrvVidZTtKqWxMhHnhLXWCABQaTJ8gj9oYpiqgvdL7gvB2qMMFn9UEgLACfNc6yyf7irc",
  "key17": "5g73ejn6UMpRvum1gbJ2YZoXC54iRRETvC861yY2RR478E1Ea1vjX943HG2B9ijRYh8qN4DePn6d6CBSct8GzjUk",
  "key18": "2Ns8d3hXxRZnTPtYb71ZERWEgARyAGDiDYyXiaK1s9FUhJTYEgQTt1G7iiq6qVXZepqK3yJvPMSJHLPK66eBX9YC",
  "key19": "4To6etYGsX8ccGgEtYkVtjVgs3ovrP6kLugtFnZg41n1RTqB4BPieAtUv2AFegg2vMAtUzxGjNZEm2ntNrumK7HA",
  "key20": "3hKMUyA2ZA3BAkUpLgyNubz5MmYUPifsGYXycWvmp1nQWLtX8u8Er2JhmH3HyDHMvQxTRA2b2GdraxzNvBTmYXtd",
  "key21": "3MghzP1NCXu4XSSCXoDBda9djCdYH6NjaFF96YKjDDWHzQfAMPqR3dHoFdVmEoT93qWfPR5JmYZW6iyUSoyQqvAt",
  "key22": "4SNSzb9NfJnnxVN2UvXhu9n7rhnmXfXFFXPzWyrw8veGwG2eFqWdHLUBcqs9AcDDi6vpH3SvSb8CqfTgcNHZqj8F",
  "key23": "4DgNxCHKhDqMN3hdryHykJru9F7B3CcjYHcKyXL1NT4373DeHtviTF3ewtKMVUXWUeWfDdKbgs3sT9nyAXeCLwQB",
  "key24": "68bpmi4yLx6W1WHUPJDvmFXVAT58kdaRrYo5wKg1E6pnJCioU1xVjSstd3KE39ouZPH5QHvahTPvWWBfeD9F93S"
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
