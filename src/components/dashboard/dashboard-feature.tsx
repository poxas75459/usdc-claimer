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
    "sCofZNQ7843QZ6oJm1wCiJDmwYqu8f83aMXaFDYXPMs1URefABx4jMFSfTi7hsnYm5vocMLAasYPA8GuSTiY9dV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BxsvwtP3v4kZRWABM54Vk92iBzGzPmQAhf68VdQNyHjwHnrND9F1b7DjyWRqKsup9E3YmpZN8UQBLb3ECXzmFAH",
  "key1": "5QPCHmLwCx6LhYYLDEQWnhF7JjCvvZTxpLZxxTtmMKRaYwQ4Nahy3F4tkx6kjiRWGpfwSNwaqguquJPSpD8yy8Tq",
  "key2": "5JL3P2dPQwCGYNaorZwXXxP2wUc5jQyK4mYAfiHLcapWzdWJZj2xWAPtqzgAqC8FV8SeHR8VTkVziCRuwpL34G4V",
  "key3": "etXq5m8GVc778KrdzFW5NiJNpCKjGM7LsQ7SqWDEuFdeQYTL5DTiGq363ameUkkrEaWgRo1vJJjsGZQc2B7zsX3",
  "key4": "qdJV2jvw7XNuiHTeJnUVoFS5X6wn68fBpPAgkxVyYx9ZAWAw7ejNgwGjLiBH2xYJCPzgWzjVXHbjmZcVXRMNFA3",
  "key5": "2wpAUvZ9jhzj2zsfLiwTQTFjzyvJmnrD6Mc8pCZUcc4ECFkrYpLo9yW7Chs78oaLwJGBuuJnHD81WTXeioTeBZfa",
  "key6": "56YDZMFafWjgdekkoAN1kuhVdbW8oNsUVPdafGeYuMVax8n2KozWG6m9HX8fNDdq9D2D3eqjsQHbg4Go8bjWrm23",
  "key7": "3KnNpQtqpT8zkBMwG8eQM3wGenFw6Rrndp8tzk1EsBg2XegCvmoouH9vBes8vVwBPTTdCa6ezdTEomsKYLubDoZv",
  "key8": "2uShcSiYeRkEHeWFgrj1SPzNTL9U1acNdQv51mXEgSV9ZtDiRB6uTG2X2HxiewskdR9gUgCYXzDvNqTrdKyUd6qL",
  "key9": "2HWNG69k1f4t1wUtcPPZgwPjHHtyjPFvfaDwb3hiSMh8XmCyRXnqLS3KVEALZDv8NgAc9S3HptdDF4SLqVMopjtZ",
  "key10": "2KiT5JetqZzx2nS4BBNZKwyG5D1F7NuJ9mHve9y6ZiMtBKf5bCChAHfcv23pUCibfZwaDUZy1Dx1nASry8176Ycr",
  "key11": "3iEsCkieQNqCikvZ2SdNbfXAWPD84v7becksCLo9vxKKs9Bpv6Xn4diruT8WEFTY5wtBeyRnfcosVPbkE6nAZj8q",
  "key12": "3hoYVjNd9HMpjpRNTDAb2wiacKtadxD7PE2sS7Lc5iHZgxe7itayMmvUyiWLWbrWVs7vatGGsJZVA3g6ZtZ3PZyM",
  "key13": "27cFygGpSKjZNtLVp4PWrRGfFRQxxGtRs1eEZXRfz3MCjPwm5BVfktDhLoPhC4nGr5cVCLZTdzP6s7xt2pa8Zt6V",
  "key14": "5gzsAtKFr7Fvi2Caha8YTEZZSyza7qwVPwus2npQTuSbPd4W1N6ogUPfrgmWwB8Z5sD2iDQdjLutCQ7M2emc7Wsa",
  "key15": "5yLqZyVqbrh7U1U8vSRQ1SZmfajRRNuhxpi48z3kbmvvZj99ieycQgcVb2FAAEa4e4CtnScQoaxyFGHSsJwiy2UR",
  "key16": "2DwxqLosC4uCydJwJdojSp9PtitS2PJoMzqMdDSJ1PAj6ikkfPzvRyyUrQHnMd9ENDavTzoz8BugpK7PRGX4c235",
  "key17": "qSt8i2t3NNFMPVqACVazydpnXgjR3oe7gQ4NCur7XkRnEzzvoqsJXZmZTZtunwsDjAkfdmBQqJbpkYJLLpjyre5",
  "key18": "2rgcfLJSUhj28mfCY89qkKtUNJsAHzQ1EVANv7UHybZTBzwrQx6XLqS82TzjoC8qjx43dfhcwFHik8GZAZMpTDs8",
  "key19": "5smL8oveLvyeG8AgGRtMYXFDq7T5gDPmvuCF8KeyQHFa4tomago4TNCTju6cs57AjhNPp7s5WPanEYpVTDnvLv2n",
  "key20": "5X3jNa6A9zDnedehdaFWDaMstJy3LKvtRtpLL3piedLMx8MJJpbFzYQGDkbgToaS3ssW2gGpbuo4gc6K7dPtNLoo",
  "key21": "5m9b7zYBMC1WBF7EQtn7mgvFAoy2wDqSnMZuXu3ZXSx5oNxM9DW5s44cwMAvqefdQHNkz8hBkVCeP7tjj8tPqGNy",
  "key22": "3cGgXz5U2mK86mhWAb9u1kX3rCVavpowHh1Lj14y943KGqVgVFSq1nKt5K1VU7WdhofTBbJfPfY7kvJua2sUtWSX",
  "key23": "2Fz79qht1wkcEoDrDkCEvcSdomrTkiW6joQLe496U3VAcYPGo19BNHxfaV27pudHBoibtssxNbxrdr5iZxjVu1jD",
  "key24": "32hfQNgh3eNNiNVVXtcsSnLGh2Q2e97KAJPejBS7JN1z2yefeyLah5NpWfK4Wpq8K6Kp8u1DFofEGu5RikCT9m3P",
  "key25": "BjgbbYggs3YnJjkkoKR4mczKG6UPM6AGeDVZPXVz7BfCcsv2K8pdWXsQKwT6KbBFrKgid21Xeo271nVdmiW6qng",
  "key26": "2gyXzkDg7SWtaSsxgAKiRWfuXi9wPycEP5fQJ52F4Fg4LRNU5Hzi4HzaHW8nVYQvzdSVuaGw31cXsgyYvbWXKKLN",
  "key27": "WyaoBQRX138YKZsvahA3ZtxbmxS6hc1QUE4HZpjRrqGDxT3tV7FV39iD4p4pUo9bGauCh1ECWWFkv5QFGPaPNAW",
  "key28": "38D1PrgCGNYnxsSgYVLpVfjQ1WXD9cQXEUpRor1ALT4gqm21CQdwWou7gphUbst7ifKFcX78taxojsd8DfEnpo5J",
  "key29": "412hR2Ptw2wANgDAss9Uoqnbiv6X38xLqoTjvHSs8ftpoTVXQEdx1sCwnevCtzAFwV5SCT5urQncScf77rFuSuQj",
  "key30": "4kGXs3MaXYZ8EtesnvAybjTcxzf8b3op2G4FtkbyKrySv6aNguQpDrJ91jau1RKSQyd9aLbadDdssmW9nRcoCwiW",
  "key31": "5bCbKRs1vsJU3fyKsc2i4qzx7KXoEJJNwpFTqz49nqMtCL6fpG2EHz14U1rZBWpS7Kdc4KWnfpZvzhjVVBebiCqK",
  "key32": "4UHkghN32AW1q4kDUCXrTg4UW8hphT9L2ZCBLW6iiXu2c7rVZCQDgYdAKQTm4HueytXemLdWnBrmPNQYqrwE5FnV",
  "key33": "UZkFSmtHhtHvdAUkKeeoSMLiKuaa21yCyU5oa7xtMA7QYU6mUtrri7HeiiJgVo4HLB8Aya5XSPMps378xnfKncp",
  "key34": "5J4bwFfw95fDsQcDey8DpUssMKfKYC1846PZyjYv71x7dpMAHfxi5CkouXk9i7PS5bKdtEVPnopz5CngYt3Abv5L",
  "key35": "2u7LePUKCXvMzVSEhkVibPHNYoTe7QVAqTAf26QBjq2jm88MY9U4J6PUSWaPnJS8bRwdnnhf18v2jxUYMGqSxceJ",
  "key36": "3RYGJDZEyMGUsA52ma6JJNdLAsdhmzN3FApPj4YcoLrmAicgew1txMUA2zdsWEeZM7qKEMySG51r2GB3zXoLqcNS",
  "key37": "YRiCEQBAKLwYEPkZsinHRPTGQ9fUYfKqCXhVCMpFKytBjTWjGfWcgEjnXrAxiASR7pnnHCZGnvAykdERhinGxex",
  "key38": "5xcHRVL4TwjxqrSj9WE8DrLH1qkxyRBin12WoQe1i32mrP4Nc3r6w1auuyrc46Z4yZFdwvck68gtzf81dEgni6pd",
  "key39": "2BPxUFYfKAFgYE1TzFhYvPeJZuDsDMQUGUUFkQSoVk59kVs5mp7iBttAAi23XXdvoi9N1CJbw3xZasBQEEik65Ah",
  "key40": "343daxxCRmFS3EBbbCbAxPzDuvZinbRDEGZ7S4MBH54eFLszHgPDwhZzzfmwUw1jhYXsHJRJtrSQw6uGh75wHRe5",
  "key41": "4bzmKtWXKnZ6G79Km9tUWW1d8LR5nXQteUFZG83jYuYjifuRR6gpKwps6GTZMtPiNNCQDMWuYCdHKA4rcRsNYm9B"
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
