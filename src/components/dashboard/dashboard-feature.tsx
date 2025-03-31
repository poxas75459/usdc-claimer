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
    "2pzSCk3TSTVCkZJjthhFcofwfdQTKE1kccsMcTp5BkfjNzPMwTnKzoJmbnRj1tENaVU4vjWCMqnZnnNMC8RrM85R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VdRV7C3HQ1EPKm9AFTpN64hQyXW1pSsk6zwCkXzNzpnibGfr4Lj8QWj6EPJLSd8bHHo4De5H5LA6ci55DyutCad",
  "key1": "4pUzWNHZuPDUigUye2niMPht9yVoDPmtYqNB1W7dXLkiz67bTFMxYtZ4Z5pN1kHdfwmJdZQx7xEqyF4X5VRSUFb1",
  "key2": "5xDEdBaFBQ3KevcnHFNRzTT5yLi3CWyUsVumKwNSCGV3BE28VfnWF2xh6JDUvahhpzpVNV6LPCVssB8djudtSXy8",
  "key3": "5jy65XCnn85eRxVudS1i77oqfrLhPBrQcNWZ3Vmy4ecjdMnuvL3P7MLcT6r6zFz8Qv2ALXnH4cMMSVkKUc3LAZcJ",
  "key4": "2E8W8v9iCpWiZmUD2rNrkK2SLNJaBeeoPeye2DCAzC9HumTK2oxAmLRCBuMc7vvoXBfCSxgeBxWhPMvj4796ALuq",
  "key5": "4bTGsViEEagjcVD67sffATHhh2mDgLTL9MoT9idLwh5qJbt653FJFaPxdncpQGAZd4DRUo75JJuhijbuSTrKWn79",
  "key6": "2r1Nq7y5f5tHGSEy9guiLq8TFee44R91KduizWZ6xTi77B35BPAMVCxsELsYGxQ8kaZa773iD3tV8nAPW4pqZf27",
  "key7": "tYpmftFkr3AyUVG5yMXncaKq5hJwkP9617jhfnkPQBmEVTqTbfL7ZKMsjNZn2uoLHdtPz87RgVN9PZBY3hB8Mxp",
  "key8": "3uz3EUSGSY8BHpCfNxiSDrSgnWNDqunpT3P7meSXt2TKfh7WTaJa7AKbiMmthFvapPoMsniB6fb9UFDVk5xno2ps",
  "key9": "5Zv4U7jfSNUHLhYQPgSQjhtFDtfY8Y4nrLqNwfGwGqSaXhWEPN9Fvj8PVXzVktbixjohhdobPEtjKBYDaFVD3eQS",
  "key10": "5qzXSRm9pWfBV3tXqgR6fst2S2EhqLMGsrUtbEieQmAeBXjwMCcnWPPNK2DeP93sWFQ1ecTr8QX7gJZK537us3fX",
  "key11": "4sEgymsqcXjY24KWYZFL8nH1KD5hWdfL46viRAwTWGwc9RF4T5P3Kx9VnoxwNi1ZLE8Gr8kBPaQWDGeYF8jMKH4B",
  "key12": "2GUjkFJaMpxGWjdyTZpzxB5dNpwRyA58uBTN55fR3z99S8hfwPmZF5ijWowNz1YtHcSUPMVF5bJT55VwMJkqShhr",
  "key13": "2fU4Qyr2ty9TrPQxZmv7MXMsymT12Mf11j3JY9ZTbfjpcU26a2J2GHExcK65F3yUtvopfhdzjB5FyoPzLBsfHWjk",
  "key14": "5fGPYGyCreSsshxLnqCPrzxiEbob2NP9aicfwGCNd8HKoGXS9GAs9HJ3inqKL242f9ZdTfwGNmVBpD72ZzTNY84Y",
  "key15": "2aDw7H1eEC6Gzr6BBgLLU32x9qepsuzcnuGzBh7xUJ4t6gCEXVtPSJKD9MRn83kSuAnMaAmtJN4cimUbu59zeDve",
  "key16": "jH3B4V3bqCxyYkQ4eKQZDoFFfZbCbosFALd4Qd66kDZFK4JiWyrJ1DXzLv3A4SGK7XiBZ1L8XjMZbKBK6SPviPK",
  "key17": "36v3iKJMFrKrBjJGoJ5upDSLnqmrVWjSdMpDpCdiwyDqKoqH5xACZdUPyDKCytygfVxSmbddgABL23eZmuVDuS9Z",
  "key18": "2qwaWQoPSxwSEZEjLKU2voctr2S2aqid1NpdN4bASkTd5tgKewUL4WuE9ishnQy5iivngvv4wTGDpjYFciY9PHTw",
  "key19": "2mhY8aLy5bHyNMEAPB4Nyb8UsqZ1MWPagtKk227kJajcQiaD8MagDoHAHNkQj3vweMYU5KqGaeXKofz1zAF8kwaK",
  "key20": "22noYTidmHmiWjG38rFZ3bwAYJC6Cb5vJPmD4iqqWpe7AcHY2aZTHqK9VEaRfBnGfsVY1aw4YDZnBQE7ym6mn52Y",
  "key21": "oqu6KoDN5Dn8gfgtryn9YBowppSbyGQM2GTHxGTceY8hZgy9v2GSo9tUPzATxS3fDyc8sUouwHnsFPXXdrhZVJ4",
  "key22": "4xazvKjN5kuV5pr1yfag4VdhT9TZ6V4v4VbomrfrrddWDUtohMC1GZXRmYNRrTewxPBEQqo4TYjuCTUZJMYqsYp7",
  "key23": "2ihvgofZej1C5FNbHUhEkgaw9f4jo9tWFrbq9DYaUwZKTDuzvxuztxt9pJYCBpDCrYeSecx2awYA2mZd3mrbFnNd",
  "key24": "xMWDFffNFyKgQqGR5se2tZxuKWjK2Jqwtigdm2kFp3s1G2A1PfNeZGyU1NFKHMLKJZY8raxM5RXfqa88PUAkuBY",
  "key25": "2Un6W8g8pKeYfuGY4CbCeAXehtYPYiq1aQuwZrnj38SmytRwS6QQTrG6UGogBQtCoZDognJZdpBxWS9K6USDXcrr",
  "key26": "3fTXVXtZgcAFdTEVoxeQHe3UAxY3zb7hjMLD6W5PyM7f1Z9UeMNwyezonwkuf1ijVy3FSZWw15DXkd7vnys7pWnx",
  "key27": "67HkmyRHSiurzLECpK1PQfypC1wdP8btDtZsdrfkKct38uffqSUtMcuiq59B5wVeUzokiGcBiELAXQWVxJapCeMi",
  "key28": "8VLhU2DNQPfiV5oSJaK19vd24d4QkrF23twoWHAMicssky4DL4egnDCeLTHdQWcPjrKwK7ow5Joodpr5UZ4gePr",
  "key29": "5B5CtkeGutdtjt4NwbCNFpg7f5iH2jVtupN4vp6q2m3pHi7uz5tye9RiuZiqemD6GXswFvxhvF2LtubuTPPcRbSH",
  "key30": "UL9WeThhemi58BrRffFAuFc8F2FEo1xS93SoFwPR62KeCX95zfRfYxiLsN63pq9BY7HjKUtzRYqHtBF9mvr5tuL"
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
