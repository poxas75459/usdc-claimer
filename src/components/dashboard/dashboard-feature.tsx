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
    "4hBHGDdVRqHYvEmtbcftzvCWhEFxWAnrk212ZHJKgyVW5JH5CTEa8r64JnGjCtJXWQLC2WMZA2TmFPjZV9SotokY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y7noe5vP3NmodaK33sN1z2RgqB3NAjSnFgBHohZKkgHUbrWQyd3GTVmQQncXGcjdcAwfzfhKCZQL8SemLgST3xr",
  "key1": "3LmYkDcFBtjJMPtknF3UVB7Cic7QhyfKvEjvnzrY9xpRF2wEPUrQVX2HmSete7izgjC95JRY18tz8kDohnVhaYCZ",
  "key2": "2afeKXwtYu2vG4Hco4hvJAz3o4ic3RcysFbtryjxbaiGRYHP6Ziq7LUxJV2nyQ6QMCDJ2pL5d5k8hjZQf8Gf1kSy",
  "key3": "3KC7zuvZGes5rZaE2AEs8LNFzDenfHyGCVMMmqNMvtu4jTVeBnFQ9F6QysD3auDiKBZqRg89iH3j4o1pSoZXroWR",
  "key4": "5Mg7nveRMC7aKwE97MGMnFxYVh1BJFQBkPffVTXTh7NHupSuPFW3NzR4CNhoX23sFcALJBA2vjBTvGUE5VP1dJ5k",
  "key5": "2bSJQzn6GRCwtvwXoJU3TRepuu7SU9yKRVZ9NxGkq1rBZxTM4Stn7LfQ5jsDPS1ZvWtUY24GhnGjAm1J2nGKXf4w",
  "key6": "3WnwTSW7yrn81mRWHmoz7wuFV2bzKa2qySS1LYsgBtFdYTJeuWsWLix287DPRW6xH9WjqKTQ9dL1bthGGuFgBK1E",
  "key7": "DgLeWeXvM5nNPudoUDtAPGRrqcWt69yq49qiFb3JHN3hfdT8dk7aEt18VuTuj2trdHrN3KC9FtVMqVNt8YScWt4",
  "key8": "2kmaA5vDUPQug46e7eTXH2uGPBeCkMLuiME6nb1EJ1bxjHcbWvU3Ae3zy5bHHEwQpRc8Wmz6AzR9zEcHMG4UHvW9",
  "key9": "57XbX9VDM2P1guDUWruuma6TvBAXeBCbiqh5Yf5hsBiNE3fAEjWkJ2PwcrqatQSFgvfV3wdXuhrqjvf2ZE6JskwL",
  "key10": "36sZ5grpdBvFze7ohjzYWfsK2iqZL6pVCpBNbyfMz7rfDbQ6cqdPLKhH6d66uAhpNicHMHbtYkJKxJGq6ARiJfZZ",
  "key11": "2STF2Eyw5XBzzGSVgCGUaDndXa27tSekHA3YnLhPuKxmyEVFeEfFHFXAPzfV242ns9swgZmRxKPNk3aKsRsgDQVt",
  "key12": "3uUjgw1FAPUWeV2r7aXTivANp7cVsAeU7cqZofNGxNmfXzcSJz2NinDGQTYi8b8uGhBVubXKcLfZ8p9mQjecdjHX",
  "key13": "5cV6FXLEvG1EQfKwaj6PRBChXdnKQK4cJVP6aDEETqzV8zv5d9XSDhf1NriMk3fFHqGTE1xe4BLtErB4N2diR8fh",
  "key14": "55sR8qUhSDYxqoLGpWBg5c1urjhFpm7kgaDE2QuJYQfMHCVUTjR75xJD6grmNRmtNmfG8wfznvUQ214S2yyT7uDQ",
  "key15": "7c1HzgKVHHD2tF3mXYJc7XzxXD6tBP8NtxKa85qUQzumQZknUNRTJudoS2ZsC8XJj4fLDKt6QZG7jEuny23g2Ar",
  "key16": "4rSJsQqRGqdLowVtkKqV6SFq7MAoD9B8GKFsrFzvQRpKvZrj1ccbDfRV8H5n7BBxdFQo3NGXCXSSX3AyJUCayVSR",
  "key17": "4a9dGtd5b798Y28tezg47X3kRpZY2wBg7FJtfmMCzzLNjiyJPkxvevUTpPEECXWPpiSFMFcgK8vpTFpvfA6r4heK",
  "key18": "iRjBGuMYrMTzuZnLpryFneAgVf53nNgFGHCHbG4tkdqi7ZiyNoRSZN7qutbVnHogC8hEjkNBzqp7rR47TYLfrgT",
  "key19": "5kZMdGtmWtzZPWbwv66WgkAVPJ4SVKFD98fUoKKgRPM379C76EBgBVXtkQourkVVKPgJGR9Eb9cBxMZmnzqYJGyJ",
  "key20": "5bD73eeyskupiAovQWbyi9Y6sCwYazLLpho1Q38B2XZWQf7SCqXn3DQzV5QP56aSMrXMCnaYFMUeAgQ34vkXv9mx",
  "key21": "4XrkG74cjmwhxAd6J3PLK4NGdDL4AjEXQSLNq7oTad52W1L4FCTJwBoW4jokDuMDuxpQYQpVeWTDuvwpmxuL3jY8",
  "key22": "5nHPHBvit7vsrp6yvSnwDvYzvnxLnxkfj3JZ4h9jsiTCqNC1jUkA2dXUk47Uo82P2kxwz4Jv6fqB1XJ1Qm1Npbp7",
  "key23": "B4MbmjKz1JJ7Uvw4YFo5bRand9F8B6T1tpY4hMbnoNRd5f85LnycKAuPDGVPTSxap1cgDHSNFmXroTKaPNwribz",
  "key24": "N4B75fDkXXS5Tzk9aWyievJ7jTF8Dx4qXa2qx7WPR7fHcZGEwzvUUh2tzkmECazk6xPcg1SqDjeF5bEpfBTkhSi",
  "key25": "MPfSdvv7ArM3kq93AcrPK2uK487JLDGJjLCUzKxdGbSXAC3HjbpNWSCf1tBouD1EHzYtGPVVo9PEwBnwMPTzUkA",
  "key26": "2xxib3rJNKVaE78r3NYFUceogTuHtAitrwdjMiRynH7SrN6fv7TYi8REcoFJwjsqW6nfdCUVze6ien2gPxrV1Nuz",
  "key27": "hi7QYQwnpys7P5iUJTqwGHr5eqCEx56HBS5xmKNyZV6iikwWx2THAwccfAAboA6PPMc2GNQAQiNSqmdBVrt8iXd",
  "key28": "4FhairC7239aZYPWiaLWdbxteCsM2eCrskUitX5DBkjMJRreGvevevdYNpogNqvnGYs47bFuewgxjj2pwyHjxJpF",
  "key29": "FMjzpR12eWGXEqig63GKwrzBhar9ZrmcTwbt8mwyKS1JtVUFbUxqr9qN5wFSeKRucdMtbo2nykJj2rD7WS13bDE",
  "key30": "5YkJF9G149e57xBuRqzANxFWV5DTcRQJfpNsuFWQKemF3yremHUAdz7MqXsqS7wbHHFKyCWk5WTEEp93j1EjeD37",
  "key31": "53j6qtDhTL2in6QUBeFo44ySVU1W4CKfp3798hiS31NBYyiYLzDm671zhQ2heB9gDabxXLxy4XTpuXy4adHN9YhM",
  "key32": "5ZypvQLRmzMC9nAcWbSnsp4SXNBEMUp4zzoJrBaUwHw3dPL5seixk81gEduBN9wbh4KphqaCCaAX3KBA2vgwsC5c",
  "key33": "3kF8WkRagmwMa3XXatMebk1fENsZyiFYhFiDjvxhaXS1fw2b2x2Zy5p4LBR8itzbWDduTUFDCu3pxvqoCaAVDoP2",
  "key34": "MTHWeoFVtizvuK3UMzXCymLZ757yS4cKkYqwDmQgtkH54wFVoSKQHkruvVYiqNGisQpNmrxu2dKEdNfFXxGLBhp",
  "key35": "QekUXeJ8DkJN2xUkxCBWR3o3Zvvi4akXGXKw9UEatNViDdkEgVy1bUMr4K8RbaEGXZKUCzZHbESWwpUGgUWmg2Z",
  "key36": "4YZG6TcRYEBZcuNPF3xFgEHaHFmmSpQhUYAioZtxiaAiU8PZpw4bioc5nWkuQetgP4nChUnYBpkxxKy3q5CQUS8Z"
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
