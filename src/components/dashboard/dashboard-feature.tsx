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
    "327hqZkpbuH8LrtBJC7nz8djE1f8YKg44sYn5jCxYYiSTMMEyPzBXVs6ybQRfDdbsigwFqjYNBE1zponrYWKjcss"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EpYENKfgp7R3zvZWzrJrrofA1Rugg1xip3YEm2Dokf1PHn4i9V2q7RMBKKJQKoWpb75Dh4FuXpQnncK2YVqUbcj",
  "key1": "5kpia89MjdahK8STdUX8ESNAQuwAKfmjFevdjaZXCjNhaazoFoAnTsQ4xo2rKwuJQc8HJA6BC1ZVAQkAXrNpETFh",
  "key2": "S5L4rb7iE9tG8RdzmRN4njArUmfJZS9eXmsUQu8DrFhqwWnxTpw9ubfLu8uWXZB5oT6okEkWyfr8kkzaR2xGBeZ",
  "key3": "x6LDGGjvYUUzP1RL4zqbVogf4qo2QPVh2PNAPeGDpyRYPwxPQp61UDJuvLDT5Vsh4M1PdeHwJ6kWDnJ34uLnimh",
  "key4": "2FfjiocTqAxsiTXNtyLcNZHFi2aonBXMERpSE2V8h58Qko5u8NwNB423a4P6ipNAX39WHCBsehk5hK8585dnCyWN",
  "key5": "3WJ7U8Dm6Qa7xbfS6A5GbCDMFESG21ej9ESK9dbcjJ34ibDWAGEEPsu3VzPyjw4dHCcKK7KSmn17FQP5MgamqAm",
  "key6": "yU4EniHyeidAPtxFetBG9GEw6DxVijks5hv8y61iTdCFmySTauEezQzm9Vp7XWrV4gLP1dVVKzuvpekHrYPYrew",
  "key7": "624SQmFpts3eyBBpwSrzdumWV3GsDkivWdXCYwcDFG5HqiDYtHk32ZdLB1g82Hv4frT4Wb7ZaJgSqkioVReE4UJ4",
  "key8": "3y4aQVeJ9C5zRi5UXhBZxXipZ6hchGEdAv8rjJ2WjdKSD1B6XfAGYzGovTCBEt33hJMUS4YjtnE2GfKvtNdRyy39",
  "key9": "4UPSXfehjuz7TuvWZ9mQ8CB9fEf4SYyLXsrk6S6MVj2TuX2sxvYuS48Jp7t3bKjfF2fXyCUGYFpYgPU5HiMGvVGy",
  "key10": "4JUAMbj8K3CmtVSqremZSpGKmdGU4MnyecPCiCx4QqXzQAgsbCHh7H1qQLRaXm7JuZqzhXkn7nQ4ZSSZ7bpmS28U",
  "key11": "39fy99BnetXMLFRynnor3Wdhh3CQSmvVaQguuuRFgjUb8KAf4eKMd1uT3PVypRBfauHRHb6Mfto54uocbyofaUMC",
  "key12": "3xgRWvnAqPQkGQ4ATovRYThdwVcg5TYJxgWAefuEDmbU5bz3Ld1ejRVipWorW7Dd958iPgAwrXquAh2RqqAoFh7f",
  "key13": "5NHb6kExLB8ffdBjXaPdixJPbUYLE8W4Qe87PgBWHs4uiUTVzUkHPTvZ9imPUScRuYBxC7uAj2iFiNgqkGHmAr9Z",
  "key14": "4RkoYjxq42m5sSh6rGiBY8dxGDKCpX3m7WQAJUN8MnNh1qEHagQvu4aH7BLSA9AzeQ4cw1zuo8mtBnmyr6udizvj",
  "key15": "qVXmCjFz7J4UQe3uUYG4cp3n2J7sTMVMcjbKyaU7ChzL4Ec4cwK38UkmLx8Rqp3TcVhdPUTKYJoQ3v38TsUqsD6",
  "key16": "2rpYX1eZG86trjjqLnT6cn8GppgrrFuz9ZWkeUSNwUHDJwZPZsQyEc71Xg8ikrHRvZ1UrZc6ceJpMW2yo2zX6sS9",
  "key17": "3LoGdoYCwhMscNWZibSLEXZk9e4eaz48ZZQ4dtDQp4jQXkthZXCcQsAU3aFeNRqaTK3GQHFhg2cmthfnxPPZpvpH",
  "key18": "23YJ3xYGyDPb7Jmz5AGSSsEehqEWxQ993jQEYxYxxFv2JVG89kph3Wm8dUBb9YJE6eryjqgS1a1eEeiGpFR5qw1u",
  "key19": "4XMjyYTC8PMsGJ4tX972KFovND67BFut4CNghdvAFfab8h5hfBFNMbUDxUKmf8KyxpEmnDFhSMrMTYyZ1AgTg6VD",
  "key20": "5WLz2DWtE3xHBx3WAHtu2UZaKDwYvB6ffq9xr5MqE4Ky4Y6usGcWdtq4NYWjNuGgYKtzNDHoaquvZRTY5beoKgSE",
  "key21": "8fpUrEcCqtkDMso9GYgt3ND7rjfn3EbYSXQ5Tm5ork7TwgByDanwxijuXpcDNubvixq4kyatNW2zumnTysRHsjd",
  "key22": "35TEyCc5PpB9VXNyqy4MXWhnNxpK5UCp6gD3ajGyhvJWabUM5SCnVGs76MNQru2BSrfuTBquFuJmiTUzbNcH46S9",
  "key23": "5LfCRzNMDAQG5Bjbznq4dXjvyXvyUuNpMYw3FT2vrPAZzgTw4vG3ieKvouedD1VFCCHUCBVJ3WSWJ4hXchvcuR4J",
  "key24": "KnQaXhgCcP4rM3LyDY1dQXtu5atNi3sKxn9aVhAS3CMAaBoPehudJJmnncXdP9yDJ4rstrF9XXuJiwGjDU27VFc",
  "key25": "3L8hCfjLY9k5cfoRhMx4oVw2YwffVmG3NQFCf3utBszCTfoaeYfLt76kcRsbePbeEBGMB4pSmsJvKSyp4BM3jpYH",
  "key26": "2b9PSjPyCi19t2qGYcC6xV517BZ5FCrJLPq3NCtEEduC3v1Gj6ySpA8FCQKaGd2G129yXwCAk5zeqTjqJsHMeKPR",
  "key27": "55XzNFsBJi97L69ZKnCy1pPrpFK2DtARk28kJgEYazBTWMGFuN2fqqZuBjNTxmSLHgyXitQYUqRWYgTrDTRHRUQr",
  "key28": "4Mf5MLwNbZL6tF44vhWDFyoE2r4pKN6kmWp9cbhmQehzjCCizFaoQbCVV4XQ7q2T669D2DuWHVSoFy68pdzkr1Ek",
  "key29": "3nTK3e86nLpyqU3WjPPkJDP4FDmX9JCmYiseqEWM6Ea4nwBZNFJyqhjcTDWspjEq2sknSRtrYF9nLEjzwLG9q1Hh",
  "key30": "SieVQyPykXcniB5hSJtbFwTC86c77pWDMJA7gJDaFMojngy3bkNcfuNkRAzkNqaMned95zsGrT1hoeSfLczCPMg",
  "key31": "5oAA6dk5HyaWLcgFNzJoYjXGyf7BuVGBPynANSBw5cW1jBxqNphoP4ZNR8Fuy1dC4htWrn26cmTef2ibAoRa2qVb",
  "key32": "4oBUTh46K3iadvtAkTqV5afcBTVE2oDghzNGMjAoMc4rykyA6GNeVtfGkznU1WeFNq91bMpT8PxVJbWLZnDApesT",
  "key33": "D7uWADMyv8kfrDFJb7T9cwSSSzZQQ6jNqQ4tDx9eNvAVpoN2F52WZ92MRWRuMxn6EPxDpRToVt68WxWByJK5NrN",
  "key34": "36KDUZuZ7Nk4frVgvZNcJZLMtvwUWbhaHdYXEXHn3RX7RQmtF3UnxKUrr5GZLosKnqHXtSjm6FmC84fn7xvetZpe",
  "key35": "5GpYwHYUtc2XqUNBcX4f67JqHyaGxtRK8pjKoSfP7ZT4JxFJWXD3E4irNaUDfReHnvUjuqAQLdgy36U48KanQNWL",
  "key36": "bDTzyoGLwvpaS2qFTvUAMRrUKBAsp7ni6kjCenGrkWqESqPpvu8UaonQTiVoTUZPWAd1qj8qCZtmbebBiBDzPWW",
  "key37": "5zrh1dfm43JAGNo7qwQNH7nbEjhdps8VihUaJiRcRDWhYbwi6ridtkVNVss6Qye2uVZ1PSmUFFtS8sNdURvjX3zZ",
  "key38": "Kqt7A2JdiFPSyiRWph6pJG3xZNYrzN4RL2Amo1ksdt1hLm9Vxms2NSGcV6TqYD9SYX3skdbmwPUSJBzMawvSx2f",
  "key39": "2JNTp3zDt41t6YdXsXQFrSUjgj54wB9XPdE27nxNVqEbgEAfpYwvATiCCvQ7QQFnxH8G6f79zEskp6bGbPcq7HV4",
  "key40": "3NVtMcewWzzrvLLFV1TcaKNqY5DLraVWUxbKVQmnkRuUDXQnpuC9cg4QAoMGVCYRC1LWK84bJfk2QCJJ6Ti1YdEZ",
  "key41": "2StCEkzuRn78XUi5BACQmUezQKPYJ6SKTW1zidvv2DYxgVJsndEkbjdbRmLx7VzSRKwsG1sGk7UmsCGqumBuvBeY",
  "key42": "2nUvhxShrNYzBDHanXWp8AkboYX4xeJnSX7WiTwgoraL6dEhCXXSMn837iVhZTcJR8uGJytE4bUCt1zNJMQakK7e",
  "key43": "3dQxwtPSwdZaP86zjsxiST6EpJfbGB31FdQudVCroTHak6v5bQ9tYGWbLmHa81EGxosjFKEBTYYPw6fW5fmnpDzu"
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
