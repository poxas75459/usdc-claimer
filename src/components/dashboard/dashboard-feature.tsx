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
    "3G2w9FQj6tbTkL87zT8p11xbS9UR8DCt28jG63TYTJYijCCB4UjEPqv45pKxmNQvoTtg7nYuQ1QfUUWypC97n4zn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WmF8Yu9aiJH7qDfgALe1ipfyLXtcENFmsUUHFUw42rgwnHXPsp5KzHfNxMKDGADrt6Lu7CTap4jvDrXkNpPXrEG",
  "key1": "2zppNLjay37t8UTsgL17haGAtQzMVqu1daa6TkGZtLk4npAfmjWvQytVeRHXGbLK5bvj2xkJi5sEoAqQgmBze85u",
  "key2": "46TvLxzSNqvgoK5TeGVuGSa6yho1n5VqN1UDhHRxeTJABCyHnZNywggpyZdsQAxir9zWqKCMcfskJja72NFJza4B",
  "key3": "3kFBFmURytr3P6aXevp68AxeMqmTeZcfZG4FYEgwFoLywradFMjKm1XBAa5x9QJ9EsBEA2iav2UBMwJFAoAwYkCy",
  "key4": "7M23oesP4CyKeyR8P8c7CWA3a524daHWcd9mGR2XhusJCiHmbAu9fvHGyVVRaP5ff3N39JwtmkA749iqmpacBg8",
  "key5": "5X8ga3GSiNdDaWyx9w93EySeGNaNUUqo9PSqvPQAZowiE1CqqkCkB3qnHnCiL7ZUXTRqh1HQtBVNxxRrUTxh3NZo",
  "key6": "34a94FWxcWTHFGPGiSKDwZ1eetHuTedeWZVnXCiiaSbuMkYgpftQt2PqDFBBDobXbH6bW7xhKwWyfksqZXUFuHC7",
  "key7": "2uPTafTz6UHWWoERWFgayqyFZDeS7r7TEqE8Xx9zn7XqShQ3MgRrwteP3KGkGEfb6E5BAd348NjEu9c9V6CehpPr",
  "key8": "2ZNZzNr2d3Mjcac7k2MrXM9sYFpsxyXc4eW5QN3pRzf3b8HRt8pR1VTg7GULuewHvjD525mnHxBLZqo8mYnqxT5j",
  "key9": "5rrkiFUDJEs9PEZDhosUunBUUCY9Yz2EobkR7KkUfSq3S8AV7VQNiLPFRCvRYDBm8S3tx5STBZtKBUdsQHwYykpJ",
  "key10": "2beL1mNdeY5cVGnqB1cPN3JktgCqitsap8vUCLepF9Zr3Rqwfkvf6krBka5h8Bb2nuM8ZeSbTWaChnWFcRj4QtQT",
  "key11": "2DtmVk9NHWzA4RMEpz1nLwn9t3fJugvPUfxZx9oFHaAprN17697ic4Ds783Xn8qPu8sreQn2dxnWNr9ZhK8BDawB",
  "key12": "5rB1DgoUtWivYuwmfyszfv8XYR89sJtirvMSWxmm4ofCYYruVm9EiTbV9xHq6PX4a5oa4Ui5uFQmjkQDEaHn6rW",
  "key13": "4goxnWM1WAW4vVZRVqLTTSvkaR5169UunBAvN1povUKnQHQT3FugR75s641SKcBJ47hSP7bmgZGmY6Xx6Jx79dc6",
  "key14": "4Gq6nsKZiWAMSMPWxSKPpjycV4w2ZVTzcytrR8wCip7NPYMXeDP1raLuscjjCjG87jm4qrZjY6jLQ61SDEXoM6MK",
  "key15": "Hw49GJKuE6fiTPmRBUmq7Lq6f8GvEeGxzTNMkzQuWqxWZdmqSNGzF3DxPmS8Aj9mYoYLzH7kRA9rBBcMjcYXXLU",
  "key16": "47sxoSF47wJfZZCMMrf9fa13B3yK5ppmGaPctU5ZxKtaFswvYieZ4pUT9ENqeD1QDvZH4XLNpXN4SHzWAskLi7Ha",
  "key17": "4X5eZ7X9HQSxx9Eto3hnsMKu6HxoVc2eew6VRyWzG2YbmnfLhznYU6XwsMTyPXYL7dFJ7WE7Mf1eHPK5KvwyAk2x",
  "key18": "5LHBm2N7mh4bfHmaHL6H5a5ovK3KzGf4LMuEBeCbz8aSXeYkZqCSfXDKJ5jRHbtETuPi5P6uvEFqoJydeT45ygHN",
  "key19": "JNj2bPhr18RWekUCATiN9Ncv5rPaH94ccThm3NYV4RX13mHyYceUiUHYJaxkSokMRyLMEBvxLSXpje9i8koMgjE",
  "key20": "CtknjhpnTECB9Vi8e8qDFcuBsb9rndbAPhezHL7Ltxc7q4mnPqRdN8CVDfbHugHogdtNhJDs7Kgz7UUhZuywrRd",
  "key21": "5wWRmSbdWLzKjZ4B5cyVjVGZ3Y8HrgJJVeCeTQsLJCvaYXr8XrdM8dQTy3LDYP26ynXBoDX6tWrDpcGsLWXA4JT9",
  "key22": "i9y1YgjvddgmvhJwipHb1aDZdyUDaFYAYvFK5AWrAZPVmPy9RXBRwFdDd5eRG6p2949iwLePP59mkgerRXd2U3o",
  "key23": "5HdBVU89EneZZYWQrqT9qfkR4rhrzzab2wzdBdLhYNGwXAa6dPSGrpMwHPWe9BXjbGaLYS4wymmG7xaY9ZJriPzs",
  "key24": "6KaZoxupr1gJdfBW5J7fod66cTjkasgFhgvCABP9BTLhYGxa1RHNWQeUpUjM7M9K3bMCjpGMStaUb6hczCbEFvn",
  "key25": "4MrLsSovYMkHLUJAeadp5Pun5tTdbg1FQbFmncUvLtb6yGKp6QYnoAW2d5htVrQgcttgQuB4nGWjPuZvSJ15f1QB",
  "key26": "4FBB65BX5ERTkFyBc4mTciCmXnfP94jg6LZTZt3HzNwPXMQ7jBwSdGnF9WVsyawC3nZt6pgi26zCTWA32QQyTzsv"
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
