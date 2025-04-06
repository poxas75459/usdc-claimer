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
    "66sZJMXvzQjrgQfFURGozhfLvwcULfsrhM9vqyjB1MTSRM7u4FjY1regheidPrxtRKVEtHpXnSsUSm97sKhEW1FA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YmhNSWo2s696jNYAMXB83YJz35NKqDat33YY4uE7f1E6zHTgQqTxcUUN51EZDyH4a6UVxxjvV4EaniGjCanoNz1",
  "key1": "5JX3xZ9T4H8Du78DfMUZp81KUXHMDAMJsd7TceQzLEWs8qG1jyh7RqdSzF8vQb1uMJiCHmCzdp1Rw9z8DBxjPuKN",
  "key2": "2x1gZMwbWjKbTYKwpTAGwbrskAuDVUPw6ax6pmVWkucrDr5N3LqPEeF6F1hv7C4hUvLSJcusn9jjbu4UzT8jDfdx",
  "key3": "56NuLS3YXemajQF1uaVSb2xrHDViPHPmMS4PKi3Lw7gKyMwF24HFZSpJVVkr7AqdZX9JD6k9mp8ngdcepXPW8K8r",
  "key4": "2nh6u97nzGePrUNCnobEQtchV43yA7yf62b7BkXsjduA4PpHiJ1Cx56A1Wem6wEQF5XhYaEF41G2dBq4NuNeqzAQ",
  "key5": "4Fv5fFSugUCQn1KzPi1DLpmtkWKXcPykzi2kvsnaYG9uqGvUJ1M2Lw2EhQByhmVpRqpqUDD9aumUf7z3BbX8Tecu",
  "key6": "3okNvaAeB9j7kuXvEPYrNihqE1uepLzvifW4hyKDaCsFJAgsZNbPSMvZYX71mQJ1p8EJgL8bJXEvx766TmCeb6Tu",
  "key7": "2dVvxubFMTsGcB58gVrPDWq41aXT7mGewMrFGNU7r1fw4xdcHsxpPN3T9d8bWnqu5L26xULAqpJWbLhg2dRWsnSk",
  "key8": "3EjsnU61swwxPkRSkE83xqMFgfiCvZTdx8po5BJrNv846RHZJTvN3ZBTj5h1sMtpX8zXNqUJuXMf3BvXGK8aRxB1",
  "key9": "5krcYZTxkmb7KzbSP6w1GGTBvaSEuCABViB8c8QSuDrYU9QK89dJ9e8ct5gfQvwYVv1o8iRjGqZzjEtWx1UkAduG",
  "key10": "37AeegRBboSBeTNoGBF5AgaYrJLqW1w9FbrcHFGMhutJ1hfmyS1NobVcsBbnQU3BHofUeYuseUF81M6Ybeykjdfj",
  "key11": "qnyNxruAs9ZyC3JZdJZgy1oHoyPC45xJKXfJ88eVHRSWEsqgUEREmTZCu5TjQpQTBN71noxnLyGDh4pLEPPm5hV",
  "key12": "28wdthb4kAiaFmiykjpMfeZDhdDaEmprQjNwLLAhxxRCwP2sJZkvSJHhCnZeg4PkEu9GkRptUXLr13XByeENDJJN",
  "key13": "5Nwuj7tGcFTuRCwm5ttJhJCXd4RQCoAwk5XRayvrtmLSKsMZLQszrTjVk5sEoRtRpH2YqTk4B3KpnnLePB4cTw4m",
  "key14": "KZpNvoXifLDYd5YF476RddvNgLAYyYvcthPU1Ue6PBq5SrKhpB34z2aSqDyJ11tsDz5RNn7VLfHz3NYfmYBdKay",
  "key15": "2UsaaY8k2LyBpexM2GEzYww44cS3RMFhWSCSxND3731yemoayifTQi1xNJMTN46azFA9VuDdiau7avZsv6qGCZus",
  "key16": "4kXqLJZLJ5TXe3hps9cmEFkGLxPE7LEeAH14mbrtn2TTYryP766HpCu5TpkzTgKZcSt6pMiPNHufTccJnqMkvKGG",
  "key17": "4VUH9g4Kxi52ofFHbeDiL2v9BHoBaJHAvrxkDKWfhpux7cUxqJtPWbQvJLsdamebhVq3PrS7ZYLUgxd8LDnVtbwo",
  "key18": "2Dzz7iz3cV7jAkmgBpUFZoaoKPcDdP87qXgw7GuMi483YvskAwmRJGYWs96REfTwaFTrh2V3bygAsB9vhVWLQiXp",
  "key19": "m6MDxLwLRqzoDAsuarKWKbDCwFzWSEDUY4mEeWX9QNk7GE73S8qW1QxJK65VxoSAiCWpXSW3hxbtwuYndYsejo4",
  "key20": "2WXfsziV45THCJDZ4TaGwZ5JvmZqcJBPzN9TFWoZTCBwPFT2TTPJoq2CgAufW2QLKnu7vf5ybjDumdzNAEwcDNUV",
  "key21": "JJda94zxdci699h7P3WT3NLBebL9RZCEBu9CRHQv8GAMCZQYN8ebSfgCU6FspAgC8BcY3Pmoz9p249BnozeodZ9",
  "key22": "4BHdD1Gh3zWApW36WSw9fxGnRmYq3GgDKh3yqgzgf7igPKKacGsyXac6GkEsKshH8aVcew4AW6x2pC8pKrRk3zZ",
  "key23": "3TvzZsDsiQRSupshvKTFJCNxocNadZAiBzmbp2ABUqGy4xErXCSiA7WP7iEjsMSxLy5PKNVcTtDM5SawPYRBLLX2",
  "key24": "646X8g8ZUmkXk418PuS5Jux7o6KGLfS6CkpBcVoxLLK1j9AQQb7X5TVJBhmiGrzGC4QhLG3sntjqtGNoxrZtkF3V",
  "key25": "5vj9n2ZisJHH2S99Qkj3aR3RD8kfW6Yybgq9PoMq9Wg4t66e2Y135FuzCkAPvEfukc99qgG2iFUPabBizfZdSojk",
  "key26": "5sHSLnL2zMjwRwsHgnmuYFHwu6cch4yMce9Kpv4x82oZyACqzRYpkB3BvuZxX2bdGVpcHp4mWziggFzgLHepYGTC",
  "key27": "4joLPLCFHfW62QTDbeCWoGiF4RwMGEjUCkLZtZvVi5SkCX1f1ghwmiQiHKdUzHVLBjqubxrhiswhYZk9YrfRyToo",
  "key28": "WcTsSRyUrGFyWYmWBE8UsomcReuwQ9PLYSrLh8pXsTawfvns7pbipadR4jqUQVnx5RpAjFAL52QejSNFWjrH4AL",
  "key29": "2aCrhso8JpuJBiFpxnqnBqdGvaE7AY98QZmFhB7cCegJraFECML6bHn93DaGKbwTLseWL2dRW5EqiVPJbyJtwSLh",
  "key30": "24fnQbYkCsSK3zpGamddKNmAFWghRB351zhCvePNcS43eKqemcjj6rcSATz7KwFZ1i2Htoqmxh1YFiR1rqkRi7X2",
  "key31": "4EDvxjs2X1w64y1kQpPKpJe4Uf6RCYCdRF3SSiMEozezFVQDFJBCy1rzRiZKWBRbgMFzTGQAgZ1R2Umk1Jn6Ma4b",
  "key32": "BvZUv1g3R7v6FA7FUhCyw8nRtHbpUuGxmTDb2AKfCkcoATzpRUPucPSN39U9cNcwwcJJbYTw9geoPZiSJE9px28",
  "key33": "7nF7aYmngLqziFK9tkNZnoU2pcBBpJ9y2sQ9FTmzijqmnrLqVy3xP1gQdUi4XzdCJk3DRqgyhPfYwhnqb1JGHUz",
  "key34": "TfbAC9yJ4T5bvKKaKmB686XRBGDHxtbHfuu7gKQbS9THLRvB6HeJTkVJGQLDzMJhEpsx8sWmD2vKcAYQ4xyMsvn",
  "key35": "3jeydZ3Vmx3GEMMxavgGbiFY5CYTpfJ3ny1XZGa9MkEBa7WSCJojSwPqMK1vnsJj4D55gUWCxrRwJM5wLeSkg3dR",
  "key36": "2EQdQAgh8UdV47CLdnf43wwuFzN5UknAGU4ubUPqW1FdtrwBL9B5tYzjhY5DRa9JjHdQsaQFoWeDSGoLc6pGhJqG",
  "key37": "2FMjtEkATKniSvKLtTJSj2PBZuqAXTRyEvZShQYFKX3RurK79rhAP2C4QqP3wsRTnZdHMYwLgV5F9fVydyY3pqHZ",
  "key38": "2Qs75UVVjsWY8QtVph7td8DBZUKRXGjKK6zapHcHDNyiCnydJ9pkBP1Tqi4TTbUEAi5QSJ7fpQDdJDY1r9jkujDT",
  "key39": "24hyUQKCi8VBn4CmQizNg6LeZtMYJdU8YTgG8nQZvukXcSn7TkNAgr4UwSBmaBWfXhX7ff2L97f7NzVPLcbU8QVV"
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
