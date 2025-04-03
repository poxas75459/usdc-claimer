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
    "3yqntvkwmyzHBoBAsNeK8mfg4yCKvBjQCCPWEGozQanmZdVsFLZLqnJfgQmpgzWBLWwD4nnYH89HigL85jEVUixE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KNVrWzeejepyrGn5RumFJBfXWGiZGR11xXJxotzGPdVjgmtMmxvLTHJvKsHKr8vkrsqmr1oNvUCi39MKpimj7sY",
  "key1": "5KRVBHfq3P87wzMTMz5LwM14sHjvmNcmDBHRE7M3sPUA7xouTQcc5oJaJz5gNqvg7J9AhFXw93thcCe3tRMa1siM",
  "key2": "4iTBr6jVNaNUqi4s2ZnFtzB3EvpyZpyyHD3RcDMyowkeofnkvxYRuiUpsvB2Ajc1SwCiZCL5oecVFiJLdTB4btYh",
  "key3": "33Po4geRukRcopbEnUHNjpgjfMxMn2TMc2Me7nHFaf964gwYNRJAGbE4MmcryGwNAGsEWpdnxpF7aUY6gVHMPC3J",
  "key4": "5NoyrZangW5BjckYCRdAi1J1YMRc7onbk3sZEbVFyGLPQWm6naQNpRVB9ePGWx7DPJQXkE9Xstxrpjor43vFdinm",
  "key5": "5HXHRLRRogqvR35uzHFsgm8QJjZBAbmvpDTjyb5R8SgFZ3mXCqHRMcxFXkDvpUkX1tG9WgBHHBQwwvxk6jB3dY3F",
  "key6": "49jEtaciWnz5oe5rVdpMjUPDvE5voTcBTBiZRZMXzKVzsycX8fSXWnwQKCz4eDmCQ8b4zu9B34N6VadtaAaJdFRk",
  "key7": "3U4FihnTcnJx6smZn376zPPtoiv917tki1jh9h3ezu1ineWGhx5NRG7PrqncbDedYwj9rnbD7MvCLpBDBbhLVGdv",
  "key8": "3HUgq83sEhvkPNtj5zzz5nGAUZt3o1yz5LUwBKRv29mT7zP1MvBwnLsCnSnVLfayJA8XrPbsf7VVeheACy46QxAL",
  "key9": "2EA5om9uKffLcWaKywhjKpTLx4LszNjFBGAmB3U2AH6sNyeejVQ8BWcGWKZfNFVfzfqDfPt9piT9EHAjaxwTvTdj",
  "key10": "2mr9U1y94qdndRVTy4zgukzevJH6WbWSahymkh7ugV5YqkhN19PHQaV29qtqf96mn5pDLoKmy331Zm8grAwFWz9E",
  "key11": "5SEcQefZxPUFpYg5FmBhKDkyzsJ4vVdCMKRmx6S4bYTURWfmJCLVXJqY4zsT1Rc7KCe3ZjdAHnDhBMa46SRzgrLn",
  "key12": "2iz6DPormN1AvaNbYyUjCf6ckSjFV59ipYdUTPqz112spTGFerNBfjXdGRKmModegXn73wJ425bKbGG3b2ptjFrb",
  "key13": "5VV9FWGts72Kf383eX8gh4qy9t5JMdBByYXs7wvbcxHc9Vh1M4cArV9JaPM22ULgkhhc3RzW5Z9EzDXpQ4PDsa4x",
  "key14": "bQJdGw1kuLBEq2KuypgNNh8dMU4DPuBJtgspA7oCUck7Ff6bfoxjYjX6R3JUkHcyeMGTtSfpE4Lqz4qhSDJpUAh",
  "key15": "4kYgDvQPaQqULpGPUW3w44Y5t5tpjm79ap7MbCK6EnAp13PiZWeYRGjag5xm7tm2YGt8fUQcyMe3R5addrfycXvU",
  "key16": "KMBQ1ZdCS3bycLfeaNmyJmrMyxc4iQJbPzMrwLdVQfi6MrHnwdKs9x8xnUh4mv9faiVLCXMiGnxrFkDb8t1QXNL",
  "key17": "3UbgpMFTg8133XrXYJUyyseepiZPkhiejvdiB4dpae6guvpWyawCtNgx1SBDJYssVx3N6oFcJRx1YGs4edbYyh1Q",
  "key18": "CpAcKv9VBDH2Ej3foJmKSERdwekMYd3kvNTfzf71uGg6Knyzpc5LammwqQyfDStPXZk7w3biYaDE5K2mg6okoem",
  "key19": "iK4nUSRxYD6CZa3h1HSBfUQp41TaUzSahipGeaY7Ldw8mbYfvF4Q9NAjw8wAfo765HY4QDEC4ooR9CW3yZWVtoi",
  "key20": "4cdc49Vah1qNhZM2mybo68kpFSPvtJxtDWyd2dwjqxPeqFZ2YuFyULMuudwDv8KLg8m9SwGux2sws29E4Byx8ESP",
  "key21": "3dgZT9vmm6bjmZhC8sp6GNVmuN4u9C5NoJMmS1J1dV6Ny9m1sQSVnrVhq38mTv1da6aXTEgy84ZDFfAzPfzorRmi",
  "key22": "3t52tDZyX4VzNvNH9GEqhRPvo3YN3gZSr1h17eThQFWGxvVuAUwk24AePJFEjaq6ZqvL8QjqmWALNyZADBCHJc5o",
  "key23": "4nmSbSVxrEY1yToSoJk4yXyEoszULkFJi6KoscGXqHuLfdmNe57XDsvCrUeBJdsn9Qm44wQp2PB9YBmoFa6qoRWb",
  "key24": "2XRNSRo7YaJfVBWt9at9jzJoMbtYkvKCzX7pzTv7k26m8Hus6SJBrCK6xP4UxiWoSNvJRTCsSBCC9sDZyWXQu5Pn",
  "key25": "24wGzdRcbe1Syht87ivdFkWyngoySCA5h56SGyP4oN1umyezH2qYLQam6mYwHn9Z8H5gHY9WT1w8hHfHvR2rdRGJ",
  "key26": "5pPodBhxySX7YRmr4QYCVvC7gTn21tdYuK17bNMGsGLkmTVbkqLbDjVNiJAPTeLZuMQ8VjFuBYjtF3c9tgLWxh3g",
  "key27": "4S89323pNqcF1prpJjx936AMD6PPppkMmhzBCTWokmiPvFXjA2tUjxhG1x97rwvSyebiaYKinQ9seJrnUGx1mSdL",
  "key28": "3oUgfKqjZkhay4m9reXqt56dafxfHfeFZ5uwb58e3U9udhKyeHjLNJdSghQs3LYqxxvNSqfAZzF1kpQLN9FBfg8j",
  "key29": "47J535wXrfr8koqeHGPNBEu9mKRbGDRjUcuVb1PNau3Q3UDSp64mgCV19RCjFWfaHDiL2UU7MEfii3mdQJKGQVs4",
  "key30": "5vjziDuCV4tBDzJFP4FsFEVLa5hQPZhpPHvNKpR7PhVsu6Shd2CMquQHd846fNkrR9H7aM8ZpgynVrw79998nE5",
  "key31": "ifQgTAK3ckt9TFW9jPSB5dDRSNp2ZmhbHTkEXzcb8iZUmPZYCxPd9RgUoS2nv8giwxreDvVgtGa8sze8VZQf6Km",
  "key32": "2nLhvHcLSweRfR98Q9RpaDfjxuaveraYtnJHRTzTE66npC9gjZWTbb3PVZAKP2u2GhkdMSisfvRuibMTkcsHnu3W",
  "key33": "vhjk9PCF7CD4xXZykHzmCs3Va4tzTPy8ddnBTqnGmQ66Ck4fM2Zwxfyywf6Rs3cZqyXCnTUWigmMXvt1n7Nd1eN",
  "key34": "5ph51o3NFxaKReBZNnWauytdME7Gq8aVtMnW25K1EGM1RLYT6EB9Ufem2vSwSFsnfV3FTzNt8TcSNMbamGNLqEUQ",
  "key35": "4Vkec4YVVp3veToXnGXr4vozNXqGC9X5E2yMjuu3ii1urM2xCosKqA42NyoJBAokY7mqQBXiYApvR2LPEoxPAa2u",
  "key36": "ekeDAgyX228yK3yL72XcT7SqW1cnTQW4eBKWfhLvdA5kWAqB5CoiwwAmuLCwQc5rRe3nLVUNseDhfiPcJzDiXtG",
  "key37": "3QSJsDjitCX85m85NFNaMT7pdd264cMZVoVkkmZyMQTmdDxM97uUQVxG6zNfHNdZ3kRT6tsWD11rpkqAwLwYe5Fq",
  "key38": "5AG4BYPE7vtWUDC16Mubv2tZu1XuZvQFVD9Mz99hG1ZyKBMkKi7D5sha6hicFtCRx3QmV3wBmEHdh53oPwXAGZGU",
  "key39": "4G3abW1KDu2Hvpoza8gHhRe4HNez1BfwB5z5nDo3JBpWFx2E1C4WFJh4wDPWK68AVWu2JpuqdQqEK1m6nW1bz2Xc"
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
