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
    "2Cpe9SeVGegJ7AGFNQ5SghyUWVgb1ZwVMwP23X1BD6x5MGCncbNNZggWmak1gWgiSqeX394CBfE8bqpsda2drgdb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G7SzEwN3tJmBvAreNfF244DMXdx91n7yexCxbKqZFVRzZyoqzJdjutP1m8hsqojCmjvL59suXggEBiz5TdqvU7K",
  "key1": "4ouogLPyoJJEgSYATN3JBGzCCfbeKTDGpf4X1Y3WuN9dtU8P7TG7LBC4x12Mx3PpnhU9PDgzdB2qn6DSpx3rbsi6",
  "key2": "2N9ntbqsj229EjePaUhvTeTchPrwZkmWrgDdpKK4TUsQdNUGmDBJ6crJWb6r2wz91pqys6SJQ9gUbpzdrdZZqMSq",
  "key3": "5mtAi9P9xQmvhdHcTwtjHY1RtHVzG98dE18RGTJU1Fx1fKUwaDEdLu1qGAYLoaG5uqdJJYNNY1EWVGiykEQzkrAW",
  "key4": "2f3ybrFZ2nGBatZqbTon3pYUWX1eoqopghCfeSx6Kevfv41r4vL6mf8qWUCdSQhK8GMjtgnUnvpmaxTQqFmU5GFM",
  "key5": "29E61uXoRr3Z6ZViW7cTAeyxRkKqYxXgf8V9ucGxgcG6EBEs5vKyqU2T1n6x7owSVxAHQV5QTq6ZysbR7FZgUYgr",
  "key6": "4aDymj18rmUnedPnzZiPtcyrJRaHTf7TZbKXpjmwGa8PuoT25yCEFNnB7zqssoWNTqkDMKBogpRzBLR5R3xYxZ8i",
  "key7": "3xMyFwH5mtV8D4UmfryH3wouXxycnnQT3stmbuhs5ZZSt5vFv5sB6vwQvDBkbh8TMv6PV9dYjQuBY1xFUDDgBbuN",
  "key8": "52Bm8tNVfNWMLSQPCpvgch1gWQxb6qRSYVfyxVHAM8YL3YQfiPo6nWBUgvWUz9jCRg5tuNm5RzP4WoHhpo84dE82",
  "key9": "2y8Wj7K8SBBGcXm5pDVf1i4QQZ3KitVxn7hj6t631rTUC7jHPEkeZi8fKZmvb2aA5th6WjCfwef3z31nYKy7kYZM",
  "key10": "5MDBuFMNfkZM63TsbTsUgr1hR8yoRNhLctZEqLfnST6gHKc5RqNsLTKunWWyxFoTjSXfSKGnXWbM1uGBpLk53fQk",
  "key11": "511uQG3h5LxqSd2EDExbAebrVceWZuTBM7Gf8hsK7rN3GaRUBYyLm3CqusUCkXcditY6RU4697fiWUAcYDPUVcc9",
  "key12": "4wyL7r3VAENhkkLnYeinSoqnKVR4T61ZFT6nggf3uSkrdwoejPen5D96hGzGxwyArAydG4ZQPdiNwx6kcsexxvpX",
  "key13": "4me5GAZaccJxMS4zFKDrCERsrCoynRZTg4hbHfxQfRkLxQLusUY9GteR7zdRYUEQLvNiwDCRx169YRzevcsatRWF",
  "key14": "CUcVnC9HmqEyzyZfm74hSuV6JMp1ZEWa2ndwpGHwnS12YknwAKdiZUsRNND8ZUSNix9F5VTRbYByyKwBNwLWZLu",
  "key15": "2Se58SwJUTQLKCg3s1f9qUJMoLBk33LZAvYvE93vR8SxBWGqyLSEKfxH3G37bEmrxP9HbAa5cbAkEFqxDp8eT6nB",
  "key16": "4XtNupm6wP5gW725bDqbcC9CYYatkHSg2Q1KmNhzNJNu2jkR73JjZAEpxQwvsdcpMVg8jzevaHjHTgAUzy3aQbWr",
  "key17": "26a5ycE5zoY49kX3gLAaXu4S3nUWbZkKzWY6XHvG217uhFi6zyBaZPC8S41zVnFAebkSwqxyxryY3rDfChyakrb4",
  "key18": "2SMuaJSPvtqioHcrLR9iA8cLicFWz4hSsyJHVfQNhLQ7DwATCZPJCe1KWfgB1tmwYr45K2ce4DieyhgyEw3Tk6A2",
  "key19": "4ymsV2c4xuTXdQyQEgrBRR2FNKDHmcESqfg9Fsq12oAAoy3rpm9qjZyDDdRgdCfi5caR9ERQoSSkGBvS8ud4kHYH",
  "key20": "4fLqfEaWnAkiuVZvpzj1gmx8TaBh5W1hvvp3EUCJRdfY6SDaicPTZt53jX3Aw1rCodKLC4qAy4wysyrR7uktheES",
  "key21": "4aWtiXvvpF5vN5UpDwSYaxDkE9W6idN6J8mGA3om7grys62q9L4NtQZJgnpjKtyMUoZzRP1i3sC2iRWyaBvRKe6N",
  "key22": "3LJpg8uHHSEN4LtzUo47aXArnEWBJwWSpjjvMArgTzqTPyekX3yL95w6cPCFHwPtCmQwYZNew5MX87LvV5Ya5As3",
  "key23": "2VcykLLvB5wpMvoDjF47FNb5Atj1G54uKQuzSNuRuLYzy1sLdPxoznXk4SUFHuNU1d2zdXMQbYmuRVEpGjyE6JoS",
  "key24": "453RfveiJi93wLTzqDKn3Muw4vNzYe5u7cfJHtaArFAsqaaWfKgFiVsjDK5gqnUxdHL5KjHoH9TVa79gFEgB1kpk",
  "key25": "2FHTbRuuVFYy1ActvLn7M4jzwcCMfRYXjQe1xTgn47Ng2a2DW9A7oMoyF51dc6z4W2tLnpB3ojJCeFq9SWwwh81U",
  "key26": "5nLqBbEjyMALRbjoCknd5P3wKtdi84ck4vEmUoumDFEofxGsLbWy742hRoZpUvouo4NLPVqg64WSeMpg7UEqXgVZ",
  "key27": "vcEAH7XduNJirv1TNSbehEG6U1rG1uU1RP9igKiNxA2B61rT16c9ZFN2tcKLpqoJTqFMF1KZUREv1vVpraCPoqz",
  "key28": "4iFptGXRQXMf7zdCoUWUxxy2vQkDkEhtdidsM7uRMH7qRAz1mqFyykSwzcJtHr84AU6jBMkNitt5jLNYidnWdBqB",
  "key29": "3Uw6pWjKPc511btewb4G2ZeVyswC2P8eQx6C6wvDSM56xfJ1mPDS8h8gK26b8hjtH2pZVpSGAcwXcZefTcEjuEDc",
  "key30": "3Jaf15Ehc4cS8cGhY8hi5AaPsRrzmyouGuAVFyBnkgeSap64QvotErLFDXcm2zdBaarHzscGusuAdsYLUJTmXnuP",
  "key31": "azNC7fgihkgSuPYga2SyKqv2PYt1fyrPCfU54p9QS69z8ZYhn2hXGkmtmB78ob1CEGxfejYTEgCnFWadt74kBEq",
  "key32": "8FkBf2yysSgiQkTqBdDnMc2tttX6u1fCSjUGPJVciMmv6nwcXBsvLHGEJjhG6c79xkaUt8DMpVHfR6usSE4Ehf3",
  "key33": "4Q8VEaSnMw2BZfZc65w15rKPQpfmiUyQQXWCfy3ei1LwSMF7taLQ4MLK3By1jeMhQ17EXdU868RtVb198atrZCfx",
  "key34": "4qXBw7YMXvPAtQ5Ny8WwKxTeTwQrCNnRWtGa5dWKW7oWhv1yWQwG4wVVsJVai6Rtx53Ltkgx6iqFXwHGoKozNyoi"
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
