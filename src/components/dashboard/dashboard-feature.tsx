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
    "4wppZa5LUVoqFZeaa2GjKgH7jbmZXExZqcHSq3MfKp65m2sVBZG72qQrfDX4ojyMuUE3nB5vG6k7t7xehxBn35Rr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "329jxNCYk9EuNpnsccCtNk9paKDQr4cvdCLDVxEfcrC7hm9Ru4gkUqvEUzveyMGKkK1DQxcKtiBnMhSToRAuje4f",
  "key1": "5S1QGTxJNBf9exmVYpuV1XLVxSs54GoxaSoNjZ4MYEuwDV5Z3Ai1FE86xFWC5EimhnMYhtfiSZvjRXx4tfWUJYSu",
  "key2": "3AB5AAnUeJ1vNy5stFRe7dkfbM5NHB6ZYApWnr3fGtxwUjYx5mW55rq1u3UzrZgdULtEX8gXwpxWBrx1B4KdNUKn",
  "key3": "51VHiXDxC229gMxhhrnU2XtE2b3jF2pocLERKLxycz1inijbG1BWhe16ZbRcaWmNsYQ9uFK6uwTqjaxJrvduu3aa",
  "key4": "4UjtHimE4VabUdm1xxHqPUJiVfTEepgkCaU3Hg5qw1c3cq5tmEurdDy3PizGeypGhjFWtyycssikhcmvF1f6jv61",
  "key5": "596ZChMiJUVu1bzTFY8XvzLt8TJQ4zLu45kAhRzCEDtF47nt3HtixJZL4D3NGzpGNrQ2QwNp7CFKp64zo7hMGaxE",
  "key6": "5qrHqkV73RZfaLVD6KPmYdyabbtyzw1W6YMTMo14d9d8c8StcL6ud8ohDz5cxHsLmCskNPU4qRh8j8BjYXG5aAyS",
  "key7": "283JmjhQZGKEvSwcGWQwq8Wp2rfzZ8eUh39EdUPdw5CLu5zTEVPR6Fz5qvCmoDd8YKqSuqFe5mxoga347qkgL8kL",
  "key8": "7gyTb45AcfoAFaP4ZthYHMtLZHzABxSozkiCkpV7SjDZdcHTM7ouUgWE4AyyGDWrDSrvwi2eqt3NCUkWjAt99i7",
  "key9": "3JuFuAzMjdqD4Fa7PPfnKS2RH6C8dGvuTwQgoL5GoxsU4EDTDgq3MfebJjfiN9QGSipJqzGCTLExQgs1X44QsQ2F",
  "key10": "4Lhr7QTHVaVVQ669R982wppvd7L7Hjk8qCRnjcjCBdmTaEaabL1UDnjD7cLnGtDzD67phfSPAdLpLpnLdfUqBKe8",
  "key11": "5m5ATEMu9pSELbsvsp9FE4b1uFZbs5SmrtKZyx6DMmgKCy2HynUYkXPa8rfV1Dox87gWEiFrq8heX3ZAUWcx7Vks",
  "key12": "4868BFNr4oNGs5a998zVGniwAwLJCqVxLjPp5zDNvpPSSqyMMMMNx2ezUHxDEbNpBw8hczpcJujJPtAwE8SSPuaQ",
  "key13": "N68J8gNbgbnKEXB7uiAgvcZcoX77z7mMJgXUsKyiMKBfqCf48PQdRsaLBRP5iNVWZAg9PZzSGjMtoXeKmKLPD4G",
  "key14": "3SEUwELhqHtPhBwjRx1pUeQyHSyHY7B6sPzL7VkZwkbSHqKQahn2vjJ1BoUccN8h1B58rpwvdZ8szvVLxnqT4ykK",
  "key15": "5tQQCoFo3TvA17fKrknc5cJwmCbYQUdFzdAi2KtGbaTJVS36jbRXoGph55wpoXvCGCwPE98oNnz6Mm7s41TgjMu3",
  "key16": "4i5SWutT79fTaqGY1QKfTtJAeUHj7zeiVFsAGJAmDMoQsFmDn8wrJgpKwueJEM59qZD1Bc52KEKu9Nj7KXRBVteE",
  "key17": "2HRh89KGognTitjygFphiXAJu8fUF9jR48GMiSozjdEyrgcpp7L5CGq6a9gQi4B7uGWt3di5FHFKzZ6PyGMVCZKK",
  "key18": "6Y826PKwt6hWzGgjtbdiMUjjgcHwnurjt2yRNcQxFPXSUxkj5F8xRjXNjBhCnJnUbxEBVXe6hpZgZipTCoty8Xj",
  "key19": "2x33F6x9eKRfUjWAxwQf5xCYboG87bVMXVQLkofDuAr3kBqqo3t77TXMw6dbYQK1ZGrxTMaWHQNGyUGKkbpv5P3S",
  "key20": "466DTBELDp1GygeZwZ4DudcbFsYTq6DP53mPnrQHUxpa57PaK4GA4BKE3QSPHK1pbDKf1j89d3SedNaaJEQdcbcc",
  "key21": "4cFsLLxzG34czu7eM1rofZK8BJBJWDxMqVtPqhE32PrwMJaYSzogRz6zU2KKz38sJcnqwWgbE6cSkv3d6cbNEUHC",
  "key22": "D14daLMtTq1pxh3Sp83qPwcCcFooLKPG6NxqZsrwTKCFU8TfGDmS2wnnQXvNtqmnY3eeRqr74fk59uPEznV1KnY",
  "key23": "5rZj8ULh5un6PsXYuLnACsdmHVnNHte54esTmTXSW3vBgzi2rzYihnNjtDJJRSV1Jh4tDHvnSgSG2CQV72Ueezri",
  "key24": "5BUPmBDK5pTz2FVVtwf8qnDGpCMEF36TNp2tBNM1VaaQJTVG43bxsfovvvaRxYHsigHKijrCKDU4y6sitcbYMMaZ",
  "key25": "4bwHT6wW8a4SQ3XJPny6GDZ3cVhdBUnW3mYwEfAFC9FZvkvYN9JuDWcXjeep2kbAbKm9K7rDK1etwWGtefWYXbef",
  "key26": "2UauEtjJjyLN2tB7p8pnd3S81tWNXkapM39FCqBMdhwLANqQ1JCFNdkoUxdW7icL4U923MKtJwxEqbYoHxWHGpuj",
  "key27": "2QHZi91fn6Zh3r7v9rCXWyasfTe4RjdocbZZZqfB6FC4UBW5LFFCw13LT5cGByDaqvSVzUSkJVaEWNneFLXG4uRZ",
  "key28": "4ZGV91ewKc4KBdu99zAHoMwCEZQJQJcoY7rT8rdbbTsdabMm4CnpH2moJJGVCeRbGKtXSUJgoUXM8g9AVxMmRjd7",
  "key29": "i7ES9gJjTiExAjUFs3WaQtXeusZkV1yaA8AVqkoxKezM24akKWNUsBs8VqfojwRjP3cVG9BoLUArJ5HuyE1FzvM",
  "key30": "RwjB6pctB6JGTNLAk6LTau8xPCLs3KdXYk2acmZ64UboN2VhJvMWP4GpK7D2iHk2geXFZCksSFEkKtUbawSwBYe",
  "key31": "TYx4imGQLdM9Y5thSY3PWzyZBgXPmbjUSTrs3r93FL1UfaDRR4495PkHZJyt9wC3kqaXpiwYWq5tuuCJZWF9uX2",
  "key32": "4RvME3LwHJAqs4fgixUa1EwQwt2YxbUnYQfPhSD1VyLksD5UvHLuDhHRYyTcaXcZjboq4Zzm34YUDb1aete79jUA",
  "key33": "3ZYc3rV3H6ow5tL1Umf6BknJfk8DDcQDZbUZyvni5ALkozU7epMuM39q5Gb3xsgZhvdJ7tsEkTz4wuG1muiiFu8A",
  "key34": "5U4P4dwG2mFPbbyY7fwC6XVwkZBGBnYyJwwrQ5dzoThu9cby3kZvd68t4j64RK5Wd8GFszJYUr1iWKbHjhmM6D16",
  "key35": "3YomLaAwSu9TLEmcah3CPQN2ymrVstA9dVG1ML9Av9cnw1mxgYJeD2WrrA9QXxaRQMi6bCP7AyL3is2DVdnxHF4U",
  "key36": "3Byf8BLGZZNejzXaaRVVgb9mWBEZo5XfwUiRVFsPPpSjqUsXCyjjZe6tbNJYvAPom3U7ZZoCsZb5nWZtsJDDKSWA",
  "key37": "2KhSuYZtkfjNU2dPp9Py33ikQaixW1PNoBxXKE2DzWGt5SRvok5Yhy5NxuLE5yQqYRy3xVdFUZUF4iDyUzrvsUMd",
  "key38": "LwdyBhFZaSVZdECh3cEEgH3wdfuMR4vTzy9oRBqL57hfRSbz6DKvTYDH2jWstGkDNyXwmUrMNncGsxxXgFV9Ai5",
  "key39": "yuxLtMznZUEjhm9PHZMSemy9Jdw8JeRc88wDM9urtkjJqZbCZwskiJqpp98BrqUNh9UUM6LzTnihUbi8Mh262cV",
  "key40": "2jocWRE5Qrz8FC1ZPpyfBETSHgwdKnmpn4EttUft75TFGHCVrq4D9RYPPEWr5Q9oRwUhjwiSUonoacxE3vm1q9BW",
  "key41": "2mtLa59b8KgSr6H2cihwbTtSpQXKAmuPhPkxahXeYCkUxk6fKeuoEro5op4kDUsvrx5JaBqmBnfnN4QxBtA8QxMw",
  "key42": "47NFagmsVRNuZSNwPjaK5xx4TngaNbBzsgMhGWfCaZkEgpD8esWTwspWhyqvQzY99DCXLqeFN43j8v42MMHjNbhv",
  "key43": "5ktNEiBD3ERGC1hrjZX7vq6PP9xPNreGs94cdiqFaPC9SgkiqvEHSrDbzYSo1DcTYeV8KfGVv13Pw7EyV9Kztq3x",
  "key44": "5XhwABfCb8UhsNwYhgK9XC6WD7MAFJnbFJomCctSADW7xg59ZqKSnhpeW5euEG6CSn8rY9LpKZ2TX8JeCZJnHmiE"
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
