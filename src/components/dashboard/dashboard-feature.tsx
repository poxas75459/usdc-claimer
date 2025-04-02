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
    "5UPcfjRNUTMtd9VqiPUEJ4MMWhVdt89fCygQXDEiPcN4Ji7ZLWkh9ipcYTcUXbJfc5bnqpqUPpDn9CKqfH5xzB95"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P9tPBbQse8sn3Vv1Gpn6UE7N53S31UWyiqCQuMMFdyyqyAEFsWb7GWUJh2i8fuxxdcBKPEZMSjcmCay565118v",
  "key1": "58yK5HWLPgpjMrXAdUshJCUgANkB3jCoTnNnrEGAQUaPVQ6evvvjBPFkBKDuT3YoT8S8YhucdfC1hQTR9tpzDL42",
  "key2": "2xBBfqamerFsTADWFNd6QLZwK1xQQuZMVZ1KTBVCi3tu7ot5vNZiaAgLHH6SsFqNJYFAxxs8YsNzAprxCcdQEutz",
  "key3": "518gHTgcS3YeTVvJqPFeQVtZFG4AvpunA8R1C6nou13hZFAnT62Jeox2SEFVEjovwxrdFd1Zr4wjMvWhC95P1SdV",
  "key4": "3eWN4hGp7U7Dke8PoMrTK2Cp8R7LENZ4K4b3V4ve3XHbx3FrDuCNRXsWUVBwziQXQLcUh4bNu8b5LnCp2xN1BCGA",
  "key5": "3rXfx57z2ccGSQwhgc8Z79AKAV1eS6M2QPiwQKM77TJYagDrTnHJysxyZJqaJ3DdmekaK94nu4MwtUe7HsoXnweP",
  "key6": "21Hsh3KppePRnY7i5dPyUKi7CK3VBmbNb5Vu57Ma41W3Cz8JGoThenWcS5z41d6x9uCRL4886xB9JDLktxjGQ4zZ",
  "key7": "5PWQuraJounsusDGeMAgdi1qYXe7R1gM8hjdSzKgBUM7JMJm73jhKMLupicCKauewRFHY6jm66c2bo91GMB88Jzk",
  "key8": "5LA1eEtXdXSMVG6reVNFxdseBijfM98r5XKxmqinkbZ2kScBCoBMYEJ73HUHQ7YYEzPRZfNawtnuigs4K2UA8QqU",
  "key9": "WW48hDKGQRSfBEMfAUjAXPVXxCRAB8G2LU3zF5MX6oV7zhduqWSN1ebKb3N8uqrQibTyN6s1csCv2McqGWAYVQD",
  "key10": "48XGdhwEo8MCPqXHNkzKTahdcjbpTq5PLuBb9PVsHDpUgBtWjNNzdMJLTo27Nrzqe59YSnqLCyTNM7xfHpky6Zv9",
  "key11": "2nmBy9NBqSrba1K6M8RcHvbuCCrvyjKxC9utBP338UwZYisPXFPDrRVGDPkHNNMWKkvKmpK2xjsNjAhK4CX7LwXH",
  "key12": "4a6fKA1ihkyWHKfVPjXVoniwJH56JnKA6aizfaNDSeKYZpJALqgFNSbF6ZARxeYMm6B8pnB9AYQfEcVZtH6o1e9d",
  "key13": "3UnyZSp54SwqP42hzHmZfPWAtA6sHF8c4RRRHjUpVxMCcgr7NurhxHHXitdTztRKNyJJNiNwZPibWqA4uNM2jEGD",
  "key14": "58ECjxpmumWJjinoLWcqixw62qhBYsgAPxgmzghqVPrU2mbuTMb8uMauyEvVbPPTB5qDLVGZJgZA3cpqvKusHNBZ",
  "key15": "2gLQEN3YBnpVv413mbvs12WDKXhE6TyXvCEZFQQKdnEApkw27bDTbAtLSRJrmLhZfGnYSdxU6eJRt9bzbu3hVXt",
  "key16": "2vnA4s6ediueMEb6HhxR175XEYUaegdvSgHv1YfchRm6ZEMeDfvnkLWBNXGzN77T78GiJncaCLVFsMd491dqrKGj",
  "key17": "46VtzqMLWZBVpiqd4GiqVCKNH4LgjjEtbHqFMnrrL8betzaDGNX7N7Enx5hjEHJiwdyinCy2UPWfV3hYG8EFfFFF",
  "key18": "2Dv49dyAkHAK3C3toJ8m5yKbEv3zhHeKQ9xwxd2Ukveg9jkP17kd3qMycYhRYV1BZba2VamAyUuFJR6MPivgS1BU",
  "key19": "33Jb4YuKev1tirv7dKiqZrBMSrZAWEwph9SWQbwJgrqU7JcafWkcHyGb3MGT9DcfJGbHx2iwxw5pCZepeWD5M6dd",
  "key20": "niAWenTovTgKJcEbLyDXQo11zHqu5zC1Pfv5FSwBz7FAN6X5ifSVoL7HsgDPTvVM8Kb4mgvj5HaCWFoxYAX3Q6V",
  "key21": "4TmEe7SCfBzmFyAoNTLrjr4S5LaVK7fRgcxVdLAdHNvTi2oCeqzs5taiwF13GXxnZ5rrM4voh72no3uM4Uroq1Xx",
  "key22": "kdu9nNGDqyRU1vqCJqMTw3Czs5N6fzssJX967i5Kje7y5fJTg8D9fdqWKHzTXujYLJcNTbdCWVuE1j8CyEsqNbc",
  "key23": "3jR5EuTyUz1Ehjxo7qXDHd2QhbaqiQarhMLYME7GKqYJ6PXqMjcV7YTNuyBeGv4S78jqT5TD24yZcnz2btA25iXQ",
  "key24": "2VjANf2NFtCvEViu5tmxhxFEVhqTLqh6n67NZsQYnxysVg1Q8F92HnaW5wdpjqoS62yakWpbA2iDS1MGWvJRkpjy",
  "key25": "3HysgRJq5V7wWZvYJmDnt4NyySKxdk7BZr64MVD1BwA4Evi6rtPdn37QHN9iDRURKdYaNaynavegDyHDqbs3UGq8",
  "key26": "386coZbwppYrFr68tAa74HUYEZSCSowhBLjLEh6iGGPYvNr3zj9Lxp2DSShDrEHAbyRm8PwENGyvJYwwH4cYEto3",
  "key27": "3FVk7o7RybGyqMRDgu5MYExHVdUsBWWkz5ZtMoVGbRienUm5xVeZiPKSgSxoGHGMAPgJDTk4XnZqEkTvXUfZ39nt",
  "key28": "2JMqR3tgsKw9iYmF8DvqorhWfvW5NNi3GK8qRRtaHrGtNev1ZVvqmvb2X1iEWCaPiqyBYEALwyQh1fqqQuFRhfzz",
  "key29": "3cSTLF6JSUteG5hS2SdFAzniGkiz72ojySnND7w37SaeBp4yFJNKxBXpr8aTkGkDD6RdYkzGHET4QNm5MN1dHe37",
  "key30": "2STk4GYCfrAuB2UQFBtbkWUSUcwKdx1nPGAjCwJ5VzXpPx9iwD1Xc3T2am38fdBhEC75mSrwUya5U5D6dYNxeqMe",
  "key31": "2gFTPwDs1xFfnQN8MPzZsBa2uR5dL36eo9Kfre15DiSQT8xNTnMcs9N2kiGT98QQfznZsEc6tgZJ1vgejTVQBzZR",
  "key32": "5AbUUvFYJtW2hLWF16LqYypbrHfhNWgPKwcqx7Z19Wn9KuByodtS1NM4DCg57Can6uKyXN9R3ZXDHVJAkLVDYVoR",
  "key33": "3ajj2y2ybYCUND78wKunAiMnho3c9Nz2vfuS6LDAMXDvEqGb4DkHxS9TZF363b1zRZyqHq8Sibrbp3SfaVivWnpF",
  "key34": "sZewEXMDTiKgJMaBJHEwtRsUqH13ydLqXdA2ipsNCsstEtqrhKN3NBiHAUso91TuvjCtQsySctVFb2M95M2DCU4",
  "key35": "2LKZaQgHpmR59T4YBGwHWufppUvMU4M8j3vYR8e2ZJntF6jYeVSjDurXn35px2ZAEnmnxq53boWBNWZmMDjNRXfE",
  "key36": "3oP2YiGQQdN6gHDUhK8178sBTBFGX2oh1mta4uMs26hdeNivhb16PzPKMnpfpj6tmXvKgt3CAScCpQ378HBJ4C1V",
  "key37": "35dMicV82wEp5nRdeB9u4ehaNc7DXqRz2E9d8d5FRFK3YhxMc6q7WZXSEeCWpxq5WaoCDUabjKYZPvoAk7DsvZ7a",
  "key38": "5sxHgtUfe1qZcRnTkyk7S5HY52BLUp2MWauzL3mmQ14rnUD6oSJQ42Ja9x6jCutRwYrKrZn3Kw45SqkcuoEvGDGS",
  "key39": "3BaWSiUVTYXQSy16W5aPcbgaPLhxtBrM8ZEvQNKNr3vVmaRUhJ91Z62DqjQ23EdzBy3zoDY31gy3mFtaMcRzc3Yr",
  "key40": "5VEURLx1cNw18eUB9AukTxnZ6rGeWJmFATnfiTcgNuu5vBZaq3zL2qQNbjJ7ggMYQL8RQKimUExdr7uhcpkt6DsJ",
  "key41": "iDkCpAyf8NPA6D1WxnBxXmDLeDdorE1FuvpaWrjcxhJjNhwTHMYD7rzUzkY68evy73gpTiC3rzU3vsX6PvatCvW",
  "key42": "3PSTKAsmkRzKWnNwoEHdzASrZ4RoZFRpZJQRpCSZh8hMXFryenSQSUpwkg4Huo7UzJhzk171oCSTwGQoazcddVXb"
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
