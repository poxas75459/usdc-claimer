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
    "3hkBC48WNDkz1yQbk3MWEfmgW4yvBqCQ6c66Acetrjp4qHbskzyJRndVxoYyCx4MDonpCmVQgb5dPhpPpHaegrHR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25oPbNjatrHsMnBnx43y63dU5yhvPzBZvGmRcEkTsmysNMPSAKEV4PQqkpqXXWXzAUkPTE2C8xdXAaNmXy48E2Cr",
  "key1": "62k61guFmXnFVrNqfW4NKt2ye7VFWJgy6G2xdJATpQUnajf8Tdpt8s2YxFZCK6nSvTLRkUFxPcGgnUAxVHKUitsc",
  "key2": "34k47QQv323GDisT3YKQW89v9eMRxMy4CaXWLdW299ug1ab1zVcEm6osgzr4AHGfJzCZyFT4g3tPKLrzV9ooAKnz",
  "key3": "4MLF83dkNHVwhdkUiVLNXFUQY7Uqh36r65pP3fdmRZ31xha9a5okAARyty4qvU3DAajSKGXxCeJD7YVbp4RrT6sF",
  "key4": "65RHdg7hPtfiyDegDpMVpLqer1cF55D7kLd5v83KGnWDf6epGCpumH1ZJvzaxdw2PyMqKKvG39HT8DHEMWaKNeBP",
  "key5": "5MQh5v9fMNKViP3E2UHfEgYhNgkYCmy1hbUe1iLmSdSgjeTYKu8PLtPH7DshsGe3oMifJ9Zgy1AfTxoZiDwwd7wA",
  "key6": "3dwYWytCMYGJ2YzzswvitmfW6kdPg7BFaZqSDA2HeFTizAK2ruv33Jx84WKmr7M21rZh9LexmHD9S9JD8YTgoJ6Z",
  "key7": "4nHWp8xtqhVpqiksEwfM1UikWdhdE1dHTRDL3XcvcxjK5V98vZfyNnapfKnzC8VfNtBTuMcNkm3Q56G3FPwkubz4",
  "key8": "2MQC1SeJsEPR5edepUR7MuFUr8KAFtQVEcVnUCbnxKTHNbqBcnURc2DsYTvfer4JrVXptqhruzrGGWrdjK1JNHAx",
  "key9": "neAbMTr1w5ws6YtisL5shC4p2peiS5eEcGMsCHm1GZEc8M9VLw8K9R5HxEDVDKQ8SKAwupJdfYesU9VUTnUHadV",
  "key10": "4EJ7yY9iFeNtMktGdcJDd316CbKfpANKmnB4cZn8WwMqEyg8UsT6a7GSZiA6z3ySxFB9PMeHyajDyrqjvojWE7n8",
  "key11": "2H9A1HtQA5WUzYrurrpXiZ67vM7BvCLf9wdxHB8BPMLuAtcYT37pU6ARtCcb5FzPkQfWUvwCjufkxCNg8HTp54sZ",
  "key12": "4yBR9VktzTRXnMwFJxb7SrsQyvD4gEcG2bTGMCupGSanbhxkHj2W22eATrMhyMFux5qzvTnfRVPsi2FKpq7ExXdR",
  "key13": "4kwdZjQMrAWe5JDuoms6CorhgKsSK3QU4A37SFgfFoYzpy8vP6W8v1HEdbQYN7MYPYYpaamonZQ6FoGH8Kma5mxa",
  "key14": "4gEoc5AdfHXE8bzdrh3rdNiSesyPh7aTJYuEhAKd2BkiWfTUiaV4QjqrrD5MG69kduFHQM6qrxvvkgjXGmSm4RJm",
  "key15": "5yY2BbbPrJq96dpsTWXUHtjip7w3zdNZAGPDMwwZSanJur98A1xggjSya7fqXfGUDfaZCEBuGQkAiBfRUb1vSMEE",
  "key16": "443TBd8bG4jtoKHMn9AtWYjNP3jaaEmvyPCJ2h6eN8CqPrqqfsNHKyQEKeaHSLRNhpeYPD5DgQF3cdfoTNrF6vjB",
  "key17": "2RSVWJ6kyHDjeR3JdYo1k91s48JAmz1G5J2PK7bZD8cssJLpSGNiD9kQXkfZ7dberWJ4YiGT9ELMkr9KoG7jKJC1",
  "key18": "2L8WnLCBNm9Q8rpwcLks44SWohzun85QmLvx4ky6MNW7K4XM1VEL42seUuUFTpMpJEkCdrPEZfMXMsz9LggsY5B3",
  "key19": "4SjwTiN4EfSQztVK3Sg16UtYmbw4eUYMQ2KVeL6TomRrcykz7tSbdEXpAstccv9fE94eGCX8DsGTTRuiUkmvtMYq",
  "key20": "2r1ppBZy7VLVUryKWMQcQrjSDPdERddJvtNqjuL6V1ZJGzeB9oZpGB3ViWbn4iQd3XiigjuTYsbpNUJkwfBZyrC1",
  "key21": "STKA4EeyDgcUZAoQTLpvBvmWo1GZhjWk2Yn6ENojJFz73meoFdo4ubw7Z2Z18Qva3Gs2pS8qXvA5U6UXRPMbgtD",
  "key22": "3LXgd2K4MNtoxUaKGPyN2rzykbfR2pgd9nBfwp5bAecVKJJtpAQTPUrmBKGNkNtd41xXVJEbQW9vxb5bPPgncFHr",
  "key23": "4afS5uik8VmAXUFGbWb6Zi8dS6qNk9evZDgthTM1k6fJLPkKm7FhdyhYUdHgLTcRoNcp3VuiHn8gEht2g1yjmHRc",
  "key24": "2SzFpYK3TBXTyGzPJqympPXqTFdKMBZZ3iQ7uTsrcy4M5kKUMKmXTKAndvKQiVEopbwNGr9ATmW8mC69ru16p1Zn",
  "key25": "58krT1iKR3QA1z7G2Abh2eVEc72nc3hd74u9xHihM89ctjnENLR69qZjbLCweoQVcXSjT8rfx1wGSZo6RQFf1ZNy",
  "key26": "5ZiosYaJhzANocKC7WhUVKvesUimqxnbf1sZNb1iVttmxVL3UHkAt5GfpqLvxWwbBoGhFXpTN3wu63pJMwVAaFov",
  "key27": "gSq3CKHNagmhPDA5sHGfbrj9KYm58MTMRhkZ8xCjdAffyP5uaSyjdtwGmsYtJeh5nmK7BnzK6vVMAmQKJP4dqXR",
  "key28": "62YjeuFseVQECbYRftor46vAyxm7GFGffn5sUoZHMNERTXtYuuAkdHehcuBofGPukhaWi2BCoXBW7Lpo8pUHvm8q",
  "key29": "5PnqrkjsQQmQToRcL5G9qfY3ojgswGbcKiEPLVRVj6HHtSZ2T4v8GZKhVQrZHTmJ3AUZLSJvtokEiaSNSS7gPjpg",
  "key30": "5sha7KmzE9EVG1hxFUdEBHYrex2kgbknZmNyRVQCMgkZHCuPxf1Gk8X1RRpPnSwFHEkhEgAm74wxCioFMb9rVJ8B",
  "key31": "5tBu8qGo8E9eg6jDpY7x1WBjdehoLpiyjH9U47uSKZmgtUkz1RTYRySvKv5uD7WVcUwjb328K7ocJ16fVPBms3gb",
  "key32": "27BhzwtB96sZU7HLtpKwikrawBon2W6WvR3jVtGJYGc85w2amTeBWHM1wpJhspjS8WQ9za2ktqTxSzsJwHjEEkbg",
  "key33": "4kD5hp2khvap9HiPLEv3kiJicB92sCMijTM6AQk8Edic8V5BRyG6BGfAd9uHUygJ8FKJhZtDdhsMeWDm6Wo2v6tt",
  "key34": "3nchE8fcHQmPoiVKCxWbNcVFT5vdQAb2EwR3yUr7Ysiw1EHPA57xVFo7F6KmwJRBA2zc3i5KCm7Fx86MPUmMkJWi",
  "key35": "64Ys7yVW9smxCzC8veW4kqdQ51Sbymyo48iYmsdavp8Ua5SHGMGAv3igJe9BdRU1NUTQwXy5TrHZpecxNK2sU6gZ",
  "key36": "4LBTj24jrqHeWhcj7b7hVBNC6DGiH4So8q2RLyFMJKrabVhnUghTudoPzhV54QX5j49pnoQnwKoRC4386cLpyoqL",
  "key37": "2mQHYNTvtcFgSX4UmVHLpMZaVL2D87iPB7Tt3t73zGqf3Nebqfer8riX7UVGhzn3G7T6YfL3S7TzwWLGLMobXstE",
  "key38": "4Rhwvr13EUe3RUjNaeTrjZN4G9va53czULYddoiAoh6qdia1qdvwYH1kEUpuLcmQ9FYikfZ3Th4gvDFHba8eornr",
  "key39": "3QoTgLX4r1k5MtPihRbmfDcGNkAxkpECjKJb7yTqJ4ciH9rhsjZ9gQ8H9h7UzyT7iWFZ2kzMz6gCuUbB4iv26aYA",
  "key40": "2PKc3MNRVwwojw9npJnq1tNfBqrqvqB6YiBNAce7L7YaM286bcG7Tv6jt7CfWY2StVTd7hFd9zr35eC51ugmg4Q2",
  "key41": "hUoS72kafJ7vKN2HGbiu1kUpUtsJUWW4b3LRVvFXphftqUCoETVmAA9YxGiYiHneMPP8pPETvZ14dHMr9Tfz3gf",
  "key42": "3tF7EgCoUxX9p7xbie3ShD1qLw4k12eFtkZvPjoiq1Hykp2XA6xKRc4bvz5HzB3xqLBZV63CS17sCyJ2hsr43mRg"
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
