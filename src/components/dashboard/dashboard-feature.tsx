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
    "4HyjX1GsHBf5maxVY1bDgM3UasyJH2VYvvXLQh7Q5DXwptW7wgSPq1WugJjqi2Fy5PQqCUrZEGqa25N9Fap65VMK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w8UwWESfQwCGgxJD4tg7H2FCEu5dCs8dwdekwv5X9okKxtpfyn9oGPV3gNyRwMDW59dQ1E7KmFcczVPDBRho3pp",
  "key1": "2qNLeFPJY8hE9676VTgqusJedgudbyT2V6Z3kNbrXVj8tDxU2Fw6QN18BVtUB3tgSy9S4WSQzFcnmdC9Uk1HGr7P",
  "key2": "1ubXLJQ2QEg7vBYhdp4NTEK4iXpvcG5cLdeLvA2fKa7TcEWV8yUoA97yKBN9xGgWyrsMi4ydHasxjnajRH8LKd1",
  "key3": "V4FR2eYmgsHndxJ6RU1rSVmmKmGdVNS9AotsxQaKS1Y7dU6ouP9TpY32MMVAr9AsHMyfxLAL9zwcYs5U9KHZs1y",
  "key4": "4hM1MUzsSREH25o9seG27RAqNqx6gNrqTv3e73f7wmTiDgUhHadSin359bAhzEy2w3bBS3sJcRTgCdkcgUCqrmMB",
  "key5": "4zpkMvwFDeGDBnpCezRQDruV43nx6oDTTp23Wc5gh1EpyuXcWvojAGUrcs359SXyLaqMPCbFxC6vvDZYTf1zVFiy",
  "key6": "4ybG1D3yRjWfeqCrjniX67BW3x8wxfLAo8CoQFSJbw1BaGsyacXRLCKFX7xsdU8nWkhxoLyu6QR2JKYNyQG4JoZQ",
  "key7": "2ZK98i1rfD2RS2SD5Zjk1vgoWfHddeSRkhArM9SjixVfeL6nC6s6FVKMNBYhmRcdgbiTyWuwBfREeyBAZBxF8dG2",
  "key8": "3RSHccd9SQ7mCuPWrt7xfUsL8FDc4RNjgzDjyurpWP5Wz2pYV2TmkuziPx7X7zRrcsPfvQPAJ2x5FFnWvdKhGyVz",
  "key9": "3PxFVtEZjSu3mvZ8PvQSkcUiG7af5W5b9i5UqBgscguxFSGHrJ9NhicmcfbccuabY7WUpY8ChT56rMicPgSPmg7y",
  "key10": "4qN9qyzk5es3sPtJ14me9Qko4gdJpmuKWzP13FrtbFzsEwyUd5mHXMJ9kbX164T1c8atRd7JBqTJSjq696r3p4rf",
  "key11": "4FXCpuQocSyiEBWgVVGmAuYaNyMGH3KsLmjQqFHCgaj4UiTJefme7cdqC5YPar8q8ogCzdsT1Vr8ha9kN6urdSCR",
  "key12": "5HQetQ3CHaNq1xrZLVKhsGbf8gdQyx7M6LWW624KAMdSbC2ZSFA4NqmwPuuotwLgcL6hKPQZ7uywqTCLZW2BiuYh",
  "key13": "utenMCoB4ejMCRVpZcJXLKeGMvp6PbK8vrsyPRuqzepqbQqqdB5TiWQyVaANfkuACxh5rm9EWKrs52dqvC18eeM",
  "key14": "4S3cDxQUq5XjrCbRaKEBNt9D9tptJx8swsZNFdH3XfbmnuTh5zeoyFqS19wpEymsHmjPKq1MmxrBLE198zNybS15",
  "key15": "2aF3QMqZiebuU9UsjaD1hesPjXFZ9zMpzE7QFUbKPysupzsk1ay32RfdRkwWQW6k5SyB5nWsDposJZ9axsNziccn",
  "key16": "4igxsa5gpWLtE4Lu4SrquxT5H1V8ojFWUQp4ahzd5iMK853ywwzLi4pyehDWnqdoDXd1eHv1QFHpQw2s6wM5bU87",
  "key17": "f8RKyMKRie8VuZ4a7hvgsaMG76SpFK2jkp1i8USBJaPgcw4arkR77wZ8q46z1PtgWWHtizZ1ru7bxEq5UqbJi1Y",
  "key18": "k81wuPsas9bXm327JZ74WffKqonN7zK2yZc3DbjyoULXMby3imACWSRLrd3d56QAxb13cMsosHtpGMh8hvfAgNn",
  "key19": "4KwemXcRcyQZywXj4gqmqMrwQwkouMWZbgMbtD2tHUBAYYR3QyMvM8eYApvFRQJmjhDydwAS2xgsxEWFvMw8yjzn",
  "key20": "3bWZZot3pcxeJJmnE4qSiBtUzzNYsn61tupRvAPUdTBnTFug4LE4yt4EaPEjjAWoxvM7eqTGGhH7GthTkYXjLP6T",
  "key21": "2LbNB2jB4TxumcZB7qXubP7J9dBesuUDuvpQ1tz77YMUEKEzzs9NcNEAwWjBhuqTrdc6D3w7KaNmrpeWkixqxA9R",
  "key22": "jo1haGdoZwLUdtJn9XuD82BUJHZrrrAzKDEk4PaerRchVPFDCF4HSnLeohXy6vjbWX1tyf1yrb61bakNuWBNrZ3",
  "key23": "4DZPWsXv4fEgi4WiRgviV2CpLAaWfyzNp8Z44CTz6tsnJSNwecd9nbQnJw46koNxNNgPmxRaxG5YGD65Raa9CLB8",
  "key24": "3KL9Q9bWQNRicKURwRRBsPJVFvjU82qfPTJAD2FWdkmQMtYJRfSVweyqPhPA7YK5bZSWxzzAZo2Ze8sJ76Cvc3Ej",
  "key25": "jzQ5ng8v3E3tGYfnAxxUH3BGszEgDUqnUz7VCeyJDQLVReZ8E3o5WUjaj6UqEr1xVFRx9q8MbDKk5CSpoC2GnkG",
  "key26": "7JLKX9hWG19LQ8xXfBMAh64QW1XBun6Dd1irp2g8LY9gBvicozGW1uwmAQyZi9CNNqGXzQ8Tt7ZxyioGCoqesj7",
  "key27": "4no7KGq2ZR9pNBdZu6fVTFgxzEG8aAZvu1vehEAVLeHz4L1NkvphRBMd5bWFvjJnAt3TcE13ACKwok6vGBAbshSh",
  "key28": "2dbsnBm5ugX46DAQ3FbRkJXZ64pHg1EN3go5DF8JzoQ3A96mSVZHavS6iYpczv5vSNpesrDEMAREAY4xvcwBPtvx",
  "key29": "2zbUVyyyxhrpdspnrTJkNZ9zxFm7khivQBLGP95YZtHxq2yH3ecnt6MA1HHTbXXosB715YgmtTv1rqcJPApxg5U6",
  "key30": "2SWauwU1stVft2TsFeU79bA6ZZUzTi8U7FGjj2yYuy2NeFAQNoBF8M7ZHwsqf7AjZnMSBJTsrenUeR4GXj6ifnyv",
  "key31": "4ijSqyrt1vjBkBvzw4efZ51tELKYepWrJneg1qF8jvUNKXvQSr39xHJvAcgzsLsfNDjjw9ZUiqW3QTsdEc7cDQBC",
  "key32": "5qnmJFZeTjq7avLfW7eVPBfhm7sXAZccVdATNtsoUdhbTAwvvuYJs6B3FRmkQTUhMGXk95NV3gC73zb6Byi65bE2",
  "key33": "46FMgwf8P8kxkFLjDBE2yq7fZmr6FTzbCfeTcv2SZQAkKcLQjmjU52gNWH9AL6HWMRrpgtYsQxrYsdhy3oKKDYmS",
  "key34": "3DgJvntEgas5HocaHksQkEunMV4BABVm4PZWvwNPMzjvpf8gn1T51kUwD9A1cQJgwvjGpcbdTdwxCun5LngHpoUs",
  "key35": "2TJUjWu2RbXNi2HhCxV3fYsRJ8s4SANE52HGDQTKn9X1sVv5pLgeGDLihUwrjEEHxwjbKZSrDoz8CHtyjn2eGZwd",
  "key36": "2LrwJD5uiu9QdCjhV4S5T8RiC3C1GMxrj2hoH4KMqqWMC7o9PHXGG7tZ8ZpXLwwE7kbADjhuc4m9WXvbGEuPtgce"
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
