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
    "54vELJBpbZirBbnZwm3aF17wQLeCdjYHXG99ASuXj6FohFgqyCJAPvPDCXVbc3DMwszCfm34pVxAVhp9HebRn3T1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RSYBWBbgSSX8qk8W4vgnk6RfKG22VPxrH5ffqWNU5HTpSH4L2Lp4ooTEoyNJoEkuZ5PhksjPfcH9cVt7Zs7WSEh",
  "key1": "4jdo1K58undnxpvn61GsJqaHyeVQMP1XwWWTtY1GSezXNttfQEHx39P7Hc9q9UFEav2LHsNGDXzSQoQmNwBowgsh",
  "key2": "2ipixD1NdfmkvpiwDjN1m1217JKXbN4cfLTLz7mYpmVycZXdVirQ1g3Lem4g6FmNGRD3RPvo61pZZvMn8b8xQs2U",
  "key3": "zQYKU1s5Jqq2DU3AzJ1NF3HZMX3TShsNvWAofZPv9zYb49Sduk8owETPwYyd9iA9A7nL4pfHJRu9P1qXfWiGy7D",
  "key4": "5UyKvrv6nUUd3nJpHG1ev5D2wEceghQm2zfqRD8Xk7UveLcrBLqoWvEy5NmzTw84ucGmXZF12DZHamwDrEJV2DTK",
  "key5": "3rnbF9ZbSs1urdrcczxj44fsxVc7z5zfaoH7L5xkPwy43mCwWsC9smeAxdvFkMuKfFNxnxwGxTiSo1GUJ9xx3DvQ",
  "key6": "5zziqbZJBYYnyrZ25umWBNnLwcdtbcfT5BJjAjNRCn45tYZtPab7y9ESeeyS817wauCVbinBaHiWSzZ9hbosasWs",
  "key7": "5qoVYvkTdLjwZ1gohJTYYyx8eqFXqmx549wy4ehPJHEqRaDirV5VtUL2HbBq6ubCbwqKUYVM9y6uZg6wbrjX7htA",
  "key8": "4hSnkMs6o1GC4H1Sh9aX3EoJYGD5W7o498G8Xd4dQSbnzXEahqUwrvxMk9kLMBLRUXABM5bhhBfGAjoeSEAY8WWC",
  "key9": "9SkeTFauj755sL9AUNokTjKerVKer95z3gyeAqGn7A3grPgD2yYtbE1ur9tfdoHSDk7KNYLQeMn4h9Jcc5gqCpt",
  "key10": "3Y1KM6PNvb8MAdFaH7LZ2WUU97BDy24XZ92cLbAFUuheeqLF5LbL96FEjeuic41Xp3AyYRXSx7r3PrWYULKSfSJy",
  "key11": "4Q7r3RvLCQAXQRGdd3274opmMqUdKuNwXomKpqZozCaWWBtd1UnyZpisGgU5nd2RhG5hXyLM83vjU4ECyeQ1HnCz",
  "key12": "53vMv4YvasefkxJZNoCvGBpcpjQbp8BpUups7PqRMMzLjeAhbt96CYNxPM8bieuW7QnyMfZMPQg7sCuh84tYGTu",
  "key13": "4KJfem8th9cgEGaiwu2fLPZr7GXKa2kjwdk2LvVn1Xg6VpxDp8M7sn9VgpJK3P84ccCcJydRMFW1eBkPZr4Xd5BY",
  "key14": "2RQZGZn1ZPCbR8qYKp6T8cBVHWGmhhLcJzF9moyeftzBMWiQt2uz1gALecKEsGDto83VYMg2vPYSeSpuRmLUqiWK",
  "key15": "REHp4DdyoqDSskPyYFGz2BBaJsQCuVHtJ5NMgxMV6JSeNf4hDf9VBBPgKmYr6Czd9EL8Z1FbgktGYebe6NXjBRx",
  "key16": "2YrcaEM8iNxA9bNtpVfxYFQnvpQ1phPQp6kPeGr5GgzyKWoXaXG5StDtNPAvW4g4HECmzoWe4XV5SiRZQ7cvbDoH",
  "key17": "5nxLETFhGqBYWin8efnrtpDQimtPBKrKQYArEGGZWexigzy87VhEAM6pp3ZNuhPHvdm1CNTFMQrbzydeq45J2V5Z",
  "key18": "66kvtrfb3Zs6KrbTiEM3qt79vibAo2XAY3RaTNdtRW3xToyVqJd62nwWuxfdHCYE4oMbK6HChgadBD3YCRXfojYf",
  "key19": "2kqJMjP7uacB6xdWWfFzojmP4ZNCCbQjUEQCSqaZi8DwmHqEVzkxNZstqVVe8kdmUbD1ptD9jY6ewKMV8jN1H2fa",
  "key20": "MEV7rDz4beosYpeDhv2LdpyeUr8PjJ6A68MAmMhiik7n7ByJVcN8A1MWSa8VzoEjPQZeXB7QrU7tnc2PYB13Pt4",
  "key21": "5Wwiip1PMqnUUdMFdNmXa81HQBVAatXRMreZKoJi38ksLFP7qzqeTRyonzUJaDuupU28bCiYGaJ8oR7SHcN3oWqC",
  "key22": "4crejb42bvztURSdB4mrNPYi3Yg5jMQ8eXow4X7pv8G71JGJUKjRpEibKaaA6HcEF4Au2UBhsLcMUXxUZSsHtc79",
  "key23": "5t174KShtumgGUZemDTL2W8tcD545zKfLMfTiG58tAMV6DUMdDzaRWkRiLXm4Aur5Dh58r1MeCETm9M42EfTiYZN",
  "key24": "2r1YeZP8ojRBgDMcE1aPDtP57HjegktmmjhJFeYnfimQv7DCpQcMXmG93NXiZN1q7TGwSWnQh1CJ2qDnZmwpNVKq",
  "key25": "48RjUTDabY3fZY2yv1TYfadBi7UPTXxQcyx1CHvBo648F4noVmpeUsC4f1MTSrAjNt97mqScbx1UcQtWYv85WDjA"
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
