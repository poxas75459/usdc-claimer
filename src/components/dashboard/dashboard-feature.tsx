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
    "338R623VvHRyVUkHVNnfur8ojQHy6ayiube1yGqruG8KaSNrgf4RvZvKptbcM981vZDAauSzBgu1DDabsmo7zhTQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P7sGAzU81J4QjLZKHhRZbmdBnxSWP2u3cNZPrBhQkQeVec97Xpetk4L5Lwd1Yy6TgKjBVLSVexLXJmUYAZA1LcC",
  "key1": "3xutK1ZARsF5ym53ZbsjD48deoYwSVRtehG7FoNYKpLL33puKHNUN71iPpzngwn31NAqgu2t3TvSRAbHaAbZH66h",
  "key2": "3qQKugF7ugW5gssLo35oNohr83ZtcmP9yyYrErvL7AQDqBAHFdkggZ6arzgkkDAaZRGF8DwGmfS8UGxsRPNmy9Nn",
  "key3": "5pDKpnJ9kCkta1VajDZzRyiYmbG5a94YCgWzTBjXxszJnjYqfeLRz93T8dJMSysrvVKS2MJbAE2wmwAYn4XPvgxG",
  "key4": "381sco6sXYLtQ5w7xrWryQcYmMmwYnonAFJTDg3JvMVWqSKtyL8hnDn3switWoFwn1BcDMN4KT6HYX53ZBeRLSB2",
  "key5": "3A6uo22J2SyiPLYgPenELeMPSZvNrMSikvbMmMjv84pgEKqSJAdFb9ny36oeVGdgyhmRVYsNfsXByEYSYKNnmoea",
  "key6": "4CqW7oDV6Dem7bDi5h6itQxoFL19rfa6osT88w51pXct3Hyx5uQVJsQjH39vkTGUSGzKWAk53MEdmWtovrJFDx8L",
  "key7": "4HFLA7LnGyd38sHMaz6m8ArnRRATBqChoNsEPBtB5ZBgfG9WKXB8ubQD4L5p9j88cvw9m3WbQPr2PU4u2dT5j5UA",
  "key8": "67R25wy8B9RawggABygkzwYHN5GUtLKPq2jcb2UEdWYxfG6dJoRXbjyjf4VCvSCePoTUpAiryMgBgHxvcp3MfG9Y",
  "key9": "kvRBP1rq8LSJoea6BYvMoDtn7oXntsXc5MZ1NLQbpHNT3vBkgxcTsDUK8Pnz5vMefgb52A755tVzeKragHq2n8G",
  "key10": "Pedh5RQKK2iEmNdUxj8VpuMB7sEfvjcsKatZPRcujANpDETew4KGhqn1RL9mo7EhLqmt5dKyjt9EE4hDYgU4vMZ",
  "key11": "244Et9uJ2JdZ8Lu2RXPEsXu23NyiHLXF8LrzARg9CnB4LQELEJio9osyqmoY37ubfNB9avPkeBuWzqMR4kS1k71R",
  "key12": "M2B3Aha9R8pMSaBh2wwunbLiYuZmUANJdRuuLoTgHjh1AuLcprfeTtbi3F13PTFZC9V9hjQeP72nAHB9WZoJe14",
  "key13": "4c3wcxxG5a63BQLXvUU6iiFW6tCuZPSsaAa5zxxvCerGATtBQa4KYKSn9Vq9UBtzaRjTwyPRFiPSYeDshfB49JEM",
  "key14": "3gKK1XF4kKAjwXsSUUzCZhvvB8994Qo1dFM6JkKpCRu6zzVdbHH6K5t1tq1VCN2v5dEd6YoqFtpftfskfSThqT9r",
  "key15": "5bJKKQ6n59YfHGRH7byNPm3pqm7bUKxzc7FEmutU3nWQTpz3pvKrBvHGKLKf1SA4N5hZKKxXpq2RCu1xFKmAmJyE",
  "key16": "4NBg9o97LaYwiGzmhC4qyLSZY7eVYrsq4Adx7nXAft3QRRBicELYE3wmfx713AwbSgPyfAG7ar7V61CpNUquZciF",
  "key17": "3oKPg5yjheh4KTJQkDGuDBrzKBR3apUvNM8AfDSdcGYv78TuAfGUV8wTd6ixUeaghWuAv1WErGwduWSA191A7SAf",
  "key18": "5vS3Hhx9mcHiD6KibCpGxQo8PiZSTp35chfhW5jaU3KqL31z7cSxvNLfq4bbKNU7rphiJu7s3SeSnEq71UsQCWMx",
  "key19": "53pbQKJa8XceVHKLYHgVDwsGE2bH3YWRb8WA5h5JaRTu6ZTEmccCozy2S8YtU9cTJ2yZNWQehh5kB9GeDew4amZz",
  "key20": "4xRcqHpQib34qDoaJn5HfTLLh32kQqyPAGsTiV2DytUpSd6g7udiBonfJxoRwkmYhbLQNJPPQimKhfHKy9ABDufr",
  "key21": "5NSCvGqAz2f9zJwCPJd1NUkq6SpqNhs9UUN3ijbW5f194xtE8tbGt3L2ejJiEgrbTpM1p9n457AnedBb5Jvre9X8",
  "key22": "5bTjAwC5Jj2VMdwCq1Yk3USmSduf5cUQsUfdEVUH2H4N2zC6dtLNxdLKahwMyXzr6VKSeLm78TpZL7WQcJM3Mhd2",
  "key23": "3RdSHbHjsWRhe5CxzqVV2S3aU5Tf4bwHDQyWhRG4j182DzMyJZBsbXCyBCDvj4yhdnDzRUnPHSXSPuVfy9yaW3s4",
  "key24": "5vpTvXEqnXm5uUhTqPCjWdKLgUFGHHzjSG4vHtgxKo9k6XWc2UTpqa4LEP8DSh83SrMkEqEQQmusxuxmNgPmuVVG",
  "key25": "3aGuTwdqPkyKnRLVsHGwZ89t3sKzqbPDL1KgTLQSoUHk4DXePREwFojE8qRk3NPFkVEcgMENvZr8DC7SHqDH3emc",
  "key26": "2UddPVT1PuXbPPgUgWYPmhXCq7Tk4mKve6kpYREbRJ5mAEZjDZUGxfhcUR719oDmgCPUKAiXMudxnY2Hg1sGYyXt",
  "key27": "5ajHR7cCpGrLKpgZHVW2LALZGVWMC99Y7B4KEeqKuKChhTFWRTs2TZY77xjvCssjEzhDDHT8dTYHsQF89uDXZkae",
  "key28": "4xgEx1hNxFpXmAEDy1HQGWjoZrTyoD6CNueDZLu2xc2xEK6PQ2C4dGi5FSnbi8WKZ21Ds7YcRB6jApKvYg7jbbLM",
  "key29": "572y54yzyMYLYC9FKMfAsS3MQwQ26osASz7xx3YXs1e4Eu4eyGbC1ZNf3UnVsRdME8E4wFF7e84MUpmWYzKoXqzd",
  "key30": "udJCJRkWfG6CLLYYXJ3dSyN5JL9y2SWH1qpPwitfzZvKvrybP8e236VuXVnZaELBr12p1PqippCds5qmQTQRkCq",
  "key31": "52UWvWGFmJrNN2WicyF6V6KzpYKwtqucA1JSGS4aqD5DEqkz9mfTPhtqwWbySGAx2aWZmKEfDEKPXKZEZdzvRjWh",
  "key32": "5YyswV8yTuKbNNsxqX9nzQfZYDfnVPcxxcCFBXZvZq2L9j6BcT59eoDZsGPECqEpVJhduTEDgUvYnD2jfC2DGa3s",
  "key33": "4yLTN8LT9DXYCyyzMo7HFNeskF2BnzvFY9DMyTwWhiUZHnzpmmdqrCC5h9YwKwNsdfZ99vtXJVzTvUkM5ZpRYQEu",
  "key34": "2kqYCk8nsKQiFFZ6wo6MnHdjPiJdbQVPN87KrNsVHboqodoZeP1uHG6LPdhrPB8c2uDF7z4N2NFZuGvUGY8FgePc",
  "key35": "Ah57y47xAwFm31E3ZLgvH67H5KCcTDk9gj9nwzUeKt2QWbqCLE2NPA8SLKf1tXVWm4Bva4n46tZN9i4XAdVvCUg",
  "key36": "51LkLRn9o6YuyiKn2r71dUsutBnAobZKNesUTBg6o4qj2t9apDyQ2QPggqSsD7F9BkRQpouLeidoFX1bfDgFfjLs",
  "key37": "33NnhFMyYtkEExxEf6rT6QhECErNrdQLA4PThqzGA34Xw1mQ6bK5wETvWkAJjGzo3j8fgJwNB31SXr3HZzwoZCdf",
  "key38": "2DLK2RbQk9fxfRQ2uoigVs6KEmHVpjcGZ9wGFa2C1eTpWmk5sbvb1absjXaBigvavKoDBPbhTp639of9hSaJwZbP"
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
