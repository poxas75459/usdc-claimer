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
    "2WVAvBTrgAk6iEcVbXy7dzNpvKKdJfAXwSwK2Zc8rU6StMNTMr6oyvNEVwvuGvAgN6xqjdH1NBJ36VCtv3ZDog15"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aTJHWtwJMnKE8EjHbLXo5JRLWA4REDPJSHHXNPMeUHwCABhhGH9cP3gnh9h5JcYa7BeCLHpvPnVBCwZnomYVnVg",
  "key1": "5b4CEdt9KjFB6nz481mbKjbtoMGoL7b17WZvNoAGJ4TEWPtoSmfww26mXA1Psi398aHXkQwd2j4xRnXNxsK8ZnqM",
  "key2": "4ThX66zaPu3taNp39KtXthTuLZQYNwhuHXPEVp6DwJ2fifoHpAAoLFd4sQNyMbtkKZwJZB5ek5wbUyMGE1k9YxK3",
  "key3": "3Zin59qyEpnHuEWbjVQ9rW6VFjEtpKzVNmBVaQ74LawLKcQn6AdsHswfgkRHaof1NMX52PAbmZYg9s2nXnBMc5nn",
  "key4": "4mdbMTQBTs9b4LYbmJT7n4LruaRJxL4CDHXBqwvmir81aCdJUPZMaVau3X7G3qDd51b6TPvk6ZkrFPLX9U1r2eVY",
  "key5": "5EQNP1pNB3XrkLyEo3YUYbpfguaXGAAde7P6hm9X1BjeZdXpqZFUwG3bq8BBb8tVRPMM6WCCxD9ohMo1eNXKnBgg",
  "key6": "4se59hJddS6mDujVPwTkn3Eh4h44av7FnTGe423n6JXwxRaJuuKc3Z7gvZm5YCZuvyG45x1vY3hEN4aqeqHrBxw",
  "key7": "3mifQjPZqMzU9fykgR9afgQERAaLk9xBhnLu3ni8BXw4SBXFEbJjUm5mQVkS2y8Uwmehb7m3hFeRPALn7vu5puoC",
  "key8": "3jExKmpFDGjyfBdJSgpLuQdAAHqqbYwSxq3dTCQS86H6vWogBybqpyCdrWXqqUyMPoZj8gaZQckRdGMbBUDE4ZTp",
  "key9": "4hqvgpsj8jMY41PHFcognJrbEqJy8GjWpzy33B89PkQXSv2AKDwN4A2wW6TxCHh1ENk3LCEFitHMidHMwnbnDE5n",
  "key10": "5UvPnyo2AKs3UF6mkrjipSwBGnt41frCrbcMoK5aryz4LCJymtSSCVkidLTTDGHzoSuk5tqB3tBsUVr2WbnT3qzZ",
  "key11": "kEGghHJ3pgxCJhJVksNYG3DYbXRKT9WG2o2YdpkHcLZkmL3UH4J4qcbiQT7aw8PmtJcC7SWCNZ5AFXF4pc4fg7e",
  "key12": "2LZYdoJfiMUGpoPNw2E88vSis8QEcBdB8KBdjQDPeHfcMFLZmrT3nTU6Zu8g44PjLNSATk9tFjV4S7D3vpbqbvkR",
  "key13": "3etNKic7ZXHLq3JTwmoeRqb6D4EKZdAKiyVDL3ccaPEcRrpiK7ANEkwhVY1dTMbHyQYjrraXtH1xMAFAGHAJsN1a",
  "key14": "aVam9zAj2tXXmeXWdsLHQuLSCN1mXxZxMGJmX48NHvgK4rAEacRaFPMwngFk7G8fbNHbEF3v1L5LyFAUwi8qBZQ",
  "key15": "hMLMs7GEhwuBnaFGMxeoNrDxnQ2o7C7VeARaH9QvjGo7Zyd4p6ZwjTGv3Q7iQKxh56zGSDXkABviW81duSk7T3E",
  "key16": "3yGMY3YQuVCmATseun3jS4K38fYgDz74nni7V927EccriqsZEnAcjRkTCnZ8p8qGFgiEdqxuvTm4zBnM4FmaNRQG",
  "key17": "2gK1js1GA9pdSrX2Fo5xQmDQcrRL6xFZhaPPifVVN2AzQy2qwMf3wLYHdwA11WNVo4pY1J5c7duh7bh9Fr6w77Rs",
  "key18": "d6odjoys5gzjoLH7QysUSfdPcdF2nXguQh4X5E2cyf4jsV6zmY7MdoJs7RetGyhq7d4qzXMTeDncFRTe54nDDtn",
  "key19": "3CM3hJnX2vNueZwmU3wUXQzoJTJ8VvRhtKWqi5SokDAzQcBHf9maGdNJz2igBiQZZT76PzQwqR8Vd4GkDQWM8iBK",
  "key20": "3WaovaCkxJXjyVG7Ai6WPMvA7HDLMccZ93EWr6Nd5Qq4U6yePjq7o343XuBpnipoDLEQVvFFoD13dnSChw9CQhd",
  "key21": "519AJ2wXkPMUnhmYv66hg1s5QGyYeTyHLLMrs2SXS5qF2g3RXPvDX2usX97rJK3rWUUrCYLbpMGkob2UvsCQqy1P",
  "key22": "3682QXgXJKvFukBEznBvvdEi7FpSiBbvFoNVDpB6a4WKrGJw4z9nyKuQMEVaK2ickBcjQfnphfAAyTHgLPoXQjs9",
  "key23": "55WULJSFJ5whaGN6Swxwn32d7xahig1t72jLAgkq8fwC16w7CEkXLDTAeRaoz5vzZE1QUnwEs7MyZC2GvET86Wtq",
  "key24": "7FLe8Th95GGvYZgKpScdUhNqTY5HmLoimDmHvdQeNQ3F7AT4JFuGgNV3EUTmJbepejR2pShDHeDsC3BgyU9VQGo",
  "key25": "5vUSYpM4HoEAL3sFRgu9sBvxZFR81J82RG9btCLSKRgZfYo5vm9aFddkpC8RwfiJgDz4FGBpDgdY5c6BCzqE1NAy",
  "key26": "2B3sXnrAVXtAfKpWrQAuR6NCQ43ew1njQprbmAKUi6js28YT5b66bUW8nNRNWGJTo4fJfXY2Shz2oSSEVMPwBwrK",
  "key27": "5ymVuFEsnw5vSRBagN646jyLG8yFTAATtpAyqkF5kQkxcxv7ynYq6C3Ay1VgRoSCvM6dbXw3YxMndEbRvz2XK1eh",
  "key28": "2QdMWEbSm34AX9WxjfdtHVdf81Z9R5yWNMoUeqVJ6RzYL63ULFapjR1ym7RypGgrWSwaxLPf4qGFAG6StL6rJBm4",
  "key29": "5fHaj38XY16JLYy3JXp8rLtJGYFWRwrohV1zqz1qqbftBhqdCb5sskxGxUesSZ7pDth9Wp9WfFA5cQFxT7rvZRps",
  "key30": "3qGS7fHVGev7TJSanFokxK8fx1J1918RwZ6PWps9T6pvRXQvMkgL5ZL9wB9HxTD7zrpWhzEUPnPdwsXYYNSon2Rb",
  "key31": "NStGgxbyG9CspuwUfoayhVhpiedaRA5VRPbVvCJRY6woVRBsZtZwiqR138stXzjtsbX5gGrtYhMDJDnJeZGzqGb",
  "key32": "3YC6FEgvWn19qzEvdCdZCFcz4Gpxfdjtgo1rm9qdg5dFSudQqH84aEcYoUYuPT9sDktLfd8QAjRBrqpfsuU5PVN5",
  "key33": "3Nn1dNZsJWc8HsFBLRZMCJgF8rUb8atD4HkjbjK7SPp6gnHenDXejTFKgs95c9hveqdpd4Zv1Xx2F7wdjvt2qB1C"
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
