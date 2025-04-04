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
    "2ZwJi8Gbf76ZPH6wDVrfiGZknJHTZfZzQY3yTm9wvx91PzmM3jDdRNJjQhafvi4VPqh8YJfKPZTzypH1XM8XfNaP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S9KFKjvgAiEE4xkkCWF1hrP24SfdAbh9vCwk6PC7sYaDjYT31hCzSgNYy5phN4ayZvEeNSePsGQacpipZ5MnGcy",
  "key1": "c6T9BJ1139TAZ94t7WBeTvrM5NWqHPgowdjvUQd1NKM9vSq65g99vnpyn7j8adsdvGnawSTYPA3E1dr3t4PiGtT",
  "key2": "4uqfJmZ3dnsE9NxnEXZBSc4twNRV4uu6SRNRHzGDW6n1Qzv6ucs8ZMA9kkRGfCzHP9QxNrwPsicNAf6tqLWXBSpz",
  "key3": "4xWD6LbjDLmm31qCBHm2kgcUCc4pjtss9YwWXxbuSQK2UiQs6FnNARCqbuhrRdCg1rcgmYuoKHv9VnQbCMNA7hxy",
  "key4": "5gxkkVSJYCuqsJ2BheHHDDCkvcGSNGF7wL3Z6JJ6hmPkvVgBHKbbWsS6X8b7UL4Y8YRFZ8C82xqsVAKMokGaDXgg",
  "key5": "4DewMCj6G55Cm65Dxskq5YWHAohAVERHoR4ekAcsxbJRJAdtJL4SBxdcjHjT88ub9FqvNREg9TsHkEXAuRm8oKEL",
  "key6": "4c9CnbgwVJkNphC7orbNLg3XjgKhMy5gQSicDCfqaqvToENqYcSUHoyDFGvtZXscZ5EZPnyenKjmhix3ENoB3rgD",
  "key7": "x7WnTUnGafHCt4BdMTwpA2XfyZbpDZxitC9DpK3bkxDXL8P1fc7wJubuhNQwzTM2dEyarG8ZEb7ZDUWfMMC3FVN",
  "key8": "2Xdm4PuEJxtNgc25f5NtFCSkNxCsjvz985ZWNDSN6MykzDCjDB8JJpyBLvfvrkL7gJMrjKXkFDQE5yq2Ljffzts2",
  "key9": "Xzy3BTkM9C6ZDdBR4BkAwQ1QvVRqiN5CwZrLv994zrC6mxi5geZsM5vdsHenED6YRfmfRA813FEeqBwQYMnJxXd",
  "key10": "3Nwxo4Ffi7NUbMhgKzNZVF117Wn5mdP4C2kGtDRzKFHyXCu3jAPSBrsyaUtej1G1KyPVUqcKm5koZ3T7sq3mGxYD",
  "key11": "j5aUFmLDHgbdwnugPr9E84Q2WXTVktddzVrbC1DT6nciiMxGwXCNqjpexWW6XiMFUAn1u9i5s6148TLanjUESSY",
  "key12": "4k8ZBNA4PSK6GZufb3uSgy8ifFe8M95PuEYw8g9rsk8vmXyg5qFptKZ2xrx9stRp1dhukPnxLGvT5juUa7ecH58Q",
  "key13": "5DZ45rTxDzvZs3w5sWhwSx4n5Kn5DrHyWcNTtcZD2k3zSnNJYeXCdehQRtaBrCyX2XM8YttE6ANX8JFyNv9zVZFG",
  "key14": "5sSrhZACj63ZsWZMJGEciUN5QjZoCy42ELMR4YcyWeEuKq8TxNhW992eAeNoiKmzFmonQ4sZz76cgP1G3HLteRWQ",
  "key15": "4uQzJNPgzir6wWpikASF8W3UShvDUiLJtsNVZX4zkip4cED4c3kMS3uP7zigSTVHxi533CjUdqW1XCprjUkvPVyh",
  "key16": "3fbbcW93FG6J3KxxXfwrADZ3BXfvrCggT8xerWfj8W3ymsEuvZd92MALfAKXcH673m9QdkqHMwJXmxEBmEiJgCRd",
  "key17": "RHqGv1EBxGJ2hoVjrjaisLtfS4NqWWtiYwt1ou7sVmAgy4Utq7tos6W6YJQQU5Xtoood6YiUUWjYf8A6yWq13xU",
  "key18": "2RNjrdDF7ZacemwkDj25T8XbkEeasLuUzy2y7d82MVndwSiRbHzGF4tRcD5YWYVaGnXdjn3RNF4WVYRAr7Quc4oG",
  "key19": "5N6kcT7uQePq8M6THtpTb8Lmu9i5R24k17NB8RGtSfMH22PLoXvc66NCWY42NpM471TRAkZLsnFpVYpG5P8KbZMp",
  "key20": "44hZ2dXFu37Tzq5NP3e16wbbrLRTEx6tWYW27PqJZ3qg1PEFX9ouRVVAhivrD64f54TkKmix3vkZMZHnHvqdMzQV",
  "key21": "3VptokkDqkcdunGL4NqW3usPKtV98ZeK4uoknsDK6UW2NWWKLyqemsRQzGhjuppX2HQQHSYCGyERAWZwNoKVdAd6",
  "key22": "3HjD5FtEjEAibzHJkRRhgsQWNJLTonraHXGqMXy9ucd4JP5mY7TqB7NX1X3xGsVA9pURaYwybj55S9X5fb1MWj5X",
  "key23": "63ishFPuAhnXpj7hrHwdWmNgv153QtKqSW9HfMNWjcaD7HrYJxjoQ8pjizq87vTBsv3iP7XDposDxxLB5KqdC99X",
  "key24": "4smUNXir5go6VyVhkcq5Hx9hUH9mrmh1PYUX5RwQ8wc6yzfAfPq8knXTejDT3DETGX15DXbf81p6ugDeeieP5JU1",
  "key25": "FBYevzwhKMiJft3gsamjAuXN9fFW26gNzTRNuzJ69RHovhZn6emzNTX9wjoLsbgjS4NNuG5W6utpABSFY1GRvft",
  "key26": "5arCcnTZEzCogBdDXBnBkUMn2wxz5SKNTyEEtPZbiWiiV3mweiM3Fe9X4o3rCGWXzaNyxXCZFsCxvCg7DrxDoTXK",
  "key27": "3MXDEoXM1AG6eMPdBziikyWsGJCVygiR6zUEAiMnTZGbRsKqh5pUhypnYVJz2a4SX3aMNKbGsAjguGENtuWKYBxT",
  "key28": "5EAym2FX8bSWTZ1rRDaFX56zShLRiTP1rJbEBeXhChbhwFL9JPsJkhs4ZryNmc23pXiKkp1pHmJBAKvjUq4fero9",
  "key29": "4kmbr7U1v7XhYkmS6mXJvMfY24knTp2z44QTx3ivWfQrxTyLFQBt7eaRCXiZxizsLPEMFF1s3xivMxmJiCcg7in8",
  "key30": "3uDxDarqs6gWRSoAZFrL7XD2bXKsViFWVncveNUQQxdXP1jJtRYnFPVfKsC1toraKFEsthhNh7PQCeqCeTKvmSSa",
  "key31": "3UjCCC9GJSTAuwDZRmviF5TmPs8S5TJEjTZDd9T7qs8hRv5cgHiGuZe1PrF2FDyNJb8tSpTTLTpJ9DcQUa6asvfr",
  "key32": "58EH1HQXQ8w2P5odCJ84vzUZXZHA5KMhsHB2sEC8pnKpJ3M6sFFkdBiLo66i5Lz8rn8rSKygQjBw2Z5zMQ8jmpnd",
  "key33": "RvwSK5Py4sxp8RKPuiensRgCjpcitQd1Q3ep5GUXRQFw23gJ8qmov1dDwBqzoxskCxDRh2B7ZNdttt3JsAigjRu",
  "key34": "4SaNcbx2HjhEJMFK7XnLBdWYUvCBXsq2aRhVie6HA8Dfny2Dpqyr1LGyUhJkx9agaLid7ZibLakH2UZdP2Pawx3h",
  "key35": "63autNVWaqk1dQAuNitQioBRa46bZzzxMdkep5PkZaWYaezva3ehsXJoK5Y5xY8y88yGobF6r2JogCXN7o1FJnt",
  "key36": "21MCcoQEuzY4XFgQWQygrVoxYa1T9DbHwJbeP3Jssu8snfUmCBNbiySZnzjiAENRSaQa1pychCE6ctV26gGfZMLK",
  "key37": "5iXzckW7DPuTUg8phYYy1BUv4KJRcK78XGy7d2A8G8Gr9WX9WcDwRyJTAteEPzneXniK7hvH19WMDSLtpwJBvqUv",
  "key38": "3x1DTukmk7JBUHtJTpsVhSoCQrX9dJrTRH1h2FqELtdnKP445SxLtMrgty9Z1pHUHW7dRbcREBJJ8X9jmnzdo8bh",
  "key39": "22iKdduqrZhkh3QNZP6N8gYNrBrPbF7CW7Dzk8DDHkCESexTAZpVyoTU3wbx7gb7Wk8UjSaCZXpFhz4mr47w1pMv",
  "key40": "3TN5JKgfdaMrwekKZWTdeocBs3iysgpJdky5fN6V74phwGS2t54v4t2dhuc3rRcNB7RqcB4tbo6t2ACt5pJ57HYL",
  "key41": "3DDkLBjaXANdrrMtws1wVcFyz8MUnK7KtxtG6FBitECuAREy4b4YpPFkP7VutTtD67vs7BjZ4E2ZTQtKbfDUUU1j",
  "key42": "3qBmZ4FNCkcPn4nMgHnwzdyAQ3WryVgsrxrgH2Ehdvfyr3MpGGi2Zr7E57NWuYbUsNHLgrwcjZsrXUs3rbkFfhfP"
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
