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
    "5pq9CpXQA37FJejepCkwSqhy6rQBMh41iK5UFS9waoKeif9aFeK2ewMqDjhizbroQ9SQbNvTyYzu2u5UhmT3rh5M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nH3Sab57gMrRLSxUw7E8eCrWpyAPSEmXJK6KUYaemkFoiyzNrW3tBg452ioUz4F15FcVqe24THtvfDickEkEtW9",
  "key1": "5yQaPHqcewtu29Yjhynd8G9jZwiUN4iB1VrfhSnFdUMTsf7y5f3HgizgtJwv5y8zuRbVhrfyT6rv6iLQbSBVC1Fm",
  "key2": "5E9exSfSjKSa3DXFvU9jmE76sY4htfXeNaeXZ3zbhAH6xFjtspku1ua6S3wMxGysqZ3RPYBrUPtRLPHB8AhkV66W",
  "key3": "WUeGJssnSisSv1fJwq5r1xQsTGUbP89FBJJG2C1qwUvTFpH8g6yrn4CwhQeNDCfUnxeiyi9GfPkR9v718Tw3Q1P",
  "key4": "29UvaebMPHRconGUx5L6ypvfieypAfuVgtx44wkmzVpgtbsuXrrRqsXUqXhJLpZ7fJxN5ej6bHtDM8Dr9mfPGKwR",
  "key5": "2CUibPzqLJctQEnMrP7rq1s7SP8gfaYt4J5JJoLrax7YFQQoM8oLXtAMdeDpKsDTg8twGMLMBVtY37XYD2cb2iof",
  "key6": "27uhLh5Xb93cZUGrdnYxuJwHEQfxXNubFh2HqBA6H4ZaZDNCyM9QNGjMQQmLmWtcn9twBASMWsh8iyF9KjCrEsmt",
  "key7": "5NMZPSCLPKn3uEQ4DTGT2HKCLW42ebGfsyenBj8jCgTJR97yf8Mgf8agYfQtzXDDm2k3qMdZsn7pB6QfRvAtNh4a",
  "key8": "38Q2sQjz2YJJqnRBRSpAhSeEANSNN6RrT6JWfihufK1ztGJQAmb3pPNXDvx2cDjzAxteKX6SHbrwjv5CdjPahjwt",
  "key9": "4gRopL6tmp31kEgZSue2xYNrAmrJuDhqNnHdkPKQS3gXZpeAkkpd92Ha2Ch9TtLcQ5SXkiLaG3dgpKsAEQ6G39MQ",
  "key10": "3aisEP8zvHn9CeeQdCJDVPyq4rnNenhoPxJuNvMCNm3T7RJU4modipe96fx9XDtBWAernFyhB6MQKxXypHUnRbe",
  "key11": "4FeqEg7donVadEFcJPtw5vU9RAr17uDfPcsrod3R2PuLu9Bcgu3hSDMBM4nYM1KD11nvNtUBYgE8aDAsnNxmG6Vm",
  "key12": "4Kum8aiSzCncukFkFw4bLdBgPgBVgzQgphL9njsb2ugy4rDagUvZ5suYPBBRNx371Bb1XqweSSyEBW9YmVqC6FZZ",
  "key13": "4HWf2GhCef4qDLTNkxKrnAn5AGMW3HUrBo7fiL9hiZZhktXF4gwrt9aZ3x3TrBqz3TanmhYAnuEw11ZK1F4Hf9wX",
  "key14": "5w2S5KgpqYQX2LPniEhgyB7YbaBAQuGM27AH67Kt4H32vjUpuGNswwjFbbCoFmpgeu66E66KEdmdguDGJX4c4NRi",
  "key15": "2HEydxnGkcatxdDNoY2c67CNTLyYcHiZUBGHu5MXXn1UYsUwKtUvCtYUZFN6niBh54qRwY5KqSHmb6F8pJPwhbST",
  "key16": "46iCzWoqZxvYtTxcVaMYS737XVL8ii8SuqKUMYAM3uvRDrZpAPazQ5FNA8SGRVMK8mrxiv6r6SNKCvUL1W6wQHHk",
  "key17": "3CiwTKCD2t86AJujzXZuyrCoszMzXCEuyamVdcazQ7zbPBCUvh6o9ujXbW8PFWB2eDGunx339Qt3RCK43PV5zHNi",
  "key18": "4UjaDpf7K8XWhPLwQh3YKGGwC9xVEp3BNZuCAbVeJRQXeSBgwzo4BE2dQUzP11o7n8qwzUoukS2yQcQVyGrEd9q5",
  "key19": "4g1HDxrMB4hZyqGUXVShkxDsVEjgUpNJ3U84gzdjSoDufNw82Pca25mEHoP5kLqYXt7v1R9tndMSjQA8boVC4a9m",
  "key20": "5aUJAT3uj15XwT8uN4au9Q2567WeFqorxYSRY7JmjpsxJdPrKPHXUpi1VerWPj9r7ZmK1jb4b2RgmobNv1CWoNy8",
  "key21": "4R6W7ES9FJnExUjGiWKH3tTyFnGDJgGFAHDVhoffz2quK91wFqw2KpHsBuQU82mZJCzQbvSzcLBLxXaH53kPtM6p",
  "key22": "397N2tVTUmRdMX94iG3hC6uGWFBVSQiBBARZJXTHiHxkyavgjqBzJxqurSygdjvUhek5Eyy6TXrUA7StNS6S53ux",
  "key23": "4v1HE2Mrknhv9sa1eUjbGgwACuWsiv1r4Mu1ejMAeeH3zSwbAh2q9ZRdpgPgn6wyRW4xipZHZeteimexXSABUPTV",
  "key24": "4giexyecgPH7SWbLm88zfhGy2BuzkcLFmoPAy3SEYnwFM9EFBzBCZUKDk9e5Zn25GoFc63LXrekiuzLMQfBxUBkM",
  "key25": "3EjYNgfrX9E38V9BX1rmTjKJuTZRsYC1pu2foLL1qjpi2aBg8P4t84wphP65fpLNJH7UdFPU5WEmZV5DkqAQgi7s",
  "key26": "5MYWzcj5WwKTxbTTc5ySAXBRpWZVdr4Pfse7WCWMpdDvnEwwupTYEivHVVnsvwSuAuPqfHhMAfb7w7LgB2GLQZXD",
  "key27": "anwihEMx3eD21vkwUa16VoaEns2CxVqTedeXTw1giMGGTJsQ7zeT9TwRjJAXjGmGugFUHpDQagEReK2x6eVHVMh",
  "key28": "45N76ZYciNaH2P8YVFuq2QSGq8PJtC7U3ypcqVhn9VatwqsNsUwjnuX1qit8Q9YwA94FwSyw7z4DR4ySrd3zAsMQ",
  "key29": "25hHUjwXQRKBwr4aKwcCZ4tjVjevbZ9afku6UXYpVpGEAeq9pgS5mXnad1WMpbwaBoM6iPLPHf1gkun38utwKgSM",
  "key30": "2o7v52njM3GPNkA7zDGN38JEaWazjda9xrf8FSFHbwig6Ws2Zos7yygQanQrvWbp5jXqPZevL5VinXa85eCRmBPc",
  "key31": "5U8oBRyecN4MVy8vXTyShx2mk9WdHPZYUVuW1qpxqVRW8ivJPKRpNh6LcXTZm7gRQydMxgCksH2Kpsgj6t3fu1fG",
  "key32": "5DWbHdLMEfciPN8hS5Ec4tnX2nPjvMvTdfdGcftKXdoYr72KMU6E8mgLc8LaTL9LaaMvsdySPmRXApTwCbQQ5zCY",
  "key33": "4PZRcXZC97ZPzM2gNYLPXZwUV9vAuNs7YWHpsFw3QMMLCu9VF5Rnjt1Ltsrs9PzXUhF491gA9MkPspU9LwRqu6k1",
  "key34": "2QjRhFE79hescvq7La1Rntqj83WezuCPMKav9QL3Rwgx4PCiaZvSwV2zPiZTXmYciG3yFJyCBDHDMzqebfGUMZzC",
  "key35": "5HwuZGsEWxtvrckZpzAfCmry7qX4Lk778K4FnjuhDE4KcBpxNV9VLg1wNVpHdKYJpZBKnBjrrzQjT7PAn5hWtKGz",
  "key36": "5KiLzKAXKrgsgh3FfyPnu6WutPQk272UpRdAZag4A2kmdFVDKTtYMVcrovy7Mvoe8VVh44mdLZndMURrKhSJrqna",
  "key37": "dzrkjy2H2VZN4kuzuFbJ4QNMUm25t8nWWDNNk94FnKt7LemuU8d3VK2f7nKGLANk37xRged7ZSvKtGujkDZHh8Z",
  "key38": "4m2a97V2SUjGqaqCGB8FwyRFT5gLGnAhn842JZaUbrBjaFvzS24iKaX5rGdvLWuzpnzUfr4h3AgmsQjajKtzDPte",
  "key39": "Z6hrjv1UZgQYjWwveuRUbrnpV1UawHytWmmnMA9gfcVfgRGSaLmvMJ9VKMDrMa2RNj1MTdJRfjwVLRqWHHwn6Ef",
  "key40": "5CeHgKuCdKtMgxRb6xo99ATcCqDBG1fg39cQxcJ9nQjUmW1xEEmuGpXBRCfrhjWoiVyM8AtRpFLbft8xoJ779BtL",
  "key41": "4wYS2pZroUH9GW37KDVbzXoH5UUHfgEdqVjoGdmJTznm8dTzTFiENttspxuZmXH93JqbwTT7VE3yh2LSBj8AGvm3",
  "key42": "2mHj9VfpqMPPqCH7RXVkfLRbWgSf2yVX7RA8KgwAD5RicJd5J1hoD9MtUHZpn4E1GTD1EL7dcKCAmHLmYSs1UZyD",
  "key43": "mLQdXvAgPxepiejXnTyrvr4fvYzE4HC1XDFphDE22jNQooMAfj1DXHxrowmYMToLgnEzK4YUz7c3Z2KYxqSnFgd",
  "key44": "4MB3xHEWcNePv8ddip17ufwuYVnc49MbNP1xkH9WEUGK7bRcpN1Eh4JHPE2nfcQcJjK1A5z4RDJ2Dt9Wzs4vZDL9",
  "key45": "4achaMASsaA152TbhfLoDcryqZoFSwjx1zS2mbZ2MWfgVktRTyqRxsSR1RBrFJaTJdhivMZ3GwdPjqXzxK9kSTLp",
  "key46": "4RBew21gdnSoMB2pKEBk4tZZPCKC3ek9nSUdWG4SqRCn7UgJgXEKNRPrkzVNevMw1YCwWLJgUnPmLDHGEEsRhXs2"
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
