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
    "5BoVRCgkS24B28EGLBPmk6xdMesqNMzDLMfPx3XrR15Joq5qq56qVNsXLjKxvN7AjYjy768VABYTt7ygzPj8RrtM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eKE1AGJnQf9eKCVm4Xof8uXp32mLTWw9v1WHdQSRq2JQHo3tYic4kYeTjQgLRuvXd5ZJBpr3EHBXRrGyBGVprGE",
  "key1": "2hDwarnFG1KbWNQz26DnBXqtWGcRQoCrTtQXyBg8vNZdBWsXonoSuHYEWxquCwxQ1UixFkkTgXPwvrATrcvx7HuV",
  "key2": "2RdnYodwwyZwhDkVXLE5SiAkjzyuMe1QeKCSny75YktJNj8L8wKpujDj1uP6Fri8oMz4CDwjsxCKst5GKcapApAH",
  "key3": "2UrZrwagVrVKdUKVf28q97JwC7tMaHS46xfHVPrR6CYP9z7Qu5FsJsh1QQwP9Psydycr3DfNePyCD96EwsyfTWth",
  "key4": "42nZCqnWBMywJXGG9aV1Qav9AVqGGY4ztyiDfVPXzY2W4be2pLn4pG3nutoy48H1AyqTxMZ6LHqFxZTKDKGWcvnd",
  "key5": "mq4bBjFxPW25uU9qLJuQEsf48uLBEgbd2VY5z9KSCN1tG4YvuR36ocfSgD5XcFmtPLVMyNgAkvjzF18XXqXtKBa",
  "key6": "3KM1T6DVKPs9xM4xrs8MspKWpRomCN8Kbk7yCokmuQtu4T2gvnk11tmfcvVWBobtoex8a7mYCJuD2iaQEvpgtFh3",
  "key7": "TJKYixNbnYDJSPZVUFnRuYkCkTWF2vwCHwFiHCBysjb33oM7b8KoNtywXkoFf52dmghBTbtridcsVG3s32SKxfx",
  "key8": "5U2ftphT24YrxCPnPGHy6tj28P4rGwu4y59EFAMbNGN8qCkNrq62GZn1TdhiuSJWKR6uHP54LAWfK7AfJXmQKdLm",
  "key9": "4rd2ow9vaRWa9cnVokFocjc1DTw5pz6e3o7rRH7wkmeeochEgAWQTD4Fm83Wb3fkC3Kj4qXogpB2F8yG5wr1v7gS",
  "key10": "4skJ1cE2jtPtCicicjc5seYLUEEJqejBc7GQfDnbkF96i2Jf4ZV8yTSr6X38jE8wQbB4HKrrT6XpCo5SqiKZN6BP",
  "key11": "4ZqpVEjwfJSzhxpA2xvGMixyh4nfa2LkUkUVfFVM8vbg6G1xtyVXJ5jejFo2ZgwR1eG2J1PrYPYyhYHjpdmDU9Tx",
  "key12": "2kb8aRH91nJ1J11NozwnFNnDw7rvSSWZ7aBuB9VoJiApMJH1DeW8XJCJfB3bxWxbBGjrXfhaZ5DRDn2GYNhNAKtL",
  "key13": "iA3LFYLYb7EsGokW4bcMEGX2a1jgo8BV41vBkVkVJwLwXTVmPZpy7FmhbF9dXrZp6A9e4Jf6wRrNTFEii6Wvdmv",
  "key14": "2ChN2pi1zuDsubDcU1fmzC1UsgBCbUQFwrCJ8NaVrJK88LbqpasuPe7SAHZ8KfbS6BkRjvD31bkVe6Eajc6rTzhT",
  "key15": "2zN2CuXz2AyYeBZNBWeK9HqDSukNApoDWhWkenwk2Cd2oFEPDbsE1PE4gnev2TkqYuLBi87Uqp36DRrqjhSJMTwD",
  "key16": "3xAY2PV4zK81RWhMyZRaALDnCQXmaLkYS3A5eXNUn1zWBNAMtnu17ajecGaNFjjkbS5SNBra4GajAXi72GKX69T5",
  "key17": "46pBgZMisC4Y1m5mVHKNnzenAzxvE9LrKyUqGDpJtjagn9yveWA54tvAk8QpWx5A5CCPSeqFnVo6StapFGBnWDEh",
  "key18": "5j4yU5NAhVhoXM8vJbKiLR52osusH4W9t2vGGbi3gvXJJd4L7AuFAUY5mttDmmBjvpBJJwWWbnB5QhsJZVVrpqJ8",
  "key19": "GCPesPAG3vR4v7JxzewgqkCGMLHykDQxKn33CjaUhuGHCp4mJDz2HDqLyQkCtiBqpweQrKJWYyK1mtXEtm3hJ1P",
  "key20": "yJ6vCbh6WtsTL5ZwYHFqEZpcArgeVoMeHvmVEhM5i3RBibFM6UTBGkQwj8PL7JuJX8FYJk1TeZU2ymGgUo1fewj",
  "key21": "63mZkLrH7uYxv7aAzw2fHNJHWKnEzAD7EyNRiH54d1TzDHAb9xv5PaR9S3fQzuVRNBA5qyF3zCzgyRV1Czu6TyC2",
  "key22": "HQPX4x57z4pPvyiUU1i5jgaFhWYT2GpZbq48odsK4K7ubVreUFLUfuPMQAWmwYnssngwuCTrj78zPDEaKE93J64",
  "key23": "4SXeDPHsUxSGbx7DfZfgbaBtKT9kNfAe47pxqAUVFZNNWjrtntvKvPBJz3JSQQaH7BwiMvqac1xNviQ7RboL5PVW",
  "key24": "23BaPqD9gBm8KsPnxAcXpYwhBATTccr9igodGarBBYpAS18Mn1SKapDCUzFKCb9e9WTLkydf6pPHCVky1hT6VGqL",
  "key25": "3Ldz9qLo9u9pB4h4SVZmgCrXMR451yLqjWiiYXEgnqg3Sf2M5XkXcuwj1V16rjBJQnWwtx2aC8JSeHjGnKF9EV65",
  "key26": "5BzA3jSW1BYhUuYXewFb7KAyt73s1UkK1TgMoisNo5Gv3REZFE1rcgy3XGDhpmv4FChXcyN9q3Ri91qKc852XD2d",
  "key27": "ijcgtozjSQushZoGJbVZKxc2ynREBHqxntjCRy7ZvNp9jK5fG1pjjiZuq32N682bRs1ANeCGFf6749LujJpXvbB"
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
