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
    "2PN65bgGqc8JAAWLgv2qemskgfeWeJoT2shzJR2ducJzKRgjHMxLFXLSsaB7XdaMzX9SgNxHnXx45AijXGxHmqAJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oJsYXYHYRZtcCAMxvmncz9iJJrA5117VjseQM1RMSwVJmxjgAnq5KFXsn5aXQka7w7xRJ4HqkcVjGCpp8UkobVN",
  "key1": "FQD6Rm9EztujudLoMAzfpsvshe6oKbHcLD6AafbAkgBtiVn8kPZYFicTPMe9JpsTkH43i5GiEvAAPrBBV3YHFRT",
  "key2": "4DPgKDgusR4Lb71siHtG2vwXRK6DZeTJ2YAxvR7icWyCJMtEqxvorS9t8VnuXNbUSETUbiTNBNezMSJ9NGpENc7h",
  "key3": "GEVTsMsTbULpnZTmxWCyBxaSgnp1r1s9JPnbPGpaQvnL7g9Cjv1KWFjBNkbRqmq6MdKLZ5d1dpzNmPs9irsAsfb",
  "key4": "42UErbpoCn8A8A5xFvzuPyCZcCBi5ypQBdCJ7fL9mYQo7Bz2Mg8XTzKBJXKG3hf7btNddt9m3vHmyMVYMBYqsDaQ",
  "key5": "4AmBLXFy5sMEvHUWNWL9Q6gZqqRr4v9DoQF73951uos8Hcnpb3oytqRmAtxfhFt68oFpYeE1x2shAYG2dhvE7s4s",
  "key6": "2bnH6SZ5dnB2ujFn8Fi8C8wqPsbCfnpQKQi3bMthKegk2iuyQkmTtUB7PBcP3mNJxBT3NBd5XAvbgWQvR43jtCiV",
  "key7": "2pmMnKb9scHBrhueJfaoTY9XEeEKNxykfhih42FEUPXsjstvKu54n2dRJny4P8bTBBcjDSPqof43USuMM3ekz8pK",
  "key8": "4iZ6NkYmvzWe4ULdnid2bdXp9CrDoodabiHCpr52fzKBMcEYCTo1ygBy3pzQw2rEvM4tpTQX6R813Xx8dRe2x4X8",
  "key9": "4gjemJbcsyxog6zZ73KEu6CzzbTQyYMWmnxdDFxhGn6ZyaQrcqKFiXmZx9FmMu2JV7TNwaBb2DxuuSqWNR8F4WQh",
  "key10": "xfzsm7PEEVS8FQcjBwYqnwqQMrqcsqrvZ5XbsjMinWJSZxQFBJXM8TPRFnqDd6dKHLQCNAzCf4fd1Rrsya4UqJ7",
  "key11": "2MPXfatYCykUYdWTSrhgjWNYmhkTmEw4Ya6EpPXguut79Wq7yjj8cggsjm93NJYQ8KPuWv21Jr835Qt76HQDZEiz",
  "key12": "2uDXQV1fqF3KGYcmQp4PJxzJxq4Ssx4kRuUqTRvpsBEbxQWiFhVeqJtarBWQmbW6rYLF5C2LMofx2MkDYhXx8p1k",
  "key13": "29aNodpN5pBKwgqJfoanoTCGiFZ1nF7PF4HXjF7GBHxssdpi3uVW8qLppFoDMosu7Sei5WUGPSQ6aSQhdwajCm1w",
  "key14": "5xweS8SRdADrrJ8Ui9fwPhG3Q6xe8DL7D1UHmmNfMjcYHCScFJgLtcNbzL3Cpq52F4cMWReJofwSUFGd2ZLWcJ4P",
  "key15": "JwNWLDaHxuMBocPfXAB3hsMQwv1AaGb4tp3fxNEgk7ojSAVhMAegRaA7VGVhrVoppwkfh6PHTSZtCg5XsfQjAum",
  "key16": "4jU3qG8pxTmGYdFQh2ze5Kg12rnb3uoZRLfvrMLeE42aj9We8XEfyG5nwWZKXzqpaGaY9fRbta14hnNNCAbfvWQX",
  "key17": "5afV6SJJCTwrisKYURHgTuu9VjsyuGFRir4mfHbNcEDjzr6inXHK8C9xKLT4qdJnRqnYoT8dyQQbPzCPx4aeyoVP",
  "key18": "2Dt78MYqD5aPSzHQyB2D1Ry2RYqNCocNQfeTV9oFAHahdvm7V1s43DAj9MyFZycjHgpYgdZz1zQaoEwvCXUZbuPr",
  "key19": "4RydCiKCvhjsZBab5R8WbYC3C1pfsAGvhXs8p5TtSdE6RCZDqdAnRwUZ3KjUmQgq2CHouchMTgWRA7tm5ACbBssf",
  "key20": "2Bkek4Mm2zqAwZESbGoF53aSPrkV5nEtYRkGzNkFDfbE6q1ZaCd3C1Zb64ZR8NV8xEyAJxfy8KB8LVPsNn8kmZMj",
  "key21": "3zePjb723oUcp9UcCgVVVo5wgZjG1eTXg7c7WDpd6RrZfgEymXq4juZt8ENgBu3Mk3wrWtTuY6czVLmYX19HUioZ",
  "key22": "4hs4ByRjsLAgLkhW53dmXZyzMNybGsrhNaT3zYugMeuemHZ5R5J1aE5ouFZgLYGWNswPzUzxaYNAvYv4sasC4Puw",
  "key23": "3oXPjyZgBJQgzZqLnXiyvNP9Ub3tHuRqRmgHWxVgrb4FMtfvpAD9x2imAagLAq3FbzNqsZfnfVBfUcQjPkF4Bh9p",
  "key24": "5EFgC4cdjuhdpc9b8VcZAJrbN7anBWYBCpnzBHdiMyDGyWC6iBgFXeFo3xyPbMkF42bjmZTVrA3yfo5sGNtxUfFP",
  "key25": "2Z1DCKM1dMQeA2PKoRzV5VvNGQyd5MrzNRFVMnFk1DK2cPaVgKaEPt8vNRWhy3LqifQk65MvNA52eEEvGFU5ycPp",
  "key26": "24XNEXeRS34RkEEBVa8LPK8cSwCPGXP16677JxAXH45hsD9yfxo48m8HpdixcGqPLj7j8TmSQ9exdf5UosorqrF3",
  "key27": "2TsGzEfYiG1WDdmn8SHzGgTud8qtoZFgLMuoDLHyB8rkxG4y3hFMiy9uKMfSDoGmG8HyZKCPyW9fF4Ywiuoxp2TU",
  "key28": "35FD8GJt9UvFCBKCmoctgSnqYgUTuj3n5LzG7bBg2ueKMD39AZyS9BYaT8tozJtS9dkTuBPEqkE4CnQNctU3ohEx",
  "key29": "2jGq2ygqf5eoUB7qasAZicP3vNyVxDrogLjZdEMahTn7rQKKhasEv7YSxeaY5zVcKsEaNAX2upx2L3qrVwkvnrNe",
  "key30": "4ju7Q8wR6rfVgnMNd4dQ6Jgki7wgxuX7gMWtZqjKzkegJtUPyutGFRMWQShcpn4NU4krstKTWhwH8XsDT4aZbL77",
  "key31": "VwZjdnWckXTd6uUEWdDStJSK1mfdM2zQTHZTVSxmrw6jY8CbKz946HQSohCbFwUZ2yhVNahweodFntV2Q5Qtf6C",
  "key32": "2UvFtADAtVM26XtvvTam5eqnfBPjSLBqvS37FCDif9Mbtdg4LTbpHihPWn3ETCr4ysZmixMUwiwTRQFNC1q1RHqb",
  "key33": "3JCwSfXsgJdmjAMakbVL9rLqYJDBWLzrd8ftCaVdwXL6gW7obDD4TQSrBeEuqdZEkYqBJuy9XCKmbvrevoaXqmLt",
  "key34": "AW1hTiM64Nt2kSsGeD3pFsusaEvebFDz1TwhBG1MQ3jBkMTUQSEFdEsbEsiKEKmJzkhsaT4dGHtLZ3h7f598iMj",
  "key35": "67d11Rom8odbtLMLDcqJYLJ6zsWptY4pXvsETtPWFR8kZmw8aW4reX46f5Z7AZSvcCxe2u2nRqFgJYUrhcsMSD3j",
  "key36": "rs4VBZqU48LgWFMgCDA8b3M4mXyP1tZerXJPqpEAQraAg8NpGEAP9LKKLGq4WqfUHKZ7E7Ebyrti9SpxE88BwQe",
  "key37": "43fcoPWPEoPomKvwMmua8vjGWcevejrrGDDW84UB5MzTBE3ts89TANpJ2DkVSUR4rCCDcZLTALHTYiDoFY6Zxgn",
  "key38": "4XrgiEUcC63SyPbUJraYZy7zYHXdL5zVwwWCr9K1F88yxc8orRpZTbHMG243g7JujvHzs9pSULQtbkBAcX3hVtrS",
  "key39": "3orxAQ31yNzHLHxgyzxPyTJ1PsHAWBGHMS3q7grDBgca8LuRsizpu9c7aQtgPuPtZ1NdXQN4sYHWnYtMi2oscfDa",
  "key40": "4NRVQRNBG1K6Ca3kvSPF2SbkTYwwX68QKPvn2JM57GHpx1GYYwrmUFmEo9JGq5ZdKCS4y4vcUpTNCj9nZS7CKTrQ",
  "key41": "3XHfd38NfNykwcGwHaRb1hM2ecJ4yW5aW4GXEUhSJBfZi3tKTo456d3ohJoAPH3Pjdw2NEFkaWvd23tN8GE87ygz"
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
