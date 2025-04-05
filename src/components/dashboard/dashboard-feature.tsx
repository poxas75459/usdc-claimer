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
    "4bRTL3WJa4x9u6bWz3JHgReeDGbTBJ3cNopMJ8BCv5kmkHjmR4ZDnvQhUpS4DYy3i21WRtcRCxFW9dPnm1dbgVU5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R8ia66mE3PcVVG7WeMz1P1rM2yhUGSSsq4yR2Pb8TXCZLDCf4Nv9GXz7EN3jNH6ujg8ePMEaAMo4rCfoErwa88u",
  "key1": "5i2jKNkHC4vnhB1E9Vw31ctcQE5nUcRob8o4utve2zQkrVB5cJL9iPE1p1MDtD5ivviTGv6sWsHt7nuGu9Q4KoCq",
  "key2": "4ErhSWRuEqBM5AMMpKMrKTBDTyDsApwXJptkbm3JGSW8KMRTx7mCtpnDfin8vSPRKjR7PJ4pZFzUnfMRZLVfd2wQ",
  "key3": "2Yym9J9vHFY3WvzuVi79oHxxWsYFvZACUrxqqFZB7BmCr9wFqpCwfvE8jcWFPZJngVzvkzZuqMnphbYE1ZxPhUnW",
  "key4": "4BPLmVUJZmJ5NQt2hzs47RQGwHtZtVzeuqiVEW14Q3t9dH3YRwyYjU46ahXZPthAQSP4cuAyxi46HqTrYzQce5bk",
  "key5": "5N9ZQFDBZXUdKNyNZUDBTSdnDZrCnnEy9P2qHErqYnb48xaBSHoAQQKWmK4h4YG6A2FwHFVSNjjx3j6y7JFpNjdp",
  "key6": "2FbXNZtiYGH5dR5cXDsprfCpmbnkYQFBSTMTYbB5KxLwqgyhqMeq42z3qVuA1kE2sc5xdGWxhoTAr1Mcx4Hz6HoZ",
  "key7": "4JSCQmPKnmnYjZezzUNFCvT6PN9odFo3JPJWE5YuiCYRtHLR3dpofC8wxEyaysXyYh4Fv3KRE4QaSCiatUhDSLzc",
  "key8": "31yLBg15F8jREwUKfYn72GEeRvULYTDjd3SMFTtQmjbDcbU35qPjQ726mCLkiNhgnBqkKWbr32sLskbTVcJ9W4DP",
  "key9": "2T9azp56mco7Lt4aum7iLxsyTuD1JH4JoTwUuXVAT75yUasQyf9woXMuHqbehajzZtE6vyMXJMhyfjMn9fiZe2yi",
  "key10": "5x17zpbGNsPPkQdLi2UCJ7jKrhFdZk1pdiChF1HjDJhmi1WAgQKivHCrMNVmj8hwtK467TmdF53Z9JQiYEaxEJTX",
  "key11": "4ZSeHxAdPZFbwgue93axjBW2HaBdg2e78dsYR2Nkh7rFvosq4GQSrY1etabnfbDBZm3bf5zFebRThPx8hVhcUL3F",
  "key12": "h87H3MELEDUuNUgK9qbreBGDkhfcCdPubGuqgVvsG9ovxkCAG7bwocSJv3PM4ZyJAEtXmqXoPAdiKVYJQouPmur",
  "key13": "54HijzKxZcdU4Czrqno5hTPtiX1A11yxBk5re3z5mBWUnSt1jKHCgnxe2yvk5WfLGDu3v4ji7AmcZ2Y1expmMkXn",
  "key14": "2yJFKA54i2HzTUWG134CqGC1yU9c8Ghen4oEYF4NdkaBr1BatAVwL84v6pxM3cCTLD5Y8SoZx9YHX97G2HTy8WRm",
  "key15": "65ZxcrFXvTn7PCnWUHseNt5MwRuX47oXjvwVCBBNHxV6MjCCGQiyEqiE9ciA4Xev9DyGjsvbMXpGiX3PYEanvtnK",
  "key16": "412Q48amRSWEA8oF7m1EvRBbZELA4QzSF7Tq5vBXrgiSj3HJn1CJHXqfKcnMzSh7ki4NCDA8QoC5eEi8TdVqbPJK",
  "key17": "4SEDmzPeVXrU1JV6wAQE5hAq4PY3jwDW9gqrQLy7mMTvvjrPSf2TsfCrQBAUd7kB3LZ9VBf4Urp28hkMHgGGpVcr",
  "key18": "2cWquZkTFKnTkgsiaSg8YZy6zMyGmWZ9fLx3oqFuamqoBmwZGYM3DTEgtddL8fSEw6wMvsdNrwTd8rpaZddXZjxb",
  "key19": "5ENiq2erzbX9vS3jVYQi5xhBQReYt7Hnofw8AED3g5cZYm3mXotjcKjqm1Hs7MnS9R54ZKzkLpTBNE2w443EmTYa",
  "key20": "4rSXeyQzae6mUu3euoor1S1HFPkuqLPkFDGBeVYRq7XQPF1DY8oNStccf65k2NUUArvavQNkTT2qDe7kMLxeFnkc",
  "key21": "5weL212wHHqUJAaAseuFigx4cB2NhgqLGa64k4otRy9NNrpVmc3Q4mjHWd67i1bhkeY86kYc3L13sxUvKmJSJyNz",
  "key22": "5vaNzJeKjyrD1C7LZyBeSAaH1LRjx3BNGsC7quj2Y68MQobMa1j8aBDNki8hXsaPMZeEU96numaUwVZxRT7JYqhU",
  "key23": "28bDZSaZANfMaDo5JipVwyemVzCUXs2NCVseYdSHSn6vcknJHg3CFXDGaV8KMD8FUegYmH5GnHXx5e5VjpTWHugi",
  "key24": "3weXYLwNL4MFJ2oTQ8G56SPqDvkT9J6qkYDQia8EGwYKa2gy1Tyoq7vancgBKUujCp86FKXyPgk8SU7NBiqvcGQt",
  "key25": "4XgZnnC5hCeVbrLQt8MB8NivirPrU3tEUhu7VXQ95WPUvutGBzqUTuPqjaCJKEgHEDW1cKeZiFq2XK9adBEzasKE"
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
