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
    "516LS1vjfQ1GaJxd1bQPWCo3FXSRPThoS1ibKDg57evSPV5TqTviDxwsWAUnAnmFSfDb8YQmuoHEAQ7AmWXXdUoh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22xZQnNxhinDJWAAKCghvN4SA9ddtKMT1dDHGmQAKnwMd2oruFVCtuUi8uSPAmE7A8CEvd6WksxY326Nc21dTu5N",
  "key1": "5JYraNWKU8ZiLh3niwh9hm5xQNCmiPVMevebzcUwTUD7gYK9rPqypr3h2XuvdJMWYDLQmhd46p9MQBxzyvmfYTks",
  "key2": "ALBkXJP5ADpKvLhAHcUJbH81WT5QZ7Suw9BPq8v3r3NofgjpG7hJsTXEydKy8Twq4hYMd9Avz1TCvTEtUUMd9CK",
  "key3": "3BaFyZkLj2NRr3sKrkyF8jJp3fjwGixpvExxjuXXHLvuAGRsiwPvt39MuSyNMauaACLSvFi1j4MzJkHVPMVqMH3b",
  "key4": "FtGkQtVyUtXEJoYE1EsdBebBRXj5pxMV7HHK6QBf7uJ2uEAosint4CkYriP7Ez7dwHcC9KDXzsshfPvH14BC9RV",
  "key5": "4oKZDUkY9tpSmLP7SDWExsvmPr8MwYv9ovbttNd94dt3BphoHgFxRNaeYPVfLrwNJ9KXpSTTidFLjQFd1HbLzFjJ",
  "key6": "2QLUSqkm8CsFXV1Zo8EB5bwCbUgw59i2WX2SmeZuKaWJjozLyTv4yz1CivPYgr5ZSC3JmFcW4huifQdYZYFhoX3j",
  "key7": "37SVPxNQTtMwRWyRbA6kaSy64VshtRcpLSpshhzejhXWLBYxd2TUvyMajjPu49K7Ezev9Z7yLHgzu3fUe8Ljbuqd",
  "key8": "2yiGysYL6LoXSMEfnxfWp4U9cPdBYbE6QNAtATFn4JU9tYNG1P9EVrHaVeMxh3r5B7yhhayGh8gtyrTrzXCs1BiN",
  "key9": "3kuokdpPEmXonh5HXd3BE3CYSiTjxyXGHDJ3PHKgLqQV3jkzV6mXqumtUhj5Y6Wn1hcqRhzix7rVhNZZvMvrPqem",
  "key10": "3mPpZ1wz4CsGbxTpECrMNcHHSfwJERA33aNm4Qnkkksd6Prq9qJfXPQA7X5gqswWrEg8u9Bdp4gV3ShKXRHjBEUZ",
  "key11": "LgZnrEtkL7fuRzwkrNBNbYCquZHjm1t5HHSnap78QqGfksYaHzseSqE76h9uuE7tRGGagV8PPubEVh5KL7F5t14",
  "key12": "MfQAhpvVLPFwy5dgfe9eeUcUwgpdFJum4ada26xdJq9ytubfNmcQyRRHjg2HsKYzmhAnkRuQVsuKs3uzw6hSthM",
  "key13": "35VwYWgqVD187YcvXbCUUGP4fzGqPzyTepLeVgvE9QnZYxSiBZN2BjJBXw6H5A1aVHcPtWYR7cZzvsABzfyCenA8",
  "key14": "4gAsDe3M7KcrfUkqoRZa8QooDZc6t67PyZqDdyWFRGA6bm88BX3eN2dA64dp34d3zfucq8nGapHWvxns8YfcqFc6",
  "key15": "5W8MrUX9ZJDaXKuZBAvMCymHNUtYnN2ZKGWChFKPsvr1BsJim8iyViPCjpFffaNUpiWabE3Nw1E2Ma33WaHdXYmp",
  "key16": "2cBWzQapMGMtPzjECQvPQPSHnfM9xxsvQUboLsNGSrX1P6YCx9ehttQxWb48hwKXUSSWDeqxZZsLhsDCneaRQeG3",
  "key17": "5N6j2T2Cp9ei85z9qsB7c6zrdUbAZhso1yZeM36mEUVndjL2VD9CYmauqNAEKrdXeD5urHCZvhSjdPxxAnqNB6jP",
  "key18": "5pztZtHzYfcJp9hsqccwHxpEV2KpvLwyUW5psY1ZFPfWHn817GE2tp5xrLcMtVhCg55bL9d1c7GD7qWXmkB4ZD7s",
  "key19": "3cMLZqYLe1hZgJgKXTLuAbAtd5HZwTQu69soBizEEoVNZQDLrRcqk5Ww9kFCY4PvQRRZNc3kGKVRnfKpbTLpRb1i",
  "key20": "5AWESwwEfMb8YieGm6KPsK5cjxCJzQ5wYeWgwHv2A5rHrz6jwmgX6pKAXLZRbxJjNvsXGRffEY8S63GiDVhX9wwH",
  "key21": "2WQQmRe7ye2ij98WVshN5UNetPjsLpFpxuxxvsPWsVfswqD5pvMxazF4tu3HKDs8Vgm8KYYRW45XJh3xyfgbJLmU",
  "key22": "65pbXcCC6crNUWGpcdBVmwBQM5c4XB4AubxfHWkBUUkVviW4SRfa7fw4fdrTx9zgLTvtP8dd6kKYh6Hfc8jLpxVq",
  "key23": "4mNW1ThAw9sTHcpqFMb2y13nFqXYKSnY2YKFD5hrdgfdroZRstVntddbyCLWrVS1LfjnUg6wmQ54geJJKnpRcvc7",
  "key24": "4teM7RPsw9hRv3YPBhMLEdscd19vm8ii15z2H3x9MvqkBS9XWFxktNmteTAUZiK1qKmo1xxXq43PqiZ3fKzCDRf3",
  "key25": "43BopVQmErxRCDm1RYrdBbDbrk1ogUmqyQVWPAAq8cqSa7waP444xBg5cDr3wd28btk7vzmWHPrvdRittP1oacGQ",
  "key26": "35JmiQnoZ7YZodyzDgsP5H86RjqTucDFq9GLkFzfty5KtwUwgpm7hE5MDfH37sc425by5fWDY5vp8vo6deoXiuD3",
  "key27": "4LjcBfDn3Ew64cdUeQjGuAKGabgMzoBAo6DzU8bXPwBuyKii6y1vtAEjbCC2hcnQ1mNQo4NX4AU8C3mc8rNaoL6n",
  "key28": "2T5zYMNEoeHvbrwf6QDShyM1A3YT8whNw9sQEYgy6Syt5vtjqJrbKZ2ewugfoCYHvmAGE9kr4VNBdH75rzEjqXCh",
  "key29": "3FuY9iCMCbTP5xVqf3H6jZJUvt3zuySERh9Cbz9xiSf9jsZg7PQ2HfkHccQFewazitLWLqpPqeFqBFFgmrppS17J",
  "key30": "6381aYiFS1ac2LF5xDuA9BVbF5qvcPi8GW5Y8WELgQhGS69ruMyQST8jkhX1PKw8JNyQGKxXyNcGaqNPV8iMBpY6",
  "key31": "5g84xWrZSVxMWo4gCW5nVCDrYDnbB5q4MQmCuiU36bArjoUKfrkxs6CGsqdCYcWLXAR9aCgtdsyfFVYJVKy8cK3v",
  "key32": "3URo1HioqmzLdTjfCDpaxzWtWSNJyBaQ1w7gVgM41NTJMwGg2Yyo79Fp485x8x7BZQvSqvL48Xd9ND7y2RZXE91a",
  "key33": "6YqU4fTr4qQGjCoDBqvdbHv3m48zgWFUbwbeNHk5BTnyFEztpdLszUGZXwafVZkFR8XTxsen63ftSXcBfWufWGT",
  "key34": "2dKvjydWp6WehruY4fo33Nfotc7um5smXNpQv4s8BwJcbyKhad4eocdKTCAWCHa4bXLWaFhNfT2gbYeJna11QgFT",
  "key35": "5jPMiwuhWAPP9zZ4DUGShzWuGeKYyjDpPSCaGSK3N46HGFfHRoCi28qhBYZxCQ44h3XxY5wV1R6Uu2LcEfqXPBkz",
  "key36": "5v8TGSVcpMoh81FPJ19da7jRyTNzvRUSWQ3t5ywUkZuZNKonDd8BXzT1txouEzqdYpzHVW6xZHhSXXttweBAN1ch",
  "key37": "5a8SmnRmBn7W7mKnJiRCLfc2ARXAnZJV9yzePQGcuLn6ESPabXBWShpX2HB5Vm8ZbhycvXw5ezZmp7aDdzfto9ux",
  "key38": "4zaL3QVJuPPdZQh8XKFdGgMZgfxph1EHQqFaEN5rrpkJqeLR162ks8uU8EuD6R5pFoLMMrhqik29JDwvPEJrUCQX",
  "key39": "2geMMWagsFZFmtHWhWMmtJtmb6RG7gt28RsfUFyikUg1Fv38e9dTo6f6UgqwEgXYvJKSitXawdMMcgQGUnFKYCPn",
  "key40": "27aKtcbLN6BEGiUeAsbjPr9sjkqP8vrFCLn8oa8PGVqLq7owpNiCqevx141EVS9j5NjJqnwaGmpd7USdF1J6XwZf",
  "key41": "5ao3E7wDziqFWJy519e2sLJdvQ7uh6skhjbeTMHzLq5wcX5nZ7K4tawKLzd2ukmBqwdzW7yAtnPE6LBqnFiyQhA6"
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
