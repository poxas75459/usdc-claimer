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
    "65A2sXbjMUFh2AKDF7TUZEjtTqpRiMNuwfjmhgyghAEZCAhHiyC3MCU9CVamQRXnwQz8PUySTgGCuSjAMHzc4MLt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rrWueDLhprwppq3C6mEZ7QckvdgnRB7kxq3te1La5VsNi5FioUdjiKSZUJvFLYR2AvGRtkmM3skMpLS6ecPzyM",
  "key1": "HX8LSZ718kBjptNDzMm2Fj3Gk138JQReCRwuRPc9Penjoia1JFG7KeVkRQzchjB6HFUbQdx4Vg7fJyJSh9rk7VC",
  "key2": "3U4GSjBSaE8kk1YEBo8q4TW1wHZkYrJHR31spiHdrRqaRSXbKSpW6wh5gRFUfbYJJdR4B96A6tDxECpbc5MRK1hw",
  "key3": "2jQee6u3MhBXMJ45WvdCHR6hTz8WD9NcKfvWFu9QAvRsjZZVqeuxjBou9AzZFWoVMQWBNUa1MqDtfX7h6Suauen6",
  "key4": "3erGDQ4JubWcN2fxwofAaz1KoeLvtkLAVAmj2Hk9pGXZYvpURDDdtW3RF5HF1HEqEfk6WmFjj2u1V4ZcSMGhg4Q2",
  "key5": "2xAVgecXF4MQsBdQi6LKdE9mp6sExoKFUSyFLPMYaxyEJjeo6Q4zTuyqHLUGv6c1QX3nBhTsxVyULVRYfWZUFTE6",
  "key6": "65iPUpuyqWpsrdQHb1YdTwwVhewn855rAD8zSfT2dgK7VKeDYYSp6cmNMCeQxtwkmHQR3GdUHnQhCsnKssvdMD1H",
  "key7": "2BpHoSzNocU1HUQZZMGakdUxdih415tYQiVBJtW55aCaF4HcsBXgeoXnDT9NcP9uxgcNLGHN1kGThTLnZyP97ugK",
  "key8": "4ExWqnkHARsMC9darXKvZBHVWCXWZJnDqXYpxXHCSXwie5sDqUKaypWz4Zti2PeZfxbijV44eiL4EarB3UeDzLHL",
  "key9": "2qFn7gi8duT4c8ocYJjebG2pvWyeFsupW9cxKDYP4RZfmZDhTMrFk61v7P8CVNTtiajtcWvtsAiTCXgDGGr312e5",
  "key10": "5RJp2mzfEv2cJhv2gpyEv2MFmmcymhXC3tjeTuZTsUieweigEWwpiXxRfGqiuQJXW8etSJq8A9xBCH1ANJXmFy5N",
  "key11": "3ii7irhjuKWppKZLfZueqSBSGeTrNFKMq5rbGbjKH1QmQY1f8MuqQkzbAFDtfgQffYNPAKazgJ4NXjw49Tmrq1S4",
  "key12": "E9UXHx5hZWCkGvikyRqvgeBBCuvGvsM6rxf1yLD7CkYbXN4aokAPRaVwivnm5MBQaN1jLPJLAL8JP5vJ9G8ppN6",
  "key13": "SgPDUXWYUbpkFcokmrpe8URdeTWbEL3omqxJVEctjv677QXo9h7kvC8FqkStFxWQqFDNf3wkip16eKxspGqrqRp",
  "key14": "uJtknT5GoKmDSvajNDdT319TbkYL5zpt79TYvQXTRfC3dNRvUEhFetJGi6YAmq3Grfjn2B9kNJ2LDh1st3yPf47",
  "key15": "4kGSvo8z9BKYitXazQoXduJUeZ4GqMmpUttG7KbuFToHn4gcBBqUjNDkTioYwTiqadNa18sMEXSusLjr3LgB9YXL",
  "key16": "3dUkRNhFu22YTM3YdnJhx1mmkNAV7wjDKigsTxupCw1kA6kfpNKk4V43oRoHpwmtBcJFWLQbCcJNxHJghC7iKdsM",
  "key17": "4V4GcQrHzKYH9hjgUgRatmMJ5xrt8qjD5MZ5xitn3FdLRbvbtA4gothe9FoBSBEbgXZfbaWZGSovk6qL2N9xZs53",
  "key18": "pDZHogvw6go4ppQ5CrH1Cc7vqRTWAy46YgrGoFH5Uc7hTrH89LfPDf13S8xCujy2jmZc5Lj8YPZEoiy87gw9LQB",
  "key19": "5UR5U7XCsMAb519G7WtCX1xqqmjSZvyjpcXUg8squT7xHQvJL3oSkLpfTX3HZ5aX88wzeSiVjhiryYFjyfJzod6L",
  "key20": "2HMrCjK2QJ8vvieJ2PRDmfZDXuD1eDNCkidXv6Z3QZ4VoASRBVVjyABVnKRiG8wwT3Cd37zUZN3ur2CBQkXuaLR7",
  "key21": "46HMJQt69yMAZy9gh1CvDNG3dEGjLk2LEJNAuMxuCV8rPADwxQy4U8nNM4UQL5YuFNhQAaVwGEAXQpx42BbqEoDj",
  "key22": "3DbSPSNmkndx5ZMfAzkHchJFCrWc7MWoFLnPNU3DuyhjeqQFnPe6mak6GjU5ECBBNvf2BJ3hkuPKHKVedMCuMRB8",
  "key23": "4WTH6fLbAkaBzhzS1X99zpCdkCdFBAMYAHp93Pzt3NqcmGyyTiMzwk75t1caQT1kDDgKVNtWWn9tSjM3HXVYrUMh",
  "key24": "PDMZpvKvxt9jZqZKCPKP1TM9upeecnkdKgX28teEg5gSfgeWGudHinjoBgRWETHposBMzNpAWKfe9cVqU2C8XVf",
  "key25": "3azRisQenjzPd9TSPgie5PKKgrR8uHkG6mD4eLcjUciUgbX9YRopLD8Kq3kqwjU9XiK2kdLJXudGrSkmFPWvTzDh",
  "key26": "3hnZXxCXPFSPjfGCth9TFyTt2F7n7FKN7CYyPk6HeTQN5iEjUTaxafSotdYbyZjCPrQD2nsSwx1XPMV4aZRdTknL",
  "key27": "ckZ7B6S3tUqoM4F3UMfF9RWbrNCw7nSF1KS5htBTe8fTP1ViJNTa8bXyWdmBEnGRS1u2wSfX4fin6M9sB2r65Ut",
  "key28": "2vVmpbmCkL1YTY9sAEB92gEvuz75vaZ9Co36xdCoDYaaHwknzxHi7oQCALv4mB1R3pMNcsG9pRvqU1RAbnn4VSsK",
  "key29": "ZKbY8Zd5m1fK7j6PMfta55yn8k4BZ7FPwWEGa1rKxQHVU9teiLWB8gUgaj82MNBxC8pdGngF7K8STqDaknV8wsZ",
  "key30": "49z1giLbZ3Gb25K2KUH53wz5qYKyr9MiTLmeXLZxfQRAUBJ3bQpCuF9TasDoLLkPB6LMbq6cCyiWdN1coXwcA5S2",
  "key31": "66MLyjSDfPZ9JU3KQCuY4PK6vHhy69QzK4wZP4DoPDcDHTg6rfwAjtrW7tWNySinvjLfR9DBsJmyPqWnmxA9M97Q",
  "key32": "CXyBHF93VQxBZAkqMdDRGDow9ZKJ265BGeBjKAn7A4mYoZgee1gAu4L17Ubt5qrAK4V7RthnAAZieGkgLmzLQpQ",
  "key33": "3SKnK7N198LCh8EYfNyPiiaGBFybadaQ2rB5BNXWQQ1ndCrgJnBcbN2fdT3kuKM5ezYjUXdYhK7qvU68Fp6GPNKt",
  "key34": "42g2KSag8mRPTCZxJoLH8xkxQDBaWEVjbC8tyDdTF5DA8f8XMpCn21egwrZHvhYPp9Ng6xUmTKv3Sf1fnakY1fQ4",
  "key35": "21cbPaG5Xs9i7xBz3QYFgeJjtfm2nzEZSB7RVVyHEB5bJ4JeYsz6SsFsBi6w7gz4zLyD4paRmKc8hBQTZSDLQDwG",
  "key36": "5fHJKiWmaiqHmPmMSJHKPUJwSGFEReF4NxtQgKdkjjDFXu94es6eiXUhszo3iMLyUrxbXxwbXUDq5Y8cdeabk67q"
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
