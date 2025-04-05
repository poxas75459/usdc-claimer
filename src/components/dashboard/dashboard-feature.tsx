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
    "31adsDchS4CJYHFSK43UqW1hR9JRqih78DUXSDWSGs5m9v6bEMtRkKpWkg5vgMVjvQW29tJoixdfehhmNTfa7sg8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zmaxQRENpZKE6QWwUBfdt8kYWBLDXBZbmgjyNf6pKstcKanxT3W1pZnAwPntURAcyeuMQB1nfbLFacGCoVL2kUA",
  "key1": "38sQKqSDYrSkpzsvuFuWvpT4tb8ZYPHGQaqRSPF3zWDPccH7dJ8MbKCm9htMmbG5q53MvJAFa9gxUc2HV1CNwKtr",
  "key2": "38nDTsFjMReXAisg3GkSA5PZihfxC2usAaRDyfygCM1kJQQi5k5RqoN8zD6gBcm5irRruAWL1Qwi9cq1btZt2H6E",
  "key3": "3C9EugTMLx94eWd4cQ5t55zACUwg2beSE6F7xzcN9NkAHhX7CBuf5XGXXgNUAdnuokeZ3GmWUsN9MLHzWMmoNKe8",
  "key4": "3THmAHHrcrZ6WWkoAkAWoPkma9q7Cd5mBMTeKu3hgANaxjtZayUs3APD4ES3ueR2WXvxRzMhi6WZr5SwR2gP5Spv",
  "key5": "3iovNnJrPm3uRXhuDygjh3wHGBESB74HsUdu1CcQabCoP9dQoY7zom2eLsMabhqgyVnZU5HqZaz4kWn4CSTCKGg2",
  "key6": "4fu8XHiknWQruxVxBFfrHRjSenPyXDoq3hwULuMvg42ssYinf6cmsE5YZWm6rZ87D8D2bK23WoMHwrVXTnPnVuYh",
  "key7": "359y8frUmgcwQDwp7NFjVgyRp1KJdURDmxsHMkywctvv7KpD8uCUAn36tSqFpjAxu3jmFjUY2PDpjfaTbEd1ySDx",
  "key8": "5oMS5yu4xWFXPQhWfKzP6yDa4mRtSWtgEpgGHPrHAd9J52vEoedVn5StM5SCWKbsmpW6M3xwtebjdzw2TGdbzqZM",
  "key9": "uhi3AZqr5Uwd2fqvUfY4F8qhYooHhUuAJ4J3HAd8KTW18zNFiV3i3yQArLS3VgcJ757TVFSkTKDo8spYbTFfCwo",
  "key10": "2eSTcJB2CnPAD1GBF7QVSez9QajapxeNUYkQyvmsb9Ed4ssQHR5TmkaT5dD2AGgvYseo6pLhF9pxiQEurNvxs7RZ",
  "key11": "38CZxbzPHEZQkFUTLF1BDT42biHXcoRZoq9C31PwbuoyZcsc9hrfvQrtw2n3A9uHFbLNCyB5C9MmVigjNLtvPfjv",
  "key12": "37t4iVqfRZw9BmZnrprKJdvCpBPpjG3XVjGsBWMBxk2KDLVYz29rhzK3LQPS6Gipeo6zaZbh3xsNaRebJ1fmnj2d",
  "key13": "2ENnvjNHB8kZsXFNcE2PsZQKwWinqWGNR73yEygRPieBZXEubujaRkhWpzob4YMEvmp1AD4DdQKZzNPhDao3BFeM",
  "key14": "3uZR5i9YshLTi34iYa9GAP3kexui2xM2p8vwBT2VWR3cpr18FBcFgtyzJdWWyzUekG9u6dUT7mDL3d2adCLxE55n",
  "key15": "zjJcgm85BGcLfBBuRtrim2BPeUSHEtAesgJABYenrdF1Faq8cvXozndVa8qPj3qB19BwGXcxaQemiqTuD1diwVT",
  "key16": "4rqCZCo6CfsnQ9pfnBqpnBBgsL9EYt1DdtZS3CzUonswBkvcCfLQDUv74NxwW3nECj8Zp7rHf4nURMfczfbEr1Se",
  "key17": "5iXMYHWUdrFSjUm3MHFzNUizg8sxrqvHN5Q1YGNJzQg6NuULZ1sWigmE7WJsjNmWHQkgvz2JYGFFZXPBuVGxge76",
  "key18": "42bxZ8PAMZjgqVLWbMWkUBRS2pZehK71rR6ayRYs5nJgdcG4AASPvZVF1LTxmECNgEe7pAKpM7x1TqvazPbMg1yS",
  "key19": "5iriTNFut7o2w4vN5Kk25QnMaE4y5qiXk1eRqiLQx52KK7s8pZZ1ieQnus6M4DxJNZvqhVG3huEov4L7h4CLWuEt",
  "key20": "2xKRStyBdbH4Ur8PPPtu9q3zJeSkrqDgQ8YvZuba5Rcv1gxxmf4iFRYJ8eZqWcU7Rhi6BzHJWFSYDi9hn5zedgsC",
  "key21": "3cNgiqW5WRRUB2h1V5vV7NY6EkALhR7SxSzTsZMo7NkMRwBH9zgstbGDYZA4MpBrMyJEavgFmYfmhVX66jTSBcsh",
  "key22": "4b9LpA2WVSB3FxF2ZpUgSJqFqRyEDgvo2Uh5SeRPRFNP8b7ZqUHYYhJs6DZ16PFKW6TzeKPe5FsFpmqu1QEBLhRi",
  "key23": "5bN7enq9Wv7GSSu7PwSoMyJUENHYjdwC2YQpS71Ldo1W6sJtZ8ihTZT8mBcY9SvqTexVcWjGX8kYnbFiuiWjsmgR",
  "key24": "2kM7pHW4VhTz1xSTbKoEKiMdQNTLJ6q1bVEMZN556ygzhYDaVpjZ4aDb15Gfo2uQ6BAasinrzBwVcDqbVkDEfXEs",
  "key25": "4ioSV7andxrbF1AVuNyitK8eZDyw6DLfouNiEtMpoR4S8jsL8agcXqHyX2hVs4jP9LmcEDkSp7GMoJPqPMnJWxMk",
  "key26": "5B97imtD2iFmhkQnYdkb9e37jjeuYbsed8UMneBRMCNfQPa125HJHDu733shmEebLq5NhmN8qjHXZjm2ZbkyAFi5"
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
