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
    "64PPsrrabqH6Bwn7eFExX1tzQS33CaNBAFKJqYWCz3o5iT9svZFZiVUrQbxNUJGqDq3xRjSrBj3KJsvgpULC7cmM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65qef7badmu5s1HP7Y5LQBmT6VHJ5Ji5tNugvgzj14wKdfNkrB4Lt5nCVgUoeQXu8R2M7jgEAHdeEvKp6gsCq3CE",
  "key1": "2Qb3oJDW59TcZmp6UVTjpxgz6qyJnRn3VBYKcqvngEABvits242P4yK2Afz9FJqNLRZb4BE4QagdDcCwEd4P83b6",
  "key2": "4MC6EZt7Kw94b9Zmv6bcgnTxm6C4vGVdCz4QVKrt5uSvxTPAMyg4KozqTUNxuxygnhdjnjjt8tptrQJZ8Dmc6yv8",
  "key3": "2tyrWyWn2kbxuCgCe8Tfq8Xr6ARpVvng8GHDC68Su4U6o6P4LHJLfV9jdEpJYnyTLnnc7DZdQvGC8DpXqyYaoZHp",
  "key4": "SXnZ2qx2vvr9Ch8F8zUTtMb7gw98Y7iqr3Uv9QS9T7qNF7GAwYrUHBs54QTchbVaprjs1QRWot2M9h83jPmWHau",
  "key5": "3mxvnfwyTmm4tUgYP4vPo26fvS3noziBz4ZXHQ9BUUnkHzGa2wviGGwhg58evuh2Ne6CqinJkV1xzFi7zbCRQNnm",
  "key6": "4xhuMSSjyro9reJ8Y1gbhi1b6Mq1VWgvQDdVFzM5dKNNNsGM5s4snjqsALXW9vQCkQyWQ2HL99tRHKeX7VAHwCzk",
  "key7": "4wp9oNboTH6kD6qKpTGGb1pXhWpDpNQX4abC2MmFYMFZ4Poft9kNvDc8npjGM24MUthJSRoxXDwwL8XwEMpVU1pG",
  "key8": "29AbZKckePsdm5rNJWRPZBDj1EMeyCwbWaAWhgJ1jqRXwFwyEkW9xEELPfp1QEGoNQMvqdRJ3jvJJVYhYb7rTZDQ",
  "key9": "2iRaGDtExd2xMFPBPeWhgTmEGUuEuuASSbcbkvKvokv4UzYtxxvxXRRNqcZN5chxRQ17VZyVU7s6ptC64DUaaNW7",
  "key10": "zvm4VjtMAQjSDe6w8BsRk2NEMCVf1WzSjLwtYWR9FW7rAnDGEWyG8RZSCF39oUcz64pzg7HipqoBmLQFcT4X4vi",
  "key11": "3NjEMv9v57T2bPjE4hagd1r8xeda7Yy9fCwQXP5TkwByrcpQrYJMjjjDUaQrtRoKM3pz7oepb1JJ4wubmMaUAVUZ",
  "key12": "2MAPYiQtsGUHVDQcWpZPQJbkMAKm1QsoLZPuYTiKzoMrjAhXTMABsWwQ51qcM6PDjitqwvTdMrYisyTyQXfT9w6x",
  "key13": "41x6GrErUwVhMjPGUvzvn5FeBEAQm8TgSWJSbHEiwQ8SXSWxYtLkfiJrWqGtdLtWEXrspFzfcKYqiFtGDYSfBstT",
  "key14": "5jLyqMoxrevDm52DwsFtYxveH5TyvBvaEBwq6qMaeDrxQL2wenG3b46e2WhQv6Pz8Lch8MhW93fNosQ7JxJGbXhg",
  "key15": "4EyoJnMd2B9ekR1JgVg45CFfF5LAihBCZy9EBnJpjcBnrbuvn6oVsnHTwH75AodZj88ow56iuk4XMUoTvhmmsp5N",
  "key16": "4FdXkCFy1gaQmPixAid2N8eZFhhQdwCzQdsLxfPxTiaWVXbEb6g5e6kCkXUsyT3uV36GaDWG6doKRCTP8jtKLa7j",
  "key17": "ugn4RuNQhZdwN2H2V1g4QkprDcrAspkBCy9M4WUtTuRpYJ8Hc6aZwqqwq7e6PY2nVXJK3zm4xZxfDLbrU3bN8or",
  "key18": "4dohBSBE8VU7BoXR3MUnMwXMPW65pLtdRBA6Erk2qEr8YZcWxNpvH3U86s6BCM9rkhPFxaiVvYC72wkHFnnSF34v",
  "key19": "5SnsCLK3CmqMZaPuunJh84qcQaTtmrjKQQnGxJQVPHdzezKktrhzr6myZgQgFr1Kb66FxxdCen7s8xRQYeyLP6E2",
  "key20": "3cWabzZHoSZvDVE9NJqV9qjNvnbQpP1RJwvGJAfmMMFawcbCoetTZYdQHrCpLM5RQ6YrmwpHi5pPc7zByPaDaxso",
  "key21": "5UHsCH1m4xs7YoPWj38gjH39ie9fvmySvzxrdEYEMs6TZqSshMAU5EBg62YaJ8NoFezH1VKRybTB2cFwzKiUjsYF",
  "key22": "5t8NRmDkEnSRzNN8nRRzFvtWAhp4ndPhg85yDX8Un84QARjZJs19UdYxq5GCESrSGPjyw7uDjEg6spE4iFVpxJmX",
  "key23": "2xECdK8qKtQY2NagCTJNBz47hQVRWKvxw4omezJRgFriNEPs62x73h8XxFqq1i1beHToyBrvXbSkzLUhiMjbDjfc",
  "key24": "33F6Cup2bAkYnMaQJg8Coiyq355xxHBzWXkDKjCvNVsei5SRwe5yiMpQGXgtAP9yfGmi6Vr73pYBHMir6ZeA5qz3",
  "key25": "4Yyy2Hp6TRkZL5QVLKi8ZUS11pXcNxiLJHtZeNaLsQeSyprqmd5keiMwfxEh3nqJsDApeiUNNnYTDAAhd7JQsVGB",
  "key26": "3B9BDoepFwtMnBC6nG45N455f6c8VGz68JPKY4ApZndJS4PUVo8iNyKtWyG7feLnoXkrMMwBQ2od5pwwG1op7Fse",
  "key27": "4GqmoQwxdGMSYQ8Ctzkp2onfwDAvXFEQjtThMmSmctwgBH1N8zadK28Ut4auL3emn2LkcRNMzQSXrZdkcsGeGC7Y",
  "key28": "ENhTQgbVwTcm8iQY7e3kSi4eB9zTMNNtWYNsy3VGY1Qe4QH6LL1yzdsYSQ3nxAgsLDQu5TgchCPjSUjpLgo4ktP",
  "key29": "4VWdSKLP1w8ymbbs8yz2gnxKcp9EMwfLKjs9KJsDbURnxn9EfJby3yW6WEnpi8FxMEjMrjd6Muerf7GcHCN7qw1h",
  "key30": "e7J28n74Hsdr9EJqiZGfiNqBvcvoTLMbm4CSiJ7JyDPuc1vPj8pRBP9hSAB8DR42rdDs6RTnTTPHU3nDd3do5mf",
  "key31": "2LUpsr5dLDvQe3ZFvhEKbtXRoqGABg8WtNZw9LMjVBF4VUMKmXP7kzqL91snwwiS5yVUW38amDeVvBZqq4kCRwN9",
  "key32": "oa4eALSYct6TdhjiYZmqecQEfFhQJB5wyDH2LjoVU1TMA9sgFJnA4H1DMZwBenT9jX9KY7nCtj62Uy2NEjRvraW",
  "key33": "xEkFc3TBCDqdPMchy5vbivBkeBaht14HEerkkrf7XEQnVz4ZMg6d9Hq9heYJzNNqo4jupFddQqP3tb8zLtWs1JP",
  "key34": "5KsqEXwx4mcrBFEfyvTAxSoVNQGvGcQJr9CmFvw7QCdeNWNroUDPiD4svsgTPXqtdjC7jKvyekEPGjWuFXq2895V",
  "key35": "4ixXhxnM7e5ak3zwUtt2GHE2ByiwmiWtR1778XhD3hsTVEH6fsUPebwX5MDT2YcyrGSBbt5JfzQnY5MacQM1cPix",
  "key36": "4sAtpjdkagfCqi6qN1fvu1z1hzxKVoaCBZunkxRfeiamtjEqyCbveCTrspUbj3Hwi1CUgiKbmWSQcVNRMbH87Dzi",
  "key37": "4ZBzR1q4F5mvX3MhqJ5buWYnD1zzqpmwNAgXvZzNgCJa2Zqxdyx4QLSAbBsvM63yWwg8ae6Y3YepkV4A4Gx55p9X",
  "key38": "4wEosqV2GXGQEyJLeY2eur2yqLU63HYjcysUmZKh4UEwDHC6eU8c2Smu1wNoRXCPwPYayCfXXQp7UCXbZpCayJzz"
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
