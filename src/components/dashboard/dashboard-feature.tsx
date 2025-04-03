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
    "41ALzK69cEsC8aR6sgdaBtou66nCXyXmWiFTTHr2ynfEYb9ffERMFnD63Bdegh4xGkcEqL3mqSzfpb2yrD7Y3jtB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gdgi5rHieULxw3YoRbggpxqfVJSLQ8sijDmBxjyLq4jf57dAXcMtM13Kyt7DRtnGuGaq5ujgNXx7etBFwMMsrMb",
  "key1": "4Gyugmhw69qLjn6NFfR1Muh1R1EobD2ckuB4mbhf5dK8MCBNVv1rtwW72Az9HXX2nCiig5KZDGBExhvEfuudy6Ay",
  "key2": "45SsLNCPx6FgpRdst6AnLfZ7v5sz8XH3G6uPtH15MJFq6hn5De2iVsQB18BBrsFbXNMEMVzwztjXKbs8t4vPAYwp",
  "key3": "2QkBvHpNaFxrkxP76dSjvMM2q2rreXfhVkNHfbP6iFBnKr7WkWuMqj4VAipBZCEKTAK8exPr4jLafW81ixENf44k",
  "key4": "emUbZGPBMoQD6H4TM44J32re1GCs8cbMSdP84sjDztrz5gHMtdUbjJUVAGsuaWCi3J72u8ukKwoaAhVgxnNQLHY",
  "key5": "nZVG2LfSHm7YWkQA5m5bfHczayt23EL48Q1stNdkX63m241bcByTEyBtJMJUGeBggwv4w5x78itDiTz2rEy5dow",
  "key6": "5SYgAob9navRki9ZaFUJdr1zPKpwMqaQZXWkzuH2SyJBDs8AafMRnJq8TbEgk5CvD4Xqv6LcEMMr1o2BDrMhdtBB",
  "key7": "41eDLUG9Hy6UGtAvoztTkozGyNk2VvbW5JvWq6fkv16w4B4yPkfXQxMZUjxFuEQot1gMFKywtL4y8eKubhZ5bZqT",
  "key8": "2wKfdDuodY4c1zSY73gWnVfUZAsGCN5xwW5QJrZziipiCCh8jPeTLEk6Qy2ycDgKj5LPE62LQg2pCWvqJBUkPkT4",
  "key9": "5zGn3WCqbbgT6yB1Y8GCY6WVnmCet7YUfjKFXKd84XgmsoWkAqzC6z4QTNod2XBAX95x36RYsVno3aL4gikrK8fg",
  "key10": "5GwDfRUegXEw3fCGDYPSppAdnguZrjbz1azXQdCTKo9Z8Msg6XDPgtQT61pytDXLzTjbmvUyVmuVxYq12vcBxQUf",
  "key11": "25q8b2SthQG7rU5nYq8fbBbHVFnKAbkfEs4kiKaDfTwp4dRShFbG4kBbp11MQXQ71RAo1qt5DfwVjsrFZXoBuuoq",
  "key12": "63UUJarpra2GypQ9Qjk6C2GzULL4hiXdJzTyFUz4XwAA85QbsHQQt2B5zwxWFBxrsztp7dUkkZyYNM8CXtA5TP1y",
  "key13": "4ZtVrNDjV5bdYtEZZQd23cQ2ogZpvsMxjnCd2ja6zQ4F82Dac9UZ7KLMZm8rHdRrpVnQSAePeDEtWhYse98dKu8o",
  "key14": "9v5ahMLdmHbxgmNCDRY8uSbrVhhmB9Qv7SGDLD811ZcFcLapggCyVg1rwMTfD3Aic8SARsvg4G1RqbrqdvtDncw",
  "key15": "e5y5XS1RKciNfFG4SccaKewyCVPzMBDddxPevzrVEuup7NDysTiFYM2iv3RJdcHRcbunYY2waWu2WPscaCqr8BQ",
  "key16": "4S7syakhmfZQdWRejFphDYaWNEXBmm7GtqAhvFfJfpMwXCCSEF4Z77qubupPLiRhRSvuS6EXvRhSBVGU7Ksyk79h",
  "key17": "E83xtnj7jfXk7zqgoMDKn9eT51z9uzC1HmtuuX3kDqKxwiEogZ5JszS424hgMCnSyNdT8QNmgL9wAdJhcT7WMiQ",
  "key18": "3arRys5k8CWs9hT7ffDsYEgDJc3Vmg6xrQeVwCEQ89ggUFAjkMCe9oecwvEXdjQxt2YDD4pHAtxUAkGFKVdV77QL",
  "key19": "376QuFySDYFshTr72f146NX4ud7ZHwPZ46R5BXKVbQanyCEgR8K1P9gBsiZeG5yydiqur2RAYygkwvHKhMDdHjE8",
  "key20": "42W5KVB9JELCvHByc3kvGEbx6hiy7amPNXpQzujK7ArSrLnQLdYUTjCZyAjapp4vt2YDK2YcGzbdJsfMJ5SLEPGd",
  "key21": "285QjytvMCgw4dQXNL8MnW53nB87AjWqCNWp98vaF36yFxZJ7vFtEMVbpF1Nb35kBd8fvN7dhzKq5qzdmQepLCH5",
  "key22": "97N4nzLEFqVyZPZwEUjpKs3gfYbUhCShwdswMnX2Nbw1kPPpiy59xq25PBQ4gdPFqbmnU3hBtY1CUzmvHm9o6CK",
  "key23": "3hZgi95rqxKXq5gxRFqSqiWM17T6K6XbrMKt8rNxLLo3gzdFjpEfkA689SRgWbW2jpReDD3ucgh6uaZmpGo2D28G",
  "key24": "dPcSukoxb3Q1FHfWZa77cJYJMJGwe5wVFNUwqRPbE5PKxsyvZftfRiqbijzFC7sEsdByYavFHa8hT42iRVU221s",
  "key25": "Nw2fknKtE9EvdR6A9hk7eyEo6Nn4YTfAxrDtRVQYUJc6VfEwLCM5pUHTfhx2seyRiEeTsTfWPomWTx6jueoZ2tB",
  "key26": "4iXh1eyqY7xX6bHWr1KhSCiRWW1woNsMrm5ttZ6rc3Uz3LXoJ9TYdSe3acJ3D5ryTh7nMPGDBJW9VQ8n7jgW3dPe",
  "key27": "5j3ztsvDyQTA9RaNxn4hfGncx8z3tNsxirgv7c1YMzauJdHm6D9yBud6CvaAcRVRacSgKPQxBXsEywELS8iQnqEQ",
  "key28": "qEixtSS5zNTUiV6SZmdBxGb6yNQKG4rqdkM8bPhfa3Ki6AabzPytKwnBvVcb3kn3w9os3VfQ7aLr3AkPiJMQGHh",
  "key29": "34xshYL8FyHx44L4JaHFnLHvTLuotmGEAMEtMUNW6ACtHsoKMMgaUvS16NFYcUgSzeRVVkPbnP6YZjGkwwZfvf1T",
  "key30": "2BiSjbvdbCTmKyr1zch2nr83HsbgEpGomv8Ha9P6kMa1C1qHsap9M97tQN4qRmriP4D7JWoTFSnXHtL6te4VjauX",
  "key31": "2TpZb3auFiEmFUwk23Yfv2pkLSQu2kVpng4XyztDfuCaA73sg3HHdAJZ8RTVhqktdn9coaUxkrD5H55Vw1RMCRjc",
  "key32": "S99FrF7ts1FzsKSVmLpBdLMPe3iQ5bEgg2SnoLi6kSTicizVbsaYhwWyugG4rAaWWusKumfgQfvA8B9SFdCmRN4",
  "key33": "krWUmfuiTP4qvFSok66djuuUw7WUxeStQvbXU3ARtMWdSF2xSAqN1rFodFWZRLeqxA1rrQwcMHTwK4E6it7H9jf",
  "key34": "dHHxAZ8TBZTux3bcy5Y14ATzkbZLNyun69hXrmVhJf3Upj1eHUfJcJbtALaNmzzGbMFpcG4N5UmnVf36Y5Z1GjA",
  "key35": "3zKBKvVEqVeVorEfHryCp8ZEZvuYWy1UHkeCGzFFthTtfCQkdFgUk9rKnRkBAJu8LgR8nxVxNqS5qoGd6okhDN2n"
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
