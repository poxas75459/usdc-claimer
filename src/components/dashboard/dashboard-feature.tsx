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
    "oVFTJkZ2ykiPXuMFVeUgnzrJuMCwRz8DKFQKkcFuNdfsBbE3GxNyDVqxoDryN4qB9pMdTrV3aQygKt9wqkW95xp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BprEe5GwFYVCNowubHZ8N8CSaeM7MFnVpCUGN2zhdsXPYg97whuBEGr7LNxLVRZxTjGFZhYskziEGcuCp9PNUkE",
  "key1": "61BNG2iTLf5hGCwqu6SEcK8iupn6vFEchFP4J3BMAfZpXuQrLVGX3cXmBkQJWoNxoPLAA93gsRnhZEr2iUM58wUJ",
  "key2": "5gFbFPKyfm1Zj9RmSWATHLv5MRFt1qa72UuvZZU9u7oGf5uLd9ZfkRbPiqXXQcwgoFu1JfumAfa1KAWq81NR9Aj7",
  "key3": "hH7aQn8qaxLqLpiFB6ZeianF7kZV7vLUfEBp62gxukUdtdj7bkjcqqnhRgbgnM2YUHNCcGgbK6VaPo1aR92grZp",
  "key4": "5XrhVTfceUYJmWSPEFxJFE2y7TT8grmo8yk6DZHDd5M23akHNwjNiNEJuNmt5f3N76TWxVYHd1maib4eFwTwK9u9",
  "key5": "57XA9iCQKktNCqjqVWo7RqAZ423ZYsv72Z7WnFB46BMubWPybHkR1EuwVz4tXBzE6WBM2GqrEgQwWRoDCRKDRDrM",
  "key6": "3tiGeUqXVqKd39P9Y5ma3E61Ttdoxz3wUwfNh5LuNnoGpTfX4YCvPZuHBP92G7Dp2AkTQYDxFxZcXTa2ehSzKeLd",
  "key7": "4ZWX6vD4rT4HgbPbk8pmxnYyCeLQSJbfVDZ2ZwyxkvDUzfJ9zQagujCoBBVSGU8WqMes4Ny9Dwu8u42BLPCkaN8m",
  "key8": "63JUZ1hudtq6qHva3HzgRPe3bW3SRpmeTgpAx2qjndtvTPSbZu5gXNzTCGARY7KrMBJuUvNCkxwV7Ycn6GhQDb9C",
  "key9": "46v6w7xUMyQPcBcnJ2oX6pWVjyFnJC59e44aibd3Uaoe8HNpagn1jQh73zbaDLU2bdfEWa3eDVqQXU7S1rwD1L2R",
  "key10": "dcjw3TQmjWSuZhPpZWkmZfmQYXhidBkfBiqQRKjfru9jbKvyz5XNJvGbuePjzwQijz7qCMfNwJS8KNRQg2vpo1A",
  "key11": "2hrrPuzM9uXPk5qXPvdFDjFsfG5RCyBu5GVb6dSDw6z5gT6TxS2ZgSy7PNFgX69iQKgJJ9fYoZt1c29999Bm6p1v",
  "key12": "4PHTERgLnueuTkKCocK7qPfJ73kjpVWD2eMqNTmFpuR2Dayb44RtaXZB9BDD9mucuBCC8BCFMoPyP9gpXGP6G3YA",
  "key13": "7QUCJ2YhgSNCvpS7MKiRXZqxYBCtkBrRXKaWMBW9NXbtF494USd7n1GJJC5yeDsCaRyyqYgD7AvnsLR4wL4qQBb",
  "key14": "3bZZdqThRLzjrRstacqxiLJzR8eD2CG9qDW4JbBFJEGwZExsLEDQWVkxX6UnVafERcs5XfJWLDZP9NQnCDez5Z18",
  "key15": "hDuJBqhohVW6pWgXgZKgowwKTcFtt5uTS4BRwvx54Lf8recniLBshtJ5GCLZt69Wq6LbvQ1wuK4rQkwQhPUTgjC",
  "key16": "2f9FBei5PLRVrUxDhxKXNPbDuuuZEd8KMpUpjB1ihXFv28QCADB1Jge1cbfSVsRjUbwbh642iahhkzk4wHWfbjG6",
  "key17": "2kbKi5mGiHY33o67FaNSHVHZLXMV98Gn4TaQ7Yv6rxvBA7bekW9rpD1gDYnjxM7QFJzJ475qtu8ihTe1NB9EvhCo",
  "key18": "5eTZKiF7ArzR31TraVuTMjrEF45SiEGNhGhrAz7kik2z9sZ9dhpLdenk9EJPuzmkDCmBnSZ3ast7HyVACV7q6CWB",
  "key19": "5p8YWCPgJZoh6SbaHvNmPSQ2xvxi2uanAWeVFpt4xBQb7dFhhQkRr8zYWKt6eYtnYkigCrZnpbeBKZMJMNbpZehP",
  "key20": "2BkhPGFprwg9q51CY4NZs2Yq94iZRcnXPXeFWs1pN9o86rxhHkMizKWdPiz6EFj4woje23UejMMCs3k4AmvNDrwe",
  "key21": "3wLWyvj2VaezVALfPSTEfk3qaqstSwVhWZzbDGMz6CwTXYJYJioASBarZFHzTGawTBfsSkxE3UwacVHoZbXXUMrd",
  "key22": "6fkYwobffE6ktKNhPRRhnjHyYPhYzFf6BYnNuCoLP6BUdMUmNaK5LcPKHcMaZM7maMG5SnawSWmXqFYSdTNww21",
  "key23": "48pboC3wKWXtkG1BX5xq5FGURiD2vqizbXQ5tXBXFmGNFowgjmv38ocyswAWWYJxry4XioAsohyArFg2fXMUD2AN",
  "key24": "4VCVNwXCcws7S3pQVgLpFU8pjsx5uquGodSSfjX7i7xXYjYntmqK41mCTdPMSj2JHAXYyTzinmSJ2TnQ52vmMQbc",
  "key25": "2bEz1ccXsztGLXX4fsWAadXRHDwUiZptQ3Tf5CpCxDvd2NKUUba6dkcGpZDhJDQyug1AZVrNoni59zQ8gEFEF5vA",
  "key26": "aQZGbGWcqpU9iPc62yjyoAvTLne37hJHNvBwyujvhfsqEPumwNWj3byCdJGcc11t75Ycein6VukzHfBgbJ81eXN",
  "key27": "5nnZzWFMHeGopADqnQkEkmVxi8GXWxMTfZspYgL8vtdvRcaeVu2ZmpdtMCg8M6Hevq4sJW91YoHWLogjzFRrAd1c",
  "key28": "2ok8GitRaBNVWT2mbmASDqPEo1Dr6XP2NqWhfxSiaoonJ6VkbVUZb3LideZhJjj1xh5ka1ECvNMjx44SNRMLmLgw",
  "key29": "4pMU6PuCiykkBwaLuRPhpm2VuTdqr6NSbCNy7133axmXbGJjMTKQ5kHxnHFFshDYysPomUVMVnWfh8foMjAEU2RU",
  "key30": "62a56stRWFGVXseF77kVadGn3MDEjsc2vFvesRwydwMBbZ7jgj2PzgWHkmHyFjG5LUsn6tVqsg2ihjaqwWUfTPB",
  "key31": "3Q5tEWHmUbvszA8q8eiqKsGtaY2azUb1dB8hjWEirKJo1eRKGFT4ATn8iJaxtczjQDXN1GqF6ByhFSBxdNdXfknk",
  "key32": "24VoJzweeofXx6iWmaTyhWwD9tmGJteUFw2xZgjz5aGv58age8pRsByNd4fYNUgRVMeF1n2t5wDzj1VDyut58EbS",
  "key33": "4hbix3JANmJTdrVeFBBp3QToWHAYeujJbZrdbPLT7NByNbt1jigY2gwqTjBNHs3zL9pu3bjN2u5iznpTZPzNz9Ze",
  "key34": "3SgMjxGWn8fnfhLkKTD98NQkan6dmxTCnxKfFxY4kDfH3B8gwMn7ESw3Z1jUzWNWAwJvwEhpsNPAFWpcy22P33Sv",
  "key35": "iVoiGwHcEiPMbK4EBkrXRvozDkvnPoEkwtfWV1zj8wfozcRdw2T2CNcbC8Wzvakrj7i9KSKy7Du8PGHKnET5e6o",
  "key36": "3yRxcMhzyWZjCauqeHM5UGVAJvPPy9A55c4m9LGhHFuZXte61b3jdGjXqWH6YTKC3qCnZNmKsDMn67vysWYCWJNr",
  "key37": "R4Ki3pgrHxZyKaBYyUeoM1v7VWapJGmEerBw9sVuFzxTGmvbHbVkY4dSQAvmitaQrhWkY2H2LkAL1GfNNAfooXB",
  "key38": "31ftuoXoQ4ATW53pFrAQagKkaNdGi1ZxHBzCiiMVjVErP2hxYv5GQzbdps44BC8k33UzzwF8PjRWssS3tMsuvXpD",
  "key39": "4ASXCFgqvKg7JBKFJn82Qc9wfuGznByVaWJ4StUoECWzJuJ9pVwvvawLuVmZWJaYjDMwahsCmT5h83uXTv3yZHBv",
  "key40": "4o4bGcREpKRPDsZRc5iDbEor8ougvzxZVoHFgS7rGU3U386qcPKt7aRXpF1yZwz1fTsVmTuxbVPBgmxNg52u3pCU",
  "key41": "2tkdAKAMLXQRFvs7tHadEybfdRUYGQXiFVWTUwee4X5pQHaRhZ5f7dLM2NdVGeGSFrm4moy8ujwQBSzcAaTSKDC2",
  "key42": "7ZRnAxNHkeaYatJ86qLsbHzGRCt9MaNvRyA94vHRuoh4gzWUc7TFRwg2ryzBT3RjKqWn1NPv5zuooJjsEsCQsAk",
  "key43": "smNChhbKwW3QRPwqJGonF3DuwMz1f7YVmhB5VX9JouzMRaCp4M1R5daUUPSSaotcirVDnsbiYbmdGuxDu8Q6HVk",
  "key44": "5RsEmUvZZKCyJeA1fvTcpPcnETQrp5f3GQc1xazHAx42wbCJmkQvAmoCaCdJGR27BXn6e6dHg9dWsY3uBDyjXRsY"
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
