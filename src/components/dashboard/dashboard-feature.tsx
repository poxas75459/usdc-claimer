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
    "3svBnrGRkFGeWfY1pRuNSacntAwKtpWKSUmyyDyTmdjSYX2Xpxp1dScbVaHqrpmQNP9Q719aP483kwiuf3AioCng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p4F5ssfYTX9fMTSoH86x9v8XPQaruFE5rBujy7t6muUPjkZzccBGZhN1rx8dFSM4Db6vMDx1GTo78tJdTkgUupW",
  "key1": "2ErBmJou8FRAJ6pBtvgjZF3oBwefGdF977cFveq9ApapKR9wQCAxcTicr1rR86XRd1bktQiavv7qkxfnDD3YgfGD",
  "key2": "5vYdS6jXho6dcu8QLstUEFGZgf1krDLu4VLuGLD3ZamCWDDqwQrkeq59pG2NdcBzTdZjGaNAbm16w3uJv14Cb45t",
  "key3": "4ozrWNMuFsBYxJfRjVHSdpju6jbtaMF9EYRokwLPhszUozWYusSou8zna28S37qEnukfLoR393mnkuSWcR72gTPc",
  "key4": "3ZU5wURq4ahoM2trx1ERhXRadZ1DUq7sCVCUEwnyXovthfF4CAKxsbieHc4dyUpvE8gzkCyQzhBdaRP6RdSktGCn",
  "key5": "5oFmNhHkpEvwug9ofAzDJGQZUcBb2Teo9dGnGv55fZAU6jVpXNXyBU4GEWTikoGfkticdcmLYG1UVBHyPxJn2Lkz",
  "key6": "2dji8z8BdcZ7TfK5TFKeH3HDprDXW8BmuQFkaA9bNR4VhTkw35CvauVPUUeYixQeR7c8PEVQJtJQZZZszrwiGgiF",
  "key7": "2y58aubjcvVu2TSaindxzSDAGVT1MVeb3V9BtNJR5shC5wQA9z6yynapMqojPUh3Y852wUFx2mWzgFxcFvbaF5Ro",
  "key8": "2GYVDzvfaZX5pSs1mzJTSVEZeMzcDw2CLNHm4YEziPyu4sjBNzLL2ToqL4E5PyYbY3SoXARq35D3ESoAYbCvDKuS",
  "key9": "2F6Cppi5BUoyy2uMCm8arBC6MRcNqCwkCR5yrV2w9CWvFUQjGR9diSum6YdegC6XN5Duunr9WMeoBjTyhv1AQMVQ",
  "key10": "2FbMqLdAAwkzBKzR6fFQs7R7inXhT945L6iBtNwg12Nd3zwRHJ7Kzf18fMLeA4y3DF27UuaYUsvYFqueHb8ana3f",
  "key11": "3p5sFThNLVu5o1HHjrS6FnY9MscAr9VQDu4d4aGokt7VLSk9HYqBmRoEY5NLN3tVJFzBkCHsk1srJX8j4yDFFTqA",
  "key12": "4VZjvcPLCUtX5Bnk6a6AnKWyuZMe6odfLsjMuYjNu77mPYwfMb74kkwP6FPXYjHx1dqAMDAbMHB6yicZnNXoTfEa",
  "key13": "2QhHA5Q7Fd3mbWh3ZtwvKC7KrgXxcpv52qTpSQ1kt47wpnq1cAjVK6ESRBUfAxtqKDxw7HkkiMvHNtKmc5Jduenx",
  "key14": "4HYQWh97kLaM19pEVfVcwjmmbo7ysm1AqXceUMfJAurJNMz7EsypWQ35AtV7UGSD8cXLrBQj3B9zTuZ6AP7TjHsL",
  "key15": "55k12RPrSczTKsZx7dCVg1E4AnT93TjqaLxWLDVdgNdAkRnY1aXoh1gMLmmcAfDuzhkGyC9mRLShUH7rLgyGrPt1",
  "key16": "tXZQDqNo1jo6RMgc8jAfb9jbBd8WWsEea78JyMggVVXxVZJYnJbZ3XJdX1H5tB2H78PZsviRTL4ht4xfFw3trmA",
  "key17": "5V7urjNnK8DLmbi8381ohjN5wbMAkgewmfT4P3RgVuGGKuDPWfUm3trZBodgj8mrK1Q2DkfaoZe853VpYaG4dcr7",
  "key18": "4ceh2fJ48fcn1ebmHrNA6ddyb2eySftKBp6fPnrFnqHPo8baCN8z4rcW73m7iHWZHoapkKUJGE3HS6yUyioqkS1d",
  "key19": "3drxpSjMekGVqTdKezgCvkVhF3ZL1F5x8ixqKor9vSJ5vFtqnecJWVhhMxKDdSBgtWAd9Kd2Khd8tFjeVrKwQH6L",
  "key20": "2VWAJYKSSvu9HRupG81vFhXbX6fJKWnTPNLKxDBMJB59ygXQcMdJfcmAytvW2r8XDKQ3wTErHWHoDgxyZTXcmMna",
  "key21": "yYNsVsnyR5Lq9TPyS5xAYrBQ8P3DXfVTUiyM8QyQknanx327zy1WoFxoSsbvfFC3DonN9XMpiQZHMqtwgLsgGq6",
  "key22": "4pwUgWpzp5BE7bGaWSDnbLaQQXwPCWvTojKKAWMthruufqbTNzERQe1v33WkAQPsmMxjzyHcDcNXZmkNWLakM9r7",
  "key23": "4Sv3Nt9KCpZQtdnhA6WSM1WRM5XadhQx4pzmfpgEi8BTFFoSb1pQ5tEyJxWdEacjHBv7HVPiL9AxqfEdTEtKkK39",
  "key24": "4BmV8b8uS98nT5CHJnafaZfomwC5WZJoUJQpNDtKotXwqWSGCpFUNswjNSRCQpWAVGtXRMn6ZEFZ1HaDYy7yf1Tv",
  "key25": "4fgWZcPqketw4R2Ci32nbn3ESpj4VyMD3nu2csG4an133CitWbvGJJyhsjaFZAAnvhMN5UWPMXriVfX9NaypXNrW"
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
