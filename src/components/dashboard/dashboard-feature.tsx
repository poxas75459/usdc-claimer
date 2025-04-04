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
    "3FWSmgfKLu3m22nGemprg4idCuDBaZxD6LQxK6tV1HKN4kBw4yXw2mYnen9KMVcfbJqcdW3PYVci8W3x7H7Meg9z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XC1DGuyhLswCvsyCLNwJ1ZrP6KfpiQ8qcfXLHodyyUejtQwb91ggVpCay6CkkfU82BQXfKjdVaqfG9Rg9B1VeGU",
  "key1": "2KnT4QnWqcX3cxeemidadgZJ7rFir5gj4wkJFmswVna2hS78XWpuveotAxgjVnApcAKUAnShhDzAmYzmXRBnsS5Y",
  "key2": "4KaC6bsBfjTtqckuFmL3NusfvacVj8yAa24mvrmFj81TZrB67HEav5dM6qpzaFb4NXRLxHLPsQC3t1gR3Ct3KNQi",
  "key3": "4JM9tpT4MxEfMb1PVPhvpkg2o1ExLwg3qgEp1cUd3nXXvCb9racGDxQeJZfZDCNJRoeBqbz1a9LRwksLFg6Dcmjo",
  "key4": "2yFp4vHMwNogvkrrjn1NLkGNzcR31Ag5unrNmJhNT3zMHByHUQTpbd5PxjaJoYG9f54JVY1V9bT2R212dzUJ3vog",
  "key5": "2vYAtmR3TrVPdAnUbJTnu9yWuyPRzb6k1MGdzBhrXJGTCJghzhVxbT1khkH8ayfjeRyeAFyPRQpW7tpwt1YwPCwU",
  "key6": "U4wuWGxyeTKdKTpXPpoQiRjHgtsCDr3sMGCmyFt7ZQvhC9Vusd1kN9FzBcvcDaoHqZfNikXrRkZh9GtvPtJcyPK",
  "key7": "3gXBQpad8TenyuJD92LMwsRzxSCYqJrGe8eZzwT6Zo3TZizNJ1wQaWvAPLG4wq4wX8FHEjSRMUxhGNAFYCKvf6q9",
  "key8": "28UkGugwT8n1FvyRB45HgN3pjtB9cHL2oCCD9yRgQcEeGKRdhErsnDAH5wjfaHiuKScLZrT8KTJi7Wwybq5yvSRN",
  "key9": "5vae2S3dNDTDwyaX8E1RGwPxgYQdpZsHQjocWknRUQfDrsbZrBByMHYuceU3PdMNYznHhfpjmn9QYkSZkoj15Nff",
  "key10": "4nuJVHoe17nowz8DwrXvWAkYSihnPULPZfxqP1wYbQKewPsC1jqHRRcZiD1N8tf3No3dDSatpGfKmBqZjEWUS5CV",
  "key11": "46VuoqhQVV7W79TDUj2D8SVdf9DGZ4Yy4NyQecUv3AftDgz5tNkjVWb1448VgiCNtQAy92WFiPfDwgiKUzdpCSp9",
  "key12": "26smjYhASdezxavUTGazADivL63i3ns3JdHiw5ST8RPH8Wfyb28t9ubrbZGtHbG29UwZTdTeJ3qNTiQXQy8yWTRM",
  "key13": "mU1KEuWK8a3F6jd9Ay5JHAwFPfAqtht1BVB88fge18NLrqHADPaCUZzU6LGceGxhKLy6WeYzBqehiXnHhM3s4Pz",
  "key14": "2hzw4SyQfiVoXxiwNivU2hXdv3rkFRxefoq2akNNP3JhCnh8vSi2yLgyk8kvPoogakEAUnSHyrQsQbsdJYYYUD5z",
  "key15": "4ok3kNTU6nohdGvFATEPSSJwdrqbjaPuB49PLDeWNZ77grMxJu7DPJh23JaU5k55Pg4ZLtQt4dmX4QSWKobk97WK",
  "key16": "3BZVkoe4461MmSpYrVd8CwVs8brR17sUnEZfbuyLwgcJF6TL8fBKH235ZQY7zhMHHb63pqE11yJpaFQTSJtZzniQ",
  "key17": "4i77ipMJDuj1GcZd6GJr2c4ghG1Csuu4sdCVL86e6YRN3irUmm8DESmqx4ZN68vaSrXyuQAZmeAUqTJ1KQtVpkb2",
  "key18": "59ubtSVJuXe9uZTLVYwjvZaDYTs2ajxUcy6taZfoxzYevsNfhUJigZexpz67eB4oAx3yd412cgyL16cZF2JTgMAv",
  "key19": "4kmAFRjTPdHon5TnPEGXGX6cQfqa1erv9Xvf2yqRRAYeXNi8VaEy5heuskz6ws2xJ1FNYNPuJmdPHZWGXzu7Rasp",
  "key20": "zghg35xX3CjvoJtmoXemYvC9J5aHYjRGHyqayti6MZYhKvYHfgr8yrPEgvwqZpnSRbURP8tf2XjNcXnVPT6PhsE",
  "key21": "3Kup3pJJamd3KUS3zLJAiVMJfvsYMok4YVRwFVrnLVGkrK5Vs32Loa5vFWhnzqwFKNEQXFsRHoVCKdymQwHCq4Mi",
  "key22": "4du8edKFbo4xNVo5tAG4WeVXmMN63JXnAkdrenuoC8sDB2gSKJUZ75UnQoChgzJM4T28w4DFeQr6U9yMxNRBV2oU",
  "key23": "bH3MnT4hyjqE25zrfH8GXzuKdPQCfQ1Y4JnutcxXsZp5xJ1V8XW8Z4x5RdNdQzqoogHAAsn8QAJWJrLPpn7u8nh",
  "key24": "5zcaF8gCKu1pGJD2WXRRnSYnHjhau3QqMMT9DX385AZjs24iPfiEeZSm7NrFo2KKCQiA7gV8Tz7RASkV5By5SSB4",
  "key25": "4LVmQVCNWLVcsReY8n93pP8kzHJWSbFb19QcShofFNCjAUAo9uPQn2TU5BvxNjwzdkvZH3gQbeQzAu3FUA8zRXvn",
  "key26": "4wk1SLEmcqMtoMxfsJXsfn1qmX4MWdsbAchCqq7Yd5eSA4H9ueQeMxM8Mz8QAtYqk3yPiSB7ectNQnViQcQFdPQx",
  "key27": "y8sybWnNuEejagh8NvPmLmKs7dGiGDcBmsinNpkeGmS89pZG5kwyfevZRgA7EySbv1xme7P3sZmuNz1ZW8sotZy",
  "key28": "2FgBBFhx7oZTyhLKGjVkVbJN8885PjN6t51mQtDcXNq7SwuswAjdJ7qUM13EftUkvZpMdZEamqw27rjWScoSj9oh",
  "key29": "3cZN3xSxLf3JfEbKobaoYt5oqkwWBMeFgDG6XicsD1F5G7BrMTnjM7hAo6zC1yq8u8ReKz3Tup2QqQfU4kEyepwZ",
  "key30": "HS2sM8RuzmUx48YCZK8SvpRGQhEcw9xv7qTput3ihpwceLDN56tPABm8nB8A4sA7FdKf2HCpWrxj4Feog4bYwyo",
  "key31": "3Nsab9Jg8LqTBETLzppPPZ7P6L712vRGgzwK6sC8z4o6Wh8xkWShGtrMQoUX3uYX42QLytUgQQGfk3Q2FPbYZqpi",
  "key32": "3zxCPpw5tYNgu9cDtK1T7pkeQGjWMMf58u9ubPfHpgWEACtWg7Lks2ZY9qk66URi6Dj1MNgz4eumv5QkcJmrzkwp",
  "key33": "48dweWC9Yk19qkZao3aiLU4dPQkkgV8ukJ9LNRKtztEQF9dpbVt51cBU7YaQ4HPL6QdNujhJEj4eK4aSRyVS84g6",
  "key34": "ar7jATRqzGWmhcg1sHrFHiw8uj4uwVXcbNXCUHan1KohKU1LrTQSFQmSWSKqCZo6iiAcZtPseNq4xxsXCFscApK",
  "key35": "2mjCBquxM4BJ2cz3YHou1Pa3hTeYrL77chj7gFjYWPrEc5BXjnktUBZcNDSUyPBqen4p238xu9LCJMd7p5xxhMQw",
  "key36": "4CGnBaEZ8LLPLG4TDgqKjUWSnZC2m8FesMj4kaKzDYwBETmP5czmAqEVHQFjhALaKbtb4HYXyH3m1bYMmuaQbnJf",
  "key37": "3Lw3nxWqH2VKvBkCMCSy7YRWZH47gnFvY4kdEWKVAeeCKgqVpXZbCPJZak9DkRPn46vJXWwKetPf7uAExUeJkCfZ",
  "key38": "4jg5T8YgitnTbpYZkthbH5zjMSEzjVxYkLF8rYDFXK25EmnDcVBEKfYbaxgQgcANVwsQr2FU2FTjJWZWPdCatto9",
  "key39": "42eHwEcJr66AQFrubrj4DdsxjESjB5iFVkwzUdxLJ3FtRH1J4KnYpJQdZ6gDjG3XWxaTKG9Zp7VxGZn71zzqy6Fc",
  "key40": "32KJQbitovajGaefGNtiZ5aPCyJhRfx2XU2RV5ExSUh2nzraPeSKhRyQGUmGjG27ZfuamGjKN9U44AFxjtw3JimJ",
  "key41": "34WSFMMjLir2HooCzGASrwqDDyPCyiGhnqQEZPJtDy1rprL3szrqBN1mxSBMWjw3LyLEdJxXwVhiGLi1wDoeM72L",
  "key42": "5NFUJH5bMLBEqjGi4GPJJKhVQq4HJWQ4KN46xRvmqyhUbAMdduUicj3dXwQ7GZe2ruuXnaCqEiyv1Ezirk9K2dhL",
  "key43": "LzcXWFvoRaXrwwxe8424D3j9CQu7cjKR3K5uXw75jvWmTGeQwNpcFzHz9Hgu2mBDkEn3fmabELUtvPHuJnWp2TA"
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
