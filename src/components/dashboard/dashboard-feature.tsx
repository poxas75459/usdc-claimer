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
    "4HtsL6yofxP3K7AdZpLpPmtq5SjRELSvbKMufLL3xG6CKFypkzSD4JcXT5ab5qhkkYuWmcp9fhWsNfbrQBxtxke3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "423im6dSUAkdbm1YmZdFWiaL6PqrxDzNqbfxGw3syoJJamcNF2GYuBSEUMp16Zozr1JNydKKdvuJkfQXF6zSGjof",
  "key1": "n8hR3o4zeeHYtF2YpPmev3DBv3XNpuRS9ceUVgvfuy5qYBTx2ef13ZRZXH7ZKLz7D6RyQpe7hVd7JdiGViGb7pY",
  "key2": "5Ngszmc4qG1AAk2r5WKLMUixseKTGY8p7shU84eoyymBgFyXTi58hyvcZERMU4SKt9QQsTvqpmLMiuXYs9r4Po1h",
  "key3": "2cGxmoHi8c98vkmFnn2Hs8GQeo4r1rcU4rf5JHahAFx1q2NSUAhJr6BbzsH7QkYasyYCXjiSGrcmTz2dJdsDkeag",
  "key4": "5upni8NrfVDcEXYKT1GpaQ6YMdrpy8iENfSGaq954EGPhmbRUJU8CH4RXa3YxeQCYty73pVjhbvKmweQA2QiKA1e",
  "key5": "2aY7a4ZKpkTmFyHMQreQcQeufAiwXZ1NcQCFwyv9Z5aqKkrMZsZYUzjkpCgTMXjZfwJpSHbL5Xc4k5T5t8C3shPb",
  "key6": "2VYcTaMFpqpryqWSGtnUL5v7Pt3Xvakujviz2XBabhAUF4L4ybiAcGPC8Lc2V3fwScw9CM3GFGx72yEqCYxNiuE4",
  "key7": "3bB9HaAx5eJbYebkgmSVvkzJsesST58iDjSAgztmHYLCXM5o3wUt39JmmEgxPiM969C6PRncD9sCxFtwFcq8QFoy",
  "key8": "f1qARYfVBqXmbQ2MSFui96uS5kL1YWuHEtRsWKHZ3L4ASYAPEPqYMLyLt13KcdL2Y29VZgZTVGCEbh7nbdi5U8Z",
  "key9": "me3P4dfxUhwCK1vtneSACGq7gkEpzRF8iDXp1c7JEABac93FuUoXunPVYjKXGbK5225aYCWmpxWSaxxWpsWDpAc",
  "key10": "5b1zDyLx7TGhKq5bMHzhmPk1vLtUfJpzLrgQjU9JyQa5goXFc8F93jcm6iKcLQ43ddNiCxsFAXeZxCckgCvNPR8m",
  "key11": "2xwQkbeLzfr86FwhEBjuiggW7keFVA2RcMgKQojGYwkAcPsWU4DBgGqCsKBX7VX8oMdJeyBMwqaYTUDxTAkx8eM4",
  "key12": "4mctP2TUAokQP9Yis7S7eY8k3ZutzscsiHvcW4zzLxGj3CcmJFHKmkYoS9fnsCX6ZhsGe8gKkwiEzS79kF75sKJC",
  "key13": "EyGVtwQnCS1iLrpdxtqHdqoxjTTGA9LcFQwMbHKEoJcmgW14ACFJ4WBSHYWPVjE9kKKRXEFRNbRAMYpjXQQm2yd",
  "key14": "4e4syxVDZZBtiqVSqqyeDYCp5CqTJAEMz3yWNePneY8XWSgWpgZdJ8FEavZyPb3DWud96hquoVrTS3zNLrksCvtR",
  "key15": "3Po6z8Ts1YrrYoFHjXrEiwtxzLnAnnjMsd7ojjJ7nePbp2D5EpheeFDhQAwXRKg2WKoCuTXU85tE5Np89tBXorn",
  "key16": "wMfTqTN8E1Le71jaB9PR9JMg4qyX2LxGVcMaz38YaVy8tupypUfuju2FyopEQJyAVtN71gj53WnVcTamVALqxy3",
  "key17": "dWuSk3ifsMEzXBhuEpziwEuvSFETHP6bwciPKp1RQgpL6bacd46R8ZDgQqqHx6ywLZ3qPC54RU8zMA2oM7Z68h9",
  "key18": "2DUStTH7nGU94NZNxDNrn2pVrVDppBPLQ87T5Ei5uTNRigj8E8UxbcvtnEufhLswWpiiqwGk2ENvANxfq2m5zEJ2",
  "key19": "4GSMm8KDop5xScosxk5XBmG8N7HDhxT1f93KGHs5NN82dwpsZ7qgQtKtEfga64ETJcS9hf12nJ4Qkz7CGNJyZSa2",
  "key20": "64FDm7TyqfKLyVrfgTMiXmuxqg1SVnxsNp76TJbuUwjgVoGCNqqoixm4jrQPF8YvYZHE47TNWBgCMLsQYZHpBXBZ",
  "key21": "2B17X35Vy2ij6FJNNMUh9gxGSMMqpu6TL3zDDNU23CVY62VZZ44RVQpFDYQJcLehRpQgHS4XK3ViEkZe7vw7u2nd",
  "key22": "3U6ApGbUFknedddimD3VeEoLgu8ck38ZiZenpKkaf2ugSf1dsTjSyUXmwkbFeCMS6GCmdXHHbhrtdNx8xCcX5A8F",
  "key23": "5wFy2vavaATeeUpJxsEryPFerV776gcyyGYPpMiNJHkyJqatJt2c5xFaRWaMtx94P2oVuLtKmb1nxgyWSfKjEytL",
  "key24": "4NM8GPrjPUsfmL8W24eeoDQQiKwoR5cs7cKcravG4k9J7mmPpHZFXX6gFbd3dcbc6u72q1zQPbdAqupM4YD4GDR5",
  "key25": "2dw9UXrw6tNiwriRhh5yktzJ5AZjTq1XbYLxsn8q8qMbZ79HNvEcGKy1K9iBwf6Tozv26ZvNwKEicsiXvcZXvCnJ",
  "key26": "4HBaDCFoGeFn2C8L2NL1ZFHU53gGMiNWey511HssVTM9J1a3Ajmc6Q98TgDDhKft13D7nJUJQDLyRJTrMemSQfQc",
  "key27": "2xRYR9h9L1qCrQFKCutLfc7HKaAiS7JxSDhuWLp7si5pNnxco7d1VpGAaiBmqdnssb8ESDs4ajjPosufq7Cvsm13",
  "key28": "qrLCUpthas1ghpLULWLUkyGtNQaqTF2L2wcHxgshMLU4aPy9dkKBDwaK1GdNgnyAmvDTQZqDsLYqLHuH42KMfve",
  "key29": "CoYb4itCxLjUWCNVzSBYk2qCjGNVsDrpLbUKgD2BM1SzqdrjHjLxKuedPZH2PN8JvRikB6Y7wxNv6sSCH5F6tfF",
  "key30": "4VWTUdj2Ke6DvzprgXwCdKUMvssMV7F9vXjXAtC5qebUas5SfA2WSGuR88E3H6LRibzwKhWd3gb733hY7qsvMAsm",
  "key31": "3jWwQNAxBNzwxUqbwPFKiJVyuf6pRheR2JZaFZbGz8JKk34Y4wXTA7y2Va89jUBBKdPNg4Tfyjzsec3KyYwF3Xb4",
  "key32": "5QAt6he4GuKCKo6m7wEme6YjdHssYSypzBo36vMo3rtZasgjy5XaBecaD4hbM6obBXN2wV7n27dNhECipLKwJwxe",
  "key33": "4GRdqwfdoisQhbctgJ6ogYbY99aQ5RXy3M9swWNHU3ksWT6gXHnPCScZCJMxtMavMdGiKuQP6x34D6jutqgFDaxm",
  "key34": "t8SiM3qgaqWzsM9jpR9sffRF9V7s6YR6CKhnpCSP5SEKcSmriTYuxUAQ879ww4KbqXNY9TxzR2WGtz9FNEMcqcx",
  "key35": "dS1CN64PbLP3UCPRcaiyp6gN9mB1batTrZAqCj8LLBEFQvHggnvhHMwqy98wjUMM7gsqGZcdGVoBmUgvuLCWSkc",
  "key36": "3qXP2sgthn8BqeLc9TY8x9qBkt9dCHmvCY9BZb7HkBECB3YkwbKhd6BfoWaGv4Uf2RRKEkRrDYeBLu1hEXEBKBzH",
  "key37": "2VNU641PmaA9VPxRC1E75Wem5U5kBrDPzAg7oYkUVuWrk2NviQiQzqXWF9UQgWwQ9bARRygDRcQHQ89UpwyUdW9n",
  "key38": "8PQCPGWHYZyEbKQcigSF6ZDYrfnMrBuBKfqz44hFZ4Hg5ZnpKmkGAEByvPBju37S5aHjJKkvnyYaNbK3BhpNdSW",
  "key39": "jPnj6BfzuGwPN7XYAHWgJZG6fjU5ZDsMEfyGQe71cZECJZhXtYwC6LstVuRbSRUSLA8NFpgJXKGartXrmEw5w8c",
  "key40": "61KGfBCVgoD8S1TGidGB1cAUNwXXut6vZQfvyB8xNvt9pLAvN5k2GTMYPwCcmio3uXBxbJQ3jgRnJsq6T4j4jh3V",
  "key41": "3iY13FuhrLezggzZnSTCacofnn7rdTNujLqaiTR5MhqfbkSPx376xvwFs98PRpV6n9TrWK2Kr1WaRuqPQgvCYCEE",
  "key42": "ApZXk5z1GBGfGXEy6v5U9GZgFxxpqtMN1Cy43NHhfLyYP7fJ98Qbyuk6VELow7q8C57CetWNBEVc9fbbgrJiBFL",
  "key43": "2mfSK7fFgU7prV6B5WyVW2dypjkKibevbRZb1LgN9S166X8c6iYsmQX4PnohAYTT9ciUM3MGyKrXMuPxKSdSXZd2",
  "key44": "5rvcXDtNZPw1Suiyt74zNiobA41dRfbxfiaWteTJ79aNs9a3hQCvfWE7LCGpnKnjVsX2wofK73poFMVZ4DJeHYZe",
  "key45": "4odEUkgBf1dzL5ZYLHu8RjynwGqvM4C5jNVK3Kj3fetfQXqBEQY2ZC6RoNfj4FiiRHq7UohowuURwuD7aeQCW7WZ",
  "key46": "4odUaqgZvoW51qCd9k3cbPKxMeAf7pv6BirUrU7xaSSx71Z4YkbmKJ2ESVwWdznJMuPv9Fe7wkGQNFTDqWypSydU",
  "key47": "3sYWXGEq3aTcjS5Bzd4ddgBDrWmAJUd7peNXAu9tPGwCN5e4hJYSwzZaNFmmQVkY3xt7kin2gBTV2szd5tUkE3PC",
  "key48": "4Ua55nxZM3DJPo2WxgMX7JtjjrZpatYpu9TMpqqPPJXD4tq5wuqPvV4qUoZdjbm6GrdNbEe7P3NMcYrx7ggRd8Ko"
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
