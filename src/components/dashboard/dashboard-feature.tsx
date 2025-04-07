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
    "2uakbxXBgfTbys7gesaoaMLNEakhfhtgFrzvJSoP2NXpk1S85vFjEXfVgRQ1FaxZSSn3b1b5QWa6gGcWC74Y9fr5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HinNQgKWeF6rjnainaLpGiPwmfBdGYAhXWTuUAJhA6j5Lf6dPyRqjnYuj4vu6bANspf858XZ9V2HVips6qz3Msk",
  "key1": "5MToxskyuvKNyeYYgH1kQRLhBFFSymN3cPSz781PKAQdw9ztcCescTQ8kzSVC2PbMvnJHhs6DpfzCYhBxJQb4uu7",
  "key2": "3NFERp2M7mC6e8Q5osY5JF36w4HsAQ72oMSS7y82iKEt9gxDZoUTy9U1HQCUqLyvpkUWzdNjoweZMiFvWA297Mvb",
  "key3": "3W9R6SzduyRQpqxvhnqWj86L8Z6AtTqhWqtbH8CnCxTfsjpCu1kq7V9bvcBcevp2hzvpkqgsP9s3YWjuSfwn5Bfz",
  "key4": "4EkUnxKKB8qqr5FatTMyoW9kdEQCYhGiNqLJkFZjRwN48QhxAghmbZqmj1tfin3x9iDpNc9CzV22XJGCcTrVhpQP",
  "key5": "3Kr5jEDntv5MYeiLvQrYLSFoX8zdr4HfNVxRzgL1Fg1Qa3WTCWJte5ZhFPkjxo7N1wbvueF21LhJM84LRVovevVz",
  "key6": "3XwQeqEprL8KGK9gFA7hfy1s8GiXo5E1D9raQ8cNcAcziHySUQTGmkQDk153V1NwfJLs6Prh2hrCdKFp6y6N3HGo",
  "key7": "QN2qhYCqQ1WXKoahaCtwQnUGBvaHq78PBJ8tWrokuJYqai1waJY4Ni3HEPUdYDAaZRotwyKc4WNy8LyET5eJTAr",
  "key8": "3J2rbAUyYHo2nndhoewTRMg73qspH4Sn6c1qwEEQ3oRmtDb5g4TkSQSmqirayByFPvT8aSRea1nPvh2d2PSiJbq4",
  "key9": "kdEqntg7uHexUp6RjnrJecnNbgdRahsPgKNRF8azmfVX6SgiXJ1h9toZZJcvyjPHPDBpuY5Bh1F5hop7gqevYFF",
  "key10": "2TpvC9rGSyodtrf5BDuTW1bxgNd4dMhoa7J1hYhDVExuTbEtzhdaTndnG4dkLHwGCcgbg4yNpGsCp74yrba5ZoWh",
  "key11": "3q7Gckxthvb4iMr4j4m6iGmsoUgTRejdFWcAXutxVWBTrjDEDy13jEFkeFneRLCW5MP4NEWu7m3k3Hx89hQc1b6x",
  "key12": "q6Ne6hRaaxWbPeterd6xYS7re1YCYVkg9HwSUzwMW2f3XJHLk1zqrjyANgMGnZZEGhQ9WXu2egRVpCYpjwt9uSV",
  "key13": "48AjkESUSUf6X5PSeSdhVFGP3TcCTtrDJomr5WRi7pEWaLaFXRjLEJRVfdjy14c5mnhhRmTpQp2z3XpRpHytbKu9",
  "key14": "5XmMVheogs1PrSsDaqbFnabj7LBVF6Sqkq5QQjiWkyfMc2QXeN1prhQBmJjEQBqba9rvbUHBUYhJ9fX4xjt8GkWV",
  "key15": "4Ee79Me6tCGqNwBKFrbRxZjSZDPW6FLqB42Kpj9kq8gocCozfsJqi54RQNHESGQcrKnJT6Hd1YhSz3BXsHiM2NXC",
  "key16": "eVk4ABqrhfEj6p2nKhzWPBwvfMzbzyFN9M1H3HZuL64XVRVFG7wULYpGZZemiLpvk3NYJaUCAj18E51LFgbxDz8",
  "key17": "2gXRMrC8hW33nqR4zhyEYt6A5Vi3ybcS3eBYyPBZHffE6k9JhTYPY6AwwX9f97e2tTUb6wr8AiyqmCv19ukRgAAu",
  "key18": "4XxX4FtJRtfZKG49UM7kdqhvoTKphcF6CacheWKtwWzURbjxZUMGYgfnffPkRPsAzogUikfYj8vybejNzCEeyFwo",
  "key19": "grGhc83FzCEs9MAzCmhVopm4SijECNwbkUaXGeBtyWc8gjuZFPbdrEtG29PWbfaVzwEQ36L7ajeAeubuyUzxJnS",
  "key20": "gdbQZFxLsbEPawS849ihk7YkyJtSMk6Qcp8AJT8UzZ7WbHwfSGJQ6jh1UUJzuHe9av3dWdX8WFiaMn45HEpZKm4",
  "key21": "5vTkPM7oe9Q4RgipSsYCxjK1mZdsNw5NQr8qMCy9rn1sd8QrESaeaTejpKBhHW1cv7GQzWgwq3shCKLnM84t8GfE",
  "key22": "xb2mo1DgfAeKh7tTWHWMK8nGA1yypaVSBGsxLhmSMQiT4hk1Dsqy3gxaJhgxSDzrqMNYUPFzoYQZ5BHdYDcvXUk",
  "key23": "3T4CzUedBThErCCVQjwENPqBV3yfrjBr4YpQudaSLSwkiNUiYUujHT7beEfkKTiPsqbMB9F6RxLngi8dEJQSwgzc",
  "key24": "3imW8ehiqCHFbHh6qsprEYA36DuSUmirJ9QVBpNi1bSQ5S2XuSVBzWvfH7Ld4dQLkp4bSiucKfRDqz8geW3BozyZ",
  "key25": "5ySsruZAw8eKNhonU4aihSCwepWkb9dDSEdUJyUT6KxUzhUM1QyNp1rf6a9QGiwq3PwHRuHenky5SJ23nA2e7Fsw",
  "key26": "ALW5rDrCeDFKMYe9EAfBE1ffcvQcuwWGznU8qmhioHRjhEDGjWk4ScZioDM4eHLmrB6hvHXAtUGADQgFnGWFFeW"
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
