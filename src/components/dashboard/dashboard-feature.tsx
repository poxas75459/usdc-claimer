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
    "Xek3CNFtGoNPSRxwxUMJeWAuxYZEH7CtdM8emoeUwrVUvAWdya67rr2k7FpuvpQjgeHMVvbAemRXR8uw6ZcHHs5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29w3zHgzpN3WTqSD6EQYtRhqCrydvh2Z32sZysMJDKPwNUTRXveq67WSvBvvnHt81QUunrrWv9KDh4JP2BWR5NCk",
  "key1": "5jewb2vTDBaxZYxFyccwZSkryzPN4wfDoqjkR3Wq4h8E9vu3r147kRWm9aziTyss9Y8PN8bMPj5zhKEWCBipAEcw",
  "key2": "2WRgSBFLtyXRuK5cS7FMk83SGFFkuibBrVWpQeifaX9mJUs48rqWDwc2YeGTv39cpNzQeEVWLiARLkAPrYdD9voV",
  "key3": "4WURUb5kYCHw87NzFsmprBJ9Rs5NuPdcNQMQCcSFWnzwprfyW1bWzzU9wrVRYJuS8D4Y1dPRprM8tDS5W6jG2F8P",
  "key4": "2DV28mPgxzD5TtvJjuSPkSQtfhof3rEDeqhCPFJjTam3fJDZSDpQaQqH1E4iZKRQvFkzf8SQNs3tuCT9dh3Z9GJE",
  "key5": "39aGiDHU7sSkARmgiNgZkdYu9BZexXzRb6j8C5xt4Thk4dL82Qo9kvaNrLqJs2Eq4ccGuBL41RSyWFHeai4dadAY",
  "key6": "4ckDgRPkcyNxxn5ocNAYVAC2bB6hNk4hebhfiKeP2oG21wq9frGPGckkAMt2aoeNq9r9HrJ5ChXxt11fuVLSeAPN",
  "key7": "3BoNnGMx9pnE1pXFsFmYouwavDd9ooZWqCHqAyAQcz1rddbDPYLfKVMUhoASWkTkoEKbLexGFs2hffpth9Pg6AFK",
  "key8": "3W5zHqVFEBQsCFbSMaqD7HTdMAZFnvAVkq4fH9oLmnBJZXeJDtSy6BALtV29t7cHs4ppXA6nv3quyEqVk3WR1Rch",
  "key9": "4y8NLBnviThh6UtcSEj6ai1WQXgcR8NYpm2CEgCWgsmDXzK8byyQrDUjxCDQsWgFnqmYrn2NwTXABLLJAwzaXdKn",
  "key10": "3LrkGxTdVRhGWomcs8BhTHUHy3TB722VjHBBHQSrg7qCLD2ECXxZ6C52becLRxGZ8PRqoGmnrAhceCWdRhe7wiwp",
  "key11": "2qVSjqA3XvMzdt85ry2zApVttWr1hMbY87KHRtcYdcg6h6WKsPMvLGypX9iNETYxZBSdKR6Qk18KNethhkZLCZch",
  "key12": "4DgRJg8PxFND8JqM3odVCzFNCYR6iGcA3CJFXd7L8UVwjqLjhrqSkEew9B7Lgn1WqzDGGhy86tw4wv1JwdcRZNQX",
  "key13": "Uax5UxfpQUAXYnhv8SgpAimydb3oFRn8pKQUwyTGT32TKwUmxAKJXcTd7hkAPnWhRREd8jfth3Zb8oHfpcgzvbt",
  "key14": "3xbXwiM7c1eYSgLXXhcKbib9jhyiqYyZJTWFgwC3r5ZvKGL7rsFyXawgoavbpcPmmUbbkawpJbAaCtfLGxZb6vLP",
  "key15": "h2RyDY8YkAcS8v7cAxbGztjjTnN8vrmKUGnMGNBC1QVuqDDHrCBNRrRH1UfFqzsPSrrbxApAtbpNrEWxaUzgMZB",
  "key16": "4FBZqnSskzKcTuDtZT6umxjTRtseJJaSWXUMECPPv1pbajo4tSXuzvJKbNVgUnMSyAkrvb7fhG5AFTsqt8YMSWdz",
  "key17": "44YJsBP7zkrKWbodDFMR5da9gu2UE6LxyEMrEwM8aq3NHSEPQWp5HC583YBSJSpz6qGvWsp5WkYPvXMh4dsTvpQx",
  "key18": "PVPdMCHng98pLQS6DLSakpVU8svsY72iwy6in3X59W6NM4L8o4cVDzH8uixXEi6KsQrg3k3akxiqF3s66SZ8MNC",
  "key19": "37UN5Z3vRM2BE3DF3oq91WFh5qZiWsPucabEtApACXMPgmfkdyMnNsCb7LZi63SWu46rApF3gaZsNkFfGrwdzMVG",
  "key20": "XNM8rrmk2DnjE3eZYFAdqF3Hic1xZ3WqLrmZ8mgt1HTNRTdb9iMBNuFjdsquoMrVK2aaogfmh25VDga8gw4N5SC",
  "key21": "3Vk5A8D69o766mwnD6q4pLhAnGK7oWmXga24WrYBWJ5wJq7LCfmsBjjvHSJuSJ2opi3q8FcW4zuvPaQ3ZCB6aW6M",
  "key22": "4im8gzy9yhwMwwYFdw3Hi7xuXDeA9oW6n4RWxziNuHG7HDkhyyZdisg65ffHWbEX9rd3xfmhsL6cL878961S9zcD",
  "key23": "Kh19ZKRsrKvx3XK9PAu7xRg18oMZieSDVgYLJnb2Xc7BJrp4ZuF29HLRwzUSVPRWhLCVGdBUW4MPa1UCU3U89Jj",
  "key24": "3oo1KtfoqXbhkheE6wNcXopjAGfX7GTAKmB4KLC22jKgZBZRTRCdQGpASkELHZAJECDAio1miSUni7SmmTvbvHSV",
  "key25": "2hTV9pP5682XghLW7RYdMNzzbHMxkDZ7CN5RKAdJBLzBGPitYt8DtioHg2fB8pMAXaZSjQ6cE5EAFhgwRdYLYTpz",
  "key26": "6uVwNNjPQqhrrPLDsZfWWPHederHoPRXmXK6C9bqViyHxWgWjiroRg5sLUVNaK8HFpyqZi5qbEkzYwZwqj2Wsk8",
  "key27": "5AXnHiU2ESfnitYxCXaLfrnVHbDfSVUAm76NdQj4WrdWfsdaHtCMYdXqrDEFUbkGwDcp7WsDEhEVzgynPwdpwoHY",
  "key28": "3rZQyTDK8QC2r2FNGbUivsPDLJ1nmvDij9t8A8orpUaNNBFUFcaejH2ArZwxPjeWE1YzF7FXjKr6eTViiCtBcbyz",
  "key29": "3HnDgXV4VNa3ei4dm8jPoXDwtoUTrgxQrQop9D7K3Z7kGpJFS6uBwb4rTokKwzgo6iBuQjLwSMbkuXuAQYrV9AxJ",
  "key30": "51Y8U1DMYPJpEsp3uUaWYbPCRwdutPpuos5DrUa9d1PaCWPhMJow3X3JK5vBk9nHe3T84jgQVU3WqCrKjatHRTNx"
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
