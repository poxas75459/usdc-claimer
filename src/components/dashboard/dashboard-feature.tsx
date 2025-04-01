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
    "376Z2rMWDS7NmNHLRomoFoABN3U1Z4L3z5B5TuFLJxHfw6VP4qspRLWLXR9PaH5Ayb6pPapBEYGXuVQxFcDMZG8g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w1EofjyH8H3PYBVC5oN39YrkmLuawzDvPsSLMmh7wBGQ87QYo9nPTWKZxuKDHXZW5AiLnurDsq9HbABXXKGL9HF",
  "key1": "41eB3qUbUVsNE5DwjAU3T8KPvTF9YVixWaE1GcXKMfmvtCH4pMaBWpNbzunBPXHuixtEb5bYDZDxGhVAMjQer7kj",
  "key2": "3sArDwhVphRGC3GRMByxD5kiujtke3wAT2EYaFqcFbpBu9sbeWx49wCnh7cSuUaajcwZkobvBXddCrhGjGRYLtre",
  "key3": "5TmnCfqskVeMMLq3ytKyJJ3i8KFb1j23a8UmsZZ2D21fcjyvkp5VKHDWwjM1heYsfhTkA9G82h6UaYMscM5LA6i",
  "key4": "2bQgGiDDtGoESp7w7PamRDeTiD8SYA1AjYCjZ5MUBrYMav5SpsLhmVB1mMJzj9AGn2XzaDsVwc7rHcmhjFNhJK53",
  "key5": "3V5qsAPjnxeBYSaoYZVUZA1RRWLARaGL9hgaXrtExaGi9PyjPQ1RjA7jBwSdXurBdRDRezhRqx7mb8xfEAuVpi7Y",
  "key6": "5S3Y4PWScmmwsPnLB1cWzMHUWhg1Q41ubC52FK4sZjvFdYNpGZd3FSKCbP4bE7RviKkD2tyokVug97r7MeZbwwHu",
  "key7": "4htpAFoLdVtARRaBYuFoE3JNVR1H2Z2wAg6ZK2GP5WdZopMKK1paggoNBnkdf4MpmsSRZa1QMHMxrYZRhdFeUNAe",
  "key8": "XW7R3VYzaeSB6sMrvMUwdApa3fBLkZEW9b98sxHXSoHfKxx1QzB8q2Z18u6SznqhLNLXyC5yjnipLwraqLQkp7H",
  "key9": "AFDX41r4dzNf39RWswR43hchPyrdFqCxynR9bhFz2ZTDAEBzgXvrmkqPqu6EKdxTZtUnQigVJXHRBwffwsbrNo4",
  "key10": "4Dhh4tzsHNk1hKvkkWmxcAyMdNM59VQdptAZjPH4KtSdoKVn3MqbPYYokHJGpfEVQ3hZbXPwkrtWBRZXedhqy8WZ",
  "key11": "3wUkdbss1GEsaLF7C4XCjWBwYXBqb8r5WEeRuMmpz2G12cLLMt9nzAwSRWAa921wC8U9WYL9TToYhEoxYim8RAAb",
  "key12": "23yc5mJGB7hzHtFbquLo8i8VeXuQzWGivzaJFvUT42KuGfHnr9GVBDsuutk3iyqYwiJg6NSsS8Jca2UZmHVsYrsy",
  "key13": "4CwDvumRUC2hsrAaKdHCFWWguKAyc5d6TqK1irDUCC4kqzm1tmRd1GbFXwU5nasgW26qGMK3B7AZLXhM6nJVurqT",
  "key14": "4czBza7y2DDeieP5QioaXqZ5UsmqBFFYvpHroCmmfFfmbEVfZ12KisBNHrDXDdTeuoUB4EKcFn98qFLLTcFDKrWi",
  "key15": "2dAZYptvN8HJsCq8nHJxP7V7NyhbcNwsinnZcyYUm1Py3hBjpoqdB19cCTjTbAayLWZTM4coiJPkcChH6njLkf42",
  "key16": "Pgjq8icuDjmrzfVFHLBomxpYTiVC2VJZizkrMKMmULQ2vCxL15sRZvAStc8DJLn1LZfmJGMwRgBufY2ycgtyQug",
  "key17": "8qdmKawUnUaPRG9q2Cjqnp8kASUTZZKpTzAJkzAgnFveRpEDjYHx1WWNUYoPwwUzmxCMDKVneRux8wgfAFUaoww",
  "key18": "4QTC7VeAamM4ppXDcMXnLLGH1JEG6BSDaRQF8VxgR8J3o451aFkvyQ1STbhP6pAazU7qTGLCMHNHHYcHUXmjsxyB",
  "key19": "2cdLzXsNmTfGzr1NmHzVHYGLoJQ7L5qSG2kt3KgbRMtwA7vdrqY39bGP8RAgLWVrsByYaeyp9mbU83PC7SAXkaZh",
  "key20": "QSbAMEMw4L6gJUGLQ9Ar2M7mcfKgzGLhF25VszfDc2wG6rfNckRrZaUJ6zYZZu3j3R3fMtLZj5RUMZHCDsATgJQ",
  "key21": "5d5tf93UjLJ3bu6jbqc1g4UdnYFncJGwSom5r5oU7Mr3VLgzv8XjQNAFYcwFHAd3EVHrHcj1xEFGhaecPDPjqrkk",
  "key22": "4sUuHS8a7debZiVxi4mMD9qHh7ery8wtBneokMaW6cDTHZj5x9xtg4vQEJYtiXe4tuhyM1udqS2Uvfrd85K6X1Qk",
  "key23": "28NkPcKypRLiJVu8jz1eFcjQQEVCkUaxr5D3jEs3URPQCKnkvUZ1L6wCA2MuMn4rbLkP5EGJbL4GUZKsKwXNi8cf",
  "key24": "w4EFrxG4gcdRjEw7TaXDs1dyedrYpRehLjSU765DMNsiLLdAuwmRUGUcQMKTo2EuVVSJuf7XZ3GqLgCmwGaATFK",
  "key25": "5zp2igVPiwbUWLvDmPs9F1hJpc1ivHhfLThVc5tPvuhCr3ee4hrmfqVQNr6tnFcgCRyAxWxraX7FFEHBQcrUMijM",
  "key26": "3kcb46MQKtWSF5M6QXChHM71S8UT7b89ZnLRcsQLTp9Jr1jCSnVGRuAVAMDT7Ket5c4khz93F2dSjYPJH9SsHXsm",
  "key27": "4Nyb9jqjywHeAXccGLMrwiB8z8hGRGQA6vVks683Mxze3DkNUQphPPNyBYnandori6TUXrD7ZvTk45PJ2X1yJfM5",
  "key28": "5bZAEexhjhWRpX1kDihY9DVeRdrhCVpCF2mCWjjcJCRAGogLNSYCAUtJSE8vyoACdeiz1MkUxf8wzyjkotPGZ9zz"
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
