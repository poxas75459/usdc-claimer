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
    "3A6JUMj6CmmTAT9Bzxt2UQ3o4fBvVjzUUoPT7d4fijjW2EXK7AKpzywGB2AGLzSsGJcG5mumsHU66TTAcQEEAV3T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ru31JfSs4YyTHb7pT5bTuC2BGZZwovDTmzYy8mzrruYp2DybzctM1XurieN8xBugnHb4sPEwgL1eoTWK2tku1rg",
  "key1": "4Pg7FnTHfisLfMha9kUsZmu8guXcwVaVvZtQ6mmFReRsF7JKhRNVdXjzKENBG8KWEPYELNdC2b9fg94eZpkx5ajP",
  "key2": "4vZWFp8RV1gZNRSHFQNiiC2eJiUws7BRLxek9J7i9HRmbWRGfg2BKbQJQoyHdpmEFz4ZuQ2Wx1vFD68rpDa4punM",
  "key3": "4DxeXX2y9SWJtEuD8bQrJBLkCiZxSp8QvapThPy2kuGnFuNCw234zV81pgowkT9dVSig4ZzjemsrynDLfmwnbxNF",
  "key4": "49YynKHt7hnPEA8hKQA9EkoYyZeJczwL885mTz81hP5EtN6FxZ9iPwp131jW73PyyEQfSHWG2r7xVGTn1C4v6pfN",
  "key5": "462KKvPpw87xMDPUQQAd3BrYxQjxfeDZSxJUPNCx1YnWSZxMfkfDRiXt7m8hWjFSkqAEpTdhKkQAKtWFhuMW3vXR",
  "key6": "2kM4RpQKqbbQzWWbYFQ7CfprEDqne3EhyMhKeNbGLEcCe2xez1nEj2wXemmhxbmGD9RKw4miCXMeyoDkq8dUqaG9",
  "key7": "5fJRtRpCRWPuCkynKit2bAk9CipvHPA39vUZZQtWKtMZ5x2vjhjJUZspWz9tDFCdruwHsmsurV7E4Ytbqft5VvJi",
  "key8": "4paa52YWEP6qwmRRsXA97CEGfCBF5HqDRWKfchLFcwVQbwkvs7U5K34cD2t3eRn4D6emmGTW7qkNCYN9GWzPX5A5",
  "key9": "2yorjrL9pETCTbAEq7pAhSaqzKaNEaFEqPMfzfrBnuEafekjqoyM5TTMZ3vFww8dW6siN8N2fYZQstE53vxnndo5",
  "key10": "5JP7zjUp7Uo5qTELZJxhiwR6yA3ZEqtC6WKWfSBmCQoSMMHnu1VbFwFMNhcsNQmgYvu5D9mQR5st78fjwdjfE6Nk",
  "key11": "aMgjmPjUAcQmN5hT1WBgNasnogsRVbALATZEufFeLLjwvYHzy1b9zevmVWD3uSgtuigBVRX2azWUSaGW1C9QiB7",
  "key12": "5ujD9SjqrGcDWXAjpxFYdAjbLptdQA3C44QbCLSCaPDzf5LmB9LvHskozs6JnqmZ957kKkjdcKxTKmzh9vAjTh9A",
  "key13": "2eycqvKPyw1UprFdenpTMKcnKNX1CPB7u4o9HJG6J3TCW5FTCkgz8G7c1iwu3B6QgXLLPDgestDSL5pkNdkd1EpS",
  "key14": "5pKzjysadV8qGJY9U52WySEJdz5t2bM9L15YvVo2wywW3jGqZwfexLpcDRKuLbf86Vzx9ZBQYPvU1KGC2pGSsCqb",
  "key15": "3TK3PpmVioAXhdaQRxdcbq9MA8kf9y5Hdmyg1WTCJCr2PtkqttJKynjWYraAaramSCwNomoySQ5Dy7JoDavZAMTj",
  "key16": "2pFcaShG37icBG9px1skt1UHrnymFNzJBUEyD2f4eqNrBHJB4v9KsNA8VxXxSYqrjfZajReWg2iNywoyKqdUqL6h",
  "key17": "5Rzz6U57xFaGd9vm3BmQdvAMnc1f3iM1Nd3KNPeXKrPaRVAbLi68nNJ7x7HTLznaGS5XWzwipWqbfHFQoSqWL94f",
  "key18": "2EnXUUkg3G9fY2DsQksJHLPMqb93DtLwwUnKw6MQMEjhqoZuYiZmJZewZojfsgyqvo7pHPCcg1uRPCKSRRcCMwE6",
  "key19": "5mMVREgwFh68pNrWB4onNrrCrQz6QqBXYxw7SS96vK1P63j9dhBRAJ99mxx7XwpfAN7LefAc5hSBdY6nS5sK54Li",
  "key20": "YCDzEnP4yh1KFHmPJBqLCnNM4GxSwTyMhbZEZYv51isYtPCKF3J8ZaLh8mSbpAWYdgxa2Exmcjr66MqeYkxpGDU",
  "key21": "3gWYhuPU2gkzT6WHEpP2BKLFmd3dsmYPiPQ3UoTCdsDzaKUCp6XcWMZkTqcDTyaN13hMBzK3548WPuxvPCMcE8hU",
  "key22": "NwMsjNmNHfyoTCfzFxjMKSpEhKiHdMnheHBKkGWp8jx5whNDhjKfUsin3RPN1YQayBasyhQD9nUMsP79CEGmQt6",
  "key23": "CUxdS1QUcCMAuK29xapTUs2qoxCgBm1w7NuJPm2bzJ5HwQLo7RfhXQMW2cmCvcn5oYJcZ9Tsm41vbeiaM4Tguxq",
  "key24": "UBvmfZTARrqkii8aJjGDAdwsM42v3d4cfaSx2DLThxfo6SLpZuipAKM4NhZXM2RbC2QT6pwvB72jQSLv4jmD3Ge",
  "key25": "2eikiHLqc8PPoWFvajepNNMZ1YmyMFtPTbTUVtuYJgpJhQcj8quhsHPmK5KrJ3daAP7ZSQ8wHZE6MABhitPhoh72",
  "key26": "2XiHsKTvREvA6ph2Ugs9bi9hrpaQreCSZW5ymict7fUxfxWJ7hW9kbyNTPFBBWJyYmMSGWYBcbooD4nkRp5zwoqB",
  "key27": "3ouV8mmE3qjBkWWjsby6eYuZvELbmKXP2ZxT4JLBESLSxZftG16qMRnZzKoPHEzprbAE3QSpSLtrvrYwzorRd6FW",
  "key28": "5cqeT4WVHWYQGLi6y8jjDY6Q8UuUUvu7ro1bm13dPa3TUrBvJWY8MWZBqAjeb8BVQvEpngu6irJSvfVfZF4NbJte",
  "key29": "5zLtUp2hff5fVjrpcQnF4Erbju3hevAVbYjqJ5tzFjYWGj63HUtc8oZgsQhjx87drXb3stgykzDRi7CPpBHdhecT",
  "key30": "3z6xRhoUnsy23iBdc18AZJsnepC18EVYPB9TJrZ6YpQVVYntffbkyRG43hvWdWZQNdVcWn2LJLWWSULzVjpr1mGt",
  "key31": "4HqAopiGtWxFctxv3gDdhFrLMGi6XPbPnU5fCzaKe3QZ8Ap5YgfihVQyoQuPyjocysyNAc7zAkEMNVfk4DCfuL83",
  "key32": "2yEvpF6uskeUgdpiwKLJy8BaBXKDLCcsgFf2WLow6p85KcUarFvsFWQowrBKUwjhPaTKenqxn5RMLSTY1nq3MDov",
  "key33": "5uoxY4vijoWRpibjrK7WHVFkJYJ5FERVWuNdMGB4sdFf7QsGzojxba7cQXWBP9Kb7wVj1C4sfNCdjYo2XiwFomVX"
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
