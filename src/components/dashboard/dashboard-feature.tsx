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
    "3s5cDYckJp6s6TJ6jKDNUgzJQaL96JgLpAPZNjK2LWhineTy5McsgjaZUZgkw11cyXHxM99Punas441UJZFdFUhS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2udg8g55PTgGpDPouo9RxvSMsGJyMskT12ZzFTZQFBHxqBiDxVWfjpFFZv6DF3q35RyQaqaJAuk2i87kF7zZPzrH",
  "key1": "QriRzsn5XVJLdBirSz1YwNjBK1MhKtiFt82AuuKA7DaM9gowoAM6JDrgrSi1A7dbwLYAMZH85XYtyEFwBhnwvbn",
  "key2": "43MXtoavzSPiFjnwYuCPsPKWttaDRSB5SG7qGbZK5mBtxLG8tRSEaf3h5sYpRCh245C2mQYroyoRZbXRhK6wJ8Gy",
  "key3": "DSqjope1wLYYTsPtNxLcLbCnMajDsakVhLwMCug5EbVztAfpwasUpYozpo5rvNCbrwtwTKWUM9Py4xptbGGZDw5",
  "key4": "4v6T56eTWS9AJxPjgM4o13gyKeMU9EhrxSTdWTYBE3Lq8Mvox3Drz38AHuprMiqSpA2zpHgqjZQhw4oeqN39py5G",
  "key5": "5VMJ3ym7WrbX4a2R9yzRJgyF6e7cggC2NNUMQ7sTYJ3X3v6XemWNFyCHuEvERtuZAQAgrtvBC9USZAymjSzaXoD4",
  "key6": "DdLLq1skGafxrW34ojkUYyjduaGKH7ahCQjnmwnX6SR9829MkKnm5XE2z5jw8ggkyFBT3xBGsrRSasLmXkaqiAh",
  "key7": "2sj9Px8xmLA3n1DiEaiqSXknd5G2FPfeWX37Ec62y2jeXLijcp1QLvBW3aHxptt2wGVqbm9PFEsswSqAy3zTz2AC",
  "key8": "4Yt7PtH3gxTQ18B7kDdMH2GqA2ThRV7drT7uDFQBYu36Mux3EnjKJ4ZaoVoXmuSgTuK6GHsEvQc9P6jX9SL4SCbM",
  "key9": "4hu6Rnu9MyxBR131kYvF2U6te7PACCveMwJhH8RLKJDVdZfyWUhSYBnYJVRJdizgeba9M1X4NiUjXB8YDk2cL77A",
  "key10": "cpcAR3koJ1CkEbpgd5jHZmYgj9B7ay3cA6YRpXDLSM7HS1QdDDfhPoFgXhrSaD15nkhU5h2X9bmESAdVZpiKGtS",
  "key11": "42g2LP7GTei2JdYDkbNGcKeR8vP2DviuAyRmAwgwpJxN74gtfdYBtrdVuXjCdEwUKcSX3Du1tG913s61ymUTUgiC",
  "key12": "4fqgZVMTKTUvwUDgEUqTqas2E28Fr9aNgSUDdeoJ76md6BDgpPhybkmiUsrGBmT7qcZmjwKDkrfBSWqJ7362La4n",
  "key13": "CnWoESpvDQ4WT9X2pcfuzC4q4Uhed71XyidJfDxGDEV6eHSSeDG68CqnYhaojXkFd9zZyejyqZTaXHmyqBr77mu",
  "key14": "qHoVEWJ5ABw4H6KZfSF3kVo8QrDDomt1RMpsqeDhFuWq8HayeDCp19a9mJaZLMCSm2jXnapVZJcWd2q26CbgEgp",
  "key15": "5L1Mv1eBGg46xnEmAw94taJTu7C7jWEwFEzTLUZuczmH41Fb6vqgNdbzXeNu7ACMCDmTM4PyJ6xzHjQiiqLuLD3Y",
  "key16": "52HgBqjRRE6E3Jbvrbg6FZurSC7FKTJmB8goRPFm7zGXM7DKig5mDgo9aZ69YUf9NypQmBgsaQaUsqhtPN2s8AS",
  "key17": "2MR2EvpSX9JGYgUVYKfzYqpC4GjMR1DMbNXL8URepdgTiyrUJw9ZCGiLbHECep1GShVUHHG57dWF6HuwsK4z9txm",
  "key18": "4QQcQoA9wjnFLNrsckYNHurURAra55xKccHyFc9gmRvunSDqvTQQJjrrGMUhyjYQMuMHwY3aqMBBD5evnyH47zjf",
  "key19": "25Df2D6SPNsNoTcrZYBUZZsEj4dSD5zdwRvTq6dV7rNNFzjVugbfevYhP75YXMXwCQXZHYz8YZbxauAtJLhNnxoZ",
  "key20": "3ZetiaQ5qJjcdCbAS5WVddToe1oaLWuvtp2KxdPLrMwY8UF9h7QFaXyHFgkgHQrSUZpJUm6qJwfSs2ga2J8NYSZ6",
  "key21": "t5jatUEfsVcZvESZbEUcVozgdb9gCKDEts3tnWvnUH3E9CBFtYVS247bvtEsZW2mE2YrQ3HBhmhCwBuJUWhABcR",
  "key22": "3k3Nbz5ywCYDrJuf96W7pmdNH9kQkmhquX9AN44PYLqxePeTQUuGrM98x6QGVC8Ek1LbSR886eBCZ5YK6Si6VnEy",
  "key23": "3bMpkXpCLrrkdoP4VDapvufT3tn647nBJyc8p8TvTBw12qj1iRLwa3niKGNeDS91TUrhgbpiQYx8JrBVtvXKvrT4",
  "key24": "2Jy3u7CmC5NSU61MkjxrTq9zaBtPGqcYTK6GwyyjWpnRVSHAHzCSrdXbg3zSTyd2QEDCk4nfBrY4nycXytZggajQ",
  "key25": "4uYLgB7t1W3wBM3Ra1BCUDsoBvizBYpXu3x55diJfHwe2cdMmaozWU9jS3zM3UKmx2xX9xPMUJdAGM7GrLXWsaai",
  "key26": "BVxhMb7UHnLBgs9zC4PfcL7XfAZtDudxuCmUb7n7i9H2uZs9QjXoQs1DtsPEH67iSA9g1tAydM6iZNPzpSVSpp5",
  "key27": "QLAZw8vt44k3cVNZYGJoE2URD9MmuyHZA7Fz1NBbLo5JpewEGqtcjxHHGADUvb9iGXMg4RTv9LiH7nrpzKekhea",
  "key28": "5oBYjEcT8AtsuC74LTR1bLcAchkgD1un3VL68ZxDtw6AYBsWzdZ79P5CahSN7o2xagWN8YJekb19cVju449owu4M",
  "key29": "5rMcp4KBRUmxfT8GGPatEo4F5RtNR5AWXXVQy2pwBczpDF6jUH8qQwbRNnyBfBpCzwQ2nySRV6WugwHEmJwiEWUW",
  "key30": "47jFvLY7W5S6GCo9jEDNuLiFspwVEzkspBQMzME653XV6BgkPDMJeGPY7VxrV6xAuWi7WaWk2MokeQjBN3odtrPT",
  "key31": "2WxSULwxvRCgigN7E6gfhUaLgBMpHC12MUFZTNRaYC2paRwTLRaVbmcQAqQM787FAfw8vYSMqudEFZBn3shdHWAK",
  "key32": "4vVUA8c3HcZaLTvpbwqrKsQg5v4TmhRUePTn5A6Q884qX9wFM7tnRpHxgE9PhidgvbXmZjqN8Fd7wyJopniR6M2o",
  "key33": "3e7tR8MmMWDifNh4RB3QTL3PYSqJdaqT8qs9pkDnUB3bMCoZs5txSsbsVGDd1MRws7cEVoSEyX27VyRmvDcP5sZZ",
  "key34": "59NAPgXy4ydsYZzQaSF9wWvVEoc7V7nxcLpqAPSjVFbG6qBh4bcbLVrnzUwzUVsucAbyLCvnXvopqQWc95JupLtH",
  "key35": "2mnRZz6ze3YJKYAQya5ecxfnVokYAVvGRPHXpFsusJVdNmBoCtwG2vcvp18EahrR25M5LEisG7sztgfvXkjQCgTP",
  "key36": "qsT5K82m1skNM3hBM7K2jCRD4zzUb95Hj7amQ8Laf7eNceYjAxUnaDUM51xKj2b1RoVKmtU8UJJSaFCvBjQDo1z",
  "key37": "5uEgSHuZMFjyatdcDR7daUCvVShA94BBSfyf6r95K7PfdDZZKkLRBwihuZEsmmHjYSRPiC8aWS6TKrq5o9iWM6k6",
  "key38": "b7DwtxXDUL916GZMNqLfyRAqKsdUMu1TaipVZSCCh2bQdV2hiFbBFomXjHqsyNkzqrFW96oz6KPEgKM1KditMPY",
  "key39": "5ySUxp1tdxRFayuAaaNzCPdm5HMGUFUpxibJXVPyxnTxxDQJ19a1E9MFWv9sjPAX38k6haUXCKrhuwUh5axcRcjJ",
  "key40": "3eQh4kQaAAaMcqAUVJYkSCCnmDpgx6U52zytcfnbnuK48Njdfr2bqVRSoVTAqu2Wz7voiVY1KnXc1y693Z8bYGYv",
  "key41": "UX3okc4xV8HJKRQ29uaArjqQD3FkdqCquW6NTGxhGNBmziPsxXhUmvbjchAnwHdkZdp9V8hsRqTbzu3BFTbe8fw",
  "key42": "5SS8khkoRo5aqJy3kvpPTBFFCjoSqqcsNvEtfJCp8AzLYm9c3QxDuhADbqUHoNUAdSwFJRCFoySVm5esPXz1g8cc",
  "key43": "QVapEzjyi8dp2VswgeV8SCHsrWxxUf2jzxEgiSjsudjhrcy5TW98pxxx14CNWvrdWqZXo3Gfv6yACALBLUUSGxr",
  "key44": "4Wi5mGH55r11GhjLdEyUPoQbk8pcpvVS4KyQbiY9vwbd1EHya4uwwQoakh3fa7hTefs1Ncv9Y1A1DEmVwAr95PER",
  "key45": "4p1c8aE389sFj6z94ewqPcwct8bPmRVQ6KAMSEbHqUspEmCKmuECGgu8j3MTyEuQzn2tFQE11yRKtWbycPBZvyFK",
  "key46": "3TLJSDVYddGDzmcSp5WTNicsBno4zTAHyATtgRUA283N6S5a7XYEfKfT4qwLvtfcbHnuasvxdDViMn7ewTUAt5gX",
  "key47": "4bbyYWeVfzDzMT3Q2aWq8Xju2TvZ1zKwwJwNXkT7jxdctJU9msSQsV1vnstWpY3MKmAMk6G5WusWSyMVbpMTobN6"
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
