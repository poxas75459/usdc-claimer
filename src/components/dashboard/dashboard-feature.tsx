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
    "JWFhQCBhPNRiqsnSiDLkmkxvxZ4H5sso6vNGdNMDkLfcMFy2NAwe3E9yZHnmZBxQaGmztVPRpYz1KPFFnNN3JYk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NGFNt1iJYnaGVd8D5Pe4fAGJeCsvGrRMBeU7jHARQPGW3CnF4bJFZwz2CpGfJXmi9dT41VV32xxsk5X3nmqYqHP",
  "key1": "3nXsYv1epoaAqYW1VVGbbyLogKbXEzNp3QJmkR2Mz4yxPQmAYTpbvvqLkDMLgTmvrqYQeBYsf6ZcpKA3SJwDXuic",
  "key2": "2fQXTnHGMj7v5vAXEUjHhCjKfRKhT7XhuczNSRAJu7s8eUeGW4xHfTpiY1KSDfVQFLzYhjoxQJoP7JFkerKSQ9ij",
  "key3": "4VQ3DXFZ1CmTS7e7T8fRY6LQgUW9H5Ro4wFaAeeJGAjCKm2Nn6khPWMJ7bFrmz9CnQLwNDc4SgtcNuSWD7TceT3A",
  "key4": "5kdjdibWEuFL5pSPVaMh8GrhN8YSb939BKguHAWiGnCEcQYgU1FA7a7vy455hvhToSs4D8oeRZsFb9KANshmiC3P",
  "key5": "38WrgFpYUx2qFSW5d9RKQNKxG1eeDPTtM7hSuwxRTtRu43kUtC1XP1g6CfPUQ2rABwczreMafyYuBmCPAW18yJRk",
  "key6": "UqsP1FL2bzp8xk188hdqpUSxAtUqcjtcrJ5mjMdFaRU7EY5SFGYJXRdMgU62f7N5HzDnjgMFSQyLw4RSWPFJvrn",
  "key7": "3K4AcaqReVMU1xyw4jTipJmx5x4rgeRNSUGhTqga3hxmbPPM3HxhFezAEnB2mNh9jpL2472ZPsFB1nN657BG7EXa",
  "key8": "5KbfySbasvbM8S5wAnUkAYhMjxvDkoFyCEH86hts89ymSohfQGLziTNrQ54Q52qKkEDx8xXjDN5mNCXTYHP19A83",
  "key9": "4ZJwZ362zAm134L8pYD4BcW1gUWqAxvBkVgrPd9W2AHprdfQ1gmbz4ANoxKqPDDfRZmSJZaWi9yoAvXE1D5PGFF4",
  "key10": "3DkB3gTvX4M6x2MRie3mpc4Jp1QZ6jkw6TpAZpicVCG6G5zvg4pia9QeiisGzKXV8gWuY5rZF49FR9kwVxAcqDKR",
  "key11": "3jJiY3RGuqL8DiCtj194MxsXMAaY9JgdJ4RYvErgrEEfehkfzBXHYZCu9Ujq4ogcywyBbzFhDp4gbZGjFChFHv6S",
  "key12": "5JKcWp4iWxP2fArUUdNqDjAGYM26zSRySrKQReyQQQGnDyMreLTPqLSAso4icwKKXg34tjeJCED3eAF2Cwhemmqb",
  "key13": "4cNhdztVouRvRF1qrVh4Uy1a1F5Rxg4ywCQHKddaa1mQGDhrmmL5YAejg4ZraJKKVHuZWYLrEDDUeVvhtWHMFFNv",
  "key14": "3bopk5fsbSjjPon1q9fs7taoXN4baDSQF2BwsDGG8xTwiRjKCViE17Mt4APEqS2gWge37JcE52rzVdh13dDczKmE",
  "key15": "4QJjAWK8cRugpcLxwb7K6zjMi8scxVk72SJZw9ZiptvS5jUvsRFzpV2Gna9XWFpL8xQoh6LswMmLYrSPrMALYLFJ",
  "key16": "3i5NP7uk9MtM8njzt4BNH11v2iCTeFQ7v6KchWs9P9NyrEZHGutLThdnUDNQMnE5fB8VwUBufJp62MWP3fRLc7aq",
  "key17": "wxsjC9ESdEzi36WtZ25WcSGdBYtaznXnoLkwaw88TTEVci6UyzmfDgSNETkoK3E74wVtFw7WA3irGCuPLZWtQWH",
  "key18": "4A1T7qUJh7Ga5ew2EHUtNVf51SVFGpcparfU3SvGB1P4SxkhJXQnPKXfKLCdJ4ubefY8QVFQ4Moa6ojuZdyQfoR1",
  "key19": "uVVjhwxtc2v8wUaBFjdNFtrF9kGJqFrMFTSGnhVevR9Vh4hNSDkCi4jdJBETDYNZFQovNf86QhGggi3gzbMvxLV",
  "key20": "ZRKctHjD4kYbEMDtrKKSxxLbZruJygsczDtRokuxTmTcA1HVVzWJpJbjNV6Ja5TAQhakdrcVULQdgvn8hugJhUu",
  "key21": "3zurku7VaqkfF9Db1pX8a1B3o3v5AS8BjDYrSzjmXwDtTtB313cb6xys6VVwBG24nnRiuPzYEK7RAPJV9N8FQTwd",
  "key22": "mzZBBK52wWX49Wdc8WUNb8XZqLW4zvZDEm6BqNK3WpwKSiF7CborbjWxgXoASwEJbBZ9RvopNpSmPBmQqhpPaPH",
  "key23": "2UoUNx8FV38r2a27yGSmkmMjUfsxw6Xax8H8tuk6rG41Zd8SDSvCPTAvgiag4d5DtE19hPxhuXtF8Md9eNtkPjsM",
  "key24": "3yr2r36Fo5KpyQ7yPGGBpaMJSqYc3GAnCFUAkvhmpY6Bk1KGPEc9zFsZw1T6zqFxiYHcVRzhzRr5HHK8LrsTqQ9g",
  "key25": "3SBG8xoeGR5KcK8wp4y2bxosSpdFTFUzYqhTzPJ7atR5ZjYaWKHqCGeTLjoRkX14V8f3mDtE7pwXxbgzT8hYd7Hr",
  "key26": "4VXkJsXxTDtBiWv5We4nU4YEZWcsyjS5i6K7ZjzPhATAqFR35qiTeLLomKt6kYrSWgs81WPhzmoWT2Mb9dt16AQ9",
  "key27": "2ziytdErpFGp1bgCuBqjSPkKcUVnJpTPL5YjrWgDWTkSLssLgoCoaD6HassM22U9AMTj1oxnrRg85ouZYHzKPSUa",
  "key28": "4YRo59H4877qTuuvgm9YhLdyJbXtHp2PzXpwR8mhNSVgrmUufYKVjpxkLs4CrQpstHCzQeMLPD5ZvnwVkBkmjN5L",
  "key29": "567DX4M1Wu7Qh1BCUhK4Pq9o9LmXp7n73QyRjuP1BVMXFoTLSZYYbotUCDYCo6Kzff4duGb7Uj54Bh3g2mxcr2Rt",
  "key30": "3xpfryc5EztS8y5aw6AcT7pARZDKSa75GNgF6FMkVMsGM4fEWg6gmVYAApnofennrmZCdk2DfYhJPEPQqJrME6L8",
  "key31": "4qwiY39d76bhrHfNL8xzNBdMyabutfFB4NpWXMpYi4MwggGhe4zHtXmVze4Sb3Br3RhmhEMZTybPuGioX5mKZP7P",
  "key32": "3cnfDqS1zrShmBhdaV9hUNZzXj3nNCZUziMp8xNX6VsSYsz4ifKfVeMhqEqRxRSh8eR5GhXKxiNS3wsGj8Umz3pf",
  "key33": "3prhvJn9m1QHnHe2nYE84eCUfpCN6ZzJzj3LYYrWDTSKhCzjTkUWE5EzUCefvXwf1JaDM2iavKdnggbrLFWJfTst",
  "key34": "3caBk5xLJ6RHs9ZDRDaU8CvGfNaXNETxP7aUMYfDRrcpyj2vU7T4o8nnE2Ejyo1Zc7GUyoTXZywgAtLdTwrQH5Je",
  "key35": "3ZGpFkNr9atRdXNtmuwCMkrVLSV8iPTfyPujeKJ4jwqxTZTom9DYpxyi3NQRBA8n9mUGyPVpaJVKxBwjCUTG7DEM",
  "key36": "35qJRGspG5V4aQnMPEL8BrybHUdThvpuFQ11bSs5PKoxCDKnvhxRXKhS922LrCuUuN5jyLzSj6u2TBvk3bLhLPsd",
  "key37": "3epbD3XnNHDqR4kHyi5hDHirMNDPjqJ6pHRhTHcNUvEhUs54n884kvWxqizxUXiqQbaMgNV2HoKn9KDvPQ7aj6vs",
  "key38": "4thaTZj8AgKFMFPbCTk9fq6zNYHC5ze8hTYHA6zphLULsfJCEG9oa815vUQzEmfbR4ugnWKHyCEpags2g9Qhvur3",
  "key39": "4mCRAAN6URwW2ppgPbfXqwt12npQT1s3ijsaiuGTADMkEeo94ZcweL2rbnDfnxAEarUg12thxe4MpVrVNYUfwH2y",
  "key40": "2fX456sa3GKxBXiQJY4SsKuo2BkWAZnSMrLT5ZJLnagZNdGv9pWTNbMaXc24hC6V9hcuWM5BUDk3kkPmaGeGnnJu",
  "key41": "5faWbGtMUqTqbXo4DNvv3L9YbZbcDRkXLghbTYngnaBF6JxcJNYQdeqTKhFXymewgLVdgXzqNaaDbQDJy9LeJiBL",
  "key42": "5pwqWPWBkKRr97CABZv8WsueYrbdWmaijaUowomWm3sdpNCELDNbJyrUueGNSo9PwW1eCKuJ48q2gFQRRXusrUHB",
  "key43": "2py2ZDcJaxi7z8MVWiWbCBy2x45XsJbfh4PdQJfoe38P7Sys8Tz22fCScJ8JfwTmbqnbhWd7vQAk2ARs2ybEYp9K",
  "key44": "5cpWWVh7agBLUgZQnWmays9wxfmR5j9Fn5YCgowMWnCyt65d7WTKo8bZ2KcjTaiLDXAhWX6MqrKsoq248JHe9XjW",
  "key45": "2HJchmLfsKPc6r9oE95Wpbie81fXScoMWEs9DKUTJGQhu2JLDESkscWZaDsg3aVFGjxgiBabingk4GhfKLNQsKg6",
  "key46": "4Qmm5M3H37qceaarXnm5NxZKZNazW7hVMLRHY4SfG6ZsY6fZYECicBJELnNgFcQe8ZyUAEFvJDAiiSSe7LvSbwor",
  "key47": "4d2nq5XbcWA2fEZDv7ERKmC2RREuRtFrpY5EagnhKuEKXrTdrEgvwJsKHYM4Voj1Q1UcrD4KDMwhpcLZ1RFimwiN",
  "key48": "5EYUMSPQDx9TKXcv4xFU1PfWNYqmdkHYgF3tCgWc6Nn9CV3PqdpNT3CJKsm3bsmEYeP8wf9GNThcuRtoVYHhC5tR",
  "key49": "49xiZProrkmkqSTBpe4ip6cHhFye5xbVCUxdhAMnKt644SiqDSLLN6G3fJwtak3KkPBrr6y1FpuEzdj7nPF2vozA"
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
