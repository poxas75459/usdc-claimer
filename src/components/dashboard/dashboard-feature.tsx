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
    "TKFwH4bsY57yjQw2wbuafua9HJyxjaYKQ6VRiwffrtKffU6vG2ndVoBHHRRx2owSbijqJC3KxZ1Q7QLWfJVp3nF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MkcqdZMDVp9hPbj67xbFuBHKB93PLozvqDUzaPUF3PWNgEcv8enHZopMdSgS4wcK4kCY7AuNn9yTYVmYZ3M6tFm",
  "key1": "3ru8qHQZFhMWKPZxth4b9XTXNm4qW78vJZZy4mqrPFNbd5mJ6mrnQuFLnaYQcpYDvx8MMVmxn4NAtbnBHk5G6yuq",
  "key2": "3AfwnX2KETSkpbaqYnEhtCwC9Fy7XKLj1AxFBuoK32XtDj84HKMmEgQaHSejRFo69pMMBex8DeKAd9pdjxG6CNAm",
  "key3": "41zFoBaFftExQZCwD1qWWasW39wvgPwJAkFmBsdPEJmMbM4XN4Bj21UmTXAgJnNZYyjzXiRtsgJ563qeW8sgv4KT",
  "key4": "5Tjvj4wnVNHJdFvLMR8p54wLpUW7BxX4JLm7cWf6EbexiugkX61Cr3ikvkWFeEBhJ5nPANhV6pWiD6eMzc7bo1i6",
  "key5": "4TckPEfJF8M9FPq8EzrFrcHZchymW4tmAu1vdVSa7JezKNeSmXdKXCYYDueG8oqwjhzQtWKedKNPChjmELhYbm47",
  "key6": "XYwgaWhPEfWWhSc3vKuRkQu7KLZXXMwkPgFj53EGQthX4iT2nNsHHX1cMPzF7ajD6QYBHf6GjMb1Ft8Ae8d6Ev3",
  "key7": "3Q9EWvjLiXb6LvmPKMDbDktP2p3ZaC2p7PuU7WPG1btKMk7L2LxYWio7FNTHYhHGUXJ3KxMqar9E6fLtkvPgVema",
  "key8": "31ULuy4mKHVgiGnTqTkVLSPqM92fZQh4D3h38Wv2kumdZMpecG6tiK59giES5yMj3poRXeoX5rJpsa47pSsecP5e",
  "key9": "4Hu4jQPEjpdK8aBu3YyZr9K6BmdYAABRrswDefUdHckYiVCuNhorn589PDK6vdTGe3UPmbZyhVtRGXMzvYMJueBW",
  "key10": "3NQE1rNk7eevzH9h6PR7ihx9BrthB7k6HAEP6yckB3vwJVqcJo34H7AUAYK6qqHtoZcKdtMiZKf9NYHAtEyNHfkS",
  "key11": "2nVXNodEQckSYZN6idf4rT8rgCnrB1Tqx2MVMwXwzpj21KmZz4jAzhvtD53zYEDHgwWW288W4WcQdzmwCaDGp24S",
  "key12": "o3VFoF5DWzHYibWfZ6yn93PiX6385RFiLcijr1nr35NfgMxcTyyXTyzqidePajyXXngAXd9qpFzNrBdZmnAa1HB",
  "key13": "4SJ9fY93Gav2oJxqGkk9EwHrxqtrnGN2QzRAZ9SJd7ufNefw3or73piE29f9APL9Xc1DrrgsLiJrVwoJaZmvfcT6",
  "key14": "2o2fn7DBsS7styciBGxViUqecJGhUt9Xy45Lib1T1i6MB4iPvnVGKcjz5QEu3rAX9sNUQZebecyKKFEjsjFFYoFU",
  "key15": "2K9MgZmkpdZYw4H4MnZzgSrDWShgXy5Brm9iJhG3FtBkkpgT1wYYi8CQSATHfqWYj1gyz86wRw86PLQQGE2qpmW5",
  "key16": "52Cq7oS5iMzWSWjcmv4ncWFCRhVjS4LzF9hhgLmohkGZ1YwuRFJ7mMd5LsBajK7k5jEjSRwPAhzDxVSJKT7xXdVw",
  "key17": "5HzFbq28rrdWhJ7wkziyi8rzLDHzPLdxAaKHf6Ayzxkt9aEi8Te6wsJVX6yUtENzTVkuk2VVYfH4uxKWchAMYZXL",
  "key18": "4Pp8558yiAdgNuuRwW3mmaPXRAEJpFxh326cfTY95MhxaNmbKvVotR2LCrgwu6RBto9BXRvBxYXpqpe7B6gfNTTL",
  "key19": "31zTFaz182V3AWmYFU5uh8XQYJ61JuqouTu7y3bYftULGYurEJitiLg1fxY6A4NRhmso9B6tqxTnJ6hB2mHA68Gm",
  "key20": "3ZtziEHiVXCsf9J65PxJiJLtNpXT8SRvLHxXNJDZVdXeEwBfK8rEwnVp1MxdsxBDSJE6uff6rkHebteN5X2nKKKT",
  "key21": "4MYTzrRt6w7iUdKXTuLXz2Y7r7UgA1NdfNuBnAUYuioqfYMWDdz9V4YaoE8dsBKRyPpVwXQVBsehCr91i8av2aaz",
  "key22": "4SGxNJ88kfBADLmSHyT1VV3DRSvxDZKCgeb95J4oq56JvNCir4uQBiQZ8AHATCZDaeTM3JrtyD3GFn9dHGV2oMoe",
  "key23": "46Sjr6uQZ6NwBtK2fx4ZLoshZ6tb45uAqMMEpYUe9RuebYZ1hZTCmLAT32QcXHthYKafX666UGE1oom8XiN4eojE",
  "key24": "54zBubZAKcoV1beKvQWwjhK7q8esM2JcJr7vFdNpsCLzdhffh6CySobt3oFQoZMPz7kHdng4TpWxeYB3VJ3FgjJK",
  "key25": "5oNNAXGgycyiMMw5HzbVBovMqokaU2GjvKZNhheim4dxYsVUcKrJPLGQCTTVnuBMwTF78Z4PGgUgHZqpW2HzgvP8"
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
