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
    "3gDqaCPNZMTQuHxerQUJFod5nPrB5qXapqc2c1VnPGiEWgCCJKnC7Jut86o2rS8D3D5uuutnVuCsnr8CqTRB78Ar"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mowWroPLezm5fgRdZonRqRdb8JHxRF1fRvnPDgbAJi4ggUHWCEXkA9qFyHepiJf5mE98ft34x3H7TzXrMEfc559",
  "key1": "4GWJoW2YNtSTdzP1fKjVEPnBqzes5cPzKVwcZd2VopxHfwXwdjiqzGjn2fb1t6ggyLZ2Dr47j5KK3rGcghy9T2Sg",
  "key2": "5ZvwSqbkdUrDkNqJxuYUYhFPBQQ9jcpW1RnddenHHHXNx8EDT1FQqZbj6GGAETSLd5j5SHNFZVPB2WBNnWayrfb8",
  "key3": "5finAmry8U5XBz6ZmZeWqnQpAfUQ9RhgJcfzuFWQYaXqxnQmT2Zf9jSd3gyac4VMsahuT4sgSz7SCvdqZeoUJU4n",
  "key4": "2ppQLh1kZnq1jSSpcbf143mxL9evxeqPx5pNyyAVkyndoui3B24TcsKKLDYem1s3mYUKDTNvKrZnQUM56DAT5AZg",
  "key5": "57Znnyskkq4eoUSW8C5hJp16ersJi7bgEC23ubmmBxDK88RSeNVSav4zdfPytRkd9jfvLBuVUdrktstYqgfBpjRs",
  "key6": "55ECoxNne9mtfM8XWfMtMeZDa1mwJN5yScWEYkzu3EZsBpFMoKu9PAGdtEcCYD3ey8ANM8qhJmG32SeHxh5S44Q7",
  "key7": "P8nhFiXQ4HfjjGx1EVT8A8CAXkrWe97bSrjcvmREySVChBNNagaCe1URMYw5YP6s9aRuopuF1maZzHeh9S1jDM1",
  "key8": "pXnUMdA3snU7uxTcdwzqLr3QqCefzB1JdGZv3HmoC8iam6wFRngbGyAjoNMabYyDR8b1AuXgqWHm2aaqK5AzGpu",
  "key9": "5CN2awccKA9grNy2Wv2237JvFSJ3m8FV6FfFVpPodi8BuGAkhCeMWQJXtqxCsfgUEYf61eeYdMBLwRVSHgZmGeA6",
  "key10": "41K2uHjvFhaPfwGPNvefwmVnz3K7tmk5PtZKwam5rDihj8o6z3exWUNafSkpsdRj3Kt6HoV1j7o2WKhNgAs21qeQ",
  "key11": "3SnHTt8nSZQsUnsYGWMc1kxMpasC1gkQWxzd4hBf8o1Ud4jZ18aW5E96vrHf3vodTN7AbmxcGGSrHsU7wzRL7gc1",
  "key12": "5Mb8Zyt2UdLckgvqGjv8PZ7Byy5QRMkujnsgKmT5yuZoT5f8mKf5DwRinC3gEmRo5hjNwgWvJMWigLg676dRUv5A",
  "key13": "GumczukmPavtvtgvuFR3BcTJUS4vvBPiY1UYb8HNnezc64UqXvoVXFJTzht5h9sFVPwdJRXGGfKx7HTEKNpVxPK",
  "key14": "4QYvCCqHjxS6iL3gKdBthZGbic8px9yfqSvzTMJrHQtD3FCdcRzESRo3RaY7CHZv11eRxnGy3p6MM67vGkAD7bwR",
  "key15": "5ciZKpah1paKtKQsCoKHJx6MHWksnvqmF7L1DjG2kSZJfVUCzao1aMYnm9Zppf1F5DQQvXJcHy7juiANSEKNdmY4",
  "key16": "2gjCEajrF1LaxgSiYkx94insRx6HDatsfaTNMughFYoLHZS1ytF9Gd8ygwG6nNBUxUEHEoES9nMBbXxirBsx3Jyg",
  "key17": "4zx2vAMyyL9PEc3TtojjsGEAz2ar52DHz7nySZFhx6NpHq1UHpXBwRZdZzuNF9pdvyBBSf2GejNpFF4GoKFSBw2x",
  "key18": "3dDpWJZ7qHeo23rhaH5mWFnRj7knrSX54GZMq1cmSCUGTLSpnyztK1eMz5YQx5GZJYVR24tNwwS35Hv1HE8dU4dy",
  "key19": "2NTj2kPdcaBny2UVxEkdEwa98GoRLpQxz2ciXw8GZs8BFckuqbTtbqoZKMUbyFwiMmQDZevhiZVUUxucskcycYfU",
  "key20": "4W9cwbx8mf3uy7sHPPRiqPgkDR4xJm5wmoFBeiMyuaM3jjnFuuv737QcnRs2mH5zkAY2rWTXNJHrcYKZy4X6Jwjo",
  "key21": "3yPwPXwF5Q4Qf6zjgaEDB1NotthM48WkRwZuDX67xMJfxiUenv1XjiRbCLcxSvHEURMuCibCMGn9YbcqfjNycRcZ",
  "key22": "2DGVkxz4BprnkMQZzxZvx73UhWUwKqQG5oXyF8jSVvjadeucw8sEBKgTaxQ3RLCoSo4qzDFckZm6qZpeCiirzWad",
  "key23": "TLFzT6sXAD4wPLH8NabVjSkkpSinPm46b3dpbSvt5WoUkU6asCm24CMnfQHLpENG6a2MBc4xiRLj9mywQWXmVMy",
  "key24": "3Bt7wK4bpHvH8aX39J6LrzND7236xFHQokhMTzdscubjnaqTigguLJ2Rb7ALsEM3ddQE3uLHybaadVnnDcuXLmni",
  "key25": "2tApigEUT6aCsh3stzMmCyM6frYqs5HRJZr3uP9e4DimowiSXFxCgFdRZgPbEnpnHqFcgfgeuVR34VQhPAYjvfvK",
  "key26": "4GRMQ4T7WZuLSJP8dHPRgx8E8XWStheMUYkhF11CWpVfH32nsh49ekN6NDMQTvdGpSdoaaUsVY92oU2GJPNHyHKe",
  "key27": "35nVTL3mXryeZPL1gogVeSHaMbWFKbkwBQwjYE21Wk2fGgaL1GhsBqAwK3uS3DrGYA5dT97ji2K8J1W1fZ1roa3j",
  "key28": "3j27X9sNxNDYh8xkD7hRGBn9V5cR9pQftmKeWxmLzdfW3LDaLfLVh9h7xKNYsTxE1JvyXxQSzoN4EBeEqfpuevxr",
  "key29": "32Ad5z9QfM61u8g8wWwqNS9QiRU51dXDqq2A8tTSgPEhq4YCascgZE8R8yFW9bxP8EUjcfxgZ1WJYkCpFGwoATFZ",
  "key30": "ebX9TU37ntH9AdjGUkqFWHTa6QNay1umpc41Dw7oLx9boKSHWXhByHC4fSEEfX8gpLnU8NoiX2kUh7Ny8VCKfZs",
  "key31": "TANte5CmNdHBCCLGfziXQcjtD6iduf5r84q8Vkf86ub3uESNGwsSKA31VTF5QGYfBk7VG4rMGocK5vcrnwADRdp",
  "key32": "3vp3hhweXZw8p2NMsP8sQd3eFJxEEmHaMkP3Gtom9DrrxdgpFS3bSUN3PFRuKPZc3JDYi7DKSMtzE95Rw4Grwycc",
  "key33": "hDjimnrBLUb42BcYoHHTdduuwGoHqeTtaTNPeiasS5uCddBpKRpftHv17CbZT3jSjY7uuSo3vKVqfUPwrq2sAZF",
  "key34": "3RYyYmpS5EJhAbkc4qWLs7zto1jQzRuaRs3h4je1vQJvEVvoCQUTFivTPFECxx7J8QHoapx5yNnXAVX6cQDuCkUE",
  "key35": "yWWNmTE111x3zB3iaoPWLwtE2isLc2xQcbDttJLwqEey38s4zZZhGYDGuoTNbTY2YZV11MAdHi7vaMhLkG8VP6H",
  "key36": "4qpkqCPTwutXXMkpGrAhcitCXFGjEXgULPUdnprSSc1GADpo6SuoxrBX93xsEZaEdNS63nnpcJ7mhZtfAHSmRv35",
  "key37": "3zw8a21MqBCd3afeiGwRyLZ1exrXWtTdSPfjXTrC4xaWbmu5tABZUH2LUbBugxX1uWpcrDLDwRs6QrboWwMAAT1C",
  "key38": "3DJ6REfRggnGcPxX5PjG37xud4JGEiu9Lno8DygCxtUHVGEfi1RGvQgfCpiLwxpJLzq6PYZSYbusDqY2RsQXFVbK",
  "key39": "5JSNXDsHEuQgGSWEZ3JcMUsTqv2ewgWtMxDmGjAVhkZT9R39DyRc2h53YTV4tUeVxkWc58DNUymW4pUaS8ALMdYb",
  "key40": "3hcw4CG8wb7uy8vwLHz3fTCUmH3g9cztoTQDVmwb2uUhhsvgvfsD3XJjVeEm5b8ua5BW3G67TBQvx4C5XGmG9Mrj",
  "key41": "4vEy3iyEaWmYWxz6RXvdYYAQ2v5weiu9Afe5TXvp5kWwSqXt72cJEVmNzcUZzcSDzy4pUWD1woPh8jSQLPiSmLYD",
  "key42": "7d4EheVpVYiF5QtTuTgdBoMMGLTVFcbaLPsaFu7ykNYpYvaz1wuEz9Wp18ze5qNLCJh8Q9b63ggGpSU48qumgeG",
  "key43": "fbaMPEAFcqxWiQ5G3tdi7t1A5VXdcPkgt4Mk3MtrozyJvkzDLa7ZtewVdWfpSDyma416B8Knc67jxKkJgbsN3uc",
  "key44": "5FkzPqatDXVEZ5DCMpU4hzyie6E9Rq3rxEQumXMdyshVx9ojWJWNJeqeuhwihouaeE41BMn1uzLM9gRPnAwGHzKk"
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
