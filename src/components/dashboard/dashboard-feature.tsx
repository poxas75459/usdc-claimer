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
    "okpRpJ1Njomf498FL5stbtFzRoFMyHsgbLxnA6MQNX9jQU5ys12dq5y9FtPsRwGsenCs4yYsvPRTFkFHJidRpaC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EtbzJuGE7E7X6unFWHmMkSUVef4ULdQHVXWU47CQS7osJAB3BxKbnjVGZC8T4B2ykVBBefag11rfceCwyAgEVoz",
  "key1": "3E32N1umuDS6h8xN1XeqQdoWVb5G13cKWFVcCGWAdPVP7kfrhbrzX9Vr8PkBUcmCpLVPnM5hNHk93JUogJapz8H1",
  "key2": "5YBt3bTxypQwFUhQCn4hxxk4HdTU9TEhmCBAkfz4D5hbuxe8pgxBhz7yiRSV1uHuqScaiK3iGC9SCyCLxXmRGXCD",
  "key3": "65DVH1NGK7b2QVfeaNbcQzqmvbQgFWFaST99H5WTBwhn1UPUkg6A8LUzFQJQZHWQgqyEFAvVSoSvZcJ5FfeV6HDS",
  "key4": "5KKUkxV1a6XwhER8kENAciyMRPQnxCLJRZhA1Kfj3xtREBoofS1fNP3mDXdxF7JEYzsco67111ieVXvrWfZZ5Y8",
  "key5": "Ch8iG2K43JiyAJf6eM7mnMapVaR66iaDRb6ppHwoovzYHTHhzUxYUAMzYcECn5K2DYFw1Ae1v8vNNRTuo91E7Fi",
  "key6": "5dJHGXMoLFhcTmDkMkVWLQUQNnQvRNyP89kULBUCmFNUQx4jFGPsUYpUNDEfYPkxXLE7PqbmL97p62CwC2rQ94W7",
  "key7": "f9xXn15GusiD7Ye6vBSW4vLBU74VMQ98R1wi2cLXx1Ua5HVDx6v8xNP778MV6Qe4txMXgQv7z2GtJqpNVe5yJ6k",
  "key8": "35rTd4DTvwd8qqQx9n18WxC4i2sRMfFJTsUrEfCe3bfCEMZXXZigcYGmQ5US52be38TMehFpd4P8ddAquBKdorsW",
  "key9": "3gHanZVRXFvw6TSLutVVfJzdSFuW93Qv9JBnVRWXp7i941u2yvsB8sSyPhUMwSRamRBwjKGUjGAuUWgCj5RadtEU",
  "key10": "4U8XNDdBKQMpxfmV9LHsovzmUeivdQJs4Rrx22S4XWc96hNzYoQhCLQzzHTXFn6pqc7QLKhqZqgK33tr3ahiHzXm",
  "key11": "4FWZNzv3rMn7dGatALPuCXmKu2eVycKaYEM8jhzhEBvpcU7D6Q1i71JwFirbkCidUrr7WQutmWVVg4eTTzAmkt8q",
  "key12": "2TeRqKhDqoHKYGGpnKWao7m2vWxWw74m53DPfuYoif8kqwg9Hfm7pL1rW9GBu6C2Ye7784s671GJWonBvhVz2v9D",
  "key13": "3wFpBz5i49mbYeEZ7oEqU8TmJ7Scm8A2csqgHy1dkyVra4xYrVDqMP1yuXRQ4iWoFCHhqCYNjkJDvZyJjJ9ADEuJ",
  "key14": "5msbv3v2o3kLFiPaTctLiYWjRoydKYv6HsvYqECygxkoJAH7Va8V3zq3bi5yoHY16KQJu9YRhxPox4J9x1BrqZpr",
  "key15": "3KATKRFGw6ZidGcgsdy1JHyx3bpf1vGg481jGSUEL52DHvN964v8KAQ3DJ9GXgzktzW77eepNbxttVkGdsUKLJzH",
  "key16": "uhHpu8vruDJD3DGuwNdviULXGtnYGSp32jBwyGbFPY1GC3TxDHVHjVDQTnBNQJLbCLH7X1QvDZiopSsuNMowsys",
  "key17": "65SUBuNqKSQBbKQiVk1foo77WgEJPWJxQj41FepcoU9ueXd2PR4CcyanoMjuV4rpGc6N53iDGVgvAGNKNhnw5zSz",
  "key18": "474nDG7s6jG8CjXg7h9w5s3sPa9WNdMoP5i9CHQ7kmmU5yhqG7WEtNSPdjUaMFYh4Q361W6dLK8qHHZJsyi4dyb8",
  "key19": "24MRRBiN3mNr7CiKkYGfPtr3RKMmonmzTWbR2GJVoQmWJEyAnXiYsftB2dvdTLQkXH8tJb8M4Csf7qNfiZ7LemBe",
  "key20": "2poZbmfN75PVsq82EAGAvBxBZ2BSBg6BtZmErSiWNTz9dbpvhiidX39egBKnLf79pzhqDV43DdDJguq7NDsvSBq8",
  "key21": "4Ki9rthsCx81gd2imqPZzvmz1gZpq88bftjD5qLzFjZYTSAtPPPqjUz7GownjxvhPaXB3vUyaq2ndBaxwxFf7swr",
  "key22": "j5dGRXMyeHTCeqWHFy5YDoc7aTqTZTYhLr8GnRMQdoUyC6yS7Ss2uXhbWGnCTQFztxwKt6XNucSMMedYUpMJXLj",
  "key23": "3dZiaWsbr9iSnUUBJKujxRUMjsvpMvHZNZyEFwgN3vgFhr6McVBZnDVnkhHjro1XFz5ESVZKppcxe8GaidLNFMkf",
  "key24": "22ZkCfdF21j3zLF18jyitneB1osqmmgbxXKPKsCcgFPFCYDatbEhZwpaE28psGXfP6wtvdqobjPFP6q1jLR1Ba93",
  "key25": "3vqeytdUf7tgSKrif8qd3b7AnaauonmeJd9kWnmFSUGeSo3qPghkgbZJULcVo3W39vDUSp1cJ9QSbPmgJUkFXhhC",
  "key26": "ApNo5P5xqRTUNpxYyzeMQKGV7uVctYaQuqLLsWJMGXLvWvwnQ1ycAby9F3BCQfkAvHgEpfdHnmsAT2XJoXneDFb",
  "key27": "5CsfH5JUsYsQjU7vPd8mcwbQZTq2QP2LmzZm8zwVFysJxzBT2ss3dp8cpeQoZPA2sUbAExR7kQXTR5GEQvJPh6Hi",
  "key28": "4uw3XF5vV4neesu1fm4wzkch46NqfNojJtidKKc3whXFHouJ7ieqiyxERKB2BJYZDYiTRPRH4sxdVsnueL4DuiCU",
  "key29": "4ZzGPbWauK41YNuqNGb694P6ShJiGVH8rCmkDaVRQfc1xuat3RRJxg3T7gjpWktbNibNB9y5Cy8ctH5jb81sK2xC",
  "key30": "44aPNRhdNBwXjKbaEDh3F9mWKfuXC1vbQ53ZgxSHJw7tA5cABRf7RUgaPtwZ9xWcrx8jWNKWW2nGXhS1drTeAMtb",
  "key31": "4QZrH7Go2TzMiDAccNB99UusKYoD4UG125eyvh4e1TPuewjHmHH3eGSLUadZ4iz8BqwLPEgippcSiVde9VbqHa99",
  "key32": "3S7EvikEcVhW6MywhVxjMBu7NoQdWAA96JZ5bc8CenUTqGEKjtBPPLbBTZsDPMt3GDDvA45JYh1LNTLsADWbB7tp",
  "key33": "5mKcTmdiKPLWmBSjYhHA1LvyJ2wqo6cRHKem9vdXJVyQrN3TCb3rQzM2ViDez7sCghat7wfpALhEQP9NKPngaj1c",
  "key34": "491vhftU37QpKggqp4X9JXuUKVy4eyM6Q8Qg7G7bzTSnXzZRxK3j9Z1sS5w3gc4pFtHoVetWcU6QiEPLK85UHHA6",
  "key35": "28HXXfH4AD6XHDChq9L7ceNLTfF53PKzBCSuVH6fpLgxSb6qMpnaNpxEEqHfgSYpdWtXTTArY7K34FXZY8aw3iYJ",
  "key36": "63cStfoPKUicgZ58M8xP39d6eDMtB8ciS6N4mBt1TgvXZxCj2VRjAskdjg98Ef63zustsWAcDFWyNXcWEvGjPeyf",
  "key37": "5jTDsMRR8HSSEC42mWRukfE8TAbExNdZUXrfdJUfHzSm5NsyZkLHiL2eFpNYLua5PZVdjJtwjA6SxQshJx6frKrE",
  "key38": "2Z8KQPXCpaSACt8VFxu39Ycza3wtnJNTEv7Nj8kxXkED53Fm44a9fCHkVDFiUWwE8PjRpNcSVQNrVK6xn5THVJfm",
  "key39": "2hnRTGtfC74dz9xSfj23XgsUsjUcrZ9qAyogNQhvyWF36cGAvmAcVvuYKg5Wwivc4Snqgjgn8yUbJxgrm2EtAuB8"
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
