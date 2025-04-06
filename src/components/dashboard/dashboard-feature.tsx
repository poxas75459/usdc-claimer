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
    "KJw8Ks1Sy7ZoLRHj8qky1wKJBJ13FkiEG4CikmEzvcmV1ej9Z934wU6kuxUkPW9G3X8kZwkSKobJvfBt4vaqEbz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jDb4ieWddQ1F3AC7BA9d6ZFk1BwMwH1Ki8oGAQ33uFh4Ghuzdg3g5KejjGEguGNQpkgQ7AGX5fYQVUkAXqe7jpB",
  "key1": "4qJHXJ1fJGeH97YY2tyGWZrUAjiQ2bCMGaJAh977Hy5dVKfarF8P2YUtGSrdGkDzD2vgbhJ8KJYcWV7cPqNSvDfQ",
  "key2": "63edg86ekS7Lg2fHMQZ5KchXW5ZsrWdUUeUg3mV1YVYHW7ysywWxoq263fa51EyorZn7ounqVaqWFqpByjQR5c2M",
  "key3": "5zeLZCFP54kRwqjWgFW7GtJ3KXixejv1JjSTSwurSESMDBebrWQhXiP7NNZNtsbrhV9eWfyRRb1nPMsJH2CCoGXj",
  "key4": "5U6cd4B3Y8srTcRxGhEwPyPWsA2s67NxtA3LPBtngQ7ygrW5kjyQzc5ScCQrik221uMrRokS7E34BGEv1vB2L38D",
  "key5": "59dAH443N4cp7K892G4Sby1c7uJnoAWhp4SAuSBKsaNhUUgPwbUk4mRofoy44gXJ7r1Eeuuzo1o46EW4U7DCSTst",
  "key6": "5wDxqkRY3VNyEz4hWLewbGKKhrsr173TjV2iDPZRsQi8Dh7YCygyBYgs315M5SCctPPiCJmKG3KoJ1BBzQ7pcrr9",
  "key7": "7SR3CoakNFXijoxrjM6DcaSA32jb6axfz2Rg9EoUFcYfXL1tP59CbqwbgthZw7Xfgbdh3NUzKPNLktKti4Sd58N",
  "key8": "2pr8n7f14wM82B6TCtzRxWyzAo79ksWe16wJ9gFpSShc7q21MJUEpKf4733DvCRbMguCMS9qCgFT11xwU5EwtTJ8",
  "key9": "fdSiVo8QhMqpGgH2Bs2SmSCc2sZvBxiMvw9j5oK5eM5EiRQBkEEhJpgfhSn7P1qaHnkwx2v3jqx13ax5rB8wLGr",
  "key10": "2Lu4V1o5CHAe6MDzAwxio37DumioLogrcybQKyojti3Ko74aVhtWahBP2T1cTex542iCdx2UkGjdbKKfC3kTWAgx",
  "key11": "onim2DqGCQXtzn28GCsRq5JPg2bqovzsUPxQG4TxGSrfMVqgvJZroHmXW3Spx6TpnPEqC6LKZtdaPWhYw4aujyt",
  "key12": "4JwuhMutj5f4k6TjYUiAR531gM5WnaY1QRpTjquLmiAnZoFHYoGpNgKLqwtbYi5QD9TJGAP9Xjjmhdy86muWzpdc",
  "key13": "q5Uru6SvN1ggFwwqeWGtwYeqoWZUbGKdfQm27uGwM1WWEd7MXCprRCtmsJhd7qWkwf4JjoViUXLrAs7XDeTSZwA",
  "key14": "foDHzfznyTjnUMtfvN3yZVn89y5BumG7P2sFftdojsSthZwT8VWK9YWe5XdJLgkMeG1FpBJthj9PN1rhWFDjyZZ",
  "key15": "4fJpiLkH8cGcUAbSkUGq5jc6irnT1FtcJfF7qvknPw8L5pw2WLw8VVUSZChm8ycSrUMsjBSWixBHNPe4scsKHzfV",
  "key16": "3uMhKWshq3GVnyUBQBMBcTwC422qiwg3tPjLt9rCwxw5u3bEjChYQ6KnzkGWmCsbTbpMvuVmEVF9rPrTbXJckMFC",
  "key17": "5H4bMTKASqaX8gFZ1AnNkVrnJkPAcwysCYkKMrc5dREo9pKm8HcQ7GYnR99VQunwPMorihgneTWTmjHoce9DmZvr",
  "key18": "4CRmXbQSZRyiFMHT7uomak6ziWMbNRQDrmv8SJW4dT8Hg5vE9o4eL4QE7oBtsknTW3Z4ssnBVZBFVotYB4UQiYhe",
  "key19": "4wi6bdo6z3YXHrE8DX6yA1fiaWEdJQPqJMbR1TTzrvDQCzexzNZSsg9LCc9RaAT7WqeC92WNq6jt5smBbzsLAAhE",
  "key20": "2c9GkRb1CEVQnKNxvfPm8ehi9Z9JTuKpyZduMYjisq4hNT5WN2nLifsNkrhf3fCcbsNnKsuiY5uhGsUhZKDPPMSa",
  "key21": "2GrhcPa4aTUnDx8Skf635ci5KDexUgzWKEoR4FfZDjE425VSwgDP6yLPVuvAVK4ai8dGCWrewNWcqavM45hF2KwC",
  "key22": "5enk34N5WEP7YkoN6tahDMJX7Zyh9movK9DzB79uBNYucWACneaHCXmatP1cCvhr8GqCpLTdujNfbJ2tBV3z19AU",
  "key23": "29Btu1yHWG4VMij7m554dg41Vw2poxA3YHRSgVRAXSNm6j9T4WvXhP1kstFs3br4a1xCwEfto1wopNaV1v7G71pc",
  "key24": "yvwTgAnxRy5319KshdZXcW7sAPEQ6tb2JfAwxcqoqFuEwwExa69fH6QuxqxP1cnwA3Y3LneHtaq3BsFMUPcPB8R",
  "key25": "JpYyhbzmuhfWT6NseVoqrMkMfVdMqNK15doXpMyJX5AD9ZgD39ZecZnyvFTwK6uGw5chV5KhY3Nm37ctRkFqFwJ",
  "key26": "41F3PhvhtotM9ixqBXdJVGniEXV9WuiFCAVamDo5tcRwFLaZsRMXMhWG3pDSCVU9i2ZakVvpLP5JVzLQXFXynz1z",
  "key27": "54n8vPrXpQ4b245Q15CW8ELako7GDnD3vHadzTxsNJTMXaNxUkE6c4bd7Q7ySTpLdbGGCJxB3cjvCdfda3SDyfa5",
  "key28": "5fD8tEQ6SHhKV6SZ1AEdygjdKTBxKgSkXjYdRokWc4nScaB6vajefGwJmwF5PrGfrBZ1cKLQN9Kt6LUCcAzcGz72",
  "key29": "2iGxJWicq5mUNtaL25CXNp5zifXt6YnQJhZGo7aXiEuLQpWdHxyK8EWGxMLNCrpKPRnLEiH9fiBt8RpHyfirLj24",
  "key30": "3b4vMiKGAUutX94k2H7n1P9y6j9TqhnFJDPpcHYHYpmTH4CFTov3RLoaqW2i6v2KMrPL6um19zrvZyWS37RpKbei",
  "key31": "4JsXRyYf9BLqWirgTJfXhJVAoPfBwUsKNyp7ingH7rybWLe3t17DL4JeE94yZrXmZxeRBvSxV5bWfEsakmTZRjMb",
  "key32": "3xzZq2GKK6RMea38srKW9HVLkvruwRZWFLLfXAMWGr2FWisvVAH2CVK21ykPRCNrJ8xTcprgg66FP5f8VzTiVGmZ",
  "key33": "5af65dKkBdmww9yp9oaNy38MBfX8VRFo38f5JLPeZ2ZUAQ4rS3MCHjjaJW6VTCHP9q4dLP8rQjDCPq4quBKxeoHB",
  "key34": "2SRUQ4e6QdB9DMuizoxidgNvw3US3TxXLNZbJFJ29akBA759tQg3CKZYEKWZdcpqncgJoaRbeJiS8pLwDQW68FGu",
  "key35": "4NiXkgZ8kqmEKMh1VFW4gByXQrsfguWyA29dFyU5rx3jMhwrrfBmob5pLrUXU2Afjea7hJiNPs9FdpJ29yGfsjW9",
  "key36": "3SLnjXWSEyCJBVTieecHKeqfJEtdjgZPwa21FZNwN5DTvkPHVuqTh5ZrhLZ1YdYnGiBuha8D1NLZYpdiYwvkw3A",
  "key37": "4LNpy2QRnjzUsCB8UJF9gRJ6hwMex7iAf2wJzDhdZtBo2xziq97gvsb8KBTLqwAAgCvHDd5Rdm6eCyYnsCNRdfE3",
  "key38": "4DdVnyaJYJyugQYGtVsy5g7uG2YwqVhBfHB1JiJBDj2kSWYNQCyoFSfBCw4cd3WU22hW4ucx1bUfA8N7cavETzHe",
  "key39": "3owJPidJ1nvisSKv7XrbpE8gNrGvaSrHN5hxy6rT5L4wHDDsECPsGBSZ7KEMSF8pz5w18i13Ldscc6BcEne8dWgy",
  "key40": "3kuUwnMXEsTVsx2Z8rcAuApiiNzkABes8MJfakHDTLSLY3iyxkD2ExH1bFs3hvuREi568ndbS82beNWTyBBqayYG",
  "key41": "se5PuSWsMCZoJYVBBAmz2dm7n64Rwyuy222ZUEM6bdTrjmfNgQdWjteYk1FMCVyjHvojiutLRxosfyzq6NnTHNb",
  "key42": "hfLVTnQAESJH19Wqh1jLmgDtWx9cnZdczY68B4Qy2V3FSeTqJkeP58TvAE1vEsJCbBYuRePq2CxBWn1GRKmc6fK",
  "key43": "5UfbqeYpWKyTi9CSxJ2eUUuuiQFa8EHP1LSfG4y28LA5gimAcm4M9H2Q6MVt1eEoEbz6xfQZQGDxRMpfJyCTVb3D",
  "key44": "5BPo7CqKhJCRU2aFJXJByLt8dE1MS9X95JhKAz3yZxjMQrQMLTc69b37PubzUheKWdBhrYnVB3EymAYK3BWcT3fg",
  "key45": "38E7cMu5Th4mWUjjB9J1e4enkNvBqs6vBNgfzqrtUXVybvqmHHG2LjHmVE4wDznLfeNoCodA8YVpWYnGevki8G2J",
  "key46": "2wn83tWYVohaLCmX98mD1bSnFiHPBuHQtwUvaNsv3zCgeUtDshcnGFnyXYXzh7Qv4TwnZSe2zzfg8AzgVRYw7PYa"
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
