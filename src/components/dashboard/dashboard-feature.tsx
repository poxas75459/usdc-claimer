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
    "5ntqmwNZnT1vhs3pRh86yzAqLqti52vJArmeqjAMm6rU4DNf2aSZQtHuzkR37Zig9PBFz5vgbSFqYrQeMdjQTDXT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HDcuBkofgKyjWyFuFuczBurNaQWcpicnJzow9tPHhg3ioH7RuMBwbXC5exZcDmeZPPi3oAvsFK7zctBX2goLxYm",
  "key1": "4V46XUh5wYfofXmQAhxLCxEHfu7iLhybAxsfCMU7ZeV5rg6TccXeauFxFQfFRxNazxh7YTpVW2AJunxbcKTLLx8",
  "key2": "cX66abkoFhRX8wZpAwUJzTmgyoJ3yMSHu6L5j4FK8SeRe6Q7v75svfTykgyV48k1uN6SvJ6xN56EMB2DqCua4hh",
  "key3": "2vfX9Xk4PPoKpqrYWCXhXL1c7oZRPXD5qBQU4NgC27D5dEfwcoAcsn3T45NsuuXiYk44dGa2LfuN2NgfStkKN555",
  "key4": "4ntCwDzDK8yqMYsGpEUUP8iZ3f8HpcjBkY9xos7WR4m8MAz4oocVfmckGs1mLCPykuJKTxD7BdJQsY1GMuxhbaBR",
  "key5": "3VWdWLU9qpWepwYqhF5RCbHJjqB84mmsQxBUfYpkSzs8BxoBDSKQ1Pmoz8twZQkNr6SBJgm2nPgUPq4zHkkpouFK",
  "key6": "4ZdDDCxghZQYS9br8to3WgyULNp1TEfkvBcLReHDkiLpgrvicZr4BGmY8JxPJ1c4Ub3rBtj1FoPsxqMqHQnfA7E5",
  "key7": "586232TAFxaR8LKr2vVnvBySD3ujgpHRTQwtwXZxi6Lp9FZft1eExn69NeaoKiRi9zDVZCpwUx2MZz4MJGURcqTd",
  "key8": "2EouE2ctMK7U6ZbeCrLqcsPF17iwQFYM5oxs4g7drLkjrEsCQJtcnV9koYrxsXVGZNF64eSCnHKWMbcri1WYGAmU",
  "key9": "JvaqqwvJYwkzDxDhnfYzqWnBnrJNpEyF9eHqjYE8d3Se9CxXedJsAPXfQcx3JkTsDtq94nzVttma7NPi5ff7STt",
  "key10": "4McZw4T58N1dmDMWMnF35FGhkcXZxpEAAAuZvo8huDgtjkiLV8TafM4BXqE4QazAfaXuwjnVoG7wgaHKndFk6iB4",
  "key11": "UEyEjmeoq2myt2hkFr7WLMXD7m3Mb2S3LTWbxvnGJhQfBa9v1d61QAibPSaMk8HKsfhaYPSypQ5XyUy17x7NDNz",
  "key12": "4nMe8BDEfL2hFFWFHAnc2AprtD1irYAFu6BU1pwgG1h93tr9ELm9KsYzKExv9iRZQmD6ffuBrUzAXH4G23bPLk13",
  "key13": "Bc7ZXG9L4oBHRW5aTth2XPW7odgfYmWEaF6QYtKyYhWWQn9AKdhkzA5W6aSP6bjrJX54Nqcz2Sc5xprvF2VLo4b",
  "key14": "4vDLJSdwwAXJg7PwmVszdYgfGmRCKy9KwiB31Qx6Km9R2gFFGSPQaaHT6jdSSrEEskxFzPbnsfEGJf6qSRJSzEyE",
  "key15": "mg2f34cmZp2NUHoEmp2pQzUUPbERvNdcUj7KJZUKfFwkuZfqmVSb2vBtBEHGRfcaMcRHdFDA2EZGh8ubH3pxuBg",
  "key16": "5TcvjePzmaPvJN8xzHsWvkdUbBCL1LN5ZxfPff94sedUahfHHWkgeVWjRQPc6P58oFHVziHr9jTFgp8AeRudTmKM",
  "key17": "2GwxWBcdVCyPyk2Ge8sffSAMv9NWcBvWJmcYHLApoC17oPUoG9VYYCVDEezfQpnZnJkynK1ioeFsGLJ4wkm9tC3C",
  "key18": "5WXvwmmDmgiXBbMBsze9eveGC83sHxdRXrNpSZqUX3vQwMcM6bzq3nkZjR319FUxLAWi4aA7L6StPeBQ7zheszaZ",
  "key19": "5X7JPgJkSzQUPozRhZWeTYYrexkyGhmn6uAuDNWSf6tfhEXQ9TTLvTUEyMVThqMXer78TnybrpccQJ8KSzqreUhj",
  "key20": "5RJF6yj1F5EpCxEM1Sksb2UX4riAnnM4HBDAraT8Bd6e75GKRh3WVKsxDTtmbqJKaRGDRD3d4K8PfzZ4TMG6btUp",
  "key21": "2P5TMJ6xE8epXQALEKGbR8oqpkcfVKYN8MPSDdqfDnWSwo9wEKyjHKbsmWr1fwKGyV2cWacavNsgXn52WL289WbS",
  "key22": "2tTqiP1JxExBeqvjVZUMPF94pnRcSJnkHP5pY298eUAU9FNK49CqFyUxRZjDY6V9aAEs9aCS6u3SmPFdcsU8e7TP",
  "key23": "HQss6JqwJGkaTqykQ51YebvcniTjCpvhxByq8mHSULXEE8gekiJa7umozR5qckXVmL2VpPR7az6JZuNycyURLdg",
  "key24": "4i8MdLf7evvQTHxj9aJvw36QBZaYj2EuabQhzKesamaEiuYW8FvJAK54EZuqcSei6PrqnuU8xDiTn8JeY6RuV2DB",
  "key25": "5zB4WQa62Zu3kA74nSM4afhk3gwY9rH8FvaeiRjjBEW7UQRHjUadnHBPQwPB1dj5RhFmYi9RpaCSJjarwBGxAEPc",
  "key26": "5kTneJUbNP8cKm7fDbWS6LSeYd36SFMm8vrNPnV1NtS7VoznDb24QGpBqnP9GdP7JjE32WgkJnwAbkMWgc8bghB5",
  "key27": "mwpgZWLutx5EeN2LbGFE1o5s3giY5UdAhnNbn79wjfsiZErkrWv5QTMCWCPVvBJkocCAtR1VBTN4NonjcfEWP91",
  "key28": "3Bvu9VcxjdXiVBSTxWWBbQUNti8MRhhNxouWNt6ZwMJkm6bGh6h4F2FmMsCJ8kJskohr8abzcJ85fGeU7igv7Xi2",
  "key29": "2B2Vxq6UoYRkyVzr3ep1xbxY5okb1dm7q2UwVYoK9oC8YuXrH83qFv4cHJtBdw9J2yppw6Uj1sihtJd56Lt6aazR",
  "key30": "4eTvvNDgfdJ7Hvd3BJcUfnuerG4QBSsGJKQTYzKsoLzUZ9Z7VwWJHMy3GFLjucey8i4RNt6YchSYHsVa1VxuC1JL",
  "key31": "2YthkRpTRK5BKMYmqewUCU2oA5dS3AsRMSN4pmT1ieKQ6PdymgkXWQ4V3B1ptpJ3CHTryB1i5CJ6xSMVLijPkRR5",
  "key32": "4h8rWjorriqvtsgWBsRc4zVDw9AuKmXrURgv9RtAHxR4DN77aap7HbYoPMXAiQL35dxKRWMcFmsiiejA2rZiyjLE",
  "key33": "4zLS2ufJRXFTWXGa2AEHMG4t4mLdb1XTiGUnXRDdpjqW4UZt8PW694Kz4FcBmAxVqGLVcj5HtY8wjJweMHJsK726",
  "key34": "Fme2UgVPeFqtEVoHhNyWpDijH7gF7Rj7XWuaQBKgezjADAEaFt3J2dY7zaGCXw8bfPCjKJX4DhJYnWit9Hvt1YV",
  "key35": "2GjZXS5yGYyQGC96MFCKn4maJ5jct6as1aW7FdbDDy9Ce2wSEpRVTCewLQfKyvNGMfE2XfWZsj2gAPE5MkfC9vK8",
  "key36": "4Fyw2zxAimSBUq4JXR56hZAvt3qBAvZFKWhzHAAgGW7UkvKoMnn24ZNJWeuP2oT5VD5Bqa6CRf8nWWBwF9cebzkx",
  "key37": "3sS9u9xvoeLiSm65Kz51XPkC55Azqy9DyZf3zSizcbiWCEbu5pHdt5KsU5VXY2i4ZXFZ5RM4QCEm468Hka3JyRJq",
  "key38": "3WB1ipSVLTHFCdb4nXiMkApST2tMrooLu6idLUTwqYTyp2cgt4zqCBhb8aGZ2UQjgobmubhKwVWfHkneSeTtV4jm",
  "key39": "5uSoLjVX7JmoHDP3bnZGTjTkTQ7o6jDjygz6693HdJYWoyhvE7jq8Hsx5VcBpdXCmbnuSJT6vP5TdoZUWS5YNQMN",
  "key40": "484WLCeUym3BSgaki6Dd5zXQkWgLZxb8mi2cVChavHXBwnjsfCpfhCceh3y1n6RtVdigeZpT1arDBCq7vjVAzFdP",
  "key41": "5SLyVVhRQ6u4yGqeSMUiXVTE35Hkzh3rj5PxnetaKGqGFN6CkdEHHwK8nzCXDx45fqGUXMu2ozpZkbfAdYiN39sr",
  "key42": "4LB8xMcfTcQ88BDDU7kqgBXjPqWd4E9Rryj1KLBcuK8PvtssTWLEr5zmpzbgXGc6pK4G37wWGpTzk2NSPyBf8Vv3"
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
