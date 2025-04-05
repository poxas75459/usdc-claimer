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
    "5LH2p3s2i2EuzdBTRdUss7wmeKw8y6DHjmWCz81yF3kWc48QD1AFmDapieqgPvQfW6cjA9gYh49g74uBPrXQmUWT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48VsTX9kqUoQPGDXGRpFR6t1tAa9Xp5Kxo987DHeu2pTmiuP1Csmjkmugtd5Wju2SVgB8BYHojzCMeGoVqV2d83G",
  "key1": "2rp8qTrcE2BAq4fas4ZbHA4MmEyeRiNWvao5KuvX2418CSVLiNqDDENXVrA5igaxMtPhMkGqGDZnT8mrJQyiJE9W",
  "key2": "262eG17NffjbQNQ2q1V9cn2MCz9t5nz5SjxViNdvcydc18FqbhpFCQUNPzcPrfnmiRWxcjJKhqAfD7Z2syMg73Rk",
  "key3": "42TYij8A91WxjqWP8hFKhZPA4CCkk6xCVrnP7rb1ecPVjWX754tfbuzd22WahuQELrPcYAbjuJPbwjQXHbzn6eTR",
  "key4": "4ewLiCpr4jptaQyuSsAuQWzVxnNTuBMeG2Uugnt1xHSNzArdyg94zMvKECiTY6d1mPvciHYK3m8M7jkW3ysxgFxA",
  "key5": "5gviXMFXDUo38pfvbwbsKVv35vswpvQR3reX3j2RzEbWKkyHYsNLiVQ6PujEYFrNXMy4ZRfUQLoEA615onHR2BFX",
  "key6": "vwbvNSBt2U5KVEp3o1HBY7dnXVzqdute5ZBVVM4Rk9muSNib2Lr7VHUGX11LT7EvgpCR2FET7F77J6jBtwrhebP",
  "key7": "h3dq5EkfTEeHHoFVzDhxMktdhGQuf2g5NNxgDQPpVCDBxPBkFvKBGSJ2E5Woof45YWdTETTppdyyAGeHknn1pMB",
  "key8": "64iYz2wwLFbu1RTjA42wQ4dCMFHrsWryRKW2bXwiwP9s8HeUpk7ZAAeFgAXRketLN1WS3WguvpfTDANNqiTygjgd",
  "key9": "ZPxyiAa8bti97A5jE39TvG8ksuU944rewY3k3PPBM7VFbumsccMXc7FzCXLdbjAEEub954R94YpvRJqj7sgdDtC",
  "key10": "3kzD4oMigsK4BkDYeqj3UvDamjnv8D1G6bmFxzisWKyHEb5p9eHeFT8GuXSeypoRWn8LTgoJGHSZAj9zW4FRKPBU",
  "key11": "zWFbJFCXxnzxDm7CZppj4LwhNkxewb2KAW5tfrmVxeRHGpMgnTGp9uspKohEtoxcMtAErw9SWA9rWpaoqn4cpUJ",
  "key12": "5qZ4bkk3t7EwBxWbm9iNyMBX3NFQSfAoUuaZNHP4xLZdq51a1oVSDfptYgDbFXyfvZfp8ULMmos9h5ru681UEjZK",
  "key13": "4aqvs4CrCEJYs6WzVMwRbdur22aagVTUYDdknUow8vQo9szEj7fXj69J7Hgrit5WLzUsetjff8WbvdrkcAwfKmeu",
  "key14": "3ME7Ep8r5uK9QLzYRcK7kA9swX6LheUAoXMoVRDvDzEc8tmVjbSRuF9uT8ZJ3F5hLCYdjp4pVS5uGgTPvWQ5qQLm",
  "key15": "woKfxB324HfjkuUgomwA2hwqo7To9QRC5kKYA7YpEhbeSMhfZhGqpQz4tL7afDhLkve7AmqhRUNvqn6TzREEfKV",
  "key16": "4EUQAYfqTyebCpgNeFDYnbMVsj1587CDyzuDNYQwaUNbWf6Hz2Xaj3gyLc8vwG6DrsebqXQeXHWrVpJz9uXwwhHU",
  "key17": "4tEvPAoqvnBWj6V5ozsooEuDUc9Qb92bPGzejqPEWToheUxHFRXSNCBTetUCqnWQdcCTiTrFux5ibsjbVbzj7wLc",
  "key18": "QJzGiLA3ZEQF6Zt5jD6xvRge7WbwbgRDCv6qJWfbKi1qLobtNFrNybVSkc2mCfSjdhaLkJU7J6neak784Qg59Rc",
  "key19": "2ab5zLyzdFSXgcjXDVCkuAGaTNXG9NVeurLZHKK5HjyFVczds5c8MaiiJAqJUPY79oBS9XjVKy98vEaLamTzK7qE",
  "key20": "28Fcwg7gAAaMdARTFxnqiR5iLpxRUoUqJLAbimkmkTWRgqmPiQ8xyG6JtTDHnHuj4T7qGSZfAbNUEqfwtXbAqxBK",
  "key21": "4xLLmqNVGgv9cnddhJnz3BVBsLL3HVEAaHP9qRdTLp2CXDS4LMDeTnu5wCWWyTELxrTnwL95DSbAKZFJohrYKSHQ",
  "key22": "LThy7KZphsHUsL5ek32DwFBcHBFKwMqb1GaT8SVHirGw3uK8dBu5atgDtEYmjMnyMpgj2ULnD4SpCK2z3VNQSvV",
  "key23": "5d6UytLs7hjNHaEXu9GXKr2wVSPpPF9Bsc89ss5RtN61ndD7FCy8ypdmnHkzwba5B2T6ZZBtVfvGx8eTWchNNEDH",
  "key24": "5eQy4eKKd2jAZhKyZQZKNPVqgbHhGta8SuVnqNZ3rw5p1B4A7Bbf5b4vL44X3PbQiJZREcpsfFFghSrrXX45BFNt",
  "key25": "3TrrE4tRj9am7Wo2eRxy9CUAU9hqqL5Nu1hbg2q8kiG5tbpvndRtyuPeNY37XcoPDHdnrAcv5GW3a7jqYiT6Xv4L",
  "key26": "61fRAjGvACJ2FJ2F9FSqsvaUTztN2qDWQzZhfNXoHsmR7XsRw2rSsgAZTiTtYAwNQWW5LoQA7p9osArZ4hC5f82J",
  "key27": "yz5wTxNwtAYDtQH29CeLEtU8aMs7WnZkxdJGN8MEiyRc7b3Fcu45z6ha1UNRfipv7zVK8sGobwxpWKG5EqBCJLm",
  "key28": "43UPph6qTCio9wgRsTJDyeqP2mh5J31bCJD4nVLFpMbEtS7sWVvLjtqVVpKrWBGBmiweqFisK5ZZwYgKde8FJFpi",
  "key29": "3m116WrPVKUoUZnCZY6R9eVSmwxYGnMnqt3znndsiqhiAs7VfeMYSaiSnwY8azksnvdPsWp97sYLEus3TNhayPrV",
  "key30": "5R2TQLKVwFH6qyf8WYLks5wGdqoBPzC26iRporksrGNWna39rFK2nt2sb9rgtmtzL3pzfuyWZP29Ps7S5zdorKUH",
  "key31": "4PB9PE5ghxwzynkMmK7vcuw3qWAVMV9CaNhxYrF5RYmYGFbYj9pC7JLdoqxgtAcsQ5NvMJRDF3Na5ATujbxEsnL",
  "key32": "4crsfTGzTGctHVxjxwfSzPeR1Bbb9gkieFv212vwKViFBr5gdWmgMNmvXDCD7YgJEvkGLQTu1sbDtRceNY1wNrJy",
  "key33": "5uAZRJjMX236qwUXpgdHUKrnbFefu98TnAksF3NH1kjdgha573RYfjUAz9rbBF4v2ph3vbdQ9CXnwoSiRFU4qbCY",
  "key34": "3eczQKYFbt4ZWjZnUd76KLDuDUMnAxpJC82c6ydHjJQkwUASupgzVL397b8FMjN3x9E2E5ZZowjACaovnCU4revw",
  "key35": "2xejH7DKAppgvnajc4nTSV33HJLcFA4LxB9nGqbUs1vVXGJ8k3CTAzCJzYBEK1DyLEVdQwD3muD4PVMYpktmDVzf",
  "key36": "SM71Qa55z3DjzmuCASVtrRgq1bmCq6h6Z6gHFSc1k1unk1fcCJGrYa4EqL7J6BsHbJmRNpczSj1U9RLSwDugr9J",
  "key37": "4i2MNHzDkFBjxXQP1zutQ6DSn8yXxvXKbhSBLWXUx9UCeKqiHNVmVxP2oSkUYQ3MDgJnbT1eito62Zh7Ag7Y72fi"
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
