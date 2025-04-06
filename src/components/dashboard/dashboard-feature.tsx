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
    "5cnfgeYmnUAkvuXZApenNBviUrYTT3EnhowGvAtdZQCnvvXUscmuKHarMWC3SAN9U97bDqGdhDbNyuk2s3r6RjDF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KknZQRGJ9dPVkocP2jurchu9dLq7A2voshFmgmfhUrwQUC3oRmM47HPhWtib8Wk6jSD9tMBGX7zdkionNBKCkVg",
  "key1": "4Dn64oUeCqSdVcZr8ZbG7v64RyB9pkg6uUKmGn3phXf7DVbU9PEwHoKbH8jR3D1EJyH6sh5yAeFz7pRSunhhufqw",
  "key2": "ZsUSWyk7VhQSue8vHoCff41epbQK4CYWViK1AioMZUvFi1Xnz635zLiX2N4UjFqgxHRViXZmA19nf25H784ZUX2",
  "key3": "5YrFML95bgq4tGSy3WPkbaB5a84iNxesFKGpPjmPGfNwjcRY71pV4TS1Vy8doJ8adyBP979QyByMWErUeSdyYJ2f",
  "key4": "5DPmMHR9Dxh74YhmTCPfTs84NgA4mLRpUzxJ97Rw7qvsBJQG6MxCU2uvUtQZU4mwsLf24r5cU9fs6QCUkKJhHErP",
  "key5": "3EJj8BBv3k4fsSVAvyj8Gu4PxFKrNp6nB5Nv9hpAwKNM8gMuEXQJNM2ctgnAtiC9ziU4ij41gCi13phYHcsp7ke7",
  "key6": "xqSti9TNPeiB1wWBNfgSAsYijjnkbqC1iM44TTvrmYZAfhDFEPmsxUDNHYr4HHJMFjTHu9orZaT3y7kucMzBoVw",
  "key7": "NSe1hSfL9EZKD17yRYHicTuzKCAiDd9NefwvY5wbBoHCasSzop4F6FX7MsxVMEwiMGWZ2dTYb1AP9yEFz6Vf3iR",
  "key8": "WvPACyoxDRcZHrTxcACNCT8x6s6cRsrcCyD3caeB3zPqPezUzwBnWS8w16Bp8Bjbeg5A2k3awbWtgKbNkLez9VQ",
  "key9": "3DxFi7decLLkcCGhgEGUCodFaUTXEAU2iz3dy8DoXwGGDJ4FStYGr9XfFzC6zD8ueaZxxGVLWDuhP5zqwgdVVDCZ",
  "key10": "5wTyZzm7H4CnYgv4SFmHEwJbWrfLa1iTMMuen5PWAj9PaMZB8Xuy66ck3Pj9VYLD4Lz7oUGVbkEJNdRXDCPN5jYN",
  "key11": "26DUqiv7B4nnUuwtb4VDkAvsD2J9D4SKYqk2jRJNrqG2P4yQFg1mvoR5zhQturDduuy2muyavoBwaFfSgpeWKtiw",
  "key12": "3LJEyKnaK6GD6xvbr64Mkqtt6D3tWjZisiZ7D6gLm7SCm2RFestDDctziWhzPidXLvKhDkDYkkhgmXBw7zucb78y",
  "key13": "1h9mCu9jjj7vDjtR9oQspkDLAXT249wFVK8Ea6LrEADgJN27dDHiok8gNVqJ2WFVBT6PCuVieAS47fjkPQW2WzS",
  "key14": "81StHxJJfNWHTkBNEZvrQDU2b8V5Brc9TfVawARDfNLsg3AjThA92xEGNPijusndEWdMNY6FSaRhMmSQiebe7DP",
  "key15": "4FYKTJGUWtH4G8FxvkDZE5a9hZnvCZHzt8SXWqH16YGP6vKUGeNkRVBv4SJxChw8zJuDyH3NcxXpMycB2z6DTWyo",
  "key16": "E959EChTD4FvmmFQ3TnErThFDqmzK2RAWC94yCczwvEkek6uxRLwDSEjH9c63ZDwYyxhPBf3t9eu3NGhmiut5BV",
  "key17": "2j8VtQBkjP9wNANespFJnebGmh1KrXhwU8cKdBSftJgTfJ6Y4DUXXy1m1je8R5PGzbJRwdmNaYDdWPUT75xvZDmx",
  "key18": "UJaTpH4wJ5mkHNFGEbweDmi5QgfUMvVbSh8XAn6VjiM8qEDoEJCe3mToetfYv2VeGnJmWowNM3ko53HNvBvU8uT",
  "key19": "3fynrdV3fRMd3pRCnZAJ1fbj9cJEGS8auvoDQJhuMukcHZD7RQNM2Rro92pZEreV2vs5rawUNMABoQvWjZ7wRgsT",
  "key20": "3LzVJNkzFd9hzFbdiJBw8VaDFydvufAAMfLCBaSZjZ9Q9C7ohBAhodDV13PkDdAFBGsPnv245X9KTt68JNtt5Xor",
  "key21": "21ShDeWJ8do9tjxGNwqfCwFHVC7fAHNa74VFwdMj7SZ9XQm64pu6Cs8A9g8DhKfR7cvxrvQcYHVcq1M8kACxw7HW",
  "key22": "2GK9vA6EbQ4k4JgHGG4bTSTRJo9Ju7SDkrhwhv8Y8ZeDuPsmuCkpvGB5NR5wJEc8n7d83AzkdfHrfUnFhr1h9AeF",
  "key23": "2EmiaKxFxfPkRTFFCXGx2vTMLdKJpJASvR3DSGfa7BMgJNcLjdEbk61iK3D3zsJs3RPB6pX2uaSGXm3eUQnSZvDY",
  "key24": "22KC2gvTeoXgWgCH8e3iiVacjSnbDQsF93xTAaiWkkB4NdDNvZX19qYpwVYvmRKr42MjbnYY9X59wP7N85hvsQzg",
  "key25": "5gFn4bJCT41MfxhdiSBYwtitkTtJHMvNQgzv4f3fCMwPSTK7zKckpxaUJxZGpYahVYP2VwJ5r4ML7GDU83cR9xxZ",
  "key26": "27HSjEt4Rzw9W85yc6gYkGhgqTod3sdGVHAFRzWgev2LPhFWvqKDHRbYmu1oPmZsoV25Rssoz5VLzJGS9kEiuv3N",
  "key27": "5i51NTsTznYHDRB3YpXiEWjtrRDHk5zd4DCXnK368AM22vPSXo2yiypfYVGVxquKmnfPuBaTM7bAqCosc8yEoLYG",
  "key28": "51Ut9tT1PE9GSuRTvJhoitXp9Ss1aLatqiGuWBm6z6QvjZxq7pr7xHx9br3AMxQsqFwTbYWLcuZJVrAuqZButrh5",
  "key29": "5UmKXSxG7ZGFf5pnXXFqjx45YtjGCLM4VQ1Vzre9SQhaTNXTAm9RA1aZWnXd5nxNfqkW3eRPdWPk8GSKKwgyoXz4",
  "key30": "2Mjad5doaJkH3q3m1wXtaPsW4wjzJQo3REK29ECZAbVttZaCMvFQFpgrtdHbuufrpmkqjDybBZECMuHYH2zTwimJ",
  "key31": "5MWGvxg4NVcWjbQBkfhKUyF7xJrLfGSSefxeLU4wqeRsw9NMGCsCxmPtzdamnR7xfXo64M99AM5YjuxGHarLtVcW",
  "key32": "iddCq64ZGdvSnUhQph6pY2w4eojVFDjcaiySj4GPpZhq4ZfzQMXjfeFbtbt57EAFRNNXyyq6CZDuS9UbuZoVDT8",
  "key33": "5yByLb9L33XDeStkyGarZK9nbGb92TjUg9RThSZZWi852d2dgxng5BTRWigiReTDUpXw1camPBJ2rAoZMGJTYbzT",
  "key34": "395CUfF37XXQhtPUkHBVF8spDwL9pmSzmjMf3xWf3FdcQyT8FTxsKS7W5D7wDWE1SUZjLSkxGqV5w7a9FSN5UaVf",
  "key35": "4V2VetnbMk3fUzpc6N92ibCAozkYekdET2xQj8pbycyjzgm52Fdo8R1foKsTqyDb6MURsDBNfp4ghNwYhngq7KnZ",
  "key36": "Pe1KvwmtL2ZYMKV34dfvKynZuiBacXcACMQdf8dNaNi4etaQQycr58AVBnpyCUAf4vjXvTjD5hrjC5rpv4PWGcb",
  "key37": "qJ1wSsFdGPEgZTm9Z1d21E9GmEqU3dJ2ayaRtdL3Vd9Z1Nx3B8qfkCVFtqF3gXX8Sy3oZRsPWNTtNLZ3ezybN4f",
  "key38": "49guFEmeNAieESeFtpkzxsdm8vfXxCUasFMxG9Gm7XjLBAHS74dxV3svRLEuziYtnyrJmc6D3BWyJETxVnL8FtDA",
  "key39": "22MuoezQLPCqD752JtpZYLSdmzV5rDpxF34u7mGKSVdBuLubguB1CKtzJAhhVCDrVDdUjpnMomPLyXrwXynG7JwH",
  "key40": "35L9o4v338i4JQSDEqEug3BN5w6DAWc3t2uojHR4ofvqyQY3HjUj6b9xLvALEbRkh1M3ucJdcSFyZ8yWutCz2DTL",
  "key41": "28jMPuu1qDSYLGQpJMMpp2eTb3enCadfzAbermJBpqxS8V3BY5rRbmnFC9FLqNDTv9sDhYyRps65SEkdyyx5jcEU",
  "key42": "4kpyf8HtaT8PNbX2wMpMxk3wZqeV8SNA1adXVYZvfzAk1CXnx3kosEyoQ1f82zix3YKsP9KpHY1uR8d4YuB6WLUA",
  "key43": "4wwTAmgpaMLkFReDkJzMRyrmBj3JNgcXDUJboxhKJiZmPWC98VPAXUL25BnUuJ16eayuEnFXRTQ6TYsXNo9kSaq7",
  "key44": "2CsmRRsQLi6SeN43vvPDrSPE2Y27ataLJNFymgUdtWViVVtRGJWpxzL8HQUzML2h6PYZuykonS1dwkdFF9op66z1"
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
