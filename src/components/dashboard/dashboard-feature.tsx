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
    "3mg5jCzwB6LT7RxNMvA8BPkWuWgpMkjFRE5tnQTGvWLaog9L7giuD3kXbviP1ssk5PRTcmHLoJis8GgvTnmDYov1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x2Dy9kgQfJypvmXfdjmD2FtbzUvSDPptHgW7Wdf4QXFnVBAiuLoH6LcYFHn7js6qNvLkADHuKpru4HKi59qsSkp",
  "key1": "2V6Ya1wjSJtbWyf36nmRFfxzsC8oWDiZ4vjSBGtFu8AvHwJcYJGjqki4Hg4BNVAitmpR6Wtav7SCV2NRgkQnGVQR",
  "key2": "4eHSm7LE5DzkkfgFMvFRsoF1ygep2ABj4YsW5CmnJMHABxBtu42LKwMg9E6h1sLDsyTt69nnU3n61rVW5qEDuwrf",
  "key3": "3F7EUekAWYCsUK7Q8TRTF3bSkNxpDJ4BxgvVASVoA9aGFnUBsDXFJmecbmRWLKmJ5wyxzYahTNjSvBsQ4aE7J4kG",
  "key4": "4ThuDs2uZwZS2aUPFcJCojGrsmUUdpxFR2SeTb6pCVyQ73CK941PtTLXMmEsSCCPqgz9RdsAbPNfjdvsW7A2ybWi",
  "key5": "HaYgZQbbXviAZ2a7zFfkvhD5vaNhrLAJjmf5MtKnetThVUtAoyt6HVKKAMtGDTbFp7u6nUSNMc379Zv8BqRDaXk",
  "key6": "2Hb2gZNzhm1ZzYdFM6W476y14JeAmraXx7dLJEmrLceGqhoARGfyHi4vKNVgJAXAbdLVVh1xAx1jZp9w2auSJWWJ",
  "key7": "2BiM9evqGPBavqh95Rjg6Ndr7TJ7456FecuaekVM9hZ1Jyc1XvFjvYDs3LyrH2CprCcDRwf1VQmXz84a5wSQrLFL",
  "key8": "5bAykeyvc8kbq7ZJhkpcbB6MT5BRfwU4aa9qL5X55U7AQhQ815UVTi5Q8Ws3mAjEkxzkb9mL89pBG5FhQ5Begnxv",
  "key9": "3L74jKxWDqK8wnpDs2CvVejopm9XiiaNmA3oerm7xzpoTxqRRznZFD59KgfgC2z5W7XM4sbXKSTzbgShE3n2KfbD",
  "key10": "wLLumFJ4wQXrxsqTcaQZVoPXh6UEtUNHepxkodoSFdvaaT3MMwpkZYyRmT2431tqpPWdcvwJ4MgfV4vnXkeeeQV",
  "key11": "7tUDRGgzgqGqh7GhNMcZrG9ZETwiBZyvS2PpoNNYpCDzhLUNFQLgiMhpDSMtREe12wU5srhM6qKyVhypcjwNkGY",
  "key12": "49jhN4YSHSXQd4vrfswQ14L6jEPyyEC5HYgeVPK6nU6Y6k6SU28GZ9xyCatffoCbeEZHM5hZhWTa6Hbxpegmx7AM",
  "key13": "4pbHuda46FexjLdeUUVHg4AdGvJGsdV8BYjeeTrHebGvxYH38chtQpQSGAAKfvWBsLjUAXq1qpRadFUaJQ5MVfAU",
  "key14": "5BiMpqMMspFJiHoPS7UBd6f3FPpd8WVie67wcGdUd279bKMx3mxCYpMHKivwDjWdv6BUH6Z59ps6fx3bp7Ab8jWe",
  "key15": "2V51exENTVMgJZDyx1tA4zk1tMQY27r3ZJK6xp36kpfmSWKRUqvePUnbTtSBceoP2Fvre8RJ5kkRfXrLJA5YmiYX",
  "key16": "2UJzLtPMQ1uhSgB4KoYQpD6CntbxYHxyYmptX45KEeSbxBZDVja8YH9YQUaLiauRxicL2xMnjH1s1pZJt1hZxDxF",
  "key17": "4FCs47SBJMjdGyiYNNzXUKoxfkxpCVUHvnKCetu917oGeAbKqdz8dmjXFN1amNc2Tk8T8TQ27BrVYtAVmW9pktpF",
  "key18": "3WXPn5eHwLNXzjP2spUxJGoacm7XqeHQVBufTzKcppXZcBGuc6ZHkCbsRuFsNY9wTxKgHTbUEoDJZCUWdJ6jGmZL",
  "key19": "2QgmQH5x6hRVNPoAY6BoUzCFy2ZtUyVTUt1exgjDsuMYAkdsQYwD7TSzM4TG34mskgTSherEj5zNuUk9CQtuAQkW",
  "key20": "B1TTCbWEoTQNpHDzU9bod2xA4f7fXwZ99ngqAiAG2895udpGKkYfxyjgjeQpSSeyGm7FtQ6Q25Xi3toYzMpiVXK",
  "key21": "5LeTF3yUQXcra5S5KqPGswNR6QgZjtKBNYHRZMyEWs9zFgDDUBanqBvHJgHYDPCZaagyDnVVPv5chNZqKArgme2F",
  "key22": "mjg4RUwkrUFtLTN3H4rpoc1psY54Tv8WJi5NnJgKqHptBhH53nSADxR8W7AnPDUYDL92Ze8riQg9BG9rWJadGD1",
  "key23": "3tkF5RJMcJQ8VnrbSxU9dyR6yaHtTNungBw1Bv87XWzoWCCMjNmkisFgaRsvH8jhAZVJnR9UR2UmRtZxjHP9TpCh",
  "key24": "3LsG6aAZjsCaCGWLBybz2q6oK31DsSwBmn88nzK983ozBwGyVRtAL7URkWHHcWaAjDKwUJpMDy7ThNz3PFZnG21E",
  "key25": "313kbGSHMrw5aobBYqxnGSjJwruBKoDy4aRQTgrgwM45Hkj78oqXeRyv54c27MXwKrbTN3vFBW9DBtJk6zoD7sya",
  "key26": "2EWF3WxQotSRDkrjAgGAqcZZeNCsU47dQho9YDMDWNvasQxtu3gPkALSpPsQjBtUEMNyq166qvxrYSMzKPNB5zX4",
  "key27": "5DYEHUB7aLSkMuGr5vVyoM7DwDEnoLgSHkKBQo6S1dB8QGx8BRxB1F1SwWF1zjUYrAgXJznTCF2CyrJfi1v6UfQ7",
  "key28": "5A32j7tBd6gkG465cCrZwWdCBxq5EoK2w4o4WV16gA2xBUiWTXugK5afxgYGvMGiE37XjzxrRbk68wgb5QQDWnGj",
  "key29": "3VSxrUR41sGvMHpRw7X7iEB1K9vmQEZunRvsSUaqCD33wSAsX2ajWR4qUjaMU8qVQ4kbttcYsrxA1RZ5MfEVT9eG"
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
