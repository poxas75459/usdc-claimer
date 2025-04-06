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
    "4fW1MPuuWm6ZjBcjbZTJyXpqqo1accNQsDCU9MrmFjCq8G7UhQnPGDnkzW8Tbq84Q4GYasu6uddFc4tr5BFBrgS1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iKt97dUhP6fuP2NiqzdN3K2S8ax6StkeML5KoFk8tFdqvtJhb1TUzBHFEFb6nxHdnjpRFvjMcfXSojBzdvvei2j",
  "key1": "T9sGKkTa4rwGnW83w9dDTfjdGC2VuwtxJG58n9J8YsWrUCtJu4KwHD2t6UZHvUNYxfAWnBtkGCnS8zXB2EbxZvi",
  "key2": "2QPzhMjhQFYX8odY8dSFMC9vWC49e3tehN95vJh5QzsFYzYTbK7PJmduzWea7tjWkcwhTZKFMDNkTQkxkWDtJoXu",
  "key3": "3w69Qv1ca9G7kTcxVtFxHHk7hosBfGuQgpaLPAhA5byLum4AAEfUNYTUSXqrkedQjNNjjjmf7Re82sNuL5xc2tk2",
  "key4": "iPiSau4gVHnM3pVUkeqUoMhJ6zRvs8sc2EDvcALR97EEa5FGJV1ZxRXUcafvvkWQvmND2BxCyCSNf2zomYuSX12",
  "key5": "3o7Ah9QRVaMqXKKRDwkR5esosB8N81f2jbb8HXispXAXnR8Fwak6wnFH957ChBr5TvpZQcqn29q6ihHSDAy9GMD5",
  "key6": "5nfT5tTHQqwWdgEqiCJUkMKjTH9bg9qx5a8d2jq8C6zEGcAdJnWG1tmXN2it191bnqEQpiGchjQ3Xib89oPdaExC",
  "key7": "4ygkygbm5WGtyj6VgJZDRqegoWbPdavbJ26D8JMCDQjFvG8asM4JGGT1vEUUnFJ1tL24s3FskC5RccXeN6V2Cted",
  "key8": "5qyn2gS9vXvYPoEn4k4SYjeCewTCERBSmeL7RYAxmCJ6F5GY8Y4iXPDb8erqnV96TwHcBaQUdahmZnMaeNpjTb9W",
  "key9": "5UF2weC8bdjxH1KWW233YwRmVYFeMxPTFRXktNSULCVeiTSbZMHH6A1EfhoSGvcupMaEfvRz9jSqu71Qa8LF9Zyi",
  "key10": "4cXDP2dVvPdPbPDvrhLtPsNKbD6fsbCxH7Y9rsn2G9oVegZgiPgB36DugWBsmLxZTbZfQRGgFszXtqtLSBMshJvZ",
  "key11": "3hFhCftKi3xShXGLSxCexHjcVcoRYVhR8AAv4et8srSxEPey4Yr9z6AZG8PJUjdmysTH3szJjRYCT4zHnQCMGwRg",
  "key12": "38eBMwdpwHG7sqGXiKZQnU3exRzgMgU9eYrLHj2pDp2ctrA7Q8WUg97L8uUeEGEXa2WpDDLjv9jApNJtS41tvHYu",
  "key13": "4uhQSShjDF7n7tykBS1ecpYwdYAVUMYnowvttuytArGst9u8HEZcTGH8phhqxKhoAEoq7orpW11tBWyDtEfX4rkC",
  "key14": "2Uq1Kn9vuJwK33kyfBdkuS7TQAeD5uokMEtWGFG49bVaVaYRcytpD9zdTRPwUmjnb5A5EUqvrzdjt6a7F7wW9d1v",
  "key15": "3MWAzEUL1xWdnFxNrv5auZbyofwZfQtvMZiCWPKHJMcQhVy9gRTBud6D63mzXyAAvbNzGD7evX7dgFbJykDCFCBQ",
  "key16": "5r5qzqeWHcrSXqtSvPskagGAUWLhKrDoXV1He31gddu3iotzpMHrH125pRREjWnWLMd1MtxmTaDBVNdwMfvraCgt",
  "key17": "55diV91DyppRuqRBxhcbY4S3ncHuzaVrypSnVDFwLwQRqZpAKZabhCq1Cef5Ga3FcDQWXuD6msbkkHpc7yHXeUXT",
  "key18": "4zqe1fxkUuDn7QFfapj8Ri86PDNA9e8wQvjigSAWC6dZm86rqEDvJvkBZAwNpD16HVz3dANNykMZ3B7Q5gLrgnHp",
  "key19": "4xBvDoXDtCfGVqeYe8ZawVdMbMzZvuY3zzo2xoWtHHEyLxuaNsJKA13RBYYKSXgu4r1NWWpu7WCWJYR4kiepFqVr",
  "key20": "3WgFCi6ae1DvU5kagEyF2Kb8WdvAwGnc4ggX9HWfn5cZXzkn6awxRLgAYMn965Yh8LRnw3MutAxdGvrRiMxEwoQZ",
  "key21": "4c4aAncCPeBGuwyDjEQHRcQNbv11an3biu8b1Mju25AgRBrkqKDCUhe8Pk3XSLsE8ARHyc9BiMRUHE3v6EPDAcf5",
  "key22": "4a7sCznfkcoTGno6NVivaJYzH3Zmb1VPhH9zpBaMyMvegvVetoE95Drk3k9phcfTY13WM5pKFUrQnF91pp9N2yVa",
  "key23": "np4Ffz4hVxbKAGRWWve3SckCK1ybwY6wWKBS8ycD8EpvatRqhNREtAV9kKPSeDt72THPZyftxVk7VSGyjnfYbf5",
  "key24": "34FvnXNJg839AoCGWYgt6BNmahsR394VAX3ssVJHwA3Gaj76K5X2sz8LJoaKAMCfJSarKSpNxrps33BzxAHph5C9",
  "key25": "4zMcK8xZMxU8iWHcR5jTDv7eryAymxxoZZ4YBo6WjWW7S8Jb3Zx3pVU9F11JtzMaMx3Jb1UeCiTvderq4oABygLc",
  "key26": "5fPuu41we7dkf9xL9WUg8P9XLsk2ZT4b9HsuSc9U5sHC4dJwzpPGMaLn6yoCzkmKJTUATAcpNyqau93njDGrLhVU",
  "key27": "2hKjdJLNcgJNfCpaRCzAwgNs9aazya6bBhfKBSqYtiaJATvxycfYbJRqyb8KtFsZiSosrAxDnK9F5oTB939zK8w1",
  "key28": "6YUoKWW2jGZwTDKTjVA4hQVPr8S3paxdeCFohF7RhF9ebDZTxiyKzqmQcA4J4HvefLQzKRPxTfXLjAAyDVrqTo2",
  "key29": "577PyJKDJoyFmqoyeG1i9BbBT3RMAzciT5SSnQxAdon68ymsa6V3ZkAfzpqKHchbakh2imYYnhwzW7dg78NXfSzP",
  "key30": "2h6tMzTJ9AA8cgWHo1GZcwM7z1X6G7FAsrj7vZhUDUEe4perde63pNA6SYDa1zK1QGAZSGNNWvqVqdbac1NEbGy6",
  "key31": "5HUi93mdCLDPYkcBCbbLDEsnEsTGRuYNz1gF5bNMYcLXc4rG6iFsj4jT1xHa4m2FrvUnwGFaTSwB9aGWsEro5YVK",
  "key32": "3jqMQQakCJ8ZyVfue9zy7Z2CYH29DYgjF3naFMFKAmqA9BwQobAtMVjuBQqMJqDcEMS3uJdCAZ4BaPTCrh3rbwco",
  "key33": "4inF5dSWudVkPbkghsNGcttrTSv27ZYk1WkBYtCSs95FPXM1yKLFUmNyLgHSb2Ti8ARDyd2SyrXAmgXeMzLGsSkp",
  "key34": "3dMF6qsijSoBZ98bMTsRd8ykejdDRSJxJ7v6wK5L7k81AWxY4cL1coCPD3kA9tbDx9hSUNpo2Go931jut6mRwgcm",
  "key35": "3Xeabn8A7W6TCCsx4QCFS35vLmQBDQ4DuGtuChiQukBXMsF4HrXsQZkUxc73xVFVXFqax5dyn4WDQP1SRnXUvfHQ",
  "key36": "JEdyyiERDHsXjCbghbuq8182iFmwF1SpTKKi972jR9E9U2E9wdUMdXzKCQCVUNrwpfA1TbPpbicjkqXSU5T8wP3",
  "key37": "227tCFUNB6SiP2hLkLWKMKHhRViW7NDyWVm92nYnqHwdqNUkmrzJbigssDLJHBb7y8zzDRpbnomVEwA8WFg7h6Xo",
  "key38": "2rRgUTxYynktfQVHUgW8oeA2uBotmkjbZto4EHtYc37XcxZL5e3uvtcKvdCv2h3m77ZCy3q1Ryc4nfidzujwcvgw",
  "key39": "ZeqXHds42cAJ82dAxNkQNroujc5PpoFL6fADiBhisnAPxCss1BhjTXtuy23HTCBTijw7tudthXEif4DTDqB6QhU",
  "key40": "3qNDRGCrCpX6HC4Byty4ZKuKM94ert5TeF3uww4aVoBEYZLZXVu6RqqfgX8voch2z9u61jYEQrwDe4bqvrjDsoac",
  "key41": "2xe4TBfJ225hZasCucNntWxknZktG5hgg7FjeStJ1kLfQvABaWMMbrmt9fJhcCx6ZETuSAJDxpCr71Ri56km2tc"
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
