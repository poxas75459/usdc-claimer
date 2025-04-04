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
    "2nt2nu9FCJZVpfgZXK76V6uPg5dXzSMMA2s9JSx25DkNtsqiuW8S2uE9E5phn3whHhZz6KdJuMJCdLecmQqoUGG8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fCUvDX95JG8QwDoFN4kspHF49sT1BG3Ljwe8oYDbq8kr9Qk8jnuJAQVvvnQCyN1kDYb2wjxwPu9MQM1Ry5q4Wo7",
  "key1": "5krBQYS5T7yBFeTAw9hqs8XaQE3ayimUozNyhmUaNSF7NNSwDDJ3rfxtrWz2wQTVQcEmnr9kfRMg6Dsx2tqJacF3",
  "key2": "4awXoQsdRfCXZc2PPoadKJz1fxU6CxM5yQyzUqsFoeJ2fb1DZJdcCJLUdaLUfA1yZFcuei5MZtpCiF9RRa6YX3WE",
  "key3": "3yiXArxG1wtH6fRtLcyEBXETyoWnAKc5AzfGyDS55TpN9yrx48YoYrQyt48Kcm8mczkWoJ8VUwPNqNMRHfQCDZDh",
  "key4": "3GGBVY3ZgopQwPYxYmmaGWwGuTCmKfsUFXexqCUJkcpFutej1a4pdNjF49Zkn7n7Xw8Z7mhF6bt5m5RuUV5cgWoy",
  "key5": "5sG47gsUWYx16iygam6irC2bKwvEmjDe6JHRSTc7nzb9BB1AmPY27EqGM4ay7vqu9zjxSZxxhj1MAT2pUpZ8ZR8x",
  "key6": "42ZEWPKZni8XEetnjq6kdfDk4LkYownWw91jYEpTzZUp4Zcpa3gvJrNbPSU197sV22dHpgRsHqMrziVwkXpsZz11",
  "key7": "XND7DLcoLwN3CnjgQSboPjUdgs6XiXp4FsCLmCbCkqWmLW5XFysWFbewVuAUaE9RgvUbZtu73pXceuwDXW17CdD",
  "key8": "JECaRHYzvTeFsAnhJJWtzM4jCk6Jihe1ksrrajrdv92ZyTMf9UFVfvSzuQeZe7rKhSyeRj469ZN3Qp1TaojWfHE",
  "key9": "5eDGrtu1K6oPhLWQ1xsALvwSz2oRMxeEmuVCJtHcqvAtwMe1PikGvq6q8dF8csLbpRKKnVMT1o7dL61osUmTtwKV",
  "key10": "3Zu28RryjcmPUGZdXFxkJXvGDE5TugvJRFfhxBi897dcyx76pVEku6Pwapyj15R9MRx5m3RpsBDbezyBYet3SZuv",
  "key11": "5QUChw5dpDoekKwrwDMcNfaiPBqy6oLLnUwfV6uE5X7wxrno6htgYTtPybcFy2dtrSomWVFyqV1jufvmktnXcsYs",
  "key12": "5n8sDiRkYuLP5FyU8sJJFwQZiUL1CjXNxDiPpdR3UC3uya6yd1ZWW1FNNW4DWzuXmxSCZLYczmgYibKd7NieshS8",
  "key13": "B9aBiEx8czJ6UruQpo7Zyrfx2kMYrHpmySrJXMj7gywJ8ysEZNu9bXQAi1DySZapbkuj3894pwMrBMD47Z4c2Ly",
  "key14": "2taCv9vDa1wKBMquAKuQFQAxStGUBk5yQd6QuXCV6xUWLH6RmwsVrYUWmPbYKTmSwAA7PGP8qiGD2vJMrMu4sfA5",
  "key15": "2oXv1nKzJDHTfcKn1hQxRV6EfMpNq69SUNrh71AT7T1MBVucQ9z8iPxxPVEoQeyVFmcu8NhzmYxcC6YPZr8SujQR",
  "key16": "5Y6LGbFinUy31zGyXP737m7SUVroYn7C6yASv5TXZKZALiLYEBECoe8V4uEE4QjqXMDYmb2rVE9JvN1JVERCCvGb",
  "key17": "3EXjSGzhmFHBibTouW2pCKXS4KGU9hD5ZKQQxo81RAQx2rWiXXYVgP1HVLuKWncN9AvQ18KpxMFq4sz5thLMGvLW",
  "key18": "2GcCabBZEe8rh2yihoXd1jHp15AFhyda1s2Jcona42rr3mcDe7yMYcicS7wbkw6184PXDmc8hoArMAc9kWh7anbS",
  "key19": "2f3HzDqPn6VSiYUb9RmxZSZcNGRdWVfY42y1b71WrBT6KTF7EiFFXYgy7qC3zQzXqW9Bxr7LwPVYMqAFukkaaszL",
  "key20": "3X4pMxDiEosPaDZgtZNoT3qJTdACSmT5rJtTsHN6m52vrrbEQgPQDPSK3jdaBSBjqVWGoHZAQ56CumfLmNj4bhJ6",
  "key21": "5zhkigjK9fWM8DrhAY5pRatsWMKRfFuLqSPWpEApw12MXt5jmbBQhv8Jy6rKDzS6ZiiAy3qCGeF7K2nu3q8prLLQ",
  "key22": "2sA8P2cLsUkU8RxwSjNhTGPYLZHPCh6gUBpc79E3PVXdcdPX1hkqt8BNyUR8HKwgDJgiiqtJW9g5XJGqsGUPu44f",
  "key23": "5RFjJYCQKFtnKCQdLYwAAtgBs9miswPbJNFyECPjsb38Lky9eyHqJNTrpi66j7H6c95dJDhQiK4rwhayyXVSRMsb",
  "key24": "3mjodJxSAmr2QGMbqnexbnULAviHhPFsJR5QWBQKpqGQWNZcYcQKskaKfBbT3jLhWYJxZPhcmm2tL3yqE3XDkbmS",
  "key25": "5wpN5RfPEUMvGS48FTU9uAbvFzXqHt7xs975xdhLjP9eCT1jjWC67D5qJ1wVa3ni4DdSdidsCH9uTz13zAKfvuSP",
  "key26": "5cYHTGcLmy1xv69eTT7cyVnB61DP52i9z8RTn3KMQERw6kNB3iYquNkMeeWW1WNmueAbuZ8vKKFBdt1XLcQcfntx",
  "key27": "3BqCnRfoT96iaFRtisxo8doXiFwosH1VDobffgqQquqXm3iCHKdoSoQ8WyziWB7qF5M5W8N69tHPGAfrEXjCavSd",
  "key28": "5q4sii8gp1Mo85EanXcCE4GThVwinDs5n8EQpdFhANu7bbc49qYfNWTucDV1mZXNPhsJZDpcSnfZ75qRdRucCN6t",
  "key29": "5rK86HPx4GYiVdEhGheyDt4m1srkvNEWdunkUstC3u7xnWfHmViYjQM9Bu1eRMWtL3JDtyh65abaVXgk4rAfrRQY",
  "key30": "TnJGEJQY22rLsGDorGDEyp69Dzbr86i5DawHLEdLXHa5BXN1rMCRzbUmbZWp9CbKCKt8qTDre28XTYtuBdovYUD",
  "key31": "zvSVCmqE697RSbsoJdszVTmRCoN9BytDucXXSkcG4xwnYuW4KQRYxe5tGkjQE1TUfUFXQxe6efA97wrQh4iqLrv",
  "key32": "5Jd78MGNjaUpxWuThPpaPyNt5EUZwtr5sCDSVnsXFvL7zPaoauxGUbsSHjcLhyDUJr4DThUpCq32fhnQVCKDiRhE",
  "key33": "4vKsLsPtnpUarpD4pH4uxaajgM6Nt7RkyyLdwVzGUeXD7bLrJ9oKMNQbWFuLuQYYpoi7AxgoJTuY24e4mXMPcff4",
  "key34": "4ASqb1UybmZdrbQRXK4W6VHk4CBiWisZTdEc34jSagYfJq3qWNyovxRvePTTgUqppLHvUy8VNAuJzY5cGfpMmYmm",
  "key35": "3sCLfCPnRtiVrMXMJXkvDcugR9ZUjvfXP7bsaAPQYxPpz2CyB1aTHcp4NFVZLyjuQuJK9mFQJABigLHuMbtAVneo",
  "key36": "23rQ8sue9iGPW5EYwAErT882wc2KD4zZCfS8zG7ScJdAL6WTL66U5Zd4APi65UPXQVnKN8ESqwYCcAGcQW9gcfkh",
  "key37": "4BRXDT2DEBhsizETnXxEaTUcGCnLQWUJAphY6GD84FDJuwHcxugq17ZR4cYkRD7aDSAokn79ej2mZPdRscmspBPR",
  "key38": "4NoVZedcEo3JUwZ77BJ8HxVcN79nsshsz5ALoyCZjtCp3k3kwmYu99RvbB5kvhsdXpkCKWShQGbfmbDCipm1k2os",
  "key39": "3wmdknxmntKWcN8wq3A7urEAg5MHXwV3ZmQhFetWjGAwRtYGYreaJUGxc7JizZqe8N7L8T57VtdRs9ZgT9UFVPW4",
  "key40": "3Tku4UiRJYsf7ZzgAfwUe3cm4WXcvJcLXsiToUKgQRUZgjD3ba72KUz7JfZSLGHcdArjZNMKyax87jK36yWPcZDE",
  "key41": "sfLQWBCGpr74ApVyVPboEc1M5eGCpRVGj5JEzm9JDXqHSLhw9qfGPEnEVJhgF3Fa7AYBp4QEe8tndyGoj33xHqJ",
  "key42": "KZV37LcsycTj6ybzhDYhqyqbUAjuMBUidGWBEVN4UMPeP6jgwtkBgHEGormEqdiAFv8sF9AL6AKqjrCKRpu6KMy"
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
