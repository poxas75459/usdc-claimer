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
    "2K4eGyAptvvMwATdVKkhbXoHagvHpzLaCnNKMjguCzy7zSvu6X8PMe3yXwnAFXvcGeXce2iCnNks2GjLr6TgyxJ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VSYx64G2iaBd4wg8jQihRjhu7bvYhEJUVAYfah9REcZFnMpVtsvCAjSLmowhTZEQQv8LoS3tGrToaMCRViq7Tq8",
  "key1": "4xgzBLWYfQCXULm4fmBLpSZ1ZQ6fpuePhDu3YT1GH8MbenFZfDR748pPyfpzXNM8iuMtwG95uKwzTe4qzqTQzuCv",
  "key2": "NV7NT2gM8Y96A7ErCMN56nAKfLrcguaxUMpgmWXUrzSqehn8eXHu3qRMSPhc7raypVkaqZ3Qbj2DRdq16KXPRTC",
  "key3": "3T6V3ivzRdYyJUTmqyNmMGr4ryWRzwb2tHMz5oYXqdGm4ckSdh4V2ayZFdWsuyjhWsj7hR2hgf9ZTEWQnJ5qRmhW",
  "key4": "51fWAbe7cKsBX4PPPg1XAibWYFjKLYd4TsPujGL5tU3qzwXDyYGQAobAEUXfGaqnDjch6gKzA8p565swicXt219W",
  "key5": "4GVSGW7Y6esaNL3NodBywvRLGD3SXNQBFvnnk6bWd1mzUVbZxEi6P57QZDqc9DmfbuXxVFj9r8DgBcU8Dw8Hz9aL",
  "key6": "2Kh1RDvw4BgGi9bnBUNTq589xZhNSszS4qAhtuAGVbTYd7ZqiG59ZAjQBFB3hojLEniuw7aAWnFjQEA7u1A2bs44",
  "key7": "ZpC4EQYWv7Mjuf9DKXK7k9Gs8AEmJ1aE1B7h18W7kvVmqec7Y3kGhWitSJv757SvYVUXkWWUJKFdPo99SbWo27N",
  "key8": "2jD53EhQ5pZ9Lptmy8o7kws2e3za9KK5F473kDoTgYfinxbuZGyQX7bxjqBwAzhfRGzKsiR4Xi65KD4zvx5xEurX",
  "key9": "57k2WtkCpLvM36fNtBbKY7ebZBetc85QFj4KYzYENm6wpmaFNET7Fc1EMw9ngZtfNR3CKhhBgcBUU469WG2TrcLZ",
  "key10": "3BDch4eekq1nS7LoAqJMRm7FjBpUuExGqKvwcTVfiPe6q5xfbZedU2g3e6s7nkR9X7Hx38m4H5SjfGbyc23q4V9w",
  "key11": "4id2JxzEHuPhYyvqBBrDQQNbCvvq3KHKQmxHvcqpQ1H5JBCb5qFoiEHUPawSpNG1geaysgBexXSsnFE723yvfmJZ",
  "key12": "2q31SxhLdCdFfFi2qb1FoJHQzgehjG6Y9Rk44322arGoWTprUvwh9PsSpZ5tFj1tDKQjaf5dUtWUYSRVvb3jAp2m",
  "key13": "3pJ31uKptg92afuetD3KTr7o9GjfbarFDnGHociTTNKvXg8RdVK3JNU9UAB6h8QUabQknjhqrajqJdXkqeWwLPG4",
  "key14": "4Fxg19dKggkDVT7CbYuXYg9L41nj6LJp7uKjRGKvPoX1JWY2FiPUQ9fBCwHnEBamLmAp7zERKaezb5P6ehXamH3Z",
  "key15": "3YNxDmfrBAUr8tvnhtDttqG1k5TXFdvY4cU1aVepmJy9sSNkpaMUFbRpWR4Np1KDDapezcDxZ6JhwsaVK4w44nmw",
  "key16": "4ZX23kfkoPhXJJdMPMMYXb7ow3XvxpieXVMGMmDYaHxHnUcEs5mdXTLQWhpEHNQ8VoYvYVBQsJZU5gMEYp6zLyW5",
  "key17": "414Bc1j4TSPG1h152s818qJ2zrTt2vczeiyJMPdTsHLR3LqgYapeEqpWfkQPMiQTAoNYRciNcahLopJejrDjNwcW",
  "key18": "5JVBHrAnuxyTbFtMXn1HQeMJoUPrashXtDqK1nMjbuxAbk9k2hVA79tv4MWKzuuJcVJiyFBgWFX9ACwest3h5SLk",
  "key19": "4GA232Xe8naCdh9uPDvR2JJj38hVvsEDKvo6vkLcL4mkf5Fvt7cvGHwc6zHKyMZ2FG4zzyqn3yqWbow8BVqenkBh",
  "key20": "2RxpTxcZApGTPdUR5SWX3TsgTj2BHmk94UMVD5R6heiYwzwt97kpbqfTuErhk5c8vnrr7TeQKpXnzvjxTZCHHVKT",
  "key21": "5WzTeS2Po38xRRtqvg87VFedJFNovZ6f6Rx6yYTHWfBTpePeAzB7F4VK1C4SA66nJLhKJFmifQcMc2YXZTrGG7Db",
  "key22": "YCM7tuwh79RXW1uHe6Uhudp215PPfPUiLh5Pf8nXuwEmLcSM6qxk3Q1UigzrQpQbhj5pyJJCLvTjDH5mKE68zUM",
  "key23": "4K5BTB5nzJYQ9C7urdDfNcXcFcwsrhpuNUGpWwLQDcxvRgBPBr6hTJKhwFeknHfToFcd3TkFXrbsMvBxzqMTk2j9",
  "key24": "2yYdfrzbUuw6pY9cPAh9RpbFjenWSBtugUnQ4eVcf7MTAq37xhRYBsRze2GwUXFLi1ei2MYMMvwqQWbQtUsFQrJK",
  "key25": "3wgZkpsoAYXgsfCuJVDiEuRxYUBLr59sB8u6DA4HJ5AfhupQFD4QSUgHNuDwGYLcRKk2LVJQX95pKsFLBTA1po6P",
  "key26": "3eKmtgP9FBpTTiVdQ1CW1sNPfqGDY2ieZUgCWSZGoi1R6i4AbMMArh3q6VxwMpJmjj1C2A5JXPTPRdaL9RLRKxh2",
  "key27": "5Y1iWuWZTsiQ9AbeMctVscoyaRGNg6jZTTYYcLVHs4bc3pPjbYfkdPKFXs4ZB2kc9rhVeu9nbL3FiEJzfQVEYLK8",
  "key28": "CvmhtU4X7zjCoxsq88n65r96eB8D8Fvcb5ESZxNFFSFgpzL4LAohtt6nEZwcz1CbnnNRKwhXnd1z7vgcRqjz3Gr",
  "key29": "2jPkyxCJ2SrBsqjHopyh5o9435UYFfhrzJdGuKHCF5733dfu1tRWi4CXDcbu6K8PErEYdEuq76q2aDF4kMnbc4oD",
  "key30": "3iNPiDBJ2aeQoJpBUwdSNoUosPhpLnu4H594mmxuZBoDJk7HmohJD5gAgYaHDH9kugDcxQTdwM8cL3etMNB4cHym",
  "key31": "2Gq9T3QnuL2toHnn7S3fmsxYi16HMeVu4jU7uF9znf9SM18RFumwtjY2wa32GozUvWwuVhsf6698qBoWWQWfu38r"
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
