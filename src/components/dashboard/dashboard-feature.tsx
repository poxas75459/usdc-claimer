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
    "5cjhpASi58dRNmpNmpFVLcz9pSY9V3853jFQzDGmE2n7JwAZt4TdWA22oZp3B31RtnsgL1XdU5ZWHUDn56hussx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NdHishhzasYEDg3k5eWAJZPBFeQk1471FXbCpZyoEsm285EKJZC6L9z5K95U4fwzNEBpTnpihG32WV1Gp4irnFc",
  "key1": "637x6f6TSrXzCkhYLwxHkHzVGnbVsxjw1csLubCaouuoiu3aeHC1P4Ri5JpbvEWyQ9XF1J7mr1fjeHJHUBo431tK",
  "key2": "6VLRQ4bowHGjqCzXG5VCicDuSabVTSPZgLdX6Cm2xMHATkjxBjNRxrdzsGeM9eKFiXpXjUBDoPB8Sos3NpSPEb6",
  "key3": "2dhgNd68iTWdv3hAjGhMHes1hFYHT6cwgZvJpwoWg8fRUqQn4VibpMFD9S3DaRTzMyz8cqEG7Z4GDjH9G5NYBRJZ",
  "key4": "jX4RRjwno9nb2iiACWtz1RxN2LYooAuwvheSXR1n289rTLeSuu3SmfyUNVu8q6mN68EYv5pzAyWrWcAfkxYpgaD",
  "key5": "5ViTKvH2enmwNabwpzGCcamT1JLj83N43efjWzaZgVjrehHCXfA5Tqha2JgALQHaUVjqmjbm7nbovYZozxkmH8ba",
  "key6": "4MXDyzwmyaDtms8pu7Qp3moZkKmWBHhKzKbJPEnkZrYhqfQKYRP6q7AHudbJD1cxkxUSFSbh6nq1mzhefWG19jZy",
  "key7": "2VxYEsh1pTFyrHoww72o4LEC9p8pr1vmvGt8WUSnmaZU1aXcmsrZcJ6CtyNeKwJ8kxKvyreAfHF3Weoeuyd78Tdh",
  "key8": "5S7tx2s3X9vUYc5Hq6ZbD9mvYud5DJ5hnSFt9UcVXorZqEa6eCs7PmTSDoUdqrvmHDSeBsFgDaHyK8kukDzhe7Yf",
  "key9": "4S1dc2A5v39YcUozVpwKZATVYz6WbSTNqG7XVLuSQXMqjXu6TvJ2y5ZxLkDxL9KKVtx1K22RUnXeoJ91h4kaC1Eg",
  "key10": "3exGarFCdaKhuvaaoXz5LgUbmMV8HxSPehgfjNe8DhrPJAuHU7cfiiE6vGimm1GLqTDMLWFBN4S9QJLcaPneg96v",
  "key11": "43f8FFghaeXBJY9jpqUsmrNuHQaK4dGoHiuoBkp4XC7bu9Xa7NkaJq45SUPBBxyTi6U7Bpenq3LnRXHtb68KwHbZ",
  "key12": "uX4suhLXQkzth8gg86aM4XmCJKgvdBEv6NQuzyvsLDLk9RZ7QkThfWdMoqCcsiEpuKTvheYduchhj7v5e2t2M8o",
  "key13": "3Xv4rMAb1eY7TDGfnaer3K5VUMtvHixFS2hc8rEXY3DhgoHQheVGARyj8iXWkcnZhD7aheh4nZu3gaDrHGiaWfzH",
  "key14": "2EWmhfYchURDhPoeTjMMPKfvEos3p3LrESVP7wRwSXBWV2zHaVkyCtGXUk9Ty354pyFPALN7cR8WhKzoaqfjzhxB",
  "key15": "2NVJcjeUDtRx3whtciZ4ZTa12HC5pXvFRAT4zwwDqJ5JRhPuMjsrvwo97jhxWdB4jRotuZM1snGTrHo3X4JGT2Y8",
  "key16": "UZi33WrqjCZT8wECVnVAa4rj1YjKBHcyW35UXsGzQ89PuhEHG8Sg5k9uaoqnB9RpVhrsMkp2ftCB1Zw7RGEQWGs",
  "key17": "49yWBofkiTjb5NNJWfjK5m8qCGoUJSBwARuBndNBNSZZ9ZXi7h5U4rDc2zTYtQsZiFusfY6DGiXV8oLcLaFtFNzF",
  "key18": "2yB9SdvxkhTaxH9uwGb9BLf4iqCscVc6HhFxhgPR8amSaR3tKhxcrR4rrLwtCVkXG18BFcUZWCPdHTSGECfgSnjD",
  "key19": "QodXt3wjxdpgNHk8khUSdvXEabALGYGWsVW8nEQUarPtYaLcBfZiBfHybr72HndJM5Ya6ekYU9rwAbQrmvZnzy4",
  "key20": "2hcbeWuxjU5LVPk1AbvhWrKXyoZ43GbW2FpjxJm4dSLRK7E9dspxweW231qCQC25sfN7y5CgsQBufc7CfJjxv8QW",
  "key21": "5Zayw1YfLMk92QTMaWLNhujAJqhucYQHNvDmnaqbTHRv2GVHV9tqgzRsCikvWhVvFrt7RLxcrctSS3ib2ARJiiDN",
  "key22": "2quo22DE7Tbdwgec3nJ2HBvnezFcKmK4NzvYf3dTVieSEGMsJYv3NgmNG7YrcXvoCyJCqkKeB5mi9euddD7FjEGm",
  "key23": "FEAyS6VYPdGZ5YcFPfGPNtZtxjPQ3eNKQ7z8WrKaTzYnERYunhy6uiRN8u4Zizqm8qqhKQxeLVguGUVJr2R35kC",
  "key24": "3nZvnMoRdP5dP9HESQNtLRjPPQU58d5Thdr8XtXJPLgQKy2MncL5fBWupRofdRq1Z59WRJGLYCCmhzgexaSeXLaJ",
  "key25": "AEnV9gYbQreNJCHtvDbwG5dM7tTCF4cdEHLv3RAKvjwz9hEGSUCdHDwwr95v6R3S3Xv2KSPbH12J8QXWBuxiGDx",
  "key26": "vXMwXvPMXjBNerkorhZxsT6dVU51DnT3hXb4cp7obst2LxksoEMJRcyaKASuSG9bfS9dW98b1maZbQ8zBaNCUh5",
  "key27": "5d91p2f2ptA9rFaPZfCu1u4d2ckCiZQkXqZVCoZQETt8yP3aw1Psv1PhmUoUHAeHoWstEDQZgmbGthti9GPpz8JQ",
  "key28": "4MyVzfP6PJav2Vu7RuLiuGEBQ5JoARWtryCAsU5bhtqU9BosnKe4MfYo2kcQAh9qh4KgeyLiFyc7UwyXxFhTwV2K",
  "key29": "foZeKXzZ7ECE5GEKh41KFxsGLK9yRcavN415XMK52Devhmr9R4mj6jFpNKtqwjvCDDaT9Q8jsNz6qm1WgjX4fUD",
  "key30": "484uRW7UUu4iWKBh1d8FUL2U2oGBqLQAkaRQFoSA8Qa7ctqWRftTrRDUXrTZUbwAdy9BfdEdMaa3rVWJ79tz59nG"
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
