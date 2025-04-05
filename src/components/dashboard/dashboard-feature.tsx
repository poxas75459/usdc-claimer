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
    "2MfjnEeS5gZYWQ9Md9pnY1oQrdAQi5DEzUFrqmdvNTBt6E5cJYq3L9rPYwWzY8p4X4qHeRAbwWoefePk7LVSKJ5j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29fytkxSffTPvkYe3BXrW4RCGzAPyTs3iRYEQ4knqX3jcQRG2UgEcrU7iUKCF8Kcib7UiD6QMJyXRYx2poyhGhsS",
  "key1": "2S5sjmnvBEYrVf8ELxq2khmchfQRE9pfvsGmHotu9ZfWHtcZkw5SqhKqXQRFUd62GLVAzZAcTmk4nAWMA2WCVBzH",
  "key2": "5SqSyXGikuLCe61jrG8E9gpHor6Bxnw6MLGQ5uQi8JHMEgaZPPSYm2qfGxrX54VGqWehQK5m7sPjmxPxr3f2sanj",
  "key3": "tadcWu3bBfZaL5JNE79qLQ5wa8atSJCzSAW9WrhQRQNWm4SExb1N4crcgsTNNjU4yvKJTTGjxtYuArDhhQwtfhw",
  "key4": "4iecBhozBXta9kQJv89MQ9Fa3vnHFoXKq6qjvYvkJUqTCwGftUwAwtHyZNJf4Na47uPBvy6dMtLPU5neCGoMTXhB",
  "key5": "5pzUboZ7sTJBjRTUnxCeqjWpZSGCVEwe1ChnmhYkgjaAgzkwCiUhYvQFZMYwBo751Qoz79zZ4diUrBwqpfaUoPjm",
  "key6": "3GiN1UM5UFPKCDhfeZ1dJ6aUaG8DMSXV93ykCQ4TxWhg2TaWXdyD7bRPTxh9n9U36L5cVyuZ2d24JYpQ5Be7xcbu",
  "key7": "5ghJUGqpCUx9gZDFNPELEc2YUzQ4e8wcKNHqzHenuDzsnGvPcHHjpKrVdaSewAsAmVSRnm86KqRoqC1K4LCgPx13",
  "key8": "jWjYhhwaLRz5wCUgybgHww2HDjkcMPfM25NB7Yyjwf4vXD7NACSzsk1J3hAEVYfywudGWmg6aX4n8oGZZ5S2epa",
  "key9": "3kfifLVQU6MkDKLkCkbL3e5EWC7fxFuMmLBN3vxo7eFmEKXDKhS9itFWBQB9eDykTuWcqVShCNxk1oEoccqKsWGY",
  "key10": "2Ha7stfUgq83w32NfCWqG6TFXX5kLPLYvyGbutGuBZotkE6vmF8kkPzQXQkf2psTt2ji8fRVprPey38QzWLCqbL9",
  "key11": "41KnKmUzWeRK68b4ZuKyHUfaToKLoaavkuiYMrex4ckXKhF2qUHPrVvTGegmEQKVbwuwUj9fhoSzRTLf1V7PyRdg",
  "key12": "62u9CqyQ4hPEKKVEFLtgfdpJ6Pc4Zv94TZcju5WyTmdogUXjSw3quNAdt5V8A6oHQVUvKb2D8f7pbLWifYHTyVFS",
  "key13": "4oaSjqzXYeA1zwk5NDT3SQ8aCHB4FLzsPWtafwu5C957SAXDc4CuNcKT22TqJxhe63VREu4Xo15tpJJN4poER4F2",
  "key14": "Z3nitFh6ehKU8cWfGRXM46m6U7p261s8J3MnCttfoWpE5SwX3zHH9A3R37geXx8sHWGhh4CP9DmCYkQ2wtWTtRh",
  "key15": "4wHtyn6jw26PgyLJ7W5PN2FuKRtj9cxrBKHS3Deb2ZEUPhZbk2NhsPEi81fZyrkNfNxnQGY6P23qNGhHTeRL9X4k",
  "key16": "4YKisvG5GCbzGxzziBZydR6dQmym2SzoTgpgrbHJ7Ri32XF8UJFN3KSMwusnevMrUS9MeFD9JYuYVHS6C26MJfBq",
  "key17": "35hwWtv5PuEJnPu7rUaHnkVhw5ojXzrKBnTe6LAwqrDi3p2JDbtjG6JdTSTE8UZic5zRmqrcXMkRJHiaqhyPuBUy",
  "key18": "2WYBDahpZ4LVnS5umWiPY3X5TkzhhKUQdxDbNgbDMxNk5te4VBoP1HGk4ZA7XmEGAxtZQfHiN4JiXPjTLPx2hWGe",
  "key19": "5A1TFJ12447r5MGsDKaz5GMxe8qhD74LScBeU1iY4y61UxhPjB2mTfBYVqAYYD6fXoiDNeqokrAnXPwcRbXEv86h",
  "key20": "2TCmPkdrprAF5EGJhnC8x3h7ukdmhJGctTAkR9fKfgxm8RhNGpvgNP52HkxjB7jmD76jKnQSdNtfBMf9jSHBoTLu",
  "key21": "ryEAyyUaZ5vFfpwHM4i6pqPC3ZjV4zkgLe38dpNrzU44KBCyp1uSVHRUmTPpKX5FpzSwCd9JpT84u1Vc5dP6joN",
  "key22": "668ifBaqnaeC7K7aoG91XS1EbjiVkQjc8mFShpEh4YdZ6SkthPza5JhUy2ifXuhArt7HHrCBgcWXVb6MmPbYd6mr",
  "key23": "49jmzGWjwk7Cg8nNDCdSEv5bFNbgWxuVWLJqcKCqetAm8o4noCv5xjJGjHtoxPnT1dYYUsF1wgiNKtsyEZswofHN",
  "key24": "1sykyN7yURJHLhKFwQoh6LnJMvUP9f8iceYxdZMjWM9jTiiJsFYkNdXcU9KHqL8bk9ZwnmTxnBrET9A1bV55Kt6",
  "key25": "5mBUCY6hCGPuKJ5Zs76YcqmjMKkDmppa3H1XDX3ZxAPv5SeU3gHi2iMpMXNJbLGWUABpk73ejVzYAVUBAxmpZTQj",
  "key26": "3jWVwxQbnrvf69Bf6uHeZSrXHFHw3MqAHav8zTqcgpwBCk1w4hyz57SG5CLvV2qEJwsBTGXZQJk7kT1dSovTKkgM",
  "key27": "hTQwYC97yWuLYsbh9nLdXCsbwURAeCQL8sBjJZAjgAGc1259weU8Kiqt9mCp3tLd7bTfG4ciGoLgHye8c4QDEdV",
  "key28": "3hkDNoFHKgQQLoGXZk87CAmJdkTEEmVjnp8BXzeGSLzBwUP2NEKstjFWFxmxs8WEz1ou5VQsC9qVRLEaJtsLiYjw",
  "key29": "3YG7qjBLdaQhjZMGaUSGm8mAKZbPVBWjRNbBMMUnZxXvRVsrotGrkyKkSnQatcW4YmCxtLo13mHgbvqmByomHm6S",
  "key30": "622fVob3mgvr6uiKxQCAzmLbSVL4qTrw41mUNp1NuvndJtajL9GDCYQ11BWweGTsfbqitwnNREJEgfmFTiDxcpYs",
  "key31": "3hJaGfyD4VxDcWwR5GCBcLjyn925yfqiGaXu5dxkErQPxKrT57nWCKfuH92nGhQdTQt7yL765zzgtQpuToJU5Ksq",
  "key32": "4Esm8g5tBWtyA8hzb9CKBrwmq5SWJCcTMzFRPGg7xZJiWUZBfMkvdth3ZT7bEnQFQPP5RXFwtsxp4Y1NN5tEfR12"
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
