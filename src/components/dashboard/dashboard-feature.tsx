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
    "5D95pYrkSikNJsNptZXF8m7LG6eFVEdTa7W9M9BReeTkW2w3RAh6BoftyRb2EVML8M6R4CNWnfn1yPBVwvxkkbx2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WN6mqyayUHbu3kj5codBRHwtqbZ2xZEcHS3QgeQ8SageEqoJz3E3qvDCu5PepnvoPpLtqNmWm8zvHkhJwPnoeqz",
  "key1": "3SPcqjuZvwj4Gc58Cz1NM7grS59tLAVJQD7DA4x3LVJGnnd2CdFMzTZWrhayucnHgLMPBwvWEobd5BDuPHqjcYFV",
  "key2": "62bYk6KWcJfvab82BAZ82kRy5LwHTLqAL4777vcTQmESHqnwiRMhJ6xLxcxTvcagaFrDDMPuRKrTmTrp7Yv2xA47",
  "key3": "54CMP5kJ5aCspCrf876aAc42DyS3mZA6HqexnZdc2PNbkFY1RgyyhVh7roZM8Vi95ncBj4MY9jM2Ycg1W6zo5XRh",
  "key4": "6zknLeCxU72KQvFYqNByZfdGWdAAYU2YVHJfwisvbvYebKMfLUMaw6Yud97JojP3L5rkRiRnBiLoSTXeZ1PXBqc",
  "key5": "2vU5amnhSw29vxrAXvt3U6Kkrz1gTJJkUbUqug9rJsBcFkJ5zheybgHyuDKkiCfioPqQh4G4f3uDRg7G67aJGYnm",
  "key6": "38nRcwzEnxeYMMGiprW15mt8XBtBE2iVatcZKdotPARcwBWMncDdqaHfgJQ1NiZft39WcDYajbAW33reV3NJwNai",
  "key7": "29318jgvBHqyC39BA2qpMSHgiwpWze7mwb7ab6nrt3D9KZaBj7qW55uKy55GT3qhdS1x4hxGwRkuKkXwaahCarZ8",
  "key8": "HWjtBEkXpFoV5Ete6gJjmvamedjTZnrqT5spgMgBKLYy1xXDpEdkz6i9fQRjLsbvbubVmJFyYpScodwEmUSPTbJ",
  "key9": "aVTz5cJyLw3GXGN9WrNuC8b96mQHBemDf9Y38U7iKsULDBRD1GPpFBG3aLc23pFp5o4KB4jEbXhAsXBLYNF3kXh",
  "key10": "4v18Vjd4wYQErgbunSFBJdHSxCyPdhNnsJopDJ3yrnoVwMtMWbhJzDWQVJPL9YPM1LY5yTDHhkNmab8C8CfAnfDz",
  "key11": "5mthSxRH3qQeg4xjSAdPE9YHrm6YSyioXjz4uvwRhAFWnVgw7YN4rmq6xKgwXb63RUzeEQhGMAu6E6vk9US28Vfc",
  "key12": "9cGjCm3EhX1vUUBiYuf3KioFTBS1NB6KHL5zM8FuQjGWfwd7sXGkDvZknYhGUiCvhyjvQ7hE2z3veXAhEXsYNUC",
  "key13": "4XeYNquojd5J8Co6PM6pfMRY8q8E9bpwSzdLQ6vYyFeqcLrLxLNvvEKNDwQxsEyZWxx25CeYWLigzXhpVsNfv576",
  "key14": "3QDra3aJEQgXHLT4fDLFfpaVMB2p54QbKJQbibf2EGxccewPuBMmUoUETX8G4dCwQRomRp7K4KASGQJyBLRttvbh",
  "key15": "5Dd3Lcbc8QSTpPkj1p3Gqa8zndNmXEmAU31ns1pdAJ6VgdqEiBFHUEngRSKU2ggNm2QPJp49H6E5a4t29cnijrbM",
  "key16": "4wi9CwAq3PzVfxZ7mYefKC1DnmHwdhdbUCCeY6ppAdDSJFvpRpmKZenC6inehh8UvZzf19ZGWjzwrHXmMBmwcQz8",
  "key17": "fAfqqdPeLmE7P4Zc52jYzBJv9xF6G7P4jrAoZh3Z7gqKtb8bzEWK2jD4CRZ3E5rSGF99c6TPqz9Lf3PvKVSAxv7",
  "key18": "5SiyhBzcKByKQfm4qnoA8mhMPZFnnp7LFmzeNwcq6hfdyxGYvDdKQxTBCA9XzEHbif2JpfQK6FhHR5JiB8TycNfQ",
  "key19": "3B1yo7kRV7K7voTkFgF1MMGnh7KDK5pykxfPVuVX5i9nAyfjARLnFD74rB5jySLxeidXRJ7txCeyHhCP2Wa1dsaQ",
  "key20": "972dwYQi5h54eCfVoWCXpTJB7TM3APm8ca86yFKE2RyAJWcra9QGWcfTLiv4P6YaAbpc5fSBRRcNSdJskgtg6Fk",
  "key21": "21P5mA5xsyi3XqtxbDUudsuZozgZV1pMmYobT55roKkdqnVX7Hh3Nv6LwWhrXpgtt5N37hf11NxeyUWnxJc3cpzH",
  "key22": "2CX6tRBkRK2tq5ta2J7kUTGzaHbxcQufybtGWZ3ECpj73LEyYpbbdah3vbE3y8rZJNUuAyGMK3vaQYotHUusucim",
  "key23": "665ppE2vrAZGBnG5K9mELMb1jZmYQAKGpokkQhDQwrjWVbDEnBugyNHJ8ovNUJskHUZ6VnaQMcYb3o23anj3THMb",
  "key24": "o4XD8RGGQJv8y29B66HpMxSNANSb4ktZ4ztT8RXS9AChGE1kwoE3EbGMTonvYEx6ztmdAeBGHTpev54Smf3Xy1z",
  "key25": "oVK8V1J6bvB3mYr17rp2QPx4gi3i8psHRkQcLuyAjHQwWzHUD7JCoxmkfMtYWXMaRWKctj9CQZDTna5k6K94Qcg",
  "key26": "gu5HQMG2E84SBoCeaG7ytpAAZRaEqVNEHyYNdQwWRWZjrQmFy4qaiLygny4MxTF2ov4y9nmLmY9Usu8v6F1wQ7x",
  "key27": "2AvEPmHct3fsdka9f4iFiXpEZhEcwWKW3oDs893g6m6wUjzgZ42429SFz4sZSrzDrXhsEm6aRenaYyB18M1Ev4U1",
  "key28": "3Ew9CTmEUe1LHwLpQ1XJTQ26xVDDaLEurzWFsaWfxM3GHHPdfvFANgCRoyFjzCn8JvJEfFMcBxFFSP1dK9YmchA7",
  "key29": "41hLXeLPg6Y5ZaupYB4VWrKJ5uSFJmDnLvhX6H5qq4GVs7jbcua4NnzJ1TdJWvtcdBeCVzeHQDARa77hpP5ZX1Ee",
  "key30": "t3CQE1eRo6oDtqHmerH3vKSeuu1cKcMoaeh6fMurSh1ZMJ87LqAd18HRD59UfT9oZk6E3ixdKT8nVZUNL4h9raN",
  "key31": "4i2K3Yte67HvFATqR293ANwvPE7c1vrsCRWwdUmwVSTwYozCU7yCSEJZsuieEHzboxcw1mDECQCvp44uoaktPgAa",
  "key32": "2ZXQPGTcMmLfUgpU1cN9ozHWGwPW476YYLgN2zLJNduvUsLW7j9C67kHHQEsPnN9ofKj5nfSsJuos9TMW4zPJzFX",
  "key33": "2G1p5iecxo1r8gZe5raAubsnm4E4jTxgHhZQBfxYiRwTEoGKZwJ28T5CjHbZsvp9R3Jh2752EdoKESBwYgM85Y3j",
  "key34": "2amytqwYtqwakNvABiJg65YS9TsejdCKNJA8sRsb5r6hDN7MwTcKHZQrgfNpX5khNAKViCimiSXAMP1waoXv6wui",
  "key35": "5Cx7qH39R6kw2Yomeh2so4U5AauWrwmEb8Vov7ffNfsteF8QKSLoWqb3LnXfe8uCpgg5C691Y48BefYCzKkjWPbj",
  "key36": "4V65ESDAzGYYa1CvicwStGUa5Lmze74gzA7eBwfZC7exBKfjxSWQ9H5uKg2Jj7suGMaWySfZtYyKsxCgieaWJ4XF",
  "key37": "5Lav4sYXuBY3VStwfqWNx5Voi1cmHBoY7qKXTbSaKVqi8jAp7WCXtZWRdvRMAXADYk6EeMe9WMr6xc32zJJR5Qt6",
  "key38": "ePDBpxwqcxTHNZQTg1Bj8XnCg4GWUppJTma4XPxqEfj3WPDhdSNpWEi8ooauAgLT7zGmh2dUKS7VZC3W9KVpDji",
  "key39": "5FgjYkkAgRA1m7H33F9bTAvuqf2zDH4ArQne3LY6MxiPPq2q8eu1sWLa9TZ61aowDSMU9J6PpktNvtF74Fx2Xm3A",
  "key40": "uEDBygQ1GJAC3V4wRv1QTbJrU541GfXCmMXoanC1NdSWgSqR1wLbaYzqjp948GTavAw4bawVPpZ6TY4BXcfryf5",
  "key41": "5vCv3b5LYGDxWEJv2TNn7FuH2HqnjA9s4b1Fkxrimf83VDo8yDb4pg56dH9X1bzWRL2eS2btfv17vcCLNJrENBby",
  "key42": "4FjxogBco2XBuDydF6w2UXQKYjXxh7Qyx3DcS3hR2e6NAHcsbimDH9WT3VTx3xrNgEtQcvvfLfAketbwbk6FCAcm",
  "key43": "4YwXBgXaXQfmrVPwxpZAU5sswhyXGHntQccBY75QqefrM1wGR6eW65ebaRrs5r1wiuj9LTvy5Zj2qU3sGTRrVxH7",
  "key44": "5Ym4e5z3exaM34KJ7xPGTyVnLsU7kBxhm6vidLp3T2iamzWV6fcEfFKVk9S3oW5WgfsCxrLUjXAharZeZZjdRniU",
  "key45": "o8DqAoEmQMoCZ61rsAgLxpD8yfCua83XzJ4PS7tKT86RPFqC3oBm89NLSAWhByE3hi2v7wGNVHqynpHD5d3xtLk",
  "key46": "4DF92kwkGvoiavr412nrpUCJNW6aRk2yCGdXGmgxLooGYKDyW9PQy1KKbhGCK3p4P6puMBxZv5FRDoyvs9CQyzrH"
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
