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
    "3kdz74toYNNe3qcX9CoqgHY3mfiauJNuJcj49e9a9CGW5ZdMEBFRicgiweuHeFJfnFmi7cfEc5PuPxm4CSnLb9EN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oieUTpjKFnHqq9j6f6qD5b72WZGVvSzbM28nx3iSNiMiYz9AAVjLbiNWiz2kRCSHVJ2BcVAj5fNp8V9YHkfJifF",
  "key1": "366wTgU2QE8GpduiPMx5XjLNGyphsaavY87aP4ojdfR62vNuUrB84DKmSdLdJbZxHZZ6NEYEqVv8idQHoNa8eEge",
  "key2": "fGsTG3wat4xAufSibkmMJLWZnXjYjLLhKeDQq2Y6sxsEvmrihtN8cx6wjsqhc4heo6zBeG3Hf79TEm9XHWvRp3k",
  "key3": "2mgnQRnvFCvh3nYTsLCcrkFMuorAxzH14nnHTJUmH5Sex6v24H51zccU9vsgEE3dkJNa65EqBXuwng6FnyejvAxg",
  "key4": "4aV7jm3fxJjKJzsxBH7A5v3NFPy9pCGzio1nW4Y1cHug919EiosY7DrLPK3Bjnn1DjRC6zwVMA2R3BwaANY4NjeM",
  "key5": "3to9Pv5KGN3U4LAdRgsAaAwKHRKZFC1GmjkdYy8EZ5QXvMDJAC4XUxXg6XYWbC3STmdY75wVcfYc1FQfoEJBtt6b",
  "key6": "3wSLrbaDCysHQdka4cDnsfimBXW8H5u95aptN6S4LFVWPXJJXdjhr3ar5pYxafiRJA8JGDUHUqj3VAnm6BdeZ7AU",
  "key7": "3iU8z5UrCaZqrKdCU6fyTRi2MSjz621wMxcKi6m75fHke1Wm1HgJXPsCLxE9tfNsK8JKUgkW4aUWD16vyquuR3xW",
  "key8": "4sG9JRmkF3VtTBawz8a1byYmspyqgLZjqFQMff16YFg5ihGoAFbBYt7DRzPkypFbcTpioYVa6YqSqxnbo2javh2u",
  "key9": "5JVLnGR2fsJ7Q1AuTe2EDdjy3pab3EctQjDSqMyRyCkLuWRnG9DGV6jyQGCYbCTmvWKKEoiHRmYn1HDHHuMAdTDt",
  "key10": "X4ohvhCasy1DDgJiBVNKcpt3rAEAaELnEAn8LrZRiCtJKcRRVk3hoj9opecpoGgaBJdZbpYH4USuKMHRam13xMj",
  "key11": "xvZZ7EQmFztAwHvYXpXk7P5WBaFRzsCttDhL1bbzKp7QBfW8U1bMJKn97tqWQNw2fW3YQiREi53JpucWQKJYsga",
  "key12": "5pGymBtK4H1GSq92BbTAyCzGfaQQXQtWYm7x7LX3mPSCh7zGa8ceySaU71QxWrvVfkJZ7q1LJVNQJiYo8QnvyZQS",
  "key13": "5G4sCDQQX4dX2JNfaCN87P9Hk3kQZR6z5wc2YSBsiLwBUAYCU4BQFhqJEkA4mntgJquAxkjSyzW5PGPJjk1Xe5wg",
  "key14": "5KpwZCdyLRPYSvhj2uLt35JZqDEN6BGfxrgiSzXujLF2cFtU2ZB92wXkECtLrrKm8mSJ7nXnZmggymksauPNFaPP",
  "key15": "odLxheChvuDTamcMLfjP8mQQhx9HzkhQv9cS4akniEujEfHeesWCA8URK3NJBoEm6VrS8LqbSx8tnvjzqyurgMR",
  "key16": "59Cu6e7ZYqVQFDehgGBzjWFaT7cPN7aML1Hc6Vzsqgd2n846WESxYrE16qVWrvosCZKkbdZdrA5odmFi173VrN8a",
  "key17": "3hvExketMX2JQ1JBVyvaSKUHC3yREqc3jZ3R6MG1oRisMtXCYSUXSwGJazTyZVYxJXqrB6gJqAdoJZboV5iQn2xD",
  "key18": "5sjd7xDWp7DkYFT44GEzbfSQNu4VHsvViaZdWuhHpLwaQcYFGtvaMDuhbak41uoiAgjjeWSm4F2G7QP1wzYCjTqN",
  "key19": "2XftYbcB1WzNSxNi67RSSHf5JXsamGgfLQ3784i41KW21oCmSMjpQLvkJieJrN2r56Leuk45sH13SM5FFmNNL4Fa",
  "key20": "2GGXQSpfWeg8fx47bk3QVNMDcyEwPQEC9V3y74YGVz5K1un4kD93qJAgd2ghwrKnQ2DmhgGqYjBcZvRMzAMrwFaE",
  "key21": "epXHqwEaW5fx5zD2RtSTPmazZ1GUNKmj2QPtgVKbeX5zJs1EiM58RMsZL4HiV5GVytAYt3RrTygJz9XzaFfxHSK",
  "key22": "xqSntZ6Uc8Q8JCYgreexh91i6R1XGuzrpjGwZ5u3SDfsXt7mwft6dkrAAAAWCzoC5wPoa4UoG4eEJNMKzUn4Wpk",
  "key23": "4g1arFZq5T3Efy1rXTajkeNW7VYW8AyLFaDWFaqiG2CGLBg2pgYEssJet2oP1vPVvreXJ4jkfp1wNazkn6twGbRA",
  "key24": "45xUhUNoP78wx48BSbVkwGKEC5GS7cd2qhTHWSiYBMfeurKvYtU3Hdwz9qYx8rxYGfN3Aru6vCsA8wmfMv4ArHVx",
  "key25": "62vwoU5UVvvGkrH9VEuCHLwVjyoqmwvNVzcuKghXszZyfS3p1qdDYmfNbEhj2K7j29SJT2JrRpvuykmXxsFSBBne",
  "key26": "y4jjWcPRoAzo8kyLB1epgCLbzvFu9bWrm1Dhr7P2dJP8JECqdRiGsdHwCJLc1oBv8VGmkUefd1RKt5NTgt7KS6B",
  "key27": "zayoNKeXaHScLSFgxcu24X5e1jdLDdSU5KMEVQSE4eoSN3pVRgWDJg5BLEfeUT5x8SVUzRHdMfMioHXBPqM4MfD",
  "key28": "22Kf486TcfYGPiQ48exE3panLQGiYS5XY49W9PNW58ygMevJeVf7WFSXKdCE4NCdL8sd3q1QYpLJNQi7G5nCa7vJ",
  "key29": "NXWm5cdksKLPKBv9GdouRa8qTQE9e8goAYzA6cwyXFUjWXVViXNxskDdxJHANcTv58VxREUcHMhuXiTjPy25UCg",
  "key30": "2nUAq5wENSWBWdtzLHwsD68FkxwMQonfiBoM8hJAhRGkqMXJCcHUvYQE7ujMmkKF3hYNs1LUWZYTdeb4utg2Esuo",
  "key31": "2NsQ3E4buZ3KstYBrJrVjQJDb6X8UhBn67nm1mdcC97eYMy2528NKrpXUEAXJkSWvA7dtqKVWvfHjyzN6ijvz27X",
  "key32": "wVqRP89PJBz9jnvW8fo9yJEvjwPcUVL9JT2B916RpuuEjd16RqmvxbCvMZKXHiUi8eHwtCLHXAdcrMrGLCnpzHY",
  "key33": "MyGmcJRt1UjUQydn2d5E76PcvhfGYShDRoynEeRK5rah4XtfmAo7Pczf9RS3XgzBwxQj4ksGzkkStW4b9XjRCJb"
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
