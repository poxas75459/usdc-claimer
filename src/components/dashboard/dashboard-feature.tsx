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
    "5j8C2hFqV4HxgkVHppGE6qznBgYWHGA3oT1t2MgnVYNGZssK6PuoMjZaP2ezJkZoS6mvdrwaPa7EU6LmWGYQgdWo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hq3EoE7ubCGHd7aT5GbYpAYCsVYuSVLRWaiQM53Xgaj1XoFgC57PrBURYoyKkrXfYokMr5Ay1MPGTta217zCaXf",
  "key1": "4s7baGv6RrZdwizB7AWzEMYvkwgGq6TFyqPuoXqvrTh5gZ9QH41XpW4cdLDwSR56tH5SykojQ9JokkcoSLL49Xm5",
  "key2": "4WoBAJSwpkDwjbJEiyVkQGtcFhT6karcGbRgoJ14fXGpoyjkf6spKPKwJdJRU3wBjP92T7u2z3BUP8LbSEgG37iq",
  "key3": "4GYvG9Zygg3TDG5xBTJrVHEaWqFBrQB4o5pEMEvWDq4aBjW91yZQRo6y2Gs7uDPpYGMi6yofQu7PcuxkvdJ1oyA",
  "key4": "6f3v27kog5vQzkV1emGdvLyFz3QY7nFP53ewr3VwXmmY9HNFjfm7P3M3f9s8EPNr9LMmvJMSfXPzkeNXp8NfVmj",
  "key5": "32TPMkdBR6nBCF959qGueu6ndq1Me4WGay9qUjAwUXp3js5jj46z2XAzjdsupXbvUQctCvw8p76JY37L2YDJoyF6",
  "key6": "3uoikGYrRWxHRz51kirEBFE5YTgK35x3e3RrA7yxCeDdrj2fUCWvr4RRjExzAjuXi7o7fgX5wTL8uNxbSD81KBns",
  "key7": "2xwUJfeG3iKvu9Xbkd7Tv5RqNeB6K2Qm7Wv8ni2xpbwTnZ6V55t9G2kgNJzuDagACPkcqPqrpiduVpR8BYbzQqJA",
  "key8": "3RBHQofiEz1nnoxUT4w3RZkdUikLeosKWfyw6DtgtLZqWwVQE8V4Cv1sfcvRVjFYX3sUp7bDGtkHVSPaLockmC6L",
  "key9": "2uAv5RQERbGQ9ELmuYMMsd6GGEykoGAS6jPjWNTnztYSTABTL91Z8RfzrjViAeC6iVYPCYkhPeuUHN29BffXEh4D",
  "key10": "2ak6vW5K9W5QxoUa4f9dRDR1Ee27yDCvR7pRjQvcTKHw3t4YNQtDvLHuj23uGFYuxNw9UHCGHHfBdvQDqx7va1EA",
  "key11": "4PGbrNTiC7mQbHRhQg8ssB55mxy59FCYpJomxUd2Yv25ERCFrqxUJD7LpjT4bnhirBHWkRqnxMiBLAp7Ze5ykjM8",
  "key12": "5UqYGqh4cdSAzGCdHR5VNhXo6DyyzbUnEzBf8fpUj4c1baTFUwVFDRV7Rvm9HG6Muu8oFFaz5nJ1LgLFJu8PSU4V",
  "key13": "3xX2edSpV15aMzh4HMfjjwiBmggc7AJFfNhNckLZEYuRkComK9hYNZnvuS6Ed6pBEnhXdbxESrUK3Ncp6tf1LBxw",
  "key14": "2ZLdLhKYJGWVGGEjG4XmJbj1gmrwk27jkiss9DnNbYU9AcQLTDcrjEhqwRYgqFzbKfjxRZGKEgEt5eF69UKiFecW",
  "key15": "3fusAd3RTg8iMKsBZF5dU7KRCr2H1S7dR1EePEyEJuGeQQQ52qSeFYfQBNyBhy4pyqwwvS6VHkHqzLJ4FoSe9gZo",
  "key16": "tGs5ASB4yF42iV2vMQwCFyppk8iN54wAWg7ibPYR5ThCvM9CLXbSCeV5jHq3ZSLUNQbkc8sVh7tjMky4BHJ2e5w",
  "key17": "31WdX4dcKNjieBMQh5utQEsM2yAVwPiYdvoQxR1mKDXTBPDorvFwLchBtg43iNpYDeqMuF8DSXEznde9iboUyZPC",
  "key18": "5VmuGzfXXYcWsrmfcV7JactHE2y1vjofeBfYpRgaaJghm2s6WgexMKDJADGsRBCkdfyMGkJRX7sXbU2Rz5Eye4Vk",
  "key19": "29XAXwHaKhsmndxnN3Z7ZGYY31tXvJT4h7ttiTjMUUQYKGTW3ip2n77xVLNjL1aaTfbhQFCnm4KxKVFNkJwaqKMY",
  "key20": "ca3pYE1Wpu4j9jQ39RpaaA97zCHyUqTpQz64bJnQsyVqJgqJTpFHNhvje5RRrpLXFfyQjgvW3aTBRG5GXcMNe4Z",
  "key21": "oVDb5fELktufDWybWZ7wvn4UVZ2k5uenxKRqCdhWSmD8mQB4TwfGZbKCKkuDnS7fDE3vWWWjnfz36Dmm9znFkhJ",
  "key22": "797fNQt4FNWdFUCqLgWBjEjBKXaTBhMkd8LWbfsmsrjaLN8bMBBjc1n1TN6siQq5Zggv8MyJd3d3n2TBLDGvDiR",
  "key23": "A3TCuJQKxTMAUT7D5y6MQivsRmZ9r3LKR2AiaiRMy2JcMEzdPC92RKAZg3yP4v24LzbSd9MxnTfKcn3teSasVe3",
  "key24": "5Z8qTD3f23oL3WgAbm9Bdf2YierGcAnUryy4NTfyYAPMJCnfgqNmrM9aZJ62pSmqZ9ViaiusjUvHYAzhvftAX33D",
  "key25": "5th2W1yzZH8FRL9KCCuwG2MsrFw7wayNXU7XRqL7ufsgcLYridCmgZ16nmZM3KZ15dRyELCcRCJcL5G1hdVK4Nn1",
  "key26": "5Yvi3nJr7r1jnJMJ53nZWWVoWR1RDSSrY4yRkjuYsMmiCngBYLXnDWfUxPGyEFjaPFbUBfpJYbuYgDCNZp85eKgY",
  "key27": "25BFjxvksUqgD1LWFnSkPRQHbHmswN6J1LGUTxCbFoMzNfGW1PW24jB6zoQZBTseuyAjU75s5mo4Sk8A6LLP8Rga",
  "key28": "3ox9qZPQPe8QHbTjmf8F1kxFZgLpsvrQYNJZfwVi5dEY8qPSnunfBqnuMTFfFSafNjRotTCEkCYwXGdsG19oR2sn",
  "key29": "56efr8fspWkSiR9Rm4Eymmy8iAQCdk4gFq9nTWA9t8CzynvCxvY29nhduP5K22JNuqw1noAL6f5Z96ERSdWq4cxo",
  "key30": "4ny7qeNDStRrxHgzxuj6sfZWPFMVT8rJFEyJz2uZbMxUy2d34PLV9k9RW3PXkpvZBMBsumY1NN7J7LaXaZcCYi4W",
  "key31": "4sh5Ks8ekprZzjmU19UKKYLE6cQPS3dZnn9UcFvS4AxjsKb7ScG6Ua8MhmyJRayNaBRKvPz6V6rkipPGczFb4wBx",
  "key32": "2J7uDNgfiRos3F1KbHmkNw7CkeFZrM2aTN57rd2SMvkMZZxonL5mcAeGW94rVcECq4sNs3Zq8cTJjKQuTyM9KhfG",
  "key33": "4ymdRFtSC5uAMAjg65feo9e6QgifdD9RvtV1NsqAvanKZZocMzWfb8vygmkVoeSWWtGNBpGZ7eCbPpuw8rpwywXg",
  "key34": "564nVMuNbx393MKX7phjczJJAN5wuKYh5zUnTvWHFbG1hiKRVhvd4AjsHZT9PnMJ3MtzKCZG1VQkyYrhBsiiNKTd",
  "key35": "4x3RuN3y7XLCGjLzrQAX7FAaMAYg52ZTMh2kZ3iznPtdWBqWRU6yjRADqnJU3YpWNVeUNpZ8grgUtYD8hjQH5nji",
  "key36": "3AgMCeru5Ta9JDEbshcp7EaVvFq9vCamQU4Ecp82fXMSmptrwm48m5EoisqZDk8Dsm2HusuzYPzGs6cUniuFuGyo",
  "key37": "5VZcMid2gMo2mzi2q8qZe955veEuvVYtqJoQSWbHnib3XyctBwpe1xWWPdHnkco6yB2o6geknEbxTXyh2hnjebiN",
  "key38": "uu9hmTT7PUaSr9NADfdGwbfbWPF2qpfwk1qmGeREywrNYzPGrz1YeHxTzzy39vqFqj5hMh8ubRDX5x3oYwtbYR2",
  "key39": "4A7aBgZg6ayUiWuQF2E2dXGCRjmX8fWsn3mnPXXibURVCn9CAHMUcjn1jxvgw6iqQsx84DRQTGq6BdkHS2oCQJTU",
  "key40": "JCvhsxLCqfun1Ek7gpZia5L5KfzPDQXjJ1DfpD5WT5YdLPZ6NmZXzfnjYpBfhhqRRSBKSUoMiqS9myJWWWfrYSf",
  "key41": "v2dE15yhbzkz9kGwRdZxK1sE9jPKhLf542ptPQM4aYq85LaSsMnYQY2r7kUxYvXEiSyBBBTfio3fp9K4ga66M53",
  "key42": "4P3ksw3R35HZPhAvpAoZHtpfA3mk3EcTTdDzqAdoJeuSftjJNz1hSutNdcmwqNW87GbkcL98iTsPLKm3A7gw527x"
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
