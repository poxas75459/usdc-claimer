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
    "42c8K8a6v93EuUNiJ1Z1VEGzqU5E5Gnyy4YrxsTakt7fSzABAo3CZ2JLwG6uJnDYfLWZ51STbeTBWPkWRCzn1pp4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9TZgzu2UchNihsJPFLEbRXPuSizwnmye8Y5cfJp9SAiHe4QUAm3jZRP9QWQCavty548FQuzYybfZhEU9neWpdv1",
  "key1": "5NxWP4L8NWKDaak2yCqzjqmZqCGp6VaK45LWfH9DpiEpxnsJkY8LBN9u5TzXXgsNH4d4duwE4GvhdWHzjdqTwgGf",
  "key2": "28Pcg1PCgviisTMLsXvKJQPi9ZN5oQkcwi9pQDto2wBA2s9MZXaqiNe8D3EdJkQG7vsj58Z9rQnp1AFwevqezkDK",
  "key3": "22D42KWLaMb8zvLQKLMSLoHXX5ZkB724L2hYCMXsXkU4YmsZARmJKw2neUUne4hHS9qo2DbfKaHbzcH2KBawwuit",
  "key4": "2zHatmbA6JZU6NcMmAbnfZKSpSyUxjG1Z7LZPD5s98EHhGSfW8yfigm8esbtYHgfkze1EZXGu4Z3WxMyvxLCfAmn",
  "key5": "2NTaMz2FEWmxTqnon6qyqsWw5BrTtCUDpmP9KhLrtaa2kerpJzjx8YT2N6sfMKqfRYPbjKvQ2XcHzcLSdPpQDdPk",
  "key6": "2EiJCmQhgbP4u5v1hG7DgFpCKxxDW6F1gmWxUnhC4qfRtKsQL5UmkBaoZQcDK9XuVPQvzAegoLg25rU1oToV6Qwn",
  "key7": "4rBeTHnEVgpAPM9KxWcY4VTApm8T2PwXLH9RZxrnPWmrvg1xfnbdda3119hGYgHowYESDpPWKpVQTRH4SENqvpVa",
  "key8": "36uGfeUv4BksTjJAqD5dL79Ejt1on4FfCyadQecPay1E87FSiYBmA26u8ioLnQFjsTyfbZr67RuD23RjijyFLVyh",
  "key9": "3w8XYmNKYYwccFnPahFQq1gWHz3WnzvrSq2scyHH9aLhEDEvf4ciUrKrouPjRmiw196eUD6rxce6nMjgtwxvPAjf",
  "key10": "PtEFowNw92Y2XSVKvhNyMAsfXT9nR32ZQ7JS4UE1waRJ8iqmKjgMA1evjKJsSj6aQVgY8jsqCHBBYX7yqzdR7u4",
  "key11": "hTCDtEBoSbjEf7MzWRHG9bmiDTrgCL8nniZ1gyBkRCcYc7mMKT8YWUPtjzZQB16cTz1CdG2ifn8ZyXmbGL69jZS",
  "key12": "2wWCow9UHXkqvLkwDe4zTCTtpPNm8vkpyFkQrkWm4H5V3t9s1HmCCxk7VSBDwU2WTxs3DQ4etLZXNfRYrkkcjphc",
  "key13": "5tFinpCJd4utj9yRu5PS7mCLuUPwFe7oFVVS8oTGpTCZetSdwmxdch5G9AWd2rdPXDm92z2cZjd39ubsr4NztAN7",
  "key14": "hc7ZQQFT5tgNm6RmK6QvvL6npQHXZy5DB6x4LxjSTUvLHD93GsqSwucackVvtEpKN1JEkn4KAhQ96BnjFBSfkou",
  "key15": "21CQaQ4KcB457AmhYb36Y8sYsFc4LLxQpskVdzWhAjNCzUyipkHsXA6sXEeGAdETomrkfuZtTc1E7aviMt5kKW9R",
  "key16": "YWT85NQUZohR7rHhwUbSycZhiA4kqrLi377DKrJPUHm21orbvZyJi9NeRjS4XRDuv7piDCLGsnz4KHjuLVpYuSF",
  "key17": "WBUErNiLEtdvnMs1Yp7mC8frX3JdJ3xPP1e5NB8rsNFSJh4akb7za1LMGVJV7BVsfQu8tyEB5a5vULc3RnTyQXC",
  "key18": "3ktUZDTw4jyC9TvrMnjyc11a3ceuuy5jaz7cJJkpsDBEbdL1Ciy6ZauUWpYsHDfjhjh2qu8ezgahwrcFUFGnTzGh",
  "key19": "w7LkSH7DeFuyviyeDXS3pPafHzadkMPoDYADcdEht5QU1VCo6fGkK4UMbvQE7g3KEMTxn2zPPVDBNK58wsDrTkQ",
  "key20": "4oZoAEtPz5TksDPS6QjKAqgSxXfrGY4AhPr6XVziaX13wxJANHxPRTMSkDaLNeXBs2SnF3ayQZkcwAm5k2bUkEgj",
  "key21": "5WFL8uM45KR6iByzp2t4MSZpakfY5Pb8zMzZn2YUoL4Y9vygeeiMwLbW98W1PdfypxRTBwk9MucpPAmqc5toAaPj",
  "key22": "4fQCoe8iXXjox3X5WhT6K752pJC9sMpymnyoJQYokgZnDVbh9zPvs2eRVYoYsGrDTRR7LLvMMDB31QEEgZUcicy8",
  "key23": "3uszstmgvXfTr8VX9fabQ2WSYW88XkkNzuu1fKhzHoiD3yuATpJi6VvLtnTK3XJaYNnXuRMoo8DBNbEJzRbW2EQs",
  "key24": "MGCabtgTdefczHK6nX38H6P7Cbjbj7gsWgYLvdJSRiTmkZSpeqELx9c96x1EMG4J4PQke8zger5CJnnWngPBuMx",
  "key25": "5xdNw2PPytXYhh5S5FGvsVKaTCMyabJ3HNSGuhW4Cq4mT7p9Kn93NKz98H4QfUKUw5eTr1Ucd1NxCxYxSTG3jbaz",
  "key26": "3WwBdK1FDM3FrrAaE8HMQA4uSjd6xBaB9HxyrPWEwCSmF3qCiKRoKqw9LhjnkJJEDR5F7wguTHQz6XmhExvHUWo4",
  "key27": "2sxGP6SFHRe5DygMrue8bAvMYLcnLRrEUDWw7knnZhsu3veJcVFMoz4zXUuEC5GSFAAXoejK7FVvCrFQ9ZSCNBWY",
  "key28": "1Y7FMo6q8GBPxp3DqNJWaHLPY3jeVKTydthKr4Pjja5E2bR36hhQJapNRz63fnahKqAPtz6YzshCZDrCjKTUY6",
  "key29": "3LFV9cMLAEqvNY1P2hdqrpnxrKpNj5efTnHGEeAYef1QKw1aCAJQqxoovnzN4eDYutix3PLYcURsSQC2JZ48pAhT",
  "key30": "4wiPx7bkYZMBdamD5oHCscpxkw6Co2rEdpZdoXWi2tWxwo7goLCe2ht3acgcbGbpLLhfjt3Na6Nra4d3AA1sVfXM",
  "key31": "2Vja254MvimnaA1RdPsxMS3b764yZNehPKJbVfsYUusmUZVTSK6QmZr4KTRT8qeP4brQMv36J3oSQDmvigzhA1YL",
  "key32": "63bGFoFXjk19KfqwpsoTmRGbJyGVXbR8ZHUx2PbPghjMGMreD36aYiTnka8bPpMz4t8BFipdMB5gkiNXdkAE4RAD",
  "key33": "59MzAXDnkCk9BqUgqjP89Cj3iaMMsq32mQQRAYd37tAdBcE4XaZWTFaWVaadKFNxye4BdiFvwokoheoSmgPD7EUR",
  "key34": "5PH1fXjo3HRkFSpnymexgHyXWxr6Tz7HTQWY1aTA5VrYZroZMUTQLxybNHMXBFowh2LkESLWXQpQZE9vwhcgGhf8",
  "key35": "xhRpJvLoYthMqw4pTt2aoGyVTVu5AyG298ryP6C29uZftqSMiEmW7xKF1GpSXPxQ3wid7RY6XwxJqo4ZGCTtr77",
  "key36": "4i2omeUTddN2X1k7rLJgh3CrbeHMFsgX7ZeJXgFHbaJhU7JGsR29NEktB7HyiCN1QoEpYEiXpMM7mZS2uxgYDi7j",
  "key37": "JUQPGhWNRZ4AZ97FLBKQYQnuZZJTXqsw5KUDpotyUgjY6G3H14x7CQ4FeeRH4gFFM2ckBkN98m6HWvhMLSMP3gU",
  "key38": "27y4tKV3xZauJqz1uPZsdxkUNGHuKzrggrPZQdEByiQhHSfsqo7RyGJ2rLqRM79eEdpgFS2eaPuGN793UZCkfLHG",
  "key39": "3PrtiCjwqiWTr1gAUzAnzasVaG54uiPGQpAAQDDQ5LBiQfdHr9PkjxSgFReWU8p38SxHmPWy7juqdw6qs7er39KG",
  "key40": "2KqMqZ4gToTff3Zsx8uVzUNVBQDLSKiq4cRN9hK5pwLhVNaLksuLqjpE2nzrLh1tsBMym1QvoDonrUdJXPENWV8s",
  "key41": "3nb85v8xepCQRgpuefGsDckPZjKA8pV5afeq5jyr5GuyGXoF4fSf9pQazqL4cE7XuML7dWhqjmiAYZomSd1PUGWE"
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
