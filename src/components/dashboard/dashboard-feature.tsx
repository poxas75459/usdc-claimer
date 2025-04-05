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
    "4HhxiNwaSPgTMw7J7YXrXCmMec6qAamq6DPJMr1E6wMnXvBoBdnbQJBinU9EzTmDR74CYptEm2XR3SBUTAfHpV2N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4riG35SZxrBgpFRCn49ydYYuQZPTYYtGxyivPbn2WKkDVQvUfnEekXD2pjU4DUQLhcBNTqJs9sauV37BbFMEG7VZ",
  "key1": "3BLks7DqFmizfgKsLt6Qp1zBy8qtuWFeY3Q76CRGnLFVxTJWEUN7QqxjfLrWKCwEgMyo2Nh23PzdEKrGzc6TiL5C",
  "key2": "333seJGEAobeQGkA6Q5kv1RCnjMD2M31mgJNCFu1uuMcgz442gxLPjanquEDNMWyna3eCeUfdgpxK1KUX7YPzcBc",
  "key3": "2Db3WdrFjwYszBXw8CgJ8dUcMUo98c6KWJVj91vyDTDxhWJ9xcPYsx5N4RfTam8AFaSMYfPwHTzZmyJyuzKoWVY7",
  "key4": "2cgqAUQHbEt2cY8rAJAcXSG2so55bCjhTSEiEDE8V2UZSHxJUvydKqaSaXPuv6EU1wgFen31qi2X6eMJiJeziogV",
  "key5": "2qSEMHd4W4pyzR2okndzkKZs2LFKNF4YegAuXvaLfi2We4es7qMbuoDwSRHovV1kfNwY7T4JFrZAfqUuoYbEMjFp",
  "key6": "2iwJubhccEBXxLQZtdeXMYzU2kphyqcAjzBmrPfNQvjyNuCsZFsEeGJyvtQmChZMycQFmkRUZAcYporXCxpgePET",
  "key7": "oXGQL2jtRdUviRsu3dTWae2mkduwUWz5jPBwieV8dCF4bxoqGnnDiVP1G243QUgS3wopmeTQeXco2UYGjJY3WUQ",
  "key8": "2uMt9XpkTBs25PWVhpNWsFcRd4WKvFg3UuEjCZpVCe4WdURp1tZwMB4XTB5rTwB7GvSLCspFhhs97ZSCyYiDKNGf",
  "key9": "2xW9PFmxkmtLaQDwNmG4LgEDmvos8ZFmVKKkqZSaQGGhXvaJS9CmNPheYCotY4svNihSFuFkBhebDJMgi7QF8Dhe",
  "key10": "3HhRL44hJhFLXT6CSqHprEyYa24BZH7PrPuvFjQcG3uEoUok8akzgxCvyem69rCUvekYkiW6KYjvkjHjS5qkDmvH",
  "key11": "3qYr21bmis9UL3y6sbNNha1wCPtVDEhnDibPBx69wK4WaWWruy7D5rFUzzY3VueNUBcvzvsdRAMMuJViBex2T2E9",
  "key12": "4vvWRuRgrv5zre7LbPje7mqUguq4X6HSdqJ7HkWxmuQsCyLeTM4o4cfA5Bw3ayJ7zwwrQUCVv2rCVsCJve3LUDmC",
  "key13": "5u7YFwCWL28PgsQDsQaYiqMo3EYaMYHAh7mLzdqbVGcVdyC5ehe61Hcd9XY5E9p8G7LQF4c2QjxP3ZhauSUVcr1z",
  "key14": "61TAGCunHoycDSHhRQfJsee6L6rVeH8WkgHbpApYxsPCjudmqb5jT3jWiPWEG1Fi6LY4kdfwDfBMNwo6EjvqwY6H",
  "key15": "2KKY9owupPnEC5QYgZQAhLXxRGfj2u8GkzFfSg75weTF6489qLcZSh8KVe3fyvDTTnq39y3JSbNa54x2XVS3hCDo",
  "key16": "3W7ftqgBucWshJ971ThTps7NDVo7CLT88y8tZTcjKz5ynacqcfQowPB3Ke8xHiqAcvZuyNG9AZSBQMGokjHFG7tA",
  "key17": "3dogskhDH2xZB3cA9dkfmb5f1b1Bjbg9NtZSjgTxEpEqdrRAu4yKATPTgPXuV9fmP5nWhkcswNWQw63Q1UAuWhhr",
  "key18": "5Zm98hQ7KkySyfHiozuLuE6YEo8Kuftc8xv2HCvwVHV9XFSWoSa3crnzMgZAqt8KNHd753KPwP35m3Ytv5TP3op2",
  "key19": "2TfG2MaPUJCuqsFiM4YeeWDW8KRsHrc24q8j9QB4dat5rHyA4maZW1FepdsPwvsfc4AjFzvDnRxR3ATUrULoZggg",
  "key20": "NuDd9pz8ijfUYksKmEhXss45iGwTc3oJvpDy97by65R2SKEjnxuDw6QoXcZuwiEdVd1RJBYvpomYVVokWuX6nPm",
  "key21": "e9JwigHEDs3Retgwgij5NrsQVs929LfK9AXFqmtCAfwDC97L3MCwseo4ak79We48eoDDmXkypFTt6bw6mAuRXRV",
  "key22": "2yDTD9m9PurGMGqyEBfcqix5hchY7N6Tbm2Vebo1Gr1vNEQeXyx2NL88sX3crpizXArepoU3J9u93NokgGmEyEeK",
  "key23": "5EG8HtSDdmP27UBBUD9Vu1eLuPSVbk7krSbA9ZtQBpdSzHe73viSWdczAQPQqvs6vWqEr5xEawZwxhCZKbMngWXE",
  "key24": "4WYLLg3CLTUUg7YQYe4Qa7dBtZZiWqCwoaAZF78QYCD7dBHDavi3bjQ1iY5qHq4SatbDeqMpsHWYFid1VpPH8c8V",
  "key25": "UYkeYhkehSgSJAEtgSmZjJghYgUKeEmf4CyfVVCTRYLPnmomuQ5CWYiGFefs4eAVfm7qNASy21cSZ1tqhqyy4rR",
  "key26": "sFnYHAbeiQ5eJpFXAVuiVEPYX6coRysW4V8vX5gqkuUMbHLj26Gq5WwBuM4FAYC8usVCpr1UWZUdzheR31wMJSy",
  "key27": "46A5oyXJNNqafDU7FHxP66AkfehXmyWgLW8YNQYUH5GaffgjbZs2oVx2QX2NT9U4jwzr6yjfofmWQZPZte4e4WYa",
  "key28": "31K5nCT3UxkzakWbe6pe12jWWFLgnE77cS5ckJJd4Utoayt7JtkZuTF51RGqLb7J2ZA1Wf4Fc5YYkubMoc3Eydxq",
  "key29": "5rxHWQ3qavzajb6dDRpLbsf4hAKBXjDbEDt37vmWdqHFSt2tLGExhAV4oPExSPxTtMhhRuv6YUiuynNqjGWBBK9z",
  "key30": "4Vk3DmHrBu7CcKPa3U4AmaJiLbDzZ227F5sd8vj1cTL4E42BMxJ1dQnYd41NXX6xgDZJx2tzhF1beLJuXy22Xj35",
  "key31": "3jFySXCstc7W7tHLofFpSKdvaGoZEFTiSE4KXXMqoeHRNabMA8eywKTBoZ5E3e83ghYZKE4gDdZmSbTScgxoHk9z",
  "key32": "3h8AgXLfBWSxVfWQ7wAUjm5c7M2rpJrHMD7fsMbZFDur1QGBkNojXs4AhWDU3cf6tVyFxMgNAHjPYF4NoAULt283",
  "key33": "3oSa3QPJbzJRo5GQLeKocVJpsGoSjdh7sHM6dvHtsx5USXEhu9eGEtWWHdD7rPWJ7Za34rQzymWiZT7TN8jr2fBW",
  "key34": "3TvqfGSaUoLkWttANX6suJPeFKvwgz7dj1xTC6jvRwDpD7KuLqxNzB8QcbQaVwt6mCe11wDGTv5J4LogdSucmuk",
  "key35": "4RJ1poB2DadNjVtCZjKm6KtEZF6ptKtLhAqJ5c95NutWJDaP11C5y5srh91WPK9x8EAwRo9QLg47MT5LGapG2YYU",
  "key36": "5vcPQURstcQGaSxuNumCQBjrK5kiMLNDNUpPvcdT6FNGkcRGNn4N5nrFnrvXWJ21MWCaYbBQ5netFJsWb72rzCiP",
  "key37": "5QdYRasAKYTZBURiBWUpRd1xvQMnBKCqy9drw6JR6XdcgVrpXvhAXZr7GakiTGuAF9SSp2F8Nbacmc2HUPLThiZE",
  "key38": "4kqHsW7k8GfQWjnp4tx6PHyme4gRSF97Yooa5wVaY6AAnh9x5UbZrmbcRAkKBni4WVeJ8qR1TUQ7vzSnpvp2jVvo",
  "key39": "2EbDw9k1zkRELkoTfz53pasNS2hzcmGFCLYTSbUDojgDp9cJ6Sz6WCa4NYL4qBxJYd6hs7JNg95cSk2DyXkV1kPk",
  "key40": "4wFPzxS8v9jnaJSqAaKm2pnYzKZFQucFiEd4LY2FBPSArKAVnZyzW6gBRoSg8u58ZorzYYzrj7mBtha7dqHSewBz",
  "key41": "5rAmHsS3HSU6arcBrF3MKY7UaVf1dpbtPwoSTGYhqD4qmr9wxp9dxxckReKjfyU5ubEy6Hs4ztBejnuU8o96fsQ9",
  "key42": "4FjsJfzEWQGbq9FxduCgSZy5dYsvKn8tSWax96KVXUs5DmB4uVt7TDqjcfKwZ3ZCQDsWForxx2XLUne8MdJJvA7w",
  "key43": "3RJAiVEff2to6kgxp54xeS5cLzT176efvHof8CA21BqqbMZCypgRSwJpuYGJPJ8Hjpd9eoreyVmeaRWEWDmjbRYk",
  "key44": "DhKjC2je9aZdhfjnfPSM92qdvQ9GnT4cnSGVteCRj5FYrRkTZAKtUjw4Q35ZUG5ySPGtSdstjehzKArU22ad1NL",
  "key45": "5Scvb8xNxXoXNSb8uCnU6uoCZZTARdskx1iPCvqLDZuK82yXHYPCeXuJmA5tYMo37EVP2unVTVHxzpBjUrdryutL"
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
