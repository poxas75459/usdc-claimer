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
    "2LVFwAZY6q8Xa3FR7CDqUjUkpHcGd8VidecPQMTYUcx9MLQ6ytzJkoG94jLVHbmQeiCvfVmmYnH8bMU7J2HSK26s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Sa7PnyHtogShK2P6xVa4n9Z4qhLWGKkJvueocBBZSepJPCyMkxgAtK9WwdM6ViPT9VDmeWEYj2p8Wryo6RmS82o",
  "key1": "4mhAiz4fuqVTxuQXLYcWoKhyzX4Ek9v6fg5fze6FuCdRjHUxvZzbppJH9mE4SqPxFqRqRAzik2FkrDa5iu4TQRiR",
  "key2": "5w2effWBhEd5XraeJqkZsqt5WkLQjwjw5NPPagQ5ffvJG7L5SGCD91FSHjuHnz9qibAfBFHhKAiHc7baR96mo4bF",
  "key3": "4GuTPPD7TLk2Wg7fa2kti9DRkSaSCW5yDcVmmNLQ2XKGBD6oMx9G4sKVE8p6cD9uhPV1KZDPFp2TAiLrKifMEY3Z",
  "key4": "33t8KRYUTVuNFzrW8oXvnFRHiDtNPAiqzP96qNd8XzrWiBcbsLH3CUumA6X2tRinTKTEp8cMH7FwbprvKBNarYAj",
  "key5": "3zKEnmJsTPTstwcUaRr1fZmGpwdSNkpDNvDcfySYQ4w3GCnsrTzoamwGGTtEZvdfuzL4pAMG7xyCwzxRWGToxfN6",
  "key6": "32cP9gGZYFCtHbCMHrDdQmYAUwFqD4PgD5nHcA4Qn1ewrah94nXVi7KmttDSakXNJL773BwJtDaSHezRUEqVx594",
  "key7": "2cBe1enaWL1QVFdFdFQkFd8sxTUB37oMhBw9nDoWJg3aiYadU9R6eUNj82URVx8fBGKMcjqRhyBpUjMoHDirKA4V",
  "key8": "2sUyFGGEXUniVFkXgd6DkfVuN5a7fK2X1YFcpHPWcgxBZuRTG6xvauBYDBYCWx87Z2vSPsh8jeipju3pmqEPM6gW",
  "key9": "xYMw5eK3G54fHhtQXBFFeNkebhNZXZdKybVT2Kp3FabfQSUWDL5cfY5ZUs3w8Dr5R1gixMmKhKdLudvZokyB28J",
  "key10": "2ig6A4hUAwJHF9AdJKmvSnoiLJo2g5V2gRSndCU812UyDhiao85FucPTLUu7WCZrqfNEygeUri9nsSfijexLYbxU",
  "key11": "3eDPEUFn3gcFCoRuYRYDULUWFLbe1ohdk5hkh3URorT81DG6EhYF8NmeVEwhSUZDfr92VjU1WdrDKCLn5bpnY4FC",
  "key12": "CnPaVAFQXi6Dx3PxNsAnU4yVKhHZheNJNACB75A7W7PKYsmzjvTBujR6ySxG1kjwT33eK3KebtLv68Kckm32jLB",
  "key13": "nJ5mgKUtZpDQu22jHc5thZyaFxULfLx76czYfjjaqarFXtUYGGo7caSDQYvjDaKqXCWxhd9PiUC3WyxrTjnDQc7",
  "key14": "4x9iLE3fouDLM3mzFvd4Wvvbzvji34hgyHQB8cWXbtbdkTmMWY9piSAg5tEuDwUoaCTUm9ajBQocJVpTRGfTyTAh",
  "key15": "4U38qXgRZbXTVyvHJriEDZ4Es8toM3va3tGNivaHAMpiEhrkEgy7ncSMqDZDBCbaqDhMhaUiVtzBvC1BfCirzBu4",
  "key16": "3Ak2cKohKnwsm8EeyhfA6pfcZiDh5yKBuYjd9EtQUZYaJ4Gpkj1UT91SmYu6YhMpgDiFqZMMaUJXRrReCdUVsysJ",
  "key17": "2LEyYxBwB4CQxsFSPfkbTne9gXPqTckabguoCvCEQMk1LWRDCnAipT36qubFTa6kUvs2Y91SiKn2XBuDWqc3Ezjk",
  "key18": "3d8Gbbiby9EMstk7rRBhKxTE1vaXA4AakEUddG43p4C3DfLcUREYUxWNvdGPSJ8VjMoqckotEs5bVHVybvrVk4Pt",
  "key19": "4ByHZ6j8RdDTgzKGyvnBdFcZkugqXahJgP2yxPQnc6pnfKzvfu3w9CLN8T8vhuLDpDQquBp1YvmHyvLZGdpLAryg",
  "key20": "5vS2SgvxszZtrj4srNbPT5twWynUcfAms1hXZtDWcJ8iFkhFrTLERx6ZQnemHRPMkmxAXAFZgLsxJFBZLpVx7CUX",
  "key21": "ojMQR6EjXVUgYhxkeAqrJq4M1pi3rw7b4bFAKfA9aSERX26EbKpbMgjSF9LmS2xP84aLNbrLNty3eVBetAqqXm5",
  "key22": "2i4qDgGwytN9aDDeQSZdo6xLwCPNovHh2dciEW8JScqBLqwL6UCBiG2EfQibDBYT5xJ1W4T5qRDR6PcmysiEPAkT",
  "key23": "34KDdHWbe2FaciPoP7NTsgkSV8tGAGoNEV4tfAU2a5nja3oPn2KCf7MfcxFob8jvdUrpoJF8ZxQ8swazZHLG6UKB",
  "key24": "2oVQf5VSvGfZVcpKbEVnYuH3P6vLZ3tEjUxcYMETCLoSSQCAeiQxsBxcvdUaN4gKqWVzXpG2wJUXcbYpZ6C4WLQs",
  "key25": "4htKS9yX7HQdRuLq4VLg4bL8wFNNoZ4ST8bSZtsqUGazyaH65fQ9aui1MghXye1vGCHFW4GUQKVEaobsbp4U2dXq",
  "key26": "3advn8fDyffBVDqSoq6QGxhATLxT37qbPndnGxpnUUduPJFXYK51HjeNBax2xr3d9Jvnydo1QYRaKomuLQ9Bsbj2",
  "key27": "5k9ZN2hN6QSLnKpqoChpSbvYtkzyuTvjEyFQPqWfwX7fiGQRwPxNYmTdzmrdBS5T9C7D3HWcTWD37HvBLYuM8zJ7",
  "key28": "gvmEpUfcan9itEdCFUk6e7R6Mx9Sofe9J6s8b3o1ti9tvrjFrTBEbydrpocD2F8xWnUcNfUeGG4Foxmzxr9RDNc",
  "key29": "5GSRJ3kTz7QnMJhShzhKjLgqBxUh2VqtYErrewWmnhPkDbDD84wEkfJVjbVPhyaeJQ1siAXkui1CLX8TUyArHjUy",
  "key30": "5dYStHjk5x7SRaQfDCMtY9GFMduCh3FqVtYJZF8qvk5T4oViPVsHdpBxX94UKm1LxRmrQpRNhQdiqimeYAwCoPs1",
  "key31": "p2fLr16jvxyj6rarQJfFhyPX31WrzQHMhgNTAHF8fh5rdmhNquafPJJAK2DKbTsfQa6eyVxJmQyor1nYPaS2zAo",
  "key32": "2cmxHdAUHF6TXChAdpL83QS7ewwtbQzUQMJcdS4qajGQZQ2FKxUqp4dDzPoRVGDBaU6J66ss5mkk3xhMoCHXyk9R",
  "key33": "4Yq6k31y1iSgMXYNsGm6jxDQfrsfFfU7M5E4hJ6ACdkA7uvfsyycYUWXBHR86WKjHW3G1gZfLBRfWsut2xhpxNFZ",
  "key34": "5YJLvib3hA9cT9Bouy1vUm1JJ2pyfC3n1MyAf4MTnHieeT2ms8JuiysuwxwgHEZJHHh4KynTvR9e4YXozDp29VLZ",
  "key35": "5yhMzjSDCjHHc7qGZP4asd4Lg16yFRpLH6ufXDYManexoaExtBWE5wZUqBVpNPhLqfTNrkBoFjMbQLNpU96PRAvu",
  "key36": "46Q7snyoPjnAentvgK57KwnKhWKs7MKzAgFYib1guuDsuybEJBKiJNfsLtj6d9nsaooNX2zTYBG96DHLSTZu3C8P",
  "key37": "64FsHPPEvNT5G4CoqTzqUhzANTKh2ktJ9HgbvWMdf75YMVE5rtKyCwa63HmyA6VBPbaPA729rJCtLAiozjT2gAoA",
  "key38": "343f9JweRtDxa1LUHSvgxKMU5DHJNfLEd3gxguwxKnWV6sSmn7X8ivxxcdCPBCLvMHoEMEC3pmKaG7JtMRqW5Hsf",
  "key39": "F5NEiurzeQxYzLKq1S5nBoZz7QCpK9u4hqZKTJhEkzAazA4WX5XZNaqaEasyn62LLyqCVWwedKn6J28QnGp3v4S",
  "key40": "3sjxftJRwz9EJaqNcGoR6Qk6nJJX5a1cwHSFE4JHhY524yNX3bjJk4jUnYbPbNdA1ueGG2RoGuNmcmoVDHS4E9Mf",
  "key41": "5mNMcjzWY8UaQqaPZ6xgaHikig4bUvAZnwcC5ahMAP57Fymxh5NLpMj31JzbLenR919R7GFrYdtWijARURc2k6Ju",
  "key42": "5uWiafmfDWQXtietFforwgk9sbC2MTic6xqtoys9g1A5dKzQezzh3kis3dvAn7Lv11JxNnG8GB84V4R2u3J7LZXv",
  "key43": "35ZnNrbmedovwQLdZh1xWj9NgwuXP2FS9Xdr1fXbxaE2RaMYDd26pfdeQtfXo9yK5fgmsoeNueWiY2vHytr6cAZz",
  "key44": "5tXreCXKa3MS5dQ59epHWqFNmvG4PmFwh5UZzdfQRNv5sW7bUFW115eFzkGhSJ5woinFiA896cJFno56XCmK8Tag",
  "key45": "23cbH6wjwrHHCmj5TbAnCjvKiTLtrYFTeN8fkrsKGS7brWPidaFzxF2ZSddngqqjsEgYthZq55P92TuGJezS5FYZ",
  "key46": "37FHUPi4aaq74AFBx36VyV993uTb1yX73BD3qLERSvuQbgGUGqt4vod44pt1hEP9butQXQpK5xUy5rCtArjW2zFK",
  "key47": "3DQNdkVDj6ubShp36LSEQZdrp2Cse7P3yqeJZpDNxj4q3DhKnFfAeLtMoWmopn4M1oBJQsMM6TaU9H14K8BDkFCu",
  "key48": "4NuCijbabDSBrwJW4GV9q7BrWrBcn3cj8J1bYZzsn7gQbRNzqkNVU7bnNTWz2zq2xrSLkmW9nVRiEVXfRJZukGwY",
  "key49": "5tzykP1LRyuQR5isvKjKn8DdQascrKHitHoU3eTtHFU4rXVyVDEhQS4fXeEV6sAyEjDRsGkDaACPvXE65XbpSu6M"
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
