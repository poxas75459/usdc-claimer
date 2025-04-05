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
    "3KV6fihyyAhYHNkXFtRPH7NzJqJ2nRcSLjpimkqjvskDHHR76NsmuZir4DeaPDfr7rE9cmL8VjiBErJtXdux6RHA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qVv6pyR2hioX8qrYkYjbuZUcAxbXyB36puJvrNg4xk1pahYmJ8HPt3By4D2GE3VTvBQ7CkpsywgL1nWRGJiy3kG",
  "key1": "2RrcYz3549YC26AGnMpA6E3NnKQG6pEPSWq2yfeCVjpq364AaMdWR5tefUF3eC89NCFYVpataMGbNd9szGNMUKS7",
  "key2": "4kGk2NP41WhegUasHKWiYB2SZyeg8BJykAe3gpoCyMmD9zz8fQgnnA69kQj6bLBiXfgpaQXLE1XvSVQeGQUakWsW",
  "key3": "5ygeFi9gATPC8zdALQ4aG9FZ2ZhuQxkEhDLfQ2noeeykNFFrmKdqt58Esbd4WPKsM9Z6RfqhF9AYRT2XNtx99C3X",
  "key4": "41pKbTAN9W2Mv3p67VhS3dnsw1uqcu3QbQMizbKpcCq1cTBGrgyQsefyWMKwfZRmHFGfegz6mT79PJduMLbRCakk",
  "key5": "32Eca8AxvEkdePihyDRmHBm9uosNSZLJnNg698XDnfp8btPxNC62kEf1tStmWtwnrt3pfoR6f67kJB8BpSqaWbaq",
  "key6": "3f29YrSjtw4vDsMBcF3WSAEtXLqH228eBbw9F8Ffwq37cbQyzeuLbQ6tsiBuHcspyorYkuHH2TxQNEk9anC5RGd3",
  "key7": "3iTLWarp4VHPjhLrR4pGMLabPJCnAinBNuTiDShjd7BZ2yDhNcCha4VSaXvy71qjUdyvKNgWeYheZFuQwxfeL4Te",
  "key8": "4bEm4vKpbfePSvEDtU37CaE8BusQJLCsgq617qoMnTVBKxAM1snX6AW5CMEeZVnmtAn6QtatVk54mxDADxKhUUpm",
  "key9": "3dbQtw8KpnFJo67HkqT1LJfqmSbmCMu2qG8c29amXWFKs3L4PxaMzQDwspMopv2Z5tRdZF2V8xqkDeGAFjLxSa3K",
  "key10": "5ymBpJRiJDyk8A2N6XpTXtDrnzrdZWMNFpqkXFiEQWuJwWfd3crHeyAE8NsCkwNURtA6JaLps5DzHLDhtfVyxq9M",
  "key11": "35sJKEVwynzuWm2wU2pc2JXq3fUHMB6LoniG8Vbmg75wvyDurUanjBBpv1Hjis89d78WCSh4tK4BNvqFUBfjhQZJ",
  "key12": "2j5JzHC2ZvCDcYmCAxukVdvpiu1SKNK1ig2HBMtnoAn6FpkePoLYUJg7y34bon91d8tLswufkKZu4njx6dSfkXCJ",
  "key13": "28ViAq7DjU9TLvdiLYq2K6sRSYBNYvTYr6cTDnjfZZ5u4C2LLzDaR2xRBif6Kmin1Y8sk7otkCX9UzSiGUYMLHTW",
  "key14": "2vcfmw4bPAFJfj3aC6FPy24DQuF4Az6WjfDtwZU5Bkd3e44fgFMDF9Tv1BYvZGfvt8migrsRqt2S83U6qsyFxbMy",
  "key15": "5cBbQ5RxeYrbVJKggqow8J7Huz2snRg97NHDSB829U2d5khpEoYLn8VvG9wRufKn9Ugasjt9MRrNpzv65cmADYRk",
  "key16": "fcLFYiofK9dZFe26FjE4eWXcjEEKo3Keej6XRVJ4mQ29m8o5e3ypV41LUA4ZySfyX9UWA6U5o9sUuEFJN6NrBaH",
  "key17": "4YwJo4wKosjJKfxcG1MXKndFdUbsUbwt5akWjJ3nRsaRXHxE1pu978cDzcC8PoSyoTPi9z7ffcA4wtEiNThxriWk",
  "key18": "8Jskg6wiuPsYKctJxfrveLLiAnYYCv6vmpg7p6mtzSAHQFvNi3UChhpSX4qMky9gG4zg7KPWr7Bx5HVHuf7fJKz",
  "key19": "2Uua8pui2otFNNWLEQKtTKAZkyw4s28NQepJyYNFG8octRHdkdT9DhRAYS9AFw29iraunc8uHode41ar4SRYtZnG",
  "key20": "hMkaGR1CYk4wie6ivbXhqqcD8u2wpvzwHHNVw5dWSnxAGSCL4RUeEbULB8NgRkLmG6RZgufAL8gKBVYA8phkFn8",
  "key21": "3zskahVswYZUPGaXZ8iboEn9XzKgTnf8XzUJmHYgdnda4MDVd8bcLgWtxLu6vteG4KYHcLJpHKypF5UwZLpHRHsF",
  "key22": "5QSSoWUT624AvoLucX9xSERSRtgKR3EpYDEhtfb1PRuBDMmQoEroSEUhm8BMM8CfymcVHnuZinD5X6dAsV6GBoYj",
  "key23": "58QWQh9iuitYwoC6VCjBShLSMiiCM1cpxRUrTAZs9epxe4nLhMNqj79X2dp92hpgYbayjQpy6HoRfFQVH3Zq6Pzn",
  "key24": "5m35LYphNsx9Vpk8SmmUaa4wC8R9VfLbge3mntxRCaCZSTjWhWpRHqLv8eR1gTHvF1ZiPtWygayyxqmb16RHUeSb",
  "key25": "2h9wQvuypFxSwenm3Z41za1U9FwDZpk1z2FdbLsZ45EuGwkpgnk2okgKPTkkP6mR9dLtquj9Lpx48EYhFMQG6Qn7",
  "key26": "3raME4XVmfenjYBLwottf9QwRtJVkPXgFsiFx1yQ9KQ6RuG7euvqWmn8yK1TT6wCgAv9WDioQpR8boYrraNBh8xe",
  "key27": "3ZePUq7UtChzqyVkCjTSf7u8B1cganGz1fTLKhNj64HrV8cZb7zpSSmYmQR6ntQdPWd2LmfK2iCVsa6uuxBZyWyt",
  "key28": "a7R1m5iJZ82LSk67Sh39bNpJrPHfuwnbL9zNxipELhj5gTeH74BHM16eRwgvGiYU3mwdKwPcYjT7d3xhSjqg8rd",
  "key29": "5rk3AkSS5anepxtVmNAxuj87Vr1j2j8WrPk9Xwm3U5UcyqJWLaVd46p8cMVGhzTMsZevBJGLzVB9HpcF21zhwWU5",
  "key30": "5pDDosyh6YGRBWXaTfEezr55uijip9ykueTxu9vbRUtj8g8vFhSx7ngL4jkdyhLMUh2LnAK8bwuBcEEnUWGVmBbv",
  "key31": "R2SGk9j5B6YvRLJrpkdB2C1wch8qE9tJfjhEQuepf2PgyjJovF8x42pej7TwcQzfVLGiMv32jUPwYShRGtHbide",
  "key32": "pSyd12vgLZKuuxdCiMdKTAFxrjCChNR4gcPLUC31UCfm2cqjKZZj51DgYVfyMNtFq8JptBkzHuwWZuee1ULVFMe",
  "key33": "4z15VSJtToXRUjVyDaMUYAu4sndQ9hXFza1qEmBESQTfCk2K92A4X4eBJDXVxUBbiEbq8KZCy4btp2wiZcutTEaT",
  "key34": "aGdXy4YTFNXXt8DWT3jPH3S68t1CqtLLMCbhEGiUD8mAtqpyUDsvsGoTSjoMQT6DpunYfiFfXnFunfYU3RWopyW",
  "key35": "46RtYhJ5on8zB1z7j2t4VQvweCjdjN55o9ssjXas3dbWjZiT7RmeYb2iZ6xWarf7npbPAcL8hdtzjiXUEVFLMvg",
  "key36": "55kptszvd2z7oQ6Z4PMWWhnjpXbTeQpVJs1mRjABaL29UMkGhTkJiU6bSacjPreST5C4uqWiNpWmb6Red71XDmhR",
  "key37": "4nragFCxBnLJNVYnwLTLpddnHrovfzurfwYYyF2PEvVnNKrUHdW8P3WkYX9cfRVDTjQZZyB3EaTxcCxPjCAYP98X",
  "key38": "3a3czJ9neLFaGYActnzuJeUD5MLXeXtm2JJQtnKXZBo5V8TBc8io7rW8o1p3yoFq7XNnhjP5BkM8AhZazLjMCrQf",
  "key39": "dd2kiu48K52BqNYc8KeTtCdQBSUKWYNeaQCFEQqPdtYoAeKg6vRhkEzPb3FJ5tGsBzjYWXBYRzegFFg1DPEt3Ka",
  "key40": "wFCdaDoAp2SrQUkdWWw4kmWfqYE33DoLbYaNCyHJh6wS3XzzTiQaq2oSzfHYymBdGrCnXfxZ7gpsgWW17eKAhfP",
  "key41": "2cgL81a6cdpvb3kHcoENwDsdGyXqiJ2cKsGtL6RrMzpSJ7WRp7CJtCXKjy9yuT8B5SBxAyfrTJinwqTrFgkGFjhv",
  "key42": "2ZhKefZmND14CiCQaFsXJLPmisg8MdgDKP699NHNRXxAeYSWspbzsE94SW8jarYZ5quZinJNjuJrRkJ5MskJoQBd",
  "key43": "B7HTzbAheCSmoPFsMpbtwHAyqoWA72pR1MYKr8mCRFKQW2A2JeAp6wuvL2XPpgkNuAgFWH4SMmKPM5S8vTxhuJw",
  "key44": "2hqSEVzyA3bWRn36GYdQ4R9nwwBnY1Pk6hQTMAqwDhB3A7RGGPL7pwkf3yCezrJyd3xLnexGQZKNZnKRz9Bo19ic"
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
