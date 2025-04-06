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
    "21atmwk3efNDdcNEdcYRFAhXAsBNnL64GjsPofHwQwzHqxjpUPwsSbWdTGX9D1ojvCMZkwRGqCLXa2QYdVScsWF9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31BBJydng9WUbk97atrae5okJV2QVEyC4HVhj3Ftzz9EipdaGyHt4Z35XqPbg6ZFLM2qDyXbKQgGubVZUBfTSdmk",
  "key1": "4bvHr7kCpyEvKWTaimW9hMbnU6UsaiLcckgrzZ9U1D1MqEhkHsCEo7CPyakmckiqk26W1cyypHh9oUvAVpA2URbt",
  "key2": "3etxF8JZDZM37NBq2PZo7xcLueHU9hXAS4vJqiA5xK87zVQ92sjBN55Tvt33VEVXfDG4C9DxeYtHhW3sV65brdGf",
  "key3": "i8DvVG4GADGuw4Z8DxeoTCi5akU7Mz2e3HQC6yim2mr4EPKfnbsQpFjc1KVzZP1EhRHiUPD3n7sjpxXWh1pjixo",
  "key4": "hRxaKwpriwSeESeWiZa4bFxqrjo4L4ExwLiDzCHGtz6esxM1rD25h4SiMRoxTvnNbGA6JH1tSGoNaxMBffJRDPt",
  "key5": "4f4DuH8asWM9YMsYkDKeVGec7f6sujBRLfGwMJGeofwoyjnaQzQv4ZTixNbE9Qcj4ygtuTmX45R1zUSNCj9pmUhr",
  "key6": "iQssMJpGH2vpoTjtBai3ySupHUA3N724Q6BEdEtbkvcb4sAR1kPYHB2UB1Eu1agwBrod2hxXTcJWm5FaDgHusjY",
  "key7": "53NoqLAECX8ECL8Vnn8nwsNps3BmbDQBxJLUiq3KhfVJ7XfYQzZnxRaq1hcNfcb1eozBTkRKgF5AYsZjjHSQx5Qk",
  "key8": "3SJAzjTNAwhDssQ59aZm2i5R4wMbGYW726VtoyDRZuhspU4EqEwsd4Kjp6NATTA4wzyAjs7Mp4axSFyXNRfp3G4E",
  "key9": "3BS44A7HEoAu1eVnPJBVxjU2Pd4KUz6noJW7Db9CR2fqA7epmubgNFLPPHzyxqiqz94g4jz5Uz9G95frYKChggfT",
  "key10": "4KAiKQvFQKviUn5kSX1T96WPPTpwriG33Zx4jw6UJnT8R2MzEjoUz1KTRFigpPR8jHzSmiDjUi9HX4A2dr9HeJvW",
  "key11": "4cA14bKLkf4EkVGwgQxWRaFgLRGWnKiwZ6SabAujm1EHiqsjXmgjms8bBJCXkLQoRP1Qowbj9yCPbJvCrqWW5Ls2",
  "key12": "52BqvEB821u9cJhHHHdKYToX3WBDZq48w4ZnN8ri3czeSgvuFzNJG2ZLhB2tYpgGWkwokA9drqbvxfHgZWjNdYrJ",
  "key13": "377XnQNaHnLgV458DMJcQb5tjEL3NPxyLuvRMFHaopH11nJmMohGAyFPoWTg8G7qjusHYZYKqdgXhQKvSuSqQ2Qi",
  "key14": "51eSttcCTYQAWNUwhGk1zUxBTp1NwDACNCiaFpfLzprZwPhCG4359CXUAJSnsWHtWEKGfsDx2FVmFD2LVBKLkKo4",
  "key15": "3iUUL3sb7QinRwSSjLdfjPUT7zoK8j3hBcTweG5DpEC3GNc1Gunnomz78NakTdVCX8acCbhf5jkcRpX2EaeAap1h",
  "key16": "2MesBPnqDz3mJu3CdtfFuV414opHDVMy2YkR8rtEfxx2YovsH1sDgRtNjXNf9kHuGragucD8XLgJ5QfKJkYFirpj",
  "key17": "2exr7CNYYn1jGrCjxKNXFonubJ1qTmAdpbjAEeKbjqvYz7e7d85RrYZKCzkrNQZU19gnphRFfKE3aBgdVXkn5jBL",
  "key18": "4YjE2ZRJCy1WWdy2g5JZDCJxTTHHVfBFwAQaxmU74Ji8y3QjxtvNpmoKHHbin9Z4vZnWjjWik9HxEKaEanwZoBhq",
  "key19": "2346JVHNQPD6E6qRFR5B69pKDjPtUXye3W2AJPzHsJvN7iHpiTxYen3iv2VRmuQxrUsnoHVwXi7YRp2Rq181zbfK",
  "key20": "3BBAMj3zZAyCGAPsqeBwKguYHVJM9DLeqF3rRnbAq8PuvRgopP5hHHQ2GN5uPiiqrzwn9u6tUUx1W1xW5SKqQSXP",
  "key21": "BmhRkpH2ghCM31vmfx8FA4SbRm1vRdhxqtwNJNyvmVKx4SWby6vssRgPKwHAXPxQJvqt92MwdTjAe3F8caURTD9",
  "key22": "419pacLXB2WuiPdGrqRMmXypV6J3YfCxJSmmabDhoyuJALbCkT8um8KkXMCvmbRzJstFtT7mxsUC59cNjgoeXT6T",
  "key23": "3ZF625QTjGXJmiLtNh4VXRYWRrVVcTiKUzWkztuwLHzbQz7YPwXMpkLxWzSk4rchJN2yNFAsR9Dsz5rC4Qm8wjg7",
  "key24": "mVeoX1aaRSqeLdn31CqCZFdnAAcQrs6t9ybkweXkexJKuFpSSTaUUSVWBhBUNsfiY5SZKJYAxLmGFUVyqMnxALX",
  "key25": "2XiS2fquUaNbqWq9ikKVknwTJ7jyW6NozYG2rwmUqhEvpgjHiUUVYehBFuAoJJpxNu13JiUUJLmJLo8WmK2KnXn3",
  "key26": "p3AvQDGYgEBW5ApyAD8quX5kRdytTm3Aqcc4BpTp8p7rJGbXQcxBB5vMRh1WMWuG9SqPjwPAxm4hCQ5NadtjfWp",
  "key27": "38kwFn12akN65YrMpsUHB4sZiRnPeGP1LVcmbefk8McXRCrvYQp9tRZTD4eR2RXfnJBKyN4f7S7GRGFm76Nrqpgf",
  "key28": "5V1LyxW6VZpZPeRpAEQdhUgPRn3AVZYaB1shZe8syZvg8uouWsCimD5jzTfgH2EsKiYnpMWQX235wkfmvK5FUVva",
  "key29": "59aWeSrLwMjZuvjv73PNhxD7zaXuqysf9FZ9boPBKHaichFz7H9Kq6HCXk9pAVcvVaDMYBCEjvkzpP51p9GLimZy",
  "key30": "253LHXLZdgzG9JqNHCVrnuurYFttg5ivDUZJenfjwdwC3kaw78A1fijqUnyncipqfMr6a8idZYL7xRbAYRQn6bn6",
  "key31": "35RG5RYpV2d63s8BRN2DuGrcbKD1JyxNh9CnSsQkwSeabtYWvTogb28RaPf6ao9zEVZYHPBdMSb6YD6yk7pdY5s7",
  "key32": "31hu8pia6ifNfsnJs3TseuoMDepytEZ6X6EdXyrJ3jvBsG98vXNR4phaP6QCV8mGqM1t6VvY4PhPNBskV8gftzSK",
  "key33": "2MzpQKiuQnwmK414N1y3M1usgNZE3BiG1kBsUPeKk7garRLz8GjuQDnByQJHymXTgVrFKn8xCbViBJRGxEGK2Hd1",
  "key34": "3B8PTTE39uHmaANawCktjss5NN21aDCtAX6nc9NUpRBHCwG8YXubSmSwWk4vNDadkFoF5dCA2p24xvksFmG7L7fT",
  "key35": "42iXBZ6oHAHpxKAnjrvEK12qNwL52GGTdxdyE9J2RfUSaFqLiX6P3nWqZ1Mq3tm38wfvXpvaBaa6F7KvkJQGb6iT",
  "key36": "4Fa6m7yWQ6qN9AYhZXgmiDnDEnHFNQB6oE1x7jC18Rio91tn4hWZRdpmzzM5g2HScdWCDGc8NcDGXcEmDKfMw6je",
  "key37": "3p5GniEBY4CXPk1vXMP6fW8PbFdNcjzmLYAtz4P27He4siRPMvVVBWV4ArN5EaHKfjs54qEa56pqhSk4o4fiwtV9",
  "key38": "fAHuMz3YAHExp3hjwWCiDYGS1X2HnLyrtc1siTbK4qQmHZCVGy93KAz5Q1kppgEMRtXo3Gb2k3dDGjRC2783eA2",
  "key39": "4HpTgpXdCpEQPkMXiGkbiyZBrutGxRWbsj2DjhHgiN4KJqH25vajyz91jhTasQFzbDgnd3emSs5CLy5nLgDLcvoA",
  "key40": "4FJcP4k5bCQtJoGSEVWARyHDp8DCnsAuYBJ96VwkmEgU5s7yEc5kun9boADmtwALjinTqSt6a6qGhKE5sv79xR2P",
  "key41": "3YbtkvkG9SzuTA3uYw7ZASbHrYBnrhMPpSXBn6zTTr1MBNHTVpojYpfBz3DUMLkU13vE75EkLTvF98LCp3HA37FK",
  "key42": "4X7DwGbsav8ULiv1gkAZhF84k3rYvsgJedzFRBZQghAEcNvfjbCkKWFgWWCEm3MYQ8fXt3FbXxomjVmQUngL3ewC",
  "key43": "Uyd6hE9X8YEuchWPKzc6SWsmsCcRqBCZuc1hgtcaNmurv3x2pGuEhtKcPTt8zcBQjeg9px6RA4TgjYFsWk68xbL",
  "key44": "2BH8rUtAYC1zTfgbUX7xdhRj4wdn9cReB78rQUkPrReK4pztqxtgt3ytdoPXwc1iWFVjSfXMiza7nsMeGiDuurug",
  "key45": "2eUvW6DGs7hA475A3YAPBG5yThVRZ8PLEfS7DREms7XUsYrsMe2YC4rGFTAE9bzVp97LJJioBZ4U2VSjiEYaTymc",
  "key46": "4cXNVP378ipzF3hQqCwv8hNUNnjTVBm2b22rLYvMbdFKhq9A6p7acS4JMcqi5pKZWkXbzg8yyC3BDQqfT8zAPAdP",
  "key47": "2AgXgfF2eVckVV7WGHM2HUMjzd22yiRBGpdTUB3NKqZuJZrTJEQepYyaqZic7nD6MMcg2RqnwtUaiuL4jsv6yMRe"
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
