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
    "3CAqE9M1mqfwnENHvL1AVQggJDffbJuZtDE7eMvPR2TBeMgSmQuNkH2RHdXRRY3Rbx4kBLgnruuNmU3BnmmioLvU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mwjUbQE1woTjiyKYJ9g1wdfkeKxG6QVaRRtu1CzYAitwefL4rDofwaPaMrwniDgw96j5Yt8zkU2ctRknXkmuYU8",
  "key1": "2YEQLV13T9wpLFqSFLRYuGNHqf6gKsF2uw5ZgtC3z6naSV8KMAhgMeHDsjuq28iJHfaVde2uURmwt48bbMACxkcc",
  "key2": "45AqERwCGqoAnPLDWv1GSRfmK6BeQhLYpRz6xpnArnHVmrfCyFHDTYHsECcBuPESQA2yt2FiKPjBbWF1hXzmZSYL",
  "key3": "5nBQYE4wxMo7JQ22bdM8NCUh6gchQxAk6KrEgatoMRMvCQdisa49xmQxBKzQVPymhNZ6wQCUJDuiwiZc2RBYgG4Y",
  "key4": "3F4i7krc95tXH3eGiWVsa51TYrQFPZn9kxGEiM8Uhem8PBNb8LmK1wHHghfKuodAyZsR1U2FmSLyeRV9sSStVdzU",
  "key5": "57Hqx3GcxR73Ph5EG6vJECL31HVpNpokYvJWpAafGc3Kmk8dR5sPKiXQfrqez16BqoJn2knFJT14k5ESZ9M9GwDq",
  "key6": "5StgAw5D8i4vQqou4Sm9tudbzVx96RB5jzER4awNe6uKFcNxMzBYoVizaLctVkdXvEKLNLM86CxfZ1cD1dc1dJxh",
  "key7": "4gwPagBbuafPrkc8twj45ioMcnqBUwNHSHKudLLym7ejrnaTC1ktCBWA5ABDBbutHFpDe6HGTs8CBtKjpDNci4xY",
  "key8": "4Fm4jmEX3ZnwGknmfznJ7T91MDgmVR716bBiz7PL6NnLyNU4nvpPDxJTfTsmq1MPfbkPEZgWGRw7cjGUFtm2qqQo",
  "key9": "5ntdrrTtDWcJ5iodZWniPGn3mmmxdU9zuFtqahjZvSvinztPGe8DPqCM3Wqo9SQCwibFWrLnkgPR6P9EJPDGR1pt",
  "key10": "2ouQn3nApZKpDoy6hZ7ayVH5V1pwWNWdkWaTzUfLMk46LDKR9raV89NCfA1FH7rjdpidFq7exfUCb8i5up14ejbS",
  "key11": "3EzZuufojKzVcwa9YaYanEhh7J8NVbLciv46k6dmEB63R1gNFrXGwYDaCUvHHxLoRhp39NTy5c5E3h34rTByJE95",
  "key12": "2bNdTRUv9QvmxJbZwX8sf5B9cuWGgCDrG21Pi2ZZBSrBoYfa47qf4X1ecExfMCS1HT5Ji8EHYVE6MdZdBazS679",
  "key13": "5HyXT9zh1cLggMAvfMAFpax9tsxWA541Yj9RVR3WAd6peFdN5NuRgZJ8Lbrf5cCyg2aTLhQGPbYuBdbhRrdC2aP",
  "key14": "VnenjePcTvHbbvvZJ5PLifM15ZNNNV88TUp4mn3CWkHynW916rWCnb7G3VKExsSkCf8NyukofvcwC2p1hwof5MG",
  "key15": "5p3xw72GCWqa1oAffMWH8iBM6mVB5DoCHs98RrW7Lu25fyjVWnDJHJKjYKZozmcmGiFfmBaFMRbWaGiGhJVTJzqb",
  "key16": "2sGewq3cYEWx1uMn2jHz5ec1H4HNBo86cd6e81bYKyr4donhJy4Skymwo4ZKi7iDKyQcjXudDEQLAqd9zm17UUys",
  "key17": "5iKQ9mMPaq2iYk6eTsycLjPsinXCrzbzok1iSiSx8V5tpcVY75jscsL3hzABt2Pr5kuinTjdXcibMWa32fvvsW9P",
  "key18": "GU6do7iCjRcRsTh4yost6X5CpJXRp4btXX3xqaghuL9oMrj5nfL8Y1MnA51RWKiShT8Nrh7i4AR3Cwt8pcZji4W",
  "key19": "3G3E22Wn5cm7LUFEdYHbHjuLp7vcebjPijUiUsWc4NvETpusWF1nAQkTEyHvXxZzZZ3VcjMnXFjZ71A6SAmGQgLD",
  "key20": "Ac9CEc3xPLpKbGk5YvRpPRebfLm3aEw2ryfWgM7fuDpRd4m2w1YZsfEGDLCxS2kQbB6QjMNdYejUZhZUtRdNG4P",
  "key21": "2D3jokhB2VjZiwGY9Wm3Pitu3P8E4bvLHNvVCzSev3BTadoSWAQviHuWn9mB5C7VMjpdPeexbSnRcBVnrXoZkkf4",
  "key22": "zeDdsWxWRgaEXXSKZ7WHzox4puPTCRWoX3VSrrMQcJW5bdp29Znpm3syYKhd1Q7bEFDp8ujz8mXsMkvFu8a5Jsg",
  "key23": "5rrKUfWDfBQEzHiQxSyLbZDaCywF5kyTQtPD4m9WNJBGKfEvxVtFxtmfvrKRynkSweCoMfRCuCneuGakEmq4KKdT",
  "key24": "4MgYAY6cjeTpXMXVnJbJsgi76DocEwh7ZKFApSdkbsQZsX2DyPLmvYKespufNrWLRP5jXW2sE1FrZMegDCzjSkX4",
  "key25": "NnDDQmBfV8wGHJxhS5sHDHozRasE8MkA4JdhbsRSKBp7KxzZSHNKZLfJ6kP8KbQdpsQh5MCcAyuaEUwZEBWrzmh",
  "key26": "2WrDAMwjW4mWYgTVimqr2wRaLwoFThz9Ey236Qzqhf4zdwJyrgUN3UBEGEv4XwcKZE2wMBovyB3CWq6KFVVCZ4xM",
  "key27": "5YiqZSvY8TjWebtnyNEQkdnDcvn1SXh1ntEYxsy9Twq14HaUe7ndQG9NtRwGhQUdXoBaHQmSmaPKjkRzmG6u8p4P",
  "key28": "3TGAHBZq1dXbCSP73he5WyKvjeQQR9mv3fSuocpQph2gHy7grp1DCgGCkpYqrnp7RJwmxVdu26U6GBR2GPQb6235",
  "key29": "6SV5L4RVXP71uxHhsaNrFpidAfJn427hrMZTCYSMKuZcqBT9zrDFhXYyzdSZhRdBNvqC1Sf1TQiHfoJtFuXGKyU",
  "key30": "3U8ksQZEGiZTeSiHtDYS8bWjtSuPKwGgidTzVQ9NDrUiVSQoFntCSpXXcuoFEJf9n4zWR6zZeoQjsce3hre8zJrz",
  "key31": "4qyb7StJ9jE86cJdKmEfvxjVqvqDaU1EuDnfkSudWQmjy18gWBNjdejZYMJGmK49EfvoBj4895BVCWHFVjmW7fYa",
  "key32": "2qXVsrMZiQcq2zM4bUcxSCayDzeVo8eRzvpT7HoTfBn1WaBTxZkr37tzCDeSJyfBNxDNayDBFgnSCf6W8pgL8hKK",
  "key33": "qELER9i1YugvrtGrauRL9Hbzepj56Mk83oqamR1LfYyVWn8kzDzpYNF4WoRqXXHrx4Usx73DVUsksUK3okspFZ7",
  "key34": "45neLU4pfRw5KCfboG32b3No7j2dhHnHbU3PcbUpyYR5GRNuz796bjZNqM8SkjYyHaFskhveFo8rq8BMon9d2x6R",
  "key35": "2CHQ84b1s5Lg26eQHfxgte4VoMb5zs3zmQkKkKvGPyFYmaNomzPdEYUTzfx1xynNLjdm5QYDE4mTK9gHbAs1LLga"
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
