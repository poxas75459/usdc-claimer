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
    "3gjJrAu2DkXMrwej1P8Mx6HCfFTXovsN6SRush1mQo7MZo2LgJENSPwbCda1sKBBNdZLPYnPtWnpW1gqbsNsXphz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dPbVqH1PZyD5FKdz8qqbrBG6d26NHmq7YHqudBWrrtKXbzsNU8ndBfDowkvhVGh1p2s8KSZ3hFDf8YV6Rgsg8dc",
  "key1": "5mikCjG9cDC3sWvfraPQHSYmUYVMJmUipX4gq2yLMKGkioU7Cudg7PsjQU5w1QgQcgYBUaN12p4DD9gyhET1pgm1",
  "key2": "xPJshZBgwwbCnmy7s8NymYAdEksgvMbgM9jPD32aTvdePtvBVHKAndF8dakZ3CmAEewq5ABNeFgzBRa1NMiDEwr",
  "key3": "5WbKVMFRaa8MfLJx7uZQje8eyFh3T2bUce94xm7ZTPx8mPyqnjuYd97U3pTw9KbZGkW1tKzAc8RSME2KCwevwJYN",
  "key4": "EVABw5diE4eXHn4vn2pma7EjD1PLPNBuDoSkvmcstKhZ96mBeHvEhVMXKd92EyB6nu5MR6JqF6BVzQ7bpj6Um99",
  "key5": "5efZFoGHCBEh2HSiQvBsE1D9uChPMfAuv1ULU9PAaM5nnsYrMAUpP6VFMfaeVM3vaZewWoXN6ngBX7otGzs7weaR",
  "key6": "aAp5opoDfKtifdBeBdgxGtxpBnzLcCWZT9kEqfTQZB7Rzxk6bMWea11rBnefU1u7CuxG51wKsUwvDSVoXpnQWFF",
  "key7": "YNAtjmohPPbVi7jiqjN7N7yHrxZf1BUZW1u64FjEfokKx4V4g6czwPVrixqnNswMhLsba4K6dWxCpYsGEpdew8U",
  "key8": "SNLet5zeSpWb1DCqtZjFMqyh931U5KjPjX5xdaWRoXe3VpyZp7TMrcy983V1fcZRBMAL3mz9WgWzRTwgjYTxmkm",
  "key9": "2rph9k91CncRnzAECx8nZPJ8cq6mkT5vCqSEcSwb9D8xwQmbBCcqEzj4qpFXdV3f8kUFSswpCVM4JUWh5Lecea5K",
  "key10": "4voxDtve14Nt6V3Vkfrc7J6KFq113zZx6DHpJQVmceu8pshQoAm5AhL8QCxKw6hqknC3Fkfr9F2ixxmgeKmkS6Bk",
  "key11": "4u8UvurUEjcasJdxhXn1GoLM7j8iwcV5bdGXFX2zjDoRXELTVqjhrFVzH2DjinTSxJbqHeKf5H63jPcBh2ja8zcP",
  "key12": "4rYbCZN2CoqCpwu6wVfQiMxkwJSGJcfcTAUDwJswDSi7Vrro93NtZKxwtSxQoQqzYsvf3gFbtHfBgKkuyinz4nJj",
  "key13": "64C4prrjpRJhkkBeFv45VULPePJrirnCmX7aEs49xr3GADKDX8Btu2E1ynw7EqZqNQd8kPTsVHgZGJ6TNiytQfMT",
  "key14": "3gKyQErGxp3wNWY4uZmVJ82by88CenK9BnTp5xyU94YwsGidkSi7p2eYomgKCB11ZbnCshmhmSVHuNXvx7bda2Kj",
  "key15": "3Z4ecRuHmSRfuBxxjGwHQCAezrEDpGGkPgvteFRGQCeHP6V94wGEPV6dhgQFc3uXw1Pz9LiSDHurEDQK98CKQ2s3",
  "key16": "5duQUy1CJJzV4owHm6BXKvCwhuJCHasko69qbp587nv7GfcRx8WCZ5spPNh87onxeXnpaurYvHaoHJYUzVJydHJK",
  "key17": "3ejcAi4RmLaNnwqbfUhwyf54AL1HJLVzfwg3TAYCDu3xwoq6e98FgZtvZFY1b9Q78Tt17jW6VEbbpMc26435ENtY",
  "key18": "3LsxjozN2jVMSEqkuptKpaWM5htxrkEtx88UBoMNT6qquXwy2nupkiHnQwhrRxs1mNNapsiDEjrv6djC6w34LwjB",
  "key19": "5ArA9ecgxJYQ7KChJttf7Y5j1Puw2WTeWcMtZFU8zoSfmCrD5qGbzwCy6j7bfAAEwTwqFdeajHVLSzAuUWehN37h",
  "key20": "4if7ivzHdtStHcbDgtGAppuApHw9GQiEhgv91c2X3kwdQxrYFYDV96DCfcX16Refkvftdt7rW3W1HFnh3XPQNPn7",
  "key21": "3bvkYVrRvka2a9zJ87rfzxdxh6hB6sCbtPLYEYRVR6aVhcABsninHXa6JuZ6sTNXMrdWwgzKdDtgwfUA4C4km7KN",
  "key22": "qjxALjQgFovoA7JReFB46wfjHXUu2w6ynQxZXamyGkfhJVQRMy3DP5fBjkyXWBLvg2K2XpLNmw5dVkMreQNzHc6",
  "key23": "41UrgjnhNUFvjrdjphgLrQWdw5ZLsn5Q4oU4Uu44eJrrxRY1WbSyoLydymDZwNmUEK4zQzKQAUv74HxYhzCNhLTX",
  "key24": "3xWiG4rPs5TFvjVcuKoAjVbxtdn7Tcj5RN2n6yQcvGdjEm4CsfnHtCxLGsv9m96zpQGLXQDK9tG52sC5pfVunyGi",
  "key25": "3Cp12S2SCZeVE79h2zwnejAKLLa94VPBQM6ueNyqq2SbS83LBxFb2ERmy5Vw5YFqxgqgt9wk8r45rYy5YeBmKuTV",
  "key26": "2fD1z2PTMjJYaoJ6Pv5ydDTM1o2yiuFaR7sz2kmfFhLFao5N4oPRgbMTxYpLcEja7meT1vp2LSYG9zGR9iu2Q3Lm",
  "key27": "NUSzk86fimmz9EQ8YPCfimTuwTZPdwQgWXitWUcgjF3fsSsFp5zgaQJwAKJCXDDxNHoa1jeVGzRqu9A7LpLSMGA",
  "key28": "2b8KFuRMqHeDeiWr9oojdQmhhucCxe7hY3Sib1g21BiMxEKNFNBu46xpZ2prW5UNQvjVSX3ppkmfVXeMYoYDggDh",
  "key29": "24XUX31F94G8s6M2BeQJKezwV7CnAsQdRzX21RxxRS349HpBVTSrXYrMSUZ2oshgkzRMDQ2f1NQTnbSF7LKUEowK",
  "key30": "4MFWpkmFki8vaZfvqPhvdhdkcwHxpxukyYTkG1ZKUr1K4ess8mmfmLCpGEJvg137AKAozx58kEbzS9y8imN1b955",
  "key31": "3NXRE8GT5uzVUmiEFnTZUjd5QDkvS2xzwcgosxNwpYffATCDEG8xbCRdPw7ifhtg2FSJ5sPKzKyGiV8WA4d2cwwn",
  "key32": "Pq9B8Fc5W7RCKZ9C3fdCMyo5Jde7hjnC9CEnoJkMUPaweK4SeypD9QUKruPPU8bab2pRotzi16LS3Qz5koFMygf",
  "key33": "3JyxnxtjtT8wM2aHaoHvMJcDJMECa5udcPpnJceFAX8fBDE8Zodcr587F49hqB3pK3Qq8WykfcEUqaJK3ky9AmNC",
  "key34": "iu8AVLxa19fGNH3FQdfbEazKFcMoyyuP4Ev2A6115Ds4bGZqqkzLpacomcVJDsqfdZYvQDzaYJYyjJLMhkNtPBH",
  "key35": "5Ncyp2kRWBzixCPYiu1Lz2d52BcQ6FueDwF7cym2eQDJsL5iiW3AGN4EGY23yy7xAwscLJWuhPihkBqk2ZwaifAw",
  "key36": "3fXVza7fA8JuaibqKhT5DSGE1gMTHoN9A5L2yYp5gzHeAGGtc7GZEgu2T1DJkp8eMy8Q5uGg6LFwJ2UvcKkMzm7P",
  "key37": "3vCnDZgLitYhgKnRty7mHBdvj3F1qdgamoxAh2rm8uqf1kVQDuVM23dtkt2sbHVR2b8mtoM4zPbzp2VtqFnuSVxD",
  "key38": "2iyPAKBhpQuaoQo1yiRm3dRHeNKjh8UpZsJqyTZs7fkdERYDxaUK57pNVrPAhZB8e9Rq3rCsBnmpjgdqQgkfXBG",
  "key39": "5MBquiXugBbmgx3dCNFSZQa5wCvFgsMMVv338UfAdHgUggcY9X52B91Abhim8iBcgwe7PfZ4Tv3ynyG8Y23rfq51",
  "key40": "5Bk7BYAz4g7LPUWpAqWrbtnM9Yfx6kFXNYk3C5HhWBCXAY5DyranDE424dnHpEU9YZejTEsbHNnGHZeD1sQX3LZe",
  "key41": "3gE9q85dWRcW7XXcUokpWtkUnbNwfNjBRKrZCn7w44xbUitZxjHUr2xKgM8UfePsuRx3dyqMNFAwmPYQQRB7rfzT",
  "key42": "2Gz8ojHGGeGXajgNzxq6Hm1z4ifVSn5pKjPaSL7eJnaqsGzGyA7ZtGxhKdANKoPfRC4XwGQ25LnCZ1VnAfjJEGs9",
  "key43": "C6oEJuc8rvpgLPAPEYy7DoFvuF78fZC679nooCnAuP5Q3rA8fn7tuJSjQD193ovkGzhaZpjxh2ztNpxv11FFdyc",
  "key44": "5CLHeympm7hvhCX7YmSpLu1dnMQcxDTLmftwpQV7EKJiz3EAhxmM2RT7TSj1jPmjFtKze4unoCp3TES6jTB9N7Kr",
  "key45": "4TwjVRbARfM3zXP8BAL8ouGq9snJ7uLfu884jrYWtVyQCC28tGfrh8LYJpBZD9y1buGMo4GFf9jBEsTLUaNFkbqz",
  "key46": "u58xsErj5oZ7vmDV6eDCXy4wmR9QXSC5Dtg3YnQ5y9ogKXzdtszbs78wPeboc3ZQ8hMvqTc94GsBLBTgWwMuHV7",
  "key47": "52ZFFXqDBfsLtm86WS9Km5BbnqEbrbPeymE82cxN72AJGUzcmBQvRDfnG7e8LNbDvYKYsUaxXGSPojLNuSsMcj3a"
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
