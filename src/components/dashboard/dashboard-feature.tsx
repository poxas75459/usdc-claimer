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
    "4TgFDuM9w8UFWE41TWGb5MY1VwNJuKWVz43yJQ5kMXWYfXVYsuKTP6BqcX4BhXbFJoCmadTLsEcgbjhfQ24nLHeH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36w9zJpiBUEP35Nf327xV1SK5aF5VSVjMhYMMCh89pu7Ko7Gj12AwDrCYujzpj8CiVqLw662SAYvjHRb9WszT2o2",
  "key1": "2AhKYebS5k3KEBqrXdmf6Czt4xV1nDQswph55Jgnhu2nJX3domc7gmQR8XJjpND51uDBGgYHr79WWMnsfmRENWdA",
  "key2": "QDjbYGJDqX6ALja1WEKDWFk1k16h2z9Tn2y11fR7oFCz8E7X1biaTLS8DanAFkTKwDpCoCUHEi9bY8ujKAPU2tv",
  "key3": "4LVBZQuuALoZuqN6bcdWYXUmHmvdx2J7FcDpFjzA7V4c6UNLdcaxcvQ6N9MgrSP446hinPJg27yiELqwwDpnDUNM",
  "key4": "58sxR24wY1ddqjb6HgQk8Ce2D8gUkk2p1WkvajnN1N8zXK9amD9ZGoecb5AMjmSZ7zrwtM8KQDvaW8puX4r4oLGd",
  "key5": "jojKtK9djHN8zYp3wuxWu6NvUUX86L9qVbsecZBAQxP1n9sRRcsdxXt8PBM3dK8Uvg64v3yoYPFkSqad1y1JSqg",
  "key6": "3JmeVdesnMNLToY6tCP1eKcdQ3K8acfSTNLaTrHrZ3agGawaSgH4QzSyUakTHGh3XS2B2g4PR3ku5QvVTp5Wq3Mm",
  "key7": "2fVf9BNdaKw7TdJvxb9PVDYZhmxpkFjsPbjmddwrxxYbp5gQrpPbDSM9EA8U6CrpKEbPU5ryT25pYLr8uupqLjh1",
  "key8": "4N5nHPFWJFiXrr5HjBvZbdWqpbaQi7ctsi1VNSdzoQUwbvshRrs6RWc5iZxBbLR6iz4AyEvpPgb8gavMovTy2Bax",
  "key9": "2FLCP3QBkoMd69KSfJavxS9o1GTisiLxWB9AiZxW1rFpaPFegAYZRnMqpumUCpETVSzqm4AigsVbgyWYE4GbCt2y",
  "key10": "3hr186XVdvACm6QeNZ8B49vwUBLCvMjR39FdeeHTsoPtaSebLoNGDadTLHTKGMfZjtZZEwvRr2EiLjWU92G3tYa2",
  "key11": "3tgdAo7kDbXQYUJ4p5bG77hqw7edy9XZpyVeiQ9BqMcrXRRRfvveS2hoGfyn7CBY5G6z2fpd8rWoLJiTUUvBtdHN",
  "key12": "3FYGu4hgfLFUiV6ZqFZcHkYcPQfMknwoUXy7Cea9qUcoQyG5zjjd65HfzehLPVY9dyNtsZJBdmtyGM4VJ9EMoWf9",
  "key13": "5WsQZbgbt5P9A7Zg33khWVAy4rvxJwrFukNPB5BLfzfYWhMCDwuZD4fbNsPphnga8MgSBEge5Wt7xU95HRjGnuPk",
  "key14": "2Ewmw8gHhbgTV6ojj14yp61hQbpz5xLBnQ8cp66Bk5HKeE1NFghw9MUnigHe8ianzQUx3BK85mBo4ijDsvudQpGe",
  "key15": "BSiPC4qdd8ZycTTQnUJmcxaN4ifGUm8irAeViPBNXEtpySMASL7pyh3dwWGqJNwwYzzwo83eyunjVBxJ3j18Lzf",
  "key16": "2NdVCGKBXxvDbCm6oGgKrvrrDiQ6uHUkF34kyC8BY1zmUt7PtkbcsjCZd8E2eA2zQTUfYHtcwkPRzLRitzgv3W7e",
  "key17": "59rpKRKYp7qgunzeSAimDinq56CkZWfj9tykybZjjk2N5wi3VPRPerL2GCddGVZt1hoXZLkfZkQwRdtev3p9WTw8",
  "key18": "4d2UAC39yc1pQ6RPG3b2o9sggmBpQD3NSKG565V1tbqbLCE3nNSiXRGXPyvRHvXodU91EnKa7umWd6dqv9PFxqKy",
  "key19": "Zfk7kgXVwPxay5JoPoEpUentRJ4X3bDfBLvV1Vdt4nadzs3QDcqS61QSrdSuYLK96BQMY9rWPsDBsZbkkQfLC21",
  "key20": "6JQEDphuBZxpqZA2zDEdYAPhjN5yk8GZq4z3qCyv8SkGnMLTVwjdeEZMvkbk4C2wwWYbQEDJoeXwR1P5W99kDhL",
  "key21": "38caayL7nLiYQeAo97J5tfUbkn7f5Y3p7N6ph6SRRCS1KR6wX9tziKJhRGwWEcskDwt71rk6GkjTzGcMW92P5tRV",
  "key22": "ym5KKSPJsgQA8ZiNq2tDM3FXTpvnTBZ29qxm7H3dy15fNXZDy6kLn3mQFVRVKvoMBdygggim42tUmx62J4spMYG",
  "key23": "4dqwv43NhK1sS5uGQXi5CiiUZAvRoN83Muh4sD1Vf3yJwyWWJtVKSf5N3RL73MLu9diZx3XuyvvWpUNLwuc8vubU",
  "key24": "HwY5asvSKqmqc3EfjDZnFTV2x94kJEBAnbT54sx193XxBj893bYTB7rqNwoJA6wrHraJcZmsuhWMHt9MbDZC76v",
  "key25": "5mt1cCgkXtxceB9QfyEE4H7vqM6kjm56BWP8WDmovib5vLKoEByGE1JgcS1zkXjrsEFjcDWkiNZoiCK5okdQVwYy",
  "key26": "61W5gkesGDWFrLNui7bHZt5dZRESomobWEdWQfLLKnyF7adaudCVEmBKnu1swbFzNQxEzT6jfVn4vusQxNRnqqbK",
  "key27": "63WYMD2qYKWZdeU9EQ7Yq2PeP32Ly1UZ6tghmNRJDzNahvdZidyLZj75hjZrkGDbocAopw7eSRYkvNAYFWg7jRox",
  "key28": "2Qcroh24tX7TZ4fZtBqyue9edFeEtoBd6RXnA5ck39vdiFcsQoQLGYRM98DMFuE9NvnF6sLPU33qGojnXTgGHRNX",
  "key29": "51RCEK1onT2b4E5pVhfNGwSMQmpQdhi64shDGp1S6JEB7pG8mfkHWj3XJMEcHUBNTMcVewnLJHhKaLN55EXZJuf8",
  "key30": "V9qGpQjm8wfzwLsrghE61cD2JRwWi61bHbGCHPnj7dwPf5GwTMKXYn5jbGZgQT36GqdymzERsv1aiooRs5Xd5q5",
  "key31": "4tmvdBbTdnrgjEcdNun3kieJSBx1MwgSfE5PVr4QVT5APcVAFxkyScQUiXD9jqdyMdwKFEJZRNnVsha7as4CFTCr",
  "key32": "5XW4AVqcVEZVKJuFSJhTsu8wsnDnNmjqmfYL2aHWbeR2N3g7dwoi9HGQNm9AgRhtMZUonon7A6uAPZkZCWn4Ntfk",
  "key33": "Bt57djWNVtUnaWYtFJprVweWswecQW1aS42bgKu74VWmjbA8DrCQ827LgyTgLgJ7AzzAvtfdnf3xLjsGeM6Hbb1",
  "key34": "4VaRz895ExqZ2zdGxnxox9n4Kocx2TndWCwQ3dWhBM7eopTHVvzEFQkdiMac9YKQT7ZdVqurAdK55nEXsZEyMpFU",
  "key35": "2zfsjnaHPQCg9a3oorPqaug1YGQcXa8RxCYJFVsxa6Cu57Z81ceozixSsTXYc42Z9m6FXviPQiuhP4qiCDAcDDsJ",
  "key36": "um6aSGzKMXyj9fDpE17zbRiykajEA1P823mXCNhj4tAXW2Qj26jEeitTfWpQ7DFvY9LYXkAmBRdySA8rfceUWCK",
  "key37": "5op6MiyyUUgKQw4dAEAr3TeViq4Pso2mZs7kCPUbbJZz5Am7g9W19tiFUuZf4w9Pq8PdTFB8pir6Yc8EBD7JTRLW",
  "key38": "31XA14KLJkzp61k3YpgcJt5yXcqa71ZNeJEFrwHNU9gWjBM975tcyGfXUN6QmXiQWZ26nHHyJmcfhs731YpZ5Gsc",
  "key39": "65hqhW5tdG6fT3jW4MubAB4v12iUukvNr1vCPWHH8KUffSFxD4aDFN56YaLn1c4SWBVAGGWeFz7AHL2Vyfq9cxEd",
  "key40": "ugGYSUuNyY3WakrL2sU1juoXbX73v6oKR6fBRkxjzJh1HcSUjDXuSNYZ85W1V3zXDHRskwVYukSSfVuFCji58XK",
  "key41": "2JGeBGVvzamV5hh4Yd3kuuME7ic9pA4T9SnWTKZJ7Za2s93Cs8mmk4mrhZUinQ8gYvq8cjnEiadXW2oGkiJSuAFd",
  "key42": "5gvCLP2NENeiKwgLowWWWT3tHVf6LYSavraSrQEc2RZ8ZTDZLdaDDJCFzMsY7b6qhwKLf8SBpjjo1LazZJz8LfzU",
  "key43": "2kYevufC6dE7hnJH7iDUZQjj1bFvYTc1BGYmqMj9CJZXScJC6kkG5yCQtfNd5yxDte1wisgp9UuxWvWefH4uf697",
  "key44": "45TQdwdiopkBB1ogLkpZsDUmC4fkTwivwsh5ox1KAgroECKUPmu9YRFeys7dYfoR5uXcn3BXKx6FJmzf944F2BkW",
  "key45": "3LZkpxkaqQ8qD8ajqcivoSp79x7VUfjKVU6T4RE4hoQaLAi7g9pR3tRsQsFa1gkbAetZqy2Knyi3EipFsDvAqFoM",
  "key46": "3f8peCA2aGeiYBdZfZzxuKYCNxjTwE8gVvem4ThWDTaNF1b25cRm79oX5rYFJ2HrXks4mbgkSRxWobaprEuRHwdy",
  "key47": "23CF9Kotc1xeA1s8Kn4fg76YBRvwgrmT9Ur8Yvz83eqyZudthGE3dkxxz8niauNpXPrs1jnk1BRpyQFfAmdvtWTk",
  "key48": "5NwkYS6QFTe8fniU1TNuNG3jjuZzA9tSfrC9BLX7ES3az5jrNHLnxK3xm5fyrJjZxc8KrAzAAGqwiHz5VMgk94T6"
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
