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
    "5gxj4MTFiSzexkZsCdp3zbLitNP2CawWzn7ZzUrTYKr8Lc5TYnhPL6UWDvQTDhZMAdkpbkc2nQSGZupScBUiohyg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bQ9FS51uC5G2zMxVEiZFQw9wfhe4SmA8MjY8iqLNqSV2q3vXCsTxzDiNfHRYhRiAcRndmeiXNhizbzj6py2TKnc",
  "key1": "4FRJjCaj1RAzi5rm7UMULzWhYMYbe17DDiq9kiUkJeT7HW1Bv2DotZPCAZcxtHh4FJyjNm8j5nkGJ19HyLRYBsfH",
  "key2": "3YoNepXeeB1EHbDZbzvQAwBBpUGrXrjRUjdzT2hGXapkcANYPycq3bFxxqeLkh8qQAfn74129EqGJmMTXMMb72g4",
  "key3": "4qPCoVR7ZRdT3GCZPMThNTZX72s24HidKmEedLwzkWoYb29B3rxFSmip25poNJpj6pz1BgEQnn8UKF1AWKuwK4Ko",
  "key4": "4RciaNxE4B7JBEVaWrV5tNTLXRuv5c34YmsABoMACrXJkM5McnruAvfkyNXG3gsfqy6CXPLkDnuWuCK55yYmDQ7w",
  "key5": "2ccwCtfRUFyefq26THLjt9ibkUmP3nUQnaqMJsbFNiMFs7YK5VtusuNq9WdbkpRi59eSqTbTCJPY7ceoKX7cJfaF",
  "key6": "32fFzoyzgMaJB4Cj8iNMLpcQgYb3URW1XGdm9Ge4afZesf8EPBQEwGmHTc2rN2oRXfzvcpTTo4tykAsiqkb87AMf",
  "key7": "TgHLAtndG47xoyHzvsmy659vgas7sfmtJMXnrd8KLTPUGVj7iJgZsdYDoKP1WsUiEmGNWV31YqXiCmXwLhMG4dT",
  "key8": "2UJ48ZEo7NW42Q7DkKSSPwYgQYLihVLaYDtoTrA3HtFnfEbXusDG7p71Sg8qJBJrnoqCbauUXhyAzYD4CTEEVZ6c",
  "key9": "2CX8rApmZkkSVzBT8aAZ7GTkiKcFb14Ngno5BKXvV94oYtCKt4Brhe69UEJvLB66oeNtEhYExairLoqboTXMYYLF",
  "key10": "2WPWwgres82aUJAQhYKAsnrbLYqkZj7kAZaM7gQWvbowffH6CSST9rHNEMAZG6jjf2ic8XoHrCwcbrZTGHb7mPsR",
  "key11": "4E1DKLU9B59RRvMqFbAaBFTNRtMpo1gDqERtzV9eQ41YDSidX9XoGCXaBQd9UsgD1eio48iZU1wDjTyRX3YH5RZy",
  "key12": "4BaMT72ZYN1WApGoERQhQvXG34nK9wzGLbfKmsMdLmJ2ZLCEHGxvMzFeMgSaYihghitznd9Bj4XAVk4v8wBDVuyd",
  "key13": "4BuXQhzzqXmArNeUD5L93aGP7QStMVDnxVjz8Kw2zNxjvNE5fZQSHKqg335nkofS2dWeAPKWD1nxcchF6yXJPhdp",
  "key14": "5LqyWcuXodHGzV2XApxFxDg68ZLA626bq8XmnpTxEHTgUtLMrXuFGQ7a6cCFSSEumvEQpxQcW5DHhAHdaqjmgTMx",
  "key15": "3DsgYosnFWwiCcdveWZxZ3PPuojwW8ba6U3YL4PPWfvv5uinzaMmk89PYMxArsiTLeU8c7NPaKcyXCQMGPD8CnSo",
  "key16": "Qzsvkkxb9BAt3VzU5CKufUFArpKGa5L4b9hJT6cvW6yhnBoGAVw8AeGvENTjNXso9qdoaZbuG4Pk956t1BuSDB4",
  "key17": "5kEdaLb39rynBEZtaS2dZVuBTv5PxPkCmVgmJWYQVNNyHGnN9eMs1Hf65r4xwSqrBVEbk9ZfnQkcMUxwrhiRoazn",
  "key18": "5Pd83rmuD4XaUVpP1sk23MFKENXZ1aKUxPAy1wZjNxYbDMyxstuZT2YBM7d1Rsmh9wXJNCzVeRXf81emzDgmjTTp",
  "key19": "k979Cj8yxxQNZhbC5w9KoVZVEPibyEYDfXYT6AuXqMB4YHcbBFSoraVihCNCJKYdVXeNeUHTKMkjUBKg1GfKXvj",
  "key20": "4zhcGFfyVFr5RuCEyskMEAGkFcQbk1Yw3KDL8gY1tvzTSRPPZdLh5du99sS3VrzNZexWzvqvPDBYsSZwQm5fBkLU",
  "key21": "2a7CetkbKLQxkgCCtNqnEZy8J1tBQARztbsS4CrcdKgiJs7kHpuZjCv1p6w21uFG4NyJY8oUPturpQinrtcHubXo",
  "key22": "27xScv3s8994gcF2jXRHYttn76DmZDkKLtQEH5txtoyRYMKk7oiGD2x4DK7ca4BUweJQaPuiVxgqDj8dLXdK1eL1",
  "key23": "5U1rzUTzwB1xPn12UxVz3UyN6sMZXqpR98FwjAf4ge1oBNUZRhQaVbpxbVgEYqEz9UXkAkazNYeBuJTppsDvf75t",
  "key24": "3yLqnDJgv7cnf4hvu5wsXg46MRBuQkdGz88w9XU5WF1iJ2CwrEqFgjCWiZFD98WPq3UN8dZy7UdDPmx3rGdLpBib",
  "key25": "3Qzdm7Sqj7wHrNE8eBk7d3soDakV6u3UoNR1Ukum9Dg3BZJAHG3UQLf5NAD4e32AVnTebQkrmGfDgQ9tkDoXRVmL",
  "key26": "2AkRTjuXfRdSfDM47W5Ecx8hNPbmod7aWB2YzWYs89n3foy2ndGJFCr6N7b6Uy8JC8RcyFwBLK6YYBsvbYA2g73A",
  "key27": "Hc9FKMn8xz8GdaW61LJxUvDEvitqg6Nf7W3ong9EWFo2khhiRuDKU5JQh9581hKvsaTMQaFeXRctkkCuC3WTcdi",
  "key28": "2LwA3u4Y3H65EiSQBtzPzSwyNjWde57zMTVGTVKazAfQAfhSAvFSiJMpTiumMdySeXNZ2dqcWggtVJBydpM12c8J",
  "key29": "2rywDTsUPuMeEiCr527K3kTDA3RajgVG7ot31kx3iqs9j2JPmYNnomMj4wBbvYuzvN8t8nSitjb9JNFZyka2UZBC",
  "key30": "oTzsg5C2nGHjPCz6aSyj4rvigjft83Axq7tvMUpvatbBvJ6HQFQVAaZfHcYtwxGuWG9Y9B6NjjtogMVPb8rQ8ej",
  "key31": "2LAA9ECUtXi3VVu8kSEKJTUHnWzr4rEVdnh1XvQopnPWKvartYyb4MmuE28FPjThFyCy8qJ2oQViJSBx7rbTafED",
  "key32": "3sa2fWBF5gZPTk4h9DAPa6gFcEkrEeGdBJhSxVyxvoXur4UWaehWAKbKSGonBicNJf9urcXSSE1TDrw3sA1F5QYx",
  "key33": "3S78TKKRBZBQyYNyAbKmEdtFzAcbFW147jEBZ52yvesk9evkK7AmcU6R9ff81D9v2jzvcs6MYftcRHK5M9zUw1Jw",
  "key34": "5NnS85KgvXh4mCQ6NVXmZCipJphzGWSJybs1pmBccRreu1Spj1Gzg4FNBBJQ9Yg8MhihVdrDMfKVmALEvLN6hWzM",
  "key35": "5FnfYRNSuaoRSTwfrzsVoQEKNzYsDucu51mwKk5GuhmZKEuKqvpkmyNyZJqJBNqsT2TCdBfnu1VaFCd77Sbejc1a",
  "key36": "XJ2qgMu519C8amARSFAE94kv8u99NqDCm6KWaetTdAg5snqqSw2DbMyKH2d2eUzy9XxzVk9dffniM6iT3P6kQ5i",
  "key37": "UcpoX41gL5JvnfT8bNTxhvPPw4V9BjsbMf5f47Hwrkufj8X7bznjZeFfYUQjt4ZaGFriPNsiT59HMF14m93uDQ2",
  "key38": "4x16EbqQkpukayMP5xnWknCB2f6RLKAPummYtzFCE7c6RCDk4f4yEDXhAkFKtqbA9GPXpfR87VKpi25AbE16hAfA",
  "key39": "5xFbQ6iKi8sXSD16xR4XU2MZAfhv5ZUuqKCgA12vp7MAMsCC5Q2nUTdJk7LbNxWPdRpoWyEXba92LH16K1A7KkEn",
  "key40": "2wiwL4azn9L7gFJ1FwNXbnnaRkT2yPpFqYDmujJC27GUYC6cABKXdzA4xgUoDEZM7JMFX5Xx7q9XmV4rxVqmPW9X",
  "key41": "4raWdqr12qQBtN8WoENWSrYtyN6ZctudxWvuGkRoZdHtwoYM2fPoNxX2fqtHpMwG5VqdCkbsbvEW4QzFVwvdsNx8",
  "key42": "2eoQT1JpEWh7RAgcNz1MmsK4bC1dkPdfhf4tH5ztT958tw6wAx5xwT33LigsQ2f9TaZv7U6j5XX14Nta2iKf5hfL",
  "key43": "4bZk7EwgjJNjoKL9KUDdcR5DU7XhiXUGKDguEv54ix29BkysGBAK86ayzbVrwYghE3hmcbaTuoP2z3GhdC3xzYyU",
  "key44": "4RRsczUAs6bR6UtWWknuZE8cQiyHUzmoyEdQHjLnmeaWiXJKkLK1PpxoNBekthxbiZhqCZFD9c8TwhXBJwt9MXQb"
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
