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
    "3in32Ly2SXneUUhQzrEfwcVaE3pzdrNyci8pUfUVsrpcyokJ2EwEhrTsjULy8bB7u9WPjrCNZHyja5c7GKd2e3c1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Kkvzn9eEXsMhuT6zi8kn6i8iqwYQjZ6UDe19hdc3BeceY1zDaeG4m81m1SsQMHEyrjo8TNGD4DZnQncu1cD8SKm",
  "key1": "3VhXG9TKv2ge4gd2SCzricorc6tAURiw2aRTburiuaB4A8GUvUMjt3S5tsqrhpBgyZNMBBh8DZsJ3qaKAZtuceVv",
  "key2": "3GoeGiwBUg2PdWj66chVgrTEVRaMgZGsVRiRHYAjGM4iprumV9TnmeW32qH62YwtFKSm6w5pTc1dfQmGCNgyLVek",
  "key3": "3fsSfDiTJ9Y5B9okub9SUmWpnvo6uWF7drfHX3iR3e8fb39foHS3zhDKnZ7cnSG25FZSu2aucP296kMeVxES7bjt",
  "key4": "5Y1c2EnkJZvzrQrzDGH9jA7q5T8e9S17bkXUTf5veV8jNDn1DogUDmz29Dseo3e21etj6PP4WVqfCWh6bY2E3qYL",
  "key5": "5BG5SUDYDGC8xkaRM9W4aUBNqQVQ8zv978NtSEj8Hw3V8QmLWY6RBBZbhAD7zQS42CKMaqCpPUj9e7kzCvufNtpJ",
  "key6": "2XBrq2qWo4Edtx45tqQoZgmbpn1EJmi5CrhZs8bxchds5GD6LyciWn1sG5w7UdsnqWzKg7aKfdvXCTojeMSGYcnV",
  "key7": "5P31fTenk6fWUhn9S9EXf47FUEqh3jmc8fAL3GnroTkD9UqH6XW6QPmP5U2U2yd2iPujWAKyATQEL2paan6tnmkz",
  "key8": "2SfiTUAJivqLcYXLdcYYhh8UUnDnmtAsdcTFoEXZ6MdfqYfUSBPbLCCjyhWfpFS71SBagqsto88b3W87hAuRVWWF",
  "key9": "Bf8Q1zMjNjpRWwGbETJbCxvSSEYZZD9ZAFqCQP6Lnu55J5XcFP416W8RqLqE43M368UN1ghJYfCfxS7r1VNY64S",
  "key10": "5STax1K1xcs7hdymuBEa935JwgexzUaggyjdRZihoZD9f8MqMWBLEnhqK9RTvr1HbXKHvhyoTy6N2pDSDdDLJSZo",
  "key11": "54KzpPt3Jf2hwbxgRVq2zdAGd6qcYc4XuKp77bAsCLt6eLnyQUv3VFaScz1kPp4Mq2XrSuxKHAYVnrjwwnjk1pu8",
  "key12": "34eUoaBxNFmvu4Zz9vF9H2f6mnC3F2L6xinPwYLBsTthJErJ1BbztwvRkkzmQJgCyqnJ3EA4y3sWCHPkKDKWxSGL",
  "key13": "5bbcDucGFqJZdjxbBaQowRgZGduXAGPquUo6Enpx8syxt3r6aFyrFLzAVy9PeUXLjp7sArLPvUaciokiUZmo5TW",
  "key14": "37ZCWB87ZceLexkxy6B1eV9u55WtSGF4EAcHxEQWfMwXdExbH8rzHNC3gpUeS1oDHUJw9Nn8gfvjJx9MUjcx74LC",
  "key15": "2u3GEh5gq96PqhwfkZzk75qkWC49yUtekfWqi68th4ZDByoWqRGPUk7s72JGhXyUFJUQUEg7aGN3pjKgYUZBqM92",
  "key16": "233jkAMG5wX9pGDvkYHAgYV2BZwPGYiqAMR6ZS6FZtMgtXYhtNfrysn4TKCMqiXQBUyCH8FNZsEPZjBzbq9NabYD",
  "key17": "2EgPZ5WijfkNRLLNSbrfKYzZYaKoy2uSjJSrGTyE3b3gJmEoCJLgvwWhJgSvUgSNgKpDUcGrekyMYa9JsZmNdrjE",
  "key18": "27WUgL1cw3tLZDxYsj753HF5Y5TTyHZa4JbReEud3nS6e1ExgmzDSg8cXRd2ybX3JwC6ZPrHBQ2f2StjHdZAmo6o",
  "key19": "gfeY8nb5ZdHz7FwaGxxhPLY3GhEcAMScEU28rHrHZ19vLGvkCenwEDM1zm1qjkhHwemUAJaZEvCZh2HY2tNufZo",
  "key20": "4xH8TZSiKs13SFjKPCkWinLhtBPAG4mUJE5dhxpdQ1EFd4aTKC4aUuq13KJzZedMziaQVeKpWK12P9yCM6xFzoQz",
  "key21": "34chKFsWU3pE98T98AZEcHRBQgtwFcFT1GS4jij4yzwioDEg4WSEHQ5bVD9btKST8mUZm5Sy1bCgifJA3F1WSqRQ",
  "key22": "5MMAfkqCrFRsoHqMVzj8bwN5eB7iJ2p2UDLw5XDUnPf2jPmmHLuNo1PN7GeLRDStgEH29H5YJRriZnzaJ8k2Xcf8",
  "key23": "ajWTLg6aKUaNtahBihFHqj7AMyXqrLQWe7fuk6JoMuSPCduKsJeTBXfZ4VDNoFmUm8Zjiwc61TvfXNkatRenWFG",
  "key24": "VYjeGqaKM8ZGNvBymKmNSZBdcmH2zWGLJvb8xYveBNLX63WBrKpKSmvGBMKHqpivD9xAk9oZpsdyTitmPBQnRxk",
  "key25": "3ozVytdWRBB4448c9B6rSXp4SN6Y6uDcLKzRBNXg9xS2mWD9hyaRC2L8R2kNSHhQRHw5o7V9xeMK4dbqE3jBs2Vt",
  "key26": "3FNWJpkrR1KtqYtKUQVMv84VzESw7Y3XVVRPrTPyejQByTnCauTJ9CzUwybN6BF29sS3XNf6DxgDFTH4EjGzZgNW",
  "key27": "3CLJUksoT4iteafZuoVP3wEyQzHMAQDnMV6eC9sR5ya33zvEt3NViD9Z3UZn6VtnzJkehx2R12vqpMwpqM7gcHf8",
  "key28": "4zAFyVWv2g9wQYMrxHAqeszu8G8Tt1CtgiPewkxKh8BpML26nNgaqhR2gkE8GKar7wHvXN82F79GFp8BxrZWz4mD",
  "key29": "2epaPjQakeWTM73ZWxFGnnEP8iQt4oVQPwYreFpLropQuh48RNZHrn7q3RQbhL3BoMo99akjkm9sUtexNeAwfeQB",
  "key30": "5s9yH8uMJj9fqzmrGwZeXTDJUFwt8XbpRxu4WPCAwGnebr7SXAXzoa7xsJb7k98sB4AMhwRWXMPTWRDQXx6ovAvG",
  "key31": "hoq3c2xbGnmZhTLRTj9v82omBCM14nkhQTMThaRAtPMw1h19PVcM9QZbj2Rc6ab3DsdtRyHd8a9UxSg4hUxj3PD",
  "key32": "2QX3VpD5dYV3koWqg5W2hU3Waai3bx3w4zsjacdx8eCeTFtqhpMvrxKwHDomGWajtra5k1Qwyjq8UAbDKz3LBYb4",
  "key33": "H4BMHCr3CsvADuGNyoAFA2Vh3WELGueakr8btwqRQVC7BRuSWcjgdSesoZP1VmQAtnMLAVzBasktVy374C8tq81",
  "key34": "4w9CgsYzv9DNce9o9pTYKfCMrqspeFs3eiw9HiZptpeh9pG2AesQPsbNbHhPiQvP3twWau5fduZhYjBiASMe31rh",
  "key35": "34ttWDLHsB5LiTdQ8wnd1ih5JUWCTaQSdhbQQnr12V5ApTeuoKN9NfbCoHaB4rm4XbYirwD99BHNMnGPWz5qEoDr",
  "key36": "3GtBh6j2ReMeppEjoJASBPqXXWm9aJ4WhxsJ9RW7Mm45gKXGx1DZ7AXDSzBXLiVKYGCc94oxrddAZqwNKRwgj3Q9",
  "key37": "2QEigmBVKey3ckFpLoxQtWAmvSdnvAqMqtgbnYQ6sG9w4gigxBq68JPnPLLiP5Usw4gjFMQ2uirbExd4o79SgBgw",
  "key38": "5D1vN8fSxNGGTDmcZvQCvyWBdSCFmJ5BEP9oAKBSt8X3wshkzn7V9pRVjckE6RE9AQ8AmrpSCchtByCi7DXPAL1z",
  "key39": "3AMsbm2oK45JSLbwZYsTJoCiVQyp3DM9PD1Cr291t92Dxhwn86hPPrU3YERiHpZwTkZZSVyUWfFdaa8kL76uVCvY",
  "key40": "31dHkc9n1ZuogWrvtKUP4LdNq8mxx95fVDLKxorXJEnSJeBxhEb9VPm6uyp3EaMoJAvPq5NUA6oDYifN1c1d39hX",
  "key41": "3EYANrYHMg1HrCecY7oxL9ePPW2hMhgJYLtiSSLoxbhD2fTsQLCzKXqwKwxy4ZM9hjYes4mEMxmaDqmu6xYcvnpK",
  "key42": "3wTHzgL8xJTL3sFcmuhscPKRB7iRSff2kXPxTgZzRyShcxPnAJ6CKTCVYHbr5s2JNWMWZ2Yw5UHS4LaHBkcX5dUW",
  "key43": "5fL8YGrjv6AR3UvVjW6UkxVenUUgWekpYVXSSaJ321pxTikjaL7fhMDXXhvTTc5eHSyvRyWt5DX8RhRoi1JavGFJ"
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
