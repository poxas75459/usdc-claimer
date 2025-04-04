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
    "p98q321HrBdGbQA6aBLathEWGjtvZj6Z8Tmg9F1Zp4geTZPrZyLR2hSFaFAVuBrmNUHtDUqSHaoS6KDNg9AphdJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kiea7iEWN6EeaSHS1fGbZjzXD2dSCHxWoKXeqDLV445eh63chCAemobpg7KHS3Di1Lry1FScsDRy5dLABhDqK83",
  "key1": "F57i44rAbAm36dmnasxu557BBvSUBpbui8gjjTZuJNqNydfYUJoakCZu7tUDxr1ALh9XYXFsHSgHav1NVQrzuRX",
  "key2": "3KRCQciZNShV6jbALyDorKJbA8XhLvxJ7mv79wVvBYyWegth1BhhQ1jmEmzWgPrUkS91oLTLpoKqbtLVz2odvMjz",
  "key3": "56PdZcT8vhbteoJLMvuYLVoHoh96NstJYjc2BvQux8C2V8g7WWFHCitcvWAnZiczvZyjW9vXCTLmKCpPimhbaBen",
  "key4": "2s6MkeLrbVxnbmpvmkASKy8noDxEnrzFXwRBKD3GUA5KxigaYy5K4gSDeDoJPF5xEpQ2JxsBADKj8zBzWtLQYfgU",
  "key5": "47L1xBAV12ifeVo3UmQDhC95B1Q31gH4WasXSDBjkV9ZV7zTjVZyQUQwCwVNWyQF14tuX4H6pyXuDenUnU2nw3b6",
  "key6": "5fCTtj1QaZY5P5EhuaezvADuyPYjgbAYjw6wQcFViR4Fkbiw6fuU7WZyQoKXzZ3YWmR1cW6kpByFwJQHvWUvgjyc",
  "key7": "5tXzxL8vVygZsGkWxG6ipcHNGvosDrL77Ud9hBAfHLUkdbcKxquakvRVQi3DJ7fdtXBPB5LKaEhrwb9E6CZpsnkZ",
  "key8": "4aEtWramvb786we4GPVN62kQ4Pad8hxSY8ino7GWt58oocGkE1Vf4zE6GuySbYUt3HzpX3MxNeRsfhhm7Qsmbz8Q",
  "key9": "5PGXsQBmhvg3tq4gqHu6cBwkD45vkDVqfZUnnBnuQ48uK2NqU1WuCfPFTiZzeYkWa3wxv7op28aM1YW2FfxwfcxX",
  "key10": "3Bjum1uTSgD4bfKRpHg4RrBqKxN4efKt1Z23No9AsHn5E2NwLn1PUKbMDpXjiSCaLp8V5fKPBkAiVv7SHBEjsvwk",
  "key11": "5rkBNFiMfn4veQteBhKormznWmFUBAHg4fG21yUwk2Y8FEMVpaPFTkeWUnVp55Z7gMZ4xhxXnErR3iNoNeHsT835",
  "key12": "3AeSc3UdB49XVrmB8U8qCg3J591C3S65pPjZF5TLor3GfZGcDhrf5JK9PiS2rheY9SYVR61akETutWSM2UQtv12R",
  "key13": "3LEbXg7bVdJYfhPmjp7E9HiyProTLPksL5eBy3hwAkcj1JjQxJZUgcL2eaaxFU6hmyAch8LGjMFXwKWzabHXwNrR",
  "key14": "5uhzaJDCApvd8mgZCo3ERGQTjwUk62MSA2BG9QaTy6ry8mGzkPzXMrSBGkYweb7pxg946WVnEH2T9CtVMxo3ddNT",
  "key15": "5MKV6RMJzDX9iJJdk1izuxnbor9K4uRQ7xaoPidEywoFU2Vg6vqeweFDEwSvd2WKndaTPYMMEDSYukBy8w2ZYMcD",
  "key16": "54VrtDmPbyGBqnGcbFtPiX7SAYaYKEAXNhubBXeGvBfFGPfBJoLzFSWPgk3AE89mbaZmdazh3bwF1QceeyVUm1ZR",
  "key17": "28K5ar3LNq99Wyh4d9dwtf4XQZWrgaBVSwm5dVr28bG5EmxKnaKGnPZtRSr6dMYCEP4AzwLjFj86PPF988iEgYzb",
  "key18": "2F6gYondrPQgw7XPP6xpvYMJnV8xL1C59xGQo5ByyqwztggCSr7buD9Pnt6FEXT869TkSLLf2NwRWom1q27PPnBK",
  "key19": "FLGHrF1SeGyj9qXBR98fc4Gkj9JVEM4XzB2VkbxcciGqhxFU71qvPc9GW5ta98HZpUsg551tfujQjjCFYroeJqp",
  "key20": "4bE8JCenoV6hVhS1e96SiDiu3Q15eDriuUYWdk1umeZ31VMAFqoa5Bm5qwr9MENj7aVoDqJ1SBKSarDMTYjqsbhb",
  "key21": "43DBSTrHfFCh6xkyJncptLY8qoUm7wjTu7bzrQ557wHJdDto5HZ2GLMuHNdqbtjkTjRpDdnu2PDzPv7buyYjgdKh",
  "key22": "P6t15JupEjK7AcrhZg1Roij4fgHLR5R5JZWNiDQTUBNvKvhpAFDx43hURqfdEaVg1WtqA83eX8aHBtJ9heRFk3s",
  "key23": "5XY5u9dmeqWqReBmviBw6dncBJULGUu5BjRUqP8KP1jTrbkW1nWyekVtJCjyf66n9TrtTzWGscTpugjwgPsoVJjU",
  "key24": "3SqJbpHF1GZsVdh34Yc6D22Tac32qnRuCVhC9zMyWuWydRZqFnZZCDsyVCivzK9umMeHeWzoGxV3hRsZrKaeYUGq",
  "key25": "4otLd9w3Ca8PjMaAc9xntkoZBq1zuLieKtcXarYeSgZCqXVhHWU9dbsVwGWjuAwrAmPwbjUVcabJLYUTCT8U28Bs",
  "key26": "39fD61hRUEn2kjX1HbwoNd1uMNb1bDFvYr4Jmh4m1Vt5TCf5WSyupT6PG334uHinWf5snbZ5KSECPgtKTkfzuhCD",
  "key27": "26UpRxinskr5r7jcygL8iFLJaKzTx1XBe4c5uRkyrawoJKHu9TfFZpvAzq9XSocjanXMmrC9r5VBcCWjztaq6Bmm",
  "key28": "3axmyCpkNCTokPfpD4WK92ouU2Hir5TxfpeTv1eUtVjkwujv5fB8BNVaAEpRg7vBMbh4dZpsHs4sYK1UwnPSgS9M"
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
