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
    "2MbvndBpgmCvdsmnpSVvrVFJP9AUkSNTvVxWUZCKgRgga7BuuEU31TEPe9ukqYC9DQEmo3hybvS8ecFnBTq4ge8S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L25mwXHjYqUphtajUgUEKLxKkFj6HU9gFF7H9mnzJQdTpEYaiyDM3zVEKr7Fadry3NpFLQPEZzLvm1hGdES3Zvd",
  "key1": "4EsVAV79xrqkUdHBw2szT5gpKMUGWUkjWHrBZxkzERhKaNLCvH7vxQ1RruZoop6rFm3G5vvYmxu4xWeShXLq29Kf",
  "key2": "4EiqZXyxZHTyzsu7VEdx9AaDPBUtyrubBzRAQr7utmLCEKga1c1n5e9RavG7AywHb1fhsK4mN8T2oXegLtogy231",
  "key3": "3mj8y6FChrzH4o6u8utmpgdjhzt84TZMre3oSm6jL99cE8HD3RhP9xhM8YWWRjsMpMii8FHtP6Tt2dQLhtYUGRvW",
  "key4": "5fYLrA1cGhTKeh7yeVsfp6wj82cqRdwqHrkRkAqVKRP2jpsvkDRH42KfkTdZhTeBGQwbhojWi81AURsptyTABhVK",
  "key5": "241eooDLTTCi9bQR9Bpd1PoZgQb36vVG4o2uvpDUhtnT3EZSEywRSKKysRagvXfj6zvihQ7UkXKWV33sV1q81phK",
  "key6": "4EjM6uWYgvEt2cMRHXeBKNnNP77nM64Aj9aQjYxJ16KCqmzwtP73hLQhhqYFvXwfakmMTGRwpELy2K5gZ788kcvm",
  "key7": "5TmCEJ1WnMBQVfUAW5uYeXA3bfKx6whoDZUD95o5J51ogdxHM7nTH4PCgUnHoRC5ThwbsW8Fr26boARApkULbGsW",
  "key8": "41JVStW6RnBK3XxpNFnJsd55KwUsTFLAuyVkH8ca93wcV81QbZxrZHKrDEsvSiwxqQJCWzxA9T7ZSWhXQ3rJQFRV",
  "key9": "26jhNepFhRNpgLuMxLUhLvL1ntFRkcA65NyVdkcgH1rCsCoFqzSfKbKWUqdj48uN6scLRRemAEZcHESb6EyeiSP6",
  "key10": "2g7CehVKrcLpKNFcA1SJP8jSzjnsjThBH7JRYyQ6JBEMMhRuTBvJkpZYWJ7HcgYKKHx73L7xo7r5TUCRFJsnaFJh",
  "key11": "56j4bwSVUynjB7YAEifasSTFBKT2bZHGey4ot7eR8ojA3eqBxsBh3RHC8L4YRYdcXThpaz7NKREZ6fV8E2LJLgaD",
  "key12": "5mr69N3hmqaQtuNfofMw8ZVWtwsycF8X7mLZSjTzBHwrZW8CB8vh4idLfnrd65RiTR2ZM52niFsW6SNVMkT5VamG",
  "key13": "2ju8iMAHudAJSWRfrCqzzoZfNfvFB3QHDMMmuV1fGRPghCdz9PVKZfMRmQ7fgJrjBQkmGaii7SfySwFSSRs5XFp8",
  "key14": "3bVPUUfWLdc6p4oS1G4Y5kKyxEE4w2zQUezjbJgVKb3fBWDro6Dp5fjSraSdjWQrCBUurE6dNyoB7RNGuRe9kAZC",
  "key15": "2RPhvL1gceHuvgJ866dhymZVgpJeHj4jFBzGpwwhhwiRg7jrRbbqgbcXmDR8yaiabERuxJuiQcrbBV2Fd4DYsfc3",
  "key16": "5xC45hUFuyfELf1dMLrmiAUu5VoEWqGfv7ovEHxE3Hmxo7eFXn2PJR9YU4Nx6gDRPLgsPYYBEoUtDqQ2sHn9NTpt",
  "key17": "2DgN9szsY6Us7wL47YrwfBRm8F5WGN4JivMpWpa2LAh5fMSL3imBPraxNxJUw5HDHVNCxjZ4xEBrLZhNAFRZciCF",
  "key18": "4ZN3dicoB4UfwD4kSQu6hwXZyFjuDWubL4gKYSksBm8wfbZomP6HGk78t1pVoc1837q9Pa8sjZS5EbDVd4YRtTc1",
  "key19": "2tCn6uWsN41BTXK8whjht2msQzCKfwqfkD4D1WNyaTvgzWchTwrAFk5FxaUnyWmwMVeh5Ab7izVwRQRCETg9zPDR",
  "key20": "3iAYbSLQZJQxcKD4vfUHJpxikFMY7XuapGNSSC8hXs8GVtcRxpssMjDRAbptKKNEVB4dU9xJ77Dv6e6SgaDRQ9Ha",
  "key21": "5niWvA78fQx7XAMFwNJPkbgfm4d2fyM5WPJtfdJH9LowGSxVdJrGp5X5Z4WALVqaqvu81BJBrkMjiiPKBNuMgyre",
  "key22": "3EiWxHMY8xa3n3hUfHfmXPqpZVqbhqSvvaunSivCuh4wtb4zFs2NEiNgyrjUaipZHup8fnKbM2BUdNKnUySnrq6b",
  "key23": "y3EjZf4HmyVaazCnqMSYYXjjvkAYSXynwKbUMV6Tcuoj7f59ta4pUpufq3cqGeMyxhKo3UqVqe7xFLv4dn9hVP6",
  "key24": "4TbtFDqQbTdAioFdFx1EMofsA4fvEYy7qqDs3mGrif57LQK4DuUkrrBChfdbvzgcvNJkv1QeJU2nKT5AfkYCn5Zs",
  "key25": "4Ri89ChGrsZAdAv7KrQSunKUSNqBh9wUqDmMvnPvScqLphhR5cY9WkiCT8zHBL2vkQyniVQkUZgFWaFgaEqAXie3",
  "key26": "2org4bVXbG9EtvmjaNX8oMV1zDuG4EKWboqoLufVZMRufT2jLAkMxEoYDtjcF59SvsAxzGhZzZgUf6Fha5nG4qGL",
  "key27": "3FWFpWb7njHLz33JPcQZMHZL7kuFivkFTPvWG4GpQjPGYnYM5BzwM8eaD3BuAKFjw1gwKsAHD5LzxnBdD3ofu7eG",
  "key28": "41trE53C62vmi44SD133Bw2kBA51cFDmVrZGLoi1g5QJ8VBrPcuy5oZbhfmMsmnTVxayhbzyMrAgtn9ME8avaTjr",
  "key29": "5cnQUTBzmdzqhQtPsFxuEMfvCK1vhyZUZhvJi9qstetN5MRqHcnZwDGcSkn4WARFjumcQ8K1LPDWDwdFECqc3R1Q",
  "key30": "4En62JpChV3tZij8JUa9DP4UduTnvSjtPthytsqk8ECkjFoSmBD9xEAoxrTwqXhmFvEMzwfdJhsakvfLXHHuufBa",
  "key31": "4TxgYyRCJvQ7GzR75DigpwG85x1xWTAdvn3tKYzQan1h1LMvT8Tc9vVbgE53Lkc33bJv4sThWbEfLc4xtheohuGP",
  "key32": "3FXLXk9sqJeL7EmsGi5Q9DcbPzgrAq3Sk7zaS6kdLx9LSq8mtfsLegRFjYNFmcAaWq2ETxcWyHKPaDxCos2c5mHt",
  "key33": "4ev884kZA2VMvqEC3drFhFeZWv33maSwB9TDP6S4QTntaU9gtViJGrACJm6iqyHRVUHUzv7tTqYtc4GHU7cmbp1H"
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
