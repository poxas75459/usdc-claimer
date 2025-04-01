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
    "4aLTMLMBnZmLVcKjcejHnmn9ucJY6FL6fXHg91YdoNGqQkTCs1noAz8jeKxScKkAQwSRf243DLhNMUWD23BZV1c8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "diZapG2G7Wg5AENhpqHbByHfwJBucYXdXWXLzrWoLj8XruCYUKp8wUqtxnDmEHX5VkyRDcAGA3LWhDwgxU8AW2H",
  "key1": "2JePYtJCBKzrbA7uhw5kHaByRXBb4R7QaogfLZUsDFJzVWFucAa7VhCAYcYjyMk5N7CdQ8sPJAt6Mg1edyBgkjY9",
  "key2": "ZFgmyE694TzAH66Shg6M1hj81C5ErULbdZjB79V5UwfGq6HdzLiLziFvgiqNh9EXVpu1vHuCBcfx18aWGFFYkEs",
  "key3": "2vhjDrb7JtT3EaxWqGvR3MBGuMmyUdPYSbiaZJvKNafkwHsevvEv5xULtyz6wE1XUxmngwTvhQxkyp7on5G2cLjy",
  "key4": "4ZxE1mEC8t63c45xKPB8t7LoS4fGcKezWHiZpGWysDtqpm6a2f8Ru6z39xLatJVUiFvJVJiiaAahreLj6CBLbWQJ",
  "key5": "4efvzAFfenBTSAV51Yf5ZgYoY8ZQjVRKX6KE7NgD6FJ2W73XoPgg59JL2YjjSwoVSwPrBD6E4gyjG2e21ffjxuyK",
  "key6": "3qJDqWpPxvtv9YaE2VEUqmoGf1vrDn6XT6Z1RgmVSRxhT2JznefqHCNEpk36dNUBJSNFpg5n8yWALuRyZoueNexU",
  "key7": "3W8MmuVJj4jqfctnDJWcCS6P17wyvf2otEqwdDS4gPf8CvoJbbaL16aoDrhSFMDQ4Vv8Qx1AVUXzUQnSBbximfer",
  "key8": "3GWhZKTnjiAL9NBMJA6R71WcUWKZbh8RWxHTVRfHsU5xLgqPZPZdE5ujYkojXSwkpsmwMEhgcCxxFv7qWfPtf48G",
  "key9": "hf9W3AYeM6q6BDD9jLeBG9byh4cJPDaX3TjD1eiGnwAVfw3NY8PtiRrw1YavoqDiQoieck8pLvq3DnomWYa5h7H",
  "key10": "3tAGzXFceKpLyqas48ywQgq5S9fogbgpGTDwTWUSgWcd4qHQYhFkjSgZ3ENJe36KTuJLcTgSZoXbc91awiZibLKV",
  "key11": "okzZUof32bsx7X6u7Cgj5z7moyQVYa9zRUBrUiDDaQoLAX8qyfFc69aUxGnJcCHFWm7Kqvxak5VKvVXF7sNkHTU",
  "key12": "3MPGfq5r7b6vxoGMd5wr3eGfYuUJWJNbYmEpGv5aLD3PDJU8XAzK4TrqNvY2ign3VWhbT7quPucW1RyEeMSCvf8A",
  "key13": "2BsisDc3qp8mF74QQtptYNBsjwSPXGDXZ4isevBGfeERQRhFJuqnAQ9r6u2tNjapG93ekyWgQbC2joMhANKbP3QF",
  "key14": "3EHwh7yr3xFCLfPPVyhavb5tQxJ4kgWAABqgXuYJ4jvYL9CkL3BFYntbXcirBFKxiMQ9gnMRzQK9orqnj6P3ZtUC",
  "key15": "48dFtwo2E1nsnGtTDYzaiQft6rLBKm7qVECXfQHD5BVbubmemxruYCQtLGTdysbJ8hUPthEchZ8uTo5EQhhMfdXS",
  "key16": "4Sdt7U3BLrCSEc6GQ1e5ScYJMWbbCHzfUAxi8jjPMgZ9WZE6CDqjGzgQDL8p6BR5iiMVzZ3hnFqWu68ppAepqzik",
  "key17": "5GoZi9YP9ZXxcxWECJiFCVN3RZMURgMMG8EeFWEUGR6mV9ExmXJYjGi5fWZUyxFzEdA17gFRtWU7Z9RLiJ1Uqgqy",
  "key18": "62Q42oVz65rrDNtKJzPBu1T4dUk8HShpj6SHsrmx3eRLwQzKQjnC71GJKRvmN5j3yZ8Mw2iBYTVwviE2aaB8KusL",
  "key19": "3fnDACTe8GxmrqFcnhdZirEf9dYJYGUQ3LJkpKnSgT5WfwjCAMREGYjsgVNe5CDcUk6pNrfyqTwyL465bMEF3M9M",
  "key20": "4yVE7gdnHaK5d7UTia448Yqgh9yjQbFuRNnekZqLRwtscTYmsxCuezrqhq9TxPLJQ71fUGV3rx3myMKJAg39MLHL",
  "key21": "25MpFFqKnDS2bE6SwYuuYaGXLDBiYoKZjFEBgBUCWRszLuBy5gNFbQYvGj7a3ZP9sEfZfGGEM8Mf998mJzEbUBtW",
  "key22": "5PW2XD2fgm8T8DS5NRVk5GqKNehVKJ8k9K5fboGJtSQPNEC1VDumpNQiuQzaX9jRwBYsj3gj7NAVkP3gtuQQSQrb",
  "key23": "dNhBtL5LWLEG2RHtMDQiPVcW1MehUPjT34MkZPKZtyozxnTao3JUh3drNwC8VDBogr1e6ivtLafRcaJXDsRu2cg",
  "key24": "4qY8q5BbcbCNeFBxWnoKxGKkXiGfaFWDHgK6CyimcKmRGgn3Fz762EBaQVbdUS8GV8mny2xD56CnFMxYAexbHdUk",
  "key25": "4DuuEcMGoTNMuqeLDZ6VhL8JjReww2nizF8dvbq6vmM7P6RC28Gsns5w8k8Y5EoFkqkjUKUjEV5g5JgBwszWCMAe",
  "key26": "2Pu9T6miupytG9uWrJGzuYpYc86TfAgmdZHXJZit77VAQri6LJfwBsTTrsYZWX9p5wv6Pv3t7Y9fJ9e2Gxq686Ak",
  "key27": "XFxwa7jjQy7pweVKdji4RqxjfE3tuimvSgo9tTjEFxyuCse9rjS4yXeq1V3opS7SzPMLEU8SE9auQMyE7uqRx3w",
  "key28": "2eACDod8nU3Bzz4fk9mByr5AB7FUp2wB9frPwjMmN6PCsbT3kMvuLwg7tUVfoeWPqcSstCRtcqQ7hdsxEmhfu78S",
  "key29": "5vJygrMfX27kbok7rPpHxwwo8C2PxK7rUQuuAvDJfKMeQCTPZsqb1xV5eyCLEaYd9eBz4F3PfosYRVpG2W54s6cA",
  "key30": "3LYDED8iyYLzkof5Ub67zVVUbgw6kn3BPYLXp1jyzKSPxZ2kywDH1MZfry8BdWDwwXP6gARgtJVSRyK2Ny2j44Q",
  "key31": "D2cdmL4SAc6jE64ujo3XEhfyWAW9ax26J1xfbZoiyKekkguoVrmMWTAbdA9ZQFfMpZ1zF7rkBq7TJMZE3iNZDK8",
  "key32": "4cQXt48XHAJ7YngTHoPdCCMgUCsEu2Kb6NwFBFLhvKg9vJGK5EjU7Cy6Eyyxa3uhw6uGTE2HiDtQmwLNEWB8Evqv",
  "key33": "5pQfGeLdMjU4QkJfY9U5s1mfbuJXYUJAsPzb3c568cjbpeTs9UGmrFoP6pwcmpJe4GgsP4AbkojkFZATPjA6ouDY",
  "key34": "4iYtpZCcPrcbZh5oxzv4Lp8s8cGfiVW5nYoWDngPLmBtsQGJAQ7PwGkMFQaZcqFizGiM4XsQ81tkXUnjD6apF1GV",
  "key35": "3Xtbhquh1eDWSHVRSqtqFZaVWbyV55GrzigL226ZfkJiYvSWpJwCe6fwN7ThDnXpSZ3LijosGoDW1exEDPkkhx9E",
  "key36": "385N9ynuKK5MvqMsD4ims7XvMtAqVhvjs4UFXW8R6rQ2UqSaUtqEAT753K8SbiYFLdNtA6SNT7b72i8T49HN9Mk1",
  "key37": "aGcAKG64cueBBSoXoDmRukChwTXidPCXofqj397hshJViw9kvWADu2vcqaFsq9zzoZYDkL4GhTox6JqA6k228Lp",
  "key38": "5NY2i7upAExWrnYyo6wync49XLYQTtaurySiZFgPUV1wY1ByNetfedEncmCF2vce2RJwPTBm1pu1PJwVZnJsAC7t"
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
