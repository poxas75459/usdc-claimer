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
    "4NXe5oenwUw1KFQ5Z6GfRs8ERbog6Pk2H8irfdSGC1mDWzrPycdekQWAQBCQKdUzvTSDary2sUwFUZ7Tohc3bDJ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oizWeNVwTmuSQznxN2mxjsx6L9DvhWPGn8RiMvQ7sFttkoKxnPM1x84kuCyPdNyegx9j8YLar4PHNsR5hyrjLDF",
  "key1": "3Yj1BzNwkEU6U3bFwzwmxMP6yBNKnKpKLBAr611SAAEuDeGquf4rGzRDWNqrvWQkzmH2UbpNSstSJTi2oBfUTJ5T",
  "key2": "4Dz8ancuboFH5n63dEskLNNRPeyVoneAzFau1d62J58mUxn96gUsNC8xPRct3gyhE6sevcLTJZugKaujrxBpVMNC",
  "key3": "aQmcEdGySU6BruzarGbGXbLbixL8YshiDRVJdMfHU5M8TBzzjw1ajJQiWFdATAdfUbvM6DsJepN4Y4PTieEkDSw",
  "key4": "3YEyUvoG87mmnEZt5oRiGx7cV2XFXwcBmnXwsT7pksADAZ2H7xmUWXswxvvzF1hFbxdYpCA5dbFhLs8y1yVCg2TL",
  "key5": "2dpsnAW8h5waWJQkRvoHQRCEVUtY57Bc3XUXoNgxFTKfA1PwejdUvezeR1adms3pnrRfLDGU1ccxY5rTLy4GRm95",
  "key6": "24eSPbJ4jbkkV72isMcVRj3nFpYNiTDkoeRBN4zfw4qWb977QVQmzV6mvFi2knk8UHDYfUFEb8ByZpjWUtUAk2yB",
  "key7": "4FyyR32cC1L1UuwziqwqbmSEQHhkH5n3KNd4RQqZLmtLg9Dd2eRDKdpm6YnGkj1dbKfWoTLTHwNudWwjfZfmzQZg",
  "key8": "3Ub5gQtZGM1EDeoDTndofz37Sp7jrXN6X6Vm2TvCN4kXvGJHDRANBbBy2sfDLSFHABwiWdSFmxsLkaSPaqc6Ax7G",
  "key9": "4uBm9qYTRU1KcV5UNQqZw43tt258ygN3G27ys4JQZn9RSS7r26dzoLsq1VdjLtgXzjQzTLw4Jx6XwMNPtBeC41G1",
  "key10": "4reKENk3LWrx66KsT1SZKTwWbmUGCEUprV86gE1Ydq3ngvXF7ErGs5LtpNMCr3efPKZDksDNSjCBK8KwrHoTcnz8",
  "key11": "2VJnYrNgmtZ1RMU4iNHVqsNX6aciY7NgMUyHxdtFgvtiXksD2MPcFUMWpRktujwjpmPRxogQT2ab1Sm1o1ETrdd4",
  "key12": "yF3MVivxnUpzvC3JjJjdgB6LD2dq7KibtguynHKZ9D5q5w6easbWsuivZafLgzwhLcUPQgeiue8cNSCb12FbFdo",
  "key13": "zj7WGPBCHGvxmEDgixK7DvCrKUvUeX2iCmVkUUUzdQbHhXn5EbCGPVFQRFtYyKWjxMJDM75jVyYesxnCvkYCpGe",
  "key14": "25QXeWHYFeAbgqeakVHuRi9VvdNDX33cAbEr4EWWTAPuCuBKD5LpFaZjN6PFRSNP5F83tCzQcbwarLSUWY356Fu6",
  "key15": "35NTZ5aCziwFeXDwELQ8r4uAECYKaA3WXYfEUxAtrxjmQi6jYHCNyKD6VkGmDCjpDpJFnGE6aSEFLrfWinS6SQJc",
  "key16": "3HfY3BHQJKk9fZNQmYEpBdK3UJbAo8gQqk8pXhgg4a8ECizEJRZfXHoU2VdntPjbVYVFF2avPANjkesmAR8MEU2K",
  "key17": "QP45y5W8TmDmiV6MiLPfW7RMH2mUFZsXShvqcHLFL8wBeyhYrgaD9m69dGNaWockb2ucr58e5kYp9eLJsCCokaQ",
  "key18": "5gnhdaUD8Vwm4gLgT5mv4kG79NzaBciVSWkGSwoy4rGgCeyxBzLoVopWczUgTw2tNChC3QDDsD9NBZ5yYBTS1m3Z",
  "key19": "5CzN8tH3PeXvUjG3eCLjTwRQaXXHj56jQPXRN82Q4qC5v7HVxmiB4UCs63w5pWS3VnndqNHaGww7sxLKyJQS7Sf1",
  "key20": "25djYjR6RsmYDi8gfmpt4dzabUL8m3q63roGefyP7dMmgvg2xk8EmJwe82nTptTacqUQ5eaFeA4qg7cXr6J62qEx",
  "key21": "3TDoLBbuQVpaVMioH7aPnFZhoyxqxFxEpTHxSdctdKUEEf3tAS8eaeNh4ZYTmFG3rVDvgP9dpGN9UvdK9t2WkTWH",
  "key22": "4h8WQJYc34jJMGM4NYAR5pkxJiz9GBMgPg68RswBdt7jkmrUvRLwJSpSHth8v2cCT32cnsDj24twdqTbT31PJP2B",
  "key23": "3xUfc453H8E2Et1XeWrxUg4gbEW6ZZtEJ4KPk1kV3qypncvtjBt8BWdKGybrd79sgMZHaZc4JoYTdnJ36xGQCPkp",
  "key24": "4HrqUpDt3w5MrK2vGsVKdYkrg9BRx6NN9uQhRU6qmB1jDdLRU2uoknGRL6k3oGS8gHfNjcTBHzfyiuJdmFTU2eNz",
  "key25": "4aVmPCRWy8McneL7CoV2Cv3nRLEb95B9XjXihMe2CycxieGdw7NrdbH5XQjjG8ZHs9k6xd2v4D1XzeevGwoxt3iT",
  "key26": "4hLy6onnmp7PzrMD1VttNEWghJBK7QvMrj3RPi7CE3Bn3N9Mvm7zPoUHbXDkZRBN7wtXAfbhKxaYNgfZcJLZuKaF",
  "key27": "4d3MC4s7yxGLwg3Y7K51f6KWk9FCACQx6aiM8iSUE7HsxqwdtaYc7AG4odn73jzcX9kpJHuuUnnRuWgLSmxkf5vb",
  "key28": "3Em7Rq3gxsReCsxMo8p86YM1oKNfdk4VzduxPtrbGdYPTJHaNqKVmxcXjih7uyTKZWbtAYK6dZCsC4BwWaSk5WPF",
  "key29": "9wkpDSdqQPHzvFSsBNzEzY5jsjAD24jcvjvRBAksFSbxnViGMmMRjXnUqzsHpCjkBLEAr7NdMSKBQN2QXpj3DVS",
  "key30": "5bfvReufRdxbmKkJUeGXNyvFPB2qRGwnKZsGk4ZhyWw1fd7inET7wGehdzB3ePBkVWviEmhSQqpVMhe1RWmgdbcy",
  "key31": "4TK3qWEq9uo5KRUMuRqARhpnMrbX3vH9qyHnGPjiQhtQKyypuvYqCcd72iVXavtmU7JBDaV555rQ5pTHnT9AWiST",
  "key32": "MottLeTXTVywCdcJ8QyzeCS7TcRMB19WjUcJN5Zn9Yzm5updGsonimJrxuBDN9ZoHjvAwiiW1biRWFbVhpktaEn",
  "key33": "3wUAJ3nMLoSH5ptaaiRPeDzhRi151X1pcKQxRJWUF6EHXd6m1P5QYwj9E2HY5hGnEb41t3WQhSx9iLv8k2qJdZfL",
  "key34": "2wWvWGpCzehdzx6bJz5VDuYekasRwXRcqpZh5XHDoHTwpv5zKEapzt6H2Brw18uy5vAj28yM8ERqbZX1imPg9tvP",
  "key35": "3hJ81akU4yaanMZ53Ukd17XcMRmiGJiTMHFLupoLrRdsgWFUZ4z6mshr3VUKGnmXCReZgvd42aVmrHjBzzAVD7gX",
  "key36": "64uYijvN8wtgna5C7HkBvRDFtegQJC74ziE37FV984RzN39YsfkkdTD6EK3MzWW4EQXKarxTi9Cdrg8xFbwUmSKJ",
  "key37": "5rAoqkH21efbsR2y1UqVoFdtZsaUjXqCsvozhW8QxSrezcaEY3ppdBwe4iA4AJUZmuokJeCx1xujkztVM8pvrnxB",
  "key38": "4NunrNfbt8P3TCqH6CNqnkFkdXmfJv8HquGsTHDE25jvnPSWZMe6aTKoZJ9p6H7FnSCUnG26tXd3rJqHV1DDxaiv",
  "key39": "3Dpm2j6zZ8dyLoNA9ZPrxtGSqWEQdqh1HAU9Spx7UAHF5Z5dnCEEeU1LJSxs3iEctqGvWy2qmPhc6t8vBgQAPSAM",
  "key40": "4Sw4Dt3BJD9SbnW4D4FV4uLLWrUaxzE6CSoGBRzkrKHHopGesvjPNGWaDr5CaHW1Fe36Xj5SMY1FmxikRPywqk4Z",
  "key41": "3LfwQGQCK56Wyqn4Y8kyV48nmUJbUqWBDdtA4StJqEzqZ2D5XgqWkbeGhBXjPdQSRhL74aJqTsc7593tJESDWgtg",
  "key42": "5xgCfpaDzmoxEGGhbbaWE1QgR5tnnTnLwrVWniwT7xLrMUryhSvhpUgQakixHeFgzQ9cgpbLZvGKtxHxY1jGUgKH",
  "key43": "5y1Y62p1dqTsdFCwHmKGbjRvAT4b61aXw1MkAY8znj1w5t6s3ATTivRhCTq4T7rMjwjH67ZYU9saYEeMjtenw2Rx",
  "key44": "49VnkFrFyXfPwEn56oWf13XjchGLuQi3ezqW15pbAhEhqAJapYivRDhgzMvfoQFTHZtECR4XaSEUUQikVfoUXAEv"
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
