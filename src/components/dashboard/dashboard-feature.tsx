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
    "3XZWapeo6MJj5Gkju1RTqwmrKtDZ6SkpQanRD1c4qssaGzo8pGho6RmFvYyUmmESgBjjcCdfZsxcy9dQunsGkJaE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mvhpGxrnv1NMkX5yxFkvHdJuux7nbKtBP5wK5Q8jpcaoGJcvbQVpAdQYVCjn9dBS58M1CMDEu1oyZ4nmdjq2dKS",
  "key1": "2FnW1DqnNusa3qfqRZwaW9qQ7ePgPHe4mb5xuW26zMjDvrVGXZyk8B4geWQc2i83g4dkWJpoQPbqqbswG8anurAE",
  "key2": "5W7f2Q8E5tzo29CKz5JiU9rw8Z4YKMjgNNJv3CXA6tTDyo9PeC2iB1NBFRZWnCVSNoKHAPusTXtKbERsYNKUzwgv",
  "key3": "XynbJaptzcsM7BnnaiFSgTSzBVB5u4jE1tCswSKgm8rhMNSr6ALv8Qf1eLAaUV8mGzJffsq6a2iTMtiN5qFYvgc",
  "key4": "7yWqR6RRwGwC9dpuh5w2VtVW2smpEy7b3Wk38CY5JYjEmVs6CEVSEPx5tcyX6EJRfgjbyKDhuHNGFtHxsqSesse",
  "key5": "hawTdHSTuBi4aiPE3rP6Hs8Pt1BhHeVQTjWTWuer4zF9pDaPmbwszWw71aBdRwFSVH49zL7Zo8dQAZKsGZA841n",
  "key6": "3MGBGFDTrd1H2r564eyW9uRS16bYWWo6r9JbGvjLHb15jNpHhSC96BTDDU6KNHJDKpjnKDNSpAa1xVGr1j1NbnKJ",
  "key7": "2Zemeu9bpkQM1hPM88HQmHA1JyQsF1azfrWuzU9sGZtjFvkrhBDaFvdcuFi6E6sBec6gc3dWPPF1QXzg4CRJheRP",
  "key8": "5SLwnAbJo5RqBwaAKvAJpTviS6XAVnA7nYgXnTPQn1v62RM6DwiVLLCYQahUug3Bz1BYZxyHsvcDZPrH6J8F98uV",
  "key9": "3mBRvxXniPAr4PrjtUcuyeXnYMDUymce6rGWMK7nrx46i5XPbucy9iFctEqBu23gzkicTyH83Tt1eCXH7U9DZKCo",
  "key10": "5UCQmF4jgHogJTRiVu7LdhmgFZWoLmZnBQoDy6Yo6F38EUWzPyMKbzb4WD6mCvyFpnDivWXLddBP8SGr8q753uPX",
  "key11": "4ftS6TV1nw8of2wzWchoxxw4f6efnCnoaYGqqRjHUdwzR5Ybg9F5SFHA7BPnwi6DS6Nw4U1sWv4tk4PJ65mMj5gg",
  "key12": "2V3q37a2AxJ75oMduUwQ8X3yq8FQk8VXWeDSF826gFsZ6gyWnCbvv9oSPsM37swTKxtFuAfyzi69eUwGr8xcxMJ3",
  "key13": "4qFFKTnGLrb9XjZDH8vJXprYV9rLMJaBhSdD3UChUBp8tb2ZYmdWhzKeRzEzjRdAh4ZKEWaVmMKF8H5JKczHTQQb",
  "key14": "2hFELecxopshwW5rSd3T6NxBzwnT8A5KjcKVzZQ4wdwU6xBDMA8ihFpG9Gmm89yvnzJwRRdBfeQnps3SQ7gJWvEy",
  "key15": "5JnowvtoYLzBM4pF7Pn2urp4eLDKcNpDhsSTry5SxRWGm9C1n4rLkyQSDadWURYtrZ52LmEvCB7isgoExM5c6A2W",
  "key16": "3hMaQAwfYw2anD5MXuz6dWYQVnha433APd14WptjLrKg7ZiMEec7HoPbgNmLTPwQrAAX4UgWnsgARKZMe7eSfPD",
  "key17": "3PvEK9bBGyRA6qW9iemL9UT1qT6jcbzPDQmqCxPoHRJNsyBcq5vQbCHwuW6DrwRVFWoEzcwUqNBPEaBjuztRK8JU",
  "key18": "4yczjzoojMEYbfotBBA1mH62epDUrxUhzX2MnAW9Z3Ts1AGVivoZiCFPjmENSMV4ThPhECZtxKiAmNhr9L7qhbed",
  "key19": "4jaAftLbJQLLHBu5mPLQmJKjocEoit5fV5vyVjcPo9KG7bFYvsmWeXjmZUf1kXoUPWrFKL9m7Ctn9DRieXfy78kJ",
  "key20": "tq5doMcNpjJj9xi6bSvgE6neSeaLN7ATzDSGHC5uvqWdQd9mR7rwfBbeFkAWaDZyr2v9vqzHbdHwRHq58ZSjNMf",
  "key21": "53aKAMemt7yDayetWhYRWZbrp4shEFSFM1yVSHXzVwmdEM4pZA5x6NnX5xmPj6yER8Hp16eqYQQQNUzMnCJisjEi",
  "key22": "2iJYSAc7kCirT677hncatxXRGrF3seaHCA637LvfMyTTJREwcMmu117uzhRUUw9VPNCi72aCm7uUgb1J2iFagng3",
  "key23": "3HRNMxPMV3bZq2whCdycitcXQMk4bsmkpuqpqjdgjHcqGZggdMf56B7Ag5hmz2EsvR78NXyCdyUNbWx7KCieM4MR",
  "key24": "4C8rnUVGsRMhkzpxgGp8Q5cC7H4poU1bdGGkbdEUQdXVQmYay2WWC8mSEYh19ya94B5MxvpqCgFiYURfAYjAcSom",
  "key25": "3gMKVhxbvLcBByAqvqQ3wm9nkfvAkJ3hogFdi15pySTbUetqyAfVgj3iaqDhcAYW48sMFCFZt6a2BSp9WqM5dfyR",
  "key26": "aYQX9hLHzT9mJ8twcyyqKZ5pEWhqcegn2LEHA9p8axr2W4etpY2sV8Exdv3SeuZ6nTMT3A8qWbDmsJ4EdbMEeEm",
  "key27": "53sLCe3zrWSxdMef2wQ3AvZF1F8W5Ja1EawtbcK1K8XKw577UQrBDBe4BE6tRHMiZoErjVeGTfxcuX9vabPf52Gf"
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
