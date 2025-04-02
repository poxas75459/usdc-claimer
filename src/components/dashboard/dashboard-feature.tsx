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
    "5Sd9RaUzhpodT9ZaccxEYoW45VLjuyiiLfcyZYUFxvBE991BtJPjuHk6pRNBG9fL27s8Y5qMWijHuvGDRMEEvR2X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31Vmfjvq9GYAtXZL2iYAmRx2Dczb4wj4rsEHy499jRrqrJhwHGx6fqPn8q4TzGNehbh6rA4WBHw4g1L8uFwtzpDP",
  "key1": "YtHZpbdy9wYZYXEtYkzREcSHMBSSuvvZ9uR7j17WWLM3KPx7xV7fmS3Y6GeHhMNkVeC1qoTX2Yb9B6aS3BzyFko",
  "key2": "4s4grbNBJw3MKkLxdBssTatwACSz48MXS1we1hutqcyK1skrd8Lt9eahNSm6ZaWjggYQSCPBej97MTkv5Jj5UmwU",
  "key3": "3NBA3YtUCiT4bvzsrb4H72rskswxJVMXCyyq1ZY93ESa7SyoqtDJosPrMjHxGtA3ZLKbzcK2WiAUXfYMiKe3PTMD",
  "key4": "a8TMguJBMdxuNE83QabF4XLTEVJzqNm2L7rmhWdgnTTMsu7sxxyrQhk3CAVqeGQTZKiQCVyi2BAgocXVfL5AkDJ",
  "key5": "2428zpFxo26DHH7gc82gkTwa9t9SNcA7jg1Hk4KHiJCTS1qLp36nQQ2niy5oQbFGwWec3saznVeaQCrcHMPwC8Ff",
  "key6": "2hfGN7YXgrr7uecPzkn3Mctd5qpCJeD6eChSvyrQmTK1YmADpE12wgAA72r5nTJ8b4B39i8TWjhiojUeo1VqGAzH",
  "key7": "3KUrnaxKLFrn7njPHb8TmdoDtW367xfZquEvqiu1KvJQfyWMW5BSGmdoeS36pJ17xthmt8NZN7Lh12oxSZYn16aW",
  "key8": "hectRrEC9vuPQcYsdgJhdBPwZs66gCYmaLHhSbZPFHpSJEN6VzghB2UwQsqY3CcV1CvtpCD2gC793xU2AZpeW8y",
  "key9": "4qxPqLCscJkxPBFpWQB4kMXWbCMUGLdoExwudevSBkXiT8YotQFiPDsGGpuYxoWBde8AkCxAm3TXmSyFUJP8AVY1",
  "key10": "3eGPYyLMYsBk9vMkqWdckie1d6DyocecS4Fc6iB49aURnCcGR4fc23iKuhtMwQDY8bPwWHb7fbQmiiGkA8eJjq4H",
  "key11": "3R1vFTABguVPKz3ZStSUehRRBQu71nq2XocMEwT1zbYVuU4xdY5MfRbSg9YmXEdgcDP5HALLQoqTjct542YHLH1q",
  "key12": "63bKgLQFCYd21Py6UScPVGLRQAoBAuavkWX99rGVGiEAXjdf1ZXtMcsPRKzgkBi3NWmARiALL9vKMv4mo7H3hnHh",
  "key13": "8CaovAVccJAWwufuVjQRXiRXggSabQuXfjPg9BGRThWtnwvFguKpWGmWzz8UyZhd9iBZdLpXnr9aMMZKvFiYH31",
  "key14": "4uEGKmyLgJ7w9DTWRJrgzwKtqiq4nWZte95chwDvF6CuL5J6Sj738WJCivLymbzhLVMRTr5MenaxZJVMi1jUDaZ9",
  "key15": "38ZhbwwhjeWfrbRXaHmKNT7m55atfXuonS35MFE2zEQNtirgTWLzM6BAwDxToFPyhRTgejA4U1h4joRFvkWptNrb",
  "key16": "5MzCCeRgBnf3TbHY22PKoMjW3SrAKvvVswUeiiQ6WP3gDKTiYwk4Brj7CQvW8ZYLFLiSatpq5siNY1b96bYLoUoF",
  "key17": "4Dx9yx43iTjEbXYJSyN6YcaPfcn1t1vytPiEWdWgdsYBdpvgZhgbhwYAfbeTgEErrUtFAjnT8sNsdZ79xB4HKQrk",
  "key18": "N5mhWN1PtzGPFfb6vyLhoYGeN47xJY2if2XDvRkKHP2gpefr4WagaEcVxqLB4z5mefv5HQUzzdttrETnSsGKL7n",
  "key19": "4JtDBEsRDMx4sC1WvrmpzFSL2eNbeKULMbPk8hyr9FPBxf4gkQ4wJTcg8Ud8NTvW6TpAwvKveSZafwv8MQ9jKuRr",
  "key20": "3759pY2hwdXJpnjJveAw1Ki2qsXf6L1jB1d5hb9Ko4YZchUVCHqgA65q4KAKKtgGsK6a6r5EZRYxUXY8Ni98VZjS",
  "key21": "3ScwC7c4gFY39SM2cxz3TamZ2Qjm8VPvi5CPAunyR5wb8MecMXru79ooQB5MyHntmdyk9TeZ17dP9Qg3yDkmsAJk",
  "key22": "27kanTUBkd5B2YLmC9N9saYUg3EhAqMFAQu6veDGaVYcXFUN5CJcgdLhHjY5wnK93xFtw6cB8PHdWipjeKd953HB",
  "key23": "2RstZ2vxacnSV8V3qfpWtpf9zg3Yus9xfsyCusVzq3E4qN2BT7936JCf7xo5iVbAMi4FpCP9e814Yb9THdnwifXp",
  "key24": "5RYd89EX7CgUtPJGJ6kAAHJ2uReYZ8VAWV4cVC7mqTZYgr7NK9GGFwBpbqfamigJiNLcYTdeydmZ6BrgQn32YUpW",
  "key25": "4vxhCjAsWpfP6EsUa6vN6GFRW7BHLe5H2d5AviD6KtcBjiv9rEbubzbXS7vAA7GNpvwsP77s92K4d8ATfzUQuJhv",
  "key26": "3ooRcqXfhHmg5SmBCap5ySL46PeCoW3AgjiwhmjjnFegckysYM2ybjiqFfZhCbHppCEUv23j19JWieomL1mrFKQb",
  "key27": "48n1DrkWd4LsLCK83HzXX4Z8jqCEZzwRe2WA16y9KZjeaihkmLax77AkuDmuhnQpK8gCgLXnQibomxuVhTbQZWD9",
  "key28": "4dmUgnfae474uq3pezWnjtsB6RrnxvqFPj9g9Bb6cH1kTzCbbmSNwjMso54cqGHQpYHXCwcJXZ5CZAdVvDWSVpBG",
  "key29": "3gT6R4g5nBh2zSjPKzbGzcERbTgvAq3GrhuEVWg73LpTLmxqxU6qYjSUr1HcQ79e82cMBGif6L4Uqd3cUnRKToMX",
  "key30": "52fai675ru9YE9kDTWrVy4B9dU5EzRRRhV4o8XtCm2JbTDK2BTU9mkoE2FuzEreuWqp95gaxuq5RfHuLMFKWcHDA",
  "key31": "65fQGzDYH3aFFKkP5Y34L9c5SSR6nWjrx29Z9S3uJK5DirZx1piEYp6pVMhfu2AJQHKpFJhNUDmPZuH97DVn1nR7",
  "key32": "5bTsPfcai53ffzH5LsWmfXjwcws2ohnGzWCVmsRF721d2enYj2NVaCs5uXsJeHRthr4EMZTxKn3KD1Ge2TuKcRRL",
  "key33": "4Lw5cJXpSjEmxyGJNe1ykYdtqYE12AGqC369GpxZw5zrKo3qJ84aXVWmGsWTDrgPh2XwygvTEq4R98YLdqMXr8bh"
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
