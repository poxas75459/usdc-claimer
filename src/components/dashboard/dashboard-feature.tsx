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
    "5LQvDnEED8huQ9WRHeuAk8W35ZVLXf9fkwvL4kZnxvQCZYcR8PqHUGLUjGw2BA9iRa8sZCEBiF45qCZ2T71ShP2F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gbEmQxTUgiyqSymQdn7jvx2b67qxGFAnAAmTVaBypigbTYSdL8ecgQgRZ21HExZMQQcGds4WhyhvGyB6CS9daFM",
  "key1": "4uBeimzHYnhXTYMMm4KinrCUWPs9iUfDgNaquMqvoUFzUGgT2FjkNQbwoggQq5dWversaN1Dk9C4qDVE5p8izfki",
  "key2": "4c46BDU7i4r9weLj1m24Y7S3u929mna3SRanZQ1TbSg83JbauEVGtZJ2G62zTvvjiAPd7NE49o1E1fjKCWyunATX",
  "key3": "2Smd2BmmefbD7KaaF8rXrXWGuK5szDPr8PdXmzmn3KcXH8mbhcMBVCrkXoJvp31gz2EzUtUsbfTKgAPrxhcA4Xf5",
  "key4": "4nT4aq4UEo3CHQwJDJUrDVJC899K19kJnJk5M2EsGYQ9Egr9Q8nhQkkoioGVX9zpWBiHCPJTHrT7HvKsfFDQPgsM",
  "key5": "4tJZNThAjXp8VmJnEjwsFrD78uAEQQW7EAv3skm8Tud5JcMn3hmSCMcD6QxcLHUCbemBt7STFVvRBe8UzdWtQS5F",
  "key6": "4R1ynSsrMfMP2o9fHCZW1VgoviaUXNkPY3hW1UPkCev6XY46YRfqRuTycSqTeswy5Y5oUVMd8Nye2U9doEhqa1xk",
  "key7": "5Q7v26K6jWihiseTx2AdDTCB9amomjZchyQ5ZfFPPRDooEQGu9bwHHnBEWgZeWELKd2jk4v7mmKMzS4tzRhQPMu5",
  "key8": "5fYd2m6svEZSoHFUc8ieZHVBFGdhW8GEFPxsidJRYsmPononWbHSx6cdt6Vp3aeA9FY2HAigftrzVWHPAbfejLbX",
  "key9": "2FxxjJqj77nYu7HatzFpGd1hmtW9BdrXzXEVE8AVw7JVhtu5WqawdMJ84S8UnTHRQiq7f85CQm4WV7eAfBn4EQv5",
  "key10": "3RSUsuBuvpbCkkgfXM9HQLLHRf8YALXczwJ18eTxbZ5UADL48qP6HNZHMiNagR1PzBdVT6yuMtVFfVQNsFQbD1jQ",
  "key11": "WM4cudiYbkGgEektiEq3eW5nxe2QuEV5g8jaJ8xVM5s8D2qtyj7fqbedkw7mD1ucAGHokfKTDGvv8aYvky8DkS4",
  "key12": "5SkDUF1DBZxNq92SmdrbtBSUCinqq3FzSVmDMcTtg6gP5YmUpRsLT47xvidx78XdWcKqYohzfkLNsA6GXZRwe7s7",
  "key13": "SkzyKW6cG6iGEuSSCEGLA7QHNfBNDTQSszqLRb1hV4SYLjWyB6rXfedurrjPupkYCCsyTRSorm4JEwoG8fJx82w",
  "key14": "ewtVD9rdUwk48ZYp33DHwMWEM9Swyh95KmwsxW1qv7XbP2463yEdTKKu54wYceMrPyYFyM56ZTnMm5vc7goM7Ys",
  "key15": "2VZ7WQBUxvpCF15kMFLfnarNgYGkJ3hvDKejRV1obVvA8c9NMhxCx7VtdDHjX3LzmbgbbT1QEcw4JTV3fkCQFvK6",
  "key16": "588QV1Jgf5bbzhHJVM3eumdU8n7Yvd4LcviucJ7SmFZ5GfURUNMxTWHwgTJ5tr5swpgV3eP7c7UBADcB2zGwsdpN",
  "key17": "2uSLoqwtpVyemYgGFY1ZaKXEnYoNpPfkBNdq1Yjn1RemLTuvX9WNGur5kUtA6bWGqSEVKCSUFdgt7t5qrVjrE2Hv",
  "key18": "YMzNbf7rYeX38YK7dSL41NEL2K2EKcZNRATcDG5D3Vr9C892PJmuM5pCcYLt7AKr5wwNEUW2RrHTnC4ZqacyNVv",
  "key19": "3hkGxbgidmb3RDqVt4erUkZqxt8UkZAq3s6LgRs6YCMmEiR9crAFbeiAKFxchxeZ5HHBJqa2gx9e17zfs49CDesH",
  "key20": "8SqcS5VJZEuKcAqgvuPV8tgAZQnR7ioqkEF7geTy9Hzyg1k1cfZeCN2HAGacCPXWvWqfTNVdXdKd9r3Nzxgi42K",
  "key21": "3qwAZWUvNXgqdvCNXEDZRFP4DWTqqaz2wyb9ZcZX7FUHUuXVD7PxM4ZtEg2HF8fgSA1d5yc4aPeFE3AB1UcbrGGH",
  "key22": "47kdcnMGLSausciq8W2jkUGe245ZjYzRupBFhGzf99wCoanPpXVNXMgehL8fAAYBknNE28QJ4m5nCJNmjXx1a1H4",
  "key23": "5ZCvh4qvSNYyEwdZonbUmys1zSVdxXm4y9PCGFkZfCzg1WNTbA1JGz34ZhvodVkDZmZ1mQoq2W4cnrSgbMf3T6MR",
  "key24": "34VMX2AMxCEg5AUMhCVMmJoHPsSWQZeut7An7wj5if3Q4cpYE2ptSa85Qd4cAhBSLE83s17EPFxD2wc8w6u6gY54",
  "key25": "3ZqGMdNuxuDjjHGzAKCQVDZV5qN3ke61QYLhEuM5uFMZsxSDFPzDz29rA3d3PFzCZDG7zhq1ZAsbFECtryNBwY7v",
  "key26": "jQqe1H9Kx3qVV8abaafFe2NBhgDN7kW2jKnZ2eAA2cZcZpvCALMZzfQtweLcrkAeHjytrx7HpNxdjD9nu2tMyrh",
  "key27": "5HvJV9XVyZqTqUDFa7Ty4f14DmwjScut9TS9aaFHwhN9y1pm51mJdSEAr6Nh3M6xkTnD5V8xLLENssAeF55vpnjV",
  "key28": "gxhvqqXDjFKrLUUyJeSv412EnJK1NzKMVBJLXUCFFpio3oLBa2yprKXtk4KcZyZsHdZFS63cA24zpK4c21kesmt",
  "key29": "3GkswmnTtdXVRpmTeEFboyp8tXXB5XMex26n5zyYA5mg9NgjqDgw1ikpMRFzp12GdhADT83rpxbiN3x42os1j8H5",
  "key30": "2NY9LX8QtSgeVd5GiHK5Xe2BJ46zx4YEVcPMqPmhEmRTH4ytsXikrfCcJJhWWpejuCtLzgmQ3ByBjxkoHwXuVKf6",
  "key31": "3244rG1uGeXeWvvZMczLYp98Aq585UbqW76Vp4dc8uTT85Ttdmai36Z96M7HsdP4pRf2kRR5UMs5M5BFyNdRSeu6",
  "key32": "4hW1oySeg7u8gUt3o7dWMgYHAGyDUasicyCSUrxZSRUzwvAU8zUALrYb2AtHggERb3G5yna16f4sFjwGjBXNKFX",
  "key33": "58kvfw4yxCQtNUU6orF8T3UyVFZdo79vsExk5FKjEiAQVnNEcqLCGb5y1Wm4qtAdftfQzG9hBVCZG6RMY12PEwvx",
  "key34": "5TUcvN8G2DFmj5RitWhey9m3diPPzvnfQShFuruodTCLn35mqrdRaczgvm1P4q3pka9k52apxeApdxS9xTwcrynZ",
  "key35": "3uMo4o2ZGtyZX1yWDA8Hx4bqCq4ABm3edbrB8AKms3ar3S6r1NwJPLFHovpR7jnJ3igTP9ncfYLBpF1nQCva3inr",
  "key36": "238CM1vzhghfbrtPZ7hzxK6ZW41pefsdgfPobGEkzss3FzKieBsJx5UNmsi8BtdPuMFdSFpzyYehAyaAzJZFD5q5",
  "key37": "CHKJa3W2TVKkBnTQR5dStfQSQEj7uKTm5mojwLYn8DA3MYHr1ePdhd1DJvx6QAL5Vb9UeLxE5GVWvSRCxxVLLbd",
  "key38": "2c8AarRSRXZoHzANCLZ7EmVA8zzWV2JRPG5rubnXXHpgXB3J2K1fx1wXTUQ5yJv9vkwVWf36P16y1cn6whvB63gK",
  "key39": "GfHeuNvxC5UN4SkVobWUrdd4n1hombaf9uJVXf9cVQs69nXe8AS16RcrK3Gj96zWen8fyUWQewrNPbAL4tKcXmY",
  "key40": "2KHnoLnWrAVnjaDpnaEo4CuVgxHtApvhH9HJKZZb7hgSth7zpLYi6cJqe9DfAscGS2dLN7Fiwnnepcu7THD1mKgR",
  "key41": "2rDPMQP9SHsPG6ipMDbwzuip8mjLVw9RsmDVXu89Ku8yqEew5AS9ygtACio4kEPLMQ1wa3NiQqUQLh5skrdAYLLs"
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
