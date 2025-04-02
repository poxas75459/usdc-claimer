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
    "5w1ZVAPd2nHCv9tc17Mm6HNpfV2xRFAG8BZVvEh9cVefnhuhoPnNmYEjbDPuseHp7rxXcCeVfySF4LXaCaDt1Np6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MhSUBX6YwfQMCm7vwtcZuzjf9HBBRo8rhegNsMBZh2psNTqWJXLaZ2WHtfdkTCTogv1heude2AEP16DQwcfSA4N",
  "key1": "2acnzFP7LHLkET8ubhyrdgv3CU5t48twT7ve13XqWkdjRbkvU4bjmVzTqEwGoqcT9xPsJAnmbHxB6bM3ECBQhanx",
  "key2": "5Qx7EeRm6isDvGg6kqu7bNAEnLnWY1AqdCB3sVtGzeCk1xYoqwhSXxYiJT8UmqDj9ECNxEeB94EU2xMsNuYkV6Yg",
  "key3": "4o1WoVfajQMWHyU12zBzmukm6D5ms2ucnbCnioGSmZmtFjptpj5xu3Rq3KNm45YAqzpLkYq9MQtTtPsH4dxEFo1k",
  "key4": "3YcJUa4HfkEWceJmGNd1qbbH6qC5uaZrGzmz7vdzfZnzNtmz4JsgUHn1Hc99TQAj5Jao7sZKfkeSaYcUtT9m2AGi",
  "key5": "2hSzyn5fUMTXg94puWwTD1SKVCbPiE6opFPzPmUm1qN6dw22JLZy7S84nmacReHyBo2j8YwGM27vob1iJEwV3F8C",
  "key6": "2MEyjDvEJpHjnMVibqmRr4ti8kzqUA6ZgnzmUsZw6VjZp1XUdXsL2h3gdNLVyL3BTJZPyEDxxLyoC8wSmoarUSNB",
  "key7": "4PdV9fgivdBZHrDW4ws8euGBwMXjWPFDsPAM9Q6A7EarNaqBNjuY5Aqq8ZRjoS8YwRM78iPErXWjMXbYtY3uamgQ",
  "key8": "5uZqFwjU25sWakZRZzA5EoK2sbJRGV9ycWeV6sHXjvBh4e2jvBeV9YYqV2uq7Hjk7akP3BxBTimmK6ovR9jZdfYb",
  "key9": "AUschTfTQen7yjesx7tBueuDNPuKhLhtAqx7hDZXUvhwSwi4WadThoYF9SNmC1v19xFCPHXDyCKm3XUf14gSH4E",
  "key10": "fLeQsy4ZxRqmgpbg8toQGsXKWgHC1z6nnhQifmsh97KZBf2weqxsPjHTR3ZdB6CkGQfhzd1qdtqjPRwkr5rzDGz",
  "key11": "2Krbh3cNdjtCaXWwcQ2L6bKaVhCnwdzt9AAccUiWEFCA1ESiLcnDacK3ivQLTbhcReZgay69vm6a5ETaB7VbgVmn",
  "key12": "37mkKn1jga1qASMYh5niCuBjVbWsJW2kZxpEakuHvuH88UjG3m4JGTeTtj5VSkoD5qwvGKf1L1cqZS6jXxMUMjbq",
  "key13": "4YRDvjoRQNzDiNaGybw4mFBuLWm6LCm2LVNeLJ5S1pQJ2FxHrskcKJHnb372c3kbMriFfXUatVMgZEKtjko9q5Uj",
  "key14": "6P95vohXKLyf9RrkYUK6CzX1Qev4QCnKfYiUJe6tPLTvnvEfjim79SbWVKVoU3LruhSZY5ZYKWtiTtf8yrvVR4Q",
  "key15": "3vBb1ebsRr4bJymYsQhmTDyc4xyUZSy5yv5itSsygq6ZicHxEXSyNPT8vWaWHx5nu2SwbwzYCBDUf1mC2sXP5YpG",
  "key16": "4cyb843jD27AdqDCewd45qT1MrUYK4mtDSgEpUi9NWDm7jwpf87UW8ZD4VyXEY2CwXwJxM9XvaiLJsah12AEqoUx",
  "key17": "Mkjq42x6vwmUJpZADvcmGR7WZnGCPbAr8qbUm5ciNVMt4wH8AfSNFXRPSkZFGr4z86vpzuU5EmZPLjQZwm92azY",
  "key18": "4t4SwQ1AZRP46xKK3zmNsA4JUw8v3zbbMLnRohPbp3jtMV5GuCjdqugJNqk3cXEuhSYcY9b7uc2gAqgL4D3Gy3cj",
  "key19": "rSxjK86xQv1iJDTBP1AJi9Y3ZuMrXCZKQpSnEwwHmvsDVzs4b9BQA1Lj2XtKs7stjkAS2FnNKrV151oUf1dr5fy",
  "key20": "3WnjKPqeZ59uRxYBAzDGcdJ6WxUKVJsF12uNYxv23sWWR7gQFfFrAgDZdiP1hsqsrQJpnjUYu6joW7UzTBn11n67",
  "key21": "5QMrY51AKyy31RKfTXB7gVCutJuMyJ6uvSstYfy5FnUrJpWgscd5QVoVkjHXERsZBBcCRmi5TpBteQEkC7LmBKkJ",
  "key22": "2AsKMEdeZFLRobtMJ3CGekm54rY8BVdW6JMyU7TkR3rECZkhvu4gwW1Ywn7dCHX8iyapgqBz9aPndvGdCJhjpKrU",
  "key23": "2rndKeuffMH9wLMwyo8yY74duwoyxS9BpCHVSSssDS53rLB38aRRQ7qPgauB8WKqYXh49U7ZJY15H4Ue2vPzGY8G",
  "key24": "5TZTyM5KhdAJHEs2kw4RemYPPjUxfZFeCJS1X6eJKWg8F3TgBntC1xWGrjNMTbT9FBAd7192KYeqK18PXBwDPZaP",
  "key25": "3jxa9kNZ4F2gPHjiGe5LJGtHsmE9PuoACs7jtyHUxJbYyexUbwjLMUfpa1QrL8H8NBv684aDLjKR8NEAiepMGwfm",
  "key26": "2LpeSFMEQVhGEcRtpkSsQ6CZJQrnCo4g7fm6895Bo2QVUuvedoP2bftQ7XR8HjqfkVDjs6dynWuaZQ7pJgQuJtTp",
  "key27": "D9FS6HQQfpEVzZoxyKnrwqXuPwNNjV8ARF1q1xPn7vozQRPxLivHDWzKaEEkEUdAW2mm8PH6v54U58oktHMZKhg",
  "key28": "3uxizABdbumh6767F1pW8FRDTYGAsVBLi1kmtW3N7Qixbk7QptVh4kCS1hp3AEkqhmAKUzFtopk8XnYzErbWhqYD",
  "key29": "67huB8dTj3or3B9qCx7wQiTAwcNGxohCuuXgVR9y1kvmg1XsssmztKrce6FjoJ1GABvy6wWvHyqyF8s3g36ycSkz",
  "key30": "5gJZmeZf5kUGCXQ5Padkzj1YsrWBSWyZQYDZ73mKLdpRPNx9D67VesHGMcUZKkwAR6cRFiMx4pEnJ6pG19pZLcwM",
  "key31": "3BVkeTtNg3KXbjuygTwQuyNewB2WNXZMLGWMBUmCM2LnUipDBiWNRxCy1QxV6BMZJbiTac623E8qXCcASvXJPjFe",
  "key32": "3mZQTg8Mc3iVFDvxQ87X8dzcoyYLX5aWmPL5C7vSKtwQv9fhC2upGb2mFz7Dc11hVJLYGvMbSfPVoLQSAF6yWdd4",
  "key33": "3u8Dux88WCUsvd5r3As9ogzGWBX9eD2F1GBKUQHUr4r6zn5xdE29uL9Jy7Y38AuB3fxdyTVibroEA5EsgTk5V28A",
  "key34": "R6uxc99CAnktLQvC1TG4yrDN49HjHmwjFrmcfMqLdxazncAbRnW7mZN9hudvoLZCfdcnVzfR2XdLmwubcCz5E5m"
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
