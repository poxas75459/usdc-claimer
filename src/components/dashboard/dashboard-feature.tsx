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
    "4PGVBNghfZCE3w9fyuBRbzDxVgS87tLsPHyEvCMkYPyZWFgvnB4DiRPP3D7EQQHvUjTbYTBNLd3rugZEe42YrZ9a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w2xxuzbr8655qSh9voG2ZG5v1oCWD9NAtCL3Dj5duVin4jCb28EPN3fBTgXn3xmy1cPxhFFBv7y8neUUmmt7mSz",
  "key1": "C6MHuWypkc6F2ZzposG4VWzKo8gSAuzdF2FstSQrnn1FBSuKhiGJj7bFuVuQnNqMei2oD7jhXKcW1iEr7962mfP",
  "key2": "4U5hJ6gGK3uBEWRx4asxeawHFWd6ZrsuHnPN7btLzn5z1ECUPmihgcKCzboPd6rT1VFsUddBBm97pvE55ymMKo28",
  "key3": "MDdgeobYc7gQWFy3NiWAx4U3131BiZsfeQEMrspuhCB7QmyUkk8sp3wfzhMmzANs5hx9YkFs5SkF8DWZytgKcVV",
  "key4": "hRQBXN9uQge75fv8N1NRoKuXrRdDngpx7oAZQYEfmQtKxtsDwutYkLytxV1dhZ2dj74U93mMJDZJ23FvjKxZubN",
  "key5": "4xnF7JqHNbZKCnZr7wR4RDFTznVMAXCR5HuNghsdCd6QxRRdzbD8uYLrUVBDuBijZFZj2MVCdvvzhKvBgffiRDHr",
  "key6": "3vkwyNZi6eqEqvFKmmxThHfiv6W4fMXK5vJnH9heQDymvBL8YJymLt7ATLvEtPFYXCf3k9i9oCAXF8HZ5UJSHgUu",
  "key7": "3WAASYZjkHaGox9zEMvKSxYX9TuqmNUTV4ehsg6Vvs8ybCpWUux6kaWLrQZK6txfkjUmWYkBP5Vrf54r31T3JmH7",
  "key8": "LoLxC5TQtLdKk7r8PsRHdYdfUBWUETA1899roPEcstwhBoUXbBTFa8TK9vEuFSFtaRrEnfLHvnsu4qNFTw2Uuou",
  "key9": "5KJ1WNiKgWDGKAPLtyEBjZ7CphC5XYMHzE1Csfz1Qb113w8r9iYzc61V87Z32QqwEbmhDLJL8H2y7CmvAxXB3RwJ",
  "key10": "4GWwoZme2XZLwAhe3S75nnFUxg3ioquKpcTuk75WXmgxw6jf5NWhUwiLLeDDdNN8nxYgMw46x3UwBBHdBnn1mo6U",
  "key11": "5NDkLGBVWZm2mCq5zaE3pGcDaU1jynCgtLoBMgVNKE6hEQukJYTQg8nGXfaiwF4zpCKpfJnUsQybvq8qTcLZe9J7",
  "key12": "5342vgEazM7rRyiStAZB9NNzhkYsnyPfwoYSPECavdoExKaNJBkqwqyQ3e2oTokydWPDiRHH4KVnXsisbAr9TfqP",
  "key13": "2NipmAgFeFdAFBsXoqVcVwdQPTnaVXXtypfzTKJeUprxkFdayvspQrzXy6uVcPoEFGTuZmoHmoBWSJyXq56s1cUk",
  "key14": "3g2sCzjoafC7qfSM25fZnpcCbfkDWMU8equPD8dmD6kFatnTTxdAsqESJgeDSdbGC976RS69R3MgtYCBvFcVexJD",
  "key15": "3WLCQMoyGZiY3NQdgFNsKhhvDjgUJ5yjP9QeTAXaBuiQXcwT5VBeNqzGbyw7jxhrnGbX9xBVRgdsCWef37UD9jFM",
  "key16": "GssK7Fwbb6NY6jihYvUhbS1LVGdXhBPP5so2i2pyMPLnz3zSh5E1drob2SGt3z4pAgp1LF4wk62ewfmRqxmBKG8",
  "key17": "jrroNRaf33Vf4jY7117ZHZf6qLQhA5AjqNNQ2XF9vYoQ74T6AgA82g3bGZaTyKXTPDfwWForef8C16jgc6ebf4N",
  "key18": "54mK3K8rAxv58x2tZxr1ongrGZCrw3A6587sNpNdtP9b79v3ZREAqKUE9bti5VDn1vGHbk5UeqmPiMsE7ZWeYVEP",
  "key19": "3MvCByiBndk79yDcqUdMXwiqeh5eT84bsV5Kbpdm39CBhP4ZxY6j9objAfZ31rS162DBbKB6p8J2nGQ4FZzUBE7m",
  "key20": "5gAxPqNN1hn6P5s9TM17ftYLUzvQLPZqAAAC5C9MioWFreQujtZj7SVeRuGUdJdxAGPMAvJpxTsrSEM3r8pmoU7y",
  "key21": "ybDrKKWa4SuiB44Tgcokh6ac7WdqntvrhaiE8C6ykkFyY5yCU5i6YSfww5BB8ZhEH2SnEUuwqjwWKnQSFnbhKzx",
  "key22": "24ryAtyMkM1vwzgSJDqGta9QtYpY3sttx7SfwbytUHL5Cm6c4dN21nRy28noeuBywA98hZXqpL73y4VGFoTSrVLy",
  "key23": "35iXQM13NnfDtSmNVyqFgABmVKwQrLciKKPs75WV4PzVcnidWB6WYB5GFZsgBByArcV4PLY3Ffz8gQynhh5SFG4n",
  "key24": "5wPc4mMjG7fpwkfJPCt5483TigYh1oTY1q9sLW1ApN58Azt71RfReiJY2aSFZimEVbt2pq1f5jSFP1B1yzrTCMbD",
  "key25": "v6R7wTvt3Acpy2rAKLRy6HuXBEhYfE8RBPBJSAwT9QSajtC9YchzH9BwH2RuNTyq2wAaot38xdbyzSNg61AKqa4",
  "key26": "4tPFWA3CXRD9z6PpFc2ue6f6wWyY9csBuVaPxXaixZs3SPc5ZKAVu9qVMqCYFgeVhotuhwtaXNWBdDurKvgaZzcw",
  "key27": "3a9AFFUr9SHc9NbqGnEBiJ1ofqJoZEdYRK7bqtB4QuM5Urz21VkKWKMZfvKQZLfGMF3kKFb9khXL37serPX1kVR2",
  "key28": "5Qq6sejqqfyBPLQZvqzhJzsUC695n4v4fNG39rCjj7pEuwZUz5KvfHYgksAyubnXMpyMt3Fat9Le28DRMcPzenZk",
  "key29": "58QZZUNy7a5c7ZRxVcLKJ2rJxkGtvZMhcm7J6sYL2CpFpPATJuWtVncQcb8YNPZuRqYYnPaYR3pfhaexBn4WYbZx",
  "key30": "gKVnZhQp4rb3CQvQNZoMzcmat3VjVUdVgk982aWRSWvSCAEaw15fxzoJ8STEJR1hAM48gCjJY4rKQFyrwvcdKFJ",
  "key31": "2UDYHLwpaxma2ebAYYGNWf13vi873iFPaFHDDC9B9BFy8NURqmmoh33YdMFS9BGKHVrWr1iGsjPcDmBPKXh3XX7Y",
  "key32": "5md8XwSFTBYwEgBX8PLU8xrc7hVfYjEy8AD4RcqMMzGTvbjNLcEHoQLgtVviC3hPH318wr8vNuTvJ1Yx2Jcgd6qe",
  "key33": "56CKXkUaKCDwMceAbUUQdsvCmHuoTc9y3WYbyajPu5ZLBNbN5oivmyycvsK5dNrJaNunKwydKtaNMZCR6eedF7xN",
  "key34": "2fSy3Zk83TMFN4QQJuVBUVanWhozCcM9CVvKMeo8FXupTUEW6rCht2jsfs4E3zTNieFnBqiYABA4SVbC9VELcA6R",
  "key35": "4qhv8ANnttfsMZViubDCuoHuezbQWMFsJCUtNboUjbLfyDJHmdhRxumfR9sTqSa8yTY6HeLTsgy9wrPtzkj9Pb56"
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
