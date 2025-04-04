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
    "4u4RNoQGYpVvoyq4Sfqe3JEoDunWaiWhxpgNhwgA7PrPekK6uQUdqSzjVycuHPSinyQFYgNwyzsazTRKFnJxPpHz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f7VZBdvaakbc8xBZXQQpaYM39hz3vHqwXqwsvmr7hPdwQx1WfevexGGt6AtkbdFSBPr9F7kK9tkmbXWWMjJ5uRU",
  "key1": "5ArAvVXA4R5jXBPuyfbXCpNnM22Y6BzGDipe7y4mjmzKqqNpTzNJSBsn7NVtKETKm1sxf7CL1VcHPZsNJ7EEkSWG",
  "key2": "2Ak7q674hu4ZzDj6Vo4yzHEwiMUWi9Jj5eV3hNYNJnQfgRyS69gMdxCXsR99wYV4u4JJAe4WPvqhQF5v3ZhVTctt",
  "key3": "2rbCFxRYvp7QvbDZh9doPwQPuj9Eppx4e1zL41oSEx3v3oF1jxa515uaKgNC3qDP2JBz9h5A8dfaMLEDNtawsjFJ",
  "key4": "3sRsBDw8RdR7hFSzqJaqokejGiJwX8Q2yV5zJyvq1wiLKYbenVuQhfakciDvwbGtLqbppSYTJtgETyUaPS8VfCzP",
  "key5": "5XPXSGs6z7bjkRrwWDFxe4BfiUeF3J6X2DoZL5X3PbdLQz1GQwKMnZbNDEfi7234WcvPdfPZJW69Sy9xWiCuqUpV",
  "key6": "4QtHnMRf4pW6K2jUGtAcdgvXw8jzVwdgmfq74oVrMxT1r11kqacCtoiWZWDgD7Ta9yvsT5tJdCqGE8zJAh2xF5hR",
  "key7": "53QUU3L6hHRa95AfwRbd8MH52YTiZhBx1yPeSQFYxBscBoKU3WFLatDK8wzAyVAxhC596YCUvYejvLYhr4uzPsbW",
  "key8": "4aGmwVvq6uBAx7qyengJEq7sXszKpQPvgkUpK79srQDBVwRzyusuLMbFPE1H6YLBnKGkfi3SjC9xWfDSRcXg2jZ8",
  "key9": "3WSU8PavFuLbMgcso8L9nPRiftzyXQ2Q79AsthD4y5fS9U85oDpf3qJ8GxrCaMRqXd9dfEYDGMWBDaQaT3VTU4tp",
  "key10": "4AEhsFkuRQqHdbkKEg5AhasaZmjAFESta546MEQzgxmiAr214uKGffVpGptFMxpTpMXUtypduRMHqviEBKj3bbog",
  "key11": "27NfuanR8B8fQWnyTay23FLsL2AAGe2DfEGjTuifZeBNyUwG5og6nwLDxvFZh6cUCebPTgWQpHGih8onHSHT9M84",
  "key12": "bvW5Kx1SVRbs41NKrEpMKGjCNBXbLZuWQ7A5ifwopRehffwc8mQJqFTtPCdJZpZ5vkw9ZYciahdEVPCkj4BPPS7",
  "key13": "3bHBEasQ2WwKfZH9BgFnTtcvMJFFD62NpPu78X7CDFQZq7SMJ3UrCUXiz1kB5nX4V5sojHyMkCacoZyKmfDyPHuQ",
  "key14": "26naBi5ZCjAZEwR77N1t8TRTE3DcdjJ2tYZa9ogp8sqdUgGMEuUQ3pWnrQbW8AkheWvTMKN31DhP1tZykvmfTT9o",
  "key15": "4T23YCba6nCRaRErQnNtw8KbWo7AJ3ZcZyuPDV9h5SgnwW5DkfFKxRtrpRa2LHdovmnkaxCxwdUaszRAXZWWyxiE",
  "key16": "535JbAEpNj8qwdNBU2v87EEQdxYXLvwz54EEENjR4L6rvd2eNGBt6B37yw8zfgBeu7xJ3cNFxGWGyCBFAJSPnscq",
  "key17": "4D86GqihoUSFQhKDZJjaAv1ptX6VxvTSNB3w1YBKLZMsWW9zL7nf7oZuZx197cypuz2RSMa85CpQtfNenrhDGbVX",
  "key18": "3QpC11thzLgNAf3REUbcjPTwkhX5Ycra6G2Wwx75Pk4fd7ZgC8RVoGEMeshX9q5Lp951Ed1uFMxC5NxzKiDy87ep",
  "key19": "5y8ioWhzJtZp4DbLrdVr8eUQs5Zij9bTSGMZBXPqyD9fwUdZYrxcthV2kQHHYqYykxfQ2oEqvzGyyZHYLezQoDRK",
  "key20": "G4qFCViYVyZ3XVdAVjHqFYXTQrZXsQVr3uVLK9NKpHQeiVWzDAmzrPcfvuz6ytcUoBgNpMbUvVn5sqApKWHoQNn",
  "key21": "3GBV8ZriMNgkNBw7PuNcqBhSh2nqv1h75kZhvPqd7euCBfVTqAmuSyFzBNYc7wFdKHkNtiY3jKm1F9Cy2PKnWHFv",
  "key22": "5Nuxyo2BU8aMnGFVcfuZVidjW9QNHV9csQ2qLueRvMbEHAWbkGoLSdsxdCskLeZfdDiP5dHCDH6tidsabko2Z9kg",
  "key23": "5nwd1RWnbxyqPm5Yt1NBNQ65YPCXrUeVTxqb2Gun8gHuUzHGFSaGZL71pFcnXYKYtQ9r2SWJgEyxZNK1KuJzFxbk",
  "key24": "5J7RK9m61wr7Af6DoJXuTjxt6cAd4oBVLa15Cyfbv9vFH5JBZSAH1bu1Lv9XNyoAZVtkAccKthdaUjKtm13SQeXS",
  "key25": "2TxE88wrdnSwmM8WTGQi2wRCNBbNyhCpFL2UEPGBA5gYxASVw8yR27ogD7tuUoKuRr4yDNHDQjZYnkRc7VY5uebC",
  "key26": "Sww1gpmnjWmwm1SUSn2bzvkKwEDg6PfBtHv6y6EnNGNnnUjMhd38jnfRoRRPogoWyFHSnVfSTkuWYAQbVrqgPTW",
  "key27": "xF4rAJkBBVzMgrgcsYhzD8oHd1UDnwbb88dgLZm1Xwj4kwRneSFsSQpPNWNGfTsYv6GJpNXfFTbRx9qjSMK8jdZ"
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
