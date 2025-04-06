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
    "2q8B7B6RhyUhQ2sXPAraj8KzeBy8Zmk8dYms8TcecWRd2bTnA6HXzz5MdChb4424EnGYpdhuhxhd8z8fuZtkKqs4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2urhLc1RQpekcsd4WGQhLCHLRchMnSTUoyeEfLy9hbWB9QCJTB54DXTmYRZTLhT9bMH2L6xCgFs8F6P1n3pazRi",
  "key1": "4Sq3xexbqFWWZnDWvDyvoKmHa66fGDEM6oxC7cmnfsi9rbBZCyY4kGpy4QSKvXm1NcNdfChJB47JkzfZoFxj99gH",
  "key2": "NYyxEuRGkmp1s1JbvJ8WDp4nwDsUwrS4g6eqhU3B4oHqZ4YVKDNTuPwosP7TytH6mQzfGBt3p8apPr8vvt2rE2S",
  "key3": "3gh4ZWpEzfNjAajV4gB14Nuw5H1qDoqpyJZHwqxsaPy1qcJtzpyR3Z2BZaHLuT2CzU9M54NhYX136fAmMxmMuXhf",
  "key4": "4reNRBPBvSkAoYbFFzmR577KAqfxMcdKALDRHwvKGdDDVLyaRj8PudoVGQknYTjhpGueKFrmJCA6FVWfdN11WkCx",
  "key5": "4LtNXGcmEMrQScvRo2v4kXiLciNK9e4vt9DFnKLRYikg73yKEBiYRaiPKDk6umn76BX54VbYuEh4XaxnY5EwyX5S",
  "key6": "3LVMpkW1LHMMBZH6Ta4tAkyFfAXpkr86nDLMBssWPqn25QUQ8PPaUebr7RMrvW4wDH5H1dZW9QedN4xpkDecJqNs",
  "key7": "KDa2GzDMT6GcpgukzzT3QLYmZiNhfao137zwAQjy57JPXPjT3HeLkzaT4LDkEtzQh8Tk5uzxj8PQV1oVpVog2kz",
  "key8": "3Ww6yczbSpFGHUizckrMzsv9Vs89AZF8r2BaEGGxQ5Cmcz2iLLbfMY9inQsqFQNuRa6TZvVzFo3RyPLXmzaiJ2UJ",
  "key9": "56TfS87MH1yvVAY55VDNCKtRgSTPkpR1CJmuMJMfLcGgaPozVBcPGcJJjDiHsUKZeKjecck4uhCPb7PFri6AWj1g",
  "key10": "2NKNxFSuGew5dd6ueEA5wwh2ssYEZDoLS22dtcgJT1rAnKttUvhbQPZk6utuEGheei9PqJ6FaCQ6snCqdB3RBVJ5",
  "key11": "TUXp7boecBGRw87dPqXcDar7f75bUUbsdEkQ3dVLfxg1Nt3QXY55odtHSsdgpFshmx1irCp5uPGfTngrcQyL7dX",
  "key12": "2ZAR29L91ciyP8xqQyhnkzRDkoY1pSVSoQanxPFDbZjC3neXhmbTXGzTRxQBDEJDM9bsy6Z4z4uyPPrynx13MYXt",
  "key13": "4QGC8xvQKgm6zGGcZ9NQ2w4SRA4Ban3n3UnsJ6rEHVKirn6AUL1mxNUGRLyaqgaCNEnb7h8V8uGy7nLFyzAkdQsL",
  "key14": "2P4MRxB1DQ4GYZXYWpPKqS36gqu57rLDcqR9sqPPDi55h6HxbfNxa2h33eLD4S8WvD8CoJozCvTT6UE8G9LskJap",
  "key15": "4SgKmX5ji7VtzDmFSbGG5MNpVpBc4AJCYVuAyzrmNyFR1YvXea5nXsJoCCM21F3z9VU5iLMn6Bq9cdgTZ98vNvo7",
  "key16": "3Rt5v1JQ1GBNDUD7XqNFdv5TB9Y3NDtiX7p8xwLe9WL4PYgZJ5c3WWh8KbLnC8Jk683wMvgYJAckAQm9wmqy5hDf",
  "key17": "631GeToMhU2hAfTVjgh6Fqm8vsYipqhQKuD1MFkVMW6TCETgz54Q2sC8RUon6WvkBTyASa1NmfmF1vAXvrpTkzbs",
  "key18": "2eBbdSfyKMybTZjqsPJqxjM8UF8Dg1Te3T75ZrcfKAH2xb8UWLazmbjn8ZzJVw3b7PY9wkKUPpC5RmYvgDhUkoin",
  "key19": "3na188zDnXQrELgBAAGqpGrRS7VnzpdNzSSYrMddLuzzYcrvp4z5cjjwWT582rwxeMEXDWpVAzHDpuXYL4PAEUrP",
  "key20": "3T5iNaP3cAn8ZWL92uYeEJ1XaQQMHPLzk292F1W5jfSVTtwTTPTbEaQND6EHrpwjfYES5fu2hYjKcUUfb8fVkADg",
  "key21": "4EyStEeCkaXh6W3GQkSbPQQi4tHvBfMFxRXoBXBQaBh3ui1VzkMw7j8JsoVcgXqvgRUNsAkpETarSzM33buvM5ML",
  "key22": "2LEvGggbDr5nSxtiwvj7gsdhPytv6KA1aTVubfaRW8uyDjkEefFU6m6NsPPyVN9HgvcAE5DuyWYeedqQzcNM1SaP",
  "key23": "3FE7afhuKb23Z9V4ZRpJGSt4hhJfNVa7dAWX4ke1obDbEGB9aZxpe4beboDXQsVVFvjqTcRWGq8zyg4PbfQfLiJD",
  "key24": "65ucaEjjvmhwMLz52xSAvicDMiLs4RSg9kSoKiWPu3Y211HZ92iW6t2sdwKb2UahkYbzuGsdpEA9X4YqQS4uKkRo",
  "key25": "5tYaroAQNaVhyGouickpJosQu6DCpVYaucPM7pT3PcdS5vSFYaPCq489PwEWpfb6nBNjXBTrTCkZWQJo9EyYv9ZU",
  "key26": "3oDCtvrxvzweGS787Jtv8DtdQWUxZBokHX38Jr8LxRFo9hxPHMctWCJsEgFrA5EHexidXjBvDhRBuKcznV8peLBf",
  "key27": "4aMzKjYCnEZE2WFaSjyFnxaEHkMb4XSKp6td22z6wGnNwMU24XJJpxF5rFnZyTR4mDgdvvyZPCovUgnr9c7t1KdW",
  "key28": "5fW1oyX69d1mp8r7PydXhS3mNRhmkptuH9LUPtb9RwuKM52Y2wGEiQ11aHj3zRbzyUckn8yzjSzUcDAt9NzPZiqZ",
  "key29": "63SXcJnNdnN6Daj1tjXbUbXqHWyDV2BnLeYHKinrQgduzPuE5g6qgEak3wYNX68oW7fXKc8Qi5YcZiQYkt7vedQh",
  "key30": "2mLDgPqGZBg9aoep9jaactYvq8351mM8PDTuJfbJVwj2C2G1HnKaNcxHAZ3kYbMdDaCsNQbeFuXvXnt83ht5ajsS",
  "key31": "2NHpieN2ofrVZXEmxsL1hqc9mZR9tVQKKWGQQxEKvMEwY9Qcmi79iB751VAKFi7NXLz2YLG8cfdAiLwbXnipize1",
  "key32": "2P1KCBHH78osK6XjLySZQ1qUpy7cs44nsUvUxZVF4cDAkomx5nNwXL2XatrkEn66UEe8YgWjWNzeZSdHRpj358E5",
  "key33": "5ocFCyDC8ndKasmJuA5kjDTibRgjmJ4rgnDjrHgM97QymLKd1QYZRqeqhoEEoxtEpoVxqNVTxSMrq8zbszGCZegE",
  "key34": "4H4ugcWa1deagSvkFDcKRUnj9ZTdM3KecazvNXnvb4xKdnLcqetQxioFCnD5gp82rYYmRKU7bjdb2BmwK8Gw8fio",
  "key35": "5ymY1jZ3GE5JYc6MsW3eci2h9dnCewY8QsydaHsARKmfzSyfvmTywjzFp1Ksq4zwVVZkAbZQKqWQkA4HAhFLZGDX",
  "key36": "3wRMWh42KE8T8XCCaxQSFQJRzsdTfFUHChVPaQMpdYc7ZCAL8LfL6tZBP3eagQM9D9ki7VKvJ2Bqj2ZVHxFkwqVe",
  "key37": "3wPHpESb9pZcQB9AfJVF8aZHL7KmiotyPiTwoFY4RxxoEEK9fWiCzH6Rt9bDjLGjeqG6DrAef7wF3jy2UVZuu5Ba",
  "key38": "3fsd2vhd5SRHrnCUUe5FgnZTyegi8ZgsxMAusfyL8dVXNHuAYH4sTe2GbKFqB7eqgEoXL7XKzqcJXruGizCVDjip",
  "key39": "5Qnp9x2AZ45kHA7GwjNedzAewUnFccmEjNZJ7pCnzpJxUAaiS3xXUgQPvNB74Y3PdLCmP1zRLipxw4mnSdohj9xQ",
  "key40": "5tXuepH3V5BiAn7jLhvQQ2JUhzcEsg3PyTa6s8WpowG1ucfHXTKFDzTbbrnKEUDpuRfRjSgZDGbAakhpdU9yLwFg",
  "key41": "2N6iyExsCwBgRGvm8yA9xvhMbiBVLFhFBrrdH5H3PHR6mFcDbJqX4SuoXJEbpJhx8dUv2bqVAGkGKCyv1dD339qF",
  "key42": "2qiEQg5HAmY92Vc2uiofVpGBNjnGbeQ1y6dJ7GsGVanmdGDijitmMv3eJP539HjfeLSWDBJ4BfDaHcfRBagE6Xzw",
  "key43": "5t9oES8VLjJQpbZqEhncxocmKnVWVikxeGM6bp3TwHiJXCF8DeZ8ud4i4X5nZSPykXxs4UMtVDzQhQr7cV1pVnit",
  "key44": "4r8MdjPD5MKu54UbdWTkKYVGgjukDr1fFSsvqstgjwb6C6d3Qoys3YrSB6qjGUTGMvRPqzcnkbsxVw52W1qib4XC",
  "key45": "5aVkaZGcY3pRrrP8YC8nKdcomEiFhU98XmQqmJwnNrnqHq9THEqtdo4j5QnAADooTrPCkep48k5VmP4HkkXouwf3",
  "key46": "4dx3fRNy6MML1JccPmNfHXqU21Q4XJtRwDkd7mgcnuKDuiuY5cFqgh8QExh8Z6P7dyYz5r2T83mNS9GSsMtmCGhm",
  "key47": "AEdpiXPbe1tpJhaLgp4SkxMRwNzJ1qZ2ECQUuTHqgwhBvY5aqAkDyhVynfHVVw7yR4ptgpWXUp9zMAR2uAsGNRM",
  "key48": "2xfAfpYhJ3fdGxgG3RWRJbz6qRRTJAfcD4pwi5uggfLm5SPMEf7LJdA8T1gaX3FsxkHbUanB2M5eoEf2c5f8zRna"
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
