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
    "5qyNwQ8XfNK8N7YfxxTrwCgyAYNESyYUFw1UYZyfBNVHcoxL9yyUPyD35BwE6yaiLJuEietLUfDajzZ6eTFktveE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qjdhhRNos8YrUhqVxhFKioVkkgJA1xoj2reDv5VbxHFyaSsRVzsLgr8tgxZr2ejdyNeK7YUJi67akjeWqUvMpZD",
  "key1": "4Dtuw6FQf52BNWFG3jwTZwaTA7NQQj7zXeDPC6LkbVJp6cinFBR43DGspCpAWbPCxisXT1JA4XYfKABHvA7Kj9F2",
  "key2": "3CsK5o8Vzj4TRwNvUcwzJYLAHAqVwzjj4uG8XYNb6oyeHmdKsWPXb6bZCUdpaZBxwySA2TaMVReZ2obpey7PtRoz",
  "key3": "4ANJ3paBco71zHXpgPYXMXS2zGUSFG6mhuwYKDq179E5NrXUhL57PbrkTBXDj142R3nqPQpCJxrRvn1VotFXAa6Q",
  "key4": "4w4Ww76mkggDBiztK5jnRTQGbnYo2QRQLfJWCufUEiHrSKdeJdTbYV4kfuSifJqV8HLsoJTjWwzdzyd2PoucSD4r",
  "key5": "5ru2XXTFUnF77GVhVBCMSxyvcPESTx1gmK8EwGFwxYvPgBTb3BthDjNSewftX9mz36kkDdcgEW1c7WC2TvSqgGP8",
  "key6": "55UitxmtynUFJGN5mRomiVfoZk2zcpjihQU4tz4QLdzYhAc4Ej7UVku2JpWRLaX71YXbY37YWktYac5pQ2v3BSrP",
  "key7": "23rxwQWoEfj5652xYsURt1PKrruCuWvasaMRpQVfJvhveRQbjEeDLemDZivgmycfYitSJhcuVUEVxEYkjn1sWyYY",
  "key8": "4RejUcmh9m78ByfnSEVAkRNY3ZzFFB2UMjGEoLQ371Xiw51iagX3JgvUHAoNwYMPYy45FjhaBiGgYseFejqnhTiz",
  "key9": "2nTijpGmaB72NKXAB4JHrGqfSZcHw1zBAQeGmzyGG8Ldoj7ATxjWScintD8WvH5gzN2ZNUzXPAiwa6HHLSXiGHHN",
  "key10": "2qqYJUE87Aeg6bFcamV3sxHYzCEZ3rEvfVUrcNiwgX9ceLcWdVVkdUa2MzJn2zJeGTxdVFVe2YSevKEaxs96vHcW",
  "key11": "KmnVTnru5Ch2vpWKWXBmYvwv5D9mPHJNayDP3RKTe1DwFQ6zeVQDK7P3GCXD7V2SqB4WsFLD4yGZDp5QYsLmcx3",
  "key12": "5b72zxtdUK6CzVaAxc2cmBsUj7QumnH4dd1B1Mpwg6TpTveJzvSsow7bscxYdXgmAGSzw7AST6sJZtudQgDf1BAo",
  "key13": "3tytejqwZgbwHazydngtHnUeGfSquRTTNun5hCYy1z9iD6QBEp4RZEUgHhRYW9i67YfEhp5qmockf9DfsPvs23z2",
  "key14": "4tiSwrTvKc9KbWuqugTUegTzbvyyfLx7RBoHbJjrhwbjZnzfutsRLLe5rMqZ5mPjpTBmpF1ZTtbT8FMQtcZA3Wm3",
  "key15": "iqdKjseLnhXBypSxYfSXqv4e5DjC8FsSkjCS8TL1V2BZC47PxehUzeCBAxnFr4LABzBCtQiLFV9bebTwxi2TaeF",
  "key16": "3YsHkK5bdprwWYyrYwzWYwgaCmH8SbHkxTYgRHC82rDmKrNkM1Qw6BTooMnGBib2ZtyfHaKUV24jaxjitjpdo9T6",
  "key17": "24veZk7kXPvFqBJxvBx9cTd2ohwk3D7Y1dwczRYptuLQASBz7URVYjssgb4QmZCA3zP81QLZj3QSAWzsBqiGE7ss",
  "key18": "3Lw3MicoUDgjS3LTLFcsHsBm9yewAKQH3ViW5qNm76RrLTs9rLjqb53QTuEKSvmHVEvXwLyCqEmk2zZ2WDjMxwHr",
  "key19": "4pFTsQsz84vU7EE8ZTX4PJPfWugpJPMcYMUy8ztCkBr2oHqFdnRgcKWK8nH7N7XFp7rQD2JUjUbnHsq3ttP9MkCD",
  "key20": "3qAuDK2YncKp2GGmk1wNUh8dY3mGhGDGWPsrnH8iJNKYqJndgHnkcvvvJDh7Uz9jaxkYKhWkSHmfLLnVTimJNSs5",
  "key21": "1YTPTrSLXn5BP3CweDNJpeG3kNowQk5jhp4Lp9C7EbkUJb4wmwQjJdCBXEnxL9QJQCJ8xbSRDvh8aTVHU1Vcsm8",
  "key22": "5AjRxy6T4hYqyXEKdVK3E4okjjtpYEwkRCDtCkoRL8cxrFvXHNc2KmTm3UfNB5ey9rKveedBssyk2BCHRn44SKPs",
  "key23": "3ntbM4mXeFHUSRaq8mHwLjqhBpvQiysnLq3jbiAac6wrtbenV3KGYUvhf1TDTf5WADxtPMX1dyJseBR4N5qZ1hXr",
  "key24": "23xN3kdtbnNPreaEgmqta5DUXt3ZdFGiBqZ2uKs1fiH6vwxt1tkADCC9PpAe87Ljdh1R19Bt9LwhyGKjZxs4XFEx",
  "key25": "5htSJgL6akqpUrxmG5offjMd3b8tDMfyLSGiXAa2G7sVhYaiJQMHTvh6v52EuvP1RZkw28VZUnEtgKeTnyrmraye",
  "key26": "mBECGJRJtuGQ6CaafBkdo8FdD5WWoyDdnLMPmuBgnuH1uVGuXxLdwvGCG2sfi6GrcZeZT1wUxzo3xKVy4QFCQ4Z",
  "key27": "yJhCPXj7QPhbTiBEzwsWkjQzCUrfYZeBxLUj6VEwikGvqS7RLN2ynLBBS8RJszRZ913iekqMJyeTdmY4LevU8QJ",
  "key28": "5wZsHPVTDrRfRr3Ji8T94zW8fnpV7aKBqYpWr7ZJj6kbCx8z4cJ6g1LrTs3MR7EpbWxkduRzEpZQQVAL4Fr6R2Rs",
  "key29": "2wXszm3wJbvD5XgnXr3QLB1mg5Ciaf7GXkG4TegYH5G6jM83Vp7VfKPYs7SBYQjRduaNFUMhr2WzxEvas6afbwD4",
  "key30": "4un8aHJv4U9QZTSNzCNCQE5D4mNMD4yHZZrb88TMnr9i8Lg1fLpoiupMPan4unZhTyrXrMdCRRmBe24ckVHRqpJ1",
  "key31": "49i82FzPKXjNgZkrbGrYPc5o9CQnGjaUi61s6huPmYDB1YKdGTNariJ4Ct3qULD3mWaVcvajqH2DTA9CJBPSAiDS",
  "key32": "4rHqSHiEF8ini1qGF1TwBqoKuESayAE2hN19v6SHMxQvQdERLPVFS9ijTTQ5pMV7dEJbbuxZWijoMe4RKvMxz7VG",
  "key33": "2SbbMJK2ULL9gBfZ751KPm7FXMSzSfRfX6AxTVTsLyKAFor4JDXQvp2RzEdz3MQ54YcBMVqUkYCG1hbXAp4LqodS",
  "key34": "AUVm7Z68igh2USR9kadBTJDtT4WSyw6VXCEtTiDhZx3JzsMasfH44sm4TJpuVU1URgSSHV7eJNiarY5xWLdnDFH",
  "key35": "3JCB5jGAYfYiH7Bzm18oMkeEMTWv3YVczVgouuvumNkbfUyQhv7srTCLJAmNLGwa5xjbYfXv6KkBWhFME9o6yZBD",
  "key36": "3YYC1Yv859pVCM7vsB7tp1VwxmCEzqfknxZdVrQRXVRTLAPe6Zh9MjmKtJTT6Lzqb9vy97cgYcJVmpUmV7FWt5nz",
  "key37": "46viM2zF8oE2aLHoffgV7EEH4vdEVNhmrbSXnvz8BX2bkq7Pr4ceVgtaeCyfYzS9v7DkT2V4WMN8DDnBkKTLh5Ex",
  "key38": "xARvxXEmK4KnQYLCb9995eCziUCE32ykCLdP8z4S8KVD9krqBtP5AMfd3y9CbdDrLCd9cFVjknYjct1WRzuZy5U",
  "key39": "2xKGJSe8UsfDKrTLi4pYqoTDWEo9UENZJzroTrwhuUyhaSGt4sBY4LBkD7ShKbFG12jS9ztKXVwhnBYKSYY4es4w",
  "key40": "3wqeWUBYPMrB4b9nv4yU9gH8eR5UHfTcCuhKgzQE9nGSdEjmCVuRwfB23D26NyaewAHdNns71xajKea77XWdQTmY",
  "key41": "2XNp3jUSU5zW1Ms4jDRLjNo5GaSAqzakZs97izXc31RcupUdYF4YRsTCJy8nDP4fPnDeCjQWoCyyYM7kpyKxS2Kn",
  "key42": "cKi7yY2331Jp1KuEPxrJqm4EryhpyKDLGnEZfRTAEJvXxZac52ZUqcBSzCAdas9JGpPtYvfPUJGj2ZRFnehYubL",
  "key43": "5Xqxv8662jsT6QyJuNJkV9fRqrCUN3KWAm7umwsauVShVi1vJaR2Mqoe8zqgAYFrzJSN5MaQWtbPq3jmvLChr4Pr",
  "key44": "3Dau8wGXXAKASMCSk31cWAQ9uFanJ4GuC7Pn8LuB98nfHczKAhf21xK2uNWa3XA9FdT6spvRTXKgBEqPi2WMQcWL",
  "key45": "kNGQEA44x4Tc2zQLhzWwd6joBoRFWXCvjfwRFL9CXiLAqQggmkZzZFYX6hZNz7bx7x5RHYpwNg2Wnotp6DN3BN5"
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
