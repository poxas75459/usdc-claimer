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
    "5MnyB9PPJbytvb1FfcF3buLhzpWgndR9ezXckJB8K18Qfhw6fpTvgkmAAfpxQMpBmWnXUpibDUTTbVwRCcSSfCod"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dbtz7NUSkBAkTnyzLBpDr6FLZoL2n4ekdYeNzqfoy6hQ4orYzDpsgb4rCcQM8i3j8pkHt8WpAaiDtkGd6QuKDNL",
  "key1": "2biTsvRfh2EV7h7yVm2pyxwZPVjWqjTwoxcxKgMV5M6CRVb5qjnJBaqZn3aC7ZCDBWAZWanB4p3cV6GuXYUMc95N",
  "key2": "2vt6QzoenEWPNEsS5KxJmZSKfvKS5rN7Hgpwa7wpPgQMki23fZJCUxfEvvpUt1iByVkqkjKk6TVVfoXpedfQHLBj",
  "key3": "5DHMyhP3LTfb8v5PwEHdjSL9EmLU3t1rm7Ar4KYR4yo4NUCB7L1hukoDHFTYpKZyrfs1KsH3fQnxpkRz1SjjNMVp",
  "key4": "7SCQMpLQXEeUjRWHhnrk9rjHQn8hkRfuD7h6sVYj7FP7wQU4f3DpppZZQFfSyzGybR39yxZzZUDaVE5KC8Jq29C",
  "key5": "4z51PhKi5EE2MmC1G461PrNBxqWnXS3sknk1zf1cxmijTpheD47AMMiue3GDqqMDEsvFv6Ui6BomL43s7sNDBKpZ",
  "key6": "5S98QavavsNLbrtfZb8KYc3B1AKg46guFyKrTBjJuuWpkRM3YNwDNDbHsEcjak4XXVYXtQASKpUog9Xc9NxGxKgs",
  "key7": "4wyv6XFe7JKueEPHUvZ3ZobFottcYHi9Pj8DHMGWQpDnGGx6xMJBk4hTyDN7uYMFNRHb5vu6HXEitVqRELadgSnc",
  "key8": "ESdy3BWmwqEqSyCzKDNBaPTiJXJGVg9ABvwbnTB7rScydmMWdUz5twG8giNtwCitgrrRwby5FfGe8wKLqhgqH6M",
  "key9": "3hf5sZ5vjNY7oSSASpxAfS4jeFoyCe4KiK9YFQvcv2Z5YrXUXJcJo3EWQa6HgiidbiNr2A3SkqQrhMpY5xYNhT6a",
  "key10": "5f9HZ63YY45okroujEaZpxUjZJwYv7PzFod4iLabf4X2GSji5NPgyqRftsEducusFxgg4sasauLT1petDyd22u5Z",
  "key11": "3fb11gAxALbKMi8nYWWiicSq77XeXUcDvcgZK2iqN1LjeZ7XPiYC7ZFQpow5SbAuZQ4zdxnDStkQWBSe3oNrGdjt",
  "key12": "3Vu2he2EGJfMy67eDEb5mYAufrv5GZYtmKurvVKUZqzCtarriNm3BfTKs6JqkB7qsA7XxGyn2a94UydDzkKza2Gr",
  "key13": "237z1jfFzeZissThs14bi2Gb4B3BuZXN6cL9yiriExy3aCzz6va3H1sCX4ADNrWbQ9S9wpHDQ2F2zkuyaDAsRrdj",
  "key14": "2yoVoS8C7mEvB1X3UrC4z43Aku2m2uFDGDVvcd8xsdN3sa8pZCaZZVFwTJ3NtP69zXhsWvgvrJDiYDRGrSxgfNA6",
  "key15": "3WDBCwPWuCD4EehGYvzN1sz8qA3nSGPhrmLvNNajCyCycf2bviPMKBc9cqTovd21SNgRhWnCeKimkiz2Z3E4H8Di",
  "key16": "479z3MpPA25oigu9NyzejdABCHRmLb7ZLNeksLzWdr6csuWhDXQ94xxH9BceSgV7Mvh9r5Anrkr9GJXoKbAVsN87",
  "key17": "xeiY15wD8urKFWEyN7cgFtQ6YG3F2t1UNCQiAHjAe29T8x8WngsD1BD9ckmhZ1nsM5fWgmdoZLErEtawdscj2c5",
  "key18": "5VbAtoLt9r8KrRxoZs4SCrsbwZnwEJpwzES1YXrUsPnNKHtsMAY2T9fSYimKsX7p752Lv4fUywdFp1DeJrPwqTnW",
  "key19": "27wQZwUk6hT2UHd1kVxMmJ36gXMTHJCdMAX9qav5LBa1CtPeboLUwtDaJkyqxM2xCrETVtQb1cVjqRK7BDqvWai4",
  "key20": "3id9M45pHj3JegQSKgrdzmkb3x92H1T1sckgAXU7HddiMnGYvQZ8v75WGsMVpU7kf5pU3b6riP8hGMr8WYqryHnc",
  "key21": "4hYa6stHoZkCitM3qLTwnTd1LM2AYN1Ckwe9kdPJEz6opDanVJDWMxddd5zdCCmbpPxZxjc5keiwnhqZzanjrqdQ",
  "key22": "27FC4KPYzSDw9JrPTbsLKxNnojSEcPtJfLjrW3CmCBQJJkbWbvJ9g7Fu2HNCTJ4zNRKFs2MimWmBEsKVvYC2K6fd",
  "key23": "25ayN8m9ndWGUvwkCF2WUWioMuxtyutEvUWnHFpjCAqxB9na65UfQ3RD2k7LQMbrWrm4DvYGXi9sE639kddykD3B",
  "key24": "5eHWtHkyxeaKSinWpCCy6z8wrpoQ5nvA9Jb8GwymoEbamcKx7bhJAqP3zy6LYQEzpVbYF5yMNjM6YCYcUTt91xk5",
  "key25": "27nwfY5Kgz4i26Qs5D223uoYSmRuDPRWduFkt67m2A5QqMRcmRRoVcN4Bq2m27uGxTVCLW7TzhgjJ7adR6751faW",
  "key26": "3dft6srcKCaRsCCEjzp9otDQtaFVYPBqTuAuSdZBmKKv4XG9vytB1AZve9FNu1aJuLkxehdb4HTTsfyFxpy6DFCJ",
  "key27": "4F5a3wP1PRKkfnUkfEbCNUfUdkCDpmjkGR5DNCceZ6omY39KRugNNxABsC3FXAxWM1ijCSv9tdaYSSH3KSt3vRVy",
  "key28": "2KaAQBwin5YeBK35jX1LsVVadLnMakuGv4FAeQP6XyiMowRtVQ5LWJE6NYBgVUMhBG4PnQ7bwke5jmiC8AefDzjY",
  "key29": "bHhhEC9CTDewiucVCHC24pezgjqyrpXegehnM18fuK9BUHNiBPWkv88aoNtCSYbw6x5W4ojfAPXN57nr7HLNDV9",
  "key30": "fZiHgUNd3DNuyQKGBMX7KVZVBnhzXRjtK4GQNYvAD6k7B1rCCXamPz1P2FampYefstTgkKaxkwFjaxLBJevVLp9",
  "key31": "3ggFEJYezVUBeu9uWqET5S6TQUStZZ3NnXCg64ab1nMn4jGw9Ftoidp7NyQvSLhErhZJQVV7KjwjqVvL3uprfaeD",
  "key32": "2xCw5LRGpQDZ49a45v9EoHzoC5Z2dfd7MFtyVLWhN6UdJEpx4s1by4dEAjaiEe4ZcXoGct3g7dFJKxXcAaEUWLez",
  "key33": "DhjrBikGkjXcagDHGeXFK7Lz4qwezLAd8B2ntiP6wQPt7KfdvzXFxrKxFaFqb3zyLbRi3WV7xkPHx2ZGSMKayay",
  "key34": "3Y3Vtn4pYbPniwZxpHQnz8mDa2A5NDN1fueawxUh4161PYBrJpmZPYj93kF1WsaKJmkLqMtsdp8VQbkijnQ8x6Au",
  "key35": "5sjX66QPUAnkwzM7c5NkS7zXw1Vike3CZCFmtoiEUV2rrQyBZz9zFzuvb9BUf2CnWqb9u6fukPwD4UyeYyHjAbuy",
  "key36": "jes3c38s2y6ufrwuLdVQXRF6HpAHuDyspvgYtWKaQgF7cbLbG7iyC8nKdytoqUQcgXTV99Fk73tcDaMbYGzNZ5s",
  "key37": "4vrVYeMN28Pm4mjMQNVjVY5axNWP5x2XZ7HEy6fpdx4PYH8vCsxLBf9zxbV7mrAKHg1hBARECxgJZxmeuT3qaqk6",
  "key38": "erKAGD93aq6pTihHN5N95MUGBP2irjJNjCUbjWPRd1b6G8vCXh2GZjrXCtcPiZAzBBsogXf9KL6rBgQAEmDHtcn",
  "key39": "59xifELoeKc5wX36K2k2oCQSW5FazK46ePyhNh1eAnatTn1VEP55B19AcM4nxYzHeCipREpQ1inUZ4dgD15rT61K",
  "key40": "2FFgUcvgv71twJjzEMHgvdqbN9QWn3qX7EoMhT9nDqq9ZcF3y3KHjytc794MNZ2apVoRm2HVQgXyni5tVmF3Aw33",
  "key41": "2erjgqEkmmyFiucibcxfQN36HushbKAWZ93vPLJmgKWUXyAM37wJY688vw7nVnsq6T4LC9mET2scPnnw5eu1aEti",
  "key42": "5BNihSGpiypvZ1TjCY3eXegmKPxb9eafcD6pFuLBq8tfggQjSgZNasUzes7CwnEQgxnW1E2Bu1uCZ21xPPF1XcMR",
  "key43": "2rXiEeZdkMr88YcGLpiYwCA9wgN4ZbVouA6wFxWgJfHHnGWYdBX3UXChYJtHRmxiXhSF8gZsdAzGTB6t4XJ2ADQH",
  "key44": "3es4ez2RusZ4RRdPZjktwFHykNt6QjNkEBtM4mC4KEdwRZYYKwLbxFBcGsqcRci1dV1NDwMxXnQR1twjXx43mUWi",
  "key45": "4UeCsmkgXJLSGhBNH8CCa5DNqaQUnmVyUDz6UtiLRwPGbgbZ6bi6DiuDcTctDCW5MQW4p8Yi17QyBT9jwgt97Zo2"
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
