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
    "4hRA8NFvw9w7cXtpnaHM21h94pX57fDMdSUHyEgAdT2SKqm2yA6abZzFTUZkrq7HqTbtCvCVvyfhXskh4n7R2L37"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5StrDRqK9F3D7uJmke9WpouAjBEBk92CehJwbW1L1HcrLTdZHXJ65MKkZp3qpYTEDDjC7PePCgvrFN9PjJi6HC9U",
  "key1": "9NjvYCEwQE9UWijqvd983qKuX2yj88MLHeauVcPipv2WsLxbjLBncENFsVbuaESQMNyFG9xvSiQS8SgyEs44hSy",
  "key2": "36YWdadyDiaM37GceS9YUjJD37QiXywxwuhLpDkYV23aa6d22qbBkziZ23CoLmm5fTmgRymHp5i7Y4UE3jCUndC4",
  "key3": "jTsee2qXcHB18ZxPASyEAzhjKugUi6b2uyEdVBi3aqpQyLouEestv8Nhk8QBk7J64dj3YBpYVuhQrd8y3LmWJmt",
  "key4": "5RUUGFQ5jG6GZtze4Q5ikhDa8utqS3iaZ2wAnDx1vc4YH63DS3v7PCkXfNrkee8X9YQZm156AqrAM1dJT9ogvPrC",
  "key5": "49EvfFZ2jEE3Pd537bZ2MY38xYCmHy1SCh1djeAzgxQ2nuvVPzAPXvz3ZhktxCz8nAbSNX6oD8Gj6sBgaGMVDavP",
  "key6": "17kL32E6u9A83EzKyGVt69KYBLWmocoTekCki7UETZwprN3F6w9FpEEYWqo52aA7jUshe2CWmDNzcQvqpMgiLVM",
  "key7": "3A59sTFUh3ff4AtVfTKF4FcSxVBfEWy3RWsJoNX4A7wj1B1U5zGyeN3u3UHVb2Y2oebBnzvYqwUyQj7yNbD3kgtX",
  "key8": "4PqaxWukhGh4wZs8rXCSyd31jhMXmWwwhXLM8iLBZ117oZVXFrcswAsUPfDtettPSjSxUWEyPDfHhrVaJKDr6EyP",
  "key9": "39eNn4vv7kypzxTJKkEic6fd6ojnwknqAJcLrHWaHNUbBLZ9jQH38hwLTHwPeF7nncUsNDKrg7eFhRq5Pj4wW8uc",
  "key10": "XeFyinVdtpvpmnsBzzTXsW4g1TsS2dKRpsdrJdjKzKvjF28o8AApeQw8jH1hZbeQ6G63k2kGXbWZSR5Qieudcga",
  "key11": "31GpZAnSh1JZvT5QrtzmsjM3JWfoTMcTMNh5jrpQhYcnWuo4wWBU5korVckgvMNGVUgdQDRt14BovNhGo114snLJ",
  "key12": "4ujvWUVUSVXeb4DfoYajTNbxjQirYjjrj4cDQigFZifxGycUaJUPAXaD3SBuwyDqoiuA3p989ssdKy976xrmvu7k",
  "key13": "4jzsn4MVQKsxdzJ4quirMDEUC7q875KJZ4oQQoUSYQZxspgeDG3eU3B1uL2BVkBGSZMGS7yNy8iXymbuz9QPJgDh",
  "key14": "2TvJoTZUdqAzXzg5UGpC4LiZN5tCTas15FD9aLasT8WLZuokxuvYUjYGSLzfCzXF9BxYvgY6rdLw2NDgkXFPkora",
  "key15": "5pd7RzL9cvmSjo4w61UkC6tUgywMbdadGmtEKGQaPTSDvCx3d3XqnaeXHG1SUWJAFG5sGpwJsSBWDEwuM5qjUb7h",
  "key16": "YyoyakjBwWKe5bEDW9E7DB1zVUfiPPrZDmDVwFggNuvjsYd2MWAAdXE1bQsQbMhB7tzqbP3QCavy3QPQAnvATW3",
  "key17": "3bmBznEnz5yqYTNbGRajkqXXoZxTxnpeg5q6tzNycsDTcozjDALZoFEGH4Z1cJ2FgZcDW8YhQLsHpQKLnDzhNd1g",
  "key18": "4iPdz8JW6fPLsrBisgqVQYUbZFRS29AV934LdCpCcQFEmEv8D2s6GMAequu9RhecztC5vTWgnBumS3FFxLt22DiV",
  "key19": "3Rvy7PEiH3UVZWkQDRkPx3cqkRCxJiATkUJhN9rNgYxgUS6FhNsJM3kUFtnFqicLr9RRheoeLgBQ5c46qzE1aiYF",
  "key20": "33Bi8vSjj5kiTGETmUWpmNn46JTvDHWDjeDhJvRRxuEF2uC5Z6CwuKW7uY5neiJhibto7smTK7Vn5CjecCxSc8s3",
  "key21": "2PGb964j52ZxnxdZXaJs1SYW2qtTxCAn4q4TeTg5qhB7Nw8bjwXvBNDmLfMSUFLXSifop46KhGzYp7Nu3NZr5wco",
  "key22": "298dPkzujQcfrrDNgAygi6cK5tZ2zPnJPiouJdp1UJ7B6R1cP3GJDZqZo3158w6Vx7fBNk8RQXMu8fhts7V32sMZ",
  "key23": "2CgbvmkgHKttB2iRYvb2HhUx4vbgXgDPZZZwX1NKngVTuh2PSzp5TRz6NeJySRUAoojrdf66yFrv6CF9FZPzCvSD",
  "key24": "3i2SEiuVv3c97dnpeonAR2oqn1oaY5aKNztRgGXW3QB5MFmF2VLrSpz3Sjk4XAdXDtpE8makn7WpTDrzaPYNneVF",
  "key25": "pq6FwebBV2DZJ4hRGQd6B8rToXUv9yn1oAZAEUGaRdVaJYiTfJA3b5BtdcD7sGSANa5Na3a1dez4rg7WPuo94wS",
  "key26": "5BQ4XABnrDHVsMgLvJsQwXQMnAhaPRUB8Jgzc3fLWdjaTTNe8ahP83DNF6uNDmZJQBwJ9B79fiKK4fhY58aN8Fj2",
  "key27": "5uBLUUtvNYeQQ5hQKRmMJS2jF796F92M6f8rVifHRQ6FmqyBvGqNu3fb6Ykggec14CjMCFC4GzWdP6nFBTosUCNK",
  "key28": "2Ut7v14PXbdGXnhR3dXgvvHb6kv77YPM7trwTEFZBfXSHofGpWAENUajsP7SiJzPw8tV6Uy3BTa36vA2dNLTUd8h",
  "key29": "4NtKp2fWsNoCDsLuaawanqaEo9c8G1NiMqiLjojZwiphRRSU6Zw9h3FNLqVso3UBKXqKgKE5e6f7H3ocrnunCacf",
  "key30": "5F2sWy8xpGeziUZkcoKn1jeJCesZZ4kF4J2sTZtYtZWtzQrNbnYDJ3CbVsMjqKuEX9iahfdoEADfcSJqmqPjhxVc",
  "key31": "3C5KMEzBdBXSxz8Lw9hrCdrXJBSp5crMrWAzJa6RoNuCuakvyc3y1s7iwhhD3qjEC99FC7CrgiA5aaDJWNemEeKW",
  "key32": "T4shaJboAvZUVzbycX7scxzNuFSfVGKv79ZVy1JfAJY82yGVKwiAkkszp3pYoCywqPwoMxyjjkGpUhygkwwT1Ud",
  "key33": "3ov3KyhnyKKbLBLvAFUReS2mNbzwxZh7B5z8Hs8WdQ6gcERjNFQi1iZDZU5Pv6BCjeS4pKvgbxT1i58JoPrJKtZ5",
  "key34": "4HDRJoGVMq67Vyd4z4SsMTdFSaTrzVjXzSM1Rbc74ezQDjjwjcWhLaDxSHc1PacFZGrsYTBTSiBGwwFPTS66Y795",
  "key35": "3nryXpBx1qJSCRQwGBK7TgicxdkQaARQEqZsJDGdW4VgU9xrghugkZXDAe1FjQRPJY3ocPkSKRd7LsNLsdZAhKNc",
  "key36": "5fbeLbuPVAsiCqh7GV4VLpf6bH1xu44LQNR2qhfiTd1q5KJnSYkP3AoJwWcPVQmTzs39k9GNJVVPPWqTShVUDY74",
  "key37": "3Xuk3qjSUUZxWzWQ92ZtHkiKfaRPAfeuUHzP6iYTMitF1vhgjQrJKBSimLDuViqD4TbBm9Fh2A4vdkwDGFhwMmBR"
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
