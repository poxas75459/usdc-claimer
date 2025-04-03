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
    "4SKfCG71xK3ania9ZFj9ouhLMzEDRq65xbvpg8ezLzSxmv87afABHx3XWHi2qsW6kkmSxfAAviTMWbHUofVwJb1c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CzCJvox8jxarPd4BFMkvcNrtPpvT53eUFLWSHRbbRyPNeSnaQTeHt4ZbxKavUaKYBKKKewa7UtGERfyD9HiHHcB",
  "key1": "4HLtm6g4YNwNGaVm1qqyV478Lbi4NyUWUseiMvHyEZ6NRpj6A23GRVL17t3EZqm4gcvAuDfprxn2b2XCFRfHPXFy",
  "key2": "4amfmv5eAwEucLmkGaHrp8HBCk44NGQehxg3VoXxh65MDzJwkaXUH9HpMMMkX3FYg8p9DzZWdEV1B8KTiqduwcHm",
  "key3": "3ZdZdzwE4fuG141CqJCXqJp7bACa7ix7Mpvi13fQPXGmtfa9jartGJ7at2tBbFjwXzJN5t9teb7Yc6nUXvLwTf5E",
  "key4": "5EPQuJTbhvxWyGDU6BeMMwpR9A5PpdZX2uh6v7sHDcmnGRViA1PUbpq3y4L9y2SJdCq9w2bzDoo9xcsYqWsxK3N6",
  "key5": "3L7AigV9j6vxDpXNuz2JeSoVwnUkwcMxvgcprTx3WoHSm43YRWM3Nwfwf8mjYR8XdPDa8QDPM8tGpuathAvL46Hn",
  "key6": "2CACiEcQrn8KbmmL135Pc9L9Z2a9favhyJZF3VdTvGJxx2htoGNmFwb8kh4FesNsaPMnFEEg9QfHTio7Kjtw76Le",
  "key7": "gQNLJj4wCw5vhM3ucypqj3PAwiV1FibVZufgZaqRaKodEK34dZXpSasqbyGwGcREtzxKVi8SQFP2Ry3fuLjNJpN",
  "key8": "4TYduvep11gSoWCnomajsHbtEYxDqH7f2UMbFhoBqXo84zhaFTrhVKkdcTRgyzWhAdZiTStEAjaddNvqw2Y8EFPa",
  "key9": "2CLsW5dvsfFEf1qsEuRWJJAJ5G4tPyetJgXnm6tifFKEzzg52NSkUZcPuJZcCasnA51Y5nabqUowULyHwv9N3nGu",
  "key10": "5Kju66Niak4gEc6riHRJFYXS3y6YoKNoTt1sB3R46NB62ZpB5pFGtNE1pKmFhiooaiAFqP6uixSEPM6XYShtDchL",
  "key11": "4tU1JjjqVobMEvkYCxxfJBC7ZgybMzbjd9VVkojLB3157qJLz6arVWCkkG9MYie1R6Lca1Z1819BA4Nz1vtp2E1z",
  "key12": "5JyYATR8M8jhk6ZBHMVFJ2goi4cZW4aiFoxqQhgeKEhuTssAUgVpekSLRt5LcfjGbPDZDikfzjPDN2BoPgNHiVUU",
  "key13": "4MnaSq1Q3U84R3giScyEZKdnQH26BLMRomwU4Sx2jdZiCy6aYMav6YLm1e5XnWDktsAVntkjcLxMZ3zQerwUcGBJ",
  "key14": "5Vzpwt8PFQbiNgiK99H87NKbgvhXiaZg7SsRfd35ekhCJ6KtNUjuhaouZGDHN8SacurRvUeBSbNoNzV2Abg8icG1",
  "key15": "38TdnaEbMwcmwp3xEXCmpY8P4LiZhPZqesRvsEXEsLSCJF9j7nQXSnC35f28uHFuSdPeF4o5PJgewH2YCcdX1bbY",
  "key16": "28xZhRKFZYkBQtJxr4jiW5gZgbnAXzJ3CHvmxZ6wSCoSZTWbzV8JgdwGzTkS8PcCu3ByJ2PQri3iEzv2SABn4vHe",
  "key17": "4E2p7mK86Ytft8P3srJQFsveV8TTGrqrqEQRTcYxnsJTT2ELkTp9w1V1Uo5XFLmHCnkPUfwjph66ZAiYLeNqxgHd",
  "key18": "HbpQszr2HDkXtMLTGMrocqcwH1SUfuETJmiq59ioXozPbKJskgd1vpziA27rd2u6o6GGMjWTkmF7pJ4GvRWdbAu",
  "key19": "3tZjAd6jsu9VUZXUY2dKt2arGYjxp3UiYCNXQQvtvZtF9LzzRTDx94i68LUZ1feVcv482Jkur8siyvhg6gwp3WWW",
  "key20": "dsjqMXBUaG4rryaZAQG36VVB93dzHFGzD3PYo9YTLfEzPTfMWca271Ya9G6dFMhi3chRSe7KTQiQFYkQo6fCNDU",
  "key21": "5YZstwGkmQH1Hvz2yZkmGKAc2cBb2CUw6fAERKmhBosrcCAvJLXWMXmtn9iKgtifzMWULUWSBM9G1xQY2Jkqq5KZ",
  "key22": "2QHmxxUp6raBN6mD8oFxDcUpM3psYPHPkKjwgExQAmkx6aoXdUC8nSiFYtcnbr29DbYDVNczXmWXyvX4MRoevkCF",
  "key23": "5HDExkxwMgFb5sntbSqqYrYz219Tmp69AXZKtoABZDgMJYccEiTnoztDdbRTfHvG5Jvfm6cdQ1p4BdhaFZVDTWuG",
  "key24": "41r5u9dsmdf8r7VEofWM2S2qqQawevAk8tazVvGBxhuzZDfyrBm4hHcEttS5i1zoz6LnGtAEuUrUuxyQuh63SCpz",
  "key25": "2zHxQgUx8e4kqAruzCAfcyRUztZmN4qSnwrQjX9MvqjBQdks11udzfZXdC38RRJYaeWofp8TuDQLU63V7r1YNvQr",
  "key26": "62CtZBp5jmT8gvQRi2bDPishrTS42nQaeGYDZfgwK7RJznKrrzEkfLUmYtEom66ZrCAWDcPrAag8icATd9DxnuM3",
  "key27": "5GnAejiWJZLFmkFmHCedVe3xbgbbomJaBowQQbeD7f6WZ14GNNKXMRjWzi2DjSTKQRLfiw4xsrPRQVPQ97QSpzgm",
  "key28": "WSvDSc8VvDd4SddkcM4Hvn2a1Xq63YXUgSjcTuPHsabHZtijxgq2JpRek6zWiwcM9AYyaq4PVDru7q5KiuHsSck",
  "key29": "5A9VF46nnYMVhLkPeDWK4fC8ZRV2HWZzWr24xox2A9LRvYzJrbMRwqDmR8JKxeynkFdGiuNnfg7Ltf5WAeZEKvaW",
  "key30": "2CcKtgTrre8gWrrqVh5ZZy8yn6ABfPBhTXUuxbxLWyRbNLe52nNDBwUQDytgcEztLJskVpSXqVr32qz4uYDZc1R8",
  "key31": "5FEQbrwv8eLxYsUBc3ge8JBgCbRQKhReBGyvVaeZfkF6zxhiLHcgEDV4RAP7byLxiT6xnMaq4hfFFrGhzRv5MCRe",
  "key32": "3xQzj7a7bymiqNL2YEB3VfsLysZTiM9RKHYfptxnvy1mxD8ZCWXDqfzySgNWJhLJY8cwazA2kEu1vmcYcYUEu1qn",
  "key33": "5kaz3cwB6FAcLvUQzniyBDsUHxqksyjsVN7mviHof9tGG2UBhWKBKd29yQ4LyFiHZSK8KjZ4B54841LWGkNyTbjE",
  "key34": "59DAzKYy9dv6czuCNrMYn4XBsYRDVqqoLDZekAYFsT6WfT6s7A6mc5XTLLv6z4BijgxkKqpz3r39UDuizgiz63oU",
  "key35": "1kJN4mWAxa4WbgthxXnMGX8F1udeGWnbpBKgRtYXL498N5VziYvxeqo2AW6FGKQsER8HghncTHbCFsxm5gFZdSE",
  "key36": "2S7mNc65dd8mvZHvd6QyupgeHNNdVfWkwhQmiGziC8RejF6BPmfAhDrcapKSAHqVWxcke2FqDXA8xyJ1wu6x1oV",
  "key37": "24qTohMya5RB5xaokTscaqBpUzRewXSzH8BYESteid1Nn7V2f4bvmUiUmgDxJmpxEWR21EarFxa2Mxs8uiHVvy3v",
  "key38": "3a4LHW5DdEHkXjeXYbCz6h4WBsVtQA4NsFcRGdKYXwpzFKj8WqbjM5QEio4nh9RPV3Qb271Lrh8GL4FyQvKan5BD",
  "key39": "5MdXW4oYagCwnaQodwCDNYAw5aYtCgbGkixi6CgZtL3zMJ8MR2aQnoXTudYfhJ5FzmDmP5Kj56nrVa5zpeXYBWMX",
  "key40": "3pfTkG8unEY5WcZMxipuShUZn4uX6SuAzehgJQEPJAKUwtRZ2qepb37neWv7JDVLiuDGPHfkQ5HcHiG3XT9y5csq",
  "key41": "2LcW3xd9SdZWX1tt72QFyMVAC9oRoLdZsYocbVcNfsA6LybLEPDVvavuDE6Z5hdFr9bksahZ8mnRuWQkfSfTdzJo",
  "key42": "4CB3of8JzeV4gCSQ3XdM7j86kK6rXek8yxhDGxV6eLiu66scCcds3t1nHM5mdMHVS3jFZAvjeswzFQgdfKekMMqt"
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
