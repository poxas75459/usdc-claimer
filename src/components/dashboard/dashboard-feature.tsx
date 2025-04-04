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
    "4zcjHEXiiEaHc5W3PV8FRTwmyWumBwi51esM7poFksDKYbmAHPsebfjbAFfRERgdAKL1Px52Gifq6m3dmKQU713E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RfenP4VYhyqbkntLoMFtXZ37BuhtZWwpFpnhoXeteSmyj8PQBWHvrZLFMvbDPw9y1KQiz1P49RXi4ysccAsdEY9",
  "key1": "5XZEEVtDM9dGjwxnmmUbjEUY5t4a2Kkt5mMc1oXb4Gj8AwMH8ZdaxWbWuR4vvhxoCR8fKNkbi7zhP2LaFK88fXxZ",
  "key2": "2xryLbRrqnt1JriVham61ZGmXm3joeLGt83ndQC66HPrfNMFcwHzfn33ZNMxfvvrv9uHp4y3AGDtR4LM8bnfrqDY",
  "key3": "2eBzb7R6B3sT3hoy5toRzcaYNxBHcEq49RZ4AR4cichfsW2xD7zowmJU4ruFAbtV35z9xjomH2zP7oinHLLvwRzU",
  "key4": "627H4rWtGniNJ8wp9jdqMLkcJbBrTeQVT14CFPVAquTcSdwHWLWNi4R5Vag9fzJiUr36g5UKXrp97CBVrLnym7AF",
  "key5": "JazQ4EwxXR3qhdUyPpbA1FQSPkTn2iz1kvT8c9dnTBSLwW2qZz9UxpJeBYSQUmVEDzjuzGC8pgADmSpz4SwpG6V",
  "key6": "J53HLGTu7PfQLZ7uSQEZNoKfyremxfzxTJSY28gvdJHDZ5PQ5d9tUD4zJrYt8Y7rkgvPuBZs1kAznEWBgHuaSBN",
  "key7": "4j5LHLmk1FuhBbG3kABUf7qbVLfDcAovoC8BtRerh8ie1RouyWsqxj8Ebi4AsNbHR7MtfZNdjzFZmyo8ZyGGswjX",
  "key8": "3pZ8NZ2g13oyqxcocZJ6waGCqR7DRNEuBhrJUkCkNTKDXWHDJffJw3tSoA1oiDqThDEQawDvocBnhHffhqQF2F4R",
  "key9": "bVgBghbqHWkr9yeFXCXhoCeeyaDUKSgkQQhw99n6PDcvVuf5K82H1WiCToJ5upSnWZiXytAc7f6SH6CMjHQYiif",
  "key10": "3CuwfnmzSup1q1KAMybKC1iTZvhJ1KgkGb1xGu3ytcj5PQ6zMjhpXMRuKiSdMc3spNnDBUHc5eat1yC8vmf8GwJ5",
  "key11": "5EaAMdbc6LPHSFWpwdRAu3TupnPeeC6RKwYmN4G5iy7BcNTamEzTpBZbhVQvHRgGB78J3zNX2GnF8NjYLjKFDphA",
  "key12": "5KVuVNNQi7mi4ZCk3KzdQELa2mLGTQzfv73ngNoJSXNPUfEEGHpXrUgLuHnNF5u9ZMvpkcnZC2Vbr5sT8pBPoSy8",
  "key13": "4xJeD2cCtyEQj1jrpLWFpoQqVtdwm9vGM2uqzYpTBH131MfDYk9MysHid6EtWimTzDrBG5exc6z1EdWvY2HCCYF2",
  "key14": "2ftxcSLtpLtmp7CUxe3XYjF6iE64WWTxiHYujRhczcy8pKzYawfTUshdSXH1tij6XjKJCMFT2viLXXtcxNR3EUDE",
  "key15": "4RgvzjDSbPvp2499whEAosgzPWFwLSAjLCWtN1MbWt2GNctPFJ84XgkBujPrQCjeEcvFsCzb83hJ9HTuEso2bvsF",
  "key16": "5XiJcikANig68XnPQAGxES134Hpq1wk2UtEY2UVzEzcjRpfw5MVqwh5ETnW73Mb9YmCk4PEAVQBsQ2syyfSuYCBY",
  "key17": "4hXJgJ5NLUM5GjCy5kCXSd2jzdV3Fo65NRki6dtTx1pVqetrhRUGQYNFT2BzoXJG9UqnQtQkwpb3asMrmRBg6Ltw",
  "key18": "5zp9KhYAv8eH6eWV98EX1erR2YJnrueqbSuAHyk3ocJNLMsiL25d9R6K75hYcUYTFEiWFK4nYq5wiu3HsdtKGfe",
  "key19": "8nGu8Enzv7fDGQA8E7ZYzemG237emEoqA9hxeC32ETqFiBvZHLJBbN2LGhRrSExTJkfSzRiyTB1K8w8VCDNWQTx",
  "key20": "5z4e48x9peqWQ9PYx9TQ87PDqwvxJKrdpv9remVtdJbtVGobPxX6hAqksFepkkgDHo96BfbvcWfFszzzTNCZYKn2",
  "key21": "kygrq9oAwf37Kb6GzCntn1higy6VhjC2usms39a5PimRn9e1HFWycjZB1xYBeZqXE3kspuiLfgXgDd3Yzr8C2a8",
  "key22": "mCZwg8aqcTH1kA7YM15qY6vstyhKpVy9xWLDgBqZAdBB4D94fjhiQH4yU4J99Atdom49ZryyCtFkxWS2i33zFeL",
  "key23": "3iPB3krRAouZeTHjzwrryMrjLUQ97reK1W8d8G8D1gC28hnHcbGZJavBDvZLEuN4mvEqvCUhzaKUNMfc6Fv52Hu2",
  "key24": "5HU2sWA89UyxEp4UuZ6uKegYGFPJmZ3oiFfvwh37jaU1xUs5oDc8kbBjVEBJeQNWyzAGJtAdn6oMpgM56hrHk9EP",
  "key25": "43SVpZKBFCpRWQv5CvSnm7Xw5LQPL4gYmXeymDaXXvKB9fehc92DH8KHArHEevzMT7Z3Uh5rVGrW8Rig43oqEK3h",
  "key26": "58NmB61yXbg9x7diXykBC8ZgMC8KKstvoA36NnV5o6L6h9biNigU8Rq1dHtgfiw4ZwXzhSmnZzQaaZ4VRfUXwgfj",
  "key27": "3zGsuZziEJ2vsRVN2jjpT6qPYt3bQE6q1oJUbzKKfCTBy22PgZm7tc9E3VDYStF6j2qeKHeah7cnA7oywx5ocgpj",
  "key28": "KkXz1gBsghBbshx26iXQvgi6UoLbpf5UbRFS25sj5YJUgwfo8CocexvZx76v4EjqJRH7jqPBAxrCBRcWV1hwjii",
  "key29": "5RzFHysZkyq2ZtG2W9xPzaq568iRpAxLtHrTd4bQBKBJNKqpcVWWN7kHwns55JRrZP7sD6aX5g9U2NHcpb3CbD8z",
  "key30": "bdFK8UxyzkhAaFjMsvhuvH8UD1gHg6bSFGkE69cnUmMDmURv6pfn3uyTM51MLAAd9YpfAKZmDvGpcVWxfF6eqGF",
  "key31": "279TmUHPsmibyhnq7QkbUCUbSA6dHZFWi7BGTERa3Ck81w3Aj9gJp4uxUEQDeVii47jRvhPTSfxuEANHvaw1RN2r",
  "key32": "2G6ZoUcrE6oPZQSKCfHwVMLy5FminnfbrJ9ZDzQcpm8vdXoSvs5igpeytkcQee7JAayPhrqR8RwS6FrgAQBY23Zi",
  "key33": "2XkSUoEpafPNWMFsGWWgKgBnH7tNAhvWzY2xXKWapdWsNFLefz17xBjiUpfx6SW9HL6fYXLPC8cdMF2UcN2Kp4z6",
  "key34": "4LVDqb2ajSimujvU3XAPXJrmteFfjbiaP19qnKJQoS3qqofu5gMESLvs17hmWjHWFvwW6AqbjwyvhygA9TZVuYnH",
  "key35": "S4pP2vXvjh9RwT2acqFoxzoiqgquRnMTEYQYSNTNDsWecDkJdPavQ1hU4Gv4fVsqpkMAazypLV5X6g8vqQDns6e",
  "key36": "3PDNWbhpo42xy6ypuoJgXhjVCy6XQQBFGmUu1iT9zCfqbyWszVnX54tSFks4b3oGuifVdCUfSZbNoeRMddj47F8y",
  "key37": "452uEkx9uce5jBvrbAhuefrRvfvvTXrVDNcKgPHEdk25X5WsENXSApqxS7BLcaW75SsmEBHYVFKZGkXN8bFZUhYF",
  "key38": "3GxovN8Xq3N5bFApvhqhPsdGB5xuA2GdpWwYXpEfuitoeUsyegEucHdSBzgmxJK6QmCmuhbsWw1B9V4KNyepFJGt",
  "key39": "2RFTPAbafoQxX764y6Hwch2kSrkNR3KrMhj1nqQ7NRysA521ZPnd3Pf4D83kZq8QUFvfh7WHW9zH5RMAgXPnbgDC",
  "key40": "3bMGFfkkyiT79cU9bzHSU44HjPySzmbtajcA9zDGwcD1Puy8pnWsGTBL1xcsLzAydbd4AiyMmQ9EyEAC1i7rQkSy"
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
