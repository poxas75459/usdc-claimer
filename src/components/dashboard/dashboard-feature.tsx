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
    "XLYwLmSUJGwgUjQ2igdLMPHmZWJHTjXnyzW4XYhnqU5uDMqGKyu55zDjx5hhKPvEBZyyzJgbbANPRg2fwx8qcNm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B1Ukng9zw5QwaJvGxxLA5E4SkiZC86zwGEfg97wZ4ZGc3ouhiy3XRrfjWfcAYPkLprTvvDtacMJ8chmYhuh3MRg",
  "key1": "2aMKmzy8Kyyjggxr8sppZB1LqVmwnEzFaZKLsSEMPuBWWf4rz7JqhqY4oRQ8S2WrXgpieQMNocSLMhaafJUJBSP5",
  "key2": "5dEbmDES5Vjy9s9HMSqziqL9YQVRi7L8mogpYutXeSbuh24aoxRWtPtqiqPqEdrM3TpCvb5vQz4Jpk3JruJN9aD",
  "key3": "4h9MVzisWQ9zkacF9fXbABWjNmPfxd6NmyBmYzNktCTUThNhbp2syag7r1EYFTU5SDTi89aiDfnhapt1H13p3sLM",
  "key4": "38JSruJCKD6wnK8goNRVw1SxZprANqbutLnD7pHi5hwBkxfWt62ZtoSocbeavy4bm7UHyYS4wvQtVQWZnctChEeZ",
  "key5": "3pDwmHrKVqi3r8qY6rGGcHteeY5TAhusviYopndsohcHXonMwBgG2zwEPhLt5rGA9ctUtfxfsDU8VtU4jgs7R6as",
  "key6": "nX99mNsbKrsd7TcnLwYmuk6hSDAEV8wPuPGtXRaPPtWo4tmS5jrEUxMwkTbr4QGns6YveeaQcaF7s3TDaktXtN1",
  "key7": "3kVcMWjj97H8a5d5JLDxijreCZb8uu3y8oob9mhtGwoWZ4VVexZ3in7QZebJfM4HH677AELLENykq1bAhQwenSrn",
  "key8": "47bABjcDCAyDDTYP6Nr5s6L3k9Apw36RjJQTuuzkdTxo48NhStoYnsfx2xj5C8pd2qpY9sKAxpB6EJadCZNca8by",
  "key9": "2WDQwhQxwDDNFJBoaeyyw7UXuhgzPLT46D5wNKznQF3F14rRb2n5XNBmwYBYJ7y27S1JinjDsNRkw5gvDHRpZaaE",
  "key10": "4XXsDkWuxc3dPNg4fCYUSwWmJqKPWb58unxNAeJr8hDqEwwGY6mjynEpPs8ib3yU6wZNqwZwTENY71LMiiVdYN1a",
  "key11": "4P2uVFhce8Zv2wTx9jS3gm9LpiFazrJFrGxKtmD9u9Tf3HNR9Lsidx5U5pfn1bkjTMaii8GDNmaURT8qucC9FYTW",
  "key12": "4kofwpboQXkc7re7GWa1jSns2Kun8XqBKFC3fuRtCHwCQZfFq45SAGmicQzwZotYTQPuGNFL3epYYH2jLfLb4r3U",
  "key13": "36z48V3LdsXkyGk7BxSVRXQk4tuG2SHwCx54XY6C2fWCtR4E2AGL633x9UCG5aMXeVPUQiiucpuHrnT1r3HJjdKV",
  "key14": "3tXYnLqy2dy5vd2UsvsZdeC7AzBp2kT5Btu8QJHzFDpGgy77WDb8tNxVKjqPSzA9b4jBtU1v6hbPNVN7RDoQYBeg",
  "key15": "34gRBT95JjbHBBZZpZUefN2vkPftP6TxjbYPt29gMn9oyyJDwCspkJHEccu8B9QWcRfWa1fY1rRq1D1uv8BsusQp",
  "key16": "5HYT3mmR7TdacNfXcghKWccCNsa3khRJGK6QaBNJ6EKqDaMg7NCe9A6UHDctSLMpegtjKHZ2YhLDvTZsr2me1U7y",
  "key17": "nL7uSssS4u9236Gby75np8mZeWEJSaJJGHc58vwKHLTLJ3W8Mvr6GB635fxBWRyUtdMGFZwoUJLwo33MStgsK9s",
  "key18": "cUDZ7dVreM863jhn7zvhqjPqHAtHAWTsiHYJYjPU41MUGcfwcgka2wpSXzVwDg22N1adNbTLuPnx5h5vYLeeRxK",
  "key19": "7k1Txe8fSqyEueqBR9K5oMSy9ddkmY5UDsZ6wa35o21yDVJvmWYYnKDZxqwW4dN2K8BmBvNZ3HishFnfGGUSqNU",
  "key20": "2HE9cUBMM56sobx7QJQwXKjDjZMdUJuaAtYM25i1kgkVWssw4F74tKZAfEQLJjH78EU1kYuTu7RRtjDcy9XBT4Cf",
  "key21": "2S5NzExeiKTXLkWXA2TDxP3mbKdYWqeiJeVy1AadvcGVrappezV91xWKw7nxjmpQtGsDMFs6x1ZSJakevJaGXoUN",
  "key22": "4s5J2Y4ryzNUZGAedmszoAn2N2VQ4Xgm4QahVbo8NLGNUma6oKHLjoF2QEtiJM4WYEMa2EuppAwt8PfWT89FZMcB",
  "key23": "3NFFfDNoyD1ijLgd2s4GqtTVFGW9otLHy8ZjCLT3PmANJA4uUVfva4aL3S3pPG4g7u8zz3Gnv7qeyG1UjC1P5XqT",
  "key24": "3yqtd4fLDLigkoCrAutpXa3woxK1AewLQN6PhCuANn1iB4fRS5EjW1jyE2ymn9R9WUGe8pfXgZhd2EbXx25GpNFg",
  "key25": "2RsiBwrVKyxYJ1VjbmYYiGTJJMzPfb18baFNx8PTXS4cApWPH9dcyYniEWXpV1jXS3zVw1mbbLH97XvMZsDxDAny",
  "key26": "3cpKidx9p3VXAvAPbKZwGcc4RATsjF5FVmLWKMaBqPnzT67YmSM3xqYJyGDRCxmivTLg6k3jWZ37gEArw7DVLowd",
  "key27": "dYZR7HhB7G3DRF76ta633qRfSzL9YZRDbMhbNQ8ESwtc9fSBsXYjioZFFLQxiF7VeL4VBgCcAcikgzyei56zy7v",
  "key28": "2zZDySZz3kuZAr3p8uQ7oJJmVVNm4fB8SBXYWq9VyZQePfGSC7B16kgVf7QDuHU7iERyoZa9aqEMagNEm1WAc4Aw",
  "key29": "4os64ysqoowv1acMrU5HQfUBu4pRc8h3bpo5RWr46AAXiautKfaWhUnbb4pKGY9Tx864TukNXVC4JyxCb2fyJWwB",
  "key30": "3Hm2S5Et1nfdYwKjcUDS3nYzDyNCHqT8tEQfapmCZji1XkGFQxV3zLPjpBQwZfoyosbizQAcdNKyXjwYmoeyKLJ3",
  "key31": "5zYHqataoocx4nFKej1P1dUTh3rsetuGkQtGYaamWs2Vv6aF8q9gtPnvNzKNx8NXGgScWZ5XoLhjeMq7z9Bwh1ik",
  "key32": "5xkZmcPFPd7QcDGN5yTJPfwku46vQuQya7bC3CE4b6yZTmHjMEoPAdGtci5LxRcuDp42Wshg3puabKQYXX4it6T9",
  "key33": "3oXpjTsMPSnY1Jk2sG4dWiqE7U59uBqXaNcS6SA2pikqUudwCc32dRkbkr4WY6duqUBU1rUu6Rz8HB49YGX9ZLPW",
  "key34": "3QDEQR4EeDEckKAiTtkcubsZWFTihS9mAAJpwHS4ncnoa18TdLckCD1d4ntBSGaPQAHxJs26fACQMuArGmq2kWqT",
  "key35": "614GQmWox1EXkC95tFJfRNzgb4ftwGNZHTZepejJXvGTCXu75EfPH8Wsrdv8tC5jiFbQ6LTi8YXrQLRDZ3SyL62V",
  "key36": "5Mrr2LzKwFHo6PVSjmYBNL6aKefwrXdJHhmXmHykxwavaXPwdyk8TtdpF8PqjTsWQVokmqEv9NDKHkWvyBag8fLW",
  "key37": "2g3Qm16eSen11XWST2Ndpr45q9PqJ4kAMTf4EW6S1LrGWiE41hPfaycq5UN9vznFkB131EEzGxJApJpvRZCYGohr"
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
