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
    "62gGAQdhFbLyXBmKbrsCswo9iiaKwHFwsEnkHRsCtMKZqFBEb2CxorSmbWpBcCos6zajohhQANKkAR9ZLo4Y847b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a2AJBCQvnNvWeVAEL1D1BPmK8NC5sH74fxK4eUgkuutvueQet4ShqVGsSCMLdNiZXJMoV6n4cHqhsgknRBV6qyP",
  "key1": "2zjJz2jsYrbRzCqyFMoMoVxbBkMW4BfwgDkvPryAr3UH2zPBiXub1rroAVL7ptLX4aoByWDkaoVpoUwzxQAhssfY",
  "key2": "QrxTLrThmDt1sWA5iYN6UzsdFzx6QtW6dwSEgXGBJfwZKN2dASK3DAzPPxnHXhqrTr3jyETAnWpJMLtTYHyeSA5",
  "key3": "5tKkKtbrKtp9chKidcWSw8QX9r3kA4hY7a3EroChPa2Pex8N5My8NR9D1CdUBKRo2NT9e3Uw7E5bxWQe3aBGZwR7",
  "key4": "25sx7ZhYgPEymDEbAWWYBiLzZaf3yczKjrPCcWznLKzNnTi5tS1Z9YJ6CQQJCuS8gPnC5M1faVtNv2SqQeZKwNGh",
  "key5": "3uc95M5njvZf1uTSuFShznM4F9FYsjK3Ywfwr11GXBZ1XzMCDhRpvekGmZkP75DFGX9W5ADK9cYgSdPsjSafeKLi",
  "key6": "4d8Ht4CwZtT3nGUtHVFHhLzKrLuZv52SWAm2nphfyrvM7FkBwbnQynjwDaGaGBsVnxxykjfxHdgrCUAwY6SSrfvG",
  "key7": "5GpW5HNaqNp5QT3jF9EUzJpWeg8S6tikY96podbgf8RocYNKXPrQw9StMjC8uEHK3upsn4ZXXQvNA5sYG4SozPjz",
  "key8": "5ZoFRf5Wr8bGyWiiBQZjAduwP3iWAwKBuQLBtDunoPwTDSfALHTtEYtLS88qyV7ii8WvmfZ5GUaeR6pCs74dUnDu",
  "key9": "4PnDcCixoDr7Tg9feSdRDf5xPxDoysNDhptJ8S75C4WQkyhDJoDWMr9KAZrdjBgRV2Khh6yKLAjfcrkQoty31ga3",
  "key10": "F3bXvWGdtHQwZgfGYVgw56sb9P8j1sSdzkmUVegiVe9JhrkHVtjBVNNXiptcxzjP8p5tjmmwvAC6L3mhJPrytDw",
  "key11": "iboA6FYoubGZJaVG1ZxDD91qmciDQBDREQTwb3e6hbQTRA2LaKdcasT8Lu1jMc4jZRKmHZT6oeXQGKo8D1D1s9P",
  "key12": "5RKhPruTFat7T2zXkjQc1e5EpoqvevMtz3ibvXBQ7SuKNpN8Yt3i4WjyaH4SYPyRCF6mt18ZZGC6o5xaMvCcVZoF",
  "key13": "5Kqx8gaZzJKCrDCByYs9YSXqy1JpBNi94ePwZxJnjCmXWnufY2AhANEujL3Y3hJfxNQWWYMgLnhp6qJ4Y9FiT2bA",
  "key14": "5jrV5PMZDJ5UcNfvcJJ4Qzorf3KmoBTXwqxrqn8ZQ3g5LdLkqmgrqLtgHLJ6SqckyBuuPnW4bDAh1Axz2RhM8eKB",
  "key15": "3vvAbBbzQbSH7EfUnce9fbveU7JCLn4RkSKJJd8diZqUweTu36xcnHeP2Tnse65dRWFhmW1wxdD1Pdabn7ZdGHqU",
  "key16": "3yWbqA4DxjU7U5xfAp8Y96pKC2TuGPS6NCH41GagcZfX8wPY2Y1HYxbLok7Rt3QKaWWkR7T32pFZkguU3HG6i2cd",
  "key17": "5qCFrcocVGYbSEdX4Du4LfA2eEACTKkCmDcS5X98vs6VQxHd8UP3oHfbcpQcVbCgY4HJ96jEgyLj8n757ntrapoL",
  "key18": "2zZNSFMCmNVUM9VHmFcGy9HBZCWukagaom7EzYFRKuae5dXkZ8qRj9zLA888sYRvtvW3xgaxqjWJQPvQ5DqPhWQY",
  "key19": "26h9KbRn6L5yWT9gkyszco2hpndmRGJuovHMF7GSqxQUSg4GH8eVV71njNMMzmdHMy7K1sxRgyBwLNnKJqvQ7xM4",
  "key20": "4ooQLVk5P1NBcBKHa7PQML6Yn3RD9Mzsv1vNgYiEpym1YRiraUkWKNPCCkN94ZjKwTFKkS7pC9Xy9ferngYoY3Qc",
  "key21": "2dsh5ktZGPWk5nWsL4U3tJehegxXqX8EPbnPz6fBcHi1MT7cxmkiyrsYmwBkZ96d2j96n2Xmf3fc1gckiBL5VV1Y",
  "key22": "3TCWh4MpMDPAL3UF9BqsdLFcyrE6AybRpkG46a2WTbmkGAiTKHWBaueX3JizzhxMzTZrcS7uuJbKspYfBioPEeCo",
  "key23": "25qnm6aWN9oZKraMXALbLURofVrYU77zFV65Qoss3sVDRT2LdbEvexv6zTjLe3W4jLy1uNTXiF1woTz18PGrTvxB",
  "key24": "4VjM8U6C45FBAwDcA6XyKrXxCKvebwWcw7A2dmjCoFcTw72ckhKRCLNYpjSBaWPfxQEX96TemYU2sZHbzRZjYs2z",
  "key25": "2F3irRj4BkcoWXBp6fL8SotCxFbcTH3RbstRaQ97Kg9JipLtGZi5sNWgM5qLYWKDEmweCnNUn35PpvbdNgTsAnb8",
  "key26": "mYXsfg46i6bXJ9gNq1WGiNJvi9mzCwqc9rhc9A597MH9tRFEdiaqJYUJA3Vvx1pB8qsSTdD1kKG251J5WBpoh8M",
  "key27": "5WsPF6NiSTPPDRuQ8WJtc8Mi3G9icLtms8LKjcqDP25dZ4JSPANtwEycQ9jCjFMxaT94r9MkeCniBJ8Lz1NdDtdn",
  "key28": "HChW65BC43eDiVV1avuKGNBqfNGtErH7jScFGLWhk3aCW17n8rMHqocm8ZmyEuk8Hz5ZSRaLJigAMMoWWDFSmKn",
  "key29": "34531my1ssyR7Y96jWgAwAWUJFARLY3WS43xWkDScBLUpcdEG1c4VipnnDiHDwXft99MtG2bLuvwHec89UNyKJy9",
  "key30": "8gcLAaiKv7PJ7VR1g4gU5b6PmBdmAnA9aGswHKjthbiAHLuXZf39QjVyeQf4L62nvT21jhtYPusfS6AYjS2vjEV",
  "key31": "2FgwQsog1DYnxHWgWZA3bNaNnAaNfrPLRS2FsMLDKVcAGzKZvveRU8YaDADLc26GbkgBrmov4reVMGcodkAYqcs",
  "key32": "DGHwY4Zv6A2bzq4tJQwFoquYSBUMMr1h4i1yJXfWjxADQsBiV9V2sLYMmqwgSBDVTUcXqa94kVuDxmWU7jExNpS",
  "key33": "5917TAitixtj8xtre5RqWZcAgrueEcddHC3JqfAZwEsJxyam277aCzmUUMZ7XuqHwDFpGaiaiBy8gcDSFvCcjqTP",
  "key34": "4uNnHmvADKZBeiRDcATCiCN1QXpGTnfQZJizhC4ZXwj1mYfrWRF4EKNuWk4MQw2Qac1zxDycsyVc8psr7hA56KVs",
  "key35": "5GH6ZU5F7LnRMPQGkSyxpUNRLT94exJ2N2qBaatXpJixdKS2hPfm21LADMSpqzDh2qzDbYVnmjEtuh1GDwuE8eAU",
  "key36": "55DZaMG96B5thHP1HyFgm9PjdbXpVWpqAQe6CTdXmCT5bubtAossBC8FZFVePPSfFz3Eq8ohnnHorMJ8amMCCGYF",
  "key37": "2HMQB9rjpTKNi7TTjYcBpWJ8hJGbvXJjrSVSqjUyeFv63UYg51t7uYo2STRRidGyAH3hLQQH35U8JXuR6QtbscSD",
  "key38": "3k24xHYaJrhP4J6PgiiCscRf93KyogkzxQRiHtREivtu9F8cBnLSPkR4y7eARya9HmMs1Acjg4t5A5wKFaKAheXQ",
  "key39": "2DPVa7NtPkDY7VHm9qmKx2TxvHhCNkGQdigbD2Cqk3TYdZoCgo9bQ9TwMrDcnfmMrDonSLm1hGi7p6bQXuF27TbR",
  "key40": "49s4n51TGjCyDzg2gMJKtNE81JSbhVFrNvDRHn8dNu2Q958gmYcJRSWizKrZVYeY9ppXtjtHs1iW24RvWvFBDrDD",
  "key41": "5U3HDS1xS8EWU7rJCvUq5uKeq7EtzY8PQsyM9RkTHptSdDwEK6KBbmD6auagEBUodDD7mXyfoBTvpivJUWey8hXU",
  "key42": "2ZGSgXqerTDnZ963euqFWmrH9uzQnnmhuA7pZndP8CdTLVVdF2HuFEee3mU5aRVUG2VWi4e4F4N3j6VbvcA2z1St",
  "key43": "3U29okdWXZp88ToSh42dDjWMHvXTWjJ23iKmKhgQKu5KHoTq6omzf2UpRgjdzXkw2juejdN2mZNgTeBGhAabYj3d",
  "key44": "5yaGxH3Sd3MgXuCKknRynW6S9j7uoaheNHQrasPjWyvoBtL4SuniQcBvhpWcMvmcNw6VZCjG3mtxFXkFch9F7xM5"
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
