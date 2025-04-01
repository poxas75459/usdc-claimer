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
    "3aRKbAvvNBSkFDYbmWB38pTy4J85MSEJ5H7JG2N8xEHf7FCWxfFTDa5m2MpALj15y8Jax3oUJrXNmv7FeH14ZSzt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wbQNRLUq1N8tZntsY2iozA2vecAhgprWA7ZHXaPGvRVtdVUxX34NLbhTQq7jsVBAJpxqLyQCvgc62ziZqYYABfx",
  "key1": "37g258pKmUQWTY7SYeKhcA55XDB1iWtvrUkm33A2CDvjFypD5rNpsj663WTeKhzom92nAJJ9mRoLu1JTMPVst8tG",
  "key2": "4L3K6qjGYSbt2sRRBrcHCYNggrMsfA8BRf8cgyMmvTXgmRiWBrukXjktkt3EVttaeGesNWXPGSHfMGRqcWKHRN3x",
  "key3": "3auThPpeBTWFquo74ZExNLswpwXReR84AZB21cFh1t27e8DBypdZxzzWsK7AYhStEKSXdnZzGpqs95f8LNBcyqKp",
  "key4": "i9z8VdSE52Ld5F7KdMnQnubNW6RnpdiSVdqm6bJGHtsEqCVGfAmpWsHd9fa6dddHK2ShpaZHux2UhQ3JKUTGSfu",
  "key5": "5XJxXSDocbGPsMr9qCdvc11TtTpU2vNgRx8rVdsrVd8bdyKpp9VSsWKLYs9nEm2L6HRxuFjvdvjhFt9AHQ1RL97b",
  "key6": "5xGnEyeWo8E1YYu7byeZVh8bezP3KSL4gMVd5kjAhxE2zmo4jhoZKEEqSbQ7hF6NnjJonsbwhAQZ3YJSLU9HUaCa",
  "key7": "L2X1SesRNPEyhh6EKdwffC3CqMp6aU1o6QNJ8yXaohmDXzsi5h62jT96Yoacpy9oYcxwSNuVMPr2mu39UgqZCD4",
  "key8": "2dgB2SQnVSdExEgUbMiXQTmZVoR89G8GJKN5zsz47YSsaQmHRtTWpj7A6154hJW8bBvoGeoMbMGf1XicJ7doFueS",
  "key9": "5StSZkbHJBcLkb7ZWNDJLJ9kM99cXdsb3hpXuaLkJ6meZceJmNLbnMu9b5DiTCbwDVtThpLWszqYkfnSPnL2zGmR",
  "key10": "2JahXqHVesZycgRQi6VjxBkts6uyhDX2iZju9zFuvAtEeiGh4Qtcf7fAV6s2iDLZwPetQbMEjQ8GjaASUvYHEhXK",
  "key11": "4fcViZxxTMFjTrjbsfysGdRkY3TedKcsHeCQqtHNMAp6P9U59zL61cD2gdFdw17eVrMqby6P8roqTsohSCJ8b22g",
  "key12": "mW9XgjHqn9APsBhHyojPmXWcN86Rsek2eo2yqNZp4kVQCeJ5dRXdKG8K4WaWDHo7fR3NbBs5D6uZkZYZL25EmyK",
  "key13": "4ZdZf9ozsFrDHWxg9WuxLNP7aQwUVAZN9aLer2hs6sWTRrd6fAt9SuD3TsgEzwmDANoMveyHGQvYBko4CqpCJ3qc",
  "key14": "b6xqamvE64enENMKJNfpU5dX5W5L4dm8VtB87mJH7hu1Pnb33f3zgQdnZaM4QrHH5yRpCaDSVv1vPF1THLahV2Y",
  "key15": "53zW6okVzu3eJv7TGwk1P2Em1Xr53zBn4rznq8aZ99AVAYfqm42UbvGzgQB6pXQhPRHi7F5BrWzVhJ2sE5MPganM",
  "key16": "5ck9KvfGhcLU5PsJAmwfepzinQDRSAZBHHeEjx4ExdisY7jgUrgdjc4LFGM7LMb365wpNSY76tBvJLAVJsgopAXd",
  "key17": "5JyGUMDmrE526sLESttPqwYJbQe3jidpBUyxtnAifUgQz2aMdSvm63xBvYg43kfR5faNpCxb8bwMtFy6ukQXFLvw",
  "key18": "2o8JTrBJQ3RmQSTgV1yrn7mQampxKZ6uLzEXDH5wAiZmUwbviFxj3GQDqVfpyiEvfgCHpcQq1ruadaXhgW9nKvhS",
  "key19": "4jpPYYSPCNhq5gRExh3Lg3ZGwEJPfS5bFmvVdTV6fPFKdNN7d2AKJ6wuEL9qg7Bi6MsG9Mefm2LeHS8iCUMdRC4T",
  "key20": "36crJaqybqeKSkmDCyHgJLCymBdYWhUwCc6jv3pTunenmDz4vTWSMVnrX5vZx35yZrF7Xvrod3AYoD8HPk78K6Y8",
  "key21": "4N2ThXbCqRBVMemtS1YDha3yCGxkJnZKq8yrtrvsvTUWYM6bQYC3ELt6ETWmYwomZMtVPgA6zsF2HqxsH29eFi4c",
  "key22": "29eppZ3BMjje6cscbBCmH83wESXoE6NZUKpxdi5ijaNxJUr4MUV8eJCdUXnbRSF3ygdJRSbATEguF4KCMMBX6tSn",
  "key23": "2xi5wKX6BznVo8TFPeGdTzEruVpRBor8eoF7UXEUD855pwLcbysJ41DR5FZ1xGVDwxVTkKPnfJCwDZLLfbdn7uhE",
  "key24": "2uznCbqKaLUT3SSFUM8ZBWvWdopYqKTfpMEYMzoU9rF2wSN85ztMqdBGRb272fLEB44Zi6BAEBYNpYbBCYsDskss",
  "key25": "2dXtTojbYEaoPCCqNiMKMz7ZvbYcpdxdSJWpdrwNQa3pMBiZG5WWcQex9gq4vQe6at4DdFEy3Ud7wih94wXfP3Py",
  "key26": "5FA5t7aXUHAFuePNmDjBFRBRUcE8ehg8S6XzeYopyKnk2nNZnsD71iiTgzw637VsMSXNL5f8VW5Ts7FDVSox18ro",
  "key27": "41cWEEu5DbF1XLuNHTaYhAdoRozac5fFwQdFRyiyS5tfXUSwben1F9WB26S9KfaMUtBb2rURrcbBxPgB2MeqdatP",
  "key28": "5FYbfjfHddJiqJ4QN46ULtDaqG7MJgcjfeqhB8uFQPuLDoo6WYMLwqTLfhVEvpLkPhLZXEfhc53aYvLSJ9RBypJ9",
  "key29": "5uJpugBzXAFj1EL7ooGXNWSuW92bkKW9M3iDs5PT4YoqW8j559tZUvjDu4kL4ZTh9x3ujbuhPAgqcUjP379gu95Q",
  "key30": "fktsovsr6rUBMTveSNskpnPgXWwvj2zbb9RboNe6SkHHZGmRTrpju7MdpBHD6qY13BEZrUXRSVWKwkp9joPyB28",
  "key31": "cUtHEa1Lr3Zf7SZwFEqwuA75v5KkWsDLT55js85GQhRc9je5d3G5DaTeZSdmMvpGhgVPiZ2TfNMaTKjHdhZDEBP",
  "key32": "2xUJKjDCG6wdX4q9kE8E1rm7oLcPJqQdK96S43pXkVaWJZYNtPpetTBdJ39dUkmJzUrH2AfMFS1nHTp5LXDER2Pn",
  "key33": "cQ6KLAazUymxNa5mLPbtjgVG9xhbhmpNW6CYSvgMYHRE1VVoXn7NfDAf1XEAC9C4r3wwvtA7GcMGho3fkwEqKUp",
  "key34": "bJLtXsfQFmzasWqnhjFqqWKySeDgdHL4obRZY1rmR3VX6h5UxQ37qdTpbj3RkcqGmeKRCBCjnyHS1qZDQn4SfJC",
  "key35": "i2poN9G7o2ryBkfzfyWHdzQeqAtNTF4JJjB9cM4R99n5KZh6e3wnRBrLbV3FVVSHHAQqLEERJUSs3NfFnGJd92s",
  "key36": "3Z887rKjRzQpkdrfSbLG36kwPdKqUgLXUAmUtQCx1ABySCMhJATAEsGEc9FqEeqe427w9qcrG4V6x6direEAbamN",
  "key37": "2tyrZGcr1nCRGQN24H4LrM9Lq3SaMzPnFQHkPc9aaGfTceBhy5QzRJ9bFnKgWzd91DoDvdMFAFwLiXzfuLe2wbQc",
  "key38": "2aFbpNZ1ngZS84MjW4LgVKrTficEkUjRpRHjxeSV8TBx561REq67yTacwgRrXUxZCv9TXCEMcS7BFtpTbKqAcZhj",
  "key39": "4GCjwRaeyE2Heq8R74fcJ2YhMrXfQdSfopnyEB4TQpoDkwbiUjZfMk5WzTNrbUaAtg8ybd7aJqSW2Z5W82rFvV8Z",
  "key40": "5hQnUZQVa6496QkuhhHyGxthFNMA8JNGGoALMfPUzRYDixeFKLsSSxFJsfNJyWfychfLtw91yHjc9yqaNkpUCdRd",
  "key41": "2F1nAwFgA6aEpPeFptH36yCsLLwvgJ57SrwWkMQrBvTEShg6hZaxcMwjVtEGFQSaASuLRCECLF3MANP5WiSC6dZx",
  "key42": "56ErjWB26LCwZPueB3A2UUQbSDKEhNaRbtSXUJuqvRctyR2Z4gRKyp1FvoBeKL6Vp5Mtg8ZBwEKCMkC1refFeifg",
  "key43": "2rDEzCnxCJgebEPrPfe17CjFV6E68Lq45qPMUo5bjH2c93ZnzvM6P73piCe1bKCmCjZindd48iRXkrZ1JwHZkk4i",
  "key44": "3BcVJwU98UNdfzWvESwP1W3UZRwYetvtwdxFVQWMw2NuySsYK6zawQP4kejDLNWzYAtS1Bh3kBmPTuYvgLETEfVJ",
  "key45": "3KF1MsF6MAVJ87HTSrcvYkT36QqYTkyaUNy3Cejo9pEqp9iAKszxmZc16fTSTAdNUhg6aueKbdccupcv9QAyi9Rm",
  "key46": "5q12VkwY2DJwd2psHMc53gSjM75TCW889LkqHMPWMuUjLGuaAnhibTGYPZ7S2RqWReuC4kfDjNgqqzvsfSkdpod",
  "key47": "CpxQcHQT9vRDLm3wvQKqQnJZP9XkR8pgSHZq7UDs2L9V8gQfhWSTj9Y1LCJS3fZjMe4T8AM9PDQH6qq4hCTfvoH"
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
