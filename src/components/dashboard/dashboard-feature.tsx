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
    "65k1ynaXjFmghQ93bzHpMXAf8LxCVmn9nakgVDSL8KvXEgmXmTf9pLLFNFovHvxo7dhbw5uiNGFfztjE3E5ebpzy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cAhhKhBs6hZmj8sKF1LQa3qRk8s486RV5k5hNptwFCgmWaiUzbk9WJyzu8R8WbydEAs99i63pckNvX7AXocEczp",
  "key1": "2W397p8JW6F7mFjF8PhXZ5JoX6FsCNAapSDEsupxmjnpc6kppaHrQexYj2bwvaGwYJtzZZph53zAMPihpMFe4Az7",
  "key2": "ah6ywjjGgsjw9K73sMYnUqs3KvZApqjsHR3BFosZbM4iykwotA3DiYEPKYma2Po3kirXzn3sCAtNdmPtGtcgb8z",
  "key3": "3TekNrJeGfjnx2QghPCSeWor7PNJ6YN1mr6HGLGD6a2S7ibsJvp9uBqqiwuEKoVLriSsi6W16AHnMnJX7oLspAik",
  "key4": "3HrYNffBDtKCRy3k1BwJzmTtSvHJpdj4dYoYdWsfkkhTvo1N8XPusK6eZBMVocj7BNvAyV7vBUjqCM8Lbe6dA98j",
  "key5": "2C3VK5Jcy6VsVcb4Ekzbc87v7rF3awrZZ67c3pmLxkXihyjEaKZpDYox7sVmAdAAmCmPX9iXD1DD8GtwSkFph8rH",
  "key6": "4i73mkdGoAioxfb4DY8xhF7tL41WB23Q4bmDdD2gdgi7uEuAMW1es2hsA94QpBowPQEp7dTPHVJpXyNUj5sbWGhD",
  "key7": "Pc2amQEeJccaD1dnkTu1abKpy153qwnhYRxXXDvqnipNkoBg68yGpxQuCcBXZZyaUiCbRBq6oehpB9AWNcKJCJh",
  "key8": "2Fw2fkbpDgvDaxP92Ehn8UCih8DgA983EgRVvi5rcDx25LFTtXfqzvM6avRSHQ3jMdSmydZGjNbmheoYpWemVEft",
  "key9": "46NyDPT1CARDPqgyr1JBrCDZMvPvNyeaEm8R1urFgmExh6p5RE4JQJxYftiQwBndxXeMUMJSBywevNLz4xzQhsy1",
  "key10": "BsjPEqhq8RhPYJA2oSXFM3SXmbzLaRopW8qRVTBRNhHejkgn5tsVfiLaCfymiYK6uCCHrUHhefnp9m9mEtJ21Yq",
  "key11": "rGHjyZ52czC9c5NKk9RFeukmNKpu4HbwDobQqEMb1N4etoq39W6DwZ2MdtiPXUG9gBtfg1yZ29cGqhNsBKg1FJw",
  "key12": "RS7RpNqTNn6sJK45D9Fp7uJp4hmw9k8RjzpFFNZ5FiskgWZ6MQCi6hHEGZRYVitrKB2LbUX7YvuuofzAqcRGTYu",
  "key13": "53TLXaZ5MMxNHQW4baLhYUF5aWwWAjpwz6pJa6vCD7Tcd7ZmEJgCBjc5zccxDeqsiRNgT4or5RaJqJRhtJtcCNS2",
  "key14": "4u36ap4BZJbTgNxfWzDwyqxJPiV2zb9gbvyqBbH4hCGkyaL7HA56BqhBidJ4RrP2tEgSPpyuYwLJbA8MWVxQJFq8",
  "key15": "5nPibp3WKLJfyXmSXZaBcGmQQnfV2yRQPsUXDijYpDrnHTzQkPpPahnkyppAqqYXcRHzh6cbYR9SY2aWXubTTtBL",
  "key16": "5BuiQehuUaFJ7Hpd89JXkk1KeoP6ay2S56FVxUoVP7772Rs2Wtc9J4nr51A2LYZNVBq14CrvhDonTLWJ3uRCzm17",
  "key17": "4qrDWkTwkEUMh2wgUZMbQoF1xAoBP8deJt8GDU9VnRCxE3d5f5XQ5HXhfnE1ZABc7B3B7sDZxS8YSx3FrcSbpb87",
  "key18": "2Xrnrtmoginqjkq1XdqXzLtQge1g3gmqV4stoHSqaZqkD7s1hx8KDfq7LB6e682HBwEnMPDZKN8gg2tnr9zf4FTc",
  "key19": "4yBJfY9zEXB6e7jAt5eFdgxTuJdRxopwJD6SkJqvyJMkn3GJ456o43TN6UNYTdXvD3RNMS4SWzWYT989qfMRb4vs",
  "key20": "2XZo4wDH1GAntafbyGzvvVury9XzZLHnmBiapH9ivo5SRtNGUade66fABVpzHcFKFpsLw9tFETwqCMiRHnxxtehM",
  "key21": "48GAQLs9LEtai6qpPKJHxDBDHTDTRq8fJMTLd64FdKyLtaAN8EwGzLNocNRD2GVgfcizM9BjqaqvyMkRNnWhCj9d",
  "key22": "4p1VRhbuxirspHWYGxPsVveSfLBBMBmW4W8fN4gPXSPWWQ8Q3zGw3BJPZMpUZrWF58J9n6oHcJfWS1DDqN5p6KpM",
  "key23": "61exgeYryp2uuQwFmbTBnyrWGNiphenZvxDdTdpKCTiwk3Bg93495Myfkwnte5hduP1LZGTegTo2P6Ng14SfHe1i",
  "key24": "3vRpgBPspCZTF6FUsBAj4LwF9khvp8uFWCBeMUeVeZ1fGVhN79i3bkH2Qwzw78aTrYJW9Gs52i9J4YHnKsWktRCb",
  "key25": "bXzz9S8YvaQ5H9S4o888n8Vjm6mAcLCXaMDCUHjxvtwb6j4emZg78tcBaXDV4KzrSVpy4iturKRqQA2U6mJs5bG",
  "key26": "LU34FbAoseDgaxg7AWYhAaBKEoPUujSZVVM3xCU6oxUG7TYTSxihx4p9G9gCeitDcL8k2JnHY8GCKqpPYPC469N",
  "key27": "2F6cJtUC1hkXbsWHpSn7fQ8SJRggoa9T9r3nHyFTiFJoHGnJAhNsqeQMnXpXm2Ec5FGBuF3kk6GJxYVut69cbe7D",
  "key28": "4swkmJdrqsv4bwxgYykaY2tmaWFXmnteHqAwEQWczLT26FgF1JdpT35r7gmUCrhX9rEExbYhLt6Du2zGsFAzRdwZ",
  "key29": "4kwc18TbYcVivtC6uRjsR5oXTgHLrg6hbeUuTJCCmdcx34D6jMpL2YMFtJ8kiqP7DMvWzyr2QRgbsKW6AwVmYQ7D",
  "key30": "2hUjroQxwn9AvTU1Ljvughs4sfv9XmowxmMKZhAGcL6W3etENtfjjX72MvorTDa2HWHMNRDkC4eRZm7prdLyWyUb",
  "key31": "5YYfGiFz5ZmtayUs212q5bj5gHmvNqG4wekxHw1TKu2JC52AYMPmbWJ5McXni5LYAHiDvMgNcjPWn88McQuNphZL",
  "key32": "2ToJHCyDguyaLucssTwmheSsdopTSAjmyQnd8sYDxokWQZiXBDWfh5ErLPxfkbKuwitohTTEK51KnuAz5T58NoQX",
  "key33": "4Cj2yYGgHBKLm9z74J6dfd8fFHjCHK54F1W1fMyS7i4vvdF8zCZZTZvwR4pxffibrbCQa8sKMtrWRGJ1MLnWNvYU",
  "key34": "5oPNWNqxkHR5RXsP7aMZZKhM6H1GgNbvkWMYCVg6SKfZJhU2ZC5xmo9SEvWBriadG16rUb9mJjM3ZgyPMXBjf9NN",
  "key35": "384gx1T4RGPXZJwMtqjnzwFnitvAcu14gboxrknTjZpMMatEhVnkWSvnoQ1MXijRxuZdnXRkwwJasQgAR8upgfdm",
  "key36": "3NAQXn8RBx3Kb3Y74Kozqj3QNykt4RJasTyKFJFyPWyyDFPz8Aa5VbupxEd29H8DYaNKwo4v5JCyvfPF83BK8Tgf",
  "key37": "4v9GcqDDtevU1NxpZ4etS6nYBMJE5hqWJDwuYZUaShB3rmdB6gQLubZ1Q9kGhwQ2b1ZccQc7BymwdTd9j88nRhLg",
  "key38": "32ACYaKULPVdpQBhDUsYuYi2hdocyheWRc7tsT6zVZZ3oVYCHWtjP5QZdGfmSgwBnqHqm56EPPurV3FSsC2czdpH",
  "key39": "5hFXrsfB8fkBkSusJJdtB98WMmpj2yupxs9a1n6xfCuTPbxTEmwebvtQZJ2pwXVTTA1q24qsZG4Y4UHdwDQZEyES",
  "key40": "2oJr9LLrUqfC9mvEe5GpsMRLKbjVyxYdM8hjfgs5hu9iqf19c6mseQutsAMoreMmK9bMPEUUheVzCc9zR2UjLpAF",
  "key41": "5uhVd5t1BytudMZya2eM5iE5GPbwkXkFS4U2xYnuMcLzRbmC4Aaskg3QaXXtimjcg5SKhtq7crwgK9nTCEWUnZZ2",
  "key42": "51F1yYXTFQQ7YZ2zV5QduUb37y9z96d5hjnMoP8mt4bbeTU9qhUGfevSx8UzH4Eqw7sZVA7yFhCoFbnbPizdAa1G",
  "key43": "4C4xnoqd7uKyeY2SWeo5sYqbB5f5rW7emKrzvfpXTyPKS6GABwhWwTQq6bSYDA4rncZTwqyLrmnVwvTzfL7fdswn",
  "key44": "55Lsf9UgKid1kgbA1LxKvXqAGxW2LmwHbbwenKojFYyk8bt22yCcqC1yFttAvuGN3H96vjMd1DAo3i476PAoW1ck",
  "key45": "41ZQcCNvYTR59uX3AjWvi6WwxhrezrZnoRxY5nAMVtPyJ7jBVP9vopA1ky57KhyMo8MW4ow4yfCjzhcZha5PbTdS",
  "key46": "2bzvYQuPxXFkDdWTCiuHBsvMQYe1A8skUPqKFTK2FT2jTFi8tTkga9ngaa16uef5ap1VdS9rEYU6G2mYetXP8CRE",
  "key47": "3KWfmNEyWA2THeJdh4tJkkokJyDKxDxHub295Y7nvRE2wr6xsou1i2LhK1v1YsVSUmAwUozo3VoQgftfoCD9jM3h"
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
