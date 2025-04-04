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
    "ahDSuJq5ks12tSCAY3eFqE6vFF9TMN1wysnBsZG12bwPFE6qAXf7inKQegaGeY2xBiYp2rfyWT6cpySAufJWu7J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XfmdXVt6qTAG61eYU5ngBnxXJrvdthpbVBmH6k6BuwiicCCEHttKhURPsHNdg5HPCrVKBUh46EJXwa6toUMt21b",
  "key1": "2GU6JMR9TfbfsC5EPSFGnR9zsYdgQhZzZ9gGWDwErPNEhnS7xRdVHzmq1hVoTS1P5ar3FyvbxJEwJN8qvwNcncz9",
  "key2": "3G3NLqF45dpSz27MhNHVqQaMrPLKz26FEFuXnYBisukx9cTYMAdU8mBdVYx7yU4bnZzGRBi8RyCSiWCMFy1xtDdA",
  "key3": "63JoV6EuALRHmAaEYu3MCAbKakBkinn1LsmVBAiJxVreJ7sPY7uwnRQ594m55hzELxwyvpL8Eccqr3Y21p1TsSyK",
  "key4": "ZgV3fZKuQ64xekRgXajv8Bgxm7VaHAQC12FNpxCktJfTqcRL86H3tGWJ1RAkhb67Ss2URtmd5B1wytCdnb9ezmP",
  "key5": "5LzjCWCynxNnYNZJoehueaGX2kmXNqT664SyuzcFz2T9MzyUnUCS1s3tVpqAe8VMKh2MBi3HfRybcHxX4oNtdQbe",
  "key6": "4Db6JkfowLoxzuwEY87MYWqo4KkeMhPh3g8WwYYcAVTdxMLqiF6ZNuxtrHNBDvaX8SK4a3bEJkNchB71ha24Ey2k",
  "key7": "3BGm5A6MZ2Qj5kFG689iDf9UEhpUziKoHdtCK2bxwgnXX4KUpDJEWKQiHP83TUWKXqaSRQrMMaFQ7Mkbi9hQo599",
  "key8": "4W2yAZ5TgXe1fyo2xczXTEvQy3yvayLFueKWS5MfdkzGCwWNwgq8v4jcZRb5YausZVQSCRUntnd73QiHZfsRUPpY",
  "key9": "38nJqv8G9ZfxAeSyXXX7C2VNyVhuULnJdn4kR5mYCrjaN3H1hjmiBKmyqj2sNT12LzUuBGffSg2Q7GGPekGDzMcB",
  "key10": "2ia6UZKEDqjRAjXJy8ZpyiAGx7qJYAR31X1cWNGBEinWRCYM8JSY6STUqmxopVkVRCCSDssgRVJ6yAa6FEoMvYFH",
  "key11": "37aVfv8zFxbRnPAN4tTHwex1EaWbej3AJTBNJ5oX6PYgRcA9w2CfWKfVHd7mcwfJv3KYihUfjEKUEhDXv67biZNr",
  "key12": "3D3jBRpvKutCvs4XCxiLyTcKEpLKj6hk5QZRUKWKkNrF4rRRjkyupNSXEWCcS8naVygTVhpxmgrnrixbs9TVXuoH",
  "key13": "5qms1YTworNc3kGB9VdvmsHY7aBqAySHEazwepjLouTNDdwgagQhHfZjHzRJ7Nu8ML4p2py8eveAYMJrRQFRezp5",
  "key14": "2m6JhgbAmr9dMGXMhDAfLpEaUVqHdGLSdEhxZ6bR7ZeshSo4xrGY3rHeV5j9vyBfvqmGhsJfQALo89YQWyszPs29",
  "key15": "3M4PDHPtH5RjUcFXknXWB2Zj1A8agzM5jBxS7dqHsCkDQvatM9W9wd11oqZzNqwsDdcCnJ5DMJ34H6gySfQXkKZK",
  "key16": "5XyaZtpQexuQSq251TzFHwzc8tZ6gcLa59pqj3vToSBY4yWeU1AexnnozrAvXnFtyGAJX3JavQvknx9ZhHvXL3kc",
  "key17": "NSGojqFyFg8RLtEstqReDu7sNba7yaLKVQGfnwHf5y3LzJbLupZ5srdERQ39rSh3jJgzhRsnAjNRCGNcMebBfY8",
  "key18": "65riuZmSDhsYDRAEm7hRAwBiQ4yVxRj7JTosNgS1uv1zWUT4NQNYhGMLG6wK6NRZZcuj613dNw1qFLs9BbKVc6zy",
  "key19": "252zb3SvZSfrwSZifvCN5G6GW3w9Nu16a1ib1ihHN7DGmT4W6skrLmjWXghD4mqsmALJawG8QLYmoheaedbas7H8",
  "key20": "5ci2N2GxBHHRmWzpRj4qmwZK7pSZ4CuMTgWpsiiCxmtSnDBbntSQGZZdWCCQU2xGcjXSKAUfFKgJt63h7D86vwfM",
  "key21": "3GtJdq4i2vaooPVXc1vbJvuNovcFKCEK5mFs82JC5GRK89mGcMRHrYUfsT2rAX5nqEKHMVXznrApJ6ZL9Ko8oMq2",
  "key22": "27rfhZfTpiBuMrEYcJXzofCtpxL25NMrvzRxZHnyMLPYStsRY63rGVjj1u7ks7fw21LzRxjetNE938ov4o4PrE2M",
  "key23": "4JaSYTCRogX96jhbDrpJxmqHFcXTeJGsaZQTw3VvpJSjZBou8fzGvnH8Dfgw6NDwkJF3wkvxxjS5YK3TvMaJxazt",
  "key24": "4fuWDQL64rAcmsCsr24rnCKJgHVuCZX8kv2qW1qtZrbAuhEHmukueXKg2gL145ssCUPkgndaUhtSUbkFgiLp5pkA",
  "key25": "5REtAFpGyFWCS6d6Wej4mTR2vYUaekPQ6LgQrsekMKPjUcFsvYtjuvn2xfsY2brHGRWcpuijGTnyrHq3BMSjr9vi",
  "key26": "LTN79jneRB5JTjqBJT89SV4wxLYHkzPyQo3r1xUzb1x7XGrsig9gBozyGsXB2puuaSUNdA9RHbqCQKjoSteAVsa",
  "key27": "5orAFvpQiWcMiLU7UZLRtRDuMjwqCEtEg4bRhmMZ3fEWGoCSYv8Y9w5J5kHoJgKrSdY6NN5Vcp8y3vsn7jVMbH1C",
  "key28": "3kooLbctULHQpuJd1zW8besYKz5gCkzwd3QTgdxwbmvrAdhvfmKiDRtcjCnxoMxKdEc52Up4X9PuGc8yMB2wSQQt",
  "key29": "49aM2VPFwENKWtmaqd8mKcEdvrpr5X7F4c4tBWpwxLjYJExUjp68Y2CxsmdYALj7hVj4ypWey4sXAJzKwB7j4nGt",
  "key30": "2w8k6D1AxXjcE2BXNMJcJukfrox8482X4A1vdgUapKNtjB7zGPaYXrjkHes596ogarkxGpLyFkxfTg8nKMT3g46L",
  "key31": "53mtnwA8ExDW3kynmHAaYM3QxwsoSreBZ7g9WuGnZAQrKAfybjrHSATrRvSg8LqbLmtG3kuYvwX9CDPvU1BdokSq",
  "key32": "GhxVvWM5iwnmnMkgVZRJp83aV8PHgvGgAgcZ8wQhPfV2F9h7xod59Zs4nVDuGsiQcPHp9fDn3rF8hLFdxWhDgyx",
  "key33": "27KU5efmnhocEhsCmds1bJXRXvdsSfEK7U1PAoj11u25wzUgtovwNot6GnS4DB33NsEdLLxJp4jezEAkVkdCxb35",
  "key34": "42PwyhVxRSKnZHeyZEGCA9NyGGTr7XDgyxCuW6s8fmoRzsAvZnpp9n1Hmv2mF4GV2yBkixiFTWh5obD4ZiGhZUCX",
  "key35": "3c6L6bSugWzz5nhtuzFiT1aDgzDMwzRnNHv9KNf55v5xcTzyrJaf6LuWfRUP6KABgjdCvHCTFEqcrHEqEj1SuzG",
  "key36": "5EffpKcbmRgqQGGwHUgp4SwCsq6JxuN9tLPZvwEKsWfgF1ZTmcUxDQZyV1nhv4SuHVgwKdVCZWXn2YkG63VLsSGN",
  "key37": "4myWtCMcriD8wZsXwZaSd1pgj4Gr8jioodERq1HCnFWx5KNxuRBuvMNjhW6uMbhBHSaghYr9Uy282ixATxBnj8J6",
  "key38": "5XJPH5w4jEoGNoFkiowTxsML4n32SiYh2KW6YjhcuqwCZwXzr2qsjN56kL5DQPYbh3PM7TBQFA2hTCEuC8dRRDJo",
  "key39": "22TtAeAzU2Y4ZLch17kVr83TNB9xCjnmVKAPGsRRjHaW5bCD7SiFizqZU8cSYmgKqXtXHKhg3wyYcr7rZYomfgpV",
  "key40": "63fF4oDJ1kXU4cDNjvSmxEPJjZygoZZJ6FgkPFSSgBnsDW7eLgnpp3eFahZrQ6EEwvNe3apS7W4SZm4N67w7ETCj",
  "key41": "5XCEDBPpwpjrKg7sCsZ9B7oMHKrZHRDsrv7jeag3YNAgYhLUMWMGPDo8pH3wEtHrtAurE8m4k7Y6KRcKeHTSjQvd",
  "key42": "4YzepQJ2nV4Ro7b1yyxaZDoVcvjdDkje3b9uCafiAQ9zeuK6caCix6EKutGV6jeRL9jcm8seFHVLfjGmnqUFXLPR",
  "key43": "2wNiVAd5kBdSbvzu6kpyMB4KAaeSgaNdYu79hzvdrPA3A9Z9kVid7td8xvqvwoZnahKGqAiuEWKQDBM2sBhFVS9e",
  "key44": "5Fs6PfKcKj226JKvgPfSBYgULBRK8yKR1yn9iLcdKAY6rWnY5pANpJvpTpvfgYHRAau59SWq3gZTTiQ38QSifRut",
  "key45": "4dovpUP5sq7TyceeJuPQjo5M6BMiwSBaZz7H1yDuZxhsVxRdsrZHP8AtBKcZtqHCkqMbxWYogW9LwFAXuv8RA4Fy",
  "key46": "5WxQjB7JTxQHG3XQcXSx1RG3V6ckdKtHFDMkYVqvVTRPyEqA2dEiBcgXFBaW4razPgbPJ5DMad5eUQxkN4VJXHZm",
  "key47": "35q2vAqDwv3p9UJBf7XFhQuiMWTxHqUyn3f3RXBAXnUW2MhzHpWNrKzT9qJech9UoDqWJLrfSJbMaypHuHKn9CFy",
  "key48": "3pfvdyLiQ9n5JsCffaUwpc8oBWMC4vCBWwww5nxbYTrj4NjSMpdZ74EzJzVvpJEkmKU3HokpyWyfWBZ2ojFqsmDn",
  "key49": "4NuTB3Pud1mZEzvE87GPYF6cmNfqmaZ1Uk5aA3vkRmNjLUufBePvnDg8486PbbeZHjgEwftjHpuApeTfMxNaYF4o"
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
