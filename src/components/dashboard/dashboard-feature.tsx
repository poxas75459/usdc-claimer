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
    "4pGVRMHk5iRY8xUS9LK1aKExKCGXXjRExvigKpKQfPmR6hkJhm45r7heexhvVj3JVJ6xQZzURq1sq23RGAaLpwD8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7TNSLD8UjgQAVmGdkFXzbJangkec4sWHawqVjvVEzVQQg8i5z2a7sESdntvcnuwQX4ujLFDv3tCZBxDZrUqXYpV",
  "key1": "3iMhhPpsm9twmn44siq7o4uNacDG3NFMUoJWCf6n2caxDzFGYUQ4zrPfqKJVCkGbR6SEGBhYBYcgjkm7rZmak7dY",
  "key2": "4h3k2mohBBU64vdExRSN8MFtwKqJBwWdErCy69wjCWgrCkicw86ZzgqPgvfxaDhzrecNcJZaBEcEpTFJnVUXWT4y",
  "key3": "3HKoMeybjsELkGodQiYMuHGYyrZe3RoDnBgUGncsSB9No1Tm1hL5RMXFa9mpQYqzDssN6nkgemHDvEDreNQYcgTZ",
  "key4": "8GHLEPRvxnFqBFNH77LURWo65fZPCcceJgJKuc5AkwcPqbwdYs2RKa2wzfbQk491p646B2Ah8sjC1z8jvBe2DcD",
  "key5": "4wgDjREfYYhFmB1CuwhAW2KBSVyQeQCQbChg2TAq233FyCzo2tHXa5Ntby6L5c2qX2dLxTYq2w7WJRk8VqmYJbzC",
  "key6": "4ZWsrbLWEb7Up9M1RH1UKsmZ4n3AxFyWruDyGtGFnoNiPUTDgGQwfbvp37NKw8h3H7jtrxoGRtbf5NyBvJ5wmESt",
  "key7": "4pHckzdkhUSbAnyYEWmUitmhHwjuPPHXsmruzMrFUGRgsKqXJCJfAVFhjoZGESoiB8AE9BHdbmnVNgLe5KG75PyZ",
  "key8": "2rHbB7SZUuoQR7ivbTiEcyrj8avqfRBFvDSLynEd4sAGV6P2BwcpPvgB3rFvAN9DALYqmofHn55xrW2CW4S71FXS",
  "key9": "4yHCU5FV71zANZegvosQ2hZvZPQWK8p2owW1VTXHofa26Sd9ekCFDwwo9Stdwuiq9p2mXBwJbQa6RWPPk7xe7V2u",
  "key10": "41rMKBDAjLd41wWqWXJ4giVjMwvHtqrReesyCzzodc96sKkBx21Ws5vPt48Ega3DbtWkVLCjEoUKc3Fdx9yMGCm7",
  "key11": "ZJgzNfEvQR5Cu3VKCb9p72c46QiiH64Twuq2NWDFo3JHhV6Wtk6McCna2NYCdNemQw71gEZxwJDYCoA5QSYyciJ",
  "key12": "5Yyi8K7KoY6X7jz9NNdfxC1nzX6NAraMbfKnT3Q6q1RDVEK65vtxZWaZsUEQUtZ8z64NNAoLERzZW4wFi8qDyA3u",
  "key13": "5ANyKhvkEnLxK7Cf3CCVR7tB8EvNua1CeZGTu2YZKFpeZt5q3q13odZkxLRdapUiy9ke47n31i76KC9LPUDfgkMQ",
  "key14": "29NAgV3Y8xTaTJUPCSRoBXLzi7hooELUu2W5kfDbmhLBhkvY9gHXyQuRTsKVGAXoKdXuNwF7Evz7MKXSLss7ZHwx",
  "key15": "2sqpKABxH7MV84XTGQVfuaFCyfGRbYE4323s18YYgpTuTf5XcPkQsuUocpqAKXLfYypRUbPafix2eGBNLivd2LdE",
  "key16": "2eLCWHUuyYKwsgE5VXvE18mPp2GjUTW95wd8VRCAjyxXcrh8fho7jccs8jMWCjc5d2zD7ZoCQtYzDyQGF8hCTKgn",
  "key17": "2Ex7ZktaB5TLvNspqoaoL8gfoXre5BsiG1Vn8kRHrXZFjHcL7hLtoaECCYuubjm1XUcryAvWCivxgFXsa83i4NWE",
  "key18": "4vnqkA5vFLeBpe4EqTt4kGGNtnmLMM5dmrta4XWGdxkWHS3CAv8BN22D3ivTNLapsJ4SfbrcKZVpjm1FNmR9pTYL",
  "key19": "3W7deFMuzNtenBaukpizfArUgqmLDEvwjasm2fntwF1JCWjgmEWWBAaBvQz96bDmMtMBxZtNKJTYxsXy75BNKkEh",
  "key20": "3eGjCEXKGNbrLrR7RvtS1W7g337AEXszUdpSdHSAe3GJAjnXDSHPPHHY4FgtN2d9EntPr5d8iVj82mEQ9BFispdJ",
  "key21": "MzCoWVTKtRjHivGLSJjXpUaSvxsRLAU5f73p1fQqvFyxXrwCFdA4uFadwTqF1pSZPTnSaRQpRk3Yqwi7G5METFn",
  "key22": "533RFPtQbLvZhjcAh624jEQAhSmnh1mwzM2vsXdKW8BbQLbKMFfqsfd5iQUMAxH2nyVsrorrFcJtuwr1JxmZ1HMT",
  "key23": "3e1XbAm2tjtERWGpNb6oAeWP6mZExFNz2FFzXMxwqQeX6c9VXUoCAaSq3LgvE7L4oZz2ZGWhrywzyKGbUkrjvCTg",
  "key24": "2REuuPJT59JXqbUsyb9DHSUqMxkD1Gk5ezZJxCic2MwCmXheQyB3LGqnms7BAHoi6iW6gjKyvG4DcyJMNxnfjkuP",
  "key25": "JxQKw9gyZ1QWruYqz8rBiSzFofqDS3rZ7UkgwDE5jGxyNjPghAMc8LLFHQk1CNwtRSuxscRwDCz6qW7wYxEZwte",
  "key26": "3h7u3ukYUk9ufNXzhoaanAoHYjJCBdhEt2CEvWBYYjvTnpRWR7WNZY5ioTzkNpy8WZouaz5e3Z3zDvL9PhrsmSt7",
  "key27": "2EtRZeazhP3ahWk5aewm4NLxgmJZrCKqtiWURY3cyQppvAyQHUBVit9iV8t9evgjhNqFiKJezjBiAUzfrP5JP1KG",
  "key28": "S7ieUKWqmqMkCyyU3pFbYY7hFwVJ1ZDKK5y8ZREU6mj3tcFgmr2DskMVcL5oikFqbFQLvZxe2oqpmTkuKKUXxEx",
  "key29": "ybEWHP2BsvLumXZS2NipSoJMtcEL1Dpo3HGNDAhAG85Hcg8LMX7WF3XtHUnPneAaGVzX18nNar3Zob5Q1c7a4ur",
  "key30": "5rAVjQRbG1QU6LJ5vRLNad1LPB4119JhtDDCuXgZR3kYXcoXX3zw71DfYXQwGaWAwq7nYQfzJQfuLPJqyTPUGjL8",
  "key31": "5Pin4aEryUcurUwHN7hDrg4W258xgACQ6gwGtNadKyZMAB6Mz2jWPqEgM53KqZtsMp7W2RuTAfreRFZioGAskiJF",
  "key32": "4P8WLB5pvVixQxKAK6eik6YxXgRYKZCXwkZSMhstWVK5oHAZBrq5i289TZVHDRd8FEyrVxxdkCwsEgvu2526SF51",
  "key33": "5FCVXxgHoi32UJZC7PTcUH1vy8QgRwzTZBUteoKyRhxNiToy9CVNZisrbKa2dpNydVBGimuTQsa2HuxLSz4TjFYm",
  "key34": "5JZRFRC1tGemPgQGgwiSP4PmKikkqMRAGAxE9B5uWK9dhhjcmSaisDtwHxfCYRY1NrYM1fJZRJWGsSife51KswwW",
  "key35": "5i56Jd86jt2J4XopBx76L8VYVg74cde7Vr1nsGG3PLAtVrYUiacD3Mx6Wurf2m5UeEoNGe3g6h4WHMQmsDAY9198"
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
