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
    "2E1EVbakFxchCSdRF7ipUm19JJ7fkeFTJEFrnDXbUdNkqVLaZjRvkfYcoxbsnL6REa4pwccnX1a4nnEhdgzGPHXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ucwtbc5bjjdkqKs4Mj4JhtpEe8SWSUejuH6m1Pt1gmsNPjgExmHWNjLRqqTSCKqDdk4P3eF69JFruR1mjxCmrUS",
  "key1": "2iBkZMzgne1MAKd3GtqB5VNoyESArJK73yrXJckW2HDVHmFf8aUpSq1mYwyypqARkcCmj1sGYiEdJN6sq9ERJYia",
  "key2": "pGE3WeEbzvKLuRnj5E9C4fh2aofxtY5yfUqG9ND6XywWLHcw3CenCQszmTKqv7PXWNoXFeRuhHnLbjEHNSJ48h3",
  "key3": "3gFJQQiniCRjBUrSVJ2XnhzprAfWwcXdTmevLdjC94RsCd2b67RXJfXCbSCvTFnFex4TCuFZfUXbw6uPo3pirQk2",
  "key4": "RbAn1pajzk17Dp8YToBc4jAYRwFUxBrcdsCctN5VmN9jXX6ZMdi7YYpHikvaB8J8A8sSR5RVXvh92SS1pkSLWkw",
  "key5": "5H6zwFi4ZckfXJuhL1HRqVNz3RiewP2NfNMNBufzuV3aA8LhnrYtKxGrHSerhZz7a87Dia3RoNC5irAjnRZVRqEV",
  "key6": "2fY4839i8a723goAc9Tr5aBm6EoVFwMfmAqzKBUQVrDTVzrqzzJg8Znzkt6FNm1ap1ih2ELrLEL7biY3afajb4yP",
  "key7": "44B5VPxn6GmiWtsHoQQg5fZpZfnAzeYWrbkQQtRtPHY9Mk4w6ZsUr9amtiJ23wexCtMCSA95uiwrXj1kLDw4gmP4",
  "key8": "2z2PcayLDKHmPbCK7RgUKPt4dJRj7bofU3xYt63XSF6W5o7X7TrdiukqrCzyJKyV6oXUVYef3w1HVMLPSNqwQJK7",
  "key9": "5BPR7PAGAnHgfVgMB1ALGRmZUn74d7hbjskTkArZskHZqd9J1MLB13uxZvPqV5sibT8FJLkwwh23iyWBDrTFVnzF",
  "key10": "yX569iD5NgVAsxdFNxbDA7M6aFcoNznR2TmBPnP6QNhrFb48yptBAaF7RtHWjWhuk6gPVKKzvJfG8H7CaWXZCym",
  "key11": "3yJFE7mPrnBrDREGs8GtxknxSUHMbpzxmTkgVcfanyByYLxBMZtgxSjV3XymoaqX5qBzU7brAFamAHBLQ8aLqL5N",
  "key12": "3jkoWjQ7kjfQCNQiLdJKsEfPY2hv9PpqUpWL15prxGmAUjoeHYM46iFoRkdFY19cJLzxc98oaFTqy57GTTSUoxF4",
  "key13": "4KbxFBYiwWMFXcy5LLF8Zf8cB7CwZ4TCMC4nN11cbKEwZ3dEGnzhPf4GaWJBEY1T9WtmbkQgn6BnMZWm6BV7Ps55",
  "key14": "o7x2pjaoNtTuAtNKiLFAfmJ8Dq3QG4Q1sK7jD8ALs79USuVq3xa83YeXsidaEof3DQyC5sUY52BkVerawf1zm8z",
  "key15": "3t6KPfrrTSwHFHRVhPVmZG8B2kZjHJvBoWJJKiizXWJbHRVWffQEWnZto3Ajzhf9PAhtG7mgiRksziW3zSQKzGph",
  "key16": "LY2hRjFxKJ1Np7adsRiaHtdZgRtMKzZUCdif5skk4mLVMisiAw4E9a8P3rDW6BVCfP3Fo6vTejjgPGgD8FYFC3f",
  "key17": "4CVfHPChCA3938LEXB1oTomXUFDhsaK7eDX85aKPbTxTndF3ieVXPPUd2RjAYV31ffJ1HgmAWQnMyrPkuo6QE642",
  "key18": "2Low34aRx89qGaqti87hUpMc6drSg9GQaoYEnMdJYVWTHUWsGYqznegeiKbbncXB8nPUbaCSY7SXBgBUtsgDH3i",
  "key19": "4Lz2oV5MvWQbNjBzZbQFKmsaRN2sNrd2CwyJpxgS2CXLbjP1ugnhXD6XzQtEqpkdS4b7ZFkyLh3dh4EJJZ4c6vPm",
  "key20": "3tjjs3BkVEDyP3khcqkmbV4nCFG3rZcQYK8mnSgAbxjcNCmUoo6kUFYRFi4yD13iqKvjPkZ6NuLqETSSqER7VXuK",
  "key21": "4DWaeRbYXDxsvnP2w8K5SyJ9nAbHrg9WUbbAHP6v5QyS6fZFkTDCKSxz3LYkEVbfQ3EC5XTHE5QsGVML7f3driX2",
  "key22": "2kCMXMboHmBWity9um666jt6NRMQcXBVMnXiCmfSnh8geffmZ3rBqDcMkUz7YsW3BMzrrrfKuxKMd3aitPz1mm93",
  "key23": "N1eBR5kcgTifDXBQVK6bwgcgrQumgghBhBWoR6e1hihm9shvdwFztr1JPbcu6Yxggtj1Ph6h1zzEWcXVmD7ytxZ",
  "key24": "1ajt31qP4MErZD4NF5M9nhEWgGXseEUFeEQrSPdDs3TDtpAPgXLSnXyQkBXHyGWRe3UQ1ePJSCfVaxaW1rz9JaK",
  "key25": "5To21rb1qEAvsGPmVJNVtC7MSdFa1BBpFFtLMkSmKEvUdNNkzCLYvvDTXiheknaq4nzLt8pcB7LtoYuUpJnSjD8Q",
  "key26": "3qtrqMBBk432PHwNmMFRDrCyQYqvEhMiARpxBXq5ggNXRtx3NG3UqjH2q2pJB54C7b8cubkEYoP7GsUhEPf3ap5q",
  "key27": "514umFuyZf3XVNiYRjturpBr6b9Uonoukmc1nKvkJRqXqo9amq8sEGgKWJa3DtDvNJZRFZD152wJgExHnF7RijFz",
  "key28": "3p9QF1XEghVpb98rPAdwkHGBzrGeNywbbdrUENWBNrB2dVWA8XQfyKe6L7JqnpUvMik4FFoDu9q9rcCpNR1ExUVF",
  "key29": "3QGVpHJFJzDu85CsTe6ADJFoRoZMGRHw7rwBR4tZQpyx7NWFB2fL1xvSiAEtgrQWtm8BjpoS4LBEMhu8kykFNk2k",
  "key30": "9uhZk9hzN64H91ruxUFhvkY5yS5oVrVBxNKvEEuhta1WQNWDhk69HbQFK7yxEw2LiYk8SW7p6QeSUZ3AFkedogj",
  "key31": "3PMw4EENwznkaHw1wg56N5eBA6shEdmoy3KcifFgUPbn4N8ACbzaSpW6A3RA4HTtTDS5PPBisiRcPuxejkAjTxbL"
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
