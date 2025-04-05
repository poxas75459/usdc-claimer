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
    "2HYFdztM6Zy1Di9Ha937PJxiG94EMGMiW6UEYPuWWmVBmurvLYDtVtQuSDm6ARmU5mgAw3bQiGvSHQMMa2DwBWes"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AQh7i2csUtLEEs2JZZJJrDFVhTvpbWH8CByq5oMoMFjmyRUH4JJe8B3wJkFrr8U6tT3xP3hbE8dcZyJkjbR3nkz",
  "key1": "2W2sDWfefXuTJM2DRFP5EXnN6cRQyDri9fkvyqeobR4EzmzeRSxmXaxpcLtVjKM8vSj1wDBhsqv3HTqVL1Twekhx",
  "key2": "c7anSG67LkQDe8c7mgNovDsBuLCrtEym4ioUoBBbwgYGsjAPiVwZAzRk6kTZ8AhoZkwHVJkPT4Jtzybnhd9mjuu",
  "key3": "7FQmy2xcoHZqiytyvoeSCR4N4mdxpjMAPRmWc4NPnmPdWHnvBfmwMpFSepL85KKLGmbZU3pj4bvA8iei98CWpSv",
  "key4": "4JLfsNYLua4qX1pEm4X1mTHggcWB4GvfAZH3LLtraTQx1Bpz1zGQ3KjhU6N1z4BPuqukp1d931XX3BVpBsycZjTY",
  "key5": "52wFBmzNeyRCKmfh3PyGwxEbP4vC9xox9bczxQr1k6YqHUA6PTZyvPkPT8APWtuguVp6GbbYwRNFyzdQmyApeJxJ",
  "key6": "NSRyn1aPnreYrvP7mwQaqC37Sf5gPvmPzVKPSzW5wFgHD39LUKbfYY9SvxU8UYhxgKigweBYfjJN4E1nTKsar13",
  "key7": "5eF25PGw31cpMVaUD9iKmYvYxKa6TFRGMtTUDud9aEoYQpuu5cMWJBs4K6om8PRnkmkBjkfEWMYNDRem3xQB5YwY",
  "key8": "ccCdKsskY7gV5DzcRKbQiNxD8YvUiu1y74zgPghsPrHawiQBXuCMDwpgqz179jgePuvgayRnRcswBd1uXtn4Mp6",
  "key9": "4KKFpLLvhgGRhHci1d9kwA1WCgcpr1ASKvcdGNCKdNhz39UUdoZYuyvqRfoM4UJNy4eAfHTeedamgMLEibpudR2B",
  "key10": "2YG3DzTg94LHbgZUxd1S2QVfYFCKCx3zWrBbAujPoVeLzbxyH4azgrNGMV1S1SFASs5P5aXdvQApH3QnxJ6etdyN",
  "key11": "3kKVeR6vjtHafGdAsdZbQzqNEPig2tAsUhTsssRYxLnRJYmN4aD2sG4YFN464oLRjrLoYD4gMUEdnJqe5ryqhT1S",
  "key12": "4ysT6mL5rJMQZP9N3AL4ZXs2CQi9n7oehmkvgWhh7inJ1FxKFZro4m2hNCbK15hFvkUWUkjF8AMB6QuBvCkG13JC",
  "key13": "3Bjj68KxCpznqyqCbb6eLBgpT5cyqoautrALPUutXZM7cXGp42rTBRoNvaPM25r5BaAJmRfreV5vNvuQF2bjefcA",
  "key14": "2U8VDa6gJthW3vk8LGLxCNV8NuqRUf5LnjxcapG11yK697XLWFxYN5pJxapHu2xi62EpP4av8n8wuafpRA31xa7V",
  "key15": "38HBDiTGD413w7fJsqaosJK92eHKC2FGjuhj1nssdbMrPoK2AcmZortwXaUEynG1bZ3hK1rk29YigtmzAZM39Lij",
  "key16": "vLCWiyyw6AkQ13vrVzyGTui9ub9RkgZvThiYn3qjqYUSDbpmVM6beYcqNdbUnZaBhS1itmwMDHdNZrYHTzgTfao",
  "key17": "rRXVHtvWoBZaR8PmUWchMT7AFsgE7JsA3vtZ7cvFNABDzdg95uNDaEyCuuV4Y9r3yWrvtsy3kUhP7d65KGox3ew",
  "key18": "3CrN4CVVJKqCEQWe5BAbvtxjaWuT8cmBzJdpCoNv7ZApomFsW3nTx4Zu7YNspmx4Dm3ByHrtpRXAz2EUEpqG9RNm",
  "key19": "4ydXjF9MB9pVZbxFotQzhz36Lm7Z9D9hL9LzqY4nc6BQEPWsGLbCRz3Z344cij1x87Hk1q6PR1zLiv2sQNDUPUWK",
  "key20": "2SqVaCmZCSvpmn8tStB3zGUv1G19DKbB4DL67VNsWA3V28rtmJ8MWWreBeoJVewDsJqskBAdMVvekXy3eLgBg3yG",
  "key21": "2Sv5dmdk4dk6MxEuqrRFcrsuikS6eZXztMzGnF3WUX8yETycYgh3KPhzYTK2TqX2Y8sZYkUbPJC1SgL3QyCo9EqK",
  "key22": "66ebfYDN1yWVxgikueP8VrgwQEnW7bUSZL1J1gWwSnLtexre6mjgWEMKwvvnHFmDDp5u3ThDziFJMxmRtQgsNSE8",
  "key23": "615rpeSeo34b4vzvA8pfeuv5CWvNd6WdhybHDSevZQ861ou2YkAKptifSwwqhuEYeVJFcaJVcopsy9m5oPsczNuW",
  "key24": "3DjdMtenxVwovqE2SW49KCCMiCha8NctvGQTDzZojkxM6NbUSKmZxdCUHRCgW1EGxZGZdGSJX8uTer8xiFzsx5cx",
  "key25": "4ro2SmtaimYic81ZUuZKeiFEnhXQw7vCijnwSYm9aALRypU2tVuoDN6EUqUKWVc4SNTzS13fhfYftY2x4cxFS3kS",
  "key26": "4zw7UFLEcVP71x6oD6RkQNowVSjTxZzpBUJTqGzwQgNJzppUdd9VyhkN39MAAjZGrtHc7eCfYsvrripXX3nYEx66",
  "key27": "3xHMfss2jL2XYyYFGQYhXfVr75Fh4mUVyozgzTJ1V51qyMy4SaGDkMjs1Q2SSuvCorTzMFBytWQ5Cn3ULU2pkP91",
  "key28": "R2bmy8UFhvhcNJyLGJVkKcXGU1qFLq8GNNhKtwHR9A322TTUMaFvs4r5GXGs1gqUMBeKNf5DDjhuHYGEyZQU1SX",
  "key29": "62qNoyhdzLy9ATuqGyk6z5Vgk7TruZabjjHmeER1zai21fm5aYp3iW3JrPWrshocwgoV3U8jdXMTug8W2VmanuVH",
  "key30": "4XHtXJJHu6g3sUA1wH7AnA9JNYR96sfQzZmeykXiChQCHPNPNzsm6Pbr1wByzg4fmgkoSp4iGzcd8jAnkWEF6Rt2",
  "key31": "3QpEc5e9sdhWew1UE2gF4HSayNqZTLojmvwYC1t7pMhL5pKhX8q3D9MLatbVD5C5MzcYiZ3N92D8jGVA2GKPn43V",
  "key32": "4MtME8jC7iaRLjBVcJGyef5X2dVbpbo35ZtZCKR7SBwHxntGPKriFBKVTkUi1GLVisjwAbtxduRFXgXKSG8cDRYg"
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
