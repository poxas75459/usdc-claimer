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
    "4HJKttdK89emMeF2YT1E6ZyyriLtK2Fz9F453rHLKnKydoYCQsfjdBSBMCRiE2LRf7rwhCVqKBEDpYCPPjyPrLd2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gcvEud5jhNcU4G6haTf85ai6vigFbRpMkaXPd2aMNDXd87rbZkUDGosqxYoHB9oBKroFMBS6SqksvxEnG1dTmjQ",
  "key1": "GLEyZDSvprKLHRHVt4mVbb1qx3zfmbdJ8xs2yhGmykt4or26kJZPE9aWtn6Ndbr7wg6wu5EFRahuJph7Q1GLmDP",
  "key2": "3FToSTCaWcVjdpmEX1ksBVDft6mz4quzNzfWfueadAV8Q944YoBYFyojT8w5bjKdjqLd7JsizqAwNFzdDgTtBweh",
  "key3": "2MF6nQTBhrn3rSBt2CeMzApkeWVSKfp5r8oeM2CzvBYqk4Nu7sbi45nBe7jFkjW7Xf8VgP8tBMC6K5cL2HhZUeoE",
  "key4": "2DELFyT24ci2ih8ae4s698JrdGLGfa4xW9BcdGy77oEUGnC6TQ6SnBKCCyCprZoym6syWWh4JY9zhPh8Fcp1Bhs",
  "key5": "53Z1WE9zGMA3QSnHdHMWoBfHzGPnRQTYT4egpb369zKLNKVJbUWxbJyDVqUHUHMFk1MKvnerb8oTpdhY3hwL6y8k",
  "key6": "3NVQhkmq8fedattXWbfZhccQQE8jE6afWtz2VN7vPz6TG2uj7VDAkK4387hoLGH5yGdYXXU22wLBZZFeiG12xygx",
  "key7": "4D8WsnHSYNYi69NooHRSKQHYPTxfsT8nsW962gQVGzPtsjnsnSTL8R28vqY5GQStdkVoxGsXZ3vA5jzUrELJehHf",
  "key8": "64YB69VoFH8in9H6rZcTkH6X4jCwE15Vy1sNC3PknSpemrpqrwG4owjoTtR2DUmWTGvwhcyWh2pEwHEBENAAiQMb",
  "key9": "3PYfFRAkveEwt3yrwT6VWag1qvGcvYJtJSCVGHWiEKAw7qu1NWQqHbfNMgaYg59mo3SNvYxTm4jWjaE3oLysaRdw",
  "key10": "58yix7xtZwhdj1uQmZKpiwzpYQKjhZgdqjDaMqCjwqjHutSLMJhyuLT9dMNCBj8NQJPEnK1UsKryqKdFGgiTiNLL",
  "key11": "62zbzKhL7zt8aAf3oLiNpX6LQLfbXzTGp6J72W9VQ24VxTDk98eruFJVMKAdoTNbuemmLh3wpDiYBAWWW2Au96yx",
  "key12": "2YdS3SEYj1jqRqLwh1h8LRgVSrjiNGu4xR7zj9hx3SxeaMmAVKLjAJPfp1QTTVDxXjGsGXogG2kMroZifmjX6VMu",
  "key13": "2PCYam937xezsnt2JJFytMDb6EPuC4ShD8pXieijKSQMCgTFWWuSso8iC2tTsu5JMhTi3Cyn93G7McWo1H7uXpoF",
  "key14": "5WJxg45MJPnWrJCHwUCR2C6UKDecP8gagAjcFRZt8WHVbnbdGQx8K2cn639Diumkgt5qtjysK6Ny4idyavxP3tsX",
  "key15": "37wWSgpmuCxbuXNZXnDjo7NnQ7HzKWvGQqWptn9ajyfQt59U8gt5JduSvxZSJJhkDFGDMFfzagDp3KuUJczCVnRM",
  "key16": "3TJKshTHRTYU4UHQ7z7bREAYi1GYhLNgjcNq52TYDMgPxffMnw6big47HDxXxr7YHwvCeM5gFf23BqW2VJhmCzLK",
  "key17": "2LoUV1BwDUobF3Vkw16L4kT2BPVhV6SQ16yokhDrzyG2QhsiuzwsnXvSgBPKGCK7SJ5U9ev8xCHuRXs8t5LqwFEA",
  "key18": "2rtcaUkvm4ZKHyG7kDhwGCvDmWrCuguBJZ3Jgraj4GmbGgQAMC3RqfqBR5JPxzTCy5xxvN7A996gq83KVV7oxSHv",
  "key19": "2FETgBtV7Hw2rSivAc625FSsaGAxc1YhtanaQPRq8PZtTfuikyPoaW3XHTTryXpQGk7qruA8gQSbWRo3ocg3VCAx",
  "key20": "3VYwXGHHB1wxwLabqM4e2LqV5pwrVmairMaCrCovpUyDeoZGrEnQakvAcypGd3VrQFP5YK1auKCdK8QzNpeym9G7",
  "key21": "22BwzWBdpK8jSMipK5i1rZPLhZ6uKSdVXNo7YPC6gcKgqpLjg1Wrh3nKezQCWjXkMQwiJ3wZ9FCZBe7VZw5Ehzmg",
  "key22": "5tLfE1mBCfMTx7QLa8XkNmCuSFDUn43HDjo3mELVTN7DdBMh4EA8Ri3b42MuKZA2WQ6pwDAuJDmqghBgsQXjuMKw",
  "key23": "3kuXgPcovvXs2iRFgWDD4jK82dXZKAFtz11Wx6xNMQ6qVNhuNoEnX74oS6efidKzVFiJ7wG7jZawCFyzTXjEe6Ts",
  "key24": "2GNKjNAqECoj6MP2RfcFCYs3upwDEUv5rtjYtbpnqYYWSizoa98Tcs4vQSRN3jVyJUybb44Hxre2J9pJW4zavYPR",
  "key25": "54ueMHuwYp1wSQV74PULkvUevkDEHq5TgXV2v1e68DUREhRZrvUF81Xv3bK69DZ9vvkPRSdgpBYJ8pdJBt877NvL",
  "key26": "4fH7qPn5RLVEQKv9H5DS3adw8XVmx1R1aB8FRraXRo16M7LTJzSN2fesqfx8RiXkvAB12AxGoC471kJZWGE7v6uM",
  "key27": "4C2NpKHwcHTffLgsEqM4oGdFYNdrhKtYmwPsQyroenMnmWiUtBQ5jrNx6Xf4wWWzju9niB8K7GZoSMyMdhgQVsGF",
  "key28": "MTKmJHKHKLYHGW3H5uGMrvdLWX4LsvTLcM8svv7rLNCUJ6oEqFKgz32Mm8bre6JTjyUk5VFZhkJopA41iYvMCsY",
  "key29": "31BkqjZ7ESNJ9cdbZvkLTPP5HCvTGmk7sw62teBYWFq1s3BF558Zi6gr92orwADbQTSdzcCDhgnq1mDzZ3oFUobC",
  "key30": "3ykC7PUfdsJVQGExpF7p8tPdiJLTzpcf3ph8WwrdseP9Vri3WSNz2atbRHMy9K1bSctB4Q73jPqLLZwebfRp6B6a",
  "key31": "3F2wVqKeTESphLjKdfkfwebai7GGXnsA64ByUtTyNujM3PZmyUqA6FxrJvU8wmJpNbrmyzx547FeWTG5uU1Vii7d",
  "key32": "2gMqp8QPSi3iTxC4iBiuB82e97UafP78AKobh3tiRy8K5qgfJ7jx7EgUyB3JKRxuhma4gu2BcaNSeLQVu7pxsJQF",
  "key33": "3Az6eTxnMbT8TuuAw3ff9UuD5in5C9EX6rDP5PLty5Ms3jERzMLn3cM1Jb2arzSHo6AuTp2UWCUfCc6wPB1Qz9AG",
  "key34": "2pcTY3xo45TPZKpCYh18qts21oJyWLEpaB9kJCsfSvF5MBSLWHZvyFfVMsuFKzT6w8bDNrD9Hz1tfRddFnC6w6wJ",
  "key35": "4p7q531GXkPvMw3NNU8s4YtXAqYvHk5LqUSEzjngvMvSwCFemKM3ssKnb9k2UrTk6sWHPc74nXdMP6oQfuKhaw9Q"
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
