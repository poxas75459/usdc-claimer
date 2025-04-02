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
    "4aCZQEwpc1gRgPWgbRFNZnR9n5Fj1L9KGh1uQEhwBRmn2m7Qy3Z1WyLy11PtqgCc7YXA2KB7HtRFpupwTgJ6KbkM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CXdzcfgdWhXm1XoLxawmV8Lg44SSemKHZcDKGiRmoeWveVB5r82UDcZFH6RVQNeMpRBLnXs2akWY7DESFcmFxpQ",
  "key1": "3y8CZftsUZxLZ1vTCkKEMyu4Prjk9FfzVFoxHnxEZt6pZGsFTNXkPLmjAuNj3AKNesZqDpjPcL2Kt1rcs948J2ES",
  "key2": "3SMJiz78xPgPn31pN1c6YSn3XbdcNdeUHWks7wu5j6PdUafGMZVi3Mg3qb8DYhwZ4CciqUsrmdvEoK5ZRerRe7mD",
  "key3": "4psDmrYZS69epyQc8zdBpxXGGGBMgJpHz2ctnhbaDoBQgd9ha2pAtWqARsqNwZcxvjvQXMTeCJBRZ4Ly7LjvEgG7",
  "key4": "5pYuwkzAfzXSBMqBion1ycgDLKUUtpy1KbxjBBn7jc1iLgnCHvBVLMtFrxqX7ie5zKB9DTde8RcnvscEdh7pSR5d",
  "key5": "3ejS7oaJcyAse2PpsVaR4uNf7RuM9F7DXH7pj4Tp9auVYk3JGaPWPUE9KivCvQhkKMfCJjXdUc1YhVzHKiTmq4iS",
  "key6": "4qvB9FRV1E3Kw1kKA7rVmHSpRbViNeJJBMVbByh7Gery2Q2jWALqEudFMRbgmTFG6j4fEjkdzUPLhtGj3YHbvF2U",
  "key7": "2th5Cy3wYyucn6Dfx5punG2bkXWx9zCvCr1K2tQQWjXh4CtmzPW9JoMHzE5S2m6dj9S5h6SmCesgj8FnqX2X1pre",
  "key8": "DkNfUHgX8NwngHk4r3TEdByPvtYNuyWdSpsQT9Dpdjn6FFyZFfu1uJdxWnCD5VMX6DUjaz1L95huYTdhHpLXsa5",
  "key9": "2UQqFeHcTDxy4eXEfWtweACNfQ5A31uSyPKxs2KoSwL47uScNA52xxWtojRqwv78tLnNMPPwZ8Hh8vRtu4t5VFM7",
  "key10": "5K4PUyDv2uVe4h4qcesbd4bnz6QAMXJQyoTB75sE6sTojhFgDr6b4x37aaxFv5WFw8NkgDcU1zoxxwPSydcZ8iri",
  "key11": "5gDWVE69sZoQMgrqytx2zPbnp7La29egZko4WL8atSFLAsN45mj6JSR6hYHQM44DsapwV5uvTsoydyUUKPvg1Ri3",
  "key12": "3Vc6FX1Q3hcByrtFrNsgX69jMnyjeNzwG7wS2yM3HGaAe9oBTJbbB3W2KsfFWG4qin5wUf2VRBscY9aMgxK8JdZA",
  "key13": "5HPXBo8h9w34WLZ9Rp2boY2G5Cr334BUE4gQgSgG5MhPZRgfaGsgXxW18x2R1WzyUZGvC1Q8FKTaH8TWWUdByUZB",
  "key14": "3KkGfLjqMejo1xR6PFD9ssoBQpHpaTcsxpYHCjY5xzQb4huR5wDTd6okApDpV2M4kY3vkPVpc4cxxMdrfe9751pg",
  "key15": "4DPPDmxoHjy5t2qiafMLZS5VndpPB6MCgSgSJit7ZhLGwmtJQEc22bKJ8fjCdpSB35KhEdamkbuvMqTs52ZDvpm3",
  "key16": "2aM36WCBCGaFDnckZkiDwhfA72WzSFXACN1EDVgshxMAUNh2QVxrHjFvm3RzQp6RAY9airyK6HsAom4Eo5dnJc1N",
  "key17": "5CiC3bEYR898RkgAyYL44hPEjX89Xh3xLwSEjfmMez17UJA2Ss6cCAasxHNPwEEeCNNvdVLvkQG4fYVgZxYrD9LT",
  "key18": "61VuPPtL3uiV5XTM13BVsrKDnXQCioozSWvCxJJy9Sabbb3dvuvAoTLCQvQs1BuiBZx5NwV1CvL3F5S8HsiDq1Ah",
  "key19": "5KUhzNJm9nc2ca57Y9ejMQYjph5gYQ16tr2gfHiBsKV5PyG5EWxWrZD8vD7PQEXKF61SNMwLBQuaxdz2HqFSdPFj",
  "key20": "3ZnctYhMqWXQtVGseCkDano3Xg2FZSsC224HWcMWtEYfETAwAoKMstVrUs1vo6eNLLFF2HA3RyicnfkvdAXxuXWX",
  "key21": "4gf6hSxwxwkAAdNtvwu356jwPdoG84mdo2ZKEDXqHS5mmKjCy2KBSH1vQns8qx4D1kpZWXis7tV2pwBnU2hapQ28",
  "key22": "3zwuZg2k7FbhhK4tHGZgPJ2n1wnc3xYm4bT7sX7RvhYtpEuMEqyjVvdVfBhn6UJC5LRPQdeftCmV9AjfEh9Vqgp1",
  "key23": "GZGcgJEoASA1JUtxHiymEQPTRcrxA1u8jyeQxKs3T26x4FB4gr3pFhuRZb7gjwzBtFJwcN14TF1a6u84yEkf48S",
  "key24": "27Tzjo4XJpAaAffnZHVv4oGWq1d4AtnZuP6UrrGPTpp48Eekgwj2zAL5gTbgsuwPQY16qqERHURJMdLdjvxLvVDp"
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
