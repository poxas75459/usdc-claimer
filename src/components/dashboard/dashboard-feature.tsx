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
    "RyehRdZi6YdAPwfuw3uVKWecMdztJu6fDX3MJKPtm4oA2g4fHCFALNQuANqVTA1JzC3NYKebNojHNfdkjyQRHYM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nLZtzrnrosNJetpWiCbyQCceLxAjQPKwkGjsdXLyJzX1dmXHGyjk75iVt876ig3uXMHLM8cRWSvApLCEPzSn9nw",
  "key1": "2uD7dovgJ1n73hL33F9fxgPSnCZdLR2RvSNEGTxCS7q4wyGB5jHdak69nzWmhkmuKSQFJzHeYhJWgvoheP4Qv4PL",
  "key2": "5h5PqUFUkEMNAGZDN1Y6pjw2RuguXJxH8R1t29x9rUB4FZdSgXkq9GVtggrex19Z4iTyhqUjotkXmpYCWXyhkpJd",
  "key3": "SoNMuAyqjLfNXhicobPBa9UsGkUwSXDqWPQ2JDvBRBSZRZ19D2ud2gFQz9KtZ7j2Ea1hhZeydUBvGpmLPipNKX5",
  "key4": "4XQcUQCK5T1ZoEA8dSq96SXDqdPGCYaDKVnJN2UtZs91W4Nmq3rSh5BJQaqys22LjDJcSx1a18tSB2VmwEAXVaXF",
  "key5": "G15vDogrsjD22TtAtc18ssJAnbdEba7WhamBQnaezGPedSy8JdNm3ryguaP4yGwPz1EZTJFyzEdi3fB7Q1hhBZN",
  "key6": "29mXm3wYVL2bSzvVisR7iw73okZFwSdSUTQ8YXHES3upXew44J3VeJEXxhiXkHAbHw69Kofi55fYgHZNbW1adqRK",
  "key7": "2SQak9bXBk1jEaoK5Hy78FBfSxuG3ucFy8BVbta1sKnDM6Baoxzc9jbseRTwDUUqf2AASgVaieCYEmEHZZTCcepg",
  "key8": "56MEzii3uVbWx49UygK6Zo8FmzXBRatykYSDyjGi1HqGP4AiTdGqhxwFFEai3CDPTEBSkfVWTn3BGW9mdHSi8cCT",
  "key9": "5WN1dyT5cdVRyky5jwZi9mQGVGrBxLtnv9aRLZL3jfRiJbQKtmU7fQFfi7vWUCL7TFLtNpYTyQdCVsk1QsLxwEba",
  "key10": "14FDDsvkWGoMnbGK5agHTbmpgwc1PVHA2Eaa3KJWHUUofHh5Yx9PoYQUgLM9QkiapVNfM1twBBHnNXKnkfQir6n",
  "key11": "5yAyMwHxwPAPH5xypbtx8pd7md38ECHq8yfcun233i9YbSvTkqzZstiWEv6AU9jFt9mryVpp5DUdfmHEzMBk416a",
  "key12": "3EX6EZVNz8knQADv8EEPbP4rE7PXs1gHZHpw7S5KuQw847N9TZrSfzNW1PLpNuJ65xpmj2U3Mg6erARtmctnnATi",
  "key13": "T7yNmNCbT94XPJjgkWSD1bauif7vaFPxunoeebDZxMUQc5zyPsq3TN1GuaRGLM4UVf9ZLWP4Ygew65XPf8QTMex",
  "key14": "3x8jG68HnBT12bSitmjzWqU4VSKCNKpkm1wu7hEHbB9jzBW7Lrj3R5YSJNViiz9T1sdzNsME1eJpxbSF4McgF9fw",
  "key15": "b64g3mFvTsdfxJMFheG5FuWYksr7ApBHGTM3S7sRSf7Re17denxyc8fMCqK6RSbBKQzswvGKzNrdKddXDnyDBTF",
  "key16": "3139AkHHeybTHUUKXgYtCrpXn25oB9u8LTzhzwBWmjikH3bTZKhaLLXr5DxXaGdjQvvP53eR7P17AhYGVcUzybQo",
  "key17": "4AxJTwwLAe1umzjcN4HzeibX3rjbg29J3k8BrL9xVFmCSe9LN7U3yGi6CotDBqNFbNS8zMU9NE81yFEMR5ZtfFuV",
  "key18": "2Ti6bB6eV7bNxtFscpSfYc57kwBRXhV1suA1UWPnyuAQE8fR39CvKLW8LUdQyaPrv4wbQ8uT14cMPUSkc5RkscB8",
  "key19": "25WvA1nEfWuT1P11aD4Bx5mHa5pkxwy4JGfJLztbjPp6xnzyQH9z2k1aDNq3J4mGMwiiLcrdVhiJ1wsWLdu4wQJW",
  "key20": "3ABwU6tCWXYRUhzVy93x7iXQvTP4vPeHAPjpPW8sCzwfk4mdj7hR9Q3mX92A1RYcUEufqnjbwECpWBGs8WRNK15Y",
  "key21": "4TE3tTHWtiYWNQJiMSxMjixfFon8AkZ8bVKio3G5pRhsmAKdMqNWpGp4X3mMqx3BCZwCAR2xSQ6wrBJR1TNSMKoT",
  "key22": "5o7edDqog3RZu4GZoNLVccQNXUVnfQF6VEwGhmzgzvwbUcuFnxji4CuYbe2CJWumAE11butH8Fw6zQUrtpjSu3cT",
  "key23": "PRbGX3YynVrEGDkosjwNY94r27HcueiY47Rde2LSmnACBNZWj68HxWobZAdpeMJ1xyGTvRWEEj7aS4GndkqsfKr",
  "key24": "QLyCfxrdt2kv3F97oCAZTuympffQuA2D2rNHNQBQXpjpWVsRJXEvytmPRbQ57BsSBKYiPHMMkHQeNbnNSXSGtNa",
  "key25": "efVVgDDgcqdSGBjLZ76rgeMbQsHCzLjrPX8h3hXgY7K5nrxUoh17SbDCbEiPV4jEv6y4NkhYQDUrYcuMMLuVNcF",
  "key26": "41DpD6TAkGHZxNf5NrvcqpZE5dB3V3558z5AJy9GhLKtuK78rWsbmy6aA92PKBUNzKmKMGf9XJMFVhHvCc67HNjB",
  "key27": "5oHLSdCRBMj6zeKGwJdeBmfjpgvB5W695CL3cz2DVffssLNbYEcWUaAMWhc83KEXQ12hdYzZc9y29tHbDaypoqJF",
  "key28": "3814Hn9FWdZrndsATcXc9ZnBT7hdc4e9memENxbyT43NAejF1wnB8ncRAz6EV2y4VZECsxdXiAUVkJ9XqzEevFD5",
  "key29": "4g1QPYe1HyMqb6ZF55iPG2uoRf3skPep3etpRxz2fF7wfNakytgNjWXg1rpZt1u2byujVCUubAerrKVdzWaHkYcQ",
  "key30": "42MEZTeFoRzH6mLCXJQFfNRZuBXRZrouUTqqTjX5A4F1kkEYd6EF8SW75Yx6BETEjkcaxTqi3E5km8yW4QucuXSe",
  "key31": "4PH9tCFB9WvNCGwxVNGYSzCnzqdWKnVV6QW5NDsXQ88ytVCqhiugiXgJKVqXxbaznqcAewcnpvksWQ4Fzv3456iw",
  "key32": "3p316NiM1zPacVJtg5C1a6p3rS8iy1gieqTsrzdFbTX1KmHZqqDPgHcTGrFY4x5pr2xxzzzQRZ8v5q5FXfSP847a",
  "key33": "4J8GHXDKowZnA8Bu4jvM3reu4tSmBRs8KuPvoG4uJUwfFTGij5CJ9WynZxbQ5JHKX3TpEdZNrxThePtmQWvbbJnh",
  "key34": "HMcmsMpRfX3aWX2GwLNZ492khr8SdFFp98SA7nLZ3zKZ5DYE5QsJu5oX5zD2swf4X9fesBNSr65twS7jpDvbt7z",
  "key35": "3C6W483Tmofj3VNybREd51r84nr48t8ePdeu5PpVATfzFaTkJDskgMFupSu7yje39bRVpAj7TaAwnSKoyBj3iANV",
  "key36": "wro7xyyFyZC35ojTcrsr11k4sj2SBLmcoD8t3Mci3igX1FDdV1gXGmLkBvzbWLAPXUCkgAdT73Kt7yjDLv1YwRB",
  "key37": "5uv8pGhzqpogUTmTf2giDX4AMcnfAYtJYmnuU9RCeXeefGN4Cs2azgSTRAJZdyKUQkjvTUuzg2PwTYPLmybqopDC",
  "key38": "25T9bHKeyvnj3WSS6pvDzghSUPKBkChMqevx2EcnnEcyFHL3M5RikfuW4GNnXcz3ApEAsFA97td1PNwHw9bSkQ82",
  "key39": "2cKNeq12drm3utz6MSn5o9etqrb5ptaKEPy4JS41djo4o1KaPHPebF38XRxQDQT95wwFUJB7hKsbGue4F1WyBJwN",
  "key40": "WkbDFPP5KQqWQfAKa8NU7MjiQu1xrKNGTZFci1bkZwCeK74HZ2DMqAr5nXauRq8eenkzV5NiazTBS56hpuTYxgS",
  "key41": "3N8KAzvKQK1boavSvMoSY3sXASBuVV3ds6eqoK6xS7AFtd4LWmbg3krPuDWSu8tQiJqQPqfEc43A4B419DFfdo28",
  "key42": "456h9Hiq7573g7fZHiKZkuTZVBYuJF3kfeY86xLt97MHrPgfQytUEA2qnifyFQqpRuS5Y7uqfTMHQv9PfoFxWZrC",
  "key43": "4PWjNSkALHPe9X5AyPDefz4hxY6dGJrRshqSB2crisRAfas169mkpAufDSUPQktHyGGmvSre5n5koWQhL1v3PSrV",
  "key44": "3Y7wNqVUdQLsLbpN5vGDVKsCJKLpEA33exQ1nDGTYKL8TmJy77rsgY2RygE8XAHpqCzSGySg1ynmMsrXbFWeCtMH"
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
