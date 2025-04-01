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
    "2AuYYGVWUc8T7Yh4Y8NxtjrTRvgGos52y6bg6gyv1PE39XCwYvqszTFhfMvjphnR3nozL5kDHkQWB2i8Sdxjz6Fw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52vw1pbSWqq2769m594bkqirVBBGNBhk1nwn37ik59YCJcKxKKbdR39oi1nNojaY3q4tcAwSNiykWruBrhxrPkwp",
  "key1": "kHbVsMH2bHSjP7veh2W97GL4DLw5RRZz4kLe6CGujK7S1UnV3hG72JKBt5y4rJNRwrdsXHB9kgFpj6mGqacgPXi",
  "key2": "3ozFxWc5ytneZjDXsifAWx95HhvoDdErv3pKyo8jgHmVHSAGgP3s1wbGeqmJjKb99SkKCHkCy41sCsFTTCRkGeCH",
  "key3": "5W8zAA8RVboTWkwq2ja7b8maWs2tgDCBktRJTgnk9TbUzFARQ6eJBontvE16CxEX5ASNBoYxgKUxKbjPxh4fqhKg",
  "key4": "368r5d388112dRywq9bKRym92D43QjYBeN7TP3xRtSW2Z1gKXR6BNeZHsYgGdEJ49eP5YaWuJ1fY6tDRoRurQDtF",
  "key5": "36zqdzcPBPN1mRgBkmySu29c2zNBwgMBcWC7ySvUx3wRs79dGJgzse2ArGkZrwJtbS8cmDK1hE9cUPmvjfniErgU",
  "key6": "3Szn8ADG37t83Ht1KKBtMtq1H3JZRXuwManz3QB5K5b2YLcKqN2JMGvV6cMJABp5LNfm8UzsFjpw16csh9gfFx4K",
  "key7": "TJNStvQbspiuuEpi257EF8p9u8AuMuJqqpcVHhNn5qGG2TM5h8jiXcjk1xcrcqkb1CVW1qcUSdHeTeo72HdEJtH",
  "key8": "3sCw5FCoQYpKJGHPQoiPH9ZtF12x41ZVzGFCPjrDg8gLcQVVEWAgAhhh2KsskgjcaZUr9Z9BsW1HsGs89qZ57iw4",
  "key9": "2hWz6Dm3CHdszvJVRce5PDkvTRFbah1xJbnfwrS5UFXJn7gF98vdKnVzuti3tmWVDvoudFW516tqMw2hj9yBNrdZ",
  "key10": "YUt8D75zPdTmRZn6ATcpJPh6wdXaeEdnQ179ktYrfaqn9edHCx868ZJnMeYt1piE7nqR2npmcXsFh1Zkob48HWe",
  "key11": "5wn7m3SXGZ2yBmYpRaTrxQodA4nGjBHxJCk1B3t4XJbPo28iUTcjg9sY3gMR9i11u4H6kWdffhdKxMSgwStoA1kD",
  "key12": "JuoMoYPPGMPgZJmybaXxNjLTJaLLvd19Q8t7dT7oimhBYADSrmmCSEnq4v5o2XJrUPL5yj1hw5CbrmxsmWaJCMY",
  "key13": "cM6bBs82ooyoQF1KLQttVRAEYFdSaLHvK5KgMTtqwtutz41SuSBkrL413xMg3yD1tvZsSkbenkDz1LqZoFJBxki",
  "key14": "2JQcKqvnVAKyMiRFyGzZFXdoudyMpobRaeUdLQzjQbF8RHzD9qthXDTvwcWs1dj749FtJsrRYXQBtqowKCHmye3n",
  "key15": "3srg2y9zWNt4aS38FA4xo4MGSBnHHreVTRY7gueFKEjtjFjKaEo65CDJRbwWD3oQQBDYu9XAPZRa87Nd29bV9JpC",
  "key16": "3pNkNk6NiZYbownDBVKkp3xN4bD2u17VuG3sYojKjp7tt2y73KCwPpj4hBqgZzBSHdSPL939iBw9ZNs7Y72Zr6px",
  "key17": "2v8aW9ed8WFtxvog8BfxAzrKnAjfrFhypp3kPcrySboLrLxaKYuZzvy7nejnNNb9M5Fkik4u4NnxcK4qg9WrJMnQ",
  "key18": "5kxthM4hv7nRm9JQCVNzXqjy5LtT8tg6LptrG2fLsAqGNQbusFQsvwDjHMubvYDXcxUgXJRQpYSaQQxG8KoWmxUv",
  "key19": "2iKGA83AmzpwAtnVgGGE8S3hEp9eX5QuLTQcoZ8CZUVXSKmG3sJzsjxVn1TCMqE6cVbYpjoFBjA4BuWyJiKVeBCd",
  "key20": "5KPPnnRH89ipxUkk4DfUNhsbqQr2k2YskMvEKMykbsf7XqdQ1FavJ51X3UY3hL9x5oAfMU1GWE7NWq6g6x8S6i8M",
  "key21": "2gz6CmdGd4rE4wcDzkMvoyfq9DjD68SNdw3ZzaAfop8vUNY6vh8J44ArHfdZvBx1dBD2Yq1tBKQB1FcZBNEyCS8S",
  "key22": "3q5RVHuUdL13aHUxFDrTK6cDxtaoq2CZncrRuFNj3mpaLzLNGoqRsymDPjv14QenrAANywFQ7aPiL5oeH1tnG4x2",
  "key23": "5gws4KQ2a8DbgysMAZj8CDrZhazWkn7ZBjyn7KRoWpYpi3HhCcvXE9Ge1qCSHbVWbYhtwY8pnMpFnddRBJX9PgzB",
  "key24": "3dj3gJ5B7GWzRduqXchMXQjysmr3Ke2WPSTmmzmNqKp4Yd919zjRhoMwjioELJygMq1HaWpHBuN8pUAugkdL46se",
  "key25": "oJGq4CDLxWznvY6vnsMEMCyWFAae9qpkiRcNFm9AXskgJPaPwziHucXnk526RRzNiZNoHTApF26MboDggBDauVD",
  "key26": "kTKtUZ7XNQo4WarrKYmhJrSE8uyrAdiVM5idSvLCrinuRWmd6fTXMeVQ82YxEytKZDA5kEmhx1pwbWPHB8DFFLt",
  "key27": "SJq89nWt1VN7cwsHcTyhQ76tj5LWMJJfFtd8ZvUnsd6KfM1kTshkV7ASd3qBmek4ECcmeSxQih3tcoifBVka88H",
  "key28": "5AMCxnmkbEYWy6tFF5EpcUKPcV5NaX5gVyhFQLtTVHD6bmqT1piiCzBwdEtKxahKGRVWCkZtzaV3EpFwGVQWk4Dw",
  "key29": "23wSVfXDpAjEAEqj269pHfEbDjK9oqt6BTp3DriAaQvuc5bnMCniVSMRt6Y1q1XoMp4X2AxuLwg2SXRtfUZLrU63",
  "key30": "2XuJqQzfPwFQCrs9VxLpGwANqhLrMwjUngzaVQUYQLZjDaa4sqADoKHvvdcwxy6misHcVucCW25WpTQygs4U31X8",
  "key31": "wXpshuYDs1wC6Ttk82EvCerFKdM1BeMH3m9jRQC2Tpu7fVqjRnH6VGGj9skcEEfNdrfPLETScFqqkjP6TRjmmY8",
  "key32": "4YfgoW8jwH2t4hfSwbXEfzjwhQ9r4qRQ3XTtXVWDH3E77LCGHnWVHiUgSLQdES2RHMT6kvbrHkyAAT5WAdz19vhp",
  "key33": "5W2nXybYSZgskuHmD4Wt7rAv8TZLSJPdm9Drw4LTMfFUXXNV4RxY2CAAMQpaqpQTSMZuy2K8479D1xKRQXGf8MJT",
  "key34": "4UDXC1KLqkJwEMk5S8T62jwS5auK1RxvLUDPhNNT9BMUiKuVK9HkqCoGuyFjSJ6bUebtPcoDyyEyrKWQjrBsCMkd",
  "key35": "3fqwY7N6Uz3CM32QhLP4W9pq8fRTLRinAQJ3RqqRMgiK9oRrEafsTnkaDiy5zunmDBvbDS1bU4Por1LzkC6Fep7K",
  "key36": "24qrCBe6TYEPFusbU3VizFZKjcEoodn2xwfcEvCUK5uM1P6GHDp7sLudhX1WCkQv2n5yCA84QMBh8H1qNh5oPErP",
  "key37": "3BBRnQ1EQZSZBnHRoSnEBLvQR4e9oySW6x3qRdLSoyrr4wJgu6N7cAWs1redzEdw3oWvLQMcpgZdz1j7Ji4p7VFY"
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
