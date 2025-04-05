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
    "5RRdzDsyANgcUefb4mVYkHjQDeJ9YaZWuT9QJAyp5RWT6b9B6WK87k7pZboTWkseHyDJRc5CbMMoLudKxvHgVxtF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mWsqTDT1mrCe5dkHvoVGFCzBmeac9VXrd3s9VuvYL78JRncfPDD3D8p9phKxt36gPtAvu5NS6yiffxnSLYm7zsH",
  "key1": "55BAQNn2RcrZ8J65teRzZwmK2Cuuj1Y474qnp2BVjmF9Zi7Noab7eRrBjCJyYxZwCbTLNywL1SGrrVGLqTbtZV9r",
  "key2": "5pDDBWgr7HcgFQRxCeKAZjaFq434SNb9QFRjXjom8t1becVhmHUHmgTUzrYWtRZW2T4kbP5EbKcTE1FhKrE4o2qD",
  "key3": "3Foj1RUvjZAobSTgFkkDoY7vdaUvT562MBnBUQiwXQSKkqYADh7bj9oSgCDp6rXi9nbAJKGN3wDkXQnf2VzAGJVg",
  "key4": "4bVps3aFVNjG1ibUiQXUNGmqwPpvFtJ4XnTHdQiBcXZ2BvwdsDEAuyJrMdyCGJnqaktpPZtuoBUayUqPV9pFZW5s",
  "key5": "5NnDz3sRJwg91dBX4LLjf6U9su2duz2q2x4zkymQdJkZQMAmYCazuqLgCoMLoLpnscDRUWpdBxeX5qKAjjDiTUKY",
  "key6": "5T5LXiHgjhFvnDChHKWixMjmnjtaG7EzziSQh3UKySsu11dLEUZ8XM7D17NKY1XBPrDYLJCNN6TpCjNbkdL3RxiJ",
  "key7": "2whPFGFe5Vg5pVP53kDy8Sq63kfXSAvzLYHTGFr51hRD1Q32y4tUs1ABEAoVNFjZTS8i6M7o8RrUsMdb7C2GWnno",
  "key8": "4Nxymbjrvu4QTRZ2RPdaH8x8RnfqSNspNQTwfXHXpfxAYEfysbkb1Xvrpiz6XD2k3atXNkWuqw8rFwdD9gzmtQvE",
  "key9": "5UVuWzD3BzTzf1jroCFcoraaizKVCrY8ERBHGhwm1HxGM79CPcvH6w1m14b9dTw8w2MaMTMCw3m9s4QuD4NCmw7y",
  "key10": "4FhNX6aM5r9WjktStjQiEHcFw1zGTXRvMFGhNttHKFg7Q1ygtyBcpbNWJ7zoSHCSDyUJ3G68qnf9sHAZzJ2LwWw3",
  "key11": "4mjCNKxm9YAzL7bK3swt8QxSHH79wLhNLLdxMLGWLVEoYdLAXGTBCs12rQa7M99G3BZUyfAD5zjzGUKW4NkSur1u",
  "key12": "mJqWxTxg319Y81JVpD86Wj8sbBrzh7UunCAf9Fq1FxypCXEnchv1w24BnYXXqZ4T2upLcQm1QCC1jxUp4ZNJFpJ",
  "key13": "37xpQYM5qL6wJkxU4hJtceGc4DXRKABqJcBn1orxzF2JiMmCyPoEgX7TaP1eWzXQNAaoHbBbKgvgoKMaZFNmjGTK",
  "key14": "pVnUJ97MVPCD2gkcALFnd9TbF55Sz7LjcqXwwV1pht459hst4FMkAKGc24FQ3Ne66wrEMbVdEor94NnFryu5wkH",
  "key15": "3tqRpKFywktTuPy1xU6wEwFvCaTu3MaSPrLC1j5SUn5ycs1h6bLddqYPd54tF8xFvF3F5y5mk4qgr7inAboBafw1",
  "key16": "5zwEA243Jct2Eg89vVhhFUa4JFSQ6bBkfNAVJrtWfwDrJMP8DNAncUnrt9U2VVmj1byTsoc87NikXLCdvNLQpJvB",
  "key17": "BSVuohxwx5uMVFjFQVJGBnZGngYScmjWMKbc2CzkpsStuW8Ueh9SZCw7xaDWkhmVUUCEyEKUA3NpyN5YrXufj7v",
  "key18": "3t5Tucxv23QTJwNWLCb5e4iQe4Parzu2W98X4ai9Ko7qm4jypLT3o65XxhSXeDUWRBB6jaVkY3egE36ZVvbJ4EQk",
  "key19": "2N2WYFCvjrj2x7ikPyHLKwF9y3MoyxmreCwtz5f1UTPzmyucGL1NSxU7oTadcfUD3wKKNcwb6Gp9YLqyEqueHsbT",
  "key20": "2PHJq68EXiSaArpfdqbXfRe9pXzWmyTqBnX53Zj5jRAELqMxFno97ghqmQuAbu4U99KpnbuMYzTM1JHVxK4NNyhu",
  "key21": "4KsMunqftBTpPXDZRXdU7KiXftHDJndfcoL8bTn7ZMvgQ4s6HhsVt4ttuftiur8tKaaVQZ7innNTgPCKphqfrBcK",
  "key22": "3WTxo3z7uBLekuJzFnukmP4nQAc66RTDiMyRaAqYkz118F72hCJrzGYhd3mXdEX1uRdfau8PizWdAFDuBtYj7iyU",
  "key23": "2HhooUYkacGE4SfoTLJSMCnybjYwCvvg3SybWg6Ye9pjBcDEnduNMi2b4S1cE42xB1x8gqEonDfaN6DsSvgnLjRz",
  "key24": "24qcKAoRG7LpKRkHgXNHYxZb6FTQALnY6QHtzWdqNjsoCZk5AmdJr7pwtpkUwd8p5YVrWsETZ3j35pZf2WNWBP8x",
  "key25": "4CRrs5aGSFjXzDkNr7q5RGviBNb8rTm21C6yPZ4SoaJWjRM4uE4yV5VFB5wkEijWbpdNqA75z923eHKhf7zSCvVg",
  "key26": "57Znf1mDQomQ1zhqWeSY1syFbyJ6iZxftBnkrh8w5mo7axTxigtL53Ejj8hL34AKD1yM8q9uE7ytjWkEHcj1MeR5",
  "key27": "55CvG9wy5c1wqbptLM7TM5Ht8vbmmGriJoBj8cNXLf7AeqBYRgTadgkdUHLwiM6yHbRakPrZdzEiQiDHTeTpQRGf",
  "key28": "4AUUdpp5SBCg1MN2mYaggpLu3KCu6SC7NcZa65MVKE5Fc9xiGEEdRiFA7gWB3yNE6DxxD45DYB14pbxKdqGhfHkA",
  "key29": "24wFrkoUKBSoq2bL7MvPnSPxFUCLyggCJopCs9ZKBsJ5n3AEg2kBkib8KTvTapZdMaMiJr4ZCA2Tm2fyZZnGLr7F",
  "key30": "2EpsjtPMxpWfWhzDvquMBrRaKH2p7UxoJ35hymf2759LDbaEfoLsedz1dSBBbhcWw7AQ5quQaWH6ZJcGDbJhKHzS",
  "key31": "UjRUeT5QPz2ZCZEEKqAwnLbp2oakB9qcKghXZGmcMR35UTkQMy8j7WW4i16vDcbeBgsA7odXmum9nKyVVmAr98c",
  "key32": "2y17o4SnmzMqJUw7L1pTEQ2sR3UmvCnEfuwkgFsXYYSxqAKGMXbPredRy4fnawo8BTtaHwSveULf8ME7J6Bpa5tT",
  "key33": "SdKwy8Jk7oWqqNZSaspa1Yfhk64uqkQ1D6xogRSU6fCMJce7X4Hojr8EX1QFijuXNMcHV1EPsnAutZxyvBfh77v",
  "key34": "3zXjroa6B32EoLi6UHrM7FwUbYf5iSaqjKf4ovHVtEeFuDB1ZDbPTgzH2YsjdJpeXZb3UZAbHQsLRiw8xpWrySe6",
  "key35": "KP5a4Yq7D7LCcPFPGHJQZpLUySaNcVWcnjjp2rZq9crbBA6m1KghLacRj1UikQvJRx4WiigYzSjsxk54VRvb9QB",
  "key36": "3iAokKgrfr7RkJ6KnBti6xps8WqTUwZABYHGYxNnXRWKEfuHTZ2iY7j3VoDZzVSk4JyzNPdzqcDbw3ZcuRgGzAqy",
  "key37": "4sHHab2BBTHqTxLXN9WJdAmMxvwqJJYbq61zcX16EEQgK1pYtE7zx28XSwPomgpSRnxnkCzr2AzGLDJKEkXHJX2E",
  "key38": "4KuexjP25wB8KTSBf34rNAn3P5zoSPLzYD8XwAypKerHDFF7u9h5tNCAzTzAEEns1jd8NYHQm8rxfzSVxL8hUTd8",
  "key39": "47UZs1Zz31RVqsm1ZTG7SdTtRc64vpP2qBzcQG6FaJssDdCGzc5Fbb5fUWQNLrfxhS2bj14TQxybb9WhmonyrKWt",
  "key40": "54yzqqiDQNaBXfzL1sDMQuomsygxUJUwk1bjUpqUqCkGAoRtEr3ttaaAr61sY6WtQSpNcWE5okSc6jw37gwykzAg",
  "key41": "5bkeodZf7pjkTQTyFoZNiQ41QJkU2KgVWWGfoAPu2pj7bAQhCNin8JxgheP1L7fQXeXKNE9HWgGUqRMxyNH94V6r",
  "key42": "FdbhZqdvnj1hNc27i9YqV5Hd6symPe9AWKKLTXHYYrBX8AsEWqWD8CBzVJ99gG4KoaFpN28aVTR9ie1dhp4nPQZ"
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
