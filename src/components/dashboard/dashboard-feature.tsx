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
    "3VmyXeE1GhE8j1zUMWP1N9AvKvEZn5NPscEyaPJCFDjXv2Ddoc3RiXAmJ1xCUjU4BrRnh1a5J9XEBchQb8ytFUqQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JJJczuwbLfKDoKNYsaz8rVUeWPZkvQrmGakdTfq93Zanci2jZvFdJ6zGvR1Z4YN3UBohKzAETjurDkFJGW7b5mw",
  "key1": "4G3b1Y7jcWeF5awMgocX51NN52aniNo35jMYDh788XF89Sq7iTn5g3gfFf9fMQa3r89mqL7A9Q2Fg1LrbiQwxqAF",
  "key2": "3yWBub7yjkEQPaECwPN5jWLdaa8LAyYD1wgiS3VorRsgWXt3F9ECSZENWHnEa54cwtkbzjsbXPgJifGMbiKmmGBa",
  "key3": "2qkW7kUvxWBFXjwv1BhuUHZ1TqJRgzAuBRKcmE2M1hq38Xp3kYjjjGB2YutXiQs69xSGJbwXCWo2Vgu4ZzZSS37s",
  "key4": "Q11CMmYgsTsm1y1Kh497uGcYbauM6xQsQuS2BcZciuJZmkceUdNmwYjgz8mQdbM2XK99z4PpscnHhjDkMVDCLno",
  "key5": "4G2jh9YdYLYzxDGvygVceMRdZBimybN8kbqY4xPS4KidKnULzVzgpqRNFiNWLrxcDCkcjD7Zn5QNboAkhGSHAu6Q",
  "key6": "36zibu9Zr3gdzeBUXHDXfXdxTUvLfuapF7q9RyQmNry4UYH4uAAJaSU7Vyw63hJuTLzfr5p7yRW5sXct5SsNtXAw",
  "key7": "544GBHebmigzcUzcBx35yrhQA69rGQqzN6cpupzWF9vPLgP8L3aRQzA28qxzKEWYrNttkd6mcXSfxgb5exxKVp5i",
  "key8": "2nKvBitDHzUDi99FoCQ3kC2ZPiVJQQTtFQ4hPC5E48YpFupjg1YhGc58u6yP6NtTW35biHr6EPFBrAgeMxs1sWda",
  "key9": "3SL5koLAmbygr5MFtvzKyFRmT8Wp49tu9yBMruKpqGVfjxzx11daHzed2qrVXCmmZjnp4XSS8UFoNS83tEFZ6m4p",
  "key10": "5cwqtbZ1AnkWt12AbXxKpdLx9fehddm6nEPQ8gMGG3oJ73WoSnehRQquYr5CK8AHSnxEGH94qN4MDx8kLrrieUMq",
  "key11": "3RP8wAXdoUHQqTGmP3jJ5XSV88E2L3iRebpwnXZ441DhS1ftidxBURrzgnZUxQtr69586JF5nSxzJp6JGi9UKd3R",
  "key12": "KT6qAc31PwNHCcnbAyTbdDxUbweCSQMUaugwQXW4VHDC3tqWswq6BmxgRNHoACJCrsTo6EBzZ15bWnQv8vtSwMt",
  "key13": "2WhK6GCgjvQqRiA8nbdwAXs7oNtp9cJyPd9uPH48vPvUx82diwJ2GN1tQniokNfTroMzMXRYi9wEzPWLVsCAEZ54",
  "key14": "3vQZa1udEPsAfvLr7dNEp7NyzrZeUrZhrmygThMEsfjzWM77wN8HNsZ9j8Us5u7KLztt1oKMbGhRLFr3UdmfVLdJ",
  "key15": "FUs5DGQLAxGKGCbNQCoAZphKSoxCK76eRdogap4NdAPCePxPiRFUbmWUpx8P5bRa9X8Hvvt71gPpo5o47U5Pg9f",
  "key16": "3VskXK65eKW2gZVocnBwBZAoWkmstqmfFyZrBTiJegw4jyEHXhoUY4B9pd7tV4LNDBrd3DHPtougRrBkbGeWkTpT",
  "key17": "4YFEoUFDwTVeWXWVfzEXEEpVH6HQ4orVNxfK5yefVaQo9qjqzxswsG1w4M7rjx85FqXX9GQYZxUvZ1vB9CAXCFVH",
  "key18": "41unvdw5mfVk2TeQ2scN2ZHVPWk6aaw72QJ7vYQiomkCDvJBwFXyNzDDm826f18Ldy8kjgjmiixVomBRHV7WsEmg",
  "key19": "3XzkbPUjTtTs8HxUpwucCvtK1JbgFSe8rCK88pFELdFVMbK8pJ5NmHrpsFUJvZbknFc7YuhQNf7n2ba5J5qBQ7vA",
  "key20": "23bLpLTTaBYZUyUgni6QK6gbsHHYBbg2RRNYzcyCV8CDVQA3C4yr8Y6JJtobX8BW766PANWSbMMvyfhnh2CK11rc",
  "key21": "5tmYQDfUek3vccgcEcmL1SYMvzmf5s3PF1QtF3d94VDKkRunn3RZnr7scUgdYk8CezQW3BYCUBKBvCVYvmM1WCmS",
  "key22": "4HGdCficoQKYKgTkJ2XNPu5D9375jM6A8NY3oUdHbvfANQ59X1dzxU4cZwqqbugUy6y34nqVA33MUy2efqyFWqHP",
  "key23": "2fXD5TKWr1tWpyvXdcwRbQEJCT3ZvpvTPiYEKLLJJ9n84H9ZPxUeyQEDWZtiwjZjJrnDHdU5NTUgNLhFJX35Etu6",
  "key24": "5VqF9dU5aMdmNXGzAwGk7bD5SvZUxnweh4cgRnsMA5pfBtsms42nV82jJt6qNt18WcuDo5UsExSKhGqAFoSNxeV8",
  "key25": "4UqRVtcpKTJgoBSLjAESsVy8L7pRtPdBNqZSaNhFFhC2TPhTd3J1e3FJSiYGm1U4xnopjtnpkdoSp12iF4FD6Yy4"
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
