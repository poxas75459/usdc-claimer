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
    "286gHAe8GGhXfjrHy4dA483WMy8hFLnuxfvBo1T6hCHEgsPuXxhS6shSne8rYhuiQ81oYgwQYMzqy7EVockA5xWU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zbEocL8Ken7y1d6a9x4GeBEGYH5EDgw6pJouY3bB7vUNi3iXKGjjZ6JVasn96bSQeK9YpBv2i5tBybYwvWAsPFr",
  "key1": "NJAXWNjRbNtRH4vvp4sNNyyJNpciXFP6gZc1cp72M7kd3p722sWPMZhMhoF8w3Dy528GMt1jrPcULHFGVvdSMoR",
  "key2": "5vSbzwDuqR9GGAfD37u257L63ZK9WBzUSMgDAJx3YgQ6SbJg7VEvRXN4vt8PQmzdVbddBzao3AkDqRoA5MZmSprH",
  "key3": "4DcefB4dSUs3gpDq83RzgxpKJkgbp6tP5wGq5m2abDKZeGof3S9DsycTj73cJ2Xr41UNSvgtb8g24cdvbRbcKZge",
  "key4": "4jiz9yc4zMYUFU5YZLqKCrwqszuXG7cS291VWnopvFacx7DcVKMLggSeb6XsnRabqbQq2DKiWhMSfCgzkgEEkj55",
  "key5": "2rKCMhEBJceWQHcyPdmH9rnknXfXoj7WkcfXFZKSJqRwyNu9SgwY6uBLvvpt5FixgzuqiABACMi1Tf1oPFHxoxA4",
  "key6": "3gimjLybodvBMsgPoFT8hZLygsjBBg4BqLHXn9mcb9unA7HXfQNBwC9ub27j3x85feKwDEthSSWWd1ZBZwkYhXt3",
  "key7": "2j7btbG39f7UXt2NL3UxmP2jfKbvvS6Z9P1Tw2n9mrgoSSjwqbqo2zRCxQcjuftBQkYdLTBoHf4PMDRo1pC1KtRB",
  "key8": "2VndqtDJ8joEZ2cAH1MWfeyqeMPVhsiA2xqsQbUoWhDuxbbrnRTMWXpAeWWTXmwbx7a9VY6YJyzEhnQwhdzQyudn",
  "key9": "2kpSMw8BWTEQDvMT8AxkAJUSTcmhR4DmcXTYRSnkvaqHVpV92puL5WQiNRaCDsGYJuWZ8D98mfULAvKD28CdCHsV",
  "key10": "5aNbHdoRmeo3AX8UZh3p7Z1RotXYrGTdMCubJXKXdwBnPsimatdVArFDfwch4zVdUaBcfDCJem557mpHHqG8C4kD",
  "key11": "3ZE7ASt4xUu9Tnfy7qr8Foe46yeGD99GZ7U9hzY8hVqrgWPsUZSSdK6wFeKrBfDUq9UeFW7Bs8L7PFxgcSxCDHfL",
  "key12": "BWx4TAPxi6xpLw3apQkqdUXqgMG7zDk4xvNjVycZgkj67xjnfkTLiU8DiPyL1C83K9pvM4BPSrzhHeaFS7p61Z5",
  "key13": "2LroNMWkJre7cEUTqxM289X2udyhwA1B3kdBU9bjp9xG4H8ZVeWFSEVKYS9DyKqLUAhMn6EAeRzncpz7oYdsaP6L",
  "key14": "3V8vFTL6REGWfqRMdU6LjbbzRa5Jy4xw9KmXurz9obYXUFDTynXNSPoZevoahokbXBspGNrmtvEB3icRxvQyVDVb",
  "key15": "42baYevdK7VmmPWNkFhJQa1juHx5qap8yGcoadjc8FdZLvn7dXhhBsRyGy6cRSAy5UJtvEsqGwgNnZn8tQJ2xt5t",
  "key16": "64mD2jtZdwQN4veyUFR6MhtpgX2E3hPF525wrLKdqipy2pFwbEU3GEG19NGVHK6Pnj7da5JMRnMoCZ6j6bzwkLHp",
  "key17": "7zoQoJi9R4LYRaeeZtMZWpXbhpBcq5Mf4WpusX6DHDmZ3Gfx2iFCZMu3xRkoZCgTbdDAhn9fQ3AZKut9wAiNZjt",
  "key18": "He111FafNBEmiwHToDYewix517zuJRtckUiQ9ZKobVMA26UWcqyGPPmZGPaVLPRL2aDNYLB4DQNckV1xH7yovBa",
  "key19": "4wCZLfFTwE858fp8h3c7DujhxuF9RquHs5MUEg3TTYpysDcYqHJog6J9Pfwegr4BLzXCmBszn9bmCBbNfc4JKe5E",
  "key20": "DeJ4uZb5YQbGAQkZUVejE73WpQmNonm5y4d8YciyMuwvyrC1UnKDg1zES1JGUgD7yyJv3gDzGFhmrVC5caTHyAU",
  "key21": "4GUsLaPfqKckGz5yBshF5gyEdeKW7MiSo3H9w6AeGXitK349xm2KzsHJ4LeuwAHuKJWLVdiTyEvXbPBKBSkF9gKt",
  "key22": "5H6XrU783SXnAG688MvbjJHkyBEZELpyskWKrkEMmQnZrxtD6ktY4PP5etJEc4HtZWWEewmY8v73wY4iEtvX5GYr",
  "key23": "3UbamqyvepndsHnPEXoj7Qf8gn7hVbugKRPZkFJcumSZGkPwpUnLvcjXymT1QUShJVZEo3skFRHYaQDoSaTRZ14S",
  "key24": "3aKvH9dUmmi9fW9w5cYDEwE6Gx32vJMm5fsBvCGY3eC7Zke7D3cC3dAoVu3H6iTPZhigpEKFDXuupUevwkDCCdvU",
  "key25": "4YpATz9xxE9KsYHDv2XgwPfXtNLQY9XBiggYBNdMSKgsaJqMSWza78VZocxm4HWUJ25SXLpHjKvpwnT7qKHMT2vr",
  "key26": "4P7uXxvZvk73pzZ9mFrxzCk97duHnVXVx72dFE8eSnXJbYTgkjcbpw98iA8kQC2WtqSBER5VZ6zRDyJrJLXcknaV",
  "key27": "4H245n3AJawYoj37vhuxd8KhUMiXyFkBHfkdNpxsPdac6rgm8aVEkvBJMNHcYrSkAJ3BDUmtgnpjDhwzFgghvQAt",
  "key28": "73GhvepQMkLzmDJt19aCgZsgLpSjQNvLkckZus3SDjYShet1JzNJw1yuWQQzaMvrhXTD89g9ZLHPyURD8z5SJRE",
  "key29": "61ZiCWmPdZeBQ1wGMHzxowreB9iWAKdvG8K2adedJVuPdSwTgY339bbrzfxNjhLxJjajanSAxGCXnJevAwLoYDpt",
  "key30": "3yfo7hqn75RVKnHoXEzooBsAYDjR5RN6uJj7vD6bF1dCsk6iRNQM852Pg6eEzAZqCHgHZttt8WLGRsfGvLA1ezv8",
  "key31": "3JEpZ8xG6KmhXnXZDxGBDuXFMANc2SzPajt8LMjppH42TTZJoy5Ly6Wk898Y7jB6GVCaE5LKZpLcMJVtxk5Caipt",
  "key32": "3taPZgT5x9eCvGJMM9sPAeGDe4hqxFFtKMkWDSH9LcGF9NrMnBqyashuDEUNRWKDpzmHBiysdwpKjs77EmnHyDLE",
  "key33": "4A97nkiMtsqWGGpzRjepgPFyXEPT5uzH5EHSzBGoR9s3hFaUNFh45M9p1iGri2MjJWhqapMyRxe5GLSDVUtRzSrK",
  "key34": "2BYCwB6JWBFy2zNcs3Qk2eNimt7J7dKH1DTkobgGUk4dJajjWAC8QM9KFYPbwgyVqhgtECwveVUEXphuYpbhWdGD",
  "key35": "2jf9NSK7YoiyfDeH4j1o22HHujgVbWAep6F4GFo7RxeLKWCdd6hW1mvDH4L8FUBh55J84hc1pDigNq91Ep3jPqQw",
  "key36": "2hznjCQc5J1uCVDu1mNRdFWAPRrDTBNo7repQr992N9YFpmQudueSYDt9yZvpWvSd1MqYYJdvsH9xc5QHEPGfCju",
  "key37": "P2P6iBRdGijKm8EknHaoLmPmoPM79Ecc4AzFvRRZpXoczoaqVnBcbv1eUni6R7eCnv1mevqP4htLpoHPkrUVLZQ",
  "key38": "vkP8AhUgXpoZJCfMRRc1vGFscK9TkRYYz8riECpGjBK8ULdnACjnQGLCgikvLW9vwfvSbzSNCKuCfzMGNnxoRgt",
  "key39": "4KJcLHAV5Ez7RKJwQQNqdtqMPo6wvLegVXjgUyb9a5fcxYy99QGETZM5V755oRzHmhaZQYk9CdHdAVL541Z2uQ79",
  "key40": "4eW2oiEjLyg84dKUdQUj8gaJL35xUE55zehUZnu3KMY2sSjejeu8uzNBvn5gQ35G9ACgF56s2vYJLqTqRF2Lhoup",
  "key41": "2EJbYZ7gBmKYj6dyhJhdyhyx2jqudyzjiNGimAVZ1AxUtiakUtT1qa2CsjzpgVQyxdgxDgrYHw7dJSWuVxBRM46n",
  "key42": "3cTDYiqirEq5FygqxxNPmfG5xNgmVBHNZtmzjBJF1eCjdteAxPRVpuUVuvRcVNF8pgF7eNq33WPjmJ9Vow1ERwhA",
  "key43": "3xqSYW4MrNmat3as5HYEEZV68MP7RANVo2jNsGx3DtCwbACwz6J5Gh4Cif31PMvwfRDiWFf9HWrbwZ8Po7psddiH",
  "key44": "2YjDQTqoPoAad6j9LzrhRyjW3CbhrZncM95F7kTjT3UWsKJsY25UB8gCwaez3atsMkFyxiWuoxGo7VTzuFG35Diu",
  "key45": "4pHoXuSUwF5vEU2v5j6gb5n9epmfuxwU79gGp1sKjH56UcuPasTCMUpFReF659weqQBZJQeVhpBZgpsE2vdrpwoc",
  "key46": "EqnFmmBpiav1LNnR2i4HQr8r7LM4pkf7nxm752xUp2AY9PUKVjjbFFbjrmze6413t9rVbYr5kqqR3du6FZTnB8F",
  "key47": "5nfLyc1CzXQZTWU2GXe7qBn6FknLnLq4Tm7Tjk9aWERajM7uPH9Ucuj8SDhBocdSsmNjuwgsaZKqthoSf9KVfpZi",
  "key48": "4dgSZ13LWSkFwdQB1PbEQpkLtJmXyDeEAYrMhzb1W7cAA7NvwYhrCtqGtPPYCj5KV4FjPRraZqW3QLuJVokmVuST",
  "key49": "3oMtrkDM83upYXG5B2xDapdaoLMQX7WSzc5UrEX5hPbi259qqrY7aXseKBYXek6HHRjfkkRwqauoWsnV2z5eFkgK"
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
