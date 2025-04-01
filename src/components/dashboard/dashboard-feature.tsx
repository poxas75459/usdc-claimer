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
    "2EHtmtGnhjfesFy3kq8v3sbBpfrLc5EotMyaUqf4dXm61Da2FswA2k48cywssWUS1dDdcpNrYVWh1d4FVEGaK55z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xK37LczTCy2e4KyoF26JZn8cGuiuVXEE6KNjDmcW3tkic9cXgbsEeknkaKZV4bZSGCNtABFxpUKpCgCm3fxsthL",
  "key1": "2DnkenerL5YqnqiNFNTWZnPNGZ8kS2Fccbd3QT96ke5ozBKiUHJpW4yFSAV2AdxsZ4UjMPf27kttvR9tm43CEbvC",
  "key2": "2LLb5LZnxZLXbq7cJeZ6oNPRvUTZfaiSy2vtzEkbWK8E7hDy8V4XpogtmRM9RzwxcjaPhZ4tDxWnuJKzriz4ruCH",
  "key3": "44YfzdyBtPv3i4KfesRaEwpDkgzdqFJPjQkTpGVjoDYpNu8Toq8Uj5iD5jrHqxQLs8K652hBzpspsahmKrWfyZPQ",
  "key4": "3rBCZynomFHNdm4ud27167omP76VFowkQgHCZ6c6ZrYXdBmwfQ4VHhC4eyNtadYpK7oRbWn35UjpYgfgjkoGi1Ki",
  "key5": "34q6ZSRRiLDaSMWAszqxxi3R5N4FfwjhivMfmAqCpJ12ZUFNhsf93DbvyaMbyU9dabQLYXtt8QnmTeDSon5qKSff",
  "key6": "4H1ZXHn6Cw2cjZrRJ32xGum8cW3UiFuFom7oZskQZdA9fKCqvRRhA2CVrJbNSGkiLKEhwwd4bAVAvikwJLEEqcP4",
  "key7": "fAscDpmUsFgoz1iiudVwxS1fnmUXhArnYCJxSDLW23izcpyhoE4owwBE4Q4epemyt1DJ9Xa2vMLeSq9dVRXRKPw",
  "key8": "5pcP3QsqMw9Be37VDF4fbrUdCpftmw6HhpE2wuLLjiRVJbX9SCGUkarT7EMtUgCuCcuPkY1JGHzH7QCpk5Un8m7z",
  "key9": "4yTUmNa8z24RhPukr5GwVThNN4Z1YkiXxEwiFmJvdtdAmGP5JR3chwLndkuMyo8QmGQEiRRXCFzS4xa6yCo75PFU",
  "key10": "5Z39TP8RjH83qwfX5GmiwJ6LA5nypRYUFB8VvGakcGHK1mGC7LNLCbB2jzboe8kNckh7UYg1TQ9fbo6Fgbppq7uy",
  "key11": "5MdjR5oggxAxuJtfCube2ayNGmAbCR4QCcquxuciznHV9sNRfrdS2ABxrVM725ZCMRR16QYVahPEKigWQupJwUVT",
  "key12": "4fKMibJ3jY2eAPp48h2Mh1bpbryNqS2gNq5pPaLHRSX6nLLj5ZpvUUhxvDWgt2hH7J4nvTMsVWS6W5XNWW51patH",
  "key13": "3hMQPXW9KMgbRPzh76N8WwPCg7q95ie6nJAn2k1LhgGuhDeKPhdeVv4vHcWFscg8CUtLA2m58GydpKzLdVs1Hnke",
  "key14": "vSSoXjZWmUmZ6G8DGshPNTdzpyufSiUCNDSyHtVQeGhE1i5ic9L7Bh23fZp7xvrA7MG4wf9cA2WNhC9JmsVwrVB",
  "key15": "3MhdWEfuqJYzQv7z4p5kJU7caLJcqBzWRZ3onzUfmwvqseME5WLLhsy7Gzubs2437ZZXxUWfDPpYMqjri5qFEVT5",
  "key16": "4Epwzcb8Lc9twXBV2fpmvMj4eTFXnTgRDrKkxwUaj48rk9MGMyEKxrCJpEGGztAZA1MHoZoU14AKiuG3zcYqHUc8",
  "key17": "3xMViAebmjhQvQ6n2NKZNQk5V4U4Bkgz1YcmibAQsqEKKtiGzaSfbxzF6aq8Zqz8yAss5FD69NVjfH2ZVSNK1Jis",
  "key18": "4UtF5rXg31SnbhDnF5yPrnjtqYtxzADP3McNXF4spJJABvehXeYiVdZ3ufrP12ZFeHWnnmHfzVz4c7M6eZExdehr",
  "key19": "1csKLBGpKVQMzHiBh3EKgRtBkobsPMrn2AkkEJswKpRRNSzm3jqiQJkcUcRS4SpgdjiX4vRYSJLDoZMgUqBUcG3",
  "key20": "3gXFUxSePKKCWzvpFtSQaHQXLWdfFeZ3xeWbckyNQvA2Cg9Mno5HdHca81HyMKKJtYtRC1yBTjecA8iPHnWKDWb4",
  "key21": "XrgaDF5dYuW6u9LpwSnyq242A2Dex1BbUf1VbMMH9QDyPcYhSwuFctVHr3h1XUuhcXXydWqg6puFm4AdJ8w4JfE",
  "key22": "4pi8SZpgvVATkEmhu5ndz3gEaE7aRwEt8KmCruT2AKBF2TBNbDAgznPhkHheAyTmguD9NJhZXpKLLyXDjZKaCQxz",
  "key23": "MHfmZ1EwgzSccoyXq1HEw3qnPrropRqELjvpSnWKfDkzAJw1kqffCWjHig6PZu2VmGzApULoPvMank7iYAX9PSq",
  "key24": "BgiBcRjzbm7wFNm9tiop7GwR7qxkRA27iYo4LaCvFnuzsWUqCspjRKmY6nPyRoTXcsGToDZCcV7UkBo3rZqMJma",
  "key25": "5wG3Rsy2wALT78Fb3AQ4fPBnUwwepiezrd1V5nZnxMf4LxCkjhnhE7Y6xhjki4uke39jmoMZPseVVDYu17HsxeU6",
  "key26": "5mGEGHZL2Sybb7YKq9jQYJEDMsbMBpWzwL6Ta9qT5VwXhHQ1BzAWJvVfb8AjMGnWVYz8zhae8Ef8TTNhoKrRVzc1",
  "key27": "5DMs5KujoP8HbV7Yjm1vLywvG231ZrUoCropdrgyTHVnZuctPGWP5SY2q6AYFvaDQYND92nQR88DnU1KGBtqukpM",
  "key28": "4b8oRtAMYr7eYcRY1Km7wPoxMdZUDohC5vTnisBtkX2785ciuLbjpJvTE2Lno8eYdwuwGyXgkEbFdy2NHUR234Ro",
  "key29": "2ftJrhzJ5YZaqvmkhHUiJmPD93zVPEQp66icaDXWmPKdEDwXbE2fGASukPQYJayESAGCcRicUQxXRtYVoRug2MXL",
  "key30": "2smuwMiu9h4GJKmR2ABm7tvtcyUBGk9HnJeTDusR7nXZ9KMEzjVHXX1dZ2Gqh2aaqyvYcHPzRt5uFVtRTsTXgPgG",
  "key31": "3g6ZhvGCkBse6T9khvpJembgrwJKMtBE92pCiDD7XvUo5sZis7KkQ4vmhu4ZDeXnpfx9F2jjekfg1tXZLMYjRXCu",
  "key32": "4vatveLReF9u87fSvXwwn9eQ4nMBP8crnmc7HLHHWGcr1xPpM938G3itBjFjwfSjX9hQFuWVyGkUSCmJR8ALHW59",
  "key33": "4ngYEzaGSGzyKkiSEs2F6GsQnYVSPRDMXFNfgvnSWiVG9X7mv6ABm25UtB15cJ1Bzf2tDuLsD6xfojRkWrX5uCaa",
  "key34": "4daMrymrgRj5vYRk1VDKSvKBZyJRqLoFPJAqBQbda4jDqW96UsvnbK3Eprj9o7hC1BYK5U6gHQqqQ9crnkHEQR7h",
  "key35": "1p5eBtFKhzSx3fFs8wYNyystffdgyWnVvogBmUBSvqYTc9Yq4vWdatzrL3DXrvtJ3TmM2y7QqSAXwFvPHoUpXDP",
  "key36": "2npK3Rg2crtRUWYwBbGjFBFuqiJhoh8e71fsbRycAorFHcuobAoKByEphikZzE4NurWSSgsLJcXGaqP2WjyRWBTZ"
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
