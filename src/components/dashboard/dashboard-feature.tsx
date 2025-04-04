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
    "3QyWd6ErY53xfCUTz9TVR7Lf6QsHDbvLaiU6i7EyT9erv4D6xNQ2YFZAsZeB4a9S4EHcs8fZk7iN1TNA9UJ9y5Fy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CryWtyWytnHPK4Gq3Smew4YfsGbZDdX3vuZEZFNiDhGW8MF27xBLSwdkuGBLrbHTvsYKuTPVXQefcemEJvYZPfT",
  "key1": "35S5xfqmwEGVabTwKe9ZhE2CVrAeFDU4iazTaTD592tGwM3D69pA8f1T2vrS2aCpDudV9ccuJ2NNUzD785vP4dKq",
  "key2": "3YYoSXfbgTQXtVm4BxawNe8qwpbDW4j6X5FpSgzW4WT3LmdPJTrgCrPHteh16WPcJq3BndV5B76RbAig4X3cje4X",
  "key3": "3QFDvHL9TRzmmY7LyYD4Y7DJsRugY6JWJ6dbZbp4JsSBsfcQLkormRxM6MWAdML7JcPuu191sT5HT699PXcJEsb5",
  "key4": "4gLvL4hJKXqyRLeduVhPPKsMqwkNdVVHvfCJC52Kamrqbe1rJ3XEvKjWR7ML1FJwxvnBukiZWMqts8SJ9a5wqhNS",
  "key5": "3mgPRLrXECoHrrYQZy8SuyhhYKSYij6XptUQxrVok1389nf6y6XVmkNuaTdq8t3gMQKTRvXbdZu1vYBihRv6gVk6",
  "key6": "3SJk2SkSf3tFUHAM7huPoEMeg45s7AWJ6pngiPUoMkFvykYf68oJ9DdruNGC3aG9LcEpsibPnm4b2H6ULCmKJ8Hv",
  "key7": "4J5igAADnJx8iiLp6J25ij3z52TFws9b7JVoAi9VtZXx9d7k1iotYnie2bY34jZmrEnyy3nTuM3ywsLoVfKjhdqz",
  "key8": "5NA4otAUeQb8ykAHP2YREKp1yQfAaYP9UVrpMew4VwYEZzDPofFuJYbPXx3UNuG5rDvAy67abKL2ZeFWSp1tUDwD",
  "key9": "2smK3vqwyji8skX8chNou5pogsqY7mxVmeqifRX4QnYRq5YnotLmE54uJkhkWFP9dQgXa2f8ybfch88dQMEU5X93",
  "key10": "3fCi7Nd4GnUkHfrk4hktW8h5BJTjKkhbwb28T4LievRpEEgUDca2A8tzNhMujFjGFa8MsUnMFzyaVNUn2CuWYwMU",
  "key11": "5PXHxw3C1v9o4Zu2uu4sXCNART71YbNGV7LTyjdoDQnmHAPNGaeov1SA6dgU8c1eYb26MX2tz6YZeT7k7FAGnSp5",
  "key12": "kvQdtGezwvKEcdUHf4yYxTm1QpaNjBbb1G5VLbkdbK2Gobwc6g2uiiPKRtZhL9P8qznc9n9QmizQWg9wBmjJPrp",
  "key13": "2vxxkfJ4EANax8qqTTZBpSBQNdq9X1iV1bawXVEPayEEXNGNmpzcGYYX6175ZAax7xGik5BQfJSq36MCcd6rRgiA",
  "key14": "2vBY3cAHeMoXeWqpdcAEekKhVHtzRqRBRNXrnwHoX4E24XZcRXtJ1WqDhktaS2vV9Kd9mKejnApi38BbNghvx5TE",
  "key15": "27oqgqXzPg8PEoTk9S7JQ9wZBeHc69cFDaacbEspRf6k5zha6ULge4JcJG34PUYkhbWDfoRLHMc9kgNJu13LBznq",
  "key16": "5eDMWKSBoBGRiiWEzaAofEnGy1xXTeD5xN7cVpCistP2rQeWynNPdErNTjANTbo5s6FbZ9GhZ1jh187g4wrCz3Qc",
  "key17": "2WYoWXuLb2w76NR9prLthKqiJhScm8mSpSk9VqcwS6XFZDd7fqCVdtARAYXFPw3CPWyqLPBPCvNyeRQspe2DWdnj",
  "key18": "kzQM2X7qWpkWjC86KmHrWTLvXda7nShJf9su4a4iSPYBtZsPcpkeYnmFbHrHuVtutm2J7LWszCJjf823pDVybUp",
  "key19": "zMvjD1NwrZHwpYk6gM1k3cEGJVvF1pwXpHdqZqqqeFy3FborGy8wLyyfbzAgwNPBuhroJDT5TtEsKyjGCkgRrwA",
  "key20": "3fkbspBHvyEvEZUpVyQd9ZCnv3gqRN75xQTLwuY3Wzm6LeyZJwr5MS6ew9mVRPKg5V25QSrAfJmNgyQjtUezabcT",
  "key21": "pGracWpBFoJzTfr4fzEkcZcQmShGEPQszNWC5ETRpPfkS9K4jMuogxDEkDokDKuaQBkoAtvWorNducajv7X3XML",
  "key22": "2pn6TiHNCzD1zvTarWPM2jENZfFyXUuhbi5zREr2iAjcpvmKcSV2Pg1f1GFFLnSiMByqShq2rgqDekcN5UErWhnJ",
  "key23": "5Fx6hekpJpjTi9dZGhaVFVEYkPge59akQgHoRgv9HF7aYzPRSteAAvToLhskPZmg9qRXhxNwjABJWd8fG1QNUgWE",
  "key24": "4oVH3LjBgN2woktCNYjM3R998wnqWCMzY17Hap63514wes5ex86TAcqh3m2KsoXTUGLXim7VLHfTRiuDwosNumx",
  "key25": "BkwqH8SizcN8wuCjNyAQWRhXB3JeVHbQF6maS1VDTnh6ho2QiMyZWBaSMsX3PLoMvBAawdHdRFnMx8k15pzgdJ2"
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
