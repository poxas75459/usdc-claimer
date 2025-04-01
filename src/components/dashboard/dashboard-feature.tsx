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
    "5dXrV3gz6na6SR4pXTJS52pWtRAT7c8C645Gn1QsHLKoiupThnaTCWvcXtDV9acLyfC4JFQnvE228g2P2uCzHX6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UuTE5nnxA7FQHSw7MBUmRrqUvsZV4mWxFPgeqKHQ7mvr2cXkREsfbmfP2rdQiyexXLTnc7x3ioGFkfcSRngwu6o",
  "key1": "3a2W8kHEEr3V4D8rBUgkkMuAHxadiS82rbs6oXeWt1xZG8JbjoesnUMc97zV7oFwDgkJ1YC5u17AF4fJ92zo92U",
  "key2": "GE5cyVZjKvfYydCNQ3FCPF3aeVapGh3w9WN4CKa78spSkKLiekwXEQGm6p5teWFCvGyVAddbTmXSpL94mMRMzNn",
  "key3": "4Y2QeyDXWaN86QLcyKrmMxVV1tf4WMmmnvC8AjA5iB43JdrFwfcrM4g1mR9Cy6Reb8LFJSNrQhx8tU5se26oKJny",
  "key4": "4XYh6kAm1JNoczjAQ6P5EC4Nx7TeKuWEPcRKPiRrxayiDvsDDHDqGyDPTt148dXArx2dmAZn2b2HL47i38uvcP2T",
  "key5": "3yrx6oMc59wMtpkNxjMmdGrxx15cX3xkWPP7J2JWKPv619V2VpaPYuH8Jv24Xrh9QuDP7vwgHupkDN3sBP4RQVd9",
  "key6": "56SBDTNNbLziXDDJeEY9C24U49PHbKre88HR2VA9V1QJYUZ7ZbAFbP17ADYyKXbvdWYmo9QApr87SjSSK2CUGpr3",
  "key7": "4ReP8BFpyVuSRjjijVnB3NKYCoZLRbkdXSpwE3rtA5phjTm57DcqjXMbWxxpRSudZrTKq94BxEUKC3ZtZCwJ8Gmo",
  "key8": "2HQSxhk7yhzSqnWQ1DbzwQb7hFrCh3fTKmsuD2PZ2w7q8Ybbntq6Bw5xgp1gMBrraaAweoK95oZCsDae1TpzvLdo",
  "key9": "4ykwFQfAwgBSWwZbrbNdrRxh6xWv3SjdRtQe4HYD7ETvFnSGwXX7ugRYzqeUtoVYBEJfREirWd6w1yj54GVQqNZ2",
  "key10": "2s8Uj4Rsra8qSo8h7TBxZjtycAPatXiqFwKQphWMcWFkcxSCPEbkDq15WagqHFFDah16BLEsPEju5NKhRjVnAPAf",
  "key11": "35fReeqzqU9nHTvbYkoW1KrwAKo1tYcr9RYtyWsD9UTbVkKkqgYhFRR5xiXnZHDohkCAr3BVS6nFaJ8epJtNWfHo",
  "key12": "4GJVASkEv1un4Fz9EDivgAb2HkLKhsMDenCmxdFP2FBm4eJMuuD2VnysTv2b261kAt2WHsT8crcEbC4FQkGr27Ep",
  "key13": "21CP1D4wAX9g4RhU5u89P9MFHNDQ3HLGGXW7QYH2ichtAQW7yTNvyDrf4Sqtqtd5tAUSg14cdoqQYbqAvZy2JBL7",
  "key14": "4yYSierTuE8B8Vt8faXDe7dD7hKULDKy7snJocFwx4ZyfBcQkhxovNQbUvon2VWmEWzsDFY9DoTsv6RmKF1XiERn",
  "key15": "4fp3PGJaYSFBjNBWCNLTQaH9LAbDfuHnsCbmwoYbVqmVhwKSudtorj12o5nkmeCWuLETJ2WViR47gbT9oswneKcF",
  "key16": "3b7Zsm5PvJ9BKfFqDAwbunXz2PvrotPugod3C9XHku9h1ZThgm4AFqYCwom56pTCNyfmTSRpYtrxnChPNS15xerf",
  "key17": "24r96ZZnmh2sKggoauy1j5c8fvzUHaMg7JUmGtPmiDvZ3GqX8zV8gx3HHE4mbYBofy3YGfuUC67Q3wZMekjztZKB",
  "key18": "5k91S32vGhoPMdbBnwLUNaviFStXRhNhSH621iVv2x9YFPp1RpXvAsQA4FParcJ1Wz51DGJ8b9rabPSKz1CbmWNo",
  "key19": "4yZgB6hjETeSf2Y2REPDneBd2DxA2ML3FmjNcbX9vFHjnjTaGUA28vyjoYbPJZGkjudZfMPekAbdbSvQk1PZXQLA",
  "key20": "4HC1x3FjZKzXqQWBWX7hyx8SvUks2mJGZ8rYWiXpmwHnCvbwGKPySAmQxRNvGF9a5JfveU6HYuZNh5f9FykBPiSp",
  "key21": "TC2KZk38Gcg7opz3s1tR1GxWWNEEaFbDsPdf8uXtboRCgMeYxxNYrbJjrrXtZaoA88WeF5Mxcouz6La4XgzNQLb",
  "key22": "5uBg9GTq1BWFZQBsVH699Bs9aVyLDanuWPDLPomCo6G3bTjYfh82Hhz3hA2dtDW5oVJtCoPs57z4dWyAvBrfe6Wq",
  "key23": "36cAAdzEgJNgGDFktVC637r5nBQDng5uzutyiUZWEFhsQEdLes3xfq1H5xPKvciNRTR4wP8G6zCiMkXbzRjMBUt5",
  "key24": "5wKD3jiRM7CZNRgFrSQkViGa4T3yUbXX19WxjQ3oynCUZ3i5Jn7pJQmT7npkwajWmAioHHeHfKkSJChpHU6oiW3r",
  "key25": "5d1pXkyqHTvQ1dor6VLmAU4gSL1v6Z1AkrFDjjWUMS4VDe75SZaXQ5PBgedGURYmBrmjTKpyvq949XreZk6hAvM4"
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
