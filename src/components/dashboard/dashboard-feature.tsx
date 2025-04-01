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
    "2JuGtT59MTc1LcfzT9BuDb6CCmxKmV4XW8empRUn4uBYUuR7pjJQ7W7JzfdZ6KRv9PqdCEWJDPpLFcF9QxS34kz9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zHUfvQo8UKkyaX3dxgupBDgPW7mkVJwiYVtueLMq7Ytp3Q7zr1eLcMRM8ZeM3RLeLt3WhdyTXTZ6yd71kaJxH6x",
  "key1": "52LYorQhhTp2NR4M9FPnvk2YrsgugfTMerBPmLfjABJ83bhqqD9mEDqkJ14HEwEGAEi16o7oGeWD9TivH3E3L3mm",
  "key2": "2QPsM75H33rufUcWTya5gbpWzWec9AcPLwcnacZaeMoMj4WBKodYVEC7XUeJNTAs45ostLx3A1JZvpuT7JwGHN5g",
  "key3": "57L3uRqk3WDKQpnVV5q2Q2PxLi49jVA3FhA9EuwTAaf17gzGnirozLxUw1fYJcWm9LWxthJbLoEyTvLhTWYPZ2aF",
  "key4": "5RYrehdeWGnU7Bu1Rhy4egEAV4KaBVP2ZnkcdY9oRxiNpW1sfXv8PiYEetafx4NtMPsymrM2fi8FCAVGvfksSaWH",
  "key5": "5Zo4LJzr1QadsAkWsCTww34TZ2ckziQdm3K2cvkEdBxR3k6w3mNvhMgBiJWvwFkQ1u8C5GaK66Mn4pivuoAM8i5S",
  "key6": "2wdtQkBq4DbzVRiJE2Hz54u1nP96ABmxDmEibBHdsSLdtanmWHfZ3W6Q6R1rZQ7haii6TYE83ReGNGzY7gRVvoFK",
  "key7": "43ZQinqQUAV1UrpSqXAZdDbUkb9fEYs1fQbpvgpE55xGc2kLFPdaSpmcQW4tdcth4mFQJ8VAXCQkgqFJo6nocdmE",
  "key8": "3drhhMzw9RsbZ2e7SenThmccMHkGBHWG8MdSd87SDoaQtz1GZtMCgQr3Qp6QWP2eCyhmaHRXaGvE5GoY27dKPdXR",
  "key9": "63Rk9txEwWLZ4ntrCDemKwGUVNJkE6HEUfPHJzo8uXZf1Ywo6dwrJH1G19EQiSZ5GrrsFVURT47p7S4vkj5J16qX",
  "key10": "uguSkXEYZJzmTfWHnSUYdvo2pDZ697Q9KZbChzjQhMJrD6ktAkvH63XpVU2in2LD4H9z154ATDNiCi8Q41Z6TP8",
  "key11": "P8JZVVQNLw4gT3eRoZq9PRRJGso4mwq6TzCXJy8otsU24GQHhtZr48ewTq89xxiuv1PHPriW66tcPACtNnPwZtB",
  "key12": "5YFJhh9Uwvd5wNQdERYXidmJbka96LePgxJLBmWA48Rz5FiTD5m2iyojY4qWhgoMZE4peFmpt3JQHA4ATPihGfq3",
  "key13": "5f8X1fZEzCYpQA7iYnFb2AHpHPwTtQHz6SVVBCLVRJsvAVFGF4HDJ7RymCXed5XtgGPf39hX3f7d3AuXEik2zmdK",
  "key14": "2tfguK8m1LBJ67voexTGSpppvhQd3buQyxc7zsequgGCvL8kUiD8bjnFSB8E6rnWM31oY1NmAjd8dDtzDepa7KKW",
  "key15": "ixAmA5Escreg3joiQnGA2sYx853TcYeSm762XwBU69wRRQuLkdtcie72LH2wJESp7gAV9RsZ8N4kNiyxNp9AjFR",
  "key16": "a2Jpu7V76aL2MZ4FUY7RvRNAgg6QGxbWy5HVKVZbgHto5KH3JAwPq1DwQzWV3vcPRgdb7GWeAYwgh1fz3PFqjJ9",
  "key17": "2hEx8AA5R2AEd5JuFzG5bib1mas98LAaPzBUoHYWG4KzorEimpYPDhjJGsywNNR2KokXk6eobhfoxGZ2K6spmuRs",
  "key18": "4qt45ScGYCky2CkVeFUCqxz1G9XYbkp2N3Tnnezjv9zFEJbpiNgY4DC52zFLyGx2nN6yhPMrdJYLTddCivwNBsWv",
  "key19": "61LZ1PCpUD9ce8vpuuA3SMoe3D1rfeUAWT1rVnb6ndfgPJH4X6a76pnetD3Bxjzz4qnWw1mzpTiTmMA3hgp5K9tW",
  "key20": "4nyvq9S9vMXpMQXUVWX42uPMqVzMSEa8vwvvPuUZ6kycBYpQ8ujZ7QXzTJamYZ4KPmaH9Yjasgeu2TNBWmNyfm63",
  "key21": "4UEYEEgNJXTDKDwRq4B9ifbwUTSLKaFcK3Gf3XH1QsgBULj8gXFkjm9VCERdNGXrDhgbawzVdzpGrq1JE31xAJsw",
  "key22": "AaNtHcW6U47XLx5Pf59k8UBXyFeEnSMhrNknZLJXN83gV3Fa17jLPRYe2sJpPaiYYsHY6gj3efo1oyP42TJrzMo",
  "key23": "2ufcbA2NTTEcsoh37aVbzNahDn1KGakDzezQ6kthKsSV6jYEaJt4418RTPFPELZTZog7vACobyF3dii5i1iGnvWn",
  "key24": "WXTL3FPhSM7xqcCcW59ns6ZS4g5PEtZgXAMaY7CFV2G6ieXh59ZThmz7dJFAPnJWNfXJtpzibpcu8CXUFLAiwJi",
  "key25": "3UhagB9myLZKn5s31neXudk8Gj6GvpbTbEYVeQKirRTADDGoegGkTTWVYzf4fhfE4JS3KG9PaucZPjuF79FTmdmn",
  "key26": "4YgtPfXtiUxRw42AqWmwBvqttUAPYRju9DZKRW1DVTvT3aH6AVEU98Djgn86AEGZDYf4G3g59wh3rkondLfLYbp",
  "key27": "4VsrUEwREpd7SjhbPnGZ9fnYouqrQUX5MRzkJ1WZdRRuxAJFBZfKA6wDDJwq54fSF7NFKdS1Yeva83DUFK2GebwC",
  "key28": "5KLnYkhJMTSMUPRLar3iwHY416sn1qoBBFyYCxh4A9N8wqi9BFeqB7kBfhV1bnLdc8o7YBEnGQ82x47DQdUL2Ui2",
  "key29": "Nd2P6oYrQbhfzvHygffWBNKEGdreskuugo57TzAzrjcGHdBwCWoaZoc4ZyGHCruGSr4jtY14a51HAj8seMrhGwn",
  "key30": "5VzCPQMpNioir4FwH9F34ppT9sgA3WfmxQ69V1r3XgoQKFrv5QCRb8akw36ZohMuQyzqkjK8VbPJAALGh9f8tqyR",
  "key31": "xv7w9XVdVRYS8yuUvU3PfQ9buQHFpJijCRVrEZfThpgBb7ChLbAikH8M87AFi5gjiuMJi218rvcQXukYUe33NSV",
  "key32": "2UVGXsuw58eugWLek5QaP3zCH7KYUwFVQUeSHEuqjEAEfNA9YiapgA85pqrUoQXgbnWGjyVMpEHnV7WVVMhrTpA6",
  "key33": "3Q4SvmghmAh5LMoYrLMffH4Tq8gd9a4szWJ6WqqbgCcjTrZpBuyYb3fARq2bViRJBqQg7KKTqwyt2GNPuQC5sxiH",
  "key34": "4yxRxS6iLQBVezEt4C7oxNAnxS3tV1ydvTKc15kCLrRaBEDMH4ceXfKsNCiqnh9sRAcPkGyJC1eiACd1gV1Chy2u",
  "key35": "uWcPimbxSzWgDBjzx7LQnBzg4i3iVwr63r198Vaoq5vqxMxk8tfjMtq3acUTVEX41NGdgB1Sz3mebkQBL6LH6Bk",
  "key36": "MehQbdhh5bweJTEQvt2nKCshrxPVt1UjJ1yxEziJtN9Z7fMZEJegSGXCEThMXhmSBZUe2NAn9QcUCyTNuLAgzXd",
  "key37": "HNfCdoufUi9KpSUJgPQ7jgStemrDPagBzmXjbGrHx8Zt3o41Dffox6shKFvR22v8LpjbnZ4VFwvoMaR4eFta8iZ",
  "key38": "2Vo1tJZyXHGmtp3Wd9e1ZHqZtaEgxMDjCJbWNv2GJCyMFZxDVfbU61fQXUxbhACy7TWGbVYnHneKYSqQagLKoRd"
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
