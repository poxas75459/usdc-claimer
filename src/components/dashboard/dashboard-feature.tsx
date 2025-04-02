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
    "inMvgB2W9evqQz9rcGATPyeTVRFanwrrK9KRhr3ubvhUksh42ZNFJkizDRYBvyLvmpeWMSokLMVgGrXE3HRzZVx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ijkNza8AZaB8QJW92w7geNKPS34ShXqgM6C4XUZRV9BTQDPpC8mhW5WBdykD4gFDXb2f1xLzmD6DRLZhac5XmoY",
  "key1": "22AhLmBpHrTVP9LfDcidVyPLYdTEqDceP5PBFMM14BdveWJbxB4mexWRh1dNeZJsF3WyY2QhB5s8sUPZn3P7UF8i",
  "key2": "3KvKWZKWYkiozmx9bPTTEmcDszNX7Sa1UhHvvCF3XpjP59QVoLvu8ijJaEua3A5rZvjwxGkQFQiosefBATQecPt8",
  "key3": "4wctEBNevrji11GvqTgg2N72KPVG52RS5USUinvd7maDARCUCBwwGGXo9a2jdkf3BWYbKYFoabBeRBShQr1YrP8P",
  "key4": "3KxYBL4gsMXhPJyPKBECb72JACgAnoNQtGdWKrsPCup7wMicQaNMbauftv39YfKRpXcA5r3GoSxmt8nSnuooK8M5",
  "key5": "2GWhXtzKXZDZNpjJag8mZV1TW1hvj8BuiGACwuvKJR7Duuk9QtLWkRYGvafB3AsXDs2F3tSsU7ZsBGV9kZHUMSV6",
  "key6": "2KQeoMbe7AhYxhcd2UKHY8rd85R1mBWmf8YGC3dSFmH8rpaR5vLM7qFgNkHNfPbigf6czzZuRXwdG17fvnVwhqTA",
  "key7": "3ok5Qa94uXvZvYfoouQvfhs7G3tZJk26FDGS39h2AGoGhWbZjK2XR35UV8F9xpPBGwdq491xnD6hJoRCQfsiRoNf",
  "key8": "4gKH75YKZs4fBGvEyAnnjPonDHrrqh6BPdqbUes4P3tvoj2XzvK9UU86JZ1mg6ZqcnPp8Gjie7qJv9zqXF53qLVR",
  "key9": "3c6E2USXm8KMF4nWzuq74Zsi7zQH3LyrG4CEY2DD58RPCQgyguBkfGGAyMvp94ViwWWMGJcmoKZPQizvrVvToUy6",
  "key10": "41zHrdWigUqsTVgkAm36hR9MyBwDHir36aocdGdW2Gu3HfgLszXeA3LZssDqMgxmLJEXWwUtXFPSA3ByueW85Yt2",
  "key11": "kJDrnG5rsS5XyW6kAqXTAKDSw1zPM1cwS3AzEzd9JbLYUZtWhPbpCQVZxShDFTCM89T9sVWxQN4MfEg6ouX4TP7",
  "key12": "abBspUrtBdVG4V5oRkMtQJLsSXpAti3qEjnw5FwEw2QP11igWYaPMUJpKP7SDA2BTrAjh3HaTM8tdAifDSuQmre",
  "key13": "3CQESddy9m4J8Mca9TX3ioQetXHctfq9SPMZxNex9cpf4i3wQu2zS5Np4eQAf4xJffa7LLCDVoTZZQmFyQED7u2",
  "key14": "5Auwd3b27dSRHUaHwHizLUcMnvHDdY7WVKbqimX41DdcXKdVogFjtt29Q3bPGnp8qzxPy6PmFGmUMvKyHaJVcRyw",
  "key15": "5jAKLdPXqYuWJh8VfX23E45UpzGjhmRJSymojfh8yH6mNAy8nquTtNGTQTe5FpACMq3oAz3dgG22y89o1keaH1VL",
  "key16": "2nN2wbvfxwKppGa9hfgUW14LuEWd5dCTrPLCRxJ7hiT15sAPiURyvKvzQEtobibmFYPs2pNmrDPJ2Cwjcsby1rwP",
  "key17": "YNzwiW7o9ZVNj5XMSqeoAaqfGbjU89nvdUyeP4t1VcirjR6ANQQek3JkVfeV184zVwCJDzGbavLEJyYyXoNZmHa",
  "key18": "xB22NXLj2FFwXXrVEikS9ctUdoMJZ6LMyMmWiwfDgnfqnGUNpYn7XD3etqQtDKwmEwFWrF7HP2GRvRFRmNcknax",
  "key19": "3v8fw249e1P1CSznjB2Fo4vjbVKasZGQn3ubsZDcegupUdGy8YHjn8oYXxVhynt7TWrgcLRjToEH6Rdhhui5iSXF",
  "key20": "XPAt77DobNmfZD443h4DmcVhJ1auP1jBuyjKhAGTPyupNdsLTXDpewq6aSmKA5GfXgKoA9sU4pKmUr2K94WLWdk",
  "key21": "5XJu6Av6E7Exrewq6RSy6rpFcJJ82ngqRtK7KNHHRgsxPb7WtpqdzbzQN6Za1heaCoMRokkz2sJiwwv5p7pzbvUX",
  "key22": "hMNWr6vREjvQcytcLgGiWUgohG1fy7saNmXTefVPP2gbg3D2conZyUfVxT2Fx8FhxPj8fa9zvw4wFDXeU1e95oE",
  "key23": "3hihAxjV7N5WmDXatrUueE3puD37mggRhfMCn9j4h7TpK4RCmrX7uXEFbPKLRiEhrDN9ddWx1H92X8uPUgNC61CC",
  "key24": "2LndefU6c4xexZddcASmoHLqpebncbawaPfYyu1odViwkn7gepeW7Y4wSRYdNwwF8QbPdmCRyNKkSPHQvKX92Rd4",
  "key25": "42FNFyjaMqSQGrgRDarH4NaFKr4wBCfTNcQTzoe7Nxb3RSBtMSegQQMxoesZ4eMqhKvcynBomTgFPC8usCJH8Mk3",
  "key26": "5vyEiAKhL22bg39U3RdXp8qBphJVHZ8RzSZrLavFDpU4Xigq5jovZj4vfoQXJC6MNQ5N2DivMaCAZYufVwW4QiY",
  "key27": "2WsX5ouVRSJgULWztiVGV9vmhTXKg5g5wo1CpyYupEdLDbuEm8eQwUfr5pC3dMH5RSqPZB1Qd3uyJBZb58GekJuT",
  "key28": "NtmKEKDye3DkyxVEVf2uYuwrTdVqEj7uPwBsUhFCjuxgVa6gTWmQUF3UDCk8mTwDiqdkA8FTUb412VeSjXrct3d",
  "key29": "4fUjtwkMCE4oCCrPj5DF4vZapTShW2VV12AbrBhL2nbRvAFepAQEJXm7zvaBUnD14LWg7H84DiuwJpuuLD2MPM1L",
  "key30": "5cyLrqqwrePVdZfDBQqE4Eq6UYrmTTs5xNdw6Yms6mJuFi3rXFcq1sqgsFecUgwUrRRkHomnMYYnqrfJdmXpTUR",
  "key31": "2W6NZzGor8ScUhfGwXmgyL3oaMwD69RJTBfdJjHcauKDPZidCBqVtqPV9y4yshkhJYxgRBSG8Tp8uG7Yh34rtbzZ",
  "key32": "2YreTVQwpAmBvdoWWsoBbujdYyPzRcbeDQMv8WxyaG6tShTLeBFskDc2bWFZqBpSi7hWytEwFE6cPaMrD1sjBWDk",
  "key33": "LRFwVh4ASysbENYTRdXm9qRnZ3nmaFhs5QAumthEaCPtzMRafwCVgDty4pv7yTxJW8RPvVtJbgAB12QBMaowkdx"
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
