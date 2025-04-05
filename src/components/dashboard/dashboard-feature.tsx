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
    "32rTTmwz1iZZ5wHToTABTw8toZhdMo9bTfG1Rjfm795NHCvw3j3oS6861fR8c1n31eM7yRgRYsHr5L7kCNBTwcKB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "StwfriMwFXqv2iHFhKs4rXYQdoHTJTSkDxq2DpYrDK2r5eKazh91fv9VZxnKAT66gfmhr6NJVauENCcrQzNzQ3H",
  "key1": "3zNCdi7dgvbGrfTxm6E26RwAdm2n9WGnvvWJ6LQNcWKVj8jA19zDwFGsbzaJp7YQvPVQhqBuNnjGmWS22FGHzPBM",
  "key2": "5tZkotkeP5BX3n6CxjG4rv8H7ffthQm2bcJtqyQxZoGwqpbgGr14wvptC4z9eHoDEWUchYi7MgouZsbUkYGdDWut",
  "key3": "4hKgW5J4NwYhSYdQSs9ayGhshwHz6tNcyoxHDXPPswVEdpYXCsKXKfgjwb8bWyawsbN1imb7jiqGNToKGEPN1aSW",
  "key4": "4gwD5fQNBh2fDdWQGKvD4Bt5dxvt2B3eMpWnYMhZZv5f3vrZHkBrxubsf43GDcxdiMm6EfnvAkkV4KtMZEc6LyXE",
  "key5": "4MbE5dkTSvDTrKvgAFPDVy3oL87K6EA7sayuDVHLPQvnf5Vb7MpgGr8j3acUbL57vrtC8ndn5CWtf2kanUpNiUmy",
  "key6": "VjeQRDsECLJUiRfvmSn1ivD9tMwCZPA69UmjobvEp7hJv6fug4TxSxUA4HLryBVQ9XNARLyBMxxBek4TJCS8xGJ",
  "key7": "5rCvA3egYX3xzGJipux6Bp3fkwtPwy3kaLvjo8Sr15u7X9xxHZVYCdRmHEoocGgfiQajBk8j9G8a9PYXKvPib5KW",
  "key8": "5ehCAXqz4Ybm39gtXYrwFP3bAsVp7a5gM1YnVMX7yCLuT7LoZJXMK82t38W3vmFSf74oWQwAjwRjYvQ8i2A5V8Kz",
  "key9": "35Ghn31C5RvuhKLTRjAkz1jpFEPpLQpRFgTwRzJ7sqWd2hz7rUAA9aZnfYGr3rMr9DxofxL3ezMsmArwA1PXmisL",
  "key10": "2Kmvxq1AFLVN25R8sRCjbCidWB6SeDpVdjv4sG96opgYNYoAQuudnsamL8QS3fnWmYHnMVk3uXX4ezkPmKahhVxH",
  "key11": "5jTq1J8Z7PZasg2xBg8LeVhWymwXWLqS2Cy9UvsM4yZPN6uQuTFwh9jb9AnPmrcrdq2VoXAL6qECkKf3cWUMhGRb",
  "key12": "t78vDAqQRnpnGxxcEZ5WggoADTMDmvhxNitz81idLKe5jYTVw8nuX5WHNJyC7X2qjSsWG3sHAMkk9v2VbNYAzhh",
  "key13": "4B3wfBwPvwQVdzz4NRAPnThwH5SPS9fap4kn5X99goKvkiNxBLnStKnMRyDPXEnG5BRCHeTEHfpmNNnu1MiqyDgw",
  "key14": "mzUueLCgBxHjcfQt93Hf7HEXbt9j4Nwa4YkGKop8L8BwZ9ktHbeZjewyvnu2xkrEaJ5E1eDmS99reLessafACou",
  "key15": "5Ai2r4LSPKugP5U9WQHPUAuV16dgkBWR9y1HaAfKMhEUf7d1PXXAiGoLv1jVEm5xMTM4CKjjpZmTgYuXcQZCCAKp",
  "key16": "2zzQPFZrSRXPBwe2jvDET7WMtXtgsR1vgRmrc99WEQEb5ya5ZNFEHJWvTUgwF5yKkkzjqvBowiPbNAT6dNgZD8eA",
  "key17": "5oFSRoNKHH1gFBeoSPuAFRi9v8Qe7Mf6JEsVzRigQFw8JvqX2KRj5JzvnHzHQ4C4zyScQKABMZNHCjpP9M92anZv",
  "key18": "4UHhFPJoKSPzMs9742nRAgimjGV6MLpc53KKKrxo6zzwByJ82gMA6xf71WwUjfKGLCX8QvgWv4gjNfrSMZGWVM5s",
  "key19": "3MVX8g46B4c3MpYquqnKABquqU6Sr5ochgUQgTYj7BHbE6J2Bnhi3Vy4YA76ex5jNt1RCsHiKq8pR5r8b7wXUKsq",
  "key20": "2G7K5ewuNiNGBBshweWvNz7fbznSZtNVgHsFxWQRNV8eLPZZec9yjyZYBL91ZMKFnwTrf2rnwra2iXzYSQpfvjaE",
  "key21": "4rRGNe5sUouSkgM2PLUKuHVXrj7LRijmdt1LyL4gqaRBeGMteBEDxss9LtbercPTMsi5gTsiBwCWHmBLSn8Y2rUK",
  "key22": "2qm7mR6M8ooZSTFqjq4JhL4cznRS75TeWiSPA8jDNZoCTFXFz46aye75qRziH8XmFnK7FAauxB9Tvy5kGCeMLr1Y",
  "key23": "p6LAjpeicGDbWPAsxp9Ct15v8UsVevMo4vSQKAfF3w6GPwaZWip4Zbj8Q6CQ9CQCVKiQeRa1wkp4wQehTKvfX5Q",
  "key24": "5YrsQcCvTwGjpEx5cADqTLHQXzYgTjTsA7nio6Pd3qPssvEco1A4UwxYsxsPfWwGVAJiqGzq7U2sw8eJefiM5kZz",
  "key25": "5HF5BpQe3EofX7ENZmMuoKPaNxeuw6gt7UbQDsRQTqvsGCkz97CUkUgr3gZyaGkYJKS1MVEMdqdejGR1g1tpzdAS",
  "key26": "5Kq4wduBeigAqfPRs8scLfKhJ62dhLhjdqnkkvbTMesrHGz5w1Z6VCd5VYjq2xj7Z7J6v9ZWeDinfQG1xM6Tm1JB",
  "key27": "4i1WgfF7iThiF6U5uR45gA4x3VerZT6qgrw8yfCuoZD8FBuCe758PzgnvBBshmZeFnTXSsBFCnu74duGTMZfp4Zz",
  "key28": "2KfDpPtnECoBMuiAKc83zroVSn7yuxpdep2MKejZrmYqAEAPAmjMkVZ5n4M29RvLMfrkyCNcGPgeAFc71mKqKWBz",
  "key29": "2MBoWvUVWra5hiS1aeHWpn7tcTNHHRbiwXJaH7fH7fmNKAtDy2yCeJ3PrPQYDh4ULH6D3mnyDEJJ2jdZGsQRUZBU",
  "key30": "4E5n299rkqQMq949RS5ME1jWYjKgcXpVxrsXJWKuooqZnuGv5FuFkoCrqnrvdS73Xz8WNvGcUioPPmpfVKBLKSYV",
  "key31": "ZXdDLhAnAwc6sHX1HAbNDEvBL9vCJ7fAkWFngoZnupD6uZ5scGcdHVpEXM4AunrTGsBciwsG29JkAcxZqurMMZZ",
  "key32": "56eg8GTunx63nxoF76T742Fur5eXe2KATfbxxFdMb14syXMzwUQb26wwA8Ktbuwov7FRPnU3uqmMFQdXxJnzccU3",
  "key33": "3oSfPswYGSXmFTvN3cDM9soQa3mviri3WrbHbasTwoVKnhoDYLpzRT8zQtWdqYK5eLNxZFsFWC5LPj8EHDL17nrG",
  "key34": "596PvpEBZM2UJE7q2ZmcU3ECC4tCbLpfq6nhcjkZ4DkJHGRhQTFmt1Lhmr1xargW918aK11SCHF1A4HDxr6i2fZh",
  "key35": "4KjigvxYdN3hyi9FMdwio9Zmk8cp6716wWsmbWJgpC1rXT8dpCt5UHpHmMrZbLuk5Eut63eHbykZY72sWKCdvQ8o",
  "key36": "61786kjjTi9AxZKCFy71hKVr9QcNC1a62gjCtVwQBHuMei7eUbvK9Xctk5bEUpvsyawnKZXzhP59euwnLfHLgVk7",
  "key37": "3ZyAaV1D6UFYRokpddGVqZAAn1qtQtpznshWb2pTyzFdPHNRJ9YrTeY5avSAwh4WNpRg4U4fZoQAeU3yhHSdHGce",
  "key38": "2LR3dVoz6uhmR8aLs4iZ7HBrMmb1BQbrtcoUJbkekpne3zrW75ncgdvNpPwBhg59vU4opMJKyvByRvZdMrcouz1Z",
  "key39": "5VCxkJxejVS2E5vR8NFoEb6MNNM5FhtDh1DapJSP2BXfVP4sdzUEP2ioTZqxbSRFfPSwzdR6NBEepQKFEGcZBBYs",
  "key40": "3ctaDbQ7BBmDPMVwbQAmtYVp2ZUtkAnCqbF19W2tBmf3M8s2xpB89EqjwdSYjAUrAktidfPmA3xf1NpdH3UaKAg6",
  "key41": "dtmseWPbQ39qfRxgMigKKRBmXmi1qtCSnQaPCEUo769sewKLv8Axc5h1eopqSy25Mk8MZ2iSJPRhimu7wG6hZRT",
  "key42": "2CSF3ADzuVpZFWkP9gNS52DVc48Gu39xoeEBrXAtEBaWhWBYaSRj5dfLCWwgp9Y6jvH9ywe99eFbAA1GMRopzyY6",
  "key43": "5EGW2g9xJ9Fsvj5VFg5R166Muj3SAQJumtwaLFsFMurqg8BBVxArsnZavgEbqsLRUCswaXR7dig5pdVsfNpZxzmo",
  "key44": "ydLeh2z2ojpEacMEHSDEq67tiLKe2JyEp7REf1hPxcLKiCdJfbU6kUmBHZo1NsTZVNXD1AwsmutkiKQ1a1xeFxo",
  "key45": "2B23rZuhtmC9ytcu6TJrg9EWsUjeVfjK1P7VE4FDw6Q3XHYwokiy3SQf54VTf29tyKsFp4dWi2vsZwzdFfXt729F"
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
