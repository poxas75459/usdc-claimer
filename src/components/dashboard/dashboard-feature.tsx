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
    "3kfuPMKrUtNRAAtWbN4v4DSHqqc7pX9BwkiE5Lq9gi3AmvP4ynRf7xh77uApYbpMTZKfSQ2nnxXHVJmX4GPLsFUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dqP1XhdjSuxmH21Mh8AywDokP2hnrKDNtddELQECzutQV92kDzSzeBkHLMFAKfkAZp5DfXS8xEjBK5dm1sebjJ9",
  "key1": "584zjJV8752n6EqeL8q8LDiDu681NXeRBaTa7ssNvd8ncxXBys7r5LGUw2dBx9xEUSi2saLadd9gkfk2sQezVCvR",
  "key2": "4z3vv8h4UiXzDAY3BMnHFZV5dtWPJ1zbFUSLx2iaAHYTUqhhDDM9tB6YUkDP2TzS8TvLzC2Q3QE3KbYwgrCogu91",
  "key3": "2v9S76PCemiG7hr5VVoHPRFsUn3RE4n3rbwe3i1mRtzNQR8cFnx9HyLGm2ws35yHcgmBKXWvBPVvugmtVNt1gcmH",
  "key4": "5DNNfAtu15WiikKg3cp7eqii5qZt3bJd4avzNz4BjJ5fTerui47BrcsmBhuZqGWgan8gn8usH6tH5W1qHcitDQXc",
  "key5": "b6MWzLAbNdUEnMRsG4Tk3ZgRXSob6pXwdo4gVxATMjXK1tz1Q9qFCC5wuPryur8pUdjV6pcdS7gaNf8oDR2CXYQ",
  "key6": "4WxFiFD87QN27zXnyVWMPpGSrUJBBd5JWzB1SypJnsDk97CLgujMZfFhHzdH2iNajBLQE8CNQcgiGsQmceUvvRad",
  "key7": "2v95a7DfysbtYYqpWsowzjy2MkrV91Z6yDKAXFTZzhAmR1EFF5tw4r6HY8wg688xBHPnXx5fA6sbCm3LEdL7h7n8",
  "key8": "SB4h8yTBtpRuNHW6LYEstdCTSwzC1AFj1JzZgc4k6Nh8rhdV5DMYZgCKDFrRNKJTozzYp5vdCvvZ3VRBn3qvokt",
  "key9": "5R2UkJT6DsErAa9vgEQYfL2kFzxzWAxfydjzNon46L3V4Mffa97PbvN6BSrk7Vr8bhaqDJNpoDQB3XGwpFbmjYvN",
  "key10": "iRBwmcCxhyAMM1KebiCYQYwkZ5VKpfVgxJJUSgszGbyYZcu2tvLftTcxXHM6PnJqDSSUY8uvadujqCcEA4XMeCo",
  "key11": "J8TwqrE8ykbijVJ3BX8SjxdRVCo6gqwNqYFiCMtgPNWP6tXLNRz6TQw1DSZxeJVfP2Yq71URb5KW9vwJmiRsaBX",
  "key12": "9CPQaF58jJVPWpRYbRstCF4kP4D4yZ3FMrrova15fcerJbepzbJZSnbLkK3xjFG6cDd7H4fBqztdaeyS5n9K6Ef",
  "key13": "2tMdedggwRoBbq1UdAmPLKdciKYBZRFkqNqWTK4Rs9BxHSqqVM8VgLL96KXBYWExswi27FtAyyB6Vhu1nqBgzmst",
  "key14": "4Fp6E7qNeRgjeKnYx8K25Mc74XeFZFYjuZR6GkbvZuduJuF8nLQPADoskYVuuPdKBw9REyeor4tzESsggjdyZphW",
  "key15": "2ZmdnZAyG4rthbGvx43G26vJT6nNqYvTyGHfjQAUYbmffGLUT5rZCu5rZVtrwpK6wND4kvittQB2hBQAH2NSjM1q",
  "key16": "2RwdvwCmDkcqxLYsaeUqJrrmXr4xdveUoLniqzbruHWHqTHnGdjTSbBP9Jy39xrQb93Bf7VWJBtYK73RifEfzQUQ",
  "key17": "4YifqMKEFHp2TSrqi35ovhiTaEaFcjn2yX87CKrvmQcTtTuekQK3ESVXLDkEMEpMq7eAGE1zLnXDrXutpmaFMNz7",
  "key18": "54vgbemRNxmmDgwsrfe7TcY8ky9V6yQjamAtdSvGmZ4ogfmMY2boAE1DKcNSpnEXNgQLcwbyxiFenhgLDeQLMxC1",
  "key19": "43wxG6Qw7mXTNtadJuXg76F741syM3KkmKpXm36AxZbvpYxBpWSvkHst2ybNn549yZCfHTBFRibS94pGiPihWvwZ",
  "key20": "Aiedj3i8vYaFLT27mSmBB4DRr1sFF48VGVUEDkzabNHh7e5fbmmg5EXG6BRZhMX4jvbuHBNXkBLhZL9mfmPVbtc",
  "key21": "3zXLqv4W6J8G8bJ7eS5iXs79DEaVm3YzhkKD7tTXHzhWGfFy4Gy3cZ4HNXWRvPeshGsLbyZ5CVkZvKFy5evYPvyM",
  "key22": "5yKZ6Qpcdnwav2ckxRo5vMT49bzQax4TPX2WA2g2TWaewGvF435HSAk7rnwWBBveomX7p2roPoSC3j1GCWotGAVT",
  "key23": "3qubF7Co9ZA8RfW8ekzq7YP9JvicqN9NhQ9gvA8Yxkff57N2DwAyTGrhq2Ug2ViuuzSymdsWr5c6C5RHojxFG1SE",
  "key24": "Mx5fGzyrataZw4oPCLJoLia3Wwu2ZJx1drKi9cqpj283SaKiEnUgpFY5JdDkPDcnDg814XJWyFc8QRKq41ZAYgi",
  "key25": "2AWEHhmhf21QDo7GgaeVqKyU3meCk2BiMQcdjRq2tr19TxQAikqt1tyr4LDwpPWVJ5FEt7vjqfSptWk91WrofZ6L",
  "key26": "27PrTZ3H6DK25yxqur29RA3N5op3Cqg71tkgHbLgAXLLFLYWEX6Xop7YjKWDZL1bxQHJQhkdmsFDDts9LvUdwwEF",
  "key27": "5F2Pwd1RQpSbnzAL7ewsVynorzHJKubzqpB99oPkZTqe8Th1z44AtBrb5ddZaY54PMTiuMiiFJLNoYTgBDhDGPjG"
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
