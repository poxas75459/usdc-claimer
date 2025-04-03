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
    "3XRHrNRJ7CXpqDwCpV6y3KyVDB7ziwNYQHFueySYAtHuZvgsgJPFHD8eG867CxTrv1siPA3qmidMS3FGvaB1BzkE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qxjqLmN36JCpg6n4oZaawVoJfQhPzpYefzkr9eJBXFBH6PFEGubt1P3saqRf2UPbSo3BmQqCUXLVXwhMbVCdu2K",
  "key1": "652WngM9VvQBhTrXi2qDVFdfgpzds4FtVyzSxTdxcF8ewUwBQ3uBEfuYxXRrGaMgHCmiaiyeZtRTmChUAZUNHjmv",
  "key2": "33p2CVky93CgxpcKEL4Mu1UznFxz7SQH1NqiNiGmueFc1Aa2A9HU4tX4xUy9iBFWKdPLMAxu4RFq3ohqja22svC5",
  "key3": "4cnsj8MjaSKGZgGg5Ne7CDRUM4X9kA7t3wUEVim6ZBcyo8gUtfLSG4VdZDubiiBw7aedryG5txkdH4zuVLq7WtAc",
  "key4": "3bjZ2NMgbuDZfBX5dEAcVLLYwUvZdUMQ8jKasimHUC28QGNXBUqNzu1eVhmgUBkuCPHuCy6Yra6RmfHCDDjpWaTH",
  "key5": "3QkDjfwg8vwiFrPMrUDAqncsM9cpt6SFwJsH65m6tLyTsnmPyRd6PGz1WXneCy1oo6VQ46BaJVHNx7EJZ2XnUZGF",
  "key6": "ACfWRryi7DZdrw1L2rn5JCpNo1FefWYAT8oqHTKqQKNGdRubJJy1TvTFNHrqL57eMFJN89W6nNHPHJ9vvHfrGq5",
  "key7": "4Pt3sKHZJ2SbhrADYpR8bkAePvuL5xh1AcXp9VrvkyP3x6ExPwypNQJY9VrgAp3LMVpQ1u7bUUGk2Sa2BdY7KH67",
  "key8": "2vwgoERhewqjQ3u4wvxcyoCQTGpryjw2qchretEqnrE5djCWEK5shY77pz94CyUAedxSWSgxVDTDNc5Hz39tnhh5",
  "key9": "2DSKxxojAPmNriZPy1Ebv8DFnYgGtGz6tut7LXpvGJEYXNRUznCRXLcb5AFHiKJ5QFBavmtqpUYbKNkPxzvZfrCZ",
  "key10": "5eBF31rJGZHroxfofqWjPUvVuR6bc9pC7GvM2RfokMsPwnVwAydKAXwQodv4JGov2MXdAH88JsVXJ7kaE2GLJxrF",
  "key11": "4jyocwgxreYozcLiuaicPdLfTnZz3L1PYu6as2w2pAxGBfM43BhpQTWj7puv9tQKRgiedCj8VkgDJjzsHdUhw2qZ",
  "key12": "Ftr2uZGBadFXZCWek7jfDQvM3LRhAMkEp4gjDApBpZvnJ8MJwcfVEC6bp2yX5nJBadNiDqxNXo7saxsCfnQoPht",
  "key13": "S4SzQ7xUu1aDe7FgWbb7T4KkWBCm26NYhkRya3dwEQikENVe1SVmR7rqR9v1EqKf7DcdaSDqAzrxpEBtgJXcaE5",
  "key14": "2X3ACUy45VLCpLt6gsgZgeTTxyypciU4j5KDbyCn4aSGUH7rz7GhjoQ8jFKQFBsgLJkeC5KHh8892bXYhKecKdcL",
  "key15": "3BfDopBnMpiD43ARJeHEGMdx9sn3BQguNFRDuMXvhD43jxpRZjfHVbyxwx5QSi7NUbwubt4pp7kEF8sUWerzKpLs",
  "key16": "u8pZKwz5r5TQ8QPC7X8DbczFVJHakZN237rLqsmE5piZwbLvn1QvfrXx8ngkh2iVPnVUjnqjR8jWtkxMT7PfD8q",
  "key17": "55mwmEU4Wgw4tNXGEBL98pDhgThUfeFBuzmzg19AEEfn7TRJK1sz25vB5brAmdF8ijZg3zMzXP4yxmARQvArpTg1",
  "key18": "4R99TyxJKzBkjpQwJGfM8fyJU5BPL3JEYv2B9iV3Jb2ZtBmhRUi64oaxs17HabZazdTcyZfYFiDLfei5AVnNHM31",
  "key19": "5zbu83yKk6MTkYDfz2zQ65sciLxV7767Qksxr21XZ4rX11tC6DHnvWnQucuzvYFDMifELRq54fH7iWLeZeksjxq6",
  "key20": "573pS6fscuXJT5fmHk4N78qfziow6oAL1iGqSSWUR2BvYmA2CkMeQBzcvnzQYUJL6FHnGr6ZzieGTC9uP3ky3rfM",
  "key21": "7FQtMQtVh5asyTGdpi6tsYYJqHxMx3uw3eWcjMUc2vy6NhiFin9vrJhgLBBjABAHjtkeBHPgxfBtaiJpCTcwQjB",
  "key22": "5VFntzkQHmv2Z4yoS55LyjaYoyVtm3hse8uH9WKpGj6eeNFaEmYKwcN4UkD4vkPyazRhXvEfVNn3YBSJ7inXPiFf",
  "key23": "nE9PjjQaghNQWfmzoUMtEy2BgMi4MuCWamBvNKZAdL1Tkh1xyf4GHBY5axan6BRy7KAvRLNZdAxcCyyDGwHX9Wk",
  "key24": "GcwSgmpHdcxJGCNHv2kEPvctVJ7SUvvy4Sox4wwZQXWpQRdfPDjqipaifGeZZG1mkb1exzETTPvobjyTwvipNcD",
  "key25": "4yPFs8YsmDZie7irZmRcsapTEiQiSNEmefnZp97CV2ApgkcmiKb5bZFTdcrtf85szzgYcJEm5YwFUTV9dZ3hj6uD",
  "key26": "52icitGh8pyLYGdypd3hQKDYEvuaFBPy4hkKJnbtuBr7k5RswLQw6YsTUd7ka5EcNJy4UXufhi1tvrRkc2MSSfvQ",
  "key27": "5rXg7HC8r1GGxh8tzf3T9XrFKE6A7vsti2uXNPu72uYyQNpE48ZqASyhixj6oj9irfNSXN7hctFjKC8KEyEcLLxz",
  "key28": "5xecY2cgmsoBoQtPRWTswaGTV66eybPAL9AEFoY4957oNH4rg32fGXgNFBFUzxnA7uWktfagXogQ9BUW2nzeGLuL",
  "key29": "4STjeyKVGtApChGGn79saN2ApxDiq2hXDepH3VKWDNJmJCHYz8o4PRS4hN4NKqrfZ5sHz3H496yxjmCEqqA76oLB",
  "key30": "5QpJbfmPQpJn9nvBVhbSNksRrgi1GALCQ4MnRXx3bqLWThRc4FRHFXgRcyKEtevDV54RFYSDdxZ96DXiPVVyDF8c",
  "key31": "3pkTUgLoFM5Xk3mtCcpjXKVNtdMncuH3FBfqVxTrpowR4jButJJKZZnBv8BLZ6To6cJ9tG8dASG3kMe4b7FbDRbR",
  "key32": "3Z3x7V4VMjNGAQmWjY9buX7FKm5RXm2dMsTBp8BFTJcSGrQPoxhoJALGQrS58ZQw8152E9QC1cABtBAUn3SK4AzN",
  "key33": "32x1vkktKLotd8CDmSvLCbRoE3vozz2NEhg4RNBwjBfsqk3QMEspnE7sFn8HUoTMfSzT7mPw5kqMJ1BpMHh3vobX",
  "key34": "3ZUjkNYhnPMuKUPPJ1RsQcp4PK9gSpgct5yfdN5sjH2ei8wqjLhy1iJoCuMqeWa9tEbsvaNRVip39Ys9mMs1dK92"
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
