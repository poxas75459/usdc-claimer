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
    "2E6sLvJnSbuwBCPnyxvGvkDfpbfjXanRjmGJHtwy8kg1UPAPen7488mpNkKHk3DJFfeUkWrBk8atXdZ2idcxhBCf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SxaHFEReSmXrG9NXzWv2XMedSzEXQf1CRDgvjQ4hBDm7WoUAhFgh9C17a46XD1nyz7rRsH9Tai2xwfzrhbMrCzN",
  "key1": "5Z98bxaVGXmWAaSJ45cSrguaKmq4zuKQ6HxHBBPV4rbeBgASPff1mNfncQZPvajhMFGj4GY22s8dBTCm9ReZVGBX",
  "key2": "2mXXML3fmf8gbd1EcSVV9di4w8BVFi9t87S1L4ihKa1iYGeX6MYwo8q3rubgXCU73VYwTZpkC2qTY1UuKhbpCuSF",
  "key3": "4Fy5sBAk9trZqpjJUrZBBYA8BDU8UhVCBJFj2UjZkP1AEDD68odTeopn49BLPX7DYhUvxft4uBfTGmseL6wRupBR",
  "key4": "5jMMxam6DrhPf1MCGQMnX7XfkwSoufYxDQceCg8wH21uNo39bCo31ZVqsPRJJWcNoVqwkD1BE6GGJDx1siTqA79M",
  "key5": "5LSkKdAef5NZ21FVw1p9xGJnnibGUoD7ypiTm3ZryWD93Uf2iJ4ft5kw23nrdsemTwMU8AEimSWDsTGJycma6dfo",
  "key6": "5kUozV2RRpLYBrD6PvnJGzR6hbVSwij7XLLf2c1uU2Z9qPzs2dybCaWRVYn2YNyrQKJPXh9wj2cr98GHUFNeZyCH",
  "key7": "3xqk1xwUrSzqMGqcFVJexEtnydNrbxtEHKgjWBBGjbptCVSUi73KwHMiziS17qCgVUuSAogBaXbaB5yjNUQW1fLd",
  "key8": "34rQCG7mqimyApA4tioAN6hMaFxKKSLpa2RNY8odHqhdwkHZ8j76xh9XrayTbzd8r3zNeWKDnCxaQDBHYhUTDSxo",
  "key9": "24d8oDzsQL9cogxX83yphricxpY9EAus28opGevuhu8DR92feDnSDv8mMFBzsZ9dnV4wkYThuyDGYCgg6ZnPUEhf",
  "key10": "4EapFL8xVn37BEi5cTUywSLCBpPdpRGGA5y8G3tCEsxZ9XJTZxN1zt54UHraDFP4knBcU3eUTxbFKG6M3eRwPjaG",
  "key11": "kxSaEw8j6YrjgNgThXbZ9SzLU1gc3chhWb9ALiGJSSn8PEWmQ6oP4jbmLPZt5hJRgCk8baEartRFbrTa1ddGNxd",
  "key12": "42jPfAFejfb2Wui7vHsoqXSUoknX24NoqCLfpuhPoYrqLugybFBvoyUafUC1HjsZwBPDiuqReBMwVvMhqZ5eWhsH",
  "key13": "5s5a6YCjVYm4efaqgNEqDZV8dpwpCxfmAx2DMRMhwzeFXGdS4judTi1ZaV4J5oZMeGpTdqGgdJ5XMVLadhE82TgK",
  "key14": "2fEAsurskLA9eodLrqbTh9rNShZc9XyeeMMvySgmFtr1zmLwNuesrahvQ5LVeKAGv5tGzEM7KzcCJqpEbf31jivq",
  "key15": "2fmsYUjJwcqZRxCsBkQKsdTA2A2iE4wrqPDnXx1yquBnmhRuWAHCdRGo1GdNM2sYKYcTRqGpf3gMy8BVDKRbY8Hv",
  "key16": "25SSRb1QdXZbe1R23zWmgTzxUiNuYoAZZ2i65kV4sNJBJEA3QaCCSzFhbJjYA9vbxtXq98512GLjpGNsax1k2T38",
  "key17": "58G74jMrC3Nf7BLuBj2ZUFtrt91DEG3VvkwsbH17VegJ4vqA8gF3c8suBejSAUBRS1AWHUsnGTCEJrgGe4zbAVoo",
  "key18": "36rFwv5SE9HbhZyssGbEhjaWg5vVQfEqVJy3rw75gam5yerWTsx2cyGYoexP8fmUsbetBSeEXxVfmMCVqDgTmmRw",
  "key19": "3MnXXPeWcF1ifj3pHZVQo65dnU83ZKYdusWrdzQZsBw5q6UCLN1HakBpjf9C9fG51rVWpMLime3nSg4mRR8XwYcJ",
  "key20": "2kcdjr3ikapSqZ6qKFfTPQ3pAy6ZrbkNFYmabbGMF6bokkowXJDU2b3CQuFrqxhNxMQUCnnC48yDNN1nttkBhAqd",
  "key21": "rwuVcvHHXkRHGpBjdo2thvRBEqQryNotfv9xqKt9xKe7hH4FDEGv25qHczTFYYfMNtJFpzs3SPPcXZ7dSfpXWkN",
  "key22": "4eFxHwH5T55FvGEbHFWCaes3UnZmFykku2XKLtM82FZ7zNpSj2gyznsL2mDaLvkvvycZcH77i1Zm69wng8xvYCag",
  "key23": "4CBYD5cpGg88FQ2Cu5zWdy8BmCkf5UfRsjubiMT4bQok5BnB9Dk5oHt7saJ5cJApqxFfuVWhGhciJXTvhRxgAyS4",
  "key24": "56m5Xm1E6oVHcYKTgXVxkqbLDxLGha1T2eP9WLp8p99roPdyuxdEpH34MoyceCHC68MvEtefQkzHRvRF4Md2MUaP",
  "key25": "fBwh1FsKEUXvAg4jnPAko41PJAo6vhJXYx9vgTnC72R3HzBUv7CUVGTETVNrK4hnFuQyJwYwnAmkBHb3WKUe7kK",
  "key26": "4S6bAtaeoAUG1uwdV3L7yPvTTM2QT3GMKMgerBTsdB15BVRUQLXGKkCC7xwb8NqhT5R5CdqJPnCuaoygc8PtA6rc",
  "key27": "5wy1B6s7NULo2kLGZTfUEg9CSEaRQ3duzaz934zyUGhJ5xh9idoGdiCpdTXZJAMpoFB9N4n452B2ZNHgjEWMTLxy",
  "key28": "28Y8jHfCXG5FTi1m59rGrUhyZ2buY2sWvEuXELAQ9qZVqamQbyPKxNfNQuvRuN19gXnuyaSbQorazzcHxtDAvjuv",
  "key29": "7pJ3skXXUYq21RPYXtWbzP9UVLUPSBRFDNjg3JaRUFqC2V6Kay28LdUCqy6RUJAh5ZQKJ42aFSRRqMU9pmpVgVu",
  "key30": "3axwMe3X4JaxSUj9GKj71ydBc4Xiv9K33UrTkgbYksPAVpSc9VRyhpgW8zp7DYrKyrz2TxdnG5KpEAM5bsYUYLd3",
  "key31": "475F31Z894MCYiFrtcJEiuYGChg58dSJdAW3YbBu4o3xDobq4AbdwPckmag5HmEmRpWV413ck1fip7ZxFktAhjcK",
  "key32": "2x6dvNatgDUpwiTDsvYHHfSQnayRxog7mcc14Z2gaEHcQ8szfGN1scXb3pXi1kziWFweX8TgQQD4FHrPxPzTi1w6",
  "key33": "5FwbayGR2eHHBda4UB3X8UqobzTWHrT4evmJNaBX7SkD9wTepAiNfCSZosTM9U3RQ2r5vhm8yPGvgEBV2wbzN5M8",
  "key34": "5QMdwnKaPRx8X4MdrViFJA6KGAW2RNeeCHvrqcVru2FJPnimATJmiURskMjeanAis5Kijzk3KKJk92XQtKFqcvWR",
  "key35": "iramcYystGYuSsZ9cVLozGDxzttgkTd1HGLhsiHP6p1no8ykAWKnkXYvBFzt2YgyF4aZZJwYcaKV5438Tja5xLa",
  "key36": "5DoXBvRj3Bwd1R6KXdbnKhAMgfL4EWx7aBA2JEGGHMMJvzZQigbt57HYtdZWRzLTVKTEEynWVchN3mzHj41p9sUP"
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
