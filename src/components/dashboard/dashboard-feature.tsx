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
    "5KdZEnWGxaYBPgqBYZXg1vpHHvv2A3uDdjYG1N1hrKzfQrajoZAVLe9YKPuWtUXcf9nfBszg92t6fSFhSb1TKp2V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54Y2HU8yFG2wSnxRRzEik9NVUFqTK2XinxAAy7Ndu5smYMp99gSvrf2jmJ7zawQ8fjjHApDknusXk92hHbhZmbEF",
  "key1": "E1pE6BcvpMw2Pcu9PMDnAereR2RBmyC2ZnuGsk7979xRrPdoNrSzvF3uXVdMrxSGW9PeNoex7jPZGgaCZev1JPb",
  "key2": "42GnJ8UnMKFD1rJFCYJMeWzcCHzkzT9KMzhijVfXXbfjRA6NieRtERXYEeo7aEfyw3x2yVrwDRAorKwXdvdbtBPV",
  "key3": "282ryAhBEeFTSftaggXZh2t7uPghWR4ksRDVS5SARjDNhcNQYEe9sicG5X1VUvPf7tcfPLRoZUPctdeQjdXhWT68",
  "key4": "3jvoBnDko7jh7dAGdvNABFb5zTCq1RQRAzrnTPMsQj4nz31x1dbr6AkiU8bFoieKY8mKSh8usJ9qvFW213sCxdaY",
  "key5": "5m4dzJ6baPuNQ74DGaTDK2dvow1ZdZsR3d3G8PcZRg7fVYcWhmpk8zxmk17xoM65XtRxMvVygWnY765EWUgR3Mf7",
  "key6": "5GvWH54A9pzV1un4p3cvM1vokbAhFC9KciPXyYhXKD6LDkUE2vLy4a5LE62ib5WvM93hFEkLpfCmQGMhMp1qYp4f",
  "key7": "4gqgSnLxChBz6N5qTxZmWCsfiW2EmUF6uM8A99JP8kZQ2z1SwRrXLJpv8H66zX97iApAwgmo2uNJFSyjccA7Z6fe",
  "key8": "2K381Ckdkj9X3f358rvLHpFLNxizZ4AyKoBLQhnNV3yFBbbZQV1pRhtb6rnkwQ3ks2kaEzrdJxMU3kXtsZJpT5fM",
  "key9": "uBi9Ue9h48yzZ2rF4xmTeSZeCigwwDn47HodBB5k4F44jSUYak6i4gaK3ho4FMPUU6USiwFC5rmCPeB5dqiHgqG",
  "key10": "4MSjiCHsyfB6EnYBC4mGDspYsEuUMRo9dtbTAzeDmM58vATrDeaTJdg8Wt3Xyt4o7iz58vCELb1qdfgEeEvJKcNw",
  "key11": "3YkvDkHW4KYPwkeXMkjqcUuYu7G9sfrk1n41RehFB18WujZFszWWNx4UGcJdJaVupSyvBiYPLrCxpPjYZNNNdAR4",
  "key12": "GBR9pbDNZguZBbLjF8r6E6aTBk9whX86hdQctQ8Xtzvg6H52xLiMpTkqD23LPhSzHSYha3A5ec8wiQkeTdD5Eah",
  "key13": "2Q9QkF1RJoFnMBKTZaQNctorwq87Byay6typcdGxi48RxJDctGHZiqXWBDhyFqUtxWD9cdE6CihYJQNvhHy2Jjtt",
  "key14": "4NuHN8R2U4qjy8mbWcXRWt2hrd1tH9yVmVnxGGxvw9zThnbpixtBvo6iM9u5BnemT8qFaQKx3UShdeK7GEQxm27K",
  "key15": "4PGpqqLaprkWthTAGWpKfBmj2kBuBJhmzz3ko6q186X8MrCutXtBzE6eAmkNCU1Tt8repF8sNqtHRe4bTJiRDxYk",
  "key16": "4SYcqqU2Bm7RrVLczFMsgYbUkjpu2Hd4qg7z5zYrHbFiEcXAhiZJaG4JHJFfSLkNuuvfM9M77eb4teGCgoYiHHHE",
  "key17": "5ytSAhSHNb1Xv2bHp3esdP95hSNZmv17UUUxaKCXEJKD6EziprbYm6xxiKNH1okGSwsUNJbuJGdhPjdfGAA9UPeA",
  "key18": "4VUypanQs3R4nzp17d1agYoxyTt1noCDc3MyZRyKsfmCo9Y3YDDYRgyAJrsUs9edFTKNfoqzcb29uJBZfx34vR86",
  "key19": "5GrYu3oPDXSHANcNrybYh74GzZpfj9YYNZx9AjGEBBzpjugfLwCGgqaXr2o6vCWJfs8b85WWuZPV2wFJ1fmMjiNa",
  "key20": "4rv9EUGMec5mn3ywjq8YKgrM4CZHfWi6TU8dMs8Ja2iBXvXgd9cJeJFrex8Yp8BEnn1EAUe34ceHJsL9Usxs4Li4",
  "key21": "3HjV4pN49HMz8QsvJYM4xuyNt6zaKq5ADfKDvxWN2EgwrRq7N3A9tmGPDNbgFttbK2uLXwGR3LhsSxSKFF5E1CPz",
  "key22": "DPZzU8wkoKWJt5ouLuZHLur7pKqX4CD3JdiKWGckFCP6BfZkYAjSDBFBpmwxDCVE6jyA7sbzoWsbKtJTbRRbrvt",
  "key23": "5rpGETU8ZscesuviZnC6c4MV4PznZfhXQqpSEv7r9cAgtJeSsoMAeRYE5noqK6Mwn13Kpp96NwoJ3gpeV3LYeFzB",
  "key24": "UFC2V1tEHKLck1opdkUg8dj1kPVBJfYTdWKDrjAV4pnkCgwsrxZzMAYB6ybHi9pnyniqJtDYzw3dK9J74baSPpY",
  "key25": "2rPuksyV5kp9dMkqB6TJDoToNtYuLezgjpDL8BCgcEZD9nePaDJ11d3sLH4eHWqTwjNKE2nahjL4r4TsvbPRQXwW",
  "key26": "2otjX58WngKdH9ZYzvgjhRcVdri2bUtbN8WyuozP7kkt8GBk8dHWEcD7BFDFyaAvmRAMgS9KdntXB89bZw6Jiibf",
  "key27": "YeCnhzZ4YV47VuPwZpA9QK5Z5F6kZcxVmkHXQeCH3RvowGLEuSVFVRywgjuD5deCXvtvxtRspjpWbTUkMetnLFY",
  "key28": "2hutw34W6pC5fBUqoWz5QFYMZC8YMhe1aBMPrCivAfwPmPi1EmJVWjncoZK6qFqFdGFdbV9wj2ESLU4sRdgtJEU8",
  "key29": "3wY17wVkq2mrpiofM3c73RaPSWP181Pwdh5gHaPiTMQHR5G1mq8hCs4hbEWoBESZ4JvjzfwirzhHgu8pB83UveTK",
  "key30": "yBTiChtbXsSFEdg87Xh2QEyXCRQPBmWAmj3ZfSkpZjBmnv2KPKxZcFLStFKDyqUhe1amcHbjshAh7AcGwkt4jUi",
  "key31": "2SEPzPDNPHLf5fyuZ5SRjMtrQvRHatFRtU2P3ooJyFSHip7wLEAVggkUCyMyuncRezxK8sKTmTxL12F8EKTEahWF",
  "key32": "3bYDc47jWhD1h7BP4CG2WBttHpJyspEoTaKBRhGJ8BHqd7iW5bX6KTdoVx8RDGyCmPNufTUUmbjf778oZhyTCZqh",
  "key33": "3aDgCggJrxxEAH16cxcMh4QomAUFVQEgMX7qG83t65jijfv82kpQ4qabB66QXtHBg1tsg9qHQD1M7RU4fAEd1DTd",
  "key34": "5fFMS9v4Lf1C48BuyWG3KKy91K9iGkc7aRffdrdHCaQQVtjrjMqgGu8KzkPivyzwqguTzrxJkQGdrCHKa2k9h4Xk",
  "key35": "5wX6WJeBFXmPLDaaeC9z6SkGiiH68ZRteMdTigHzstXowH2f7bFvAfN5U3psNsJvSqnf6Kaz9MYqQmrQANxio3C1",
  "key36": "amcvFocBbQNhbfrG5ZDJpL7GYCfeUU1tDfqfitGyaS1FEZE9oRgQ5wBUJB2jWxTBGe3eWZZDrMc4PAEQLdDZBRB",
  "key37": "5n5oiovcs8uFeq5YyidwZWTRNRVRJnTD5CrMLWcFXLxXaQetJ543tjfS69NoNojC8N58aoXv6BmsayhicRHqGMH4",
  "key38": "44dNkpHERXD6JXaeJNWQ4g3fnwTWrHCVjVyAi3Z888a2QKbCkMMJqn91vd3J2V1BZArg1pqADmF4ahih6xFJteWW",
  "key39": "5FcZ6HyMHkfKTwRA3wogW8tjDF8X3KsP7gySey7bE39vK5Tvd6fRjDNi8UV7289qXQKZGGDENwT6GxmKZPJ8QDs9",
  "key40": "54QTHdxhd5ip19NRZ31Rr3QeY3DgLjjShaqXUJjyz3reiyZNi4P8oBX4kWMpc8WQWuY8e9zefXHYGBuLeo9jSQGZ",
  "key41": "3zyDnsM7yPVrfgDFLKXR4juVMKvuxhJMmP4feBxJF5ieUkrTPVxgUKvfzvngGGkvtbZfaPMp4jtVCe5KEeRnNMVr",
  "key42": "3WsxJQpQGhVhPafwXzGNc3vFt9xdr2r2rBuKbJq9zDn5jkUtXkxvXfYN8bi5foKWD1FnGkSGDxXe5mvorwkvCvGq"
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
