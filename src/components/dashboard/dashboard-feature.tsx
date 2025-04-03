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
    "2h7bE9ogTv6rt8yFYi9ZwMsmdYFxowfM89QeviFPxAmf2sUKNxt4fkuy6yypnCf17eYdJyNx9VFq3JgjC9qBqnJc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r6ZKJHcK9ktgwtCBFFPjUWDmGeSM5tdscED3dMMEVNMPYzwViWdxqsJSRGWkH6hVeVsPpLxSYCDGGKJhnUSyHDm",
  "key1": "5FGW1cej95VdS3NzqeJyRdC5eeDkrqXsoPUaxhMYNwwbUDTFNDY6yCDJWmoPV7Tz3hVKpBybiwNgndYxaVyHb2KM",
  "key2": "5ZRAdoitcdttkJogEDGHR3eb5mCG2rMNhxwpigGtozD9ospS9Xqkt7Gq148PjQFEAnkZCBARx4YGjq6BiACJkZxG",
  "key3": "3kUFNssJWNVK6oSBvjd4GbWn7HYDnUX454Aw5F1zqeKkR3imMTSkRyzWRAjy4M81g1gyab7pgVzDFKDTtQHxLgwX",
  "key4": "5r6Dh7fsLmjTmQH5vwQiHDtUSiPW5LxdMDPubT5BA4oeqh1MPu6ZdbkHCHdEVCT1FCbTF42Z9xGJ16CM8ppiXBPX",
  "key5": "gZgYmGyv9XYHtvtzL3387kXoBC4NqxyE7xU3tSkuR1LVwixnfk4wzZhDcWBT2TQeiUUdTXiAmbZ2npoNaJfae2N",
  "key6": "5j85nQnbCyaimNidLcYFmrHzqKM6KgEW9ShXdnXo3rEYyyGaU1cwBmVTR1k23D7TmhqsU9i3aGJU7pqPfZXyzvDE",
  "key7": "5HXhT3Mz9qAXw9GDaAagKS5aPmz8BA48xRoh4PbyG6RFxLrLYBSc7YeXq1LMspt9uzaHe8wfw3qbfXJUEMzC2bMu",
  "key8": "Un3QAEiyqcrpDvvekf4Vhyt9irwwXRP8Lxm78NwRpmbrePV3tP2qf7mRm6KhxUy11qXh9k3meEr6PqwTU6gpev7",
  "key9": "5CrML7KCnVwamvgdeAinvKpPLKzCHtJdJfA5HjXZqR6M4TfRKGM7vQDufbLk6Qms8zqcDM6oj3R1kSgEqLtYTSh1",
  "key10": "5tsyhRukfh6NbdNvqyqYXVf91sk3vWrmnvkGxJd8mP6HgRQNV1E3Ud91oWPA4b2SyWSDMictViLKRM8kzoCfzhNH",
  "key11": "5eboPHTuY4BiaCLxy3RXJ2epLNbPBBTzM1RHkTgVgoa7j4gssTsAVYogGFfSVmnCVpnRZjnNQCTqvePUiQvfBr8E",
  "key12": "nHXGFSgqkij8izYqwHKkicVwEfkCJdu6yfyftp9f1rtg5o9CS8rhfgLCF7MmpsEm23rBvgj8YLUMXCBojKnS9fo",
  "key13": "2vjHFE7xjh2yDy7RVgRckXbZA1P3DgMCiNtqbLdo7qPWyFxsbiRhUSpNuV2N8kFeMS6GJZTSo7rZzEkTvdnFqVTW",
  "key14": "4FcdpCvZBsF4yEeuJ9cZZa5ABDqRHmRWt7rR176QDy2eH4iUtETcS8dPB5iD4858Qj4rM372n8bkFJDmzr6AW8dy",
  "key15": "25dU356SHhST1tP6sddx9hX72bjpDKTtouxkBKQm14xWyGNwRKKh55cxTig6B1XHwtharywPczkVfAQdx7qUGbgE",
  "key16": "pod9M5hgCypn6F3gYLRKCKBCp8C6jXbENrxjPmSHf9MnoNXwNcnxX5shGE7Mzgz6iWu8Er34MTduGp3uhjsPgEP",
  "key17": "3f4CPk4SvWC9u8VYL2uzmCfrgNz1WcJVPGf6UWwE2iXcTtAK7bXC4sP49ruSTy2atZdYqWTHJLTcsQjmq3BoTxt7",
  "key18": "61CGyLePmVUPHyfqA5Wgcm3dX6ZeKB3EbZU3fVBk5aZ26LvSgxq9C8R8cuBm7x8PCaoBdzp3MhHA8Zw16QphrqJT",
  "key19": "2hD7GTsJTY76CCgc1sDDDixwx62aZvW9HiHu1eomYC8JNNzzjBmzUcoW6Qou5mygr6NJxDAcA3fLtvgRedfuwgPY",
  "key20": "ohMD2WRwQR9z9vMEgFvhx8HdWbJ6Cv2EUGGbExCjQaVtUbPAr9pNeoHVGaRvujAuZTFpUHy5e9gPnaHtKs9zEtQ",
  "key21": "55iTcgRtWty2wTUnjRg98K8CCtatgripbUkf873Mb7JzVpuwhVgFHqbPALUUvj7iLhXkn1STxVDP7pMtaFmDNuBe",
  "key22": "3ruF4k3AMREd9ckXYUtUeeULUY6bZiaSr8jPyaHXShXXoMRyZxK4DqzgRwxT6ZdyxG9qU7xVdHzqYPzxxWsstSDK",
  "key23": "TpnD21FMPaHwpPSMKR3JBKFGi26X3V9ir1kNFZEJ4TP42KcUBPV6KpAMFA6Hym6p4iWKRvGVrx6xgJF5nZYLDXJ",
  "key24": "44Njmw7PLcfc7bh1WqczpX6HnXGLTDn5tVdMyn2okpiSkZK6HiojQ2DFnhccKagSpJmmZkTqvEMt4WpNgibJWVLY",
  "key25": "6j1AgFP48YhBgmk3Cemb7Dc4ciVzDbKLSuVACaT9STY9cRTPHnz5oqCy5jGbB43urqbJutcXCfTrXAWWnU8oLEx",
  "key26": "4GmPomZ5J2u589aGvNyM8FMdNibFFmnxwDEzwFCyMuxKKaEYv88XiY2wtD8HLMH1i4qDccx1wk1WBFFoahuQ89hV",
  "key27": "3GR8WCkBdySfLgD3Nze1tb5wUh5hzdZCMcYBR5P5aCbG4nKDGFa1XntThbr3QVgTAHTiTRoFY3Fz675bAp67BLC1",
  "key28": "z1YbDP8fPTJdxAEcdDmGRV9oNrkvNPe41q7QktN3nnzxZGZyYfjCBCbo3ArWTJdMYgNUbfwDEMs37r9YGBe7n6J",
  "key29": "4fGLeTqpQquEXfmYzsBRGy1GLwG6kAH1vCPj5D8qsW9VMQjvv47kGqat9GPrv8eoHsqehVMuGjnRFQbm2h47jYLc",
  "key30": "5gYnP2yHN7YHsdzE3J53JwM4hsiWZpYYwnR1QwKGhgDiWxRUhJrdbSJDyJk3AHobX4ZWHjArrzZFVD22tsDAeBDM",
  "key31": "3bVs8NAA9XokYbdSynJdjbresiT9RPKYnzX9dgBnrCJ76jbUshgwduNrZzTSSnU3CXwzfChR87hQpvYvaH4gaYsV",
  "key32": "5VZGxoVqu6G1GubhcnPjrW4F4bGzUVFUovtTejcewBPXLuWiHV8EZPs2oQpeZWZP8nSapN5cb5wR52Gwj9NG5jRL",
  "key33": "2WYR76W8NXyzD4ZYk2tegdLTYFf9ctwG2YwEufcSz1LfqKeyoYx3s6zHTGREExrVRwQ6U3k2g3MxfGH9Y1smJAEE",
  "key34": "5DkopV5WcJFR68xf4tEDjg38bCF2kQ2XTRyX3rWjKQ8tsMeG84VmrzF2jUzN6moCtZvVjcpTtUbLCGFb8XJSJSN5",
  "key35": "8Sx7pJnepScrMZnm6L1bSGhgf7S71kovDuRZsVCsBad8inXZzceRdcvLvxQsmnf4bkcM2pWQXQG5xEn2UxV2fFQ",
  "key36": "3Thjnj7M6grK8wXzL3jFbeM268XapzARwuiDt78YVG88yEZCZSgcL7mV1YuLWj6CPF6WhL8qV364mU88VniRMhWp",
  "key37": "5oyBUVJpzJUn6ULuFviztgmkEqWWXjT6UyjMk4xrmPPZoNwbxjXXK3uQisbAWx3cuCq7X4jU49Z3iLAQcs726tm",
  "key38": "PZLRDaEqjnkJNCBxapcJxijcsbqhYLZnwaKECFYZDHFCxhboZ7M7YtLgvpMXqJGEWBXSz3wnPaa1zncxfR4f12i",
  "key39": "2Sp6CbStx2kJiAtRxaXU5JEFh3dPJmAjuTodDQdbYiBg2XXC3rQg3ouHXk1wPQ1VNxiFdD1EMa1W7pB3p7zu7Dqa"
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
