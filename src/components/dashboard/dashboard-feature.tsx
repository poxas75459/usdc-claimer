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
    "2S4H6rVx5QbAG3kJa2FKaiAdsJfqbbkzZmoxo78jamzmawChQQvDd6A1WThkr35KAXZRU9jYBNT2ob2Hnp2175X7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MbtgjwRWxM65R3U7HjPTLXacQSyhR3bMUqgvrTtsoxRveMv72uiAPDpgxxmZrPyG8y6M7KSo9b2KTtCEfQZKo9Y",
  "key1": "4b2BwsK3hxpWmxxFYXVBa9uUCLpWogdBJFVCYKtvt1yfYqRhvD7EW1u2Dhiyw7M6LHdR6ehb4hz4cayJzW6h8czn",
  "key2": "3ziLL1epr3jCL5NzdFA4tk4nLg52EsycZ1WYYzNxmWS4SUWkTLWr6yDBZvfrgV9971muoCuPAtv9fsyVBR3Myhkb",
  "key3": "zfkd8Q2WdGHDaim3BLLaKn4rnGx3FKntcK4Kp8nysmvbqqWPEcnSjcs6zzxUGzbpFPMJLhfs83Z9SpDdKwcHeWv",
  "key4": "zvJGvgJy6LvJbwSdJsjB6pb6dvATcCr2gzRhN51rkrxKNr2TjKvzmWtqwekZiR8UFgBhesGccqWvRSyKLriby6n",
  "key5": "4SARtxCDFKvCzhq1i75fPeSWneKbsykTbUHZEsWkuUFcHNrAweDPBButBbiFXDNoDKzPf1KsB56V8L48hgbRKp7k",
  "key6": "4hQgsCocGKY9kxT2ubSe1fagSpWYxLTD6HrhMvD68Rv3231G7aFjHAoiwN6YTaZbnKMURc6DKvdgbDBsapwAS3Xg",
  "key7": "yBAZVFLqXKWSn3gibiSErWtRq1AbHpyCe8abig4mknZLU4zjriQ1PXWXvp7uqntf3FL43wrciVWefgdNtgfmew5",
  "key8": "TobKfTPT75DAvRNpFNA7NRTsU9X5FGv5tXE2Bi4RTDgn4CyFzCMMfe7qj3c9x6uLBgVfkVA83FBL5Qf5FWq1P57",
  "key9": "21MmQ6sNDtv46S78QbGNavPMNCHkzzZBVuborC1F2Asfb5UeqNDQu1NsiJgSCP7L4Z1Wji2dLf8CyLergWF5Kriv",
  "key10": "Jk2s2m8o7fSjm7wkdCyD93DhbVKMjpZe5Q1dMSDLw8Yfwymg649hAgzfNWQyCFteP1LDmkXy5ZzBTMgWiqSgK3D",
  "key11": "gs14S5x84Nc977GEDurJW2DRmKvVHZWRXiwKJKVsxgAqavPg6toFtR6VXV6yyTd3d2hMzgzmKDhU5kL7QGDL7Sw",
  "key12": "4h2gtvJqG57cYsoakMJPq6zCCd2KLwruv7rFpTSLYv6U5W9gpiD9uWrSc9NmY5UqBM173PfZepoZwHiGyBLtyrA3",
  "key13": "3ojBE8fTT8H6hJvErewJ598M8AenrTRoQZF7dUAzJBoB3wf8kHCEnM94ooVCjLHWzBz9o387JidWViBtFHrQBrk9",
  "key14": "29emSK4Wv5H564bqR1oHLK4Q7JRh4cUy3vn3HbJE9fEnXVMKCHH5ZfVywbPcBmSvrgsyDrDY4seFTEhSW8A4iWgt",
  "key15": "3kwXNTQNMrsYsBXdzFXziHoKMEaq35d8eYuTsPg1Kd2mqLG92MAvwWM8WmdKK1NBhe1kEmtaacnFmA5bFmEfjubb",
  "key16": "3Egi7hLDc6JpychS6G6QSg6ETKxd3yzoRwuWV7KuMmMSjKyVAqesJJzkHKBG3PSkYdAn4HykSAyabKe2Gb7RgVmn",
  "key17": "Afa3TwMmLtcNVLfiHhtGXH9pBHg81DL3a7tBWEUA7w1cioqmH84D3TNrn7TmdiPuNLQarjgKvYiSK1vC1NudnSj",
  "key18": "fAz374VK7FnTbxgd9QGQNN87XxnAmTWaCNyMbXniDtJbmRZWxBgkUSonkUyv1PvY5ustArHDNLivhJQa97UGtyc",
  "key19": "5fkNCw4HkSqYKTNMtKApneJu1F9jZNGJMpyjAeThKNRd1JYkfk4NXnsNQvWxbiZrJK7ygXoYMPx3mD4GA7xQ2sXN",
  "key20": "4d8wBJPqi6EUb5ES7Q2qceWhXVxsfF5Aq5Yz1puFutHeyX1vPP9tiEeoZVUzDgPpq1qY8Xk8NmhsWC1W5g9rWmc9",
  "key21": "4k5XVryXrYiNxGDJBXrD7NhjpSvPuaoZbaDgnXM4A61zcWiCP2offf8q8nSVsCYeYi6Fv4KebG2SEjyostKTg9jT",
  "key22": "5ZNetT1BfPTDQDJ5kVikpC4hg6rf5f8SohwcCBm5wbQ2mSQ2QfZuL4BaEMbYgNsMXjQ68mXzzMxkEo4BSnqrH3hM",
  "key23": "3wei5mAgqu4Crtnp5pEgescJVfo1E55tmBfjgzfDMCXBM6Q4shvnsGsiAEHkJQGq27eMF3iZhrkRYVnqw5TKbYDW",
  "key24": "4f41RyQhTtBnv6jy4NQkCPqt9tLz4reackgyKeRYZKU9aCTwjErB5Vzg7QbJM3c924KBzvtmb1bhrXtnoYcjxcnv",
  "key25": "3adStHRV5mA4A2n3cUdQu3T58DsGnM9GvvdbsYUoZyoQsjqqjrk4YcSJqCooWZKuipnvQgMReCBWW8Z9mxqgEoNG",
  "key26": "2217twb3f2m7zxZqamzXAKQX21PTnpKqhMzVLKosTuusDuMS54GDMzSoTdnSNeGq9wuRy7nPvwd5kW2cFxBFCy3u",
  "key27": "5B54um8iT7Ke9onZeeeKbBbmfCCER9zHyhS16uVuoHk6zRrCKa6onAt6YD6Xuc8ozcX2p4MzBh8u9hzTJiRz1hr5",
  "key28": "2BKq8UK4TSTsmeKxzq4XSGvDVYn7LU9G32nsTQzzD8cHFzwvki72LqkfGriPi5HBMqEM8uysCMfhNHqAJFi4pqf9",
  "key29": "3ZxngHG7Le4EnZEyYPCcGRz1muArEQBM21ZHtbUmaV39Cs4vTCof4M4G7p6prbm5iqYStm8NXspCcZrKCSbqsf7C",
  "key30": "29569z4dKVVgZ2vLSV8MMcLcuskmcNwmEKs8jQxfhUMTveW7KGZ4XSv7Q3BYwZMDCW9hnyEo94nZAYPRCV5LgRXN",
  "key31": "2hhNwJFMsksNzBDN1W8swhoA3dsFn4EenBhhLoSPuWmBEhw49xmGRhqrau5drRVxW46a5594hn3tc29bLHxYBH6H",
  "key32": "4bmgxgz4Tanu3k5pcEkNXdCbhXMd3sNxqT5rd3hwWxUFnuxBYajmmoHWvsY3P8eHgGzUdBVRVjXjFzFZt8Gnwt5a",
  "key33": "4ubWKMKbdrmtoUSErRu3HfcPsat5wx1LjpLDFZqMuo6A7s2MFSPNCUxob5x31k76Ny29JrN4oUs7bKTV7MoZMJJj",
  "key34": "4Yv5wYkVuq47tW9bNLAX5yBuRywb6CmN2LdnMpHKjkeoZSNHig7CN7R7NH7SUAZ2CSxGTJH3U5T4EwfqgqdCHKLU",
  "key35": "5SDVoV5sUuG2BAdUSQyK65JTvfsJ6XphF2dm1QmkCoRXPzQDfdm6tqJPY4qziUpF77SGAHSxdf1w1WZNEjWgPfQS",
  "key36": "5RLjYaJJGL7MtEmFeYnCJQtHd3wvU2oVbFeHwM7SaQy8GCKnMJYmsJhkBCvXWLFJkUXphJUCBCr3zwstz2fiSEQA",
  "key37": "5Ym3Es7F5penctkwkSKUrGZiDkzFh5Aybu9EG1RhSeb6oSzfS7xDU6ngyymUgVKGYYMZrF4AqTn2SAgCUffpJpvb",
  "key38": "tHZK8rfzjBp4Xo5FxQA3djZAbUGQGYmZakpZCAqD7VovT8BsX1eVVHKvnucg4oYy37ihq7KojgHPE6JnWefwHVD",
  "key39": "fGB7gh69Ctc3UbEoHaaxd2Avv1c73HJJmdB9yioeeYxfcTS2ufrTnhwWhXT9KCz2CDfcMcyYqnfeHcYUABji3X7",
  "key40": "5mHZryFJk6EJnyn83aArA9gxd3KZwfGg4RnA9LfmzJaV4ZrYQBn6wq14V5MjEaYYnJZSCJfVjMBmzVQU5sh23qpX",
  "key41": "2APa4PHq4oA3UvF5RpB96u6NFJnYrABLx2BdRNXtrFHi8JzugesczyzvoaJdLFsUQEAvxZ15adKmrSiWfWcXQC4",
  "key42": "51s1BJJStDDnCNeY2CaiP2LuLdfvQ2JGiMf4EU5G6HtbBLhu7h4HdRSuoD2gEVkjDdiEU7Zovx2miRrYw261FgHM"
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
