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
    "5hGseQqeJmSrYrXfsGa5euegJkZVWS6VJD4PiZbf1e9Q9hmx56953WP4hSAG27JhRwwxnJfSUpgN1s4NxLThpcKx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51WRHo34ZDBvfuZhurf4YJVFTJtuWjkPvmaiGoNWoZ2vAUeAyuW82jJFju2a4hUwtrvuEMgwukUWhFHopLMMTBvD",
  "key1": "4nEXrkPZzvWLBCNDFC8rt8h6WgqMLkA4ib3wx1k9eJwrPqmtpczSZ2iVLmmmCH2rHdSQ1VWxbpZGo9PtsUXgyC6L",
  "key2": "jDYv6wWasohudy8PcRU2Z6jhASQhyMtQmpRdR1TuFr6ynfKZTE2MvFNiGo5y3sqrsTM2ykQBRbA4LhyDfSP9oMC",
  "key3": "3crGmKgycZcMsE69GG17uqBHUnPah6zRS3euNXmMRhjcks4GtoBYZ4koDE9pUiVnjroLFb4Nhf8UMxdGDth39vDT",
  "key4": "3u39uYrAXp3Z8eJBeNX3tLxu5oMuzpUxmVapzCkpNQvpUCFWQFXhdtpYvnrGDxGnMJKp3BZoWWRB12vNEEaeFyEh",
  "key5": "5s1JKZFMjGM3Y6Hd6aT8Cq8F8ioB1orpPxjUAh1yxaaKSU3RLz9pX31hPeTqe3k43FvE38PqGVoiWx2KChaaRn8r",
  "key6": "3yuk2iTe3wpBVkHxFH8qP5LP6ypudeBpnQTe8d9rgZupKbhU8iCU68srNWFV4ncN5w72An3Y1U7hhghdRUF6P9qy",
  "key7": "cbQAJWbXaauuBTavRaCfTeBUm6QxuSk6jA9NKXDPNq1RxbtiDnYxYdMXSEg6Uf9pASUMBVXheN7pSRnGhYBoUW4",
  "key8": "3XqxRBmV4dv3WzAfpnPtfe1LMSncsfmhCH3ArgX2h79NjZ3nfnPhGPchjhJTK8FpunvuW9BjtUt7w85jYT5ByUur",
  "key9": "5oY81RiDan1kikLaDhaGV2kkfYVSwSG4z66ArGA4FVvrcf7tPVH5X3UPN6C5E2ugAcKkUc3cfWf6xgQ9cGxLJmti",
  "key10": "24fK1D73FBHxbdPn7BHrzTW1iTqHhAmiXwAYAzGcVqAiMMfwS2dXh4ufRjS9sMGZygutNQ6s6kPc9YtCZ75cqE4s",
  "key11": "54o4X6iA9FD7LA8TBkGwhkJwNeuupJx4wGDYMMUVy2bK526YuNnUBf6pGX2wmiPJfwH8dQScDtjLSwsPvbK875x3",
  "key12": "5bBiPacbWLWECXZU92VoKwEqD3vGNmtPwDba6diGgMHDJk1NaphnbKftY8ggZDUXV53QTWUaJKpm8PiyLdsNKacX",
  "key13": "5SYsUDWvMkpgAQ8hQHBYRdytHLmpscjytEvCqJPWncsQpA9dNoaeB3dgUtKijoPZ6zFFTC4aYAzxzVfBq5UHY5vj",
  "key14": "5M5ndtVbUPmHqSXuuG7JB6qm9r48YU9CrUzj8RqAvdT9HjMtXmxT2J9ZJYFpgV7rkBR9TQG8Kx8BodNtNTj5kirA",
  "key15": "5VEbk2cBRsfqTF5CLW4vxMb8YApmaDeWwXZvS9rbTYNfayhsWgYEx3CvLKdmELcjYKkpc7v3F5n9zdCP8kanvsvp",
  "key16": "526sUVrbkiYM4zifXXGhgz8Ag3wh6HJ6HtdBZGRuPHHULdZorAK28oeke4GUigS4bFtBdeN7hTXmeUMksUEFnY8i",
  "key17": "3JRGYajDX5UFb9we9PK7oxfwzM1dL7SQtnM1bX1Z2UrCkJfy9YwDSS6MqsaaTHxqfQmrr8Ug1EWz6dRhXBFmZdWe",
  "key18": "4UBRRpnqr6pZPtV9qjwLQThCzVafmTcX8xiY3NVu7sGvJ2u8Chr7TM5gdjfG1svHX9uhKudh61c9roBF6XF8QrKP",
  "key19": "5eqcq7u3FbDVxcnSf2Yp3Cnqxkh39WucXAMm6z7UZf29AutDgVmL43yTj9aBnFfhydBXVw28sXsYB3jMbz25knJa",
  "key20": "4UXRWgHHXMLuLkheHgZCfFibA96vbmrqCjxPDcrJHjwzStVbUxaM7HsPxTBBtCnfSfyD6scDBm6TGpYXKEZynrGK",
  "key21": "3duZj4gp6b4DK1TC1WDW97on2uVk31BrcDt11rhYybzcb1kdy7a56i6cjh2pw9RHGeHjXVRm6HcG2fsQVKMXqFR1",
  "key22": "3QrrWXg3caqjgGPwtiwJySRRERZwrQiQuFCQVN3gVtQW2GQKTKVRRRzeBPgPg4ihK8czVv4cFVKqFhmGpenCg8oC",
  "key23": "5W2jYsayoQt2CnE8UwkgVKGEZiS33HBCCr7UeWKmFFRoN6ZuHx1kb4sb6VQHKc2guJUGYwLhmtLymF4VnFMTebTJ",
  "key24": "4ZudahYNr3Y5wXBfCLHhuW8LP9MMEEFTSKXHFNajAM6BWJxGwfoyqRFCL5NNovq6NdNuszQ4SGjRtstREzr7Vnbi",
  "key25": "4gCFfYSfYGypsoJ8qakNNmYMZXmgsYrZVgLn7AvVAguV1Zc4yNLz35k82JsZKGWkjCSBFhmJR8s1GxhAhy3L5huh",
  "key26": "WJLibb1ZQHiKdrGVN1ysfJLpRTnGorJ6wqaEVhVPG49M2a2J4PJ52qMvLzn7sTg6JiWJwahcJf7TAA8oiDfXAfo",
  "key27": "4sG215Z7uypGdrNsJieiTUA2H223wpmz9geJ2Zup7CV64t4WaeaSkQoAfemQL8QvyEQ7zCjfnhUmkefPGHtqoTm1"
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
