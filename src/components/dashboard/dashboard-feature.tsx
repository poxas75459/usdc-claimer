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
    "1mwJZpaRS8ZMpKEfXo7aaHr7mukjD2ndH3GGewkVoPaz5PogjJFxrfiJRCrZFidvpuUnNP58uus5nZBtTyf5QND"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UYCvQAwg5vT2NecAXfd1M72KBwbBNmoKog1fMWiAwAvHMxt8DRwTEaCjD8LJ8pDkTdV3fHTMV6GmD6nw26qWXQu",
  "key1": "4FZou7xmEG6qsTWHjkLqNxedRAcQBk1mUnNYjkaWDNvEXoMMkjw6CkFe5a79WtkTxPossTJu4eSeFE5ZVLdcHdWP",
  "key2": "3JBQynrzTMMezb53HyMUVXXoa8vX958zTgHBwP48tJxHH21mebpzwjFNV4D8ck4y7xqJRcPVrJPrFN7c5Hng4Gpm",
  "key3": "2Hn4CC8vvHpNbqgHxk8kxtBQWxihaxxGoycZYnXGNL1vuZ15yqyjGKcYL4fNnjkBMPEUDB6VRDN7zUYwkQRHtD9E",
  "key4": "26a2urNmgL27pCPbcvsT2pFiqAPv9VAocXpn63Kkz3CDoLyYpicEn53HdcKv11MjRk9SQ5Jt9QAPfnvcAW3hwJrV",
  "key5": "D3ZUfbLz1RYXMmAfkJFNGuiovuwFKQX2pDqqQCwwDP4ez29YADxcpvqiBVQcRV95JZupsrsbPwoi1diwDXBmwpN",
  "key6": "5Lw9ZPmcE62x6YRYXPfobE51j2ERUvxG9NT5E5RH5HVydEEVkY3KKw8DeR5GMokMgy1jnrSS6Gd8Ra2SJTZKZRxv",
  "key7": "4tMQKELmWf8jVmpcpw5eGUJJJiE1baEqwT33YmbcqTViJa6ej7YLmZ9AEiGNHC3gHLmSgdmL7qwNQE1zqtKXGpF3",
  "key8": "SroBuaE7G3nVMdwDV6erKJVNJJttLYbC8Sv9mq4A1Ue23bP3auUXjaLKqhmad5XNbYns7RPjzcfMKesuJDH2qiZ",
  "key9": "22PD5tAf8KRBSgX6aM2pzqn6Xdr5Xvi99zY1oB2uPLprbS3mAn6mJ6a4vbALi2n6hBixgB6UzG7o5Cp5GZLzAtVc",
  "key10": "3uNcV7NAUbgtkqGFq9nhHrtPaZ6q93RzpTLfa3c82MGV7QbUZevngihuTBMrKnSZFy31B5HaNLnXnQXjV9BfQNjN",
  "key11": "2yJdeMBcRrS7y6LFRUqJk22yyij92Ctim19Zdb1tPZVDdLqc1JQscJraduJJqkVPp6jRYVHCUfLU9V3Gq7fvYdc1",
  "key12": "5YfQ88hhP6nZcqa9mmSxY7C1a9DENG9MYvZrUCm7tduRiGvBTKLKmdPWjJYz3rEUnDyaTrG1FxS6j2TdoUsz1KwF",
  "key13": "2ANjWzBpzB4eTzyTYtVitmGwU78bEyjLvsvCBB7UbMyxed8x4PnW8xnoX9R7yCsXcyFgRXrRq4Cwh5pi5v6ZjWUW",
  "key14": "2bnf13yHtnUo58BFPpWk7gSpKBJx11BaWwd14XKiqfx54wP4JDxQDZ5mncgyJgumuQEnbf5ePT68QBhkQYVcQ5Vz",
  "key15": "4yoLdR4PJWz4ef7KepVKTHXMwBjwYDqoP5snPS1CtSvYGMXMMpbRinyeQseg1T5jTwPY3kAYcvGYKbeNJ3UoGPig",
  "key16": "2pxtcKKeWtp4XDxn21ijdTpTtDjX6L3aVvhN7yojciqPM18fKupYv5zbd8FKPar8Rv8CquzpzswAPJdC6vbsGDrM",
  "key17": "5xBPQUtu38dzkjFDN6ja1CtTJZHRCdXbwcEHK6YK46h9otB3dy2WYuvgGMC67mjuWK2v2GMunDwKzni43EUK8VzE",
  "key18": "4y2wmBmdqH3vdsBJYd6hSasCivzVtG7eAMvQXgB5tmKkg1YR3PRaEK2AmJiL56TdLdiMCAiFuz4SamuszYnAqmBs",
  "key19": "1g7EPdKpsAMNmHV3giRWXz2nQvck8MkoJwGn4VQMyDaUzd9HeKxYbKyGWANasd1yUyPGhL68LXDdYN5pL4oNHcR",
  "key20": "61Uv7KubPPpBrLERaSDptUYr65CNm1vDteTiAGafU9mAb5NaZs4PzUA9ic24o82KjZKfY8Ys6Us5NJ51wYRzPz26",
  "key21": "65A2nd5pz4k8hxfxPZcbWJcUgfTc1i8GAEVmF9eXDYgRytrdB1xYDCevvCvNAoUi8HG1xtAjJk36nJMBM2at8STj",
  "key22": "5LjtDS94BAjYMYNZMV8q4T7hxCwjK3WpogHMAvw4BtP1nbuGBjYyGTr4wu9MF8W1SasobXwNd1HPhpLZzZDUS3Zs",
  "key23": "4rgXhFuRzHPNTSea6iQ83ojita5VoaS85q4q6owqe7iSbgybF7aBRN5cTGsKxMNHrHBGS9a5uTRWRdBkBo97rb2q",
  "key24": "5Q5ujAHKeKsa8hTRUeDQYqyTcpnU9b5JNKyx9imcCHQd3aWYjmiYrDnK13WEfz3HYjrUW5QVN9KnkefatVC56uEa",
  "key25": "4UuLTftfvLd1MFPMJTVmaKavhYWFNyGyYV178c9tyCKDpbwSjTxsGrdva6tTw4mFzwshtkFGoJLVwqY48KdFR7jj",
  "key26": "zcrzUAVkEdyZcA3YhVK4geMywUkAvAN7yGASTmNeA1arMa3ZQxwtjnzGWvyE2VN5jXbULAW7ZrpDkxCHRsfUuF2",
  "key27": "3UKPm1PnepgwoyR3UeNEt8GRoXJSe2mSqKPBcvTnwgEuQtiEZjzLqF6XKSmUWTcMHM6r1kStkShJLYZyDU9DC7YT",
  "key28": "2DM7Dy33S4GWXczhUmkbZqJdJ26ubqQ5tzhGMaGauN5QaH4jgxzJtkJrYx7DUw4y9yqdxoZ3p2H77vpD6oQYLJsz",
  "key29": "2H3CQSPwsB3pjoix67vQcsRRqSFRtpJxojMBWwW4e1Ld5p4N3LP5khxanD2PsRKXLmj9ANgEPKV9pWra11Stgkje",
  "key30": "2d3bWE46m2Y8inThFJyz2HExbcFgTPATntgBkBogCxafpRBbsEB1G5TV8VhptxxsUv3V7Bo8QYHb3zEc4bjTQEWY",
  "key31": "b3MWFytcHuytw3tDJUbd7S9fffwA4N5CnqKx8tyRrJux4sTAhhP5cf3LycaJywEw79uECantJQKTVuVeErhNDDd",
  "key32": "3huChVpHG9mdB2Caksixx2PJrBhyhfrTDgJNE5sdddWtY2zSeea7QhbK21K3Pp4GKnbFpfgwmNSYSiAAicCS1YwT",
  "key33": "2df446r9nmcvSKnqNBMHy3oAxheZcoe8yMYr1bdR219UZX9yifRxrKjKBKgBCuM74yHX3AW2CtXMWfeqpazcHEer",
  "key34": "2BFdmTupGspwGdW7hwmxcvR4tNfvs87R7cQQoQ6cM46EZPEEuduKyuwsynb5QPyGHPVvRsAa53H8NE1QYEsW6Lxy",
  "key35": "4C6Ykn5RD2eFA4pfarz7q8H3zabMf6W8opjGfEc7eL11AzLbzTFSpN5CmVGzwwiF4aFnNiCrKYijYqjCrKipq2eP",
  "key36": "5y4z6muVhZpxMkA9UTisvcYAm6oYSHBStLyJX1PhCkATA4eYVzu5N9Cgo9a8YDuLg5T4NpAmL8ooTzhwQnsCSqVQ",
  "key37": "4G9rhfoe938mdHAP7LLbHAxJSrTnLP3stHJyoUVnsTkXpBoR4PYHyDYPrhQ8H4EERGDhupqT1JS4iWhiVhEJqkkv",
  "key38": "3Gy6KcQKWxFDn7GihPBZDjLy47xm1UG8bHZ23FuxP3gWSrZKGTm8gY9rf9xPe6oV1cNxXAUubsugoQscr1HEbTFu",
  "key39": "axGEgL6EgauhVtQXtXU54a7LGK7haj43yv4gazLGmVDCh865Xzt6Mka1yMbzeDU33hE3XYC9LScWY2BHL3vU6gc",
  "key40": "3ycHGUUCYV3gT4xcwvAmgxZNYfm5cQZWKUu4wwkJsmRXRfMY6Xm45bLEonVahyvqEyqQuKdjfoHubo3jvCuvZk63",
  "key41": "65CX6J4v43H2fJ2CVHrAhFdspTwfN2i7UsR9fT3F8Gd4ipMVC8rpNWEhGSbfuefCqSjuNvWSfSNvD3xoNqtSfK38",
  "key42": "5U5RJrtExjkawCKE12qKz9FKNjhDCEepErSn3aPnFoAZRPRFvjdG9QapTLj8HHTLQHbbYPhEy8TNSCApaBaXKvRb",
  "key43": "4yavp5AJsy56gbHjCLHqQaogr3vqbockmjtPxASDfFeSzDTSsPGUTNjgWCg4bL8cTsDBty83gGQEtZs4vYEzQxbB",
  "key44": "F6rzJMWtyMnahTLgheTtRYFdqMLpEuawyaeA4ULPVsRifAJzcVZb56QJfGKTnLqQk5LaGyqQUNEPSDC3hUW5QHb"
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
