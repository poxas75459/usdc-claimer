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
    "MTECMCzAtkqLo3jKSznwhceYDGyDQXcXjjDtpoH6AEr8YCcB8Pq7x3WhAVDdfPjMaGCPLgCijVEjwKXwHc7UktC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48Hep8TG3t6Z9hHhoFXu7G3kKVfmscSWE4XaAEoCLJa2nTMQSAvYMu1NhnDzwUqoT1P6TVJbStw1a14i4e45QUbh",
  "key1": "4aSjYJ8UWydn3T1c8TdDvjYYpgDoKWg4QbQxnetNZvehtsC5M57qCZi32tj7TyLV538b9BxDgBFS6XPsJPtv9FiJ",
  "key2": "5QzPkNi8KHN5cZADabdjwgFJVfGSEhQFvMwesV1B1revVDAvQyNCR3Z5QyM4DCunAHz6fW1Gi5H2ipndtGaAogUQ",
  "key3": "4fqKvbi8xVP7VDttaxSzxN5Qq5Ubx5yuR78dhVJNAoMjxfj6fNgB8dhBnamF1pT1rF8A39rvdcDdPdPkW7bo6TMG",
  "key4": "m2fRuan3eJ1PbtUZkDq941hq5bDCqU6tCmVxwGryp5GhQfV7FB3jbYm16EjgcM5qRZK4XLNTomBwEQLZzxC7DYX",
  "key5": "675grcgi741bfzxGvnk2w8ZxJH3fn5Lq3L6PSFfdrYMJke7zoGc4cFCdGMq7rpkfhwrYQawngRotqYcaPYqwrgLV",
  "key6": "4hjp2wCyn13tPJNzCMLw4XNzbxzSfFUPuCZvBjUtJftRrB3ubPw5zymCKuuNK2vmxLgzjT4bbpTnUCiBco2Z59cw",
  "key7": "3Ddvdxm19RPcB2CJcrPKHrPmmmAZeCMmPHq7NdysiZ1EXMsF76MR1nxc6UXVCJE8NQadUurfTR8aSb177x2cwg4C",
  "key8": "3qaUnKDH43oB2oZh8HzPjTqdHdGjgGqssYQptdT9gHXLzWkbYEy2esyi4Gow85R933aujmsom17KTHUU8cQMEv6u",
  "key9": "5ykzjYqpL5wsVKhqCmF4Wow43N8nhcKbJcT3D9ZzWtCnhCTSmSMLZ6D7YzkEUAMMEMY3dDdwysQq9WD3GH4JrxZz",
  "key10": "5mjPd1abARuMCWDh8D5g1hKD8KySVENscqrsmW1hEVgjLYDn1qJWdCEbGCCvdRD9qBr3M8MRx7nC5rtvkmWrcoNP",
  "key11": "2SrBWg9Ufh7xj1DHr9MMs4yCHTdt2SeBtYLEB2Goiyb2VwHoK8jxFbeaxa781vx3XbifPPcwEhJBToUF2PAU9yUy",
  "key12": "6e8ZLrauMEMEREmVuMCGkythfCxdwoRyjYoibH8KZMwwH6EzUDbE9nDfN9PWcDNerkXqFfG8xL5daAeGyeCHJXX",
  "key13": "fR1FrddGLnq363dBSqn2o5pHby7SN9qkeVBpqnoCebE7nWXaRC1bjaDUYLgrUB1BxANrVK87aMRqMY4xYAmaBGm",
  "key14": "4vtxBoTuSbMnFjaEaTuQiKKtrnVnZWeNFXaXMQAvw7Hoi7YuroiKwBQvqkpsGpfu3S9CBah5uJa4AeHJrXeb78SA",
  "key15": "CG5neDuj5dCZnJLzoabhJ6ozQMZrQKEt7DAvLZroX4UhBxkpyKuQwt7MMHAHrFyKM62jDPaVbDRHjXKfedzyAKx",
  "key16": "5SoY5WaeACFrgCwU36h89tA7GXMQ1L1if1suMDyVcsFUeXNeKmGZ8knQ2L3LsxfgqQxKrBgMVHT4bkv8TsD3Xm8H",
  "key17": "5MGWiDbULctJt8mgKfvNdcgCS4cKecyTdTRgRk6LK8H6zjwCPyrBdCGoUjiJFVSZUUNYEqDqKDmEcFXJBT4vCkhG",
  "key18": "tFR86FrN4ECfbxePzF8jVSQCw9gBVbiphJ2Tzzaz2JFxcoHTi6haL44i6jmU7ThpajbnAsMSTvir9qc8aZt9Naz",
  "key19": "26xJ2Drx96qoYNhv32DjauMdLZafWTqzGhSXYpuVTwEDHhPkJDJdesdzu9MnSzPN1LHgAxLVMQLX7Q6Mdqa88JpB",
  "key20": "3FZVa7yEz98uzZgiEVsQxhTobqUgaMd7SSZiQUDqeMDYvbbLcnNYFCkV2THwitGFxwNdaTS6LUriNcW2kGmJ9ted",
  "key21": "H5csSLXVr8vY9PYdRCG3HKVQWzXgb5aoCTRb7vfFUprbo6caNixVbVLZvoQEuS4cocBrgkmvku1ZKhg7JY1pMCG",
  "key22": "3behuFSETqbutexg9S165bUoxNbhzT5ZJGF7c5s67UNyPkUfHMUXV8GC4wvrhbX1Ezmu692pJua1y14KfQTNUsjp",
  "key23": "uFfYLK39xpzFnAp64EcWBTyb65PKeRr4AA84Qa1z34BhGh2CZAREeBQFKRT8zvyUV5WGrh3UCNTQQEfGf6ntf27",
  "key24": "3TRAWTr4YyHiufJ5WVwdS8Xv7S721sMSnZRDtTs6Xx6j6WLqZVSwxoT8B97Vxp5rrYbk9bqd4cq8YGmgEJxhaKrf",
  "key25": "G5EJjyHtQerso7PYAhUa4rS7W7hX5NWRr1UxUEAiXkUpHio5rQbceJovJrqfbKJabXGQZnmvZWVSRES537u1jtY",
  "key26": "2C6TMaRc5Ph5e18jRW36CQjQUZ4FyekwYF9ZJSJ8nKcexmLgfDhVP92sb72QrqzaztdgAVNL4QYrpXHAfRjPfttG",
  "key27": "2oACdwQNu5q5aGKMiwbNsNT4p1ex8739vxDUGq4w7LocgtWVc4czV29hYPLoGiGpmWSMa7mCpbqaMjSMWcRbeBpN",
  "key28": "35pFyRfa4xFt67EdNZvxGctF4hLxDGFjbCFZsLiiZ2xT2fJDbMxBoSihxPVCToZ8MG8LGwiq7XdVSsNHd48cQtfW",
  "key29": "4JfzB2M9cyt6BSLwSHW4YR7j7uHeMvtW5avMXr2bMote48YKCMNVB1dhDMiDotxRRcFWB7RUFrvWQAeGFDs2VxPg",
  "key30": "276zLLMkwfMqLwccxBCyfCMvDCjEeCH5WdTpXqY8JwDevHrMExyDSmdCsKEu2U5xCm3JkxH6udf3K9wMagYTTeKT",
  "key31": "c7i5xjK392pXWb53JkR1tcsxfpm9tmG6McpetWhgrUCiQEGxxGaVYdFrcogApAAMAB87jpmNog7xJCFCaugwcq2",
  "key32": "597kn5BSA3raekyWtU2P1ofqBpzHSsuGNLgYA1Nkk2HpsXF7aYG5hov2zwKijcqrn2ZWHcpoNFkwVveVkHNkfEsT",
  "key33": "2cb4MPBqEM2Vjj1wHLfDiXpPYtSYXsGfAv1xEuXwkL6LSBaLdEE1y921oxw4ftQepBGu87TAonhAr3MjiG5Roazs",
  "key34": "5PxhEjWWEXb1xatydgpvrPzRFMAKGtdFdhQZPiA5VmSkvnjJ5sVfWbftsTvkxyee6RzxFUMsExucAh2oH4EERmr9"
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
