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
    "3A8MLjNCApqDBhX3mwdit6F1UVnMJgRWEEF6jkVbExwy1EY4RQ4Fd6FTGSyujXNdgHNJ4XfM3NizrPoiDn366K9e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r7ZeQpDaCBk43gPJWbTKuw92Z3kCoU3c7dg2QghX1we171zn2Bh3W8QYQfCwwso4oiw7dRuRC1MYz6vvunURT5e",
  "key1": "3HmodYnbZacGndLoqNvGRbZJAL5BkjiYu5QXgvRzTZhZEzwMeNWV8xm4WCZu56VNZbN1RcwK1WVVEZHPH33adfqi",
  "key2": "4mKbUhDYoTB4zG1rh1bUWhESZSirLUENuuVJ77xHVw93eKS7E12DPNT7xsAJUzRypYbeAYfevL89vX3oAteppeXt",
  "key3": "57c2eZHQDDYAr1cAM2aY3VgZTQDNJ45PKePkvJznYsjqXMaCmCk335F3aPcB6Bne6cHUZuWFWVRJZknf16w6uHkq",
  "key4": "3GexJr3hRCxKFma6DR2UHkYKV8SUQWe1Z6P1gTqcNrc88t2iPbivfQKtoyNyG2KJ36B7AAHkuQFGAo4aHULJbvBt",
  "key5": "3PvtgwqaKuu3XS8gJq26XcAGB1D8tewV6a3Ace7DW1PkAcdUvy9oVU42S3SGqUPCcXLCcHpKgKsz86QsgqvmhMad",
  "key6": "2oWwz8UsFa83s9FRxmZC2aUXhYuw4YkjHyUZnz4Dd5C8kt7DhgByVyWzQNs7e8oDqWTy6t8xkJtJgpGh6WQVGMLe",
  "key7": "HXV8ruAU4qu6A8hHUNPREZyQ2dqg3bEQDDkXfR8g2g2Eat7tqyzmT4w1xvHMVNZraB4RqNhme9JHHQtLDitnDu5",
  "key8": "5aQEczHQGbH4hHzpQNLLiQg4nKcFySvqXCCzEq6Y4GZZQMVh7GdJnpZ2t4gFoKqv7JQofvMM95DyvY3sR2RzsUR2",
  "key9": "2jbipVKUusdqQgiBYUE7egsWk8y3XgE7o1kcosygCmNNXXQ9yXLaHbwutmihCdZ4cQDZ6MgY5E277qXF6VH1NryV",
  "key10": "37vUDtTUiUKaADwaXVsHtMMxViqZWMsBH3Kt9XcBSyfEKXmUFrTWa1fpG7z2MGPUAt4edBxEqfMENbWTph4L1yJv",
  "key11": "2wDr5MM4S7YFxjkGbzPxHti5AVbuKfBVSAQwMGAb1aeqBf2cgKsvSZhDYHysbHpPQPidJumrJ3cQ3972hPAnyjmy",
  "key12": "v7hoMsGsgngkjZnWcoP7fHTaAJMPctu98ACUzfMXM7eg5kJxtPrBCofAvD3E1FQho2gqr2tra2CFbRatXFoXWuq",
  "key13": "3zmzb4ddYTntr8dodzMoWMNnD3NWmcnLwrbAF7GUNop9UHp7PWnWTHgPMdFpb1Am6JiR1HwJpuB8Aq4GTDg5saeE",
  "key14": "5ibrdg2Ge762Fee2XExs31oBiWavDNWnsDfUfSA6XQ4ThPeT2BCURCoVwhX2DLfGnPDaPU8LtCNhHWZ1qXpdikXX",
  "key15": "PX49YnB7uRCLK7hEezamHSrY6Znb3QToECUWNTkKMGMohMRpARLnNUizvA2iA6LpAwK5fGQDXkvQME9MmN4JpcR",
  "key16": "mgdXxw3WmZmokpVDgAoVSQvyDwjDLW2yrP5iq1nYxaFUoUe8YY4PH89QpULRVWzLjwWiqRP9hPLzjTyu28HQ95b",
  "key17": "3RkeCJj6NcUbmB8D6MjPdGv6LPHG4USwvup8DBpV4CMkoZtg8NPT7o7a6mTXMefZA3rr8ZVP2nSECYBALMQgnooq",
  "key18": "P5RKuw1ZkU9Esr8xWrrLUry2esrxbJ13poTsXUDhY4zbiALVvKyk14iT7GyohECitj27RLpC667V2DW1qaweFjX",
  "key19": "4SG6u6JZSx25bEmm2Ggf79P1xGpJSeQLLANJiVUvvJjCD7zWZsh5gVqmkYiR7qmbA9xNUjYV24Vk45EVGJ2pNAYe",
  "key20": "2Zbe4oocQwYzsbwZdwJSVQUtfefup2crJhrBTGpSmyGMYsRzCiekaBD6Q7EJMJ4jNnXfwhxxkbg6SGCp4ZynxdD1",
  "key21": "4gDqniMz3vfnAv5RmJNnkDaxWWoJKGEMFPZT3CvwYbjahHAiyEkju92zuWrXj5GFMXE9EfWHEDkWWYnpGVYErYKN",
  "key22": "4FrJpMUqUx2szagN8b1c8uW9iHX1oiixSU458McrNnjfHimGnDZirBaUKKVoqXZX2KhjheUKTGCRMGomwok8rYbG",
  "key23": "3ES4SGrJkvNW6Fie6bhTz8NEATadvG7kn3ApCDvH9AyDAfwURfcBPw5FSjkP4begh7HLtTGGj7RPVBVSqQyv2rQH",
  "key24": "3XMdkYwxtAMaVpZDK91jjP25GJnurVyauNqGd4RrgPp5D8yzYHtHj4HxPQSY1XVPEGvSfPcgBniqeEPdLA1Mfn8W",
  "key25": "5usGyNhuwq4CxQ7ukQqZqgE5joVK4fPQgBUB6WyD81L6D6FfMnxJupq1gEkBL9GCdEvi6f6Z8sW6WDYnn6WPHBKt",
  "key26": "5AMRBbNcTFLXH6aKj9krS4JJ49uasgB2uJPH3TH8prBrzJqFPD6MVTzrt3VLFd4XPx5rcw6LxEsE4zfxtP32GreN",
  "key27": "5oid7zCjQgn71vrNUSdsHT2BDFeMMRM2Rg6pAAAipUEG7P3mfjvqmgnjUow3hUMcvprqKNaFyNDSZsrJPgAFcVkt",
  "key28": "3zNdBpRwHyN33YLw9mDJfFKqiyJVTkJUcDAJwwbLAC4YqbKUvQAS9Seu3TwL8cHqAtfqFHbxfGJ8hBL3aLoTkE9C",
  "key29": "5PbchU8oe1KHMb8KpWY2rUahn1gCC1VdE5tm5TYxSrugNhtqdz8aKnbkc2tncHyJEivNhdCi824MoqCZ3KqBhz8D",
  "key30": "67p3dxfnQMBVzrbnbNByk8e7aC6dBvL5DNtnBp6zq8XuLf9x22myACAA12WsboPFF3Pn2sUpGudt5bdY4B8KFbXQ",
  "key31": "2bRPUWoMEd9duXWaCAHRed6urUsbCg4w6MoYMcuJsCbjSKyNZno5SxZkkCUzb5GcqA2VkRBisjzAiVNXDzVrQP8m",
  "key32": "2aAZyzGfJAhfdvpZG89rdfTqchTq5n2LPGW2BGBgSjZM3uoGCuMeiWReoYaLnR3Pw74qCH9f5xDiUe4YVRxxmDeC",
  "key33": "36L3aNqvYZF9sZQ4agoNo4hGuptbfVkbz5hbXHJwGg6nytab1FDutB5iwESzGzfkYs1CqRTw2UiyMa3HZxa8767F"
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
