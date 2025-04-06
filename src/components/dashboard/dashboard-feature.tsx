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
    "58MUzFnCjFz8PbLvGYi8FbtejDRqtCeYzNgnCvrk5d6Lburmcwyz4xPyDB5iR782DrvGaYK8sTeRtTzNMHKHWhzm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FWPAfXfPn29cy9iWbJ8qQi7WnpQEKsPJ4Zwrqydsi9nBVYRJ5DPah85W2eNx2kxGt7pi8PsxLwbKKRZpgPs1WVw",
  "key1": "2Giyuyih2y5ZGUA7JBrGWsMQ8vwpamJ2rbpMNzpo1zsoyrxEA8F63w3NAQbLZzGwdjygokw1uB9Z3jBW4teRufEX",
  "key2": "3CPqaMH4UjhKGvFLfm3FZU3iSu2bktH6DB5vSDyKH5NspcUm5ydbPVjqUujCYyvTXutprY1SYd3KkB9BacJJG7Dq",
  "key3": "5xFGsc5Dt3tSqtQzu7b4NnSQfMyqmNNjd96geB3X2fgRksmyaWtoYt1oz46bL4aQiKYAXiew3a3iTyAwuCcJKerC",
  "key4": "BhrCjvFzc2bZ8MJitVuv5jNKyiaTXVCCBUtXm1RKTM1wbaauiTgijTAo15BDYNffnzcx2LnSiVA2kLLwRsmp3jt",
  "key5": "34j3XNdxJivRYGxfNu6J4q3Gdc6Xp31zNBfabfGmv45x2VrwZvh4zFs7pZN7kprhhQYsHTNJiN1NaUtFfvNYDFt4",
  "key6": "2EZpL4nvvX9EM3Pk9BruDNzkqHJVPvLA6SH8dksHSTyHxnBN922Enmp4NQJmNBgmJA7wcSTS5xGSDoaF4Do19D9t",
  "key7": "3rNgvLzQ9jREZtCCFfZhmKH9xUskRVazi4YxdZYvJMii9Ry9XTNoKeJfVXfZmJwNz6rZBGMtBevoKxGTD8xp8LpR",
  "key8": "3YvxEVDonVb5VL5TG5TcNBwfSWPYkb7Js7EiZ6F7qXtUUt5P4mpfD5XEZst3WLfnVgrJqzd26b7k7GWCCCe4iGrr",
  "key9": "2pKajHyRPW86qCmPPf4cfC3ze7WwbULRxDPNW9VP9RzXRrCan5HJ8jtbfKUBtZ8pGL9C9Np4c8QFwj9oweJ3dy3i",
  "key10": "2JtSFkGzzPdN9EFFvo518VFQdrx7YFTPUacjhbQiU32MNC1ktfyPMppbthsaucfTxyaeyJEJvzoRpgwFmLUBZMDM",
  "key11": "2D23zEFB3G6f6BKWvdfLBhZWRt43Bnn5HV6haj7TFjgnhLm48xQFH7AavCbsae6dcoTNVeAiEUWisJwEYRF4LijR",
  "key12": "dtipbYEg71GhGzaNWWundxC3XFcRqZskS8RgH37kp57nDt2MKrbz19HJXKcXjaQFG8jpnB7NDQUxAfVCLP6P1Uz",
  "key13": "5BQCmh8e7SDZAR54zeRghmNTgwnVhXUhZP2Ap9NqTk45tg9YdgaBsQVjoNoSnNKJVLpcwG3FAsru5cobE8mp4EA4",
  "key14": "5kravENNaq5zFvFT5EZQPYZvH1Z85gBEKeUeAxoqKdEr7bv2rGLpeT92tUkkNpqcLo2Aaw6PQi5eYSnZB3sPoHbW",
  "key15": "3ZmQ1fLeYGTP3FRyzQrCACDphPaqY8xFvRyjCp3dPkeeX3WbMqV4UQ2S9P79PnRMJqFJsvM6tHngPae79TNcc3cK",
  "key16": "4zgdmBfrhi8ucH14Gs3J68iADz9w1BKehkimXTVpFWK9EQhevdHoPb9xNvYAdPeD5xRBbFArwNDZ3dABfdmSNoaT",
  "key17": "3nQ3Hnwk9LWAvSwmoqu546GGijS56292tGRcMMRbH64LwkUJ5rq6wkgMVp2NRdYyucHYYf62sZ4iFnBSu7g9MYu7",
  "key18": "5M3G6KzgkcBvjQczKh1QwogoqTrF1SZd3vLm9k54U5LzZ1xNiBexSjt82GGmVcBqqYKGi59egUiy6pAhKFRSonND",
  "key19": "3p96ZWkobrwFWPDFChwAXNcE8PcmvrrG6QWaKavxodY1wqX5ssb1BjTwFiqJc4pjacLSTRTCYayQ7jX3ZMpbAvBv",
  "key20": "5Pan7tddtXJHcrWmDR1nBy3XGdEhuUrrmhsYEWjik7LcDzQ8v8zrvjQcvFrynZnS7uszdav5DfUEgVNbiFM3ioBA",
  "key21": "45MuSFP9tSREnVHu8YXDuF4mc2ZXCSp1RPozhJG1VwWXVB93NMus9DxqCSFteKnEoDdS7KYMwNmtHK16hhRwRAz8",
  "key22": "3khSRUv26E6yHpeHVS2eprY27Nhrst3dqhCtX1YivdphFAXbQUABkRDQnM779xnXVwptKahkZeq5tjAuQUDNrfqK",
  "key23": "5s3sJx3AVpd4J5sg3bNfz9jPBeFDsa1HaX84kSD1RpsKTFMawF8ethBfhjjdjFcdNcuoKnKwGFZ4HzKgnK32kdzw",
  "key24": "TALtZ2zSrc1UxB3pndnJKUvLJjPCC2NVWjE3NipwPMkknnCQxD8nF9yzkiDZKyYSa1wCWkDm9usyozgqWieGnYo",
  "key25": "35DXSU7qGa9pi3ydCwWXuQ7tahPbhWfyPVeAvJeWvXtdXbnNQYAWBjiZa7fzpgJAUM7B7omfWZ8X5dheKHLCbgbr",
  "key26": "2fevkE8r6W8mjGgDPvDaaESn67CEsQv1Ap9mnvvDcZ2fqMD6v5qRf911EGiYSGBUtgq83grfnLVJSRnzstKh7GyQ",
  "key27": "FzPYLQaJ1qu41J8a6SAxuKnGDyRKxrhGK5Wv3y7yEXdUguRmyoWAYmnvJyCvqaX6Pw1Pe5rUu9vWYzF88GXLYD7"
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
