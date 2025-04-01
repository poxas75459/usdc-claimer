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
    "2HpDvBPYNqHWG8d4ZCZgKx5JcEz8RvKHx4Mj5TEQC8hc4SDyD3DdnBFhXH625sg4H9VoFEyqqrCVZzstJ6E5J3YB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2REWjMvLhQvt3LsFyp8XDwBeJiJxeu2t5yr7SM2QfsVogYhHbZsoWCTVpwisspHM1GZYDPeAjtNScBDx3ftoKb6p",
  "key1": "3DmhfDtfWJUDp2mDwtZsEf5fvfj978nBC8CDKTyoGSuTsTHkLPDQuViCQ9WENSRGnrdr78PUBF6bFgVrkYF4ueat",
  "key2": "3jYjh9BjizbfNsKCwp4jLVzKpzPVAGqAYF9QkWucbuX5a1Ucajdf9g5AHN7TF7Kpm1viXrfsRLb4yKk4EsGriA5c",
  "key3": "5n1uZopB7TuKuW9ojKcq1vLThEvS398eiNoPT9tAG1n2Zbf9YUiKxaDKiQM6n5LEFwPZhLyZTt59BfeufhadfgpA",
  "key4": "3sUjhtFqYXAGPjRdYUARGXdB6NZSyLMjCMd8rRyrC9yHPTTXtgyJHFPtiRFDLS1e6uaxQxWYpUgcGqCHDfqnx977",
  "key5": "5FZwVUyez4tyRx6uHMVQfqjnCMYEC3bera9cV7i28vb4AEnMhiviDuhMpaCzU1kvVrKXSsEtCBorpM5UkaXnJS4G",
  "key6": "5DhM1yGJMmM6HSzLiNVMnCBEnAx22cDtbFrjhmjLbj2DJ3CDusT7ZJt1L9Ni71Tv2WFcLQV9kBiUCPc6EQUasKup",
  "key7": "4BVThWzrTUT5ZkgCiDNUuTHUfmhvaCbAts5gsmff9T59Dq2F4ZoBrVHa3YWNXQYyegxn482ggBmvK4SHtmZbVja3",
  "key8": "5s9sVdtR8pvnLkDee74xeVmz9JoZtNmKurLbS1Tm8mVuzKhtfxBBQCbTMahinb3Smegyqyt7QH6i29DZW5LWeiRp",
  "key9": "3XbMGesbS5uavkxAvV3MGcdpFVA2uTiJciG6Fm5BrpWYEbpXyYpeDNVr7yEoGCkpYRUd8rJ1Q1GU6hisU2jUBwZt",
  "key10": "3Kc26fCeMxDbTbMpYXWL7EtqNCr3x1WwgmyYkJoA17VBeBzNrNgVLks28UEf6jFMJ1ZKezwUFehZUyCvhpxhSe3G",
  "key11": "4hnP2qbBjaEMerGUgyXuC8JSCP3WGA2QUvDvvjyRH3DTDvZiAMFk9AJU3VbxWAxMqpphsttRp8QVkZ3YPTeE7m7v",
  "key12": "ttgZzgNpGP7CWWJBsD3ChEgRU85BJQ8gRofjUSUVyJDM5VfdCS5fhCiChXNpToA63AoBNsywGj2pgTX4V1JZ7Xe",
  "key13": "FXvNk31CgrwP8ZNuNBDXbJR2jfGHPFBQi3bfmocriiYQZDAz3874KRnc4sQMDE9aQv59bqxWjvR6QurqPKhBZPr",
  "key14": "2Mjyhx9Lo1RpuMhgkHk4JavXae1F71GX5aCNW4BKD88Stz77R9XmcyhbPWBeCSXWycRFW4zqyXAUoH1ziT5V7WuQ",
  "key15": "2P3dmr5upp6bwUKpyNV3AinWv8Ux9dR6ReUspprZ151fvvW6UZQN9aqmfapm23cQsx4BYFN3Z4f7jwtGooL2Rrfk",
  "key16": "2mkUNB6PLXNz4gepzjFDtomRrtEsKdwSnaGWBAjM8jYpq8nhAeSs9zCcmbvckm6xACyH7JpvgTXPWMExQ5kx45z6",
  "key17": "4jZdwUhcEUUdfJAUQGoi9FJH6AAzqeCUAbm6XDNqBXSPLhVGFiSLGcwkZTzNuaCAgy7xaqQvcLwEcM8HSQNWoAZq",
  "key18": "4v5wA4NgSQsTJ2nxor2JT59HYcfJnUiCfejm9xadixf3Dacy5ghxcKdNh5wfr5ZjvqBTA3WpKMoR9EAuHtE4ukHd",
  "key19": "3fdgpnMmY8RicN4JVH4bfNij5wBjiHcYXqV84ZZFz2UzP1ns5eNoWNrz3GKRkMsGn8JCpLF51kDTH3QWsKRDDDHn",
  "key20": "48uhxfusZTigQokSPSGAqcBfxM64a7yQJzvedpoyY2iJmuJ9y9FfXd3uLjrmfDxaBsHB9xFvvipHL3enPWebC2L1",
  "key21": "S5KccZjZV7fgpJ2c5ab2vgFzGFpx4wLNhq6vuoTKmmygPxxun5SxDJebJizS8gC8CSV8jggv3Rhc981XgSRxctw",
  "key22": "hq1rzdwMPmUmxWBk8jmQr48HgvfaQKFN8nwA1vcVzqYHnPpDQKxszhSAnHGNhBrP5mnn3eEuY79XsDY42aMtsUm",
  "key23": "7ijjoqE4yrpE5a3QdvS3YMnBvdqUPp2eYV6B5ghFoWT2eraw9tUcM7SrQZdKMHiBZibR5zVcqkYNYKJSocpET8d",
  "key24": "2jFZJhvXdt2HXbrgEFDS3XcFoziCrdR8ydGSWzdNcPPup2n19SKrGHZ9yQN2m5WiE1P7LkHXtU4anZDz6n6gMC5X",
  "key25": "4N7QF6pfxzeuVUUatysnXQghx4sDCTudAodnpuNDMh8TPdiYwKRYMhview9GF6eQNgmdYWmzwYbnVt9E4c1iLf5j",
  "key26": "qACk8JzUPGsNrnRCGXPTTZaX1uFFDZqjDX4ACAKTkmZoozEsKy8v8TzYxhzbV1kdBhx9PdbQcUUJwthz11dKkZP",
  "key27": "9eTVLnY4WZrNXNStnP4jUoHMTWnooAhQcGNCu45vPEoqZ73rmmzA7gQBpYob4fDiAxBhem6MeBUQPFkG7EVhmA7",
  "key28": "2L5UayzdFtSyXa2SGBr1VFVGWV6YHxHXU3mkV2zAwP4YrfpVTCkkQCTYP3k9Kr4zD7xRscNXtDKqsSMCgyCXwauw",
  "key29": "4y9b7oExxDh6ok4ATdfmB6h8UiZtdKvbEFDqkhHSNRKdJ1zS4cRXJ4c6WFviWU82UtX4WrPUDZCZBU7zPi4i1VYT",
  "key30": "3ube3h2odVseRUqJKsUkfoEy6LMLNw7cyP8PG1izjmGuW2S5ELbzURAgRuhXAZNPe1kXZ495dRXNgDmAyp3Ub2UJ",
  "key31": "4HSvevHtBBQpAAcYBrPj3dJKDufi5PbyF6oSYR21xFoMB2xHJsNnQZ7pt83hAkdWQubGkTFqg8ThxpL963VcGiS9",
  "key32": "22HGEN9aij4NANQ8Gap7ZCZXAGZDggdtfDA2Bj64aK37La528p3kg9HcjKS9oerqu2M25hM7WVratES3RadfWePp",
  "key33": "mzSaYTrnVip7vbhB4u8J8FNvwYS1pVtrV3mWs1TEEXdCU7oHrodeBZwyxEfFEwnrvZdHdrdm6A4uoLBBfNAEyY3",
  "key34": "4oCdm9T3s9wNsRYAruycs6G2FNJBSjFwkPR47uZmmyyKjQjau7bAHw48bbXJFb4UofkQnSfashQcvCkAikcB74DT",
  "key35": "5E7nQhQdW6RNbkF2nmVBYvCH391QGd3qRxV84MNjK1YGPhyw5ojpAhnZrjmLZ63vFgqgydVSv4A1srgsKPum2773",
  "key36": "5YvpnpXyP4E6WHVfVVJUWfeh2kDh2YqxgFLVLkD53oTxm6RQdFK3rHt29GCSbiiUYECwRMS6M5TeN9YRrqDyMu3c",
  "key37": "2T1N1dfdiatRE8TxsokQkvRZW8PoHwMHyFDhwCrvVA9YZdt19oZkstp7xY7xxr7ngWQ9hamYcYkyd6H428Y3kZw8",
  "key38": "415dayEkyHvVKy8pWWjCM7ZawDruDycwbzqAnqDFCoLMDath4hUoxDGL9bFS3CUuy1kUygq5QJv6PPGUgtE6J5fP",
  "key39": "2ghb5raLrxJfuxT48vmCebpZPq7SFjw3AWSxzgErNReKoh6GGishijLbKrVXV5FZ6V2uzVxUz8aZs7Ke2WvazV8H",
  "key40": "4EhGuMh9sgbKw21raBfFZJCo9kCAfwu9t1fLNvrpJ7GrBweKzrD7NvekM31KWz6bzqS9n8wvCzz5MiffeXTBbnBj",
  "key41": "33fgHPAB5BuWkKng3fzJ3ErLRrtgo2DS3uRevcpN2oLkTQgRcTnvYATDZpA2vSZMf3gRMTbfbuPiAno7zvfY62iK",
  "key42": "5DGqSEkHhohuDebZx6iC1WrBCdGx8mpULuriu5eDiHm2frTNJYErkoafqzeTRtnXhdrAYQx2NCSKZpQTAZaUafr9",
  "key43": "5bqakhoV6Z1Wo2hYhsSd9zu5FmyGhggVvV9dpptGBDq864GJkpnPs4qHP8n6Jh9i74oc5TaBwM1jXbJpKo3HYjtR",
  "key44": "4bKfgkQ7X2MAG7LWYHAx8RtXoh2HKsdiXVoy3T6odC2PKXEWJrcVzem8PxKuzr58jz4s76cdWN2ygLEbQBcTzp5a",
  "key45": "3FjkQH3t6tdWuUH9mXJ7m2C8qP9KUhQLWYuVWV6MgWXSbf94kmR34N2cywk6DFWc8ijawkzikNJNSkCuQpx3iuxa",
  "key46": "2QGHe3jpbC6pYciUfzV754GaiU7Lua4o3opxrqDWjgVYynqSzr6q8dPf8eXxNhvWXASXxPQcs4GX7WsVjjk26V1C"
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
