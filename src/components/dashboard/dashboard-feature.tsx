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
    "4LmMezmZ5kaYA28ZtfrVTTRoWK6cRNtGHybjFqgtVYoynh9SEP75C4qzrsTjoQca9Bhjk23gthLRxXBAYBTva7D1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wAXtrqRJnrb2KejVW6BcPEzamoQvvk5r1cHwFgAwjP8a3WbQqQUTtH6pcbaHjTKzaFyZ7W3HpYJNTCTvXE4549U",
  "key1": "2swEkt14GLnaV4WF15xDcoU9CVb33HJvuJfqxtgKN3j7YtLDAjhyHNGNrrvzwQnc1mzU49e5p3bukBjLLmQaXfxZ",
  "key2": "37qQzRbubFJXAJihBgVaCBHN4kex2KYjHA2xoXAuR35W2t7P3YTt3CviRnShyR6fs6TtvMEkRnyAFkTJ4PupBHrK",
  "key3": "3FRDqESDgTjXjPhMKJudb22uZvxK5oj9AZFBWx7P7S9GZNkShfubmeBMddTaZyJASw2BisxmPoDZ5dr2nsBBGHC",
  "key4": "5CyP3pTKjhtn2W3dA8ySYzHXiJwFbPyd8GGuXMfcA3HbGrFkEbmciQgyDdFaorskfk9FPBAhPgiDZH1E4cqe4xxy",
  "key5": "dhzhZgo2VfQx58QP8FQMAHPvmbmcQivue6iwQzMa6CEPyye5VyRHG27myBsG9qombxQVp6WWmNCNCDdHyj28yUW",
  "key6": "3KWdBTNgS1Se2KDUvV59R2xAXALCdoZbMPnCgNykqZhAS1RWdJ8nkvD6mCuYddvSGcMzsBa9ZCfb9EMUCLqfuhmg",
  "key7": "3mX1HiXZi8sDmpxjeLmAXpysYCPSSsDaB2q1DbWuBUAgsbWoo2nLmEv2SPSXDzXzxv14cPRbma5UfRQ1XJ1RoUpZ",
  "key8": "4XkJXUuGXPcApPbJnpGptfQJP9VmWW5K4cgBndVGecSoQb6wtAWWDBGHQWJcR7SDMtx2HmYwnUc2cCiY5Jo4GqiU",
  "key9": "29xXpdFZ5gDd2bFRohCGiaAfaQR6hPLAzgQzuUoSuBH6bKskCovpKhjC3wq3i8BUWyqgbwGxSa24Xpai6hjoN9qg",
  "key10": "295Znr2T3756ZqfgZDtjjjBC4J6TGMkUciMYrWZi4Nkb8UYYkWYW96k4Z9gTWWg37oJs2AoYMQt5sabiZTKdN2JA",
  "key11": "5JnCsQKjmEPGzrH2bs7skhc6ikf8kMWhkR4ozLRHoKcut7nMBsGKR9Fq1PwCZJygHgrjwh53LNeMGFa2PDpA3YFp",
  "key12": "4Pwc7B55FaWQPFeBkKfLhHcGXfXiJfb5YkzfKbEMNMGK7GWWbLexLxBdPHDcB5LYL4x8ernxcLPRLg3zFkqaKkpD",
  "key13": "2jxoCKkshFh4jgMtyXG7qWpTeYXWzRMvdJYHYrujy46UdhLkmn1DJ3xERLfYZiVAYt3ySRAGosySCQb83YPY41Z2",
  "key14": "4tKqUTshsXFPi9VcttM3sVbvWbuVozqg4QrdY95shU53ioNXTmsZ9qoTzaUrgG4WmNB6miFjHmXg5S73ynfQSQaH",
  "key15": "3EUdGz513yVHBFTbvc9Eaksm7m8dfxQFUZRt2Ly99GRV3PXYNvqwcL8jgQywSeUpM8ZRvYyKiBh8MFGeVkFBD3JR",
  "key16": "5jZKDqH1qzjRM3Un4tbAAWDsMPKDC16aVwoH4n3niqxsK8zb9VL9ASwaJZbVTB74PWcQ6JepEnSyZkGbDtjCxyWR",
  "key17": "2nbebWN96oxCZ6kUyZQwAfnLUDDu17Jkddc8maepHWD7B9Edyy8JnQqudv9BEaZWvZHx8t3qycKEpqKrbeFH7Htk",
  "key18": "2S26aDgmdVC5uGAQeLuLzytgmnvNJTyw9UDPk1Bhhhg7on1uPLHiLxHbd8GFyX9ok9JicwaGBzBAews8wgfY9Krb",
  "key19": "4ygjkcymtU2UxbtzUwWbL6mVVaHTbTgko5iWRE41mwRpEqPDqGpv4hrMSwfFsE2oBjiPVVGnaw4a4MMDPZuSe3Li",
  "key20": "bE7xRewMQwc3LAsLnbXCMVSg6YdUwAbAE4rBgLWCpV4Gy55Sedb7aa6UPGZWLrMWxUJVpF6TW3TZ2RC2jiKo7Y2",
  "key21": "5JbGjFaJ9JsC4KJqZoeuC7iw3GxAdfpUXhm9Qgh8sBxvhbZeiFK7eZTZKX9sNHVZGsYkR3FZsxCFS5VghtRXyy46",
  "key22": "2iBMMyebw8nCC7LM2dmFMSk5sJ3ZHXXpKqq4oo6GX5tuZUz75WpStLzwzPSGE2uze5gdWaDvrwAuHy4y5ymuPfqt",
  "key23": "ygvTE778wan1uCi51fiJDwdiUs6Cn2TJJkAqqFRZxtC7j9XwpTqLmEC2Cm6nd8bfPimGJVW6TwrSmUL3cjYtMx1",
  "key24": "3k1sypNQbaawumbywBErB16TXCA59E1awj6Z35D8yu1uCPxuDy3vHstLrQNp7bKAfxw3BbDQwffrPfMiAy5QRgGg"
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
