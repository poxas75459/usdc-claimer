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
    "5Phtkmue5b4qrSb2QMcC4Ch7sMjozmhdxdRLxY6Ws1HVYSA2HSSzxi3H64fezRhuPw7hWawp1AYKGyYJaDCQaxk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fZLwEcS51G2EQNEWfSWFDBcmdiraUoUQprVfshBcDU7fcFL8PoYfwcPfGA6ktNzoB83zya61dbpAYVARLsJqTmb",
  "key1": "3iDPzTmMchHsEUCVspXPabRjrkWt5PBMkEv8DhLJN6WnB9iu3PHbeA2VpAfq1KqH14hTNhbZdZf6XYdSa95pAFYQ",
  "key2": "5iuQyprX6dk61E5mhTrgZoKM8eq8Rh1jiwXqtVGzi1Co8GT8piZUhEy4YamQW85wXBTxXueK3ZRyn8G8shXZniSL",
  "key3": "3uaHbykHeXyWzTVBbPsV7iAhTj8JvdopeegoVPP7ZHQ6KBqdDkFUEDjFBvoDfvU4nWYgg722vk2uETuE7GdtzbWF",
  "key4": "51B27YQiDLabKTKHbG6DU3FCraCtHqiEQ9F6ubL9WXEXD4xC9Ut8h3KmsLMotLV82XjTJKwfYN3pUYMMRTC5jCuT",
  "key5": "2cLc1gFWnSWoDiw9HRKPD8YMgoEzyiUqp7NGeoJvqnRQqj2XyzULcjbZ2L6odZTjdS53sdeZXTnektgurk8aar9p",
  "key6": "mtfN8dhWYKYNVJh6RBBYew54LcqFMdjXKoyjSJVw4sxNvkzEW4nAqEaZw4yEfFcqwxQVsrBTxRutH8eXXD2MKYC",
  "key7": "dHMJCbGrHTV95WJikjhaRf8SgnTFKJdXPyZWV5UAW8ZHVhHNHAqGd6yoeaNDgfBV9a4vSNMwcL1yQAenUiSaTsq",
  "key8": "25a5n4mG3GuzvMdNiSXqKrSj47v9UJBd1yKYj8SEqgXwLeTQU5cTAHUsW4ecWvTywRDBv96uMMKCrg1HWe7n6wgG",
  "key9": "5mGNJ74cdLwJHwQ5Rm3k7h8VC29NVG153pzQjpbEBoFKfvo1ghYjUyo3SrgaB5spc1S8GGd6oWnbD9Etonu1LQ1J",
  "key10": "2FT7E9dEjFYwBma1RRvn8N3AkJtPYRNYwRy3D5ERBR2qYruVn31tuWRxgA3RJX6TCk8ATzyjf8m2SWktBpYnodHA",
  "key11": "2gjqAXeWRSG5a3dUKLWbWvzZ5YP6QGL7jsffxE9T5V3km3dMHnEx8a2jJyEX7mLcg55pupu2fQAjdyzjgfa7Te9f",
  "key12": "2jiTgS72E353pnREVR9V4Xc2JiujFmdeQKLDKsC9t2F75FbwGWoBDNGds8WeTQ5qdedhqUUe49STYSoGKq3x24Ju",
  "key13": "5e5tpjnXgn3vBpWHpZVH1gWdQ6JPH6gXnpHfeZvY6oHdq2a62NBorCiApRpLTQCpDoZum1RjckcFeD91hwUzZMLP",
  "key14": "2xLG7NEMfL6zMNdmZrXV9hXocZ1kp6vNNyKbrwUS9F9Qg8aoXZSN17M2GuzDDh8DAk1aSFkTub3Mu2rZFKzFbkJb",
  "key15": "2p7p3GSm3o3VEWm9MWRVDaQ9W99FNqqNxWMtTWYzE8RedK62CoguwwyynBnJZwDh3cWZBG8QbidFLtYwXovGZ8Us",
  "key16": "35anuAJH2voAxpdpZFw5Ar29job2HMGndLWpwRkYqxqfdDmGsBmLy7xgK94gwz4FyJYkyM49y6qugMXpQBygKSTT",
  "key17": "z4j1CUakGx1kiG32wCoyH5XQHo4G5GBsR1f4E2WoE5Uw4gbFgcbPSvPxWHEvarjkSCXPgB6u4aZU4ugZwd8apMt",
  "key18": "QTzG7PpbfUw5KyZ4eWAQe2jsXjjFoUGy2zTBnhpYuzkDqRr49oJowy4RVi1zDATaMuvnuq76oA3cikA693LcXfn",
  "key19": "WTX7YDDJCXmJxEEciUJxRzywiTGX5MMrsj1i1sye8M23HC3ZMEJbzkeXhNbsn3EeKs8dZY93r5Z2hzvbQ9qi4RN",
  "key20": "3GtfC7Gk5Ku6oWan46sqguwGpARVY18YMfM4iKN3MMbqFZmFro9GfkWRifn1eXzSNh3Av99Xmx5zTbnaGkAmT5ge",
  "key21": "4V2R9tmbXZzdU9JoHYNXbHxGDzTrto1WcKhxLFqfUpyvAcMfpD7No5LfeWNn3hfH4D4NKiRZSLVJn1qYsaSCMYMR",
  "key22": "41B6bJXVG4dys8dBa13Uee3VjW6FUFEGbRATgBw1u2iB8S3DLiS381W5ev3XoyMz8A7vPDfmSRBLeRJAfZzr2rHi",
  "key23": "2pktLhaWQsYDUPRgrybdJJJpsvwwkfLsnoqzt2u26tNn6yhwDWhiuRQwR3W8p1k8DANwYtFyX78KGv7WwMTaNhM9",
  "key24": "4Si4URVrEcwEqDr4nPP9dZfZQbSSpALAr3fKGsfommu5rAcQdCmW8zC5sAA9eddyL3Xd67fCYCZqigyVocyq9AY1",
  "key25": "3bGbcJPDaiyDN8mo5RrvSE4r1g1a2s7CRSMYUv7zaSvTSJ6ezgwVbL3wCTs7UKMp1uH89ZXtZqE3WNiLiWyUrrPo",
  "key26": "2XRhLiErfqfczQqvQpVCYYr6RDACemu1FT5s4rMTKSU8Xj3sZiENAoBy7aNEXtmuGdMD5S3ohs4zREjirkrj1rod"
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
