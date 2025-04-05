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
    "2cMcGKBNZKmHVbbVavzg8nXtNRwyCtDHZZ6eD7wt7AoXLehuSrh1tYUQDU5X8VBSzP6LNG5YHYC7LAAXasaqJg8W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NuVSWHXgGJhZUbtBC3pieArz4CuAzURhVXN2dP82g9zfb3EWTiY8wCd3xFguYtMupsXYvtu2axtAPPLnwsYG7R6",
  "key1": "5BnUWm5x8xe3QGaovgB1myUd99v64gEkQh38JADKtBy5tmfhpbzXMfNU2X1GS4ZN6j64M1FaRusjMMGLcT9mLCqP",
  "key2": "4vE1kvng4epdyT6dUapJyFnz7UbCmVS85JjHr3Hwvi4HPZfxNLk5KNpbQxvWBnGtpXtLA16S1HYFEqoF2EAFnYQ8",
  "key3": "4MHxRqnu7EqKJwgsWRmXRmWXnUXT7mPoNEHKoNtDbgPPXat7Xp8RYjrYEw1cZu2eufYytWPz791VWTphBxeW1jxj",
  "key4": "5taMgca61oan8MoPcaLUrkVvgeAr1tL9wpaAxNb6JbN3hnN1SWEUCTsSkdzgUpBjTnHXjRdHvqs1pSkayDwMXVDA",
  "key5": "2MY4SyscEmx1tKqM5DJDQfFUdvH7qaJgupeup8F8Z1vspJHyEKaDyNjzcEn8M7jd9ySKKE5KvufpwkiFfbsimc23",
  "key6": "XSTtt6d8UXBQ4VvXkK5a8jzxkq39zGG7n6EugEymvbs64ZfozRaiXyX7JVHCShkFSxjASq6tKUvSKHW456mBNwT",
  "key7": "5YTmJUtaaHzcSUxZat8eRunDaudkwGfVxnK6n2YiZ9UNY6mHq2yLz2Z8EAPN53TK2ktKYDjHa3nLycpBS9Z85cAV",
  "key8": "2Vbs89J6n11dSLr9S6LMMwbXreytVdY58ByCZgNYSHdnsv7LKLC8fqycE3KFUd188t9qjVL6Z7zUgbqgUhyWo2hu",
  "key9": "7pydZTx38nVfQGAsursu1djtBWdQmgPEb7mHB7Vp7CNK2GCQz7iWYmX4VY3NJdRXbnnB26xWbQfsxV5BjEBrQGJ",
  "key10": "3FhpVFgyRfcF4v3iBmoSogv2JZnHBJZbnRCmCHe86HdY7oAXTjJyGQfbfwjmk9cTEfzT46Mtpxd6tSyyLJ8Hsuft",
  "key11": "4UbRp1XkTHB6Hck8SEhyyo2h5RFoNvuxpYKvr5Fvpw2CmLMKGJryZ7u2eyc9294JZKgJPa8ncn2bPqckdTGFPpeQ",
  "key12": "rVi3G71YYECcKSeRAkJq3tYb769GSjmQ73TtjjBZU7ov4AruVuWtycUK2baqkkordFRxgogHebGKxaYmNePxFHf",
  "key13": "ph8frVYbQS7Ssm9v4AmcvUSndSx2fvxpTWMwuPDPaXC3J79taFweq8whGm9c2NaoBG9pjCr7UeFtwF5M1szdMoP",
  "key14": "3FnnDLSFVBBxijtBbMurfXJRSU5pP54RCn7nidigah6gB2BKUNKtvHf8KKyH7D1WjJSDQbLimJuy4G9AcpmkzWCP",
  "key15": "3gAKgr7uiUGZGV84yDN3Z8HAkKzfvBmjGT6pP3HECsmfAG7vPxBFukq4MEiZ3krkiSscQyrSrYrfWajt7WCcBPjU",
  "key16": "63fDeQpEeVEfC5dPEW7NeV3P7cafrkCirtc7DB9T85y4VZWsbsASF4sKB4nZesvgnbeosykSwyJ9NPnSRWUPxoyk",
  "key17": "5aTS1et7R1p261tUEJhgwcFgjuwBhFBZGb2jbF19Vp5Ex6yKRWGpLHx87QKWWCm5XxKUUhJKBuZCFVQ3aEVbDrw8",
  "key18": "3vZGkXhM9o14rzhBbjYKkoD2ah4kbSACM7KWKZVq4XsE2xTzCB8NXgAUxJjmt4NswFjKKkS2sC3dwK9VMSFjRGQ6",
  "key19": "5Q9tCbXiqQSKTdyBVWhYTBwsSAQkPu2Cnij83sDxkq3dbJWGNEEPRQywH89EbQEkETQgyfo8Wgf3hHYE2YcLmNsM",
  "key20": "2pzph9EFWT2fDskHjCMMF5b4zvFM2Pw2CzHYac9YDSmQ2bphGQCNfmDkmqoe9XjY5bYWZzZt45RTipBxkc9LQhen",
  "key21": "3rEHrprWKe3AwtU8X7Py6CZBA1wjD6StR64yaqQka2mJvx6VKiNawYLcfyGXGCBiDT8u4nsFU1J3hLDjDSZABDb2",
  "key22": "2gLedsUeTEmMLpEdp2zp7mxrNTbLnmpMgJy4hmeqVJ73pezPCyWyQJNECrKgXZ7SU9Psr94RRg1osSHf2zi5g61R",
  "key23": "jpzVU6F9iGEersxmy1zY21UovvG8aXbR99zpVh2wXNR7fZWSShiGZ4xpwvpY6RhWfu8J174JgjnJk6tyRSfQrA7",
  "key24": "DiYbMXQpaZKmy6qS5ouBWTt5gTHSXUfwxGPkR9qiLa73HZtpmXb8BdcxHEDiNKKb7rxQcWx8EjMcrBXDv5iiDXZ",
  "key25": "2hcc8o9zPqcg4rgtDc33qDf4onipVs4qj9fM9qRr8RXTHiegSBNpvJo2JFU96iACYsmyzQSByp3KX37eWmw2KvnF",
  "key26": "5EsVfHWNRvdCkrMSLMHphC1FVoGq41dPvsjTWujwhRvjGtiNMtpRwR8VH5ezmkfadTPqGudcrM5Ry7HCAD5TuGZw",
  "key27": "WSpR6PV648qc5GfUKf2i6PSiBfXY1UXsVG1CJjRGnxQGmZKePp8E8mRDRwgF5u9gY6keo7KaXMRibMiGLfmVamD",
  "key28": "iJZ3Ab8tsNwRDvZzY9JzBUkoyn8iU9Ua7cHTKHJGrXg37nT9CFdCp51HsnLvpdhHfVcaeTvCTGvcf5gbjTXi2Fp",
  "key29": "4YnoawExWv4moaJgBVny5E45soUuZ9eckXAXBGrrrgrVDfUNfjscTYFYjynyA6XDLC8GuU6vhhAmMC17UH5MwcPr",
  "key30": "5p9CnwawAt19TY3Mg7tMomir7uV8miS36pjMy8wB3vkQDrMUzHPxpKfpfntxzQdvPEF1gvy1XsWu8TWZUFgBm9pk",
  "key31": "213d278q3QbQbZXwJumEs8jwXassTDVjnZ8HHXpyy5xDbyVT3aW6D2o9TokhofivCSq8RLAqBQ1hmwD1WERrbyH4",
  "key32": "61U94gcYjWeZ3nBy2GNdnvDtWJrYDmEAnLVhDE59Hb7AnLAdbtn51RG959kbgywbtCEh7nWfSCfi5tHS737SEZxs",
  "key33": "33BGd1iCp8XooUGYzs5tU8Bvh1UhxtXrdMAb6agBeeUgivZi8EgZHFXCXL6EUV6BrpJD3EPEgkUwE3r18tiy2fWN",
  "key34": "3P3YEydeuoARVo3nADcmamZrRW7NYwpTE9Kx3vkDLTMGjMvsqduQvC5gqEryBEvsv8FfWfKFqvLXVXsB6TYuVxXB",
  "key35": "4iqcjDPnZ63V7HzTTvEpRwkQHaUJKLBYUcM1ERvpJfcYkP1gQMu5gRhkXjpxSJAEddVah9jhASWwh95tjyeKGaFL",
  "key36": "2FMpUWDVUV9xkfGeFfcvXR5UvWhWCEQMXLckrSgU9uEjMgM1ZCwqehkG8rGtUWgnNgRzugJo5RhyD7iN6io4tBKZ",
  "key37": "j4jesDsmvyyd2UPqj3zNSwFQEmM84n8xAhVW6cw4uQ59vDGNjSynVN1432zvnERzjH4vAmtmgZ5HHeQy3TxDqa4",
  "key38": "NfjjrWf19Gfg4ZLbMjnJdxheyRTY68AhdeiBWFEqD6TToaQmtMtMkr4kkBo8e44cnVtMzeZNc1nFpKhSWFCYMSe",
  "key39": "5vPVs8sonwNesKQf32Md81xSxB2hdsGd5wFLWQUjQAcGncdcN8swAKvEvBJAcXWkvFN5TjYZFEYkvN5HRMgmGrbf",
  "key40": "K6mWg8RRnqnaHguCRYvHdq1zWXkBRSzmpGDZUqzMAWbvCVp5b8bopLP5bPtwqvyPhgijQjPJ4qjWmg3JvDWUGHR",
  "key41": "2kwV2XPrmLRcNGnvK42koVudk5TNYoc6LdpAiKbe4AdVc7emjbDmbVXPWB9RhcHQ9YNBikJ3NfJuzYzyPDRzNFXM",
  "key42": "2Tq9BUqQUMMbgoXAYnz1jtgbuQaHRsTJpNnXju9sQCXvBCiscHi1spksbpUTy5yGetqcDJ3sKNbXW6cAsKXKCMm4",
  "key43": "4Mrftd4Q9r75PNn4DqUrcZkxMQb49Dm3ZnRskCYvdBR9GFzL3UjuuoN7HRK3RghLfkm6pvgLa6GgMYnzCXuAFoFA"
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
