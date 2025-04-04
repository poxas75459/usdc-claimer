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
    "5VfKhey3GbGsZK6YTEzZacfpXShhRqCyJbeF32PWGSvP8PBy15NntMRUME9xLejjW17enehoPN5uCsFNsEUVNai3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m8odeCy2eyLz2JB9HyJ41MKcdQbXviRiY6uias6Bxk3N5Xx4Kf64T82Tqgx64Ta5fZa3mFPuJd3Yfv4QpavrWmi",
  "key1": "1HmDC5ZVGHTmm4dLquNUHpYevs2Eg7BAtXZNiuVsmM1g2XCgUHczGQDpkPjL5McpsSig1nZExzGuL1Y59oz4zNc",
  "key2": "4QfPzcNAK7es393Ki1dAkGZAgprs8wmeSSaRxzM4M2zfX9A3nsFpm3CjhECqK9QyDhTCEpRL61ASPK67djkWV7TL",
  "key3": "21qw7KRZ3ebiuyEiQzWTvj38L79wTyCJLbZbV4gU2YA4QTvMv7Bbv1SHuPmXtNp4Ca79L5vjoT6pdBCrmqhd6kpS",
  "key4": "3W73uTraFyiXxoiENprmKSNH7wMVwFXjM8YPtAuLuj3KoeMvHcs4WzRkABuPC3uVxzDxqsYbNrxqQY2harQDXSWP",
  "key5": "W1BTfa9LCSHu7rJCXWbuDenA3nJCERy4LHuJDq3R3GRDwJ9g17RHsKpU2xhiqTe2Ftix1YvwyvGfRAEnEvE5Gox",
  "key6": "un9odameyQfhcVV6A4GAnsPYd1yiX9GYBd7KVTJTV57hPzrVn1nRUwv41E5Dj1qW26RVVEiKcmBFie5Q9WJU8mP",
  "key7": "2Khu6AbMahtizsgELnmq7j2amP5qGPnDuw7jonbvojLuMG8ymtkXLdRKbFPAJANHxcVPg9FtAQh2PPjBGMG3JuXb",
  "key8": "5FddkqfXkP8Ag8XTKmn6Ca83cy6Ceat2hW4L7Azzcf98WjbcQXwRWJvz1DC4BZRH7GRXC6g27HgUxm9ZiLFnDST5",
  "key9": "2eYYSauzddE7wxNy5t4Gjd1DJ5kRTKqrGMAniRTmZ3DfWKp3ghK42HL59hEehAfmuJorfpFsQgJP35jdBV3yp9yd",
  "key10": "5BHs9otxGbFhDTgxTepDF9XYg54FUgFCRrGF7173NPaGKDkXjpnRj6YzpztSF9Vaf5SUDLG59vX7SvKUPm4jjCgc",
  "key11": "zeGaweAovz4aTYczgTyXvxBYCu1bertSVtfYF1mAGMe5k6QC4D4GHe8Z8qw3nGtZWduyEE81J8LNeSxnh2C5pUQ",
  "key12": "42qz1dcNxSqijyTzgnBC7yGtSjGVmYKw1pAuEa8w4dgTnWZEYyJ6ibBqgbhSEaGv69aEttZbHfx8Z66QhXTTqZT",
  "key13": "vndZ51mdjifiTqSmrqLPsmnHFDPVboERYQ8TUApC4XT8boJGT8fDYdLjEdxkeBC44oZcs6r4BJMDGxJ5kvT8As6",
  "key14": "5CrrMFVC32z4YfVNYuwjTGDZA78KC5qLaFgyVumoTuh1Xa7VDxv41AYGV8DsakNCrUWiVrECfu7MDXkckoQ35Atu",
  "key15": "39sLB2XAUkFVCHCkWjCvAEtpp5T9wJkxSweovgZBfv7K81fAjSYMAfx8o8yvPhbFfVXfVPE1EcEZWDKQreqCihZv",
  "key16": "Y1DDY3C7mEvu33kdJyaRAe3GHubaKW1UNnbCXBhEWh85K7ZSbjR9WyDsqjFrNPtz8ZK94hfvSKfyWV5yMgS9niV",
  "key17": "2JwZGTgFqk5sevPcdcpu9RAPfHsggchUFLDUtkt2HPw7snD1vQYGy2XvKkst27M857dRqtjj96f3ecJcTFEjZ9wT",
  "key18": "3AeBCpzTnEawnsoXKSv8Ld7vGWy35THpuqCYqeu3dPuTiNaTkYkw7f4YFqYytFgBRwxzKeT9wmzBwW3WGP5F5CU",
  "key19": "4kpZKFzn42MtrPJgzEuyTbwVgHbqkLDL27wP5GvCcZHtb5sGyYgqfFfCH7LVPv1JbsaN17gnvk4oNNaSWhy3oWBZ",
  "key20": "4T3u5BbBU15F2YhNZqzHZQNkQBuUZmC5F2pYPC2d6T945ZKRnMRLbBZurrcw7mbBMsta2KEHhLcMU8ykFK6TuUzd",
  "key21": "4U8o5hTDn4HhLjFmPc8h89jzUF7VdeArRjdta14dnSdfxYfGYnQKP3dP7n73Mrj9icvof4NZ3GoorM15E3QCCJVh",
  "key22": "MCknEDmJQT9qEVjicos31cNNUX2GTuHTEJupYUsXz3DGvYiQ1hr9J84JdU6GECKp8iDthFxqYg3peF6VR3nQ4uj",
  "key23": "3RMQdsAK1fQNCwjKcEQs2U8pYC4FVm4fXXKgypkVGxySaim4g4hYgnqjQZnDz8Km9dEZiJrfsy29xsueDPb7GSm8",
  "key24": "3JAakM66LZnjDwYHrqYR5dstdsxEZWPwuE7A9Ym2tBf7f89ufyy71v3RRwnXDUJRkquRHkHZzbSv1dZE6bFnvw6Z",
  "key25": "2tZ8kcKo21AkYMoyBNnpiRap34fEeugPfdXp4yxYnmoinL9N9ZsbTK1s276GRbQ25AViifaj7anAg5yStgVUCP2b",
  "key26": "5CatifSMqms2wagaYT9N5xaiqb5brX1NiKhMZVBKp6tBDADb7jRufCP2uH9ntZ14pFZScub7YvwQiXQL7Q9vqj1Y",
  "key27": "3VKcd85URuK314BKB71yzBtw5HudN6bWGgpC7Svdmbe1E9YirT6Cjwu4avyFgPAYHRGwhb4DQ9joVrJETRDvneWc",
  "key28": "hSLU64RwxbjabYbkomdzq3iSwNbpnWix83v8NrYXrvfjpjXnn9acSr3bN2Pj3C2CZ6V99ko2VeCrfr7ePPY41Yj",
  "key29": "4s27qDpEorM73R21NmkWQR2WjQ6dGQsbZxuAg3bQ5W6YJvjorA8fEJV34SRBqB7we8EiecNLptfR5VMb6azqE4SS",
  "key30": "5wFNYsnZHp3EDhNTCJzFUZApoayMvVwVr4bszzP5HWuiP3uQWxGZU9RrGMAuiLUAH9mVGQq8jLHwv4jxiLzMentN",
  "key31": "2FTpNKFeKK2ZdpKiBT8HMbKMFkGz9QNJBxNZwGLhSpwY7dgWytcHR2L6vbuKAs81rUiaW6TufNpQZFeuBeJWyMYu",
  "key32": "4HRcyJb3EhrsB8PCUzTA7i8Bu9Wn47FqVxTUHz1muP6p5344e93LPWf1MKfiwfAdTgNAGFqegWVZ93494RYD8tT2",
  "key33": "yPubzaKnPHHkscyYqmMgBxJk48SWTzpbA5mmKai8jQhGPMRWX2atLpsDT6z8xH1iuAFbNEbJyn9H4mKYJNSWxTw",
  "key34": "5vVrVjHNftKWrAyghdp3LZCymiFMejyK5X4j933zUcBBmEQn779ndtyNY4f2e1YkxMG6LXHpCRBBKyCunMgHxETA",
  "key35": "5Xzr9EqSfQiugFHJ7UQ3u8YRmbQYwSjB8XU3x5gdForamGeBKnoAx2YKcAevqyrAsTLspC7DSUYYzkAXtw7BWNZL",
  "key36": "3o71yUqhDtDyuCKvQ3Jy6CWqY1T71TAzQyxAaMUY7NiQs1caQ7HSG4dF518KnFdG9Wqwmpru8SafwYEGpEHZdnfw",
  "key37": "4McGouy1v1wNYBwN25ymz1PvLehpyTRN7CEJcJaubxXZsFd3pWtKLdxiATHwt2Tbb4ubWBYNXoaTGwapc4g25Ld5",
  "key38": "cjdDuGPwsszCGCymRDd9e47BqYrG9aLUmTVaDntgz6mcTTrpEUrNixkRmyq7hYJuYQPQ8keSfUmhzR9gQ2GEFqY",
  "key39": "2QkY8RRZvFs37yg2xT7gtQSKVrjj9CCwLjQEyY9UbfGXrSke3imREV7Spmj7VraYcYXuZVZneKTXrkU1RFgYUYZs"
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
