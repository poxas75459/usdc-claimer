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
    "5GayP6TDv2rqiDrYCgLKKCAEBmbRf3QucsmpfnQ1JW1hmP6LWKdSkDm7B2YXYhwAepEJpmJes46EqsgQBikZH8Jr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g5TVZxCXVLM3eDJeDyf1jHPaPdRvF6JQ3u2pwc6CaNn46ARNnqHH54WxCxKZZaSUFbkoAtZyXPw7ktV9GD7BNj6",
  "key1": "57mq7E3Ap8XdxNet9yq7uknQvv8xquxvPS2cK7tATvoX1ZPUrQoEfkSUZWzKxv8Tax8Uv3d8686GF17rGxz9xD6p",
  "key2": "67A4BnANL4XumY6DbN95C1ZpojMaCzHUeX5ndbHVqJkJE1ngLvVS5qikJ3Xr6cuc7P9mCRU6b9qdHmBTK7VevhSB",
  "key3": "3CNWcjHkZtrHhZddb35RMEZ3Qi7xZmZMqsW8cdocu3Ft9QwNrnXc5MwyDq3hYuEyfb5cBJnbZwjDE7SnpP8EZ1jc",
  "key4": "5ManHZnfkUT2vRfoPGrBVTEHZQbpNrziM7REHJXs9HmdTLn7VRjAmqoGKEkR2iFyY3nEQSFyjH9quHcK9tZBdvxG",
  "key5": "DtMSYWrWnxYbisgMAqLqTfHU3mDUuEe3zVy2TT9DUg7TTx6DKMMZXiLifJxHBNco4DdiQrYNC4cafiMYcq5MEFz",
  "key6": "4Cnx2HZwZRvEK5nU42NL7AiT12qmi1GmgdjyU6xeHw5p7XiXhYvVXSuEDASomsKNYiZkoWicYz2nNr41jtASgmG2",
  "key7": "ALgfj14jzAWQf4xWvtEmZ8bGjwsD4wNvZzyBFwgVriR9MRszMLM43TavzcWMjuWqmTuixcp8WHh5GytGfd5nP3X",
  "key8": "5a6YY7vCvru1pNM9pdbjCVShmE5KvNUsjeTgvFWMBXgSey9JxrVhUp7gCBwBYzrBDW7Nzn5v4JL2tDBXvbvXTkus",
  "key9": "24TGcfQ2BEb8Uir2VfgWYCutnKB6iUppCyhFgPNEJtfEQiEm8LgC8xSjT8GxoDBh8uczZJLfHh8w5kjDQULziKHR",
  "key10": "jBdcK68xK43Sn8HmdhwgRJgMCy2aTMWJ3sctUXX6NNsMVgVaQTXuKuCv6rJPnVcHYg1wv1Pxz693LgSURwrEYwK",
  "key11": "2qR7H8BTo2N7m82rKxyT7HvR7MiNUkfz5W8XitSQqwkz9pYqGXgZNwrZg9PqtxC8HqQu2NHXhocxKvwy8TcoK9EM",
  "key12": "2xUVgHBT4xWFqCbazk5h8kQnQmqVDVN3cUrfMCmfzmKe3QuF9vFz72WrJubRfArJbAgoiLoMTwuZuyrzCmefqZDJ",
  "key13": "4Lwq2yXoFJwvyv1mti2FZWdaXuRkBs9uqzceXcRzLfCD2RA69gwPBQAqnspRfPoJx2nkTGAxFHJSjmQpmiVLbFrh",
  "key14": "5donK8CRh9XjMMKhw16We2L7cVrhhdRhe2YuL6LStfAvWvnNE8rqJkh5t46TiDNwgu8twfSuPhfzztEpsL2n7gEe",
  "key15": "3zvtk426KyY5gof4B1QwdPPQAuBx2ws7R4PM5AzX6pJ8V6bE55dVZF3KVH1JnNxXg38br4JfVoKbUjyrGtjUsTAR",
  "key16": "4AiwJVgKhLhNP67UzfFMVV5hQbJYBMsVHrswrkEFzxwHFTodTGbfJoNfEMw4hqiZ7LF3bzvDCcBbSjDCzGzcumDH",
  "key17": "4yjkuymxWf4oMJPQQsNnPjCM356hthvnWEm6px2c9hNuAQFdQKzrVGZmw3Xy4bQzKpLemzUGswjVmHw9baonoz7a",
  "key18": "2cyHkCD4V6cvbk29nLLk9g72eXHKW4hzXriB5AQy13xMNVompS5pjZiJEtY2mUpJqQD9P4zCngMym4XeEhfVc1pv",
  "key19": "xciFyKYHETADZ16jLyrawqJGQuh1629G8hjdhG56hXb4qptYLB6ndR99Zh6VHbeS955SEVicaKZrtqTQPQabBfj",
  "key20": "qUBf7T7aEcAYUskSyQMhZP1aKQ8Q2A9Cbv1hq9GcvsPC7TBvYWAFtDaySHjw2FgxVqc7EesCsdTDby6s8h9zcx8",
  "key21": "5LgUN2zpemDQRYv45SWbgLmWdJDZY7HPg4VdtSa9YMrCZTFSqDtJ9n38y36kT3csRMcFA4ECFzwh12vuw3iox6Gz",
  "key22": "2rrJLs1METX8qnmT5xZDNhuPZqWc5RxFPc3w8nGA5QNvPxqdczdD6nTnNqjsDU98ioYv44XYAoBXY5H4yoQgXBPU",
  "key23": "2aCFKae4p4Hg76U7MM3R54UxVd57D289n8PWv1BFLqjEaieQRPJGGovp3SnSwerX2ksfSVEMTM8bM2sTgzMWYYum",
  "key24": "2LRe8i8gJMh7toharVqmzJ67EC67Tw6ewM3SWDMZdejiqEbsktwK9ReDbyAvmgsX7qAasDBW3wuyNStawky1oJTQ",
  "key25": "4LzhjNk7Davzt4YuVjViY8BDBJcacSYsLEPqQQV2oxJfgvS34wiqWMxAK3oVvBuvi28WChnSiHF7uWCcCFu98ExC",
  "key26": "5W8BendYmxAtqpT8M6osayZMACGBgn8WQwqtiueFB8WHmAsBXw913F6kosLF8JnABbKx6Vbm5fZKPbnLskULbWd",
  "key27": "2q24YFjVAPdLBtWGuF3zuzC3yWLsymttGDFKmLSsMsyhaadSWQSqFSiMHcr7Shug422ZaRERfFzpDiTWE8LqhUjf",
  "key28": "48PPdyrNxNNGHVSw3NeAUmZsCDrUc6RwuBN8U4SHDYNohFZwkojYUvTM6JBFm4fAidGaFanLdJw1qrG4rVCBCFjt",
  "key29": "49PPJQ3MS1m6JNz71NPwVbS8Zn1YBZEHE77BGEGnPBemUh6Yof8khdBPG9KXjLmR9wxGwuAEGiXR769bYqAwMRHF"
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
