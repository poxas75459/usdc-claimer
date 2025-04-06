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
    "2C6ctDomYCkHbL1RKu4rAzcnK1zvcmmWVvwv8Sh9C2UtBv1pR6FotT9NxhvNps6EVRCG6RgFGcjtTHXCiGnSe1xd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nc2tsVeyaPFCxr4DJGPDCoNbU6YB3hWy2Gfnj7B9L43Z7PMmy1is8GFTSQxzYNpqH6EzuDKN1vRb8NxQq6ieHS6",
  "key1": "5YNWFCHJofZP24xrwcjMZE2hEGPiAmzJSpN3ELMm7oe5w8WEUP3uRJHVRJhat2d3qa2JpJb5ArWfWwz2pkNEiR2a",
  "key2": "3PUyo4yxF1hWyL1NQXSyqtHVVzLt9ajz5jGkmsgMG8zhpzP7UddgNiyDN1W2af3uddMKo6bxJNmq1NAVjxZTWqJb",
  "key3": "n9tJqwUsEQ6WSLzu667JEZ3W8bbSbBM9vsHNJ7ZPHMecxRLCgb3piZRaADegtUthroihTDZkW3A2xK6GxM96CRq",
  "key4": "67mX8PZUDEjuXzPUcQMWcYHAhfeXbWqGQe4msUqDhdjX1wqVuRN4nLZiknwLtrpk9m4fqGUyydYF9dtVN4gsoDDr",
  "key5": "3uAJiVhaEWJ3jZXdtH1wPro9NvWwUNSBvkNKnmbJm4N3ZjBt4GqPKYQgtVXGm5esb5afSZxg1wUjqqMNfJj4DFnQ",
  "key6": "H87hA6q7byeZSx5jWML97bR63bZYh3uAQg1hbuK15xzvi8CJUquUFUQaL81GYn9M6uWbsmfGwZkG4ACr1M74pKH",
  "key7": "ZmeMcpX6tioPXB6r6sU7QXTLLZbCRu2YhdozsuwYkfUUSdWzK9J8aR4rjcFHD5gd5AUJMW6xuFQdEv9xw8yZz1Z",
  "key8": "vYS3crmzs2AFrAJ9LkRzKt3CJfWx5eteT8Gkd6BPpkqanQgsphxt48CQ7coQ3vpTFiXkXwoj5xhQCkx92bRyRwq",
  "key9": "3JXxyP5SG8KzN7ok4AqorYgUyBJtR4mLjybQNBCsgKD7mM8fotfY8Qd8stRwYprg5Gcuga3JipcWzyu7LbnYiuvJ",
  "key10": "5hALLLsKRpo9pCSZuKbr2JXVc1GDcifdVNpeGXmHyax39DtYBmo5PWQMdhCd75YQMjMxVvUutMmzXnGk8zLkqdH1",
  "key11": "5renagQpYiz7hixcydz4ustU7QCCcUEdwJKBG319RXCnhr2UptoPnKNDANmZcWba21ZXfX3AErWWBcqd314JdxSD",
  "key12": "QqrPukDDMzAqVDw2R3WbRGjobRVmjTR9HcLBouWp1Ch27LrEXDnyxXsrMd9gMKvYNk2fdNapfKnutPVq3VFLc1W",
  "key13": "3FuMzb7sWpnUJch4gsKZGPfEQVCp2P1Jqr7J3shiw9jkoh5b1zX2PjGucCkCQ2vzVVy1NV57rhHW3vtjsY8fRKnR",
  "key14": "52BbeYgsDWnCGF5BJbnRELMTB5xzpfyZacTGrUcGJhLzFmBjGHQq584UCpdrbkCb2CKqwnbngV5m9C48NmFcv2zm",
  "key15": "43z9xTPNN1iRwiuKazZkzX6KMAG4BfkGCPd5MYe5Mfs1zoDDFAwnwKY7X77AeQi4YvZSjJUqxZSYUtqv9itrTWuM",
  "key16": "xGzwgSZmLtjYGS9N6rLN5xizr3udLgFfgyVqgtioiEGkVJHP6R6hf8mZjZYxi1BAz2SpuyJxB347xkUeP4SE5bG",
  "key17": "7YqgW8Gg965CVULvRh4uX9QxeXi9wLmC9TZ8esNKJhsuCNL5id6ie9ZPZcVurAVk6bqsLjuZqcbNGEnDdrYXwg3",
  "key18": "2o5wfDraX2KLJ1X53GDVTzs8yu8GWohmnKJiUg8k8TGEF392SVJ6aqRmTsR29QJ1FSdRVcHnHQUV6cyqeNofhGeD",
  "key19": "g99rFkhyzt1gWvkxSGVXeRRiNeQYptj99SP8fKFwnPgf4AUckGns47TJbFZ8YggLhMG4hEmD2VssLgk9V5euwEB",
  "key20": "C1Xd11reR5hQpFsUjFa736AFe3gZzRxD5YSFKybo8KkHqB46TK3Wic36jYkk9oL6qjmNNLStLS16rYJWVk4oXk9",
  "key21": "4Azt6Y3PNGpVhNNVUUd7MN6p4XYGxZbf5dCvyoKP3yDVBtNC7W57QWCGtwxd5jjoQdkhpsNEUK4etCVLruRxbkEj",
  "key22": "39JzjawsJc7DHkDPBd7vCZre77XAK1JJ5SEK1B2gux4jSJweToog8XhVwvCn63DSTwGTLnpoSm634z1NTqWprqz1",
  "key23": "46VSgFjVeqPuhPJsCP3tifxuchqiGfzpX7tK5AY7MTLNeTN7DZWS1Ss2nMigCwFuzHRwi8Wi5FMCnex435uhA6S7",
  "key24": "4QvttNNefLhCvrrMpCJeJLZoeoJb2EHa8r4qU7cjYtwUpR5LwJeCAZu65mHDmWh9V33XjSi6xgwq486H83MZAe65",
  "key25": "36QEQo4iCmE2TsRjDm4hJKQ1TsgYsovVLQGyA7PTNvHmv7SYmepSJQe1RAduYY9YqiST24a2GGvTziuDaemv3viv",
  "key26": "47AVrUA3Cun4FknR3YePdN42fFoWYtct6sJqDB6zxpDfmno4mmk5Myyboiojs1gdBFTejLUq3Dt7BYrKx6ruQNjY",
  "key27": "4Xr44eYnh3uL99H4CZA1mbPsyR3iYHeCfkx75B7MnNWam8ctU8nNLY4t1nKs5FCV8RKtCkT7Li1e2teK1cT4GYVQ",
  "key28": "3gpWNtYtkt8gmeFA9NfszXKYxUhAi3RCv9if2TzRt8vxNcWPhf4u1EFHnbikR1SJRrmHwwdczBVXb6byfYpmMBBG",
  "key29": "ksvUqU26EKxwaTHhaTotEBarHW6uXu8xr7dx2knkzAFMbJwkDsSaG8bteWVddJVmKZ1GjVYHTcyMX61gSt4jPkW",
  "key30": "ZqUN3wFLJSpTnWLS4N9bj3TG8vLyi47KdwUDaFF7498aepgdtzeLHsdZHyd3id6AKsncfTh8qGHovNpo21N7nNL",
  "key31": "4unRTXWejwC28cKHSwFd6iKrEww39HQqjjzVQ31CMRC2DmhzcJsDSLJTCg175LRR5KXXMqYVzzxrDApHkdaHuwGb",
  "key32": "3AdKsGPSwHpnEdYjY6DyzfrVFkWLzbKya1frotwsGbQwuo3GQXt4jk56xvCH58V5RnteqFW3BSW8qPDgRYchshrK",
  "key33": "3Eb7tC52hekC3YXsJAUqv7sVuEpDrwW6QhN89MYzNTvNqSkbSGZgsBEush4vkoLkmwKScL8BRZeshQP4hb23zRgg",
  "key34": "wiuCsxL5h4fhTrTYjE236fM8Xqiexc9fg6SJ6omt7eVw8hsoS5pqRC8FfXP1A5YeCpNjhAWmU2n6nUpDZRNZu5h",
  "key35": "Cvb6Z7zXyjTsDasudt4sjVbzFXkxXKYJjM7kbWNhLD1uvF7SBbra6EHFZuS6MPhKhK5kxsa7six32vM7JmAkez3",
  "key36": "4nQQ7aZZ2G7MsjH8QSD4rigSZSDpGewPrCYvCv2dg3KVtDvEjCXSTpBbw5uJJ4BHEnjU68rQegTiStecq2hoY9B5",
  "key37": "2peFwJvAvxeNADMF14QnDy8T649t8a23dQkPn8Zvh15NkLxWRce36WU1egLpaj7bqBhJyvqnHV5nGF5D7ne1Xk6q",
  "key38": "2fGmYPdPwUgs1jnwhhVeZx51QvKbzPHSz1dw8WAQg9HGSLEa3LwPHpAfFPEUhgFkduRnajg7x3VtL4NPLqXaMmLR",
  "key39": "4VQ3DsY5b14yttA25VT7bosmCnLC7hFHmfuPEZFZS7mYA3DJrWoUV6HoEr2ykZqbVMidTJhFxSj7uT2URCA2aztd",
  "key40": "3zmbaSf8XrF3X71c13HnSd1b1rtDnqDpUpxvs2P5Rt5suJhyayzZxxERPVoH7qpT4ioxkFBd8KnLXfLLbmtaGqKH",
  "key41": "3uKRszA462FsYXU9KetWRRxbuV326Z33NEXqKg11QCtCYExqhq6tT4J4Dscz9hJXJruvAZiLwdK2RHxuPBsmq59E",
  "key42": "4DpNjL7evRxFrTLEy25pjqF4QUCgdNca18MuofMbYwNnuEQXD4Yc6ZtYms3uaHbXWWVf2K3Mde2sTEiqD66FcuDN",
  "key43": "38ujsJ8g6BaQrLCWGKfM5dAfVTT2rj9dDPdAvM57AqSx17FHegV3aStEwCXNqRweTL4GKa2fQn75zcd69cY56G7f",
  "key44": "3mAN1bQjP8aVMASdgYoMLzfDMcE2iTUrJ99RXQUh3yE5wAbtZRZHT85cMkVhFWAK23P5VfJ3iBxrZjV7guEgjfQa",
  "key45": "3usyxs6QcotkzRWRv5AfZjX5tdkhmTQep7FBt5ksMAiTWHfDeborG3n2qyMN2rytDKCbE2Ey2TT9FiRGPK8LuBcj",
  "key46": "5VzqZCCBrZfApTBUjMJuwChH4n2eBg4NTGxgLosLRvCuSw7XJott3ydtCp1EPhKBVXuAGVrnUdaCSbH4yTGL3Zi8",
  "key47": "3FcfGQJqQ72GBKD2d7N4EfB1jpzDV4Js4Fzqz89tDoVu1t9UhAeJJRm3kjxL5oJJDbc9SaWkr2BeiZf82rCV3cVE",
  "key48": "2f5ExcEA5DSuBpiioremGcKdR96peE8ocipjtbTKM9QB8qGArDTzsp3xYLY3kiM6NcUKiFxDyn9NPwp5jxbz9Y92"
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
