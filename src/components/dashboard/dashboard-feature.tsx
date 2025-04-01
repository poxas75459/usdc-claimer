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
    "5YvyuZV9E1iEE56cKyx1ATR7WgCgEsrTNcXv4VKUozXtuu7F7pwSP6QCF3WHtSbi5VbVdbVYvegaNEaiv81xrvn4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qqRY98FaBMLWZv2vnZAyWsinUXAoKsLZZpDo7rRhxS4WFhE7jHthfYR1avUR7vMkoFTQCiGLAH6odBsVxrHwMqD",
  "key1": "4gKreTEAsvXGe1Mb71fKrWfoAG5m6uNP2hPR3pLsqJyn69G2V3doesq9DwH8q8dif33tga8rCdKNiLFbJZT3HwdU",
  "key2": "5c7hfgx2CWkTErz3H3y7uwELsjGXfBoGastPXxxD1TQw7UnAfp2G7PZ3vCc4F4hCbnVAsrwdHykALQea7LQDPDtr",
  "key3": "2qoyiz1dzADwp8ovPznZ4Qo4m6zJyXSpkeidzZTwnxUvKoameYPSNzr8xwneMnhtvv234DwLUQtnRXSDH1FAvfNG",
  "key4": "Q3vFBPVjeh6P41aSaEDc8YPbCBhbVdZLSKXzuXjsVfsbmYCrnVt68MDRV5QLk2NL66KLXHuipBrR33rj9ETCReB",
  "key5": "YTFJNjPXsEAnoygZYw2nu3HsTZ7U5AjFWTc5EF3jueW9gxNw1tpeFqsEd1TF6dGDRy4CNXTTTBcG2Ny7y6yKHqA",
  "key6": "4ab5rBQe2LyC2wHX61koAwFRYxb9T3AexjsKQBPeMYvrfKcD2BMY6A4DzNYPNDerE7gqqpgJePpzHWtmRMeitu7e",
  "key7": "2kxSiUmaeb5wZSmV7SJrqGr137Ept27f7pfjSt7n9wLyLXHXHrHW5shcRHMe5jbApZ6aAjdXT7suPiQfnh7iixZC",
  "key8": "2YoAPYsErmuUcZUSCUBYVVy8xiygyMcj3rg6BaPc2ojS7T2TAFkfPcdYD3HbXwD3ji3fEHqPamEeaJM7E27i8M6T",
  "key9": "5ctJkxHTQqb2JXaT9VmnCJxAc5uRY6CFx5ACNx5AtxWLqU6r69ztS4qqtYUFQMH9NfPBqM4DXLiEesaYY8rd3Vf2",
  "key10": "2qikPXB65ufkC8VSWPsU8NFGSrPwVVbg6Th4nCq1j2DfLUAmyf2gTBX6G8D6KryZbCmz8ygqzk6UmoeHtqQX4C2t",
  "key11": "rVHBHjhHP4LgRXQozc9FS33vLhWv6ca9SUxA4KAdczfq7WKuphnGttQ5NRNdsxSdzhVQ26pnRAs7kQHEPeSaR2n",
  "key12": "5kBtavQ7wGtyypsopfGbut9Eb2SRXHcJaHxp7RngXxpnmb72wa1vNYZcC4a9hQutKstf8R8Rk8p7FkX6wVpEwMd8",
  "key13": "2Hcs9UskcW87H6FVYyLyPWc5Gg44R8yKZYcySN7hySdYXeBGuEv53CHicaxh4MiZYDyTEiWD4fujJq2LRpAzC5FP",
  "key14": "s3BWmxune3Gn2Ng7yDbmkHFHTQKCgeUW5vVz5EQmBN35e5CZcGPVBd2pbmqBswt18F7jJDky7EMEDyRdZecUScY",
  "key15": "673KaB2hXDcm3NqspTaHDYSZVy5dK66DwYEXwkig4dLPUEnxTajSpFLcjtS6N8r19j3BwsQmMSaubjVg2cJdZd4x",
  "key16": "5DKK82KbvofhUzAPJ7JgjtLKkwMf93Xq7PzScui8oV1mpaKARDp3JRNhLsYkqeTZqgn2YnwrMCZMkE645UAawgsm",
  "key17": "58aMkM8PPH2wrvxCFrw2foQu7GThDkuyiMHS5fJxYVL19Nja6XKkXu9csuNCaULssfcaUWzq6gyRugEAbHrdQHvH",
  "key18": "dL1tdvSsemtRTzFZT2hgQPUFy8pgFtNdVbczm9Q3NJLtfZPhczmrntwiBtJEZF6KwUgJ7sdfnRunxCCLD5fBDca",
  "key19": "2UPagpA2LFFp5PN26dTCT3a9Ad2kDRGTKjaFuhRhnAKExXCmgQRw818jSdRb2ugUYS2H1ank8627mjTTbsHLzw2F",
  "key20": "2jyuG4KsYrSF3NtgTDZLb5uVk2NdojKGTyavzKZK2pa7BLgt7X6D5mRTNPKRLfRcxPNTyAvpbdKqZNpRk3xfSmA8",
  "key21": "3gDRkKxrYAxYjGdSGGet9p136fgrdaF6jNMrUnpL21ESUiJcq3o4AuGDjj3q9Y7zEJU8YWJsE3ZX2cMdztbPGeab",
  "key22": "3kQnQiFHC2yHDTDTpJMpKzeakPusKpRnqQt8inWMUANrcwUspTJLnGtTVsPoyJ2x2d2aKbiA2ZeeFG836EdQCGSN",
  "key23": "29U8RrgjDQHGVq6PcYErm2E82A8pEuKpCD1ZKK6YxiLGR7ih69Ab6pfEMG9xEBn2Fnm64ZogUSgSWWCuxj7ZsS2G",
  "key24": "4Ksnf1UjHpAeongELJtB8yVAxenoubRUwhEVAnNt8HfS3PZmonh9JLa1LeCdaGsfM36HPNVm4mQ1rrrSCRj3466t",
  "key25": "3jaNsSFLxHgNFsTX8wxHDHPP9RUFbQhn8CxGmr65JDCRurPneExvXmFyucmsuu5QZt2ThNN7bCpSPEdWx8V7yfeF",
  "key26": "3VH4KratT1KcnifQGP5XfJCWVashdu7CsETPrrNcLBHuFQqv1XDdcCa7cKkdjn8LasBxzMNaJPdM4xaxQf4kJP3e",
  "key27": "3bopYjgc1thgFRERiJbfKXBEomURc7CeSWQDoJfKyGVD9s6H9oJwX3Q7jraLjGb8BG7xfyc1coKq3EFrHM5cTgRB",
  "key28": "3H6Dn6wkfBgfp1DWSNg1JWRjSW1sqxe1aSkn3MDQyJyf5P9aq6UemDZNZuMFqqCAiUmugLwWXKNsPfJfWQk9mguy",
  "key29": "3Qdmixp1QC4MjEw2fQwFBDUSH54ZaywRSwfJ6GVk56NaM3nZuFHMXoVeq63wkbg1mDdmqP3fGE7WGb9PpUdiVsf6",
  "key30": "cSuMyPfMs7gWRnHJZbyfRMKPhvJgG87WFsSmZWwbS8KffoYN3LP9UdMSpxvekis9EEsKCWvLVMkAUjYXZxjsf9P",
  "key31": "3nN1F5tqN7optAmjLbe2KwxVSxmEgDEX769XkMk4AgBEULJx6d9Z8ERyRFyBH15FpWPKj6nACmTTvYcmFK8vuCZK",
  "key32": "3cbZ4M85zqUuypYe9tY4jibkFxJJ6g5SsWgAsi2b9HUv773HkuMngibHobzTwxQQA6suUaMk2JH4CRvUpJ5T7C4P",
  "key33": "2omfwTvDAW49jaqyuCqZTYYzWd7N4JiejQqGGpRNYjrit7z9fwwhh4LijfdjfB48w3SvLNfMHLvQ2Xuh6ygNJUux",
  "key34": "4VhjYjZPNHAGedC6eRn8UjStsmcmk5vX7LLwvjooXvNqM5pcyFy5eSdytkgZWksuAXYyvZJT5fWxZfek1BAFNzVG",
  "key35": "5xrBNwmgSb7cycXhUH6B39kKJYtmAT1bsjU9qWAYxKMWWAHYxNAPdT1VApEhTdz5n3wCJardMCGLwp3ayUy4DSo6",
  "key36": "2nRioq6sxUJy9s9uvY2XM3nN9WpfpZZWnMATraKL1fuFcRA9mhCWe5LGJ5sSMWrxyLsk4GeBPQpG5wNPMFPFrZZM",
  "key37": "5bKQLomyxejaysHWHSytHpdrb8DRG7ZKdo7RvBAQoLGWfyjs9n7P8nKHJdRWtAwqhRFfBphgo7j1YxDdosjscWYE",
  "key38": "RFg531udheFaPcAod3VdT2dY3tyRHoTSgUYSH1sz4ySm7XJyvqSzKzFmrWK1aX7GH7YeZyzKdnQ7UkXXQ6aGkto",
  "key39": "47pYGT2HcmYE9VShvnT4CpGwVxsEuk5qozxFeCDt9ecX5UMRaTk1tjh8PSmf1P5ZBsXxXZE272dU8vRBuZyKspYa"
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
