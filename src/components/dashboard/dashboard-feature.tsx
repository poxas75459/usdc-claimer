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
    "5VF7bMKyaYdTN2t7bRZ5iKEokJ2SM8GNeho3wubCga6ZhSE2z6vBj8UGaCnfC6EhHbgkLPYoe5QkBMtS7DRZC98L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xHNoF4ERwrZjH8LpootLuUHf6oDYvpML7UFU2q4mk7MJevuKR25TXg32nDxZuyioy4Nsc8qTQwb2iU8BzoBmyUk",
  "key1": "2WYsTe7YEuwnsVxnBXwvy24D2wspdunfoZZfHS6QeT6UFpJCfcJivxZipTtRvKrBgK1YLfKc7Dy5WkQbdUzr9fBn",
  "key2": "3nDQXULffJVDBTix9ew7DxM4iQPFRf9kUtQKnEPm5X9ZqaY8c1iPDqnJEH5L9n38TixV9ZCwL5iPW7zH8QW6swqv",
  "key3": "3agCRoDo1cyZitHj5FWQjk38Uwo4HcfEBg8cKX8EJxHgZLdZuP2pbpTA74Ww966daky9SfcDLqsDikg4uPBkB1XS",
  "key4": "3brWgiEoobkAo4km32Nuam7CUNKCGwTrAfAS9BuzTfEDHsg8kwiN9LAmnVPvDdhcjmTBnQTe861vqfc3mF41NAbE",
  "key5": "3dCFqh5Y87vcuunZwSiQrC1t66KDhuPLZCHmhRCYyN5G4DjUUJD67qk4DVzsEmY6hXZHAxcMBP1LaWRRxMwe5wFD",
  "key6": "35JwDLSxCsTtjLh6TDbzLB3VgSFHDnJ8iV8fZhKkTeyUknJACyr78PHFNgsbFsT9TsPJBY221rUZVQfXxL76Xhk6",
  "key7": "2qn7c1f4Nwwqh12we2oWPFfgqQue2BN4qbV2kzs62VuJMG2juJyDnQ9kJgup7wMeGDSrP5EQcwtcHdtd3ichRx1u",
  "key8": "61zyCpBKLSFZEwcLT3poL3vTWS7NiUq8KqLHFV5GUjHB5zq3dfYVBDfVMVeU7PgDi3kNiMf6rdVzVAooYefw9WWn",
  "key9": "524pQSToAhZRQYQsboiWuXuKGDVyuysjDa9BE5tG6mxBF8RwqxD3jiJqmZ9BxvNrz5LFpJVjgMfLYiusR9g12CkV",
  "key10": "3CXiaVWHP9RcNVSXzshLexGKJRGEjH3RY5CvXg8QeuZTx938vNEA3e3FWJSRDQZmyDNefkASr7EzHwKqaucfG1ut",
  "key11": "3JafB4CMu6xp8bmnHDLrkv5i8i8fG8ajxkXKGrjieM7EfpB6z643yrK3uxssx76Fk5WZBVJoYyJWFrqAs8gAkwjJ",
  "key12": "5VfuZVPhx56E8bGo15seYdnCsK7sGLMi4QUFA84uptqHiBmS2CoNUCCitTRK4uPjBchwqeGYJVzV88es8cUL5uXz",
  "key13": "Ygw55dzAdstJyPHc2hTSPVMT1U4jRz2HW1mhbodGWHNagHVk69KU24CB5thNRznmwfGrDFXWHN3onXJBzr6fdwa",
  "key14": "3RB7aoi6wYsiPWJuTGjAixUfdykoLR47Hw26g8cJ3zf6wzrcmjwfvX8Y526gmiCHh1NKqGV5KN1o588ny65V2hJD",
  "key15": "3eVEun4sLFtzrxiKr8P1GywkByiiXYNJfsQ4bTkbPQv3hRdkFUs9gfbwFimJtTdNxd3skY5dp8nsHK7oLV8WiVuB",
  "key16": "3C3q6yjU2yjEQQzJ4zzat62YJndm51UhmZip1CtpzaLga6A8pZ59o4o8r7v26vNRSWFiYgrzgnn34FSSxnnFgrXb",
  "key17": "3oB4fbf8tbK61E1L2xRuwtnWWiT4kcHLskQ7WHQQno2NDzT4Vj6pfbVpwvYYnFeop5TSWkdPachdxYKHHZRNTtia",
  "key18": "5Cn3EZJCdCC78eGHfnZyk7mm9BcfqbqUg4vaCYAkn17MExYu1SLCBPoHYDHGRwo1qgX3SzhsJtxx8Cm8i6XeUtCN",
  "key19": "2SoktDzvr8Y2yfryN8bUY6RfocTiQo8L2x7uLT82EBv9gkJQTDxDf1ho6Y91sgKDjsudfv9edyvqD2C2dci6eCNC",
  "key20": "3LXPDctUHUKXJ3ZwqgqmcrL8v76i9nZMN76JqKhWgV9ET7fc5QpYuyXw45YeeyyT73GrYP7EBHsp5LDJY3G5d1QF",
  "key21": "5qo6RBz421TBpdrkUiykSgpqPkgNZ6BZ1F1bPqJkuEPQDm4eLQqh8KZpQbJJwHvWHAFAraVp7ZMT2awofuiHfKaE",
  "key22": "QcRyVvfw3eo6W6mdyMGaqYStb5hqTZnGN7HT6AAt8ZV8mcNUeVDqNvRXHR6q34AcsD8VxX3ymKcBG5CVhw3yy9D",
  "key23": "3TihU2j3uQiGZPq4kB2q2os18d5aHhFuSWXsbi7Le88vVL3WXKpupU6ZUffSmxKAVN4jAfjFKmUVP1kqrh2ULP2X",
  "key24": "31U8Ud2nbBPP8tBWcbkNKFPrKdqRACe9W5eKFZDj35sqrj72qLoU5XXktCpcMZgDm9cT1GLE1gDzkdEJQ54QxN2B",
  "key25": "3q7JBe3gwsctUCadokpzkRjdTsY82iva87Aai1inx3DdrRddqU7HV8AKsYfQwGgVRH1ek61P6oWnNvcn9Si8PG9x",
  "key26": "2M9EuAEP69B7RU7DbPVPXD1XFq7M2B8s8RP6Gvd4vVU9edsneMHX7cvsQikVJKF9J9KNHh4ooMc8pYFmshgD5H5d",
  "key27": "3vwf3LxvQnrKxBogZRPqckC8RyFPGSX3JEv58yef47AeLcuavbP5seXkp8QX5ecyJ9CJ4F17M9oSkzh1BnxZ9Bkm",
  "key28": "5STVvT917kXXLJgqpiRDUvFKKRN2UFQvtwcksYMarv5HJH3ezhpiemn7BxqctooxEPnjVWoGuMiicwpZsv2t5Qds",
  "key29": "z3y5aUnGCPfZzkibb2cDLn5NBptsz8uM4RLPizmEX2N3e6Y4HXPZmSM7fKuhyFsU14uQUijZ4Vud6xBTcVijLUi",
  "key30": "2CVgZJYtpMrGbEiuLKqWiXJVb2WDWzcqF3jkqeGkQqr4PD46S6c1m4aRDbf5qAdevogLHHmnpUs987EexBceWgFT",
  "key31": "JiS4qqroiabijixEogEfaxcN2qE1PoBhKA8Lj2vEn7XSQba83aYp7rGRUNH2BJaHFVd9gEdpo8Fs4ztHtGeQAcX",
  "key32": "28Q3qVDnh6vPWD9mLNZSjs9m6UCkMBL23HmTMD2sTndWmdMn3iUF4Bpw6tiijxYFSnrKJzJ33tX8XbjLdwGM5KvP",
  "key33": "4iHd8rxboMLuFx8E3PzM8UppJ5uaXbpUTk7ozieMiFkDupZZRQ7Yk8jfhnap6t4ZA23PtoTWY6TZErRWsfEM6Ndt",
  "key34": "2fUvdmwZdn7w1vM98JYxfZawVE88qffqN2dRUFayBwmuHhR5bd619XDCbKT8rvznBUrorh84nuRSBvpVDShADaP8",
  "key35": "46oCTRowVtagBbt5A5hdDxB52SDWqLCGJv2CgNiiUdLXSniSyQMGpx1r5tVDDGEjHHjW7A2G8dFt5eHVMwdJsqud",
  "key36": "24Rcuy9udbYhFe5k5gZU46s2wo58cuTFh256LDmHebHeWz9ADFVo6g9QQffG6VoyDtoCkC31DF36bGKNwakSkLaF",
  "key37": "221VXhHamWSKto53t5MmsgvoRK1mNE8yMnwoqg5WLSnw2ToShAThGQ7V1ThLkPP9koehGA1JBMkroiKWeLfURhqp",
  "key38": "5KFdKNAhWHyTBA2n34EC4CzMsiP5P8YTUD4M73WqU7TFDBCt3sBvVnR2urEyU26ePCJYRf66TZejyqdgc2rLBxzV",
  "key39": "2ced3QeTk3v9954WJYrj69QGuWWCyaXxaGVERFbqhBRa1xt2Bggk2khsQAVTSbvbRtA9bW9AA8dorN7cHNBnZkxr",
  "key40": "2oumQ44VBFHCg6KVe8sFwj6FXy5vJhqA564wepsMBj3aVSmUmRYXV9TUwEG7VBJnbj6CGBmDWPBX3pBqPna6go71",
  "key41": "2cUYP9EhHRzhqnwjFxwuqE7ERM8GC6aABCeT6eZrx3GTbUuVuPS6KdoESoHD5DJR3zisAPoTtk2rNqxMK2Rs4Dcn",
  "key42": "2fxrVmW6p67jqPC1aqWPZcC9bXcNfe3qSEbywu4qN4sR6k3vJ9zcbBmabHTCboUhCq9rxG9VpTtCHfwyQzypZ4ZJ",
  "key43": "2QrFxDKc4mhaWdamCP5A31iuvUmif9LmjQuPqmrKh2GP4Urg19DG1NQn7JSXNnjuXiyNmZKG6KMQmhdQmPicUWxd",
  "key44": "ubZwzntfZZf3xRri3AEvcXUFHB7GUq9h1xUHLUfVgY6urVyYpF7tzRNXMEhVBN8km5AgmCouaUBmmSfLrk3w8HX"
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
