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
    "EWt4L3kaQCkEZsC1bMFnhxYGSQD2vyK3VqjKiHRZWsJVR6vGx7iq9gkTX11ugYKZy6tVcUgAGv3LsrZwJ6V5Hnu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FpgjcFWXojq64W9rNb88zFFSdbmxAkHiMqA4XRAi6Gk5m7mTLf23SSGsTPJGbcUYE3YWsrEH6q6V3HX3FmoVb6C",
  "key1": "4xCXK5QWPHm29T5n2ar3r1G97u3YVagngQAz2vRLguWWiA4fvkQDbYdaNhhx3GJHCA2WxqeFfRAwMC7VP9cCYnWx",
  "key2": "5MaepTHxfNts8tQaTKLAxG5RsnEWYs1q2Q3HUUbQM6vfRAsNEhqDnPZh5GE2Fs4EBJMjR26vG9EXob2gf3hZFR7",
  "key3": "3dQfHn2uEYNsvytr6yPNWvxFvDTVCEvvrT3ukNxshpBWZTLuizjBEApwSbWmdT65sBqNEn6PNCT9UTYRnUxRrJ8j",
  "key4": "3ncUmsGUFcBcUxykCVaSmDEE2hUHuare2QJ17HTDgPNuYvunpmqVoeC8tBHieagREBzrtvcZ4bUXWudL62b2tAYy",
  "key5": "39TnsjGqqVRaVTxrETjS8JtQcZ6HNgfru75ZBspJFfGUicckZf4WNp4vRoARFEX1F1hEUwJcv66pDBgsWFip89yx",
  "key6": "4T3J64Hv4LZ9mqNXtQtg2GQ4UagCz476UfsMKn2yev5wPVExYE8EyW7gSogoPgdNyVD7wVMqTfs9TTSdh6rQy4sh",
  "key7": "3fUUtM4tfj5BhKieqJEtDBZfKyeVESxwwgiPFcsZVZz8oFNSnVP1NvMMNMGedMcMg7BZ93SMKZyZ2Xhcob3zrgcp",
  "key8": "5xAm5Qk3nEcfTvBaWtR1rJRbvjdzHEvRDopemeeCKW2e5boq4e5NAieS2TLMQs72NMuKmD2hoLL9MKHFgcUzqMV",
  "key9": "4n49dp6EY27Kcgs3sqLj2fcnHFWYxZxyEJ1WHVzT274RHeMSKQpP35awMQjTvKzduPoJA8gd3DQmJRkVqbt8bmrU",
  "key10": "5YkQW8Pvcww64ZeEB2gQvbgU7DLvxDo3a2LBKiQXxJKsAg2meqNcnfgjPWvag88VMAsWLmXufd8VAJavFndR8XNV",
  "key11": "4kaFc13DRMXZuDmjuk7ZY34VMiKgzAqrCqa8bTiqpqKX8LWuNH4T6LqCLVbrTiCt4icR9m5RuYmPxf8Pn51yEaop",
  "key12": "5atgHnrxP9VTj2WS5W5nPDo7UijShqM9ah8BfWhto2xuuQ1DYmid7qdBj31ntk9Rs3yKH4vGcxvyyTUrdSr8wkue",
  "key13": "31tp7ZRLNmVx6eqDXeEDN33LtEgQT28p7ubAjqmeDpb2EMwhEEygn5BWDX5mZH3iueu6haspTezXaxLcGSwAzUui",
  "key14": "2SomK3JbiJ12NLpNCECUPSFYKR4DLHntrqk8g3UFXn1jd49p2D8GwNnxLFRx6UuYCCYtSEeiad3SUL7C9eKV9cNp",
  "key15": "2SLMfNuMqJXoX5AmExDRYZAeWLwveXLDBxr4itmpczPqL8A4yGBH9CQdmqTCLqk8tgHYrxvMaxwunGNgWmGq7J21",
  "key16": "64je7zCXncDvFEwvpERmN6HWC6BHFzAbJZvChKm3uaGfFEe4ZxkXQx5t7fnjjKGajaZZFQykVaXUVNJh3iyHBqH2",
  "key17": "2s2S5z5NwNT4SStn3yiarvDjU7XG3zoej6nz2YpvabVbrXpfguFyepJa9HiCL4hdsWhB3LbicnPPSgs8zNS5ccNL",
  "key18": "DP9Fg9MGfozV6unERSFKzx8N8kLX58YUGavQcvnju634pqwzkhRb6B1Bh9upZpWfvUPRVTdnpxXLwn45N9sQXfH",
  "key19": "5EUoYGcRe8AGBpKxh3ENmYg8osA2yjH6tqMbTa4N8o8t3R3ccCk5JZCSTbgk8KzsGotciDevpHE9PJrsxauUubyP",
  "key20": "3qk81qS3Zakg2AQ2PkM3gRHi8qnj5MS7NmfhaKUHRkSKX893dLU6mXKLHXkCYXeMo6Fz8A1ctTf1bMBvnAn1n8ud",
  "key21": "3TSJcD6jZ4WKL9b2yQBJmM1WpEEvtqqKDHdcC4Kim1Dj99qPPeoYGUtF1W8Rs9xQbiWDVBaXcVBLCgBk6N1Mavsd",
  "key22": "2JjstwEcpYZSxjcke6SbrQuAvXu5oBjMtJQ4cRUGf9Hj2mdD9yYhkcN12aQxwzEMYmyWtaEBamfL5rN8d7fvuDAW",
  "key23": "5wXBaseEGQnAg3hod1wr7wfBCBQiGs2k4EvXXuJWseF7T72a8tn1hVr41XWNpa4wv1haLC8WSncR55gnbAdkYXW1",
  "key24": "66G5Q6PdaDKRRVUJYSuuDobtccEq6yAndVSSY6BY958pwLFX5rrjxpf9M3m6RZwcG2K63VZ2cVGSkRrGioeyx36d",
  "key25": "3JVoXHfKCaydPyd3fmit8D1EAXSEH5hfequVzyiotpGv3u3843LMiFRChUCB82eDaaCpzcjtpSYfakp5ATcG3ws2"
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
