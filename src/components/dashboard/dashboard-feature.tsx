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
    "4RSrbX9h3wWA7PhUvCNnbBike4m6XVy18MvJcngdHDy44hZCEoEP7EXWJemGhTU1XePxxc9ffShBB5WrqcKcSQ8C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UWuXJTHasq59Qgr9u5RHqMtLEapg1SyWBDjbcW2iWexpuECueEuHcDKZm8MAZsjfjS4UmpzGdLTNBbPr7FceZAJ",
  "key1": "4phKroS7pBJvpDKdPKeMwVVaAsPs9GDoWgDjUjpeWqzh4MUuNrMN6QkggEiaJFEidxd8jk7ZVELAbktMck5z6mPU",
  "key2": "Fc5jLmfT62bvzZKMwHuQThY5Xsoom8cuqne8q4VyAVtciyWYUKtyCy8RmvjZ5a9RFsHVnh8YvduCt4pm5YhjT1D",
  "key3": "dBtT1VG4ETuK19TXr8ryVqvpSJoXKnGM8eKAJGNdCu9EWq6QSCbqLhtcF3nAdHwq16pWHkrnfq5bWS2j9usUqk5",
  "key4": "29nK1ykWNBiTH1VEUpwUAiWf9AQxgU5ikSeL5n67uW4VgmuMJmkuzX4C4UY8jygn4h1GAom2AwEdvtrK2X8ZroNG",
  "key5": "2bRyo7VVJDKLVqKYpEXc3A4tz7ogLz4FtFZuakfXUPuwJQ6ihSMoSwj9BqCXKxyRqHYhTtck9wiQ5ZVcdczy5DH7",
  "key6": "ddcnzaYU2evVBGi1Qen26wLzkRwSMr61TsVbAX41f1TLFBJzLbwtXoSfxyjutFMZ8cv83fZUNjpcqPFcTeGA2uR",
  "key7": "2FrnoJEo6dLobp6xuhcbL53XQXCLNBDjfDiMim3vBon45tUHVAPfd8WpoMUim5ck7TsFnFVcCM4rtMdycwDjSf6T",
  "key8": "5kMZbCepdzeh5PSZLima78MLHaXyagAThXMtidUcX5QzrMvjZ6LADdGcSNRb7WeaYmrDZjkYYFLcbqLna6PH88Pd",
  "key9": "5Kzy5yCqqLVaXdjbWccYWq8mwPB4raB1jwmMuQuWXcdG5jQPvSw4hcxcjf5FU9yTcFizYziGoJuVvJdMMc7T8PyB",
  "key10": "3wEdG2vsbhe7m75Ns1S5RdLVVEc6U4PHyPduGDA4Ewz6eUN7btcBEi5hd1BSxsTDZkoFqcWehzi639KVN1kMtqE1",
  "key11": "bgheepvcumCwpSynsN8Wn3cRQFXuWaBrHdoxthQ6yJAGTUXxiQ4VEm1Rc6pp1w8QNd5cTB1vb1k6EH9xVdYaVTc",
  "key12": "NnDwbH36nDQXMbqKJRAtFvHZusakvqQdvvVKVz2HDDqmMRJ3hHKoZG789mEkBS3uXW2zhUVgY75wuhcitcueYN4",
  "key13": "537gaiajRVcv2yALUnj7cFmiHWWmJivpA47WpMP9LLkre13SJCXXxivZR4QCV64y3YFJnR3jQqj5S1UKvWmYWdi9",
  "key14": "3rRe6NXoMT3WUM6FbRC1QFaZ5RYzA9pHEp4Sn2BbH44pLZFAuY5Aq6MXFt43jA7vPQxLieqqQrBvW9GdZbbxGEc",
  "key15": "5VLGwTcv8mDKxdkERMaonmhgjPAedPs553zmfuhGRTENr1SzvtgZbfCnXPDarPJ48gFVBGiDowbRCWH172g7F2F4",
  "key16": "21QT8SGtYCCWPCj5cp8Jnt9BvCsbMuZVncMs374gZDY1jKuDdP8jPK7riaZ6ThHWTFVcWEzt58Pi2KPGYae2UsVR",
  "key17": "4te9VXvbJv593CLXZE1xhp8bcfTek9aDQzaQWekoVsiJhv7szmN8sNbQxLvQomvnWeGcxhvB3ByUUG2Fka5EiUwk",
  "key18": "3qc516QUxtxvx7hSL5pAY7Qqrf4NFWThwP6Q5abjLWL7m9bq6S4GkpXWSn7dmAx2nStK7JcC44C1e8MWCbegjNcK",
  "key19": "NdixZLQ5j72DZx2z28uPeEmxgwRSHgmk3gzyaUGgrYTCKUC9RQ5ES8mwS3jybdcV2mjXknS3exo1MWyXgun3hw6",
  "key20": "65PpbZSJCFqNeYVdvenvC2C2H3KsH1PhUoL19mMWqekY5QwmojpCaog693mFcL7hxSmVV9oCCePpyP4DW2Ec21FK",
  "key21": "67Lxd9MmzBSbbTzFPmrPyHDHKXQB7YQVKLXaRqYZmTwaDcdqC964se8hoMCQP4E6vb3hR8tjUjjhnE87Uo5LUHYb",
  "key22": "2XZLiCeCvBxGvi49B4XfWddVbRn42KoR92cDDkHZ1p7jETczLEDXgvxx2e6yFTqEcs1ArzZEKTXQdz8XaCmjCQjR",
  "key23": "3CJLkbi2Twv8v3t3epnY6CNUuigXUmdCHVj9wxZWL98iaaqmqiWSAoCTbFSi3K6w9Tha6vBzKitcb89V5s1Q5Gwj",
  "key24": "229gQ5ms81iuPCsGJGFQm2M58zGY1aT1XcmuEFvJZLUehLDoLcJPTZsk553tpv9vUYw5YAcWrQWdxaLNX7AbU91t",
  "key25": "5aZH4PN9E3CYnS4DDEmUjn5gF4FpuCYY3yyuuR5Xp8bvEp8bw1sVGbAvdtwmGAiDouhWRKiDohmPHGpf3taFUS4m",
  "key26": "2PWNQsxVpWNHfRKWBx6BVKxfFvD7BtaJmjEg7Yo8sDj2LoDYZ3BJVgcH2faHyhT7kSxkTrX8XqkvtuFQ54CWyp2o",
  "key27": "2rnr5dVaawUxui91GfxmQBadpBVcy3jtb6rne21R7PSUNB7wm4bXeyeAKWkWgkEEKh2MmdbvphuFMMzamYaVfTWX",
  "key28": "y6UfAjruVnXTtGgBeZQWq9aXtt58A79LyUm9jWo8kZF3YgWvt2bM3yQ3hgjHUN3HbPFWdpWr5UUSv1E6BtkdXT4",
  "key29": "5DurT16SS1CzCuYsKdqTsboGBv25tfgkViwGTEbNYnoqGhQc8JWGutA3EgDRZotQ3RUYcrMoiuJdTfrJSFNXLedP",
  "key30": "2n6r9Sgx41HPmbsadEygdkhRtBDwvHzs8PLaNjVtQjekBGuMsyvM8EqLsPhGeGCHphLLy4rNPPPDqugFG6YEX7QH",
  "key31": "2HEswtRsuNCxXr723EqqkdBHZ4bgGDXY9bwwwzivxHRcaT1qs7Loxat9ELZkAd9xB3YFETCLe8uNoxNpAktizswg",
  "key32": "bx3NjvwR1gZkwBpiVEYHvFjhirUXBtVSu7h9kmbQ2jNLNmTErDnrey9a3N18L65Zb5p8wjGsySGRNT8A3DWZVph",
  "key33": "5xBF7EcqjJcYpAibwirEdgD9XdCcgXs9Yt9G7CCzLdoqhFAs4LMMD3KpzRiBQEzTS6iM1oD1THVLsi6vxxSWmofi",
  "key34": "2momHNvGM6tn5t1YJsPwxrP1QKT7XSWXqh4RoY3qe1DUqHSNnRfuUntC5AC1iwmYq5sqnQGGj21KcgGp8mPALe3M",
  "key35": "jwdcCVwuhjDGp6HKVSFjjBBfdhkBXN3gTf27RrzJ1yQVKsXWvWq2DGqzjmhVnWRmUWrmJAamUQraxgumSF7nd3R",
  "key36": "5TJBRVoo5j7sKC8Sa3bmJAMRaxRmmqt29dwWdgNjzATgHfX753A998QgqATcigCA4jxUfRHvANnZ49caVsukXxgr",
  "key37": "5aqDqDo4m4LNj4xJFpxHxe9btgzCqvqKq51FPUJJxUmmhP7KZcM3zeYLsEbMvvwr3phpDxxBk95Dm7t2CLSmZB5K",
  "key38": "4sT7JDZfQHqqdU9EuwsKUzwjapv8YDQLnj1rjBnhg8EtFAzTGANGXwz28HQhYPyyDsWsysZHB9fmtbWGJJ5Yuqhm"
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
