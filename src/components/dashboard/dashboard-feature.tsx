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
    "2wfgQqMQF3fwoyaAiMC8q9dw7SuLAqL2AZYrhnFgpYA9VoSGSfESomSs4TN8xzm5Xb3QxKxVtU6Fvkytr4tBXXk1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2afuZCPhZLNJd28TFuS6iaXv4iMv21cQ7VzfiMBoET3ATxTgBgcjBpV2Ji2tZoF549RoYTKKTDUZuvqtDsuuynqp",
  "key1": "42ardYzm7Z9NskQdsRxNHsaMPFreSRq9Hca4N8Lh8WjXQgfootehE3uyRz2JKPoAu9mVhWGsGDhKN846KrtWQCcW",
  "key2": "xaAyiv15sRWzSj2Zxh58t4s2E8e9BX2FVaQ3nbo1Ps5nEDH4xKSunBPTqZgo45tHLCWesKGUfKvgPEpGJtidJum",
  "key3": "67WxpnRMi1xNQEkLv2Ejw9ZZkhLwvx8MdYDqmastdfqFKpGgh7eqrRs7843vAGWkcUdDUbhq8nmk54tzzwxVLofA",
  "key4": "5QBQxnS8Chu63QJ8kaGaN4QsqfKjyocxXX6uY3gDTZP2T6x1kC8sjLXHifQYQocWDrK1PPpSNdiBCp7ZEsuSCtLm",
  "key5": "UaSvPm3j8qZxbWx1PG9KJrFYMj6SVtia69xV4YvUHeLEmTmPEW8i3vnof1thWWBk2ty1oSwsSZMhkYBvJ2t1XSy",
  "key6": "24z4PhbL6AL9bDipyZxzu9cbgF6sPXsB6wUQMgohNNPvYPV7K66MXMNrt5eXYQhp6BdC1dpDkXp7vWsfvAsHkCwF",
  "key7": "4FTNTg2k7x6DTFKedZdEQEhmMzWt7rJuUHMWgJ5PfWGL1jPLrp7nzQsjUDcR69v7dfNuk3qWucTrUF98WDW5zX3Z",
  "key8": "5hq5AZGzbi9ZfiCW1CxYiZRftn3S2Kww1HbxNv1A1ApAFzoMJjw3qZZAXL7rUgpFrPH6VEWMc36nRZ63zckxVJ8Y",
  "key9": "3B796WbwC7FHedWxdGybFvHEYapvcfELHHGhg22xqDrJjCghQHBtWp5pDZRvL4eJ9LHgcjHD9ayxnV4X59J4SDZj",
  "key10": "4GwkGq3idymAHxH3gfuY37Sx3uUXcVTv8XArLLCW1PfegB3wUud18eSqhXNjmJHi4as7ot1MqHHf1uTXknxunGUB",
  "key11": "4X9sUwRjth1KVuwVvA6xx34SdrqUYy7KnxTNmrXipbhiohJnRuhqyYAcQ9Ph45qQLYk6F2wVkvwNpAvGKFnCz3gz",
  "key12": "4iSXWZzHAaj5f6LQHUa19ha9HbNtL9rLJVcuueHswEVH3VGnjW8TcRnY2KXcJW4zeShVwgSbByqcewQYP5u4JvMN",
  "key13": "25CVaiKhSuQq3jyowibjBnsxsTm4v9MDJzsrGgZqiMHAhW4opRTznKBQoVbCxYuv9BEmqqpE4wiztNgx4sUCkqKm",
  "key14": "3L1dQeJ4YL1dqmrQ19QBHaiKmCPgp4wfYTjRp6cZN8sriRW5ErqnDc6BoLCBzf97RWBDMMxdaAh5jupmSvyHd2C4",
  "key15": "2gBVy8jGvxDjUgR8rAYFPghr55A7rDMVgAjg9ZdZpiKd7SbYCshR42gT8LzVefbedpVrDUsExMrkjGXnfHtfmf3W",
  "key16": "4XXc1oJMK7VJs2UBRpkWrn5sECdT6jaShAMQeDhA3AKsjpDoBSSHgC31ogiVwjo9TKYDKQySQAUNhNBeSDEnqhJt",
  "key17": "3HCeZNhc2Sen2S48QQKAnyr11u1S2hViEAop7MZQNPyMJYpUBKM3Snan8B23Ce9gv3X7yfsV6PoyEhfvWSSopxb4",
  "key18": "zGSWJt64eSyp8jcQqRHZucLXpALPDzWsjvupCcmRLrc8deoQ3wRWzDfC3a4EcTPkyPJkjWiBrpNpPuaELXXtdBv",
  "key19": "5ARh8ZJASrESpjCuP2Mw8gC5rHP4dKUEP4b14pNxMrTmcFHdmbKe8CC33umW2SwsiSBNGiZBDQvxuJkY6xxcyXtV",
  "key20": "2x2f6sLsC7hfPKBbrcP8tmAi2FzmSMRweM8AhKEZi1cSHro2P8NUXDNypsp6Sb3AB1mmVUofRnyfSQUABg6FVQbg",
  "key21": "6SSVrkgN4hoUFBdWKcTAb3MNSZkJybNZkB19Gnk5a8CdEn6S18ZYfDosQuP9WDtD4UWsyLEqsWMQy3YLKge19fk",
  "key22": "2fZEcY51Gru8m5eGmyEJzpkTU5x6eEGafxCYvLcfZD171dkRJ76druY9J3NfDYzNR741LMtihicTDF2QK62whHpD",
  "key23": "4sojm92cen5KnqCxedF8nDoqV6oe5jeBmM2hRXNzx2PYHyo79kDtghwx5eCcL916gET7dEkherNBtN2Q5UWZ97x3",
  "key24": "3JJuNRCLMLVQm8hQiXMq7HNpKZmnCxyLHvRWPxvKFdNf6tyctH58QQrmnin8LRTZ7ZjQzNFY8zegSJe3iBh3cph7",
  "key25": "2R98Djuge8pr6wiELuan9VGJGGLVk59Ze6SkUWQmt6aGUnFz2cZET5SUtneuab3P6kYpLfSooB36CRdzAmaxwrke",
  "key26": "umGavfx1uckdFzgsPkMLHEW5PDAnr9usKXRTJn9qgfksLg9T1NjKHrY51mDVS8yQnHbKcm8bsStTYSGa3ZYPWWH",
  "key27": "2hzUGsUxQ6qinWgGocVH2KgTthob4rMrpkKxBD8EnnPqyKuk5uoktJGch9nBycyzJQmprqahEaVB7V3FZbFyrhwt",
  "key28": "3dwhduSVFJMScMaK13c9w55ux3YBFfXjWSRAxgMX8JKEZqWMy8JZhUY9SYk4svJxppvu7bfUfW34Zo7AYVwi1jcf",
  "key29": "2SuE5Bvcqj6dUnEG843C1Z5vkTJorCq8G3G9hkvJeJY5pPYfnh9mKY8enoPRcdS7tVFAk1bXoeHA1EYkTrzS7FEv",
  "key30": "oHsZqc7XoNCccxUUtMSLijs6sDtPhUAzKYF8kLeiZfoUaXxN8hERPJLG2BgUa8ZE3pjuUZ317MzEoywqcHtW5is",
  "key31": "4zxWzQp78X8Eb1A82DaN2mJxz273YSeFxP3qHCkdKx3bTz7HNPCjnGqdpA4RGcrgXFj7BNc3NYrTbNyD2EfZNyWm",
  "key32": "4iFdCgv1JGPPZjuVJJ3BbfvUiv5sVc6p3yrgHHWvtCYCEMYM7i2BYPCWgT8pQcVT7Y5VV51CHfWyJbn7kU3ZdjXL",
  "key33": "34TCESSz3BU9dymqRi4eWE9SUxnuq1pUzw9Mm6Gq5VY2pAawPrXaBk99FKXvBAU5QK3WWskBKK4ypc1kZyKcoams",
  "key34": "eU2PLBrQjEDHu3z3Dmq6mVE5PKQaBpx4uVEESCTgy8Mnqp53oX3dbkJnPeShfvFD8k48GNvN3zBFHzKPFasdrER",
  "key35": "fH7rVU8x9UM1Umkcmcrk5qZ9UzNjH3A5s6HSKQqToLQWV728XwhjsSPKctQ9NmiLNqF98tNGDKi7Tqo9fhSJ8F3",
  "key36": "2jmg5wmjdmtXQA9nWCdmqZyskgSiDE3SQTGEJsBGBW8opHSt3ZyK5xUGBSeJrRc7XW1SHEPG7EJudsA6HTDarn8i",
  "key37": "8iT75do9A92duHo35tQQ9sgtsxipo2UR81RNwjxYZLshDekzFXtkpDAS5D4KfTuKNeArENfgcpw2ZgnhZkSPkxz",
  "key38": "53K1WqjFfWRvLhUXZq9Gtuf6i3KYmmJ64jfQBP5b4zPMEtQDdpNQEY5TLhKXGsoHmUwiu4pBcVNcfpLN5tFzdhAg",
  "key39": "Deiu5fRWDkdY1gBPhLLvWPeMjHzuuytK238ShUyt9Cb2wD7rnpJiUNc6QZXDRxwf2dXGtzRAcWd9HoFEmZzUHku",
  "key40": "2ap9K97W4bn6eHiP9CkF9MwhnYojqFvkY5F1fuySnecwXPyiy4vmE3RAStV7jxJ5MqRaFbJQ3mDkBtmhx6yrsQCJ",
  "key41": "2FYXHEr6qE5dHNvRWiiW3pS69mKDTwD9TmCtjvqG8Pa9mZbR4FVavqTgCH3CnoWtcADNEKDrWozzLFRQ8jDu3Z5X",
  "key42": "5aXBJvzwN4ZjQ4NZvwkPf5S9PCWHKp7deEKTdd1h7jhiDEBR9xB6ELtzzt6pGXCBXrrtxE79MMfvkXEw1wwkQusx",
  "key43": "2Qp3wLgQhTi1wCT7JzWbwfgAeRQKh8w6eeE9p2N6geCDMEAzP5QqfyMSLYNcXQwrBVuverK1uoLrGsoHLSQyRouG"
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
