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
    "2dytogp1qTb1dwPojuZzPRYxcPXYkJjvb5m62rHoiqBQNM1fugy2kmwoazNEBCFjhSSb2EjhNJcv4DHHDPkTCjBW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sihX7tYNCN9M5E3k4gxVj88hXEHW1JQxJNaGfHjr6RpnyYC3Q27jJuAfigrdRUReCprDfxt3vPakmRwtAXEXPvN",
  "key1": "62McZL1hVVnjm3VRWyCHfsrWNSeqYWRqxT8x6HiKFteDVawbeHbX33aCACw7yzVtmVeoNdf5gSJxvjy2ryM25P1U",
  "key2": "jX7k1Anb1UwySjSDoHrHNg7aUAPTG1dDHUKdt15djUAgy19gWhs4wFPMX8snq19xVMw4ZhP84sKC39C9M9GvvRX",
  "key3": "2hkGAzSAvSzAVC2X6KkYwiCDWn7EmQ4tnsB9vsZHsGHs5R8jhrZMib1evFkscK3EnSpZB3fVCyGA1xLVBQjV3J1M",
  "key4": "3ZAuX4znxVjkNvs8n4zgsQD3kZ9i2oNQPAvNFFHgJ1N9Vqb599ytKYjmnD81ZzmcXnePs22tkofWJEEQKeb2JEWt",
  "key5": "2ChDaTSYHAiBS8WVX6kFM5NTai8ztYUMsJ9Sf5ejqq2eG3uMH6dvK3roEB2ahr2YMUVjjZYDQWTkjEGaSbBEdXg6",
  "key6": "3MesHqZmNPnrfMci2U2Aya1yrrrbHNaXD3BBdzwxMF1nSzU6aYxwzYN16Q8ASxKctpzs8AsgFL3o7pzj77W4G88S",
  "key7": "3jZgbZeV6pQLuRBzAYQr9iwsKBHLQZYxx5VPcDkxHaHR5Nu3Ed9Bkra5wddzDc6qUaeB8LdVVYBEHGCeT2J7TPtU",
  "key8": "4ay8MhEis3n6WejmXGGwSLxUSXSh2m7NY9PPGVz9g3FeAiwTzvVtzFw7Z5Eti6PA6vH5jWwz933HEwoNPbBVDBow",
  "key9": "3cagDTnXRoAb8eUpnXaDZQv1X1a5vpYb8GDJPfDsuJb7PNeTcTRqBBAcfmxSkteDAz7No7r28AXzn4JQuRWDhc1m",
  "key10": "qUoxL5BqrTDaRjmJ1nkZfYHhk1rJ4XLtr7kNFSg7U8JpZkU2P1GyEVUcpeLNmipWAznjDhCgxLCeSFSYCfnmfcj",
  "key11": "2Ts2oxoqzruVxitedy5bfYWRu1jeCY8JH5f476Y9W5sfTAgPcLBu6xL2sGsGtEtmGLMVh7NeeSLpQ5fq4YQkEzfH",
  "key12": "5tiQcfqaXyubctZzF6FRKyVzsAppjLzTsSQ2bP3FtaYagDe9tPyTg6BhNJajCk4EiQUgbstdLJrg2USLzpKSPk6K",
  "key13": "4PS7vwyTWNWXJQFqJzU18wSzFWG5oL2WZKKj3RdePMvbKKacScpoSkJemUhX6HDdAZsW271sG866yVVwwnapr9PA",
  "key14": "53SdbVpxQ8nuYuQqq1G1TyjVfBUmsam7xCwFDtXYa61hMbg3AqJddHE7Rzq2ACsLmh4567opeqYaoVmLRKnzozc5",
  "key15": "R5RKFf78iGP39sAkK5c9FcQ6iGebYgNXNWYT3pMF1fcYRz6CNr4Ljf9RFBktPfKkoXjEa4vDMYpf9AAe46jQUyw",
  "key16": "5JGPu1SZ4f1S5EpibfC74SE1nbiGb4y6EgUgFrKKpyXksBhxfU8sfA58stjmJzbs5ofAsuvKwTZsHn7sADLwdNgC",
  "key17": "43Wn39x1bQSFxpd8XHNKBADVMaM4dh6sXK9T48uLQerY5wr4DKghhvVHtkLEV4rCJ9qmVdUwJ8ZWwjMt9Mn3eTtL",
  "key18": "4bTAJryPiDvoUUnWWpFd95j3sY5XGjzATgaXM8ZFsp72FUoqcFug8sA9okZqoQAhsyXXoF3mu9w8ApR3ipx7x2FP",
  "key19": "5dj5zfPK848FnD4q9K4jUpxDHBdx2j4fmEFkfmguaa3CSLwJPxF8GhKbFSXodk7kyExmginSoUoQSToGqx1zgtkR",
  "key20": "4no7sLGWYsuJGYE2arvZwnjjhGVtRcQ17x8a1EnPwWwVARkFCZLhuyftjBQEp1PU5izDnkU1VnJ4bSgMB9f34LV5",
  "key21": "45Ra6VUSz8qP9YNbzhEUtxxAC3M8ST5JwAU9EzYaFP4mTp4H1NV8A3NPhsndJ69ZZCZkTzTBWf5TU3FLkt9Jj8yJ",
  "key22": "4cZiGC8RMDtWPy4RDvg2KXWVMcovEwVrAtE4N4LEFLg5wxJfpnXsNFjr4DFVUggQZm1u2YWoZSrn5agCRjR4zmmM",
  "key23": "4Zb3HT5iseCuP3nECAZR2Bb2bpsXvLTGa8WdxFc9VbtuiBqkyRnHeh6zkqKvTXw2U7BbwfchqxGAr3CUghynhPyL",
  "key24": "4fNQrn4B11Ta3KQxaCHnNuypvZGpgbrpycJJBmV2p7aWQtjjEhVfjYDxSxqkuXbhZAye4Wk2XaycpEzBZA9bbw6N",
  "key25": "4pCoWgKN7jz7BgukNHyMSbsGRy7cXQ9NkXtdAP7ScFiP3iuPhBKxJZGkDnkTtRXsdMoS4WwsL9Rk8dLMoab6Hf3E",
  "key26": "35Rez15fnMU5cQDUYZ7zff3U2YfXBZsaHG8iqC7FoPUptAynZF9w4sCHfGgtWXHtmofHJ4K28ZD8TYLLRXv1yJHr",
  "key27": "bEZaM4eTSmi4CHw7LEwF769s5kgVrW8D5zALyPkFDUnocydQM14mXh51ebFuTWJ8ZKGP9EB5x7oxVE4gqJyctPo",
  "key28": "2KY27MAQ9JBuf4wtVjYCXAZ1jNwJbcHK8LzCFtHzQHkAytGxrNXatRXiihfNBgokiaEJ9RJeJfuwmh36kE6BTCsC",
  "key29": "49q5jzVpHwcXPZPU9fD53VHAvW4bxN9ZrAHnA2uGEHrghUpi5LYf68LHUax9nXPzX2sx21ekfJ21fVUsnAsKbTrz",
  "key30": "5Fv8qukvqPcWQVE7y5YUVs7dfyZXuVYKiRDbVmqStnYecHcYpTGKzQDQSiVnpnk5wnTzEyzodhi8t7WW6Uwjd1XT",
  "key31": "3WhMCwE9XshULHwTRznsLnkepFiir4fJVhzkgKsKeWMY7MidgWj8sqHivtKqMfnCbkWzZsAVH7xAfBTAatsHbpaj",
  "key32": "fD36uWzu7o8fAi2P8uKz6bTHR3BY7V7ueVviv64kX42Gcdyddg69ySJx6KorAu1UewMEqe935mz4t2rLPCaMaZP",
  "key33": "5dcrFU9duEPeedsfbS9785EkpZdEm13L3Nvszu9Ekejj7jQBjCU6LZXkYwbgTnxtvfrB1eGsXUxnwio8g2RPd8Vf",
  "key34": "4umjhwqXkhuu8RgxaetakWPDRpDtCQ6iLewVP2qSJ1mnzekyU9fjwNrRZMhqF5C6EqiJEqhj8inQQ7d2UZNmLFYc",
  "key35": "6BHSwib9N6S2zfTbRP5pE3ArqEEFx61DYEUuzVEH62b8mT8FU2RwX93cb28vfkCrhPQn19GP7iDRDEE6ZR32JxT",
  "key36": "2qh3H7Auk8QfevmU9WoFe8poPuys22oQS4SyuafmzDaS2i943qPDUfiMf23qnASV8hmh6jnP2GyYrCBWhuoLEPnM",
  "key37": "g8xyoTwp9gWA8ivoJCHyyjxuYjKVtYLPyoKAuL23qZztDazMx5Tkuu3SsXQpcDWYRzZ9Cahdpbqf4oPz8ECPZjK",
  "key38": "JDY87PM7TD6faMm5T9p5vPeTo8LzT5nBH3zxYDXQ5wnBH2E9K6ZshPz4YyxHhpBQx9qJNnhUxZLCJM74BzsEMCN",
  "key39": "4n2ia7D32F53vJ4rHT4djztWRqqcezoowNGEM25n5DtEjwKFB9CeLJyyU9WsPNRwuPry8a2eD6dp3M9XodJZdDs6",
  "key40": "23iYdPrWHC4qv16sUbZNjvSEwYgTrCTtnS1jnShjrbW8KpkKE6atFGnBq2EzUYnMy5vLNNkVr9UP7sss9uxt53Ta",
  "key41": "PCGJnYK8sybVLCQt9jpFkbCpGUATQuhmYY9puUSNaWKYuTCQaBTgapykbteQN6eYXLXbQ5sBovWTK9iyvpRVmqG",
  "key42": "2Xbvk5W2NNuLaMmgTP2x2ma1n9daL7fWwHUrjoQwo68WxbTddq4FS2WWPgNovwkWKcM5JVVauCuLaWrgEasrzB5Z",
  "key43": "3JNFKVcWGhN45mu8Zu884pJgwye53WSoiZguKx9WNZqbXaLHvizUDGLSx6VyX2YVBTB9Eab47GxfuFfkbSTn7Fng",
  "key44": "3dy5WagikES4mWhQF9riBkCcXYwgoznkpuezmkKK3oMZHEqmuwKaQ8tfUMy4roB7Uj9KxcbjtQbN9AmtVEiLBLq6",
  "key45": "G8m9esW4MoSv88Rn36yPJUPjafdmpLM1VeSFidw62a91MZqdvh55urp4sF7U13QJR3KXjmabH9XjYQW8J4mnXr3",
  "key46": "5VPtEJnDTG854Ge8gwHcYdTz94q85jSvXh6J2pWhj497a3p2JpEwjpKPMuniqs2HXrNUwmE6kFBudcM5RbzrnR8j",
  "key47": "3mNtSYYgVtkMCB17CLJ8N9reA6gLxoWCUWA6SHypximmJTLWftpeCVcaMySqdeV8EVaFiQNNTakn4yUKiiQ15Vdx",
  "key48": "PF1XPLCeAqpPexsL4bQgmNXT5jBDP6tArzy2jzuMFwkwf2WwU5KgByFJ5dxGCmHZenRWPt6PQV78ibi6PJJMWcb"
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
