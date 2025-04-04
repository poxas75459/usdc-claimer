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
    "3wLsx7ppFXBCvrERN3NjBzxQEjVAfg3DusJ1GyDqehk8reRgSBHmPoXF91z1wg48B37tybJvXJW8kQBDpBpKsbLF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ynw4NHgWfTYL897ZCsv7xutfByLr1fG1UgR5jsXbastj9YGJe7rY97p4iG4rL4RBXGWVGRAgxYNjLJ11JicTwCy",
  "key1": "qppnme8ktxhSFWBgyVBxNZV4KkEmQyj7R3gwNdwJb66DidRXonuAds59JsusdKrtK78oJGVQC5yRdvSGFx7Zg4x",
  "key2": "5bndtJmSdepfX8JxGgsc6Ywaf6ye6rP1X3rUUie6Pw2btM7YXtJjShcLBf4YRX4tPvGLyCLirATzTZPKMZToY7yu",
  "key3": "3w6hBi1k4yhc79tTte1KsvcA7ZdeJUNPPRU4CZDeHLGMpMVCQ6fKf9QcDaSV34XMuXw4hKNHPxVGQZXTE2sAuteg",
  "key4": "Uvj2HoYPxF7h7vVks8DNaf2KjinLJmt7HubdWkLQDHEPpfH5HoSua3CAgTTB8PvmpuW1Qq6qJz8L9VfNJScQEWo",
  "key5": "3ej87juKLgwZh69VkYvhfTNArQQkjShWjCbnSGVD3KFNAeHNw5MrbKuozAaaSLExwFBR81RWymFP6D8Zy3HZe6HD",
  "key6": "GpojwoRSvxoXjdsQFAAsBxARTz4Bus4tRvFZc5upr3QSBSpWzCyYfJuu1pmDU5VPjsgBmKL3WKq2trtDfPKfFh6",
  "key7": "4WbKd7zXtftWDwjnRuwNf9sRR9JtQNoN8cAKoHuyorZdDqWoxJ1AeHh1qyzSHpDcsXCqVhakLUw8SSDsfB7rN7yC",
  "key8": "26WUPKN7hx5yTFxcC24oSd96McZgFjyso1ogo2fygJeiDHnJv3sJmNLuMKzqH6kpQTnQfrzzseHaqbyP5SusvWfA",
  "key9": "27nQucLL4zHBNySE4UUppowscU7DJc61y1AhPbQPcrYLWrvSAAaAFRjUPbgkvbjuKAJ1eUxpGKhUjFYxUQLY2QKC",
  "key10": "26xfVe4JPfLkRqrhgRA6v24eqnXJV6AWMS9BWCwYhb7Rao84c6xE4bU8gr8GybwSjMqePs4ZH58FCG8ZWyCJHaik",
  "key11": "a76iZa7gKaBkXAT4nn5PL3NdJ6zSANbjAyBpmsGL8qHEJT9Dy3stCSuYJwbVNy5e9AxeKNu6JKXYYSRjkE6GQvo",
  "key12": "5hYnYTasgPNEoy7qV9EqUBZJWZBkaQoaHGEevEdJLKBASFjC8PEPcDoNupXrqVYWRTXg4o6fErUBpBRLBYJ6jrX9",
  "key13": "4dP12szhVKjU9oZLMjGzkLDtw6fPumgwodbbucdsDTHbG88pnVxpeGN2PzuJi853azHUokHNCGbSG6xznUqxdNh8",
  "key14": "5mEp6c4BavcXRoMzaq9beELmoyigU1y1Z57waSmuKkaAUfz7YTfSzqMDYkKZkTAsfp4PSZQ94oEnMeWPFSxE87ZJ",
  "key15": "5z5VHhu89Fud9KedxATVJk8pMEw2adq54HU2ogUd8WnWUhFUc6XL3Kb9L5QB5R4gmxWvzreBtrHGWEvp1bCjwSRc",
  "key16": "5HZFgTmfWsayPGzycTNyVJKRRnKXk1yB9YrRHjzEityGmya2nMVXnvJd5LaXWaVQUVuXfxpK4juYy5MGWEes2erW",
  "key17": "3MeJGWTU6s5G97frTYniZXXEDduKysWeaYgEN4J12LmCmCCT8EGqhEbhBJjhxDsCrhSEZJkJ6hdUGaw6NiCm2dD5",
  "key18": "3ziHGbs1zRt4hCkHTnVHiux2K1Bgb31vUAxQjkuEjvnRrHEwa1SRntghv1Bj7V6z1M17uArCQyXNVk8Ni8Y9BgcL",
  "key19": "5FtiKMfuLncsSKwQTQJ6ZskquhN1TPCmuSQFMzv4opPa6ozuvzAJCBSZRrrGkvZHaxWccQ8jhkUDWSxds3hB8ZzF",
  "key20": "5dyVNVShMokQUm5tGMQUKkHEL7YeBdNg21tXNB8zNxTdyLT9TqJd5VaPVLUHnComKNRb2g8iia5qJd1F9zHhWxhj",
  "key21": "487U4RwrWacdoxheUSp9UX54DaKMyqWU7HYaMmp3uoinLNLnWhU24fvqpkS86o6DYbyXVMoQLwiFwJr4QCrCQLR5",
  "key22": "3mkCWD9x8dUBTPJ1dUDTr9k464QMtDpnbJKT67q8bQmNhKEhqry64zePBkfoicA4dXyVYZrzYwxVv1gDGSWXdtYT",
  "key23": "4qaqHr7z5YFpSTMHAfffvTdVf5bnARFvCUwDfonjP1GPAwmo8Cq1hAMVm4oaH6ACuD7CAjbX9fbBGhBj1xxHnJW3",
  "key24": "5QMQh4p1WBXct3kaFhj7Tm8tvejHduxG2dNe5ozfRPixrvxir7HVvJBPLqNLGkC1gjxvoyHesFVteXicNNyjubvZ",
  "key25": "2ksUfszkR42YSkG6rMVK9k1x3Z56gVXpR6GxuoH1BPDfbqYTixkm34hrKFSmkDsXiZGLS4UQX4VFzJwosqUmeee3",
  "key26": "2ShfpryBVfJKwpP1RzSt42tc3vzAKYQrXEd6dtCunWzicUVB3Pc8CEjHhqgmLgMpjnYVJXw5MeqZAzNPdPgenVYw",
  "key27": "4jpuJUqaAikQivbAKqzg15VPtW2uckuecjwWd6sbXaDCJEGRfC76Mye8N8Fx42yo25ffpDJwFuu3BmS3uANPEwU8",
  "key28": "4F1yZnPRdVniKUPfJfetzbKeGqPBoBQPJmQR5pRQyq357sMrL4HS96EyWb4Et3wLaqtKnrqXQNXWE4jh4znzV753",
  "key29": "3b5xV9cjvQEajcdQhGkoFHz4GD9iaxhuvpMVeeQKsBHBoboQuUSmrHgaTKv5UBkPXkUkQCLu5FZM7jf1jdYv5zZK",
  "key30": "4V7YnhUJVRk9aqDAbZmqz2ytyDTFFe83XZm2aXRieYFMirTBY5QN6SdgTgLmHDSbxLFNREKr6Br3jTJ47gAjw5iy",
  "key31": "2dQnDUWfPBVTJHkNgBMR8oy79iAuvDhsPGtQ6swtTkU1BxPbGmaz6q7WRyJop7SpkHd5BNzxz7ut1ktLX5tP9nVz",
  "key32": "2jwB51DpA1TeFZMyS8JHtLoLnjRC2dCkZC1ZfFwrWG2DhGQVWwpmPqrWztszN93ug2j1WhVq3KV8gYoPh6t5KxTK",
  "key33": "3FZDGCcFv7BZ62SkKLAc8UnCTxq4rKztDawRP1JKMLCauvgdRcSdLPJrByMveyYR6i9NfQxXg3Fj7GAEHgN5udEC",
  "key34": "2SPHyEAdFXkvyqdopF3sfiVPXe47QLQv856qZ3z1ZbSQiSXonhR3kgPzxHYA8QcVBU49PZ837mBnVHJUtUdYFGEC",
  "key35": "3qXSE8UQCqXpGt5sWPJUv3Cs1iSPrAR6JNqKn8YzxtZfLhCBwfrmgMNQoajpsjbFqvaxvJZ7T874ye4ah9oLrcpw",
  "key36": "Xz7SB9kcr9XnP6Kpty8uDoydbquPUaiV5aZu2qZ5sMRTBk7he4Pmj7UUGdUNbCFqDcQKaJmVQpvte5Kz7dTMJsJ",
  "key37": "2c8KQ4uqvRxsQ2E6yDwAVqb91ZQ4iHEjBr2wNyYtPCp95ULHXxYdkstdSuiVJvTka5YR1JUfsys4byDvrqB96mjZ",
  "key38": "2B4tAw7s3BiJ4wrPSXABQcNncapPhpRSkD7pvBGFupX6jg8ZU12s7CFFdTNGmGb52q7MkjwyxC8uvpDFLJopP3aP",
  "key39": "4S12quy75Q9qqDMYrBYsuYNhYApC1MJrUXo9rcB78JtFRz2gVNXJBCrCGmGbFPtjAaGYeneSFBQ9ReDxcggvvBwz",
  "key40": "3X8Cvvo9kocGJxAZVCxUTMPZB9QoBf9TFxWdgaDoQYjvHTVKbcWFXiMQuDBVbKKkroc331F4f5Rvdr5qWYPEipdL",
  "key41": "3Hb2xuvLzZi7nKhELLRt5vRbtYHjzdWrtMCaUJT2KMk6aEn66o2cyKonBZwPf2TFR6qziucLmeePmuWSHkYiewhS",
  "key42": "4sqqRmi6EL95CaBmTsYrdNX9wnU4cZeHLQygqTK1C93j5bY9eb7RzRpYEuCaGCsgYoXqQHgeG5QANUAyzms9BdPF",
  "key43": "26ytdVrHJmJfEPvFtJNJpjwZ8bEPitu3Fbagg2MiyGiwSNhoEsxV6gfYtMQxZJppqK7oXAph4MDtbifm3pAtazKH"
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
