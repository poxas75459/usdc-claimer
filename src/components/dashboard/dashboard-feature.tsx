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
    "PMd3iR45hcN1nTz2JWWH1kpxAdaaEBqZjnZ9hdSSAnWicooZjGw7ciWP7uaTAuBeExjGRxKkmKpSsKpz4cqfayA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45CkvMMsc7p2FnYkstkKfrvjg4XLduGMjRWhVqvgA3FsfDiALbXvcoQKrXzhFHU5siJjLKNcHfCPokWJSKQKWCr8",
  "key1": "u6MZTELshdKu2HHaW6QaKMZdjfDiMMxNcvnYZKbcsN7Kg4kzmYTRT9FYcfELrG6qNNseAoGVZU4EHP2wNbxpcWL",
  "key2": "5A7TFf7K5x1SRd8id2N8u67X2fvC5XotcE6DXKU2oCPywBU5ViBo2BzLkPtKpyo7Fk961Vw8q4GP7Mh8W8cL156o",
  "key3": "3aCGSUcNPMcN5qRDmZHdDA74TgeDLSZB2EZWz6BY4g1s31Dtf5Lxy3Jqf4JbYid357tWh3Mf2hhVFe4tDzRMA3vC",
  "key4": "334bn9G9MC9speyKDzW7AyRw5nHoCQRxoudWkpUG4gTMKFwuMcLm6wEzJLmTmeJZ927PFYRvtttzif9Jv8uv7ycL",
  "key5": "27bx8aCKMzzJtzqt5E9x5w73qrnXfBrYz4SaZ53vf8DNYQtLTrRj6EAb5L4yyXxQwzfD9ErDqMZ4onMEABB6wEDj",
  "key6": "3w76SpYaLTvQ1DjuFREZBVvGEL1Lt7otmBydMMnfjPvaojWjhLy3NP1zhtLroG5a2Xrve6nz6sboXPVoZRcNvzot",
  "key7": "5VhATnPhAnV1BBWwrp7vdKdXTSA5tqMd18FiTFWwCYWw6R6x9juKqJiMb9QcmfVX8Fd5dbJ3mdKJkqBMZwj89mKA",
  "key8": "4ZdFb8mqvQTzn2cC2u1XCYeEPC2zYSMU4Q29yL8G2CG813rSpX9VVJ1uEyweJahFVqiHp3ovuYbDbUDVEWk7NcwF",
  "key9": "4aGYApoSuBEDNbX4BkwYdV5pvt6bUwF1T9k3qsuHbN8PhXBnmedkF4JcYyLVr8TTco9JdBMT6MKdAi78MZa8EWtr",
  "key10": "ohHuxbTjaNBAix8oHN2pQYaVaQmiWC3cfMqeFBV7GUYcT1kxh6AvZErxBRWyfMSDHAM6UHutSfkToSV3ThsbhNB",
  "key11": "3Xn4K1iAKLUZQtB8HTXcxfN9yCJEdVLuEqnfchAp6raX1gYbjR5XHPaKjj1pvV81nR4MjzxouNAufcxr6ieAMx4B",
  "key12": "45PJk1ik4Jm47mdb4tANby63bTyRh8sasKnYnFLuk87vYuPaZPWRYXTknFAq7AggzoQFSFpCwam1z7hc9Dqdajrr",
  "key13": "ZtRBjCagHh1Lnq4x1Yu3BcqwUyEKfhbN3FMNmvxtnCj6ymbvjjpCKiNBw5JERd3Pzz81m3KwZ5kymsQqLYN5ZL1",
  "key14": "3wSoqauWoNAhx2An81AzevPmf6Ja51mX7Cc9V6njBS1JLVpw8shdrCiRXw1SekhJDfEFu3Wd5vmuzVyXRMic534T",
  "key15": "5PTwTqyDXz8FvaDQ57ip7UbsygMjaTSmd6xVtg2qnHsVUVGYD9jvfkJ1yYQBJbNoTM7wJ1Z5aqrtMG2UkbCAbE4g",
  "key16": "3obBgVHQBXUYigWtTyGNEEXczqgRwrnSDnZ7smGSD9tjhGxcNQw8QtkCco8UpdQ3mDpWa84Nj2a52jcJaZ91ZXys",
  "key17": "2nnh6Yn6SfoTbcKy84JZ7GEojzGdRkvbExKU26PXDYxNigiEQZ6aCftpNdRm5b6mV89MN416QorQkdoDDSqdaYoG",
  "key18": "56KxHS3ZR2LQkv5xZcT341EwzC3Nfjrdvr9sLGFuoWfwYLwvgz1Hp9w31t25vztcYUfY2gk6CuKyFEhyYyvmQ1FT",
  "key19": "5Tm5guo7euQxLErXXPrrdSkkrWZDg5oBRc2iDwTd571xPPxNY9kFHnNVRu9JBP6BAJbR1x1iDHDAvn8VEYrexCXV",
  "key20": "29eaAWzRENhyBWRKtVJVSnJ5YCVP3JmEMFvVsX25X4RDwyKfoBvSDSTegKyLhWEBa1nBo9mn2GVjYS3HGeHjBKfo",
  "key21": "2vBXV2Yy7DB8R9PNYdfxmF8xvHBS4y1y3Yf6sr7FtH2i4mna8rsrG6Gz4gR92an2jiqrhhtQyKnrGDtDFcuG8EEK",
  "key22": "4pqAzSVABk8N7pxmkPvypAYq5LkfPF31hDYA64XRiV91iVYvGarnVh4DoGma5bThZsjidw7zWjrtL3H8M3AnZrys",
  "key23": "2KcqDns1R4nE9ejw7aNJydg3uD8DwVAy32yGKPBWseU7AZUeds7GL1UDT3maoRfQdDN3yFjAUve7Fmhyy82Y1XNX",
  "key24": "5urczWhkZCdtHgvrUpsAw3iTw97G8WBnLjMnhbBWayFpDhYUSJPPG7MbLLRToUPrmfPDBf2oentM3tXUbwFW1YK8",
  "key25": "2LBg8FXBNvwaMzZaArcyufahEwRAUehSL4aFZe8wccgso2YoQiDGP79B8rt1oqw4dhhTy4ZFFNaXhB319wavxKV3",
  "key26": "hmLrmv7wroRuhgEMqedBHWeXGkS42xzpcvAxKa6JMJHa4pteemm1g7pCH7MXmeoZJXfnh9q4w3MkWVNSZmdMp4p",
  "key27": "5VKgqq51sAczVRRmeD47tP1tf1NdCW7vmJeLy3JonL5paAcY6gcCvfVjks6ChJ5bkt8qg99zzqpm5A7VSdHMBVsf",
  "key28": "bcCsSD7huWu7kpxDhoE3RFPmRbh3R1TBaHRTUW5KM5wfj4B2D5pqxSXa8N2ue4WCVDGEnajaJZT2iKd7kxJXVNt",
  "key29": "7ay993ML8X1wqmUn1TMWZ3Qa2CpAMPRu8JNCRjcC91sKntZgr6qQD8G89d3by84fgQmrYEE3kN17EAhnEgnudFk",
  "key30": "4oEFPKVRAjuqNpYkg3qCpXEwK5jzNxNK8SwWag4NX5VJPRVbTjJYDMgurvGYiHZawsEn29WXRTedkfHkwxqjfPh",
  "key31": "2KNfYWmv3f71CiYWRuduR7u1rSChnBRoyLaf7nPY2TvYQNBdcV9fnBkHfjXkykJ8H9KK4a8j2A9E5AJ8yvryu89K",
  "key32": "4bvz6VsczWrS96vtvrcWCRxJbXP7Q26uF4vnjysZqysQzxp3YRcbgj7wa61Z4i4P2ZSyZxWvRewQPVcNDeJzbRi1",
  "key33": "4rEZ8NBahGdPzA9V9qhTAHfXiRoZX8pKXYHa6PhF7jEhaNSvqpTaNerEfMGgWnUTVy4iw38s4ASeUta9QvtoTGgS",
  "key34": "3NJ5TtS7KpC1nHEYoQVD9xpgjhk398pkEeRu4ubiWHJU86yQEmvqBP1KaUcZH3VfWwyoJJrKW6kpQaGaey5M5325",
  "key35": "CnDsijrs7V5r2qurbBuduG9vj9H4rsNDxUWMjcodkqkJoEDxKP7WLFrDhSEexzkDXndAhQ4jnQvsh6NmgrfKYgX",
  "key36": "2D3FVh1wZRuVkhn164G3mkP3xk9mkfHJtibZCvcXzhjuJYjFp6GAYNtB8yHuxUC6zNQbZVfAde6NzLUE9kedREp9",
  "key37": "4kLS8qnp5SQ5t4knwBtZAEHYStGNuunLTXPkhpoDMtVEVmTqbHF6mVghjVb6VycQguzRhTRKWGFEkwr2AZ7wTJKE",
  "key38": "tKkZdnuBAZne2YgYgFqbDpFGoCxqcVBrYVcGzuCHiP7UxZaWQkWpfH9mxJwKwrdTt4PciyhgAY2gk9yjyJqKfXM",
  "key39": "5wUQuxuw1bQAig5XS7yJ4c2q8xaWyAKKRntP5q1JdPn393xv1fhkdtySREyaJ2ehRduEpbG6Tc6rghrmL7PASN9p",
  "key40": "eUsWqLznSou1gdyuWpyf7eLu1UTNjsSq38JGFh6Xb4kGNdhzs4aHESi3mpTZ1tSJ2W14XEvioGfkpwBFqqxysRc",
  "key41": "1WPovJvRFBBwvAeonfXorXfN7nU4X1jjDpdMcu66L38A6ZyUu2htvGR6k7CHXC59rAjva7UAL29K8dyATwAUcAg",
  "key42": "3Se22RenSa3RYWboGGXhVSRFCtVxZiAnoAcFdnxYahp7boy4QYu3p5wtB1zttJWZoLaACJxXxxi6f6buX6TXoZv1",
  "key43": "26ybXS57HhzegQaUBe39484KbExBkK3cR1jMVkST6tCFnTX8HE4eYK2dcTfeSV1cn3NaYbgnBA5N2i4PPVSkhWiD",
  "key44": "28HKA6NZJP2QEWqDXqsaKB5nBGsnqxiA5GEsBjeTxqTK4iiVBszZYE4WXe46i8beweCAuKFLwr3s6koHn4BKDX77",
  "key45": "8grJ6jPFvoZHUU7QafoZCnzWWmZsVbofkUhVTNVD9RVbEWDiz7JhyacVj3J1USBF3nMkSZrEBxyLxRHH1FrSgE6",
  "key46": "iB5akEdaHfCdn8qVTe4MryfnUxYL6ftg7PQDj62xuzhoRoroTudywHJBt67VK6naemvZnSX5jaceh6UYC6rXNr6",
  "key47": "x4dyXvSAaGJ4hR5KMTN2tnxTLfuzfr7ErMGAF9VsiFLiLr2ZniGHWNRVeAiuTiC2j613NX6LsdVb4wvv5t6Amwy"
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
