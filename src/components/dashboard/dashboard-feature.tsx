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
    "2E9iQFeZv9PxLVz5jT3DQ7PEHA5zouUJWSUUgLiXy7AUei8X27kLiThmWksUbT4KHWfbcEVNgN1WtiZvrJFFy7H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58hWdM58vBf5i4YqZAuxCpAqusfJXzr5nsCyvPZnMsAPvoQCWnuQWeoVKRwpj1MqQRf1XwAmgw7BFyxWoXZWB8EG",
  "key1": "3eeeB8SJyykxq3gx8mFKhoTqgZ4EoGzChaJE6WMfXyNehTK3V16e242MeGeKCh5EkGJBHbfueGEJHWEmvWH3UkzB",
  "key2": "2ncK6tBzZtGCqqGfBrrpgV44AyHZS8YupjjSEx4rUmbnUjXt8TP3dEPsajcXcWXRD1fHdNJXQ3Ak7PU752ghQ6k4",
  "key3": "49ZiCpnhYtbdm3HLgNGtdk1mGdc74mbURJZoudQJdvkzqaBioes2U4pfMcvuaNsY6dqqE7WpYNZWfZFAytWrKYuv",
  "key4": "gjcWdZ4ycW5mX2kfcrJCzHeFvWQDMaQUXq5bj57q2nKMb64VnuTTfupVbCZf14Dq1FNhZJJDTSw4KWgXTCopy61",
  "key5": "5ouGS3wzVsim9TeFpS3JncX9SuvLFWUxRLzxa3NXiiohrmdcirTEgusdqhoBYXeVeZN2ZL3M6iVrJP5cyHSDiKEi",
  "key6": "4g9E9jjUiUNi1LtTcTaxVbMYhdxr2T6voCAff5L4W6LqAAhWMypKPXdHnAjr4XMAZgpo1zBk45qhZCgJjY9gfVVX",
  "key7": "3RTc4ZPXePsxSqpya99DSA24TXvKbT5EtQCkCzUbpcRxmXSAGnPAGebfChbB1WZFnFXsAxVyp3CShDagFJ1yDa7b",
  "key8": "5AGCdWtikbnFxPmjtXKQd8wWdCoZSd95fcTUZ2VJyQ6N4uVT6kB2JS3z17yo4d2EQHoxDD24dH7aQbcipZgC3sm3",
  "key9": "2sEEoUbbwkpe85V9DwcXvimFedYn3RHRXhcriYE8HSHRKgMFpWxu3zQe5TfjmJ5qMENvs3Mt484mCVQZR31jV8nT",
  "key10": "3qmU6vVNrF2jogLDXmpsNeKq5bvKgk4H4KSSf8mdKiZUTE2Y22z14K2dHGHgLk7uQT3BX4hacAWeDtwfrYFzjZck",
  "key11": "3Z59j7pmvpvkLKWvNcR2e4xtKaR9FwgYdb9qWrDdUfqbEGZMerPyanoYt8WbarWeoYSJK5jUSMZVjTHVo4Mopq8y",
  "key12": "anF2nugPefkbr8CYoUtKeg7N8oAZaFWMZejp4iBFVTUUXaEv4cv7oH5Md85E3amzxnDDtW9EVdcbc46ZTN6gRCz",
  "key13": "YCYQqCKy7BN5ybDpDF8AM8d7THYydZz6LbCjnrkP6jU1JCBKXaKa7CwWdMcu9nbiJ8BSwKQ2xHjYmecJfaRXL9b",
  "key14": "4mpDtC9zkTyZDEoD3QTG5WtguAhohUR7Br2rWo8GdviAqPjBDrZmkKhqtRuJTG5k395aG2EoAViU2Emx9LgBRVnn",
  "key15": "4tna7j5Vfr1wkmJApYhZrRVCScyXq5bT3rx2RURqRGj84tDJz2EZKShJ8acim4AnvRwxTcw4NfUjcabfdqcEVGWD",
  "key16": "45MHJQkYPXJvbsuNWgXiCSsgfmkBHQ4WZmyYqdVGSt6Fv1WKUGf4vvfvHY46w9fMB8z4NgPBXFnpW2BYcnjXGmHK",
  "key17": "3E6o86awkMqcxDZVi6MBza2z9G4UPn58rUGrQEnkSS6b6KpsptitP3ZFV4tfdc9p3fTwR5PuU5ZijurnhZtovmit",
  "key18": "3cZ6s1yMAfpHTyS2Nokz7S2XtHYgQiXykJFDmsepnrnpqXbkpP3kVa81DEVW2iq2ijz2kffyX9fo85oVd5NJQuDu",
  "key19": "8s4cTVjvsghef5d5mp7EMxWqXF6qPb9AUEo84pq8Rq2YSkHTSBxBwBBJUagLEKHoEdtfMTCrNyeSHsjYPmEFKXV",
  "key20": "5gucXmGZuQ9p2oCuZ2BYaqvttM5pkVbjtg5Je3cvrNrxU4kpqhhwqkriGkGSTD4ZXUZzuD1ZcgfYk8rxP3EvTsw",
  "key21": "g2h6AvCh2TkMX93NjHnzjec7Vz8QTQvR8xFE7Y2ZshgPJK53CCg2HEt1Vwo2iXTDSq4JxGPn3Yoczkc2GUFuNgS",
  "key22": "jFXsn4k7WuMnEdfo8TDiiqfQLwZdyLSYiuTXUCAct9uRovwQKbf279ca6qDzNGkV8x1HyhzNnLVLNXM3uphFp47",
  "key23": "c2jGTWub4vxXwAEugZzb98NuSart9xNhRvT1e7bteWvHiMJEamAiwMD66hcksaMFQJRD8qD2SwXJVJ6zhLtnqwx",
  "key24": "aZFHKtMsme48yyuCKtprfaH462HL78VbMmfiEA6WJ1EY6NNxw6WBaNizmMkKFCmxBbRRSSt23bJTwrA2DhjZ9UA",
  "key25": "5EK9PFNf1WLwaUrgr4qR89HtLgYg3CPYZ4YdWvXTeQAaH9YPVWHmWmo1TDrE8WCUL5iK8TV8EBZFTXof3UdRd3zt",
  "key26": "4AKDTXFpyvn81UAy6RoEFfuSYLiYF79ENDcWCtwDwJGNqb7R692gsicr3sg23DQcKbHCK3j9Bn9hapR5EE3EFT4x",
  "key27": "5WK15SMn7L96eBuf3A9nJQj3CUtjnrUBJnmNWzeuP5Yb8V4MMtBSD1e9jCWiLSpsTpchEKuyTb8CDmEvp7HctPWX"
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
