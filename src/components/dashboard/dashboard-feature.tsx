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
    "4fmWDcjcV7uLu8R2aS8KCU1ELFhtBbAuz3WvDUB1ggPobKqQgUExRKHALS6ncxxXkz5CsVfKrtQ1ARpZaWD25b5F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NwcRRynMXCACjK2fT6pNnKfeHi3xPyakFPbEz9iEseCMeSxrrZZP8jPbuAaAHLUb6RvhhJQDWy4mgX9YnmdRmW8",
  "key1": "3do9n2YmAac4qkuGussW4QutSCw57vDxr7BZyyhqNC1oUMnBwE2o22483hZtccd5VsuMkqudmSjEJ1CEW3ojyr6T",
  "key2": "3abfFBVQWuWF5JGH96d1sNybyouEtKadKDEZHr2qYNugsdQofbRr54DpyGukdeBHj8kcF953PVjsMpGQutssQSGb",
  "key3": "2KU81UPNcE13jdB37Fkxngrhxo9e4BDGfaaSVfTMo3sXu3f2e9NX5GFMmDDkEbJNVHFUh9bBSa94FFaWc9mdh9BA",
  "key4": "2j4wz55cCLRSro6ybsdm4nZmhNB6WNhKGTsi1tnELBRAGme9M7QZ3sFP5e9bwddADrzgP3Pc3FubgmWE9v2vjfS6",
  "key5": "THVByjWDHbXxFfUfaZpzN59pnX4hnpDcmUvA2BTJNWforUwYx9GpUAnAcbdpNcD4hJ7JeGbrfdrJw3MPitpeWdH",
  "key6": "2Fs9P67b4Svb4WRLYiba3PEjLvZdFHSqwDmoC1xrmnqd5iajdSiWyR9LSyxm4YjPXAg8LEcuG4wV2F99AujQa9WM",
  "key7": "2ptEP7L2UYQ8ZEHwAZe1EGiawi2gWt4rgZ9cyuz4kJegmBaqPtWamfz2vTMrjCEFpkZb1b3YMbadTnFxcxZ5G8Bd",
  "key8": "4pPTZ6wi7SXUsPySWNjSYHea8P5UwvAxKnQEajkDaNWSfxoWwseFMRC3f2cUdW66K2zB5H3UEHhQxkJAyuzLWGzC",
  "key9": "5p4bgYHE96ajVdqbBLcmBHtHb9NdtAcjvg1cmPERE11neRkr2gG1ducsXUxvrajd9b8oKsNM4L99paX2a2c6WWWd",
  "key10": "2dgjtNzQvM7yYDhGXEsUj7MnuArP8zXkA56XM689FeS2xWc3Ujwe3Ks49RZMm29oMzsZMpABXPiJQqasCSQEogyd",
  "key11": "3tqHhg8BeFteHVkwDvCKWrCreWCt5KZ5wUbShZ1hfwUu9aJALZvGh7Tjyp74hkdhYt1bwxjDb57G2qPzoG4vpbkg",
  "key12": "66HPLATAe5CxMikPTY3xrMnyAxPvfud4mh3zQBir4zgdrCV86DhViGWkf17KYLTnZQGRbNXowtG36DUQqB6Kx8MQ",
  "key13": "YNXBrkCzCKGCpVzk81sFMPvR6FSAeJ3jR8ThnMmM2PLEeCRGK3K6Bib9NFnzAGds86aseDeEHGAM89FDLYqCZN5",
  "key14": "3vcCZ9yx5sr8g85nLaXdMN894885R8F75CngU95iispndfBbek9znQGMbQvfoAMD4TLdF8N6rw8iAbK4jqPRjAd9",
  "key15": "3gAta3FexLXwavWwhvuqeKvMUmM7UngSLFyFc2L3N1euB6Frp6Esgo6kiCRDsuaj1LgPV97ryL2x1VMrj99hwDPh",
  "key16": "4dNNMjjJhNbyxWT3VyfF7eUMAgUii8Qzr7oJuayLf7vutYBsX8uDhVz2ZFM9aU9UDwso7f1WUcsREy6XWcpmhXR6",
  "key17": "vvPBdCTuT8TG6tqQZeqNik2rMyJTyAWrbwrwitHDsXfZy9f4zg3eUYkyZenQCeNiWmiepD2X2ZE313iKTXtezEV",
  "key18": "2Deu3RK571Ho8fvJVirgbtjmKERJ18GWE17Z8d3YDNatTgtNXXATsfXJsRjeJqD94KhsMPGLoaHE2NNtkDitgQk4",
  "key19": "58DXdxJ67Z66npFGPTsUzzDkyJ3PSTChJe7gw68D84bDjC5maoaSXTVX46ZNeeyasCkWmyDbCxn8QRmCz6ej6z2G",
  "key20": "5Vsj6bEBDbueqVaFVm7eZWpPHBge181hMb1rdsPoVVpJgUHegDWANeiqebJK9mzmJwaHVty9yXuZaJu6j6qqSpF4",
  "key21": "2X919iNS18H2aPTuqsxuEGVjVLYBKuBDPT1re2Z22DWAY2Jbk9Y5fZPXYyDJeTcAQj6okdHTnNa4ygvA2nMx33vj",
  "key22": "57K4UJpL1jBW8jfKpqgjHzqvDm5smfqaq8Z84iQ31ifv8FXsJA3QAzCBiM7aGSRvdw4UgAoLut71p4kpCLtMruZB",
  "key23": "61WJLBVCstEY3k4EjtWRtc3a2pA9R3VwGQUqMGdVsKQJpwbJAhFHJGVYN17AgeDHtWDDDasSi3gvzd1smFaziZHj",
  "key24": "5JVc2b1B1AMcVNoqRWrfAMW56f73Gw8nYbLQkgNisYSeYqkUtuSXzJiyCQt7DKsXrksoW3ieUAJqbpc2gpEX3ite",
  "key25": "28tmjryQpwx462BREp6h7DnRTxeNmTvdvdY8n6xec7Rj2z4xZrYsZU4Pz8SC7WqKg1viBaawnwgwMY277t18wKH3",
  "key26": "4YPUnqCuubK5yWHtvCrfg7Pf9Y4krzGQCadDqMBvNaqwiBrNwzPSjNTCDx6xCAeQmQTBYeoCvQYS3PmMPtadcujc",
  "key27": "4aJuFDHYQ6trZdpC54ywRYhH9oSknPTEjvGrFutqwPhrdoTE2HzN7JyFZndTWXTduDeUhb1VHBu5hxMdxRcK2krj",
  "key28": "vYpTpxMNZaQMZCmSvQbPY5FqFEAzSKvdkXSpK9ennxH9VGJmyE5Dz6e7EvSTHjohGBjyJ7xPT2ZRMgHk3iTCzgb",
  "key29": "2hu25LPt27bs4uyZfSA2JvW7wChenVSuGU6BSkb4KbrCsFvaqzY3wJrfNdEWpHx3YYWJ9JTHsQMsXAjZGQF6SRf",
  "key30": "4ZTYH8VnFLWCYPMVNP5XGPUA2fCupkbcWc9URXwagCS6oFw5q9sHakUxskxSfVdgyUunr4z8Yov7TYvqQhJgQwRu",
  "key31": "3yFccDwtZRtzzZWSkNKZiTDtKLh22Pvk9YS8Ra1nrx5C83kfgywirmEpoJ1yRRgEBwztwSvG1mZzyiN24qE79fsZ",
  "key32": "q357J2YvLE1Y7BDuWWne1TSUNCFopkmYDjLFKf7eyUwL1sP8b2HVYPUzdN4UAWoJ6BSX3D9ohGG3pzUPuzL2jHR",
  "key33": "2ei7MDBnJZVD73sYZnDqygiD92mcDfwQLndGxqKqYwSuYcePJ4L94N9xkn9D2U7CDvVUj88k5Gc1UF7g5DY9KvdU",
  "key34": "5LCjSV5z7iQK3wwmzAU5RbCemEYXpHrMjuKuHn3udc3JsYvqV1JmeLUNev3gP5hKuYDWELqSwMsArJPBJnGtAPdB",
  "key35": "633rfqLr7PmyaZEmBj2c72UojRfSA8SMBo7uxGD89gj798Tg9jqJJK5Be49aiRjYqag9qVfDd5g4k8s2FetmQSrY",
  "key36": "4aj1CKw3wSassP4C2a5fRv7c7aVGrZMTU1eUQpCjL75UrSbXhqNPu4PuGDEhDWnrEqH5sgkQEpXFvb9fiSK6kAph",
  "key37": "3mpUJLoReooV9otSVtot33voWpJmG25eSZ1knUcuRPbkRb47Cz33q5XPp5iukPHsweohDh9LcqddaSnv7eTuh1tD",
  "key38": "5BFLNwehLn9spLe5UMAAh25cioUE5YXnEJaBTXdcVYj2RogfebwfyxXnrnShP51XN3hVHaMb7N7hscG6mSV5nG8N",
  "key39": "2x16XpWpuEy3VaRzZygeun2Vg9qcncGQbV24vzGVseEK55Dp87KoVD4qM2hi2rMBfeLM3GN8LLKGTzLtNtzBGChD",
  "key40": "3KWBvGvkpF71udDFVkaTcJ824sfbfz9CqwFmbkVg9vaGonX1GpoDxuvGAULoBQF2fqmie5ieQQwpiwTBX1Cu2cr6",
  "key41": "3tsXmC9o73JyGHB7weDFTYGKvfC2BFtttFbM6wKQAsgthJrMV84Mnw3e1dFXoAgjtnQWTdS9W8Sdg4jAhehCBjLC",
  "key42": "4hDFaaJnDtAyHris5ZLfnSQC8sidmxuHomJwcuMkS5cXLiULkpT5DoKP8ys2grASXXqxK3HRnTWKCohi6X2oWBtM",
  "key43": "3Ha2aZcNF4aLqMc3xi7KJaQcDT6FwJEuz6NX4H2qPiArAyuw8paG6oWaB4VEwYpFvzCzKbvxQuUSDYxMYWxjugsM",
  "key44": "4vntxcxHzSWDR53CBEvK1ujgZ5PNV9id8Bnr3PF2KRBQ1w6oezHL9My37ZPPXt4uLVWizm81NDFChtdfhY8PsHNW",
  "key45": "WAAe6UHDbUzKNJT3adkQBcqPSdPfs7aTVFxkGH6XEMTbFACminfEQWznzFRU13Ty5crT5EriVXC6oybTTZq2N3b",
  "key46": "3eAy34vv7KXMpVeCM2yjy3yjpFQ3yuJZW8KLhEvp8tNN3wg3ec7hZcBwUYbbEaa8zx39un5XAWeoFHcZQZE9znzM",
  "key47": "2ZoQSN1qiyjtzTPuZ2ttpztQDYty5FKwiVpUFcBYMmzVwviLWGC4eSHyk7AP3xENdyrCRHzBWW5eZvP6MAg8mWr7"
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
