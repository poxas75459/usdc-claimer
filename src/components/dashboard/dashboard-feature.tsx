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
    "4v9jKM9sRFPgci3PR92QQkYxzsysLFH6A9SjXMb9qTZVhe37Q99fm32iAt9je2qeiJmLLQapgzyUNNgQkv13PPvF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28kiizgcWcmXY5mvxiLty1t2E6KLuBnt7YWLQ5WqYyx18E84iM1K2Dmddpm24A5FBZBuiQtGUQTe7d3C8uozCDk2",
  "key1": "5TZaxrdEYNQE5B2W1GLpzHJveoKsEQswoEdk7G3sx4DFB7Uejet7H8EBoU7npVZFdpTBHNv297DgBWbi4DMDxdbx",
  "key2": "3mXEiXoyZgL6U2V75wT84ovDr894SzDCsYSmou8DQNcQxE4mnTwYPFAefG2jc5DabyveMh91ubYUsc46YGXAiCgv",
  "key3": "5XRRuAmxkgth9zZEY2yCm4pnd9rQQwK8y49ajpFrmCmUfN7Nsyb8nFvC3m69p9b2GxBU96ApD7vabBuABJnfa8VB",
  "key4": "63H48Zi2s9ekWAqrGaAo2MPTzjE5V7Qa1nyDVBttCFJnaQUZ5a4vJy3hnzkLsHWd9uKxaAssvyW24B2kKTBrxotc",
  "key5": "2xN8TpE9iNai3kSqbpPhcX3qF98m5bsa9tgskD4vFtekp585uovaB8kVVaJ2fSncwe7ckqtLkB8zDfsJ4UN9ysap",
  "key6": "477uPwgdgkKEgwcwr4VHtdAvwDadpACsD6f6MKtUd66Ne7FzZAB4xqxNLgfsUuSrxtyUJ5Dh3cdw1CoZC8andQyB",
  "key7": "4DrZrh7WNDsLfpatUqrcySx3Re2QRw7GEDPShM6fqUP5tKHZFtncucrT3tEvPcZYZjYGbFcMe2GbXpkAowNhUQ5P",
  "key8": "2fqfWBUjjSgQtojyDUxxyQk4pdz3unibtpwH6uxYsehAsaFVWQGGHzKd2hPPRrMWNR8KDtfHTzbAdyntqBv9NkDn",
  "key9": "5FrWgc4wQYMVfbgiRLzq6Je2xJKhfDqSVQPf7AfieYrqfYi1DgCk4UEVTJmsLbhJH9WmWg7NuKv6tveqXfmKRVUp",
  "key10": "3nWNwXDPX42zcnPhzzPCBN5UmFoAKnJMFbWqoFLjy5G6EpTKHstUUyHdML5oJocN815jwW7ytKZJSNfJUPmW2vis",
  "key11": "43mQPt7wm5Pi8H2ov4ByvRKbBAofAEk3zVnkvt73zAPnyzJVVM9cT4rEaYan3iQmzxrpw8yxqB1WGrNpkKvb27Sp",
  "key12": "6oY3GMLq1WGUkaDj9XHinsHHe1cpQahA29s6Nkx1R1UFK22kUHgifgccShU12bUpFMJPmqTnWtYSj7Fs8mqiUcM",
  "key13": "2xnWAgmgVmSAxYKEmCoek2PXqSKWv4at7qMGAycr61M1Ud5sF4to4sbS5bxHUzY4UWayEx5fzJvmCbbWZDzfXNXX",
  "key14": "45rb7i1UbpicTphHxbP5i7wmXqdQhA7g6tyDJ9s2rc3Pn3TPR9HfkNaj4bfg5duRwFnTbfxmSJ7VqtZHZrBPhf4p",
  "key15": "SRMxEfMT5trpFMNw5sYpmyLA6s5N2Z9skhYso9tFpqPU39N777qRNWNXGJLGcAqrCrsEpf3MgMWE1uCcwBXbXLr",
  "key16": "scQggjctQV9LBzWrvHu7GEoACNGFrnegnm5qXS7GS9YidTGtV3aa4C9xrmLE9aZVJ2GbFMSwD6CSdFkNUVxQyvd",
  "key17": "FNgggByMweoMWAgaWtnUbkxzn7AUzLpujRm3mX9dSYgUXqcjNcmHEMPqhVzFHX6XSe4gtgBmTwUD34oSnqZumH3",
  "key18": "59uer4cxBZEyK1dZD84ujGeDPU4fzo9pfsiasty6XmUYQ3Cx4YHSxoCKC828BBSMhtJ9mVdLXsor4bw5xCKF9i4D",
  "key19": "1e67wt6tULw24UBU57bTnQk5xdDTfh4ZEjRJa4kHujE575AromU29VANV8yYsVuxSBU8sw4Ji3b4NMoJmDAhiw1",
  "key20": "5TBopEnQ5Mcm7yc3zDcD2zyZoobheuQpTxnR6NghoehKGFff7RaDwJ4Ha8gTxy4L1b2yCp5EAPdtwwARCCna2X2y",
  "key21": "5kStbSAmbm3KpLiSofwPaWofXpA5o95jd8QdGNkB6g7zw8ucjQRhaDzygFxEmrmijtFEJzSj6DjtZuTS7MWGe7eK",
  "key22": "kYAEzDLbqeSrDooKRvuVgRzCvsNQkAK4DyqEW7DtC34gXCA26CVHziVpZ7m5gP95SLPsHEiuQpmzvM2rrkx4qTp",
  "key23": "4f9BSUhXHk3acUJuzaJVgYacyXvU7xdHMLtfxpNoNPAsdg7rTn2LzTsJyL3jj4GvhnLDAVmAZ6kKsSt9DtLKGYzg",
  "key24": "3Vi4yHGPeHMtRJfdLV1Wdq1FLVFfjuC3mVaB86R2c7UfRPBc5vgb1LmzNNmwCH2ecS5jxDSKjTV6YqpLEFXSFRvm",
  "key25": "668XYgeAGJDPAdJzL5aAVEcMxpckeY6WSwWCxzF3BMueWtpEh4uaABrHsv2wsBAsyyEqQemwtaqf3PHrhyioYVB8",
  "key26": "zfuchkwNsCZPyK7RbCwHqHLEBbnoiBvi7zw46ES4W7m6CT3JxaNhmk4mXibtjKXD4RJRHzwJuLuMsrC12w9qPK6",
  "key27": "3AtnYisnwAUyvBRbr1iLVnFmxV8q3qiWQHrTCXjb2tYqY5R1g1DkigXMvyAmS9idQeqQkCwyPRRwg1tQecDAyxqC",
  "key28": "3UJzsn6q4CUie9gSNtKQJWNGZcfE9KPU17AMfD3f6wBB6TaTdodb9a2savDYbgurd1Qv9cePNkTfThNEAyp8rHzt",
  "key29": "3MBJyAPb1yiq57HAy5t2QheFsQpBCii9SjwPZbxybGcMMYofy573igDQJriGsdT7ny5j7yWVZDbby5XZ8E5oZdRP",
  "key30": "wHgWR7nmTZWQwVFR37WfbK2TjitWKEwRNrDUUYBW4JiEXeiKFRS97eTrivS86yRhvL7spE9BoKKB83iFqEV455y"
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
