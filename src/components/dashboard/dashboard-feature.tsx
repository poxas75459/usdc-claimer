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
    "21GahcG9zoKJDt8jve8QH8JGGVv75hNCsTwhbRsHz4cEDyB9rcmdgFqFDtC9WoBA4TeKMQKarNjUWd7vPtF7FJPa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E8x9YUcAGQ4e1aajyvFr47HRNu7uMTsdY7nD57ZT19RGZ1nyPpsL9YgNwjWBTomGNLc9qGzfSRWgA9etLCP4fPd",
  "key1": "5JkGfDTsP2tNmrdiJYjqCpx3PFGfGooiTCKd5NvYFJy96quyzGGjoQS6YbCy9eNTUz9tKUjovUKTRUxAonxsUFRz",
  "key2": "5TPrtUq4oqGTjBveieL1gKqeoA1XbfzEvY5Q6XJueS8bV98YMYmS9qpcuGKZVAgo1VR3sY24aJWi9vG35QZyh1mr",
  "key3": "61yFcqYFJsKtN4AUP31rZ9LMdUV8TmMRgCsXUDh7oetN2UtqJDGoxuhpSETyNCV5WRbUss2SZLascdC9knmkEPJf",
  "key4": "3JfGN98bGuDRpDkJc5E1GDq2gRt9x3kfZAnuZ7v6T8LKAysRknbb6yw3BKXmo4G2qwuB8zRh9U9odwdb5ucHWGvk",
  "key5": "3LcfEr5mNfzf6dtdiM1SaHCXA4L6j2PnPKcQ4J5YKVAkq3QGxo8NWy9DSXke6Dto8CL4Y29iRRQSbc2K4VSZTpw3",
  "key6": "2EDeKSeowZG312PFUb8Aq1JJBWdcLBMpzjHqxTyYgb4CgqxKRf5yZf2U5q7zqYND4byXQEJWq4LkKVUEyMECjhxV",
  "key7": "5AAXaTdDbwwk7vf44Yg58WgnAA8yC7gEZXxos259UqrLV4swJQpW9W36Sj25gwXwwypn8maJ7rGCFCz8mBhsYtts",
  "key8": "5ZoNxQu6Yg3MZSeDD9Vxwosbb9TNZzrEwua4SCcoPESuvr793n69Rmp3kmCt5o9zmtrLw9Y3FruW5pryyZGvEZqr",
  "key9": "xDpfZDjpuoM938eWqDSQegNXQRjyjheeq6Q5uWsA9KoL1gFsgYh6C1vZftzqoLdkVdeop2yqT9vGU7RJ6yiRrB9",
  "key10": "5FRKbMEM18pEvALynKCgQpepGFyYc8rBY88SXULRt38wFE2hCgcmWwHGWGxfkUNnjvqwsQb8uNqLJusTGf7j5oNj",
  "key11": "5dq7sRtV4u9TcEtqp9dL8AfB9v6XrkWr4At5jxd4c5MM8qez9oYgnCu4vWT8vgeK4PoN7gab1rKBuZmfneVCwsdo",
  "key12": "3JawThPd6GngNGotTWi1PKvnk1EKYaegke8JMkhmBMP3X842DocJKhaugnrSUYxY45f5Z4Vpt4SbSVb5V8JNdWCG",
  "key13": "72odur78QtnFDHNwQGnpHS4DRdrUi8e4oHEpwCogMYqkFseWERFyVKbzUFJUovavkRuMbE64hMkA8nvjji8eYab",
  "key14": "3sMqUhyxwoWeFiR2SK1xswrx3V72NzZwtzySreXgtXfrNwodpxwvk22ePGeyitbsN5ksDnjuGFjM4CUuongxvzig",
  "key15": "5WbkyuEzsuukRXzTuyCc39Ca4E78ikstFNVm51Pbixoj9Dq6o3SJKnvcJn4XLPtndKoMueCpg5GTBP4zVozyKvRh",
  "key16": "FWAJkrvNCWLUYn7z7GPC8dmajzknYzQXQs5EqwZv7yhvMwyJe1bBoX1duAH1S4sBbwaYBWwhuxBnASEHBevopmz",
  "key17": "3MxfzWSGYtieu5vh5J5Zm2HGGe8hXrWQ7MwCgsrdX6rxmdLxDZhKC4PUocadXRAKJkhYQsAWjeDMozbsJuPnKLCq",
  "key18": "2EurTMdSsBHn5ckTSuVE3xLvCLjsFDVNBDjXZ6rkusorxxfTnmbx1rRDJyfnsqFss8h8bgbom8Z8PTmisD6uK6s8",
  "key19": "4rDtmgGdTzuGpQmpmnC44KaCZWyJLXk1ZsE1s1edVrgLxDGWwDaxdrpHdob9rymeeUxaTL4vyu4hY94dmBPuPTi6",
  "key20": "5HrRnafmXLhVrxbJA3TBqSkmU4aMwCtEksc48VqQ5X7BpartFGiy67gg7JY1D2SXySS4nHtGTJYYjAeAWFSNg5XB",
  "key21": "25MySaA62tajMGdeZh1tQurX6rrBACyxMdhjjZ8D2ioYdZ9KV6cJZhsnmoK4hSuLQ9GTWEz2uUX3EyBzdbadDhDG",
  "key22": "325habKNTwz8iKMSnmWdmwV8oSyCnBnohzCyCEiJFKJsK3PPaZZxgRiHr6mgaXiidSmUPQCQCwPi8UMAKKBLRZHb",
  "key23": "2G2dnnt6jo6iPpZAUALaq22Rs4BAE4bCdCAo5izj5gfbzwj8F2RcK8huURumznumgWwpRhjdG5qaU6JbB2akbjfF",
  "key24": "3N3Aum6QXC5Tn2dUq6otVYoCabybcZxBbEfDr8ue6AdPjBr2RBQLbEe9ZmoaEh2UJuBDnb1hZUBSCph8tfUmkTmF",
  "key25": "5Mstff451FZiUh7W6Aepqv22LXFQY2M8jjUdUdZLaPktBxo7sPr114iEBLHCuZdmYFKePBL4PGHfz4pEq7GWmTnU",
  "key26": "4DxmkYW7Td21GB9JoyWkCZdCXEV4YuKMhmiRC64H3PnvCaNH9kG5CPma6kL4SANKzmCxmSspQckk4s3sFDVhtxeT",
  "key27": "36SRrNpmopH6ieJXFgqJyaB3xpNHEWNFTGKUCiEKQmD2Yt7pusJj5h7xoWh2FEMdnQLGt2iy4EeBpKmSfdHDsiZn",
  "key28": "3H5i2NdAo5CKxLikDuxEjizx9QVWeZeQui73GQRaHd8JpWiKS8iMBhufXbiFUVvMbKgoXEkVBP1P9oH5K9CCge7K",
  "key29": "3BWkmxPyNNsr28o7kcbrEJoximAwd7kkBcBSYPSTJx9ADhcGqWAg9UsYsNxPTVtnNEHiF8Hd6fEosRPGup4Wts8D",
  "key30": "2iWqNWiRb2R4azaWxsVS3TXwcfGbkXP2mhu1679qs5PJmVepgCCSPkw5JLJWVno5QBfBjqGrVTn6fn2kUt6rKozW"
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
