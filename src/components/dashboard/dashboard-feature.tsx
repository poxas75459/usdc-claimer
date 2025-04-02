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
    "23fjUe2sUfvxf74xMYG4ybMno1hGm69xs8k1njF4Ma3i8jF9tmNPw2JCTqroA4FpxmRM16JWEBckULwRYWwnMTzJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XoKC2RhZYe5pgk2RDrf1EjkZAa8xVsQ8KikMzfvnwjvr1SUr3eBaWxiz5pVwKoMBCjnPZosr21LNjZmTNPndQRW",
  "key1": "fWB2PX84x4rmnsXBXDJkcdDdeGzRHwTrJePFFyPWkboZwsry1HX9j9g8RjLTgr2kXH9DJAE6C99gJCoRqKMH2LH",
  "key2": "HP5arfnWi4ANhZFtTXrpag9UEYdT47mKH2QHVn4sYoG9DPfUVVMNiPaxhrrPB88dUERHSAhybXKmyvFCaFXCJo5",
  "key3": "DkLE4Uj9TzuMmLoFY5khACxiPmKeMySYBGnGPQn3ByFXe8YZWGHtiPkpJqdroH6ZRticyccEJN5sjL2p86pMTde",
  "key4": "4XaGA4BwpXgydwNtGuWJvW1WMskVxkSy3GfvmadJsmbh4SMdLBui7GrWPNFnWNZMFq5xfMT4S4HF1QNMCtjAKex2",
  "key5": "2pwRye7g3GfxRYXEjxLbPk7BcmMMLZVuDbGqDvpS8BdaCxUNPeNSfcnbfSy7eu1BbnRqbtnse9Hhj1vjspmze8qH",
  "key6": "4SvmczCdzV6ZE2HVA2cDLvjkPzSPXqTDaG3zN6f6ERN2tbK7Ric7AjaWeUGMhLQKLJ4zDLZyptXRGVqyv4hJ8wMV",
  "key7": "4zx5bBuuT2jCVgbHpU3h7TYLZfu5gPx4qkEk4Ryphwa4gRVi1FgcUbxHpgYLKLb6GbiuPasVF9wmh1ZxksY2cALZ",
  "key8": "66gg6X79aQ3fRWVzy5B3VRJPMwpt3beCb5LFV5P3pJs2JWjZT1tmAdqbXH7pW2bJ92NycydwfqRWdVdHXUorPWHK",
  "key9": "5PnqKSD9mLQGZEgQ2Axq23vjh8oLpjLFidGdU3oEJfzLGfxwW7jJTXVhgy9ZQE6e3HjPB1y71YaUdj2qPcNY8vuu",
  "key10": "24JKAQsFYjiqEL91F2UqAxB27ojZHCTuuBWrh5jRFEhPo8TH4kPNvhH7pQpyGoKu9GCP8AVxD9tWBG6YHnfXg6ra",
  "key11": "42beW67p5At7rvA9cvCRPQDpbehvd1f4oBQC4HcgbLyxZtmTBhuEXk66gQgufs9h9sy391AvYMQDEZViXkHUsH7Q",
  "key12": "5zWQuf8rEBJW5D1KppeNz6kYt2q3xsJGm3rfUGWiW6xEwwHbaWsq2mD2XBVHrbnppaxheFDhihRmK5HpdUgDm7Lk",
  "key13": "3ASnSYWaDbzfM9qF8NiimhCAuK9FFyMaKEsoan3pooVxnzPg5zPT1UYcro4CxfsXswANHbLDELqwb2TEHSjR2Woi",
  "key14": "256vW5JnaLXXeeC6iQSPFhCMHoKfG8no2ha5dCoWFHe6LD2eNocrDTyWVCpv1rmLs9tQ5kZbiRgZd9ai6FJCwYwB",
  "key15": "3MsxtUuT9HHjUnhCaTuKAzTusKYmXmizzQDyetJkGtXYjmDyMsr8ZJzQ73vikRfWPLpwoNsHxZagbtYdNNxaaPHt",
  "key16": "zjnpbJg1SpmwF8eZAiKDwdMpoTN1TVYRruMRaWvp9co9jrbCEtJxbTDGtXAoGGxvhzyTG3kWRdV1NVwFyrGJ5mg",
  "key17": "4xD8pKV8HaYDdbMD4qUueuHL5H1DtoqxCZmZYvMATAVLqCLkX9eRfR84L3T7bxh19kqHardCzi9CZYB3mHxVFtiC",
  "key18": "4HKhkEhXRxmU9YZMiBYgEJXJFNvMUsXKsq9etfk5jZWZVXho467bNmvcQPhyfvmND1SjpdHsqz8ck2sxHLfaQSyJ",
  "key19": "3SqYcyHDb3MYhraySfxp5z2X1qobohYfDdzTb525GFnRDvW7PKfmoSQooWRLR4om6CoUgJmMHS1EgPxB3ii5kMAy",
  "key20": "RmZ5FRcRW4GEBSyLgFbP3ch4B2U2Xr3F3SfdTTQmZXon2y4nsyBzGwiM5vHxmWYmXVaAwWpC3QEkUnYVuEJDSoc",
  "key21": "x3Z82pmBe7ZKr4z4D7CHxAZj5AdpDUJPvakXKoXiTrkvMm3NeX3WZGXteC8DxystxxHGpvxj8XMxVnatk9MtYe2",
  "key22": "qvG9VJjbrpDTEV2shAaUFt9Eix19MB4wi6fWMSMWmqYwCAGW6q9zCch3TWtutu2AAJc3V3nPEZhbYX2ks4rjDmU",
  "key23": "24kixbKrv8zvfdcEztqt8ZypV59cqL5ngZHv9diFU3L2UAnFcG1rTwaHcX1dvnRLcqJZcdhLP3uqDStLe72tkEkJ",
  "key24": "2MCnWzCotVnhGDDVke1HDy71P6PbFmtBZLsgyYb5GMjTGXPXA8dDY7FY8VQ1dZLRSfQesLrfuEGXXbeC3bX5UYMh",
  "key25": "5bGeyCyhm5UFLouBm71rjiHwAVRsU2gKfR9MBQqacjTfz4zCKk155B3WWZQjmKw6uhMUYHA8svf2Qo2tdaAMqQCt",
  "key26": "33ERHCAkiaUczPTcnJ67Jwm2ahgquFuHjhM79TmjKCQRo9r8xQMm4WDCWMWf9idTekuYG7yXmGX15qwWRDYZzAXD",
  "key27": "3C2Agen3ovAH4hCMWgXJDeF3chAtZmVPrfToUbzc5iEJa5fgRfhXZjNwxzbwb2cSdevUh4P1Z8t2WFtptTMhw6Tr",
  "key28": "63PSFsCfoZKmXdhwz2UjQite8UzryKLPGuqon7rHfujHX1MfA858MpwvEPAny1XRhPySedF8P1kkwDkizZraYXye",
  "key29": "m3UWj1QQSNwNFpUN2VRAEom7HqTtK6BvFf2m5xRY6o6gkDxCKBcRDxVEyi2iMbLK6egDny1ypnu4uJiE1PXQiyp",
  "key30": "2Z8QFS5uNfHpZGq5SybczmHzX4ybU1cQVEaJQ78SAxTXe8FHJkbzMuauMEAkz7mTjvvDLgEWpzCjGXdtde1wrCbW",
  "key31": "4W7z85Mu8Ud9aMBWquQZCdpfRirq9BM82K7LFbaTsf7W4QsZnUSLUsqWCT7m2J1WQC8chPAYszGv5zmFqC85svax",
  "key32": "3t34bWz3kZJQ3y43AgpkhmHb7BgLVRmUnsWxYEnWPJs5AojsGKxzMWzTAmoCusSDaXWnFwKJsCDgSqH3eu2QJqve",
  "key33": "qFpeWSeMwe8bZag16oAaBCP63cN8mysGiFz1jD89YRVorj91peFmj8gNm3PTT68KutAPyZPzsCZDGRpgSd5mT1z",
  "key34": "5QDRUUqKZwD1z9GU5qXqjULFseaaGvS4N4VJT2Rw17iXPYSgEGJSsrDmqBG7uag4AMx7rvbr4VWaDBRmo6HbvP7y",
  "key35": "5KqrkJEFJ2hz9E1X9kLGeaSmqfTkFLaHRKtkAttiRxuxjwspiJYRaL4aiLUo963Tp5deN76nK2Uyt7eu3etBQM7s",
  "key36": "4G4dpxmMZVf393R6tDxCaYLRWjTFD1a9a9wrh4pGgmCwaYCbfYxVET1gGP8q2C8u2aKj7zXwQjaxHzAfdJyhebVV",
  "key37": "5ZpQx5A6gbor68gjhV9p7QFK7ngaXMbecV6BdY77nPxXLsTMnCmZgRRTdLXhfU5P2TkskKqD5QnQ8xTY9NH3Fi4T",
  "key38": "3ubt4xKCFLRBM5Mb3vkpoSgCK3rfbCz7CuoYyAPPPTYnLTdT3GMCt95sPbi7vDBfPzDJAGP6iAygfk6hgHotBojc",
  "key39": "44nUhnmDUGwQ1b1Pp2hv1MXLoZLKMJDMoGYcYepuTMynTk99nD34YNWNB8BnobDmjCMytfdgZUuVWhZ3T2zGPScJ",
  "key40": "3R7YGexb2T3uTgeEbBAXRjEqEme3mpb3qYrw72f3XHU2ZpAL8UkknjjcrgHQ1qCbs6VmbsbgHF6Dj34YxuRq3WVN",
  "key41": "52ZkXEUb4HjbfixdFXKhBaGBaugYWWhm1kVjxYq8oFx4TtpzGbnWcUnGb51VZh54iaToqyHNSqj49VRvGeN7mdMV",
  "key42": "41eraZjGVBsg7Yc63evg2DtQSWfp3UAJJ69iHVhmDKzzUCmGukciSMcEp6WA4bdW9sNn8fR2RhBcjLpW97W2XSU8",
  "key43": "4R5EQ3Xu9gYbKB5zJRSBak8xd6QpVHzRafw1wGN2BsQZ1HYAHhdZAGbsj8siXvDF1Q1tHm1P18TRNxrJ3yXEssrC",
  "key44": "59QzMScCAUDc1viL3aTWE552upmJiYjZirdmp6djxyerdurn2Ymahw8WEGJSFgXLbhnw9gt87KZpfScwPPaCuEce",
  "key45": "4xLFVdsZ5J8xW349qpaVZF347jvHjM4x8pAxS2oLMCn591sJNpofkgwPzPBMHtkZxfyVQp7V5sQAEzjnjnuqFGtG",
  "key46": "4SbbtRv2iraXY2YpNK7bMQTRgBpaXyzFrRCnTds2tNcmo8bCJs5eUd3xdhrpvc8qR98jDaKDhq1EHngGH1f674vd"
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
