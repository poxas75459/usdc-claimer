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
    "5zg5JjLmjhxBvT285y4sfvBDDmCkCFRfFP23q2sk38yFr2tiynTZhm2jnnK6iWd31sNatsTJv7MnmkUVvh929p9A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45TRhu44HxxjXWHSYPzzVC5e6qkLGWPAf9uez8yx429ZeKDkf6AHhbzYBon6eF3eqokJXTBnjhPs6sqGiKRdn95a",
  "key1": "3LL5CfYUif76n8nWHpaYYKtRRcU9yV2mmaK79ZpsaB3HDMy9j9F14h7cZ9sXoim7nWdjCmWGmWRefyA6wPEXdGbQ",
  "key2": "pbXWTD1aKVZhRBfBTnit1z7dtnEQY6FjtbK2QDkt87xw27fofe4b4Gc2bSmQdKb1KU9CxxjTWPnMxki7qtefYyt",
  "key3": "2Q8LrwUvyNFgSJaRuCUgCteaKsRKmn8NvQHKE3RSi8ifpHR6FGdQtSMzn6UqnNxdS81sgmESnb9xV1jm1f9c4Vvq",
  "key4": "5RhTtc4JqgcRWHQpP11YxxRkzSjfLxwor6jiE9zjUNmLfksxxRaAcaUcDgTSu2pTWSx8p6yz4oKAzFP5U3SEE8Mo",
  "key5": "3jYF7mu1zF9ADeFbsZLDrnPAcjggSnrrZcMbwf9HU872yB6AA1QXakDpbb2a9Csnw24X3hqE4eaCz3W21aBBftHH",
  "key6": "4P1NJ1kNep2LC6p93wsY39HsmMdjJXzzxN1kqbMAqNE44UWwtCQDBETqu9WHSmrRheNDgPMAqQvi28J67GhajJju",
  "key7": "kQehnh4e1zPFfWV2wmBpDBMRb3W34ztcp6aN3ib7zbnVZecAyteU8FUW9uig7RYhsZyDMTBdTkRn9jQPzKWwSwW",
  "key8": "2seYEumaNU1wdkoCJo4e5zHMmzK98husGaDgymCVAarVLwVGrEZSMAWmqDet9pKYN5FuUroDTpxLBwAWNiG5cZte",
  "key9": "5xSjQoTXNBYGMyp7a6kHvj7qAbgtpFtE8vKDEW4qWyuckdFLrMGjtBiX5XM3BCqzYitSPVY8rCTqBsPkfzwqCH6K",
  "key10": "66dT3P56gZXidYSyCYrCepz7M8EMfVw8uwoNjT4doW2TmeTiBuf7TLhx3BCB7hqkYpqwY2gRxSjeUwPyg5ZvbSB8",
  "key11": "ejcSWufDT7ViQE6Mht5DoxSn7KBZGVcxj3LcufG8SyXnDhx9N6cqP47QkKuUawNZmBhMCGmzEnbsHJMnXuLefbm",
  "key12": "5yKUB5aCohhMBrzHc82JV41yUriPDRajQrC2mE5DUcwfZ59YuebRyCoFErU8atc8rAHaRX7kAozznus3kuZTbCUc",
  "key13": "3dyJS7SPSwxqYuCcLrJeUTqUFUozb5BAqRCdYF8zymWyTSiiReHwdjjR8gkLnH8ybhw2wxNyF4FtzkNu5tDMdrbn",
  "key14": "3AaeR8ZgHy6hi3vECymbBrFPEMnoXX2iavbUZavToX8nt6WLXsBBx5CydCc92Si4QndHV4pxE88ju4SLFLgCDkJC",
  "key15": "5QQrSx753GoUgrjh9b9j7DuxcXArfWX4azM2ihYCED72u1EWLMSUm8cE9Hy4MqWYAbrEJBqwJJWuj6Gw889L47wD",
  "key16": "5dpiEmzqFADndosnuJJowmWdPdBahoRZt3WYfFKLQqFM8kG3RrW2eZWAvjZkotPuECE4d2HDPbqqhNkU9HY2pvV4",
  "key17": "3YjUyYZZGoCps2EoMw7Ya8sjTdR7emJB1NRZ6VFMFsdoUAiWe1XN33jaZv7fqzkhM53xwhsaN5LhttGJxVc8dTck",
  "key18": "2uvvvmQaZouDjtiv6oVtnNZo8iGWxGnZJLkKEt1t5Ky5KHpwVtRCZFXqSXhBbZ86ULRY7ZMprwSB2qrM2X7oBH3B",
  "key19": "BS63MAZ857Zg4cpnYFNcgmCFJPAGaugJGiDUM1xCBnKaUEShMxUbau27oQm8n31En1stPFQfaXqA3CvZyFyTRjF",
  "key20": "W9CGC6zD3L3mvP2Rq7cP28SBYHAfq6rRwdnbXRX6Kmhb8oLu36EEjUUXH9VSgKgMDHotdc7vofjuUydtLYK5naX",
  "key21": "5p9XXQ7kx9VdbjsjJYH7QbCi7izsYRfy9kCiQSPwxLkJVynMQaPpEVKSP1euEqhz2GRvazLnKGb9raQNDGwsMAx8",
  "key22": "G6nNxLGG13mo8Hjfm61q9YiAMHunycUBmWNkuWV8T8gQFHsVdsNtmW98w3gVM85ZzAD85os87eEhGvoARYy3nNr",
  "key23": "64dzaxTKEn6Da7c4fRspvfX8rjTVaDXsNXdgGw2UzFpWDpP4rQYxzxmTYimoeu9WW9w2KA7R5wSgnn1SdctRvnb8",
  "key24": "46EFtxVmVQiivGSByxa55LWaCLrEHDSo6TRVRTe5KJpjKaPAreDRJdEidw7j1J2UQPB5GdSzF2UMUKzXXiHSNiQK",
  "key25": "36abXgQbDqF7uzTzjR4B4SbS9AyrmDz2mH2G2ox1Xpyoj8egzkQiGvTNtdW7ixTbBa4SnkbJzziLEswJev439vhJ",
  "key26": "37qv9Qq71ZtYNy4VX41o4CvK4CZNTseFvAi4QqMXe38AhbraJtDXXuZUB1tyePwnscPdcgzezxsHsWSSuBfPcnDp",
  "key27": "5V1cnvPVV3HYuaMieV7AmBmEzMYiUAqepXwyPCVjrMuPAjmESybjxJhbCw1Y1o5P9uSQC7YXWoLLY3ULfV6sgTsT",
  "key28": "qUfTnNBK3oyd9LD39UVFCmNnDTMXzqnMsRTR2EfPiZXR5ythjszqvf6bvFWvGmHirT7tLBVGrbpv4fiT1Ek95cp",
  "key29": "mZPAXQC1f1Mypd81UsXRhwYxPEXSdJQdqA5i67tSaWHRtuVY2usyeveaxgvKcaYwo4gFW5sr7TVyJH45vR79bva",
  "key30": "2xtjnXinNquiJajbjpx9JnPBFcRj9zZYY3byx72FBtnuVtbkEi7yXQ1Jaywux4aqyKFgnXM7k389qXRe9J4eYPSS",
  "key31": "qh1AJ1Z97Dwdop9tnmrWfvY3jUeQDuPnmQ98CAtjPv7c6mWynKb4kk9Y7mzguew2YkHtw8hXKwaTHjUwVVm8FM8",
  "key32": "51UzTvY7t3NeV5fYPoysRmRTViVuK8ZnYEddNgCWLNossxNNKTopgUaVv4J1VQuvBgFdb5uxNT64yinkPYKZzTcb",
  "key33": "dvvnXJg6bHwzoLqyPizArbwaN5QdLFjL8tdMHrKR1qvoEVdspodEafvQbAVmLUL3f46QscohRJmpbqpB5KKCi3B",
  "key34": "3sa5fY3qz8jW8n4xpEUCgNA1yjuq88K39J9utLwNjZ41VBX38bNTrWUp65oNtvd3XFzXvgeepmTKnbMUrzbY3vtb",
  "key35": "5xP1iErnVLAHqN69UTgxp3bmJioEjZ7G18ieir1XytpDpuKj8XUxwETTPALcKXu1fardhyaaQrS4N1odWAhRPS7Y",
  "key36": "4yyZ535MSiPC7ZtDWQCqLgZrZRGEyixgPrhhWbfEost9Aaa6SghxpRiPeEzkPydEr2vyxEBMznFN587VXqTNfWnr",
  "key37": "DrUnumy3jN4cA8J6uf977zbfVegkQRSjwyrAXmqQFFsLhirCPmenab3PQePgBLwJP89sKUdK5jBwSdxNoKTe9Z3",
  "key38": "4Q9uRJYiVjCJ3SAwG7UVbAoeFgWVBeFQbF3kcbqFpfWQ95UdqBRg7KSNfSj1Eu4Et2YYgioDyL6AcBgQhdXNesmr",
  "key39": "3QNBsKbm7Chxz3EqQMWneLWMHCVRU1G7WvyFjfLHij4WKMeh54jWCr9oRTpF15ZggQW5evxT8hFYUmCL8YNy12mH",
  "key40": "LinqGvSxFWAJUuwtugj6zXGxRB9vL717nC67FxdhFBKzg8ybAfJvvVqPzGK6uCoRU9TPAq3DMULz1epExe5k8XL",
  "key41": "2siowq3haUsfCh1ogxzdJeR9HPivyubMerYvNE76bE8pRkTMZ37B3T3AF9udem9n6VtimvVQmrbaEB8esV3VawdB",
  "key42": "Y7uo8gKG6Bu1wFzNQaqvxF4rszaUD8BtSAQAvujGb74VB99GVM8ruAApb6bLKmDenLYMMnoeKaM59rhRTiTfHD1",
  "key43": "QU4VrgYQT9gvS538VMaFWDRTVswhCjK9WqJ57zLh5ctys8PccrFR5WrZYjFkXYiKZYTxtVFa1NQD3epzeF1xVbo",
  "key44": "2jpJuFAPoHwXiP8s4XdjSZchm7br572XNu32HeuM6SyQ85uhLPJwx6oCUXFsbnhQXSPz7J1jVWD7PuCzkjhMXDrw"
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
