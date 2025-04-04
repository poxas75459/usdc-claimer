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
    "EfgRMgS7ZrtimsWawDFT3dUKwfFK8NSynZJ9iZdH6UcqU8tm9xePDapKyU3RLVYFGFbGcyi3BZNk64TidJPWYoe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YURAyToA6eD36FtLLBNXNHducBtWfq16SEUkjD2n4sPMjA2DCEKkjCChoiYoTKHmZjfpWFrzYkGtmF5TvZrBViK",
  "key1": "3sZwyMPBPvazWLfABbBPmpuu2MBE7Vp37bTCPre1Hk4Etc5AzJjo1kWUFocptkLxcVUZeaHvRojhCLzLCd2hDzYg",
  "key2": "2UDkvC4tYuozvndi8TZ4Rpd8WM4cC13GGZkeXDpyo4YnEa6KjC1R45RhMwuoJK3wGhwJVnmzU9mZqnUgwEUQf5Yh",
  "key3": "3jXygK3oJJjAeTfgZffUxX1aCf4YnvPhBKfFAcHREvhgCYKnay25RGff9n3s7fhe1jfDf59udz6yxPh6ztCqoj1w",
  "key4": "5S3kKbzCSje2SZbfqVKachDWuFqpFDY95V7n2jEEW8N9y4SAQ15em3oy3FTsTisKJfGDzvejbChKrCwtHQQUQccq",
  "key5": "4L59v61Q1gRKzcyQS3KsYfs3H36T1bs4vk9BnA1b8rBT5m9JEGfGMs37HMLuiRA8S15bshBF424yPPhiSEWo9v3o",
  "key6": "3x1gs33R2TRRXkFaBP1MdtmgpQqKtHjGYPrfqqawM7YSTyJYWhQ7YFL6z9guoWH7SWupkzNdRzDrCKUyb81oUp3W",
  "key7": "3TzkHSh8PX3ayfTZ9vDAYFcL4BivDCJgfqU3cUfFeXYuah8TRfiVZqJhaFFyf1R4Nmgx946vNaSCYem9kMD2r7Fz",
  "key8": "4DYHhBwAZJUZ6W5ngoNychWqvoK2NphkHXu4sxi4r3UWXsFHq25wpQ5q4RZsHwtTWnuwPyWGiiiE54xq9Tbu9qjg",
  "key9": "3cdWhixLz7mHEK2m6YQygrGhrZKxFXYMVMUvbxCVcbWV7hX99w3mJSZHg36KKnvwSaHCqdm79zBqaJjpJejo5JZP",
  "key10": "2PXffT88QBPcBgDwirRELtnzwm51jKPwxjZTaBEAT1iqpkNJHwBGPCip4dhw7WdzvtHe2rtcqfFssVhvdWQFMbTW",
  "key11": "4qkRMgW3hWU92cwsxUTHj5fhJGFTqyxxTknXPRp1J5wgV9SdFZquuB3M2zwqjLKKece1CcAi1gGZjE23FUndDtkK",
  "key12": "25eEjtfHDsYnumtxVYdTbwybW8XPNetTqbww6cZt9qr1Gn8Mi8NgzobLjRdcWgMivGJ4wypucQThgv9EjMfNv4gp",
  "key13": "2TVt7K1qnMUuuMHRMWDrcQ8whZY62zZfV1eH3zG9u5UwcLFNcnxFmEdobkHWq2sawP5wX9AXHk7hrCst6N1pv6jE",
  "key14": "yYKNjp3HEyZenQSqQDt7uikp71J8c7x6p9Uky8fDTJXJcHc2nDvJHAjy8EeAaHDAFFVWi8Pu6xFLsndrh6i2d2c",
  "key15": "46KrChgSbuG3TqzuM7p9g9ne7w9BaxsP9EMVZKwmPQFphL1b598VYbH8QoZw6wJ7rubriqpzSbAj5mFbjLpU6xSE",
  "key16": "4eDD1qCpw5J7JZbpnZVL3PhJjYoMJvhTaBLhGyeY7N1RFwbePd9q8gBaBoox6pzLo8QBn1ZcUSb1ExZNSeoAYQDe",
  "key17": "24EDqVLSj7Lps2YqYeGRGFb5nq3CLi8qwCoA49WvTp5cEMLMMWcPzH9ezcZwjF3FSRT6V3wsF39jjm3b7yQA3iLn",
  "key18": "2YVd74H227cmD9qWUQXiLFjNWRTkTqUjFkZaEsLAvLaHjhoYNdCGfETaFBCwGzMUx7C2RDgygsWidXFKk2tngcLW",
  "key19": "y5MNxMUWt3Fd4JRDUt7TNAUokPFaJdv9F5RmFCbukbCAn48bxZH9omAa9TPYA74g8Qyf6Cu9FWayKJjA4H6ufNZ",
  "key20": "2WhTq7nQAGrWDnPVptnRQw6bh5yNaZ5va9NASntmcLyfgfygQPs8TUp8o89vcaP2e4CWHD8U16khWgAAtfpVPcem",
  "key21": "648GTeQScPQF1JdPpyAT5BTaQS31W4AQdWYT4f12M8FuMnw1KpYT1GBLt198eDNdA3cBGks83e1358nnEc7orYBJ",
  "key22": "28bhndCbKNRuVoZarkymSdVrkDZ5bo5GWkZiTG3SXRRy5vePc1PT3q9xrp5hxqGnjrqxosv9jkuRPBb4xRngjFj9",
  "key23": "ptEYhoeCrGSMvF53jhVDFVtFffoGuY7fcKwUFGMDVqMyyC4scNCWK9VDJMueFBMi1FWoyyXm82Eau4cTeh5BCwM",
  "key24": "2TNyarqPdt1EFbTyokvUiEvVH1iNBWq1saEheNsoxwwNvWbEn6HTdvvfCS3rR7EdvVJMcmfgmWAqbqmm9U2k5JRp",
  "key25": "4YhDeSQmRCEPoGkHFnzpzcZBBQJAokLx3K8LehrBp2eWvSrtr2xYqQzgRtm9Bm1R9nLRUp8Tivs6iAWajBhRowA6",
  "key26": "5fkaN1YksQhnafRA45Wb9WC1WuUHQFQUgCGPoU1N4oeQiWzh6eNUrHmpGXegwL7sSb8zSaJ98XLuCc5uu2684X6V",
  "key27": "2KyVjBkTAfp1SWeZ7uvjoY8MGPbvTafG3Gz25dxmZ2nJghmmi1Cqc41VYZqHqsrUtGJZjSJ551iXgSh8AfyuGyxU",
  "key28": "VgpbAKqAUGyo5WLCTGcJ2ocYoDQLpWL7au9vHHWvPUrmXfPREzLYAqWoQMpGoSGuRU4GhysBfttrphJ8f8nBzXP",
  "key29": "4VpxHm8BNMowArb9DJazt2d59LMBn4nHKvbzCDFrhtJr51V353NwmxpdXDxzXJvw9nHSbcMgttQT9Dffytv48mC3",
  "key30": "65TCzkaaFFU34apvM1UiWfatbsM41c8HFDr7WbfpXD1YrXJoco9PxGam6oFAfqksgEHSnCZdtz5BHZBQxPz1z8id",
  "key31": "weEYbwFFLV5wCgZPpi1KGcBpJwuFhYFeMgZr2BcYCzb7HvHARDzwovFuums8QE839A3g1WeFJ8NpN26PYUJQiqm",
  "key32": "3kgdHHvZznhXpjkQbdVgfuTVVFWguuWcu3usVARP5mHEBgTKhJvdrEh6ThMd3g7mSePGU2SL6zwYxjjU7SHqEPnj"
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
