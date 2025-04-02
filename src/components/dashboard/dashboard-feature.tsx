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
    "3BqLqMc9XGMxnKwZPzrfrZxjVk3NPuHqkWm6Biw4ofjstF5hpp6PzJbYUCK5iqQfsFaWbXcvgTTvHNBaCNQoK1TV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rNdDwMK4RX7eAkAaKb3fwnera5Moc5zGy7QhrfzjwKG3w7UtqC3UHMRhrCvvMJF7rKTEGPCxK4U7WTh7ZL6kkUK",
  "key1": "3eWwe23hURAhe4BSxdFp6YDwU9JAMVwEzsxFQBLRKuhibNcNt8fTae5T2UyffvFBkxq83dzDZQ1MNBHp7Y5sbdBR",
  "key2": "5Ew6psCaoXP6MWHXKNC2tC5FyUkBc3eh9Gt7s8xNhzB3tacjW5TnAYbX5Fz8kTvZnyxTT1AnfFoYZfePCtMoEhDm",
  "key3": "3ZwtNyGw8n8Aqc5iKZb9gidcHEN2JvAFjhdDwE9ZnywUv6T5fHT6f5qhBcNm8XQecaDzTVfmFyLrEdDPZQhL8T6m",
  "key4": "3BCpqkoFin3vtetFq34ch5R88hP6tYCQMYJp5sDoAS3S7pQg5q4Q6JsftunoyLAorpEa3M5pwhMX8of5gV9pUDGn",
  "key5": "28uFLU7B6MwLWKpwwYhpi3V3Pyg7H6QYYKKndU27iMb9yUX7DTWRjPpCSScVadq6kguzUmqDu3J6m41Rbtwvstob",
  "key6": "Y9KFGWDGitZtq4Sv8kK5ss1j1zyaJWaKgg3AduP8fXYjHy3NCS5F1M3mjP8FTYawJqaCZ2DjAkUsTVAKpn15dv3",
  "key7": "4d7a8jELNf6LE2yFL4XkzbP9sXPAYx9jDPDhqB8GFpRFZTNDjTdmeEv9EevuH1QQXTnxca8KfPEAPYLxbdFrs8rm",
  "key8": "2BGc1kPFJT2kpwrm74ddVLeBdiG3reArcdTp2CfmvsgeEro4PAwxWKsWFrr5EcSvy7XngZJbzvKXELZR3Eg6fPeo",
  "key9": "2QXEkkGuN2nVBodtdxZEDyszR72w9oJvv3uyyXH2LhcdpFHMvuaWiZDkTWDaYfitMg4sRQRKAavH89kn5pZ1SQYU",
  "key10": "2XxaCLFtzj5Hs31oJABiw6UZgMCyCCoLMyFJZDYF8THP57Yhn4znbUttGipYwLaCALxjN5SiL7qf61RdAeKq5uLM",
  "key11": "5ALJnCMqjHRM9kehu2yhGPk6guYxYSvSqAyWdiPrrvdyf6dh4xY2w9r3BMy3sLdsrC1d8WSqw8p9RuuLWpyRWvnG",
  "key12": "3RXkSs6QLbWC2tPTBc1PpxDFxTPGeD1iShYT25RCcjQzhMoMNa1Y7GDH9gVahUAeLL684fW1qfMcCmyM5CGKnsdC",
  "key13": "3EuCnC7DNQ1A2Equfet8AegJXNp9rMpFmnjyFC7AZFfmmYULw7KdutorUwUV9g6V43fPqAbB4cSKaqAsV5hwk1qk",
  "key14": "4mm4a1iUG9N71fqcTuYB2HsH6xe8Nuhr4rzy2TzZpWRBdmRzGANqVmaC5Ny5YzdjnuuunVAa1r9RQvSy9EioXyKX",
  "key15": "2SnKS87HXN3Qxn6qAv74SVW2KedWtznsxyHtiRmnrE8ajdY6eSh1ZS7XqaRYaECKkoV6mQMfFNsJ6kzjCyaM2JaK",
  "key16": "3zCL9GVwdEVhAEVWvAPS67KDP386sYLtkY5Pnb1Y7N8eVCmWJxaKgeCvitScBNHRoRzd55JLkDJUtSG5uTqXxz1W",
  "key17": "2AVmcfyfRcRS4eqGdL3FgxgEfZEtJn3Mf2vjziGyEk6mio3DTy185JiaovHqZ73LTxrrzqAS12reT4c4f9Vc5HNy",
  "key18": "fpmu7gbcwZyDhtcFFj2UtmkiuLX1ETVABzHUKTpTcXJkZ6Qc1hUMDFLAexFt93xFMDNu5wRhT9SgZ9GBRPAyCYX",
  "key19": "4ok8JcTq2SXPpctBVQXn3L3ZHoK2vkh438QtEvAJiLFWYKb4bc8A4A7xoSrVbzs9BNkQS2jRHea8eKrh6AdedG6b",
  "key20": "5Qp2szvoebi4X1AcYK89GSuTAhyeChEN8REqvWiE4Xywz93CHgBMDFyHihMeQd7bLiLgQuPTqij7sTTn3nLS2rFk",
  "key21": "4NkYzVm8YoQrcMhSWorxyhdbNrcC868MYioe65tJBvwA3EtPTu5Z2KpfsWqzMVvyn1TjzwwpGGVzKyFL59zfwnVg",
  "key22": "3rp7a7qCigXb1EUt3LsSy5esiYepuxBTWPJaVYf3zn5DMv8sYhJ7hxc47uGMBmW3VLeSsdFu2z3GSQ94fCpqiz16",
  "key23": "2teqMd9CwHdLR4dtZboxVQNUNrmbMryDDdgoD151HwoFNZMYmNs1MjaHdEig5a9Yu5fSSkgHfM8wzgpR7EQEy8yq",
  "key24": "4Tng2te72BYvykDMzAFh1jmnm3MZfirjPXnPYd1sUB2RPTs7SZw6BocW5yKfSLAFEjmCDftpRasSVEVyUouPvwPQ",
  "key25": "xghTHDDzCRheSQF3bsnrTB6JhpfkqJ1ngkZMT6kUfGmgxPRTcc88nZDVWGG1f9HGgqGZdzLYEtJYsNF16bjht6R",
  "key26": "5BqQtALPGSvbo64e9Lkzf77TTdyw8tL6t7pUZ2gDtp9Gg9wwGGzQF3D8tUzd91tTYTZBgYLNb5uqd723NfTGTcjz",
  "key27": "4fyqTADvPe81giFp6Ccvi9ftWi8m4oMArX39CNhjuDsLTdoAaToQaqmu7AMvv1wKSHLmBCqtHaX7HM5ZDuwqg5C",
  "key28": "2aR3xXbptrN1TmNhMvJk7EZnuPC8j9VE9bCfWfGeRdLPa6DsP4Gxky6n71UuCUfmdAeVeGuUH98fRgzDFVxTUZjC",
  "key29": "27RW5U5tpQAz7LLmZCvZCjt6SXi3kTKWyA24zQHFG44Sz8ew8raFmoyyGygwpUb1417AHN2hc8XepLSGC1kaE4ss",
  "key30": "4Prrt7EnoAUeEotabPXAE3i2efci26CZxS8kzkMqhuZR4xYksqT3byPYte5CcMLztsZtC4QojDfTFPQGxSr7Y1SV",
  "key31": "3ShSfkku1BLU7E9aksPZGEyhhzKhmfs9MyBL3t3fWnq4BSJ6gHmgWGsYsrLaVjrM4jZm2DJ3xSptWTsyokaPtYuG",
  "key32": "2bmr3MCpyhLXTcbLpjPAcrQpUPWG4obTkC3SqJA8oBMtVeMMwnDFQNxJKqXMg48D9Ay9MbSq7zKttYtW3QpahRpN",
  "key33": "2whDt9ovrvP37suQyte2Fjgu8R2CCSoy3KUekBmapziRyTt7XsDfG13CKwg9Cip63Antwz8DyH9LWL7NrGy9hY52",
  "key34": "5AS66XRGj7K6PYpYgsHzQtEA9sCsLsiHYdy1MqS7bbExRRHcwyveNmg2YGLwybusWF6gY2jj7JLT1rK1EwY5Wxr5",
  "key35": "21pvuqh9v8RrdF8CH8dE6a8zaCiwrd6mV78T8stekzny2HXqa29Qg1feKGF2jpCj83N3QBLkNKnomchW7LZGxxeV",
  "key36": "HGz1QQD6zG7EvWytKi1BMoGhWGgRRhCWVwZQwRQPHFwdMkzxLJyeAY6DEHbjy4tFx9H9TY1HHufgqN3DTb54U8C",
  "key37": "5b8p7cDRyQSonzcuYpgpuP66AmiPw85CHVzz1R8STt5wGbg1oupMU7GMyGvCXNGPM2Kn5Ve8uxj8AFDEhDYonUKQ",
  "key38": "5V2kTk1TovhXARzLzLyqmaZFzovGep3zNHu69t8qvZBdEczGd3624hqqA21oGgehpWkmSGxRwTbT472AjsBhC5mi",
  "key39": "4gvfFQJayx2QyoBF4pKnYXNLuWk3RdMHADpxtcXFcMhLihYkmFYqR5Zb7N6w6iDARiNoumHr4cT4iBUjvvpV5TYj",
  "key40": "zja5csVQjRZzzFWzXsNmWeUStH3sFZsp3tBmbaa8xHWSYALNHmFZ9QS3n6Y5PDd6TngqPPgW3ACoNeseoEFsAei",
  "key41": "3wfHaZxHfKWBnGyupZ3wTLxWFTwDVAuEcB9LDYrNGAiY5KQEe5PyywfV7af5QvUcDgVHXnQ5hn1o8wyRiS7ffdGJ"
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
