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
    "2aa68fo5dNT9qYCEn7HzmCcf5KgrWTfUrupw8E4VUkc14Uv8F2hsQgCybwMQsz2EzK4jN6jL2Dt9G7K4HDCg8JY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CMj8dKCnAVnCyyBNDnF6Mh6rfT3U4Anoa4yF7WEkg8RgDGmLnthHGPHcvAaP2GUhF16bSZfyxoc5uYqEr4tQWMY",
  "key1": "4wbDBcLvyXSUCaCdzuvH5fYjdJSFTAnsUYHhWR2XvoWWjjPuRGkoGaCqV9g3HrxsbG5bjgZVUC1tWUGtPjEzJfcs",
  "key2": "2aVcSGxBi1zHENmsy6wrRfuaaJmLn2qX7qFQ17WccLmQ3cFHczCV8S2Q9ouzZzdVQGrPtGXHqHGVwMRPGcBpUmAK",
  "key3": "WahjLzhbSJ9L2EafQqN1D25htmFqAJ13b2eSg7hD66MeeWfTZ7k1sAAsZLhj1A3dgRVkWft5wvDW7rMWLe99PrV",
  "key4": "29r57rN16rzq7VfZCz2nPrQTZf5EbdB7WQUL4ENUd1JQytuGSi6ULRsmyTd2urCjsfvGRkchXWza3Aubugb1hMB2",
  "key5": "2m9SPPSBjwQX8V1pxdYT4X7rmgRinTUfb45krAdcvF3sBNUGbF6VQMtCyXfh8MxuUSpFsqVraYFEX82cd1P8qA9p",
  "key6": "5XnaarJhLZQx1h3jJMRcmjGSWb8a7wma7romY43BeytJ9U7Be6jh2uzYVDEGLA2jay5sf5dxLjgzXUbjsmytwwso",
  "key7": "2vxFxSxjzVnwfcd7eqR6z7eHw1mjFJ8kxnUoz9WguMZzrDmpVbyKGJBebi9M2ceuoLMcUhz53jmQPxFBSkuZ4HVY",
  "key8": "QAzQQqhyNCqK4eTtm6UToPVEnqiaN7EE7NdKGtrgUdCpepA1REFcgVRgT6QQtZVj2HnfZQE8GiNWfPQvceSyEtc",
  "key9": "8gUnNEjQMdzixBWR1grtnXFKU3QbP5PuEPuo7FuzVR3jyAGqo8zotgK6b5dg9vkyBJBJqtRUx19DxtxrogZ9Zhm",
  "key10": "4yPvF3ezkvKsRiwvHNH6TCCcW2iLiipHJRszwDcWdj8chRZo11zeyVoQQLuvq2KyznLxjMdYwm4KhLka4cw2jgcm",
  "key11": "5zpPCuZxPfNrWdfpyTNzJMYLWtW6mBC2RG656acCtA1mthHjtTc3Wd9bbuFzfVRsXtgdKYs7dLEsdjGZn2JMtx63",
  "key12": "5pi1wcG7893NwVdBPD5XrYvRqmNBKNu8WRkE69ohEbFwDAJxogCxbP4MGWRDRz49MQRcGGuPjyyH4yD8HmFnkFMn",
  "key13": "5rynHvY8cxpwaHdhoKxiiXmizjuEVRnFZgGX64ssb1ks665mmp6zR3tx2wEV2zPvSqMpu1G7zLNWzVSXzJB6NLEt",
  "key14": "3MfHAMT3qFL1WyNo9Hm5PTEiYcRSENJh8PPsUohJc6RwKBAJifxWZpcFj2UjJ3XAiwy7sD29dPix5RKqRkoA2chX",
  "key15": "2C1q9gHgfiioHxmzf69kF6GCMnbkhnZn2orgH4ZZ9S9mssNa1HuEExzsg6RveXtqqyWGV7CSb2RhrtspasHWMkwQ",
  "key16": "3CzDZQyvdNLXqbsgyg9oKuRRtn8MrSJi3hhQfDamTjmnRFqED3N3WC3KieDEhm5TdspdiBQN2wwxi1vpe9UTb26V",
  "key17": "4oSPBEZVopm7tZy9maTm52EcLiHdtbGsihvPywXE1TA6QK2ob8sY4EpnCuoZMNxVZmyiv8LRVmpYB2hj3yQk6W8R",
  "key18": "S3Yh4cyLGcoZw3bhwEwA8ut2SMhynZadCSnxQSW8bSzH4pzsRUfD8guB5dwCa4toLFdTRQ8tznaUteCWGPQ5rWv",
  "key19": "5ESWnV5t8pecFJtB3y4qwdzbYzp4CqoMsYjQpvy15T3f3FUv6GWaSLjNAXpt8xzkAVyPxGifrte4wSHqnYRk7qj1",
  "key20": "5HWEEk9HWzcNyWrDSMaRq9984w4fwaRyXwFM35SJV6Lm3FKedws6iwXwJHnFQVEFfiHnjzQWEfwt1ViSbnBgMFPu",
  "key21": "222FzzJL92GmwmJ4pHKF49ER8mRiWZ2GuxYnjoLJvRzDL3PzbyKAn5ffv7ptbw5a3HzUwYy81tFfuWRN2NDWJPGp",
  "key22": "b7Y65tDL9j2U25znmZY453AgLYj32Gp7pUX1F3MeyQiYcAMf2pshckpt4zerJjgVk9VnCZziNbpjJYhR9n3P3qn",
  "key23": "5ZJ2fXNhP33wmjPiJmX6XL3hPeEfKZERK2uZm1Da3ifD3i7iNYoxyhmxFWBaD9AxpWbA3T5RwPd7zojKo48Te7xd",
  "key24": "3dd1bn2KQJWTzPpJWyR9UGTL9YnLV4P3jYb4MmktE8hf96ixo948C2vgZM82kEnKtxHAmGiJnhCFyb6tY6y1pNMU",
  "key25": "3qTXfy7hcGSMsanwtWd8BV1LpFcFCQYBeupqkjRmDssiNbcPb2shGdXXocsu34fkm29vGzF96x6Te56dFX7hiMEL",
  "key26": "5A4CrShzFhZpynKvqBZX775KrBDhDUon5pieCaQAAFzV4BbyUsCb15iF3mL28FufVCDXonWhbNKNJHPngURTjbcR",
  "key27": "4HdMNXBH9Kg9tXpNqFCcrqbQMdcSHZPi9atEyUc2V4PD5tcKsYLAACbF64B9RBBNeKGMSEjM4BwRHaX2boW6v1Uf",
  "key28": "4oiNJtWU3VyDmi9PhXARQ7ct1RCuQ143evrP6xYYuhSv1YANYo2Q82vJ8bpgEZvrKMVfiAnyXJFQW6U1bygAWDTg",
  "key29": "2W8njxWMgP8GmrnZTHRDZFCKNnPU8gAtj4FXjN68JtLJBEfEHKhMMnopVuu1SbrPaUn68LGEoMKp2J8BHJgVnptM",
  "key30": "65LBuMQmtqfwYbkEsghNbhVZcvqyrAZj8cKAk6bp8Cm2X3BfxNPT7USjkyQxbXMkt94dPKcXxY4rpHY4jQHXfGpt",
  "key31": "58iJuSoYmXbo2AKo8shmRBQ57oWLhHo6iefMYvYxYENXsNsnGL5ZEXi8mSYUcCMjHGHqAPtNqPRc8xSsW27eiZQZ"
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
