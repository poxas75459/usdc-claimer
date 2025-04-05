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
    "3FJzZWL5YNia4UANkm7Jcufu5wxwygzkzqg4J7nTNKXA9SctWASBRyQM7EPcY6f1M7ANK1k8PJLSfqrtaQV1KP4N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iSFK5KyackAMzXFf1giQC322GvMmjRK3FpfpGJEJXLi2qQEYVB9mc3aGoq6kWHVJHLjhb3H6tBZmhbZ9VsFT2FJ",
  "key1": "F3bgoEmr175rufc4xrUJ5QEnCSQpLWwQ1PomdXSQr1yi3z5yb4CvuLxordyfBsKDV4z43cbbRSSgnsFvYqg71Xq",
  "key2": "2whqSXeV2FWacUjwUUNxX8MFMTbc16nUuc2reRwFyN8qsFJmtSaCueYqBuaQLD88YMJXK4igiM3gs27giyN2r3Me",
  "key3": "23nZfqYiHYg4Hkowv8crjBfVuNHW2NKGQMkWa8gPg4hNyESgPR1WwfNf23BGtvKwGcdkUZNMq9ByhDa4VXD4aMcu",
  "key4": "4zPC2jM8nUC15q1SWBM9GTCXqy3dEPQN1wMLRYT3YY2oVQKtEECZX5ADb5XMJM96d22p7CtMEvB6prbznFiKWofb",
  "key5": "2qaCfjnFvT3LrCSyvdKUGbSdEqa1R25JSu9e8jPwKY27a7JTHS9wcyEp9VAcX4TPXYBKTdgSAzmgtBet5diZRA9K",
  "key6": "33jsPAkYiwhpXwZZJsZen7nfRnHXUSJdegTcZG9ju8qKsjw24e8nRaPfJVMDw8XBHbEgARw71ifbcejnx653fvXw",
  "key7": "2EXCYqLMxfWLUQQY61mNo6zpZKzNkdBem3iew4r7uq14zSRS85zmFvCMtN3SkuK6a7ur1LAncXCBkPMzK3KWXZKg",
  "key8": "3g8ouYaok8PmaqvxfEsfD6We9itMeacaPpaJjCA3P5NzMaC9nj2sc2ThXRGuxCGc7825oKQuQGZaXBnDtjLnFvzD",
  "key9": "26bAwz1mbp64thE8ED6pVN2KLmrqemKdfkte6hFzK5ES19U5kLjY7Js5EN9rRQuMC9Ug2Rixu3vhHJyemLUffxen",
  "key10": "3gBDhQYyQwszEkK6mMostQFKBHjZyxPU1RZSeJYUVL6KWQpNQyxDQtrkCG8DSv2MeJudueTE6UdtX9nrNMC2Dojs",
  "key11": "66346V2PNLZRrmJYgTQDoLehCpeCQ72YBE7uWWqf4zE5GZTGuQwtdqRghf8YzJ8KuZnGeVXD7Y1c66cWRfzDS1ZY",
  "key12": "3UDDsxbHJjUgXGDpbc5gDKhNWBvDf4QEHnGjTQbP3FHgUQRhrKvCBfUczj43cNDHq73MPuyruus1GUBNeRH44GCd",
  "key13": "4EfdssLzJ8jhDv7B2yskMH6eoa6iD2YXMzRAgdxomp6U4TDxhfoxJ7ocqv9zZ8a6GxnCCiP9D3VdFtE5MHQvZ4yK",
  "key14": "4bg76uqvAsaVyDgz6ufJ9cEQuYUfk93qH1ARTqrCys4V2tM7hv74iTsHmvaWhvvrQocuLXSgfkHJ4jsM6fa1W1rq",
  "key15": "4xcfVpH4LRkMXBSuv5iFfbUWjg9wFD8ysUCsMoDr5q7kqy7wWHLMKTBxHyjGpHLNgqT7Yv1obpLAgyLrE1BtRdP",
  "key16": "e8Ej9vYwABreV5qRi7kr2Ykm4oZQP164GMc73hUadwpRjt63HQdryrzr8tx4auWixkew361voMZTXrJ3cz9cCBr",
  "key17": "5xuxUXwCj84HVACSLMv1tUwCuXSkKuJDxaBCHh49W2Bz3rzfWknMFqcodWZcbwKCJR2THqK57VuJdauJtBacLS4h",
  "key18": "3CCWRcBXUw32EjuEmd559VgkTzU3Fc57uctHtHfWfZXD9bVQLMF3HmtQC9BGzeRwoGtXUW4mCbhhs9iHBvFvNkLd",
  "key19": "sUx6hHf5FzrzELYP5KHTTUmUKZm6yU2enrMY4WB6YjGDMrwuy8FXeMG6F41tgBmNWGU9MpDBxZGXkCvoAuCJXYJ",
  "key20": "4wbkJggXTCR3tZjUVGkyJropm74HW9QyA3e2gR8hjRjDbwDzcWK1ZdwUzUnwizSJBYBkBqmjJEr2G2AcKJN9R8Sn",
  "key21": "2nxzwSgCTKzPoN5j1Nf9GVrZVjKJuVSAAhHtw8pFx25qt7qf3fqhY6SweRPw3PTa7ZxH5Z3XBgzqA2A1jcXYboSs",
  "key22": "37hUXqWjQWEMkk7kEXvNLyNHmu2qwGANsPak9NqiRMrXfvmdtJZ6sedYgAMpSREDMytV78r8S6gP7kywzVDeKFZa",
  "key23": "TCWM8TiqWgtzPHQA1bsjBHUiR5bBeUmhXDRQMBrjvA9XzSHWZBGppz91ENTuRmSqkUuwzLvXMxZiiExUbTGt1oR",
  "key24": "5MzEhHjEQre9PnCdQwBLMnNfYNwt4Hg1xDbbyxCVkvYzwqeRx5jGq5A2yzMnCdyk5SnNTmsDSBzpsHqDPdQJ3SD4",
  "key25": "4szaQxH3AUYYBGPg6WVdNqrmMxAFw2JJPRvnpL6gNVS1iHSA7iF2B5YQbrE22dY8Kmo3PFb45SMdCM8kGyVZA2os",
  "key26": "3KY6pUN6KfBj9RpGRxM2NCsdW87yWpnXM8BHheV8DkU8PNeJbFvPWoo848MZyX7zdZww2sHsNLU2smbN2wrgVw1x",
  "key27": "ws59xQRnFiJxPGntPdWpZS7UTaKji94KaM6tCCrjRrEqRU4LWNAky7Va5he6nkNYNtofRgLYU27WzTECvFJ72qK",
  "key28": "3HEeCP3j5aVFbyEvz4iDv16cBGigBPD4NJ9Svh7C1VBxoUS8oMtFnmLP3T9Yuj8PZ9hv6u48GYPHHtGitUyr8q8Y",
  "key29": "5eTDYgz979fkTkeYZ7e6qcW6HCyanAqnP5cVH9W3v1SdZfMKRumTCfz6Q39J6zHTSW9PF9gA2UXTLKSNpzRmCu6o",
  "key30": "5ah2b8o1ud6wsBt4gMfaiTKtuooF4rTMW4hP5BNJD8mJL63jpC7poK5CiwJMdPWAhEagXQ2wcWKEYMvA2JdU6xdZ",
  "key31": "4dQxMAANz32y964CDrxPdJFXzXt48HJWfjr1LBhnpmPQ1whfVEa1aDJfWmNBsusmua8Y7FdmmzTfTsD1CNanZMWa",
  "key32": "4ztKQ5DRQfEf3fF673fhx4dPL9f1kDeXZSYv9X62LV44d4mcLs1M1HBxwkm76thCA2FNdPhttNQnKPDxQrBL9KdP",
  "key33": "4PbQ74UgaUEigP5MFBtKTuLiCGHrcSsbHKNUdKhtuxCbv9D2Y1w69oRcpEC7Ln8zb7uH1dvqDiX8iqgVwthZ9cZt",
  "key34": "36FhyYijM6EPkBF21kEbqJ3BixgE3qiQMJH5ZreoqYmns1ASirgg6QZiirF3ZUTTdF1g21EYRpM8L9nNwJviPYsf",
  "key35": "5zFCCin4H7TxNjJJmnw6PBxpWvdPvHJTtznCfGTgBgPFPG4gpwRLTpkJ3p8Q4QFze7RiYDjPNRB9bnW8wTuDju89"
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
