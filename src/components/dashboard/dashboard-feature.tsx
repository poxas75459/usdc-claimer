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
    "64BjLVtwc67azQ2GksW83Tgn8itRbC4tLEFx5jStHevcRKnVLYcfxYTsadfmDoXBJGtSZtKb8ddox5H6fEsRVFWV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YJP6TPupwXhieBdCXPX7u6NF14sZjKR6jhURtSs9qUwZMspE5EsSeUgJfh1SnXCbHF6SdQrxo5Bgz499PvYaow4",
  "key1": "RGtkoQ15ynMwJuzTvhuXXWoszNDASc5XxQtn1wbw5oAohCAbnRjYnpdxEJQHc3XCGUzi18z2W4v1GuHadvfxtm2",
  "key2": "3F2KAFKYQ31CDwLnQ1q6CS8qpSrXvK6bfDFkW6TckRK93AwnPQVxX1VvEQtAjs6ytaTozQpm5Q4MDWrBVYi8FLzj",
  "key3": "pWtZBiWU1Fp4UQJSGwbyswh9sKexxa1uy4N1QKA7LcgRybxDHY5NqDZHr5gfZmddep7vxoo46xHjyc76YU1N4fU",
  "key4": "4BkRgHBmPbNjMLSFqoGTBwUEjdUKEmxQ1BrPHYW6wDNjWxjQSv4XgUzm1mfgTitTp3bQvpNKNkzKBYwRaMSZoYgV",
  "key5": "4z5FjdLGwMzUTqaeYsX8Xtsq3pXW27XFhr51FNLRjaeQySJF81UJqewvVNU2gkycW3F98TTEUrS8N2L2Ku7kUaWm",
  "key6": "4gRcK5Z7bwsEMfEE5ZWWMVXDHJPyW2UYNjTD1Mtp9qM5Yf7RDPXTo9Abb4PkQBSVedwEvWAdUq6WCvS6yXYH918J",
  "key7": "5sDxDFw352LGKBGGQvvWd14ieXNv8n81LKBY9fybUFLaxPuNiGvFvQjFZEeGzYBu6RoM5Vk7V1D9e9QKkjAxx2To",
  "key8": "4SomFxtdHaUpTTz6y3Q8XEjTCgRXXpwA92PxF3Humx1Z2kQ79S4M4UuC8kUsP6aPo8a1yzF5qR4zKdDrxSwash63",
  "key9": "4ztSRXfTDSA25PQRPL1AFbVeshHqHxoMihyVzewz7q5wdFDh3d6XUUd2S6ehb3pjLvrVhLFK2p83ewBevpezNZ4q",
  "key10": "2LTMywikMZAnM3hmzkz23UuwrYaHfaUhngXL2UeMGg8Y5Pjv8wYpJiqdZDmai8hAsNqGw3SVNYxaqq1po9Dx5PE",
  "key11": "4mVN2hyWZqLTLiWTbFEorHDF8sqizNYzDWWFP6bn42s3JHTrXn95UkvN8WRsFDoRNBcA852ZyUvFBV7U5RdwK28y",
  "key12": "5qFUZKYgh5XqDBiy7Jgk5HE3JfKCJHvgF4bXynDrY96hNm2Nyt8fopQuswiwrTvmmMGtVqKxsVe2c1WaTRN1mYwC",
  "key13": "XG3z236TPkup33DFe2GStJTyZksqNGufrUEtWnhDseMS4eAg8oXstnHJmC4AyPWhxoGEQjjADeZYzAKM9rhP7z7",
  "key14": "2Aj8rDxt2tc4tQKGHkBQFCRjGaSrbjAUinQLXSQM917QE7At2XrXPKHdxTmnvpUSmMHS2oS8x6P3Ej7Sj8GteiuC",
  "key15": "4kQHnfnEWbyDNvgua3JvAFuTFkMuf3J3Whx2UWtvjCsT39LskhMxo1YFUiq5mzL3wvCQKYWYTcn7voiLf12NHpR7",
  "key16": "33Ch87EyZSFEBS7Yb3nDqcwZPafgDuFCih6Y2jm8h5qMLATubafyFKL4rcb3xC349fcUnBfePdNLCtFXwP3zEEU8",
  "key17": "4MinVkKqHMrr4kp1Zji2792TjNU36aAkYBL7x82sqLipe7KAc8pPUAyznD5ygSjVayL6bCaAqDH1amFmucADVXxQ",
  "key18": "3XeaudFSzEG2PT3huyHDTDK7HERM724EYBQzxxkyGscsicSWRqg7voZxvSJcPmYtDxNWctLF11oNKcuSg6PK3N7t",
  "key19": "4maWPmbgPqq5bGjsgjRts6vZKDBbPMxS1kaEtUFiKHbs4giXEyEcvCwsbMT2mJgkoPwoT5Vz6MdyNeXYD8tcphiJ",
  "key20": "3b7aZoETHRTNrkDFB9NiGmcc6wXeKExsTEBz7d4JuinxqEBgQHgJBhbae2Vk625GY2tZzCdwgqLJ6ugneEkHKuT",
  "key21": "2dKH2Ph6UTt4pz5vFo65CUyAW39hs3n7kjB4xWH1ofVwxFDdVBMkGZGrByE5JUuAw6YAPUaAu4p3MnvmdEdTB1R5",
  "key22": "5nc6RkcLJBCyWVrrViCqTf7MYQwE6YGD3K2xsP4x5fzqufQ2GkopMG1kPrcV77ivkKaNjm9NdE5JJhFQ8GXYah4Y",
  "key23": "5Pe4etrq7iBLpDUsKtEnTjZwu9r4Xx4ZeMEsKQ7T7NawYSuoh2JAHuaNeH9rDKKcw67YuqGvFBKzCUoFyVL3vXSn",
  "key24": "347rm11krGDRgSua8y7aihtgBmKqbXDeAVy7ioigWoXhL6r2zf8KYa1PEYK3xFKnDgHB8qy64ZMUhg2vmtWGzZjQ",
  "key25": "4TGbqb89yTXcYK4sVKrXUFuFohMf32CDtL1wwiUumK8ieHgbswuiXWn9JLJAkX8bnAMhTdQMqF6YeM52xA9v92x3",
  "key26": "3fA9L2vkihn8EJCgjS22PYcVE8hXFGCi48fqhqprikoLvLL1reVbxPRAXDBS4S4fNVcxygjwnVJQV4shA31zR6hK",
  "key27": "2nJvUxQcfp3zzNXvfotSFAwm3SGP9rLsyMgx8joXyqgqcBMFSKmYUet7C4J3BhSg2oMkWApKWqkNCAVvVQ4gsoiH",
  "key28": "4EgX3e2gTz5s5Qg8KZ7iZpT547GTyv8Ns8HQ8kxqBmWWRsyAH8jNU7P9eyuhYJVQ5FzKRwGwqUXZZ6fobVrCoXFM",
  "key29": "3bkJXXthEJQ8gQ38AyaUf2eQ8NbCXGF3jn3iaHMYoTimQog7YfsmcRziLxvuXcUW6eos7cNwLUx3WVnysBpyjyXD",
  "key30": "5f7dDRq3eXSjNW6D6PyLjftsm6QiwKbQ5xAhoaG3yPbyzYKRj3SYgDaEUEpjdoEq8N2pjng6RcZNLv7SUA9H2MQD",
  "key31": "7RedeFw7MRH9sk5iqaWohLTuuaCTqcgFFEV1138YRhc4HTwBTtMp217RSd5X1pEzUAcxqnHGtyzW5no6EsTnCCH",
  "key32": "ewM6hNy5gcgmTcN2mYM6fDt4YdKVzj6rahAggwrxoUBLeTxLEZJh4rZTiXh9b1Rhnig8zWesDnmfPPYz3vDHGy2",
  "key33": "qnoWuGqsD8iR6syPRgJNRwuSuVjovTo6d2X1tqTspQsf7wRK79qm5QbuxKRsfX915mfefvH6YpDqBTTXrHhvR9t",
  "key34": "4dgmRVDDbj9ZSLMFkJ433BJyN8tQWLnCMC9eRJqq7BNy8aEkHbDpVSm5o7zk81epd4mRuNtPtTsKmgeL8tJGFHSi",
  "key35": "63tPSRYJtV7hJaYtWtUm26UKopRKwtDrgf4gnFTf5GJQDkKBVcR6GiqczQfE3HvhaYLGCDkUYj1kxwJjs9fRUdR2",
  "key36": "3vkL2A2ELeLS7972i37d9un4j3NTnEwDamG3KQympNtd1BbYps7m18SMnoJrmvdqZ8oYQJpWUcsLUjpLPy7mcHys",
  "key37": "5qcCfWBuj5QvgHxrGYFSZJSXakzFFN4J6KVqrNsmfNrVe5wYiGyCV9CrGoWF6Hv7at9QxraK7fyPiG5sQ23TKcFw",
  "key38": "2uNs9Ugq6zZmVo2iM1fhu1XPhiwxbAJudXB7M583asNHNHSeNRj87jSCK9zy1fU9XP7ZBQbPFCNAtRuqUniGnwN",
  "key39": "5RgZq5rYAV2FEhM1f4g9MXZ1QT5MDkh3H5rrd4pisLxL1VEjthcn9Y4JajNJs8oyRBcLDc6ETnPidNgvsN8yrxhJ",
  "key40": "Q8dDDaHHgBTSvZ4PnTVbEHK2sk6ojfBwttRbWHd76a7ekQTbZHaVYuBr9NTXrU42bPYr2FEESGygpciaU1RA44d",
  "key41": "5LsaVwnRT5M2dW713Z87BuM9cgeQFCtmjog746gkNX2P6zSfNowmgJ2rNH8EgBq69BcKrags8VZ9VxD3xH6Ma4jj",
  "key42": "4HtA6ioKFecuSUJxp65sVkFeJJZAriKvFvm2HWLEZ7SSDAPNy8PaMxpGj1ntKLkioXjpP3PT6D5SE3C2B3p43zwH",
  "key43": "2Q717D7UmZ3cNh9qJ84KqpZTCCGgwH3hMKj4NMW8BQZvveeaWT5LLuQFSq2CM9QwvSSoxYccEWa5spc9PaggetRF",
  "key44": "5ktqV4Q56DPdGh2pXVREChKt6Gw5eeeAfVeMPcpnTBrq6zvvpAtnXaEsXuNfwJ4PnmACZLJT5V99XsWaaWT67ZxH",
  "key45": "5mFFU8Z4uaczs9CsR5h3Q5KV8WfXbHuNsDkyz4MkW76vj3xVmqz1mdpEr2mET42cxt8fc1gTQNBKkEQh2ZLArxdf",
  "key46": "3gfVSFhcHYLvpUNbniMPwkhWCjGvFyRvY1qdV89Voxk2kbSNTkbPFGaUVAkLcC9gry41Xq5ukkpuPAihP3qmyVQq",
  "key47": "21imaXqHMCgyWqa4wZf81thZGZxjt55h5S5vfg1usRjTVUiXb5C7AsWbkyJBvnRnVuaRCgSPHPLfmAzZiMUfjyH1"
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
