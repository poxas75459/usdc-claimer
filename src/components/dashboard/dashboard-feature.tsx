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
    "5cVPs5Mooroa9Hjh1gwY346eV5ajs4hyNykhMV3ogNdsJkFq6h6P8F6FyfH7xg5taKAwVnDReQPg3jk9nBjDa25Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KmZH5YJfMRnsGor8qajUMCdjqG97WNrGR5kympuqkhz3HXFtMCShWJsrdj3LXA2n8CYqQFRAPu1nLdEWEmLiEaj",
  "key1": "5vcHWxkU619Kj18fDcASmp7oFyPkwsSCU33k3iUd22KYGs2aX1WJ1i977YBDU4VPbfkiYWGMSUAVd9m6qTGcK2Bu",
  "key2": "2CLpibLe2xiSvxG7jdxPKA9xbSKFbrrmVgZKYX4SULr8jTgYk8GkdfNNjRiCaBhJCRzxmEm4MuQvFj9SXmHaU3Wv",
  "key3": "ULQ9SLhWNJ9Y76JH3amkvT5LPrdBJK8Mr1NpUe467unJdUv98Hf5Rs3A7NhctLK3pQTqjNhKf2az5PJfYSUdh3A",
  "key4": "2reE5WHdRkHofxM4WqABf1xq6xK82YncncK6y5RBqAG5fMoz8Vvc33DaGsZM1o9cpjjJ5eNbDTXF7zHkwwQXCiJo",
  "key5": "5pb2H7zjSfUP9aezCi6QRZ9QMEbgpyBAS9A4WwAm9uuN6XPSwhTeHwhjpTw7jwa4Ws9Qkw3YqPVtWaW8Bx7w4Qdw",
  "key6": "44fhZEA4Ufyf8wrT6ppXTvXQU1MwDtJThcoPqVUF6AHVo6YjTgA4N7RjpYygzHis9KthqBCj4aJzeFGuKYhVWj2U",
  "key7": "39TKY9AkDwxhofa3k2cwrenR2N8yLjiEpuE2NXQSDDXTPgas8t9mrCqVvTiVsQtsQeRbQNxNSPZqn7BAnMWX5jUX",
  "key8": "4nLCjKAyMqhfVs2d2ttVng6no5oVT2m1wDGgWvuar2Z5WRDreQ2vpP97C7mrPmdQ2PLpMwr5Qv4FXG7xcQpx8ZjT",
  "key9": "54kWWXPZEkWTh6dzAFVLpZwG5HyhZWqqFfk5jkocqrvLUuqEbsso4t2prYiKf8SBm4GLCnGDc6NE2csa2xr4mi8G",
  "key10": "2tQoHYZzQ4aKTPzTG7fRxGkw7rx7JNDKpeShJuDsL3GfdutVtke1NrTxQbzMyRYat8GvXRipmSgxZj3hdVoffpwG",
  "key11": "2fWHJDvR7AwHsdVUXCGofSeK2kCRDTJBsR8n43As2gWSo5GGXaNzC6ogH7XEoRquyEpxYbTXj87TtmDDsJtXZ3eb",
  "key12": "kfNuvjB3QHx2scFWFbS2E6axaUxYYGTvv9dX8RMUyomERGX13ZkFBNSF1gmsFQPvFvrc4o1RYxxBjdChrkt5dUY",
  "key13": "4YkeRJ5ULK3hCnPtzapky6H2k6dfakYfRhLgkX4jmRuehF2qTmgqSu3rLHWMTWStvjrJDRGW8u5GCVgfVma5ZTTj",
  "key14": "3MwMuD6dnoNsFwkaaRwVJA9mLVATQR3iLgjsC1Z8a1KKFRftXsH9KqTCUz2mZCap17i89qhxsvuK8CSmDMGSF442",
  "key15": "5dwRvqBtqeSbuh9ry4bLM39E7JbH5RsVD7FdmF1XV2yeiFCwxKPD3GGnT8qQ4kBMJrfbatJP7NvPekjTwBPL5C7W",
  "key16": "2jB8hKZaAMwcuwCBaQUF99ppbGpXnwYF2U9FmdSHxF8qFhxE5WhXBKrtujrewLQcNqgJpByPiZzNXPpSwJ35CyQu",
  "key17": "2F8cLHMDB2JpwgYHN2MstcJR2nh8xhJHkqN4pBQV5RY1LanKi3yGoZCdZ5dScHfyC33wo2EiTTq3PPRnN1EhyoFd",
  "key18": "2zx7ZK25ALmynEVzr1soCZ3QjxaHyBRdqZQ9n8Nbz4M7Aczj3gWMVHvKahdiH5qFHhx7w9nPi64NCkYDBDwrBzkA",
  "key19": "2QqKjqgthjM7pRy57tFjE9L5Zff2WrvWuS1gGeGveC6727ZPYK3zyjRrkwzXweLbEuMnmuN8JmjNSK452KDnqvLf",
  "key20": "WhDWHrsJ5ReiZfevFRLHjQam1xo3Rndt4dADR7Lv2ZMZdtuYap7zqQBKVFLZiJbGUrozLn1hmoVZs85Q94crvUG",
  "key21": "xrsnMzn516Xg92r3H8BCWyEyvxzRLmZKVzNu6kDbE7q4u9FPCGWp7CNibWEbXaz84rgRvCT9RSu6Bz8n2HzNUTQ",
  "key22": "3Bjhse1XTPpZWxoZobJnkYTBeMBxZmaKH6G8RyWHojvYRhfxhWFouQk86kqaUub58GAE9ZYtnVGqsSsgZLtY4MmG",
  "key23": "2rTF7Po3Za5AfX8qXRuBbheAGbd2MQGWKeNVqmkoNHJTzKv2bR4f7WGRTx1L4ya6E759J3cWeeAFK9Y5UPCNF7Bp",
  "key24": "5NdkLqaSA9hh7JLbJ4dTs7Y3H5qTAfVUAacD9EAoDa6LnD33jUTpznw3oyLrDHpSF7ZDqxoCsWLZKkBKFuHmTWSV",
  "key25": "63XJS4tFGtAD6qZ5USAPsAgt5HXPvHGDvGshDDCsP6BXsthgGT5G4mD6EX5JwoH61SbAHYuybJJYg3c789gVfXWk",
  "key26": "5te87Zi7bs7rZqafthvwcUBWk5QTQfeBiv8ZN36vt7ZmPhUEwLZYDUs1asaZfHXrB3gAPkaGSTCup4TwVwwakfKW",
  "key27": "41jVXCrr7YQWV54omibLwCLTvNFByAr86vLBF93Ux2GwCirAAYJyueXeYhSDikThfBWFrwQ6HYzyyFRNsxdkKoML",
  "key28": "2UZKaefpk6LY3ksgdrdgh3dNKERDnzsjo7kjHoBzVmNmnyCpvnmVyF24jAzPQ2q4MvU4tGyB6JbZnJqAk2xmr7iP",
  "key29": "5urYTfxZ4dTYiY2KsAUoM1qdNAP6VwJoEJYpyqGFoNJdf2GDLqZAboa5Wn7QAYU4zs1DQ91k7UpUqsBxczZc3Ls8",
  "key30": "57pkQ2qP4DPdDtwK3HugTjyyAorH4FbPtACqophi81QpzLoXjadyg24B4vqmiNjfL1SavJfmxpJK5iDAJ16ceXrB",
  "key31": "3QugJfC3JjuXN9Zgt3L3XmSjMunMgG5th1pNLhcLMAbxBtergeEVEau8WNrDAZ6WJpkL6FsLW6QJsGHCVxHKo8K7",
  "key32": "3UjJ5f3z3P6zTCFiEcxr4aSRNrB1ZWruhijDqH22UTL52YoeRDgvJxSCrPSTZueWsmDav6WfrgPWKRHq8u17185d",
  "key33": "2Nzgd5UVYFR1WjFDUEfSzNY6sT5vzBnKvn9wSdRWVSYn5M6EwhJz3vQkWmGR8GErSRsnLRYoChax3XyxajtaEE23",
  "key34": "2mRnrFpFL9KuKPuRQMRYdWaCgfL1PkHwMDJz9aNFbR9PTEEw8ZDGqdF1LJ6h5NhXXhnBuytqqQ5g4rsRWcGHDBjm",
  "key35": "3itFyz2HDD7KfWCAEuXTcfSQnDJK9xEvw3kkkcPpvtDoaxX3wvuo4NkPjhwBidTsYzce59vabX44iAvnhSB7gaYM",
  "key36": "4rVtwgzfYZH7GYtg7hCJA3XoPgvQrFVP6V2qunTjZY19Z9NrcrBcVMd4jDcPUE1a7TkuEAWjdqQ7uJnke8br8Lng",
  "key37": "62H4nD8tpQwV96CYzv9AEGw188aHZwcWEDmwnVHt7kRop3LLfwWn4fCzDMqQG43UecMUhqeEcuxquiMCCf5adA7V",
  "key38": "aDKsw8tpDRqhF8DgFE37phGUPHYpFo5pDwCsc8EMUAHF35d9oeDQ3924Ra5p8PTA63GjX3GBVeuwkNPHtApubwd",
  "key39": "4rVLsA7ZtBTqyAM21rCfJehdTWmCW8PURgWTN1K7nXiNeYUcQdP6exiV3ZXUCemxz2rKi95xuq43dEPvdnqpnp5",
  "key40": "6YfRMjqkSdivh1K96oWZfEh3gZGpXM3xEdNxJkJqUyXtmwEFN85BfBLnTwNzd7rgGFBLHR3GqzfNzsbvXDcAgzY",
  "key41": "5qLEUQsfr9HY3F7T1oNBgUpdUsoJY4QiztDrTktRZCgtnQym1ou1irHbp7fn8bNZiuYvciKHyfm5RvNVMs6r9mvs",
  "key42": "GZPA9DwrCf78F3GkSiYCCwXiaf34Qq42tU5fA47qbq3MTxzBJCd5sLWiEEkryFPZQ6tkRW6jBWJx92G7PTa4yCS"
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
