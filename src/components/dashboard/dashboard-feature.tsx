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
    "2rkgAXAMYeZoVPFE2uiJ9sNgYpm6vXSZURaUbWctXaUY2YYADsePZvwNqE298g1WPLEtdtV1W5cSMB3TBoXWa72R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "647A6JAjNepXyJXpJjhXgcSMnURkr6aySwfHTc1WvLKgH3492A9sfPtpjUMPQUwYjBVEZmpcMH9LznFstgmS38bg",
  "key1": "5Mmb8yCscEYLAKzG78AxXApcCny8rkLYqTxeozCwayXH5hzvq8EfxwtPTTQousch8vgTnCZLjnfg6sd49txrWuNa",
  "key2": "HMV9vyW2yHALJVx6VhmBgtczTdr2SHJDVR6vmoFU511g9VCTf9Wiwk184sxwQayqneT1kuLRLYf4AZCx5F78XW1",
  "key3": "3cb8emDcj3u1ZwMHwQymRWXVA7DQznCRZV49t7qdqwd8bKpbfb8MxVS9RPKPKHkFEi7rhip6S6WXk1of1ds7By79",
  "key4": "2nF3qaywHr8MWy5UkubomuxhJkmNQa5DFm26Ep2gzSd3kNLFwkqTcnyDZN4uwfNXFWzMCHuPtSsVc38D5yDAFCMw",
  "key5": "2WeUW8epLmkR6gMbLDLiSY2SKjVpWcttTDD4Enhk63J81imbbQjgev2c5JtseMdHEetP3LqnH2tzxeYtHCoMYgQJ",
  "key6": "5jtpwfN2Bx9zaHZDKsvgaPEsXmbLfrePrcy1VwPB66kpK8mLPaUKqp9j1su9U9kdGEGB5q8gzE5ks7gfcn12aTG5",
  "key7": "3vVLFgdqND1mjciKZgiL1G6fb5H1gh7DAgtQEuLbJst9NdURyMqkPGHAvu4dyKjpZVexqSnfJTFJaTkoYoutANmv",
  "key8": "2XGYwD2pD5FiQG4a221FjqLb4VohVWnthGVA1HVybuUkukPaknL4Z5W6YGQfFLCRYn9jhHZLsYzCoqggkfw9ANhe",
  "key9": "4MBf3eW4HW1WCnGXr5YMfsZg2wF1YeRAvxXqSFemYakaJxim2oGfEqv2jgAodWnpz5xXQE3SvFKUq4heUDTmtjPD",
  "key10": "hg813G1KgXvz4vpPbb2HKgVdsCjQ7F23mFZ4Q5eMu52UVn2UABVsoubUpEhbxA9rUHWcVDfhqTE2xxo3HFqzudd",
  "key11": "5cEEvHpzEi8rcSWntJ1x8Bf4L9q4pzyAVToCar9hDZ9gbjg2grsVTXkEhAkh37WvWjHsbGEt4FHWZL83AnjpzMWD",
  "key12": "8n8qB1cBtU7LHeKtQAbxND6LZT1gNhzXEHtUjrn1cDtxzAjo4egdWsCS4hrxxAddVKerVTLbjmWReADzNJtUbWX",
  "key13": "3TatvDSmNN6LueKafAiuk6cyePGLwpMwFyvu3GdR6vHBXry3nU29cDHHzqcoyQdTNeXvgZgkakkqs82TR1AsSkoQ",
  "key14": "2jWcLXQT9bTjM58exQSK23mUWHSNNMyAWg4h4g9LF5ejc5t773LSjrXQpyrQZuAujxKvozEhs51MX59KNQkP8CKY",
  "key15": "57s9zhquRmha6c4DZ1J6DNrkzsLAidvQm8cBLZ1FSZYfJKyQudhjMuqU5H5XkVM1JLvf3bHJWNdqEWEqs2q9r2a",
  "key16": "4s3H3ABhFZrjZHjqdpEUVMD1k4u2jacXM4TYwvLwjw5jKEKeDZZNNUPyya5NbnP4DUmEFVMzvjWVgv8EePMKEU93",
  "key17": "sCidyQuFEnywnHvtBsQJA1kcEji7RfQ33AfKthqKt3Me5Q1jZyW2jmeAybGGqmydeUK1Dm7rWcchhfsg62ZD3wJ",
  "key18": "iP85TJ8ZKcCG3ZCYXWZBTr2HdhFJAmL8eZmtmydadpkMU56XZCp2BwC3VwYWLRPjq5EnG53AR2K4LBPGQzvatyL",
  "key19": "2QcS4YXoRBBvHAP4wHRLbftd8pr6rPz5Z9pymjhCp4F1rawQvkPJmgTftcd273nbg3CMeRv217KF9Nr4JkbQ4obo",
  "key20": "5Hjrnn7Qu4o3jpozaqJaRPcwoe47xcGPPBx6vMA5RRH2aP5cCM6RVbcMEvdcrSo4DAFXTDGzTqTnQjdJ5s6xetvP",
  "key21": "5h9rdHNFq4v5aydvEFM5ETwpWfnezv8MM5LU8dwH7jVNguKZKthxpoj2jaNcTwCFVGdBnmeEKyWLkXvhUcU1BgE5",
  "key22": "4D9LkczFvMBb8suot8Tu46xCNkmQ5Q6RaqNpFWyghekq4AjeT5E4ingz8DsburXD9ynSPwmsM7bXN27ezDgjDWLf",
  "key23": "2CmK7Cer3gjPJmCq1FaH8o2dB7ZHb6tvEk4aauGD6DysqFSzCJyXsADWvwmRtPgmmDBYCVZcoXTjCuRegMPe6KmH",
  "key24": "5HsF9bFLZooxmuvFAP3r1wF7sVYei2PiEuScwdWYnne56daYTSviCmXstqDtb8uRCWBM11zpFiWvJ4yY33fE6PrT",
  "key25": "1GuNMsETpM7sLHvYHtWQJJztJWN9kcVthwZBbeFJB3H59xA5xqw7FZmCgygQpBSvbGZUQqsBgWnQDF8hSjZEAZ1",
  "key26": "3n892YtEwM4hWsoEmBgHqT1S3HzxvyfxosHgNQV88svk3Ykpzru8DQ9gXoGUmautJj5BW7z4fJeHuwi6aSdnH5vc",
  "key27": "5xMMqWHjK3eADwLWxupJ2n5kyHfnQdGDbp7VEdjHas7WLmjeJe2t4kzgomuqjHsj5ZqW5P3rMeTUCmDKRcJFpJQU",
  "key28": "3KWbBwdMM6mqsih2ks23e3VET5S46Gb5BZpJRyTUgzbuifc1FdDsm1Ee4jo9NqCMdfT3kKxevDCKxH4QFx4j8KoV",
  "key29": "3ogxF3oaADdwfXH9dHZ3gbBC228Yj5zWauGQ7o7Jcs8EPqj1cDbURmHUSRkJbLzsdostXarqC4ktMsPBAQyVmUqQ",
  "key30": "3uEj7rNcjUXotkxU75qe5sH2EHhSc13CYzATkAP6JKYqyLq7p6aR4bBAoW3FV5WBFTZVB43qmi3od2ASuJ8HRjbA",
  "key31": "5YL5TvWF8jEYxXdS8nDBJSSd9V8w8eHi3yPXyGo65TyNHHqPjjcadULkDuc3rAYhQCNm3CdGs5u4MCmvpgEq3s5n",
  "key32": "57AiJPorivhhok5HzbA2VDiR4xA2t3DzN6Uaw2E3iLqjEgNFr9rWMcGz7narERGwrZrULDNuiacNR3JUmk1XUDN9",
  "key33": "5oRJ6BZJ2nVhhzVNrz7QNo9rWi21DtVfwhxvSMPvTyFgwmyUi7amPWUZ17ikLtZtpvHnQCLEqoH29HZ2uPpEmgTj",
  "key34": "zWGdQ4SEBF4hhMS1xmY9MzkcHGzpupa9BBDa3szrCaNyvYoB71M46Qp6akm4RFz3wrNxMp4qquxU6N383hFFBzL",
  "key35": "5BJtKT68YeTD7A4Bcabs53UUQvByPV5YKoCm5Xgftre5S2ZRQRXLQaNc4w4uusnyFiBD5J2jsB5sZZRtkXxVAVvo",
  "key36": "3UTyU1p9n8evPPe4sb6GmZQMpJdUj4ozxLHpXBifUX6TJt175Nj6GaxGErVw2jZmi2fFrEheFdN2kec9tzLaEm3V",
  "key37": "62rpcw4odBp1HmqrjJTJFG4S5cFidkxuN13RzRyF9gZNDYsKWVVt56d7m7nTrgqSDhV2GffEpfsHZwhnWL4R1Sjw"
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
