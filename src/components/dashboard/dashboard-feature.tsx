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
    "hGxzyQwXjZYtRESCcCHGgGKRp9yXiSoVxdWYFnEsTvKyFPdE1i6SmtbouMfguNSn5jAAvxSfHM8F1d354ataaX4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vTu3rfLKtn6NhKmE5o5EWRkArjYaCA9VEPQXjwNHveKkBtdHYKoNH3bLompbeDi5NYHy57J64SpDFM6V1nH1FDb",
  "key1": "2QHVu6XsjVRuqdF46c5huYqT1tDmBGG37gdyFtM5fuu9cySqgT9awHzPtyN1ZZZqUzhyirMpz4UuWzBqnoHTyp9a",
  "key2": "3MknLMYp5vk8HwH8syA7xeKfmNLAa4eztxQLQZ7tW1AS3nYeADipMdWLueGjooaHBRR8Exi7QifocHbJumhR2TEZ",
  "key3": "4pTLb4RL7jKVFjemgmeCH5c1Utzbfao7yAhp9ieS8bxobP8qo6CFwiBv81Pd3sJENw4GLRQ3HxiwZo66PpPG5WQ7",
  "key4": "yye4qAKsBe3CBBoeYCQEeSvFxapxs6J1xGaENm3iLRWmdQFfc93Kp6E8HLUioYEwjtGaNdNG5UtBxNegSRHH8SU",
  "key5": "67TpUPWDocEfRxVU8JgFnZobZbxgkNtn7pRSp4H7P7wzNHjnA3L3DBYMz8pNogEt7giAkYTy2jZC34JHCXihoqm7",
  "key6": "4HrezRf4Aa2k1QdRHVXLTUDPDGGoSGiXuhafg1xVD7zRF2ZgwcxmGDSL3KkD9xzB1C1RWN5mYDYh2t4EAriPvisu",
  "key7": "5hX2p4piFpi6Q2aX1zpjsuMFB8G7og9PdRLSxnSr7PzXYvzsPkPfYzPJTH3YpReu77h9vopNswau82Bp9Gb8wsKn",
  "key8": "5GvahY1gwHyeVHH2BkrqvFLB6c2mvY1LiGjfv4orFmsVHH4ZWDaC5rdPpAxPczAHL77ijL7QTYdiwUEDwKK4kXJe",
  "key9": "tGqQnVxNqUeWbAiyZnMg2fZsFoEA4uni7QgJLt8ccfDihftccagucL7B5Wxpbpb6hwpX9RR1mWNkG5Cja2vXv7o",
  "key10": "5KipzwGqaUU2v3h36mCmrHaExBGwyjcbKX4DY4X72bTVN6TcLdLQuhKkLUsVwvYtoiwt9Rmy2cHrLxvagScVt51V",
  "key11": "5q4mMhoqbSDPB1tZdWqGcPHyzH5KzhfaZ8aA5xjkEHTB9WbEsd6L16wSbsjZMKwfjmHNGNFMX8ToqNw8tgq61Bid",
  "key12": "BDGfFiWsRHqM5kx3ycWUGLdieTt1pB85ipWyJRyDcMqLULpNRcQhRyhLkpB7WSkJG2j7URjZsgWudnZ88cgrR9Q",
  "key13": "5F1VvAooNEgTv84b1P7vwTnu8ctiEP7zKQUwTpWJzVBBNTrh7UMAJeUZNMBTkfVNpozXktaHMDLGoC1V5NxBiMpF",
  "key14": "59iW98EqgqX2CGXc3t1odoV2Cc6LttP91bX4QzVfpa1sXtUHDc5wowxGx1zLChTf9zSyF4XW4qbDMxQWxRMyVXxH",
  "key15": "3vtsR8ffbZTT3Z584ZnU1otcEHVk4Ga94XvKWXV4zqttpKd5Le9ACUe9N915W1tAVuwn8mvvjPYArjMRsMc74fep",
  "key16": "4kqn4uBRdD84yJaieuJwR9ij9DxqyXTP1jUhM2MiwvUq8Bm82G26PvYeT8xxRvb3ofCvCPWUJVm8Q2919S8DmGie",
  "key17": "3xCmj5wB4FmVKwAr4GCBQLYwoBE1DqAZBhqXVvxYrxaQEF6cb3DxB23Ryn2ugEWj7CsEkNeyUicasvDQfCTUnZcN",
  "key18": "673TwieR1PeVBp3d595Nhnx2XTZLhB6msVFit4bSsKXagKnwA9S8X69uQN3MCSNeobJr4NfAwq6ugqZRXcb2nm8o",
  "key19": "2U56XYurPgbj7inHXqcoGA1m8YqHd93DwpRURBte6tYTnRjUyxJitayHF7gtZJ4zZXVAxJyrGNmp6rQp8oMU3eFF",
  "key20": "J6NLzuhqT8waxwbHXyaeCNyk1K4p5W2cBNzTJj2WYjscvqgNPNjXzduaeteLaT5EDNeU2tXCbccpfXGuUKi9PSE",
  "key21": "2KWj7Jxa1p6rRRCaN4s7tGiP9wQUHTcnm6MkPw9GAuUyFC4n8tCRaLTLYFGnTmoWiEqMLyX8Vq7HAsyaegxWukBf",
  "key22": "58K6PGnB4yUzt4ZCMwo16bfyP2941wtq61XAtChJ9PQjV3f6RnfL4Nmyi1sYsv7dR4uDFoyMCwihWu2KaoDjX6VG",
  "key23": "4XXjpjndUiduM9yWzuBhG6xyMNzTJ3iWP4wKUfyPMQ3aJzsgjvh1ph3JKu9wwRJN59nLSRu5BY6AmFGXc2gTRoJj",
  "key24": "2kw68AryyWbexBF9W6kvHaxQnqXzDFDaVQ6fQGyeJiFXFkDiBVj88JmNiEQ8TDUg193f9nsmmwdHExsWMeoiXrJn",
  "key25": "24iHc6AAGmMFa9se5H4m8iJc5tRXtS8S5ti8ziMBSqGHeKRr6EjUhcr3tJTTh5KUPPXRokeyDTDAGs5BLQ1s771Z",
  "key26": "4aS7a1UYtHkX3xiTaJ19MwtTGfukTFsc6XJaHpqnvzmzZffrFF3bZD8W6xhEDvy7KvGLvaKBs4oAni8V8cVXhQYg",
  "key27": "Ykv3cCdjpLNkzBFgt21Ayp7E4zAcakavNbTBTDvqhLbC5NJ668tp2TeWRD1ueopFnDESjbtkboPDC7Me99pMk3i",
  "key28": "2uxxVp7Syb28QeNPsfCtCUzk82RYP6iHpQ1pxwYboeeyHmdCej6ac9y8zMymomDWypsAZp33HEvmxtBZpcWvVc55",
  "key29": "459T3n42CifB2Q9uCccSxjfSM7qDDUXFrs2sK97BPomZQbV2LRL25LSwHtqmm2TZM2ZHYVFakVEgi57iAzJfDhax",
  "key30": "2bACYAaS7joFFQ2ztt5CMg4geY3emxES3AHyRa2Y6Re4KQBkkWkhEYB77wgXVGJ6mKh9ikpgiwhUzfxqx77ahRAF",
  "key31": "4gb1GLL7u2YwFXUcBn24Rr9Lx9s8Bgv1K8fN12BH7Gu1uSwqJR2YkfezBerdWqcpuob96o3H8z3i5zZWQfqpxjZ5",
  "key32": "4hd7cVwVZXxhKb1vcAjo11Z7gchcX2ToRZCFRmSbWzL6x3eYFoq3NF2aS9KprzVd2iM1Si9bkYoaHMXHPGHgokaB",
  "key33": "2T9yTFKCVkAkB187wJWp4PgzRpx4GQqwrmR6V4p1k4CRGpJwat2MeSPYNMgL8U5nAG4eXNkgD91azhDHiQQA1fep",
  "key34": "5nMfifm3BmwLemm2DZqkmNsxASbfzgQaV63YavvMDijntNF1yTwEX2SugnwKF6zG5GyBJzRiiZxVKVvvUTKkY8b2",
  "key35": "5aBY5Bx5BS9wsLgnHwSjSLPajEukwHikhtkEy8MV7BqTRdrV6N6DWsNg25CWFAEYPTgiRHckkkhFisgodssPkL75",
  "key36": "5XqxaRXcSt9QLRwt2KuBhm9ZcxW1RZnJM9kZWPNBpuyW4QocLYoT4D8v1XkQ8h18mocuURJV1NUzgL4zZCAnmbgV",
  "key37": "3K38UWQg6CEaHFpeoSgAiUoLHKQTUeLcKW2GKjgFefuG1WvvEMeWwGMJTAaE4CcEFyArrwVnpNrvzSsJC7YT5BV7",
  "key38": "2x9pYzUs1LyT6o65AcLsr7Sk8TpUGLEttXFUXDWFhyZnebW4sPFUyHAzNEGn8pnHFEwdac56JU5r2jjLDByHfzLh",
  "key39": "5YiTGtJmUaEcFgZdCqPg2jmUiNkkFL56FYVAJubt2DdJkmaemjsXyW9aRVhiiNmA6c27z6EDkoGjkdFbS7QVJ131"
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
