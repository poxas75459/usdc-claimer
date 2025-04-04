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
    "4JzQoUFGSTe1VFBQhabeYkU3iLdDfU5T9vGohHbZ647FX5tUB8MwFiDqKUTUAnbFNNXGNeF4wdHTmiEVJ6KVGbA2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26F3Q7tg5HsfJLSQYUQUHq9mv2JcwW2RtwjmCLn1RACw6HCfkSMBUtYHTLSg5kbb4SiJhd4QynpRTJVLTWEGeyAQ",
  "key1": "2n1gZnvujTVkVaFWh5VoyL7PZaNLwSjC6HDF3EBQpghxKfz7Wm8ADrQCjdWjF6rXN6cJk8U1bSXjaSEDX6RWJu4q",
  "key2": "2kty3eFyhsRvGUP9TdrqqYVZ9QLowX5ub9evvMDQeHFjx5awL29YhXEK8mDSjuMq98uiq7gfroyWpFXGE6xEWSkP",
  "key3": "zDnsCjeU2gTFEQYLpDWWnx8wAWKwE7BEM1DcjEoFQLSvjaEjGfv14NhBi4UecVdkYZrfiZe7A2Pm9b4Ui8RLSdz",
  "key4": "3kUZ8eYAkJN1VDyAZJvtaNXTaKichsnVNxXAzHfMhJpk5QUyUnUV66ihXk1UDxdBcUy83w6wuwYK6Vj7RvKjxYaw",
  "key5": "3Cpk88zSCxwwPSJbKz3Wdt7Wkuak5icJfJSruo6iAXSwVp678o4oULzVDqBevXawnFALZHSdbiS4WKwdQqbamcmA",
  "key6": "5RW6F2MJJuua2eq3kvsMMgrShc6FMFMqYf9ehnRUDSgkLZZxD2Sfsn1hmkQbwg8chKK4ZxKwcshyCp4HudNSWWM1",
  "key7": "5Um47Chp6ZCtAeqBV4fB8SqCv2d1BSuQc84unUWZDQhWRDuCtwgxf74fNCLmEyqo53q9GeLnVqKZ3RXnYa98Nzwy",
  "key8": "2z9HSgaBvsEj7aDSHkyrZjAPqy4UC6DCrN2bmAhZ22sVthKXyJQ5Xf8Tfu2zEXpSB8EtKciXmvCtFku2mHnNhLWq",
  "key9": "r8Zpr46NwahkkQK5QFmV1BP4eSRMEYVur1YpT4qkk7M1n6sTCuJzq78tjYUfSqUfZXJNMX6fzedrGB54rQcLe3z",
  "key10": "4o8RFF8nAFnD74YJ9MRP4MH4Y3vuvHxuqDKCCeLXwoqpayVEP5Rf521A3ZdUAqZA6xKbkvmY21YBtRfby7gqPvdQ",
  "key11": "XGLz4PvbxgcQUmbQS2TqvZkLjkKsAh4reHTecZz79JguGw4KZz9rndrDhnVM15Uqn2GMTb7jkYQD5yyDRNcctbY",
  "key12": "kejZYYR3jAYqTQ73WPGeMnFpXBsVixFPygLVmWpCvHWu6JJY4naMZ1XBebct5f14Cy1BWm1g8Ei2ain9FXaupHW",
  "key13": "kqC5esK3H4Rwfbgmn6UWV7et3Ke8LBDa5xrxKoFAvpKNdc25Rfo8syZWq9EGKNQaxdGYgnCt2bHGVW15vCEong5",
  "key14": "2eQFCh9eaSa5jmaurKtoXNVZNJz11nDvNscvvYfquAXUipdapLbu6gHzCrbhphTDDJo8mbGEXDuSfhmJo63jCc9i",
  "key15": "2HNqB2zHVbST8Mf4Y8GopBtphw7b9iyD5WDgpzguAwaUn9d3iA6dXqpYuZ2fhLfAA3CBtR1bktp135SnACScCq6H",
  "key16": "4sEz735wCV6wcyVm8V5t59wfpEPBVhuvzQyzVcLs76Hg6cKXJNkxVXUCkWgSsRXaeXSuU4LSJy3FCh63Wgtn1pEP",
  "key17": "4ydWeVKwWsDhroWfMw25cx1ms424mCW6UPcyPyHX9rhyEguwHV1TdB1tu3mU3DqMw8siT7eVe68B9yNun2uhMUJi",
  "key18": "4poGgjC1kBxMF6jp4uz94wyoCDbQEnv9oqcbXRR7n76uuhC6KNk2QV5c6QJyHEQR2g8jRP5LWqXCc2tLpmn893PF",
  "key19": "2cCsZFPWBAoDP4s3dqeX5d2GusffrdSFiZfK8JKotzwjXt7y5khZ6xG7Yk1nEiJwfufoaYmMF5K4FEjZatDiRtum",
  "key20": "416ZGiTJtn5N4jTG12KkxdZcEywesa2jgMAnSai7Aczq7mVxJsywf725262dfzNdxpBmx1JFCeALUk2W5vyVnHWk",
  "key21": "4Az1TghDwjGfQnMqUjsGb83R7bc7sipBZWhbqCRvwRg3oETiuTKmQygWq9BWDWvF8nJ2GC6pDM9EzYksvAW9xnzA",
  "key22": "2BnjvW4heAwjhiKxWM5ScrT86gHWMSJTCJ2Hoynqbr1v7y9EWk4jZ7Z14E9XQCE2vf22Ri8XMAqcu5ZEupYr2whW",
  "key23": "4TqfHRR8hrfhydXeeTxDNBV327Ht5eZfvUxFtaLFACet1Y4VBrtzGg2FoCxnLUsQUD41ycjz3RnN36b1wNubfNx9",
  "key24": "gsKvF2hW34E1zmoBHsQVSppY1ABBfxaZVSVEDWmBKaSMe8bV72wrb5aDmwViJsfsmpaY4c7QbZcsyd8NfGWtqqK",
  "key25": "3JXeSVK8GkTC5tsHxDJTHCLR3FKxLCmxRRS4Nm3dFVGadA1sQNZ68gdPf1943gHNmDpiQSGhrX3wEhzD56ogaVK8",
  "key26": "HZQa9WkzABm5Xu8TNePu4va6TEX3ugPDQztNh42qmhWrHkT3GFwK1axMaYA4mGHy4nsxVwP8SPeAcThWApDMA7A",
  "key27": "Ci7gJZLHWiPzArnvAGCfujxgNkZUsM49YWAcySv6STBR8Czcyh8UCqaNtw9TaF4dUeSWrcnk13wppYrJ3yNVNNw",
  "key28": "5nzqjtCB2TU7KxdQL2XYaARKP5wid6XZ62mENNakjPv1X2F9ip27JGDYvAXTG1F5dh45N7jTxqrZFeJBAzhBcfFS",
  "key29": "2fm6zQfwxUaAD2nAwo3WY6TUwrb9NdskMhNqogafrfEMsTE3M85ZDwyqBwdP9hqGedjPqCw8Rw9Tj22FWVG4JHZp",
  "key30": "64y4bFev1iEtRUdJgAZcVBngufYy6MbqqdE3AJmvfDNUNQ6RYJQ81A3DhMa7Lo9FPS9CfbzETKhXWVmnqWkCSwrE",
  "key31": "2oPmCP3Uh2m1UwkYxgcDh8zDGz1Zu2WaafustW5GLPaPomUrZiR24aMu1a5uRwYJPWmLKrKMAkDvAfB1T5uzcnz6"
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
