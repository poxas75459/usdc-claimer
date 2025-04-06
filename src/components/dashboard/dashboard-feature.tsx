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
    "5aUUYFMGNp8zAK7VLMv5Um1WxdUXNbq52qBwzSPNs9q75LJTQKmxGucbRZcvxmDRTAsUtvdN32GFsRpqcvkpJMg7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GLxXCoyJbsjmZx2cZBuoHneGHQKBR5E1AF18kM2ec8CEaqP4DHTgVdd3kyESyvMixag4skhd1QWWoPqMTzgiyQU",
  "key1": "t6V6oju4ZN2cytBepG8YebPQw7b2vWf8rfmqw1JGfhmpc7KKEQhKN7Jf5ep8BZLRS8xnAfb68vQWBgVxyi4Ubcu",
  "key2": "5eCxqcyJZifXN66FVa3uCzFUgzJoBLFmJTNpsVYTp96hobbz7eAG4hoou92FgNpxkE2jZxKpi5WgzoK4egKmk6Jq",
  "key3": "vE2i5Jg25mB1T1bW3pB4vGZRSmK9vZGRjQiGgLosjDChRG3L4rsFGDRKdvAJ1cHcXetKRwLzJsUo87wZJ91pBwN",
  "key4": "3XTMQmRMTgGVMB4HAmD8h2xjCYr89CukwePr2Gx4BpEt995EvN8ztB1G4rjntUthkExgrdjBc31WVxDkdabSifB8",
  "key5": "2fECzeyE6RTZAQL27JNbsqPzeLs2C4dh6jCV182a4VhWwWY4pudCtgVdYERR3XaJmrWugCa5oZY9zVxQ6fqeZbAB",
  "key6": "5HVduhA12LHFJXXxMKUaSDNh9RLmvQPUmovanmwwpj1HSevCSbge9otKvsj5pVgKdzMSDk7BZKvt9CGN4MLscpKe",
  "key7": "4KgxuBJborYL8Zpt6CkaEJv1H9KCzEie24uH2Vpy8bn74iuWqg65bjy4VGHXoada4HdEYFCToZNkwjGBqVdH3c43",
  "key8": "yjUovxNnvKfaUis9yiP77CnZrHjRbqJDwyqMiprAGGzKwCqYZjB5Av3gwGyP9ZASG4AVQ9HxJZ4KhDcqJooCJW9",
  "key9": "4cai17ECmLy8X6mdbGDALu4PDatCH1NhbcbDkXA6gmvZVoMD3pNaHbJKvjhUkirE7nqaUgWebep9Jcy1zqwRk1ZQ",
  "key10": "BzPAVfKmmH7i1cV6yAUD1LYX9EgyFm8UFWjZGsA1cDA9nycdepo1vAbjcw6PrdP4NBsbZqpopTka9MvsEbCBXxN",
  "key11": "5ZRLXAjGEgPq6BJm9sJp1mQyaxirzMMJ1rZFMfc55117vNVhXvWACmjFdhsSZorfvXEB8iuc15k99HnEXLbSEPn3",
  "key12": "2Kj8tSGCxZ1b6KFkQB6u49WSCprwUYB7CjCsPdZ1krf3GoNJu2wsvcW29a5jtP7kb4VDTv8tgWRhiW27Y68ixhZU",
  "key13": "2T9xTW7kyS84riFY22CGz2Cc1Ua7bFwzB6E4jwvph8ojWd1Zi1txwwSdFSx6bjT9CzgFwQhLVKubus7ySYUUumax",
  "key14": "9QGYpmE9m8WHDMcBvoDeiWEgBxWXAfKGvskbkJaSfJiGYcYXnVVj2xoBrusmPbEZuBGynyYGneH15uA3iS349mn",
  "key15": "3roi8cTjZLugmay1NBSysQYJXjeXr28am3ACiMx1APthNK7msm32S87aGpVBFBseHhU2AVPK5i8XpgfFaUuMzeHu",
  "key16": "4Kb7qgnFUG9ro98hF6VfoRxSRTHPzfB8Cxhh1wuYeCMr7KUuxGQaNFg1nVNw79NyXCU6evBPVHK4QdAiWKe5BKn7",
  "key17": "4KMr6Y6VutxbqHKiwCu9buHeyUh1jaDZLNGZ5WWfsdRL4uCFuXnkupMGcMfNJJ3Fi1XckkSejM2uLiNXcpAwUn7B",
  "key18": "23L7wuKJry5m7czymc63g3g8yJYXwoT9pVzauGYoV9ojufbb49GABA5ToeSSHPSWfaWr65RKMmLGZ3wvuPNbu2BA",
  "key19": "45ZatYNook9feNAfhGshiiZV1eb8fxGPHd9DTxvG1YKFizdBqkQmfRWUxZqJGZ7cEX2TFMCezNjfyhrj4BeN41iM",
  "key20": "5i1Vg3oAcSifiHF6rra4XyUzjKzZvX2Eyy6AQELcxMKcjEUTMJt8Xj1Jf4v8crPJqwDXcmcojyYaf8nX5thwbGZH",
  "key21": "3nCsc8tzwmmXddodRAS6ydZc5PPPt45CuXVKC5gp6bcTaupFWB8j5KqNX32DbrqSsFyu25CpaSVXHQDGq7UiK8bX",
  "key22": "5woC2hyeTeTvpVCyE3ruqM6uj9fygZNrsANi7EkrNjVdJWjVt3NUytiJ9vrMrt5pdvEbcuhzxGGJDbwNGWLgfTFC",
  "key23": "hJgdcyV6xgUEvBMnz8iqwbWBuDu9cvhCaZicRNvawX4jSpSWaRNM34jNoEdWmtEsuMQ2kfArfTxXjVsfmL82Fqy",
  "key24": "5BghD1BsSt9x75ubF6qL3M2cnZLXUpHQWu4t3ny5RHnFAUKQFV4eqx9bi121PQoV1JQBLseLodsj9vY1hKJ4LYqA",
  "key25": "2TYP5JdxcEcPFpMZGbcw5z4DxgcD3GV9F7NPiWwcvx9mW6tezMJzHAzmCxRMfmvcnjcT17qxjVh4eSSGVMhbouDr",
  "key26": "55TtWpvDWXoDPPgHmDmcs1KkExSLR6c8DLPEtw38MTjLpaDivCwr6w5Fv327TC6PUuKSeGKfExCWvz9pXeWbFqjM",
  "key27": "2M58pmzzHLB1Jeo9E4kir6wqw4mdaLz2Ub5eaYE2QYHCFMqySZhUjotG9Lpo1SLbwX2oBtjEBohCjLNuN7o4bZcp",
  "key28": "4RfToUmvKYaLPW77giQctz1dBSVAEPBiRZJWQvt1F516rGo44qV76Shnz7KqTLJuXoJuENqCLFziTKYZTFvr8rrJ",
  "key29": "35og9zvW9M1CMiU8Vnq8ukJqPjoi8njX5bx5a6CUK5krZejaFd8KfAJabhFphRGzZMkJGw1iBp5oZPAckFF3DpmZ",
  "key30": "2dqduh4yib4QrL78n9HdunM7CQQWVAXYTyqMkUDFgVoFppbCo41AVCPpaZhJzPMbF1YuQFmDw8zwjkUHmxBeyaWs",
  "key31": "5howAtmT9jFiYWKXPk5EePrszkW3m6CG744LwkxLzGWcdWNCixmJfa8ygTeom8SBvSGxoktGEqC9GiQmq21tiRnj",
  "key32": "2A89JkPiX1QZwoSR479SGusDAAE8z2RTSYNtn1rqeiU1au7HMj9hq6oYxRjyRZk4rzK5iZUdCrRsx95ByuqgrTp5",
  "key33": "ZEzS7MkdAVWrY8PfAEAWUEwEm4FJkqQafvtr1wR9SwQr2udpiRbi4ZDWsYh7KRYi2fpTmTcjQ2m8qkWQGRYNtWM",
  "key34": "4XN72sR1cxQdXKV6rY1Cp46Gi6igsg5qgHzJbEkomLKuE2GVArB9o4LToug19sbMdA16YEt6PS8yLHvZz1HzWWt7",
  "key35": "HjF8XjEouhAVjZRtBVneSqNLCKWB1STg4mr7J5maVWxu19nhRJfXxFtan5oLoMVwPiUSyWRfwSVnPBYsoHzJwtn",
  "key36": "3KaXUrX9QjSxbCrLWzknY4b28sdpnHk766nh1trSyntv81JqjjzPodyk165P5P8SeLYdUxjEDVtojSktTNFy5fL3",
  "key37": "3FNJ2wTiiG8BMH4iDFurNW2z8nrsBvYh8W8CEXYnwyVPspXj8n3mNpNCLRc6pZh8PZURvzGXqJBJHyTsE1poC7Se",
  "key38": "c2joraHZbeC1HJfh8UuP5xdqHXHhiJnSTrfJ7JWhZN43BNsdUyQpQFwEYZJzkmn7urqCty7KGoyP2cMojmieDtR",
  "key39": "2TTy2KTTiBXrYdqyP1Sen9ZERGW9qhfwaKYHEm2rnzYTyHzd9aeVGixJsWbryhJLk79Avkvki3duC1Cxw1VjHatX",
  "key40": "4K8HdgdYKyRWAHr3f9JdXg5qwU93VjpjX43GLpgmypjxVBiXhhpxtHPMBnzjWjaFdYKjBCxqtJQN45K5WVAA1cWG",
  "key41": "5qhj6AXvPt8pFW93gTwnpt8q9deNaGsp4aakoyfhtp4AYeyp9q1TtLTSseKyyRruwuGzSZy2c9TFz5biznFiuUPo",
  "key42": "4UJwvekkdKk6TENN6Vy8aCQSPZbQgiEyfhxfZvpHKSvbJC1RjqXAr1WecCayaCzRrk1nGnFsfeNbvGA51zLdqG3A",
  "key43": "2LUxqcqWNjnmqBGZNpS77Jpq2UPThrP4fhsMXL6JBZdJ858dURapSdh5L2Hyb7zaFML97xrShcUf4fhxXneHV5hu",
  "key44": "VkHZdPRrRVrq47uEjDur19PCMo1siBLgdaS9GG4NNvFK4tM5yDsvJbmDppU9Z2Erj4pxfQmPwuU4AtgydWt6K17",
  "key45": "4AaRYVtzAkcmUVtRRKUa8sqBC5WsUBqQjdqyn4poGLNWdV9RRnYhJCoiQ22pwXNL31HLugxy18kAvGCBkWSNtKJx",
  "key46": "34j9qrijo8Gp5AfYK99RSZqZYvbkVD5WGnfE55EWKibuife5WxtWXdDA7RFb7bjYHVZHFob8cpgeXcrfCKvhz6Qi",
  "key47": "4w641JNBbcxYqSh7cExenX9a7r2dh5HbvKmtKGykEM5fbfehVKktgUYKsqLrthsZ1JRXyDEz4Ws6terZ1XgVim15",
  "key48": "4p1d9dcnNpkkcBE5chPgGAZPbvXzLj2vGH16zgwSaSzvqJ1j48WeQKg4czmUUnze6JyZiXfrY8TsbPofsKka1exe",
  "key49": "5nY1AdrmsY7QJNcAEsSW4afD8KpzzcbEshRnHBGUUFW6yqVapNqmYPAXHuLcHnP5eypHtkqR3ZzGhGDB8tkzxirg"
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
