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
    "4bmRfj4eBJkPtJeP2cHZLzWYGSut5JMudMhvQj4etwqD1H49NYWAVzC1H3aVHCND4V2JAYevyAJ6HZXKmxrPJC3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YE7XPQEr6ZVhXsPLKqcZ328N3cquNYDQoBUDJFQs5dMXmv23AJyE7p22PNZYPQYeH2mubaWkmQwoM9bNAJ1DcCN",
  "key1": "4xyZ3BGQWSXv8jueRZhsoymcpiHFbYWtoUNCDAKR8NYK64kZFibg8WVhyAfXrNbGvm5yQYh4hcQDUxZtxEJUoLC1",
  "key2": "3nghKZLYh74Diddp9BnDMyTv71MdRWLZtBw8GTb9ffHjMvuwCxiuwY4PBw9QL37ZMuyBEatyFzzbCNTbBtrBiG6f",
  "key3": "2uvhtuurXgCcRMauRrXJkwVsSHm1KkHNEoyKYr8Wxs1dFJDfLtwsnePA24GwoLm9Kk4tUUa2D5v4uxWwbr8UrbnD",
  "key4": "5nazL57BYrGULPGseFY3FH5AwzP9GniAz8DsCYpsiga74DQWHXSBvRLzWoxvA6E9F4hbCLZWn1wMoC3JFyGiWuDj",
  "key5": "63LqxRtm8HE4WuKcz31cfWQc6kdkR4PAsWdJjytSJeMK5EWagYbPHeD2kTDLDD2TiVi5C9eBih2FuJH6im7xx4yn",
  "key6": "PD4kXtHuwzq4uBvvGsdCmzt3UkJmwYYSiVihgZHBtz5hZCZzCmwDwLUCsmoesHntT8iaVwrCkK4LbJKiSXtg7h9",
  "key7": "3R7jEBnntwpbfVxY4kqBJ4pvmH129BhWXqBKdxarDpteTxK761FFQ3tuJpva7QguxtHnzz8A2cmVL5Gz2r1mn2KR",
  "key8": "56MiDyBmkjr2xwzNhZ9oo4HNjxvC42D6x62UCxGKzaY85fTsBmUUwVAwkus4wyD3iJ3GpmHpxf9pTfA4uQF6Txeb",
  "key9": "5RzS5fWf85BrxDYQU3wL4qiLRCcrQ77nrhUUQ4qa698227495tpTFdB7JHjU6nRSzXbV1SDtut3wiBF4eeHsibGG",
  "key10": "HubRoCm6zWqFRM6Eot5EQJ5Xu6ectJ7Fs1gzqHATeaNB4wSVSJNYTPY1kEEA93AySbkoeWu137uTiTbvmCtA64j",
  "key11": "29n9isByHM2uA524C8vC6DSpqCNDD1QZiNYEb3wU7ig9r8KrXePgYE2YnxFTbpqNjNwQnPsvGtGoMuaVruZcmugt",
  "key12": "4Hhao2zzSAHWNp5JWgLw4W5mtnyarmULR5QRaLZEe1n8UEeGjXBbbvXkAiXubiFFyiWmn7ncvE6SJ8EfEBXgqp3",
  "key13": "2H1MsN2Cu2yo1tHFK9LMJUdQbp7nt2V1m34Bd53LrGa9htZUrHkmqz82YEcbvG4CmqjRxsiraCShnP6uGwbTSYUc",
  "key14": "zZHSCxvAQoNRLKcJ6xzyTHQHHeKDiE5T2YmNLw8K4LUGFC8EtZXZjtamwFpoRjkHZqYVHmrZdbmihvuYrtWdDfn",
  "key15": "4uRKgDMaUwREEG6QwrQzWtnGEy7n51pTuPsW4f9kBDtnZbHcftRc7Rfk5E2Ns9BEYoYLAnWWW12eTaf4sYVf5KyX",
  "key16": "2tE5xbVUsc176R52XERHu8SYcjPee2FM72VHagggQJsGqFB8JkNYfqu8LoakEeydrvLogpGors8ZH6ECPH9u5Jdk",
  "key17": "2VkwSKaZo1DsAsFsEXV83nexfPFDk14BNQKaNQpacDyjqHJ48cZyRFT8tPyjDgqGBcLBbdTVfQd9QuiJkX4z8DzN",
  "key18": "qccDMn8e4zibDVNMZburTnwMgRausxbYKtMbCYe659kEnRMnN5yqB8emvxAfguYreA9Qetv7X9vhx5Lyy7uHn2H",
  "key19": "2hcND3yct589eJheC8ZCZ1SipvWBhqxrSngAiyisLnnazLi1PVXcbyr8uwZhH7W8fkLbErC3d7ppcC355oRWrEDZ",
  "key20": "4fqS3R7SiQedHLe6SvycRA8g1Etyts26kJz4LG8ibWMadBz69XkjP45gc8vc8Ab8Z4Q7UN9wqQHtaSWR5GVQ8rB7",
  "key21": "3WrwqzGyg5nHDKqB2ys9vcWkD515ffyUJh2o5E5zCQKnL3Vk3UYC3iVHFLmT7xcphofai1tx3z7U7oSvmJ2yR3E6",
  "key22": "4ARUhSiwmco1eDUPQNm1dnUWtWFvy7TV3hoxUedegMXVcmLtsc4tFWbuze8Li4oh1vQC47kM12QwPh1U77gPWAnV",
  "key23": "3oqL84LMWEdtbifuzAhwPvRnAWwBRmn1QRNWLk5zoB9csNVBTFF3xbVsyhs6sKwaeN54FK7TqWK73fBXnYmLbhGn",
  "key24": "iw8ANo7WDK1Q1WAv2cSn4RoQEARZdFWcPfs5zfKik8p655yPJDAKEi5LKJVM16dz7ugkGa3QUiNHT2GaoBCqb7u",
  "key25": "4XjS9qe64us5Nv1yUtUDrozatawbxzJh73HUygbnrH8SHwzyFWRJzutb9o6gGWsgRP6EEERUJAyB871zvYaxVZuY",
  "key26": "2QWbfmM8DjFvWAydjpkXKEmRw8NCPK84MBcUG3KUQmAS4UMsBdQtRcdimBaGz1ZN5nRjHUvxGGcNpSzZfenD6TMW",
  "key27": "5bUHPKyHBbHVXSQPmGqjLNjHMWp38aw1BKNn38puKPFwWnW4RDkdTPoXHM8eDLUrrVDU74SsoRHQEFPnJnBGrXTD",
  "key28": "3A5h7Maidhu21XvheLuaxPsJNaiDnGmTRq38GmdfpcVTa8bgzc5BpEbBZw7uiGdAnaUFXkuapD6mbsrcoDULC6qE",
  "key29": "5ULmyiq9mYEDBDAuPKiTshYPksBqEyRmFTF2eTYzs4NU8HJ4eNZnSuZbR8JP3wSQCKhLRKf7SBdfhTLb1QZSFfgJ",
  "key30": "5JsMwqJ7bxi6FarNqctHmxZXcqV1xZB96vpTHnSf9Nv94Edx4X1yiRaXSHZnVUJ3C4fYxKw5TVSESHFikFRcWWCR",
  "key31": "5r2YVFoz9fpaRm98nM36iFpEfD8QkiMmTQQ7J5hCsQwvmVuqXVuyUhK3YgGqWTZEX2WJ7mMSeBa36k2JLP1AUwE7",
  "key32": "2V4gYpqdkA3nDgMpNBQb2xpdTM5tXokqCGhRz9bSxRBSVV1VKMpou4BNyJmLnj2wEmQ1Yj3j82U9U12EqtpDGxbE",
  "key33": "3qeZ4q5nNXKottSyZEFrpC13LMQQRnPcGUked4a17MySbAQSrTEnxGRjneeo97xU2JVxvUx7pLnV5gqqT4eLFHDF",
  "key34": "478pGn8B62SsXP5Qw6RisAiVGf7FNNrFMZAUWWxLrvqtH2p2tRKnUfRSPXZkn3RE4ricWA1pARYJ4WsYVurCccDp",
  "key35": "62JfcV34D6UAVD8TWyLANu3Eg8XHNQapZbA5J369rG5TQVC9Ui7btsHzDhNu2VXx6VWWsMXFmbAzmj3GbrwdzUEL",
  "key36": "52Fe2WjZbidLYFPGoQnZ4DFxuHWSgMQEW8t89Vjiwt72MLmK1U5qA26V4WWUrmF2a39ww62HsLmjn7tgQnSFG77S",
  "key37": "4Mmw4trdmV77xDJFrKiXAedKNEfV6oRQ4SPaWwrZXAkP3WvUWz3DcSTChUiapuKjqj9op4zL6NT3uzKuKhxduTkB",
  "key38": "2TiGGixP2NBYw2pq9Stn2DU29e3yKhkh6CS8Ed2a2PGZwESJXjkud7QaKFuzi65AeN17cggvWTxz3CvGRVPWtGun",
  "key39": "3HHWSZfdqxJy3s1jaqTVn3N7evp89uWyJPKChqwfQvBPeKhHhjBmmQNNqwF1ZjvTJWYLaCUiLQdjXeZHVYwgibyn",
  "key40": "4hYGQRmyG9hEyRTEEvE64zhemBJTqfSeCGa8Jk3nQXTUpeKzfrtHx9p1VP8kUGp2Nh2WGTGmMcfLbB1Gwo4ZdmF1",
  "key41": "sRmUKURVW4N3xmLTSc7FFtWDaNKwzKyQ4dgUihxf6R41MHhawjKX9SJZVA1J5Bc5aGjPT4HMAk2QWtqffR9W3xn",
  "key42": "5vUtSTtQwd4wCNwyX2vCjP2nP6pUWW6NfVFJMtwhHAQ18d4mRNPEBV9x3v93xWEyqwQw1yYs4n41E9u7tBASEkyS",
  "key43": "3DB9PGvtnkXUh1VQegTYvS4Kmipp17a5g3KS9TxJ2eN6C76PFYTHRM6aNTZ8G4sM8f1bozLXUHWFQnZAv7uFUHQA",
  "key44": "521XRuUPYcsTsK9C8aFdUxgN4UE2JMZ16jF8vYqLcahEhXFsEL1WoXAixA6RpzZgzdZDDv52FMBnJk2Ly2iDffTw",
  "key45": "CKrXRjKH8F1PWVBkpg4eoFWYtbPYTE1MiGoBybCeZ8uzWET53Snse7wPfJ4PgbnZu48HzJ77JEbHyBwKZoP2vDk",
  "key46": "5SpSbqCzKw6BWUbuN5xi9QpjRCTVqvaUY1Jp3sNfz8kitKNtvTtUMkx493QRZbU2cx9eWbARRffd84LNvWGinVRH",
  "key47": "4zKroLoDeZauhQ6fNyoquZyZtX6T7pcfbZS2CfsnZGMY2bpC7cW2k8JZpRxryTQ6oPsPCBcyqHoR6BcESQrAtE4r",
  "key48": "2C7sCcfnXMqsWTgHmc276KANZmFRTa5Pz5j9BNxCopYe6V7TkH2cNVDo6AbnSwyztcM6biX7doKZC5M7JjFAed3Q"
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
