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
    "5BGDmxD7nMFY9QW771MmRzjTLg6zsx81vGKHUHehDeTfuHV8FJE2Q1TFDV1xN9sGcHNeEtJc1r6Xp99qYNvkPHcy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62wkq9CBUiWKjaCzdiXEvJY7tXgmJhnsRs3UXUCTaryh9UJBFrttouw6KnPPoDed76NQDYF2TzM8K7jn7bymcd3i",
  "key1": "4YLC4bNmHbpLsjScbH1cJDJrKSNZPNVUQUQjtJHSkeg3gYtMSNUzGDMGchKfbDZMKTsrC7taBmvkHTXjEG3ygqAN",
  "key2": "5n6eWUD5jpM1SZS1rNobdjVaA9EextQT6nMTXW6hqQfy39ficd619Yxk7GQb36iNXkkZBWam3B2w38BCa4mALj2R",
  "key3": "2DqaD7TXETPnGELxiC4JtN2kq5MPTViZcsgHDoxUHepmUgrSeX7m8HWAMXzkHu6arqx5vP7Y3DQH7RJ56rttfP62",
  "key4": "3j11e6AcbiFWDc9ZJPBLFJ23Q5TFbWKyTFcSneSWqtHWHNeqAm9GggSA2HNC7ChsiKmLWxnQ71mAEjn9ntrNm1oz",
  "key5": "CKdys2CnUtk17RoXWg6Bi2V6PbpCvFBJop8jU51oY8ERsmAYofZFhb7cYxBmTb3sYgEYZPJKAXndUZuTX9KhgBh",
  "key6": "2RxP8embdJUyRZxuEWECiUAMuCuWUMvQ7fXVZQVmo3HWCKPEv7yowBQEJE5WYHXomFaQxFwa1oHdjpScLPX2XqPK",
  "key7": "5muWjeTNAMXSWgCUqEyavfatj3udrD5DwCvG6wiqUhAKXo9D8iKLJvmfoo7wRhdH71y7cMjDJonXu7o3T75KCaDD",
  "key8": "32HpDeDRSbzKjKNyyEspPPXUsZkJaHufSoJenfsgGnzvWf1uWFDdExFvoLt2eHinSoDUCJvswFuX9juF8oT65gja",
  "key9": "3nVaAa2yFXaYUxPZvFrxFBSAF6sk4hDssA3HSVyqLkzRfwkt5i7PJjqcFJCYhQL4zYJTxAGaBNWF8vyEMveSHxBK",
  "key10": "3mYbL2RpF5Z8rti4884razhB3rTJnN8BCgKD9PghfbiF5iMwQcgv3c1H2KEd6PUp7G8CqQxTRzGqSPJ82HnAzqKF",
  "key11": "3dH9zpVgEbWaXa1StdeXJDHP4CQTk2nhGzNdGoSzL1UhsrA5ozbxSLrbeZV5A4U51q4JrXakAAQzxgrvDDkUrsqo",
  "key12": "iFSHtGnUySKZr6VmzECgeCtuXpr5JRvu2tQkyfV6f9cjegadtPMmaFmbZJ6qnWRPQNDGx2ffMMK5EvRKV6hKN85",
  "key13": "3FkAxuT4sJmpkppp9FaoguLMCXevyBYaiK8VLc1XkXiwDvrJ2SmwAz6agzcGcsexDQd84xv7fjMH1EhEN2nL4vSc",
  "key14": "4nYF75cFqqQ1xpDJ4xiEaysU2JRWxRtiPwCtDeeWCQX98Up9yMvCqCpLd8sQwPJsVcMGVQX6XYtnipoVcGzS1Xg6",
  "key15": "49CqExF1navVeKeAXvG5BDU4SDz8feFTRwc9WhW4xVXYmgDqWcVbiaLy4V8Gkpxr3xRpANQHPodAh2j5pyMdLXxu",
  "key16": "2PxFPEJY3DxzJFaAy8SXkYSrpH1JmNPag6UQw5bbjAnhpwRwstQUYi4mE3NKbeupKZ2oh2asFYif2zsQhzfekq4",
  "key17": "2SJESrr8TvSWAvXGfPwgEZDLQZcdPuUi2RsLAP9KBWbFapaYN8NAiuZd6knXbFa3DabXxU8TqDr6ddBD9i1R6ASU",
  "key18": "2zeG5o7eAo691rY9rsLToNc68q9eAua1WSahC8sy28nz3cAaPzwXr1ZTBB4vgMbpKHmBw7qENJ3RRW5ntQ1zuVBy",
  "key19": "tYKyerx3VEFQKsiK1mKc1LEBhtjtbCgZiFfkq8YjF4MmdQ9dRKCpUdRJ34px2yDcDQ3XiUbekNFbnxhg68jF7Mp",
  "key20": "4WuBCCiRRQH8f8NoxSVdhNSUs6SxHWQY1pyg5zi4nUktTFqDacJ3HBwiPpJit4n5a7gY838wP68GxaDWU4m2FAoG",
  "key21": "4z8xWxxR8FYJRworbvQ4jeGU28nRHZz3Bq1JCUFaCLbCKePZN1N2FEvPHkzyBCcFuq2t5GQYFkE3YXeYEf7yuoC7",
  "key22": "64HPcgGXShKHk2P7A71q6ERyywwaZVpBSLtbfxF8QU6sJp1NLbgtTyHFKdsmJ5NNeLgth1nxoqdsW2TVEcZ3ggwz",
  "key23": "3sEHzUZ8VQJZGjCyDLesHk1EuoTXcQYL8bhPofp8xqQtTo8HRC8LKTfrNp1F4T7GVMxPGHhyhCEKsMa5pDkH2Tdm",
  "key24": "23bJu7GZihbRa5ZaadP3WGKFP3mb1AKCeBNjR2Fm4Tb3ajDJzFTCza2A3HajazKkKrSFvqFRFSySZQWDVLpRz33S",
  "key25": "5RSjKhYiJg2NnH215UhqcqtNSGqLWbgmBS3QCEb8JmqEz8MZYcwp6GR8DE2mDfM1omeXq6KigBxM7fLWdGKsq4o9",
  "key26": "2nui4YsGRVq6iRyQVWSJcU6wxkXYZZd8WeZh7kgN5kDHSiLgMRy5MPRBPhL4sMknp5oDGApa93gZAd8nbKvcm2Vx",
  "key27": "4M3XxRTqTeWFk53bbR7qZpw5ExJ1zToiz9ADAu44YRZcf3krV6AhAMQyc1wa8gPYjWGdgLePz4Ngi7zF7hToWKw8",
  "key28": "uXKccCgZXX4Dz6Xd1t1K4PLjrqkvnge8CZpfGBs7pTVspqBUiFPMc1zWstJ8LNZHfkUorae8yyCZCiSQnfA3i9G",
  "key29": "3MH1DNBuEuHjDUdyQZeK7EneqaZzLRhNEKXmpML2wQovkcSVyhAxkvUumWuvdoMSNBFBQZnLLuL1n9FiLxPD73Af",
  "key30": "5rw6Z8c7iARDyLpn7TP7uTutjmUsxsXrgMFyVV59oQy9xg5DxmFzhoykpycUfCrSeWPexMHHjnd1v998EemFYZeB",
  "key31": "342gsPD3boo6eWkGCsHfDnQMYEcBGy7bfzM4icuCU4jChzhnCKs1nUQ3uWZNWNQi9YfyPVnzru1eG4FiyiSsq7FP",
  "key32": "2vXZgighqCtR5PFd24GTDhUfzWw4SA1u5J9zr2FAVbTYRNGy1b2b5XUrBRY8oiABC4NADUHn4aHr58fmFQcAHHos",
  "key33": "3pD2FUjrrpHHKYr8StxkheJvkTnrdLgYEre33mWR71FB4Avk6SVa6Ja74ugiY4DKLdXuLPAAaNLB9cTnrLL35JB8",
  "key34": "4N1TzeGBFh5SXDihTn3Ats1n61Ey7kREs5VnpvUDXuZdmL2LhBqadw1GwtgwYur9Xmk6TMWz4LowMf1fX4NaTVes",
  "key35": "2Uk1Hxs35kAxSdRkjj7Nrq9oQdmPbL6YM9JZ3yiyX719KsTeRt4qC16S3rLvjzJoUZyxQvc1aMiixKwJqJWwyftT",
  "key36": "5oZvMY8xW9sUhtV4pYAqGcBJ3UNCXRNBCrRHwYeQmiNtxLL4VM8pwEenJCzhJBh96kMZE4gwMUWQoYvB354xeHUT",
  "key37": "4mnmbfQohHs9onkW74pJ62qh2oS5SRKbGxAo9yvySznJQh1TJnn4yr9SSjuiGK7nXCff4AitQEJMxuENihXN8M7G",
  "key38": "3uH69GYLYxJde6Q47piCueMxGaTMF4cbE1t8JKxiMFCTyuLREZ9GjVzgvy5ciHMb4E7QSvx7ZBqNYsZdrjhXfmsD",
  "key39": "4cvWc8UohJWU87yn5z7ce7TAY7ycDQaeU9oQoUF3hJW2yGSAWiHPPF9CCdG3DEjcb16UsySGAGN3QvNobCQvLF53",
  "key40": "5Z4QG1DsakWHKAfN1mymh8ufybQxEiJ9KKHoEuFdBQM3shexTTxYJDSPZ2y6CZGxMRB6ozGhZMWstbH6voJqPDxg"
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
