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
    "49TWGkGhZkvq1MvitbVaaUCiRXrSgtr9cACersyDvYortm6SzCJRf7jA651rHE9TJNLaJkZ78UYCodBwNU6HXREB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KHhif8kmnS8HZS2jcXEEdHsvvNAzqGPj7FDa5hnKs4BNKGzap8kkwQKsgDAohE7mpnHZKChnoGX7Mk5wHbnRuBF",
  "key1": "2MSdgQhPoQMmoa2ckjS4BcZueGinKUa6Aj6xBVktcb7dAXMcJ4NJDodqHrFkqxjaWi5oLQaiEVRHfrgwutgMZqiT",
  "key2": "bxCYxfzNv91xoFrE9YzxyaAWCLksaAjvpyQf4raPEmYwdGPuVLNAbfYVMHQ91g6qdocBhsBjFBmCfJAPf4xw5Sh",
  "key3": "CGsJfPWHSd34H5VkM8JKurPCHuBNaB7Sn5iG1G69tvJL9FMQ6HDVXCuLeBzxhcqathpkgANSM2oeFyVRLQia1Qx",
  "key4": "278zKU4dkBNVk9CQLzh9G3Gjib1aBGuPMHc6zj17F3oUtz4zJ4kzJDgRA85iBQvjzxod4thyUnmGZ4pMWTXWYfup",
  "key5": "5ToRtwUVtnNeyoWNynq2eZPM2cG2PzoZkHR5vywgTSqH7zhGN2zen2aRzaoUVkGG2xfq2Hc4dCb5m2jhpWmVuwoy",
  "key6": "4V1SJJi2Hr8VzbknnTASWje7Dmv8hvEbH35KdFNTEUJ4abUV1rM984ERqZrQhZEMV31YE2VfPSHVecNULK3t8vUB",
  "key7": "S1xcgBSNy5HDKyR2kcQKNNUnAJrCkRQAE5obZJVrN3ky13dh7ed8yReCeQyzvDVrpgYe3xC7aWKUVQMLh4SFEtd",
  "key8": "4JeBzuW8TbZ1QCNFEbJV46cmA5EVmqhyCHAcwYiEayQtYvHk2RZocfrcvo5VdM7uk8b9jexJxhzu83WquS8KAcL5",
  "key9": "49eJsPPYepD1dTz5aH5gbspH3hBZpqALEhbzZ1MfRSAErSXRnejhcwJtaZqHLK3Fapobtbv7S7UFwBjSjhSA33S1",
  "key10": "5TRVojC56j5P6JYzHMihsLimLVypMeMnXitez43RDmpyq27MZahy6RaMuTPGYBGCYemQP7w2FDy7sySfkiYzfGZe",
  "key11": "2jJN445B5cFaoji1STQ5PecxJo3mcxx2RF8ikHVuGt3HTnys8J9d97XAjdZ2cJt9H68UNWGNuZ7fSBYYRy6SMQYV",
  "key12": "4AYrm1MbXCEGR3swDBGE1EkZLdK97MEJmjpPkmXEeu6FZhLYxaiVnzQU7qJS372U3u4CHAK6xnD9YP25Qjkrn2m8",
  "key13": "3xYMMuDfNThpSxFhZm336wQoef7SfGpc2TbzBxyD5UrXFCmcDcwJJh4sUmmAsS4e5u27M352U2WUXX7hNcQ6UhzL",
  "key14": "45s5uDbk74VaFisTNcKrqXinLxWxvY4CwGfNNUv36bQoSwAZ99KWPE7uwfX4R7h7jLtqt8G3sNsY6dPPBN52D2fG",
  "key15": "3F8KxLECeBj5mAzmbSpNnx2fDTcfaJtS4KVMR2GoKWPpAA4w4wfVxEPuBsXqULYs1Xn4V77J6szeeXY7mNohKVLY",
  "key16": "54kTLc9yMFKcEhzscZTp2JNXTQ9tcJWGKB7kSkh8h2CqkVeZXqte1GvQzbkgG3Wk2xoATcSgEeArYaG1vv5JZGes",
  "key17": "28RmoezhHnxynSKZ5VHgEuLHFTJbDVZQUw3XVVHcyEYjqWLSt5H9KKUvNrdoRXygZh6pd2NY51BYwjpJHPKmbFiv",
  "key18": "4ShtBn42zYRMr5xqhcogNzjrAskXXiA9bETZoRT8YKqNdFbnJkXKZHyiAmYmbQ55i56fcTb2PZaCBCMkhV2BXqJt",
  "key19": "29hJqyQCadVegkh6GPmQT3vrA3T9hxhxaC83AMa6baubJhhgNBwAbRuNvVvAetGftzgGS3Te9JVghLC7PqhwtjeV",
  "key20": "5zJLhtH38h5FJpTEiQYNBx7YfCSjHt1GBserVNKtWQF5YAS2jCZjmCMzPNHqJuZMJxrXXj5yQ1RDynL2mgYuipjN",
  "key21": "5EAbV88UsM32RigzBL1QYPdezro5TfRv7UDnQtHXGKTm4CjbBE3EnCAEEJVs2Vs7Nw4N3M3Q4wJhV5M1gVJft1qY",
  "key22": "5DpMCTgWG43nz4Z977sbSGFEeKz46D4wF6K8ZxdxD2vmCdwUv5zjWmTAbzoe8pJxSNjF5E55UT1n9qG8MTgskdMR",
  "key23": "ztf92kqsMiWxYFysLVpVdyPsZF4dNLCaruE9N57hgK45EiyP2Ta66SjiBh6EhifAXG7BPJmm4B2dTiZcQsq5vWG",
  "key24": "DSYmaJT3Pitx42NTY3hncU9iAX5LmK22vFqCwM8YQdphUtRSMJmQqDwYPaBEXdj3iU9yLr3N39w35h1hoMX38qz",
  "key25": "2qxds4jQ4MuFrf3hRsunVPQ6QDBXjSgwStQ2RnfQu1axRNw3ufuRMr9gzs3Ph2tETANX4H9hPqZSUeYsePTDPaMd",
  "key26": "2fgKjoWg1sp37ykac4bGP1nCVWwXAAfBeRHX5guaYt7mq6y8okcWhPP4fLf4Ga1FgMzen8cDSKvroKN53SJ5GAtN",
  "key27": "2hprWGg8Y6ikx2tVsxKmarnqCr2CRk6jEe3AqZesjK6vZovektgUL5Y2LtJ6L5WubhbEsiN48zDqEifEmx2hnxbU",
  "key28": "UM7U53GR5tctYF3AV48AAtHJ4uHPKEUMrx2CD6aHzMm9zMN12uwcWGpUA2mCthP7tbyujag1JJoHQpRqyo2wZuY",
  "key29": "3RPyoKGCQBmdf8mzCJGGGkS8GpoQj7x3wbwDMqaUgYbJFjHH23sL5Ft1Aonyw1WnQHpNtkFf4mdKUR379V4V5ETF",
  "key30": "5Fm8uFMcvHa28TFcSpxAQbVoEQqj8hC3j6jDJfTrdJv3QNupv5mp5ggWWZTG9QC6inca5pDasfBgRGfFCRgwQKdx",
  "key31": "4ovhPTXLc3hdVQ3CmEvgYa8ZPg3dz9d5dMadiLwnGbECCD66KjTQ1wtMFAnL8KHH4pSuifzNUVSyw969nm54MNkm",
  "key32": "2m6wc5GgBhtR8c5odov1DEJd9QX27bD4Vsp9DQyvHErwcLZN8VoNkA6at1EkvbomLYMBB7AgQkroztcrqKoWRWaD",
  "key33": "9qVUh5Hn8S3DeoD1Xeqyp32dpksQ5c1nA3NRb4HnnsgKLPbVE84qqa57K6ScjPXr8W2rRzEPubjZwxc52TmNgB1",
  "key34": "2i5PEPweExitXGsuhzk3QQ5YzyKN2Aatd7mBhm1NdaUshSfeaAEXeJ4fruzGgKSyKF42A7w3UHQJzW5zTCB7uVJ"
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
