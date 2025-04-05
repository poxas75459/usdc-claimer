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
    "YEq5vfz5B7QvEhuwatz6hE7uDpzk3NeReyAsozChtc72ereH9vKgRYSVRrUzkgCF87x6TBrjDUohaBUhHkz8EKk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EyDYjH41gh6zYcHGoX5NcpxUSDVQGhy8WN5QjnUk53NGa8F5wZGs11cQHB7o8egSUKBaKRuvfXsbJ6x1fk4Zjfm",
  "key1": "4TocX9zQ95EtejAnZ2ZxfF46XTBozjP63QFwxai7gBNvvBRQ9cDTsNkFuPGEY511rgoCJ8Bi4JvjUd6mpBU1C3x5",
  "key2": "3TFTfqjBpoYi8eKcQib34c8ghe7PQVA7nyBrAezj8ve7KPTxiMiLWpey8YUDvhAvzyQaDdTVnd9M9kh5FQDmLf8d",
  "key3": "u5m4qctjV8jnmhhWuTsqBNjbmzjK3Rh4egUqo5RLFtzLx9XpNJ4LJyhnF3PHK97nCEX8Eg85kjUnSWSqdUNABeg",
  "key4": "5tA2wGtYdLvsPPzsekMtgqAcjnVrVpqNKvuU1oMD2FLq8T3Zg67yoB58kVG2eAVb22cF99veXmFvb1cUB559AriA",
  "key5": "3Ypu1RNVozcBgi5RNjNF3oaBq4wtkNJWovMocTQbdi2C1nhYusc2Jxucemy1rDM9kqdmJWvk6PF45uxg4yX4N2QR",
  "key6": "UsSPc1yr6Sxru4LrPRAxT8VxfU6NED3PH7yeHTzFsMrHNCVpWVQtHgoNizQEFsiKtsvX39BcwcKhjDjbgAUedjD",
  "key7": "3cht5nYGKxx6DuopPhHRajYVsPFGuq4rGrEiXemoZgeRVsqMvt8CxDfSnyxEZtk6oMmaE1Vn56GQ1sMJqUzYtL9U",
  "key8": "Dm84mfzPrsEVtRW8T1xFTiiQqTZQWWc5wMF87NowunZjZYjxPZcRGD3S1uGqMmGfuiX6yj99GonUabu91g8hCDp",
  "key9": "4YXtBw1xk51PJbMSrmFiTXBDpXtGyAbTkThdk5455o4borYFKEMPkPMWQjwnQXaEMXcXhT4YXpYiScBVxFWoW8qf",
  "key10": "2KSvcqvPRQS734bUH9tHuQn1v17rs5e5zeL6CBQooPZPj48G9XjNfRtCFnYPSsRFdGXMKAwmXJMPVfw7r6yjeEgP",
  "key11": "48v4w2SR3n1YDxmUVhgTVak55cHTvrsGT4tJ8PzKqGcMy1hmcYASTQdckmHM5m43ww2edNo8HLNGK57cmRL3G5XC",
  "key12": "2gspVAmxczRGNQNxNpTGR3rAK9DskWFhERVYS3znTxKig3LCjUnFLhFZQN1Pa3d1J3aSTJ6jUipyy1MACGXEgnTb",
  "key13": "51fsxm92JoxZyuP8i8hkZPNMTQqPYM5LitQfw3SBLEckwDDE62V1xx8wU9bb7Sbm6vADMLo3jxqExj4kArPc7F8f",
  "key14": "RCVZkFXYHxvawVCeFaSiXV4Myd8ZqV24MHUGAHP5F2WNjWSX8UkKLufF3YXqFA3n3FhfKhgz4FhMbA3E2xFRAbW",
  "key15": "3t18QzhwHdARzFPMpjJBWtnWmqMQtjuV6C9nZeMC2deVvC4a9iB81j6z2AHhA7kWMi3VfguQUnbN7Pb76CXFdrVc",
  "key16": "5fLXhbfJ81u69ennNJiTMyTEXuwpMb4HU37FM6WpgHxgKmamuSyJVdSEU6vMmBhYFquSg87VB88QCLBVeD742cpm",
  "key17": "4JraPnzSR8oX2ocxCcgjGmoWvyeSacpTrSryS3QcUAF4qmthcvYefmmmVoFXz4fUsb859T4xv7sJVDaSCELSfCsQ",
  "key18": "fcieWfxg2zKkDok82TvjDcJ1YnN6YGdx7GYzv6aTZC77fQLtbYtYq356aNEmzHFYZhFDkjFmRxacgtiE4Kn3spi",
  "key19": "4SaMFA9J1vdvs3wVKYULNVszgnBmV6kkgonA7Xb3JgVkwWxmBzxZytiLsyLmV8DhFQjRJK4MLZdAkhKUgxX31aAv",
  "key20": "56UQ46nfGW5vBaoyELDKt9L8B5HXKAcGgpX6T3aHM7eznmHbgkzHsziobPBWnyXFoWjDufHzGceM3ukxnf6tT7XE",
  "key21": "2tcau9kUWBzGpZ6uCC4jZpX7D8xnYTskucfL2jdWhWiZgXZomwXijoed4FE9PJuZEgMBwb8TNNYQeSiL2cDDzeBR",
  "key22": "2WMXd1Y3Bp2nL6ruuQkZxezox7ZTbCnGasp1S7SN9Dmhztg3Hj2jJFMe2KCgTQ2uUJP5DuxVX27mdao7mskzGg92",
  "key23": "5YWVYmTpQpcccYqHG676r4vqGJnBDh9yi4Ap31Nzg8VYpHbFEZpm3ezvri9AYAzrLeEM3LWPcDsD7qLGTrsSPCHp",
  "key24": "TYiGuopqeFbrGs6ChzAWErVShPDsVKVKJgkf2sSAoBY5FaDWh1tVyz6FUhwmjbguqZ9bfffeDQykfKmdQTvEV2Y",
  "key25": "4vr6Q2UjBoxp2oYsXUXsQUVHVuVARMUBK8GieGUw6Tfz28xGfrgd4WtfrTYV9pbELyQvn8vyezCkV9ECWAwKg1Da",
  "key26": "5sugaySvDgGWA4M2pAvyn4KTcbhAnH32JFha8tELpf8nmB2vWxAABf2pVXS9eViByh7pQPHUDkbwnWwN7WidRVig",
  "key27": "21c2U5AK6rn3ctQrryHD8fXWv63tWtyedMgPJSSqhLayYqwJ2wfrvqz1bszTb7dPu3wF9Qm6S7Fv8suYg4q5pCFQ",
  "key28": "2Jygd5xT9bc2ABb46MkAW8wYcHDDEuwGUCiMcUBZEJvfHzMJFfezQhYCS16zaxcY95i4n6VB9X858R5wueDumJPW",
  "key29": "5vVHCLygR2eb3NzxRtpC7DQRJMwvhBkm1CMhP3WGd4cUu9jqSfWhNpfUr9rs59g9gs2k6zp6eQmaEPQusgzLsSfU",
  "key30": "YnVWDTdYzrwkV7b76ihok67rjR3wb8z9nVDCmfEf5JW9HPui4qsg84kCPrN6PQ13woXSwts7Sf2Qp4XRTuCSzME",
  "key31": "3q5mfEf7KRdoHDeeoNk5RzX2vWcXewNbwDq1XiK6RiaeRKnm3p9ZUX91Ex8tMYrfX7zPJFXzrPAbgM8VWmr7ZXdy",
  "key32": "5oGD9CKikPbGXGLPjb22uW9mx9bt5Rf7yRNQ2nPfeBTfYsGsUsQjTMiZZe8agLLUbR8TaCnZZW5qUYK1bNbxtJKK",
  "key33": "5rb9KKnmzdsZBfFh3YZsiyHXoQNcqSsY6J69h74uS6YuANXLeHmLGq2xL5BK4cYTuzxCHXqXZY6XJsNHtyNLfeVe",
  "key34": "5v6SBkdNETtEjTdT4iU4bU6riDLuSrTjfRYhJYCNbkZSJWX7nqtZm9MuQaxB2Zo738R8BFA2ZD7BQQmnBcKho2ey",
  "key35": "5VzKmfzLu7FCs2btQ9agdXbbjyaqfVfRHZ5TVu1Sdmz813jafdyn5Yf3xDXfvz5SwgVdNKNzKvZsRakSaYK4LbZV",
  "key36": "C8ZNQPaTjbquNkqGhQDsdbP4QL6pZscA2gVcjaHVb9qqyyaFVqk7mP4VFBzVqRcp8Gv9xDM6sMGLeVqtWitDLP2",
  "key37": "4Rn7Uib52VcdmorkbjcvvK9Tp2oMq2PDPKqjjd4fwjVRxgXZEU8aMe82S6M2NuGxre2oD7HBmH4CNCX1T6znhSyy",
  "key38": "2aJxh7uwL9Ma9vNUtzqPzWEu5xyA367AAidGEMdwPSB7kiU2FFHHzy8JTYmE9HViCgXUXenu2SMTRpkPU9VyGVbv",
  "key39": "3kRXxLzT5Lsop4Sncihce59ueJEoHmbc3xbaBm1VQTxJbtnymEt5AeqkzGy8xieif3WLjjJshjse6jA596Gk7u8R",
  "key40": "3X1Ev43ZNZzdiRHBTQW9YDHLSxv2ah3gEqpqzETYiNEQxskBj9eegoJZXwPyKGpayP4gVb5z6xzqS2yxHLiPoBAT",
  "key41": "4j5PfyvDACW1R2UYsH9U7XXSzaRYBGLcwHktBYj4D2zhVNXDdGAm7RgvtXbX99td1gXTEVNFKuWwKNonXfXYYeNR",
  "key42": "deVmPYB1gMHrVB9fGu3adgryNH8ujuGZBtE72jWMnSEj7cJn6BoU763QZtfFpes2VuBg2R2oH8A5Dg8UkaStFKX",
  "key43": "5utuJzzdu2dDjATf5jVEkLBJB6MuUKUp6pBwnLQYyf2usSpjQ23Y1iW2tGaNiMBuq4qU3REtKb68eRLQUNxdv4xj"
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
