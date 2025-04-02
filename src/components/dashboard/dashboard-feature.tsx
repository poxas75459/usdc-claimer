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
    "4ze7dW5jGB25YCozRGq6fEjHFoHnyCBmQxYC5R9S5qjGjfF2BqJuLJs4L3Xgo5EHPtYvszmGCja1zyXXu7rRxjxs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48mE1nXt1EPpte8dim5UC116kb1ojXEJJFjqsQzrDjG4wdUa18tWyxUwx7EEWjVEAXB5ob3i3CWaeKbAWkrzGJnT",
  "key1": "4nuoHixPk8a5zt9pBJTbgeUitnzmuFvW61mPsGZoSiNScAje6C4saqrmDf5iMZ6jQbkWrEFv3vsH21TfhpTxAErg",
  "key2": "2o3YV4hrS8W1eCBY2438dmhYU84N5cmYJZskpjswG1Ro8SszWfgczZH19DW2Weo6GHKFqNdErbbjDFQXKPrsp8Zq",
  "key3": "3yxu9coNiMB39yqE2qmpWM1i9DhBo8hexdbiDpY39dyMQpaJ2t9NM5wM2mTP1B5ht5DvuuYNpeaoaXYrYEKj5HAN",
  "key4": "2zPNVFWDQxxNFFt8SVqoPhmpgkhnsQFqkwYjWfewmjD8gVZeu4j5F1qBqtVTFfaLuZZFJeVLJ2uVm8z4y6q9qXWX",
  "key5": "5xc2QvfoTb88jAq61oTJJ856wPLcwcrgDqX464hNN7FCqiaDGiwTq5d6yf9j7fw7Zj7gKNy7o6fdEq92JehhpT59",
  "key6": "4DsLCxGpgpmVYpi4KB4YagDjixamzFnHmDL1M8JKeG2nqxDHz7h2dEcyop4V95e6j7mfCJed7QbFqs31RW8wY4oo",
  "key7": "RSEHsHFp3C6QVmRVTw4vfM5Lkn2Ba6h4jkp4bbW4s78Q5UzycEpkLFDoHqZdbr3yM1Ke654x7anP7MayY1YF4e2",
  "key8": "3epLxQCinFcEWESUxi1pvNcoFy8qA3GLSgZwmeGiHhoRKPSNT2XiGjgrYuwM8zHZoLvQpvZ3YPm7bqbqAN5jjVUg",
  "key9": "2xbs3apQMFu6SGhAbHdRrfMPpxek5nE4R5BXvRVKKeAXrHbv8qfHZno7vxtS8AbAzAvdVgUBLUWr9vptEuuBrXRU",
  "key10": "MbkDSc2KXjaGvJJdgLnzDXD6FggjTC4gSPrAmQxynpcxpKqxxYT5RBV7xFTJnK4D1hU3imst1iXtyob4eHwzW3W",
  "key11": "3WdJeS3v13ogtk6WuMYtLbhNwd2s6gPPYrcTivN3KapqY4yQmG6pfehV47ZbviZqPF4ksvrT9LH2HZBSsgW3uZJ7",
  "key12": "2XJyxU6xKixW2AuKm2R5ByJcjsHgYbkENofoosH9GEZhM8acQQjtFgERtoqkkBsdjVYtGq2AR9w9ZZrFW9ubRYLE",
  "key13": "29uMSHqijSq26YS2KZsRDBGXcqLcn4gZWwijDmtxLdPYxQJHbCqCBoHwGPJTYAArNMDQUY6YxTLpCbiVYbUvmvEX",
  "key14": "2L5HELnFK3zJh8eSjUB4rePzi3y1gAe2H83PpX6J6vtB4NQUydk2ywYTBhPrh5WkdL1uaWzJtT6rAJDcJx6ES3wp",
  "key15": "5WHBMSsJxWCXMp3PYaFL34ooNM56BZGrBUEUWU11sjXRgKgi3GKvtp1ZRXcW2YkKFTr3Ef5LcamZHEDAK9HyhyrS",
  "key16": "5pz3rGPuLg1RJHfgwj5pgjZUe5JcEn3hkYTnY8jn9Fky91EFrcJvWUw6i7aUSpEqKeBGvVZhvz4tgQq4yyKYdqTW",
  "key17": "4MubSPpZtDUBs8oz8T1eUNhSVqWuA6nst44SjgtiDxdX3apyUHnnSeHFvxPtVRcg6WSs7Hwre7HsNL5AJALkLfoc",
  "key18": "4b8t1eiVrc5cezqbaKtgx91sBQi3YCFVJeUuJdzVGWnhJgqsDBv62ZuatAWQtYJh9kcpavunGDWhfBnivoPU9qEL",
  "key19": "KGQDvPXWbED4QiFgZpziqYx1D83BM2QdqvfwpP2v8XCCh6yp1eBMHWyHbPFLtsEnDd6MY82rhzbLirKyT6B52WS",
  "key20": "2Wnefc2u4Q6CehG4tZzNEaMTBgNQit1aQXz3Q2QKFFNCtjqfNePDmtsrcypzfStjdqc2kDvjQfrrnkhpL7SQvMrY",
  "key21": "2vC23dBRyuGySj8WFGXWnbBNcjkwKo245gXTi7QqEScEnpUrxj6U2zRa8NT5zXJbwMTSmoQDFTYtx481hPMzsjSf",
  "key22": "5GNpHgimCfALCmfXs2YwRadR1eFpJ8R1P8GVsNjxsWRnkUc18Ln3D5ytiVZ1yBFBXe8E2pfDQ3g32n44FXMaBTnm",
  "key23": "2GgkzEAdrVERYmW1E7738Qq239uHGwgCSiux6cxobv8DqvRrUFoydvMJVgh2x4peahPZp4sSHy4AtPwJPq4MT8c2",
  "key24": "2Vumdg3hopWKSAGnfkGVtsrYqwLrLVpXyMLkBQMPXNS1EFzUWybaYtXW835C3qYn4oJsyMvL7urH9LFxHweGN6Dr",
  "key25": "2WPPZrQd7wuPZBxVx4gLmPiW9sFoZYtDwT8xLfaToLqR4Le8MxCc9pJzitCxJNAonfsiMAjLigBLpbYSpaVAsVqp",
  "key26": "3QcdWG69TW4Mxr8aiQhvu961BDuUJdu3M9ZZjbGixVV4TYojjxE2UtC1HR2dbncWhQJwc1qtHBcqjVvi1D5JvEcH",
  "key27": "3Kbje3kR3qWeni1hWW9fN4oromwsFQwKfifQFbc8DPz3WytaFKRJLCMC1pRb3hRnLMdQ9F1KoDgU7c2GWt88Rwhn",
  "key28": "4yk9quzKJVtACN3J2wHu6Qci6f2XqRob1WLUXrkUMknAgjww4MnZAUbbqzNe5JUD6FZ4MRsQx4MyWfrpQ1XHuLx7",
  "key29": "57hwXoKP9ZW8n1Lbruvcy71QwJL2DEVvLTV2DGGf9BxXraDJoJioZWvpziv4EMWtEHK6MnKbBAEzhLHioy6m8Yzc",
  "key30": "4FGjQWuYhF1HBp4w9EKsLGQqRR4NTz35HYTy6jNRg11qANKkQ35B6c5yVWzx537A5EXV3bmseUxWiFXryJ8eCAVf"
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
