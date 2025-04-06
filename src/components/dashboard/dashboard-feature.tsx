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
    "3dRDT92ogfkGtJ97eSpqMEbPT7DdKseJ1Tgwa3r5N4t9eke4Y1a4S6uFikjFNQKUV5fokJkGV3Kep52iE2LRomfh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ge55Nu49fYJUiNYY75C3UdiyYhpMYitULb7Rmdd8F4YADdHmJ6RxW2BAwkVsN6tKmPFHRmpua74PBiuiifMDvVd",
  "key1": "1cmzpi8rvnHZA1Mb6cdXozHbrCWYLNSuwCV7sNJGmduXmnpERiFWL6hA35cZNPDVNvjedWM3BuX2AxXJSvDNcJW",
  "key2": "PaThZPw6FaY2Hwh918ratW9NyqEUcbop8DRyKTw7xv1AbURVauFSPAUhenqBBrN9Ancaurk4MAR3JWE5oypEHfN",
  "key3": "3YQonkX9eKJAzExKMaTLXZzpLrd87vF1kcwQQk7BrTffd3LP6FfTEYGiH5ER8MvdCudNwM2QJktMgpMXzcbXn4M6",
  "key4": "3A46TjUyzYetTJeH47QGD5p4wVqonTedWCcCDkL6u4uDHQLroKL8mZv4Zy1gsVqTCujUL4LC3cTY89j1T7GLSdmS",
  "key5": "3cBV9vbDHt1rC57NABby3BpNcSc8JnBiJAsCxuRJ1UFyMMXbjU4aK23fmmUAAEJ32eo3hUbv5psiUcSe4HSuP5op",
  "key6": "4TW15tsTyADZptsE2oyTi8mZJ1ztLXE93s29tGWo4eiR9L1BEmXdMMHV7Dp6famLeentkWdGZdeHhXV99SqndjTW",
  "key7": "4YZXwfiyBn8Na1hyb8f8sQckubYrqP489jLyrkNxeJaKHw5XqK8hH8jJa4Bc4YHhC9rKZrUcxot8BezqSawHrUR",
  "key8": "p4j3Wpk1mk1twex6x5ZPviKmLsehtnUUYJF6dvsNGXmk4CHamTDAciXFCi7wvAykfqg2waW9vvwgyYUFi1xYiVN",
  "key9": "3cXcCBZLvS53cDNNC1YdyMs6UPqAcAAwEkRk2uRkjhdKYsHX2UZCc4fq8kfZLhx5kodxf84ygYGABVVFgZuRbHbd",
  "key10": "5t2te7P2xtvShQd7Y2tGe1BZt7mTTR5JgBttCFqPCN2wxRNKoAYsKfFARdvsLBMM8Ahh2AqCvPbLGqKYQGb1eFyN",
  "key11": "24LMJyEVDW7qoitQzLUpcK8Nk1reUFUY8nFDpzNU3UJwiiv7qyBJ9YqvyQU84jeSjVLoC4Yktiv9GaDS9q8DRYc6",
  "key12": "Be2M56T72bp4SXMswDzqPhfhcYN9Pa8Jj673FTXDaKUo8VR1negTQZNmLaB2wBvisnnrV8Ec3E8R93RW1E7ydhV",
  "key13": "5Jx7JjqdjAXRaSDRS2aR6PnFih7kcDaeiRGXzAS2Kt3YtfShNTJMcNfJFm6U4oDTAgFi6btcJYJCnzYd4SHGTTzY",
  "key14": "4m9qnsq5mYXG7QejwFiaTD5Sk4idne8hZhpB1czLu1e2M1isTWZhf5M4UreATDpsCdQa94fLF1humJE8geK453re",
  "key15": "5W3upYDn68hqBtqVYkThX2CJbeSmSbyAgrNGswS1hkrxYNZDLdMxTDLEqMZpsScHvignyuW1sH6obLxYwrPN6r1V",
  "key16": "2WkTXoF7MHrbfB1E8ohYRXreeb4phoWhLxS8P76s61Aj8Ty5vZxFymfMJ2cU3c6iS91vmbgDQ7CD9F3iJ9wHWq4c",
  "key17": "5kHnbEi2KCRNLZKE9NKYK5c3PmHqJCxXzcyef9VvU5nD89yyFU7EcNFe9RicRkpHa2WCnLmh6Btf4sr6jBydwowm",
  "key18": "2qPs5BBNCicGihYSQaimb6JJkvi2GDkJ6P2Pq7Dis5azDAu4nijgjWuuJBBaqn98rJFy3JDYYsTVLBX9qctbancm",
  "key19": "XW7dvtFjjTX4SJYubrSoyxn2UZEpc8U6wvzbf9LA6ihEhBD2juAgpEBz2nuC6C9q17iWx6Pfc1RN7n5EzLWmafG",
  "key20": "3b4HwQWLQg9MSTfAyRALTvdQEL7uBaQo7R7WpmvHfQDb5vcsbmWg74YTAPSVoLgSdTd9xYWbQPCutqF4SWbgZRke",
  "key21": "2ynkgzEH1Q8kosGET7u9jCewyX2k8eGhjssZPuWjR6QW9Afski7DK2DjPvxCYhzBBFdQHMN755ZQ1z969N2dy1hk",
  "key22": "2VXgtU5RauYRZHoQFisUwhJqREs26jimBuc4KMAYeapwphx11GFTyAdoiF6FkBhUGt4ThjgDmtRuAbF8WHkp7a5i",
  "key23": "5wNcsNCvy1aZfTp3tQDvNJR3SURtSZQJDUJGNasVUuhfuEGhk4BJu9rp6Us8MHSLET4NtyTcDGUfbtq1tbHMDDSH",
  "key24": "4WXLTpCbcJzajXQmo5cMLcY3ufczgdKhJ2qBsQGq5Yskj9q7EuWLq4YCKMb9FhQNYZpeaq6fHSojjnrduGsWVCju",
  "key25": "5yvARDTaiZocYuUjWvzbV6WYBqyxXcDzMU6Fuckzwc5LnTVrwd2TD1x4hqMZ3TxFEwR1qDcgFkAQV69VNt1hFjmU",
  "key26": "cEMcxGoyW95Gsw7UkMcUWD8ikEg5Q3mc9GQAGwYRqaZ7ZSn48QnQWEkTwHrjTR9DpfSCRL8fK7HPVixfDThkyw8"
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
