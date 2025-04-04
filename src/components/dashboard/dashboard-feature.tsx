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
    "4A6DJZiTuczRCPm99pyfuLzEERo7pbwRJ4ahAccsVKaboZ2huHrgjZYaGWNVcBxiK4Xf24ouWXM9fDztHCAupW8d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42BfbtuAGquR6SCystWmMwcYarv3pX2TVzF6C24pXaaedsZXTBUEZFba3sRkAiS1W53yu8EWKdKCyBXjXXeNaqxT",
  "key1": "2jF22gDEyY2fyge5DsYcFv5P1fusNYNzEeWGuz8JqBFZS3THcz42RAoigNHYxUy2Au8bQymFaUeTD1DBMwW1Rxja",
  "key2": "3e2tzYEeka2J6TYqBfEriRafrrexoH5MLXrXNNiDc5kj7NRC5uSyJKd8xgBi3P8ojj2zraZdNySuC41occ8c1AdF",
  "key3": "3FXFcXxvR2DMJy7fKNEdSG2j87uC8JCxUvLJjvmDhDE2xB2dt3qGGQMwhimNxBMtXQHR9iUa6rNmKzRzSe85n5JU",
  "key4": "5GL9WKtVS1SbVzSxdXKYUyyzSCfHRWSSjZPpWJJ3pobLhn8yeSFMtCWezAYaSR14Vki7JNT39GeXTszkqnqraJmo",
  "key5": "Jmos47tQmieD2pEDxkRrkXMGFtsvvfkK69S1cAHGuZrGsDLdBw12NRW6UhV45hQEcSxHxkwZLHvVJeHfauDBJ88",
  "key6": "E6cj8C1MBKaTQpyBhHTNUttUveNTLetfseAUBuR97k7Qyy6HufAHHNC3Pnzf1q1b3aNC4zDTQquaYCLQkkEeADB",
  "key7": "3VMypcSpPuiZAeNNAe2yA4Egc5DxWEN53GoPSJoNYe93D81BYnkdzT8QAQvyRvwhuiLhMvV2Z8yebJykG4TGs2iA",
  "key8": "29HS8bpc7GZjCAf6LzeHetWwG5v6AG17pdfMd7JfQoQSRDWV37H4dt5kywBFtHHkUShK63Lh3iCRgwsN1Guy6LtH",
  "key9": "Gms3nSmpfDpgVy2agA1bmxfSpQE6aW1WCLTs9RSuShrxQREMZrjDPGxJJ76HM7KUasyeeZQbUheosSJcRTv9uGH",
  "key10": "33tPe9eVha57Z2GKT3PA1BAVjWw8ztQb8vqojdGVn1ogiLFVzonj9UvULxDc7A3V6akC6R6bGSyqHwAzC7WZzE6Y",
  "key11": "4TJe5o8m8HAQfp2f4hUqC2SaLsSuH8WstiLFWRrkf2LuEjMzxxLfMqRS3A3H12r6MX7pjKhCcmkYqT248JLffUhW",
  "key12": "oYpgpRC6ebb76ZmnZW64sKJsGuuxp5ycwcbDcNamqYaiSML35HFmXdNvDW2jJM7LUESHMa4h2Rhge61jwkNTLHQ",
  "key13": "JXLqsBsVsZQdxm9LsgYqoMbJFnx7S5gjRM2AuKDTqVMmdR7M8X7y6sy9LRW8eBYvusZthUx8YhWBSmMZ98Tymno",
  "key14": "28dkffcFngHMDWtE15kjdWforkrBUWHRnRmKLmXt4ZyunZNVAGb9wPQU3AFhZFQDH3Trns7aekek9Fm3PUhxgCq2",
  "key15": "23K8sKVRvctN8LbdZFi3RNTdh9nqoSkhEDnjXUrvEjBDGVAw6ar8LvAeWHpMFBqiCRaqD4uJ1WhbDqNUHYn1UttS",
  "key16": "vx2UbgeCL6vydcVXZ7hqk8EdwcsoQjPoFhVcwwWJrk4EKEQh3GaYbeLRDhbmmaWrDFX5ungusPRnsNfybMfKewR",
  "key17": "5Fpupc2cYKu8tRQ1grLtTXdEZ4WwUgZNLXaxHxqe1BWHaSZnw151kb3nAw4ju6EF61yhaF8k86DbWo79q9SEDDNa",
  "key18": "3MqRCed8FHCfYzGwQqcn4vZhdPQQdqLTrkuyn1odGQBaumgoxGd5Z8nMPN4nQeHrpFw57QQikwx4P2vkgNzwQ66S",
  "key19": "5PAMbe8Ktkea5zpBFuBydM3Lv9c3vT9tE4NyK8nmjv2CfTeBtHxaDwKZVQaFaMUcosyF896GriEHy9WPGB5h6sXB",
  "key20": "3DgfEE1QvF4rEyeohft4zG7oxxVQMHRwcigSoPuXCcQJJLf44W7Yk3EbCVs2zHN7hGB43eNCnpbCgjsVpmnHRAhP",
  "key21": "2RPmu8R7kPU3MTvzGtdf6ouypDCDsnStXebzn1pwgjCVitkibz1rmTHwRAidysDZNgZ1aGqq9ebPfC5w6DiFTuQ7",
  "key22": "5w6wM57W7xwk4m39xmhk3RTedjiii1YBS1sRntUqoACXmTTL3R3dp9JssyYmFVDxPTEtpMGjZAuroHLnvAWwGwFD",
  "key23": "3aLzs7LF17YuJYBiJqbTkQy4KAQfkrpYdjnyUW4ujKX4vfZkdXph71DVhD8YdpksB4bJ8P7ZPh6qujpSMbwFPF9g",
  "key24": "32GtP5Bk47wBaMeMfYzS1VPJRUgAHkYKVqa12rdAGJqPUVtn9DDye7QbQqk5xczpTLBvMk3QwRf1T5YFDeW1fFaz",
  "key25": "5sKPz1PsaDueXwVfoyyXPeE7KxMxpi7aBZWq3EBTnbuuXPffL6JsVkUSs5efHFpYiScx3tEh6uy3KdnFkppLnnvH",
  "key26": "4d1BU8LV2WaD6BL36XZV3DwC7LKHfR4Mn6aqPr7U47SJqDbPUafemFfAVZrQaZuZT5RFaLxCGJAaRZ6Sq9vTQiCn",
  "key27": "2Hu23XXCDVcNuHSdALeewCSYwLLU9G9bgnpidpAXVSeswBv2KpbtMcwBViaKkiWE3EHQUE9Nx58dba41UgYjF3Xj",
  "key28": "2eraodXbThgaAV67bedtDXGZnFiLaue6fmoSkbSM1oZwNhTTfhdcXucueKbNtznUaQc5JkKpsCEJzrVYxXAXm5jR",
  "key29": "28aHYwoD1mh7th266D37L8uDnpesWeZgJnvPR6gfnqvBk7GtkwhTuz1aZB1eQuj8NkbSNThXcqaY1hHLdZjme7C5",
  "key30": "3C6z79QC71M7UuSoZDMdDWBZSj1WUyDrHm66u4kZX8eJXCUs9HBqCSBs69JKdoebwJPP7gSAKsS27xWvV6huWGUW",
  "key31": "4RCbS6H8S6Dpn2HP6TMyRVw5M2YhtSyrFDmK4icswPh8VjEw6NwRWcKC9BSDuJyMGb2yFRe5dHkzQAA947pahZ6R",
  "key32": "TtiKD6ybNjefGKirQMA1aKuyz6qjmRqCmXATvBcQyEHDJ9pnavPEB6EkHzU4ZVE6XGfLJZEtPG6nBpkAV6hRhQR",
  "key33": "39faU45jyBEd9BygsWtkqRqKbMQohwaKEuRKwgU3sY7fhpKCzxP6VKGZ4TwkfxEbwS7XUAVZE2gy7QSkHx8KPzFW",
  "key34": "2wsuSTzYvJhCJxU9Q5F9GVTVdhquK9ru8fMc5tHDFAtfNW1gtpgRYa1VGGioV67UXJgCA8dsW7X82iTN9HAFVXmh",
  "key35": "o2bdqwZ3QdThL2xGUngK88ChdJpUQZ6Z4LkFA8KsZKvqobKMjGCztUZ6jkFjwLB4pq6vYd8aC3F4NCpxRx9M1rH",
  "key36": "5CD84GnvgSNbBUBm5KPQVGk4MqWFNeq8YH44F6boo2AiqqAqPZamYDyWHUfNfSAmuo9YG3T2YRUxovx47LC4o9Jc",
  "key37": "J7KeAnMwKQ2HnWh6rVi3nPFCai4pmfHm9JEXzyKsDZNwoQniDRoY7hiyR8LtyBp8QmTmhkZsibHdcm9yGhpEs2U",
  "key38": "51s4ByX6ZdcCfvA1Ag9ZUFHEY1JPwi1JcJZ3d5fBcy6w9ManC86hMPpGYSc3RALj2TNErUSw7HHpmucujqpWS8ZV",
  "key39": "5fcEVsYHkKFtNdQW8g3aKiP9pCJ7LZJxNFm2rhFvE35emjBVNeo9SioaqjK9dsrNxKLjD2k8mtY2CxqqfSmodqVk",
  "key40": "2uST5CHrpnv3tQC2FpRufAAPDWYz3iTzZa1PvBBNdiJqj4e2UYLUam3V94WS6aanSu7S96kv8tz7RHiR4RNmSTyY",
  "key41": "D3BRQAMiEBDBEEo51q8zXHzPY1CXD6jLihR5weyBwgUYYeCiwkY5PoBQS7vC9YU9XEc4j6fuvvYTUCeZatS1ueg",
  "key42": "3oGYpn5Ug6BouvY1eGwiE7197kwejRSQWRZow3Y5g622yayX8PVKcodM1kCNfHjS6Ssh8J4EnsJmzZ95Kmvwkhcg",
  "key43": "yr3E9THVLVXU2gUBGEr9coy9EzHn9ozCvQdFnvgfDu8XCmGjYCmHsYto9v4GDUcrTwGRScBFybozrytQ9uUr1eH",
  "key44": "2dX2oUqT31ZkzSFtUzuCGSd2QWKNuztUZupVS8i4Qq7zborGDint1Ffkj5Lk672oABS8Mg48f7FGhGwGTH5ofohm",
  "key45": "Jz8v5V39rPFpmWEQoubRGPBtxjXB3cRSv9Mih3LTWAjS1uaSGVDKQ4zAwJWDDEZVUvrBJ1EGWZHkjxZzHWUqQ92",
  "key46": "ZPkLD9eqoLyVPJ5jX3uJRfJqBNiijeyRE2xLVyHX9jFjH72xdDDHuHePKFeCAw7gDyrGdof67Rs1CFbphcE7Drq",
  "key47": "4DbJTCX9cM7PEPeb5gA9fWhGfrhfwnxxpVAPVPqNeNq2vMRgMi7AV3xV4Gw1fxdotZxsL3KsEq1kD8TrRCqBUh9o"
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
