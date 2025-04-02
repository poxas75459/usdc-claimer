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
    "39qegbgywNRzRKc9VFeW2UpeZXkMDdC5e6SYYh752zKqJLh3dcDyK8gPj57Goqe1rqajtYxXMHRxfbFqkhiojFd8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nmdo7zXzCstGbD4zAzUkZF9bWSaiJwwdJM2C4RrYGweX32zuYS24UbEPWkGt8Z4WcrahNDfLMYXBvm9rKLwaYPA",
  "key1": "2UKCSkz1d6LFAE6knJRiqNWw4tXPowr9CzGmGSkpFrGHikuGALw6av1wsfS63CiLS86chhyy9R8sfby2n9iG56eY",
  "key2": "3FqfAFK5ZmH1DoB3KaZXgS6pZvmaXYiLcQWnQBpya6rXGnoDsVCQP95mCFw3BwY8beW5YLMWvE9fCuFZHpqSnHtA",
  "key3": "WiFTSzH5FAseWiywwrtkzP8CDKK9b21PCLopd1ozGxNzuJF2Scj4ZzCpQMxRnXzudcvFXdWFLUN8cizB24Ghy2f",
  "key4": "jHqFETDkorbS1azx9WMs8coRpAUqRkUviV1j25DStupwRoV1btwMwiVqVEvBEJi4YDQJXt4RgDrZmWyNCcj5qpR",
  "key5": "5Ym1avYp3GVUBhDPMtZZnTRVnwpJzc8FLP2erGGUbKkgHvyHUAjAikW4CW2A5uz9xJK5MC4vexTKHhdZ5XYBU7fE",
  "key6": "2VV948z8dfH13hb9XSe95FnuRTzWrmSyNp3PgtqB6KpK8HvV7xHCPxAhUPxkiNiVzmo5RSCnb5274DfAxp2RcxL5",
  "key7": "5StMLax4TtFoLWCKUb1794LXsZH9EhYwJjzdZpWiEq2KPtBqj3wE3MGSKYFTpFGZ8NBA85ovm2i1wDvQqpsAfMU8",
  "key8": "2PwgXW9WLscDa9RJsset1D497rXfynpDiCJRtsNDWwkgfVQ9hwH2LnK8aPXjzwSJZyd9jrtQtV84VCef1VsRKany",
  "key9": "2xs66cgya9PW85DJbCmULgy7k6fm6TuUgTnuET96h2ioYqPtXB264YopPprnJxMW92hKd49BhAjw6XzG9VWSjTZE",
  "key10": "5eRnmJCqwLRk2ypJkCfhi21wk1NWteEFFXWRNZs8fFYTTsi3jVrXoTVhFXMqJvado56FqumvwRxvnYcZgJhNbKYM",
  "key11": "5HHKujZ4PUfJzbuDH3oJUR2JFH93MXpsmfGzgvhAjtsZHSs32tQtLswq5VKBQBew8oFX1uSb7teRUPtsbvVfVuuL",
  "key12": "5F3dmaS7ScpMJYwPsPGF5UtMb9pwWHLvP64UjQ6FHvNVDLtW4trCYh1AZyq4GKUZsQbZCCZGtfhn1433EhLxvEuX",
  "key13": "5oTBmqFzvAnCds5deNC4kEDYP4rrTMCH33dR2k3eoK6z18U8tjNXM7L3M4pjUMEoxbmeCX2WRzazoukJDeeyDfav",
  "key14": "2txXJXaULzE4BS18WxtJSewa239TxauFbphtUHrHBfPEfuS7KeExaFLL3wfJyEmfBr86usUKWf25t2SRE1szEXTD",
  "key15": "74DvqHEMHX8bnKmk9jF3AMzq9FRVM2VQ2gnLkt18hBVettoumoxFfK9aABvPeJLFERVwPzCNMDoxhZe5qr9MLFD",
  "key16": "4XaAnZ5H3HzZc54fsvpfHVMQN2yQwRM9UhML1VWxnKcT871HoWZ3HNGs8Y7KVCjpp3YJMyhV1c6uhhEJXAUkcCxB",
  "key17": "3pytGWpuBrrNWXjSxS5UbuBdGdnsn6PMfXq22gVvwUtTSzMANXKMsEJpUyxDV7pqsZzTrh7CuXTxJM2y2vJ6rSzA",
  "key18": "2GGkTH2aLVVZey5VAuboTmj958YV6smKC4gHpZxw5oPLDJQnoHnH2PcdCKYPXXFbt4UjzExeniHMAnCMtqXxDHPV",
  "key19": "598UDf8Gq2f1REK3Lrn9V3cw71cHmYLMcJCdVSyEVvK1Xj96Cpzbu6Rr99QPKdcdYFVWtQiDttAEnCT6xMnLGtyo",
  "key20": "4CpH7sqiptAzC3g1zTQ7RjQxNJHYxiF436LbYeHR31Di2g2ro5QXk1xuPKEprzGvanUh5cUV624JmP4JKYP32JiU",
  "key21": "5jy32iYV5nybYFwtmNcvVvdMzAdqsuYwYpg14a7h9ZCwAZFgDZfWoLo3zjzsT3KRKJ8SbPJNcz4WA1nTyXCSnnt7",
  "key22": "3qL4HN95NthpjtX96XoRWVhMqHYuXfF6JoazEsGBkMJBxDzzLxEKcK6CXstZ2i9wmEXpJoB2wW7Xp3yGFvMgDyAx",
  "key23": "9FZ8w6BoThSqcRECxUSx1ztmS3R99ogTefL1dDDgnPyuD9T2Z6bHyHoVizSjagv8zEq1P2Yq4m5mH7MzFJmsgdW",
  "key24": "33eDwXu6QB5K1GMmC48eCskSJKNUwhsZ693UwyDH1Ye1R14kcBR1iiJkbbVQt6GmWTkH1tDtL6knpT44K7giXq3j",
  "key25": "3FBWh5i9PRqd3R2Lc69efRZPTfYUYHa4eYUskTaerqr26NnJjmpqwxGaKjCBZbUzRfjfKstG69rrsNce7CPPYvMh",
  "key26": "3x4qHd4FF796nnLd3YWKqojFpGrT92SebeAuez1epadVjbr8QZimmkMFMsmi4GZd8daqdembxBJ49wzvnsDxnCbV",
  "key27": "5UyKUdsjbvNdZWWioJvcxXipimsaj7vpQwar8oLddasesus53CCFfRKvs83noRQXZLuKstCq7Eik9EVrM1sDittk",
  "key28": "3CaYL9chW1omfSFdMm9ajcdFd5CBDzH6xnfFRyBND2G5727Y1Xzxp5rU4qXut378RYWoHqekyYmjdCdmYRhyrCQD",
  "key29": "5zpemxw4EGhZmVQZQDGAv9FaMP9n2u9jFvxXmKtvvyyvTsByLFi9Q6hpCm7pRjHEvM6sG3yxqBst5DfQjmS2hECJ",
  "key30": "3CBnmocxsTF7uceYZJocdGGfkkXDrTBDSLWzYoq6sdYkK3YxGjQQRHpv6zSHS9VgdKqff6LhPJLRnsF82o4BjSuN",
  "key31": "4tRtCJTjGcYcnZWTC9MDBBU3FYh8A9ru6LsGtXqXeDtqvzQB7ZadfYbQarbbdqVZ8Rni8dRkor65pjxgpBDz82w9",
  "key32": "61kByWoAWUnBNxfDF489b7Bdfoj2f94fwRgpcg47qVJAWrYJo7eXmzrojcz39wyzdhrdWSPtegJ7h7a2bdAbPc1D"
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
