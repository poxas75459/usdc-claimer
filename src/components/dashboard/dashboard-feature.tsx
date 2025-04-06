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
    "2XGqzEyL8TKnT1gyjoioZixHKgxXi3Fh5Br3mVvTo7XjD9nDHxBHsNjSdnYP5UTBPYfEAs7MpVBXATogZWaJkx5j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PD2pMhKs3EKDG9w39i5udwbhdmdwTZZMp5VVpxw71godC6QaxeL9uqNMqmAv4FGmngbHgyyKFpU3Xo5Va4uVHAu",
  "key1": "5pamTEJWXAG4CkMq6FNExdTtA77sgDXwgpijsH7Mu6Tc5d1H5LZhfBcCt2TY8NtoP3p8SrcznUWxeV3ooK6v8Wh5",
  "key2": "4JoqZnsbLhLATMdeQki2QQk59ma5Wkd13zKnqmgeSLB3xKN9py8HctNEKjBJbnRcrjX9QxWYEUAHcmN2MTahUELX",
  "key3": "5mSQZsZhdftGJZcbmHyfFx37gEzXDCUibN16rmZgG7qTerqWa2FEQrWoN5THhaDEMczr2HSAKHJpEtg1ahnb4yug",
  "key4": "2zcxiNsiqiS1TVdEGfssiRTBnv6yAvCQoXjA4tpuLWY4hT4ugQS6VWpRimjBYKoaiGwuwykB2gCS3aYqCE4GWTGF",
  "key5": "3pupGvfoa1vnVGUpMDktdPrhzAMRL8hgKzLJ37xpzyVgfjP4j9afwq7XJjC4qbzbd23XhUke2vPpwSpk5kCc6TBM",
  "key6": "2SwydpAMqp2qGXFj79wkEo9R8NxBiVCP348Ywo7svcoeirJfxdbtHb3ByR3gT2PNigXkT9byBH7ntmHhKW8TYFEf",
  "key7": "6581kw65ZoMP7avne4j2J5evqRdx2PtPq2kVxUjHHtaxK2AeJxzBUzfay1ykJwVzSCfFkMmHopMmo93gt73uPa2B",
  "key8": "3veStzEo1bCS7DSLiYKyNuGD4NGZzL7ZNbZzPoqS4MepQdZYXq6Yo7UG7maChuiqikm72aENo4FJLicKR6KHpDdS",
  "key9": "2QRRZKFc8wqmVUaCrrn5sG9GYHDZ82nspXPyXRdQ3mYfcAQX6siKiouA7BWhjRSTEYeSX2YcraV8Qfv8mN2R11bB",
  "key10": "2DWFqs2BULZ98KrRnCXR6VoXSzbWNhQ9r9jSn2ePzrut4LBrZbrpTmPmsZZVGYvcc8U82PGRDx67YZuRozJVLnjZ",
  "key11": "3UPYMWANoXP5qi58BYJEsVVXitMVJbBUuhm1bXnhRXfXqxLY4xFB41RtnVqz2ZDa6Djb4DqUaJ7iofx8yEWwiYwB",
  "key12": "4Ne6qzbRufoS5tjh1zAJtKgkLhYiwtKT5AXVDHRSxeixxev4qz5Dhzvg9dEBxn6qXf1jAn93hvvSYLFqNjHAwnmH",
  "key13": "21RvnZ6FEZdhPxWjkr4EkS89KihaxRPhLRbBuqHmLje6YptxrMhN2iFiDXMWfx7232DuE1USrt16UrmZexfVcn3a",
  "key14": "3DPanxHsHqNNTiu8ViCYHWTG8zZnZeHJwPgpRyoJcT6KJ4JAgFTsPJRBpLj8sMYTLe8r6YSJW9U78FfQ64cGk1Zq",
  "key15": "53V2eVxr9rJJpq3peMXsfF2NUap92UuG2QE99KVmjnGTFfaEbMN286fnxX1asMW4Nr1aDtXMGF7hy4Fqz16uBCL8",
  "key16": "4JZZLbipHnw8YeasWrxpqeWRxBAFRv4k86gYBYW4BTTcnaRV7BBKXQsYeSuhQC87vY1Hkde3r6ciSQ31be1pQnox",
  "key17": "2uJaAS67rvHk9QLQyqwVpyVcyhwsgo4JqcfUpHEWDdBApzBb5GtxeSWYeUWdAkvuLcQAGBqLZy94UQJV12WEyjLW",
  "key18": "5GevSgpwr5FaoKK6MEM6qBmDx3VH86YFiCrns3oM4rAAgTecp5MNWGS7vFLv7i7ZZKXH8ptPfiYDmkGNXRj1YQ24",
  "key19": "5T464gUsKbREk8bm1fcB4bSyyKxnpUsmVwqkafgwnwPAhWb71rc3Ezpm5FSgSCL4K938hb5SKhuDPiZZ9BJBBAJV",
  "key20": "4ef1xofPjYqRvby5ZPs9GUTchu6TtZuXWjZU2XVjzgDsNG9yLUonWt6CiW3Bpfj4XVKi7rvbwbTKTu5VxuJHKwaL",
  "key21": "5WVcJFWocdRwPmH34Z8DCaGV6XgbHDU1HeyYPx5bWTjEfXiCMBMwDrc7VLwikj49ukmbgvCzCvuUA3GTHivLaRL5",
  "key22": "3SNZxKkXyxGXZkcFRJSeQnwp3xELEFLNSSDJsP4MiKZ1hHxasKJqGHmQ9nh8rNwNjbhaYJ25acmyr9zkxvd5TxZb",
  "key23": "2DnayWtnequ8Ceeqajow3tqpbCVXKKGaG9trzYTHzL4XxUZqTJeGwXWsjy6CYH7uLhZGdBohBjiDZj4ej4YbzV5U",
  "key24": "3qQc3CAd9NWTJhBDfKDzg2pnNbgBDM485VVHLofyyVMnxXMJG5bXydcBk5Ufe2QUwtcnSS37Bh49PqzYfFJCAMmW",
  "key25": "27NfUW8e5q5Gbhf6ttRqYd3KnUoZMx6eafzFpk9ZxBTADrYztcnmXQxEpPMF4k1pdVnzMgvbpArczdCQ2qbRkxTk",
  "key26": "3xXuSn4er2LMFXMzpXmUPj1TRkXq3Up9iJqP1Axbp3zfnSDVnAGRnhKHQaGrT2y3CR4iDFmgiR3JUhV4WFwVUxJ1",
  "key27": "42msL6d6csLBNXCZEQaHQXTXykwJrb9WuLnHy3fzv3Qa7fDJTqdifiUyFLjMoNtkBsrxhWuYvfd3FEGm4dxFLVZr",
  "key28": "4TkLeVhN2ZZXnPTqojgoriES7o3mr4L8kR96cTfo8DaZwU6T8K48TMLMC5Q7ovMHNrZcEJyy1ZCybQesMcG4FhXg",
  "key29": "3MMz1ykTtQCdtaSdc5te75WvoGXdJomxvmqd5BFfLF8n87rbGrPYRuHHEdAbMMJvSdBDwD1MwRBxuLAWE64jafgd"
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
