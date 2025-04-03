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
    "22QP1ELh3WPwJsmJ1BH8ccdVBd9RHiH5kNVmy2gHcd43mr7zJC294kMhhfULW4fWBpopo6YRTBssXTMj4LiBzRw7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4syySU79YNfjX2WxKGYEJ5emnKjKaDndeLAMkqPhy5xWYXLvf9VMW7CF85wdKoAcJhTK1djFfoZKC2VLQLEr29tr",
  "key1": "31dAgxRQwZY4aJzihWVLyeZrJPfBqsvCogKSpaHbYCHd2s7Jest4dMkW5WpA3iUPHee7QAKt2WASgscM2MaAG894",
  "key2": "3WMv9QB69Ez252moZ9UugusDPGdvYhA1KfZirDjcXdKKdWYkLuYjBxTpnVVz5dckRYQCQ1Ps8nNqjwCD4Cx8cXY2",
  "key3": "tnsmGSRuyXsUydhFeDwT8HocKPV83bqMTwT88gjbZtVTHfeeppL1y62sJt21fz7tkMvE1oHBxXf5eaGVcHAMUjT",
  "key4": "66264Q8Fj6WTGEQd9vHuYSBSa4b8joNnhk2S7s4h3jiSsmiTRU3DNkk46PLow4VDhUNPmsqmvfyasn4LV4HSoNkh",
  "key5": "29f2i2GyJbeKyEVMUrwihtKbC7xTwxAQqxvKH7aheaWJGZVVCJNd3s3kR4xfBKYpB2qT4FLo7gVwRPNpS8T7h43g",
  "key6": "2UmKUcWuRMVqCswU1kHgQGGvPwYU4XyKehxLpuHxaTC6H24Fii4CQbVxgCSpVVpE3ZTGZWG39tgvCJWwq6dXCZ16",
  "key7": "2SUjrtEzqzXYJRYCRMvJsFyvf52WYvpakfkckxmHjAFLzfZEPjnbCUJJU6P9GniaDRxaDHw43oc728CAma1Vum7r",
  "key8": "4fu7hVmddeCY2ArQjDaVcU7v3etFUwGDrcsLXZTqaJTPoCEMEgdcbKYNwbHRLtHkK1ZX4MgsJWpAwQzvjPoNvKLX",
  "key9": "3DSbCB9HyNycjsejwGfTFmxEbzBSsftKf3PjEAMw4kq5f1GTEheLMgR8ySvd8qDk6ie3JMv4WtRdhYz3TSCvYWMd",
  "key10": "SdHYKD9d6WFqpG6eakZ92Ek1DrRUTNhNVHZi3xaemwqbeY7upcgSwYietvaUEpW5icpXHAVrLTxgK1WAtsjjy5V",
  "key11": "4R7QfNqnB1vTs29Au9qboMdB6Ds3Xdf2ZASt6vWKdZ5BdgdZfmw74Tiqk2ZMrPbLkZbwqRpHFdMQCGSy6TG8sLWB",
  "key12": "21pDWEPRCJyt6166BDe1xNw7QziDG56DPJXVSGXeP7gWzw2k5RQrL2mG8D2bVXdbSJFGJbxSwg12Tum1XfcKE6J9",
  "key13": "TN6DcJAwu9uAHhocig4uUKtcyAATZB3t1nfZNzwecYYERZo1mzHc9wr4GsjdSDbtXAVP6JBMSwHs3HoNwrXarwp",
  "key14": "r2XUhe9S2yUJNwos9t8j2xy8VpfiymJXdC5Em8tUc5jMgK1YyD66qJTY4RQbd6qapgJjY72YbQSeEqbaHhnayjo",
  "key15": "Yb2NTajdgJNzCRPiZsPyX2DBsqGwhEgbVaGjMj1BdKJtJ5Z6pzHHCW2K2TZUT8fwLFNxAD4qRqvJWSWYbrgiAtf",
  "key16": "564yD2WRxDa7b9ssbToyBvfcf37tEZFfyHoNc5qMnKq4zEiRPzux2ib1PfFDEaWaKsSuyMZFaz1NTFytmYysdjWm",
  "key17": "3sKn4jsTLRmngwTYQ32YbEiuTessdFzS4mhbBBuvAthJVYQeQKaN8jefLN8iqb1EwcwnAxL1ZUZsn75touKKTDc1",
  "key18": "2cd9wyRvPBE2KxC7uGE8Lt4GDiF8AU5GJRdERCdCKgQtegwUToMQa7EuU8DAZYuE8UzqkrXu9Ku5naJNtqFXvQXe",
  "key19": "3oo23dDSvHNP9dUoKU9NFDmUV3cep24RmqE2qSbUqPwJuTUnbnVXb8SRpirhRtEEi5pdX26oVq7SCLwny6A9vDHq",
  "key20": "4kfXDjqq7d3ydvaEWnAPjKhHYHpPSUjJBNZqHcby3i3tY81e6jSZ272DWeGeN9YmYt9Byt7jkL9pyAqVsZEWkoPn",
  "key21": "5XvB4axpm1YfrvmEPACYz5ZRnhWtePmQJfEg6hSwKw4sWzYmpQoMEtEioUeRn87AXnPX53HhP47f2Vt3h3ac1evp",
  "key22": "4MuoRWAsL992WqGmmx7DvqkPCtfWK59xTgCMmbioYQTpsMVUZZPtLi4p7A3angdHmzNeUKv25iK77RP22ur7Xa9G",
  "key23": "5NgBSVFEpf85DGhrmpCrCEPDcKnKq54nY55zbvf6f56hxpCUG5M5XE4bnVUYfyCii8gbZPmBDiKTFPqK3oJRoWH1",
  "key24": "ety7gNKdNn5y9Bz1k1RGLq1T39JYvAn357xufCnSZTACsidFsrj2Q8VSidPu32geATTsFQcCrhML9SSAoEpy6z5",
  "key25": "5RSsvgzmVkqDkPz5Nn2T9t64ot1ZcRyzzzw46vP6VPAi4gTvvNNRgBoYgGPe3As1PqQe7qMyGnoMQi7oCe2UjXmT"
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
