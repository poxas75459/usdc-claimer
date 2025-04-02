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
    "3AMnB2iAmTYPVLxEv2utN9aaYtfXFhAxDP3QwarebxgRqMpSYz58uXFWutrXkiF5cxgsirbGTueW3MNjrxvJV1ip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5crG42Lgv6mKYmBCrK42m8NMaNy5Rb9BkcAFJMTqsr9YupZvzyGjZFtK3H9zDU5Lk4E6Gdp25QmT7TXeHc2VvhHr",
  "key1": "NJ6uKgvXNgMb2GG4qFsz2ZFkKAW4sYcEQw2LtBsSXqZtPDr4gdznL8tKPMbhhgBmkkeLX25w4bzJB6avuM3sRko",
  "key2": "ZNqrqpwrbgieVULrgJV5XEeLCQLGjZ3SFcDDMCz5EWBLK5LMDeBK64ANWRUGYrLSaPPktTExEr9AkyGSnqZfHYo",
  "key3": "n1GxJuHKw1ETRur1rAykUXAWseZhQ8yekMhnr9RvQoPhAJsoNJFWkAm5zApKtcCmvamWVvoJtuLDtkCwZ5nnuzR",
  "key4": "5t3swaQUP9pAfJireX5Tm3fvJjSd7uu8moTjT4VFjBWob4tE8E2AhYnWWDmBYVfzvthFHxZniLAXdc7AEpskcaYn",
  "key5": "hZXxaiF6auC4iTT4W5DangRNcA12NtVA8v2txswrkfNVYFcHogRcveNM7YTwfUmNMWhWcVGFxY4qmyRPq4hQbwo",
  "key6": "tzFML4NRQxnkghfBy2gZcKfWU4EQSSbmeMCmztAiZCP5ThRdBaRu6cstJeaDHW6tiU5nVb4p6ikLiiwoYSwtNWb",
  "key7": "5iUza37PTLGQ5xwRyJLZH8XAAihw42WHuY9AFESmiBVog6VzhcFB7SMgfq33Y19jw1BxZ3u4SudhdWMR4ocC4Ejs",
  "key8": "2feyujrR9HChd8xfs5vsR8ysSznjdU4CzieTSVXzW2b6KwiyTotGiascx8DXRJwp2H46C44QzYVkDVzmSnCVz4tG",
  "key9": "3hME7FnD2UvssaQd9AMzELXTvetEbYExZcx3VwyBuFM2pmpa3UN7yjdbGXkwC3nKeJZTcDbx8BvN2acCWuqN19N5",
  "key10": "2FNfvfMREPjCm3r6pmhWN3V3VMScyjbQsP9KAfe4NnAVjNLhgkQWkyyRQW3Yp33LWYd2xoBNmpemAnWJzz8mSLGf",
  "key11": "49MaHR2JNxDjGEyPyUWtTH7U82MJMjTxot7ksbmHTswobBeTpZEqj8ptwBXQk83Xg9WV7NnXhw3P129X5BmU11xY",
  "key12": "5UEe8iU4TNq2tenRtz84ZRkYHBqLXxeEKmtfrh6C87Wikwied379tGXuYPPtBmUibntHYmZjuxbjmrZDTodu7z7k",
  "key13": "4PKY8qAjemW4uHkX3n22LP3rzfDKjJcMFguRdfHED93X5E7Tv8st9kpfsnSfaUZ7QiD3NGoKe1Z2JCMyUptPcrGx",
  "key14": "4hhux8xni7a6VwhssuBfg1aUzkFekBWQwpFi1KU8SVzpuWawrhr9rG62qGhcQfERgqTXGJp5EnADdGoy7vcoYmvd",
  "key15": "3oqLmvDzZGrtNbn27R1jD3qQE7gJDkiFqTYYSwjvSMcifE5FgzayQrTdvNUBRmvSMx8rahZDVo99qdf8eMBD6pGa",
  "key16": "5scPHiXoPAJRsqYQCbvLJCbW8xJ7ikLMpErETtHwLBrRtNtjWpiDrdZUzJgUJ8fmWpaipmwFN4DTZjtKSKWnNsij",
  "key17": "3SohsCoRs4fXNvJsMgJxpD3WVSRrLJEnTj7817pyNeUvVz1FJejs1gx24jCLxxaL7i68MiCxJ2wRD5JFo6gH1f1v",
  "key18": "4GihrvBfyk5mbYQvTLGu4UwbG3r7sBqrN4tzxnoxFA3WLRaTmTRnUhdUdcYw9AZSyp9aq1pY76GkKvE449gzQDsA",
  "key19": "KzJ6knsZSydCiU6HB9iHM4KaimJwfLd1Ny8H2653wAXgXLyJtznwwztDDtLceMH8H4A3HUtr7ZU8qRJDv7QVz6m",
  "key20": "D1WuhCv7JPozffD1aRzg5upc1aKsBKwRXiGNqPRoC4VwdtXBUh5ZzK6wS1zQ7t4ozkUHp72jZh9BqNcoJx3tney",
  "key21": "59m7MYLDsgp8RZR2j8zJLu4fMBnc8rNJqD2umE2g3vWp7GYyNbwLg2mUc1PiRWKQwTgv8owxTwTuYe58j2NoF9go",
  "key22": "5T1mp3e281deWqbju3gLBcr1q7kG5Mn4YH6B3LbY7FDCiyNxzjEEM2GfvmmNiCKQM1Khkm8ns2UU19AyrS1iFyTL",
  "key23": "4F6APuLWuVjENRdxnziZGL6NrVm9pG9mKvdRRr4UDvLwrKRB7LG3VSFyTBETc4FQV7Fro5sX9Vtduio6iEQZ5nDg",
  "key24": "TKN5DCsqYm7xpoptupuzZwAH4W4124M1Dc7PjEDi4YggbpB6VAEJ9kzAokH1e8Yy8doKdMqAnpLpFoKiFUKiQbB",
  "key25": "3daG2viPQ518PALhhZ1vivMckW3PobmwNqcGtXuJn33yQLsaw5bwWoeqSdZ1i3KD7kQkCG4wBBwAMtYdXvGhfgqJ",
  "key26": "3UEogTbXVgVA9NWKPuSfSBRG4D1uDntkndzTWLQvUtKiANhdx1UEqTEofTt18nTJyfdy8oWnRwv1efanWMF2XpQm",
  "key27": "3MeiZ7KF83iDnccaDNYvbfSPe7ZjyxMbyQGp6jbHMwiQkB4tbiicPiYpwhYFUWU1PVGPy16BYeVweVJ4h9CjHyfw",
  "key28": "4ULX86oebPv2HyW2Cg8CSYAmxQsr2i3pPYgi7mCEYohT5jkZXNXfuzEbU7pfzkwEmdGgq3St9e7cErMufYhgaAZ6",
  "key29": "2G91gMSNXB9YveMaw28y9DRQrdpCXdV92s1E18ngF4bAQF2V4pTusLt4nJvoomBTxMNx97A526kymvbqfdha9nWU",
  "key30": "ksAxE7Cmgu9imrtGsp1tQUFL7R7D1TbeNd8JxJqnJxjoMAvcrNvnKDj2QTtPtDiDNVHeZN4DEgy47XRVFm5cew7",
  "key31": "2u48qa8PTeun331rQNnsGwhNiiKw3iFxCHh2segYv7Bud7kdpFcqUiBLRm8jY3QFk6bQ6u91n2T5AH9PvuuF56Gc",
  "key32": "3KrPotDw2mdFQ7fPMVtFZFS7cnSU2yjgtZgQ4Q8cE3SJqdTSELQzMveN79irgevKXEwaAgcUeeE9PadEQvx11CFo",
  "key33": "5R4ahyQbbVNA9Uw92q6YQDb9CJDr7ahQzPZ2KPimWtLdk1ytJDVYfGZ4pAPnY3TXi3p6pXb8oH2EZ9RHNr3TLAib",
  "key34": "3nw2rpo28Kaff4p7U2LV7Ti5vjPeDy1STzpY3aEkLXeL31WYYaYHndbhuYzNUzVfXgK4mvNZuZcp7ibY55nxbBjP",
  "key35": "3n2Qj3dqkbQSus1g86ZPDRJw312wPHg4VsPgaom6864w7riEYVqczYPi2vMyEorhTsVP4zWVmhx3kZjaHjNMA4GN",
  "key36": "4AdrVQtuQzbBzwuYMvFkLYMxro6S3PUAqcus1bkfPuPAoumXya6WBgCJMRs2noJM2U6aRExL3HkGm8eGBMWtpx1d",
  "key37": "39kyFuLKudToo5Am5chyHx1ENb7dStKtpQdJEedBe9rKt7NPw8BMWQXB41EFKVgnzuvJctCz1TxtAiMHaRJvQU62",
  "key38": "5uLW5KvyTm9AHetiVKmkQ4VvLxsHqLfQt1GWV46W6fSoq4UW9YLTUMHAQwUiuax6UGogBmbej88yyohZYB2y6Sgd",
  "key39": "37gQbdYSNwWkCArFdf6yWmJZ2YeWVUxJKLgJ7Ki6QwKNH2WYsGcQwyYA4X2nR2tJ6jVxR3sYhdhkjomghqKm3ktm",
  "key40": "5DKq3Po7xANBznGSLbMoFY46CxoCQty5C7Zt4Wsws38ZvWkCxPF6NNpRLubdAnU1QWkes789ZU6wbi5Ga8UFvakX",
  "key41": "21gxi2YjuKsEiyeqhNCyHSoLhR4VJNYGSB7ywU2ud8bfm5UfA74AcUBAfMJGmyd2pbqajbcUBzyC7DtZvHLUkFLo",
  "key42": "42s7fx33dyZNSquWRwjx7ofz3nBJvbq2CssCbZDahVY6ioQGGAWQpgX22NDfjJREfCimV2Et19CD5j5H5CRWd8p3",
  "key43": "4ZtMVZchqtKTLKcjHsaCZfMoJjTS5CmvkpWEwUw6Rw9zbPCGpgpjhthDjvD8dnCvDx4KuYWN5yV3aynmRFvjLQYH",
  "key44": "49Uqz9eeAWEUe2MjipyzByoowqEd9XRg7J732cmJHoVk4oyqQcEHd68eEq5RUCNe8sDPeMH8HWFVrzZNcxbyYXoT"
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
