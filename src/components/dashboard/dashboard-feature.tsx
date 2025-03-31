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
    "4muk5KLoNuKbd1x89o6fgv9igktnEcY7TZXeShdUttdUfq7NB38NoH8wQVpZgpc8Sx1WyhupSLSqaZiFmS9decqZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wLXHAmqzE2nQtVk9Ny7FTThNuQFt8M5Pa2pPce2zZJEiS3qQtpGAYGniA4H8oYaaYvbmF3bX8p55sQk68NnRicY",
  "key1": "TXNRSkawhAHFbXB9rQxmxaxFgjEmR2taG4is97JahLaAtXoNQBa2NWV826nF2JgrPHbeVSbojYXiTFLHR3YPQ7x",
  "key2": "MkhwtmZQ5geu8ddvns75pXXPd7jSL4dgFhPBJKAv71o3E5EcvGkSqdA3SwRCxpR9oiWxQ7MMjpRT3HdocR7LC3j",
  "key3": "3mm3jADt97jU69sg4CDWvBZPsoy5qi1RijWtm5FSFJ3MWcQ3mQ24TKeMq5v8pvxbBHKrd5f84KP2HauNat9wt1n2",
  "key4": "5YhEtrq9FeksxKpRxzAkVSD7jASQw2v77TZsAS1bGJ8mbUkgaS378o8Tv26bgrxwVuiFpnEGB5sWj3PBrpXKWkec",
  "key5": "4yMVoc68qUcUpwKgFcvFVtgNGaRZpTYf9wZR6NT8UCuYeBj9VgJbKKn4LNdb4M6aoKtYxvferxu1FXn2nSR7LKmG",
  "key6": "4Xr8HtuRtxHs9V2TFGLLZ5yckAX5mjrZFkH3NTeQjicvqsdPa1M2gW1hqncY1f9FPPoNx5SG34gUw3jk8R1cm4mP",
  "key7": "5tZ8xcfX4q6a1J7q3Pk52Ri4ZGBerWKy6qLWSGY7KcrpSLZ8h1erkD47u9WUSWFWyVPxTTQYGNVJpknBG8q8mgCt",
  "key8": "59zxn2ErCqRotibdFGpLuBy55aYqKZJUfJpBykJaivaizR1npCxmt83DQWedJhUL7LtDsQ7isfHuJdFv62cNkqe5",
  "key9": "3KWxqtw4xayWsC5Y9Jx7uxLuJymoxJm9xqYwkvRnMLh27CYGXCVoA3FR25jYyQT87eC1cMRuoj4dSkBXYJAnVDbV",
  "key10": "2gfMi67SnrGJ37hciDSzA3zuf4TjTAyj33kgB5Jb5N4MUFiLpRdC1aury7tDhii9zgRPHuPeUBbk5vTAakCjpY3Q",
  "key11": "f8kofY2xb7t8vrs2jcoSBw2ZjM8LxECoDGoHdiRdxvMN1BYN66gVjGYgwz5QzBo4sGUSjMoWQvE4jf5nzerPanM",
  "key12": "3DR3Lb6ueouM6qJWpARCSiz7yGeUe9BvCRiRnfms6gkVJgZFV4q1oZQuyqWJD3kcNwqTC7rFZhnDQru4F1wmECRj",
  "key13": "3HpB54x4bWny4SYPLeNWcuptV9i6sfBU1qCeeoLPeSWYDa8M7UBTL2JC3Bsz87T4UWozq6KduHRbmN5adH6tLm6f",
  "key14": "QYKBdPTXLh6uLkZDWNAGMxH6sp9b3s1Kkxx6qhWNribpZeUAHq3jiuWFLif4t49K8Y35Z7X4ee4DBNpv2DXNDUK",
  "key15": "4Y5anfboHNgfH7KL8QkKRP3wuwoVzSABXjmj6X7KE5Z3UHnfAsKHrT5tZtyA6Kk9Hn2rk5GURn6VLGS1xbLGWM3B",
  "key16": "3eW1zhqMkVoPVnEiRom864euhbzPJjmpWsJQ8LbCsoJtJAwUNQFNw17YDbXVJ8VgZPtoznRGuNodFj6u6pEXyEZg",
  "key17": "2ndtH8GuVk9CD6GgmiFrubyKzCqbaq1fdeUCt8cePGHmGawtZNx5ifkb2mc6Le8ZnLCwo8VS5pQtnxAy7f5NnNng",
  "key18": "3qf9yNyYJtMbUoPbBTBgtXhD9hZ3EBgvHnCc6xmnsre8gmcJNQ57iSoiTRVGFRYF17JhSYDwjdVsQwPDXg4RFpW",
  "key19": "42igDW1EZmagAkBP8zLkckMcmA7YfysWZPaF2wPAtpLq9ZVN32iTemUtTsewHxWTU4ChBCfu4xjfJf8mwTGA9BTQ",
  "key20": "2YZZ9VuxJ8jj7nfCWZctERM8pPMW5ZZTt7hnT36w97me9vcXhhKJXtTC7rQPUCwNDzEKkgCJ5tc4ASm71DXApccH",
  "key21": "42UBmqkCXJW6EpN6eKgr676cgTFUHcTSR7nRSqQsvcbmAmbSCdPNHEEtsxsLAciYA7KrNg6i1RLqm7PQ5XJ6DF5F",
  "key22": "55XHqp1qszF59RJ9KudfVuVsfVgwYja4bFZY5iTuPUa4QKiHejz6rTSy38W61AjdrNm6WUYjprfVWyFiqrr3AW7t",
  "key23": "4n581fNaWkxycuQDZJMNL71ANNp34iLVcTQhjhp1wF5aURknjG3Km1mmq6131hE2Pe5c9grpdR9nDaQcckkeQuHC",
  "key24": "4zx3nWarLFSHy2TyqnhuGfVKucT3ByUrgxgRZm5VSC99nd28NYZd1DS4nnoJfzr385DFAL1XR9ZCxiCCT5EiKBcQ",
  "key25": "2iDqxRpd7V3qL1EN6xxi6f3HdwxWfBFtquAdDmmAHzX6J7rAcFzVfPBA6XJeesHmDuAoTMf3P1g6XPzVJYWonwve",
  "key26": "SJxBPEeWnmCnux6aKBPQW17Q1iECQwJHmmowLDXj26qTaArmmYTYqeLh7tLuaKSQ5JGe4My6EPhFBwQQ2wynttL",
  "key27": "2gc2Np4TpeY3Zed9HzmJpVSJskFNqmFy47nBJDGyWb9HQYTLb7pFZ3ogh9qLB5YV4qJf4yxtXVoWho1itmBCL8PF",
  "key28": "2mziHCQ6J5Xrj4y1VVe1QmkZzzJDGXJHCKsKkMMsJkQkkTXvET9cso6Luv2PAqJ6Udvj7rUKTE9B71e2dz3Ph3G",
  "key29": "3gU463xwQmEZoJ4Udgxz1Lo1Ex16KDYn7GAnmAhr4Zx9qRTLgnLbtqMf5f8FxWJs5jZPUmFFAzKaChwKVsKNzeSX",
  "key30": "avmjyMPh2BbbgCduZeZvF7NNq18qXxWK8d4AGWXCNcRwrnmCABEJuRFvoZTmG8RUHynS5YXs1X6xnePxoXu1DiR",
  "key31": "B8HCKpMd38C5mwo7GV3CKfCu2njGAa42Qh4RBeudSWchKkQJyZGWgqd3keLc2imVi9sps6VLzCrbjRvzYTeS3iz",
  "key32": "2audcumwg6u8GKPEpGcpjvyv2Rs5pgZjCSpJ11axq7wX4QCU3yheZzNUuSh8FRnf1em5bETLGM5SCiUxdhtcqeL9",
  "key33": "46PisHwmXcAPDZCG1XoZDC5RzyMc5yNnqvwsJhJpURutJqdGK3P6YrDnq6THqGz4nXhJSAYjJghbcoq1yXKYyhCh",
  "key34": "DxgEvx44ma89jRvDSBKeXXBAGyMwCyk8rYgKmxg2dxtwuYWePKf8a6KXR1Gzga8MnpKNtLiJ6yzjjjqpcvu8yAc",
  "key35": "2H4EFbMy5GacZTaYjVgpTSjvB1KeQv7n6Nv9qdC9ootcZc4AM8qF8hwxe17oRTGjRWCFvzQ39C1A2qkEUWyzrYmM",
  "key36": "3w3zrPEGcx2z6W97HYEQ8W4UqCQtCmww1FUfd3uN8gJRJAs3Z2xVXLw9ubMWX8wYmkMVcvu3yMxywV4TnMZc5sfL",
  "key37": "5GwCcTSwVViAPVLqmmtbKoJU7EkJ5xShoGAJF8wkwGER1KP7fCLf5jNZH3TgXQRsL7sQwygKMKk5XEM6EwPfPkcP",
  "key38": "2JXFumcSfVh1JYyL3Gp3jJZjbtUyG3sgSKpBrgeeRCxy22KYrdqjkq2aNYTofDmFqjHHQJRzshRJNdy4H65Edubs",
  "key39": "59CggUWQ6tCYu8sLwsLFj5HdsoTrca3oaL869AnPkN2YktNW5LjXxKcYERnSW1r7QWnc1AUBvXWxWANBQvMcuW5J",
  "key40": "28xk3BaH8FYaHG3LvEcx6qkBTdpYE6mRUXazzHTPBMJCuCQQ9Ne9j2sWToTXXKeZGGQni7AggpGZKKEApqj61Cqf",
  "key41": "eJSHs6xJTKfWwtGGHByhuKwD6H9SiHRcAMiSdXmVHNUW5eXLhwPG4W1YUfTDdxC1nsYGaRKharuk9bQtFGshbPA",
  "key42": "59rjbt1W3VwZPVV17yd8Pch8H3PXEEGoMPRCptJDiWasm6Ed5bNNWK2NyycFL9eheC5zGHyTm7yWbLeDsBe5SahQ",
  "key43": "8gAk6C2G1oBs3ios51EhNcqepLzrZDmxV1McqEYchxTeWzRiUh8ng9y2LWq5expWkk6FAtYNs9h9NASavTzNpsx",
  "key44": "5MzQoJJhKb3C7QBKda1WXLKTrfcQveynvGJ4QXc4j8pbgH3pe3jfiHn6cuN3445UKcNxVdXr7jHmX76tNYSudQCS",
  "key45": "5MRwVvv2DbgYQASPXCqYjujsZ2HwXqED9MppLeYoVfQdF5urPcSPCNAkeG1XDy79R6NtTi2aX1zeE3bq1Mjpviam",
  "key46": "mivpJnD86bdupKxbfECfpvjtzsNCpLv8UYCvX8TaCPhgn6szgYdCz6Tgu9B8j4qM22RBkq8smsnkucj3Yugk8tB",
  "key47": "2q7T89HJZ1LokMdBYQUc5Vq7nBNmLCzqBFatQoLh2gXfCwwX1oAxAJmCoSpy4iwzLvVpYv72frZaG154P1DibPYZ"
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
