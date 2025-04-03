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
    "3UnbfsVZW5G7HRg5zjkwC7KPb2rjcPLXkxCznEUjLjdCFjcdPXSCg7mR2uKoN46n1HatS7gyjRZ94TCRR2QQLJJV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LXp75LmgXALemDir3kYijPcQSskbijXGLUgsikywnHjcWrTwQmuyfuog4b8kCk71JGjVGub9atq2g3NNkT6U7FC",
  "key1": "4wJwv2pkiviGZJmj4qF47dwfhnVwBos5xHnFRoF44pE1Zrkk7vg8jSFopVgyc92UnxAhCBsDvTWhePJMHqo7QKkQ",
  "key2": "4Nmz7dY5uy8QQdaaCjgdVU876qUSxpc4FF33vHvFVUy3DrktnrHSCKk1NiZ2T5JGK15GN9CXzX6RcfCA4BpsqpwQ",
  "key3": "2qmVgU4zm2VDoDE6hxYzGW98wiuEKgpwDRJQazeJHtWnBH1pD6xLJcbwhmJ2uBMPSYHAesNX8aq8thgKG6wPdL4x",
  "key4": "wiGNDFvAxF5nTGG2E6hbBaepBnz4Bw9dbeCKqDzooTcHSpgRPbY6HNrdjPhHbPT9VoTbm3aH1XjLrmCUZNEZpzK",
  "key5": "4c5yJ58RmmzFSSSoTg5hnbHvfGQv66L64BSxPhQ9Zf6UEMdp3umAPmFvveomkHmF1e6XfzMRsS82BYypi8p8pKqT",
  "key6": "5eNPLH5muxEzK5FuXqUzbT5fERikE8PW5ndZJsJriT5JttoiAKLU6wv8yeFX3eGFDBA4vreRU847oEb1Ka71CqwW",
  "key7": "47Ldx2CeHtioGhuHLtPKGhbk2nU5Uai9TMFMAu8Vyz4YfTrQXYopyh3MLjHc44GMSQqXSpbnYXqDDNsZUTFyCRM5",
  "key8": "5Pi1TdABCvDBuWBp4iHPdurPwNa83sLRWWwKyr8aAmR7frtnUgv7MsyQ6mmFk1fRnvaA1UYieq1UFiay7KxyFMRA",
  "key9": "3hTc3CSQDvWucovdCGav2nyMEiyGnaCNe9jeu7zMepAD2QnvMFg3WJjJzchbfuQcytxqJfsqLoyejzeiQVuKBCQ4",
  "key10": "63yJRTXF7sCr26NegWXimZBcCUP2hrmAhT819x47gFGvkGhuBS6g7mFkS7GTwYyuUsX8M82ypmM1UfGmzkQb3Cse",
  "key11": "XAm1AbcDVPiLeCKe9rtNVYJednXJpLch8ZpAwYk1HG8UPudEcSeaoeka9dBbVSZdUa8U2fJfj9eFhTpo1GRnEVu",
  "key12": "YY8DvuMohwPshsJxqmBak1sCoEDefAfBvjapNBnUbDDFWJQ5VSGzPfv3XeqzoKS6YBsqSshn18fqAnTqAMFS73A",
  "key13": "5Z7444XHZppQanijiRsq1SPHJMcdcKyqhuFQNxDZsnYCjsKvqiyfDiNADMnrFw1nzyy6x7WqjBk5FM4Ki3Et7VQ1",
  "key14": "3sYNUsFTmu77StAGzwR19v2ZPmnEqykAtaCFSYP2QaKxcD8rQ515iRdyZwuo39Enq8e1ELpvnb9HAgmwyjwNXXrq",
  "key15": "64iD14TshjRWfijuoNeQrSB9QV5dMrCdXYNRyL2ZPcmSUwJ6gxNsGty1apXUy17fAAKMjAmftEhB4t1LKe8vBwxW",
  "key16": "ePbZB1bZF2gSxKwfUda3vpA8cZCXRRRfPB9ZJDCAWjoCXWNhgMbXxTwnZqU3MW4Wr17M4ETJ6gqwm5XJ9fcG6av",
  "key17": "DSQ6FGvp3QNcjQA5cyjvdyVvjarvCaKgf5hyxvv6VcuoevK8B9HuUrMqYNN52wR82Qe4uftTjveT6ZdtLQ5PfUq",
  "key18": "4yiFMr83m4czWsspuKusg35eUewjmedxfTKF7k44Y1FkFptiadEULuqxES6dXX5yD8EQfWv2QLY2onMFpRduWPVw",
  "key19": "49r4tbJSv9ChziVXsfwgeXdD4BgW6KLj2kjSRFvpJN5ZXgfR356NhejFRoYXXLdiXiQcV2dAuZDEz6dUyMzxZMW1",
  "key20": "2iQJJk1yvVvTQNpbkLX4kQ5rUBzfddddUQUxdebdoX6rU1UADaDaPZg5zXgvtAoXE2cBL5fZLQ33h94LFwfcvP1c",
  "key21": "4tT5Q3oj6d4iAM6Ghe7moy8sTX51TC4aATaYTVL5zyDrJNsRzPJyS1iABEw5exCX6pG25u94YpGyL6eCGiipaiA1",
  "key22": "4XRvLteuG6Xj1aqDfc9DmpBakDPUjtrp5A4EUmFPjnHZSL1jhuSrdKo9LXhpDHuU42dMhzmAfXfzNXNp6CRjeZoJ",
  "key23": "61i9GuaW6Eqo8DPeHScvR91JEGU6ADoceHjrw71qkx2qGa4yh4S4ExviXaNDHeqqhaPQmzHKWkrXBapu6NHKvrv7",
  "key24": "4KXQo2DpmgL22QgjznP2hqvzPTkcs9jy56TTM1zBiQPtcG7ysUpszCuqzmV84VQFCU2kgpFzYHHs8fShWjy7AoAx"
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
