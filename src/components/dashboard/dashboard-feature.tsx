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
    "5kxXku1FBQWghaZCDEshcFtPmC38HNxoTjCFtyjtSxnvHrd7chyZ3rE7wJivU64YUj9ZToSa1zT5drNjvvaj46f9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DBUMJvQ42is5HXFBf9TCuqaKLJrknro4rW9qi6UqqA3d79KfUBhJt9yFzzeAYjSdFKFdvGEWZHffbYRA18LCM7Q",
  "key1": "3HbcCCp7HCKrNACy2zktg9tJrHJLaMYiNKugxJzqYWbfJmgXQ2xPFhKqbtS5M4L8Lv5R65UQ1hgBwDJa1UoHoeQa",
  "key2": "3u7jEhcXD1Fo86T5YJL1XnhSTbfz8wFAAPh8YmRtQggMY9GBrHHyWaprh9uMo8JZwJRyouKFLZsTupyrFaHYwEsg",
  "key3": "u6aKvT7PgHuvfKQ4yfbPn5UaVvJ6YbC1KKJUp58AWUomgv3Yg7s1C6RPW3hwZ4gtMbg2PtH2ae66xEFpNzAn1Bf",
  "key4": "3frzNv5DREWZVN9AxZkpe3djgkfFQxvhEP2jLbbGEzufbnZ3FjzKguRbJRZCo7zggFfGstoeDmFkKxfA7Kf7vRfo",
  "key5": "55Eh3FTCFsYws1tiQzdWK6GGGwqGnmCtNvmBysrnqq3oPovTBP36ktVCD5GD6FKu6soNWEE7wNU1crUZFPzCwYXq",
  "key6": "Nusv3WFB6PELbbA4J6gHYuaeabR6ytQK7363Kepwr1Zogh6VZZypMb51ZFbk5m2wCFsPgLMR8ShQxNHoKjW8K9K",
  "key7": "5nXzmWqg1sHLMqJkQjKDSd1WUSy6xys5jVAvhUvXL1Zictyce84hZPNm7CNz3J1dKApAhBjpkgE2nKaPUn518eaZ",
  "key8": "3fo8FvvJ2nK1rK8LDSS6t5Y63dUxjVQvhcHi4vHZyDAZShfxqHBpUZrKtf8QVkieNWzhuK3jYh4DrBKUkiXwrMww",
  "key9": "2XMDQEJ76e1UchfNP1tFipwMXwdrS4ircdpDUWCGHjHFu4bce4EdkpshFCumdksJqUvs8nx3RUF8zm2amMfNeFRs",
  "key10": "z1JnvQspiqJLxyo3E7xcuP2CpNnfjeTogWekW7dR3efGJZkUtRSWoWmwdzXV3usrnPTqqWWVq19g4orrYJZM6fZ",
  "key11": "53jCg1LJDkNsoksNG42h7FxF7Qh9m64UHHsnkAeoiieYPt5p6tkFNxDiYTz1rpXLHX4Lb4RorgR7tXqBtXXrqge3",
  "key12": "2LswBsrR1a2KMQ5EERW6hzH3XPJC9ewDKUz5Ka7qCetrhVQaxY9sqMk6RR5tHppozmgmGJYvDy3poZbW5ydqUZpm",
  "key13": "KJQBD1LxkzXff1CFaZuPJswVhyE8R1tcujSg3z5gUTNAXtf4o5Vx77CmArydz2TV27uDawbZNSfvVhJu9yGHUWE",
  "key14": "24DXdtmFUYiyHdud9bxJPh9WSAo9S2jAzLEAXwqFpA78NrFxN4Cbk8fw1pQFCyX28eTgjrYhwTUUWD323JxssjW6",
  "key15": "4bAsySG2v5yStPPDgsSbEXAMFKaD7RTA2M9VtU9CNqmVNMsRXXzBdBVbz2B64pbqv7cYjMsfUbBbu6URvCDUf23E",
  "key16": "5oBoNzPjUiP7JzGiBmu8P8bfDs7Mk1uCTyi3H8hC1VmdyHZ16krnBYFrPdStpuZrcXrr78k67ANLNdiAtAUoEFe5",
  "key17": "4EkvDe4ioZHEM9ZcMoVu2t37WbKsaGmk12JADc6ExzQPJaz4ieeBaHwRFb4vrenocZiBMB7rqXFvvjTpNhrJiNzB",
  "key18": "GtiU97rfzzQDY5g1zATtPD6Nsat5WL6FZBCDCn8RPNX3ziQBa87uH3eahWimkc5bd3wsZ49SnPWtcqjRee3FPMS",
  "key19": "4wedpFSbcpbvD54xYnE9iAUQzF231evYta5B4nfQd6rXP6pPKJNrXT4Tap9czHmDkVSPFQdVR3G9SZkWTjae4HgH",
  "key20": "65n1ZwLdAp94FZ5Joe6QE2QgscoN7DWs6xzfcYePwgfV65v1zq5qPJbUbTN5hdXwwKo4Y4Mk5PpoX9odR3ZjDvhL",
  "key21": "25dunsW1gFjxKk3p2MjubtBiDyn12XbunRCNtYjweNyPKwwxrFddrwN35sv2ZAST6XFshBvZto7R1CvpndHn5ccM",
  "key22": "R2iznMZmFiu2zE9sTZ9fbyUmwwwwkhrRx9zUwUsAzpCCfAyZBroNBKCmbip31Y8SKcm5u3M3h7wjMPyrW1mhAGi",
  "key23": "3K3mXAFrouFnXTRTz12rt1BwUzyPwhA9d1BK3Py6YKdu36zHXx371rENpd85U3Xbv1Wchig81CEtJCMTscbfSiQ3",
  "key24": "5pyacgRAXGFo6qX6cH3imdRPVYMyKJYLv9DqgbLtb8ZBsN61Jc4GkeFPS1LdVBEvZNbB6KreyhHYKrsPU1J3Dyk3",
  "key25": "7MvvrV74kVavvHaRH4Utr6y1mtujwEHCRBp652hzv2HSGLqCM1X8do6PMYuiiXBuKwpQQqX9CFd599pKmgjBS48",
  "key26": "53JyeH96spPsiJ7V3eU94gmFXf8Q3xaq8Ex1dC1QYy4aq4sXfwWFdhquMdgX1S7RVEfLckFN6jrGqdHMhdgn4scb",
  "key27": "2tLbvMR5jDF62MHRfhdsRaQ39ifkZgidXkARTr4QUNXUAvCxYk1AbZrB3wMp2zc6L6tQeC9rY18Lvk6KqtCSLtRx",
  "key28": "qEJbJSRLVMRzvfPN2njTsEwkCNMXi2cQg8WxKrmdXQ3qWWnrbZReRxY3WGwcGG9zTyWn71Ky1VDFECeaqRoEdvF",
  "key29": "2xNaf1jrVz6hfj3rwMUVYyJax1e4VM57QKriJXURi8NoibQZw9pwKTXpLBH9uDmhAErAm7KRbBPUXatuSuGoHVmb",
  "key30": "45Mxx3VirgcQnFyqmqwVxd75CqCQeitwhRdG7gJeT8yaVwe2errL6d8wjmqV1mjjDg3rF9otsBnQmTEivb9HJRCC",
  "key31": "3wzU1qAQU2PsFvEeviDamirgD5YkrVJgKBKmqHwLW8kg2areZuX9DEGahRqffFLLfgqMuuHiJubK5sRMuSbfRtEk",
  "key32": "22vH87uRw9s1HWoYKPj5zHq8dC9ZPVggwReuJUCSMTxiKyUoa2TQRSUvNCiFC2ZSMD2xKGNLkngaSZWxd6TrQnho",
  "key33": "57CPkWG2ham6RSXoSQ6GyhAH7J2fYZt62UHrJY6zLuxEURxgqGXnAfUqJ6eQVFXSgRBQaq35mV14GXGGv2pTnWGr",
  "key34": "3jMFPbaMaCxaghXbjayJgNepK4FJADKVkuzQPKBP6ZsAXgc7iWCEU4qNPnHM6uyQnNeadHhS1Hh9uPFDiuzVwQ1m",
  "key35": "3nH7wPnKnV69UL7iLNDN1gbGUborera1W22hM7q1ZXf7dJ81xFfFP3quVKzs2EpuYK1KmLnZLpUjNeZbzpz8GjrY",
  "key36": "24d9P8GsaLm5bfVR865m1AzQjucMzb37RKzDVdQK4Yh1dHvXcWetgK6tWMvMFrVbNBwR3PNnaXou6AbRs5sh8RSn",
  "key37": "2HzhWj9Ti4hZwLZyGna4JCUjjgGh7STPcyTXzvFpaoQd2umUsjuPF25MvGvqeUzJRHXBK48dhqRK9UchmU43yL8x",
  "key38": "67pe8JpYWwjL5z2kJkF9XAsnQ9xeC9XMoujon66Zu6jFvfPLjbWb9MPEepjNYaFwQTW8BcBwtiwpzKbm2jBe7Xsc",
  "key39": "5HLNJwdaJMWyM2EgQ3fvETomfJ7mvrcd5kq3ydRNVPi3HyNa34F1Kh37pNNDLUDbenMdPPmoWqBusG2rHhCM6YuE",
  "key40": "4ySqrXDWgdYhVp65FkpSVzrcJpTqXij833vLW4MT3Gef61reJ3VBPppNu2Vh4fpAiwJJaHynN2nyBztvyPKw6jbm",
  "key41": "2Ks32dtAWo9u5t9U4nLtkJXFZv7UvAZF6UUrqwaxn5MARmBxRNBYnsoWsFR2KNJRjvffXs4T24RgKhyJF2cX4B55"
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
