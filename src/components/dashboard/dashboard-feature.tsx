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
    "sEz737tEJExdjbpnpV4G1iEcQuzh898qV7Z2SHvbrAPrjwBJRk1EdsSZUdnSTxYC2sP6myA8M1NzTTmksttyfu1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kZfSH6TLGBc8AjHwu2MNzdzCF1yAbsw2hyh2dARdBSyuUMzt8HcfYSxeEDYt8e9wtnNiphNBHdmhi3pkbaDjPfa",
  "key1": "1knoDoBz5eTM11xPjjU1aMU7voQZGSZ9Fe2U7hJc1Nfw2zxNw8NNQLkh1xjiouFnh94roqjDw72vvGAisZcK5Xu",
  "key2": "2L8nbPwRMsp1HssH9FS1TaTzDruUqmxLtfGBZ7g6S6B5bVEx6bdh52j5UQ99HrwRwbGZhovqJMPskn7zbiUvz1hh",
  "key3": "5xV69H3J5UhLnqzY5WrSxBjGTyZs31k78JTi35y8xxrWwiDWM1jTwocXznajFZM4JVMfkYdnd1RxcnEv2zatoXYu",
  "key4": "27adJY3CH7zU53WY96Dpp9WzqAmtVZvFVVYUCeVZAxLubLBGfnQtxZF3KAFS5xAEakTzws5D2BHBFPxC1RTejRcq",
  "key5": "KBv54LzAoPNb8o2Szs1fmJ2MekXKo8BwDzEzDifXQfjS9btNYcEeoifAxcPiGkQKsEUK7bQsRyTVZ92y7R3KCDT",
  "key6": "4KnFEYTSnhxMj6jcBhp5bBPtj4Hjj7x7AstFoAHQeTPhSsCd8JvSySDt2yn9DWJtGNuMVdeKYXpCZasALjfd1hxE",
  "key7": "3SqeRYwFM1Ae1HDCKse287NNXE62HeJRorcS93iV6rqZkDDSxtLCCV3VKapnKWE8N2XmHbcMad1qa5uu5nLtgW8B",
  "key8": "64JFujujR7JW2X86a7WZkwJRjYqesNZ37ajKL2h8ae6MchBBX8XAprkyrct9dSUBRmH1g1V296JkP8w9rsrBZftE",
  "key9": "oMZmCPU2oXFpxWKkzzjoT8aSqagkCGQwF4NSnV1E7fvPNh41RrQUtxKT3bhGiTnuWqzzzpj35VyHEdHnRzW2Sp7",
  "key10": "JtqvxLhouTRiaWFE6rxWaWrdpkL2MQ2bjTc4kU3Gp76GDWCXgQEqQqXSiXtUawHFvq3wtWmht8BLcqaqnYXv9dj",
  "key11": "5pUcW2WCBPr7PSy8cY2FjUbAVyV8ndczEJB7zTaLxR6TSkTDV7ZqJyndkwyUHN4591UJnMkwRPi424YhN8RE1TTp",
  "key12": "5FGbnW85KcRb1MFDzdfPTDbmaeaVLsxPFnd6pVbJwyNt4sWxyDjTEuThTEkTytM91HhvqqA16yfSr6HFzxjWHoth",
  "key13": "49RdJbUF43xR3bw5hVCYWPYYcqNUnXrv3k9msfutGqfT17xemE4vzyCt7Ug6J95RA6oDYeTfQv2RQGaKiMrMkF6R",
  "key14": "3G72Dx9BVNUv3uHJ5TjY1JgH1qZktjkNhAQpZqXEx5HcyHoNxtnwVWWWwyTwkysmycKHeEX3WJrP9KRtyda5W9xq",
  "key15": "MtoeQzqU4Dd2XmWCXb7ZrvJCdFhobdQWu5T5p7VdnY7dRHuibt37GLUrPDQ1P52EUspAJF9juhwSz1YvVeoqw3v",
  "key16": "4mHhSVUi36d2sbNYooBhC17kZQQHRhwXEJ1qSYcycg1QEt6oCtczdTJLYnmsSbwRDKc5quJkHdQYYGnPisVmDdWH",
  "key17": "5bUAJsQnmsTwz98fQN11pqv6ZyJBtDQ3ywiCuYPX4sdcVQ5Tkh5BmBtgd1stZaDuZKaWygTK7MT2PkpxUxRd3uet",
  "key18": "67CHkiE4NB3cYxNnhReM7z64jwkdKqGYfdQuExppFdD1K5ov6LkBtZFmZx11y2sLjg5Ku74eUQt3wu4QjbmKVXzS",
  "key19": "3TJ46z9CjR2pEzgyVoLNiCM8CvFAAtCdHpXzrZT3qictHiDaCG47oFfnxNLLZcJge27mmdfTXwLBMYxKTNqPkdwV",
  "key20": "4EspZzbx9bRxcmKWSTQntqwzbT5RgbH7PRjU4rBUM1GqjSphgrdZ6xM9MYrwqN3DR3hrzigmNfoMbqdLWbyYfxic",
  "key21": "3gCRNpLxYeaWVLv1rCQQDBqeRqnu8ppDPS5vBB31nZbznHkYNva1Ya4BNBJrVDGWBdkAwwU1v5cV7k7Jtm7gaL9j",
  "key22": "3CXLQyuN6mUiZvE58ehrUCLcfrUn5SpJkLHvnhrRQEtE9s9Dn9YW316XHMpk1oEUVRKXdyv4WdMDGN8aneosbDYk",
  "key23": "2DHLBnxhPirtKNuYgqAL1CJnNYBhWWej5vebgoU8kuJEzpPQsUMs9kxhy3vEaxJ5u6h9q6EMfixnbVHARZ6dBiWw",
  "key24": "jT2ppU1NT9FHA55hD8JwA7dArdFYNNKhV5Hk3APBPjzYnxHcoczPgyGXukzEwK9ZpaYMrvyGQfQDRUctEkRjztv",
  "key25": "5MeFqcESWU1jDiEpMQFS85oSyuhMAf6WdpnKuuZYngiudAzRTh5Phg6JJb8m3RndiLiCqfKvskhYLphQ1y8UN5Ue",
  "key26": "2cbiQ7N8LpDPGyY9Y3LAKS2ZRjMY4mxhzwDSknR9UBkHgXucYJcqWECGHWFz924otfCXsdqiRVp1arf7f8wEjf8a",
  "key27": "SCtiSjFAy64VkzSeLqGT9wLszpumkdhncLVJWPXzDesp13e8Qs3JJLmkhcsLv4zk9H2CEH7mZea5g2zvtvia6Xy",
  "key28": "3PpQhCWt6vy7eiZQ5zu5y2AhESYnG7d5C282XaqfL2psKCDjPW3Djp3GR4Dje7FN5JC2WaZBefPW6maifxQCxYam",
  "key29": "t4tEvcWuJgXCLJg8m6gbyLY3cTjMK2KfR18x4kgMMNqJvXj3NP4afY5SjwVhQdQHcMFjwveJ33sEFF3eU4REGkS",
  "key30": "5H7eykW27ZWarxUixdNSYdh9gb2sDZRRcy9nEYr3cgEgLorTaE9BRCby7mQZu3jweb7xhWE4oPKKcDSMzzVrwx5H",
  "key31": "rRtjuxfCTz5YqaRU4Y6WnZYs7HEH7jnU4QqP4C9kyN41DBV416WUDyUbqJRQ7B1vwyK6E7sS4mzZDVyH3dAgJCH",
  "key32": "4gPbk7Z6c5CucfVPQKFEjExARsMY9vxkXqXQc6hGVXsXpxHBaR5pC5Msn7C1QuRCZadiiMxFCx8GwaWy8NcTPNPG"
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
