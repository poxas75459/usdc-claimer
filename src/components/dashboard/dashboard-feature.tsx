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
    "2NhxUEDYDwgLTcpVAitjYT7xVAdAv98vYBL3PPkSdzhjCyt3cnMvBvX97D2eLFVTa9eLxtBZagWjUQupg4C6bzNV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KxZA5pGL34RgLXMXYjfzwcnaY532UwZ82EykSr1Gu6bdN8E6FtQPNCBtudREKRE8VrsCAcDCRfsz7huw17aVEmD",
  "key1": "tcEmJbHzujSYXK7KSDR9Yk1j755pp7jtSvJswDg1cjny9jFxZW1chPFXhe8oNkQhymv7ruYeSUYG8akvAydLsQV",
  "key2": "3kgbBmay6GPDQxM26EcVs2yXA5Xdvto7oETzfRwZ4ui5ds4XS8CuazEpGYeqbgCaG1p1VQtpnzuS9SY45zGkxvq3",
  "key3": "5m7ceuENTbaMtjun45fCLEj182yQxejU7k8MnXeBqEJwDGimJK6Q2w2WNERPH2hSZPtyebomxLe8ZhQv2k7okiVP",
  "key4": "2F1rMaTv6B3C1LFYm3pd6wt7Kj5FbyUcPguxvgEUNUs9CqPErq5SR5nbjnjiYLCiQB7LYhyj5TvtdS1DxkDgT7qq",
  "key5": "tdGvvrUdNG1PSHz8VF2Rpv8hVAksnKBg1yhnqCgUhi9JjUVUeso9id5WnN6U1z7uUnhxczthhiZ3KK837xaxHrK",
  "key6": "3dYyjWE9FkZ8yhPDqhjspr97bSaKUQKZsFzoiqn3EsDyept35qD7tC9385aehsj1QWdydEoReG9d1wpKCczDt8dV",
  "key7": "3AYtshKVbPNo41UuumynByJxAwtuq6AuiT3H5kx9Dw1GM9v8hAbkeYZy46KxYdgw6c8yzMD86dVxBiFMTSvffiox",
  "key8": "5K5h1gXBcYdbrTuXdipACAUJzufTu4EgeUA1tTfL4LtAxcdXkUqBsHCLMhuYnHsSXaUKm56tPnMZ8E2PdRRM3r5j",
  "key9": "5fyu8GkkCXo5XrKpmwxHrkBsTaRcK67zQMaKPVVD7wxDHLWf2BwdGxTXwPG3MifFEDcHXJfGfST4x9af8NZ9vQBJ",
  "key10": "4eCeYk56Vv7ACrxwn6Vf5D4s1j9J7LyWDWR9wiwLnvje97NoGPjqPSCWpw9PRkadJZZs3mpkYF4QV3Grgx4ob7vr",
  "key11": "27ZHVz3BSteGAU6btoRFRLtKya97WtQBa1TNk1sWf7hVCjpzHRAJVsg5gjiYTMH39i9BNSk7sR3Speq2NxPTfFrT",
  "key12": "5ZQHS2fiEKeaersvbeiYrdThG3yepkQh3QEWjKzWNf3hVG9WeYhe6EFxaY3XYSJmMGfV89x9Y8j92i6wYLu2NZvx",
  "key13": "4dek1P6JoXb2YqNJGh5vXg5hmxzqmFs1cJ7ztgoCTCrKShM47UVNNZGXCL4UqiWU3ejcRUKbqBJrqavgdpmYy6JM",
  "key14": "3Sp8tnhgSmoXgMYiGaYTdfrzQXUg9hjJA9bZaoGjx9oUJndDYDGcXBJjZaRssteZpuFddzukY7sg5SnSiM7B3V6n",
  "key15": "2rmp2h2jJA1TxjFVcHdfooB3a8yHDpcSraSDuFHTjuDszWgJktaNZBXYqF8aL5j16vTdUv4jX1WJPVdtQ1qDr8jD",
  "key16": "4QLp7iNEmtN5sTm4jSdJ84wfExboGAmBsw3n4p99Sf5u1mFyPPgWVTTuSqNFqBNzw62QS8ehmB6JaYsqUee37tCu",
  "key17": "4MsYxjKWu2q3H4WfFDFBBAckvQVrPJTXu2yLQk15Mn2rxbsCi3tTevo9WS5f5p9mZMFmiaJDenEaLq8XqesNcNW5",
  "key18": "Kkr1NSsmnjzhEUQZR1urKokwZtUMK5FDgd3Z3ohmm7w6fuqqPrirs2rmtxmuCnszKmWApLLDRboZynYbcN426a8",
  "key19": "HqRUCZ3wFCZLu2sNKZgx5oHa46PQwi83ypm2rqBjyLurxLwfGbyd2bReMivxEwptw2qX5GRRVRmBkEWe2REMvz6",
  "key20": "62T1a24v93Gq9Pa8qRRczssst55FHsF7winduVR5wi3YmpZDJNj4hQ5jKXoCjgURfsjdoFRz4Yw2WpcWhbLo7Hsa",
  "key21": "57t8KJC6YkLojsY3QowK2p6UzX2bSoNSwaLBQu86gTnpR2fDxMkeuRugzcNtSpsM9YG5k8Nj6SjcArNuasvZ8n7r",
  "key22": "4uLpXXNptmA8efNWz9VbfmsKX2m5b7KJR55nKd6oBDK9F5QJg3cHnvh2RknG53hWRqx4goGV4RDu4ZTSYdkads6v",
  "key23": "5oqNNHTis1LzF23Ly6GBGt8ALAybHWRz4xBBHFMjjNCUnGPmUzyLcUtYpBLi6qo5wcDyNy45nJXMwhQC8t8H3HrZ",
  "key24": "5SxGuZXNMzy7zNTo3JvfrnYN8vPpVicpFN9TDFw5PonqBegHVPQAV31FCSvRNZb4CGrpevN7eRfJZjui815bxuh2",
  "key25": "yjKET1USmPZU49e6m7NmfYKFKbs8V7Jdru8PN2v9JouqDQGv9BzDqvS1Ao3zX4dF9cZFaLgUjS96ZdyVLrymVJo",
  "key26": "3s3r1E8jWB7yLq8hNGbxFX6PSX6X5WRNNuXS4GyjMTZtuZQMXuELRjZwYwe5rcqEjRw5n5MvaRqm3pfgAFrVYipX",
  "key27": "5XXNHAGZuUoj6ZdvqrR2qmC9vSvtsQT4bRCDLxKUxQeFoPojkR4rs1wSJdFGYN9FZK9mmcRBWeDsbuKt3y3wE3qv",
  "key28": "33gsfVJcJjqWqBKo5DME86oE8NFRNeXqd2mLRpd6yNsLWZAyi41DnJxpAfpN1a8A6S2Xy814kriF1SLQXTyWBTkJ",
  "key29": "2NLX6341moc6UhiYRnE4Hfm4iAGSV8DSAMuSPogdHJCWJanfVKVQPHohV9zBNzPLokhE8PjURL5d6U4Rs5Y4yqrX",
  "key30": "3eiMxUdPcQsgtfyTMovGBRMYfKiAG1qUMT9CHmWW1cYbBVJi7jz7eQdKk6vZcm5RQ9PzwEUUUJ8rwPMDmmC32Wup",
  "key31": "jARP8m8kMtEJBCyyq2bwdwpdQVsv4BUe4ShNLL9y3g37hWnyPEYj2cB3wA2eCrTSpizXWt7hLBo4m18amVQYk6S",
  "key32": "3juKG3jxBTv5uxhWcshznRfyrj53REjvtCL3mr8oE7fC5Hrm8pzvYLoRbsLQd7TkHNaDm8hJGi6Bf7psp6E62amW",
  "key33": "54bNSwQrhgQQ2bzaH15sMLsh6BJxZthMsbXFMoiarXTCHGpYq5PNipdTNKH3mB15q37kjxaF4Tz8WC9YNp9NJAys",
  "key34": "V8MrGGJFPt8nLHeQLQ8t2mgzT7Qm5osdRB9P6WWiU7vfLDMFm6cXgvN4BCECWVLXU4L9EWMsBcVTeVdxbJkAtMB",
  "key35": "52G1k4HFWVzyrcsDUYxPj82LeVGjWR7iTBBQMCKM6zxF1ux4abi5yYns7cEwiSYUX8GaW99S7DPnz6VkpPEa6qn2"
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
