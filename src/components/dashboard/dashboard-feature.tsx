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
    "4udN9tePfZC7id2uYMR7CJ37NTFQxT2xZYzQDgDBrYXwp2dneyZLVYjj45xAAz63DASyqpPNmQrgH9wns6Gudyvy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j2tbut5cNYWsWp3fBeHMs6onyHEZCTSecyeDYsG3BoygaNJeEBs44RhAcwDQ9RWBezUAVTdkLJUiHFGm6VisZGU",
  "key1": "5pRgN9chgDamNzeMZqzWjZTAmJnXUQZAiLBA65R5MK9KAppnjQYZCNT8s2Rceh8dPDDjjAeCgRYtVnbuprf7uwSc",
  "key2": "49c4cRHqUEWXK532nHG62VjBSQSKMRMXABCBGWFtD3Ro6zERE7H1WhJa32sreypZbVTgnpsaNhMWgfQ3hzr9JHKn",
  "key3": "3CazMhcPVM9a5Y2vpUgzXLUzATu4WAUSCZN3MqvCuACWLk85PCAEq3c5EkgpgSZxw7UK2PE9JoLwWEqhp1Nh7Kk2",
  "key4": "668gjMneQQe4LGsP7T3dHzmnxS4ZxUQb1x8jZuoNXAeNhoG5xQUtLsZLsA61FW2Xq9NpwS5dBRjiEczQVM4d6qNw",
  "key5": "fHuWKnffo3vKW1XoqUgQFEDDE45KvCRW1AxmB1bzvQRFkY8jtZ352vgZbbHBNgaKbeLpYYFzCumpLUr2CU1MKdU",
  "key6": "2jCXE8o1xAK83jN76NSGkca5aEnu5j2nC7i3oYrX3gEyeKQzrJL6kM265xyT5M2HJPTwSKEYg9GMsEcFKzSSj8qi",
  "key7": "4GuQuUwcr9LKsqUqFHBVrPrNFJRLS3ZNAYGzmjYUGMa4qJoAcMCsAHsTQZ2qtKfLUbuTsrKSAYZkNKumMfR1gRoz",
  "key8": "5pXp9RRRPAhQWzKjWfMENuvqYDaWg9HATbtQSTEK1EH1BJUf4JUpfJN7ARcqrcMZsbJAS6sD1TGY65UkwDDFTxjb",
  "key9": "3QR5jBQMURo9rYsfBMvZiNP6wjUsdTXKsh1hwXSGEV7zJAvA5hLVR1oTF2AfTmSNRZq8SXA4qsjh1xfpcmnsR2BN",
  "key10": "3mDY3Vo83FLAosF2TQHCo4dPNu5kaLjUa7ye4WTSF7Rr97cCGRWRVCQQ4FBDJAZhnr1MjSYMeX5VkJc57Kw16hNU",
  "key11": "3URDEpT4ggXKDUtiYawHnUUbLPUByj2eNSTeTBpKg17YUaQRS4pDY358M3Cnqhm4WKuF4ajwf8i4h4vr1sNHFPj",
  "key12": "5CnGJiaGApMLDBEebtDFrkPvAPv59b44owy6Ct1wWa53wNY1xhAV58H2iygWs7aaSNWwyQAbE9ZqfTkev22xhMTt",
  "key13": "2dZtJJSzZh9GBxEf5juQFAdxbaCGLQMH5o9ENvY2SqDFomg4zPRX9e9qqquqCFMXfHUAnFdx1Kv82XnfMabnM3t9",
  "key14": "2mPDWiESuAJhY5KritVnJZ8K2zg2Y5KE7vD29kEDLg43gsEcYFx28VAsVM2wVcVzJ5P1r1r3X9s6NwPe27JV3Gvo",
  "key15": "3hmjPfkjP3Ye3ae2pCsRSkkcJqAjWLJkVfSF8BTQdyqEakaks8deZDk5wxT39tDFivPpVVDv8tKcKTvKYafg6aiq",
  "key16": "iFLUQsSKG612ojfD5waGtea5JBgS2Kj5XLvTHaQo4XWozV2p4qHmfTqJhpZNARE5WDb2oEMctHT6egvf2rKevhe",
  "key17": "3B14qgmsn81baEt3TgFCdpdbeW5WDgchY7M2fU5Pm8pGyqKttCArVAX7uM7isT8J1GB2uLKp4q5A7393KwXjKAox",
  "key18": "4GpdTWKcSZ12XfWo6LEGcLf5KdACezUiXVfW5u7b24qRgWiSofYTZAUFU7Gbu2LBY91HB9RLV6f3MVYEMfJdoqNq",
  "key19": "4T3KAzffbmXbnLqAsHynCLY2zJjvmMkX8jkCUZtjqTaWHtjzprFtRVhNe8YfcxmtZLh9pz81nqKH1XxVGj4rVRC",
  "key20": "4e1jEn31jFyhM5jZLs1ecChXSorma9tTo1sNC5PCxPekgzPw3MwYqCBEXcqU7bMdvLZQj1XTqcpzYoYC8yntgEVm",
  "key21": "NHLbJdU7AgfR4EEaNvo2EJ6tWDCUtZM4UW4f2qxfycLreYMa62UoAB8AKG1XzdyXU2bokstrpercA9ns1QRDPbN",
  "key22": "2tsNSvbkwMSJfr5wLuu71JX3dnaGwpwsVDdwhTCuk9Fhj5QDrm1A3HEpvGXnV7YN6oPR6GUAiZeoyhWdB3yYzRog",
  "key23": "27FuEwQrWGYy8TryCSBG18DACHrBu3JRawiNVAoqFc2W3RJzLMhpc5ckoa7kkd4S7iuXXrpBuUtsuP9VexMwEE9r",
  "key24": "2pTrBRF6A9qWBC3HDnvS4FnM7z1UH7nJ4cwqvnhSFReTn88TNe4zwpGCqGF7Gq8rynFytx6mzVjcuaD9meBqUeqz",
  "key25": "2qd8kSBSPTPgi3m2K5kweA3vG5QWc9oCJN74Q92KVHdBQG19cWdDFcRBqWg2TW7Q1poHzBaEVRVaH6UGzemp7ncu",
  "key26": "2aU4rucAQVqGgxfS6i9X5he6LHDxvKJdJdMXEPgaHJUJ81KR4jC6idUQHjqkzBpNcLUgxcjLsXakfoWaRTzwP4YB",
  "key27": "4g32CVKPbBGmvrrU9pvG3pzSugAtuGAKeyXBToiQqfYqmNFDTfkN4s1M8XXXGsYAGCPce1UukqRgqoiVEZPsB8Ms"
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
