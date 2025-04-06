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
    "4bkgJAHodfKp7JKLeAju1KfbHPmUG4vBc81b1GZMQGBki76WsQipBwX6tuTMhhDs9jv82jUermKjnD4frxLDjDqe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "we7Sm8SH3wyWPHQmUCDWwVcEkZZNfUzF9KuaN2AfCiEsybHbod1VekaABPjDDHxHjLTeapxn1E5wVg5cjfXpXfm",
  "key1": "3SfS81epJcTtpArtY7cmd6FvYf57djCghP13mxNC1NpiCCt9zdgeDJeR11SNtWxZbKdEAwE8P3zWfAf1R2sR7hhu",
  "key2": "5rXY2n5nJ55mVfTSs8RTa8W3Q2d3eV9aZkSrAr1C4n3EN3FuXgh4ky95GimvXZ55B7LA9DJbSHku5heDqGzK4ADL",
  "key3": "31BquxzNqTpjHdrenFAg42tZa9xbAxNVao8hoLtQWdc5uqX5LppVLLJx9w2RAfQtXc6k42niwVEN3iZPpBk43Jit",
  "key4": "3ziRUMwvbZ7j6WtbHhVxycf8UfUmM9wuzAgjUdLn4QcfuzAspvML32kix9bk1JZ3enp9S9r6KQYqF7ZD4S25kBj7",
  "key5": "4Ubmz27Nh5eTkYH7na23ueSu6xP7KXJNvLFJcM6kWZCJWuomBCgMoyXcJ14L8xaqkzNUev4bsQeim1qyXYaghCDZ",
  "key6": "YJwRQXkQdhTCbmdd6VbdULqAPgbPH41hESB5ENEVRDMSvXUdshPxwEKZoDWmmWByuaiSheKDe2y9xwjfriCBbXQ",
  "key7": "wJ88V2THALvm6erfTeo3VAMHX3ZUaxou6nQTVGiaQbTr88tVKKGV2sF3KGFA1n82r5ivrw2skGJwm8kuyavmbJH",
  "key8": "4bDqKrXB4HHdyKqaJMWsWBG2DGEnP287oMraJ4jfSGcWZLLAMpqd1KkK68s7KbFYkCYN49ZiyEN7RJeJ8cVR3hst",
  "key9": "5JHxfH1aQV9swoNBvQKAisNWhwG9YhwpEk5wG92cM5DpGZrSrpbPdCtRzWXU73Spsq1kPqEHZ52q38XRyMvPyk12",
  "key10": "3r1L9Q2E4idYHRQ3iUKnCSqKbw6K8ajpJjqVfVSRbadvx2rVuZMNR5fBVsY43MXiMxYesGPjnh39C8b5KRtSyDNN",
  "key11": "6hQ6NDSwqjbsXSziNs3S1T5K2drA7thCYKTrj7gV3dKoejNJERhDumYrzzJu1vCRJHnYiuMjCTZ887wSaQZS85U",
  "key12": "2cxM42wrkcsT92ZyWF3G3aCopBpuvbsQFPHA8iRWqiHkkMhjRB9LQK34U2xYTgMUXLA9xrNKm2rvgnT2PdYGVCrw",
  "key13": "5jZnYd5KnecmGbhiVR5ZbtTcVumsDAr5KQvQQCjzjsH2fLbPzgV7vu2WBQ4e7FP1JSzUknSNVeP5LRTCSopZvWpu",
  "key14": "GW4KJkRV37kbR4SysKniFnRQNjtVoBfvVF7KcdzksFPZuTU2tpMvL3unSTgXT7pn3mEg5XzvaACRWZfYQtVJPok",
  "key15": "3o88fuc3TpXSRzh9Kwpv97zbYJwFeV6QxjTPt9ntGFcj3ve8rjqp8h8MjAPE51DN4uwQ1hLmVZtFpzXtujycJy4S",
  "key16": "rEmwxRgTgmNtFcXHf77vhE2Wmoappb7sqGRBm8fS8ZfTC6ogCcBcRopybxqWjkz8HnqfPPSMbD7VgbbzczJ8bSN",
  "key17": "EQVawtKHtQNHoP6g41RUU7JbTnG8Cq4ZDHargjZZ7RbeCwwARFNNkuLEkQcqJTmex6aHSCBH59bH1drEzjU7X3T",
  "key18": "hX26Mn4cwWDUfFxHv7GLFFjaWBXbw6LWtqDR1NCejESCFMddmNkKg5SQSgNF1iPXysU7ak496iyQW4LKpGMizwN",
  "key19": "2z2sxAxfFBCD346b4rs6EHRWdvpENq2t9LgmSyuXn612TzjGkHQmSot1fGJUe3SWDX6rcNrwaNGjiZz2tKRQ1MSx",
  "key20": "67Zf7PF2iuiX9126XTT4HnXyAppA4pSbekADco63uEGrjmhHcsSCTia3GMar9q7kZSC4DhSaHGgw7w9ZSLS2hhFc",
  "key21": "5bhG6TAcNvXNpBXg7PyL2wU4BVJpzfW3f3YxNHycDJWar6LxgcymH735Q5NVQVonixB1EF2rZbkE86qfPETb2Leq",
  "key22": "5i6wMqEGQNQiWhhWrWrGPx935BouHRQSdsCw6Rxk1jKqZDJwL5AfJpQSJx5ZSDmStLyeMPswz3fhA7qgVRX5KiRA",
  "key23": "4Aoymu8DSSpRJrrYsYEAjSJVjeJLqCk1jABfP4pYdKvaCW15NxRVMT1Zji78Z9qnMiyxdXCP8MNbSppdddF5cLVh",
  "key24": "2dBFksyZBENSXdHHuacUCrciAzZXK6741Zjs3HXmctepX1tGtTqXDvyX9g8mNmSqt2HAvsVupCt53m3VFdTTVuQB",
  "key25": "2QqjYtjBtTjtcuLKJQ2axa9NtsNLuToEaZByzU9N2rePEgmnRAgamzMoMmgpyY9Gw9YofedahHmjfyA9Gk5xgyY3",
  "key26": "5D5YDMWu5iNVMTV5na91scxiZNRXc8hmk81ZiU4Xua95WoR58jhBsVJZEAVRauVZ8KN8bCPz55EPkfhNicAf4XKa",
  "key27": "2Yqm4XKSAtdWKhrZG9JHPCSbjzW3oNwqGgnQD7sYzVE1vs57FzVAkEiKwqbGqPNXM88Xy8XXVBUzYALFrbSs2Wnx",
  "key28": "3HUTDS25MnV9kUDsLVEJMWpJWjvMjknZtvrKvtor8DhzBLNhj6ZPB8yP1aSp2ss3sg5VdLawxuTKnGEHBa9uxw84",
  "key29": "qGQs1s7FDFTHdsyNVMrbsxqyFtVsZbJjaGivYeA1iPm7zZCwVjk23BmdjJX3gqYFXsvthAC6QBxYukt66PRpfXu",
  "key30": "4RGve2AF9WKj4scmJFUA2srVTkx2XwqsVnLgkL1Ym7kSC3jxrk1m5UfbhyLXsDqE4dpRsg3PkKzNixGMbQnWnERP",
  "key31": "ACyraHLLDN61wxeHoC2fPmkA7TmLBUnopE3rsLm9PoGa9NNhvfBKKtjSRwMekJ1SrtaxDCU2k6SHqXdNR7tpWik",
  "key32": "2ev1gnvBLSBNfYYWVJvLpmRqcRuJxKnvSrjAkRBJjB4hgKWA7FsooiE56Tz3W1cmhnua5MJNiXnpE9jwTuAYMZuf",
  "key33": "4zeBA8xJbGJmZ8uJxxjTGaBzEJ7mvCy5cp3P7oJdEZanqEBNMQ5DPehpVF4aE5DGq9tgF9aXc2gBtivodRqk7Ks4"
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
