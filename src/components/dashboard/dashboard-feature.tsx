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
    "4bhkZpuMWFpDQfDs66jiLcuF9nWY9opTvPAW4bN2r5WYKMTvwkq9gbKrcvykR8R8Tfb5qtqmnKAt2sHKPZd1u12k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KKWZvbTteDEDoHG76iQJXFD7SVZVjySeBWaC6LQb1nso1EtLir9BoW3UtpfPfkFX1vQGWpJw1ugPVxPHS2QPzE1",
  "key1": "3d6JFe2AQkCPZmYR4f2JFERWvyNTkK3cKRNC3zXCCQLR88zZvtXSehK96NxPPkWsRYdUN59JVv7QMhbJtWbB6cH7",
  "key2": "2Mv3tvJtS4PCL2qfcAj3uorqCuuXDpSmmgpHdskQe6az51e6h7P9SEK9da99EFoR2cL8UXBSu2S2s8Et58qbTbbt",
  "key3": "eqSVm2FEcUZGUryK6JdUpe4B4ZZUfz4aZJsR2jz9JVsHbr7UBMgPyn3L3i55yThCGfHhXB4S8qoXKYuFVFUTDgB",
  "key4": "zN6vMBpRC24c3zae3AiV8snjuVYecHc71SjWevodTWrbY3TGwKf6U58rBaJD611mHpm1DaLwUmWGZTAWEiDK3Hn",
  "key5": "rinJxC6eKNdevraERs9VQ32cVssxAjYttsgJngmUVKmNvEQVe7XAAKvBC5rLoNjZvMDBk4wEh436o8GkPXhNkWQ",
  "key6": "4sCPFqfad6xxooPT74tj7UqCDb4iGZD6C9Fib9Y2EENeXLQHr2tTZa7XBfeKRUx9gYyFvcFs9Qg7SfjD3U4CMJ6u",
  "key7": "5z4qFPbxpkic8GNb1hiR1sp5TA71YHmN88n2oT2zTi4w1TgaAAAXnGSSnfxcZeXUPLSWpxiQLhJHLRQ9rv5Rwbs",
  "key8": "5BpvkucdX7gdM7MgvgmcbKy2FfVC6WQtLUd9mt2WpvE6KY1fFsx2a7rZekWZc1ueLipU6at7Ko82SbivysMuUWPG",
  "key9": "53oFQcJbeZHMarou9RkZPGKRGvqGnHV1MBNCZnLg8jn4NVaH9hdbNRBQ36haehsVu2E3YfxZybfMKFufBno6Wm7p",
  "key10": "4bwYwjopZzMV9fk1tuRYvugFrp4ocBi7WMj63dPhQQhow5ThWvqfveuHkq5esX9kQxpddzAxrDeciSGJaP9b2taV",
  "key11": "5xqmJnzi2dx5biyNA2aU1hYrD7SbGKeoFbaX9zD5ogR7yG1QdvJmU23j5WYqd6hE3yH6drFisFhCPQcahtxvmvPg",
  "key12": "4fMeg4DLLRzQBAnyhSgQKpB5EyCHbpLMon7E53YxFMmxZxjsC88FyTgFn15ENX5ZviPmL1NsxSuJ1XZDbWaiNacF",
  "key13": "3maabb2Q8wXVPz5ywseeuHutYaYMT85ZkfAQVo8jY1ckfP6uKLFD5g9YkcZZkyxR8e6ZBqfxnAk89Z4XbQrKP8ZZ",
  "key14": "39mNn7wgR4gSWj2XY9U2mxDo2cmF5dmzjdpHYHHLAkCJ6DCCLMpuAVNm7VUp4UtXnCnNVsNbGFXsUG1qFj8LnF5V",
  "key15": "k4qXtDJUSscPYNyBkqbq3XdDcpYGHiarAazx9FSjvu3csjRypBzKh7y9jzVaNTsLB55hW715pmpc7JePYQ5pvqh",
  "key16": "43DMBi3pxmupHe8e7qVx6drsLo65TBfM4ufL5Ka3j3kDGV1qfqYxBbYV1bCmDVnZUdR9QiCsJM59ZqeoxwMmek7e",
  "key17": "4FKudSYNxiyXWjihTVT3LpK17vpDBDb8f6gcmhcwzawazppJCT8xCXptwCa2uccYveQyHtykJaBH1gMcQZMUWHRo",
  "key18": "d5nAazo3SWnw7zgHS7AyHeedQGNKZ11bPzR4wRDvsRan9dTWn4hU3Pt3MY7MHwKZpdZjzsPB8FEXcKaNWpXHVSb",
  "key19": "4KaSLSiL6bfrCrVBsQfSCVcmk3bBycWg8UQ8EoQZWs8rbjmVp24oejjFmpCw8humY8tHTTfvoxVeBEMvyNb4UzxK",
  "key20": "3dGtWaavdKs66FKyKvundnDpMhmZTTpvgs9z3Pt3L5NHYXEderbWTUNpjEtk1W8RioD28psW6ksUcgYHqkiKJfvP",
  "key21": "SseQtoZLPhgf4tL8UEnv5otnT9W2Q6GhnUtBhS4BAdcjc6VzNR7cDrswU3aWqwh1EX9RtM3SS6bS2LKxkHLpPVh",
  "key22": "4wRgUHgsnRbT6BeJp7YoSoLcAJw6yymJGjZhidyTpyR1euCLJ1wmtAT9MuJoXDtnaCz6CT8bG6J44SvCRix7SVaF",
  "key23": "4WzTo83YZpVgZf4CJb7LFJwoCVauzwxZJYvd9xpKKm3vzYWoyudaSsv9M6qBtgHYt137ydVNar4fCB8NqJrsS6GM",
  "key24": "5HJQcVdrNJfxMppW59pZcqmfiaJfhsUgKwc3rLk3fkByzTSQY3TXL5cueBm1zbyvdJprTfrZXs4dpBz8Nxx3kLtt",
  "key25": "92BbZ37kPx4RjCaKoqda2PBfRVAeY4Hw9cHYSURNxuZp5wMbp8SHmgjpWnbfzAcwLMdUmfwnVGcRrQm6wP7JZ2F",
  "key26": "5pRT4e18uhXEJQUgubjc7eFqdXqHSZbW44aG29zSkKVypxKj18BQfvz9xWza5inoRH4xSArPRUk8tKtgDPAF9jJk",
  "key27": "TwUHRr4rEckingj6tyGuKpe74E2dbXb37MdnHbH681tpR1aaF2GAK8reXaB7mwxCiN44BTspfsoUR793SLnNsbM",
  "key28": "3E5MhubsVrnqnNzw7BfZuMsNs3sefSWdeeLptRoevRziBYkXZi5YRWDm8cmx5kLea1Fka4Eok7drKKJJv795ABYn",
  "key29": "3bk93DNU28uoYNTpkGJvQ892u5QRKHaiYg7JW7K8wPmd1K5Hbft1vixxjv7hjJ7TftKJzWdtYPgATuLzMH2efYEu",
  "key30": "4dNQXSq2eqVH9boRmKnuYp7stNeTsKiAv7fBZSo4j4qYSatBsF5tGaviVPBS31kENeqd9XcBNm3VnX3RddFuyNXT",
  "key31": "3c3kVJGtYZNkApdgpbRGUjCY3amDjPgJnYD52LQu1YuRyrbWw375mvgLsPd8jiHGqwWenetfncoL3qQ9bCm5TXvX",
  "key32": "4igMxQH7Xie1xd7jr2iA49ay7h5qcJHwN63ctUpFK2JFYUo3NcvBDNFDZcc4PUX6PQq7V7649dbkGjnEzxLBkFTr",
  "key33": "29cDvsF2bEnc39M1uWrxpABXdNScMtuRbVJdbPXAYnFm7FgDy7Fkcr7LxsxvX89YCe3DRYTENJGajXVg1qrKwpYA",
  "key34": "2hh91LZ8s3s9dM5x3WMMy2EJGG5w2vKqV9Je8Bd2GyD8qNiwEWEniohonyJMnXTn1wovgKMYbjGPQpL4zwWm96Uo",
  "key35": "3r4Mvpk1Q8ZnQ4mXHETWzRS4Ufp32GjFfdEZLYJ3yZTkRvFNY1tp7qYCJbLVmjLRvvHZCTsX7Lpdr3NW133eyQPA"
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
