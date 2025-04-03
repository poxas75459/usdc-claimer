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
    "3k8LMYkzdTwnXD47RRAeAUD2oo74egzPsAXq9PcwstTFttSLAQ7Uh7XKKvjhu5AVUviep6jMxW2SWNAPCNyU7Y4W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "543pk8qkCcGfuoYA7KcNdYTEwr9PfegL2xpeAEsbNsH7ysujQGr7CEs6VACG1R6nTCcw7fBrkES9XRFdAJc3QRf9",
  "key1": "3q9g6VATKFUw46vPBDAmvn8DUTAKh1N6Xb4wnNfhrSGtVhTGx9qF35efFSJweimMmLDtCqjyfLiQd7mC9A3Rgnou",
  "key2": "4vK4s4abo56Nat7hLvrkoD9RYz98AZ29Ha3AtFo861Fz5YuMur4uaQygHJBQJQpxD66TxU1HDEBgsHh6FgBvMgG7",
  "key3": "ESipsNAPaSwrWaHJCTrRBwZnbPNPuLWCsqTpNEUuuZEcHsvTprVX1gGomyvwFpShU9Q3ShQixApHsE8k8VPiX37",
  "key4": "4XJoZUVb9ERtmhFPWicUN7uWAiVf63puv8Lk9gCjxhLTwmqhbp1nFWqTZpqXQVuMaY8bWHfzjkZE9RLqWzvAqf7p",
  "key5": "8UL8pXMoQPTUQnDxmCohB7TYXBFmTcrBuMkpyyEJPjHAcv4U1J2JdQeZQoCbhBBZj95saERyCTNzKZiT9xXKLFd",
  "key6": "55PABHz5xJspGC6Bet3ksULQV9QgUGJghuzMYcQHDSVqmRtHyrkusKGkvSaLZYdRM2aZuBRXN5dRy3LfAvFW5fQz",
  "key7": "2c77Z8qWcVyEhe9GSN54dhrc9Un5CewcD4qk5Dj62MuhFyrTuWvHmnLXM97iJ2zjuvZNfm531d3PJYP312CAu3b4",
  "key8": "4zBChjst8kfchKSLidtK1YjoqrCRmgcj2B57Dehuijf917noKCAR5yzhUqvRkmPrqJJp8PFPCpqxZjJec5oC6AGG",
  "key9": "3LEU7A3wpk3oRRpYtReXTdPxsqd5ib7Pn6RLAoMYLC44aKT3rwGQxSM45c55m3qwmU665mrcXXVgCjTbKffrYT6N",
  "key10": "4T5k5KTHoho5ssJNbNRVx5yQAMjTexQdssiLpGZZFSF58iemvsC2xVNFCfme3fKwSqhUpi5oG1H59jXQdHLRZB9P",
  "key11": "63vbJGYLigCb4KbXt6UoHURdVM4rVMPSzE9gqEbCc5QJz12vvDAPTJPoMCtaXdKy2CtAxNa8BhrGVxJP1mG9Femx",
  "key12": "5nsbkJWTb9dZPRZsruaJFVdKTthGGd3Bo41MBtxqW1Qo4GpXfda1MBY6Qx1gKxkrkbaZ7fbcSZdqCkrcTuSjqny2",
  "key13": "4UpwjvmHWJcP3YsTyfcNUYpRunoVZDnMiLR2Ns81XNheuCS9L6oJCfbNFFA1M5kj6S29H3YSJaJSBAx977eNph77",
  "key14": "22vLSfkReM9oFLEKKuBEba2xXXjtAjrP43Kcrg23Jh1qoFemHUg9W4nyKDgj9WxYd64gCTeddoDnLv7jmwq8GoA8",
  "key15": "gRcHqP3iTovVyDHL5eXfU7pqhgtYcz6XqGNRkTJzZNuxVhymatvyNheHSAptLAiUFCXCkzPKX5ihuoBFgxqYMA8",
  "key16": "27Grf9eGVZL28wMivwHGboHr5ySH5yzxuW5Ws5KvePxSwP8hzaQfeTNqmWcmUUPe6e7Uyp6jJgd7t3Rx7cYkvwrA",
  "key17": "3c86sHSMozRU39VEa95N52H5KNikrGtbwXp7kKe3DDMaP6gFqFF3B5JaLYuJhfo3HjFL58qCQGmGi42kV1qT9oDf",
  "key18": "3taJgJdRHWAbFtcRMCBS9MEpJpwZqPjwJufumAzi9tqosWMRinDZJZVC2m3v42grmaQKxaEommtpw3xNRrttLJt3",
  "key19": "3m6nMccvNAeUpGfDNmoUhM7fBLmzmoT97QeyqcG9hmxMouGgdtHDbYE2FXqGbWkSGDSAc5JEmpDuE7HuyoiC8d19",
  "key20": "4BUbWx34MyvoQwkDWrrKMkiSdNmrV2Bp89Tdy6seRRQrBKnHxi5m75yreqjRcuTuv5ucmVtTPxgEPQGJsoioCmXB",
  "key21": "21STVwZAtptHmpRpW2WbgNfMgx2MJMZEBp6g2UnEpTP3bdzC7gtQjvquHJZvNfUVQoAeZV57qjZvrhgaCfxV1v1a",
  "key22": "4dyiWvfK5dVq8x7tPa6Pa2wAECZk71t2jEswB1iQsWtiNUGKJvdwPMbW7KjLFWRLpbYZ3RFDsRhaJmopaigXX4MC",
  "key23": "HmH8494bj6v75byYWDD3Y3XgQr1JZeU2Gnp2E4Cz6yWWXT9UvKCUbad8H3j6srniy8vC5uC9iBxehMRbFFRyaTn",
  "key24": "E46jGNkviDF5nKVnmEMbw8ZzWoPrLCkDqGzpSERjMiThDWqxNo87utdiYBfRJqjbqQu1miDZAnDLSVdcL3bij1z",
  "key25": "3CMz14SLFBDntHkaAaRGjJ9Dui1h8hXv8RC2RAu8Zb2MUSudp26WEMsG1UPGshcwhwxGo3R8gvR5Le485Z7t8VvW",
  "key26": "2u9z3TAeqF8Tbc34R7HF4v4zvz8pHWcsnkM25E5UwmFvTayYKBWqSA1wkG7cCUa5DMedhvt5CxCjyceMsGs1Ww8T",
  "key27": "667D6GX3yW3z9KBwj9nVMgKFybSf4v82qW4jHRHiv7jRoWtUM33Z2tjJp7u7uPzFpqDbCwNvM1k3U85EewWt8m2F",
  "key28": "3dCnEtPYwQZYbQTTgdudiXP5FyFLZFZvgnHcQSJPiaaSeUA5q76U2zuZhXYRasQTQC5uqkSZynKysPFhg3NiGKL1",
  "key29": "4qnVb6cSPxcG1SccqtivZUtFTRhQkA7jtMhp3UGiiWxnwDrGuyPCrX5zsX1CXMoZEnGYxuwX5m4qVDHqaziuDze6",
  "key30": "5h1yNhCAJ4b68R1ZS2mCwPhmpxUajTd7rZB4iCwexSKKwze1UrAKJTgy96NDaJQZRQBxu2KbgTrNw466bkv8rLUK",
  "key31": "2376eXJTCSYBzXT2qzmit3ywqNFt7jZbmxHPLUVraWFnax5vYLNW3BrxihGiH68uGb1sR7LEoZnKw2MfjrF6GDCB",
  "key32": "3yergU1FjzpHGoQnstaWbx2fiRUJCFBLfD1uMWgUV6NGggWwn6aknRZ3jpkyv7RekBSVsa3BYst7bkJ1kp1G2nw2",
  "key33": "2RUgHqy3fHRJca1uS7TcbQu1yrNazQ59JJKRrqYCtH5AzDWNtaPJjmtF8vJMKvWZNDeCEsA8mBZJTojRXVCiR1BM",
  "key34": "3J6HZ8zaqQV1AqGMoaGJFW7SbWr3bt5FkHAuh2QnBvDWHnkghHtEkwTxryHYxkURrnQijuUoQLzwNpbLc4PT93dY",
  "key35": "4mot6DE53YmNAMkzCtRTZzr72D7xHYxVmBjJSHxV4v72GKLUPNVRTZ1hAGKSNfpxryKQbX83mctZAFugqbxXLvie"
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
