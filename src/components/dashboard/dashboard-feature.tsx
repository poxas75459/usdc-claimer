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
    "3tcXTJ6n4zg7kTAQmGXH3UExno3fJ8DLVD7RnWRLSCaFaVWnbpVbFMJcyGnczNeEEBBMFwEpDizA3WRnEkEAJeC1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jHMfgMxrCcz1tAUa2noXoQeXRMSbb5ewy8WxupHwdegXjhvrMqTimmGbqcehqrnfqoWyaJnFd3wmC8UUkyvKAwb",
  "key1": "5D7qe5AT4MssVyLynQmF9hgkETEmyaZ8H9SHMnorfVg3TA1z6EKhhWWZMGJNa9PXvSvPUy9MazY6eCaKC5pcp7Yy",
  "key2": "43hXJYFgAKNHCR9PYLJjxH1hPoaLYDppAoUWdTZUemRgFNxAe1ne7G1MkhEAkjeMiieEqr8MDaw79GKX2wRH8rbi",
  "key3": "636cPgahqBdXFfEeneuUzisCgRPnF97pip6ZNsRJoxvrynmtzWopNf1KxZHWphwv4NUvzyHtPBDVZWR7CykA8uXx",
  "key4": "2yr54XGknZbCAxUfLoKhbvVVUsCh2vGWRg9prP8EaFNupUeryF5QrqkqUvj4yRK4F5TThZyGXSeAb3SuAFF9u6Ac",
  "key5": "2jWbvXURdSds7Zzs2aS7Asq9Cd1zG1YDYAHQQY71WEBvkgvamL28268qPSNw9G6XimhDVzkyQWYDYqcV91Q315Hi",
  "key6": "4CC2mWVGigUwHzBjSxZhqzdNgKXrKgwHMEw5jFDdqKJKLu1C7paqk79SuFhvu9SJmWcmoyMJCATZbGY5XRnNcHA6",
  "key7": "3jPugzBx97vaRhnJX9aw4uKXnNCqLUkCf5zs7rRa14uQe8PRxgCSN2127QY5SSZTjWQNQJXfuUXMKR5eBqUruNFg",
  "key8": "5WQbWtj6WBdysn3irNhJd2zLu3tvN3tj61U83ZmZrz68CmhAFxuRTAJjfG1FJgEbrkiGjdKbaX5cTqAxiGfLWi8k",
  "key9": "3NxPr16K9PTFCrjkakyChvPCgqc9LytcLkQBCCdVguY2muesDfZvLQSopHdT4K12Q6659w86YdhojwQs9tGuUezn",
  "key10": "5sL8ZgpSQTfbFmZNy5v7YMMN6QPqFXhCwgXQV4YiaTP7diTX4cgdTixi2KDNH9rtAizBjQ3e1Jk4TXwnEwohxS9s",
  "key11": "3xuUgzgfbQUwzDftAhciEpbf8PHLQGSaPm1A29EratY3ppdMTkZeAruSyngUMXf8aaDzDNqpBsHyJff38qS2k5dq",
  "key12": "3XpVFpxHX1V2rjn8VRZ52tQu92KLQnu8szio94DfXc12RChdrG4qLNEyEpypQr7jcLPzQEk8h5WcgeCWePa1qLtV",
  "key13": "2a3rEQGDo1HpMzvKfbFCecyH97tQdn6dkhg4ipfGnsGKAMij873je6VFnhRKg3eMgXYWnnYRYgL5A9fzusNpZxcd",
  "key14": "4hzy3Qv5cGPxY6XSWn7vQ7PCyHV2spRoPU9hpDcbjbuStYstmSCHtQEUw8UQBF2xnuFt8eF9GtRhGsVCqta4yU8X",
  "key15": "3zDFPeVjesknSygMsYWUSN34KfNckh3Me2NZLCJzrXUyjTVSUDNWVeZJQ3N5ruFAZg9hCRke7kd55syT7w7icmph",
  "key16": "44FSgdmzeoVtyLfUXQm2p3hCSJA5YF6W4G1fF5GXhJvjVY2da99XPK6qcr6ynnKtD7MfdJhpnZzz3LtcsdJ77bWT",
  "key17": "3PR6ejNV2qyF48sz3zTZu5Z9ksy7HcExzCK93o2XTxhfqEKk2CfXCT1zVxGETvcezg2sjxPv7GPkv2ynTdPbH676",
  "key18": "ACmUhXFydy8wCH2nVU7tPfeLAZKGteeJhZ4TQP7Xn9QS8MdnZRWTNF64BnjRvha44yAFAJPJ75CB7NANGmjJP3k",
  "key19": "3mcBxhRAhyVrcEJyDtMkDGLTJL5BxDJwzNXpY4TNaBTBe89tJB2BnMVf5Y6zJyZqmGHCEbCqo331svDJF3kFKkQe",
  "key20": "g8EHzCMR8ow8XvgEKM4VjUA9K2BMSWF9iR5vGx1rxdQUXQdPT3T7Jn2rNbwP7AeBKayfUyGdkHFTKSMFZsDkbgv",
  "key21": "4p9Qq4wxAHXGRrVsVwk6xYuPRhWekHPXVoAnUpuYb2qkv4LFN1yec7HEsYNw5R8iTR7dQPgrpv9uovHWUcGjqNqY",
  "key22": "4juxnFpvJY6LQr1krKmiA4PMey2xBPkQj6HGHbRu7vEqoDjkX6iwMu8cYt8YMirPmsimxrd3wMSaj2GLFF4zPKYr",
  "key23": "3ipzpBChWa1P14PGMXoRAd4CVihX8UR29BwYUH5M4zYbDK7vmACZDskxArrHrUoMjqjoxHcPLdnJd2jYL7sjuwjP",
  "key24": "pbviyEkqVgni99ihX6hA7reKgFEVDXz2MRWH9VNgCZMLcB72JAQQznmhaNAK759pUCpq41H7K4T1JEq5xG7AM4G",
  "key25": "5vHBmh9haRuAXbpcSrjSffc4Wgp7uZuJpVGcjhugzhL66Qor9BsR9WaDqAc2yKWt12fKW8iokdctFYVMDciTMGjY",
  "key26": "2CEkQcww2t63apfL2d9F8meX3fF4hVhoZF5qLP5AUodPqCKWLqiPFQiXgDmhriWJKh9aj3rTNQLJ35Fawf7o48Rb",
  "key27": "2GjvnsMLY9a3xKMLTEEtNr7Ya68anFmGMYT5bA9VW6VnKjWvpETvHeCCjXZ9RrpmChyGerLhZPft6ZDLC5UEhpj8",
  "key28": "36pWx6LnJPTd5xMSXDJNEJ5vhEf7o1tqvioMm3ALyaWGHGKnxqZauwgHg9WaKaFQn9BaNTUgmtjsH7VYbLLcbS5k",
  "key29": "2EbKiu7RmFnWcpq6FbXMCgwn1xGEFvcMy2ZgpheLwwZeym7H9PuiDKnt9yBrRgPrFQ65x1BS3JA8xYkAWN5tARw2",
  "key30": "4DbbM6BVueqbFWqkycfd8Xsuw3mdgqXphwehQRwif8obPfGEm4pLwtCeaNsbUyipH1M1qNAjgUVv58B1cCi2zhSE",
  "key31": "4LEYr7dJ1nJLXXWxw5tzfHUMLqoa8xyuo8C77b6Qs7iKUS86WM7suxwo1puhjtYaeiKv53Z8GteobEgD46Q5cvN5",
  "key32": "52HtEsuoLFv7RshzSJ5RgpiBKp9VkKqLYGwN6yXtKo1CVXMv1S1RfKmfA73LvNnsDJ8KjMmV1CXRVP7Zcfk61nbo"
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
