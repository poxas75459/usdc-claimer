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
    "5PPA9VszXQtBwyiTz7Q2PFwgvDWP4FyEUezcoY6R5GxaFtyN9HonViTLn8KhBetU5JV4cmuztPXy2P17fYpWPMDN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PkSp2cM8deu68j19N5MgmsQ75m3WKmAAQoUafxQw81XMhGWuVxVan2d2PUfqdmzyNQKXTWtV9RxyueWXkRWysSN",
  "key1": "5PCB8VTxdS4nmiZHwuiJXRQPYC21h3RiyQ52Ld3fASzpKSZsenvAhhLNHahL6obrxWcQrqG3sByTLyuLLgR9ELXa",
  "key2": "4TuECMfhuAxxZnz4NcksDDrt7boytnMdKFW7S1ZskwASpB4qVcKkVk3Jh859Cp5hEqEh7S8UaPksJMoSN5eNXXnv",
  "key3": "4XPnCYXakbzLekFkvtdPzfBzRyjSbngC1fwDWXNq2QtZxFgsK8SyopxtNmJS8ixhfLeCYjUT1HdWi8maXg4Cq1xN",
  "key4": "XVEvTggCcjaJiQPBC12Mou1tjwKLQ56ZocbdoV1yGrrcVmE7xcbd8WxakNqq2Au5XNr2hAB26hoo7js8354BKWe",
  "key5": "GMoUZgq3baKzqp9dUGVP4agJJCTQp9uTMp5sSLtwGmaDHVfDLzgADN3GA8ayibZhk7j7N1R6MuRm2qwwpAJjMG3",
  "key6": "5msCncy6nWV2Ey64qJ8PPF3NGygpA4ZAbkxJXm48CUWQFmGzYjpkjwMA5VepHMLdkjMyDs3XFoLHXgC78ynFLya8",
  "key7": "2nbkZgFKixkhj6gsqqx5ACqccyiDkbaJoaTEDj5jpuWB8au8SA72Tz6SXJTjtXHJ9eTZfBf5Hjr1AEEEWYSbTC9Q",
  "key8": "5mnBZSLH6M5N1WLaxuCGgwmSPBBAymatborSqAs5X4FhKAUaX6546xgbB9zmn7DkAqw8TqEKyJuDZis5fbFbQdx8",
  "key9": "58XdQsAHTLcBD5vpudrefnZLHRALMxNHmNWGR4iKmPQFY3zoDHkU9fF9h4oPaZGMnZ98mi1pA23JbAaJHFtbg9Z6",
  "key10": "34va8B6qFtevPfapLfQL6AmGj4G91MLS2Gp1cG8zPXnRVqg9qktqzQJFvqniJgw1sUi1zU5ZNuTFDJQ3sUMFQZxw",
  "key11": "5DN2t9tvqvDxePLmRtXCZsVBP1RkaXzUv8vK5oPJybLWmWovAidvngrnS1hR1Y44gQE4bG5wF6Erg9arVofB5J8T",
  "key12": "4bU7yAU5w43jdT5eCVtJ1TmspA5bXauBMLkCfY8ziBsB4zviniQaQ67UChyuXEa5TGvy7YfPYj2DZ7zGx3Y9Md2M",
  "key13": "5eyvuTc1batzsZfhqvvnaMfTQVc8pXDmDRBRYjBZ14S5gb9dGR24o58WrCR5bYT4XLki6kZqxquZaf1PaxWvJWuX",
  "key14": "5TLfGVfiXUxA3mq5AqF1GaqwwUjdFUDYzUeBgHsRv5mMnSH5LmaKPzmK2deYZHs18FuzeUup3JErrvAiMdr9CY5J",
  "key15": "4spEGHc16SiksKGZYoTjfNsxJJwUyAZ9gA42UGpapuiHgDAk2n1d7WJhrxDcpgJ1HfLf6dqkhvMTc4bQ6YtALdsj",
  "key16": "azhCcAhhiARX7nca1sftGjteikwgK2C1X9DB4y2XprZvw1JZMS3EBUUmg7eKifp5BpfDGYtSZFx1jHd7FvZYCvX",
  "key17": "4wJ5kWe2HaHEmsuUidd4YM1QtBPJafiZf9RCRmZRLG1gmYzpkHNXQce7gmcjewNdHHJUgt8K2kGMAtnXbCfobJkF",
  "key18": "5Xs2u77SYmGTnTsdtpNbsrw1tNMSSEJZgUNUkUBufnimtNSBDZWgfjJEMoYr4EgjWsuqsefjcHyxLRNvtYPUm1xM",
  "key19": "43gyViRjZucUa2hSsKMqSwnSgjLNPdKC4qMKqzh7bnREVE5pd8jtgAJsc7Yfc8o2AjYtoW8GK2MUzxrLWQQMdPTZ",
  "key20": "3c1ab5o65doANMSVFmM9bffoPRwtr1fAfNXNC3d9pTuBkYwzWtA9ocnUYqdXspaoVXbhdmCWmQFy7NPs1P2nFpGq",
  "key21": "4xQHdCbDhNTCSgj4uJEvMUihPM1JGVKCkHAMe7s4ZrSF5U3WGBFEJ2Pgxd1errg4jbeeBAjGngcnFHUKF5HMQVcW",
  "key22": "3foCHdRW1p3kZqUbYCw2Ym6bENSM1DcYbjMEicrk1TH85Wd5fTA5Q8Mj4QjzuZBuiVkX2M2uWK57tgW47K6Dpp4h",
  "key23": "3CkXAnbArzH13QPtXUENyCihokZZhvr7rLxsLRGCngBPpcVFTxMqKTduz8BucSViJ5meB4Vpuw8D3WnZk179TqwC",
  "key24": "26MruwJ9mDbcczZ6kowFdYoNb4WiGkzcageAthXhWTQeN9nTnr34GkQMWLfa2u8KHrzLao2RAjVDNuLSHvkuxN4i",
  "key25": "5nT5CdcbP81Wmew2VynZfizcE3JSE3NmpjMZRWPBY8SoS1fWY8nJdEvsotpyRAZLYjDfq3qmMyAFCdJsP8U2dE1Y",
  "key26": "3jGNLr6EpWErqYivGfSf4ZX8dbGHqjkcKiBs3DTXJXB3gSpBrGq9r583bJJH1Yz3BNp28xdHKsxaaK1rjymCcRrH",
  "key27": "5c3Xdr7pthDwKf6Bg737ALU8hoD8PE3zKTJMsqRhd3Q2rjvwRbXQV9TXcHqHkyKWb6wKWetyHmTJyrQobuqCLCjE",
  "key28": "35RenGq7nJaFFLwzwhns6tjmL4tXATmzcJtGBbeYb4AxbkNxSSiK3dgap76JVGg8pA9wuorwJRKhVU3sT85S1Fiy",
  "key29": "2k9sVjHDeqX8ubqr6bdcdtzAH9aDkU56ZEX5YBs9Q59bC3KTNLFZQyGYJvdC9zsXi7T9wa1r7q2o7GsJ4SiXsxjW",
  "key30": "nJtP5D6ncH3x6ogqQgmrwJgFRJ6k6rLgQ8rVk1iLG5jUuqmzzgNyhDLirAXTAgEBx2XEdfYCmGqFau7vQNyckJs",
  "key31": "2CXFdjWG1TBHkbJHJmpHSMAGfDSUYdm31mQQMuhgDBgzcYsQ4wyLmTbedxKetfHyrGtNBtGHdypjLjaZi4k3DsTZ",
  "key32": "5ZfHJn3Z9k4M4vzBx2R3rUpQwjFDiDh8wmpqwuVKCHKR71WRzEjvCPDzcv1c8FML1BefYoQrS2D9KERSzZfrd8Hs"
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
