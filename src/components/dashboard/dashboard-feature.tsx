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
    "38TEDv9XiNMQpU2bnjPNZxvZ2LW6LnfeebfRZZyUCdDHruW6spbF2MwqNAbbCV4zoQ5ZNcNsk7xCuShJL74Sc8fc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fyyBEk3akmCwPf2osbQ3AJfnFewkT6m1tkgogici6nhbjKJrmNHKGV5zCvCHV5DwbUS3pBqQ85Wda5n9VDVpCQR",
  "key1": "MWV9AQ7Z35gaALgbK1Z6SDji4amWbZMssrs4C7dJqWB6k2pNzd2Thg9g4qs3CyH2Y4RTJLbQEdYtRtXQ6LYHtJX",
  "key2": "3hionicTXVCdTU4pkoAHofnd7bLRkJJQcGHtqvEzspbynN5uZtqF7pxmGTRruLADgBmj89K5pursrbprhA5pfDAX",
  "key3": "5sCDPjwkwjitnrghoFRhK7gVz9axRTSdsSJWxitN8TU9niybjWCQ75teX3x9DdRTpVi85oM1CQP11mACa6b9h4Pb",
  "key4": "2BbSf3XmRS3TGie2djMCvuTgs9Bp5KbBsA5Qmncutwk27UWhXjUpeDLdTh4if4QnFUYXvjU41XYsZm5uUN4xEbub",
  "key5": "2JLRR3nPsvehZ9ejT1NnB14SnVV9bncn8SCY2ySLZ96rQaBsKwfg7t2XKKbPvQbQjgKkvLV3vAWEevyQLxT1sQ5m",
  "key6": "kTeYLYftWQMrMvyVWuYqaFR4uC4EGn9Sfwxhv1dJd5rsorTgVDeQyvdbEZNdH5krkQHayQkhZNgWLmEywHM1nq2",
  "key7": "KYeBraZgVPPxVQhj4wpAVVpPe5jHaECu5ea6a4Jotuq9hhVkD9PtAHWteQDTP2YBW11gdPYLeW3S6gZpWtRoE6z",
  "key8": "4wKZTzdpphZPLvB4fXo5uSC92WPWBWZiPomaQihQ9eM9fYfFPRb5BrjLf7t6XwQ4kVHbXd3fkj3apptX9G8EwWZF",
  "key9": "3tUUmRjPWXuJNZb8uhFG7JLu51uVy9gYarxhFux3qp3U4YsxeAvcG4S4wWTjZWJdKd1zxfu5XRwiKCBYuYdrn93k",
  "key10": "DPsdyGrBwppAYttgNAugzRupdtxcG8LKHStc8bh8v6UGMvbDzvNTkBdjmn8fGdGtifEfZW5uW7kUQ6AJoi4rRZo",
  "key11": "61WvKrtG2nX8veJecGNg62x1VSEBmtmb5EcqepaCntAR9u7zvEmPTAbR8JkXLvApYCjTLRcWu1DRZ1EFnS4CHEn1",
  "key12": "NRMYwVfHdHdkRTuig1xhDX8msWXRiriV2kqzztxN95cJVqeHSTTBFcKzEXAd1Xm76gg2jjph4RBDEPjccGpatyQ",
  "key13": "JuUvh4EYmbKjrj3ohvHDDz6s45mzk5fHmUkxmsSxnyYgwFjU5Mvq3kXBNYs4ecq1qAWA4JSo2aveq8fyBELpdes",
  "key14": "u6aTFMeofn1618JfuuL9adqYVZUikJ15qFeKtWxxUhyCYJNmgUBTTVraQaPJZqGMPw7vvDgVTb4zc14CsK3etXw",
  "key15": "4jWnC32H7aiCoE9SeHUBG5rj4ai6t1n7HBGNXHqWHvLZj3SUZKvU1iXU4Ff4uFKxtjnNGQhR6PjXzdkJtawGHTqp",
  "key16": "5ATJXNtAyTBSFGg4M4Nnx4Y53UvNXVuFxAA9AbGvWrvqZWAaPBkirwVKhFgvEvgCC55vNDfPFXTEnseDBgcZ3rZh",
  "key17": "4ymLceYVRwdPRKo9y2eTRUsagCcbzgfD1YA6qwEkXhuUvkgMGUEZeWDnLdjjJ3knoEsVPZwVmSEWuuqrx6A51zwF",
  "key18": "39ryNnJnbRLskCakS3i3QEVkjmR9Z3iVBzj8dgSU9xmz8iov3uSsrE89ogavRXrckf5Lj69VDFPeFodbEQ9km1Z2",
  "key19": "59L2qNBBE8zBG38568RpdGXnvtNeCdxrufZWD6z6uNW2wFYdse99iEo3YLa1NNQo9sQNLv9FYXR4Si6PunTvHM8R",
  "key20": "4gXok2z2n5CGVnm5B7NH3oqmX7jXW25eoekQr9eDqFrdF1nfrxX7ew4jpisGoWej5Gj2nEo3pN2mATozuMKvcRNE",
  "key21": "4AjJdCuYiK7i7E22xNm8zrjAU8tXXg5dHx57yiqnGk19W4abz569b2ug9JFF3VJVQMC18voqCyTLsHe9MYxZLL27",
  "key22": "5tkn4uGiJMdfdTMqfXphvEqKMjdRChJQTbvAqGqoBCzNdeDAAdF7J5yv9VDB82ZosKUskidhjjNeaHf921ZnDNbo",
  "key23": "vT71CD2tbXJ658ZUiVozt1jCV3o3Xm2hMxDJE4PUSq2dMh8wWhGxKynxdJPGDjEnDJu2AH7mXirDriNhe3VYLsi",
  "key24": "61PF7Tr3CdH5zX5uT5RemXNDuw4DCH9ciHJ5ZpXUU7Mn7mJcj1vJgg7kR3MGUxxaHVw8R9dJpe3jAV4vSTRZj5sC",
  "key25": "f2rbX4CjJSS9uxXnfqq3THQcT4zDyqRBhcDPW8hS1G2DwWRR1MSY76CFpUg6ycg1Q1ocQZu3FAEe1CJBGBQvwUk",
  "key26": "3gyeNFZ4iRu1EgAdandfwohrHyAcLrSA9YR78Xh5KDvjswqi3hUqKLgTG4km4S9zoEB8YWoZZQ7uzuZZzxTYQ5x6",
  "key27": "e6RrE4F3oC7B2QgD3hQYD2Vyoa5zbgSCPc7Z6wQnydFdv2qsKzFoY63wXxvYirp3c1X3LtSXVhAfr4eXsar5cTf",
  "key28": "gMZ5XRFCrEovFCbpUDtSVPZEkPNoRmMY2ubdJDMch3mdRmYsT8NWk34wrXDAjgM1TDiq7tzq9nomzkbj2Rdky4n",
  "key29": "4a2nmAxabhPRykraKgLh7BFMYezpNLiy5nmauDQvi2vetdDGoStRq5xMoNTAhsq5eJRSuJBKkTuL3idRWztp7daM",
  "key30": "356ywd7DWpj8gjcXeFG4x1gqsH5oD5KBNwvjN8VwWFRc751FUSZMt6XuVUUXkLnstdAJCd1YbdG5SyVWsHRDyvTt",
  "key31": "P9RqRB9uY1QvBQgTaPs1F7X68JxHhQ5HqPw2kKTULDXGTdu6R9ErCJeiKEmWD2XeyTAgaFaE2Ei5SbvWKeuVvFs",
  "key32": "5nsfqCrxRH2v3zn82yUWakmYNnxBv5txEAk2JFdzC8jrAFuuroqwatc1NaWZAv9tF7FM7akf4FdgdMhDsuuG9Tg9",
  "key33": "XYQPYZDPFTmFNmn76fmBCg6JdeMteuYSSXUBEoRuYpUtBfesm64nq65LNFfwUqfcJuaycbcXFapbDS1zKSGuzRa",
  "key34": "3CwTRwABpvzVPaXhvzE5LNvVSMQoGW8cqdhzzd2SKsNgMPo8Q1KFXb6fVxbGR6suZAphEoaCvRJWD5pzsa5eK4kB",
  "key35": "WugexakkFyjTHaFfAXdG82aiFSp9JLVehJMn2RhYeXT9LrbBBAD7psr1T4dF3MvWxdeiCmgx9NEx9sdbe9Y9U3L",
  "key36": "2e2UamoYDn98GoeBw2pjRTrxt5jQnXR7DMdHobRXsYq2CQ9dQW7icaYg5xy2GP2nL6qeejZqeeaw9cKH7mrGQipn",
  "key37": "2v4dXTj9CFwfmjFScxeCbaLuxbA5SyNZJbyy7KCNiR3394ytiifS4g2xnsxhrdsSGYyQYjkQLokgBkyf1HnKZj2r"
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
