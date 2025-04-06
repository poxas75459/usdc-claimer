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
    "5VnsZwtdyDAYvmmSPyJuSgzHXctHtJu3PPuNSrGns4THwgFsMJqkhHhf7zY9bwMfafjScVDSLviqgNa9bSpvjEod"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mwvSvkNt1b9nEQrG3QrS87ZQwzq1wYMAU1yPUobLePCfgvB4e8QEmgJD8mSjT6RwNZLm6FoyhrS769zVDozdruV",
  "key1": "5Lx1nK9FJ8Emnmk81bwvESpefg4LRxfgD9BpNWztZ8eKZnGGHvRV2HHg3HcNRiLK8nyUw9o5RmpV8cqdsBfL2SYM",
  "key2": "35fTpzoLirBN8gximLWYYdU4eLSFAmdPeak4UW5uaUJeoxGuKYK3ZCFM7KBG83eUY1xzQsnjLtX8xgz6ynbuSKvD",
  "key3": "3xJWjxs8tpVntZCL396qjBuA3w7bUT36J3VaMMqDLe1iaxwxUZo3MHrb6KEC32uiTDQzq6mrYmZ1E4742wsBGshX",
  "key4": "4HbMKC7GAarRPwKADdk4L7nWRMmVAdur8i46YfzMupeFYirvWWf5pw1bJL9bczvc2jJp54nRykwiwjrPpz6e91YA",
  "key5": "3chKgEALPASJ81886JoXDjSmHZsW743f6raXhUkghY7tjgZHMfCvRmwMLPffcmaiSRKEFdQ8qDEGFvNtfi33rJzE",
  "key6": "2yxmE2sNdzPU1izEHrwZzDFX4ae9aMwLUu23GDrrezFehoZKqJC464hRfmcVvVrX2CQhZSQRDvuboYMFujWKgLsx",
  "key7": "65wT32Z1sA83Qa7RL8sPu59Ft6ChcHoc7Ecy28QfQtMYR2qqYbFEVxLHpACUDCgwtXZRkd2gVqTQhr9wZVvRQfbh",
  "key8": "17c4bgffNTnmqK2g2tFobXfrYFt3WqjaJe2qhHqEGCRKWtn5DFC9QT8qkKrxBtwbGVAWpF2CthMNX9A7u192WG1",
  "key9": "5NBPMZh5j2W6QEA2qFhZbsiyz71cniq5H7KhFcr47pao4Xm2AoeiwZ7eJP7zudGii9xknFmaTK1MciHcRKciFoUz",
  "key10": "34HpTkviYAbYT2BVnyHPpYY1ZQYYhUHzoAqn2nk3QGBrk4WM9oLguKkv4tq1vJML2jxYwGatxmbThdXidX9MySqs",
  "key11": "2ZvVzXRtxGDgiwoP7cXU4xSA3wxSg1AzsaHNgwF1Naq5k3wXHyfhjKjg6F3goH4d9FDDEeprAUeDeYz3yxfv1XeF",
  "key12": "5SXPcpTxGEtgC1Xi6R9sSw965hj5uR169n7oJWh3z2iSVQ17NSs48QJbxs1LCyMg7NHeZhc65xCU5wZHp87uLDA2",
  "key13": "3YstRqurEWDkfK9x7sqEDo1YK3Yhe2YdVV4YeR7ByNhAyuYTvqrp9Y86Jo6JvsmmkFLNaZEdDBYfD6PxBNzTQpeE",
  "key14": "39evsJSMYM1uyFXhUgGx7jcawZyWVbFyzhJc9k7mAAaapNY8v74CazRbDMqESwhBpQHkEGKRqtLUhzv7eQyeRWiC",
  "key15": "3d3o3vUPBNuCRZ6BKDrwQgXSmQvc9xXKWg2YJ9Yf2oWpsjZ11DApMpFyMw1YA2NjE4G73vxY32V5gEpyYWosjaPe",
  "key16": "4zmsdGTs6m4UGSrybN6c1Dn4A6tnezwJ8BJar6Bfzx1TC5dvgn8gAtExKkms26jZy3jnbS5193jh9soWneXnu3pj",
  "key17": "4TrCLCe9PF1YS6cdH1NYsyVPVyUfR7hbkzzzaijdLX28nhUu6ykDhN6h7LCeruLSzK3SvHiExrmHniniVdj86WJp",
  "key18": "3pP6JKPU5sXCFmVW3MuzfKNVPCaYuZxDwoYF42Kz2uujpuzU8XsxA3bKv5GCp539gYpV14c5ZcyxVzbcd3Vdot7d",
  "key19": "48MmzJWSKGgznK4k3CaP2rAYtTHy3TrkCnQBsyUmYCGmnESpCwie4rLLYpzK3YQ5aVW7oRw3dtfmdNQZCvhvHxnK",
  "key20": "vvoMX7hxswsmTUMr1LHGizcJviBPXXsgsTfefNCVKKCjmpUB9TcAZpEDnhbR8o5Ct57Matj1wDeD9fx3FQRTgQ1",
  "key21": "57ZPFUAsaRGqpSqzLFWrmcaAbrrFgEvrNHtUNnzCfELQCoUgJZmVVZ4CbbCZQziSNxM8EgECtCHvGPET5kKidW8e",
  "key22": "5CENxVo3zYY5WNLS9iY74tDyjNSGM1FPY8TMR4V8JzUZaEjPzoN1UNfLeyd1Ta3hVUfdfc5U5MkHiPj2wkbLkFpL",
  "key23": "3DanRDgvu7DdMPwNp6qGcsEqQ8N1KSrC9ycBM5ZBCMaLUnYd9BQfTKfvcqj3mFySppFkXhai7d3bgTLAHVhruUWF",
  "key24": "36M6eAqDsDQghWsQ6GpY87yDSPzBJvq2SsqaApnipuQZvGFGAo9Wc1DiYceesnewhpf5WUNhqL9bkZ1jKbYbwsgR",
  "key25": "41V1iAyTmP3QfHPEtGnpzZgu8qbxHF9nHS6DhZohXksDaZ6Z13UYdacQMyy5oeT3V8L2j3PyPYPwzJ1C89aDPg7b",
  "key26": "W8HJQ9a363aC3FExL8CFE7rUKthtB3RaaJxY3xthqFV4nLHDFfjFaXnvuMrDaQzJbwkt7o5DtPUm8mQZmSt55Zu",
  "key27": "4NwvWd8BGHNvq6QP7Hsq2vFxpzY9UmaYea6atJR6SBa3oHZkMSDTMvR9oiA2z9b3WJdPfsjyfTYLWKLtzwHnLWzE",
  "key28": "3EWFtbAtfEwswHfc7yzEMSnSyRhb3CKbTGjDotfKuKW7rni6GWXb61DGnEnQD8pjYx8wT2iN6DegnG7VjuyNHjkb",
  "key29": "g3RQPmCGSrbWFPnPqrAWZU32VeUdESFD3a6aoN43nqB6EPjz9AHnPXfc6iYnYkAFGiECz2eUoa5BRQajLmovKHw",
  "key30": "2S9RqsWEAuEGkoVpe6dryzkRfDgk2oKz3meTRXPXvs3wBYTYUyJW3AQCdWaRGx3tb9HxRnGRCbuWMmTtcn8eiYkb",
  "key31": "d4KB9bQzUhFkDKrbhQAw2RMg6GkaErz1WLFqP5zAkwQG9rbqEgfddLpZK2VJe7UanAfAPeXFZr3fUhXGi9FQiof",
  "key32": "sHGxymh2fCptmfGjZm8grYJWu3GqDbAQP27MXAVoNNp3b8Ejn8Jy5NyMLuBSbWURGZuXHq1Ao9uQksiKbrCUcFF",
  "key33": "32AqRHx9acpMyAAHPz7FRGhfSQt9FvKABGuGm79BVMYHBxpyhaiXdE8WUjnaBN674ajSGKsv4ePdAf5Piqhp5se1",
  "key34": "3N8Z16JdQDAGoKQE72nNpZyiXNv7kJsKEmjaZe5vxoDNm295yTt2PQaCf8H6FLWSUP9YqTyJWteXedgmqiwfGEkM",
  "key35": "2VeHBgtHPxuxRvj4hXGU43BMBrCPKgXiCmjqLZjsoxXkUpL2aUBThsTdon4Tbdrnrp5ckHjwJG9V4mgKBkx4mHgw",
  "key36": "nxf3ZMiv5Cc8c1MiJjFgkBAdcAS7xjCaT2bjJby9NeDJmM2gRcWQb2gJfGjKHxcZVokTDhYSDeaxqDEgDjenko8",
  "key37": "DMneG8QHPgky7gwzviJqnmPEXq633d33R9BqP7YPXfjofQ4g3fuytajQNCN5zexws7ytC4JC5pDHjwifbsaGra4",
  "key38": "5G4WNut6tu8tSLqA86ewDaD7djSbGCUCVy65eUAr95KRPU2RwEcBPPbBKuViMrAHvY3cXsDgGCTBdKtTEuWXAG5V",
  "key39": "5i7iCrcXvbBUmcGY4CnQcLnf9CjJsVZeSMKVpK6BfMQwYdnNFQwW8trWTGQXv75xpHqHSsucH8k8iYpTX6HomWDh"
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
