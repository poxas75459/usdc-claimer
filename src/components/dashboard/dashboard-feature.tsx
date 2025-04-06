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
    "5yMnEZUfVryaB8sXM7PWKZTbXqkZTvs96ZfwCwpXmrmhmZGLbEpTF6RhfLiEyoK8hQ741M8SBLvRKiPNyedFdxXj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49zFPw6LRYwsvVvCy68xbkCnSUMJiu67mCR8TuH5oeaVMrJdakWY7bLmq2GeLjEESRTGp7f2anDwp8AcbWq4gVh",
  "key1": "yB9FTD6QvWLQjsgeGjhPPAJgzVZaBEjCzE8Q56ftecVftmvLyY7VgJVSYSxmTmE8ot4wmmfaJnMGfP8mGXG8hAF",
  "key2": "2c6S6jP4927oUmDLJenyQdqj2BDmqUUwu8P6xLHfv5UeNQJtNF7CwrvyFHAycbpiB2Ht1jmXvHnjkjpseU9zPzYj",
  "key3": "2wkgFSVrDjgFRJkg33pNxJir9gM9nKQMBCSCCJhuVtxEEXvJJcroeNLAoVMJQS5MZ34Rn45RXu2f3Axwtrweowmn",
  "key4": "3XToGwbJE4xe2Nd8LuCxLqqEcmDrgWBv98YDuKPhgxdD88uVNiwioRRcXjtsndb5X36rehWUs5zTH5Qtuq9dYh9j",
  "key5": "576U5VryN7ykQ74yXFbr5HibSY7E5yixqUjDL5YgdQbeim5d3hTefj7yJF1nXzHGkkjeQWi9kN1i6P3N2Ur3Hs6a",
  "key6": "4UgdJnQwxrvTANXCbmxbq1153QT5tmhFB156z7qeXyPY5XEJKkppiPjoU2x6abocmfNfwBjcVyvHwxnKpzuqLAip",
  "key7": "5rwri9s1bZwh9pZ6wRNPFvqahPG7HAmFmupkHF4wjaekoY6rpGmW7bwD1wae7xNHfzXgEGhcwtKoWakNctk4HWji",
  "key8": "qWbs5PW59s8FSC8a9DzTG9zDhWacXexvHbnCBQvpgSg8K351WDfMEeJ9QbRCdxmuzJmLmnrciF1H4CUYWEbT5Sz",
  "key9": "5QGUBmsQhnfVjT6tqjT6shrjKrCKs7JJGT3fzPnwJ4oN1QzdQNZoRGjwJpPE3YC89AC3J4X7EjvHTidy4M5Vpz9T",
  "key10": "2tWtZVSkALJNM5tpfB7R6wc28dJRE9A7WpJCw5p88Bx3Rp3KNWdrJohNmMBmsTyehKgG8CWaRfEJ8ETjvRSD3i5j",
  "key11": "TMEfSZ4zmCJpLn7VAtux5QkckjWSkgoycdKXtNRASjz4SRWNqReWsDqbMX82CVVyMvdbQzC7Crr78ycTysZWzmP",
  "key12": "4Cs9H39aZC8jwcgnz5HxHgtLfMJmEFosQL3UtVRdGaLs7c7WaFx6MxWapESfFDYsRLa8ezYXxG4XYYAYMMbNWJu",
  "key13": "5RGGz8sGxW8BJDUPEvcvM1aHcJFcGsiEku2b1L9axBSXFazdkGi6pujGSo9cVVitjTdVJ7j8dyuDm1YhG4LFW8vv",
  "key14": "4rz4ZEyQSvmPW97JCtRgciA82c7tNGVzhPuWaV5LMUtDYoL6n7bue6B2GL8y5p7E9KdRxQ9isDPkCcTni5qCEfHQ",
  "key15": "47ZzczL9XA4wE1pr1MGfoKGtpwEtf5qeNQRRSAHV5nVdhADAmfff6BnrCBZTVpTYp5iwhi5H88SEtdZXxwfdZDAM",
  "key16": "4PRPkA8ttVPG3Wvi1z7xPsH3AavCFPTa1jE86KHPtUbG4225YUx9HZxEoKyCZ3Cn8mQhYJup6xHstbexsX3aLJ1W",
  "key17": "2aoaqFqqU8oZXzLb3k2KPhnW15knKgrpQNwkfZ6J3M9LmZFWx9yDNVK3ZAeb6nCijkSbaGaTXD2iKsVKtZMNPg7g",
  "key18": "4jDs6mozvLhMGNiC1KwXHNR7JPrh44vojJuztVJkQK7peD5FzopcCmQpAykjJLLtSapbUefofu67zoHGMT5XZ3fw",
  "key19": "6FnSqxcqnzopD4dWBAdke3SpYY3Dn4kMrcMW6zGowpyGmu7hdbS3awYU9dNUp3AVvuhfMEbC5Xn6iS83uNS7f3G",
  "key20": "5bkVRGkguQzKpzYFWEaGAHuuGP6RvPFw1syr97RbHQ2VFMJVgWEtEm8t3skSecbWqGpAg7Fjha1Ar6MXN9MxgugG",
  "key21": "2HE2p28psn68JVsXKxDnM6roxpsBBGzMU55WDv5AY5yMdm3TUbanj9KY8wfTHj7AsAWYtidshv7ni6zQ7eam1rQM",
  "key22": "3MrHDUAFVfmmtuJYx75SJyUx5TR49wdjj7VwV8MKJw5QyTXxjNpGcCa8eLrWrXdiRCtmG1eiRpf3z8g8yogjdY8K",
  "key23": "4jxr44jf3vcWZkSbi4bfryeCCsbP2sg2AUrLsrWQtqe6Prg8oMdPnroM7m8WjbkyFE2uGeJVkFkp9NHGncXXFxBX",
  "key24": "3bv7TCFVyT6qRft8GiwQ33KpmyEEJSzLPnrG7nexDpVkJJgrfv9dhTTQ65gA9nGPHUzS2SPKLa71gj9o3hyZphML",
  "key25": "3SLrUtjd3ZJBbwZyTMMgSK4CqNyNRsaafuLoyxVrUBQ6gnPKFTHXjWzQLcCxGnR55R3ASW2nFS1iK4n9sWxoTny8",
  "key26": "5HzhmrfVxhqqpVDp9CysMPXmjG7GMwKdg6SsfS6ipRVcXjebivpswLj5vQVdLQKxHvK3mtPfsoGL2a2K238xEAqg"
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
