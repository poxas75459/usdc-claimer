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
    "5zwmrpRXTh5ApqWVz4KaghYVy63FUyLfWhTCmYKkQXLjXPneCMpjYyUbkqx3vvcxWkch25ycdRbDw3ak6eePQfdE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cozYyu1rrR7eXJTk76PTEHTvZG2qQPB1nTRz1qPXPTUoTBvPXiXJAQUtXavDdVtoD7LXozdTwAK89gJHtGqhKXB",
  "key1": "2tSJ6WrhzGQjm6UKmktDtmGbinZGNN54p2F5ewBmfcjRPa5BavU3jDERSX1bPsBk9VXvjjfvUuNsZJBqwhDai7Lw",
  "key2": "5BQnAZLq9n8ckeetzC98hQmUNguHvgbNS1V1LcFHLUoYtbVQw8FjJErrud3iBEE266n2hPZotgDRrT6UkELt48gb",
  "key3": "2DR6D4SZvucRZZksii8cxnURQX4WFjHvb4UMBTeoPZb24aUzjm64P2o7B669K5xMx5TYWF6KU9t6Tngu9tPupoEZ",
  "key4": "2SXwby7mWU6NDuXBrifofUfjAEkXHCvpgiYwN9WZoQDjW3MxpXNZbJd6oUnv7S7HJGrB3DKwAVDWnK68EEbWJMU1",
  "key5": "42KquZuPeyWHJjGZ4972kjQug7a544xTxPGVsnXFEgn7iige3nv3rbJU5CgBKcJF9nqdWmaHBKG9wBJGGijVPzdC",
  "key6": "3zYoi2g9N9KBiJiBpnsowuER4poxd2tMEqYomvX5tYFvzQ7mtXEcUDSWmfqfPQ5uQSbtXEdP6XbZMTycp2M9ZcrP",
  "key7": "2VAdB6xEZaBuYRJiQeYckjgfkw5moEMBwNSKvz42N9Q5Xxz9GMpg3btji6uoBth8j1VZv3jrFkQuRd7XXBVWw8PM",
  "key8": "64nhW3KsSMU3wsHdeEBbt8EP52Df7fiRodk1SLFtDmQBNinBZtx7rhSyrm9mUX7xc1A3aK2cNp3qSjzZfBbn7gq6",
  "key9": "4p3x9JSfXZnJrNUeS3juGwQhLUdau2VwmQy3YhKWBuEmP9jq5Re3LVofqcKMayxY8b8tCJTSMKL9Wxca1efN1JA4",
  "key10": "2v3PxRgeXrTbfi8jJnkbaMH93JNMCdsqj61xmRgeW7UyLyDRJrp4Zta3uDjuziXWVvgvNRPJfpKZbHkEPQaGUa3r",
  "key11": "2cXcWNFYMRcMRnsb4Qx8Ksea99YNde4zBYmf1BjrGP2EkpmWhwVdE3A1TmNGcftqhaVfVjK7yGDw6V6ohLDyh3jW",
  "key12": "5UX9cNfK1RK4Y4ma4K7f8SgzPEzoui9qZPGbTbQ7AogY1hZWjXmfJXf48GUE8N1qXdrHt6rDyEYgQ3fMhD4Lx8Vr",
  "key13": "2JR4WEZG9tkt1wezmf6vMdHkDPzUwHwr2SCPC87CZEKqjBreRrPjitTHppKTdFnwZkc6NWiM54C1QaHhrJKmb16q",
  "key14": "521jhjysW5KjcLVSniPWQf9eSKcZndQUxfqrc8hgeNrvAKqvfQnF2fEADkC1w9ssQtvGJtkbLqDejswapVxT2bpZ",
  "key15": "3pd9ff7kv73ynvWGdbwQRBqS2SCPL2v5HoxCBizZZLrt42KDVkEFLaQY9QvgKgu2hNc9jXRcRYwyR3mhgfeiqx2M",
  "key16": "2rw13Z6tzBaK1nnHiZAWwehpP7Tn79xvG7Hqv4QFidwbUEskF4QmJypYFNiLwSsfDXhatfoepbGdEcJGJwXZ582s",
  "key17": "54bMGe5aynDdhL48AfQHJ9WhcCVMsURTcgFVwKEXPF56nxamL8uB3UPhnrYGerCc17F1LV95DQdsC5215DJ4q4W5",
  "key18": "4FmhqJFjthPDXmGm2qGYBDjKzrewMYauSW8o76YXsL5kWoZbRkdHPhAChGahdseww659DVNZ1jav8RgxXKa5m1i3",
  "key19": "5ABa6heFXgh9A8VSafpbKxkziYS4QZYmnk4Dek7vsdY66eZRNjRDdBHr21ibmmFpxUQ8KVEB5yRYVALGNxFnzCGJ",
  "key20": "4Ti4dG5hbcaRnyZ365xp9wbFhSJSRQwKy2fMoQMZspV9MeKdtGTChGFHgiHQBrF9L66AXUKMi4MmefZu2FgJX3hq",
  "key21": "3HGMtHgSMprSpMN56PG7yy7KCwXrkcqVToGmjjWNqdz6sdjWnBoQ8LbPt4y23kooHjdHyGnvPYe99az6ZFUiS7k9",
  "key22": "21gAYiS5iFn4atJFzxj2gDECwpELcrMuDN6RxmjwR5q3WPgdeQ391tzQrmQGUin3GVQjzWC1w4zo82sbKxoEg5v4",
  "key23": "TMVKH12GjYRmVRwoBNHwSwHCZXXThNx2V1DfvNGpmFnkAxYy9s9FsaNv7FELNYgyDZq11DUJyAR68JrgUwfgZjz",
  "key24": "mCDZ6Rc1eZtDnUurt34otdcdZL3buj1b7caLKCNmj1LDixeWNp3nnXuxx8DYje7EmJGg3HBzzxDowazh53azR79",
  "key25": "5h3PvTPCSoNckHZkuYHePCj8m3QB673SGxXPGPGCLBPWgcZnyyXTUv3rsxB47BqFFBdDDdHfmB1K9C1v1H39eiLg",
  "key26": "998s1rzBmynisfvPNA2djRM6gAZQgvXqPZ7mvSzzhGb37eaPc7p2NGyzyWDF5mx5krwTsoGMokoRFsUoJkqAJmf",
  "key27": "2tHGbvdksgudCaaqRjmyYNK8kq81GxgywFUMp9xdGVJeSm9XpsuHoSTT7jD5o21QuNLtbqqzJDb4kjTp8dBetYm2",
  "key28": "5NndS7PmG6jC9zxarz4wGinGaw2ae89o9kYqS6L7XdzLZ1xanb3Vw7uHdE7oUeDDCyLAuRaDq3ALk1cvwKKk7tyR",
  "key29": "2iS6Jk3eJC1V46LuDqCr4qMVWbcGGCR289DULyyFcwjDhp9aZhmuUWCaHxZiFzqMrk2rpbZMtZhtQJS1mwXiVoTu",
  "key30": "3HbDSveqs1KezmNmhntJbjrgHDLR4CXTkZE74D2m4w6igeP8fFQXD6dCfvtRxgZ17moGcKt1Qy3EbzhwJPY1Ue5V",
  "key31": "4rLDDT43L2VeBeArtj32BHSgqoHUPHNGSYYVpx8QeyqCojCjAeoEW6i9JsJWF72efVxjSuWUsAU7PXUCHDbq1Gf2",
  "key32": "5mxs5w2VEEP1QestNzRqRxU15i5vMzDAcNZhLuKqwDRghRZTyeUoMbfhmjmd54NfZPPEbhLewaUpMygEWcDhznzm",
  "key33": "sW3udUhNEeCBRon2598csubtzp8ndxby33JtyJ5ZmT5r6P8sUspoGeNtyK3VdyVEym4D2RtMwvsv44ZSc5kwo5d",
  "key34": "63Xo1YRAzSxTAbyBSs8UsCYKffrU4xMQWySTvLauXVoVkz1Ue2rGp8FKgKLByN3Cm7QMG85pgc8sPxQa3E8vEQ3A"
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
