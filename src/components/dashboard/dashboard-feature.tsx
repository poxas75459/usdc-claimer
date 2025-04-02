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
    "59WwzJy8aL8XApofRXrzaExeDPgA1o11Wa2yBStZa9QnKcb7TLBXiDVEcMqtUgSEJnpRiZQGKaRZQ52o1AS8ehUw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iSX99zTtLxG3tS95v1fdXoRet6Lwk4KtU2yXepfZtfpmwD2Nto7g56smYBo8U54GpwNAcbEoHJAqXDE2XhWzcu8",
  "key1": "5QBfBRXrKxwhVRTiiVjJg5nfESfXK9a61Ah6pFfJEn9r2XefeGYyQMaWBfThpWasVNq7bwreWkdsWZZzBda6ZboB",
  "key2": "3n8Ce1atpVL1GEGQBce5Mu1egwdJvjgtWAQ7a1rYvf1Mw7kcYcKYkXnNx4Eousi3m26ztdvoJTnSyujmn1yGbGcL",
  "key3": "5v2aLdk2tipeHCKRYMpQVNK6Y8uKjjdcMgbiX1cXm6pH4qQ4YVuAw5b3dvM9bqPe6RH9AUFC2gQ3YYpBtTbkfLuC",
  "key4": "2PisLWUPMJ76Dc5CTnAY9T44a4CHzDe9ta3xNcrkH4EE5NMGVDt6hFpeobD9DyC6odFNNBJaJAHcajMELdV5jh54",
  "key5": "2VoTkRu4PfuybFckKK5UhHoepvrC4VRow3gu48FPhVmPKgzpbwicQDhJLdfFZU9bo51aY1ZC1B7fS9f5dSDaaZdb",
  "key6": "SsVZW4ZEKoAMGb76AW28vrcs2eMavf8RhnGdyCwrTRD4ndAcKFC1dLo9TUV7BcjRyRYuGMWC3skFofJcFhY3qsy",
  "key7": "yJopB88zCFbDCXHNoSBUbjffrTZsqFiUBeQy5R7woAiEkJUBqacpL3fqdXGNHyuz8Urgm9cZhUDfDgUR5mLRw4Z",
  "key8": "3mX2cxHUPigt1EnnPHe8p6ey9NetAPjVDqN7jPA5HqNmeQ5GAQB5YcaATzyddMKv4FrrvpPr1YUGAXbLPmU342cM",
  "key9": "2v96b1A7oWs2G9CCu1CabZE5DkA628ZMyV94gtCHDo1rZB2sBWo1djjd3nDxXq6pwGoPxCpoxYPFtLFt73Zh4M46",
  "key10": "4uHEE1cZtotnzPhEV4UBBNGHeRetaZFbceooLvJd7V97T5D3vczpUjjgHbFxFus1J58kRaGAZ2doschdbedyAVY3",
  "key11": "2a7yArsoVfXgeSzaNwm1Xh14TmQFtuUn7MiKArwWqY2rMiQ2cughfZbQDjhJbjiwkDRj2SE3fKiVqxH2brUTF2BX",
  "key12": "3CMKJ9xrg7Y7YqhDqNWMVXijDLJcqYSYAUCZZRW5fvfaoAEoRZEBav9oZJ82ZmzRFRpyCn2Rzwb6cQHaHeuFwL7Q",
  "key13": "23RhHTxr7vcEts1HWV1NEpzLfVsuuxVynRpFCi43pcHfUxL6i9XHgKnrgj6NWzL43uQ3188esNDVxt7B4P8A1jyv",
  "key14": "3MSkhDiHHHQfFTo1FB5fAzmxMKRm3cpRuM1NCjjnNrbga4ArFuWoygTzRw1Wmi8NEwtfiRWDXVYUnZVgZcAFjmjq",
  "key15": "3ZGsBtUZnKdEU2Zy6gLLD6FPzhgdFv1SthpeNzgBhQXJMVxQe75uduz6NLeqL3GYaUC4qYBPQWzF6WVs4B9ahFtn",
  "key16": "xTkKTD1y8GQRGcCaTfT96ZBeQLtjPHtjp2piCHAe37n5kBzk4z9pNHnBrCCEf9zdV3o9EnidgQtzW8yuKZw8hHX",
  "key17": "5Uwk8uRZjybXYgt67wfh7J4f38TCVKhjTgsVb39goZZrsCUeLKHTyZRUC2CTxJAD6LrUFwFKoeqZUUAg4jEZ39EN",
  "key18": "3kuJqfVtEY9zoPCNwYVjhnxLWrTQrqvBqytb85DA67fFzURXSfzPUtrke5BRZfYayAiHjyiJLzLwQUo3CGUpX6LY",
  "key19": "31CwVWyXMepr6aJ64SoAHXBqYvJg3hEJkzhqCgwJwFirQ5UPsTWnq1Sq5a5Js3a11Hc6tBNaZ51SRVrYwEwqTnBH",
  "key20": "3wGXQ1Mi5GYF6EYgtGCk6LVFVvafXjgMK8MfNeGMzuKREvKZ7McnQdo8a3nYjwmE5GfUiAMxtyFwtkKSQsfQPuAG",
  "key21": "2rHNqGWJ7fGBRm6bfkYLx3Ca21v7AxQa1g38yJT47swnJH8K8yRtCt8myHM2o5Bjn6e6EGbLMhtfNgL5Z4aBkvxk",
  "key22": "F3ZDGxSyH9Y6Yr2Gfs6Bw2rUA1SuWjtfa5FRnFmGno456QnuHDHn3F1x6ukU8E2NF729zUe54ES67vvswVUAGvU",
  "key23": "2Yycxj8d6CWhsEtTAMkCg2CZXNFXss42LStdb9GDMviuoC8HCyeYoJHibYNM6ng4WLmYqAScKECKW4ARQkWa3Txc",
  "key24": "5aouWPRHmdV8xLmvdhMcnUKvKZoDvCfTrdBSUnPtmjfgbk4LctdE1GsZMqkMxoq6yXXEgNFCVJBTA7twUXHUHFLS",
  "key25": "4SdcHHPfyARiiASbPcg5QWCfHUqApfdkbbNND7apbLyrQgw4pNSMLQeKXQys78JSiBGye6XN9bsDZgZgrRGmo4EN",
  "key26": "4zivEmsGtvuEwB6tYTrWpkFwq7sYK3sLki97S7SSzGf4BRSYnHXZaw19NMSJnheM3sk4gpCwNyMH9PpRynEVeCFH",
  "key27": "yan2YVXxS4aWd75jyEP3rZhTQ9iYiXYcWLuRQ8rqrzBXMAWW9odX9noJqaQ5ceJADGkFnD1jdR89LasA4Ts1CfQ",
  "key28": "4GYKgw4GLDXwwY1fcGQ8sCqfProfvqZoPEiKEw7Don2woa8gAkwuKyTxiJ9GeTF7svD2JiThojx24wGCvLZ8XuU3",
  "key29": "32KWXrJBguasg2A5TztNxPM3AjvTZKJE3zygfMttU6MNbV3NWoDCoTC1qy8k5azpWhNqGUZbcpoButNTA1CiUY3Y",
  "key30": "3GUhHUYRtSbfeZoXTs63RjMzFBdNheVEHKfYCvDRmnX2vbRD7eUEPiWUMNPCxtcnFQ9cEz6y3KRg3sSgXmUWFx2w",
  "key31": "37DuSRiT7rG7uuUnR4m2TPGXWWP6rtJqN5MfsH9LX5h4jNxU532jTj6mq5kqHLtyh9rhk8H5uHDfRDR44yXjaqMV",
  "key32": "3LndsSr7q9j7kfm4sfBoab8cA5wj7194RzeExzFGi8cP2X37CPBw6a3Pzj9woiFxQf8AdVNXkmrn7dWhsHhLGmSa",
  "key33": "YJSp3U3525EX1QhHCt1ucPNDAMsoUZGydjuFqzWdhNJELW35Rt9wqhtFa9sGsSCZwALSsxa6bZenPrSLqLzKtZF",
  "key34": "5xpBJrgQjXNedRmQjrhhJivCmoHqj4XYDcQJENbVLUUKgLg5qcoiGA4U2hi3W5rq5FrZSjC4UccMC6aWAdCJGe86",
  "key35": "2SVG6GnQF7UshoVT7tSCupGcKVfKMaiytdGmok8o6h8QRV13ZMeqt7vzcpnpSryeTfdXeeSHpruuoQZp3b4nyEkc",
  "key36": "4KDCbvJLaq9mGWSunEh3uEp3cqVdB76DHNjwMd9f7MfACeRgQX6axwCebNUwYvB5KTsTvgkFQ4k9x7sFJePJHCi9",
  "key37": "2Vq98LTZsec1NeB7vzY8ta9Pz4R5YoD4DKoerrgWn8TpXu9GhJCA3XxsBg2HbXu8VxzbgTezXgwWVeBkr9KC16Po",
  "key38": "5Aw3uyLThaEDmRPGCYiu24fCmgp27yF3nSaQ6KU8wdsrsCXGqjTD25uuF9hn3PhsFfnTQYbwJtjCqV4EGhjUTKrp",
  "key39": "m7pgiGJN7btyDzHYPNgDLJuaFJtJREdHaSmYMz6NfKzqUhiuVpdqMC1VnfAM7WZ7GkSve6VxyM8ZyrurNm6Hwtt",
  "key40": "B6S4xTDsvhDGWrNvSoobZBtprk8vSsbwyqE5SGeuRCe8otoQTSe3yCq8RhdQfNDGJ2Z5bHs6otanZsiqvxhzow1",
  "key41": "5mNAtPpwcyt7DoAkg1ShNuvGMJkLffusn6AwJqZVUVwvS8NwK3HEctaHknh7UzAQYQ1eFK2fKMzofz2Q1nKo4KGg",
  "key42": "52SKTnJKb1VK3KwE52cHBVLw4wGD4kUtzHJwragwyw87mshYPD6Lm5qgE9cxQzvusS6U4AR2T67rkgTvuFfgoJHq",
  "key43": "3uTXmZojyqYhMYZRUxSBC6hiMQUuJSVeLVteWRKSRaDs99LbCThgzYub4yXPyQNKoc1kTnqcy99ECxgoGtL6WoPv",
  "key44": "3fnn22zv5hDcnXRc2G1MKp6Z7wx6FnnaX1wYLs3ToNnxqCFf87tekq4eJSyWmWW4NYmJSifBeaZk4sMVgxwdwgiB"
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
