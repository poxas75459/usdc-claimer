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
    "2x2o1NHDTBBGNdkVWMNFBCRkSsuKjgcXA6mXYXNf8q2hajcfdETMLa5rojS9Qv8HQCkUrmb9Y3KQYeXrHCx4FGr3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eaDqH4YBcffgmscyAhWdds7p4KrD2PNvfEe9972iYyMqFLvVaNhRE6PNHmiLHPxx15UvTj8c3RwQivYi3Q3bBDF",
  "key1": "ZT3K4FqeVgp45jps4XvCmyqmAb2HSf9JY4H2L6LCZHpSbGcU7qjWX3K23WovKEeb3pjPmdfo4frb7SdCSeakHv6",
  "key2": "5wzrgrWZhErGgQSS5VcxBGQA3p5tmFVEgubJYwkW7FTCgbpyScqw9vZ8CfRPg9iFqHmaKVdR7RtrwyxyNfSg2qgq",
  "key3": "2NGvHFyqwDzHun2YqyjsNrrhctZiMN4pz5UwSVFsV3CUCYmhY2ywVnwsTQHK6yqXaxgmAMQsEciRqjoH9dGxxxmh",
  "key4": "GNxjzoXaG8qHBBLCHWWU1MfxQRzTqP7EXu67GgWXo8452TL1j3BxeiXaSytS9ZL3yVumCC592ME6MrYZTHLP9vv",
  "key5": "5kJoPVXAo1foXFYA351KjGdKZ4bis1yodNbunj177XgKcdAvVPAozKqECpFabxwyywNFt2k2YowENGPBg8xLrwpd",
  "key6": "4BB9NSEhG6wpMCn9tLp11qdLRVaLshLErwJczcVGT1L3k47VZR5hShcJPSQaP2s4Afm4fNX2VsZ9wSCzkKrPq3ZP",
  "key7": "WjhRBAqBc5bF3fBWYpe6D1VgcHwmgK1kaMz7o3NrYHAoBpyVrqdRM7B7AxMzsruQULaYhPiCN3otA9bYaRBoZcR",
  "key8": "63krckTryPAy8XtwXeSqnrH2hY28Weh8swQR4NcAaS3zRtLp7P3TUkA9YXPcrkmmne4W9u3gRrw14nsLPXbpGXjX",
  "key9": "2763ir6HVjdSm55GRrPFpxqb4odU6E5rPiRdN2JpeXNZgy5L2djFw5rQybfFu3kYLzNXfSRWTtbyJcmLg4otWsJZ",
  "key10": "2imuaY49pWvWrVryfty7fYTrpqPqYmB7353Q3SePokZPCpqPgNt3duY4Vb9Cmt3anbmr3GYiGTh2Kx6tkavSkhqJ",
  "key11": "6pEzRyqf6J5RC1de4CuJ6j2BVpmN9UNJReiZDwA79dWdRkZjg6cTSXCDwNUoFCq3cpT8ERrTbnEKjuU8R6tB2TR",
  "key12": "3cocv4skJBoJPgwrd7TYupbdWvnbWs5MBs8x59YudBUTqwL64foYRZMkaaUryUCSeVTJ8FfEtSF96raEEM7aLnaM",
  "key13": "2NSNc7j1qQcQJ88mQTkA8bL9bwAqvveW6B1bvmenDtkzCsfYpS2ogdhbm3SWvVbzwsp7VVpCAz4jkSqkXXegxXmB",
  "key14": "4eaFv9fpz8Uzujm5NcdhNjcJRpZekjAyftx94ch6QdyGYsUDwxoinc3uWEX7gAWMv3e1Z1EJekQVFrqMUHc7p2YV",
  "key15": "4GkrwGUccEg8W8m9PqgCMCzaG4hKHYcjLDZLk68JDkUh6RsLtDmdgXSjTJMS3R9gcGr5kw7g8y5TTD2QpfFeqkjW",
  "key16": "4KdzLso5PRWUUu14bYeCgJMqBxhw2FH9jPmRg1w8T1B6a8NuNuKgnpDkRDQJ87bpJaUUKa1uGi1YLhh5fe3W8Hj5",
  "key17": "3TQp5MxjixMm4jBKfQDSEt7tPBQeYS7XfSAAD4EbWHWViGR1FgRq1AAo2jgjZrK3ARcLpT5HNAV1UKBs5zbo2VPT",
  "key18": "4t72hZcSAWZgxUC1ihXec8NirWa5DrLLAcctAz9TNcXB48ewYGno2wXFBo1KNzVo3C9BCfvCMr3tQuLNqMDGpz4n",
  "key19": "gN8LFz63Tn8DNZ1aSrgUGGfW3pTANM7mJvnK97JCPK9u9baaUGESZVCSLRXFYZTbzJoXxWGwvELbQP9hvPx4HwM",
  "key20": "2nyNvX1E2ZT9GVpQjQir2TwaQXttUycqDdkeM41ryPHpXon19MUm2iuZxjeG4p5Rq4S6TfmrsN8Q8xrzSQvttADi",
  "key21": "2YmBN7qDtgctPyKYGrEo1YRG2v3Sx9JKGAkzW667ZXY1nN6dsydJjZxrm5tyMgJZ3roFnYtswgbERBCF4hLiHf7U",
  "key22": "56y69xpnjtmiVzGT3ah1Kyw3mFTHNfrKP9z3jcwMkyM6apweWAMSYdKw8XoMwLmoRGHgpLg2f9bcise2GR8WbiE3",
  "key23": "4ZdcymAAaeHv77ej8wLJuNagsaRB2bZXyEcnxkjjDGaf42TzPdcbcR3eCfG63Jp92mWF6ZJcYsvd2yyMnUtRNXuU",
  "key24": "67p97AqdbkpWSriurM8pBMum4ejT6Xopt3HW1Nwi5co4Qg4EEWJoKcrYepKbtdzozKYfRW1eC7opnbvEEiYxwpSd",
  "key25": "2J1xuw44PyP5hVxyZ5SozYbMScPqGtaMT9gV6iFnwo2T33YA9dL8egS1ysLLgh2edEnNkBxTzFdXznqVQUPrNtGF",
  "key26": "4KWs3WHXfmTxPUdypsfBmZLK8HvhjTsEY7nUNPKe7HLrRdmSw8cqd6Qjs5VgiLS6EqZWPPYcNw7Cve9UibxAFxkj",
  "key27": "5VvKtzy1gxF3xjz4KBz17YzF8B4yWbDuX3xVc2nZhT4MS7svxvNVZbrXdVZyoqHv7VpEfRQM9ouNWBpSergGTK8A",
  "key28": "2zjXW7Uiyt2KLqi8mt9UCcveoyq4GUXT6VGYZ6UCmZFZEVJgDagWJwvSYDVB22zdiXgLnusnFmwbvpfAZ4NdjM9e",
  "key29": "53gPsn2fcF71ioPUaAA8HfsM17Rqjq7QUy8YMzsLhJsqNBpHWGwkGrmHyu1ZdUybe54NPuYq1esQnVJKZmqM8RSJ",
  "key30": "X7rdGswij4Kcu19xiUj7JxnRVuUGPHLxy6oEDy3jHdo4Vk9wQbzouPHjQ6gY5V3UwNppwXaFnPboYffvmQS6xvY",
  "key31": "2FgugyHLktQ8EtUYhMTVqg4M58fZ4DRVHwpPvhj8hfFMSVbqiptjfzhxPTYvdveyLjAvHAr17d1yWTUBHpjdmv8d",
  "key32": "4R2fnrUQUYKobLcuMkjhNeRRab7rPT14XkUaPeCpS1pDmtCa6CUamX5jwCK7QJ6XyoKopPGaAbNizU8EvKC7vvWa",
  "key33": "4ndRoxLhAxPoEthQt3Hb2wDXkSQKXADx6fBxeTBXifkmqd86yULhWm8YzhXMCB2zKjKirfVzPJcHkiehh5DJDeKu"
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
