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
    "4NptzsZsmpoKadEsRrXePvmodFY3Cuuw7dhFCsofS4ZwN9dkEwxugETuknY1kTUm4VBRPmhCcrFcMXV7sHFfDcSk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u6u1ffwgcah2chKPDMkX8js1WQSR1b3ZuahgPD9TG57LHdFm7XkJioKXXda7er1TQyd2e745bbGhczSVKtCbWGY",
  "key1": "2fRsejismBsGWi8AYm13nVMHHwnHUVYJ3zxRBZerCX7QUGh98JbSaJhjukkkVb5M62CQgaNx4CozHr6hY5FyGGcE",
  "key2": "34gY8EvoKgN9x5HY4sCLguZHuv8iMC69UuQF2WarZx9w4KEtMcGmc44BrDkp2anyMLXTcTUPFHRphjtvPhd58pAV",
  "key3": "vtHxEFPyG33yR5aBM6mVKLHPftb7T6pGA3PbvJrtRpX2DbzrMo3JRMaKjjFtZJtbHeMVsCMF1mF2rHC9bYtei2A",
  "key4": "2KC1b2hiyMEcji4RiSbaFaWaapmruFHNEkix3pVeEdd6nmHij7agX2bRUW1yxYfXbfFEsuEgnJ4FWoHdRxxD3gF7",
  "key5": "5TKHMSo3L2k6yY74ZoBX6EHGATsfzLVDEEgw6WPRyDexgL6Wkf9QJ3QXGRq6KeEdarg66ZmX4ez9JXQRNtz4RDYP",
  "key6": "cJYVyZPebaB1PWQyuqipsZtSN4PgfPfxjCYQzY7jDy1pQrdUsokFAv1UUb9MascEfpe9A8zrCf8bx7rAZaihERF",
  "key7": "24BuFKLyyUPLZ1GmHcag3BAQQjpMj419RzoSnGShBPFw4xm7kQAbeyfikDYBJq16d6Z8ztL1Ddsdq81XprMz4PJD",
  "key8": "3fJvMJQFtukgJFoP37XJ8fohZPpL4LqEHDWCM9qUDeJPW92tXPpb1FpEct3y1g9CUgmzdG7irYKZ45xUaTqbkWm5",
  "key9": "2YNfS8VyyuuwkfPjNwosud6YGgAW2hJUpn2pNCRMo9aUBP5HstfoxDXwpULwi3matr2cqWbqtNB4LT4q7c3pFACo",
  "key10": "AHYMLKwNKXUgLXXeXAmkbdWSW8tAW7JEWYikWk7h7EFuPjc72vsz37hKNfpWffyYFGf8yJCH2CKGybi4Wj7Rck2",
  "key11": "3kJwVBgKRccbyL4LR4QPm9LPMTc2V6FPs6A3sShT3ThbBQjtbfWPXQCTzocMdmXrZbFHV1ZGuQ1AjMcBppESR79y",
  "key12": "3We97wDUsxJLN84ESHHJJJd2TFSfsr8w33E2o6bbkJLBzozKV3ExPHPZJWaFCGAS2i6oVU51bTci1q7vuoQ3YG6k",
  "key13": "qtpBiib59uy2tTdbv8hZxTnqWUrFDqr8MEUZ99yQcx7naSXK7ybps2egNHqguXH76KMUCsYv3hN3GarFUr8THYo",
  "key14": "4obGd4vj7HDgGg8H21eitVTk7n2KzgwHqzy6Q93JizHcNsww9is3WoKjD2h7oX6DcAs89CLoZWxqNCwpVC31yTa9",
  "key15": "4tDZJEjte4moVzg6repXSb94dpHPyUhFRcAUrGxpbnTFHCLLDgAu7M4K74eVXkAxywTN93tR7eQt3VMdRoKYiPmV",
  "key16": "TP14qJVRje2AWhAEis1DrjMr68ecMEziab4gg4gpPbYKkStezuPvCC78K5GgEvAiJZwMYpEtYdv7sNdsXWyR8Nc",
  "key17": "4RsUcA6qF4gTed6TkBqkYyhWZYdREdXzbZtRw869X28aroSjRtShp4z9Pa1EeTyAbUrMUTyfFPLXZ2rJgAAqEFbL",
  "key18": "33rgm7XaHpSoXLFm4zFnFnstkuUoy7YpD8EjdayrtTf1YDYfsHKUiqbMFFfUx3xrHG8oXa8eaXUMrhA2h1KbgejU",
  "key19": "2BmRHzMhC3PsU3FQiCxNBeVvMFjofJVCgmQgjjX2iJh6Rm7MMkBvMtoZbs9MwLRr289n7ASLyQYC4nYhSitArTnh",
  "key20": "4eNGVTCHeFmdSaNzZwWetTtZLkfGgrtvdKUK6idwNbbUAYaRpuSyKm91qBk4C2ip2SyhKKnNbf1Un1LFP7nwieBL",
  "key21": "2bGCGUm7xggLMYEU4srFmAz8cTxoJDze8e4cZnUDbyRdYFVqJWwfViM8GxV5Dgn9spg7Ga2gaERXF7x965MK7uSL",
  "key22": "4hLLT4VFYvYimLKvJmK6uSpGJmotkhNZ3dUiQrduBaDNqX4sAiXRKmbZQDjwGT7Sj5ted1MnUwShkRHGeACdpZPF",
  "key23": "2G4HjReRQxeCazghfBdNVH7d3B2Ux7GLxXvP7GfAm6UT6aQU1jksAA1hdJjgJdyYYqVgU1CcMwskZgudDRwbppcE",
  "key24": "4qwStDhnyDQRExecurmhpjXjtVZX8WqURtdAB7MRZ9KbCrsct7ymQwxug6FELFmv8HbpVbfWeSZBPrdUk3vv8QAq",
  "key25": "2S42Qzkocwkye2G6YMWVnSXgRfuhn8CZv7FA52DKabPaeF3LwMESumNsEmbQyF51NLeLTeFM8mdka4C8Yhve2ctk",
  "key26": "5YHk6r9CKNijyNqh3WQsUpj8rWtpDYL4B1KUVQQ7PjYryNCDH5HV8uMnWF9vL5r9CCQCuy4Xu8csj1yfrXxKSiCL",
  "key27": "5Fc7LauZ92JYNs8rYRVLYNZkEsz6Ao4ndg6JoKkX1iucC1oyLte3nEfvaLaRd8AhsHTRq9o396SeRxh5mGn49XML",
  "key28": "2cLQjkjGsjhi3hYUKVAkG4VUfwT3gvbn73PckPJ8HUDnFVnB7W8SyJLwiD2FRcVQec9rfyi1LbSZTanJUfK6EN8D",
  "key29": "3AjMJ9vifdHKhUfhR2FqFXBeYkceTRceXcw1VTxNgbo9WVUYruHh3unDT4FXw7BwtjD7fmynDwNSbxR9ouUi9x1h",
  "key30": "3pTMMin6qYieuVgfyFrfCNf3QWaYDFhaj9Cedwuu4hfsMVrQ83aMR5wVVN13rAWyS352CvihrFNJ8FPJtHa4dzWJ",
  "key31": "2TETojHVrvPV6YHHG4GLgrzhEch5FDfKJVsmhnaBR4Gn23hS4TbpAVVKoncrpkKMfvcEyKmwWarj6BAcqAyuDn6H",
  "key32": "2AvHDuFxepBFV4V6TF4AS5QUj5y9iW7jdQAZdgojiZKAjEmhG4bGQNPXfpeMkgsu2J3fvZeset6UnoubLNbSAK9c",
  "key33": "5MH7qY4SXtTZNeEgNpbZNMnC2FNpWSkurTkntT6xH7G9iP1fto1XUx8oUpWKoMJypHUnQWRVzx91pgUr5PxPCknU",
  "key34": "66mwUo1Nj4teQdUwfTPqJBMiJgnfcRTB2ztZHarsKqpvKxvj8mgREboVH9JNjJVKLR1BBoY5Cta2XAAhui1wTzsM",
  "key35": "BZYUQukzudFYXVqBsaSc1rnzXNnjpyQGWa2Poitvwsctu9ECpQDBw5AAeip2uNiQkF1Kby7M4d6irYETeEjhyJM",
  "key36": "3HXWohodsgHsjks4ozxn4PhD29R3gRuGEkataKvpVyB9XAaqs1TBrcMvgedGLAMSKMt9hxwE9W61UrG2N5PyG95s",
  "key37": "2qTt1Yxwi4MHZuUooiKEEUGBh5rmNngUM2GS7g9SYaTe8GAp8WDEK74K7MXmBzFWmCqs5Wz9mkpvvn9Zh3kEV9hE",
  "key38": "3wnhAe8yELZt5YEx3HeNYgDV4dd4PCasoHEhqe38FLWsQdGDxkbYhfEYZ2voCsB8YGdT6Z6C8mT1NS8CTN6kXFD",
  "key39": "3mRFSqQgQUyHSk37QnNwpSqLr7FxCLsEiqw7pQ4VjZzF9tituRf4g9t3B2vFWmydm5iRzn5sNxK7u9JQRtXpyPNp"
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
