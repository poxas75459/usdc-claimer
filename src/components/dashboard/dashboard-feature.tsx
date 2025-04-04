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
    "42UuG6UvrYygz3xdppJGbtWWm5GoQ9smKY5gscmpzjduBch9HkCwaU3Bao5d5jQ7SUAUg9Pi8hVmwEBFfEQ2Qzuw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QM3RNQNPqXy6XTyToiJXALD9RXHLsDJ1hXTzGbMLgsHVfQG961VmXkrmZ18suQXeYuYqLXX4iv9mYc9DQdiLurf",
  "key1": "3FpUNXczXdQ7xmVii3ghZPiAfKbXKXXTkjAr8XGJJkFNgVaTuXmykutB1iJoqwQj4zrovEo2YmkMw2L5gi8cqP1r",
  "key2": "4HucLR1ma2Pf2dzjuCBpSE71p59zqA2rPVVhWjgGpWb67M6wdRgMchjd53CGkRLGUHwc1VDTixTqZaVJweYVdSar",
  "key3": "52Lk751PDb9w8DZaesjd1jCHPF9RyTHnDZW8tLPUBLszhzpJ5PSzfBSjTcdiNcXKA6keq96oy3jcbtMrD8UmHmzM",
  "key4": "5NHap6V7wQEU6wWgb5z9zxbdmXBtcv6HwTQGB6J3qXqUEsrCFsEHzKiKquo95PbVBQ4DZQVtMkZJeaq9DXf78SqM",
  "key5": "mR2qSBbmyTmLLS37fiQL14WT5ATPYsBY1WcEkhyu2oEvhkKZ11vvVB2SbmePf3UmWm6BJ1CFQnoxEWwmrtatm5Y",
  "key6": "2WXprhWXhcnqyhNBW68NuWWPjWzkLHmf434zm586Q1qJNu1BJfdBy7D2Bgh9nTYyckroKZB92gdP8FN9wMkTQRG5",
  "key7": "4vCbPc2SVSYj2rqzCRbfUtXaAogyXrPd4JNSQLXPHfmDf1fthhS6UJhQANYsUb8GUAC23wCpQaVoRsfWsw8kNKRp",
  "key8": "MM9orYxN7jCF4sEk6ptWHGn4uriYi8jsnzXXqbPrUhLnaZCpb6BZgrzeEGs49MEpu2DiUQ7sY7Hbssx3VjtmqdD",
  "key9": "61ifLLZ9oJQNjkmfWGoA92B8MzrV2MCyUoSveGEGpRXeswtM7MPWq9Tq94qQcVrMpEUajTy2dFDXpxt4kSikkeKB",
  "key10": "4HgVWccjhCtSE5kLR1EY2WLWfkwXYKGmGJtTd1Gha4SDbU5hWR2w8hZ7vVUAQTNnk3frNjFKYtjLyJyoJa4wuhXJ",
  "key11": "5y4cm4uzA8PGs5m5eSkAhKsZ7abTUr4zgZbzLndYidpdCae8Y9wM1a3R8cb1vkiyJP9pr2MvDvVceBj3eFkiR1HN",
  "key12": "4KhLnUKiCG76y3FfF7PUWs8h1A7UMo4d7vxknLpmL7TkML3FiYkR2NBT4cZbdfYQ6n3G5XrmKkM9z4pVfc85Ltjv",
  "key13": "5NxCjJeeC5EYcwzfoagnGAZ5Mv4hZa9XLjd1LPfj8VgoiqLKcBuKukgfN7tmWNu6HR45Tk8tAdxmrHWfceztb8uw",
  "key14": "3xzNTa6EcbdDnvqpjz42vGLhvxCicKfkp14JeqgpNbvQWJLtCNwZRovyBG1FGYDqkMfg5uqFKH4EmdjGt5zP9Yus",
  "key15": "3phBxMkZ7zRruxeM1aUBPvDAjShjwSu83uR2LSCMLrLFexP7ALjxJHwaEXd6hZnS3DgN1pdJaXCmnfpeqFx14gnH",
  "key16": "2JhCjZCGTUfUfSUD1frwJawB4sFcNpZvFevGS5tNk5BkD53ucfQAx7GCF1rZEmvw64PZU3zDK47rAmQ4GZGaoQeC",
  "key17": "25YPDLoz4A9Dmna7agCmAm6xL4FN8vUe973MqafV7WFdhMJRPpeSEdHnwBxcNDB1vMwCH7kibypxDEDwu9hyCArq",
  "key18": "4ch5gr5SohEXjMHos9uJjDatZJmpgbeKnwuzoWHWw2ZkA9ssLt8v9iBcdiaCC2TZDoZaeTG1g82nUfguALAnnt3H",
  "key19": "4iEC1xzYd4gMJPdi1fFRVcL1SgZkS8Nw1eD4X9KjP8hQC6Mt4efQyzVYXyRM94r8zn2ASQCnJ9VxaC7YaTQK6DGc",
  "key20": "3kAGHdcmXKfH3TtxGFDYhr1jgfxY5mBr2kwQdLxJStXFdbHQ32PZAmMDyrXbb8gh2cWK4BaBkDJ9nXZXW3KdLJWR",
  "key21": "nwuohtkvZ5jSrAM6ahSc8c3FW8KdhJmW8YneX9TmcZ6jCeGdfZdmotKXvFq9Dxe64tY7AoJ8pKa7e9dqL9a7ubY",
  "key22": "2vdd9PNDWAvM7qurkCFGgTMu1BVRh7znWXaZrYj31d7wcTaaENEDG71n9ZSkHZHWvSkPA63NGidyK6xssrvwrTAq",
  "key23": "2H2HdjEpLg76uLUJBGC1ehaaJ24trDwe8CYQBGyNLRt62ajH82tjXoAUhqP9KMd7yW15emYJjTpF8fSTUUknNSkB",
  "key24": "2SHaUBvhQVUrjdYDKJvmNq5k44fXo1NxjK7sd4wcx8UN6EjudRWPPwEbELHYi9SDbFeqPfCZqggEJHkASsKFi5su",
  "key25": "5w9xcZRgJ54UVCi1P9SuyxQ5dxNroqaVmYtdKsirB7pApdFunKwZPrjz4s6hgzHqN9Dmvwh8Uk1Vyma9LGeSG7YK",
  "key26": "5CzS8Pg7YBdNVxdCCSsRenwWWVJY6dzpY2Fk4tVgHLaM6e8qUWuTHtssAgFRNB943gYFYmecQNjAnHQNBBoeCr84",
  "key27": "66qQMAXRgAJL1EZtzH7NPSjenoBw7V1LyTDP38ybaWogTmdp3eyc8NrLiK81Ljko4LMMpehThbPbAhGiYXgghpUy",
  "key28": "2pXM5HfjsCyg6QBS6gYdWa9hNDnSDJu8qRvkpwuCHHSX7xQo5qUwdxWXeNHsQXkUPycTyqRcmHN1eZAxgEpSJ3Zs",
  "key29": "5oNDUCitLoDvhASmPLjcmd3SSAZsavFwZm53Yg4ZcJ13hhY2mrQ8VrP8uA4TJTDaWta3za1RFWUFhMXqGgbA2Gvn",
  "key30": "5roDVPqgkxztQThWwui6bWn7RmDPPuJGEQUF4Bx5UAexPFzz2CJkgazfJvkdynsoCsKFN3nVEuPLtG149oG31kPc",
  "key31": "5xKgkLcifqpZHT8NKWNHrSE9cZJHkWHxLQtUsEG4Sm788joDAevkFr7ZmmofxHkStMeYagEW7Qc9wSZqENKdJGqu",
  "key32": "5FTQeLKdCtJWEFh8rVykTsnvMb6cLpaJyiQhUEomKsVorSEqjmSZbaZippwMBkES84UU6bvzHiGwNaDgerx3gEfy",
  "key33": "gSALz88Bi9hjuSN7ZedC7dVUxchTBDfarrGkeJiUxJuCWJ6jmXVP63GoJqtEDBK95TzzoM5drKMSSsfjd8mc6P7",
  "key34": "evqYDbx6PG2ZZV3q5Ka5wGQCJyenpJXk57o7krF9bQ8dNc6DF4t8JxzGWv3MDpSR9sMJQcFqHq39pgupxkYU6Hz",
  "key35": "3sewmcLhB3mBKe8quAiySbJfHMCFrguGiCAcBERgXLGozoQSy83Gy4LYhgS6JJ2vVc1NrJZeR9QPPkw1kWD5MU1y",
  "key36": "5c657oaXhYv37n4kiZHQdSWTtBPnNaTVfcvMQnmSmT6UGJrwisbvBhVFby6bA6n99HfJtMPHYzbNGWRks3p5trfK",
  "key37": "i1MufoHkMX244sSHjG4RiME2zuidrzkBAafhXQqxX1PircKdxb4STPHSFYJJYvNYpG5bKJNZfP2WUEqs7pCJai5",
  "key38": "4jdzTwFwvYbF5DcwxbHJZmBo2VKkE17B5AUosAeXPobkBhbCTmHNhNS3gRZhWp72mRWexuzHvkMgbCEsz7LBxjWn"
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
