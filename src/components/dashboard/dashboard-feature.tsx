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
    "5uRoeCupin4DfQf4eoAK9hfbAdbYxxTTHFoSds8GUpkhD6NE93yWZiAjWuB8TJddUH4D6VbCpEtQYmkGfeSNcpnk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "544RsdGPdMSbfHvxUGjZjZMrt1xpFL9ZCn3uWU3QKw586g3uMrj4rUAMH3Kxhk7s8vytj3fS64UYVqcGMNN6gcdT",
  "key1": "5CVvKHd3AYuD63CYPFvznouWfdJpamz36u7Tre87VXZDPbn9kfKPCZK4aet4JCFEwjFjfAWJ3wHWLK2VX8c4nYK8",
  "key2": "3mzmgtaYv7Conxu4VWtHPGVwtmyXtBoF2mqUmt9B7QGtqTEZURmvhcadd8QJ36KJdJxZECcEXXBtsoMX3QD5mHg7",
  "key3": "5ay5YSy3XCfPhi92A5thTdxcAKsM5VR8cLebfLZcykQGKnoHZUSbB3iSrp6vLpuzJLEyizbMB3FRwb9ncsPpJkyp",
  "key4": "2E7JZy9nigbVFM8kGCHKugSY86GW4CPef9KxM4FTtjzt3TVggd2LDpkUu8SSr62C31UkdmQ8HMGSEmbkdCayjsAf",
  "key5": "33JqZtDDpbrXV1WAvap3HzKaWoPsw7jNq6yEUWc34mcEPKEeFSwPQ45p79auxV17kvSJRXNog5pVSE6utJfKrSio",
  "key6": "4sc9odwtM6WmLEVoKq3kFLvisRv3GK7bLyXF8pfLRxeAMNg9r8tFRhK9xrWeweD2h3Tc6PpXfESaBjePP49VnJja",
  "key7": "D7MQ67pSsTjMUU4Zmk3HwjP552J9BNnbSAodhxJR2TM553FwoBXLUUtZKnAw3XEzrrwJwWq5AGNTY6XaWJrXCrw",
  "key8": "3PWgj69yDp5jrVjJVX2fXnfhbsTW7UV5gACTRooZweU461pSopubRrWsBWroWPr7FxpsWffDFTzp2oQ8W975ULXN",
  "key9": "4HDfgPbFfGMGzviBy4uBLdnw4wyH2DqHnagYDnX5aJGupd2uVF66UGfiHD7oNSrHxFZdyxDHFP4iwPDmUkiDvhoA",
  "key10": "4xmJjKaBKrGyWffXheKdsXAm3o7FVCqUgyCj5oK5Shf5DVc8aBjYiagp1Uo5mWdyyyKpY3etCGuM4WYoSVTBaqaN",
  "key11": "2Vr8cr8NguZZoPm1zygbDHNDibS7xSFjbjzoV6EL77eUzbb5BJfhgGUmpbBXtzG3h9tQSumNLZfU33DamSa3r2ax",
  "key12": "4E59gwo2tBvyoT3ZzXmpK78qrZYSxADgd3Ck4hpoRU1DaeVJpmt15pxF5AbYvHFK66ri3E4LTFHgCKHhiyPKiq3V",
  "key13": "6358HFzW4dagHqoDxbPWa3ncDsh3759Socbh6UoNzvAgRBsSGGT1FUKsa4NR9mFiuzetYj5hwi6FMCz53FmN6bbv",
  "key14": "QLEXd7QSpJfNUjovgrYwF63nUh8D8KuAyTxyTimL6iWBWeFyXkhkpmb2oHMVpjpRDF9aZU5QvCFkJAqAkonEjgt",
  "key15": "52dcZ2KVMg4RyhiFLWMgcAEmTyjmp8hJYGkpzLXa8SY1JPfdwVrXHFuthxwvSBaZuopQyPSTKVobfykYvRB5ydDK",
  "key16": "3Kfqa4NLx3kknJxuGAguWawNVHWkPXXcUEd8danvibGmNM9BKCifLYwxcJ4FtrX7UiUWeDsCGB5kfXgmtdscW4pM",
  "key17": "5HBwaXG83tte3HBuuEDNUP5Dtvs6XVpR5gigiUBKziqB2tFfEcSn4Tk3XSLAXTXXmkmoe59zfPJJ5XmVGaYm47N9",
  "key18": "4YCDKUApKQ1nMD42zEsr92AKxv1rRfMM7YJjRWbDMknT2urMuaWALZtZkHxcYVCAynUNxSoqQkwu9b4XWQLLeVbZ",
  "key19": "2K2FjXZA8hxDa15sTaGSLfDauVfEQ6hcbASCQbtzTCoy9h9U95eLNGfn9qngFhX2ZEFnDxpjW3rtq7k2tsQTwxmU",
  "key20": "4cEVxHvJNLuW2JJ7gQsHkoh8Wg8LREVPrzX5aD688SyKq1mNqTsjNBeJH3ecQWR4diBGvmYYKxsUrpEY9or3Kwn3",
  "key21": "3tfidy8CWr3yfDS2sDyY7skoPN1LnuivFTRNosuq5tV7keauVas5viDYKfs4V73majztKu8v28HAig4P5j98L7dD",
  "key22": "3JUHiPNRC9gLKynF2CERYnDYxDuDiDxATnvohToRqiRLrJUU1Qg5dQnFtaFg4bBoeiyPCDn2KXorENKpsjNBowsL",
  "key23": "33CQ9bQx7R98z2dQhg1QRW7qqPkbkA4Jo9FkK8qJqioAcfL4La49J4jddYPS43HnbsWNCDjfvfiam1yCrabYuFLD",
  "key24": "38duy8nnUjHiPLueF18mJw2qwDGJfwuNYh4Fged5hyab22qWxbHXe8dYRFjb1mi5mjXzUtcJFpQbUXdQi2KG3qqV",
  "key25": "37ntN5ZrrSrWvZwYACRyxW4f9h8jfGUDgQKypkS2mpkLydmvDGx65mgEPTx19nkR2ZVCkaCZUWYGTBbjueKy97Ud",
  "key26": "B4GCqT4WkUkvEi2Nmd9Mjs7rMeRaTgJ3yVTPytEeWDCJ1md5QRpBXiBGbrGQcP1UUXBxKH4QWgdzb6CsY2vnJXr",
  "key27": "M7NLdAE9KNkdM63adJxL13gj5h5yEd6rgStpqCNrfarctBKyjiXetSjv1VWSLCavA5gUszSKTJSEjhomndh5QsB",
  "key28": "3DA19gHVf4mhbykLjiUDzQzKskspaL72Ex3URSbb4DVmPcXVr3Gbhob5CjwLq7fPrtbEcT99H2XRSYcMSGcHnYZf",
  "key29": "4FrDC6BD1dJCpAyR938Dk4PC4NV2XkaVPJ9B54hefbxekK9ynhVSXmE1Qj9uNQxb4yi27FrwVcY2hozxxb4BPiLp",
  "key30": "5zhQGB8XAXpT179qtbPufthTHY66xFSrtQkh2fFk5UuryuHuKJ4XqesFvweexzFA31Dxyz7V7smHGYSe6m2FSrA1",
  "key31": "2a6tu4MAedna4GuvYduH5xDZ2mUwvNtPf8AuKCmk6x5PpnnoC8g2mwarUXSNU86fW2BTcWj5hoLwDmyMk7wssfdV",
  "key32": "4QbH5gFgeou828iLkgkbyvbqmRS935yNPmAfJW87chaATdjNGpwF3KQsiB2f7z7z5WULM9uCgbxxXDnw2AWijrFJ",
  "key33": "z7shvKQfrfXUw8KipZTSTkE3fBeeDA9hV4SNhE6fx8tqyRQNGsXWty3ZEM8Aph9LdT3cssNo1uU9JPpTaGdW7UY",
  "key34": "5NRRLmoRpBEEcivULBqsYtwqStgT8QdTCkZWjTyUXCh56TAbVQ72Yd9KduDyf5C1UbA79vUyemnQgArVAPgqnaYj",
  "key35": "2WF9rzeht9AV2txpoUWPAtngAjZCvB1boU7rW1wYPpwRcQguCG8vcygAAbRuSkGczDcBewkNmtdqv61MsGhRFmLH",
  "key36": "4ycWnT72qVV8Ra7DEcS1K7Z5NeBuhqhiAVK7ho6Uo6fFn4f31AWMAigU43pnwvSMaegCjcTib4deeKBnkX6hgUBH",
  "key37": "3KnwSmw69o1AtEf8u4x24XwGxNJwQLCgdP2tfuX4Frc4ibbTKNruaDr6Zr51kLsMiWsxrT5cUYhi4wpBR4gFBFUp",
  "key38": "3RqawQeaEwKTNzicJBG66xkAx47Zp7jtsD28su517nvyPvJeqCQd1ZsZx1jj27CKzcYf6JHT8b4UFFpXcXEocjc7",
  "key39": "pjmyMcYnxejJhimRaZncquRZJzg4HPvd6Pd5L3xcQk5HAvrZY1DjVDtUQwDdNqgfNMmRVSaVR4wh8TCQCeSPQkN"
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
