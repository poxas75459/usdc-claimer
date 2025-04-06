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
    "5xgvYWZMVU3FBmgdSPFa2fwc2Fc5x8uxEXdQxCh6NMxn2oNS9CSKwHrN7iFWFEAFvExDvgMdFbBQBRi9TbwtZ5EU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MqqTv333rH7H7KhRchms9FYrXt36Ku23JzYznrQJERdwFAfaomMNA8e214i9VXJSoidr8hmox8RdLfuy317Z73h",
  "key1": "2ki6zwTkdCocxckRDAwsfug2MQUD4reZXjpPBdxcdbcjBx3geDJNkjKVs2rR3K3Ubym2k1LRRsiaLuwg5upKJLxY",
  "key2": "54gfM6Ur3kcBjj4W3tSnYkA8x7vYrTztjebdsNEWj1PoYqRM3f6GatGcqujvgosbctojFb9esbXWXBdv6cHHChqS",
  "key3": "2AsrEPCDXgkXFYb1ZkCm5TcQMTaqD74hsMo383LcgpqMuAKBe3hfXpJnQ5QaUmwCi6RWqa3nnNYvBRTKmTjDmo2V",
  "key4": "LjKEujd2e8ogaupEWhPPTzipuweJbLnPdKU6r1K3g4SzBqwsswMcB73BssBxy7HR2EppgU48nbumsM8Qd4UkfDQ",
  "key5": "65Yc3GZEs6gHUx1cVtc97aJ7h9Kc6SipG1YciJzJRsgA4RmRyLTA6UXy49n8h19wmGbXdwvEgB3LW2EcUq5RyV4P",
  "key6": "43Jbi5TUUq5kfGgQ2tM5QXxerbK5NMU8xfCjar5DaDrGGdSZkPiAbrvb3SqvFPTQ3xNE266GHw3sJdd8pzHCJqmb",
  "key7": "44NhJUwGtQ7FHy47MPRhwfstNmEByCo67yDY9EPPESGP9u1jjuVhfvK4Tm5wspajdTtoVzF4DroY9jidvhyPAg9R",
  "key8": "5g2egMSzb2wUYvNjeF16X4oKk9QoVJ6ghXKdDckw7GtffK8sS73Wimv4tN8pFxmER3nQFLoAZQ2A4NZWmQHjB4pi",
  "key9": "2qucB3rZE7U5UvXhmb4rGqa6KLB3pTiCcW9FuPJ2eip2kHXGptibXUbTgL2ubsEKJCyPnPobsWHRUciU6Zzqejae",
  "key10": "4b4UkD7ixJMafGD4juhkanyTePgp6YfavH8bwaT3ZVRLPzwcvf49cxwqjYxcPE5z6hdHaC9kKaG4br4C1NWJPeHZ",
  "key11": "5Edepai7iEQ3deD1qk3fZG1rgXb5dF8kCz2LC9BRGRPh5FoWzvmtdjPhQ6YWa4nWkWXoe45vaKJaBvKPnPvsEWvz",
  "key12": "qgoAQEaiHhcfKDWhFY2fCaXvUztp17qF1ebqLeWYQ4p5DDiTyBLTpaf8Dyb66rw2fDciYtNgFnDapQzERJu3soX",
  "key13": "4Pt4oFQbpzo5nQo2N2XCv2QjemwhK5ptasZGPETMeGgsnLxgz2WitY9TcKS8BDgWGw3GcUqSQLG2iRjNaN7uLwLg",
  "key14": "HC1zcDM5njTeBv7KkxvnGr2ZQwQZzWFD5wdFZeoy26STBfGbx3h9sRmjuN228HcVPErsUo7ykZBW3Bjgawv5prU",
  "key15": "54zPPwRVzstUTsCHYtgPRwEHy7ckzghhtfJJWcDKhG4Wbn7Nytk3YAZ8XfNjYT2fzw1D6qTf1WHcLqPn1ijyM4V6",
  "key16": "k9m6axLEbyxYsKgn4qoMeEFzCnvUUGVu8odperjWjZzX9W6BogGhd9wkuxFRtJyLuqNG6WANsh25CPiL2ZpFnWN",
  "key17": "jaTWXKvVG6kVm3TYz2ktGiaDqhVw5ebUhiWFRL8xQ9MZ5v3yKpa5cg9yVNVMakfoJeF9bKNWzyc2p1s5s2Y3d8E",
  "key18": "1EjAyyMFqBe5i24rcJyKXWP3VKAxCC1acckftXcXXwDz47mDEADKvnyh4VL98TA43VfFbxf2QyLBffbqyuP9j3J",
  "key19": "2PuPiBZgYyQ9ej6txxRUvULwco22Zh3wwru9uBFWcJEwZXo34R95iTM4pgPMSLWUp1kwPZe6gu8k1jTd5yL3e1wV",
  "key20": "3gS29KXMqhTC7VBS7XcEgFM5nkA75E4M3vkjspPYjFgsMtnMRZ7G1meFuBFxNzjEU1BRt24FnUhvAi4TWcu7NdkN",
  "key21": "5bvoUujy1hPDvHS6zszzNyRE4fpeyoaspsvSjKYR4DfFnS1rFseiZmZS9GfJHgETGSNkbwQD9YJio9CCJWx9MGea",
  "key22": "5M1P93jnhrPLUzMwZJckn3Xp7YYj3N8Q8FC61wDRzeVQT2fC5ngxtHZ8xshKaMYqGZdkGoWKFdN7GJvDG3azPUaA",
  "key23": "5v1HV6QPmFSKtafv7M1JYLgjvFc1LVntVjEcazxv8cFRcCYsE8SfE5vKQmNnJmWHBBmAZX2FyYAKnwjewsrBQYsc",
  "key24": "2FRee76U84JFyLVuR71FpCX7bv5KQQRQZCw7Kv5gmnQUTXZ7miqZy8m5DHt4JhJjYmxYSyhtCgpdjaMbS6DfBtUK",
  "key25": "4F7ZLkUuo1YSaxCg4n54zJS9GXAjQzfj3sKk3XJLky9XTqJ6Z3muBjJkTw5J6d8DiPsyAS1B2MXAazCSJd7vSvbi",
  "key26": "4oVTYbHogtyr6oVbwRamLkvXayeVWznXYJ7pYKWgMQ3UwbiRizVFP6cN7aQVnvkYSmk84vbKfhwpzxa4KjK9AncG",
  "key27": "4JNreTdeicjWTTmb9aazyPpJ2XNCn7XTMtNKiC6Xbp1WH7jFjBde1UQ5pqWNHrsKzAPz2sSHD7JxesZwFjSZumdQ",
  "key28": "2emKqDdtxCzohWsugDLCREAP6yisA225BoS1aA1mDypN56BFdD25jJBR9TrCM2Q4WKJiGdV6KRwZKpdNkywjxkET",
  "key29": "Zw3G2tM3fifzJVUm51wuFFCNWmeeTWqYoZFbeuMuFSkuYTi9VgvUeC4yCun6L8f7TK2qdCtTuDf8gp7ETPLaDdC",
  "key30": "dJex5oTT1geBCqdomLXgb9LvfqjwGJMjALywAvrrt7MXjJqhaDNG4nicLkbzPEgBnf1GcPNV2H13JvuR7mY39nj",
  "key31": "5FLM5K5Ea7uB3FH2nPdEEMqF4tYy1QE2PTZKKDtm88X258qtbVtTEiWtvZCLBJvzzTUB8eSCctnhHDM6Gg74ukh6",
  "key32": "tGxiCrbv7dWmnJfMkdAW3HhnVNGKB7fQk1ToMUkc6rzhmxWYhjEd3iiZq1PoTuyjgZ3UnxcPxKXvjUrACQPPQSz",
  "key33": "3ZWt52U8VR1DN918dTuK8f8gTLiTJmQkhyYRQSc7L3ZKEzMySXR2MqtGHE8YuGwNPjBaeFkiwzMyxq7JiJbdZ6hL",
  "key34": "4Y9EF8CynwSouBHR2ywUrJHPK6utjoXvo3qWhe6zNXA2EvyCoTWBUCT9gKWDp982xKsxTmiCNWPxAgbXN3pj51nD",
  "key35": "4LtnCdQotzmCsyTA18yN4MRXDpErLgFudhq8DrVAYhVHjyuEdNo4r2ZqasoF41WX7LstmFQM3WKcDb8XdbK5im31",
  "key36": "d1754x3mbNgi3FvoNMSoxzYzvjKHxccPW1u4f7Caxz6dJKuLMs1o8E1bsvg3QZWUzW7YYpK4o2Ae1FFGi85o9My",
  "key37": "5xnCzB6cEHAJf66K74KEgWHQ7onzY71FcHzR7Ysg2p43d8qPYgTGNEt6EYfVDaRuskhPnkUteM96b5ueewiiz4yt",
  "key38": "4M9m4mLV4o8gBoybWePKZvzuTk12h8p7qAoScuFd9vJXYo3pb557PY2eufxHHv46kUxzewAUu7mr1GKLLTmgw91X"
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
