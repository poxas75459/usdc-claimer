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
    "3kbqtAu2iuPHb9v2MxtrQXubCe9FwXjt8mB1LKX8gmCXsobfnVQu2xhBTFYNpK5PYGgAGHCnkarChToCRZvU37e3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e8maN7xYAEqVLD9NYNmgE8YsxyCQNud3UKm9ZSdA9GcFvj6A7FiHrm92FYipktZ2D9K9cJQqfAiGS6h7nugCsSr",
  "key1": "48EFKXergv8z7Dg144Q6r9mr45vcFtEfBciu6m96EtBF7dWVSP5BUgmu9jzXEdj22VrS7MX69qLBJbHXXutsoukS",
  "key2": "2WJCkpQwRcvsxUMzwnwsUErmMfS3uWXRwmKr3MyASrLwtBXtsyGja3ZHtxPK4hHhkrsdc2o47JM5hap4Hr8qjDXq",
  "key3": "5FnTPeZhhtywRtA36Ubc2nQrL2226Ce2X7Q7ybNi3rBBW7YAsbAb7pcbNsx5bHdBjACkA9XGtuNmVFXHThmMsQcr",
  "key4": "ocNTMjKxMCsLrR3ZvD7VQHNNrohTpxNXEQaHcxvSB13KUmymobGXxh5gTVWoCyu2PrLq92tmkzQiARxTYDXounq",
  "key5": "5EkVcyFdAFzVsU4LrV1JghYGTmSBtmLrTd5HnxP7fqFUv3SzzT78aNteTug4hn6c4Mbf98NehAXLaYhX23tJ5n9b",
  "key6": "49S64tHx2Km9urwn1YrtoDiLrvQiLcN1bW8hKmJKxtxZAsw3za764jRcb93AHigndpt9J4Lt8bh25SQE1AGFPoQ8",
  "key7": "2ibtyuRoB4Ni4Ddx42cMVaDgD3sH2UyX66XZXm5jSfGHk6tALsWJPSoyeq7ubM8vFVML8NAf6MECHGi13eH4agQf",
  "key8": "5t4sSX8nrBzkus25dsp4FtssqAYSwi7iVLttaSH9cUTfvqpnYSqXuWLtbMk23dJFW1UYSf5DYZWYJntH28RKJNtj",
  "key9": "3HSZxX1o1yckpngp8yPadVKJVMF5qzr3swuAyZYe3GMYxdmnbKSrNuC1AejdWHGi1xBXWrQZhLoEq39FK2mQz4kr",
  "key10": "32BVwHPWiYK6AFG3YyYkVS5boufgjmTiUka5BV9fNN43jb4PmqGxP4okg4Z4mHNye8HhaEjcmFccVBk3dH2HS4T1",
  "key11": "57uwDnVNUDtvvc4Py4P54Wps3SEmx1Hkd4x4iSKxXaEMZMiLo4qf9eNP9g5uK8FCZoiiQ8iH37bzgqPPjgk8VW9M",
  "key12": "QDrTyunYwiFx4WVQyNy7SDi9qA9KXpxK7LHt3eBdmhY7Q6EYmgnEtFJ7ufPoYM6GJDJkY9BSbg2MsBwucxqxuoU",
  "key13": "35avz7zjS7wbPckY183eNsCVW39iFw56kYZCS4F3KNh1tsE2TVtghoHa2nrLMtoKDRuzi31TiwAmcPeyy1BSGm6J",
  "key14": "nRqxVe8Fn7RAfN8ka4sSJJD9RykmvTEYAT5c58ix6eJTbvhDB9VSfSrKH9zg3cdiJASfXJLrnaCpR1ks5RXLVok",
  "key15": "5Ab3ojwdRWm1pwMoHkuTvCyzwv3QmRffuZJEuyJzax7HEEmEaa6zEnRksBpabL821jtX8dkX81BmScS34mCHVzyR",
  "key16": "2HaQuBwZho1sHJ6ShPv16UZiAhiB8ai38Rw4mdDAepKg3e4zNNiAegT7qVLtcMatmCEXWvrB4YgmJdtwmv2qX1bv",
  "key17": "4CoHNZ2qDRPuampNpn4CjQsRPdXhuKaaw5X5fTGs1RAhYCsquT9mcE6AWEqgCbajJ8P1v1nq5qqQ9uk2EwiEukW6",
  "key18": "4G6BaJsP8EcSfV692Fj7ia8B72Fn6J2PFW4qCczS9XacYavHoPB1n5zt1CqFUWpj4p8Qop8dhrnnfRjw9CqtJtW7",
  "key19": "4cZDbXSQoHamoFXoUvR6Pyz6Eb8TWuqcDNJMwWyMp9NzD45Fo9wziAdWXgTufSzVLLtGc26ThBKHosWG7oT6MtGh",
  "key20": "657eA5mBfjzUWe921Qx6kudRooMqWGCtg4LSnmcjcKY6suH5XsMen1863Gr3tX5WrS2DER67vEbFqXb3Xttpd1TD",
  "key21": "4ZYNuxkFFjW1fBuZDEp74KzHwSNoVM4LkJ2Qjj7dcZxaKpRgrQ4Lo9CVF8Po3wa7SVF53Xj21v2Nrp32jSuUr9vF",
  "key22": "3DKrAYma5UHbHm5kHCFuVBnxC8DJhqrzSEtevLTtdSZUrF1dcDbzHsHDeRrugiKr5NR49kkhv9St82VgcCmVuuzq",
  "key23": "4oFjSeA58TzHvoUzQSskzWYpZTN47wwazivXsmvoCztxNttpbFsSSsd1DgrU7nEEHWe43Ez8nm7u2jjZweMPPLoc",
  "key24": "4FxVUruT6bpLGXGEbND2K9J9WvUK9EwV6F7VLJJfbWkdspPZzF9VhGSkNgtmUG5RjLBq8CeHEfrgm5sqQtGEGbDW",
  "key25": "5TckBECa73WZp5gXfmzX6Nc31TvNmc6WUxH2P5PPEAZQdrwJ5rjYQ8ogCW7ye7useVaS7wGirmX1NEWKksL3CYBV",
  "key26": "4vdGzDDV6dJhxScj5j9W8re9uz1Eif8ToPQvDavqqztxSyrbWWD1QtrCozTh1YFBz2ny5eX2bXhzovVZvHAag4TM",
  "key27": "3h8J7SCoE5ThEKKDwh4hjvMu8nmtEfsQ45hDDiB5FKVRhXV6QwgkD5TJfFZyhARmV2JDjKg3dT7GpQ5MiL3LoYvf",
  "key28": "3df5PZ9C9aHiifLY7Jsq1nXY4qAbV6bVSipQCtT26vCAsyoFYBJqHAybydV8LYTgLxB6eiAd9CdVBsm4gjWESbGa",
  "key29": "3hoGLvbHLoEaQi52RivmAj5rfGUfbaWgkvFun4dNfp2DXyNva7VUtVfuE2gQWBV8XideLekWQdVossACSpfTWhUY",
  "key30": "3CrH5m41KugRpe4L1vgvmKAxfXJh1jy6Skr1UqwENSdVkRNyG9QUMSp4euumjYGGma5kHqcmPRc3q2ff3jFtNgaD",
  "key31": "PbLr7SChbLxZKT7zMJP521c3huDZEwnsFe5h6P7xzQj3vxM6XCA16GULH8nNUUXMXQ1YP9Wq1bZiuDY2gMdZq4R",
  "key32": "4P8feVnV2u74VWMsHTfA7Az6t8sJNmfpc1cauDQm25s92aRoaq5Lem4vgb1Vjcu9mFA3MNcQNfzCZCcLuKcPq73c",
  "key33": "2iWvj5ugRz1wLWVw7PRKts55yHwkJHPfF6GZSnjURnwmD9rAWNLkqwwwqijFinHYJ2MzLLQUrYkEeBJbkPb7DKUm",
  "key34": "uPuVxAK9qCQ1GKCe4DCPuxxUWDqXTgcHFo8xZfRPmCws2HN9J4fHs26mBFE9FUghjnbCda3z814BB3EK3d717oV",
  "key35": "XGkGmiwkLufUbnaauq4ajZCGyHWr176iGfVjfGrH8FemXn6TofBysmZGxo9QFCXEpYZPp3ZwiHfuSu56LUQDCCs"
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
