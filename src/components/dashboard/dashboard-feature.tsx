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
    "229XZzVqhapdpg1Rr5UyFWf75AEytUSubGkQdtbLyNAC92LpsBTLJhCQSoharUvfMcxqM86Gej7wDkytFfCDB4wi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BepS2VYqCcFm9PEaPZRLqVWYv2C8wAyhxMfhkbdrPQURAvJQMNh95cCJhZ62F5G52uNUvA25y4BYqfVvBuqdiCL",
  "key1": "5VzMj3H2AmhqAssAn9VwTQhrMVG3o4GrAiYMXbJqz1DhFiK7ttH2YxK8MEwL1Gbt2xPdHwp7VJSsTDSvfF6PhSzc",
  "key2": "2QePgmEEjF3ZJ666dZ2fRSsDH3fJ2DBtyTcEdDy5t6i4puN7VjUvpKvYxUDwcr7PZ1xiR1vEnn5m3HWQFr6ucYrq",
  "key3": "5DvjiQauN6hNSyk4pqbmq2VYZvNBX6tjtTkvK76h5FmcvXViivrFnEvSUi9VPcjQYc991efRr8Y4re3xzbd6hGik",
  "key4": "4DmVrSe4qbJzXZyf9PcXNmRj4eVJtkdDEymirQ1ykAeGxKZzQEfux9xJV3e1kznUzmyykLZRt4sCxaJzJAmUN21Z",
  "key5": "JMHmUHpkqt7r8rhR2VenFLmWvrTBJoW7YTEcoejTrDkut7Vm9vmTeLVdZtWnE4WnR91ab5JSmy7Nr59GCo3nQYf",
  "key6": "5unY8F3zhZAexGbLq71K1kv9VYoSMufXRphb2BYHTJuBPbYrfXguavkgCLf3kApNqWpxPqgygDYPshBwwuLN6Jnh",
  "key7": "gfqaWx3gScN8fJtcEnoqk1oATtPySkLj4NcNaCNwreGU7eacwNPqv2DPDKkiRDFdBYoA1sF45b5DZpdMXw9vjU2",
  "key8": "2QSqY8Vkw7ZZDZm7ds6i893odeREJ71xnnPbJzN893QG4Xn9CwdYdZLTmxHSDhtn8RoeCUWSbkFiAe9tHCJgmW1L",
  "key9": "X2jGTxFgCUQzicZ4oTmt3HiQKNoqW3Dqyu5bZrPAruuZ7vBxjjb5D9ZDJANDSJhp7ZXA92kKhcRqpys6KvZqaqV",
  "key10": "3WcFzRPdT4soyUFNADn2S7WHZTgQqPB6mbCb5gmbypUdnWu6CHgztqtzmkjmUwuvoTPqaGUZ8qFvtDhoNkosrDPT",
  "key11": "3nhjSGEDJ3d5A46Q1m3J7LNTeUbF5ccA7sodDRM75ydGavRn3PdDUdVoCqqwoGhwa5AX34RXxwVPfvQ96Vp7wzq3",
  "key12": "24y6umAunbcouuB8mWeHHmreJjYHCQP7Hebypv9hhCNamyB7KtJY4dCU7R81UCLVFHSPwGE7EhEuKbtKb2Rz9ViP",
  "key13": "124ptEK1cF1BwD9Hnm3qpJaNxj5j5HV26S8NaXf9qQUK8gaJdQsEqYtwotd8BQimf8xeXKGWxTnZcspP5Sh8MJ9B",
  "key14": "5wCkinq7DZtNFpyWv6a9i4JRVMEBXWhkN7uNHFVsSjbaNim1EJ8hJtgXK2d8zZsp2Uon8vofp2XwPZbrsbFtqhhj",
  "key15": "3mWCtH1AdJqRiYMmkdQ8eFrpVtB2r5ZW752USGeR78UmMUzj9AwYzd3ERt7cwRjDmJhJDXban54QSyMVwx6qow4N",
  "key16": "4abPHAWLPmZcsDtx3gWHuE2Ekji66tSYeDVykL7e1BuRgDTqNcbDiSToWtMS9o9BrH2Sw7vnggyfEuZGZQM4cRza",
  "key17": "nN1UbcVYWe2beX2Kuyxb3jryh2iuaXWsNqKxCwonqhk47G51RSCsu3yNtf3KL6H9B2HMfwMyXjzWiCjJrnoR3CU",
  "key18": "5TZEVv4eAKQFVf6mJ44BR5hXoFntTJeQKfkwez2qNEQDN7iszJZSVPd8jsHqohuoVxPDEeKjRvVt3dCpZ8VNy97r",
  "key19": "5u77oRUxEW1TeFGaetsrCoAnnBWSxv4hpX5GpBkLTgdRr7k1Z1PRREVahcqfSs6QzC9SinaffeMmq2J2d6jkBp3C",
  "key20": "2nqEeMtvHDdbPr18e6kx21pSit3L2dc1NRC3FQWBiM5ZPhbuki1du9WVxQMxYYMBw316QAFSbeXoVCX7qg5DaK53",
  "key21": "3K2a3658cyDWtT7TTz7r7vyyic67H9hepckwMtn7XFya2Bct7odfoyevYqAT5KKsPsPqUAYNF9UNbScYUBLnY3yY",
  "key22": "5QBSkiCR7tSdX8GYidHmzC1sAKWfECQq5NGsLCpkwuwTy1M3ZdgSJvZVcsrUZ82C1a9qC9b8Wvv8bTSKPqJh9aNP",
  "key23": "3c5dVBLfmyvCJN7WjNL3KxG8XVNUtAVVidc3A2YEiWmedVVonDwkGviK5YKYyoRrs14ekK5ced5VFkomsu2XmjX6",
  "key24": "TSEnDukfpjrKFUHxeGHRzMDhC6byUL2B5HNqc24wmx8ossGqmKooXMFWuzFnxWsSyRaWT64NMhTFU11SbwS6BqM",
  "key25": "4JJytWYn1YnNipGYnoaCAfgn4qasV7LDL93YWLwNXvnZBCwaswtLXZz1CHkWcp1TrYwhH8oa2H8fyFMo1LNpD6Vk",
  "key26": "5i2gREnSL1yA6KWvAbmfNHjPJPJdY5TwNw3F4QAjJSB54DncePiK2dZXG4R3E1653unDfxmXKa975DoR7XwxRDP7",
  "key27": "3CmmcJVqFomMcP9FuvrihkGkSywFbejAtVfK3b5RMiPJha4QoxBPjhAEGoPkxxMFVZPcwShsNiAn2JJK5x51TpnB",
  "key28": "LvbNj8y3Zp3Ts1NGjvgBSg6bhYyxQgHoSUaEhw3x5znvtNqV7aCA7p2UHgQMCVoo7YLNzxp2uCt83ajs46KPLPx",
  "key29": "5YcKpaMohidCAuF3QjtyaJac4PGgHoUUXrWSvg3owf8hYmaFECyp4tc7xoNN8ovo1nQTN95njc5S59Dw1795bcif",
  "key30": "T2An4AqW3ACGdKPwuZARaJfWqP8uQUYCt9QpsmnvvunDX3JhFrHXLHd8t8hyFUrH7E7z3MURJdCtbNojwTGGSBd",
  "key31": "4ekqSARyat959CegKg9pLjBFdjF2cizCfMhwqcxPX5dmomAXLoQ6PvK3GkCurHuLBJdTQC7V9B42qKbwim1TjJ7F",
  "key32": "43Lznm2N96MfLH9cYevsViwRN5SGTDV3vPWdpXgFbzmbtTjVvS3eZukGSaa9RQY6ypnY7W7Q7YnZZEW7qeDD8mQL",
  "key33": "3KjbbCVx4woCs6aYyjvV79z3xNaRgWhg8KoyzzJYVEtyJaJsfptvKHjUQ6gF7Ggx1M4FyXbfV3qDQCn3P4xPzPRx",
  "key34": "2GLf2BX5HT2qksMS1iu3k9QBwhwYJW6AwZuNc5AtyE7SjWurbddZUXb3JAkf5stnA8HRKB1mcj2daFfmKZncG3Wa",
  "key35": "4BZEJdSBScrNwG2EgCLdhHJpRjggCpooUUDmLwjzTR1NRhyhuaWkfHEU82xRTK4mfN3r37CHiX5t1V5frqH1KhsS",
  "key36": "Fz4wKDiVXMQ4fnAWP8sMxdECGxnvmAkZygnTeeDGNALT5yQ5432PWDf6kXE298mLWFVYctvznQKLdsKocBXdDZT",
  "key37": "5khGyc5DT4suJUd2wy93AReoLMv9dVmLNHdfcpFcsPEzCEBquXtjycDJEum6SLVPDdxC8DqPQ2JG4Xoax2FcZshz",
  "key38": "5fSgrHCyrbgMCpo2BJPEWmBUgsXJh6u1Je8ge1YdyBNpBmg3FA5iydUMVQP6ANhMQqmkLiwF3wBLAXYDVeQPXpok",
  "key39": "3ogGiE7vyymGTiMTKtwTkzidcHN6ytvVmQR3GW1XGDdabXhs6B7WnfbQgwDUa3vV1uGeqtz9orXKoCtvgCXYmxS9",
  "key40": "52h14sY6yAt6e131rvzipuufsyhtSy2L445Bk4nHSDiCkFdzpi48zR9MxB8baVM28Bq3wq3Da98VLWi9AL2VUVWW",
  "key41": "2bEAQyCmixP1B3Mg5ECP8H1xWvzMm7HnfWwP45x2X46RxGEb6CQUmLR48Lbk5JsE8oDZ8Dhosgy3TFgU9qJbYH9h",
  "key42": "3VHzTEksKqDJHJBbLVcLPHd4tXYD7zYtggprrgyi96EXQH2UPKf4g2fWKN52xW2R6sBijvpVcTHo9KFraq4fazUh",
  "key43": "5RAy1NyoGQxuXUP2DNZHEnoMe61nCXEwW3XEVadiVFE5ZgXiFzJ7hciU95fDQZXa5gvAwCUCtDpudViCQa7Fe5pc",
  "key44": "4tSxMfAoRrM7nay2v8eT1mBMtxdUjBEkBbmdTAnxqtZoCWAN67CJnMjLYy1pzkLExmN7bTqzzM37oyFtWPHWSjWR",
  "key45": "3wE2g7gd9ckiDmvBsLqyhERhxKMySSH9YAB5KE1nbnWivbi3TNqJRHidbGdemLRrhFGv7M9GV4KArxYSDnNmFkzw",
  "key46": "3vdGNnqAE7U1tq26hg8MQ2KHSbzGnMiFPnrjUYFbF1YpHm9JGsArUyPCtWsQdrYbmpLy6r7qWKuLBk7W61RD5BGU"
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
