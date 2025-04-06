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
    "5gBo6C8HRR3H6noXpAG1Q3iiJ6ZwFAESk4ZPWPDLPxjtp7RDaCKibqouqWap3mJ6t6yb5nUJSpHhhJkTiAs3oQLb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uApZvSUq3A3ZwNfWRd1nSkEkVgggESuSu7QgTuZBtkT4wD9SNir9w9pZ5Y1TdaSP8VArfMNGmbMW7c2XpgU6iXW",
  "key1": "4XdGFu26nDvvNBRQpwWctGj9xfjRcFpJtm7ffR9y2SnwrMdR4NQMHYfTBAp6q3Q5YT4T9EhUM8wyyPTHguw2Utw8",
  "key2": "wNLDAPmz5fw6JoaM2QxTHvRuytz7Fe8nDbKkzNHBdz4MxSJiLSms7jFZq3tPcvu5yN44jURmj5pTDNqa6ZjK5TZ",
  "key3": "2kDuKzStmhKXxWNpYUVxGeCxNG4ecMqtEjsvprJe17UK5vc3a9mnGNXX2Da9PdHg3imUww5g2Btzrtqj3y9yMbhE",
  "key4": "3vvqVEVBf4o1PSH8abZ7GnwtAJGMxoY1s6WJ2YLPPR1CnvWs61xoEf6BL5qKur4QMRpvCqY5wr5EBVgdcG9sb2zE",
  "key5": "3y8svUFRAhWhrMWZaCYGuaEZgLJDRmoEdou5tD88ELbCgncs6vfmz4fvdf7FmdRsJvfSwVsGcsAfCw4HUsPHjHw9",
  "key6": "9Fe9oTVwD69cdpBTMyJn51SgVSU1GnCtZfe9HKqz44PRdFbm7xnTqdqcYCucYFAvGzc7ybWp36BagozQYPu3GrZ",
  "key7": "4PxUVWkHLNvvXBn3XHJDFNtr5ymgzhEA3ztM6dAjyG7jU5tpd6DxpgvuXKFd7DEQDpcgpzMEsGf4YotmND58vA3s",
  "key8": "3No8hP2HiD8pFqL5HPhUjh3VzFJzF2YYees4rT19HuSSytnkH9dHic6Ex3XxNiuePSwdehsDcj1y86j16gQ6gpKT",
  "key9": "xQodwUpxwerCU7jimWXvUnfEDiMiWVueMx6vCnDa47LaUaXhPzu5r1Nf8JUNN8RseAVLzVqCisvNvPCPvFFyURF",
  "key10": "5inN88G7MSUA4vTirZKMyvxNBTdm9Xc2QxkNborsZLuy8ohSbwWgaVGsQ3XrCL774E6HmkkPkp3nr4AmpYuJjTcj",
  "key11": "X7peSyT66k1EAjcwLCLYRmvEywf111C51RtErypA7pMQ2Bf1R9au3uN8g6kdCW2CYZ6CF4ZbTudebgpTjqGQ55e",
  "key12": "3Krw4rmXbVU5mxEKRfybpMDoK612BM1SbzRsGWLcdLscgeCmXvqEu4CFFDfAtZhDMXoNMWFkiM42aSMYxKDjhTvv",
  "key13": "48JtzzN4pp82Ug3fmftDWTZ91ghhDxBhrR2bAbtHoKYtCNaM54g4EDwZKZDPN6ikpWTcrTw98RKoWbwrmKidzAHQ",
  "key14": "8KRfBmsXRcygdgZiYmRCFk8MSHLpo6oKeTYxRXkfKdDPjjZAGXiuushxgom5kmFYpr4EWnD5chKd8HF1i8hPF94",
  "key15": "33zhmcUNNZKr32GVEdr4DCYD1F4eXKW6a9d1ZJbhyvWhaHrnw74XZWkAnjNdaNot6FFbnbrkgckpJLHYScu9Q79D",
  "key16": "5PR5qawauAXWXMDPoSnBp4zCreou1ctN2xXXJgqLBRv7hCNahJzauuBndGCWz8dHfkqBHiaRC8DCQFQXadSVXxK7",
  "key17": "3zs39GM8r1yLCGdEniY8B1rD6k23sbsvFmotfuYnDAD94bDXdseLea9KvkTCEFJgzt16c1SjmdcLpzktcdwz3fR8",
  "key18": "kwY4zG38GtGnN3ZdMTbn4CjytA4URGwMb5s43q5DNR4AcGkTL2nd5BG1xyAhZ1rzC2n76HLKPycTajUZXs7Hhf6",
  "key19": "59aA2VbcGrb4orFsuWZQeTRDNzzUVbnBcY19BdHo8TsfzfUe9b3sAVbxzeAfen13aCGd7V288vYMnm8NcRwwHpQq",
  "key20": "2Y5eQMH2nTvzi4QchWE5CWB3K5CscpFwg1FDEQV2RTYjYDPc2jfzrMms2sgVonWKY14sYC2yttzgPVBQVEsx8GA7",
  "key21": "bdvTig7bqzsNbMdsFoKSpzpGN6fowBUoU3YJkProeYKV7aokFpYdfJz82BbgUv83BT8TzKLHnFmDEYgLddsztkh",
  "key22": "2BC9cMZv29LDCFGaWYUHCPS9BfjrpkLbjaASUabNUrGQrcA7HL5R6CD2EaYsfndZecPiHxupPZX5LVgDVxarKj5m",
  "key23": "tcUcnHpTnXMxuxCQvV3sTRGQASiuMdU7M1vchJYn9eGyM7jcq4BPffbxYmBBqfLkRvTGvr7aYTVUJV29To5mQFw",
  "key24": "5Luf4MDzAnKXpkuQ1TjQ5vQzxxyFyKGKB9FM1s59Ny2BGNVCUtroEFL2LAQ3k53UiUH1ZoFeXdvGYXtEqwcVuysv",
  "key25": "3Zf8h37sYC1hGd5469D9KkYvfrZaKEe7ffSvkNkFdqqVMGBcJcdGcD9apN2w3wXm9LSibCsHjs2ajFM3m1V3WKNa",
  "key26": "3vrPfH47awoHBuTmGQwohJ17m7xsaK3hfxKkz95aqp4XBLjjkMezgATspY9WK3ArEu3jjm4jBkP8Mp5ENhFJfVkA",
  "key27": "3EHb9X9ycFvQCti81hh3r7i5SyZaMNsP5XFDMyTGN2Pvz7m3GQPUXRZDeBG5s1EvoWiSNK3ZULjc2Rni7RtxCKzG",
  "key28": "5mdRTBnQSdmeDTRiSNQp7pUwSgghAZDrj6YjfqhgZqwidE13G6d83UgCJCesh7Z1RexqhsTbWqxUcU8RR3gVfkbf",
  "key29": "3YQPs3fSx1oYt9Y5b3jFaBeKEXXZuJigd4qjF22LS6w2h48FP5DquXd2c1Z2HoNJ5jyuxmkHtWsu7hoquC8QDyRB",
  "key30": "mc5JMJPq6LWFwcdvU8FufNEK5tNMQKpp3JRxvm2hrbLjm7EghAvZKo4627pgJd8eAYnncuqVssoshxuHXN2dP8q",
  "key31": "664TeHm9A7QyEBqXL1cfhgmNQHevnYkEfHENCpDQ1f8LntaVEK5wxPdehH9FGsmrXjoTMMyKSLDcKQf45U9R2bT4",
  "key32": "rWgDD59jRtpKXRCpUaaM7Wsdv6TjvoAyVWZwjwBY4RXvriP8kCaRfJqQE6D2YHFD8AqodN3sL3WxJ2fTLn4fcdo",
  "key33": "4EU5wob9ubrJrB1XLEWeWVhdZMpZmdv4isM7L2ZU7oQ78Z5iUxUBsXxxXC27fiqcVuTbKefUSNPFzeRBbpcx714U",
  "key34": "3DQ66xcY6B4h3smKEtGToUvjuQtXE2ghymGTz6HdWj7JikM3iCKtQ66mq2zq9z6ieEEpuRSS47jQCW35nBZzeMYK",
  "key35": "4UvuSSpSRkLAgMiWWiEnLccQtg5F5KLMcRtehDEeE4kMZNtsmgUBo64EgpiiTMRK4PmnBBdaedTh9WQR9WescrMc",
  "key36": "293EdB2CeXLXvDiqwBhvKrac4eVAwuMem7SH6smNNjTtya2WeMU8SRHyDDbskpBo1j7PdMe2qch916wje6AcGwey",
  "key37": "4UGtoGd77Jdz71YiN9KnLyGZkqm9WvDTc9KC3DrErWkv5sLXge12z89BDcvfHaUdAQqEjRr59CLdvEvEYAbiDJd2",
  "key38": "RZNrctX1tExAJC7yVFiN21fNZN994ACbdK1zKJLrLUfH4MSVgMBoccMXsk5wfTd5AbgSCfMNW1FEq3jJGQFopyF",
  "key39": "679dnNnHzg1jXSix6mek4dxDBwc8yBCFwY2LYfdJ171ezuyBrUiaXud4bK3nqSwhwLJj3u9ZjTu5sHhT8PR5t7b9",
  "key40": "Bhw2Xa9EbSA51CEgGzHgzHPx3QXaGkjFFfHdHEZCdmQw4qk1yrSpzzKZvqur47QSmvyngYHfFXXCbC6Uq49Q77R",
  "key41": "3YEXqmnsL6ZnYihiHjKDtPt3kp9Lfqk9MpUWTsETwDFZguJ4d6jX4Hr8soEbX1SahoS3VP5WKfpy2vDETCrAQE6c",
  "key42": "5XUo7rPd1TzmxRPwpkxd2NPH3tfSFj87dLUZ3WHMzdzZSN3FUoMBiMHav9vV4T6sKv7dXwtoYZ7ECBDWzfiTS6cX",
  "key43": "3WRV8MLWx2PhUKKosL1nPhN3JkMpNzA5zkoE8YM1aEjcCmeiRXb6JhmRgTNXHcgRtSZQe4einxr6xqVR3BFtRtoc",
  "key44": "4Dj64ZvmRPNGxwABQFGXDPnYkQXMC3B57h4TtHoXbcEtoSu5STb33iADGPS85SLdk1gMuzycDPADMoMbap7HaLaY",
  "key45": "2pWRJGjJ48zkcCKAsDS8iyDNd8rZeWTsfBskM7xnwvywKrTyXnaUU71EMd9HmX8NYjtfxQ2DWw5jSSBgavT4oApL",
  "key46": "dEyaWT5UWSgLpoGeYoCqfvaPkusCSeXtVGCa3VhtvdaWkrYnmBccyfUrB4QnVwQs2pzQc9zTXi5hkHszeUpx6vK",
  "key47": "3mVRqsgjEUDFKcCioYZc6nLn7CijZNfmGGAfjF81yX333TVFMroS3TUjd5Hwfh8HHrfhzywiHRKFLd5cdUH8AWaT"
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
