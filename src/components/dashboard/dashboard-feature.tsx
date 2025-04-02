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
    "9KFHLfPQFYSi1do4ovQy4NsFYWS2wU9nskYnDEFC8CNqLXuhNwBxQfmBANpSPNsqD2eAuHTiTeNPymsBT6MRuH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J14Htn8TSXumwkBsX8oytqSj865xY6Jwkz92Zd2s8vo9QeqSRUvFiTYd4mJBxVwaHaGrhJ1BgRuBQJseyqdteZM",
  "key1": "2UeMgS7GrfJZ6MLX85xvrmfGnj4RTR6RvBPnMskfdHUkmRZ5g4FhsjhAJJj9f2F1rDfwwosLB4fBW9mjgkdGjjBU",
  "key2": "4UpS1kv8AxdboQiMJkYYq7zF3sbpsDApNhna148tvZEVPpwqykCXXVwYCsYtTiLDjw8S5VbKA6j8MqR6o8U1CmGE",
  "key3": "4DVJS1vG2ZupPq7nvM5wF6XMdU31nbgjDK5UoSdvdZjWf9dAysMxVkUGa2wJqA5D3trJgpUkTL1cmPubLDh6mFAy",
  "key4": "2XpUgcz14ae87fGu8jhFXyUvB5rkdeRcCYGrVU82TWnn5DXw84GvSnBufQiwATnrGywAAs3rGG5MuvGbzVUTPusS",
  "key5": "zF8kxf7iatkET11GezVpxqatx8iRSXVfZ5DAV7dXC1NB3gtRrRFF4vg3FunzQptBzArSt5AQT1XjQeXLEKihYH5",
  "key6": "5L17VbdikqZCCcXjgFSwmDLht7JyWSvriYkcJJ4fnjnim7nZ6CaMeL4ubzeSUv7qLS1RUDPGWAJMuqFEH8mTLmz2",
  "key7": "5wK548hYQQWQKCcL9ypDDBYuh7z6LixMNmxoomMyUtcjEXKE3zmNz8t9vGGFqTUfYQ2hiwroFfEBHe7GuphziQKg",
  "key8": "47h9w61DxwuRTvydNA1NyiENiagVV6857iYf3EHEyEJqEPy6J3NZc2DanAiauMZ8GvvZ5JT8EiNAYEGA8MBF2UM7",
  "key9": "5o3QtKxmxX2CcEEXegsThQwA8oTungKJPsF61vucmZ3C4Ec5mSpwSQQDzJDJWoS38tFxh5rUJyi5n7ZPjm51YhQm",
  "key10": "3ZLahJdUDMqpRCgafoW7Mct6MDtqfY8JzqaJBi89fRKJF9Z3Zi8HmsE4eJLMJb9qhvXBvRD7RrGcjLvNkbxyEuqV",
  "key11": "329f1GXQekuD3g7Jh36NbA76YvHbRZmHckdkrLVkgKYHn42GMFTYME89c1D8irYggEAfmh6mUS6mZ1tE5wFTc7SN",
  "key12": "3z6UTKoGWUioqPqRrYmrqgmaq2J4u1vrwxNL49cbHUnBdR6E3K5PsMdMMCcM6WbdiAwFpP1DgAJJxHAdCJDj7bHN",
  "key13": "31K9sxYEsDYncJSiFAhc2parSvoxxxignBMLRt2kHeAM4CrnUdh58m9XckaNJzFnwK5DtNeYfrPaN5L8k3FFtv5h",
  "key14": "4oT8ug5UuTimoTMPM7g5sVwWV4HzS5PGVLiDittmHA6tCWfodBiHMV3AHAYqjMuATWe9FMrweJRnj7EnMxfudzCi",
  "key15": "fCW16hNbNhAEZAMm595Uy6fExuLyowaddQUbfdrrofGkw5Vy1eQkodMUCGxvUySBEsMWaZmicAeC6UuBEBZY2pA",
  "key16": "2voAkkD9EJ9WfBGrRdibFDRqGLLhrXTGu8ebE1NRhg4bGxVb2sJ4hUJ7wSzF1KBBmNZPxEF2XMEDjVfgQgKPiK4",
  "key17": "KWEkyq4M5xAYBwVZ4bAkKmiQs9hEcobk7tsEvHhTG5FB2pMLP3noiT7G74MRfyE5TJrsRYat2sXhjo44PeLF7pG",
  "key18": "3fp6T1UNns6JbPGPtEHyAgcCWuwcKwTSgKtojbLk3oy1aa7tXhy5NT9bknvgEYiQ969FCggubF6ZsUTHjtHdjy97",
  "key19": "3pkcASeEGa1saTAJFv3SJ2MzTiKALCbhJeQzHsuEXEP3BvD2ASViwH9FjqjhDG93mq1m88fZA1JtsZY75vL2wagC",
  "key20": "641hXYCWR8EfTpQo7dE7dWcqSwYrToVp9J8FCAfStWgwnXVmHGwVGLwY9ucFfEAFUoNYQAc4xDMtaK6Y4HjL4Fv7",
  "key21": "43buPzFHDPaRvLXzzj6kSDi46pPYRNfyzTHuYNdD9Wk2n38Q5TtAvdxWvxE7mWqth8XzY2PpuqqVgnmS1nUeE34m",
  "key22": "3462auAGiXKZGsof71tH39UTgML7CfsBQepL1B6zrHGmNhh2Nqg71ZcNwNn5zxop9tdFPnShddcvLDaMG9a7K3ka",
  "key23": "fttF4nv67b1NCQJcHC2ZtFAJipaiaZRv7ijoNRkcsm3S3E2VRVJv5LKt5Cm66gQYXNGQrcMvHXgK1uPLpew59bD",
  "key24": "4Nj4qvjF4ewDcdsKQMDHjAxEPrqrMhQzhhTNezamDN9oEK8xgsut7hQHBLnLmUrfoJdknfxSMKRxzj6q1pEjKCrw",
  "key25": "27gdnYWGJFTcSpRYpHqtkC4b6LmNgbzHwMno4J4VqMbsF3qHvAEKcX2TFa5j3jRnwxPteEEuhbUi7QuthAAZUTtv",
  "key26": "4vsnQ4waYLt2ggeBPatBqDSsv5gtLtBFJx8JKmb74rMQMnjeMMLqYBzuzj1gwDVUXG2iTmUgBiNytmUpyAHRoApQ",
  "key27": "4pKuWzr4gfZhotkve2MjZpJUw66beNMy5sKuLVeUUo6fDfD7a9fLeryq2jmuMMNo3iMn3zdGPoi6nvLapK6ZCuyc",
  "key28": "31fBVXZpfA54fRp8EvDtBsFPoxmJqXnsCpDrzyKSeFH9sf3KHuwrSPCWhfF62j2VFdWmxzPxVtckrDqKPZjZkfHz",
  "key29": "3H5mS6eQPL2QBzqiegmgYuNeqkYFo5bj8fLm4MV95Je2QV2s8Pc8JukA7YcrS4KbB436VKP4auK9Mw46UtjAP3rs",
  "key30": "2cMieXAntioDZ18iiDQfzTKC34yhvx4Dg2c5XSwCBRMeNPzPAQd1XKZpBvFcfz7U51SYBKwoDMw3PYTXwi1dbQCb",
  "key31": "2KTHR2sHyxe98bjoxUpCWQVTWjcRRZ2wxw91roJHKYjZW4rghfYjcAFobmg8qh9Uqw3EmSfBBzk1CFwyzn6YTtoH",
  "key32": "4HUA9qrmsuYEqywbuKUxBUqfuojS49jaLp8obkoBEZmcdt3cseXm3m4juU9V8ygep6ak28K6P25PfrrDJv62GTGj",
  "key33": "p7jMV9h2NHKqMXpiA12YBsioDLf92N7oFjvZHjrSqqy9xx6ybaqMDG34HcTTsvxu6kZyd8v44HpxSMD6Vnq4Pyi",
  "key34": "hk5aJT9WRoUhYcZnyEbskqaJ5kzc8eLgM2H74DjqwV8fXhbBS5dT6Zx6uXdgBKVKzW7ECbNzWCtCq89qvXvgseu"
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
