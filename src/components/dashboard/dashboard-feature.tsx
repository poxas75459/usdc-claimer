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
    "UkPmnCXRZjimKUAbTLQq6pAdQTyGHQsspjLWorRimFw8ZyuS6afzTGQwAXK56ALvX3rUBjnUPjQYF7zd2oRxPm1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a1HPoK76sqQxMt73Sm4ZmqsZ8VDC2X2y1EcEcKaQ8srSPSZrq1eia6qXczwXrmFBt6g3nxu7afYX9TUXDwKtDui",
  "key1": "2uWNLdLT6cMWUDyvmVNyX9rHy6V4GavHN7Sqo3aqiERGWkv416tSnHUyfjb4ftLpQLgDNqKHgPgDfYh4rjXDccoo",
  "key2": "GFurnEvLnV3jHnDR97sFEfYtd2aS4xQ1E7WNh8kbrc5yHJTaYknnv7VegN2eEhyxNi97dteLfuaemNUHEicWmmV",
  "key3": "2q2Hy36PYJtBVGr2GAcTtWRy23wj9CEjXEuHHm15eVKH5okEG5hEj3jUFYN1D94GG6GZTNRw7uYUVEm31WQ3MiQW",
  "key4": "2W6QciTMzzAs6PbEFwqZ9gvYUJhZJDQsCKFm32MsaJN7mCcyhbi9sPdfAAYPaqRFu1bGvcg6QcB1rCpXL9DbzQdt",
  "key5": "3XTpu841HZCQp4fVNG9mMePuxA9TGcvsN4SEcpn6FijAHoxv6AHb348MZiWe59NSWFi3nDwFzXBd1yCceU24yMpJ",
  "key6": "4rXXn8MGY5dgEnT6a7ASEWQosXHyuhXWhBKuTpbwHQ57SZcgVXSRsciSKJFiQRXXUCDPYxii7t9MaGU9LWNayieN",
  "key7": "5NAxsVAfTT2PZ1omBKnjhxdKaPMbKsEfG1wyiYDFvnpF1HveapFkqtpFmEn7nQ2BZWjJyhXKu4PpHwcWk8yTUYtF",
  "key8": "2qAGWjJLjudLBNaDW3aYz6ebVcPXZrM21gm4pcfGspHLMk6jNvQNVR9suKZjw8t6FUt8FEvCWPbsyTJoT5wZoLLM",
  "key9": "213rckhjNGkHhFkd1jNsQbD73YyYfSv5wBWFMu92vvLVFxnEpsaZawyj9u5oznbQbqwnDUT1nV3CoaF6BnfEUyvA",
  "key10": "5cLa6MaKwbJ5VckHBbApXsYcfjBLEgyehAoK8tREYEv6dWPDCD6Qqe6ARH31KkEf7wzuVTxhqqLmMQTtA9UsVnx1",
  "key11": "4WTaNdmyeUUEr3d8hrBbtu8KRef6K75jxEp7qbL7ohFtnjNgEJW6UgbFzfjjtzEVA5679X9mqM96ziiB3YyYaRd5",
  "key12": "NEWQw5cM3JTmohS1YRcCH2MYstx49ZGxV5gATmSE1DSXacJFG8pePgvQvi5xX4aN5YubsW9rkhk2bdwYv6YfCbJ",
  "key13": "5oqPnKZpepwj7kekQA8APWAs8cRCRbqJHNRtsi7zg6c6z5uh4yQrFwc5UXJibJEiwpinEzgbbwSqrQVt37AY4JAQ",
  "key14": "3sqWR7VieGtqnKzg2Vb73d7B6RuqVriJodPxs1ikGKGYin6wS4vRw6QDcWpx5akkqvx7m3qVERUNsQ2JNmYGumPZ",
  "key15": "5nEUrTPNFLEAbsCz9yDD9CPqyjAmwDD3g6ju7eNghuqwwmwaFsN5vB7yE3kb36VVGEAChKQaTuNPyzjvjyxqSo6c",
  "key16": "3MTY9ova82kH4BUyZm9Nne4JLxwtwtaqzuAzj9Az4FyjfRwGja2UGBBMfJb2hQRRJ4qNLUkXRHj6Hp28owaoW9GN",
  "key17": "2zRqHaPW6Ad4n34pSuVZrspo2Mtvna5GhsmML5m47gmrworVNQH1dYk1TFYhfP98LTeBkResqsfgmU9Yiqje9nz1",
  "key18": "5mzqE4oqi1vNDDtLsitYrjHRYYGx29qGoDsG7Tb9AszNmieTy8gb66dqMRXT3MVcQUWyYmgY7B4tSvN8NfPWqtpf",
  "key19": "351u1NJ4VGPNzcS2YCuUCB183RDdk1DxNr7Kd826BrWXmr2CoiFhkbB8cKb2MoNwyjWMNzN9BU1kXQF8NKZST3eR",
  "key20": "48qHXWpDE3yfv7G9qqTSQa4XoKtX3FeF1NHsLH3GzYNmbs52iv3MJcifWY6NpAT1BQJUHhmNczCtxo435SpdRLeV",
  "key21": "2nsZVAAeKAy55sHv33mFPYr73WoE8v2cvAsXqHakzuik24H2AawVpAvadtgjiwdzK9nQizKjRy9vWyAybWQFG9Ep",
  "key22": "4fEK99VgDfT2BgrFQ35VEXHKRgjdKoLxRF7SvBTy6SqpEfJZXevyUmNJ9A6zHXixdyeDqg34Ee6YpDpnWtQoAaJx",
  "key23": "2LhVEQm8jF8XaG8MxqSwrnEb8D2FcVFb2G8pH7LTqSwnR5v6UmTqrGmyVcyphg8487RUCQ7pSyngggV1VQh1t288",
  "key24": "3MJdnDCBympBTKSkfu4X1TyPcJHDvjjPDtfXbLYkdacK1nfMt1T5iakiV3zitJvJBUAqGbVMNJhENPqS2LfRcCXm",
  "key25": "5UrRstKVfy46mLpKgjWpMeiFg4c7agGy7d5ehBCExPuR1zK4fBYY8bkKQQiAirKzcGNMJNHXRZk7HtvowoGpibxn",
  "key26": "5cUyMFCnKhChvvh9q9HJkD28rkeC3RfuGQVYjo8ZWHNBd6s1NdCFv5iE67qomZnGQ1ffJrCYo6F8tgyb1daYfcGY",
  "key27": "2yeh7H85VAFrBQ2hMsr7ipHgk7nA6JwoBekJyaXgthiXXQhf7qxGUHe17c8iKVveHCagXa9z2AW8yzhADaw7k18Y",
  "key28": "5dKMq6FLzhHmdQJJ8XPsaDHdA5Ecm7W6DF7LdiCb9qivUs2eJg6zrSogkAiViXj3hWQJEuvYU87E1qtp32d8MWCe",
  "key29": "4AAo3HK4XeaWnvKsgTVkvogH698BD7LgCjdDYoFC1Lp6q6coXsgLD6wMCJZccJ9fvKWT9hEQ37qF5ZtCUEh4xhbN",
  "key30": "4WyGuQ88BcTciq2jPGVjxhxUyDZtUX9dFqt99eg9tQWJmcp15xLZ6cTvv8DLcwiuufvk6fNVct6x5nj4dWMJUzHt",
  "key31": "62wVZSm5jFQWfBHe7c6p5mrCL4ipMoTUWske3GYotfXM2ff9w4fyGEKESaUQybB6HXhDQkiavtKLyZnt773pNgCL",
  "key32": "33VVaHJhmfzxhDd5GAUn2tLxEckBLQ1vfAmARkHL2NfFT8A6Ai6n7tqXtHuEGC3rERKpCfRe4Nj41A1wrYjrHsmh",
  "key33": "2wdVtxXvAFEU86qgCxBbLCHo8wkRuBtP2L4bUkoXvWAxx6YAgWEzRkRQe21BYQ2L3r3ATeE2Uqevj24ef1tpafvJ",
  "key34": "4daM7J9UHmiRpwgjGb38zZF2Hs9r5yQfYu8p18LvWWXcXabXZNH3MmLm4YBJVQxLd9Bee9ATWzpx5uBfiMDoFE9o",
  "key35": "2KetFE1JSvdVfXMu2wtusWsdUkJUXiQg2pAATFc3BCJmA37pfNAqmqZz6JfQ4qrtdVBw9qALjFZqtu1iEUZV5wAe",
  "key36": "3qbMr8jyU2SBLrzxz7nHcy4CxbqBLcoo8P9ruXGcgrkrhnB1uRHCvpbcMuDXPZwEKQbLPvaQkqzJ16PVUHcry4wp",
  "key37": "3NA5JvJ6EsTkKmTR3nuxNFU2yLLe86JYYdCqDbANCy8oWPbgR5yLNLNjEfyZoKZnSqt3kV91Jt7dJdxAia5c6xf7",
  "key38": "4RK7jtZuSmdP84UKt6nUDrSQnQJhRJgT5a4r3gqWPAPnCafUuNMgi8eBYMgUcgK367Hno2iQuosrgErTejgM7tTb",
  "key39": "2JvpKj4B1x9PHrfXzrSr5B6kPgM1uMc4u3aQrFfPq2aYkrzXpCBDREWvsaiduBdibVrqUdjTtDuxDje9EbwWQUCa",
  "key40": "3Tq1NqV2vsBaiXWs82tg5qmZoG7SnqMMJdP4D8DPNZj6HV8G5HVhNdQrx5kPa7MXqdMkAEpjgkhygrpZkFUbo3CX",
  "key41": "4MrTkkEmoKixea6sF4N1mB2oqjwHhJti1gDoCusXh6JnPqjhFaY2yJ1DrQZajm9F5kmpTCYECnC55UnQXVxh8jgA",
  "key42": "5ZYXkvparP3N1DranYYLjcidoXyjKp8ZujR9LAuAmDN4fyu455i6nGrZ3T4geuwiUiEB1Lq8Dpo55Dh1Bs38y7Cz",
  "key43": "7U1Rie7hUTuMBsHVHZ69q351uCYTRxMQWnHvbzytDgVe8Bfdu5xGx5bkf9c72uX8GiVwwM7jXrJYvqWmDaKaFFH",
  "key44": "2HBy8KAr5KXdzgVWWc15LQk1UkP4kFpqKMfdyrsK9Y5E1Tz9PFVPyYZkmMG9iHyZsgjXktyYYAV2rcrQ1AHyboNL"
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
