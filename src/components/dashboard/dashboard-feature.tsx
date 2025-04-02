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
    "3kt5DTrDnym2xbrwc9rjEZAqqp3CiWBHvGEKhbD575LxAagtVxCpfHfcDY5NePnqSVaHvLRmAmz7bsk17JjNMQAL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57LmrBpyVF8wFcrw8UBuZvBHHjcHSrBCGkYUB9CJMbSsaY5RdUjdT9hcv4v42a1JQtqMsqfuECx73E2eJz6QnaYD",
  "key1": "3R2bYkE7D6gxhPXLKW1HTLCvJU2C7NTbRU8WFwa59FHqfKzjPj3AqcBC3iDt8b2o4AEJ2G5PoNpDqrM9LRjCKyY9",
  "key2": "5vFmnzowQ7xhhfp7FkkXrGriHK5qSbm8f3KR7arUy2RCxF1B9NEUnrxRaPtTpaXigoJCzfCYBXP8oggVvuwziLn1",
  "key3": "46vviBqXgs7ZFzgoPV3fMo8tsV3f9VTfnaqeWocBNaxipU8fsUrf86BXJnyPiSiUAk1o4jg9mji8BvvMmcdTUHCa",
  "key4": "2ojvCEsBK6UmTLcQVc7JSa6RBf3rq7wpk36xLw6c5gbXKcSSAdLSFfY18SKnS5yfnw5Uc3q6HQXBMmBezTMYyi3T",
  "key5": "65LJqYQZH8fruN3eCaZjm6BTmWbUUsXNqweY5La1BzTmiYHM4EbJQDYZEib4PWmhdrAQ7rm8exXveja41eNqB2ms",
  "key6": "PuuK1kuzsnDMVLFErmxtwPBWHXZu43rdesXj7MPDC1wakVvDQ8g72zTwXb7F8AvNzEma32xAc9ipxdyiqpgLcPo",
  "key7": "2Z1WVZGWsGGa8ACD2sScbdY8CYggAHzAnd5ym5J7yn3aRM8W13ErhXgzeYqqVGUmrQUz2146uM6LdPeVwTMfQiiq",
  "key8": "iyQEZxcpQsj2Pgfyc9sLSqyo3yWuAJMQXhGwz3jBmaaLssPkuikQuQ8ZJTomqtE1ZnjetGYc6TXbUSxFAdybc9F",
  "key9": "2Wxun2uvhaX1g3WrMWK183YqavBMjkYXPnwxYKYKwViU6Cj8S3brPhaYvYJaEWr1F6eLXghrDbGfGn66vtUuSRkK",
  "key10": "3rCYAdNkbJESEDc1xnXCZcVYLXSoG5bor6j5u1nggKguwmcpH8tjAsJKcgbxspQ8CdV5MdaKsgvxfUoHH5QJEGFz",
  "key11": "2SkMt7v4YpxAQqhDZ1PGUFK3JDrVe3DAKL288LMZ1Wh1nkYqWRDMRNg8ECjNuTZoGGqBzeGBdj326DDJaoVp4Po9",
  "key12": "3ti3ufixrWjfdPM9Cr8pXgh1TRPK5cWR8cT7bMG4gHWBT92CJUYQCZmwxnr8VPhT8avYsn5195X2tnyp71zRzRjB",
  "key13": "4khUkPMc4TRyUVeP5MNKzjYHAgdydiHH9XsVF8QxoopZy6PTMCcQuih7BnfzQK8xNAASd63SQgG8mj7CUrTBZJs3",
  "key14": "3KMfbAGX7LNDrxEexFDvqej8tpjAa9AaYuETtGakiYaE1L8rUUnqiMZLxPVBDn7Btest2dpGyCpqeppFn5kX86d7",
  "key15": "HHBt5iqzELEhbFvTz7jSP8uuHwpnLL4usKU9Xq9MTjRmjuTuYojRhKDcZxPnoiWvjp3ahXXSDC3si1RCbLCvtZG",
  "key16": "31143oVtSJPq231Xat9Gu3sPJkdtFGorMRCnqFzbmG5PBNfcD5UKNFgxsz7pFQSGUgyvXRQzF4LarJjpjZb19cCW",
  "key17": "286ZBQ2nuJGFEbgXaCSAQq5ZeTzcurMWD5h9XHCPXJQSmY8hQZdiQ4bFXTYtuzdTPXnKkjBBzMse8ZQiXcGrZEkY",
  "key18": "28QjUAhcWDUFVqUVYmGaQzKUPVxCFaE9Ee76Cb2RLSBwtSmKvu1PFdkiEqFTUdCGYjxUNSQMW7JFViyjXhL6Vvro",
  "key19": "3mSDX5HbwDpzPjqSEYjTe8REBW82u6tg9enej86dyWzgizZGH8r7uY2cvJLjB9YHAzAwGd8nsjXy78iDXW8Gp9cP",
  "key20": "2eoh9zuugBaVEy9UWJYot8Pd2gWgHvQBkDJShvN86LaAC8cYqrpb78Z16JM9zQC1hv3HNe8efKhhMQYfLxS8v4fk",
  "key21": "44CZCPhckd2RzuC23tLJJnEejTsn8AZCvseFUzhBmDWaaj9YuZ7pEvnAicXivBP5Q4bkVfG6GQTy8m5bgvFUeLgx",
  "key22": "sCB1Dc9wTeefkhUNeBaZZurUfWhQCMXxKSv54AySGPGJTUtQ2xSB6MZGYRNdsXtFkzN11KH4hbtaL38sJnrTnw9",
  "key23": "25QGXp1zX1pMS84X41SVq5DjpcSF5PLcn89wLQwF5JpgTWnweAWhnCJqHmvLH37EPfAWvecvg92cHQTseZkpGX3B",
  "key24": "f2Ng84YGgYgbYwMozTuN8FbP6J2Aw1PSLk2BzWCcRTUH8D6xzEtauQCp7Te2Eb4h999FFsSJbdpGyMBTycW7ht1"
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
