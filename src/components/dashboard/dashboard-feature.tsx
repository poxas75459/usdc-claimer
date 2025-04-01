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
    "4u1v99Y1tcXViWhtoxWnrQbsMd28Bz69DVfxKXRFxKuKfsZeJHaVxiBJxbQThtSTEXBvd9QxZ7bZfz2VCq7mf4n9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kALoAxQKWjX6baRPXyzVJKV5ZauGrZtKQ5kCjjYxkcwP5nhneouBYkUk7YqQZRm2X6ffDB3zTP6uCkXrCWbjWqh",
  "key1": "3hMjubmkAKTPcp62a8v9JsGiCUBSBXvbBBpnoZRMDJpWGtL1NfgYAvNRDtdGAZym59q14LX5YvJFJcwJnZDep3Dw",
  "key2": "r4sX89poi1zLZebKZ7TLxqDyiwEgN31cYU2s4CMV4VR85uRCgiY32vfH65DCCxjsRmfHqT6kjJ6Qa7TZN5qC6QU",
  "key3": "2JDb2Zoor9yLLTpjdaPrZS3SaMjHtsnyvQKvNPFVctYxJ69YGFH6iiZs8G1sPhyv7KqhM9bgqc8xAgwbaf5gysug",
  "key4": "3WqFC17eJrB7sDg2cxrwC7e9pYTEqapw6r7ztP5iwBPukoVJBBjRth17CqCUvnLE5DaJ2xbvsW1po9TvavPQ1mss",
  "key5": "4Q6978TmhoYfXjSKtjz8MAxe2T6jVNcGH5xBj7ootDaoCd5idF335v74av9sMTDVxcPTChmnuScaW2DULXiApQtd",
  "key6": "FrYGey7s9cRR1T4LARvhFjeMF68NyCGXPGYViYBiEMboiUHeqJpz4kXRoPYZrmrnAT4xkXCsENG5qgfo2VqAa7h",
  "key7": "3ZTkbCfcmi1kTD9XnfiofdbZpVLsmuj4FZHjwW5biNHnFZpxnHK15dyfoqvoTJtsLr7GLvuLXYiJCYCaZVrm3H9x",
  "key8": "3gfer42tZnamqgCUzado9H7aqBpt4bBYGDUJK7ty8iYfXc9iEqLohHsZSmDhvmAGLs7DEgqDC7bFGfbs1iQMNr4E",
  "key9": "33LBHPau7rxcXMcUzv6whXmY9jr5HhgHM5fqWpZykYBMUV5gq31LHeTJdgNfxdnmKtfP8n7bLFkoWBgNjrL4uEPv",
  "key10": "41cizudGypL4YnTsJ8ZH8rHqWBtngs4cmnBSMweMySnqQ8HiP1GKKvz9NRkCFCt2XYZpdVygBRg3AWnE8Gvr8efV",
  "key11": "3GmVnukZexLE4M3a4Tcr52She4a37bB9daJUrgPD7S4Coo1oxGoefqPDBBxkujpwwpEJqTPNwqimWQAti1Aqv4Sh",
  "key12": "j7tthi5zC4vUqMHGbxK6BBRNhnBPwJL13dRf77S3XoVJ9aESogTdYGLmUFPY9tuP1cvSKjV8XpK4uF7bPwfnshr",
  "key13": "2M3C51Q257iiDUZRp8UtJQz7C153q3uLNSBu91MyjX6TvpuUBQRZkKinkmhh1D2ikmZXQkHioAfta5MqGuSZDrbz",
  "key14": "4WweGW3MYbZaCYuKjRSZtpRMQtb7LGiZBWFMuz4YtDaJsSL5oB26LJRWABYWKFpacQYoY8KHDwkpEv2esNb5VQ7g",
  "key15": "4axDweLJH3nfgoYzygZp8k1HUKgfQsGJmi138gTHTU31jYJd8JUp35kpWE6RJrwSashukSh4JnTvtsThZok7kr1q",
  "key16": "5pLCsoQSVHLV1fHkLwvAsHtpT4VYEkVKjSKXbdM5q1wvsrMrnFXdnE3zQuW5umXpHijGfQbnog48dRay8anaE4mJ",
  "key17": "65awMmzYau53SDw9N9W4da3YmsVj1nU7yTUjN3MbVbi69Lo8BsrGzoZgitAuPmWx2NVH23u7ceHtsMt8SmuL3XVC",
  "key18": "CPFHVUiiSpLPZ8NRhERpkZ27PumBdyuRfp1xwGKexCVEu56S66Zer7SZvNyUedQ5jEtNLmKaQ4e7F2NUPgZYFio",
  "key19": "3rM9m5oUiiQiho7Hy91VTzweuBkiKeH58VJbwy6fVB9hjAZ8hX8y6pEUoGaxH6SiUz1vdhPCAeH2eqDCbrutKobE",
  "key20": "647zkBUN7jbj5h75ZEynr2pdBGEejitNTJW3qYgbaoaDF49Ntmt7HqwdaBCjRaMek6b314w8yrL8hwogfcRCovwL",
  "key21": "3Sb7gAoR2EfBhr9FXLpNtBzzCHgXgiincKQfZXQwuiasC9gXHTcmTcSH7fK2s2gxRZFqQdX1T6h8T2Ejf5S5shbb",
  "key22": "3jyVxi2A86yAE9h5rgUYErv3uqNx1fEx5RoZjMtCBrDBgmKVpMid96PSN9wp7FTwBBRub8W4eQPW171mvGaYybgY",
  "key23": "y29fofaayKajjtJLhJ5s2LKrmA7o7HSLnCzGjLL29uxXzdvRDZqvgi9tgiBjT2Z1KUdLjfQjBXK8cQbPVMkTYvs",
  "key24": "3uQBm8jg7PYNZB74tbjD31RNUNvq7Vk1tSC7tx3GTvitTEmo1KuykAUnwAFpFkzWCKDk6GMuQBurw7TtNJ8oYPnm",
  "key25": "QQYnyYACEJnKa5T6Rooz6uB1CoSULr9ps27TxJMpSV6nv6LNW23GYSJYyjd5pv1zY5s6jtDdvaxkip868dggkKQ",
  "key26": "43KX5TbuendkBD8dyz7Z7sqRw99L2HiJYMuEp9AmDKuqLhu6BBzcHRgwXatQD4VnxTHyYmBFCV4a686J677YYJsH",
  "key27": "5DsSqMYycqKQ9GumfDYXWorGQ5wKV8fao3cKcZNSpVvM2WbjaDu8KXDNhrkPEi1f5zbtJqMtDpaJa9rJYPdbJN2Q",
  "key28": "LYRw6XuzZskVpsHPK5icuHDbJ1R2JJnzj79pcTW2bwVVd2bhmV4t4YJeUG4mFeHJkoR5NuAH3fkwH1FE59D7Wu3",
  "key29": "5WZdZrDFMkjYuTzbBox4LtL91EGAeB47A1ALN1WzvkSyRiAp4Bn8J6tCvANN6DEe9VbD6GHwLNDaafDUmRmqa5H2",
  "key30": "37YcEhqKhbv31ub4N5VPLPqC9Y23Q3N4RtYgteCMruixGMQyAa3ZEpuN8SejhtpqCDi3Nz52vtEaNnF5Hh5vS4VN",
  "key31": "3WHd9QoxP8zSUVc31M2bKvngFgjZW84UFj2K5niBp3ji7UBTikRTJkXjFFnZNnF72GS2yFGaatcsmdEYATwLC3m3",
  "key32": "2o6hKTHvQ1KNPuwK7WRRb2SRJvg9kJ551SpdhfLNHCWwRfoctKKU9mBncn95ZXYZoqox8zo3mVofg6cbfEN2Ez8H",
  "key33": "3coYmsX1SbWU2tGKz1sPcGgQvsVnGjgMYdLjWSGoHhTwpKx9UKZGeeAxJ6r3cWrttYXZ1so3JY9gTeRGsm2mixNL",
  "key34": "3n2o6JAUUv4gPT6KkALyquJnyrzJ77h3ogaxocr4zeE4UpKi6m5TUgNa2pfyW8DbWc8yXAeV5MJANzMpPcukuFXY",
  "key35": "5vWHfuXdMPq6U1KuLMJLXLiyaEELuxgcU6yGFsRjDDsQdQpsXMCbf6obVqxsYuYbuH7Q7CBmrdRTC6VLaqvdFj7z",
  "key36": "LarBdDZmxpxUy6aVb5nkdXRbnTQS9rtP2p85JgvmJrL4miRSoyNq9GGzq4dyz7DhS9TkYmYV6mZ1kdvjTmb16fc",
  "key37": "4xubKF7N7s2V7K8dgX3XwfxhBqZga6eYrtvdo6ein2TSoDSm2shKFkRLLjoq8LYvCdcHiv1CyVpL4xV6RxgLPqDg",
  "key38": "juUsRaTWK4Dei8A1UJhmFWzx2D8ZpuNq27SWY3NFs1xA3Z7hDSuChZwBA5PZJ6PXpK4Z8H5afZYm9wWAsDex6iG",
  "key39": "4GuEVUHFbPuK7DueoUJbJnpYRbiKtAhZQi1eJUsxynYjVksN7mupx38KfpVdQWa19s1gfRSC6tbpUDva9ytBpUU4",
  "key40": "SEoDZferM9CfcTBgTknmFD8U3EXQC1ntCxYLSYWoXieYirmEevRR9HUwpKKKfEnmh8D8DLTnqBpDUMKUQYFttUN"
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
