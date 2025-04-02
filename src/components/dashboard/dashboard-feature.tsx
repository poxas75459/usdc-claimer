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
    "5U4n4mQHdJVi9YFd6AcLQGxFzAw8DbCr3vwKsgAEmHQ7egH4UefVgQkS7icuSvGFQ4t9nt2qnZPNaak1kPTgWmpu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NyXr9RfnzdDUTbQoYJJuWsqLtxkXJJdyYapGXEuANdSBMStmqbn5V3KmR6Z8cEf4QYLc4bvCL8iHVMNDfYin4z9",
  "key1": "3DrhX1ur4RDZ8Jbxy2McEKmiYwW1sk66nRYUug89S4N31TepG6Tkxw6ZQ4cVW2mr7BMADVwPnDzZzwEQV1kT4gBZ",
  "key2": "rcHe5kDhH6nUe6dReFN9DWJrkUYMUEjEGr8ZGTqQGuPGJX5KMsRp8wxJdYuiMuubd1KXyeQjNUTVxCyMPTiMJYU",
  "key3": "465n2SHvDJEoxmXQsyqjN9HfozHDcLj3BMqkPeifQfT98yTUvYfS2UYUrUVXbm9wDLXBCMZc4hndPD8HR7NUsoZv",
  "key4": "3i9uwmnjxWjefuUW8aUTPHPvJAKkmR3zdSahQnKUQTrpBdoE3HzURrDG9k9LSb5DtWas8JtNbg24tWWjXyHuAB48",
  "key5": "3A3fvMZSti4WmJp8ZMkpL9neRb5qLtnbKoGKRzRPTr4feX9KyEjmuB7jHDKQpp5tB8jUaJe38wYuEWkZHyVn2nz5",
  "key6": "614ew9gXPkABcUH7VWFiMVuoug1oH7WejdKtHx1wu1W4a844oNeQ9Cpnt8ZnGZDyp9ut572jhAMZuviXZwph3uz3",
  "key7": "4YrUcddWf38SynJ1At3dRzAWMdcvVa4MbqDJJRbCdhcdBBuwJHHENhbneQUjiiV1PZYCfhHLRSFjA4hvmuyYspp5",
  "key8": "5MyhhaHkjb9oyyYwh1xuQfxeuhCXK6i7hkd9c7FrAbKp3u1AqethaYY53arF7fNxHuat7KibQzd7zR5VYto9hybU",
  "key9": "3PBKd2TzQ5KjtQ45JY9DGGf3U89YnE6wu4H2wF6kavXcQzv7dMNuLn72NidpT15g31QVK2eH8fdWswVi37QC3rrH",
  "key10": "37oB8BvsnzSGBiy7dRDydR9U7iZPNJTqYbVPK5FjCAiWr8LR57jywW88ngtmF327oLPaVPMQZK51W6h24uGob5Lz",
  "key11": "2iLXzaQB26FFojefztCq1NcGaRFimkLauGAiDBBnda3e2DAfBAz7aWLTsP7ganeBY2Uptke17xZF1h1gGebRLKhv",
  "key12": "5s4SV4E8PEKiTTSj7k7TYFg2n4op8RwwgyGjaHYNDaqswxtSCoWG9oCtbphpi8bFwmR3e3AWkwtjPa8QMsR9gs75",
  "key13": "Gs6wNrKk54EXkr33mqRNcSB13RP5w5vGx4GPjTNa7PNiiJaZKzxf7v82aCjunDKVVnToc6PcmxE76qLDeBrtKqb",
  "key14": "3uTnRNeDhB53J7ise8iMqGSZsKP5qDdwe92RAH9DFwJA1H6AcbWTVfq1csFgMbwipmb7aq8xSsXpDe2Gt4BysbfF",
  "key15": "EHaKpCPFUCdyYjYbmm8tjmErQhn6LXiMjdiHtzc9YHrbeeiJfZMWDP4hwa3HQs8hW94M3UBdyMeMZ74GQZMtVJ8",
  "key16": "4kcreMQ3LSP6uUH4j7hLstTNN1pqRJv9jEJDHUS9H2Jntgwd6k5pkNEe8b8hkMsaSNv7mQKyHgBjTawdWNN9hrAR",
  "key17": "5aPMHJhTxBMBSxyeWCYPE35eH86EAC5qPfsgnajEobecHcFqxkM45ZDYsndVCFRzZ4hWWyU2zED596Z2JRtFc7Dj",
  "key18": "axD6seCW7qoffHJXZCR6Ajk36SgT1cyL8jrdMxVHdVWknjUTX5Ly7E8bofMEyasxXyh5S1fqsVPAeLkonGy62YW",
  "key19": "3zoXS6cVwKd694kLNEqnqdnhNeKj6BzvSeMGDvHxjFzKSuTsvRe41etcnyXWis2ErsbLuRBvR8f6AyrG41C6nvip",
  "key20": "4jomruRdV74gvCCLcZ4kRVBdTmbL6AYhNwAjziTGLFUrMW2dsB2WTJKhxLJ7frLtoiYgdWNHYFU5eLX2g7EcWW4u",
  "key21": "3XYKufHP8xUUwM6f66Eeyo7EnCNh8qPAhJpCvud8PtjNjAM6P8xV37eqJy4ZMVSwTz6VJdFYJJdtDWfkzcKh7MdX",
  "key22": "9pmJouewwJuGShSQdtNBNW35qRgzKg9usbRbxwui7H1vR581Kz7Qo7vF7dnUGfwS9r6PggSCvp6qsZjkc7chMTd",
  "key23": "CsQ9hbaWtBjL8Sp8gxpXVbEPxnJeT2MLTsqQAHFSuskHRXpBvGQZYtm8ZPuDFcNaW8HxtQPVgrJ8Huv5Q1MueQD",
  "key24": "4gNvPCxwyD7wBCg3fdnEKKnEEhtaA8vLCKRTN4RCkL2BGvoqFypkbTgzuqsQYn3m7xrw7ki72NFbn8g6pmurfewY",
  "key25": "3odEXoVXLEhDuiHdiVYA3VoLtfezY5PJ1kCxh4w868aezN8zZxo5e1S1TghvLdPFpTKxXCDGJXCDm169saHJEkfR",
  "key26": "4Xuq2mroG3UyRExExYyuEVPjvP3Ap3r1CBTqUXEtfEqX47pyqesq1R1ED1dhbH69s1UP7MempWJfmvxM59wvNJgx",
  "key27": "4jnyszTdPKreeXP63xA5zhJEX3hXjeV1udNGy9wNbsvHfJUatsp2fqUGf5UWMXRCDKDSnZM7cL9z2FXJpvrZZBph",
  "key28": "3MCP2RssUJbd5an9PMGtscwjMvz9bQEcLuwgsTnAtDgmDE2FiycsTFGtGixSS22sYZ5WSLbwqsPHVZaqrVbdXBib"
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
