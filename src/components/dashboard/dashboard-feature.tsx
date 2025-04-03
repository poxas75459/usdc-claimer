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
    "2RATNcWWmK8ynzbqSmyDjQQxGmD62Xs5nw2ohBGks1E6kMzc8xDAMGh1yvbfXUkdDrTSYYm6mZ4GR97H9qzk7MPF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FRYDec8NSeTXrcgi2L7XCFPMDW8DHaNpFmL2UewFDsR8yURZiSHH9nD3kicDsu4NcNBu9BLzvbnN77psgSKCc3o",
  "key1": "61HqmmMthZbcPpeExHnkHCiVp7kE82PsKiYWM2DeSg8UAesnd5uchZAWP6Gpkm58LVD2WSRjWKvyfC2qNLwWgSNA",
  "key2": "ZPcfydzTHGt1Nzpwco2U9P3cUXGKQRoFDECmvcWmfeqgS1JqmTDPj8dS6YqDcvBuL9YcvMESwvinHXcnctoKYfQ",
  "key3": "JLKBj1UMYx9WeXw3YL5HXLcAnietyZBgccz9izsacw4ue5cEHfhVUiGUnemnyMGF8nLRLBQrvooQtJUr8dSjnzi",
  "key4": "2PJ6mTTPH8KUymqi2JjLDvVkwX9hzhwkC5Jq4qqgeQZM2u7UZaoEngyxqaXfSjyQNzQ74VDmy11MxPhb9dvxMwvC",
  "key5": "4g9VDUckCk53BiL3Hrxcn9ftSJ5Kun9jwAbLHWpZHCiZUaeTotCUA18YLEv7gawzbAS3tQQKbubQmXJFSDvba8ub",
  "key6": "5LNgqSh8wK5CFWYH2frq6gHXKxxg51D3CtTK4ecm7j7LGg6ChAv9RhuFkCquuHgZzQauVvgKsniVu9xb54MsyN1a",
  "key7": "3Kjdxv3sHwLkUeonmBDjwSUvh2GqN2qmKK5372BA9DPuzx2LkDcnLeUBTH5HVQVUp6XGYzYWUfA5i91LnRadW9Ac",
  "key8": "5oiVior26SQsbVWiWHLaohfBff6pwhFHjhhKmNb6hyvc2xfpV9MZctnvfVYmkQMhHaMkWpYE62573iMCrUJHBeMb",
  "key9": "3fcBFNXAnnTtzjVz2ZU1NDeNG5tX4e5eiWHHJdZ6qGkeAdXHtqnRVVKtPMWy9fumXKH5PWyfaTcD3F9yqcagwtHF",
  "key10": "5QFm4FWAMtHRjTUzRKKaWi798cZ3ojLjgQtdsX4BAQrFzhMmzdMqo91W174cXnprH2iGR87L7SPXW8wzSDvrNhbo",
  "key11": "5wbHxHijrDDPUD2xQJvhbnsPPY48ULX9h4t81kdrBsigvKcxox6HEgck4ETmhMT63XB6KUaRVZAEdaqxErB2YXCj",
  "key12": "5zfxAY4dahrugVgzpLM8mojzgiKE1ajpQbCgpRuYXDj2ihYYQ9fsZQLUpogepF1NpCykSK1LRh5zGme4KPV9AYgz",
  "key13": "5vrgn78DkihQZA4cGzfiwG8Zznni7pWrH6oPyM2UPNnTgkUujRrewvDMEcpexNWQcMZdm2QpozqzhX1WHXdhhnBe",
  "key14": "Wpmq3MyDVw1cQR3j5oRSMvw4vqDTayLogW6f6a82yiWn2GpNbT3dXPcsJ3ZeK7mQFKzeidpZ3fUXEHLrR7fsm4n",
  "key15": "5reRbSX9ZGDC2Laym4jo9A63mMm8kwW6Dfy4JfjwcJawhqDvRpgTZfxWeTtrtngXdzoxgPU2L2eRuLeZpaJANsjs",
  "key16": "5GmgNEk7csGKKHVvpgVvM1xPKnW3sgPMbxFQXVi4H5zidHMYG4CX9r18a9yKmakabtu5njgTkeuaWZ9U1SBjXHQW",
  "key17": "34BrAMr8SAfP8qAKkoRTvgFHwQ4iNE3AjkkYARBeJ8J1MapNbhdqbJWEHxckzpi2BJeME3ymqXXFGiKuzG4S3yVH",
  "key18": "5sJvstEbsy7RBNqrp1iyZ1v1Wm6v5a7R8AEdmwNca7QcRFz5ecrdmu7x8Dvf2bswZuTzBh2RXmX8fhRG5NixjneK",
  "key19": "3GJCW8ZcYnEc7GBqMCCgza1uBUKegHFVdRPpCsJhmJUd3T1Qr6KXBca6YDDTNZLQqeTKxHwtf82Xhxt7go5z7isK",
  "key20": "ZWGuijeUc84QUxpRXEcQsmN9JcZsafmRGjCuNCpsn9V9MPinGZoLrVjggDhYKqdUhRNK8A5Xm86ipvkbkWZrZk8",
  "key21": "5PUrWNDz473jd7SvtxRZoA5FqDedHPv1jsKitupfurtN7rQc4KfnAp49FKifApFdNeQRbEtVP9WWXKidnpBHb1ug",
  "key22": "2ysVN7C8LcjTBXXpndv67Z7gKbUcxaZcCbZCqe1hnVSsEnK894NQBRmLANNn17c2cbJR4aKPvNaER6nYCLXMS3wg",
  "key23": "2rm1vjNBegfAxrBuFmTbjo1mwiAKYkNzArpQj6KB9A9xF4WJ5pa6NpRCM6vyzjnJUpuYnbrzA6idckufHYR4f42H",
  "key24": "2WBMYRCduhFdEY2yhqNMXwgB3UjUHU5Gq2HgYzy4YMLa9bJg1kUkoueLvkrDtUjwzhgXjqr1JBmm4homDBG8nvh4",
  "key25": "4Gt7MaMvBsNFHceSsvqySsyvWbFKRkchQegEJvHmVvfJkoYF5GUjuRJQRe46awdYb4vKq8hTMpBnDpkzpNa1Ewia",
  "key26": "2Q3znBCkVnM2MvjFyxBxJ4foQhnpgJfurPR7RYVAbMr3YwU5HMLiypv6JgHaif9CfdU49v2iQiK3DkYStnE8Sjxr",
  "key27": "44xkUK2uaCN6wzr8NVDhNzyadcSJ4bYmdkAbfU59uweaFpK5TP3MSr3ebCEvyeaVdqSW6y53quv72EbFshYj74ua",
  "key28": "36kjsJBTm4jcRsKUWGPgpd4takXP7dq9KKpAfcHmumvLdP8iRt6haJiVVXuMchMK3hTcD8pZ5PgLkAFwPNyA5qbV",
  "key29": "4hVPevDhUC94JeDfr4Apz53xib1jgkC7QM9rxVLrdmywp9evGVhgBu7hKm68iawR5xwBbUSJeFXF9jxx69ti8N5U",
  "key30": "4dqeacc2zsw81CBwbuQAmNfiCNkaJ5NP5Pv7WxJ11HGknwPS2pmbhzu88ZWh3Gibvd52N7fEi1ehEcQywAJXH3gq",
  "key31": "3vDmY1J1DZg6TuYyqcNBiPViJ8Ng1ofGfttEkwWKmoFrVU4agWxn6rrcyYZZtncC4CQiU9RZbptc3SP2qkhCXwf7"
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
