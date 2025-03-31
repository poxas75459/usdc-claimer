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
    "5T5cBu6KmQV8BysFMZwgykT1PCezBmhMivCKg8Gc289ha2mgzV29u8fhTggLk1vSuYvve5PvJx1JCcauvMzUN8bp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sJsQCeuFzJ1UgDo8wZvasNn1Q5WGLdqtY8CWaYjFbVJCQTe4cpYC5Egh2VZvJtRiui43qdAiRMJZE4th6GaXgLw",
  "key1": "5RwXB6aobyn4ErfHWCmMUmHSmCQDUqdqqut2yByJWTV9CBc9VgJ6GaWCkLRgGC27JMC5MTCgpef6h3r5g8e9uzNH",
  "key2": "3pYrvCJDxnCiLhDtU5QtcjFvmbNnSFzyE3TAU9PW3uAx51JVJxBKFceBqiCuYf443R4uJXThiWCxsi3LpYmtYbQY",
  "key3": "tSXmi6qbjZrfpou6FN6qDE3PgPfQBPmGFPzoavhnQW8XBayMGySEQaqueeMqgMBTA8Dse12N7cYBwyzF89VFhRx",
  "key4": "9zUds9gk4RnZARqrSN4Hdr8w8g1w7tbVT7krAiRGnGm73eKSrmLQaeNWuCooa2mWRVbAAZAff4aWieJieXhWLde",
  "key5": "5Wf2EEtpHvJDhpYBKkB6VzPL14FFtgMUrVuS9eL8eT2d7hGbT4GznenGKQkZhJLffiRrgCbKAKd9rMXA3F891HY5",
  "key6": "2HcTbQy7nEb7DApWiwsRGdZtGZ5eFKzefgbX5CeAVkeMSFQQC516uYL3Kfm1j52dzUGGrNaHsr3ehqb9SsEYvG76",
  "key7": "5BXPcJ18BE8tLNQ5RmPebQoMPgK4b752HfKKMLxUqJDcCUAr9Fk1uVtnqJfoe4mjbPhS5ZGGp9KCHe83yaoda4xm",
  "key8": "xSpxBhopVSGwprB5CgdBg8dir49iSxNu49nGeLQnFVLDVXqwWCLZtS1wPn7QmmaQ72vSoVdBecqVTohCqNta5od",
  "key9": "3znoXGebDYV56F77C5uVgvJhxgzt1ysk4xbNgsvPYaEnXoBeNgD3MDDZTeNmGGKqVrkSLHp6ncD5X8nBKCFceHtJ",
  "key10": "2uwztJKg8UaBugYyBiuDsQcbPyYay9mfmCEhQ4WTCKMW2Vneecb8DhzUtqaXHJrKm6Afrz1hUN2Vpippn9R7iSbU",
  "key11": "4pKRrNw1vDrzW1UBT6bYM1CagMsRH8ADPajAe8Gu3X3kKSVmbuyMcqyqgMk6oavk3TUpfMYBrkdDKTSrqdPuRaEU",
  "key12": "3uqsFw2tRudxAwt2HEpHXy8MJYDti8cE6JiVzZT6EqwugpUkxPNJm2ukgqiRhDQNMQyUmRMVCjmQgdARZB19Yaju",
  "key13": "51J5TbxAdVH7DjW4iXtZRxEQ6oN26zmJ9RbiVEEYR6YjLiKfKSNHs8eeRVc7nb4b5WofxGC1j8wpBiegLK3p7k6x",
  "key14": "48pWpfhWeznemdqjyXAYPTHQKvHo63UrWdrVMKAdyz34oTJNZ2rBtqQEAbnWoAtZfQ6SXA73eha5Ddb4CxwWUZn9",
  "key15": "36UddkQg4Zt6z8hewGppV3tgSattLc9LEFQ2BZcpiNbxzDqMJGPtANtjnyXaf771PUyhdPVocPY6ACocQG2J4TMW",
  "key16": "64g7MQaBJLfqWDZZCjVzPvztByC7PSTnxgavANMJWT4tHdWKDVCrJ8KHqEx3CGj9z7bm2vAnAEFnBLAbStjVbwP9",
  "key17": "3BYigEDi5EX1JB2qeMsXMKGuyCcyKZKFj72w6WyUeuUvz7tiGiohVfMCYStqskfYX8nXSkmwDoCBFZKGCJ2Hcfti",
  "key18": "2YPvk54EvHNiaXV4bCDjav9VYKym3cU1B4ZGXcfUWcfKmEg6UvYCSCukokmyFUd2ffA8m631RDBT3YfNtVGdVDpH",
  "key19": "4DD9yYLL3BADW5FxM6P9WJz1tW8wYoCMqxWkVRi7z2g8HKYp8T95574NhFvhJNz4WpsPp5cK9gdcErafpQELXYWb",
  "key20": "2xBts8sMYVndiVT51D1bo68mzqFWUAMmt2wQBHH35WuNjQLRmZUmcAPRu1kATnEoij9hUzVCiKtBGh3g4aE4TgKw",
  "key21": "41pfvDowmEEQxFiFYoVWpJqvWqRvzVascEngiFfiyyg5Mrz4kQd5E7zWaTKzaTFDbTwVcTMkSuGgu12cCkXHCKJJ",
  "key22": "4AwqKRNiTt7zcohyYAVoKCkotmjHyiujmEFiLWfzoWBivJqiTNejYffBsHno1wDG8mtVndj3DkB8yka5NRGdcZtm",
  "key23": "58Zdz9soijzSnKogvmPGJ7FZPS7hQchnRC8gW9Gr2JCCkDoQBoiPxEgnsFM334rwncV8un5oS3K5VjGao1qR8pQD",
  "key24": "4uDvgnMgNvVvHjuUfmpd2Rg1dkoB7H6gKuxU4PHm4p3Kfmv2FUD37PkUX11k1gA5WgXDHM3feAswoqwsFu3WkmRM",
  "key25": "5NX2BQUbmWK7EZQqEbhSSoLYxfnLQ1r2wccYjKUrwQkEpwtyZ2thwpFCyXWoMgPgDbcCtFc12WHSwBkdMXKCeQ3N",
  "key26": "2EnAzW6CZyWdGRXDmx8N4twYpysoo9AT8XTi2hGUAj9aeQjQLoAEca8QkFFhhVprMuYzzxTveVc256yavCrCiubw",
  "key27": "4qXNcmiw6vo42HYr3YjRqqQPZFaBSJcEDKmYoLomXTD3yzjCRXGgYBtmxaoEwJc7gim9mar6vVWFpQ65gTkgscx3",
  "key28": "45Q3JvtKybKCVA4ARrN16NCmz7xfL3qnR1sXxEFVPJgg3w5FUuaFcHGJTqiXTV7cgrTDWCgQEu6BVLEz7Fiwrq5n",
  "key29": "5jNb8vLKE8Y5zp9LVhbgQB55jzco55aaT2orsZz7WWvXbdASKhPjjPKhLiRkvepAf14XXSNkQXG251QzyirBrT3W",
  "key30": "3f5mbArcDZsbQAeGYVvNNcg4NZ5kmQULf6hk2e3e1biXMpfHnjNYMozqQza5XUDKZtaDE4y3m9mQbvPxD9rCNVWg",
  "key31": "Ek5UQ75NbbWAr1emJPojK8Py8dQB47FH7NJDy7Pe3CUCjfBWDU1KqhvqL5bqASSr2Baf1F5C8xRNf9Mw3G61SxV",
  "key32": "2om6WX3c2MusN9hbfJ8U4KXwoNZ3wXZJng1KgeJvmr6dRVPMvC1GN7eyuhQVojTPPee2exCLoKzu7Hm2658dcPEh"
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
