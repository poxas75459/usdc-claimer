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
    "3akjnujzRqYZ6jAstQkjjT3jf66wpWKYKocxsCHABrib3UVc5xnaFhYzsvwPHcBCEr8wiyGjgkcTXFU6TFGUu4D4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64FnNbqqGJXXJDAN2TV1tE8Hv3KSkFFhMLeZYcXCeuh8pYy6Rs63KbUQMRDzx1bs97er6gcDMVZAp1nxqq9TLeXw",
  "key1": "3RcKTzvYMsSoeq5ioZXrcyNW4DqnejcQFBU39ffAuBpHyr8iNGH99D7m7qTrUP5qBKdMjRQzYBpE3PDYoCxVHvhV",
  "key2": "xgSw4XHp6Y566QA7yPzQZtyJq9tEH25omBR7C9rkR3ZuymYaWMM6pW8JF5NYYhyDAMMh75zNGt6YQT12Txo2YHP",
  "key3": "3HRr8r9dPJBPDthWdREVEaujNE7oXxmEamk5V45sg8bXCYQpD4tGXg82fnPrbjFnmU9ZiPtXyg976fALm8FvWRUS",
  "key4": "4hxjaqfTTLCMC5rJv5qbpQFkceLjFTZwmvCWLCM336HLPYn8AxK2rciZVv6F6XzzMTTAjAhTxFtVUxn1nnc9EioY",
  "key5": "43beEnqcCfnRMvugfRy4UX7MDu7VrTPM43Ldx95nKqH2NUxua6sKSySeGT66BHkHBhDbRqvQ9LMHTm2p3foBGgCC",
  "key6": "1j2YDJcyNW5z9Rf8N7i8UXAPpUWiLRJ4wze7zUPYuasx1KuVBYhqQvFkEinPpfYNoqGqgmY8rKJv48FeMJ5QBAc",
  "key7": "5oPnUsHo4MsdNC13x9C79QRDoAe1zSkWQxtTcFjCTkMXG93cgqGPcZTj5yaR8B788wRXHrqMWWESXW2u4iqFebtV",
  "key8": "5kvaNfVGJtdnQeHg6VSK12JSERbt6t4k4N5TYx55PwJDZ3hZdjkNPd76u5nH4XvNQ6arzfnMa9DkPkPd67yEy219",
  "key9": "2KwCGRDw3LGBqnZna4ppLAkuGVzTv7QUhynEB57oX26JBkuLtmYYn94nguHbLa3wxxJJturY1XFT12aPD2Svhq8G",
  "key10": "2BRfTRDY4Zdr3NabAWojRRiVc3MadMyrBdjcgu8rNb36X43ZsCiwQXeha7F2NQr3rqnhnhsRsHotS1B1C7LNoNjF",
  "key11": "85BFq7GbJr9MWfsVSYKoieZtHqbHuEhaZtShFyN88EnKpTCAmdpk4aaF78L57HcVFnBHJDJGm1KEy1Az5itEYEC",
  "key12": "5bbM6inHSUwBCdwaWkHKPghQdYiZefLDbgxG5aKqmZG4rmiNyfihaB6yBa2dK4MPkDkYgZGLR5PLUS8bKfWjvSxk",
  "key13": "4FGaBBqkEHubxUWSXqLpSWTZg1BosSyceMXTs1EFXZAhZoyCs1xsKhw2aUWTGuVogVPysaP7kBEdTB4kR8h7Bkdq",
  "key14": "uBBY8BLrKdMShqdJVQE3kCFJhGNVA2DntdYyZobR316xPYHS9YLhnyNiLio9pf4h2CTp3enr6jMttRaE5xPzCm1",
  "key15": "5Swwnq9U7x19wbVbJD2CqKtoJxdoy2zUtKyXYai1hHAjeRUqy2QG3cV9a32tEFTFaCw3AqPp8CerRdCf5oZnA5MD",
  "key16": "SFQ3u62j1cuQDR1YuGAF6AvBEuzF8wQbcBYGbDw7X1ndSLKoo1KGuVmX5GbwHXG9BQc1PDg7ZUQrQH43D9Hm8uV",
  "key17": "5uecpYaSFY1uLWos3YTppq4BukbQfXMk1NuJa2SJ9LmXpeJKAxaV7a8dfqpac7LyD4krKGKGL6iuP8zZL971sUaw",
  "key18": "3pGUNX2iQCop5G8x6SXYpkqVPVDAU8uyLS55fg7LGrzyctRsBrjdtEAJTKTkNu983pzooCoxXuhXtAzZwDpJBG5e",
  "key19": "4LW9tkkEC1EwVSvXMHSarWwGEqdHVkqEqWe6yV77KEY8sWVpMicLKL434eBGdcoACPqQCbgyMMs6ivyhbhkptdGn",
  "key20": "2ejAYRPh9MSQXSsxSpHSGgctE1SzGw5PNcotLZr8b6ee6cHVtipJLWSj8e9CnW2iGL991eCRdZtRFapshNE1mFxq",
  "key21": "2bsnFhT6Q2cKvEGef9ZwR4XgfygDAmNDcPZBXdiKQ4xJzWdJ45So8tsffUDRvuXgnJCDsLfAFN3sXZpx95imS2a4",
  "key22": "35FyY67tuSJMp2QfGpwBv2Ft8f968qK581ic4RXiyuuMUQf4Q8pUT46xsMQhTgq24mF4CVQY9FwDpDUHWA1Kbzh2",
  "key23": "4WULbKNFDKPJDcnqkTGySzdixzVbwdR8ia76YQRqugj6DvCSeVTHYr12ktxxuf69Q2i8tqnbnmsZxDB5SPZ64hhn",
  "key24": "51GGADqgjeLA6FVC6UdPLSAdeFkD9d5pq3WZFhQ4ufCpTE77XH69pDHnaymiGEAPinqwzVQKqLRT55SqhUygxFXB",
  "key25": "3keZb355gVk6NRXCZm3SBp5a2EZAGHCYY4Ab6KH3AJrf85DMTsi3CncVduVQLTn8SSYn1GPJC4ryvk8CbZhW9NzC",
  "key26": "PqonvhaoNYzKe8krTMD6XSKiyGnRPNGahPsqjxjcdBYndq5aeLzsM75dwTMmLVkrHvED5bUAGbzTBfg6AJhGahH",
  "key27": "62fUFrex7gxxkLtDFMFWyofXLSW9nLixhoNx7Ltr6ncgnNCrXn9qj482hgGDJ8r4vUC6J4iLXWCgQmtVEcoPcSxS",
  "key28": "4LYJ4Zpp7eWZpaDkTER7z1CPHRtWBkcR5dXC4Fw6AvLGyxUeWmMJ3RcxtGzjKEPb7QMKvhMTZJ2jJbNVvexHavCf",
  "key29": "2weJaSuazEoZacN3ozxMFX7PYyundMj7rW8Yo7jABNExHZfc8mLHfhofVd4yf6XnNMnHr2VGnVf9QRREzMEJV2ji",
  "key30": "42s4znVFTioMhivtJ46CwpPtnTcUqFCkHntUYKLghSaqGy2AFyuRX1voxaKR8cA2XfPYuYNaiMoFSYMqHcAXs1qt",
  "key31": "2pSjXHJjoVmwo3jrWAZXjdQfta8RuVZtwoVTpqXgCCx6sSJUgviqbzJDw4v8maoCkZyr9LYjAbYHyiEx8AntKAVu",
  "key32": "5J6CSv9hDiqJPfndXDZvpwzXio7KwEd2Ettf9Es8k8xQ7k5EhpFu6wBCe3d1XjiCvTxBeXQy2ujViZTuFzsDpxoR",
  "key33": "2yHTgdQsKNMsjhqwvkM4BUXsHGNYvmDvfNaiDpNHRoYq9mqXpqEo8ToQqAYTQpenLbtCE1dF3nMoeG7LrM1XeWd2",
  "key34": "3dKMsR5J5W7Gh5YzgRHBa9ooDMHYtMSexWTU8L8pZ4gfMm6dgBuBtddtqa6MVeqXmTYgbeuBxaR7TDhTyXJebdnL",
  "key35": "XedM7Ndp1ygRh39tAqKjjXGvqPQ8uBs5tKqEtdXJJThRo3mJNLyQ1eoWABWH2Xj2t3yBkm2regKnhDACL1mvsdv",
  "key36": "2irxhBExmTD9bQErLHC5h5KxAW2fF1bpbF8avnovZTK2w1LHqe82WKW3X2hcmjM2K7rRNJZEFNNemvxu91YQu7YP",
  "key37": "34xE6prV72uYgbLYAYUNo2jSeCzGNA2R9UcjTa7FFtcRxZs6rWS9kQkCDtKPHUT57eLLEVeNWws4AQvpLpejoB84",
  "key38": "2GE9ZEJsUHaxTkCZFNyTbtA1D2mnQvVY6CSxAojzmho235pgDau7QuQPdQCB6ZUJTJRoJvdAKWKGwzzG1LBmadgv",
  "key39": "2iaGEmYid8jvXZNnf5KTM95jnEPX9aA2VNEBos2hCAwvb6vLTiCGc3GeGQ6kZiYEC3s8cgVxt19hcu1s4w5JY2aS",
  "key40": "64gGywzTuQAV8x3Vg6YrZnrVmx2npKgEos1A5m81gpK4rkohyaAQz3NHyd6AWHUhpZFcQZX3RDskJPeYhwzw1Rw6",
  "key41": "2EmPzAMzZ4896v4H3PsrD8g33WMbXwbgVbRHeNer4ZSMwc7TX6yxerWctbiULX1CmqB2xNKUdVFtNiK8U3UMFswA",
  "key42": "5ynQXQUG4WvaUuBohZDmyffpGHddc6YZJdDHRKWKqGb4thD5udtBmsLxWHS8ZzGYZhm9cagWDTA45uELAZhP7xKv",
  "key43": "4MQvAtrWig7t1RqWi7Q9TptERvdJpLneMLQpNKXAPC2aMiZbP1CmmMxJZTZH1fz3nm8VbqUvckFbdBUnc2ws6Cm3",
  "key44": "3dLnenbt9RdV8xKxyyMVC1V23LcPCK7AfWwjRwnZbpnxV8Ju7qdRVDLuR3xVSnRmK7GRiCBTsKEhvsfuyGDLa1fq",
  "key45": "44zx5d71fAsR1ujCtKVbf5FQpKKpJ2XjhEQEzc5WN5KBnyAa8eGibZpHXVhfb4tekEsTw7NeRRE6WmaJj1xmGU4p",
  "key46": "3XEeMmAZDwyQTnyz85Hp5D1P6PJbHuPR52rhUxSCA6hQ94g4EvHBoEeheSi9ypG81Khy3vYLHFoyH5YkghsKEMu2",
  "key47": "3aj68bVsTzQvMnx7trigaHc4GiFsBHSGy7tiEUz4aCR78DP6N9GqBm2dmixtzMLJYz2b6qtYziqC57Csqsym4BoF",
  "key48": "2QmfJRhbnnF6nHCLF9YgPCmEvuJA1agqiE5ooNG86zwEbT8NLdb6cZHXqVwFFyg6onfthJYgh6CWmSRNBRg7uRf3"
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
