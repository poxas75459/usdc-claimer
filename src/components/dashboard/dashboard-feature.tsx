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
    "4hSc4jRrJqkAXwXkivEvhNVDEqYB9qsjSLQEz4i7A1NTpptMRyHo6PQfVsYLgprnaZz6RDpUurNTW3RdnbeTsmfd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kftcTCbXkHZ1N4hSVvJeX6rASfUNoGSo6VE2DBFTatJWWGwEkpCEbY6yexKioPpBCGAfxy7KQrVug58L5bFtonS",
  "key1": "3T2uWpseWsoT6VuaXbjuxf5MvmFC93gLSH2jiDqXVcVSvcud7tRtNio7JkJDFmU6TsJyeR57YsZBvDk7hkZWnJx8",
  "key2": "x5TPwy1qxc4oG8pp8nctXSjhhxWnWGUDCPy4hgfvu6gtFeQr9QRkLomtgFmnVChLffbu5EK2GJtBHS2tLT7tW2M",
  "key3": "44wUc5u9xE8tesURATqjLHVFwhEAZXoU6T9LeAuaV2zsqBf19bnrewvZywk8bsqQeTmmFyom7WViRQs1j7KQeQos",
  "key4": "2GZHdGunKTF88oCoL1Sn5idATRDLqTfKnHSRw9dvAJKZUFqBeba2Xi22VaHYj1tGV9co3uwHJvbaPmyA9yB5Dsvh",
  "key5": "4PCQrYfMS3MiNVxmhCHhTqeD1ZvMzkEUXnu7hZT8MDsXoGcBH3Yxms1CAkzAnHGGT9vKUdJy86yo4rDLsVpJHSae",
  "key6": "4J8zPgfNoRsEVNbezWz6F27e6R2KNCBr1H86sTgmZSAhkyuJptrLLGnz5PhsA9GKUbu4NKXHfvQc2sC1CboDmGW3",
  "key7": "5GfnAnydcT5wj3xD2DTDkGEFtzJPoU8E8VZTmhv2d8S3xJ1LJGbNPpiwndpoaJr7nsyjrNNKTFWMM5jbEujCx7Dx",
  "key8": "5VZMPtF2LTRE9HZEDM1gqGXNE1SVNxEavGgWZcyQK21UTM8GXGfZRRmCBezA8zGLtCFkypyUerJorDFAaeJhDtSU",
  "key9": "6nxPWgNYFauZknwmyCoRo9HtRPZPwb9sVqBvQJVfnY4YCYqaBaM1nxSXigdB6zDgURV74sa2jrqAgRGwxc8ZvHv",
  "key10": "4xgtdGD71PzH3s8u8HW4UvfjzJrVFDWiE7aypYCbnQkDfe6PbbtBTzP3ioNJdYksXm4X9fs2m8gEcqxv5gZNpYJS",
  "key11": "3jQcyJ5Gr2QmxQMG28cvWXC4hXj2hrt36i68ceX1wqugXKpXYZAoiL6RrZ2cZaPHZvFmABcdUkSq7mSc3cBy46h1",
  "key12": "jFvEh7gGM6XeWLDvgJa9dSTmA6ztCvQbR9qSFwYPqeDJuBNNSBwkXvhTtZ5aX7Euy6zwKNotDnQPniPXKuRtHkU",
  "key13": "3yxmbJfwgHEK7sPxhC7oVEf7WZcDMFEMNUNLG4n4y94obBeAjUzan29n3CucXL5skeXctRfdsPLPxzyoCpUbFquP",
  "key14": "3ieCBhr3EM61KnQaLo4Ac26EeYcAG9TGPM4YQf973anqJzDUY1YN1EMGSkRQTuukpQ1nH4HmmtthEcSXZXwGuYFx",
  "key15": "3me29MJyoA8w4JCGaTCPz96ud7xUK1uRagtuPRVgFKCSEVthcf7A2QqTK2rZCNWBQSoiUU5rkePsEiRt4aceQTUm",
  "key16": "5RxiNR41LRBd89by2kGC2bHETKVmMgfm9djSNLbHHqY14YeotSNfX96NxZyUdencrLouvwbZ56o6mEGT4QZvgBZE",
  "key17": "zX3Fg6wfSAAP6NJt1gVSMGTrdVrkLHWxE9TiVVSKbonanLDn2KeM5tC4GnTrnw7nzA5ZkZu5Ajwe8mJ5uyzkXhy",
  "key18": "QUA4qcGMMrszZtyYocrcdRT1m7q2qtBuua5SEgN2LH3hhNtsJgJu3q9vA28ABvZYWQUu61sM8paXkFaYbxg91xK",
  "key19": "5aqTZ2VGJQf4eVtLVasPggKvcyenEYBybgv2EC7ce8Y6a8vMAdWbjGJWaA2qWAvBMhfdfDQomujxbgPtTfrXbB8Z",
  "key20": "foxiw8k6vCCUFrzuY7xkZXNe2cFAWprqzVqA81dPYwEkUuJXi1c73vQ7fKayJdAPtPTxYHYrLVrzjEbKfanfRdf",
  "key21": "4AG5cgsL7zgnVrDyi99SCV4EKjnmC42aWtkuPRttupwzHMRSpV6QfpYXnLBcaHMs7E2KwBUCKLcmRAA38MzPx6f4",
  "key22": "2MDc2CDbF1u7myPy5TpSLhvA4HqWoSrqFJ7VoqXEsR3Bbh2PLN4FNb4SsF9AzCSprLNXLRCaWvn8Tk6qUfnKEti3",
  "key23": "5wX7Gz4kp1Q38ooqbm8M3aGpV61ZDTqwXVgJivL2rH65cEBt76phdRs8LNbHKSeJwhEVxJAxcjy9u6TMRfBQKcz7",
  "key24": "5gn5qsGKVXuUaS42Tnce9fgjJyNhX9iocrg3dXLfWH93vDQzTHVqvCQDNxSRBsGdjGLhVzz3YkQKDgW2oDX3vqp2",
  "key25": "P7z99VrfAUPyph8R37jiGyEUqJfUiQDZrZ3KUSxrCndeWeVAbfennfpZ2C9BMpxCYMhrnHeV76NPGLL7cBAQvtc",
  "key26": "4x86fPJGRbDJJG7dPaki4SmPXoZzcBzUn64U2X6GVVFFV2rBPDazozN6ANr7DzXdFq5ht3x1hfk3P4T779hcRzac",
  "key27": "VYUFbGuKyRmWcw66kLJtTDvqDs2X9UExqwvqqEaVBMpZKTW6YnyeKAyHZ7EDnHaPG7zErV4jigLbjMQ4dmxfUee",
  "key28": "4wVUsdyEcn2YXcLB9rBis1gYs1YVyXGCerYs7nKgrSphVmLGTGa56RZynWoo5HVxdYNi92AubbdA7TQA3yrHbmrD",
  "key29": "nBCHjgHJxpsiLAJbaCPP54gafTvkY8Vbqwtgbt5cirwJeKgSvWJADyAKhbqQZQ3gH5fzStrowgs1wBcGw6NVmPx",
  "key30": "2NJdxf1Gixwr4zGY5za5NC2kpckaue2d8xJ3rvVUXg8b9Ax5hKV1QNJ4gk5CFiD6XFfQCsrwwkz2sFhoxtpVpvEc",
  "key31": "43WikXhMPfehQeaBNMKVEw3YLfe8tDd5anBMCAVaYkDKVLCV4A4MGKkbnGdDAUCmUsAqvvoLnK4jKp82PQiuULZe",
  "key32": "5JxhbWdRaDRfxxZ6QtP74WMuE2HUBiyjUYW2o2qjSjCL1WJnAHTCDj1BTYco1VeVLgaainBdGxrKYy4pdL6841se",
  "key33": "R3nh3VmjtstTGzNCFZ2Szg5dBKgkWxVRJMo5QikGwmAGJ16awT7qScZJzWuRVsmkifgBBUiLJf616c2AniAb871",
  "key34": "2FWNZuRVaVdZ2vdCY9fCDGewn8W99fmfkxJ8jRif7qBYDevHvSWjCFUd4TEYMv6SJ1WFy1Knu94s9vDPjjaXn3Qi",
  "key35": "5A8J9N8sQCwZjyQAUzzHmnXhwLJ9ZQ4tQN7MQStrFjXtzQs35xtQQWoXXTvjmPyyRLeb3JevCue7yoZDUyswSR11"
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
