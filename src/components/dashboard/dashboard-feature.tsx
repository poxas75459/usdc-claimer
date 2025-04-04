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
    "2b2HKtptcPAqhYYvzqQgU4QSdjeH9C3UcpKQLGqH26jNkuG1s8KynmhXgbsNZg1T3yPYiJMPbgZ1wFMvRPXKoMR8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yj6cEAv7fkb46icqr4theLGNVD9L9gFzhoAy9xifR1z6w8KhZEuuarDT6q7ctatiYjJ4wGFDNBe6mYKn3CSREvC",
  "key1": "3rZQy8Toq6pAuBGsVm12rsYNdGqPHjb8VxXPpFsDiPHRzo78Y5uvvWrU5A6QZn22ppPmCcunkAuPC83FGqCYpwJU",
  "key2": "3e3NRrWMfHkF8kYV5Cjb14naQpBC2i5gdH9JqWcfQHQYfnDgc3LMvxt6FHESNDyRrTpkSUo4UCTG995cFsiJuYks",
  "key3": "4FSgdw9WWjmwBphZ9oy5anxCBUFG51e3k74R9q2Hz87KDtxcnFTxz243e6jAX45QY9zVLmiEymegqeNQFqL3KiG2",
  "key4": "2xHSsj62Jkwez8UtzjraCjLQ5eDrLdBotY4iUecbTLe5nXKRUsmCt1fj4sZtfkDd5s3SDoTg5pamC1AhtHGZNm7J",
  "key5": "56Hh9tSJvUqWV5JZh2p5euMXyKikEEVqPQWiqVtsD669rDvyRhTfKmc5GPfbx6BedWnqWetnDds7vkiiYJWyDoC7",
  "key6": "5Gcz21bvkhBL7p23VaDqo2DujgxcEu354zVQJueiLCMzGfcuGyavEUQPXU4U3mX49hifTz9HDY2GRfuUCnR1jaqP",
  "key7": "LHpPprBcsmkarSr6sP7PxvaRjJ9HvHuAZPvcWPbRtk6FuDUrTnDRRgsbKYBddLz43AHwYyEZ1Sqk6mRPg3UC2Ua",
  "key8": "5k8keXtZGvUijkBsTR47xcSvwobP2urpkcKnQL1VYonm2wk3qkA5WQxwNtubpcpxuMAAzDqPCXfYnngDUv6q5fbf",
  "key9": "2Bpvq1kxUQS9aRhPdRodVg7JFPb2mUQc1AVnSRV6feD6Je5yqFcuWLGS7zPLYYaxeHSjK9aCxJhkdvG6MamavZYb",
  "key10": "24UBUaZmUUpHsDwFwCPWR6UciKdbNw1Q8dDRVvdnY4tGvt39xBRWNkX9x4g2m7bFyiBPbasX4DhL9MqAr7Sa9pvb",
  "key11": "ptEPRqSTkKjGDQbBH9iNpsQD4eACTsVVfsu38LSdJ9eLMLPpMrmnFpoKVYB8ArWFXSTfAQQ7rXFffECVuMv2P5Z",
  "key12": "2mwozYCcimaPv485ZYgDrUd1wQnAgBZgGgxM9JH37pm87gwmpHHyKZZdoEmLhR471EKWsyNQnLk2ZHtg6vnEdBwa",
  "key13": "2tK1LQJiE5zYyzCXf1xbstaUQu8tFUeGvdPznFbgcJVsHa4qrKB6jbityH814q2a9w6g4KckjYWtq7X2APFoskMk",
  "key14": "42BL3Gec1FR2WDMvHquU28R3U96K471jNXNaJJLd28YeNZ1dgQVBMvVJo5SgP5LK3w4t5ENPx3SaK6M663WLShUp",
  "key15": "xpXZTTVuLuHP5t7pKLxMiUnsKLVLZRBYQiDP4P8nrDHYWVHXQmue8knhZt8ox41abAW6UkTZU4kJLayLAgNkYy9",
  "key16": "3F2CH757c1SwXB1JdJEXV8qJ7Tv4pY5YKtx9u7m4bGiPJuS4zELrAXPGfLZGGuqgQ8xqny5LSXFMggfnKmTeBDDG",
  "key17": "9JzDpQ9xtnfUcBSJBCBeippwtjp7hrZA89rMwCr14MVZA8FjyQCgmRb898sitB185GuXmMmBgAic6UtA7LUdJTg",
  "key18": "4JdyidPF5uvkdwnKNaZHdccG9wh1v54r1RyuiG8dcfT6XKrjsEQUkAHqP2WWzR6nMFACgAHJDwoEa1rR3kbzxXsC",
  "key19": "3fxrioYmYhVjJ7EQd84dMovQ9vRvo7ETGzyhkK3AKkJcNZtFzcHYsUC3QQ3KYz5C8dApNUSVgMoM52hqAjJzA7w2",
  "key20": "3hdyT9GcSBM4MGkoKjySs4iLLjCUqCXTJEGtbnXBsH6M8fm9tNbkDm2UGM7KA41UY82LJNk4LrmuefsVWovcpWEp",
  "key21": "5HrXn1MQa8X1G9dhd3bTs77rzGKPgRmJBVhu9aQwJrwkfxqhnLuupoLxik7uJ79Mkb37nXcN51ebF4eepLKzzXkU",
  "key22": "4PjG5TRmo6iN9u7JjcNAVsBpJuznWdwuuufeGKT6zXAU87NgbeJmKSRDQgjbjyZHg6VzPmXvRrJPquWGLJHwfPmn",
  "key23": "2bXcU9k8PXRmvAkbZ5kw4LmodtSjyiLCwaxzbBAPVzh6jYCNDatgxpKL7y5mpyHUMjvB5p4bou6kcNC66xDoxTa3",
  "key24": "3ExDV6r6qWyrmdaorMTiVo3f2xWZme1L76ghYe2m4YrxevQPYquqpXPddNmtBTt3cmUVXkTb595u2BLwu76pbgAo",
  "key25": "53rzeiU3V2u3jAv62HfWo7JBihx9Aponsq5ogn5jxFKQjAVTiED1o5EDjhJYZeApGEGBVezwKYSWvBr3T15ruf5C",
  "key26": "3dBbYavdiVPenRzVP4PhLFAKYukqDR2duWZ7H52LbPb31W569dgmQtvhQEe5R8keTkMP62jqWEAviRn3FjhT2P11",
  "key27": "5wc7f8sDxZG9vykbab5qPBiUcLgEPscDRrWWdTF47p6SX3F2zMRFQbcGPaZGzKkthfB9oHk9ZUPXWd8cW57ymEwT",
  "key28": "3Kv3fsgsjk2rW6ocj4aqhrmdEkpsb6xUw85PZUMbEa8m78JU5SUN6KYqTFmZi56S4RWBxSvBVfbjS21PgbZWcCpy",
  "key29": "2SeKZDFW6poJnaQmXDNiBM8xLNjH4VsYTwxXycNnxZPa83tzgdJCGR9saLxr2VcCp3gdwV3JLoWwuhtrhoFTYAnR",
  "key30": "2gjKvoGAdNPrJNgRM5hFUAKyQnf7PNy1TtsXibaUG5JnMs1mpMQuZtDFDGkhTuVLJbgd8NPs4NyQFZ3iA4WsrwJa",
  "key31": "Nvu5h6QVJYLcSnFaS72XJZwFyqQ5TZs8VukJdwiDL5PeYG11if7spzXR7TyUwCahUAzmEjYd8xbNh9ysyVFRBDV",
  "key32": "5wi9RVUtbGuh6BBGpjtZW5GfsMuQm3L7NsjrrqKMfz68DUwu6garbSGJhtVPBZys939ATgZgZnhVjh4keENkSx3m",
  "key33": "4yNBw8QUa4Z62yVaLYweBdcnd3xibanUgvSDpsaYQwfYxyqytXE1n59exDqcNLvHCgzGuCWNU9bZyysHmsxko9iq",
  "key34": "5yhX8MadRt3TbtKb7iyqLbU3NntbZfoYSv2X6BJPYM9NCKM6gAdBB2oQaCvmuNubK5fP6Dojfdd14KM4YDnTDh6j",
  "key35": "3nYUnfGYdSS7vgVuJSWgKjzfzESwt8WLswcQqKHzALnkpqibr2jon8nuPoncY726qbvVm43DZnCguu1gPTfnEUTT",
  "key36": "3L4N2cN75VMWmzmoLAtKD9sUusmg4h95mnWQVX7JdZkjtu3BkbFg9mUpiBD7C2gJYnPffroZQsjqYr4RyysrchLK",
  "key37": "2DioukgAKNZugPmseQjepUDcCpkykUETqzdSZS3KKtuNDxpwfsVYqZTiRkBPvsD5JRbaAFSeotxBPS1N2Jhh6QD6"
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
