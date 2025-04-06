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
    "4LkMUaYeSnExmScQvnyTovk9nQqsbpAFJRqdqHQwydya4RjD8TTycGhAyTuK9zwtvZcD9Rygg7WV9opktMc6QfrY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23kUdFsDHmxd5uZQ7YxVqozzU2n9S66NBn84y4kWroLx2RwZtJcwj83efFAm6j8RZkXMAueYexZY8AsZ3bpScFsH",
  "key1": "yjKgaprinNtB3Az4SqwkAfa7BH6WXNBiG8hFE7FLmURtmsxuPEdkA3cCSGV7i3toYG366t9Csqoh7XcFLWiuxaD",
  "key2": "35WM7PUyQGF3JGv4TMn9F8ranU5FJAQyziNXxHiCyUqjm3maG7bNjTcK29AjPHCcH8Gf4137FbZqaozQ7VJJS85S",
  "key3": "64i7M8mFkh3XkTJUQPFAXf8kxBTU22RmdzRjkw9AUWYHY3BADuamvMZ8Vf1DqRedeNRgAxhpWhginDZQq7q8X15R",
  "key4": "KWd6TJ4cygHwxPmSGrBVKgSfAJtsUW3V9GeWLkreubA9xKc2hiJZWr2bnYoMke5Xc2nCjTq8nDniGMgS1kH8c8i",
  "key5": "ccBKRfKYtr1Zwq6eMctzrBaUwrPZ611NnEofzX8iedie1cjxm88io9dHcwR6TN3qn8g9Ysfuvdk4Pa8UgVaPdVi",
  "key6": "3pCkWaeQ9ctyZ3yoLRVYop6Zqz7KfF5aJgGreFmnkCQLLTGVX3M63XSzux4VLyfRpNZNATEedyiLif6KEnDxAn6h",
  "key7": "3tXZTFnV6PTgbyJM32Vpg8RYnL8vNJsV2k3iAYVEDHtnHyeX5wCD6nbfiSgYoPvGhDXq3LEr4mVk2Zcht8WB5UHt",
  "key8": "5YD4vihy1Lp7Ai63qv78cqipWCUxybVqYLQFUAHQ1Nin9xpvRHzLtYaN2fEqX5Gg7hLAR5jgvDy6wJrvnaVi7HYC",
  "key9": "62mfLUQYbpSTU651e8jgYy1yx8Rx2kR9tzWjue4RDgSxvuWFkBYfBAseCSD4sMHD59KXF76JX9gwaC81jg5ryzjb",
  "key10": "VonpKrso7S5E93yj4HHkrLKHyqqKCjThzXAUpW8X9mj4rqfekpDFEGdAjBqW9YLhTbmPEyQRRBUCq621DBewat5",
  "key11": "Py4PHbtdy5d4Bf3Tm1fwqUokZzcGKjNU2mqx2jvDmxPQqPADWEpoDPtm2QtuJRnEBhm8EaCvdXtJG12ApMTEPsC",
  "key12": "6zud8exs7kt6G7AbiXhbTcBtt1eYzEPcqajfXzpXqp1sJu8nk6ZiAAa5FZUYK35nbEVVCEEWQwyrf5P6yP1hn1R",
  "key13": "5UTWuUoNdbH7NdBDNStTrZBccH1xS2sFtyhgWGtPUBQviyYpdQfdukPa1pxufAwhjDz1w5EeCY1q8fVbpFyY7DCw",
  "key14": "4XzWisySXGwCR5wsBomwGtDLDnyCC7VX8cQqXWHpDvFrJYzuLNBPFFu4NbDKhfGQdTV78j6pVqgtA57NsdmGAfd9",
  "key15": "2MW4wfqJV5BE1uaKxrJ6T3A3TKrJTXLgibKgVnQ1A8PKMiM3uixDedTCEqF8rnRyVkAuGFXpvPWecRTyn1Db1Ccu",
  "key16": "5aYM69g5s1PhYmiysGxwes2sM9jF1JdkjQAFDvTk1aYWfokpE4ebz9yJBLQb4DqxEGTp7yAjbo6YT46totdGH13q",
  "key17": "7GKnJxYC3Ef8u9DRtt45QgDkRxumHRCiu6Pg1bxD6QyfueMGNeMt4D1iWjxX76ppG1zLnF4tjHCZBFaskFSPTkX",
  "key18": "3NP48yJV8bmFpNBnVi8mLvEBXkMWK6hQdFA4a5F9Fzy1MEuw9tAXdRadk49Qqd5M25a594yawE9CV1tgWMMb3Nrf",
  "key19": "3uqyLf12YqmUjhWQmUkZ1MgZEPxnwZ2FpvrzhMJLU2G71kwFi4GTFnLzQvsq6nNGshu5awFam4TaDiouD4VdAcYW",
  "key20": "8M468MQPxnvw9p5PPdhA7HZsfRrx4rx6e18xvP2WjykicbSD8opQMBMysMyKfwoVUoJGLxiMZKYACZ46Lxb99o6",
  "key21": "3Q5UfHDMFhFdCBJ5Y3qt7u9k9DWHaabJoqTVVi7pBY6vgqVAcUg1y7KYpwpVdgrAR935ZUd7MFKwDky1AJBvCmDU",
  "key22": "52vYCsbLFVcDiZoTWFpSmNJkUHQN9JgZcVdnaUmDwQttfAPtyBKgfNad2kAJdKZEV41pVgdUxt5PQXDxKRRBSezS",
  "key23": "iGfuY98sXB1BNfawCpSsstgisDYit9bB1MNwRg4iqA3skg2jo6efCtu64oeXvdGV1dFfKa8QWeUdNvkuc8Zhmp3",
  "key24": "5wReisgnLSeAG6f3TKAw9zP62g5ATa3iyxTq23JE4zRvYK2UvTqiHj4r8b37JpvZeNYYtW9dSJQRjV4ed2NyCKFi",
  "key25": "3fdGWfQkcjowcksp3T5wk2qUFvfZu7iD11gvmEZ3nfgXMvmoYRLsowAFou5Pp8X6FBpkcc14Lo48coccedF4SWLy",
  "key26": "4USj4P5B3TbtMfrqecg1znZzoxy6zDRAcLRcS3Kn2g3deJprmNVU65BoYFdaFPLRpNQk6f6WRSoKWdN7XTB6HR53",
  "key27": "7wRHSVSmuSVuoFq7HMCdvWvjUWHCqoGMTqH6nWVckhbKScSH5dtH1GC1mLY7tim1xH3Pe3mPnF8v6zv6CjkMFQg",
  "key28": "fZBfeLwLRbPTejEKyHdrbt8GQv8LVfBM7bVJ8wy8yahbyzg55gHE79MGcUFfCASaUprA1Wmip2vEjPSjWJiNMoL",
  "key29": "2P1kw2YdZHgsrHoq3GiiudZetQNCrdFsTgPLs1EDQmiQhgYT5Umr7E1jd6LJgTCWAqTLGC4TAx8nThqAWujZKXEK",
  "key30": "4zqiLArfFNPjMPpDaahtQxwVXqmjydMqweeajHDJ5GjbeDptbYM9utsgFi42X4aRP8uTHasd5GhdSbb776iantjf",
  "key31": "63eX8ZxNgHzsXyc4xXHvk33jdbj6xCmLbvUeH8kmGfi4Y5RyQecnN9J36ktPtSY9BuKrkqSMpZcfVifd77bmjv4Q",
  "key32": "EFi8AEW5dn32MJgEXq8Ub26uG7hrfJrnQFTNFZa2LS5Dy8JXwfJ3ELPWwNS1sBKmPSYXZ4fcCdjxUCu4ke4PYGS",
  "key33": "24JEon1MumFgaQXAmDgM1iXmYLJMcR9T8Vrxv36d5Y1Q5VHDVLHabsBWkfCQzTjBW3LftmKDMbD4gwkYNgqR6CcA",
  "key34": "3LSeEHKd8118VCNMp6rYq4jUoGPRzhGUANh4g3PAXFu5vHZTQgKpjkpCbZWxSPqaBD1P8yCJ4WDMUWfyJ6DxC1Qv",
  "key35": "3Lv6F7vfQmVAXE2miWNWf5Gu6vMHFFBPMroPBbcYFCCeA5DRMno5e1XHZXnF9LDAQwfZJZvFcBjU8m6VCkZt2uQf",
  "key36": "kZoQmAJ9JeC7xAsWexNN6aeGvfy77Te1z4jM9vh7gg4w8aLxqd9w9HJP9oiu4ocgec9vAFTL8xA9UeNYyhBi1bW",
  "key37": "4KyYAmdsETuo22T3rP44BpLE7oE8w4mxNkD4XFhCpfdSSn92B3Ms3dK54Yry3Ezx6mEqYTyHYLxFtCESUttadn8Q",
  "key38": "3Y14A5VKiZA6ZSc4LEW4rbq1vNFQwKpYTfnpoYcrXS4bcHrHoJAZ89ghLPLUd2DcJ1GbewVKhWpvSozaaE3h8ShH",
  "key39": "2Ay6swnvveoKQkuiNGTxXHZQH9iqtWRkuqa8ymoSToVgtAwcip145o5YCPguH9FvAJhprEzJrcDD2WPBRTdrwEDy",
  "key40": "5EVVMRzbpEwcCwy1cTSV13pCtXXbCxPjfL52Y9VXMPK5NNdeu8c4PerXLtNBYf2Ayy8kumqwx5rUwKb9TsnqD97R",
  "key41": "KJGhxuXQNr6JzJmnqL5eeqcdem2SJ6rPX2vCdSLFo2uhZpKh9beHFG1HnngAJd4NTXco6N1ZUASwyMuFpwqERb9",
  "key42": "4SSQGzVd6fadLHZ141bt6w5aDGjLCi4CfoiuMYmZSMxu7ASXvo699uY9CtkkNqGCC7J3j6wB2ZpiWEevJ6HpxMf1"
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
