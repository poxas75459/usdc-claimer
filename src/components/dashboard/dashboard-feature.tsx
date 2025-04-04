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
    "4eBNhnGVD5m7RNcreUcfcgSHBGUASyrkogPuXsivvUUjLKS57uGEyWA7kTYm4Jehs1yNVoP3bRTGryLcBFwVoMG6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bBTxQYczQ9HtvJRiYZ9fXefM2kB7d5adntPBZLJZwV3x41GrF8tk2NyRBK2E4JEP9HgimwGTb2sEnBVRR7QRPvD",
  "key1": "3vW7MwwsQUCcUX3dk2KLycij7xKp9zYpiNKRUQgJHa8HgRHeUz7pREBhawHjxiacVE2TFukZ2YSvrzLVW5go5HHo",
  "key2": "4a7i7pgnnfQZELhbojg1HBGFPUZw2vLHFVVK6pLWJmUhM4PS6DUAA2L8GnxvQQqWqbze5UM4pQnw3prdpUVeKoVe",
  "key3": "4nDnLK3c1mP6kGs4hoxFGZbAinsnL2KgRtr4t4Px53G4X7HRE37M4xMtHwdUfaA7kbyTwpk2a88p7MpmGG15AVtg",
  "key4": "26BJnFyTmAuM6jZBELYkskZr72UfnqLuUPZixfikGeqaqGMpoaRHr6tgxFnrkGz2aT96uZfPaiwsYK3g2LS3xsB9",
  "key5": "2TY4cAL3d5CxYyn8yjFA4i7F47coT8iA75MJpUZLrudVpM4bT9RwtRsGpnPYwyydMMFaY4NRG7DCBZ4zE347kt8L",
  "key6": "4TNnoH9BnCRE3FHMnWXsYRfWw5BZCNERgw5uFzbWTFacyvdMEkwPLhcRy75xZWTjTrYtBxQWwPDQf6xb8jyeWq98",
  "key7": "4hTTAcfom4hnaSkkNVLD3eT3zmzVjw3JKCErKaNEM9aftztBixMoPBocW4AeufyYPLF9EKAqvCfQaSkqaUgPE8BH",
  "key8": "3VvBoaP7StRoeGHZgoEn33rG7YrD7ny2rprR5vQ9UR4ma2EW1fP7PKPFfuwAPVafrAPZjiriasSWJey9ioCNxr5F",
  "key9": "q2Q2265fvgBDYgnGkuVnBSYymF8e9rr4Dd7hhpA4P42EGA2KaW2htF13HFWVA6DV8a8oEmSX39wavErHxo8YqHQ",
  "key10": "fPHgirAgLfLi9zv5o8ihLDdws7gVcpdGi82SJ8CPP71AtdNuCTUAdNUsJXR6oCLsDACKT1HhhQvY6TkhYCyYtTd",
  "key11": "32Gkkg4YkSPrgDwmth6H9j88diHUczavKTj1Qujc4CZchiZE63DYERNdqSPTNnR2oTygYS6vh4rNdTrjkuBQRJqv",
  "key12": "5EoXFzHvuJDBK8caSuX3KTH9ptvFKdRLeh8VcfqA9EZhCucXuVSHMwuzXav3H3LT233eRkg2qwtYprnCzBpEjFvH",
  "key13": "182AKeMKAzCo7yQzny9RG8Pyf9VRnQQxzZYJX94k45q5NyzyHC6XQekqq2cgUocTx9y71ToDdwQmLe9USmC6r6G",
  "key14": "4idFvkgSrGffNZUU5fEdJgDV6yqP9m7tjoQTmcFdgCfSUUuaLBoArasXp1kZjUPTorUtsrwbDudT47wMVJgbYG6q",
  "key15": "32EYiBNqQduccGCGzJcqk6jDbD5xgoG5Vjd5Nfe6fEx7GinQL4wjm4kadv8FxLEvbUkXy89rtij5vCbHwtBWcacw",
  "key16": "4e5mRRCeC27nY1jhhWiBZ4is2ofHeTZoka8FQ3LywWcW5gwmxU7wo3q8qjzvCsxbA9MxK1bDbQxFTHFJyWSPB9VD",
  "key17": "2h46UrFRLtnSs61c4M3gUT732HT9JrXW4vLyJz2TNYszoManP4KqkahyX7cetyThEWc1aM71YVSuqKqYadUh82XB",
  "key18": "62AdjJQatec3Q5pmu5BcNmx1npokVfttqYodgeWzSCUXCcquxNrTbz6ff4Nj6F9bcjxaaNiUeLGihJTuK4NH16n9",
  "key19": "5FT8aAaRiyAQPcjYw9PLZHTn9xPMPAs1gPzigGCQPi1B1EZRsUYoLiSgv5T6sA9991FisZY1wx4StN5paGJFdHst",
  "key20": "5EXyCFuFjq4CqqCjkN1LB2JBpH25XeZJ43JiwYiZpAUtNyZxRm2LjTva7oYkPNyGYFR8Fn8etyGvXLFB6EVoaXV5",
  "key21": "2KAvgRPBCmhx2aTVCBw3C7ALbxQpCcuGRcv9R4Y9jUQFJ9fNphHyoRjaEzDNvBkAG39ndsWozzEGH72qi9ze9eiM",
  "key22": "2TKsdg2uKMc8jED3H9HqqLgizp7wRpEvkUMWSed2zRAGBurFue6Wbvhf5sXDbEA6HggV7g93pLAUDVq6s2KQRM2K",
  "key23": "3Ntnxe2ZhLEgJ7Uv2EjVkgZmTzRTgJ5MTbdP8JvfDV3zN7JWHmUvRLXBzwLbYpEXhVsp4uHCd12E2FwqfCDveuPJ",
  "key24": "3tQwnXMN1z8XsbgcE2tKvNa6xnqnCPWmwQvk47MJ6aLrFKLa8HTRfkbQ5BaTqXD5XqGNypdRdigUDbNAyZXTVTaT",
  "key25": "63F56xHGt7kYL7zhDZ6XLejokFtDLtcofsTKEQ1xQEuNmix2VBTCXgBZv4KoaomEuEXLs7T1xtsMTJ1tqqhZLn3D",
  "key26": "4hUCbfoBJ5qcu1S45wEnhQAQMWagdqoaoR8nbDucDVZxoncmb1JyxfRVmrT8HYnG8iP33xhHXST8kt3Ac1stz5jN",
  "key27": "5jpV4E6P9p8wgcm8mfZutzMkrS72bcJQ7ztiNq8fKwijdzKxT92F18aVdyxvL4GrnYjU6ZgMCjJ6gMSbApSNDXc7",
  "key28": "3k9zwUBzmrtB7hLSTm8WRuJYabGUt3EJLsJ2H4zHn35nrspNEqcFSWRas4yf8kBQLHcNHYDr5SY675rcnEe16NaX",
  "key29": "ax7V4ZW8qNgNPpCpDPHE7M51Z8fE8VK2STz2xPgBscwzCD6KtCeMkuap2FzZi4F1QokYX3GbRRaJrQebVGWZYxb",
  "key30": "3GV7HYCT8JX5kKi3ZMdp4koRPpDeNYBMtsexNx5kpPP5JdJgYntzWLygW5QL74qySn6XA1MrTSXvAUud9hqNG2xe",
  "key31": "3DW94qMvy656nNJSQotEyjixLMgNmkoq37h4ZRLbQAjWz1rExUFZgXwUBsep9Nk4jLbnYyvr7QPg7HuuhGENmo9P",
  "key32": "5QPvb3Yz4w5gaL6KFSrMVzLdsYb6SdDfWN5393iuH5UTmDMYB1AVVqgwQ9Evrr1d75ydEQcNUSgiPCrTVYfzmq9S"
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
