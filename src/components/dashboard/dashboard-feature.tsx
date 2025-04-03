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
    "36QUuGEW9rMj39DP6Km3gw3ELaVzcktgAf93nvPCwv6yFMjwRE1BJ4x1Nx7LGnv5qM6skoA6Am6Pqf7scEUJuLS5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38eGRHWA2GTfmokuYV1yo9YrF8ks2UjfBBx3CZ5qk2RceWsQVarWPExHM4q4j5YiTEez77GW5yoUp7o4vXEcHUZN",
  "key1": "2DzfbGDkAQT4FzBnaDkG3qGDks3jZiXpWFcN9hBoC8X7VEEKpWYxZo2JSxm5wc5CRDkriu3aTxc7fz4LTEeiE9xM",
  "key2": "221LAiF6K2k2JV8zkeDfGkzAUKyqDqh713zcB2FFjcRMrqTWXVZucWbR3dSE5dbhMscBLiEu9uddfg3S4HCuDR4o",
  "key3": "rQnDS4Qfv3MiEwRv63TrjNzCVrr9p4UF83bh9vo3gPbV7LYJuWuPPgSVWq9PssbgnXg9UuzvA8kfu9bLdJVVRKe",
  "key4": "37NKxXVo8SPztCuiAwPpM5ncYzM55QLQgFjJ6ydMEbwCQKUzhTD6e7XkW1Hk1ChUP7V6JaQ7Wt9ByD3m2CKLw8Lw",
  "key5": "59GqMqUMcNHZEMiAwGhmHXqiDHmWWFmn7NeGtB7wNzGMVWaJM6Dux6Gc2AQ4Hhm9dQgjcqJUozJScJJnuMPon737",
  "key6": "4QBMuBU7KwivwPxmj4cPieeJvocLSGwDdvmX3NRGH8WjixeRksHz19iwtH4wthhAT77rsCgq1iBWquWt6h75Bc83",
  "key7": "RcPTxRC5VpwFxBivxUNPtGwWBB5DCfsXFQLPNzjH6P5SkxGU2kxNaFS9n7rtUEjcxttvjTXwzMArrDVwhnKANpw",
  "key8": "34shjDJsAFAhxeqgACSt5TAKf1GNmtq6us3BiVGMXnc6VSWjT4vrEAtnZLcjqBSjWhneJpF1GhQRfetZA6usYenk",
  "key9": "x1xTqpRHu9XMCvPxdGtnharkcw7Tnys9bxFGms3qnyfyvE145CKkctDu9TpBNq3oMnwbpSuYVdfft7QnsxoB6Ge",
  "key10": "TQXfv99Yfwiodw8mkjmqKQUWxmbDRMdjkGx3x2ibP9WJftv9p3D5L6upa6AwMdH38qsETZte56yjw1fDtkaDmNZ",
  "key11": "3wyUw7M9Cpk7417zDzyd4xgvwGaucsiE2aQJZgHn21F1iTRNi196x66rqx9FbKVqiK7PnFGkbkdEvymK2YxMf1Po",
  "key12": "3nmv2SMVCJjRuFfqFWDtQwSMZ7oh26WvA5mEKNbGgMT2i7uEK8J3njVzVxpxtX7V4Sy2YKV4ne5chbsPrb28NRx6",
  "key13": "3oUuRADBFVXwSTPCQprdDRrstJNL3fUdmvpL37RYuRAL91exkkacc6wFYhqLYv2r8cTttDXRpD2xDUZGMRcH7peQ",
  "key14": "4EFjzpABmJhyANTciEMwtbzNyiS2auggNSN3uzbGoUrt6R2RBbLpu4UgTbxJsQXfqkTLo2eXVKAgr5k5nx6yJjfF",
  "key15": "5LNYdPzRsZxWTbvLv9zcT8tsH8R7HzGSyEGN8Z5ocybAxG2UsrcY6NPX4yUwW9YHXj6hdavgxDKsJyTReKiHD8GZ",
  "key16": "3ugpgKBEgRHSCavDL6zVfTsF8fJJwXD9qgDGKRND1Em2Ye4in8ytGhbayUxnvcA6xQapUn8GGDstSjD5HnLe1MYk",
  "key17": "5oWzpuoGrMuyFQfNiRSpgCJcHTtzYKxNGiKyH59XQjwxKxNckN3GhFoVr7vsvZEPRo28ixVE4DhGeVFZHMh6oTm8",
  "key18": "5SjLi4qTgGaXUtF4buiBVLNMDnNR3CvrWMxqfHhkYpoy9bLoFNVDAtJQJEgr3t9n1YTsLMNGvJpdq2ycJfcYwB3U",
  "key19": "cFa3a9KdghcLMvKNk3UqddVfLcFYNTcfNvq9sHkpZze1x54H6wKXJy1pwhiLfFF6E4YtRKGNHVz6syCNXgBcjbg",
  "key20": "4kk8TDmefmRrb9CbDuhSTKGLoR9jGTJriSbuMEcVqaJ8dJHVCQ6QJDGdt3Ha5ytYsK8bcR62ovGCKfbubV5t9qKX",
  "key21": "2yfm6CDZ35rYvXkBzSKAZ8eJ72ie3xH1Tz69ded2gL4BwwWLQZXbV4xdios7CUA3P1SS359Muqjc6B2JRjNXZ3fQ",
  "key22": "4eC4ZA35EmR1NThQX7LjTVYsVLPJxmQCPtWJFWvQVuaUWZ2a2smmh5JcjhfhMQEhhcw5jwRsHqDYw32ood9mZcvv",
  "key23": "3oA5Jxk9RfmHmwSxXrcs6atzcTHNTFnZ3HNAg5ApTnDywtfHWKQdQKvfuY5ho2NaVshpacuarWfe6FpHq1G3xe4h",
  "key24": "Up8zLFGKTVTP9uEHMCjKL8PYBLVUG2uZ2QKR7wMmhFCw4Nwu65aLdTw4u882CbFxHDnDGosan8PSJ1bSY8Grs77",
  "key25": "4U5j1EEBCYzFoLJWZPjgSbXqStYyDFe2hEnDDMrZypqzawppR9XAMmabyU3wtoTBADACWy6YHR2kPuvwXYEnfw6G",
  "key26": "8ZowBw29Qrzz1CxbvuYzhbUo8vcZoMa8743MXFxPmZn9cyskwGkQDZMdqpFSmxtKSH8ovvw3V6Bc345nvaA469Q",
  "key27": "3sGzKLJyQi97FdmeKZMFahFejK8TSo5bH3PkStiKkExQTeuqgftBLYxMZXYoWCs3x9L7Z7eoUWiEYGFqknuab4ub",
  "key28": "39fid7axNcKV7EWzTviRbaoCPkYFzyHgVXDDtmQz6CEFgQNoKkqhkW6zZ27qRbzaK2qsD5bhrgXCyrAiEUxEwwXp",
  "key29": "RxPNWcR9m7Do9DpDhatfd1YJgAt41JMjBGQhSBHF1MMsiv5W9ueSWqZVQv8vee2JNZVv1gpKLf4iLgAX9rcAo8u",
  "key30": "3GZSa2io2cS2uGvkgeCHG7pRVi7pp7J6beQ3rnn4qyeEWGAQWTjRxzyihs3PCqspZZ2rXYcvAMG2Zjws4dUryfJX",
  "key31": "KWjd5RMu63WYbnfvtqCfjB8JzHsN868xKqi2VyvtqUzJoVyBZqgVBxm1rt8q4BkWn2nrfJpA7MMoY3XpcdvG9yy",
  "key32": "EvUwTAdYL4wVMAHGRjW2gqo8rbTypM6Lb2xjND3etgSGL8qQzB6D5qAbec26JFBJeMPAYKemz8mWjUJtLSK2CJX",
  "key33": "2VQQcaGPmZT6sSiFNrBe45ZA1XHTEr1FSLuFsD9NBVCrsNPVFqyaWRFrFWRLuQvgP1peENPgBMS6bvJnujnyiTPD"
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
