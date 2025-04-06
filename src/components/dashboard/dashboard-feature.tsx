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
    "657t3bGdPs5wSoFdSYoYUVCaftBDXnkdyaXFQMuqppEQY8J3JLiwkhTTzz5C7YAhXWa42eDAWZDijHeWuuKf48wt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5buvTmu3QiN3j1Bo7EjDpChiZW9ALfrSnsRoDzCQDBLcrukscbnseVMVUY77uJuz8osEMNY8p9zh8mAzamdb4sFC",
  "key1": "5rNEhahZfBgbYsbfYgrgP3vsAVvQk3arGCCULjafEnRxDg4EBcNpU8X7UTZR5yeHb9PbhqmXBEfTsojvE31UCJax",
  "key2": "29Bg1xttCuEeusHQWqRSypCqx7RLNREk2k1tPsmryrNACwqCv9JvR4qAmGSRjjmrCQW2yiujvXgvxhXQc4L4bB1N",
  "key3": "3scgYPXJVrGqzZiNny5NJZbis8Rc7wrF1Fdn2czbiZpHLgYAVoBzALsyRGbvt7H4Hn1pwCg2tfA14cd7k9UUybNc",
  "key4": "2Ki2BAkwYu7SxLfF2uMbDzxRh3fnp21i1nkTQzRrH1M9mZXEryGxsFnFfxFuUToMt6UcQkeEAE1mRDjp3BEwge8m",
  "key5": "fXRVCF5UG32ESXhTd2q1MZ4UgvpSnRHSweym3GjpshYpP26pSugsyjDwaEsWYSkHkH5a384bSQwEKCSWJpmEbzk",
  "key6": "52UvEmGSUg1JeT417jqgXgkoonTSARkUS7RBE14BgnPg3z4TZJhGjcLPGA5TX7xUrjWMrzyVoZLG3eXUwSx55Lu7",
  "key7": "35Y9sVnDWUAs9rc4XJdr51aXpHNgCqybQ4mPyiP46fMx5T5KpyVyZh85rZ6Xxkm76gcqW4immiQEbEx89L8fD9a4",
  "key8": "2P2Jsud6remFyDGUGSnLYgudFaBDnvB8EWPrckneUaeHo1ZyByqwsPL6f3kQSiopYirBouVAd5fA9KEGncHpranT",
  "key9": "5cNeMeVM8z836VhGevJfeCDVeqfprzPovEejnMwfxc4qxvo5uyvJZ2APLENg5yVXaSxSWRwfvS4TDc5vdz1x2ftR",
  "key10": "64SbZuUkVKrfrKMgw49tSizKasZQJ45qDEGum9CKmTDBimfmV95ScmgyAFYapSyYSTJMLHx8TrQ7bM67TYRcTFzr",
  "key11": "43pQKjE3tDVjGPRUwQdZYELeEfJryogwS9BpnYibhztTMnBQyzd468neKVKmzHN3CkcnXTdEZ5P6yk4fE89T9mhu",
  "key12": "5WA6qcghokmpbnd5kpQ2vgzVWW5j2fDWqb4xAb9DK1BRk922SQMZPBGZTqadSQxneVGH1sgRcgfcUcPcUaUi6dp9",
  "key13": "4JCVZEq5ABDNgttuFpRJ2RH892Uq1DH1uro51AAjSrKsBTi8pjDRjCtk7fyTvwj3RUJQQjwmyCRu454GWLVSD4qk",
  "key14": "4RnEASLZaXGKhRPou4tnxAqD7GD2ARHMecVTe1rDagnLmmHzJcXqwBZABwijAve9Aa9LuUrHKj4FRf5jEHDRwrdi",
  "key15": "4sKJYFUWEA8VDU8f7Ty14AvkgQ2uNGYTmAQSaMtRssXpYYd7pWWxJ97giJqwdBg55PuBR6M51x5o3k7WP85wWzhB",
  "key16": "3ejsbAgVpiVXEbaZLG6Ug1gpS8nDP8tXez8urTL2dP7vQnGzmw945jVscjCv2MJkJMu86yPZjtweUqKmVSRnDcCy",
  "key17": "4ACZTuCEDPQYdZHWdiJhHi3gni7Dwv78YRVf4bucP8Eo4nkEnajFXxU14ELxyjpMTRCAX7fe9zA1WJK2NzdbvoPe",
  "key18": "WfXcyubrGH3KGsw5QiuinpoZ4NZGNtKyFCwWX1kPNxA2vEvqBZwQzjLGNRkCCZ32xC3Z5Jh7Rdhy5q5PCYnA3gU",
  "key19": "5LDcH9qfxtG7KHZEAUb1DDVHL6VxuD2V2Pqd3XLvcL6LtHmibgrsh7enhQwMQy4V7gejEKvwLfN7uACeaVbZrp5h",
  "key20": "GEZH7J3hadQDdn2WaqQPCg43HtLEFtbEMf7HXPgPiUxW112dhGnXfFLRL3J775jcbVaHM9PQHDZCDrPVt2NYJMY",
  "key21": "4wi1yLFVaKkxftH8JHLernvoxQgpp1PToNnqiMrZjysbPf8gWdrgMMaZr8XGRkTWE15Zy5NEVDeoRGruCuvx54aU",
  "key22": "2Z3tn1PkF379V2hMniRitTXqxK6hfVCrgTAoFpkfbvQMKZeAg73BQ8XpiRaFWNQyJdZSFy7gYJ3mZAVcpLQtmVqK",
  "key23": "5eNtM8yJodW1WRwjjiA3rfkAMT4xxu8nRR4Mnj4mJrXVbDhh16wF7YtJQ7zmpp8Z9iNthvs42BxxtjkQ4neVcDDy",
  "key24": "4aCZkFwdDFrUkYcbvePosyv4ffBMeRPNuRFJPQaAyeBLKcSoCbdw8HCfnPYcUDekjUWRCWUKdd6ep8VytNsJgAab",
  "key25": "39bCSS9SL1dNdrqFziaB5zxSXNug71DsZSmYH89q8X6H6kNiENYaWUi9jBEiawtskvMHYzAV16d9sKt9TARZXMLX",
  "key26": "4FzRaNwCRP1HnUpXUNGSk9UFtwpBF11s86cNvBZM8qkhRKKxQmrkw6Lwuu8Hy4Rz7D4seJnYhiNiBc9ohq3HbB3a",
  "key27": "5cpMpgLGvTKvTLk2WDZunRRkjNwNCERroow8AwNR8R8dPpwyDiJhyAMbrrdpzVxiYpipKMH8uXaxZVhVX1eUMJc9",
  "key28": "55EQyREcSfxeYkNrsZXY65WpUyqGVxPWtBgag9qkxUNAm4YAp64owaZyjTma8qfejGV8hLp1rVKvM1raho2dB2vD",
  "key29": "2DEgixrhpjJJvP928NxcsPNDnABggzc97An2DgjaaMiCKXtyidQb3PB8Zy15HsWfgfQqLkZ1BVU6zgo56z7Zw52T",
  "key30": "UembwR51mM2jkQT3SjbtcU682yyRYz3zGmpvCQtsS6A1d3AgYniRCfM1ZovF6SzZP5Tj4ShL5L1Z1NW5fxoHtzo",
  "key31": "3njLZzuUSytuqMqo4vCgBU1Np2RfXfjCw3hNbVCT4HTBdYEZH6VqasS688KARsAKSPHhhHQZXjBC8KyzsUgXpcjL",
  "key32": "5haDrf8H896L2TjFZSETqpby7SvrvpiJFzwxDmv4SPxG85ffwEjj3ZopGeNrQqdkaUi7GswLaLudFQ6qeEmjzJkB",
  "key33": "2Y27r4VdixBBcbS2NEoxuzbKdQoJ8jnrW61UexbsVkTMPczi64QE3KZqmdf3mnJSyPeVyJzspb7AqXgRAYJjrTFT",
  "key34": "ZKsLWn6pE5NuNNCKoXwG5dxK7cZDk2ycVUtM5RoTHFxNGXsfPmzMDXL6tDK2UXeEModbJ34acSdmvusmHEuKU7z",
  "key35": "4prWD9ZuJ6ZG2fXiKCsGi6jH5T1zBxqr79SKN5WBMS9ALP1vMfCKxNKQNi44ipcLB68FTNoEQqyjj32vmqcaG1PY",
  "key36": "3pQ3Cjv6UniC9hZxR89HwiuLKDbCSo7FGHzMCt5kbKXgjku3ELrypr3QBRCqnQyuZ9X3vUncJiHMixpV147W7mS7",
  "key37": "iEX2uYG7Tujp6TLtVQ55uEk8S9sWyZ9PExQWgGHVp1E1M9z8hStY2rgZDV9EEMFniy5x7sAgUWeWRjX2uYw3K36",
  "key38": "32UZqfkoPYLm1NRUa1zNV2e1YTMh1szdR36y9UUAKAyJm6x2WdmEbpe7qz4bCZRfbM1iWbMpcvsmkeKKeVaTXWGZ",
  "key39": "4sDTDEscF5KuAZGyeTGhoFDxkvorGrqdv383HqWxMdFTwDRhGKN6bqpEwxfTpfD4y9nANn3LCzYyDJNvpayL8xsf",
  "key40": "5LFPBBYX8cx8juGmcTBYk7rsUVQnfapwEhP7MnG9gVNzvELXHfAAnBBAfpA1YBuq4izpinVt8bcfDyogWjCu94gG",
  "key41": "35svUgCZLxFNnb6EprLJcvLcbTizQLjbnafyn8yFqpF6ooiYpak6eeFfuy9t9txt2egNAjndLcYsXkYvtwAi9NPY",
  "key42": "2zxh8ECcyLhju1ELZCp7gaLWvqTpkWq33ptEA8tAcY9HQQiqF76ZMUi6UH9zjgZLiCMqCimbAb8oSoLbq5HvtGPR",
  "key43": "5FaWsAomvzXANQw1MN6RebcY1Hnyd6RJxXUckZBCX2sHavLRH6NZVG1K1pbSqxboTTMYD9K8bipJ6ND83iJXVabj",
  "key44": "4tQP5Vq7kwGd8oHDCtCr76d7JVq5qMJrQ14vPqiwLghEURvwJyaAzsuERo8jGG6Y1HQBTTr5nYgtMnhgtTCMaUvM",
  "key45": "4qCw5WybEkNFhfp6PD7bR9mV4GWgvqYPY7QM7TmbUWpcnmMeNWUqn62emVnVMLFUhZuNQQvk1NtK5HrgNj9ut1CV",
  "key46": "CkGDsNjwrCKcYnSpgDjvGHawBKSVYZky8Lb1rn6aXTYo6LTBh9LSG5LYGsYjLSX3wB3xkywNSbZyKUY3rwfeUTP",
  "key47": "3QfgRrT8piNpn7Tm3bnpWjaHgXyFCa8XFMnuye4pLY5F737xKuiB2c2cuyGUzVzyW2E57yhPSL6SNYKRT4Fmtbv6",
  "key48": "5oXF7Yr19RwZDdGH4rsazSXpG4XJ4X279hhBnPN7si4vGFnFUuisgMNNPvdTRHVHLzcePe347tAM85oXqMusuj39"
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
