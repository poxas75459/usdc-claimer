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
    "51FqVuNad3LHfrXququrc9E7nMogi58qdDgo25XqxJvo3EMcZ4bcxtEUTu3RfsBskb9PrQxfRGBHQFDq8HuwVfka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dQCTTjfSDdVLFTe1QGiJ7EkRUHw4zyinPiMiHT5TvXxwzPJ65Xo4tEptQfcWtougWiRRx7AN8N3t3CyPcyFapPu",
  "key1": "33sCC8f5hxSnUBng6mg9fy2fdQNkGwypGDnApofkzt9hsAeULR3RWJ6oMs52wrtBdWfqFz71HxNhukpoy6tFEHMx",
  "key2": "3QXAjmafSkLWjgf5VeAAof1Lv8x9mfLYyEbeD54rYcQe1hp91BwgT1JmNY6gp5M6gUJt56Jw3psxBxtT5uM3Yevm",
  "key3": "4NyHGzXRxAAMsU3JE5h8536NaMe32qfPpAM3Wt5KCXCg8AwHjTSnuk3iY794DNKptGY6Bvk73uDHMNKBRy8Y7tgm",
  "key4": "49JUs3xcc6mUDqG91xqqKe72abKceAYN4m2cUYNNb2XEXiiXoZ5jqn8qs8usJd1bJ2bvyZ951CmmsGs6N6WVMmDa",
  "key5": "2QUbn2NcmvZ3J9dZQYTTv56xhLXXnhPs2eBkxhXkyQ3ZFwoY3egU2CVebGj9vcneiLAYN2kGHJeNLpjRB7Gwb9PZ",
  "key6": "2EimPFCgCkkkBxKNRxr3fBdprDU6ZyZGS8r1LToyuGZoigMYaNJ3pBXngeaAPBavyUnZirCe7QhedaJfLWKJjaTX",
  "key7": "hukmbtXDUqx2ubMzHQR74Tgq81Xq8Yz3Txgi8Www6VoL6faUCV6ScR9EJD8RLeahaGseqeEapUfkzMzNwryH3gx",
  "key8": "3RNBqYevtck97LwDkRv8X282Y1er6JVMGbf4SgWVsYKpUivdPHXvCwYwBuPiapBiouvgrxRB6ybYYyEhtboLDfh7",
  "key9": "41FACN8zAnaAgsk2zD2AtogPm2KpRj6X9UVietctidWjvacb6Akjd52sUNXscrCeLDXMjbdgc2VrhTZaUNWqutit",
  "key10": "394LYBmMETz9FAYBAqaTatSkrBSfd1aWirQPdGj4c82ZhVbRRdvM2Bx4pH8sRF79KskWWWDawhebY3mcSfd4bzkS",
  "key11": "3t4tQsCgtaEAy4eK9c1NqpNqd3AjznZe6soe28M6WEhPpiWiHYKg41a7X4VijiL4rqjYyX189yxaZcFmWSafs9PE",
  "key12": "2C6PuTEnKcmHvRqpvCW17f7RTKwCoKBiazMBYEK5uByJCTjtnHVBaSbRkgArRLAmqMNSgzHsjoLme4NDS51sVwsc",
  "key13": "suq5i2QnJ9u5fdvBHCXmjBVWPgTSaJhzWZecQMrn1FRmWczj4zHE2Wge9CK3HNrUBh6CZGioCFRSBUNyp57MwCY",
  "key14": "4CmCcSUa2LEQE2b62e9LkKK2G67hEz8q8vRoinEPWbNjdXg1cMxNeCjtzfcY8V5a4uUZaLihVtFB77pnd7rKXMZG",
  "key15": "4ACj8sQQ1m9SYRZ1fGLQQNJgTLx1Y61f2ft5NxrdKCa3tiNfKK9ZXtpZ7cCpGw5NmEakn9atCixTwLmgvsh9XNby",
  "key16": "nJFWqShLWMx5UzFwvj6f4Guc7SKNnMUdkUsKytbqm5A9HqbBMcDCnLpRZPRYrxRE8v8c5sR9X8PWmQGE6Bf1iFp",
  "key17": "4bqT7qk7sBS9TGYw1Tz6WxASjfSyHWNiATXmbjVqJ99iJEJLgL6FPmLyoVwUeY2efHkBHs2YyPR8S8XRWizbHmio",
  "key18": "5atnHkfU9q8XsxR2gJkynJ4d6tb9EAArM6TYsr7ym31CpvP4sfFtQXgqnEynTxDxad2oq1JNKWJc8nbNj59zpw5S",
  "key19": "2yAVrkxN2RbNJBqxnwTY3coobfiFDYx1uKkKNCiNhVnb9FmDfdJmFp2z6xq3Fm6FRjtR4Bvsah17VpcQEqALpczj",
  "key20": "46hSnV2YaMBgSoqYsfNVK5fDc9FXrMgWo29fEF9e5CZnW3yShf5uCeXL2SBzgSB1cH1JF6iUm6eigYpoFD25cBxm",
  "key21": "2x1UXo4MWfrvuYxCMD9UtqeG7fJU63yc9BevGwpbUhPM1CfzVkiAkfcTME3WcbgZv6LFhgzyyNzUthD1G3MQXepx",
  "key22": "GcfZNmxAPUGfJqsf1GfQg11U8fVZuzXPqFDx6ovRU19rxqCt54zTtEWPS9aQetp4jxqtGm6G2eYWB8HeuZbq1gW",
  "key23": "2XgxwA2Aia7acdT17LTLAEAYnwCBC5siutyeii2XJSHuvHKYAg67hYo7vBe7PRM59K9d11tJBCTy1Sma7iP3MGcU",
  "key24": "3ac8NMw3uthuHmntCUkKoZj1JJkvWpp2SeQ3NaC3b9o27SMxMACewncCi8n5QNbR1A3dotsJECaGs115UByjzpLo",
  "key25": "TjEV7CtyHZSxCcA9qxAUGeJF7CgrJ4ERHDyQ5poNZzXtA6AVTjSaWCY2ByE26aT1DA6M3HAtyMKVaNRo6GeSrHB",
  "key26": "63rLurbUyzsrJJbEoKmDtCJqAGuEGNyCmycsD2Ek4Pyay7vdU7DdPr6MPBvSpeNeECQgWSZPrZnd2g3mw6k5vmhQ",
  "key27": "4cr8G7aJtkiqYRhKEqCik56H8MmLP63yVNmnfDBFGHQG27gLbGus7yWyGrL8xRa6yHrVVma7mjsyhCmn6Nekffek",
  "key28": "3D4feBp6tRdbnDVELZnnfymeE2jJUMr3HuaFsMhdf4oD287suCN3qH1gMVr8PgoQZVPrFWf9Dboo1mUhMAhnSNYB",
  "key29": "44ikckHLFUvt2n8XWhKAzw2ELbXUZkBc5N13VzX4oQZnTxwiTeaWQXfSh47RBLSqzwWAfjWC3Q7MFVAyT8ydj1GN",
  "key30": "2pNvPVjgmr8H6owR9wPzYtNn3qpZsGnXuagZdDf8gjE4tHcCw6A2FtHkDct9CttDRD1ctbd718mc2yqnz4buSZa7",
  "key31": "24zsM4YTJZDHiTwdsqWafJArLMWUtHXeAGSB61tLWWW3qa4DR6buSv2Lrya49MGdz2VnJY42faAsCKG2n9VGiKT8",
  "key32": "65cwQFxs7GNF9SpTqL5oArATRn6kk7KFQ92u9CU833M4MnTW66gubJNyMyQqxgcm8Cha6U6NU239wb3JGU5hWRHH",
  "key33": "5mPsJwTFkLpR2dVxtGEyHSc3N5nCVervuqdt7hY5NoeAs5YNgY9jqZjPTCULVrGtaw1AuvqN54q7LQYFEjXB4m7F",
  "key34": "4AJZDwVS2bU3QFYD516Q5qJBTAu69ePVEWw8v1V1kMhVJf9TkVARkivB81gjs9MbqZ7xq5Ad7MBRHXv3Dd83JwBS",
  "key35": "4ACFBAA4fM3ahS2GfYR4QJwfY7ya4YdvnxhR2L1SWk2dUKZFYbD8cgwFBfG7crCa1hShvM5RZtaJoXLCj3dzo7bq",
  "key36": "4UvkNzRV6pnnmpQc5tLF77A42t5ZbcxW2ZpCMFdacF1tF8omC1SA35DBpEyg7gJbzDpeWnmz1kTqmbP7DS6q89cN",
  "key37": "2D3AcJC1rJbyfoo2fCUUSxsjQFR275qT3ARVgyEukRrRUGzPuPMd3SZd73qH4LGG8RyqKv9uAjCt7n8T1c6pFeWE",
  "key38": "Bdrovn9EGbrXHXoUBdRCf2fVjxRC8KhxJNFMPm4QCCrZQUF4Z7ZwS7DLr6vVsJuA1TiiZHQBVjxaG78hiJCaMXT",
  "key39": "3ifTP2dkc67wqcr4Wh4a2K4j6o1mam6sPJ6Et9qr5KQKz7sePtjbmaKyzbNBRcgAxp88ZHuNo5MuPyjufwfybjqw",
  "key40": "5N27ZYMzKwGh82dgw4sr6s3QiYyYsycgJXrh8QNWWfxvazqx9hcu5kt6yh3kuDeJi5mUMxvxq1vjT4xHrxXCe6y7",
  "key41": "4PCckTRogAuKdVybr4qrBt8QeSi1BE6buhQXjnbqmXH2muLtJzNonAyCrKxAsZrZZqT887Q3dxh1hA2TUmrmn6nK",
  "key42": "4hdRatHJuoWQgKibQnhacvnB3QKu2LSexaFFUEu5Hs9NS8zYWZFg1PfQW8vSvB63XnvdC7kt1g2ej8NdMCXCg1Wm",
  "key43": "3PWhu21jBxnrHyUGsN1zEFTECAuFeXpamQM46uCPKuM955huL8iTwY4yR7co7HWrHX3V7jCFiLANiMRNkqJFMtVd",
  "key44": "41woMHVLWRJhxGqzK5cNzBXRD8xC1SVSKgmLtKknFciVJ6zW9d9tNyGXx5HdGtVqGax6FBdXCfDBRN2DuUo8BMxw"
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
