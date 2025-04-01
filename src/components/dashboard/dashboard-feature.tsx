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
    "2U7DEqmkTdvqU4aJ7bohqVfngYoKbUtjgzTLdS1JVjByNKCmeeXQcmKF3MLzsVwLsJeM5FFb36SmitWSuJNJ76ZK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eov35B3ZqsVpGZb2CQQFMjAVCieDYyYtZ4eWRv2G4Lpe6MhR8Et9B7Ta4jxQvymQXd2VvJsj4hCsCNqv4DRQxGj",
  "key1": "57Dce4LnbtcjWWnQB8H1MMuXycdD2Sc6wbUWqfUkbsBQ7KMnEre5S2LVZhFcfn2LkR5qJC6JNPhpt9HLUEsddVzd",
  "key2": "4Y8BNEqFrf4czAmULFoGkpyPVPa2RexqTSUoonE4bRbSm4Ehn4xaZsCGhXdd3UHjiGPYbzowJh62UzasydTifvCc",
  "key3": "5521JYVF3LVu2pSAdd2sLJgcGjfGZcFrJJ2QYjNadeaHWCtmbDkT7dSvdykGaAnq1V4voVrdE4cbqvTgcfbMbQsJ",
  "key4": "Rc896RLpvcgX3pYii5xCNTX8cZbZ3EWUHxn5XsSEz94tYNPQQemoiTLGmtHJX9VAHNRFSh4GUHq2FMjDQXMRyTa",
  "key5": "3p7xeEXEH8UJRXwvZnpH85NZD2CQLE7wBS98pcQVZQVTY8Lkk7A5qtVsSZJN5UCM2PptQqBXgMzAAUcSo3ALNGGc",
  "key6": "2bb8pLLtMdMsZSEV9STV6psybH5TqcLvKUVj389hmuJueThk5K6rsMyaZf7BwvM47SMmiEeSJyoBMsC1iTg5Ngye",
  "key7": "26m83e6NFECCpX35ptSJK77t6PtqT8pFpZgCvXvX534d7LzPfuB8pGYm8QyDGD5Anamgncm9KTUqXzjHcUh6vCUZ",
  "key8": "22JXeF43YxDG5CJjnyLiJw7xgeMc5eR74ovZTQa6mDyngARKnFjT2ykMxrtdJ3FvYUMQSb2Q9hMBjMwNLFt5ZuV8",
  "key9": "2HLrX8N6QKmnbSFDo4YLoGtCQ1wZtnbBGHUN7Ef8dtiZFuwxRwPbtnNuvgjK8sGYB8sZirhkmArwoS3BwjamCS65",
  "key10": "63nA9gGtD9ixvYoy1DmeiyoKHu6eeKAw9W97B1egngFj9d73pRGpczrPKWFa3JD9A9rgMEjCf5VpEqa4YqdokezZ",
  "key11": "3M4Qkw4amQjZkRtMaVPYCATJ6LGxz39TSc3CwWhkfZzndyhq5DnoqT8LBdLugW16XXPpZNVGojHFvRH6ekJVVRqS",
  "key12": "8x97a5736EMqKB3TUhVicxn2kMPCjGAQ1k1CNphpBTiUUpARTTmM3jLusvjXRxRrS7iQdxDjsRgSpuwhW9m41TN",
  "key13": "2pFxGwUbY3ETWXq8EMdCwRdJspiGWPUUcUHvVTR66ViZwpmm5EhukAWpfka28on6rCXiTxNurDqpMyJatZDrBpna",
  "key14": "3oibueXuhBY3eMd9Jsrq3brVEtgFfENcpo1uesAYxTxyMVjARXdUvQwmghUocu4PG4bBF5BpydD8oY7Ka4UFQ2N8",
  "key15": "5q6gB4r8HGqrqDFhGnaGPRLT2xZ147a4vHWVkHXzZtHfEpzJeQau7giB2xbNKudBCHQzYyderNuRzbM43BFDLMpA",
  "key16": "22hfNb8aokf4Yc1pktvKmqed7sKsfQxdU3KBXHNu1nbLhyasc5jVkqPxyE4CqiHHVsuwnC3tpsgaAtokHmkaBSmW",
  "key17": "3ASEcu3shcnJmYUTDHGYmZzMgePVvYDAqBxYX3MvG2W1nuF8xRSyNqSV9N86vaeafyFm6jvEhcHBtDkTTxxhCRBe",
  "key18": "5CaMWYmCa4aP1tJyp4AuNBuyhxVW86e8ZKLU6P26L1LydGzMeoeFnwgGrGMuCe3HMuLMF9yELnwnG81x2VTk2gJa",
  "key19": "45iVLAYgV3ZCT81SMjU8cWyxWkoNUWy9J4Q5W2KUsdaqhWuP6nKr5sp3sTYVM64vgB6HRsHfTfwmZKhA1orqE8wn",
  "key20": "5JCPsJw6aNuc5Hta4Xu8JY9NXPR5ueYyLNL9FbBTTTXRJCcsiJh8gCwy6NkwJEWqHALSpywk8vzSGUm7Sjci4cdc",
  "key21": "1Gk1sCa32NtFGuQ7uUTq1Uuaes6vNwQ5rqHvA9eeyHJ3sFmjyAQDeHka1gsEMTz25YKbuBnx8xyiZSJhY7i2ZMV",
  "key22": "52qwdtDYDEdPR6EnYoGfwe3Hc2kYgFbPb5R73phC5L8MQezPBXMXKv4zTxZDpDTxoCKKqzQjTa3nAV2UxPcHf4Xi",
  "key23": "3caNVVVJyR4iyfh9UA4MtdTt2Rd7hAqBipVAhcYrDTmX3TYFaHFimhRTnKMyxxCi7PG1enhfveaRpKF5R9jPf2zW",
  "key24": "3bgxt5yAw5LKKGmsx8caHUK3MdE6XFxVP1qzYEAYseMQnvzz9X51vmWNp7vnUavkSdgc92dgzspVmoiJUkW3pGpZ",
  "key25": "4EQKfeRUA19E6AMRbDS9weDU6sMnvEDBerx3MrZFtp2JhkByHv7xYybHm5g54xVhYfWDhpvT8Kmaw7Txsj5VSEG4",
  "key26": "3YeU9kZESBZ2pXTpuXBhMHcTYzUBPMLV9L2cTouNa7QyvDfSiUUGn12NsUdBzZP5UyChUmUZQ5CAoDXQDJziHHbd",
  "key27": "3rpSgeEMrPH5nq5uNtpagWHPDNS32S9BPtu2pdcnRRMdpAwwf2VvrNUjons8ebiLXS7Z2p65moqx6mWPT8SqkLto",
  "key28": "655kamFziftCEzNaEr8TkXJUvyHh3wcn7pbukBE7mGnWm4KfwHcsiKxN22KD31e1Mj8u1Q9zVf6PUQUatH8Tf8L1",
  "key29": "3VYTX6mSP6ui3cWcmAEDZEbVJgCF6VWy8mV6ZUmWos9NzQtSnqee8cWiHPGF2XHR4V3e7nyn8NLQKYvBNya139PE",
  "key30": "RkNDfv993yRwLseY22ZMkQeKgVpPTKrq1mH3VB5ybfs1YSc3qD17zrTAGczeFdJuM9cZ5Xciv6sY6VrLyvUgcwv",
  "key31": "4RSakagqPXuSsiTttanGzupJMExKkzDboBwawJfX8vwUfe7SzWPsh6axMdXPxqS4Yz7uQjXRUvaosBa2Hi7o36JE",
  "key32": "2f9Za3q6PwW5bHwmF52XHNRBuuJBD1T82Kd3L67uEaMvSpTBi9WQJFkFKLvUusMZtfKaVuaBppK1bzarymoT6Bam",
  "key33": "5QaYhDdhLJjJyM2hH7ni5uwgViGf4i9T6E7bTqYiDkqXKvtwsPCYZZhMujj8VMVLWMNmKQVyudjdfb2r8i8oMwhR",
  "key34": "najfYTpP8SLwDKVCup5PAup2kEJETtWYMJqKEtEaWmVt6VRyAY3Vf4zpPYFbsrW6LYAoznSfvi2eK292s7tPxzg",
  "key35": "YnhKeSsguivx4hpVHnLECWddirS5Q6dNHxDF2Dz8sYuii1oZwGeJUc8ik3xWazqaEa5o9G8gQt4hVaQyhEWe3RQ",
  "key36": "48UwJHZi2LRHWw69GR963Cs4chi6Pk9H9epcVjTiXTi1Qj14gfGn7mgZLbgA21T4g7eyEHBrdMWtSJzedq44WvjE",
  "key37": "5nrXsK3bsvqBPNUw9zWS2tQgGSdYAAVqbDfjDxqioELLsrZeetefUXh6AdUR1QaLLdSJLe5zF52qfDny6uvfWD9X",
  "key38": "4CLRa5ivQ5eTHWBC2WcNc2zDPXv3kqYb2LtjBe4UraDjfPgp41oMBDbJDDQGK8KBcoSdjd18F736x3na19Xscjyw",
  "key39": "2husakzuQYTNx589ERkZYaCFzyhdDfKVChpHsckwFD7JdqNab65BmPrGuxLb2omQyEyUYtun6b5JstPcwvtWJMKa",
  "key40": "4kBqb5rHw5pJLaqydtwMZtN1DEKYD4zHHyPahsUFGqF1g7nHGERoDx3hTVySQvr1ZUPAtkcbz5mUCgGidMGNwm6M",
  "key41": "2sgoixvQ2eWqiP3t2ano33dMTAbeVnNitbw4G817AWskR3nMczhMX97acKcpq7Dx3MZoNJ12dR477aR4c4yuRyLs",
  "key42": "LZmQsfrARb5aivzYjsMa965nS2koNhw1dV1Ffs6qdx5gnqFXCn1EjhMDhvD1jBx3FMLDG82H9UFN7Bfn8y1KsGx",
  "key43": "3B1wqfEsYqd4fbCYcHFNbXDdRQ8AgRBpaLmoWXkofw4crmeLfNxZ7umoGMbeKBK9pTC9qA9Q3mpqsibFJr13xPeQ",
  "key44": "4oTJyzxebSZ3NupWi1NwmJ2UNECgDDpYtcyAgBNaj6gUwtUF1BKFLhU1RM1CLjx95RYQo7mzpMKs7VtNyx1ycnpt"
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
