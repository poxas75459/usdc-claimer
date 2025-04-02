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
    "4a279NpTqhA8CYGJBrwtf9eHbfHxkHUyvDkZ5NLV7F74KCMLkEsiWR2gay2wAvwmQxmKZVL8crVUQ7Sjk1J7ECSo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i4ygjQEMpQhgBCCyGx75fsyE76rBVbjC3BpNVmHXwNA34YZNb2a5L9H6KZ6eEGrgaDtFRcZgw57QekJ7FmaQcHj",
  "key1": "NPuKhVqCg9VErFvGkSPjS34CY4qtuYVJDVx4f3ZoaEV1Nry7Fhay1z7ic5Dqvfb4NscVjEKH6U9btqLFHWFmZZ3",
  "key2": "2Gad7xG1Ei8h22j2Uu72ad1mH945EVGmhZX47GboxHaEmrrxcFWNX3PFAeiYqQYcXYx8gvnnT3CHqMQXFfnByEaN",
  "key3": "2HBRzXwPyXmqjvbXm1p4V2t6bQx84u4tP9qLiHefdCsTRFWhGgi4mLygjn6sB2VNYiCM5QMGPbKQs5SXwwekXNSm",
  "key4": "4aD4ShnRFWD4JvKATM2e2BvFCj8U6GSKSHYYmVH9JZy36HMxqkvgYvUr6FKs6jFUMYSBKhtiv5eUNgRkaUAPGPae",
  "key5": "5Wvh2GKYjoBbhZGGnrGiE9x6xwovdfEnU9xchKiKv8HXaq1zAKRt9JmdYdB19Z3swcYokQdQw4G2o87pVAk1Pg3j",
  "key6": "2NTbxBb6289gA8ntFvMofCDMM49XD7YHPd2QWeW99FupGpx5Z1aEYBUDj7tdM2qqx2MuVFrWoPdK3rU4WvzoynYP",
  "key7": "yJSbHQUgs8Xw77jU3Pj1Tuph1Awo5V6qrJ2uQnhF72vNpSnHWbBcuXo6u8G83h2j86pW1NMpCaKm22MT3njHn8M",
  "key8": "4k2bjAbuRSFnWQ3HFyAmZ1GjYz5ParoHw73R3FPeR8NDHS2oFMC2mKuHfQLnYkMEoRQ4khsTAPdKuGfzz8JR6aCG",
  "key9": "2khTSKDvm8qcrL1RwtJpyitucWdpMfxSC4p7Hc1qxsM7QWeK8yATH6fKrEc4iNozQUyFKPm59jHziGSHo9SZk6Yk",
  "key10": "4pvBzLMPWyCjvPxq5cWLvVys6VasH3kVnLJwXGFd4tt7ftcpY8LN8t6nFkFeRy6yEa3A9wRFmQzbhYQTC16dpoaL",
  "key11": "5dw4dyVduWoEEz9yPPRwaCxNfBeddRBwNCZjYKKFTXrvBfVsNnckPFYMwHGKnpGYSYS1qxAn1ARaPKJfDSriNDMD",
  "key12": "2qUHkmaPiS3XVpBJ5EZ85EQHpXAhjJVEvDgZXR2cR2J48pPBCijk77MytSrce4CEV4X7yKEVpBdtUXiVaWXKCg6a",
  "key13": "UvdmcHjzHRsrwruPspDjab4y7scBtVkPsrCmgvoWAQJWoqcrrj1SXCXu3QJc2TPmugxPAXKE93v9xRKETdcTLgH",
  "key14": "3sQoibVL4Nz6f2Kx3eMsnyLsTx4uY9vLwhJmSGtfZdHQCDQcWSDukQCJtzMhJTgX5zZq2e8rrVUPG3cN9XqT1Nsu",
  "key15": "jacw36uy6L4gqUwKndXSwwq8bDzgNGib2yX54RACt9FvSvoa7cvMTkWrNLxxntvQtV7uhuRAgPJ2zHQb4zDtUZH",
  "key16": "4QpEQwK6h7973NhGvr4MRKtExBr7CxQWV95jfrLWyFvaNnVzA3P4rtn99i6VEKxAfbHV789d5fEAZkWHQoNn9gZi",
  "key17": "bCmpRXTSfsZYwqWSukqr2QbL63kCwQHwee2vrrxF6qtzLrgqJxaPvcK6Wg5KyZfH2b52Yfc2G7gBx7zdJUkqLrr",
  "key18": "5jvXXsTWtjDsoxoRpk7fRuZHk89r2EM3D6khMFnP7YSd4isRsSgMFusaT61Hn5Sz9LaT8ftUfXzMoaCfoN7qSLmx",
  "key19": "2tN1QJGiGAyRjRDUJT6tPwsh2WGzdJvd2AQkLzi3EzZDJ323ikziDeaKDK1YcU69GxZvQ7w5erDViis65PEkMk1h",
  "key20": "66ib6c4rVejSUcBsPFJoWGp5PVuzBPjvgzepxZmPSAq2BNewsncdidHz2mxJa8eHcu7FP5hJFHCYatBteiNYdd8L",
  "key21": "4BU9JKndK2fkCo3DVYh9e79pAbpjCDa1ousYTmvSMn1Yogti1VXibmQMZ33zg7ixTELZRWJ7A1jC2u3PRZJPMX4Z",
  "key22": "3f6cWed3t27UhKTuVUv5VjEgKbRaLm2e9p6Fci3sWGRJJsVhR3KNbEd8JV1q8vajtWuLcttHf8wzDZHjCirTajPy",
  "key23": "5dJszs3XHcsybjYUqhKpsDotHbnUyWxEggjp3rkpBUCVHx8wbiYFfY4bq7utM5571nUCw7xqXuJSgprcd8e8woQL",
  "key24": "28xbCDdB2nBBVGdEGa47HhAqQcVsLquXfWyLEtVZzGTH9VhJ9hXptfz3QhmWwL7pVViZKxzXpJkmm5bRGiJDMNkz",
  "key25": "4Pmd1umRYv1z1xW1978Ep8hbDzhe6UhntkAL8YWKvjgBsqCzo4VkMBQmSwtEui4GxTd9wbMXJocQoZrX9CP3px1Q",
  "key26": "52XPxcksvmftbLdSLtTuJaspUU1cL2q1xq5hinFvP4S3gq5fEU3tHVum4N8iu6qVcVTQ4SLmFQohvHPk2FuXs7x5",
  "key27": "36HHe42gub6peTQPSZcYRKcmKmWyX6wCXirk5vSdzN5vcQ4QAE1dHorHcx9AQdKj5WhTNW8RmP9R6aJEXtmk8bJQ"
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
