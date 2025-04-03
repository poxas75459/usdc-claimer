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
    "2VckTdd4TNEL1EySk6anRAnEs7WUf8b34u5KTUzjZhz3Qq3uWQj9nmnBzkSBt7xYif5GGihT7i3MEKSpLZfA1XxB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nrDUhCnVjjimX8V5streRyh9GFZtPCoK8MMtb7F9sUVp1QUSkjFUFPJkCueKyqcjx4SEydMKacwyd6g8XwtwzBR",
  "key1": "W1PqHxw2XNexHrQYuzHxWX1rLVcKnPfMvb8wZGQZM97YEvXxh9jgqm7rBMi8nmWNJTTB8j3LUC6GB2kz7TsDyDh",
  "key2": "4tjzrxprYwzotijxFhzFxjBhcUiPSfYJ7k5bNTEysBqjimmsPwJNFFYH2NivL6jyUniCcyfUANssXetm9Vsf2EHK",
  "key3": "52Vrfg9fUvcTaNzosjNxzhxAUWzsJz8i4qPya34FZEnmhkV4XjEYGawdYkG1r6BdxzZtYuUedhQ94zYCZ4kEv4E1",
  "key4": "225zAjCdC4a9zX3Xxfqy42XSBJz3jAzAHS4KfZt2QWUQcBAN8jFNuJUiBcjFD8QETNU9cR8xgCPiVb7348sQBzsd",
  "key5": "faqFD2Dy5SX279jBFRd78grQq9tzA542vgpWfTjbbE4Px186jXaQw5KNpi6xtWiygeWiCPBH2QsRQajEMhr5af4",
  "key6": "2dZqYD3gDKNZkjJ5QmBntCnFcw1nMDd9hEAPomkWtAEkxDTJ5dkkKqtxqCUxPymQbQXdyzcbK3SJBxSESjy8apgf",
  "key7": "2CGjYvbKoFQEJhFwdb5y1YjcuAynFFn9b75RLaS27t3rhjinVhpqr35JyRAPevujcxjAVcr1H1WXkdQwZfi32ciS",
  "key8": "u9WDSyL63y4MNMtVz4ofwvVpkbxw5ia2C5rHBcxjEQJ76zX7bzaYMNTaqYk5YuBBijFMD3nGtdQwAbxkuc78nuT",
  "key9": "46f6sHDgfF3LU4Kg7t8sRHKu5gV63nYB2ZEcERKt7JrBYobg2y1QjBE77vEUMugatfbpBFfJ6tgX7zpSKrF6zM37",
  "key10": "2PDsNrYtcK36mFDoqZv9FBR11h4J8HLNy9j9gdd6rs4eBACgTM62D4uVuEPRsECrf9GcyHrfziahcVh4gv4ujnRJ",
  "key11": "2znz8M8AixdFm1LBRaLsdW4enBYCd6RHy3z2Xs1MBQSmx22QRFwmkvbiLEaXePs9z41v8wfu42xLkrpzh8QWYZqH",
  "key12": "5zHjwpf5dpaEbpLmzDaiaw8r5tEsSN3FkuTHFqVyNJLEUQyhqRTe9P99uYXeB8xgcbVRzGrzJWfWyPqKp3tJgxum",
  "key13": "4kgk5ebS1Y42xvkc56rC1BnpTm11ZHsMWkpi8gEkH8PYhzpEucuNophpKHCWYEobxwNb7EhgA7Sur7rge6iPHbC6",
  "key14": "3NE98iEZz4Z5FSdEK47bZVBk6qLx5MENMbndv1pZJbPe46hJkNN5Th1dKFgBEniPhjj7fogb6UoJHYDPr7o5dmCP",
  "key15": "64DrNNhi16meHiws7YQnfg8PAYLkaV2w1nsqtbwZivQnN7NzhFX2p27NbPrsr8W8juvhMtbBecUbxco68cMZiK8C",
  "key16": "4hgQmmU4YtRtEiSHBzkfDrJmaTzG5sKzCcT1xjy3zDDyKtpewyZshgmsdYvhmPx3VnDg4yNeX5y1B7iWVeYudUd5",
  "key17": "ihuykY27v8M3mia2uwQAnXsK6QRaTzJZPgLFiXqNkyLSzeGzq3J6PL6JGvjckMEJ5yiJhr4Qc3JdtsX5dq3atK7",
  "key18": "4tC4o31rQiyAFtYf3jPzQfjD8URd4XJXKBDGyZjtk3jZutrAbrW2c3QY3VkbtwF9KoxHkyAS4ahEj6fkqZBK5EJo",
  "key19": "5X4NU8zjSAwNqEWEcPYTza16dWWq5LRNRkQkKfAyM5vcUbysrRrBZm3YyUV9Ae6MChs3riHeaiFSpXbWHL9ugwAT",
  "key20": "3y15v3YxChyYyzQa9sy4mqTtsCQEf3f74CoyDa6am6yhEw24h5W15XkUnkYchbnniBjTMPpeRnAAwvrsrBoKaqFZ",
  "key21": "3bWsPvKKqUwVc1qqitH8i5wFb8aPnFUDE5YfmAkQzjWZD6Yymzva5GZrkTK1Ru5xRPFRzLjy7PhnUgG7frp6bEMk",
  "key22": "R5UGMLCveiHKqYPftvpTLWM9PmXQHGcRpgqBB9hJynD9egKX6aGGe9KpGTMgMbh53anNKicn1uH8GCdWNvEimJk",
  "key23": "2Gk24Hok2L9waM9ZHHgngr9yJQaWRen8LrXJZeWuSD2ZFSKLfm4ECrkZxdbE7Lo3GZxhaT8zsXznTA3YgWWcBpdN",
  "key24": "4RyRAdi7h4ZJyqBrGRYomjEumZJsGcsxDzXDptN9eUrov8mL7bViQ1iSNRtmU7fLf1wJVbFwmZN9G2AvAeWtuFGD",
  "key25": "uojDhhfMUh4D3QAu61xUeKssr2cfSLYM7Wkc4PjJziDtSRvMDpw8roz32WuTkadZyHeMhhDeNpdcWPJRGQxjbif",
  "key26": "35HCv7cnzkdgZ2vkvhRQj2FJYyR7YxfoTHL2qQjPmpj4BUtxv5qWpopkofCS6ePXub1naDr6qKvyan2n6F8E7NVb",
  "key27": "2y3a5nHVxP6jA7fhjYk5QdPZqh7vgx3Au6xaTnuNXEMJhgFjmgLZ7AwML6Q6xhEEnW8Tgkv7bqbZdDTgUjeHKsEk",
  "key28": "38vDB69483ZxRiyDPadLp8cdazpDAuV1bUZ45iRTUtM5qqzhwV9SVGP3iV7LRHom8yshDAzc67k2H2Bj4ZsZyE4u",
  "key29": "5YHb4RdPeV6ngt4TH7JbdAuctNjV6F3j3qpZDmiZuFnGxuWDuWjMzkrrMZqehywju4U2Byzx5yoYooN2JHz5tuzk",
  "key30": "3vGy8qGAMjhrqoty3ipbYmLcSQKf1RonsCpJgswU5jQPgCVfqGHykokhvoLQHd89JbwXgdgvbdx1jggjQDjtJxUi",
  "key31": "2ZkJSNX7U8J7nt9dXVwG8XWPYHxH3T2KQ6ADork7MCyZ9HJbA8x1UuyQvGg7ao23GX59tVXPNcnfK4soWnBYXZV",
  "key32": "216HydjKxCSsNo1wR5NhWDxK3LS6zna4ef6A1FviQQYujQetc3xb7ct1UZiZz5Bq29YbVaBaTKWmhtYWCrA6E8Td",
  "key33": "5cU1GeGmYAiS4A6TnDaYpchg8n8xKVB4bnbiFd6aoksVhm1cUece3d8zwGssvdv6rDmPiC3JTx2n8HFZgk7WAhiZ",
  "key34": "2CRtoJdrynRPGkN3CbDcVXUqWg3z3Wqf2NGe4Kx89QyGo5J7UR8SxCn8SnovdvjUuxpNqo8hdpbJVRbre7L2KkKz",
  "key35": "2XWRPmiixbSCF8hVTAShvz2mL6YAHLcSEK2prvtqAXhH9SHeVmShAe6f5ioPgd3ACzvK18v6AqdBzQ7jqNMX9h2U",
  "key36": "5rnZGYR1kHCXXi1PGWLEmNxeMpDi1eJAjMtseqNjuTakW3xkjgEYBmCKVqXuqtQbw4NnzmAnGFmrAhEqyZ2zsTPE",
  "key37": "vc8Biu9RAf59Dr1sWmmKbBfWF7Un2iKAWhMpNp5CcNKJkThDDMg3TxFMXczuqPvCyn93tZGUBrf4rtjZhAzaf4U",
  "key38": "3GfHCUdfNsR8FxsCTyvyZUirLrUN7N8n6y6Az4ShCuUicwiZXXuEANLpjA766VrkDbBaUXFnFGLAm9SySwUrthbR",
  "key39": "62Q4gpD3sKfLBMMJva3x5UrcpiTuk7fwarA75Pb14LpXTNhdwC7qzvUX4vgdRnvZUfpjd2eExQjBQXMn2KkapJXP",
  "key40": "2gp1XgRcwQ1Ja2ST9vAT8vabwL6ce97q9Q2jH6z5W9k2AzViAEsnFZFaZ4soU1CTVtQZuB1BvCcxFrA1dtgKWYxp",
  "key41": "5dTpCZy6H4Lv9NaeaftDK5SXwfZw734TXJVxuUdgW6rXndLDZuc272C9pyhi4wgjwp6S3wZgHBDDwhAU1y6f9pGb",
  "key42": "2G54X1eh2TNPwuE4oxU39Zt4GcSU1D7SLHpkDsahzQkmpaYtq9euLbsuaEsewDX1oiHWzhQ545XftZqHKXkMSfHT",
  "key43": "4P7J8TXKo2VuSwxYhSnPWmWJAKFkSa8qaY33yg5kQxCHxZQiUHXmNVzzUkegjeK6ZwD9HzSKJiJGdMmKpJiWsqNo",
  "key44": "2BYSbW9KmkbVeQkyD8NhdHFmapXdj6eek19g2MxToLeNvvpztJW2xNAtkGtH8JEHSQLbnFreqq9NWLCz1zPLvAcd"
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
