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
    "3dXc3tGYzSZwkqWEw3GVPHnvaDgGBxZ49Tj1FrcR3QuQdsTP9sa63hrWHPosbM6Hw1cYjpJF3xqbLmaFi69Ewsaq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mcDJ7H7gabheFhbcnfV5DMdyzuupiKwFTD26U3PTofr2LUzHuwweCuWVaP9UoYUD3ettoQQrySDxXmJJLFBRjek",
  "key1": "27YvGBER6ZrmSMXoykyWbHf6tPimxWgD5ZZApVk61gNtiqFz97ifdNMfkgPFchihdkFkGwRD3uCiDAnY3Q17hbBe",
  "key2": "RRFGBSm4LGqRHFHvcrGVM7D1T1Ha2y6QNoSy4oQtqs2tbhDTaNDNV9RaKGoi47h3Ve65RKMvr24jwh7JAkJWtYa",
  "key3": "2yxiNUiNQ9CP34LB1rDhooMe9wHB3875khi7XQQEKcyyiRRpbZZGeKDnrVEoJqxDWNrEDNTb497pDpsjKe1k2LEM",
  "key4": "3qJjMikhSRntuZZJ89xrmZFD4oE4pDMJyDmyc2J8JZjk3XKMtKRpB62M2Qeq5J2y7PBPqEFSTvzrHoZX7WEySFYZ",
  "key5": "sFjXvBG73BDqfCfoJnG5NjB7KekBAWvFR3P8jMv5QreREzZ3VCz2jBLSDoLUQFB65EWrbPcJSMfECf2xrqjg4GC",
  "key6": "5pveo7Ciaa4bewhySweD5N2GDWToSKxigPuiLaYFwhcGx4XBoT6ymA9K25F1e7BH2yXciBYqamU1ByM9KxG8mNRQ",
  "key7": "56ctDUfjeUBCuHPnBc2CVCEULvufz2sQDPK1CLUXWaRjzDK58QBiBFvT5PXuDQ6VsqNLxXQXCPhYuf2sqKV6ZxPS",
  "key8": "2RmRGBVrXZoFrbkCk57b9BBAEAbE2jc3MfGEwet9efpRbLkqwZCKGFaiSnpSKSxWaw7UccBsDZvpZWW3wzY9Vao2",
  "key9": "5DFCcCiX9UNfcTkf6VUjUKvGDDpMFTCb3PDNdyHfaZ6avurkYvZVJ7KxcvaXHmajxAt8rxeLSVDxgwbsiCrMxoPR",
  "key10": "PdVKf3CamN3xtfEWdc8WdEMHrpRDhm4HdtSNyoibJfYCecNb5yPcJEtdN52AJ5yPyAESSfdAeQuq9pFm8mSQL6Y",
  "key11": "44AnDYiKikCsaKiDVDTbawAkeT1YKFjTS85dj7t3C2rbVUfxE5fShu6gpTgHscKmqnRVVvDzwMYFzg1MNB5QaN2Z",
  "key12": "4W8JmkECwknLtRcW75HMvSQGC5BbP5CcY4q6Xr4CLczuhNiYdza4HJB5cPRm4rPBn5jaTs2mir22TNQYzU8hXH6Q",
  "key13": "1CrXLke1sxNw2pp5e6imf3Kof2PLdfTFhQxo6Znh9VxuoAswXsaguE9JJJ2mbAZZVRpJp2Tq3GfwfYSuQy6TgFP",
  "key14": "mcUr45wy1UJ8ip3nyo85dkQ4szhkeFVCfybQeqPLXApPDBz2eU6oFqvuHS4BrMQi8ZHi7thSbGDH3h2FQzxSDc5",
  "key15": "27H3EK1zdYFtpwXwiYRXjp2RLTWY9W1Liz1HeZfuYSxgkmZ7piRNpkemiPWhy2mfERkoJPh7CotNDu3Yg3S97WNU",
  "key16": "29eQzDPt3r7r8gQU4AwqGNFf84C9aBtsLHd71omd6xNzguCjwfn2nWWDSfW5ghAfCKYeS52Vv9XGpF9RknYsNyfr",
  "key17": "NcXFsizumbQXYrLexmzwrDtXWtVLK3kTzESD8daXWc2qbUpmFcb6sUMpLweCoVFrWdFoHVJYFHVjT4pSovGESR7",
  "key18": "2fTT6LHpPqTK7AhBKM5ut6cRyZLCL8Pj2ekyz8TrWPgiDLzY2rDEhHchNbVg5GqqPkRJzGXpHjZyhBx5wT6JXvht",
  "key19": "3bUDECBzdQiFVN3ZgXejCxgS6XoSWq2hZFwCFkDZyRZw6CyozQUNoU9uAtaKJPYfYpjRuD56buxgEXXLN2BV64pr",
  "key20": "cPucZuLeqhDa9jqohRmaKxLfB5Lzd3sXHfEWoA6fgviMzYgz6mQ34kV9dkyKgpeBpMkixhMAeRw7QGidJvKrLoG",
  "key21": "4gwJVFNPxFqw7WPMyW9xPKdUceGAAgYDYAj8neJXvjG42sSpS4rDPR78PYfdoHWJuZKUaTNxHTbJ1mRF4PPUFE3t",
  "key22": "vnkhRAwbyeuSdvZQC6sFsBNK1VE3iDpjMRnhZ4zxYLmM2MiGeF2MmZoMJPE93GuJkMzhH9qRhY7SfeVWThp3pB8",
  "key23": "3Dcb9UupW8W8pZuoc5P3WjdGPba9ebjuGzxUGktxfK2tggrPkhJxD1e4tJu7Lp3J246MTQzSEvsDeaA6yM2zMFEE",
  "key24": "53YpQTRvupxmCgSHJkLXo1zqSMHRgbe2B91uBCjY22rqLq8Tn2DDULpJ6yCQLMxtfPz4CT4d1zU1v8nSRzVGsss1",
  "key25": "2BWQwqevg1V1nvBtAFrDRmpgMXcvimEjLBVifK37om73bcT9W64PLhGtxNujJo5g8SomfBFQo2ZBKps21QRmHFwZ",
  "key26": "43BuHKDRv83oCnDJr22S9juy8vepsFoVxQXTTm7p8N4XDHLyjHPUJ1UiNpRDPLCCeKQV67b1id94eFCjvRw5Gmae"
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
