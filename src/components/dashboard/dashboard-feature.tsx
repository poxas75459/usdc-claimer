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
    "4BfXpfyyfnhSaetrUYVn72MtnZRQH7ikq84U7onM6Lz5jMVmjNUeonRHjTy15EPGC9xoVRyg8VHdDi1yRrAbqgQw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hkDoC7JkaH3jemK3S19psAZ3nEcnSrmd7bpqTvQqjD3xY6KFRU2dHSTGagog6DRgHEJaCfKcxL9D8xoDTzsz2L1",
  "key1": "3RmZWUDfbGmUFgW3n8txawmr4SLk4HJrYBfamFDAexVsLYvrzyNGSRysLeG9UeHx4jNc2BBhfTTf23fqpVjCQhb2",
  "key2": "BMSTNcGHnSNKPkmnrLaRL2sf5kFKrdVVLZ47jo98wZWkuRznksxUoeeptBL8feHptbCRFTEmHU6fScob6PFLHcw",
  "key3": "ZpijVqpbZQZDEx1MhbYu5XYZA4tKfchitzpMA4t1UAJkb83czyFCHojXbLBnr3r3s2Dq34zu4ReF7VQsMzwCmyN",
  "key4": "p8Gsp1BvyYJ6wifxFAeWxzaSPxZkA33XeeS72GASCUi82PucTDMwdjuYb9cSLySBrYfa667ft5nfepoyRYBRVzJ",
  "key5": "41ZXYhhLm6eGt3jtacf3jmYesW8yMipgvWgF5Lxs8urGb2BdxV6WUg74u3W4kE4gWbYep8YyPf7xo7LynekzNDee",
  "key6": "EAeFmwwa15EZQW7GSb4AfzqRZfq6v7UCn3WjnNG1sszzpsqqJqZHwQMMZg4TUzRzr7GurXNduwcSWjdD7JZSZL7",
  "key7": "5iPkGJfdzabiQ2ZpPrd2MY4Ru6nGRFdnEh3aMAAP2ZgztpRXwZWv6Pof1EH8xMk1movQNyBwYtAqFcKzcRA2wRyJ",
  "key8": "U6HwwAMdC6WZ7K2ioLvyNmn5jTAhXvPf7wtKpvmP3ydwNWKmwvB3pNGk57DfZX81pC2DtRULnAdcCpnte4MFAUQ",
  "key9": "47GZ6rRDRUoFMQg1RGcKHsTn4q9ii4TjaEmZdMMi6597W1bZSmGSzJjd3EsQS5WNBu1ygHJy5fNmBMs9JMWJH11",
  "key10": "vA4HHJ5fiHp8yX1EAmTknvu1PkKfaPpH54BGDK6Ruy4aMqqhtSYdMrWiC2YT4xUgkEBND9XnTEx8Xvnj7uRGUox",
  "key11": "enDMNfSe1cspt4WAap2hLz4UY3BgjUFE1ABPw8xCRQ7cP6TuPpRHAuVCxm6d4wvEe22dow8Ypoypj7wfqZfwhE9",
  "key12": "5XAFMoNxq6aiN6sUoK4SdPU3Zwwkm3XdETtkHWamMoPNQJdmEbad8VZb6reodVjLeCpN4PYT7KdE6xJ9bGxPkXCQ",
  "key13": "3LrCSVdwcsGDzBf7Pw3hTJTTvHtcevSAuF5i8PVmKKS2a95cRLhx4BYQCHE9UGSyc53r1fsH1bUebB4JnGJLNSNU",
  "key14": "5EacGemNmxhq5bzVid4tCFSt5iWGe8NsQSYyZovUUwmyM43c2N2fGPLJxEP7MUz36cXEqX2azP9SKzshHUquJrb3",
  "key15": "5VgCqpQ2twJWgt3pu4QPUb4jNe7iqz5pDniYxd9sGdZL1wy3hDHGbWQprNQPFubmogAPPik5MP3rvXorGDTEsJVy",
  "key16": "5nj5EMvMYrwDAcnKUhzcb7MXZ1qNj7hLHCJhfHgTUEqD1xEjL6ApY23P6ibD9xhA4pd6azj8YUqKukaRHNTTzfuB",
  "key17": "4N7yqptPzYa2QNGHvMFDF1TKcTRCM9n9BhPPyUbMs78pTFeaivDosnvpN5N4yvib9CreaKF12QekyDRnuaKcFcAr",
  "key18": "W9yQhufC3iS1buZr7jriiFRi7tTv33bS82bWfvpESqBvnaaDfmqN9neaFYT8YaohvinHprYcsSTBGNbLc3vCDqe",
  "key19": "5PkxCm98o1s3zLNH8o5fjxcaquDCfJZ9Wf6vu849vDvqzzaicXdehNeAVC9JfV3ahMzoav6oErvXMd7PH33o1fHm",
  "key20": "pwdfunsdPknSTTw1n5Z2B4ktM1NpvggRHACYk6WKw3S7Z3ux6xzCtz4PedSzsjzU9C5djNam7p8iBCDfxqUcvH2",
  "key21": "uWMtBNtFLNuPTBbkN19DnJC9nGB5mfRi8o7HGWH5FitNP33ZaKpnTfZiP2bPtwhmvNvRchxhEhbTJpoik88G51U",
  "key22": "3EeheD7UcNbid6exuSM8PEccBAUimQ9DDqNZRfjeE5rR6bjkthzD7ka6Rw75aGjy7uSA7auUPN98x3GDwbTyLHky",
  "key23": "3RxkRpoQaYpQ8eEuxYPedYWSFuhSYdKdTLvLSb2R4fo4WnZeWJAFCNngja8c6PGAK8geK8BCSiMkNtTFJB5CM8bz",
  "key24": "5QMLiEFeuKJFLuQdygaA7NaHiCFz14wgHaZjxAm871v8WBP5upu9dKJgY1uYJaet3wyMZHGavV9szhSYX6hHeHsp",
  "key25": "2fa681nbFBdLAdqzWsYqfWEhNfRSedst4HTfV8QFBSL249fJveyhURFBHZjWkB8jhk7a3NSNKELHhdFhz7k7QbAv",
  "key26": "5Cq3wQ3HfCVdEYo5tFUiqDh2GWPuDhEMKVSSTT8N6bC13cvcCKtLFdpVCc5kFjbEpk9PD9L3ATG9WxAKm11ZdgTj",
  "key27": "4MeqMv6uxPMCLW2X6JxvQ13qvfpv8EQ2XLi943HNZrfEZSL9YgG4C2QHdR7Urbm2ZkjDp4GN8Wztc2WE1YcM5xpT"
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
