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
    "2nkC6JQQZz3Gj4N8hp2YbCEFYKgyGUD4m915sS31YZjsWyFDCvAjyhHndsWLPjs58MQf6RdjBC1UyNqk3xKifcTw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yFk6Uz9mEC6V2qiVG6WwAw52piqMcGWFF2ZmimMpHw8EWzsvX7mLapyL8dhY89JBq1umqqWt9WgTYAgNK88sYYX",
  "key1": "27qXyG7y3J6LRYP1NbnnixPP2XufKRJVELEKubQehnWyhzUWg6rN7SYyxzJWRvAxthLkYHN462UiErhY3jZPE4ik",
  "key2": "3XiCz5Rt331UtnPmHHeMG8wyZssRRvarx7QXE49zKnACEn1sCdmm6Pmu6QpgsJA6vFq1qND6KEKvQLiq5DjfdePU",
  "key3": "5C4Qd2WhiQ5uWeM5bLgBry8DCnmaAFfTgkknMewbS34Q62StCKzsWCubi4eWy6zgRa9Z2JiHTP5KZASEAPWzRuXy",
  "key4": "5Vy4paMB15e6DZ7hVCjpRjGRF2Cg8WHRWteuD7t3321NbABSTQmKeZSBEs8KdFfnZ321UGVXpJbBUxaJxgoap54f",
  "key5": "3pyduRBiF3JF4JeyKo6AkiKm38aKFCYpTh5Ki3VaMZmjEz81PsoJg5LvQkUjYD2sJevtXt7tWyqdDb8PWdzGPF62",
  "key6": "54JjPKi2inLf3aj3hGdBExawpR2ZgToC6wyaQQgDyQFRyroKg6pEjzHxQEH4Qj8mhiKSyRcu4jdcAZUCqLP79wU3",
  "key7": "5Jaowb18k5LujhsnSik7ppqy4pDTNiHmTS8FzXPX7zxPjMxffhfgEfrztww74gJwhrGpUkNp4XhiVB2uxopPupEj",
  "key8": "4MzRHcUebsuqqRErsgfwjWEjQsa3d4UXL4m1CKCv9K6NySrCdwgtfuR3GzFWC4DgE5NsCXgcsVizqbvh1s5HXhRL",
  "key9": "2oAA83PwgXRGkyNj2rX13Z4D82anNWMpQSsA7xAQQmHyXX1kyQzqAkzqy7DEEJtcs8pMAb82pcxMJRr2VjG2GJJ8",
  "key10": "5tScB3CDP3MxT58mCg2TPJsi7WeBPoRP1WsVxbAQMnef7F5yBiTVDmYvcCM3bbjRBto69rPyH4K9CZyzMQC9ZCgK",
  "key11": "CpKCD3dXFHUArKXD2TBQfow2vN1BurD4WmP3og1eXBGZrzpjfo4j2P7MKanLxWnxaeKgysQWttfAvXp7CUnQoLD",
  "key12": "2bw4X8So33axJY2uayoJRA1EnVSgVyQWQLB3usqKQP8BnApYayqHq3ssBAJdqcMdFGqq99wuD36YSQHrfBpdNeak",
  "key13": "5EpW3BqGrrxbKA4whGTGV3iT5Ti3iK9KL6DnB5nFEVvaY5B9gktaYsWnBswVz62ZSzEHiULeEPTst7HHbGghv9ku",
  "key14": "2xNzLnhTbfxTivnXFHkDgjmC6fHKgwvVjvGc6KK2KAiv3aRLEjd26frD2DZ4Q7uCttThBgtUVNgxSNLYTYdPwokm",
  "key15": "5fivsJabQyMzwyvZfRfwgn8F5LtoBY1GXrR5vLDwVJ9M9aYZwkMtbbhvxidZzfo6ywbmx1Dy2JHpjT1hYR7Hyi13",
  "key16": "5rdctDuFC6ZyMo6caqHNyFRjRRSgYXXgwwcoF4VWUfEaaSRcU1RhWXKZMUFCG9xKg3vHAXYQBygQwWMQRuhYoiW9",
  "key17": "565HgtNWLbHLCkHxAkdbxb9EZAb7cz8TcJWkVsGWAZHrofCDX4cipax8B2SSf4UzyLYAucGXCByCy5M5CKbR7fCx",
  "key18": "5MP3YSBAZ4rQRcSay7SzfKxLTeF7d9oERjodcSZnZefXRggPHLdcFqxMk25rDrbwYLbbJBztbwsJTDABpyRo5b8T",
  "key19": "3JQ6Rvcn9ExPrTAyhfTpcPQbTZcEZdBHLPRCvNohcRhBnfDQsixejgQMm4rnmRsnRMa7GD8wvUBk6JfVj1RsbjNf",
  "key20": "2sv8asUPMPeCeA4WpQ5awu2SciYqAkrbvLzxXR7Vgvrs1ThS6YJ7c8fE7983uX6TnwU92QStUPunMxp244Ek67dT",
  "key21": "N1rwc7amaT6DVizmDYexYXd2gZ2qGFfeSUafypBrtaNtPSAQ9AbhWEGqADysJkKjowNXdbZBq6SaBBkMa24TMgR",
  "key22": "4dbTMmbZtsqinV2vxHKo53PzvdoQY6n3rGWQ9FEmWH4yix8zN3mvUTRwL4XiVhguySXbayh7ghzE9JYgUSMEvz9",
  "key23": "3upcUR2RbAsPCtnAjXSecCCdQhdkJENwYd8eYGYEtwqMCFh1yHNNKbNjZcMk1yVPUeGYUpKUzF2QjhB7WeBv8eNZ",
  "key24": "2vQLP1zhCzAarxgYzVQBc1A5Mt2vURHTc6XxFztPyuRoFsZ8pCg8P3b3XWyxbjba4du3CiipmELuHvquswipD7et",
  "key25": "55mpDtn6zrhU29y8GrbfASxMxCnwbzdBsBjgDkfmjCJ23EGhRVmiCx4hUFwh6xg2kMo4VxsBmqFEwWEYFTLRWqH8",
  "key26": "25Q5kAyDFBsToppdJL4khq9TubqTJa3BBNwyXmPDF7DtqajFhBFMY8m7p7hKiMeSjkmqQtFFhEXWCCaamarn73Qh",
  "key27": "hWW8UcryA1owtvGQUCBQK5wZ3ZrkvXfwUZZcSFmEtJzVpZ2uhRJFy6mWi1fUDtDfZnruA3qJqDWuZtsfZ3y13AM",
  "key28": "BYF7YSXJgAnorYFikYHyNv8CDA19gE3TfiMfVyjbUusSgq3BNmFnMiAECwtYsxfmR39W2xZh7Pze2hjvN2KNPrb",
  "key29": "AgHjw5KhPPNJQYw6HxYiX3vR98hFw4oosCurHFJBWJF2ZbfvqRbedNznxwowRXTtFvhqhGQaXoxQU1afB3xLkas",
  "key30": "4RaYuTabpdHYrrVd8WN3D5VrbEoVUFDgsBMzT3cKwMCESewjxH9AyRESAB2UVZGtC29t22qYWq1HDM2JYhtnRnH9",
  "key31": "488a3jye6m2QDFM5XZcpx3rbNqMNF6xjL8PpsgPUsVCF16Uqy54B2o1r4d6tcFQayHVDvydTuYc4N4U8HdV649Cj",
  "key32": "ynenVFHNffYN3mbSev5EFmtFiLBoDpF7GBoafjGCxu9dyGaaVTaqHt6nHSW8t9RXkkZPx67saMbWHxiEHEmdQus",
  "key33": "2xdwUFuPfKetiexoC3TuhtDj92gw6Bd1Khne2urRRoFPyo6Ye5wjEiYE3QvAvU1Snbp9UyrWJFReKtYBYTD3Dmw4",
  "key34": "5ZHxPt4EkXnbUeQbMf93jXEpjfRpRdJrKpydTEtcfJgQ8Ydxvw3tmC6xB6qC6rRKbvzb3MuRseGfXfu5kbrWb7EC",
  "key35": "3AvUvD1gREkeerX1ZXCavvQUQmW7gbqYbf6AgTrA6AEqQaqH14NvQASMbnLHdSDcG6BAeAqH7PmnfiVQmsHu9NYN"
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
