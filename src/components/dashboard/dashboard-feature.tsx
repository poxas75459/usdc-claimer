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
    "46C9ic1iUe3LfAA1MbcanYg6qer9NMQHTT3v2tcnAQC59vvMKnXRnBwVvqU6Mt9Zg4L5RLku6v3HmwQGtteUpDz2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61oKz3cYSZmnYTq22WScnxCizZJXqWq5kiB6EkZgsUtBxbrgm1v6ZXPcpCJsDNWgrn4aUBkMRz2e4KkhYq7r2GrE",
  "key1": "4GwdboBdBEfxLjTKDEvA7Z4BHT7fM6GWquQvoezfu9uoMUq8X58k6y7SYRt9kS6sWC1CGeGEmVkwg4yc1n1fjUSY",
  "key2": "5TKFd3DCQQcBcybUiKkhAkGXetjrADJfSEAyDfejZxii7u6KRMC9PQx88aSoTGfhGaCgSac9ZfebdG3y7Eb2dTub",
  "key3": "5ahn2vz4RibcxicvowBAZUrC3gbw4db4FV4d7zcqiKWTEj3AVkHWFUoaD1wkz8KMig4E8te27LW6GYNQDKw6sLMZ",
  "key4": "2yKDVWtVkZPsKahxRBotmvhBpsaXfxmMPGFDpEFAMA8Tboskcy4VzSERB9X5Q6ofa8BrBKgcpkgQhn7wwugMN3RR",
  "key5": "5DBvAvZLUuCLxSZbe8JKN5pS39udeMZBpaEiFkhuiuC7GsALSh3UtiDK79vtgSFCHaiW3iriG825pRvriLLzyMT4",
  "key6": "4m4V8C3MWtGxv6Ffr1YbGgF9bkvWhT6o1b3GjNNXVPWcn3BZVwwb12J1veN2UGBQYR3fUevfTsdg4LaGNqLHKgUp",
  "key7": "2PUMZmukgcSXzMncSasf3YhLgUMocrDXvm5t5L5ZVTikgTJshxLSbGSi5j8WZnK3PDYVJAHZ3NVgCcrRnCFaouRw",
  "key8": "nzL1qiZudH9FKGSZnntN6VyW3NYKWnj55T5RP2pbPG8NvdcuhX4qu42P3fVp1kLEX6Xi9H7d47JqHPU9yV1roGp",
  "key9": "hg9UXx53M3zStMn5w5pr4VGiC6FbbS8i9CqnmBapAivxR4FX4UYaGp6yMuwzagqy81RCJZ9PhRvYATyrK3YQbCF",
  "key10": "2539u6m9CTMXUcXGBEGwusntRPxQmL6wEmmMAiiYCCnJubpRq7gPS6wdHoei9FAJgZr2ta2gTbk2Q1NApApoWygp",
  "key11": "2deWS9suy2sWxiYdkyc6wtKe6u6H8ANmW6Ykje85AEWw98qyfLYpb8FQZGud2TioQzraY8FJTxPT9Lcy248CVy2B",
  "key12": "2B9zmimayagz4gB8pjVK1DUL98m67U1EjKFjkmALkDwn5mQ8i2dSBLHMUE4CFjoso9djAffkp58yoftMF38cWZJm",
  "key13": "3xFxmqwRoqzEh86EwTqf4iGNjnMAy3T82hN8ZQyMoTYC2oJHhTdMitLSTJ2QgXXfyCL2HNYhQsz4m17hyvFnD8sq",
  "key14": "31EkVRXSN1beXT4jo7KMKKoG6gMZcdRUfzP5SW1VxDYjR7uvj9uKtwWrSExRVcnCfBEHjCD3jrVZHB53ScZVrh86",
  "key15": "3RtbaJ1gKzQBxj9vYHMVXAfTULqHCGkDranzCAroE6pmrYJ5fCW3g1vkgDyAcbwexY23deLWvknd9e31oA3JbP73",
  "key16": "5tYaNrMH8JKRaAmwK31uHhmcx3dDW3Qxc8S745Dmyfd5tZbrcLQmPjxreKZzRecgg6WnQE9TDFpgiC6kzjqt3rsJ",
  "key17": "4MTqJMM67GKHkwv9VXXgQuDnhj1k5ZU6VmtYrbw137LwVaNMAK1RbZRh1bDHnDVDFtcVvHbffxnWYnr1gVn2xwyG",
  "key18": "24ikpxnLgLoX8ffbTpHT1ifG461nPyFs9M2DjnoJ6QEXzJSXy7J36K85LihHtseACv4cDMD4mhfydNUeeWcV5s2r",
  "key19": "SMQUfgXmv145QrZi7cNWzC7CCZWT6ho9JsdPUJvgW8jWVPUqH2RQ9yKCff6qqcLBEAgd8y4T3kndf8G48BKcDMF",
  "key20": "6pEqg8kF34FjCvNQbiETRS5huE81ZozDzqw2jHJFsRcG9fcSgZBtwAYGWr45GXtFiuYiJnj5oSkjhKNLU9cEvyr",
  "key21": "2RXg6QaAtrmcVq6MJp1veVm7pMei869qC5fJjJEgrqKkQKRpboh8MARuxGfc11jSMSH71n2yiJjgVTb5ZtoAkfV2",
  "key22": "7JyVRPL1v5vnontX4TVmXTWhCwAPXwHRPUSZVAbLDkVaSpfSd82cDZRDz2LemEXCgKW7G2LbTwrYisQjZzmmFqk",
  "key23": "23f1wsmG84ToZxwqnxGTCsirKiQuRq7deVdrTmNcUHgY51oE8wTwNb64e2BhefBUhAxEshEAayxRLW6ckNz5Mxuv",
  "key24": "AZEbeMiUA1k4wi2s6sZQuE6z1jFnHXYhtMr5VayoEAmtKwdY6N2fQSH3m8893K7ftbGBBUUcM1kgkJnNCAGnH7j",
  "key25": "5FMh6m17k2kdFS95zSg4omBTtttyXd2Lti7BkL6n9PGwwpCCVkuGEz6zmSvJmzMCcRfope5BqSTZA3JzdxHN3Dk9",
  "key26": "3bGSf9M1hApWfUwamcLueTX8LoNBNCxxdHpL4WDUVd4DGw22jAKeQoCccNb54Xx8GUAB2kLSrnC6TuMCpGawNF13"
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
