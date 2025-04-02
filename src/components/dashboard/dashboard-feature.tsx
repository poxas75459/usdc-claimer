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
    "4XKQL85GVGfKcvq7mynip6uLNwDni91eBBXhCFJF6qNJF7RGgq9CMkzoV3jDWhHG5DVhVGRf7crfsDCksQNDjXdk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qmYYryoK85zsR47ctWyGa5E4v6t73B7dPEF7HbrwaeQUosYtBYLTycuwXAiQj1JLGwNEdxpG74Abve4ACQCA6vP",
  "key1": "3SRuyrBYmTQup5AQpy4f6M6UJfFCw5c9rTojiwFPXgUYHzomSQ5M2DCtDuci7DawbZ2diavffasLa43La5QB36cq",
  "key2": "7woeu3g37h6LxdSUuGP5uMPUbjdEd3SnYJxGJyUKHbwMXYGRSSYQHhJKKSvSzJ5HXkV3t4XtEnHKBqg8Qg7kU7f",
  "key3": "2kesCnz5HJjyH49FzCRF9RYfZqyRTpV9Xx5vj6DkMDGUKQYMb6iJ6uWitGKRRRV8QBJfwk4cFgPVSoABh4cfQ1Gg",
  "key4": "5cm97dc2xpaN3Fo7DVuvoa2hTaq9yboo9U37uMdyXz2kD8vBmsVnHuDHXusFCjmixACbSw4RZgcSyDxCvdSt1ajh",
  "key5": "3giZu4168jN3aiAdDw95kyuzRExpkCgvQNc6BduYkitayQz1nz53smGaVp5K2ENxGESCW8yTwM8k6ZgFD8eS2dC7",
  "key6": "5L8FnktugorCRyWYr3M6kGKo5dBNtJc1VKehEXQ4yRBWtmJfSevvh3tpWA7EjCDs3j9SXPe7T52UMxAfHBFdr1cW",
  "key7": "4QJ2CEvDj92BybZU2DxoGSW1JUmbVByhJvMNJLPDgFLk35Xa42wUUpbDXxKfjfzTk6uVNMd1o3Z62pBVi4Au8zPu",
  "key8": "5zmuhvx6Vp3Fcw3VF2y4bBXXkidYykDKw39fkFeShys4VTwsTjbXDbfCzirRhoRFauY3JHSb8KJ4DqVPWvVa3fRQ",
  "key9": "nSXUuKf4oEgwwrPuAHvEDWzsTGKfu16T3mmdEqacuYjYrZCEBddgyuU8CTd92wqGa2ATW5tYNbPog1fonaR5F6j",
  "key10": "sLVoe2UXtNcM7BqvkGDVxb3EkEspQtEXwugsz3NvHGoEr6Tw3s24f4Azmwx2JmqtYKZVWTjx4CHMGoLc8BXafC1",
  "key11": "2ewr3itr1QaReRrB3ZGrfY5kmPxEo4Tqe9ENa1ChnyyhuAzSetv8tzNshVgXhvNt4caxoPcTM1TFvfwtkoqht4a",
  "key12": "34P5P5cgZProWWLuGNJnPraAthG6YvHdboiE9mhxJhxj9QvE1HYmoAEvwcJbYDUGBx2beMVxLFbae1pvBjbbY7gb",
  "key13": "2EXRNQUMKj6ibGB8f5r8HESY2zxNunjNeT1w1Ei7P7ZWybu9hhBuoKnGqdeTvFCB829KVLR7nA4BKCBS1nCmLc4G",
  "key14": "2u2vSFHZqjVJysM7nyEiotkiHZnxw41b4Lx4jTTnQi7b1oDzJrsBNdqhvh9XsHsk5FxnEegdR2UYCTQt8prmP7cg",
  "key15": "58FdBjCpB7viVENwpGz9SHyatNBL4g4hN54dM8AFgPEMkYX4h3dbcJz4w71kwHtYjASgDCRHKcmXmiQwDkLeFwFS",
  "key16": "63ZajhJijCWM5rpzXyY1cevkusQcAxYEfqmUAbTFr5RkHR7zhhiS3aR8ZxfSfRhE5bazAaEVTMiENYxCWFMExPxG",
  "key17": "3Ma37QZ1Roew2MWGseXjEWq1oyc81aEYxfM8xPs2LkWMXxwoVrvpK1pw6URWNmCGAFNT76JSdSxbnYNBR5HByoLu",
  "key18": "3myp6BZg4Mcefz6pAao6jV5xkRQYY1RB2Kny7QMVNmeHRty81tSBHDmKYJpJ7HgGrWWvmr9bvaxgB2SAPUNSy4Ty",
  "key19": "2EdSgvFyKJawaejw6HQNefxXDFMR1BSq6v7qvPXDykxdHKWFjr96DUS4JBWgceEkDNfqHvU4e6sRXK1ahmBK4vyz",
  "key20": "6263KxuG9j4UHzSRFhhkgRfEYmuEAtpYnXvXxB6tmjH4RaDAVr4GWKeHYdaWDYXw5LfN4eWStE4DbE2taGRVrmmN",
  "key21": "2FUJaCAeZRGNfYvhJPocJxXN6TaXnMTv8X3H3HAbmiFeKFcxeQxTdASwrdvTkE1qdkcfWHkfxwueLSGaRUjnNdkR",
  "key22": "3Vnqm65fzz3P76tPhJhMQ5igEMHuCF4T1hmfU6CAgHWDiSZp5oN53gp3v1j8YUpTVZSZ43t51DD6rArfUmgAy8yN",
  "key23": "3DUqB55B61VxUDdXaVpMTFYDpe4VpxujtSwrWwtyh6FAr7EAMW9c9sxar4FJukDRZ7tKhhMioYSBQL7agfsEPutd",
  "key24": "2dTMf3BnYUfT3y3CPFNkToHiLfrLCNVn7NVKLbwxDSbC6rsYFvEZXsqLiWsgyxHPLH4oBAfMmSSVzBYfVCrLjeap",
  "key25": "5WmDh3WV29YVZ8t7uP5sXigsCYhsv7VESb1fPKTFNDcxiEndMcSqhfqAz4b6sKbKJXaXsiZeHUwd6QsYfSv6h7jR",
  "key26": "46BkPv7ELDBh3hziKiYfRWCZDEkN3F8gK4THpcZKa3QUDQXpCisXVgQuc7pfrDDAS3teB5ShSDrdb6nxgG64sYWs",
  "key27": "4FCgZotFDFDJLG8WaNw6jYnCK3LiHcghELZdiaH9CQZcXsF6w8UEzYhV728s2SWfY4k4s4b3Zj2iy93qbUxGxXjU",
  "key28": "2tEXTuofgnvKZzQDLUXRwkJR8w5K54ZpyRya3NFzsvRnXYEv4CvQdFtfEVuXkGuQnVFq76yqG6vVN5weBXTzT5Gn",
  "key29": "bxnDm38Ge3uXiGh4Adz9M4YiMwSydDzzLZiAKfNQA9cKHLDbHiTc876A6p3jeSMCJfypxs74TCm1ZmgwVcKR7Kc",
  "key30": "2KpRyUQBy99JNw4ykyQfG3ZBsg5243a4dWEvTPv3RrjDikqXX3rriufHEySahpwkEkvHzMj5gmfctNJxiFNuxU8Z",
  "key31": "5GJ75aRpqvaJpvcBW5Uuvdf7GxN1YJTyqStGsW4eMZPB6xK1DeCcncyagyDTikLjHaQ8ypuHN4n8qsjkzeFFUFoN",
  "key32": "44u47s51LEFA8ibPGVFAewCQKsuTqTuNYMTgu2eSf7sG3np2qKnkhw1nuJyMjP9632NsQGzXdo8mtenKpRXQwTxw",
  "key33": "2FZGjq44fwLvWDdpx8SLGsTbkVSJa6FFkCdwSFQtrKxGA9CemrR2kzGtPuvz7tQxgmBybui7PS2eU6GyGFWKt6LT",
  "key34": "584ETojmgejsvwWA2QRNR2jB47VoVM3Q8KzBesRUQdr4AWAnePHG8L7KQT2KqYRUhCLrfn27BFQpBU9JgC2163n5",
  "key35": "4wGdUwVSuTwUQ3QpDvY4sC9E1KpJvxfC9uoBvkZTAnXDMwQJKSquf4e342kHpqPsD7h6Qyo3CBQvXBDdfyjigNNU",
  "key36": "4i2NzTuEEdzyumfEoX4C5856hbzoYyFqBzJLAiYWcjJMQEHAm4gXqAxg8pcJuTu1Z8dKNeALGzzwsgRmuvsAxQhB",
  "key37": "4awCStWub6ZxCtKqAcifeNkEvxUWJVAUwoXqitaqpweJREbuBgcQWACviU6qtQthft9Vjkx3hqz7bAVmChhsPdVc",
  "key38": "4HuZEUg9FXAo1G4Yx7kjqFSYUuvmSJqyUxiMRTkEpkhmah22zVUFBfiscAkL16mZKRd7pW5hetHV3cYZH7yBchEM",
  "key39": "3Y2KNUAj797sFka49ud7GCQnJK9fBUN6MJm7e1TsbQRmiZjaL77jxD4SW51pQ8M77as3c34ZPSGpfKrdUDJEdiv5",
  "key40": "31RTrudQyRggNjB24MfW8b4iNwFqspvsDb2TxtW8Z1KJM8HjhEnjcfCmkFxM52jQ92vmYrt8gQ4rGY7tVopay1ZB",
  "key41": "2H2vWsdmSJfkad3JQYokvAoGukiLbNmXQWCWzHsC2SPm25GzcWBxZd3mp1pZyRAhaKNoTSrfZVZGDRAHzWwp3CY4",
  "key42": "81Hz4uFHejEnUnVwt2GEk4SEeEdJw1kGjgroG2b9WtzeE3SuE4HcgtDLcn68ekyUaiiUttw99FcVLqjLMxmKXtc",
  "key43": "j3giWt67Hs3k1hyinNJQfTZVJFuKz4tj1xV46cjD5KGUxnWp8UgTnhpqvP23TzY3WTGqUnG9E5TQ473TcKW4gWF",
  "key44": "W6VAbNafew5uFynx2YXPgYcFRg2kDk9gqs3xpMma5T9PTum5QDVgqq9cHYDxgbScYfaBJmMmUPbVHBorAak2pjA",
  "key45": "5v2y7tvkDsJGz4gZj1niqYdQbUK673RjH8GuQfNCNdFaYdu7sDW139actkny6woeaAdV3dFNzheKQqNbjQSeBrb2",
  "key46": "2iUchZwddsPVHYLUayRUoC8L9iH2Yd4madzgA7BqSNQ5KHAr2nKqz8SmWpYpBLkS1BbBzUNuG3sMAnmK2mnA2XM5"
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
