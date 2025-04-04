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
    "EwLXG8rsfR3XvskiQioWnzfNe5WPBbR2EvYnHSxFqzgn1zsGvRtdK12s8A6xGndyYPkA78B9H9CkWWZiVRVw7ao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c4E3WKCdVQWFxFroqejmBdtoDYip98oond4nwY2vmrWa3xQWxaDunRjxWY7xsPwFcbcTrp7NqgEu8AQ8CFPk34T",
  "key1": "zXe61qgFHW259sosUxkwZgWFhQNbBCm132NGKdYFWGv4fmiYpqQLs5dNFtdn82tjS1xGxSiiD8AyX5g13jGrWdV",
  "key2": "3JGFeUHFH2aeBMxe1jzLrDhMQgpdWFKrQBS6hrSSbaAF6y7KrURHcyqwiPbbvSd9TU3ECup6PsBwNKjLwYgS1oG1",
  "key3": "2gMFo5PCPjyGyoeXaJqLctGfRbbFrCoqBQBiVTZZzWyuFnxohf6fePFu8mwLf1Ugv2VJqWu5g1mRQybaJXd6VHm9",
  "key4": "vgyvMkVmtqrAr4A6REMNt3bDRNUrdHg7gVGPsu9qXRss9YcFyvojXuC1KxUvXKyuY6t8Z711GdxyFCR7eC99gho",
  "key5": "aFMh5vPWRReQYZD4rMztXyxS5Wk6FkVqDtSJp3KuJJyoRheePdzXVQkv5UiQBNGq5Apz2zMW4dp3VzbCffXGgzZ",
  "key6": "5od9uWZstpGpSWRzG56E9TXWYgpJGESeYacjveSQkvM1HG6JH8gwNos42BG5Nb8gEKBgsKU86jkyghrsUu86fLBy",
  "key7": "5V9aN56y7XYh5poqj9fVHWR9peDVD17uN1BvpbnG9DFNbxM1q9Hecs16nGoVgz7kcku2y4hiZrnWC7PfECpNrCGV",
  "key8": "1gn7JqMyFE9k69sEPQDoDVigdD6uiJKjYrXFH3CZGgY3LPB1Ba8ddfpj19U5a7iXb2bGZoZAZwAe6gh1U3kXwaw",
  "key9": "4kd8nv6Su7UUHAt5zNioWUN9JmTCHZprt6hZsQaZYh22kKGt5XZ2ZQ775S1PGC7odPTouvzXeffxqACThna2d5oH",
  "key10": "53sUKU25KzfJYGbAyH8grx9SzY1gootcBitDjQtPin9jgPTPqgiQSgH7s5PfJDZ6xShDDLUy1tJGxz6dv1Nax7PG",
  "key11": "3tsiRwEWPm15mYoosutvpsMwPmH5K7C7MEPUZqPYEccQgD6jWdwFpAuz78cFNm244nyyZuSEMmm2XHvjEiaJDfdn",
  "key12": "2w1TFESJX4AuNF8aSK4N8egbY1Fh5PVUGSXvVrFYeBREuQvNtJUiBEpvwVjgg9i6eDykCHhLQPKRGfv5CoKJD7BH",
  "key13": "2ES4EYrUpJn3fTvLRrsUDzZtpZUXngVzoCE2kioy2QpLEg6cufyWpn3n2fMxkcZi4ugV6BRWrUX9getkZyzyu1nY",
  "key14": "4CLA4axF95Gc72hDpmiFZD7D1gi5CZwPj5PgRgjJTc915JVDDaV7DhN5RsbvJzGDHpAP326iHqR7x57J3M4N8jnp",
  "key15": "2xfKiicwRTNgbxETojJspZmWKXNDC6ndBg1Df55MhpiWuGoZLkZmv6hFF3Fp7uEYW7k2xfp2MsTUafgiXBBZSCpG",
  "key16": "4Lz2dCaHuXXJhrSmhRY2giTLc7Ys2mGKCYv6WtGSVh2hb4j4uber58TsWsLVNxHihe3KshHHhYgYoqbnyp736kcR",
  "key17": "2oB184VfKiDbdoaDauvFJQw5mqfJcqWgch9t2QzKbbXJMK3XXGFmWoQeLXmwvHScH5LnWyZzwmHE2Ag3mYMMuiNE",
  "key18": "2Ar6XoT3Ei1ZmMYKebonFx988FVE7xbEoT5wQtkPU8WYHMm6o34kv38VpEkeiveETqZLJkQVKr2x17Nygfb4rMAo",
  "key19": "Dbq8FGBJkz5gacPAhxpXVDfsEcTTpH78qYT6tpNy1N2KQgh9Wyon5rMbanLLsbqiRmD5Cn233s3J86tLu9aCit8",
  "key20": "MmZWb5E9Gi2dLxpvdyZJQrxf2XbQYjxUT6FQbNsGj9B9dU9qVj7v9G8Lmem8dEAARfqCAWbgXVdNeqPvkj5n1N8",
  "key21": "2UsAqudA8XJHUGDPpGB4qMtQEYhb3RpTV1t9Vnab3RvYxiPaqJJztpT3BU9Q9FXYjqefHjXTshCEnJQMJfAUXxJk",
  "key22": "4GeiBpJbUBSCHacrsqvUGf2RfSJSxDhYApDcS7chhK63L8UhcxdgFHcx3hnLiqjLMTmoVEYkbuLb9ZVXaQnikjEA",
  "key23": "37ZsqKAzRXrxrSAVqEscgx3KBYMYBYkkkBBkoc7CPSS3wtZsDr7ufS9LTUdafzu5aMoAR92BZTHaw6uQTSvWe9Co",
  "key24": "4McuP7Mya1X3JfjvaFkaoNj65KC59kJ4sR4WQQCTZqjofgAo8xJ7tAxZwBmgH6jhTRo2WQH8HLMzP4BakEhVgTAp",
  "key25": "3xioyEMDBmgsK4cZrHXmCsikFQQgtLDYCaNvaqttfnU1ZLoXULdk8YqWRzTcz9umqWDxLgyWARNWsBkmnaTaaDnR",
  "key26": "38QQCcKa2znuc9wCngLXbZhCdEMdP7eyHZQUjG8CKUqKx5KSH2pBk1SmQJfdT8Cj9GvvRvhDouwGVTLAv6JfGeFV",
  "key27": "5stPjce9JPwgavK1cLAbdQZfjxtCWN1zpFYs7tR1gahKmYUU8UHuDwf9tsKRM2X6H7Q3jdgJcVUekuEtHZZWkz4u",
  "key28": "61Dstd85auxxVLpnEkEM7oQKMp7UVGHr9c9xvTBwfjfgBiEuKT7PaignG9ke2q724NLWseDuZ3pCT6nLQU8geFUG",
  "key29": "2Ag4MJJEgpB9ceUsZypKpy1jpA6eokeHyXyPKHCttNHZkUn5fHKH6zX6PXCAiAYGABYEEsVWp3uHEGL2KdQWRmVT",
  "key30": "yHS9X3enZMi8nxySVFXg8kTuYZ49ddKR2HpoMq2MqFPhgEUBwm7JzcbwbicJ4Dty978Ji6zzfhTCCjTd8gcHyRQ",
  "key31": "5b2QRPiLSAKS6BjvrxBZvJvM6VaJXnUBxh1Li4zYbBT6Js2XTyH8Q5ip4GSPRVHWW8ySsjVEHxRHhzBU7GtvyHin",
  "key32": "2p5xXceBWJfyR9hckFZoHSTjtrCEjsKjrRPJtjZP18tEQcHZF8gY686jmRpxaX7dE7CHyShVKsZ8HpLb78d9Lf1R",
  "key33": "5CJS3dMUjGcJkdEeNGwDu2vWGbpkd6KrbCL6zruKqV95RiUER974UZnTzwid9Z1UDf2mZMdGKHXfuWpaGzhKdKrh",
  "key34": "5pfZuGpHadCYnM6Myaag1AjhyRAKFwQvkYheLwDFYMj3qQqcteK3ADEAuq54QdUNY2bDQmYcJ5usWBjRRLKUJbGz",
  "key35": "3Az27bPRkeKFTkhSYtDE4xanpCU2Y7zRiEWDusGd9bz5LbPTmTTv4PGG9many3aptQXerUPTbqojSo55CmmDvUow",
  "key36": "w6voZJJ8Si8uiv6fRwhM4R3dhjkCYJNKUofiTyunxLevmtWuvRTckukZW7YcCNYgtSMYsWcsP1w8kYdNk54dZvu",
  "key37": "SFHxmAiZR5C2LDMFFLfaDUo9t1Dw8aZijTPCwPZaQURYhTekoGNkRT4Xf7QNuqzPNsYtFzYXbkvAxxRmTUYbHSz",
  "key38": "4ZnCnCRNtM11rWhEnCZpDqCT8TQpKQhX2WkSDvtqDdASZgnspbvgKmkosh2gBEN3B7FS7PuMqKBTYqUBSAQdQMsA",
  "key39": "237qTqNnorkwWZja2ovdjWZXt1RseuXtZUun27AdA6LXoVaNs915qrVvSCh9CqMy11MuAp16G6zE7V212EVc3VwF",
  "key40": "5peJAwJBYsq51GgBLKjp7wowijykEG2MUCY8EdnzDSmyLcPczYFG5nCMsEdn5yeSUCj67qDqCBPsaLKeKqnRFW7Z",
  "key41": "9ar59MvQg8HWS7nqqWDf6rnBEaaaiT4Ni71fSrBsbDoWbCp9VcY7pwbEkdBRPhQLrxvDxgAQtSJsJ5szMYBBDWj",
  "key42": "4X85RTQGGcjcVQZrEZ5R3oRnzDLCeds9TVzshSxKiine4idH7uTiA691NCdqVdRtUC3XgB41djMCDei334Sh6zvU",
  "key43": "DUNgswQAE8WcjpVXWudFb24FqUECGcFJRNWY9zRELW1BBBVBZUCypubfivbLsCb3uUmG5tyB8dKSk2mGmrCcx6r",
  "key44": "EAnzc7CcuecRWTwgQ9BAwZnBJZjdcXxfAQAmSrxM2eQepZTDso35qDU4VXaB6aME5cYtav3NSEG7kfCNMRnLzZq"
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
