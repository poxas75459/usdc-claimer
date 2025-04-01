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
    "5X6MR8gB11NVXopBKoZBuN6RvWFPbnE36b9S1GEPu1vRhWuLYoSrhUdCP4QtYY68eRdt5CcTdWbpQarrxkdVG8nY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BoNgCyhWR46CS1gK557T4cpjZ1LnbSWohPogKD2pi6kzWqqYABDr4TfuZERaw3S32XF5sPBCquDfDqUospbQPw4",
  "key1": "415N96K34DQWfV2i97WhaLMKeH5f3YEb41aCx24Lwz3spuzX3jCthzxXEvpErTSzHvRzmHkjGAcY1m4uw2rc64m7",
  "key2": "2a2SK7T5EXWJiF2raSXQdFJH3LLkQSDyVbW4QzJqqHLKfahjkRdN8d561LsF2M4uuzAefhhnpLegCHYt51acmNmx",
  "key3": "4mjqXh6QY1vccoj4a46AKqPYDa7Py8tM7HAjmRwnzEx3kpPcvvYowCMAiTPyVhgVpzvbyxqaBQNxkajEvNF5t1FY",
  "key4": "8bc6o7V23Pbj1wv61ukBKnLpPUyAwiDAT2EwPHKABcubGopC5q9HayfYEzvZfnsGBNqq1DruKBUwmSXXuyw2JLq",
  "key5": "2g9RPg1LfMCpq59ud8raLfqvyt595WV4BNpT14nZdGfvphbv5aiysfxWXbCDm7mbKZFCGzJdUqo4g7qfm37TCArR",
  "key6": "Jst8HgnrEH2yHtmjWKbzejB17vgXc5T6bUjinmK8SL9LuYwDvLx2gZJ7VHLCdN4h9X4daNjEfw6j941UqLohxLS",
  "key7": "NdBezovhfjpSS9FeqAaghoUQupjyJcFrtX9huAfP4rV85X9LzeWnqUZjw8qaRZB4UwYuDPLs8euvnXLeq6wxr4R",
  "key8": "vMMYrUK7z6enMCkfmFTQekCCnMHFARuY9en9KQDvnKoushn9ogwzg3Rdvzvr2h45XWr46zVM54cMpcWzDVwnsy6",
  "key9": "3LU5rcutDLfydjuF8dfzuGXZVgBff1rsheRj1Z4H9TLQ7bPFdcjtSKgJ4844MLqzDpKQWRbaakfn1vrQAq8XHCQf",
  "key10": "4UvjQZuYijfAgSCGyRQM3YTa1KYbc91Djoo9rAxd2wfDdARbwU9GP9cqHwEbCuy472wdwMvSdaNQvaQne3wbTC7q",
  "key11": "3DotEZ1RqSbSJPuxWPobeNaxFZetfXzDDCZE1FhLcvD3rqL6kNdhcfZnGRtjuWfXgY1frwwYdPwoe8hem5uJjt7D",
  "key12": "2gfW5m51MdofN3bnkhEizvpau7dRB9RoriBgkdk4iS8RecuU9BSJwgcPfXpvfzanRHbPZT9qQrksTpccpxh38iHE",
  "key13": "eeg6GzR3Rjz3jT1oxbKvxn1LnWGWnKnu721vhuqUAK3NbX1iC7XP5Rxr8R7d6eQ7w5ZrfHXPtZnSUsLBwmXBEvL",
  "key14": "bEtPdxBBtHs4EbmrFeo6JD9CbubibuKM4QpJiSceD8JSm2HKYoPQ83Nq2ndKCLX6Ywc6NyoUo8c6cXZjuMUkgeg",
  "key15": "enzeztFnwvz5SxHoE6DMC6LLYQkpzYNp3YUo4LRXT7GjkdpvFtGsfwpEkXLoa8X6rATSJJ2UvejwRXH7x51cx3n",
  "key16": "2GyGQaEcy4cJf8UkXCPRJZdemdVWFo3kVAqWxuZDqkLkU2qJpJXVLXDyLJtpgyVuxAyjY8xLbwL6yAMhfENJASJz",
  "key17": "3JYoj1YB2ieUrqXi7RukGLzRkZv5GdLpDNg6AgJaPJSZ2X74ME9aPqaJg3QcGqX7rzByjipBTo2KPUuPRnJDyPBc",
  "key18": "3q3CMhbV4KUJuiUYLqgjLBKHejuw2Q2CddVvsTL8GrJSxVkc6Gt3HHk7vpto8MrKLno5X5RpZRGZs1GFfCXHCitP",
  "key19": "4aUyNRHh1uRtncMyBnqJrMmotjyCqNy4emk8vUiwG6CUYWCsF9zGGhyK9nixNcGw8eVzh8NcJN8sjSWN5YEGJQkA",
  "key20": "2YoUC2keVtz15DxdGN48UUoMy9DgRNyjNaM1Kyrr9tQXsDuZJ7ezTe36mvq8wkcZgNHicAfUs7uaLU849cypKVjH",
  "key21": "4pA9Fs4J6jcXexQNUYEz7FqpM2wNM3NX46maX52v18jaSXvjEb12iLS89bqACdJVMfTaxCDqk7j1drbeFpNLdsP9",
  "key22": "3PrSJA3D59rcid3wFsXQcwy6TECvnF8n67euB7PwMgGiBanHKCdLqQ3j7W5bBKCpxzS6T6yznCHpfUhJQ8oS5D2D",
  "key23": "25bMaPwxDXfM4iTq7b1ycGf6Fy9LHyxLBXbn76HKEpSQFbxMYJDjuDTjE5SaZgLHd8JEWuCtUv3TU4Z44iCfmgr7",
  "key24": "4LV2sfqyRqHfqJd48Vzhmb9yXACLK5WoFNhDepxbvgrENQYSH4LKuvcyDaKuuBJRtx724XMer42HNAwTpBH7BnTp",
  "key25": "4K4AY9HsBXL2T5RCB4PxibwURfbN9qKqLUii6U2xMLSjb5wwYJdYtFcY5QHGUasGDFitdjCB6kdAzy5V564hvTp2",
  "key26": "4vY8hSKTUwxUuKnZZkXvdBHwb9CpLynaCn8LH1xyaePV86CvdQ2FjkCVKrXATAFpcp1A1cNTvPjqb6XKFxnUnpVd",
  "key27": "3D7K86eSbxpSD26p7jXhKSKYmzXiYTRp8Qf3bnUC3U2quW9ZcZJM7444YuCrwM6sng1wpucWZGE9uX8WBkAAWiKm",
  "key28": "4yq3dWdiHor1gYoZC9Fky5oXPmX4Hk1PQoUaKsu4FkSJqfw2kZAfu4Ga4fLJSGupdi4Ux7ozJBVtPrrrAJxyeK5Q",
  "key29": "3DGdkXD3EKVXaboCZUERBBrTVFZ7uLuKxnHeU9U7qzQbUwA2aWFAdziaTGw9XJdPnXsEfZEqPzeRJXJa6xVjw7mV",
  "key30": "3UdMnbPNNDFGguscE8kr3Wg9fy6kkm91siFVxLnj68PJkbV5DXqAS3Lz1JrEKZSEpgPwhVAe6Nn7wAS3bUB6qtjB",
  "key31": "42XVQSY84bku5Tmh9Q5pobMnJuQy6txu75WtDVUfopyJSggFQFvyJwPbZP3Wx5bMGWC1EB6h11fq7zxTRJNcipLh",
  "key32": "TaDZf9ur2itzTjN8G7XF1LoukwNAJtUS7Y1oVm7rAgTwA2YTwnDYSyzYAco51HhjbQyUHY1vv18cghY1KiRSWhE",
  "key33": "5umH7v4PmzmaLFFVZBHgxDuhawEF6haM2kHTbqEEfpHkZFrzVCgVQ6maU7DRsuxaEPRGTajTsqxA4fhUNqrr8Sgn",
  "key34": "WGEYfLiLmVgt78t1eB9skfuTpQ1LQsNXLS6V3mmzzYFv2JUdbvroW2tcdrajuEfpPhBvKW7uZ4Ds2L7YmFH9BQa"
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
