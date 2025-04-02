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
    "BjozQU6RFDmGdpbV9jVokRu9M4FjzFxZF8eViRnQe7JXB9jLjtBfyN14ymVmDubEo1vXD8qCZqVTNT7NLmTySKv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sQS3ZcjjRCuHytTZ6Z4xVgGy5nF55hMWZW5Mt4Fy47ainCmnsL3MLsGvFp76NyQzNDVqgAaMzxUak2rDEjR29WA",
  "key1": "5ZRumqzMdmKm3oJnQ6XSFzjU4GvpcG27Z6DYSKhzeep5QpYnEBYth2xgBAXimeA3EcrKgLBCvg9VqTFYL5ZN5X3u",
  "key2": "5LqPpwuoE66i2rYNvc1TjKjhVMSc4KDtg1cP6fJb7TUXUjrnhwVEPAJxDP1wy7Fx9fLUnPMbz3sEM2XHgRvgPkxt",
  "key3": "67ZD2WAaqQBbRm1FvehsXNoj4WNhMFzKNfZbwkktpe6SLggocija73xt7nJEDWHkGqBtvm3s2sPioQ3KEbsNqFWo",
  "key4": "4WnPHRcGeKrWwDsTYcTQXoGzybQiQahFsBNMhxLiswWSpb8qcg9RRm5TU14wDgAaB5RP6VQqQ9VvHNgoM1zcSagT",
  "key5": "4Roep9tcaZb3fakep5RQNZ2iKA9tZok2Fnj2XBXnEpTdLZDV24Z2vPk3DimUcHFK499pUCyTxfxEGDYHTfZUBdVd",
  "key6": "5LS7wAz7f4AjjNp59NkXw1GG8uNzvhMB5v8dVGVXnvnX8ydmH88Qx76PjjXtE8rzp1MJVNZHpikv9PMc4auSnnxa",
  "key7": "3v27FqzvLcN6UqsjDDcfxLbe8GatyeP5rCZ26c1adeErG6wBuSFHnwJyQym9NCxEJVxPBviLSXAQsLdaRUMA3US4",
  "key8": "TQSdDM71Btky6GLsa48nMuP2m4SDJV9ufccVEitGT9t9bthKTU88EKeYx58qD8cDosShszsvQsDXbsJ72L5xYCW",
  "key9": "1STPeJWvk5eLADocV2n4X5kKmC4kpvFahKXEtsGUJWTFsdjtBa2m7uS6RoNgnjvJ1kuy8KyCtMt8bpMtUrpaCCF",
  "key10": "2gYdQ9rLHcCB5GcMSezeYTqJEvNPwaD2z6TwnR9Vg9sDyuPZRtGaiLJV3eUeYTVn4efwXQTy1MXzbeDiMavrDQkg",
  "key11": "5sV1sjytUj8E5xceqyKpQegUnwP9FSxEqbP7LcWzt5qXoJ33BCrqZZUk9D2rJcuJnDEyxCR6Gfb81ak37pRfkjxQ",
  "key12": "3vmGmy5MAAJDY5QCBx21gvE5etqVCZc28ZKydutZhj3GcP6Gh2PF9gxvBjEpb7pbuM2Qdc5GyPTStu5r8xQa95Y8",
  "key13": "U5yWv8puQSHvgJYhCywpbCLbv43Tdyzhm5bdVN1bNVZGcRDHhx2YJdGPUECgv6p4MNHyeXzRhitw5m4KF2n3RWf",
  "key14": "3JgAVDxxA8UnjHBkAcLb5xRgmiEqCBtdYtXUMCa2aFNHp3wpwdD8kD3d6CS2d7wichct4H8uefhHcmXVyszp9FLQ",
  "key15": "3UtCAxEQrz9NcsXR2Z4vGJioJZmf2ngZJcDRMxgikZw9J7ANmN1t9PEkRdeH3KHfJ255HKXBfy1Sjf7M6eEqpcPi",
  "key16": "4H8NrhJ7dQeGtou3PWBfbCcbo3WAQvn5kR3JMmes7VHXnTQpJK9s3o2fJVtjkACj8UssspuZw873uhGLpg3g2GVz",
  "key17": "654je9UVaEeZ3PqfobANdQTRD3TYbdeETmCQpXMzfLrTK7iucxFFW2Xt6U1xsJrfoyWrGR8xFgu1eYFe5m77RNEP",
  "key18": "4Z7USqmm97Ycsus2C9ZzPoMD7pD1W4wsepxDVaBpBsKtzGGogBDDTwfrVCL3w8NhsWc2QsMt3bMSyLjq3MdGFoD4",
  "key19": "PinQyi5xUFXzVCLMFE9EZVBYacZs2ZUqhYKsMnsnLT1WECur5EDjY1S4jcPrRRq2YJwDTXLKAQ5EtuBRQLNdgor",
  "key20": "5Lw2QyD6NGz9MzPuhSws1aQ9SDNvzu6F3gwKjQYqPLjmBhpQ7baF8FHUdebQGBifTxjnnpn9qpPSJKnKVaXcL6Bh",
  "key21": "3XgiSGg4tFmhPjVWZSgTE3KZWpbcDdfJDdA5TPuBS3dxVZCa86JhCrHzLErfzJg1mAJq6mxF8JrychJ9AmvHqpTE",
  "key22": "4pL9eYPyz559LENuHyman5deewGX9hmzPUKaDgkMGWFTi1G6GnnokpkJTvGKXHGXm8cs4Jdqnz1mC1BUTXzb9WvG",
  "key23": "4TkW6r1sx5nLWzJLbshnKqHPG1ktqn9KEMTzG9R6iUZK8n91bX6HeyzxnQFWsQvZdfDY8txhi5Sw8pR8ZkyMH2Nf",
  "key24": "44382eenv8GrfSAF5kBm3GKSfbxq4zZuzhycrZzG6HB7RGuRFBqXyUQaym12P2WGDU9ED97yoJ3yxaBbD2ZHAUUT",
  "key25": "5LBwc7wt73b5R1UJdLgKgxuUrWhtvJbCyqZV7yoXn8mZZ7qgMCBRUrV2WDpS4pm9zcRW1QpqFPdWQja4h7iNgy36",
  "key26": "5C8XdimcMz63PbmxUyEeGa4JbyDyNnakz7hipGapwNat4ZwjVYjksSu8siHmjRt9djPKVo5NbQJ8UMswtUDAFL4e",
  "key27": "4YPMGpUib1DLqeu3NjodiAih2RShGBM6Z7rgcq5twLy8jv3SR5UhgdDdfqAsscJJTSEEq5vns1uZwZ7a7C8ryfm1",
  "key28": "BxC1fgYJ81Y2KsFH2jBAL5e7M3GQPNJJ3EjouwPgZKM7qfXPipDJYKsZRhfb18apudXNP5Ev6pS6MKv1pQWJwCw",
  "key29": "3zMUTZbBKU83UPu2ZFr7JCQCfJFKHAANoNwq28799sCo2qEytwyevBSpvnWi4fjanPrG7hZ3rYTdjT6u7TS8FGPd",
  "key30": "4Jri1wLEn8ERi6oSWFWsqfWS1bCHdNwwJpmEqjfUYjQijTq6nGe7Yf28PQzKLAoQuvTdAw8ZZof4UmTUSTtD5Q3J",
  "key31": "2TMwxwS6HKrcZUqbGFah1nHBE6LTLGW8EPnUMtoMA7t5PHrCAGWQgEsApMLJqiwqJsW3iezXux4KLaN7SrYqya8K",
  "key32": "NuNuQgfh9ZiCzx9xBJWwVtGwrymh52jH3m5vda5U7fpr6Gw3QMmiT5sU7HSxWrWf1b6Wgp6HRTzEfWH3QZp8U67",
  "key33": "4cPJP8THcKZTepcpFj15ykYNZPaKJTdGGBuXzCYzZQf7GQAVn9qXyckJEoNW8PnY2aXfPL7e1wrsT4UuvJFVUXCs",
  "key34": "4qi2YjLJfNLUarYe2LpRzhnL7DhmAWRaU69xCVPzyMy8U4VwCzFxjBUD6yKfJ4gMQzwVFQy1ykHNqGVnGY6YuWHR",
  "key35": "2erSp47m3xsNBUYyGJBS4CBo9i9sWqqc8ybdk9a7guy8gAmBkccHtvhdiM1TJcNAsxmUVsZVjcMcMSRqeoqZxrGD",
  "key36": "4WZPzfz9U6bpaS4AZxQK2s1DtGeNZBYbvADYzd5yYjD7Jtdi1ABhgVfYPBDTroAKvqeAr9jkx7NU4e5Z81J8VKK9",
  "key37": "5j687yFZrkcsBwxY21Moda6U5KTzfWF7nV1JmZiZeTpVqRpWd4kmVdhQkFwoFUXoVTwGj1aRrxVLmZGHyexqkeop",
  "key38": "5U1jn2EoNawDpvPtBqrqK5Afr9qhTprK8qjC5ZunpxmVzoXvCPkhB82BMkQYuQh4fxkWuGcpQQDY6pxt6Zs8vwBx",
  "key39": "2UvxTASqa2iBaeeL6PBGJPGG8vvvsPjv8oGdkFN3E6Gpf5UjmqZPppyNPTdZCuTQKnAg5P3KZ2HuZzg6naaX6KYb",
  "key40": "21Jv14dquWMAgbg4zeW9WExM2dHs6ENf868gLQxfPbvaaooyEL1EwHzp6WyT9GnFvzz82q5UTYxLZAa49B7HRBRQ",
  "key41": "2skeW67msDBj6TLZFwrfugPnmyqUHhUoDoyGJUWhV1nZH47HBr62Ufh4suySwDbzPiVJHkwJyN71dscF4nmcm3ua",
  "key42": "3cyte4HTMxrYsiafWAozJhG8R1oqhvuY3kJ1gN6eoyDexs23YspLPzG5WrTsLxA5vaXUDU89AxfEwGpZzTbL8hKr",
  "key43": "Ph7hzLvfqVDK7NfSpHMhTxX8W9SWpx3gG5WRRxrRnKWANffxmEGTbuPkS75gCC6xVdxDrE6omGZBYqZ8QC9M61P",
  "key44": "2BaB5bbasvKBKPDJ18F8X4c8GM722ahAz6BkaSZ2jT7ksw8CEEE7RUvHuWTmfKPQNkxa5n3hJh8VVdSKkkVS9GNi",
  "key45": "5T6eYA33Ns2A319jqJ2RU5mb52Ejerqk7VisRptWPEDxptCKQfSSaHVR6n7sFq8434ZYvQtbQTY4WGyvJj6UEix4"
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
