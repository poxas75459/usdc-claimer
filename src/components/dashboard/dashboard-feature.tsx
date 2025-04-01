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
    "5VwEVr15P84b8jfChvzYSNno3sSi869sFPR6y24NDzyK7fxXizYaxrY9gDNcViPZbgdnvV5uGtUHgtr4zU3EZyhT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gKRnCpE3FTX3zMU5bYgh4z66WtiChnZjfvobvpTiXaopnnWxTyhoQ4tmdrWb5YBVipeB8oMgiye2biU9NNhcM1w",
  "key1": "3XoWgXZUEagszaMEAEvbb7rJuVRTufaBRduaMfqg6CazR28615su1rYWC49VFA98UcgGY9C1P3qgswaEdK6tUJQG",
  "key2": "2H1SkAHRvFWcSinSaTnHLna6nownLGnrxbXxy7i2z6FZ38VgA9uVvyy6ZbdmripWrJb5zM6sVFax2VJFuDwr7zYr",
  "key3": "2d8GtpwwhfYr9ALuXFSFUitPTqVnCKv1KLamoMFbSsYniAa4Hm7VAjVjR13R85P4qRJfBxUYoaJK9CE2oaK4xaWF",
  "key4": "27D6LdPLtnAfoGUy6b7739jmwV2rLXgYs5jSxMctvzLUv3pWAX7jW8BkrFfGWJkfp7k8hrcH4bveHVeCmtk5AoAr",
  "key5": "5fEtpCuZtTnKkUJbwvRCwytHCrFjFUdkoikCzbQXx6uDkEAWrZ5AhLyqToDKyXeiFSLPGezwXVajNL62iY1xnnLd",
  "key6": "vEdk1uffxZspAgutHBapme6gUChWcLvoStvy1wYERpCxpDQgdpm7b1nhjSMN9Fx78XkUmb1hMRmTJ4Kftp163wq",
  "key7": "5kEYvDJXAy6AB9AfkYrs4WZTNt6krziBF15MEvdLL8uRQpwWZ55eCRdcGMa5Zh2MjzdH3oyg4Z6py8qsJofqcuuR",
  "key8": "4v4336kJbrv3Cs4tf4NDX9DuMZPKYzENUkKKrFKEwArbCj5Yk2Nr1fZgc84LXgcKNZ5DeprjiTBsfoiy1RLdQCj9",
  "key9": "442pUBds5EZ71XPzdy9fxzECu2hyRzQVhU5AE73AVZZ7T7KTRb1ySQ3a3QdwuJ1ECV5DnF3L5LuFBy2VdWNvTaUR",
  "key10": "DV21P9C67o19BcfFUE7En2NgDRFKeAkw1pMPnTGVPU6F9NPmdZDG1hM1a4WD763Hovazz4kp6A7bimBA2NrCuoB",
  "key11": "3dkUKz8AihtBC3VKbs7r7drJ7XgwYKJRnDzizm7QAfm9NR2Z8WcPwaq7eXfGGC2T9qanvcHc5qe85Fo6Vc53ZmTv",
  "key12": "2p45htiLk26fPRUFKA1PgvQrfSwPDreYZ14JuzawX41no6GV4N9nUZtvz9bfesANAh3FHUVy8T1cuRXkZR9o6oyT",
  "key13": "hJBHGh8rPCs1r2gycHXQUo1wXFgQeBsqmtfvcHawc6oWy6T8YH33mz1KwW78QVcsaUf8aXQSYcBAk9ZZhViFAET",
  "key14": "5Ve2xpgpKM8buinzK8EFsrTpGNETbwHwNvX1SnLk7TTmMVsZHFCKq2pZ8dSwwz3faBin6fGNthQFh5c4iDejx3Ce",
  "key15": "hbs7AVsm72Mj1hk81c1cZi7waZ4zPjbQsjaL5eoRcKnVkeFXXjd29W1U2o8rVeNuXZiGbgndVHRKgBPTmPksGVi",
  "key16": "91XBSgD7DcoQy8J6j7GY6ctQtes4VVtAykHuoM3kjgRHTS3qGBei2onWvM2PxAvF8vSJKVQUR6F4t3ewmBvHViD",
  "key17": "Kp7GL7ApPDMcw9UyavDt8KWE7z7mV4QQkcZeW3McJXqPmuXaMcEm86pgxF6FyibE3CT7Lb91p8DmTk71r7yceAm",
  "key18": "KFLg8x7p9WR29xWXC5e1S6WCAcGGQwC1sLSFof6tEFao3bQVCr2Z1xiQ8KxePz2joPH5TWUYtNztCusVyZpa9wd",
  "key19": "2BjU4jvgoE6ZTF7zK4SqFHhDAg72YctcmCbPxFNj5SX5hWdVX6tfq9cQ3kd7yBMxSKcNHtQ6SAfUR3e9gpb7xRHh",
  "key20": "2KeBjbaKU6wQJfDFSGJoj86vbpTdaAG1qP9qMf64QYAjGuKEBu6ULURav5hXamvNzG6rNAniv2THowFyMqpGuhpA",
  "key21": "3Y92GEVQ8N4oh58bryyoXcpRV51tmqGzBD6q4knREHy8np5hjEJBMiH5Cp5FFyJaF5ym7LrCoDv8ktdVubYKQq74",
  "key22": "3juvxvipqSjjVZom8ff3ygxfU9nr3qECwpwesPhHqWPJemfUDSjRgzFDbh1np1RpPQwQEodNtTMHYb4C9yR3pLQo",
  "key23": "5zHfCgxqWZETNPw1NdzzAZGGqRCgBRUdvkFi3M4TVTc4pwyLZtrox7xWhz72wgnphRZaJ9GEeZjJYr29hR1wEevX",
  "key24": "hq8RcmLZyw5HnWW2bWHhH2db2zyQJiHX8BjuLp4MKJvR9v9A13D725FV2MF1qYfpNBrReRdwo4oGobKWE1SztR5",
  "key25": "2hL58yvpsFS25VHF9qhKG2bwb9BqBoqnVPBpKGQKqzatBYULUb1PUyaDmqwfxozR6ngJJRSxEEgAZ7SyN4ChdkvT",
  "key26": "4f9PTsV9C9F7bS5hbKpKvZgrxxtQsKpddx4AMhyZoWedGfuyBmHPYRQMmJsp4Npf5TCYo7SD2a4wsLWzvhixkzLs",
  "key27": "36da1mjSTR7kU6v4PnR6KxjUnYGaDy5QRgrZr7cKKALJWXngaeDPC49Q3WiLasXPTxC4xz5HfnEZBk3YGRVbVb7u",
  "key28": "64MjLFDrjHAqnnTbWJZKuedRyJZNXasR2SD5p4M7mgxAYFHjiYGrf6nscnn9GNTREx1U7crRDsXSirJSprTip8ML",
  "key29": "2qZQLxtKBp6B59a61MwDLDTPFUhG1rZ5BbgDFS3SDMzBYBqZRcyrQJ2ZdmjCkRgMdisJDFCgDXLoJQSLzVN8v9Wa",
  "key30": "2Fkysbu8frCUpqdezsiu91sf3hMvHiEqoVLxgAFsfg2ycWbwVYD7RPtSGFdFKkGSNrr3Zp9febELRXmkwqqFJqUv",
  "key31": "4kUrN8w4dXDmizaunEnusjRq19i1iVsvp3oh8wLgRm8bqv3V6ik7dCTXKxjxKujFa3TJnXYLg9fcSBAWtUpR59bf",
  "key32": "5HfhQ1kDQNGR1wPpUuFPkyzmaAU9ihRvb2JgLsbeLSMMHD6GxFjxGoJ4asFTqKypFWKfo8gj6VfRVbxcgfafU37b",
  "key33": "DiEGsk8oeRua5Mic7jS8WvX3a2Uk3M6pdQxjPgsxds8MqUf2LEEoEGzXU9TXwQNdw6Yrm7V3h5JHXSHTfJ9dGt1",
  "key34": "2Ro4Qe3P1kDWUpvMLWm7KvyXSk9QYYXfdE8WzMVa6zbgiu1b8kNPKnLfcQGHVQpfpyFDg4nPB2EQcFp8e7te3WZX",
  "key35": "5mN3qZ6p9sveuvizrqwWsX8Z98mSTCUTtQgwu2ZpQoeHyT78umkeHURQc7ycQ6ncdHBdBxJtawjFixgZfnbvwmor",
  "key36": "3ap86YWRTiatL4MqmditZCp7zpAg7ms8bif11H8VuZxvD9b56sw7Wq1wEEgiB4FsQW5bsVLhwkbPgptqL11xqX8i",
  "key37": "2wrrL6BX5j7muab86iBTAkUfqhckPMFv98bccFox82PEGyLAREmPcwi7VvoedsR8Ted27NCVAuBQszhy5EkbTf3e",
  "key38": "4eeKVLopyVdNYxsX6z2Y4JFsBJMmVqaoijoRUCCvArSX1TtqEhhZCTJtfmSQhPZ5etPPY8K4BuzSE12vLd2qkPtN",
  "key39": "2b3JEnF1BgB8cJeLSXr7hFMYMzC4sQzCSZuCKdmS5jp8U9MVueNBhSLu3THk6XERMzpVSBpWSMhVSLfeNCpyapTr",
  "key40": "3pj5CugjVnXJ82GXvAjnpEbFrR1kbn3dUqL8xRmD23H3heepdTLmEHCds4M4B4dgsstVnYcyqapbF4piT74VTVf4",
  "key41": "a534nNWJARF2GU3ihNSpU1zbciHTFVD8vxYhwGHDtJAmGzvsSVNEhafvB5zmGwv69PnGjQp2Ejb9BGB65pj69KG"
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
