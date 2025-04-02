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
    "3v2SBGjnPtmBcmo2Q5ZtNGHPnyDz6ChuvvyySKzhGmS4yhnMVMY8F8HmgNxm8hJimoWbAaEVtvrXWr9HA9Y24Ak7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YoRaaH2L8bCCgPbUZ3DSPmHdku5cSG4PJHY35dCgmeoJEDZWgmo5yF4A4995ibwAiWgWBW7YBLrnVfTrY9Q9r17",
  "key1": "5opuzMJRK9FgiLZZ3aTvfEDB5SBYyBnF2BMEuMPckkFbjD1FLnfdfFMy1uWjtzgBFifGZYXEjQWQ4W3j926p8b4h",
  "key2": "41r4vX34YRPUdc8uh1Niw8KPi4PwdGNJzdCTLLMvFp1BarZx7avTy6qiwFybRLiZJo8TR23ihCKLc1AnZejkuTzR",
  "key3": "Dv2Ao8wNdsdS9Xt6fgQuVoNYUM6iwet32n7WZ48QbUdq2vyirFFDqezzzF7V3W8jXrgR8r5rP5ddAPgeKpBpEmX",
  "key4": "5t7h9qR6AjAALDPejN2zxQinowUNgWB9avhn1rz7gE7oiErRzopJ9prvGJXnkPbHpAobuyVzZq17KroPkStjE4ww",
  "key5": "2LsgRqdmqNvbVUyb7YfMmJkpZbK6Mx1MR96PjARvdoEYjwEdxYNCzZ8it8K4wF1igocRXinXVhyg4mqrYMfT89XF",
  "key6": "374g4L34k1MVQCfqvPdM412yWAFvFjjxDo4xumiPV4tWDa8cjhMoufsaWNfGWVmagqw7F2aBG3YdUw9omKgpwTTv",
  "key7": "4WHrAXRhLnPV7i7FGSQjsPuWvQa9kZ1gig42GN5DukTuuNHSSDLbqDusaiJ9iX1ZrGrixo5bwsKMmVKcJ3hPP8uK",
  "key8": "2qck7X7dQ3jh5fVy9qNkSiK1YPdg6TwKo1XCsSgjhAphQfjYsLkg1upBn5dWv88DEJGmjcNeu7zVD4AWbeoeHPiH",
  "key9": "2kXRhcJvbAtj5wvKEj723FXtzz9WfqUMFvxn7fq2oDcwCJxTeF59wC1ff3fyQC1eoGm45ciw9kuCuvmZf5HqN5kE",
  "key10": "5RTC6UejH2vw7sKEF6VhoDousLPLaGWnZXQMPwWNy69etgV7E7uh6G4xGU4mmbnH1Qa6GK6xsDrYD4AGLoXz1xUw",
  "key11": "2PTSojet5sf9Y8uFAQwqcdcGkB2Lnf84xg8BURPMgKDKUcwZC6JidWEhQd9H9pQdoP8jvAXWg5VafjYxX9AxwvQw",
  "key12": "626aAEsQmHgP9Bk2SPK7GFBcYbDY4ddDnTQhfka8noKQUW2ZmfcA8NvhNwEduXALae3jfFRyU2mb1sCW6KAsi3EE",
  "key13": "2tVwHgTFTGLLinFPD2kh46rduMDqHa2AnUg2vBHVeM2g2j28BCrzSFRKyEHXCq1xsTVFAvbV6HDVDchpep4F7Yj7",
  "key14": "YFaiuaNzAc8AxMdK5ggsn84UXXX6xjDDvUHMit9smEmULJwjCuDLG2TPuAxFcUEBijJWtn2dTDDDe3Gxaj4VxBm",
  "key15": "3dFuQ9H9DPxH1k1kmAAepgKGV6STEGKCG6Vo9WPCevhw7n99Y9r8p8NM7uiCfL1FCmcApzTa3SGDy66BmZNtGR5d",
  "key16": "5QPgm5rBadzBwYeKbDfML7EDtocBgjXHiWZ2DVejFiwRTJv3aV1zZSsp9rfgKL96JNn7MKoHz1RLzrsLyKXjMFA5",
  "key17": "55PiuxMgm2DLQHfTswZbRQQzPLcj727PPCC5meUXbaT24FmADETbCCm9g3uBpxMS2EirxpFUDaANuTZmF5S5KvmT",
  "key18": "34VhcPYXKEvppYaiK64LSMkcq7GtBu2THmFmnKYJmKUwazE2F3CArHTgXNYEYUH9JS3nHZPkjZC4EGYtdgh7Lg66",
  "key19": "583KzFFZzToBRD5J2UkVoA7bJTbDLreJkLgBmuXTzthjehrDNok5ASF4CRfQXrX1RXHEyHwXTsnmegS9iZHoKtYU",
  "key20": "3uvTUzeTDis6ycc7JMjge4VmkzsD49XooSDGJ3ebZGktc9vSvqxL6qnW2V74d74Z2vhrM6HhTRp41buBVMJtXDc",
  "key21": "65m2aaHTmnkzKSY98Mvp5b1f1T9rgEWECdezXjLb7qW5SMtxNSzqQjGy1FJYAfXfjwMpzW28UNYfESBzuaZF6921",
  "key22": "5VEsN5GEY7JfFjP39WtMfeR2sSPyRRe59BcD1gkLngYrEwt1wPWsyHZxjV6Zifzef7Bpq4cmbSVempsAVkk6BXTN",
  "key23": "538Z4Z2rWi4Jha6mXvr8rUhMqDL2PfwD7QT5pKabwzgjua8cebKSHMKM8HrBmYvfYNsT28oKu1VxBSJ59he28Jb6",
  "key24": "4dJs19EC35tcgpVxpyPact2R35fMfLYzWUu1cJXzpMGNBjNQbfhiTfrGKJvZ4qAQqYNn5K29yaXqf6PudWoJMFzD",
  "key25": "34HH866ri6kjYxopTMYLkafjZX7R7QsS2sUxy45d1b3xMjP2iKXHRbAEneGHVLu5zcPcKnU8yEeJfX3HodjabSS9",
  "key26": "PLzpihDM27TA5UUjvXJNDqqYrUqKHgyNc9KpKaQBGafL1A2bv6SL3HfiwX8RCFBNNHNNJvZE6MmfDSf4eNyonMt",
  "key27": "3LfNjmi2tK17RHRTKKb4hWirVruCQ9Z7cLeekBuThQHnmXmKBx7qhFcXuhXoqu6eSLzqwYhqQV9Ecrm4v2HRDqJT",
  "key28": "4KU4wST6XcQnqNviKJHkaG62riYmnyASBmgZP3LGRgT2PtjdwPyJNBRDnea8ZRaGvfjfYKNjVveECnK9giB5ZanE",
  "key29": "fqtvzH8PfXKmcgjd2a1ak5xTJvvMNmWYRDRGLauU9y4Cdk8US9zztzwKzDHYb8kE2dXQYJyU3YhcdE3Dm2QU6oB",
  "key30": "5y8ZVaAK8ToACacbnKw8W12Nii2woL29Rr72rpLpv3PP9YYg9LAHME8RQnu85qdeCU5xsSpdos1Et8Wtkp3wi7To"
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
