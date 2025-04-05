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
    "LUZxdPjRdUpf6FF7sSk4TeSzArpFakmndGyRNHi7hSPS2jpFWdUdCRincLpPiryc9DPrz7X8GPbASKJ42AYWjAc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46sRjU7GHkgVquQ6hY2nbfPTtkprsd9qsTuypKAP9CnjLQdLxxuhkqDt1Mn9gP6pcuRtNxWHG7LQkWp1ytGfA1GA",
  "key1": "3f4XRxsa55NTHJWnDw4kUty5jTv8FgkwWocxM2C5Ukg9vc6cG2CQpmnDCGPCYfPdMCLaXVfB7HUxEZ9Q4PGds9e6",
  "key2": "eGAZojh15pSohnc1LRuLgvaKmMG1R3h53fJyuDD7VS6Z8gRXiHfLWkJuDpj2Tez4cNzAYf1qRFZzHrwCYpQKrQk",
  "key3": "3MndEsBHXjC7pegBh4BjZCERSrZmioK4Q5PuiWmRxxQtNwbG2zSkVnTRUf1TzsdtLtpou2fgv1MSaSpQDbauGSui",
  "key4": "4mB7yAYWyqdgSTL3oK9QNpgXWFsP7tfbFCdc7dgnCZm1APpKnrrW2XaiZRmgetZz3j9Lh9s2nUJZ6butKZHxKtBX",
  "key5": "2CXxT1MJQgtSWtpgzHdsUVFd25XtVaiMzejdbB2QkwEJfSTnvDWEbnfcgknSCDV85zmr53xVxm2ifkvH2947WbrM",
  "key6": "5jZrSuo6vJwDYrDkXaSc5ejWJSEeVoxAVdj6iRFzXNJPLfp5TCDKoRrR1FD2rnj9Ss8nig7xKxGWSbeMZhL5y9V3",
  "key7": "3FhyCSyrfrX5p7LMG5BNmUC64mAeLB3yWm9ca7su6e4rsbwiYC6PzZRAm6e2mVvv6hV2U8HHGD1WW6PNd3Fyvvhf",
  "key8": "5uJRaDh4wD1RitvN2W77cFvJmy28vpiuGKswmAdX3GuNpB85rjJakjrgKMienddUUL4JGGEuWEdBcWpBgG24c9W5",
  "key9": "WJhzAT14vCsF71P7AMYFuKKBmUjvu8fRgBhARdZvyx3NNncusGjh9ZuUeznXrpWjRaJoxAEDcGpcKVtb4p8fo5u",
  "key10": "4n8Vz57JKgb4dMGf4BG4CLjRkGuLd19TSu5wTkrQHjzMVp9tGJmUyTJmocYborATdKxEoHL2GbKnr75ZhvrvFHtY",
  "key11": "5At33NmbAFeu4uqZmRZiEWp4L2VXjjA9Ryy713tb4yWt64f4BSYAkw9QG4fMx77GjoEECXjdXbDq9pGuQ9u77Yn",
  "key12": "3H6jmXwRZV1J3To7aUASaBUG4rjY3oGcLzwsQg76SN3MPJNtPVL1mQSqDpLwGYX9B63MBjbbtxQzgjHwScWj8xYs",
  "key13": "3May1uCUbv5UecpYdYfRL1YnqQmJfFo1it8zPSRKYoR9qmRArQtjLLiE2zidvdwDwsWx4JkZvPvGcegJq14m5HR3",
  "key14": "CTyGEnTTtA11vZwpG8oiB9Qs7xydBHio8Ntzg7PixaMsBNvzhVqzRW11wvBRD6AGENx6CL4iMK7EL21ML6NDK3d",
  "key15": "5wxaq4GghDkRVJjZPPjmUWh7GNfYSTUv3YX15ZNHCe1gRTiMCs1Ho6LMhV7Ji4YyKcCEMhveSKevhZeGSVUPb3v7",
  "key16": "rVrX9LTPYPpsNzHrBtwwBeLqmE1zaWrhdYGqA2tYNh9j4nSQkDmbgzkGRu4DYNf3kur6kx89hbQyzw6ADKN9ZmY",
  "key17": "3tCyd1AZwdecDUHkQZ4pA16bAesLt758P1Bg94rV6oiBxh4W3Ta9Srkvd6b5VvxDUQ6NgqKGvjigArVdhRrvJz6r",
  "key18": "4mT5XooR5QAWmZPBgdpBM3cZLMNbBEm4ruoPwTjdivgBwAuMoHrBmkGa3stuc3nQpY6Ao9ae5DT6j7uT7knDXYH3",
  "key19": "5DRRYediJS7wguq1yCj5kaifP4ZTuqnGyJBwF1XDL1Z7RVYbYJmjaKGcn1kC7CMCtptpiUWY6f6Q8dX2sBJEZU4A",
  "key20": "3h6cyq4e62J4XSnmBytTNf6By6YsDDTKwttarAaaJa42uV5WhS3MQvY5aoGhauv9dQaWGqJoQs6vyyah3KoeYg8P",
  "key21": "2hLcP1vb99bL9kvtBVtCesX6ei37dYXUdLkcgR3T1cEKT976fSENA8K6gwJGTWasPT9ALU9EC1tGiJjY4ezSccZW",
  "key22": "5ij7fS2EGMHxKwdhPYoojos1jjkSNWJQb4CuYh9XJQTAFWFWg1EPQeNq961GaBhdpxqBErZdg1B8rdXYWu1LhRkV",
  "key23": "2Rq1gMwhw9vRbyreYMdSk6q1SBQwW9FFknUwM2zf716RQ9DyMDWim1JzEw59pcFnV37XTmTdsg52mLv47H3Jqqv7",
  "key24": "eSJJ9uYoBQqVXX96xcbX297Y4hjBJ6vy1D7uTgn6SUMoyKhLpo2hqqFfmWXGB1KXq5W7spFL4XUMUvudDKXYtdm",
  "key25": "2Tb2jJS6f5yjaQHtrsbDW5UyerPDYFdN3a5dGBvFvHUSb69aEEGnwLgZ8pPg6yicjwBeMN4dzmXg2Vps3oWkZS3J"
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
