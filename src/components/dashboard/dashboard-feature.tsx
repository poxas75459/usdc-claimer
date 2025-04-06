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
    "2tHw18r4Tqy6BT6qZJbTqKpzWWyBPZgX4QhQJWgr4DdBvD5uW97sKoLMxHoyBueM6gvdDcdthZjHBooJFw3sKV1q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kmBsV8oEe7w1fdcLCRSRM7GkPXHJUETHwbhavgJSiY7ynxuop2WMQ8dUZDA4DYwJ2WFwBtSN1SgiQoRYiLLGuqH",
  "key1": "5MeQ3rQLvh2dgKpFVVw6vUqHmjeMfS8uiEaYEQvtAvdF6pAeMHRMj3oYuh9bqzHmdw8EiETdN8ZYWxZQX4pSDZdZ",
  "key2": "4EK6E84gxp9toyvpvr3Xc9hzxACzUJoLeRi4ed5ExCrSNNyubheyZVKPuzT9Kj3Zh9WCaqcBNPorn2fNFAAjervq",
  "key3": "57U7YkziGsjW2JDv1VqC58NWV2orMv1PFqNkE12byH3YTHrnDVuAwwNRdMSreQnZSfq2GAnB1454Z7NfBXdFnyo2",
  "key4": "52V1kyLNvCf2aFDYSouBy2tBxrpJC399aDGu4i4W5cBmJ3zWz1gh4mFApsYEffGuFZLH6Q4WqegyvsATUCVwzvr9",
  "key5": "21E5xVEMi6a8iXC4ALDSBJtHoN3foi5ot8KPXfUJs3rpG7otrFRnZyjDkKTvXyC2fBowRdWiTmLZGdxu4QBMeXh1",
  "key6": "7BFXFHPUpXvAVuGeifWhcaMwcexiRg85WP3nsyhj9DxY5FfNAKkbJMF84i48QGSYHXGE3owVotTns7sZ8ErGVwc",
  "key7": "2rL6qEposRw6G45hBW3VmoNhjgV1frQPf7SNRHFZN1q5FQpVtMsyJ1JKZqTViERkfQy8XEyRp7RqfMx2RkfT5TH5",
  "key8": "3yHA2zT9gYXM4oFv8esV2hA4nkZwtN3LJwmXPTNAGieVmUcq61V34k2Dmh9YdmsH3rLCGs4XZpwH4MqEWA4p9wxK",
  "key9": "G7KwGrwDFm3knnZac45W1zyHgYGfZMc5iwMmZnt62ZvSXeMnR6wwVF9KYkn8KaiaRNKxV6ofuATuCjsNW14vNTq",
  "key10": "2N1SftqHav8XEFXPo9RsFTkXeWNEttPAmwk84m6CoN3J3BCyeU8LMjWbAnqchtxNtxQUzSzHDSS49oMtTQfyJNq5",
  "key11": "9EyAF8us3xNAjiv9CUaFnRCWb2QqxJbzB7hGKpevwR1dMQ5W8bkR2BdSkCYnc5UXvUTS8x9EEM9F4aVPLc1PHgZ",
  "key12": "3rLHQfV5Luz1pf9yZWosTP6dfg7NPep4UvsdwhJsPtasQD2HCqdCzVWZ6juQ9DkNckvHW2CgbjbdeuSaqoobVNos",
  "key13": "3Yxux5rnoYTWZo97AxiNKZK1rkFTXh4iqLh9cpyDWNFosFj42uJ55wW7zKcaTHeY3d1yr1hwfLtsp3Er3CwHBucN",
  "key14": "3WGnmZogSd52gpsyTRwzxf5UBa37XPv2LhRsPdsJGg5PsCs4f4XurhpWFBgHCBbu4Zs22YKkoJxoxmXq9Rp9GmXg",
  "key15": "UMBPzkcQK2rrLs2VbdTyKx2845xygn5wqfG6UtU3PCdoyLhKudV314tNBYYwDgwJBQJy5zDjQdAxQpatJSBNZin",
  "key16": "2Kfs9TEUuJoLgYfBRa6Z4nceTpWJ5Efc8TFMXZkNDo6XsaqMqghUU94fapN6kMuHLK7qZLF7YWYShs778GzAzNNr",
  "key17": "2PsHy9puXuDKV6hK4Exs3yLvzfoLChXbqEHbkECZE6N6dKqz8hyri1N6uM66xZL9DZfyMiYeXExsBSXZYb6j7szQ",
  "key18": "5ifs2pS2NuNWh7azmZm1vPGstjVtNqjzVxyv3wRFe4yLow4mESgdnSswZGenFxaeedu87PPX2AAUqqNrRVgnTekM",
  "key19": "4BkwATThem72625urCro8CTzXevqLcDHAYUC84ufX1iGsDD21FRWiPGGuniLFnNYeGb4WyLmv5ieZu4FU1PVVcKk",
  "key20": "3CxUsguaw5fA8dZz2YrNw9whn5YCGV8S4fHQqVLQF5S7Kz9cFd2969EsmcoRtRjXZ7SQdristwWQ4b4RQ5patYwi",
  "key21": "522un4oUaSuGTsnvJTJkohnnSBgRQEgb1pEnCAuzNTNYfppwLFefo2RfcePKrRbDbzq8fk8eFzjSQ3VsbYeFZ6kp",
  "key22": "Emm8N4kw9Xorr85TS5WX83bcnwQWGBUYgEW9nXranJWu6RCpovVCSPnTVxhpTiS6ArpTfaxzJRdJzMNKkhiExiA",
  "key23": "zFcCLZ6Jm4XxGLQdm2wcT74jrJZf43vJ6RLhcK86GmMvW72ZuqC69nS6e89639BNmgeaA9br8JA1zwHPdrRbVS3",
  "key24": "4P8qwC4Vpq3UaPTPUWaeG5Asgek6reTj434Qv8hjvWde45EWTqj5JGeVzGu9VhVmUv7Ji8WAT7aXpbo4ZyLhhL1a",
  "key25": "39fMXhUNQhEgja4BgdrZwJZ87q8kxWUahmZvacKFD7hMUHSSpmRkxemA8Cc4bVhTmYA3PUs9eEUD5EiaK44XsTC5",
  "key26": "2fvQFeFzLEaFeL7eci3t4qkJJCQV3PnUG9ieFpkjv88MoC6MohUHepHuJZMyNVnBKXHZfTgKVbxmTruEpgpcoPEs",
  "key27": "JNEsoZcJnkZRJaacvPasHTxESbur1X6aTK7thEsZtse1TvS55tiFSwFeHHxRmLiUua2vNm3SQrgSxcqTCeUmA8A",
  "key28": "fPbp72QhVto7PpJwRX9KafrZ97pmuYs6bUzzAxiNY8wEUUdeepBGoQcmHnm5Ffyf774dsqjdCoSd45jQuwj8K54",
  "key29": "4vKyQntZ7FP53HP2Wq6ZHFFgWa4CHuB95AwQNAPBwE3YCtBw1kkZ1eQ8v4GU3meHGcwYB49AKzyqBVvyQAhd6DPf",
  "key30": "355fKXYc13DkLvoDaaQjrBzAt9AKbKM9Pg1y59Und8dFUo2et6W3y4Cv8PngaAkCftfBhX4s9w5S36SbbeSxkz6h",
  "key31": "243s7nkKjuMvSvJdKrL8nPkMm1dmyc4J3xB7wLwayYjY1RK4qia8g2PL9gKUxTgpc1qDWNL1K2C7zvxD3U1m3UKj",
  "key32": "5RAHUky1gaA9szntDmgsYaj5GFAEvXtPwpRpfVjA5JkK8JQhgXgp6ZDFDBj9hvKa6gDz1ruhLLYZorXgfAWPVt4f",
  "key33": "4UzXXsa4ozFvVALfRur6ozquPgaByTxKn1uZRvqt8MUUT5e61G9SzupobYT9sgcEHxht42TgT1CCb9c2Cmfgohqf",
  "key34": "2UHsgea6SQJFQqAfGkPRwWCUxYxSjDjRfXLDHWG9a2mhXqQupW37eXBpi9fkWUReiE9BdtY112niewbqLxVnjkDh",
  "key35": "ZhQBfZSynVZY27MnDGKf58455YJt1dRGGTuteon7SjysfCxzcb5mV2fELJcDSYrNZ9PZrAk23VqsmYRkyPbEEc9",
  "key36": "5vSebqc2xfhbTSAPAjna9pZq96YHaJkxNc1SEHWnrZL2TfHNVRcxzGXUgbjGw2RZNwKv3GoF3KWGFJTEWxT58yA1",
  "key37": "34qebFFmrjcRcHVguj3VNnvtsEuNskTQYjhEAQa1GiMFNgdhuLyreqJJJCunJYXhe8Q29NPn4YiSCjTQoohrzQPK",
  "key38": "319TsdVcixhkhL4HZcLgASyFYgFpJumJbmSf8KBALcLQ3zK9Hhg1axDwikMt2c4vHYdwaiyBUAeMhdSsDHB2Rvet"
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
