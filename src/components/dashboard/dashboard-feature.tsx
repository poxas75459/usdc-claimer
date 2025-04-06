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
    "5BNVWgG6n7brJqgAWrNt1BqHVM4JjC1Wv6u79ZgnPVddQSAiGWfVoSbyg5awnXn3TvGA2eAoyEaPeRoPjh7iArxj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Cttky4mrzaVqnxUtW79HQWfREjjv5P31WphjxpsBoH1iF1HWK68Lcjrw2KA2AhbPUjZEqUaeikm8xDm36UEF58V",
  "key1": "4TYLR8xn4qgaJnAfjF1h6oE3yJku59Y3uj1AESc6YdWFvZ3TS9dnxQ9Te4ods9DLqvcspDKgLpDQkFxDFwsCZQaU",
  "key2": "DXQtoHGafBPP7J5TUM9tixghM9c8r3hTevpptDhJUF4F7it54H5gG9F57XW7XVwNuj1iRWUeYLEYNsi6sxorXoU",
  "key3": "5WAHVtCfX2nF3KfkNxsUCiUtLPpkbPkEzmzU5izrVrY1Q8FKVdNjmZYA5s5fT2qf1kKExRToyHvBG14RH67Z2A7b",
  "key4": "hfEh1NJ5PtBJgUD4YKNTp5VL8eqMLsos8mMgHJf2AYa8oUoKZw3NaZu1EFbVJYYVgYMrhc1MVESqpwe72J4D8mj",
  "key5": "62uifJec8H2DLQL9AhbFhWZeujTxCLSSivpWSAhaY1ZEAMt2ESVZLzhMxELK3CoQQpNuFBVhJXstGKVsvgtboM1M",
  "key6": "2FC9he6P357XyMJ9eKmQuiqWcf7NxtMbeoBF7pE3oXnbmNrQHShRFoz4XoUkzz39f1ie97ZDMhns49YPUFh9BK9u",
  "key7": "3tYBxRV42DSJndfqq5zJSQxa7iAA6zVvtihoTh9qaYoQcqHqL8gx5snGm3RcbmLrJrEMqpz4RSbLchK92NkMBtf7",
  "key8": "eVNcTZdwHT7Vu9gQBkQxy1uFtHFPoWxLvwkb8jTe17b9g568GYDYDMkabTVXbbpgr1jWj53jDebjWH5yiBHqE2T",
  "key9": "FgRS3fyFq48KL5y1UXr4kMDtYcYFLMo4Si8UnXVuwzNnwbgU9kUAFZFKq3FpgJfBKceY7F8413hnxWeuHrhwzfj",
  "key10": "kVzn2dPLoQBn7Ha6xgT8mibiHg4z6vc5sGvW9zkdUqVYXmELnwkKFyiWmBto9diyXxDyPsQ98TinaDNw9TY38oX",
  "key11": "3hk2F59a7TcPyvqDSjnZP2MDyQe6ANdWLYjgcaMvG8bK92eQwzhqc5cCqFzcmT2H631vpJ9KHgFEhS7VVc4gLCkK",
  "key12": "627mNu2kzG76ip3axGGP7nhFWsJSZgEzAaUTFAa787QE3S2tjkNw4G4ExEvhceJC3Ztwps4feKQVJLLW2tvZEeQk",
  "key13": "2KRDm1UuwubofHZBmjWUAxbYPKutsNNYUdiTPeDaUiqfdZjCJtVtTJD4139CGKu4nchwawSqKJbfLAQQpjA7CDga",
  "key14": "53psAeL4g6SVBZjcFvTz15skdoMe21aFDEWXrLeNgYHCAoUancdeTxooPczLLCqYyDyDJGEgjrrrDd7eQCpoNJC",
  "key15": "3wsbcvtTm4uwCFejFT4en2Mdbjpk1AEj16pyaUWqc5s2u4UhMXLHU9BVnpuuFkLZLNPtUPPgnS8xMCPZypAsoXd7",
  "key16": "7cWYEmZteHdbvQi5bLeYSrT4CnuvtU839W3T26KqWM5Qjf9S9tBEju2oygCGfYFEx5MfN7vdsZX2UQ7vcw1rFrT",
  "key17": "3TZ7B8tiNCfRZWoCjQ32W6zPvRwZhbTAwqAAHBx6QviYkGcHub6zQm1AkhhwvkddhH2D9KqfyX55uyzW9M4riNB1",
  "key18": "27hzt7iJ7ah6qrirw7TVHjYZuXtj4EnKDNAYuzb3uC5F8mBwr6VemHSc8Q1sxNkvvsGXwj5MmEU6eGZQ4xEjBwWw",
  "key19": "4B6782JTpLcG3rjEJJ4dU8U2xuzSEnPamWDLLDWcxhjkAZ51HXj2NM3Ny9kPTVxFiwefNPuPYUT8XUw4ZH1U5h4Q",
  "key20": "5f3cNfZBWq5XwxTTBNsTuPJ8hK54x7a2W7DrJ7Mmtns64kGs4rUBG6G5v2XTmDPK7qYYoK5vRrXpUqAYCEiAV42j",
  "key21": "2pFQDGH6Mk2YRRdJTwzkTzuFtdoj6MksSPwf9EfcjKN5XwKPsu1JdBkNYb9PshDf7zJ2S8sWGUCSWTJSD3ZC2FRb",
  "key22": "Kthes6owD7JYm6bt6dZJJaqy32NfD1egtpWV7hFgaUw9spnTbV1693n6VJ97fXAPh9GEcdbd39T7jJyUUcoegUy",
  "key23": "55w8Z6kn29WxaGSMa52d49P5xGo4ZLkdjqD45s3YT7GEwkxUYKLwUHGznWiS1twY76pv3Hx3Nuzbw5Rvj7BKiYia",
  "key24": "38ZHo9Jemw5GTGe3HRzoQT9qkLu3CpbpLBnywfWkHKsBU1LXLDQw1KZS4Z3RApwvBJ1GqiHQgc7zMxvDahuYZU2j",
  "key25": "3NkC7DmA9iSMk85FDrquGtF3QC96xBKLMhemEjEd5sJFXznPaB5qnMDv367T1u3FUXSgwWMhC8dd6me6ryRVyT5p",
  "key26": "3FckQiqZfJJ2NVXTuMPoat6B5V3JjpwYDrTCVT75nDt8ffWLtRhCWbejRoD8x4qq1uu7an6KwrxLz6RsBC5U9bb8",
  "key27": "44BKte7AJCMuAhYnGptYPbZwhSzA9gymuDZytbYkBHoPi4xnK2HutvRF18ouYnTUQevH1vHVRspwA3iWbEtzv9Q8",
  "key28": "5WzW7ohjj5g9eJmgDdvkRfHcGuoMYEuaRLWE1hnaK8HYEj7k7wBJqMRb8xZgEaKzu5JQGEeZ3oexjzHJs5r2jEcW",
  "key29": "4Y8MzAqW5MVxi6qFQjP5kFaivRpxcWiJnpiKJnQUJuE7NbKgBngwyX8R51ni3Z5qovFTFbPhfsqepRUMLzX2KZuL",
  "key30": "h2dhDZVgEw1SkojA9bELgw3k4i27Bwf71DTyL3zNuKg4LULdEa3eTsH2UQ8T8KKt1sr3UDVfAjyNddvam5Rj2Xk",
  "key31": "5TdNLupwweVtfz8KxqLV4es6TX8TLrT1GJMWdWwZZzQNrrTNPnC3EL2WPKmfPkVG4Es84GeysB5oanjzJzKBHzKM",
  "key32": "5ax1ktR5oxvT5nTy1J5msFheK3XfnphhKZjy5mxsXmUTdimwf89PcTeuJbLhFBpH22ZncxTincoTvfqa9zKMYdr3",
  "key33": "5U3e6p8vDWb6DDR4e15Z1qu5DPmb5QFzh9yREubZVecuMmAHMFNnokXMDf6oQa3ydcfiuDhJDc4V2hohP6YrE2XQ",
  "key34": "5qFdqzMToVrJkQLA7GtXXxkj8GECuZ4zGCeWZxt6i85wVjkx2mqx3PgxZejVpCvPCeUr6fttD3NYWWenKfgxqGqH",
  "key35": "KoyNMHkimw18LMB7SVuHu27zweKMBCQCqMMEadbYnpgN6pduk88PHtAaYLL5tC8tHf1kjcNisodAZGWY2Xncq2Y",
  "key36": "21jgTzQ4waLC9RM6toLUYVS4scE1wbvADQ1ixV35YLXSJ2dVRTLmAPAMepJPhLhhy79qEASGVv8ecNcFYURacnXx",
  "key37": "3SxVpFm1ii55EmDDhLQTVeeDackkaMfFiaGKLucyfeHLeZ6tx46sW9N1fBgfeFENB9yZP2ay9oZEksJoDWQx8TeR",
  "key38": "hsAB8kTKFfaoYGncYbSHgvjWZe242S72zjhcHVowHEazSSZT5tfoAkvJcWJwYJGsGacYUdAai5swC4mbszYEFJ5",
  "key39": "4MQWMbYw6wyv1UxqJJMM1jyhpf9gHYepzr1dCmKTrLRVpTGMSiG6KdL6vwcKWMpwvpCNqvfKxNuTCc6bFypBDS8G",
  "key40": "4z7jti5rbm1uwbepoigekirzcDMZJ4DdG757xECSKFa2cigidgq3fisLXJEjtCXxNg5rYhf9DaTF6aUJEwnTShcQ",
  "key41": "27wdBc62Ff7hgoVc66d8cP4wgDsmx1fk3Dz8Gp3j9mCkaYiG4DRgdVbqt1VNL4GkDjrsb2ZKmEAMJdzpvt55jEpK",
  "key42": "5FdwvjWK7TM2j18dXpwfZ1rSFHPrA7ENwTwCJdo6aNK6RM25HHrigsarguptr5GrCnSLhM7JHgNksXydBmWdk9kG",
  "key43": "3ZCRUQNLftNjPguFkrm2KqmV6ZXzJevcoovYFPaUsfVMeYfZc9Uy4g3HyivsbZYNwJsawFWc7WYKZ2CUiGRRWE2n",
  "key44": "o6kaDHNRVZrEuEVQMke4qpoZ6NsXxBBwQTHEQKWub436Gg9hsRTdURKS3T4ooisUywqfn56jwMHh3AUZXfzhxxG"
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
