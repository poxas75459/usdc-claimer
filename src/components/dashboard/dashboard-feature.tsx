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
    "3hWjYwnb5TuWyejoh6Q5ipfRbmTPkzwMfUcfob5n1NaBNaPCSpFT9tEcwWPUGhEGq9qQn2un2jGnnJm5FYLZSgUT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UfDNDL37tzV87rNC49A9GvsPtNzsqXvYrcQ58pFnTBBxW7LEEzdrovJxhPH1cjvRWd6m8xLaCXyKz5Xacu5z5Pr",
  "key1": "daPGSroo7tRNpdE1apCD2Q1uyQpvHdK5CeJmkNTcz9bccCqvhRWU5QgoJbMVcuvV8zQFi5H6Lv5LZonZTVoqLHT",
  "key2": "43bvpFdWjHsDEGHg8cop1DCvU7GozHHkhEZRXMarprMKYk1PENNbrgbqVT62uytKEuKQ2u9RgwhWMqHdasuPdUBr",
  "key3": "nkp4e9gG7YRvgJNYfj1pkmDdwEU2BN1vDpvgVyXL52sSKLrfTDT3R2SL2E4ki6d8av6dbTmMhrjncoPaLWDC9mz",
  "key4": "63XzaktZFH7EZezTDsy2QGecWMCUsPVbVwkVgAjmCKeMmg6Cjk3HeboM8aFd7bDTtdNC9Ab27Ry96dT1aMf5Q2kz",
  "key5": "4RCxY5KZDmZb4u25NMsqJb9REGr8Uw94aXEcD7WRjDMAJAM2EM9kbuQXvyQ4pJJaN3TQu7rKApsqoVoLKmK2Xs2K",
  "key6": "2rXMZRJzq7Scw3kuAkYM6sVP3f2HzUTZ9QmJNg8EBa8fEmdzFDHon7Tod3eBTYgXYXbWg7zYj2e44B1TY6mA9b3y",
  "key7": "3asUz2hEd62AajSfVjgGJWDaGc7pjC2hg5EnbZALqXPCgtb7Egwvz6ZFu6FFSge28oDQABCRGpMCGbhD62XKY2Hz",
  "key8": "fdiP5eZecdZvDxbZezWNiVJzcAaGUP3T3MtyaE7iy7rQ9fxFmg35oCGqrxu9GQ5XbBMsD1qeVTR7WLYCMYkS6Vi",
  "key9": "56rac1g5HMqdrUhZ6isFFTgXMpJzqSwncS5F6LX1uMedgXKskE9Xmf1ZKxPHCdUFnTRqoWfjSwioHgb9sS5HhV4N",
  "key10": "yjxGrmvz6rR7Jf3VRJ5N15yWKmUPBLcw4NshjPSGA9Bz3VJFspLeFS9iVfvbyXtoc5HYocHMufUQPWxZP76mrWx",
  "key11": "2oP95y6ND3A9UYCpZXY9q2gpKmVqeLRVVHr5pHWc3mPoi2MTAo7tq98xpgNrv2pRF1tQUVwKcq7HQB7aGHuMAPZB",
  "key12": "4hv261u8sJYkmR2vAwhKCtwqvDrYuPkZfH9drxsmdQvgzhRSy87nxxqAeR6EuRXmneZfc8smjcXEYqQ9F5HVkYs",
  "key13": "5zHeGobyWzheVZjtM1tYdR8at5xoLrRLucRbMVMhbSTz4bbAt45Vxrguk3Hb6cHASGa5Wa5v7NV6aFDNd5GP9NXS",
  "key14": "2xSWeqYJx9b6JN8kWiKphUiugvtJBc9uXfHKXn3kW2PVSNM946trHb7TXhTYYpFTLZuGnnymRK9cj9ryqJmN3Fhg",
  "key15": "LEA1hCM93ynB2vaYKMMPJ8SA1C2uufMJs9jKj9PYZMKRPVz4QC6Lqjd6wMEfMSaCcbCo6mKchEpdCJBpaPbdTN2",
  "key16": "45nZrLeM4Mx5oBz6j1emLj7kUPhuf5skEUMnHRoTi5ZoVi54KtBci56LptJ3g3jeF6RL6f7fCJQ5ds7NDkT2tAkh",
  "key17": "4a5b728UziVgNVYQMQTCdKuvRYzTfAyyfT43WvKg7J9kP9EkNymnp8sGYVnnvas72dQVULRnC8Afhe8LZPFBS1nj",
  "key18": "67dnrtLNwxZkM1mB592kaJD9ysY7dZDrgNPLe2yPGmEsrbFD9kCebhcv8vLUaZuzxzNRBKLkNRKd6NLhGY9bZH43",
  "key19": "5z8DmPf3TwyjrsmcogJB8Mo4MLhHP4GDFdf9QDZP89Td7MQuGGHnnCaMoC9PRVmBmycV2WYMGC92yexQQiC9xsz8",
  "key20": "34CkD4NcPnqDZjoQmuzcGqRPgrcxMXwToDzXEPsFHRtGP1iaFWNSJWt2FxLBxJHwzUnr9jxYsEsJCjkijj8w1LRG",
  "key21": "3eJ7dRuYUWkeC4i2S83vzNv9RkXpeoMw9Bw2a1ggWvMxHtgmF2RkSFZbyAaqRGGMGgaYsPGdRrRsyFq8878h52WB",
  "key22": "2T55Tb27mpjQqvL8ETqrPeH7vw81ekJccpsN38gfpxQuYuyVfbToZ5BhKvxHpf4TowkBSTQGKFeTNid3vimUeQQW",
  "key23": "2FXcLrMNn5oZBNV3XLZXK9vGx6ayiA61ahhQw9ege14MHyy1QWgmRRUAuP2Kud7cU7sJTNBviRHV5H4X1Z1AuAW9",
  "key24": "4Ffw1hbJ1X6iichvtqkKqsfvh4yAiWip9PAGAZ2vcrSz6YVNJWjWeYuAnoj2GPW7MEaBmwkzDkndZA8Ay8SHw9Tt",
  "key25": "3PfNdZYawt32NJjdbQt1kQsYhJree4V6U9MCDMnNG4rpUdvVd5trXJXmdW9R4iA8UviXdYMVez4wTpckAXtw7Yej",
  "key26": "67LzDcmYAEdBsw7SFjkpRyCS9hdGG6cymME71LTWGowrSgg3u8stf7JpmdgHyUSQotF58dmrmrQvESpj5keNkMDF",
  "key27": "4eJpquDPwjqTPSq2yWb2HhEpyz7hrTpbeaFvYwiHVxdhWpKVMPHZztQWYHCfjY5VRNL6FyH1NbUipFqnyhwcGimi",
  "key28": "3CqthQC5riinY46T8anXgfsDNYhq9FFR793yGhdptUbeiPqeyy5e1vG3LDqm4M7zmwZTaf9E5Jj9VB7i2HEkFhY",
  "key29": "2GkgHKwfVEjHBvczbAy1Muqki8biHbBtyPb6GXTzB3DrugaR3QBc13Xg1ChmE5ftHdfvqGRVWXGAuqBYzyWeC2Yb",
  "key30": "9BehyCebZAEgzjKtbQZcsX4tsHgiwrX5m3EcuGxWQzea4Gg85aDZqNnHChQdax59nbc6k7Q4qt3yKHvLYE7JdFb",
  "key31": "2jhYts8TEs6XWKLdbHuFDrKF9QjmUr3Lw9g2KBJUzvxH7VZTWdtJT9Zinzq1x5ty23iUq48n4Xo5wDnCkVcB79va",
  "key32": "3Z5p8QedUUJTihR5bzLnnStzCUhLvdy1PN2Mjt3WJwxWo9dHSUr5uwA9egVbfvRzsFDzYm7pUrWhbW9xvHGqbxeE",
  "key33": "25sdwJwREtp15XMxBscSseqh5FJqyEM9Y2aivQ7TGvvGYHeG2GRq6sEW6jXbUYJNUBWoUQx97eWmcrC5XZpYQA9o",
  "key34": "4nhgqepWbGwXZS4PSu14h2QjJHnQSvWDSKbHCD7Q74m9iLPU4hgEHsdbNHdN8pJCdMizTULjvLfa5oirLCwAWQ24",
  "key35": "3WzAb2JaFb6coR6sYBRQMTeRozK4v8wvNjndZMyz3hvCF2EQoqDNQETKgRGNhy919gn2zQtUbWQwJGe5vGY6uvai",
  "key36": "55FaxCEo18GPKmVc9NoVSGEMPuQBAY85oNcDWKZvMEJcsi8A87UpHqPwV68Gr88W1kMvabeEW3HRcmrvcTz3GiNC",
  "key37": "2zfcWWazCSwG96Dn73WeB6xPj1RaJ4SGucepb4ENPZbfMqVAS46CgpWfDXdCpkDoMbCAV4SdT7ZFmHm9rubvLWSf",
  "key38": "2aDSVmncXuKnbk8gQx8QHvRusZ4bNRG374SREb9dfhMbmj3TrcN6BZmsfmU5puQyEQYk5ZFRx18BcziKmkrAxMXx",
  "key39": "xdcpddfQXr9WsuCAsvjRDuCsUnKf85dwbvKce1UHzXUiFnPMLmGvDts513gpF18pkTjbfNJ3CnHJMrHzXQYXHoS",
  "key40": "5tehFyt8y97wAaSiyCgihyRNC5hvk7BGs5ohAxCH3muTRz4J55v6Y2kzhrXEtFq3Vub9ihJfQo83Z9bBxQruyG3J",
  "key41": "5FsJFYqbLsyZwB5wW6Bc25vHm8oXLofGSRerTF7iN2pVp3m9TwaT2omCjN4PGKgBDUuz8mFcDWNmrbw6HHLd92cj",
  "key42": "5F6zJsCgazdpZb3nHZBag1S6AUdBioDiCNogrsPmALLowtsyVPVMWLmb3HaTw6oQYjhMwHyiSqNdwrhDLBJAodDm",
  "key43": "iMfiz1uBfW6AkZquwdy1g1f13J17YPCc7gd2MhL4RExW62JKrdknd5ZchjbEaCY3dW4qkfXaLe7HFdMDRCno7p9"
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
