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
    "5aaRkYWsPQEFZVYW9gwmxp71JWKSLSKjDJZPgJcmFh51gVcA2cVutHNMkS3SLABhPqUKfWuRzXqzZyGnffcrGefY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SFVo1E2UL5UfiiE15QTAwbqhMGM6Np7BdnnBW5qcarDTRfJUp3ibTooBbjmAjiPeamhnTJv6G6deu9H88DyNuEN",
  "key1": "3NgQPu75TJ1gBF9CbpLSotnS1pbpEVvCRGGvXtX5SBFm42WH4k6Y72jjj9TksBvFZeUV9CJkQjFJbNzm2rLicvQ1",
  "key2": "3Jh1sAKwWxSUep3m9y6PQcQtqsHu6m6QRBQuCbfsDmbccap7YRkXypfHeikzE7Xbr2U7vFR42x7aBU8wEKGUKwdy",
  "key3": "5U8nX1QJPmNaKe4WnPLUjNqw4Hpw7nJCTg4uzqV8fi8xG96vSnUzmybh5YVtPEFBkQyN8KZG1e3PQCrH6UgN8Yix",
  "key4": "3YMb4TjZ26wWKPo5djP7bqZCx41xUN2tHxqnPFot8c8RnZz2TxZNwxFnToBM5vZVSkE8Xctmhsepp8zfaeC7cSr5",
  "key5": "3UXo9RtcyQxdGw28aE6cvTRKcPJoGWWCv2hncLmNL6RWAui42mhBRFZMqEyxc5zCFKUWTF7oJtXF7s2cGgndmNc7",
  "key6": "4ABuHXvNGteBxyQjCMduPRpFu42HkUsDzstqxat4Hd2rzFjdm3YiaK6uwTLJZMtGV1zCJXBrKcF2ZdfGJQTFoo3b",
  "key7": "3nEvi211UTYsSCW8KhRqZEqKsAucm5CsNamMK2XBQKTra396npsHhDwWSgtMt33LZQZYr3cNwC92ENJC3iAwN2Lj",
  "key8": "4oC1GBWWv1QbJf57iQoVtEGLCGP988hMnqVCSk1GJwknaQGV1PkdbeyNtGW8K4vwDHaKwsN71HRHiLh8kwQu6VkJ",
  "key9": "27AbTzGJMZhC8Q8qwijZH64booZZ3jTrWATGAsi1tggtQ2ZmmV72mB7gMFdFwbMa9YuEWY9KfHdYqjiic3eRTDKi",
  "key10": "5UFRixFVpgsfKfNYFaSJoNDLPBXD2VWz4KegUrEVSQBQeem8YG9KYnAGqtvdn99TB5hEycR4aMBDoEqrehg7sGtJ",
  "key11": "4kA25vgBUnUUJBZg386NSMXSRePo23aiuFxmaNCwg3K8KrdZnu8W3cE1Sd62pvtxLj8bsxwCsDj7HKS1VTTkps3C",
  "key12": "5Wyi8r8THoms3nkXyif37gNNtnijVd3Tqrf3y8AcBrxkCHjdKS8NzNqv7i3K1fsyaRg9dfnQYW4zBpgJsXRPzsQS",
  "key13": "2DDn7peTTYnVdcTgqAcXTzQAZdG69Ux4bKSc92Gsrx7B8SekpnnUruV2WKQ43DmG3rcjepJS1YRb8Tdps4vdYDx4",
  "key14": "5KDJyvLGq4c9ZTqkrs1TT8UBFDEaFpoDEfWeCvYUZALQqSgKDNUC6QpBaAB5BovMTdGPcyoVcXgGcKdvK94rhUPa",
  "key15": "4FfaDrEWcyjo13prACbPmmdpHk9o1Va39RnxnEwBKfq7WtxC6XaJw4QVc5yHjkP8YJf5W9WhL34vZQx8MCeDmman",
  "key16": "xU7rZCJPwqGMNMLcLDQfkZGreMpK9kfT6GQVxSNVthBw9FnKBiuTy4FT8ktpVqzMA8HVixygQvHa56ZesT9Jf79",
  "key17": "5dpvTGaYXFsJGUqU3ffJ9rgihezQsokYJ3uB4XvxRbDSzgDhr4effsUH3RyV2XqPmy3hsudfdFnKptwNn6xEu427",
  "key18": "418DTsdUk96jTxtQPAvo1jgtzAmmPPwYWrKmuUvotJPSKRzWK72NRvbs9QzeTZJvg2ou2n2CAw3PJqo2g8xVN4fT",
  "key19": "5ANJwQVXwqiQcp6QZmJTDxoTogBTFLSjQQGz3vE339XPgQwBg7EwQrznLc6Tsw2ZuvW8n66vaH5diikrJCQggKph",
  "key20": "3h2qSMm3nwNMZosDyw4TSYSt3sT2Fxk5vCWNMqrDXiQvaSQrvfK3zHKUzimGZF3K1LqFZRtAU9H3Rezza5Lon3gX",
  "key21": "fdFyNcbQmeMcbY8VQXcEqCZbAbr4PubiBrvhRe5bHJVCuEExBqWUMvQ7mEKFPg38J3ueuPng1xzGotUoSj3nN5c",
  "key22": "g7WCzaUxgw4WEcn6CMxzK8rEsy7Vccp2p6TNbBsjqgCAMPvjJRSHa6PwcQGGoAGxhp5ScixH4igw28jiAimiYtQ",
  "key23": "4xsqKfem7e9dDMTnyHvrgAJ8xqjL8Prj5yb5Rf9sHwryLuLnU6L5ANV41BiZU46FzqqochD2vXa3rKDSzBMPBs4Z",
  "key24": "4MheSZ9UXh62cNLgm6BikRSLzoGy49ofvmrtvuS8G8xHKze28h5RgYwkzoJF5R7LLztbaBskef4kAUXeynPuW7Ca",
  "key25": "3UyVJit8FYFLMkyGiuQQqHUk6Py8D8yz5RXP3RmpyPadYAXE8RgkmPcri176dXWxtUjkLPqGxqaejfSNnTrJAbKi",
  "key26": "59Z5ypkAtGwsJjswmQtbG9xsp9w2qoPbCvTg1dZ5d8hzJ5wgu6iYakxUTCrhkDCMet6UkgAdSVyDmyXv5bC1aZpQ",
  "key27": "2dUX51bvg7fZtJFkaHpoH8JZQPGeE8nmZYZvjT7TpSdJ11SVkpR44Xc9Rg6pzzYnwjTQbyo7pMc7vzEfUb66XCr1"
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
