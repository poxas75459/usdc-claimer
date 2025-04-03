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
    "3RCAaZAe5QD5JJaJn8RnKw4Knxk4D5nALxX2wKK9HW2USfEGebnfzqWjFJVhz48GKvhe7MdWkfwYSd2PjRyhB5re"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X8z2JL3jwsJFnpXNKARejnZAH4B6eTBSEJrT9XPBAEwpLv6TAZuso1Zn5X8r5z63SourLygRu7p4KEbj4arLuNk",
  "key1": "4UyPVRuVm8ExaH8h1thz5nqqpDBbVNfQ7TtbmBxm2waqZhxYQVDwUxCWno2V52qj5BaWL1CLw8dfyP5ThM8fAHuz",
  "key2": "rwZywfRsVy7shGXXik6LLLmLqB6AYdJktSxfCsovEK2AYwCE3Q8y5spk68CqppKQFntS7Nh1vx5m8eFnRyp5byT",
  "key3": "4ftVFDuTaqCSZ7N3a427LJqv5GtKM4sN6jNRpS5AQvxZrDh7BGH1C3tojHmmeQVTigysjK821gePou84VibARsfm",
  "key4": "4ia7Gqz3d9reoKwPE86oLLotWDEoru9EZqvHw1mYa2m4i6DajspzJdUwPN44KVe5bMDdsdyx1yLYiRoh26LzNtDC",
  "key5": "3E2J4WHBMMeiNRSzX5tuMLpXdXWeKwo2N6zmDmgRqAsjvDkJq79r7ZBFjGsMipaDmXDvYjHsedUnkRxNtTYpVxW2",
  "key6": "5vqWS7ALU2n88EWSSJgezsHv4VikVBtKXiqv8wUPmQp2FzrAhZLQiZx1tkgMnR9fzTn7Lcr533Bwow33stYvy1tx",
  "key7": "oFTf92fkVxoDuuuUYBnR8NbNL5ZkYyVGTqtmtqBrEbbjHsCknYUKpTQTNJQG5jahg53unyHPMqKaNc9T3BYdbuF",
  "key8": "2PBrG6R9RaShGywSGqkLcYBt4XNHK972hrZYi2PXkxc8f1KtVL7tRP9FXyYG2tifu9fCN24AT6pU1QRRyo4WMr71",
  "key9": "4xnytaQ7TsMkVHULS7dC4s1yUXiQ1atpboYF9XuZ7aPUpY9RgG9h5wbUUXQfop53iPW5r4N4bGDbrsR4WY1Z5zx3",
  "key10": "4f11DCEEeXxfnKLA98dprQWudFnJ1ZjHZH6koK8NJzaVRsMDtjqs18f8mdcfnNCEPCrX6szXvhFeZKFihGQt3ZSr",
  "key11": "2LFmJdTMFTVDcvsCfpJR8tDWdaDnhUkXUGa11y8tDwNhxpKiJSfjyUeL7eJkcfkNNooaHTrE3eUQRZXD9HRPAZyK",
  "key12": "fmxxY5CdvU2p3vbU1S4SdSA62FsKXP8EigT4uHPeJHnXMk9pJrQQV8acTbuvV7C7i5vPKvPhdpdWrdPsaBayNbE",
  "key13": "2eYMsMorEDsiuBUYc8a7Ve5pQjoQksvT2iHavDEctNBW9SqyRLRaC9rWCz3pM9DaCjc2SQdCCErrF43hac23L6h",
  "key14": "428pLPsDNzZ2QCpPeZ6Gj2BqSzSAktMQX5vwzvyzzmZJkZXvxyp2AGPbEMgpm8NU8a61J8W6DL9U2oBcRs8KGkZS",
  "key15": "hoQD5bu614mzniWkdf7rckgzuGa2pqRWTk5f738mJLGfdo5ERgJvsw5uQ4MY5dEZNt8jmca7BrykWG8iUiQfCuc",
  "key16": "4gyb9x7CdDLr7h69JNk6TXJoX89G4a7Yp7grtH6HdkiyY6eShuNRMRytujsfbv4hvz19CHxUpybARkjUCkNgrRgy",
  "key17": "589R7X9eu5PaLfTC3yjEE5aUGmK8t9e3FiBHZHDrMrxXpuybYYz3qtXtrrJx3Piw8YxWLaQfvvCDELyCouzE7pZh",
  "key18": "62fEaii5trznUinFGrcXCgawutXTwxHGSdDuKnp6mxttU33m4t5hc79LCecqNPdPHHivR4o9dMxCYyyGRARjuUBD",
  "key19": "5jWG5cbUeZyaN6ZLhiCHNzaTUDr9yf4AuCUSHurvsCZJiGw23pvcLvuWECWYkUEUAHaDGy88uEWq8gRzXrKTHfBs",
  "key20": "53Hhtbk5hRmbtANw89SkZX592yC2dtbi4QsueRK6otTfC3sFnivZQxr81sFAvxvuD3ZtLYYSFKBRyg9XTaw5HkK5",
  "key21": "4ix3sfBT8gc1qfCTUU5zcJcuA6bysLSYhXgqg1g1cagWvn1q5yP4ZL4coXbHVktvyQcyDwbvErBG2HE4ptB27CzR",
  "key22": "QyBrvPGGB7zpzKJNmhAv9QC5B7kHAxXnqD8tdVoVGAWYqKDZyur6e9p94EqmpUvLQJNWUmWed6RkSkDzLpRmEvG",
  "key23": "4rejEcAwqyH6FmQs7FZVmQ71HubXfAS2337uowSX3xMNs2csofKF1YQNuYQ1SYG32kn85TsU1HyPGh1JeERVdDK5",
  "key24": "61GGqvdCkh5jp6agRLm27VrZwjNEYX2bZCLiphsrEu34T7TGRpKsV1Zk9XCRPJcgJoipTYS8DaPUwcsTuaZkCLMs",
  "key25": "4WMhvBjQdm5XMHw3qqee83rMtNjMd2cpvfEehs9YhKcnD4sdtMJDEo4CVWkgtSFfDxhtZdRygNUjEuFDxXqaep9D",
  "key26": "2v8RaMtcMNqtcoum3MfbFvxmch3R3ucgMSVZKbwn8APAh5qspLgn5stKAS8Pc5ERUziLECi2oDg2Ju9VK5r6ym2h",
  "key27": "m94m4Z4BZxYHrVQq5biKuhqKfaoZ3UuKab1MusrJNhygrf3NwrYsbexPbcua3GmSVuyccdFkpv5HxZjti97VGQ2",
  "key28": "33eV36HQaWeEzFnebfGWBPKbG5FHNKSxQzD7c7JHrLjeWmoXMScYMmxNkNnsPtXU9YMumGbNEHKxAgi7dkigPpKv",
  "key29": "4e9NAQx1YotYKZjsDdp54A3veNYjZS4haHLr31kxH5XfWpg9ZhdWxMaGsjmvD5yv4sP3QKD4mKM5N1vRJb9ENBFg",
  "key30": "5vhiLvevGnShSUU5siVUbNS7qgEGbZvv4sFxbFD5GbCmasXdjn4GqkQbhKybeLebvDRe1GecV6PFk8hfj2aC7fAw",
  "key31": "5Q9caXUx6xJzLB5G9dBoQQAevJ5UarQ7ABPDTfJdUk7XiVF7Mfu57aiRw9dFqB6yDeHtLS9Q9o5bhjdMYrF6YhYQ",
  "key32": "5dNVfqz5bdQTE2Vjrod6ycJUixaJYrr1fn7eYyrDtvrXhTJL14EFiguA2XjVxMrMQVpF72Zi16EpnTSpRix3Jt7U",
  "key33": "554GiApqGDRT1c9knmRs5StgtQEcdRQWRSgeHcyMKZmjUxBvf3Kb7bSkdKY4o3Rnnd3ZBj4NyTmDmD63RvhBwH43",
  "key34": "3PWAj5fpsrUGQj81etGQ92j5JNhSwcetPeEx2iHec4BtcsvQY6GrfgsvdqWavtsZRh1metMJDoa74xZikZX6hrYt",
  "key35": "425m9YvHALq9zHABgcioapMxWnado6jxBTswXEpMHzHwhnUoCyoT841XNNwL3hxdTmWe41A817DFQ9gg2NjhG3d9",
  "key36": "f4WdZJnitucP93qaQkGUHFM1bZCVQckF6V2JKDLiptQMA9dkGL5qvdYuyrsD4SywLsbZGXZGTyzBJZyGa6nTBT9",
  "key37": "uALtVXkQc9YbXAmwVbDragPDDHBSrjRprPLn5HycgscSdpSHrPGWYzXgRN58V1J61PzCB6MRcUTRaVdxsbSR9wa"
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
