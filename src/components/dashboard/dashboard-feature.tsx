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
    "hHTDjAD9M6v8vnWAFBPsq48N3JZKppLRgqacsR6Xuz7tfre5gDubSyfVqJXpZ2zZAxNWC2uov3RaMhFMnbB9omj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P9MGKPTRH28DWTw7FroX73Y3aeUoW2FDR4KT9MVVDbLF4SJVjWUsMkXasYfbdzoBzy1vd2t2RzAu9VbqWuu9BEP",
  "key1": "epsLfU1YWAJEHHPhykVzukRReiKMim7WokHsqne6Tk7DRvPp1SsweP5RKWR5qEAiRcWJrcW52EiBpHkt487RG7n",
  "key2": "ZCeBN7ZGdhGkqJ1a13S7DEpouAZk7DojFzMp8cEfdo8P4jWTUdzxhwQf5vZHXC8okk1ajmo1tG8i878aXKS9K5w",
  "key3": "3RtJLDU6e8vC8QuTiHPYRwKvz6d8ftsxinwZHm3QFoEFTFcuHWSLTxKGu3FBbvPKsZgZz8ECJRQtNCer5P6WVJ1z",
  "key4": "2rM1nUUXE4xjHsCowfkyUpsASZgczY95jurD6QbmjavdCpcNm5MxYurgjUEt22cPkHrfhomrnRJAj6YFnGmXKCMR",
  "key5": "4owkHJ9xF7Je2qxErw4tgbUNCgJKX2WmRTBpZEotDx1XT6agU51MyZXsLX6GTxLaKeVk1mfnZBy1GtHSiv8DT5HU",
  "key6": "63sWTrNG7KDeodM7H9JkzwVRnpSdwkfqnzN9sCQniEhH6p9JyAW8dSJAEMkZRWEM6EcmaE2ze2KBxheHERbUsusD",
  "key7": "5rkkHfawiMfdCf34pKmXNJsqFLAgcy6xhYEvSJdB6QYzC9toPe7WCrovN2YTWYFSe5YHzC7mKzc7EUytne2aqXfR",
  "key8": "P1C96dpj1xKAzPKj5eVhefVjtkNSYdqz4M5wJW3g4DuzK1U2GvXFRcBiPw7gKs2kX5Fk9EFFReQnNZ7uFxy1nAb",
  "key9": "5M26ZBY6snJxtvqWvMYqzDtx4Gi36rQx9hQS12LqaTFeCGvaRuZs4911srpxn6ea5g4jDW3yzXQsuxKiKBfmVwUs",
  "key10": "5mP2dAWw259jxeUrw89qdK7tqm2TqRhZ3NqZSPEMweSGkerBi3SrGUgfUp5w1qjuCTA7FtMHdF7Wr16aYnw5kN31",
  "key11": "2qTP2aw2E5ryTn8jwPxveZcmE2EExG7fAo2Qt3ojTbG8DphfQuTorf4qfUu3c6u4sB9scJ45H6R6eQrzsSkbTV6H",
  "key12": "2HN1Ne3yuKFg2dMccFRNUSRLZuPqstVPrTUNF4FSmy9zb74ZhrrMVsYR3sE9rC1G4HEQrCRaAwyFiFqFuvpn9AAM",
  "key13": "58V1qNqx1KhSxQEqsVM3aSFKPciJEFNavpTjyhS8kiR46TAifkJ3CocBaQgP9cBUhkHtk8g13HY9NYnz8E2ecpTw",
  "key14": "3gmtzwbndgX9ntnqU783affWShZmMuFhjsgtfhuhTEGPvsyXKF9ZAaATcb9Tqv1HHQ4Syfo6gpim4QhfSfARKkj2",
  "key15": "goSsxE7rbkW3N4LPhggMkUUwzAQSsMcL1SvvCUXKugXPLZzykUF3gcg6nBcU6ux9M4d9zNmArwCrkomTU5nqRky",
  "key16": "3aUByrnX7a31RoFad2ug1Y9JsLpWTpNiwhBfmAueyb9jSZMA936ukGonRa8sdBDwwJ2eLJJAJBpyBDTrXd6PKLSc",
  "key17": "3sDkfvoumgHGCEGrxYvVjhZ97ZSXtG6YDgZaN6c2tLckwvd5BvkubmhLbMiJmeaf9zhtzX3hraEVw6BvJpgu9kuz",
  "key18": "5iD34inBVzReY7wNC2pwVDSDZXAkuZJenNX7bVzBBZXtAxGxVMbLvtZgriB4N85ucqjP6wcCb6XS6xofDnVTciDm",
  "key19": "5UGu6Jzb4Xc7QYsgHy2Dr9gxR5QEwJoDdG2qEPnswNtPEbQSbcQSQh8UBHayFNSjy1TpYV1hVzmra6HDVBcLDXpw",
  "key20": "2cjhmy3kKcizT4Zav5Yi9URG4XM8mfjfLXpCeXrPtvdidcqPRnpv3DvM3deRx4efYBtoJUaWCwucHqi4gM983Ai9",
  "key21": "4q91vhRXBhnwh72uynMszyRFCGDhNm5Gxg2HnKFZtg2WgEJ5xUPQDrwWPT8o448p9VTExKSoShwcvZRsbzva9HrQ",
  "key22": "3mQtdAcjiifHbddEqwvRmq5fERmCRrJMmdaq7UiSp4Bm1jqEFW3ac2da5J1rQBk9sum2mWhsnbovkNa6sJBWEoo4",
  "key23": "5MYrUMu7D21weyKMp2QybxZBL5uKCEcL7DuDuo78q6vFpwAkKQMNDJEEKJofxVQ3hwx86oAtMe35RBadEGKuVXE2",
  "key24": "3Y7TPNtPLJrviAyQJAfAZxt92fRfxJ1qz2guT2EqERktcvKZ3tevi65upQEx4cBs1nKLSAbjLWX7RDtu3yxSgY3v",
  "key25": "56tYQ6jwLiMpEx2EAi6Z4SHRStmAY7MDfQ4iKcWszm2vzLjdcfYFtrmYY3fLK54NQVcZmU5JE4eyXH6Azv6RB1PC",
  "key26": "3xhuZYHrLwvtpVoe8iakQ21VhvzkxP9YZBzpQfFJ7hkPr7UvjFFCLECaoeFoD6jNE9dbYZCgcr8MEbXTvWqp8AhD",
  "key27": "5d44iAx4avsxmGMLP3g2D8gJyqguMRR6hSnzx4jHWBhDRKkqED6HymE7mcJws2SP7eMbwbncCu4xF854q4kw3hJ3",
  "key28": "3XycTAydFxAVxgGfFnCV99Z4eg2nDkGQi5xL2G2mvVG69EmEqETEVxNWbU6LQPS62fLEhX4rCgV6XggovRJ6kvxv",
  "key29": "udXLfXNyvej42JQfHriMXfsZQ9A4458NHcDmX8mhV1i3wSFQd5kKdBHY5tjvC6E2jN987D1fb8YDtfYYGnfd1gw",
  "key30": "tPvXWH16ijRXJYRFZ7aY5SUE7KcKQzksnLaioRgPq27YH5qgVP9LGmEdu3uZRyXqAZkd4YRu6yzBi1wq3dh71Ky",
  "key31": "37Jkc7TNpE9Hci4Hwrj5TaRUyyC4PAttQmoKkkGczdmTQpP69AQtk6LbyoGXDr5Bo6V6rFyY8TPQN1VQqyckd3LJ"
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
