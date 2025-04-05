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
    "FfeX3zDzekqD4U2mxHLAhWg1HYM9u5hhWwnM4cwxkN8aMuusDjUbQFUzaWRrzF4BMpZz8uWTkE4WTNUs6XhjacE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kVgCFetAVaUAwMjwZufkzoZXtrWR13uvXx1PAr65UqF168QxjJvQ4eoJb6Nuc9NQTcdSTHnASEC7s7pgx5QY7xa",
  "key1": "4gVcrvU6eZJgJmgb1akWBZASBnJo8uTSVDKVoUs5XwCywFU5HjsJ5rmRAZQdu8e5UDGdSFmApmdggsng2fuduPti",
  "key2": "2aCwCySD1QcWFCtv9rbQLeGi8TvQJWrMBemECUQhWFAAW1xGtznEALb4MQ8s8qFugfbaYqevEZxNUAboLfyYg3Yv",
  "key3": "34rotjYstZZ9VQifeqyuZctsZ7DxJgNVPcJw7N7GQvpxt9WuP7rwCqVeJm1DHSZV1tFuNfDfPgdR1SfvZW5KJT6Y",
  "key4": "4ePf5T7EcRwHGXdWZZg9tYFqHVTB9dfYrjvVdpdH3cZVffHBn6XtfjoSmHgSfpvjvZPr2igQL4eK9zZft3zHhKrC",
  "key5": "5pT1fcrqCMVpNVyLVyVWTFCbHR1i1JedfMwjQ4JYguWA4YWp6Mwb75CHx6cZiimzLqQ8NLuZ7kFt8nEfLqa8Woai",
  "key6": "3tzJ8HkGe2YBYbtX3FyHA9SVqJHbM7tAZCqjxf6KjCXiZGtqH1cCdHMXRfouNtYzZQxVjawmTSpsNQ4SxasZaiij",
  "key7": "9N1aniwwCsVCrkzu6VBQBs3V7tpRiGvivpANnKy9rReDrRfotrfEiaf3K9BbQVM45uyjx2LtwxHj2UJozH12Hyp",
  "key8": "59d6z42xF8tfzPasXDT9BLhj4ovurbMiSXiu6BSHShCc2HZsYvEy29znC97BkK5vCCGpog1f7kjqDgrFPNR3uz1",
  "key9": "634TWMJtnp9beuEvRHBs3G8KAvvdDxFJz51LjQNybS4SxQ85KWpJR3nz6wEeUNdsPxruXEj8bs9ByWfRJ8EdhTDJ",
  "key10": "3BHnNdxRQWyjomCsAXqC8dJsB1FZMC6nek832a5MNFyQjtcXhu4pDC4KrCiv4tGTLhe9UdaLfM5VEkThXYFKhGYj",
  "key11": "3vRgShWcuVSVLh616UKp3twEiMc8mYqXCya7JVAx3g8PE7VM55RkhcYECviHZu11d5GUZce5HYADXUpqQNyMNzyG",
  "key12": "626yqg1CxaKXCHUFP1mYCg1gQ6crks8CcE9GF9aVPsGMaF59xMTf29X4yaG57G2A4hWK9Zh3XCCpJdteqQhHFuBJ",
  "key13": "JDdYXqwDYsLWL9NYExnHQeuDGVSNWEfDpqrA4xau4wC4yunFJ3dbe7kvcHa1uSk7VNEPbT5XSZaCsbf3AaBXiD6",
  "key14": "4VdQ4T8vL7QcgYPHPyfXL37QC4yns98h2HyUjHPhVxHHrJ8sBase38TPPa7NMuc7euvzajz62h67yT4HKxdvd5FQ",
  "key15": "jqWtGHLYG199zaHdFhtaR2rzDEfSKED3AbPx5Yozz8tW9kzCB75yo192YQ2YdfdGSeXFBtX8b8yKt46PCzZqkTX",
  "key16": "3jFT4pGDhQMENtsCAmPxmjQfxYE3iVhnjxqCcWa3tfLZh9nej1gLPjBRbGovjF8BJif2sN3LxUKH7q62AiaXK3yK",
  "key17": "4nvQH2Xg6beVHJpLBiK6KDajGvGyyUyb1KEJsXJMmMXG9bq7ukmvvV2FVRxmadugcGqash1JCSHJmq9GSxyXaiuG",
  "key18": "5eHnVFp44dWA9MPbsCMZezsCCWnfwmxwxamrBY1dF8r1CjpCdpt8R9mJzL2sdEAcXieRf9sZ41CWh3VFBvwsGmJd",
  "key19": "3YQEkG1NYC8BgjhugTJ2MMHGSgZ6o63s1b5iSSBcpVvAvQi8w9gAwP5fpU8r6KoKV6vYGF7nLGBXnf5TyHxm6wrv",
  "key20": "5Grducbd5iYa4DJTTsQ6LaBud9cxGTxSd8LtJztvz2MNCi6eV29hwva8v8W5PqKvZxP8WdVqZY64KBkeKjsuqvZW",
  "key21": "4Hi5H5fk7nPRm2Vbd8crg8zVYcCV2i57Z9myVNsXrR7jbYqRchNzUiHz5ACV53pNoegYaNXRx1KzXfNhiLcsDn9y",
  "key22": "5z3tyAHaVLf6JyvX9Qw7kiZ28DSqsbik7uEdQ1TaB1x5LEQqoVBtj8NY1kL8SvU4aZExy3Z6j4N42fwhx7xwdCqe",
  "key23": "4X2AUAHKp9KLYGmCNM5jWECntxEwJuyYYGtB7dostVkpxFt3GannLkAbUPRWXCd2W6LoDwhSJSagLge6XnDw1pQ9",
  "key24": "7AobWR18gxoxtuN2BSQExBTcPscVNMDi7hr9ggtbQSU4NbN69KtoCx2XgaPFj7igP2HbQwiMaeDj4EqfCB74enD",
  "key25": "zXjQB42qDJvJQkBxVr8FfaTrjtTkNcMtq3ddiYnRCEq7RNqdsYiVok3QNrtV75Fv9HRt2gScT1cGCgD2N4GSazN",
  "key26": "V2LzZXXbouYe9jv4222AvBsfn18HEdpSP2wXQ8rdKnBmH1wtcXPmT91jdYArxShhKaUSwXo2SqUmB8EgiFfhoZ9",
  "key27": "3jMUbSHrTyrqVKEUa8oEcoWvHrmsZTsLRVfuRGFseXhyEvJ1yQZMvJ2KLL1cGaPf7anDJovaKUM1tXxrAutdhwUW",
  "key28": "5qLqASM5znGrw8UwTVHsdz3AzJQafivBqSUaH3oMtbdmMMBdcTK3dTbsjxXMuzn6oKnWe6a5MRQM9DiY3HEGmNuL",
  "key29": "58o8rsiWnDZh7nNfrwyjv5XC7TsFSB7hmYU8Dqi459deR2M51Gz6f9a6n1ZvAZPGwrscCJAem6EWRqFj2aHLhDwR",
  "key30": "2cPR8RNyL9XS1fU9RRz5kfs7A6DMJJ99SMBsa6BkxxZXpcq8ta9DwvZoXQYK8AMh6RcnGZg569SjAdVTnyHo91Gp",
  "key31": "4Wk6Scr9JyABSg3HjK6dFgtEjJRgELEjMAjJ5vhfone2dQGv9wQwqztkGsZ5vg622JXEq1H6NeZ2oSCHZ71VUKaQ",
  "key32": "66jeegp4jb5uaA59QBY68g44KFFMGrwS7Xx6A18r1GQTreYSvgRYU1rt5ZiPvAGpubnHcGpYqCzxWDCpN6P9FMLA",
  "key33": "2wfoGEvpG5NM1WLmEzfqbqd2zJciXv1ABUCySyxks84YJ7rkEM7o3SvHT2ZWznijdUhicFuTDzrnnE4Q7SAX7UZD",
  "key34": "4jtHMpQhKVKJTycxRThrCLpnNeQJ589NpadZz8ws66kQGaAQW5JyBbyskdJN4AYiLZsmPXqgyJheaaUg3aULYCDG",
  "key35": "4Dxv3PqbSvAouyxFYuzUaM9sEy9dwHtb5eaChXQSNU3768pXcX8UNdyjNyt3qZH2Xij2aVGEfp1tzqHY1vmMDG7u",
  "key36": "5V5mb7eva9SuWuS92VBj8Pjamig7oeWxeQvagm65LmjvDGf16fa1rHtP1TzpjWvCbBBwyk9zYEaiZreeNS4E5mcN"
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
