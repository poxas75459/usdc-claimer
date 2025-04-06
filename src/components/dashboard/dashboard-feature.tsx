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
    "3FSzNDbhmpUm3m8boJWw4pjDqQ37UxfHcf7YZ1rVCWJwiByAAUABKrED4jpstpr3mKAAbNfwRScgUAWTpaDqN5ws"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48HPBHXBYSdYriaRnhnr97f7QBkh3BoabPJMx7f2HfbRd6VrmBSNaZWrw1Nxq4wttnWzg6FoeXv3Kb3EYcwT6Wi2",
  "key1": "3SCnGX26PCW4A5YBHFGekN9zJepR6jiQjTNAtfBNYL1amNgfuunaEBF6bA3TXduMHfx2Fxzr4YsmXSAg7pnYT1kP",
  "key2": "NPrDD2buiG3z8ocJbtnt25VVUhrVsvykX3iidfSeqswhgJmf7q6vqrxRWnk5aZmvzCQFbSsks2FvV7j3nxY5S4h",
  "key3": "2WtUJ4cQDduTGsPYNLjKdKGotxQ2HkSVvVKRG1rA54bkQ7CdEWswSmHwiukGxFhWvrvHkXnTwV17GBu5yugoLLud",
  "key4": "2cBUZ3a98AtVU8UryNLjVTCaNcHF3NJBqskyzT7EBR5yv7YYgRdE83uXgDyjb5JJqgSAVgBjYsnM6q8doKqwJvZV",
  "key5": "5zy1VCvebqnUumqCCbocseYrgnAj8SQkN9MV8eWhq4Wgkgcu9dFLVNwAHu92SF6bLPkYKMVhSt8TRmNBVUiz5aBq",
  "key6": "3t2LR7SZm5ATSVMYJ4Q4Kb1X1siLUaBWkLx5wCM2467BXgFEPYuQBLpeR5CedD8fBLFchTCufrEHL7pMvsHdG71a",
  "key7": "5ykvyL5XASDoDhRsNGLRbLBhGZm1yYR4h3GmyXsh3LsHToB5brAExuvb5eymABga4PDA5jjiNBQz8Mj9rTz7dgYM",
  "key8": "3eCK9YfenwvT2cf3op7yTwfKQbUS5xhjQRm4148zB8DeXPYhrgk9DETWEphZPVLyD9uB7cSWPbBxi6TzdYwHojf3",
  "key9": "QUPfvK4vrnKgbmX2iKqUHXdHLCt6RwseYf4wpUG1KwBLVoRq2gLU8BYAsmrFgp2PHhWUTxvHHGRXKMyAs8n4Hw4",
  "key10": "67adp1kW1Ac1aJvozfBJTCYRdLHgQ5gHiHVtTianSHR6RJidGaUqEErTeHzfLGg9wQM5x7c7ook9VQfrPz2sM8he",
  "key11": "2uA7LBobqakgE7paVWSwL17u1H6Hh5TXAs3wxCZN54fRn9ekLTSrvRYNExYwWG5KTxCGnbh62GBJK1x57zx8jjU9",
  "key12": "i2mFk4t5djgZwu5PXrDdi2oqDftBgoRAmPiJx8i7UgTcN9wWPMCquvQc4eb5aBhZSny4QrGXdy4WZEwpqwtbY7f",
  "key13": "5gDUdjVaZJ7uKCk1m9edtr4Exyqn7khdtdS9RZbBNihS8MNW1NotfVeiAkvzTvS8t8qeKKBDr81M678d8hNFkynb",
  "key14": "2JU8zrDhDYHD8MUFsXesNrPVu4XfahNBNE48onZu3AGVvzbKHny1AA8SLNbt6GW7XwvHunM3Ab3F6VHsGcrCANBR",
  "key15": "5Vgtwp9vxeahm6ZihouNQekQ77mDTdmR16rHaryFwQP9dBuJSup4WeJ9LRbaMFBgjwnbEtzG1zkh2auUqt2pbk1y",
  "key16": "3UNy7extSV8S3CehbSdwezGc2vjcdEQe8ur1SUsf22pg2tEpZ2xenvxrP7uvfE6NjDoaCKUFUcd8jfWPoi7GrXhY",
  "key17": "59KXB1YwoxDtS5m9T85FjaqCDQxtTuovJ8JyWc3owwSBHB8uEcnivn9A7Ffi4t1hDAGdh195VAnKdWEQc3v1pfd5",
  "key18": "2qyqdkrRvwEQVefMo2eQkFNx6UqSmBZc9ihC9uNnNqo3mS83a9nKxKQqmFEikkiWFNpLFVanKGWqrKZ9A7SxqgPC",
  "key19": "5CRZs4osy7H21CERdvorrMu5W263CngvghQUYNmGrtsTdsaH98yMH2iaYaANoq6LKXwnce2JroazfC3TvKQ2Vk9k",
  "key20": "3aAbDMBNok8mJ6WQjfL1dc2UMfcL8fiT9paLJhbCqHuXdDYY2oxowUBPEPJyMTKxBQ4hvpkvhHs55fQzkMUzYD69",
  "key21": "56wYgkeqGdxhMsa7kw5PAgeXFFaUTEurQSHrCghKVKetDL45LZcHVL8EAYPHjF7kWcFzzH4xyaXi2savT4mvG2bu",
  "key22": "3YmK3vddKNhRNabKmX6dnB58TjdhnRZR7hv1ruUiFJEDZd5yUkzbuhEF4gPsMVpgXsRkEXo5CNpxvuietHwcrZZ6",
  "key23": "2KPRmVtA15bGn31z5ssRdnVRczsSfASHHWGZsGJHBr5P5vWm48nsqjTEUpUyAjHkNj1uke7hw82gHryPCY72uxhL",
  "key24": "4UouQPVhcfnrgxxSfdzrttrMxc912GKeNFaULN8LMH9G3Wg2qc2RhgsYKqS2TN26nv2ijZrGKXnbqUybhCEq7f1M",
  "key25": "3cAPt3nk8bgERXvX9gRuKUTE4yCGqTzc9wfosp7tBXw7VURTjR82DhjYSYtd4sSEGqgPfp9AFTQPi6UFiq1kFdK",
  "key26": "5D6vU7xdaJ17oEhT9E8DvKasANbopQTtr6UBCHqk6RzXkk1P6kyLvrUDpTmET2MTkX6YUKXbthsCVp5HQQD3LubV",
  "key27": "5aNBP7S92bYjvJMzpGxevw9cjeN9pxm7pPaEanuZ6icR3eaXe7oNbTCV6FGkQq3hU1pSHaN5Nykg3iEso1kgTA9T",
  "key28": "ipzhge3QQATCKuXjRPAvCJtezdhuShRWHW5B2YfqhsekKvy9HFrdjqp74UBpRFRhUxf4dHp4uK7D7ju7tWoX8bc",
  "key29": "4X4D1g5PRz2aXZBdySHHAa7jJVtQuHZvUKjN6sLFEwDvdaeE1QtvhhyCQW7UmNxXBR1weh4ZYpDswwJdcbZNPSSR",
  "key30": "49dsRCRQ3zoLXKRLhhBMocUhAVcPm56ttoMjWqM3nyj9CDGR8zaqMgqPZGWN1Wrzrummjxpts8KT6XBK9XjBw6dD",
  "key31": "67jwu1vXEvw7n5EazHugFYXE5V2WAJdKYHm6DpM4nu1RbZkLbNWC923Qa1kKRqm6dW5u8cdiUPk3XYFhtwWVw25j",
  "key32": "3dxXHveeCuCsPfZU8vUQqKCrruTrxo75iDzAf6SjLvnmPzRJxZKHA239SMZrUq3be1desfAdRKJ3qMeWysXx4TfF",
  "key33": "2uhsf9vxdgJ8CDi9p8xK98dVERHTShNh31J3jFPYU8J7uAgE58zRZi5TF5zRwNDwuuHnFxZeiT5AsC2wnMCTwK8v",
  "key34": "5LyEsuLgu6uaifpEuSwwKr91XZTrzxaZsdwxGNAQ2r2GxZGdgAkWwrjnBEWBv6P5RM6C9nuzwWPhRnMpKZJxUAdJ",
  "key35": "4oDQ3c3EskHgBcAkURZ8kRqiwDfsTV4o8rUVg7fkRxXGrA3x2Nu7dr5Xoskd9ZtoSHFKuaS2VvoQdSg6LNhHfu6q",
  "key36": "2Mw3VGA6mG36oR8ME3bDFDnziHW3kBJnY37W5Buz52q16JqQ9gX3XdckPrhbFZjkf2NVL3P5oTLJNfQKsPsqC7MH"
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
