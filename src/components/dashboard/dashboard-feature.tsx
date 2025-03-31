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
    "2ShSvUYNhCmxFFi7545bC4ymcjpBvxrnui6xdgkmBheiz5q8g6EwGo8H3pFncbdi9XnDLjFu6HByeP2enPprHkRq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jTRC8gftUo3dF3C46XPKqZByUv871iz1TnTbsmC26BTcpofcUREC19YSZF6wtR2tX864LKAJ291DP1KWEsJRUGJ",
  "key1": "1LPmg11D1n7f9zMnwVveUQu7uSvpMi9yxrD9yhEfR4xLouH3DhDwUsUYBcNij92jCFyE9b75qeqbPhzB6HQ3zEH",
  "key2": "4DwRpYJkFxdXZPCMJAQSySPTahYGYRH7B449xgA3dw9DxjmhDodV6EPTw3qdszmku1o1v9v1uBdnLoraZQhYRXsz",
  "key3": "Rz92XsezXdqmskqv7LcTj2s2RkxpBeMwtREZWsVjJRiTKdJ2bcfpwyXLwbuLZxrvsfMMwCmPgeCbmEpH7zzty3k",
  "key4": "28LEEcsPn6sFYCT6Zp6APEfCbLDufiXSA5Ex5e8FY4YJZA9V9Q3dzNWoJutgBk913iBoQeMo434GmiQhsEL8XkRT",
  "key5": "3eQzNp8q58xfCjpnLmaB3oz5HZ8VbzgnVRZ9jhN7iK1wsm4Y7souHbAp8d4jNZaeFywMp4Wh9qVi8i6xcWHWAyZg",
  "key6": "3jfuksMjM7VYos8MYYQzeevVLpYfFUV6MdY6Txo2Gs3eb1VHAMNRuxMdT1zYMVXMhC9tZzrJ5dBd9jkwYSA1YC4J",
  "key7": "4bpkj4x5aSMTruCqUhC4cb1wEQXQaeHhm4SMZstSfNwxpfCekudBkkGrETV4gfayW8Q7mzQWSJqQQD8BFB5pWfL5",
  "key8": "67gf7p94PYYpPog8cabtc429hqembbqYzm5A7cXkTS6gTw18FNZYutMZLjrYSRWcQ1nMNHeWT7mrYM64Da8gWjnm",
  "key9": "4eGixAUzGXtgv748zeFMBkuYCApCDDisAeHXv9ZSQdmAfwLqAUfJigux3Bz82XSK3NXawm5qeYBS1L17okK1RRZa",
  "key10": "2B4ieKrPUa48775xm8hYRWFX5KbDf4pkCuHe1XPYS8HNUpSyU2Y5rxZUdAgn1YZMReE1cZYXxZ3JLBZgD7FGZUUk",
  "key11": "4s39n4vmJMXvgzicExog6ZYdt8NawFUq5nErLaXMqDPq2DBDZfdrWLUF3CPSafSePtbQK2Sb5rU9CAapXF5uFiB",
  "key12": "de3pVfaTZUv9LTW5uvuPRyu6BZS3Z442AyFeT3KXRDrp6sdVHj82L7N3KLc6wJpEmXwKyWE9LBFF2dzkvG1eHqQ",
  "key13": "2LhsqrGbgp6uHzHwMPfsHT8gGE2eQQuQsjDtSgF5woPj2yAGtktwVdA2f4ZQrgR8Dij3ufZb2EgGax4xnzcThLLx",
  "key14": "3SZKebqz1qsv1VDD6pM24vcrPqNNomHVTyfap3NgLdXBRaPEiY8rwc3D3ucMXMbkUEKEpVnF1E31bSkZpJex5bhJ",
  "key15": "k88yT3ospocEWFK9Y7WwS1czSAQ6UC4WkEkiyA383PWWtj8SqEaMFF9g2KYJvBs8EkbnGMXeUonrs6GsDx3oc5Z",
  "key16": "DxbXSJeQhyyiQNb5gx7ho5hvkvWmYCWgoMXK3QyxnaVqCZooN7U5vrNA3XAA7LWaiNskVtBfxaENYocqmSQG4h4",
  "key17": "2qJRpvB9baSYyQb2mDFgcFXKjcXYEpRz6hrw5QSWQAZLT1p6Fcv7JfBALXXTY2XEjG8QMvg6rei4SJEWv9oo6Lek",
  "key18": "2euDxPrPurkDKCi9wtX2G2ex7N28ZjUdpZCRR6KP4fB1s8ppdsGfEoUwnU7pbgqsqSuvXpgVkpRvKJErCt5ECdKt",
  "key19": "3YXkCsoHqo4Mgx1k2F2xsb9wHvvckvFxkghLQ2NvQMMWiB3dPwyQFjLSrvSNpQH5uWD148wbPxGTGaMn2YbtQVAD",
  "key20": "2M4FUMVg3yUwkuTnRur4du9tvrnFcwdDdu5W9yFCw4oZnXHC1TiKMGjoEwTvYJYpTHFsr8mH7fY3kioZxigJW833",
  "key21": "5LxnB9V7AtkpaA5bqHNw9fxiAsxsdoG2bCF1cPem8RZXqVAtvyEFNf7xvS1rqzPx4a9cSJB4HcRYdMG4m1cw8SFe",
  "key22": "3rbfP6EjvGLGjekngwvfifVnBi5gzpNjYaYJ7J7iToLSARx39D8b8ZQ1QxeSe2fjKsgxYZvpc4fgWxiw8Ub4RRzo",
  "key23": "5iB9bph59CVXfCCFZWwZj7Z2WwCnTCKus6J8LqXzAAjuTqbrBcrmceUsnb2qwJyephsnNsPsfpiGKkRZMA69FPEa",
  "key24": "3azgkWb6FYiUdy2BHxGSCGuBbXsRnBZB22ubiFy6ByEbLr2MD3KVQejZwgbDrYVLxdrekmJqWEKQk5V7YNP5NqdD",
  "key25": "5yQdfkNBwVXKu3azxYxfCfJ3a9PfniSbwGuMxCqqAsVug1RyrozvLtgxM2UaiNiqodHuCGLfXqqyGE3Koa46T5yL",
  "key26": "3Hu3dkEqPL9d1CmpaeQEUDPZsrE8ZrcavrpRKAGqrLctDATVDjzYiW1PeJgLaT4cd1W1FgZZkAUqros67Mn5PZpH",
  "key27": "4UKzBADVnhU3bwdE5wRdtEqFxAWaoaRDncNZMPTKnku8sebEjh9s3HtXfrpZ4CHUcXcGEP4fBB2enDGiTbiVqE95",
  "key28": "2V4xvhttzbfsdeCr1T1WWWM8xSCwktLqdRNkU3LWLqmtTguocMVVcPYZzSceCdmxktEvKBkuuY7DCNKWuTmcQADb",
  "key29": "aqDmpoeht2fxun97aTqVxkzCfHkZwpTexBtTz8pA8VJ2cyFHJUp2zAskqjvXnpnNqbCLSXXSWZhxzHdxF81bEvM",
  "key30": "2nbYPL9cf46rLjqVWqtpcVtnGCgJxYxZ4gVARiSQGxm928nWjSxLXbZRh4gNRk1mt72Jqbiv36QYY9nb7ffmcKrC",
  "key31": "2kxbQGAnSeYAA8empmsDeikX6c6bDU4dBTqqvDd6dXzPd8p3q8wBZrsmAJEJXAqxv9Rgksjx63iXizr8ajqPnUR4",
  "key32": "4c5gqhV6og2uNQ94ogXAT66ScM2TJE76YMPXUnipchvf315BNNxrWHBAoj1ZaSEigtie9sSEUXmr5Coqbr4KnLSs",
  "key33": "65hxVeG9oEDSbEB49S8DSgx8PGhoRRrcQ3oj9Uxk3rmHRNdwAttaD1UMfwPm1AhZTZGfLfrDUbdeRuxp2AvE9tSx",
  "key34": "2VnEZSB89brAAMPtoYqnf1QUVxj7EyJM9N8cjzy9rQ9cjXUYA8W8aBaX2ZL8jKwvPwSw9TEdFkpo8gtbSM8y8uaj",
  "key35": "5FD3SsGsUKsF4ZqGAJ8Q1kRagJhUKTBqAFVFnCpX857SAzVw84HM7vQtSjRzB9zHerzjAf8wpFuDUCEBkZT9vwY8",
  "key36": "2mUmYiNtwjuK9QEzfRATtym3dwfwJwWGtbtJ1AjkVfaRxUjrRHg5B7ZezzwqjWFmY5BkL1T5PmMkNDFu1m53Fzpc",
  "key37": "5xPgpjL1jJ64Nr3zX2r8ajmoAUpEfQDificyoN1nzvwfudNXg8ptwRLw5oRik8bwT4XxhK8mG3wNQiszsfYp9Cvw",
  "key38": "45ViMKwELucZmaxgXsuvAoR5AZEpjwr8MzqiPWsgCRfrK9kndqgXgwoGJprNuiigWZmHkAmAhtS4mQnnXvweM4Uz",
  "key39": "2UxDcYCSRctLUEB5VeVzC75rXREuAKoT7dkYrLtTJ9CjCJGymQLzhCVnK1tiC3foCF8e7Fkz9qKWUXr9F5io8Gcp",
  "key40": "2MfCBY41S9hqKjEWUHnp6Ajae3VRoziXKjtydxU3kVh6GErEKjnpnSE8xKQh5eg5r8B9KQga7CaUU5ea1Dtti6W7",
  "key41": "2ZAq3xL45zkMDZ3BdUQAnEx5efFaZQDTm1nP9tZxQC8u34eYK6BrAFetbHkVvoq5k5pdMeXqN9eWyaWpsxzL86vG",
  "key42": "3Kpx2d3RDvq9oNJFssDhB3rLeHadoQ7JspGXss6bgktzwh5gtn3zZrSxr665Z6VSQWqFpYMsDYMJTwRyuEK52R8m"
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
