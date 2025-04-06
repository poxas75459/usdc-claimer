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
    "4zmhuk226wz5Tsx3SufMDjxkoqhokCtJ27SAtmzRkdg4JSxRJTS8U8uNFuMs9dvAuhrJgy6znNRWc29sQLEjjjWe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58yax7SDEC5kyRpvB8VSY3AVgxBf3Um7gjvuvFSejKTLNH7R3yrkrbv9DZgSGVx7QrQ4AdUFaByiPKD8h3Ti1fnB",
  "key1": "2GWXvmnKzXJfyJRdKYSEgAo25eiMgWfCyAx3nZ3C2qtQ9KMxQyARagmzbmn1FbjVZu1AUGsL5GaFjrkwvVCuam1v",
  "key2": "4Yd56mmfzQFTodvPAsHCpoZwAqhwQfuVyD5JJYiL7WT8eg3sh2Jd1685tV2tDKMwmm4gfSJCVYdi3JKJFUt2hXFK",
  "key3": "2h3GCazRHJ8zwx6Mo8GPnWmZstWjiCuxa9JbDBdEkCrH9peFqcykYFcBXaZTWxS6dSQFaN8Bp6oW9bx3BSEQNkrF",
  "key4": "25izzxBiCkrULHDufcuKiGBmDAbQ6nC5BLTvT9h4oBeapQk7SwtZjrFEkjmPH1Hdbs8ihAukY3hEvSgxEL1LUtUo",
  "key5": "3oJPh38E1PPCAW8wsjksS8jLizZQZSUGvUETPX5KW6Qjfh6wrZHDTEnqftL7g8qANq4ipHJNVMDF7YW7z4gMDeKF",
  "key6": "3T9wdJrh3QwNkepL3NNbajH9fH1J9uzUy7MBKvAprywnA2Jv2QSWNyR1ZvYBBfyoebVYX8af5VWbnL4nRb28Yh3r",
  "key7": "57mttBFXB9UBmHxsbtM8TB7H7EZytMwRhVRXdMc4vY3kg2Btso4xdRtBAA8TWHxKAxji3ptakXkfC92tuTx34qGY",
  "key8": "248u5e939nZmXzVaKsevsckUANq559RG9FDWKwjRdxCzfMKEv2dtqvJh9P8vEArg3UnDSbSLQshrvqfFFnkg7fQR",
  "key9": "4UvDp6HtE9NWatFmchKrKYcLW6XN1o3ptyPQFMYgZPjVh48HsKZHJHmpNYAZz6ZFukfCpYKV7PyNKaXnnKtE9gnp",
  "key10": "2QMLMhdcCdtUamAmaGLHsWbmHvQesvwvVBHvCATs8EBmaFmRvAh1ivFGJa7ejejPq9GMSX5got2qBVeymYkmqBbu",
  "key11": "5iJqcnX3RmG2n8tGPoY94Pk6GYCZpKSaS5CoZyZP5ZZ9w4cZKUeHtqEUX9DotxjA6oahoocJ3EGHLNaqHiiKzwUx",
  "key12": "5Hmu1cbBNizA738mSnEmFZ3LREeoyz3Y3vFwmoipa9vBne5vVgMW1ZFygwVKnZ5mGKiSYrFy4dARkTBZ2zvg1ug2",
  "key13": "4NaPSXWNTkY3NP1eaTYfkxecKAA14okXGWX4qZ1XxFhodM9h9VhSi4wuAWNP5Ym63C8fXgaVWXqQzXSQbbBdXJVi",
  "key14": "4VA9EPY15ByftwH4EJ3fk64UW2RuKLKwbqeib9SnPN22Ae3D7zgYqhi7naL5enSNrCBhRtQMs8gKLjMxS9fHtpyg",
  "key15": "5SV1S2BSgYt9RBFVM1Qye5YSwKhhLR6cxtZZdRKTNW3KNyRW5D9qZ3vTLwczN44VKVBdkg9WMUuLZT4MJg5EVA6y",
  "key16": "4fgbjKcUuoRdHzP8SAc4dwXeDbLCPRety1bVyK6cnaydACNTFx8r2UeeU6ViLhZ1F6rsqWp4gbuXv3dNEyBnzph6",
  "key17": "5x6vVwBMxFczt5jYMNrA8cXnhpSiSGiyrLAZV2T1PLV3mYGHSvL4kpm3qR8VKYk8wR6QK1oougtaweAvy5aHCPRG",
  "key18": "4HdEkRapV3mpC1FHN3of67btwY6VCSrDCJDBA7RnmVW4Key75mvYrmem8mfS2j4eP13fuBjBSfncbHB2SkB53Wjj",
  "key19": "4w1a2kaDuhVHLkCcRCeHBq4XKkXXcy5sgwpdrenJTWzRk1aZDU9zUNHqEtKbx3UykrDroayYLNUuYX8ABHyN8QYo",
  "key20": "5DdEtbrvz1Uo8JJWygc474v6PEqq4Yh78hbPTiHVSjDw3Uu8M7FhdWeoij1ueHqjgsDRmGKSS4kD7cVYfjpEvR1r",
  "key21": "5aztCS6EmVgATfGANESJQZ4UAFPr5iyynxZbcw9kUnmFjCwSYKw4MfNEQAVA32PeeQDcadZwTUCuFmwcQ1pg1GRf",
  "key22": "2zNiLZWFQFrBinp2jggaDfJKz1GhYAdZ3yR7aa6BzZvmBAjqT2uWttfrmF6b5szFTt4wqgJ34t5M1iQ1U656yhVA",
  "key23": "NoLLY4CFNrJrbiiRW3KUfeKr7rE6RK5TEkafmtjwvBJku3MNRuJVfryZYJJ8MchKzLHxRgEgdLZKqWLVAiqPxBo",
  "key24": "5UxKXRJCLd4DVe9LV6MQmqXaPJDoECvnjRPUDSRoeHYqF3bniksudVGpfgy41QRXeGczoRHw2NCUBa2j8hguyzce",
  "key25": "4bwYs64T3SUbi7bUjB5EeotUdiXzA97rTNFwX6zVWcTNc28k5ffvRWbwgia1DsMpscaGSX8c3ifz12V4WDFifSim",
  "key26": "47C1C8vKMU1ZUMfFKeckBJrtyiNLatzzuKg6obJsX1xtnhPeia7pR5euNu5GDMp1VJJ4hCurqFHZQWRwHTJ4QpGS",
  "key27": "3xxaPgB7nKrLoMKKnWaL3WhgkEWA7VrndB1iNgWeGGPdDJNpCraoYkVFxV4AUMVcFYB8eWj4bGbkNK78rBdmkeqb",
  "key28": "59jahWBBZncrGqGnzLb1MFKd81pZ7HfbyKtn3vtP2Z3RKoK6oCuGPjM5jXDXdb52XvgwZAhyCK41jZcKF3WVBeYx",
  "key29": "3note6YZfYwSPgzdGgYQfgEYCrGuwMo1tYPWD4tcas6dRohRsPYzbjZ5M7stygsz7Aw3JKXHRbSkf6pVeCMvmznQ",
  "key30": "qqDpu5arda3WRCXocfrLodHS4xpgS7DDrSgeh3q9WVpsqhtGbxag68m7BHaQV5M1uNRwKjXq5yPMhpTSXkW5Hc3",
  "key31": "3Q96KJPLZwRQanyCjqrKFCKiUVyZxqFauzsjBqfVmZLcZ4FX1psUF1aEjg7es5NET4s4SQKnUzAg2Jr6XWVGhM9W",
  "key32": "5qRUxaCmyurHQdSjkyBDx3YeAaAXppvfg4A82sJgy2tyjr8AC4iAeCcBHbor876PfaRPKDNNoEQGY2QyiEKj52aF",
  "key33": "2QeNoxMyazS7GePktMMP5CtaH9yvW7AeuqDa7c9qc7pB6k52pjPKUDnU5e5WRtyVTiap5KK3HQZc6v7NDcd2Rr2z",
  "key34": "2gnDfoJnxuMe8aZ8fGM5ETKTpPdeneoKeFcrdwCfwPWMaHWU3LDit62BZPWwpHVpEni7j4EKZ9baQqDbSfPsAwBy",
  "key35": "552YuUticNypiDbmZPbeDogbAsYxqi915uQCDXDECDsYWfRseefKE1pnMJcbtYo42j8HqGcFLNXNh469f2nwFeoW",
  "key36": "4TY948PFyzHXKpWQSfqVuGd27cKs1VCegFq9UNQ4v1WWCtYiKZJpKJVLW32ifMPwTwz5h3hSg2tqExkDGSq52qYG",
  "key37": "5CMazfuZByPfqykt4zPcWHukK38bZbXnRSnNvGnACagpBAigpoPr7T5Sb2hRvXMiim19yA4w8UPDzuBbVYpkUEuP",
  "key38": "61LgQdXTVmk6DkRruh19tdydJ7KJ4EYNFgWA5TVKehffwSPb6jxHef9VASLEv56VvHXtFYfmD1fBY4PvJsdvPqq1",
  "key39": "47WcerHZSHWD4ozUhCKaPZY1mQmPD6ookonxpxigiAuKsEeHhPVK5p2cKLZht7A9RaWddwCcEibGkH6TmTwgeawM",
  "key40": "2t2BHp4hq5igdym8ScgSRECptaDhsTM2uqB7V3qQhacev8P4XCf9H1QnAdyBAXcN3v1e3fkwqJ2zgr4wV7yVNTgd",
  "key41": "3imkHGpuBtsWaTQ6rMMxdoayx1ivDuhqgwHdukEjRf1WjLM3iS3zKzwdtmiVHCYNh14CFk3cuRj74RnEg4cSj7xj",
  "key42": "4KtmdWd8KLfbi69AD1szHd5vohoKNJ6Ze39bu3966iSr2MnUd9x9Eo5N4z1qSSfCqVm939tf36qSy3URH8pBZo9v",
  "key43": "kEAhGeYfWQ2z66L7FCv7SMeAdvo5sQU2iqXy88sqLYNjPDsyZdo6m1pJX7HXrC8u59EK7t1fjNyzKxesrH4GK28",
  "key44": "UnAjeT3ZCk3iWPaHHdxQtKHGAeFSvVap5tA7dstt28S4mmWMFUiUHra59WUxfnMPnztGpGVLpPf5Z2onAaoDFBQ",
  "key45": "64Qjiy4xD6ci4X7RGpHWxW3Pr7TYunENiQsvEoBj1acgmQ637X7MS2MRCGwsvvVgZeggFP8WNyUaQ1ywWZEGBR31",
  "key46": "u6tBUKabuYc4K1W9fD84aocHPX6vej8dL7pJv136j29pMnwhSdPkHSZww44esqiBmJX9Xi5THdGX9nXTKLkFydi",
  "key47": "39uscVKhvbDCJBSyeR2V9kYezsRqxFDhyfVhY37WZXN3rQXSjneJge4Y8qN5khi5brj5qiNyXsD92HmUgcrrg3Z1",
  "key48": "5ndZoguGKBSs7cJexj3KrRiUkCBmyRMnR8m4Bp4Lo5csiSz3qsSQkJqxaECo7gSAhMc45uzCyzWwLF5NhRnDHN1B",
  "key49": "2thdvnKTL8hRTDobzzzbncxydd9PA6CNJGhMuKF2FFRyeLptgbdmRWNX1gcjuFQLBHkn2efKg84sLhdm4dCq7f32"
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
