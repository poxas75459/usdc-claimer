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
    "QYjBd18KzzUQ8vhtfDAyvrqEmrMRVy37zFH5jAXm6cCWMneoonzzuMXqdRnHtbYst7pRestEzfhhTNkLzVnN5mk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wpyL7Hps9pt4c7zoBXdLqoz9Ya2MkyMEXnpp48GvnBTK24U2oRfkyqiELxMHZG9LACAkwArU1G9jhZYQXxRoRa3",
  "key1": "29haUP2AJ2FmgtZ9UXiEQeP2QEF9dV71RAEnwETw8VU6tQp9YxKy1dxhBuQQri4g6P3GrhcRdR4DW6GWzcsPew91",
  "key2": "5M2LGpHybXcxtTjgRrAFP3zXUMjPV72T512QP2ZfuWoWEXyv9ntJXuhm4PffpDBZjA623AqooMKe21ZU2ncjorjN",
  "key3": "61J4bnbpCZjkoV2gefJVS2aRmmidLxTjyhqZSoUsSWPtz1jAkKuY6HaeTBYrbX8iuTtSqhsG44dDHQApe2tPESfd",
  "key4": "4Fk11Tbscp2H1JpbrNpdgUqGgKhpEDtduaCyqYtxuhEzVn6mJ8JaYdhs5FJ7eNtvL9qsr4E6vsfTn2Ad2zhY8sM6",
  "key5": "5QyAh7do3o3U1qa8yTLPi6B25csmRcQwiVSjR7L2KSJHS8dhFaJdWmfGM2cAuRZwfSMKesHKo9UV5td1u7jAXdfL",
  "key6": "64AAPodoi2twbeSDp452wpzvuhExPQxFiULxnTEfLsWFV1zbexSfLznJBF6ATXnKre1CJxmmDBn3cmS416Nug1yH",
  "key7": "p7vt3DKnx7YUymN8xtgYhXjyXF1VQxTRnPWmUe4YrUpHq5tBG3HQDpEp6t5QPNNsPhZbhnsELJQMh3jxdDcHXA1",
  "key8": "5tqKx3gv4N4XkXoyxN8QaqpVSjGxFroVtMH5HudXsqJPpmwNz6X6APh3enq85ZkEGBSTUSqukMooXhuAWa3Fh8yJ",
  "key9": "f5t1Nt3PB4PQrVAwB1b1igGe9niSkr7jimuJtJmpph5oVtAPSgsbw28NnVU9GqjBRADyDm3erNLLsbaZtTEUiQm",
  "key10": "qtypx89cg9EJNUUYHVa2P9V4hkiM5SUYid7PR89sBBdZwdJzuKG6onx4upUbBoL1YSGaLPRxnSoXBD2tv8yp3cd",
  "key11": "4BdzeuukVRBepS99yKhYU2QwZv9VfS3H7zLjwpncS64GpghX4amnfViGCcbfVzRP1gNfWEQWmNd8e8VJBeyATBVn",
  "key12": "5d5u1QW882Kdo2JzhpFq8PLgW986hwrcqvSsGiFUbpdmJQyB9hJ31m56pe5q9bcoKjEP4c1aKazL75reVniS2g8B",
  "key13": "5MpsYYaJa1veQpt6S479SbHsDKyr2mGwZFP9y8iHX6G1JkEPeFxJLyKBAyS7XT4XGLwqkMW5XFgbGFMd822v2XGd",
  "key14": "4ovgRygsFetFyWCjw4iY8eibTajYb93L8Na4R9c1N3JaX93pAFy2bYnBK346UWPvQi34cFwzHwG1DpNftQ2M1zx6",
  "key15": "FNzKXjfgcMQ8BHSPyP87HmznbQNrLzGVRCkA13jFXaixaUFpwxQMqq1jpHkDFBR4nJqWFNYyLuLrcN86PU7yEUj",
  "key16": "5Sp4axSJKtHZtJN8fv6DCAWr2zsJ2JXNvuKZLYFaeS3ppok71K4JETR9hLxizQcNW9aBSTVycg1va9fKxTGkaCnF",
  "key17": "2aEnudqUxBBa8nTcP3e1dEh4A18vdiS3DhpGSSV1RbG7K1XgWGPSXSBggfyae5j5jb6AxmRvRXkVsnN4tUqoGXuS",
  "key18": "3HHdd6oMsdEE2uiwRVPvts6HxCwH5Vk1aggT3guYQqMQiMkhFFzH3jvk52na7cyYLV9aoXCnuMKutiGqvLfGYLtX",
  "key19": "2wGz9fZH2cDDTqwQNVLSHRb5XnT7oVZhbaBzWLYYejcJoRB1bSRnELu1iuX9AJqh9gRUd2pZHpydxeNAML5BgMcW",
  "key20": "21CWZRKmysTeChLwpEdbMaPwbAZhn8rr3m9eBwfaLC2WeuN33a8tFSf8UFw52PJPTeXUGo7wheLrrMFmuQkvxyAJ",
  "key21": "2TLBvKRcjPrG9QeyncnB7GBSsTRxoTrb3TKF2KTuirNfF2CLfvc7CNQz19Sx3o1ZkvShkGtj7eyDuSnDBPsoX1Sq",
  "key22": "2RZKqtD48GNfAbfuQfN5HTwzXJ9N6MTnPt5A5cuUMs5BYn6tFhpiu3cp3akKbfEaamz9B4oEGGZMAe51t38g3io2",
  "key23": "474XDmDUm7KXjeKNCerNEYGReVkwHoqmLZzvBwNHY72jhRz3Sry3nyXa28t4xPcUUGXWQak9hXvn7a1oDJ1eMiPZ",
  "key24": "3ioyakLsxR8za3YL3USJaJDii6aKMACHwF6oTgESzJmaANTEduj9DsAN6CsBJgJb7yKJavvkwqS1egKgTCeGxW6u",
  "key25": "4kXK2Vm9is2cBPAxPTYzP5G71a5fDVT7t7y8KKvbEKoHhszsPbdYUGN5C6iF3jDZBgm56HTUHvCJPJ65vFG9mxDs",
  "key26": "4PjuaBoveC6RQoUZKJ81p1PdauT8xaQ44aDQ8Gk6iFgD7NCRWHzjxfVTvz9fKsjLForv3thquGvVJEP2aA5EgMf8",
  "key27": "ofYyqm7h1UCewLamey5VqBgpgJXaMF9iE81pi2vUsReFKwA6YGrpoREnh5Ci1VaDZs223KDUegzaB7UqcH62Df2",
  "key28": "5tX4W7Qb6gwrhYTGjc6SwNcPpU8sP5Nh4kygoo5yfycftocKk1yQj4dfaXSACSNyQHCYHwi14p5nQ7SbfoV2HHdB",
  "key29": "YLi48CSbPR5CTzeBYGxYxeYD61sdPtMahT1Cj3Wfc7ceaVJ6pySzVabfQjr7UPL6gdhaP8AKEkVSG8uaENi85gc",
  "key30": "2QzbJL4K5aeCXSAWRLAm9EzGDbCvw7x9cwHx93xzwwrGwa4ekm9EJPALgqDBYA2T1ByJkCmcBocqBYr3w67k4pHj",
  "key31": "127MCbYD7kASAcQnSPqg39YxGsY2jGrBxEC12djkMBvgtdrULf62L4Da4AAxWGHLdGi7gsu5KkPCCVeaKbqmL5Mi",
  "key32": "3staP691b8qCfHxKmLEFn3ApWfUth3u4GLVaBimkFPusywMiFb1qpB4LbpFbj4ann4Xvf9okmXQD2g6jm3RbMDrV",
  "key33": "5h9L2eDL3htJoWF6FcD2FW9cM7Ag9K82i2vVWMNWpxb4x31qpXL9fZZ7PGbuNkfjsgXyfM3HHXuY9E2KdcnDtDRi",
  "key34": "2Zdk6Pot3jBPvMMzarrGXBz4mG12KXJVCceeuwUNUaqLrxU4BVbsLUviYHDMN8jvs6RMvmBgVTRZjdtSidhfqU7U",
  "key35": "59mxYxc1p3zjDDgVdADEKsS9CeXxiR1NJkSDSPSyGmeuwX5zprU6CmnHeULYL6fb2ASNaZGSaYCZdfzenoMusAzU",
  "key36": "4P17WB1LpWzSsg3eqrArd6bvYbH9GWTidxvjpVZm57KBYMFF4emfVgnyEZUgCcbuAjB9pXenR86AgMJJQ8Jej4Lu"
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
