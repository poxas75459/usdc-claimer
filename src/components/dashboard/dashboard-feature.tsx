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
    "3tyJW6HLyKpwA4m262KJ8oASEarR2CYnvLsabHLudnrxAQ5384rYPLBmNem6EsMUDP7ALnMESvpToBshAmQzRQ3m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33wDzoiYVAReLvtYBJ21GCkvn1kPYRtvHraGJAf2c3hextPcTQgGPRimy4MhDbeyYyTbH7M1evKmq5x4NxYNRwGN",
  "key1": "3kbFkKQTaaUhMijajAraLjrN6z23hVNCQELzh4BSN4pv2cFA8QsC2FohLxNRcXN54KgZFSTnV4pDLqgErCD2oxJD",
  "key2": "47arqETnUrLB8WbR65FxvkBdaLFtwzd92kpfvUndg1cUo7KC19ihBgrtErvcqnzkmmPjqpy3PMVb7jdNzMsfntnS",
  "key3": "R4zV31Lrin1r8mLtLZAYXUPhQwGfDcCGvuXZWEqVn1tpAfzyr5o7ATwWTXWKzMAw1M9nw8cnwv94y7EkMZPoHUv",
  "key4": "45p29KtK3yhSd73b81F8czD945LBQDEF8AHPVGzFgvzG4zSavnaGs4egXd2LBKZJQwTwuCQwenpoagw9rjbXqDuC",
  "key5": "5KMwBoztHuJrGdLuqvPGsKnCjrvnhaYQnA4dfpTS2QZaWpvxAz2YYHuPpPctofbY4X8XgqGCuxHV6reBaarxihet",
  "key6": "5qk8Hbgbt7F241eaSLr8ecm6a87gDvJe3iv8mkjCW44uu8v7fbuUfU8EqCWoMEccaVdpmnsiFscqFw9sQ555XmYp",
  "key7": "5x6xdAJrycj7H9wCNWe8ZESHn7yEDMxTwRt4QdQpHnbqK1srRWq1dWh6gqAfHwoXjcYZ7H8HhMVtU1mnJ3tBhoDX",
  "key8": "4JJmyH1LP2H1vi7pUHYQQtimzx6xsGov7kDFXc7Xwk9mx18G2jyHXp4m7fbjLfjqTrqoh67WRsMPW73kzihNQcLS",
  "key9": "WdF5hsnonGjDtkTASseiVkTMFzs3dox8WbM6DK8nsSUFk9ViRSMF7WpE2oyEm12CvjRiVfip17APSiGTMsDpiLM",
  "key10": "5cBxLm67yepEhrpG81TJqv7tCFt4hgtdktpwqB4m2upC7i1WU8aDXCVMq3L3vZu73cjTrPZupfn5fHbKiMBdEy3q",
  "key11": "H3SzCdC39aMsbvpHjHBgdZgYv436RogyGKhxVYRwBbffcqZCMxngqdRnFZPzcbesvXivJSJMjJ61enQEic6SQgo",
  "key12": "3TJAnJq5JVL1rqfg1vRjPG8nqkPU71pNEZgtArrvmpwFxqKFYkMfuDcEeR7PYvFa1iTx5khm4saHitvbyFRy1w5T",
  "key13": "4Z6S7YSvEPtmXX3PbCnaD5t6j35wYa4CCVCdbgTZjLHnKW82KzUN6v3iifrnMZp7S9AD5i1HDciNpJc62ByGdMSg",
  "key14": "5ZZPs1SJ9hmfzLtUMbuRPS3LWVM1cJmKFqrkWwSKMjjfCGsWFz1qiroFi3ZjETrnDsMzq42XwqcyqjEctepQFeyB",
  "key15": "dsJ1H4jkU7YQo3WKEHd1uv5KUsANieTPJUBmaDvRNczk9jiRkWrxRaAkDXEs9DJn43PVJWSiCV8Zjv2X2B2ddx3",
  "key16": "5wkuzsHUohjP8WdQLemPRYpm5T5craXGpF7vddQbZ8bwUWeiikmpJ8mqaMeDSZLHoVvaD2FXQsKcEDS1mThJWiPm",
  "key17": "2bUcVXcnVANUGfZokPxr5uddN3VKKbxirp7hh3URGkvbQSvfbDiyCiVKAXyGcjzhVTRwrDxBoyHufvefvjT5afzY",
  "key18": "5LfN86F7G5CTyd74soNrYWi5wGzhJbXEYxM5cBfqjkB6MyiLECA6FaC9tmB6tKPA5ccPmTBdsG6Riopf53xkfD5v",
  "key19": "4d66zAEEmN3wFuHXFZnGoYMJdQybxnTYQDf3Xrwgdt6wLbBqmnrW3MWv1T6HLGLgJYMMT8wKaKdMTNd2Pptggso3",
  "key20": "58MnQEyAscX2d92vRYJJuYi5eCn4zR2hqkK4cLvrXBAt5QSBbRkj6pcDhNgtY222t589DBNuky3UGGer4QgoMNS3",
  "key21": "28fcNCye3jDC8wKivxNsKfJ4CWkDz1HjwC9bvwFsX82JYx8cEYvXW7BjwUUXzq8KB76T34FnXDLJETgLqtPqbudN",
  "key22": "2SuDFPmn21spZFZcp5hb3htQTKjDz8SSiS8cYsbDrzYA2eA7AmnYS51XPuTGQC14d2w9Uci78uqDWzkH5jx2TDzw",
  "key23": "3G4GYWPFZKfHtuMX5rAUxvAypvpRVqEoYQpFD5q9jSZPTUB2JjRis4swQT58bRT7J7j78PbdgKxr69VqR2CTGbCr",
  "key24": "4UaEyKRQVgrb8ZbSejFiHQVkgLrGkWXpTgcCKJqWxrF3rnTZRu7CBiRbUwehrqBCJfBGqQ3nH3wRonNfqbq4S4hb",
  "key25": "4v5L8oRgC1cfiWRj2NWqTcZ9LVruuxLeeJb8kPcyVhNJVwLHSt6dsA5zvEzeJwfm76VJHxQT7wa44QWCZfrydpsp",
  "key26": "ZAJGWMqYUpr5aES1MNRadKQLGf8hhxhf5mhUtuZ7dB4MNE5zwmSiSWXEU9j2FshZFXTviv2D7DoFhwbvcrvWQN9",
  "key27": "5zD5eKgBzNXXBTe3853dqw7y4NPQLr1NWYTmEC1gtDLEbJ6jX6mKNtrnRGMJM7opPKsnfAGgZymxzkRojiKpxWvY",
  "key28": "4xGMiWePtw1Hq4dZzCQADxdetUFGUjUHsuYZsfV6Zts4GoFxEESdpEDvvWdNGVBs9NYgXWUSDffNgFQjLHuMzsyU",
  "key29": "SjKt4WJseM9WerC2RzeFRkM7V63LFgDoVsVA1VrUYAtxKfG7PYAzYioECx6eY4xaJ8GQvXTUWuWE3sBWjQKRzMB",
  "key30": "3JAvW4GRDqgfj9DvCW86Pf2b11LQdonYYkXzBEekjh7RqQmapKpxsM6dD3v4s3od9QadBcFqUBnx1SeTheMof2Uy",
  "key31": "5i9cYput6nbUyVs8s2gFoDLPqt3RCggaUAQ3TaM7EdDWkgu8YJCHhZTUWkVRxkGYFoNA8LLjiGJSxohKLT1G9jhF",
  "key32": "41rhEbWxsZdpuWnHZdYjD8PUmAtAdnkYj4jcSsdPyGmFRZ3d8tLJLD9Yp4288k7tCXjxxPbPtAn814cNmGcsQ1Cu",
  "key33": "gFueexW3HwjivB3sExMteMoWndV3Q8sK1ptJqBhMSRaAPBrgSk29aGzLy4zvoYCskih8P7Q8WuJYNnGyKSYVGGp",
  "key34": "YAnGb6prLMq9md1K39jS92BCHUW9LjKSYyKGc876V8HYo8vkQ9vGmguTRhgm58VeodnAcQPVBoumSEuFPBxAs3Y",
  "key35": "B789ZshLCEx7Vg7Gc5a3XgQZf1y71V844faEWExTe1REvodsiZWh2a7vpG4Tidoneor5yNZUCnBF7FXnXVdTgSK",
  "key36": "262Qg5K95EgPys5Fn7f1f6VpzAaPkyL3b6U5ZwmKDiG7sRVscsWzjhf2jmozNWW6Qtr7AbFxbEZ1X1FN7dPV8eKv",
  "key37": "2CBZpv377RrSBjMfBmGwEo7BBTeFY8D85wUL9uMRsSbU1AUTNoGusTbNmX3ACSedTyVtfti6nJWmSKq8zSzV57Nm",
  "key38": "3BYAs3q1dGZQ6T52iAgX6Li5qQfvrevnkmU1rgE3WGThjtbtjssiyNiLWSoSpr1W7TfenV6g8Cpgsy3PLXrat1aS",
  "key39": "3WCb3J8RTJbwLASULAcbzBUmurAJEg4CcUkNdo6XA2EwikxTZnTtSnrbz1nXWGBKMZP8vVHFUshbCmxJMuPNFoBD",
  "key40": "3nYAXSST7bMAzi8DAVeuuuPCwPrySaZcb1J8rAsoGJ3cUJSv5gc2sFD9r5GgpdiPv6PT3BFPFtckuLp8H3PaHN7e",
  "key41": "RzF3LDJSyubLcXBLtHCE2swTXbBic6Y8VWLvQHmCxEsaBqddQAFbY6fskWGN9bw8cXHKPPg8Fsu1ip5CAcAETyS",
  "key42": "5Xq4d99mMzmBmzPzdFKL8z4GY1dpCE5skkdkpNAR2wmGVZ17VjPxVH4452kDsKaNaaoZGgogqLH4w5MDiU8t3vP3",
  "key43": "N8ZuU3iFX3UR18xWmG5VB3Wm3ubshExSkpg2SArC8ECFhZnrVV45VBLGorKHdhkv1jG4Jjfu84QJyeJ4Y9uPF8Z",
  "key44": "3jY69Gt3j3PkVyXvCEh943AikeXhHRVEQGHSoBVyCWsbgTSczLFr47eaud1Vy3ifssUNppNeb3ggzPzg9Ww3vBLA",
  "key45": "26vbUEin3rGmpFdn5wYizmYLENqFfFxekGaaMASWMkHQ1nqAsunntja5fH9T1WmnMELVP3v6GZ4xxTUfVLq69Dg2",
  "key46": "42J7TBrRHAGWm2e1JhFwAf3BwKT2JM4xFYR4Xhx5Ekkws5tcHA7UYaB9w1Cu4jZPgE3bTjwxhsnr3tw46THPHK7W",
  "key47": "3dK7zBQQXkoFw661vwTx6CVRZ2cJryo85U2SwaHN9chZVjFMAXdDNKjPNA1zaJqEcDfAaUPKYUdYF4Wer92EgBuc"
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
