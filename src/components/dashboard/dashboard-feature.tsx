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
    "dGTGVEKQFDvAHyS5BjqM21UajdcPmW5CsQpk5ibXr3MJ2hUacCfED82ke4nh5xjvhtqCeL5tHx8KLgjLEz7EqC8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FaJkB49DKV7Z3NN4XvFZ5PzvCiDkaGdHLiaU8hZ5EK45XHjBiwVcstZhRZcyXZ5eZgecDQX7ndyHAa1tLmQbWes",
  "key1": "CHosqiNSRLz97rnxHAZ6rP34NASC732cLWU18v6oVBmXLkpUcQ6f1xLE8nwfAikybKTacF9nadcFpMwUYYd1Xgt",
  "key2": "37P8GmjNiKTaiG92YiaErYtRhvfHpwAJfv9H8cV395FZsMQkpdqarA7UbZ9o9aRW7sfMNsnQjMPEwokT9W55decJ",
  "key3": "4dJKVGiRu1VaM1HRGENUHkYGQsMt22sxQ1RK3NrN4JqyKaQJGxnziweJaTwHJixFma5cAjcAd9V3GYcDqWLALXqq",
  "key4": "2gaMsLmbtVhbLdrZEy5ZesvxCc8oK3aa9GpmvE6CWEaFRqUnBvX22SrKjHiW2aAnYvP69WG2v1xNso6LjJNxeUQZ",
  "key5": "GBqNtmmov7UCF1a4zkvRyohs5YfYZwYdejtADpvePeMuDNkTLrMJ4sd6QdWZYcqLcK5uj3L7uy2zZjoHmYLEGYX",
  "key6": "JgCmPPh5NahTBAX4REyWpzgiVskfxvqa5yPVTaJGbiB6USK6pRGtGeGVH5PNx78Krg9pkjHak6STXvjok8u4ZHK",
  "key7": "3G2ba8zcU5CAm7SF7ns6DTLQqFhVKESfLKbp4EY5HCPQy1cajRB7apXpnyMbwJNuPfynZZCcJfTnUtZv2ApADGJ6",
  "key8": "3FMfNF1YpnEkNcTjvEijr7BsFWWMDTK3BF7qJv9ns9op3SKstT7xKeS3DMxtFtkR9mZMzNqeevxko7EMdSWGraWC",
  "key9": "63tVcvgEEbpkp9mSiFEfrro1gcWrEkTXNhhKAsBFmseYGJYHzDBmprYCtN14FgAQMYA2ZHKR3NXivt1ksBwC6fKX",
  "key10": "33dJRwU64p5ZUS6yBDE6BUdiaWHaXL3Lwz6bR6Y51RNgXcFyYFrTP1gRWrJt5W5ziyJtsVoMwk3t6SZ23dZn5tEQ",
  "key11": "29QxRQtcJacMHWNhW7ybN9jTY72j3Cd8CBXzVJvvtdpQ9ktCFpPKM34UFXL7hCZ5irsf5c1X3HsyA7c7ngwm59vb",
  "key12": "36Y534AeRjXQjwYixeSbFksVpLxZomopMourdzoE2Db5ZUNMBWChJNq6A78n6HkfQi1khLqYQjE9aA8rFH87nDEb",
  "key13": "4cfRFkYcWkCQ6DxKsEv4yu7djST6nyC67WRBkSfDhFc1hCHbLh7bvJpC6X5PQXNPQK1mCR1yLUDL2QZaz159mP8o",
  "key14": "3hE54fJWqYox5AFWEn1xrqNSnZndc6P9WuYBnPfZUKVDCimCgCiQEYjyvjYu4erDDvnAzzkEMbtoiRkWvG9SiJWJ",
  "key15": "4yiEwjipda5eYvz5qwgFRzX3bimaG2yTUe5nucvTM4XNScBmbzCnu3RaLsz1hCJNksor9FsJe3j11EKnHgtSuXN5",
  "key16": "3aQYcqz1Xw8o35pUV7iAWH6ynFnPSsTpuU3KjtrSiqquLgbDzs71ArXq9eZ5NgAwybiYXHcTFpRwdfsdMfDJ7QYd",
  "key17": "2V5A5uwiqm1GPPsc83Ziv6RTVBgKhDevnt3eaAL7RtJz57FBUGqoAZf14P9QLgjmBiteaYCrFvqXZSNq8cVyQJTf",
  "key18": "2yRmo3vV7d2bdiAn8dugT5tpJPTxdDWZVDTiuE3X4i1ibUu8UuoBBGjzhp3pQPgx8S4Noq4uEL434xL2pfqBHmme",
  "key19": "5Cx4umBJVkzqu7B43iZsdTAryeuHYMHreVC11a6LPMc8g8JA5NeGM81qrsGGVyKCc6ji9XpFmGSz8KAU8Hstwqjc",
  "key20": "3siMJ83jmcqNcrYPAum1mFF96eM4CUdbfSovKkfJUbQMnu1WP8Po11h9mJxADKt5hrMkvxnQq3xzCdeP2keXrW3x",
  "key21": "3Vb88eg4MCrh54SJbNPgEe3CbK1v35EP5Zfr4MCjCifNMFVR9eqLCLkB4Xpbj1fqicFVLkpdSXFwgEiqdo66FiTG",
  "key22": "4pRJH2HyAQYxSB38H1Ssxa3swraJ9BdGmjDkqWdsrned5pK4zDFtdASQHaT1iKV3wBTTz5v83Z4mvBtMDevZaEPN",
  "key23": "3ZJLXaQN8Ajbo2BVgeYQv1XqPp6vpAc6JathLp1MNs4upg5MmwWVcqXjht5V4WUPB4QuxPv2Qw4dotQqv7cLeFFA",
  "key24": "43HV7zAVVmt27XkmUEFfL98d7RLjRddC5sfaekEiSz1P1QFHebdd7Zr3psM1aJp7Zq476zYTLnbQSFd1b9wFshnt",
  "key25": "UZf9QVrZ6MnMsErUim6ehGjtPjqX9pwhVTTsW7cC8K64vSx2Wkf8wq21gqjPMo9Ks52G2vwhjhTSXuD6nFZ83Cf"
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
