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
    "2q6bUmVyAMqLh75zwTs8EuAEkRcEdSKoES211paAV62vgG6smSbRRQiik7hmmgJEGQGjWqH2aUFvntvemMCJm4EW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y7moENeYC4Stq3TfPCVuiAsnAXVsQKFGZN9rs15m325ukKFnejCfgK6YTcT1eDZpVkSzaJ37ENA43MWTM4kjsjn",
  "key1": "41vbab6tBXBPz7dVd7f5QfNV3noprfgWrTeRKmwrzZGhPYmrHExRchHiRoNQ1Xj5CdwfRZjUDmKoEv298BtGmUoo",
  "key2": "4rogH4SDtKTBYygfMTqnWS6PmRppe1jL667cCBgkejQXbWVFEeoQwkdzgCtqvKrhNfguipJLVUYpS6Jb6yZHbY4S",
  "key3": "4vZSkcHbzjwTdJB3CWMQF5Vp6euVfq45iLzKjTKurRLAmFEYCC31xtaC31cQFxvJbF4iUDDNc3wDztrFoKLjvwnX",
  "key4": "4W62kBa8JSvHDa1HojfHqHgCriwWpR6iTa9Rks2kxaEutSwmggapYBxDtWn8A3LNQBXz65dJ5zyNbQg5L2M3Zgxc",
  "key5": "CtNHL1zF58QMd8XwVYN2CVk3XkapJJSSd3y5X8VmZ3hhM9burJKfoefAtcffe7yixWLEdxkS6rRFsxN9SaBByLA",
  "key6": "4Z6MPV8jgCT36n9n7v1M4v4GG4S3cBWxCCuMLQfYdE83ZH6LWEpT9Ha4MeCw3H2bDC7pnGswGQKYmLxRZ8wxAZaE",
  "key7": "28otHkqASgwYExt4KcnqDhFTKEYiUgLyWoa1umZWpspH6JFMeRfgdne6XjtSAahtjQJSna81Myds6tucaWmngUHf",
  "key8": "4wuHQF8qkQXQQvzAmvXcYfoaBFia4a6s2XmoRS3uwgNHcaUphDNv4tg9fdgbHii4i5vBuTkRenmDfewYxXytw5tq",
  "key9": "28Ysrg2XvahBKgnqYx8HHe34CZi8qZTcdnUXZmFxuvxJSfU2YXNnWB3StHT2JYRbNKkzo4DmKtLipgHakgzknA6a",
  "key10": "4v9wA8qwAYDEhhsxxenbT8VhCFrjGx8DtjXK96oApnvPgy7yKn1gFGnzhXi69zmyRpGDwNTJgEL5a7q7d1ZnKR8g",
  "key11": "5SKiuRhvEeRQqM7Lrb4LqKvKfkGtvcp3EnQgDppm59VHgMNExj7fvtA4EL4pho5e7Zm9ugvFFPoZEpCwG5hqPExq",
  "key12": "sgwDW8cdrip67BGv2eynjJSrRni3prpRChuPeJXjYPGxE9Z8PB8gQxBdkDKTH56QGgY4uDw9xsJirL6dUVY1Mnz",
  "key13": "4TtUg9ATRndQRt1kC1Gc485QiSURN2WfUTVWRAM2YKvzMjtzKhUGU2FgvpDXTwQvFXiRJArkAJNQTezNeP8zqfFj",
  "key14": "2BJQAj67nFaEtoh2WdECUkxv83Vo5mCUVLtpP9vwXQNMWvAUQzAf555s4pJ6UkfJLeg5zCUCGAyUmcHdrMCZiX5Z",
  "key15": "51iWRbJ4sj6wq4xtNQLLpcjupU4tNxfkmrvX1tVyrq814YfoXfbJFkpeeGCfLY7WHv1YSxajxCZxVVXphXC1wSJK",
  "key16": "4bcLpwxtvTPfrp2auS8VmaZCQW3FPthXyTLWVPBHACyeeWnwfrHS1ACfvh2sXDwZVN9jf9v4H6UTph1pTG7JDSP4",
  "key17": "65VDD3dW1St6XLXCem3YWUFkAnVvEBJUjhAFJ47hqKsMHEYLbZW6wdLLdUn4tWrViw9eP4kZrXMAT9ePEjPceUTg",
  "key18": "3eipWzxar6K3sVEcCJDtkLrB5LWsMmG88CDSmAKsPfU1L66thvE3EJpvGDZk8zbqmszhJHVAQ9ePDQ4QR6HECZku",
  "key19": "PGev5cU71W5bQ6dCxh52wcaYzdBk1hJEaMmMrfbDZ7znaCd6purxFAC1EUsjW2sqok9Z4xda6Z7SG3MPyQAFy7W",
  "key20": "4tLrVQrnbRULuaSuj6S82AuGXMiAwyBn78zc9K8KGe8ALBjWU84EMncXwGZzvmpX8s3SMmW8sCbfjec3Sn3qJjmB",
  "key21": "2Eav6xSGA6mvrB7j6L9E8Hq7jeMcggmcViAwFTA21bPExQcdqKu6yCv8DvxgtM9jLxsHPg5f5ZCNQHHpKshACJrK",
  "key22": "4rwZ1iXAX8gp9ghc9z5YRkTzjYP2PiuyLm6cxrhVmz6PyDPWRXHGfVJXVtiLHRw94WzUrKFpM4hgMsZx8bWgDZSH",
  "key23": "35qx5eoBxQNUfjUiExMsFrpSdYUjkWV3zki2Ac424NAKjcDsT9XF2CmuoqzzTDthi1DFvtRg3WVoBn6jiUTwX9JT",
  "key24": "P7aaq5ZcNY8dAC5vtcYHHYhSE6Yw1VfRsLo8WxesYC87fxapShKdonj8eo9Ktmx5siL96hjCgLY5LTgpC7wHDeM",
  "key25": "eKsozCC9FrWwZv3fZaVf6vxMaVDHiNtDrFduFerRXVS5LnNZGuCGjhfUcLSpjQagPe7JERsS4XYfvJizSD1NASC",
  "key26": "4Fy8TE1AUQmSpyCbykqKzMWiEVK48zfq3NBH8WiNRKvm1EitxE6wVGtuqVRUca52kN2FbTn7DhusD5J2CfvtmfPo",
  "key27": "5TN1xtnqFpXtK48oG2ctR2yiA2aSFwwefNuxkuTtNdeFzWJscPe5dUvCY9LetV2tFZKEkCRdL8jzPrPsR4eNHEoN",
  "key28": "4sAJmuPm27WWCUzaeA98QCuZqG9dc7RLVoYSRVSuB9ViVczQ6jzvbMRwpJ6QbubcABjsSJsxd8jozgCpFEDDDURE",
  "key29": "2HbauGTWx8vJdZTtX2vCpYYuK9S38fYhvpuwEXXTw6fBKZwhHZveEcKQn65kY6SCc3Ks6bTzSPC8UMwcjL99Ls5q",
  "key30": "64Z6wyPMtBpiLuZSZNvZTUWB1YtbPQdAWEzowAoqkYeSDHJMEe6P3FrNxBqEMG4HbeM8FmGGMj8tEVthJCT25oHh",
  "key31": "5JhwYjJWXazeLedZeuDCpMdmwBprgn17sKmsHv1ahW24QPQfBSJjrPvpVKfdxC3NXJGPhMTtdxgmvbKGJzeLMkJa",
  "key32": "3DFgcs4BUK27DZ5622AhL4j47KFv6A9QP1E3TZtJ5nbwkXGPLNYPRsbiL19sub1YHaGAQvqR7NcsUPa1ZkcF9Y9e",
  "key33": "3exaD9jAdqsvq5GcGTNkhZDZbVWC5NEjbWeS76tzZLhtS9KNwuU84YUdPwVLYbgVpwXgo6HxwRBkDpSGb7RjfTdC",
  "key34": "4Zb7NYFqCbuoSiQeozdPWwXmAiMtvHAkjDpkddE6ayNJgsDkbbRQUB6tcdusarTvft2VXbyej5fKbkQtQEPBdxoJ",
  "key35": "3JBdkbKUM3U8E5skPhBYstEBEYnvPsXhr5h284iJLsXSfRBQvmbF3Ttu63rTbVqgQPp8R7dyraqzmNtFRRJFqmp4",
  "key36": "46njmfLyc2AgMDjn8ZtXH6k85FiKjMBKzWsMgaWSKZb9iahASkQQRCxJ3aDdWGroTNLj2psoScK4FhtH4LysdchV",
  "key37": "5JBEJQTFj3DHtCHMeKgvm9XyJFFsFo98Nn6d57bVTYTQqwgPs2BQ5Sgtev3MzjWJsLKe8Hjd4WyDxiaZsApGjSKR",
  "key38": "Ap9hW9ufCZxa3NzamoHx7E16ZWZSunsXwqyUYNNxTif2Dg9sLBADHKUZdNg4VUigPuJ4FFPi6ahVqVMTkum7AND",
  "key39": "2dNQ1LP4esyDaLrxXTbZdj1da7hRbRLjhf3eUxQFgKQL1NP1Lidya4G61KJH9KCatJ3TgBndJcMLSsihCtPdHJQt",
  "key40": "dUz9kqfmcTaBdugqPp6n8v6VasGpMYdnfpkoSNNBL9Am7JNK2LM5FjhAcoehkjynzuwEZeL9aDqQi3pgUe2YEDJ",
  "key41": "4afCu9A1mpEEPbW1MepNQ9aaNaQvCv3hdE9nZ1TsK6iVT7ZjGcK3P7wCjthQeHCyodMazaBAKcuDsuK8zAoGNiGx",
  "key42": "5wP2ohuekLs5Ei87n5V2PWjo1XfYWtSGujoATciH83GAUfsafTDArAH86TndHgGT3rFfDaBppgf9jF9Jbvorqj6H",
  "key43": "2yPxgsSEQbBPs5E1LyNFMaGsk5NP21d3hf9XsDSSLsu6Z6FRCT18h52HXyxN7X75Wqqbd9Hi1pSBXLySeiDtU3kc",
  "key44": "rK4sGBxSxP94PLwbFzCUG5dikRFibezBB9rW5WhJJJLZGH6ZJDKi5juGoY9GssebuqprMuqxj1mkatZap4FCXt7",
  "key45": "2TocPhVSA4H8b3C9CP1ByKEbMV53NkZz53DhfwwW3HrDYhKDQWyJjMk8Z1aBuomi6Xx8QEm3QDx5YdfdypoRZpzm",
  "key46": "2nAEaqNc1wTXXyu5HMk9wFxdMHJbCD4SRpN82QPoVpGb1EyfqHcZPUnGHL7Ji4mSnYHALCF6kB7qi5EBh83At1oJ",
  "key47": "5XDJDmfGCtQL7MVR7amEbYhG84LJBDCq88eTYKGmBNtypPvRiR7gZ2kTpjKjV65asRHfEfZNWiomzPx3rtDYYXkd"
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
