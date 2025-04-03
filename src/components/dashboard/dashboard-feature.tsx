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
    "3mctEYeievga3RJuLxWi865K8WG35UnM7kQjU3NbV3H4rEUzEwvkP62aXFFXkySTieiHwGSqRdB2vMLQ1os7fFEM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YL5KjZ5ofhVHw7EFFXFA2CCbP2DEsVuKni9iD4sPhWM5Kpa5VDMVy8VCtwjnHR5QfyNd9JpzwzstWb6q3dQRfJy",
  "key1": "hXQvYxtLp8pHKjhvJGBSBRtDm4cULdjex4tCACn4GfFN48go9iUt44JBMW7FNDgFj3F7tUDUG3LiJwh3vAiG78G",
  "key2": "3uqsxqAsa3utxHhskzNxb8juz4rYAn2Mi2182G45FV2wvVtTC25HmvyTMNk1eEHcuxSuvmiSmGV9mxqtzN6GwvcY",
  "key3": "3AcR7gW4biTG9GUHEvm6eQ3jkRMr5jUhHyv5fjVx5ndXZTRpQUE6yFmBTznGKpo8bpYwJkvv996gyPPWQ9io9MV9",
  "key4": "47nA8YWFENUATxphTZkgoXCyvWkp1aBReEj1Z78gUZ6t4Aj8Cw7XHsGhTW1d2dGpbZQYsx7sXMXkksZfCRwhQLt8",
  "key5": "45XVirgrbgvN3xX1C4xcTf1DLaWYvpUkcjbjSgZD1KFk2FqTnf3ECTHfdBU6bHGgMmhARxakHY5EfiNWVYMCJQUU",
  "key6": "2XfYJqMDvGZpCAaWN9s7PJagZXPdoH92aNpGwCHT1dCR5saiWiXjMxMpnrw9ikXC4AAMTDUpaMv8uFSZKK4f3nkD",
  "key7": "41Q6AT3ppn4dntfocrqbELgL5KNaSVcP9B46saG9JgS3Y2MQ1664CQf9nThTufikRthMRUUCT5ZGxXrvqYJPbUnt",
  "key8": "2A52zSiyCHSbBMfuRnqU6JfeGUWM6zH9N1zTKzEBEU6yvAvjjAZu2bg3euqs4MzuBvq6GT3bN5JBgQ3jUHTGHuZz",
  "key9": "4FC7g2P9t9FAPcxXuovajpSWZj65u5oeLoiCM8G197JU3cX8DY1dwM72XBCfWc5VoWnhcUhnnQtK9usHyA7YjTZh",
  "key10": "3hWzXoA76Yndq8pcCydFwNEgfz4LTLHseeRTMXdDtxyMfwAg2m1rJxeomjMxSQdVcE9fMcqReLmnm6gHjyz1STcc",
  "key11": "3tjZDEcnocvk6JFmDzrEVh4hYcCqCqh8iWKwNr3GEr3pL16Boyqfi4C6S7ft5BNm19Ldk8M8QuugjysxvmGztJe9",
  "key12": "4uMA5NpJC2RaNuDf7BrXzYpv5TiEqVfHtdzACc6xEHFUmwa4LhL26GQPGFGtpNuXt7GF9yTLvJr3XTbsvrbTRy4V",
  "key13": "37CESBzeWKDXh6cPxL8U6f48LjJ5Rf4GDvhDAN3CANMGwCiWCC8o6A8Dhq4sAYHAms3jtgmDTSGtbqyNfFczSWSZ",
  "key14": "Ydw2Qt2uXDb1z6gwbwn1tFrXqkxUhVFwv9op6gJuVp5JU7FdjZXF1KnDFsTzbQuLJt9Vt2M3HLmdpb4vgFDv6XX",
  "key15": "4Ty6G8BkN2nTPJXj7XsNq97PtmvtAcS5z4edE9YBJW9RctMTVEtucn7NtYKX4ycC7sP1ci8dutB2MibVcYe1xZvt",
  "key16": "21yvLDspesPgbDEXpUoKxc897BiUhWQTAgcvu6wED757P9FWzvqk1tZYzi1iPkwXQB1vjvm6qt1CVvNSnNHwuK6c",
  "key17": "5SMtxX2UWkWwmP4Y3eRV8P3uo9Q9otLcmKcEkpSzCJGKYUgrS6jCd5zYaPwUafPkfDVmc2iEbzK93itKjp6jik28",
  "key18": "5X174zWkTvhc8GqNofmeoux2h568RdxfkAKondrQQA43W4Ts3knCNKFudD5x3FaKUXuTCpCJvmdVrTPBg2K9cNrV",
  "key19": "3LRZdxw7xH7kWf1rsLkbe8iWKkNueFrC4XM6dFUitw5xBxASdQJMeCTTHTfko7gcGnSrmn1BjDkBRcZoFweHK8AT",
  "key20": "5wZMQVyFsnbS2aoQvvqKviyewcmWY8CpE5yqN3AsE2XFjZRFf3nUpCxzr6B9EvHtcmHJ4edfqNm9U6dqgBHUZp6H",
  "key21": "4PbsGunfr4Zs89kkcvWQ6B6k5rdAgXxBiq3cG7wCv5vwgXs2SBMv5G7APUewQ7A7PFLHZNXsWZSxrZJzVzx83PNB",
  "key22": "3thU6cyGc1dN1gbW2LWPAtHJXZqXGe7V9mvsS7eUaY9aTgNN4T7Cfp2ySA3fsANv7ua9eyhhML6uAajPhwMV6UBq",
  "key23": "5ZXkz4qqkeJrSukaXZQZcykQigq9u5wuEpdfXrHJazBm9ArHBsK1AmRsgwc2ZiMWqKkN747RUuqGBavuiJgfyr8B",
  "key24": "48ogGeK7WXcNwUp8xdBKPiqUBeHDeeapbyqFUkexJA1B7KahuBPmp4grEp77gieyTC7oFB6nuKVUFB58vAqRrStN",
  "key25": "3fedQRdeev9HkUogURUeP8a9vTYzW85EqLvrzrqoL3w96N1EZ213DSCv5L16fsi8WpeDanxCj76Vn9idpA9zFddd",
  "key26": "5DGuaJZC4bWHoGSFL9rW8jPecMwV5fe81BLWpiA1jCCsZ73hER2ThhUPpq1B2xiWuwaawr9XJqKqXgPGP56koiP4",
  "key27": "4ZvP6EuMCGV7y4tbEj6HkHE9KD5JB6xeSrRxssfYLL897SSr7bYwPvCaCbwFYAQoNKaRW7dkHfyLtnDAYhpDVZZm",
  "key28": "4Mxy6EwSAjPC9X8NStdsoBb4LCX2f7tWEwddzjnH4PUSLYBuzctB8rUtrorwNjTpkkAevDEW4k4Hh9dfoXLjhrfA",
  "key29": "4L7DVrGTktCGZYBJytFrBhEoCyMSY4B4RpZBBVoqR8MKs5AvxXyEuxFSTNpmiwKah3e69YKkcUbs1BstdPmEfCwX",
  "key30": "3LzCTzs37mpyeH9fyKesCfyw8EFxx4PQv4h4NkryDqEtiiTwAPqisPECE8UQp2E7mksLq6xnkLzkULybHhGMecLu",
  "key31": "3njeVHqjRSM5e2W8br9XsjZeQp5Niv1b56ZyAuPo2JBs2dLhGmpwGQg4xij7Wvg8QhFisFJwbfra4zfE5sMmyaqG",
  "key32": "5q3oQ93KixPzEXvUg2NVBgLqPr7nqmNUyWW6ZuhC6vCoXy1m3wihf7uTkQvLMDUTkaUHNLqE75omuYs8r8d2ZbdG",
  "key33": "5nA63MZAHU8f9xSy78DhnR5jTEGebYeHhbgdMRi7QUtYNfkwFt8KYWQvtx8S3jyCAJrXVXKd9z3WvYhAk4RBjxCT",
  "key34": "2Cw8f4zRLgLgWJWNAXm2cSGbooPtdEuRo9msH1nrdUhsnN1HpWtAYWzUPoaTdSfhAUJX3gsCbV4LGfq79pHRHZLD",
  "key35": "2oKuqVVzZw6CQ5yxUKWd2Vfh95TVJRe4CFun9TCtRMwwX6eBTeojop6as341fmDzhfaFzH46E2F1gu4kUeCWRDgc",
  "key36": "3H3MsFnG5VfFCj2M1dnt1WVkxXeLua3a2H1j2ishjBSMaTGkVetKV1wEQTZHpCqSX36qeGfxWZfN1tm3PCbLCvyx",
  "key37": "3tN6apSTfc3GSC8v3Ypm6Wrc54zdSy3ZLoWmgjo6ykAvRrBcszVYPro2f3HqkGhAnb511vP9kdy8dsGsmMs1ggkc",
  "key38": "3HocEk1PbkrNswFWUhad1FaoxgF2TwGWoQxDgbNoe7pjGnWcTQi9tWHbb1A2MNoTXtky95Y7pLFMvyfkdmX2AZHS",
  "key39": "37H9vvzkNxAfj88t6CXPtKoV6UYfUaZRhMR5EF8SnCSP3m9s856fhBsmspnqkKYiAU99WyEht17aeDgYRNQDfjw5",
  "key40": "2r2C3vfLcGD61AsJiSQGKTsbxw3cyhpg8Uwg4grxjnusQRRvkFiqyQDo9Nmrj7sCeEmLEFzMfsX4oboPbNBvmXNo",
  "key41": "4fSoe5FDnDAYMsYvSj2v2udDwWgspXn9nC7MFoH46pD2ixHqvdCmwDFusK5TQqiVajMfSBySRerZH5YUbhokNQvj",
  "key42": "5JEwZCvCijKjpwRPMmzmqHdBNp16Dd6WkNStkb72Zd4JCK9pSgwX9D51d8y61ofrsSY5jjbnySbXTcng7XoDKrR5"
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
