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
    "599FqC24mNJFQyfn1zgyCshLD4pC6L1Toq7pj2sStkKLrGY4UHDEfSbZXDcatKqQkBsjfeg5qv8LAmZR99imSqhm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kRsbq6sTVbxPdp3BBEkTyiHBZ2rMbSK3jritJEPu8kBgEp6aYiEA7jz91qY5PmsVEV1LE41VEfqY1Y9veKnbTcb",
  "key1": "5zE5TqxrCWRgdNjNi7jHocZ5PArzDSxZAWbGEJttD9NcbNsoXMHKF1Fv1QNfX3jBF8DYxvsdKfQwSUpQN9hgWWQB",
  "key2": "4rcnueAE6wceUzFezvqc2L9KPEMcg1FdjAQvLVdxe9pFs7JjPnYFUGYXVrSChFbBRtopvvYTYhoC8LzNuMjVoNsD",
  "key3": "2g9ghooXLYAwHJ6MbpCJVU4pLV7gCF1HPbbsgEhiFCczSd1PW9ksJMVePifZnghzXjXunVbX24dNKNSSERvtnEeW",
  "key4": "LvwYxgnHwa3hR2ThJirPMzmHtPSjiDbrhpk7E17MAZL7as9DpobBNArGuPXqRgMjhquTvFshUax8L9hLeUacqRF",
  "key5": "2ke6PYTb5SUSuxcs7eZiQHKnrtgQqFUe8KRQRk4ujp68LhAoQ8V6iSyFgHnGRtWurFSy7BS3GppHBTCy8HGPDjWy",
  "key6": "5jM8LFtnWgWxYEyEDq3NYpRgfoTswcuRBQD7MVqsxA1dLnC3sBZ6hBukx5uvTgRnH8AAu5gskbmbqehLEp9ECda",
  "key7": "3XnGCV7VFqzQMCZteZxM84f2xZqMo3ExyHFVDAW8gG4MkMrNpoCzueZASo1DP4WLGhyuY3koG9EakFeB5WkiDyXN",
  "key8": "4hdqoeuHUD7gYfbf7gqEwcyR63PWFfWUohV1r85NCDSJTnbVFUD5foZeqyKrwbuESXABg96i6LkimpzKf4Q74jQP",
  "key9": "4rmAVXGtoYyNEiVdMaEfh2aSQC2Y7MbHAqJV4AFMon4utNH3pkahGd9bufrjQWz7aLjCii64CYRaKig9c9kiPZd8",
  "key10": "2NGxoYsU1thvFCLkZdUR9MmyzmGp6FvAQvEk2gTDDyXrZJggTTpzAFAVUaUKY3LfXtNjvHmJx5dy5iwshP5xvefJ",
  "key11": "VbwLBRKZ6D9NiZioPCP23DpsfhPNoGUuUGEGPgaptigvdAa1kSUqfXBLmrJ5DwEnymtpFZMHPkJGBMQkHgYYuoS",
  "key12": "zGyrG3ZDY8gx9yQnZk99gYnjmtS18GVccRRp7sKS4trntGkTm9LUnCtj8nvZyakMw7gtfE2FEo7tL4aYTYHtomV",
  "key13": "4uBmDLRoZWp89fGQcEXfMTmEBi3cd2UnMRCAwpNTh2UypfxbrnrA5MYUddpGwDTU9zGFn8UBdH4sA9181cctipkJ",
  "key14": "wxq9K7wMJGfPUjTHWFcZhC3fvPN4tFyvEVECo6UKdSknYH6MAATso5QWe3YS9AYcd3sFeAwZzvcDxboowTvbweT",
  "key15": "3Bgxw2i1MGie2z7Vdc788dANDN2V85RuJ4LkG28PvAWAzpZCKV5rSjZqVD6bgfBj2wP3TNTuS6BhYxdBzRCK1gjC",
  "key16": "5WYTSdxbbN5GKU9izL3ejnAStLaEgZ9aRrubJz6QL7WinxmiX6FxFJoK2uYqKZududYvHGW8ALALCnR6Go7fx1xA",
  "key17": "62xACiufSH27ruC5Bopi4E5QaCtpaH2hEccNpE9TucYyQcXjE3BaFxXt6cpQVBTqMPmZX9n5UEv3Zvwj5QNERMQ4",
  "key18": "4p9iMC9kfwa8ojKd75uCJogkQPLdH8hRWy32vvjzCyZMKSG3DkWD3XJQjHisjREF3Pv9AcBHpUdwpEKW8kBuV2sk",
  "key19": "3v8QqAoB3CphJxVGxrAgLSirc9mkQxDYPTqmcrvN6FK5AukAcoaD8RkcVgimN4HEdccCY2fW8tCC22wscqwxccRP",
  "key20": "2KjPgqsz1t5eXAMHeQXhuvkBNXYfHxtHX6LDMTDK7C9TmZmGve2SeY4pAZfk7LXkAZh53863gYzCm3W8rZ6Vhn5Z",
  "key21": "4bcj7HFm4fE8y9Eo2VNrvGejhdiVV4XyyWChhTtSMcMwiFJRt5i59HNEVkjnGHpVv2HNHsUHXJVXPa5YH3ykWJZJ",
  "key22": "5gNcaMk9KWmq4yX4bHEGP2m7peGicuFJiXFuejj9ZPrQg3ZqjJKWTcENEArv47sEfnYpeW2o9mUqjtRnDsoDBLaP",
  "key23": "55NEcPbKH1s8eUaoJQoCwczS38HWVCLAe5e81k39TcbqgNAXw2WvWkv6ZfqKSg2F4JCuF86kUd6kB4Us8ShqG9xf",
  "key24": "4HW4txmm2E8p8p6or8BYsUK92nriAysHSeiK2JunNsJDZyed6qsgxEe8HwTyRPBd52XFAAeS27yV7hm619FqtGeK",
  "key25": "FUTZfxLfNDVTWQGMbWtrFhf1Wx59Gvy3oD4Te4jJXUutJqVMhohVoZL847HxJrobg1cuLniqDBzPhG2SnNjbGbM",
  "key26": "3g7dGymd7BsjkJ3GVpUEjwfDDoFwf7651RAxyVy27b2x5Dzw6jydCzHKs8tiu12PTugej4UU3LqGKJwbjfTwCPaf",
  "key27": "4gdqHdh3XzFvftqobvUxbppahMadTYDK4Vwa67qimLSPWRL8SJbwW4DkTgEV5qQxYrdwPn15NWZSkSWW3nso76FV",
  "key28": "198NkvXRYPnnVAmFvqCiYxy3RCHtTBWxX4oQRaJCh9a1pZw1DZNv9bAC8zD5yk3gdZ5LmNjnNrAf11jQX3ehgGM",
  "key29": "3iVnnBCasLTxJwvxfGJS3KxcFWtV7jAmE4tW9Zf4fwEJR6ZjRYKdLnyUZUrHWKbQbxAY7yi8dVvHxHvEVa8rTUbJ",
  "key30": "pPiaYxU5h2EFxuptvLFowK2mPYK4735w75yAwqDsMZbnSUhSRZmj2Apc9JjaWnb3sWP9sZvhsU89ddogaYcKqar",
  "key31": "2PYgemLXFzidjrLgnfa3WJEStDEh4KDBWphnVzWcZRAcAVB4q1VSAfFegqY246mxKJXkZG1TqdeQvUambFVQQE8a",
  "key32": "5vPHv9fLbR8EQWxU5FEzPKJ5HGZhJ2XvWkw9hdTV53k1aTMruLuaaNw9YRimrHdW4XRRQdJm59ySDEkB6yBEXyUs",
  "key33": "3RW9UnpRUFE2XimgwSc3GzU13wRgpVL7SHA9k5aj5ZCzDQ4uQgfVQ9q7nXKWASvwazXusmWJ2efmFgq9rAoERMoc",
  "key34": "4gxPHwidshEkfcpTkB2k2ABhD4D5Ee5SWQbnSJd8GEvv1ucXkSRnnqQd9XDZtRniFEeg1SGaM8TfB1WEu1QVvuJ2",
  "key35": "2Z2HgGzdWVmrX3F4zRkLCGWSSwSz19rNcBTXV8WvhjPDA7KDmDjHdnyGJSYXtRBYoh5Vx9DTrnDyL7wuRZ9BMgta",
  "key36": "2ssd5KWMWiGBW4LbcBQoN8df3NLUZKuKKJ8tqRY6GCLeAuXFwFTMfZKrs1XSdHafBSLKVmdfT4pAqMR35pz2bJTr"
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
