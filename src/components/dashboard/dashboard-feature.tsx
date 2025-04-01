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
    "4LjigGzk3nR1CKy5c29uCcJXPESN9kQm77Q8AJGZZs8HnNz39AHg7EiXW3XVipv4isazMfqRRTFwfibFyqyDRogc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GasLNNsV6YUNHtksF5nEts8ReittsrTGaZv8rr4o15TvwFKY9e4uieb6JtsdxYZrR73aWir2NueudFkdzsCoNnZ",
  "key1": "4RN21hXYatdaFFMWWQFPPu54QCyDttHg5Ft4ucNgeAqi3zJj4gJDVchRkW4Gd5U6ZSztiAaQYiK6x1qpaHq3ci55",
  "key2": "jzc5JhUx4HRq6qcdiQRU6w8bCKc6JiSZCiJKSBeNDLQhX2PyitFb7xFJdbrS4uqJCdfcgGprAxtd3nGXZkKRppJ",
  "key3": "4rPiWDHrTbom1xwwti1WvegbFD9hnCFpS4mR7FnfHn8Ck5zEeZ8g8rsULqPQiDWTZAuFx5cNSx3jHyGZoqRaMbCk",
  "key4": "5qsjzp7aZoaJMt7SapfWwjdi6ZSYu91minUk1Vfcd2NdQvsv59W54MuxjTYiCkPqv6KYCdeFCi9zWzGdEQucPXXa",
  "key5": "2sCGRRF8rTFjcMETDaHnd5gLZLz7ThgKthzmGRUPhP1D44TgZZoaFqzULhSFzU9h8JBTsnpDmQagdm8DsbpqqUVy",
  "key6": "4sQkcHTi5fdAm3eyzTA9KMYjJ7MvKAEugiTfGq28jZSfu5byk5JSsehYhCWRp8egpSMVUTPpby3dnF7TPpNWPXdV",
  "key7": "4rLYjbh32VBZmWuajJEB5pcbjKf1jo28SUkysB2pqrXqZ6q2VxNFUwiqSM12AoMZRo9zZJSeUJ59fZB2RPcqfnss",
  "key8": "UVqNwjXvPK9njyZYxRm99XG5FXrNsJMotLzfdrAEazXBC1Y9WqFGiyBFSZN3xD5bjxfY2J4kuNKsS5oUa7ofEZR",
  "key9": "55nytrPpxvmoD1rzmaty8DZe2KJJfZY71PiVFuFNNSZY8pwfZgkY8XCfbddBNEG9N6wyZFMZGAuPeP6S2anDF6ty",
  "key10": "vwNcWgYhg552uo4he8BNZMEbyBNoPnYSZqpdRFNLfdd6ZbyBDPoKFmEq3SU36biDPUe9aFvRkELJDdeQm9765kC",
  "key11": "4eau5WmzPZyCkr4VK6wpr5QuQXqWdWdSJnPY2jDC3iS6Z5EXRDSsAsmnpYjp7Q1oQdVDtdov7QhGxWRNUuHfQscS",
  "key12": "4MYhSc5dEnP5toegndbQYc6YrQGsTvFViapsuDuQuZCGS53oRQ6kSZJ27XtiYbKTBKWikjG3YmNoYASjAER1niyK",
  "key13": "4J3icuNebRzSmrjB1TWrGtdcvH7uYdi99Xy6gsNo1RDnJFj1SNNeQXt4DpymimcfAi91xNW7HbKwWxUBKhxemRgL",
  "key14": "4Hw7zL8RfXXdtNZE5ZP8qM5CPw82ToLxSW7q2BuTV1RZf6M6pr1fjANo6q9GQPSK9UnZMJKjgBb4w4YBPZxW1cbU",
  "key15": "5YFHzAGcz9hJaqMEfY3DMB7fbku9Lbme5QvEeNkviSoRF55qgnkU67YC7pkMVbvjo1GoFCQbvomJkDiSTyVKixfN",
  "key16": "667RgfzXDZEDM2LsFBw1x8Ex8ZNoKz45VMfWUbev4XXsVPFzVDSfrhmDnQFCyHjFXmySMc1Vuc21nzkgXg3sEMnM",
  "key17": "5hGWtMa82qD4qPTQ7vBhPHdPXD77Cwy7feLHERbrpRzgQhV1HLZcviE5H3wHJWHWd4HTQNrPHdQKmDK8yWimLQUu",
  "key18": "44ppsWhc6Eoo94cdudotVe2TkwEkHwFMgs7r6tPnFFBF1Xj69pA36Q3brDmnogSCMN1CVJ5ABm8eNBK6TTq4ogAs",
  "key19": "4qYetmsmjHvi5dRXuhqFThVYHzXTqDwkyJ5BLVJJw1e4V9oXjsnJQx5VArJQwpJcrKyEVX7QoRW57cQaBEDhVcgD",
  "key20": "3f3wngomiaiX6K3STaXn2GwcYWT5gQb2fEJfSRaZo7rXzorRpFDrUWoBu1Lpt4HgQ3EYctsYFtG1hv6czUrjENzT",
  "key21": "4g7ATHaCKwF8joa7G5fAhbNZJFBpH8g3cHYCox2ML5w8LNHEZiifTW6JMv9oj2CcZcjMd5gBXVCLejTTkb3xGApA",
  "key22": "32k93yVQCx5sBNGt2Pvk22wGsYP15MQ1rnJE29aVipu2nR386qbHvBUVX9yWGdEXj2MEV7MUZD45BRB8QMUHctZf",
  "key23": "a6RpCJ6e3nAvCXPMKr3YeYSV65vTSemjbavVZCtLEu3V63hbjmf4MmRTwEyUsyHxtGsVFHjfee5MdwJJtEEKHLH",
  "key24": "5cGymv6pc3GNCAKsepxud9LipYNBVGuNFwYWQUkrgYXFrN1rfQmCjCv5DUTYEDz7VrjG3i26MqDDoeRWextB9H9e",
  "key25": "3icdFq3xA3Hf4GFVwWiuXtrnuzBPpuQhzVTZnYywDKLkafDPapWM9AEvKwhYQ7FBptWVBgVj3wX3emxTZkdgJkyo",
  "key26": "5uecbYSbeqWrfcPei13r2DpTgDZ6SEEvcncYRVjxLVbpFVZv89go5o1GDCVKt1Z8ZxZ7buanZtBWJNg6Hs4fMLkB",
  "key27": "S5DwRRACBkLBBu6STwATmP8VXJiiKcs5odqjAF6aVyndguaEtNmF36d2TkuJo8ZUd2ynaEagAJDYxEQrCPkQa7n",
  "key28": "59geddJ6Nr9RhMCwUxYwhcwg7w2WTauqTPcTpEWpHeM6AoLkdfhPZT7ioWqukSEV49DUocfts6eCD81EY8Y3Ykfr",
  "key29": "4ZATtRytCjW4J7UfdVLudxuSXq5W9pWqoxdgoXZWnuAj5dtCQNLYf5fE13oa5Adhmfhw1ydu29zwV7qDY5ugAHa8",
  "key30": "5R3LTyzoAJjQ3Ytca5EpsdCfqUtgEYmP7L6fzUrd5UiCwYRpRRQRarG8tNzpyD1XufSXQLQnVgurHebX9KL52tqA",
  "key31": "3YBtYRFmZVAnhDtm4zsJiPP9SKAgzuVnAA9c59B7XY3J4pYk3awVGSc1kmkq645Mp323jUt31PaXwnZ5SVo9xoTL",
  "key32": "pUaSvNKR3tijrnBrQMdKZxzcAEFEv8CcFbqBoMVRexmZmrXry41j4vfLBBv2HBQpcur4MLbzLTBvdhnNnrSxSW8"
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
