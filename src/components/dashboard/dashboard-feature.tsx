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
    "4ZU8ni2GkfBN3rYTCxeNmdYF5MUttZRWZyM1eYiknaqpKQF3Ho4YXZCRp7DUdf19hWofV7gNMYAAbMFaxNWfa676"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o2yRKHhrZNaKt9ShnqTmfF4Z3Pu981on8tRmpSU5HKz3MBrYS3R7nD3j2fauGaGRmtp29AuuAoVgHTngJEXhbRu",
  "key1": "5q5XPFioazcKBXx58UgTVSoYJYBVn23UVyNLgoPMsCVS8yAEz3VaSEce6maCXj2FVAqXL3dGAXu3RPDkXXHcWG3J",
  "key2": "63ud6PxE1Cc1RTqEWzLv5JGSbtCwHMjfuNqWNc8nkoGdZMRJ1Laj4MSaAR9eMD2rTT8wgbZAc7tabxjGfByzvriD",
  "key3": "5iCcp2MR7aHnF47KvMGFC4nqWp9afR7nk7dUAGz2zDS5d8sifP6Nfxko2uZH8cHWjd5w5pNVydU8PHCpzfwAQXSr",
  "key4": "HruDx4aKJBEBnvky9N3EmwEwGMySEqCwHgazFNKymd46qCPZ43NXsuphqm17gnC9W4nbCw17mwcQHoTmzeCcWzn",
  "key5": "3ZFj3BuCPYnsUmfeS5rdT6sTXQ3UucXbHXsmc4DgDnzSJcrJmGxhJnUuDSRoUqgU9GSi7UWbS3hJT9hBum19mgDa",
  "key6": "2QuQN874N3sUnzzQzWPbrGLxCTVrinxk16Bq5qNXc7GpnkhaMNY1zcfiaSDtx9UsYLRxMtFKfQWq8mH8xaaA6JsE",
  "key7": "zno7M3ZcxMRGLaQhf31jHqaYvc9LmEidbsmHCJvYm2a4XBBDUafsWyuJVDDnqMLr2djvN37Gv8B1nGPcQQcwADh",
  "key8": "4N5pZy6YpwrHSx3Qh4GoMeiT5tutm5KAQ5n3AGFrT6bPJ78RdZDyJnRTc3SBG6LLWBSKBtyRXJDRzdZps7BqPr1L",
  "key9": "5uaGjF5bPgtwFoZ7AAZ4kvU6G3u2Sib3zhoJMw37Bbijb5EbS8ey6i42qZbeDawsfzrGnuMrXsquB2wmzftpE8Da",
  "key10": "4z6pRD5aQZtuZ779TnGGYGM3XL9uzN19P9xzfm4EurWJPfRHnAEWES84XerA1XdqEnbRxJKQ8Uzm3NEFjKwMZGeR",
  "key11": "4icpqnreAnWqWoU2ngj6dAMqt6zarE2vZHYV7L99CDtLFDRaDHWQJea4pCti1H9szRKksnvAZUGzHfHtxKyu3dr3",
  "key12": "5wEfc8JyWJuBPYesTDWfecDmWceLSRXvatrrWgVoUBUkAweCCXq1gh3EANSsYxZoiBPVQNDAcuwFdiasQ7aoW4Aw",
  "key13": "v1JLTHBuDAQ3my9mnAxSd8cT6DfK2xDBs9yAwBszkGAz6dSDZXJSBKX2eWip5j3HR8gwrNoWRUJR8ebsjjLo93r",
  "key14": "2VeJZ5uuDkRtZn4RrMfadbzfHpnZUE26DWdh4xqdf1SadFtmFJdZponJfCtWjPE2GUdPDXQhRZLGpMotq7KYfNVP",
  "key15": "3AWiz1efX6brYivVoDcRqGuLPebmFG82ueAXRmboDv7RrfekcHPuftrjimjTHwrH54puwqgpNZhCd5x6pCYyPisR",
  "key16": "4j7pbHr5YvPUwmEHEBphbTeKhNkVC5eQD641s7zYSTFnnrmPefem9xnUrNBhsBxiEqpXrpxcg6oNnjvDVN3rPCMy",
  "key17": "xHc56yTuEZseacLrLYqnfE6Xe1iXBqPdGiyZ1gY9B8zvvZrBwuMjwPDdbA4ftCzpJG15vuwSbo9fBzBAjwJV11N",
  "key18": "3BQhjbNP73a5yNHs1wkANAmHvwJN1rTabVBECkmQq8gcBSbwQDobZMXK7YR8rapmKyS6T9GYQ9nDNjCyBu8s6e9V",
  "key19": "22fQFN68NtgHFvVUFzG9dzNxDY1JWYPJZvG5yxH1uZTsc2bPkN4CZHNnXjaz6LqKk9RaictwoD4GaiXujrv8bQpx",
  "key20": "AsEwgYTiR1H7BBfQMG5NRw2uLM1YgfLA1dj8JX9BWmcGqHoYdxX2UKGquzBWxB15sDcz5o71Pd56xvN8nTaC9f6",
  "key21": "DhhXUoWjonGdYkdfda4hHLHiV9m9HqS6E8WyA2EAq61mFtFCbqGSvVTD7GnocB5GSH2RghmP1xqwCHi7Exo6Nmw",
  "key22": "31Cg6oVUrrcPtArwaNP1Zz3cyw8M8aAJM6F8mKyfDGv6tfsGdqLyTQe6tHGBiS4bjzwzkPjjjuhZTkY4N11iVQXP",
  "key23": "3qYRvSh2uZ9dZ28ngg7rCGABypdEWqTC7PucyVau3u1HWr7Ru26N2oc9dQAfxh1exQiEXQzmeC97vYUxwjBiRdjJ",
  "key24": "3mdCVThAf1tqzEKsUvANK3x33t35xh5qR7Hd2g5o6CU4YThkGKvR5veGzCMwF1xtMKaRpxGGBp4cfzchgoAc3fA6",
  "key25": "5CsydcLzmXNJrA3NCf3zb3iCRVdU71FdLCraUxkuFqbaL8fJxxDgrnx8DofVqnNDss4hxxuSw1GgKfFj9N4xTZN6",
  "key26": "3HBQcm5TQ89nLXubCbUCafZdyPWJTVwm6LgMAXivot4a3WjWphoXmcm3U6KApL4yLmb3DDQeUVsNFdCjVCZQx3SW",
  "key27": "2dmgJHHjzmGUskUVXVxgqpPo32k719gXiZFXjoFMURs9cPifzrMPdtoqtYh82Qrgz8wjao7NvJ5PGtfe2pPgTg9s",
  "key28": "Fw8WfhZ9aHDS929ohyoBq3491oaPW2S2znu2KNor9d4pHHFmPEVaE4NaZLBDLThMqHjtWu9eVt9pV2UjsSeCJPH",
  "key29": "4fMbaTerQAHoPkKqLqU3NW4aU36GjbPiuGqdzF32MbQ6CGDa2UF3czVDUCMbjL1ZfnjGXro9hAMnzXD5znGvGAN",
  "key30": "53BMZftL9LCexnMzFuNn8jG7n3noAAu97S4DrKc9Nu8ZtooUaB8Wj81Ky873oFv6s4VxZE5fKsM1Sxap7ZfoT1GP",
  "key31": "2PiXXVTc1iNS7cWaGRkhUtQHpPKzBtTUkaWiCNGWN5MFHqGSXNHXRKMdidw25TNXrCsmpNUP3cCgT9HNuBV37QD5",
  "key32": "4YkbUTQ1asMmSyn4PVVkHeiLq7WuswPHHTN2ytUZ1SjE3kqJaMv4CG138Si5ZVsKoBmAkHZz545z3SvKR6RtoCAL",
  "key33": "57jCAzdK4HbHNxhaTmHo5oWzZYbWFtrtJqy45NfCLgMxBBHfDchMCzTBNK655NnNhfdZs3zx2ygpcemLaHWVTW3v",
  "key34": "3iuWWGntvByad8V59oo4sxTsqyv3cxpEowyeGWsPrv53KuaVpRCMrorbQTiS9BdvkPwvPyrLHZzgRLF6CN9FHC17"
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
