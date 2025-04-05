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
    "2DAbaDQRzUY2vCoonuUcSCbRszMyHmfxPtB4FqLh9kPd7brBXoGmSoTxoeYBBTCthGYVho13jqbdh3brW59UCrJA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6188a7HVNvWDwQBHbm88T3WpZ3Cz3ZW8sUojuZfQRFesdt9kdssoJsLnGWMacevgLUJ7BXw98p6eV7YJHQD1f1Yw",
  "key1": "425oiRnueSvWKGZ13oZXYjHonEacJt1bstbP5zmuPAN71CtacBUzW2fDxppsckHrCFJHsPovQubifnJVLi6gYc2V",
  "key2": "39jgUa4Dd3rYyj3zMkh2kw8C25PZ7pEYqRzDc84sjSzFoe3NANP2tTrbin97w96BFZuZ9gB2inwdwG8ev3GHYBw5",
  "key3": "2aJRpbTfVUNXYdCejeca43sZUk6zDQEXgQ5nKJ8BA2yA9jfAF5ku14miwH4Znp5ZkUp5y9QvjiwLxZHmATWXgqLW",
  "key4": "2u6FcqjJZ3HDZtc9UGuSTcHVokzEvKtgdSV699tjK2SVZnGaZY8cSAdAPEhWoFwbgTaJATSm24YKtCqsLTNDRaF3",
  "key5": "57mJovC6aqTrguKCDJDHiEXMpVQ4bdj7xn2qwwHhxxYVsLBGGyqDicbsgGY5KwkYnsC5Mr7tTq4YR5i4DbAhqZ7Z",
  "key6": "4vP3KN7M3vBpVxuV15xok9vWHHsjN6u5q2akf59Vibj41g5SgyJxJkztXhNswtvNtkCEPUA1TUH1DE2JzLW4rj5e",
  "key7": "36fn9WfHLEXYh4wwCj7uznjPMfiBZ91kK6uSr4dGWNQRktPjv6zQHUcfeCUDP5nhX8R2VTB5EkQRr8MSH6prHsy3",
  "key8": "4tdCS4diHSem8DRk7EGhdPy6cr8Hq1dYPV3sduC8gmCoVXsMKMvpsCCm4PCm9yTv6QeTR5LZ8z1PHA9Po3uyA4cQ",
  "key9": "2r7fV8oG5PHZTFeRr46gjQb2CVBW6DVJmZQm5JCtAk8d1NDp6RzVCefP6wuNqtF9LgZ3D9Lg3913exYPg76xAXXh",
  "key10": "4Xtut9btdaFCY6TdV1jNjqb8bWqRVMGty7k19sxz6MpnkzAhHc8TWfEDtd4WzbJBuh9vY8wYBNGPU5TD8UeLwzMF",
  "key11": "2wEYF18pFmSzRTqrqrkxej16kRFiYkxfvjRhbUhF44kSYcBrUJf8ndiNptmow1oZWyt3ZgCE7mc1X4vGStJD6549",
  "key12": "3YMGbNUtNvp7BSBKpfPYvdwszepSny4GBXgVuRgAB3ym8rST489on5vvDXeTi8wJHEF78Me5BB9skf3TGvAffgnF",
  "key13": "4ERjdLRbs6mHYvYkLHEWar2YgFyXsKuhpxiYnbcLiHhBth4cncdUFV2bF669sCVgY2BG6QUqQJL8Y8GjauzxuNsG",
  "key14": "3sUF6HKfcpXaFAjJf8XgTaKJy3gtY7S71J7JqBkrbs18TEv7ZHkv7jnt96inwRMMKfX5RyXrfnF9ksvSC6vfLsvX",
  "key15": "2XXtczVzJXUJogm2haKfy81uJQzjuNQsQxduMLi81ANAvyn851K13S9Lw2uG7GVjzAbNgatHmvATs5xSrD5L1fQo",
  "key16": "2obiwWiG4UT6kQqg26T8dYo7idm6qCHsuwQVn2YT2eCjiD1cVRa11esxb9aTuFkwmUgzLU6NYLdcf8n5yuGCJszq",
  "key17": "4giou9wNiZCdb3uhY3anbRzgeXGmFWosUe85iDBydgzMo12eq13uSKF6ovJWVKcifesVr5KfMyEyhWBU3YWyvAa7",
  "key18": "21opvnVWQoniKX1UbjF5DJeJzWbQ6V2cG1m7PtDWC39ZWGMsUo9wzsevB1H37pH5yCAkwVM8GiQtKNc7pfbmkUeT",
  "key19": "c7X8Pb3NKt7rdAz8UbgyyaEXGuKwZFMPADkpjYLMEdfNF4CV2wWAGzjEpsn2G37BdF8C4EFULXBcpWmo3ZS7GUc",
  "key20": "GFHNVtjTMLiiVvUgtqWMb2ogYrrJUQ6fKCvSdBYw8w7FzgRoz3GXhypuKq5TsZyJhbp1QPZPKyJzxnCncLaP4be",
  "key21": "5FpiT5GTCLG4tGzsmxSsDPgz7UrEa9nr14SHFYh5n4MoaizhqBoqbCNoWM5EXQo2QJdXP66DeDF8URxuaXBhiFS3",
  "key22": "2UFvpzNyVGWGf91Luv5LeHhfvYSDpsKNg9fEm6qBEsFKBLYAAuf3U4jrzU7nw5rZBT2yT22tzKqCdBjpmuQo6Wmh",
  "key23": "55uRxW54faiDFQDSbXwfK4CHXoDvr7TnynqbGvKZej7CVDU7S9D2GKM7jiuGiWKyesJWVA1ZZpgrwyPucFWimJbS",
  "key24": "vt1oD7ErsU7KCXdHrnRKRajRWtWUYBuXdUWK1ckHBjj1T6W9aUrg8HuyYddH5VNgTmPDfbetEbbrLcEVixD7nAQ",
  "key25": "PCtbgT95CUdyggu86h3aGLTmjtTfSZ1WPr7UAMiuoxCsmTNPHpjzPmxtMYVZdnkB8XWeWFjDe4xAq8rs4HpCyAy",
  "key26": "5UkUgPiRUUEUXswitwZ6nSjUmfzwG5YQ6Pxgcr4fncyoHz4H78jBiwba4URn4pQheoTnPUSUEnMLp1sJLfwmdsJa",
  "key27": "539tyKxKoDGU4884WHFnhfq8hmhd9FeJWRBY1yRjWvWh22K5VWb8gTXjT9a5vQecT7EAbLNo46MUstfoLYUWQNXF",
  "key28": "38eueikddnqLsr3TBUi5aCCwfbHCKS1Zhb5aZ8r6NYMxJmzW8fHtkTY39XHNGBYaCvKJuQnVZWiv17XbZFhx3RYC",
  "key29": "2vH8KuVUwCs4Df47fTo9M47Wk9pUxNMM31iYMsp2cEsc6JJGzN1KqLVeeV5BPDvifHKLwWi5Urr2TQaCs6ADZT3u",
  "key30": "47XexkrpUhWpLRHrydVxSs7gqV99QSYmQXR7J16uW9kPWJpTvbWUWAWG9D9M6QQ62qgiPwAKfHeR78bgU2tDz4ow",
  "key31": "4TCJZXLNaP7WRMtCmGfhaPGDdYw8NXCsWueSQiav1Ar3PvkeWcMMaGHncdP9hQAACNujNcfXGgaRcXXY6RCFBzc9",
  "key32": "37M3MmRRGgcRpygy4BQmGgmDXXkvUVZGaLF1DSHeGeRjQQzkt3ZuhB9KNc2L9E1YZQV4xo5K2i71DdtRCGy8aEPk",
  "key33": "3o7EsoRFSHL78YTvqhL27vprM3J7979GDnzpnY9e7UHPiaWYmacbTVtuwJasDnSnUXAqWveQe4xQaZxtwvECM7ui",
  "key34": "3Lb6mtLG1NpHdDhV5ex7JG1ZJuVfiTCTxYtbvH7zvNQguBqjqf85qFKTurZ7UwomWiURmzYPzckMJqrgNgk3kjTH",
  "key35": "3HsoWXdHa2573eWTPNKom2rmriA8BsAUdf8vuxJUwGBf87n2QBMpJgbMcY2WMxb4yYpzjK3GNcSi6ghEz67zKP4L",
  "key36": "2izqCR9DP5gH94FkN4Aqh5ceRscjdNNeajkyhnCLYZTjhCtLHD9nBPJ9nYKWiFrXDfJmkhmCNmvD4qXr2RcpZH6x",
  "key37": "4vgkCB2eHm6n9KTLcLtxigPczdT5oSMBZzHt4vnFHjwwWeDAjJXtgNQMB4ucEMcthZGamy5dL3APSFgNx1DUQE4P",
  "key38": "4RksiXz5Eg8rTs9qCygXQf9A88pgSVsQTgaKRSMZjJELzZh8ARPPwhsdYjHX4iChD27SSBeDa2wRus3bP6QQbKqk",
  "key39": "5LdnRMKwGvqj1pecYX6H1itRe6EBedvje1nnDiYiRPFQUcK4FgZxntr3mwEDASg9nrEziKKcb217Jf9tMDC118LN",
  "key40": "VSbH6bDuApJUrc6EQYsPqP7qkzNB3gs7hY8xYA7nTDMAeVqFHiCSx8BuEWR6S8HcZmZjUVTsdAmC9oDibisfqBr",
  "key41": "26yVZVjAgnByn841aN3md7XSr2BdsttFxWu3jWaoeFcKHRWdZLjEqt9Bqpyew9xgU6GeK59WooShRHo42ugxkFQd",
  "key42": "DNVdKpQH9LaLnWmwQDoU9wyBxZPQd2M2z995NgYK3XhEMN3REasbiAtEtKcMJ8g9DVihjBvA8ZTP5MKH3KZAiNQ",
  "key43": "KbyuLEQndqcrDux5U5xXe8rLR7rZ2V5bfheZrWZr5HAsc25Amf2hbUYMx7TaQ6LKb8JQBpm4dHrbJHUgXMmQRmx",
  "key44": "2ssttyspvbWojUrHtgEFpr9GqUeJ79RzNsQNGvYYkxa3WKH7KeTapQLAgvptT7upt3jsNDFq5HPJakrWcJadPssc",
  "key45": "2PRG1yjH7rf92oYrQqjFDJ37fTW6PDYJe3jNBxsGREpqGz2194g3Vm5TGPNDRe9r3s3A4AFaNZeYo3t89ULsqsge"
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
