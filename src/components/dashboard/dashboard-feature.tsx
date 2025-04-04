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
    "qzpnD2kACMLkZHCzBwDBz2dKFBXvtoqH1bczraY7pqh6KQpMreS9dVv4YeKuGbd7g4XJm2jTKRNMEz4FijCpYvM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56PbdPYQXsJg1X7V7C5fDGLPohVrvsxVBn3B5VEbyFJY6mJRFGNw69SDqnPw5zNX3a1HeTuhfyHMSaLBPpbVNAQ8",
  "key1": "4Uo2EX9pNUmnZcmTjdi7Hj4LwWDCGEBzCoLAad6jhJE4LhTiTGWcuJFGzUesdfY8jCCxVmhV7VDjihwv8BRpH87j",
  "key2": "3875TnSDoJoH1PrAoZtgMH9M27zYDccden9sMcCv5rpSSnmda6qcS9wbSXfvi3FFJp52Y6c1VJBhHKCjcGkDYXhE",
  "key3": "5ZWKEGRZibaLVXc5W2DAph8QxegX1qs4qXuhXffNApx1AUYxPNA8L4iAqUHoRf3gkq3ezfL8VadSwn5hCFL4NZkF",
  "key4": "4UF2RbypBc6BSLN6ULw6TAptZ7f4Y26Uk1GUjXQJKgx5ywGTgipZEYcSmhrjYbF6gaCgcjpt5x2u6sNzaoc8tpZ7",
  "key5": "2znNa5scb3pwywbpATZeuZBCm47RhKWPGu8uwRJrwokZEb2msvRcD7nZevzbFDtmTfAHvi6aNBEvm5gVz644AXnn",
  "key6": "3W24i8KSyaBRACjGepwrYNpcboDnArkg7NEq2wxecGVKyaAa4rfLUdQ6VnwfBfBG19wpkt95LZoAekjby4s6uPiK",
  "key7": "5cbuEKiZ4mQwAM5fX76GfswPt41E3C8xTc8zubp56ibQCH7AyXKT9MCxCFsopd8ksPGHncoWc7AS2vTbMkUufGTh",
  "key8": "2eqLsXmuTKB8Gi2QS7WQqaLXzkszrbtoe9HewcdYLdCQoouUr9MU3Cgn1PfqJ1vyhQoDQwg8RsmWjYCyFVgc8yXR",
  "key9": "2faVUrz7zn3SUaw2v31Aiw5ksUCJtAYnzpY5dNbeJdipSaQQTqGTshfhAeDp2Sr9tzyRBeNWxEEUGsbf9DTgYbNq",
  "key10": "49tVxMpMgwET3M2E9UNfy11yzbG9UN5MHTY7ReVaHd5dMn77a8L6gjts8zUQeYn6G11XipQfWkaJBA3gNe6owkgz",
  "key11": "4bVUTwQHj5H9eeXJakTTET5CUKRPRStgriL4kQkrpLx6xB8oWP5JN76SbVzAvzkEFkFcj3PWJtMRwbCi58FBhqVw",
  "key12": "KdDX8uP2QgUGskMNyaB9uWKxJBidGCYC3cMGg62b5SdyWkZPoKHzqtnk97QgbHYh4bh6ALRybLyMeaorMTXZdib",
  "key13": "26NHkun1v4B8D7Ma2FpKNDyHLYnP2pyUJsKzvmFXDwciV5DaaoBN15LMtwQFJb9yyd5YEex3q7TnbEF4NznC4szV",
  "key14": "4H8rQyW2GoEZmPdgbjYyU6aNJmJ3WmmG9az2fXeUvRVnr74rZ5c6YKU3qKuAcP8ceUQ6ukZU9oqQrQH2wivuYDPA",
  "key15": "5WCtXskx5MZq2sM74W3iyuCwnAkh44GkyGdgATyYJK7uGpNaiN3vgmeXEwb3gA6QRShttRqtz3ergEPTW9j6NE2Y",
  "key16": "5TRM4oC3Ao4Q364UjkkkJVXXgwBDxEQq26PnYd3JeuEdxbHTLnNTxpYvvRME2D3TuNN3dxwUwUHHe5qPX89yvTS9",
  "key17": "SzWkdraFgbPaXJ5D27112LYBR6NmAwx3G1GCpVVqukK41ZZXdsfz4pDFEicziMxztUyuGQXvbmdbZxxXKi8zjRv",
  "key18": "2xGcxwvzFHRGLcjtLbN1omTmoR7h2PBiPBdofaiBeByD79jAr63NP2mVQL6c4pUspuJeJGh8vvBYPGHNy7DeY7RK",
  "key19": "4By3g6E45kd4hGAgg5By1SLUNX3Dnh4DBLujBEP2cFZYHsrumCtAoXzmgqqyXDXzzeUBRF9R1reoiXyVvVhE7enj",
  "key20": "3mDcMNnFj33AVBbWGoJfNwXYSmP2ssWc8iGo5iNfVu7doEZZLjK2FDBbQrWMtmJDkc6P8jGV4hn9NxbxMPExNWCs",
  "key21": "5Bcn5abFGpWHmYb33ZZDi7N61wVWYRxSxamezFhQgtCmWEwQPQHM5vLF3hMFp4cC1yZiJFHsGJU195kEnvsMutWV",
  "key22": "yBs78mQHMpDkJGAfs34oAiCdoKSbym4LYBCDkDBq2LJi1k44cB88vxfq74RvQAEz9oGQdYnsVVtGupWyxsJb3Bu",
  "key23": "qiirzXkdBiG7NwNkanef7xs8GKJYCEYox5E31u1gu7Xe7ddH3o4MupMggKq23NGMiPme19Fbya2yxh3vgH4CPqU",
  "key24": "2Z4USP54i44qzavW7bGCUvQtara879dxWimMf5GXDPcjeCdgVZY9TUDJuVXzd9k79J5Wd5WCoUR8XwKVDjJHVn2q",
  "key25": "2j3qSEYnRR1tmd88xHjUAaobLiXWg9UbEL3CxY834hbqWyFavwrL7nUTtxkrDdC6LH68k1Jvhewf84uxSG6pL477",
  "key26": "3rGpgVjULVLwnzjhPBdx2vgAFEJTmGJuHsaUCDFGbepQ6HJCHEHo83tsRVCkjp243iTcNCnouEvr3LE18Aj5KmuY",
  "key27": "2ru35XS59gUuAR1PVuqvi62WmRvmfG2a3QnLck5SBoMbvAzEKRXJ4HXycbuqXmUkDgUELhbe6iuhKTtHFvp7Hf6F",
  "key28": "54PFanbznTtLbUcWMiCWRYySX1A84ZYpKQjnq1wx3uvJnmzUdGxh3ZFeamqHKMv1c9MZwHNFP7BR7jxATcyWbYmt",
  "key29": "4onjMaXJTgfp8T22htpiDTdFfJj2RzVhDuSyhm9HnpkPdYJ7dWp5MK19kVdPJ4fe9tTysuQHwtCm3Z2ZbdR5uR6t",
  "key30": "59xeE2E8Y2X3zUUaxRsp9TEHFn2iBHaZPLph2rdEo7dyhqrx2enh6HGgXQVYcotjY443z6ZGNzSmBw1TdrxECZcq",
  "key31": "3pev49SnDGFaa4UVP9QpzNDTiD6rk4rTPBj8HgF22Q5kW6hGwjPgeZCo6keqYjXQ9ow5XEQ2eashFbBoMjozorsE",
  "key32": "56LsaGsA9BSCnzMLAh7oRgzLyZue23sU2p2fhV9xXbybiXJeDAsa57RQkcfKK5vFxzgVQ9JgaL1PYDMR94QybDXc",
  "key33": "3FZ7h9hoDtAdqki19skyPnnXc77R9jytMVZdw6cJ4uKdyVxri3mL8YnJpZ5WNrcyWDQAXns6fQfbBDK44MrvWeri",
  "key34": "47XHUCUQUc7Y5MBWroieV4JezcJmc5vGe5rABM12xZKh42g8faYxiMxaaQRD67YBDPRSDtBaEL2R2aKCh2kEZzKJ",
  "key35": "4AzYQbvRQ5DKcUT5BbHSGzem4FTLmhV5GCnB82ZZVrGu8hHUueSJfVwzT7Up57Jmv7PZQHvaWVbWZUcJkEF5pbJN",
  "key36": "3AQnfoF3LTSx66NktTwfRJxM6mForqcvWjqTwxXz4LWuPdJEKY8N9K6jURY8FKfXcx67iEj8yqGkEwdi1boLdj5d"
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
