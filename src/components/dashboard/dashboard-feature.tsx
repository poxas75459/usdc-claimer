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
    "4CgEEiKjwT1s7GeBycvSY4dvS92gqWTDDuWdYhJbwPt2YovnwEYnmpf1cmnMvSWMN2svwpxZyZwYrYhAjbsTxAMc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CbQNg1778BZPUca42mqTXu3DwstCqQ2mMUoxM8Xkf18RoCFMB9F1Ngjk2hnmk6hvo59fa9cL2HTYx9T4JtwQumK",
  "key1": "3n86k5NY1EBkS7jdyWX8t4sKKb1hdG9mxvWJVJE9tMMy3vNwvcNrzx8YuapkdW44jwVztRfuLktC4bTeJLcfXMSp",
  "key2": "pHYFNsa3bRYrVDAh9XrPGFiK5YgPRpeYAYZ9SwPBeJu6iRXegnB9Cevv4c3Zng1sKi8ECDrVHVKYZqPzrMy5v9U",
  "key3": "53NJf6RNGpoEiowkkqqFkWDuqxhVkMvEbqAZ9RjfSd2bXAbW9KNzW5TVxVscdVtiv5Eg9f4YDqXtHuieLLiiKke5",
  "key4": "55rXeE3k4PCc1BMZNprXYzcdFuz9iZJCp2mxZTjLV2LQQswYEazV1DU2rfU897UCZYo8UxiRoTydzFktL3wF7s4S",
  "key5": "2fntvyfezARBLMQ9Mg7pKPd16upKHF17pN4wctwYfRiCjo1emC8WWwUv8Vf6bbBXxE8EnmWq57i3T83W4Cgt24Xc",
  "key6": "3paoti26nteyy3kRhNfeQRq7PHX58j4Py4VqkdpkwGyjHR8LhPBS53sSn6CHHYM8YecJUcLgahGNuFhTDoLfko7o",
  "key7": "usBhKv9fSxbic5GhSiHQkKDfzgNoUKwGTnnZtFHRjvuFGuBXiUwXGBSfDjh52RuwGhu1WWk5eDUdBHg8YqxWpTH",
  "key8": "5aSs4Z9SqovZfKHFfz1hqJqVe1Tp2GXBWqt9is94L4uGEj2aoVrcQphamsJgoMZqAp6QjCHBfAr1R3QWCWsXGHmk",
  "key9": "2PfA9bQoD2skxCoS4pxh3wuaoMGr6XiizsKVh8VPzaj7bQ2mVTYL5ezpejzMDHGebNZwKjWipGsQJWKt2rJBjDxX",
  "key10": "2tR8ShgHKb87hfcmzR41eqcMwgyYqUZzUTWqrLbeEviL5A7Z5i9dWWVm5GgUPidoUCoP8J24mPmQD2o7XDpYaFm8",
  "key11": "4HYzbqnYZgWBTrmtwRGVmbA7CaFXHS43CQcFybrxPgzMFfDd7XN1V7GTSxyaZJFuPAfkosWLej3Zaxv1UTxWN8v3",
  "key12": "3W7dNYrUeYvRZqDSxyzUYjQhJ1PoaykqEDwjAStnut9ToNYokbRMqPSrtVkq1bQ2YwdqriNMrL46ycaJrX4LMhqK",
  "key13": "2ACf2U6Q2GQ6114NFXS2kDVfjiHTuSWsDDgtKCKY14RNR49ay5xnvBVyoUMxmWH6KyVRFD5d3rsopMBF8tXvnUZB",
  "key14": "H4jjicKqX5tZmVBLZqVuuoSwduoeu72Jvv2kaByGuZw3UYLWCM7b7YkJaSQ47wQA3Q4c8vHSebKRqKdr8e5NUyT",
  "key15": "2gjMpnk2CmstmRaBSgKi3QTqdEgGaHQf8sfZLCvjcXz8CYsRRbb8sgXkW5MsfX9M9TJr77THkag7ju6CzqR7SaM8",
  "key16": "5hRpU9BurtPNifmG6ozupuT9LN4oFyPX6Rc3dXS4BEhtRFmNMharRc4Mtfsw4cevo61sMv5AHQcWa9HJVSUmpCVK",
  "key17": "3Cf2E22fgweEXDFKHu913ePkiaFUq2cmfXs2LrD8Xt8yMCjUdv7RBDn6M6NLh9SqkgxGz6Srb1AyCXu1pk5cgHLD",
  "key18": "3TBBQqtdu4m3UGmP6uNHeVHCfSFEGeGjc2wXQxmxjrpCETWWmFP2A7MCtHJ4un5r9a29Znt3CLPZz89pTLkRSp9U",
  "key19": "zhjA9tPuzauqWLi3iJHessiuhireiVxGgjrNrUYqwdqT416KemGgHMPRMRxq81RsBCotfyy5eQyAQqFzdPqUPnF",
  "key20": "VKqczzqhN73UyGfp2A4zuPm4HWHhDZCxg8LiDsetCgFLxJ3BCdMZuFUEWkZyWHmuAp4KQKxkuom8ZDnuomsLShK",
  "key21": "4tdfiMq98h7QfLv8r3V7TPkDaSuTuhvqbowawaHS92LJ87Y5G12vLzVesQdp6AvTEnkQ7NFnN8KZDiaQwM5NvWrA",
  "key22": "531uMy1G5gmc4cR58h4BXDhdne4Qcgts8G12bZhnJQsBbwwcrnjCkRkMUR9NHeVZy1CHnc3USASwynrRvKgcWNzF",
  "key23": "3pqkT4usBCpB1Y2cVrSQJkDazrTRjWCuMVEgN7B6nhSSyu9nMAdBck8bMLaKgARWnuMnULj13nhWCzPGN47EX8vJ",
  "key24": "4QLx3aG5xdWneopwRXtcRuqvGSE5tjnRSQXffUC8Gkgg6r1DBjjKSc1BiR8fY9JKFac3bRjqjbwLDxVX82yMrqoj",
  "key25": "ENrPLU5Q5DyTtrf8PNj8ZC3Ta5pGUwEEk8de92FpYKs77FYUmNDw5kMZikKxfp4BwXYXUxANCJuv6qACYbG3mZR",
  "key26": "5ziC4qz968KMKcbRub6pD9NrFkWHF31r1Vsw8BgeXQ49VyswQ97BeD9pJh6rsyRyvEFZqJrn8qJZHShxjbT45Ziz",
  "key27": "jAWHiBmGzA35jJVu3cd98neghVu8qPARiwA6KAoWqk1wKVirrjfprLAkH6xSmzfm78yFEPSvbiPgWDwjTUrHR5b",
  "key28": "2TCbtDW24CsAW1zg52BUqprKPcDaUUAPse5CnTS1V9w1eaMvBUqshQiGcjVrsEpjXTbvHXYTF4VpWwtGpMwief5M",
  "key29": "5nd5yzevZiA6XEPpN9UL5vjW6DrbuHMtAYxKmVubftkqJ1v8WvVpLa86wquG8EZstuoZUWCXW2hbPrQYypjdA8hr",
  "key30": "4TV3AbnSEbMkRvF2ZqcAA3kMQjq8SJxpAcBiLVaML6kifJZofXEC6mp5JCBpRmZr3ArEE5Bxp5wDHw6SaHhvCgZs",
  "key31": "4tRfyvyApS445FHQ79XTwM3wv6nYZeWaCtLTkkzBPJ56wAJXHFmW9gvzqETytFbNiLpAagvJAHBCjcnhm5Wevk1s",
  "key32": "4MYYNg9ycjVfF5aY7CjZ1YTt8Bse4wq9rzNj7bufjAjqb7fuFSQQRZebhVL2JMghjd2hgPFvMuxT6asRKRzo8Wvv",
  "key33": "3xxf3Xo95nvSWzLW1N9UjBvcEmK7uGJ8qmPKGa9zQHrpmFQd4xMT4nr9ERYjukuADnbkivasCBuuh3P6Jg2ZqP1w",
  "key34": "TZP1KXyYo1TEV7qu96buUZ8bFTbxhGyS6Lygo8GjMywhgvDXsF2vfH7BFPtUuapFxZei5nUypP13HBQTNdNaZi3",
  "key35": "ECLGsyqHF2jBasQkkYTcDjUQEJaBSRyu8Mjs1oCutdqE5JFAHVTMqUGqLMHBxsd9d7a3CWfoYq999vCi9GGZtgR",
  "key36": "4qnGxFPjocUjAVynbwmRg1LAy3kbCHStW26fFVUwLptTrjGWwnFBxnyYxeSDSkjU2M3xrJCkhkMZahXW3KsGodyr",
  "key37": "47cGAEfrrZY1jUhWCeFJ3J4kRoS8MJJTme6ZNW6UmePYheZj7ReZXn9pBMV7KPsoNiogtewiB7PdouU1qMBRCcAr",
  "key38": "BJh6vNuWfzxh5yPtDNmoLcWhk24PwTjiJCb99jCjGW9m2nS5EpTvWAexZ97C9c2b3pMy9AyukaWQ9iBki5zR4sU",
  "key39": "2WFfu6FuCeSg7XgjAkh5NHVE9zE1KfR7iBbToLFUA5hubhRJUwKhJaAuBSFrBGMFsQ5PUR2Ct5hCAtQkFYpXV3C7",
  "key40": "4gXduynLPLF2gHcQkQDwckrqyEeq4DZNKvTpaAefFRn3wNZ8xDKfJqav1MUCG3uxgtnRjz4qunYvwdPSqJPv5ZKZ",
  "key41": "Uvp9Jwjp9FoNbh8twCQ89PcTL9s911hS9sxii26evmhKa2GrQtq6gY2zPRdvgvXGfXzPzVMhizbzMw6QkgZQ7Rw",
  "key42": "5wTE4pBLVMwe6ELGfVwEGmtCTdeTLHeDrqrZ1Hd1citLqU9NRJKNwnCN2JKeJFCjTMkYMehZPUg4WoQbhvXx29oL",
  "key43": "2TAkqLvVHe1PNGrYNGjRjCQ2uerHB6aW7R9JzMSys1qAa76CyN4kWD2yy1EDTTr7JmaXg7QMF865xgaNJJGMEc5o",
  "key44": "kQSqSqGshDocQ6hqvCzR3NoKEif7bNGUxudFbfudTS6RzfR1zGcc9vF3nEMvTtE3macYkXFMv9SP1s8NKTTh8rN",
  "key45": "2uhmMjdQcA4Thohc7S3S3nwXg8bK3TSRbVFYD2zpVhhHY7vvknohVvYBezwCZUh7MugEZRijffSautbpaE8mAcX6",
  "key46": "5iL4iUyya8y8uiVVhL57mUhmGtE9nNJCDx76BdX6SoFgCxyeaWqRsUNzRD89t84AiNCt5D26odT7dJYEbFE28K7x",
  "key47": "58u7jbziaGKYaByUDhY7UQsgb7nLBqV9JK3vV9jdyERK7xuKmPrE99iojLZFiWi3bo92oJTCuLjncg57Smu7HSW1",
  "key48": "5Frtmm5fJUxQ2riWwbhG7TNcJ7r4VegRnxpEE6f6YhAgadCpBW2Bcqb8DoKyNrGA3af98JPtkYtnBS62P6TuY3Sw"
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
