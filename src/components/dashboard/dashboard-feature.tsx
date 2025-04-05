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
    "3C41XJmEdkWeek2FM4rGoJND5XSgJHbnwRJsTNNVXfqyGC1Gnu7XzLfy7Sh91BZwhfxNuoNHrP1U6BDmujcNMgzy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "riyp2DpQvV3HZRwGXLZwMKTYCS1uoTnxxxcsZuZstA9dMYTKbYEKDFor3jZrR79dFYA441Wduy9iRERFq1EM5Sh",
  "key1": "44QCBtzSfF5sjom1Fv4xFTa2NQiUQ7UanFkE3o2K7hT72TEdfrifrjMYT5F88nZruJAomy87rSxNmsJBMPGVDHqE",
  "key2": "2J4yhnVa2ijyEm8S7iqoi31niKSCJnpisnqkULdKfjpzJ3P8JxTaguFPTDNu1q9d3jXdm8fu6PJ2FKhnYH363iNK",
  "key3": "3qQmbiftsj5z6hGqXtp7zZBNyBCr1ZdnAuBUPBfsoBb85ESQ1gWDZR3E34t2UJ72mUyDAYvYoFYJtzXL9tXaxbnH",
  "key4": "4R8NycoFRTzEp6x8MBS9B4pWKDMkdH1hd9eZ5Ri9pteZpELdwcDiwZzVTPJiXYSAmY3dUZKDV6DzS73F1FEoz9T1",
  "key5": "5SDzH9crEQbfNYtgG1oaSTUm18cJcW8LDTqd2WAS5yQq1XgjUQW6fnzwVTuLutS8ZV6X2cot7CpZQXuzLEeDagE2",
  "key6": "XsaorDDh7Q3fphQhx6c8S4KjjsWnQWZQH3mKGg1JLv2dxq4X82B8eb3LDsDSQ3gX3wvKtoyaGdjTwMx7NAHxfpq",
  "key7": "a8LNtTN5qsC22xYkF7RU4vFcTkohvS8v7xx4QR6YW3PTUR2dQjaUy6thFCtxwsXBwh6M88TCQ29imom4eLJ3F3A",
  "key8": "ky2L58V5U7wbZdHYvHBnv4LzXf3jJWCZa5QyMXDozmehpfRDwH7wfAvbXbWfAxXPGYjXJKHU6VyCY2yWa5cfXfX",
  "key9": "3tcUxAAtH9e81dJBH1ayMTbZ7PgA29N5oy4qcBS8mtAfzaAri5q4FxP9Ytr55kRPUoqwoC5VqHErTD5vVZ9WCuAC",
  "key10": "2RE1xrDbP9ftgAtBEqYrzRoC5so984pHf1Z9c6UMifki7VnSRdZpGWhhjsa2c9UHooR6ELxjkz9sB8wnkCS4KmZn",
  "key11": "46cCUb82oJ1SEnXw7TfE1q6m1CdPECtgTZZu9D5CPRr465uLiMSMMcFPuTR39QGQH6d5uH9vwv3MKtWHNvxrRLix",
  "key12": "3fi5xd2QxyY5Bj4EZT7RV8oem3UTogPvpiDpQfd25BDcAaGA8vs5hHsZqnGufoinD714cPU7fHKUzNpXLDVWnFpX",
  "key13": "4epHzrc6P89JPkPeXTKtc3oY6hQYTqyU4FBUfwRD7TYvV1ChvXSWdPCj6nRyUunwKcHh2Gw47T24F5kAjSJ8Y76L",
  "key14": "3cgNQ58vTzm9LVxv3paLM571kVuAsH1QrkigWjyH6kTmW4ijSLFGNduUpDPdUCtcuHkBcEJmGtxbiVuw9tbrattw",
  "key15": "27asqcAuAMkb3mmUjbqCKTRtF9qFNLYXtXf2f4go9UM7jFKNyEXqPmgkJeJUR7n8V5oCyqpapJwa1tc4ZcbJfqFh",
  "key16": "2GZGmBLWj7Qwg16J1sGacUSuAbzFiHUawB5qB47sxSvNUtKbA4Z75ApuyzSMmrRv7wpgXiSV16quQLAthUNxFELu",
  "key17": "3oKG22c1rFjFm5WMjhyrJTEyE7iEsqH8uviL257hMQxGTKsEH4uCAA39uP3aRbLYj4sGdBsHeBTTJBTUX9FEJEKy",
  "key18": "3Sz9sbzjwo2AkMru4K76XH3n6vvkdZoLPKmiCTrkA2f9Re3gi4dBtuEGcfYCjKsT3EUAxTcFq7cBubmUxp7UpsS5",
  "key19": "jEpQAL4E9XFQizFQmpuiRtvkjoxcLyGWddncVKb9p1tVYim54G41gTmJCJANk2AoyEqBtt2GuEfNn5zBb3b75Hw",
  "key20": "5enQDnii5RWEKGng6JE71d4kLSCfWtCjPBfrpHSvPVo3CLUkYjv3Q7VBgMvDfxTe5iLtwzFfkBTmqQudeF9KiRwP",
  "key21": "EQTK2CgYWqcQ9BYn5sfMGKirBWZCwtKyb7CgaWGz4atcT6HBdZ8XqUdpzFEp7Gza2zDNbJnEmRuy12ZkwHyms6L",
  "key22": "4pf7xiZVwUE8wciJqzVieeakEXfjAaspjfCiejZJhGDi8CXUeSqftqZcZfQBJ4GBKhhajKtyv7B8ZZToPdECTJ8z",
  "key23": "4U14aKBLeunTBTVQ2cyt6mnprMeB1xgNcPzfhhC2XoanWXVjfUuei12VaMiknftgeRkFww3vuW7uHxfPrqpBLwqE",
  "key24": "5mKRrStLQUjwHa1Mv8hrSizFAD8TRNGtbSREhQE84qMtwGjeA3S7SweEfbBkQnrWJDuAVqXL2tysetroQN5KdgFc",
  "key25": "4rN24n51TMy4RXPcMFv2M9wovqZ9caHfJZNzEc4mGniwwrEg5vsLFnMBRLAGvrdA9NZrKaWxv31fhtuCbqKrb9PT",
  "key26": "2RL5BZG9RWrhyuiu4Km4wRZWyE6EoWfXxfr9Qn4TD1UUNSuGW3ucdhmd3fDDQ14xEM8HiH9X9G5zqD4iecmPBiLT",
  "key27": "3jK2xKjt5oPrPbBfv2iPdb2DzgPHJkL28WS5qb7cvzkDgAjBTevrQmn58dajavXUDekFSGGRFTyDYStuieAHM8Z9",
  "key28": "54N8GJkYPHWWAykKj5YESCv2xDMVixdcHBF8AfFJSHGgiR3eiLotheyYXVmUbq75hxtGMNGywnivfS9xPRXtdvi2"
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
