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
    "3L2DsczDpuHtTj6KuATxTy51LxinVzgoqRu5nPAXF7k9cQvLA52FLvQM3fDCtKxXrAYoH6rVc2YuysmKupkrMcGu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64g8kbsHgV6yT1ATL3TVKy7sE4v3SEXuA1hznXeszxvexhQyV1sYYf99efZN4Ug4UDMTHNeUgSg8TCKQkoTPsJHs",
  "key1": "kJoU9o2pPeVHY8UFo4SzTTZEQwSNp2PnqZxjybzDVWYoq6GLBdSPEGLN1FxJDtyf19MCpWXtA1jKDeaZsQtcDyr",
  "key2": "2GwaaxwFTc55Q35xQNH2FffLTcnyjfhTLoom35TAyE32sUvSsZJGWwtTLGC5dydzRNaCfCuifrhbkupGbuEbJmP5",
  "key3": "3aRSxnKLGmAUKCZeBxJNAm4Hbck9AEaog5qqemE9L1yS7nybjFBomdv2J4ssB956j1C1vVGfB1e1mhqmsAEGEcus",
  "key4": "2Gf5jS79V2edrR3tz3HDq3sFhojh9Adt69L96bTT16Z6atdST75R6KZwyKNNEPRiM7FqkKVASurcd6gfmC2Nhipk",
  "key5": "3DLFagod2n5D4dc2nL4kJpN2yryL5zFsB34h2LMwSrTFr1Kn1RvohhFC7gdswvnYdYrisGQUMWU7QD7QpxaU4Pk7",
  "key6": "4HuvEsNaNwkvvxVtLC8hiw184h7NBEX7vewZeCRv1jfksE4aCzWgvvnYs5U5K64vk2P7yVGGunK6iszs5VDVgkgZ",
  "key7": "41TqkXJZT9zLHfrs6FWbzsZCvAsDyWfSMvDwrAS49GwaYwNyqEgPc4RYuJFeUWpZ9iCczyrQJ2KFxzK2qeBYC1F1",
  "key8": "44oRkewafe4chCHXJ564jYL6UMuyH8Wyuy6aHT5Hx6GeLgn57GmKxHjynxs7spY8WUJCdyNYXMEtFo9FdqFCGvfb",
  "key9": "48yLAd8yckAwHzT7YQsRgtqYDDiw1K1vhoPPuNENkFMvL2VGkqKjFRdDZWbGQdC7csTYewEqoa5MDdczwXH7VUoi",
  "key10": "2BaFoxPPZV8Bep7JW5JzoFdqhBrnobCnysHuSDsWa4Bdi8sBZfA748379sBBdFiYpKcsN65P8oJG53nnfVKcGo4v",
  "key11": "5tHAcwnfoheauGJpVmepJfo9r6USrb6TvDserEWk12bwEa7BFDFmJWpE4TLvLhxbPZQ9bNvpMLWV8cNREVxw6RsM",
  "key12": "4STdKXtk6KF5uPmRN9y2ujM3AmtfmL64JK6BiqRHeMS4C8MxyrCPgpKF2V1PRUZtdZdNwFavrDW5LfQWFmyV2TCF",
  "key13": "2fRWCih3pbZJS8gCb59SHTAhac2Egf7mWpvj9Tendbiyq3gbmgvnbDBkepJepJdHpzNo3qKu4M8f36Geb6LswXMu",
  "key14": "2eRh9fQ6iG2XF6mihUvXDdSaoh8mLj5dgMqcSJ35BcBDe18QyCjNj6YfqaPriyyUzNFx7FFtxmHe2nu5btipPnEY",
  "key15": "4zmLdjRA2hBHByrbTVBnY11woyKr22HVFAgEc7mTSKXjJebD4FrnJdyVGVjKf3CsPERSYr9C8bsANiuuRQU2eLWQ",
  "key16": "4dNV5ZBYsJ7ZtQ2g6wPdB6agkSM49gDbBjTn4zbSZ8pYqyUcqSnzZMM4B2xSJYHPDyvHe7h83eJBWjeuysEYVPwd",
  "key17": "3vii4dJPHh6cEjsaQ9YtKLoEJL4Sqfg5QN4Txqr8U82jLGuZFCWahA1rHVfHvthCrfj1p9cGgtcZuS6aHFiQVnNV",
  "key18": "4pXcTSERfgHfydbVG5q2eC6r3213m8YpFEANpKtdWdTrsrmYi1G65YxWKTJj2FsKW5cr2GBQNF977RzYVySZv5KL",
  "key19": "hXykFp3WfJirVGWRM8RW1ac4wDEnUxUFsEsZuzb6smCFoKtHc6cckEDDgCCPEsZMrR6zMddYSEk68pWNUvz2qgb",
  "key20": "HGZt6FFxWVMVfxTBJQE5421cRLxhaeAQuyPj3ZPKR6QobQnpfegeKbh1JUj8QcpAziPHMxqhHxS15pjKnF6Sm8b",
  "key21": "3FAfKi6KcjWcrR3JJrgHkrz9sq7suGFXLRLWZVeC9LyNSFyDfT7zcoYs1Ph8Mi4nPeevgBfhtuZKmD1ryJJrW8wk",
  "key22": "2uGikB9zMYHDXiqegka3XwzgKUc6MuQwviMcibtzSpHTrVCmAPugwNoEa5N4kGfFmn3KpE7MUdNEFkFAw6tVKeb2",
  "key23": "2C2p4bGta9tqzabVaUD4YNk56Bk6zA1DH7kYYa3ijbKsR4FEEGbRESymAA6KU2tWnzpQPa9wEpwesEiwoFxjaAj5",
  "key24": "5PmJkJCjYQ4uXEfExLpUFBjCZoLJUpnANY2JGyyrSfhhn4XSSuGDzsMYjqLm6Sf9ivvaQXHTueqUQztVDfBHgxYa",
  "key25": "3iu2FoVjrAKDSCZrs1K7BTL5mKmjAqp1C37Ey1WsVEi1XmrE3qJKLWLKNHKVmhuZjNSj6K896Vb1kfWmvUgjfwsC",
  "key26": "48TusY2eqXMYufBWRzhiswMbz7jLaj6SSNuXYNok4ND5AQabhCbBSrPq5nhvbmVbguPogjHK7KZqcR2ZE2RrujeB",
  "key27": "4C1nrnTnk8Ekg1cXpJUZmpjQnnaMV2PRVpbimaXEgux62bnsjxbibMhpWTaXwewXgniDjDJbPYq6DecpAW9h8QVS",
  "key28": "4fwiMQJvcNEkQd4gRnGEi98BvvcvESLSHKbx2T2SeeUmEjoqpacGm8XmX9rcsmSmA4AENK3Crm43QZQg68hvQYVF",
  "key29": "678dbGAond3sYEQEbEJ2qm1JY1geRA9mUoACADUS7B6jMnJ2UEhkrCrRhtX5QpBQWsro37XN1LmiV1aCaMkEq8vq",
  "key30": "4X3w42Q6KceC82SYUfCGmrp7cBDSmXhxS4J9PkYSQwSnfDbf94FuGzKqSu8d8uLyLop99hTmaXFgAPmYtE9z1htt",
  "key31": "2ncrksDYc2J2AactiAD5YkhxhqX58s36JcsqK4ThCHVwrVKZFhjqky4XiA7mED5aYZGHag5QKh9nUQDcALmwi27h",
  "key32": "36FKCGzAJgYy2ezNvTBXxWhS6TcbAxaRv5pu1cCkSGLg83wH1vaWmuH22ENRpCssPk5rtmBwkUskZoL5MCR1ADqG",
  "key33": "vj2gk8nXB8LUFqcE7WnhKNFcUTxRAY7wqnrB84rYfFJDhUTFM6XmCNgrwRdpRjsvrXtbKSg9vaVY9pE34hEwhw6",
  "key34": "2KzoZ6fxBh7A8hX6MxpoSbVCFsZzEZxScysdFCmd4w7jWYkpmqPzxz4LuykHcDgRrgrAuTBVqahVTqbC94EkRSuo",
  "key35": "4fUo5TAuVcfzG2D8etn4crCt5cjMzSs3rW2NRvCgfDFCvdRKhcWq6ojNpXAZ11YK2XHmekJvDBaWJAMcK49UNMSE",
  "key36": "4etuf25PRp1mBLR5JzqDLXm7outs2M4uWGnbrJ48uo8jxAAFihqkxYwEoBA3Xpm7FkPJpbuS4xrv4ia329Mtubhe",
  "key37": "yJGEsza9ovFCHmJz6UqJEbaFdZL3w9Pb4jQzYedqN8Ww5HQYxbDy2m63d8aa5UhKWwPiBDBjfBcBKvMdknwPfcB",
  "key38": "5nznrpGcpEKFwDUfBSyYqNFTM9fzeUURJgYjvEQd4qsBuMqPBAcQLwA464CgCYTg9Cas1DU9aBmVBwcR7kVSeM2R",
  "key39": "4W8xoSqM3JgUBU1euZHvjvUsmx2XoxeekBJhuZxx2Ags2LH26cEN6VZZJrvhYH3Nhpw6zYHLPfPhw9PoHFz4pkLe",
  "key40": "Tj1CjSCR6j2EJpA7qsb51WDupiQjZ71HMaCqrRGpLV32L9SgjAV3Jgz6x2N12LCw9Y6rQcpEiHE4scjLmFjiPs1",
  "key41": "4E7rwVQJyewqggSmWPYirSxyFXF6iXP4RrBG1jDCmk4zXzkqFsDmAAsbtyvvXAJ1waGcmtrFxVEhqiaJ7PyJteww",
  "key42": "3E48jab8k9jYbDFAUkPsnJ2frsEKJZncC2ry5ozkkJGJTtwYDbK53Ns57DndyG8qT5XdzhxT2vGhcaYDuAWrQqUr",
  "key43": "2qcEFZr8VUGE3cEZU9nxNLPBW8ApYKvg8jWKEmNibMhw1Y9k9yq7x2t3cQDj9vG7rXYQ9uQ7nPW7fdE9vGS1KW9x",
  "key44": "23tbnSrP7iKEB4F3fjGBTraLQogSvRRnqKcoRR7RtY4XtrAWsmxJX6JT4rALtuzSN7tNpHFvJS6e9BxPxATVQRPB",
  "key45": "2qryqiXiPUehirHQ3Dp5D7QtHS8yKKT4u3XZucyyjE4kjUqDfTm85ttec8TwWkAigmr2mKeqTL5VsCPtkdnH4tdk",
  "key46": "433eJsgne7Pg36h3ooYCW9twMsRuZHyGAwMhfhEhMLcE335Q4Lf9zqg23XRnHSJtZekp47ij8rHqksv6PtTJjcfx",
  "key47": "4LJAAu2uUpMwxco8g1jLBeqSk7Zv4JsMRa8gYsEBywAesc8kH68oocU2j48nHJfeXVcgrmTfNcBCnNz5WxQKh2m9",
  "key48": "64wYRDMgbEyj6QJzEtirdcXCeLPYS8ris39v7WCR7fxWjKSixnvwywdxz4NrCuJ2oFjeDwUVumC4KtNjRLJfYLA1"
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
