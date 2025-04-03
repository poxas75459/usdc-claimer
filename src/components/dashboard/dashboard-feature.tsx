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
    "5ScmHnTpGxJzDWbnk4H9EQcsKGJeVS6yfjGaH74rSqC16EZtccf2zmVR7d5mqbL6yszhD4HKbDrPPGtrmS6qHzJd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WiiTeoQHfiSKmF1zCH6gGdeAwZaq2ydENT6wgTd8j1tn6UKe37ukhtcw7rB1yuANnYXa8onsyX1sD6bPYsdDqKN",
  "key1": "2HPFJLrMJh8mfwx4v5P6qAK9DAN9bSeMbVuuF22r4ugE4iG8mABE1uSn3cs1okM7puBAo5ibTWZQZ8QvhEijX1QV",
  "key2": "2J5CED5BcL7E8FBdKhNjMSLh2qbjZXLPAkEGmFmjCzzbVQRHYLYczTzvDniJrXgaNLvJHgzfkFwxrqfbLbHQFkXU",
  "key3": "66wLF4anBCaEv9yHm44QrJnZS8vmJVAHdXcGATnotjxAvSnahZiGyW9T94nHEeShnUFYaxe238L5P349LWsLR5bm",
  "key4": "64sHrVhRgwvkGhvLTFu6U9v79RbqdCrMEJWr5uZ6pDukB3nbndB4MXJrHmGrQ1UH7AJszuk6eHDK6CJ7oXHSbVZB",
  "key5": "4tfYEmNwag7Ht93tVYRsqzwKrEB8g1xEfimYBwBr39wSEQjhgj4Kc8B8RQusywNWbPHPz1vZZVMj8L6wYVzxo4Ar",
  "key6": "46R8iXUbjGmujem6FiukUrnpJDjgmz1Z8AN5x8qZwScLmYwDibugNWWmHAKUc1RDB6e3rpZJ4oresG5CJVo3HQjV",
  "key7": "yETdMQT7XxgNBoTB5EiFZZ48StFeV9gXMySdd8kFYy6GDyTm3jnjQn1yTvSxdmmP4z8e1ZudVRwdfAmR2Jg7wpB",
  "key8": "2Jtq13JxkriSdJVcyjvHCP1zmRbmutgQn9xyWw21kVTPMCDmp72Jma6b2AKmKikMxASx8Ff3jYahLgDUz5KBiicg",
  "key9": "315Uj3Uz3oXJxaR5Bg7eopo7dMMvjhaH6MeKxikgwvAnYieSUWBb2pozsEV5qzEfV5vHmzY9v4M2wHexLrk8A6qe",
  "key10": "4UYP6PP6MnDVyu4VGEGP5K4Q2EmrAV3ABykjwx3AhgCT5rtzEBo6z989ACGqoBArva3EiNDrGLW8HQyaWQYrSpqJ",
  "key11": "3nvEFuCQr5f5DUYnWZ1LpKu6nYYXu7yWVdQyiCkwU4BWo8r22STCNQ9zdko7mpQVTGX6nHZCJtLNkPP5N2JtJQCN",
  "key12": "3zg5m2ba2hw3eq4RaCJxsoBKP3QgCmrKkE6EQ3Fyaodm8kjaFvEKX4xC6btkKDrq1kKMzMfVXZ7PugKMdo2Cc2Bh",
  "key13": "48FvgSKYuWoyNjVZ44qZrA8cwS2wja2iQ8a396NPBVBm1Qf3R5qtbGGSeNXD6Fr6LhWwgKAF2Ug5wiQjgm2QobNN",
  "key14": "2fCkx7CmjjoKHWWT1aZUkvacyVTohz79aGpTzntapEEPVCrAGkG3JmUqecPzP2Dgbr4NfSi86ZTd6afFJmcY85RJ",
  "key15": "4E1DEptUQGNPhLvAoGAUYhXhLxvbapLsXoPZtFzwBgr9U62e3X7ELPNxeSxhAfph23BSmBq8YzS9ENY5p2kfKgiW",
  "key16": "55NXTj6H2SULoJtDr65Yb8xS6H9SPRoabhqPmR7PdfQLpNYXqDMqVPsR9EZb8muhhjdunukfv4JUAMxbhS6vmVra",
  "key17": "3rnYDJwqtkE9eCm2S2CCKwSysNzfCAQhykQcZ6f66M5ASNDJKCDoJJA3wVn8wufp7f6FXZBE2C1zgWrzwiyo7Stk",
  "key18": "242VH8xmD1aPysuJ8cYPLbdCvJciWPLt9sa59BjLRVcG2CGnfDMFd7SntVAnPeVtYxLmmAXSoDtx6oBiW2JWSX3z",
  "key19": "kiArSeKr8yf62pzcnxeE2k9uWFf4LJWLoH25SBA4D84qe9oQvkSnx2UAZP6RNFGhQKdriVWWSFfFQ1NgeMHz5PJ",
  "key20": "5jeYNEkWdrDDxq2eFN4CGdgGV2ogVczEswaCkBtbcoQ2tbtLweCBMbWhfUBC6odzAwrGz7KrtGkCvtNugcr99ebi",
  "key21": "5sMfiVXUC536wFYnnTQ6h8ZnUjw4NKjLpHfdyUrLimm7Uj18KN6CixGMCEr848jchU9RpYC5K3L9YZxcwh2gEezM",
  "key22": "EWQfZ4A6D1jC1GdhrvwcypbjB2kcqgvuXuPWa8qcUKhGfzwPL1366ie8BorFuBSDdayjMZSpXf2vQz69miM6NoZ",
  "key23": "nrtw9XGMrkGbG4XuwBpzytLFJht7HVeWBfKvs5CWD11FZEutZfJPc5BHQdjQj5NAJBasFXA2k5yMBbQLMGmrv9r",
  "key24": "4RBYTgEbt9sgov6Kw8NqTsWShyymvSrUe24jvmhGLv9GBBWSk3xgJVwy7tuQGxGuuXgC1MBvZDFykBKQGqoJYh8j",
  "key25": "2mBFxggHfE7aJqconiMRRChz8JStronNzLCJq4jDebfBdRER4VhkTDWGgxWuRv5ZYgNnsAuUBc4SffQtn723LHAA",
  "key26": "5ccuufLXEaQnz91sY6jrMwsrPNpkYXv4FJJ2Qe71vo4w697TbhzJYsDhCh9NEMzthCpXTPghPyvi8WP2BMmhexp4",
  "key27": "2MPAZm2CQm7GvfxGMDWEXKk2CfHuT93iSWkkSM9CwDt8LPoV4XwJso9CkmNuZWoLtJf2GrMhjbuRBGjvKpRYhgMu",
  "key28": "2X87UPQGakLTMTe4uPe41brXVe22FfM5QH2j1X8cf6HWBWfUJzfzPdyn24nsU6Xur4mNFM9uNmPgpwPPeJPq76d9",
  "key29": "EN4XjvkUPY9XzpVtZ99LyNYoBYL6m6M3TLpV5NJQpQAWMpdHTzaSzbu8vAnUzNu3SJrAKg29esPmmtbWHmwkbNg",
  "key30": "3NW1SWksZXeWT31u7BPL9nLSAqm8gPn3LmEPhZ7hMrSY45ZUXmQCD8TrF9GmTN2hGMUGrmsWtzNQDPpxv8DaNdDT",
  "key31": "2ZY5rCRBU5KbobNaobYjj7uy4qd2AGqSR8rhd2UC8zxYnxHWmQZJqDAzBccMLMojkDNLRfjtUkwguJXzKNk5XTpz",
  "key32": "33Efdq14QQAscvPiLfui4jorYFCtMHHNzSpbbStRM2oiG68yWjtmUBsPDS8mhVL3q1B7LB4JtfmQ3eGFacYYn55F",
  "key33": "4o1F63BB92YYkdXiD9ResPpGqKsnhL7YPYk3rE71CDyEwjtBL8vgLq86sSP6ApWKu9jtaimdphKu7znuPk7SUzPc",
  "key34": "4P4p59wd2orRj1RZxXwj4dV2c4Gz8XdqqX4hQfpWkRr5pAkiJELAu2P5rfBhuZ7wWodesVyWq9RXWnrnT9qbjyZ7",
  "key35": "3ba84nUGJtBcX4PHvHKx27pNqirBvD6CB9ifae5NtJgkDDTGwKuzS5QYMnb2Wf5sCvyXcgm5b6qdFk5YLLq3JJnK",
  "key36": "3JHvjQD7bZcMwFMRnym9sdVp4WHFNff9rSkcoSfpn57Y2MpmGuLrow2eP56zx9DsEgGNruP76BNtkKvWHN9sXEzZ",
  "key37": "Hv7sRrXNgT7ZqudL8d26re99hKNGszJ2tWg9RewwXbZwXrRiDP4QARwyP65yk4wUphNVJW58S7HV9RAXXJjMnRC",
  "key38": "3YXakTfivgRUisdVDXAwbbGVcVpW3fu3QXnXF1HwirwPHPvSEH9FswG4ZfZyf8t3ycSZ6ssmdzKw3QPBUAcKBg3h",
  "key39": "58rKZpXGAT2oA8pefYcZNU7Q3bCNmjTQoddqFsrM3GLZPE6zfD6nXK8QSGNTnE8qdYJWquu9S6xQBLURo1Gc5DyQ",
  "key40": "3V1FtZGZmG9U7Evi6dx6Bod3bNsrwGtDd5yZp6B8FKAYz7HGwwG9jyyh8hf5EE8yAvXfoFqK3qVsnoy9T6KGYkjj",
  "key41": "5nKhXy9Xt2Qgaozckuy7v1KoAgvsJsmRmh92j79et6kTFXmNjdyrxamaE3EMJkN9mXsVckfdnkJuern1DZnu1k3i",
  "key42": "4EU8QVtqwbMcPHV2zXwm9YXZDER1YkBNuHUUhPeVcYJCwgMz8ERYaSMqAvt4aMp74vBasW6dn417mN2oWK5FfaYA",
  "key43": "3cm9JvEn5Lwkz961ocZkXW6wJbCNMgJfAF8X8AfEwsXpBEsevh1cp4QQQKWWJGg8CBzbVw3bz6Yvg4xgZL5EppgN"
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
