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
    "q7dEsTWDePz6cV7vdELV2fYJNziN4bRRHcjsmWxwvVEYe7MN3rRLoFAuW5eqLjPwG2DtHvjRaNRfadSkcZbHUrU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uJRkhYMeswEkXFcA4umi9gvGxppHTmYyhCvdc6TuoZM59ASxfpFKN48SwcyaQ9pApJ6LZkxcZtJE3zS3ZDKwhtq",
  "key1": "2NhEopEwRn4e179A1juR5nwkMnrh9xNUghjASMCjbE1kWurrXk7iJpZXrG4GKm2zrpQ8XY2iMJTbN6AqjdKLXhx9",
  "key2": "27Cc8pzUjwVm1cT75owVktaw9KgqWpw2bm9WLKbUFyZFDvMtHSN7a8zAVopWsft1Nhb9d3Db14P8hfJa5KPSQXhS",
  "key3": "4GmphmuFQQ7eK6HU2zU6kqNgvZx5pUzNJzhpemFYTXTMpfE7CjHZqUWSXKifwb3Urj1rzC3nyg6KxZZHX49iU1Jt",
  "key4": "4DLadLx1gkLT3c9Qr6MT2W1D4F2aNRayLCDQu4ZB94EZA5atGfUc1vLD5u6yikVFX5MENfxjcuV5cu8wN76ib5Z1",
  "key5": "3uj9DJgmVkX4rDp5Q7oC3w9zALe2xskKBM8hWCzTBRXfUUFfPLQK15S2HNbC3kzUmJiUnjJVj4d5WjpxAy82bqe5",
  "key6": "mPwyVJDZURctQZrHvCuDV3HoN3pyDMD1i8GjmeEbNGVq41BdP9ZcNw4tcoGfvdqkNQDh8rbbfrouPf8Fnib3Ceh",
  "key7": "TsDoVYoJ43LYPhJ3f6kyKLn13ZmjKsnNHBan3rcZMXX1sTSUBYPBm6Rbff3c6epTHvLRszXwj3juRTzCDLnPHnE",
  "key8": "4G5gANh5wWNDDZsDJ6EcXoF6Uvo655XkpymFYE2pJ4VjpyJYT3iBsaXNmDYB8NbWhNeKb4b3ni8nWKwjxUVNuH2L",
  "key9": "2hrUZzB2oUkQkJzDCctjJ8HDsmExBK9DWGZPsCBJ5PkBDDW39Pxn1bvHbf6FRxJPvgM5T4ivd6eGSP1aoAeyJtzL",
  "key10": "3ggq11QDkALGDWu5B2C79GHvjrNfN6HpnZPp66AgDWrFgw7fPRShe1P5PVH4ng9Za5sajXw6r6MzDFuSH71vnn1P",
  "key11": "2qe6NzQCHzA4Kv2uoU61SHcUhbi9EBYUS2oKd3k5h9bcuwkYJTzghJnFYz91m73vATu9zAtLMkBdfgQVuB8FEEg9",
  "key12": "3kND7CWrh12oyiUyzSUtVYnEbXFtNiCjxwaDXfdjWmtiVMz2eGE5d83Rv1BkYWzgfKJ4J6BecKbHGD2JHa6D8gUW",
  "key13": "3oJTCAAJnGJ7YNLnQMrd8ewxU7nHfSW3KiR34hhjAZavDERFDZrsfzMTNxfNJt57QPeYFTkVg5Qh1huiQHUxfANK",
  "key14": "jKr2kugdgvZTQHp7jabLo6YS5aFL8G2abPaKCFvPrEX1VrCct2JT8wPddXUo56HUFoDMRy4wybiGV2BBUNuyTK1",
  "key15": "3jrFCm9pjubbURwYWdmRUXZeQ1KPZSk9cyc2fMWZsPBZ5mx82kSYMfHpfpxJ4nC8dj4J5oYk52bbSMev8jNiauGc",
  "key16": "aFpPsroki2FWnuemFUrxKwCkZ8MMQUSUpxBBeY2ohYwpQwLQGeb7JoD31m4gsF9LLznx9JKM71TTWKXxi6Fxp3W",
  "key17": "hzAg52ZgyuCTQYhF5WwArpHJXuw9arYJqMuTGzLTLFSSVRRs4WcJZCXTg8QTZNNm9Fs3NcWtK3YjLNnHJxYdCjn",
  "key18": "2fPpNCZcUK7xZZsV24Xg8xpNvu3MswvSrov89gvQojV9oMzETQ11TdsjCFETxnkQL8Fuo599Xi99T8xTsjx7Goo2",
  "key19": "5aGiW6TPF1QMC7aX9zKJsQsUsD3SPFdoy3iRHQfi6GEC8vPAW9SbtF5UQGdYb8Cw7abNTuPfNbJCFm1j9xoCrN1o",
  "key20": "XPNdNTREtzjkMBsEs5H1wCoKx5d44wK3UsZKv5rxg9ayqSrxaZT9t3cgn9qwGshXYxjP234Gb8dBZ3nH3Fhbu3q",
  "key21": "5ARHMK1DVqzYkZ8MHiw749uy84pKkfibLBkCCuJvQaQUnKyZrKZdeMzauFVTDiSGCxF1wQjdJUS3A9gyxuPAujDy",
  "key22": "fHgmtzqAAqPjmC1KJerWDM9HRrWYqg1jLxJ1r6xPx4kzucLPSrEsEeYh9dVDrtNVT7kRLCZnjdCFwqtinUyjqy4",
  "key23": "2MzFMiivDzS59HQt2aqCG3EtJTyYR8CtjHxXAx6BYkL1n5CdmeCJ1kCjQWmZvrTaa9gj5nRuqiaec6RYp5Ay5X9d",
  "key24": "4LYBoqwRD5rSprzczyBtouhrduqt6yvsG6enPh2jNS2RYNYnE39Xcx4uM2NwMjAqXM7NKGVv8jidA98vazrDXSUq",
  "key25": "391NxxLBAobTC4Yg4ymYWXEhAuFQm3Git6MdmxRjy6s8QWpku1EAKX8uC7J8RpC3PA1xyAfhCgzwYd5Ayvudx2Q1",
  "key26": "BVEqANVm3fJaTjBGsFpWoJ4U7p2HSx62StgJY7J5PYDAFHFeGTjU6vvYzg5vdFDpAPWunJrYnavrJRa6eDmn2CV",
  "key27": "4jSBL9rKmPcGTqPu7Tyw2yTxxEVRPMNLqubZXYuAZyFVd9PEaLbA2fZqh6gKA1dsuDrxeKcAmsNYL99hMozqnjBo",
  "key28": "5vRQoVpR7Joadgmgu1EyjowxWSiWexgf6djL6ahsq9zDLL9XKKpUxBusLschGmkXwbEitdEFyxxjYxAXDUwF5tTd",
  "key29": "63VrmodfDdfC9q3odsLdhfUbdKR68aiqXXzmEuJavAopN5f9NT3fF9YskiTuxDmouXMg5PCs1bMo3B1jbG2Ly77E",
  "key30": "3bU1DUZYyA3CS9XefhNVxJdPjNRsurNPgXG5XLuCbApn7GmgdrTY76dpX3TvHbLBXVTr9qhc1d2dwN3Xe96WKtzN",
  "key31": "2Nja8gaFXhiyUXKcvAsXDzGgrBgXahQCcaA6Nzk1CGtcq4bGSaMb4VzKn33YuxcEBVfJFSrbVi5EoSk9PHMSD7TN",
  "key32": "64a7a89gZRjiGUA7TzWSV6vAuTnodZaQQGPpRTbDHZ9GDHAp5Wzu3Zmbtkx96Tep9Wq5MhHbxhsjDUyDeVm2Jcsy",
  "key33": "3pLqLw93ymAUnsG1mN9wHb8sTbU2g5rvL2AbQQ8LUgFJqq5sRvLsL1WTW3o8JjqwXbEuZXmaTD2pVineZPhMkT1H",
  "key34": "7ApUMsczX9UnXir4zn6WqQcR7CMKvXBNgFki5SiWqwHizzSUhPnYXuecA5wJ1koKphtaWqg18UmmpNcVhL55y67",
  "key35": "2D4wnh2YakLUQFnU8CERyavG4R6QoywiuBmBNEaXcai4E7xoFcerCdkWjxERH1d2T5LczU94HLnYwCNefQ3MA5FU",
  "key36": "3bXcBQStRRkVajduS4ndtw4Az2WjK184eqEBCHfkckWmmkgKcHbyGfCeXuE1uiViL7YmgKHcMsYWTCBJChGNEXgS",
  "key37": "4rnwWPTR4pTUqJsBUvXY2NGiF5smBzDvjpGHLReszfxXXWGu8cdMnwi64gSfYmmzPJR5RrJ4FUi54hTFWBA7PNwR",
  "key38": "2C63FKhmpL2Wg9TyiMGPesaZXgvUJ5SB8RhzSeGoagRiyYTYyt5NFoNkjgtDniB77q3ktPtkfft4x7dszaEty6Pg",
  "key39": "3Vezj4NoHUWeaKaDwhJwmJNXSyaL6r8r8hqA181EWZmhdFSjjmCscfwfEYUaKKNRLRKo44RHFjBBJxxVFPjrV5zS",
  "key40": "47fvJzsSD84SNrFq27AX7QJjFQBzNb2gm6zZA5SuygqALSRn1u5DWvnnVxceaPevLVv8zNgcArJyMMcMWkfgVEs4",
  "key41": "4r7ePWqBr9xvrVbRy7xZUMQ5zzShLcq96h1uvevh4PukxyG62wUKZZAKo1JAsssxfdJmthsQwymmxyNHdb2ZmH3w",
  "key42": "39LvjyXtoS2JmHXA8ZA97eqCR9QxrJa5xDboDkSjHHhAysPsv22iZFTSb3GZPcyq6wRxYMxupC4QGFy7gFNsNUCr",
  "key43": "4Lfbt47UNYutkBE7EsC45HueyWYkLd3b1z4o88dvLBLbgpjnrgTA4wUTJ9n1n8Sof2ecH2aB4qTfq3nDPJ2hcqgR"
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
