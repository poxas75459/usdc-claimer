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
    "5AyAJ946ayLTnpUAW8t4ygueoJHHQHmDvfUNuqSfXTo2WsN4VUMbXZwp9RL2oj3v1U4Ua43akSgT7JTkizovdunL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NuhErWsxrm58NdioNT87Qzjxrx9ncx1Kw13iPEBJpNoNARqVsyMZ3S4KemucVdBv84QEhMqhCSVz4rpc4r3YVPK",
  "key1": "4YcM5JhWoLed4Vhw6qiXPhXpdjuMGhoYMBrbFBManHuasY62rQ1pnu4PbYe1kj3c3Edjc2nhcmNCS7XBCvDRBB1E",
  "key2": "2gGrxkp9ENLKgiqFdGwp3prd6bWYtzx12tZ6j4BHpY23EsW8mFozMyjpb8ya7yaydTVQsJvhVJGc1xpBrXU9KSnq",
  "key3": "357fyitHsAmA9ofrK7Fv8ERADpKg9qHZYYa8h3vncYyLE8k1KWRZdNVR33tdq2D2dV8TPhUASYgqbpwfx7SsDX3Q",
  "key4": "4MUCQgU52KCx53TXkw66L9d2vAd9wEJcszGe43cWhYEYgrmj3VbMxUTdmcFvPCyeKqRzRb7Wn4k7dcSt4rK4phq5",
  "key5": "2Mf6vHmF531W1nqqT4yGXgQRytUKLbFR2QRwco96AdPjn2TfStinDvj9nrUjaGpaZVLRfw9rS87rUw7mRDzM76k9",
  "key6": "4xmKZPQE6nqM9mssRM3zRuciknDVy13dAjaHHtv46tkruZthdR1zkr2VvKXk8uc4taoksPq3KWqQjtnh68qLKcSy",
  "key7": "ZMUojFvBWDz71arX3xewwHyYgjWtPB1omvTy9bv19jdobWVDC5NzLfW2zGbBxXDy2CDhmi9cVgLba1EpxFyj2Z9",
  "key8": "2R8pt1Ky4sPPVBJFyee2jqWnw2yceYC9oiKw9yLBtjQosWwg28h7rVuFKRg1DV1GcCRY3iaviai8Fk79rkYQ2h3T",
  "key9": "zNe9isrYS1Ja2vbwAAz11DfEDbJYbAKWvQkZX7q2HJ3TEvU6kRyGc1wZ73j3QhV7ecJBTM2fbj3KT3rZybiEdHr",
  "key10": "4sL7nt8AN4JTd9B9RrNRaJAsos1cNWa6QvLk6Dc1XZuqK9DafAQHU9Xka1PUJxeTqSzM13C5ivyaU9u8f1i8Mn3e",
  "key11": "v9TJ1SRACyBU1Br1RUsGvz5s61a7WcqFCkEQXBnQDsXbrToF9bHxMZmc4wy5VZUCNrGCvjnSRHJk6naJ1cLkjS4",
  "key12": "5Q75z4SXtWqAP3NzVhd9KPySnZxp6RNKZ2MiDcAoRmHJ2hKt1NGWG2hiMa4UvjULyHWMEHbsC2rUB7WY9TyPL2Zv",
  "key13": "5vuHxtwEkTiPsHD2gAkdsaVpZwqJLXcAoBGcHc3S97P6tehcZEtdBk5NBw2qvMLGoRXCmMRF41GA1keYFBS9SfxT",
  "key14": "2Vnk1vHCPFkwc6Hhqsju6ttER1BR3XevhmgdHr3BjSvNtZY4XyLrFUtZM49mS1cPj1m8o3AqaC1qi52CD5JFgxV",
  "key15": "3gfEH66T2WJtiNZYkwhQZ2MXnquMdrgXd5938rWpP3GtNnyW36eceopgCiqNKcVS1UkB5hLQeWQo45gXEih5bhUv",
  "key16": "Xf1dGrX29pavGTkGN2ScaBrH6bL8STKnPVnppJL2pD7TwqmfznTDWfMatAjMEMBbvQPSJg63qgzQSAVYNYVLPMf",
  "key17": "52TmbYeMfG3jQYAKdjCfVUVZ9NQtwicoXAguToJirM493iyREswyktN3BHLxYW6tqapJGeURi1DTC2KN4YzvmMRU",
  "key18": "3ZDM69u2Epk5mWiWhZ6LddT9xpdCXaKmMmNqJfmdfH233tmG9eF2AB6gpAUzXqi6Kogh7TWh9YP1bwkL7As93gPU",
  "key19": "46TRjF2ZWrGr5r9jBcB5jzYWvHbNa8Ggy4LQ4tW6kbCgdvZFK7rTWgaQgCQiMdjijuJzxLsSGd3cx5sSqgC9b4m1",
  "key20": "2EPozEmSXb1XF4Z42QMPqxSzHiApeyYANzWu8Mphor6kb39m7ncD7RtTMhBLQFPnTZPegzDG2FK2BtoQv22vu2fh",
  "key21": "5aYQ8PxAuDxfeDyNoZRwFHdDABJsU5fNhM4p136aBxQBBrZksAnsg2ocut45qHJmwAk46td6Z5FC73RRG3LzqNaA",
  "key22": "5uVBRedAgUv2djbYWzdGVcKSpZCnEYsJXkpQBBLTieGB1AQmAdqdHfeLxgo9NG66auXJipoGYS4RvcEpKhGBc6yn",
  "key23": "59GJjoXCjRkPCZppLkRS3dqqiyaWXtV7jwHdAjFp9R1cJMbT2Bo9xW18JUJizr52njrgL1SyNH2dVYxRLUeKTa4",
  "key24": "2KZxC3mq4f1aJ8137z8zj7itm6RaB5dVk6hpvC9NPY1yP1AfQqiyVkbJhwjGeXR4B9eaSCRpWNKHsVeqauVzAekN",
  "key25": "34m4SL9m7a6Cvv57JGXvDSvJFDDQTXAkj4KYG8hGEwP9Ynk626zVZHU8SsRvG9B7t4kkLDdWndLB3Au5UqKpAxju",
  "key26": "F8JkBveHGMA1d1S1KLQY8aqmZwu4WQRdWmwJaL9aRena8R4BH7fCGWUAzotfHm48fmqkQdWSE9bhGE8zHG8mahw",
  "key27": "5nmAhRXnmWxehdpW6U3F3EvUqQrR8fd23QNc2R3ZKp6y6e5k1EVu32vFYqLB6WjxwkNci4FoETbFryhM4wWJ22u3",
  "key28": "4dmHsJUjQYxo4A6TUnDcs5ZbzG1Q2UTd9DSVcZRxER5J2GFgDY1TqQXCTTbNeBopGX1WgqhTHauG1UeFjzW37i5c",
  "key29": "AfjGJdoZ3JDQ3xSYjtwfTiRvxfPGhW13aUkDWh2Qms8qK8BTK9xrZyW3doyFza2YVbAyKa9m6ZXBcMECy3C1hYb",
  "key30": "45dx5QueLtEwT1ZQAW7cMi2KWgukmhnkH6e6Trp27vu5MdW3LTQPKDVvuHjcLbSvK2pvAWjQRgU59ietD14jiSq6",
  "key31": "3ME1M3Z3iYiEtQWgUfNY9u7YpKYZpSHHfwH6vELVgtaF4Uk3Qb6PpQXdnoJiCQiSfMCoTEr6wL65RciGDG3j9KcC",
  "key32": "8zv1X5hScxf1Aj9rTb4WysPTk13naj9WwnJkt4rnJnM3NmiiCkNwurNEyEh8Dv2wx6aHvGmT47dFCortrKeK5Ck"
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
