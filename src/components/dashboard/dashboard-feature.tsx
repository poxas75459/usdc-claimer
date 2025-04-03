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
    "Vz1PmcLp91wFaHkCdzuCGd3i2nx7Bj5FoNTi8y54Dt4xWu8LWPCQtBvVnuRPBEgJjrnxqXLsHaiqBuAXKSe6uS6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iBdhVZ2VtTCx18BT5vaqYu7anXvoBm4m5hAVo7GXJ1odnQwoRA3P3V8DtcqYsV5Dq3YiRJk7uAJhdKwnrwfpXEU",
  "key1": "AUiWpnh2Aw2a4dC6yXjyD7z8hYpeG43oej8x9ihYJQGQLNGi5z2LXvmC8K8wLeAct8zjLZjPQvsQameFyvox7pf",
  "key2": "5LtdFwdMxubueAzrWVxTVUUFxpj8S9XK3UR3XZu6sEukiNTeDm6kZNz8YLnmNvwJyKVUqfeAoHn74NsdBktt4MFE",
  "key3": "48miM3KS82qKZw1m8AHEFwBqasLbgZSjvCZpV2AerWKnRXiXfaTkjk9eA9LJk4do6PhsSB7Aedzo634ESq6JfXjF",
  "key4": "4gc6bWW3XSQkDWcLcPeCGnMYXksWHdmRsMN7Li5zGzUeqPWDTGd7npG57P81WnC6WPz7G4QRPA7no6zpgRwN7bUp",
  "key5": "NSkXcVb31zVqeTGbmwMHdt54SoG7G3vbwqHj7EVzBvDRZNwzLxaDF8nxU8bFgurah5pRcqkxFABD5RwHihL72Z4",
  "key6": "218D2UKoJ3q8jJPvCoi6qexPDCdAyaoA18aLWF9bcxb9ogiLy6JdvCGPmJ1VsB2VWn9LEZbUHL4tcE4qDdr4x35H",
  "key7": "3KUWkwyiiju4pHmkgKbYoDnqkMerxbYeGrPLTVR3NSg6P8oLtpaeFvUnv17UbfBeqzkwYwK9n2RvftztjKYbmks3",
  "key8": "3WM3DGoVzPSfqKwkwv2EgnfRnmyvPHzkrrnDdmZVFq9PXCeTi6q2DGoeaekQKJW3YxrRLtCcw6VrkWRYhnTgMTsp",
  "key9": "3y9VYwpVxe6gcgMWQm4FvY4svmV5bzHDT3e4QwD3N47VuLaJFeS1MbHeyAjaqQkfj5LvcaSRrjjGWNkt5dCbeB19",
  "key10": "52tUHBuhqtzieWQxGcuSaYXWtvwJvkX1VraapnhU4KsWAB1f5KpvLakqoeeKbo1QvSdk9bCQXCbNbYuN1UicSSuv",
  "key11": "PUxyN1pqu4JrJkzMdMkQS6HnrfzNwJrV46sXZAnxAhiZ7x2rurfo9Z4nwbrUG3fiE6mc7o9agrpd8Eu6pQZptba",
  "key12": "2AdwWXdsx3D7rc2eBexpgap46vrJ1tE4Ta9HgXcJXhH6wm9enXRv5XjBXqaEYD7MtJ8vpRe6H8Nx4QVoufPVToFU",
  "key13": "5XgtoKFmADAap1z7EzvYW2MFUo714WymGLkuwhJnCVwdcTeWMbHED7N6PGANBtggceJ8pqPrcSAGWxkatn7fmz4U",
  "key14": "2Ukqqqrhdfpjcp4rb9ePGhRCBpFjBMjtD5ux8qKtntFZm4penqu3YRx6e169LbokdUxvG2pYnENE8m1ATLPeuUDH",
  "key15": "5bESvbHBJZjteAmj5wyiWNa2bjojTBTGfnbVQq2HmaeJD543NG1grT6hmeXQWnoKykhfHLAr3Pby7DQQiWET6gD5",
  "key16": "2f5Sn1BM9QTJsxmud3DFhF3rQaimUTZicvFiddnunHoY2Phm8gJwQn6KTMRF6u7GKLB2YQCgzVz9BRwM876JmRSJ",
  "key17": "6CcCojxwQdVVEmsd1HZmRapqiZHxgCg9HteyMhnU2NiRUYexacgM8euRUEK9PBM8ugqB3pRgZg3UJfoQ42nqZhv",
  "key18": "5X8mWKrT5NuqS4XgrrEcTK9Kg6b2roA4G66HmPpMW9SnyaaMy1ExRe8DwoKEsaxFDRdtq1E3Xoc4hdCHuPaxHMQn",
  "key19": "2RHsT36aNfeZAe1JwAqHpdHRjLbDcZJavRY6ViZSkRetQQ4pe3Bac8oCE6jfghVMtof2kQs2nxgDh5nMAkN7DJWu",
  "key20": "5PwvFp4xhJxhRoSCD8sQHDuV9YoEs9AapdyKpM7Cjxt7Lstt6JqSLVehTRD7tBzZJ6Qd4Vg1eeyS3e1QtxfDH4dL",
  "key21": "4rmQNP3omSJxQNoqBDgtKk1mC9a48GMeoitZGvZrsbE5gPi5qRgzAdbanbkNAqEfZtCfvxDpvdPLDS9FqRatmhV2",
  "key22": "q5rqoEuwuDufhx1XeTNX4y11PCEZ8uYBCYxo7QyX1QZ4FHZEUzQhWYw72XLSQ4qZVb657yKtmno6MhyZVSEFkkj",
  "key23": "5BzCutToyxRcGwypVcDMkRViw7ZEQ2KvCTpfKgXJhhG5byEiWw2ia1BBukmpgojs2SjTUZ9SxvSmhcTxHui2MVhJ",
  "key24": "4UBu71n1agD9RFwMK7YgFWTQb2k9knEtDRToZsG2QtTFb5Na5VSQitLV2GKBueCUnWKccFhp122uytHd16kxeRVS",
  "key25": "65qrVAdNWJVYf2x4Z4wH762onFZrtS58aw5sPQnNpq7xqXXBsofrwC8BccD6FvWSDecnheYcFVYvgveRrruVU1bG",
  "key26": "3WfVMJCFLfeh2Qx1UM2q1bXhQdZxwMjTYbca2bRqT2xJSgnFnDF5pCoL1i6ks1hotH4qM3uu5vM2i8Lbc2jLc7Mn",
  "key27": "4RduhnXXfcNkFn8CBEA3kLkctAnFsFQUtULpz7PH1FwGJ2CBHfc4WZcBn5qzfEjFWsmx8CLcMjrJLYAS7e53PY4h",
  "key28": "2pAr55PMTJNP7soJzHN29KEWqaGtibm9bVZ25UFsSfjm2dRspvHxEpStdstYqoyGp2n98GTqVRew2hhaptBChSkN",
  "key29": "3znVde4zd12WL7QbuCNCjxBUGAR1EP16DttNPcW8FksmmhFNKJrNWcRM9aDoQktTDuc17G2qsUPCMrYQqAuqLWBA"
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
