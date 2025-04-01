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
    "chV4ESKT4xsURC2xaFdWSDnne6QbeHPLHocAfqJPzE51pA1ykzyf2EaZjfPsxMtKRuARbPHGUWB8wS7piMdijtJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Tvb3Tu4DknqanCbmQbPMPM7ZsMEQQaHWHtQJMLmJbiLaEC4yhd1xiRAceKf26u4A7oLBKkxDyP4YmNhAo1FuFUf",
  "key1": "122A2ydoo8kxQ5CjqZ5M8xDDJPqv2cEU1QmEDs4ScqVcHLtLucr7Y15WN6Q51dsyErHW1DnYz5WEmxJJycTXMSaX",
  "key2": "4z1etdLVNNsSCZygtcH1gdZgR39qRfeyVCtjKUZTF8GMUfpJEcsToRvCnXxQDMrbdEocKEvdzH9cTXiGyHxTkNR5",
  "key3": "5fPxu5u5LHbMWE7pfJWLGUpfPWCHfV1z4ANVk6bEdg3TjwCubW5CzjSehD7KudathJxBVjsZBHeDvygr7VPSBruv",
  "key4": "3ePaUF8VoeVMtL3MTMP48YCYGiR17Qmocz4QmtVrbbhYpjAQAspob5Xf6RoFC5E1QDgBhe5LzNHCBCYE3WfPzhDi",
  "key5": "5BmFz6fVo2ost75P9rb3YDA77WgyFqFjqKPgdxxKJUxMFxrb3ARYiPeWAthuT7pCsCAV8nLno8nC55cUGL9EsQC2",
  "key6": "5xcwcD35ioM8KdXfdmo38G9eiqYtgqYRzV7nM2kTz4GF4gwDcNLSZCBRmsRyPwh7ZcPqHKRtiSezk5v2gsNg9C9m",
  "key7": "4y3r7gTH9BDgmHcMjG2sk4jPjDxWDRGFAUz4Ftcf5GkSA52sAbV4fZiLorJBPKhRCXcUFQ5UukbU1G9qqxiTkEkM",
  "key8": "54GrjS2Q6BEirniat158gbyJ2sEWBJHVADweCKz6Z5fsNyXH1udj5rHpsszFhyXCN7o26SdRmrxRnurziRktNnh6",
  "key9": "2s6to5yLj8GfjJpSvNc4KD8bKFoZxA2xUr2ApK7uSNj5RKRarGz9gFxbxMVybyERpTNBBWYhFKDAjCPPViYobv51",
  "key10": "4JXhs334KKpntwWTh1rV3Ygr7R8BqMcQdgAfSjtBJ2oSdyoazAKrm4K3Tc3YstC3wX1sdeS322F6qr9U7uwdfimf",
  "key11": "34n9WEgdLckCe32i9m226wAM9fYqUfZGmA8PscJfg9AFV8WM9qeLgpQpnmjvs9t7Ym8g81kFkhRhsQiM15ofgCHZ",
  "key12": "4GdpHaw6quCV5RksxEf628aMQVNWDQf7RM7Ru3x4MTqT92xFKY6ha7uXCNgh9PoUH3Gg4KS2MPB6wjRAuR9djMFN",
  "key13": "2YtiWRjn9qFA579t8cESzBS6tEas5WTJXwwDyks3q1sxHfT4iGKWFsHX1DpUqWh6AzAS8yDzRkVQPNBAzhmeT7j2",
  "key14": "2mYrXUXJ93ccvoKcwMf9jLDBnPRFAAm4poW4dH48agZnD1sfvp167q9VfztL1JbkKk6r1f17UjCSi5y5EhrxFeHB",
  "key15": "63cHDkxWeLUwAgBQKm4dftgw2QdWcwPx5tsHi6qg7gyQeJ5aXXzmwSs9DUseXvCNyDLToWm1QNj1qpUJsWiBvzBS",
  "key16": "3DAyC5Y69iEbQSYjC2jKW73oVMi1RrL7nPoJheUzKWGh2ajJsP6eVA1jcBXQ1jCx4GDG97qkACtVMJggoWLukbJM",
  "key17": "31WgXWCcYA3WB55M5LVrQgvaXaSoBMDbt9MjDW8Pp5ETmPpUfNKNq4CwZjUZSvyr9nxWgNvWR39ve8cuc112VU8K",
  "key18": "5xeL2Z4ca6PLp4Nahq1AWgKPYJWA4Zwo27qjXe5U6oZ5xUYfW3wEHLDJSrAyHNMG2xWPT9pyzQQfXu7GuTJD6Ztp",
  "key19": "5h3FjW5JnmAcw7X9pH2KDhwDa7UvnaD8StKXbWmBSxKURpJp8ckHVWXzcuNXksYbun6e74KjfXAqB9UdC22Y9Ks",
  "key20": "513eSSUCmz6cc9rVnk8NfRHt2GFntkrZvjNzj1HYjKTeqGJBSgEuiNqzteX31zYZDVAii9ySUcVDeZqq1ckjhhs9",
  "key21": "354yqo4YfxWp1aYZjTZAoaK43QZHeTFs8wbSSPEuJAzeUoRJ3nFUaj1Eb5EheptsS66JhGURhpcpDYEvzfdmmaeL",
  "key22": "8Kg2SK1rnyGydR5mQ4ecAUSWh1GUWLf9qNYTiB4fkS3UbCHExJj4AnmPGgnubwDDt2cSKegD3eaACgYtyXaHfzb",
  "key23": "Sj4wnMpSerz4Xm3JSbmUUV3spoaDKcASCsNpdq8z9Jxic58mnQbodDuEJwtKXQBoM7ZXS6K25EgVq6mdp5CRxvS",
  "key24": "364yjZsf5aeYYUQNanDzY6WpmMjdhSoGpwehgtNvsG62RNKptPf2V7agmy79SK1cP5TA3HFL3YPpV2hF7iPk1pk6",
  "key25": "4Vn7nXQ54k8LjnHEaJ2jWrHw6EUgJJEMF5zx2ZcvVCM6wq2B7DLRbYnJjmccQCbiVYRfXJjJqAV3uBYrUJFnwtFq",
  "key26": "4BeY3keGMGQzbfdFbdLT4LiRvNw2VvUjPE35b6bzPvjAuYU7q9TcL9YUsyuMePqeCJmvf3ZjU8U4ycXyYdmavgaM",
  "key27": "5E1KToGVJUYMK8GjGZiV8DQArR56ueh1F4JJxxX7VipNGWmSS4rDELbLsVgwLZGTHysqHyBByGhdVk3cSHnPhctj",
  "key28": "3eWQt4CZT61q9EhH6ebiYHxqFPBfW1UBMfpzn25ehTKduDZdD2N3JUrjfjYrQcGBC42JApPZjES2WMLLx2SPnLeZ",
  "key29": "4wGQDRV49iMMUorM8PpmLQrzZY1qv6T4XbESax7sUHuBfZgVdHfk1uicygcpaDCxkRVmeJDJ9QsZWsXWrq1uUZNM",
  "key30": "4bPdTNwKSPoEmGJ6QH68hwqk4dnCjeDscakLZ6zWw94kUyM8Vb28ZEiE8eL7X2mXPn2wfyC3nH9mjiHPtLJK5hPv",
  "key31": "32UDn7nVCNQFwhj8wW7KqpVrB8im2expdwRWyqNN9AL4n6aGo5c13viKYvhYARmWkovxZ8qxThmGTcFK2K2Ggz9b",
  "key32": "2irJxBirAqMK3uX8SZiTpt976UVPp3AJeid8SsYRVhgkVsQgA5Rdn33Pg7GrSJ2gPQFFaPznkuuzmpjMVt3DsM4k",
  "key33": "3qBYVBoQ4MB7itJMcU9i6ivoW5AxxhYayZkXpY3LdWti3QM5N5VfjsfewNsxxhvBL66iKKXUQ4SCC65Tf6zWF7A5",
  "key34": "4FQvhazmV4H1kRhwu794kWf9xkf6xwtdwVbVZxD7tnXYvMz8iBkpKzmWkTGqFdP8t24sRXWsXpQPF3RtfzBenWHj",
  "key35": "dj3jkMqn6ScaVFqWCL7RM7sg9ezfdDbUsx9UX7AkScGr2nrNh89E6FAQmMHjNgyNkc66grib4QDWZ5DiYyti2K7",
  "key36": "3hMZxYd1vGqEwwxHHyPkFUo1TAJfdtmeHwV2N5MLeCZ4KWNu8mwxu2afSkE8o99icr8QVaHTd2NMB2Epi4LTE4WS",
  "key37": "3UZB51Rbv5doqEUhq2VGe11mTN5NmXP6rBxDEfnE2sg7q3wquno3TfddTou3J7yQ9WcBWHVEAPGkHbExhZvvj7R5",
  "key38": "5d5XMaWN9cpfCy1McvgtiNkWjzYUCetB13dS1WrnqHcNFuLBUAzDhkKcgiqqM9oTk4yxdCGch5TPHRnhmjuGEChK",
  "key39": "61GbNnKgmWgNHCXthMZm1T9fwPWoMiWZQpYGRFmrPWUgHHmX8P9gtZY2VXqwDgyeYobqDF2EC3PnAejTHBAV7sS9",
  "key40": "5Bre7ET7EaAGZjY5Y81LBNB873zkSkzTvexeyCpWHoQkgFPNmHM5jRhh97xKx83YYqrwYSdiporjvU6DFCkkaEXM",
  "key41": "3uoyz8prnXSh8Uv49yGAJTYRzMC4WXZpVLWh6KTojVLWPKdH6UmSujVBxnGdEjPjgMc5VxrXBNYu3QW6Za2FuC52",
  "key42": "5ofq6vBnJhhmzupTBXEGHLKM4zMKZoRNGU9Qj1GYjKx5GJ1sMV2sRTwDRWXUphoYztnhZArtSTXCgQ1X4vkLRdH3",
  "key43": "27gbPwki8j9Pb7QJH8sab9Pg2sCxg9USMU8uAem9UnRdiaHUNCrLxwnjvD89WwGvXKWXAykQsrfhoWn9szbZ5SNo",
  "key44": "5v8KPx8tBfDp9tqVDcNHTJjxDL6VbGjkw11sCBKJEPGApkEMbQHk57NDaXNjRrC3dqtGoW3n5JVRGvKqUqQ1kFPJ",
  "key45": "2tzUb5FiSWGQ54QLV8zC6abPvqkVuTYFdFPFtWivCSWun7YHKSJ7FZbUwZ5sesCWNy6jWuJyYYgydbzk7PGHRUL",
  "key46": "3ipNwBAeJPzbjLLCwrL8go912dVHZ25CqsNG81s2e2nKxUUL6yzY3E9f5g1WDpj4qEXhfaVBenARi29S8Twuj1AL",
  "key47": "5AcRkCKAXTwyPRicEx84ZgEvzDTmsLjxNJW9kCPYNd6a5B5zfnnJpA6dJhLU46qxSwjpT57Pc1j95FN2bMjzAoEs",
  "key48": "3rCPnymtobAvcudWF8iAfDLpwSbzA7aZGfG5j7k91rT7bFxzim8sbQ7whm8v1t3S8PPSuGcQjqCVQ1Evqv57LqXh",
  "key49": "2yGy6w4YDFe3ux2u6n7FjRLPpexRNJJ9iCcF98F1uY4nQcBtBtuqm8rXSmKk94ur9ANRyK9KriVHPCeCCSM5uowH"
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
