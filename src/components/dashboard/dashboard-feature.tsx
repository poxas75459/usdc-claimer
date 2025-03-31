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
    "4FaeLBLXQQRJdfzbh5L2m9TK47P8Va35NbRSwQrS2XLkka6YtjaJrF9dPBPC5iDeggzc4WUw2ZnF5M1syqBQGsfp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q6JXY7KffaxPcNCpd76zFoos6AL5BrAhaBqZtKYGTJ94qJTcE83JEu4xG3wYJjxsMb1Ve7zgpyDynE9Wt4dBncP",
  "key1": "trkioHx85284PQ4qTboxjFLcg8qwWQHGPDTULtSEBXhw9v2ZeMQ32BA3VhJYV8ZuKkkpyWriFXhigLKb23pNJcT",
  "key2": "63gTWo96Qv2dw6a2MhX3dMh9LxsQfrV9pSr97Qk7nw9GfvFFTLS6zbnvV8wtCG3EiBEjDQpRmVCQKQmHjbouzxk",
  "key3": "nD8HfYEo12x8gqhedZYGctaNTfEPZZj1P9n698pC1McxayvqGXWfR1pvfUZyBkoxvAa8nFvDGq9BVoWF2NejzMZ",
  "key4": "4ByzodEWMsMAybX83rjbSxJmzjYTz6LnfG6jtuphKSfb38rqiwc2QHpydqu271nSMLbvJ3ChctUaP9nbyN85nnUN",
  "key5": "4BjDmuRpERViTTfNJqd784bBqmgNPwK8XHQefigBjoaRkdzQYvcdDn6uwNzViiPJRAeRc3FRiHfTMtLdc6U8Kdzr",
  "key6": "2TBvLjFs3YC8atnHfqmV4y4etUhjbTS4MM4ahNRn8aTmqzfTRgAVE1fQPdNctxLbFEmivNAFkA4gYRik6wrJCSQJ",
  "key7": "5EbDHa27d1Any1ucBETLqWiHdEyAbw4Q6yD5FZBh179tQD2ZshfugoJMRn2XUrUCrwq8xbLMPLyPApoZRhA2pLeF",
  "key8": "QksDC2vgLpCL8zqzSimwZswZyJwi6BMK3ihmqjUjGnNMg1zm7vmLQ7D2J2YsRGmjoQGWr18RhcGHQxXXJoC9nfp",
  "key9": "4ynmMtQnV9cUeHuAnkJZkYUUdJcBrB8ykFmZ4Zz1ucF2SL4HGxsrtau7GejYJGbYPUAR2KN423pS5roAbZ6qE5A2",
  "key10": "4AeDA627Nyjb59svAanY8HHwKGgFmD2eECzdQ1VGNHtDeYbnbybs5Ld4KKP7HynBywVMUHTabaDS2ghcq6LHKqQh",
  "key11": "4xy1qP623wspuBhNTLbX5zPzp55e5PHTXYC7Heog6MzWZpTfxH8HC1i9BsPHSKWjjcm1idhf77s1XBhyS4bdZjyU",
  "key12": "9jJfM1PNgdK4nEoGyXkyKzTq7WGkJSDbNpUUJ4mDsRAV8dDS3ofHcWHpz2aA9BtePZQgQfUmzkFqV9UoyttCRiD",
  "key13": "3vVwQaMD32EYvz1y5DkiJZqBWg62RcBUuGKoPN2KTVx2eoHd1QFfinbRzR3g8BG82Uunxiw3WtzdP2eVUJUuZksS",
  "key14": "5G5yREDYGAGLud7K3XMLBBAFjSgaL8AYtS3GvUjMkhUAxVU3BnswoF3R2QhgpcHdVabPayRxGNHAyGpiUsTUbfT5",
  "key15": "51wGFSFu1ZbmuF2xoHaU33EXKoVx5jvvwzQAces4djpxhE1BKUJV1xm2zQEZnEweZLS3ymYB1MM9aLvVzCjQdmyB",
  "key16": "2261iZbjbb1yQZ1u1DZuzHA32M4PuYn9fBjvHzmbos6Z46QTvfKwZ1HQ6BzY5V88NmM2oCcw7jfJSWxXzv1Pp7Yu",
  "key17": "4c68tD9LHMUXUiwxnTY9LjJsDi2k9uAqYwTLSSe9Fqutnm3AS2zbT7xpohY8F8s5fsbHj6JaNKZHBq5Jt5FBTmqD",
  "key18": "2DUEUbw3P4urpsN1eE6c7HVQnLdKXbLyBsahnCVN9PksEU87bcY57Zn22u17G9ynaWPAheT5LtDhmfVWZEaLkvJ1",
  "key19": "2ZVDAhXFno5foEfv89UhF561oDmzuZLbxjik63HVdXc9r6c6FvPMQpzNrU7URvtHg1dXavWQcvHDmeiYt6oWCExV",
  "key20": "5E8bpxnf3mDmjAcd65CpRbo3FpSnCnuBRtNcZyzUecHJjpBSy1Gjf93LWHB25htDmehhxVyoYoJMvLuzmRnwkYhe",
  "key21": "3Lq2CdCpQPZQ44EQScnypNmuAmAd54pJAXyvGvitjbgwM8J3c9FBG2KWMFXQqPh15jxMzK5vktk5vUsRcRyPJCsE",
  "key22": "5gQJqcwzdBaXwSfUcS2WUWszk4wW75pGQtCjYFXyuUG2neGheZ8TkvVCDrK3gfiVHxovhzjWodAQjzwx7vERKSTh",
  "key23": "2Z4F2NSdbCYpGA4BBKZ6otX3dZ85eSSBHatgKkaTgwec1G9qFb4VWXGz9vq3HjsdsCd7PKSv2658EejpFQmS8uog",
  "key24": "4xKxS2h5qrFN7UnFFtzSpS1Vkrdtx6BSoCa6DGaQt6DuuSvdAXyFNAgvGd7bCZScNuDfc9EccFEXDCCHreoTFbUZ",
  "key25": "hqQdtzxabQhrMj7XCR5u8m6PoSctxAwGfPpcLeQxEzhFKkr5EW2EEv9Y2Sp2xcpnNTMaDCMvvJgbYNLQdnVcG37",
  "key26": "3vvJysCeHyGJbZy2eNT5mx6Mws1UT51XHJ4fb5NURT7kNNWvJCE15n6SMc4tHcQ34dvtAAsGtvxWbRwsRVMNTicu",
  "key27": "4G5hHeGTPKLpi281RPrE3JxQSU1inYSsCmf5jEezA2xgMYNSfWYaMRMzCc4ks3xPwmnyGXQmydNmC5QDaFX1J9fk",
  "key28": "3gNzqnX7gzis8Xk9jyzWUvnparRWieqggJhVEUNsfgaPaWgR7qh4CiH49pYFRyauHNe1TLtTvYu2RT4ob1kWur43",
  "key29": "2JKpi7Mu9SBmNLihAvYrSWT3nAaLVPeHxAJVBny8UrVC25vRGx6T4qeuycRcvuBkqaNSCepNgRAp6cx65AXC83j5",
  "key30": "5dVgpce7tJzUR1M1EW6Q8WubWvyhSYKd2KrdMyCHj97Y9Ew8SiBNAFdcUEzayHokLibwetkscQTWeGq7wtyc9oQB",
  "key31": "YjkpmZgqnBsSH2KmneZiEVbsL4qExZRQPHSV1kmcPW4PfwRoVtcbn4hBHswbdsyNqTDdVWyw6ppSAYnxdeWBo2f",
  "key32": "4iJVHSYPZLph3B222bUE3mrUp9VdHQUdbzD1q7ufqdFdDwBcEZWH9LkmcRzTRTynnGJPnLz4qbNemAo5HdeYNQtA",
  "key33": "4vQ5oSCWciSG1psgS4wBSKtY4mRg8qVfJUbb2gRcHDwVGDMEvUuezeYDM7u1vvfrVuafH36axJ9NuQJ6Kj89AE9r",
  "key34": "45dNiG1gZCreu8tVTLT1JdcgV9jyXMY9gkgEvFFWLjotsTUwZw9m5qArpAnPeiCk9QCvCHfsFB6D39MUgpVd6YPz",
  "key35": "3jaSSWj2rnAKptjiVFCreTnGphAHiDqJm9BFNCP1wMDZapDLU3wztMb18qC3G39vfZ6nqiKGCyt75YKgvCUNdkZn",
  "key36": "46uRMnjRWzAAMriqUopJg6npMd5k55rxWG6UC11hPqYTmF2DpHFZEChioGN47ivCxV7QbizmCsYZ7r69F7Lsgd5A",
  "key37": "EiRwnw6z23PQvbh6RiiTqw3RWSq7Cy7SgsZgNW2269gUHjpT4U9ndD48KaevjDAeUV48xjBZ5g2mPvfnMUHe36h",
  "key38": "4iNtJMsm5jCjdo2ZTX7wgHGhNZWLcn5o3h3gCzyUcXdQuZxsksbJ2NWVvoXwN3yY2CxRfhvQuU1GMYSXAsUB6EpZ",
  "key39": "4nGFVT3s3fWRc6z5a9kkCqPs6mwiqr6QKoFtAxLwRjrcQjoJiXtaG4QekVNW2Bkqtrqs4vSBZGMrWwywHS27q7ub",
  "key40": "3roLysyxn4JJF3TzEQ3Ciz9GHG81Kh9zrTnSfWNVG9nFYFwWpyiT4a8FpyE2zLD2xPAmp4TnozXVFRrcpFyq24gK",
  "key41": "DTJiWpr66vRm378YHgB3YKSnWjUbVXWs6zSDCXMkHBZm25ioAvb51iFc7NyXDT2Ej45XH4yHKuPdYcFmWEGGmAU",
  "key42": "5WFvFHBA1qaUzBoNRBx4G4WUFKye49gSHQgCEYZbNi1ubMEQo1aLFTJeqBnRnjBtCjCsQ5WscHvvWBfYwv3ay1Ge"
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
