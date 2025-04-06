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
    "3zuKdqrwP9JWq6R4eXy2KPrGSyDHavEpUeNajM1dSEUWTaL9ABxhvZJAtEVe6pDPpCCqLZfPDYuA9sG1q48Kbo7A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QGmpYxAeHg1ebjXRDoAESzm3CrbwicvHDUPFbbbtGRFAkWVfDgHFeZcBG8DhJ9hjbPe2dRdxZoiA3f3UDQHXMnU",
  "key1": "61cjyd48TR6gi1ZgDdjAHbwRpTWUTQfYEBLqc4MtMJXBmpPkuTJgqX8C4HhTr47eKr5kEuAUQP6FM6w7p6wbW6Gp",
  "key2": "2zZfWJAmyXQRehM7gmDPtVyYgzyLL1KB6mnAKDnXohDwZidNnV3kfNHQF6ob9jxu62Uay74QDh371qAcM8EEsfrX",
  "key3": "XKWjJAGrbQXSUNbkhBHW3SprjUg1a1QRVop96GRUsejuKrkL2oj2NdKQWaivMDezyGxGd8dVD3Die9U4UK7qJpS",
  "key4": "2QKxWNVHfE2B55ioEDRWBpnHAthkKSiqjE5e7iRUL2Py1o36fBAST2XYwn2yJEqjkqBBhbsADfr7oggx9w1S7CF8",
  "key5": "4gbgeYqpRR6xxAgvxaA3KQL1XmdNaBZWFkk4TXTb44vxPSB4Lg7aH4kAiMJPTDevG2S7WpVMExRmy8JSjRUAUA6j",
  "key6": "5CUkvi6mi93vm8LXHfYoMp1E3itAu3Ys3a5Hkr7rP1hRzDdQ7fWikE5Cf8RMiEjpTeaMSmLkNNShj3voduN4g1e3",
  "key7": "5E9SpvEYsjivqw2GXr4dGSqFh7GFXJ5NxJnFYmGu8Q4P4YPLDcrtU1iQLruuLZdDTXXwtYf6QwefMaHM2cgCugaU",
  "key8": "vz8x7XvJKZhu6EELQkBdUNBNBRMte4MxKdTxFMpGg1mbA9PEjg9wMHCG6uUXnzQedQTdUXr5t5zgu6Fhc3QyE8r",
  "key9": "2fTZLgqkiByq6gX4RcjFDp1TdfJbjVLv1dAZoM9ZSfgfsSWqyAa76JtrJxB4qHhR75EkaJH2MZX6eEVRQoaUkcC7",
  "key10": "v36eKU5LnMQjFyzvqUJ6jCq7HpKckvU94NkNaHsLcRXmMmSwmvjFKW72XpJNNyN3FiuHYSzSkGoUWoFWHDojRUJ",
  "key11": "5bF2wZKNMzUzELPwqPHoqpr3MjduF4HTXhNntEUGgGQsq3eS79MgrKZc3RccURrRQwdUrxbWozzdSbK8Hgm8Nt4F",
  "key12": "x53a3ccuwTotuX3wzRyVx18TjjbPNbeDfohyptVdSvgzziJ2vQjw8q9FKAW4iN8epGY8Eqmz7piJGdzByw6H49F",
  "key13": "3pZiMNSJH8LzNjZhr1GtGfufm7bCbPM2caJrSPVLWFsgE6wUeKodM3nMckhdbpPoKNfk5chtwokDReCnND5TU2VR",
  "key14": "4PMFY53PVWtoUvWkCK6smnXH7Sn8JJkdfuxTXQb8ZDkob2JdmXtpHXgH6wjayozuTTq7v7zpGBdem7HZSkp9pDpG",
  "key15": "4vXapdMDt5x7UaSdmCA4YTKFigetvzRdBWFj5Anu9NKDC9cadcBhBhymYkP7Xd6QgfLPkB3psyXQ5keRsFVia3U6",
  "key16": "3A6CsFKy2X9wnLc1JonMHYsXoYdfoSW1mHGwjQhXmnp8bAMMh7QqCLrJbAuQuenSPeiG5AcDbTCwX8HTSotqbm8w",
  "key17": "3DcbSXh7asuirpsDNwR8UUBz82vC7iXECijYntSVyVcKs73KdtcADDRuk4iPjUvCWX7HpELfpiUDjHqutvQyB1LE",
  "key18": "26Hud5p4o6orZTjQUFDEwz6TsGTtXgrbmrw9zMJt1NxBG66S7H9iZ6oyP14Nq3u5Qo6JuviBZhRPVbfysDxyFBBC",
  "key19": "wwaGWTGV2Xb3DCdQhnLof8ziTqLPvRzmyGPpXvgyYcSCngDHJD4mEZhezoJXaP3jUHsNyA9zYsmZm4FmKLHYZWx",
  "key20": "usWgTofMXo3qMdMYcsBiU31XYRgHE8Twwfj1hMBeauu12LDrHhQ5QPUq8cZUWeeLjmpFGkTs9zcBGWaSU7kt4aH",
  "key21": "5knShMrR8u2cAn5k81XXgXU9TnQzAyCJMjK6YGeNW29JcTDSj389TgF4pDwVvNniJ4VCX68UxxumGf689sS1Wvc6",
  "key22": "2avfZmH57bRimLnVfWm2EUbcEDMFCgZbDLNTjg2sVWTyeUCqFiJhDYpgKXg4DfsY4pQV9nxpFjv8C1NKviUKHtdA",
  "key23": "617H1Si65taRXgLaqq5UoZ2RxTgT3iiZ2XQSzCiWcSLHrf1PeziAMFKpE1jPNXg1XHtw7VGujCMjkaUe7oj32o6w",
  "key24": "3gRwxRZbuu8winY2jqe1DNRBAmSH78irMuEx6ztQcYeh59r4X5jkfvpywYXGzYoK5hFGYT4Gv3qVGSxpaseKT4ka",
  "key25": "KLYoY9Bx9CKWLCVH3eN5gveBYhqCn7ANM1ZWQBFVJJJg4n3sujAYoEPJudR7c6udYzeoLnorqdLsu77pS781Ra9",
  "key26": "d5pjYWFmCtYKmpqzSYdCnUjG8tmg2EgFQEZu4gSEyjfPhdhsN2PR4xmd7PHqkyKeUkLuSbAmsM6BsnsYZb99SzM",
  "key27": "3SUZ7yWWvV3sppHfp4VpFwm4L1hKvQRYfVJ5haXS9vZj43rVvGoN4nWj2Ck4KJU2efyEKJfubYbDvdy9dfAqkoSs",
  "key28": "2NAZMuBr4A2i6KwBVcG4KiKfaeuHf3NK16w83EjkkG7UJ1YxXnfEhCcDsWusUyNaqRZGTExRJLn9EyeKLgrWBpre",
  "key29": "AGTMYXnayv1h4snTLqxT916TNA2iCx6NyRVSbngQcdYZQkL2wa4RLwEwLDQhymm89NN3RNoV9KCYMTUGdcVFRFW",
  "key30": "5ZtWuT639iVbkEcG6hNdVoDjf8EWNjhwbE8kZ4CQFV3UcJcV1ZfdzvVDGUJPVbhuVGi2Foe41bpiER36jvHtBkgv",
  "key31": "U5gQMHotRSUxVwUGpq5UJe9b9S9W3WMTfvfbV5n3gqdMqV8whRQKtBZ5bWRYcJyr1ixg6en3G6X66nC8YmMJhPD",
  "key32": "K4UAuC6iRBufa4PQNiqKyVKYqRQdafMTPJJdvJCffsVL9gf5kEiUVAAiVjDvJ7sjic914ZbCTtS2T3hf386jG5B",
  "key33": "5JTBXcLbKHE3Dc8D2YUxURbZXKnPQiVpJ5XnKLXHePCX5zKCuTZSX4DmYWYGPxpFEFALevjVLDTVjRQ4EJk8n9n7",
  "key34": "3XyrbrKcPTpCedHpAjXYKQqf1MMese6vxRu9fvNuvRKAGbzrbBv1AptEnZwQP9HUgEVfiJsy3vrEVfcsSWAX9QsL",
  "key35": "2R7wKssUKU7HEGwQHgzTac8LYhsJadRpjAziuxkCLRhbeRLikZXc1HwSgk5DxC8ZsTiw17fVgpjUPwstPoncaedF",
  "key36": "5sE7at7nXeXsiUmemmZ5LNaXtGKVHm4ixFNH4zzdamCoNHJRUehJ8ngmNUa1riFYXxy6eFcBVtriGwuP1eLFPJJy",
  "key37": "5fKKxVUn5JWEdaJVmyUaZoSmeEEBgxPWxYfmsAoM4jPdujgkLCcdo3oo7RTyFh5cdoGWJEmjnhMHMsAPXzw8UyKV",
  "key38": "3WCAyBfpPPPeLThch4LtKAuVcSFh4Gjps2cgDK1kVi7XVHjxDuGnRbsCRnk8FMhAxUGnNacrvW6k9MUJSJjRCybC"
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
