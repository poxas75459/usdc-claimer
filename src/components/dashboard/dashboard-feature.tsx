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
    "4rsKUYD1v91s5ezgvyJ6oFg2kg5buoZCUMKsM8bSDzTJyGREDJFeALJe6avcapnDEp255sZL59ZEkQSJHCbD26Jy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46kLtbZxHtLTyfjJV1cbyVAbVEwP74fuHbGsGGqofsCCVb92EWQbmoEL8gtaAXWp5i6c9eZtt9g5X3SSSxTkMV1k",
  "key1": "5sRGtE3TV5hFfwqhicxjD4yVHYWBW4cZ4H1ZjJu3hK2ZDoJsoLsu9DzPGkcvjEZtxnuEUg55nUfmmsd2SMC4TCRo",
  "key2": "2z9JL138QJStVvGA59QvGqC8ZVGVHtegqfSzcUgUn19ckKG6LDNnK2tUmRoF7SKGWnWNN6dHtNRnvZoALvrTQnFd",
  "key3": "3gPZ1uoBzTwU9ZgXyQJtG93KNSq2dxgzb7ymrTP6ScMi6buoRjMf24RD11UzXJYrcXgbF88JaTq4VdBae5D8j2Nz",
  "key4": "21eqVk8gpjmNCA1ykMxXUL2unmiZVujbbuPSUkx1Ksrs7SbnBK75fTvT3RWTiqdBy9Yp3DyKhxoNZyuBkgP11tE5",
  "key5": "55tJLCsNdwbyvWBv5URrYbsGBrT8sX3Ui78EyUBpAjT3zUiQAZabNN4qHS2aWs2ZnZHR7XdpKXbWh1njuCuXmLeA",
  "key6": "25CbzBNHarYDf9Y62SQdW7CorgYiyhnYyXwkyuYfuNFJAaLzj9TkHzneAfXoCsLGX6xVW8EMYS6nfH926FqTgH3C",
  "key7": "2UuQ1bb4CrskUGs7XWptKhe3htkk3c1vjGXUhmZuCGZzJ27A9UXjbyeo9Q3Lq2rtdjBmd9rdwKHXpbWxcpe8F5st",
  "key8": "5AEH3PBCgQyyYMhE2DcgTV9K9MXQ3hSUC9vfAgZFmPmeeFzdacfBsQZBwXRTRAg9JLTyvkvyKcnv5G3rKcD4mCP4",
  "key9": "APoZxAPeWYAWVN6DQz1kT7NwgLxVJm71JvAqoWbCHpWanBaekGQ1y3G12xtLSJBTrbtnbPjaa2n5bVkQaREqdCd",
  "key10": "5xsD5VA225tN6zbiSpNqjgtv7Lx2iTH6n6G6Pf96vctFpmkPHZD8RgVLk8Lzv5wza5cUD38hwNaWHaWYT8zH5tUn",
  "key11": "2FU6WaBV9i1zd1E6u6t37J5AJLB8Z76PTL5Gtfo7CuL2a76S3KkYkzNmPvJL2PuCSmTCXAdKn74xGKHtmeT3DaHh",
  "key12": "BwfcAEpFqWNkgP6chVKNm88HvtrrknawA9VnCCQX3Pvqoufw3NcjfP8BPnT3dvQLFMXedWiBw2gduFJfLkymSii",
  "key13": "4yafg6h9kGuuQP9a87xC8EaQL6y8YQ7pxbhbgNp9btasPePfmUCj4c7hSVwYgi91VLYYEDkv5HyyfEJYMigYT64R",
  "key14": "vS1Axihcy4fqsbBwxHzNdcHijCrevknzRTjaFPzNPQYzj44xgJx6neDwqLTapQjs5dE7h5T9RRqkHb7TM8LqNQq",
  "key15": "4E817vLi1oZE5gPUHK7phoeCATyd7DNpDQUpfJWj8M7LVy2avUi6Sek5ndCxQ5MgxkjC25eBhSSfDW8KbrW1oXct",
  "key16": "5Raa1x37QFqzVdgfR8McsFRnYqnVn4FH7xHoqExMjxF4T2VLWgm91iYRjbVSxpzm8qS8HaaDWaQ2oXyhKvzNBGtR",
  "key17": "EMymYPvxu7HaYvWXiQKhTgowiHQ9aakz5ZiovE8bV4QZGNmaWFFK3UqC6AY2cKEzuP8sGQLmrbsG42JVWLTguXN",
  "key18": "5waXpjq3Ni2LXNGKKZGaazZaYu6J2VVSQsrg9e814XjBJAn9pFyctPSxj5ktCrzijVaHWotqY5TYVuyoTpLVc8Hp",
  "key19": "2RQprcYQC63QaPUTpRSEM1wJjpaLZstk3Eq4z4ETWCKB1G9GuoSXyj8p8VjKvC2NxkHmqJdpvyDq3GCSyTk7PFCq",
  "key20": "4tBkd2uk1PLBCfsyXg5DKXU1KKQv1ZP1pw5LQjdt3AHU3uHsNDSghJpxSbtgkF7Fmxs8fvkJusdriv1u7923uvNx",
  "key21": "2WovoAUevJF11PU7p9PJDidGiqzWAtyypoDhrXXNzTaLMkzWC4mMGvCb6kcVKkqLPixwsiV6YYfzTYgua4YPUSQY",
  "key22": "5dgxWoVJViHZWVbo5EzVMhDb6vgwFQ2QTxSLcwmYJpSzybbZ5x8KXS3EP69xTb2XK4NcEV6HY36khzDheuMbRZrA",
  "key23": "3HAcR693Bibc42DqW57GyUvEGSVwaifqz88qWmFZGAscooQHxx2Zczm3DJcg9DMVLg72GM81U74GCoMC6JK9LKDZ",
  "key24": "4xCLRWmUx1o56YkoUZ3Jqh7Q2MTFEXD7TeT56iak9SqZgy2RPJyuotZhiBATTYHp9CkXkGAymq4RoqqoFXFuUUYW",
  "key25": "3GERPmR2x6AGKNcbX1C7vL9RYR5R6PPEzQyD4RdKyXNfYVrWXThgepduEbk1MBDZRt7RfjEQLsnvRhjmwSCuj6Vk",
  "key26": "29nbkJpscFc9ukKFaLL6mhpetQY7kYaFtzu2crAFcf9M8y2L31ip3TEwki6PyY6v25kpxL8r9wWHo2kT2qRQdBHM",
  "key27": "27JWkajq4h8urdbQ4ksvrZ8arWtunYqXSnh9MDb1MunRrt1rfdAD5jsTAqxhr5QF1g17G3rdzHJvgQJtNkMGUdAv",
  "key28": "3dcKzZHKJb87VewyspSwVB9HgFuS9qgnm1TYrcmWUhQ5LhPoV3gGqUQPxoPF688bcuYZR9hEbB2nsAEGW2HbaxJG",
  "key29": "2HnzKaY1YmdnSTsBMNfP6CcTxcg2kBpfvrYzVFmyXNM2zFuvMAxUbsSQwiGe7LrsPAnNbGboMeZmnUHWoxTBu4Dg",
  "key30": "5UZajnnABWTc6NPoZAa4cVYrmAdNZh5A2xMK34QZyZ3f2GMWkHUZyYpoPYvYBtTjnQRTCXsQ5j9tqvsSpEzH3ZcA",
  "key31": "3G2x92tFadFh7WKhKEtvBSpuTJrVDMa5r8uezVs43FV6Fo6QrheEfUn8gRM6HWtaUhX1dA1CAso5s4FhWiYrYske",
  "key32": "5J1C6FuFRSCGMXaASukt7Qm3yfy9RL3r3BwXjPpHkDBc55NEePCU8itoQCLqRbKSyb9qGurEDRhLoRbm87LjeRPv",
  "key33": "5wmpzWBvSqXkqAUV327h6T3AHGUoiF7iu2fgXaR2jxBL93FNZ4sE1gRzkuaSFUnRDZoP9Nakr3HknfCvzVbJyh13",
  "key34": "4VSVYmZC8B3y9Wg2t9EC78GDTWTSJ5ceqbtYXzFmHevRWnVk4oneQtUsZRDAjoNyPtiVqniakJ9ru4FUcDy26YnM",
  "key35": "gf8u4ftcf1etdeEik11TwiZqnfP8J9aKKHviZhmJVB8wPyHiKfJRzUV2dPdZysGZXEkjXNdguVn54gFPrpDzDf8",
  "key36": "G27XmoVthcKUuKWKd4MsrCt6SVftwSGAo2ogyguQtiWzCLZW8NuVEQTAM2wQjXPsNUY3fLGr8HDQnd2AfdEAWKb"
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
