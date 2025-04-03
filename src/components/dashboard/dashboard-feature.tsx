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
    "3mqdnqoybRL5g48YhbGUDGDZJzrGNDXHZiaADDZBEVEWmrfDp9JAXBpFAaY4Uck8cLGJRWBS7aK1svt26acV7Cgo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3esD3hHsa1NE14UThww6V7V3iGAs5q6tQovhkCTvnFCMF9gmnPegBRNnFwAfzuVYmLV3yTnjfHrXutxUojxbuLNN",
  "key1": "3sRN7v3TxZEdzph33Ufp4GbNHhmQgETxPNRJQW38UEHEXsQdP1Gacqxi7LohyXwgT6vvByeRwAvBLwdD8Fyu2vda",
  "key2": "64KXLArEJ5QW24pzoEpnoJzDnA3mG2N3RNWQ1Uz2MMBMAjVeTy1fACUH7JgpUYb1ZYQ3yyJs69uMrhGtgZDZnUAp",
  "key3": "4BKDDH1nvspQHP1PaVR29E9fX96NZ6ZGWa4ugnZj9NCARWNdfRGE1ivD1vjHtJZJUKnQ3XKV8wUGp6u8ybpesc3Z",
  "key4": "3M8mLwXYPKRB6RaF5d1XSWrnVPBofL27yPB9QPx22PnXMEjBgStobk7Pm3YyYsirq9sWxjt8DhhJVUEt1dcg9aKp",
  "key5": "34c1J7oUcTmmNFTeUo32CrejxWF6pWvjBnbb5pbxVLijgWeiFWpTnX5U3Lt2tmEyj5Cu8eJ7ckwtjKpvkttK2nVW",
  "key6": "HNtQ4oxtxWAFftagTjzPsCvac93oo9cZdpPAmYdGwjehJp5N4LURnpxdqCaTipyKFzzRgf7ZGHePVCj1nD3bkTc",
  "key7": "2Yu9NjtR9xVmXcshVHPvwPUCAkfFTzPe9T4mCRrQTFdAhnzHJKAu6XCwB45qF9FBDaeZZZzFiUJjrs58dM9yMkeW",
  "key8": "2c1rfh6Dds6mxM5KyLPHHRCmxj11Lmgkj6WwQHVzPRAsqdFqRuufVGFpKX3bKhBDCmFHHiRJy54J4tVHTFZct9A2",
  "key9": "4WThbzLMpx78zJvsYmUTvGbg3m4tAmycLA6L8deiqiP7ptPnqsuifnnmk1T27YQR6RZ31VbRnbsRNm7xmn5A9LKh",
  "key10": "3uwiKvo1K5c7sT5YDzSPQSk2mFyPX7u6Asucy39XArVzCUYibXTLED4rf7QznKmAvMMxdZumnLnWDet6gMjkdkzH",
  "key11": "4FzFo4FrjbC2pX467Ld5CUEpAPxGS8SEXRVejgh2QLfZyPX6yfW6qDX2cp2AdYxSp3nXuWmnoHeYNbLd4Y5wTgUx",
  "key12": "5LQta32VNUVHg8aHFzyAUpkB1meEi5phKbcTT6VZ636U78HwCgKkNRGNBKL9K6zUoZV8b9xPYUyALowMqjMV7QJL",
  "key13": "3q6qrWexwizZSPEXqx8EAxqGQEcdocYYZW5VdSLC5E3m4pYyqQEcrR9o1qYXThfQiTjF199hex8NhWjPGgwd5jEd",
  "key14": "4rVfRbwi1dEfFmnVXtU5gAt9RZjgMmEnxK1caQXFd7MkNQwNMTxthyqR9UgCN5wb6h2gHW1EXmBMvx4QuTLgRpUP",
  "key15": "5fNfjraSrTjbJDUrudbArBf46DYioGqxBfW2ADFwD2HpLQDSAQhZ5u9gxYbmUhxD2u2fh5ApmdyXw1kFtN8vE8vb",
  "key16": "yCmqjcFHq2iKkRkV3cE72K27k4NzKoJvqtGDFQySVt21FmJQN4oLvMSffUTehPZ9fcwoh8ha3LwKrw9ej4cKgCD",
  "key17": "5ayoVUWdVEF1atDVFiuhnhjWMrTGedm1ar6T7kraxB7TruDr33KgALESp8t8foT3oqJtbBwCXDpSkpEHVf93URrT",
  "key18": "64RjWoZqd6R87RwJsdGYvQPT1Mx6VoCHqokXcAMWhpPn6GMMievHCA99YVoA4mUkrmAh2RC9cS7G6znZ9mrhqoEo",
  "key19": "3bvwHJDFJx1WSbP9dTPZNFf6LCB3qxhPc9XjYS6P1yRUrzvorG8DMCNxW3P8ypwfs4h5AqGxtyKwYwnKgRUKmaT3",
  "key20": "5yHd8X4HTtkonbG5mbC6z5Jiu9jaqWdqrHGsnJg5Y1z41xryquMRwid814zeH3fHCg2nJtL5ZufJL7uWzhJvL1CV",
  "key21": "4RP4FcV6nT9SowGweWcxPWwMER8kSVDHvWiqkeSVM5frrwGgzr2EXsBiYuR8ZXtng1LJZEfX4EPSGSP9m4DYjeqr",
  "key22": "ZozrWv26pYxsZfVwjk9nuJZdyxXQrfLCKGTcyo26RDFASgErweFU6jMxoXvH1C4EYAjT9swBUygmjEwSPTwoxRR",
  "key23": "oyEMuFUWfA23R7BVn72DgGBQwkrsx57ZH4PmCbCeb1tcnmF9w7G8LgymszhiKU2CiQuBpjyRWoyGtccyARLJBf3",
  "key24": "GxQpRmEtcvmrmQyp7ofb6RtUN2rGK1EWFCZ3thbPRDNHqPmKeZ129jigcdHBinJj5R7JTBocDqEjz7zjraUkuqn",
  "key25": "45zzuuJBzmckDCGX1342PrRchMDZsDBE21CHruc8L9tCFeQfgacHrhZ4dRvXCDXuM7jUYQGePvBVPW2S2Z4GmGpv",
  "key26": "57HZVcyfKopNNPMw9rCyvKJx3Mn3bGBk49prCqhmeHT7RkaXuPrhAsFkB4Yjigcg85Jr68RXGmcn5CUan2AtNWTT",
  "key27": "4pWEALa6EumScEHYUyPJarr7uBFhMavq19arsaJ4HBhuFfbXA6L9kWRyfKNJpvXHN2GdjTQ6tjpsp2P6eJAW3eKr",
  "key28": "4R9Q4CKq8KWZxE7pWefuzqpbbeHMb14CMULG2vADjuWhaCBDX4GeLuCuwBuQJLHtKCpcLPp2vwXoFeWaY5vMAgjB",
  "key29": "3R8HeY9m3knHcJMWkXfhFnjqMXe7DGTjPWsXpUAFfQyoVH1eAZM3qL2xuv5GnreHRabnubH2S5A9hDy8DBgvibJ5",
  "key30": "47UWtrE2RGzyUfAFVX5dVquaJEmYvzV8BKjFTaGs8cQasvYYyWKMAtEMHKGq1BCKy3VDGXrsdxpLw7uwCaoFx31P",
  "key31": "2KyvjsJ1pQ6YGxLHrpSKf4vkqDCSYt2anpBFqgXMM3kUZ2gJxRzSrB7sT7uQ282Gysqod1CB5x9QZX2A8Re1xjxL",
  "key32": "3biThFSzYg3WrQjgZWnvYQbtuVo3XfBfB3t8P4qUXvgdZ524zmDDhk8ucAGRFm5Mqw25LwdwsjJi4mxxdK1abEmM",
  "key33": "2iz5AMRo7N9k5wQpPA7GqECfwqtp81J4pFexsXnz6KpYKYXPC6G65qbSr4jp3uhNG6hF3ckFhr4fXrVcNXhqi27o",
  "key34": "4YQLqcfwXhowkvxmtBREJ4m7QNFz8mgbY2SsRaRHK5k63iCPa8zy88n2NBjiuZuGGmU5Kv1Wpzct8cJS49ZduKE6",
  "key35": "37wsHU8BLfWBcgh5wwFp8Frw8BU3bb27DKELfaBwFUwZfKmL4vnr1u3ckksAyJag77wipHhfZF1XgKStoV7nxsHW",
  "key36": "52YCKz8B1zhKJpyDMr3cwQCc5URks2UYobUAoFkgu8fJrq9UR8t3Y1U25VAFbyLw5dKKTTntpdbMbstGf2Em1Qvn",
  "key37": "27X4YsQzHkFPXzkEe4tJkyHorxPfCnkb1XXncz8mHS2ALcsAv2zQP5eVt6DsVnBoEZTTAxW9sn2KhZvBydyHgH7U",
  "key38": "4Av76H3HkUdUraZBkKnNx3BQ8Jtz1ZTzz3KT6nRosHKvXbuTBFidatvqQ5beZTUbdiVXpLcvANFs7Hc2kCP89Xoy",
  "key39": "4QpFRkPsXHdfWK2ei1Sias1XBQjmyxKVfEQLHKVnyFXR5J5q4gwzBz3wMgLfuAPtgytdM2MBGtWye2zvX8yFB2db",
  "key40": "3UAyPaKFDBnic9yEX1ovB4wsigPUagKkC6BFjXdr2YJPQjGKBvSJffRWaFHqXeDnZz1PGUZ4qz4gvZvu7WLhyewD",
  "key41": "5Pouk4zX6WGurigAK2KtoQaZbhw1TsNK2hVSsMmHcsyXNRJVpvzQR7nEGaCGBAmGcXZia2PQ248wSZC9y757qUqs",
  "key42": "39Q8gkStNogY9kx7Lq6Y8fBKmN5parZBJpN9BhEuL43qomMYtTzRXBeRZUCV71cMTDCSjcysTXRciZKM2vopJz17"
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
