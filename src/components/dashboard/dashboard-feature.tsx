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
    "4jzauhGGWKpfBgsRRegQxJpKoYyFV5NAym18vGs8LhFdqUBA5SWJLDscvrcnrNq6n8B8twQfH6j8sFt9we7UBx6w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S9H42JhSwHvwcZm751SmrnwdaP6YQeyVLhBizEwdkhin63WU8Z3wPnPxDZrRVHpTvXa8Ga58n9Jjw8qibp3PyKY",
  "key1": "2qZREcqrPjLe4HNPncec5KrtEuERsyB3FC6Zqco1YJNB5hV3u2BpnoPV6M54jCWoktMEdcuRDC6gBVtXXgW1TDEf",
  "key2": "2qRusCaZtHSmJVRF5PpNX8TFYqEXLgXvysv4RvoWVTA6QuVg4rRjQieg8aMGR7f3SZ6WUuraRNRBhrxLhSXhHPZb",
  "key3": "62CzPtf9UMqxhB7HEXvosF55oYvxiqzFdv9CsGGKCZ8vSqDbaJCu6S8tF76UcHodrUN6LsE61zxBcovnzbsiZiKv",
  "key4": "1g55q3KiUY6dyE3uCDH3pU4iW3bx8fMCrUhD6bwjnMXwJ89aBCDEqkWDP3V9oVWHAqt7YWB9Pjxdiq8Eov6zDRh",
  "key5": "4dJjfmAH6t4Dw7qUp8yv5AVp7dX86vbQL8x7VC7573HenP4pYRJ327hkR5wV9RDpLgapVuQsX1z5yDEhhWhhK9mH",
  "key6": "22RbcqAizZZXgo8TiU7DTguVchqNEhqxiASRRnR8hgmgTThm4DC2GFoA14qQs9z2MpMzVNX7yy1tque1AqJcFTfK",
  "key7": "Cmr1Do9TxR2VTJYU7zDio5d8DzG42JGtvbpPGJWkk6pfAbpkJmQsqgVboqfiJsuhUsJPo478pkLYuVMQK8DRrgZ",
  "key8": "2fzJKNstfZc3DvYK3YwUxuaiSzSgmLFjFvmi5drD9mEkMhEDiUg3MB7sLjxEoWBjwb8gqhfA2xQKuCytqsFyzCPZ",
  "key9": "uxCHjjHgtn6k5Ckqny2iHpn9pJje6CCdxYQG6Nb3pee5JZbvaQkqtyYx3cCBt1VMJ9u7canxYCVA9NVSCNXCgTE",
  "key10": "rFoPc5kPHN8UccmtwzSgaG3qqwuF1wiLoRLJ5XjXNnT2VsJAaDth9YeZGLw9oKrWPV6dsiGCFxpsiozMjkLgWPx",
  "key11": "YL5aa4Ho11Z8T5enFBqGXdyoEC3BkUesYWfrczycuyupEdRqfwwQs88EUYg2zpUWJKxpYTnQPq9DUCw7nHAjhRF",
  "key12": "3CPULrr5rNqUefr9MeSodHWEcUc3XHNeNy1YPoyBkA4T3d1YYuzCjDLhhVJA17HwnXCLRcm7TV6kJJ7fbiGJ8a4x",
  "key13": "62ziUVQUyjm82W2TgWFZtGwV6LGR3JHQBPZcj52jC8ioFsK23VVGQENDZVMi8NAXw8yTAMKkHtNpu6bPmx4VHKb4",
  "key14": "3DePKPKakZFa6rWLwRxcZcFhDRYRWgPDcjU67nXqinMgj1ii2mfZZaGDEkkSY9LQnBpJDYi66ajaKjfXryjfDAir",
  "key15": "3yE56TwwZ1DZkrXTc5kYWHbiaMKuy2t4tmxsnvN4oWMudNXMkySvHtkXEVNhFh7gnX4GtFgHcohiqZBxciRWW8iX",
  "key16": "5nCTUJF5Hrc1Ui1SmQo4GFPGbLzPDe8eyACMJcFUBFrfSFMHNQ75ZKcxxEupac2MZjFWdxUTq6z5CEQJUnVTHZW6",
  "key17": "38yhvybpRkBiUfBiQ6GGCdcTZjcn6A2WWBfV5WAgZsLf2zAa6f8GPRvvpgkVf5VhB7BAKZewiPf9znoCF7MAXg7a",
  "key18": "2txqmg6RBv9QMCJDgE6Q6xKVUin1vvrwGzFka67jdip4rAxf9eLH38WPqjC8rhaQZWnUtYG6h91iLpSWxpdCXyYN",
  "key19": "GcnNevyEFStAoeq3CebE1yvv2y3d2559BdJ6eoHtj2MwHZv4LbNrkxX1RyNY2V4duCU3UTM38axVHHZv8ruEKfs",
  "key20": "4AxwiW44UxRB6xyDoekkP94qpZgLYqEWvtX8PnxzGuaBHmXxQGLue9BEoMFADcPPs1Ac2cDPDZ8HTK7kXnfY3FdQ",
  "key21": "tTBQsmxY2tbE8Z1UMBuzXpff1ezgVG12cpeyP118HTEmZ79gHsuHPtxJ3pthjMhYZoRKyAMk6xzE3xUm3QF8re5",
  "key22": "4mH18u1zeLf2Sptp3ao8tpBXr7at77ADQ4vVRMgLSXaQK4grTwLrkgYmtLJ7rLEzg9DWydMmw8GkR15cRYFGQkha",
  "key23": "2wHy9kWXeUgEqj4fWpNHZzXe3k4vuoUHEzQAiX5NDYE2QDtjB22i3DpSBtjMfvpxrjurQogHfpitYnVXt1UgoRrZ",
  "key24": "39MfQ4XU42rfg322LfDndV8DirNNf7RW96t2AZ5GvUMCYsqZZbu2DYfBEFHC3zJHwXzGEndPhyzdinM2q3AFcZVo",
  "key25": "3GYMURvboZGkMbxVFE78gjK6raSM5cPau7FpGNgiRcw1ae8qo6ByZuheaG22DGpWZov2CJRkG4QK1DGBsWXFwT5Q",
  "key26": "5HZt3yhP5CzXZgotVd8LKiVEkJEdLrFTPvmHt6G22heC7QuvBB8LaWL6amsbH9yp2sBz33nHsU1TJJotBYektunf",
  "key27": "3Lh4i7GCSfPf7AjuyjC3eqGZZPvajwxMTTusw9da4P1DauSKbwzLamUckF67oFwXni8TVv9F2BJPAeffdwUTmupV",
  "key28": "8dT1ziaG3mMErzsyYz8exKcFqmvvWs6Xd9etwt1ZV6VuHNrtcNX6VM9MMZa4thsYrbYRwzobcM5vhu1GzXxHkBo",
  "key29": "4sVmaQexzS1W4thc2Kj5FAqqvcBXYZyDoxcBVSUWkFMa63BgaQDwEtyTiUjEDEsMDboRupngS2SNhAaM39sHQz9i",
  "key30": "5zx9jJAguuvwugRGmf48k8Y8BQ62TkiYs1rSCTyx1wDehNUVfhH6D56UzwWay77452QkQMDwYyMdJT47ZBMoEfSm",
  "key31": "5fq7PBQKuC731L99XcLqjW7NDEBnJa8NieQXjAMaRvxMYNzE8jhRerVcni8yjEvEdnBMJni9pu6BVQe2iAKZ8u9i",
  "key32": "2HNccPAwjVjLSr11ZPv74P46xLSa22wXJNF7hpsVdVrKGVDp4qgYNaYTEVdMjgcMLLzhkg9bZVGGPTMUopfikaR7",
  "key33": "4u1SuttrTapTBZTZdX1yMsH4DCbmEmxjC1WzHFhocmgXLAoYR6C9Y1qoJt7cGA5zZFPUCznNXVWsiphZgfdJLZKs",
  "key34": "2LuHtsLMK7jwZCzMDSN3daP1JN1Cr7Xsx35xPAFckFGHyfDL42neBR44pwHngKu5haAuWaW3i14Sv1rz6BHVw3Qf",
  "key35": "636MTXNpPLLpY47SdqiNdu7mk8hoq2ZUJtEbFcSnhE3LdhZddpQrP7k4mU5RufoXv1RhTcVDmw4CDkR94buXq6Ub",
  "key36": "3VS6vHt5guM8kBvudhFxMU9pkz8ZA8p77tfvQDdxV391Kaevo9XsY3Ndn84hTuXHdh2CMEoy6rbQwDEt3GRJqsfD",
  "key37": "5xZSrokSevEchV63foxDR4wW9qo9BtPvHy4feFPsY9Pijojqy9q6CxjWdYCu5Tm9UYKQyJKkY1Q1Rmovqa65RxPD",
  "key38": "3Cs4e7hVGqmYLPKq7d1ys9YbbLhc9nMqESvxHPrVPQWCiMZfbUtoKgKT9mQGECGy89JiXX8KpiJPVw7KKvBRcx93"
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
