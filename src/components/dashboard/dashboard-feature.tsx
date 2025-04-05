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
    "3K5iN8j6UkNW3onZXDVy5vKc9w4sTiaLFYqDvumh97cKp8TtBmrmcxmonpeqqqqtdG318TxuxERWAB4Fg1CueSfd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Cvm6ccu9r4q8QV1m56gdNgNY9NQhe7uhrzq4oLKnD1pz5S5tBUBYqjXGZ1zUzURAHe2VT1ydQjGMC3pKQPieqbF",
  "key1": "3T4iEJc52uaeWuMSxsuMNnMitrfP85yAG2KaqqQAs67X7rMrnarG3Tb9fq1JFNtJ49yzWSWqSkNjKT6X9ymuAEPW",
  "key2": "2qdt7Pc8mLD7Z13LaHaSyMYzsCtwb5oCtbZ6WbwsrfE4HXVtFaZFRTuHVhXik85CjikWaWqEuNPBG7o8nNLEd5EA",
  "key3": "CHhy98rZwUyhKZEaeuWXbFpo44efbiUNDk8X76Ve6fadZ19QWXPiGnxk6WQUMZAye1dFvQ28TsmuCiyAoouNjWr",
  "key4": "rm419CjQtw6rTgFaAuzaLoWgo8Ub4dWMgUuzzTWnmKdhq2ZsShkhRidaNgdgvisEoAJBUpJUK2NFmwQebdeaDTN",
  "key5": "3r2x3GG9dZUWLZTrfz97YwnG1fxxjeaNxC7Z2R5ZKHXd42veVNTtBXbSqFmaWRTetKtjWtsUD1PvJDNPX3sUkcyU",
  "key6": "2mNEaHds21rHkCmftDgV5uMgJ6hb5SLT9RxKJUtoKZzVpUFrGcUjUN2UNVy3CDd9bJCP8fWPt3G9Z836GFBrvU4g",
  "key7": "4y1jjH3kwff6sSrapnFSBM2Y781R8kAZKZ8JDCszturMoHk5jGw9xXRUTUm2VpeErUMaGzPxBx5QX4zWGdPDszLd",
  "key8": "3AP4LdtM4PBSTkCJhv8w7BZuKZeur2io2Az9LJLW3d94DsMEXQCo2DWo6zcaSvSQzhwymitkb6Ts91Zgwht84mL9",
  "key9": "28shrdiQd43iP3q4VW38qC9UsevTN8HnTd3VwqzxNSmYKA5ucDJCdCmz3DGZDqodoFkq1NHHUM3BASHDVEzKQtfD",
  "key10": "2RtZ5JZQFpr4NffpdKDN5c4EWBZfhw5ZTYTQ3AUJF6mnMaZR9nj9e2qdroWp9yt2ht5qtrbjEGVeyeBG9TTNFKCv",
  "key11": "4b8NZW4cwBhHgXf9mxtag7s3JWAq9oGVoA6SD5iwZo8KJSbk2LEMWtWCoung3FAZNaoG6AmiqggG9i8ev6e2v1YK",
  "key12": "3wasuUZyJuc18xLwQSzJrXrcNxQPCpWqp3cuwYsGZA5NYKSbeazGnqUncwbaueY61gz6nnAogTKsMjRhd9Zb13zh",
  "key13": "HQZHzYBRKBy54kJZnj1W8AjTNgfXF46MGiq5sK7KcRstdVSCvFVJAYaDgpito1TUbJmKoXuyiHAAxdRjkPCFh4X",
  "key14": "23zF1dGTH3tPbBqN1gvLebV75N6Ds1WLvPqVVN55NsjoGUKHAegCqarX7PFXwWFwjaHPkws9v6vfwx7qSTTyEm2t",
  "key15": "3Bq2PGXmAs7LRrjdXGKMvTWR9NAutAd99NE4RfZEZEjvJjrvKBJEpgxDonUgUTzQtBc1gyZKoai6MxArFdU3gpLA",
  "key16": "2AeTp3oR2niZEmqpYH9xCiD5Z9S7ejMs5BptFw1La7FA2TFaAGXhyVPjzrhqyYtpvwbV1iVNzeFpNnnMc7TP3NhG",
  "key17": "4EKomXLK2jJUrrqqWRtSny3jTQHbqT3D9AvLDQuwH1XDfHWfzt9i7UPuzrPSKvXCUAdFGj5rVV8TfT1rqiqPRvAe",
  "key18": "5GMQXaMezXRGM2T4NWcTUwsvKekLkE5Jq2QKkTvthTc7wCR5oz2A9t8bQ4opFw6kL3Jzbs2vtmrfwKhXqHUiZEzo",
  "key19": "4iDf35nrfFn9XiN3wno1abMX7Bhn5KRp3H7aobbJ2oGW1jbLmA9ekLXmRyUD8TsbKcjDTQpmeh8QZw56GfgWzh1A",
  "key20": "5A1qFDtACrWEe4HnKVWjrzNKrcK6TaUCTSBAFcHwK5hJi3PvFdqV3EseZmWHRPEANdzKafov5f4Z3L8DiGBQzNrz",
  "key21": "59pJXXUseT4s432178mT4pWEJ1mFJv3mxdRFF7bKfc8u7AMADSR8nuqTji87oRc2twBCJzMngjJebypQgmvk6W7e",
  "key22": "4f74iFnjAsZCRndVKf5ddQUhuiTqvfLSjyuinXx8F3h3CRnADBXCUmZtnwK3uQ6qrJhKFi5VdA3FtHUvQh83zbPK",
  "key23": "37cgy895TwShPXQkAJTb8ho3pNa38aqUGcAEokzw97SJ56d2wMvN3bJmc6QNDQUkR6MtDzxGkyjNLsEBTTSZE571",
  "key24": "nAeMHrcYWbk2NtWtuydwVAKBbwJUx7jg9S2dNQgH9wDcq5j4UGVbmftqtTnuUdBRy662hEmsoXpaXBFapyibVT1",
  "key25": "62MS8faKViH4PJpWGehptNsmBCwN1WhjdaQX6AmPxf5noFZvGv7uAqSTVBQUdbKGNhMHxHRvCz6M4E73rw3q8boY",
  "key26": "3Z85z5nhW9L19Pf4hNaVusyBUV6Xd4BarcxSdkPnHw61z9h5CCPPjmPs1zcr6iCEuij8mXQ8RZbutdqR8xmVBxXS",
  "key27": "42X5ysLWqjTdiQZHCpV5Mrw4T1ivkjH2NsKTRLt4YyASVpVNuU2bbQQ5PRp63jXXGpswdEpEZeaFFV61bhhJRavL",
  "key28": "41P4Gu8jAbRm79ucm8XdGmB24LJeHFVwsE6Kib11qhKqewyVxGJDyJqZYSpWg6i8fw53WVMnBE6DHeRBZGC3G2a3",
  "key29": "4UM6syvAQmUbPLjRJ9LC1Z7FwKwXXcnDvizsAXTkSdNWHdej6LksiunXmo1SGJUsfnCqMPYZRNvu7UCaGuZoXT6s",
  "key30": "2WYTyXSVwUgDY9bVdAa8PTcAa6KtmPDvBPpoy63HdK2EsLYAvwGvAeMJD9y8rQUiH5Tz83UEjMdWECSFuKJU76nZ",
  "key31": "4wk13zQHdVSR2prFCg1ZqmJnfU85gnmDFTvTb4G5GukFNLAdFvTZpnoT1YYtFCbZci3H7EoA76fjhAKt1ScYpnTt",
  "key32": "5HbJMn1PGXpYWVZ7bag2GS56WUzpaGzUsRruCgHzb2FkiQwPcjQQkoMKGdKFrKh3ULdqUqL2uzMVeYNnnEqs4WaE",
  "key33": "J2BZFfohDLVxsPF1h2e7yxqAeebP3KWn8KDRm98gr5scQDVBNCJjCqw61f5JtWBFzQXRwQECmnXdZXqs27VX5ZB",
  "key34": "54MfqLgYAZUQz9mu24u6zUvQexLXwYgwaPXjE5uza7xX4H6Q2uJoiDszuTFn5HBDR9E49xuAVqXRpxZR5EEiSU3y",
  "key35": "CuA6nMyuYRhTmfiWLR4qXf5vGS3VMRv3wmspzh46C3SvzYfmrYW44u3h1Kmw2VFuz5gUQjnNPbYyM9bc1ruQ8Wq",
  "key36": "32ZrJQX9qtQYxeHrCo26jXgpcNYrwQrbvLkuS9gPcCW8PihjexZvqxctE6hdc72TA1iZhZn6S8iqKeuSkmXfXqLE",
  "key37": "EqmmySVNHBMhCwZYsi2eEec28jnXYooTQDWrmP9v1MiiU3tmPieGe9ZkG5tyFGySWZx7xqhTS4XTw2sVdGxWGRL",
  "key38": "5sR1aEA21d9zCMmrXvpSwjJucLegP821mnb5TznRD4aRbPZvCSbfS3uvnc11TY6sdojovSzF3NTmHrUmNV8M9Fe8",
  "key39": "5WuGAdUrWLzpKhbcBwK8Q521rUt2Je4rTJr4F1xyzfmaSLyWVnUBoASTZ4htxJNeG2sAi8uMtbrSpSW4aekhkyj1",
  "key40": "nQdckq97nQ8ueGg2GD3fbpLiwKPNFmTeaEt6ndKY1otJ5PmQdruyQShvzVgM5fmmYH3dJmR5KabJUg419Bni9WF",
  "key41": "5K2YFAS2wPwTWQHYMauLofDA6J8caKV5vPrJdk8yB1qoBWoCPAEW8F6BqqnRRiZYeZRGc5YYgWqi5qHu9dfhRjch",
  "key42": "2btftT9m2LyiZ8vqUC66em37SQaqpWcSv1sx5fqUpkiroYhiBkoJvSAVrac9VJ6KzdcsMbTMiNgKjbxH4AU6dQYf",
  "key43": "5YeKLeEqYJFeuPknQmmoEXtYceK16tZ82L6cN6vSR1k54oatr9RW4J5o556w5LvEeWwvSXiMKBxDWTU5HWgn3GPV",
  "key44": "2uarVUAfK9AsW6ZyQowwE36RShVxAY4ZCngR3RNVEmZ4h8g6ZPi7HGoaPi77KBmb44E7SmPvCwfAsUdSzWPC3kZQ"
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
