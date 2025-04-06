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
    "4rHAikgJzfUVB5wUgqqZaZLVCbmRMPakkAetSoWPJFLc8tQXFqLYBKVVhq6CwzqQauwBCSj38WrXKUYRM8EJ7AjH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yx14PcqFFuVt9CbXb72CvjKRCAz8ggYUPPe3ZazDXFFA49JZvzHkuipcVRHPyLmubSJbVBegG6o73g2Q1QyiyhC",
  "key1": "55JV31thjebR49Pcamm6K2QEvj79acceLpktzcBZ4cXLKtSjkDuV631FfYbQxJXc5FgMs9Do8SZDpRbb1V2i1QRu",
  "key2": "5aL8K8TXhCu7t6woBhoC5ikyzKnaxGqLrLu7Joksmgqaon9nyagKAk5maFhN2X8PnTQK6PoQM59ToQtxo2yDWG4j",
  "key3": "AWTgsVWDUQZa2ToAiZhLodPuzoa73FYm3EhZgL7h1DNVGkmU7Wiwpvfqv8pW8G5MrtY57XuY3Px3c86m9hiyVh2",
  "key4": "dTC86MZRfYsFgsH6zZHKpYfXidppsPuGdFLZ92oJb3w7r3LPoap58XHAW8ifn2WAhC3rVfE9fBMgvmP2XCbzcR7",
  "key5": "4tEg1dDBB4zm2YB4uTub65PUUqkWKzHZHX6nMHrWBVzxd6QNk6Z5G7897YzBrKkdPbz6e8d8XrHhFVZCaBJGXRwg",
  "key6": "3XcETh5u1GiL59BNaorXTj9K4BU5mMmNxoZgjU2LQLGpf5SGXVHPvRAUf4MvmbBk32rbc3xb3SBMq8wR5zbQSipR",
  "key7": "5iDSGtc12HvDDW54K9Wun61Ey6wsVpDiSvFc2c3N7zsVeetXuYianhLkZLZ8kjr7aK1d3oz7Y9GXGPQKazR4jx78",
  "key8": "otkFhqUUKZaY757L5Ugn297kMsyH2Tju79LL9j7yoc3oL6dRwhi88r2j1jqm7vBGphJiuvy2BFotfYmRuXH3meD",
  "key9": "41ckrByh6vV5wLRoogEXwkv7LmWzmKzB67ZijHSMQTocBYAzmMVhPYcghTf6gdaLY8eeCgJhcAtrWDCnj1uDcSE7",
  "key10": "Bac9JQULN9tYJxz1PuuA9Nf2WiAjFpmoAu4d6ZdhB7ZZ3PVQLR9eobmhtUVp1UUP8YRsCNK9eorP8N1udHPV86B",
  "key11": "5ebStv4Ty5MLAu8ojZRa2YxKR6ipTMWxmbJ71jpm5D8v5x4atN3WSrk3Ldn2EnFuM9bdmxvSBttSafiHSc94zRQ7",
  "key12": "515NCnhjZGfLr8bhjusXXXYC4YLFCEjSewGLutP68mumZbZoAUSepfAuSW192As1pQMdzQ7qRhPWfBmW7oeikc6J",
  "key13": "5wZQVfazz7pHsNkAXwyUtb4qo1w554C5ZPxiVvLqFpp7odxRp39pNiDiJHTrqNmavBWmq5zsD7fuFXC8jFHahGU2",
  "key14": "2mGJWQXFfWNQU6dHsdDS3bdQzbf6CRZHVSQPTYxpBAnB8bYfP83MTCbD9NxniuLkVw8mFKngMP1WhgbHQuGLhoYz",
  "key15": "HqEVXG4GdHC9RYko6Bqm3tWqgswYQqjmSJgbtPeAJUdQkSFM4dNjWELao7TxRRXFTVuphK7DT815MCF7hn4gx74",
  "key16": "ahR3DhA7EMGiCPS7nmH7qqPoQfebCV4fUTwPy2P9GWhAHD1fxDtYGk6GmFierTkLsybWwRxKCkuHX8xE44Gyy4X",
  "key17": "4g2rwxCTBetuYvWeZAmxmhkHq9PzNka1XQwAqfSPAuWVpY7LgzkZsbRSFLFXsaLwrKnNFrjicDepXf5eedjQ1g3E",
  "key18": "JBLLRTtBUKaK3eFojLBUvDxXQzULJ6xaBshNbrnftQn9PDerTd81eg36JAiqBV5YS3FyHnqQ51WQBNcsqySw9Ty",
  "key19": "4ZeD4dSdxuhNe1jm55fYGDpr8cYjSa76kqJN1L2cQ4oo6ADb5SS2nAnE9wuePWdxzNhzLjmEkDN6XmfonzFuAWdH",
  "key20": "G8jHJ2MMsuXFM4zzry7KMDoXA3Ti9YMeqF2wLsRF3wg33QepBRLGBq7chZBiVq7kFmSTjWi9KU89cswGnoHFQUf",
  "key21": "2hjXAQkhv6k2KbXVeNqjaSg3VxZ56LLBEH18QeTrtgfSGyfy9u7t2c3h2X7zXK7DGN8s3cR3un5KJSagXu6mZVGo",
  "key22": "3fHcZArV1AXJMeHsvgUgGymZyRpzfMrRXJuM43yxqrCsxsxM4fbb6XyNcJGKB3tjsFcpnCw8wvaY6dvxwfKTVmok",
  "key23": "3TeimKT58GKBRmU2rJf4jpVEXUXS2NJ91iUcByngRPXEKrmB2PGVQZLSUEo2DoKf3xr5ts5eQj6nzBrcNZDCjokr",
  "key24": "32LoqEFoqL6K8qNK4KDiEgH124R2jhzwvx95yEkaQJK32tiEaxnR7b1kXWVuDYE39aNGZZx1SHMdx8QQp3woNDuS",
  "key25": "3U3giZzMiDny7GV71ZW89rqCHtbduMXRtBTyUoza1BjmzcmWDtMoziLQVfBDTFxwGcQmwvGhq7FMKAU1to6N5yQM",
  "key26": "NGv3qk5962MLPym4w9nHR863jTNutvkxeKzZanKzM8ikAup9aHTniypCYMFUQTHUrYdTvKWMfu9SnfkiwCCDStc",
  "key27": "4qb9T8wmLJMoZ57ZjDNpa7vZ3ocDAPizaXJDv2cgpT2i7hKhwRQWLyGE6t4eeDLgs3FdqoyWzwGTseFwBZvi3iJN",
  "key28": "F82AQ1VT8vMz5de5UXYSVdmymTjNBvrCuGUEx6VYYbfdhECe34UJkprCuWbYL47mjWg9SDXAMCx5b2PjC3AnUw5",
  "key29": "4pAx1qEd6KRikVq4X2RMjfZGquukeSRHTF9MaYS6hWispDNSFbGx4ttYt5DUPfwDt8zqEzZq279c5dmrMz8r6f8u",
  "key30": "3CYUhBp52Hf6ShopaJnomxnjnaMdwiUnA5yF8MnA4cshgA1uqSSZyE16mByyZhJUHB4Q2cqUJNNcsHSaXnZshmby",
  "key31": "5QsuRRpwjt39Uf9GA1RfYiszVuVyo94SmtP4n448x1gpERhvTYhcrA3HeS7vaaszV1yiaeWT8yP4sXFhyDvThAZY",
  "key32": "2x7SLPtUhGD4bQZ5Qn55ZMDDXon94A1xaWDanu6YEM3wKqcpEESmsSLG41NcfFtpZvxKzaewwEitCZioyXD47xpP",
  "key33": "3GuasMX6c3irtevhh3UhWdvGeWuzx8NDvXssr3YoBmPRdsE73RdMMhgbAKEw8tvjfvuXBkW8GndqKekrLxNiFDbX",
  "key34": "2mLYsosF7rcbAbuhB4453iCwxWeTe2bBoejbG7trrSSXe2VCQizVYrPX9DpkvdSq7B7rnaybroT4MzryRw2ajueP",
  "key35": "55wxwDRiS5trHwJvQeu81s6bwwoShjWXem4u2XAw2JQcEdjE3zSZFQQu4vdnzFi9GbykGxmXQ8DQmtB3BEa66zZ1",
  "key36": "26PxXTD1iUFn5gtugZfj2wywLMHizQnsuf6T71XtdBJP7LFvH75ucLgi2KrfhtPrFzR7RcuQ1T8somHr5Zra2JV2",
  "key37": "5g7svtkgwQVf13W7DELFN3ZeDEyuTmFFFSin62SC5tkFdo8S2VYr63pvv7CjvMRmxKXaJdbYo7iaBVpyZC9RU3aA",
  "key38": "4Fr4sokPVEAwsjZJSrsw8va3rNpWa5jTyyNRp1HeqYUdFeBMnePv7JvipvVqXUEa5wiHak3HcJXmvYSuANjNZCaQ",
  "key39": "RZ62hzXzvaBNzkMP8cgV9R2QHGgbngYYq84G2cw9LntWFnhDwrFRzpGmUsxN48zQRfZT9J927gCyVDwuryhL5PV",
  "key40": "4Rz2QAGLx2iMZZo2sJNEyPAmRUfa7Nr9xzLM6vNyBvmaM9xCBdXeHRukB4KpmK6ViMEwWpRFpUS5i1ScvzHqtDF1",
  "key41": "5hC8P8PCMgtenamZ4a3Z8hY5zf6hBJZEdR9fj1EHQ9Y5tDxqEyoXk6uE4TrbwX4KHpTZeynLajpKPjEFBxoSS4pQ",
  "key42": "4fviSVjhb3xeUJw4cdc1VRjY8YN4HdgC7Hnm1pbaxm84222apwxcL7FjkJoCNwR38HsBkx3TnCuuPQ7BYXE9c82W",
  "key43": "3f1q7MUubGevEiZNK4rbRYHj5rbUg3doPs1tTJKY8qLTuZUstgVMnmEy6Z3CFRMjFBRvHB7zjX3NFA3Xfa9fz5YW",
  "key44": "5mwq9eKaYTjnUhDhjTVpuJdURE9hX6oNnYpwyyb64HEGxYXNJW99EWF8VaczA6P2dTho4ukJnZNdP4a6G83M8dQb",
  "key45": "48HAKHEjYgN7KT6JnBVv6Ztccrc4W2rf5C8yMs13Kxxsh7BXGjayXuyFpvuu189E9GH49j6z3wrfCdBEJsAfVg8E"
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
