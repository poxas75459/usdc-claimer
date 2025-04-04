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
    "2fpnCFXRR5BV3FhHEt88rTVY18iLKBpgMnzG57jxoMfupJfAjY5DVfiVKNdwAoFpWkpeFDmKrUybAMGu11rLXx5V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oGqgyPAK9ZxzFSs9dTWNzAhNNqkzGPbZH7DX5Bp8PqwE38jXSBw62YDA5onBNee5z9qSVvp2Ce8KzSYSf8GYJoS",
  "key1": "3uxBL5dWx6gmArgKt2JxxRc4FdbVE1RuVSn2LwRC18DxrqWGd91QK93hN6K33J3RFqqmCPaDLoCqh9bzktLqshMx",
  "key2": "3h2SKmGUaJ4WaewPgpZYTujJpPebtFdRfcxFjdrCY62kZextFckVEAgTGv3ZY8e86jMkg5UPs4SihaqZcVGMaJTE",
  "key3": "5kWkytLY67yK2SJZafc2XaCm9mRjwRRMfmnhHyZwJt9fZZXdPgTXP7FAJtYWEuENciNdyMud5iuk4ungCMu4g4wn",
  "key4": "sqokFeHFu6ZWNf5yQaKPbWhp3oR1FrKCmxiLgpz2PQ2wh895FQXQxKbWU5edv424V397T2Cx2WJrv3fHSkmYQcv",
  "key5": "4gbrg7xQs4Mk7rQaF3jwzrjYMoRa8qgDFo1e7kJDLz59cxYic5ERLYUUcRXpjKcv4iHC4rBXHRkdbijpbroeZWCc",
  "key6": "krjY2QNsdS6JLcsGiUkaNtkRL7jafsa8wM24zTfL6ZNQ9VrZcFKfkD5oEKzTNJbZTy1QHJf94sUh4UM9YQnR88d",
  "key7": "5AHTboKKEyYBZTLUR14vA2rH9U3YZYJjjdG6kBHhFSCU7z74pf4hCLFpTGF4GkATuxD1xLwdxVcMFFvemEVadVMh",
  "key8": "brsNu76R58afa12rMTqM1UCK4MMyKLAvtZvVyYB6PHFnTqxRtjsjTovDWwYVPAyhWEL9DeCSyj7qxaWmtGR17s3",
  "key9": "42tg7qMQdj3aRx4oxEs84rXuY7xP8b2rnvGVMAVsezgjwzz1XgoYmRCvJHa378GzQx496s5RmN8E8FfaeYmx3TEH",
  "key10": "m7SEdSp9zpCwMooZQEDJe5wqhxABcPeGXjY9oT7HvzMkwBRuEBMLCXae7WsUx5K9SffBur864NKSduGzpcLZ8As",
  "key11": "4fjWi3siuWtgcfB3avT3tuJ1camwdKVjd4UB6oztebBjGWb13nJZZggVT4egsrKa65KyA8DHTF5Ge5eV3JPxM425",
  "key12": "5xs3BcfS8CCX9B3NAWsCn5e4NjGfMAZxqjx1UEMTSww278C4D6vMa3ztFRV6YCjpPtvdoKwUL4R5EokV5eHzEPmt",
  "key13": "3VMLWSDEatk6WKAHfRymqF8TtYVf9NVyMDv5AzuxLdw6jXDr9RAs57DkBqZibFqVaFHQp4hiHp4iseFVNphmYnW5",
  "key14": "634aYEJVFGQCWkshMFH2Ye9Jwd4U8XEgXB7VzF9ZBoxmFnC1raKcdYfFaiTHVrxac4CZUBEmMaeWx3iGbBgobBnR",
  "key15": "3vS3k5XNskbZxR6qEobnU3B5R582zdQE1b3xJqpXxdwRZxmzLET1d6mqcqCBc83GdHZ2jiQM86eSXZXUnahRjQLo",
  "key16": "2FoL1KKnbLsBTRUVPraTH3Du8uqeFpAjZZaV1KmAt4FcTZLdHmzrwXd5eqK4VYKZC2yookZ23iQjE1qKub5Hg5Yv",
  "key17": "5EZ7D1wXVFyoHFAE66KZUwkd67mkcxzzTXMkMmZyBZJ1YJGDkZzZLUEXjXdm686rJEvtiHBqxEvWtJH1HrLYCFS2",
  "key18": "QC8NWmBGzDh7YzPNFA918ZceNbt5ebdUpw2qWHxaZjBzgXJE6JngJQdLn2VCGXMMVFLnBpLbUy7rrAAqGTFxuuF",
  "key19": "3eZUC6jV9mxqaWEEsmtPJGxw7PH5DuBfJEXJ4zrk5apeNxkQdrCqqdvFW5oAjjHvgPMDg1icejoNGMnGWCdMdV93",
  "key20": "4XzgJYPUXDgqVNksscJVnieRwtmmHMJxtGZLxCxogERYy33nNmLx7vY8idMg8e18348DA4Equ8irSyfAM5da4hBA",
  "key21": "31nGvdavab63nkKHaHS1GUqUxHJ9scfdofab8w3WJeQbgsiPiRnvsMmk7FZ3ji3zrLHAHfitHT81JwwPB7HSnHdV",
  "key22": "5g2Zv3HSDCVQ2GCU7ycX7gTCUn3zJioaKThzdQWLuhx67nNbB23GMV2FkzPhdt32Ncq5VrJ96cGn1mwvTTdc251i",
  "key23": "3r4Xi9ZSBtub9qKQ6GwpgfMLCmLd2JDCS8Q7vEa3dvStSRs1XZeam33CgBYJ4SJFgK3qk3919VKPbnXR4vgprzDp",
  "key24": "4varb1pXE42T5yzCgFCFUgh6jcq1mbL2ZANTeRoWYjcgFCSUv3sp1KGxybB7NU9RRTGqqHXnmp5s1HC4NgVYG8cZ",
  "key25": "44Jk4GR9QgvXsjwPcmtVZwQ2CMDfPnoSkFuYjT4xQgdPioLk1FwXmJxQ4FYJR8oSTC6Mu6cVd1BuDmiSJV1reLWm",
  "key26": "5vnhEYBPVpsmL497fW5BwVHvzy5o5tWDKfrom5emvNv8KBDm2afaFtQxGe8RRemHUj3CeHGK9nELPjE8QRgDzj4W",
  "key27": "5CKCpRCMwviVYym3wznnrk7u25xVfwZHTxS45Y1axcaJwGBtg7wkxYYta9cVTHgMFeDDznujJHpJ3N8CsWM25si2",
  "key28": "3gbyXdj8dczCvueFKxYUH9ujT1HYdyVDJbqrSExMD8KYHCC5YMemWKVSudYQoWJt2rJJkBjc4MFpJ6yCkZj2Hi3",
  "key29": "55Q9hhvRnngMuk1Acx3HbNcEmbTuXGfDmgsxKixuBwrU5HzQRGS7kJWmacfj8o6igWMuGaqrVcUoPCNtEXfVeMhN",
  "key30": "3yWJ9PZbZjARfYGvskcU2qNYMco9CCqk8CwmFNRyRf58hBYfUm8K9k8XeSpV5SFQrjugg51bHbXBfAwUDQWQk4ib",
  "key31": "3V3cRzEWkgLBoaQK5pLkk5ejhzJbpygAFz2cLUKF9oh1DEBsmDt9YQpKdJ7M36wDDLeH4bf5c1CB5Gzgp2zGTQqN",
  "key32": "3ENWkX48FucxDXnSBWXWtWXDZ9ahnExs1RFa4pB5bcgiPDVuPiH5rBPAXJEaWnsYYFetw3ftofSWphKmz3EFwUTw"
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
