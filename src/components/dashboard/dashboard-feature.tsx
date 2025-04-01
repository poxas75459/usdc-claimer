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
    "5TyazKPBS6UqT1ZRrB2AqNJwuE43hFFJSr8izKYqKquvjG6gwXtfkUGFtdUVfYygMPyEiFhEoHXjAiJjdbmv6SE6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51KEvvoAwbGKEgmo8ccBbabtzWUC3AKuzQSU54c69sY9vceWiCuSTTSKpTVoL217XvcEiV4DuEfHFnivyG6zDdVD",
  "key1": "4KVKVP71mKQ2kYwCwQJg3Fai3b2pNFQBSihzhbGaHp9mjSN2kunm7NZcFia5fDyZ1wYtigD5wnVYsoVRm1ix3koX",
  "key2": "3bH6H3zrRBViaEojBp67d8eJeCWkZ1pGBDnAcwo59huFcW2ig1fKBkisdn49cT9q8vWTQktQBziM8X8kZM4tQMdq",
  "key3": "5cfGyySLjvQ84VAAsU2cVQa4KgvkGZZYyHXSNHRP8oDDfgSsgMjGbCFhL3eGQEYG1c2L9RdEVQZyzdAEjyMczPgv",
  "key4": "2JG7qLjqfRZhNoHponn2HCPedaWwfqL7oUwn3zh9h5TV1eCRtJG6e8Esg6XeCm1sxag8AiUaXFKRmG2CaVPpA8hG",
  "key5": "5oMVijkqdD2wWAyB8EUEvFytuamktSk6j2oPo9xA8cfLMnJAGLgAQVmHufkmbpjbPKCAgzzbzyretYJAYHyyWR4j",
  "key6": "4o8X1krctRQXHnPHEu7jiSzRaopbpLEbePhaT1XzcBmUJi9YGSkKE81h2RBbc8C2mXfU5t9T7gC5asUShqj9Pnse",
  "key7": "5ELEi5BoczL1cx266bAi6KwEAXC7NAyhWx2wzUoBqNfZ4anAzUZKGojfvWWNVh3AbFjUNZqsJqS6NzPoLBVEF4N9",
  "key8": "5vKHd5fDtsdHT1eydAHGhyjXVRDuZ6fLQyGVDdnvLtMhNV6krxK9mviUpcw9NVjpXDJ3XMNp2dmaQ5JTFbiZ1FAm",
  "key9": "2rFUrDTtY8hgwCohfDqVX37HKsUCLvFrHHnwnbnn3Guh7g9Yd81Usswab6r7HMt7jzjWfH5MDVH5qfjqAagFuSnf",
  "key10": "2f8YFUzm5QYXRG8fYVVzUPcwyt3Yqcb5Wv7JwCXamhLhc8YztuA6x4Dq5xpTjQSq56rMMo7YJsGumYrPEsJYpGDs",
  "key11": "Ls6cdZNavLYGMXMyFw8FnwZJmMHsf3r9mRKANV9FumDiSD1tK5iisBwbFmZjESuWWjGfFxpcT1MEwNd842JWYMN",
  "key12": "2QrmpPWSto6tSGH2uVGd4xayzscDnE5LKWKpnKcVXDac9oxfHu9nB4rPCk9rXvo5dRfsmPu4twZzrCj6T2SXViAV",
  "key13": "22R2U7jJTudUFDQhjWQETchcfZvqniPJTVyNFXRYUzaWtkKBVdXFfQLddxh2ybZb44ZYt2AfvP6RKiFJqJEeGe43",
  "key14": "2T7amQBv87uFKHZhf8buLUAAPQNTnYcUhiYBnmao9n2gNjW7AVB38KoSuU1MCLaLUzTzMEraoNX39qL5xf1Lwdm6",
  "key15": "4fBbUBa2M9h9fhkBDiWvWC3o7qSXkZSx1Mc2xB6TJkMX3BTmJ3zKZPtpVxrsdiL4Cac9fNWYMt9CFr7C4Wfo8zsF",
  "key16": "4KmBg7kMzHS3nyoYfxtD1UqBVp7wX4xvotfF8AQWjq45yZ15CgoPHVqiRjqHkuRXMFyqqZdmC1sTxXBA8Ar59Vmk",
  "key17": "2wZ55sz7y7Fx1pJ9oD4JJB4qbhdLdUvDAdTu2TFgZhEG2UHsqCUoVo8SXBFaWg3Py4cXxMWvCQ5jMWLs2p37MEaC",
  "key18": "3b64TzkyMZx1MhEdqcXNDrpt2BqW4RRYRijNenktp2C4D8PdKfg92YLLtLeReCEV19fru3zpmzZM37Q8Fnf5s5QR",
  "key19": "4ic5j3NXJ8yMnE8rCCqHSZb3prngKBoxLUwJpptZuoyhfomm1HtKUoxyDiEzMwNUq94AwfTt81uYwgQpdCBfB2bC",
  "key20": "SK4jMTU6cn9WxE1TazSk6d7YFpTiGBHUy6FtRYgFsCuLMEoyNzbF8Rncyw3oH1BMQFnGRRGE9RYGAUoS6syrVgx",
  "key21": "2xp9qEB1ptRu5Y8u77fkhK27xVGm3JHeb3r247tzPCkJDXHtLnuadmf8XywX3ijsCYRVGp22opzZ9CzWmQiamxGB",
  "key22": "2kEmDvrSQTN3knM4oBXENiV6YCTDiDrCZwuKdwzjXSm8Ax25SoZqYEEg7WMeU4hujmyRXctv5N44AUP9xj38RRLv",
  "key23": "64LrCBSduuZHtN7umzgrMzbWiX8628BvBxh5panaVjhSgDCf99zKZXxXaCFQqmXRgWxYFW29M57uiHoS4V4cNzqB",
  "key24": "5yFnm6rtRY82UBB6btmQTebJiZVKnGbUJspZUSqeeZ6G2t1xYjxQpzyUELj1YRc95rDabRp717ZDKTQQ5EyJmakY",
  "key25": "7aKSha6CaacfK8CngbFkrJoPYMMEjfg9e1DTzqbkqBKkNgNuuPs2Bdf5CVQ4jpQTrah8TL67ELcVYxXtXtETuqA",
  "key26": "n8xK6wGFBRDW1MUd4PX6tVU3fNZRvER1f8z4PhwTUoWWVWChBNHGpNXS8BAjm8EeDrHZgaPM53yLsTy6gMJhBdi",
  "key27": "65ewU7oDSbsPRwgNJ29QqiYWtBSpKzhPuX5ndkM18aHRgAHxbFv64E8vbHjHhbp4ikzB2Kwz8X7XQnFkF4fApTdT",
  "key28": "45G96pyMxuXHREggiNHzkP6gTTYWwxykMMYo2L8wcCZ5v5c7fpYzNUSAg6yNwuYTpZBVYA2atZjhWuDCvcCdhdCm",
  "key29": "4dFoYd5CC3YnEcnxaWUgh4EAcBib8CzC31NEf9ZDUpcVgsBZNNcU6VfaWihmNVkqbuSHUearUWzfH56MGs21oVv1",
  "key30": "4T5MqsHvM9nzv2DX4f2yYoNeJRgw4qXeRjsbM1jKr1QFd21je31VFPBSBq9VRJkByCWpdAZWRvPgYXi4q58EWALw",
  "key31": "26JsLPu177nZq6N8wPenHVvBHEVz1ERnLfshh4qR3cHhGUwfhvX6gYL1ADNh2sfsFjh3rvR3EDQBc3uv2bpKQVam",
  "key32": "3CegmBKfVK3EvxySpyeo1pCvRZuEW9Kr9tS4wm14UHLmUXqkuzGeKqZG413NndaRgsKSJS8T26yXtKhnTptApyGp",
  "key33": "kD2Q2FtvjcV9vg7HTJpLtukfXNUCXUMnAkkPsCWEnJeg1TxL1yoSTieor5hFvgvk2xFuMwXUUm4tMKt3YbKP9kk",
  "key34": "3xtz6PTD7h8dWGQqQu9ggpZcUUTyxbhDABEGhfTM7Acop21X3RBFpLoGahp399b1DUbTzxzp8pyBKFwhkNuHv5At",
  "key35": "3fBPfKJ5nA85BMXWmEHAKCQJ1ScCHGtABwWihxSMpmqUf5TrZ1zKgz8ZH9atna1AJzdsHUKzm2NjrzcaALxhdESd",
  "key36": "2J7Ts7ySit2vDo13fCpnXHgowc2edSTvsvBB3dYQogZX8YwfJKH8dHCAFC2XPCFTdVJu6E8ApRhcXF6AnKh56M3N",
  "key37": "3BuYKFUdisSnJHfQqXzcmvZUrUSLDh1c5JkvyomZWrWZrEepLZE1Jh7TxBfzuqCjVN8SbHjoovqv3rAEZyikMAJs",
  "key38": "4K2SUADsEcQJ53zrv6Wez4em6Em13VjHRg9szDLZ83MtXD9QN6qqTr7NoHSszaRYdD5QU9BahAm7L38tbjVWFZqE",
  "key39": "4Bw4o5GMCebY3Row3KKatSnJsy5DBEVikExz5Leua3kjG8DWbMnxH4zmKFGz79fqQfzN3fx5dxHic1xyz6vtsbjh",
  "key40": "4mFecj4NsoYoyovgEJcAkwRWaptgvGEQovET4H6DA2Mw7S4NztCNZ9Dziv8upmdjikrghDeQEMXYmm6j8QJLGUza",
  "key41": "3kxscpxmNsfMtsRxCWyq9o7NWsbLTKvTN6Cn68RvZRfWeu8act33nRqfwQAbUTkrJTQRaRSTytHuWHiUjbUWwpeh",
  "key42": "3w7CcFA4TBJSyNqkziXjVFk4sdQYCnr2CU25cPTP5L1hrHLrWJzzUVV2sqGKBV7gWK7jADBbvB7cwyJMMS6wVa31",
  "key43": "3T8iYLXdefLmHmcwDbC5rgdy7JiYHX9EPVPFo2zx3Eruv2cMGbPTy6WfUBeQg1JMXSnmHbfgk99V8aYL7wE69jj5",
  "key44": "4Qbg9FnN7BHyY6SxNpC75YmAwzpQ73XdF6kELarcCu7Z2ntMUYH3a5eGEFyv739jXepoPRRE74kKzrf9J1VCsK3b",
  "key45": "5Sy1YCEcDXLsE91zNrbPNoB4JVa7hbGcYtQBbggmK9jh6S6e1hweGmjUMb3E2ZPhh7tZfqeE5E4gaxVVw62jeJbv",
  "key46": "3L1HDsGbM2LJb9oA3e76BeuDXfCfTJYpPbfTFejW7PQFcwYbMTYmtiqgoNimQPtXYm8UT6Bd3D22WhcnzYeueWN7",
  "key47": "5pff5Tf8AgyzkNAq2fNggQUpuTRK9HnHbsZSH98C3u6oR32qopBHN2aS1medA6ATAyCQtovYA3UC5W46QMmDy9r8",
  "key48": "RBB4FSTDttUUzN2ysPH82RG8XPg8scmfjuufbWSy3jwSHg6SQEhXDF2CitsRve7QMEKmgfQJysBTPSA2Y6tZ3XR",
  "key49": "2v3ro6C1M49x39BABYwKVZco1sA9MFDrEE8rFdhZMaGmeQtUtLBjptrbCL9hBPRfCcBWvkCrPkPriLpiosowJBKb"
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
