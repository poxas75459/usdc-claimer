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
    "5rR6e27EZX4DzGzyGNsA2oQWZXcetEXtPBPdG8Ynyu8ftgfuwM3etSA1Ji3783wAmGb2C6nmCGFZhnEA7knbvJY2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Jn58G75TnHJkQp988bW8zpR8PF3rfmTx1DSYp5BN1fcNPyXVbom95cRtPDzeSnTA4oka6uYHrWfttvDqExYnhpV",
  "key1": "4fpewmWThgcZ9RbEbMPeEXd8Ee5EX4EXSJhktopbkp49VPSGpDxYk7WS14upcETEyXL4qcPmyq3tVGpfjDj3F6Ar",
  "key2": "5UCS1v84eb616FN3QdfyaYNg4mevHeWGwcmJC6ZuFHZ2MEtLC3E8U8kfm7LRfinfo7LSYEFFfDkNda3PiVego6mW",
  "key3": "2Hj8bQkvqEnQJpPNEwsjiXXL8EnhC1D6wY4CWhar7shk9H3UKea1idGPpdWd8E1CW8VHkFo8HuUrwMrK4KBteVS8",
  "key4": "4nwpFjUGsfe4qXTS1ivNVfCJsFu1JJDiePD2CCwW9UehHRtChic6bjHr8rRcAj1oW5oVJxd7aKAdrUXYGJZycqYv",
  "key5": "5dtmF5smzjmXjJpGrY1MZ3484mMi1cUn15Ybjo7nifPn17mT2g3T2K9YjC7F1DzLeL9JoomMJEPUXgfLXH1HKQMH",
  "key6": "3fPWnarZkYrYSnmTWQiACzQ9hi7q5F8SXhv3w7oaU2QLUeZi2NWF2V9HsJxVNaGDZSivi2AphdBbCj6oyM6EaWxM",
  "key7": "5Q8CdrJ5dZLgtNhKBonP7MZ3K7ti788YEVWUcMntKEpMg5SvHsaiMpg4ASKBBU51Rirn5MmoD1C37jS6sQsSZVjJ",
  "key8": "49RrRdGoVZZT2zcGg4WkmZzBWsdJcbkQkBkKnsW4pGMYJVC6gCZH19kbfWupPqL1ygGy7YdkD72hCL75QbQayeH6",
  "key9": "5SZ1KtoiT93CgUX5ojyKkrT81YWUdLRD7746GkzQvQfq2jFwu1j6jgktaDaX8pSWH6WKH3JKF9a38EnFF6qsnWdJ",
  "key10": "3zURYMiPyo2QCECEASLjVDHfpTAmcKY4TyMHgWhyx5La2YoPsN7AdymgzfFEBwF7CoEZVVZgqpr37GZS7J7mi5HK",
  "key11": "247Sc6CkYS71YVwat3Byzek5uFJMze6g9tWe3AqGjwFvtqyvRGzbZqRropQvSREJFLmhShqsPSdLPxN7AzKW75ro",
  "key12": "QidJGUTFpdhzqZe9pbm6BzB3GwiagSdS89k3CGyc7oCmmtfpXRq1Lyq3bHGwWnk2nC1z2g2t7jR1HVeZSn39VeA",
  "key13": "6qvypMUtFEH8Q8QucKDkCBD2F9AaA3ZAW8v9DeQWqA39f38VoFeSoyjkrCGHGLVE1WhbEXghdwmE5JHLTMxosg3",
  "key14": "5Yqu2vCyRPDUA4rLzxQrDmSwHWZie9kMz6nJTGKrmsgauYxHZRpLU4iNfWjXncXuFyxMMVNgs6xaYkuYzNArnKkJ",
  "key15": "5q9Y9NR2c6pcFgiurVSpdXsSwhp6rLEumAwNkQYy6qtscgXbrraxBSnro4NEtw1GkCpHk4Qn3UgT64PtPNBSVu8a",
  "key16": "W8jMK8uu5DWMkFwX51vZZWogttiLLEDPxkYLR2RkMqCDa5rvQLK7u1cgthLxWn9VLzQ5G14igncVrhsvYtU2B5n",
  "key17": "26hmZGUXvGFd89ayp7D5hmS7hg7FhEDt83rCaWbd6aPFnihzyTFRXfLm9UtnLKhFHFBPmkbjjNaEmPf6KxHfudko",
  "key18": "5iBt7DSVVDYkvycKNZbwgv8Qs6wnrB3cLT55K5snRnJ7cYcL7gi7JXLdVHfin4CvV6hPq5sVqrg1rfz1qXNtLHxb",
  "key19": "4yFJfeVvrd3qz975qCX1c84xmwc3dNXjdHjkt46eyeB7h6qkAfy95BvdSdc9wY7VdQTfpASMZvp2gAKi5Pgmike1",
  "key20": "4K6PGGVE4JbauQqd9jZvCRCkuXjPDAxuTzj1AP87cjZBg6MLNaF77k4oE6sxjFD8nuBfhzgTJj4w4nNtMDL13yNj",
  "key21": "3zNB38SJgtvAk3qB7DyauZyJ3DVqdjyyC5v4hAsCy6nTTmDBumXSS42CbL5uoGeFmLVEhRiNQ3e1CVvTAM4eRC9C",
  "key22": "2V6mbitW7iA8TdSJgZrJH9yPsLspBuG2UdxePXSZU3eZoam3P2v96ZrHynbK5CgxiRynR9CRsU83Mi3wBGbVRopZ",
  "key23": "3LcxKnw7HeayjmSiqVV4awuAccGME7PsKHbXH5khwAAccUaQoQyjQ2Mj4kMtAeSRF4YWxnc8kr7r8vPEYvfES2jB",
  "key24": "39yURVsXRo54ce9fFKvbMWy5Xbzk9TjzEh5EHV4usjZpkaFpz3zFQS5Kuu8mL9d7tjALWvFFGXJJYZ2ibd3G56SC",
  "key25": "4JpVWKJbsSEAQDLK1uQmgiuF71FA6XrwWjhBKdrxyuziezEAEa4cm8RPP1D9o7yLZtAEwcq2u3vvaNUT2DxoqMMS",
  "key26": "52b6vAtKyzwRZsZSTZFWUqEVuGYkZTwqQZGaS4Ebzf4tp1mYszfer8Ln8r31Wz6yUm9HScD2NRw5oYXQxZkiaVT8",
  "key27": "2myVXe1k7p7ubhL5XBcsj74pf2q1i78BjdMzC9pNKsmxa7JuCvtKcGSXX6ECkxD23U3WxiH6dFSdjXaBS9bhRNcq"
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
