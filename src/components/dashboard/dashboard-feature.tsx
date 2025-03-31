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
    "2tqETZEF84h3be7CJZakGDWMc1BZRJVmGgRb5LM9Gft6nVhh84khqRjyk27YbjLVbqx8Ut4pgxkzjNUKbQngzfo9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "375bqgMRDRrMuVYvSHP3uHywXs8av1mBAGg9wv6w48U7vrU7Ex1jnwMHCdYmZd2W7ZjqXJzCDrLj59WJ9FbgXTgp",
  "key1": "3iC4vdmWbZfMapzKaEiDPDn58a7B8PYKLu2xPWG6s2qm4pBWPkT1Tbgyhq74UoLBBo2c8FTaoSPyKU8DMWW8qKjL",
  "key2": "AodxbRNSihUA5EqUec6X7pL1Xu65vXDgrYgVhvcGMjBpvTD1BL7XDV2PbYvBZBMxdNCNdfWmvmvHaJqHRDVK3Lr",
  "key3": "2n3P5KGSLtWPagikHqqFUeuLh1qqgGBPbprNoNtuj2dXYTmvJ28RLet2jDmNqj8HZTLJ86wojktWrccTsrYuyvQM",
  "key4": "2zXYHgqmNgmgn1p1vBdMWuEGwrMSMt7eJvyz4nizgqtWwoBtXJtSjU1U4pMj96GiwBbnBkJeotVdqRLqH8zKx1ch",
  "key5": "2Y5VeS4bD5BfGtJc2w2RMYGkfhDQKm4WWMSWBqrDd1iJza2YFi8VfMfDFyYW3G9HuNAGrQkcNEFxuQv5pruTZSx5",
  "key6": "3pUDkaat72WMikogZcXGG7tfWYaYMBVAnjeobmakq5hmDi7t7Dre7uhg77tpe5tfpzD8x7RqR7EJv3qt7so9atLH",
  "key7": "3CHxuyct5d9tZMyBpf2rmaokmF1f1PzP3Vifc1RsetHTtvLzLbLh12ihUcF9rusgNWaowpMFCYbEPYKNKWXJ7cxZ",
  "key8": "veYRRLkbEN8pPdfNqqXp2JPvqcJsqu3rVrLymJFozWKpaZxsA4edNR6FKn5ifYpinRpCr9nK6uamig5zBmGs8F6",
  "key9": "51RQsNSwHJEjVk2pQ3df3jxq5C9zGTZiGc9gspNMSqmiQHAVthuYHgobh7qTiKK2g7wi2fzWTfiXfHUCw8G6Co7S",
  "key10": "22yoXvnk8dEMkuCtMAh3MzdykT9vzV1c9QT4rcTqUTQareurEcBn1HdVum6FYU86ubiGmJ5vdsJA6JEGDVEksb9q",
  "key11": "2MmZqkNDvpptw57iZRjBMhoDrhJxCdPX9oVXX7csZ73deUbStjf4jrt5Kz8WrQwMC8xqGXmZmadFjooHxuRbBAR8",
  "key12": "AJjp4N5njymBsmUDzh15kipTUEtofZaGBP4yUygK4sNe9xy4HaoofuwWLwa5K41JAgRi5L33KYauFN7CpYan2vJ",
  "key13": "2SsPKDoqBzR1KMdim7A3WyTVK7V5QzapgstbaPVbvjCjpNHWaZacf8n2wwjGNH8WMdjkKFi3bNrgeAbqjKvjEm2N",
  "key14": "4gX2ayv2rbVSMDvBXSZQwaNAgWa9NggBqgqZh7qtXDTthS5yMBJxkKyeZbEYK2myu6RPfwvWjDb6bNigfKH9PjEb",
  "key15": "42yAfeoXyeAdXiKs8zS3ZZJ6G6vqPzk3UB46rzMPSaPDcPiJofJPyAwHY1iQwcTcSuvRdz4iUZwoDaz3hRsB3AE",
  "key16": "5WtJfLJSQGDFqub5pAdUb8Ct7f1DRrdJJqe2teSm16f4V2qjkmaEprgcqbzuMCA36coBhZ4b6DLBLK5y6SQVn9xu",
  "key17": "nQ4PpgUFCu1M3musSaDnUBfuYgSp2hRj1RfEJMni1srYww4u6jv3QojSERwk1bR7kcNrRP95hKQkaiwN7SegSBL",
  "key18": "A6ZjA4wfAbF3HdYQPMDGwqZT2yqGppUNh7vwNquLiJoj2oRREYMTd2HAGc31jWrm6bGdq7bx9YU4FhN3cKqJq2Q",
  "key19": "4GemVmniPo9A3y6MJgwL36wC2TTCmm3h8drsQeyAoa4kfho7bEXgg2Fj1ot1hLu3P4hau3baJ3nCfHp9vthrVMJv",
  "key20": "2vgjbjoKiccYqjzsoXBdQAWRtP1mvDLfoxQsZRvQZU38hRGcwMgMziyGTD33SaFvFTzjqBki6BH4V1bvbamH8beu",
  "key21": "5A8HaDTgm4chzMKdwjiT4DTB4tKrsLxsC6oSw3GVuyfYwMtjsSZ7ajiCFHB3UC1xZy7JksvCaXro1nfmxb3RTeC6",
  "key22": "2EfjLE7aVdYJLMbBAEkW3j23v5hBxDqu6N5yJLTtskyt71YhMgZ8g1xmeafGNVSyjgh6ffi4VpYMMafunXgY7xY7",
  "key23": "5SJ21xZZfn8WYXxLbmCxY1eZFLL3kko31tznjY65Q3sPV76HQyhD6M5tanayDVFBGVsnTUBvAr2vdLJzxr7s5rkd",
  "key24": "28Jk9cyXbwmNMj7Gg5kB6JuEHp9x5W1qXva6tRi1Bp3QBdYhtmstbMvLtjsJWfnr8fGD3ju7mTqDwXoqEuLZaEYh",
  "key25": "2bXBqUxNdR4q5HF9qeNzTCPKY1rsGd1biUtoiafDyMNAYi4KAQdJQA69uTUQag8Aidp5YJotDnTwhutzibvtzKhy",
  "key26": "wnfwDgf1xFS3wHLQ3SmjVMePpz6DiCEaGXKahUjXXTD9uZa8Tw5Dsb8rvHvN68mFxZpRtRLRP6DtkQ4UwkpYb6p",
  "key27": "6XRBNswj7JJuZ1kd9BSFRJCsGqEiuNfi25V1mkUmP5DuMsyhVNxm3GofkvBD1mkrp83NXPan7y9cNgrs1JVHg3P",
  "key28": "2ApR9TsQGpLS4K6Q5qDj5C9pTF2wZFHWtVhUFanF7RZ8bx6UvPRf4tgJ5zq8aM8Y53d7bG9A6Ex69G6YRq67BYnw",
  "key29": "3ReFZUswyyjPkkPoxyE7BBaZ3JaeCZgYict28d1ppEtyUxVTArP2GrMfXXVut5DzA6Hxep5YTokXFVY2NubBJeF2",
  "key30": "5UvprGKNrGvCGh7zmT2R37q1ixe4p2pCy6DDhW3aYzqpgHZYphp1ekxgxRNgYMPiZdv82mXuhf2SzubENL6JuFNy",
  "key31": "2t46g1BbBenXdLS32cCfXoTPZrX5iLK17v8MjySS3j66KxeYnP19Q9oFBPCLijFVZN9U1tCpQbnJNQgHdF4bz2Z4",
  "key32": "4aebAoH8PXa7aUgWDdCRUkGTQozCK211WDqMGw9YKVPTnK9LhzFpF9oBPCttFbSHxeuKDvF1MMp4Tm54VSQ4di3k",
  "key33": "3kXnjykBdsXzLWWAbNUH4VtZQW7SJCCJp2HR45DaL8TW6YhGgwpjiGfYgrLVfJbzqTFxTUJfRVkrCeUK4FzPFrz3"
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
