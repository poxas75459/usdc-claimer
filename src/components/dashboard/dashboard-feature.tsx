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
    "245P27NtRNQU3NMsCGMetZaXFPSc6Jor1fbUeP8kPSmiGf8nsckYzeL7yfQTR4LFgh53daAn9LTpoqxh8N2P23Zo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZXVahsniH3woA7kEqNT6461rqGBcuXe3mpU45Z1dWDrgh8ioE2rw9zdANmygEvLFSsrwGvcMo9gYZPHfQMUr4Sk",
  "key1": "2dCdJGBTFmxspwcPmCnKuUrhir4ndowvdpZTxZr4XGp41oQPuAJgTmcqRYvddQEYibJjxGfWGqNfsSRqZkraPdgc",
  "key2": "5F58M2ARvnDpYJEdncjPSKmgQdXYmjtCnyZUf5QvMwdhqyTLzJeuJWeREZdUYaDMkojqZVHzXEBSD7eAuxhJkGTd",
  "key3": "2TsdBppHGu8HE5We6npYhcC4WQjeK9FCnvPjiaBtxeEfERLnmbG5jgeQAz9uEXtYa886TGtAu5qAXEk5AvtYuuSq",
  "key4": "3WKZUeySh1QViptF5JapuKFffFmbGCBntBwLFsk2HWCxErAFuZmsSYBByV8gBb85KiSm5vgHuDmedSdzr47g13s8",
  "key5": "4y1NT9YAD66Ci1zohX4qBKE3WZiwkm62twdWRsCWcn2y54EaaemCxgqWiLFMQL7qfbMVoiQDetEy494oEAMvNFLY",
  "key6": "366huzihAr8hxZb44VP68yvrrotWGa8hadp4qmgxiTTD76rgbRbpVuoXLmg82i6wLULk12qifh97FzFzBJBFGMHY",
  "key7": "2B8mfNMzQkPaemnvcw7zofoHntxGNmUR6D21V1tYGW9BG3Lq89SzCpJURTu12NMqa36K2B6y5q9HWjSiHP4LhsHp",
  "key8": "5huLT9Vu22hC2fP5c67P9vmNiNB44jmKq3fXTqTMqsAYubbcvKvCcbBSD915TNY92jRv5teELAYLqocfaSNKc7DF",
  "key9": "4RgL3qcd74ar8BELQAA8gBMudYj3TvC9Me3nNZZAs5ne8ozMdwwGQuoitVGfzQWKdmuaaRNVEXj4HFkrq8bP2P3a",
  "key10": "4D7Mhog53uCDfKzUs4UaTuHfVC8FunXJ88U2FhmKPKZAMukMRVXVmgp9C8yyX45pa9aGhK4Ma11Q7nhB2vQq9G1b",
  "key11": "3ygsprRuo7Q2uHmnG2DufoAo8xAbnS25Q5m7Pmhwgy7vrpymNHrkwPc1hff9kYS6j9aa89pTuPJeFta9zDqiqLEZ",
  "key12": "E4vdLzYfs6KKJnQ9Z4r8SJPd6kVsNcDyAEEotcLz5nj8GfdPajf136c8kSLknmFoaYhyB2A9vr9tU5V7aRXRzim",
  "key13": "5reGR7C96ua71ie9YtcQvvewZJQKFuahv17WKjkfbmB2JMhKPJtDug27Ab3Dk4QsiCBWQstPeM88Z8hvTpq174wV",
  "key14": "28XqJe6SVwmEbxjV4yyGT2P4DREM6HfqJPGGznqCyyyw7bmGfUohVXK8aBu6SS74hKpjUMuFD1UNe8oKgzLZWwf3",
  "key15": "3P7GEgP239S3DgPKQg7u9oTyL9yk4ebhJZq9wM7ozi9E48e8GGVmqNV3Z8NgdhtDUuxnKrALkLYfBH7ndTeqWTcy",
  "key16": "3pzwZt2bqqJHr62JXxQivND8FSkiywU9nG6rfEsiw8nkVK1R1aGL5PEYZ3JVc3L4ECvkgBpbKofNwjSYeXtL3LMx",
  "key17": "oGYLhozu46MnhLRF5M47ak9b7bgbhVCZLqzqESgBnSQE42KkrsmdrtZ1vrkmG5k2tbvtA42dfrMvueBZEcSRoK4",
  "key18": "3ZE2etg33n89RCQwxNaF5ZLnT4SZJDvEYc6apRhTvc1Jut2cQNjQbfubhy6pqeDnc1Aa2XNh27F69bP67mCrWuvd",
  "key19": "Tue6THo1eAyTxCWDnNTBGk1pxoxFvtUTHhMprcBFWKh8yyatgHT6iGRjgTNf1KbUUdepeaZc3We1oaBmh1VhjdU",
  "key20": "FJLz9ZPjV2kxxNh3hNwDDPXHwekNxsJVxfBrrvgceKCndavd2RQsgizjk33XPk5qS1ZeurcSGwunGuX5oU6iBub",
  "key21": "2cbthkYATdGdRw52jCJZPQ21bbW3TXGsVsf75S5wcqSa4ZH4Gv6boh4WGS8P8vaPjLNHgpWJPWchGJjPaZrcEQr7",
  "key22": "2kmZ8J1B3QtDeQChMenzwZ8JehjgywF6gdgnSA5MfHX35491Vv4AE7gyBE64DseS1qo1F6pUVk6MB16bzngq977U",
  "key23": "s3cBGyERgL5FV8dJ3mh2MYFvs2SzHAP6KLfEYB3oGUa5xyvnxDC5sbebGNngwi8M72i5gC63D5qvb9zbUW7x28P",
  "key24": "5W7pszNaptjLuo5L2AaevLoVAvtzeTMQy5hoVnxQnfSSAzbW1TE97cepuRbd1BVv9fNv81gAEmEBQcRUZbMuTrQR",
  "key25": "35vfp3ZQtSqW1Z4fzzmJuYQLstYhhvzgtXtheVonJ4QrU4BWLneBtHL7Zf2gauox2hetE4sTujnGBuoTahB2ZY2B",
  "key26": "5vnNMamGMQC4NkNdHaWoNAFjQg23vNJDZ5WUC7MP4kWzRrDUj8x96Po8eHR8NVQ2NaJzHvdYctPXCv2bikMChFa6",
  "key27": "5Emv8KGNAuKDCtwhRvY23c7WL3HjBQJEaaDQsEm3oRLYoynXBQzL6uG9UaTdivtbzRNfdpTCvtYy2sdwpj4AyA8p"
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
