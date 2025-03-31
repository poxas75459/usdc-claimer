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
    "FG9SqSBWKkSUzeHYq1BcPpkReSTQwNhmmCVwqKST59pynivNRuN8aBKaTNPB3GhCffBUmf1SpBCd94vUeZzFcDB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T755cMQ3iqerpBgEqSa3gcUSBNGYewHRmxGH3t6Fs99qY5GAxxmsdeCfMPhJr1An4qdfLgTmCx1999gy6m8oHiV",
  "key1": "VvXMZYk1Fy2vqyB6RQW927jf1FUdg7T71PFrHSvXDhTfXK5hqHicxdFHhfgHNvbnKN3hdWEAPBuj19K1eCbHae2",
  "key2": "oCPBZrNPV7j3bdYvjfw1BC4GzxocyVQuL8Qj2SEiFXCy2c1T4k6diAKqjPuzmTKqdoEXeuVX9VhFihGUNAvknRp",
  "key3": "52X3yHN7gypbYM4qEWJsTzbQdvWygR7aXPMKwSzsfL1YvvV7wLgQLuYLUJQMFas4d1Z22XC4xq4EkwMMaMXXATHa",
  "key4": "Aytb69oAfpazDoYDQmNnzuutUVmbRYCRiooRwfQpehnBm6iaD8AQVHVWPEBg5y8BdpMTr67yEqRGR471mmUkzc8",
  "key5": "63ACr82zGtXiu28qbXDZ9n9BAvFbkWGjeEbhdcEGMmfWG3ZQjGPGLpUNXa9gErxk78VuVk2g99CQBc5exYkann9d",
  "key6": "3D6oX2jDBNNXbsJDgmqGWaBKfzuK7qqg91F7U358U1Gn11QCXCtMbPpUW4vpLcNNqPSmvFAhzFpJ1VZXgNF5gv5N",
  "key7": "5mt3ZpVEo9BjGqh4osD7QDAjyniAuiu9nEnK4DPQRcj19KmLWSVQvqnLn4ehm97rNg14teQWPPJkauastNizA3Nc",
  "key8": "5866wrsAuPWW7obuXtvgDbKpCmVbuP4EQcofnJBAxiugLL2db4cRbd9mNC2YnQG8LZmhG7F2SPukjHVaDBiTGsvE",
  "key9": "5w6fP6DfqXH7WWXF9BqFjBrDxAEQpu8B5m8ZjAC8DKc6apc2EB8bhgCyzAAKJcmG2VhcEDLijyzoe4Q2PgfFsAGd",
  "key10": "4Dw6VfPRRWJpJPENPy6TnzNkwxCnS4SHgX2uXQKRDfHBvCZwgxvgZDHeuuZa22v8yh1hBPNbP4xLw6AqJGgahX9i",
  "key11": "3QWdLUuYydrsuxoUwPZpaynKCdeAkWmSvDfiRjKQV5GJtMxKQdTKY3QjCmGupeZV3D2ShzpMfUBEKeh1C6QmrHJd",
  "key12": "4W1d3b4JmFovLJJBWU41Dbc5SV7xDspczt3Egq2Ce7SfFdtkhPgccZtDKYBVX166konwNZBqK2PgfJRAvhJrFfRQ",
  "key13": "4LwtLa32hBaKJpGQMfQcyZCK153jiHzFZvb9E2W3PP7Lcg8k5Sdfu1AyVr6XTBrbCm7DwKTZ12HXBjR6UY59D1uW",
  "key14": "2524TN5MjQqrBA3o3y9VptW5EMYysBBXEhBQCqXqsgetrq1V7rCh7oKmJKXSeyz5zrbhJ5z9zCkfg3ofPQVWyTb7",
  "key15": "5H99tRuvX1QppZsSepCzSgkj1WqXAyZqiwQjz599kY5soi9pCE6wxxMMRxmjteHrt3SgdpcNpkyA38UWjtYi4uLx",
  "key16": "5L5bTnmK3xhmKQMbkBJdNQyKgFbvg1ApykNQ2wiRMsWtqZcUoKbXgz5sqimTFTrxaFBuX4DrSxbaAUsDym6gEpWj",
  "key17": "3tLBEBCW1yfRA1dSvmCbA2EFchHMxb8uW4ScJvBhf56VAvub552sKWEhqjHAudQkA7JgY1F8YpzB7HDodzUtHen3",
  "key18": "41McWxJ55e4xMq5SX6DQr4xPxJMGrZbKyQzgQFrYWcmgwxrL5S7MzJQehKQBVr8tugMgtPbYNQSho9UYUot577qM",
  "key19": "4U743rJUBUBkUQcubC4crH1M6aSN5pVyd1xmjs4ZfbFPFMrPpZxFicQEXEKavHXiwzaE73osNbDMsJ8YEgS5ckfH",
  "key20": "64C3JDpkHPpg9RoAwZquKmHcTWPAFiNPLFu8LXGfePcbvXrsx3stwhDNUyP44MLAt9EDT6gKxcX58fpfun2cDMqj",
  "key21": "4RnP2XToZUtd9n2Yabi9jqeUCigv8yTh5GgsVuUnwYeys7Hjr7Cw7TS2sbBssaN4yg7qvj3rrxgez9z6cAZZjqM6",
  "key22": "HqzJmtoAkub49hmuswrn85KhHhyYqtGfoq1nd61Ydng8fMhpTNX3XtYeQXg3U2CGeoa26BcgFnKSNyH4zsNXaYb",
  "key23": "5H9opTyQomW2P7Y14LkiqPZzDBJk7fgyCE8qTt1kgqnr3Uki2tFdgAMpyMTnqUH6f974PCNRQMm4nd6vsqg6gTwn",
  "key24": "9JtbXoY9sFSZw1c8pnMG3bZ3mhhD3TVGbjLYvaXfL2XYjEi5hAUmMU3s7fLLmjVPNstW8Gpg8Gai4zcJisXZrjF",
  "key25": "3Yc2SrMEjQLRbsyDQujrcvpG8RKKagqJjabxivQeBzctTYDu4MMdAYkEW5vhG1LDfVcAzKk4y9QNTB2kJMXgT9hx",
  "key26": "5G8ubmyrV7rDuiDgdSdpxkVkZUAMovrWNw4ottR74bCqVeJwZfMhGqnoG3c3nyxTxfTj14nvMt77MrnKfsYe9a5Q",
  "key27": "3ue7s1AZapjV82KTLtpuVrzPYK5NQP3sryrqeuRdHs3xE2tNXVTCtotVcVrXbCZBRUduLbfKSa3Sb9nZsqdyryU1",
  "key28": "41qoFbMFFLtbodXMs2U4j3xFjNBf8ABjnAriL6aUDePEAuEyyQAJamj5SjQ4vKVhEv1UW21zQ6q1h3yksNboDdj4",
  "key29": "64qzuaUmH3L4JuKVndAuCFVJ3ZtBN5CJpeUeCi8kF4iZ8cveG2RBLj1Ve97APPndFmvKBgXHCyPLdSs6ZUqa21eC",
  "key30": "4s2T8uDRZDxewrRd6D5tvkVXWJ2a93u4PwcQozVmiY2GNyhT9Z8fic6e762zez5CJgnVKKn4q1DL69GoG1MT6XKA",
  "key31": "3N1QTRJfDvRodwZbiPwehsU6JMHxSHtFZA8U1vJWen7aYaPkZdiKN6nddHaEnPeLtkx14NHFZULcCucyLkPGaiC2",
  "key32": "HiLVAMhpz8p6BgSegfvh6w3dqPpCWt3a78owniR21X1YzS43tTe8SimjHbZjFdYFHhxoa6Q6yfqXpph9ShDr3Qr",
  "key33": "4DLJFy98baqdN8UCSSRM9JWkDp47cvqBgrVYV3k27FyS9CcCimDg62ZgT7KaSNM5DY8ktG3xNQuEohMNcebjrkRv",
  "key34": "22EYesH7jmppfPeVxf3SxZwUcHdQUCXDDhPLJ4jCPDi9Fnn9gznVf8DkWw18BAwRkHLR91wH6e49YVCTmJJXDRHG"
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
