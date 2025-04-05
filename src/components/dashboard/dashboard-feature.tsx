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
    "3mdvQpFzc7NspUMbxL6B3dw6ETCy26QzyNRGW4Jg81Ng1eLyxa4PKFFaKg5S38f5ToLPbvCKmMPhwd2RZS1Uf62Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gcpHaJyYDjSj4FtDEPxFFF2uQt9ThDnuP4gfH9gvYaX61HborzKvebHtDvwr6QpnKAqEEZWf9LsnMkCb3i57rsT",
  "key1": "dHvJygd3CStuTxT3Fdm5PD7cLDNuJ9eVBU3dY7K8UR17yxaSTK61Yz3Ls6LTSWzz7m7VpPYoxgpNQxHzyz5f9ks",
  "key2": "5F3fvmBJYhZ4ozTpnSPEBCSR54x94MMbVqTuNrFmcuhBR3LJohbGYQjs1t9UNckGwTxJT5s7EkCopmX3HAS3AvoF",
  "key3": "4pVakeE6XHoZNtwmuM1izz4xnqaCQuqqXMP5R5q9i3hzPM87pbvx2TQdzf6T1gKUhRCiu4a3ySbBwDNmoZ2A4Jvf",
  "key4": "dguL4ZYU3nJmgjpd1MRGyGtSDVBnVKPu5XmzXoaahpmjkaorE2q8z47XkYXTUjH55S2HGeVRW9bqP7UoD7mN9FX",
  "key5": "5wD6pe4f4ztmztRLs99DtDhGwHjgDrDkuDvTEPeLTLdX3vkMDyG2KDajDgW3j7dSHvGXguFq27ndbqUjKMqP6HGq",
  "key6": "4jtHCPNZNvxT7NE4J1ZboYMNPTtp2w2xSc37Haubq94YQ3CWaCVfL8GLM48HfLH8GdaoKeZCW1pbK82VHXJaWTQg",
  "key7": "3vzB6LHR5DBsNJ4gcL2UvUpHYciZBSV6ypF1R6hA4EmN2mWY79cnRwm86dbYiQpTZzho4vEdctsSHLETXwYezMPH",
  "key8": "weBHtra3w7RmEFXeCKW9NhAMBt5huS5EjCt1fNvrCezsp52sxz1jaTyQR91Ka1ayRfJkoqQrkcVFqd7Vgo5tZjr",
  "key9": "54Mw4HAA6E6v21gxmyuyxatkdFLhi3o7r2zaUYzigq1GRdMcAZKkZis3BkbM67Q9zwMfLk9pUd4Tq1ZtGsT4c4ey",
  "key10": "2UcXaHg3w8VZ9EQVXqS2yBwEafo1qUuNH3wWsAvfzo7tqcsH6rGhvu3aahRYdtuWDyxHjb9SusGkbjjs9iArjuJC",
  "key11": "bHn7nW6rgAkyngNhMySSPun74AKFNDp6uNSm6yDRjAsPUg3nWw1vL2V8RkSXwipBYmaRaBZRdAMLdBVVy7bqWbS",
  "key12": "4e64WbXfuvpxN1aV3N4YYMYkCH43WDT9XqbLGA2tU3iN8AXzjTqQLzzLXWzCzcqXTvnmPf6vXbBDAqTUd16Z7Z4y",
  "key13": "32AycLvcZKKcaSVAK9WbQ9GcNf26T7RnKotyACnWpEfeoEDFGyKw3yZiWnc1C22NCHeFe8L4JbejAa8oHhaWkL3M",
  "key14": "2BkvdjfBGA5YETwaWko8wQSAyAsyDv4gMXuNtCygQvcbeLDxJde2aKasYQ3Z68MvWuhYK2t9bBqC6KYUZtftVK93",
  "key15": "3aids3TK6ySXEyhxWcYGUp6r6rBDYVDrV3aCpZue1YWhihydPVkTBmycbHFQNNY8mgiufPxkvBaupwhwTYurwRRj",
  "key16": "aRZCM5S4TNyoUuErWn2T9Po1WPJpG3iVxXTjmogpUxw5Dn4LJGVvFNjvKDJhXQwL1kJkbTVGf97vn8iwCYDtTzm",
  "key17": "3xWrnkrEDaRwcXgCPxdvTYi5YUZnnRN3ugXXMR5ZHpjSv6mQowprxmhDfzk8VCVUysQRtKfJwvyspaHZ9LEtcnHy",
  "key18": "2N3qjAjMAbtEc94hmNdkBjBzvHag5phRx7LmLQxs9mxqsq5bNuvLJz22YytC7BhdX1zFtzdM1s7r95Z8nD2NWNoJ",
  "key19": "wMLa528FxfqT435pW35fpanXoiyD7WssmVfoMxvPibvx6PAjB9pWjEiWQSsa67rpojx19PUFr5Ud4WfAFRbnZMH",
  "key20": "4yn6ZCFqo7Y4E2KTeP6QUFfCtQU4Lo8CmVU2yVzDP5qiQQd4ogasCxev7k65NMhvzXdu3QmfobCqYEKFmjZKUEGH",
  "key21": "3aWTrXRy23qeg8m9mh355AyGs7x3eEUiW8MKYv4ckuB58x9e7nK4umfxJg9Uo4GMFd763bJbfxEHrwSRLVWzzqSE",
  "key22": "4kXvTFCQnqQdX7Nk8Kxj4nNTDYyzZuREoMy2HFv7X7YAb7eqUsANza3ZknHnxXMi1dWSvBcNy7ZQQ2CUPJcR6qJN",
  "key23": "67RfxNvnb1G7QPwJjjDiARth7pNLBhTcAm5mkdQtQnd4JtvQcgUQi7q9NsJ6GPdgJiXHRy5MBaQmxoJ9MH2Q5PNm",
  "key24": "4NgggfayUTZWqzrHrSdUjFD1bASQCVcSbgMnQAC2HkST1GK5viTZH8meBjsdZaWmBZSPmryEaZmwcZ9QZF1eg9jv"
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
