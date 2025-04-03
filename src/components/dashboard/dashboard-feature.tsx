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
    "4TYFc9ru5RqaY3U15pPpDsCp8h5k2jsFC5GhcTt5pLerpjpB6Z2RZUQ8zvapPYPSyKDfibZ9PDwpkta3ZryY6mwq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FpJeApb5jbYE3RWhZe79z3kYEUNwLGT7v227JTZM9yaAgtmMnkToxK77j3bNg17GAXUW7iCBivqLb7gEdEEr8Z2",
  "key1": "59NmFwSuMHdHqumTEpCQ8xAdYfVS1G1WAgPdSKUyjxwt3HSZtvKYwuUb7MtcwiqGegUxeSSrP38CzN92gj1QNN9j",
  "key2": "5NriJZLG9ApjZAGuKuQEMrsX4TnMhKndQHWojPSnpQEA5c2ddvXFj2jsDRZ3ohdJ7ARz3Qyv1YUooKMkdWDkkqik",
  "key3": "hCUqi8XEq9qqbmhGtZvEdKrxfopcFkwyPNnjGebdWkx3BDtkhbXA4KueoDspUGBC4KfkUJnNePC6JA9jFZmvJu3",
  "key4": "TM1vXQDqrNMxeRGU5izdyz1gZLoHYucVk6HvMzNe69GGeqs5NV99Ew17sh5ApqWecNwhzW8vdCV5c6WGQnJHU5K",
  "key5": "5z9xTe3ZbQT2KK5ccpQGKivVGE73TADE7FeV1Q5MbLzb55afxD5S5u61dXJsuJnnEb19QmsbUo7yXWsM9ES2eGbu",
  "key6": "3GxWWngMp7RNGYV8ZCEtZyiy5SiCnCvFRsDZRAmH5ZtgXpEkZ9f2p2NMYGL4GsXL44v8Ltg6hKjniifZqLuWMgDU",
  "key7": "4C3wYSvgwoYrGkshze3k9TMpitn248XkByPZDoNjnjkyA6SqG6nkxHmVNRZH2YprVM8TYBeV7D2QFGraSKvQyLPy",
  "key8": "T7d76NStgJ4YfAFub2615ymG1kzaHfv713J3iAwJweCPnjyYw4MYKjWDNtSrB9iVrsik83Fe5ksauWotvPUoQMJ",
  "key9": "2ZvuHn9iqdNiXrj9mMjE2E2yV2gUTtoWJmBqgH3dHTUWg2ACPU6KrmZuH3pgrcvowAo1Uz76NXYxrTTrbN67HyH5",
  "key10": "3fzMkU3FsYfasdR5DnKo7kttxWchLTwPjCeLoQC6yeRpGvnuPEktNjUcxTLy2uVJTP7g3F5T6ck3Dm1MzFqjQq3X",
  "key11": "3EM8YfNhoLmWyfja3LGwucmZFrzbEoPTYPKxZspysm3dri4ioM2AmS9QJLGUGB8AiJDbTCPz2CgW8mEghayoFTPD",
  "key12": "5P29kxH5iYgGuKZrQeVuQHvK8RmWVGGdWrDKd4UxA7hegsb71BytYsVZL2gWzi7hrCpeRHMAh6TAAxxSztfY5UYe",
  "key13": "26YXQJ2s1KuuifRLgwonGD2TaxMEe9SiRnbXikQkCczpRwZgSBJvoxmf1HxVqmBFJYjr5zUz1fWGsDQiv4eFdtKB",
  "key14": "5S56JYTiYcM3BA8UGPJeuUjFjetFEFVbAcgi3ZKbRZBMYkuyGAEirj763naEYX9jBgvKU5pxogLi6ni7Me2B5w1n",
  "key15": "4vNXo8F6BdHwf39a8RLi7nhcjvdaGKKmf9f2Rr2TaPVG9kLJj2B7nybGyU6BqcZENF1gmWiyczK9HwM4PHR9nZ3G",
  "key16": "25HXNdZt9MNnv2K6SZt6AX7X8mC7VPMoyqfAdnkoizPxUmUytojpCpiqrxQusyPbXMzWsbEXvszUZtAVEJRSriY8",
  "key17": "4coADCU4BbvqseJeN51zUeZK9M8bpp2bHtrYZ9ouMUJET4EYK8aNbiErcd4RszEGDQtMYW3iKBNJVSrynEcnX5Ju",
  "key18": "e5ohTLoKZugtoMuHeoxKfsDXT73fgH7Pg7euNh7R83pESZwUo2Q8D9ETy9f8gshhyMtcvtct6CN5fVZ6yK2zsjV",
  "key19": "63dKR94dM19bEVf3TvYCmJLB45ZbhmvCtpNYRQ6zUXRqtC6APhAc7ya2qvaBgbHLPwgPLDhrLbUAmzQopLKfFG3Y",
  "key20": "5WDdFL91Yznrt8QGgx2nB43Q2R6kuEPwh5KNAEiNXP52RF4a8cWRgX76yAp4U9K1QLX3hGyckWgUZZ3n218y88EY",
  "key21": "4yeWCQ6iQNfjJRz4xf8DCftDN5TnLZBR4fbzYXxD3RTdgy9F3tHmjC6VfnK2ZQ2XZhxNuZYfwfuT1q8pr7VvaD5F",
  "key22": "2U2zmYHn1nvVBczop76nhKrUGRNqNKCXDgvjsqFtCkP4e73QPMgbA7s3osrKX5nCrpfUAmYvdKfPDubwvb2gYMnJ",
  "key23": "43N6GbaBpHEqzE7VkwbQoGp2TsfWuea8ZuA5E754EFvupwoZk6iTGByzGYpLm7PBWn2rKiGnzxGZKGDVYEnzQY9c",
  "key24": "4JUw5kg6tm6KyDw3wYUNyZgyMUo16R54Uc432nc6UFYh9mLU8un55Y95GhRGJnT8PxPd8M8PZsnPW7oK6HBy2BVm",
  "key25": "4gag8rJYi9ZAiTiNwAyQ9Myp5mepWJ8ssuguMJ5yQg7q4MBoQeAC2mze1LjGgYrSCaKPVNbVmLG1VvcxChQQinrJ",
  "key26": "tSwRfwAjc9kVQu3JAfv7TwWrQJriQUTFsVYY644P8RYb5bet6UjKr4AnqtqgvNoisPJzHDPP95n329e8xktQGur",
  "key27": "3sckhadxzD5AMZnXzfYEzXiHxKcqpk8ERZDoYqqRc4BMFoJTpyN56LMfuyjiXcHjqNB9HSxXtqL2G4pwzYNUxJQc",
  "key28": "5nu7k2vGTRNQGHhsggZiyudpCMyCuBKjc5aHSvaGFE7xZXVA2UBUMsZ8K1VQRwMaWGQsTwvRtoyDR2FLedNY7he3",
  "key29": "5XCBPWFTJzmUrjxx6DPQZYcSJBgbHaM2vNpCs8dfgE6UmDzXgM7Mz4uHYvQan33KMFEVmzcQWZAgnrygNYrWpUmZ",
  "key30": "54kB2WoDfhuxiXutgPjTPrK9SfWwHZCxwJspNLznmCjRJyuVsm2LTU5inEYDwXxh1zkZrKKvbskNf14VfMhD6jYe",
  "key31": "5JsYkLBaNTjwF7ZViUbDzy3Vyemk979smQWQoTk2RH5bFMhKv3xBK1TeR6SsBFwvxxH28krsVPnhYq1RtWs4YbYP",
  "key32": "2tM5QuC7mSRffqdGyNxVC4QPzk6Hh2KfaNowqn58PnKQgxsg2ZNWCGjHRSs4xZzAQqPtdxH2D48HvS8wRADHj783",
  "key33": "2tULQax5b42BXdV7fopMCUXX1CyvRs1Tv9NSvmFaePCTwELgjFZva2vts3xMyV19mSJ5eXwwvhchXwtgcXTfCXd8"
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
