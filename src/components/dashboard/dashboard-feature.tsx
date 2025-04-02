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
    "tkKPABW5RDRQn8WRvqucLQjEQHe3QA1QwiWzqnRjS9K3CaJ7mNhaGof8j4Lqs5nQ9rnUCBdE7Et3RE15XDEaQf4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XixSBVufzXHhXP45W5uWFe9J3g7SMP8KERWnMqGiCbrqAvoumMXYCfF5DjmhYUsMKybyM1Vvh8i1HjRUobmhGh6",
  "key1": "UTEzM7CF88ufZ7nupWHjBU8LtDBuh7giL4zUSHv9Gv74XA7EH43UEqZBoBMj1tV6D186jTrVYRWCbHfL1y1fxHB",
  "key2": "vxaT1LxeTU9S5ugMt36PC3PBANXGEM9FjqPQtwAA1SiRP86QAJHjk5qdCw882F2nWGhhDj4DomB8uv2SH8SfWBh",
  "key3": "o9Ru8hEvbNujAmPG56Ymmo92sFS6bgsbtc7DPktMvXSYRv3JDXqWuNW2wCRDH3PGE6kMiqVvxQDAD4P1gM8QfhW",
  "key4": "5s77CKDq8tffkgBJoepqTkAUBzkVJcxR1dJJPxL47KAeeyujpER3H6owpcNx3xwV2RWwFLE8JAgVLQjooVrUR1NT",
  "key5": "55QeLo3VSML3HyePsB6gnMQX3tFGgY7vJoQXqWxwwLAAeRS7EvJrSThAtQNz8JAtU9dRAK1VVfmnAfrQ4P3Jo2xz",
  "key6": "3tRvnC4G1QzKk3hNDfX6oGxdGhJsDnY96mdmTjogVx5nUQXJ1jKJ4jwoBiqg7WEh76LuNGATtTRGAyx3gLaydYqH",
  "key7": "2SABhaTxA6jFgzkXWzy4tHgBQGjbB3rPZfsmAFhRK4jxajGQLWFRb5iPngh1UPLUBSkvtHrCV3kDUCxiLQTZVfh8",
  "key8": "u5HAVWvXbdnMm2moFtN2WXkN7f2aYDf3Dr2PbieRLUjum41gWfXsYa6XYDvVGAhoiVeEKH1Y8vMjGYTXthYGArq",
  "key9": "iKNaywE6U7DQGGApjtSgN1hKaCgmjWM39Jy3dMXNKJ8qoqkwe2HKPj2B561s9ZKpoBWCNDqgUsNhcePgv6FBoEA",
  "key10": "2BoEooBWrrm9a6iEc1v6XsqEz631nBbSxJeuNeULwUU9LWDuhvH812MAkqFjDRQ5SRr6faBdxU9x6QRQTic1K6t9",
  "key11": "c7wcQWSc11SAUkaGnzXsjD7DnosVLzJSd5eE6oqztunrr55q1LoSBUA5HMPGTB6y3njMc9jhiDWfTKBoxprXny6",
  "key12": "XFXGWzWtH4BfMzSLY1CY4p7gqDLximvLTw2ysRMnUxLA1GaBytAcDw76i72kCqeA7RqFinWDPjh5ZXPJWsDRQay",
  "key13": "54rAt84akX8wYAtVMFjbrcu8WZsmqf8nhJrVyMMVKV5g9xUGJdAMHx9p4hxf5te2PbTuZyTtWCvVaKgWXmUJd2tU",
  "key14": "4YWoWD9C5frXSwEnVwK5L7WJCjNZkKDzqsvvMUZTDqTkGYRCBcCrkYYfsBRH58h2cQCTMmcefcBV686Aedy3DoAS",
  "key15": "46QWJvyRtx43DZbdSBQfnM4oJyRzBZpSbQiduXtsffMWzhzJ6gdRPAAvWdzzrxgG2Gp2xuZyyVL9Cpx7J43BY61U",
  "key16": "659nyiwdifTtsV4pQLZzQzgke19wK2D7qkLNugjaj9fFfBaAvhvg8tDPJpqQEG857FtCTPa26JMgYincpT3UuoTV",
  "key17": "2EMhWpkqxH13JX1XNoVTrTwrCQ961t9YKstT2dPNbtq7bQEyY46f6Kn6557HypceumfHQ32fdUG8kiL6ucPSBs9y",
  "key18": "x2QFJvC1EvLKA75uhmdetKDaH6BY6yT6K3HU6oYaVDKbKrsCwh9LuWx8YAYXU9vwcDtof45irtqDKuAj4WLbCbX",
  "key19": "2CHmo1i6fMpg2uwSsosAE68a1T77z3hyu7df9a5vb6vAYaNPAWhyoaVBMHKpQU5wGNLzvfo2fX6U4s7HbuPN2sQN",
  "key20": "4DQtCChjHLgqjhGJtRWzFHEnBXDP71DqSQA5916xKHRMwFV1m9yzZ28zcyi5C2aAytqWBrFcAu4cGREvaBX8FAvh",
  "key21": "2QPqB7xx2mPWocd9oQkwXyQNcYvQfJiRe92hdKhY2PpJWkPY4du6jTvW684Vaq52XsbvBvbordUFzsSo4CupfpPs",
  "key22": "4zGsKkQJdxtZKwUcZSSMnqhR4cTNYgERMwXuP6btri22ERx8Pxxm6TrU7EJ7y1Y67qcgKYRxSinMexqgPY67pqCb",
  "key23": "36NBaZgDtbS2nuXVtaCvFREWk9pGwsnKDkaboPXjQoK6CWi4vbLocd2hgrxsncBVxfBUUEVZuxUvYa2msQr9V89q",
  "key24": "4DPGaLxDf9m6RfBqDvmk2ca53SP7K4Wt6kBMtLfLaziB8jePF7Gs5qFfL77NrRwHBHWVog78ZwLbV4QUBk8DQ3aN",
  "key25": "3NgTvZp7Qn8iU6EBhz1FaRq5qLtjJqJ2Yizj86wzvFiUQGrudfHKWyTe5KfH2TXDQSWHmZMjNkVCvQDq6uE8swKi",
  "key26": "3dWnccVno7FocNsWo6uBj8chekh2CVyTQ5Vt58k24pJHCUAFuiiJSFXbRntsRJRuxzR3SZPT2aUxdQhAgqMmmGg2",
  "key27": "r2MjLNFcDnuf6tfVq7pqctgsrLxLP7dWB7xcBeUb3HpvvE8jP1oA6uHKLo1KsQGYQyMUPgBgSC7BXzPxeYDwL8E",
  "key28": "5V7LxkE4rvaK3xPNXhoCfe7RVxsQccqd9zmHe33LWz4FjZ4mhCB8Lu4xXxNif7rYP3Ev7zyieZ7fmQoDSZjvdUAR",
  "key29": "44QfRsprG1egstBnJ3hX7JPxs3zE4oBYya6XSgiKs1EonP7cKmDD5FQgmKjwyCEQqaLradda7Gwrwt74kKLSwQYm",
  "key30": "5smNMYEFRNdVta1FHpyPExG9dDRna2yCYa7UAfPwMPzYcNnZu29M8qw2hEBwETMd2KBgQ2iEpBFkuR17pK1LuyrU",
  "key31": "33PMiBDnFArY4hqgTdSDVRjVqYcHmuRweMrd4afz9S4JiUMqywvd8YUPpSpcNqGzUyvyfRUgxdvejw6ffgzQoVif",
  "key32": "5P1ZH8nAXTsUXwhByzTc3GBQ6FMphV7hdWsBhbWkzGFwLHuEga8tHStucHvSdEVUfYcWc5w8MfPHHTLb7yxRxXG",
  "key33": "2rocVPmmFSHyafvxQbSupwBvhN29GxA25LH8xVcxxjEkoSa8uowx8pnMsxCv2SpLKMeiErud2wvMNJ7LBZ7H4PTE",
  "key34": "61LPoHmqLExNsp9dS7NH1yx3PUhNgU4Md4ub8tZUKaeDrNsLXduDgMcUjc7NXP1iWpYDeRMPoJKbNtDXjuGgJVDt",
  "key35": "q48nXMTf5fnPaDr9PxPZsrgvUfLvYo1DpXduzFH7cCZ9nQTMo6sn5uz6sBmr9BusFKY7DHK4zYmbHg7rpdDK141",
  "key36": "3cgFcMMbUNeEnszXSy716kJchouJVooeV9NuKJuJhhUuZx9juTsCvb3wzK5KbyrsEudSL9RoidZpt53v7hgqth9J",
  "key37": "4vUzqPkoEwBYQ6PsSAEa3ZHVSg7opmNDRh974NbwbgwjCTMsiLL4cLYj9h8Sxpb2qKabiPadZu4D6vnM1F7vFLX8",
  "key38": "3fSustfnxe4HV6aMSffj4hiZYXKS2sjaEJwTCA2QzRSLkUfbH79xd52hGqXTM8BzqkAMpG7DnTYuowVFxKpu1obH",
  "key39": "4ua1ChDRrtpgaXxr34rm86P7rKdaMtYNoxFjLTaR99WBnstXavZrA4j1vfAC8tkyBhhoybJTjVSuaLf74r3avMAY",
  "key40": "5aDcDCrzW2MtEQ1VfUjoZ1ePjiUYUdNVn8Wq59Tk9tspHceP7ibWETh3ANAi13YVAuQ4n59FEx9wNjHLHDFKbkyd",
  "key41": "59stfaaVhA8bRQQ3ndJfQcAmcUqCLZ8JzkvqkHneeCoZZ5K7u1PgAWvjUhY4icSGKVL7kqZhMDzgWpSD4d68nwSy",
  "key42": "397qrw4CHY9TB64aZAZ3BKSMu98vihG92UMWxAj6BCsQU7R1k1pgf37D8mrx6TGziXSYkoMdVyErJqV4fvv6XniN",
  "key43": "2jGXKn5qpas2RsiWk4euzaWCpi7EXyvmmdKajK29rUdDtGy5pB3FBsw52QGHEkbYuUNkFtZ5kRmThQm9NLFaN1us",
  "key44": "4yEtTbnRTgCHh3RK7FxtG5Lnv8z53drHjfq4n2BUqX4fb2WUooU5dsN8FFUUps1ZbMLxaV1UqShi9bm9S5t3C2yL",
  "key45": "3MnpK4vGn9RJi8iBhio7h68NHaQhpREV2sUZ5Ak2BiaBk7LnGCJiL6Rw5T3SQXSnvXoXg76jAFkga3sKmoVSMWHC",
  "key46": "5MbECExT3ysJBD1armRBW9TnM8AWvznMEXpWK1vbPpAnunqsEmrFaACHJbhcDE3RkHE4enk9nXcS4cq8XWnt2UHX"
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
