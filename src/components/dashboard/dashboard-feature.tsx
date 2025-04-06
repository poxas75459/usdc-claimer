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
    "4CbDVFEGFqNVjvfJsjjKhPxzUvoq4bjUyr3CDyRSEPVCJSBnLB6XHMM3z9kPw4RU66mAUH9ZxfVPxjzF9eXJxVMv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bVh4UXETXSSFt8EVHfMoL66WvRFa1AFoPzBL5v59QunB9TgTXNKSwBYTxBdTzUN1pAuoWpWZDShQgsJmXWcGfE8",
  "key1": "XB9E3LAGx6eyPGNekeH845PhduxMLCvfph2eFSBBF1sHTHDyN7vY94XCSzFqm4o5WwbixD1kp6We8y8ouwUq7Hd",
  "key2": "4LEaJhbZyuAKfnW7hrma4FBDzkCJua5E8DYe4KzWR8WMQ3Zjy7ZKERGovirPd4QADh8akwwNmjvZGixV5CfjPfbY",
  "key3": "42Vvvufse2XYiCtbU9o8kjckzvpbGbh5nFrcCcXXWbfXQZQhib6B6GPbaVz4RUrUzb5GLNM4Xy3E3FwsTMPMkc3G",
  "key4": "2ZMdGU2rz4HziCgumVtqP2z1kbDRvWvDgFnnHNGV7UgW2RVtYTEGbKpatCGYYDjYWLYzQ7UZ6KeQAfCA7ruMY4mQ",
  "key5": "5geWRy7je25yEmNzLbbPK174zJGEAoEDGo34NryF9XEt2Bah7hvzNVqRunbiXZEohto1r4t8oQaSjyDfRttRDQcN",
  "key6": "2Zuy6rHQ8QamU5bcjjzkp5yHFzFG7ULFuHzDn9MJPPMcmas7qdK3PTpWAHp12LV7FtU1fNNhATUoPCZ6HMHCPL8",
  "key7": "12ADWY1qxvW8WGsUBg8p54N9Xi8moqJwMZ24bBonJ58mJepWfkQZXqqc6ZdUPxRGGdTbFEfyw1UnAbifyfiKB4gS",
  "key8": "mb3m7vNAWfAuC16PuvSwgzN3ZNhWmsbFaimt568HFhzYT7beS1jrJynXQPw8MwMpopFxaUQ51Q9XfudAjwjBDf3",
  "key9": "zREGnUz3ticTbkGjdcnAEviUpgbwtcrnFi8HNHNPneQGpUGdVCGTYUJ7hCWy5rtftzTMuEz38bAsbTmwqKA3S2K",
  "key10": "4ammf2y3Vd4RqYt6VUggZagiCyCZbidhbguhtDuuJMKef54jKpod9pEAnXg5oD3o2bSUbSAUNgsoGDznAa3aRQne",
  "key11": "3tcngwXXwm7rZV7McUM1dtQwvYm5UctCfZLjoq64TUirMdrXaxmoEScc2xWrw1FBQywAfHaQSXWwEbph1cd4NGGg",
  "key12": "5Vd8Cmc2qHQodvBxBb8agggyMBjF7PCaAU4GHxW1QAoEqJkX9ahTfg4iz4z22vSyx8fhjiQJKEUJqcEQcApCMM3t",
  "key13": "28Dn4rdVXZt8pZrEkxUQRbKqd5d1h6DX1KiX1pX4VkaihBVjA9YujEADYpGBYhFdNRSivTRkJZnydD1hXXR9kjRd",
  "key14": "2Uom2kEEogMhwBXCZ5qGWef2EHpRtSAmCZ6kqJ27YuEMEDjiMQUgcVycxcP8RGhRDP2Taaom6P6VcKtsiakr3Q93",
  "key15": "3p2LMLJyyeHdATJadhHnrkkyQ8UjMyiXzeZNtxKC8MVSyrdmzxH8CLaAMPBkCnDupH2zEHXABGMzt8cJbhwJMdqT",
  "key16": "2JEh9n5cv2RdENw2Kvw3CsJW2QBEi9GDHnCLq8CuomJJzuZFEvqEdHozpYU6hmG3jhh138MVbVnQhkroDoRGSMyC",
  "key17": "27YDDBKYpbnEgBU3hUvzqtFF5xcn3gS53iHE8gawnS9mqYYgBSopoEZAahLzUEFqwg5uED3MCyCAavKuSjvSdsgx",
  "key18": "5cCBb4QcANntDGrpsqN8ybWE1dCfH1ckgdECqiQ9gz3vpp9LfvU998h6QQauc3hK2qBKq1JHrQ8ufCizTfrnrSiQ",
  "key19": "NvbJiijinP2xdChZrZ8QbFGr5dJsJt899tb5d8HGkHki9tpNzagBrWGHSsJjGmT5HFHxwNQKqSyp5sCEGQUu1NR",
  "key20": "5MHxQzcyy1xohxpaauspnKmjmoR6dWMzkJiBxCQ2WaGh9F7wKoMJo59VLGestsuB2tn1Ft8yducFsdpvbRXqM8vy",
  "key21": "8USHFAmKNuZ23FwXAn2KTavm5ejMrVfweNY7iHrP426p6obP8WB5eC7otAQtQpu5unoHbML8dybo468HiR6EfuW",
  "key22": "21KQf3mkUdxYswCqofLaboXyhaWXA1an8M76hJ3APmpdGMo2KfdQeme8bHYxNEUnkMM3d3dfJmnq3kGeKNKgw9Fk",
  "key23": "2vKJ7SnDMcUdUwHB8S1uePcmbtPfAvqiEajktaZhbWTnRU8E18h1CUjeTwfyXutFJfxmhxbRY5mavUrefrQRPvN",
  "key24": "4ZABoSH66x4DbEdRzRLD23UGWdAxSTZg5NxuYfrn1duoAQuzQGVc6fjJzusRMAsvdt9HuF3PF66ngMDniPwe7PEd",
  "key25": "4AaEJWpSpobfUZ34v2vR3722fcvvav7ADGJ3PikDcCcu9GFHhW7YhNJ7Nd2pieQohsYN3VQCMrHwRMETe3TLsuFG",
  "key26": "2BrPCqHv2YcHzoAFWLAXf8MCKmMLTeb5aaKJKeJRVDutYSLWF7tMvZjfPeekfxG9JtCYr6PrkJFpqB6bbov5us6Q",
  "key27": "5zdz4LKP6uKexwkjTPG8YYzb93fsuioQ2uyJmyw2vS4XstSCMeEMRsrbL4kEDSxTgzLgWKh9HuWTwNEh6zgnxbAU",
  "key28": "2vczEN4pifsWExbbQwRzgRNsUgAPxznZUNfWgTkrnTr2trAo2K9bKcuRsMGnsHCGiKBJyWyv8me8mrEnpUaS9rd4",
  "key29": "3LswoNr6XwKt6jHw7T8qtdmUQVu2yddDRrXaduDCyWjJkTC9Hz7waRJVxjMYBwwgszbi28WqtT7kZJqCmzuYogp5",
  "key30": "5erZLtfi3nGWYNNWR7UbeMksCjxawYmw8HA2vwmMmVMnC5r6Zv68sfpVUpCZtGBMtQLMFsETSTPs7P3LKLKRMCDX",
  "key31": "3bTB5q8RggbxteTS9RLD6YA3dwohaQ8aoVju7nAmpAyq1oeP4KdxgTFket2MGpTrp4Wpdhsdd6ht8FBL3iD2BRQe",
  "key32": "5HikGuE94J9Tvg3p1dNoTqjNq7Q7S3APUTxmj6XcsNVijZqbWkCgnGUnmc3w4WpDvphyrv9Dkwc5E1rbfY7nczfR",
  "key33": "5TLEQ43e3t24qsDA7SLqCXHqT44FCSp56AfEESVUUNhphY3e4eNnma53z814XvswNoX2Uhsx2dfWrjKpBjcoafSH",
  "key34": "36ruyTn8TSFPf6oZMHFWDKU4aVjLjXQBZhHpbmNQLdAadbSqwArxgby5MJj6H3E9Veesmte6UHAKximqinpP9Tu7",
  "key35": "2cW4VWtsytixGE9B9s6yRruvMxeohVrqYT4mxB5HtabCMf5u85Cf9yErfE2kKkjExg8KRh1TXr4wgS4N6Z12r5gf",
  "key36": "4UWQ3tKdNJKtBGfFJUuuE3Xy2UV5RgzSt6YTsd8nxBkv1M87ARbUjcDKs9bF15WtXUaMKbDyT9jyntK1qNZUNbH2",
  "key37": "2bfvjhFPgU19rt7KE4F7ALaMM4KjgwMhJhpAyvRb2PpyV2tThZGF7ZffySBddxagTntgg5UdrDUPNtKshj54k81t",
  "key38": "29LxcsKGo2fysFxUK7pD9MrksfxaioKFQp2nd8eQpNRSzmkVTL7e6WveQA5d92Vc3udpyB5MRcenWF31eDqoPMzW",
  "key39": "2Ge1Q5uCjiKWHMjiStNn7fWv3bCKsAUtQ4NijQbwjPDGQHp3WaABvjMmhGeVa2bjLYoPwrKoEqJeinqc4bwbtXpv",
  "key40": "64o9DTEspVnEmxLYpjkhgq1jYX6MeEXYenvwaJEgeF6RKTsM8ZTgpCiW13hrzFBmpb84dsD7Cx1xotihmYxSWt1t",
  "key41": "2JBNu15aEFtLGd5zysuYZBMw9rzELgCP7AfeimwbeKACCo3xcyyQVhxA1TmcjKnSmf43tdUZekT6GVZdKkibhKep",
  "key42": "62M3HiLrwTNdX77HsbeHZT9qEMgQd9JnuVTBieQPd1QwLVMF9FYeX9L8gfpRVnmvdEUEu68nLhvQjmKFKKXTF259",
  "key43": "4Sgy8gnWeHmCR7VYwwm7TCJbkcK5ewmWScWCJbkQpFdHuFptx8E5Au5utKRBqBSYWzrRLizhfbdeHySjMsZvSjUw",
  "key44": "5KNz924BZr3aVKTicFYEdav54R3kVYSq6b4PRXNi71TXCgXbq6Hg5vQPxxVp12DnPMLSTz427krpqHJcm6RZYjhx",
  "key45": "2QeZdbtg62Qt4KTi5fcpd8cwNbx3duwy2WP5wTVSoN8AV7D67zWRBp8gHFL7ExmGHXF71fdPa6Bjv3fS2QMKdPX2",
  "key46": "5LkjCWdV25NHZnReio1sEWNm5XWzpZroEqZNUHiPmrXguvbVxv6EbyxADRmbFGJdhr2f7SQnKzgBTcEJ7cT3vETe",
  "key47": "MUzPSZ5DJYwuLyU2QiAbEj6LiCpYoUsSAqo8nzrQ9qbUKUuNBYQpREeem3AougjcQajr2kZ9NqCvCz3tNtHJCFU",
  "key48": "6vQfK1MWkpQPC2fo74Hz9t4hMUYSy42MQkSqNttw9ohwxnb8cfvAXVS84bZMEexE3Ktw26QL6Q3hSR78FDBDMPc"
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
