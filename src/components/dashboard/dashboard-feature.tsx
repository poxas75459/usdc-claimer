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
    "496QGKytUicDYp321QkE32qe1RWjmfNrx7jkwWb3w6VjznWbB7TMCKpj9pZijVGybadGDnpTTHhCiz9hFJa61xtM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LANCRLPP13cUJ9rvABNUrpsYWmPnnM5VzqEPtK8mBgdDschwrotMMtBR2ENaazDDzDCyhFsUTzuDMLuU1H6SrjE",
  "key1": "3WNLfXxr9qSdpc7Y5NJetw6rSUQcCGu14q4TtwsaqSaJqahKMGpmZvGXx9xBJCEyogis2DZ2gumcZWr12dKQvpKA",
  "key2": "554YSDUX2ZjkSG1mkdmH3XXtYgoRAF3mTMD6jMTjn23YYi4ja5mkmqrj5iKMCtgPDu31xXwMM7Lv4WKBgRhkaFjG",
  "key3": "5JoHpfBqYZMyk7fFWcmbC3uSpoTvv48fDipBXVaKsYW1W9nNui4jz3oJRyxKNBjdeCYyuJDp54jM8vCKYihhwfNC",
  "key4": "qQL2sPGX43XiquNWXRuNQbhfjNft4X5hqgN6krj5UkznYjgH2ixrtCVrLqHf4bv76sdB7jAZTQYhVM1f4NxpBGE",
  "key5": "259weDP9cthum7myKALXBfKKzEDSQTG6ad2ZVarmtScwbS7pT5sqeF2AFCZwATJeSn4pVqfH9TXGH1VsxnQNTn4y",
  "key6": "2pDUQWC43SQfWqVeBkg4Ad6JA3PVAqv8gXFizBMBX4aJYa4ATwLELfBkg3gDaK89WSSEHMN5yS4FAP5yHdQoRGbm",
  "key7": "48gUCZScBoP3eTgFkgoHs9SFGbUgYGN2JEDDGoFGKmtJKP2GNQVWfkXcFxoUEALuA36hRMv3zo9B9XQa3okJMRRH",
  "key8": "4wcPeEHhfw8mmL5UXv4wG2ASUUkqeZyE3A36gK4MRwJNjEoK3EutWjeemeKuVG6yFp1AQaiUJtnse7NWKqnVLcYP",
  "key9": "SUmebv7SbfwmMzHey6DzZ5hJ9KFS3X9Mkr9fB2XhNL5t3gjhtBk8tyDiuJRBJ3Lb3KDYzCFtqmdraMAT69cnc5n",
  "key10": "5787Q9B3Ek8mAedZ9pWUveguu6GmPhmMdid7p3rfv3ocn8YbiEbJUrYvfq4wQfvJ9uyEpekJg9bSnfgTz4Q1VG8C",
  "key11": "3sU9gr4uFQ8qhcL3dK7mFY4axrNKgpXMmVZum6D2o6P2EsCPscj5oxvccrdJj75aWXmudgE2UGrv3saMKG4iStKL",
  "key12": "5FKJfeDFWXaZm5NV3k8Tu1wikuyhK2LUiprEyW2TxxayhyXiuggmc1tAczdi1NZCsmPaGwibacHFPrPztaksPiFy",
  "key13": "g7vnKTT45hAZhwi6K8Cu7fSRmkwyNpdcNYxAespdTypw2a61GvdN9YY1rRsN4A1K948SeuBK529LqmEo1B2r2Nm",
  "key14": "3LeVFuV96qAfGTKjv1aqpeFmwYz4yNyosHyQW5U467BurhPoFToeLUAP8Fp8YkqaMgRZaWRqWW4dUgqMrj9UtbpK",
  "key15": "25kKKcXDZJnspiMp5A2VSQqmhr1QVdJYkQUYMssgtWo2F2JYgFmXhSVPmAsVvg2ojQDzmg4HH75FwY2rqYEXqEq5",
  "key16": "3V2NEEZD3mesLzMsbN2dSa7PrGm4HC2JEJVwNAcqpBCcFrHzxyifHFdiKA6t6wi5LL1zcEqqATd19hBBeLjtFiPf",
  "key17": "5S1LWnE8bNdYJWZaq5MemcebE7mT5s3xTVKye1hW6bDvaCaxuJXYXUVqKTm6Fa4Cko2gFxgKE7Jyww1yHV8BeU34",
  "key18": "qRXAqem3vvWSMc3ryG3xXD4JizHuL79PJ82SNx46sdCWFbtHbwtGP4FpZg4qfhfsuWeeG11nzsyr9NiJmdiGWHT",
  "key19": "WMFy3Qiq1c2XMrrb9CPRkVHtY5HZ8pDB2ya5iGu6Xdapf75ixvg4roP5Au3k1Mbxz4bJDSiz5uQm349mL6rGQDk",
  "key20": "4u8A2b2ifQoWe8nugonhzrgqfh8XSmSytdQQjmPx2AdeK27jpWz5FzfCB27XfAxduRCjXT3iEfR2RjR4WPcns1Uj",
  "key21": "5K6p9vFbGz7Eojvx97NmPpFVCxRKGNDXYmUPK5NyYpeu6NZ71WBBz2QsCdFDRveaidB6EhUG8ou6NsdoaU8zmfL3",
  "key22": "rcTtVua6AkZ78ERnM7HA7Fm7NYst6MPfpLEouyr7A1xiQWhemJsxCaSxVRWfrMxfUyTrQvjnZBKhGDNbeczwwrW",
  "key23": "5wgQwZD2x3FaxvBY4vhT5fPqYs5dWLMqg9LJjFgLUY3YZ72zUKGiVMRwCPuZv528KmaSmoiWEPUcCgNDueoFhHAj",
  "key24": "4tf4xQQ1QP1ppBdecNYaEPAJcyXktSbovcswj29pnA1QJnSJfibZcfFiuyNFBbSBidmtJYSLXByN1Mtj3JDzdrB3",
  "key25": "4MDhrfYQ3iG8jib2KHgASvGZj4Q4mUWnS5aYTnTshVNUsnjrqY1db7toczzWid6EG9hgTH5DQYyXWHhyuJQLunS1",
  "key26": "QAbJZr3bUiWB8BfuyZorb8UyCqye421XRnonH8stcP9m1om6TzAbP2PX37Wm7vdmoE8sPFdwQscF2e1vowwSRbz",
  "key27": "4tw8V9wyhFJPzpyzDKLpnJXKRQ2zyiomohVSYiAkD2LRg5JeJ7WVyQcEgskRy6YHtiFYPfmu2LmR7pzc84wdq4ic"
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
