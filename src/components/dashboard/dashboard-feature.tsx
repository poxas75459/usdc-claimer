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
    "w6FJAAjwqD1F7EtZmnHTPJh2nV5KVto8Yqae7VNRv42ycxKsAw3ecESH3SHsh5yWdk2YuWChjWCQg5ZkMThEpu1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f2zNGf7AciQkSv7Zs8w9dqszUbV55daEqMeLhrJjCg6er8rtewfMe73wZGCMqFZkHHT2zxyzwNxfozoG6miRY6X",
  "key1": "eMVJqJVgCdesJYfZMrs2pd93J1jukgFHp7svPBkzABXdZrdyzKwBpFDakM6QF9ie9QxN316TAZVmLnoXHp7qB1N",
  "key2": "z9ws1GmM7HdhuZByArMaoQvdLM2s7bHyfzcAGLhho2R7LVfxfzL8ALUH2wDxafggnovLopCXuWRyfqX1aZqZoLC",
  "key3": "5xsSFo1tamVZKpZSCKAUL7avPghssWkeKzkHK9zyvibBzQAUtSpxFxzSLswDJE8khyn3uZYD9tbz5CnXZoknEeSP",
  "key4": "4ykyaZBHQ2NkKvkpfM8CRF4CVsYamEEi5pBbJvp2fPQa2PoHfS3tpZ9Zme23d81uJ73XgTgaEhzAPkjVzVxjUk7N",
  "key5": "2YkSzXKyy9sMciYvwkb5YCXQe8SLetvEPu2rjy2awF6NLhzGdNNT6sWxdeGHYdB4fYqu3Qyah9bHpMy7GZH5Hsxf",
  "key6": "4dCcHFtWhM6XGxNJiD8RKV4Jhe51KhKNZekrWZiQDQuTEQrmkPdrwZYA6DhVPbDJD2eYWEdzLBai8XBr5rwBZ8he",
  "key7": "5ZVQ35oRurj3VDReZqQz6K1PNk6HUfgTsu2w87pSpvie8hWa2pm94oMG8WMRYu7HqkxiZmKLehA7UwybS3KKyw2Z",
  "key8": "48M6qMbFHbM5JbskbTU5yZawH1cAB6s3BuWr7Jw8KVp8vkdc6z3dsc29kxyHpeiMzmkZzgEN13T9FUJgspGJsfar",
  "key9": "4RPWbPByBX6zsppCJVqgoNiwAAvuVrgu6dzcmHGFyNjqCjNBt92Nn49FEGbAYtYk5R6vMCVrfiXgd8cq3HE4iqW9",
  "key10": "5Yq9ZRxjoRPTTQBtG4SH84TmL5UWkiyFiqAoyNVMXVfFjesFeEwPJJPfq8CoTLo3oW3tA6jWq71Hdvi8VCyditEm",
  "key11": "4DejSy8k6nEW4JVErWK1GegxFcph8gpYT95am7ij5t5qKWfZa6g58N9FGMXV6Ewd9hKLPhhnbWZ5JNYRs8ytwKSP",
  "key12": "3pRt1C6o7MfPxxwxNByb9A3zes1PVP7rqWSiQqfte1hVoXPT6yV1FY4nXYauG4PW1gYmTEnyYCaFVqfdwf4FR5Ao",
  "key13": "4zj7Jq3ypYm1xNTYcxBk3RDqbVBDZy3ZFy4j1KGWtLQ1rXydWSJCFD4S1zhaWHJkqoHNLuM6RSqzsBRtWVwX9XBU",
  "key14": "3ZkQJhdgkJbAVaL1REXC2iNQhr5TP7rndCfDcd4VmXMMbpxqvxsy5om6abSUbQwyd75iFq82u3hoGPrXZcUcQinB",
  "key15": "3ptKWfV8N9KnFHSzzprG683ivHWE5LDjni6t4cLEVDfbccm5vFceRiAUSr9Mh9QS5P8FryjzMtwpqV5JEXwwZ7Vi",
  "key16": "3y3dQb1LzVPT4L8mF5E8ft3oLEiXxzsoMnzhNqHv73szNcnk9YHSerTKpCYwW1d2Y6zDuFhcHsMtwmsdtQxZUJwj",
  "key17": "5Rc94tCEvTEHcWT3JC23v36UUP6Z8zXEdFvDRiuPQV5ctw8mu2zD6dSdvdbhSK1ASiudBdBZAmpZurDfc971Lq5w",
  "key18": "Jkos5WbUhiz3te7ijKmzb2ed9utt4ATVGQ4QPjRfnYCmYNiPMnNiRXcSU9ewP8d7cMioZ7SdWiv8r5cLJE59QxE",
  "key19": "5V8gJWXrozUqf17zKb4KqCfrgUttH7B5NFk5mNuiBQ8Qp9rEEXJ92Yq7PVcgptNVgjSdu2G8XbX9MnUrE7yBH6HQ",
  "key20": "3iv2tfRjk2v5wkQjJuf76g3Kk1Vozv5MsSNrExsJL2jisFjHGQKW4MRtE7AXz4GMCP8ZXFi7BG43U9iPetCGm7Fc",
  "key21": "5RkT5y3bzhPASLtTMSYaUUHfzpj7cFAie4WsMCa7hCkGGQu17i7jhbCpim5kzKBgVsjHeSmNDJKsPuc8KnauuUSq",
  "key22": "pMLcBK3mLmXUNDE934CEaE38Jv9AWtpxvrT7jFoKJJVCBPP5zRKa6Wt5KEHhEWo8sExkZBfivhKSH79tBoDYWp3",
  "key23": "5mrtnLy2fjxxcWCjEHFuEWD9jecje6qrUgZHUJrVPoiGUzNfSfpwKZVdF7ZqQ94YpomnoZ6WnFu5zZY5F2aueKD4",
  "key24": "4UBr8nigJeKqiDb6KCisf3AJSC9eyJ65XeHwwzKuKnfnPu9qqhuZVgdGPZuu9v1MNLACQo1vmp6TgnH4YJy3Jv6t",
  "key25": "346vEGwGdSSi5t2dEBi1CyQjUKqPHHg2vrV1AKbTEnysgGnJpUs5riTebztwwSPXLpZUyZeGUbzw7jeuqJHpVXY1",
  "key26": "2dZqf6JCNGiXLexwCrKSHb8Jw52fjoycn7WGmhLE6ttLtGtWzC7hPKwjZ187iemPfMQC9eonu6m6iH38rGx14vvQ",
  "key27": "5RhEJ1wJZxNBSBxC4ThVRSE8MZZRWdSmVh3gMY2zaN7Tv8FV71QaEcBYm5qSsofNvQueS6hPXbKi7vNSvkaDv1Vg",
  "key28": "4uKWdxhG3NVYe8CaycBi9jTLeiJbAqADqTycahZftkj5tpvH9jAzEt7RiJvj7eYaEkPFzLHmpUH9y7GAaahqU9Ga",
  "key29": "5ayuotyCxxgJjrDcfsjcuEN15uqYwTK8sb771hmEaKKZGJpevWNdQjyMtvAgRccqH9y6Xq5JVGVmwZA827rxcyR1",
  "key30": "4fztATQutaxgTY65JSWwFFTr6wt7v184UYXXcHNGuQP1wJqjicx5eTuFNS9ypLpt8KYBunpZfo1YuJGtcsz3AWQv",
  "key31": "4n3wkA2UFcykKcwCnPmnrHUeY8X2LM14yQDAvWoMYcZnAmBVZBCepLrzrzaAxcucSQViRLDbb9BzuBHSyMR8UR1S",
  "key32": "5R2CeApWEip1mYYU8L6Z5kviSMB3NQ8CibZHdjj5BxnX9ZaVtSeUFV3VNM33c24cDGJ5DVcAVNJA3fSJhycsQxTv",
  "key33": "YBYWoLMm4NUccJG6NX2YwikdizEcJuobp59t1i7ZfrjHDkV5kQDvN4pDrGnSHyRF2QzHkQdYh1KuVZ3VeLBGWDf",
  "key34": "4WZ57YrYLP91TLWhaoev4xw5kWydin46jry7chbH2s3RACiWiRyE8qR5L62tingE7WupMQZkHZ1Y3GVsFthL4NiK",
  "key35": "ruj5vc8Mu7r1dp2KUxcZc42EpwMwuj2f2EL3UbMrWX8DwV2QZk7EwudquoJZXt8vx5oW9SGczux8h5fMhx6GfRc",
  "key36": "3Ffi5m6rNY2z8aMisGC6LsDXS9Np1194J2bJcg6czAxQR9vFvAkyE2sUu8Y77oXRPqi2FAr736VTS6uMXsg2oWfY",
  "key37": "4VSuCe4KyZpyuqTsb7E1khMzemGpzyrbmroyVyHc1LyGtcGuagMfRGYtprWiRyN1bQtN1xzutvKRmj3HGAHf5pdr",
  "key38": "5Gkz4qj8Ya7UBv9ahfyiK8HxK5UVqYi4DMzfJknLdRPgg1yaexqrEbebAiXV7x7UyusBQKAtrh2Wksd3t9kBiDYR",
  "key39": "4bjwTZf8rKeqVXEqr27UQTqt3EGfXvjGtg3jSzAs2i6GoAZintCrKp4Qum2mKaZq1oSSWGc1wBVVJgKFM9JGsoKf",
  "key40": "2NSW1q8ZD4tDwHUUPKp4MVTcpuz2mnZnsWEdewGELRkhgNp1XGpKAjsJtfjxvAgFuK7mE48pQJpWmDi7V5zNPD9F",
  "key41": "4y88UgYzipnGUoC1VDPieNoXp4spUUzzdWjbky4oMpq6FRuUcqxvkoR36zd8F891KUViRwfCfKJtoo9E2wnSz9h2"
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
