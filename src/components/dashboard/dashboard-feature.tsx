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
    "3ErdUdAe3edkk7YwNzxdoYkY1Y4Ja4c4dSb5hUygEfsKAT7rcQov2GR4t4QLpzjGghjCPMxR3MqYb2Vnmr55PqfK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PLL6hPjJic5LYL9etwbPaKYhXHtwTunh8NiSXHhFX4zwMukUBi8pAGbA5hxLGjS8N9HbCS4eHtywkRCuT2go6ah",
  "key1": "djm41erL7Bv8EoNaZHGskV4xRk7VP1XHXjURqvriQfUAnGrVsHujhwRhZ9Wrh7hf84WWRWLpoAdiwoBBqkmAht9",
  "key2": "2sbh7aLhpWAfWW7Fco5J5J5m1LbTxEoZwHaYUoZ2jmxj2VF2tDYu7E26dQbBkfTYrPyoUNAXEh7J62mdzsdU2eFb",
  "key3": "4b5cmsCRMbqy93tE58n9ubGgXL1Xhdp5BQwARywkdkYptZQBdNoqoRjx6CLWNJqn5VLL99BdkZfK8iifkLPaErdT",
  "key4": "5L4xnZGa3sK4UVBf1yBErKaq7vgCJKeef1amgSopH6mdfYkZ8PW31XoYEPcpVTDPm2ipC8WjbXE2sT4Q9tZWX72i",
  "key5": "3tTBwGNjCVnASChDtksrW1BaZWa8znPCS7mRwBuPLTBmMxBZ1qa3RSKKRi3CXDcfBMRw7dJYZ5H3BANtpW7xFeJJ",
  "key6": "5ThgW54rhGMTrT4L8W2u9Uw7koTgmWtRvnVDP3dJseL9MDbGCacuYQmEuAiqecxbaki5BHQEDsarPPTVtujMP5yp",
  "key7": "5n8ArwHRoFgDDnMiSK8HCkkyun6ewjAXdS4pYeSEmZZtDxLoM6Me4V1Q5NmKbEjyYMLnw9gWQgkCCgUeP2BLy9my",
  "key8": "jh21XxSSP1LZKuK45KR57zUBCnQWqb26twUmSMmSb7Tm2Mwf4V55Wniz52TVpV8P6C1DznXsUUk3D82vaTvkkQZ",
  "key9": "25Ht4wrnzMMUrZfujWbjEQYMh4RQWsQrExvwKQN3REmmt8b3rFmt6GJQ4ZMH6rnHDxQhHZ6mJxQeLWjupbcsBgvN",
  "key10": "4Ueha3SYRQCfDm6qHE9Fc8hdhdjRC2SkCxzVZbJyKYWNZFofCVYSdpiCudyK4Zb2sjfW7yEnaYDTbZXyawN2Mx6L",
  "key11": "JcaV3y2T4Y4TCmSmp8SPTXgE3juSReHNZJRJpRDW1GR3g7tJ5KNmyvrD6nnscrW6Y9q1ZNmLBFSorPGUJNWhBZY",
  "key12": "4CdEPkWgKV1BMXEJCaWLvqcUjFBG2svmZ5D25aKLLw8uBBRUrXmi3behrdDLYZL9p6Qwqr3oJnGrZDZQGiPk3vRn",
  "key13": "5ff8SW9wJZrNvn31BM7FfoE9Cos8UJpxrUwF93JiX4ytP3jqhjXtW1JH9aHVDUUTNPod2tZ8MSCTwUnHJzrCRPoG",
  "key14": "4y2UoUzADaoJ5rkPKSL8WCnZRUASePSZNcWYBCDXJHfNQMV5zT7pENpKivWqCRz5uEZ3sycyCkJcmT1D41PUejyy",
  "key15": "4KBwRN88VQy8W7WQCtqvMY7xphWAWS3XwNM7oZFL3pGDFKMBzNfFZUak8M3eMb5ej2gdFp6PLQSh6mmY2vqp4qQG",
  "key16": "4vP7aV1Rau9L1tFqvf4yEiWYtoVss7RCwBPJTbZX1twTzamfzmSkjDHiSXHemiQb9NrwRsZ86kLZ9KY5RfCxA62x",
  "key17": "2docAQoBt17DdzoWwkaK1i7YYZmuabFb2smyTEe1YQ2QnfiQomSoPZEFahSHo6juHw67sQ1HXCVHhre6uHUJoHYQ",
  "key18": "VGr2CER1EPEhZ4HvKNTkWPDwq1Q2GvymvNaJVWoBm1m6HgjNnhYGZqWh2sDS8Kw44h6LNye7F49KQr7cJiqN2mt",
  "key19": "3b3zHG6283qop88i5ToUzCuEE2dwoDa9YHhLpfQzAYZFjEPyR487nebLUmJTJ2QNH7WRboKyVtLeoxU1PB9PAsSM",
  "key20": "5bxQvb3dvYsf1ph4wx8zVizQHp1vCB9qvcDHyYHc7P9Ks9ihCqpAiwvjj7qd9Md9c6cpM79Mvs9wev23sofCoLaU",
  "key21": "4QqkumsRvia7jH9qqyVZspCHAGunNFcNJesZWRgtirWDxvKT8xqkUv6exq6Y4CjGdbu4cPRpsyMsQcFb1683kypD",
  "key22": "3jxrqYoJKDdga2KcGQTbEW74j9dQT85cZ83hRfEjeRKvhPwhRuawC16d2TH5r3P5MszyLoxLxQkzzuwbQZke2nK5",
  "key23": "zrjomT6rANqU2vBCmq4p1JwEYE4MPGJxJsKZb4nrvqVdEvqgG5KUajHnsxqQ6TS7nMXfHCDLRy7S5n1AAqc81iL",
  "key24": "43q2Aco7mSn3DXy46f39T82MZ6JWJWDGijLgHjLAU8DpfAtKwTZiaFP4Bv3DnaMwcWtd9ARgHR9ZFxKdqTwc42xZ",
  "key25": "qC2QG7vHdYJ9wmLPb7dwtK71m2L2xU6AiSyKG2G6KRfuuPVYra1y9FdbVWvg149UdY5P9VSEbYkAwjkpBKauRxo",
  "key26": "3Hoy9grbxRaqBRU3B36trRrrq22BV1LPtTp5KLNMqUiMjV5xwo6G6zg54SgMyny7stzMzGetcBceJqNwTpcp4pqn"
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
