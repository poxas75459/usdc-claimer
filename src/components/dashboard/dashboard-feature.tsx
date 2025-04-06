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
    "668pbH6vydyCeyMYjo62X5LtCSakXUpTDunrpoTAr2z6sA8oxoBhD1UHmZTqPUTS3MfA6yjgtusM1fYajJEVRYYH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37TpMjz32ic6BXWm7hY5hNckAw4gHg9yVo51uzqXdDzBxu7Bq6eaHh2oeVoajy1x77KjzEXnaKDSwqnCyoEMR6ov",
  "key1": "42yG8xh9XAFJxUMLpn7JJRMThEhDPaQf9invmPJdc4EMxyvZPuRLvwA59bJ2YHZVnZcejjxq7RBxjVWZeR2qjXyJ",
  "key2": "5MXGgUdmVpvbowzvLUckFv4fKModBdEENs17xqR7py4bnjFRfJCSNSKLFpgCaj7HVaJoREbe9qiQjsLn6A3NteR3",
  "key3": "5nmmxy9D7LTvt1nitcSj2rXbViPjUKu61w1CPuh7Jf9f4u4KV1aPkgWQDjasRufFqbvmnbCS5RTADBHrVnVWTWbf",
  "key4": "V114KXroCnzCFjmsH45SsUZoDy42XH6BcDJ3Gkq4H19CHxNqFd8Ct2GHHpbkbV72a7ymmd9CZ5uBVV6D5at8Ayd",
  "key5": "3nTPWzmrgTd9yYGgiKFVsnkNM7thjoaXsvpY6kUihmJAocRzedbCH6Wq11Ec4P7pyQadTKMR6qV1xWJw4qcwmMi1",
  "key6": "5orFVzDQVSsLxdJNaGg8o5n8V9cKni17YLAmBLFSWpHNnXBouJSTLfyyxYV27XqaKrFFmcQ3KyuAQmyREH98wwK",
  "key7": "5WJ1u1zuwx7H74L4919jZ2Znjjt1kWoDmC2kaXkaoFWeXvDb1GTtDZoRaP2g1eXJFjdiqcrQYQVQdwGdEUkUeHzJ",
  "key8": "411j89g6ieAnDa1pdtPUBUvZB9AuX4tnCi6rEMd2M8aZdV51GsgPR95jV7cmLoP5zymkPM9sNCRdmmihaw3zAyr8",
  "key9": "2bHKqfKYHgBQkZnUE4YwcfeV49ZKDMbeCE5MuJJSbT3bAgFupt3Ws9yRi6s5CwneUz9MwpUBwxYCn9rBxrPh2vjm",
  "key10": "5copCMVjnkov1istdSF5H1zFfB72a7VnMeCMv1fC4UfnSnzAW481ZLB2Yqo7PdGziwo2yWw7Jjt1yWX6MEqkbNrW",
  "key11": "4jyCWjv14JsE1xaAGmfmeuJRKHMSkWvZzfWwPq8DqRVebkvSMzPuddU2MPArSK3eBV2JcozrzeUYhsFutqCXA2Rx",
  "key12": "TzWDsimhKfWEHjEwU3BjJqt4HvkfvAShahwmo5sVmLgLgu6Ga4sywo3WRVfQXHTYbgAUN7MVJVxw9kkwhQdSvnA",
  "key13": "2fLG2zEQSS9AGtL7vFkkj63xK34HLVPssfFA7wdgdQXeAMmGgXhpU96Bgu2hLznKN7TJzL1AQTgD2HDfJm1nSCYK",
  "key14": "5KL4iSHKo1dPspkHg2bqzdkqsaZ6WHgwhs9brh8RyXpYNKHrjXN4n4fZtn7rJqCvtyjvekqXkn1f3oMmawHELzHK",
  "key15": "2b1wvWpV1K5EoULzwB9B1Mx7bbdGyaHhkQBhd1r6PhK2AvXi3Th3ADfMkwEGdteiPoxm4L5sVcuVcdb3LJYcymiX",
  "key16": "3LLv5QT5rH9svPQELGf7YLYx2ur6WVvqWdu2zvhUbKEe7VprHnvejB69tw9BH7Qscz25VxVxRRCeVLHazDhUw9vn",
  "key17": "4ozas8RKfHWNQ4vjRK7mpiAB9XjD2JvuUkCSrbeyM32usWYuBwpbWjZLuiqFiRi6yLyntjdHBRYXe39ZoCN78Ffn",
  "key18": "3RHY97u1VBBsqh4UYtuxRJAYXfunKXmRnDqmgEjydhuWtM6mfpgJuTFJpNjZdyV7LCWFNPQgHnm5ruCiA8G6GUEU",
  "key19": "5ypMG1KtCXsdV2rCsQTuRSrfrxAfHmFfgNQFFyME8MFe4xJKjwPJL2eNoTfMYvA7xX5SFe3QKW1G96NYEzP2ZzNS",
  "key20": "3SC9qy2Lc7WrYHryoaSom6d7Grpg6odFFQQB6uAqY2nkqr7tUy73E12k5A8kuT46PkcndFJhViyGrCsGA7HRYvN3",
  "key21": "YL94fKD89v33pz9s7K8ddkGTXtWcwuMatduGfVw359DaAPCHpvjShifgyvB6qjGTjq3qrfts9uJu68jkJRnQ1TM",
  "key22": "3oot8ykgk1tVud3LMUaXEWrzGfMjat9hpdXquWgQAcryJFsSV2Dt9cf141maKgjDsD9rQu2GEh56ZpWmhAr5TgRF",
  "key23": "4CEK76FGzpuwQZyZYnxRtUtn5zmzu5RvZb3hE6642LJ2Wjf7Jj53hiq87E8Dj2cqo67t5oDDauJFnrtnb5xdpKbR",
  "key24": "5ymm3UvdoGQkXiGFt6p4Nuesfo9VwjXxWQe48DZNcB55mGEsE8mQbyjCD36NXGdTvemfiqrMyvr62a5LAJ6gaXBL",
  "key25": "63aG3PW1mmT9fgYHqgnV74RxKY2nB8vEnfsk5gRxRd8tq8UL3xK7sWjpFD74G3Hy2XvX46H6CXgXeeUCeY7ZaRwc",
  "key26": "3ogLwnSpCNNwDxrSB8ZvHvv3wFqGNMfBWmmPuTnSUb1YDi3TYMZ5mgSkXFFew4uCd9xuq7hx69sGpAV91jFw61Rg",
  "key27": "5KA8RRnWxbucCi1w33oQgBzPcHB4586hzLXMuMZdbgYRuGBBEj4qd5c5Ah3hu9Cz9P3fbBxu5HWXTbx63idougnN",
  "key28": "3C2cJWycg7n2n2h4AcUXs5BDetDhThLD4azdHMswyP61GoRWdqgTSDbmjexdrqbetYvJGcsCjGi2qVGbQ7XAwJ2m",
  "key29": "gwnnzAesF8QWaLWyG6aCWRXFHChiNMGTAzJd2vZK4yNPJL1zMJf5z85WfW27YDpEJxTnJNTN6RJDMW5xdFtaagM",
  "key30": "2YNcvep461T93NqsXq8V5WNp8tCfH6xvNhvW3higLfmjr77BQ86GRtyuGwHbFz4Vb6VUKp4AR99YeW5p7xXGFk4x",
  "key31": "ziiSDpVvasKBQiztw6S6gR5bHgSG47y6kp4pyuhwELUquoU5sguYKwR5cz49KPvW8VMeU4Q6aqAVjXXjLpW18U6",
  "key32": "22phFDR86QaGvgs2C2ZNxe3C82hHkuVEQ63tRbpjvdqZyrsQxAs9TmsBR8ouZPU35dth1qjR8HvUE5TQJFtyjWwg",
  "key33": "3XHNDuQ5gsUiwsAjCSGaYEDzVfGAC1pot9a59UJvp8V9nEmzamYuH8LGR2jmaN74HqyaYejjaTF9EXQXGZhkAJRQ",
  "key34": "mrvU82xwkzS3UaE9FE2G6bvcUKBLJTL4Zep2qEXXu1R4G6SbdPLzrmSAeDbs5MhnnwTmzP7fb7x3iUZ1SxxsRUF",
  "key35": "4SiTazfbziBuhYnpSvDUrFVPD4CPMnYRC4YCF7Bd375WvreuQVpQ141wiNrsy9T72zeecaxnXAJMYJv9R77HKBSJ",
  "key36": "2sECNC6Y99dtfhrRNpicCsKBhdfRETppRXYBAZXy1PkKqcAugm6JRgTYkrPyt27fQ9Kc8FJujX6Z8exigEjgL4NG",
  "key37": "53LGmMDQQqXbo4pusmz3ekNLtDdYupj23oQLC7PgmRhZvDepd1boEfKrYGqcLAQadVWhd4unzPizRLEyEfgNx1eT",
  "key38": "5fraiAH41DqbyUc2hhmbRAc8sboeWGaL9CsSvQtPAMWSX9DfeAhV4KqKgJ2eWdZwePb6YGZHrmaEYUFw7reNNHre",
  "key39": "32XMWxZDYnSnz692su9yQgeyM1BQhyGcgx3DFJtKmP6QroZfoTBQuNks6NqfbVUpH4M7CPNfDtTFkvKMkTKjMjzS",
  "key40": "5ansn98Wg6fGgufXwUSPtNDxd2NRkygfXYPepezdmmySeWxbv1hyyPe6pmH1KxZAuJMQXEd7F6ruFpTDPbi6a38z",
  "key41": "vD8XSxr3NuCibkPp9psGn1tCtcd68NXTd7ZKxV8VMgZohKPhzcTopwfnaYKAbQb2uDmd9f9sn5u2WLbKz2s1UeP"
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
