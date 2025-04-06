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
    "iMPpj6DSHcgLB2zAEiTDeibjwmsiGif5MKUmGki4MUwEMgrRD2MQpxcd2vyafZzkWjDnzrLygerCnCsZg32Rp1P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GiEz4SCJYJsc6aQLwuyR8XSaDe3y3wtSvHScfAV6nYFHUUAb5BwgxqjvxAxrhoqyHY9diXXWG1JFxFwgbjXLsn7",
  "key1": "3Hcy4kvQHd6gz8LhxQAh4KzeeJbkDqF1vHnW27LFNZ8mHkqZedRet23hZGHxEHA1gyBubX5hAPg5GctUXpJM2CPr",
  "key2": "3ijsGiYz7W46EFWxQgW7uhEhrKpTeZ14jTVuqqq31AMmtGEuHLAz5qwfHFhew4V7ThdGKFYNMdprbZsgQnX9PEFb",
  "key3": "4vHmrkKGzwd8b83rvLUVCwoaDYH28tRwovoECHuvgrnqvuoFgfpSJDDNjvHSZD71thjTZzXzg6MAKVebEUboBvbW",
  "key4": "UjD54saTixG5eGPRuhTpeTvN1GLYAzvrq33nbJwZPwKtU1bbpZd26g4hWcWvaMhN5uwpjp39WA4QwVRt5DwJXEU",
  "key5": "5VB5Cq1PRAtgZ6kfU2pPTUWTusdNJZsgiuAT9rQJekds2F3Xw1Ejh22qCQ8HhMYnY6f19QsgiLCobknD1X3gZtzk",
  "key6": "5qq2rvucDQ6fmKhwsMZj7CLrmrQY6igxaypMGgCnjhLbmk1SYPC3rVNnh4kYXa2adR7LLrGGUhMcqGFNXCnLCopB",
  "key7": "PggwPvhrRTom8fL1PuJcdRD1vJN3HEHWgxMqm8b92cZv1YX8kUYJecK8QeCKximibHhCp3fdz6vbWhiPAdS4qpq",
  "key8": "28n1RDQLsZXUd2P6iCR2WE3DmFYi18SSTNBjvsUUpjwYFdWiEPa6aBm1qtg5vbMjFMd7B2yC19Tdf4jy2mf3LH7E",
  "key9": "4Un9fBB8d1AS79kZrcw6NegoZyLHYvrYrK9hSvPpzxziNcNdVfK6VgsTNJsiZZ3rgmWy7Y3fzU6Wt2ZXoYcrEohH",
  "key10": "2b4ULDGzWQyABfAQrawjzWtN19qZmz7Wd6pcvfsxujsp5E21K5KGRK4BsVgAP6jRAU3SZpVqc4RDNYe2k8m5qFfn",
  "key11": "2TxV336HCTKnNsJcMQs5GhhkEuXLEeVhpdvez3vofjxY3kf8wsCSw6j1fZowFwiYd3ixwMwYcwXeFVTx1W9kEBm5",
  "key12": "4PbVTfcNYuDbTKnQgxAiKg1pSQQFCCMDtz8QLtqmwukhcX1mxFQBNSkNJL76HXdb2MfHkg2zYNSCvC9cHpeDffVx",
  "key13": "21hfRk14KWgTHZAg1bQ4EqzVQboMzBwwEAwoQCvzsMJpXAjR1i4fZSsKZjAnC3rhpEAMNY9z3466PYdifetnPtN3",
  "key14": "5Y58qbVStibivpWYUccZPyuW36bNYrrVS8SXj98hscxLcvzExqXUEqDCNhqfi6Sg5nown7sXbodoMK1RTmdMuXRQ",
  "key15": "2uVXnNQn4XBXM8uE3tURMDHembzM8BatWUjLb756vPcq7uxAqPmZRxRfJs1U9HS52cuPSfwXdno6LrzvFth3xML3",
  "key16": "55JtCm6H2egDNnQdaCtw9bMpYkwVe3ps9jvKy5SsSGS3AePjCrnRXdU69EdQJHhvC4ZveRcQiuUhJBV3vLfungfY",
  "key17": "2YEQP88NY4PD9LnsKdiGP19GkPb1nEfH3749EB4fs1R3ezAfMY5jrhHEpYaMS7cH2YrvEEhurHxjSNZt7iK8dTwH",
  "key18": "41jrnQWngETkMB3wkb32akpwYH78BRhF8kKbHm1bWAefZw3dYifJFtyARD2wpLkw7vu9zrmEFidhDfsmTV4Rirnh",
  "key19": "5cXA6B7tckkWNZr6z47X4zB5C56KSWewTJLFACxjX2qQMhWWyPyaTU6DvAXNJCBx3uLn4Ctacu3cP448f6womodu",
  "key20": "4NAj5wUcsKhvfXQQpUgCeSf2Vd8NcJVnY4vkscM2J1yXhary8qHQz7B4BEq2YJRarfatsXTbezM6FtULtyv1FFeY",
  "key21": "5dumUt8snzt9nJmTSm3QXPVUBh7uAivKPGcdo3nSmENtzBMjFKV8Gfjd8sGUZwpG7bnnmRoX8yH1g42FL3Bmzng2",
  "key22": "5PVMVmfnYLaeKrH3jTdbPwbzdsuFzDkkzgnLiJSCkgaDmoWBHEQuVYo9SCZE9DSNkBKi2vxVhyEE6YGtGrA9FJtL",
  "key23": "3iVBZzuH454KaRESUwCw4u1kF2d2SBEdqJsViixtB8djUXSgH3bLmy8Z3uQuLgw5rBQ9JJoz8GoGnZZvkqR9awjx",
  "key24": "ndcTy5h8eMWsy1tGv9pFKoJ39yUJMyvqytAWgvzdP3gA98YVaafo8Z8cVA1SQU2z8pJYzQ27VnETezhNcAWgcUx",
  "key25": "3Ygy6SFLVW8L8jbJ653GR78WQBggzJMYykiMTXVNR7XCwRN7SyLinWuL8sAeWd7jDSngcGvLSToQgFGzUiBqh4tG",
  "key26": "4wSHz6D7Bvt2bXhdxqSpoEYe8cTEE3TdsC28tpLiLPHo5SfMYTQq9sH5zRDdoXBZmdEEB5gnvsFvGwibW9n9KrpE",
  "key27": "5g53x3cvS2VVt2CXcAQ6PgdHPta4DUKzAGA5eULTBEJzthsYTJd9EsWtdq8ARN5743irJHkGvWgFNx6Bthi13zj7",
  "key28": "3T5f6vJHdWxwAJZNWt2mYF5Q4ZsKKRPQk5iLYnMTp13Sa7HzUCuhdxNjM9VL8JTY52Jy4EkyCXCL6BuDBu724x2x",
  "key29": "4YNcZzWyEc6hij5nczZSANX6s7E2dxbdbiSCs4vgx5ZLNJKjrhhjLct3qeankKwAV7hksDeFE3vqixP7dkHPUj1V",
  "key30": "5TbfhV5YTtGwJKe8rN9eRrn29e6xWFv66Kpik2u1EnogFwvPbfherrofbmrgakYktZPdrbziytMJVaLbe1213gQh",
  "key31": "5ZYPnt7ooTr5fJH5mQQMzbEcQTPAjLs8DPrGAWWyLGvegoANyq7CHgh2mzQ41fBsFnEg5y4srwjQxEAF2iS5QDWa",
  "key32": "3LXhFJhyyu9PJ6dgfi4abYc5vMg3foEsEXLivgsBJ5foFQUVtBurz3MUaWfVGer1WZ4LD7MFBgE6vdZ3jeJV4ahj",
  "key33": "2Psx5bQExoJxkPNcJEbfvigYcgpNFibpPk7qpmhVxS3PT6FRiscQyWQeYB59Q8TRapVTcNMCgZmTJGaQ9fV6yYWY",
  "key34": "4RWYycM5EJWwbdHq7QZQZLp3skin74SgWbnnmJMu5H4h5YjUMgoMvsaw3Tp74JerAd9jv8RThZHjMDXxzKix5B9B",
  "key35": "5mn27a7vPtba9xsKm1a9BEgY26XUkSbanpifQFhXbzaT434cKz4k1TGPxG5kyeco7Qt6ZCMh4wiSUTQJKe5JMSW1",
  "key36": "3SaCNtCvPoqb99j6x5JAW1kWFXWY2qABJEYHhpTyu4PNEbJckyCnGEsFfnu29ukvHfXYLK4a2d8LHcMm48JrYG7y",
  "key37": "3k2h3HtXPhhjid8bpgeeiQtxp1A7EDJL7KKiUURRvJgAnP1xVMJ8Jo2f53xxFN7sctA3ZsHoZjZ1adkjE3RM86Af",
  "key38": "2qKdpgnYep5HjFtFzoWaoEN7KcT82THheH18suNQ8qH1sPDLi5Qo9sDTQseh3F6w67jiMUtDemafTDvTGnC7mLya",
  "key39": "64GLdoSyArY9AQE5UA74DRXZHczS8UC9LBWw43zS2cVacTTyJPqgTfNrj4Z9c2aP5PiD6VY28fJJXxWZmnheahxK",
  "key40": "2r6LGmpjcU5UgcjiY1agJ7CmCY3NHzkyRocuazbbnYgTBibdMFhUBYEZZQskXtCzBB6xx4ZkdUz5EFjEJrbKURpe",
  "key41": "5NAwRk8tGNQAk5HNtCNvS2Tq6sqxV2SGEtD2etFNZ9fst8SAjKNDdXBrdAH5ewwriySDVgac9L7fbtLCoaZgXQym",
  "key42": "5t4vficshe2iaawEVziDLsHUEF3ZmUdSbgADZ92RDDihqKnPewUPgm2rh1FbptsANodhd4Rn3sHpbyzTq4gDg2Fy",
  "key43": "34wNpo9LUtzPTBL3F9xG7fy7Ua7C64Fu4tYPXuX5xcFiDWACPu3oDhkvN858eh7tcXEpLQGPc1ivtfQjvioQ3Pdj",
  "key44": "4Dn3gEWAWUuev9mmkhRgmmHcQMSPa6UkFFU2q3VYnjKJaoeoPQm33hv2cyQUfT1yALfZGbU5WRguJvVGXSB8fUx",
  "key45": "5SiEanNermLZj7187WzTYXGh9zWZdpkPdek9VuF6dgx75DPHDVcoAMeDBrTJ278GkaSs34TJbxxFyrHobE2CimA8",
  "key46": "5UPj3ZpZXhGNSWZpkAXVQavz1WKetTyMNGieuf5mhAUNW5vpodLFZDCM7XRRSHZt45uv2EnDa4ttkxDHMhjwzUnv",
  "key47": "2NiYatXtyfEyyCbpg6kZztFpMd9DNHQNaFxVXV9Tq3Dc9YPTo9cSKoYpZSuhsrgCcR2bEUanG7oTBD6ywDF1Tj95",
  "key48": "5nXewxvmjHP5tcQHp7dzSfGpZhwqDrB55MfVZYpBrA1VVzFRYWKk8sF4xQxbJjNNSiypQaBZRNRzAExa4kxzriAe"
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
