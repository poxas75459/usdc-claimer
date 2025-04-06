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
    "29P5MJZPm7AVYxVmF4AyvxS3sxkPeKvCeAvbw8tAtR6cvZTQR5y142WWhna6bJ8ZTBgGNwhyMiWY79ZFCAHcZPj9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x3XzGbcjFmVa89Vhycud1BcpS7Hc96cEAyFBiMeGMF2nonXG4EPaNVqPoNzBy3BzhFAcHdwoEdfjbMhgek6bKFa",
  "key1": "31rQQUyg3mpfFX4ixowVS19FNLiXyjPGmP5sSPY1HuwhvrexEdt6cPemd7cAmcNL4XNS6y48DHzjffR7RQgXBrX6",
  "key2": "36U91KdYY7LbS898fZ1fk6q4iVshQrQWz2mF1P3B183fvUUQnzWn1C4zEo6cQMg3ZWaXMSk16ugM7wfXHq2AjNSX",
  "key3": "4SwCZn6sYE2MLoUYEDKJg45GH8jrNWhqkoDMFDXfL7PuhVtdgM5TsYYpUw9W6L2WzmDvVy5mrM2W4Bv1pkSmiD57",
  "key4": "2uvVpyE8ZBQbN6M5nnavj2ncfE8LjiBghpvp1kTpre5JXo8zJ2aUJe8b7bG4cZ91YFv5ueS4Rp58SRGjCRXygNYk",
  "key5": "3QDrziW5ydxnJc6KGBxmQMjvXZ5SihZcTu32MJcdJeqd2cyGUVGG3LgaE87wRbsLxHBpPirK1r8R9XdoqbAWsb9d",
  "key6": "3iVm5kZvryaaU3UECYqk3LQZULXrUhxtQoUQg1D4ti9MkyBTgr3BsU8Fn6tgawrdHvQyRZcMH8kj7CKzpS8sLd75",
  "key7": "5ifEnNw2hv4jYbFyo7dxQRVVoGcEJmeeLTRfT7y3gYKEx7CLUmohysicfuzcMRNiDkfWw8bPuAFosdiwbnLEvXSK",
  "key8": "5tWpFzuxVSASXmwfMoYxpeo9wyhovsBtuuAmbkgiz37HjwvKTTq47n47gFVY33cNyKsKRb13811sFQwZCNhi5YF",
  "key9": "5ed7FSgGELJaV5rbuQZ82sWSX6E2jmmmLUqf2Mo3Kj3ascbSmVbDqVL2WqZV6DXCtPaFZTqfhm1qYznUpHtTCWmZ",
  "key10": "4zxYBiaY7m5nKyCGPhfHotLLJ5GgrkqQvvdq2hXkEVUxxq1pWTgf26pFF4X5b8KSTYQ8CBYHvpMUwUU6QfPybwEz",
  "key11": "3UEHuDChXJgbdxYnL9ZnXgUTTB2jsSyZj2oiJre9u2KTbuxZeJSe93uND6M2Pp3nJfuY9FCUmdEuZ4vbfArnBSYN",
  "key12": "3UTYnsDhNnVRrSxnWf4CtERsLMdSoPqNK9zVLtmU6jgZ28Dn4dfdwVMtruWr9oaJYoZydYKpUZctMwdoEca8ajCL",
  "key13": "5DNw6K5qx5kvT43rRD7fGbx8eH5RguPXzVZYdKisYePxmzKEWHkZSc3V7pnkoznXdiUNZNkBYb6LJoHikuPVbjzp",
  "key14": "2o5udUgn1cjdMdxsZbVPW27gmrxq89jqZq1Y9LYCdVqGBJKm6JbiAcbKUVrfFjzBGXisPBfLnDmhgvwYAWWC2VQs",
  "key15": "5h4LxorhVB6CtnMgCMHzQRmUcrudg5cbYJ2WLhcy6tjyRLq8CcxcFhT4GiFTy94gb9MFdk8othQGXKTJJ9cPKmKc",
  "key16": "5WDKjTqPvFXiqzEXkbVQ8eMhCWUrnFGsJ9jwcDoJTxKBknH5B9CT3t3fdzerDLhPgUZeCh7j6nJUs4WKwAaLiHFP",
  "key17": "5nfYTGHgdjCa74ui6Q2dmLv8npXQvGYsAx815RQLMxnniEnxcYzj3g6JRBq413HkftZQWtMdkz92BCDns8kGSjML",
  "key18": "3jjspkP1bhBuYHQ3AUSqd8faKUF31ccTR5bLTeBCwoRyHSV4VesHqW9fQoUHgztQqsRdpTWRR1VL3a5XN4YbmMZo",
  "key19": "bRkUJZUTw7s23t8zxf1WkvwoRABfDTUQMTfDqRZKvy35VWKsRuQtTucMtK2LSndZSfGJqvf2dADtt7WYGe4jygj",
  "key20": "4oTNySiJREsDGa8CgjW1xvXdsf8rLt2TVeSdHhV5sqQZwqxgQsce6TxvFA5J84SAH3ZzYW9ZvSQRAQ9xBrK1gMsk",
  "key21": "4QdAvaHipB9FAJ24XyGsWkeyDww7N5y9ceKpFKC3tQY79EDXY1RnKdb4FNDnCYTxENn32zuTd2X3rCgN1xAsLxvG",
  "key22": "49dRgAkPoQ8FxXg4z9n6Y8LxQTcztUCvsvCmXnjrHkDzS4oop1sqM4EUmovJ5sC6yUEQar8fxiHdiFj6oUr12fPG",
  "key23": "3yWimLpoLxucAavDX3a2JpS4nXSU9FbkHPjU6iUG62zXraWUZD7BPRV8j4Pj3pQSWbB6Mngv3iBwPiFKdRhng7UT",
  "key24": "3L4gMvrvDzmTTtdCjN32AdZbmJ58XdTns7pEwsCxehBuou4DdX9f35eeD7DsgLX3w6YFhXnuqm52dGqPi2dSsVZS",
  "key25": "5bbr5WqWgtPBDif64AHkZqsmAjE1VDhU7wzMeGEmaY8U7gk22YkDN83YNkVxTaieTRrYXhx1wFUF3akVkHxMSkTB",
  "key26": "4sEUjHkCaxhppKmzJswbhJyZ9FnbKWrkurWKs34cwj9m9k6kjGsCpccXBUzk8HHaZmxMYzP6fjuofov9MFGQBRzt",
  "key27": "TNVgAQP4hA6iZoowPxXJobwTDBrNzrYRF6TBDsQ9LAwGo5WW74nEaqQLfMzEG8ce3vZ4YUjo6HXeof8E5BGmmD5",
  "key28": "4vSHvfSRKkaVKrYFjoBkqnKvE1MMmgLH5Likfet1wTVA5SMWZCJo7bTjunSaUD3jbBWtsyu9rThGYDwxrp7GnXCK"
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
