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
    "3Cnfc8F6XkS9ypKaFjNUMiyCwRvPSaQsQSgjgns9F4HVLDWWuej6eMKdxD3z4WhzGqPP92NqSFLFUheAVUuzumrC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kFeuDHfuF9zc9b55jjheQm8Gw283XHi2TK4wuHsVwmiX2xzy5kNaAvuH58ptk7KDTTA5mVCoza7Jr3SNPYLZ8t8",
  "key1": "5hjLre1suzbGNKvHxY2VqBCTdPHqbHgsNygcE8GWMcS5i3SzGXHtYiWhNuZrxYU5ghuqvKDjkx3bJaAiKUvc3uLQ",
  "key2": "5cFHGSPLmqnAqdB1TTBTwr69yJEv9SQBtqMR8ppfGnKgLMKum8HgtJYWUC7AQfbAdXoUg5pmi57ChitZaHvYYrAm",
  "key3": "5g2oprgyoh8RnnWpKPhxP7hR1v2Q3PdLBa95Qho4EEdfCaPNA6JtcAxybm3p6Ya6R3M4SrUycMpjt37SFwS26xTi",
  "key4": "5v4h2dmGSvjkDBH2jC65aBCaSt7PNHvz1yt6icxmdLX1hFffY9PyWef6DPAfV2pRUPnV6VDuaSThS44t6VZBF1YX",
  "key5": "39TKe9EYTsAtXq6Ryyzueoz6JMTCiRtATN2xPs1FxgpDEFSHDhPUTFE4MtUh6HWB9PK9TarTKML7EbP8ZVNQYs9e",
  "key6": "4QET4LCz9hfaykxVeCVjFvnvttpdjXVt3J73RWLBdNTdCXNDFgNjS8uwHtERkjWkJ8xZiysRTgd4mTYjCGFMMsuM",
  "key7": "5bZKMx6u33UBxXgg7EV95LBosaxAYz9tHmESzZwwFNtoVFw115bujv1xG8pEJUr9Y32CGQT2Gz3S3nJodREbrdKd",
  "key8": "5aEjcXq91Ykg12AUSDuZ58jhXHqun2YP49Cw3a63SCfHfnNUcjPA787gvkDXAfeUt4HuGMBbEkE5s9CGQK1JpQ2P",
  "key9": "3hSK7S8Zi9yKAhNHMQfvrKVvjpDQrG6Sd4NY3yoLzM6uWDw645UWZJ4QCEU8zZGTgwpheh9rdk11MPKRbqoGdwVJ",
  "key10": "5vHwdGaagtnXDYY3cbwZbGStJLFaXWqDmfssoSP6P4QFZjobw843ZrsA4yshD6WR8T3y8NoY3iNFF6YL5QfAB29z",
  "key11": "33Ddsq2cdYQAAVmw6J6PFyjFrnSdKwUKKCk86mpyjsinjmTR93CyC1pYR2Lsvz71K2xfNA276dXWybLm1EiU1Dg2",
  "key12": "2ZrXX1gnae3jFM3di2bsZRMQdqvijdpLYbGpGrYof9zqmAKwUkYwXg44E4AwWfpyFgQjPwbsShQuRbixk3JhuAHX",
  "key13": "PKDjrAn2LFWw44ALnq9m86XaB4f5J1ycFRSrJxjnnK3aAKVHZJJJvtmkijU1cpVsFcomQ4SdGLZdxLDKh3GCym2",
  "key14": "2b8THUhKjeKtZkVQ57jDAbox1NDpMd4PVVowvHx97WZ12qLBxS1q9f4NDHCETwJj34m9JaeVbCnkrsjpgmL5n6Jk",
  "key15": "5aZA4GaJASTCQ4N3SkHDtv1B3BLBUWGievV4a3z11U9FqbXXVqSd1RosaKQp5RrL1wnAAbdyxaGbVVdHSwqPcPyC",
  "key16": "JST5pdWX5K9dmzqFA4pkddVevG5gou62zsmuEzLKMJspJUuFFr2oedo9iEKRtqvaabf5NbBxyjexqQrdXfD1ZsB",
  "key17": "35vvgtaJxUuiu37KGLWjUG1Z62XXr61sxw9HSpxcQdPkVgpJQ4YTCMsRadxrSxVwdVeeaVSEEf9NRFZDA2tz2BYb",
  "key18": "5y1yrMx6XUL6MhF4aDT42ycHVQFhyUCzFkKYA6KupFcxhMUfCqPk1VeinD9pStLXhkJzy6RjaaeRoo9aS9ubVHzg",
  "key19": "2ov9BQhjcJqTRmzpVoW8F8qVMTCw8xx9FxiiLFd3fMiMXh69HmBgZfE5QkSeJzfPbLucjY9ByNbLN1FqZwBECHL8",
  "key20": "2aCwRdX2JWVh8qZxVwuKpmEX7VTaQsgvxnBpNX3ABTuXZKwvNzpdv2YLDfu9myMVAb91yHqmEk18VXPTjvrBiKsZ",
  "key21": "3sMfEZyiGTZdzCJHhzAZpygUiDjjF4vyuotsLF9wY8P9F3sP8MXujWoRDLBQHXpLnnC6oEiQQVtDRAALrr6EQQx3",
  "key22": "5fB33oxjhTVu9MWvuBefPCyBHXE85EX9TYjhpVc6ECUaEwB9UXVg1pgPSB9xRtpGx6MEk4pjHvPWuyW1AGaaW5yf",
  "key23": "3ecSKPFHpHp7xgaCUvNSFQyXvE5PiNTutiVhzY6auff1QKJHSjbQ6nQAYtYEXq2Sf1MZ47BmjYizFEWBG3AzAGR5",
  "key24": "5CAULBWktnSPU6oNeoV3NYVSWgSLswxCEXFMzRdEufdS4PqqzHXR5biqW4WrjDALqHxQ5M5w65Z3EQuoNHCnAnNZ",
  "key25": "523LggoK4LN31Zk3Sus4oxKeLAmH9k42ZyJLvkGyeopDnBq8SuzUWmEGZwQQiMaPz5dMQh64e9aJQ8Ni27B5Cd8g",
  "key26": "2YVWnx1dysy6WDZM6JBkiiBsS43r7YnXYLX1vB4v7Ku6boBD5ukvngctmBSvXfHorjvMYkzx3FjPxB68R5goioKa",
  "key27": "3WkXhiqsEpa1KbQJeas3YrRbugXxED9G97Jd4MZxqVWb74Tkhehk1U7RsajjXihcW9ZyiYc1pYf9VQLxaDN45Xd3"
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
