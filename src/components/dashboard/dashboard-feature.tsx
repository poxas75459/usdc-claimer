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
    "2WqdmnhJkNm2JfkAEcopQNRBAfnZ2ndvncn8b9JAS71jc2TRnsCrzeRXc4KBRCrzxbiLnwEyXjTDkGY7GiPfKRE4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k3XE2VKifoVVJs6mY5wLLqHkFkX21z2FKnpB91u7JA8DZ6HEvKijj7q4U3Vh4MeRr5cyBgyrTPQ4Binr4pgHhRr",
  "key1": "4gUwgBevQ1WEtYYmQKH2mNGG8aYu1PNakT3AyuUeGZEP81JEWrJMY1gNCK7D7abo3gi8zh2C3GnMnKAWyNya3Bgu",
  "key2": "5Ba1WvSUKgE8X7EKQiK3hrEpuLRm5RT9RjvLkeT94jHj4piVsrft21PsWtkijmUE2wKVuQENnUHJa1Pc7iigrbux",
  "key3": "545ZvFeZvhNyw82g4bfZVHhEusqrGXBVyQKzoXHBgtuVWggdJPoRSBpKU3m6Lg1UH4CcZAqiocsY3Yx163DNFNw3",
  "key4": "tmerrUKahG7GhDnGFKVtXsX7jAF9xr5jtiAwtXXo6s2hxALN2JHEhgv5rf8cNDDfniF9jDU3qRsfXPZU4rNHBYq",
  "key5": "HyUc9Sh91vxmZgxTEvCV1gHZU2JSDjB6zttK4kXNGWq1AVXy6SGgZDveWzWTPMYCx3uyCQV81hH62KhMwLBJrkT",
  "key6": "5g3XEV6SWgH3BUomqzuuFvQusAeric4QboVQUXrKPAFBLWgjPH3P1heqPf5RKncoiD4LGGT9oy72pSfsa5YttqFS",
  "key7": "5xiMuL1hyfgYiirwSatqGqNBdK2rKkhtbjfYmwtvAhjFLZRa8gTwiAcseTAtpdEdvEYzVjQVJBwqxCM2Ht6zKyCY",
  "key8": "iHgVcUH535Yx4zrgJ57tYfVHj3KPEcuhoCL1RH3EWDzLxiCoRZEvLhHW1d32XrjW5WXNFY41i1ysaYPGZjXdfTQ",
  "key9": "2QDFWLCdEdvqtuR25WKDb3BAC3s1rRSMTwgNKprAr9rPjw3WTqzf4qbuz865Mg9feDxnPQEuPw4ncp4SAXZ5DHVP",
  "key10": "36yjFpR68vnva7MjJMgn9VBuxnCYx9Qeu9hQ5V6NTTZ6jfpYiB2QF6yozWizCYP4AM4Ex6cB4D2oEjD6JcSStaJq",
  "key11": "2z7J3W8xwqsk5iRYg2p1bzwibSfyRy9asFVqbcnLLyh5iz29bZ5UcDiqGwpeXpue4hyZ7Y3bPSZjryHPuPDqwLoP",
  "key12": "3wMsonywbDAWXq2nJ8Vj7a5qdwgUNgycVyeZM2MBuimYyVPmQKWAQg4756CZXNHssAyMEjD7qxoZBkvNTSdWG2bo",
  "key13": "3DLMrtRFoTaLBivWmMX9T5vG4zTcVphNezkCPy8F18Sy96bqDNdjYiqtyKbZVZT6gpRrTSK198xHFXoz3xTmd8KZ",
  "key14": "3rxg5EJfAv2zRyVBqw9Y6YwT5PL4dWdYaEXjxtAokuoL3zxeiRi9EfNYamvrFFGH3jLMgGDxZyCpKiT6e9GBjdhr",
  "key15": "hwAs2jjmysrnATGAPMYfgF2Mxb1c6kAuayvWZNQncSjW795d7o7xNfYVJWZVRsjSU59okZWGwKX6K2HHbtPDMwA",
  "key16": "4XKsctzWwj7x7Kq8otfR7VQ2AD6nGmJYbbFw8vGS9tSZQN3jygadwKGig1WE3XkCmh7DHi1Gbs8fXRr8gUU7K5nS",
  "key17": "5fSDMQH5jE7j5rpv1E3BPoqFwSwYcboqBEeWHM59VDdaoTNnMYTViWZedL1fyLsdF44BYxJfcJagZdKTHziMLLNZ",
  "key18": "43neVV3JhD73TJ7GRWcQMPybLVzGVJm5GU5tUrkJnm2taAFn6ehxbRJKyYN9aw8rSYPuGGhWaqhgfJUpCyA4hRGS",
  "key19": "2QakRvnG2KtEgGf4hipLuGBZ11PsAsNJz7z6RCRJdBEJyuGV2ZBg9BTAcwozyyf6tFnZqjj2pkhdSKaoV97Dt6vN",
  "key20": "32UwAhscw93FarX8EK2Piw2BppxzEWxq4eunN8CZFu4V7eNxeQv49unqsdkfQfVxupa8wrJ1bPLJz4nhsJxKPML1",
  "key21": "iHQWqkesuJ2BjwvQKNbFo6FQBBLcXzdhPXdFvJiJ2Vf38eGrZJ3DYZe375Pr9nXdLm8ZTdczFnqxfiMgVbxVgDD",
  "key22": "5M9KNirUuJswT5kHp8o5gE4UHxX8HKdiyCbuSHU1ArUhVkh9FzwGqtAxqZwFhw4dhSieue8g9LkS6zEcdv4uzxmp",
  "key23": "3gdjbdXRFPKY7kwtWxfm3Bwn4LNMNUvwBMYG8Dszv3BU3LNdLPeWmXJHv7ZopiLCSGmKrJB49kJhdTzh9h6JKiG9",
  "key24": "2sjx2zNB4QQeBbwEKaf8CTBiTDpsdS3ipy992qWWNQ2PMqhhC6AAuaUFfnk8Y6JrzA9RzdnVUzRn4o7jv3VmMnjx",
  "key25": "2XXKznhbpqiSedm8UeNgEJGHNg18tTociuxJgZGF4xqbucMSdiexFaddRkbzFSbcC6MEZYDVse653btyy69Niqrm",
  "key26": "SAJgparebTUG5RhXSN7JobpGAoQjeBZQsfUqde99p6n78X9AdgAsDbwsoSwSwChoMsAfDYdTnPChw32yKpmRAei",
  "key27": "5cgPthRhmurSJdqMZCg3AKmbLdcmtXM9qD2yEzbrvyxLgdZNKGY6iNKufiQKEsDvMTjcgzX6AS3KtGJPMq9jxygo",
  "key28": "37JFgfGx6rFYUoeqAauEqRXiJt2AE3hEXZgHmRiTEHfGzSf7MyqsWXD5zmg8SvpLk5gVCyaWqddmdfg4WKEA5wbD",
  "key29": "2Z3UW6tDz3DskzNMUMnuW96BLTFB43y9DWN9P4preBqPV9xRvemUSC88TXnfVmuEUv4HKaanQo2kRUuK2ySuVtyk",
  "key30": "144F4BsoFHzeKMypQZJRveT5RSQQQjQC7MN6FyE7nsuhNzGbWTJNeA8tYU4Mnkv9ngPdxSkMXNDfZox76jDAnbp",
  "key31": "v9t8gnpK2tccf8iapKKdS8hqaVAvb6knJp5eRpzgUoLKtRASkLS24mYfsYQE421s8k3kxpNaq9Qe8Xs4uRExhSs",
  "key32": "44oaTjYPmUuKGAzpEPRhfP9W8TFkTkbKUyksDteJGteaLHwJLrtXwavohaUNK3a6RrHwBbrt2cQFF7kWAwKBY9LV",
  "key33": "3df9A4wpDfXvUyAk1z6wjKGvmKziobyeDP5eZSaUtFHe8PfCpytgP6V7suQ4XCuTQjNWTz58cgush1U6JfK9iiXx",
  "key34": "XF9RDhQUY76fwf7Aiv2n5478KYXzYoFaU3mcUHYFSb8cTcrWbrQwsF45CdX99thPPjWoVpr5Zy662XEmysezatG",
  "key35": "5B5hQA8vyxv2hwRdrt9LhX3ac3fmJkXEJU49C2UjW41gMtp3kGRShyhhWuracEUzKnKBUJg2h7iS5d5RJijw9xV4",
  "key36": "npTwwLv5aEhdL4oNoRMmB3tUrb8WbUvViTKdBeJzpfW8WWYtebS4CFbhRhk1iAmqzUCAj18djCixbdRYgAdmour",
  "key37": "m2hrJoGhvLX8RnT4tovDATRsc3pF3ZdiEmhPQQz86q1qm56r2Fk5jAQZiRRJMwokik1NVomfXdHxiBjgRUWqVYy",
  "key38": "5XcSKzKKV9wCzdUtJEZ9RPgcbZ4WQs1gwd1EKu624fRnJiYee1EWLunoXuTV2agvpQFGtvuR8eJrktjAd7kaJoGU",
  "key39": "2NWEiAK8nRMDjtqJriCNkzKCg9hFtSvBRNQ9v697yA25EGRvTe6usA7qrGU8EaPgQNinW2LL48YGnyGwWiY3d1Cg",
  "key40": "2yRoMWAH8geeWtfZnENS9ifgDizDjSN4Bftx28DVR6psEcFByKuuiC9PV6sZWQWcdb17JFEYY8wwsdy9bT5JQybL",
  "key41": "1q8zi1zh9u5xCr9eP5MXb3YkpL53PBLrt7nGJCMRWgeeTcBjRmoCFUrB3YYfqawMVPciAi8wB4FKyRhHH3nYgeh",
  "key42": "2Lowm9wXcB48e8c7WpC84Y2upoJ5spJ3zfRi5D8T6QtUhaDYM6EBiS5rbgyFKmLvLD1pftkzT4gjNNSLJz87Q856",
  "key43": "qurr6hHxqykfMDV4vnFBvHintomfVTdmBa7ApwqdizrEcvi3XkeCNu7ZJ3p9Zhd67AsUQG37bTtn9bDuxfdYPCb",
  "key44": "4Sz56ejaZrkZw1YQuBYEMpR898BH8i7sXdACJENeLFHjXBaz2XRtC8RDeFQEHKcqZhfewtmLwuNf5VQCd8XgXzg9",
  "key45": "3AZNGigRpyauqhdQaQjoLWxmtPZyCJiuuRJ5ZiyisUngGfMgugNxv9pyZcpZK2aurSBGGafi7fqHh92LSs7eR1Mp",
  "key46": "QPnmPWPDjCKw1gp8S9JrifqGRaiyuriyeakLEjNRNXebUdsUyLiKPzijYCPjcRos1Yc5fTnj9LWDgqqVzM2ebhY",
  "key47": "3xYjwXwFqyXALo4rziitrYSw3uhf2Wwx7DPSyokCAfKFX1cqBNJfoKfNE2Hcm2pJeTSxsjr2KJ8DB8mWFpB5Q7mT"
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
