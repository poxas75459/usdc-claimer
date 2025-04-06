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
    "3fG5TgRTKwXnbSkUDQW3uWTMbGJR4197Q12rZMaAQ1Q1VRi5YrA85fvSACygHT8evdJoVcgvHjEaHdX76ddUm8kW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MDzq88QX3TgA9ig781kXaJaekxjtU9ywMWc9GKFkpDgLDj5SfARRti6xEZiEmsiVp27Vjwfww6wGb1skHZDXwZq",
  "key1": "66ueSZaPWMfBJMSyuAbNq6fBCRRjZ6yLgjSWuxLmrCf4chXNodav2dokMfTPs5vhAdJSwpHNT8zS89nJmk58NYhV",
  "key2": "2CZx2i4U4vqqDreGR1EULFHwknn5kMhwH1NjD8F93YcFEvpVTpXpsAxDyYM13p5hgJHYTTC68CcFeWYQ6Ww8gx8h",
  "key3": "2wmFm1wcQDNB4raLFx6qNxmRagUBvsk8hn1U2ziQDguu6s5ELRRWZr77obE4PLHTwT9YsRPMR1yHB2aLwm28WkJa",
  "key4": "dC3PorXRsUB29ojwtByUB5yhzEG82D6sRDSMktkoFucASXySo9S9DpcRPGU6r5v3h2VzESQqoyZJe1MQSfd7yw6",
  "key5": "4SqHGD7XPmBWDNucpZn5VHEEQpEstRZ6emQdKt2cpwBejG6GNRbqKjtbtjVdr5cpjJ6rdvJ1t2WBbuVafvZGofpm",
  "key6": "5gmBSj28SrxP4VULZEm7Eped7v8njzNbDWvXR4k57mAGpGQVGdrSRZNkzqf6ws72Fiyj23qk1DAfCfniirhYFazN",
  "key7": "3df2DEGX7xBipdHB8ECGNhhDiXLbLYimXW7apGfGVADduKhrF5PW7kENJr5Ej7J8aBZph6nAPF7xNahbVnk3Beyr",
  "key8": "2r9STqNWaE2DPqRaofb7ADnYR1xnp6M5b1enqsdeE2FgF2mYeuo9tnwawCVQMp48B6TN6TwZcEY6SckMYkjZTGWi",
  "key9": "3VpBnWXNngK1n2g31schdyZ7t46cVADrsfQ8xwDiqSysFLTaCM6D31KtrGTiFCiRAu78JnvA77uxRAeoezZxa2uE",
  "key10": "gxASc57NxDknoNYqdiMUMXDqy8anWh8mzueRRaATS5PukG2gqAU2htqVTH2NTqQr8k6yJ8UghzHFzQXeRR4yrr1",
  "key11": "5qX6EYHYny85bhiDehFL4zJmYCQT3ygymwisoKt5qyJzBu7U86Ajb5LW4Xut7oxTqUmE8sC5bMRro88adYceSraz",
  "key12": "57yX9FBCKngA3jxaxLxPqm4Hh8fo1Rfw6vZ8GQyD5Pxy1Y3nGMjCtj8nZBzXACvK1rFvGHEEgKn3AiSo6eZABy5q",
  "key13": "3kJNGu25sh6NEhCWreaqqyaqCGdQJYS6yEaqyZSSgtZ4GWTzTqA3v3haYJxPCnakrqtRpbxU3VRW2EVhBNtBJeVu",
  "key14": "4D88D8zaZPjNJNpvyEMbLGBEkTkQuSsVz7PyA8MiTdEP2r8QmRCxQ5o4aHvwWQXazFgTY8UHr1KPWUUMpfRxLr46",
  "key15": "4yZakLN34LChMXU99osBUSemqEfgkrWmZut4NRzfD7kfgETkiz7L6bbJA171bTNJeX4se8p9F9D54CAFLS6TAMGz",
  "key16": "Mj6tVEdAAPSMrf3matdoYHtGWAdbJWCnuwtCwgmLdSJwuvtYvbP2goh3UTAkyGwk4oEcJmf7QaWxSYPAJZFD8Ej",
  "key17": "46vXAcMSANEBbtzMs8i1w2To8YyRHvxKtts2bsYUvBbpGXF4HZcnc9RF6JqwH5pZAMPfRbB6vgAWzHKimmE2mK9c",
  "key18": "4oBY2Hh7bGCbMSdvvxcvNAo3gdU8RfduvKEhJYquy6wg6XcymUu4WEv8b7tpcCegwx7qdcxhwxnPhKNgZMYicDRZ",
  "key19": "5ucUvY2WUVBsjFCcVETGETewVxEHcV77K9P5etnG9J6nYnB3LYSWVufs2PWJzQrBowfE7kVpBjD3G9zH4ZKrf6Fo",
  "key20": "3cudxfyJkus2jHq8qEM3673F1xMoNs5jjFyC1Fcm5j6DDojC8WNXaPgJ5PcKr6dU9kcFa1PLn7Qvrf6T3Y264E81",
  "key21": "3xKpm5hccbTGdz8nNp2pHttRLfhznwoXWqCQ7sgJTHA3PFfUXkfZp5kvjt2453VDJuXUCNzgma3NVNPqSQbL3m3h",
  "key22": "634A8o1zssrBj7d39LijV1MhSLT5Z3cHXeFNrEHiiefCSmr9GPaUxymSNS7BcjyHahu3yND6QEiy4BfwVnckScY",
  "key23": "5LxF5sv6BqCSbHZKR7ysz4WwdP21cedbpoyp4vgJpxrcdDMsKvSGysWtKEQoTZNVgjbhtZLFuHSkwDwDs3VeU79T",
  "key24": "5ku92N9emrYi4YWXQBJNsQeZigTU1cKnouARMpLeZobrrAffqQynuCM8e9EH7N7JkVTUGAtX7LZ9QRjR3BN7YXqz",
  "key25": "3gbwDeQorBuSJsfoo2rwUbRPHueNCmFB19Whrm5KTpQYcHkjY2UPkBKWtC1rxHkeozwnntPfVdmuMJCytLtDcHcB",
  "key26": "4bYm6gvNxTWwzHSaHBWwDySJLoSy1U2rasxGPnS5xDedv7x6wzP2eGwVoqZzjduoCAxTCtq3a1pdvWSbFTLHBYs5",
  "key27": "2R9XeDU9GGyh7jz2cQwgQvBymoUdPV8DrQY3ajpmrttpxe7HHuSvvMud4kMxdBrNKRQbiEkx7DdubRHH9fRhG5MQ",
  "key28": "2Rbz2jqgvccYGAP9ZwKi9ZW2kJ2kMgm3Y2nNpgHiCRzQc1LUi6DTijb6KMXj72d8vzhgmSSdoDRppU5x27cMzDfq",
  "key29": "7vvtvqVDc4RgHPEFEv4E9oepBciBK2PcpYVXtMg6cahreQUpKsaBZHkuEMYgEptdFJWSwrra6UFsY4ag4RiWHq1",
  "key30": "63KXyyDS7FFnmtVoFXv95vbQdB76GJRNQ8HJPRR4ryAQSnyk94mVYCvEbB3i5ig53inkRXK5N5MppSypBdkt9UzF",
  "key31": "3vkMtVfngt1Fq8vK96CtYYvYR8VLXnhE8JCqnqGLDrssSwd4kxBf4aMyGp5pAnbHKNwuBRBKuMqastAxV4P2Bkh",
  "key32": "3LvLiALRwqoRHvfjq4niHk8m1AZzL9yo5qCZQZWHL8achGXJzu2F8fHnMqC7oX3ECHVMCuDHV3sj2kqcJaM929kR",
  "key33": "2pLyYwLg1EzSsKgwNKMayMMkzriHpYjAQ6Zf1ncLLBnaYo1N2Ziy6uSNUPqJanFcTiJJkhT7PaYbTHvbrJTUQSs9",
  "key34": "4CwHekDLx4nsxvMU8EdFYmxsN24Nyi9ZiqKSE7sPPHQcJsh18K5AcQSaiZQ72FRWREwmcJTxpJxTNmDXuDArf3w4",
  "key35": "4xfZGsR4ASEX77eazcTXqxE6SQcx92ekpErqGc3xA8aXK2UqPr5GTbzGX1MyTEVzoxHRvESgSc4H9V5dJ7qy3cp",
  "key36": "3jQiEmgbaaHHkotDY22MRUJ11M9kQYL7VUsxcmUJ28VhPyai4EodrNTvNv835YFELUTNk6HVu1FSkHMPp43SjTtK",
  "key37": "492HevGRNNGd6g6TQ6KjJYkmkVgtPD2EcX8i2HNrzboaQsgnpP5BYhgsnHrEZdAaBKhdf6SJetQsZXubuTqidPX8",
  "key38": "26UMh36izD6ZtNhLCweY9u5FpFUPygEhHo78weNMEguS1YM13Ku68bedgCGNJzAENzVbYjAsSED8yyrdsELY8oE9",
  "key39": "4dK4dRWodSZaC6trgbDwfjTVXqTj8ZBzaMV8AkvCy2tmsvPFu3DMmTLKh1aXqYa1P3GxBkrhPgiRdLFUheJ9YDR2",
  "key40": "5fL3HNDYo3WQuL5tVzecL2dJhsALUBYjcYL4PYm2cJZRdAW8EDmTAZDGU9c1zarJcjzBp9wdUNvg8BNXtgnaSDiK",
  "key41": "5b8zaUXSAXGQFYvzsdAMoPof5sWC1RaD3jQdMcrT7w7fiF7XuDAdCznYreBtKQAwpnR5KpCa9d3tNbZGvcBvvv7Y",
  "key42": "2BvZJ85MPAqvgjVgcYZaPbWfSArupYhAMTD9kpnz6mBJVJ8hnsxqzutWRf83g1GirMKX8Jp5fCBk4pzbyoCh7EXX",
  "key43": "UU1d3K4GRb8bktCbpgpLTgCF8nuUqnfUrZuqAqJNSBjEqDpuGqJMwbkMjbBui6N3V9uEq12kHD4rxbkMthFrSsv",
  "key44": "47K7No85aY2yWQG9tu4SZBPAz2HCswMw7CJU4CJ3cKVtnuxMYUkZEYBcRPHiBebWDNsZ5AZ8g1TgL38yzB21U8Jk"
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
