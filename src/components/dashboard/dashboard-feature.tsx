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
    "2rvAvXsg3rugoFCWGo9MtgsyLUQgKnt92xwGxyb8aY8QP3QUrv2WNM73uSnJixupDXM2c8N3nAsAWcPiT8JJFLfZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ygLmAmykSZmDbcJ6JXk3HLz5wkYmaJayNDuJGFYCM6nao5RxaJRcSiqVtjct89oMzUBRQXFB2zDh5YtynLQwxaA",
  "key1": "2ELUfgeJHydyjAmzphiFe9tDL3u4PJSXHVVV5u3Wg6cMZe2iTr9kbaAeWYhrVFnEqZR9FdiZZVEpPBaLaddirUU2",
  "key2": "AdJ7dxaA4A9c4EQAdbHNE4pgeGaBmLfgSPWFUfmU12o73cvMgxYDRHUfFr4oQyuq1wtwCDraJEAqpT26gaB89JH",
  "key3": "4SWWnSUiTMueRF87KbR16hYZdDeeq7bKQGWA4Urh2JqYSZywyTXDySTrzTM2TDu1ydRqqfpSGYQwCNihz5vKuL1K",
  "key4": "5jqY8k4pXByewAVV1ttpSKsPewnuWVJySJSyEzkFXj8pqJf8GcQpupRqRrz1qWxKDzcHWwfNmCbUSgzgQRWu1JVf",
  "key5": "4QBJnecucezvtVYTU8kHziUGHhq3AXJTpqBy8vjohXoVSHzvWoKZcoUDLWEEz8WEo6CkfVYsmodHox3fzPpryj3x",
  "key6": "4kA7PHgjUmq3fpkgpkr9KsjsLADXKVf5wZPRNbcLFvcrCCupAPnxqxXmfQ46DZxE4rvT91GmoPEsDvpLSdjstYKR",
  "key7": "AW9Lo9DkjjGCVSUpd9a6A3i87rHgxemaJVUD4jNCGhRohYJgCQ7adWVePoX7H1oFcquy5Nif65C748j8ZWxuy5b",
  "key8": "3JZN311oi2rnaqwGzmih8VdBDHiVYBv7cv9rfNKxsXi58HkrG9abmKqLTh5ZWHjQ2w6WyGHweuTqqHhdvzPNqcu9",
  "key9": "5neohCqwRair9GWPAnGStijZLgGuADamYzHiwKnknc4Xh8FnjYuVgrnLqLejr7L8p8PofefGLdD5JeYVhAHhh7jz",
  "key10": "2ipE8sUw4iPmSgguZ84xJcwQfFeiwRkFmVRCGPpMtgvUPpwJmD6xd8CiWePiGs75nc9LLLJ6om4JxAzaRRBuLoDk",
  "key11": "2mQQzSusUUagrGWuec6PGVCbE8JQBiitJ8M61QUUNTgXGNY3Ceo7KpB3wKXLEBDsKWpVYc8p2CsPRqkGQsDGAtpp",
  "key12": "iLkGiYiaxNmkf8iZPZGbgH3eq8MFGU9YQk7bbN6hXM7oCDceMkdW9SKETEMkHXvibnomKsHshDoFGSWJLDas7SR",
  "key13": "4rm4UDvZBKfqN8bnMsFFV6xM48drwCYSRqw4TViWcpasU3ZLBDaj3vG4uFaVkJMXqom1NknSr9yyUc4HWTGE7oE7",
  "key14": "52QBq5KBk22BiQKRyHkL1ZJDxXje1aSVQqP2xPtAoxTVjwAWcR9Vbfdc3T7R1mTuF8uyTiknqVmQjz2enen1x6GE",
  "key15": "5VhoySyD4Sp5hhXMKmvEzpnZ2tCrQTq7Fa6Nb3ebdWqqbSfa3vqy7W8ULWGrKaB3KqtRCh9kQtmjPH6Dk1CbjCVw",
  "key16": "5zpdvibowEyYGhFGo5WYWM1Xkvbd3TQtpcGsxPagxCUS4xVAzeL7BL9gyLKv3QV5Db5PNhskG3pC7nQ8WXB2HJMN",
  "key17": "YZa8gcyQuvktpRSG6xbVXJXsitmnatbJBqeq7hyKaGvL357GkGsNjUwcGo6UwEevUX5H9kq1AMEFBXVULi15FZK",
  "key18": "zQKrMG2QJuNGiJk5AgBDXVdHKQqsgPCWn18rch3R8b9EYjAJxWsKMoiHyiChzUCdhHgDQKSU4MWr5DPPspHHmWn",
  "key19": "2iDxt2ypP6xNeEYqRJixZb8KwuTq4FzWASQC2x8hBmo4hKRuxsie6FzrTKfBVrPg2CxqSbKHu3nPGj3SwpejE6vu",
  "key20": "25HDeXyBaDMGSjT9nVsaYmwNPgWyRAJSQ6C4d4xfn3SSRpqQHhmpzYhotmVuEhArbaGHu4UWUW3Rchc5tKjoJbwE",
  "key21": "4cF2HABvCnx9LEUwM3cYkh7kCmVL2dfSFnF29XZ4HaMhnohRuaA8k3NBJwKN63EEEvjvAY8zAH4tgndBKQrvyW4M",
  "key22": "5ZkjHGMSYt1D66825ycGDwy1UAS66D5t3MnTrfqRgpFngCxqohYDUbQoByrXSWN2GsQFnMpC9A9vLLmy6hAvxhsj",
  "key23": "5NroHG9FzhTgRJn62cSQfZErvveGpHRz8LrEipK9k3CvftrviyEGSzzyYj5ZnLfpMRYsdd4i4EpQr8uDxVuKNx7t",
  "key24": "qfjoFLnLCn36QyNpuTa72XN9aPpYBKvQZRMMki8shrbnnR4DMJEfffNtvc58SEDjfD3oreQ1CMGsQWnhRrMhhTi"
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
