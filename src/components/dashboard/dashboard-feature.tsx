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
    "4ppHHDZf62yMJsR3VAV658W3YrnoZ6M1CXbKMet4UbaZznv25wDQj5m6H7hoFhk3pP6m4hKSV9Y91T9x7UQBB1j3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HTHGZdTZwARQAZ13tYtMuezNzS37zZqYTwP4gAQxyfNQPTEx1dEqR933gGxEQgtAAjCwaKNNGbhheFryaXNzHhk",
  "key1": "3F5MgRw5UMEDreJNa5KgybvpAwgbiJrgFaKmWJZw9mHLuxVjQF7uAyFSsjn9iwSRZ3QVHR5j2HaTnbo3QRxGrTpr",
  "key2": "4vF9UyTDSZ8aaS7YUPyNtqgTAvz6KmiMjxszbfiR71sgtB5sCpwxCgsWGW6qqoif14z4kTyBKCLDeSt6g4sDM9mM",
  "key3": "3NbVXj16EPVugLtrMHb76EAYkL8Zmc4X4b5wcX8VRXsKcxwgKcSQdurc7UUnVzoAxwHbL81ZfMfw7MEC8R4zwLFD",
  "key4": "58foHYcm1WcBJG173QYkafe13dPGCJeMPd6GZ6GAfkx8oSctXpjYs6pqqikEJqWzTQnjgLKGUJwFtCLNTwhK23nv",
  "key5": "2pHWC5MEvEszr1Mgox1JNSvhttGP1wSUh2SuQHpqJJT4ji8HpGJwTjuBy9kgRinKqYw6f8ep9b4wp3okXRsLERxn",
  "key6": "3sB28dQ5P2LPFcBnNW6TjDTZQVtGcxaaQJyvAnd5uQeHrcHNF8Wbp1up24cHQvHMqEMgYGG4y7p2GbDqShWsVyc6",
  "key7": "nmSE9MGH1GwhFZe5FttoGHoY4KRvbUoumfcbWAKfdWdLDTr3gKHeLu1M5RbqLJ4dupMERdoRh48TW6sB2fH5dGC",
  "key8": "4XdQVW765aZkkHyvvsa1wPq2SFHMzXTQca6X5nCf8Q6WaXyDDBPnxEYJqxpzT8XJJB6N9Nu4nqYkL2NFFQ1b8RdU",
  "key9": "21qptAgKSjGgUqB2NRDpa8jLqwXQABGce2TTuy8VkoULchkJVvvTsy5fdbKKmgS8gwAvr6KyUPMB3gTM1RbSuTn1",
  "key10": "3MT64SLyo6gZc8aqZXWUvpqoHjF2GNZtxR7ZgfbRHMwdDmaLkw1iCnNWTtfVw2pUg2RrmUAGHaUmLisUB5RxunKe",
  "key11": "5yzHgGaAseq9gag2PPzYxENg42JdinPZdn1frtUVdw8jRKbWh6869ikYbmJ7d6msnwezZP8UqiKRqegHTiBm1CTU",
  "key12": "2HZ2K7nVqALHRXHL3UCesR97FL5BRLvyhyDo1Esq84qwxtWqnFzvStKuf7dDzDxUgwDuvgEA7Nh5skhAZSPGz7nq",
  "key13": "2FU1pmgdXob16JHnUVVkU87EHPwj7xJFBm4TU3jp33mE7JVpqqdaHy95YrGogyvsK6rRot1PWt4tjYJCCuUMH2Ff",
  "key14": "3AR5uLcrm7Bf3zsEweoG6fn56sFc4sjwVavqX7gByAJT7Czn18TtrpyUxgoE9uMsEfVj8SXfuaxXt7ghtXcgZ9wx",
  "key15": "5fT6qTyfrYMMsoFWRwXqoqqz1Cs6kYXHnkGaQfzEg6t5jGgaZrd8Jbnij2399YMQwA7csRWnTGfAyodtiZMQVwHB",
  "key16": "5KbdhMkgJaUDp6NT91NMEU8v6WTPu9i9cLfRpFGx4NATwGeMWQDeyRZgSiDjLFtHq9Cmm3veLiAWZs8PrdobfL3e",
  "key17": "4eEpU3hrrtoEdFMmzBEzmX1uwASEtEyfPGFL5CYXv9SquEhKw5jT9eFht4Bk7WHMcbuhjUfUWifjkvXTb3iV61F2",
  "key18": "5hLwmtaPrCqsgxo1qgbe6eLPWvQyQqP8CY5n3ktS7ezQQCbqiyaKBbQP7PVud3p6cF86phQi1bgrxf1zymbpJbiR",
  "key19": "5jikhxo7Pt8i9bb2T1PiYr4tEGMbkRKVEPmCBERQaZA1PgLz8VLtrZPrMi95LnbBXtdsD1oVgM6NgKoRUMxGFq5m",
  "key20": "58TPLm4Jxxs5QRsv6dzBnQGeiVt2EsBN7iQtFutiA2B317XxMLndbmDMJV95DH7GzSXC49MK3qRD7BJH8ZQh8z45",
  "key21": "2Nm7jV1MuLwseRpzAKZDP6uQXihWM6LWqo9K5QyhtwBwYbSsBd3z8ddFG17kx7dzGMETKABT5sF8psK3ebz8TCJL",
  "key22": "21GPuyziQ19JqSGMCwpqpCjqGCiXVtBcJsyPniVyCcCG3YHw8YLntFGYShYNDnHxg3deVVjtRaBXTxd63j663ZxX",
  "key23": "5FTD5BaW4XtAsxmjcPtn7P9NQcmj4qGsevK97iJD2T24g6iHSVB9ZzLdkhxWgTqmfTUL4JscPNdLGcj9j7dmhbX9",
  "key24": "2TgETvcRbeydPSZFzbyJareWE85DJDVWzCaTkAhhKwTD6w6urQsxaJLWLemiguEtRCJNYgoTKPbbyHkMnfevYsu7",
  "key25": "SDGK9S3rKuVU15iV4ZUR8bEMWbeRWfwrWABZ9NSd4VdoXBHM4mnHjfzs9dxQpLznPvUHXeV67tMNcwYniM4Gno6",
  "key26": "51z4icXhxPqMUoPTeszKWXNWj6itg8yQrbxb8NBRQdotq8HMW5o1Z7if4BxxwiveZF2xVzyrDYV37WpvoTBDBCAt",
  "key27": "5QprAGJRihGRcxgGC17Zdnwg6FZc36xhZnHxAecX2rVjbnu53DcjGnnwM3RnCEKJSJdtdpmxmQamDinyBXcDWYUF",
  "key28": "3w9z46EfFg3GZizS8z7dQH7KSJYAskfG2MyGX1dERnNvxR6Qrbu1CKFMyAAAVBFce6FGMt66cAV4yS3S8yzDNNfR",
  "key29": "4j6W1b9DNN6416w4dPqHDzZKosWePQPZR2D5ge4Xxm2hktkZmPizaCfqD6hp1Qpxa3abWcuG1FShWNh5CCwhSJ4e",
  "key30": "3iC3WEs4xWv2BHWUVjSTsPtTi7Fodh75ZGh2egCU2zVXLBt8C74EUEAzMwdvqYSLdhoBXCvLRxGr3aCQ2nRVrPYq",
  "key31": "51LpJY3tV8tyzHD7jgAM6xRJcMgihbEC2ejuLyaydfk45WnW1wuEwfzTaWehGoFxSPGBiFeh4Moecq8brNGMHjGU",
  "key32": "5NmWn8KcCJywg16yf9sUXT1FeXZoVSetYaABRSLfdKUMxGNXLVRCRUZ6rTXbnZzicrxFKfuwXa9rgrNBFh9kUFRN",
  "key33": "YvMcyYgLaXgc3BrSYdpgHBWJRA2ix7o99bfZhGQZcCyzwxPctY3UFHo4ngdfzJmWWLyeEW4L9ArZuyxDRox26xG",
  "key34": "37FvJRrcurnwHH9si7riYMKs2LSvCFqz1Ay4RXHJeCajDQ265aeFfNqQdhAS5ij6UWaAymYiZTB9CGdpsaWPr5je",
  "key35": "2r7KfdV4UsPYUBfzRFEURsQDU2XgV5XxisdkCaQvaFTupEoTUV4d32JiREg8a3ESgXMAwo7rc6An3AUyfnycoKmg",
  "key36": "4UFbDY8R2w8PhXBR6m1a9m7upnb9g8tb8aEEGbA2gwPWqzSEGfWW93fNCuiC1dXrcdWMWkpuAFdiaX5VLh9rJRWT",
  "key37": "5CiQQfYkjNzqTM1xcw41pqznuuqMXavYCm5LwW8iNi4PPKEs17HYMj5iFmhUnsrjTa3c7xWYLVyykLBWN3Ph4ozr",
  "key38": "3ZDpveBmMUT1U96jGTrS1VNHyAr6E7sLHDhid8zv4ztESEo9v82ZH9y6KRQ1GPYxNBfM9KMhW4oHCmLTpUsAZWnd",
  "key39": "bqNq4v772Hyc6QEWAsbkvguHGMSo6zXyej3tpUB88RcENdniu6MXDgmWf4XUK7WFhLjnZF4MjaEAj5gU5GLZXSX",
  "key40": "2Kj6wsB9xCCEiAREDKdEHuB6G11QQFN3NWkbjYqtqW7LZQBnxHENMdnNn47YuGNKDhdVGq881owJDuQDBzpfzBdZ",
  "key41": "4yEb5QB2TLGvnFJS45gb1zd917pZZQMeLT7AMy6gac6MXfntw1QiR2qeRfoEcJ565tU8qULVdRmajnSAnuGBzR4o",
  "key42": "5QiUVswE9CXaCXeXkRoooUvfSLZ6EXhQ3tiK4FYgETieqGuuaGmghPfN88mut3E3N8gC7dJM9FqJtHZcJKSvnQ1V",
  "key43": "Pw8dp3XFUsCyV6Cc8q8K84fWVBHnfiWkG9E2HZKpMANiqVRADTw8p1LHtAESVKFbk5jm6sHU9TGvH52KzEfWme2"
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
