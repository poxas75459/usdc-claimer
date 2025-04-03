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
    "3XDEh4XhmdeB6G56xzoXsT6bVovgTVr6nTmsWu3xebcPe62MiLUQGaqptKY2geNUpFwxqEuespGGkfMJDLsgMGVU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gdKW9bdbH1srVUeBQXuJkVRLXfNQCyesuE18M4m2m8jdGULeMrbLSZH15G11xhRQEWDr9vMERadHWwUZcgPNVGg",
  "key1": "54S1JffpatLjJwM51K2FYJuauhbE8s1bzpN9euqiwc7kFKPwC54xUjSSp7hoDgYmmqBL9FrVDKQejKLMCdK7cRzg",
  "key2": "2PED2xw4r8NijEA3afPygqg9YpQP4AWpbxX2giyGZdFJcgU8e1fXiDuSXAXhAECdHZ67z9mut6Ewxxt5s52ZsPSY",
  "key3": "3DLVsgfZPNERwkvu8hyS9yp6RSWRSwMuMPBXyTV482ze21qYDSANd6BJsigUX6cw6XvjQSKXtwqQcfMeHGRzCs66",
  "key4": "61bW3HWsnvpfJq5mDS92LiE12yhL7bhaKvAnt3WAFuH9tttids91iVUiWaSySowXYCJAqMwcTsHjEk2ghFExsd8a",
  "key5": "3yyNQ3t7juaXJE9UVMH4mdv41NBJZBiJD4PwKMKYzc9CXc4e35BFjvwfjJDE4eSMK2q2nfoYCgBMLW7ZbnJsmBDJ",
  "key6": "5o2zE5oGD7CmDqUYrC2hpMrppBhLR8Nm77Kf6CgMQPRd4Kmrv22RHu8Her9aiAZitb3u42JKsaW6h1HnxS5X7yzr",
  "key7": "U9UH3GqJfM9WsWPkFtaEh1sGgs5BjghTnEuyLSKkSRQkBiUjpS6kWxmgqJfKa2ZHtxKwaFgTmDipDMqTavQRB44",
  "key8": "3T55wMpVNYnVQEpgzXWqWE7VBoJzmyNdb7cT5ySHg32g5UAh9G5fU97CEf6XRoUMDzng51SD69TFEXKEixfZ7aZ1",
  "key9": "3WmZwWCavN94QkqVqFQHJeEUg7AmF4Q8aEKYoQdL6JmA2ikc32Rt74oua8adjVHTo9wPn3UF9EiKeHiMZXy4Zmf9",
  "key10": "YQS6sh75tiZZeb31NQjYt2dtqPW4SWHgqeirCG5ESvty3YL7VVa7H7rdFd75yZjKfaQk3iY9u18uXMiz2jVAbpP",
  "key11": "mM11YEg4BhiPGzwMbez8nYnB3ecKtrtmm5enaCEe2TAGmWVJAjuahwcgCMXPpoZtcSSvAy9sXR46EB7agEbP7Uv",
  "key12": "2HKLzCUS1r48VR5XyD2HvH8kExruFv3Tq9bHW8DmdZKHNokXq1HiNonz8kK3Qfj5KNW9ig4jz7cNJezVq7TH92rG",
  "key13": "3vh9dvQTkoBzmESj41B72BWTMLY94m57JDki4xRF7eJXrS7PchV52jiZQRqHQaXzYiDvSoz7jWAzz3TVL5j3iuXm",
  "key14": "3JKp1ZF9aSn9s2oDuJWg3qDsGaoLTjmHeK2cSWbfeuZ851fAHQU7UHGxoxikE6zASbz3a9WkfCSMdEK2xBjtMq1g",
  "key15": "2v7UgMP7pqvPEMgcZXjam28mx7B7WKtswRGMGFgNNSuehYgpmXNBXNgw9chX5Wc3Gmwn74QFKHzMppGFGd8s7aqx",
  "key16": "5TMy9CBuaNikiTqkWtS4VUGBxmpP8sraaJXXUXRokqRBU6mkwQMXR7NoihhJThwWAeJSeuu7rQzTfR8MxBwteupU",
  "key17": "2caVrzTo5qNZMawrPZ21sHAJgBGuZChoXD6DU8LPRuh6K3mkjDvL3wMq2HXiGmmQx8hEpLxz9Tzk8rNgdPokcRhj",
  "key18": "zA1wKzwrPohBzs2iGyWwKE6egB5Zcki2tWKkA6Vr7of8P8HzcuPqWgpcVMnSyaJTfRHHNMoVf7LtuJYP59e6RGM",
  "key19": "7vPUWai7XSKsGP89ubiYKXBewb7UPJjE6H4PXyqSYWMuvjepaZ21ibzfpd42kjN9rnkBBDje57sYZJJDVoqjp12",
  "key20": "2SMAayc23y5KkhMvALoubgMn3Rav4sCYVxD46gwJYDo1hpSerDnEuUZps91xQFzHeCcm4a9aevx8gDTUB2N2v8kk",
  "key21": "2G88qpEnXL8b2G4B7YgCafdBsPKzL8HfCZvzsK63ZwNKUFcHKoYAbB9V7i28xQANVqP3uhAyZwu7D65SsNcasjPS",
  "key22": "wAKUBb7VdGDEiANSUAjLwjQ3HtFgWsNwDdT2E5CaVEJGuLJdL496LowLCxBX6RxFSDZkewASYx4y8L1oeRGuxvs",
  "key23": "2epreAzZYJkiAySubWeCyC4TsnH44srRu8HB5a63RTj3oj5hCC2sDQfZ7WYwb1q1Y5vMPVjBj8MUvhd4AXEE5QPJ",
  "key24": "2ZkBWGjXxfwQWCVDa8yiRfFW1X6wEcjCwEPFB9ksGppXs4c5xLPQzjfqpPnw257AUoc6FnSGDEsNKR77C4rzzwtj",
  "key25": "3ykcnJE2GCdq9Ts8mkmPW8X69dE2JeTfYA215JmpeuZbQSqhnAC8odab6PajdUggfceMiJiYfP8NKQpqikwLENMc",
  "key26": "58MUkNmSny5eTHpCtmWybZczWgp7EFtLjneUkEDpuCdwmhQnEN2PAfcTtz9xhQLutncoCGU3civyGX8JSLJ8Ract",
  "key27": "3kRD9UKHP162kT6dtYgNmi6qT2RWiaQJQKBoYcVKboydNo48ALj3MHCBS25wdzGz1SSH4qqm7eaqWSadLCMDZgUa",
  "key28": "5wUCm2jqo7FRGJqz48uBiaJojgpKtydSV77tJzEwyhknh79tVSSsEGNWg1v3Sx5Tfhc9SCaK89d6RQSCME6BC9ir",
  "key29": "2RGrQkq7ovsH7RjwoWHHePmHnme4L3wQTCbjMWFZX8g2Mzy9BdvXpk1BsjCbkryDqkh5YJnahg4bbTr8kqJkSFqS",
  "key30": "4NWDgvNhUvoemUmK8wQJi2ZMhDMGkW8rouLhu84LVqVHFs9h7qUSeKpfMGRqxCDtHsDAaufHtuYTvH9wdAZbSFPz",
  "key31": "5167Lsz5jnL1wg6faiNjBKtmjzVCFNsAERsZVL3494YaonuXJ9xZS6AEhjg3knBeLMFXU7g6rZ2UR7eut2RfWRw8",
  "key32": "XMe13BhyXjjQ3SCcKrH3e5ZbNS8EQaTLRne6XWDQQHfLMTVw6a88tZopoX8apBAQqX7e4tdfSj3P8evPkDfuF4n",
  "key33": "4XPNrETepFA51UrKx64eUqAJQHVdWkDwnNaTaLzd8cxnGqdM68NxsNC2mbLNueJ2V8ACXjFnixCa3Lre2eiLuXC2",
  "key34": "5QL5kY1dW2UZPWoZbmYUe3nJvGS2nqSH6fNmB7X2DSrbSokyLUtcX7AeeEKr9kuHs8TtFDF2G7rqCUCZPEGDYSZ6",
  "key35": "2RasH2PxCmVnfZHoyrFv9uS6azAeMJ7wQxTPhCpGPhbDpA7W7TVa6sWtV6po874aBiCjKVEGyNqU1CcuHdTLUg7d",
  "key36": "3ntqbZzQNM1nrarfKtP3X89m6Y9HELRNZ6gTwr6eia2aaPcfoVXSbLfSQRxBD8e9QzNHF93gSav6as7d3TxmoFox",
  "key37": "2zT4jaNqsaECobDnoyqtZyNhWyd9VfGHRQrRMDYZFEr5XrgmM5AoD9KQqQycCsgzTUVhoGDNizqqZCN7MvaeCxCC",
  "key38": "3xVeEdLLu2JjLHW9qfkZwksdKKihoSrFttC99KGwMFjgjwhjXgEGVEUrh1Y3PvN3LQXr8dttMZLHEyuriDnXMwe",
  "key39": "g2cdE6hoV4HDWHkh8TH6qHpLRfV9uDqmjrRY8GMT3zrbWX1td8VKq1Ebh75GaJf5gUkJ7JDQXeYmvWBbhMCjoeK",
  "key40": "b4MLbUZMfbniJMx4NdjJRboPddz8jEoiZ8KSf773xrPsR1BigJchSmziA6DymwkKDWxAfo9uimfKbRsZxUeUxsc",
  "key41": "5NDHzunLScD1mWaRxkhs1v34xeaThfXAsVx7dC3P7K5cXiwj4r1fvtXBLNiZMcurKKdScGLwtcVjS31FDmTkPYj1"
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
