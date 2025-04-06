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
    "5JvxAdKQTNUTnjxQMRvNmBrkJ9v2AePRVDamQ6REM84t3XfsVhCaNsU8sV1Hd4WMwz7pqgeRVLu5zxn4238893BG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "416BcV832EjWYrgrxLwcPFaxCZKoCFZKkuDAFSSDJPWuiX7tagYLfbEdifKb5wmMNvCLEYkwbvxyWDQbq23jxhG1",
  "key1": "34TGKpnDsR2ST5QeviJV6S6SQBmM1z6SZZjJDmRLW8QF6QZ68mzSQWWu4ZqieTXGUK5itrXxGx18fknzKtEpJswQ",
  "key2": "3ap336oiFT6YTkzAW5i2yS6gA8oT4mTJJJPAuYDRZXc3G5YFkJyVyHjod5hXFrBhkAmZmyypP7tyQvqiu3DQbGY3",
  "key3": "4KUrQnqmEozhekATLHVHx41mhZxdZ2w6X8MZ3F5aen7uQ8so5HrnwsM1jTahZZRhosXgSSktQ4tjrXq62KnWYkUY",
  "key4": "4kvj9XE2Lw72rc2sdXdA4aCyJMxahB5u2w5DL9dfEP3NCUwhnAg8W6eJKXLSovWLqcjJNnXLgK2SZb8kSruJbt9k",
  "key5": "5XAedZguAqmnNRYMpx6Gtco8hLyn181D1jpzbVySup8KFt3b6TUw2pG9kNpMkuE9HaTvTUPioaZcLJenW1tEm2qR",
  "key6": "3aebVzRHCUyy1pypRAbjDQBmVuqmBudbhJW9GowL6bwNqpPeRveRGgmJPkHxFMxUuixNvDabyB2Gb56aZ7B9AnnQ",
  "key7": "3MHhJQD6FBh6YA6hqb9U4FHmdEFuy4yJh9JJHJgQv42zyTHu8i5hGrxi5WHh4FdtHRB47ANRPY9YSK4hcf7x61DM",
  "key8": "8FtM3AS8A9zpJgR1SErXetfkkdB2AdcrSD8jAqB7z71ARZVNrGfNbekCAAihRznw6Zhey3dKTuCzMWjZsQSuKrS",
  "key9": "5pb5YYqzgjogyoMEDpAsxg1LEyqJiN4PJC1urrixemfx8VAr2GdoqyTcRtPrPqAvUt6djfyWzQrT6ZMLtMKzjZZX",
  "key10": "2RcRNRBspdo4kBqVmZ4Q1HeoiNr9duxugRW7mWzjxGGy8H3yWbdJo1HcioKQz6g2DBcCnErJFeZdGwZvwbFUjSst",
  "key11": "2XsTCCaRhRJeEPxbhhycyTW9Z1sGaeNhnCpm2eeJyZk3AZtfqJ6auWrswd67q4X5hnbmiNHLCHZUYoTVC27xUsbb",
  "key12": "t7aZMpWYhSck4KrGkk5w4u5TZ1CkCcNhV9Ltm9PPruZFspJEhW3kCC2Ro23yuQDHsczVQdgFb1Zc6Ew1cgNzaps",
  "key13": "5kqEcruHTUAKWqxco46mZAxvG4FubR1fpRs3mT1nkpsUgH6bHAkCfQD8ci2tmBtLRbE67sYoamfTVjhVoQt2i9j2",
  "key14": "4AQNxNibLz76UUd3hpvhBZuXUyXC5ffm7XEcoGwxjgD72WfMPRhCxaFkjQp578USv7rDmjfTkXdmmMr7xwzakPfy",
  "key15": "2Vt2PJ5PFvAKbNVnTCQnbtYEsGw8ag1T1V91M3iUG84rrT4JRib7XHvz5wb7BazkrPz7bH8AFB1arZ3iTrL97hCY",
  "key16": "358TFjuUWdWc1aCus4mYLim1y1SQBGoSUjeBrA1YyTUmRxNhWcg2fkpdoJt5YoC89Cjtgkp4UwdzFo6gS5Ng2Rgg",
  "key17": "41uz6GxR4sMCAySxh7i4BBo8KvQ1TvpFNPckuugrphvVAQGf2isDgntXq2PzHt9nJu1RcLq1mwFzc2kbnHfsSyuy",
  "key18": "4nurLBEwUgromhF8wp3c8A6sUhNTKqzsiBuprRB6YA1wcdM3CeYV7orm2XEMWyzfhCUTgNJ1JVXSv8KgPCx4wcsq",
  "key19": "5bCoQAC5qS4qNK6FTW5PqjQNcZsfmvpZkNKCH3ncvsMLvoA6z2wNHkSxBfU7Ho3hgZtQc2GTAiC9Z3o1gfNKqsZ7",
  "key20": "2CAGVM9chWGCQgzq24VteV4im6EMHwyXaNe4EXACN3ptzDu7psWfPsD6pLyC2KNBd9SgTFt2per6TQ2eFrMMnNZ1",
  "key21": "3yvvxGFkuQPsRY5kXUFNDtNJnHrnxVLYU6mN57XJzogke6Gec17y3bbTccEbedXiNXpvkXkGdqShkmtx7i7C296R",
  "key22": "2iLEP8Wzsr2WeuDxGjkJdfhWGc4vwVVfUg5hN22R8cDMzbhdib8WBceTuwK5qC4mJj9KXp4Hvsg2LyQEy7RvkoTc",
  "key23": "4DfV6PgtehkRNVSvgwmafw3xwWfBCxaocpo5SzsFtjv1fhQerzKjqxzXbyvkyhHtoZYNqkxnM5ZtzbQBwB6MiBsv",
  "key24": "KCCSg4aZQv3w8fF6HNvDzDaFqSUdEwDGyyXu1DLDgwxJ9bmjYsyVad9meyhn8GaYdZNUAbehoGFBerV75iKro6v",
  "key25": "3SUr3dnVejMKY7oHe6R5TFVy1LVR5KmTtfEWaDMdfRg5BYiNu3EwnQ3EVDrfKc4TVreKV8fsAoPgzeMzz9CaySgK",
  "key26": "46S14MftD3XBYAyVGPSTbRnrok4rYxuFuVTvaRK6LnTRH61gMTBjBkiom4UwPVaJ9JLJLFDuwT11DZ3L4EmoxLy4",
  "key27": "5Uryv4D9kRrXUDdSj67XpMKn1DGB2u8inZT2zfAajxR8XFkj13ZBiRBdSXAoTt3TgVPaVm9rgKyeRmtRoMysG4iL",
  "key28": "2UdigjsEkVBJw8Uz741Gpp6hB6WLmvGxrgAHNtiZrRw6c7hCNgjgwpjAitLWXc8cN9NaWLUedJzwXLQs3Rx3qL1g",
  "key29": "2ngDrnrC441X4MFEYqyWmazBqSLHfySaFca5xa4XBk5QBTtYZ9GitTYNnBaisJDcE7dJfiKeKscEKsRLu55GyptV",
  "key30": "mBfcFWqLUfSPih3h49shPD1yneZdcjzz9ug4LfnobbMWH6FCPeKnPczPYDuT5Jb3ykHjxz8i7QgxN5ikoSdhyxN",
  "key31": "kfdQckCPYeYABsfgBP7iL1NksiVU25b26FTZiEoq7T7XU5NxEgzMo95jAS43nWfbTpqHFJvxhigiADZ3XANgT4a",
  "key32": "3WmjsRtN4GzcDLVEDWKXuWtqmUov3KD3fjX9JrHaRE8ZHG3NikwUuU3SMtahrpvyB9CdhSgQp6EPJ7eaWU7bNDiN",
  "key33": "5swtC4HF2EjGAirAShKV4W5UCBMTQUwLB7srJxpqx16msf6YvNXYx7nZ3K5S6qhRGJkoumcEt7VNw4zQJ9ddsQPo",
  "key34": "4eAfjMRCrfLuL9NJPQ9FxeBakoju3KVeKeivPkNtP1eFUABweiPhzyoGMtkA1q4HSGRCUStTHcNfNcvb391LC8dK",
  "key35": "35g5CnR2Z221b9aQiM9F1h5v4ScpKZNLR4HM7RKgtTUhMKJZrjFRnLCc58ET7hLwymFEctqMpDQi6znLxvbVDwuy",
  "key36": "21HMxxgsHQUhjXFWYiQBnM7MJJGnv1vkMcooTw2xVrDZyKv11WnrWqvTn5MBHdQ5wcV66UqJU7z8aE5u553jmwUo",
  "key37": "29oJezGDC3zNcVeqJYbweeqnhMSniyd8w8rfSb9SKmadtnmNH8axdneogarDWQNZ8NaxnzGX32MFxrVjC9bSMWab",
  "key38": "taWFht8ExKDeyzSsUwDHwLWGfi3p8BoYbfhYMdUXYSkdxrvTmx5fmMVvLMXMKYgTc4BX3cZcNzBEzuYtgoWawdW",
  "key39": "5Wa3vdq3REyRZ6N1UHQ2uVLgrqiRivdfCRx8t5kbxfy2DKgu7hHrQhW2XLuvyzxa97vzd8noXmHUCw9TdJaqamPH",
  "key40": "3K93Dxi2HtZR8XH3MpzXY8uzvgkANmoFmtf7BinReDZDuFgeQjFRQeLZJEJQFbRtgWht4WqHiKF7mDeSkD7mXQCy",
  "key41": "x2y5KZCyLQRxno9gJZ7sDSa2uYAVuwyG8od7t1Qxj1kiHeQrV9kbKLWbo6Gppuvj6g8jk2njYxoryxHXc7ydXve",
  "key42": "3A3EQ86WmkuSmg9UKV5YFD5gzWiVvkApkSKToPzEoojZXUH2qVyKT7gCng1LxFTCoSGfgZigkAecaKwNrfcDNEto",
  "key43": "2erHkUfhhVyu7Z6bULAQ92yxRNdimRQVVpmu8QYwuxnZrHj8FDz9JQiJk3LXLrXNBb28dTmk323AHkgFVBJAAgbw",
  "key44": "2g6YBdwTiLjgU3S63wiQZX9idY8196Gnyz3xYYHP8YxQxXx2mzpLJZJqdcYt2DjCCPUpkqWJA4GLPLUps4urdq91",
  "key45": "3iSJhkwNPCmQHs2wC96nh32X5sJgZvqExioPVFYR9MNNHCTXqyhQTXSXSShZfjNWh2Pz4f6Z7Kz5Wk2a1287neZP",
  "key46": "biPvgtuHaxDJBat1A4Fmi34XCYvCim8rq6V5kkDA4RxwmWfFcZQGrNAcuBHfxa7Q8m6gHEeS5ZpQwGcsYpoqcdz",
  "key47": "Hue7Rn9kyM1K5Pct978z9RbcCymQQswiG3JDN2iEsg3Tqv7Em3nrV8XraqbjNHiwuC4UDMbxYM2fjTAji75XBW1",
  "key48": "e3MGjiDwmhyM1o1H7nSqL6GK1emMWsUbGfc19EnZczFZtEtWNh3SUqhehSfTY5YfbLntAhqNZQa1D8cREwUjE5w",
  "key49": "gZ8vSLpaaUFoGyedgK5W1UHhXNPxMR4EsxFE7GCHTut2SujrgiRDnP3xvgkdivGF55duTrebjkBzVywPQUGXa2z"
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
