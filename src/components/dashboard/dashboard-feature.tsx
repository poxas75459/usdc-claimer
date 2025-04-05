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
    "2TSskvByn41TvufmTAmeKJFBNWKWDVrzBHLqExS3xQsdgzLQFxNGyDhMzBrkFt1Nd4hYpo8Xb4nLdVR99Df1Gn47"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dkE7hjNHnaL9XytVRvcdC5i2ErFSNx954ySKjZhodyPRR3aScj5926J4ARPGtXX4eUdNsUKeAsj3H2kYchJfvVB",
  "key1": "24Ztaw1fJhuib42ZiFZwqvGkhi8kRQVjzc2ReskBeL79jmPz9pRSbDZdJzQMCg7XTo5nmK5t2A3ND6BMfrg2zPEE",
  "key2": "4QU28BB1MVETUQ3cqBx8kPhMV3bKURzNRMvi21CEbsy6DhMwNZYUbWBpNK39hEaNyhk9cgXN3CRcfX2aVEKr8GWn",
  "key3": "3qm7dMYPwKkD1r7fhE5hR13y6pUHrfreHa97GpGQeXcTofButhbVt4NbCCUwaZ4gCvtMwRBxtuW6JCMeceN2Z6pp",
  "key4": "5Tx9w3c3bYZud9uwDVkWi4aAgrNxsYnzNifHhAPoyXdJZfB9VHDxJh2FgEBJDkPfqofNWundc7F1QjL2DhjFoXd9",
  "key5": "2eSeX1JkREprnTmYXLWRBLuZMxVosS1UPzpbubdoLS4G8bCJA8vwJMLRQdrw6SVa8Z38T5raw2v7YheQ9CuVz4fm",
  "key6": "2sYdoGSteHtTYALaUFGEXDKYvvyLmRg5HRjtTmGudgVX1sCWRqKhizgP41GKpEQUJxba91kcYPVvaZqsBT24QjwV",
  "key7": "5iHTnYrVgGuE9arHiiTLoNFfnXF7CCsy8tJnAT7sb22xgTcurntSPVjmDR7BqW4i2V3XUoECPAQjS3vVVxhnDUYb",
  "key8": "46ggGYsFeUVrngmrQWqzCjny43MXHd9tR5yRqxx1A7eXTvK9zmAiD1hsrFugPVbCkGPodHmbS6gfvkBcKj5BybNH",
  "key9": "rTBiyVqUBLRHsmc7L1o2UMmAH9pdkXYvwPgZkoBvCAs1SVqoRQoTkg2HEzsJKei2oYWyMyXnBB1v9AZJwzPtL1C",
  "key10": "4jSwFwhdLFwY8s3UfTUuRKrL3W2UvdNrqn1o5t25w7uWzgPyGr56AT957Bh21iVGiWFLDJd6MBdwiMNSRnwm1jNj",
  "key11": "3Rd5BW1GXsqCu7pZDLVZonRyebaT3JN82tKAb9EdLr2EJR4PFC1aU3si7c9E4wMyYSYQ5AHqCNqsnu2wkwaVCqCv",
  "key12": "3TdraWNvZwtLFHi8WWw8BaZEgD1rUJeYhwWCXTY7cHS8gUytcwtPeNiqyX46HkMxUmEbzgeaANNmP5ByKeY5f9vq",
  "key13": "7BM7DQcdR9947vhLVd47tdsDvzQcVWrGL7tThnYitrhEwN8a1zcqFrRQo197KCLqiocjioZzJRDkRFFLBk4fyPv",
  "key14": "2vdwEZGYEg4ZyDY3cZ7zt9yTzDgU1QWMNyscuB37uV8RrEe3px1QeXaBb9vdz7KPSfHLce6Rdg5q21mhMgDYES4z",
  "key15": "jStNMQYGsdZuBBHfGMauXFx5faT5ZhCvbzW1r3mkiLXpAMope9WpApygjEzVqto2DbKTU8FBf3NuNtnQefz2psz",
  "key16": "JHkFUvmrTLagc3zfJQK3tYx6Va8HmmoDgSemNmLjamtczQujg4qhSx3zNbGWXncW8ZivHqrSR2VQRsKQ4EbwpDc",
  "key17": "3rvDGhVRNav47anbhgtndekMuzKamR9RU64FU7F4KUM8Eg5v82Qy9gEYzPth7sAm2wJUZsWXSBe2Jmz8DYzY49Z2",
  "key18": "3XrYE43zuqN1eUjDfP2YEiDQfoUGH2FyzAJZzTCbSo6hDuhuCNDVf5VWhDg2de5CMd6TTdf3f7TKQTmBcuhMRH6P",
  "key19": "4bKGDoGR2iovfFqPM4cq2WWvRsGKd35w5y2deWFXj3gau6MD2yq3WzNM65zdCVhQrR4jD7RBr6ATu8oq1BFvb5VS",
  "key20": "4651gaS2KkmnWWmfpJqHMV7Ju5AjdDPQDTLz5bXgPTWRnpUaGL45Gg4ZNLECHvuE4HbvqqwPG9KJjsThR2NBNijJ",
  "key21": "3ejoGpZjbiTsttgxxnzv7wQsmbDx3rGQ3BmN96jaWnXesw6AfQ9NSG7Uvj6ccr3Teppdc7t3VsfDvFwYKjnrYd4J",
  "key22": "5yBuRkfVUUXum8bpc3ncSvF9p887qyzXwoqndJseopMj3JC9VgoJJ9EJyCkN2noo1s1cBu7qVmWkatndMv8ejWqW",
  "key23": "5Ktmo4L2rGgHSfyVAZMbsRRMyia1NTVCqAomMuc3LyjtP7Dmq2ReTgBHFQpLTshhqYJwc1MMnTXy1AExYoFvJaMx",
  "key24": "5hcrNbcuYhYK5mbJ9tt7piKQXcrD1q8jzDpTytV4EZ4cAzqXafovgGaBcrBh1tRkjFDQNf8vPDPDQhAKLAiAUKBn",
  "key25": "2QQJNbeXnMhqhmBvcexiRrqzvnjyURDVCDPvKV9bNAfcVQmYBESih3jDkADo1xdXPUJPEKNUqz2XNA4JZYzLxP6o",
  "key26": "yhXpAiN5R15Q3eFnAtPExBBWy1qeeX85DXVAwWJma9HHQdEN7APbUqgPaiaHxnpodqVhcWMy3ro7UVjhsMSJA4V",
  "key27": "2PNrZdg5ThbXFTrN2CYJaRtyPnr8nqHqzWFdZuk6UdCqKQbpyptHmgzaNEqME5cT8CvQW7toZYDmuN1sGhWgUkvJ",
  "key28": "2UuHihUgtc6CTfttmHQDoBwbq2cesv3WQrZYQtakZ4T4pywU7NLzY5ycpeFxofvyVA4mLXVQ1EfscztPKjBh9To9",
  "key29": "4e8kp4qcDXs2utsVWxp18FnE6azadgp2Wo7NjrnifAa1UddokDDxEjGiA9RM1ZMMc1Fb5HJnxKHi3L3jHPswDn1k",
  "key30": "3UmCLp8BwEvbuMhHvTVf9gpVxgLALmhV3GDcFKB2HZZU5XLV7zPKukYt6n1CwJx9DKVpDCtrzes9hT7EL3FtzsDt",
  "key31": "5EWGfmt3Ghft3k6sw7ipwybwVxrFGQ5LFP6a9P5VW2uccYrjuzmqrBd51twzBE5JjXrVySRzRaizR4Mo1gAsacQR",
  "key32": "2u2zLXZsjmbBbQQMa43WQohojXHDCPCeQryTkbhAbXBnnMTKFaaibS7Jd5eet7U8XNmxF4vaPw8x2JBaWj42Y3ae",
  "key33": "2W2CdXRf9BreBRNLes8eHsppYtRdSzwe5CEMrjVjhbM3cvUAUgqJHQrquCQsUShzSFkeG5NC9RqsjNeGqD9zdjfs",
  "key34": "5TacrqYMv6nvFVTg61bM3zaY41Sx1cb9f5BRn6jq76uQ9S21S19EUGA5S5xjm3oD49TWUDVdU682fXD79b9nPWwV",
  "key35": "PQtjhERdLCTxzBYheMtK2R7y28qp6KEzVqLch5mpfr6xNtjEAQSpWxoLMCXpveHwH5jDAk9ECiTexGEXDVxgw6V",
  "key36": "2B91FKPJBAFWFB2xcbKUdAFjungd5ZFxot89WBpM7LbDBDj51eKQBm33UFYxnL71uo4dLqo6D6Brjhtrcmok1kBw",
  "key37": "3CbdFpm6beCZneqrzoc9DbtMBJRJ9jVkicGBBUfnMDdnrRys82dK1ZuYVdcR5gqqChwtbDf1GeQCXk3BdE5XepfG",
  "key38": "56F6r5HeZsBnoA1rWpB99b2zQ3nR4frvXsMDgadrrDMFKPMgXeq5qJmNENYSU3wiJ1gQTioUmHS7btUy9wPj9YhV",
  "key39": "52PFbR325oafyg6jpJi6kgrEQFMcHdVJiB5hQqgcjtANB8kgwtcHZYrsQBFdUakmoMEg8tyoPqoVD9dtLES4QhQY",
  "key40": "w3XpzPvsqGCVPg923FAZmFHrxVA4mavTtNXpsqkUrXu2gJkxbaCdgYJhEZtwiY49jw4BKdn7G34dEDnBXdWMiuK"
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
