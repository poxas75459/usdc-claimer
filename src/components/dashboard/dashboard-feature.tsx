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
    "3jXfpGepULJtM94sYwr2q6cV6mBuBzYuGhFkM5nqkNqh4BJN6wytGMXvugJKjkfSkhFyaWbvCVzW2RBSenkGRL5L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51CgN8NAo6ekYByedhYuqQRTjeaSFTqPAiTjMPqtjuhkjQna3pqskvL8FkHmimnXyXQWoDcEtBHRXp347NMM1WQp",
  "key1": "29aGQSu9HNfRza9jZrkb9gAr39zpyx2fCXQnkNbs3Hyn1wEkjcKmFYdJReQqhe6MnYWu6xhu6TNRHns3dMhrH64v",
  "key2": "5rTQL2DDNnUtw47s6cnwbaAAnxdKkLFoSJcd8XVTu7o5YaQLpDDid51HZVPmhmWnHDt7Bx2J9Ptr9UpdxJ9eC4QY",
  "key3": "onGWeWyj2GpZYoA5ok5PAWoQ8Bk4mZJfMfEnKkbMeonAP1RCjL6nY5Nq1okvwMTiv3jDEtjXYhAxAmH1fGRSukk",
  "key4": "23A8nKF6Tai9qWscqnuSz3WwgjYzbEzLvDZQppQGq6ztfNdChq1cRV8W1mZoKsPszD3aSURWc8amQi6MvJBpdX1T",
  "key5": "38Bejby4Kq3fx1KDHQMh8TPN2s3EPznjmQScTQw2McoNLA2msidDvpNxnB8iRLhTJH7P7XVGVJBs5rfvQXP5V49K",
  "key6": "5yGZ6jAn2iSS8EbsDkAiaJvvwZoonzvgbNH8yB54ZHJA8dQvkLXcQoh6HS4kthTSrvznTT3KW39835jbnwGahayN",
  "key7": "2sNki4L9TstVJzb4R9bBLAYxFbWSs1K7j34PLWPMsiRSUPGVHjK6JjGn51AAyY88wnz8R8vQrofJUhn8HJKQtDrE",
  "key8": "3p5ySqzHKVc3e3Exb7X5vR3CDLs4U2tXqNMzYabdn2uDDUEi2tEAXbiKvgHXs9xGWEQGF6mQU1x46uD5yNZnkzir",
  "key9": "YUAu7CneD5pnHqFDW1n3mbbatZgLBVrK84u6FjC9dAFA6zcK6zkg4YFFVsCrJ19Dkoj1vL1tHd75c25ipTdtYCx",
  "key10": "5yb63T5MEUZs2qPDM34faQathV1dQKgm5LFM9r3K4jokapnawyKFV8rd2aytRidABsVvvkHZ6TybPBJpBUuJnHau",
  "key11": "55ymgqNvuJRckomZBiVexpjUwZUjvZ6KRo6KstononJhKM7mVN7gtwSx7RNtYdVcAQLYfQJuF4a1hL2zfeBGeBih",
  "key12": "4K8Pg5YYaEFU6TNj8EAWsqQeGqnZyYjcbYLLaXWnpQCoKdkVHQhwW7cFaLVreNNPnsiXqJoEjb3BKribaNt5bqDe",
  "key13": "3EtfWuTNn1w6jsELrmWz2z1Fw5RD4U2ZiuBvooSnezCj255YXhBG9cDSXyVDk2kvfuQEaWqqtdzRqHDvWja8mMfF",
  "key14": "65QcARJLh79qSdhJb9drhrxJJawyTZA2h5jmhZCoWhFUyne21HoDDhoAFqWhq6THbAkfoN4KPGF2bbebTJABvd2Q",
  "key15": "4B94XSwePHPAM8Uob67xQCE2YoQzR8ecyRVBXyBbhUBafmYidDiHg23SyJnrwFM4tz968ApEQYUZyUafQTSmohYf",
  "key16": "Cpfzw1DG2xThSiFzKw38ms8vcvrY2LKtMxrRQZ2kmS6Rw5kLskYxpMuGSyggMbKi7BHogZLb5oaBDeZLySCgBrU",
  "key17": "d5Mv5oCpUXjH28bNC8SJQV7DxmjUwbRkMhsCYry6yreDWHT5MAEW2KcaE1rvj92Gg7GuwhNHSU7aShNGcGAY4bK",
  "key18": "3oXH4auhEVKhCB87oDQw8YNjZMq6v4BvSpe4B1XYShvsnXXx79vzVa9zX26jDKP1kYETTEm45t6E9mWxrtqzviaN",
  "key19": "4uYH8gM6swbhAthj9BgQuotXMLGWhp49mZuVY399P2X6x6qpSTAKJDXUx7ryz1QY1K2F8A4pZ5LqpuHamNqMMXMP",
  "key20": "3vHsqqkNLKP6LtCTn5SF8HhytXLQS6V5HaPoTbG47HwCxJnJc3bA6DWDEoXfAxfNPHRLz8Cm182WHEfDFnWyELUN",
  "key21": "3AzV8UXp6LDxArkMejTs7WRr2BR4szYzQ3prCRy3f7Yew1H2c18pQifduZKSRzhajZ9kQH8Sz5drGtGmQAoePpxR",
  "key22": "5ywJFdewf2CBvihpNsD6mPZrPTmN5ByZTwFXZKyZoDPTpXpfA5SLseuLb5zUMPZgvmSa2nDCZ1HqJ7fbqHEgmN83",
  "key23": "4UzBomJaN2tSp7b2TsnMhG3TndrsrSEL3TsfMkZH9oEKy3b9daupb836vZ5ytj5ueSvdhgbiSK1dYug1NwxZsKex",
  "key24": "3iqdENiTh47m4bJen1UL7hL4yhKGfa8HWLUo49e2G3U4BSTYPcgLkzfxRpWCUQaFJd3cSmnFqud1p4kX1zmtVvU3",
  "key25": "47w47NWshwpTVbaiit1UmmvQ5x3VWPCJyDuWLdjVKMw7X32XzGKZ1cJTuk5h1JKbDKvdQMxd8K6fpBNhQ9HgP4UY",
  "key26": "4j19WFj3i8oUZaTiW5mkHP9K8VHsrfZvvRmTJ1JocWteSabt7KxxQrxfmSQi7hhx8CXF5WGwQ1PaxWwbWG13oJKU",
  "key27": "M3RYxYCKAqboENmXLmLfMztxVAqaXFJ7yVBm7sSs6J3aG8RC6PEoX4QE8oGFPGNvQXvWRca7x5ELsQqRvs4yatk",
  "key28": "4FZokJJWejSGtjUvsaXkp7XvExjdpDcGER6ob5Z39sv1Cje4a27CGCQnGwXjnQLKDG2MEpwkn5vzScyMiFQNXv5g",
  "key29": "5JRL2zhTEjbcx2qcH4a9h8bEB817uJC6CRrToiSPDjzrcyuhkNdjmtdxR127HbSX2cveDywVhEEc9k1QXZ9Ks2HM",
  "key30": "3dKmhfv6veFNcobpgiy7Nci9TRtamXPCY3vVQZdzw78n2QJmTaCtuSSrDzYovRLpzcxbi74zEbhk8fLTknmKgPM3",
  "key31": "46bNbur7pj2FYnrYicDhfewVfTVkgPKUWbnACyxNZFPK2VNvaU9MUH26zFQYAPXH1ThZuy5zLNGaJjnqpEVCJfby",
  "key32": "4qf3hhyYniwF2hnAoVPXuZJmUAkPCqYYTwg47e5AgDhmWCiYMUAV3t8XwNDwABJv3JfdjbBhfSUF1qtef6Tn1PEF"
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
