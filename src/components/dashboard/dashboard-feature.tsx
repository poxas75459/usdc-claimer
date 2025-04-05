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
    "5FRgHqUCJfJ6WZJ9U3DkEmoKa3aqLkLRJbqHaQd1ANt5ScZZXySAGZWSVSiRDA7vbyeppkrHVjQwN73DRb9PqRKK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ggce7wzk4AMXCetowv5dfP4baUmmS56crM5ReGMmzyKWPCguQ9ajPceNLsiaZ8ZtV2tyXNvikhEtP33drFp837e",
  "key1": "51Xrho8VYAH9gHeeCh86BGTfuCK9f5pJjaW8RXgt7YYj51Lo6oq5JL4ZahmE2Rqa7XYWy9oZnrRTAajCXqAc52oH",
  "key2": "3PQqXiHVwkdc8jdW4cN99w2a2cu6gPocbk8mycahskMarSeP5irFJbs7q4yDKToLgrHoSMDSy2zirnP2hP7n13zP",
  "key3": "3GHAobuDMaFhfTEFAgttc9HCr7SRqa33Bei4w1TTRSiLbRzYV4TG6AYEiiLKKfCik9wYpxr5iauXnE7JYv3ejhpS",
  "key4": "5HX9SfQPNFamZZ4M882ThxskhqkRNvQjicrDJAeTyN28kwg6Ldat15uCPxUG44ZM4Eocc2f7T6tYA9Lhm39tWSjU",
  "key5": "4EhtZq4ci8FapyTCVqoPjXV6tF1LjZQFnVSLJyxs1SN8ugE8uHKU3ugjsKZ3Q9eBcNo95rM9fDD8hGJKhRrmLZQJ",
  "key6": "5zUUQc2sP6aAFE9vnyJi6vzwL84vitZCoHBErwrWrRF8HSN6Mede3ZyP7MduXJ8Ep1jPwRtZHQfv7o6gV2FQMenq",
  "key7": "337pZE5fhBfCWvgeA7FforM48TSb8TQcjJcm292m46QeZTrQQHnwMiEC9iXLzrKYbFWyT4dkD8FvMqFpJW7APzNe",
  "key8": "N6nhpi5MAqSf4JdnRTwEiLF4BcYidafBjwfSD9N5E9u4mv7NpMZTtAKG3SEPA1nzD4z8m17gVqxUkEZNBxteYcb",
  "key9": "3VykvDNQkeGjybWHuZo2w9PEubBbzpXYVKN16rXdw9V2sTSKiCeBe7jSxpXqbZspccM5auvKfEuMDYKzkbfWnbYk",
  "key10": "4dFYskp8hoM72CERaEryq3jvFVTtHMEGqu7RGRShLV6WVX8Kg3dWszG6g5WpzqJ3P7qYnXYs5Udnqg4Jpey3Gbfv",
  "key11": "qYBNGwFUU1CthKYeHzS54XT6o6cAqcJ8MCeCWMxapxW7DydHoTBoCMsM9nhLC8bkjMuSpsTRxPDsQj4fYZdrSYe",
  "key12": "52t7nmKqoZTj3EDWGHWkMuxjmR2dMRhcJaWwSLQHWER5RC313QXYdUZDuWRopYeeTtNFhoxmxR6EdFubJaUcWL86",
  "key13": "3X4Lf7V8fAVfgmX9JvJBjwSbb1WoHi6fa7LjgAdejn8KG8o7sfjbJK5vhbNk4d8KMyWc8Mco9svV3282nNYUcnm5",
  "key14": "5XbddAKismggrCHzNhKoRNR9ynBQ8AsViERygYZBsHqce3QQRSXNV2pL3WKCE33cjqRji6Q2boUx96JbwyqW9QCk",
  "key15": "2yKByu22vacC9uEA5ao4NZFGGaFKMW38wRoBC34dKFUGa9K3Pvxd5vJ3ms4Aqe7SoWLW9dCKZnrRnGBSvdZ8MB9t",
  "key16": "5Jzw69KuxzRohQUdFw9pijq4RQGr6EooR58nNMcUSitSkV6gdfRv78WeaiTL69FYtVJYbZEoHnnjSVdyFTFiWvLo",
  "key17": "4X4rW7s6dndMQYKayzL8WatLt1DTjf3kUt7Qpt3Ly4gEDqtun8NRcoa3VWKuiwRrZqZU9it1xwrHL1Sygp2aPBp9",
  "key18": "3iiqE6QymwhiZcGHiFT3uEeRG1mQZ1VNx5QZ9pJEChpN15RaDftaJF4Uj7qvv7PTn9trqbXYgfSMMB1dkt5D2dRx",
  "key19": "3bvTHtHrmwmk5XaHQDFe9J6SQP1d4cqgfYbxbudN5J524zye3JzpSW8fCZNLD9FhcBkbB12wG5vbobH1J6vN5xen",
  "key20": "2ScB7J3SikxuZAFAJhmdgGZHBVEN4w3dqQwFJfdHqvHViwYWwE1f5NS6KveLnTC9GxX2T3kk3jcu8QXhEwupg5RV",
  "key21": "EKcuB35Epm3CbW21mHDJhUchA4AKoLBTPJDLmW4dKNY6JwQ55PuPbhBMT5YgZ1e46WeqzmTpu6KESdLTKyQkNBx",
  "key22": "2gtwYWUbsVgaCbEmp81F1kwYFPC95QX1usqVPQJD4ZQAmviSGHKAYVDkNkJ4v9fzSvqh8oA87ZZ73qfxdRQyvJz8",
  "key23": "4yNWC7GAU8DyGbQD3R95DHn9P5LyBrRgx1Qx1YkqK5io4mbfDxPkqowF2Svtn87TPYNe9wKXvE2pyWMCrRwzvSbL",
  "key24": "34acnHtB2wtJKPDkS1r1J5jHynQ2ZgKyJzvJtDTR1JaKr1eVxXJSRnjiyTdVZMCuV6imDUES4XSmtPHW3HV8dSBe",
  "key25": "3AMSMTfwkwysggi3dPttvSNsziLBJPzUUaau32qUN7MvFgPYWUSh8PCQm5mX4HPc4nvHrFea8mFwaZFK7WEVsGSJ"
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
