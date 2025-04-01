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
    "2tYUkwgR3KP6CGEQzbVFdYetUrHemCBaWoLGcQhJ1JTrEh1VqjCyxkqzVC9qt7RuMRWvYNC9piUZArjDX3ihmBy8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xNCKpw8PV7NmuCLvXUmFPALHMsahx22RWeiESWXx6tbAJJrDYc4d9hBMn2F3G4qQMHUnDhZm8a455ZPuRAARJux",
  "key1": "3h83VCrJU9x2UqcrzmTMxUHgNw8ihMHBfQKchRjeFDm4Rij3GdrxncPakpEcKGwmumfNkdSoS6qm2i1jS9LWBneL",
  "key2": "2Eiff5cnUSoXktK7nbEthaqbC21xYqeEWM8sgirvrtE229GnkygzUYSFnyT9yAQxmSZXdRZQ75B8mHmymeWkNiyq",
  "key3": "2wJSrHK44kyzqkr1oAdiq1fY1PZpR8yx9uPwZ6LUdVrudTxWejkwgshB5tBXb2bq1SnqHvF1QMQqk2hL392bCG11",
  "key4": "38Lcn7hjweT1bhctMMHeHpUxEaHAA3bUwZyxgyqqyffmLfFvmEffksW82tkuyP44dt4fC78oQX8Apm2vAzeAGvEW",
  "key5": "4Cp19Q3xzFNNz8GhHpSx2U4Z4xwyyD8kMhCd5vz8bPcwmL6jmg2SRtrKDkAtvPWkXiAJ3JxpRffk4q59cy9WyX4c",
  "key6": "45x4iunetp6wXbZJ156LfaFEa37GJQHFsno4qiW2UAspQWLSreKj2o67V2wzpzTjypaitd3NmL8MgF6Mf5Xeg5V2",
  "key7": "3Wjw9P9YE7Ydfy2xUNJAkyppzwmpunZp4m8ddLed6jg7MibsTgU3jsuzxVkifjjLD2udZD6En1NDGvtnmG59tHeo",
  "key8": "3Nygbo3SxaYVn8TYA4X2YMAwkfAKVorpVQTbm2Y4BzzZ8fCfrH149Pe56iXSATnCPbv7gA9HvyFRTbwy51S4sxxb",
  "key9": "C83tKqbKvXyLHNa1px1ieDofrzF6a4eo95AZeFisocbFnULa5hdecRg9BVV5HqSMPK5YNxbK91awL91LBU6Dbsk",
  "key10": "mJy1V7JBGJiutREoFA4pyeX8aKwo3q15mNHJBjc4RRpKdJURcBvw3KBvRn2hZNC8QXqgro18VNk6VYyUeV3xchA",
  "key11": "6fgBBfc28JaPAjXw3X6acYZCoMth8kyMRHuSLZaMws1howAi5gTUW5W2PxhPuZTTKJ6GP8ENLHokDckxA7oFFXU",
  "key12": "5PZqdUgePxZumNDFpotytpmrqQZ49SL6w4cAyC4kzJY7rvdMVDN5pvywjxWZTF7CWri9DCuzrYasRqXSC5TSDCaT",
  "key13": "3dQeej8AU5N8MMqgWRfRSiyZSGZjJ4VqaxJpdvYTA7WxqobkEsodiRCimwJ9TNgPXhwSnqhQFyxqUUSVfmS4czB8",
  "key14": "2qULLvBt75CV9HxzH8nk3fk1mfrYzXYzYZizESHSKmGfFzqecVDgznj9YHPTawP6LFgEjmBhyj3WuKE3jJTr9zAS",
  "key15": "5BndNz4Xv51FnQ2SDHBjJoPhHQ28eAHasrLPZDbaKnjXvQfNEVXwXurYx3Nf7y1zCgfk2LGKiQ4kB7gcB7vNhKSn",
  "key16": "5czzBf3dThGuLnP4gCYEN1otwM98RL9vzChwEXt6v7iFQQx8mJWUqNtC6rVTjiuN3AaMjpBLLGQAWXjum6N52LC4",
  "key17": "52qvdg55tpneiiCdJTZTX6a9tWhP2FDUfPbS5nua4D4q3kcsynYPpinr8WR17uUp3ZRsaKKH5u5aoBrD6jE5Y2D3",
  "key18": "a124cPAYLrPDwTtHUp7zMCM2u2KivrPDnv8gfBn8ikF1tqafREQtjUVRT6qCQwfk7A8BfmbPjvSdSecDxeYMS6E",
  "key19": "2CprQ9qXvE6ixqBsMmFYqEYnp1q61SERWFri3iV1PK8g2SQa1mshbB91VeNuctGTxR5vdD6QJwUd3UiqE7q2K13k",
  "key20": "3KLfWgsx3Jy7z3nyeduaU1a2p82p3WmypAd5p5KsgnRVSSrj1J39kq7PD8p7XhmPUHkorCGWNmCnnsDTau2t2XpX",
  "key21": "4uZvGUM6bGYPs5Bd9jeRQkdh5Z6kE9Bw8s5wuJg9iWTGVtZVC9wzZgQVg2o2HZJdEyovezGefWukhN6qjHNTYdLv",
  "key22": "u85MSBzT1i6irmZsz9UsjKfkiqgPx6wA18kKnyLEwywEdmHZ4gnL9ZThy6f4RvsS6yyRtpEZ3LwLtWngGmx7PoP",
  "key23": "4oQHR2GPUaRCtdDzbegTCd39j2aA9pC5kxKXU153q83VxSyXydFHc47txbNkQeNefw7Pc9U9P8GDRdhcf3G3FH1t",
  "key24": "3PauG9Mwwxqa6dxz1Yc1cuqc2M1T6uCgtbcSFdTxfThxXRGCAPTAYhPfiEzfe6NXWfFvUjhkQRfKREnBYvrkMHSN",
  "key25": "2T2iNmyfo8FcfFvE5krVKdPe8bzF2ZbhoBLy5XeAqkAqWN3V7KQeEvnguiApDA2rEHYc1uic4GQBtx5nMRv1p4xy",
  "key26": "3YaWK2u3MDMfij5QcHVK233yTqnv9Wfsz5G3T2swf3xHbgmNFxmwYJqmTneUojSxQuWdq3AHrPoRaEhyyZRxW7sg",
  "key27": "44fxEbgffAwYnfSNDsHpFrUHsAg679RGPigUunBSyGm7Tt26hsqUjfAixWqhizjka7XL1C8YNDQy29pXh4ZMPkdF",
  "key28": "242ed1RvwdVM7tsRrGovozoCd89zrFLWf2hkwhvp9F3AhS5cYepEUByeTbpTnX6yEjL6TTMmiSMSaPXV2M2WvYfL",
  "key29": "33nGKHqtHen1JCb2HvoMzG13rULLyWBbPcxeZE1B9HevB9Azx2Ytjy9gJWP4nGzFwBQifft99CP2ejMJQDXHXu7f",
  "key30": "4JffKzmw3W9BcG9v31mXuGGsAgksvJoLxur3x9zEaVhxcxjoictTbJ6F3uMAT2mhrALBjCHQmbnoXxtMSeSm6hQj",
  "key31": "5jvU9bAzKKwCpWGoReJrQocZB3zk7nGymLEtonvZ5QEwW2RrM6WNfTR4Magu4zZWTnHADJgKPSuSdzK3vLQ54QNX",
  "key32": "3knm2kgziiQWkoEt3rLNmeKFx84Szjiw4VnbpL4ojbtERXEpGgbqrMqF4NRrJduauYgTSswkRqU2JYhA29xd2yUz",
  "key33": "5u38dGmJ1kWVYLoRwmubXggyMF17nDexq4qVokqsZBvCuoFCmxPJQern8QrMLaxZjCoDEFe5uu57heA2LwM17CD6",
  "key34": "3CWdE5zJBYAy2593GDC8RvCthT7ecVgiSJ1LZZiodBxnUBRbSz6tjDFmLm65Q2kpg1zK65AwkYXfzwngYSjcRvpk",
  "key35": "2trJGRmqfUQZA75zLKfgD9wbsqiFePNG3tLETkWqSqbe6WWxWSreWW91YgM4pinh6tDVQL14gZgcWwSTvJuh3M3N",
  "key36": "48JpiM5jpirpLuiqfUCAF7JWNtcAj6BYbJP8p9E7MLYHaXTadtACQcN65qaBcXyvMZYcmpFAKwWsx1eBMpveMCi3",
  "key37": "4dHyecSatyKCZrGBZSwvmLQm1wUQUBy5f2fpQLPPWpf3Vm6tSMSL6UEtNRRhevoDVpuaxunf9r8nNd9LjDHSULSs",
  "key38": "3Uir3NNgcxAPwoUyFUgcyhnqJFA9UyKjYvEcCiv3MUFjjUk59DjWcSC2B7V7ZqKYJuqW5mKpfnb7efB27NDb7tWo",
  "key39": "AdZ8JGQwy1oojyiBDUg8ydoxhJxqBW3cec3hzJhkKWVfS72PYY3qmKbGU6pP92T3dehsXuhCpnXMkdSoMGHKoPS",
  "key40": "6hRvsmqC5U8ei6awALYiUVqcrgERub9okD3EfYMQLEABYon1f6s5i4XjUHBQKxMgrGSfcBndBVNe7SP6S8MxNHo",
  "key41": "5db3gE2AJvvXGBQbEC93j3jfxFyRbooyxSwjt7EqzT9hY2vNAni7Zvf3E5otcUzor7cF5zCSSK5hY4bx4pfJTFXU",
  "key42": "4MGzpiiN8SR9ztZvvumChZLARgwZk3mq1kS2YGdwRDKbMCfAZgtPxm9QwSX5Ef1oYVUNWmbsq4yNyLWrvois4nUi",
  "key43": "3yJuoBNGv5mRntoB9x6zgQJsDdvzAZhpfWzjHDEvDYSLL4koK9phdS3UVHNDYXH1VkKdAB7UKbMvjeTvuEowpew7"
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
