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
    "4Me9JGcsAfmkPzA9EcZYuUmxFiHwQQhxkRVGD23YcrwErfUqNJSC7ABFkr4oFCFQDwnySnL4U3vB14LWNadsBEju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pdsF8Mcy3mqULMiSvr2dzu5DgAodFRBGJvyy65qUYYQ7swCR94q7LhQCaH6Uh7ZQmaLNWh8xMnFFbiwk7oapb3F",
  "key1": "3VkXpPk4CwCYeJvmJBEcvSZefXyH9P9r5c1N7SJz2buJhgCU8jLZoJucuRhxsBtk1HGsHtBGnu44fmykajRHBh2V",
  "key2": "47DCziYeEicTthK6D2ez95ntnwdTjUTyZ888MvY7VE7T3YnKHJZFZ1vjhT88VtumFF7CrG7DF7H88mpJQPMMtnyM",
  "key3": "3nr2rvB9F9k6biMvrpiLjjAZX4F6nkZjj3891cd2yVFPbPW2fYcTYADyFfXVAQgrv82PsPrc36Ri438e9fmqfTEc",
  "key4": "5bPLmwruibnZgRz118cEQcJJuZzHWe7n5vUWMjxygG2YhLEq9jxZFUqJAaB8n4x77DXCspMJXVCbQWJBqY5cEbVw",
  "key5": "2iXUeEuCwTVHcG7zceVV8mebrE5NUkFRGLR2LSJUumXKTesDuokhjvt19NwjsnE2Xet8Dg81CN9dMHBWDDXaie5o",
  "key6": "5zQe8ChAnF2TPQUr3ESy7edotEXGr1jeWqArgo14qMZBvkbnEvJ2nmFsYsUkMa68UkEesT1kTZx16xGDwz4zHfbx",
  "key7": "npXwxj3vTY9NwdmZ9jWhneuuUN368fTMVrnjRpNdpjP2uGjL7PijX2FrGwUCwk4aRbRCKyiJTRbk4fn6MzDrrmW",
  "key8": "2axAbvwrNasidSvLF1JLeSHWEmD8Y6wRt7G58xw4uHqgyckiWiZb27FcdRFzyHEro4p4RSpK4JkPpypVjXGtpveq",
  "key9": "4jUcjQrMdY3v41s6fePBmTvBP3a3DeK2MK3hmhupy4PjC4vU6AeK4Mer2vR6LCUiRJBpCWB3WUhUpitzk5sTYSAH",
  "key10": "2Kg8uXGZc2r5YCXnRJMcmfNehgaoGHkbYyVWuacp1HGMYGCB8vpfMi56DXQYUUFvfuD43jBpjoRQzJPxKYw9KYwo",
  "key11": "4Tp6g8mbs3yGAwT31bfB93uMKFzQ4L8mjuEULSnU7eF22htCkHMiULZow1i5q9KnKxyhCMK872j8WLQdEJHGww4x",
  "key12": "bowDc3tFcZcnuDb3eFqekNNAXVG6ZmwEJ8keFdBNz5hQ2GkJpDvKWGUkFQjJUbjauNygratSzwdEJjuhSU3J1NH",
  "key13": "3h8nMdY1mB8jppEasmEJyhM2n25dkvegCC38xg5a6HppWocUbkTdnhMjnq3mDf56jXAA1SdpNLduo6wzUK4fX9G5",
  "key14": "4Bzf3PfA54WRCJV1WoA58JTKZYRLzS4U8c6VxXFUmoPFWFxzSFPFteE8DhHfd7EJXm4bHf3SaZCNnjzziYnYZpn1",
  "key15": "4mRwXph5gDqTGLEMvPbQgxtWov9DpQcqR7rEDDHu6wozbArhfc3DL1khbeJn4dqunKccFWt9tV7Q1nRvn2oAgnmR",
  "key16": "5u1f5wz55yWcaF9s2SWAeuPS7cBYAfPKwbDk7AzyrrTWhMfR2a95AZp9CgTyjMYoRfZa4MrUvBxRTsfCU66eFLBV",
  "key17": "4Gyf49EMissYS2oCLg479tqdJoi19vavcGev2ndVrtdL4iYYvLKQXJVayzmkP1kg6kHspVxfpucHuC4V9uqCjNPX",
  "key18": "2Dqb5nwRjJL8wbsEvqXMbP5Bs2Au6Knp8DGaQ2g3xweriCwiNAtYQAmPTBZBK4zEP57aLqPcZxB8FpwxR97HAGz4",
  "key19": "3ofBDxN3CHpTB7s1sozBBbLe7P3s3EEDZykssSmaxaYHxvUxcca46pLNZncrJ7KX2QnDejCDtJz4hPbGigruuuqv",
  "key20": "5MhJTvvJw2eQhTPQgVsL85TKiryT27BsH2sVhCHjbumbbmC68JaHergod4MMb9U5fvAqL2yDM6ga5YWuTBtzFJce",
  "key21": "3YBqYBVQ3wvMZD67CTGdJinZDzKreLCPZZEqyBAXk1NvqinZ3ZSkwofLRwMUD5HTtNx9Vxfszqm1gw2Jrh1J2ZTr",
  "key22": "46J6rrJdH9gCeXEddAK6BahWZW5VozBK5EM4xTdYfbgTskJr1USMuqMkiehj4N1ZrJB6pjVoDwCpPPmdeJnQNvLp",
  "key23": "5R96LTHTG5Bo7U6AVRo5u3HrsgzVA8S5ZxGCtrhSKP53PZwAmNbhVPpKzXRv7qCXqo6ztyL9eF3tBdJJsvN9Z3cj",
  "key24": "22zonF68ZJrNytR3dQDDuHXCKamSibM4qmHNiTHyHqzxBzSXdQu4JyVVZt54Vmy6tULC9QXbDBjQtnat3195hnwn",
  "key25": "4s8SKPqbNyuFXiMo4npRschuYBbXBbQ7nE9sYkHFNjuB7kGzpPwJ3Ex6vFTTuunRkSueqr4UU3s9g1VsZbUGWn7z",
  "key26": "3pC5i2yedxv21RSyxzfy1QBH7qACXRGyXLHkesBoqFLY6m2RjBSDt4aHX4KBhS8DY6MdkrxtRTZ5LU4z5Fi9FHUj",
  "key27": "GjXCtefBGdWnrBSGdYhqoBy6rYkjS1woZrS8mEhJiv6P725ezrPPaKBViTYGfzLAoSEpg9poc8yVxV7yMKQ5hs3",
  "key28": "VemN6abxNbKSaVc78qJwySJnvNC8iej1gxhnbhanvChvy8qabN2WzsXFmwbkqTudkfjpzzAUZX1ScyUZ3ayErvS",
  "key29": "56tiThET4f4h1meWfqENakt2iRA2T9PvhruNWnLg2iGYRyB6zrsNNHkVuRaAbX2Qg1Xnh7HjsyNVHNdckzKMmnd2",
  "key30": "58u9BMxRYvjECqmXsisF5PgvpfaRC2nrr6bjM7XgS74mAVNNy8NQmuesLJQNAdWAfVCngdWT32NzbJsCRHGMmq4R",
  "key31": "4NqBqguG5gqkE3UmXURMKgNoNSSVPAqKrh7hptzSZvV6omq1pqNxNfkyi8jKXSN6hS5Z4FhTdFmSoYJe3MeU8e3T"
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
