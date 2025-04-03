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
    "f8Vv5PReLrWgHKxJxhGmVRwCrww1Har9UQjg79DC14aud6QBq2b2pGUTtrBY8VKqrrjmXv4ASVLXNCKFj7GuByQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AC7AsnqkobqiEPakfAhwvU6JLSkfveLrVVPTjayYDYD6rHf1ueniyeJsTsrsD9Xcrt1tUdkRSAGhsrYYCKRWa3X",
  "key1": "33xbK66Xdb9JVjrmSjxx6RdtMRSsfjwRefSnAdRo9XvnfumMNXG7pbXCfx2XZFfEHQC54WN8M5cJRhNGHjYEcWzj",
  "key2": "4K78Sy29B54VKdzgg691XPq91Lu5caRNhJgqNoX2z7hRLbnyRpiCUbGumeu13BJVbvVb3zzwPRSM3axM4aGo4PYZ",
  "key3": "tmRg687PbKrDqstJxq3sDqevkXBAc3e5gazjcETUVgPwZCkKVEEtFijcFtK546Re9dLLKayhDhDozra5uL8ELe4",
  "key4": "4SiFuKXdScUb63oDmpk7xVv19cee4MAGHPpoYx8oS95uXKBPRAM5qSQabsoCGvSAznHks8SUg95wxQX8LoqT2NxX",
  "key5": "3uUBn53TmjcmrxNePU3Z6Vb9aKGN98ZzGMm7WoVhkN7CB6px5Vj5tCPPgw4iDkua3KdCSACsWXY7fEzHuJkUukTe",
  "key6": "2Sud3LwvnxVZ7DjpZ8nrecjjArinngZjudgj5NMnGmHZ383s4e7c2GZWR1UiSZrMxUVhwFcaqCLmiqUFmvQDqfu4",
  "key7": "B5GgtsLCAJvDhqS3zoeK7ezzXN9LBWCeug85ovSXVuPwgZhKMf6qL3qPNE7QjhCXQFQ3wUN7A15BW38ZHBwA5gB",
  "key8": "3jL2Ge3dA3si5ZqhTxNVt2oErTCKPZUrs4KWK5bvkxNHdDykcsUvsCcTREdpiSRHcWxQqQUnFAWLg38mTiGVCvgG",
  "key9": "313m4p2uH7tAsp1w5cpjYcBe9Ep6K1HiGpDdtfT3A8eJeo3UVSYurZkeRL4z7Ndr7AeJDxnvRarEnZE1KCXScUwf",
  "key10": "2XpStemRvTPPER7qBxKQ4piKE9iosrz4Vzyt5RvdZetYrPramrobiGp3uGgT4Dy9FrBZXkx9ZRJrPw2FNbSuzxvL",
  "key11": "64pPJNCLxMD9WxMvjwWKdeAYTYvgVBQTv9RmZ34Hz4i9fsyeuHZdMjHQMNYkzKvpBQjAWm67Vx8R2DsRav9Li391",
  "key12": "56z9bbAooXvAE66wC4ppDNGpwoVVbYmGw9h9bw7515f8PhFzhC9bxuNjYZ4XLbYbyrnWsav6eXwAgQuEFatxg9vd",
  "key13": "5cGo51gJpdwbGhYeEyFo17sLY21NqorMF4FAj7qfqw1ZPddgKHYyfBrdbVKDczXGtXbQtySpcz2NcwdTpUScpD7x",
  "key14": "4AMKzgyHjFxhURwNGnBeuXZgiVzpsG42w12inuqqj66yFhQknesvxY8yhUSiNtsPiiZg7w6inhba9hEQ7VEn7bXb",
  "key15": "3EriMdWJRgpDskigydywv26acePzig2XkhhZqTWRcVLmqQMKuEKSpt5FBES4UMECdoM3HMLwe3giRgnUTYPkaMjC",
  "key16": "53ME3LSLJvDEPYCd7twLKDAmsk1HwB6rJFnwd7pSsXofpgfBxmAjhju2oa18YNjJRH6x5Rs2ayMJw6seBAv51Sg9",
  "key17": "4RYFwggGHurZkPyJfHXPAnSgch3YJW3FLYV3PBweeHhN7g8uQkeUNpmSCAQxBJJagNnEGiqtnsGhJuqMK1ZPa6o2",
  "key18": "4cqboFYL58Kqwng34ynbRsVdUxUoihrJiGbHyVUncNaSfHQ8Ni2kjRBsi2sCYzWZV87fuX5JCZBJ5eSEMW7rTU8A",
  "key19": "3rz4nxuYUKwGBShJYe8cWdrfihH14NSkrcB8xwmHopiorwHsW5QCgV4Df8ojiFUqsPScCNsT8KPC8Gn124Hic73j",
  "key20": "5eqFmqzuZKtHQotcjddbdaCv3bvhu7NGvoioHNQfDx8oYMankVpAvSva8BqvUb2ZgRGXQRNp794Qa82DzWQ32Ue2",
  "key21": "2DczVxZaRQbiVMCsLDW5h8S7hDXGqgC4atAN9KcCHeg3D7KQfPKfjpzL31wB9WSNDZ2G6cUaqhjNiGyJXotQDij2",
  "key22": "5BNVV9k9mn89F4XNDmXj5bZhzz1VkESrbD3ErQNiKu7VdfjK6qC7e1SJYe5kG8AR2pedVrTRvkeSKMLvQmbFAX5U",
  "key23": "3hvAJnSt5q38Rnhb2fNbsM1u9SNH6pfY9CUfgnLg5PpoetsybFvhszvBATToaVnEENpMRrv7ykBgmkPazxhwKhff",
  "key24": "KiM6vRqxDZj9te3ubzgY8gb4k3vwb1T4UyhgSp7SQcBQMHS8yGDVkHCGG67C4U7VCGd5vVqeqaCxeguBBKJZhK5",
  "key25": "2jjAgivCawweMJFuju4wAJHkJCn4jC4hz4AbCQhCuvSvHVEA84TvMh3xymi89Sym3AzmaPym6qmCi9GG9CWUnCrR",
  "key26": "3asu5VamTZXrGcpQGEtVPX4nvYo6LAUMChKwnv5z8ye4ejyCn9WQ5BZiQK1ZDJwpi86EVdHiJR5G7FR74iKUiM1N",
  "key27": "52qgeGPb2GarQi6JmywTWEeQZw1r3F5eJzEv53vfHtsouA2zkqEZ8N7WGdQAcEHC6Haq862JBjD1ZMZkkYxBQiBD",
  "key28": "XHnqbvmjZVHGJnbdpenm7Lwztg64EA4vnT3bmToCZYqb9B7zys46NXPTjgAxjWEan5CJK3mBX1RpQSVBw8wBVix",
  "key29": "5aLzYG4UPW9PJVWou5HtjdAWR4rERcgPtkNzTLGgi7rCD2RDdA1QQ6CintbiAsnFVmVz6ugU97JKQpU5yiGS7gw7",
  "key30": "3yUD4wkC6iMZEkd2xFdzGU7gJkuSxHiZQu1L9eSCuLkVx8Yo6UxsDGsW5grme4aGPb3Ap5RCKSAt5dDWGAdzEjMZ",
  "key31": "4HKVJdqHTCqhpo4NS2e4o5fdygyea6Fuj3PRe7MHtWvRbtV3vTpkAiET74gCPCZEnG1tZrH5Y2dEPtGwscrYYt2M",
  "key32": "4iULtsiBixUUcvZmFpn5FFL3wVfv7eCMMLpoVQYdyD28f3qDp8gqBJaUjW8DbXf7femTBmH7X92Rj28VezL6qBUu",
  "key33": "yJZw4xzgEB3CAfTG7Z2qm1zpj4493GZudF5Q9eW6MMf2zKyQLcsHqZTE9kcTfedTUQYwivkhxVwYJPoZXWQ26gb",
  "key34": "3izY6nJJvWH4gd6ARw6JN7dDv7ZDrU5xBR13hxrTbvS9Zpr7xt3u6e7XczjcRA7cXd16ZxWvtd9my4bxXDu5y2fb",
  "key35": "2NNPFL3t7zziTPnfZWitMRu9EL8G74wqWb9QjfFcDi9sX1kRsgdgxYF4T6Wf4tyVeXz4zoYJMtC8fpHMWS3JzYZk",
  "key36": "2voGLaoAkrnSd1cDm2yZywetB3MF55GvWC4jipbc8KfqrWyq89ksp6QibcE3xsPBur9f7veh7rxTYg7XkyFdNsXk",
  "key37": "G6Bn6Mv4S4EwZfcSFevG4FjivUzS7DxyFWJxWok2DbffxSEgNL8SjHMx1MqFYYqJxM5FGyHVG1kuEPLDUMTg1Zj",
  "key38": "j88zqHmuu6YstqtwKGcWk5A2jHpEFgYeWh3qbCxSbngcaBPXAHEtYJQVsyrHXHQFLDxmseSVwSNDE26Agd9EnnB",
  "key39": "46pGX4jZDVqPxhMjwgEjyXrjDey7ZbNNRfsd7aRTsC4XX6KK8RvZh9zwiasAhBdDf2RpapsuvvCtB2iAYAzU9TV8",
  "key40": "63FebzWve3zouCyhfaAsoi1L9i27mCGg4NRUZbZg4yetLXNP7Q7SCFS3W4uRQaa2DE4PuSYiD1zooLLkuzrMMe9R",
  "key41": "cqS5qmJYuQ4pQg1FNA2h7aFxA1JsUPziX2zquCKvkp7C3irRohkZ87JAJT4XSEuLe8L2B4RyfQJ1hZGyDuCDfqY"
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
