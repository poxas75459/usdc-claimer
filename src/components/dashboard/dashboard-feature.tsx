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
    "H1qLfe55Pb45886UFjgBxvQzFH4tKWfCZa9edrKtQVzfnzomatWwLcgBc3fpXbN9HLku8s8HQpNQCSR71LoYvXw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FiUSjqdFZuKVm9bor2TVgUqJ39zfjTmRgJWu8bgNFQaSNK4c8TTQC8rmidoxHCjGbxqKZyuz7wZbhruqRm445Jt",
  "key1": "P2AitzEnUTDHRhvDeR3UcEwHVjxFmR3pn2LjtdmRPbNa524dc9dWAHabWxTV2oFZfZ9GExbTos7ehVG3ZxgKQcH",
  "key2": "63Dq9CamLtGpTdMyqDAc9T6ZLQnMHoMAwaaqdjiKmVTYd4zqt5kByy1cENv1YbzwzBEKAZDPxKxyU19UASUFBd1L",
  "key3": "37rRxFYdZBthTMeqTmDsHaYbKRjMB2foBTo1CKQaCPAquCnnJ4zkNeHP2TaVY6HYoGxctHA5ihTDgTwrFe7HnLDs",
  "key4": "3ZzQtdTkCp2Jtre69Ykik1WPDZaVyQNQaLvjadHvPs6aAKvPKvqDpz72o3v3bFi5hUSUR2YDC9rAQoEhXMEBUWRz",
  "key5": "Scp2zrzHeRoHiutUAsjSBfFHT4YVJbyRGqu6AV6heCqgkwDhs7qk2qjuW5Cqg4h8LSyuMkx2AZNAdv2G3bvpyrd",
  "key6": "4CfCsg31SNWRq8hMJtYyzSjVMAV38NEKBuuz1D2MzdvjsVnThWgr1SCFhNf3sGoLvzZoCwKnjhTA7RsG1GjqXS2J",
  "key7": "5tHXToSGaLu6JjHeZKobFxafX34NnU5dBdDawvH6LKfm3cp1GZLvUsTV78Y1xrHsZiJ5rQ2zFofkSrdPWXKy8bAY",
  "key8": "4C4JEVCuEnxoVg8pevt4baYyYSH7ZWuLKnknd4Wum1AnVedjZ2uEGnk64jyxjEEEEQvK66QSKi6Ht3ZnsTaz3mpj",
  "key9": "58CaFkK1U5Rtgi3RvCD7b19tPdqPNb7hUtzmbjW22a7yLSKQJzYH4h2BzNq6b4ZVgsvgeGyhPiyf47d6gsrHWSdp",
  "key10": "2SNA1KhkUtDu9RKYmPTdn3JKJQBQWJtP3dGWfAzNzQkNZVCZK6JNkoHpnavnHVK3rNdftkewFbB1daroSctAjEay",
  "key11": "63nHAVJngrpz2yumkmma2Zw5SGj5iArktTZzNAn2mvrzvwQ1TWReg7hfxnJ6F9KUaAqne7Q5yZTbg1kNEuruXEYt",
  "key12": "2rt7AYWguFVY7RL1XoHPgQgUuuysZ3BwDjrkrRzHQeZyrsqo7U1AfcPdHjwYMmh9WWGwjDNpVoRqGYZMPZaNgMxu",
  "key13": "3HCeMF5x8SjxZLMdkqRycWH1bsZZGRU4HiuDDw6zwttFBSo7jGBpXeTGHybJqa52s2J8JgMYof8BgpJr3Jky3SJ5",
  "key14": "57TNVgvnxfETBdHHFgPBLbsQNJ9QQ68YuAv5Svz9DeDvcBmF8zQkkdm2ZqiCFPF1EvdZRXhJHEwVZv4j7o7SN5WQ",
  "key15": "3fTsGwg5sesHULJFxbFdM96KBJrdyzYpu8AcPHE6f87b6AfqRFVxXskiaf15j7FdenXJPTRQ2X6ssDvraYvU2bjC",
  "key16": "3WUn43fDEJpyCWTCnSBzpVM69o19VcGfoWoJnvsk8tuptnpqq3e6xYJuPtW8xWzWzSiKumvqRm1jB9uVqVi1BMMm",
  "key17": "HmC8Tdhrn3h5h4Ur8R5ZX5DN6JhqyjMgDRoaVcpU9RN1vd5eeqXxxoLfy8PM9hD44hHLU6CP3Q3NpcRn49WMG62",
  "key18": "3KYgtNnZoeC2SZMLjun9Gv92BTi7C29SJZN84mM524F8PrTjWKSPKYmr5DLV8gzJg5oZZtRDKtULqCHpTj1nKkVE",
  "key19": "2Nqkpqm5kNqfrx7bsuMrQCcg2hVM1aP9KcNDgeRgCw9iaDaRij7SYBTNRcR9aECijBHAnayXGDwHnxAyo2mRtoiX",
  "key20": "38AV2H5HcsiTCnBCzVzsoxW5R3jk2D6F1cTwtKNMSjiePY7cKWzNzK4gEALMUMfhg4u15A27TcBE7QGmERYUJUUy",
  "key21": "3y4xV6Am7EQEi5TrJTVhgd1xWt6Topt8SnkCVy7iV4ZYGDrsH5M4ixP1ZUHycgjHHPcUf2XdoHnsQHyoeMkuBoyf",
  "key22": "3Fouti7hvERxnufyQ536tKmCyLa9UKsnU5S6bnvWKbz3gwmeZkHEghcjuArKGb9sbqSSQyyzgbv3FACb79EdYsg4",
  "key23": "34rxFLVJsynsqn9Ju9mxvRGm5wE7B4TrbnHHdEq6YMnAKRgTbaAJRPN16KqAZ5Ji8RCkviCnjNNbzvt2nZALDQjH",
  "key24": "5VMvJguRgc6E4gosPUVNzncz7cQ8R8tfQdbEp9hVaXQ8GWo1p4c9KerzHLXz7vvbNYAxujbc57cF6Ka8K6mWbJWp",
  "key25": "1VFnPVQeNXctERL6JjSKX3bDdfeadDU2LfFhio8mU4MwLWy82KjWviouSXoEcXLtX9XHsjNd663udfsbjgyRB1T",
  "key26": "NZ48cRvFXCzC3g7iXnNiQhZmgA8ZuvQDv6mFbQGg66vZvcydrPqar9enEreETJASSWk2znsYt8QeGTZ5fCFJDUZ",
  "key27": "4Na66DcTvh4tf9f9rBTPQXAgCo1psCNDqmmxfy9i6Y7PkXWohPXjesDipUYUo7wcu9iV8ha3RzCQdxXJhLowb97m",
  "key28": "5j5HpNtYZmzbzbXdLj7uLngrjQABAZBHiidVczXifVRtQ3gggP3kdoGn119hZDUhzmjUKCz588VSrpSkCoJG2qXS",
  "key29": "FPKxefpnxUWuNhbEncpvz3BpstyNY18YBc5ywmAFRS7JVLLAzYkN11nGqDgrzZYSLerh3KFHwUYjeboTVHertkn",
  "key30": "4oYhD7d7esbqWRCtQc7JcaEga1oPd5dxpFmM7pSHGkM4zKtrWwkELDAe6m7scP76riww5ZhVSWhuHq145qCtkCVe",
  "key31": "h3Ej9qDvhWYX4PYohQgY1GhzsG8Sz546AkgNCGYZkpr2icyyKg2jPr49J82YzRogzxLhiu9ixezN7EZvYztCk3P",
  "key32": "4eG6cV2Bnz2MQXfzy9fY3LGhFHV2ZDACL9rVX8oewgABs6eBepnoLDWEVcgEwA9EqCxeciSifjR8b4LsTAKKMhsU",
  "key33": "VBREhK3tvR3Dunjz3yHzqn9omdbRNXB9H33PxrLbvYKoscJMzppd9pmSQZsEj3fLVDMduSd8VtLyByKg6YqUTVy",
  "key34": "554Yn3Sm3CCHZjWDWZDy3j6xBs3uaNaRyjZvVmFQLQYhuzTAB5Dnk4gvKp4eqVeoUvyooeokt7TrTDAY5ZwHJ9DD",
  "key35": "4njz1M65Js6ywVeSzvQCVUeMf7sLedL1xhup8YWJcdHieqR8hbGN9yNX99nLGGWaNh4a36TjeVf9g93i4YVdGdM9",
  "key36": "32XoECT2Fyv7tmvoueW9nXstv9ymvJ6kSPwm5A4M9EDC4fg7kkEutgPCNztoUb11xsZdksttcdAEjVBaPXVusEaA",
  "key37": "63JW4VasQmcRaMha6N7EaQXWGcBGWFdHCwQX9hAHt6qqMVNvh7duq6mGo6mmmjtMzEsNCnhSX5oKegEz4WeK1Sva",
  "key38": "3up8GfoPTfbbRv8K2yFUX5kv6jPF2AzEjuBVTX5gk7ExbRNf7E79KRKs7vPr5GCEJjNfWLDYjeEugzXQrJBLVVU7"
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
