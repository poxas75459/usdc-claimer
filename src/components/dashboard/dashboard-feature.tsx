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
    "55GtzCkVJLchX57q3AhYHuMLNircZnFWLWxSNZEMpeNf1GdwZLz649vnDynU64vrf1WwumdDstHbyWAvp9JQ4XKR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BPHRwZACQwpVrLZntaLSgDD3jMuNTjrRnyJsHsViQ7rKgLz359P8KB9WTPVDFXCHbsT3i5qL2CVVEsTdF5yE5Ks",
  "key1": "YU7poQ5V77gQYoYSoFEePLbinvFriNMJLK7WV77m2nL5VJ9t7jccURWktLaaMtuBosBDNttPWDXFPh4pZtpfFSr",
  "key2": "2VU3NbsCRiHxxcJ5hFGLaSbc5kV6EVfJremZgXPKZ9bYH3f3KSE5dTU6LqQWUY2jQjRvdRXc67P26U18wsL8ma7q",
  "key3": "2ySDe23fqvaDMnQh75XjTMMtFhzuTjJnUN4xTqeb2iWmKh8qr5gSufCFzt7yewyFqp7iCsTgT8EHnGPHsrNrJuoS",
  "key4": "3rBDsU2WozAse3DcDaThVaex33omyRJqhJujoQW2f8D7PDmRv6mx1jazZd8K2GFyyp1N4LMSqm8QPTgadtFDXY5v",
  "key5": "SNhqYQ8LvSaibtYhZsdHrBhmWrvpGmLrgKy9KVZ3jWHpb5qHk4mvk4mu7ZwUDUxRWiArWY2FEcD3QXhz25ugFcU",
  "key6": "643ddVDvH9bm1sA4nJ4GrWTu9wmRkKLJ1j3jGptFDu7Fw3mbwYaGEixPrfTWTLkcMMwrbLWUF1sgLtw7onAAN4pq",
  "key7": "4SWkDN2tmrZEFnxWGQCoRXpztHGmggBTtAyijJsc4EinNXYDiqX6DSakBSXoyUeGBsVoY7bybWjcj6cf8JxgUGeQ",
  "key8": "5DDmAQ2zC7uXn9vqww2bA4Raa9YBSiemPey1cJqn6ieFnwrRVgKXHy6ATM6pEz9PMXKYHWGoMpJFPTvFFvSL2Me4",
  "key9": "4mWDSB1GBgXC6EyDj3zYk2DQbJetuHT6E3yeak54RvFR7VLCePRxUhYuXTRmK4d5rCsDyM889xuFVtsGHVwPoZGB",
  "key10": "5YmKvZfgtn8gdMq8rVAHhBWYjQB37eAfp24NCaUpcLs6kHefnvAMrSU6WZetMyUfprSPHcAabHW7RMcDYQa4xy5k",
  "key11": "5XdGcXopDqwX2YJLAtDkgvw2E2NwVRQpAANGXeKKxoiNtgJiiFVuc2LFDMnTrqi48RQx5F2o84BLb5A3jPJRcQds",
  "key12": "342NVyXhc8n8vak8yHkPojTt5DhRFemFeMheDDSgsir8VE97mL74S4z3n5fSwKZjWyhqExexBZZkyNcBoj2trwmE",
  "key13": "4cmShGSLwnxWLj6SYcCLRvTn9iTfoBiLjsAJoKrx1EyGsABSS8QcD4XDzMBZSomWQDHNBBtoPU9daB7VHhuNj3EW",
  "key14": "mGfcySBC9GEi3NnbJo71Eh8Zm55Cbc9fUD5xqL51rjfg9Qk4E2Bs5JzEGoB3xh7hGf2h6eHT8AgWQSgCw4XNfgU",
  "key15": "AsWb2ABW9ST7e8sbVxRFtn4bUg48i1uKNcFem75GE9vVPZwSmFNXx61fSBGAcewAVpcGXSSzksSFejGpqUY3NZG",
  "key16": "5ajbf3rRLEkD6oeVVVyPah7LrFA5M2KrFHPZzjZydRkxms8wR4wENDReqksYxG5ywTPX4XaZmM4eemAHg73L4qSw",
  "key17": "5ocvagbDbu45r25ZGtGeCUr1ZbvpntWiiKU8rvkJ8xuy59aFH6sC5zwVScgLJfdB3W6gNBkEE1VLcJfwdCoZS1vC",
  "key18": "QefiKSge7xzqPk3B821UCqkwkdzbFHBSqrQEiaejZs5Qo1cLuqUF75gUJR4dfAVNBNzAgS4TKGhmPYJRahuWmGZ",
  "key19": "tW8ur2SqdDqzr6x9tQc9U2XBpZHFAT5EyrbSNytjLeYpxi94deNFsueDMKYPvTFP2QLgKpJSq2kNyik9FedaiJu",
  "key20": "2pSkTUy9Eo6Uau8Cx5v7j5rU1arDCRoHTozUHfKFFD4EEPDFCS5bHSoNtCWW3ivePCvM5yQ53kUkeFewdttkFrAJ",
  "key21": "64iMvKJoU8L6ZykvdkLJe93zV9UDDGSMReQQxpZ817obZU6F1CLUvGxpkGG3k7Gz45rqCDWQDdzDYxtDQsQmEnUt",
  "key22": "3zwfCPRt9eR9mpbh71p2P4Bk2ymoXqb4pc6gN38GBynyypQBcjZoYkjpQh7KA3u3qHYouVJnkkKZZLW6ASGVJh89",
  "key23": "51ge7MXuAPUzwWpMJBqVpjpfJqQZDPAzLFfBrizjmGRiyG78fe3wNyZJGASF3dYFYoiHRVYvf2RpCXzqiU2zXh4R",
  "key24": "3UqSfrL8VnSX9wwaETGoQKxnnc1nyjBkhMuFKuCuVFPQGwx1AFLfaxPunYmWApAAecRZH62GQNkhcSpHKkcbkLDQ",
  "key25": "4HFP7RSEDxGd1FHonQzeggyuBpoPEvZejn2ud1AG7AcCF9tQBM83GvZqpJYKHb7uGa78PmMPhBLg1zNCFHU1Xagm",
  "key26": "zDDTjcV2HiMUXw2JuWHFVFHVPVp6qqCMHyVePgCJvyHFk9NCrxGMjjqr1ofFdnFf3UjFvFD6te3W37RtjiKcWGX",
  "key27": "2UNVXrwUUhMbstEdABLZrSLqEBvzts7yakQHwLf2k1jawUQYkNpuws6krS6iqFLG3M2U6QVY3P8TkLGqqE6wBT8W",
  "key28": "y2oDtofiy17j9qvXGSQLWEGe62j8Bz3yQRx7P5NFETGENwbQDskmrr5JLxJ63Qbj57soNuPtmrLY4EEyb67cZW2",
  "key29": "24ng8TwwCGJvJ5MemwS2tfHSeNBVzPV4kwaDnwpPDyPALjGbz3fWaRBHrJQGPeHmomZ45z3XRMePDMEKvtKuUZwS",
  "key30": "3tVUShXVYoKKRjPYj4p3xKRupUY4EqDb1aMaQgAEjEggokk8ZJNcw4rcCRzeKJ47zmsM1N7mCFRP2SMxgsEyy6kx",
  "key31": "2PyPkCm95kncfWN5SN4wpwb5cJDfEE7TwimV3j3auKP7fzJq5r1n5irykGVaeSJp1j3KQAq5EQRfq1QiAfqUSB27",
  "key32": "4wT7Ecqw9tD8hioR7wPUfHf2eeBKeR5ghjnA6oiMQLEb6ApTB1jQ77i6KNSBr9M7FJVcczJZcEAHeGDppaowZ4uE",
  "key33": "3KNympgYhpxcGg4mg8x5p1DHLQZw3DSubAowwTbXaZqMiFWJX9RFT12wYmgnMkWyh7ehC1QiAtCBcqCd623ejdao",
  "key34": "2VSvsiejKTf6A4hESMLXygqF5tVCBvLCzrRugFteh8NxSzWXFd9B9vvopALWHjzdAFzgV6xEvGjebUCYEqujbfPj",
  "key35": "2TfNCdhWHS1hthAeDVfqjgXbfLmG2KRAF4FzK99q9jtNRT9QhYvEhmGQCk9ugHEY97GkqZDJPvZjwuoiugp2hrmk",
  "key36": "bUxCxqYgbSYZ42FBhJs38jfMR3ryKYJjUaaV6KjkN1PBjxSfm93vitm4Pf7Ud7dHnLbQU3ibEH3n5XXatApx2DM",
  "key37": "5FRKvvwDbG2vD17tGqs4Zqq2x19eVjqfY5TE9WujRgFmNKE1feuX3c6JwV9NVw1Km6T1WFqRhXaaHjStQzDmPWHG",
  "key38": "5VZ3gAPL1FumiPoBCeSNHNnS9sh9akPuuPB9bFPKPMKQY3TinCvtkWFQssK8KFxMZ2xwo5QHaHstHay6ULF4WcF7",
  "key39": "4LqV3yjW2NBk4yG4GLQzNqF9n7JGf4HBDbaepSJS7LCt5MMdLV35HnzkMfVwjQhU4XPU4LP9aXrEnnyTMMPqTpRa",
  "key40": "3io1P7ctCCwYcnqGvdrnzhhnfmYgc2rZhVZ3BtMdP8WJMjBWBc6k6r5Y2bcDVTyTGwcaWz3tR7bKPRHor4qhziVZ",
  "key41": "RBGpQLXSewKLa3X5xm48tEv2gmxXoGJHSHaK2z2MWkNSz5icqUwLCVGrhiQpqh6Y98wjyvUX9xpWRo4eMWJyBH6",
  "key42": "2bkqsFY1gPdKzut8zcGsKR4K9Yd7UFRN4HBRhW58CYqbwnzeg15tJ44Lf2gctq1ueg5qXT8NZKgVphQiThfdZNCh",
  "key43": "61ZCGLyL3CqezqaYNRjA2rMDfwhQqASoBjDHEfcVb1WjqFfMVLkVxV4qon2wefMiuPAX12ndp5iG9gNv2Hy59QZL",
  "key44": "65xedsJhxhnjtyTvzpBSNaooJscLrFxs79ifxwkV86QGdAXxdi4pvx9LXrEi8J24GbkWBDkTfZjeS7BohC6MAP46",
  "key45": "5XjKtaB8xyBMxzhtW7tGJGnzwJFxrviwjWmNbgXxMohRqEpZDy9vkr5JV3b9xzJ4zSU6f7mvA5WvJBW2iMvUS3JH",
  "key46": "51eEGmhgvCdiU6H94bd5PxWk6svwenvBzwQyMSwSwqT6JC5Bcty1evBx7oBGBY1xnMUWhqhgFetU4LcNpBEZ6JbU",
  "key47": "5Ep4YrKcvZiCxUg5QSgK8gxVLTekk3uKv4MUHF4gPktPivXqJpBtfNvVTjCfWdFjy9RnyKDLLm78xAbYVgUMdw4X",
  "key48": "2hML9NV4oWMBcN1wMVq3Mi1iazqDiPSpdHq8w4xKMZQT5uwQL97r7zGeDUE8h5ZsWCnrcX7A5zjz3BhR7YajDnFU"
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
