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
    "jYVeaaq17WqgBx8X91S5sty8Bsn9KxNnY5c7ChALBrpxMBE3HNZu8VzW9eGhQYgCuSmmsLMVdxdnUPvNBh7aGuw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HFgtid5cxuPF2hUWy5ZtiBr5MydxFMnS8UzoepdHAMAsm7K4dUFdewodAHBTyZPtwVeE3673BRNTEsLQNh67s3o",
  "key1": "3q5fPHAKoqEGGw7KL9bKoFF6Y37AfNk9bt4yvnKkmXsiS2n8Nb7WAwkA72YgJ2f4SToEFsA788qxnqqdYouAaUYu",
  "key2": "3zrBGUfH39tCL7gX5D2n9XNHM4Zi5W8qXbxvUbVNYtuPUYVSzka7uuP23ScFSSugAFwqcSaVBBFPNfc3Tm1gcFo6",
  "key3": "48NuyEA6oWnKskX71gEEmSvPLqif74Hzz12pvbStF8z8Q2cXRikfjPjA3c6Q99khFV8zQYB4vEbdzLn9162Tpsqz",
  "key4": "5P5uovicuvt1eq3QBDzbV7zQNP5SSSKs8SKJMFiXDseyKjeWLmUfSG7vR3VjLwkypdh63G97YkVKbPZX4UpqK3uD",
  "key5": "3oKtH7pZceMAxfycu7xu6KFMyddVTdGrYLyuvRosToq9UWzYzXNworvL6RXhrteqgUNhgjMFAbbpzDzopMqnNnEr",
  "key6": "59sspvKvVnWp6W2i3kL8p9a6StDNWQH515LsBav2jU2kLeJAA5wNWiJFj2ubfDMzx8nDVg1HG7HCdC7TrAXjRA4H",
  "key7": "59oMBR34ZnA7UsdZTqadCzRiV4AULdjbAvuHZhXcDiuANapAp7zu7W1xSikXP7irDAz34vtdq647z2kxtfi3wsND",
  "key8": "KRbx5Z1zqie1DPexMN48D38VLzJDHkaCNjt9bA4f9mnbkzbs46HhVxWRvDuec9GtEpXHbYfddcL7qd8deTKtVzq",
  "key9": "3ThmXfJv1wSE614Df9Ti6xs2nfwuo3oAb2MfFHWaCofyWtVeHRc57mfeZDebSeNgA1xB9VsAASUtUCTg61Xv6Bux",
  "key10": "274SqDvMQc4kfck3UD5yU9k87pAhK8TWZMxncL6bMMupiJggCDPBv2nXsP2oMpFjH8WN6zoMNYDSDNq1ZxUgDmu6",
  "key11": "4wZmfTtaY86fhpv8oQto84fdyUiBYwgBTo2Q5iBMWL9DMktTr41rgEQrjPpid6AFAQBgqEtaypueJHdJCocwnwdM",
  "key12": "2FUkvu9wQT4KNvbWoWJ7jEK31u28qMgsTh9rp3JRSzx94Mk2mfsei12qF5DAGcvG7s5ayQHYCK869yBT3ypkzfES",
  "key13": "1cVUHPmdr9uK9ZPxboZCm1cd6uugkQkANHzQSdkPcq8n4Qer7zWAMJWaicNEi9fJtPFv18Puv8jr92dYtcGwpug",
  "key14": "4PtuYg5biAT4KHxCfbu9N9eAJegt9bEnMCP6rRv8Mz4LhwKse4Zi6qSc4zf8WBV1nVCLpRwrDBJPLYBdBKPHLqqa",
  "key15": "4WoU7bMiEMYsXFPpL3B76PGMuVXAqkio72TsAoRwvnkU1iwzu2da6wPk5dww3eGxxzD3y1w8gyEGtnRxUoqZfNU6",
  "key16": "4pE3WDR2afvQmScEW9R2mP5RWH8VYG1cVaDEGiSVpXwC5HNn6PXy1pBWE6MW4LnCZFSXE9f7WdmYbvbonA9Z8Mwi",
  "key17": "4xFwuufXEYU5aBvVyULAC9PRFWdC4GdDxZf9YRPN9oBp7Na8rVDkVxrU7s4tX2FxNoAW5XtkbBPvGb9jXi5oC3xu",
  "key18": "5WPc5r9Z87FWHhP8adtVKf7f6377vEfSbBgEgFqynes4oZWWPGq6j5sf9G6mNeQREMJQyPJDw1KXsx4yntRr4vbz",
  "key19": "4Uv9ZfUtVLPrigSk5TbHSRJ6sS8qkHe27xvZVsTwPF4dHri3xeML7fPgyHF19SiFH9Sh23HAtbaNhqsFX7KEnJzt",
  "key20": "5Nr2pHkskUAdNwGejxZdQyxjeGLQdQu12yCqrrwAd47R34zweuaxGVPtpCqCnEmc6yDMp4BvGQMNrkvJQUxtUTUX",
  "key21": "e6Q26aGD4MQ1NC8BrTrz2iMV3xUqKV8Hnnm5TwGK3T6DpiPQHKJsBR4mZRbctPYQQCTxkCFV1fdDXyGNKogQmyx",
  "key22": "5oDonsGbNvE2Jd9YCTP8CBHhBcJ7e5Ktppgtx6rSyCSfq4QTEXWjkZKyFEszy2XnoSdruKS3ybJxTYQu9ese3wW5",
  "key23": "2L7rFtgSBe1xFMiYcCQgTQX9xUcVJPcQrCwvdBWe7NwqZJrepRbgKUPdecd93yBvL8pcxbEAtFvXNRZxTjW9bRya",
  "key24": "4YffgMWNawfQE292QTBZZBpqyzBgZ4zKNinK1g7eCzFewK8WthFeGoy7ug18hGRpgvc3q1DhSgH93TwUkt2Bm7sE",
  "key25": "2MjnDp4WmU1TjA9zW3srGUp5a9LYkYLpheC61w8xgka6UNBY53Jm9JDsnfKmZvSPiFLiMBxpmURAt61KAvPvHT9w",
  "key26": "34AxqT6qfPU9t7RDpdr4m72AZ7mTiDpQoTvBxy4Gk2quDHakTbkjXpqgseChCfr9Fw4p6Gw18FwhvJg3xz2YUqXW",
  "key27": "3ahiKstJPhpYU4ymRcPKobmJ1knnmC9yAbXZHJNEJj12fueVycajeWRiiFtLP2sgteqLJtkDsa6JoAcPuNEnMQp7",
  "key28": "2NCr2zzotRF7zRyeQ2DqyybRJB9wBiE9FB97gjQzYwvescQqVy1r2QSjZGryS7p2utFvH6xGfv5PmwwqdeK97vXr",
  "key29": "5Pjyen2JXCHPbkjwCjk1HTvQdjv6jhgrHDCvNnVs7L2eGuMZaWaNg1UZxT4kTtuhKuAjXS6Ypx2D8sifQQ2XPRpV",
  "key30": "5P9ykqbJ1yqv3oHhjSZykxYhRruoPk4N2ej5La5FiVENVv4ZgKUzcF8MHo2qhx8nwvUs8aXWiSsp2FgU3bXyBMig",
  "key31": "22hUFzHbwSv79QGgVzegd1xk27FxMvSPz7vkPEz8C4jahBqRzEZ996jWxWN3jtmLD4sTqRVG4B3B4zsEZGL39JCn",
  "key32": "Pq23ykvZKquvx6JnQYid4ACnPnreA2yY7FcxFdNEYeAyMxsBptmhupTdiW7cuFrbCfn2LcGq8EBKBQtEEVy2NB6",
  "key33": "2wwHJtpbFwxPEd6G1NsbPJ2XM7ZJhPzQ46LEc93NpmfCBJtuMQHJEVGbfFC2DuTdDESiJESzx6oVQxoK5mqL8kKV",
  "key34": "4gmmJRcUuT8nWpPT5GgTgB6QrdH9ZEnFj7y1Z3iuApAa31NhBfYhcbyAVoHxZw1nHztGLbzv4XY8CrrHvVhiQ3jS",
  "key35": "3m2J8H97ioX4SxSi1q4tniAeWzxSGhA1qgjmQJfuAAZAQAkRek2Zf4hT4VjhvVW5LC11tdwyF2MeoEtcWfZJEPQq",
  "key36": "5XqXhQR12mg36H8zFWKEoRpQqd2XPTeshHbDufKd97MvBy1TZ2EvfE3yZzn65nDSZxawbAbkXXT2BAsiQu5WQTzb",
  "key37": "5syqS7NhvhK5TbHSfBsZr9YC3q5ANTpvXWzd4d1FQyJLbAM9Wg3cRbNWqeAHEcLsczLD7A4keoqyfwZzDcbQHP9u",
  "key38": "4V6SfXBqemexgT7vQSoDfdHxfW6MrQt9mSvA7tpPkXzpueDnRmi3bGdiBQpeq3pXRRUcAzhxSKmke2jSeStjb6XH",
  "key39": "5aNbeTVFfrt5KmwfZmdVXoQ3RiVyCbk6k863m7jwuxfj4yQg8YiPqkdwvs3fuNU5551cxYzwwRXptXQcNB13MGtf",
  "key40": "5MptHg5McbV1aKZYfK3CtZHC8pfsx1Fzoe1PZw4fsRbcdEZMaiN6jALJD48dPNBoymUK9TdrzAAxGCdcksxeZnXe"
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
