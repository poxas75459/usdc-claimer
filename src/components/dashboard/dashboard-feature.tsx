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
    "4rao3j4zsK9SjZ1FH8tTy5wKmp3pVDkZgniPYkjPmjpmupqjHLK6jifqjwR55nD8486B4RHru5QcWEey2PBR31cZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zawz3xhuV3Wd7JjnUPeqYaYYRURQMaPLtyTSB4BhvTg9KLNYWadHc6MZ9Hp9akx4ferQpy2CxaSiruoECyi2qn2",
  "key1": "5WCaQHuYAfprvZLwXPPwA334F8fEowDowwFrFbGXv1hrxuUGRGyVbQ3jQBdvnUju7rnvgJKXmF6bk3PDpefWHm3b",
  "key2": "2VFJp3XQGTDUmcDxitwuwXQP9CgDRHiE5QpmHYj6RrvYALmhbcNLFsFyTsWF6eB6x6RnxMynPfxaTA3W6Dmr2zc3",
  "key3": "QAb5xrtAdGXWgCtsjKDhFbH5YGk3FfoA9zkAg6jwP29XcCE4Jyn7rXXTdfpBjXZYvVM16FGK5aghGcQYbEBjxFL",
  "key4": "4Aym7jgYf7fFVKow6nhpVcaxcHCMbCdEcTdFM8365M6P5ZozsT5EHnH1N68URwSeUDS38zoCQG3KA67AAVTDPzvf",
  "key5": "3MwHNfyyFH4uHKC5MTnrMQgYHpe3oRVa979Zi1B7Swen6i7Wh6GHh1JuV4hP9GNofXrpPfY2LoiHQxqnjfQvZ8De",
  "key6": "SjYzWCqqfX16CQiXc9huJnT388Uw6D2RwXxPZSvEHkdyqhpMyBBRFr5cd1J1gLUP7xikdD9Ey6w5H6AGY4bxKnX",
  "key7": "5WEKs9ENt52i6bf5wnC6rtTFsBzrmsLxa1ZiUZaGm4LNktUo7oezS7XWTFSJ8FMcAzfVzauCqAhon48duVMsW39g",
  "key8": "4QE1G3j1bNHRbv3wEJtRVRv7kBvuMVWLQxreXRczBUcbZw4QPoPeRnfqGFFccunbqqLnCErXvApMLNQhiApLF1iF",
  "key9": "noVMPRcM9pGUt6RULWxbqxEVwAsHcygeH9t3kvN2vWbWvMJWdF1ZrLiCJmx6SLgWMmYPgnD7my1eyHt4Lp1XbTW",
  "key10": "41ywz4YraPkxqFeZSZLoWJnatc4kYYLyyR4NwKTiXW6fTcz1cMjF6dECLsrELuTFJF9Fi6eQFcjqcoEXjt2dyetn",
  "key11": "2AsPAze2Jy9rbRDKBkeSz4EcYc8Vx62nhZyoTNVYgPXawRN8Qm4EVzAb7ivBVE9msNQ9n4ussW487zvjHtdktKsd",
  "key12": "4BDsu13CePcMGPgK6GxqmttAC55oSgC4tZtNYUtjphQPQEF4e3PrNPoY7Bq4vcxtyAyzSPtsGzViReTSfP1jyT1N",
  "key13": "4vnSs1AqMdpF54QJK9M8KKwofYYjRu3DJsJSHqciR98VGE32WGR58UJY9WAN6MjHxGVbda9MZC6XuyHaP4pYfdah",
  "key14": "ikxTknyrGwwUGxvbffM5zMMJPrKy7kYigoQcAiwJgFcn48cs6dyxsWwUyXW71mH5npcEsgretEwQQtFHg13Ru9Q",
  "key15": "3eVGuZsVhY2TqjnBgSQUrKJfYnZTJZyvQ8J7rv4mWGApsgbtEKzJfkBztFV9jX6sK1YfVE8zwWZGxbnxBftq8STs",
  "key16": "2KPLpyyg7MPnQhs96jBB6yBpnnnQ7Ut2thtbmeDFP5HUukUDj95tqKPYL2GASgewrPgXp6JoKxYnjtcw3zesEGdL",
  "key17": "4wEi5KhXXjdoPkd93NLQ8CH4Sk9PxaTwczJaiKSqnNrUnL3Kxn5o2fNGznYrMLrqUTuiohxRVZi47cKF5wpJvG8c",
  "key18": "3CG1raUWG6Sf23PVLeA59Zvt5YxTbsWv7tePavSjCrDTJVeBeVRzYMi1ZNCTwTkdE9Jqi2WzW6dPW5e9gv3AUTs8",
  "key19": "4a1tCGoco3FGVzp1L9DhPag4qK9eeqLatFyrAf33CJBU5NctMFbAjP5vUH6BuM4LV8UvVsosp1B61gFoKadvdxLA",
  "key20": "3X52Sjad2YJ7d3qKDw3ArViKryb4QiBZo87zkbq8eMrP7y4vwAi2FzaPdTBabqisB1zVsQsA6ANzn7rJKZngiLuB",
  "key21": "3WX4oHkaqp5SMWV3BT9Bp8C6CYvH1KzzuYSXiWsty6L3ZSmyvjQ64L7XGPK4eC6maN3xYFdgYsoZmobrgYbfJ588",
  "key22": "E367FpaKdVahRYeFQhMaSuZ8M59QVynNf7D4JCxLRzAgn7AJri9EuXpzqeL7YSm9L5K4V6yLC6HsjxaR7ZjSHwW",
  "key23": "5q6jECsULgqKJuvy4WnUptRMhjk2YR5WogMzfcxduGbKfmuuiMxkVdpyw3m1vtQD3xGwAajVM8ttyqptkRNbysPR",
  "key24": "4LHtr1r6FaHDFexYR7vMLcWemiV74mtb4LJQPT9YZBe59KPpT4AyPQizTxPJc5f1DUdgmJe5Qg9Bi3Dtpd7u41cy",
  "key25": "4ux4sNsKEtCJ4Ku5Lv47tdBrSMrNJFeLA7NDo5fNaFnBaDCE6pjahgVpScF3YREEzE57gLWnN9gfyhdcugdkgP4E",
  "key26": "4th8xi5LwC6vcuQC2TLKJRbFT9uR2935UKxj5CedvvSNPsHCy3SfN3w9atX75sQBjWXrbuuH1NjMhvMuRe1EdJcZ",
  "key27": "3XpjDfB3cQHuVs9VyELHK4EYB8vutc8FpjfFMNsntDD8X1byjaaYtjjYTtLvv5Sw45cyAzSuNqgk9oQ4gbryyRtS",
  "key28": "2T8YSt7LwcegLrm3KUb3FX8KYDHmF3ZS8vYn8ZjLyU1aok3zLsULEyi3pGgiUbZH6SRmWqhhs9gZRQ2vCrEBA3jm",
  "key29": "5TBgoHQNQnXTpH2U27Q8tVhW7vbY2ew179xm3k879NaehXo77fLLePU3KonAA2zTAoBR8KU54FTuzjr4Di8P5v5j",
  "key30": "bromUNc3jig9zJnj5kLdkUf8dRpQzJJPBN8md2NQT3WZeroc11DiS6FfvRVYuBFAYVNjhVDVyoSj2xP8tn7gBpQ",
  "key31": "3Smsrc8isgGqYdrBS4nzoUudqUHphM9vBHSNhRUFNS3J3wjiuJJBZmTnnDEqbfnuzz6VZ5reXVUfugLpy9iEzkHM"
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
