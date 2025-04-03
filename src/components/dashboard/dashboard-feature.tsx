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
    "2LLmTpsyi93u5MGHWuS2iZC8fmS9RSe7ZwKMRyK9yLgF8t3v8324CYX9PTCNefo7991zTp14qXycPZK1jS1LDunX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RCKaeZZTEM4ngAGx25DQanNqA8dNwcYbtm8JnRvJutCGZeRN5xPfpYKcZEqUHqbMnw8kFf8617zqPeUgSU441T4",
  "key1": "2Xz1z3N8xU5kVWhzdhF22rSrhaaib7yxKVQffeoSaNEn4Hi1qWc53wAZGgourHXE2H7erhCSMXNj9by7RgTTihWG",
  "key2": "5yLVEXd6iBRYaEJkb9y9AR3UK5a37Fvz3eLJsC45HrBeAFdLwcN4RdYo6XRcgYLhrqvS6R48sdgqRsJkzn11hr5T",
  "key3": "4wtkNu2u6JVfhyoKJf6s4tjpSNSESTEtQmtrfmiU5GLPUmuGzQp2sD6rQkrNFedkKuvBkQPCyTBgRakUAt2pjT8s",
  "key4": "3jWPJoUaC8bxkP8CGpspeYLMGi9Nnne3vuVaxt7kAMwQNyV5P9zMZtuDbVT5as4XSstJqV4BfdEFmAzZHadrzDE2",
  "key5": "2TUsKgAz3iQnGnCwdsKppgRZdkXQrYdudduzN5xTaUYSz4fSYqhiAgbzsMYAFkiNTFL8m5Bd9r13WSpfz11SeJhQ",
  "key6": "3TvACMPkitGq1zwwm55qybUZgngwpv4Do6kJ8EM5SzzU21tiic6rBAZYFdChLPyk2qWUgN4enAc8uk16z1vTtMt1",
  "key7": "2yUuHVg8qZ8S3r8pbvY9ggdidUaApESTUh5LiCsovMoPrjC4QVRMGT9GmcxHBcdCg4XxiKU5bWF5ajdJrtGBj9Gc",
  "key8": "48sGLx3NvTWZxonewJEQq8LBL1z42AEBQpaJw1jFgHxeJWwzV26Lab91vuRHk2cApNQ5MV6VBVJiEj1exQu2SwZB",
  "key9": "229cFxqU2KuU4tX4dFLdpVtpJG2vzAjNqJCZhZ4Lqs8Lqs4WQ5Rm6ShFQUSLHE2pe7g5uGwsqndPEtRYbA8meL5R",
  "key10": "VsbUm9kvqtGyuoqZtwuup6Mv7r4wQd9rN7CuacYUBx8w3jjGF2Va9uk9t8xaRSoYPB1VYstzt9KXCe8eKkmXqGJ",
  "key11": "2VMNyoXyfcaiQPHo8XYb5PkYUCYbJ3wCUs1f5ij4KotU8CdbKDhRMih4Tj6Kbz2fpgsWJFLHknqt33nuxjTi35p5",
  "key12": "mWtcYXh4WA4yjfg5yC44vVsYfbAs4qJ9e1pzSvM4ekzKrBgfVLbbTfpQM94EenWyEpW198aHFENaqyj2E24jkjA",
  "key13": "43S5f1x2npzCXjicb36bKi2cugd7vKbrnvcQ7McKuUAJ9GAXR3PvMzN3MgJCNQH4vnFCY5a6BZho837MEFiXvArp",
  "key14": "4g3aUSdKdfvDAbhQM95PvFiLxSiQaCD5MDoyqn1REFUdNiLYsYgk9dSnM9UqAxcyKaKkHsMNnvNfiT4n3oduiepv",
  "key15": "MVz29iuxK4mdoeLRKJXicBbrDd64LXk9xVa9DMpTH9u8ebiqfJcUFZSQr5F7oHYZUJPcgm7DoJEK6pf5mn3fxDe",
  "key16": "4R85AyxRTn3ENWdyZfVS2A6KLh9ev6Eo1aKBLr1e4Efs3iXPxTUsiXLWHk5gez9y2SSkX3MYGaYh1DJw2R4yCgqZ",
  "key17": "53MV7SkP7kC734gvVzMLkQGRqhXWhyxkoAXj6e9LYA3WLD8PVynaXyzZbyGjvAhtPqAT2wjGLVWW6VTfKm48Qz61",
  "key18": "6vYAbMyjaLRdnfcTXuAUj7DWSQydB1iZGhiKb1vbEiUtDEprQNFfTn9U4YRjovJLbzi5fizx6gmuAzB7s44W1HR",
  "key19": "4gpTcuU3FGmZWCHmfroLqB7RrMRbGs6gEUptiuTHDDHgX58UYHNrdg862kMweShVBcXBttc6aSUD1NBM7EmZJ65n",
  "key20": "wqDoTTZjkfdaLUrXjZb7TRxbVy9ZbMH1oY663pK8r7daNehEbKQteVZTA8jxFoNSdJGYr6UadhHxpgPsQhLLQZe",
  "key21": "3yaUfdDTgyF7b9kWDw2gFstWb4xKP6NxfQQ1gYyj6oMrrqNMxQomPAdWzWrmb1A9csibTnnEgaRUzvz5hdtmK21u",
  "key22": "UHvmxFqpRAYZKeLMnDasUTg7Y4e5AXLmaGEr9ausSPLQGACsD5HX7tbdw3jmvWbY7LDfGaDUKzgDty9UJuSYdwE",
  "key23": "mqBkvwhFbg6YGwZq8RE3XCp3RE2tu5Xnw9o1iyjj66QbK6fnKUF6TJq66T3QWLXsCUxRj8RvnXLi9gjSLro6Jsa",
  "key24": "5A7XWp7anjUfZYyLRAiRmeB8i2pW21LSk36DwtJWoNvKufDyjinDzQhWgvAvdDvf5rAJ379juYMaNRu8QAiRFeQa",
  "key25": "xjRPFCYBQqVZEUbRPauxUzQLjTmFsai9wNRTaFxke1R3nSFjXqBUK7Ru4PaYUM3AD6xCzUKk9k1bG7dmyFPvS71",
  "key26": "5EApCug4wNvdtsgAWrqKwit53fGQeVXvfmz4ivmokAXLboTVWhE1AXEo4V9Ra5VGph1WCJjEHLwVSC51uq3Bzib2",
  "key27": "3Cz2vZ14DwCRrqz5PwtLPs2uf3VJJaN5vUM9h8ZPFDoApGSBuzWay6jY1Afe8ZvFbum6mFZ2jxKfecDNA12GnN3G",
  "key28": "kpFf19rq1TCsZSZKWHVoWxjynNjh5ve9BU1FVKbyXRLZu9BLyejdGLNyBSSPPaaGLsXtxyFa48Ccr5TuaxCCPQ7",
  "key29": "3VRiC8Vc5ZPW5h2SNen9ii1csqyMGsfWQe2PvVsjwRjnz4K6CpmK1edfv89z99Dm3gSbbcrpjo2pMQJg3gc3zrex",
  "key30": "5JaTHwsjmcVAyMoYBHsVK66KbiahRvxEEnk5hENoMKutwZgzBx4DVCwawxR6u4szRW95Je8BBX8ANjGwe5eCr9b2",
  "key31": "2g95rLtyeS82Gfnne3MzxYoDryztigZqGJ8B1kgp2zK4axr5MAyuARZESnnsHw3k3Fjy6CdKgWxuNwC7xSXirfyc",
  "key32": "2iNefW1wmYHxmjVLmr5fMi43cjmYT13CJrDYzyZkMoLwmwFJg8K7i8ASNXGvdCXZDf2P7mqCQhTqhDqLVk6wGWQq"
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
