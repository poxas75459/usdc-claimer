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
    "5v93dpKDszDAU7dCGeuY39e7hqZRNBKakzKEGc2U7pTL6cGwg9Y6AYsSuVwct1AbWDT2Ribnrext1iNCk7f9JRkr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67DEpJ14TsxfgEQrNysXYvabUoMvziUEKppSHPSMoKMDadGRjS5xWPi9dSe2BAksBrNAwj4TQbNNXgncEJmoJont",
  "key1": "5iF33WSA8fusv8ncFHSTHBnQxp97tdzmox7J2sKPogQA9jeL3PX32r4RzKCA5kSzFcA7Yvr4TiFPaXDDLniBTJ5c",
  "key2": "4Cj2B6iYSzha5roUuTneAhEESwa1Gntjbs46xEnT9pUBMfyuVufuXVP6jWfHL1YGjSJJZBU8kBGNhf3YMKstTN6K",
  "key3": "2VG44hZPqs7aPfJd1ronmeXGNMTpmaAsz8FwK25oveWAfuae1Nr783AvsovddhZkDkAECPk6Qc2jn2veN1dFY4ev",
  "key4": "4GJKfVNytu9UedMHjLRiBD1jBv4P9xoudND6AV6dn7dV6SUdB7iU4jxAzWZGMiARCuSztDy3TvSERzmq9grmVVMb",
  "key5": "5A3MSMD8GQU1MYrqjAnitXUGD9sv4xv9Zhxy3DskGXfD9eWh9jKWR6wz5E9iG3horK2Q5K9j1w8998J2H1FLMLow",
  "key6": "5LFhdCeMTb8qj8VF4HSycSg26SBqqPJXsfLxkEPw57mxyKqckvTSPBzuNaUqM2U7V9QbT3yBGpson6daws1CokPW",
  "key7": "Ur87LjDteWvPT23pawhJLtAfaXgjoAsaHyQiE9xECTPDokRvbqQRRWqCwy2spvmbrAFPL6F4gSNqXf7UGCzUh14",
  "key8": "3tZGJUFBiHZFWSPqJ24PxMipw5La6pcX4SjzdFe6G3rZzPEB7ZdvBZzHYHgCiLwyynmvhT4dEs9UPcezVfBBcQYT",
  "key9": "5cF5TcbNsBy6GLMmZXacdKJUAVNHgPYkEBGqx7nUsFmxnxuQmNzHhZv7jFzETx7nBUeEREy5ue3zqU6jtV9FMADC",
  "key10": "wsUk5r8HwuatTApQSZh6jfrTY2tx2E7A8BF4srCgH8b84p7PsrBmpkeKWe651HASUUayGtTwTX6P7xExPPDoyH9",
  "key11": "55o4TvE1XXSSaYwDGaQypfZMvZ8rgXKkmWT8jVDNjqbZKJEb8ZmW1EortsJ1aiVgc7aSz5W1CUwR5wpktXRuSEEo",
  "key12": "5x1H8UoTid5fwA15wKHz12iQsMhWWu6eJyK3ZLu5BtqTnNw8nzGNMSXqZoHgY7dsyU6LeZPA8avErMC9fb1tQjir",
  "key13": "5C3ufwkhPR6QKVE5JUL1vZoD9VFBRgWS9jwEaSquhxt26c5T5S3eZWLzHjdJ7bmKEwaViCKayQCMirCvJqsA5CEs",
  "key14": "4U5BUPf5TnVMsP2rQPbM3pCR34uhXvuyzaKCZTKkSN5Ahq5G1htv7zdtBodrQSFxC7d7eeoHe7VSK63zd6mJvXRj",
  "key15": "51ZVuYU2fsGqDgfcdZ14jEChkUwLi9zDQYe6bj246f5WQ337s1qNNsKXTc55mmu4yF2UyNxPgZ9YcJFsjo2DYo6C",
  "key16": "5BWpqRMazGZRfs54wfUpsdokGnrThfyf99rxSGyCsgEE18etQrsWytUrtrhx4D1Z4Rkx3ggd6H3EDzFLeEgau7tn",
  "key17": "5M3brpe3X5g5hke2QBp1wwbcvun6hV6ZF5qMcuJu4ScVqTYhD3c8J19QmcH1Go75nGJKJCgQJjiiABz2pvNTCjuD",
  "key18": "AoiL9CUzdYfige3oesjYdA5nnwiVefG85qdJohVSQJJ937HSjQTatgVhR7QDQswBMKaUuA6Dy5hSRWeJe7iQUrm",
  "key19": "FhiEXh55KCDS2VA7HJGM1mTuhacVfvdjA8b8RYpYwZNQtyB222m1WLp7oFk9TQNWtj4Max4DpFXb3TtJMbg45aJ",
  "key20": "gKmDMbuxPxfFfZtGp1Md34MyCRFVybGMofqDFy4wKDUkwYiQ51XQjdE4q6vKgCnoxA6EQZDh6cKcbRiVsB3AvnU",
  "key21": "4GQFN5CjTGg71LsPcRudatoiZE8rxVJJjCUKgaYc3cSDhwGgK42GsBF7Ztmv3EddkMdLBEhDWEeq9EmFVBmP1ZEg",
  "key22": "5fdrWaskHRp3DzY8dguQMNtYLxXTqWcRnL2xabJ1YwgC715fRMhVxtSdBGAwtzywxKopQPFVPPXF52E1vfug5LAx",
  "key23": "3NpYXLW8uTPT8hBV4Sp9c1JwLsCER9d5tMJFENyEyDxoo6hSHLPQccvzaiJtmy4M6Hqvg1dRHLewniuUEbDjfmF3",
  "key24": "4b55Mz3nCF4FHm6G9dPZjLx27cBdja2NcHoQGzztep4z6bdeDumWd1BUtvsxkwjZQwSCpT27fuQkrrzbCHAikKqz",
  "key25": "5RVSx4CHWdqmNWgbnKqEF9ttn1Ks3RnVuB5UeaSuM3dZH3Kbcgr3L6KijUzJs12BfaR95F11vPfDFtuUYwMzJEVd"
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
