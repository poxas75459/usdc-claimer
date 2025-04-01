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
    "49VWPNywgJWm5BUrH6cN5hcKLADKjx2nMLugFvUxf22R6nPpitiWFSNN78TJ6LP4a6hdZPrS1cXKHVaw8BGuiuNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5By81haT4fcsSM8xVw939HV2VXaBh8sVu3Ar7oCZSdWbjRWqMKDcg2YLNuTSuGXg4J8expQiGMHMP9WiZ9DHBSm5",
  "key1": "361yquGTpRcnv9PKX1YbqbBmN8VV3xkh7myPtfPcRh5n8bxKE8hVroafDHMhkTNspAc4KZAwxxMc95pj9zAJwP2k",
  "key2": "5kK3kvkKSfJFFDsws1gasXeJjJU2xtFWVqiXpt4um9jj9aTpH2WauYR6RDwzWHjFY1FF1AmeAy8gqGxjwsNjRqQx",
  "key3": "4CJBexA8epNFwkZwWMNWsUNu6Bkpt1Tw7ZuHoCLF8hwQESkAXY6XFwDgWz3zuvbvUue6MjL872vgo7ByELa7b5A8",
  "key4": "5fotkEndeYykdL6eMGso2SHaX23kCLsM4CuZnckzwis7AJP1BNREMbFF4u8i2rSuH8Ta7y8hBZJtkbnB4pi8oqxg",
  "key5": "27j26favN6fsaY2vFkXXZTnhXhCC2nGrWAsueaxEaY8xTNkuAJRdvsRUd5dXZTFa3Td68LNAozjoHiJMV1vJbseL",
  "key6": "4ygrxrXzwGNjpTRxKrbkaiZq6iNr4CzF3qhV5D8Pb6Fmb2Uy4k5xRAfZinZwcJAXGkVxGYdKvhwi2F5esQaXGrbP",
  "key7": "3eYQBeerg2G16PNphDqDvW6SUDVFFfwrfBPfgJH8X5tbA13QbZt67L5tMdFaVFRqGtxo4Spc7XKazDH9nJ882Ai4",
  "key8": "65hN7tNqhHAuJrodpQnWcMBQAUt4Kvek4vvKTtaPRyvec4NjdEVEtedY2qiXqYhEo6v4rxRApaQfT3LHxDHZd8sx",
  "key9": "2usWuY4KHDEbu5cGzKXH9tYMmNsGvZ4taoLvhE2vV1jsmcSrhodiNoQ5Ux23PXtDRBNKXetwUtzHpAKXNEorkAHS",
  "key10": "3zqGLaWmT28e9Das6xKLefKKe4K4RoNq551AsNw1pgUcQ6c9uMsK9DGDBGwUWSbEDRcqJ9vBdWbcHL9WGHqtiJAg",
  "key11": "2w1DRU4ht3tSo6taWAeRQ73XsZPDo9ESxpj7KTboYL6dYDMJSy44tQjPmFuWKtx5UAgUKT6KECmZASDVwytWAC46",
  "key12": "58t8fSFVNBbcxiQzY5YZ9BJCSp3uGFBuWRUv1Hp212X45PY3Kg4fWfX2yg2XN6pDj9R42STPQgqU7EvZmDkL9w45",
  "key13": "38dGTnVF6ZbHvK9pxA4ShssSmGnV1Z5rU5GUEW8W4VdZyMS8Q8zxkAQTEkGnpCiu6TQHQLb8STUeYngq8grHaLji",
  "key14": "FH3GDKEqCN1vbWHo96QxTe2XKTXSBG1i6fKGhoWgk2TznpwqvNMToVKSdsbYtbNVkT1adaWWHoicLNnPX8HuzxJ",
  "key15": "5FFttbXfdemdNPLc2QuzpAhxpMcZ8Eq1QU8ywXAYATWD1RKfnkzqX1e9KzzjHYriStFdbc8y68xaz4Ex2DsTe59v",
  "key16": "4hyaM4xaj58yZ2CVWTaxhnRPdK11JEpTCXAjrbXtgjhymVPgEwhy7carqcAsev43RHsmkSPVWJbM4Pg9bkVa6xDG",
  "key17": "5y9tZERYWz8tbjrHJUGNRwhDFHXf3XqqqYB2WdYr5ez6wS4oqoMGfXCTrz4v2KAnG8RWu1APuVuvidWWZdhtA47e",
  "key18": "3pHgzMVPBVguyhLHUnHg1ZLFiFz18yfuxTGwTfGarVqTJua6qyH1C5wkU56AUhYHEkWRnwi6g6MfxaPhRCis9Wgd",
  "key19": "2JkfKH2AM8sGHkkSASHj72qNHU9GzvKCzg3bWmPfc5zSee1qU8aJ1AE76WaPUCJ8F8XDSLr4so7UEYeZU7z4Qr3q",
  "key20": "5bBuTANucTLXTLWX5wFe8rcUKNLR352Lzdr7CwZxfYKswbDvDerKCR6jE58D23DUFe9QCaWAJvPcRMwebAWWFJG2",
  "key21": "CcmAoTrP5j8cDrVdB4tzd3w859nnV6UXP2tMmMGwibSXmn2JoxZvWTEmXntPCyMms82wKvW5cJbujECLBCNi3jB",
  "key22": "4hbyD56GjyDHuueqytcTwZGwfqNCocmtRZx8ZcbrFSzq9WahAWZrzXTNX9SfgyYsv2iGpN9BucpeU9JFvSsCPfLR",
  "key23": "N8YPjhYxkY3feGK8nJdDAyEmXLJ1Y6Mz7RSKCTPK49gq1vTcn9sZSvoPfPQjTMAfNrsqSsRjVBfLwef5JpRrXg2",
  "key24": "38ri9yzFFUPuminDrKVtyoRK2EJPM9Gcbj9QSTthJEUz5dYirJCBt8MjiS6ejkXcsrnrzWW3hbcthPXomMQ9XUgU",
  "key25": "3oi3Y6Di8SrjprUXNkUBZG2ufHB4gFPNADZA6HJ6hPVLcJBGFCMGu8xSiY4VAREEkFGWwzkGdyrffXfvNA5Hk1HX",
  "key26": "3S7gMSSNxEMxfVwNiscBu4bEwVW9ShsBCHwsWkpyE1zEZAXwoTfVinatEqsUZSmcciXGuk8kdzyz7LBfufxZcmHp",
  "key27": "4wDPUBaPRFav92R1AcohS76iPVFtDHZyuPyMFB41VkKuFxL9QvNLb4GPdi871FntLqy3WMwqQpqJK3p31WYPC2wz",
  "key28": "3XPSTbmLvQd3qtgYdmSpYSHoo9TDadHffuRw7ouk1bG4zXcx3EEQUzuZVDycKZebDX7jwrZg8jZBPwCeY68uJVXJ",
  "key29": "5Ndu3E1r9z6VBMDYQyNXec7w1zqyRXcPgjgjKu7JZWLHTwbgZWviJCgdSQ8ia1UHpSB9NUW1KBYRh8KKBZdQkZEQ",
  "key30": "5Vy8AA722fHmWQNkaMB5KYTD3KoGtQgUVDmygQu3J4aJDpKk2VvXcgtRqLX5Nbzrv72HtBvpzP25TMjWoqGpvaDa",
  "key31": "4GUXTH7i1JHfu9cWk3ZWw57WEpJbbzaxEuBHEWFiF7NKGB19NaJRmj7vHSnb8fY97PGY2VBzqUQhNV1HbCTbU56Z",
  "key32": "WPQdvKoya4XX9TRTx8yuHZxiN6uYxyrcNNWKmYbHffSs6HtKCJxEadyCdXCz26hxNnbyiavyzbrFmPauzreQndi",
  "key33": "4MrC4rKdvp7RYiRHVbakz1Y1Vdwt46L4RvkuZ9dFu77iAmznN9Xs8k4eCTe4hAaVZS4FY51rcgJJyDebSXQfDNaZ",
  "key34": "2EfgYkXJNFwdv45QxmzL3p78a7nAdWbZm4Kjt1pbuxgy4w31od7DNA9pa1rNBaWkwFhAPpUkLDNjc6PWJdb7hCkA",
  "key35": "2JeugYrkeYnXesSqnCpfeDGBSuKct98mTC1xnb6t9ZC8EeqdGVjg4vWBA3nyFFD4nh8jZ3bNbdmWWLFvgQnGqhho",
  "key36": "5mexWwoP4Gfv6aFeZQbQXvLa9bP8Skae9YizGLHdm2Lr2trJrfa9o45ChGxwHaX832EFyUy9NZ98e5XaxBtcHLPx",
  "key37": "2fKe4P8kAJRF5oXXPSfW4L8qzoC3QMGssxDgFVG9y8WeCMShHZ98Rg9v9X8JaGsPVBx24nqJQodHMhWRto92h7ex",
  "key38": "3ec3myhMamq9dSVBjqeKYbkvw4RMEzxGs5V8cXrBa6RdxxDTeBNu6NDzBQop8fFfwsQv8Z2UnJksGNWmnKQSozVh"
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
