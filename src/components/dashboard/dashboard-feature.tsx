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
    "aTS2Unkt6rkaZyUy7JoMhjNJra4uUnPqRnMD8qnvaaZrWFxQ38PesCpDXKSrcXfJTpETeRLPSWoawQpb1ow7MDC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Nz4ZyUgDNAq8ri3kfZcv1GYbq9mvA1GUTuamaqsBPGi7AtDT7wh8mydHSDN2eXhBsiL9nBcK2wr7f8PxxqSm5kH",
  "key1": "d8UdKLEpEnJptk2qcePVQ1UPjp96SHEnP38FeV4zJi5YCeSCANdL1dFhiHiQGL1Hd4Sf6vD5Q6UvuQeejP1AVkJ",
  "key2": "4dp2HPfUh1uvtcePnrGeDykMsry5R1ZXaZAAAAkXHxRMqqbgBkLNNDpBz98XQ8fAprUGSKrU1UDnfHtvLVg6jZnJ",
  "key3": "4sSyUefNR3HSSGnG8Vhc9Z9KC97iwkGx9zuscuuu7FQ7jJJXcqg7Sb6eidMLHRYts8vjudu7GvoaHJRNycFCsneC",
  "key4": "5aoT9cmjUdkucoqCHrcp9NWD8stHMQny7Y6ishn7j8ySKxcye6nQXwYaUC2BJzUwHcVRdcfwiHeuHHYZ4nnw95ah",
  "key5": "oG7JanMLB2N284xPohXWYzCJBZ8PnTBarCwcxx2n3ttEGefvEo1RC9uiqevpcif8989Z3umfUcrTQJLF4RrMq46",
  "key6": "4WgPZsK8FYxT4PBPghkkCwS29XCYKKJ2FS34WQYny2p4G9oTH6bY7e1HfUYqff42RNuhpfEETz2sih5FSZTUyruX",
  "key7": "442txiznKu3ZHPu3dB1qNtgYiYfqzxGCfFXkwveWjtzyuX9aYMkjR8rzDo9HoGtFESDEXqpr7SfZXDcy5ZoDow2K",
  "key8": "3d5g9cBdB3wPBy9HA5SMibYb2LtKVVk5i26Xum5NqEBRScchP4JZxXDJPvrHqcBVW9etoSJ9qWZLUhqBGXkTgeRe",
  "key9": "5EetdfqKkXey7JB7dcYwJFXxEs1URcvFqkFSsD5jPNAH3yAW9GKSXk2sNRvh1svUxSCDkFtNX8hQthnJGnmqtVgi",
  "key10": "5KJRfqw9yKfFucvkozsBdAuRZGzvkv2XwoUkDgEPh8eRhJWZWZpEoRHTS17swe5pivkFbX2yXQ7E9yHKm2x5Rb2f",
  "key11": "5TxQ6rxqKyY6cbBWCkREUrmZmkF1oYV4J1vsUtRg8dGBxBcscTKhGTSzhR7vajMt8QdG74KdBXmswsxhiZJ3ruZh",
  "key12": "24UfuPVdEMUpZ4qJ7L8uEbyUdiRDe59quwxSBteZCPtQcoUzrb1Ga1ir928b99F4Qv3iHmGVEeo9nF738WNPsKcX",
  "key13": "55FT1TBqqd8tSkV8PXRhMptZMsubqxqhwA5ARCnvo3Y7d6ee2JULJkGUKDQaaJC7qSACfof59CXBHSPWahgrMU7m",
  "key14": "57XHhrP58AsfmrGjX2MNd4qdsboR9nRLNdHDnET1hskuPnqD6LH8caW2cokgTHoeyCE5pmATNVNNfVJ45S8G8vvr",
  "key15": "3U5ChKzMa7aWVkweAAY34n9o5ctTdxXLfUiPtczdqaus8fP79XebTBWNtBSSu9XAVoeUMRxbBRJRKAuABcYMmzwN",
  "key16": "3LH1FTYrCozeQW1b1HYYFnnwwst2JbAF2BVp11AWdRoEWKRgEcDe7tqnQtQXJi5s1RNJkqFpt2yhRGf12RVfiU9D",
  "key17": "4bVmpjdKjSBsn3GBTthaovBd2GyNJ75EFr3szRfG6z1G9C6b4gL4Uf4Ehh3dM8PcUz12oSYX5S7Zc6bY9dSUCBiR",
  "key18": "2Eg4RVBYhLSmpx19DJUjHKhTHJgEQwZ8Kb5k98RiVYMAygyEigZigkr9KStGnVtq3YzpQSZwFFyeCJZJwv2UU86x",
  "key19": "31UVax1eny2GhB1cZSwU86M9h1jvddDRJGoTPjM3GEcWJggFvrSHPAmn1tc2s8q2up69NVQq35pGvFJmPh77a7bK",
  "key20": "2XWsrcRteC5u59Z2SqCT8G8kHnrqUsfC7Yj9MXtY4PAYEAGXegFR4YzVsfLc2crzgdCu6iowWz95pZt3F6VYLB3Y",
  "key21": "5Xa9c2VKbA4aVExhmwpgbB4AvLJNz1rztLqE3bNweQkt2us9nFeV1HSJYYzL5dmD6eD48yRrQiLVrXPcUeEBUVM5",
  "key22": "19FYLWQWw1VGJgqiMN5aKXc7EnLKb34NARtg4ki3yaLi5gFyKT22FECBim9XNtGFmtW2RAJCVKg7Vok16t3oc6v",
  "key23": "3oiD3WsYnMprHUKt4ZM4G3yxVsPbRA5VR56aZZZQFJEXgH52aeKnxr7MWyi1G6ieD7gY3KwD39tsY5kRnMaqrrfK",
  "key24": "2D8RUiymVbQZTpySYohWNV4EQAwYCy58jGzx8hzoFG38XsxaRDcj4RxvHZzesH8BEoGmbbbVDCzGwznR6vc3dEnk",
  "key25": "4D98Sw4UqCTk7wRoWq2nPadnPV2HBEBLpaTKrAoMLERyHVJTeACUuQaDVPhbhwJL1oQm4w9pceoks5TgSC112D2K",
  "key26": "onkJGMYiY66Rmu9wXjgo5vkyKqrfvkbF4C1XCmxUY5n1UkeKhVEPKpNxEJ1D5Hhs4KEadE9C3PKuKm6uH6hL5fC",
  "key27": "53wUPsPxzkrTGmeu2DBYchNPfPFLnFtz23cKyzxZauc6hEycuo3J9xXCAuX4eFje67Pahi7Myjjr3hLsR3e2kedz",
  "key28": "33ayHDu5ngy3Q2ThwCdGk4ZquffcFTjb5Uy55WN3b5i5uhCseFWh7HPuL4PUmW4fZkcThbjds1KbFn9rsYU5pVxZ",
  "key29": "nUiicH22a9FXdgiaKWp8784WdMBsb2kXnvrEVYDeyTXA2uMxDyipNLQsAJ4zwYnyJCPpPsYhPcF2d3ZGtDDqw2o",
  "key30": "5iEQd47Ztjz8dgE2G6FHWfpgbc7az38MnFG13jhgNeiPgRhJnTLoc3AuNTEejoZWBLg6VUL9PUFktCEic4TDxsCH",
  "key31": "5ckjj3ogsbtGeAHWLJjWxDdeDoWTtto8PfexTXoa14vpsf9jmTioAbMyvqpZM9NYfz2F9NYmQNqZknMp6dETRwHe",
  "key32": "64HfKH8HAvifagpqXXGsMETyyGTvYZ7z6KhSPuNKNx53h9X7uPuPSUkWyt8Sy6JUgYdndrAqFKf3UBVudjuErgTv",
  "key33": "5fwmQwpkMXRLByATixs4qqgQBsnXtUMmBB1Mw9UZ2WsQzTqXa8wskZZbQTv4Pgz66p1bWaVkrR3MhSaQeXqHqZf1",
  "key34": "5xMn8rcnSm3MkkbczfDH4HRQfacUKqjLMS4d7v71HMZ8LKGwqdiYWN5umBwacwAv9FMNzCUW7CRFRCU1gAPHBZko",
  "key35": "4vMmB97JS3awH2txBvNjCJf1cfW3xEN7uDBdEsFFTJzkUBsKVSZY2ztBaCN5wYX7m3s3zFhwH5SYepdg5mD3QWKy",
  "key36": "5t2Bww3gAVhuhWBuYYSG8pEEhJwPM2rduYQKVYFgD4Rvex6PUoqP2QUYNnpvpHhrP347DNfwjaoYVkswFo79QG5p",
  "key37": "RN85mpCLZDXZVXEKEFzqjhuXXDtZNEb7zjYWNqeD8jkt7HtUaSa98ppdkeumtru1s9x7JXVPzxAJ6yKN7tbBX2C",
  "key38": "4TiG1eiBm4cHXAedhgSyym8wZLUJkwxkSVSdQnWtkUBtoUzUEiYRc2jFLYHNogkfP63DrjqBvpezt9PcZHeD8VGq",
  "key39": "2GT2idAoTzmzWwpVGS1Dh2T5X7mqhmkgcqhBmWKPAah6kvKRwiXt3hAtXQtgqQVY8rXrJoCF6DdnxdbpqXh33L4D",
  "key40": "2HVXx9HeRxwXhPKDn9AYkZ413D6ps6LMDdrnLi186eHbR4bEQyiz4hByDaQ3afEd7TtwFBJyoyZs3AqETTGcrjjL",
  "key41": "2gS7MUoUPstxkdnErP5WFVKUkqsC7eKMxfChT3kyfDzg7X3hjKiFFMB3MNMhNrfw1taM1LCBDQR1HwzyQxLk4ULN",
  "key42": "2SSsZvRa141Y6hsQ3bTND4FzckSznqAgH27zuEFM1XEfuTSvF2kEW297pzHSrznYrE9Vy9aRkQ3y9ELZdwm5sTbf",
  "key43": "5d82LDGQPYH3SJeKQ1ENQKXr6PnVs4rdyxNjvoJHK6xV3mE7J4FkwcYPdRD26sUga8mTT38tW8qbrSD47Gbv6s4J",
  "key44": "2c7oJF56Zajw1yUL7sSnkLFapyh3CSrDV1XTFY2N8DoJYvgsTRXwqxwrKt92v7pUxFkJdY9LTTNDbchQbjuMC8ed",
  "key45": "3ocNx3qZLfPN65HRFgMMkMS2tjXRjNoQPEb4PBHTcPU7z5xeNzj7KjbhmtfUCssWCiczWKn3rEU5Gyme3h3os4if",
  "key46": "5NTg23V3H1agRgD1gJZYBkTiCPfNzSVXqsV7ZqsK3kATmBffpG7pNU4GXSrAbLnuTukHmfE9t5bt3oMFM22Cn3Zt",
  "key47": "NmxuQsABxCt6Sy8oZU1JTu5UnexfABNzJSVnHTvgMSfmSduK2xn8z5jtxpXFAqjwK4eNSSDjaY75FDZXPwixAjG",
  "key48": "4KRqLMHpzxrMRbZ8jMEjM5Z8PiS4pVR2emKYKUU4Kr81h2Nhb29k8jtq48PnjtSMZwiGjKBgVEQFxc1imNbzVo1e",
  "key49": "3vp7D4JBc9HUmegre8waqKauv742x7EkryPHwB4JYKQqSVa629V6DYkS5a5Gt6F8HkVUtZ5WzstRP3wb3dBG3w7m"
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
