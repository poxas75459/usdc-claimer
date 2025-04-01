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
    "2DPLsKLLfLzHXQFEDT3aq3WCRNybXS9UauwV869et8PQBK2w4KkboXmJYt6HYcRjC8xtwWUxpLFwVYDngQsxwV2R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UqZEMFMso6V7W5myPEZLXFWUBwsQ88BoeGac1s1E91ZUUBe5jomYu6HyeKn3QYb9tJ2RP2gqKUWuK2U4fxBqWTg",
  "key1": "Tkrg9a8vLDbbbBya1EuVB6LHdBA19A1vjakEfCkCzorPgyw8EzERLaC4F47TFhr4HXLbuA1X6LyN9Zyq9HVnp9u",
  "key2": "5RTCfGc9bggZ3kZ98E8vi2zBEkJWszs2jtCQvV1AWWv6r5v9m8Jvfuv6Gc1LeUwhJzQDLHJQyes49GUR8Tmn6hvZ",
  "key3": "5n7nzXUnsdiEj7WrCAebZSvXhy64jo9eqTAdvkPQwt3P8cQi762U8VXz6kbfTnEYUsyCmRrUKcaHc4NwqR3BgeCr",
  "key4": "3yniz7Mz3Jo29ELZqYpTY7jC2XsozAVABmKFv3ukxKCWyBrcJAnX23GSEubZRiTnSgWSqdnx92QW37QprLLegFtr",
  "key5": "qr8NZSdNfxW9i3tLmrqNmyc1SbErzuyYsxELiUgHH5L11XHZhRG9ZT9JCJh3919KjtAp75BLGvkiwKy9RVxDxM6",
  "key6": "qUwa8XF4je5W6rZRVgijCA6mXWmxopCMSNqnUgBDuqBcZVUVuq1r3ak1idX1DJXJGEPW9ryFSSffHM169K9voNe",
  "key7": "3UezYcbiVYHaM4RggoQwCMvJEEV5cMPKEKHkWPncj6rzpkyxACHqq7MdKHcVLtfK4y3JXEjcp43KZaET4FtiTzmC",
  "key8": "5tpREmUCnihbdCQsd2Wgv38BeUaaZ6uatEVXWXsNd7KpQou5BPgT8sQQDF1qstasuoLenUezdvvdcY19H8DkbwMH",
  "key9": "TCadLrMrTXv3uZKSNEcsK6e6SAq5bZondPR4u87BRr5PvHpiFQDimbX7PbciCMEiEJ5sr2cHnoT6RTD4akoMFF9",
  "key10": "3o9TG5QWqMsVEDRNaXZCocz9xJ3vR7HQuFcWoum4WCKd9MmRh6LcpWmCwPCtdLvhrBSTcaQZN3yLJ5r3tVuKPjB2",
  "key11": "Nc8oY8nDyiD5zoy2K679dmnN7sTyqL54bxHPwJ2ecg7aH5ZXhqqHFXc8sn1cnX5ZFZXJCgYcaRoxMeXY5tZNTcC",
  "key12": "4XZ1bzV68tztbmz42kckE772YFzqyJ8HT22Z7Re7KouAf8qdwH8NMm4spDd2LPnWPR2AxH4gFjW1bYwZknVxEqFj",
  "key13": "5FMh9KRE1pAmjyfgUCmpzhhNgL4JC48tKG6tURUShfUvhTPTehiSS9uK6mBrtuqbmfMpgCdkijs6aySj17osRPyk",
  "key14": "4VgA4K6wzPtq9KEnLV6YrTuT9wEo3PrM2uRRvPtTMLwAJqoBgEPQ2AiJyx3ZFS1zfaxPNixi1RxadevKy7NoJVDi",
  "key15": "QETtAuHujqd1Ad9Vd8BiVZAfLoGPRTGTMTeT1BaEHvFPwz2nuNLTwCwGE33niuX3Yet325PA7BNhmLQpc24FqSm",
  "key16": "4UJbRCDuRksPouQRbixuDhrcat7gmPQcB4yKJ46nba78NV1mJQH6bBuWKBJs53xfSntGarFrpoYKcDdH5VM49Ar2",
  "key17": "2fmYMvsRDUw6iqbK1Wokocvwfo9ZEM8tj66UgQ8GBrK8o5EVcxG1D32FXnSc5viyr8ffh8GHAesf3PQsQqQjp3q7",
  "key18": "5bXRL4JHyJ6hVHf4vitzKZHgZy3iJZ4MYmrYuQcdg12sJrR7a94YhkqhdPxtfFbz55pZuY7gif9gveAsvtA75p3A",
  "key19": "47EEzBdX4Wr8bZXR13uYbKmxXxJjQtjhT8XRV5AQ8w6znoEcQ8JGJCRXBpfkEWZVFUSvdr5xNQ9h4EUbRpsy2EnV",
  "key20": "3qB9K9jt7C8et6ZmKWkP5Lvzjy8AsBJiXEtntbnfN6WVdGpNYovWuoYBiJWF81337hrxdMUc5ASkPk1a5NTsfaEF",
  "key21": "61tLXGBi6koPb18cBzCZ3HW66bqWMLFYYVPD1v1xcFKgN4iiVEeNJtyFcWyeQUsfU6mZUT1rQKbsvXzH1TJ5nRgU",
  "key22": "5f8icquPcxeMAvc9q1WeTAz1JQ339HximpAL3af6ZiUKz77Ex4Lobd48ds3Gjrf7B4Y6cFoEjVaWn5N6kvksfhxd",
  "key23": "2WrMjaoyh48sYs1QpXpWigR2rpyM6nhVey3FRFZ5gYpuxJsjCimfyfC1ppeVeBbFGakCHj5CdWS6suPqccMNMbS6",
  "key24": "ec2KS1HPGkQfpPVZv67sV6VN5JeEw45KX9Aip8vz8W94GLnVhCmyfRgJsZmuQt8EUHNbNtYfUCtuxMrxreo45D3",
  "key25": "5tpuRdYgvnxyt616BedFxBkz4KXEqBXQZb5LrxPuGXe3EAJsRdS2M4Fhz3JGw7DMsBfKnv7YiHt1YEb9UR3Z3V29",
  "key26": "3YCvSpQHj7vsac2znGvGhPmDS8tWYKHNWM7QNnsFdDyGhYJ3g7ivHZ4VNEtMoiUEfM2E2hUNt5gMbd8mvPooatJh",
  "key27": "ctgPWQs213PdBx2zuXpU135XsQzgp4c6vVaXYmEMnToqC7b6hFu4csuC99wEwPohPsyiTuTpq5GMRcxgza6wPT6",
  "key28": "4tqeJvTcuppRHobHcB4cmbvAFqftLiaccbMQYtpUoVyEdv9s2LNL5GVRh2Nod6h79DpfYNaBXPFPAgkjiurMuF9u",
  "key29": "5FSYkMxHsofRtHUEjbBAAYGy5mQZ4MAF2sEb2TXxAxTvZycP2Y7QvbqQcKqnqMFUN2Rc6jTKMwbuJ1589jwmNdmq",
  "key30": "5bKzftnrGEZX1nfKojQk2ZKYzxGU9hiBtNuTQWu3GkKvf3sB6S9mQiBjFGKVBi9PFsJr15woWPvPaNk6Hv4Kxd7x",
  "key31": "5rKqcmuoC6meQTmeZFsdCdu2ZAHduf9V1AK6XCTrw6xiBjcT7jJEkYMFrb368HaqRwZjjiignUTxW76Cen4ZCvvk",
  "key32": "5DCUeZKfVjvGqyjw7519zN2RqELj5uDUCLFRhDYKqzTrXhsQHBBJcdjoJZFT455od6hq5ChPE2thNjSCfHGt9Sc5",
  "key33": "3JHNERYoqiccDgWWF4qodnKHaXv5L79ks9gmoJhS4PHTmRyfbm9J1usBKYT3VJgAY8jxXay7PrrtjiSjcLYXeDs6",
  "key34": "5EWWJhrs7HcWo7g9qwwuVnc9MutPAE34TrMu9RN42o3gEP9AE3tHHerCbkkGgySAwqqhU7F6rMSQN1Vhr8A2y1vT",
  "key35": "AvPJmCpv8A5MUnTMWncQd4udHsqyKPiXjQiLi5pXGXSXYfW3HmqK9Nv2aamjpLggWHyYxoCm4GbH15GRXQ8LtqC",
  "key36": "22187oMH2JCyY2meW3g7PT8jdQoJHXQDSzaQBCJTaMu7G7WyLDt9iRKEM1nnKtE9Qkp5ARULmYb4TaUGxUAQXr6m",
  "key37": "4GibaVxxHk3i4Y5e5qT5gQu9BNMc5BDe7M1EypayG5Gr7iM8KGyz1afJ3PBqC8bAg1vkVp5aaqnPLbbi4yw9dynm",
  "key38": "25SAoGNpdXRPiWXmzvLG1pCMHTQ2bYw9u3VwmtY5jHWNhJ6ubciLy6tzZPwxMc79sAAgd82JFXx9cVFB9QbhJBgE",
  "key39": "65g738c3XoYPiGc9Af5hQYLaMQSko6HtaFtWHeiU9QzvtrTr8XZZZAPaRjNL83mLAqXx3XtW1C5aM22o8qEdpshm",
  "key40": "2iKHvJqVKV1unMy6i1Jc6wZ46gBGSYAT3DfnktAjWr2tnpQT8ZaADH5U9gRSACRH9TGEKa7B89JKDtvVGyTksoqV",
  "key41": "4dmU7P6DnFuSszaeHZfzLVmH6NqVUgRnBg5g9LQqtTipFVqn8FpjR55Jns2d2jcubsPm6hYPnerrimCXQXucMZfv",
  "key42": "w4Pai9Y5wqi4EQLPhRVvw7a4MZxvMfEsTvhV2Sw8MfqgAsKjfT8ZKsrm8AykQRiJ5q6w1bUXoqFBpgBXat2GSZB",
  "key43": "3W3yVG4mC9if2jPSZgh3rsTrzwzSBPPFaPmdNnMJnsL2DQWtrLyQpBqSF4spwnw4iuRBFQ3BGU3UKidRcRYqjxSr"
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
