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
    "3Ksxt2WjqCGxN8sQP2QCHjuBx86MgLBXKCz2TKdpfea57B3dBMy8YbAyHky7H4iGSnxbgWhY5JFdQtxtXpGULDiT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dFzJVqGuWioGRteQwcCegvntNubssXZMMKAcDoKsDXkDqKxJuKzxQbua6jyJBjhkAfaTke8Yp8MnJCYQHo5tnNw",
  "key1": "45i1m2tw76BW6EVRSiiK4YR5erKKT1peAsAmmCQkggbRkJeVPydC7M7m3YbqCUzXUSuqMUnrBUFpr99gopXpbvwV",
  "key2": "2ieZgr3vZPuYGsL751yzJXTHxAYXr6XctHmuB7CKR3p1hZg9u1UXEK7FZck2XHCKztzAZaVMKcYCaHFkXkkjokJ",
  "key3": "4ThfSbucb7VjbYBWSw14yEuwHqPGvrEYgikcicbe6tJSBb1sNzaZxTsYrgBKh75DHgDwEZcmDCgvUDsgaQGcR4R3",
  "key4": "4jSyGEt5uECvNBmSkej9MMvACTU1gDMKnCv1eAiQikZsXLSaT33cCSCFdTNHXrbru58tojFge7Jp3eT4azzFyWD5",
  "key5": "3EARK9pXTjJUZWRD4ZVk4SbLbjQnAA2VjcGsK9hcL197eZL3LY2xJoTjMA1rpGY6RHccEhxjuL3o44NQdDrtu5UN",
  "key6": "2guMSPkvBYSWTPctQ6pCwL75rPBSJq8BioEQzghE3UoaCgoESbVvbPSEEVHJX2vJToLKYY9ikm6NC1ciu6PzEArx",
  "key7": "2zRtS4wZHAW2RqsG8ZBbuChJs8Qy9gpJ38B8AzpeFA1JPC5g7Cf7YcoakqXyzRB3jtqXkDKQ1tdKNM7mb3qfEqU",
  "key8": "33jHZrgoZMJXyicpmLfsep77A9Y54beYf3P5AyhzSkgHjN4eqCbp3XuBxfCutFNUpfgNL6o4aE8Vw8DKCZKTTXsS",
  "key9": "4xf58feKyY58JZrAyfyFuQyPUzCTDKsswVH6NVE8YGP1kxxfeQ1M8QfAPdoUd7Y4SAM7RtPrw4hhsnRxK5eevbqx",
  "key10": "YeN9t1ESk83682oQT5h1kWt3sqHRgqixyaG1QNbPo9RBw3N4g1WbwEEGpomcZCfpGEBDB42V7KrKMQ98N9vaUGk",
  "key11": "2bByAQGpjDyxchacDwcYdxmSSgHqcDJP2Gpws8u1fVTARsWrhFQtX3sh6L64vTpMVLpdBYWMYfwQP3ExP34iWUat",
  "key12": "3zsyUb8nr4UZ3U7to1QCLwmr5tvxKvJbL6h1xim4zCxBsLH3NZnMx5wtKGfCxxmSsM6obH1J9AqD43Z7spjk2ZEw",
  "key13": "3xvjsqVNcmnfayaL4vJPq6YcUwDF8RpV7HLfbWAiaxUqXHS5e1QowrMP168jFyBP3kx6visCeVzMYxoMQ2iSN1GM",
  "key14": "5PH9ocLjugd9vX6kFfYzpGXdPi8UpU6LNN1YbFSB3u9CUEzzu269P9T5upbdhrsy3VS9pYgRHeodGWXjLVkxr21e",
  "key15": "3Bk742jUghAoDzGXvyEAgZqiLEgokTMtFWgQWet8ZcaqPaKCGnbjy2tvZDoCLPdMxhzSjskMGS9ofunFh3LkWYHd",
  "key16": "5g8Nqof8Wg75YD4uGWmhi4e4g1cchY3JCwQKey1fqrCY3MiKP4w5v9sgtuqFNMn3bPv763NsXQKSBfWUHL7eDVpm",
  "key17": "5Fx4MdBMcYWKWARDXB25sxncgB723Ct8pSNEnNEqusRMYookUDsRymFE42yDW9Am5T7ipbNXxivzV3M4M8XgNU2S",
  "key18": "5j3Y1FB2n7KdNTX7nKtFjWfn7kDHZ5tTECCr7ws2jGaVE9KLiaCFgcZsWAWQRBa8yk9amzyAosDBGBRyDQCZ6iJ4",
  "key19": "2wQMRZeWaDKr6esXNvEk7rpYz1cq79fBoY1AXq2fLQnymBuBMzaTyzz9T7booLCpxpTb9pBdBX48X6BeG6xy7t8b",
  "key20": "65wkX4iSYyreWCsZiR2V27D5jGxVRJtc8HKnqpya2YTSJaJ4TCXm4rHyEtAHYu1L54WyDGiFPHjo265RREkFWZz3",
  "key21": "389p9kAxegX1RB32nWZWgwET7wHPFwLkhRq1rdpPospZV3mPCdaTDhZ2KGBX31ZmbjmDH1bhR6XAk6Eb3ooW2X9A",
  "key22": "2YYKjTJNyXkCq9cKivnh1R2F9phNNZMvyDyXgKiSiYkzSj4JP7mXumXHBDJopUFc9MRjc16AeoQpjAEhgzwnmXgQ",
  "key23": "3jSsbnDPKCDUizGxV5qwFPx4qSQZkt7SVdZ5EyPKQnJXBuaX9x9yAsuKY36pPrQBQ8E66vnoSBBGco1hsvPULM2N",
  "key24": "3mg55oUFAzcMnkz8xgsWENVyh2QSwoGroXCL2JNXRdrvY8h3BajSXQuejMbuxCWvPmBu8cWb1WbubrwtZAibYYR4",
  "key25": "23ACfVhyTZHW6LjHAQkTDWdLLDppD5Cw4cjm56UDLetZbUGMFWU3gGv2tmacaQTsMzxK3LjTJjhb68Xpuom2KRhv",
  "key26": "4mUfRHEq2CZbQ6vbpvgSqeDCGBk5XAV5DyjDHtd8WH5wnEAwrbKVYyPbr4KxsbFwamfrea3kQEEjQHnMJyxDcBKD",
  "key27": "42bfu3iyHLtKRwH9J7HN7WfQV1QhoGCUEiw4Rp1pJw5m74Lt1xojm5hdZ4BFKCNpy9zgUVa6mTwhDiR78UhSsJha",
  "key28": "4hcBg76KYXYwmmQ4QyJYVG19kT1AMkFC6PXf8iPXopEf5DrKTSUp87gcTwE1yotWacmdQR89teAxK8UL5PJyiPsw",
  "key29": "3s6ibL9kBveZSCkhSA4nDRoUyxTE9PeMHB8mc3RbZcxmCh6t6Ura5Etjms2rTnujFbyhqcy4C9YjfY67LTeMWLDh",
  "key30": "HHTZuL4WUWQa3xUYdaSzyPdxBfDuZNwDkRJ26cMA4icDBeVhwJLfwCYx51DevPhafcZB5SXnj6RTRfKZTbrk3o6",
  "key31": "2Qags2Khmpm9U5zr1WNmNjsdxBNwFpkfGbynFfMHK72c9mehQdKhrEHRdR9ybxvEGYaBQ1RqkQdyGAYLn16ts9GH",
  "key32": "5ED5qJz9yMaFv7PtnmuuAKAXqY69MNjh1L5gSR2wG6DXwLteThtkfM5Xm34kdNXdwhhxbcFkZnznnpPFsncqiicp",
  "key33": "36Wov7Hfe2H93NZgKZKwVdNsZM9oFMs6782S6qP7cx19FX52e87GZ5A7SP4CQBTrhacZPa7tqA9NDJ9k7NuJ2AjM",
  "key34": "4myymwCErG2RumdnbrSM9aPJGX4EW9ngJwxpW2n2anQbbYonWVfQHu9RT8TcZsAxx5VfK9qMZvWApX5ZEjQr8ppf",
  "key35": "3DXUSriVXq2q57rQeYuMa7ZsZu2NMz1yHDnJUitBLTuhC4qJGDQPa6E2oyJBfWNEuyGTKEBiwMJHJL7UiUpvTt4Q",
  "key36": "4AUGvFz6LDb5GNLeVj9XP8Jeoh95L4pW4otv5LY6FjgEGw4vPLoCEST98rhKaGoVJzS6aXqaFLtz4kU77mQLnimb",
  "key37": "2Lakgq4CDBhEasiyh9mVWoUZLXeCa1Mqq16DTZS7W7BRL9nBQ6hsHaLmp8eZfzywQ5B6bZ6EVTskcX8U7LbPvrgP",
  "key38": "4vNqwLSoWgdVFptem3TMdz6jBJsWhwMcnivwbJxXvdS6sCE4zBbRY5jpjYAMgPthVfxz3QCGboP4aB9gzoi8j2Yp",
  "key39": "A9kixsYYqyzfNDr7kpQqbCtEcaBKWQfgVHByYYdNx1FR88NGzUGn3GxVJkewfrKh7tbKqQZBA3HJWP4wRDssBaa",
  "key40": "3jNyJKKxNkkSuYqUYfkU9UdbTK6ncD4mKWswF9ZR6E4ZtfPqvftXs4NBk5DSo6vbrqCs1wMzCv1c1qw8wWvn9311",
  "key41": "4k4cyGRZjriYAtJ7AqrJPn2KEWkwRnFtgLFckxkDd3rjtj4xqahYB9YSbqevnnVoof2j9wnv3oRofowANWosiQVq",
  "key42": "4iFoPaAyjgQYdku5nd3kaffCDyc9hDt4wVNDUEnTum6L56gBaXGAy8EKm2395iyT89kHPi8YgW4LdyVucbiKaFM3",
  "key43": "QxpGwcifwNaLuAsPgLhNSqaFaRcE3criYai8xaPsZaCczimYZDiNPxHnQyEC8F7SFK9LH5LagusKaMYFPoEnVvj"
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
