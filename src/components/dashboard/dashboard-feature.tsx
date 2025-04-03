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
    "5pvY7Ct1t55nrzuWmkEAoCNrUL9qWJD7yfM9pYbqAhQHVFiaUmRBGQubrw4exfynhgtaMBxKRGemhRVpnozxd745"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V49bzQWFvToUsXWDyns9noRZ8kuGFNNym3nTLFBVvEKhr3AAVeQ2BKgMWTL63v1JY2KJtNzcBB2SbYjRNHAQbnB",
  "key1": "36d7uHbAwgBmc2ursynCoPYd8Ct1ymEfXTfworF6arGZhaApPyKtWYcW5KZfYikg1ZTC6db7NDHeemimjAwJFzy3",
  "key2": "2HcUUYhe1wQsDvsXdHNZbsiPinDL7CAK1PkxWfTJ4bn2WtYh3SRFxSQGwU1fGgh3TDPz9bTb2t3KUp8j22rBUo6Y",
  "key3": "3ri1Tpciw3vP3EziHqAjznt45GDhxDLGid2FPeMJifHy9ZMuo7JQDH1nErkUQyzbKpYUf1fsNdUipvynLgNmSKZg",
  "key4": "5mjJGsHfF15yPtZhMmTfVSDxvGDWKqNc1wAnP6Y7FijXNDm6Uxy52V7dH95GKzc9fKMo4v8ZLd9dpqdksS8DAE5p",
  "key5": "2xayZGFnRzu5R5RBUQ1kvrroW4vQ57cD12CgeNsSbaAMMgiPX62Ninj52tP4PXT1eXmCtdV6PNA3FVgrBFTxAjQh",
  "key6": "4MkLq7dppY9MCd9Lu5pu83n9Zn4YxcY91ptDrVDsoonozdVjbizCyXfketUKfoP2UTUkNUjdV5tEhy3rKpmCPz2k",
  "key7": "aVCQHefcCUpe9r6KSDbVD6QQRw9JDwgnsUv9Ad4xnSCV62eLQRpRPjB3YdkXMX4VT9YDjT2zBy96jwtkUKEt7xJ",
  "key8": "5NpPwvXPz6swvwuxmD3tRF5hGEq8gJ2cA8pFywNuKif23oWvUMC9TpmcPXZGb62asSZw1eoxNGdMQc4sj1ULNus3",
  "key9": "5UoSjyodZDAjmUez1WNwUPXqDoARRfPHhySzoqw3U3fZ7WxbQWZ5j28MHww1SrpJkfj7Rx2kcxHmPB46K7yNjhXt",
  "key10": "5UtsMx4ewPF5HR3nw6tyRnSgNHcKrYDp2W8u8nhC2TTqn2fBBMzQmYCnuxnxp1tEWGcsJ2iEYiDgmNvWriWYZHS1",
  "key11": "4LpBan6NByKse6WuyTFZoXRQ8QBBvfMvto1qYfbU3evnAeYjyKqNBV6Gvqnn9LyEzfYVvGmk2KGnkiFJcQNXV98t",
  "key12": "45K6h5zcjbaxUyZHTp6E95NgFd5zXM699mpFK5RD9KtL827z51NCvosmdK1xihb2pS9Nw6obBKhDrBBMDCxg9ogT",
  "key13": "3qmuhdoQanFQ9HVZZJ4UvJ3zxMKpTS5WHvqTdt6fjdyqADqimhzKgHzRNuimLfkZHXBuRrLXGnKhoXxxoGP9rvM3",
  "key14": "5YArGXy4yoosjuenhScw27vuvEb83qUkuReXKydrEsh9VZKjHjftdr4BB76uv7R2y6mcrtLKksGLDo3rK9TwUANR",
  "key15": "2skEX6F2TWd1MgapwXzeMSFNS6o6Nbu2wEnYkoJZXS65fYohF8omTEvEHUMA6rFhqEDHchHaJyzsgqGjeBedBdTF",
  "key16": "3BDTKnUyVtE7YyfJLJaAAAPPb2ybWDxtu1eBktB5X324KNE2mfuDM6vCHwqMNcLLU2BdfoYN2zzXQxj4k7MsFmdm",
  "key17": "5LZ1bfhHeRiqyYKfGqPd78NUHdj3sXWLwQpa6a5TxrKqnPUs1QbdreEQZMTP8wrRzDBiiHPrPgTQN7UwcGmePdLD",
  "key18": "4R7KzqBz8WhdoXDoFoBvxAMqVjYbSMbZMropmf39YhH8j13TNshmKqksaSB9fH6DLGSZhSauAWFR4ikLzfJrrWkE",
  "key19": "4Z3dYkeYchMVsZwxsVY7pNN4F9j5cLKZGAheGnBaMMWRT4s55UXHbqAkmziY1jDL4T3Ad1TWmHLbNbqt6Ki6oRH",
  "key20": "5eHet5iYCsxg8cDu6JtWiueVd4QqzYpMSvjTxk3QaaFZTtB2eAS7JMf7XwJXq689go4qwBasdWuf8bPPs1UJnqQQ",
  "key21": "48FC9fF1VBjSU7eQmyopM8nSoJzZnB331xy8kUQJLsR7SnLbmGE43z6Y628pDopvagAS2AF68qzF8cvcdmJGtXZC",
  "key22": "5ihUJ47zoX5Tzn4ZfqY2U52gEiWqCEeMdk5b1BS9AL241sH3urFJxSAufzgKnULd3VmDuJWf5W3pMf8WiRfeh3pH",
  "key23": "EBChjBXRzeaoeFX98ST21NxsgFcoC9kNnqrKvMES9ZjPGb4Fycu3tDQhq9WGfuPNntYN9shYaouiX1jL4SoXjPn",
  "key24": "2GTukGV7FEfazpPYbH9gbC3ZKCtGSJ8Fx1agzkaGS9JzMYTS4Lps8UzPoWJTT4m1cgm9Xnv732Zg4uxB5pjMsgDc",
  "key25": "3GRd7eURssE5xS8JPFYupFBzh3rPQ1w3wHR8RXka1Ad6q1mTjcScSHwJDtsG8TWrjKnpn9eaEsWyF8PrQa3uWL17",
  "key26": "hfMKVKEFCQ3oizN9c5dZazWukvLwcbjGBEj8oCjA9RutrvqedsEtSovobDtj7PmJ4NN9NFpWsbDNLdte5e6fK2Q",
  "key27": "4HuHaDs2DjxAp2hrtd53oXLQcKBAQdfkdJwcP4dnWj72siVn3XdqDPpefQorVe1KTR6XcBanADimANFuf77SVowf"
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
