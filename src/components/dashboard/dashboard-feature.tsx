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
    "4p3554Ba7r7hJZuxGLjcCpEaffzzPFtkYd7yTJtQzGcYydFn6NJFyGkqy9GuW4JE8Z2QQi79io8EiUzu8Q12PwgC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J7Aa8n2injG8SoLCUSM5BqJSEq8Q5vcVoDetWZ9xju2c63cH4VYhP24DBpjKB3UXCChqdiS1h5GqWYVJZRoyE9B",
  "key1": "267zZJujsA2kkYUSBP6zvxDS9UXsZrFdswLx2TJocRkMj1iVnNQnX799ruS5zK1bhYrAFqUTDKTycPUJuGX4WJzS",
  "key2": "3hbLE9yR27wr9JEuB884vUsW9CsTUGQM3KbzhDa3JP7v8gqjbL9pNT3gcQtHftk4JX17pQc2MCinUPDvt1JABf7e",
  "key3": "4JATfLDftFUnUARP9htLddKE6SUbnSKruSsEbuiZ8S7JPpTt5dW6qjRo7fxbcimK67jbz5nAQonfLShej538JeNR",
  "key4": "45RHQyJnFX3UsDw1GBo37cd2xFbaTjKa7e125ahZ7bcyQtmWwBhGTfnwiyQ452QALuzd8ax5Wupx5JKhtH3RZjrq",
  "key5": "7wsMHqoRshsgXTZxELuCHG3EGZsb9T4XbNtuCgfvKeutM5mBbAv8d2aqojWs6oNkJkbeQPQGXwrPwBbg3D6F7HY",
  "key6": "4KRooBrYE9JXUHokwzM2wGb78XWvrVVYMmszkMe2dNBqeoBoFXXRUnfJVX8hpCnRo7JmfupxDictWtjs1yTqwf3K",
  "key7": "5YY78SATgpssW846ybnLfdnC1Pnw4X9SDBPzHtyMz9nkjRVTj97uTrZh9ch7EUhXRirPBNcq9ao9kembidx8sCk3",
  "key8": "EJnpeTnAPx3mmvtpr7suajzd9vRWzyGDWskXCYMMbRbfsToZKBi4ARbvDuxhT4FY8adZKgg9gH9W9SrPFNNSin6",
  "key9": "4D2P7WZdyQgKPPrs5aV5HWuVpp3483EHgxkLpaCZ9prkAJb6vyZqQhw9jEBb8Sh6wSqg2HUcxqhRgKFeXP7Uy3KR",
  "key10": "63FzVP3qCSziBF3DAMgN77xnd9LnpP5kbFv3dywYknKg7TKDBqcaMPrVutA74wxFgxXEPsxpX8TKCPfWgMhdDXb6",
  "key11": "XHuM2EL9iLeGAc5Z7KdTszDRW44DBDmeNZp2sNqEJDZCpycytETwVyrS6ncp1DY9P3J8sJw8jVvAdfWjuh5CRMb",
  "key12": "58ConKxV6sLQs2AktfZWZUncMQGLnHxtKBoNKuuuX3kiHquGQ3xhvezwqtXvBSavT4TPQmmMsRRvHk3vi9PDL9HT",
  "key13": "2yydU8Cw3bvN9EjFp6zy8ZUYgGHaaxQMVacGoanLE3bwHjQrJ6ymeikC2iSmKMY8LCv1WHXUUsxcgZm3n4of114s",
  "key14": "qirsUPWrMTYdXyJiYiMAYwY5vQjyNXGUrjFQrmXrfEy12WrfiHBVuZVCdpyLNQS7Eiw5aez5FvAd2cYoTAoQxzv",
  "key15": "49fUtxxKfj2iuU6kY61LphWZcXqcnbWBFojQusymuvdEmBnGnX3jVMQNnSceKZpLwMGiSeBbhYaK6Ex7Xxbfgy7H",
  "key16": "3p4hhyejyW5QSoK7XjBXf8Z6HXb8WsjZhxGvyoqtfYn4mD1SMPZx3urmZRCb7q3pfax9prns3NWQJJQJYFHsvqgp",
  "key17": "3DSwGj5PUNFx3jSuvvE65i8U3rtPb9Gvbe6f3adsLmcWufSBt1JrBXuhyo8rD3pRvQCN5ee1o745K6YY9NDpeNsX",
  "key18": "4MNcppCYujzHQXTG3TS6qCn66ikKcvpL36w1kSSVzWEMaHQQ1bjtZ66BZb5TsjAEL534P7yNyE3edFgFb5S8pMGB",
  "key19": "4rHmWGmnR9psKM6mVieQsJg47cvACJXjfE7vorrFNj1zgUWddhEstnmL94c6NVHVWedAQfmUUyN4FFwqNLa7hGpf",
  "key20": "5Lp4p3tUeUXmA1EE3TaUHbyjVDBdnMzDMEakCyXn28LVrdReus23dJdpnMeGQy79VZRvuP9JjpQvwESztqpUyHDt",
  "key21": "8m8UesxHGmyWB3n34gCSYuLCsiNU3DgFfXZ4pSjNQQEMCkuZZEp8kd77RBNMt571uNABpcmwy6JWU1fojF3nkn5",
  "key22": "4y4ua62ZNXYrpEhXa3hd9dtDqDacRN6ah1pzbVsNcW2AKeKVzo6XBEc21go1pEyyGWoSMZpDirMhVgiLYP86L82S",
  "key23": "4i5XigkM93E39SZFRseD21iXvse2ff8uMPjYWHmxQhEiQN8ZUrvRbYBc5fGHSXzSVwVUi3Wdd1fxthtL2FDTYytv",
  "key24": "sErz5KX4yatPxobz6Ze64sjsPktKGBFguccBRrTMEjRAybXqZeNuDJD4gmZi7oKbTpFPpbi5Rap5pMTzrE1aqyE",
  "key25": "4Lj2shxRJmr2uXYnYWtSF7sWE4EjegPQNSMSsdjDGufqUG8xt33h83ztgjERtFyHLHBUQ4AREkQCbwxjW4ufNHSK",
  "key26": "51U348nfyDjA1wKi5FW9dFmf3DP8emUEnn1WeEBYiFa7MrpDeyAZPrYuVdXaq8U9Ms9KzrhWa5JSoRx21DgFfb6L",
  "key27": "3Ed2TUdj9vaQsdWbf2kChAY5QyGWaBeWeD8MmmUA1E2Ha6Rzt6LyRAJi27FZpDTsfxczTCYYKbFzGSFNEbUG3ixs",
  "key28": "thnr9P2LR1MBh2KsLq9GcTor8est9USpLNv1hpevwwvJKEMEav9pzLxbeWPePy7pLZmcsN32Sn5b9GuPdmAo1yt",
  "key29": "38gZnrX5um6PHoq4tD4gWL1bLRQDniaug8MRLtF2HXHExfU6NqobBNk2aFwtg2MX8ArU4ynX4cZPD71tcaYNAzB6",
  "key30": "5k3TkCTc6vrUMmpt5TFdn8TWJa8RfPDr71pZ7nYXo4f2J7XhYdiGvJ6N58Tq7D6kTNT7uuymkBrdJUEUpPS1uDDL",
  "key31": "4WPFS7WKRcxcLbHGEekRyu3djiPdKdxyTwvs6BCsbvVFFXg755iG9BfCcY3UtJJU8DS3VSfhr6hy59WMp6n3nXP5",
  "key32": "Dpe5fCABmvvyAFqDZhwnUQqXcW4v3BRUqhgUazLxK2QRhJygxsg135EdP2yjLxYswdKi1BwvrCrLEvAqYcoAhzp",
  "key33": "424RFZ51wMBU1boSrZHZzNKcB4zafYYxHfwBmBYegRpumsfUM2mkPHDvCY3Z8gnzKEsWLZnxEFMZixA2xPzKPtq",
  "key34": "2jtf9H32ihkkbjdojkhje3QftEDufS6UtKzEXaH4uPE8UxBePdYu9cZ4rcok1WfmM5ujV953BhPwfza8BJTcAkzx",
  "key35": "2QsNA5Z2VmQz4Y3zAPt7KUQt8HGLFwxH1H1sBGqoUgKXBERiiWXEMtTz68ymSgQKqtNv1bfFV6DsnX6Pi2WffcX1",
  "key36": "3jKTybJjX493VsJpf1H6eutgRnKhLJUeg9GAczLuKnUoooi3anyLQWUNoZ83nN7VTY4ViYVMQYgwD2WWMnkX9F2r",
  "key37": "3nzRWgomLUjFNwaUQsaAzASQ4D4tiiQvQSYTX9cRjKbBWLQ7zJFTfkcsFFnVUL5Atw3WVBgEUyqK7UKzhi4f3vwC",
  "key38": "h397DZUs8o8A99KnoBEwNheFywhxeRVHvGAZ33AFLMrndaYtL4u3gqcUapNR6F6gwumuNkojY1oKcBfA1j1ucLG",
  "key39": "3Exk7ZumLPuTZuUzUZmy3EsZRkwBeg2zpMnaArBkhikWpZcMBgzcwtpxN4xXnkLvYFdm8qGCpLYRdJqKx3oM6Z5z"
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
