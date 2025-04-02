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
    "5KQbKKBrSGFwEBrsm4vd4Bz7zYTbCPZ5M5ayNWFWyY2Mtv3gfe55gzBYBSRyW1JupLPYtdReCDnyQ7XH56Bk3uGw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wHunyv1q1x8NFxxPcQSTiwXDpwtsYPSB41DEySYUWsjK6aYFUPmKai71BtsRwkExc3yEbCgAyqqf6do7dEqAp8w",
  "key1": "2MvN7SoTUDQsrXZAdkhcPBY375SFL2FhGKJYWbVKZq6wWth4xvNPd7bFfjpN9x9ZRwbr4f1hJZ5S9UrjvcZF8mAJ",
  "key2": "3wzcFYHusUk53yivJNpvkEmMJa5FSy4yrjaHAvADZJ9HSKu5HNR4xmBfBphiVDNRKFirDJfW9AxQYSQ67fzKsHCo",
  "key3": "3H8Yvi1QWiVWeS7gxCqUSw9NbtoEUDQowmspw7xam3FiUhRnu1sA78vkmRRNu82xDUqSxrTMoioQQFCM1QeNoPq1",
  "key4": "3T6bzU3JAKE8Vv8Q512hGzT6e56nPnrkmpyZC6xQeYPD4KSTmxCpCV5bq9B9LKrf8RXCYc5mhECruAWpKNfyd3nW",
  "key5": "2U7bq4JqNAPLuPGpohxmSRb453hweQrwcTEVKykwJRLF6v5wJvYej1Lh6xr7YqrAzseG8Zu45pQUKhsP67xxeFh8",
  "key6": "3BrY4UQHG8YNJUhJaWkgNEZ2M3Hvnc8VFPsLaFzDKgFvvCZxsZgmUjv4Dt1UP2kWAMZwDm5f5cRsktF3hZyjHE2u",
  "key7": "3VFCooNqpvMLjJHEzayMWmnAvnHen8uax1JiPaUp4NaJZq9gLAVdFr3WN9M5dDhR46p45fYgE6RyLokTa1geJVoS",
  "key8": "QLhG6CwZaPXFGs9LRkKSp22vHRBeBBB25PxtKVTcTVnKahPLYU8jprxx2cCKCDEYsn5HSSNhY8G864finEoKBx1",
  "key9": "7MGRxgnSSSEX43s9wJXLCf4HT9CRM9YfdjzbwhoJBmp7ByjFTKdX4K9SmpsDFmEDrHe6xcpGLvHnvqj9X5fGqUy",
  "key10": "2pKfEG534nrCSQsCs5WLsDHTJcDKSme62DNpqQsygzWC4Czz77MJSHfnPChc4ea88iGKtjgYrdCyBeq4cAMuedXe",
  "key11": "31avWMrWnYyHEqPWUzDq4HCSMubXYtvWpLh4Cg6sADypfVpDohH6XtE22ShnB92CaS4YhaZCAWxHRESVXSaTBwFg",
  "key12": "KEo3VqV2oPrKZGZQuTK21pvX2CZAgJfaUYQs5xjxLRMBeujTACTs57yGjo9jPquQF4TBkVT6mgWet1LKX3wAvw5",
  "key13": "3W2UGvewb2ynczbPu1xq55PciA6MzS2KtiDDAQx7G58iq7amkjmfhLU5pCRC4yJLdVWVyG265A7JcSYpkmBXLswA",
  "key14": "2wBovLxiCiREPVJiPyg74HB25PJvg8YRrNMZqunEiEbtP7ZBwBGnECysFdjC1apGVGaWSs3CNzcPFhVxKBiM1zaX",
  "key15": "5fyFtPKETcjBWvHLRskHsFKGmGTEgndPxahJTZBBfk23vCmz4efQSmQ6ajM9K8xwTPh9r8QmWkhDUGidvz2tW11",
  "key16": "3Mxt4thTDtW5FBbmJwaLtUvmZaa2gtLmVSfCvPB5ViUw8GdsYRpzwVjPKGDHueohtKeZWzHB1BswYzFTk4Bt9MK6",
  "key17": "3nxaH7JP9YTo98R6i2ya5yx6QXM4ANxHkkRAiheiJ5YbZu2QQAmh36BuiCtrvWdvCqhFb89erf9Wr1YabR3tzw2P",
  "key18": "29cncDZkDoncvZ3vnbQy7iZz9Y2qx8YUFimC32UtEYnSUJ3Uq9zPrmBR1x38rYdr2qFG8pKLKRKoeFH8v5m4ciSt",
  "key19": "4E8KGc5bXkGeU5JyaStW7pML2RoyjZGBavmoXxTaJdqNSmp8pBmUyicRKJ1u7NwxPxWbRyv9ddZvQfLGiSHnmgoa",
  "key20": "2rW7EzaTL9ZfnhNHH7heV1vjdf9ZgSsePgHPgeLpsRmYCkT57SW65zRZzbqra1amFnBZBvPSCfJ2eEPx6iVhzpFx",
  "key21": "eCqdBAbr6WjQNdxjANSGpkSSSjShwcLnWNm9ttigyxP1qXehTfcUR5TrQuky6KCjGZ6ccWRQpdiu1rCwTPfNqX5",
  "key22": "4FwBK8dp7gstMsYtK7t8kmwz8DXJ3KRCSdusQFwUjEHyasHXKqWf6kCMTpEZs9XjpVgw7Fq1XobhSf8F7Vabo6Td",
  "key23": "4gyFruhJh89Wb6M8xUypt3E7PUuGmFzSFDjFGxj85Pr65BgoH3FtFwEvmFGD7uKfqtz9X58zg3DdX4Q6ZDvbFU8D",
  "key24": "JvbkHkV38izwyUj6e4ZQphyRbCE5ZuAbmRvp6dGmUzGM3YvnStXEoKYLpDk7oUKphmZBWuamvfgBmgSXD54GwXc",
  "key25": "62A1ACX7Q8TWYw9n7Q7UBtVFYriZZH8RZovL7phmzD6uhe9WUEsLs4PoXjYaW1chTMfyXEJ9HS5Ah2c8vk5piQHz",
  "key26": "45dSGKVG5D6XNvvq9Wpq49ArQuQiMeqFdF3HhzqbpgkEu2Zvo5UkS5bTumeDwjFoNvAX1EgP6qybz34gSSeLyf3U",
  "key27": "36Mfo7S5v4fg5cdu5ULK3iWyrQbsotW9cdcZwsKG4S59pqh41NgEubUn4d3T1w4yqMKX7wrtB7hCNqFhFiZJZ7sA",
  "key28": "4Evgpay8ufbUdJqyDL9LoFmG2Zz7cD7sa3YyDg4zZ58bmkQ3TohjYHkHe1rK1mjqtVUNaru4pMcHeXKC7LvZxCN2",
  "key29": "3sQNf1LsGmq7gHHthw8ktKgrv8vY2EdHKJ3e8832yEySGrXsL5cQCqGEkYnVqUbK6zNMTUaez5kF1D58RJGJSXNj",
  "key30": "SAgvqezGS6DtWyCzZsNGqcb7NNqMrg81Ng9vxoGeabRbupHUgDgqjbmbFfHCGsXH7kwWagLQiJrw6ro3g4vfaeh",
  "key31": "2Sg3VXHpXDZfrhRMediUCggccuCTsqfa3A7tMNEFzd4PZpzPissiBy3jDD1eoBDcEVm6KDGB2nXwMsYMkR8Xo5J6",
  "key32": "4YKCCVRu8efbpuXABv23A4kff86Ka5uvUi4bCBSFfkordDUxCZW7BydLwj5u3yA4B1DowMFvAQn4RwxgzwATBKGE",
  "key33": "2g5osxsy1cMb47FcEXw7xD8S4pXvCgKcdHvj1ZDuKMLT4Vg4AKmvnvCH7pwXMJoDxzuUE1NZiqtL9N7jcMejQ4Mp",
  "key34": "5DkNcGiVNViyLWXM4xVvSRLCDYaj6mHDf95SDaYRrnePGqvrfQmpwLi8H97awXmND5MYjT8uBKxDf3mLAXLaVkzm",
  "key35": "miBsuQKHmDMnJWHREza6aUaS5X82PjsQFCAWeNds5v6XL9QQaUoqxjBxBhfcJiUUiyDzfr6MdzYBGHcu12Co2Gv",
  "key36": "36z2J56P9Ug8EXbgnK2nwnWXsBkWZWsKAoGpGwvX1mFCGeGUtC3ovxbXksBiGXK4YtT8rSqJUF8ZLe1rvs4ibqbt",
  "key37": "3VbEM1nsmxXeoXdyfitDvbw3vSDWxLPcoutVmdW1ArT1Bcw5omyTjrMA9CpptFkHvoGLeooaSfXsQVQ7SYU3zzhp",
  "key38": "2a3gMGfg9TqbnGkot1XLCZ3SPW47KCyaHXbL2pLGYHpUJzCgWb6JyNDdMG96dP2qfrZCQR7U8jsf9gEUjae4Fgbw",
  "key39": "Z6QacBnyrg4Ky3NyubdjJa9C4S53B515Wt9vJ9c5DkNc561BonkAAP3XV1xoUmxTf1X7pcjiq1srftnxQuQPRPA",
  "key40": "wE4DVJ3BPbpPU4XFfKFgiCFSRheXBAPdn1YPg2wUbwE8oPStosBzpjhENABP3nZfM27BWy8tEiiBZ3msPSP7PNi"
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
