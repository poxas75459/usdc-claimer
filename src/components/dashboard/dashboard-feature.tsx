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
    "4uq7RXantjNsxgjj4ss5Zg9APnqsEbAJtzLmr24Gk1FcjcdeGZTTS1wsbMCvaVmHnWhfCGMZ7kokDQ9WQv6iGLXM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "siRnUNf1KcqcLC8pioQSXx6bVX2AenwPCzcGo8aSJqXPKnXBTaabsA48TB1xgBeLM4bNmA2QDsJu8rsFbKXtBvj",
  "key1": "4TvJH3XmwCJoQgpeePTmYmtrRw8CYGeFhRfbwhegQthePYf5geeLqTmtRHKU9UEVBP2yDN5B1GSH9kY9JJHLzS2n",
  "key2": "3uM2yrvZp2i86n3yJqmkhZtkmXzHaBqTEw6TUv14trLRk5cCzksubpYE9vwr3vTgyyadLh1mZoFZueHYefQQT7aa",
  "key3": "3pEVHgkXQdbdRBqgtURsCmn1RdcsxGNdXsjiNerDnpt89xstB9J3XmmLsHFxhffADrJjJh3oFWYwo1EeauqzGPxj",
  "key4": "2xCwQeE67J9YG58DrTR5DhVvzNCmhpgytSpjeWzbCqvXxq7hMnKTnEvVYgBvVNEDvJGfBLhiyXfzc3nZW5XX9SdW",
  "key5": "3cvZpuEtmE9sgXcgJVcpXtsbunHkkc4T9g2Y7eo9nQwVyfpqpfpedJrAkjJhdVpGHDXGPXc4G9UNq7Heb85G3eqN",
  "key6": "2woU1e4dm7WftgYQzWdMuARU78SBtt8HP2cr5AePZThLPbxD8Ku2RAoMyhLd48NWi1RZWTi8AkoradoUNbi4wTHG",
  "key7": "2kMk2ZFoeZpnefwwdQcNuLQDMEfeoJfZtvgPHq3gPtWhQSfE4jnohCqRDiqeEhT3ViC2Z8mST2cUWNgAWJLrzhcV",
  "key8": "5SPWXUU8WUqsy1VHT1WDQAGqKwn8kTdixZTbsbcNFRPiwrrSQkjxJjB2BU7YN1uwLffqMTtuQsFqu5GZ4SoNErbX",
  "key9": "i1BrD4eYDWEqVPfSMGAouhGL7KuMvcajH9mq1UYTh348WkbXKeZLXzuX3Z2Zw1AQL3KbbvfU1bQjrpEn5HzqTkQ",
  "key10": "647G2FKcj7iKmtRYY5WgL2PEZaoLeLKHzAC3Zdjwxv1WPfxJQUdHZhT1Dx1rCss86RKJLKTGwVpBSd8srSz6YodV",
  "key11": "5jF5ZKqfPgHFijs6KqW7UwoV4U8PK96DX2PmtUauuS11zAaRNjsv7iaGqrw1Y1F22wy5UhSV48kXU9CimyvhweVt",
  "key12": "yTW11Nhybqv9v8MTDff5Nycs3W9CpjQFZhYA8aY3rf2TsifV9wChwccYWcTAezCH8qYX1y9YqcQDHe8yoKeQoYB",
  "key13": "5zQa9YfeF8rP5H2QeNRNfY8DdpeVzawiAsVNTs3pZwMRLH5ZCB38t1bdn4EFhyDZYeH8bT6E2jMoDqvXmWbYuajP",
  "key14": "aWeBrPfp4QB4RdGBdbRioDSsZT6UavHoshcV3KAxPBfSN8tUEwKU2j5HJgt7T14kHpJM7k8FP5SJA5KDF4mFik5",
  "key15": "5rRdj7tovyv3TA4eML9CvtTJfuLuvpbA8SXfmHfiAqsSpTS76tkTBmQUnCv2dr3mGwRbsYSfcquFA4MHP697Q9ra",
  "key16": "5C8ECWbmnofBbukXPRyZ88UJJ7HB1x3Fw7AYXFVhh515chr7QJRZ12xaBNRHdQkJ77N3cuWQ6XaEPpyzg3X7h8eR",
  "key17": "4gUC9Q1dnsvwrk6R3mea6yco231gboKJLgtMagzLgJAfYjfP4Pf59b3u4kxYjjT7eqQnCTCCT4h8sNG5ANTyfgxo",
  "key18": "5eiRdgSC5My3UjHzMnS95BnCaKRNamhjdgmMp7hWVkbfa75js8XuDCdP2fyTGJvpT4WFtYDY6aPfTLqs56Qdvx7H",
  "key19": "3TSJK2AayqNqY8HE8j7VbegZ8APEDPhEEK2uXuvLZZ6XRrqFb376d6DVqbwfHnJ3winGHopNADh7nsWVub73AVbM",
  "key20": "S3jJn3j2a723vedgNahEVa64p9TWPd2RphuoRtf2fjEsikNnY6UBuEGpjgA6RKQ269NpLuA4gUDsaeGq2TreD8X",
  "key21": "2YNtJVDmLRgyfZbtPqKpBtb1QsPLnGCYkYQpkYV6rqiXZPXoiUCLrdu752jusFfQbZYFmcxn7mAuVXdY1GyPDEH8",
  "key22": "3k2BvpStpwHwt3Wge54uViBzCaZYfnXvNzX5Bei1hxxmQsH4nRkdZ88YwHR812bEwUwrKtQshz2WCYBW5bNe16gN",
  "key23": "4HLdswDAjicifQ7ZqVZDC3HcnPyKqFibunG8U2mpd1ZYV5V6SmJsR2km5DK6FiBjYvoTuFCsDALxXdFMmsZEdayn",
  "key24": "41sppG2xbCRacdL1RH1BpuYwKSmLaHQd2H7nBLSLQxsubJxBErozR6rVmnjJTx7kNHvoMM67zHoKoknJ6cBx7JqK",
  "key25": "vv45Sy2A5a74j9GCy5W3tJwCTQfKY64ocJAeTje32Aia5BT1SNHgVXqE6QB9PD5H27gea5choNVu69mYdRhhFVh",
  "key26": "3ygAeCpnD34eoJf2f4BRuBbKBHEHy3sNyXv27qJcT7Kf6xDimKhpvDpbhaEBLy6nwfkXB8bU3CRtRE7oCXgVDbAw",
  "key27": "2L86sQjeVM5CuJVFLiJYyPLdAPhWVHcEHJmtDMGVqEHtxhLY5ExtxAwgjTVFuDYTfZb8i3YTmntjK4KEzwWRvFpV",
  "key28": "5xcnjzdRgGYn7tsHqLnp1RgjY8e5ZuYt1SBDf4CwPmdweQfvnM1KCKXtNjCe3fzkxudRAZAJf6sXi9rQy4DBpVyr",
  "key29": "4FpcrNio2tzQmrnRQEkejQnGhdW4hszS775BL8XYA314mTamQnNbKumF5hC28UKnwGtYK8z2k7tbj8huagWeN9Ap",
  "key30": "zuupbWn38PzMtGdCzyfy1ZyWrTvKyhG8tiBF1UcF3D2kEz5sGT18abGTkpS6aYTRVHe5rLfe7RAsjAURjxHe3ti",
  "key31": "355PUJzJy6eRyfHSGhEjAjBG5tgBaBcyg8QFm2m6dbSWV619WSrHhn3idrsUJqXY7duChC9owvD9VwtFBzuuYPoU",
  "key32": "fMAGTBJ7YZbqgpvWiYLTgKsrwM8eNefkPXJY7EafUEdoc6gAvduUzRuF372QvDKp95Q61eu8R5ajUd7ZREsCAj7",
  "key33": "5jWkkhWe7CDUmRostt1Pe68skYZVMCcnmkFPVEuTVK8ihdDkztU5tE63uErBGKjYtQ5PkUPcuPDPZ4PuowwcmLTa",
  "key34": "4vLPgv6xEgeiMcQhv39GTpA2o5Hq4c6mwSLXzDLUnmnyMjxrD4QPxRX1CNEMV1Siqt8AYnV3egpJ4PFvCucuiKLu",
  "key35": "WDZKyQGHQm8kLadyihgPa1Dh2NA5XMtY9VwjXok8aaPUTj6H2Mu2sDZAcavk9u8WaGwVBm18pCupiZ2PFm3VTox",
  "key36": "zimZpWhRDSqz43YStLXUAXrXjd3MYrTS4byqL489vRFy89c3UL9Fg9zHE9br5VM6BKSD3J3nwsZ4iZiq8vNa2Ax",
  "key37": "uAZVUWL4gtrj3KyfQ5Vv9mKKv6jHG9m4qzfJfn4ggk5rPna4hWAorxcyAdwdL9tTFBDKiEjAb1Gn62bMNvaBP9n",
  "key38": "3bPyjQumcYG99aYLXKvxzy8Wvw9mYr5CmbP5zC1j9WtnUYvga63AHqFpXr2qb7FW9VJrgkuVJrNxzZHueUScp5wU",
  "key39": "38LYuzZyK3dhXrzKJGeehLsFiagbsPsjkBnn7G5KbQJUHhoMcfH9eX7qt9w4fVk2Yq4rX5fejJtRNNmUhc6B2Ypu",
  "key40": "5szwGVLMr3TB2rDwEJF1j6hRSBjdmTc4guPJnU5TMDnisrTHDwEqA2oGra5XhXtbdPFqcS3ighoAWpe8WKxgPZRW",
  "key41": "2K5f7YgWxVtQZYt1NqYFE3ZnyKVYyPBRbEmcCjVUvfugH4zZnYRmiwx8AXMZaZvVTRdjTH7Skt5iD1sVVVpPYE2n",
  "key42": "4F9U7FBAXEzGJj148jem1DKHu8Q3vPz2cpJSmK5AQe1wNQzC3KieNVnv6byoU43TwaPiLJePUXVoyBF5VAJBMJig",
  "key43": "4nRFAqMwhjaZYfRCR6eKd9UgyxcsweaR7972EVruUrZxugEvbtcBHnUQcU4jv2dQDRED9dWjRg8QuQmq5zo5g6qQ",
  "key44": "2wxEtxJBJ4qSDdKMiebTG2yFmrJJJACieMDpZVc44s5zCFg7Q9pJ8wBUFzvo5uemgNToW9XwRY6BXZowziyQHoz"
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
