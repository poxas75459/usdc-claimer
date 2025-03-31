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
    "2dc5yTQHnAxVDxfxXvEDucrmsoogD1fSjYs8ioqHEHRoWPA42nUvCBo6BJowfSNU3RNU5TvX2Fh6VdXwT5PaNnnV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2huvzbavVb1ZPvHX1EkDjLeMe2BG7FbNTneTvr744AWpEjPhooiDgbYFDpCzRTN6R7P4Qg97gD86zeuk4Hmzkhkk",
  "key1": "3wkmaZimmNRWwCiF8qvd6cxTtaXJrCum8Ucz864BbtRpiKsJvZo9DkFtkyDDmNJHyRGtyLaCS8FS2WKds4uyHmG6",
  "key2": "Xx5f8o1WJByiGB7GvxtoJjXTWf5FpAAomFNJn8RRx4Br3GQ8TQpHF34zPHpSt73PpY8SRKKTjQ6QKom93it8Dhh",
  "key3": "5QeoKnqDyzvPxBHrVBt2rXfgUtVYfn3GXj9mLoKUUv1z1mfv89ritqsjZf89vL2R4siy174avQjjr1PWpPDH9fgJ",
  "key4": "3RPua7pyq71DCs1B4MkoRMKcCQDFLMm5QakBYa1vLxnAFk3c1Z8Ugq2ZsnPBkweL7hGh7sBdoKr7Mt5tgNviwsHs",
  "key5": "2yPPFZPiy6qkx3SM7fcP5aYQ9XswsQdPRenHntUNSvEAmMsmXQ4NudyjSgu11jdPjDLMGgHjkqKse9QNoYT57iH7",
  "key6": "4iw2BzfjHR3LkqyhZeWBqHAMVqe7gvSMQAnsLHhke4Yu6GJFrX6PnpHqGpyHMzTnbeALhQF4QympUADkT1s7gtNb",
  "key7": "4VrxDZvbv4KM9atuKgMfwMMmPY9Mzu9rfRr2dDBYeR63A1zYxXYtpVAwcX1eZpyN1rURs43Jh2cSEMhj1te3Wk8k",
  "key8": "4mxM2tzpT378Vw4MCGbpXRQsWtv4fSWhatp77hXnuUxYnz5EeWPdkmqCpJtjizyTpc7228iiH9RDRCxGKg3xbDB5",
  "key9": "5bhbHS36U8dmfQCSyaVo8uvNgDH1JXuXLksXPusCsZ4HBQnAzFyZfukcb82PC777pENuk6QKCN9vT5VvdcagThXB",
  "key10": "4euuDegfh8NLdMKVQoDwDSuF1UmY15ZC7ipHcK34jYk3t9SRpTNoeUw59BN64MYa4fPLkQwidfkQmNZ1sSNDcSjW",
  "key11": "4o5hu5ykxw7q68JCNcGmEQ4MPp9VTvJX4dJv3Cau9M22Kocdp6fKE3kf77qkG9jYN1zwdfzBYFXdFZFqxGRgkQSP",
  "key12": "3d6F3Ej1ZGJfCA1YYqScQVKyrsEj2Q2APoKqFQBdUipVMj9sMZFh4jAgyvPw7K87YkcSL6Btvski2BzNex9xBWYc",
  "key13": "4pUQ1S8Jnt1kBjyLC97bQBGnXfexi3KCkjVRvosJPXMKzpn8zkyHKC53BNWktuDRAY4NVjegHKakvFYXag7dS8gx",
  "key14": "4rhVRdTRUu8CMcrWb465D7pZgjUdRaFuaHuvJWweRW7qxv9DMKUd32WH7zLJTgGwpVjtV3VYbGwHgMVfBnS7ZVbX",
  "key15": "bJtQEdiW1WYQsCp8uKZMPejMhuqLaJBPsDkudLoAJvUFm3V9UoQXfMCq42PKJxgpBREAz8viUuZLSdgrTBGnzoZ",
  "key16": "2YdG2YXirMCbsp3kSpCf3uToXNYNB4gjXZDLvoUCq2zLxWtFbsK5RRPtvJRsBideCQbvJU51cwFDgfquxd9fwhgx",
  "key17": "5S7vdGwHAaJsopXm5ASz7YJxLjdgoEQScddtCzxLk9NeVXDxK5Y5U9jmWEgS6zc1ueDiqJwyoVram9KcE6uQdLK8",
  "key18": "3No2kNVGWjGB2v7a4vSifmMdFmBWjzdUiXYTW7zrhsXFvcVQUngdtCzZTnDrWkbXKaEWwk1a8wHNQbFZ1SgfBAdz",
  "key19": "b3jUDdJEpoW4rFirxLdBf1JkpoeN3jkWqQKt99ntM88vK7eUri4ndA4sWp4jVgQRueNcey5y5BXq3wttQ3nFMbV",
  "key20": "4Ug5qz2MBESfhZE95Emw79kEyFbvXTLRFcaaF31iSa2ixGw3mazP8jUDi6MFieKCZMdQRK6aTpDcVNx1wTeGzZeZ",
  "key21": "65QngVFuPnr5s8vpNyEeeHnkrkZXE4SEYbc6Qp3nMmz6phqN2pioYooxgS7gyryvEnRHfRm2DDmuKEJM1soSxTAC",
  "key22": "2woXNzBDkSSwdJeffTDHrQKCaqMRA3VESPDqZQSGZsrk12nLCcWiCgBAjqaAjQMArrraQ8viBac6JJmWN9KvBA86",
  "key23": "WrzN9HRK8BEwXZuU5Kdi6f28EruG2EmKRUjpywxbtML97NLyd5GYe3AZfGK3CekQ1uaWxSMKpHctYGBq3zzoMPX",
  "key24": "5oBRGkpWHimkGYeJdSZwA1G6oWu8Y9CiD2Ch25tc6H6df66EA4qV5auWmQeh5V7stBxeiZRuYEpfZxqKa2CcWn35",
  "key25": "4qwKw4cTxA2KJJXNL4fVJ4j3cckfreeNMJd3WLVRFjEKs97Kn47TxeShVVpujdy5hEoMUadidUKwEtYSL8tapFpY"
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
