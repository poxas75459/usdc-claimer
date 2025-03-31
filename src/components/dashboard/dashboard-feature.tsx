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
    "2D2NfVBVCoQaz1tjFzVJsTFDjgEuCv83RBpDYYxDy59FHbwZjM6bksn28kuPJi25HKyqKZanFjcfrFdqgLzcmkxV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AMGt5rReXnfHJF7qfjdBm6PoaRaZv4G3i3Nnu9CEFcJmQButTQNVDjHWTSt36W2P14nNW7wk8RySpS1aY9mqU96",
  "key1": "4XpMVPva75nzm8MAukpHRrskRcxhfRiP3SzANajvU6PDzjd49oKmA2TTA5h15ifj5tfofA8QJupXm5ejtXKHCFvT",
  "key2": "3e6bn9K1SX8GiFwqAxHs4XezJtzxmCPcKLWC6UEkLob61icDFYNYFMfDG7yjj6gCAsQPHVf3mPiunWNZRESnXa6z",
  "key3": "dyUk5q8w2i6o5rWFyB3jhguezguZch38DaD349dkundmNehn4XqXX9o2hNsmG9CvDrwt3EwuR5RxhJmxCjDKTUd",
  "key4": "zjYqBpMNBcuRSUTaPtXNnGTco1N2wQuQm18TL6QAXtxExQiDMviBMjJswVEpV8ZBQhMHPuUsanZTFxjjBaG1wHd",
  "key5": "326x4ZsLACx6RevkkXzaJYA12vLqPjQdL7UyXKwYjGANFmiuSdxDUanEcQBTGPUjVxmY14uwbjfz5N7pbmciJ9nB",
  "key6": "22bhMW2nFckzv2jnKhaio7MFRzbZyutmTgXB7WcCHRWzrDose1t4rFjLHmPerHn5GRhbNH1EqMzzE63WqkqTFDFh",
  "key7": "65spasxUPTrwdcP8heER6KfPb1oFiAiS5B98wuX95syhfdWWdmH8mKYrPTq9bE9YFoZt1HK5qavMCjP1Msbg3eZj",
  "key8": "4UzqU2p3ZQ6buau6p7R9desy88b849VyWugGutxv2jqE3VhVs2LBzdTvjZcVAyyH83pn4Xy5giuxxNNWD5trNB1p",
  "key9": "37Q5sp1Y9QSUhs3D9E26bP2R2PnLWtjTvgzrMGWpRr59XZz8XgeGbA2MRDD7Rcf8C3VhEbXnyNbH98NYY7HgyvYp",
  "key10": "26SNRjhddrjxFYeearas3knDrpuQq5s3M7X8eAKAfFEdPPPo6fEsamhLRaicZYUhXHuaLhzEZtN8WgPoBnzktb9q",
  "key11": "3maPRWuit9m4FsMnZ4B4txWXmHprUSfw8vdWFeioFmqCkQE6q2BYpXpF76xrwz1D7oKFoDH2vLDZngsBzerqRfxf",
  "key12": "32i9dyPdgsb8xyPsECEG9Zxs845B3diDcjLHKN8wPjkgeEDyCdFByv6yMHc63TCH3xb1JEQWp8LQH8iCkWkny8BM",
  "key13": "4foj1DZxnVCPzdcuzXDDS3QhX12vKcHfJD4JLrhtPkw2sPoRPoAiKQd17drRkzgKQtnXs9226RWib9qc5UYjgP54",
  "key14": "34ywzz2NGRCoXSrGpki9WbCcdf7pmbJfgBU38FAV1gakRy4fwb7RFfBoeVys52GN42P45HrLQuLsiu7kFQvAVa4x",
  "key15": "3xQhdvPR4didVyiGCXSXyusqR3d717d44pAT3U3v1LShvw47N2oW9BQFYd1WBapwJhjeirurARua2EYkFbSDZ8rt",
  "key16": "541sQuL4LCvzCH3ZMLVUJa72TaZ3UbE3dgJbrmYxcohynVieuWuqAG1sJeQBGk7PzLH7xjgYxTkCM7JKFpfaTme7",
  "key17": "3TucSd6dB5PZRnToXFnscMPycM5G8MZx2v23TPcEGqm4rmKCwQV2h1BGjoFHSktHYGMiuWQHTYwWKfaHjwxsuMpo",
  "key18": "4HTUHRPxY5DSiB8ryRundzreZXs93jm8FFu9qVioT7rrJNH6GsJoyqFxJYsnrPgr8qEW1UVX1Bb9Pz64jk5cpPf9",
  "key19": "2R4mXYPBg9iCW2pgGaRXowhvptJKomviv6iNLNFGtAFQid6mE4G46vnT7fcEb51m4BY8QjEeD8HVBDfjvuzA4yvn",
  "key20": "Kwh1HdqjbTNWbmpE1dEWYyyYeQLSFqrfZnmVLo3WCbg8a6rzhRFHASv9Wx3PqwnjLeJeYhbJnUekxMi1VN7j3dx",
  "key21": "3zbWm7nzWfTMgYjAbSseWJLAPY4bv6CE7xvDWmoAGhgo6GNhFpgiixEyfAzETWMWgGfYBKG93VMVvWwDYwSVHFov",
  "key22": "QjJ6xgExFBtMQC8FT5jLh3XngD7qRvE2wcn1NCrXJhhtPG19T5vhJqSLD7xCdy1KQZRz3ACaN2eWhmSqTRSRr6w",
  "key23": "5hHzvw8xwB5anLdPeva4ExBJPw4vhtkEFvWf2Zx8EorCCQZ9e8n7HiGyfEk5y6qUEpzHMh4dFxfzXd7gDrABXPse",
  "key24": "42GfKQY4RiqTsRHsCXAg1wo9XCS7LbToA9WwnVGrmTfpZHXN8RRckejTATZDRPzuXHmGzabvffQZqZ778N9866hg",
  "key25": "5Qu1yLUDHAaM5u8fZMD4LYpZdBWMCSuXkmnfL6iBstbMqGuGJHcBfXFvJLh7mdxXZDE4PejxiHCHeL1aw2Qykx5X",
  "key26": "XacMzb5PGXG3HS5VP5vs1jyGAnMedyD2bNhdaQiKDP8Dh5N1oWj1zASJQXkKKhZ4K3P6wmC1euqTgkhe352R5bK",
  "key27": "2onUB5mTjY7VmjqtF5wvdbhu98V9iRKTxS2YT7cgAdvpJRvKi5n6RN6UeGeeiXTjU6Dw1KogEKMbT1jdYCjDSZwe",
  "key28": "5Tcow6qGHwA5U4kKjSBuaw5Fmrint4wGLvVo6Cq5uWaozqGbfqSQ8FpLrNevJw12f9pyjoEz4qa3z3PnLbqSEWR7",
  "key29": "49Z4RMtvFucYrfPG5u6QWHVxyvD35njvMxKEDWR6WqnaeVms3vXJyAZH2QvpkHFetFiwa4jYD3UXQ7YusNRVHmWV",
  "key30": "2qssVuLgFrenJNt8uXuQrDZRUS5Uh3MX7r9neDQqeT7DWpzJ7BQ7vi61vC2fx7bJxH1vGW85ukBGpBPFPy1S2weS",
  "key31": "3Vq24rk2K3SLU4W5shadxNBzyTPQMwP1yu12CGR3hzCzDGyjacybDvSQFrPpxVjnufvgzCPCEXahor59G2G2nMjq",
  "key32": "tpCFB14EknzWAjhjDGuVYa2ABzvdN92KPBFKAYRhaFjDqFLgqbsV4doFWatvNU9PU7J1tTJoeAxJqRZBJbwSNPV",
  "key33": "5WFP6jUTS3ukT9i4yCKaNWTHA92X5BA9MGdj6cePR4bfz3XH94NkxAMs52hzQMXZAyYgr6DDJZjMJDWZFBZt8dSQ",
  "key34": "XAhsWxjfBCeHFCBM67BK65MmgcS1KunyP3EQhR2dhtY7bXdHXCkAHK8j8WkG8p5VUifFsuHgd5kgQYSutsxJb5J",
  "key35": "3QHKb9KP9VvT1w32QqD9kraRBXuEZfKWBs62LjkCLShuZiFQAmC64qqKxuue9zbCH8UgYauaFdQXsjzvjKugtXVV",
  "key36": "5uR6iXW34z4hYuXBbjrRfZ9CfkyHAueCyLsTbEr9xVrPrKfnfrZhNkWkXYGtKh17kvFtDDWTRhZqPEKEVF2WFRuW",
  "key37": "4KPuQNHeMiZmixiqiz34Rbmjj6YgNXtHjVTRianMuLzn1Nn5GRED5SzuWDLbvH42t2AGo4hrWo6mGTM38Py1RPtu"
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
