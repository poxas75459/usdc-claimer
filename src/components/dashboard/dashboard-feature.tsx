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
    "qLjZa1zXxZvv17NCAq3qVpQovPgxMk4jDc2xzHrSaLmuX4ufmBo9Bgi8y6c1yzuQb39uznYAFwFPrT3LXfbvDjB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ArQFMpkBmE6kpGAB8U6iNPDB2jiqvNkkZaPMkFQzJtCwvxEJvMLBNCwEwxUXVrPM3yUn7RhuFX1GjhyM251ggiK",
  "key1": "3noNG9VT2yBc6UYwVNeo44rasEBDz7DnUiB1DABprbLhfsKGSwpdiJ1CzmaZQKgkNYJYF14VRYBYbKx1GKStNKS5",
  "key2": "4V7eyiyVvAqvUGuNwdBSmR32AvqKjE8JiC9gCymQ69h4FadF7AzRXFdHBpe8733him8HfpmXxxnMP4SYYND86fU5",
  "key3": "4mpNxCw3Lx4tFFsPYKgzx35gSYksedQAeVxMzpAF3wvoKwcp3Erb228WjrX8fLeajQ777pMWKBB9yHehFjtGNVt",
  "key4": "tmJCb2BYtt6Y5fzfSUs3cXZxx85U3JbGv4ZMitV8xrQdU3cAVUaBzHDocH5YxAGmgS8ubJiftDtuTsUn2g7hLLb",
  "key5": "erun3u1tR6M4uyPTZmmfkqWFjEVtnkea1DW6huAmvmPi2TvpcKp5L3UYSQGoRHxiVxpknDpr2vMXp1APkNjP4eG",
  "key6": "2mKcLnLr6XcKbKv9mRdY2qnFFbzr5NWC1viXW44pz16ntHRAiQZYQi2jYQXCx268wQuoCVijST18QcZc8CZW9B9H",
  "key7": "2oXo7bTi519kiidediE7NT4oAfmGpEEbBr6Jy3C1Ro8esppXJCFEoZLAS8RY1pwtp7GnrgrnWQqVCzJ5hDoGTtCW",
  "key8": "hbotp1VehyUt5gbBpedQx9NTpsmE6ZhdzBfYtU5U5xQBBpWa8prJAjq4hAczfaJ7VZskE6oKxSSM1kKXCPynnrr",
  "key9": "2QWP8Fj8r27fS3fcBdHb39cgxD9EVNf2XBudiCgVkWzHRT41W8dCL6y5tVNQgQr7yDMMvFWQec3UYzE5m9EVWUdy",
  "key10": "5NbhupQ275HZWgJTHfzDThxKKTJT7z75L11J8zXdN37wDSxmcnyPSTs6QAWVYEDrZM4FiwqVpB8YTnwmmMvHdCry",
  "key11": "5Rrx6CDgPCZAGcQxoM7cse6VJt5FoWtbAK9aMKvkZ8pnJKnw9z6aonSxVXKt3jbc2j43LPt9GgaTNdx6Y8VW8UkS",
  "key12": "2NYb5yqcMC39YMkSvaWWN1RwzPUrDLfohQHik5HDRGm1ArkLWPJtB9XPrGMEucyraSLguaHErH4wZr9k4weA8Pep",
  "key13": "LVp4uADqrhTSkopkmz8BwTuKyDddH1vBf4Jgzf51izgd4evpTz3GX3dzyrTKKHDNQbDtTmAfPWcCR2tiaxwrL9K",
  "key14": "52Z1erwFEiLH8puteP2zPu51beLv1bhvQ8ES5ga2eJ2UeRh5BVYT8k6L3TK84CGaRSNeVZ3p12HNXwRSBdGynQTU",
  "key15": "Zt9ZGhcHS4c1QZBsJeDJHwTro3wXCnuFNBidu223j8wFH8dcXTJAsipn3PZ1pNFMRBT7hZRSUNZZFVSqveV1sb3",
  "key16": "5izA9C8tRiJDNx2X5nS3QnPgyveCGYgmbz8isDW65grCaH7Ge9tzakkj39roKZww684Unhb9EEkDM6C3QchdAbgx",
  "key17": "2f54SSK7o94SVG6RUwE93hrP2oJMiN4ymNJFTyDSc6wcsydqEEh6Au8TEteZUGBAFhV9r36YvHpUhrkFzpvuGkAq",
  "key18": "3BA3xqF1NEoAQD7avE4cnzdH9SeuvZQ8Xuk9SxsXQV4gBjXrZwnhmGnSLCjHmWhf3KVTFpW4s9U7vxw535P4im1r",
  "key19": "2BAVwQVXHJ2H6rSvjG8N6g4VAZbajxSzqWB954PFLp6M597o9ZoAPngS1DPEVxEpvUrfQcL3cLRhyd2dm4VbiHzT",
  "key20": "musKEecKR5PBHdSgDxPxTtS5xbuFm6sEzGz4TAdwL8GxMNJE1XELuhzVsBX3EFQj3NKTJGEwbrHLD6ucfrQPqnd",
  "key21": "3PDsaWWbG3E43dphTuvqM6WavKBkPvrrQWip5t6S4DXN9kKnwcL4AkbE3WccAdR3a8MorgWqswiumpzG2YCWuaPV",
  "key22": "36BdUB8HsmAFnCKDaFefsQdMS1xcxyUTtJRrzEy9VbEwtG3dU72EcrcBrQReUcwnt54JwxPtr7WEAeD5SAM5cciG",
  "key23": "5ZWsFMFWZaMevH3P4rbnfEepjQPW1WmXeFcezUHmTwC2Cb2EbEzqAwUrPDeSkZAiEJAtz8Cijd5RgWuzpm7CYpyS",
  "key24": "2i6mH7heCKd4mWQNLPZXho52CVKwvrwFgpEZwA1hfBPGg2rJkAQQfbhVsGnkk7wdDoXgonZZQhytjgJNWokXF9po",
  "key25": "4XFwV2PYYyWe76NXLmBeL82NNvcUiDzqy5ZT6EpAinAsHGrJRFJUwN7ewyYsc3sQuGkajQdautRggAfpgw9oarNL",
  "key26": "5tUv9nNy9qurRyBe5aYm42pxYMEGP8z58WX3VvUkAuuhrpBXW7EKZ1RgfwkH176H6KZaa8sBmspLVrpUMkYQSzhZ",
  "key27": "NH9t1iXMPZi3iTezazdzXBC5WedR9dTgf8N1kvRpWzXX2sNWwTrXnH3MnmQRdSKyaT2NvQNyWJkRmagnZxDPQKX",
  "key28": "4PffPcpeqaMrw9U3SozwmokjAL1wJhSRg37QvaN2nYZuMGECknPhnE7pwgjiSKgzVDnErFP7gU3H65kkrJ1aoMP5",
  "key29": "2hnxLTwLSXmDdXULooQKu1wZ46z2HdrpXmaSVTXXhCcjR7KXch8pGiUTUyd1xj6waAT1ezenL6u7AEDB2gjtiVzS",
  "key30": "64EN1rx5RZSM7FwjbatkGWUHSrSnRtK72iLKebgJ7cVa4cjVquaMptwkky89zCzTRyjxEzV85ffc5PdfXzDcytbe",
  "key31": "3fU9XneTse6BTWaXzfPr1kYqaV8e2euoHShnLFdTS9Hr1UEjNDTsLgmyF7tF3VqbKuKH2UZqrgcWktUxZ7hQVQ6q",
  "key32": "5kmfM24FH3hNerHLLY9TETFSJcR8tz6TsrxfvvWNTiV2974Lx9sVGH5UbxNCCDQd8i1aGtVAVZ7bkWvZkeE5TQEQ",
  "key33": "sobRfz6PzgK1HjgfLPdDN4BEHd7eMfkeAKpPxzmQSPTFxXYcLBzGhfJHyxcxiFTUhdYEbjkuDZEAx11JPhwHjSC",
  "key34": "3bmNWsrcp5tn7EERkyyPkzVvrqBnPVqyY1u2hT7vdX3s5emSKrhyENsUevkEnqR4ZEni4yFig5qpTX9xaiPdsyEU",
  "key35": "4ozMNiLUp1FRHcATY6BKBeptJ3aGcFD7DRWXpDNj3Veh9wVwYzixMH6yzAybiEBncLNBXxtcju3NGrbJ7WWh7snL",
  "key36": "59fDnrDgW7F9MCjJpP61xgzpUvRevowLr4akyHjmjvQPs4epx8soChfMiBZazJpe8tzVNLeRZnCR2zM2ShFy3SZY",
  "key37": "2bxdiWsxSSAhaRT9MJU9W1Zms6Jm4iQUY22dxHSxRJcW2xZfjJWKcdKfjqZUFBpREWNggXem66Loex3ETtbTSpSL",
  "key38": "5K1ytVcwBDJnpZ4VawwueSKuEhGFohCrEwJNcuSHSrU6PgCZyZm8tafe82f7Uk7YUhZqptKYhAw75g5xYuBQypxD",
  "key39": "5MJ3CKUQJgdVf2LAmBKYh6jhVjvofLNfvn1zUqxZymzApa2v1SDer4jFAV8yQwN2VuxQ4cm6iLAAUpR3nhA2BpLQ",
  "key40": "5qPRbLFiDcb6rvsZ5dnrf1rbs5m8SsM38vxzfnzU1sUgvLghi4f6vkRVjRRC8PHQnFQqKcgSBSrVEJC3YwQBPifz"
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
