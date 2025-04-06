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
    "29vqBCQcoo4CKn9hHJs4NVRVcU43sXANqB5L2NzNWqEZC8Ctx7nEk8SVKCjFFKmv3SaTv1NuBDdtRi28WvjvZMcg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DLc6iR1pipasYj5hxQhQEdhtRyUqCpKpGHD15fcZ17XMxVHLv6cWTXeLc1eE5yd47w4y7EZugHDvtQqfvNenLzo",
  "key1": "CuauB8Bg7B3wMFts1hs14GnjPUs92XhtMBwyuUv2vTDJXGvT3cnVBrYd6q8rshEz3JaRKeqhWgMwu6yfvgeQ41N",
  "key2": "5bzZi2v9FMUvyymSRtoK4HCmgbXeWEvBe3GbwtmWU2ajQ4kw2RwcQ2gyJNxRnTjLWSprWg2FARvygbM6DnnLBquF",
  "key3": "XGD14GePaDjzzn9G1DMZS9yjDXbmnPb3tV98FhQfgfWJzb226KwuQopwMTv1C98ti9ekWBwLnQoYDReHqZG9t3U",
  "key4": "672Qxk7QFjPAUfzcETKQR7SCbszsctpXCQru4LDQoMaB5fT2nsk1jHLfXtV3JqFpYERev63VKpvyMLkgoh21B3CU",
  "key5": "4fsiJkFxvaeeCfqFqPscjQutiRkyTzDqmAWYjFP6jZAQprekC9LcvJyLzqTzoGWjGBuE9VMiXFrWvJWT1kDJVfCV",
  "key6": "PYNj2iy69TbZ7yj5XthY9LdtgdQjVhEHNDWfTvWJnTFxCGCpEo1xwbNVK2rjeKPsWSLYgBMAjYcgrjXtoTZPobm",
  "key7": "3mKxvLgvsHPgLRmvumUB4AYv8DKR3bAMJ7y65g9rQGH65j2p2RCdmu1cKjyQZKaKgFDAaT3Qu513HVkZ1VFVV5sw",
  "key8": "3hhwQWq2MtdxrjaPz8r2qcEasjK1ohH6vQFnTEJpeEdVEXHe8rrPwsoEAd34d4AeRozfap2gzcHggNapnaxHbEWL",
  "key9": "4JYFFQQaWjSgKJTqPPru7JDueHThypRdkFZvjTEL282nDvspHVcr9exkUSEfxjZWWETMSvZU1E7Lhbgfo3V1EFXK",
  "key10": "RhrFSCt5uywgMqBGWMZk7nZXrqs8egggKu57GCDxCiELCJUDTdqx8SCEb5CtRTf3p82ia1q4aTKgGyJrjgioHpU",
  "key11": "MqeTHoWfRNEgDzggWwHRRXnSNYjYBPJjYmsKjNMDxDGdodhxB79VUC2kamoaiBg3n4RrPHehqZSg4FjHa3XPSnv",
  "key12": "4XxFmChya8E6dzaoVvL4BWXByUqamLfNKeMk7fHghkYyJVKgt7pfd3rPUmNYTknvwcZdGvv8ctBGktq2YkDnANSY",
  "key13": "6CtJaMWHNdhSwsLwpuSBgW91UMvn9TrypxkqNQdNv7paxWRgwUUATP7e6mVc5Bnj9TmUjenu9QdErTTZzWLfeWb",
  "key14": "5d7zeQhrhcLoUhpWrp4JDh1ViuwyvqNXfU18DcjMjADtqsirocFZ6AKsBaXehoPk4Vavf71ztWqbW21NKvThej9g",
  "key15": "2zb1M8QayuNXJ2aBahuEreUwvMyQao5NYtrvurpX3DVZSTkyEUhec7diqyT9UQHQeVhKwP6Cj73BD9vuPsimofUy",
  "key16": "Z41ewGppj4tnufcq2fN7JfoUytfy4bUVBkqScVPAEvyQ74peAH8jfyNCPGzLoWMWwhb1Nqn72cE8tj8QsA2Sqwg",
  "key17": "61Sm1r5jHJb3uCGWxa7RzU3nj4EGUt4Lz5vjtg1m7ThGHW6ckRYYMkwDePePhZsBuYQsar9fekm9JNXpwzxxCbRN",
  "key18": "64Ea8AyFLEo1FaADzR57X8HmFjbkfHsp7VVUkYBzXVTc6WhiiFdxL54vNY691MerdGUBmhzYSuGvEpUmuqEMx5yi",
  "key19": "29yeTP8Wy9AdRUoZqagMwS1Dt46HzBDYQjT67kLrWoZpYVPeyRhGta37De7N96HRcw7Jt1hmjhRXH9BAwtxNLfbd",
  "key20": "64GpomfSLTBCfUDYCGj4CVPov2gxmXaimcmsoatvYhfencFCAwxLGtG6q9Q3BKP4v6TmLwx1SpN84WVXyPMeLHm6",
  "key21": "CEyA6yP4KchkZdDBZN7iWyqMVn258KGEyz6XJyxjQQyiKiCpDzoApcXkr52k9BgKs5o5RrJypX8inBDbg28JeLR",
  "key22": "2TJSBkTjzWTtTYXSxGz8AvzeZ4QyMtKjCW4Ah11qnA23Gb5Q9maJMgDLq5gsSNvXHX4xztrZtR8B9butoBo8i1ZG",
  "key23": "2pp43WrymjTPYf78s2X5ijQvjgjdoKbpqnuqQgUuwM9Q2WCLwRrAMdDXq7BF8sJCWhanHHcGeypg2EtBG9Ws46CJ",
  "key24": "2xsThif64Tthrhzm8CsfcGyj4fy4y7Yq9JbtasyH5HQohqC9CHgsSG2VMeFRqkRicyG78Urq2zjfRNPP83X7X7U8",
  "key25": "LKLHNyeWfYUfDW7khDe5ua5pVWzypcPuH6VjZLdVaVwpDmFA8aSdxufPEwvCjc8fMEPPQrx8zExHwUQNqXNvz8D"
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
