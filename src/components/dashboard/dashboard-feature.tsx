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
    "2kBK4qNKGnZrdPGy3rAoqyjiM8FGFmrNpyi4fyGcTG6ywC7hXZpxHzUvj39Xpys4jUBSgEjUz1UaUia98zUpbpWz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W8RFfpfPinZhAzxAxDxKXuReVByqE1RkRLMZ36H62Ehx3SvYXU3YwHCR1aeXZkzDfJhn2ncdH46Q5homsm5DC8K",
  "key1": "4fw6VQu75sG41j7jZdwJ48H7LPWgtnU9aXyfwrPRUt6FLfZxFuKMzwXJ8UxLCWERT1PVz8AtrDd7VCF127HVRXjq",
  "key2": "3PE6H7GynEbdPgE8A7Qnh9FbvYbZQPYuRXzoxEz332jzi31h9hzWZztbqa3cUUBFeTfeBW1G5FsWt8bV8kSiiSwV",
  "key3": "2e71Lg7iajGV3h9RRMB96iDnsP1EDiQnm8MYFaiZhcAreC3DhD1aiBS1R4ZBC8S1SLJorYkmjnp5dHH3hQq1ukxb",
  "key4": "4LSVC3D2ip5ZsR1K9xi4xeqGZqCN65pfkJ7unaSQwT8ByXYzYgsqXn7YrfAriCvCBEXGaHYndLdPhFgBpWXV1XKg",
  "key5": "2EvQpJ8EuVoUjTkFcQ5fGoZNdngi3nk4j9uJ5VSbBcnih4tGBegNHMojCkWKM3d3NW5G717jL1KV7en2sn6L9o9a",
  "key6": "4fKGsiCWa19tpVnTDU84TQVBXfQ9PTEx1dZ321tqA6ycxyKqPGyoWbf79fHCc2TaG8vqG9jnCkNKNNUZ8F5eQTUH",
  "key7": "4Z8xRcCz3yqJMHJ6dG5ioetFZmxKPHX3kK74P9j7bAcAmcHG38Q8RCcfcwazaQtF2AqK5UoMwrrMPLdVMLQ1PfD4",
  "key8": "5hRGe4PynmPuLBfjV3oipmtZEMYpQmAy2gwg7wZeWeZiUp2iBYgCYr43Ax8RBcu8Cn5nxzMEK4K3tLHKipz7BhxN",
  "key9": "2XDuRmG3QjHejPjFnhSnxvkcSeXKT8xv93pqMZiMHb1xmMgqeGqGpkjtHLaY5vixRAMCLLHYypxP9kXmSwK42UAM",
  "key10": "jz2MJmc17hH6S1ptc1bTaQ9P5WMbeU6S6qEBwzsE8n6enf9xVDSz3X41rkNfiwFgmU3969mRaQk2rZ7Cqa4z9E9",
  "key11": "3PBFtstfsCKqN2HpZ1mM4W8YRdimpxvpFiwWQDwgHMAaXJw1WQzei6x8VjFXrKmVPtZC7g1MnXjR4no9LGWr4Ect",
  "key12": "cGGdwAdcvd1XopfuJxVsbiLcLVFVnSHSdrZACyFKUU1jjonJpUVnSUgK5jx61kQdMosH1ZwYVMAH4JfLRLrkV6C",
  "key13": "4uhxv2FzHp9UTWp4uxF7BDTeaNpBxfnfoSk8jBbuFxZA5NXbzxBKZjfxMQcSC9Mfyneh49b4rsepktp7Ea7ST33J",
  "key14": "5gGjNoGMY5SnGzdHprYoFiFawrU75DxEgjuPkqEFSgGG9wN1BQidNvqwjaTGqLRZwVp2YzEnPZ5mNcq438XsEugp",
  "key15": "2b8dkqBBKaCMKQjdXZFSpEkcV2F66kmrJzLXZRqg2ZNpvZnyNAwfmNhbSsFKBWmcNNbZBEjYRLuZK6xQ6kgexCvy",
  "key16": "4bN6RgXttJWNQ5XEVSgjJTvqje7Jsu8uDFt2TQgncyqw86JHy5wUKofU8MATrdKwxFusXTotxKrinZqNbg52Sfyy",
  "key17": "3KrwHXjkQCfqVVS66cyYEBRNNmBi9USE9h2RKyEtoCYj9Mno3P81XcLcwBp6RswWT4sBqzFecWtQe3xt74a1zD3x",
  "key18": "3awM6KaSZn9HRRTubJ33UjNGxgkuoG4Y6UYC979j8f6xxyQtZnPC8nC9mt62M2DEoPEvxQAdFJRhVYUaTJYNNqTB",
  "key19": "3NRx9tgqL8JsPnYiDkDjGeepzQTJomB5Cizxa1XW7h1hXbnRHyYK9kRa6aWerLxMe9scfoDw3QWa82ZJHMm97URY",
  "key20": "3gCbZZzLZ89nNzZA2qAg9chmjWCbfFym22QPX43HaYniFfXgjEeVrCMZTNWmSxtHRjQqpBjYxGnfMAKmk8LrRKgb",
  "key21": "3s3eWKkQUGdUTyTaeRjskAFHnMBonvunGtEcHXja4t7jgeS9aTTsPFN15Yh4UL6TkbP33nJpEFasMUpGtEiiYi3L",
  "key22": "33xWj6nGTy2sd2F1jKHtCV1C7pKbRLNSA7UsD928hZc61ZL2AqPGVqmmc3N945MHVcYVYZTqtqrsQ5yeXebLb4ub",
  "key23": "27uxBkcqK6bQDjUFC1wz7He9g1Lyx9zjBb8BeqBMKqtdpotcn8jScWCrLyDeHEbaRAuBssaezFtp6DZ5654kjNt7",
  "key24": "o12NqLdaWEbkNoNtwnEqg2oThK9X7YzzbuUJ3w23wYB8DT7ABgLzaWWJjYYQSzHZsHtkH7i9Ja797xok7QZNQ1Y",
  "key25": "4tpdiMHyennWCQF14yLuRfuoab3AwkiXGfBCHqfvTAmhT4xHRrsr7NnHYrd9aQnQ9JyuJsYpgRWWK8MkQig2fPyY",
  "key26": "34dbj2pveSZibJAW9LsmtRPxzuX2ZgcZB3x2DSiTzp5ve6J4d3JeHrntpYU7de9mBK1XoDRUYC4evEX61ythJ7ZV",
  "key27": "53AnzYorrFw97ukAaPuvjbny73G8zA722ipEpGnWQ1YyLcPLbSqJ9USttZU6frbveZUjEWbMY2ae74Aep74Fe2dk",
  "key28": "2yefbYMfdrrgTtUMU6v4d7aArgK36vSExgmeSqpPscq1Ve7a8eURfiSnSf49DiGNhd9EPzRoDUiJPVZjiSEBMGCN",
  "key29": "4rY7ANWvqyPV4oiNKZK6xSRTqFKSZTGkA2vEomvQCQEAr4bz1cPirnV3uht81KwCKvstux5hbJbqi2KPteckKvCc",
  "key30": "5JBki6u3S1mp2Qu2zP1h8Mrw4A5g35L2TSmSRY1V4WGkHY9kEYke3ePgBfPZNzgxwUk3gq2aDracP9HmacBhjukw",
  "key31": "2f3CvMknJd2HQA5mWQ7ZgRqcGxQo1J38xY8WxoqV6dcXXBjxkT1tv1E3GYJTmSVaWxNxjaQ8mb3DZPFjnyX331Fx",
  "key32": "MMwvZXemgAVynR2RuzTCTRsT16G7yQDBoUi4WXXXEUM73oxwUJyETkB7k6MJyg5LBmRy28BAQeDqw54vjMZ6bTo",
  "key33": "2V9oJbUkEDkA6Lj62tthW8BuFSM9En3XS7u6EBB22P4baTeW9zzoefU5xdKVM2tLT8HpJpjPDYfBx9EKviy6M7aP",
  "key34": "41MrztC2Ccoi1unYb7ThJ3zsu2Tsnx7tLMtgV9Uno8hAepAQmVsHmnR3WdQnqFnnEW21JSHjZJMGmEJPT1XfMqnn",
  "key35": "2NkHmsgdWKyAinyhxM1cr93a4DKVZjasB5HrwhPCJF4r7vLpME658o4F4GoH4d7baccGZgoC3Jx2gjaL76NiLxhC",
  "key36": "5M7x6EwudTVYnUoZQBpvXcKRLG8B2VeRiN99oV24wCv89Q4CbebzifHNf7UbRNHJJE46j2QYHHQELKpwBuh4rZDQ",
  "key37": "3UgqBqxsrn7CgwPr5xt2gG7ChzmrDGF8L3JE3PSR1XW4UCcE4NLVQK15qkU8PMv2xyha6sPjKFFdExQxDQ7KZZ5J",
  "key38": "2qwg8UxTGJHPLj2GEPJsSftThJXy2xzBfUamfZWmETtPn9RNErxfixbmbAJExaijGKt2hscyGfS42eZA7RipttZe",
  "key39": "34DXRCbvomxDVN9dPZakKWnEUsjDKLMzDeDBGRe46mjCajoYow1ZFgQoXzR2ugmc6hcZf1E5vqBMag3Xehq7Dk7r",
  "key40": "2RNyDm9z51aY5Beqe1ZWd4XeD46LrinfbNBfS9YqJe9b2C51qTfPEnRoohPAgJLaWmYqRnC1BCt1JEqBvinnAdmC",
  "key41": "5DCoKz5v9nWNQW5JtCF6bqBUqbE7JnQ7nrh89GWn6XzQ4ekYh3TBBRfS5UZiXbgjvDtyKcJdafP5bpoCqCs3uEb",
  "key42": "BZatbm9SqFqBbTeKzao8d2USiutUv1eNPuDAbyCXMcpHVYny7t91yjU7WvGNCHaWpHz2gZ9ZYZMckEDVKcAWqwu",
  "key43": "32epDtaPfvuF1xCBbSieYyZsaFJCj32JNFtRB9opZq7vY7ktTF6nQsdxvdcEmCnWvc5oE51yJoErUMS6dQZ9YoXS",
  "key44": "3BWF8pT98kLYyhhbgdQeY7Q9JAQMRKZ4GRCH6F967FBwkYhKHbB2P1xpHeKqMHygDuH2VWztL4nZp3qaNC9jEK83",
  "key45": "2TwJtUQWzzRw2HCEzmpEvV2LrogsZLPo8h2j4qUEEvPd8Dz1Lk74iZi1YYGRz6BfLVMDVtWHd2StrJcVqDBHB56p",
  "key46": "5GeCqRUE7wLjii54ciSf7g3frK4nSPo4Jmm82qZHiVd7qm4ua7AhiCSRRUH3bV8a1ZfRmKd8Yw8tXJRipeLJtag3",
  "key47": "3NqAgBnrzRwhi9v5sV3gKMUKBJ5RZS7a5fCN8194PVJrUpS9RJ49wGwu2tkSEEW5iJ6QTfbJWRQhyvTopNCKgwt3",
  "key48": "1s17pgDb7xAthfa2AV6staCAJaS6bnZ4D1Xr1jcUX32HDi64vBWwW2FeGjBEb2CyDEhayxnb72rQJGuZAXunZft"
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
