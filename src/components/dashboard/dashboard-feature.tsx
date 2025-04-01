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
    "cy1ZZpobNiBHRNJi2nVCARq5KhNJzfe9txysHRE14WtYTW9gC6CBnhqQy9SkFbKYZ6nctTriPHM8M3MXP98g5zh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pQC7hBrg2913UWyCELq3dYZ9tjE5gJMWJYdq3TVjaBi9fHqXnEGcr5Ghurv8yRy45NQCtLWSjrvkXVYVxkBAVpF",
  "key1": "UPmmRTB44TUewMbPcxGUUpTg7QF27iPzEJqFHcwj4D2xzLpzpEtYiBDgYUpMaUYy3wsYbYud2VDBZAag6z3UgQg",
  "key2": "2VsYgSnHQB6ChQXYphUZ9B18X2ZK8n89UkEGa3bfZoaU2xQtwZ2eWXc15NB9Rf34Nt5jg3jtHUWMA9cWJ8E7YNLV",
  "key3": "65sX28kUpPKd5T4wg3mif7q67M76asq6FUMZaYScSogGziL9RL55PPCNPXj8nLqUAHkLPY4vys343DvC93GfL8vD",
  "key4": "2BX7XBSV26e1LLV5xQQNAZLGSjq7y7pfvfYRcqHTKLtbJpA9bCm2fyWHMm2K6CkQDTPnanecnq4N1x8KqtmvqJFJ",
  "key5": "31TYySmX9DbHDApeampBVjgLiCxBPwyxvXHLsyny5NmGnBvHd9MZpWGzHYUoVfX66VcJfB7qiZVjDE3jT8Eo5zpQ",
  "key6": "5Pa4E4nQYhHT8kyvsviaeDvnRrGo6GCdg8P9a3hcT11ZNGwehrWvNLkme96RMb8b7YHjgX5mEFkn6k9MVChKQccZ",
  "key7": "gV6KaKghnYCvzABHUZ2USJa7kDHvc2U7TYjvUpHZfac5jo5crBv4vZZSzdMNHNkfoAvo5uPT8k8gbgBY7QUmUtT",
  "key8": "3swLQWXknogQkwwt2zyqcDazKZgzczNf9wvGHVtbrrLQ6JvZNR7SwndvBiBaPmmBvZghXStD3bpVq2se5yimFzCH",
  "key9": "5b5D6TppoyyCkKvnG7jTggfj5ahkMg1WCQA7xbpE4mH4snxQ3rHywmsL1P4DzwbWxuxwMhB2r7HF5mwqTHBH1uDT",
  "key10": "5NH1KSyfVxqrXuWHXqVW4c5L14TNoqdnarSq5ekLyqvcVwgNfD1Jk8jtydN3YBnAQf8rjyKBtY93aXZFLHFofw7r",
  "key11": "2LtdUgUAZJZQU6W2WN5EEj6gMe4cweNQrraLd6NU4LgyH125xcLCZVqpnTZKcVd4YDad1rdwsdsJpdD7bmsyQAhs",
  "key12": "5GC4sfUh6RTCuNdQXt8euv1ibf9mR9HTA3Kqw92m69RfwNGb5S3aj6BiMGRoUZ3RUAaRuTTGvitWnQBqgt6A17MK",
  "key13": "4qkUaR8yLLnE6HmRYWRsGjeHP5VMUVSdGdZ6jPwPX2KHDhJsH7kQ25ZHp9cw9xkyptcSqvWJBqZ7Nb7smrGWDfmn",
  "key14": "3TsjGaF6xfeuy6wYbhoKKLHFPWsEqXSE9WtHnAyFRN6YkSyN8XkRQJkGpzhjtKrTbvRxncs2Qb7f2F8aAbSGcmed",
  "key15": "4E21cwCBHQQgGCdQYaZuVV6eKBXrHysZ3fQxXn4F6pYAc8GWgv12nJgApqB7dAhuuAA6B78preeKvbu9LL1AfnnB",
  "key16": "49tgehMQoa7bziwZ4S53XtQa9Z2kNWVoVodFfzeJJNr1U4QVHs4k5gw6N7jW4cSEdzD8P38x5TJ91jSvZEcu5yUf",
  "key17": "4S3FsnxcCk2N8QfrKSzCcspZQ8QBBu8jxkH5cqoqYS9f6hFkaW9UqWWRF8R2X72p6Ue8VN3ZvdKzYMJEghsCaL6q",
  "key18": "45iycFj98oCazJ6WVni1gJsps2UNj63pCtETHs4g2m1waCYCetVco2gbHhjGPb6NuiVCmLjab5mNarKhoLw2CfA3",
  "key19": "pN3rDe5KEcSmw5Ey8qfZKfNANpZ6n6Fc8ocLNJvJt99E6gDKzFQ1TVBEmchR6P6vu2NDhs6DsRwz77pNnDjpd4x",
  "key20": "47teeHbG51R8d9EdSf35MitxwB9Yaa5hzFAWsjhDvM5VCzpJLLbtAxeK7rqWrE5hFdfyjuNbmoFS14HEHC1jYhNK",
  "key21": "1jMX3pK8oAvyzCwfyxywrkuA9hBUqbNyAoTGALj2oFWjEtaDtNJnkXEHaxHQaZp9HRA1Amdw7DXa1vkEaKXcvgf",
  "key22": "45JYfdGRe22R4wS5F6PtEGm1gSEyAwZjKqR9i2SrfDQXV8miKNyfcazmR1KnNmD7c7rv1m34KoP3xxwVtff2zi8V",
  "key23": "XDGwgHZoExEFN5m4mh781tY3hMs6xPXGA3NU1j4r2eeii5aFSpUH6tAevawNEV9taA7UcYwp2fi8t1N7Xw5DbaL",
  "key24": "27gnEa1XJG2Lyn5Y1uC7SF8XKRthSX9hdzV1RKhWdt1pLio4u2K9ChCgP7tTcfXe3Nz2WH2G6fYSfhyibunMdEMz",
  "key25": "3ZTB85yxbFFYAXdn2amUVfJSrAbefWTQfKuZYK1H9vJZo9kc8AShEKGHSbWgWqjnP4uEfmJytYRiB58oSqoEvQfh",
  "key26": "48TiysQZMo3BwXjiRGNpZM4xj5o8wHhBW5zB1JcAXbHs5ReWTBpPXDF5zRo1TcDUZSRX78foLnQcBqqzr3bkFqbJ",
  "key27": "5mePuuoyxTuEXNUT1mAQ1WmqiFE6k67RJrcJBWBJpE8QbodXvDi5X1zTxpn4Srt3WgnEQYnoXNj4HtSAXbJQsRnw",
  "key28": "5ofGQMeo84opyxa8oS5pjDqPsjmQU3Xv71Dosp56bJqGEbH7r25sjbkcGhkzaXvDMUoMPwN3WuW8ifavDSHepdux",
  "key29": "Kj9RnLHvriUfQE6HrpBCsDfq5BfHbFMHE264aVFzfaLu9qWwy1xHgUmYc8UXsvKU7jsdHFEnNisC39YmrjjnEhH",
  "key30": "5Vzk99YrTndoD6cfKCqSdhRqV8TrNeMjbTHFntat7H6sF1XN9rMavjNQsitv9vqPSASvkyi5uN3WFErP574UEXqg",
  "key31": "tUQtKxwd6UN4YF1KfTeVk979t8FTPBtxcdfNdQ98GM1698wSRbptLn2HT4PLBijnPJGL94d9APaG4ZAeDw9zXtJ",
  "key32": "3NWEGdBNP7ogNt5kPBPvZpieRJ2bcBAX77dvGLCRMqAS4HKSzz32g3TpDcm9rKVwZG65MrYioUb77Nyb95RjC8aS",
  "key33": "2cGydbVzPdobEE9xWxftwVWM9uJck1Z7VzjfTXspWGXW8HszpE8NGdCHY6biCUH33TUJLafnyfdz2K5iQNhGE7AY",
  "key34": "2hSexTf4gfyuC2hsKcmuaMT2QnDjaYqPVq83VdrF4ZVsqkG9d1h7AZFdSVmDctvTzUFG5qfZa3idqjda7XsHLY4y",
  "key35": "2kggMxQChuBhpumSjHKmTKUDhqPg7JRHiqPNGeacRY22frWQeM6tBzojegnsBPC16YXzsu2q6gAfKNGqdwtg36Zn",
  "key36": "33MML6zKGgVBtQRNm1bBFRL4nA3Q54TsaFZnTvWYr2mEqxcE8DookALcB8bdNQAxqqazRLuAP3zN37W6q7Xzdg7T",
  "key37": "37MV2RfAW4pKvCFVuoSSvSsBRQyasFB1axxsvttEDeHFwgYdB6iatHjcEuhBmEKMxbDqD1Q5QYEuseFYL5hCZATH",
  "key38": "2dbxMonaQRnUa7QaYymtT6ETVaXW7swqeZDpcnWgUb8ouzMYWz4ACcZUd3AEwsoGh8KDZ1ww27ZtKAixyAoAPXbJ"
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
