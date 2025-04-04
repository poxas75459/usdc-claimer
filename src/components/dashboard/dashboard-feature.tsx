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
    "43CdkQEKmVQoReXbQdz7GXN25bGPr4ADYmcKWGGYiPPaqdt9Fd3kg1YcUuCT2Uv5bPnBNQrGng73mCYbYAkourZQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HDSSnH9PYsWvDYCdnBL7npJszF17VvTa5iecGKygYTTH5nkXBUfQ3HEy2UwtMu5LxwKgAAdWD5CP53g2g5R9Lf9",
  "key1": "2T1vJSrGm2MPLMMQi12CK7wfDrkBShD5Jo3U2wRdM2YXBeUFeKgToLo9t3a8vhFhPKJqth2omtQC7khUeaW5HsGW",
  "key2": "63ehrcpAwLDGKmagnRNvirvcNgFYKM1QTzMG2SY1teZtCw3uqkpk5hkChcW51ruNJwKm6EYzJUm4SJ23mLwGcTR1",
  "key3": "4KaBo2CeHWEtRsFhvhkxrYFrJYHxG7f2Tu2ejvBSMYofYW3b8LKcbYPXhMiGY4EGggtq5nwP8j9jDqAx2bHQ6fav",
  "key4": "4URzsiph23aqDcTvz3st3pthD374fWBGYXFF1TbENMyAojFa6DKf3ruZbz7XAAeSfoa6vCHDr26X5XxQtSWNjC2o",
  "key5": "2ju3e9Lsd6MVURRSPsc3U7uoarVijSNkkWFWnZa9WTAaY4uGyqn1g1J62pPwKQX9W7xV52Nkt9PdDHKy3yS38pwJ",
  "key6": "3UwJbJ8wY3bur35e2XSKqXPh2CP6wCxfpQcCtgqCunT8eUfrwa1Cwz2U3re45BczifcRfH3jFoRWiFvaCqeyBzE5",
  "key7": "4MesRai93rbyAkq3r1auqpWdbCS8nhZKfp5VecfLzFWc1JjMBEncBh81ofUCpZrRT5Say2Lqt8rFAvuKht766bLc",
  "key8": "4MdUkgWLGvkAxN646zK4u5Xin3pzncsJMn2LPeFZA4VDddoFr3i7VzwyAENfnEee7rDL7UCzMkRcaCG1mYiQVt3u",
  "key9": "39SKk3885yCzSXqNd9Hr153cnaFvKmnHkCYWYemrjp91f9GxkcLrZXH6mf2tg7B6puPkcPGKQjvHYb7CmtdEoqn2",
  "key10": "3G1Y6VptJ1Yjf6eaxgMD5hev37NyGqs21mbaU9fFB2hYpz5oRZZVXAPvBseecrK6fYMwUuZKUmsutLYfg6NVexUc",
  "key11": "3yxDhXhJxTvVWQeXcgH6WBnBvSdpwqZGGGkfr5FTi8XsDxEzYPBhFR81Ldno4ce7VgCwWAko69msw6RoyknPVrBA",
  "key12": "2hr4bGZeGHdx7S8mg3fMYubhn14sDuMGPgdVDx8pVxadYPhf18VciTxER1ZSMpkYjkhWrZvoZ6HcyCJNJenBhnAN",
  "key13": "2k4AcfmWUnbBshiFrrP6D4V4W3dk1ngTgLbmZpGw6fvGKLS9kEmm9TW4FzUqeV7y78nHrxgwdLCow3wxTMgELBR9",
  "key14": "3HpmUzgnuheorTkefFy2DuGFrTKc9LmjFYwfh3eXTPqoNnC4mzJD3rToFyJaampV87xb9cj6vem6YJJgauoqRXG6",
  "key15": "6CfAYNgZET57y6ewuJGerN2dopspj3ij4EpK1mB57mNz9xa7F8FNp2C17o3HN2ZryXaaT5AFSNNnJxXE7B6sGp7",
  "key16": "3m8BtoaCCQX1suactYzqWPNY73Q7Yt9Nr1gi6Lp39Ce2EZtsuDEAqiDKKKagpUqYnydTYzmNwqMxhvpnWsd1zEeC",
  "key17": "4PWumTfowvJDAX5qhMptTj4XN6J6XXiS6pmPh2YHfoDZ9GrHGxG796jzeXQmxDePjEPgxsmPpC3hpuESaG6fmoEs",
  "key18": "5iqSeWnwTBUK4kfPCWtdnTkutU6bzN1ANdE6mPrW4e1VpFmT8iHHviagJYBsj3snZ6jFajcY6qZowd5V59oA17b6",
  "key19": "5vkTZ1ZGexE5try2qzyWRUqMLh2Nb75oz7NAPvTsCaj8c73WbiV39TEByJULtSwHEdoyf83KuRVUyjyTnHvLHkWE",
  "key20": "4DnwjJrRmwF55h8mZ32ZHJTVJpanj1jc64GyQdEJpLuLk4AEGbMWrSi41Q6xUR4WvmPrf8eSpFuDsEnvJSHNBX4H",
  "key21": "5i8xb2mSRC1uVndDxqmcGmvjhcpQ4ca4yZL9paUfZiKMvpKDAz925HyAnGpW2mmtWe1U1PjBamrZuXdjzX7a5shR",
  "key22": "kb8EPG4LEcZ5NFZkdvz359TzfLfoC2SiiqW9NCZfboq7Hr29ientmETUpMZicBa2crfzLYUFB1r9Dc8kNSGsjUw",
  "key23": "Gu49PeTcQuQHvABnx4yPHwvKTFaFYrNNTnDXLesNgjqjsYLDhY294TUw1iWn6tiW3pKN3wdKDiJz1TLJmPiDmc8",
  "key24": "4p6hX9dTmr2meYicvoKVdkAEzD8kVu4YKPTx536KYfGXdHUQBysepp3PN33SCkm2p2me9XCmyB8YM1PfmcDqEcSS",
  "key25": "3hPQemH4qdUemTEbDuBBd2Av2Y99NkvHt9qbCHyqWYN7AXsg6nYiSPoZh1JtmAw7XjifL1u1wdD6hKGibLMphLuQ",
  "key26": "4fR4oLDWrCf33ukNeRDYFTE9kFjghCvP2gWjsM4Z4utVxHEboMG5nrXWqebegNjxMAqRpzr9UET6NFoc8uxi5ZXH",
  "key27": "k45QTDgyFp7sXkKJzs2xKwW22iW4T6ZWp6jcSnQN9htf4YCJMrXctoYqZAtxtaamAW7PfsgpuCkamVrrpRSCemR",
  "key28": "2GSiH2NsHSSUSg4JGpSTTiYvwrMTGj2eaGAwcyFZB8rifPf6nCU46e4Bx8kFvpQMedp3kkbPbvVe8NsWSji2QRvf",
  "key29": "jd8yrfzyKCdurjKjNtM6oQRrbUQStrbwbQgyaR9H6ToGtJWx6zUAB3GA13gbTeqHDTkoCpZMcc72saADxeGu5jp"
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
