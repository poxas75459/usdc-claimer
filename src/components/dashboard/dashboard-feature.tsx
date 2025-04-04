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
    "2rGAeVz9rbG9Z8QQLs4EMoTtvmmNeeGpJSB7GpXwo9vDzZMBUug4AAWha1dZEN1DzkuRion5cvg2MUYn2mUAuwb1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hR2wwWCTiKV65dxvWjWWrwmm8CPiM9q9Zu6QQZvGHng395Dz37cRrUJCM2KMuPuVwGDJ5YeFwrDuR5EZDXzeQnh",
  "key1": "soj1ApcbhTbajrjomkuQACo6Pq2FhnXjs3ECKDttC6pQw65p4Lkqi6LPcBfSeeiq2tmcdNRvUAhUnpiNjBraq5y",
  "key2": "4zRi9ZMYPUcmYco4oXrxN9N6RyVnVZGxTQV2r2UasvyAkpQXYWRETVTFdMDZQM6ShTwWg8zqxi37vYjcQni2reWJ",
  "key3": "3j9KYUt374sXDZ34MefnqK6ydxh1Chj1FiQYU4zWZtgqRYmZTv6uokvwQvdbDkPGkRhv54ppZ4H91u6S2jBC464C",
  "key4": "LUE5sxR8AZA98PPWK4SbVxQmcNqQyrrw7QBTffCccSrvKxcDkZJVS9PiqQfWf6o3ffPwZbqCp1fYY1KYoFbpRhD",
  "key5": "386YN38VVpa2uTLvc1MiABzqZBjyrggc6517niertVRH5RD2Vx1j3iLtQFAu4c8q4Fsqkjn27EtvP1xCj1QAacqS",
  "key6": "5hHkXCCcbR8T3gvyyx6Suk6SWNLL6oDZ4rd5NzvFT9qfZDCvPp8xeJQTQpcFW1VLsZro3gj26jZU42nzp29Ms9zh",
  "key7": "LaxX8shsTZXEYWCXXcNP8bqmhZevMCK4unSuqWoyMYTPUy9SN3i6QbY2B5XdrKFygkdGeTBxtcynRZnQnDkVdAK",
  "key8": "2tV68zfSwfpKuCyAseuJzAvyTPfGYHp2KfUor6h3qwgWRik6pFAww8v5E5NMSoUBWYKREqDcyCZhyqDJRinwk37i",
  "key9": "3jTR3avJbft8A1WjJPFXZZcwFpnV1E1JYN6btJyJQjGJrJ642tCvvqkpzsxxGDAcFkEikTAsBVBZGyHsYGYgiDji",
  "key10": "5zMtvn2JSz7kFfhNGpmwcYtJSpioAbptS6rN64fdwRZ8Di7x3AjTX4PKiEAnRH9sftv4MLWRoMuKSMWS2Au5ZL7q",
  "key11": "pWnxFqzjATi7Yhi2C7BYgQmV5UKxWFZxEMyRgaSZzr5E6UnhXckb3tTgu9jc2KRMaJc3E4dCHs3y5dGYjcKg8Dn",
  "key12": "4rj2goGsg1F8UN2QLyiYNicNZyiLFHfG1ATAuWKiWdLovnuuoFJhrpPSoL7wHFR1KN3b2VBC6QHLjBbBUdYDTewM",
  "key13": "4vjaftRiL9g9ZT26V3xG4HsxgyWpBU1eJ7xvGkVtxtK5uRjF87Wm6n2Fv3EN2hdrHosarjZ4VrUfoVE8VHU3RY3x",
  "key14": "5uUsgwgwLniGiULdHvpb39g1WJoeQYP8fp9mkVUzoAGV5FsupkzsVPeoN4gm9Do3YEkAiGniK4B1yzAHx9CFqQym",
  "key15": "a2DW1Jz1NZMpePhXdzoHm4kdPj4YXE1Gm23KUXz7fxs5Vgfm7DtJ1qmYy7DuZ9J8gEYBj77xhW4k8iLhWwb4BqQ",
  "key16": "4zZVi4Spmidh8pPxAHj4VekkjkkMraDcQcY1ffthtdrqqmSwgkGZ9Qg2ns7ckxYGGGskfziYorB75yYF7CkcnYrP",
  "key17": "4VL5xkKfyywv7J2W5pvdRVzBuC5aDu28zjJSesg73RfjPmc5bwAA842TuRhrHyhkKrrkGWTMHGYnSYcC2yy3mg84",
  "key18": "22rnKYLjDfmeG4N2nGd8Trx7ULfxWfnpDioUZ5rV1wbrgYyMdoLYnLQh4uGKaoDfuRWTP4A2B8L4kDVQFpchMSch",
  "key19": "5ZcdyqqUCcvU1vRDD1kGZcuTTJ7FRzSir8FCnKKLsPM3w6xysrQTKsG77NMLpGVWNNpACANM1KNDv1812kzPszP7",
  "key20": "beGZPAn2yTybHbW83hpuMMg2Wyq66ajvDRJS7ZpNeHmJ6L4otfzYfJzBftWBVXXtTvx2XX3aJqmjqrUrfLkbvFu",
  "key21": "8vRBwQKWX8xozXVD6psgzhLpeT237GkUHWZyrWGie334XrZQHbA8FrY9zeAFPQiRkCGtvtM9MAeeC6nHDKkz8mP",
  "key22": "5E4RQJsfjGEYv7P9DRYepH7xYiMJHNeTi8opjh5jRPZMpgrpikqe5kQmUDzgpEM4xTCb7FzmP8621iu7gB9AiUPe",
  "key23": "2YU3osJVLZK2NtYoG7PHdGjMj21McTGhmsZXgUbvVzH7aKzz3RabvgoDJnJAt5bdbxXALXEHNCa8gaRqnGeKZfMT",
  "key24": "5FAPcSvN5ZHgEcZFrmGgECM1PJEB2ivRSG27xrkDcWfn1mH9XKcxjeUcrFDbYeLKfJ25kfYg7x9uk9DNbrW1xPrm",
  "key25": "3cx5xh1MMNQGma8Zi1iW295XvwxG3c3gc1MzewQLuqrGCKSzLp619awvb2E98DhipniTBhA1UA963Epw8icr55x7",
  "key26": "5uKYcuLYCEvYZqY9SkSBhBdLWA3kuJRJwyT91kdEHAofzzFAMsa6KLmYYArrHSy1GhADRDtFNNYyWVSU85ix6Tgn",
  "key27": "44qkBwowFacM3cPzJ3QecdHuhoGX6ewtG5j34ErbP2KTg6t6yAqSBS4vVGQaXiS737XW8vJotcLKWzfpm7agx3qg",
  "key28": "4g5aE1KuuqnFjaXZoRuz6WyeyYUw1YoRF2T9vu8ftJbrUpi8U1YW2DfQ886jkPAAFoMCdgKKJQyKPk3BoG6PQFov",
  "key29": "29hoJqEmrZCpZmNknrWRedUpfpMaBtxoq9pBYQkGHmpbDVnPHtcZ1DseibFTJfEBhNCraotPDFsZWt77xXfDWjrw",
  "key30": "5AhVxkvVH6Wpos77sY45uyBekAeXG1Lv4jqTbUEQmDuCDsrbc4PtrPFgmQFETHaJxCjsymzdrS2kC4YqoN9hCcDA",
  "key31": "4YSNaRXJMQ7evC7Zv1f5AMVb3GrhBjN7L2rhhnZ7Wtt4G9RJZHFtYX3kBQFMGjBmP5mb8Zvt2mRW5L4PQAZFCQyY",
  "key32": "37q9L7EL3ozwk1g5BQhZbKhw9NM8RmQVxsHAD4bw33ThRs2vqdk8xSHHbTvcjK5Gz9X9GvwJ3ZLPJjrJEKnkhENE",
  "key33": "4psWYHyCxVo4xN3od5JTfuiuLwKZae1k3iTpruNufiiGRUpf7wrHq5dMC4jVYpJJ7cfcCvCnBxHER5MKHWboXcow",
  "key34": "y1TEVDpFWGmLzj9McjurBEijz17tq9M8LDfX22UqWzXxfktR9cEi8gZoBaYfbcuoyBAn7U7VKJKPaq8xUdqSAue",
  "key35": "rvHkFjTD5Yup8pk5N4QEBzEwXUMte3tSwV2d7NTcio8dR5QyzpYhtbc45SsHqdF5LvKS4gDP2bMAuaTo9aEwMjn",
  "key36": "5M6G7ieoMx64Q3zLCN3obvnLbwGiVzGibfB2LYLcxCxyxPtyLNWhStgZJNSFM91acB9hKuUkZCiUsLDfA666BhwM",
  "key37": "2hP6iKReJo4k1S3NNhZdD3jqtXHeZ7Z2cjsyrABpw7ef4wMgDKGeGiQJFfgPrK7vH4Uv8Zu3PBfpGNLuuXswG6cu"
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
