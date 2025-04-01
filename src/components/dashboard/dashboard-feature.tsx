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
    "5cB5ZSdshzbp4xLUaxAkTveT5Pn67iyLs2QMCJSv4hxc5qazEt2853TR9gFuK2savXv9QWHMkTD8HTTYm6BpWYu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UQyCWyswjsKCeeKTsKoizf71xWbmqzQteTA6bcGJfbBiLxNxpv69dC7R4XRjdbRauMb7Pkbwo8VfZEFKUfbASxt",
  "key1": "3ixvSBjM19VT7PECGBMDaXVNUh4ka5X4Gnf8CJaQjAVAJP3XXjuSXgJ1YFEEtSqu1bo9hXQjMVyhPgKGjHytns1e",
  "key2": "4aoweFB5gorChnaUiiritK7NU3jV8q3Peyk7cepbNQyDs5QT15V8btif1Avav3qCKK4JWqSFAt5Xgyq8B2bJtyAf",
  "key3": "23gsTDNnAzpHhZjbFBn2omkxjtNTfoYTMPVDQiEvB328eWgrAy5G7wNWejJsR596jfiJSnygGvp6YW8EsFNhvbw6",
  "key4": "sBGj8sCcEGmj9qaVoef192GBDqh28f9vPApCUzQZqXHKLDx64TWrpLk4NdQ5d5Nw3Gi5Qcc5xa5gXvHh7r5q3wk",
  "key5": "672W2vXHeJ1EBDwfyteh4EmbpCAu7FvRgbS3RQYrDXBijazv8yXu2jExb3JCjXrWxGu8F1gctt6sxzWmWcUzAvP",
  "key6": "32RvbAPFdjtWj3fwn5v9bYKd57UrxsxqN1JyVaqoDnhhQAWHPGRHAgHjupB1Xti3s2KzCdTddr4XiTNgMLAt3ELp",
  "key7": "3gzwHTpALZY4yBzdYkdQW9icoM5sDU8e4QukD9FNzZe8WNN4N6rYq2gSg4EW57i4EKsHeyqWDantNNBpXE3je5x2",
  "key8": "46XnkgFUkbrBuwAjZ9VMCVwzBZ2PsMrFX6Qastvj34nr9cvLmKcBksEtvC1C57PQmKWUJqzftNus1sP8JzBMtXWe",
  "key9": "2K3g23Pan8aQRST2NATP1yXRp6eHyNSipCfm7uyzsqW7tAbxmG6hdvng3R8wf6gqcf8QFxM979RSZboXmgpKVEQd",
  "key10": "37B6jyWTiFBVJa8FwyZsE2AZTLKfu31wdMS3qqxNc1JabQaiWQY5a3Lq2du3iMMn46oES7HiQuL4boiJNzTQC3aS",
  "key11": "4WSYDFU11p3wpPUVRNmPkWAvASv9oWrYqXLCNnEt3HyNwnUbLJQv64gnZnUN7Wwy4Ef5eN4UDmvbLA3Btig7rras",
  "key12": "NXY2yc7ipu41nMEFgLSWLRMBcx2HTr5854bFALgUhcWMC5irbMXZfEMzwpGotBKazUBSoG1zPAraLKxubnwoowC",
  "key13": "2fhuN368k8FuLqjzxHFccbSgLaSPDFUHCf9KtotHiKfoPYFJd2jDLfKPThbXApFAbqWryvNtN3bcgeQVdja4LLRD",
  "key14": "66d8hQvTQhMys7Toc3w1HYykZn7niFNejj37sqAdLG9h9kve9k3aaSDoqRjdETY4vZ3v2BRU5C6s7cPzziU92EWS",
  "key15": "2JuVxSSoHbMJpUBnDJt2F571dNcazN6B8yGsHqiuq4JkBKvzPyVVx9ZrR9sFnUWqBdQkVaPH1k8dpwKRwYD8NDD2",
  "key16": "3pu8Nx8qmKm3PRd4UK8Fd18MPXRspTEaRD75PZMMgEcjo3nuVKAbPyyrnxvEwfGhSYP7QUTrThY4kN3cRuyEf8GB",
  "key17": "2HL6QYSz4g9XqGxXEUTBN62T4MYrtUdy13Sf5X639mBNJ7ipwX1QGyYSSt18tLqHWohCUuCTHbrUUEwwC3jGjX4H",
  "key18": "5fE5rCwz45u9mv7dZMXdYhQ8LAcseSPUrrQGHM4XZug5fguBB9bvZBwH3LADAebk6BYVWsxnrgW4oQ3Ez2B9TMFc",
  "key19": "4q2orBNVpthFDaMoZb2sWia9yo7PJoZgmcjp7y847tAFYF9VyD2wXRp1t6NbFrATbWojBRVB59uYzp7finLSDphn",
  "key20": "42phjyhU27vKaKQRTMTFdZNj3QV9cKdadEbDyYEVLMBzwnjBaTVUz6TSi6s3rR73jmdjt5uXa125jjgRwP9LyM65",
  "key21": "61EnBbzUMf7n2rLqapqWkRhZsdgfYd1JB2YfLpYU5ApQK8MbJUywVM2GqzTtW985TVsDRXk1uLmUw76vVQfte6Qy",
  "key22": "61PmB6V5Ndj7RGWEYt4JBhD7NbNEFMXycm5sTcmXYWiHrSH2WPpE9k6xmHCcwcMQ1VkvMdc3qTk1BfPxxrGie86o",
  "key23": "t3dWotvQSFW1YpsbsHJmJAcKxB9FKPtGgaWroUqgd2pGEScUbwmkQ9ff4Z9cmSq4ciYAGgjSqRBWRxnHBTheRwC",
  "key24": "kKb9TGNuyjbYeesT35fHuKMEGJyKYr3D2Zyyw8f4WWbDyDQiLLQigELyfhRPkDUKtNsLBQBpYXuvN86fiLfJi8b",
  "key25": "4RdjZJbo6MmZfFK5kAwwMAEYHhAtJpxa8giNP2irsYARURQ4QLCicxUkwxd9Keu4KV4FVKGzhP3Zz7yfi3oK97jq",
  "key26": "PEvGufSvDg4vBeTRWXDjAYnEbqSQaVdhTeU5hBm77jpSUn4aJEJKF8Xnibe7y6xGuDATyepqeN2gttk1jcspwxQ",
  "key27": "28ZKacgAX1g7N1iDMWQyBvJevqwouPvqcTug56r3HetPp5ruMbEF6evBiBRazGbWPCeTSgFwsCBHENG4C3VThC4J",
  "key28": "yaEPgHMrdTgt1dLDgJCB5hdC14FfbQwZb67WM2F3SdASsEGKY5Uu6qnhfYYqfp6t1xn8pTAgwkXDoWkGHg6GPjn",
  "key29": "4tUShjx6yXxb3hEVfFiXf2Z6ESrJGwtP2rxXSo3nAaejDUPt9QTpCdRZpr5epyoYxLgAvcreHJZtUU9QWpixjpNy",
  "key30": "5SoFe3Dux6mYF8Qko6BLsPEyWCecrMPsaGKn3ZJC3DBUe482pKdcHMpA9uvrztKit31voDroWX1kJgF16yeMuvoJ",
  "key31": "3FHRMCEu1rpy8KLg1fXCwUoAHj3C9BoDHtMHnpLdPUD1GCnGjTzg3T3BDZntcwFXxq7BCmZnSQkFSro2ztrU13ND"
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
