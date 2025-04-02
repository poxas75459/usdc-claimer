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
    "2jouBVNYGm6o45AVwinFutz8HS9LyQu22ory8LGW2Y7NCxymkfJUSu534tTLz8n2mCrs6Vwp2KYmeiohoA8PQf3g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PtupKbuRZgWCfjRiXcKiMBQjxD34RANRUQnHZfgWUTzkr1ZPeEfNro89fCMgq7d9C6Yihg1gDGEmGbye7pVVaBL",
  "key1": "dM2oWm5S4SXTdzGnSHPd4HR8jF1NSJaiGeWzTQoQENcM64G2gaRpRU6Rv3sJVZFft7FnNKhKZU859T7VCykPUTu",
  "key2": "PJd8sR58xfBtxW2kD1SNoet3bDrNS3XKJiBrWjsqeCsfbopWb6wxKZwyNZ9fBU5CJNF8QqwaGR7dQ8uThjGupt4",
  "key3": "5vB1NjwsSGwM6J88YSTMAAW4ioqygwvi51Ci9A24uNnQ6MQ5zDWdiiigKRUV8AMTY3K5AuCAWYyTRMb4XEoVJ7jd",
  "key4": "244L4f9Zv1NWjTuth1cY7GYtApRpze9GtcL3vYPyW4cKoPU3grAtHRzFUVkAkAot8W4s7MT7vKBxyypENbq7KGGN",
  "key5": "47CMMtjAmBeQ3ZUWaxjukbHe1M8seqGv59FctF4E1Z6WVbf4E5dPQQYU2p5zmMW7DW898w6nwf6wuCsz5DpdDyM9",
  "key6": "pUon56CRfJpbbUx6cTpMemty9zb93zMgfyryzpUtLxdLNmV1LUcScMiAot9y1r8Ate5vA9irygsV7sTR5ZZdksJ",
  "key7": "2aXbnaLp3RNqZTdjgRMucN37uMeHT93H9U6u11yXwySthH2gvfcdziv8hcEGHPcLF9DPYTf57t9HxCBd48G2Gzwq",
  "key8": "3KFEmwCXPpXgnvESZ6SanumDsuYzCEoRvF1ow3JDc7ZCNHPpuJhU7SapvYxnRSgz95HbnAKM2MG9gQb3ZJddhGEa",
  "key9": "58m5pkDF6AU3U1tNihs1HFUx9YiLZFrDtuDtKQaTyqo4d1Z8p7insMUDKt1d81QQYVe5jFxPYEzS4UCShn7PoZA4",
  "key10": "3PwYAQPoQh7BXqFqSxC5Ys2wdph8KNwKA4Wm9V3aTEhkop8ouP3EZYsKRJhuMnRPJCprrad5ZoroRV1UDi7DtZPA",
  "key11": "5ehcvSmDH4BumxkzyaDgGZrDUWxd2feR5WqBz4DtmZfHyoLSWRWv4K1dxPrSexUuUgp4ZtoMuLGatX7XSNapqGLc",
  "key12": "23MRAdvjAdDoJAyTfANBym8NnSb2udEHyLuypStTDudd9ZquZKz6SWLVFrGicfQ7nBTiuxE9ALCVm95g9pk5hkUH",
  "key13": "2HMpr5UfLQfmXkT7wu8VFSkTSYywKtAbaa5XAkR2baPbKS9TQ1wUQUb5uytJ6MeDSzL3FjNP6yqtYXkUbcmQEKtm",
  "key14": "o6GvCPhNN6U3ry53wZwXSSNs2vdAJpBKMiyuLXhtqDQWGkhMAd94Q3KUSdVK4DfCseePagRTFeauf9SnMyWKyum",
  "key15": "4Qh3hkDRJnoNqApCGkrNPBA5Xwq3mcf4zaqKEsNF8ZAKGN5y5X8Kz2E1q3666zJRxedzsDBZNhEGrUG3jdKFyXUj",
  "key16": "WPVFy6y8S6pfpttxLoxhkQd5fEd2ELcznWxKmcGLUfW9qUJuTVbwZtCnnXwHEky7r2u1jxxv1VLsYAR7ZDwsVZX",
  "key17": "8zfgidiBMxtARVy6tkNirNwwNkQen15DdMRzL5z6jeT3wCfadgyqXroRAGQ17vQYhNnZ1CNyHk8bUrZBPqQFt7E",
  "key18": "5SWaVt862aPac5PRzmEGz8zmQJ9yaN6YPjv1z76vAo44KYv3avEDmTKWJP6Tt5AM9pP1SeVwvXVm68MAquJgMero",
  "key19": "5vEyLY6FgwYMpHGad185cpgJFRdW8dzunNbujVETLCiZmGQMWREdVQGH6jKL5pjbdyzAXnBVgvHUdAEdpdYgXac4",
  "key20": "4LHTibjEUaoBQWwaRGn8TRCmvSByZNT7KbuueX89AYy6rhSXe4sbicYiEC7rvMjSxVes5HbUCkui1S2ixX7A8zWT",
  "key21": "3itS9QT34CSDr5iURcwHdKLDKkSivWD2vTYS4HzkR57xnLCn2AQg3D7riGTZSfSDuPetLreYEbh62re9WWuWK9iL",
  "key22": "667rr1Cqn3FU5Vd7D81zYarFFwSMdMYRr7KQZ9Abk2fT1pRpGWW9Vnq8CU9XnMcbhaqgMKcEsShyNjVDMg7hqPCr",
  "key23": "4vSdKjfxUEt6NyFXHvUMkunhmBPMEm25Kf17oFsNDpcziHUMUsNjFLxAGBdnfskqoWaw6hncqL76FLDtB4A5d7UN",
  "key24": "5gZAaKeQhodKXcAL3gsw5kxhQx4sf4P2pzuZsHo5V2YxWrz36FT6pPmpFqY41cudxxk9N57eSiGEJRsRAzjiorp6",
  "key25": "4ZKudWL8t71KaULPAKxDQMJqxw85oBDYE75z7sxa84cdQGWZFtgcLtDV3ExCe3GEjxk5ubpakvjV8Tu5GfGPmnpr",
  "key26": "32sDSoSaBJ1JunqdGqh7ncjbXbGabjDtjMGp6hUqANsfm6yD9RxUuFYAR22qsvnJhDzABEoznKrA7zFkCkaaZntQ",
  "key27": "4KzW1psypKhWGyn5Bssw3Vj6sgDYuGJELocCDfsLnAWQkPitZy2AGpyxPGBJnR6dosFacJJ4dwosZ1xFUrZRPdUm",
  "key28": "3egQkmeE6YXTPH5DwXaKkdzUEtYEcT6pLVti3tUEtqtgSe8uYsnjbrBmWZH8DiBJQgvtA8Lw5ti3hn2T7hjwJBxd",
  "key29": "3s4nTsg22912iWPNniEwKYUAsN12vfMjUpQqbDad8SBDmbuykHboXJ6E9MKiViF9KTKsZBGPThrC6jngmVcidc2T",
  "key30": "4PWR6wAnW6EJHTh8tQ4L8QTvpmUMTdaaB1SKRHM1fAt27PE4TbskCVF6sDGdHHSJBLdtvqNxpu6zQVnDbBLMwg34",
  "key31": "T61oXEp9tQ9TptemAybBEcKUC8PLXFKJqJdDqEYTzH4kVakCmH8epKFfAbNGGeB4f7n3s8agXr8aVWwCsFNwCie",
  "key32": "4UPfwFQafHY6Vc7JAkv4Y5mx28ZgwdxyYsYydDL2EpDg7RXxKMCno2qWTArpdfaNAhCAw3Vfqrort7ZfWSjvY1hm",
  "key33": "3rKzvhzh7ue8uW8JhawVXkC4mdJAgZHMakuhsV3ewAJC2ZfNmydB6Seo5ByDLmPe4X3u7iNYRfP2NNaukUXGccxT",
  "key34": "2C2Exuu6zWJbTdvovDVXvXtmKSJp6MNCxgWdP46SzTPUFbRwwrFzGARTWRR7EBqcLTSrsnVrjeV4u6DBtFE3ZTho",
  "key35": "4st72y4VFHeSqdf8pejPzMxZS8MgAB2CaveXA5HWZeMxJXWeoiFjQbkikWya914qrWyjgzSYs4RYYoqcSTXqhPDu",
  "key36": "5xuzLhie6cDxVr32eBkP2oSnpGFS7pLLRGRsGkyqvfmtGcWZKBcRSqoNrbTfmpt2v9kPoU3J5km4iA32KCrfv5Ya",
  "key37": "u5gw8hHLRTWrj33n2sTCk8sMpH18HqqdtTT2LqjsGi9NNjzSuDzE3s4YnhNeDenje4pXe5hTxmhfSBqptei1eMF"
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
