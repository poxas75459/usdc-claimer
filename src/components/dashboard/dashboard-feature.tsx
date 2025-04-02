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
    "2xAiLFcmThpjKAzRu2LLoqNNnjTqbHQxuDHg2EkEZnfYQMyDiAN2hEehMDHpEm5bHJTzNx4g3sb79QKaAwb1e2Gm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pN1aZQwQzegBhsbZBrX3qUFRBxxUkeasULBecJ4BCcgdW235rPmQWbx4EYXDWmY9vS1J3TvhknzQ8aR1RxPP2bZ",
  "key1": "97pc7pbaCgpciPe8zDqqxD9bQNsnuu72AYMSAfS3MR51G7D2pA4Lp46FoL2XJyL6PRhWzYFtLpSksyNoZHrWCoV",
  "key2": "27xQETbZ7ZwcLx1i2rzP9cThr3Cq6j3w57LDT6LDGiEEBEtnwLoWExiXjD92gMkc8wSunV1PkuAiFKdrv3Y8RQ5G",
  "key3": "35v62iwQwbXfhPZ8KxD4KYKoasTaUkipPd2umxmg7MfZNWHXHNd24rL1QQ9TYktQEheXxbqd1F1WGwTYYgdJqe5C",
  "key4": "1GHQd4RL9URnRrdH8UY82CrbXAjUTd6LhLygdARi3wmorN1cWFzheaQGa97D1kbpGBau27rc7tbchiLFX9yXeza",
  "key5": "4WgFHpzTuRxgLhuARHDKhUhwhiGvzEss92hgtsiS8Sdj9cXB1f7XzFQjcYLzFX1dUhh2F8io2nUrVSnLdGBrpYVL",
  "key6": "Lxj4sjKrUsuak2RArbxKnHCBAGjGjgUAN7iE37e18CSRHqs35AjzbAKmdAribzyEN4A1sSqd2h1GAY5Mo3JjHj8",
  "key7": "34LFKb6Hcrf2Fni5AxZSoV5JPcM574PPuyzGtZxma54aJcRaq1SwcJAemVfkB7WJZEVTQstwBVqN1NytUjec4mYj",
  "key8": "VRvHtrMPgH7ZT6VH77cSBD7SuWV1kFrSvCMapu4uVTnFGf4quJBVzQWeBFP62wRjgva4Zwg2s5SGqNB78Grdinj",
  "key9": "5asByqoPGzjsM5zi1TUWMSRU3e1vVXBnMxe1kmWffin8JiXQ16T9t2ukCHL7vhavW33cmikNSCkJA1waiJ2kuhhH",
  "key10": "3ebrfPfeqmVinavXTfvb6qJKQ41gTSo9yyh8Ud2BaPrAq34im7w1UzvQjCp7xsJMmb1G3U1BgEvQH9SN1JUBFRui",
  "key11": "2FWEaWH24P9emSYJmrSUWAmPZmZe3v7QpyP1avNtiekd9TbAZqyyerJB4uCAgKtBMYVAmFPU8sxSJWbzmBxGg1Zz",
  "key12": "3B9tXs771HcrovAdhpAbCbtctvVBqngu6MrFozNxdRxBSowbArouQZ2fVDrDkd1WojM7J3LadGJRzcTQA85ZCT9i",
  "key13": "2LRpxDHaSV3KZncPhQ3A4MX9QTELKct135GDrpRahWoGTW5dfUcW4k3chyFLCkyGsg9Bop9fQiGg1qWSrvF616Gw",
  "key14": "2dEQQ4KNqL34pjR44jo6MTjwX5Vr2yoJ9fTEVVWWNcvLTLgRYkYMSzKknTQtjtTFF5aLM3iigbGAunSqn1ymhvnw",
  "key15": "2gSxp1qTH5Eyvmk2o6NcrtaX8c8ToekcVMPSBUZe94EKmBAnb1wepT3Lb76wbEz3z2XW7T4TYLf11qn1ns3gyEix",
  "key16": "ozLtAL8cKsbuH6fLwi44soGzzyyfdVvLiTemDkzf8PAzfznTpmfEYp49KYXnq8UNeCcB2o1YVucMVxT4T5SAxCr",
  "key17": "35qCU28K2zMAUNU2zQfmqFRihhKqxyQZZGPgQ3MFgSLSnGeqTNrk5EN5FuvEF5ftghE5rFd8E6h8xp1d4HeUucs6",
  "key18": "5t3tzHxz3iF957SuXZVkhoKT77m7NhccnLxbas4tT3JJgnLhndMrnDh6VzvVtJ1M9w4cBBhzaJfFADbGF79eYUAb",
  "key19": "2kk2hkeGYKfEaL7hgBfYwgtTVt5CRLFpVirqrDMFQGe2wYrxpAB8uShCm3icvKRRHum6ahEgeq3ysieTAQ6z4pqe",
  "key20": "43UggCZNVLe9o15KBmWtntuyxqa12HXkPcR5VfP8f67pdG5zGdhs8qB3EfUWQmp9zMXtAoZaQZjVKedyqfH1mwpD",
  "key21": "5eTSb4EXbS52zL68L7PK7vaQqGxneCoA4J9zYqGsrMZVyKU3MyCMjFCPXPh5TeapUBDWUZNTjdtoDniEcSjyvaXN",
  "key22": "5rZGfmR8jPSUvJMWRV51jeFsHLwBMSW5QRBcArRQ3Y8xhJJUDg4XrKAA7YBkjBMukvJehQvSxTwLigzkJ1eusJ7i",
  "key23": "3YRPnkBUCnptSThAeWSxpBqBXsQnfpGD1ysxcS7PgpDez1TjgitAakxHaVPM9Mtm77oyTtTA2AVDeQCWu7G4g67K",
  "key24": "4pd1DCDgUiLRfRXqf2HSrN7Z5oyDZGFXwaP6R5vmmn3XboELZVSCUU9PnNcQSDBPTujWBaGUK6VyYXHi23LGayCT",
  "key25": "v4mBhNGyU8KxoPQ2DigD3dwKFcZ8wyu4K2EpBJvibFy78MEWQjhD6EfFtDgPocgj6mtmi58zCjF4CS1xJ1hyoSH",
  "key26": "3AriNDZs5CecNSgTFMRJLXgKbWZJJsvTb3kQxEkJZKKWeixRgozmSRdV98hLDSQXAf151qLqYKHgu8cRhHnWo8A6",
  "key27": "3P4HkxfH4n6BPV92VQTCbQj41hhvpJCRFhvsxsSa7YqzBZ2wiDFuREqohYsKcbZD5MBB44iy4ugCD6CCmAKhD2Lo",
  "key28": "5yd6hJn5BufkYefQLy9okggk6WskWu18VPZAs4916YmZTKZAExP4bjmxARzM8iz7qpCijTccorcfPuf3FUXAhijT",
  "key29": "3hYrdJu5AzD8WRBfggL76nBvWNKXZC7215cWb9aAMoi3SgxuNzSvX8C8DhwmsRmYVCnxThuyqbxDNdwKcJqXsNxf",
  "key30": "49AbEvnovJNbydjtmQVef6rAf7Wt6xW9BeSV9hcrPDhaBmqXYXQm5WSbZDyioL7YRnh7dnfmreWMhvssL86DKncp",
  "key31": "v9RaHchQr3ZYhtTErSqtVjFn4PBjc4bVe7Dk3jFG1ztjX25AvUqhMcmsQ3ya3BN9kFFHR8UdC8dddRCJ2gJe63Q",
  "key32": "4vdacrp7rGZAEdUPZHqNuZeCYdmhjDqqtGWEyFQkp5Du1XmnmjGhLsMsFc5XVBCmvdHBF9S6HUrHA6rFxH6gvRKU",
  "key33": "2Lf1MADysBETkuSE47EN28MMMxr51wELzYkUGQFL554eowwHRgkkHYn4gdqaFnyprKRqiG6SsrdbWz2vbx3dQ769",
  "key34": "4UkxMFKzTq5MnbTAeBhiPu7pYpCmqygMVc77gSc1jZuUc6mPFvAFgM1GCA7J5BMRKBciK1N96ogvA173j7RAnAJP",
  "key35": "3NSZU53NKUGaEYg6TvT28JEiKRMxigmKxziCgmDmtFaWX4YLi3avkPXqDTYVK5NKgip11vao2VNJxnW91VdaVSqA",
  "key36": "3YyaMnd6A7B9ESVtzvpbNBWDWDbLnc4duKLZaYdvsJxepH6BgoY8ayyRxNC9YNPtuWAGF5nCetoUFaikyhMcNjAS",
  "key37": "aADC7HDeQAN41Qq9VTLQMRLxcRo7P77AdB39GkWvq397mmmkrmhmLt53KFbX82Q75X8zjjJjAnuxtBNuwVZDYVX",
  "key38": "5Lr4jjaAMNfwZX8QyaXBDou1E7fqP7EnZo1jNU7sCWFLzMdpsAEEfSF9SFNbD1jxGLA1ARYDNvCtSa4j563jPHXB",
  "key39": "4wvAQNqx3GTnpSkwNqFPikRZ7p3s1mn17iwPAnUMqHw3npjXo2a966UgbVUtiAaHvxJtA7Dx8iJnYfBLQfCMBcfh",
  "key40": "3eXM8DJGcFrsaqhzq5w2yWKXKZ4ouWSgCwzrg1cxvCTgmqfSHKuHxqf4LtCYSrZzoiWepnbwkCWhrEUbJMHPen62",
  "key41": "gUye2SuH9HiUbTHkc15gLB59gTBpFRUeNLB5xLuTkTaqfH6bW85Uajkaz4VwERfA2az2DQ1mS6cgBivge1JeCs1",
  "key42": "AarmdBXz9SCrky68NufGqnjxFeswkzBXapf8B57Lgvg9tg9fyCBzSNAdo2NfzxXYYXdm71WhTbU7Bdb3QqbDMHH"
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
