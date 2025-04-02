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
    "8tftJfHjJDGwFaP13BZL7PixdXaqCJfSGh27hjJmtTtoq4jX9jiUNeEZTJiQFHEwog58oyEQh7kziiD2wriJWNm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mX9MVvSviodoGZYkCSp4vZV6HQBRZE2NEsoEuwYsowHeFeC4oWTcwBpwWqp6DipQri2rNBxYZZwExSNUDEvFw8S",
  "key1": "3Myf4Z6qZWNLip2XQKr11G1SmUSPXabncUCSdjKsDomqgEU2MPXLn7hd99ns2ALxSGFc8ePbtTafbz25k1Yz1U7N",
  "key2": "6Lh5w7cuCLipjVohCgmAyytsNcHtGqJqGoDeKnzRRF32ZZ3DGaDVT4WkRdoNLSFZQoCwhVHMpDKzDAtggUVuDxG",
  "key3": "2Rk9DXRWK65c5bSAsd56TPy1kSMV9D3J6ycr9HCkx9JazbsARJ1GXTc2NUn7V22fGEzuydYrDyXyQGP9J1QgCmJj",
  "key4": "4jqqiAA2zBXbFAhaRTKVTn6VjDuyBMaeP3uYsYJjm8xMw2VL78XbYe6BsJ9GpCWWbE1GG3MFcXq52wfHQBtGeT4J",
  "key5": "2aqGAc3WfpWgAw7SBpBj4BLzboEnUJNhj1SUAahno7WnsvmiP7z7PkJhe6AzGVbKDnGSE83FXbj5aYgurAVJccCE",
  "key6": "2tkfE7DTtu1CR9xAxnDpHK2KzcLNE1fioaDN4PHPaQNpE47eqRfZybEfmhamDKJWBXc2yfRHboLuUBXWcCXTeAgo",
  "key7": "2eVzE7LEwTgP5BLVnecKnxkFdnVjHzYnKKHnxJ6Y8xzsUzgDxWcixBr8ZiTiMZZTz6TG2zaK5sn4qC5xnEUpv475",
  "key8": "3s2W8u9kBFctSovV2i4jzAqM8JP6USMmsaed9cfuHZsNKRrSCqPhY1Qm1kdaQAUkFgbo6266im488koZtKRcHEpi",
  "key9": "kvriStDkjpSpuvZNUXXTm5DJerPkVvyuGA8jokmoLfVd8dtqvUuPgp6RaMnYtBJqoYyB1Qg2iw2xyZdUtaHsD5D",
  "key10": "3mMuNKSS5ZQDrmRUjRy5Xc8QFtTXQsMq5tY4vJRq8bfxCGSQuLDPgFciYZkiaPvv7EAtH5MdHj8xVCorAnh3fwxh",
  "key11": "4hNQMgDqQhHdViNAP3m529d4fA6fQP6TkUiwMYD2vnwvXkVv9Nb4fcaLekscWLqcvZgNbMA4wZ2vRZxzuJL19ok",
  "key12": "2XGvXpeU8ZCU4M9tufzwEDrwfp2tMGZsoR8fJEAaekmP1DjsEkZhJegBdm52NHdKX4qeZVZtx2LxWi13v1qA8D3i",
  "key13": "4eNksPvT4RKwYCCexYsYaP4V6kQdkFePfJXJPE2WeMkJd8Dcq86xrLer3jhGrDyvSVN6826DLwk9K5ge921C8gXp",
  "key14": "ECXWHbijJc1x3wXzV6eCPZYa4JjZNc9jb1eoTJGxvqXSkoXvDymMBfxp82SsL6ACRn3DyafH7brmVY8cGwodP3L",
  "key15": "4hSDdCGN1bQq4kHXfNBafCvzk9PS6CLDJsWutjE1Cjmgmcynsb4QRpcCtLsMc3wDGpZwn8YFSE2fCSNJEJx5guQS",
  "key16": "VQMixReiD4cwGwr8cdyGzEw46ck82RqRsiCNpwUJRacgBgwdoPGPr27SMAveBzzAibnZfrSAmvV4XyuSTmjKzAg",
  "key17": "2GWwnmQJGCZu5H53a2HsK1HawBgPKDFjYJpAaKyxEBSwYf7tE4WEe8qHQzGcx2BqBuhDFpPy7N8TPWcNKqu9Qxhi",
  "key18": "3sDEckeQx4jCCyZKNwTUeQs8NRcQefSeb7hNJPsQarVai7aJEGF4xY6PTZRdWMfHAw6rPtt9mqc3iYc9UBNLyKDt",
  "key19": "RFJFfggiR8LXQxogQDtZJ5h9PwnMyUqzmf4x3mz1Tpg3phZ4ZEDVq2ZQwXzV4KMsQrRnSBtJdUpYfNRRu8LmorR",
  "key20": "6TFThvuQCrkLDqXJQoXr2qHiCyfz1xZXad8kDR547tGk4z7MPEJNDhv7QYCW5nN36ffe9HVf6mpvzsaSFYhFS3P",
  "key21": "2f7w9gBkJcpTAPDMjDaFmTx94urw4SZsqn6nk4kERkyWu5upnCP8K2sbFi7vBEqtfryVFMimeX4oSLejbYkbpqYy",
  "key22": "59YuzceDX4nfyTYRQSWas2efMz9sMz5DmHXrAqJtg8zWD7PBonnCrwRHvPhHGVdodRmen45eb6eNHVZCBThABoic",
  "key23": "cnWYCeJAhWkqaW5eb1m4BBNhFmZnRVX53aumgzcuxC3Z3X3BRNViKFPrRyvDTzpNXwzMFb8mbRQt8GWuygW7gKH",
  "key24": "2xSTUnjfRP7ieP4jmbB9qExoBjpdvd4DT7yJj4WmPXGqUtFMTS6xdqjUhYP3sZDHVQCFem7P7yFYuL77DqAnTGrf",
  "key25": "3sh7nJX5cLsgf7DFxpcjcNqZSeUoZ64MGubGPxF4H5Cc222cYmFoiv2c4BC2pjyMD8xqCaWut2gbqpxvj2aUntAA",
  "key26": "5moY815ov7VSUCe6AxVLpPqL29uc9SB4rca1RY3mbY8MsQ69xPd7nSHXCZUX8yRq8nkY99K8ZEuJ5emYBH9N7XAR",
  "key27": "3JkKySwcCVRkQCkfomBFamZwAJhAJnVUzERNTmb8RgFqPuzbBQm6azjCN3WExVT5zBEHDiLAx18WTPf5qwhSqACq",
  "key28": "Nxo2pDp8p1HWtnvvdGL7axtUpUEGyGvyYgrS27a9HkxzHLFWTwBW1qQhoeEP74rzykccigM2hv87E9gCTR2dbgc",
  "key29": "55oBk8764n2fkHYFKFN48kfkipddMSakomV1z9dCdPxcUKh3mQfCK19nZYLxLKUNZ2jP3aBTTgRstdcR7jYa6K39",
  "key30": "2g2dmxWDT1J5Gu85QRwPVB7Z3pZgGbNGcR5dnFpmLfmemV6wMbGQzjGZpvEjguf7FudxuC5uTuVHnaVW34DPE2UK",
  "key31": "5k7a7dkAxrw3HzJDxe6rcRNBUDjhLJTjrqLYBTyAQcoxLzFRKhCn8JPYYmUn6egCe3vtSXmcQmDPHy5WpGtbeh2x",
  "key32": "3ryKczUFpYNCnBdCW8uLNjcWhTnVyi7AfUeP6vbktPg1fqXixUY7tFw4h7XKYi3bhJN9ezhX9jCs6tJosZF8EMoZ",
  "key33": "29ZzFBmWwt2WVUiRrqEmqFu6F3QqeRTwUSbDBq9WQmr1gkfKW75wTfFtS6M7TTo1iQ3RyBVZe6Er62f4ak6PAJwv",
  "key34": "2hJMN2UYm8wtLU1kqHkVyJypBuywvx31PdNPFzzL95C3LtUZz7bEh99YP2y4zGq9HLZDhJode3RT5wPGMNd543iz",
  "key35": "49aS9ufxCnh8bcYWMC7TFSaN7cWCQi8f3ftFLqHWui1LfnWjhCcjWDFFq2Z9BKZpmeJQn7iKsGWB2sFQ8N21G832",
  "key36": "kjnVbU4NTPiYe6yqWcYviCcjmx7N6acnz6wtaHrVkkYxg3BQpt9axQndEE8CvQkPbL325f7H9zwtH2MDnR3bmMz",
  "key37": "4He1KVMZ6xbrj2NdrNvfkMgVyjrVaix7QRiYLzn3YGCTv6STe5ewLQxkD5hBFjAqotSCnK8efzK86oAKwXswsG3w"
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
