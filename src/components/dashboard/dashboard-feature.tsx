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
    "3ckLHjwRwa15HfoinbpYQQ8UU7drNi9DLGVSTyHKb91UdmTGH3DB37yNjZsFpDy1CwwRPu3aVjuXzn536xoVt9Lb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FYGcxFupSpMUpqkMsge9mMBGz7DrV7qYqT1CRELzeWodibdkzQgTBWW4rDEQLhQpbVYiW3Q2EADz6GAoeKVrtUH",
  "key1": "2emJGgDXW1H2PQGBqmbUGDnau38vtHQsqzYPb32uyUctwZZ1LMddURH2mQDqLggkco5WU7DwBDFVoGtKKnQuu6oT",
  "key2": "5nuRpvDLebNkmH6WLLttWGfaMMyX8jSKHaGTBfxDzo4kVGpb9U5yRmdm6Ye3UDYmRVaLzbkRGgsZrQm4XxxqoH1S",
  "key3": "4HFT4NPJijAr7h4FFdX5pGADbdtJWBkoLAQPZvWfR99oo4quLnZC2eTGt7r383BhtuxDMv9Nx3gZFEEg15gVbqfk",
  "key4": "4cKvefD5JLFJiMh5ALa9JzEaVnENrytJQLU34NwJPSeJfeP8hfHcUsMvpX7fZ9VuXJcNRiah8S57DTgTLiEhdM3B",
  "key5": "5MMVnY2CAhcG9aEAqZ9CruY2UgCFtqsVdZZjR9zNaopAp8pnWEnHCLZNLDiTGX8XMWX5r2heUU1bHNDFswcfQ62j",
  "key6": "EGTNVETvcUotioxyG916YMSe5hBkwkoEeY2Gf2z6ZQdbEVAaGwiU8KftPiTQXLHsKzX2Y8wd9n1LATH35qmYto6",
  "key7": "218CQeVMZRWKZ1ck4VTyPHMmUDKUjBBLkYKDKDnNUJeVuACfXmCiUhMH57rTg5oGhz12DU3AovypizMeZy9ZYL2B",
  "key8": "58aTaaX4x8g9awki2R3DCUrGrFozPVbNPoDM6Jg2pwZw7pBkn1FcNR3texHze8pSFoAUxrqQAxguhi3NaFiigx2u",
  "key9": "5NCLjviyTRHQ2o899wcHGpZv3fA5D8zE6evHSeykGEZMXrL2x5mBzyzVVf1o3Em4AATvq9amECKEqxRHtYgaBUCL",
  "key10": "LyjpubcJaeBEn1Dr1ERNGns7mxpb4imzGrAf7ZWKX6WW8DWTb3AgLy4sEtwsGETKuSRjnEQZocn8iPPr9MaTZc6",
  "key11": "37bWU82ZBuseZzbjez7ykfFfmNpp8iYZPoX3EwxtfnrkRBGoBYxMqgSq2jqMhHZcRdqxd4L1BAgmk4E9Zi6X4q9M",
  "key12": "4MGBB8usDBaSrp8HZL8fjeU7dEKFWvNSxDjfXCbfnnb4hYYtP75qrJjt2dALtZYjxeDV2NYFbBTSBrHH6LKoumir",
  "key13": "5N1DaVGS7459E6LBGBHsnSrHFZyto44ve4nuxbysKrRXxqHbj1MxBDZfWud2L7HSUP2dswrMF1YLiPtimCMfT1BZ",
  "key14": "2kpEXgRd24DSUSaZ7xtpBjrx3rs3gg85wC2uRn74wPsTuwYTPNVY9k2uehH5DSLS3zNtHWQyowaWJMHfdPMAVEQ4",
  "key15": "5zNZrBg6vy18cVYfd7TWhz6HGCA3TmdpvnFMii5F3QgGoTdui8wZ3LcoGHn3iDQRTTGFBZBJixrCAfoxfwJufYwR",
  "key16": "5LjzL1ewASp9yH4EntTb2BGVeKxhGoUXFn4yqaSpZBWiUGnt9KehhoNn41m3xGrV2sM1nfsGVZAiA1t8j3YoF3uf",
  "key17": "4cwwwY6ZYAqSAiK4hi5n43fJNnyZtEMooC94jS7EmNrAP6VpyL5MNoJFByndtMKGWDuSJVmYFeuGAhpVbgsKzeZ4",
  "key18": "593LsmFJ6Jg21MmBXytJpGTecdsXz1WC6MWhtWyFFVfKoH8AH7tcbSoPg1EDmp5f6W4JQSrRqCqf6hoFrTMGyB5k",
  "key19": "3hCMW7rx57ZwDTpxw4recViHtkkExA3qdciN7XWWnHj1Yao8Bg2p1zg1WLoS86XoZo2JfWg7iGj2euqNAvSWNfug",
  "key20": "2nrYGdMUNJCnLYYctQ4UwBiYzX8hLxLUmGmuCwon2yRdcXNkQ2Tn9jnC4LAotMnkgun9YdUiwRUa53PVRFHVY3p",
  "key21": "4U6xnH5cjSx1sgAbgNqq8FMB8Pb82Tnt4eYgDB2uTe7mUngghnHa4xozjkAtQBaZ6tPQrmDq9qc3NrW61dtqBpV6",
  "key22": "5dJTVPY65UezG9g3YRochn6fjn4Frpu1sYHzUnCLrPwn4AYyjcNYgTorS6KdSDkY7peh6kfvgNNZAhFY69Ue9EEB",
  "key23": "wYYdnJ9EckeMvudrPhgrXopkgkeKdXrJMJQUet9uaxtiW74xu4DNEFgL31CHv9xiRuNEtAuHkciQJxvoihF4GbS",
  "key24": "4CCwbsezErHu9wqR62pCvZDwKbz6rS9b4p2Cy3qVqudGVqb3PXJ3wihzRFxF6gqT9B2YbdfDaYnZ6Xu6sm9qjjPc",
  "key25": "5ARbFFawFxSZkoqEfnnSGtm2C7vp99HZuo8B5zimzaA461APxfUREZg2nfGUrsq1MuFYDSBTuJrc7PaExkrXExrs",
  "key26": "3H5tw9jgXv9G7AFA3pqSDMXJTsdHsZ6ywm1GYCjVQKV8oVqu2JDT6eo4pS54fvHMHLkRZDQUPguoDqd9F8S8y8Jw",
  "key27": "4RhqzEAAnYYUag6Vj7XL734nAsh76PHHh73ezJyrTxsFqawNgqwehjY6F58Bm7ykJBNL4iHtzLfvq6wVcuLKDFqX",
  "key28": "3ACchpMHWHcqMGxHwvTVhtDniC1o9MtnRtzpVU1nYMyNDcrZSoUcTNoS2RxZynA6EPqKfaYw4qdoQwi7jLkdSFnE",
  "key29": "4ZYQGHgNtcnC728W9LmfTPqH72rQkGgrVxejyWVStD5bBq8L5KHRxZjk9UcaVEsQMksrGpC9otPhHEe9LptacpUH",
  "key30": "2mJ6EzK1DKeDfD8eveVmBBvWHNrL81HT8aYZgu1uf9aiUYcmJTUm1zRgqNgUAzdFmKvLGzLxnninwJr5ytZHd4Za",
  "key31": "4immHR84mAaGcaaHVwRWKtx4pXt1jBTdx5tfaG61sDCQ3BxejXMG5edT5tzkETZch52beZbSrf9UieBENovmBP5W",
  "key32": "ZvT8KnTTTrjbXkj1wDXVu598ekF6NjrkeSLdy6KpTJawg5U6SZ4NELe2PDMmaA5Ek6AwW2xFjfeTJpTU3wRKdCh",
  "key33": "49e5diZjvmWbPg3FHLDEdBooTSbuR7jFT2x4hmEUYFi7zUF6Euu6dgRUaZRcSu2SPP37YnfvmHNYFtBPnYVgySXs",
  "key34": "kivGhGfbvLHDrg9kyjgxACyNxEkTcFsAaL82soA58a8yvorcJH9TFVAcgebN5rnRgaHGxPYV3FYRgC2mDDBn5Bq",
  "key35": "edfWxotgWaFxDYQFwp8mND9J9rdANSnLswaVeT4M8BrvhomxYwqhcDQckBXrNiAih5P9y1GbY7boW9d71eqkiU8",
  "key36": "53znS8h7nKpRik1SnUD5ywmqs4CGiumn8RWreipgxofWdmh1HzKyJKByhucFSoMEAx6wo9qjnWf1n48CrFxwEB3e",
  "key37": "67AG7VmUYmd9ZczSAXe8Xuu4dsXVDkerwyPB3ybHb2HGJfLXCeiZZ4ggtbm3Zh6azDUHr5a2hitbYy8ThAE7Vn93"
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
