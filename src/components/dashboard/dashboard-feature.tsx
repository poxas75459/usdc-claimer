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
    "3YD8r9RFU2xPVfMZroTaRY85Hi98ZH5412Q2G7X54BgQVGjR9Uvi3pcRB7qSH3sy5H5TrAqHrWs5CEjtm4jGHwxf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "461ytgoNNiVFhkNMgr3Gr2VEjzbrqyNwtbyEYBBzGJ9EeWWvz88smDjk6usb8y6hoiptTNzsq2qkzvZsf9AU6kb7",
  "key1": "pbbqHhasyFTQvSgK9FqpKrXfnxVtENatmkvGmc8LxbbgRPj5bC63AucuYrFLqR3HwNwNVwaGb1Yk3p4DDys27Qe",
  "key2": "44PQGf5ypWM8P6YDNwsJVu9g2fGCfD9XJhxXdHAqh6a7FHEzb8ihcebECm8dNKkqNxPgm6AGpYz7YoH9ViMjcfHm",
  "key3": "SZNnXQXxKR5idxSy4RdVSEc38op8ZBEa7q3VDt9E8NNqdVL54PeQD1avvQXYBx3kyRU24qFeFo9VaSCPyHvyxGt",
  "key4": "5XEN8jWmjJaAno5A2jKNAs12En9cde9RV43K8Gi7sCeXnCuvNH16FQ8bAUqV9BBGcaNjgfpgEDFFo7Z1D7ySerfX",
  "key5": "48ngA1Pzze6HdrTeVAJCz9y11NsJvFU9ZY49fv5Q3zZScrB3CAs1sCXbAN6shCz5A2DVhbAzvBMWkZ3191UDmbPA",
  "key6": "3d6LoTMRMTsadK8kPe4unDdc245cPnMptWd9fC6UTXMwfZRRv6yRyNXhtb9PUtTHABLB831rYNEbcyVyPoMz2WQe",
  "key7": "5J6bWTyZDqqJU6hBwhV6RKniCzmfYswQcL5Q4Yec6WhexV69dC7kiTzreKwLHu4suzmvcDLDY8Qe7dSzpMddCXJy",
  "key8": "5nAbDZFCbSGaKSpxxR9uU2BmH3Wqhn63SmaF11M5WVPuWKas9D5GvavxyBAxb6YigE3gG9V4M4G1EXroPijg7UAJ",
  "key9": "41vEn1kbhgkMsLNsNPejpz5sYRiib2K5Y4GoZ6yt2i9pf87wLVfCPX7n5VYRcFut1pkAHBJSLRru9cjAGdgRY9jP",
  "key10": "4gctkZStwovoD3BoS4gnp1ZQnSdK16UA6vdCTh3QpAUDaY9LDZvdsq8Fy1ejTcYvfyM8Q4DexggNoGYGeVE9SC1o",
  "key11": "38Db1unx4onTEWTh5ZZDoVPBVtTCv7T9GA7P9gBzoeVv1jkKJLtsJ96yLwtD9ftXigK1B4vgTwoBmVYeMS6MezXg",
  "key12": "5E2LWYyyTYwN282uGbJjCDdoHxzb1MQfmzvhYjAdFc2JFozpUAZKm3YP1gqP4PpeZQKMHCCFLosWvhi5NFxWxNm7",
  "key13": "3AJKv65vvd7yk9ybbCfzYAvSKg5YYaTqyaeKjideTqfeUwE8t4QkrqAfWaxm4VR1A4amBJmnzZAP3ouJdUphKqaZ",
  "key14": "4iL2LzpfD3MVup6VzhftMKLiTbKximyUfd1NaqPV8wR6Xiy9vBZ1sHDU7F27zYcmCa53k2BCfEtcB6rLNb55r3aX",
  "key15": "477NfwU9v91WTsHaVMGceqE7mM5hRkZ95DZ9tNpX33CaVSs1aBzoxM68vYxkrGQcjv2Npc7pZ13TjSmJSM3jrHYf",
  "key16": "3mJdwBJG5DuTKY1xFkF3TGpXBjG6WQZjpF4RzGnWW5vgiVnvPsAyF4yYsCyMQ7NKXWrNp1mGML4oXgC5XjmrBLxv",
  "key17": "5UC9mQnGESNuDRsakbUnHPmmC3GJoZAK8Du49HokiVUkx1fTkqHoVb7Hs7PboyCzaLPBeHnTKwNbtEpYpiokGFCG",
  "key18": "4gmtJkD1ZbhMyUDSPzc5pNruqmwWWP9SYfgJU86bdUYcTeEtzsYAArkUp1aU4jon4CXfFM9wjz7UJdxdL8JqA4c1",
  "key19": "5qDfrzmxkpDwrN6yn8EDKhwsWSEeYJEEfwTLZeNcWiGEChg8p6gGqHyCuGSyu1SsbiweFqQ2oEdWH4GYE6npygo8",
  "key20": "4kVhwtXX7QaGTVLuLi7oRjLjN5NWEWrKfhzPvuXmk6v64AhAyEByqUGkXbpnBDYAX48QmqnHPxf2QsghZpbjRyyP",
  "key21": "5PYAwdY7LLb7dinkZsDmWkbMxkGUXyPrrdbpiKNmAL5TshpWNYXgBFMKFK2wuwozkeQTw6LU71gES6EFKHG8X5nM",
  "key22": "49LV2KexCvGqaJRPfs2NuEN5BozFGfVEz98ac6JgeeFSoNKo2i2sDKhbA3NPjwWLQfsE6MiycFEJXEXxpvxVZGTU",
  "key23": "2s55cN5Md8SFmNaPmX9oL5QgNnB8LPJULfDfzTANpvMDmVxzAU8HvTFJM7wn6cCek8UJRdbZsVpCV6re7P8SEX4n",
  "key24": "63PiDM7n8PWdvmAcgEdKZk5GUiSshMC1XEnxDJLqMA9GFbwfTWDUNmJKtmouMUmH15Va8unyNvydXmgR3xh9iDSA"
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
