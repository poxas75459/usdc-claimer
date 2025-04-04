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
    "44uDcuNZajAGZUqtpeWQX2eMGd7EyrdHLr7iqVWPUmXttX6o1XcwASAgUXQWdJiLV8Ez1qgk56oBDH6TGhdexYfk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h7rdZFqKSRZmoFHCt2HGizuBhzHVED9iBniMskAVc2PCDNNvUuaW3dX5tbQ9EGVuLmoTYbRrRkmqnFdLpQnw3CG",
  "key1": "5rhCcARo3rrUsgcGc1uDAU7XMofqhi3KWnVEYZGBs3fPPky489WStKXB87Tu452cuovAx7ULfcBxyJQ65pgyLavb",
  "key2": "3xSwQekeMwzKb9rHvm1Xr2y292Fz3M3EhfeSeQNZPXfAgxdKaSGyhXaDdAiLbJuZpqkwvoefBPgfjbN5bEswCp1N",
  "key3": "66VAPBSB435MFAratwgyc87G9SwqmfHigMomALNPidH9Bo9Pa8QkGz8akS6QkAwJPtV6bodkGLMd9YLjfzBEPt5r",
  "key4": "5Q5gkiNbuPVPummGLYHy4uCZ95wqCayQk46FMgkducx4WQGX8W39p9TQfY5qRqvyzUe8qo789F7feyTrCitA8Lar",
  "key5": "3DLZKh1LoUFbGxubVkWqUYpet7FBpc7569VXi34iz7WWJW16h74fx1PHX9pxXp81xbnNJHT9m471goZEdrAXjpoR",
  "key6": "5t9R68PEjjdc4TaEBpQcZHcoTyQFvXCU5rZkX6ELznfaLq5cohgcVy4dgYmbfWg8poB4XtSQxa4NCXiZHPJMJr5b",
  "key7": "HSopWuJJQre5nq55gLJSh5jidJg8jJxzQagWU1GvnsqJXPvDawNbXCDYXfEuh1GqwGwEUjPNCJxpwL6TzD9PCrv",
  "key8": "2Jy9fmfivu6j7UJ8cVEYuC53UCjBr5uq64Lawh6dPLwJh3z9P6nytSHRhn5RKy86GuPzuL94vtkXfwEEyPgmvQuG",
  "key9": "2UcdSB9NcJX9TdxvhBouE677x8r3f6sWP3xQZSqM1Uc4hVYzpAGLhcHGMZKYL24a6nDCLyKaZaVQcqmhEwoyRNJC",
  "key10": "4pEQJDFxHwa2Jm2nUG5NoosNfwUcVrH1wXpQcmv2p8gu1WvsRL3d8mxvPpNKpmfZYGifYKaE1RLtT7tnWkivLyGd",
  "key11": "2ZwS3PhGK7hDtQn2yYS7EMdtQ6pKZJPP6pZa2xeeeLvwvTzSpcw4wUukZYNAPmPu8MvEA5Q8b2naW8y5LWz1Zino",
  "key12": "3X4BGSQgzWrvQSKaBQm9Y4t9vXUJXqq3rwXeahBx52DvkGsn1GppfZDzRD9UZfSvkTFhqSGavmoQauiZSw9EtP4R",
  "key13": "3gTBPJbgY3RBqEH8Az8NeN1wSPpudxxfSaqppDB9T5DEpijW39RrURnn8PkhKq7szZCrhPLbTnRJ7JPdbwfbMjR5",
  "key14": "3QyoHVwpbD7SXj6mGN6fP8AU5U8Ka1pBUHMy7xa9cMn9mZH2bHdQAGMSTZVxVS4KSGVcjP8x8Y5jfds7jqFCAd7P",
  "key15": "5xEYDSz4dzeihbu2vPYQF17RkaoX5L9YawNw5Zwo3vRXYJG3PWXX2ZnJjiQ2pCna3X5Asks1vQjNf9AiBXBjXrGn",
  "key16": "XjCmYkjuLwZc928m5Jb3YYN9xbtfjWwbMG9qvGzkAaweYTptQw4fGkJJpsCGC1qL42pg5ywzXnaj6Nvp1ELpoNh",
  "key17": "3DCVgDcbqpJZ7CxbfJ74Pd9Cj93eLqEPuU1HSDVsMxJUXEd2N1zU2Vm2jKarSWHoXYaEaNrMFUJHPWejtWwY2QVf",
  "key18": "43F2eHBXuyqAxL2XfiCkBtGns3o9wTXhngogpT6jfStB2aK3EB4ZZVSrtqitYacz2JSC5JFr3agAtbJEiT8jbapL",
  "key19": "4AjGdmpAA7K3j6TXJ2FgaAyE5kxRC7prztbi7UUXVdkbfVMoRNkGsVRHnDCdwgwqsJpR9D1y1qxgeWftdiTQQQH5",
  "key20": "ySNUm9RdfSuQgFAb5PgfL5prt2PWAdxmQ8TH7g98kiCMZL2cP6L6jy82aTkQbGYCSzhsSPxkB1h16TYtZU19tm7",
  "key21": "LsyHKLgBzEKuyQtpa6KcfdBcQf6TQNjup9AdP8Gpj4eE1x4AnQEkhdZaWQm69kyJpWsvUdhskvgi8oay7oykG5e",
  "key22": "3TFGJVzUHwipQcMSHn6P4h71toU5cid8sNMpYZtxkyV7f9fLhAnbvWKicp58eLBkGcmSadM1CgPEsfB9tqkxNYCq",
  "key23": "4TobonNPeTAvorzsNntx7SuhJcrgwq7oWxxDKJt7qcHK2pF8Ta9yHA2BNuKPV3cCwcZYFmVShZB3ogBK5MXpZmku",
  "key24": "5pVMz7BtQKbX9jihSWsYY8CYUH76otZMc2UmRM5WhyJF6WBL6tM8L936xmQEpa6282EYrFZKbzqC1SWwUy5eVyDg",
  "key25": "4vtMXDX8aQhGMoxtqfdtjxkm2LH16MHRXG7pfoys5A52Kx53JJveVbsKovCgJpGYtBktyd9gcTmoHHcMsw1QQ3bX",
  "key26": "5Ta5YQkzY6MrQ2YWAWNwk58RDu9cGGLUPjhi7BMAjjsNezqhPMEz27hmvekNUz3S6Hak2qrAsqgVaAfY4yp89LLo",
  "key27": "4rL9yuVLZoKmVVFpPB89vJ46QWpcGA5RE9nrwBFqNrDAb67jPYbVTWrPZBYK77aU9pyArZ8xKKs2KnncvHAGE7UL",
  "key28": "5D17CGY9dy8zYzQvQu8KVZdiMVcq3xQnk6cnmNjwTzGtwMcSgLPHn3Ead4472AzVZNyiRa1N6rA8NA3po6J73hbX",
  "key29": "3hKSAZhShhiB9yT9QxTXn4AJ3VGMA9KNaarNQVQez4ELdDSFRMrYmPqLfa95mcUKNMv6gbYvughMswtDsBBqCeVz",
  "key30": "4smo23xE2GSPEcuRgevdSZ9msKweT32Fr3ELbJ6YEzFkkAM4ps3g74eZ1cgDxsQM7z6bNN44gBaUtrUQfdvuW22S",
  "key31": "2f12CB6PDTV4xLQx76rXTf2JjdrbBgkHhntymNegyA6k2fZ3hSRukqEksgZ45EgNr9MkYwur3r2xVZykgSfFaVy7",
  "key32": "3weYCahNNbcSfjrTnnMMECAmHHpartPkopvUvydKj2gdiHXzhXyXisaFvGb5wN3GV9bARuXa4ULxDP3YRYiWaXi3",
  "key33": "2dfUgkqJfiP5qy1aqmTAknDt628HYhbJUviStXMxgBtJpJAvgD9RNquAchQZ3EM3ydbFT1nMZLmKRTQ4RdbPa9n9",
  "key34": "3D1mh4vbLGKXpr6fCqsfY1mNcA47U87RHCP7CW4NVJdT3XhNHUtJvQz1uDw9eAj6p9WoP9pDZqiU78h8eeqhgD9W",
  "key35": "5rr4banQnEZVGRUc6V7cYQqB4FXNqKfhdrdJZVgXbPcQYT4FrNi6xvLdA1SkdY9vYuDc6vBuQvV8b1CYfFgKKJbn",
  "key36": "5sPMX2EiRLgVB5puRX5wzX2A42wta69Kjv8wurE6eKanHRQNVAFy54WRrK2TSh79zfGL1iFkNEbEZ5TsPcTLHhYk",
  "key37": "3XjBxTaKMYgf3ztLkfSTepNCvp2yYeMHrgWSFYzrs4CBa8dC21aWhfyQN6RoWb4gW5ZUsPMmw51HwP6ooEBDoDEL",
  "key38": "5WG3Sc1wvz4pDpR6raEwjvhQg54p9tTiKE2WjNeCPjdQhFSAQ9iG81SvKKebrxAGtQWxSUKvMkAPgZzMSUA1zPfQ",
  "key39": "5oCsBwzmsJRDKwfuVgMWbL8j7KiLpDAjYM6LjT4a9Z5ZQB1LgJ1Fu6Wdq2ES7KmPszetEx2xFhHA1YhLyezKag6S",
  "key40": "kVrHvFKZSdsqL7Yn5EhAo2K7zmqSZxGbWUTfKctdZCdSC8ncQfkjKPWE73n7oJQyZijzLGFwFuzrqyApUaCEtzN"
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
