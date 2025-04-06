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
    "3R9GigKscuDCfHhzGp7cBJmEKLrqw3aW3hG6pYMYcxMCCMBaN6fE1hmxtSWtNEsajvn9MCFqHheerjdXvXZBai9P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RFyjGYRV9tKh7DRbbX6YYrxb3X7wTqMgmnq699QL2tvMPLBtxXYBe5ieFy1gdqwWGSLLcbzs6YzLW1MyiBRDP2X",
  "key1": "2MLhk3oauRHfAzW4B2UWDxH19m6CaWbNJujZnPwgDSVgZf5FZU8zDuWBSrnXZ76HYqahygLTtw6GU3Y7d53bks17",
  "key2": "oNx4UfdXbABCobayn6W1nRxB4TYU8Yzp5V6kDHVPPKD32dKynfa5kRvfVi2uVPevw9yFAzAbKC86uHGZ5Gkovk2",
  "key3": "4JqJb6F23ms3iom6pVZMS5MXJcrv6xWPh6zcWkoBJh3uRDgtrzDFH77etKBUtJAD7Re84wVRn37Kqj6X6dWmTBHR",
  "key4": "5jSKDqA1iUEgJQJPbCPrAYYKRwASroug3vHWkJivpjZAPiM2s4aeYmNLRNnPDWdWttEeZfxkiVwzkkgqR7nTePMn",
  "key5": "4xczmtqQsmoZjwJZYJiwBw6cDGbBA6jgSWWSVD1H1g4WkPAv9wh2P96K23seaDiAxEzU8fgEBFy7Gzm5jVi7BfKL",
  "key6": "2NB6CsxswJK135eCBFoJLgjLcUXxUgRWBc3E2bSv1xRS4bQFADn9BpDTEWTb1d4FRZy6xVAFK29ghfKpbdrYggBm",
  "key7": "5HVbJdJ6gXAdHLtMwWPgcorT7hFDu2MYaP9s3tTX81qQSsa2bVdgFjPVYPy4FSSHUUwUjLo3VSyqM3Uxw9pvWj5V",
  "key8": "5b7JvBQM4tc5vhc7FEB64su2kmtqwsWdqQTnBQgNqSMg3N6Vc3Tqu1XkaiQ1pb7QtuEGnZgiCD8XTsapnz9vEeuy",
  "key9": "2JgUgoBsGiQgWzJkkmLo6Pqk6LoqqxfVQsdqfkiDmXpfumQSC9oJFaLA2F8sR6mcgdBGicZoKxFEo7exzWTamqet",
  "key10": "5QVVD2JmWcUgDtbzAsyeeudJSVURbQqX8CBX9LbgTtf2jMbc9evZiFx59Hu52bXFvSZGvhYfi7aWrt4631PmvXAF",
  "key11": "C8a45Mah6uXvcsycWyK2R4ybSsfoFBwAEqLL5jkCLBjSR4dsvuGgFVZafb4aRzrhCFhFtmCTvw7MhuqLrSqiPjo",
  "key12": "3qy4MDzhRtoeKaGZkLB6umXLdnnw7RhkeH4SMZUHoZHt5UdyfXQBt6qsDssQt9fEVqFKZ8GqBWuCeF8RnChZUyL7",
  "key13": "3nM92rs1x6gY48ynv1sVrdEA58qxpt36XNw4mtPNrszofV1mtZMHaJYeMmBSRDNZUNFPVKNmhkTtgwqhJhtX5qTR",
  "key14": "234dwbMFmfe5ZJp3XPb9Zw6v7gfbCSEyiFuqESnCjpjyAzidHMpsjVgXyTdgQTYRW8s24ULnnYjXnG2brmCTYAyQ",
  "key15": "3gU94tjbrRffqSXckN4jBb7hn6DzKhKB18C38fqCRsXpgZPFwE84D1v4fbGMq96X3dieZ24Z4pyZhywPQKaCCuvJ",
  "key16": "5Tf52SRVuZ23xR3yyhWKdAC5mWTuyK7ZLh4BcDTiJE15NvHnXvaFgF6gBSwPw6fdakWCbUibGVw1xhNTyq1BQzQ3",
  "key17": "NqCQjDScmSKEyNbuvVFSPwTXziPFiPPett4zq56n29UGeqFnFDRvVjFRcKKZt3Ahn6wNJ9nNSo3EK7fhZwrUuuS",
  "key18": "2tpEbXhMWCtQFxaxTGWph4SryHLhHrnnV27TAnsUV7YR4nCpt2PURC5WcFTLVC9KMJhapMVE2hzyj5e79jHjGFgM",
  "key19": "59tCxkotwYVEgdRBvzMKNzjQMRijakDBhxJvAZJwRinbcmEzFxzaVMyQPyRTDrWNc49ncUkUWKLkwJzjhHMSrT9W",
  "key20": "2GSEkDhBfBr8QRwjVBxDnvG5Yxai64wc6A363ce9KWS9LtQ1XVGaSMArMPr5aVVRBR8fybwML6U9jEmCJ1KxG8x8",
  "key21": "3uM8TYxGfao5JNybRDCa9nzLysgMNjj71Lvuw9Mj5gArQ3Qv8S7scrhRuTqhZoiQVnkrZX2RYcw8qwEBWBX1PxNk",
  "key22": "5vEAVBzR3AjY6akwbrNExDY4rcfvEM6mnsQEWydevZXi6S75eeRqLBDTeuG7by9Vi28WemBkMJiaD5pP8dMJGzmq",
  "key23": "5YZrBpx5YCyLBK8k11RHKrqYcBa2gPL5kPUWcqzHR39KYT7Y4qWYaUXbudgeGkkKsBsmM9NEZbdEzj3AS4VJgUv",
  "key24": "3MxEzFeEueVHYMLdeVs88CZPpx5hsWG91fVHtcfencZLrD78NDoqBGEGx3FFZwgzyDJQqw1tsK9A5FtzsTX824LK",
  "key25": "2MXuCrGnyqV6MHP22HD51JUkaagQNtYaM5HummDP14W22rpFJVKwWAWyLhhnVwnwsyus8X1j66DzBfpwBi8J23As",
  "key26": "5jBcVjWW8ea58N7wjzefRFLwKVAzYL4ouwcLjbTQx5eR2in2GagMHji7wP25ADD55V6M2TgcfCYUUW57vdwteiam",
  "key27": "5xyoHP5cDS9FEuoX45oZZfA7EqdyiV3GpfF8j26zQEsF6dQ84CXDK2xAU6be9err2aWTJSq7wrFS9DE86YNzddSa",
  "key28": "229YxFTNWngTuVUM2paUHgMsR27L85uzn29zTdLBmjtAvfLWWCg1wojehb9yYKqdXMcpmRFXa57tDxquygBe3Rbs",
  "key29": "2emouTPq7tWfTtg3PwWvN4QPf26qqdC5rkj5Sdbr2wosK4vanv5Qr78iAfHpQy4vB59SUvE1G8MTv6BFbacZvJKb",
  "key30": "4vbxfqyfixrLomrn5PqRyhw5QECQoHNZdQDLRbxfvmqnPUpngSaqA1ggpnC1NB3aBxM4mZcoV7374LPoyjMHBfyk",
  "key31": "2FQwKU1sLHxMNBdvqywGC8Q2VqoVLr9bngJeTaJdumRYvM5cdGAYaRNkZ3TECJJ4N7CZx89HqQZThpCoaSpLHUAH",
  "key32": "kww4YCxoq96MLNfpkBSnSi47qXx7CGfWuHfHS7S47UwP2jDSsG92zLLSHfBpWdaVV6FnEUkZKMDME6MpXTqhhyR",
  "key33": "43qFQB9JgDrq6VaaYZzh3TYb8pL5zdmgwZepwbWi8ubqD2EmF5PmdUxhC8wLa2Xv2u25Yf3PCneoWqBqcW9LWQDr",
  "key34": "245nP1sHMq5fhkj33CSTRuyJiGf2JoRX6M6BCG9cXMJtRJbLC8iKX1iG4c9k9u8DfLHjkuQf5B4X9AD2CSvoeYUF",
  "key35": "5s8TcpGWmBxwWzqtL22wCVJRVm6yJsHfR23agBRava74e3dswjd45uWPSbdXctw6UDcccGjWcufscYBoNMqnE4qb",
  "key36": "oYJojpQnBFEDMVkTeXvimE6mnR8xf1VadeYCkK1DuHVV44hNxpoBVuogq1wGw2f2qHND6v9yUfcR7d3opxA8QzR",
  "key37": "iLTo8r8KgTfxeHJJ4osCs7ASi87mpi2TZvVcjpakjthWNeEmWTHY19L1eBuKjEiMdXsjHD5uvFZ8WZ91oQnJvDs",
  "key38": "5kAHGDN4P6CdJtPJPQECt9RuUP4Ani8DxQFTq8Ca4qw88rDTz8Y394GqY7sBZaA5PUvKJtM9rtEbKYLoWboiJyAi",
  "key39": "2vy8KkFmiaTtYyM6Gvfwf6t7LdAechDxqK6Yrm6QSquocdogJ1eWSZ5SbCcV6NmyDD5QT3Wum5ZESxGpgnChzmpB",
  "key40": "SDT5pB7PZTCqnASh4yDVhjBtk42q3FmqXe7A7WkD8fdpKCaF5TNQ9fFChGrmgHJAgMVcZKHzmMcNjiQ4Kr2ZC8N"
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
