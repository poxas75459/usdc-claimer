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
    "nWpi8Ptd8Q4zZcQYh2uBJ8Le3S9hmxyEsmZ5qus8JqWwL5PpBqjtGP8LpKrUzCY1sddD3eGtGnNBwSuTPhNYNtp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27Yda2meNX6EQyXqntoKb5oeQL3Avnfnc5hBKKmkNQMjJxsW4kZbfkpZ5KHZTREQhFLMDQJivBX8BTXdc6yzW8KU",
  "key1": "3EmF63HA9gpL3GmUFS4Bwy1ifCGwzir22Kcc7maoRiU8VhsDW29G17zU5kkazbx6NnoCMCZ4gufRfi5fPD5w4qwh",
  "key2": "3e1ry8MH6YxJbmkcaPqmFdQ8eCx39aES25twQhzSY5Cioqp8d6wEn9S9iZKvbmdrbBYpYf6Xaounsr64o5dVbPvM",
  "key3": "2mtxE859gmCgSrZ4ASCUVJTbKhBMdRqpd8P85NUdamvh94gd3ZhmqBeBa1gkibC6UhehTrxGxneEpin17qsY1JrG",
  "key4": "4nZ7ML7R66DeCAHNXEDS72VUGHNiWsHBqrFPbRzg8ir4Ronyqoe925EebiGoXtREci8mKjSiFYr5PoJbS1B8AZQU",
  "key5": "k9i7zrYjTHZCpPJ711UQKn1XWfBCsWSUThUy6g5kc4Gn2dnghRue2zVQ62c7AUSFwdjcWW6Cmzw2gqrvvuacPbd",
  "key6": "4TdVd3ZFPyn6B9b7uF89xzgh7a2uRUBPZbjAEHQCz7C96FyMMx1GVeCYU8tbQHyedyGyE2nM2cAkXugKRgKSogx",
  "key7": "2jGHPj1hezdBcGa6g6gbFApjVZ14f8Ra9kz2ogmfLV9JN6ek9Hm5RxyrKzxvmWu53UDaxDj7pM6QfLzNuYdiWAo5",
  "key8": "4ofRticehpmK632fKdoM4Cdy13FLMQEhrSqQJwNMEu9FfQiZfG7FWSnmb7UKAhDFQHL64PnLDyCkhyuERiwMGrzZ",
  "key9": "ivRkXrqejQ9qr8E2kbdpcoqkXeFbuYTp6L1A76mUC7YVxx9hofSjnLdAME5e35M5gYMHB9aYbTumyxRjdZeVWcB",
  "key10": "2cENcDn58NmZ8zA1W7UZvfZzMVyeQVc8awwK4BrxyDjZfUNHDg7q2nxNvud6srSjKGDgg8ix2WQQ7WV4vZtgx1LR",
  "key11": "41GqfZtDDPxffFfJ3Mziix9tRMrb4eER7YuksTeqXNVR2DYUMEvbKu35X5k55mtWsnDrcNMSdnbTRWqRYTTZWySn",
  "key12": "5Gwn97Jiujdiv5eSXh5fxajmoNexvHGiZLU6FcA8iABb8o2abho3fxxbrgXUHtYBWRixH9HTAArRYuSrZEG1Abpx",
  "key13": "2FEN6vXPKbBh32iDZmvVkLAuuKropPUfe9AWXVVYgQJCFZXpqSmqcxiKWCishvExYHRKiAFsYebjH1jLPegrFgbf",
  "key14": "5BbcRbyMwgA3ZQKes2Ru1ieTMovgDjBYPaTT5je56xjeb9Upsyt93N1akzdvztqgQjBVYcj4yGnbUNcNUxZEXuhk",
  "key15": "GAtc2eSwfb89TPXPu4syAhu97PyGBnXSmYs9K5rVvoxWve3tTmuSZVmE7hZtQ7R5puFeFV9ohFJDP7kwQNyFiG4",
  "key16": "5kNTazvuzKi5XPrBCakzf8TvyGDMmoM2zSP7FN7xUxDmQxGUN8dcprKW1t2zmCb5hRepaqMjRopTiESri4FGjFaj",
  "key17": "2tjY5vkSCHHGx8o4iqMcgVRoEqzCAjnxSFcZ7oF81zSPqThhABQGs2BkkFSkQ4WhJEvcXVfg7nTphc6NJSR3UcVV",
  "key18": "4yNXG24DoB6c9WcDnPKfL74LZZPHnxc6k2MPF69155eXoQQMj8JJfH3GGFHbEjPsQMxegeb7AYqD8ptpYT44pmi6",
  "key19": "4mVd88iTUJQfBAPCMQJmpPhhxWgb1DfBG8HVHGGBDRUamozuwGSHDhnqyMBZG52VbXeTkC6NUAx1DK7QTF9U2V8q",
  "key20": "QZ7EYPAUsHV6ud3FTFCdcqWXMjn1ikkZP2JHSAcLGFwS3nB6hkHsziNinwNwYfrTqHCpLp6wt2He3FgoNaaajmx",
  "key21": "4pBp6F9BKDDSdMo9KT611by4RXeCBooey9fmAYmWsVeLAxfH8NE5pv7MDckzEhhhZATE4rxUEuzm75dqLn4CkKYi",
  "key22": "3A58CvgxDUb4dfJmae7GNWb9jdyZWRiP5ncX6HsW5PdJRkJPcnhFsZxnmJCBesm8hAMpbi7HqPm4Zj1QnMb8ndDx",
  "key23": "NYsm1ybqcdfnRg89UEmvcH1L7SvADBquCVZi4asKcH4RCCpHLoohuKY6kKcPv8PKERtBjVgxAz3pUk642hoaB1D",
  "key24": "548zPttWSY3mBao1HUpcAsjWgWXjW9xYFqM8b3mSwnT8ggmckBbSMXGViVQtaBu1359suAoV7tJAjiJ6P1XDncq1",
  "key25": "57i4Kys1gWf4De3rqUqAgNAsR5sd51fGipYwbzrLa6k6TdNvGb7uCoKHegkdJCyBun9JuenPD9Ukzwx7jC1vA9wm",
  "key26": "3cLDNCbAb6e8nDC9cxTLhbMqUtSDxr6FvFPupMAzHBHvcsFaNrRRU6FswucAzujc1uXiPThCMU994pLbDWEvrMKz",
  "key27": "26m87qwv816HkSoXwtxJX6oQGpBMzqxaNFgMDrYn6h27o3x5gBefjRQCiofcDQHmWnsYce3HZEwqXYQFeTDHLqtt",
  "key28": "4MQ7T1qhvmPpADUetgDcfPghrXA6mhyGxo5nFaY5Dw5y36cEodAmKhKrY3CkqxUQ4kjNkYwBH79Lga6pRYJSnMMg",
  "key29": "5URMMLFscW1tTsF62nYTrUQAGPCQAvduD3spZEGJbBDSWU1q4q23iC6Lv5ekSkyA1pGzzTVGWvqjeuXNurKureCt",
  "key30": "5e7xFFFkT47fyTmWijegA38kjRmze5xH1qzEF8qNmK7dVR4WBRsJMoLPSJ2zqLHqdPVPtknQ7C7r54LSgahMHUFz",
  "key31": "5pqxGCyfnqoLHapRA4xWKvWB1uWPhAWpEeT53i5CDuwUuPM8SMpCahb83TV5jeg3oHDLwrSVU7DsKdbNTqazJf8U",
  "key32": "5z8J3z4zckTGNiCxMC1Q5TWd4V6ke33YiGMPUU8irAfABdjtcayzhUfXz3bi6VqG3veztqhcgwXP9bRv4uZ8xWsb",
  "key33": "2ccE5MnegUWRYxyJXpgFUq3TCuBNyKNy5FoNVr2mN23MGXoDqfCMdxsg2e6s2d5CN3MRu5YQUuYB1Qp2gQNraPes",
  "key34": "3FKxpokx52kKdf427JqRjErehsYqVZ389ouubkffwEY28d5cCPfErqyqSG45f1mQapbK8LgszP6o4s8Ffj6v3NGt",
  "key35": "2WoWeVHVnj2QVA7zKoRAdycnFJqtHkY74mkSedFRChKiApzACV2rQrh5Y1CXBQCABq7QBweG2cK4hf9gNB954XTX",
  "key36": "2MaprXvJF7iVM99WAZidUTKL22UMB7dyXXay88QhPdL4xKGMoty8G3AwA3bnmQeFv33dspGF4qZxpXrEaTa6mAUY",
  "key37": "31bP6fYJTZmXu6TvY8sxWCiJ9dgcMy7REaVWbs8Gi4NJAwQsb2mkKppo35zNJwB6jsZZuUgYC5v8g3wTZFCgDxvm",
  "key38": "3xfk9Yp5wBPeKXdo3BvwCoV5dWeuiksh24ktLpKnsbZUMshezipDzm41aEaCsoiajinmCb7NwUbjoHtRcg95EsSc",
  "key39": "783UoRmoqoFfoULKRTc1tN6R7fZTzS5xu2PfDgoAAhBuj5mgv4E6U3Yjzz7qKsMTiCxzjbkgVT3roDPXRP4sQyt",
  "key40": "5p63TBVoCPCQKRub1kenuXg24YahRgHYsW9QTZ727f3cXdveibwhXpPbzJCwa32cJcv99kmZLQKYVPWCnBHvUV55",
  "key41": "7Evcfg49g2VTGiuD87ECd4sRLyoLKRiDkUfV36wXJwpw68hR5dXiwVPG7k2kdUG85E9ssrxWSUssMkZtunJKZDR"
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
