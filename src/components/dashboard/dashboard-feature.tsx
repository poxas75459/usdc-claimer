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
    "2Ezb6SUsP7DWqzNnEN9MESe3xQwQyUWFebQqU9ZKuMPNZMxEc1XoHz9vhW3fhdrqtoEF9BWRXx1592hysqHeMNr3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WA5EQ7Y2ABLGvXKGS5tCsrNya8TakE9XjFXBchTbdNRfhQjgLPCRM5JdBFV9UfyVAZzTaWPCALz2huLUgsccpWK",
  "key1": "35ZCr5TsnGZZcMFp3VAFRt5psKZacq3wXzbDPATyh8WaQerq9hZD3BRxhBsBJY9K5ghkythvLyAz33Xrg5LzMjme",
  "key2": "xcNXkMA1MwccnDx6bExdFRpLi1j2pKaZDsYmcvt5wSZCGRHqWvYDjGneLFB4xA7mH4V3n3A1m4SpANjJgyDwB5K",
  "key3": "4hTN2dfMyzCAvU7w3NgMvr7jJHwHgoBNcBC1pWAXNZyn5C1FQe8yDkSVP92bmKQpqMnDhoKW9spaGKtzFdRbxc8y",
  "key4": "5hft7DUBFVgXwh18CUFrRaYL3jEUjQLHaCArgu2mkMFpvWzAXf9d79o9zV163d774WvTkw599JcHdpBLhViYs31m",
  "key5": "36y3iCtkkLDTwRyDML9dZPXT3nWPLy1MLQK7B4gihr16nHpW4uLJ6z74fAWzvmw7gAstCeiNJ4pNSnoeBG86qUDD",
  "key6": "bx2oef2416AXHvG1iFkxGyN3JKkBTZrq38VZhSSfPay9ay8j3Voqq8pLPuaV3CEzJcjBTDSzh5EkiqJv6JUjfFw",
  "key7": "4QKDziDvaMKym7XL1QgBBM4kLCNvsYzvdQthr6ysGf7gB4WgY2q9tnhH4H6ztkMpgRaFH1iraCumcTiP6KKrESjA",
  "key8": "5ns8WHxWLNeVYHjzL6JW267K3ZudFPagQK1HpwncHTvXmChS6LHB4KfeccGYkYsMtJgy7Gy4AwahFUGavFPbUmqx",
  "key9": "4GjEFkBrhw44cgZDJT1NU5EPPFY4QeuEZAt1QWNob54ADmLN78UMm7yKcLk8JBK6hDJQzqPyVgxMnw4pQ29fsSQE",
  "key10": "4VFzibBUotdjGBqZ8eimfvcMdGAjFy1Z6QkwPCwPaA1EVurpmkV34T1bkN2DYQ4tcqKLsmKdCq3U3CQSiWTaJ89b",
  "key11": "4Y7D1FFckZSxYCztHxMiwTaAiPXJx8UeMoA6Dub8gbETzHdcvWpthsMtBtqt8JHfuDAL46ZoRZs44TWtA3arN5KT",
  "key12": "42TSRtfGZTq6AJsPtAUaRGM8gZ6psYkHpixZiSWBVaAKFp8UyksTTGWfAc9eDpshRr9VZkoqo9qumewHkXsGktnT",
  "key13": "2APxXCxfEVvNEuP8MaKy3grRrKfBs1ZwthmpQKkZBcqnitUVCMURBsWGeSw4bACqsWg2DnAMSQ6HG4Riy9M8jAqQ",
  "key14": "uku85dJkGSYu6vQQDjwd9TCjSdijtxGq4sDB9Gx4NrppkSLzFzsdW8yAGbo1DMGKp1kqbHry1r7K5ytcL8x5DJh",
  "key15": "4aHJKyCqj1iaQ2dei9WpatM5b9qbVBF7uvpf2J2byF2D8DTfViqQ9Dv1PWbxzggeZP9AFS2TpHTfo4jjky3ueuJA",
  "key16": "35reGxMacBr1tcHsRcJJ8wC1FT4fwxPAuMPn2w5SbdP76MWgSBQR2pNnEwTD8NFMevFKd5rDfcb6sm9RSsmoT7cH",
  "key17": "3Pszv4ML3xQjaGH54jRaDKj4T4ks2gKdB4itMFcebT6qjHZnqE3p7aQF46Br8Gvoc4VocjFMdMtdcaxYT34YTedh",
  "key18": "3JPNepp5TuuNyezFHk8VU4GWbny9XqEbDKKHn4DasHipXk98mTeJBbsSbXQz7JJ9Uoyo8YU12F6miGC5gQdHpX7u",
  "key19": "5xgS5bKzWq75VvPyK4tkvUUTXPFNF4u7FupEkG4fiBrMR4QLrnwahWgo3gxRRUh5h8PYozfCD9AgmC1V8zZm5ics",
  "key20": "r8qQsAoJZARGrp2ww8kKP3TbNaQRjtNTuHDii4xPJdbxwKFaQxbMHukssZ5mTD8fbtqnrgYBLg2QMfmzbkStsTB",
  "key21": "4JvYnBF9Vdx2815sfUDbnBGy3vrYPAVrLYh6HkhURCtCD9GY1pYnuUcMMcfkPYzC8LuFNaKcfDvbUYcY2yfkYXyv",
  "key22": "2oBpX2fLuZY49TvXyUKaJbRjLsodWkeh3rUEsHF8BWRxsE5FeKNpoR28wvXWdkRc4fKLXGMkBvmqWCPoxTcDPyzr",
  "key23": "b4iPjG28ZVGCE23Ycsf1KPEcwd8hoLs2HLHse4LyUBeDzapm3ZRFXKLK9uXjzdB6kp7cwtnikbWnVdrsevhkyWc",
  "key24": "559z2VATvAW2sPyHZT8KVRGYgSLtJC49Tt4y7DiAwR55N4hTpZm2cSgwUAgNYicnsjaRAFJkpeoj8zgE7usYnuTf",
  "key25": "2enTo8bhiPf2tnhs1bUcaYfX6gn2siGTL884t32z8J6DPy1USq8RWgzizn8YLc9RaZDuoVokVL6jQcDNMh5NCRUf",
  "key26": "yCZxEZmhMXVUHDn5xtCen2DYAtbrej21WT9mwDYXwt3DcQpKVyytzpLxDn7eKvYakzv1p75S1ujm1c6gdW3A3Vi",
  "key27": "xY6swBePSJSj61UVgF966XQ66zXQhB75DSM7a2Lruxsnj4N7ZZYnoP3xpGxEikJqU57NwJEXq7r9eXEmkAfdH8q",
  "key28": "2ZsKW5vxRN8A8Fa18SUPLBThYESGu2dtLzw3RYsCyawEKHTzpKm6SPjNQtmREPr4MeHzyWuLuZYwZ9Hd4Xx5AF1S",
  "key29": "LzCyPACBLJY5XFDWrwEjbVQieWymKd8Qw1qdAdhVrknhZJkDRrwbv45YC6NJhxx5EcH3sZQuhtQpii4MvBHfSUd",
  "key30": "3bX4eH78ATc5rLh82ZxMyPos4RMjb2xazcPtsBgQzDGUi5f3dZBh4Wnj2hNcWWdSFYbrLudLBXH1SqP4y8u7a322",
  "key31": "5Z6Wdh5tRDCSMaZfDd7YN8BV92dQRPEz5Ch2bPYpqKSYhpZ5JsxLv9cWyCXqaJKXg4oc6ZYrk9i9RJWjbNVo38Xd",
  "key32": "5TqgmDBKyH3v7TwrGP3ikbhJvqahmUgCaruiWCNyigHG9XESEPH4YhRsbSAS1ECE3MW5g4mEBFVWkRgo8fCP7PR9",
  "key33": "fxBGn5ndD4fu1XCEHJ6YHDVoCmehEon4EmbTTBMUN8pvyUVo4CtS62bhK7pBn41mY6cJnoaQK1ndB1ALe751PkC",
  "key34": "48yz2mt4UFp5EdRM6825zpx4YgFCvURAwrVRELQbgS6WJaB92zD3h927u4sew6XfHsiELiVskWkkFin6Bi9bmhi9",
  "key35": "5VLZLJ4MKc2MCZHs6eut47Q2KfSrATKbFeCS49wFttabgG9Gfhsv8tUsbafctWNE1XKvTKCpfbNEQcqV4E98xgtG",
  "key36": "2xwVuv96gaYQfaswYDTEAdcZjQPLnB54dMcVrJmUyqbGP7MaFTKRVbZGSATFhWxz4wx2eNypkwxC2RZUD9MHsqHF",
  "key37": "5nkpP8RmcM1ULPqghBNRjroTVuejtBZ5hy2UD6r7GhhgkdC2PLQXFkg5G3VPL29LVmpwPWwX8DjijTPQ6XSD2AVP",
  "key38": "3hDrZu1nqU5snetmwZDLme9b1m79bD8q1b1s79rHnYj7CBMW6atqbhHPgUHFs5igUCk5AkTG2jBZ1mfVhqHvtHwt",
  "key39": "5bnkjpggpKb3pPrVibFzYHWUddCVYwgDHdxehp2SHReTNMJBwQxQkfrahh1eiqSrmkJw9SwnwGe7PEhGA2FTCFR2",
  "key40": "5rHW1k5LkUjHWae7BK2bY6Trn8C6z8AE6j3S6KKyhkSg9GYM6HTSomDMECmtDG3fUVEi8nVqDjwbTM83hXcgJ6zT",
  "key41": "3fu6G2yEVcgUPmBzmftHoMh4UrqVn6B7zuFb4RSRQnHQARC31uHWmBVi9C3sAgMve89Fnc7vDDkhVfntHWpbD6h5",
  "key42": "5bZCHEjL9TaidSRX7iNwQWvjLeuFTx9Vem1uoETvH4KVW1hEK6Hew6KbhS5NarkWx5o2JX82ovsaVUARddqxgZXL",
  "key43": "3CPDomcSjE2FnmCpDBkSfEEosJyMsueqhmLihXDEjqjfEK8mNmcCFfyE6WmxEx2qbaCxaD3sTKM8nzHP824qYtR",
  "key44": "4N2QWzb6tEENu8whCQAFuX575htxQi1UfCcxaUAfrL38EdmeoHAyAsm8aBWKUzLKJ5qbtbXvrehefz9SnvWbWWU5",
  "key45": "RkNMuMAwn8gAWuwj3JepKFAm5DckE9nWf9wjQ6AA6gjziSez24nVYtBQhGsssQu9YQXNsfMLsaKGaDr5hxucHNh"
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
