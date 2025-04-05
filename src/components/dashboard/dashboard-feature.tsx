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
    "2pVN8KL8DHuor9UXk6enpyXkPhMWVNTeh1z8jWZfVZhtAQX6SnQMh8GCCXZ5kxciUDB4NDLmSqYhWN4ZjkWFBwSG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B12gbEJX9q2fVv4wcX7uPCz7hhXG97SLg8M3hEJU8igdiTXyP3ceG6f2XsQgKTFtBhvuLL7E3yLF3x8c1PvDhMa",
  "key1": "T8YnLEzXtUJpFpsUa6Ga7ZhrRZV51JaucXteBeqKu7jRPpEWXNo9umnv9SkNdSvySX7MVT9WeC4SLhci3nizDaa",
  "key2": "TGxo5hdij2LzRQUPQbEAypdTpzX1bsUQ8inukMu12dKe5AmSp2chADeFtno3ZvHgxBY5E4N1iMyc82nLx4oB7fT",
  "key3": "3e5ZJM58H23J4DYXNneMwRdBtnv4e9P7mYpk2U8pkRNXW1NkFfmDc7ZYgFReqd957T54u4o22qYm3ZZa48BCUtEg",
  "key4": "QeN7q7DmzTM32wthUGPAQKKYDgsW3uGTtzijYcdvYvjQ93qiKmxQPbwpJqXFhvMg8zVA1guZTn87wgP9XjRg3gD",
  "key5": "3FeD3M8LTLv4F1bmE7s9qcid6GGAZFiogoVCWhscnveXfp7NgWYQXoZ87dsM2PcdHEnrdMHzyNcBbJoCBrB8qoyA",
  "key6": "3KjW9c8ofv1oKHx2TPEKFWoRcdvzvoKRyzE1s2rqWCkpcii2cg3c3NqUcm3jXaEfc56hf9THT6bmG7ETyoKVbbUZ",
  "key7": "4LV9pgHjyXzorE5b5G355N14xxTdnXA6hkmYggHGQSTFrtcT14FQEGxiZyfKRivnsdcX15F1FT7YfQ7JijTwFKL1",
  "key8": "Hdw7hU8ed139TtAk7NADsc87PgmA6tGJbEWvqSKyt1Bx5K2VzpUJGD6cRjuy212yyZKLyohxb9hi5kZMDj2dvaZ",
  "key9": "2ShkVP3WK5h5MJ8nZidFJzb1UP6JA9GM81uoHUTytgTQdfTS3ee4rnoiFYiQ39Rm6CGSykD1uv5UinDLHqPoniyz",
  "key10": "2Mb7TGqpeAntxNPhKs4e9JaKS26chsPH2AoVQBSe5saJoADCPoRS81L9W8kM5apRePS8ju4LQ7Zr8RndzaPTwMN8",
  "key11": "4YJkFdqbWrxPRVyqPRqxatpTG1nYX9ekg8cuL7LunEmMN7dPvPPnuWLyAL5Ewzo7mXTREETeE6F1tpZcuDP1kdPb",
  "key12": "4v8893V3ibdwz5DhhWBZoyXuwnNwRVzFDSvGJnHXWjKuqiYm65vvHCWz1gX6JWJ2GZkwPwxB99SwKaG6ahA3HRc3",
  "key13": "7uwiTPbzKmYRnLFbmMfWzfFyoJMB9WTh8cr87tUzSFq65AzKCGhXqVZb3oKacPVyWhoTaUXmSWKF9YYX5EjuvUt",
  "key14": "4RY7QmYC5NDnBSyqooEXC195NQrz2cY6gJa2DA5WQBmhyeZans45zK93yWL1FJ9LwLyZ3aJVN1nfKcUw6dc6C8r2",
  "key15": "4Qh24dF3pQ29jNaRxjRjuokEA4krb3yNoQoN4i4oy5LVojvHSvrPMtebJQTKDW81NUbAC2xoz8cCd9R4N4VmeuHA",
  "key16": "67Gi3BLovGJgx4y4DUC2f59gY7ffKPTxa9EvLGiqSantHGRLpA4gMhGb4U2J1vbhUehiPATCGjnNazcM2UgGEDZj",
  "key17": "42hwZShQtXxCFy3LszuZWEQY1YKavDbFkyfeKGyS6ZtAUfhw5JvcjFCj8kRMvGALY8dLPPxRriU2xeThAPrzH3mv",
  "key18": "3tjcQEyE36hoNzr9K9GVTfRgCib6kF6qZP3HtuzCL6fYYiN4z9m27sF6NU7Q5PpShq3y4f3WrmvFFzGoMa76BxpA",
  "key19": "4xcovkpQ8NbwJptmbWsDRJ9AmzeN1jph39tj2WqXqHF3WodwCQ3etvJpR3SZCpm9Z3yVxqWduGsCwS1quJV7v8V5",
  "key20": "5qYtn14qwLw12J18WLHYrWyJBdDum4SXFd1bS5Jwc8aDftcieNSs1Ynkmh6GbXyK5fbaifwFbhDRvJSCJKuAcJZB",
  "key21": "6JLA3aNNCZCDHpB5DRM26ZAG1dKAkczfeKTgwBCCx3iLp6b4xTJxwJSZ9SERnZL8RWYf2q2476XBmRxsTkCa6sR",
  "key22": "4Y2Wx2GCpViz7sWqaE8ZaPXqgJGMQrTbaHovzm9GywjXgyVFkouuZJfxJKmP97f85x1aYAu6akTWSYUMeNSfhWP5",
  "key23": "5VYVMfV7eWM1ij6oxuUTzeq7sZvc2WkMy1FvQsSzPMujLxKiNZUy8NGWQA3SKtKepNotyj2FMjkMayoJfa2HnE6Z",
  "key24": "2DqvFNNxMqTDZkcuKcdh5PCZuGYXVwNcEuKG873qFNDyLwFv7uDYHnQPmyjFqkZYBJEnsCeQgLVmh6U8wK8Sa77E",
  "key25": "NLjeCD2UYuDXmECFcs5dVDaad95fTz4oCGd5Mtms9Wj65XHN7HQfGers4dpwU5t4LbPsdYvUfrgdBSBTQJ2BgmC",
  "key26": "653uUHUABvpRmLs9qLK5Er6jmLtujeHb7u9T1LZhT3hkhZgMpq7rxL9TLP7u7R1s5t4oK5CAuMBYTk455m3c1PMv",
  "key27": "YeKaprDkvMmrQQ2UYT2Jhc6p8KBZCXB1C5hFXW1Q6JBeCnQMQApqfLfY1DtTmJAdh56ehwZ7b6M1PvbzZnxrZyt",
  "key28": "4ozEyFekjbN98MBp9UoNHNu9gKGmrLoZqiv5pEQwSRnaJnqvgyFEPupm9Gh6i6qk6zYeWS2SRy3kWuDUsyCS8Liv",
  "key29": "4qPSbXxSaVjzVhZyzHnSXnAgnaXuMTt7neRzhdRJx6Ppfhexf2A3dThToGCNNtdyNmAFvrQkNg5KCydBcdXBow81",
  "key30": "5U8WpNFa4pscPB5rwivXbyt99VPWKqyvZXpBVtWjfWUz8SvGyzHRxMDJ1Wi5gtUcjqze8wwQkPHNRoM1afbSFcCi",
  "key31": "28AjJcipUdE2k1yKj6ZmMH7TyHikGREAVL1P4NNuGKpjWjxQgdcRniaCwR3UnmkpMFYWotJGiViLiPDY6bHfrUmA",
  "key32": "7HvzJp1sSKUwAYK2PiojMeYSESHdgvS6yeaf3LaDRQEJ1uJfEpDvNRVbMbBLLbozesnbmx5m89YsVWXUCuY9vsS",
  "key33": "3yjiRTKy31ignKfdKKpcCMLK6vVgAraBwpoCVXDx1FrjBmT9WZ21eA4wmVmn7HmfctMi5hhPW6qqqZs8PyncMtKs",
  "key34": "2z6pidtVHZowhBQ3AsWmgb5hkmCJqoT5L6wYvaigUdxiuHY28YFpJdNx6tYYkKr8FHhWcyevxsR5MqHnQa96hcKK",
  "key35": "5DGJn99LojBLaRTaABeo6id9Z7MUAv7RF3fVKXk1viYrWbzGV6pD6nBexYL7J43EsvGfdtGLWLrpnuB4zXEFVCF7",
  "key36": "tvM98QU1pg4xJDd2ivRoP7bhXfs7cWsXPSsM74N5AtuoMqdYhAzd1bgHDmyZadLDRK5aF1HjnA7pVGv9jp78pE5",
  "key37": "4M4uuH4UjZQJ884UEna6N4X8j7LC6wxJswFcj3mYUdFByxKPvikUNVLCS1N2Cok5VpbGQ3FSYPFox7R3fUhmG5ML",
  "key38": "4ocvFhiSFUQA43Dznrkm5qYDzi8UxC2kzC2VhPXJSTBWCBqQ9cfiBxpMzLzGLx5u2S3NuRiaWGep1T78RBjAMpaB",
  "key39": "5NViPMQ7fPArLMwB3YB7tRKQkeNrd8AkCRysEEiSxvfY6dUrbY2FSHH3jXtJPao5GNLqwBvaFb6QmtSUCaSLhop1",
  "key40": "XZ1c6MwF7wvnsK2hEzYPkhRutdpyiXuehoN2J78o6kAh17pJaX5pTHCP3kRrYkUqDJGDPmWjkegWAtrUnYDQd2N",
  "key41": "4cu4pSuGs69eD5sC3BZ9Jv9PTzV74uhtExNQsrV51mAnZm8QXg2pbQG5jxGh3reaRgyX367ZMmZbkJqBrcUxGtC6",
  "key42": "2CDCGXYUBa6L18jHUy7hsqFmwXefkfQ5kk6WkCP6WsygBPHGgxVdpY2pQSua9DH3sTKeHfbJKBNpKgjaBqnNeAzX",
  "key43": "3DKva7n6TevEgExE6WJyGszdAyVQ5UZXJkvibgYj9QABFLNm5eUNEmrXtevLarHBB8JiY8aoyBG3RoX5MmevBYwW",
  "key44": "2oRbsZMGMm5kbFWMZpgN61V1vchByrFeaUJa53T7ndLkjoZwnyPvXwMxiwmsizNCW8M43qARgS7G7nor36UFxgTy"
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
