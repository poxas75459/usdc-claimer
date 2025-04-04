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
    "5Vg1uzkH2W8Ynnw1o9f2tHa2ETMeT51Nt1ay2Z3dCUtutreusaScwfUN4PvW6UtKNx54qtd9s36vvXocMtunfSeF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RXikTTTNsoyX23TyoMGPPRS95NdGaWujonJpGrLp5V57gEzu9mWktCD1Nu6pP777MoRZshPWU7FoJ4rjpUA9kV5",
  "key1": "4mQQ71MWHJ7XZnJnvaGjFFyRRAsoawgeujdn1QbvYqYywdNcA1jRqPeo5bEX1XVZeEtJmy4tDZkgSPYfjUhjz9Gm",
  "key2": "2enVYjdTdMhKZr3w5nXPzogJPrge4CnfAPTVq9TQMubHymyjfrTzGhrERYy9ZHsViFWQQvKmWaTVK7DYhgtKccAq",
  "key3": "4EmzLhGrpKA3gjizKv3YZnoZRukWzjEtfsysUbYscmrKyDiadhn1iYXmEkqQHJUMjwL4a9p5EAv1sTyqM6hAyRGW",
  "key4": "JWpuzT6wTRaggSNHUtUTKgnD5au4x22TzdKWWxzVVsUp9tZWuYJiEP2k53uUNveHvtP6uVapiTyDTX5R4rcgnik",
  "key5": "4bicevXQJ1yahVBCnh888PiUWTcHpHv3m1kbTUsWzZ4KtMPbB8Tq48nUZ81Y9y6HvqSoUMpLCxWQbWiDXdMW9yNw",
  "key6": "2c3UnFFgjoSAK2BX8PoxUqqzMz1P21SbMpGCVevtT9aAqwEYBEcooEFLJ8WUvDeGyddKB5J6qhMeHHm6LsgwqftC",
  "key7": "y83t59yuSKX169ig89zSwmaQoaXmM3peTrRNQZv8askyT1YHKp5QfWXZoy7dGxTjKn98xGfz3aB8JrdzwP8H6A9",
  "key8": "2wz4Fm4T5uRzKJUTM7Q9sCBLqu8UR4TRfL48mua9oXEryW3obFyaNyZke2EBr9bbVjUHkAzYeiwaDJV1wRTiknB4",
  "key9": "2ucPpkkGtKMZJcxvVFkZSAv6dtC2wW3M4RbAFifhbCsLgSRuee5yAFqY7NuJ1BugLZ23E1ym7gqzuTe647oNAv1t",
  "key10": "2Pny3trGutdqQYf4WvcNuvrWSQvxM1VsiLvieJq7pnuUVuriQcuw352o1LeEwrnMPEKjAY1dsdUhd9ddvC5hinUq",
  "key11": "5Tm93XWK3az5qbWX1GkycxPF9iELVDjsYZV2fB7ydEZr2dsDkeQRnjLqHhYEATDrxdUwEq6kZtx6yTyXV5tnSJs3",
  "key12": "5rsr1hUNEapwTPV4mxEgZBoNkea36RoQ5niet8k7xkcYDvXcimXpJTXA3oHACfVRpUCMnn5jQ3fjAgFbGhBRTBXU",
  "key13": "4tr7C2peh4Cv7xuWE8Vo6SY2JVCwBQQ2XtDtqEZvBiTZrvejC75B7AYQWbUBfMyHNUc9aenRSYP1KHjsDkgWvpWE",
  "key14": "4pFDv99Thotbp15uJ4j4vpjRiDkZCj1Yr42rDGxjnCLrELuXgiJsP66MRELuN1x1koJHViFg2w1NsTc7ZZ96nPdw",
  "key15": "346BxBUDgpHVxnuK4ameKAuYNo977ccsELqJBoLVYDWP8erKmfJnRyP5yjzwLm4sKzvp3aCV2Y1TNHf8ajwz41MM",
  "key16": "YDL181qxR6Me8DCMMfn17bLnfntgtCdRDUhSGmK3VtVZYXSyYHVUPXLs2zCRQCCBfnhdcGjAUfjsKoZxJ85BFf9",
  "key17": "3JDAVrkyJFmykf2syeoCXbkAF3ud3eXDBLdVHXQn4bb6GkxHrdK9Ep2Bf3VBsxaJdBQhuSbBFpUPH7AVa5Svaxo6",
  "key18": "59u2SyPLz4pSE5mrxCmF4WHVHxjmcG1vwhMASUij2jUGi7ePfWVwjEnTmR6L8SWCZtNVrMiGe4PNkob9u9Zurh4",
  "key19": "23daUD95LUK3ngXqzAGuFYpLrXK3RiTJt2v5FZWYTop5NLMKcea4MmNQVTgMfPJMJ6aMRDU2AA2T347Law7AsBiN",
  "key20": "5XssEkYNNTF3rSjhSK85mNjfqmb8E8MScREwXQzGeTPKg2MjXi9S9sGCbxx5452SUYeqNv7MvQau3FUwWidYCFfp",
  "key21": "KwgwWSB2qUuqchMr16HJ6ZT3Z1W5ySq1LzuyzERC8eJEAWKkEfsSs8Pw8cWQadSxA4mCdagMWHUwU8NHS87k52c",
  "key22": "4ZCwtiJpZgJYtowqQF4FAPWFX7zHyrrMUKXC2WH2TazbmZ2izePYynpRcq1gApxyC8iFzqa914sTo8bUVQARUM1E",
  "key23": "nTyeysLRm5tcWeTuLTfZQ1MWK6EC9DYi4kNXUApCASfS7B2oT8KpeoN9AvvtCN4y4nvm1ZrriodSdQqV9TUFfUc",
  "key24": "4fJoucfzvMENt9MMKmBhSachG5w8BNxiiwfZf9vL5JXvcvia3HknmbnwZUbjkx2fdbPUGbC2hrSPvFPsY3XyjHVM",
  "key25": "24f9dShYoBdTCbLZ4JBTMUmi1JHaFLznQvWzwUHg2GbRXxoLq2uQzMy1fY6RuUfuzHnVyzhm8WDwf1aGkLgBAWru",
  "key26": "3Cd87MJGCNwZHrWh7q3tTaHugGvNXoCq6JUEgvJJhnskuQ3CFio5AwvHuDxXwziNnHRWw2dPKLDW3yqXGiqJ6EsP",
  "key27": "65BcQfxjFFRETweS3NnqAYunT9mDrUorPb2UUiDRjgTUhbeU6XUnQenQZxpXmTETPzDJpQhbTzVyYS8UvCwMB1eK",
  "key28": "4B4u1T7NKXutMRbMCyGh96HpkpdBozuANYT1JbqgRibDzTXCDXoY3t25GxtZ96bwrK3jN66yZAtp7ov6Phu4R37T",
  "key29": "TTeiKm7FxPcPsdRkHg9dCfCVczENRF5U4hWQkShedoWjqa8LCgehE1gxLZoqcKKZvbfZTkDh6yg6du4V1juaf8v",
  "key30": "2KacfpnzcmaRVbHrLdCMFuiRGGagGyUq2tXX4FWvAf2aBhMJBTNUya7bW1ysn9YQmCP4yfBfyP17LrZ981mLecBX",
  "key31": "55RCkaCJKVVqbgssyunj29vDmwHkKWnnKs3scKZRpgDfgSDQwMyocxv5euDPqAhzUXgiL8kPwbrZkQmZMk2p9jb8"
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
