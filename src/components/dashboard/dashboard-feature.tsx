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
    "3ZkCAG4cySPbTvFdTKnRpiu1c5o6eZuR6XtitUEuV5qgfQJLJYVMGTi59RiTHPgmVsYEPtL5C7k8RR8QCu3oZTZs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48Mjn2oEvRyRbf4AXnJFYhEh2MNRJAxdFLPkDknxivNv8Jn43xPHCE7uKQLaLqjjKQ5HBF4odiUoKtxMMoJUsMnC",
  "key1": "4iiVE9YLFxGnx4wVbF7WqynPAfB5UmZiVfc7HKBpAJ1fevLqkcsQxLmGKehvfEgKxcwg43dPLi2Q6iUBkaEAaxwp",
  "key2": "hxQDqgPNcS9gkJDykuhDJ7x8zm3ZKwXuGifzPs31bKYzyVxhXGCU468xuKudGeJwTNbb5Lvg9MesEKizXhN2moZ",
  "key3": "4cX68XdKugkAmPSxwSrKKJNktUeDJ7tagNrBEZLZ92aXzKkShhYhxvnVU71Zj6dGezyDkNrNC9hwjjFGf5Ydj4HJ",
  "key4": "53zVReF1tB1pmN1owze6wwzwMXw7WqMQ4cXKAcKRyxxyGwg61uo4xBtfohcAdDsb4x2LLTvdVeRAxp79cKaYymRn",
  "key5": "53nz2oKAE9QaBfBoDBfyh2kzHR8WdC7tPEb6HHHB2geQnRyxKaeRVp6K3vcE9aePFTkVV77dKH7ZMzbpF5SRQGmD",
  "key6": "5gefWzzxdBfAngXibhcjiLE17y6nmGUatSN9wQL2rZinXs9X788iopigda2f1iStTVhQhPaK3hA9yAXmHJVUNXqy",
  "key7": "3VQ5tUv2NDpu1Ed1FsVppdEZuCuREPdVBCwVJdG4UsDq7Hs1rQtjqyQRTtX9YKjd1WE83JTMtZKY1ygApu235efj",
  "key8": "HhmTDziuBLMVrV9q58L31au7HbCgwyu53Qhk63awmLNYKNVvYADESSpkSUYTyZ7PNWTPkY5aCDwbz5eUEsTiFqF",
  "key9": "2uKrZQEi1Mwf9mASgkKTtJ8CmLexi2r3W1PmNQ3FNcyZKwuGZBiHsH5zR6KWyu4qDMYCY97ckdEpCT6FtBcyVkxg",
  "key10": "5MorMggcY5CmC5wbq1XeNPD9wdeBS5hSjFRZbpdzesZMehvaJSK1riR5MYTCjfFLSMeG4eodJ2wrXMDBz9g98b2j",
  "key11": "61pgrxD1ktxT6KTuanwcYSwHU3JoCXyQKEHuqoUQWpMEtaiEPeJRPnpjn7ERKSZcak2mWFwhxm2br7PS1bhhtxi5",
  "key12": "HiHE1Ue8B6LAYB9utBW5JtqgzXfu7tDqSxfdz2G5RiDy5EVPcZmHi1NjWWsDTrEKvhRE18KLsf6dkoX3haFKDy6",
  "key13": "559N7pUNRuEArhGF6EasfWAHUnnD1rvbrZo45FX6AfA2znYD6PYhyb9e9UQDG2qtcJ2D7NPg8bPoeoVjJEBpVVSU",
  "key14": "qSWwTqhTvrHsEbfNN1gttn1neg6axNcPtFKZXujJ6M73bh9G129konxA4Hmhja958YjvjeNi2xokCtRB4fD6Dau",
  "key15": "4VAy69Rcr9DqdficR9RNv3dWTxrg7VAFwK9wooWSKzqAjYbhfyvSMtPipDcSYb8DTKv6Kw2ide3o2FSp3BjoRML7",
  "key16": "5YaQsuboZ7f4MDhWhyQmvK4Wr83HxoW3rQFNp3hhRB2zRM6oDWr6wCchSyVKikxT6XQNeuiKJDTvyHiwgQFXQaBK",
  "key17": "2rMQQztz4p6hQ2dM8gocLAX2u1YSs8YCCKBg8t6MXoNfD4R4zDLk8pPBRJS5j1ZcY8iwP8Cd4xod5Z5hyNaXp4MD",
  "key18": "3x2GFtw3WmoU8xTfS3hnfibJBnDLvCX6HAgxBdDbiNb6SmpK2m8r61oRWwjAqjsYUUXyQT8gWKDWft4SxRyxD6pe",
  "key19": "5TQgSvBGKAKGyVQMyVdLPegLyUJ2wTUiVDWdUk76kMciZLe1jtGwX28XSXmYc1QUpcMbZigeXxb1d737FKHCwYW1",
  "key20": "4CGaEvLsqhjqWppkXXQYVE9iiXiAx8GLxikHfrt4YLEc326DVUDqq5mzmDAKwaZtKT7E669G1BtUF2DEpde2zffy",
  "key21": "62DhhVWGk76a4fC2QFDCaaX1YYuEwVX2Wc8BRnsshBMrJF5CHEVbdg7LwPdvBSLBBoNra6GojnYPLa4bth3Hk76X",
  "key22": "4SBzYHYnXTuLNQBk6KEEBdqaYPjLkxHCMyFSKQj1HL4g2Af85NVbrgW3jiiiQfmhVmB5NAmMN91q22CYnYMSoETs",
  "key23": "4ouTtAS29xxAmh6FJoS2f4oN9BcSddhji3vqAdEDrwz9rhrkPJe1TEGwy3He7mPXiTz7Apm9k7sgdtEQnvEz7W5e",
  "key24": "2RS7hvjJp7u17XwJJnqx5KsqCK6aNCXfQ2uD7PUorhHSEsRXvrcPqV4VPH2NprVduXoJM2XB6qLrEsUAQkxGMX2i",
  "key25": "64tN6hZap2eHBPzyP3WDvgcE8xXMVpf7LgAfRXkMPvv8hJo8ZGWniup9C8kmSCNSHUxQi2HSMaass6mfs7JwjjBN",
  "key26": "5KEAkmwyJ6Ce39BFL8z4JBSU9gR2tWFQduaDbjEu6mxd4UaE7qDFys9pBnPUiv6XCR9C6k9N1eERtdZ1a4ERZ83p",
  "key27": "4tnWNUPU5jhdSMq8nKZW1FkTA9gaRgTLY7jo88NJzxXzfzM36vwvS87kEGFT3XafgJjveYmac4o2bA7ewzvtiAWd",
  "key28": "3gGaU9eDogbMGckSRepodfx6ZExSd2RRFdQjVgQxggCXYDNStuwr5FBZw5uyyDQ4Rr7eao9sHbHRGDt3p4PKDeyc",
  "key29": "62q5BgWviywdhwA8PfzSEeodjQPqoPpueTEhee7bHAZUNb9GXZt73qjHXjFWsRG3KRwF3mdVtKJRZG9deMuhbfxT",
  "key30": "5R8g1DtaAc8wfvazx8ptAG6LoaBpuGdcGmvRcdUGogcXw67aV1m96bEED451xFTbBQtHkf24SYanrv4E9WhhLuAZ",
  "key31": "4Ybkx61h4cJZUadDtJzyt6mXfefd12CCsaEXxGfe1cBpWHxycGNKyKb6S2HzTiCmtgcXLhpQb8bR31pDMWdSJa86",
  "key32": "3hfZr8kbNwJghyEwxRayCAGuTqK3C4rRXzrhsuUv92GiL4ALUTDBmiN5JpWMWJ6zf4YMu6mTDaErVDuNrGj2qzWM"
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
