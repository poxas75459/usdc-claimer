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
    "mXEbTpE3ZUrcaVAaedMVVAzRYS4H9P6aF9wX52ckb3iSLvM7DrAhG58XYB4H9mLCiKAYHVJSYCJgY1taXePxcwG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LqmLqSRcMwodfumTkLSmyMtwvGDXyjdeeMyPxsbDXFDjAieghLqsUa2UEQjw9ctPhq96QaZhWZ59GzhoWCtFRPV",
  "key1": "4XWXD9KmQRzHGKJQ7Njv7ChT5Jpruz4uzd2JvShFgznaEmRgVPa4N4Pv3XvakmDekgRWoxFJxyUq234iJggZuSuJ",
  "key2": "2mZrNHbnxF8fKjyGcw9NxPWYeDKKRj7mT4jFqjnmBzN4PTco1xJcCfnnN95qwnSvWdh7iaThWsEc1UmFTPgzaMEB",
  "key3": "3sbwGNguzVUcpCFiBLogV2n5NbecGEeDSh2KV678fvzS4mZZG5D9PeCVaP3voi5ZC3pUNPzb4u2aXe8Dfigsnhi4",
  "key4": "3XZuc6fiVvDnoBVozHkn9R3Gd5DTAonjLj4oUWvgGT4UXD1AAVVC1MMFk6X8ra2yv6j22vQiW68EEQbGaGSTjgWo",
  "key5": "5dBPyTf1oscR73xLRvjfgDbr4r3khdJKmXVCLkTxJ1PUkYxFjZ1oQ6n4zKU1Dj3ARLWgb4EsW4oyRsV55RAJq4Vf",
  "key6": "2Jxp3BFspoMvq66CM93Gk8PofkSXNmfpjoHn3GpGTPHosQsJ1greLr13MLQhiPBPY7eLZmCRc5GY37Bb8ZszysWq",
  "key7": "5jp3z1Racf172UNLDCafYYkfQA3qfSb5rCfFzmAxf239qRnNoSxqsS6rAEptkrPNe1nmBMHyyv7p46rQHB39WryV",
  "key8": "5if6WdfNssfLBsdYxcj7jS6bLrAxWAtvJLeVbEg5hKnuvYVwYzvE8WMcQoqA82FEaz2uNiwnnxPfdcqWkLv5FZKU",
  "key9": "xocKY6BfVLtD1AEtyaUCC3dDqj5T5RaKTHJFx2jJ9Rb53rgLrZvkKarCHoSjAwz1KYYtvTUbJWuZW2SYzG5qXtw",
  "key10": "3bTnzZNzHsAXA1zVzmNQXeCYj3w8yNKYHPWJGTni44gnz2XP3WfjmuDKGDrfsxSHsFqaNVvTZcNFxzdekfwioGjD",
  "key11": "2kHUJ14TkUTzSkfsYjhYhSBNDdxGUPat15fmiNrZfEBoxZYqnrPTu6AVbSVWStqZiUR2kLszVovVAqdbuj5DiC7C",
  "key12": "3AFs2UmcEhNXidhaLYwKjLd3MCZw5KGsSWCsZRc5xJnAZLjVBLeCm9TZxAXsRi5vSEnsMYdWK4Krk51zwh7T6Ao9",
  "key13": "2KaCYqcM1cV4dGsQR6aGUM97CXXz3zu3x7tcpqEP8jRL5sJ4TDPCxSP6JTpt8Zv4HFddvdn99RHNbnjy66rQ9kmm",
  "key14": "2BCZJFMfx73My3ohKNdcs5NVyK7bNirwXxNM7J2JksZKQgNbYJpxLmXrWSRtwU6j3uyqm6w8rTfiBWVNn1WWRiKx",
  "key15": "bxmCpVPGRxwGso3V5JvrAFHeWXku3jsdDdbwWGxWM5vmzxQLjXyTiqEcwSeBKA88UTTDz2ngB2Du9n7KhrwebaY",
  "key16": "5bTADE8joLkUgwwwTG2hCnmD8ZdVnpYc6LwcdC1GKg1bWNjK4sfjJiZ35x7eKRKT1FpaHKfgVfe2yrP8SUgeDmL1",
  "key17": "43o2bhsQKfk2EevtdRvWD4vuNPTkF2g6yokLdF1jWPamACDaUBC18NJRrUvjYNaEN5dxFJTrEqj8bngrh5NHgtXy",
  "key18": "5Jxeqjv3abUkYbiX5Z31HEETbbSW5rg9o4BY2TxvgN6S2ozwnS9D9DWuKqJCdagztB9JA7PqwRBeJBCZmgVr448c",
  "key19": "39yS5aMunn6SXpj9cpcEC9RZquY5eujnq1Ydo5bxbUmQimPYx94wEnmCsPSgnvJLXaptLec2XWT1EqyHvTLSLmoJ",
  "key20": "5mLmKBzv6zpu6jush6eM1KW5eJ1PStwNRVkqpSTL9VJYY5EaaZ22WCtNpbDg2XNdampaPnJPC3H2f9fxmERxipek",
  "key21": "27E3xSmi3hZeX9TaibYBx5dRLsgBE4AJP843hRTJ4FhpHRVcx5bDRWqQCXPArxz9gZzK21fv9jRjUzS39A7Me9vv",
  "key22": "2oTQNu9wxToqpLnkJymUmnwxmLo6QNuB9nwuxfbqBvK2vLk5PsdDqCn71zci4MbZbGRfuGDgEFFFDfHwxYkDgtv4",
  "key23": "onbTg9Emio4yN4ktxiGpYVf44Q7B5QQ4JfR9DqpTVX1zBrzfqaSQnANpYqQ7fibiJxD9LKPkCQnCAtxJmZggLqi",
  "key24": "3AMdJPFmhfr63B9ocg1FLxqwsnGNsttUCPL7tiUvGj9sJQCeEAU1Jy4yHgFjfT8zf7UEqX6zuC9MfCcv1FkcCw8A",
  "key25": "4mP7GsJRQcmRK9bJ2wJGjNkeu2Vdp8yjCXWfRaganp7kyGFVSKXG2xgJBKQmKmgbZo37kzZyAByE86hAtYiv5cr8",
  "key26": "4aRuLwwhDbEwddp6x87pEDHDBo3nimXmUhyN24M27YAucGr39kt7TjQyXfJYbB17wFu1KMtt9ApELy2s9cFvWb91"
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
