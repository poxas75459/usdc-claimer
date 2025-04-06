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
    "VPnGRcHeGHoSEgKqfWAQbpzTgQnsq3JYWbwEYbBaDhVxqDdpwHXd9xwhJPcuEghfAZAyALnVCDghpqmCf8hWA6c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VtszDJa3LeXYqcqpveYNujsUZNxTqJaVmdG82aycSisejTgxu6h65EzUsRxgEKzoTV1NdYRr68FQwbsEg5D1ZoE",
  "key1": "2TQh97DtuJXD9jUff8Rc1BuDdwKdYA2SUq9QrAod4fLCF68GtYk4DjTxj4MZ1jPTYmefSTsGVNHUk5RwF2jaT4qK",
  "key2": "DznnjzcXB57QghiAcTNB8iSyiQq6Vc9nmFNc6ET1SVe4Kx9aEcf5FgeA3k4W6JoSpP7gCQ6QhfEZhdM2JnRvhPR",
  "key3": "2fpCcxUPryTZn2JawhRhxGAHNFZXgbf8ambpGSnqyLTuwAdGpbkDncHsPeQN95TL7Qt4GtyTgV4Cqa2FhwmEkuhs",
  "key4": "3mkPWNToFAoBZ9F8meb1uHCAYbYT1dKugKUkzrmX9jwAh6fHgbRNEpXmwuWUsKFvAhK4mpnUa5SYbie7EMwfrVT",
  "key5": "xqE6SPresiaEYpEExeXGh3YGgi5i4iZhuiLmsUjxSqSiMsuoWU9NCUWGPt94RaSTr2tsXta8U8L4Vi6j5CjzfLK",
  "key6": "3uaSfLfLrc1F5USRxtFj4ntry9Jjcir9UypftvG5WUbgceDX5TgaDJQGZT8qwfsR65uUTUL4589xzSccfHB1iB3h",
  "key7": "4mA7L6F82Wb6SjGQAgdymbbPTUkYxQ7wPbPa2hsMLVPq37xtaTXpjTdFGYQAb4rCZXbTYXgpSTzRU2dEJo1p8H79",
  "key8": "25bFjFTBPZUUNfzuUDiEFdhF2D8k4SmeiqsLoCMP5ZvCAbSANarwwEnnvh1VHuromgkPTftDmH2B3rCFZ2uGZfe4",
  "key9": "3ZvmkdJQWnmbnycLYPkTRgskXTSZmiYjDH576qxFg2hqHPbqX4PTptDyDzMxoiY1ZGkkzdGZF1LrYV44xKKbZ7Le",
  "key10": "5GNSgCwzG59hXF14p2hkRUWRSimFvLdtzg4AVuJ4jb33HEGkvyBrYJLHpJTAPJcHbX5U1qgKRxqzfaHjkVoDm8xT",
  "key11": "pgfBJou6b7XzkAFQpvmKwWQXbVg1bC6piwLkYUrk55EKs13VduetTueFeFzqt9mp6HrCcMYz83TVWoUwA7BnGDn",
  "key12": "3A4eBN5MbevyU2emh4i4tAiqTjs1nvKGoJDfrVdcVexF6U7rvdAHeGoLeFNu1fZqfvf33StLLHB9WraNKKcs3PUU",
  "key13": "2LvfjtggvvNE9JCeK1oL238pGvXdfX3waYnfD1t5rK5vJVcM5v5GnonyE4bCscyW817q1StKi7Rw8x66JDert5ij",
  "key14": "4ASALPQURW1EEi8jgDNNWuX48Riefuj6gtHrHP2an281yMbqxUQf9WoJEnB4x9xBpRbFTBFntTA4Wakxju5xiVjb",
  "key15": "2w8KMyQBXpJQR8bBgWZPCpcTKf9DBvVFtfD9y4Ji5QrQd8kC1pDRPuXibJvChdxgmueeV7EjUdifsSn8z9iyUP86",
  "key16": "4aV9dxuBanuQfA3zBdjMUQmQ6JLMnLUZJfBJdf2N32NZLRCGDM9P5aw3tsKZPPn8m4CbyGf4pUae2Ey3rJKvLx4L",
  "key17": "4BZx8m8bGyDerAc8ihVgawoPBoxNor2BQytud8w6SVareiDYLeyBDkbpcLtJNz7iEsqfEsUkTCahxBNDkGVHsYmG",
  "key18": "zzEswSzGDE2fwmRn4yVAUTojK5yWL8CNFa7utJaoP31g1rAQg8AmqRoKx23EqcUaGJdBNoXET6xcPtWqwS8W9pV",
  "key19": "xgqmGjqep29FR8FRzbk9jg7itoA7yeGk6MWSsVr8vKDQRTEvQGYy3MmSU1bdWgLfP8AoQYUovrhwgEkSUW6zPFk",
  "key20": "Ssn34CJvdJjm51f7f3VLWtgPEWmBp1y8pc2reLKbppWANpmQt1qGuKttLfZQ1Ly4cUYoyscrqAMKnhEdPwGBoPE",
  "key21": "UaGFY3Jza66EkKuu6hFRoZfhpbxzqn9zGqgVJdxbMiR7im58h4BkEUXfzU2zUN7HRXRxVMjgAZb3efSttE7wSHA",
  "key22": "295BNA3RnJwvPYwdqk7WyUiqihdsMHRjYb8TAm9RQrAfNbpAcVfXE7CxL82o3ZbsYwTAafzvKw6iJkhpMvBzPVoE",
  "key23": "sT4phKTU32FCsMEzyXwLn35HMmv4LpYdrbSCBRDtVen4CpMuZE9g1UGFVnHYSphoGHmZv38e8DBzsis7RGk5nu6",
  "key24": "Wow7cHWo4eN4YvuJnCzekLbzwF6dDHYErVwM9xwB24H2keX3nneFCkZLVUgamSYcjFm9DnaVw293Uo5nntUrphs",
  "key25": "5nt3Q7gx3CCQBq6z4usR1gRzMe3qmuYQPzFY593FN1uS8w1VoV3Kj3DovDmhB5JH9ripcaahNCqSiebeyK1P6iAV",
  "key26": "3LsHxJSdz4wErfEh5XZfWs4x6nHZhDBhKkjmAUuuhMtno3g6WRh2HrFAKMNWc2xosc1zNELHmsV7wKfVwpRp6Ztz",
  "key27": "3mZEEjGipHjUXPEpEo33UB7u9QM81ZJxbAVvnxjJgCrEfKGi6Ndof6pjZ56nGqsmHRLb8ZaZn7LHgSkixZNUAjXT",
  "key28": "BjbLmszyo5oBf5kdLd99xJAd92eP4m7qdaNgW31MF1qTjvAU6vzjYzgxi4dVDZfbuou12rYbEJ3Zb4LW88EhRYR",
  "key29": "3U8yyrHSzcgEiKdTk54ch8GPKhtSwFDEMreSU72dDtT8nmuGrwTyRTjPrFdQVjVhWon23EBHQvH31Mnctb3daVNp",
  "key30": "fBGBGuhPyZBW5foD5f9A1i7yXNF28dLr7F5rpGtf1zHxNrhDYz5gknxGdRJHSJWzoBXXwLQ729PN9fBkiYp9cdP",
  "key31": "3mg4yHet6itfZ6RZ4zEz6haQ8vD2d8JMpAHEgAgwLx5CMb6zy6gvJRKQdeFNFWvgMdfhFiags4yg28df4Zd4kdRq",
  "key32": "57m9FWHme1bySSp1CBSDuRqGsnUwfjq53emRZdHE1LU9bYE4cAqCGxnhXtyJKytq1pR25k1MUXP9BNhCTRPHn1mo"
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
