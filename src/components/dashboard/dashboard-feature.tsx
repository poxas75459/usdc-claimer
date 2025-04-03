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
    "4rjLSR3NA7NtkmYSGC83fzisLnxqHSdkAWBqwq7vd8Mz1nKaiusQvPdtYW6MpRQUeZgBw5egyxtcbhTZKdFgfqWo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HV7CxwnryjhGASymajJunwvbDGe5HQ4Vg2y4x4PcEhp4UU6N364SBLaTJTRFTxfyhMpd6JG1kSNL9QuzkkBhcrf",
  "key1": "5JBpLHxPsvnGKCUvvmj78GYuBSoqP8KdSQcb2dkNz41uEkV6vMNXqkGWrD62xRsPj8ctRdZLVQ8KFHQ1CHAerUNc",
  "key2": "5GTMqK2V2dg6CWQQFBzRBWA94rXoeiYz3jczrtZTQ9KEVhnsMfRrcEru68fAohcqAY9ZyNmRWinsVczoCjCHmwJx",
  "key3": "5ka9dwn6kohfM996V64TXdcHMyZxjNYwSSMQc5mLdHYpzcE5TrzTL8MNNxReY4PAGJNXNLhNj2EwVJJZeADbAgRe",
  "key4": "1Qs49rs9oeXn648jGKK3AJfMmbnuVJ3EJ5J2Sy9fGBopVDLmE1vf5hU7YeQkG1m6MmTpMgNK3Tmd2D3zEW1CLNj",
  "key5": "5UgsXX2gW9cZ8CkPEs2BBU4goBtRKy4HxGYMsS3Mmpv2pwVo3V84Mc5cXEyJJGgdLnqUCVossNFcNBmZgouewKRQ",
  "key6": "5bzGgw7x7My2em8mAmeHNUQedB9UqtSfseejYJUtrnHfx4pvy6j4AagxL2Xw5trrp7M8Dqf9KQzSgr7YjH8K5CNa",
  "key7": "3UrWFSapKxmy2XZFVXFLwmVRWoWCuBun7N248TCw2PPJTcXf6dKRQ3xCwRfMqvKSGzMttWShkmDMAnf8FANhqh5j",
  "key8": "onxJokC1jWrQjChrPGoJJpMyJoGY94sgTyRx5HCwDYB3Rp5Fha9CDZfuKxcPZEpqEAGQoNMHqpna4xqtcrhtjv8",
  "key9": "459eKhufBPBBgZycpthiVJgUug6WsgCCjSoGpa2Vv6pxuDynEPZ6qSJCZ8KFczSc6JKyRWShxVCPAjPrnRsv879G",
  "key10": "2TcMVZ6xbypc9t3srgxA9HEDAAiw47H6ZASSH1L78pRyQy8cLajtcHbL7zrnvfQaJjBTS3NJKVDTqw6twYxTdcQC",
  "key11": "58rYUi6t4DuYZmDLcopbvWS7q82A8LPQDJz4ZXmSGYfKRCTL5VZpL4FGj5f4B7Qj9V27bg5tAFNWi998RiFwL9Dn",
  "key12": "5Hwphpf2EgULPmX9nuauZeYoeDCpQxGGaxbCdnXV1wBRZEFwBqifEhALhqTirqE9GgZfnJxyJJBEYK6xhVmWa8yT",
  "key13": "5Vufn8yDt52Maq81hg85uLAuTwMxMC46MDcMNFV1aGDaqLjjS8Nx97yja6r8wYqRo9HMAhFraERLEYzG49ehvvrC",
  "key14": "3nMrqEPSqsx5tjt7ePvBY7tYSw2w1RJqpvFg3nNmfFutccFCsmUcvFcSt8tW3E4BnJim3pJEp6913RiucxpdKhTd",
  "key15": "5K1CjyKTVuHXwt9WE4peWVWsNYJz786PxvfYHb2aRhoYqhRCXowT7udSF2uPuKfpvbpzfjvdpzxoRSd3urEtubtW",
  "key16": "4ESqVrsEGhLq7VJC7oHJ6Uh7nWAmcyihf2N14SVczkJiYvjqZ2rPTEK9fqswmrM26vrNf6M9bAMDhfKLvJYrGNq8",
  "key17": "3V9Dci2YV4q281FNKHE9QnAXdj2tsyEWBwtn8fvGuRng8jWamE2Fq3kFXKihjLUUxXhQMz7qAmEL3xFxGzutHuRE",
  "key18": "3mjsjNxsCWdWdooWocEmKC8tumhN2X9YdrKLKdgoDwYcJAE7mudCDu9NnHVwmcsh8v69FVZAivcBiAkgcWAvCyXT",
  "key19": "4MrFsmNpTes5Din5NsvGkgxun1owPiNpzRoDV7VWQAH3bp56MeabcsuSYm2UKwpntHS5AgS4eboydw9LBVL2Kdyh",
  "key20": "5g7k83T1iE1YK2AAdwEh25dSnB6w9pQ9cXJGriA6fnMU9w2e73ByccBjwL5QNJagLsPuuvfC62wXSP9KzsoAN1q5",
  "key21": "3L1Ceeez81EH59biqz1VXymMMCmJcZMR8qAX8Tye9h4e6zJg13MytNL7fZjRrCSWKuFvQgHeQnwKq5dzXz4FQzqt",
  "key22": "39J1Mf2K3QCgckuYtTE8xJ9GNMYcPasSVBQTRmdQeoezZvf86pYeLjYW2FXjiQoapnkPBHMseGjMKmzJfZX2YXVc",
  "key23": "4rcfSPZSRzxPmmdnX4RFhDmcq51SuQkcEdQsYtMwF7UNogzTexUgzdPuvR5JsyHoNm4DehQGfVvczQ5XE2afkJh",
  "key24": "4FVPVJaaBKFsdKTJYvBTFs4VyRmq3mbf4UwKVayx6cNtsupQuo7mfdYb1gmRpzeUEKVUkobgnVpkrAtUaknzXpCV",
  "key25": "3DsBoh7kjNXD6aSLG64GzWDV7XZYWmAY16tRXTWVcJHeYQempjvvFjvUyFwQvCSZarwXnbuFkxEiYELxCMXT47AS",
  "key26": "2A3nPLao2Vgn1nKrS1s6ZbXzJYR2JGvBe2DWHyQ1ocCrZ8C3no4PPDpR2ZsXJxHJUykXA6Hc7j5scLAg1KW4DNza",
  "key27": "5xRELWErWrBE7S4oKbV8JrYb1QYvAXpnCZNsfgkBoCKrj2eXYbis8eGdxGjygvPQMy3cLu3s6XsJHMns7EHMp9yB",
  "key28": "ZUkUuknwaDRQUVSrTzmYN6w8AyCD7iyppcLcyJNjWceVBKqm5rnknrywzvws7GEGNPB4Wqtvku5qoCQgvwwELhe"
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
