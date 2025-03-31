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
    "2A5xAtAu9t4ea8n8MFK4cD867vPGQ2b7wopVuZNgCHjFz8N6wje7uHCDoqgqkbiPowiQAZFTu27h2jKr97FpsqhR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LB2kx75wXtskr8Kw6zqK97C6g8gedMJ6BBNhABXq76VtPbki5RNBZSJkugtEAkvEQdXWa4YWiEexAuhja2jZBHE",
  "key1": "3rJheje3U1SgJ1UvXai6gJsez3ZevZiDZSqqikS781HsyrWVc63zUTEtJUQLP1A4jbmbMkomcbeXWxVtoTXFFxun",
  "key2": "4wDwX3qKaQU4A43KJxWGWEegcxC7L7bFpxcFXhg9ZdRNK2S9BwN7keqfGQTdQtegBExxrmmdpJbpm6V9J1kE98vv",
  "key3": "h7hpBzCdAkGr1PAm1moQAJJ5Wy2ikhRQHrXuMdvsoME7XMNVp842Bf8JjCBMKJ5w1PqRukBrw8mkh8eNUNd5H52",
  "key4": "5ccMkF1dsX3rB2bmxPzZzUKnxXx3dfkaYVtkH4D81ikJXw1Zw7Q1GsnpMuUavo8GnjFzvBdiKSNhShSxdURCg8GS",
  "key5": "4kasoJ7aXoA4a9jgZF3znEwzdzZXfRzg2FWbRCE3w29LjutFwZ4BqYwKeNFSZGZu1ai2HHebbLjr23WQJmsUqKed",
  "key6": "3A664umQFKsa8Nvhq9Y2dZNFvnXozWy7Zya8oMeN6Q1okvHnLFTmSF7ZwfGcda8hwA7PK52Wzy59w4bSeTqXCRDP",
  "key7": "5YKak7cTTHx9vnpkeT4jQaQXJSXFTLLJ7EJGXDsLK4US72GxnA8TsMsxkzpvkRjwAUPDkznonExaKrcLhDnKaNf",
  "key8": "34GcoZRZMrLm6xwU8d9NsFyDwk3rWFjxci2BmkQUGSeWoSrJu1kmCjScPkJELMcunnQm7a2DkXz8a8kVTX337VsH",
  "key9": "2di513VpJ4xB2e7dedVwWD9LnVyUREGvLf1kB6Afd9z88tFNCkHQ9pJcvrhNxAzrDhXXTE3nHWGXVN6aHxUKkSS8",
  "key10": "62i1bMNrYhr1nES9gEkNs1uLKcbSCY9vfuwmksrxGRF3Z2zVYBBxCGBN9G9uwP2BUhPMEMa1BtsQv35qsuvGzvuG",
  "key11": "tGqVKCtbvk1KPa9ifLjeQJnaginQT6Qy3n7pt5pzTNrWnqeaEnvyd9eR7QYFddLWpeLGdL5XQXVQ7744XE3ZDY3",
  "key12": "62wF1mHm9NDNtkumyLJgRCDTTqUXhGeuR5nPtWc2WJ9mZK1ovckakcL8zQQKhnhPoertRCLe6aTYYv4fFjNjGdEu",
  "key13": "4BxAzNkbyzndgo2a2Bj3pfcxpDX1nYZd7eTbFBHhfkoh5izB32r236CYCNRHxXdH2jPypBTdghms3xMiEUCCqq52",
  "key14": "5GeMjFxY6bFoc4MSGJUhqHpFVV2ufVSJjy29v6zZ4S8AipbTn37FRmFFj4PKUogTdUvm36itJF3zCsygiEcDXEx1",
  "key15": "59eWtt7WfDBo9mxjRKFHKcdqh9f91B3rKXoBPvkT58RyvDWULRwvedXNBqQCntiT7BrzAiY4MNkyJaxpXS9mevVX",
  "key16": "EHovfzrB5Byf7khGne2gAK1LuzcLGvUAsKirhA1BSfFnnhRWCNVzc2Ry6q3NaxepnVTRa1kYmjTZ9Lh5fPEsJiC",
  "key17": "45LMwfFaBUPe6Rv9as3HXzhA8xawdkjBuYE2DpwUfjKj2UNdMrkwCCu9HQKhUfFUQz9edcuUHcrJ34wTgRPdm6Ms",
  "key18": "22tbkqpXSPkqEjyPcEHtVNbWTnUickSmnhnxRaQ5jtqKBery1CbyXKko8X6uXQHZLGcmZujm1RWWypLFBR4UmR98",
  "key19": "3ddJnZUyQLpZff3cSqszrWUKCnwDqNC6f931uTZ6wdLTrcAgh81WdpVsiZWzQXoBpPccsguY2KNLsT6yZ99zC9vW",
  "key20": "3FqpQomFmcaoYYgDeL133442w3PspPrxMz4pD85cU4bexb58KfLbwz7DzfRuLTsQvNAki2zwSCrt2TuYMDGLna7x",
  "key21": "5LcPrhzTxdjmQSqzr7FKrcyeu43UYgtjaNm4qe2gjCgvXXHFYMgQFU8f4EjscwknkuFWHoTHg8qjQ8ACaY4oMvCq",
  "key22": "NYwABd9Hi5UgiFtY5XaFCj13H8rCLtUY6jZmEkNmPg4azomhwzMaJuoRiMNWC1NCKdE8zxsHTBcFQxorQ1SCaY6",
  "key23": "3VSMjnL71mMC1GukdNAjPnUqdHbhVyfpNasU8FS2dJGZaF4iJrqxb3zhpMRNKPvbEG58S4FRHu8caUyeGEh56Twk",
  "key24": "314NgfusaQBQbdVoXmvKuouJQQd8RC3TFQqtmHUsNA2TWp5t265112PiZ9AvJhDkkXzQ7RcSt8Ddt9TRPGosSeJH",
  "key25": "2pfCTYsCty5xw8uVsjCdT8wZyziYXRp6tTuTv6rqynk7BABt7PP6gSzZmDy3iRKuirCWkZbCjRowpk1Z7BGB2uuY",
  "key26": "4WXXydwZZVrAJM2iFJc1rg7r4Sdsd3CSuXkBjzpa7wMD36bkBZz3NuyFNTh8ZQxy81NaHAUyqr9jtwNWNJCrgUaD",
  "key27": "3yidiE5NhdkotNu9GDEbBsDWAFAwQuERPPEgWeRZRBsqjQs2SB4dHSjvYvNEWkj4xDQwqsrQr2mcVnF8VTpoVBHJ",
  "key28": "3sBXG6hoUJgZBJqrhAw8AUTMPPJnHxM2xSLi7ua6tg6Qrv27GiakpL9TtBZMXvSxgdD1pMPnjydDGEeNAxAx1FG3",
  "key29": "2x9XqAbrEKJPRDnF8qXzpZdXqmCy5BFTw6Ss9kkTM1nuVuUSPBLWkQcNZCCQk3fz6jQjviQuYfYgk6HSPeLZ4fTU",
  "key30": "5TNLkEnpHo65fopL3sy6cJb4UqrWRaq7sL7At5vWA8pxedNQHoEGWfVQuU5fvVLfJLeFSNzuqCYU5GpJT4HwbrfL",
  "key31": "5ijeSQE7vTtz21HCqW8iYwNf5E692wvB59BQw981wb3jfqqKNmk5UU4eMLW5TjiqntSFnQWdmRvXn7rpQKAmZW25",
  "key32": "2bjUJbwoJU7f1pdKh7Yzz81EzjZtSSNLkAJ5WVLTKAh3TSLC7HYxPh7okiWam4pNvrmHmgcv5btw2PPRZQSRKg9V",
  "key33": "2Cnq8rEq9SrQ8BEDvmjp2tjHquTjtbbi1NUCTpPqmjYTXec2gWaC9LxKZuqXbsDpecmveMHy4vYPLjeJCtXaNVSW",
  "key34": "Q5DnDBBmxbu78rE72tJKrJVLqfmTXjXE7rRev3r16rtkBJ5wNTPb6t45iTCgR9zfCwCqmEy1C35M7ZprWY6Sd6b",
  "key35": "3uDPvR4sMWJRzgx6dTyoU47NedFoLhgAPMS3ndpHGFQXuUc499sse6feGKBM8pj63ea7U1FMfoRNh2Bo1dtLbyps",
  "key36": "uPLRwAJbtPCyF2C54zGdQRNrjdC49nWp3hGmchMkRSofDnMM1fbkdyoxyf9HoTHrJH7VJWLUSe5UFe2fLHQKXL7",
  "key37": "5bhfcFykED1u9EqNRDyzzYJysTFCVU8qPeYRVwjvDGpVbUeQrkqzB7npTDuPhmZTiNyjcP6BX3W5W7mL5yjKbfEq",
  "key38": "3VSrWt5CcF6DwHR8ugz4CYCHqVGtpL3aSUB7vuL9LzV8dauqiMgjjuXGMpdY7jHB2S2T7YfDfrHcm5iqpDKzEP6v",
  "key39": "2Rv4WF7o48Q2BrCHHHLRyuuiNronVnYTGMy97dX3T4XxQMuENpFCNhTXs6qf1JrtzdcdZZSqjjHhm4NjNZQFAgmj",
  "key40": "41XpGKgS1PoThGccKWundZywCX721kHFNMdk2frkfAP8W67KR5SwCYgjPeQ4Cfn3SPEQKpU55UMJyEcaZumYz2y1",
  "key41": "2ziQjj9JcWCySPSnmEzBNXjsh9fxVzDkZBx6QwWvbEX2aYZGqVYo7CCV3MXV6MHVLTci76UyorrkrZKoJGaMeGi4",
  "key42": "5T1X7NwXobeFz2523CA6buGBrnHbwb5BLEN6gfWEmF7jXqxQAJtJum7x2XeFKsV4W8EJyxf2bs12z7zMERPZnCzs"
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
