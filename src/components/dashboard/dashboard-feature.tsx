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
    "4LyHHVcejMqjVdirnWxosQNh7FxrZwm3pn66pbES9SMw27WSrvryKbAhkqdRwpfb4JiisRTPKJh5u3pYzAmu2goH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63ASWKG6CGpUWbAqLmsSkg4RfMCAcQ1DNF5zDxSmUZZkiyntWGMR5SZHXaFL3EaSKgdBNUZfBucceYgpkxbsvZRJ",
  "key1": "PFHpybBwj6CPZcNx7xJdjzU1MQp8mLJWgqvRFYvbgMc8m57Ea4nfQR75my7mGL7iB2cc6kHMj8ftt8a1UBnWDcR",
  "key2": "3Ajn7FtkNYC6kYYqEbjzansw1uhR6UPYzE1zddUhX3ZNgLHxvFCPn62bqLexjb1K4vVGt2kyEvkVfDBVgHTsYyod",
  "key3": "oaZMJHEJbP3sbv6eXJ2SHTduztDwnEwT3w4954Pf3x8BVTnu1nzXZNByJ2gG3nqECUssLT63P4u86p2ArNx897E",
  "key4": "2MXfjtAGrVKGEr6DKqrNVrSeyfehEx6eXN7yYFC8RjujwrMbUPUQdRzjB38w87iQV7zfExDnqiwgQW5krrJGNMUi",
  "key5": "5vGN41cd6Q4QCEK7k4DQHC7WesfthtgTW6U6Z3oAGYfmHazKHa81rvheRCjUt1EKs522EGkacPDaY3eFnyjj9XaA",
  "key6": "4ieDuzj81R8AV27aUm3uoujPBVnxJdk9Fjbi4wDbZYmnV6xsr3x4kcyh8pQzpTPNG69GYxzjtFRWBvuVJNcP2act",
  "key7": "4gLzxW6VgUVmCZGt6deLoh38juN8MoWD6PmatSA5BGPS29Q1BU3drKqX5w1kmQgVx6Cy6i3F4y4oKQaUSsEHfZZL",
  "key8": "3ThSS5XmKceaN2ZCGSBWqZsZyBnfiF9qGBYnzVJebFTD9NHyn5x6mufMYUBhbUdHcF5xYF6HsrHnib7d8yHRtkYo",
  "key9": "2ARBjenS7ThfPY4oJRnPqs2QjHCaXL6gxhYuCWZMMPjgJi9CXzT8GAJQpmmY4PsBPLaymxoNuCYovPMXQ1DVuGx4",
  "key10": "5fEC3tHd1chGiSdoG9RTKwwLaL2gL6t4v4EcXGgGwGvFQfcg69HUBA8uy2sqSW6o12m5xXVYgcVe6hmouvBdtnWg",
  "key11": "5miVyF98mdiDZMB3i4uPRqC1cjRX2FdPtmgPERuGoEnwbu1eURYbwxjQXnAiLz8YbiLXLpeGNGxsZi18w16HD5XY",
  "key12": "5uw8NyxFgz2yiyiQgYCPpQ7iUQSY9pfcwCbUv4qhHKSuBEbkoztiLkSdcMo2dMxuSEWcjg3TL3N9u7VHdVZhCtNT",
  "key13": "2o6Jg4ZKkaryms7c6XTCeoE2pAxqHRNDqz2NoiJM4AwCXD4jUQxsRurJpCM7hwkt1mSQWS8MDzNa8tCbRtPcUHHV",
  "key14": "4VM4u5aiC1SYVsL7aEfHHVznB4BVsdXJo4wBUiP8ArK8iZFT7RC9ahJz8hbug8h6yPasKU7dDtoth4Z7UgH7ehGy",
  "key15": "5jQamACAE6uQf2JEJcAKYU9Y78Diecix4V5wzj2gzLiJ6PwcSRYGbKATqBTfi1XAB9EffwMc5x9m9AQzYbjeCDSV",
  "key16": "4wfWdNP8LdANpURnF4xaTxS9Pn6ZwD7WfSPKTxer8pCmtLZY8Hk9qn9kEEfMWdCrJQp5MAjzpfhoggjAiXGLGZXQ",
  "key17": "Xj2p29xfrvFvJdR2yZsC2Wu5E5aSaigSAVARb6sbJ6WinfLBNMtjfUXTbFngb44LU7yJdATWugwSw74Qh6WztJg",
  "key18": "4DnNhZta2gCz1gBXLzymibWw4wyNDvBvfK3z1SJRveuqWwXF2JWV89PXuYWQR1GLGfmDhiNsa9sXxWtvHqd4k4cL",
  "key19": "5sE2HLk6V7RZtBWnpGLqzLfG1CaPLfasXvEYKDgroSCLjiaZzN1DZdPDBerK3Lfeh627gn7PpJzU9wFGq556UQvY",
  "key20": "3tkjDSuN34JdFxSgJyd268h24Pu1jS4aJ1SQjyRkXmkiLuXpuYdfGKCqfn6xNL39fMQbq7S8BEkuLYk4LZReFHZx",
  "key21": "5BX5rLEVcoxX74ABCwKDJ4qnfyJbfxZmbXCbgZ4paPDiv5pvgYCpVizcjQyZkzhd3f9fbfuEF7CF3NeifaznREch",
  "key22": "3AgR9sHZEmjRshEitpJHnRGp1GfyPfLcH5X6aLUY3Zycnk9uViv6oqD8NxoFtPoFSuBdpWDMfThuFp3P4tg6x8DM",
  "key23": "4GEJ8ao5fSCxG48DctYqFdzpHT7yb2PtkNEDJygkcyY8wDeTwfxQKB8UzSJhr4C14Z8DFaPCA35J6TjrD8nGndZm",
  "key24": "eA8GZ9BnvHMhPRPznZwEYs9bEDzpWwP58YJZCfNKB2L9nf9RTPpoujMFkoyFYkkKYUip6eZbVznMWwVDwH6CBSK",
  "key25": "5JfRoJqhPFdgNH5uehQbTgNZi94Rd67cnFnkvYBEmAtwgKj7ZxipBA72YM2wTAFxqs8PdvfvydFyX2QY3xQtoqs",
  "key26": "2JmepU2zdkn2WYSqK81RFpcGMY4FHqjHNkfW6eggDJJcasncxdUY6cEoRBwqYTo5Wo1pzu4zLi2oQaEK2jjDMt2x",
  "key27": "447t8N3stAQihLVEmNaGH2Ci1Raj3ggxfDSqradH1TRXxLXwfDxugFmMauGvju37Hwudcwoh64pqgxUH8aMwYUJR",
  "key28": "4pVJwFvfgw253jqqmdHkGBLVfSuMtHswueVPhGfi6V2rS45U3CRGMFGNXff9K6A7x4yKkfJbYrSeNut3gaqdaYoB",
  "key29": "3miH4P1ASCVi91YXmK54dTtuqF1FkvTnKSxaTDNmk2VWu4SzogxCVKPyk4dGUXfSAqCGAtxGPcn5ChYDc17JHmC",
  "key30": "3eVG1hpq1VSB69pr8XngCCJ2y6XRUL4DkGT1hpVNEtqtg2ombHfPbUKbLxp97p5SPa4t8jP8UkW7tvuXP4cHczZ9",
  "key31": "34QdXGqqHLFF2vZ5PFUvkgSMtJy6pUzyR8BJs3MeQPBFffJBwVWkiFyV3jokhimNPesL7sTjp3PC5ZC2WTHg7uSf",
  "key32": "4GesUBSbqhZ85X94eQ36QDXVurCwCT5s4StEKhftQPWTVJnLEm19WBR9w7cdrMgT5mT4b6dPttk7jMh3cVYCWkUn",
  "key33": "5cXuy3VcbqGUpRcAqMYMYXkgeAJ7urup4LEisk7JDBkZo3jB26eKYSyTkRVzv3k8AeYp7NTSrbCNh1RoKpEsrt7a",
  "key34": "Cihmr8fR4PdEok1UkoAoFPyFBoW2hsDPYR72XQkQE4DMwodRySSfLQnLw8QfV8pv5PxuVhTDLkKytWCb2zfGoZ6",
  "key35": "2hFY36FgZEkxuFXhY571LKgmQCcqggQPxTQghNVA2vga3yfcdpjzT4nbtPpfcYUEGdJHsj2jJHG4xqmQRRuKUAtx",
  "key36": "43mh973CWGD1e4P33su7u28aQHn2K37mTwQ5MVNbo1jrADbbLZTXd6h6PPyraSn3v6hGP4aVK6E2op9PpeRHcfuE",
  "key37": "5buR4mxgKWVq6hPG3cjyMCx74NAmqMwwa1pyV7ccP4NGVxapAztSHng4F1oj5SLG9WU4M3b8CC3hNp1q8WgztkVM",
  "key38": "7pqUPhVfTPFRRkTRBz7mLViwFELmC2jtdUhQWF68WQ1xFZuuBETuEGuPHgPLZUHMYdEtSLufs3B7EspgF6sjUAr",
  "key39": "2Xby8zPeQSnCtfr2kuJosngY1YJY1HBMBLLArN8BfwyiwKB29cVFa9mv2afLqhHnJbSo7LimSgCSeYDc1yaepvEY",
  "key40": "PYcaZSmKHL2h7s2VQ51DEPvSaz5TkdgAdKUzEFd6ZzenkzRocxSaWVvWkSXyGvYJqgt8XQApGXepQ5ruCb9ABUg",
  "key41": "5msPbieTb291WHUZ3tj5CVQqv9uhdQgeufEU87QtvAxU7gZR1VAMv69YZEHEUkRHM5EZvoQaMDiDej8aKLfYbUp6",
  "key42": "59vNvFBH1NbdJC5x1q5mSKV59biSrWKjpF6ha56m3mqpqVVjKhiBATBzin7b7McUSA7ch7iQ69HFmsq8BoGYumyR",
  "key43": "4pd5MJQR2p4QfvARB4RL9vEYEycWqAuscUeLKugJXT8iDcEyYUQULDX4JxbhQjazdcp72vMim9No1xdbQxiUouxq",
  "key44": "5X9x1Z6ZBvgqSpoazBJosaPyUTbJzQtyG3q3DbuoDzKn3vXMu9SApQefHihe7VjSmehZykrCkKUehGMU8fSsPpKB",
  "key45": "Uy4maoSDdvMrLms6B2mdqaEh91PQzwH6jKvtHLe8y8XvS9b4ES2WU5jHoeA5yFc5pN5AQYyzrtV45TJa9FvLLUP",
  "key46": "3LztvtdATweWV7vRgqkJcavKP4B4mDCUuRS4yvXWKb7z24YoNFngPGyyqji27mMBMJKHkfVy82dBwgBxYX7umBqd"
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
