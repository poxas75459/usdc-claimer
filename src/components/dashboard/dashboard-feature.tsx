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
    "36RRxp12TYrb4bza2CwnkWWXR978wHugAcsrThuxJuJmjvurbhCYwVJHdhtpyS3c67WkQGMATH4y6Wb2DcgwXo9w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uXk3DUKBdRhhgbs6FLcsac3X5hUw5ESKr67seK4mBpajhKbFjUnu2FyajszTfBvkxaddWE6J2nc4LPYcbjDedNi",
  "key1": "6aENgsw5qLiHo4yMk6y9nmyiAXaq3odSbo3LwnCRpRedRUVbZfqWiTbY4FGCsAZvUSzwGiruJrsSHoyrxfU6LAs",
  "key2": "2W6vocYdNWxDSEaDeYJwsm9Py8j6KXJLvafCHJ6KtxdaYC2T9cQK3CtNdKJ2tjYCDWATG1b6WnU5keMRE8ZLhgEY",
  "key3": "2V8kWXcTCYuzx4aJCdeBmCSKAhQyrwXgBRMx6ozEFcf89qsueoAoKkYqXtQNptbRCQjiAcWEtJh9ur8Ve6H77D7q",
  "key4": "44GWftn25zmjbN9mYbFM3bw2wuwLMsBsVuQChuCX28o8L4ikg3p8Ru7JzQqu1cYv5smmWdC7SYdeLcNwGpa28rNo",
  "key5": "3RV5YZYZqqKkB2DjvN1GQHGPHpsTy1Uu4Q1CRMrbbiCA6vDHE2RDSGH9Gfs68XPA5LUVqELC492eeAmK1j4czcpa",
  "key6": "3y1UK9i2ZdrHaf6SCqY6uStm9eHinbw51bbq1gaBeiPxfqb5hPN6egBVEXgiaUnduajgdTFazk4xZPtYPGUos3Eg",
  "key7": "58yKNDJZuuJehrXG4MYo4q5PjNXd9y83i2Ldi2u5nFmzjGfP1Q3Vjy12BTs5qKLS1JshfdBVWvodLhffb4mH3fay",
  "key8": "2uEW3c5cxnmjX9VJUjkpfdPBkhMmtgrrNYXGvN7Rj6Jhd6qsFyBGVqvPwzqoCzFyJHZ6Rq71SsapRWoonYMCwDbf",
  "key9": "65qng3yXZcntrHdkwcz9xeBQRmFJ7oxtmecUhjeCdQnQSw3DTWPajDd2arb3m7hvL2YHpYnWQj8Ro573oQSENUHP",
  "key10": "64vHobqgVCb4QxcpdXom3gQghdC7mabDas4Z9MQ4cC3yjNDJG35nzw7z4VWqzx9okFFPHndLXQmPEYQCUMEEGQfP",
  "key11": "2xQW3ShoYv8EwJREJwAYZ4CoXzo7PuEsXNMrukiaDagtYJVXARq79QRDgPxjBaa7tYQzJbj8PCmkLSqMEAn8WUkP",
  "key12": "3yxiFZkSBzuCbvu4orK79Nk279PyV5wxwegVgQ3t2nZP2jj6K6VFrn7DZHhENkcU2Ei7xxrKuhMU7R2SvRSADi34",
  "key13": "2jt9oadXUyN1EUF3Jako3Ppq6SusqtVPF661cRpNFHt5V72fB6Vfr6DrRUD3VGtgHHTwf8zkcKvnFBMN8SQKotZG",
  "key14": "4wSYHG9b531xzxMet962BPL3NPBnputA1XEkSc8Z2vZuxHQhAGLP3wWoS5iufFcZurp7CGoGgz7eqdJWsRktE6vA",
  "key15": "5uZ8xJRAxM884XCog3gZoeBRC7EJzGgJ8WVudwN8mro1tdcoM15LFdCwqe9MrX5jWGSp6Lynp6BtRAmTJ73p8sV",
  "key16": "22NERLzPKPqZ3mJazy4bm8zkTUBUXYQH5tAcZ9eWgxFihyeDHmDvJqeMx4TcjtkaYZ3QGqms8cJM1ssntLUmu5FB",
  "key17": "uhNHyPrzH8zWqV2dT5DAurvqKshLA38tatdYazGZ4w55eDFz4kVjwzLTefrKH3uNRnBSeWdVb7yHX4NUEeDBNHx",
  "key18": "2kqLKX2cgkxdPqQXQS79sb767EVYi4di7knMhGB7iom5TXRaV5zYE5T3vGEb8eb4V1eskHp6v6JKj1bci1WVtBSH",
  "key19": "2Pe1VEX4R9w33yZmQzqpHyLCxkh1DcFXquCrAcHMhBShQEHwLUZgtseCfLCFGR4JXKpztKcrDaXg3hThwZ1YuD76",
  "key20": "5ta1WdBPsfsrb5Nn1NVseVzDDMVhLx6sbH8HWb1TQnPnw5oHGJaxLnRUtm5HT1rWsF9f9Vfu3YikvDFu2vQPVtxi",
  "key21": "4xUz7ovnzM3WpMDThNyRKiAxBJMmk9ahX8WeaqKNwqrdykw2B5VmdJVvAjg5cNFcqNqrdR6hnb2b7eXm3rBn6CQm",
  "key22": "3o8RbYiNdpuKTK2f7RJ9CZEChRLUKiZvsAk6SnnUeSKfR3GU7GkesXt1zsRxVWFcKKfsVTwZsukaeRVJZmudpk5b",
  "key23": "4xy7kzxmaa3UZe3iqfVCuzJJXtc7UvGmYFJzdBACAA7jpv2JzSFgcHn1RC3pFbbikeC4xjaMJfdfM2EeaEBKmt69",
  "key24": "41PLrU3mY9bcUUhwaQk6TzuyB2HFRd7DyQEDoZQUa76iHjjjG3YSHu3z6kcq5opB8dTDKkaWGXeiyaYUNbFvP2Km",
  "key25": "624YCA7Ky6c8nrCcVjV31LYijnzEg9uZyPrVNzRoxG7KQ1d4XJdRzkFGAD7S4ygiGXPiRyecf3H5T7BtfqmTVVNT",
  "key26": "5MvRHeXShxTKPrHWbYEvDpYJvvX2rBvUPuwEfuNTzHaz5bhYhTwUwsu1PEqmoPZzi3fF1wYREsDuNZ3nrXJFmQWZ",
  "key27": "55T3tAdraSagHg3Bg71T6Lr742cLvpqjuwacpo1tRutAqvYCcHFzDWE3C3W3wAdjFRCjr6t7aVqgyQY9PJixbpYc",
  "key28": "57gJR2sH4FUBaMC3JHjN7bcWx2LbeuX5Wb4y5QdjwaQ5fZoneT6i5GeFy2BdEm2p11mtiBBwYYGUcUzR9GN1rJQZ",
  "key29": "293jwSct1jQ1tqR6U9BmAP3aEFqhqzeSeMt2VySN96LrsG7yKKF6VEHc424siWMGegohsxxjCrNtymBervNc3Utu",
  "key30": "4E7ov6sR2jLazCLJcjwd8Qf8Co3ysZRBbA8akTbLyfExq9GNXQuJvtzNcGZEAoMzsBKoKqcBVciNdAW3QaGjZuUk",
  "key31": "58gvafg381fBvK58biKXg4udFNmsgeWi8Ej3pXNTb2zNkB1FpTvpFznYWXjwEJhXUxSkTt22vTeW7GJqSpobYuw3",
  "key32": "2rC7oDD7PCCNtQCm9uz1EAgorpktW2WDXrHYhay4X6KdzKLw7PUyVNYNCyRaoXbJYGRt9fTpBxWxwmTjNronCLFV",
  "key33": "61RWXJxWeScLnZPkCB7tjL8EfCNq9Kya3eZb4XtBujyj2MSJQzskLescd2tKeuLWiuduEwTUSXFcY1N9C5bbPWxk",
  "key34": "Z87mvkxzXTmzYqHqY1YLbKzbpqfv2Zn2vXg1KNxPgSmYhpgtWUWLNsRNpTse49wU8UjiCp2ZJCXbC4rGr1hPEQc",
  "key35": "5sgKjpy6ecrU5jyBMKo2XuUAFC9dU4jwq2Sw4YGGuKSNwupvJdXS7Cuou8w3tuBHuyuXLRjeXdYPciEWhB86mUbf",
  "key36": "5HvsVaBQgBiXs2m4itwzKiDJxX9zjmBvJk2DHwDphw73uRZ9D3K3fR3yQwfLJ2JbMKisnKX3HieTt7CCvXmhpLqN",
  "key37": "3BJb5msP5zxKptR4xhx7cm7spwummi4AxZikRmAebV93cqZsijyBtzRu4egpbRiLtXpgFip9BtHQKkwrD2MMa4Fn",
  "key38": "5FxU7akiaefXnRzLhZQvq6xiVCanSkx8us7v7QJCqdxTmP3XauuHe9ESMe8J4jRE4ZHj7bujZi9UwvE9V4ujVgPe",
  "key39": "2PcGKqZNLjhx42Tma1SErvqT1V5omj4wQngxyJPYZGNggCpEiiqWfwuy6ATQ3sGhF7qVKxGkVkJ6LDpa5ENj7TRH",
  "key40": "5JkBQrug9dtCzcz4crpBHnHFDaLpiG2MrA93dujPBc18TqdKG7zn5SBxDvKeU9eYP5WZjSSfBsUMde1Ch8jJjRv3",
  "key41": "3Yzoeo1n1mgn1kXb3UUXJ86ZEhf9qkqNZ77MxgnBsmkqrvrMkfSnmF9sgv8Qwh4yNKtP8fATNkL2YntfMdBadMjr",
  "key42": "4ZroUxt2h6n7Ns8ig7LkmXuyqeoygpHDBRrgxLC86JKbYDPFsgwytLzRU44ZsQ88wGY57cehzRVkbG2iRuWUnvPa",
  "key43": "YDuDQUUECveKAHyiM4uoEXcQvhtCCbJpagy1DPFKbTXtUjAjbHyYzgz1DWmxztXbKc9mMftAPbDmAZSh5C8cVoK"
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
