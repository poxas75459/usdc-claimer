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
    "C86QZJ52XTQ46jVJpCiEo5nK2w5oAn9iyj5B3Rsrr4TMKn5WpgX4Nx2NzNqnCczSjSG3kpcizXD7Ud2kroCA5g4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aKKtWZdXQm5zAMDhv3WzXzHeVAnQA8F2Tirja6NWy4vrUX1Fz3zWWGTyJnkhFRkbZFZPVTb5ZnQJnqEHAYvpdkL",
  "key1": "4FStBVkaTVawn52tathimHyLJN4eD9HbNx1zWXU5Z6Wga2CYvg3fDeRETzoeX9k9czjissao3VqnsHAWn9qab67R",
  "key2": "4AK4xjgyVhJ5wfPBaFV3PAJWef3dWY1CDPue6S2hFE6gzxLcdGkN9782oChXdXn5vzaisEr2gxyxPvNBXLbmwcpQ",
  "key3": "4rAs8EkW8bLk1WFLXBk8tTAmdFYiNVPf253VN8mBSUcnkUv9vbL5qLHEFH84ZUMwjWFaXGZSEVUeKm5fskNoPZoM",
  "key4": "2DbyEL5j99QScEhsFvdunyPT47DfyAxxeGbGewzUW17av842g42Xt9BPnk56wZk9AKzWfWU4S5SQ1dveSASnXH4h",
  "key5": "42SywdsDwr4XiGcnnCxt5ikLR14KDs7astK8yYEfAoJsxuR7RRgu33bDTfxY4aFJdBtY2FbqCcLhpRBfznaKND3r",
  "key6": "2DmVURTwLXPRJ6BXLVj5vj3Nfd3tinPBvEijs7R8iBFTX1dtBZhEqQ6tfiPuX3UAwQRSvAY8X5T3CU5F3ZJPU9Fv",
  "key7": "5tZDFx9QBjArhq22X4u4Cdgn2MoSKBovK6vNg5STxgfxLfNyN3FL9Fk6zyRfkQyNrKaBVh1kwQ72xBkpqvUqwb51",
  "key8": "37UGd55Qc3rCD6zVhy5RJoES3WftGSBb4kzS7jwra4Qni24tMyE4t84VDdNqsazhZ3PV4H1Uv7QsRvfDY1H73YcW",
  "key9": "4Grvuxtqcq7zA12vnkQU3EbU3y3wygVmHc6Z9TKsQQLNb8pxW2r5TmZVsVPTBKjRWRvUfHWycQBEQ1fLb6yEGi9d",
  "key10": "5YbHCSUDyRtPoC6ddRvLGKFj7njnCr5qMD34emvFj3RHTDsNkZw97BeYCqLtUZ5RKNidC9GwDxuT1RBhyxNrDU9P",
  "key11": "2UUDrzMJ1C2fzrHU6S7ddx39QA9s6Sf93seE1Wqvr6695KNKTyWZpF1NreiVegLDDd96KqthxRX3kUERVFh7Lmz5",
  "key12": "K7MNC83wBH3ym33j7L8k8c4MJ16NdAL9uRUQdh7bjXBCBS5nZgRLDkB3tnpsum3RwSF72MJXVeWHsGmSSwzWAp8",
  "key13": "2XizXPpxFYVthMBh7VjvebRDhEwdizAmoSjNKQ32TnNJZ1Spb2RF3F85oFfN4rq74sabWX3QsegPvGuufyTMhACH",
  "key14": "52qGmHhnmq2SwRHJkeNDKmizRUuize7swGYRgbWToQUejnoEPPPsQgFV1WhqkU9vKC3NcwyGTiSgRAyazd7BbEZj",
  "key15": "3cn7HqtmmjhC9X6iXD7KKvzANQHCwQQoeXTqi7UWJTdxB1X49cypWEhotNZMHuzG72basqYPyyMrnpxypsuDNEeD",
  "key16": "3f4WQy8uAT54Z5P2quZVhfgdTxBKNvXwQwxWzJ3TiAsDL5JKXNvq2Pz3YjVfZJRQcGKWts4sbyTDHZVS5qfMMKBr",
  "key17": "2gU5UnyNJYQmyvDhZRqvxPpVDkirbDAoK3rMyhkaJB6uYbpFpdgEbWLbaZ4fq4UY11J2xaeXLf9MBGkorZsDase6",
  "key18": "4h62modA98oiHSdNS4aJBFcEeTJYokszgvTnSytAsfpqyRB7YsFAB2pXcjoRjp81dw75k2YRofWXQxjc73UGKiaA",
  "key19": "2sL91bqa5JrB48RsjZKFHb9z484CdZ3bUUKd8LiAEtYZ6jrDGzXRLVL7CzF7RHYpq4hREf4XXZLHyudThs4rvF1m",
  "key20": "5MRsJFWefG2Sm3eg1UF8EzWpCtjqtMEhbt8y7GHhwH4fpGG9LSyNjAKGXkCngazqmNJzmFDgqw5RrMSFx8CyPivi",
  "key21": "3dXfjDPQgxTHM9PpYkjdAx3UamgbU43uq71VW1YKLRPbVcJqWfM9ExnrP2kSjRob3V8Fu5cegWi2CXEcmJR37YUQ",
  "key22": "AGLtwZvNjkQzHewttFYKh2Ss4oSWNhPzEYLm6SEHhYHthNH2L5RqNo9wRmwJNq3tdYWkWkcfxU4XQwsFrwo7qe1",
  "key23": "45gHq2vzgqV5WoapTYj2QnfRTxRNJ1X2jimG349rfBQvTg8bFVcBb3BjYbxVoZNSxu2twUMF8qj5r5r4tAjjVw8v",
  "key24": "5iQej9dY2zY7hFT49AeVTp1aBu4YKHLKMtd7YHgc6fAPkvsj33hx3JfmxL9WAT592oz7js9x9fXi17K27td4Zszo",
  "key25": "2TEaYcBd8GSG7k66fThD1yd4AdYhjJ5Wv211dAhEiGtBVFRWLYSfo8aSfmoLWRzcyePBqEr3dgZkfkFAE8uKYsF1",
  "key26": "51JbfVfMuzctV5jh7oag2WX8uigNfJEr3VdfzEWnz7DEZ4vvTM3Hbfn3fKpbZCmnKBnMjeqgPa3PAcB8S1TrRAWN",
  "key27": "2yPCNEkjtCwDx57iBMfWdRsRYDwcwfB2ZyLnarRnW5qKWwcRwXSrpBxbN2HroK9SHN5i4y1XqfXn7wLTyVuqCXpd",
  "key28": "S9eE22tSKPVoZ7Wz9e2eXYChxTz5iSnBnvFEPjaerV1Bv26giZEroJxkbaEAHJPjFwvsU8XkmDpyNqMBhJPdFqN",
  "key29": "3Lq85A9XP9QqTo72BwZTgDnb81qXrVeL6cyVAzoaEQRtvkzuh1wykxRLc2TMi6P9TDSznZeETqsmPFMCLhoSJRfC",
  "key30": "2zJ57Xrw3WZFW1QqV1GuqqcTWpHevLyFoyAMDR5jZCRFKgD9r9rZyETfF9s2TLH73Zr5c2imYv2hPvG3wUMMav3r",
  "key31": "4MVAtShkfUCuM4aF1DQ5NvVbt1diKZfeLuAPBkyGF1f5m1Dy9MDkNWx91CVAYur9pbKFcEAr6nCyCfo2NX7MSAqV",
  "key32": "5BQvpZ4vK1b1HjVBB6nVvKrkwW1Coi38KUGH4vEkGyUiQRr6FKbjvz9nqJ1Enoiz7rpu7HyNb1taDsvDHygjwyZL",
  "key33": "2K6gPX84ZhszGRp4yWkbD9M5sRes9fiGSDDhc4ohJsSLmbrUxqKurrXvTz4tcq33w5TRPTCLSbep1xeFdQnKwMxp",
  "key34": "5obBVtS4GGk8HyFr7Fvc2g18LbQCXjhCkvZsyKXGeAU8UxgdPgisNcEa8krQFrASzuofHccRQwZH1gdPSowgLQSp",
  "key35": "A43K7qJNAMiNbzcQr2P6UuDv1LPozHu3N2gdvQVH1Cr8dJunm9Jwv7TGJNQSNd4ypJeSUo3g9kpdYB4dqQ7WAg3",
  "key36": "5yqtLeD3EsebQqpu6MDWohyW27xQBUnc55HRRD6YvYMKHmdf4S84Ret7g6aKvaqri12FD9udTRBKPUdYbqy4B67m",
  "key37": "3AaYpyd1PAvkoKmyroscEMRUk4EL7NejWpRC6JH3MrMtbeS7SCdMxsd95Pch3hkcc4iBdJ7kf5iUNM11o51zJxYq",
  "key38": "58xmcr1yg8L1wwASvhv1nT3pZnRgETm6Dj6fXBzuQGMkwMHtdiZTXoYFLFE91PDuya7jN4rBSWbVkHNHTfxKKPg2",
  "key39": "5FqHYoNxmqszCC1KRV3ySWm5psDn1ocS77HjHd7nMW672VtQviywSE9xFtsjyRjbCuJx2HJv6yLm2F86DGCvvFmg",
  "key40": "3ZHmiJcS2autBqckUk3RQwbZqnrihokynjCe8EXSLKsXJnaVhZVccLW9GrgkZipPyxb6nP12r4iAPUoZ1ugy895R",
  "key41": "5YRtMz9KEvcy7q6oELo171boWdens3C9rtiVVVHkhWyE71YfMEWvJDEyWHX9btaX9GNVfVj7KHEeU4a8zouxyQVd",
  "key42": "2u4VD9bTvNb25RSu86Qb4naN5eeZjH2QJmxwJWHPmgq2tBkBsCqbZZBZYycFZbzWyCSNaQhfkPqMvCHNiCRHQBna",
  "key43": "4UeNmJXb8SwEewFzRueLgFoNtH2tvKV7eMuoA1v4qXz8cYT5Bu5ntyKCqTf8yqHJXE7y3mZCtWY6KQ61BE4cKkS8"
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
