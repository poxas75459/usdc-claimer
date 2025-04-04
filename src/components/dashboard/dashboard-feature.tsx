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
    "2zgrEntLDW2gYNH5q6X8yfQUkRatmYiK1SsThWu1NY4JFU3XxrWw4Ady2os6DiBJ9i1ULY2gerfMS6464sAEJBJa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NZWw3o8YYK7Z1b61gB4RzqmA8faGPKTXvUfyhhoswkkf6KmMPm5TXm4QgMJ6A9F94oiWVbKfuNoaVAsvtrUTesa",
  "key1": "4oDCZkWiC1E1ruNhjbueuZ9gVGtLzgPXH9QMMXCy9xKjqN5XjXpf4J1GJgwta5dAR9j7gLgNtLRa4LN9dWBhMiWM",
  "key2": "3qS2MLGEDVdTLthcGp2gbRoJy98zrPB5CNuPssSVFhFogr9EVfcrxn2z3KW3hnsBrysovaqtptVxu5skF6BHARut",
  "key3": "4zuEXfhen8aLkDmqYkcKm9WXSmaSfPmazHeUqVVEc8AhgfJBAHkhX8JBRrFsHtn3Pw22CU2FryLYGGUqMFnYUZTx",
  "key4": "58Czrcg9JWaB8ce3568xfMPDDGbYMhezEjqwowb4Wp5BYk3w6VC4oT9Bhi8dYkt9vfUC9U5vSVakRHWhidjX5BPz",
  "key5": "2RnYhWLHoMN2mcvCTYsVkiooxDjfmisKPymcJb5DsdT5qoJHT36J2VTeF6BybskG3dCmmK8nNsKns1DQzbo36oEt",
  "key6": "mgfCYTvN2sEPkPu2UaWzkrdmEL4BKCSjHDPs2hprBzoPy9XjbW7F7m4C2DrdDnMPQsDWjhzXoZYUtZEipb4kxKw",
  "key7": "2SdX6JfJjgn69qCsZ1fJcb6gQVJtf3AgEn8jXZxJ9h9gaTuSbbQFKqEFxkkbFWqPCVrkFf1hXYMZADqBssW1dUuv",
  "key8": "3o8pv7ktgfFjrr6MFfPcsGaMDK6pYJRAoTrU9HVUV5TR2D4STHpwFdt1C8MDjJa2WSkmDq8hEydr2a1YPxrqRM7d",
  "key9": "2wCkNFU1X4CCXvUVRfsCMEQFovQPNaQ2DpSVwd73peu7rUFqQWBNzmwGBWyPSFoiDt9Ddp1Uux6kEGVUwXTs9fjk",
  "key10": "U7oUn2LbXWnBYGxCKoqhfTNzc5knX1y4QcmCzXYXuWCR5aYQxKyoorsFw8B2xxtX5F2QRNvFDoXj9oiQiGT6vag",
  "key11": "2fW2ts4ibJHKauTTDX5aoC5mNmmp1TYcC6cetjt2TrA7C24jqHTgLCeXivqgwDnF4LJbSxLMS9wYDGPnLhHrLL4P",
  "key12": "3p7PGc3ceCM5HrJKa4i7LbAdDtXVmsF9nqNKfZrvzibQyqU5TreeFmUYzMfiHcNkksWYZHmgxvRejPKuVxPZRZfG",
  "key13": "3YeqzTTynxiBrhxStA21vM1dA9LZCxJp7Xrwn8bwERafdyeTbVnxJuxtC3rjgXbbnfjdNntUee61SwVqzJjyXHB4",
  "key14": "esoBictm4Lc2BZScaFmBkYzd784enWkZXqUddFFEEyRabUkXEN4eYC5MMLrBB1U1h62h5Ze7h8iaLwJQhezQCpC",
  "key15": "48sNFEp9wEgqgNuPs3t1KxBHiJdCJ7zukGVqNPWN3CJg5kE7shzJSP3N9YWQwWvDVD7AcmanAChZHcg145FTCDYX",
  "key16": "4pr5GKpTAZ49tavxM4rgBBonFPnA2EBYh2TwsaHy8wPaUjocFnVPhiwPFkJ8NerBVKgoA6bR7M54RVBMpBBwKTfT",
  "key17": "4kezBd2ihSKfusQ3tdWMXQJAdpkUu8HtJhpF2nnL9RJRZKec8xXG4VJuAX2EsBDny3eUy9SWkg4d26oUp3xfDZHe",
  "key18": "3kYiUJTwcasPt1vznevgKotcaKLCwNRPaCjUUwBhgDUwFriiwwZA3A5hawwBKy7hy33HpvGffhAXGJLiH9BBSiRc",
  "key19": "3Naod97LnLkZtRVMBQZUbBgeK1vADFgR3C3VAH4qAyj1i9VyP4U4FXQvnQfA8HFQo9o5sdXXYfRVYbCargRSdx4v",
  "key20": "3X5gbp9CA2ckeB1TvchcErHxL8VtbeRYdhvhAMweXgfUov1dVVchnKyeTfZNcVXLcAeEoZr1tzcB7dSk3zybmcL5",
  "key21": "4DA13UMbGiMUMXsPrbEjFRdGAaurotz68NYvX6MvSfpi6Y7jKQpihyCnY4Yr8V6kZYYN1XA6SqkFGmojdUBw4p2x",
  "key22": "4J98LxU3AY1azBWk3NCHAnZEy77GVfrqnY4ra2KZqxkMgpu4ZmjmehZN2A2xvkRy4eL3mCPBc8bCXMzZPChjkRSv",
  "key23": "3SZZMUoXTLxoBSQLehPD31bgUPeYi4r4ss6zrqUP7KTmMvdTyKLrBPNFbrBNLVpUCJ1BkiqV6ffgojj82NbTHT6o",
  "key24": "3iCpY1h2Zm2qb3YMBZN3JcPEcy31dQ3CarWDvNrNQ7ZETFRYpmMNnrk3sLTKUczMU1AHbgWcqkaJF2LVCuPVkPYh",
  "key25": "2EmCzVB8FedDBLfUVsDLionHC8YzsSomi6U95ftYtapuMRfeKCnU5sNbare3zuQpvFp4c41ynhRQybgBwHTLb8vr"
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
