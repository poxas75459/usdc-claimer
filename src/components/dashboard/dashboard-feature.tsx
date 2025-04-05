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
    "5UdaPFGHq6JQ2T7sGoCRCEgMqoPn7ygwK7aRYySn6QEmmasZkWksXnjiU1ofUXbieannD6TrSMN4ABYfYyuWHPhX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pS8i8Xvs69nVv1aQgHWw1A2poCWaFURyPMPrDAUxknSUGUYvKgzM3cHxmFZDrqh5LXX8Ar5h8HrDjo6sQZ96nUw",
  "key1": "3CEmNhPJw9TMv1P9EJCNf9FxC6UEpa9x24nm94WiLp5QzmbJLW3zZfojVuZ7cu7EjnnC6GcUd4r7qmCFcULvX3iN",
  "key2": "65WdDThADrjyhv1MwfpgbeaHrJkTUxoToKpXyNnHkLmMdph1vGhrHjKJbuuAGKdpb4LjfrtHq71Q3LnJEh1MqpVf",
  "key3": "3C8ruLecyjt9WfAgh1C7rtUErZDxqZQr8cAeGfmpXUm6o3e1XN64Xg4aqV1XXt6c1jMxeT5xLb3Uh8R5sg4JQSPP",
  "key4": "DmYLqbP8LXfTWfQ1y8sYedpyCv2ikdqcJ9bSJkh6P76MyS2FUpa9G8ZrrqixxTSWUUiHT3REiRuqytDELL5BGW5",
  "key5": "25aLXGuzbGq2awpwUuaGdzhXG44u9qe393UuKTTwj9r4kgBApksZKvHFJiQmhhVkbR8wUQhGBohQPdsJZc6LWj33",
  "key6": "2oNsVRF1UB2UVojaTtuzBtKCZNZeBU69hCKnRzmbopK7RPTZX8FfByyKtTDox9CLnkeFmtm7dJqmZJ3C8J5z24K7",
  "key7": "48utZ3SBXfLCUPLZdR4HzeTQhdAJsiZsF59K28yyoyvDMrhHgq16hqrgNvsP1hjp1rYTi7Ut3b2gKKYx6UVEH4MZ",
  "key8": "5eXmfhCKHm1w58e1fkPX4n1bE5azkYxEgCAQvkADNt7urC7hM8AkBsvuwLLtvwGFH1HRx1NFn133bxReUZ8bWtiA",
  "key9": "4YHv182jjxohG39FzvHzvngUXGyNHrjJoBVKKXhrz7uShovvW7G1kaGFARJgPFiWFoLva6bCr9qoRnkZvrvvJ94Z",
  "key10": "ds2Mqngw474wDB4Y1Kq77YonDv3HPnmpWYs8nfW3HkDmC8GDSJHjyGjK42Z63yBQ1vC1Z1BWsoYnrZRArmjA8rV",
  "key11": "5CvGQNHbKaWQy6zRtHuGTQrQD95tNPChHCgbASknR76ZMiCovAEN1bavdUmhCo3498sQYmM55HJ2azQY8U12eKKH",
  "key12": "5e9YRfjcUqrsSYnKFx3EuSvLBoDuRx4FW3PcsYzT5btw3eqTBQh2ab8xX89dhSDDST8tzXrRT57z28dNQxoyQj1u",
  "key13": "2kbdpCFXZwDRLLs1vxXLE9fcdys2tUb3KGLPecJ8iTgdzxQZg5ahZcLPDdvft3vE9XfrvsD6mXM9U1tv3qx2TWKG",
  "key14": "FcDJYkxGC5PWNHgd2Fk9hxavvSNzZXEsy1pfahiTqBbqDNR7JU8PvcrCfNSRFbVYS5GwKkzg5WwpD2LuBNi5jMF",
  "key15": "3Hk9GuEGuycMSm6BhfQ7bQGtmnXv7xNuTzAoxksHThZLpPXhSTUGSTxTbxp3jrPGyUvXcsEjGP95mujpbCxGGX3R",
  "key16": "2s2VmdChSuC776rYhKVdvE7ZYy93cL8cAe2HU86B7koUtnA6qLJSykCShAYVrtMFBodtEuwAr9q1YMVsLFTuwpAY",
  "key17": "5E37hWbi36ryDqMbDaxf3PzJEZDKfp3Nw2tNUEbvYXQTh4vezsNweKij6wHnKzjEJbvqkNEkHm4agNJdD5yZ6GH8",
  "key18": "4qmx29rvvShCczW32cSb1FnXpNWDhBnNuN6DJFgCMphTaZ8VBztwZNEzDDAzXK66mvCzvbCaiTXTvVrSvjCyj28R",
  "key19": "2ykUtNHdGFZHFJiz2eSTFhYcnPjxQKYV9w3gHJwoBQ145jcLxAtB27pJefC9nKF6zhY3VufS6X1cixtCDeW7qyQp",
  "key20": "66wMFEYyecLkNCMfvmkq3RDe5roaRJU2R66AgCvygU9iH56Ev8PfKFpHTrFtK4uZq4ckPUdunwX7trxLE52hiAZy",
  "key21": "3TjUM1jxVU5Mk81mLzVY3FzaqF6RZEi8i9hK6sGKfBZW9KhYA3oAaB58TPGWnNGTX5yjebHkZLYcbUbjjqrrTrh6",
  "key22": "2qYwd46mGQqF1RxFKewYAwntpRDJoZHBXhBPjtzgRo8wUmtVQ2QpvhHtPXArGUxBdq5XuX2GSt3o7bsZdxzT5gU",
  "key23": "5VsFGGKs3pUryHojiYrEL8NGYeSjaxCuqTRvmr4BpApSFtiQDo6qmN6ZLziFDbsdXaTZqJMPNVrQxrYV5VqZJ5tP",
  "key24": "E5nXSLuv9PbehJbLxCa83XDxVnygFbYASk3vaRwQQT8mHnx72Sxj387KwpSEsyTp8s8Hw1YZrmYjpG7vSgU9iFV",
  "key25": "4hVWv1EBmawExGGa1yU6QSA7C8RqP6wAv1LGjqj1FypMEd286bycrsrkizc7GwKmpT1aC4qNhqYhdzcBc4U6zoGY"
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
