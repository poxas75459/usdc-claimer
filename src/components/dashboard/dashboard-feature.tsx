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
    "3y2yHjCr25wVWDqV1Bsb9CmTty354JuUdLYkRXDeov1B6NZxy6hdbyvXdtZK8G4BdXuz8YGW9XGjCdDWAHt8ufZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GtcEirdCjcZdYcH684QnBQcnzBeSDHxR7uLM88wa33GuSE7CEJrqWdn57YnAkA9sNKquVrWexMnLNGedWd3Ko6N",
  "key1": "3YVS3BRV4nWjwUn8YHoZyYkQAx2S1hvjtSXyMzCTdwqfEMhbSqRSuXErdEGAFEucA755zG51aUpYeWWLnY8vsrhi",
  "key2": "z24Du92NWaHJmEnShDQJLBXaQTV5tAxVWLwYxKjqXuvf1Yn6teBkrc1Bk2Q6zo8J9CkMjRYWt7uw64sxF2zBAhs",
  "key3": "3tF1aN9shqaxhgi2Jw262GhYNYXj4qt1pz7UX3v2f6WMzqWfmyibTKv1XJc9PRAzHQpmAWyLPUnb6dMWwXQPwb5G",
  "key4": "5ttikG9NbgvSfYi3QBRWguVtEdo8GbjNCksG662KDBLbQXVgY2MFpbpncBi2xjYUkikU31ovKMm4bXacFuRhb25Q",
  "key5": "2om2ZnGQXNS7fBaYXvhHJ4qfGG6R54Zk2xeUhRPHwTcWscz2cvfyxKf9whuir1p1L8RJkkrPL7KuXzABVcLjrVa1",
  "key6": "5tdRMzUdSSP2yespayFKFDG51uWnaVg6dN4sihysKYEpWsMLt3T1s7Uy2zWeoXT2cKZK8xmnjRZd37DzbnLZS4rc",
  "key7": "48svzNKg85sKWtnPJhyRcTjvHF293j6SzHphnytzQeqX2ebdJ1nQFif15QTH9ZWV4RVVgqaPqGgGy456gpr5KMa6",
  "key8": "5xZ3vQhNW3DUa3WBuu6Nc3QWppeLQ58sCocLYcrTYtNwVfLT2MpvR3qQiB2BY6gAdLc974QmfZLRsXEZhGsbJ3EH",
  "key9": "3PAuaYBxdBvzGhwyVhNyfqF7Adt1MZ239x6D54GcTMvkTRzAxPuetjNa6zaB89fxCDywDS1Zu3n9dVGjb1q4eu5N",
  "key10": "49xJf1zqtQ43jEGuwJMSVbPvccS7qdnnoKAUwo8r493JYMGDP894W9EP6wGWn42sMoiWFvBtiQwLKmd1sFMx1Hvq",
  "key11": "3NaSk4igVQrpnG6SYG7MMCdJSF38Q1rUkuGwWk29jt9UhhDcy5GRni9JoQRf3QmE57WtJUAeb2MgctXDfewcWcp8",
  "key12": "4bc6vpwVCHohZ8yyY32WouEKJL6ynSkkLgwHhEwNCejkehx4Q9KrjU9r8qj2v21jaxyGo48DwGRLwjE7n9APSTqs",
  "key13": "2TFAZwiMZXV4FQsFNC6Gs2mryhKWe4mW7g7pCQB4Y1jW1PHWGPA8bhidXFnRpM8sUqqsmRkkKevedg8NwYMotstu",
  "key14": "3ctR7MK35Y1aKtPwbdZwMZYZJ7b43groNekDMy9477wkiU5JmNSF5s5A1bvUVen5KBC9zhRTPX1Sfv4FZ3Y9A2DK",
  "key15": "4sBLuX6AZG7457kteH4U7jueJVR7oZ8uQW9sxwH5bomJmiUZApq8yyQtxWcv6HpR8hkknuBhTmDWV1AF5SsVgrym",
  "key16": "icWvtZUe2rksHJ96cTvTbbRPReRsoQ7DWqcRKnNdqAeNUVpL6UGK8SnWnrsrehv3HrRAsU8XiZr4b564m4dqGLE",
  "key17": "2p2FSQ986wF5sT9dqCEkmSs26cnmuBwQyfnvwhXj789iQdkkFbG3WXJq82pKELeaDUznPKhvs9UCrzbNxE1ViXNP",
  "key18": "jEfKp11VbCKkHZopZEMf2bipXEC1fCdwT5LpLGAvamaDTQ9rYUhocaEQmu6MMm9GXnqsCpm6SDZfzVBXvjMi4J6",
  "key19": "5pnHWxvtwWo7ufP8Sm6yqZ3JsQVYqzB4Ct9XheFvxZz9kXtnecXC9MJc3Fzpg21NtHYfhX5DYeyiL6TdC8XDV6fy",
  "key20": "3pUniYyYQvtoh5QPYYmgw6uCi5UcxtPgv7642PuoiALjAvV9QYG7iDa4b3mJ17Jf26kdxpdUHD8pG4KmEVTKpTTp",
  "key21": "eguiGJMVE3paXLXqoGYkwjZ67mhqpdi3T9iNbvNWiFfzYwAEeQf3qGRc844WuUtQfAmkFCb5gWpVGajThCGBL1e",
  "key22": "4dk31iLJyjpJhzwdqk84FjQqGfhwFh6uJ8TKxMBgYk7dGtSh7FkoKQnNbxJg453QaedoHxfmpe3vxM1iTCvWpZDJ",
  "key23": "4mL32PgxhoRycYgu4toYZBJXJMpKPxACnFZ95VynGPFmxYrmqTRtPf1NrZeTV9CQHVdheZk8oj6uMWfws8ovXuZp",
  "key24": "RqW7z8dymvtsjUyeLErVExgHymnKrRbMb2MMcsDUvameozy5rUHHfdReWDdtGnLFk6RZRSbX35oVwRD6EDwksBW",
  "key25": "4X7DoT36SnguJ2WcBQgTKgxN8FoXtBrthMUc6Qo4ADXRWM8S8QhLMruRMpRJFYuE6M8qNcRhZR64jS3H54jtp4XL",
  "key26": "3sGUFghA6CCEAxyC9SkDec1g7VBTPpdAKfkDfjMKoH676mpKnYaBoG7DHF84sTjvPaMD3kcXAk4qBJiroNvpnwgq",
  "key27": "3ni68h3NGcgJy1HKmoVdkbfGKMM1cDzKfvdjtfExi6SxNGw4qV18G6jAF1hdSftf598smbnbspc6fjQJkXC29EZ",
  "key28": "2PTh3mba4sj9iaUczvJDR9ujzpQY67nCNDcRWtgxUZkDQ7fvEaonoLSqqCLKrbYiXiLM2xSs7X8fz2VPXZzbrJq7",
  "key29": "4EG2y88v3kJACifBwZmg62c9yqZm9uTCXWTVHPGD1gsDnCv6C2MsxuZxCw1WrcUs2PLNvH2MvdfFjyWuFzkaTpeb",
  "key30": "2tw4DfMqUHppdfD4DPwQEWJaX2uJY2f2FWYH7Ln4XE36NJKuantoes2pkFnrYhpG48PgGXZjBFA2YoTi6FJMyjEJ",
  "key31": "xrqA3eSXYG3EEHjnGq7XBXN9KqGpi9Gkuos5UKHsn5mgtVQAn3Jai1NwNdG9K9mfLguzd77UU5cb471wFVedeUL",
  "key32": "2BtSrHSvX35ffgycq1hcdyxFwcWTSJoxww2yjDMLMutyiBkoCLzjMTxPgu57rrFfaxJijR2r62uc33xM1uxTLK91",
  "key33": "4mdQhysFRzyjmPvYf7Dp7Pgb4oWZsxUbRGfCnxGbP88uSnDKmwK7Dz3oKgtAQhpBZBmaAsYp3Jfk2ifkiakk9QpL",
  "key34": "2tBA4XCa6YYrsZWxGndXmacxyNW4dGmkByLuk73rssZdpN1c4PGi316xtmqddjcQ3iEa4FdYPeFJkxZSar4tEWqE",
  "key35": "4AodRMDmgHeuQHUTz2NbACpHbtcjbH49hJXuA5D6dGhCYmTf5JYMxEvmR2vgUZMDmse66A4qgDbY778wr7ycpKEe",
  "key36": "2cikm3NPAHchRajSrE71EGLuGGuusg2y6zpy5orU32cdcyjiJQSsQdWPtFH3AckfWBcfY3DdBt1sSCjiic3UAkEK",
  "key37": "5dba9iSnR2Uz1pSTiPbuwv1m1dJqGLMLLXrszdXTuQDH4NmdupBr37wyzcfTx9DNJfAgHKodEVTksY92nCde94Th",
  "key38": "uLAceeiZYZN49kfK8GYBqS3EtCsL1NfF6fSvR8Vr7YgKLweBBU2ieMLax4cZFgXXWzvkpKHDKim19Hax46kB1cR",
  "key39": "2Uf7LR3jmNxiQApkumLobYX6EePZm4iML1BpNsT1QnfykEpj7oP2oiSiyUK4qGG8CzrWKbTAxjkTixBUPKEAmJQe"
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
