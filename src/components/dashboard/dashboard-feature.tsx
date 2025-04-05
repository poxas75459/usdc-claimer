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
    "4J3Jj4jrTCe9rK5WYokCNSPNHYf1w4p2Upof8EFED6ZS7YqguuBRqcMoXyE2YfXAHZ4wBKHQ7acuMvc3pWf5yyf8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kk5iiYcshRVJEmUiLSVdX5mQ2EyTmShw5nBTrhesLfrmhZuzL9tdnVJZiWosZxgNiFPAe6jabd9cjWCRPtPFftu",
  "key1": "3DckWJNcha2mahFsnjky1t5GmE8CW8VXiz5rFXtw5UzzT8xEwAH4g3UbsR1sv9JVj6ShKr5XX5C4zqZG3oxNsVDd",
  "key2": "63Y8EWqX5eXducFuJNKm3WQ91EwaXWj7rWm4A8kZ3D4HsfENz3xQ9cotZroGMfxXaKtLBbU8yF9biyqBEEtHDR1s",
  "key3": "3d1Hprk9K5qaG5qku6qKHpQ2yuKqY8xrxLWU7XLVoCPgxZrCG3PspVECZgj6YYLfYFUf7sTrAC53VsJDJ3Kw23ZJ",
  "key4": "3RAJb2VRN4HUQnXXJKFAyMQgpoXBiNVTdrAjWMXpWRJdjzKrRmREMTDj8oFTUXbcq5g5h8oReFrDsiLR7vvh2MXp",
  "key5": "2Yo6uXKpZdwKqDcC9tWd1U25rKTYJdqS4eWx5tUZZnVP3jSseY77v95XzPpDT1HX88myHXTNN6gHrMrHm8mQgHHZ",
  "key6": "2qN7WQ1dtjqf4ELPx5MhNuwx53y5wmxuqEHb2GLM5zWu7KF4FKhCv6c2bPoYK546VQeNPgJKyEqP5yWxPyHPtVr5",
  "key7": "3uoQdJvYDimbLh24Q5nnJqdKfCrBSKX5sisoCkWqeTRZQmggatstXcXKUDqnrCKJEErHdtJxcvtQfAHwGn7xbHjJ",
  "key8": "4679ShBnBaUaveMw1TbWixNTNxvmPVohJE6rQeXqcS1p4L5sLB2txzjSJZf5E7img8t68Y2M7cfm15Lce4sp1hYE",
  "key9": "52X7HK7WZtF4hrVy5VmkpAQCZAbZrbtY5Vj4rwX7zFFiTf2SmzrC84TxDh6LrzjaWadJUH8x3qVa4pGSXqunEqak",
  "key10": "YRB9eHetuqSurnaPpvDof1UrgCAS8BdiJrE4Xz4uiQhXA9yN8Ao6uiFexz3R3a4PJm4bZE3pCyULQz3CVNzq4Lo",
  "key11": "3s8adKE5AX2MmMN8vo5JDmysvGrmANKsf3Rm4Vj4mAE924sTXTKXSNETyLrWTsVNNZheYcbPHgpq7ve9UTiA3Gb2",
  "key12": "hYJjgWQgZrkHtayQ5J3r11ZqKpM77vASXHXBSu9jJ7UJErtJuT64uGAkrZEQijvKW5s7VxEkvcVsdxXiK9XT3r1",
  "key13": "JaGQjLRnfu9RzALqidzoW2M3pdsQhRGR4cX7XeRzoqu38skR9eF91dPWzr5VBNEskrRaXXHg646Pb8SiRRDHCpV",
  "key14": "4R7eSNBccZ6hzd6xBJRNgr3PiCDPFvNtH3aFt7xsYoAbRVt2gXP8GFUkCKckcxSu744d6dprqPeDTnQY7zWx9wPL",
  "key15": "5gaahKyRG3B6G5CZWj8DhF9ocmnpXqcJ3FREZccX31BGAYd69RtV6nt5jdxED3gXGUReyxXJXqigcXJ1r6qkzU3Y",
  "key16": "2hxBFijMeYSXprGiCdo8udJWDXNRLV8kjkrbrzny5yBWp18e7PmwvPJxH2qinx9XDkmtTgk1xMNYNnHGZmnSPz7",
  "key17": "4G1V6GGBAyu2o7tJLJMwySpb54mzToxQkQFjXJ6oNhT8Guox8fMFcNgiwBnw6StVE5gFHDAwDmZPZeaemXh28bJg",
  "key18": "3s6Pqm1FxtegRQvKvC1HWZ5BYquED7uR6PhKfhjbbhRxQRbwNVsRmg4tveYKdFmGfmKm1efiFVLuKgE3MHzcTyre",
  "key19": "3xHK6fJStF3VRZMYZJ3wpjDdj5XufMKq4bsvZ7EExjffP9SUUVpkFxazDB9QEN9CU8aYSEoQBZgHacsd6bVCoAur",
  "key20": "3A3VKjCJvUvifvCCX8baHsWccR6GCS9iZZ5UQkrb9CPKmD4MiGvvNtRnW6doZMttuqWc8YJ9YYxSbukx73oRuetv",
  "key21": "8CwNZ6QhiF74WX17ippJdR3ikmrSJPNuUG3ZT5BjZU3f3MeXWXm4JFCqe3zwAzijsHPx8fHk7XDvhaxtq4MFzph",
  "key22": "44yZTCQTYyw2jD2NzXzvBgzFxknb8XJvvJ1oWg1zMC8vXPcVTe95Xz7hgQd7492RDZHrLEtczWVyqU1nNYiowD1z",
  "key23": "4KaUKjiuASvvd2innWgwE9WogWYnCTEmULPZCCQJPsSnfDiV1mPorQziWvj8tzTvupvE53NKLde6GwTHT7Kksw75",
  "key24": "4JV1FuSvUe1G4qY4Vkog9zG5v6gcGi63EAEu38xNmzUW8cuQ1W5sfWgG96etioyAFVyoTTm15Pc2z4EfteDm8Gr8",
  "key25": "3uN2Y1V8onxGPGjoebBkDTj9oands9vjcGk1UQFXHqSWBe7vHhx1xG762DsKoooqt1rPJgHSJ4zhzTFvzFxyBNBP",
  "key26": "42WjZyg3Y4xnD2NqopL7ps3U7JmX9FDBv3H6bat7bhPp5jbCBxFL39dHYXQPA2nEjbfHm7o4AUX2y3JMb8UhM16a",
  "key27": "3GzomPYmxa14yDheWJpXYo6UKrJMtFM9nY9YKwFw6JrRbVuVvRLRvQE7QybGoDJZJmvoUtUTU3ZPX5Qi37jayaWb",
  "key28": "5JseagVdrihXVsdUvfwaBHqt7Jo1yEfHYE1Wg2hyKnEUNrGPCjb8vqyfJHVYqLbhQzQVfrV2RX5xbJXZWCPtNuv1",
  "key29": "zZSrrniWhkJ9YY4adwvXqhHvDuBNfuYzL2CjmFSY9SRS11aGvoWxXHKd1f6MefxjAbE2hYRhS25Kz87hNowgETc",
  "key30": "3bppc1DkkKs6hjXigSJVtMdM6dgo4jZ8M4HCgQaPXJvF8CZZ7TvrccoVfoc7ygpcXhFRfhBA9be7Ns29KZ8cQCVt",
  "key31": "62MLWqktVKaap72TSNfKhaCD4tUQ9A3e1bTc9k8CNhzoWk8EknmQcuSp2m8DnryUEGqJ7R7wTTjd99zDegQJQC2e",
  "key32": "58XaozuxcHLSSEfh14tHGiEP6mR6AUVdwQBfbabBvck7v6xesfn55muSoNuJX5oCsNVKwiaH4UA7x19umaRnxa9Z",
  "key33": "3HmBwEBaiNZMcmmco4YZqUVjTaU1iAW632vnAum431x49BYEEJWEM3cwGZ413kMpKni6xpJwk5JSMs55DHhGH4pq",
  "key34": "2LPSsY2srEMCmXtXfLKsQ8TJHSPNisCUo8KcsuyxLvF6XpYdKqToDktxCKHdwASCjF6g7CLr3E6d9uWcetb4hUir",
  "key35": "3o8ANUqu2qT1AAdm9JU8VCP7df3d6wZe4gG7qx7myCcQ976PjNAsHSYCEcD77eiUgVWgfmRTeV3MH1zAN6kMx7b7",
  "key36": "2uTrdkLmPhfCn7aQgMFE7Pzyw6VipLhuEiUQoqzfxjDXnVPcSHLbQcqLmqPxqe5MySi7SFAD5awbztzqirA9kpip",
  "key37": "TW63rX8trAA3UqXNKKkb68nJ9nyfc5dh5JbY9s6Rs38XTwWUaruJEAC4UrfNMwdk9e6rprfVhqtJsexy73zFJNm",
  "key38": "2QrEPThvVJCWEr1HgfmH2bXZCT4RwscBaJwtLzgrvuRZQaMAcKR2ooRxLdxSpv8QyN5v87C2FfG3fSo5qHprTEYa",
  "key39": "3EtYVcGVb4tiBt1o91pRW1g8k8d3eTNwkBtSgcs7oSRji1XK7VrnG1rV78LprpTRBviXjCT2uqkNLpGub2McCw4k",
  "key40": "3FGCKCwBAYUF7bWKPH86yG2jbwEJHMGQpbHCQbxgudQeNDV2vdT2ebxbmWgbAYv4f2nSQQ7sLUzqN3eF1XbpJ7qQ",
  "key41": "5vDswuLDPtsmY1oURmudubvVzq5ruATi7VWjm6FaBUV6zdcbB7EmKTxwZZxaap67tTcg87M8W4B15Z3rHg9pW1o3"
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
