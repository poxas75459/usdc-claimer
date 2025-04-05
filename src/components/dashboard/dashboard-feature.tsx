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
    "CrscY4DoRA1LZfC1CiyeewsJzXz64Fz4GBHUHzji3j6Any3YAbXQnrtGk2enR6gr92UBRPGMKxm9JVwh2JVgGwQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58WpNJrGi2G9wa1JDQiLmNXnxYTRtsFjN2ndMijn4KAQjrDibtmCZfMjfprV2ohLRtJcJKsssRM2HqXnkWZRZA4r",
  "key1": "2AQicmhyNVzytnbQRKDGrTuKoR9CNZ3esj4WgrGLKCN8GjqjUDKrAedQ9TXNZ1mqu21xqeHUZhnF1owHiBVBGNW5",
  "key2": "5LXPcov1VUxtXL5bqzAarsF5F9VpMDWqsg8yz9escvvBfd7GQG9NdLSAonvGUmoVsNGSoeehfeg867cCzsHw5WuY",
  "key3": "4Sv7tWmqeufcfK5S2mKUxKfiamyoKxuS5kmmCyJXCZs3n663RgqXYJndUKKvs6s3tm3pNCEgBabANsGXPceF2Qom",
  "key4": "322kd8XYAPJobjKb1dgMyGDgDNN9Xcsmv7UJZhjW8d3gQDXobfaL9M1AFpS6WmS2WmEpED2KxtYqUH92XbY1ET3t",
  "key5": "2KEwM2gTaQowiTJBLWmhpxEemCH3G4BMPes2hG2spspyULswuJje1Enu64978i1DwT9ehJexsybywjdkWNZC7wmj",
  "key6": "557R9XAHJsjWgpkK63gHEQrpVjoFz3dUwB3r93CbY6aznzjQGbPk9NU55x6vtQibnQangaW1cdH6vSgb9pCEied3",
  "key7": "4NRcARyyQUgecrpXmoGiszB8TkDwJ3CyKxPC4wQRQXUiH8nhshyoSj9S8jEFGjZssw5q2Z8ukDijcZjUmfKU4Lwt",
  "key8": "2iNw6qc5rWxmcj63FPm8oyVth1Zo3zAMSP96xoK85dsi5XWcddPHpHJHBEv8QRmhomyds9HguJtZKosiVzjhNa8C",
  "key9": "4Bu1Kog7afic6F4MmDygonLY9djcWBey2FjLgvYeo8byiiGq7Gu3FtnpHhDAYvv1SKK6Nu8atZXZ8jJiBgWYEYF5",
  "key10": "23YCCSNXeXtVub9YbnFKzDPv8MC5GpLUu2GpnBMiUHcn6zeySeEMrkyVZBCb5EB1JS7dstvcvC9hpVccR8X4DQDm",
  "key11": "2oW2aqtefCFyKHT8n3iUgXtqDienwGwmp6iojKLSQCoh39dx3yWQvuwhezmtUnBXP6axq3HvHADPZiJuaT6WJE6B",
  "key12": "5is6mSnJim92NxKBwhWaoxfKz2Rt6RPHyu4TBbDGG9awXQgXLK3hLsczYaPZKShAQpKEJHDp8hsb22JUhscpHEHj",
  "key13": "4TabNsRaSUzaTU3m5Yf6tbpeBRq8dBaUatGb3KddMY6BVgHM68GPvRKPdupuysgEQYWmrPCm5Q6D8tWAUDVfXqWn",
  "key14": "2AVB68fNXuDh7Ef2r9LrDScnQrYV13nmRQwmVTuVsVWPTG1MvgyMASBUUMspf9k8xiHP4LvLCHCz9nfn2k6Tuw1v",
  "key15": "3SKY2jY7yhLd8Dt2ktL5geeemzDY66o5TkbgBTDikZqWZdPWvUQdKKTFR2SiPQNn42ndyEDLEgwux91iK2TbsKgx",
  "key16": "34sMdpBMAjkXqGwGRuJXokjMLXfKyFn7jjTvLMovN6rxDVrCMurbTkTsNYSrY7NPd7EnYAaMUQeLAE9HrLLxHzkY",
  "key17": "5bU488JmFKiSvkW6KxS1xznyM8JiePKG4smUenV3YKDZY7RqD3T3zBbn329kz1jTNS9kQjWTG5Xw3DBmWNHZaikC",
  "key18": "4Bpo2xbBkKCCD1Wb78grZ21JjkFcqUe4J6Dg4vYLt7WMtec3XNZGZkBsTFQKwk1kweu67x9sBSLqR14jVDHX2eZB",
  "key19": "ZAC9MxbdnC9Ed3TGCQ6byxYDfr7ed9RrnsXBc54xauwnz7yhNjjVkFQbksufpyqgphKskhG7gEvSPJe7cxQaFVL",
  "key20": "HD7ezoR265h4kAWHJuyioMrG9MiJQJiYNkqPqCZzkWq1Jae6NKp4YPo9oKT1bzfxKFAueASWBvynJVWvJDS6nqq",
  "key21": "2rAsiAgAQjxtJmR2bxNfQa8rD7bsBsWPv6vDieKCxwSf7BKH8ytwYbveHbRd6sxG93BkrFVYCEthzNtCq4R441Q8",
  "key22": "4VFEofD4Jkhtv7Moa9fZEpGniSTsJnJMdU7jZXqqhfeEMvS3iUe1Eth5hc9vAwNkZfhx5JbRTtzAHbomuCadPxwa",
  "key23": "L2penkYL2ExedFtQmQ7YFr1tYTi64NxteB2tyc6smdetngDpP9Cq1Uv5xbimBucJKMg2aPTjGre8VcLL955n1GP",
  "key24": "2Y76tRGKVjWvGPAhE78KstZGScEeSEbVSLXE4ksJvD9oELPmZV43RradrW2KFmPakD2H19DC6qA3ddxG1CKG2gnq",
  "key25": "2psANkMwUmk47GR1ZbUVCQmgB1MB7hBFLXsBU7J4jLnE9a2sEdZBuYdjuPbFKdUDz5eX5J1x46RAhUNe84YQji4f",
  "key26": "4GqBeDeZyrkqUvs7MYMRMKjfhFeD9xtturZpxwBgiV563ieJq8X3WmEZi9PU2m8mC4xjYd7tW5wrS49coU8rV9zT",
  "key27": "5y7tuLRN3WSsGWJXgSDR3q3DvTwdrG6FWyZGYhLcBLmhWN18yx2eLpn8tKg7ou78mfJjdz58ij2bAZnJFYZw1sWS",
  "key28": "GUbRz6KK5h1zVLSTfC1chX1hd88FSB8oTnwSwavsnUm3QC8JMJBkgB8BUkmxNpuBqc6bzhL1QnDrsFbs25UQWGS",
  "key29": "qaUZzjX4iXuJyxxwASwZKrUAMZAcMNkwFgV6RcP56XXL4UhgdRaVgSyXdwRAVWHhChvaCCY3PUmfaEmt1XoCeFo",
  "key30": "oCAhFoSpXBecsJCWvwjeAFPdUyGS3fQADufYiPVKnmkUbKJbBUsPwXszuYLsPnFKndeymVPWcL4HdZ9RuDR6y1D",
  "key31": "3cSdM7SwBykXqzdT1aq6tBaxUfipEcXKX5KdMoWtRWprrSGeAWisky468gMTGjdXWodz6nBSTebmoQbk1WTZyyof",
  "key32": "Jcr2c5GL1ZDv638TQizb46YiSiVUEaKGZuvcKSTNpGbrpgrC7sQSgjzeFkLZDRabuLthyZNf2x1R3rehngixrdv",
  "key33": "9YJNPmErGnvXMj9jeUYgSXpe7vWLq7AN5DKcC3CNEdhveR1ovUVj3FhjaNVx9i4B8LNxPahXGkVrbNKRf7ey7vx",
  "key34": "4tjZCrpVt7ndPpSjh4EsSgMhBc6QXWoFayqqz7zNyBAnFqN87DwTi4M8ouoVN1rUAEQMHhqYMrQGa7j264kPmiZh",
  "key35": "2Wr6jrh1ihMbTv6K6NjZ6u2NX2F4NkETniwhPxpz3cU46bUxZkjiAanAdfnBz5bAAU5TdzneyZxwHP1cEUEMp2n8",
  "key36": "2uHqZ8dLjYjQiHa2PanYFbtrnzA5V6NbVxa5anaiVCL3yJ88JwnftZ6CqRazh24LvrchxzqTbv26vk9otGxF7Ebc",
  "key37": "7dLvyWfjteZDA91YTPNTAbahxfanZLyFM27T4dBG1cHZVufmkeytqn6DYuG7tbgpizPQ6RMnKYBWSBYLvmgQzF4",
  "key38": "5HjeWrAkdSAAAJWtJUkssmAdUBWa1ZNAkV6bkYgxdJSRWEppjaiMB7GYXXF3rMYd3aUduWwmKUhmMTg8TF9ERc7H",
  "key39": "3vVvT4zxdE7Vmae3opt1BhqJVuytnDsmqz3WS3WSzKdLjsQn6DWWC9gEMkq9k7xgLGUa5vbbfmhYv4fkorSkaKiq",
  "key40": "QqpDWUbGPu3dqfyd5muENWrMrUTMuffweK4qVEDyGYRRtT784ipv1GPDZoTodoZqZshrtwor7eH1T96i9FdF5Ph",
  "key41": "5LaueVYuzRmch3EdgbCVdXuuH2sPiR3dHJKzzZbVeJ9GcvZjsN4LAArJrNorCePvBibhTfkX1DdCgZWAtNEJaczj",
  "key42": "5pWBoyj1LowNAhstGT4141Kn5MWSZuuoN5vNmkuPqqHNZqnm9PgbAug7M4WP8ctHRJtswWpoVqcUZEAMVhmFrf7L",
  "key43": "42gDtaMTTRZph78ddbBAE15TqCRUWsC9YyBV5ejBy3kxiqEYaKCrNjWj7j1NtSPsftrF8ShC8n2eAxmxPyhZYEYH",
  "key44": "2mqTdRvR86ZSUxLaxMFjbWqUMfvN4vyrhuaN3C1UpuBWahppn5xB1YDAnPhDivnKv9k6zLhfinuNL4noj947ZgBG",
  "key45": "3mek5KRNVmUwgH2HEA9U7EyVE24evXSUgNYA782YyF3gMvcT4SCGYMsNrGPMM72JvgpxfBudU9W5TQUgWdCZut3y",
  "key46": "hzhDycGGzh2gfVJpmmxpUSHp9WM3y9TgYvq5dzni1HkyLf9wX4jMex7GgVRvwHAQQkBvhzZjvFNU5Lh6ANAGNQV",
  "key47": "5iHDzR9vLA4hjwgfEyqJKqLNrs9Gi1njoZXJaug9V8ZasCmRgDMFXvJhgqkTuPYzaQAPj9fMndDiq3ffw3UQz2vd",
  "key48": "MJKeGvkrqbbTnKaaP12FsNgLQnZuxsiP7Ty8GXXJimB1g3hbngNf74hybdWsXxw6UDe47sWHv52R7nbAmU2BhpX"
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
