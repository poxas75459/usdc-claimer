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
    "5ebjtaQYWBTPM1dYTph6jC2hra6g6Rht5Wk8gneVK59XGw63iRcpWWr7xwsKN3yvioGAJDZXSbmJut48UFdwjA88"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46mNvsJVKSk8AW4TjPdsCLdZiG7uysayg9uYcLrjbxpuJLPtVxuFnx3FS6gWAvH5VmvjmcQB5H4G68uJEaVWpfS2",
  "key1": "MgT1zVaFwqP9gKx1N52pRPKtbUY7s72bksMv1ebPyTE1o6cMQqbaYDn2bHZaMSjsvhA3tsqsuckYbartHbdd5Jv",
  "key2": "5FFC7Z7fwu819GzRshWisetpGV3L61csVj43a5uKaEZnKVTbC1gXYZdCdbaU8coEQrjFvdEikmMt44vu1qAYKZ5d",
  "key3": "2UCFrgT748FakSF1JkXqwVy2U6DXLyTi5btPDwz4i1JxXm7mdUcfdqiTyR6ATjBN8gqi86Vgp8vUNVjffkLWvqd5",
  "key4": "512rRaK13PtfkCw17fBPeJ1Kcp7Ps3AWq1hBiK8WfR9MNuWyjBgUkSoifDBebvjxsF7cNTFhL3jEVdQMp6jYhaQU",
  "key5": "2TH8MJyRiWKHZq3UBdXqFDjQtu2a4Wb13DMmfmtL43S6fiBAsFjZxrXaxsGgZS1wGsVQFMkRZxHpVF3sCu4XCaau",
  "key6": "4UH7mATicMDGQxX35ATEZPaFboZqNPLVWi2dsvwWcygo9D81TJ9b8Q2yRMq7KKew75iGcLRdbPmbwMPKU92jeAPL",
  "key7": "6KmJFrShsf8YYtC1FbwYrvmKedLEuR4RBzMQQzDyXbQB16FBbjhpX5FbQxShdZ6vbwciK6zDatomXGh74FLh4iX",
  "key8": "npzY8VMV4xCB2soLGrFrKUTb8dRdmLVvHWeLxFHSELrLczpFpXd5gyk98t9ZvCYpb5BeNbwgGTGmiSAgAxyjG4m",
  "key9": "61Db2YSQkEPdcWmtTWvXnRwCgAxYTenjiHuww5ztV4so9dMK6oLutBwEv6YjgvV6DwVMUEYAt3KoG2ZzPhD33Lp6",
  "key10": "cFTqeo7CK8PjfiVAg3SByFb4GhgpfQHjtNQhVbNrxdKMxCvwRgdj2ZMcwVxmjw3Q5KFveHRd8Jyt4GhWyF5QSQ4",
  "key11": "2HMKNACXcqZoxkd5PuVuvEpceSoZCS7FCs3z3v61PXEK1CwTt6tFEE8EFZv1DnF1qaExfMEijWjwHFKwAb3KMj2v",
  "key12": "4WJXQFRjmkSTicgSDXZvaHBzLmFxJHq1srvrH42iVQmvbiXctBD6Nax5n7STepK6F4b99e1Z9eUcFqeokm8N2HDa",
  "key13": "38VeXMoS3JokTn9h7LRy5sGqT8TMB9YZfiRba25dyt83aV2AFasp1UmMw6DXLd91bekbSVoiEWhA3YvXDtMJ4kVY",
  "key14": "2hd8y2uLWnFK5xL7fM7eE52QrDd9f2hjJP7CZcxR9cwfCYynkc66W3VBXasfjkquP7MavNpUsbARSj78TkbUgY3Y",
  "key15": "4Er5BTmxZruX84NYY5jnDoKYVoxTNKkbuKcYU6xYppMj7t5nTJYZxFuGjFP87wfRtro2F3zXRLmXHVZdJ6MLc8y7",
  "key16": "3XVoCJqr2eaSTRZ9qDBrtB8xizgTVDSmYXC84XEECW8BtTajXu872VWLgxHqBvzn4mLbtdQ5peNDX5wzQaZbLetK",
  "key17": "NAttabQgbmtPae25nESaNNRm1BA5cHXyeJs8R4dvNJUh6QTK8jue7SyxhEMLsxH6idQcjKey46gCB55Fx2aSTrL",
  "key18": "4RuKqxEJ8v8zKYV7K9KyeyJeYBGwfo1nyGEdM7VCzzLuYGtS5Tnh4ZyoqvpcaTvbjEFJA2oVRRp1zP7nuaCteBKE",
  "key19": "4K4aSPs8rUy7qjqdwpFeVuB1gPxbSZoRB7x5TbzesWASJ7qTnXtms61wbi77ZpkqNGDapHaxqaEmmHXubtYzN1s",
  "key20": "4tnj9CsaPcbXahkksroyjNSZTP3TLDNE3HZ1QcnYcpfGrT6WGRj4wHkah3ngNW5d4vsiWYLjLuxX9YwUR3cLcUoC",
  "key21": "4g5zgQ7RR1KQ8Qke13AKkmp6HBJhtynZpcm8xRZDMGNf7V2u6TsrWaZDhmtdsCVxD14trJU8yES3NNqgacoks7w3",
  "key22": "4pLZQPKpE8gma1xky2vtXs5HE3KBQasKSsGifzgJADCK1xN7VfBee2c9McS5PbQxUmJh9E4Bq3YjEuPMVgLJctFq",
  "key23": "4K3dFXRDznHyZ1Hy9Z3T9oHjaUHyamuRGzimXDMgTHr95wgRE1So2jmZ3igK21Le1szSojRFyrTXh1Yr8dKQzyf5",
  "key24": "MMtkenqrh2g7odL7qp4fChnM1tx8cdeiVSiZqd7yKhC3z6sW6Xhy1RcFGwtqSv5R52UXU7GoeNgCuxx31RLzhHw",
  "key25": "4ER6TrZNMJ7k6eLzjYqfZ4VU5KUvFmCxouXaduoPM1hamrXfnrmhvXbWAEbb2fhJ1P7GSvAwRBCRjLoTFVzPanmj",
  "key26": "4cUg7vansYK5sNpNAAkiLvcgTk63aHYcMNLV1w88dbvHcqr1tJBuXsvGGPWTxJyg7nT7CAAWJw8xEJi4RttjZbzS",
  "key27": "4Qx78jsN1vESnMLHTKTyL32ScJrXwsAsEGVyMxh4LeG75r6s5XJotnQDye5giBerqqBW5cmJwfAE8saFbcxicJAr",
  "key28": "4Wz77jQtUcUDnTYq2B9zcZBF2o4dqaeKvbmukZCFZeZf866GpzHrSDTqmDRrKgdMEcPdrfbWqUEU38T2HxnrnzF3",
  "key29": "3uxeiuGjuYLKwqVXXWnp14wk69F6fHY8K35VDYuufzhrMHhVFgG4QqauR9xa4fefHn9GecVnd3gmbvQTABL58yte",
  "key30": "3hCTrn7eHMncArV6HqCQUna5ijwsZA68J2RAMxtjkoqd6PYKCypvJFUuYcTXZ7rsxxJAxEvEPb6oMrUJUduNgUMW",
  "key31": "238r3wiYYr9oBigwjJW6etqySJYncYGHb1DrvJDwcsQH94iSmWpfcmtTx9iD5jUPWX22VfFMLT9vH3Jqxxgn9aaY",
  "key32": "3qSycf8gNqiMBMbe24S1C6KkuiWQKDFbcmfZoczTQXDmMz5f9pJuSqUJXFzK6X9iHF5JScsDoVu6rEdVCcyPS99Q",
  "key33": "372aUAicGRQW3M2KUfEYMB2WjJ5yi4nKwcRPQn28dqAtFWh9ZY6tEoUjq2fpHMb3RoLWG8iaC1CLUCmUZLSTdZKZ",
  "key34": "Kntm9Kf48hKxCV3e7shNyWF3NRYbzXokK7Gog49R2quR7EVxkDybunM43pmPBoMJFadXQy2pEPCFKVoJbn9Nwer",
  "key35": "4SkgNrscuSQ4GajxvQ7ct3e3i6HbHJTMkUhwNcAJSLnCib51FfnUskkcPzR14vDmgudFTDqBHWxkDEHHfbGJrJt1",
  "key36": "3fSGZimLF6yvY7GbWx5JE61Bcx9LHtDGHFoHGayXDZRhpq8Y5b19uKc7tDuPwGjv6YbL8VgcVaqN63bnX1NVjPCY",
  "key37": "5R2xPwCWXQEuqpcBmg2iAHHj8a32YfYAGtmTySpwZegFXtmZ36J4nYzHiAvhGrfDRPienn4YKhu3VuBSujtQuP19",
  "key38": "4JyESE7JGncLcNzFKvJVuSsKSxsn71ZU9AU2SUkDbydp9LoGq9vfouoHDZZMoCftLWHuuzb7wrfyk5Uijz71Dceq",
  "key39": "24CyPRWR583263XhZXt3UU8uvS6YMtyWBc5AsxL8dqtwTfLGr9btr5Q9mVfowwPnNhxhPCsnhef11RLSCerKG864",
  "key40": "mAJnvSpG7tZxnySugafi9DfUGBY3sjD3QhkR4Gt96ongSZeWxtHQpPbe98kK1U2wBZAUqKo3dvYWYhTBe4cFV8Q",
  "key41": "5vSquqp5EXGWfNg6A1H79ei7GmKaxMxRCj6quoDzwN5uU7zinmAyfSdh7nzK2yMh64TEXewzRQrHxnYuCsXvwqJj",
  "key42": "5LVBm47ZEC8FdMp3syv7odUAwHmJtcoGsmQskoQW3KUAtswFbsWMWN8ytDeWHvLmHaJ7QB5kcWR5ie6BT3xTJjzK"
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
