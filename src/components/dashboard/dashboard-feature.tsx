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
    "3Trfa3LYxMKQffyShTcbKCKtocACXQNzqPGgwcGVX5uv8j7X6Bw1W5Viyb1H4mewo7CV99eZogpsKyygsomNo1J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XSQ8gCfKVvNAbXwpiygRwkJj28hiu6RwobJBttZJeSgAzUrXeig6fzb8qdTYjN2CiZBzmicyxxUHDtajDaunKG5",
  "key1": "AHvmuccPXassDurrohRMnBXMwGiGZufKiGWiZZwZM5xa7LsRjuUDcnERHCtEUcB6jDm5xgALjEZ3qz9BaaRNYf7",
  "key2": "XWJqgdaDDDS1RCijneDhM9t4fZV1MShQCg5ZTiUHcoenP6fAEfkQRx39WhqVyTHvVYZ2Eq8CLAAondAeQVcvoFx",
  "key3": "5GVSts3YPgar6JY9tqPLXechoNPERFkvsEfGQD3MsTGArsFYVj775PRkeL41pkfWFBmFVwUXdB64QmmdJm2ZiTrr",
  "key4": "2eH7XKXKvieutYwyA7w9UzjXWkLqV9BeirRmsNwW1vDFh6dTocfkJndqpvZsAcVqNQdxEWdWrgYayQ3Y2J6m9DrD",
  "key5": "2epAc9UPw3TMZzmHM1K3FiruuoBC5y76mX5jSWoqvD8LCzDm726EdAkpY678RhreSACDs7wJWRq3AqrZpQvogD3X",
  "key6": "UbHBTQyrQ9NH6mYY3j2LhZb3Uh4yWy3ihgXovvUrvks1nT1JS7aQdSsC9vZs7yh76CCy97d1kwP8pbGDvGRuCk7",
  "key7": "3oEyeANek14MZvARjWVqhugQTktENzuH962etVWupArZN7GYqoh8BrmEnfRcBY71b8Rkeav6rxbST6TBoRP6qiHG",
  "key8": "2V2ekKke1r2fU2Xniy4DEpLayhCSmvVpTUTyAsVMRgSxCgLHNiFHvjJumcUXYC6xbXzsCfvjp7JFMHbwqmptA3pQ",
  "key9": "hg87XcdbAauckbXDPaA6pmQckrmhva8fVkgGaJsYvhdEyziBqbM3jG2kZPz8bL4G7buTHw9fCYNgweJYxw7mqMB",
  "key10": "AwtJxRkoKwwMBK5B8QpNY7q7MbqT8RLCe7i3T1pfsUUTe1gCfEsR9DqJDd9F4v1BksNqd32U2sRpsp9nSdgKjxB",
  "key11": "4yAFm9fHRtncKecdYkmwXuUKYX2ydvuZH2q6gyPHexfFBGMEC7cc7QS5SsetLizeq4kMZHAG4jS5cUoeNHH24n6o",
  "key12": "39U2oJyVNmdkpqk2WHgAUq8Tro7tK3SdNMH8JkyQsqktMdqfKuKV1BrqVZn9NVbMEa76vCgM8X4yCGSc8ZsTxPM3",
  "key13": "9yD1ATpuT4PaThB7RoSVLNGGKdT4dVXHrzKDS5ao5G1DPvn381Ffwqzi7wDYoyKqUdZff2tX9yiEcTCHg1REQ12",
  "key14": "4ww6qiusjbj9JHMSKgwdBEhXkSCQRZU3tTC3gDEgmbu3y4o1u61neLj52JH13K8AW8FfvQBix7gsWr269LUQAbMC",
  "key15": "hkdGU6k1216BccUEaPXSUGBH2rSsj9suWm1w5tnK25JNGnkkEQJVaXiBERLRvk3YF3Q1ta5GeogAiK6r45ZGaA2",
  "key16": "4DoR4r8yf67beQv41jyV64XyNiJa9eriKVLP9vBPbaXLXJXMoFg569Hk6F4P5zvcJg1BT82hsGHr4ZmCwLeeMk2V",
  "key17": "64F5b9FKGN6ceDzDeuVJaNTLyABqR2RcPKjjxqNULdsNsq8dgfdy8m1SgpVu2WPPXFjBdFv98yCtHb3QJaYFgFmR",
  "key18": "LHhwVh2kuKQf1UywWKJRKbmc91inEsDw7KMGgAWtxhEiwckUXYF451xUFgxBK3MMgjeAqrUFGxvZfTJcSDfjdvr",
  "key19": "4BSR6AX1QnDeouCa9VET2PeXkTL9JtmjE4wJKhWm3ER5a7E7oXqMFkWFZR5ZGsXFSke18WeSLhjPmi4zuegmEtoD",
  "key20": "4K1XMebN6woJLHh8JdA7gPkkvJByb99FnhcTyDc6cLmDsByhGPsCFua2tiThuQWSXRckN3At6trLQiBfMnqrwCZz",
  "key21": "2gb8KJy6oCgQUASxqZqvbG7eBGTDirP7Woe8M1dm6bbvP9J6ABpAN4YhV7F1a6ZNox9PW4wpLwZ9PryBtiGPMnqz",
  "key22": "38zU2RkjuKzNRCoj5TXPFgpKkDyPpKb4raXiQdELGoxxPx4s81yBNPW7vKNrvdHAfH8aWwXYogKqAQnMPtHcD68Z",
  "key23": "4JsbxT552QZpVFAEEUnRQvR4UqY3qdkjtwvg8EdbX94VPAsNVTKWyKDhV2k198kA6c3WE9e7q3gBNauBKVnxF4fT",
  "key24": "2PrDJ7TiQ828DfS6uBfZRvJiJr2PDkjjDXAGL6wGRkbQLaF3Y29wUi6dkfnrmeWrKTuX2ahvXM9MByUba8uPeHV4",
  "key25": "416G3iiNFrkLfBPBVgcrUiygYDeFMQ2Fx1RVqoWGkPGQj7bN4dkeJ279Xhe6Z4yQnDVYNQYifgEixA6p1L2X22V",
  "key26": "kfyThvkmBfwLVYR48UEXQBHFDfMKeQrHjtQwY5nucTAZJ9TeGTb8D4ivp7MXqKsCXuBusqABvY5jVaHvgiPH6xP",
  "key27": "2nrmkticzzAYRYaiH5nQrCDUy4aqxejVYeKHmyhDS94VfwNQQiMvBgyymjPWrUcyh7GF6kCJ6psC7hRibanzuggT",
  "key28": "24L8RQj59remQDU49Mk5yHTephKmn3uZvnqu2NFGmCKE4BfrotP513soxxRqRbmzyMtuJWUUo1L2Ju4zKdnkyLXN",
  "key29": "3EmyDLYt7FBLMvF1nescUACaAZtRZuwCcSxAEA85iZhB3jKGTGZCpfLeXGSsfnwHgtJ2PxMTWLDFUoMqgWmp3xc1",
  "key30": "4em3rbeeY7D57qCD2cs4k8zgGME3bmb9Sg5FqxUsJuUnFRAsDv5aKv3xRLURFJ2DB7FPdEX4QSQcmA78ky3LoTw8",
  "key31": "33j9QrNrgX3JY1JBMcUiEe93j8GUiCcvdz6YErJUNbECa1x9RgHQvoDp6zyqqxHc19gLrSFAGBWY5XKuhAWuR1RD",
  "key32": "2aujxi5F7VLvDgc3AkKyuRLxrCP7RttcC67e7sAXj7HyZRKiSzCKJc4wFzgWmocaagNMTcbSQQaY4hUc3FgrMx1x",
  "key33": "D9k8zgLn7GYRp3Sr6vm1a7Aqt5zzqxX3ymW18S3T3q9iW8B8gmtLvXKmw4AMk1ood8ma35HJQnAWDvNYi8crXie",
  "key34": "cBW3VxL7bz5EArydNnZELUuY39sGyvam5ieujsvNJsXAHHxqKWg1S1iZ8vA2v1PRGNeYopFcXpajoTkcj5AHxxG",
  "key35": "37iJzintjpWQrrF1YSTSx1UkQxTeUUnxcwip5Fx6nQJcUG5cXk4YAfTWAocK2GDBA2QUe9SKNQGpxSiLRuzNU45R",
  "key36": "5n9yix5FnSkHWcS6raLhfjFNp96ws6Auec1pEaDB2LbYKDKaP5bKuMNpKBUJv3mZ8uGXUBqyAub6pC6gkxDNmQyB",
  "key37": "3hL83GPU6mGMfApE1DpmQZDFUm4xypCLf5wk84qmz2gnzGHCQceam6rPxEXs2UYP4TQ8F7LZ5YWFcMeUt1Pun19d",
  "key38": "49WzXbXGBLKLBJ9oWdok8nJzErAgKGogZrj4LxwJGcg3mkKKVbmfJkaKtzEJfYckCjgXetA5Y2RRFbrMhCDqWDRk",
  "key39": "gYqqqpoGdbE8RLaBti4ywpBX1yMNBzRiBV7UFY3nQJRoiLZW5vzFTaphQGg12U8CWzGMDU2zuRpRNoRxaRKUQY2",
  "key40": "vtCj5LzLt3aEYutJZ5ue25so7sWzktudHFsurSYzzT8W868irhne4qqLLsjCwRyNsmHaHqJCkgjQd13GGV4VveD",
  "key41": "2TwJVsLvaxzVN5PnDCS8G6RjwgEVBoUmBi8GCe3Z2GKZu4KNZWspcULXuHFjJ4SqP279BXoW5eWcF18hXZGqRFYn"
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
