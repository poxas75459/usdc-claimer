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
    "3q3pJwEsN7xPcwrqf1DnzeN3xVTxi9zjLBVkpPXrn8bGMp8qjiSDVrBKMH8WjvScBaUpsv4AUWkPpKrpVztPbE4X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a4YZXnzgpQfgkj11hCoTbCLQrFV967Bu8nGNsVoT5mvMLccCYRvTPBpzJYNsEmN316NBuoKUGyBYA8yYnTEuZr4",
  "key1": "2kooGvXzjeNQpLXNwB8QVJYcXu2KYGjFyxxZDzK8mSxohBuDcQnCcRvg7LyFpbAFigTKvrK9W5ChqxUXpbS1e2Z8",
  "key2": "4nKRqxnyDcCZnroJE9MVYJFhbPNsaqrBraD27AGAEHzt7GBMBX3pRXh2ka3USGTbnZcyxQPeM6qHkHnC5EpastsZ",
  "key3": "2Dd3USe3NYHRx4pJx7gLKTHHH5fQ33skG65CJCVSEdEsLJ6sqdD6jSJGrkJ238WAiBmDyhT4ZE8daHsqQontoZbj",
  "key4": "5Ms9U4RrDKtwDCF2MP1ptE9kgAy4X1Xg5xkXrK13UYKEj9dsNnGGGVV1RrLgWoYAZvuJPBaucNUi9GDU1EJA7J3S",
  "key5": "3krbwffSdQB7Ldx7RbMmn1ouLPPPrpc2KK3xPfpgNWtqv9ukhDrgTMwCMctKmouaZ4nszz24Dw1sCpxPiCMcPwxV",
  "key6": "3jKXEcAmqgUqAEm5hsHmtLMUhSo5br5rgwe5pqeQohTtwj4BQTDsATMvVdKvLM2EvdqUoQVMcR7iAQBXknwoDcJu",
  "key7": "5AVNDdWiFX1pRLQpiMm2MMQ8DgX4kuNJy7nwB6aNHygByU9vRz4KWNp3SJvnUzWB3geXi9LcXa6eP1gXMCyThqZD",
  "key8": "5GMe5TqvGES6HHA4428s7KbrCq6FJGdfuqohoWiqqD1Zhk5kfwRiKaPcMWfe8PZaBHALrzVfwDpyC4V9ZuaBkMYb",
  "key9": "3enZm15HiUYAoJNFHpCd9UhgW6RuFtbUnANDdN7c9bxbkYHbzPFJDXVnufzzowTkZWAtjk7PAp1xkYtguyyYByfG",
  "key10": "3zwai9GiuRoqLGGAhQyemxoKj2FVViLxC3nziMzuJcyn9eNxhLTqcPXeeuDP3SLNLc52aym8Uk3WBrQdog9GEJwp",
  "key11": "49U15aSVQkQzeowc93cCUEkqNQAHX5myL3G54h84KPYrG3hBhswzdut5kBBhvgFnDuXWS1LHDeKKKyvX5m5bjuTa",
  "key12": "zVJeQ7SSuSPAwqAeEEbtNbhZtJ1ogqKdDBV9YrQ1fTnpmC83kTF6MHiWhhRg6K5zubDLMqbKdfnB5LWNDph2Eag",
  "key13": "3rtdEUis5LEwTzUV9zCvubnsbzxGLJWc26gVXpieMssDZjrdysaqnAmqYNaqc2EEEh2YVmZrhMzxdxC5gHVRttbJ",
  "key14": "4C452yVWoJ1i7EWSdk6VcKbdNhRvgTt5hwT6SVCiY1LdUUB2WXchkYHiNccmbuLafpZMP1i9Toq2fxSn748si4AH",
  "key15": "3ny6Grmn9wVicBrckJuT23ebpWKyu18ZPbHwxz9mea6MnELFd2tJoNWF2waQGATzPabKrRJ2gspZT51Xdp543icT",
  "key16": "3m5vweipfYtuV6DCwW4Se52DTpVoXJraCFLehvPUy9orLhsvKmiXytvPauTXazqpaB9p75jSqPx8kk7tDncAPC2U",
  "key17": "4k2QnprrV1NDAsd9KWnQprxokhCC5sbsjWttRzwYpG8CjM24M23Xg2FqhyaX6fF1KyjHYBes2uPRYWeEPS6F9Gqq",
  "key18": "5zTAA1xz2gZjazfrCb9eWqHThufUkccp2pzMUWnqPqdFM3GL2rK4gfeZSszMMtfcMyHjD3uJmTFen4sBX13gURPc",
  "key19": "rELh6CLBNEnWoe84p3yyFddNNc9GewWuN26NnXyAoqYcA9UbHoqCbWHNv24miVtCPW5FivikBgudcVWz5UV6VcR",
  "key20": "54EMTBCV6EmmRwBsacYj4ctRfpPTaHJ6VqEYfRLNJXtardYDZ6KGbKjVW2RTsbNn34NdL9KyhrbP1ULQZwwfeSN8",
  "key21": "XjhBNsuR7f7H9ijPq4wU82kyPxvfjA4uVwDAXaht4RLQuoKdVoQGRnL1w6gHRHEuMSZvFNaY4shHDMtQjmhVWij",
  "key22": "d56RhnLHBzbz5jyQoKtJ5DAXEtmcQV3mqR8vAeG7Qt82hQqPboZTo6JZ1ATAfsF6qddQ4rzXKbrm5GApAmEhp4m",
  "key23": "53Ph8wu4RTjR9W6hVTHtZ5nCTq1cFeMJv8jqZicfoaq7s3ehQ8BuwLxYjuYVPFTEG69qvibAC6bUTJbEkvDRANuZ",
  "key24": "4rxBDejJjujwzYWbSkngbW83c73bhg638dS6CGysmixQwYbfSzmxKnsty1qSdz36QgcMwfyW4ZPiF7nixSLJzVy8",
  "key25": "4x7nhWJxd54yBk3JyvMQ8FXJtL1ACFUJmpDc3QapV9zfureQB9ZtSXbkAXJp9VAWJCuknUWgfYkE3NtjSF8iQyv2",
  "key26": "kAfcBthqT7a8Fd7M2W8uLWYAeiT2EQWz8bMAm6B5nLEiojDneQM9dnkNZ9taYfxrws2troMzsDdPWkBMAxwkwWi",
  "key27": "2W9ZCbKzaMevEo51Mz5tbsLa9Yyz5aKZDaCPrCAuzmSE64L9PaERJEmEEctpKEXq28zscDt7e1QXc3nvGzCGbU9j",
  "key28": "3XjfaQUFq5QLLYgtNEPGxvh7aSUjaScAbocF9ddjdGdgTLQYF9FPXV263G6sGjpiuQTKM9k7gaD7M8GdinE5quT7",
  "key29": "4vsVoYiPT49xWr22n2atsiFK5bq9LjEYTTQdkcmDrFemQ18cFqY7Ktq7GfCYdYXsnmmFdoMtAyFDaMc34VVe2DXh",
  "key30": "jZxSE4AMAo4J99NE5w5MvhP8cmUbPJJ1tGyQMQqmQeex8zBou9UfgHC9LWh6yjN8JCqZGBPNfaNFqPej9FTgoHR",
  "key31": "5tMKKUrGGvdcLm1mzPzNpjg69vYdS3n98aRLRGz7xiYNyVYqjyTunY85sJHfyb36bBgGFgw3BeFuKCfr3Q1f2mkd",
  "key32": "5tmpiEYUT1XuVFmW66UN4WX7jCUSQUV947yV2C121cEK4uc8AAeD2FuR4PA45BvbrzALtPWwF6ezRGuWPY3TK7vG",
  "key33": "4q7MBUkZcGNRxFYdgH6k6YjjEehRb1sLUBChTKpnepuNXoogwvK2nw5c5gto7AqQvuh5NZuKyxB7R5Jf9bRzjZWu",
  "key34": "2kTb5FehsiK5fpCRCHYJgfUbqGdF4eNMNTKr7LACoTQQ7THuydyLTWFjhKkHBYRoSxu8TFw9VXyaKAKX6L8BRgC9",
  "key35": "62E8BScXECzVatbeowQTYukNE8sjnYGGNypK99N3SuqK4MavvTyi1yaf2Q5TfH3mZ77ZvYk3QioRzK2qgfieXKW9",
  "key36": "3SYwxu5aHZyZvDPsiw32xmXC9sPu5grNaV1CyU3MWh41GdbmQn14hGZNLCkVCftZhJcQBDUjVCuFt1bK6e5B6Vto",
  "key37": "3ain96GzAfkNYRe3q8B3JU96EitqybZu4bqbCSCLZ2PsbnrdG8Abdvt3f9LAf9H6qQcgcweQjdzsQcoVxyMi6rQw",
  "key38": "4p1zYdpUU3XLcN2Hivn6Ux2daebSYsv3gUwZWYQtpEPHRfQe8nkSazWAWLCZgggkpuNThX3NXBwWAtU8hgMzSyUr",
  "key39": "8mVy3ty9PDrwvQWMdbiKrRpaW5w19gnpuUuyBcCi1FZ4ccLYVyJCmAqMAjHVmy8BAhmMjSWmEeGMNuuLbMzmMP2",
  "key40": "211QKd8DgZ4iin7azhjGx62Tce7QS7XU3uH3bdpV53iMpBLcguPrVJrRiuH5amo5FFWJKYnZoMTYWyd5cpdLVMJp",
  "key41": "4kf5NjoBbAmHxS2p7vjVsXyzE7Z1djVc48gJSXWZ4CeCjPtYtuksdk7B8RhiBqwWr8ybrMREzQN86YuWLhRScQph"
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
