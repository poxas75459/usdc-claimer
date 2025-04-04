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
    "34oqnzz2DEFhsR4SP4qsmGwcyNAvEP7wure6BeZmEjSyRQZdCwKKfc7Gc8btFpdbzcSf1kjAa53AseJdgYPPbZBG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g4eHacTt1MaQzqEwRPCusD1osCthLudojaxdLF3XieH4BdX7guzxByoDbXruYgmhmkdvGZJM7LGEd4Vs7L2bKGF",
  "key1": "UvgApvWYrRKFgkuLDXCX2f9pY9cgDPe4MbPWvSEYh3jNk6TT42q3nkJE7BjVy2UFREGLqG4ybRZYirjN5SsNp5p",
  "key2": "2hriFBTRGYNHv5ZyVpP7d2wH1HXZV2pA5YSrwwdwGrsaVHXagmSRK4xGAqt76qMJEPjTowV1iM8wLnzbKxcFRYE9",
  "key3": "5KhnodPR9fjjhBy9VcuitZAkXJZmbPaBPkacb1xQUusHAF8ZS5mejE5jPZdx2WMwcqQrHprGoCDLdFrWtRCfdsMy",
  "key4": "57jcELTdyWxR4uGB8FdCBiouuA1oC5gFhX6VALgw8huYLiSK9rtwzWzLh7LdWWPKBnjMRuZtGX5k9U8nv3v2TVhc",
  "key5": "nJRx2MjbjBGgddop9SfQC4x3GueTZUDJuLqqwb1GHdRaUSynHQjgscUdCZ9zFvoAVbhS6zP6URXPi6xEPu8MpMq",
  "key6": "4dizDEUzERhr7osgLuhaXwJp6dzrSdY3NYctKG8VuC1TThgq77F2BkUVtcWuN3phvgBFdtB5r5wpkdMxuBjqkSx6",
  "key7": "5i1Wose7uQCRCLzdQqoKnDfZ28UveavigskA3JHrqBPTHYLa7X9VFnuSdJL4UbCWmdrGyofjnFc6JLJTDA2dFSdV",
  "key8": "2Ve9bxFJTezhxFxu6B6K9ndCLUpQRaF6bP2gyMyUAp8AMrw5FQBhhaFPZBD6GnDxxg1kqc78My14jupqCejxzDXE",
  "key9": "42Wpbywa4DZtBUoZRsFGqcSXWPZbKmv95WALRKepJdp2ibGUN6MRuzLJrcR7wnVYbWeeCGfcsBjbunMsnsWNyYrn",
  "key10": "54QxqSVUG4T2gPkktf8hdzHA2YVC58n14h9jrJ231AqsYLGuFxqVrkt6ivQJfv4iasxpvQoC1qZXRHdDyUnn1EaS",
  "key11": "5Hosq6K8bwnDPHx6QBqS9QYMPQv4k6rKw2SoqyvnGdCSZ5C6EN1E8xCfeLaD8sv6d72438BxJsWXydDg2zihaNpY",
  "key12": "5az2d3UiDiwpgo12SRMVXKRA6VYecrYPg1t41LSd86gNnVnknywvqJJdZfDPEWoa3Pz8BAQbewrRnUqNHzpLW3Ki",
  "key13": "5ie4NHVVP7B8GHqoDFvdPHL6ydtWPj2a6o9VWA3Xri3XU7eLcfDD3jLggYaSqtd6Ft3YpYLJzVZBd2DfReGEbivx",
  "key14": "Z4TGMRd63XSLsc58CBYknB55NBYqb3SiteNZ1GbN7gRNEWHjEpjE7AM3EbxHtp5CKz8tnR5Db8uZagqGyUZhGAt",
  "key15": "563ntHAiBd1od97hH67MUEi18DjFH4v2SQe1TJDDDxuaMomG8kpy7jpBjw5JYR4gpebMNnppd436RRCvsCA6h9YS",
  "key16": "5cqvT7wt4irCo5S9PvASWvhShgUEsrumbUYSwpPN28ANde5H6jTGMYXSqoFuvUdqigb2C4VyPUNxNiEXEgTtm9es",
  "key17": "FT24ZfgxQrb9b9aiuM57iTKeLBwkfWvC2wESYsHuWxk1Y24mK5oXwpFbGiFeEE37SfZjwZctucRBgBdSyjZhkAq",
  "key18": "3fKM63AgcBfrBBEUxYpRHTPpzCKHwddSxZDVKD17SC4ZUuNHLhkgBCErX8kkmHQ3hjjvXh39ToxQ4eEiGzmy34f8",
  "key19": "4EmKP1vyquWnu6rbux7ag8SZ1cmcjxtuMmY65aEZvaG76wcJmGegToXMsFc3UMCQWm4nyYCUm9b2qVTfbHjk9e7p",
  "key20": "3Yh9pRpEBBGsShyVvV3HEs5iRNa1DhALFanZGSjWDs1bSzaDai4BS7P8rbJYB885QXBZi9UhKB5JLEbvU5tZF9QM",
  "key21": "3XV8nQoCXFkveKwcF1V9MVnmQq3zBcd98C8VcGjHPich2HDZDCchGt647X5REkcmbfa2vEM1WrMt3PJ3AnF2KatM",
  "key22": "5gTDB8VpEryu9C4rttPihPEykofuzT5EVP6oJM1piyYB3z2qPReSTj2YRqU9yHoJTHrG6JS2PjQvq2DTXHaQMKEP",
  "key23": "4uMpjUK53S8xZbBXNMsFk5PSKMH9v4C7MNJvAX3273UBcScyeCT9VbequJuoHiTdHq2QDhxHQKfbnRAVYhBhwUmz",
  "key24": "5GZGwadMt4HdtafXxLrHaDoER4rT2ybKmALN8qPa6y5gw1UsEKPutxqVEKm8p2LMempNVsDVzA66925KBhxLCdxZ",
  "key25": "5EZxcEtvQKdxprVRrWY9QPkc5QWQkvZiwmCvfu4aoYC5cGAtyjTCsQtCkRwJY1AubrqWpYyo2Ang4BKvum5tnyDC",
  "key26": "2oJfZNL9mMYPxeidt1V9ypfgfKPNEiEGtbaoJQvbKgtGRvXczUW1RGW9AeyE4CTCKdCkSJc4ibeA9FDVn5gV32NM",
  "key27": "f4TsCrPBtDr4tyjT2M5hpg2yz5PfFTWuksVRE7mGjLR347bs81Qs4zxEM2bjuBGTvRPq6cBhcFmnNx3xahASuXQ",
  "key28": "Jf8NvRmWtLxLsAbHKmqP7FUZoVdWcq8EyvZYV24QcLvVmXbQLBoJ6G72zGSPmJU5wg2k4aYqSnBz3vAmqxKpWjd",
  "key29": "Qem9RF8z9xKYNNp1LSsmceKGWhzqieB84scm9Sw9nj8yjk7wU4yoSHsoC1tVPN19eK6oGpc7qtwrZUNiLEUQEnB",
  "key30": "feiwR6RawiUuABSyMZtxLAcdxR1AgpjPausHMRFd6XFN7RpjerPcEJ6fDrCxrTNauTqexJMgGeZLfcVB9v7vPWf"
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
