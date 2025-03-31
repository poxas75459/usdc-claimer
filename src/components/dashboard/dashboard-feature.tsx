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
    "5rWNVpafErBUP8NXehT2WrvHFpgXA1QtstDDPQRuZrAdoDvvg7hhDDaZE6Sr39Xbf9R3iDYcyMLWYQBNL2X4yBoj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZC7Hcvfkw8TA2dXFisYUxGYxQxeAfMyn3XrJAcuspdWLonHZc2HM9Wr5bsjHaGJnPRkdCLfCiwHp7u6KGD7u3nu",
  "key1": "4z7TXT8qWmL4v8H8SNAHLTpiBEYW8UZr767eF7HUuur3ZxLNckUZGgPfAagktckPuBH79XBXyHbhxkvDUbhSdnes",
  "key2": "526sC8dwgbdeJm5mUGiwPrL1K3CeFJL488i5YDqX1Djo5ckH5XbnYRxo6AJiCTWZAmmpqmN755bRpJfbHtHAbEvJ",
  "key3": "5N6tqPVpiq8pZ9SqKKRfshghRsWiF79WzH5hM5JkEBmSoFNSCAcHNynydMcMtf4qBX5h2eo5JPVSvp1fo6bbFzAc",
  "key4": "2Ji3sLZmPrNSZGHgcpaSht5bFX9BA2cYWPuAFoFcDxUjsjNfPvAX1bRzgVAaKogCFTujEJCWTTHk1G3ViVTKzzQY",
  "key5": "xZ1v48TtgRXYJ4cWXEgbSV2NSMp3LCB8gzEe5AYuJppoF3peybGfqn99DHBHWPX3KsaUBFBNar6wwFaoz2xaJS2",
  "key6": "2CTLrQXLmPTsVZDdqGF9Xo1kXtsjCuN4gAnXStkzrNyp8pTWjJC1izT2VBCFWcD46kS52mH8rsg53vYAqdbvZmCK",
  "key7": "4cAXpSSwzoHWeCUijX6HSS9ngvCUKRYFFMV9z4gK8RryNNo579yPPi5C7rVQMWvpeefcDzV99vbK6fD5cUcR6UXb",
  "key8": "387VoNWAkGUUC3cjVE1gT71yHz3FLjinqesJD3DZXACeg5uHXtLmdPwxPmuDbYbXC5r5euAE2xAXx8efUd39g5CA",
  "key9": "53QFVDhA3U85QqKQtQtQLeKCsetNkTdZ4Tq3bB1rUM41i6QPuhWVNm4bTKNvJ3JDgiJDduysaeFy59NGc7C7K1Tb",
  "key10": "5QKvX9aNCgc8tVWvsLksmurwoSwdX3sLbbCExUkW2jSamTLus2zzC9sxSb4Jnp5QjWpf8yodSL23mdCW6qwf8Rug",
  "key11": "51KeScJWdLU5FFnpfsQBSUnZp4X6FKArgs6qSAzzV7Ffnq5t6eP3owwJsmX9RfrzZ3d19T765VzwLJkguD7Zmo6f",
  "key12": "gE5hvmAtHaqdXSVWcmdesaRPue3yoV4PzUvvtSVmt2rn5qQXwTDmT7aNwykhQh5LGMJ3kRRd6Xm6t9hWnbwiLgQ",
  "key13": "5En2DYh5kLAKP4qnkidVMXRRsVfT8pi1y5Gy2bGD5sc7EQj6AUu9bCdo2RsfZFJctzbqKx3kdqBf1KMj1VLbn2H7",
  "key14": "24bSpDzDw3WNxmpo13bLss9nXFL2y1jMkgyve9EX7X3S1QWXFnffYgQQLRraojHNoLpm167ASYbTQMi6ojKbSULH",
  "key15": "2mCYHknaRFeBetuTDV3CU45aZgKzJHAhNYQnyNVbK8XzkpjQeXFcY3np2nRjme2H5XkkPWwvq8sydfz1zttC8ZVr",
  "key16": "5WtQ6aW1viA7sahz2f7kuqbgsC6fP2efRy5P1XfPKjSizbiFPRWkGfDRaPWE2nvi7nFf7LQKY67U95L1GdvTV67H",
  "key17": "57ncBVm53eh8V7MZULEGeuJa8nBVejKwFVr4W8cCqgXF6injXA7CVBCyiqJXLxvXWr9LbgP1SyJ99CNohSjgRBAd",
  "key18": "5Tg2tHY4ehq6m35Pbfx9WGN9jbSm2Gc8oZs4bwwkoLgGbKyTgmhf18rrsTT22vfm4j8ZjZqWWbM9hJ35BYWws9WU",
  "key19": "64hBpngSSVXMSW4XbhPiggrHQfmqczudrR9DFNwW3CtkSimarwh4YVyP5QBBF9Ne7zFtparhJP2hSdHUJRZAY86k",
  "key20": "7GuWTXKE6p9Lrk5uLHKo3wXSSC4n3B9BGE38SpxxPHkH8fEzSBqM4dfov7ALMgYdmVrBn3vCj8nwySmmVBuQNXa",
  "key21": "2XDUMXNEkG6HMpkkHXJnBwHhhpoP7W9TZdyf1RFnrMHc8oTorRLmVxgfiYZ8yJH4aB6UJivp67pphs5kviKHogjY",
  "key22": "62qHzfFLVGMqQJaq1xFkN4UwtTDWw5ckfS2x1zY5r5YaM4mJH88oZturJi8YGnQfLRWCzZ4Yx4Jzmy9CkHh6CJip",
  "key23": "4TD1Hfws7F3xyyo9uiGLG2Eo9EGmtiEM996ZmeVtxVYjXbtvfc7WjAH7GFYSjsQyZjTYGmgpKhzGh9Zsxu8nmHRS",
  "key24": "63riUmdnFgPrshGpehoZCUDWQY2qgYnbZAo3MCDPEsUd36wVi7fPBTNYF57r5K9UCeyet1usoQLxHnG13nr2PQba",
  "key25": "57vHb7XLSjstVJGo7ERFPy7Et3GGqRtiZrpbiS2n38zZeh98sWBGFc8m1vcpchM1krXzhYVR4VkTFh2h2ukxGd9X",
  "key26": "45gMo7UVATB1ufzHE3o6P1JgjyazdeXNiWjfTcx4WmDq56af8rqaCpLv25H8HemuoXZjRN7SF1wuyGDT4wxBYEUV",
  "key27": "2BBXmQABRGsdCW1fwtDBba9bYdT4kLo61uLPUdvwvUy3eBVLnPTWz9nAikgPrw1sTkvt8t4XBWhWcDBnZrKrb7uV",
  "key28": "4pi8xGvLpfPL3mbbdU2kRw3kmqhm5Xs18iw31NpfEdJxB1H7RWgCZ6mEVZaH6bpr98DUYrAhbGCCAHZVeUt3UCGh",
  "key29": "2AY79bfWB9SJj5tnshbi3PtJLABqREgREgrQrf7ZjLq6g7HSFkSfymH51LFV85uDj6ZLi8PsM8wbWiCaPay3eo34",
  "key30": "3Hk2zSGz86QSY67jGbLbDb9Lor2YbmG73Wajhn1qPLP3Us3CmVFS7ThNWi45Pk1MsBARkrJd5HMCegiobJvapDKR",
  "key31": "5tTbbcwEZ385e4dynKibxPvhQr1Vq5XMddrtJPWZJJ7FyNy8tvtgqu6H1iFdRs15a4kPGk816N7uiPxNXsHjthGw"
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
