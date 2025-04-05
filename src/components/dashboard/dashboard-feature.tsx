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
    "5EDMrue7xsBK2QuuFhAhNn7UvY88HQUWh7w5szniGw3AY42ccPxLG6nnCDWDrpoeag2jykrGVqi3QnuG9Wed5v5H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Hr5xJemKt13XEa2fCVcDXtC5WjrXsjYF3piW69SFxkm4T8u5KNe4kjjWopgKYK1fRjc2xCgtFvMZVg44atjBp25",
  "key1": "2e2Jrw1QzJzrFu8aPc1Hczb4p3JZh7DvoaK4inrYCn58EL77weBeMLykUjCmcCwcXHqUHqjMgyqeYQkDXKhe4bxr",
  "key2": "2MkxG4DuXwtGysp5VH1Urf4hRKsKeU5fogRACfjTjM8xt1GF5WjAJ6TdTdL9fDCJoEHB8P1thX1DAtF8rPFhnwBq",
  "key3": "552mDW9SZ4qZzkArbpMSBPRxLHDpcAh1GSidWifEh54FEm8fL7RxbWmwM7bGxd9mwUXXc7mUWrvUrCTmHfcfd3on",
  "key4": "4DaE3eU7sNu2Tmmp9uoq6LwbokWn49YxkZkS1gJVoQ5KfaMsgXfpXuNjRpiBpkS1gDqLxhizMkc528TrL6z57hTP",
  "key5": "6tEpA5XLTaoTwvVYtnJXqixPVPGHh3cTcfRkGBUkg7pficcJvBq2L98LvbBd4gUA6HyRtNwo9JSDyzzFqpzimES",
  "key6": "4s4oEf5xXT8dZcTpXikPABGWrG6fBHRyRyrpmvEaFEaxwgsPf6C4AE8HkV2Xf3k6GMnSec9ksQBAMNZjWXWx7ZkD",
  "key7": "2uk4pE34cCC1H6L5XhAcD6aYevcC9fJwHKLFYFmPhUGgPna2CnuQHTftmqM8ku7VoZkUcggh6gEmNaNheZ2MSueW",
  "key8": "66mCQ9YTSHEvaNWhUug22o99UZf4crau3wBfnZgiqDEN8yyQMQazH67cESJrZXZcAnJ119PmxKtrtLikd6SCYWo3",
  "key9": "2WFRkyV3ZQh77Mot2tydCkur7ehh3Gzt8RgJociJQJ9yMdnn9roRPu2dGMS482a92r39ihT2JxkMyebcRRTRZAJn",
  "key10": "ADWqFao96YBbG9XJddjexvMGc93E219HWzaeptHEV1ydLGLenxsy87qSdYL2jknWQBJ3eU6KvS3d6E68C2ErW87",
  "key11": "DMUCT9p34cw8EkqGnCrbP4TqmfgtjE4jdb7JUDQPJQ31B31Xk5kWJwNtCE1kESpiC9N1yLfzfSfJgrkcKhUHxno",
  "key12": "4xtyAMZurdKtaZA4YeZYU7V7gUcCqwxPhiN8t4WeHwDgmR3uS6nWs7EEwpFtwR5zr5d4MQCPPZGFQfsAVbE9jt1t",
  "key13": "5J6yGpSP7oKPouVNpcZit92HFcFYh91pGJcaBqZvgksuUk46eBWvbh7oqnJLgBaHhnFv65AoQrwJZtM9kuFbnVRd",
  "key14": "4y9hNpPd54cUBiWXyUPqXN3MjkZcTpM2R8XWetnqn5Rj5iDWZSUUWQbCLhLy3rPJWADRnfK8DR47K2T4bUSCwAJY",
  "key15": "Nhheichg12Kru7UyVKnbTwqRWv4DyiwtMn2xfxSLgXHJmCGPRY9MNdJEaui81zuwFosTnUs4SEMVuNzdKP2XwaP",
  "key16": "32piRjuy34wfuQuxuRhPvm1dST7n28bziKc1CpXEbFH8siyUDWETuXEeGCCqLLw59NCrevHnYjxxpkL5ffPWBac3",
  "key17": "2h8LQEuXB7rRjGFfJFiw4uuEMwnzpp2LuN21oGs2uu2zTgXw4iyEUTkeVzAk7FKTcNTLpEABABRB8pzur5eYYXuQ",
  "key18": "3Z6gQpPUU3SsYbYLLrM6xU187mcbwhRSiMqyQh2arwD6XMtCFubjJxDj2LCjGLCjomE225JKB9Lz9U98Y9rWCPRC",
  "key19": "pY5he7wHRZ15FqfZ4DEjhGeB4WDqJ4oNfRiQuo7w81vqCfjj3xdoUgVkFjBiKwu4aSw6wZNxPKMMdkf79fjimRT",
  "key20": "2HKKALCDK3YiNNRTzXmQY4wf9ofgefbBtm6Cac2A6XhGHxVNEzhRLQbYKpLztHsnDyxf7XwYRkkDHL41FqyrcLUV",
  "key21": "5GW6MBf7eMwkxXXCLsdZYWgCh3XNVVgUZMP5nDquU6KoaQzZVCXZ2YtWwqXFt89HuZyTH9oAjJrpsMV2Yf4aixrw",
  "key22": "2gozrfXhDhEF5YdX19drfnNMqVom7m3bh9nEk7NfKa9vaUgZtctJhqFo5WqygWfNFGXw85qpMvysZHkts2xcjczS",
  "key23": "47kprZUMNKo18Er2kvX1h5DVBHDPGqEQn7jtWm3L2Sbn9pUuqYWG7Ett2YtgvWKtRNXgHPskciW8W9FcfikHutK9",
  "key24": "4EWveWKkpHD1noFHVa77D9a5TCYEkDCXf2kaa8kZyYA4mUUp9xFKfpyDXgXa1xX4CU4otVjuDjSLWLGkmnFGd9yj",
  "key25": "AkDjHYUVBErFZRTji3z1ZUEBourDec7beUfEFiRFSf9wwn26YdUzwZVw2UmuU81wSd94cibo9h9CD19TiBbtjbN"
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
