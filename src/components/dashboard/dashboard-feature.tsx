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
    "3kB5qzctqHTCrBKAtLsguXaY4aNVQucEJAJLdf4KT793wXpXb2RmBoPTFWmpE3owT9FKBavw65u3ZtfaGzgJbXmL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VG4CfKsUhaJuVpPzQvs5Cwqa7wsmneva3V6Pwyxa3rMAJt1hrK4UED3kgNYxDbc6KSD4azAWwnbfF6BMgo9Smdj",
  "key1": "2UYypDjAK6bas7cx9MrAj2nbpJQXk1YqYafotf6p5zbxjAsEXzWtRPHS9Tuz9yjB6qBfXNwzEfet7qQTVS4vvZh8",
  "key2": "26CBD57eE12KQftmhaLYm3ZRRooAqVwMuA3RmwdRaXWxYpMKPUNSKjhJfPqxqpFEPxxMbv7q4zQXcWj9uNe3fRsb",
  "key3": "655qBLHffFUd3hYg7sG3PZLLz7MnYbFH3EneA9J8iL1x7o3EXBCuMM9uUHYwHSCsUDap42EV1UY8Z1z59n9PmLHF",
  "key4": "67EDWHKGaAWBjL1E7ipHJXkVZesrB9gtxYVywTE5HYaxijkB21EuGQ5xdFsTYtnBPfBbCGbcc96p1RMDt7tYK221",
  "key5": "51uXqvFXceJTXafJeTGqrgz7mRqC4rFbpK6aWWVA5kmEAwnAkKkCoj6GJxVCjt5DuCTvfzL1AazrExaZK3BDfYSe",
  "key6": "3nS52GcShLUZrmYpiZh34ZB7Whpg9xHZ5FKDY8ADX5HF3YhjsVGgDs8Y7JQSidwCf5ry61KqxyHDjuTRrM3virY8",
  "key7": "39VSExhxvNkY9LahKDwWDktgFAYCMKXGszRfwsAtEYoJZa1QTUYGNWRVcGUDCDhyiNLEQxRmrV1rtKLJFoqNx7sR",
  "key8": "XLMVUUa756FDq2PiTKUqM9zFgxg2CBAg1C4fz3SzfejSz1Ji1S9viJNGvd1d6GAfUvQSfv2iYiH6rVLAiFUcEaM",
  "key9": "5qZFCgKWPRUFH4evruYPefaykW1SfYQH7sXmGx2kWJd5VeKYQiSX7HwPS775K84oY1irfzpHr1GKwzASbrrCDQft",
  "key10": "3LXD5oHNgVn4FvGwPwEDGpMiawH6yqsXyiYE4PvHcU5h6Qc4kWkiU4A7zEAEFDGMQnMyVS1ZdPFzRNrtuGfsFzJc",
  "key11": "5zvH93LD5a7u3XmmnHoVZyqa9ak4hCcKCgUMPRY2fabhNbDD54BSkQAdk1dC8wWjgbZG99jVEoCvGsPWf56BedYP",
  "key12": "3M38fHXc3iNjc9rywSwMH2c4ZvYVAuvm3aqVWeSB2Yzry2DB3RryijAejP8EWYTZihAkm3q8Afac3iu9tmdGTmEy",
  "key13": "gsZ8JHpHqtDDVYDf9fc9Y8nX29F643GFSYMf8PhXS6TC9xisY7mKBPoi2Qbvwdpx2RBKwwSQvx8auVTpmVuCsWE",
  "key14": "5FgzppEdazUwejzkHgKnGLNbEdqDnZZm6ubzHu39NrydbZW4PwnrFXbAKa3hJA3F8w62fDiG8T9HWny5rYnNTBC4",
  "key15": "5G5N7H54NwTzbH4RMMst2Xve3jZs3ZJQfSHCDgC91N3EffpXNpkSThTQoD2NcCetbtN8s2tm1nHFHTCEJdZDEC3a",
  "key16": "2GYX2n4tRnLvZ6KwyAoKe6jKcYyUipD36Axe2bMZ4uVzChmq4ReSbXMz7hMg1DDnXyRPYbtqi1Y3wjgzhiDkNEMf",
  "key17": "4MY5vgErLnu9kY5M6BTe4AL8PVQVFsRvevwZJFe5oFbTj4nqAZZYU9HzWvigzmMSinJtzAxTfSHWLxrvw8i7A88L",
  "key18": "rV25uzDVzRceXu3oug7Vh9ScxXwhB1ibVGevvx5LqUGkmGe2uR5kc5AcbmmjAnMx7QJvKdfqQfzcLMh14ntyeSR",
  "key19": "E6PhJTzAjcPWRfBP8Rd9t7xBzQm7QLm7cSS2h6VNagBoUZFQTiTqQRiKASPccc6worerYaDScuHBhfev6Nuteae",
  "key20": "facEyZuRXZzXYFajr9EhdVLFZpDRHjv9n4d5nAUfs7gwhUPQiJQff2hFYdyQyorG1g6PakaN8gvYsmPsxQcvnPc",
  "key21": "2Ajsi2RJ3UVrXssaGasKTjKfc5BS6NA6yZNNRbAsNG9DTCgY11KhP8dUH3UgLPr3DJrjkszAxxEygCJTgZ945FXk",
  "key22": "31gDD5wcnQCH3WKfBDEv8SUtKgfXk1zSMPECwYmx7U7ZjEZPQPVbSFMq7hx3yX4JU7V5qUQeFR31ftjwTjfMQ8c5",
  "key23": "23Fzgx59HweKWfA66jG6i31MU91jYFiYLoM1VeGSRXAWcBUbh8pw56KpG36ixRTmi3gxPxwV9irNjPTKqGyJfuCr",
  "key24": "4ZnvFGj7PyQvgcuKhKc8Vr9dXGocmwrb5E8HVBsASnCU4UfPpJW4J7DmVzR3Kpdq25YjP8fqjT6KAU1QdvYMxwaL",
  "key25": "2QBLt5SCRrrkLFSreMfeDT4BW4WYVqSVr2k3GXUdXit6NSB2GFWt91FkqN8mtM2zMmxCsg9j9NkVFarRWZFBxtMn",
  "key26": "CF11HbqxnAF5p83gZWfQQCw9gjFDrgLUASypZEV8YxjwVdpFEvPtukPdZyvauKsvWhe9anXpeoyErXzvVGXUriF",
  "key27": "3tuscshtdrRcnzdyQ2jseLyBYzKUFnfxkWjML7tbZa6VinH7RyDRgr6qUjhnFt3ihDVYMrqABigaM32Dzy2fJwF2",
  "key28": "7NrdEoeJkyie8eGFYJLRFqErRfd9a3ztvZ5sgn2hH49vwaKdeYL3r3uo3DWnWcN5hDXn3oL6r3uaks87H8pY114",
  "key29": "4JDmf7V9RDhuRnax12HyzCPJpBUHkGcLrxo9MFoww5iyDtHzthkpXAXuXQBHdw98RAwBnN6cgnq3LF87r8EKnA5o",
  "key30": "248uRHG5wkn1WGpM8FoVsuZ9ds5zk1GkvDtFVq1zSkSzYCjUSZHXx4yDYbdw7HdJbTAZbs1M7v3BiPsFUqGEnQQg",
  "key31": "2Nww82ZKRujXmaMU6hKU4Bqcg8S8H3oWe1RAMMYELuQ1fQKbG9T3XRUsz1xfWgcgrsnnVTBehBjFHH3TrMy1D6np",
  "key32": "3nMAKZYe1qq1dX9bKPJHQ9H13ofDaqAw8Nqs2Dwr2aemhZyaPvmnCGEt9TYsdoyaCPt36SzLghSTcp4FeSqtiyHQ",
  "key33": "2LZAmEjuN8wKmsNkKvqEuQbHTZJQfSN2AryrAcZeSNbrpjxAH6DeB9dW8AUtapAXxKdRyWmQUJLKjBFdyj4xYC1E",
  "key34": "4gcMW87FDZTYdGEHiq7nWTuKzeSxFVrLRkeZSwnjaq3PKdEXMRt2BvjmcYS544ZuGDUKLYNCMqpuxUne58TXV3zD",
  "key35": "3vx2BMMvnRx3MAuhmNhNLXrBUvpmcFExvifPvyAbCRfodDZoejxRddyRqj4FsrJt7XBpCknDaqicgFtFTTWRikVy",
  "key36": "2pgGSgwN9vPS5FNhasKRhDF1vvmYHZg7VxK9wvAAXrqCVjdCNa943yjyArrGRpeadqgFj1m3jC7QVM6GpSYXDLEK",
  "key37": "5RAG4BegWoRZkPjvuodFuBR3KHS8XcB62Psd1ZzTVc8GvnnWZEMkrum124Z9Yjeu1QNhKKix69QzNqg81KcXAJhg",
  "key38": "2ceU9Kb6DkxCoKth61ZyQqgTbnQncEkPBuPZCLzpCsGrt31LM19mg1ti2sCVWa5nAkMetKTY9EYyiDUF46yrrEHR",
  "key39": "McZhw4rVYL3PHMj2Br9LroZuomUcTkjp5CNqHKZMDEngjaKFpDvt21He1UQcKhfxZc71qu1tSQkTJa23qV7znQ9",
  "key40": "EqPo9fh5nTYbf6CRiSggS1rsTwQXddW94WTo4cqzWwG8w9dngTddro8dDpoyHpm1WHXdczS7uNWhm76dz6rBRYF",
  "key41": "5GdfdMZ6Kygi3hDKiuToXE7xEA1EtoP4JCd4CJzNBzKGJUiXa4UoeNALnZe8c1xc8DHs3QPgE9wXjoEuccQWgxj4",
  "key42": "22HU8u1xTFVaW7vo1iw3Z1xgwsLFDgJVzKbWLgo1PFv3y8VA13zvZKPQ9SiF6GAw3YKyJvC7KTTu5Wt84F2mbjMr",
  "key43": "2ZkiL2v8JqxBxpvZ1t7L84gpXeXqWWmgR77sxBKRw17De28PbFSwKioqcKdqtXnR6Qn5JTDjLy3JShzUUx39vwZN",
  "key44": "2bEBYNk4Xv8ATkg5Rs5bfv6b19QbyWvG55wCu5e9zgpbbiP5EzMvEqxmzfnE3FZAVChntZLNit3NaKuDs7YWFnyh",
  "key45": "27yyQshxjoWWJ79S6rTsaCCHMx7dUffPqhfBE2kT7jLjwS5SKKjBorZ38Xz1ts9nLwMx98uLN7Y1jkH1hGKXUMJH",
  "key46": "3Znhqhy8G5SSa8XJtT8JQnmDnM5ihiBb1wYtTKM5699UkRAaFVSipg9NKFqTfYJzCyxVNpZ6HxpxoiE2qFKtLMEN"
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
