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
    "4BjCvRuuXquvRRbKHJQ3B7mUeJDr3qTqKhgNMj6e6euYoZxoiAhtpYf8rSEsju6UoLA5kA9Vj7z83qcX8PThPWse"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R75ZxynaGj8LgpAw9S79fDMzEfWAUvPRqFQbivsbqBTnbwaStftWi23EHCazvi8ki3AKAMponybxbmnJLJek829",
  "key1": "5bU46uEwFJx7VCuCawgGzh4vq9sbFGeqqZKMYNNmiJmvd2ZZcPTQkskxKGb8anJWjcuU2SkthFuDffYVywVDMiAm",
  "key2": "3V5kF66vWWWS9jkzsoU8n44hPU3eNchJpEvsUHTotMV85Cw9yUMdDr2Pjghq1UvXQpnVaZ6JBokKGXwjMW9cSAR9",
  "key3": "63vfRjLbiHimxgPWRWuhZFQa5vJtCWxMB8ZvMGae5TsGFr4srgeb3XZXJVUvTgsaetcKbX8PdZ3ygtrprEHJquQQ",
  "key4": "gxsXT2T57WBA3dMRkpow6cDhTx24Ed2T6UqTWi2b4pjqdSr4Y5eh8rMPNtUGo3PcCMNtDw7VEMMgV5i2jiNBt7G",
  "key5": "5arJe4hH2GbCQvW1WToodnWwiw2eciEER6UNuVSdKpqhc2985CJtThqJiCuyWvtjWDampgN7jk74vtQ9ypwYweVd",
  "key6": "de2bMTyaLsYUF6jXQMiq9m88huxdSinasjqp1RQYoFH921z89u6FnWMMYpgUrnp2GaQsQDZHk9VoMVxAghh1eXM",
  "key7": "3dtdCxDRVggNx5TyDrFZiZunXQFr7pwv4oMfNxkj9WpXy39utaeQYRF5zmA1gJcScjng2owjkqVheHzRJTQYog97",
  "key8": "J6rgB8Ac6Fxnwkc9ZiAuKYNnR8CGyu4sp4bAfDu3uYFjSpDjFMxTiFfpMZuogK4QqrnCoJYbTmCrYe2r8yAv5HG",
  "key9": "5DFECtgmb1hYMpHb87zFGKj6piymUoAXfoBpfZ3b2twJRevSLGXRCwKKE2AGd2b9isnHK2b3byD2QufXtTXNw6ut",
  "key10": "cuZzDySqobrvMaYGFHjdxMVswwhofuoY1PEhb1fvBjXPaTabFTFYdn37Ksx2NgW32bWz14dmCizBw8Bezrb6PPG",
  "key11": "3xMNLcpygfGHYU1WRwAm7rWzhcebCrJfLXfM8Ct7as45wqebfsviyh9etdMNbWy5gaYVmau3jtHJbmChCLmjaRcM",
  "key12": "2U5xdkhC2MtWCLXa5YQu17Xazuwc2dW6BztvGMraxP6YZQidPBUzCPC5dX8e5zCd27KrhZBgNtuvct3XsnR4ak7k",
  "key13": "57mpyJ6mD35MgbLXNxY5oB7k9CiBMyz5frSyTwj8aXq3MttuYUaZrpJtLDSry8QRdb5EjagvX7c1oRvpRPF8Zbry",
  "key14": "5XY4DD7KzaBu6RCS1iQdZJdnrCR7enwvkHTKCADnofkKhdsLSbZJ7ZWJEGErQU1XNUsLqjRh1uXBC5RztnrQNv5A",
  "key15": "3LM9fS8GT72Ck5dhusG5gtJo3aon7hdvLggpPpgVuhUqggfPZxD41UczmaBNPdkMztZ8hZFYtEHqHUqcRtcLVKsx",
  "key16": "59PzmnnuAXz67ZhLrxt1WXr82wBJMQCkSPxqQuUwDDTFz4dwnPCKKnvPftXLKfzqhHCxWjM2EMuEgVEERqNmne41",
  "key17": "9Shk6pWTs4qbn6ALCLXFNqpw94YxixEzCosgy79NmRUC2AsZuwggGLT9RNgKjDiKMK68nb8F49DQGmgUyVNbBvB",
  "key18": "62A8dwZz7CdAmfBqgcmKqGYTZedK62BrtHo6p6KC4uXYo1Je6KwVxiwrzTVhb1vRvqxDGeMudt9UQMwY1Pi2G9qr",
  "key19": "5kRj5rUNUgGL8xwyGxaaDZp6X5cjMGEVjNuDQLaBES5dQgfMmpMFw9drwTX4q7gphnsnuN1Az749t6KrKb2dPfG8",
  "key20": "2e1jqm2qdrAJkL7ysWsp2ppbsgqJDSx3iyBBgByX23p35r5fkTBLA6MRoNouQdxnzcjjyWZpL6XTMapEbRQDpRkQ",
  "key21": "4ypksFXPXrb4JQgKXuoT8x5smweFHWFYqJZgrcynw9iqcGevP5a3X3j96Y7X2DyhGqCTuFLGEP1YRebKtftwshXo",
  "key22": "5oZn5G8hte7AdDLhMCMvrwqu2JWs6YiUzevbNUwtxEXFWNaXfzQtApC269oUupx82ftygah6PFg1AXkkJS2xW2ci",
  "key23": "5LqeXbNXBSs5ymasnJ98VgVKz2ZnWV5QpF5uhLvze4j2U84CofbpEY27f54XUHJJCotV3egUucGTpFRyb6q4b7po",
  "key24": "3JnebvdNkCBSBigdJCJHYzJQboWvYc3t12WSnPEJkSmK8NHPGw1jfqUiDMyP9WyhU9ZcGgkqNUD96SheEUvkkWhi",
  "key25": "3kKFAbLnCSZsxQrCitLqwCtTDHQPHLMUAjVEiU6qmYUNCsA8HQJwXuSiBMBogW4dFdBfmXqaYyezBRgvSPiZBoSh",
  "key26": "43ATZAZYxrVhrereCkGoFiTEiduvNhDjGx9aUyV4N26rBC7noVQeFN8JvhwoRFWwToCtX1wAVL13cnVYPYamKt1L",
  "key27": "gC6Jm3ftoRYRkCr5sWy6MGmNiJxQDcaATuqf9PyfuJovETG9bH35SMNnfq21jE3eR8cfaw4jSuHQ8s4mbbMeQ9s",
  "key28": "y7PK2d9oqjM3kUp4SQgd4tcF5gQ1xTjj9T4cGvbZ4NtVunSRBMgpKhwBtJk5JgQwFG8EZVaj8nmYEKXuoLeeUQQ",
  "key29": "5nJTi1aACeCcLsQJx5jbniCasWCrCPpqxNECoiMk3RmNPF4h7pbdpJRjT6joanBLcLmYFx4dqD7BCb1wFgnRpASf",
  "key30": "iG2PxCbcjhhGWqRgb3bSF6wZBydrbbs3FoktA4XZDK1SGv7HFQ5ved7GhygvvpMkD8FEgCh7gqkXkyJrQAUDzUb",
  "key31": "56UZQEnLZvhtpNwiWKT6BYXzMqovn5zgaoVKjr36EE5umPuD4K4PBiUwS5KXPnoQ78sDSohu83NW8WJ2Vr1a4myJ",
  "key32": "29uyTUYJgNhbbhJ2ufj26NboFpk75J22aM4JnxN1DEEbionjcNJNMSjuWthzWTHov8fHYqDtMATpDUTZb78BdPAA",
  "key33": "4riTJZKgyHedjvipKgJYFuzAUgkTtfoKXdK19fMaJaPiseyKKsRLMsPewRMipHgKEmmghRNEi1s4kxcLy4CNy1E5",
  "key34": "3KRXUhSk17PBDqoVR1BrsuHgL9oksPjsNeeMaU4TV9F53YjcdZPyQB68X1qE52ftwEn4HXsdU3RoKgEhrvZBXohH",
  "key35": "28QdPRzMn85siG2cgfAjru9PDEYazRZaffEpuMdr6cnzpTpetoi2JQd3551uPU1NJPVWtfn15typVRXmLC7HakJD",
  "key36": "J2qV2ygMWw3GvYSL2DbtPyBMbpsi5Vv39pd82D7MH1qe9ukjHmpRcVqMQNpBjxMtxv7XuwHbK7VgV47g6FVcP1D",
  "key37": "5vBCo9PdKkLzxDnA6kH6nNcoW8Ezphh3LSRsEvtkEh6fvvPp735bnknmBTJu7GQPKwwBPVseMK1xQPhyqMWEGhR",
  "key38": "2nwyWxEtnCqpLJqKmfGAwb4nu4kHbxGK1xPVM5F2nztNgqMmPCCApunZA9cnAZTNiAZaoRuEXnvCDfywgCsZCBAg",
  "key39": "2DE4Ch6TXweUy6z85jZzQSJbTCBabmWTWpVC9Bs3g99Javw4tA7h98WN4shFNjkn9H1pMsHzVEKP6zzwbsspi5zg",
  "key40": "4GLA34ZR8hRKvooWuipryaoojWWPezwEYhW6eXoRJTu9wBYMEZSDPZrGVe7JLeMDRtbwJf2EjsF4c6AWqUEkVsWc",
  "key41": "4puKZ38QcgtRPY77A66rRp2A4ZQJyCtEKrvTfo5jrKmZLoTvuj9nFRf14WrLepJ3eGesCu9KMwvA8Cgp5EpddSf1"
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
