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
    "snqb8QiEr5AnFqCEvLp9kWkykcCRo4f3Lwfo559SFoCHGWwKPA1p6C5eCQyBA2GBhnV4KD6QdRMbrCzV2EucC13"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J4Qawo8c2u6c19tedJe89WLrMxRjjZWhVyWbekU3STqLDcR1s5yc4Ke6VbYdBUqc4mVjE68oiWJVu33erx5rzmd",
  "key1": "3Hcw5Fr4vsChQJmzSETgouDjJtov2VCxVtftkGzQMzWCp2yR6sJzo3yJSdggvqRPaHiJ58ELXxnwyR8cUTcZeaFZ",
  "key2": "2nKQTf1hcm1XfmhnZj7wZzVUK4FQZzv6oQSSztCXthU13mHNK6khLcT7YmVHtsFjFemot4BayNHF5UVDJpGL6J1u",
  "key3": "4SqEAD4AhABGbFAGzD91biiaut4Ys5Y8iCJ8YgFPU5Rtf7xacCgsnpwV3J55Zcv2pCq6Nb4FPHGEYHfMPJVAJfBC",
  "key4": "2QeuxBGAmuopd5KnGTVS9KxiHQcnEXTrb6VQc5sRMmrb7aBKZX8cuQSUJBiwbvCznzUtsmGtkGjHM8AvkgvSYujB",
  "key5": "3h3ZjBvexNKGQ5toN4BJ6w9qAe1S3kmEv5y9eYsPcrVmunUHU7bdy7fKyuRY8bmA7VkSFxUTEn7Ukbfj2p7AVPJb",
  "key6": "pyQWudixB2HLZAoPrpXmfyxYQdYwRxsBCyMPjyuRmZZgmg1Y6uBp55FKc2g5pv8iBQ3B22EEqiC9vJXP66TnK4S",
  "key7": "22F5EotaGQFcFHBs6oryrN24QquaZ9Qr4N5jWagvmZayZ8reMuBZUsec6HmqD67fTRzsC4cXBsPvCfxxp4WWLLag",
  "key8": "2XECAHPshWmcs2N6P7QsvCDCuvY3sj1UJF8TsqTpnPzsRS4y1GPKmTCBxVYaqVa4fXXJ8vGyJcXBQVPwda4FT3N7",
  "key9": "535cbBmmvsATPwp85Hj7GeEakQv9JLZ4i7dsKkHc772W4P9fpQeUGpqJtAnWw9C8UPy7FqPCAkcBtSbiFe2wtsFU",
  "key10": "jTwGe3QDZx874zxvmc61YEDLnc3haWfw4eA8VFB3pNUNAfpfMiyksCg26Zzsm3756U4ksmuUNhcbxUWsGT8MheU",
  "key11": "2vaPT5Wa3YUKYiWR6UfhVg6k52FhRZUgRPgbmpyyvEbAmusgSRwZjvLjjToW2ygxeRz49iLSNdfu7iBku56dAxyX",
  "key12": "4xvnJxMfrD4womj8c1Hkt7i2QnuGGbS5fk3e3XqxfqPt1gq1orDfat3ZSPdSuCob7YWc2YeFkwvPhL11ziidcEe6",
  "key13": "2D7rM3yZn3HkdjCxWPnt2cfNouRDJionUeW4PutK27XxV93ND1pTDT9vtPvFsfDqnoSAaGGrbTsHx2hdRViki4Ds",
  "key14": "5hR11HUc4FqByd5H7R4sUR4ZMexHuEYVwYdyaKszZD5kxuReS5Drn4bz5fpgenPZ3VpDRfji67t6yNJodiQADpoT",
  "key15": "22QzRjzRRmRowntberPkxPwbiE8JSkVKmkzBBv33NKkDG2VFQFmk8CXmnm7WPyhdPFzJyF96wsfosA7JLwPbAkRr",
  "key16": "2Lk6eUuLWX63F5taEub13xQf6NqxK1djP5D33GNqDBZirEmk4aLDKDKhoZVWRpHEFL51N6pzCFDAbZ1maSNhSbCT",
  "key17": "61ebCVJqzEhSCcuW9KPrZ4UQrAfAFjReBY6WhuDqEamAJQ3E5ewYA8zLX18QQdLC9VbB2oxMBdSXSQeHtAYA4tiz",
  "key18": "MihafLJEUoHwCZ8cMhWNQvSpUVF4jKfzZ9Q3bAodUkzF2MESUZkK8TxDt4TcQGXCTmUi6KYbegzGj8GyewS2tE6",
  "key19": "fq8zZbSe3UDuTkk85smbB1gL4zF7w7bgrhRBhzLDQJyh6NnvGpiXFjKmEoFotiQAHrjEMVPEZxT7KxM365tubdG",
  "key20": "4WBxhyLWUPCJFpJo1QMXUnukJnoLjqpUYnBRG3oAcpUy7uddfKsvjwDY87EL3vachrABq5bZ85rXx89KohRZxYgX",
  "key21": "43UwhNuWWKNToocZc4UDkzQKjAKsZDmhvQpLzkM1BQSdkJM7DXFKDCvgRybt1dXeMqskNBgQK1guoH93o32PMCSJ",
  "key22": "MMXdgnDSHmsRgoQmcYDd6MsD581TQ7J8hQJwtC6Ex557JWy3LoyzESinXEWc16b2nK8R4Nr3nB3vrW6tfEjEBYB",
  "key23": "5oxooq1z1xhiRc7FPY8N7okyjMqKcoGcVfp593y4pfFP83a5TLizvvy7MtivEkzVKY5a5oNcu2pJdh8pRmjoozFC",
  "key24": "2Dg8vBAVCMKw25ZtPtWveT44E3hPMqBcWRoHrurehSYiuF1z6vbfy2sC1mNXQUE4pKJcecksXstnbEj58wcC2PfN",
  "key25": "4Z8SeFFy6EiEBEAcgEuBgfDZ8F2oddsWSj4avN9M6ibLw4Sbp3oXZnkbAXpb4YkxZtgt3nJDhcNb8hV9cLjJNmkS",
  "key26": "4PaKkgRd6pathz4wjEp6DhrPwQgp75LTSbHCA5ZxgrFV4PmpRRn7TZGpmfZTspt6FkCADj7tvLEy1qjKYzaYApp4",
  "key27": "sLcbTqvYM9UD694vhN5CTGZitE6TgX6y4CxmziWngdTgqkbTLphk5PhxLkWUcSCUnAzVUh1ZsV9izYNrReZ2qZ2",
  "key28": "4sv7gdLrd5QC6fjcfFX7ThLM4wAHRtPrcLTdJ6diyWT4HCWdDzL9oh9VEcUWqQ99eowPxtCwSYq28pNwXcmCciZP",
  "key29": "4C3MbvEoNqzNcxSNG8LPj47kJNQAaznzRc7L3iR8DM86nCXvGYorfBx3Qyw7mHLpyMYkKWHz6MEz9ozYnZ9mbwfd",
  "key30": "3GEAgAJ4HSYnEcTnJRYL4zS4aFVBPknGfS7NUYPux19LmLixPStPMKhZ5iYCxyHCP2bLzzde7ESmC7xXieb3sF4X",
  "key31": "2eromGywXKDBk8nHV3eB6558dZvFtprt6gep6541M9n2bMHTvM3mcsWa6wZsfhgDydZmcxzpyZbGCTcd1jbygfu1",
  "key32": "45DmxvSvJaRbkohYNvVthnKbAVF8MmdPQpG68fY9kVZ4B3PzPx3NMkiFUSxqS2rw72HNDQo3d5P3Dy1p5gP3akp4",
  "key33": "5fhah5AkuWz9WvFC7EeeEaWfz8QpFGCokiCRHx1Z2dF55bryYmuq5ykRvGxqy3NM55GLv7P1XaiGuRw5x7T4WAHZ",
  "key34": "61Ee1FnyeVNxjsuU1mBMRpwr8CpAME8nruTiXKnnjUVQ1VvM6DHjnGK6mSsCj3zDD9APgzk8wj33GdtVjUPFK6br",
  "key35": "3pp19KGCjU2CHp427nvjcKH1WWegP4uURHYQjsFVamp8WQutT4yL1NHhhKQbXX8A9fFwQ5DFRCjfK2eubAG974bR",
  "key36": "2dLtkk6CrKAJrQno3Mf1LZB3WXZs36RRQchHhKMMtqWApqeG44ygS5XqjWDb2TREGrRJopguhTrEvkRNhTNcVamu",
  "key37": "5HxWGaPk9ievfAQTnBi1ZengV2ZSEEHx7ZWf1dSu3XLh1c2GPTvmjqZ5dJrUraDr19ftYUYMkcjUj5AhqJTustjW",
  "key38": "3qhTG1DgbJXEFSyCQjsTSgnPDgEtkMM6qCFExry8HPT3nJPAb41SkWXP5TafmaE9b1mrYSTHmkdxk72inaqKMpeN",
  "key39": "5tjbrxHy1J2YanMs75fUWw7jf9EXAw6Hc9u9dCy5xjBTSjNMRrxqr2TV9MZyeU3MGASqf4SyqRncbeRMyD9kHYBy",
  "key40": "5zgP2xNBC3wZTM8Ggd7fHaNJwEFZ8nyK7ARzYcYXYkBrw3dHPFBerkUPnokvGF7fJ4qRBPmadxVR2MA43euKR5if",
  "key41": "2NnwWWpJ5ZrhTENReAdTasWJ3hw4pzv3N9gwAinkH9m84TMiHnWpRFD5ZurBfKirZ1yCz7ZXYyjf6LErDDpz8YQU",
  "key42": "45zCKL3cSXo3jp2CST8L5eN23zokrGeqGJ2QytyNkfNe6zXXycVrJNBgxUJcA3mdJrTGNLqxdMeXdqBq6VRrLWrw",
  "key43": "8FzXAqMdrgDuy8Rt13WLKCxDNhUsHnixZEEuZNVQC8MyGuYovxmkgRk7pPgxv3iAy749Pcy57JEQ8AvjqamDou3",
  "key44": "4BQUJXa5F7kQ98NA7zmVZD2Qggyh8WNoypurf5tcFxcB58kPnCX7T62pwNzj5jm5bqq6tMrbbRfScmsSYw9mDiJh",
  "key45": "5eviH4rJ7pBc5xRFD5Z5q6GQKpdu4sK9R3oDT9dcMrG9tskR7jCckmpp7QAiKH81tWKeYnhVeTKL7tdGsRvgFyVh",
  "key46": "5Vk4hBP61EZKKhkhKeSm4UmJWpAH3Ad3yd4cWRatMcbD8R8Cbvwqsa8WJ8BfGdvSp6ercKSRmjsGXpHE1LiMhNdD",
  "key47": "3JDNdT64hdVpUPcyMwEEWgWF6F5AVF4JieG2oECiCj3R7dwuAuwnDAdBSgXMiiKBDhsnodHhxWbNEyjDjK6QWCYe",
  "key48": "4iBDB6J5VmVvGG9sbzRG1uYaUe4qAHyG8381zyPcn3B5sRBXezCyeHzUMt96PTpv5B5FRxjumrdeHz2qsy1gSBB9"
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
