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
    "3Z6SDN4ouCX22Drd46G4kejkQbUbuHa6tTuRnDbFve6mFEb43edG5BEGtrLjdoZLZJNmrLErEqc3KB5xwDsEno2w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ePMMmKrQJQNN38mbJBAvtKvDZUUxtZfpaWG8kxFzhERjcdVWNqR6R2GbKwUoYwV3suW7tDUHap2fNsMZfaVwkv3",
  "key1": "dxEsgGdH53quTF5sNrdXX47vAsu3GPfEsSVFXk95rhezQJ6217J3oxPfQP7wP4BxKjVv33XZrc5tygfN9vD6QFX",
  "key2": "VqDo9eAC4o5fxBJPdBTUzBSNgSNDfwmYvoNdW5fhSERD9a3H2wGqLyULeNQVVM2rWiLivScNoASXennAan72TRf",
  "key3": "3LFwX5czpqC87iQUUCR6ffvXbELVrmyakPLXUUENY99SHXBetNukRd5cXRwYCdVFkoVkJCMHct48CrJ8dopx5en7",
  "key4": "4YiJVgV8AgP3in3zUruK1ELRH44a64g9YyQxkwV8YNPgPpxfnzQ5jxQzhLrv5dfWyVLx2yp3AtsgJGLipmZcXyqe",
  "key5": "4SGU1bu83iW91CVwwC6vbjeou3koMs5d1n64PyxGoqP5Yjr1PE9SQkvC2yWt1rUsVLQLhoHthqqUchogCCcChAcZ",
  "key6": "34UjDR7HqAKERYSDUaWQAP7KDHwc6NQJYR6iActwYxTrP2HeWqiCjNzqcLx4utHuzd6NJGAcMd2xy4foDk68d4BA",
  "key7": "5FvUWvgA2ba1ck5S2MYj4AJyJGXpbTYpZm4JRkzmwNUYmuaNsVtkAz93P2TxXafXrAksGY8tEp8Y5fmvXN6KtqyS",
  "key8": "jmAsbtaUvL5SZBEah2n8Kh5NvEuKK64NekuR2cUp1jjS5DN8gH6b5qMYeMvTLf3aZjifgjSpY8enM6bkiNSH3SU",
  "key9": "ZEbCKvHrMpKgXYDVCfQp4DnvAHPFzJfcRK6hou78iukiJEMQUNnWay5Vc2DibJZ2e5zwRY4G9YtDSL2baYg9tD7",
  "key10": "gd6upqLgZUTmWr6L6Cr1Kzrb4NBevAZ4CPXZEFnjv368dHpbBcobtx47oguAKBomgUcXEoDoaxy61eoBPWswxaH",
  "key11": "24N4MhzU47pxuBNX8epwGXtBcgvoJHYMwev46DnhhiW3Xn5bxtn1p4NHiiHpzMvNQHFG2ogbE2PNeRibEJGiZP6z",
  "key12": "4jrCatuCwoXdCBD9CSTcyTKMW3bPELwrGEGWoDYE9urPx1p2oL4PCbZV4HCGkgoKpvfhfPoFLkR6KHtx5Rvwx8xZ",
  "key13": "4ThMJmrm8niQBMqwNH3Go38CQuvKU13JaCtSNh57Uws9PuWkVcKikCDDW4o2DcwZzgyJfLuzcWrmVwqHpWGXzsPU",
  "key14": "2KHQtTzfJQmEj4yBnUUX4sAjBv5nAdddQ97BD3VLsoPQXkTcBgio3maAY2M8EiWDnar8eMSdobsSD5Mpky1i6zdG",
  "key15": "5GVdd9TupEUZr32r7TvqZrjTHkuwPTpsTJoU9D4kzD2Tsjg8yGWuY2WPEHwKymDHMsnkYSjNY8cdrGo1AJV26ZWN",
  "key16": "2DY8Epb9ykRyV6boKber4RohVmeS55GNyNDvjC6EgNkUy6Zj3fRyDuBB2ogaYHBo3TqARN9Cu7hpCEtERfuuvYVM",
  "key17": "NssyGpPVU4Cs6JigKQmEn2zWUVsMtvvbeDpw3KxWnDxDaXKs8v1jWisy3BwiEsSgZkKM5B6Mi3ZhMRxptgKRL8o",
  "key18": "2b44CNGf49thJLVVVhYHhRzhdYKEqJQx1L5azVXLi6fMGBUZpSSCiKzC8rFxi4VEg3A6FXxoHE5Jucpkp93cppYA",
  "key19": "4wh9i5edPgMyYGTTVjj2Fnsw3yM3UUyX65N8b4iUbokqRrh3fHqcCr1rssGDbRzkedWs7J4VuE9oK3xGGp37FHBk",
  "key20": "4FNaUF9SPWJ5HjJTMUTHsWykm7Pr2bM4o2zDXGqPD8vJPgKRTTQqnjRb7x9EjxHmDy7yMy7BTnhBqdPDC11dCJ1z",
  "key21": "4CqDSpep4eBxFMPvGovjEQwR2nbMxXL1cB5vg3cPw6D9vfRD4dumWtkioEW2W6iyxVpWNChVXT2rrFjtzatcoF9U",
  "key22": "5yTrT5NrKfNoJSgVBdrid562JUrvAeYJzFkbCTwrHtCKWRvqM8keuNnE41Nkva1gXA7Ko9nvipEHyfzmZZtV2Rry",
  "key23": "3tWFLNe7gQZusPC2EJKAgYNbzNJim8dt1P4uEnkkPzK848w5hq4G4yH6eeEFYddqYsPponpSyiN466fVq9kcio5c",
  "key24": "5SNqeTTTjbe5g8m3dUYosDytaoG4xqpoYiTyRUe1iL8zFHq4f6hXtGHWabwhvAt6rsSAMGDBe5KbXv9zMkdVLC84",
  "key25": "6gSJ5rEYopyfJxEMdcWycG799BTSgqgMf86pH4d2DAxmRf2Nn8v8MiDJaGdMQbvijankAdKRKqvJmyYR76rBnkj",
  "key26": "3B5PCuD5C3pzKpMhEqo7DSTCnCiFYmLVfcHZ1aCwNfEcKvbPG8jPvSx7t54wuUTbi7xNYs2m89iYsQDY1dnaSZdM",
  "key27": "2pkyVuhhvcWyU1jZcWX4Qaef3NyRhBxyQ9uk8WjmNtxeEfW8vqTnJpSvTafM93iqxL2yw4gN8FC1uuNGsWGPaSp9",
  "key28": "5r5qGgktRuZHfVVan9yqwPENsng8Po9Aioo92a9pJoU16Jg3fKRvn5jSPt12ABnth7uFxdGKuPTG4ZMULC6NcYfx",
  "key29": "4L5htvRkCZyMEKoYoWcv6SJx9c3nffu9Fy3uvdLTzhGY767LbtHP1j6jCZVzDPQAKNYpUMWX32xu777imBLHGL9p",
  "key30": "5w541FXBEjbLdSJ6v8koAuzGGU2ke6SmyC3dCFJLnPvsUvPLjEXuNBZbNVcp2YVeqmuBP1JfQgPCBZ4PDZqLJdFP",
  "key31": "3bkgG6bj41f11Bq5SKWcoKnrrqhnGJBnq8cZDvsNHa3TEsFiKSswR8N9PoZzQ4s2ox6af5wToip5x6yg7ccoAuGY",
  "key32": "4XjUUYtTLWRoMfp8rZZ7zs8ytf9whNPAt8MNokos1iRbsW5NkJDWewEzEydqMv4s44euqRxw14KRJJhX6JTsNiRg",
  "key33": "5NF2Uu73gLf6azgUc8d5tWFg6uyUG7P8pBEswiqrUJdz7ZsPZstQHxqNbJ2sVpUdngHsmQ6ZDwx3vhVGzdfYuLVa",
  "key34": "5HsCJmBK1aUrYndTSgMoSL3jLbc997QRBTMgqGbgybAAwc95HUYGMCBR2oCUWQy1ecb7GbLF8aJJm9vPKfhvxmAg",
  "key35": "N1Aa1FzSQfgrN1BqaYAD1W4gBBUswzeJmPTEhPdCW2ECDBszUu9HjofT7pw7m6AkJbP4pRuEFRgf8Yi3Rdgx5Y4",
  "key36": "3w469Lty6c4E6WKxDPUQQ92aJq8Qupmcxpd5NSMieq44g5iwLpAhL4TFsH852SvLSDKGfozRop1uAHD8PyYKqNQE"
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
