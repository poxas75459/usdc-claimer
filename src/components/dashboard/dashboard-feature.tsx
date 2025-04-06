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
    "4mhcHHJVWahgFSfJ8Uvj41d8z3CVXvTqKfXCKovNVymWA5fEjmKpf3Yz8LeowMsqDmU9ShV8WPmmRQQnJKGDaB82"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rxvDUnNtPE2pPuM6CLifJKGirt1P1KU9mVcKT1qcBQnQZ9gEGDagAxeWGYekTcp1mTXKnvzMn1DjPTNXj6rWCQc",
  "key1": "1FC3gWb9o97gjj9BNYUcGdK9QGLVpXqvkENQTpVUuxvpTfLJncgJHXnRiCF5VjeAEXvVeY3Duc6DSBPtpvb7YSU",
  "key2": "3Ud3pKQnqXdXT912L7TxiKawsZpJmYnE2hZ87Mu6aJZcRGcBcKDFWCrSGLAHxGKMVs79hYumqYa4owwbtsFZaG56",
  "key3": "3zg9NUZaRaLAxDr5j9rsEpzzSc5KKmYeYx1CjgViysjpPdoaaec1skYWo93SJEfxhscUL3YyHJXqWrX2bKkivSdA",
  "key4": "4VhNRDSLfNnJ1WVYB45Bf3Q8yTc3M3SjE6qh77BFuqKgdwdBVDCDpVxdTWHrTFQFbgNfXBuYyhj2C6cWFTjGUVC3",
  "key5": "2RsjfFStY7wGvSDKaBMVEJV3mZnBTBSu46CdqwxvMd54UeEa87XBCDYXFPjJSEXBZNEw74XxHzY6AGKjAcSKGSRZ",
  "key6": "3Yoi9Tt1Ppvxvygy9euL51UDLSzdMscuvBJKVMRc5Eo7QCCKB9cryDaGkenmGRXHD6JH34iaa5JvpgGtsJTFiCFU",
  "key7": "JLDqYEfbEJEvQck44QWxrVJsXDfsQF2y6ZE5GxckDM5CCV4kU3BivLUo6AJsoePLyeJCCZEtegKZWHceKsnVUtG",
  "key8": "2Vi5CVGFJAkiVQ6vJ7wtCWcwXMTWDfhzGG4nXZSPyR6kr9EkbxfYyUWikCmwEKsxvjo12PDHf4yBjK2g3vgLKcbS",
  "key9": "5TEeg2D8s9vz618de39fCNS8jZEsJACkQ2c1rzCadjeHf8E3p9bYfjXYrxN4HM5T3L8AwnwFmp8xvWEfW2XbrYbs",
  "key10": "5wwY61nTQ5zsBSFLxc8aaMQwYDp1sCKRVcyJvQCEBbPUSsGYGgDFVW2M6DfeGGrcVAP6meyjJMJShL1B24WqKJ7G",
  "key11": "2CE7aZsVduq2ZN46SKzWvH9fo6ruQ9gvVPQ37rhthjinYRA8w68PQ8tr49yW76Mq74od3b3kzGgJusqwXXZnR113",
  "key12": "5V9EocdYnDEWWUqDQhxG6Us173NyhXjLmuADPrH4DUC629YfvbCKRwNbRHKR1n8U7j9T1weEACs8BY1nJr9z2D4R",
  "key13": "5nvWeEQaByPBABDW8EYgkKHoWfNDBWi9yXAoWvAtgu9gcPuYSeSVExfzBAAFiwQjWUdkQZBZGQm8zQBPUjKgBrnE",
  "key14": "2USBXkCGXFyqwACPTso5f1g1yW452yjortjCTahwk3aKzJo2unRT92pG8B7JTdYEBjpuE1NMJ8c3esrZXjWaYwHG",
  "key15": "5UeAKx75QwBj8fNcZusf7GukwawcNJoDRyfjEzrjD2qq8gU8vcut4SobyF59p3G273uLuafUjN3k2YZnZADipUF7",
  "key16": "3b8sHP7VnzEtBVvYoSQJrv1Cn9w5jyZoNzWWG5abbbXjshSW3CLX9vh7QLGMeuE5DeY7SJhuQcKddPjret9yrRWC",
  "key17": "2smXuzsTUNDRJHaqoMjxeq773xpr3MWd3AAaN9ajmapxMHE8Y4VEi4BGNQp9W29bAY7SJAAXjJg3it8tmmDTwVtb",
  "key18": "2Y5u3e5peRt8WcUaXeEF7MU9dx1DmLoY6spou9TGjP9rVTDnBmfhj22zc7JLpttaPjqu9fquLDSsev3XbZkto867",
  "key19": "4CCHFc3Q514cHrBtkMAgAEyKQan3i4HhxJxKGs916KM5P9y8JHovtuZSbYN9SwuDWLFmi4zpg8QvuQX1Z8HJVZXE",
  "key20": "4tkjSWLGPAV4kH2ciTdPQGgawc98mEMExX2KsgNqxPrXb9xckwEzqr2ciB36YjeYwzWgkJV4CkxQrEidyTMZ56Wh",
  "key21": "2D1YeEHV7EnrUzAqsyraR6RpgzK3nFj2KUx52DEF3KX6nDG6zX8V7Ggoj46P5dvydxCa7kZ3GqXajRSSvzwskicA",
  "key22": "2Pr5P6VQ3b9zoXYMwjQwnMoKQ7Zg5Dfw7VenuoZvfchG5gPLHYLHYNtWChaF9QiFCTK1t4smvK4S5xCRLxvqg5Cs",
  "key23": "3vrwAKR2tj7VQo4VmuydSuwLACCiiHLAzsLg2XVdancdTjw572qYFjLpFbpCqRyAhnwBBx3iShsd2p9o6GGBHk7E",
  "key24": "2S3kaVG9pyHqLzRyni2KWo7eMFpR4s8FHbmN4VhTWxMZBPV6aGAMMNi1gQYWtjP9zgBog26sGymz2vTtLw7gyLJr",
  "key25": "4Joq3QTfcTfcvJPgSmYvyAbG159WHKnjZTs1j8V8XorsqQ9X55QQdWJf9PsyXpqeFrnPGAHZngzgMxGU1yg9YtkB",
  "key26": "BvnzCKbbRau4pZGNmDVkCoSNqYffNBb3wRp9CqTmcKqMH3Pt5f97khGffXFWTnueUcB63Tn5YvR51TAUqTDjTbr",
  "key27": "4yeWwFG273RUDzoNDArJbgZbekwHziaFWvgQxVba1r5quSmWhUXhcw4Fjme26Fw6ZbrwcnXRiqg6DBqeMF2r93uH",
  "key28": "64PaDJiUZ9Fw7k4wbQsRuG9FXAZcL8DFWBhsEP11Hjg8GxPYiNWKCL3NYKZ5SEKee5y4gAXbCWp3KR6dFx5pE45y",
  "key29": "2SQqwsMp331XZUunXtiDjaYH1VZZEX3oFNgYywJiS27SwPPn2uDTdYXj3BYCP1wMRetkGyEoyDEarmwze8xCHKnq",
  "key30": "kdZojTj1XPMKT2V7FmAW5oD424QGckBXy9JMecLkELdt6VVoUZp4WEGWZy4EPvBNDhpiWcwNHnFTmccnPt9hic4",
  "key31": "46s6xiAJirHe5gKYwLjPPfMXA1FuTD9KovpfbX2LyZtomm8ACWgxyHaiD3a8t3v5FQnLBKbDECw7oBqBngpD5NFZ",
  "key32": "4uCiQKW4n7zxccpnSaBne765Frnn141r5ZQhTLgbXaWtYDCC91VmPe7RYJkCYPsvBVcyX7EWvfkCMfxWVMb7ZYaS",
  "key33": "3rxCYAoQm7oYeE3EM8pkTUQScBpSLE6Xb2jha4en84ZZJsUn3atNv59gPPtJYJ2c3bbfEJ8rBVxeNnVd5CPj1asg",
  "key34": "3hD1NhuPTm7nSwcdMzXqHQZKLQoD9Rhkh9fZ5qGLWd4sC5G7zXshgcUap9K8rtsr9LJas28bWn88S1e38DoYWUZi",
  "key35": "2GFXkHfoi3ybCeyQdHtsBjzR5vrneXkHiiaAHzjMpJ9Cou6iCuF6JTSctxTPGm1purp77sNVjxoSKaysWZD2QLgk",
  "key36": "5awLD4SYudJdXU5Ls1S9Tymwzi1EXK2dJQS5oqDGBypbjN33WGExtaKNAHNdpf3EuxKQT17t1SiAAHYF5778u7fS",
  "key37": "5RmHtMzGDxKUs2Y5gubNsktbfCetsANGdnouEzqdF3eUcoJVrfqbKK9cnC36vAbzcsvDyrv1CxYv1dZXEzuxNUoX"
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
