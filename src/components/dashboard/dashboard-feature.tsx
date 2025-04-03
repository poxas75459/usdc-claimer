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
    "4VfGBiq4JUMCYEsUmNXJXaskz6U4HDMJPJQ9PxvNxfbrocBcUm1X85RXfUhTxkKDetvfFB8ajwiZyjzeZ31oPp5Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kR8uVpYB1HWpdHhkBHvyo76AypF7ST68RzTzgCcdReB1dmYBx4HaEsRHFtmLfibN1kCU6a8YD5z41ahqvSTTaaj",
  "key1": "4WYfnuRm28qzsXvLP1WpmurHT72MgK2UtMpXE8C3zogDw2YRw8FdbjTEWfpDpKharbKWGRoTH2BUT9NTyNRD7p7T",
  "key2": "5MUxWaXQzwzDVQNGZYH4QQKjXq631LfcJz89EEnBN5katrsMFZzByXQjoxn5GNrAgMfR8WwdpVpnnyTnaxh2cXHZ",
  "key3": "63GXKaja4ZJZzhXHaaGuKESqdndv8Ph92U8mKUHTZhPHVat7aaYvJnpk1zPoEgh2JyxgjFNvxZV6zV9y7gqDRPZk",
  "key4": "4o2xkSQ6oc5UoVRZkrCuiW2REpFmu1vw29GLNsvzfjHupCVTtM8ADkr4qehwo1bwVzUW4TNmjyJ9sxLWx6J1pnHt",
  "key5": "4r3mA8JYS8i2aR6xXXX57b4dcpnxncPJ9h4geGrui98PWKWgYaf52FxUk6gbW3Qp8PQa5wkAZxmjkoum1SJHMywR",
  "key6": "4WHTnXFdp3QV3eWWwRdx8LkCSwdQd5shPNAXtieK7edR5ibX3ReBmJk4HYMYd62TbBeswCnkr7JXA17s9asyFNXT",
  "key7": "3x6Hu4WMXTZwJMh7VbvxGoQU48RTy874mCU4yQRyDTXrnZxaFLdYZzvqSFAXHdMmGFpYJr8EFdsRCvvXGX6nwDTz",
  "key8": "3wsHAUaCBQ8PYGufidpLrct4vBJYgFqcmuoK7qJRrpsC6FHF1tPMTpB43iZctsJqjTRacRwceP62K7Q4F6xApLx9",
  "key9": "5c2fT9RT61DMTyC9tKrPjXzPpgUFDXmSur5S4d1p36pT2tMYZFroRoy8KPiw9VHhM5BR2Bpt5ewxwzUMGWH3xwpe",
  "key10": "5DBPQLBDwss9wjX8qheECHi1A3sduvcQEJDeAvGarmJSrPc1mf9Y9CRsZnob4aTFsdc7EnFazywmA7aADCWXEz5f",
  "key11": "3rALEeXzuFJEFLp7zGz4pQkLAKuUdNtExZXCnAYJsr9DFd8CK8WdwNKHNnGRUBGy8bonsS72YEdZLKKbApYxPUo2",
  "key12": "vpB3t8wZkVnTgPfoHQH8YBk3QT81oLUJ7CoRTFziTzY2ZNBd5DWZkKaCE92A6MJGUkjkp8akig1ZZRtD2TvN9vj",
  "key13": "44jrw1U658jsU5Gh2Z5tn6RX9DHKxJFh6fv4poGW4gEMxZdZ4nUDzFaQmq9KCYzf6v93HzuUYNqSjXq8SHM6Dhp1",
  "key14": "3S4Qk7EHQPouZMX4vKnhJd2iKad5WZUW4YUMhBuFoNnzo6o9wMN8oRbdNFS2MLsP38rAsZsGrymSPwpJZankequk",
  "key15": "5t4Nw5fVfUrx9SYG6sBdoXwGnY1g6p1XWhZmzvjsaB95GYjboddEo1LnGDgTvWQRhQHA2svdSD4YhYQTsDmHNgi3",
  "key16": "3q8xnHT5syDxF3agbAv9tF2NpXbuQ2awZQzpG3Q4YJKMQGnx4Rb5SMFRZhLDnXRXG2X5s1ZzJPoiiKnksoJHJaQm",
  "key17": "4WGH4Tf1aFCivZFqENcCGeRj9vE9M5Z7EBqrejwF5QhqK7dUqMzhArWaErPaUMLF6oWp9vbMQJ8iCcoHVCH7B1RQ",
  "key18": "5Q1Aa58bS4173QoAvibPthz9Uku2iC3Pj2ZAfGjnpEcTHVPmJJfW9wmoNfN9H63VycHYLoUWqpsAS8voQxFWKU3i",
  "key19": "2K61ih4jtMzRVaPDDhheXymZ8D4KRwisWTTX2JUkxWeUqm3Y375ekR9uHcdZcr4vBPvqfEaG9yHJTn7nSuJjoerX",
  "key20": "2jCpkeJ4eoYYxyDebneKAoP8NmbgMPKKhUYwKu3Ab6MXhd1AbhVBUNWnr7EvfByfkMr5YpkQYQnBd7aiTVWiPR4Y",
  "key21": "3or7u6JdCAtoVMUqz6GSi44CGGDvqDL62ND6n6vvgnrB25KTLtpTJFQFLXuL4ntcc2tEnKytnMtFVXmKDaW5PNcV",
  "key22": "3coq21LpGp6ndq99BsWJbjqf2RANLPcRX79nfBf41hWVHGhH3ACQezw2SZgXgBjgzb7Zd4xkM7VfRRXRZerjYeaX",
  "key23": "GtMLVXBEtAaWVXthmciouohjwH1fMDvxoQmtRbbxxpP3A9AeW87vTeSo25kLFtZdA2X5pW2DSNshwexbYmThH4H",
  "key24": "5pQxNYYh8fwYtaNzBjRQcbhuM5WcBCnACAXuuM3Vtg2yEFkkN7YPmxKgjouPX4YMC1fBXWG2YzBjVW3LuVpKvAc9",
  "key25": "2xagADFxSXzUQWakq9hBMDS2ccuGBzxW2Lx1MP6xZ1DUZbT73ozdQerQNZRP7mgooDSJLMbUgCzhVtXuxnBt8T6Z",
  "key26": "2CM4ZubnmvVNGcenj95M9eEJWMbZA9cLsvqVXc5fiiPWv2WKntzqkMoBL7oEF8bvvfLnPkHfWxREiCmRsxAd1isr",
  "key27": "4ymSgF8PG9mu2T7LgjqePM5a1kSHZmHKrtYW9JsFLQ2QutqY2Qp4BXHJoUywNfExe2Y7wU25xjrac71hiQMMDZ82"
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
