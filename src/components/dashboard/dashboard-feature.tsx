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
    "5EVmD6oS9ehqk2to3E5968iHSFV21RjQWbC4hLTsfdnf6zDmu6dV7VMFw9e9VPdRkas56SRdmsqkf73uHmaYkFtS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "598ZfBUBzmP85zaoEjGV4D6Hi5YQ8iyA9mJDZaTdbVekwbadjvvh6riTDbtuSTarZscjPozt5E1HvhU2eiU9awi7",
  "key1": "2xorcda9VSRcz9nRaVBnM7QQKDos1QqvaicUCFjybK1XcjrR8CrRpkvAnyP5t7CiTEmUorAvfraSAsj5JSeKuLLy",
  "key2": "2JZtf8de7bxvz3nbnFpeD4es2xRBKYc7JJWdtU6N1ibwRuX5emzFWMtH7816EG5XhvsHJ8GDrbLaDsyCz1VN8zqt",
  "key3": "j7vMwbh9hw1mwm7Ngx2CZUUamuKeG5eDtXfFvyFBy75jakxyWmb48Xz5NzNF2Rp5pqz17zFFfJA2BMj2DCmYWWf",
  "key4": "dcx1YD9GYmZhryA4VXSNZdDUe5oSvNaMFXCy9PLvvtmM6KNDDzeaKDnBwMuX4PL3cn42jd3kX8R83b9sNQ8UyiK",
  "key5": "64VNBeT5JftYHe54wQmH3MDCBkpZfsUfr5v21PPFEthAZa5exM7VnwE8yWnutXNgct7Dk3BC4V6MYnXgei9qpYnn",
  "key6": "2zppUV9rjkMLhqmm2TFzLrCkidSGQxXvsW1JyBciaStsY7mS7uvXtGA3f4Lk9qE4PANvRgF44avj67h1gPicNmT9",
  "key7": "2wfkNHdHy7G5iBPpQAVd38Ge5kPrmexJrnWDFWVR7TtVv4NDvBxQbCCwuRce7EmDgq6Frt99gpgamxWNxSoAAXwX",
  "key8": "4Pgkz435SXhiR8KsYmJk68h9r8qaP6mNKYB9jqUeXHV9wxpA1dzofBigckYBFJsN7WzVThPU5zqgMFv7giYhWSQD",
  "key9": "5ibyRjHaCAvbjYNQUN2kQNVM5jM3kTNfzDmr53VPi2J1kBrBszLgFMgXGBhQ2NsakyYK5YwRugbNwhLZzwPQqHi5",
  "key10": "2Cu1HGinmHYvMvdTTcrmTF7Kxs1tLb2V4Y9Z5oTL3CiSfGtPRWWFciyUNfaFM6N5fWWk5KXMj7Z28LumnYD4TFGt",
  "key11": "2kZ53WiYDQ8nBERdMosGV5h9aspRKWQrR3A4dcQ94EGsDAkBB8WoZUNF4sm9gW6j9BbRzoasuZsoaJMSSuwKesbP",
  "key12": "U5dFRft2Qs55vQh5iyLcNEmSMNjb611LAC2xHG28j2ZW2zJt3nVvcgskBVM3dwvM85vdk8bCLVF5TEfsVGYxD2w",
  "key13": "2aKUaPyF3ZHeerjSJJVP2JG5C89Dee7QZp9jPT2iRgrJTTc9bHZfEZLvPmKJ5r4bvy1PgHHZR1ByBJvvRFPiu66W",
  "key14": "5sbkizxoYxmb9Bq61KcKistdbjypryyrkaF1ubu6aexFSZN1uQNq1YPTynFiAhyT1NLmpocMXypSqvLatxwoSUfj",
  "key15": "5DAtyUxoQABksQdhBJmgwDbiJaw3oy1gkyBsjNyzsxGkstkCisFjvUPyNHaoNqZxPVdKjgfPvkGu5EPcQfg5Vf8A",
  "key16": "4V9z9WDay6XAyLu4Ap8tAJquh7G2qAy7DXxm2vANHYSsYfXcpeC2spzzZmLFa7MxGQNShq3JQQrwoHBaAD8Y5JPq",
  "key17": "5Kvt6mjWbHnWrByv5oCSxC1cofxjfrgxBe6VbEZB1wWkW2fZFW9ewyucze7bGhwzQtmqUzcSe4JzLtSpCcsQNdUw",
  "key18": "3jMq63pds9MahBfC8xyLZyYufKkCy3dgbLm6ZrfN5477FtiJiK6GPfZJHenKVAU7aWFPTNUhWuYBLgwt42yjGvL3",
  "key19": "BfYGw6NuXrrvcf1e8zbBG3hcqSLbEo4A7orBGnbmXtGC2igaP7n7qQjEdZ2n9p3SGAwfHshyGbQiXb9xz7G2da1",
  "key20": "2E4Ccr7jw2YY2gg3EDoetx8Eis7S9Yexja9iozTqpiwed1P4wuCSjhDCZp6gVaEfG57gfAZYohnSFPiax2hg41a2",
  "key21": "2qnWQWDEiaxQtzWTeBCmeqN7gVUQZ58LPxbPtZuvZW4vJJPuENek1xyN4V1Ndkh1dMddqueefGLApStFZ71zV7Pw",
  "key22": "5ZX8jimG2XKJuvJAph56FjCj22NgC72A1jodVHJzSDjo184JcAmk2KT5hHeNwEbcPyqKxZaAWyjumgUnJQA2TRY2",
  "key23": "3RVQZ8q7ZdR43vrdd54iJdQkLbcRJ6ykNLjgeZ2FHi6mSgfd5ctUnuL3HGfgLfaXKdtyze3wbuqvhjDfFXqLiNCw",
  "key24": "4UrtmRrFKEbLHdhaYom9SSQCeozQGxjLmkZwpJBAC2LmqbmnfGsDkmaSYyjoMgsMAcY3TDCxAEN7fdGXV3NV6CZs",
  "key25": "xNgGEAKFLh1TSrP56uPSSvU2wpf9q5oEmThckAi1A9CdWkK7PG9aBiZazgBgBnvCweTMVDxAhbihdKkxKVU3x8Q",
  "key26": "2Kz1MGkx72DoxuJ3o78raGke4iLeKAe3somxAV1P3xAudFZeejsH6q2hTMDk8UedtVXEmLecZ4FpDswzVt5ETcXY",
  "key27": "5SSCCRBQ4wdZnVvpzYTFcEiE8MMuFNar9w2WJcUV1wMfPmPaTXkrUmKh4zWqSHWP4P6AhQ1eV6WpuXHRspQv5V9",
  "key28": "5u23STLBaQQdbCU5W78eiPotfYPKE8LJx1Z9rxJbAoyURnQ8SXGEacK1snS877jyCTHg8FXbXbykhQDZ4cxMLmGQ",
  "key29": "4qFwuRQpxUTacdAxobP1Rz1o4UoLK7SPQKtMJ6mxm7aZpt42AY3jmeRx2G4MQDqsba1F7GLgaTKpRJK7kCis9mep",
  "key30": "5VKW26gogSSLWFZPUKzp4M4QjwWh55k3wE7t67pLLUXGnWT9iTckGFVJgF9T13eqMaQUskcTdFP7YqvpEgA8nXUX",
  "key31": "NaP5AynXZB2MnoCHnLza5oo8fSQcXtPaCTmrvoZTggaTea63XXLPkU3WnB4sjycCqunfqSiCyrsnvaXf2gzQJd9",
  "key32": "65fxr1PbRSjipZqXeW8fZhxdtJoDXQAkwmC6ppyeMw1pHoS3eX8pSdNP4hV7FxQt7Yu6Q5jAQJVgfhRfYmsvyTae",
  "key33": "3xizsPe5cf8yKTsCSHisYL5qJ4X22qoA6o3LRQCPJFAPixaZm7n5G7mWergZ5c2Mvnqm2dpJ2Ty3VKopXapgJksd",
  "key34": "3f3sy9p53iVxzUW44dujWKWS96cGL6w5sZCCxhd37ZD7cVQu7G5Z16i2Jp9T15J36PLyz8dXYAgJVCAVrZLyocPx",
  "key35": "4X9wvgw2Zq2ECHA5KBWNpKCw8fyqXUwCtHBDdw3MBQRtbKt4RP4VxLeeRKEj5MbvtwWtukEFZxEp17fARbu1jBrR",
  "key36": "3cGSfXTK6zoqWsQE8sbF8zxd4DURAqhRiDPHkdX8dj2sLCCRwFVLHdKshJq6RQLcVRK51gGedJWeyiRP6QpkicL7",
  "key37": "4QGN5cB4BVwm2bJ3aQXhcuSTzk5gspGACxRRrHYuf4Q2htv8F7UjVdAPB8yNyV3CLupfjdwLkqpgvEbGTAbDMiAB",
  "key38": "3KF1H1Bf91T5GZ5cNvxAuzrn2n84YfEaaLN38eFCRTvZmkJDiKsS8V6ihtr5rAGswg5Ai2aRBoykMXPczpD9mnZz"
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
