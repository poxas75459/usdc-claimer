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
    "594BAmp8HD7pFAu8FLRTE7HKNNsCC6toiQ8emY2iund9UkiA3BvPSLEXfmRMRtgBtD4TpV4qWmWXa7tH9YjcJ8E6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AMgfcK28TspJXjmwncEFs9UTbLVcsv8kThphtmyGwtRyZiutQTVxSnQonXXnLPhzTRfcPR3oDwtYjWW89PddzEs",
  "key1": "46jrQ5Be6KTywTztFcURgNxsq64vCG5qocBfdWTNZEo4f7K2aTkcyE1y5i2NJnge1V2Pw7hDbbpc2gEHBcYZsyV8",
  "key2": "2JsvuBAtHKTdHw6rkmnZcwUGow79qaQzRMuiXJH3pxKWsji81dKQwLSCJQmReTTbTfySTiBFxkvE1wNeYpjrubCW",
  "key3": "2WvtbqKiUgYHWB8mX6LQhxfMSuhgs1o2cm5Mbqpt7DJE6wWHQHUJrgdDmmfBAtBzBeoe9p9LE6Z2fXey5DiqEads",
  "key4": "2npFg1Q5LvmWhpnHRnV7qihbb6xyFrLjBjp3KjyNJePj4psPCxKh9jBVGpXfAFDxmbTWjVJupVGBc5WfAAtc5kA8",
  "key5": "5MYDjE7pQAw3DSYS2sAaBBSajMjpnrKJPQRCf9V1odBRDvEAjx3Hkc49gwZ5KY6e2DnFuddV1WdbmJB1qfhB4EDk",
  "key6": "5ki6xfGBEitDgiKTfxuCadGMfZfTHFqAW3hpV3rFqcV2mmp3Q6iK7rfXDPp8n6EWASm97VbxXLJomo2ngzNTSdCr",
  "key7": "48UYmuRdygKS8qBFyqRY4PWMuvK1KgovCsptF6Evxs26dM9FjvFnFvnu1Bd3GKw48dvtcNZ37nqFwk3CrAaZattK",
  "key8": "4sku5ehjdmNh9hSJygppUpmgPXUhPRe5tWNYJUA17MAqZeL1cN1WCirJovr4iT3PFxUVuD6Sg3994B2LKqY9KBFH",
  "key9": "49ZVPEoKFV6wq8zjDoiE8xd8xwEuvuq6HN2LrVTQerf261bJk5iQps4ZekEe88tLKANSikbiQBf1gCFhQToe7ga8",
  "key10": "2r7Tb7KwqujG4QzNBnUb4mXjydUFqjQSqAeBAWn7op8ZRQY6PqKKvSVpD3iGu9SWLfWJQVhN9iaKkPGW1F6GSNis",
  "key11": "234yFuNUvEmqu9WUV8Ug2JzXK2FzHmrRMnbi3xpM92bVzi3NsQWySypfsQmi2S7GfNZMqsEBVLWABsnNyULD14TG",
  "key12": "3DXgoQ88zMxG5Bvf6rijZirtZNQaKRiSJw2S3DizqMkGY2qx5G5ViTQeantWykAwqEeUMWsihHnK4qhNyovzF6DW",
  "key13": "3rPYqEj8PUbt1DKXh6nUFTyp8ycNj8uizmzUdb922pfiULeuxUramVBkfi1qWnJ5nnpr6uifimen5162dZV5VYsa",
  "key14": "3qjkU2VJCNWtkfDMxev19nSmjsxExkFnvg5HufJi49bVQrE1ok3cTCqRsrCmsMZQca2vEJYM6SWzJYEX2bAp1Yat",
  "key15": "QTGpmfNCQvfDjsJ7h7zvkt3bioNuqKrwAZfGdT6DNaa4PBSxqYNtcPbwX1oiCZYwE3wgQEmoL6q7C9KpSpdhP2f",
  "key16": "BHL1RCuNs14fHVExjGPeafANEdX3GWAfPAhZEEq4AUp5yfAHtuKkdMd51pi3oVsSqFCUyxBzSqPvyLbrVnvFwiM",
  "key17": "PpS1cDw7bQUAHggcaaznLhXvmGAvYFM8rG7Eo8EvVZ9XjTLKPR7CMjLLphWehAWznoGoGyYDdVpWVcJQ5rSMfZx",
  "key18": "3xCfYYqvQBkPPcpGzRUzkmdzzrUVPzDUPJgHsRxjq7d7NGahZeH6W6dYmo4nuTj859MYhGLNp5FVkKitLFDdNGRS",
  "key19": "58vWKfRens8Zvtu6AuHqdxQe31n7Xj3neK3Pm1avhqh1ozq1iQ5WcLM6jWM63GYxrYRigTkby2A6MkvwTzBqzaYP",
  "key20": "4Q61fKmcybzifr8NCeu1WfoLnSbJ5sUG34KBnzQ49ji1A1YntUqsvDVTnzQZ7x3DxharrRs5eeg1Yyudv3fMHVL",
  "key21": "5agUfqesJcnLVdw1qdJNR4fBfU1W42TozdNAmfkzeHAJ9w4WyYFG1cpTKHQ8bTFBqxpuaWtzSz36i4QfhV5E5hhP",
  "key22": "5gYzmjtPqeZFBFevjqWrdr9oZwenbFhfcTPi8jb47DSowUfFbtKXx2ToT3tWS6CLuDX3zKig3XcLgQEWyqkpJMsQ",
  "key23": "4GrVTSZuqMCt47SQLwy1sWra1YTUA9Ungo8LUWsXeaeAg1Fs1nG1qLJUmz1qVLrx88YLUSeNQWm8vf5gyLkYhXAD",
  "key24": "49fSRhaSj1LwCQzF8VKnu7hAAbWZFYeBsHiEQEporwoTCcugrRVPLvJVzZiyCgH3tmoz4NEqpYV26eem8ssCCNHC",
  "key25": "51MN5VwriaNjLRGSm7E1hHAHsXW5eLjWnVBH8NvxYamHtCcNwQNBx73kTVZAQdzYDswBPAjQHCFMHdiiKCkZJmea",
  "key26": "3kgT35BbucRphGbR83WyhdsZzgY5AS74tEFqiBHaEBPeEeoMacrzRFmGSdCvaya6uKNDnEfnKs5v9EgWgri2QRuL"
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
