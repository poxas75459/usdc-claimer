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
    "BVvWs7kfxeqGUP4jfyNuDz8LmULmvArDWJHj5CL37X7FWy57pZPS6rVvVAoxiZ4chwSfXgKTGjez3CgTEo81TDX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qy1aQVyzBcVCbJFW8RNZsQctXb1Cznpjim3dXWUmN7oH9xm21bmdRXUt67gAtqaTwUMTDF7UkEMTfjJQgYGR6cU",
  "key1": "3ADtTpaYeWocyq38mBHsKbGraj87ViCQJQ1dfeM1wVrVS536y9NgFfq1pNeyfro9mJ8bLM32Lq2KVKpUt9FNpUKv",
  "key2": "46Bio78jx1Hc721MZBZ7TN5BsGPB7svF6HzewCktu9xduqq6uhG8pHJo7tRZBp8qme9eYEnP5Z6LcTzhiB8ZACwB",
  "key3": "4R92YaUrb74vhwHtxiEyFEEFPBjVmbMYKwyaH4VbF5tqn7xCkUpn2vb4UBvLA93cwqZjoDGko6kh1YWRmKhe1pss",
  "key4": "3i81WtJoMHbc5nnSkUjjK8ndAbiuEtb9HMMnQfJjVdwPyadTAqGRoyAWNwr5pmXkdEFiV1YCht3fPq7hm4Zae51J",
  "key5": "jPFvbnmt9WiucCeTgAdFU7a3LvqSBK9WYnpAVj49KCNF1VKWRfXDypfMnp1Fumz1WCmyzvqZW5U76hiAP2Bqn3c",
  "key6": "5saJAK4BzhEsa7gZQb5CPjFkfTUSGr2YP8MHCGh5z6mT7oQiN1irtMTM38rueSXStKYm1edhSnVbwEFbxmngka6F",
  "key7": "5f2VzNkvk1tMeWk8Xth1PzekeTkxt8KGtz4uAZ2x45itqBRMhngTz961T8gpHFTRdVxJ39QLRhS13cmqoLbkx3L3",
  "key8": "2cnr4e17k2z1tv9tYc6uLfKixcCRYe3B7fr5HF72QAufMyKt8xkfvztZ6rL35jZH4T1i8ea25RZzy12f9TWNTpWP",
  "key9": "2gUZQpAhpeozeCPn1NDuzBhUVKdeKkKVkf5q3PtKMGqHYwX8FNdapuZko925S3SJBaTxUMDQ1H9hyNqJkecraiwa",
  "key10": "3nCwvmJhekKDhgoUUDe5Z3cQF6wJVQ5uVw51bkS9ajzTTsrnGfFyZNNd1SBYj3iKfdNQjh1TPGj1rgnVUhdZWxCp",
  "key11": "JEAR3g4NMhVdqNoaijrSBDeVUiaAzD84PS4AUBB6x7zmbAaxN2ZT54AFDu7TvuDK4duKfVVu7Vp4s9oyPKpwrLY",
  "key12": "3DT1NCUYrWKtj2Jm8WWsQ2UWrzEjBg1J3gt3ToaeCY3NvDZHxQrKZop73XqQUmm5u1UzpmyZLpq48rddb6sHHpzf",
  "key13": "2yq5zdaGLQaDoouHWxN774GEUvrbmWmG9nWYUbvD5urUeakbB12Hbc3y8Wda77vu4DZYGjLGUDyjL3Rzv2b5VWic",
  "key14": "HLJsnwuw7fwF9ZzfQbGQhStzXLLUgYQNmXW5n73KCN1SKNMeSCvygdrUMPEA2KSFzsQT1qBjoVTwTDeAv5WEyhQ",
  "key15": "56T93sRMrrfdcB48TZEaAqJ5Kax1xt21M2UWhQZvo7MtnYmD2acLyh3WhPcfj7ZaaayDbmyHEwyDnbEBqfEVL5xV",
  "key16": "z4Pck1E7SCPpVo7Ddy49XoA8gbWERX6DWpuNfpajbad6E45wy79ovwjRWS2g9LbE8zeSUjgn463gMBfTjwS4vFE",
  "key17": "py4mmT53Kjz5GykC8g7hxYZjmKBf1cdwE4PF4QibsW6yQCqWqVgEa1skLQ888Vh3vZQBqmvpK2qYw2YJ6cumoeX",
  "key18": "4mRw4asT3uCCFxrc4qjXvqi6AooSA2XoS3qNH5rGEdoKDNcUhAKuoaZUPg6vu3H1s5Gd4dicbBEHfWNzpfZ5Ahtf",
  "key19": "2DMvxfehfdBt7jnQVCrna8sQekXkYfAgfAeVh8nsMUEuQeMPGywBqZv4Syup3RuDf3JeqevVEJT74WNLpEQ9hSWs",
  "key20": "3Qz2F2LeP49MaVYi8fbYUeL96saxTEUywJN5rmzFG2C4jTYkGSRGH58pR2oLFA4hey7ZCSt3KA88mmeDP6nPcR4b",
  "key21": "2VRwdYckhxNAa5y3any2Y43RgjjG9rWbRy16PTvk4kbbf6nney1trTjRNGEMGfU1PDFA4yQnGRmZiw92G2VXJBq",
  "key22": "65WViuBF1371A6YtxA9hVJsV36wzjLa42TSbua4AWks4vYtghzgMTJKp6jeSaer7WvJhu6cA3PR3at662HMGJp5y",
  "key23": "4P2PZeSujB6Sqve6jSjkpXyWPhJkRQmESsoAuwmYgjSe9rZxo6MRH4VYrt7AYaqHg1trt7phndYsSygRzeFzehtb",
  "key24": "3waYivhiF6ugXiKzE2mc98gWSxXPW3CPEzgGkr9pGEmXtTroQRP7RKL6o4aeaN6bQtB5z6MthSKQjeio69sCLSAc",
  "key25": "oHy6moU3uDAdKvjsT9hNFDa2jD4GwGTZEbmsscYxa7W5p1JPEaUUhfK2NG2fKS1vyMSD9xkTU6YAKDCKhZRi8yg",
  "key26": "Dp2PEjVQstnCtzyDMGhApwrWPy3UWmDuzrktjBcwopzjRGKzeoJWJJZQJ334Ww6EZfQuws1ffc5q2Y812AJMsTH",
  "key27": "5h97tNhKMYWDgcLsBxJTVSRXxXjiT41xwETzYcndeY5FMQYCgLV2EUUgdLyGAL7DKmmH7qB6gCTTDoewNP5MbzX7",
  "key28": "63HgHovwPxAzmLTKeAdTCnAidsdLrGDz6JJsb2YJn38q6fLPDC6UzRnbLKcNdsoyrLWYQQ4hzE1pfcgF9PF8D812",
  "key29": "55YfGGNDNd2mxcKxmQosc3wahw5EJwdn5zCLZ6dd6JaQMvzTSBJGv4n12CqxE2i1E8kwQnxHMcgPvS51K6p1HfGB",
  "key30": "4t2kn4es3z5Y9Q6x6VmwEeM9sD9Z9BiTF9Km85NYebsYEnUcbRDGnR7imcyjMURwqkVLNWhiSbmLUT1ajkiU2D15",
  "key31": "5zAoCxT6hRzBYrTAi4hjv9EuSJPuNjAcBbQ3hJ8Y7FSbeuCy17tEU31CCnnB4Zu3rryZG85hsVFGwKMzwvvVu6Dt",
  "key32": "b9bKnJAYuYaxgMGtdqWj8vLKikHrRAjXEJLprKox5T6TeAAPS6Y6YUuefCvSm1mdZXFxdcjNQ7Bufp8SRnKP1Mv",
  "key33": "2yyJLwEtWdqropLetRdxuVGcX3aDupJ5wiEeVMzHEBrvkEREUbZw14gftroMaCFXjT2Xui3SHBPgc2mvDnGxUZtZ",
  "key34": "5ChQW6BxtqBREUAywRgpJKxwrE9qmnZbbdYMgMWMzbUAAXS9B7eqeH94xhvsHGy3V6qTjLLZTihEqZ32WNjNvmZj"
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
