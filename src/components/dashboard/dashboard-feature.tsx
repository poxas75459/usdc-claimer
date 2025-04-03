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
    "2Z8DupqLHFowGAFCqwzctdzFVe2o6d9YZzgqGaoYjxBFTUXRYiuU2Tgg13BG98a41WUii3cVgrP3eMsVZTQBs1f4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WAnRYTH6U5hhaYBYaH3fE3ZsgUnyo66WWP2H3nZ933QMoR3sYpf273BC453CfcmyFjcg4DeodtAnA3eU4EFKrY4",
  "key1": "ERP543iTGSJgCQM8kQn3dai6BKcPaMQWLhUdycDDeLUcfUvu4wCxXrBNDdERVP6Q7o5dpUJ9xWE75sLQNKKM3ww",
  "key2": "53cJ8GPeSBq9sArJBYgWq3Qv9MS22raHZD316KA6tANykiJE71PsxoMZAymF844bR6Y7mQFbcBjsE4hKkZDXCWQm",
  "key3": "4PVfjmFBJ5CwBDjLaBSjqAUVywnUdoFN6XYWMckkYeNjA2RWun8oCEML13GjXoqgW8NXXsmRvqeyKXChWokiPMRT",
  "key4": "2c1numURheXybgp2uZYzoNMNc9h3fnJ4im2FeuNH4FrVnJMXveGtiNUqUUYg3UWGjPo9WYC3TuaLxMULhp5W6dMN",
  "key5": "5nwSaQYeT3J2SC5r6qiZEacosaNYz8L5CUPV59VmiVDEXjK6D55WRYwpmdeg4F8wWaG55P2cGtvvPQHHQPbbELso",
  "key6": "2d1iMhAL77RYwtcVGLFC85jzRNCHNqj8t8szXY82JYj9DcmnDjkrwdxyNGymWrdSNRcLx1pS9XFqviBKJvGfkyLP",
  "key7": "LRBByyUgdvgAHcMz8hXGEsoJNnZZY7jPZyQvudrcSVn7HmQ4pv6woJBkau1rQj5UV4i7b4GydPQZ6NvnUkvNXZV",
  "key8": "AdLcXTtLru86Xe5uV7MEfQVtRBKYDoyeB1uqeUyy1YBLkGHRMdERLmw4iAwc8LYSE3Wv7KbbmW7CMKA7pwxhsnb",
  "key9": "2fjM8tb2VNVyKbYQ4tQYUE68AmG4ZEAF3q8RNyt74PCbD7tDJ6QgsbFsZ5j53GrQZv6EeDLHdkoTty78BuZjWf6a",
  "key10": "2avCb1H8iKBFijUveWHeuvQc8wdMWjevuF5KPmhRsaVgLKGd3dVLwCNKDidNSMmzhTG9JLBsG44Xzj2Bb8AcqUFR",
  "key11": "2aRneFowZcnoHg4EU9GKJWKyEgju2J2cLgpoSYtKUwoJzmRXRRbShYekstnuBNsvQn7hLKv5vsYhZujw5HauzaiM",
  "key12": "HL2vd9e7xFUADq2SN6NWtHR9htJvnxBiPHr81UWxJSNbawqSRbrMQUC9Mf2UxSJWGQXvY2FS3GsTPTddxUNq1Fi",
  "key13": "5eYDLiecDPH2JVZ7TF1BAQLyZwbzrTHrhFV6h9mZQYsFYfGfGn82uRcaMrFHs33fE8HNBqxaJeB9etK8k8HfRVsz",
  "key14": "37cw9Z8uiFNC7gLpAC2qHVANgP4bRkvkiErdTcJTPTkznsdFVBGvRcojFeG8fw83BLSYeYqovnU2dC2a5r3Pt7B7",
  "key15": "Pi5XqLeAYz6zMPghjaWou7kxFGcx4HbTYXcUABpXfLN9XoGxmuwYj5oY5cUWjysZinAmj1fB5jYcmrzKyvYTfHR",
  "key16": "5qRTymmusGMrEbuNTVxdTNL4CWuGXMJXAtL8MSZh25ks5C49bCWpfzfaN8XsnsQUA89R4rMpda7HGUMQ3NnTqFQA",
  "key17": "1wCTv7ecRXgcfTCVE4hHMGKju97f94jLbvFrqjcYbv23sfHeh52Gfs1di3YjA52FxaF8aMzkekah2DdazNsinfa",
  "key18": "5WHhPET7H4zqerp8u2UNGPUTy7SepXcQincGR48DYTFh261kWjWFxUfR27JQ2ScTFFhJ5hocZuzoiK64NWsmpQiV",
  "key19": "bjswmMjGp1i9KnuyctAgTDGiuD9tD154FbSaUeqEWU3TMsQjqCc1gUqL3RDqm7jA1GNKKpbTdGjmsxFYMe1KhwQ",
  "key20": "CdxoB7X8KEJbUaTUctwLYYkiVRi9tGRSTuqUQHdnanogbGfbo3baKvmUamRNeFUD3Xrj63Hdc53MmCVhSbKHZTM",
  "key21": "aaCGra8mfXpJxK5bKWLYY2V2mWx1XcPjsXY6u33RJX2mHFa5LvvJpxwqbw5WX3vC26meBHrePE5pN21H9CE46zg",
  "key22": "4vzurR9CR1FFgU2zUCcUNGrvbdFc8AhrVpiRspLmhuDwqJMvJawty7sJfGpbhwg8UpkrRGy7GvXPSx2ofZEM7kBx",
  "key23": "32JTMTxytFeBPp2RXUhJmnSXfJKFgVrqzLQNopAZfKw4FeKCMu43tAczEs4qXmoJuNm4E4iUG7oHFJjyNbfwPVYv",
  "key24": "2nD5YCLhyatmfbJA4t2Vy3YM2HdtoCuxSsLogbhJ4rUJJWfhQahHJbqcK4BR8uTa7jGQ96zbwyiwqTzfCMhxvRGe",
  "key25": "2X49ULLmHUkDdwbf4GHoRqn1K9QgW6aEr2U3RcA12hiEY2DwJDrSkDARrPgR4UrRbxwWuUTke6iehYwYpcYLdApG",
  "key26": "3ecCXZkcmT4u4i8qGzxG1ssr5ikXsZhAiy4WuGK3X7w9a99UBkd6qRTTsmrSQWcyiTtpX7Xo4Qoe1nckZmUfG3K6",
  "key27": "5s8Cvy2143MGkfvZMshs2xZtVtNA1rowp3JGDL62rAC2yeMrucNGJgLTFngUfJXoRRDZ59AgKv9tRfbcFGyTEGwc",
  "key28": "4tSw6LtJD2vHgwr38grTcegDDaBKipUZNweo6pdbKeXFMTAzN4kpVWWWmwYoC3hsXzanmD9FJvCHnYXw1eQMHRT6",
  "key29": "2hiSurdepSPqh8vK9gnzA2W8xesVaiudSXHBE3yL9uLgsxLkhpPuNi91hH1C2b5CNpYMVGJchjFuYPMvtQKZ2goU",
  "key30": "3TCtNS6QyLwtermTiWZi31DUeoZMMg8utvKv9w8SSyCw2JHHnTba8DoBn4N5DYrjHE7Fnbp9UznS439c4fDt43Cf",
  "key31": "4FUkDDpJZB2YLDWpFYp1gaJ8u7gbMp7ZTQyaFwZyJAXkNF4Ew5oGwcuG2ruBMK1hsTvbQLm8ig6PspUKGvG7k2wf",
  "key32": "5TnqeXjhmM9V8rJSw6zSbjJDycgoXBBDimxC5BB43P27D3nXbYgd3V5dxHqCSnraJzS5bncjdGp2Qw7gdrmuD4AM",
  "key33": "63vu34XnVcgTvNJNcidhTdTWQdM8EecZixbR3rH9sPr3zMtogcN9oeKKkQXqXi5SGB7jt5TjYhHBWvmUeceLeYJc",
  "key34": "4xAqUhaCYbfgopTZePLkrKW9jPqYTegaifbju3QEKPfhFdEsn6uAQAryjt1C7aGvfqjxvDze3XG8EDNdgzDHPXqx",
  "key35": "5zYTLiXkcA2Lb7ax3gjyFqQEDzyKDhvQcUNKDGmhGtveBrkNHcinpDj4jAdex8qEZrGShg19BxS86mRcjP8dE5o4",
  "key36": "51QmABDVYDVQzL8i1dY86ByBJsW2tFvDmrkDnrBdTNa1joSQzYyioP1y45fCzy5zCeXYjd8mMXAwtkUHohQQHzWZ",
  "key37": "3LoPnvQMYrBvTMPQxhwGx95WCtFTXod3uPeeY6SFA3RY5CMYFGSsKCi7kjksVcxJFnNG6CPpwuYzd3UNUBimbD7H",
  "key38": "3S4jd5YmjUqroyZF5wx8yihyGWeH4Fg4xafNN4Uim6ChihnM6Hqs8ci8Y3phSBp6x8XsjUrhvtDGnumwk7oJZu38",
  "key39": "BHKaAnmQMcyC7Zf5g3EkJneH5BGTHkTSQTE8W2qsmAWKveRoCj1fgbZyFzJ4o4ejZrgMAvbbiCPmAp2V7ett1NK",
  "key40": "2NyFXoe65C4FTH2UGKxDfpzgpSmWm6vS3JsuFkdtQsmvVXxWgn6vstXxPHgExebrX7aGbnT1b1o9oCzndGutkHVn",
  "key41": "5x26YdRtbdgEFqJiAfkMv7bgewQNnjdkswXbqEqbgdq2Yr6jw1TMypBexYefkwoNkfPjuC7vhU6biK8njRqUHR11",
  "key42": "5SH8QDiR1Y272ZyWNnbbSiaxgDJi2sgoMifmfttujNiA7o694mWL5S2nkELkQ8jNc2G48SuTcdFdszD1wVubK8Xp",
  "key43": "2JLW6QKB1dZjrYfX7Qavue1QfkLx8rwh8GVekY6Pobh9spxSHieQQP54Z6Lcz98NksmBPrptB4TtjGqLKQCe2iGK",
  "key44": "5pMevXCgmBeZRG1NGMNxikMWQcbCQezmMgyLSYfFP1F3WDm5qvrqqndWJXRfPmJgFaVtNPZqDacBzYVfR3qcJaV",
  "key45": "55aW7ygMQuCPV9sHkKVcs9R24RLLQZXnWGtsVAfTntHD1njwTztAjWR8ub6WMGwm1Cwx5G65siDtAfVM8TYJsdBt",
  "key46": "v9CD9sFAtnmyswR5LSrF7peEme6Pq5smkDdJv33cpZ6bHkudTh1HmBbGwtQch7unEhjqvqiziqfezrBoTUsb4kS"
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
