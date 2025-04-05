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
    "3rrHjeGnvV7jWUF97c4SWeJYpbjzrh3VVCkSSkoH4oGLYqVyNpFvd5YskQcoonVAyVrnvjEUcTUvWjgvzdqAAX6x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gb8Z5eg6zsngxVfmyDziP3mSrWEveuPRFVV3usr276TWqHHSZXq15X2MQcsYqySEaybRUvvrdAt7A665nX9Hcgd",
  "key1": "5KTW3iFfVukR8d8euVnoPJjb2m35nZzG2q6LaF8dXCShpAythH21fwKbe3Z8rf5zh87x1Gc75rZsddPrToc4JyH9",
  "key2": "2SRUj3Bo5mFEZ9U8RhQHsdDMnqyrNXtqTVm5Dtm1QjNB36ERNtiV9CSJiLZyxLteJ6yCc79uEcdot4rWrhAxYa4F",
  "key3": "3njNo9QG3LzQXH6zWKUFA51v4aY9uakEx5cZ7w8mAzC1AJkX3DwyWUiALayLZHzAwZpDnXAsYYBzVzAimVi4nWFH",
  "key4": "2n3GTbNgdLP1A6WXAztFg7mqgah6jzHYb4jg7LvFHHFKinie5mEQ1oKKGTFNGj8LZneNEsFMwzcUWb9dXyZYZaeo",
  "key5": "2dAwdHu3hVWdoyTshm8pTdtuqREf4R8cYuHCkS9Mt89x4znZw2roiK4KiemD5vHUCnuYsmAW1sJ6QRTQwpVGaozY",
  "key6": "PitywBLA2CcdCLagvm96iu2JJ6mc7PSgH4tKeV44cEebS7Bn9nWVNCZpyRpjZwECbQaST4GfvJYwQjLPfbJviJj",
  "key7": "4FLgcbfkaCThyKsK3aQuJDSzSrS9Z2hMRYwWD9dU6DfBTPQYN6QhqRqmH95is6p859DwiJXcEoSLtTt5WtmHxzjx",
  "key8": "3Ffgm2ioZvBLwBeYEpiLEF6h6D43HVVWyUZs786fqeV78ccSNg9kDVzCEd9SQwUXGgyuoCEXxnXn2nsd7Ts4zTYg",
  "key9": "3F3wpD535pzhDzzKJQsJCuTB4aLo5Raxm8v5N1edvHUFHcot62mR2qmSfASGoikL7q7byQF11L6GSnN4gyUnhGYF",
  "key10": "21bjF9bE3uXLJN2DX3Cq9LuC1ev1P4cJgphr88HQmWMAGjNeWALtPyqat68qzTpS2nFzFmYNsupCrMk2Qj7WUiYn",
  "key11": "4jiM9ZvojbQfiit5CiDhtGJzPtq19WwmEW9mhm8v6PTN5QF4CdNz19vLnUTFAvp1GyCetUSCBY2wySAW9bBnGBiL",
  "key12": "4iHEyVrg2Crseo8zf1Jkh7jaG39vLgrAwu2Rn7bXXeGRekerA2s1Up38rsEFmutQcNoqGKYUBs6z4KUHRaFzKPvV",
  "key13": "4bk95qpidryRn3xsfsMDjrgMPSZRufeW3h2fahQTJvcyt6Dssk3iwZwcGSppSps8j2mT1Zz2x8cZGrS8iYAgMJ9f",
  "key14": "19v8BmJYZqXgmnSLuwBpkdd9WGMZAPKS9rsJ8WNEuEGv2Lp7wUiQzUfKLnUV1DR5k87oZt3CXsuhvFg4fWv87s6",
  "key15": "45xAgAF17K6b8JfBEk4btxn3Rc8wEVXscKcG55JRvDnUNwWvMtSdPyF1UBfTTD2nH8nsgzeZjtPzyV74Rk7JN4Ac",
  "key16": "24gt1nZySc3yikqRfvcX9s8WEg2SZRtrMqkbFJb1iaNzJiGTZUUaTqUF9z4tzsSRi5wsUbeEmDqzUnL91rPA8GBH",
  "key17": "5vUqb1wt5RAtvynxFCnocQSdxH1gSNcpapaFeURJXtyiV74aEmU5T66FAkAKJrtWrCGKb25omX4ruBAp8LgSXH8s",
  "key18": "2dcHcrYiyKPmqKxJimzEXAshNQ9haAZZDpTsEPVWptwH5LqUecubWeC3Mwy5q6nAf7hMWEAHH3WheAd2L3LidFjv",
  "key19": "3b9jnbWFUqiJjXgWnUjB35Xhe2KM8vYni4hynMJHp9wCUz89npJMDvHSkmp18SUooQYf8urmQecJEx6pAyay4ruE",
  "key20": "XZwr39sFnKEgmTKifi6nQ2aFw4LSUhdkG9u8YCh2aCdKQifYexYwWKH29NtbaXooBSSyeMxJn8CcRGuC4J8fZxm",
  "key21": "4cTSLx27saqDAdappQty7qpKz79s6rKgzS5VH5oE79ByEMuv3XFHN52eXsSw69DwiyAGWTP9isBBDpctTW8fLTPZ",
  "key22": "4knLcufh24hMiLwhrayB6qFn4LUr8WCZpaZ99A5rUc8jqFf2v8gvQFjJ4ptjyWFnK7cyKmvPnADCXsm6HE1CoXAU",
  "key23": "HCJ1HbT4af6WcYqSzazbEaFxBHuAMG2yPpwNG4P3EATksAMg3kvRJMo47iep914RuLG6TUmjUKbodhfEBMLuJdP",
  "key24": "3MjXAE7wmhKdiiiud7UjYdyHbfvsSQGhheRJXapzkC2C2fyEGvV2BsXoCfsh84ps6bsZwM3bKfXCpBDHRqcEbJJ6",
  "key25": "2UufifaVZQTSUnnA7VtwMvebKacELm9HvXzT3374pCB6TFUFiUXx27gFQsja3v47GYjmK9bbD87yADcGSUKBX2GD",
  "key26": "4PjHnDMKXy8aAHbUqBTgL6noLsNpnbEXezJom6FBt4LJb479WWtms2vCZiuuda772bfC379tMFnsv4yp1mj3yczH",
  "key27": "2KdpPiQVSmvx3ZcY4iXyKwBGAAH3E1ypBPCyntx6zz9r1ycHx1JeQ3y5SqQfVnNjCxtXGMcdasGzRJbWDsKSmcqR",
  "key28": "aiSFU5jwPRMAjsjxJpUBGeHQ3be1LSfgSbx2mTi1H8CTZ7d5rWRHDYQCFRpfAZU8jsw8d99i4Yuf2616r9KKY26",
  "key29": "qyAavRKUdn4GwG2F7QswJBs2LQt282sCNWRX8d36Q19m5Ve898u7q3A7MSDMVVmnWeZgSATemB4Hm3xNifRZRRJ",
  "key30": "fGXPSgSwQeLGJ7rdgyGgDRxbMrCNo3KgdiRxZYjEK75inrtb242yf5BV4qEcjt83NeYLKoNxzQUpeydHgShGBKc",
  "key31": "4XhGbophC6UiUd189xhrsCTnQxxvcGSZmjydNUqaoQVUJaHJ9EQSvSPg6E9jb4PgyFze8Zjs9jX9xf1UheVoAaZn",
  "key32": "65VzHasRT6o32GDtaht1k4eH3yrUyj4QnDDbWTrhFHLDX2gvE2y73A5D2Y3A3jkVpm9Hskof9Zx3WthgapwspeDu",
  "key33": "3dDKvHubSongqnXic2BAD8W3Qkn3xWX9BbqjKGp1DMcPTe2iDoYcDKqReY5KjdqqhndaxuppwJHyLk9Q7timrGzr",
  "key34": "epTC6P6jxzsZE4ohtsK23geWNvdS8YWGE1f9fwGVJ1G1eyPH2n7Y6UBRLo2FY8GvNVfYbWmJQi1mZsDW4z3k64A",
  "key35": "3YmiTYLhtDEerLq1AoikqiAFi6GB2nesBV2EbRLQUzt9NfhjZvum8mvJCBxNQQSPLkd3mgLRZP4TK6DhzyK5xZLV",
  "key36": "5LRgtXv99K8J5jzmgNpP6uPEuNbiwD8mNhaQNfUEMojTHYxdHCD2ABb6hyDgHnF9rUkPwSzE2NbaKhesQyNQYukZ",
  "key37": "4SbXfaVtmac8TdpUFS43kPc8Efha7RxwUzmBUjNAaGwjPzaSLW6f5x1C5CQFevhAy7Xkq9Xa65QLfte6vCkAqA2A",
  "key38": "5c6KPHERjetiddHcQVC4yXiGoc35DJaUJ2HAng5BdwEsvyoxzBdwySsU7JyRdeHNtQLZCcRKpj8vcLwjmA1XscJC",
  "key39": "jwyeZR1FJ9sf8H13hgK7abeS9Dd7o41ydaCupvgUb7vDo4a5fFEs6uL3gZoakKL2A9LNpDdGKkaX7SDBGHzNXMj",
  "key40": "2xEQdaW1RfndKyxL7N91HgbsbV4G2Pzh5Suvfzb9875X1qdfZ65BqywCM19Noyv7KkCXVSvxHXm15RA5f5WWkXuX",
  "key41": "2Lcmf82dXF2EHvg9XHPuexq9HBp5s8yP3RTqa1ftbPfTna17bYmRdH9eYg7F75aANQGs5Aj95Zz6wPuDrqXL7CNL",
  "key42": "ngAG5ecuQPyM34uDDfrDCZHFTSbzEdQfMZdkHrw4rTz1ZzMGFskvuzKQ5tDEvzJXxPwWNL68hUHjwiZvJ1e6zfW",
  "key43": "36iSP6pckz7PP7EmGfKj4xAoSciDG53qXr2iKCy6ASfjzn92LXt8uj4QAL747KDeZ2uHTp8WWujcsv1dV27bqmrW",
  "key44": "4Xyfxtm1KX3axMu7qKNpNPTj7vxdiXR6u2cncAEBmFsZq2yJFkM11sHKbevd4Wcv1AhWFzziyJ3rkeV9nL5FM1SZ",
  "key45": "FZw1yLN4MEPspgqoSZKvxt6gj6DsA1yu6pQGPsnSWtBD5uhtcPxSr6bLZkgiJ8K1UW1fnrEwXsvSsXwjsh5oLSa",
  "key46": "4D3r8irv6sgKFra8oCScyjYreV26rEND8LcenP2bnEXWuoJkRkj94KN7PTQVnGo88JQtLJVMZa8wyHesgMpFC2Bn",
  "key47": "4cYthCjMM2sZrnPWzB3MugMzYepXHSg9QfWbxSW8Nkbv7gEmWb4nSa7gSfm9a6DHbw5wUMVzkkSXCXbb74UjQEC7",
  "key48": "57PU3Bkn3uqG857Jow11HmXZxQypy5PPTjG8KaNCaL4VSsBsVfBMtHjftNhkumTpZaakAmJNSvczoLQ26kJoFyrF"
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
