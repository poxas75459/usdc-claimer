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
    "LhyjsGBrfe2EdvxZnhaeH5GVyATXbJ8QC1JQNjrWUCFN6o7og2ndW74JEM1Q7KGZyJpKWbYJ5ZhJy3syKskaxPo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N9JR1N7hpHkgQkKCsZvT51zqGaJuqx6KavanTwRtNfnkJcyc6ScJm3HgKYYjykUcqgoVYToPijzMu6ubBxeyFAF",
  "key1": "5KDgkzoCAXFq8SzTSYEpFQWTRxQSnbt8xdZ7YTp1bXKboA8DsYS5TSKn8FGpAGVQG7VNZez2uNRtsi2gd4xeR5NC",
  "key2": "59yVuczn6zSD79TfN5V3nNK4BuiFeW7hRjRWtUm1rmrc4uYvGpRRXUyp8wofCYB53saf7dW42YGCfYujaQKU2imC",
  "key3": "3ahW1zLGjjKCYb1Y1E6X3bpAHPCxWdfkvFjedU32bH6wMVm56q5GgpwzfQx5P4jp97SuePZvnZd3Ue24a89F6yo1",
  "key4": "5pH5E4KWEyNEzKxRLDZxjPrfGJzzBm3qya14eQ7JdiMPoj5Y6vo4qEgyfvTupf3rm3T6NtorKPv9yf7MB3vtyWjc",
  "key5": "61SyDeZFFLZd5jHS7LXFnQYAu4mMEumo2H3DcYLmwhU7zK4BUQp8rqC8CBqv8Gxq5Ka5FaeABZQ3kVVbK2BaAjQR",
  "key6": "5sbaCBX6fCNnqSXjVTwEMFsDmpQNfFzNQWgAnMbRMZm6QUzn3rGmrN3YduqkuTxtYoYcmYVi2fpdQzfxhHhpu2MJ",
  "key7": "2nDWqnVSwZjNBoXivHfzYCnskYKv13771gRzY41jr2aXYWr9e9BFxCpaYjFHGW6wAEyvCb1NQjrpT91XNirtitWQ",
  "key8": "2qVSUpncMwEKwrLsAu1rbbdAAzvoYM86TbhTL94fNj6UAccFSZ58pzkT8cEHmoBn2Qf1YeEN5dYXFdfAyNyzhqrR",
  "key9": "4miwtg7pKQkVx2oSi3BsQTsfJTVVHwGkzCWuHQ1DyV2615HZW4EcZNKvTph6zjd7X2EFXWiX77oF7EwpdHgCowDj",
  "key10": "2okUNszSYA46xXG5wicudh9mdEBzKErvFz64UPfc8ZSVnB8KPdKVbVAxoW1o9asM2jtzPzX6iVA6qiptYsxXpvY",
  "key11": "2SEAeRjb2BdWiCAM6sFrtAy1PfPDVXALGg6pbKzE8j8QLn7nH1vehJDxcL8ttUX31b1W65h6XgS1BUx8z3WTL76q",
  "key12": "2SCEzhtFdfZE6CjvtqUMhNySk9eYYSWfoZmizLD5kU7ZSJRb1V8cgzEVakiieer5Cb4DrXLYwjuvGaAAiyD23mX2",
  "key13": "3tKiaDCBabVZsLs51hjioFCTf7Bhm2MiaMKuM7cKsCGfBTwrSHYWsVha6pEqDcSmKPZGLX8CNBunaVuAwijpuaXp",
  "key14": "26ZbfJVSdHb7wWbG1m4YeDuSjmU2fGWpbywZRQk9NPwRNVniTFwtFFsnDA2YZYGKM2AnTJcPwR1jACsBjdUVAmhm",
  "key15": "RzTVdbwAeVCbDpv2GepuXWjmZKAJpCsD28PfqNFgoBkHmAYLAFeQJTiT4haQZnGyit7GD5Qmr7a1mMcm8pZyH9e",
  "key16": "4vwxCWKpYjhdoxhgrfdGLDrdrHvnJauVL7yM8ZQfqwqzCNnZk4DLovMA9BKodGMAEgdz1KQ2TZ2Zxx26rjfmJjLQ",
  "key17": "Kxyuf7AhF1RYB2sacxBB8cv8qXNnJT5Pc1DE8qvskW6WBCMiJbKMQMmyNeYwrFpgygeW5w5Y4kJ9AVSdSu4rzLb",
  "key18": "2yn3TBrr2RSnoZAESoa6T6LiFMvfFQ7r9x1Q7jkRT13jzPkaYagVzHWMokzt53GM939nSXFsb7frzn82vEuoeXvi",
  "key19": "2Hth2wykdvG1borLWj5NCR8NJLbgjXdgeicBLjLSSRikByNz4nfXzzvoTQzk6aRNmiL8cK4MpA2VA2EZ2YQiSVn8",
  "key20": "fwA27gUvLQA2MwCQ1cdf4GmgzXdEzMhuAiyCfNebQvAkgrjAFYPqYPk5MqWU4zwijUFbTTaEWcytNpW1crnYbUt",
  "key21": "3zuf7Q3S6Y4oVHe3uQp6p2KZN1eKdauzuyHn23MocWRq1MnPHvg9Ty1tfZQSsgwFvZBGozL9SQ9H2mTojH9w6BWk",
  "key22": "4EmAveDr1QCv3r87eP6uTcrm3S3LsW6o8284Y4RTosXYdLpnRPXaL45z2ATxT3r4HPoTsmzat75uhMdQM1guKcEe",
  "key23": "4uUrNmpLTXMs2qMUBjFJRyFRwWmsggQ3GYG1VLbwqSyZTgtTdP8yW6K5qXUNQGLvhXvQ76J5dk3CHib7r24bQ3p7",
  "key24": "fG1tJSsxdgorqgeFo8KyULK98crEC49Kv9mnbzsxikv7sRNZmdJzSAYfKcLokF25YdkmpDGZHzo1LxSbyBVXNAR",
  "key25": "4fTAX5WocA7Jiapkk8XsCzx3PqQZyJHnWQHjxfPNkS57Bgz7n26Hch6pUmTEFjFB739JpsSTJ77j8CxEWKKMYCae",
  "key26": "iPAsZaL8jbTruJNTzJ2wxiUzr5TCG23Tn6JKrGJNRQt711hMoaykmhy8bxvSBmjgsnr3aBJSNdHzn3PRfiaqYuH",
  "key27": "34pjrD9GDNU5DKS3FPeGbPK9shm4ruhmAsRYzKya9aE5cuWwWM6npsYXC5qLFgcEVAzSNdtU4rKbbEGCLkcmbWSH",
  "key28": "3oe5xEtCJPJFxJeqCFhrReQiPyCQed1KXZ9AAebVQtgB2QvKwNcuWzecEcTGCMyXBHXpRYkNkaeeuocmSnTzhPQM",
  "key29": "53EjxNNK36oA4E5fM1Lcdjubz4kopbEmJHrsbSoGQgKNCgch5dcmq6uJjLYvtCWUVsJZmZRvuuNYd6UMa3odhiwW",
  "key30": "5GNGWd42j9RVyQaQNMgNTQwKE1TLK8xZewKabXs6JqixrN5gdfeKixwBmDDm8b1HD1K9KRMvFyi1AtnCFd2BamyV",
  "key31": "4baSRySqWG4tUS1qGLr7p7BYYUHjxdG4tRHo6CksA3vRqJKG5gkGAEMTHmhpA44uv26nvGR7kDHtfhrpkKXoPJQF",
  "key32": "Drm4gAWyMmwGahDzCGbpq7Sqs53cGaFV5Jj7xCFGmvPQWqmLRgEnrKV3U6e157AxCFGs4sXU7QsUhMY3nisFoNk",
  "key33": "4CdpCC5i2YfHwpbFubFAQDCcf3oPGbX4g3LPYEeeuExYFVoCR2oHPbXavPczTb1bn2g922xpoPRTc8aB1PuoWdPp",
  "key34": "4Nrzsn7Z2ZjXKGNX2MyN9P69W9vswDZYmHcNtT1JeUTKe75Vhp637LBoFVgwrYjDypnHwL4LSaKWh1GeCtDUiKGN",
  "key35": "2duiNKEEybQ3BEUe5xBNvf8r64LmQ7j8oSjmyoHNdKPURoZapEnHwMpuFwHGySNuYt8pEnFAn4sbTv4ZFkoUd5ji",
  "key36": "5YjrETPwqpeT8R7mGfTaXN4vEf5yAVBFmp1su86aGFqkXpdktBaK2cEgo2YRUBE6yBTykaRjNK1fAmAKqu5uV1aR",
  "key37": "7WBbqMjgoSGHquuCyQEt1BCB53c7tMcZjn3sVqyXRdFSzaULRUAt1fypNdTCwRGryEn1JzaPhCwYUQxP41EE1U6",
  "key38": "iYmSrr79WomyDtkye9SGznsEmEQACMzcN95C2Agh45kgtFSkJ8QgyH2E8X8rXWSU3ueAVWT5MUveG8Xa795FkzS",
  "key39": "3kEg9unJk6EFUDaF2CxyFmYUpn76gqmXehG6qdr9iiazZrwk13XQHXK7wFbLZzA5WvMSYsyUfJPu737tjEnH5gyx",
  "key40": "2zv8YBqYJxCSWbCFLghHPdsM1Hy4B5Q4SNi9W37PtHN215cTQFej4DGJ5YB3z6mmFcmCpSLdJJ1wnUUKvzcG1Yhy",
  "key41": "5qTQrmxcGfvaqSS2xugq57W9mfgSf5dkCEtbPiH5YpWfAxRCAsK6p6DiZoHfSJjqauGvzcEJfzZq1H41VdPjRE6g",
  "key42": "3zHQhUH5eWmGRHjCu1kGGF7eLdjRP31eYBXNxEHKyTfkWtnmbyNN1ruSs3sjABnFaRCuderV6ud7uwXMHShKh43T",
  "key43": "2T6DKuF3rNjeoF75UBgsQfhMgejub9wjmzncZaPywEicmn5DwvmXT3uXhep6HbfCik1FDNquuVY4kBn7xFp8ALcc"
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
