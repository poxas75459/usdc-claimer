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
    "5gN8F2EhmCzNvSFQXLQmJBb4CXwyeaBUQkodpTM2PQoPmqHHTdBaggqQAdY9aUffDvTfBjKrxdKFBCacP6shXJxh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FvFzMjysbDYEL9RgopF95FenysJcWL1LGTyCTMsMSBVnMsJaSyCxWeePYRyyzT5TiZccPtJp2hgYtK8CBo9Kd2U",
  "key1": "4G4jPv8mDfd3jSNva7nWL77kgAN8M1zsLRWtTQQF9vN3otPbFQKGJhQmtAjzCwj1vymfSdcQ9EjnHNFf9XWimvd7",
  "key2": "raEZkSdGaQvaKDDyFsc2MWSh3Jikuqin9Lxs34fGPF1vKQp518hESJwv7mN5sZgxrRFm8RaPkBF4Y199nSfLNSb",
  "key3": "2uRAZdRewBAUfv5h4TGeXoC5aLgjgSRRipVUdKnkia7MmfCwTLHJWFGWQN4NySTKjXZhSRuekhe4h75J451f4AYP",
  "key4": "5wRePAcAmnEASPTnxnE34CsPzLqAFgGoBne7kVQP447iA7TGhhHLbHif8TsLAHL88EEwNdUXhoewEzciPN6RCaWm",
  "key5": "mJL6sJ53ZW5bYrEWBZT9tYNMfuE7sTmC5tz5hbJGh39FwzLUbaxtWXQYo1fD7w1hr659bcJHAzmeBSqb7btJVZM",
  "key6": "2rREXGhDHZQYZRGaZr3v4YP3WYD7eHJSJ4CuRkptXFyMaat87PZyLFedzHQFrjtfeEkZGtmYX2doEvgy5UgM2A7Z",
  "key7": "29qH1UdEy2gvqDCu73LBtjetrhxJ4dkriVb171CJWB1e4wAuCdRUjsH8TPtf8dUD6zc99MyssDknmZ2S1vTQUR4v",
  "key8": "4vUTCSfxBmk83gdYnQK3aVyWrr4zx81vS8YtGardkPagL5MFhcRKDEnULRvw6UyvkSUXTq6iUt2A1kiB8LaCJYPA",
  "key9": "4n9yAEYnciXU5avhtQurme4j8ujvDcK9Bdt2JV2SQbsyL2ZoW1zWupfRbo4x8xAL4FSBwJujDLq8J85HaYyxqDoe",
  "key10": "46f7bKNNKhEnDdTZAuYDokJ83JDN94Y9DDz1BW9CFGBte5F4PNDQAsFA79duxrocinVTQr4t7GRnwHE4bNu29BLq",
  "key11": "2sqY2L9pnpuYvB67PK4kMCi4V2aFNFkM5gzHVvgxRzQRvcpAQf1Cq5w64ujKgGfoLm14AXUz6aMUaQVWvMpycMGN",
  "key12": "5dMbjnLvAcXWfVZfEX5eVc6PBpUGHVmDAc6PJBfj9BxJ3vgjvAiHdSxaYW4DRXYT325pWPBn4PMFubZsktGStiPr",
  "key13": "4gdHGvdSYzVuFt1rDYSsYeQUfNFmTNfWgJLnyeP3uyxNWWkosXydCdzFMvWhCvognQPiyinGzxJLVwS9mbtgVVpJ",
  "key14": "EaTw2LmpF9bUBaXTCgp7X3sheJ9hZkVU26ziJYLjUR3KeBQWLVS5zZWVt9ti55VWFzdtFAumGrQ2iZB1eaCmFg6",
  "key15": "38TdwQ1oidqQqfde7WBxmexn51kUGguawM1voVVcbXyLXURZowg9fobf5kvJiiL1cSuHAnzPGSdxhj4hGF99izkw",
  "key16": "5VjnVuu84kHTbuE8aqkLjV9LgQDPhXAKVgtAvGpqWUoJvEy4U6UbkXL3DYA17aGS5s5y2EfrYEgtm2W6vXkrPpmY",
  "key17": "657k3dVz8qMCPdyaZAggRRiRrBMo9cBufgttwSCnFpme6wnZPJhoEvVpu46aZo5GtD6AqN15iznC4PdX26saXMMj",
  "key18": "5x8y9MbrNE7ZKFgpa7hszv36q8LUF7qzs8tuiQrV9DEtZjaeJyFaEa137aMiFUcgUYZ1zur4EcfmU1rtGKGiVqmT",
  "key19": "UXkwM8AU7X7ocq8qUeLgLNQDkZkCz1N6j6Tp84UBcWe9drvRYmMCktwAGtweYmNnM87MojbaAG2M3ALjkfUAchH",
  "key20": "41ymkaX46qBesBJUaWbRmXmYtfrojthTjLHvvQbVU5fE9FAP1Vhc8hhe4mWZY3z4LeHEhZByU2eHP49D31cqwPUE",
  "key21": "4iRcvShzYaNEvV8LgNnF3FKevqYL3VmnrQzZx3Ze13uWTgatdSmsknQcPUf3HD3poqLX2x8JxX2YHiX92mkBfXrr",
  "key22": "4RkgGV42QQCiTZoTxQW8Aeb9aavak7uyvdv9xDg7UFjthpdJ44S1YdxQ2A2bXn4jZBCMmYtUnwnmxWYYxNpf9oGq",
  "key23": "4QhAtMnoccsWRhmujq439xkWBxBVZvAGwuyFbdZbivf2RLuicWFxMNK3to6jgZQKBpBrxmjRb1uB6C2rqeS7sGx7",
  "key24": "QQjorXv8vaE7NMPGAoArwwcXWMryubQC6bQsi5vu1g9CAo6wyJwixYwnnojDUu47MUFLndYMayMQKbwP2BBZhqR",
  "key25": "3CrT7HKGtvS1WssoWTGvJ3nLTio4wSvhXVDXdju1U8od7YGCJJvqu58s8mg843t3nhFkPCjyofMThmdWV9UwaaQj",
  "key26": "2G55TWTXsLg1LkjC43JC5rE83xs6jT65e3wUyF1qscLNfcJCLM3w6nUm8C3cnd8SZYbZHPviaV6pHs3GNXwaygiz",
  "key27": "2UJEnfxJqtDtY7JJKmQLKcAAmbkoa9SGmKfJkYuD4oB575z1Qb134M8Aump3LMjuTy1D97mE7SLP93ubme44iWkM",
  "key28": "13CKEvY8kbR2fCZxJTtD9j9LcSgFAHXqUZaKbVsdKswSg6PW6TNnz22Dp2ChTnQF1DpVA4TseqLJDd7QyLPyEKd",
  "key29": "3nK4PRU5PRpmREVke3g1ffCuPzSC13GzUC6a1bwjLd22etbtnqjecJoXejMm1Y75erVECvTyrw5yt7yUjRsrUFpz",
  "key30": "b175Bpcyi9vb3U7AhaXNGbXdiEvSF25aW8BJxVfR4Gjcx4cmNzn1gNqvsgaihSdqYHtDi7yxAWoYHFC73xCs7SJ",
  "key31": "2NFneacX1FzkQtsWGubkLE6BgWdQFyEMxmE6qGnJnPkGJ3Q52VLYXYkpCW8hfxsUtuZPCRpUBs3YjfUgEYfArZCq",
  "key32": "3A578JtGV74BLuaPGbdUFQm5GP5FHDCiAfwBFjPmUKbkgg2RwuuziaUyYGpnWgxjLVGAHaEtXCK7dhgjUo2jKcFR",
  "key33": "4xMuiRgRdr8WFX5GHt56vax8iLXpBn4mdfxssyGEnuiWG52t6vNunR7G5fmQbmPbdoWMzLCWVLN7wJEnodERdQWL",
  "key34": "5F5V44w4L2JaQPjkwAeQMCy98gYXRkPFrREnxjsjYeg89UGDTpTBNgP36g4vmmns6Eu1Hx5hBMDGtyGEWA1uLYgU",
  "key35": "3t3TfBQs56Wt9HPG1SEbaC1rVs5jif2GHBJdkJTVCaV2nqTkqMyoyXAURcQzb6iVT4meWdag1HoM2YKGZ12ZihE8",
  "key36": "52VG4kUiXTyknp4nTfCGaXYd2gVYgMBK935PVyjooFdsCYFFkYGYTwfL1wPsgjD6yyTzSRZzeYuFg42BA7dyfzAm",
  "key37": "PJ58wS868Bahwko4LqoVN6iAXHJNWwUZWdreUNc4UTofBWZ5eEXhB5KT57KZysfeKGLGKQqKLN5r9qrsPP1F66U",
  "key38": "1qhFk8GYTzjZNgdbBGFkm5duvtyPtffT2mHbtAmDLYL1Ysor3eoPT8VLP1VBuZgPeZdYu16MYNwq5DBzPkJhjgn",
  "key39": "4XD9i2x9v4VkKoDBuSQySj1MTTDNFvxEXMEMmDXy8VKUuM2rTYiT2ffvLBzyEW6wmxdTgPurLCi5RbKWHa7oUs6a",
  "key40": "5iyKHVFpgz2hAFTSt3YASA3773wfgwGsyy39hiZWwxnJFUx7aSfB87BRnvWDcP7t5gLFNu7V9cKqc1b7ycuaRATm",
  "key41": "2fQvXML8PoCJqZ4MUE5Mk9rFmKSkqyXo98VENJfGgYmRmhmnYCwZHgean2pt2ESy38W9kkDhBVHD7pqADq4hVvCa",
  "key42": "25q7C7BAGMMfX8Mzm3odRDc98A1EQdw3LMrSWXRE9SmJgeAEkmqHMsydwFMtmi9RvqBcaNHSxmDmqefCpFoKpruK",
  "key43": "4HHV6WyTW5NKsJsZ7aCmKUZwCmLGps5MbCa3hShcGR3gF8ga6JUcr5ZjC261NQ8ZcAyg2mXbrxVviDo6V8EG6crY",
  "key44": "3qYBCV8tEUTAAAo7kEiNKYbKMgayMiCz1uqG447vod622hBoGULmhEufyuqkagpffmtaH1AKYPRwNf1kdrvNJCsZ"
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
