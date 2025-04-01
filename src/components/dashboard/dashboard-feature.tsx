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
    "afrw2hxgpRp3wJA8agJ5USKCKwVVpGh44U86u7i7Shu6S9PykPZXm3vxAkVfq5XgnRUhJ3sWFogJF3iZaYxQYrR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4beRQ9dKtJFLSNVw2Ce3vZNTnrWwMze3LYbJb13PCh5ML6UMn6XACSSAL59HbB1a4tkGYNnoCg2iVVah6BjUB8Xe",
  "key1": "en65gRZNfSNgB1e5JdxDejTyNgnY4avykA4Ynt3aLJRfVx6qVjHcLoRpAhUsgh13qas4XLsP1jHNHi2Tcs8BGBY",
  "key2": "43fSSkjkaBEhbNsdkLhhFeCphHikTUHvHyBveehmAyTpMACxk3mApW7X1m9Tpu8eem6v8wyigtznWTT3eTQ97iUW",
  "key3": "2oQPvQ1GepUWcELY1vUMNMktjXCyxyEBp44t9ML7K58egJcgMzdtVVz63cZop9pkocWucAutdLMzgvowBmDaMnuF",
  "key4": "4Um1CGYekjtezDQVk4ugykkrAbLm4RDdz9ozno4FKYxA47xnjFr5CmeXxCPP1avibbAwhRAPyy7wPR9SsrwV5YzE",
  "key5": "4WZrAmr9gVa7mUYTjMmiW2D3e4ghy3pJ6rAgHSgw5Q2Y4wCrHU9H4cC2pmiaszbHec1qimj9yvAVLNiPocDfZXD2",
  "key6": "37UZWbkz6dC4gBb46sMzu9UktSucDasQfxx487NDJ8RtNuFjaSVWNkf78L3PhUKn1qCDkeb8QkvYeQm8xvUfgcD2",
  "key7": "45dFYyV5DRhhKpL5WKePEaiGEyNDP323Tu1dXvKxE2VRoGy5vVH9acUECPSQzXvoMYF8Vym919327abgFDua1MdY",
  "key8": "2vpjby5cX4mXDteBVPB3F7rXMCD4Wk5qrAk2PKyc9z4PbDMLyURH3bLUTbhRcW2JgUNsYyJZSofhJwD8Ld1WWMrK",
  "key9": "4hojDJSd5Zb3adgSLSSwe5Ys4h5CSKgYmWwRVGW2DhrtKc3AtfEquQAyyDwXGRQkjCH5BWGRyE8duy3pgmVULf94",
  "key10": "3p6ydkUkKcVHvdjesf85tx1pwznWRdwHmP2Wq9UYbB8Xef6TE1vah87eLG3aqBXNBEWk7rKerH2BnsLiM4A1SriQ",
  "key11": "3rrfZyQnASjK6r9hDNXEvJdccZkt8R3CU6H5bfFJQx2RLXNh6MH7vdssH4igpZ4Q4fDj2kVZzSGnzhXca1YipChY",
  "key12": "3MjzSUwCXkWWbirVpV6nKavXpfY7GnBLSrRiQdAAhXD5WXBD2XFWrD8qtcPPNSz6oJb3uvfEWhGyVtcqH3KRjGSm",
  "key13": "3jNMrLT6fUm8EeLij3kgWHKUdk8KCXazibNB8Az5czwnDt6tmsjeyTxZYMJJrggCHzouKW1r7SDBj8Czur8LAnw1",
  "key14": "4SW7mUE1jSA9kzsjsDEwXvnugdVtWdmPwaNDsHWp4pHV34GXMCyP8mXLi4DBzpfL5HYiSs86hCdNQrupoNxg5NPc",
  "key15": "gNngPfLToXAkzdbCqTKNXWmZcsp9TFF7a2X3Bn5YJg3k3EYwaMa6bhejfy4Mwcsk2uLYnbestJNJxj4AyFZzMon",
  "key16": "cP2wMHzwRNJXsVv1UT36ocjVgAAtWCLjSzZ22PninEx9CM53EFwgacjXUtBPg2AbATYqhkQjDc6xHfP4csJF4ot",
  "key17": "2UddxMobaGeHQW73ptHc8ZqpwteX7nRBP27YGdoSo1gm6zBKSvsaC3AFJSXgZyY852dwfmVXmx14K9rxrYu9UYV7",
  "key18": "29MzWfnBgPcGqd2so51yfJoCiom4rHb96oYLejrTrYFN4sNnqGxWr6PmH83wF5sBWyTE7vkt4aGV8da5EEb7oppf",
  "key19": "HXKbpxQbeubZe84QiXx4MG9LG3xCgAbP8Q8vBu1nQU1N8L2yR6ZtXT8SoKE6yAP68yLKGD9pnexJrbRoRLHRXxs",
  "key20": "5hurCuhbHyM5Q6eWqByG78HpNCpankNRV57CTEYgVXFDZTfTeJLFyz1JSHznntbGK3AKdaJL1R9cAjJEYDFt2Nim",
  "key21": "4TZuwtnCuhsWxWWMWP39mr1R76cqrieGD8y8sJSCsahe1K8a3cYsqMzTW2Rr6PFthemiTERAncEsgcCL73LBjT2H",
  "key22": "3M7rn9FQDTREWc4E2hWpr6iwz3ir4Fp76DhREXfJET5hJ1UNU7jN7YurCVMQi11UQoUMerk4ZwJm3W9CFaxBtKB6",
  "key23": "4nP12ZqqCCuHHeyWu833eMqvU2S2fjp7uQWWPC72BaS5zwfWGNbdJXAekoaP4be556D6AScGo7upX5uzBkxwUkza",
  "key24": "2fjuP7YXqiztAnPJXMtLDDb2LNSR1Ts5vLbGkvFHpjQbstd4PzYaMfnN2JcT7vMhdUsCeqymdJSkUjE4tKXdgnYF",
  "key25": "4Y8HFgxBD2CLYRWGKDEWGgGmQWru1H83qq6AHp9RhrLS6a81Sr5un4PJzGGbHJj3B44QPaRysGWML2obT6tze73G",
  "key26": "5Xn16cPXw7CUxzDe9CBTriusruydPHKVUJWLL7UYbi2PUMDFXQPhJFb4yztz6YdkxLLL2gruvpC5EJ3bmPUuazaY",
  "key27": "3rRiuyvjgj7CinQE9mjDv7i7vFAFWpeFq5DXUE4URH9C38Sjp3LkeDQG1bgnLrCRftkyCVpR6WLYrx6R99UPFTDg",
  "key28": "4HK6fAZo55Awx1c9oht45E5FQTzhpbgXyjY6yCkHgzuXVKY45XYivnwdPConhPBk3xmqy5ESVVhzKobqbPyxvNWE",
  "key29": "4ETf84FoRZMHw6EmH4H73sCyyeJ5JsUCxtCDDizyNBx8z2ZBAZnWY4o5ByDmeCWat2onNDPSC3J7QzCwJ1vsPW3o",
  "key30": "5BfFNoqb9D7VXfngSXNDdZ1UJdT9FEcV4QxgZmqu6kobyCZVLAcUCt7JJUJmgbFkg9Md8Lawvts9tq7VUhg82Pbw",
  "key31": "2c521ugfbZ6qsnhwsnacePHCQ6Vf4vhVyaKQjDXSbuDVS2RHUSobcLHGsVwC3EGhAATTvMvYq8DGA3tijvETyp6i",
  "key32": "5S5VHK8pSnjRinxmqzn2sGARHbU6btqwwff2HmiN9GdqL8FmvqHahydRegadfnUTrJybDwaLJrkFihKRT8WUBYin",
  "key33": "5rSd1cXw34urHfzduKfDoCKhvwwS95Ks17WgwpvrL57of9ApFdD5FTXvb5XDMeS1kQivXpbYYgZmYE1HLsKDRiLy",
  "key34": "4ta1ekZcrQVXVBRvPVzEbU8jKzmijBvpvfHTSY7Xu8h3Rc4Mh7YanXTtKUmtDFmtMn3oYPaizmp3QpSNhc4PLHeP",
  "key35": "29gDyrPb53g49nLBCttiRoBcK9aZpsvCLiD3JTC6qWNF4dZkVAVp6A2FtEqQhCH1E19cesAwC2gMJ71uc3781xrH",
  "key36": "4F3QM7C7558BABef1uso7CsSDGj8i2mG6fEejZ4SCuFL6QRwUPaQAGfCuLj11m1bxqJo6RxaAoRaA7EQJNDDkGSt",
  "key37": "gs2BiBnfoNjHW9KnGbY6Ti7hqmYTieeS2HNDEbGZGVJUe1rRzF3MYY3Mr2Cuc1JupN7T5DEYWyaJzPj6zez5HH5",
  "key38": "3qpfAqnFWX1tfd7VNynFMzv7ZPdAqwAJ1SCcCgV593Xf9Z6EtCC3kwhDRDCfabtNtzC564S6297N9Q1MdfwBSeuw",
  "key39": "2nDRMhBtEcA69PYLLSvnfJysndcohefVFS9NF86ArsUyHpWDMxU5AYK4Q9So8TJ5EBRsgAX8YFF9Vf932aFZCKHB",
  "key40": "uuXT5uG7aAUDENQEfrjNkXbxD6hp9sb4Unt1DpWYM5CdjxQxDYnt9NUpMmgDSJGEKUm3BURyM7smdXWg1PS2Yrs",
  "key41": "jXNzYruJCFBHtzLfd49WjrH91gW39KcnaUrNnmgV2c14PryVocKWmofJCobcM6bthrANwhiycadzqqALzLgXpxP",
  "key42": "53uoQrfKrpKnvJWdy2KP1UygqgjGhNxTn8GZKp44EXy6E66RbfdFXSPUqMDMpTgykuioKWtdFqYZXHnjoYNQ6jgW"
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
