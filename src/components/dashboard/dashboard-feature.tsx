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
    "5qzpYEtvfYt9fseexmiPq8BDdJGQH8if3it46m2EdzEwtAnrTmzHnS4QBJHzuUZ8gJaqJTj7qbsoHXQpz7SRBorP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mp5snxeHY7NfaJ8jRzqkLe2sgD4fyA1SPvUhrThUonsM9jQKfadXkt6sqg7TVEK4Kj9Esk4ct6TsvRkQYANWm5P",
  "key1": "2U38tkM5SS1tyzpHo8BKcS33ocifa8KbycY864xKd25x3vvEbwJdfBEByqwcm2kui8HfARhWnXKUhvR4HJCQDRz2",
  "key2": "5Cs8dzgYQ41Gyc1bRLpeoa2Hwfg6uzaXTCFPwJRVM9Ex296tju8Cvo4xkiE7bo4hTdVPMnKLbdo3grf8ExyK6VA9",
  "key3": "3UkB3jXwEXZdFDJDVgdxVfuCTx6sifFgEw9B6rJ9ZCWLLAUYHHAnEjoCWm19LvcP8QtmiseaZTfBErUPYJU1bQuk",
  "key4": "2Y1rv43mGKccoeLZMx27UN4CyxXuueBjnFJWk3kFhDxDnXCJoVrPh7NcroEJVG7n9o8xZJ77FTkJpvZD8K2HZfL1",
  "key5": "4gZfKax8svUKxiW3Wfy3bPQr98yfz7QzYBEwhM8LYDavKP71T4gxYnzu7kcPDa86bzJqWKfnpjFxvreiXrsLoamA",
  "key6": "Ws6oTp1hQYySUw5DCDD31wnzNLb4U5zowbeJ8mMV5jYvkpihUHUj8tPKeVjoaN5gqKguctBfL9f9doyU58HV9Bi",
  "key7": "3aQZgD7hFrwenDmUv5Gfd69aLrptvWSUQBePYjGmCfvEVEaNoW5DZcF2qwYvVzA3FNWWxnZgSREotD1V68pCvSzr",
  "key8": "63ncNmqYv48QhW5NyyMDYP74XRCHBvUKYGAYVKPTjU5FewtA7NcJu9QFzZZgR7Xy7WLQVnRQVLQwAVyZUzmL2Tac",
  "key9": "414W9fQAGF2ZSAmyFnfAXjzm3TpTzCbNATFXUdYu7gF5pgkWqEbUbqtPBtXstM28o9AXEAdsN86QmMYsPqS8ns2o",
  "key10": "9NYyaKqAAh1PTeSRvDn466oM5GtUL6K7n9Ty6wVJEt1fvXCn8Y3w7r3BdqsgZqbhQAjZvLthaJbSH6KNcA95LMk",
  "key11": "62gh8sHw6MYh2a3GrKRx1AuthQVP2QdzC7pzrJPYQi6QrFgbUJr9UT5aDhXt9xMCFw1n4xmztNcr8QoqZ977M1a8",
  "key12": "4mcNcCRfFzT4Wj4SYNhb1stcapLoxxNWN8bF28NbE8i3iw5AERK433a1AGPLUEooMbQU1rCwtKPuhAz3tC3cMDM7",
  "key13": "jASmThzPgeaPWTPfKNs9u384G9buTuFmL2YAeL5DpKjSbcyQpekBx2UApbMMf3yuzudS2Ctiiq3FWosvpBRkLpE",
  "key14": "2zK22Z2GHwR3VeK3uP1Cofi1ziQLREkLFj7vbMJQnUe9ef595HHDqGSrogUzfByebP76wzpjLGt9GKAx8g2cNivX",
  "key15": "4rY7PHUykeVTJaAefiStwxnT1NPrdkqrRXjoaYqicy6GC37RRYkj47ThBokkhpqAv3MVoyAcU5wkykavhRQsjaop",
  "key16": "2FCWa41fvznqGfRqVRhVbdWjHKQgFLU4aC68pkBRtnyF2NKnpstNVQo4c6u8YjS5bScsK43Yy5mndQEvgSz3kYgx",
  "key17": "TQCTqovnnHbsATwVjzQ6BoKyWdm1zDRdLHd22x7Xsc4W6KDawopLuTBDjjVLEnjmvNdAcB3uHGGFsdWY3uT6U9o",
  "key18": "3y3oMSf4cmuTp6H9ioVPQaheyveazjqZgBy5VyaqqUa5rhKZJrnsgd3Wb1ViUg9jrStxMwFduwgtDrF4cUttL1VU",
  "key19": "395Lhe75gHx35mEG1WRUuXPJvDd63qw46AcrQ2diWZow6Sckkb7f39TYMQHiQsNS52Vt5NiainoEMsCpX8g9VcWh",
  "key20": "3dSJR7GxiGkBQEiN2dYzNo14ojDAMNPSHg6agweaCsr8HNgzYrbYHYznRBVXUyjngH3cswNdnYRDc7k7VzRK1zef",
  "key21": "4PoibwU873jRkhkHR2urE9zTm9QevpncmyVZ1JXjmRCUbXmy7ESgbdqmfvDuh5cRxu4hfSBxyxndNnkGYoktNqdc",
  "key22": "4SLdd6CGrHt4sikDTkANobnJGVigGSpDKUQfqmLEKn6cDHN1L4ubbaY21KxJaWpFWoZipnVE5e5VsUmtrH88DFAj",
  "key23": "2PJTrXwVQJqRZsZym83xipzwrmatMqVt3qiEs6RLXx4ZjPd3P2fgik6gr7H3bp8cEAu2QWhH4BMsZNsWni8XHfs6",
  "key24": "4FnGfAsgvpQtuZ8nh5dNQT55vCGKEfvCHC8zNcfrMpi74RJdSYShW9nE2DCM24cf4NfCZPZjfs6wBLY79Pw3Xvit",
  "key25": "5kNiwYc8LYjpcMf7gDpUQdimujzcx61fMo35xejTiCsFxoEQAaV92ps2c6ckbM5h1f9obefwp8AXKsVVjMXLaKmr",
  "key26": "614HJGuXwCVmjHiS6cmP7CJYG5JtfURR6pvpYD3rMAsYoA6i9Ydq8UYuwttrGPUULQNmKRpYX5yCc5Y8oMpr84pc",
  "key27": "3JhnWohsvCa7ZYXN1GM1noU6AjaBn8cktUoNmfX5HnbAK2RiYoD2zBS5RCMmQ9Vg46B9DA9nB7dS8mpcUYd9Tx1D",
  "key28": "2ApnzsYFgAqdb7zKZaWb2UHPPiWSwGanb4pNJMKqzD1nZ2e95WNtR1yofPUAZbXgHiy53fkwMognf8fZwSmvRwJB",
  "key29": "4modS6imfuPztMARJJMs9nAWpWM27qPskokN4u2vSp33zVvfLwTrbqP4FbQRashLGU1DCoYhJHKn3LLi1Rarm4gh",
  "key30": "2SMopWkCyvo4gavwb7P139J5NJKkEju1f15B5CY2ZfSnnrKDZpSY32XeDFAPpnyk9P5NUPqdrXL12QeFTmMZFDJc",
  "key31": "5XdVchKFVYAN6Ae6gSzcBafaQ43CVcbLKRX3TYZ37V2rbwwiHNZp7s23LUZjDgQoVC96u5G2c7Kjm2QezMiyK4xe",
  "key32": "uV6QFhht7azqE41nqirTJ4s8CqfZjuVeo7yJUDrrummeJeZiiBtERijwgMMPUpLqawMWSsNrF1q4nSMNAKdbHpo",
  "key33": "5pGVHQgSgvpRoDoH8gwF5yoBQ4qooR9KZZ8fur8Mt3D1tvyoDdESGHpfWCMeby2v1dHcLmipsJxAPRH1LdJCKCe5",
  "key34": "4P6afkDkcf25ismjbKL4gPTmvLxqRC3b3oafodPKk3GJyUcuk1gu3KLWdeqmHArmN8MW2wHjofZDVX6wmk9QCQpo",
  "key35": "48AzVriLw4f3MzshfPZwP5yLd63UpZbpnSGWBFDugVBNbtewP7Yx1TD8M3bT86rjumDueScX9twbmr3iYwdBauTb",
  "key36": "3Q5RYVik86dKfjbApxWexZ6aW8g87o5Nt46ch2Vk3vzrtiREwAdkitbnwJJVa7BsPTcGrdvTqMUJL19gKMTiReBV",
  "key37": "3rFjBgq94f5utEfms6i4QtBWM9XVA4n9AaLd939Z2CWBAN6HE7ASWWsfCtjUCrrPUvt1ThrFd3sv3HcbmHwKefab",
  "key38": "Ts3KtSkStvS9igvAtT1tYTgserXsJfjXQNyTrW3c7vCeJP25w5xtRLHcjLDF4E9DSRHBQEsgmp5zGLK8AeJ3jNB",
  "key39": "3SPEwaLtzNZ5XZgoJmNmpGkQ7upwJFPTsPCsStPpSQo4bnYay58zBNWmst71dQh95T2HxsDq7zfhSm1apQGy9frY",
  "key40": "4X2BXSCZ5r8iNexNFaQU15bYsKprPgkvuT9RTJN4DtbE41aE9QkNvY1AudwRcKY37saTxrzbGvy57VusEdwVGx51",
  "key41": "2rqS2MLkQZGofj4Gm3ddcDKi7F4qg4JZQgVPymbGk9pWg5qHLrmNPm4mQ4B3LLvuprVMV4Azo22RmkuBvLM2Z3b",
  "key42": "MYsNRZLxSgdfSceb9Jw6Y34jkFjumuGwrU3vwLZx9Cxuncd3ZL21wv6UgoU4pU4CHFtZc8esh1igRdNG4K1uivf",
  "key43": "5wiNubR7MPZJKFWsZhXdE1H5rkT3JVrCYWxMiMZHKbyigGigJf6ULe4Bm1pGmtgJ7xrBspUydnfDV9wV3orfBuC6"
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
