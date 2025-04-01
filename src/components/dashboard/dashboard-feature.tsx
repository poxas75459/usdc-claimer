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
    "3ytSY8BGnPTSPGUXG53PdQj8sGjrYqyomH7dR4RHa23kokzUjWmrQHddV45NacsjbaeFNFrzXuX72TQoRZ6u9pam"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gows9MZSdE9F5JkFQ8QTCdH5EZL2rA7Hk17YSmbZ59QQfbM1ntNXBhQe9KeHZ5xkLqdVqwQW4tXMErarwhoXSey",
  "key1": "26mpa4KRajMUxcKhRoZnWPzPG9s69ny3Qt45Jz3z1cJpSuqx49AqSYV84oqwz9VAwZebe7F27jCDfHgkRLz9yx8P",
  "key2": "7dS4cTZRdLHPWvsn3DqKBkqxgy8YpQ2Ddg8QXx6Rao3x47krh6k8WMR155fLhgcjJ4KeXTQbfLevUwsthrpo1pB",
  "key3": "63aUoAvYK3nuX82NCCJxQdDqxUSR6UoNrfvJfZA5uQ527qwKL44oys7ZKEJoV6KjyaeRmD6h8D8HyZe9M81y8adn",
  "key4": "w2W4vXPgJZA99A1nusHohWagmX9k7Yhw8HbEL4iLBBvQUxgVrrpSgQbUcF42SwzJVxGXQSWiv9DHN2MoJV9GzXf",
  "key5": "4Zjej1MapZ1mbG6vevuzBf8Lz2wL3pALJ6Vzn51HvC48VY9YWrF8FHmeq1xNxH5aoiPna5TBMLtHEMXSkA8SSkAj",
  "key6": "4iYDQbTgTBxFvJJoFA7NYrZM54qLVugGYnTNuVEb2qGaDBKxpya3yasxhDNWYAVfnmYNKc3MSCAuRnNojSZxUFrX",
  "key7": "2bgorDDbgNzCVkChenKV95CrUdw6VYnUe6SqcA1VwwFmLSfvDNwbQfSqeaujwbaSAnPW5h5LdfTb6vH2SiPps6Pd",
  "key8": "vV2j3EJNdfy9AXSeaUMGhgwRW7j5UzY9Wz9gT535KKGTozR5eWm65haBuwZMeqY4WyRZFNBJ5DDW2PBeX78jqnQ",
  "key9": "5XCG8v5LE1tU9VTvBcdx1sDKLbk4o3QSWi1vNa1NU6aVC7Pxmyrn2cyoD6y6eFhBjF1CijFv5dqEZCdAhN81rEEy",
  "key10": "46YgtydCDWwsADPjuUYkWusVTKNwivnbTCzxgvQobK6MqhfYNBTo2fiep71cmLKboRaYMacWtYrn7kTniyH52o1y",
  "key11": "DxoesEWLLUxgPYUERzSunCAjj5Jo7ydPKfC6f18p4RANaBfmSEdqGbD3oaCd4QjLqKYe6DqSjB9ACmBTTQcotm7",
  "key12": "21szhqewz9GKrkEGnKjqX5joyjKZvhCoeHzHqvsTed5U9xBcadqTRZMhFQEq3kwHGFUicoCfTawvjhtaPxXXZ7Ny",
  "key13": "2upKqexigb1JTbe4A69hhtLnrsRgSv7TKoVsVKsNrvH1FGsi7RezEHqxt93pnTBSt3jn3uwdWP9zKxH4yhfiDweT",
  "key14": "PgbqLRuysBDy8ZQKFSHyqi3YSPjb5a7mSr1PDnPBASjVCs3tDGB8qLxH9YXmH6mTi3SiezoeUXmeWBu4jkX9tu8",
  "key15": "ZAEcRhRjuVE2UPfq4JxVd542jaDczNHK4kbswjNwg5qjHUau6XB2c1fzrtD1ZbjCmJSS9bQqaD3mWYRY4LPmec4",
  "key16": "2B5WocDcgtkvrWaxJFS7b5B4k5mPVveaug1xpf8r42PZGauBJMGsGD3AN46RCUqV3WNcz46y3kM1D8tBPbcLp4W4",
  "key17": "2b8VsKv2XWybaSsVWesmezknac5Ek4eRA9Ti9ypagJD1TivK9oaCBEheTr7owZkNoRfHvDsuzxA4Q5dZPqXBPB8u",
  "key18": "4JDeX4UpHCB5ZzyuNSzbVFuHgCZkESLAkQmB7Gu91tr1mEAGmStaeoq6aHwB6r7qTEhEfiyYrR23HdwVsiAKzx9F",
  "key19": "4hB8wvCrDd1z9JqymjVhbeXqp6AqKCgF9XVrAA5dsMfUNQvdMz1TdsxexTWgwUhqGFh4omUvPzsDcuST1F4hbLpC",
  "key20": "3q66cqHc1sFKsgkb38cyXerk66s7ScgPSuyBaWGMqRZqJVFVt4pHvAFbxKzy6MNUvsWqsYAhS68HZwSr2dWcsVyQ",
  "key21": "5RW4BzR2qmo2EVKgcqGYN9caL9M9AUX5eSuFWkpSp42MEyJWr5gABLntsXdYfJzE7zDVyB8mqzfqBqjxDeYCxSdp",
  "key22": "4XpfaUuB2VLu2o9W6yZh4z7BhkLQfvhJhYxx9TifygL84f5CghHH3wAU5MvZR3TTYDURu3dXk1JTzFFWnMzkvPe7",
  "key23": "25w6i15EHv14EThMufedd6Bt2mNch5mUaGEjmhXYGUarBCTCdHwxzunMFvjmnSD2tF1hfURj5LAY1cAZbm897YpA",
  "key24": "3b7tVA7EARmA5YnvdQJFqEiqmgnCbC4ytFN76bKQqwFyVdDnoyzjRsRZNYArTRp3MRviEByaQ8JyRSCv51jYtPJ3",
  "key25": "237eMz6wgEYwrq678QoS4wgE77FPjQaZkxxHfN8nYvyN1SL1YHwoMBRroJ7jwF2PmyiMXh7EQeJjtacdkjsXNThK",
  "key26": "4KDC4bAfewSr28XVAbaeGyYfaKWJas6ET3PLauBinT4enP5YZoChn3NUAUkF9kSKnJUB4nsKiZsgmHyEDHZff9hK",
  "key27": "2jUccErBFWksLkyb2WtUVbnU4VUQbEU2k11Pb5AVKRRxK98KhLHkzE7D7grRMgy6LfK46uEBPrMF1m1QbhxSdYGn",
  "key28": "19qBxRHZ2AJDHudxdew65vLnqmBtEL9As6bFsD9VpFdSkLD4ziWNHmYQBFacJPn5UxJSaJKEkWCrHnJ8cBnUxxs",
  "key29": "N2erfktgCX69YEPWDohvSUoMSF9Gp8UrPcLdQzMhd8VZmGQih3rjQbuvebX4BMVp9rdr8EuCMCtNBC7TheaYx8J"
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
