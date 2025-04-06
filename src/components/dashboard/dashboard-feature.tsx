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
    "2sWrwbnrnE65uy1w46B2jYEpSG2N8bXT9KvtKbKuokwxrLXhh9j1d86RWa29BcNymdztiZCvsvGgs3cKLhu24yzG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iPzceLL8oRyLmgkHsebYm3a3TmYqggN2SjL3oF5E1TUyrNvnxcwbqP1dogmyJVYdxjosR5GnduunFV2ojHQDVzc",
  "key1": "25fVnMJ4B47CEXWXRiTJ22fkmuTh5kmKGCoQcsN1dzMXV5doW1hDRJuYqtGzmKbWgZ1NoYcimCxxFv8XuRoJe7gx",
  "key2": "4aHzAixiMhA4KLea43myaksiA8Z6pcZyaKnheo5WsuN6Q3PuxV7omTRHCEYjUjwDoaXrN7WYxNUZzVhhCHF4VECk",
  "key3": "2frQ3w28ytFTokvF86cgdEziBYzFtR35eQiqkcu1ZjnWGjh8jYqqj5CJj889rAEUPYVXJ51qugnz2qM2FNtVUYtw",
  "key4": "5ZNpRk2KpRxfi35KvtSRqcyHsF8obQ2bCcc52VFyss1HzsJ8xbmoxq42hptHoK2CUnedZzNuVqUEiXNZv6YLb2JD",
  "key5": "5gy9CwEnKJNZmZtRMNF1mr9QPDTdZnonZUbw8WV56XdLQYDDKWLU72pa2cSWoWozyo1eNGJzaXm8W7sV7j6rZkHz",
  "key6": "3BPLhJco213FqXedkDrHUKBT34wNwGAiKJ4y5x8Q36seQTcArww4qKYTHSm6BJXxEfEqLj6i7FTQPgZGdgQo43PW",
  "key7": "4kMUyUc1sPtdFH9QqEXq3yAwE9fxCbQaE45Rt5M7FEX4KahgZjPxBzDKbLRbP5eDBaPAeWqPAeLr5STUpzCXRK41",
  "key8": "tWmV96oPrF78yq4JDtd67oHjZyfkSyGQ3VQANaNTCDeF1DQLnedFWkKWkx68hjBHmBYPfSNSXArcEHg7etQz1g9",
  "key9": "4rXYi3ko5shXydUZW5Lf62F2aBV1dUTT4A6qj4jYGqfF3WZh1ytPkw2x6hqpaRZXxtHZQXPZaAcxdUoWLnfGBPHR",
  "key10": "4VcCkQE7Z9BZDU76TFmEg9PgzLpgvScEBkaYWYew1kMfnEYKJLTrPGqdzCmZjrQiojQY9mALN6Tqx6UrsMC9YCwe",
  "key11": "27PBSkHKjFr5cb5QVfT4UZPdKorkn9S8VTB3iYajGXHwkE9w3ueGeyEFFf93eBUpWBPZhevSyxgargzLivQjnh76",
  "key12": "4mYub2SbE41c6quvjE4aQTqtEkCMweJDBp435fVUtwSv71AgydKErqsKudLhVLYDoFWsmXb8aKkHp6D1R1tqDzmm",
  "key13": "4xW2RbgZ6aAfU9iiFHQbKgNt7n1EmXoYS2q6HyKDSK5Rr6dCDuDB9EG8mf9JRYMmmKfhtHJMcdjydkA57yVQW2mD",
  "key14": "2HAjJYWPKvFixYkgwJ1YDKxBL6fjWKUgQXJ6WVikp35zwNyBzr7FMRVqDDqdzvESz2r1ehFaG5Q3BxfDvkVkBMbe",
  "key15": "2xJQ3HG2ZFS8T433fpcszs1HTRAgZWbxuteZWbU8LCP7UL8o1qzxg9ncev1sbxEirCVCbeszKoPYGx4dTv6jNoHQ",
  "key16": "3dpjBxg7MxKyEKnCoDN1u3RmQEtkBxPFuiQ5RTig8e8PgZUmo96cpyWdPdCcwDZHCfx45W7trAZCHWEGMGTqgmAC",
  "key17": "3WVN2qGY3d5h8r7uRysfmP8hZWZZfRJCMkzV7MdtTcMKUBE3RFh8PSGQb5GmryWEBMpBruXPg136ux798z7ATFSP",
  "key18": "yZCnqebqibvjKAC3VrCNpjKJL8GUPs3NvLWo3FeQ5XgwaPjX7yLuZY6ME3S2ZCJA6EVXWcUktieYAAh3Muk1956",
  "key19": "2CSkuxL6pjwPGABgCqinJCrAbq9BDzVJ1p2yL7dpdwBrvhAkwf8Yv1vzUpGmtJGCnC2tfgDmXMbiC2d4wjddtZzP",
  "key20": "4WMhkQmeuKMBrciXoWncjLFH9VVcm9jAirz3zd8hCnAY8ejLEoahw77uRKe2diFpP64df2ULLWPCe8xxmx9kBET",
  "key21": "3hWm9YKQmxV81HjssxBvB8t2sNxNaQXSsiQ4cUsK5tgLg2zgT7SD13sid7T5bN5A9DiK7PvdxWFyMT9P9Bgsj5DZ",
  "key22": "SXEzJsk27g8p7DkrCFE3env62pjDcy9jsxLVu3jCwLFeim7vqJpYdVxQtqyLx5KJ623YgZy4bBZdVzDSZsMiqTq",
  "key23": "5QK4wRssdBw5UkHMYTyKHELZgweEwCkFixXQtK5yf69RZytNCGzyCJQTTNwaTTMYMdBEBKs1mYevG3Xq4M2M9QpM",
  "key24": "5Tm9BFCRTfYRFRzYzkmZRwdKmXvHRUSbhuCkzGsWCuv1j4miK4FtHv9CKvM5FTgMdHmismYq4LcSUAM3yP7i38KM",
  "key25": "2PNCasuHSnTxNNeyQjR19UxhjviwTJmtDNDCsx71btRWL5BCU731WXojYWRHnzAzgbJNoDRageJa6YwKXrmtb9zK",
  "key26": "4xDAsGnkxiVScDNEH6pJC6bVRhbLFxuvqCEVZaB3BzXJqvyWWMFcuP5gGhBWP6NkzeBD9EAPK1txMWzo3xWTWcv1",
  "key27": "29irHFhDw1fuSgYiev9U4rDtXbhQ1k8HYbNPvvyJNcAT5LT2YzFxbzvCGxh9QgCz3KuSinQrff5f1SaDQUd3b8yN",
  "key28": "3TZShecbav4yiPEA6pe2sRbx8AUd8TMRyyPBP6ed97Gm198inhvR4mZttgZYY4CEvFa9SNM4Tdj65KEAaGoN8p61",
  "key29": "2hdXiZ4aF2dy8rPQCBNe8JdLK6NCpE77dtFLTnGKtLk4yUh6fv1rnAh89maUQYsKAXQbT1UvscK91dRxrPtwePMe",
  "key30": "2Q76jzbKAY4UWNBKXTafo6fvNfTqcweUsSYw7LhscDAjXuSriTv2VPnmwk7dGKoHQKcDb6JfzR1tiNtSLEhHzoZv",
  "key31": "Sg37MH5XYCDXpNHH8Mh8paAK5ANCesV4tSqkrw2dch4q9za7zqHxW4NmyqnMVvuSRSC9Fv6J2KJGkr8on2rocEr",
  "key32": "4sQV6B2XK526VreT4f3zh1A5uRiABviwLpzaEN5puWeciLL74MKwtezmuBHtnAVwEB9Y4niHs6LHAzBgBzfHmmmC",
  "key33": "3Ty5FFyxquibL8XJwibvQamFhvuu3XGjHnpfM6u5VWfSiVXQT7wQST1JNHmMqizfDJiZp5pXhUayvFsTknLkQHAE",
  "key34": "5FSWAxU4vYaGK13JLcpgQZhDbYCBh3PhUU9mpmhuMPt6oJCMBTZxaAA9dcHrq2y7RLVZZozF2Rb9BaoECa9XcgiA",
  "key35": "5oPYhXy1UjTLkv7usj5K5C34dsf3fQWGGBfiP9sF1GC3ohx1pEEjBgRojDZS5BAKUoJtvwRS7ENtXvHVimpc7ELY",
  "key36": "3Fmz2aWzqbpP9qxufFKvyZMj5XvttcaA9nGNquGrCWn4XzPAuGHds5UoaS88xF8CBPdXQjWj54LeAqZFZiijAsVk",
  "key37": "2jvydXuY3ixX9LdnQPwdDu95svK4Wf3625ZpBg2rUCiitD8bnEA9rVZh99VdnEeMaJLxTHviY3Ggnizcij7jdiah",
  "key38": "2PRDmxWnxAUZfmQU3Zc8YLJJvw4jonWJqxvbExmz38RGFmZGLTXQLJssRkowu7qFB9HxaVRxK7YR2accySbw3NEn",
  "key39": "47ej3y21dTb8vbkfS6bccCqonxjgapwCs199zU27BqEHSomVtm2RvEjCYy9znVBQbyq2nSht6iv3iRaHo5PwXuCi",
  "key40": "28aNfkgoALgmFVornHnMhiCNPT5CFZ7LbYV5gxGBqLEEV6aqbTWqigL85n1MeJzUGkXcQda79Hy3uBvKQqUTq7SB",
  "key41": "5wAsZfLuE2q6cteuDmtFkeF1NhMrNvveSPvzPu3HPucLvb43YV9WCDVyE39WKJe3A11AwiEcik1bLSjATgVJBrFM",
  "key42": "4a99z3f4B8oRNSbyuLcgmiPGNUG3UBWxmyJ7k1wfmfTGT5KM1WbUSnaD9HfN5FPFor7BkpP5DrfLcvxPFdgEZghh",
  "key43": "2ZCeNpWq54XxwcDrcMS7qdUn5VXJpTR5HXkbG3Xr1EyNcdjT25HaR3Dj3gAmBejHCvEkTyF4XfQQ5haSErvqLLVF",
  "key44": "3vYG7fG9tU6CBG9HiD2dr1H1NKAYYNgNE8Pr2YNdsCYwn3gFGwVeDtRzJe5oeqQSkRKUyaZtkMmM4cSNE7MhqLmq"
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
