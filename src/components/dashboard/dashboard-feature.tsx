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
    "3mHDcXAeqAjZDd6JRC6Edmn3ffFiQh38315gsikgpzi69BzmPHctAEeS3W8ZCg66YWmi8F9vQh83Er9nLyaXDLji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36UoLED4Syqpr2yixjG42W57QMStNXXCFnzcpm1iixkbnoM3knyZ8BQ9AqHXPq6K8aFwPxWN9cy45hjPQpVwwvGw",
  "key1": "3rzLVsKn2xnmXYU2KYzwP7ptYNwdJYRMt5SfTVbhvUxXDLkhxx3hP5Saqcf83x237zyTe2ygvfNbUaLgPXjNZ557",
  "key2": "3wLmnYVtPvWtq1d5pzYckk56WbCchVEoZreczMeyBkrbogkXxvDfBYTtvgxsheyKfbfNhHD52FCVCrAhyoyHHigQ",
  "key3": "5B89hNryXU7rQmDUUHPBXGMis8QcqVXr3ABUjLb9isvNgBM32vgK7kzquGeK5SgVAERhNfTCFo4pdSnPp9pM8zPR",
  "key4": "RdRk4fhVh5d4xWQ1hcHotdaHRz6d7iFsnEF4WNdZegfmLYLzfjb79p3PxuQkRpvonGsgSeDy5aDChtCUDZuAhUi",
  "key5": "57raFRTK9Nb9J3dDqgog7uGnfXqPK8PxfLeXLTEBM38HyLFDUoBr6xXJm3x2T9vPpDSqVkkP6ECSVPtKob9F4ZVa",
  "key6": "2sT24PwtybvfKLxFXwQ2ZfiSHEnaNndjq7jnNKwyA9NSbXBWyPFCRJzWRCQz6vXqmfh2dmjwCnTR2cnAK86axDWr",
  "key7": "5JMZSZJu8JpAQE4dsZh3oA4aB4YkR9KNLyUNjn1dcQeFtx76UGpSndretRCXUSirqdGaT1v7vzLd32zc16ovTeD2",
  "key8": "3hczNZRnkcrSHq4CzzvnfdcVSdofLNiTDkwTfrHxQHbPuwEnuGSVmDriXr6s9ds1fQm5Y6hsbZwx8AjkmWLJSVNT",
  "key9": "5DKfRMsc8DJbRNqDynBpJC8oiGWjb7hhRpzCo6chcjwb4sDE4uKT3vVMPEnyVF2q82ZswN78qEg1Pkh7JCP2rcyS",
  "key10": "2h3PVjhmZivDa82Trw1ZoK9QbH8ResgTHCxud6XmrzWtFMJGmGRkveUnHSmJ59UkTZA3Scx2LWuWV3PtHDCr5KyJ",
  "key11": "5ohaArzKUF1oTc9z6cs4PYmndpdrDB1fmbtB2emssd89znQu7eJJtRekqRQe7yEsz6WFKnQz8bdSz1PSv2oeVq5A",
  "key12": "4n4iN2S5VFDujr8TydJGnFmE3WuSB5mFo4kiyMpSqgeW94ayp38V4wJsarmWg4RvxkYyPd9RxKHK51se8EK95bej",
  "key13": "8Q6pQE6pVdsX4w6tLkY3pUb3DvA3xdE5M8ZvsoUGcFFiDtpRyDDVbNvsdzejv1o9Yj3k8BmyuiwgaZMZKQRXBc9",
  "key14": "2i68oALsiPZk3r8yXjuz2JNTzGpMGc5L8rDQWmaFpGZoayakwhV3e8WRvu8ebtHZBYnWayD45nKxsYwRPnGXTx85",
  "key15": "4Z9QdjadC3XrPz5xZHJqJLfvtV8MYV847xuAEMCJmFBkwR9DrCJxDcCSkBkxm2Uc2k9A1QrZPgvX9SbpCGe6fWH5",
  "key16": "5zTBjH8LCd3hBNuJVu5jcJbkQGTQDMajAHY9cWmkPBkWVh48TtKab5WLd45yaTyUfq9kFdRW4tXYXtWiw5SvTDqC",
  "key17": "4q58c6ztKr8VLD8q4o16LC4mjRqHZaG6vdgKficKjfJQGdAUUHugQyCTSTKREqbb1u1qQncHozJKCs8TWXRhXtib",
  "key18": "2jfhQXWSbUeTcjzg5NPv9h85dxjtwUgAyGufu5jNNiWwfURTaLEkhhY9XoJTaNjAyUveRER8Mq83X98YSTxVkHHk",
  "key19": "HJrv1Bjj8BfZM4P5ExdsUqmyQcCzNYggfC1V2phYVyEsUG4gexqXP5fbGyQzRyV8d9QMRsHof8mu43wHUBo4e2e",
  "key20": "3MCnSqdr7ifXUgFf2BCYkWAnmPgAuXbZpbMYnhWSF7uD7RX6cYC8QgHqgepyGwBmQfD3qVVeLBmf44v41RnXZsSr",
  "key21": "5QHEMyNQGfFhLuwdnDHBfaMVBQZXM6WZxWixPMCm93CLPeqHTrPqXsxpuFWfk1Sft75YAzwGBmSYFvx7uPyK4pPg",
  "key22": "2YUmA6w4NJMxs3paBeeRdWCc5m7y9Ks1XzimCDXnyeEdxoUkoGff1i58vM5DK4MQLSSLTRDPLA4THpJgRckahokK",
  "key23": "3EAfYCo4tXjUEwHo1Zu62TUijWCAYvKjqAucej6ZzqeqsU4Za8om9YgmnWT6WBjW6H29GSps53wn1gvCC4YkawQA",
  "key24": "ZbRGZu5tifxsyxw6LRUw5VW3b9Y5FAvVBeM595RWNmCoTe13mR2FFJssxDm1HTBdegaCnXLqiX9UmiUgA6WbmMC",
  "key25": "2TQ7y821a3PgFZrNQCyJn1FudVfzgVTQwYrwFmnB4aY7ULfVrAoEkr1zjLmHqBwf1FXt8o4tY6sN7ZNa4TdHaYZu",
  "key26": "4qozzeDeV9TdxLnwmMMyVrzUgu8DG6Pe5ofrk3Cfjyo4eUtWRr1i2b37cH1Vd7aswHZaDe1pUEhNoEnrc8BtW7bS",
  "key27": "3T4pNdLkawCHDoVLSDiZhp8hQec4hkPEFhSppy6ugXa7T27M3XKjJiEvHkuchMju8Frmn2C3fn8H8mCNbD7Yfw7P",
  "key28": "2jPxwaoLjNwNeTcWRp6pKsRHY6Y857JSUfTreGz9ndH7e4F9hr85hhgCCwDXJXJ9Z3buz3Y9huozkW2frASRwkR5",
  "key29": "3i7xLerLUNb5QG5ToeZDoXW6x4oq6NTPmDxcjQAjPqWweg2ywAGdCGcMGnRKmED1CijH5hjpBVTLYW8oiL7PnmjC",
  "key30": "5uEYuT3yuhkQHpNYXCgAvEMGGeDZFzKeF3bwf9ZbLWYRLAZwV9Lhi4NYD3npr7pYR88S6Ydwv8yCLckh5t4u6Qqu",
  "key31": "HUgNjPjXF8JEqgpBjAo5SbsMbtFrnt6iWaxopQhZc1qaeTvCEY8FCJMB5BDaWd4xENQMEoyKXp1m9ujWtp7dQak",
  "key32": "sxc6bfDULUUVYd89CiLNac49ySAZjQzVeE1dG3qkPU1qhtyftxPxPiKuhwJnLrVwNRdJAhPR4uZLBGdVPJEjXNz",
  "key33": "3c7fuM581YSWQBuPnjtjCV4xKUiGsjY51aUfDVJUp6MdgE33s4b7FBvRKrzdpLNp5Rbjzd3wxyTrfbwYgier5yz3",
  "key34": "2QmvSkwQREqDKEi9DZ4qavCxCjn3onJGvXauySGMvP7RekLHUaNaRHtNxCTqg6A3Wx2ywiZvgBmURy5NeTSEhJUt"
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
