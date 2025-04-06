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
    "49Ct55dtXke9vvgF9UKtCpjJjiiu6FPUh1cKHG1mgF2trTRzuyunTFwcL1ivLSRcYiDGrm8QQ6SwtFSsay4ka8o3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PgqkFb9oKAt65rQaCcEuWDno9U7VHTH2PwPyRMVJp4G8sRi1yxxsZiqdJwnsYshXikrirS9qVQwFB5LqW7KgHD5",
  "key1": "3wrXsvSGL6ry2RbggjFMyMavFiwQ4DveKXhf3uE4X3q4rKo14NgAktJ3NCNQx9DcbR6771J7hNbhyzVhS3EjSDnd",
  "key2": "3zQf7EScDjyYY5KcVwhAPUT9YCECxCKFXE41sbWyiuPrmTuNSGinMUtaBt6H91mCBgV5gpw4WqA5kN4AHB9ExbU8",
  "key3": "2TtDVjLZUyPtof9htEakLcMPKQH1RJ1L6tkJhqTPRY7qyzonrTuqTCfagVxSFDySeVUpdyaRAJ3obe8z9sN1bgKh",
  "key4": "4UnrFwF44A6wVB5wm8yga6Zst1FWGfEyrxLRieDxzXKNjckN4UVc47Ps2m9h2FJutynBt9NpdZHWJqyS64Ww7wGZ",
  "key5": "3XxhJgh1BEfh28EQZtcp6AmkZgRd2qWm5JbYv7uU6tbDeU2QfSTSBdUBnmFzynryprGEaLx7sKeZ8uYdgPRAmj8w",
  "key6": "5655iuLkNaph8cb3kZGKz6tBgXYFggzmM4HMZws6SCteDf94dE6H2iYVZjec67D3NfCXwHD62z7rVG1rUjuDHvpp",
  "key7": "3DsvtRCrVRThTapEX4dKgjjevp9UuoLvRdWwYRMwMfRK4hVeAGrHH1c52qGJS4zHdHx7XSkF5kWx5RKm11yEtHWu",
  "key8": "41QYvR6oSHCoRyT1nL16Rg3rsXStj4XrZvzJNYYCdyBtWrqPCygRC9j5R9Aa7cmYGwcY4qn9Agn9cayXPkXna7Cd",
  "key9": "2tsw1qYmB9EShjUWEdrefLW9u14DVkb7xfghdxSXe2AzV32Q6xJkbUKLYxUAyoie7A68uoA3ZZkhKh3kUkX67DYp",
  "key10": "41XqAAbpgV8g1W2TQpdV4vx1H42aM56QCW9ZftoCgGEkhPbnaTYvPhSFZiZAwLzt9cZKyWL7REBRdmrFF1NgWUom",
  "key11": "QTtiDtVLVmCJyGVu2kQS4bQ6HQpUpFJ3369ZPSDPKqBqnQBraH52dihbobAqHqJvkeCAihC8NV7mjGZb25fDiPM",
  "key12": "BB1aDvCDSiMb2oiXkzeMmPam8h5x9bQnRpe2Td9fPNxfhw8LVRYMCCwsPA8QotrTxYPEUhBrCVKPWdoA7GCLEEL",
  "key13": "5ZKqXQR7wwtWdK4zeAXYe9Z1JdumY41kMXFfBMM6ZGW6hr9aHaZCzCaE8HsBJnzsCD8YRVfxQNsrJU7mautcmy5",
  "key14": "23qfth1tv2VjVr8XbM4yYYrrMDFLL4m2gkAKTuqGQANCRgFARsLhWPDwPXn1uuG37y7huqtpGDCeyG7zn4dDFPsM",
  "key15": "5Mju6V9XsYiUAmLzpJmoh6jMHEszW5U1Vq7C4p2gfyc814Foabt8kht4smieQrCCt4NBtX6kVfT1XfM96JyvuFLt",
  "key16": "3c5qcYUkJ9foQ2tRFWoJ3zJJm7N9D68G76AbCiEhcTxSKRS2Pq4WP9xKqGU6GD3oe317YimMC26VAcHtT4FdFDNK",
  "key17": "Feh172acKEeT4Gvp43QgmLTo7j6BJmhTssAMyhoUaRamYsJotLSfkpMhN9kiqWU2kK3PfcG6vP5ThucnnQpRoFr",
  "key18": "4i6YAXUZhX7U3FkyxAawq5HvNSrNYnNFVqThnXr82TmZggEyJXthhqi3ekNn8VjbZCXUoGbQ4Q1CE6hrqeRyiduY",
  "key19": "4xDGP1rHg1JSabLQX8xdYqMrd45AbJa4HTjcceTsJmj5LjnSS2G1DNngE8pe3TytxexjauVqfyRdtvfXRRo6YpBH",
  "key20": "5sovq7yGEn35k9R782Be3Tgu7CPXW3yxtzh7Q5DFW1XGvkg6CH27qxYNvbuxM77qmjuFKbBGCP6uJzyKKsYxhwGb",
  "key21": "5kym4N6RJyP7YN6PPyJVwV5DogopchtFYUnPzjewhw1QZ7FbVs3J5udh4x7ytn5kdAHWfLcp4Z58ZbizyVAV5RJF",
  "key22": "3wK3QrHgxwqJs6Wxyme1QwXDi45YLy4Bh8HRKkpJyzhXouc3eNCKmGtjje3RQaYyZNPpgHfXdwi5BPh5wDrXCsj5",
  "key23": "Ft5nkqP9C1sss3Xed6GbDsbMqyJpRqAnnsvJNfCx3szjWDRLbspUehaFaovsazLLJvrJD9JSymeEjdqUUTFm8A2",
  "key24": "QcJUDi8UF1ucE71BbgMhuVscfTFuipRe6wPE3LEdTojWAB6kUMZeJgcoPt1CGGfronGdQn8SwUJEgSYADLV53MY",
  "key25": "2G491WNuxUmn4cXM1tqo4nbsMBbptnBbALpbnBWF5RP1iomGqCRaeJWc7DzSdzWzoUrQNL7CqTC6vj436kcqwM6L",
  "key26": "2C6aSZeuJypiw9qBz2kS41ugb23aB5dV4GRcCon6fiFSBTrCxDHwYowRT888szfBQ9E5tmH63tbsZJ3MQnL9dtKi",
  "key27": "gmQ2AZYU5JHgAC1KYkiphGJWTwj8iaCnuXsEVaHM54RwiTuHTYgAN5cftLpHnEVegmDTQDukM2tGje9SBfA7DBv",
  "key28": "eyjfE6jk4c4qF8Yo8EHjeeVkc7yP64mhbp4PWgkHZbxnmbpdRDQQ5uPNxXXCSfJ8ucWE59DoyT7BdiHTaL5J1vb",
  "key29": "nHBCYcpSFSJj2FM7DQUWTPcwQX84Cku9abkLsBLKsS6Dhb3bZPFeDbUgnFNS831LaXfwsXoM3cwASAVJ8tdZmAs",
  "key30": "yG5LFmykkQwPa1sZw82Fwig2TpgZJnQRRPFStujA5qHZ7Yxv9cVJgQNujLKSfaUygDkCXLZaVQnyBx9f1CPbbmx",
  "key31": "F9FALusGPTFiJYWYEwJ2UFrCN4o8KHdpdtrsgGQVVhLcMtTurWqFsi9Vkxewdk3KCNGM4YMMfHHqUBRkr4uevVM",
  "key32": "5Vzk5UambPFmLVPHNxMpDYTKotN5USfqiB65wWfGrgqzDBMxXVUfXmuEcuNNp9cRBnLKvJen7UZ9b7AzKM4WMrs6",
  "key33": "qJ8vGkJ3yHCS3JMc9Rkw53oEEP7e4wDen7y9iqG1N9UGabguDC8owRYD4kmEguJskgeQvm4nojrNuQzzZKdUsNH",
  "key34": "2DUEYqjC6nq3efvCqL4KPF2hof9mC7sxtUoUtd5tMzFf27Tv35esgnhgGdL8CKbCymdwussu4V691eLYFBdnD19h",
  "key35": "4yAUDJJPXNbbavsby79N4yqMLLiMFVsMbfaERKkCt4B9eSaJuEz11DLLLzsc7XZN99gi1gzeroMSfYYmDDV64eQC",
  "key36": "5oy8t3rthH1QM8TCDodQVL3in5fchnA95r6SzcneJvRczzztvjstUB6Hn35V3oNbX7ebnGo6uMduhSM3ojqfX3PP"
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
