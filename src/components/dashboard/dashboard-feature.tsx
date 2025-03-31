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
    "4rfLePiRYsDPzjoxTYufF1MvYqr42wjWCT3cfFH6LV9UDRWNHEK9zEqCzk7TqUf4unutYUEXqHgEjSrdmdLTF3TK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52kWhwxoS4K6JCnAop6nUXchVPvZb62GSoJtmxxRhPpj4yg93XuQWQwFx5AU2DPuQvoouBhFJQ2XrUU525ATejTu",
  "key1": "4Xb21e6EzhiDBNDzaJJ861xtozoRtEewZcJ3FX4WxKrupesYJCCHxxkpBf7WGEs9cejSB9GgHHwz9NZgK1sKknpu",
  "key2": "2b4yhgQYDrJNmu4JqcRBYy9k2zK6j7CSLmM8rn41n6QizbVTcGHBkDHi8Zb6nocwexVB8sr4ksPiuzRxDFUUaxug",
  "key3": "41xBdDqgbbUv1ABwq93X59nLga5m2iNf9JBuDFRwgZFLRYBU7H81BK5T3Ht5pVguokV15DFPrYHLksxdsZmGr84P",
  "key4": "2kixRNFg3zjQvs6yKiE82VWeaZbHcjTk2s6NyRyqCXoQexrTd31Da4VSsDsog47DQVCTQ14wU4DpYZndfb7PkRwE",
  "key5": "21cPPC6SGiSZfiTUzUZdHs7Nw15eWYfedg8pBuUjcj89QDBgDTJbyzqywxV7sN6xnby3GnRamRqFx4NVzeQUfxUo",
  "key6": "2VjYY5efN8qNayWXRWdM8wQGC37KQpid4pnpVp6vVVV2cVLYrina5XgqN8iZapTM8wK3uCZDzT5kUauXfhqSpt1m",
  "key7": "55jjz8btrqvE2Y1nFeV8gLeztZcpZozR8rFuxYA3t8THtJNWoFHmWWUs1sDhshzFY1H7tHViApzTCyGCa1nprrcB",
  "key8": "4JgSWuv4qweL3NqCxpckU3DfDvY6b3vAg5KtasJ1UsSNvdtUsXWaAZD4Nv6Q6En5TW5wk3FJ62r51sbnA8QtYyH5",
  "key9": "4bkcrnU2Y3DfCa66p8D24DKsQdK54UpiUiyF7dVZrAVGSVBCV6WysuaZDkdAfmKJoD1pdPtNqcj4wMiM5ghWUbQw",
  "key10": "5uYBw2v3wu3dqFBtt1Tr6QY8aTSWgrwYQVuB6k5SYEULZzfhVVgi9CU568YNx4ZxFErxokgqs8hmNgxMoUZCY5T4",
  "key11": "3rW2BYmrSZoh7ue3qrJhXHXQYkmeFCEtZV4fPcDn93Gfw7fzJrSgJL6fZeEzXdiBKd7f3KV1GpBR6qLoHHVsGa1V",
  "key12": "3Nrh1aXYfpUivBP9GFjr22JFxfmQ8j3fFu4CYNehxGhyamX2jcBfRL7Bb5Thg3TR1G8nsMtgYPzGsPpqLmXR6ZZY",
  "key13": "5JcBmwGnawvBvQhktV8vvdq1kCqo3Cu1JzmmbQ7kE6w2DWGzKfVujKEgYuKmYGywmAQQY4iWAcdABnca3ZqMr9Hy",
  "key14": "1wHrQMPk4keHpBCAH91RqTQc93qouf1fJ1a8s7qGXCq6JM9hVtym46yLkAx5kfpet33vpu6Uu4U69NjJLkgSMHZ",
  "key15": "5fTk67ebsoheQHxaiEVysUFnT14AJwPbFkykKEgDdhjhDzhn7j9cGvgk5f3z3mHgZMQdmL6BzNZaocYwjd51BtYD",
  "key16": "36R1SoYheVj2SCviqz2CtjXuKywLGwsBEmAzoCKo54FqsSVedexckf8hnhuiTYy5zoytQTcJyWCnb3RGfobBCUfc",
  "key17": "uGDkqzKw3iTcQXucsbqFz1MhKcTmGPSVEUpbPtCy9uNKbmzMTdXBtNXQzynZ4pu5YyYTxf7cu7CYJAL3a7M8bSB",
  "key18": "5gxvY21jn5HG6X1PY2cEYvENbdsstPitYuQRvFpv2ypWAUvEMrky8ANbuTw5g9BSvzzVLN4syoNTicwk3tKjz3Xd",
  "key19": "5geSr8nSaziHPhgSTE48khenapN3ngBrL1CmDsrSp4TYiiitLsgaZxHtXxNdiHZYkJVpkvw4QcmDBBsSuaYbo9T",
  "key20": "65sBcW7msiMueQWRNW9uncR3C7tsHiiJsktEot93rB5NJtXngDXo4hN5FfSf6Yxv2nzjYcQxFN6S6CLJH6rH5ohv",
  "key21": "Ya2f6ttjZCcknHi7nR5z8tRtuCsVCGxcN4ibfb65mCLLRNYd3fP7SeLCBJGYt8feYJEG25RsT1FnN1YSYUSLA7B",
  "key22": "Q7p5Tqkucwsg315CFcggwtRCs1NGz99KVphgGGafgBL5LFwuWt7or4k1bk7N9epBjuFhq7crcsbv4HzUYiJDCKy",
  "key23": "4L5FQjT8sbrmqhDkYWdiQwvwzPzE8gaQjVCMq6PsumspRJK7t96RsNHDFCTvTiM1Qksha84fCkrj9fJ9XAfcy3vo",
  "key24": "tNVWbCwuhJ8CVGd8Lu6ow5aZVX2E1KxUY2Lnw1nHEah6WZyYPoFXyGzhc4fgLEbjpwXh325MCxCNY7poH116EBQ",
  "key25": "3AVLAXac6Q4q3q7Nn4iU3JFsg1UXwh2UBDoG7KZJFp9L7QHQ5pmjV6PDdiPB2MC71dJntasKf7c7oWyDhLaPwtGv",
  "key26": "38pz9NCVEmKhhXbx9xiMDd8fLka76C5ogavdEfR5iXVuhYHhvx35Lr9pH82YTzkibBZby7H8Fffkop55pZafwE5N",
  "key27": "8cBoWqXR3qNd6HgEEpodz9MCdKwaiEbM1cHTvKBqRpvNkcDAWEavq2hy8EHvYystqv3yi9uVT7d2n3gimpxW8pF",
  "key28": "2xs9GVGA5TB37RyDeDbMZVpgwUR53QBWXimmYY4J3MNKb9e6ZgQUYB5umVrX3foosruERk6iJx86Sx7HQabiypqo",
  "key29": "45ycSQG5y2DqshEg7bJGeYDTo4uxzi4x3Fv5WR6PHCo3ftQVGeDLuzzvqg7qmK2ZugmQDyJnHG2cpGmYnQpPards",
  "key30": "aok5JnrSMEd7y58B9ge6DBjynWiEw8o86fVNHJhCnqeg3tPRkFDjbP6jk8Boyd9NbygwZxVTcLNU3yZ7vNmm2B7",
  "key31": "37yPBTKbumjefySoK4Q9UckT65ppoh5WnGG9NcDnxc9vSiCZrjYub3ryDgzAZgLNuY7gXqjNdrs3655cNxVZ8McL",
  "key32": "5BgtXSdc1eb65qrsZ5VfF49tDrGGUMnovpvLLneqn6nMW7iKLrgYjPHq9srd4ZaFPRke4DZrojDBLDMMbwsyf4q5",
  "key33": "3AEsdfxF8rXLqJqsSGiiU4FJus1LpN9C6xfwMB2YN2JtLE4WapNyHdEZ6pz5zZ4ZtMYPYAz5cGujXQ4idCkvGsgS",
  "key34": "4HkF66smPB2mGfMpSmi39DHahsyxejoWqhwpRfE9ejWCYe74ujPLHJwn9jrYqqFpnmnUhoKvVP4FwdC3cpJCgfPC",
  "key35": "DQ5DjZGbaGR8Zoy48ZYqP1mrng2pe3VCs9wCLUGx2zNcv1rRJaXaKC9TE9eJ4y3kRSF5Zk3ZBdfAfM2Yv5zyheu",
  "key36": "3mivBx53UVvNTqUr5vTebeLTMWXZaBk2CsnmUc34ZuFeJDWBX3fmmb2Vc48vMWefK3GSAsswiKyVH4hj5FBVBiE2",
  "key37": "231WnT1JSaGwowxFSkJgFQ72NwxyvWPretKNjuXnKdCzJvUxN65us5Fo5GFFh59DGePqxED3m3jqep36SPgiTsv2",
  "key38": "2yRaV1PwAepAowa5Q9TxhN7QWU92zWTTiByVpZMzbP3hAc7VuZwhsBsntHnXQ6rQRhXnXiR6usDjMkoXXsg7nvae",
  "key39": "aiKAYhssSbbEng9F9tbN7h1wrQkKeUecQMfUravs2z56Neqtekpo2jF2bUSfhwA8koppVYfA8fYijyGzEyn84bf",
  "key40": "3bgGCqZEi3ViuLEweGSUN9ijDcLt2EDrQTcNPj44mfZEwZBLAfCJDkH8beiCZK96KuvAoWFbvw79L9Bsdrt7WGCF"
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
