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
    "5zirEvNbRQ1bBUmdQcUwpp8ZeCMSXW6G72KN74ZvW2bzDHAeJR9mPe4LHKEKzAjA62ENsVkNj54dFoM8wCbyyXgR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gkMkoEA2qhiCs8MAprZdb5yiC47vJKNUXeKDFB2JNTgv9Rg7aqvwNbZgwuvx3pppKWBMR2DncysxtPkiG4Scf2s",
  "key1": "DCtK15kPZy4DQf1pYZynf3hXTr8DnX38zJivQgZkvA1anh5ezXN1cN1cVDNDSM3DWwwDm4nSvfUYr7uhcY8PoX4",
  "key2": "agCeZSS7Baxy73n46HdrF1qo68UJzNHrSj4sM9cjtmXX9Pij6pAUwGL2JGVAQRL7dXwo2M8MGXctAuVo7VrtHgQ",
  "key3": "4eJ22SQLFAYRmw3qJ1XfN98GqELEAfcZGwhSWYWeBjkSEcS2pvPPKtz9s9RJ3pEPt63nSsGgzJ4fNYfHLfbQSbuC",
  "key4": "37jjwqHg7LdZXiyVvSE1F7iPhtivyLhHYc1J62Cub54Dr5DSkKkjeG18FkF1R4gtgrh832auPtZXkxSpTMZU5BHC",
  "key5": "21AqzRaLgeSbZzQoXFCAJ2h5MXmF4jybgWo3GRZN2ovZ9cmHhe4QUqjMNxPLFAhQ7ZXpYHq5pzLwLSyUyN5Ea2S8",
  "key6": "gVUimFNU9dPvUceurFMXZwwaUmsot3fcdEKsfi4wPbqUGfZ1ajuvSTERBDsLttv2ie7QXhhquqc3aPUk9Hn6jgX",
  "key7": "2uUMtuh2V9MdbjQ484wLpgkfBLgf69Leu8R6uFnMkrSAHNJFjGg9AFrYPPMez1w8NeNKBF2wFUAApNhoFN7DNv9Y",
  "key8": "34qXnC2bZfmUDRE3yK2zCbmsg8uTV1cjPm2JhYaj9zJuijNCH1j7Lrdk6wyqz6H4j1b8Wpbg7XyUByVvcdjT5Wxx",
  "key9": "4A8rCYMBQxkiW5Xe329zqdStj6K6U1oe7EQYaMUtycxHN7zZ67fUTGwNx2gkHX6tR2jYBRVgcBxUWcQtuNqAtJgV",
  "key10": "55gEd1FmzoE7MHXv2LgZixQuteT3YfjZPYHdrAeUFPS3HVfM8z5BAppV6uxYAUefQkkeCb5s47sycKdBfF7QKR1n",
  "key11": "rgJenoy1m3VUWqEDQmWaZYfZjEHsGG9qWR5zuBr4pLA6oSD9ELfuyYMnvddTdKDBm3y4ncPf2SxMrD7TUCPCyqY",
  "key12": "2GyrR3miuhpGbtBdDMhZUDUT6miRkEBTiRFF6gbh9eSRE6qnwzGg9c8KYdXjD4khpyB5cRsyqpo5EohWz4qWjnmJ",
  "key13": "2o1qZNJDQrq5Z1qntrjJpV2PgmqZCV3sVcBHnk8kESQzZ5yyHcNCUt1YnJYYTrRBDksUWi97QX8bTm5YZmd9Q3e8",
  "key14": "3BB9SbLxkhqZCBrBxBrZeajjHKVzUZnsrcvX3zhWUFa3b2J8yLxWDGmaSh7XAsLcjYKkWYpzcK6iYTAMBNdfyAPv",
  "key15": "4LSUvDBgYQ6TXERDLSwSWy4BtyZ9LUpyVcTuVLKogGyx5V9SsWqrhZUkgZaog3zUJjtA4dDKCVPj4sX7XW53GLu4",
  "key16": "5B6VzWkLRW89SyYabGMm6dv5dfXQt1MipvbtyeCkMv7Hm1cDJ25oZF1iR2ziiwQMhgzDHAuShiL5Tx5cqFyJ7p7d",
  "key17": "2swUcB4ijhNVy4jjoKhUt5skNLTBj6QmY3YeFyHX6MMA5ET2vddMhQRDV2xvCVKZ8Qbig51XXowgndtLsH5yTJq1",
  "key18": "4NitBqV4BNgj45RUgFpUhjisU15eaX9XP7T36vQey7LjXb5Qbo1PGjRuyMnDqZ2KVknKKTpEwZnEChSkJrNCRRJr",
  "key19": "vDPCqKB4xfVRaeR98mVF3Z8aBZkf1r4Gr6sFWhjtSiaw78txqYD55jQQxMHEcrXiNhoqXK3BNfgec9nJrZ4XHsW",
  "key20": "c6VyiUN4Dpq1swTVUwNuHZ2WCGhf7zhyD2tx928b7qcfm8PsxtyA4avTky1UtU7BaH2idxmBgYLXYp34LJpeRhe",
  "key21": "389J49X4fHVXTtt5rV32SddhxJjiWxFe4132dXoRmZFNsYkDrCG2MJ5nbGsXT9ZYknbSXaCkMm7h9F8EJqug1UgV",
  "key22": "DErTWwLKe38gae9P8XGSDqKxzbjuZz19SNTQssyBB6ZQBNrNqjbGSvriurTV2uEc6q2V3MdrjS6DYE2MocjiG97",
  "key23": "2r4KrxQSU7YbfguYbyx7K6bDsfgdf25BP3w1CdNH6um4xcDhW8JqXhgNPbv6eTH4SciJNAmGn2zEx9ixiNTJU5rT",
  "key24": "22rpUkhCQB24MoEyDUbatkhmkci7aYdU2JgXYyEZhDVike6vYytpq6f8sJ6PBkBWx6XvANcnhVgCz7DXmqb4UuDP",
  "key25": "61paDP57xYv12yXW9fR5wUFwVBXmZf3jzgPpz31yMK3TfeRPCgecwuBBPWZnYnYBqCV8m3okDipm8PNtdiSXbChm",
  "key26": "3PKvs1j75NmavqvrTihFZLriKvQj4gQKg3KCtrCax7i3cHfjaJxdM4MF8BZuZEsJFwWaqFYdh4tR1CCciiE5S1b8",
  "key27": "5FoED8fNwjkGWNXosxyd2NU8TzAU3Jn8YVCL18vwaBT6mSW9ebSSD19HtrcmeDX6V6bQMMZhJvuqyZSK6bXgBFHn",
  "key28": "5gAB1e6kxAXkdY7EFkpgyuWbE68SyC9ubvmCedJdeayGiacpAj7pTawdAWDEueicVeLzJqZDf2CuWpd2XQBNsyny",
  "key29": "47KWfXuiSDZbZ1ewbJp6xTEpnQ9fy9KnwPFLU31vGkb45mT2jcW8fKSysqnbhB5vbnp3JGygA9fNm2goVLsSajZE"
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
