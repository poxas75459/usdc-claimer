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
    "2rzCeZeieSoLhPLV88BPLK1c9c9fLVPmb9YPatX5Y24H3J2NHMaRsbeCzdpVouAcFWGKMh9t6pd8xdULtszsVTCs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PKGoghTCAfBgC18v6bfCAXHodCAxrsg5mT6AGTugJcNyH7WtnWTHmYDA545HYBsRbkadNMRnpxEbBQYuVmAjgeC",
  "key1": "31Hra582DhgFkzjoePf6CugVAQuN1jTgUoV9hqKWZiUxFDVjXfQwAPUaQ7nfwSyeZuj6C43tUjxEvgWFTFJXsJkn",
  "key2": "4PiB1z1RgYfTzsH58zbLJxgHKVfz5a7EdQ8nTW2eYEQaPHNUDBmBvmKuCfY9jaPwuKmKUhKA4MZQ9k5ygVyV2Cqq",
  "key3": "3fEEYbi4xZMijVfEFoukR2Yi5fkFrMvYtiikmrfrhfi5oDuWnhbVbZ4rxvy3XFF8U539XkiLmvrxegejfE2H8E5H",
  "key4": "5gPovqmbGxXrMjwy9UD5RVKbz5VKiDE9N6MCFSUVp4qzxU5BFpeq6nmqN1bT5VVGTxCcaizWXCKu5NnNQZ6vFhXe",
  "key5": "5vKZURM7igVwp6kR8vVUQ1biVt521WRGT9keMr391iJvewXH53xoVP8P6sGLeTq4ELbMjX6F1UZuTQAF4TV2tyXM",
  "key6": "37Kf2FRe4eJ58CrdsTaXYLSE2fvXikDsS95J8WgiXwhvyjEiUQyLHkZzjxf55vKfTdDqFhuKDet73uKnre7CXZEk",
  "key7": "66MNj28c5hk3GzdCb5nQwYRpu8Xi8evyRUKyWiwPgQj5sGjquuCscJgjs8XYX9BEqN76DFLk8VKwFdetrc5SmMRV",
  "key8": "2i4nfgwKgWtALZVe11BFEdMiFXNeCwR9SnzKwm1pYdXhdP1vYHCfokR1WM1WE8TMhBuc8VPki1srwvHH3ku1VH35",
  "key9": "2hj3jDDpJeLConYfgqgvuEFHrAdLBaF51SreaS6VuVNX3L3mn6CF41rJxuPJGkiA85Xa4CU8gJenZmLzs8dAvazU",
  "key10": "4bSYxswbp5rFB8uCiews3FiWPcc29DDei3P9uqPX7HjvVe6qPyfVYr5Qoz2AANwjFSwXksrLJLaVA9fQifSm42MD",
  "key11": "42Gn3onwgTQin9qiRuk8dVZyLqq6wb6quRwwEb6cBywfmJf9kMqX3McVRhiD3p8zuRT5d7cDtpe76GTm2WXpatUt",
  "key12": "Pd53QcZDYainRx5PU9QanKmV8eSmDS1axZ7rLei54XGT3UfhVEDopGMSBou1cypWNsLgjvgWBGVGukQkxJeq7is",
  "key13": "4pscDN8rntkKTbpt6sTpSXj7jf85WdKgCDYK5bBZTCWvXNZirNX6XbMtWWSnPQKJXuCPhoWphoaMy9gRBouV63br",
  "key14": "5ATGE5Mm9PwCY39oFbabNt1yrAv7mJTAeTYSRSGy7nib7PkQhdFTq2yiccVRfLzxPyeLrxistThZk69YiC9TXoJX",
  "key15": "35ZxbX7m2wJCBwc42mKGDFgJdSvPCKeNsvscDm6BqeWjUj1VtBCF2FEmuk8yk5hDqjFTAtuy88rJurFBE9GajnZs",
  "key16": "ax5ytQru6jSavsf3DQ14XarLFiLT48474kc598AWgP411XsboaasoV61G6wXZ97fbZdFWY6aNEk4bMzzzc867pp",
  "key17": "55LKrPK7C96X8b3pGgjKWVCC6Cx99mbkAoKiGQgkfuxP75Uh45LpYubttWv1q6WfYwWZ1kCHbtF3eZJh1qfFU9tN",
  "key18": "TDiYUoS2A3fyspVusR6KxQRRgYaU4ov7gGfq7UYDmVDy3i6UZx5wemv9hXNBLvj54nmy1UxG2XH58WonMzmF7bU",
  "key19": "48bLqSrLdxeZ39AWGY1w99R5dD4TgMMvdUa8CDcEBG62SuSWD2dVUhm9o3GvAQ8NjsM7xLAw7CLBCnJv2sK2msix",
  "key20": "4uErxJxxsi8zxu5nQRGDkXdRVVG5JRMD1qoswA2FjKv8R7DCV8gHX8DwC1PxiYM4uVkpSsYo5f2LrrixFrQQ73K1",
  "key21": "2uKwB5wgUngaFkweaTZYNs5aqptYb2QoDuFeQuMZUAHfMcL1wWSc2pmUFWbzd2ycRobiTmAchgCv5Vd6PdCeSfXf",
  "key22": "5DsEBSpgw53JVQXzRmGjtbj6EzZ91BaFhawZ3rbeQNukdjhkq7GDWb32zPWaBcJGy2LzjadPnrmKV6t2EjoThS3v",
  "key23": "3Tw8fKWZa6wXefcCeaMBXV43iva76gjsiQKAWj9GyER9pi3mbg1kHDN8VMZkpWc5HuUVn2b7VBh1gt3sHXnMWZfW",
  "key24": "2tKMRF1tqe34nVMTsMufud2TP31wgeLy4WjRPCtoTHBRDJNethaK2WYa9h73U7ib2PDwpHNkoyLKWzHAm4MNxXQb",
  "key25": "4596L5S7ts91RXgkjWLMWMWHEeU7UmTGqhSNGBypzkjxXZhhr51vjNm3dZySfThynxVeQ6aDmf76NSog7FD9eoVn",
  "key26": "3qdYrmRoonfn8snC2hFmxD3aegCkEVD8i1ULsemxDGFvcEUAKE4ZB5CWPDCS7FUi2j8wrTMXzL1gprt94r2USeSb",
  "key27": "2q6fFMDAKKqbAp1GFA1RMCyMavPVthd8NhtkKk1Rw9k3nLhhBUXVCyfRbu6UjwYSo6SeypAUWX5q8AnhF9RCoS68",
  "key28": "5AhxNSvwHmwfgeTGHEHicfrrBYsb6evU7Tw3Mz1rVUT9oxbTX8R9uo6dFc8DfTn65nifXer9tDYW5Mad5cr92sXL",
  "key29": "Wru7txtCV85KqR3x44u57WPJpDQEPLjAG54mwRNgtQcBieovyXR7UFdd1EDy8XpNnN2xqwSAa6JLs3mNLpqXZWy",
  "key30": "2u43CC6Sep87Ve5VfPW1bUxJKXikVe87FH4K8moUpqjEKS4jSGs9eaVXDH4HvXDNiGjN1bM5qikxFou2RMcH3pk7",
  "key31": "3TfFQdPCVxoJqkcyyfjbSLzKDMSeYGDbJWXkfpnSPNEroMQa46NwYiaFUkGdCckiYppW9Qyqd3g77MbFHbUhonKN",
  "key32": "5QJr3vX1PEYh7LtRiKRob5S8hHbhNiNtiAcAnVYFWSvzrwKbkJgz5qeoKQe3nvs9kWAS7zqErB3BbnUbNS8pVipH",
  "key33": "2smeD3NCj4tzbBitgLCqJfHJVV3fi97qFY5gHKkhhLmWgEudBvw3GSMcu1WvpjtZ3SPnRK8hre3Lw7LqaZxWkQpG",
  "key34": "4fyfAW2C44x32GUdDiUdrKbMr4i3P6Mo4GPsnaQ9gsiAtQuwxwqiaaXMCjY1hEGHgU6ivb4VvQaonXKFMJcB1izE",
  "key35": "2fzqv532HQrdmjTNGbkFbMF1JRvxynT3MDkUBSoszfictgugPE4B5wSoPQaYhKMfTtiwHiMSeV3tuE7ZfHJFNAp6",
  "key36": "5QE1xdNW4xCnLid8EeGxRrWFFqfiYWJ7zX721JzJ8RWsTyAEXxuaSV3Vt6kWf5HuXEz5zZTZBCQxWRwzJwTWZ643",
  "key37": "s3nD5srfLkQb2yAQbyA5hcDmmrjkbrisxLKU1Cvm7ZMtDmicdcEh7oBWtCe1xnDAsj21DbG6JLhW8xsndKmy2dk",
  "key38": "4myqdJUDZ1VsZdvAbP2DPeNCJWvhd9Se61n1H9mMvryywHZeLKGkJZDKozsPc3KCuThu7UGSRYRzcnByvUNgM8W5",
  "key39": "2DhWJfV7kthqK6fwGSgkKmeXQxzbSfNDPJ4S8JKFzdBJDc5JiyiNhpHQdLz8XhZxfnaH8gZCckuAhcNNA3Fi3Wth",
  "key40": "3mCAy63uJ3udVQSmQN2n4zibtKiJzCQVu2gAG8vxihrqUDePFu5touTVc81RbCbXfPn228i6HtmS8LHKns8CmWje",
  "key41": "45Aw2CBXNZhk9u6dtSsuUz2pups57rR6SvBrG4MRMVqbWmZi8Zechwby8TbJMnNd1Lkw8hrbafajZr2iRSj5LvJp",
  "key42": "61eYseL2EfgLtZkmFnc61foYb9kq6d3w5RVNXwH17RuqcFLtzGrFNwt3Ro4ZA2vq7CnfSUmJMrKjq4RY6Z8iE9uj",
  "key43": "5rFuqizZpoonYMWQghjzHoWgzJJpXu8MHXAv6qHpUSWG9GfyLGpyHUCtaJdUq9nsZifc2CfhRURvSjBwzPiL58wf",
  "key44": "2nMr7fHkyCxAjkvh1rnT6qfKdERMDCyec7G5SQLJZUvtywWfCMSg3Wsuaa27XJQLMa2eGTjY4ameE1UrmDXjb3j2",
  "key45": "2JVfsqXX6i5MvqBjbSWDiTB7VAjmznojm7fLs3Xm8VomArvcabsXdmYcu5xzpCscX1Xom2pQmT8Y4Mn4C4tY4AVx",
  "key46": "43QhN7xpVVzAwU2KTwysqgBbKQHFEZcY21WWCsBTvSvU2S98u69Yze9kYDgAuDBojp9ih4kBta7KythfEatA64FU",
  "key47": "2GvoBdsrswzXv8JXvr5iGzASJiUBPKQXKtozj7S3p7pQyYe6hVUfZacTXKoyFrV44hbo6tHeU86DrUYo9CLMesTg",
  "key48": "3LsadN1PgCBC5NGKTw4KfehuYxPMe1PRZbyYK9qrK2Aq6broTozEHkD1LoEMcfhGTwZ58LtRhk8L6qSSQEpMhY9r",
  "key49": "2v9Ct9WC9XEz2o4Xmhp3B8LPgcW4rJcXmAaz238k2yNtshWzeifT4zcweZLhuMe19SSc4Yd2U6UP8XwiVdfLpE83"
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
