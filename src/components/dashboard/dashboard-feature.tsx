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
    "3wM8qZDg1KyWDknoMX2zxZuHk7a6P6s6iKbJVQQZ3jKYfJVxceYGisetFmM2dkT88wtuJZXtwupoVGXEPhMTH3ii"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56DhCcYMbDpBXohYGRef9J9HwEJdAnTEMeW1eGCLPRDv1oPuB38gSHDXQoMkV97tx5ZX1d9kkz2xTbvhn7axrTnY",
  "key1": "38c1ZuqTyeP4yuSU7skfSLDN3MwnBCcFh2DvDFSCddUpRcJppbD4Cyv52f68ajcGX11STVrCvUdFdMCuMmPDxK3d",
  "key2": "3DGAprmyzzt1bxg7dUgZdkKiGvXgZQxZvKKNpYABmerkc4gkoj5h4w3KARUqK9qhUkDVgosXwn6VsFiZkEF4TSys",
  "key3": "5JHmDD3jjgmhgCadQAoPaQRoqjLi2N3d9hMkyQbJCMTqyN9m5XVUKL4mf72bBpB17N2V9pNy8Q3sXDitfr45Cy7z",
  "key4": "2om5rxUiodZJiiJGpRkeYXk7UuBzsurMekq17dMEb45Nx8S5K2KPByoahUT6ZjPghdnp7xEk2ouMnxb4LGprDL2t",
  "key5": "3UktZKMqYiWidRt9ucga9RKr7eg436qGD5CNLfGjPuak8tMoa6hqmH9vnHNWBBgq1DKzhAfTsESrVEwUG7qhLPZF",
  "key6": "4g74wbtaQEFe5KYfNW8h9MKWWpo8Z2vDqHS6fqrJRyMxpJZJ46BXTKTPHEp8iAgnJvcrxS61Xh7UGYHNbEXVb47i",
  "key7": "4oLz5bbCDNaA1XeTPmh728xpE3ikhstt9Vmb17K2ZhUEjb9yeyGm9B431n51AufXvz3NuFNkacoMcaf1cdbVtzyg",
  "key8": "3wGpyv3P15s3qbnR3aXrTXqfJUzozbaKGfhokNHWh9hMeaWBC294U28aPmEQP65EW1y4aydGjv3Vfuch8Rrk42AG",
  "key9": "2K3Nxu6is72XNt1VtvT8bZxs6Tr8suS9SB4hJe6raHiAQmSpqxGftM3oN33jdivF8ETtbdfU8g9v47WFhPJzeuiU",
  "key10": "5fkC4bgn3ZvwHVyW9GVPvunASejqhoSu4J2YMBjMK7hNGRNP7ryKEuYTGN5poSNsQPUFJ8qRY2GcAC4BtF7fGB9d",
  "key11": "4T8FQuFAw1EXNUMwccPJ6pW7PDU8qsj83QDYTyCwH6pg34JfiLjxturTFg5GY56MzKsFFtdo5oQ3Fh63FJSgxrp",
  "key12": "n34zVCzVYrGAXDeLkpBSZg4bKp1kwjxAwSdZcEHX3x288PANJwkhsmhtq1grBECpqpa1FyKjFAiwiBUZraZtyPd",
  "key13": "4BpoGp2VriNXhakQq4S8TfRs7EhM9S4hhZnJPr8pgmRUaMMUbjvHQGB6pykXFc8tAcvddQyzpvpJkm7zQ49w6yt1",
  "key14": "25oim7Kf7p7RCRHMvqdBAtvJLTv4jfe2Uag2rNmKfzyqMeacZGy7ZBTLzDZhRF7R7fbH1FnMhXjDSrHLjKU6vCoV",
  "key15": "3fZUQU6euCKzV1W7RarHj5ZDXYtKcWfRg15JLB6YDSb6VeqXweseACQug6ZZrhPnHVMmWWqr793D9Z2SfTsrPTxx",
  "key16": "2N3qcsuwQAnxQJdLNgya1vaDtVr3X8A9CWVHj6EcqBF6BgxASN4GMv1ubideaZ1gwzz6qKVb3aLjoRUuX8ZhWMTX",
  "key17": "2tmeLG8u3j7GsWTiiq8z7SqXcf8mwBo8bm9xGRMQ9Gte8Ug34naKfgh18ZY4AKdzQ7QUXonNEo6pSPTEehi5Egt6",
  "key18": "b7fS14k6eJZTm8aTbXUYtjDMm6XNLndf5BXiDA6YqBYLh5sw93DNMjmKjTq5Jx8UbTUV4kyb4ZRSvy7veGDQ7Ms",
  "key19": "51VQZy5ieFMtwjPyi3mfPMPSBqzU7DU2jmthUvPuMvPzpBAWbtHiqL6YJVgHEB2NSLXR8xBF6J5BftyPpRiMcuXA",
  "key20": "4J4R584XqxEYWcumJe2fio1UdkQjsB6kTHZkddoPCsPLgLxQNV61P8jb5nHEFPTepebyCFMfk7fPMEjeE9XWAJr6",
  "key21": "2ZZ8pyPMdVaia39pBkMgWKWQeATpFaNDeeyR15AJhNgJCmdxjrkfZvLXSEzUnNNtowdmmpnPuh3jp5EBvp1TxMjn",
  "key22": "g4abLajr9DyC4oakJwqfKWaakfWZvo4BgL3hvzYRPSBCGrVekno4mcbL6rEwEHxev4t2BspD4Ws2iPKdYnsXexh",
  "key23": "YBj2YVkKnAj7ansXW2dqPgRz6Q65mxyQBE22HhaVpv3KJPyErToWxrh3g7CmAD6E1DPNhXZp16rG2Nw3wfnLBfp",
  "key24": "2kWwv4fChoJnZxVqE5nSLJCy8kaZNDTttysCRGmXidY61pJVDWvPAVYXA6YxFHHMYusjRMZLMW3WSrR6kkR33ug",
  "key25": "4LEfc3NJseHs31dqL8hyiFdekw3mxmY9tN5WBmcVCQgKmwUESxpUA2yBhCb1sKtw9gaobUwzhQzdVHye89BMJmfs",
  "key26": "3QufLNFoycwZQyhfST7UZ6SJw85uBi9FaDihcnPjswxejxRZmZDx3vgkxBw5A2a1K1VEQCyNUjMEYrRmmS5Ve9JM",
  "key27": "2B1KuWLUGDGY3zyaF56M8SYjaconwqAMi6rWVY1DNcGGBg1TPVJAQhcjFUBAuGWzc1p6fzJvpQHvkZB8VLUDpKvQ",
  "key28": "3RsqdZASDrSdcUU73L4YtoGT7uoti22ixV6wHS2theywAwM4PXrdoTXJuCpWRQuxdMALTTFrfK3nM2cvuPcgdS1U",
  "key29": "5r3Jvxtt9RocjAH4pYq4LAccxU9uvGTanAguaE69RuSnia2UvWXqFiQ1rWdP6uZTzksxAhcRaJw8rLtSXMVUA276",
  "key30": "5cvzh8CtRTkfJhN7dpzFcWrkJ52buZD2cXA5w9PPmH1kcHKC6AyfnMVRJGW3VQaEy6M4AXjJRpWcd9rQZs9PCxq4",
  "key31": "559gCFxfpA2rWmMEyAeqyxqwgwUG5qtzC71RfgqdooLH9yDaxcA6sez8bS3zjUAwzXEPxF8YAH7CpJmy8reooVZe",
  "key32": "4oddZAZrdbRTbw2FVCdoDUaKx2EpRw7bKDLPF99mGjUNUkBX1GGJ5NL2nN8KkqSKRpAu5WpdyBN4Dh4JG4SBA79S",
  "key33": "4FzMNUYga5inHAeU1r6GeqLVkmcnFzF8CqXabjrs9YCoshLRwZ3GJTLPLLAbdyULGBCns3e5REE5E74or6SrwPCE",
  "key34": "3U8U3hXwzAuiprhws2VDwm1SHX6c6pGPdhfjCG42EEwTDEYq3ZBjpbPynog1ptkpPJsu6cgDLZ2kC3ord6ynXPsw",
  "key35": "26ihtzc4MEsPH8TJK8v7MeTrSm87h9ho1j1Afrp9byhc8T7tsrhzBpdSookumUrXitbpoXNdaWG8dMy75YHqXe77",
  "key36": "4Ue9B1m8md8afrUe72qap5rUebi1uHKDRB5ygWLBpCE9GwPsxHJWUxV8chrZk6xFcFP9HA8Y96oMY5Xx6wvQrGth",
  "key37": "5cDkJ54xsMaDxJXkH8RgtAKkJmfs1FZBNhZZjsuyX1prCiu2z5FCsv2u4ig7mXQZJmjHP5PZ7gpimHNQxLF6N5Eu",
  "key38": "657Epv5d1zNUEja2UDEZnJwm3ShXbMgKsZRyHKLR9XEoCdWCetJykMNCFjL9PDXJtNCNGH3xo8Xc4ea5YZ3tYDeR",
  "key39": "53y1jfqv3GpucFNN3wHjB7m89iSwhKHLJpFrJsHQ4nnXL7BWcpkjsLHgBgWNYKGbJyJCqEJqBRC9XeVUM6ccPKFQ"
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
