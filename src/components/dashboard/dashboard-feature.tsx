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
    "5r3JYuEDdfgb4rSynYGFQFEKMuycGx8qfTzNLuvnwBysc9Es5bBhWzBaEw7m4R1hE4GFyhfb2CaZK3FC7u9NSkvG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d7GBp72wkKogLuK23EviAsFvJJZYtoqpF9XX266anwhQbffoHSxrLUSV7gDKz6PiiYT9heGsw5obr1rt1HPjVK8",
  "key1": "47n6U8mrY2ZBj83T8hdpGC2HSFwD3dfN2MWMxijNz74boR54PJAjxs1XiRQGt29T1E8fQTY4MZzDqsb9tgPYwDLJ",
  "key2": "vhHtBHKett29K4LCf8SopEtJzui1NmNBGfiDD32KoEZ58R85Tw58Pq8as9WkH7rbS7cy53b31tuwhqLeg2McHAr",
  "key3": "3G7ghViPkRD8nr2Ps65yv2Zrp7zfC3bQY4RHLuctLbLCn35JqMoX5fxggKQJAurMVJiseEArfapRosVcogCqDeME",
  "key4": "44XfuNsqxXNJvyZzwBJRMy9i9Lu3SeVYzBB5Rw97miLEujoh9pMzjrniFeoREd1HZwSuEv9gyxvJ7S5tGjNkYvzA",
  "key5": "5YeVcviDkFptz99CBZGBA1a98vqCgQDjjiCUu7aDhwmphThQ4vMqwSH8cBq9kEreezXXHnqTrMb6gk1EabCFyUn5",
  "key6": "4ne1cHaAaZn7NcUgbjtc5uBSAoYmWsKms9VXQXMVxQTz9PDozwfn2A96pcfzuGVknYUKgVs93iyyRRXSC1kV8yyx",
  "key7": "39cpJZV5R3SNcZARLUwpkMAwitzsDJPvTdKCckm9TuuMk2rjjdoBK4LDKamchTasy2SUDC8YPZdQUL6gVXRNkFZH",
  "key8": "3kpkrVPP3wNHNpwq1YfrsBmAMYYfAn7ZhEs6w26BYY7BBQk2YpVxBFfG6gQLS82m18nBefjUFTTgMpE1H8eS1ESJ",
  "key9": "43dzeXAH56Cz4TSpGEjeuW2mMABMCkbYhc6UhBNiRL9ZP828y3c2HBvS9zEhxqt4tSpqHMgpx9xA56mGWrwAfd5k",
  "key10": "4ZNFsuhC5ewNrGJxukp6ZdErxEApLjJHRpzPmLSaGCnPCiUWrbR2Q2pZ5WYFB6m1wxVkxTdtetsCAsSQq2Ap3Juz",
  "key11": "5ow3PRhUwE1qGDajLiXnJPudJmTKKLsG6UVQckbyJGAeLJyRS4JybgweFLCi9X18bVD52tGCqKTFp1YWDnxupUiD",
  "key12": "5PQsWJjD7DFHXc4zzn1VTYSroD8eQmss7zq2yARWcvPC9jNfaQytiA8rrsLhbZ3CWQhviPnMd6h5m6TE8dxziRig",
  "key13": "4jBJTByvhhYXGviVKTmgvNxahkiDNxoeKqbQbNooH6vjnBQMLjpdLxaBdXxMTWVsdSq45k7FbtAXXorkaAURyfda",
  "key14": "2KDQwMrMNFn4NuUYzv7yNPVnsrixNLpe21b8XeLAo72xNjRjfHAPY4xeASSB3WRhhtV5uZfPESPY2jG6b5hyJK7C",
  "key15": "4tbAFUyrWFfTvidvK7PMi1gFUQBBCMu5VDprzg2FcBjupBg4yfhzSZ7rrjUMXMhuywxhThrP59V5K9ZDFP6E4KPL",
  "key16": "2z8caTXk2V5AmftK35ShYZAksX1o98wJYiRVXg1GKPGv66WBUpcFwCzg26SPM2WhScZ22rtoHMbyKzMPL7bbnRi4",
  "key17": "4UhvBq7vxKwiKoDayzXA2yiRTmyZJaG61y4epzDG6eDg5n4Jttp7pYGp43ZbjWikfso3kF85EP7aQGSwxEnjas7P",
  "key18": "j7kVMS1UeX3CLuZk5xk8t5mYwU3C2GL3PTmQRRCjcWrCR7J1PyhnhuVg6ZPe5MHHKovhkCvTPJK8mg76KNPXygK",
  "key19": "4N7odwQ9w8v9ZmSVJk9zTAk83xSx5rWnCQC76HkssU5cyJPBFpxBoh3ft9SpoFkaGzbeex8nQHSGFBWjjCT1Li83",
  "key20": "2LLzSB4YWu5272Zjo2BwXtHdpiHk5u63YRxiDPTKBViLUGfRTxAWzSQWSAcFAmztMRYVQrmBJ8P3CmiUU7S2ybp",
  "key21": "bZXQ68sJuq42LoghMUrvUFDVzewUGhHrZjP3GgGWtRvQdKGckdtacTaj3xAvSP4mVERdcffGUxRhfdNpHW4AM7K",
  "key22": "4735xz41contwwcAFYp8rZV7DsiUUexVEHeUj6xhi9pt8CDFhkx9GjqLQbTjWbJwYk8yTEBpbSTbcHT58sc35fS5",
  "key23": "39xrb1MtMVXwRuAz5qcxa4Rz63tASoZoVU4xCKRk899b5r2WMGcy8Bc2ZcV5wCJH6ThwrHekLW62H52AgE25mHTB",
  "key24": "4YDWTM3QxPLpXTNEoMkktML7a9p5WdVN7YkRH5ybgnzvUndMFsnsUehEod6e1NLMh9CHWwX6TPu72PV9Ub6YaLpb",
  "key25": "m2yyHCnS6V22yYtNjGN4xzn4MLroMzwRfaBRTnWp77CeU494vHw6s9Tm3XZhoNES4EcKvYUd6zNGZUUpzgy9BT6",
  "key26": "4iTJFzJsQi2ULJC9GqAZ4qVXiTGffh3w42DQK41GHiFBiF7kWikVD1ysa3MhZD1TNsd8Wf7rZ96NiPqYwzFm2GSu",
  "key27": "D1mxrn2L6DjSASANWjMEbpGrfGUNHvC5fq5vWXvVAQVpjnKQJ9kNDiR2tSTNei2obGqHPXRPScykx5BwgJQWek1",
  "key28": "5cNqsxbHL6o2c97QJqdep4gNpqKF32VVdepESkEu8zRUhdQupzEDQkdUcz54qVdFLJyD69AWWxmJcFsqCoVtEMRJ",
  "key29": "26yJgNJw1B8QBxLMKwsAA4ppBcokp9YqHCDQNmaS4SXaFXhhdMxjiQE2ADgFaZw45PcGNyAQPBaDViwWVUocedeX",
  "key30": "5ZwMngTV21LSQExGJ5cMc6GBThLaVdHWERv41zK3vGcn8ZsAHNh2MtvvCQ8n6c6Qs2vUHhKSjKcnpfqbKbXyBHYQ",
  "key31": "9gpERQrfaoJwMCatwKatoBzBtyYXhbu2pKmRXDLihNebNLthVX6354VykjoEMXRrdFb3iXAGop6y7QKcbyZnFPf",
  "key32": "yHBTgQrTsJnVt4pwWqhm5fTEmJGyfCPPHjDcXghEVLDbTpVWSRji4rNnQRrbJRHa9wsEWXyNDEf2qAkS9ZYCHxA",
  "key33": "nMxekQPXU9Hx8sTp6mdvxpuFCXAXeY7grGx82YMtBggzEDFCShDoEv97z1NTjyLuTGgmcMshu3KGUzEipjtappm",
  "key34": "j3GYhSn8wHrFq4aaLweLFLrZiW2XMbvU5tKhwht9G2MUJ5yt8UfsnsTShM68Qc7h7nb5csgu5XSLHBRj8XdN1Px",
  "key35": "4Rtk7fArYsLVReiaroAZwZtSMdkGPfB1QXGajNaLuH2JsHkMXjN6mqKGr3YKQ6DXGPCE9jZhhtWJ6VAauG2jmK6x",
  "key36": "52yTbaxLMQ2r3ZuRLGLqb7s5WfoH4B2qoBRz57tjcdCRE1Ugb9v53Cczyt7p2Aq3JBaSmCQTXuHt5C8wQLBnGbGi",
  "key37": "5m6H2myEfR8NNbfHHNUaa8U5obGZwA2Agi9sX7nXG5TwoY3yACYAcGA7At74dxYZh8zEZH2domeGP5wFxj5QGsSe",
  "key38": "5hsFipYhT9zVA74JiVfFNz4zH43JTcSgrSfrHg9wRmpQq5PSSPUEMr9caW7xaeRAjah85uLBhZLQeJn1Q7A6PNcc",
  "key39": "3TkogEg3WX731PMVEBCgHZDFLy7XbYsYt5YjHbVdbCjZcABRAoTWnZwf4DiVcSccyieRduNv6kU4ZAJVFxK4RRZ4",
  "key40": "67VfyxzuxtYuMuFW8avafBuHSHxy6pbEYAqbRsZRCewFF9mJXya34ZLGc2xmzYNuK5cruciAHGyhANAkGb92cKG9",
  "key41": "3kMWwk8K3QTmW6QbdrMunw4y4GQg3qMp5qbnrYZrjHmQ1iXNAHfUuJyrL9jtTWE5r93ejdwBXpKzGEfA63BnXASM",
  "key42": "5EMW5iAD6az4HozRcMne3Hjaenwn9rx8Xhp2DWCpEmFx5mnCe33PgB4ow2jHXBLPyHLJfUTrrDtfUUAHHQrrNSVw",
  "key43": "5ed1igoGMfzP3HpVGAr1vmP6sP9c66arNiYpBiRne2iYYbYUdxQ3pR1wCZDhJSxxtt42MJtjp52VpbUzSagGMJAY",
  "key44": "jCTxjBFRoSHkMGJj1s4359TeSk3yYMzZVv6uM75vU9bvEzECwXB6GGyUXUqxzbH8nQW3MysQLTqNR4m4ifAPjLy",
  "key45": "4pGZDem8HM67pEyBvJspENoSn2TGCgiafSHkS9CY9p1q573Y8MtBWepuzvBiky6Jp7Jb4Cm5ZXJGyhM37rjocVJs",
  "key46": "3yRVKibbu9GSrSNDSCH3r6WDXmhLXs8CrGcsC1uUYRfTKUSzRZDZWHk1WYpUCqHBXTPThTsqenLYxLrqNg6Nexfw",
  "key47": "4bu6KwQ5wzfxifqBx5MiWpT4MCtMd1gfLBk7NgFn5LWDtiLKE2ThAAhr6JyQWrhQBDKyjiwAPL4CPxwpjhHiKUjW"
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
