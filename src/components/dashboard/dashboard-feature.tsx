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
    "3W8BAqkhiUsk7kfhWHpjfWz9aBMd9gqMg4enL2eRRAaSbJy7xjBV4mUaj4EyHUTXevj1LQr5Jx7X1S6xrni4L4eo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SwGfrrrpJAYE5KYBXsAVtgU37vwP75JXmyGHo4rViRR3NgNLqJTrkDqSthCx3wmCRVfktwTHAkC3hEJFDEvCu2z",
  "key1": "NT9FnZw1CYFWADNAnZRcWcxQiffxi84NcomYt8FCSoftDj6CWQCBaVbEYpsDJ8qmV9QcSaRJMJbaq7M21BvfNVn",
  "key2": "3fNBYPjpWnCrxjoTFpRMbHRhSkNeckNGPLoEuHj1mUyb5Dg7ai8N5M1ehPqB4eebAX7W37K4RC7cXy1SsywFtNVo",
  "key3": "2NvtjKPQheqEwBL1pf2EWogXEovZ6jhXa12vLeXEUzoerkgDQYTJL7JAPRPZEd4dSzFJDemDowxHyMVJ3VNgD2pN",
  "key4": "4UcwXwLe4MNNCwpPt9jeS8hXgjuVVDJdbvbQbuMRCUhNcFSBwbMr9pEiE3AQyLkybUStYB5nh1pgonGgSr9M6DTs",
  "key5": "aLQ7BgUpp64EDc3zexs9uwTqGAuEW1g9thdg5aQi846s2mPU8675pbHWPGXDa2WBQfTGpxQWFNtg6mTVX1MFpbc",
  "key6": "2CAapq1VMypy42ALMTqvuuZtWc9sFY5Mvuup38gq1g9zMmDKrE3VnbUmjKXutxoHWLJKb5BfRS7QrngsaNvr1KrQ",
  "key7": "h24swdjt1svQ2msPeBkgLKBAf6gz5zLtCvFgNEFDVpWBNEaGHaSZKANvz7SkiNwhfNkxFTmhPgP25UbPHmRVkHB",
  "key8": "H1ZxYsCqS2WCVjXqeA9xoUjAC2KQEX4i7K6868nd61jSoFxyx8ZGM3RMeuAXdqMFNxPsAyk1sCURqpZrS3uRV47",
  "key9": "3rAxKwJWMg6iuXSA3VLuk3Gk7vT9ckhMuC8VoWc91PMv8fmRMCcyoxfPSYijSt5MRfEakhZNdfuis6camoVNQpqy",
  "key10": "668tCLfqsFv9QpoQR2pR3wTdUa6byYpRKgR59QTgwgHbNA4Wzw1EXe5HNKKGY2yejm84pFsPoMVra2AeUgYtTKSu",
  "key11": "5YbVb64X5XVxocfybKUib9HaVH3z1cvNitKFhTHxqJLXkx2SoW1QSuwVRnNX39tCgL9HcJMNeUsuNU4V7rhH6Xxv",
  "key12": "4b327579UWVAE67AYNUiNwhn9UL4q2HnfkSWsEhtHRQ9BmHzVMzUhWDCZEmsNuYQh71kYYsEon8oi9bCXCFPGX7R",
  "key13": "4tYxt5fu86EF7VwNUFZHBHhkcN1HSYHKg3PTJZqt5dGbZcHUUwZLRc2JFWrS7cBumZbAv1asFyqfwW8oEW5Z1XUe",
  "key14": "4VoaYyb8Hce6fbE2iQ8mrxSp19tDBQgnHJKwMTbvrEgTkDXtbdUDMJVjyaTdB9ursFRNErHmBQfG5T1a8PJmWpFf",
  "key15": "uCh3kyHTQH7jKftLokqfwdrMT4kS8xVWHYHUm9yDuRv4SxfvQdsyaMvYwCaKp1aJTTkncGpuBWCQBtDRHMQa2Zj",
  "key16": "2QfTsHtcHRtSR1FzdmYCdRUxrGFCJ4hqushrkgnTMEyj1vt5j9cSUzMAyF3Q9sSKCBAxq6XEre3dwxVXA1z2ME8U",
  "key17": "5hNmn8KVjbDgYdkVKaACPU5XvbywNmBmgUjgy3BXsLYkL1HKoqkj65LH61CArMxp4oWa9xYTtjWVqAFubpNmnSRk",
  "key18": "3YNq4PqH7cZEEuwDms6gWYQpHY1YqjDhaXqrBJWLP54TsJ2L1r4wTMLVBZJrh7QZXX6tFGV77wUMNS7WVFcnfUBF",
  "key19": "2grLy3WuoDen48JBApS86SxiMXRRVebh3yLWFfY5cAw9imJLuVMiTQWDvDRFbkq82nSuQScyqsruT556iL27KXjB",
  "key20": "5tNbEzStPV7VF9Uyoio5vfXgFyhCyC6xei3HvVqjjKxKn3NKrgBFawSjVfTFGAeodUGWdkKJwSUUyaJ7MbY8bZyW",
  "key21": "5gTLoGABDS4LgfYmxRD1xMrAQEHtVUWQvYiMc9gzkYDudT8icbG4s3ERUXJMKn8PUvpZnXar4L2gFMTsXSry4UaU",
  "key22": "4c1kwXQ7UZ71YcLxwPDBT5xET1gTwLVa75twciNvTtcWMJ9Xvw9XkjCCfkp1vwkAqHNdB2fF6S949PAcGUT1LU3n",
  "key23": "5FK6bYqgxb8F6vvmU5oUkEev7aqynbobgZCBEeAHQbwiCWYNky6zwk7LNnSmHgBoTkaFQfiUS6rtNRfjMCVoKWr8",
  "key24": "5xx7B1ztA41bn1BTGmU2jWJig6cucTEgCwVzuKeru4uBPpMCwr6kkLWv169aR9MNaLJ7yctRndEKgWVf9v6TVAQP",
  "key25": "366JPBW52k138JZCocuxrFjPKjpiZxMqtmoDW8beR1954T1rUJFATYLM9bmXQXgkAKToUsR4hkrL8AwZFPrSnD9M",
  "key26": "3yMLs5GAYobJ64H2Kx3w5oY6jNtQzZVjnhD5XoTVfEx8cR7FhA4nfKqg4vPJsHd6mGThHTgNPiarLZSgNpvDz7Vr",
  "key27": "5CgNYi3u31ELEERHwDWXgw44tCBnqPMy5ADJ2shFnj4wj45MJ5Dd21xBQZiDnCL4154YqJVbQ4HVwYvQeLexvEmk"
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
