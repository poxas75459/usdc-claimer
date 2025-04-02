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
    "2GjgMkuiyo8sggyB4Div2qgBTLwaHbHesLGMdZQyTcxcXKXbBcdcqJBNwkQd3rHN51Aeqz8CCmi8HkLKq8Tn28iU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vNsP7PK2HJztW8Ewran3uHbXeRFZRSuPQVxU8NZDwRVdqhuEZt4pf2XWgP1fEZY9unbqiJMxubQRN4ykokzNDPQ",
  "key1": "NLPW2HysALxwoNrr2bdoHCqCtdRgAET2x7Doryi53aSRoYLQ8pLDS5NDusEnNoo72JGJPZ3Em376sUUqQj9MrNc",
  "key2": "4b34JgbLN3FEgWwy8V2ie2V4qnXiSyaoetfqwya56bFdkRz4X3N88HJLrX7xqrsBrPuxf5ES1VhzqHpVPhNbm84D",
  "key3": "3DEnk5w5KQUdSbjEmK69n6P99wQtmvCmCQraDRDdN9fouHUz8ZrFg8USQPyojtRge9WwigdCqTXm1382DoHariVF",
  "key4": "4qJCdG4CF5QzwC733NHxMSZ5r7jLxtnt7LT86PmTX69jPbdLZTsLLKkeD2AdmYkGWDRd9N6FW54dC4X9xXzHsRwQ",
  "key5": "3kHp8F8aC3ZVEaXtZYkqc8bs1otCYfSay7ZKwsisjESKh53PDLSQAmSbuhBz51CMixm1eg4FGtbBqb5753t2WGAV",
  "key6": "5KUawbMGZm5zBQ1uwsfmHPi1o4Qbb1mdk6QPdmoiafHvgaaGfTRWR8BB23G8PDG6AvrgpCM9xFPPtDueK3xJvCj7",
  "key7": "3vL3fsLPNKjsBWD9omAu9cUSkt76vxN3d2zTK7eVFzAgqEVpyxsrHjfmvNnkb8BFWmp5nEybSXZ27djNvLW6AJ6b",
  "key8": "5Fr7BrkEgFKdaLsBypk8rnLrFBc9baU9y6vGxAJgKTc77GCiHYwEuM9C446nJxhb3fnUz3EJohFnt4F4iH5uNcfL",
  "key9": "2Fi9NgedrwEr73zcHJwt4cT8v7gPCZcXcAzt8DxsV7XovR3gPFTkLXqcCjFxGfXXJZsAJb3rGMkyduitVqHofWJK",
  "key10": "5xFRkuPWQMQN5CZ5pw7rESSYrA3eiQNUbkBvjbB7fYjLAAhia5rpn9ZavjSCqAojTv9aP82w1ULfvafYGo8PurSd",
  "key11": "32q5TTchPfDjAcsyY4ZVG37DgxfX7yLS7wjsMwPEESxgyTpdshZSixdQdaTy5ALApc45WUBp1XMKtJdmJWTB2CCH",
  "key12": "2Yck46axCfrwyvNKpZwe6kAjB8Bix7FPUPpTPBq2Z12T7oSwL9bvbVdnWmRpqj77Lw6oehPVYbJHvUmrbAyvwsmZ",
  "key13": "5uLAUyZLXrPiVuij3fiSnKCD34Cs4Rgm4bFkHYDpMQFfXsEbJjQEnM8W2QeXqoxSWhWPdJaZMEtpwbhokY2EwR6u",
  "key14": "4jxxYZqsEn4tPAjfNkBYpPQLuvH9hpHW2nNUmYtiibRReJz3J1tt2dEp8nkrGHjzK33yAN617oJw55dsGFFKh8VL",
  "key15": "3MorUkQa8GQ1NaiAMyKLCDG2A3tATEYMxwPWR6JMzKciERkjkSobe7maX5vixVdpbrWxekj4rbnKX6cnMLU8Ycj3",
  "key16": "S877N6Qp4agwPFNFSV9RqC9m6H248MZBj5oacRzoGaLSHPzirdmaEfjDu7VasrhJZhTWCnbTphgjgHcXvkhjeGk",
  "key17": "2yjrQgnPB4Kmqc6XoCE13SPA77M47gtfTD744E1k7YphjrvEct27ZyBVyj5VoZn9PchQSbNShLCNEEU7SKYkbmLr",
  "key18": "3okQdoJmJrCbRuXSDW1ppAPpzBPF8hJyTg39wUPHU1CzdqpGUCx9nryxWrFp1DdRE3vzqVypgNiU6nav4bN7vVrJ",
  "key19": "NhGWuBbD5whvfr6kiDETt1uzNKCekm19giVm87Y8aGeKoad5wDyxepgBjwqRnXHsN21927K9D3EDU3Z8b3g9mX1",
  "key20": "2XfsF37U9Cc1om5Jtv1aHRR1YGKsNq4UnLQUarQaHntjVSVdmXvEm6aXNvdeGfjfAipDBx8k2cB6NwbfFy16LDZV",
  "key21": "5ThFXWTsBWMjF7Q2m3uzupPKnMh8Bf9QB5BtimKRYLaq4Q8abrgmXxZbMUTKUpeMrXHk5vnXrMQa3xN47iYugqus",
  "key22": "Hs8mgrPfCozxVT3FqJbLSpgKMuoZTB1pGKxtLtdGCmobFE1FMkZ2BSHH4BbvMHXB9yxbCKzQjdnu8C5qd2zsWHW",
  "key23": "4KE61iqBBy42kyKa3qbTgbiMbnoLfATM6SEY3BVXWVooQ9wxT5bAkJPqaKi7ViVs9a2vcAKw2F4gXshrgrEkKY7S",
  "key24": "346TiNdMnU6Q2cNnTy5YsqdMor2UzR7Nx5JA5aqX87K2PkZ18z98WMQmwM8iwzvY2wrWWcd26BPEkhdTBnCsG4qa",
  "key25": "ZMsQyrJcpbiWTyD7fbXuNSeZB3CQuWjNDjpS3iQdQ1gozXzaQEXjLCrv6EQYhd41m275wB1CkAQNs37oBR9S3NW",
  "key26": "3w92s9PuT1HVkKBWztmryBMdwMeWAbXEzdz6jsLiDdGe1Y9Km1ew2dqGocHCu452Gdxz89odTW7QAyPCVrthHguq",
  "key27": "4awW8gX29SAWdbkJb5yEpgW5z4Q8HP1k9hugn9YKBE6h2vSDSSqXfdP2mKXjrapUaNWPp46ASKevypZ9sPQN2M43",
  "key28": "2DrXu1qnStyLJemwNuPRJhNeWSbsaJmtKiECSc1rhW5k5kueUFnciLRhAZvz3wfYsxyHkKtjifw5hyuRA1jJWnQR",
  "key29": "nDdfEQ14HogwgB4p6s9MFKefyJ9j7L9hJb4JfCp22SAhNA3XnZsPBEzmb4RNoJHzFNHUK9AB1pUELDPuyz16dYz",
  "key30": "5Psz6eEUAhDEzFowckv2YPnNjbfZoasoGAwcMsV79ozLnsvmvUaoQ6pLdToAnWRRSeP7W6fe4XNhSpYxtBq5gSfU",
  "key31": "4sw8F4hNK5V8WR1jeZ4NvVu8FzUBxxnEEux5BvJcCCK5nuMkYV2FjJuGUZUhEHgx2GuRhza9KcmCYeUEh8h4PVMc",
  "key32": "3mdPRL7p7vjEHBPVUsxUdUdiBPdMmJHH74gXzYBcULB53Esxt4NPBBDDZrFLwcX1gpN4Vp3ubfuToY61zVzowohv",
  "key33": "4Lcruymhuy7HqT1PzTqX3FjZwPP2kjFmrXL5cUga25Bk2i8EkgZn3rcKRp1MVgAJdUtuetMU1MCuAoYR4RpUK4P9",
  "key34": "22tyo1LKfztrvjW3cZswyBUs57Uw2of5A1GFZ2THXbps4xaZkawWArW7GYcWusRq7EraQCEzMPg6x8v2VhKy87XR",
  "key35": "2q5PC2bMDKD1JsumznHozYT96wXq5EBcUqEeVBLvcqedDsLWvgvvHTBEho2Vx9rYhoL5vjmdQC91yYqvWgrNPJJp",
  "key36": "4ZFCDuur8DABSKJi5Q92Nn6NXka2RXekARTPe5cuoVFdi65F95773u1y266xTKn9q7fZ2uTU3BGxCCY1CvEozum5",
  "key37": "67iAgjeAmkVfsCvVyqGRff7XAScLdrbht25Ue3dijUfYRdsrrNN33mmahSYYA9XgQLhYUFVDY2ZADPCp5Un36EQp",
  "key38": "5cLsFmwywB9ZBNHz4UBKZwMqys4JHuY17QKmemTvQQPxwMxukM8qqJUVUErJ8trZ83syUiRNTNMVRbsdNJ7rxe84",
  "key39": "4VvXp6ywuVE7aBfRzxK75oVgerbzjVWNbqPEhEW1BNkXF4uvTNXJrVSZCTDenK9kSfwc9JMg9DQ7puYNvAi1K5Kh",
  "key40": "ij9yviYqgEmSS5ZniFgYdrRiuDNVn8ZEGzdnYjGUYuztxyjjRfoXq1FQxNssGhMhZzi32YVNdCko2gkGGySBXmH",
  "key41": "YZVi1eGTfpNsVhPD96zZ5haTfNwskbHUvx36abVYdFEMaFpbB1g5eYWD7BBBngfqebWR1HCGU8DaezDye4fu1kb",
  "key42": "3LdTpw4HWaBoixc873CUcumxJC88UuLQmtR2a8WtGkwyYRyd5EaqnKq5wdZyogNg1jPTA84FhHHpmkisRwKH8ezw",
  "key43": "9uFESp9gdcyq4xyFQmhhre6VTbymL5MqG6vX71pB1tC5xgFTNxxxvt3Y3h5MXcwbuti4YCnFkyrqdUyA5ECUdLh",
  "key44": "qLsho8s7zvBS2J4cSMSMZLG3PcFnW6a58Vy4T3A22YAVgkcSRsT8LnkuYAuu8z1XGRu5HCDNJ3Ywvp5Rvo38u8m",
  "key45": "ECbHrugpuXFpk6DoL6iqNY97A5dxkYWHVkrv2tsxZtTEuj2pLy894weyCygmAYMYwkv7AD3ryLyEcb93ExeQuc8",
  "key46": "5e8MghjfJAfH1RQ7wPboNUqpoRNppmD4rrTc6CPVGHEfVYzrewsm83Y5Yq7EQs6idJxdfVta84rcA3468XfDCn6j",
  "key47": "Fkru4iEvhgxrRCfNJttvzV8pcd594c7rzvMWA1xQ1nNxcBBRZ3frBXz4g7KN1DsYfNgPjz1fxqoY1cKFaj3gQry",
  "key48": "2Yv6PxMr8tZErNQLVupGh5j7WbdKZiEbN4SwTRjdaGEv762B5gQ99Ht7ZNUfPaHuEVWYew3GjgnjaJ6o6sPdr5Vv"
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
