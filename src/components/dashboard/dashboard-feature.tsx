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
    "37FSuE1FgPpVVyDkGNma8T4KMyw1tpqq4ddDMu1bAi6s1YBwgwmHUituhyA4kCV1LHPQCUhmbaqdrHyNABLKnFA8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LVVGrhLad23GxVvuq8Y4Cdue6vJiRZDG7ArGZAp1AUKXmpj9YrWiCBTGHgkY7sptWYgnUtLyjekJE8MXNDz8iXh",
  "key1": "AAaBdQgb9sQ9ww4HknCsvETjddpt62E51YtHUvhkb2dwuNLSJ9u6JMc6jgyYcuE8Rngyj1dDd5SvxvdzX1yNdsU",
  "key2": "2CiJxWHo76HqYm2ompenYjJ7gwxuybmpQcg1x5rNQErbWvRhinHa9253DUPBJ4P3csw9DHivNDcXZAzBS4Cmxk5x",
  "key3": "5rdSwtkSvqBfLqZB4GsakjRTt7UZHVk24tf3CcBKq8kr2umxLbR7kfrJwfvFk1kvyhh7UMFyUBbXJ1PvNsDg3RgL",
  "key4": "8pvG2jGWKyjhosRLdxgQdgrcCmPFLYsaXf1fLxsoz8KTTi9pC6prpTW54kf2dAEgq7uATepomkE2bDtx84c5ycW",
  "key5": "48vhbiBC8k8Y3wSLG8P8z5CcSij6bKfjGBgnpCEmcDcUQLfdPHuEJbW76NAByY9YESqmsBJyYJL9RuVSaXmXE5X5",
  "key6": "52N2gKzTRMyzvMKUUWtFiExvhThfPuCaQNfVdPTKBtxrJhVALh9JD7StpNSpU5tpKHbeznCZPvXgSajtmu7ZR3q2",
  "key7": "2HbmU2akPw5gTBFBobtu8eGaSBYhC8zKAKpbUWL1YN6yatFWkWQdozRHfEsTyjwiisePdD2NscfnggktoHwJdKTu",
  "key8": "2621JmaikMkdpU97A7un2Lb7meyVkHDYiqdT6zwK6YWPXNKST3jQ5F3R3HtLGrAKaUERCaKZJVXN3762CLwZhnud",
  "key9": "3RqwYTnyT86NWvUNjGRkfNtngim7ug8LqdfVdBpE8bdqDHWDzf2v2P2ad9Pkk4sxZcxDJHQ3BCU4E7ymgPMYUbFK",
  "key10": "4xvh1NwEpcCQPvdqEViiqDsNmWW39W38dz9pFSLMxTz1EPhZY3Ht4Fr138ofwPkTLLvaprAS8UVK1NFFM3rZrUyH",
  "key11": "4NNNkvfn44a3NdGFfivhyXa2bCvaMEj8x8wEeDUZh4d4wfYVX45JzvgxzMi1NbrQwd2mrxQYF2xphX79LVmqyYp",
  "key12": "5uzKRAyvvZkN43a87nqQu55QJdQ8bZ4AKZ3MuAzNVJ6qLRCpqccFR4fseCTbWX8KoJNi4nJvX7AnCjyEA2x7gVwe",
  "key13": "wmncoSX3ZjoFKZCFh2SGheqoVap6Mq8YP96BgFF2g49QPPV12dd9FXnwWLencuBuTMzKxKKaRGoYJfuLaEeufb9",
  "key14": "4cPiqP6njvdvNhsFZdzCX3etwXsaawXRW1VqkaXWAPkSVxGWrhZ1j1k15TaadKY4RjYddP11aBiqHjez8NzJE7ND",
  "key15": "fSUkebETi3JMYWVg6omkQnkmPCrKnTEsvLcj9ke6HgD1KHbq3zcGF54P2mh7X7qTvF6sxrEmpeGJ98o9Hv9UobK",
  "key16": "3uekhSLjh3V2D5BtgJn2ZRT9jnwDrwLq3hfhAmo6sTrJGnWA4myU1QnCD8KagWS67b6oqq37kUBBjgFPhJWuzeAq",
  "key17": "29rry9N7RE399sHuANbpY79U3WvBMiqAHyeotMkRCYYYsfc7WFzoJ1UNzXbCznXuxoY9PLZZue62HKAtj15kPRbV",
  "key18": "2osYcr4W9PUo8hX6KBnYq7TSNg62xhPPVSUdk8a1HesnJxQ5ZRo741m2p3DchCWB4FQdopUT2QjCaUjqaHFWFWjm",
  "key19": "E9hZr15dVna9x87eTQkZRaaxfgUreCNdvm6ijNZscWfeZtzMmH12Db6k3QAzz45rQ5csg5SUD4M6KQifxF3mUQa",
  "key20": "3EX6asD4zm9Ns19tifsWiNRtBkSj18C26Y4jcQxGYcM7c8euhjfVtYEpnvY1NUZH5tuhKbiMxirhwyFqtGLRpzEk",
  "key21": "4Sv5BWiAHyHHz561N6Lunb1rCoahEnt88s13V4kTQgYrkMTJLMp1U6qCqQhKekhmmpobSRkMgLkb93CxHfY2mfGe",
  "key22": "9hgqnUXy3mtRTdWFj4xbdknqZZVkTJC8QMLeMWiVGBfGkRcEQXacTTLYeZ2GhtHU27oRxiCDdeneZ4iD1qnT2rZ",
  "key23": "uiGiEHg7MrH3XjsTuc8SixbJb1sc52Q7SKzYXuJW1bCssj15C816RPbxj8fYagkbR1XpX4ygMzZJJUGFtZQNQh1",
  "key24": "5ZRspMLsg4KGz8PPAMJUs6DmXKkdi7Qw1kJRNhoVL6zXw5wv98bFZ979UWQk7CDx7ChT9Btwbo2VxEny3rFBgwhP",
  "key25": "t7rtTtnGqLD2j5fHPP7JdTNaXDVVD9hB3x2CUDcdnAFK1Z3Ztcevj5aPh93d4WYLu7MpYgMgNqLGz3cyrYQGUsE",
  "key26": "27TFhZPL7JkKkKkJb1KPaJxdc6GxhbVUvGFpjSQ5o2fHj81LHFhUAfTD2z35jMLDjQK4WYjZCcoBFqwErpRqY9JS",
  "key27": "rWMX6ZoHuzvop5mdXEfuFxFhawz969YjjzEbSmiZqv2QFnLkr2mwC6eawK5bLrZpp8GgUephEQ82xEMEuz24UTB",
  "key28": "4FJMowXY88a68vanH7RjMD1xGeR9sy1461GKC3Y58LR5amzdyjkUu4LXmBpS8DAiMmAQ4F3CsYVgtQ29TcbRfodG",
  "key29": "52Pf8AJt1MpWyDCJWfaF5hTFF8QD7NGReV4gCeqNDBydCGTRweDu9Zjx6XGtJs4EJMaQGqfGfpv8G4cKThwqFAij",
  "key30": "4evkAoNJtKFy89oM9AWfGMU9ndcBeyijp45utaZcQkEEz3APtaqxYqXp7REHjNywt6qieptNHqRNGaVMTuAc29HT",
  "key31": "3FZ6LRAUSvXTK5quHkVNAPCMxPR5hz6dMe1PKbW1NLuRM3eBDZzAYQWQEbri1UzZ25cCuANiXUWx6vYhiDdbYprA",
  "key32": "3T4pxnNbRJ1MudfVH7wfUR1dU6282isHDtjUbZpUPhzNSBHvz8tpjKeN9H4a1pXGG2BXW5BhTqwGgWsDqFpBExk7",
  "key33": "5wr1e8Eo8yzMpWkPScANHVaR8PJy9f1TJtDFAJSGRb9xkmViYVeBw9UqreH16krbJHeMhKsTEoJmNs1R73Bbkr8c"
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
