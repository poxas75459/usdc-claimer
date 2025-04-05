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
    "23BhVvLSz1qvs8Vmrg7A55hAacJz7UNDPxS8RrNga39DwMfKqXa2R2NVxz9bKTPWbw7EQui4rRZRGbvR4LwB8jHH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hZw69jbFPZUcj5keBn8YVVdh89yvhchkq6nY3tmCgvccPn7U2McQfzBERqQ5BSXomNe38eRbMDGMN1Uxzbh5ufe",
  "key1": "2M3L2nxiYGtvgrd94XN2poityfCTSi6ygevq2mp2juednvscNVz56Wwm7CxtdkysK2bvqeYNALZBLH686dp8EHKu",
  "key2": "5xQT1Gho31iWhBvanoYiAHZg5nnf8PcCbSe2zrFXLekMToLJiWUhZL5btF627yn6GYB9RCVHG2LKEt1FwnZYav3X",
  "key3": "4DsvQAzoRJaWvJ13XEupqoJppsoccPEpRMEUdfrJzmWEjnmQU3X22F1ynHLydwhDZzg7MW5gmNYgmGPptrvwW741",
  "key4": "4pZDGcwmRec7sCbuM9Amk1pzKZYSeN6VbtAsjjKtxnsqVA54pyr7ghkS36x9Mi2zoFq17XbGNnr1oAZzDGWy2ami",
  "key5": "29Kf4gSQSMfG6xre9KxG5Pp8aF5iUDyuKyRBvo8ck6z4HxPA4a2fvV8TWZudWd4EcceF2GajRRDxjpKqRzpeUJPr",
  "key6": "5ZjaLCsZgt7b75Gn72arXjF8A84B2uyDfmLAVExdmqdGzPqFXLRd1keR7ug7XYaD3BgpW4k4LykLSqv2Jo1tZCnh",
  "key7": "5wdp4ocmPDGPqXC2Vmmm1zz5wnVWG6Uw8rxSSDEAESmJk8nQxq8unsMbZq7k4qnvFaEYt336fUrHhsX5EDmWPxH9",
  "key8": "5DBUg8HecbbfnFAcoebdDMjzUYLTGCQNWqRtRR9pCaP2oyE9twkxf2LYJefP5fwyz9grdQrXcSth23WaVMotCzdW",
  "key9": "4hsJUmrVNjBAEyNmwpQfbGMjjKA9X2pUSstydr4mTpxo1BTzjqiYrhgbtscXjouSxV6fdvquMyTmVWXvRSjRvqiG",
  "key10": "4Hfd5beNBAc6PTX4dciYXtJVhm9Witc5PDrNpiJBveFE7BYud7yUjoHFpc2NnGKKtGr9soAJLfL89J9s8FWM4vQj",
  "key11": "U3dXwDpxxsaKsWN5Agz67nqwTpdLgrusvqN6cxT7m8DRetgFbR6T86ovxxEvYHDpJbWDjT5EyYY74AswxabQvvb",
  "key12": "5NoaTsJjBjwD7N5Ub5q8h1nwt4vfcjb1VvYoWjwgFvvx1CHhBmYv81f51G93C7drgXQzW2WsFPTQUuwsj6iFKsLB",
  "key13": "4Ts8iTZo2ZSNckaYEhKZrCrisVeRrcB1JzePAiizenohKTH2HHaBCXeiitaBqQwS1u8f8XkbkMkHrLBVCgdenr3A",
  "key14": "2H8FXBEfcouuvjgPHetFHRYqvEnLJSWJM5fywQrR4pJsKQN3wCveugvfw1uPaALFMNuoCCfoR2gcwegSikUrJ6ge",
  "key15": "3BYenSe4qhWGNsYCXck8dj8x7mzsAWsYt1r1DmjWtCcVgYHcpUwRzDuag3G37nRhsoLznjtMCt7rAQJR2tMqyR2",
  "key16": "3P5WuGfDxUSR3HGuaceBBWnGoJdAV65TTeqRUfCaw4y4kQ7sdXNuxY4jbntGgPVuhRne1qEgs7y4AWnuK3AjWBnC",
  "key17": "434MqHZKvh6Pr4d5FV6gEtmadQq8gKvcVscyAj5xHjbGv551cQcSUjoQTwDFaYPzNmE4WFhBLknJ9kaPjdLqFeGq",
  "key18": "4GS6b3csPBYnCAHoAHo27UosfbwR8xG3SPBPDxvfYTdCQSRPDufS9Z98xKmH8xbnd7igh5s6Pe6VqGiiToFJpeui",
  "key19": "43ZdTjk8NSidJTWVbLebzLeCi7BxRR3cZ3GEbvq7KhJcBZthS1fH7k8bNaBSMhXMuEJR9MGWPG5F2EF3PXz4dhyz",
  "key20": "5ydqmJhEgwxCJwhUHdhpe6of8By1hUFVBPZyYHbCS6tL5kGuJMHF2p9NEFzAwFLhqW8R9J16NA6xJwgsMgAoRaHA",
  "key21": "5vRjcJSshrvNNioV3tTkRmSMZLVFNZhjqfkjtJeWK5vCpECCNeoGKUeXqbmt2PvfBLvJAf7Wne81VRb4ARiPt8eg",
  "key22": "3SZhaZz77zKP3V5HtgR8rNgZxqdmQoi5wcH1SNZMoa83DJA63A66RUi4d8ZzgDSJ4uFgETVEiTsF96X5UVUQYiu6",
  "key23": "25yTfDarazidnJfkXRYUoMy3Mv16PuT8jzQNppyqQnRRkCyn53d6NMnA9Wq1ARMpAynZ5kL99ZpHYoDpvpEsk1nR",
  "key24": "4cNa2EtMSjtbmMJKoBXjdhX6MZT7c6u5miiRFJF4T99uCEnHPTmGepZHcTL8QTXJynydEnQotK5KUk1gBp4ppFra",
  "key25": "VEHfuA59JuqKiWmTgQ9hkq83hEEaVDw89Jo5rw9ZCm53CSYKtEJztwUNxpVaQP42RnGL5jT99LjshUro6L9zNCE",
  "key26": "2CYtmJRux6wSk31WnBMhGE3caLQ8WEjiRgrP5SkpPPDZzAUemgut74H2F5u6PGPN75HcKbWoW2xA7w3bNwLmteNU",
  "key27": "5nRavJ9N8z8CFJMJe9C2yQumszDncYwAbkKv7K56qnaA1aYhe7yhRF8PwqgDxpwvJtwZfgxmeAXiqtoP3V5WoKcd",
  "key28": "qaTv2FYVWZYjE8rQEhgSHnRJtrRLmwTWM8kPk8cLbmckp8UbMmohWZEwhxgLVPcjDEDkZ39WJ4dprCBKtoFFVcf",
  "key29": "3LQfJZLCUmsTUZ7W74wiAaoYpcTzKdbTNo77VWYqXpC42cYmKMGUHrvQ5TPDfh2qLcwMbh7ZECqLVxDkg77cFdiE"
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
