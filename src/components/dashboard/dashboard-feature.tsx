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
    "3NPQdHEwXvBMgjzwaGYqv6VbmUa2saaPAg3oiFkwXhQ6CywkhFQJZrBBT5CaEL4izutsBjN5osLG9j4FcdsPMGGk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zmgo1PuymF6vvjacnsySGUVPBQ6mMvDWq9ui7W8U16i7yigtDnhyRMTwvkg18RVkmvMxHHRa2i1D1znV7YJe6Cr",
  "key1": "3uzan9HFUzv2reoeiCxs6jv8YhKa4njp3y3wGKTp5zqvE5T1qmyHCZDWnmq6NtivmvrjZETUSYLKJmHoeR1gZpcT",
  "key2": "5vPEJAjss3CPoD2YQPcPVTNEbsamWAHVWb2wLH2sjznD3FUGxfSPzMwvfKd2hPRAvqNeFPhb7APCTRiLJ8Exi2Sc",
  "key3": "4JkpSGPT5dwkwAccwCtkEajPiEqTpimU4CxqtmLY4gCQgy5V2agLx5tnUDSnB8Aw2An1zKkPmrJmSYkvPhQGGXe2",
  "key4": "3BQKHVyPGbVNgJZx13mSTWjZmT7siNvVJ9ANZvbKGL6oNFaeZXdfTtEdb8AKfrN4aJ4dJ3ARkopP7bGKL3E1R7wH",
  "key5": "4TbzeSp4d5yTasbEntbLUrUjqYRiUR5y31mWEGzrRhJiR619KpBd1Lr5ZmMqB1MmXN6HssoZyuHrPFaBmfuM9EWq",
  "key6": "bGidWDVgsstp8mGoMCAWDD5EUmg1pAuovJ5LveNwCUz1QD6neQBevWBRwfc1t36Ug3T9u8v6zWhqGbjQLBc9iMb",
  "key7": "fjHkp4x6YLhJeEkNzR3wqM7rmrU65bjfEum38S7ovYpWVXoL3yhMoBD89LebPSHP4pnUrF3rvPzjmRkSjLS1RSM",
  "key8": "2srfBF8eYFxJsrXXoicrnFiwo8DCLUHpydAJX5D2PovN7PU9xFAZBQoyh4yCvLRjjua5wUKz4A5bLc5nptD4X5h8",
  "key9": "3cgNmTNYw2vBbyJvmGwoxGKANBWAW11gb1xCfbZJAsRZMPC5g67xF9LmGDdCofeUPUCpdXHvdMXoPqk26KTdWWJN",
  "key10": "4pqBtzgZd2Zr2eJd66s6rXxKFNwhty88SxhhDNDrRN3Hx96XjYCNSWvJWyz6RPbx1A2tb24XmjkXMWJNiGz9M2kV",
  "key11": "5Xo7bf6CkP9d1QJw7VRB4JCx2vnXPGowntC5TqtyaRFFYHRvmNfJbVjQNM2nGoQUVZC4GhZfwTz5Qumq4YpCMMZG",
  "key12": "2ifTEYKhKkfHM9SFYb7skvCXzg9Q21NP6pL3trFHHUfcoACfaLj7YwezbqHeDCnf2GhyaQHiHXLZFT4L6e2YVcGT",
  "key13": "43ekFGo23ULFocftqPctXLG32pbCUkH8osUEs75PAXWpYcrcd37zN8R7DLeCit7sKajAj324Jb8SGiJ38xk9ymt8",
  "key14": "2gCesmjATJchzFEKxDBuntiboPm8ZeCsfM974veouYYtJA3oc6QP3TM9MQzBzmZnGMKngCzWuZuZJXdpx74s4AEy",
  "key15": "4MiADu1b5ckWNakWNZ4yuw8kVScy3H6tUSM669onwtR6xbPDxnUrUmM4Kcjb2f5BSBoUkbcMzhwoXFsyauKwiRqA",
  "key16": "qd4uxYYpx2mDrarvMj3UnbpRLdp12X7tujbLqZD1S1NXG7PPixTrUTWdB61iHfmXC5W4hLX1phuJVGCu564wRiB",
  "key17": "27BSZzZwvhBkKXoDeYunK5YnvDAMcH81v2BBfGbpBBE6Vytx6dL8QBJvLeDQmCJEugFY2UKjm22ECxL2NVfMLVUg",
  "key18": "2mW6SjFfRf39MTHwb88JZ6BWKPWGaxzJFeZDgiaEwMeX4uYnsR78qQESZtxuqMmUgH1U7XtdQJ1BQyxSiRNWuvju",
  "key19": "5kzKmEy2QPYuyrWyn1diUgWcgWAA981kL9xgSDJvsNf8BpJfu2fate6VCXLfZc1JPWwpQXbUnVL6WEpcESa11UN7",
  "key20": "5NmhwLCAPFVp1eaZq3ZuA2qo7z2Pku4aMrc3k568V18WZJLeyCLqUtXW84qxRBy87oeKsLCgK5bnfUbLLEaN7zNY",
  "key21": "5r2Dnu96wefoKeuQdWRqXq5sMgXdMNB5fpwTMu2aCqQsNBTb5p8Dy6X7pfzs7yHTQJissGd8i3wUKSjWTMb7D7H4",
  "key22": "6u2Fhcqdx86gTRyLaLCcJMWViiaJBhnWdkPoKPn6L9otKHh14gyxLYw4gd3hKyMQ9bdsxZ12ZJGMetFYEG8sfg5",
  "key23": "ZwEUQGQvVX4NtTBmjWgxcCpP9pMQpu9aEBAZyBksvJsePDpo3K9roT81Be5VExcHscXPeVtvxQ8g3qymbEFEHFx",
  "key24": "5RhfyZsa3g4F94uXZZrEWeVSPP5QD2uR4K6TzrgafoVPCEs23fuXgfViGMa6cNMRZahRFq9t3QPcSSVfsGar8Sj1",
  "key25": "2eLwtB51NgXeW2qV2An5zNqUg4WWiBnPvZSqAbd9ANKuJCeaJNGr9iMZLSgsgBCDzV36fnEq7D1QWCpExzakSgav",
  "key26": "5dMAxzJdgvAWkBY52Z7S6f6pthh7bCDprrNes11GC9qvAc8w6jAAor8Fx9caGiyFujNswf2VPCtXfKMDP9UA7hDs",
  "key27": "4uH4euA8er65BnCS9UFmj7cngCVMKJ5ePjkKnuytmQ6yCBehVuhNhtwEDMgUwnoKd68sXto2p2fQ21j3PP6xHuAQ",
  "key28": "ED7iU6bo6HxaW5PLRJ5Vd3hqskL7PqTgbcUr3R46PgSwbcKrpd86bPid32VenqhC7LGUPoA1rafy2taz4Rw4h8K",
  "key29": "4fJsPYBraDVRd9rdgrkDqcFCWA3jugdMX8WgdiYNH3nTzqRqufG17Uz6Sxxvi52jyYcd5xHZDkJMcJSFwRmX1FJx",
  "key30": "5dqv2bc69G2bR1H6hG2VUA5b9LUNBHi1Ev6gvHSsUDkJKTeeRLt3BheEDpHg3w1AWwAwYGK63t6sLeEM496rDTJp",
  "key31": "5iMEARu7Mz5F5h2De8gtibUaes8UrKubfFuxUtWWA5hhTR1AE8zGAxsyXMajfkjaYuCWqu5HY7SubpzZUHqHfMcU",
  "key32": "JVRf1siFpu5PTdDNZe4uNdSK7DvhFstgbL92txmk9V2EwZcXVyv5wHrrSkfNf5Q7SmsJg9HDJQZ7ryNSwKWz96f",
  "key33": "63zxXbXUGLAJduthpuUz7QmnMbwS9UwUQCM7AaTPBX8WEBy12AK6H4MVvhaRHiQxsz9967YxBBw74dxaeHDLdQjK",
  "key34": "558Hn4FPJzZbAGf1pVxq7xNrpUwaMYNmywTy1r7n3vpkgugK4tw5zMjSjNVDjaSAcbc6LTmvm8f1GupEhEU8smB6",
  "key35": "NYanoupbmR3ZdhCQoVbBY7JGbdgiD7x83Gh1y29VAwR2QGebXaUpoXAC14sC8mVT6UjRxYMMwbyAEb6bzJvc4us",
  "key36": "4baMGAXoTKamqyCddXwrxJqg4hifw5XE8DRJGk5RgDatgwd2K5zZufeZQdJSpfe6KWftgqeTEQ4mU9y3i2YCw3vi",
  "key37": "5gH5tBdscjHmhCG98BbgPuKsBnk9FwL1zPtT5v1abJaVecRurZz5LSCedLUn8M7u1XXJLcxoLu7mdmFMoAQbBcmG",
  "key38": "aAW3erJB2Jo2NouzMa6gGb9ijM5LmEFukzNf4pQUX7RWQ8TR4SEiu7UYCDZcAZjDcSXQzXossRjrnmpZ9upADWa",
  "key39": "38oVV1S6P3arrKTfNnPbL8wiyP3Lj3EMmUoFH1YNtY4u6UkY1euRzJWSz6mULykB9d6yYwkKTYzFPVzDcqkDRMeC",
  "key40": "5stMaTg6fDn4pHp4oQf9L3mj48T5t2b9NCakUhb7eU8CBdrjyiCNugi9R42S4ZFy7yZXKU6S86kKC8SEKiLiQ2de",
  "key41": "2VJ2FxXzcpa6BRPxwtg5t3wbktBPTGNU9P61q1KCHpcZqb86Gni5wPW94Ug3q7iogCWeYeF8wLRNyHFyUkHpAGQB",
  "key42": "ccm2UZtMB1eqbLn9Sx22TFLz5Svaq834dPf69rwryy3DGwJSif2FM9RzJmZD1LCs3yk7yWik3NM77bvuuNdwRuy"
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
