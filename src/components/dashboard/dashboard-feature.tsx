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
    "41FNrGJDTjbWqKPKvJmYijjioqpL2dVLdD1h8zw8DMkiuDQqCnVHBVHD3YcWK4nLH8c3qtM25RjrGGh9jEq1nWbq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34uXyEry42dgvcUAChUSU8fdhvxLN8GGrbGTuFor4xN31ZRX6P4iWVbo969mq2Xwb8u47UagnCkNa1xPC9Um2E8R",
  "key1": "34v2bV7qzk4xJ9CPgyZEfuqGqfob1dgYTMNzFWssSrcECM2nkuJfMxxC9Y85TNLgd8cFf9WUmq8kckTXZDZ95wPz",
  "key2": "3585GgWtAzP3MEJAhr1FyhwsJufRXwNoxTgeCEc6C1fkpPeEgrwFQiRxthcZJjopTWQE8btT431qMamig4xiqsGR",
  "key3": "4nHEsXRHHvgeVco3cRzemLidAZAyLWtgdRGYcKtFHdV1nrkiikjn6x5xcmBUNrcAYivtGLUjzDA2cLHBECHaNJRz",
  "key4": "HrT43uTVLLqZfgTKeBnmqXxTVC98dH5XKJL9CVWiQjRL3ygof83NemaFXKmjzy6fjFeaKr6bFpRKn3nPpNA5Haa",
  "key5": "4HHZxL2nbXEXuQAwt3359ZwojYcPRocHq5rD8rJUvTezPzMjjGnbJEsSbwB5cMUsU2Ljh1A1LrXWcdkLZa1mQFg7",
  "key6": "3jqcq8qZUDkUF4bJBZgyZXpY9fU46PozcchwzxgU7LEDGY2jtN8mBPcouvTFAECi7y6xgTEMEP3ykLWNr89Kwv1P",
  "key7": "5Ti6VbqfSej6ZgHzWNViuVBoYkjvLG6UNY1vfUZzMbfuKtzoDasdSk7T5xcu76CL3DCZhA5HYGwa4JtKUrQbc4Gk",
  "key8": "3FVQZENy1Mj22RRJ7Jx3VDaDz8VUohVvWKwiF1EinL5wFcyL7ttJexJdTqPttFaNF7AazjHAUq5SY5ihH295qFJw",
  "key9": "i6UumGdeJq5W7B5s5ZNwYEgbY2D94PmvqsftSxUhvTrxwBK4iqiXu4TfhqgLYBgZ52yb6XWmbb11VpXvNjjUWzE",
  "key10": "2PJ2yNcDBqPXj7iJNKtYkhZaPoeB4mBMo9Bv5X6dRo9rpNDUUQyc7Q93Q6GHGVBo5ZWqYVfumDEVhYBJZGBM29zj",
  "key11": "222fwGtJvNxVXq53cU2W4TCddcP4jjR1NsgvwSm47Xer7wDhpNDLXJFs4QP2qeFLmh7fWQni3Yk76cY5tCkeunj8",
  "key12": "4ZPFPZaJ1mC5UsMZPWmobmRVpgETdHyAjqRATwFiWvmzr9ZyPmVghYpJy4oYTjdiqxnj7Jz24mD5iXNibPgmgHur",
  "key13": "mBGWj4JmsSaQ1zJpKNvGZjiN8GyqJmPcMEq76zPTMjXZYDGVQFQirF1omkiYv3aNbxiJidExdfxih82raw2YVGq",
  "key14": "4DMQD7Lfe3FMtLu9utCzNAgLo162N9JkGhme3j8JkJycvrWhxnVzc6jmCKEPsknm5cTVaU5AV1wa88Pqvugp5PRs",
  "key15": "4Vghz3oLH3jpnq8keoXnNcmJeo4QPSSCgpZB33DNSH4bUVukmYPov5fLMzGHZJUtSm9trbBTjSnFmMUZRuHFW2Je",
  "key16": "546cht4FVefwrW3vUYm3K7P8VdbQcAYVi3izH2doVr3ZnuNZZize771QvkQHMpRWVWsba18fR9Wu2fC4hcRYavxZ",
  "key17": "5yU7aoohozkZTdLT56P2kUC47CmUTHjPDPZmp9ViJEM7Fdisi4GqPTcdijdVcTu8WrCMCRzVE6ihudy3UTjUfP1p",
  "key18": "FsGq2uoUcM3TxuRnmNjRXBGR8oaKQXJbA6o7qf5s4JDE1b6HsCoe9i94ZBZHNaRa1HjmnZ7ZDRdErrKbPRNnRA7",
  "key19": "4UjMsDqfrwWE4ABYrafbCumEGK5NPPbyze8fupMvQVr3Y1vRQiDSkGnCYrMKizBRZvzWPuVuutjLw47MxkNaYbWf",
  "key20": "4JzjWJamMX6iq9HQi9P8abhdHAjSPRqtXqiQomNEwbw7j8euWCQ2V95c47icYn56Nx2qvdDrJ5AT2Eh5Zisdsjus",
  "key21": "2b7HwKZ1NREHT5EZ35Y7n1421t85BpeWFXppr1uPNF1bA2stpRKyWjjG6dprQFkyRnHf7JywsaDzZa6ZbWDrpVTQ",
  "key22": "2MHk1QuKp97piV44XZ4UqwHemwGsKgYjfYHT2vDwbqqHj3NQq6UPbViuxbLMA6ieS9rbH2HBXHmsq7hzd3wJsvSb",
  "key23": "5K4GQscszCfUgQsyRTHDY4NK6fJNPvWhujaKnkdmXUHmAMhsguYkh415r33pg7jinF7ZiWmi7cLStg2qi4aAqf2V",
  "key24": "2YL9GcQU7xKAYSC6XcAxVgxoZJh7irqkjv3jbdDxNNQye71BC6kCK3YbeQB3KPFTTf5iErpmk4y1gqEGbY2zUsPr",
  "key25": "48YdrwpyRwhfJ94Wrb27sPHmRrVksNnt6y6RYERdXFEmZdQwxsqMbrtHCU9pfVJ7GpCDUdwCUvxatcVykD9hTnYT",
  "key26": "8mFEzuWpGN5vKBBdY9Y13X5yRgxfePmsdELSAPhHrVas5x3L9aDniWUpxSFrQTv86XBVtoK6V4nhYkPrkGYkJ8s",
  "key27": "24Fg8ixUqfsdErbDxxSKrc8PB4eyyhdYtusuLp8aqCBfrFmQtaHWEvsqcc5uaGeEfXWVBkjiqSpVDJJ1mLrwr2UP",
  "key28": "56Qa5vX6EMErEKan1hrsDvXpejsfGwpYJsxazmpPC8K2nPJobFwtarfHUHHdibKWevZTwjp1s5aXxVAFMSs4gsFA",
  "key29": "3FNv6E9v7eitHYPUjifv9e8CRs7hUhwKdpYQQYZEDbuBoxsetsUEq1yPmnvRgM7Gzhv47ZpVQqL4Cus7ixGBsKDg",
  "key30": "56iQLESVbqYzcGX3f73WNySCBHRgSoPAwFWpUC6AYF7ZE5vPMyYVfniRVGmSbYBdE9WcaFhdHM6Kgr1Vd1vngqgc",
  "key31": "3xvg65F8m3PhWzneB4E8VsBQJ5vGw2T7Uf8WemrgruLnyHSG495EZFFzdreyhDvKGYPPZXtivF1GuccnfC4NL68B",
  "key32": "WDQxGodVppv1mKvpRW6FHBuD6ULFizdd5hFUzQEh89uHqTZqTwutZgZsUoF6EG4DGxMtqhPJnwBFotZSbCypzYa",
  "key33": "34vamxwJzqU2bwmZ5R5McrCcYMrcc2fcn7wXDRBerPfNKnSxa83z8dEG7xN1Zs8hGUvcaBmJ46tkF99EyS1fQChk",
  "key34": "3oEM4TAfqkcZbYWCYfjzNYqtcm8QcQEtheFrWEZ5BhgMhk5xmrFNzWx7aZHV3Aib9NQZd5mcJZopge5ZUggSXq2F",
  "key35": "3mUEksQRtzZvsjiArFdj4KPRGnWKugYwiCwof7PjjRAGVzf9AwqMFfNjeEtUJqvXHBLrCeLvwpTRKyo9j84wnQvU",
  "key36": "5RrW1WsSBed7ZTNT14ZZDPT8rXqYEMo5MfFk79Vpy2YA2RB3oNm5N7w8HfNsN6D5hxqPnQpk8SHkLosLPoudbfUR",
  "key37": "8mfgYW4JHrUqVM3LhNbrzErvNsNgBVUPnjJqHuszUwfU6QvP4C43jFYQUB7x6duKCcPa2LazPYag5fVxQiLgdMK",
  "key38": "4ejoZiK1nNHDYfP4kYXByxvTy1keKps1iksJfvHZBeYU45D1duAUAVkwiETbLbKAAqCSPsSmcPttR8hddeWe2NuF",
  "key39": "2rU6CycgH1oWaNYQxSDojPWZTvB6dqeKhq5yfitNyCBLJD313Pi6tSxLaNaw9kABUyxHrZZRgiWVbH3iGmtQEfoR",
  "key40": "4TNJg5rYTpK5SfZ5wZ5rJxQkHxAWTPK6n7kqAFC4SXGeZ3G5jizAw3cXXszWC3EZVz7QUHF1MmJWqC9PQVdASpv5",
  "key41": "27FAcbLn1M8nYrCevCZ4Hm4CiSTNRSzt1aA4RGGvqthkzg2exbVBEFnPaPrR4biBbM5Who55QV42E1kYcpW77Wkg",
  "key42": "HAQoYhvQMDszWXZTqCu9MFeyYA6RH3scMvhUW7miqu2mBnXBUF9BAB33dx7yRr1UoZt5U4iRSfCKdTeqDdU1Lxf"
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
