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
    "52Foa3DcwbhjZEFnuJA9a4pYFwmF1bGxeQBsSXYHdCMhB4AZce8Rg7KbK3Bmx4VGvWVjAJgThks9yijEtvgTTNKj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Sv68xnVzCax9pzY5KHxjwjkLW8fW7e6MqmqW2oiYiYiAihdZEvmxWeEgq53DeD8efHD5RnbtrsaeMyteciZM8NN",
  "key1": "4156oRCnTRrct3kEgARpx1r1ubhH3VQaYu39i3s9KLRGWMFYFAxdMocpvH2kJjcdLvovc9C96yCvmWUL8pVqEYhr",
  "key2": "5gLpQvptAYTjkHnDEM2oLzZj96AMAZUTbFPZ7SJNMqRu1LmoBQvGF6vKeVmFUFPb1VtWDSuihj4ke33cHTpN1D9",
  "key3": "4FH4rMrFQpGEwWqutrDvEmcfU34jSCfmEh3pHCoNfVyiaiNmkznmsBSgvrFUfFNc7RNWigyuCLhiamMzRMkJoYs9",
  "key4": "5i9RrM5T7q7kHwsxtHnVyZRshGBsnd9unMBYa4pULx6Lf53BEfUAxm3qFb8wyszwE87Lx6JxUgk8r7rSdKLQ1xYf",
  "key5": "DptDzNy9Pdj3qVDa6PPgQeVhUyi8yeFMD2As6uHs1GqdXP3fAKd74uoEo6uvVFJpGXYYTMuARCfhtmxCSFN9qFB",
  "key6": "63ULSDm9rqPHgw6WcqarDxXNHqfdUTqkRDWi3PW2WSdxQK1uwvq97ChvqpSeznbReL8ey4ByG2icGWBEV7KDb5MM",
  "key7": "XTggP8kmV5begZbossBFwAkjBStKdhnw5ZYLuJCrD7eAupuhg8Qsgd3F9JeouhXwTUnyUsrv4q3XCRPrhYdkKyb",
  "key8": "592cdBJjjndEjqpSg4XD8ssJV8prr9PveoJ9z7PJSpyRWYr8QqG5sUQMLJedDb3DQHfmPmmMkoSk3KU58BytSLA",
  "key9": "kgNKadhep7DDWJconaUtYU8P1udv3Y6rYuphCqGNWDCqg2mfLiMS1dKNJoR2eGPYqu8zHzFt3uBuassrggNzovr",
  "key10": "5DffGhg8VYKf7tm4nT7z2urASueRHmqeuzmAjSoLd3V57e91WR42oGubXmj3yrMz4b2GkfYNPW1QH2sMVtmAVuCa",
  "key11": "49DyegGwYY78qptoVQE5YQYUkSqyQmvQbkBXnoHro6ZG59SGgqbGdWAmTgADCp7D7Dc4V9gStBKfX9WZdx3q86a6",
  "key12": "58ozrYKV5aBfiL1Z5JUXyjqc5Ti54SGx2QhtDVjWHUFdWhroGPMeD1xcnhyjgGwQ1Fc1D6vru2K9QfpXQM3ps6DG",
  "key13": "pX9bsxaNoVDwD6mqqQ52N8MHQPRxheWGJ8jDAmyDE94LqLsdMfWfRPGLq7pm8RxhNkbNSNBr5xThL8F99d5L8Gb",
  "key14": "fwb1ZSjPtCEBYmARPRbV4oxuTGE3DuokxnKEYCtLaK7Lv5sSZpqnZLBpXwQB2xe8eRoeUDJopc8zWTgx1z9kj5r",
  "key15": "3QzYGBKw4dg8gaCo1kQZR4jQA2RuAbtxGkdmcNSmQRwabH8ieiYtQ9UXTkEo7hrMEYwm7hceEPhS19cxQRAyXYLY",
  "key16": "2DYZnwmtPGy5gHMEM1U1ak6iwgY8e5a3urFm6bKnvBA6YGnDrxBCLXtYeT7T7GvAMJtSQNKyZmnCmLYrGQFUDbcJ",
  "key17": "25QoetvrzXrhzb4bDgx14SLQnrQW6XPnmgGD1iSLYbN5r2pCP9Taj1oCprnn8gWA3EbQyffaHxWCn7m55Muza2bN",
  "key18": "2v4F5beC9BmCDLHRFsQwgFdz3DVqmMHZmneJXRzj3V5QnvAZVo2AG1tYqtKRJPNo26TiGG8hUcZ7vSjQ2QoNPzqu",
  "key19": "5M4vkieG28fh8NXeQDwFyfQkJCxREax1Lhskei9pcBmfrpKPk6UFXdBgQ1vFK6iTuJgvjB8eoU65xUir8jGJhRJu",
  "key20": "3WmDvy5Pxivky9SXfJCosind9s3cXFJPiHg61UF5DKCgXdZAKVHusAXDuVMSzgXiRXvpxvmwR68Nmx7ztw5zW94G",
  "key21": "aW2N4iC4DCZaURMBEH5s1BmQNRAxHyRCAujXSoqZ6q7Ekdn6B4cfgmsn6YUE8z6gNobSe7g2hmviDeWDDiDTHpZ",
  "key22": "2Sv9oegsy5b3N6o4s8jiSLJ8Dn3gSbrwSU71aGL4hBq6EM6pib1nDM75MiCqqWBBYt3VSa2ZFMeCwMFaktCTBvn",
  "key23": "Se2qbYTSmSjUdTTigQbyx61oWWxCZvy8ky1qRa8bGJHPhiiJjtmyHdWkm7fpvPadn8qsWR6PMPwQhgPsK8cepRx",
  "key24": "3DdJPaKJ2QxbnMnD2g7J5mdsi6fPbKtkvVvEPWqeCJcDMo9f5ytyfFsmdGMipDktkeTVN6hunoc6wmbDMN3G8pzR",
  "key25": "4J9e5beMhS85NhpnET155sh9NQLvz3YFhJo6cykdqiXJdNMCJL58Ee5kTgUF67ZCGnhDhGQPgZ8LZ7viwLnHkij8",
  "key26": "5w3q7Qv1xbiD3Yk9sEaeNWF69ctzLDVxwVLuKjj3Xx4wT4FLuj6JvCwvPKvH1o5hR5aD5ru1VKTNS4qFfYGWoeho",
  "key27": "2Ltfj17FqWD3uypEMvpWF2BqpGafgTJSCTiZ2sEwTAdjT6mrR9qp7bzMssrssdPLAueVDfvnjteZKJjx896uUZjV",
  "key28": "44BChTtAvPPhvKXG6EgyAncBp2hUhiWegJBo9HmfHYC6w4CTP8fZbQZFYgjeCx8VgD2ptX3vmTnvxYXKUKZYYgX3",
  "key29": "2wKAvio3zgzuNpDFZp5wqjbcomBhyuBwjvosQ299cgE7w7PCFhwSX7FEZ9YaFWS2Kh1z92YEy55UssXScwckJuCR",
  "key30": "5j8iboyff7vvRd2W2xo446GfKEqREjj3RjRVMhDZo8TrJaTotVefD8yCmZZvBxpLJqEbRiJxgcsd2QZpkKmF2jHS",
  "key31": "4K9a5Hg7ZYR5zm1mxPuGtCw3wKms4coLP1jPaBG2u7A2S4UGiU66Cmu9oVmzRR25UYqcR1CkZsB8SG1WrceWdkNy",
  "key32": "3PknKRh59fRxxBQVL9nWCU24p3GRXzMLmx6An4B8xZHJXSGWBbQ7KTvUaZ78fLYHwncQNZKWRzZNEdN51QG9s8Qd",
  "key33": "jUtbcMVDKhSFAJBdxGCDdo58ooFVNqPNS1J2WxLT6QrXCKNwg9wWEhVwEv9g4zgGSLb6o6EEcswvfAq9eEM5B57"
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
