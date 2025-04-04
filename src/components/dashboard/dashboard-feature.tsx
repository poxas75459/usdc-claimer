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
    "EofbqK2kRxRNXrwfUi38UPVeNUNYCqy8vVuQXwQAchC3q4Ln9LRauUdpcRrUi3Yebt9waN6FZfPWhtq9uUsxoFr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c5KyQ8Q3N9RKdzNQPraHMzSLEbkEeLf1Mvd18FKjbXCsj3QGLSds2138n4fiQzRbhEbLrfw5M3voco9n22fEq3e",
  "key1": "5kwQqTCyRJT4Ji7DjxKexaDVK9KPW2LbRcoA31v77xpZBKk7BdoYZ74dNbmBfg8xDkMwvvyLjieEAkkSWCEUgS2G",
  "key2": "5jaa5X8n91gFEjcRhdcprmHfzJDiNUWyy88GuoFGWtwDnqryjA37weyjo3THYe9N9H3mXdUnv7jSLtHoAsLoeDXj",
  "key3": "43Zv4MDxXiW7uaJJR6yyserrzs48tTaaSzCvif6QJkQWM1SPVzjc7sNyqva4RD3e9pftRfnWwAnihVWqHZLKbgFo",
  "key4": "2qck6V8wTkFfouXtdPoMFx729n7QpXedZn3GCCnKUzJSLgBmTs9TQJtSCB2aosNYosmRskaJjfTAcs8Sc57HaApn",
  "key5": "2STmC2S4QMsN6mdyMGjZPFymukky2ERyzPs8EJ5GVFwgNNm4jLDmq8Ti3HQhNUggQcPAYMB2z6VQDqGjYqkGYedD",
  "key6": "5vESnLqrE8bCbwJ2mjZrdpbvYTWk9ujsi8uE5g9L5e2V71azznPmMNyJh1oD1oUZ1RGcihZPMj92mA9tojx2RaiM",
  "key7": "4goVn6yjVsqFBifv4thnGb2Lbs6TsTCtteEgqafbq4aWdLzmBLDrf6JsstzBe7AtHD78RsW8yjopHwoCyFZ7x3sp",
  "key8": "3ktqxoRfKVWhrtM6mztzmgVj7swGjtHinnuN3fbtgkuDJ1qMTJESQbZv3UctYtHcSWtKQLfWgLA6ER9qYBiuqMM",
  "key9": "2AzeK2BcxqHwBNuxapEthoGobASxJAi2PV43GZG9RzwvkLWh9fFGSBY8mj6h5LnmedYH6tUFW7FhgZx7wJ7HJUff",
  "key10": "3eyBBv56btoKSmN7uDuk7vRVQceLi1gHHfHGUWnMqNB4kKaad8SeH8PUoctd9HqQhzYtJh4LPMDtSPegKbNmm99E",
  "key11": "4pjgY5Sjqd1LisqH4nMW8EZKanZY6d49pQ68kBTosVboCQ56mg16eTsqCeu4pTZBq3aS232tVpZbicucgRMfwEvV",
  "key12": "2xZMzpDA7ee48KyxNWvSnzzEsg1nTQ68yToFYUSSdcNit7aHqpZsgYte3XKpBk1AwLxksTiTgxffvDkgBxWWMkrs",
  "key13": "2QUv6UQbvVEaNTeuaBahCRwKwvVFjXhNUAKhRcW9pf5q4vmDm986JLSamVuKCxwpmBeAEtYjegmTHoahSivxKRa5",
  "key14": "3LYTVgihQRRW8WohPzDNkGZCmRhibfGDfxdQucxoLcoe5MNGBbRyMtkRTRtRz5ARSSfYY4W3aHAhcRNLRTV17FSx",
  "key15": "2eh6Rvx21FdbroFc2WGF4vEfc3CYzhPHrFYfDnzNfpBrELuWr2Nubhs1Tj8fVkvm79Q6upZxviTrdAysoM4a4WpR",
  "key16": "59ufFbqVDv7AhE2om5qKSPmc1MiZAAu5cGFb8dXFog1gwSG74rQsbwzshmQmDyKHr5VgZF5Xvyx9f22ZRFMFdQUp",
  "key17": "XnPXKxNaM6pgqjBqijuirp1mpuq24m9SnZ6wCeJqXuuRn4sehxk1QSrxhuEZXZJiVZEKnzpQmzkfPyTDR8dNgwK",
  "key18": "b5nx39cEHF72KLC1ez2f94RwNZNjT1LDMDoR3NHGZepAr2fMciwzWmLutS5bhZRYarEpAw5UCvyTJo7JVQWvqkW",
  "key19": "578xKpTkbmQVggcySfvGRiUw7e5kSCPcCziVVe62BUN39jTvidygWGy362UfzhgVzgJsJ3fB1eTCD1T9CUtjEdeu",
  "key20": "4MNPm38AZ79t5ubod6jRit4hF4erdLYSjpYM6kZcnhdnnYeAgWTvzEtyc2uQYFzAmQLCcsxFaSkk2c4iHWo2fWMx",
  "key21": "35TbLGBAca38bkZDKkvr1kgBV4Rk9WR9LoaUNNYNg2ip2izTz7hdD7pK5mStLwUi3GzEAYVf7puxEM4judqyPw7u",
  "key22": "2ExTw6JjoKnSVPNiwypWHZWZNKF9r6mwD2SVbyonTuuUvAVYQjXAX9E7bVWSsjxscwZofDLm7F9pAMAwwisfdoqs",
  "key23": "eyo2YmWAQ8YxHcvUpYgYQ2JMrC4p8Vqtq86gm1gH5KWnoiE8B42TPtJY62xs82apMZq7uvV2fQ83docPUZ2kZWC",
  "key24": "4F3s9dUEAFCWiQchhX3vmeGqdgTaLW2MeZdhgXw468Dpb8UDh55v6atxZmAjXayQ91yVE9eVTkEAWTt8BGDqxzNC",
  "key25": "5DVNDDDMpiARbDufn5TSb2reEcWoVib6H7M9S9HvuzjWC2z4Yeh8xjcML8xWtZkZSEBkWtmA2Aanur3Gwdd9j2kV",
  "key26": "5KdAKEDmQZbvMHFy2pGKoTg8ZDnHHpbMkaepttoKF5DJAtTzviP5o4MXMTyNjS6yvMnpuv4TVLrjTX5EgJhD4hfV"
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
