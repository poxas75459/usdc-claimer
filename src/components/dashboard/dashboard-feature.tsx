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
    "FuGgwuJdWkPrQjbXRYq69jQLrFo7PDr1e1QxfsfUWfeJQ7qXfiqtpQeKhzXtdBf8Yzj6uoMUhNBr8mDrgWiTcFS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eivYNmzNZXDGjygdoEyNKEoLiFvpZkKdMnskuvRTdRtwjVrEVrnM2MyA9TDgUGBXFvXbzk3MzWbdjoBBP1jRNao",
  "key1": "39tADqNbaK98NU69Trf9AqircwiEPyiAe9gQiY4Q5tSUtjq3w9K4eaBhEpLJ9VgUAt8zs53gaWFmYwi3hWKcReEc",
  "key2": "BiQ9TJKXEoyQaGtJ6TKCJG3n8triPPg4E3fck8oHSgYjxyScG1uZRAFQShKtV8o7JMJfseQLCyMHJLC4dRjnBUC",
  "key3": "545stEjMkTR43uSy9ATXL38MJWXTpZNVWZ43y6cgHQy3Lbgc2G52Ex6TFLNUqUvPLGJKjUBCcyzpMuJBTNAsavCN",
  "key4": "3jViNsc74QaS7rfhcTUGP1gU9JbfgA5nSN4rzrn51kwULc64uyzj5UqKfCiJJ4Uy8dqwZbnQspV4AnTwsLr6e56X",
  "key5": "UFWwApkJrbUEckWzZvmiPiHvWdn5eTmZxikqhaxtL3tX1wYi8U17BKmrSFKk7VShYsNnf5YP72tgWZKmUFyTK6a",
  "key6": "4BVd3euNz6TuS6AdHFCnxL9LvTSiVKGFBkmrQaaMjvPz97XMxzyChpc3bwLfeu8oFG5yYciML9A73Dobpadb146N",
  "key7": "5RNLTy3sBmzgHvgHEZSoJZKdAB7xGuDRvjF221HfuJTi4LD9JgrsCAnoQvZvVVn8SuMjqpbPvmjCTmSMos2JdMdE",
  "key8": "563DheVDk3EmzbLN6aeMRPS3kmqhWVUYMVqHvYZwD4SbDDwhCVuphvFvtwmWWBYV6LiiZ9sCA6WSvGfLqREfSH6c",
  "key9": "5M4quRGARoMTMbzUGTjN9i8erCtTGTBvATA1k7P2E7ARSKaBi9DLDCurMoZ3fBjxys6rHWABejmHVtqkiDYpuJze",
  "key10": "4zpxQdPCTXQdh2LgDQ9p5R5MyvYmuVC1rzSdqhTHX74s1LFZypsu3PuJ9CrmHwiNfuR6ik83aWyh7woGBzCbe1hZ",
  "key11": "5yUNY81wxcRSK7x32ybM4FusETW6AohZsyLxmibPctV7ekA6xWnzAFZ5wkf2E2Tc1kG9EcfVvU6s9pAaABXqdJng",
  "key12": "3yHgLNf2YpVqT1njjXEPk8kjcW9yuY54tnAVkETJ1Ede9FcrUbvQXGDUuuijbMauCYkHkrrMPcsD8TxEe2TZqrSM",
  "key13": "5LyGKxqBuFUnQpVNsbFaGUA4WnkdvtRkg28jX7HauLW21CEJNKPCwm4NohduvYqTLWMcStz2fhYwbsa29cHyvps8",
  "key14": "5dq88AfvvCREcTvUbtCdmUQN8VZnTRgmGrtdLb3ZGm4JFA3CakAN2vGYAhHLrCcZ4AtXgr51w8h5fAejXEruPM5c",
  "key15": "27gGKZx8rw6x7NKCGHJzrDZNAYJG8NYDtwD1Eu2zGvLD4DVSHHzx6sJjSzr2dK64jK6USyNmBH3VVv7rz35EPfzY",
  "key16": "4vtEj8PPNrk5dGYUzcK7Us9j8zbXQisBDPAM7kqkb3Ryue3tjDpUX7HJEsSvX3ndejSEW51xCMXYBn7JRd1AV2ea",
  "key17": "j6tecLMKwXNg3SPcwLU6TPHzX8Dp8FcDYMRCnUaHjZ2j5Y7H1ZvrqyiRGRpNFGdtx9HMZCR55iRC2yxKKtjbwzk",
  "key18": "24CcsYirbDmJKQgcgH5sZ3foSjosXTxk6CzL7fbkFx4A6v8iLXu4RQgF32bhTTnhN7ZJya9eZmq7ceTdEu9EgGcJ",
  "key19": "5xiJcz4knXEVgEAEYYmURkrPT5D1JgzdwmQ9QJjuyKS6EAacEJ5nQpmiMSrSwC7LU4ujd5sHgQmeyx5noh3gAjQm",
  "key20": "58RZC4APMbokFasNygRQXpWeqfz6Wj3sHzSTtnr3JHnVGiPq8QdBVbzPKk74LeZpMX1mwS45Jwo1cb6pCb9dJTgf",
  "key21": "3z1NJM6D8qEDn8qMrmeAnuskqcbosYUA1kGHTC4xCJLkWuwLeG57Uij2HZu4ms3r8AigfKbxhf4qnvPfkNSHU4n6",
  "key22": "45N7QhDoHriTBsjZ3kZT1WXY7QgP9E1XdbAJ7gvHatsb9aUpT9RrdyQXjbfhmL6eQww5ySbeMebDTzNa2xwnW6Mx",
  "key23": "6uz1a23onkx8cTvBCBWUcaNVUuNH9EkjJWX3sTMifv2su7Dkjz884vTeVKxx7DMLUymvzN5ViJP6uATgetodNzk",
  "key24": "4L1Cn9Jzuh31Lc5oECnaeDcN2Adu9xwhfRfKLWrLdunPN5v718C3pbSPEuTKjUK1KotzTSeoLdna26RpPgLVFK7Y",
  "key25": "4Wmbf7dF3aKLNy74LRiPenaCEFkHw3CMG9tAaLaSEuRv9Wip6LMf8zotF3mSfRv4gKXXRkQZPh5TdP33ufwB7PSM",
  "key26": "42Kbo2TFDsKb6reGy6jAEZ5QWgj7MDEog9sngYfPYg6mXbpD6jj1ynTJ6GfSLUhNGJxs2GpKGFGLQ7crQicxamH4",
  "key27": "MnH4ihQxpqB1DEFJGwDDrboEkk7AP1RFQv23ik6ozdCEyXAzHeQoqgsw3QkfwpPbN9WLUiSFjLYAEyDJPRZSB8B",
  "key28": "35pqk1s4NE2YdnTSY2KNErn2B5VgNHqyQVeTDfT2jjDWgRdB1XJEdBmvav761wX8xPit4duPjmPe4NA4UStFUoqP",
  "key29": "3kqcLUtAWGTDbvZtukUh5N73RcXPAvjPMLSdacbMVofgCJ2rjAKKf41SxDhpGXxT5UQnb4Xvugws3y1B6ZiXLhTG",
  "key30": "3dRn3v5fQ3cgeXvuedL4vESe2UG7ghzuAEfPbqHnDtkv3bPeMYdZvfsEhLYwvNLsmA9DyUVSME1BBgvzh2CUskmm",
  "key31": "4W3hMDofJxv2DMTpoQPfHh83Fxokjc1KcPkvHNfXkKZ3mMPwKH4FuYonw7QpoF5nX4iZe6KH5iTRrH8BE4EM4JN",
  "key32": "39DVoMTWGq22HkedcAm4Vfsbpi5o8YoFN6MejZYr2GUPNXh7iwCpK1MDfNybBGaZJhWZ7Ti1MMeCmKWyatdGG2dn",
  "key33": "4dfpE8ZWd4Akk1BFmHbJsV82SDTEH8rsvA73Bv5CFe6jfAJJRSp7R3UKvFNK8uKXQmkSdiUkGbgnpAhrUXgMvdbf",
  "key34": "4FyKbyx2q1hsj8jwoB8hhe8WAAvDqsk1X1f3iaJNsooUP7TaBKdWVk1WN7m9i2LDGnJbxVjC8e2pTbd8AtsFyaBP",
  "key35": "3AVzptGiCeNNVHLthfemS7mEbqDFHCs2gqrMjSbU78wV5Rf3eJnoX8qTp6mvRyUFDvCgqJhj25e1nM61F9Jpdnoe",
  "key36": "sw9bdxHjfwc6n257UtC1gHZXa2fEdyGo8EV9StPLZK4EgV3fj1RyMJ82DL19reUFuAud686yDMp22oHZvs7YTdZ",
  "key37": "3sxWhtBmFS4N48NefAJv84zsi5yakSUpexHtW8Rpbs8Bj7W2TwJjxQ5vvn6VgAySMDPUfiW2Ly33NyEyyM12suQY",
  "key38": "24SxDGNgFDDd5piHR6q9k39TjdTyUpMWkToBG88caNk8BGZuEPvif8tTn5aUTDgriF1MCxq77QG1JvhBqk7myKQX",
  "key39": "4GPhhHVETJSL6iPK5UjdZ6xoGp515PyADKy9YJyFu1T3obp6sJyUno94omTDLqy5sGB7WQBygBKHFXjVCriLS7n4",
  "key40": "3fx7vaoKXbvsvsbucLynMEFYsNAojtAWuoP5Xa2TpGc4bBsqSYwEuvSsFcCJgYxZfgn6KVAC4JBAAWQqWPiWuFzv",
  "key41": "5aJjp3ooKoU2we29TARL3VEps5Ri8oZQ1ghvtfbvk4J2S93ZmunCCJDo9y5BBzTjC9Vmz2YFnR6DLJQafCn4RV8H",
  "key42": "3cKBzzvqcUGPiArq48HfxTqGMnfK9vJcM9neMWi9YYbNoapF64wHetm6WMWCJ1oP4APz1v7fRhNA5YmtaHvdFLif",
  "key43": "4fxGGxbiyV82ULgzUTj9m2Hp5RQonRtP8XQt8WpeG2gwPXRNhCA2Gb8r88cs5HV1rDAeornj2LkXFVaquWACiFZV",
  "key44": "4Ws6m4zwyy9s34NovGAe11rPajVRi2H1CFGZ3kpKxyjgXJm72B1qQXmaPknt2angRANVeA5NHT6QdQxZnoZq9rbp",
  "key45": "3A7gLAFGDHtUrQCrAHvSY3qzzb8sExmJCDgW1avkHLEZv4XJLxmfNeqrND7C2pPXks3EApYMjo7ZetR3MnwkJNHe",
  "key46": "MbK58EiYTeMkQ3FycxBzMynXYMDGDKn38Qit3niNoHEn9vc1CScfvyYCTjL5d8ci37h6VBPXXcboULi9TZPReGy",
  "key47": "2V9QAytLo3cdLH9V71sbjGenjLEAAUgxp1zU1erwcQ6DGcbFPQ1CPoc8XDjkLZbp4wHzAWvDmggM2KLUaSjHuqXs",
  "key48": "3aZ6CKiSEcM4Ga7JhwT6xqp81fWG9YMY9KhVneLKQrq2egprSVBYqr8SRkZXsfwC7jRcYYMt3ZeAKYmjRaLa79xn",
  "key49": "5atRUtNiHuQGg6qCujurRYXeBxdzUvQdzn3i6AANAp62U5y9abs19B7uKhPFaLDxLmgYBVtyr1QebX5xtk8WVsV7"
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
