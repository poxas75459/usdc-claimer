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
    "2BBfZ6tmjBhcSCvrJfAju7MLLRC5c4NXVLMhhs77KR4e9GvZX36DUc5Zi9pUTgkdiGfFPxYVsbU7Bc5CerVoh1pQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q29UZp7YSwQejDN454UhbFqotg39N1U8LynJHBy3BJEngUfWHUraH6Zjb6fHvLuUiFKhxfJr7p9FUaLvp9QKLzw",
  "key1": "4oTLaF7RCHHQVU9BTU2HVov46f8PRHqvijKS47GhVnW1kHYTVk4hPFpUNDz62PcRz5noaLfnC7CQz5pW89S5ourv",
  "key2": "4RcEkhRRr7VABKGm48qHzZqJLrvH9aSXLbnhQM3ny3F9oEqWmVegejVbg57AUjxfhPz3wZV8CKo2FLmNwkV7eSpj",
  "key3": "3DGzY6PdkFCPbJTZx7RMvJB2CDPJn8AxPcWi2Ndkd4CWVad2bqdPmX36g1GDHKTbJSQQRkLkkUgZCen7uYMf8jvf",
  "key4": "3trANtVCBEh6B7LWcGt2cTuUxQY3VSNpaNMhA7SfiQtYJsr8CEBuAGoqrkHHe6En5mDWaLrHLVdZgqHsC63JevBd",
  "key5": "2WF1Q79mTVq9my1eqvXFhpm1GdioipXJ2ZfeX7VVedQAExBZXDgm7wqPEv6CPUfT3ANBhskGzngHiHk2Gqgxrm7J",
  "key6": "2Gt9dTrZGpeeuCf3VKmH4aKXutQq1NttEppZcVvNdEMRASY6trA66EDDBcHVVesueLKsK6xpaTq5Xh3RgHiBeXpM",
  "key7": "34L6cLU4UbkT5odgeegVQnMKNkCBUrTFwfzsTQYpbLqoCLMvvDvPX7xwXRniaJXWzHQNa354FU9tFDv2KMK3SVhc",
  "key8": "4jiSp2fs8Fov1GsAuKHk5RSakEUPWTF3cMr2ea16vyYQgBcuzBscDT4YAY3GwwARX1XwaxJz9SULuTTvwPT6XHA8",
  "key9": "4575AmeUxBNPLQRQ42NNYUQBcYH3oftwkQJRqVuVKGj6gn1S9viZoAHyE791EUA7V6TYnDjwhRhcZLx6a7dGHq5a",
  "key10": "2pzEirJBn4f1y8CeRWTTpA1E1R1jitrkZkbkffMJNNeRdn9G6UdZrDdmcaRBGfmFdigmixqZDmUWfYytY494aywP",
  "key11": "3nssciA9r5Y9uZ24MTod5rQNuyfdrMHGxfPBYzZSXCwJDfrEHuidfeR2ru1QogC6dnc1nEJRY5RjB1TedqTdRDB8",
  "key12": "5Aj5ZgJqPzoba83Vi4Bd26poJKVK4PHKKgVaKrYKBvS6aJSek9m9vEb6fGMHfWJDAEoxv8U7ovDyXdZj5516X5t2",
  "key13": "3Y6Q3pPpCqCp7bZJMpQTeqLNKkNTAKBwq9Gn5TYs6VuFsibaxEpUhT1sxwZBEnvq3P83FwpsTkqGDNXfzmkkfzNF",
  "key14": "5CJTraMypuNugTNTDXtgx5UbjDjnER8FsjQ7Zp1aQr1ufBJXKoozDrhue3eNoKcypd6pnu1AQTU5BX8rXKn1FL9V",
  "key15": "4DPArJT4R4mexJwAJTdedW6tYf8mtJJgHWVH9fMW8FxKADw9vDpN4F2t2uhbhNBZvaFFG7UnaAiVdbr1WBMzrNbi",
  "key16": "5gNhoRV6x5yCBF4RaimKK8G4DNeW95yuR4s7GfREySkGakaYokQBLU28GtxTHAwdMG3jfWuPmbhyy9gnoQFrvcdc",
  "key17": "2HqwtQbAqw1vshV8SJo3FYRnoEpJzpFBXuK1ATZWBrmAnoFCwW8WficHT4Zh71JSpbhK15reJGH6KWS1DXXk2csH",
  "key18": "5MikPTTiTRwqQh93uWADaRjUfCKEDihBNPRdV2qzP1Y37EmWqzA7VGjYbS78EicJhbFM2LU6DmA7iFEyxqnaH58S",
  "key19": "64YCUWuDrssx1R4bMcj8gUT9DmjbRCmNpxwRmjnALrefDnxtkQkZWbey4RZytTiZYNJ73171nDJTtyywyvWwMPJ5",
  "key20": "2xc6TyJii9HHeccUVef4mPcg5HiGwY6F268UZHH8pmEs5VvccvVqnuLkYddmArqbQ4eDdQp2tJsK8dLfKrYwoBvQ",
  "key21": "5156HWtWRWZJrWy91Gudez9RjQGDFa8VBQCvzH5hAtDrS92Xghp3HESZe7DEaipCaq4DyWibabb4pUWjgmZpu7hP",
  "key22": "4tPUDDcMQKTFPWQ9VN6mduqYAwfhUnbxzE5gVR9MSddC7RQ1Fc8SQe8SkmHKbkV883WAJrBQgc8WQhyCVxswwk5x",
  "key23": "3X1qWDfdHe9iwhcnH7nGZCsj4XnBWcebA6DY7kJXVR4HJqQ8T2PXR9YpueF5jDGGJiBhs7M8yqdPoz2ho5WPPfbi",
  "key24": "wRAVyPvxFtxGvW7nQpzx88ttEQ75dw64MsRAnJKXb38dnT2rVB96VF25dVDsaMTx8gUfJwBNmq2QLbu3xwzsZTA",
  "key25": "GwedzVVSMNmWVYJMbkMRJmVLWgsM3WbY4p1Fbh6EuuvKgr7ra6LrJqmLTK1q6upSDVYm57i91nzZfaGZfdVc1Ua",
  "key26": "4LnGYtEiZJdW6fP9b5JFWuZY6UAYU5k9E3nEveK6DgN3DR9RKLabvWGu1sU1ChB41Fe2cZpQ4akCNhyqSVsZktjC",
  "key27": "4hsrVZXRWhxmt2Vdx6HKSdLVWooctMcYKFWF9NBEPLFWW7eXRhrdGQ7nJxhykJt4VrktsFTZxYftvLugz11PLm9U",
  "key28": "2oPYW1JRPbXebjvPNTfC1Rgq9CsF5VqLKsooyiN3PfqcvFtkaHXFMLduyx6ZznChS915N6HLv7FGWeXzbdENGayw",
  "key29": "2YwBDTgpKwao3ihv1ZwztKXukFqtii9w6T3YrWpqhfHpkCEgXiDG31Lj3Kg7cCjjNNf12mZzaEmG7CUvSVmBN1ky",
  "key30": "22ppNhAxHkVRnnPzdW9xsKKJF3TC958bwSQUDWvnFwrdrL6JcuZfTk3FQPA3LC5XD5PMABY6XJTY8rYwqqhrGthS",
  "key31": "539Eu4yp71dx1ZNjmDfE9RbX6MGnA8CN3Gva5H1m5MUykLRVPRkdykzj3mpqpH5VPzX47nirKrpjqpzEpiV5aYeR",
  "key32": "pXdj28g9EcJu4Sp6cTVZ91wTadNfHuLK3ato1pUPSJ2P6EA5c55tfSDwPvfvjgdny52oevGTFYp8ojYUw4RgKvJ",
  "key33": "4Vszj51YWQztizqHqyfgwRYehMHdYbx8iyMhWd31nKGZS1vEV38DZTEYmcdXjAeNuRfjD6yMmHac92cCWpgLczjp",
  "key34": "4o96Y4mvNrqzLCPwuhpCXnejwkp4XApznRD75Jto5wVL2sVc1MC6vqjqJJ2CDPjyPeNSHMirT91HWDiv25A6R8Rx",
  "key35": "51mwbt3nh6Tvhqynndxb43hsCu11QRYo58fVbLWw2kSPZJfqNoemYFwGtq8cBmY3GD6At4K6QHxTTjGqe9bQdvyY",
  "key36": "5Q5BYxyhFy7qfVZwCoobk7DispZic7rmGERs794KT3xUBf9EPRT6SwWa7SqBbFpKipbTMXnjCNhAUS8GXzWuvY7s",
  "key37": "43g8PW8vcXby3DJKWwAGv3iLf81UMiNy6pPcC5pnMGWaG75xSkHQiVJiTL4Tyfb6PfUdFTU5JhWuyxkPYbEPgE69",
  "key38": "2hGmSuiJxcu53GJSVzqEWeG728jxGoeLFkPVXVnaYjt5EmSog8RrLYiCVuiQqCkbGKt5xZkCpjB6St6Uidej2zmX"
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
