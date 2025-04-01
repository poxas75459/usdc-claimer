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
    "229kuHN4un25G4GLE8G1YBf2tsYTCJ5mWW8mg1nP15oE6rF5T3VaAnHTXUoF73NuTiGjzYSpUoCRt5msZNXzXesN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24N5jbczLWaHtGkvG5nZpu9XzsDV3WoS6czxeCgYVuT7S7ZPBbPCJ8DpRFSpf3LSGt7beQ1KCA948LW3t8aW9aJa",
  "key1": "4wvKDFXtyRHB5pr2n8wgrgdRHSvVuE4nq5z3VL9imaWgNrM4Ud6DXbrBREzTtwFSSBDfxAb2WZdd5pBKk6PDGrKD",
  "key2": "5vwsB4aBMuAMpo92jwkUJLtNZQ7jU191JfKmV6GKBXwCBSEjRBkT9BBBPZG5UsfyipXi5S4XymeBeRHYTbp6gECo",
  "key3": "4LVMMujcWErTvWiCkabEc6nwnFU7vNJZGQC9cXRumm4rSXUo8xC7dGHSoeiGWrbVgz243GG5uVxxuyz924EaPbXu",
  "key4": "26QX3Pzm4vN1DxDskJv2otoD7aMErYu9VMzNikQiHw5dysL2o4KSqXGH4C87zGQrQNuS9HhyCAWHG6HmVg6bpCFZ",
  "key5": "23EcJek7QALAopH8zZ9RekASySMWmo9ct64vcR9KcHwXjBmEtaMKmV2ubFWhghMhWoRm684nuigd3CzVWyKbTYQ2",
  "key6": "5ncPm13125wFDdeUhr876Ee2VkUDvDuiNJPS9Trx86tLxgnUEe7ZPeNRF3XK3aL5iGaP6YuVvrN6pNYfnQ2kSgdv",
  "key7": "2jiYihfkEPC8SJt4P3YPv58tM36UnxSJ3Nt5wnYN2KFzWdzrp3vkoMVKu12FNKA4ko2o57HwLr8qcrvzwFFsH5tD",
  "key8": "35ofzuQxTdzYWL1EDWnCMrRC61ZQXKnVocXp9MH83xD7HQiYN4tJrRwHrrQHEpvLgJ82342pK3UCnjXSLLhqpx8P",
  "key9": "21oLeuUm92mySVi81aWuHqtuwzCszd4p7stXvajdPdzZEE87o6H2hXPoTBUZqpCsz3h2e6N2WLFdoGXSDDE9x74E",
  "key10": "2u7mwfhU5Y9yHqUHs6UVMUdKymopmEsCTEWdYMLhi99JWwcgcJ1zP9R3SvSjN3PBmw6zkXxkazLu35yKcGC7hWRb",
  "key11": "25ZfFjMAoj65uxhtmwAXmzWbMqCkqDby74UoQi5v4LGc9djDGhdvNGo3GNLF5pxet6KoBN2H48L226TRZW2MKGkj",
  "key12": "Qb8J7btRRAcejh48MZ8PSUVZUsfbjV9umYyu73XrK3oKVBE8v1cpwonLahLkRQzcih8CGF3hbHVzLGdADAsYq98",
  "key13": "4dprHurzSUu6bQC6X4q6KfWyWeHDnHBjE6Jctutju4RDd7kGLy8dYdoWuceDmPcno4xcnQE78yBngk3qDuot5ymu",
  "key14": "4Amgma3gCQetxD9GeoD9cAAH3vfhjz75CLRyQkfg8CrA1LysK3nYQRUVhfd7JVUtD7nn5nU2VTWJFVL8WenvKPWj",
  "key15": "3wmsLrAVBoTsdbwhGVgR7up2xV7SAc3DF3vSp4YUePWuvowCxS8kYY3MwzJVsD9CbtJjDGnU1pjeS7tUAPySKeXF",
  "key16": "5gE32yqQaumbYnmgVGk3f1Gsmk41rU33ayeioZEQmHB2yuCjM48cc1hM7Efr9Qdk2c7ZB1H9suM4DMW51q5EgEmA",
  "key17": "27EX5eXxNKrKWWk5k1SDpD5M8XFiPyMxqYoaYGmn9Xnuu83WJ7sz3ZMr9qsHbnNECtFrFebFee9T4u8t7zV8tM2T",
  "key18": "vBeQQeqHGNsoR7BQf7aqkZV9c7GsUtTSzV81JVsXKeKrtqaifMFLfQbmVpDDeJh83QaTYWMoGeiQ2FqW7pptxQH",
  "key19": "5bAQnb8PxCsANknCzhcsafGciUvSKox51EQRZocuwG5jVVveVH6TGJUn8NmKfxt6BNBGCXZbPWk3SnLD3mmghMbk",
  "key20": "8V1ibmYevGJfTfKQEVw8YC9CBJXayJw6RNJbJzqW9gGPg7ZjVD8Pq525YtwT3Uki6mwAw5UEtTtL6cKtHJLFrUE",
  "key21": "5MHpaD9BHfXWpQjtxG4Efky4Fmvp9YAz4BgUKajEBuMoBZqYfUjYzrDWJU1EYU59hH3RheyuUtHisTMWU4pQHho2",
  "key22": "2VhfxrZMNu4F6iaRJrRnKfjuFCMetzHT2L87vrhunYZz3ReHLJdaShqTQnyGBJsHBjcVDHp83Lmk769jRhi7uXfH",
  "key23": "21aJuhRwA3ryMZN7duiJFsCU6SJt2jz7tuLUbKAFNs66PeCDUQmvqgnpPfMH6qZGXZgzGSjd4aDjTVUMsTBi9V2R",
  "key24": "3pd2qrvVH4qh6L6pDJ1bDvSZvygw2FnJ4qpPetbFiuje3FMkDjEdobxwtqwTRiaU3WPLfXHYCyfdxKiJcqFzpMJz",
  "key25": "2umSQoqnmg84aK97BEUfmbjKYtGa42VZxXTgVgvZqZHmpkArjd11WvHupFms19teWTrZaSha3V8CQF7iRgVC13L5",
  "key26": "2ErRfEKrcRXZ98uVh9fomhCWhFeEiHXAvuxrxekmi8rxousJ7U1ikcAZ4Cj7SujejYAvKWpRWtUne5jmUJGN6Eiz",
  "key27": "VyLtd57n53HKvfUgA6eJNXDVHrEdH7fSMjPTo7bzCzJgJodN1ZJn71kjh5vkrpLrijKKJaZ1GiV4N6Dmq77h3Ji",
  "key28": "3LqrpnutWA6HBQH9YZ72rpVugsPkU2QTySC1GsvF5XjJVfzKaB7pkULXMu8jSr8tAzzqhaugmT5RPspSDEjetGAB",
  "key29": "MzNzRo83dEPK5zqhpSsgcs45eqbBuaM45q9yodzfUsucyyg3R8bRSRtRFt6RoTNay8Hxm8X9JtnXHebkQJU6b3v",
  "key30": "5fATq2g4SX2fMnnw6qB4SXZj3Ms5oaeZRqDJPrAwhxc3ZVpv1dK21QSbn44tarNzDCJQxrz5dpp1LVBaX69nNpdp",
  "key31": "2bTbaU2f47M5j3jEv4bNdhHPccKG6mK5fer4FYL5ZQrYc35AG2JSr5X1xKRFKYob4R37GMdfDTspaK7tsC4VVnmj",
  "key32": "3aHPYCa6tronuzPYqSYeX1ZTZgcRjtPfxsaYzN6d9Q6FogBU7jbrdfPnKNmBtfVCXJtptpgnKBmX2W1ayJuvwiVk",
  "key33": "2k6modNtGSj4jMbWaosnymR8q5eP6irEHqXLni6ZtRvuytFpZxEH5rrTE3hjLVir72yJarCpBVPc6jqHKooDbgwE",
  "key34": "2Yw688wC2rL6PP3YS2oTkEpC7eomhJfz4xMT5C73khXVns9C5UHkGpHayz9Jgn3CdGLT77zrZjkJFvxcyQeQ7gRf",
  "key35": "32ga39Dk18YYsQsCt1wzyQLJZ3N3KKSiNsYXco4XnS8gQsSFLCRRXkM8PzJKC5L6ezpSTYrqeS7pGZicWMdkyjxz",
  "key36": "5SKwCFsFXfWTMQJtD8o1sc8Q38xEhiwRjoyz22HjzibiUViv6RCPP6XgX6kbHBt3GNqSnR3KK3mM19aUe1kNymrF",
  "key37": "uxi61aMkvFr2bvDzAPjcD4EGUxRGz5TKBeXZH9jZ2cxTk5Hvc5B9bKfqd5exdsmFmgf2K8TEX99YR1yCWvunQqF",
  "key38": "4RTrC2jk738BMYdnNjyBHGQd28J7sVQo3qwk33EsJJBguTb6d7nzRhWTbZa3CNaN5GkA8LbGp8LYc9F7qEk4gcTk",
  "key39": "3uoznenyRyztsieytLWkgvxKEkRtBP42YZJSyZ7krx7TnTR8npfFmnttXxNQ29v9bUkRAQxyuGX6EyybM5JJGcWM",
  "key40": "2EPY33Tebe2YnX4Kui92CG3VjjR6MoACxZJ2DULKP5bKtJ5xn5VwuRzYtSnzw6wNhWm8X83Lj3NeKHa2g3bWhPbu",
  "key41": "4gGTm6sLMXNZGFfq7Fg94rbcGV53LaHXQzbHboUgpJp7RGpGhnG8MTktDV7pGhCkMAG7w9vSkLSa17vKvJWe8PY2",
  "key42": "4NcMrTccn6RqCJToY1yirfrz8p52dUNfqnZPL99AkU51M8iFDwbjyrwmypzvTmrz3Rt6ZqdQXJiALNp2CzKZcEoi",
  "key43": "mhYiakad99LxiZGn8AdgkbNnoXzsDuWfTTo1RYGX1pDNCdXxNCbhWVg7WvvKAkkSF3ga83g2cDfASYeBiTynPjL",
  "key44": "nt3mbyikbPxk6NrKp1tv8g3rwsQwsMwWmX15Z77R6N7sk2xFUy3sP8qLAiTVvL279neoGxdw28AxgvC58hq9Htn",
  "key45": "4ZhUxiG6aT87H12MoNXTd9YiHWBtcHfXevNaES2PFJE7YzRRGVkSyrDw5B3iMcn1UkvqxbwGTwt7bfsSXsw6dTbt",
  "key46": "3HSi3PE3zEQnyAyaiHmVuCzCPHXwZEa4GCmbRBMg4vPyyoXFQCiireLncUemmusQFd2AVBrB81SBRkpXCvVf6uSg"
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
