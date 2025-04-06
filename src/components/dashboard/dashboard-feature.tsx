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
    "5ckthbvq3iq1bjjtshe9whyLMdVMm75DhkSdVdcVAfzCr3cvfEuRYbXFdDnGgAChukxu7c4FquczY4WJ8YcHE1gM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mJC617zeAXNnBQ7C1HoLGHmeEcCFUHDbzh8GH9nJbPdXJX9o9XXSaQ5UGTsaQYvk9EVv5CqSuBnaZm2m3XhDvSR",
  "key1": "4STmNdqxHmquonZsDrbm7tskrDQoypWjJ5SL3nez8z4zvEAuB4Uo3BKPFsLf1MYeDmatdi7chxMdsP9dKShRr2Je",
  "key2": "dVHvVJLcwqhyqcRPmCXLUc62fNy4ttfkV8HiL78MEwmyvHhVf6cAiSjM72fiFBDm2qSqbVdvgxDph1BoFCVfoHR",
  "key3": "3HcAQ23a5yCXB4tVGA5iTwvLmxMc7CCa2vZ4gMvriFQxmMwYoqaFqDTmJhe5ot9bt159jzFGFudPqJPRHFzkkmYi",
  "key4": "MN6RrAiAxmrXSKbyk8s8U9KL5Ei3qwVh1MsKjQDTB6VZ9cyJFUuWi3PC2FxsotPGZCFfAx8LsTPqwQsQ3FWruE4",
  "key5": "5w7NHdrRrdw8kb7cMry1BueEMCr4D9PXzxfkq3scEWcx6RJniG7Ka6jiMs6gWCxm6Dr6jMpiuUNqimzwWffxVkyD",
  "key6": "4XUnJBCHvJwNGd3ei8Zf1qmtKQ3JgT7e1pXNCZgLaTikc631wkXza6XDfDe4Dtr3kHgEij4brzPvc2HmzWPhZSK1",
  "key7": "4MngtrnAZu6MtSyDou2jVQv85pGGCDwXKwrqatKYQK31H8wVPcFg77CkDuvRUu7qo9mhGrkLgw2RZY3WEhBnPFTd",
  "key8": "4TicGavLrDWY2eL7acGKto2U5LvPurJbVBJV8rKb9kseLGed6yd6wEHvFCcXvu9f7hsJM4B1L7Nq72wQeijtvuRT",
  "key9": "3d2wY93vMDZsp3watwMLuPNuziiF5rYEMwAypHeEzMjDoT74Ez5sjfR7xWoHUneNPa8vzA4M7A46JteZoHoRpRe9",
  "key10": "66NJQRtHtm746TRx2rSJPhwraRHNfuyCoG7vn87NcBpp9FSULeevbAR2dRH1akrDwxmz91e5zTiffCsS19qG5MiV",
  "key11": "xEsXCEFfVnR9YxoREbkKww9LrAdHjFgj8s65w2GmiwkzvpaYL7LUWmNodGJMTLfpUyk7gWVMfabuPuU9odKLEoP",
  "key12": "3iYXjF3LzTPxf7Vb2sm4JmngRFe6kFCasGfdka89TkQ6uLdGB83CKya2gytiDDUhsNVu8j44nn7JEjsoUPVLqyjk",
  "key13": "4kbZCarJQrzUNpmM53Yxc411vb54BUzKEbYicCYvsJ3pg3Jvy2RGGQ3VbYh3PSKsTH4q5WwDHG5PbCYkPoyxKH36",
  "key14": "Pf2oPDJ7n4ULWfGvGhhUHnYjReDsixXtwAPyLqMcbqbKPts9qRUqPykZJpmHxywWp4tTBeLf43ZnK9ykLPwy7zT",
  "key15": "58e25koQXR3z3vLxwGr4frKZ5f7CejhAD6Z7v5qw5NGWJcJhChJxY6yuHCPcWVYpgQAhUnyogxyQSGm3cT1Bju3Y",
  "key16": "3QTTYAfudNtaferk4WvLk5Vk4KgTne5sW1SvMUPbzPXvJtFhUeTVumfAy1arJaTEdpWg1HJ6vRgqZMKiERgiAkzm",
  "key17": "5toHZVxFvkPSG9jng6CXoTCjwyyoj5Wvbs1PtHqL722siusMNQN9QCeUSAsgjDFHnVrpa18Tx7eudGgSrHnCsa6B",
  "key18": "5oGrd8S1awqMFekGGx8rk5e77DmtnWtEyZdCAokyahzY5mwGVawHLdoTvYesNjy28kd8GyGqBhTPtGZM4JbdpFBF",
  "key19": "44rugrtCzWLmGrrHbvYrh87BHXpqqFJVvf7NRyqwYyTUrLzbE9JfKHziRj9asCsWDXSdGnPBujsKvKrY63pmgVer",
  "key20": "4KF8TfEZ6tTi1zUoqLrHSCAvg48homfFrtvnkjFmN7oHAhum3roVLFByF8B6BEshkdkhAujbqWS1zmW7Df9kYWnA",
  "key21": "q3Gavx7w8Kxmf4H3a76JqXeUxJpEjoVDw5KHTAyCnbe3J6EtoFs4JyyoTnV5TnPD9G6zaY7f58TAzSNdHisTdzu",
  "key22": "4u3mPpCySV4f8ZBjUKF8ZSfVzZ87mELNMtsDhiCEJ3XDvDj9UZLka2M8F7CcUtA9oTXCR6Sp3QVM1qTCyT2rmWMY",
  "key23": "2frPpjcJzNmEYaNaji6KWxZ7vHffERNCTHeeAiqD9gkhFFxTCrPUwruspE1pD4J8dhqeL9zKu2UjHPZEBdzqaeTY",
  "key24": "37TvFiETBnoE7XMTgpFzyjUFtTTsNBuoi2AyGTRtGNRd66A9MrffpmAE6h2Z96x3KcXynoZMyv5FqFPHBYE83VB3",
  "key25": "3dRM9Muv7nd1VtFVYphiJNmsLs3JwBpYShk9FQ69ymiv87J5sNJS3b7AsswoN2yXfRVMYgb9sE4NfWhHhA7Up5Kq",
  "key26": "5DtvT9tGBMAqd5dZHhq9TavksPX4PtfcFVvupGjamGXdwqJBh6LEw3jJbDt9nfgnESfLuh9roCJ2kaqBPKXZtAYt",
  "key27": "4ZU6Bp5T1odURUKDwuXrKvvu9CLEmb4i4fYdAmsJZA5WEFpaKXgZXhWFzQvPxKkhuDBMNVUqYCfJqVw3J9kJD3Dq",
  "key28": "2jqFNbtbjXBprrHxBxwcX4qhwwAutb3e9v2CALvUNrpM87uDjwb57z8pJMDsuzuDFb7N9L2HT9w3AW6q5Pn8bqeV",
  "key29": "2gh5zN2KCHbDRuaK41vYeW9wWKyLHEqwA1bEyuUvquKYeQX7TRn7dRo1gf3RbDBKBVHdYRCtR6b6A6cJsRVjfGvg",
  "key30": "53RY9u4UUT7vMegzBUADCTTnBahm7mRdDxFFpjhCFHsijq39F4Z7T4UU5my8iKutwv7UBHfmAyKUeamBW6dhEBij",
  "key31": "2PPwANciE9StoM4zkzDNNeqV8DsMWuFF6PXjJzvScez9vn369vBqW2MtiypoowDxpcJLnm5TEUR9uiwa2ajD4k9Z",
  "key32": "4xM6smrxhH8t8nPHH2CHHbFisvtv6G5fShRvXyXnhCYAioo4nyMxeSSdqJ34akP2bEVSnM5M4ZBmoXfBqWxTpoXn",
  "key33": "66ZbZHo9yM5C7h3YfpC8sahbsjDV6qjNK11PNZqm8vDQqfKuQT8JXNrvqv5eSF7hG4JQfdeVxybp7tKvHNEznrxL",
  "key34": "3H4revbFcSMAMSTtqNmV5YZzfeZ3mY8LKjJE4s6q9j9qbLmY5C6whZ5HJVGjhAmmxHMUbmGDthLvQXu6AskHSBG3",
  "key35": "5Nrya3XZZUmwrnL11dqd5monmeBkRiKs3becA683pxHf8bDit31AzWxpatRrkTbG9gELLkfo2cohbsjeLubVRrxs",
  "key36": "3gJFGVmsp4DtLdccnpjn9okRx1s6mHMrqVLR41NNjjdm2RYzzuSApiB2AakcGnDEC8yrQRZRJurNcABQweKDCNUF",
  "key37": "5ebaNqTQJSod3TLvDuijk7eVXHnrxi6jMDWcCHJ3hMEWE7qgpWycYG7bAPvStRdoZfP34mCk5QAq83c2sesrraxG"
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
