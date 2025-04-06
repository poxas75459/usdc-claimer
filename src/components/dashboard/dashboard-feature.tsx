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
    "5TkDNKBUZ1hD2F2cUGzeUczoDzF7u49uumRTUCST4zYzGeigKaLyFKEjNDzhGGsGP7sEM9afcUDbA2DC6hvUg4z9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EFEE61BJPK9xSBeRfUw4oYS3yZ4fsMi3twDiQnvsTPaN8ptoMBR4MLh9ZNQuPfdsWpJnMMbEEenMHae5GFWsRWE",
  "key1": "dzPDn5JyChPqWKnZYiwcqXPf6QEXZpPRVDdD8omnBrjSnE4NFoxHkob3rzmg5jNRTw4iFcL1XQj3GUpWpiyKzGo",
  "key2": "4yXhEBMHe4BoR4H4mpEyyEzprW5fgDjvrNqW7QzRXrce5xaRLfWesuSjF9HfMzU8nveCthmaSJYYLBNPT7EzKmQE",
  "key3": "655EbLka6Zzjtbmjesr7CbGjCmULEGdXxmsVJtHfiPktu4EYr1DFRgpFDHiMi4CNG1acvTaUnKJv8y1QLXDkRBhx",
  "key4": "2rmHg8y4bz88j7vkiGjnGWJUPGkKPCiYcWrXmiZPvCsn65Y8ReUrp46h4wJ815o3kUy9H4sMqBFrnMpnAHFW1jNw",
  "key5": "2VEUGTLVT7QMXec9fBAALRd6nZbXXinCUg8eaci6ig8HNci79pMbi4RrqJ7HStQaPvkuQdSkSRGJBz7RmrDa6PaE",
  "key6": "5N6HxnarraVh8rtnPk4nNFUZ7pqq94vLk4qjWKAbqRhWDpn4PwhXUYBhiP3XqayBKXTgnyFJF3Kv4wAM9xvky5hP",
  "key7": "2Dye9QoyhCuY95MWgGm49h61qkKNTbE2bJiQVku3XAfHKKYntBU3z6fnX3T5Rqd4ZWNfPEZY61kBiBA1CuHVUXK1",
  "key8": "3fivuJb9otn2YytK5iZHQg9SqQ7Pf6GhuUx13kNBx2Z6dtQjBNrKPGozSQRE6zkNPnX2FZCqVu1rcAyJ4ST9SGp6",
  "key9": "4Wu9spyw4wNLiDrwN1pcJxucnX523uJibvFKVetdVUnCjhjPN4FXfowmCXEgsPt5QLExXGL8nH5Q9Zos6Hxj5NMh",
  "key10": "3VQzEBpDLuQ6sSR156aoQJQJGu3gukD3n5dkhS7uTT3G4rQg4QgKxhe8E8Kk1uvReyvajFnjztbkWb8jeYedazpQ",
  "key11": "46368cVm3A9oG3FmCEvZ1dx43dJVtJMU8XXFgzD6pViMwoXb6A6tXcGRk4npnPkf757w1dhXmoE8gK9sxmJY6QFU",
  "key12": "imqqR3fmoTQ4uscx9n3m43AjTH6Fd4UiwiikPGVdruUtYraYXe74eACLifSJUSg6MYh4Scysv2yVAgRcxexqqRi",
  "key13": "2B9KHEp3JtZ2PcnBQrRkGTZLDm4zKUBdsoig7xNjAWXtp8DY18o7x3zc5P2wvDx2n7wfCTaejC4qwjVbnT8ht3K6",
  "key14": "36FZR9mfTQUUSC7tsPmRZx1PVMzpiiZzcaj1brMsEDJ4H3RH7LpgkjvS3nBTdaAN4aixVmhpycySvdELWqnL4fzZ",
  "key15": "5U9nxw2nAKAkHQFhvKdJ8dMLCZfqqKF9LDXxvaTi3KT344TujKt7aF2YmYYspuGGANhZNGqVgCEJXhUFmYTjJ2n1",
  "key16": "3sxB2Cenz2pKRCFiHwQzaJccLffaDLgs22v6qSE1RvduDkktfHNfnk93JZZBhmeoMRSsZegDpmihfgPZL7ZZ5ogD",
  "key17": "342oKuT6wV5DpHXBUHyfKSTsPTfmGcH6XgKafBFMFVKCifQ62dEk7QBXURQ3tAFWiUJCotNfsuabzhR5MoPzzAhf",
  "key18": "2tsca6hp9KeYYoT6AQXuyFi5FPovPacY12gjRrexQsXxyc9fDSmE9AEH4j6j9nPAQzbjE6LbFYbANmeSzevMXBzu",
  "key19": "EZDCUPvtjWM7RaoiRFCPbnQeGSLZDXKsS697SfrKiVRadxnPGsSto2P4h2y4m83HyZTNkAGXY99CdWpwfdAFWsj",
  "key20": "5iH8URXXE9vph5bi4RuKNKTjYd2XbtTxAQfxFk2quFXsJFarEd2f4XFXqGAp5bd1hVy1TEzDY5QejPwnDzVQ2cnn",
  "key21": "3piamo9KyD1Lb7pLDJb6uRADbbHQDSb8BAABChNrhUT31ue4it6eUvc7vEUw6HkkjSCHzkqQFShWygo6p8TMP1xm",
  "key22": "4zWqUmbT7EeZnc5KsKGBzcvFrbTyHUuwTzQa3B7aTFiNYudbZJTfaS31vXJhFkveT3MN1yyL4H96BhJP5E5nF5m8",
  "key23": "24LVisP78c9YoZEn3crKk46LirxkMEHGxonwVsZVckYHg1TM5yi2TZoiNZwCk9jZz8aj8UJqJERmkyFAk4dt8P8n",
  "key24": "5gZ6qY1s9KHzHfaB9PsvrdvGFepxDLyns3VLp1FnMjJ1TtRQN2q5aFsJaZPeBPsVgJ8epoov9dDGWKGEXcPLQM62",
  "key25": "5A2UnrtfTcSv67ntwxwa2dv3PPgo3vH2ViTWR8xNTHkWMTwE7xHBGNKrLU4KdchsHkB9Lu3SW6RujwAg8GcwQDaL",
  "key26": "4xA7hwK1H6SZot7KBpTEB5qhXFZUSQrBvdPJEPGatW9h8TW13K7LCSbvjRqS6Sdsn5ACxt9rq3P6u4mV3BEHje4C",
  "key27": "2Y7nzLuBYvZqf4fVCSfknDNtjJUAxmXiFcT6PBEUJo9UEXTB23ngZ1xYkSALxS4y6DqvtDovXWESZRg8BeqtJMyP",
  "key28": "iRtb58TvERgCNMf4vFSgXRkgMdz2tumXwqDRqFD4utb7jJsqEco3QjvsLMnDtza1CMPRWZV1Dp4wKLD5aPU6pEr",
  "key29": "65cCtuxvpjfvxycpSv5XXnhKr8dirJKqw5Brb6nkqJjQKYaZFeQ84zNyRiQ8MuaifSdYfAEx8pMgRrQ4Eospo2Rt",
  "key30": "wAiEhx2d3VLwWiEH8RvCaTmaB6pehQCiqmMKCMHXNqWZUwdhgg1eGDBPHeLqmjn7dck3KccxhpupDgUuEtQUm12",
  "key31": "251wXdDxV3sJq2kKirxAKFG9RsCLezzpZiZzUixZH4QwQEPutJ5bRraVJeF4x9xbT8cr6a6H4ShiuWx8vdwaovgg",
  "key32": "4hrvQJsDtZVEjJaL4SqEu8TuU89mptGSDHA1YMzjd5y64eLZkYf4TqVrGnFK2v7dJ6UbBMzdXVnZAmbGehN77kqD",
  "key33": "1worWqjtFZTZMnuFeGf8sMMLb6kLobjhLZiQxRhG8t4bXVctUcKcc2AGWmkbAJPYDBo1WZTprfoVJt44SDsn7R1",
  "key34": "4UnxPucLRYLTXJRgt4RDLWtnGPGm3b7nH7ho2PiA5v5NghrPeizY8MWC5poRkckwVpq1TLDSj3REsnnXTV7eMwam",
  "key35": "55YxaLk64M6VeHBrU51YjUXzpbCwEEeMJkF5geQvhLbh1gYfG8x6Ff9Jcjks3mBHk7yDgruGd6ernUVT3ZjPbvxJ",
  "key36": "h2ZfVJUwTEbUQMEmZFfUzG4Wd9irDWZRo3RyPZ9ty7rnxFtESCZNiA9EmGbEmXqRi6SNn5CN86ppHkRfsKeBkYJ",
  "key37": "HsXBtuGFRyRWYMXagXWaAxtE7ZhzPC6kMPVkKQtdDsCV2QcRR23PfFtrby6raaRaAG5cCCRBbn7dNvYM7BiFygt",
  "key38": "55EUZPEVGkunSdM6XyYmvu5fKsixpRCX76aZiPXSzVnEZYC6eaLYWHDCRoj5SgQc9LLy2cHuFgo2kbsNMCRhjBcU",
  "key39": "5oJCLoZphpVZkonMcgcZWCVBCcT8U5zcbH77WNnijvkWuEY5YoKzY9k4hqBWSR4LZVqzJWwfzq2hPCYCgi3Bpwsc",
  "key40": "5xifp4vxGXX6XhQwwFkAvo2WgngQtuLU98gyrnmtMoM1eVJgGv6WpxL8squmWCi3m5Bp1ivwLnSYJ9oRYXc7ypdV",
  "key41": "4NcuoFa84jfJabCja1kBaRraUBCr6sX8CBESr2GMkF77MLCRmauas5vuLm7FBfQKPgMEywy3CMj6rSgoVyACRzaW",
  "key42": "5D5pCziQqkPgKTKQ4jzR1TS5LG6BzYeLF9Q6mjddxcpon6TqDyNyarEG6qcjnHNWLgjrihEcg1KxzeRjmfTKRZYL",
  "key43": "3ngpBzfQRExrL2ng5ni8yYxhEp4q6LFeh3dbp8SV6y75TpZbi3tR9bhawX7MN6y1RpVhZJgKLaP6sqssVWHHAyzy",
  "key44": "43NzT85JTXaqoSHMbEpPnbNU1bD5xbvXcBxjg5FVaXQMMkWJZeozZYBRdapatvAzEBZkXmfp1jvgFms65WMkcgwP",
  "key45": "39YRFJDdEpQqzz8Jcar2QgUQPDJxJBXrYmbvUaog3CqaBDT3NG2pBTYVto3VwTVPBLM6LsSqhVqNK44uYKNEsDrA",
  "key46": "46t7M7FJLw6JFVxgLfuwPC1tAe53zcS4azcETrPTY9E7U8EU8zWnxLaehZraxZct7ZEW3gX63ohqipd2AtBQFFJW",
  "key47": "2Z9ZRL2gGu1F5gCEtiTCvNXdr31Biajdctsr42BGqPE9ojYFDXwqFWVJMkd8CpkQCKt7rzEZ8McFcb8z751maKy4",
  "key48": "K9zZAR2m8iQFJgLwc7BHcg8MoZQYYqgXzqz2cQoZ7rbXMF35dPy4zR9QM5tsfxLCoVecwKe3pvh1gkS3mUgyGDx"
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
