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
    "3BHRCdQtYrg6EQDiLC4VxYRZwzHbgHL1HMWiQNMQH4rDAz83FsPFTZJqeAs6Z5VPxYoVP3vp1rqSCFevRbByRe96"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41ZyFo36ReG6Zudq5dUCuyxgfe1GZn5Bv329QRrsDuR5jU2UaPrxcT8KDvxb57QWAjjWzU717SxMCo4gM2TKDntD",
  "key1": "4UftJ5FHiN9spTtuNNxzbTTAaiMvtoQAToH4Gt7eWAn1KD32L7bWhG34RU9GETJXa66qPtV88xKm7vNfSDSNay2Y",
  "key2": "5prxyRKixDRHWwnF2Be3LScB5eZzSEX1FL8T35hSt6PDgE6cMNytxJrC4bnNZKi39LrsZCT95GeLaYGJxNvQe5hZ",
  "key3": "2Eshf87rHSKadSTMEz8We4vE74mp2G3ZsRs7As1uLP7qcWvHsf6EVXtfqpiA1jNsB1H3GkN6wB5BvVQPrBHnrnFD",
  "key4": "3PbAudCsXiwm6t6i3nGL4ZDmw5zpd7BxgUet2omS6w33z7t7mjrEWywMNBugKkotZ94JAokRoJ82UV45LeeNUBGZ",
  "key5": "3oR55r61HpEBWxwXmsPvKJdjiirSW2wdFWqi34NHdTsPv5euMjCM37idLyE35EwMq8L2XtMPaFGGFAR7KEJFzkZT",
  "key6": "33xEYciDRz12JbdzWF8kfdk6pkbxLgDrNETARNoMGi4gPjJik9q6YPSRZL7WfegiXrp97MWZryXRTq2mtsAQ17rN",
  "key7": "44istG9jud9oa4PmWC2ghU5ozutyGAYs4621rFwkc7mLuFHRNsFgqmYAjVq1heh3EqS1KDSQG4dMCY1J1zcuKi89",
  "key8": "4r1ruJ4rsWWPsJRC2S3JfLC9CSrtKEbKe5GFGWYppYTLzkvnmkQ1RcBEvXXPxoNHcyUgzzweq8qFz7RCAzxt3pKk",
  "key9": "5wjAmjB4jUESiN1roJtkVwpPm4P9nc81wCNfu6jWdgGPKfhTc9AWsrbX7PjUseMmT69xhffm3m4b2n6eoJ7jHx6d",
  "key10": "5ettx8TtgfjazAin4XksnMY1UTpBecqpGJ1CVdBVchNpicHFzChCNx9JrSgXFE6L2maLm6JYxcry9p7vuCiZhN5r",
  "key11": "AYQd196LzHcRf8tcw1AWXZ9y3sEyzJRWRgQWcG2nmMeyhfVUMWzEWEyFuRkMawrgk5A5RZaAZboSNZYgsVDsBMK",
  "key12": "2dNvyz6xdiogkhxbLANsGxfqkbQx8jcRots6wssnNuFs4sJvaAfm1AH8k2xwYesZu1RscDt7qXWriPgRxPBXeFWw",
  "key13": "2k38amcAjJgd1kGsymxG6uNihqYNJDR4UXexwC2rUVSPSZ5RyRGHY3fTDZwykDQDf4fcdRtHy7UMXuUFkTP3ReaN",
  "key14": "4MuQUnv92VJcyEwvR8xsxqo3H2DWj8cQ88NTcYDpxkpW8cPqd7RrhN7J5EdssVS6LnidKmUxzdNQEqcBUwR1frWv",
  "key15": "4YbkEi4fqTsPnVSavqNL839BcniCWfaVMSWCJqRnWwuAxmtsbDZQWQoi4kvw6wNTKemXQbD74FDSUyd5rpom6oDi",
  "key16": "44UkArmsvqR6kCgVcpVtvCKFE8W7VkTZibt78WzLn9qi4MqvPjfPPQJmaBygrS546NTqvUY14MUeNsCnTHmj9zHJ",
  "key17": "2GKs257KibtmUcEE1kPbYwZMZ2XpQBXe2rdfTHLqywFFmSDT7Vn2AetG7ERrgVjTy6E2ySswy9hWV4sTWRfiQbVa",
  "key18": "3GyhSrj2UuCZ8NumzSuuMiCy7fjNCFBxpZqPkd7g2ED4fkzh4GsSeuEKpGGaeeeDxPyhVggMqyWXRmaT3qCWpHQV",
  "key19": "2fQdHZC27KLhQMawHcCH1Fg4TxpmYjmHJoqDi4KUAFyAbew4RjtReD2bRZisyj5Txzxt64VU4szkczXNxfNiNQGD",
  "key20": "SJWAUFAcqrLgMPBM7ZQqd5xw9BcYEweQ16VRK3MoUchqTB2eHTxXQAkbSzCyZYu9mncVkjzha59MbCvwJT3TKbm",
  "key21": "kQd4UChdciZQR94JpzakUeiFSugNeRZhjb1mLambsTPTSkUvoN7471saHwpTt3Q1GVChoKRjUqt4aBZ5Mg1kQku",
  "key22": "2S5QqEZfW5ncMedcxKBgNUuHGjKK7FuZdESLVG6iVqM5yfgBVUuvPfZRpgdgGMMk4Rn11LeEChKmwCQcqDqDeWRC",
  "key23": "L1e19egRXt3hiw6g3ZjjYV1sGX5tAD88gygv1vwj2NoySLtfLNUQhgBtWDN8Erkqcdt6DuhNt525PJDXiAPtqGC",
  "key24": "3zy5r21gEMUSeLcUFDT7e4LrnNNxjtBTS8NZNX8CHHdoDMysABirTUZfz8716xVCAwW1HakR6o4LyCehH8MGefi8",
  "key25": "4oemDiciKdF92WMsien5uBMDykrLhc6wj9Q1outVrbmydBhVy8YuVawbHtYJWVbm3h9dyQYm5BS9CHn3zg5M4ihT",
  "key26": "9DedAgzFJ3MobpfRkKv5fFfGSihzrdoCfBoknAMLyjc8g3M2mASe5ZDRD1HBKqpRF1zLupjnBz7Umh5i1SGbw86",
  "key27": "3SjXzdeJ9zqBJyxdtXdwsCByk4WRPEuvGLTWaDjEFB1Q6aekCMTTvoyPArF1JvH6KyeJbR73Lt6DwjK34EsniRc7",
  "key28": "3m8z9G893mtobENSAEa4SiXxEYr9b1bGuMriYhdTuyWsRsRUQL53zvSsGq9SNV7iBeZk317YR27tW2jpE4Wz41b1",
  "key29": "2Aj2RqS5WorJWGngjWNa7zugDdZsXk6aPu9if44QKmKzmb2bBTJsrgRNB3EsBzrkTSf7mtiPAtwD7imXxEYWeiwj",
  "key30": "2VDq7rtBSHpSzkaFxQA5zhzwHMrkqXtGHgVmfnWpRipmDsdHXMMuzS2AR62C4JJ8LaYTf2eK7S2PA6sqosEshvxz",
  "key31": "3Mnz2a7mWR1fDuxqfMkjptXW9GSVU1DZM7793me1Uuf8aWYtnTEHATTgjV3JN1RDuxYxekzmZT3AhXK4u3UcerkN",
  "key32": "65smnvrbVEd2b5Q8eiLmt4E9RW3QBrjKkoDreHRrFTQydEa2hUUYNAKnDr1b9Ryn3SCMTrteERtUEbELCb6zKx8F",
  "key33": "3vfMTxSk66iS2GbwYbMfzK5hTF1yuXgACvjjvaCHSNqHsSLaH3PUYAkDuuykJ9RPphBVE1JvYaeuE671AvGQfpii",
  "key34": "5EJVXwGaXoyZJU2BmQaoMqoqCciNna25ZSyv9jF5zU4EjGEjBTpFgWC3KxNattsjtrENZs21dTVLnwbyBRfXrk9M",
  "key35": "4wznpdWJWrAMSktkJC2gY2Ho6jve1UeSdzCtxSovit1oREZPNwaarvr9zx9zi9Ruqd7D5yQEW8HmJWSMoAoqKiQ2"
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
