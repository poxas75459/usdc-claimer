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
    "5PGznggovQR7ERCuTozVXJxXsjq752Fi2g3s7vfDwPJGjBV2TzRiL2WqsfK5hwA5APJyUY2AhibrMw1V59Zy6TMp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GvsmUsJGLeSuDmbsqTp5TcLrYVoRoVi3STKzk4irTB3DXfcLo2cAd6UkZYpb7ufWKngs1XXwXtKsQp64ALWv9qj",
  "key1": "3Jb8w4FmiSCD4yAZ6xHxCWpq4BFPpJWN4WMULw4ytpV5UTpeWMsotPo6zJQGbPRVzJXoTGDyvky4Xr6XnedBiqmu",
  "key2": "3jFhQc48mC1oc4b2Lgb9EozCKgSX7tRGX94Qr4qYJozKddSc3T7GTGPrHihTssVvWd57maCFhnX3BbanPPeiXjq6",
  "key3": "2Vt2HUqa3pksvJ3dST7pb4QzYC19M2jsaX4D2LoasaCziUUZSWWK6ZiyV2fVZtZw1bZUo1pwfijeAnKaLLnncgag",
  "key4": "PwSrQvHQHKFXJa1jvWSRCx3zw14oXjQKN4Xzs2zqRojkAZpmj1CMaEHWg5jS9wYAibMpCzyKicXc1u9kyXzY8Pf",
  "key5": "3yK8DVmd9We1A5NYS3CkAUq8NKNwfD5kCv6QPPMGuXsvV9jRNzYS9HteaPkJCcQLFYks41L1MUMwmrCxAzjUJsCk",
  "key6": "4ZtEUgYWJHsnwUcY8ZWpaCqe9ZYrizmL9f79nzcw7FRchVcAJpTeJKiJ6GV92XnBwLewh4dHbmgrRVL898jskWNE",
  "key7": "tYKp5KakofHzuhqKfXKc33rB1LZkzoN5piKKSKUxRS5agYckZJZegdQtZrtdWhjRJXMQgpkRWa4wXqSyVuGEdQy",
  "key8": "t2fRkgu6gyP3nCj8Vp3CLS2VoJr13s4mzcs3XVua4sX7EjPUH9japJD4TtzuidmYpSVaufwvrfd2Yvf1gfAfPn4",
  "key9": "5eNQ8SorKZRnBUTQdkApZwhToKC6aNDxxJK6393AordKTVd2yFhYhSxs4w3u9nLr7gEKX2PgE6Ncju3mtjAzd3ff",
  "key10": "3KRLUwNJ3qYjARxNRUUfQzRBbVWbKduZaKhy4BRD5FjjWAwnc1DERmcKi2JLs4f4UbxChumAUDupXtux9NkY6HEz",
  "key11": "D6J3ayWfsrzxHd54KDVZxs4mJrDGtTeb2u3JpsvNMXKNDTPHeBtm2JFvuHytHxt1SQ8n5Hyvkh2Aa28gvuHeE7J",
  "key12": "3kz1cztmrzgXM36QewaDU9cqbKPdki2YgCBkY3uBc2tzJDeCNRg3WtdtomtVvcoYJvvpuT6Csfw95dLWKFcrKo9x",
  "key13": "4MLXp25D1QpASfrKpquzXy4UZZD41f6FdTperQpSEJWgquU336BkQ1AEm77gN6kfoFka3Us8z1xforbVKAAie8tk",
  "key14": "28GYWg4iQMNd5Lx3TqU1dk3651YPLw8m9UEGWobkSw8R7MHQsQPrKYBiMFoWTGfR3FMuLWBNyEWpZ5eFCFWK4vpt",
  "key15": "2Aj5YKASchM59eYPQ5doKyCv8ZKoDNk8QgntGcNuJcBgvHRdCPBQQfh4z9dvxNy3oCWJ3sChWXLQawHGZdUSfAXh",
  "key16": "5jt6s8RYMrWtN5pAJo4yBVy1FCaSfhEHP3CDHpRcufxqDE2EDVHef3NxpaLDXECWgiJJaw6pY5KPrLGiGe47Fswy",
  "key17": "4XwGjBmpPjHAJXMwdinmTnLDGfr5ycyN7gJwh21c46VFMMTDBDNcHo9W5QutmRsoVxccKSpLxB6A6QvafqhKDYw3",
  "key18": "2Wj2XqjtqpQFMqX4bCZqoPbBoyxtMXroSHW5HxAAYsa7ANcrZJAR4rN3T3veN3i6kGZzYFZMbXmeuzpT9DjG3UJZ",
  "key19": "2cjmo9mFUZN5LmCR1o4eSs3MxFmS4fsy5vgkZ8MGGUEpY8XEi8UydP9GeQZFRGhxLwu6PMeXHVRWiE1SCq8gUAbS",
  "key20": "QFdDjaLuDPCKrUx8Xb2xbtEeGrpMp7EWmZPa6r7VbRwM3CY6Sa78nzRRXoXt5JRZhiundH57zYU5t5MfE9kGdBF",
  "key21": "hwAe2rTAg9Dw1krMvLxWADK6Be3nZQ7JGTjhHFY8SZ8UQQi4K51aePfYyGe3GpkVRkEwVkJzTKVEvzMHkbnPF7R",
  "key22": "5xwg2YV6PgKnumyzSEzYdKwWitVkuSZCEBmpzVDs7bxmPRM5nyz8yefoZxtTRbyYM1hT1S9ygCKm3TKp2QjvPXqV",
  "key23": "2QowX6eUKrdzfnNeiNBhXBXs6mtCQcgxPPZ1SgeRqWAuNHEs1q1LQzv1NmgTKYyB55p51e16mdKkS3sF84b4toqm",
  "key24": "3goSneMVM4gMMHkeBfNg8i1dZW2mFvqGo2mF42djHCFTeKGF7APWGrkExzthPbAmKb35HhFEn5u67CtdeYtnUZRY",
  "key25": "41mqYjgAqd7WmxQaYAnxjt9DzZWD52k95ooBuWpe7sHixyBmBcrQq19aLidNfMNY8rnNbba9ZFgUkfp5ioenTDVt",
  "key26": "DH1BryUre6mzP51BkGKN2wcKYd3ddSB1wJwNKm3VgGt4T6mLy4UTPcjH51iNe2rMmAV2v4h6MujRkSgWuukWoo9",
  "key27": "3Qk55ZE6HZt8F5QwUpN5asiXB3Mpteu1kvZcygr4bPTE7hv82UbZgzSgbLhcD1RBkBq43MJ4z3Psyp3EB5K6frPf",
  "key28": "3Js82K9rJ98or4joWRy5fSdboGEhhW2U8xf7Lhkr9Ye3ZwjJPvKktbnfR66LeFxvN5kQc82ksNoVdo2jAyuLpMjz",
  "key29": "QReFA9cLk41Wr3woCW4dMiv7aDKVXfSWkRezSobH7uoFa49gmr7Udhub5dNKQE7sMHQarXxfMrp7awtbREyWbbj",
  "key30": "2jf85pZhoDLLjXKqb1wXHsQ1yxHnAwQo4zqzhxQByAbnUZr39o87GknSqgXhAjo4BVxFCKUdbKiLYFMtoFpF2aBu",
  "key31": "2zSbUunFP1XxH1PPoX2U8hq8mwaRzqjKrNtMhDGj1dhZtJ8giKgtJY6pU4zDE8gXDMKx6UY9bE4eUPPGxAwY5fqd",
  "key32": "5aMDWwZabi91GEQGhMNPg1T9CK1gsCR5g8Ry7nAzD3YvyimyLLZei12hocVt5PjLYM2MaF6tarsEBFXo3BwEBokF",
  "key33": "4433GqUsHWYxX8SYfy1v5kYXdfWtPgnv2BrwMZg4Y9yCmGa5JzmvABNwWWKv7tt2bZe1ygPqkPDPU9Wg3Fdxpxag",
  "key34": "4MrnkrEHQSWvWn7oP3fLbXTVX1cA44fPF4fiQ8rEmY6E2gf2vBJPeL2CxtwRTDjaDiGMAWojn2qk8cH5XYBvSaZ6",
  "key35": "2uXg1s94RXrvYPVsfh1ULry46HKkEXExPnGADstohHYTCpsyZVTMvWF632qWM2bU41PYFkYc6e35sScjJqe48hx6",
  "key36": "2PRXQ6uJor78qvTBz4cmMcNBNE2dMGFHjCMBga9phZ6q1XaCVf2TRRK2TeC6EBbftJp33BicRGQXCKPbx9qvewFP",
  "key37": "DyQWh71myvbhmqNEWbgQwrTmNngykUVYZhdXwdhUBKPnvNeEX98UPGjwXdsJeg4kR6mDXQ2tMS5uMfRKy3JCUa8",
  "key38": "3RpSTWHgZiYjR27nMB836yjZNRXDS2m2uddZoBrXHmsLqsxE2rG4qLQP5qorQ3YPy4gKuAqcj7gHCQmrXbthaoth",
  "key39": "5jmpeiMXexixsGQVBDgWM8AYigWYQZnhXU2bQ5Wa5VAFEYuCZjto8o4QBe7RrJdj2WcXmu31pTsWH1fDZ7rqdPsf",
  "key40": "5Kueq2Q81QoPv3HqaJE7HAX1ApqqsKFEduqZJMDCycS7YMjNWZpjbbED9dAxbuLnXKMGA4iFD4Q6oFXA8iytTKB8",
  "key41": "4VVzWTwVnvhAzT124Sn5QUNUpf8ofXEEK7pqbZfoSXpccCsfKnHridtUKAKLetQykHwuCtcSQs8rAzLUvm1YvhbQ",
  "key42": "EXskFmYuoGAr6g2ZYpzidsKJCzaVmWwiL1MzhniF4QawVm2WRXRoz3ppbJK3xp3ZpkwQZX5R9XYXh7tsip9JuvJ",
  "key43": "yGCEGhKHNHboHpzQ42DAbJ1bLeZB8Hz6Gdqh9gHgDDrYPmyPHNvuWBRXwyFuWt1SoUDbySezxCBVE6KV8HHwb8n",
  "key44": "3D8cazLQez1xwve7SzoATKQrAEC9F7sqVpoFfZFR5nJf8usytM5hcvFJsdDCfjdGsRNKXL9ypiiSGx2zm4MVHEiP",
  "key45": "VXWxV4Ts9wVQ18kXwcUwr8yLkkB1rW48veFA6o2NCxnD63XqbuRQY4wTp7iGuPzVwVJjJgNceX61hcoHuw26erx",
  "key46": "37tEMF8RGwCjRJTkTzXALned5NiDodDuw867qkLn1ZK4dzszwdJBkScb7JsGQ1RnYPc99Wmgqy8aNd5ghSC6xFBZ",
  "key47": "TXmTbEYPWR47bisSd1DwBQpbGrap7v465e9ZU7YtJHL43Dzjir7MG7qtKLXe7g7A87czbCq27Q6DDLsZt2rAApQ",
  "key48": "5ntEmKLwdnW2ijhC2GVFya6R1jg443kdEm8e28PR9HMSJwX5sA4GtbUVHRb2UUJbojq1nSkrndF7KP4EPzUdnQ2L"
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
