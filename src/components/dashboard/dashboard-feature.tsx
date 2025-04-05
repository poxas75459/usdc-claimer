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
    "NgPZdcKpDTWC32QUFNgLFu57BEVbssMSkS7NhV5UAgSJfFmRDvXzDUCmdvz1EEFsDQKXweAnprqkPMjn3zgi5ew"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37y2dbdvcLPGcFZrLhyGL5aW6gAZ2RbxjadmNN4xfXUYbH8DJue2TkYTtBukPCDkiu7SaqqvHCaeEQXd1LuyHYit",
  "key1": "54LtD9gcG1HjZciF6QTx9uvqmvyiwGVk2GciRddi86kqJh1mMCdyV7Wj9GjbzBfr3Xn7ux4CwmNgNnnR8zBeCgCb",
  "key2": "QabjQXCZPZc8vJnkwxVNzRXYgTAwtUXraGU9RnJgv8KZLQfhF9dQEtd346NG1iZk9b97Ugqikt2SQdzFEjwRCMC",
  "key3": "4B57KdwDVwwbTWiz97Sq3p4uwRYL8cBs43v4tikiqDHUpbpi34VhjUpUqjQRPojXzSMcC8KeQ2gBTboutHcRPBLv",
  "key4": "66cY19dhKmMqRvbvusdU4rp44Yjsn6xuNj7JzbC5gtMQKU5hiZHSHhexAiLSUDTvtscVRvskPugZEg3XsuLGTPQm",
  "key5": "2xfqjcpJCpVBGsdqjGDpSpFrC6yudw9TALEu2W7tTiDws7MZL9YwcEb4tSt8sssaATbH4qYRFrG23aYxAkPuBEiQ",
  "key6": "5UEHxBZH2oJQeRUAVFu65871UiNb4sEHiJKoNr2M4vVsFYc1xfQmdRRAomYgJnqVR3EMP5FnkryVNBPbZTfdb99H",
  "key7": "iRqx5ASHirM8hvG3ST8faQM31zdCxQUcEzot1cZMqiutpaVC8bmP7g4UpuWuoP5ixh4E8ywbJ5vAkvCvRa2Uevx",
  "key8": "GaMS5DQEEzvnybJ1bEjbFLYTth3hRjdeMbdRVAVVLtPjW8eqgTT28PkGmTn911hJgef2E33cQuf6z4RpnurrBjy",
  "key9": "5c6cDwCoL9tjK8336iz2dKQhMMNQHfQGF81S9Ky8WXMzopzBkPsNxtbQJ1YFPUpqKkPApsvDpKnhGyq6nL2sKYR1",
  "key10": "9MjxsWbN8Z1h8SbP6yJtdHyPuXcfGgsvCtRMirjRJ2c1KuTRNg1YTZWCj6mreUPHRnJ1QXrUHNbDc8o25qHGvkz",
  "key11": "eZwWfZGuHSifbaVDGjEdF52NdvE8TxMAJLTTVVQZY9WgpXd4e5uVseo3C6iYd1aQX7F5BdyjD4ikPYwPxLMmZFK",
  "key12": "sRMPNEaQiFC6yGFBJ9f8koQrz6kry45mo5j4jwgMMzqWrFqq6xRvzoVUXKUZqBgwdbUX9Dv3xwrjhwtCb6oovvV",
  "key13": "xfojZfBmdjarWZK9jTtVvePQjCAVh8hK8diNwuJYJhFSoNUNHm5bMGtTZLcSNgaPUdx4sqLR9Bezo5fibj89d6J",
  "key14": "hQqZZKhmSQ2yxPErKH1LbLBRjadcqbFLbDHYJp8mmsC4NMytUsvXQYwAKJEJhBkWM9fukWy84cQg15StBGY53qr",
  "key15": "4dHDeQftJHm4KtnA8YdoGZMTPzVj4Ai4QPsYAc1NaQUZr5qAsgAgHiU3txfb7sVz5ysdS4SYBS3sk2FVmvmhvM9T",
  "key16": "2zoudnQwv7SPBhG3WKM9THbMiMKfKyzU2J6B7VBBkZSnLsqJTrBD5BMJXvNa6Hzzber5WopE93Z8a1rUYuR8bq4P",
  "key17": "FeeVN8pFacgnmUyTSLzs3Cq1T29w8qnArKqzYHv6U3q22xk4gRdJwQUDgeynj9U8aD7fV4STeykGQyAu9YBvB95",
  "key18": "5tDuKU71z4noAV6rgGDE4FaJZwaP1F6gK88BhszmRqj7xXbsDVg3uQvGfDKwAEUiBeCtBDREqFUea5nJbStbexT3",
  "key19": "4V5K7fNxUX3ovbppMwM6ungz4QfjVsCAnJ6qgXrRjr5XArMdjwgE2bLev5hHDfGi5w5Rks9E1E6kXRYBaXZ9dcb",
  "key20": "3RB75qRYBL4R4wqF25AGDC23jTuAaUiuoYbfyt2Ym4BXXwJn3WNiVR9nLbvybRakqzm6qGGxar8uJy8QCUmCdWwh",
  "key21": "4FnAHtHgT14tEnne1qXdEwHvttNJZbZii8vhuqUrK4eausgUMkhrBbW1GCikiAt78oX4XQ76Qud9MnhKv3bBWuJR",
  "key22": "UdEGWjbpBrNN6L8f8KLCz3VHsikvCEHGH6V2HUuy3nWF21fCFaEQZPARgqj2HSrzyDpBcfRTdzdi4s3wu829z9b",
  "key23": "25wNaV5bCsJgkNepowi7bP5A2TVVfN6fLy8CiX6ed4LfW2ciCqZV4Uoc5NdLVbdLWEFTuVhT6W5YC1oTEGMK1d97",
  "key24": "qSnJ29f3vA72Mdp23YqyoHzgbMXhcnCW3Z8K4hJYFpDuEaZGTKnRchGwMsZYXUo8kCT1rA7Jsb15bJQaHaYKvFn",
  "key25": "664FrAr5U7PG8wqSwJBLgomahnmTTFgYbJkcXGd9wwhWdkz73bFGJyEs5JGpT7sT3KN4ndYPSG5fTACC8K94q1hg",
  "key26": "2GBiKcKhZe7iuyeuVycpCWyAQ1k7f6qvbo3GaUuBrhCRgbvDrzBDYQdFfw7ZEoWZHWgi3njDatP9itKaHNhjLDHv",
  "key27": "513KRwVDzwKbPph9qViWPipdYbSrdCRFspc32q4SKoMee6Ac1nsq8f5GYpmiuXyNrzjtGTWS5AxxTHwGSMK2Y6rN",
  "key28": "5aL7caj5dvzLhyKn3ZUBLxegRMYGt4vjWDamAXLCAhBM8aB3FezNpP7fz6Zj8uG6QNQ9k6y5r5dqij5Mo3nV8nxg",
  "key29": "2b4qyZyDuAhK9u75vA9aiYubqmpQkjhACMkQVMLqwc1pEhb1Nxpq2PVPMAkfFmG9xTwrp4ceqx65nahJMyStFePf",
  "key30": "4SpndrrWbeRAPHNTxeLbd7iEvDEkHAJNZ3S4ir23HAfK8Dzdv1sHwxcCLvpSCvFZKkzSN9jRnYL9zWCpjvv8BPCJ",
  "key31": "2XbRhgLxXD2793dCyWVTNoxiy5Dju8MS8JBSDJP6ujqax7gUp5v7QZ6N7Eo5N1ebYj9aicJZHLy58b85ASwbiKHH",
  "key32": "tYoaL3ofCuGa2B896X7XRfmF7vK3BMQbat4d39utNkMAibBgesocsbxRWkkLcFzUsabbufYfe9DfK6hMZqDp1zM",
  "key33": "KRNkP4rcEZ2QBct8mWewvEhgvvWiHdW2MRxSbbXMwMYtpeLQdbMiwCn8bHbFv1SJDhwBYbQxtHsisxReVPxe8S8",
  "key34": "3bF6GmDCr12WvvBpJKcCBp98ML6jyVpFGoCDeNHbxnCh11hezSHudo2jUE7Hq6v1v8snFHCdGahQzytE6JkRRRpR",
  "key35": "2W8yxeV2oExPrHYd2AJY6dGntt4fTrgYoRfW5t8XWFXpKXSTAT7h2CwyRZTKoxWKg58MygSUZx9E3ZD67cWrJHLo",
  "key36": "5WKtD15RsYgyWfDhSRrSyEbwnQyYnKjuG51fFX38UyWjxuHQF2Yus5UWCmuohsRPaa267q51DRDbXChxdZbpdrzR",
  "key37": "5DvQa8wkTAZyCwotAbV3jvtUhUxTRpcHPgQcqqcn7gbQvNocUGBeLV7cwdJipe6n3ASUgkuiAGE57VZvpZ1xQfGF",
  "key38": "4wYQodYXQF2HHcHzhMWHLDqp1ZuR7g1LwUMX3kBVQmAsYEoBvYMFVi1V89DJFzWi3o9nzS6L7iLSGQDj2uS4CNVs",
  "key39": "3YAQ8HcRiDvt2Hj4ts4cyU92XPaMTa9ydWvJV8gjx1CFRa3JySEgF9vA8Jiz4bzgmKvKaSwkgMmYJqLdAZmkdfXz",
  "key40": "22qJbqWLvaT31mjnNuaYH2V4Rw9Q92US6wyHz3Rv4THjoDNBVgH34e9znJsxHx5hbgxbpWCPaJJxwoKMEeKWKPxs",
  "key41": "5MDSB64ERVufatpyvnhhftHJVGdSakR96QSnsR4vuVozy5pqYbV6f4SXu6CD8x1d7PazgFxsky1jEQpsy44eMHnP",
  "key42": "4RZN8khJkU2i4b4zYo4b7rRBTUViMWpJBZB28wyWXFVG5sd86rp87kjwFt8H6Sbbwiaojz5mbv8oWVMCcv9umpRr",
  "key43": "U6EzuvvUcTAr9C7TQMKoiusKdzabttenEzQSMa2G1tmt7H2oDAGWEive35QzxPwqxeE6AZDiEBu4n1zUaJL5w1Y",
  "key44": "5FoKEuQENExvzTRvaNKaSZNhzrWcdyq5sFZZSVQhkkAScubjEArghM5towNWA1yp5wKcLTfGTEYoTCkYetEWjZvQ",
  "key45": "2YKxJ6ffhRzRJejJHqB7hArBohzmdFTbYehS7sUqx8T1r1xFMm4UfKXTT48dK4Koe3K5xrQ2JRSzWaTWq6Fcu6Qa",
  "key46": "5NRqagjpywcj7y2GVqvmpCL1uo94soUKJMVdCUdXe4CKE3RELfTrnAsYbM6Wn77fSCF87oGK1YpDPdNF2oiSpEL5"
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
