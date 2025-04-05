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
    "3UmPxTCJX2myBLLpUxdsm4GSrRrP38dsw9AGiV1p3GCdbDoQwCKukqkBk9CFZrddqt12ujm1pbRYqnshkzXkG5rR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QSJXpunhBycCc9mJsWiqccNTfAnkKcMZtB132jVfrU6EPAwTgNwLjCDmbEMCLX39GKBo9RBSbdvV651hJRJZgyv",
  "key1": "2qU1vAsAXrp9mNvbrdcRPpm3NmnDGUG3DYWD4WL6J6okghw167b1p1CowV2bvZwx1cajKhBaiCFh64UXFhNB19iw",
  "key2": "TkowxYccnorMPWvMF9VEwkJurM7xzSm5khv83X6T9p18TquyZ9GiU2nhojGCePZfoMn3CHXqzoXu6PXra2L4cey",
  "key3": "CX6urXVPU1Er2GVS5fiJCbUD2DjMErNWjvYDNBHJ5G3nCZyYptgdVXUDi6Z2JExMWUoL9H4dzCe9uWFoJbbfmnr",
  "key4": "4bNxPtbTSW8wxArQmorAedHeihxXfT1VdCMy5b5onFSPYEPWnvigASri5Q93azEznZjk3ViGKherjqPt4cmodqdu",
  "key5": "5zdyobz9cauM7rT3nMmkMRnQ2qaBfzNC1U3CqUXVwv6QVwFpmc2Syhc5W6QMPsPYXGKbm9QBW4qnTuh5fRkFph2X",
  "key6": "2WSKZh6A2tVKkCmHRKwJuFpASDq9iAP8xvLHdKbx4cbGxDBdbiYsnhYcuw1sK1SLj5LGLoxAD8qQPitLeWkHnEDx",
  "key7": "5xcuijSQu2a9TRQpCZKapz9YStHNHR1EGzPYvqFtXKgW238HwdcMis3D8tvyPVrF2gQDSruCD9vRNo17EtCc5Jzo",
  "key8": "tpCZg3eG3FiFdG6er91rF5WVavQRL6T3v2b2uGcdcLtR2PCjLfz3vnuAYdkTxnPGtS9ixQsjwBCYrT25jjmXPrD",
  "key9": "354Uy7Exoi3ewjT26SWyWSXr2CJetpSd9L1PTSRD8H3faS9Z5MdUaiAy2LfgZKRMQcLYeVJ2P9zpHrhNACLNZu3z",
  "key10": "66aRZy6CDba96iPZaUeTcvYRMY3gBRT3kcJnid3HUV1nCixCsEr7gvGzW4uQZ9YnJeyv3j8Asg8LJg9bPsUPzYmP",
  "key11": "5fhq3q53arfkETmhnUMhW9r52hwySikqiEjX6wdNg8QxkRsvwx7y8j3XdyDRAcxNbEuaP5TmiZ6xpS66eqfCCfqx",
  "key12": "3SreCkToP2vio5EhWRQ8coWWVmecQUV4B6Fq18FCWQoknjJnMJHAVtgd9Me1KZGkiFgnRBpbdg77eFULrC3exi5f",
  "key13": "4GnmbNJBpVWFRwwuoXniwf9nvt4wv3UQzXuC5b2shsrVaUcYkXsywmHjKB6eWHsZo6SYVtU7EcsdZwAQCBooxiGm",
  "key14": "22G4nCcgQeEn8ta5wKqNf5GbJfGnwWVwe98gon8b3kLMZ1edpGEqP2ku4GAemXQBt5Qyd87NigpZnXTTbXhpv1gk",
  "key15": "CGsiHQiEt1U6Dfu7zQPgqYsdzj6ecRn8i28ikrqMSRj3BKQk7RWVgvA91eiVJkfcB3BYxrZVL2han3WNg76uHKt",
  "key16": "LkYqU4ifX6LptCxf66ji1UVVSrHPDdgyoUAiU8arCyVahaNk53sqJGMQwwpxKRSpC5UQZr8923ZDbtCTqypc6QB",
  "key17": "5PwY8H92ZFwCDLxWtwmnw5dEud9A9tpPQGdp3Xhkz31gz685tE4FuQGyx1fZ82VA38sJ8cTAvqQFsosz5Rv2givw",
  "key18": "376hPyDU5dBFioSdHcrRJR2vDr9ktrheK96yeuySJbAWzpJ4MfBd3ktBxFy6eBfbsCyaCLnun9ZXEwmcUMwAoRAv",
  "key19": "5cWn8Xa9JsAjhYgobxMgnnakoRGtubokNEKJ4k6mQEExpipexAWPhLNBLL5VBXQtjGk9aZxCKLUYrr1smVAhYEYc",
  "key20": "4igHno7H77R1gy685iwkgdbU4a3aGVdbihZADujqToCJN6mbd4JeNu6vi6iHaoNGy429GzyTZqimPMQCnLpuYmwv",
  "key21": "4PSQXGurHdtkFkPKy1L87fbKYWjNX31cX8nQXFjDTn7RSJxvBRwaAugHepHVSJVFUCTunmMTL8hhqkyUqoLdYJS8",
  "key22": "3Eiojso8u7ndyikAWkdepWKM3YGdesnAh1EDj9kbdGyYywmTp2p6L4akRRXNE4uqmGBhZyqLfAZftF3UfZ8SfeAz",
  "key23": "TnePXHSY8eYJa1prmHyeebjX9DYHM9iPpEoGgPWjR7MX4dTtB52dwKCJSk6HKT3dwffPt4TqMriKT9FZE2vs36x",
  "key24": "Q3p8pakgwXpUncmuZMCxtS3V3A59u9xX4BJcrAkRx1iyZSK8KmBmkP6BmB9voZFX837UPfifoDA88VaQTf3JctY"
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
