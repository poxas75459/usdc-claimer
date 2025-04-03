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
    "UwJqXkDt3dMAiYiAGhuCfdYt53ACpLX1nSj9K8ErTQcGWhLaFJqTLHwB4DrXFv1kYqMmvsPuD87UP56ds6jMZpH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fe5wC8cUsm3CJSYHXXiounpA21doqg4ZauemhjRt5f3sXVw5XpXYWF2Rvk4wdyKQv7tFtqGKBF3qujniP7qKVAr",
  "key1": "4jZsNNjtDXTYQTda7QKneY1hUZKnTcCL7DeYPc1xJVxU3JHaYvsey3yo1CaoRexVvLKzTVwWTqm8ZsdsayvarURp",
  "key2": "41F3THJbQjjfKmZd8JbLVV7CL3Htq145aQEkaXxT2JV9hL1tUnVPGiJeNJ6hc1bJmAX6HmsnbzZTExzhy5zW2x1f",
  "key3": "3hSEHaBHKi9mXFtjPR1ooymQy8G46PAKEapYSSGQxy6LX4JGUTgmwREZQ1j41hwV4AgD5nmMmy1NSPgEvqws6Vpu",
  "key4": "4PKbLd37eqCDxhorZLgPncwVFgVmDH3Cb8TeSsnX5fGPscmERTFg8TVPAedvpCKVc5MZuvkT9uN1tcxAT2KsycAP",
  "key5": "2qq2GSUdE6UYpyyAjpWoPczfptduoFrJULdXiC9865fhe2xgYqVTtxon88PBQhDoG7yn62W9vVicqqcLL3UXYX5X",
  "key6": "2RV4Q6odob5fPEtt96MUpPsfDcSBLMWm3EsUhLNWWddRFXVRDycP7D86JCpJBwRZopzYkctrGHSN2oSRVPbLKpvs",
  "key7": "3r6tjzCVTUkcgJPG1nGMkzvWWb6DQBtJcpPGPcmMFkUCYXr1eeqTTASQahJkq8zB7hQPcaKCtDXnvhzxdApYWTP7",
  "key8": "53Uc9nRXDnMc7nBiBjHQreQxBZoSTd7p17HvizzUpZH7TyxLFKh8ZbQpBYqRKhsAuyrBNDqsVHe29iN1htY8AUnB",
  "key9": "7jDzcS7AnbiWCU7H5xeh3KkYkLoejmQkd8TJy3Kei295Udp4YRf1NZrhXMGqL7LwRFhTMBSa8GaJgokh64rK8zm",
  "key10": "3C2Dai15VKRVeJZ9mR4kA6TY46LbVFJnMwBg6a8AYjxKiEkipQL1RxXPzWm5DN7wWKyCxnwf6FzcVbXwM2Qo7yhF",
  "key11": "4A65CdVuANuxasNmtporo2NScp786W52nCGrJ2bMak71DmPDYgRQPiEXxiJiyKdoR1Hi1Y8RPdg93fs4UMhtrs5J",
  "key12": "35eQF2v9nU4R81Wr3N5LLdMJzeQtkGVrj5uk6RpohtvxQn24Es6hFhv84AyeRLTMQsiR75gM1XptgAdguJpz1SYC",
  "key13": "2xwCpat2Ue3LVntpNo4JJoRt1WQbpm9oBMESBVvojMLSvdHzEys7YTQZeK3L99qpUGsdFXgEeLRJN4EYP4o84KB7",
  "key14": "2g9PRYJsNCUgN8BEjMsHT5qraHij6N4PUvtHmzA7XgxZjPWGpjju819S4dDoBZZtTeSxyQe1cZg5CWFSpz6ndz1b",
  "key15": "56e8jCctX6VJECJ7jtHAqcgJSWhP1QQ6rUXXcRHV6DVoyo28JKBp5mFM5Ua6tpzKUayBnmbCvBhE1cXdqVBWzczD",
  "key16": "2M5y8UqJJf5ZJyGp3Y5AiaCLFo81y2DQWS742Sb2obziZNVd4XDWs8TZvCvP636qHZEfiS3ajeUKkXuJ1VcneMzs",
  "key17": "2HELAq72QMhpHHHv9ZAXYEHuQQfcihtEDEsHPSGedJyopuVEMCpuRZ5V7RyN7rKXYPwye6xFiRa2S9bgYfni3ZUJ",
  "key18": "4jJDNrao7nPZf8dYxKnaznTaqfcQQdPh4T5CW7TqinTi8Y2zwpKXaxeRsBPwKkDeTdFTPoiWXDfDqT4AahRHhk5R",
  "key19": "4wy7okvQ31Vk9tYLvHiAELQbRCHGF1bHQDDHauW991KNwoLtNYgSGXGZLRMA9zLkbQm6P6NnBMYAuUjaTckMEzFV",
  "key20": "5baP4K999569akwKTi4As1hMJNmyrKqYEuNqAdp88zRBXWipZeUPoKxarTfLnw23QjMTU3LbWFSmRWBfjPpYAzRH",
  "key21": "onfsZ32mo8vf59yqSZCDpTFkvBDzRfCDxdacdiShUBaZre7M9StgXq2jnMxhLcQZZDUF7dbTNdiMv3pnzWgxsXE",
  "key22": "5yY38bf1BM61c5kt6J4e4yEPetGiDPbqdF4Y7EU7xkSmRr42o6MiAeuypHc2JW2jYAX7MsguFK9ZTJVFdUZnNLw9",
  "key23": "2TGbkX5fJXZHks7sEXaBHDNSdEgm5MZwZ4hbz7vNtfUGhj9PCM9Uhf5bfVP6NJw92FVo1bwBnDNqDueBBrm3RKWr",
  "key24": "FfWAYQ7iZZUVBdg43rhhpp9EJYvUnA8JECLLXcw96r3Ym1Lv26AaDBLgVXmEk8BXEhSCXUDGfxqh44R7BcEPYnD",
  "key25": "i4zZJXNfycGL747g4vNswHVQ5yaCfMB658Q3zc5Px5CWMA8qDtoyirmkxxLJVTLhrBDdVzSQBc8iuXg2uNdyaTE",
  "key26": "3ifYmbzrkPTBu64xTVaXXjv1DgPQbBtG3KLx5K1dquMQaJtZ5rVmuht8TkEEJb9ZthngU9tzoc1A5afxEa17JJHy",
  "key27": "5V2fkxZBhiyjngE5UtYbZpujTJQ1jxiSQuYJPNK5toPgPRw5RZzXVGAwDdaVkfsUnqaakv8UYPPPVVi9wQVAue1t",
  "key28": "4Jm92Ut7JzTbHhPToG6GqViNzTtM7aQzvNNXdNLuzpXQX1qru4wE1HMoxFEwRFkDq9FSXwcLczqMrMcmUEJNiJRj",
  "key29": "5fUjwxtazetRYVej9B5VJ2P5db73Kz38Gd3pezxnVwJdjKiBmAXtTK62JUdjA3UXubZXWMbtAreEGw6ydbPy3UQv",
  "key30": "3XpMpxCSVyCPJevv73pp5dJqACWXkzxPNUkrfd7cLrvjqyLJfJF11wVBKhiLrS6B6nqsdD2fzs7w5t9pLXD3KFVB",
  "key31": "5NrjLRZk31z15rFUZKxyL4rCDRaZ3oxgM1HqETtHcaa7puif3t3XLnqR36mUSez7QTjBLN48s3ioGQ3RUvUaVebi",
  "key32": "4xy2hCVnMWCPcTZh3ahSBhpm8w7z8WLs2ZWQKMpw1FLTFUtdSgn6YWZup8P7r55zkkZLW7YJAtRnRmiLc5jnLM4n",
  "key33": "ExcghDFpaCXBvq49eqdsPB2aR3RQMuhMAF2QbyKBrdEwwhszKPkEgM5gBEfY9pnQdhTudjYAcw3BV7Zt1xDqG9d",
  "key34": "2bVxeREajHBVD93uHZ9MDnRvagJgR7o6obqT9cqK7ppP5iVYM9PSBHXxbLwqhQmZd1RSNEwNUcRZczkdFMPmrLPP",
  "key35": "3s5S7TVjiWwdq3o7ZDxKmh1nA9n2PWg6NwGiNRMtFmrzgCsyFk13qKAzeS9cdMY7JttDj2rjuSdtTsjNvZcBxYy7",
  "key36": "2U8Q7FkdGeinrCnXeGEpEvCY8ozP65wnHX5CsrMECA4KD9WF5uLHZB9UZi5HQJLGALxzAk7TgGpzNd5eCjtRjzRc",
  "key37": "5MG268th3PoReQ95vNqt5oyrvT3R4D9nUMBTX75tsozXFjT7FSEX2w2DqqC9kSjEGa3mwBrysN6y928QgzGKEtQf",
  "key38": "5S1w13pUPvV5aYLpAt6fy4pctqPsNTkdPoQsACvLQGxF6Q9nuwGBbf3Y8BChiL6knz5Y4qY2jAYj1WVQAyiKF7LU",
  "key39": "4hP4CHBQLTY38dr6vK8WxR3EoCoNrxVnDVoD98oEXUky9JH2YPqc9whspe2bJSBj2m9aa2JCV2bnYpU8pghz5MEe",
  "key40": "igNvJU42WD8aQQTLW5R2fX74MkN63EoLWy87d3n9H3UQcMZYjBdMe2jjzHNXn1deVGKvb6X8AmvQuCQisaaYKLy",
  "key41": "4hhoXa62ToRDij6iEgdAPR6X42zRAiBanickCQ8vPEZ21r7qcNTKr5LMsnuQzQWAarkNasi3zkPbLXqbuGecWBvf"
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
