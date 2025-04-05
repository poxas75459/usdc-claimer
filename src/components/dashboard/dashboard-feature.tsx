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
    "mNaSKT5EB5nuD4mkFf4dpvqtYcYCka2irZDjPDkUBwxazTLAECU7g2npNBRUpdgHbKhkyT1uT1V2MWJE1gJytn3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t7fDbg7maHKKc2N94kPNTatJqHtKd8BprpS6mzxN6EYXf7mtkNFQnDHxbwttLvDrJGieD9MXT5Mkmyvp8tEyiUF",
  "key1": "3sPsoJTDb2Eg3r8e2tbKPjJLtxuyWCTFyku1yBqkNSkrzd4LFKg25dNbW3yi798hYs13WK5pkFUWrmVKrFFikBie",
  "key2": "54HVZnr4RTKRANWgU2HtP2EqQZyAvpHvGh3GQWx1NzjLU5DeucZ3MQVELiDBt5ZYFFgZz9bo6AWjGVFWNqF19kCT",
  "key3": "4xWJ5oFHA9DsyC4CxUwEMdqvGfmXgDDswxqFuwT6TSuVi8T9jHALTjSRmzGjifdoTvGDCte8HKtgQCNw6pxJnGXW",
  "key4": "hYw7sx5y6jSK7UETPzNJFyU1ADXX92771gnRj9JFMoxtAKEU73sAcnPGvVBzxczZ1orGXrE65YByZa2AwNurqfP",
  "key5": "29ZH5Z6W5wQ1YxHhjEsuSHPAxAxm62usJJNDLVFgjMSPkVeATWnFQb1cpA3eML73YUKJ9Tpw3DWBPuySUoXy7kXp",
  "key6": "4gNto9E9YqVYxJuxV24BC2Mbyae7eJmhYipah3aWUKyq7eUXxPY91sp7acSBZF3a9brvPcdL2eSUANK7N4JLg1ij",
  "key7": "2WgMKYXUSPrfqxPxxhuaLnXpw3aihK5MP4i8MvDscMTJQ2irsA5NkEhkq53BzwXqmD7QD7gxMfZMdMagfDxuyuG7",
  "key8": "3u9tbUiNAxG7X1f4V8MGoEn68zHk3L5PEycTKpZK8HYnnJqydLQSxZDM1zDjhXdsB9ouXMLQwHm9DBAkgkAbMPU9",
  "key9": "2hna9Fxqie6KwDoqesFKjUiKf5TPsjRhNJJBsFut8njMz1kMxwi1pKhCYjm65z2uk3TQGMzxGwdbbGSfsTA4Kw13",
  "key10": "5VMiB3Bk49NJdVH7Q1GDh9HBoJKCnjXifdjRNEm3gAk5s2brfXPHMFrz4JNV8oCjhvQ2aYcnzibGpm2XKzxEMQiH",
  "key11": "aBec6ih2RWUuL9h1PX2Sx3FaAZWseA7g2YvrVt7aTrnsos1hrTWmS7ac8vAJJ1sYB5jfKA74uNevh1wGmS55eii",
  "key12": "3PUof7pNRr93AdL1PZzJ6JPNydhJQMLTa87vhhdmw4VGHpyWEQ2ZU3SJeERcidG63dw8fbaRoR2LqyW96EX68BY5",
  "key13": "4PrTP4ywFofKAg2F7AvRBFZvf6zBiCBTVFha5HAEd9VBa2AAthi7Sz6sdU5dDZNnF6TvBHbJy2evHytnRogugEhi",
  "key14": "5FQy3XN5B7bSk5WoMZbDFk8KqEcN7nHxeZdZMdfQiMcbgpkoxcx4N5G3iBUwktubcT2Qo3h15rXg2HBZ7e9qza6y",
  "key15": "4RNM3sgLe8yXWc8qTgs6TFfFC61MpZfETJLaYJFp9To3mVFiKk5WzeirNozXTbgjUhusYCz8SzX45CL6JhbaQUkN",
  "key16": "4tqwgirBCGVsCm487vmBFboZqJTnZr1vW5Dyomc7ak9Np2jFpRbYHzqzdhXRk7RaajeoW4vmCB1y7mPJ4Zk5mrsu",
  "key17": "5WZua9Hkpzzc2tffgSVsRij9LE3Sxh2g6w6LUUR4Cht8JkUHFNqLBD1M13uFJm5c38zq16Y6hi6M2i1r3pSHJhMF",
  "key18": "657Eqqsk7Ptdwt8SRk781WZa8W7u4Eq6UUNquk6uY77g7S9gF7uQJ6Jp7zBp4z7YqwBKjttHcRcCXCkhCMq9jm4j",
  "key19": "3dYKGmSaDGYEFng5zHfPET9cgjZW3ZrGzS9FsAnrbiPnCsfRXWcx4ChRvkXGC3cWVTEKGkuQwetncdjKf4dF2UQZ",
  "key20": "5oXYaWW29Ca8GKcZTaqNHUC9YybBMD8io3GetkEfmmTd1X712pfWpWrw4Nsn9xUos6RnRjmyd4sgYPXWAtS9HAKH",
  "key21": "eFhdAjNMcvdvA9DK94CC267GUmRQs3fN9eTHPriSPcLrN9ggTPMvrqKLQUhWjUotoQy6tXcrW8AP1PDFpWF7HoV",
  "key22": "2uVAbEe6MToUgEK8EXEw8bUCKQDJXkEU3vRFTWtZmXC4K4aofbogY8B1r8pMGc2dsXxBg81QNs8Q44tDFDkK3Stm",
  "key23": "2DDtEBTQAz4BVW6nCkYLaEug9UmLHm2zebUWk17Yyqe1o3kNqfDPvC4NiVbhuUngCCxVw9ohSZHpzze4n7JVksrr",
  "key24": "2wCPMAnZ9v3tisxihMTPDxwMQph5vdSWHEMSjohhnnp3KM7szPwBqhayJLsjz8mL8i7CmoXTiFd9M8LXgTGAzqW9",
  "key25": "3hQs1cqEHgbAZSgrugTcJoeoepJve31PH4HHkqDZX8pgYK77oP7tBBQTg8MMPyYmJ17aTFaGp7RuPtKT9hcRGG6c",
  "key26": "2qeyVyrNzvXjQ5WWBMArvPm3FqEpb2TPJhCGDnDvXGsW47gHYKpEbnzjU2tHhhXAV9xvUw5rcDSbeuF3yzqNagt6",
  "key27": "2ZAQ2Q9wF8kj5CUp8CiYEU1MtGYdyP45JHkWM1bG2SsNJQhAUwpcXm87ujMcrHyV3XsZXZfUtEcPyB5tJf3YSXqA",
  "key28": "4w7UPwCA4WyTNQ7snrp12REAFz6SKo2hsjAZ1qD3pkYVPsQagHSz9UwWmJmMKdFoAhtQAE4ugdgu97oBh6WKqpmj",
  "key29": "2UEmbUDG2tufKtQBmMQoJKEmFvVsfXuCYC2KNqDY6uLsJyvU9j76r5Wafvkeq8uJbeV78paBfWDiPHgifaMD1Zeb",
  "key30": "3cV6268FjTSupJrJiCBj4d2UKADWicrjvSt6SbKCX7faxZ6JDvRTFay4K1ErnfUDEJCPPg8bzU2VozpJ2uWvC4cD",
  "key31": "5azxrEG9KE7F54husiC4JBq53NErQXSt6riuFJXdXddcBPnbKzFVybrTSaTpQedn9gth6gd2XG8HtqYeCd556kDj",
  "key32": "5thYomADj7AUGLZHQFEaXQifqFjVHaLxWa7Lx5JYw2x8HiUXjbMS77H8p2ZEsRHYroeE6KtnwiQA11zgGVZnSbnv",
  "key33": "5kqiopzhEXWgTvzdzCrTVXme122uVtFaNdkWaeopkpxx1r2UM4vsnQSzB2NuHXTJsFfzzCV9VVQFSj8VFyYdziQA",
  "key34": "3ZkUXb8HmTGFz5k8ZGby6iRtE4Z35kRrktD5rubeu3JNUUw8JEKxz8AV6GT8C62Gh2NkjQSRzGwHf2Ps98E5NTGo",
  "key35": "X7Qj8qLsYJxkqfZ3JXHArWRrfTtj2t13ua3xoU96zHrsAtSFFKkxUA5NbksCRzJxXCx6jjpNHuAwiw83JfGjxvd"
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
