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
    "Wd6UhmK4L1N3GdQKuP3Awhzt5MauJszWmCpd4Yjwe82tG2uJCbDSu3bm1oeYZ2x9Qfg4VtwpJD5LeMt5Cwrg2hu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PwT3HXpBNHdGqduFdcHW2nYh4nMW5yRAZM2s9jG9XQ7QPN1q4MCMZUAGAAzMjQki2D8V1ZkYQ5A1R3w7KL4Hz4Z",
  "key1": "5ULLLt31gt5VdV6j8LB4T6oG2iPUYimDLXTtNkSeQ3yc8oMuKEaUmtHDhzCLN1u9TqB5hUHJVXjxa89jERedz463",
  "key2": "2THn1xrbpJRhiwoRtRmshgJv6Yr83eni3M9okz83D6jK1ZxrDiB5M7eyr56sDRsJTzPiD9AcdQn8cDWLhtdXH6jj",
  "key3": "Jq6MHo7D1XttnaY5eLRxzkHM2LQCdA545ipfPJhzATtJnVzkuNCGdK4po7mB6PfatG6QS3wZqBbNdGTZj71tNMt",
  "key4": "wXt76cgBQUsXThgEN4fmF331EUHrQ6q6QQA5vUgsQHi8u8rZqgkcpwTAM36zMGnwFTQ8gb1v48bZMqqtz34mWTZ",
  "key5": "4xCLdLukLgmFBXfcL6L4oMQjNGXgezgUFXexjarigjvJLRyn6BPpHEvLJob5hduWCBTTPMDge7Qyyh9k1xWhgP9z",
  "key6": "Yy7qZFFbebRsEm3HjQRPSd2H23xWoMACNBBus6xoGLhbXYQsGSjDZn4hyw4EnjpJBwhQFYJ7dfkAQq9i6oFpgvh",
  "key7": "42bNfsAZryA9YqSwQpJgp4WjSHiKwL4dkeVrx4xnSweGXEKoubtfNjjkR2wmGtXxNQpe324f2LFUuNugLCWzJx1R",
  "key8": "3EKHBJcXKFvRtF4cmdWFiBkMrufeQXKzMEyNHs94Jf7N7ALMrttnJdT8Z899m6APu6jg2Mba3H5pwwR2gmrxhdy9",
  "key9": "35w4b4qLpCgajm1wsSqCabCsTW4uJSjJAPXFedztF47XwkLqpZ64n94PgGstibst2Z8jGxvQfVARkWhgSiUgW8z4",
  "key10": "4ba2xL9kA1nquQHxiQpHGvYWe8C8Ni3aEukVZrVet5iwJtuCFgUCJ4GvnyPkhYHXwJcdhf87GmNwqmPNULUeidSV",
  "key11": "3QNS3CDQG5Ddwh7eZMicYQurahAUnWqT5SMPjVEotTVq3C5ozworGaTrCWa967dVfudigZo6N3RiQz2bySgDifUK",
  "key12": "56ikwj1oc9tZxKsNg4jLYwtqPgvNKbydDcgJScJLicz1A1KkfNrbDEDEhp9aqoBhxEQFoCynuEyH5WAFBxkgvw8e",
  "key13": "2mRA8FrRdGqZ1gKHQ8SJoYmtBpYhe4WHpZRNE8hJeDMaWkjZHZ8CrrNuRdVP1FPAhGaeDG527gKk6CYWEh4T3Zgi",
  "key14": "4Z8qUkLEhCpUHzn1KBsbydJrbXf9oYoTLFbR7GssjKwX83yJyCeiNQHKvsjXm1at5RaDuY7XqZThzY1vdTGKYEFL",
  "key15": "4eyEunHQWnXzkhEbMKTsHm8nJTtruZfZVivc9sFeFxRTb1prCPNyMM85DTcGMBd53ichqheb2hq8Ypdw2xESUTyK",
  "key16": "2y9NkoFx5pZsqRWL499VjFFN26JRnwUu19nHEwR6qLu94wrNKZjth9hDS2zz2e9m3bTy3smdKWnhqsFaRLrEtHCg",
  "key17": "4KzfqxC4grwFteqKY93CuHLWQA8wLWf3DdRvDv1y9K2WmJ2uh1tTXtSyVs9hEvhRjRqhwmrxM62VGijqFwTFSqQv",
  "key18": "23fJncnwuaRFffvQPwgxkbg5iabBFqKzcamEVfTAVoFtwWKdFLUkPcRep6Qh6admUH7bGf7LneJ39DvtejRgm8Nh",
  "key19": "5qpSERgJZxAknjtwRnjCD2qrsVumkJLxHkk1S5QDvQBbAgeS2wzuojRAeLpJem2ENZ3LdfpQBGzRaqLxkJHu42Rv",
  "key20": "aGo1EGmnkbYbGqtU7ZXvPfQYrimuTHfoGyDTGhmn9PGm7aZ34QaY2rZ1Ehh1BwMfXhLQ4dDd7QMBgHuX74XbU9E",
  "key21": "66eisb3oFaGsPtntjrMJLrSppL2nFYGtyverdyjhjzHyxJwts7ue3vL9qBGLGLfGnaZ37yoLnFgXuHywBJpQtztr",
  "key22": "2pkQ9VGoqbzsCUF4wdFWafC8Q27RY2U4ZGoMenY2yr26NMdcFAb9yDiys2P9yFxzLzWwELiE6aqDK4y23oifvFsu",
  "key23": "293TsTWcUP8JFurvLAca4oniP9EFmGKwNUCHNqQZqbiZ8jEy9nyo1RScwpjYX8VH86NCFceH3uYPhEtQ99MGecE5",
  "key24": "5tj7HWrG7yPKx7UwLJHz8vFF2ScUmkYyMV8KdRGvLwriEtjzA47DZPpsZhqs9EKVfU3qLvXyDkKFXGWKKxfCbNzh",
  "key25": "3YsCsnXZrtQwDgygnY9R3m8DN7APfP4JAqr4X6SbQv5KBgeZKWrpykCwA5Va1PqpWELMqqyob7ZYHo9vpi2Bg8FZ",
  "key26": "43qPc2doSzr42CqHXn8HwrCDn9J2SvwPVwuQspR9H2GRJWAmrZUL6dwhaQAiMHLn4JP8ogTzBX22hyMNfUNMFNDe",
  "key27": "2oc83RXLpH5X3uYQTknqyHxVev9RdHoPe1X1nbPhKiLh9ihQL3LqgRt97u5GWQwxM4x1WaegoPTvrpN47wLmbNSQ",
  "key28": "2RZ9iAhJEs3c5KYP9bsT6qF9kPWSeNcZWYLUT4j9WhASu6p7ZF239Qr7hGekzd95TTgVbw84GErLZXKAvZ72o2nC",
  "key29": "4EABLg9yY2Z9uuCojqhEb1mR7PwsHnR1vfw66gjBeihbQ4JiKuVo9FFVfSmhhe8virGxESNnkKezX7WthZjHimfs",
  "key30": "4wv7sPKqTDuNXjGEGoUbsM6mmHZu14AmuHbanUjp2fFRrhewuC8p9hLUJ28Dpwb6B81W6KkDnkJ1BJXu6YzztrjX",
  "key31": "2rbsWQU9M1DAoduPjN6u1agpCdpXWhKSKXAfvhaYMDW6t2JyXiE3aKrw3kg6tKSvKTwGgFsbhtrSgd2GF8UcYetX",
  "key32": "5jyAk6xBzYQZcdW9vFvoZHANj7wjk4edyL5bzYGUPMHFzV2oRrCE81zEVcZ5Z41oCjedihdS2NSihgEpLrhCfka"
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
