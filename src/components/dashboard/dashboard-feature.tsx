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
    "ByMECopjepB7M8Gb6QB88eizr99FTT8GZRCiqTeSYi8y8a224FPM2Qn7mRCD9YwghLtsVEUwxyGqFAdJ5j9hHhz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KXW5NDD9XEyzXfLf1JnsXcyFmToucWnMoCtbL4SvYi8yysYxDx8TqNcVXxq2dKQ5j4EZSouhzaimPJqRZMCfQ9B",
  "key1": "3ocqbg2fQbmqZsQGqRpqUoy9Dm41nCqg9MVHufewgcX15QHguBL7pRNyEf4Zh1ThpPCpgm88DPGQqzj8x8M3h326",
  "key2": "3aMVmaGN8pYa58QW4ngYZdwfKc4c3F3Lvn5V9TyEtUa5vgnhq7RyypfX4WPb8PetnobBhZBEAyTiGA5vbqnaU9jB",
  "key3": "2j1Zz9QX3MNbLpCujmRnGeRtpkBc6vjQ1wUU4NxZmn8P77ZD6drPyz5LGCVvKQrFzbu1FPhgSXe1qeXtUXdaesQD",
  "key4": "333tWNxcxCzbqbkdb2fwGFMHGKVm8hiGuzX8wg1CPdaUA7Bwgk4FzWoPeePDgN9yYo9gQJPoPYXs3QiV6Rtvcimf",
  "key5": "4HVWygFwGDs2y1Z32AfevyJK6wqfRMjYFABEfeWFCQEPiJU6B3XFkHFgrqKFFDD5yTDpcgHmYME1GmBqK2PbnFqr",
  "key6": "2yWNjFUCN1DJTSUQz5NHUavawcig9fo478eYKFZAUcpW2kj3QFNndAZXThyQNKJtkhdfczgNDHjR29UbWEZG3gmH",
  "key7": "2hpLtMWhRhsWoXkuMtKMt7zuFPzCzSYCAZDi8S4sVV9s5LLfPYcxGXjV6fTCuLBvGPE582rmW8SsZpq1anUNQpGd",
  "key8": "TDXmG8FkJYAW3VKK5DDqkFq2SkbKEyRZyK1DfmPZU5RjoksBae4ZRSW5cVnwLnXd9BWGbVF5pdWKSHJbv4b5ioH",
  "key9": "H3W4vmFixKXLFVpo3pmhKaGigA9Zd6p3Vuy31C14fRQ3bYG2bL6imAziZbLe532kD4o9vgmxzyfFrdxcFMyRPXN",
  "key10": "fsythmYQ6npVMdiwXZ1Aj24VF4YLMQ1s6JRRYPvYhWrHpYVik23fp2FMj9vts7XAb5BV2XT484MiX7zL415EYZS",
  "key11": "5q3HnDFUetzoDQBB8e1mUxYnQvbThfyXWZDNocZUgt2qHA5EoYq5ioNMX3MJPZRu5V58E44Qs6ZsYhscww3Vn12o",
  "key12": "5fJzWRhu3o3nYmTfANG4ckHPrH2qCH8zQFoKjjEy3xnUfMxAnJpoh79PZaHSQPkqLGHA7oKb3z9FJkkakfE7MZbs",
  "key13": "4RWxncTZfA9uYpQjvgoiaSzRSyfUrmraiDFjLY6NyGRbSqQ243E8mra9sF3qDR6R39JeWFeSfxmcDZpzsiioo4EJ",
  "key14": "GdY6KMLR9bqdeVDWJSe8jTmxuDixM5nRmzrRC8KTStUAZmjEbiPmnrP8yqgzvQCEUuasm8V8KNY3tFws38AAsKL",
  "key15": "8DbShvfj2LQjbppYyX982xF361B6GYPGKCywPpvk1X6LPPmnCGRGQ4T5Accn8Uo4q2NESvdAesejmrctKmDRmKE",
  "key16": "124Fu1qCakJH2WfFiEfBiq9vJdLPF59XHLFzLVuwEGArmqaA3WHk9pXD1i9oNq2BjaYaKRor1VjbEV4ZPZpCv14g",
  "key17": "3h6nCWxNiYVadc9tZAXGpyAH4SkXXTojt7vRwRkaqeja249F8hwzkKadHMEegnDVqip5AkkVyauhGCH7vc8dUtEN",
  "key18": "5tJ4gujJwETTWdaWfroPLwaDMQxztj59Lm3gRxNCpNSE98mLzpbe9HhUwgszhkVD1Uv5cJ6HNNKc4ziCbGdWFcou",
  "key19": "45c3quFbjA7JhanZkdrRZLHMqgModLA6esM8XvWq7aU4AeevjtyBbepawLYTyk6EdBnrRChpmwWjvHEDfR56Cmti",
  "key20": "4ofcqeCu7fFhmrEB3XGtQSikYX9pYsuzdigKGvHxgYphkN2BR8QL4iZ8UFXvf71NXYfHwpLUR3Em3H18MPoxTSc7",
  "key21": "2Bxg9SsrsgDLKHawfVKcy7ZVrg3QpPDfJSveiqgFRK3CANXVCq4zgGASkATdK1nsdCPABbb7MSxNCZ6oR9VaymBS",
  "key22": "5Q82AgGwHSstWDxf5wChrnZFwpaLfb7gMEbyfZ9wNv97QR3AypbBM1CuMmughRv9ywJ4KMNPoqYBqnLfugUALSfv",
  "key23": "4MJhUPdbCzR8SsFobUBz3rx9uZJr8SC8f56nyaYHizWE3j5VRuFC17Tc2E6WSvgoYoBAZLSEMXbW4KWwED5B6USE",
  "key24": "5wX8CnQHchSF1z7S8kLSTDGmpaQHwNRoTzbxUVJpQuWi6vtv4HgMQ4r7BAJvFQrbWKi68Ng1ifPdWtSuq4HkKawb",
  "key25": "5zrTvCVty3Xvs5qRWTv4e42bq3f5aWySEuGNf2BWyc3DTV7BHNo18UiyaDZwk1YXe7351GkChTU85xiiHaXEAcVC",
  "key26": "5jyn9v91kArR2Q1y3V7dkbmgVVVjzmVrexdUZmHo54tskD6f21HXbqXhAAdJYHUuJiZFDUx3HZ4pR1eNo6txKEJp",
  "key27": "4xAUM3vEUURqzqUo9sYAKrqKsbtrCR2BJjRH7RewsftPk4JTR53GeY7V55xn8psv6mz1CA7HbSJAHdSnnXXsQgMB",
  "key28": "2X9iPZpP2BKVnuJzGwHveLenFGavQmLA56qnkKc7HUJ9Lfqgo9e1JG5vkaRneeF74uY1Q28SjNutPB8mAnUZfP6F",
  "key29": "5TYNHvHRP1unUdbp8EiE3GT77x8Fp1j1H5SNtAHM3yjrGiNbMuCu3vpePYSDsZFpsLrvp8mGV1NLw2bAoVjyQBrw",
  "key30": "4o5SXtAkaHpexDrnoWUpbnLqjdsLSjvYf5WTUAZWvNapw4ADPiciunpHA6bQZdPUvSvsL8acXeWHRHAfx2FwhWs1",
  "key31": "3sQnGtpga3j2enY8M9f75aBgxEzKXZVUGMixPMyGtYA8kb5UwT7wFkf7UC1fJcqoXM6dQBrtjNQLfEjHxoSCgms2",
  "key32": "3KLPyRhZ4yVTN253w8H1Dnxy4Y93oNyuz1C1DGn68EgBmkPw8rGL8J1TwtS4RpRwxuTad9q975MwsyYDYp9PV2V",
  "key33": "4xBfBnSFXPzHuVkX642J27JCiBUUkkpfe6fdERoQo4rUrBcoNdNxdQbSrwhouvisfA27w8SnDpw3CgUmkDTgXGFX",
  "key34": "2BKVxnGMw1tzZZ1h2cs92BRtBAKFVCeWqbR2rM793ksWa7oQePAbZSsQ6ZHycjDFpkMiihBRuo9oMyMgHr5JBLr8",
  "key35": "29hJCVd8DYYRWeegn8Wjj982exenYfWNLTPt4gb6dhPrDy2fGnuNt3GhEPvkp9hgjj1rti2Jvs9KfozyhAGLE5aw",
  "key36": "3RcWqX1ouD523tSpBPH4RCJdCNu8M8V1GcEe9S6v9hwSEDScXWN3bdbTzsPx5AqzDCZ4cvLYdiYDcZXrM9cnJUTB",
  "key37": "4t4jvWcdGPY3NZ8vfc2LP7j8NWK89o9j9H3NPei35zXfRqeaBf91YRxfPWCqNcSiQW5jzHkgiQP9Umnsf3E93UX3",
  "key38": "4AW3pSraaRidLxHpCaKkkePt5wGvCeSg94xLduYADVkEBeoXPzsJAxrgsvLpVXRGcyFB7uTKhKXiemoRGzp4Mb3w",
  "key39": "iEojACWAqNHySFEL6mp3Stmqzah17tTf3LTABaG1isS8j5zQGLJZoLH8aJ4AELYL9fyjrKm7fvVe9AXNajAhGdY",
  "key40": "3qcFg1oqie4dJgVKTKrRNqBiBh1aFjdEnihki5zpruoK3R7Kck4gHiVQQTwTMq975gGuzBtnYsXesfw4z3SJ66Gc",
  "key41": "5tEguJAYTMviVy9adfJXTypcsuTZpvgV8xPvczbK6AJAZ2YVZzXKmTaCL3XvS9nn89zKrRd12soSfk647N8BfoFB",
  "key42": "3fhuTtnt3EfBEctMpqHB8iS4sAhpSL4Fn1HGNknhjkkaxPZMtUV1xYktgVPEt6ekxqtEzaWeuVo38MddQxE5Ps7F",
  "key43": "228qBBeqDFY1ZvvnuarpZ3dTSYiJSe9j2zaXu2GRgK8Rz8Q239SQrfBMEExJwukLvriJLe62wedjca62N7dVQ4cs",
  "key44": "v5TXygF5wnjMbvTD6ogvuT63c2WpC8bXiBpeXWCVuDHU51JQLSYsw36VJVFigewEfj9G9tHh2x9FF1q3mMJE3S2",
  "key45": "3S41sh1CYXNbp2QRgz5z9xNtsBsTGG17km4e5EjydpeXCuxYzb6H8BKtXabj24gYGr7nv4usyNH31yj8Td5UWvzk",
  "key46": "4LAPxZeY7VrL2FutHjpcFwsBkPkU3nopEtzDWJ3LDQcinTetdSV3f1NEkMkqBqL8p2kcHn9BMKdZT74ZVnAD17wX",
  "key47": "eojt7TzdU8cPVgfMjTLxH2ss6rYraTdSicnkVi1ic7XiiD7t8bR2z9st1yVc8Qx8TGG1CJbSAxuNiZj6HbinCuY",
  "key48": "31FJcyFvkrrRzeozAjm7M3M7PJRKnAkVyJjZiAsoWKc3w9AssHnMWgP8Jab7RjCWac8t6sGMJAvT3iVx2VK89hB1"
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
