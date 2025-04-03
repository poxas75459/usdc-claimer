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
    "4eVsn6fo2R93Wp6JNuhHau7x2Z5YZjhgxGmo5ZBA64hEbyiZ1DG67n1Ss3nMbX6NwY9B81eGXVJfYz8SsBAzyuEL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28A8TuM9UiQHRvtEfLn6jBhSYFGM4QEGL1otcHFNdAa99kcmEzuNxYPHXs9eaxeKT28DhmW7iLUBDt69wxw6qdx9",
  "key1": "54acwxhjz5N72CEzePtsPjx21CL1pR9KWhdJD5gYnr8XkXuPECS97kUtaJmgYe8DpdxLP57o5YVi4S3Z1k5fuNYC",
  "key2": "2KBuKYvQ86pRJ3wSH6yrV38XbuSBsCvEghscUXT3eJEpYna9EdBwBzDdaWTzawAkhp5zKsCn3XM4esCcz2sxHbho",
  "key3": "4tydqZdLYcXHvBVcWKbmuAy1xcEfeSKhkBSUF7bdEFpXyPQdEg57mhA4Ao3YGVPR5m71Epasoo9sqWBcbyLUDw8p",
  "key4": "Z33tCGr4nEAzKL7azTEUJsMQrnrH8oirhX7r9zMZYVeKN1C8N6okk3GZhMMvwFCxyVK87JnniaozWcFcvBrnoZV",
  "key5": "5t4xr6K4go9LCcSGi2ar5BGcNc9EuQ9AnqCKmfgX7RUFFeVE5Mj5zVgyJcBvnjnDLHHF26nc4sEsTeUGHhqS1a8u",
  "key6": "5W8VtKFWNLdwTPmTnSDdnpm5pT3EgksMpnuuULcLxQZDRm8bfdhY78sgkgK9G5pMmbQbmnZBa6Xd5YhGtCYnmmqi",
  "key7": "5CvATC12gqFwY5pojx7uvqNo6JYGJkt8YBWigJirEPnXcLUGkxa8apVxjRFCMSuzHdJp8bZp9S7qNDaEcQuqqUp9",
  "key8": "352CK6V9Cfy6yxbGw9sqiDSj5NyQAiNNo6ZYY2zuq9LPvr7ZEpDR6UM5CN24YwHWcqDgQV3Z44cVwhpiiMPgaM2K",
  "key9": "55ujZ8b6vuM9jzmvuZCsgMRCcAe1nAkaFPYWn2ucyABKfJPXMaZx3L3NajAPtWLc1E89ZJz54cexFPZTrM1w9WkY",
  "key10": "35oRFR2eUNEiPiuP2ixFpS4LneUxi5Xa2ptmNNKDesohh32QJXak5DFhe9hsFBE2BkqCqZRNZaWhz6HUnifvv4JE",
  "key11": "3ELdd6VsxgrhJ9zahRASrW7DMxwWMttAvo5LTBuVkAyCWQUEsNYqGfynxm5Dv4cmNTY3T13swPSmAWxXyywE1Bq6",
  "key12": "5jfdWhVvxDD3J7jtq95GaqDBDeWVaiUDRGJ3zwCtnHUVsBw3KHcxxykUHjYCmeC3QfPTyWpNvLhzBCjgwR9LAhKy",
  "key13": "5LHwhLV8kKrpzs3neszYTEVci4iJcaPRwVepGvcERjs4B1Zdum3SfketK6KKjYBEuajuV3HixFppU9CdvbdSggcu",
  "key14": "5xwmWwuqZgyQpMTyuXreogkhH1W1DKBfrBbjhAbPBPmMzRFEqK3d8wFRSc8AsY9EfxK6StZA3L44RqWqbwPKcbaj",
  "key15": "3CucT6cjWJu4f9qaV1kYZW3GX1JWVyaWzg9ghfxYGgXPmuVgeFXBZHMDUprWnToCVDgC62XSP7V2UkDZ47UnK594",
  "key16": "3SkrL5d6dShoA4d2iyymeV5Xi1nqDhmQhxnXEY7rhNYQYp24hgH6A1nFtMmTZEn6pyRsJmXaM5K3LHGypjwadzkj",
  "key17": "2ZsDPNU1uPdrbFLVd9B8LAH2ERGgHze8b1ZKeeNsnp7QvS2fNNzna8Su3TSbfHGiUknmGQ844Us9ikfavLKir1nu",
  "key18": "2rp5DXYFWVuWZf9tx8M8rGJH7mKdZGSVq8YpRXXYnXWJtVugyFWGUfzQotF6X9RjJi1Pr8q39owQMdcEbGMF3kLX",
  "key19": "4idcLqG1JEUyzabTj4NjAdEmbVodq2ZBTodGuGEjvaQWMdncWBpvKheScZJTgX8RihFJEX5is7UG4MU7Jm3E77BW",
  "key20": "5C7RKc9Eeyej7VtvPiXwcm5GVrwsRjfrJ2hpkAfHyWiadNML5uGz1VExQfhbX5uW51KGFrPtbSgAdwrRn7jZLT1w",
  "key21": "5J9tvWaMBn86zmZ5Gd1Qw1KLkKD875bw9qSMQHfD8B7K7tBL7TevibWSuLG1ewuuzTu4eV1nMnSCGe4mez1debS9",
  "key22": "2QN3M4ND4MECU54SHWfMEw271yqo2rrFc3PA3nHR2sb4sQDmbTQCDZhBBwSAoxitH2X6vqzC5sCGHFotTXo61aUt",
  "key23": "4ePE76eGdDg9xtTEaSWqHAkJbJ2QJQ2gK1AtkgW1aMbnfUdvfsfKQrBm6KSG27BMKx3bW71643itrWUQu6W98FhL",
  "key24": "27mVapnHTgnW2yKRM4KMBkFwdgSgSj3UNyEoAHJ1oa98xCytCsqZEjyB8PzaeW1oGFYFxwQ8EbeG7bSaNdrpEhRZ",
  "key25": "JeJbTZZWjnbdEAsNr6FGGAygWR2ftvit9CQfYpvZWAYQmhN3eYaw85Kt9AXs7qdCK3kPsdUJRJrciK1tec4DVGK",
  "key26": "3i5xP4bY4A7enLLHQ6Pa7mZXxnkyu5v79DMZ7PdEHBeeTjsVZyGDzhFHzZyktkr2Q9sMypapormaCg9SydQ9CPB2",
  "key27": "4YfW7byNM4ACSVftR67JgRAfWe1wWzxhCLWm7rc1MB1hD2xZUYyRPS3DdQ8W5ytS3yUciK7JXZyRjzoLW5vRTfQW",
  "key28": "4AB9qTPPtXwDLPX5AeXrdA3SmbbbqsEkBmRMC32tMYD4vm12YGP9nNA8Ba9N62bAHQYjm17La63fAghtR9mDqGpZ",
  "key29": "4mVsTseAVUjoPkB2ZmX34GFiiBeP3DzZzRPGKTJpxGp1bAcwHZPQCGf3R8vCZPUryfY8Sc14kGyKtfYNHnFnk5Sz",
  "key30": "4MuYG97Fxn2XGRTj7oBGQ4vVEKg89o3Y3AvyDqqmFMXyEGQRg76TypFvpogFZJcJpseawsXk6FpVgoiWTCZDJ5VB",
  "key31": "5puuGQGSPK7dWqAhdmLrhKRrCpoBt2LUochGD7iEgPJL1RU9nacd2rbc2CrZ8iA9qFpM6zbbVRG4bLQ5gp4o7Hco",
  "key32": "3nFQKUmVz8mubZEZomRQHh7GcvDL7HWgXDPbRe3uoeY7bf8iwcA1RU6iRWwtGrCkwDnCo6h9KMmhrUdBz6m5vRUw",
  "key33": "3xchMubD2FDVD4hemsr9Kn7xARkty685Vbw1ckAncHoVo1sCx83ba2xWwdxHAwaU4RBJCHrF9uQ7uFJgtof92QAF",
  "key34": "32LccgfcuqKgHaaijqxBypjzR63KyuJWFXgXVSphhmN87g1wpnPzQf4RNkPaaJkVx67T4GRF49moM7MbmP9m8ZGy",
  "key35": "2ra9U7ig6pStZ2rn8zd7F2dQkSBx3tV1SQrKyRuidGadwyJFtV5RuoXJ6QaMtt8uMLcjfgc7sCFXxc9wTVGwnqQC",
  "key36": "31vHxWp7aAHyL23RxFU8ujdsfvDg6VYaBC1uW9K65Js4Xo8sE554ivdpwSNcpvSkXMiH3g3n9DoAb5ojzsrHB7cn",
  "key37": "5C5sKzpox6uusstZHo1HEVm4nwnEVK9qB41tmf2WjTnCJynrFXVq45vMmgFY3vw1bpX6aVhDjRNmL8TwZmPLZrSU",
  "key38": "3eRc5rs63Kg1N1bngXC3vUy7rHB8DvfVEkP6Mrq4DXXeTKyFwCri5yxjRpTFi4mbE12erdxecD54s6Wk1ENaeWAK"
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
