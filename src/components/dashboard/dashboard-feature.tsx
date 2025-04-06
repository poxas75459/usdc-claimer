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
    "LBvMLm8Zf9rnqcp64qMKmVEtgDUMb498HLzsfVehCCfknipePfwK5hxVcgUjR6FcjQdJtoTkLwPavW4ZYR3c3iF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hA45SaoxPz6zCZQqWioxN3CZts9rqhy77nhksh4V84UZhtS2st45qJSWXNwDKUo5fsgMJfFkEpPmzqM5JZrTZ3e",
  "key1": "5p3fjTNQhNLbVrgPdT47mUYioEHtRZbzHQ1mLq29q2D28cTSDgyjzcFvbCgfuroxyft8PMx4XgDCDL1cj4RdUQzj",
  "key2": "55Q1WD2S9jJ83LsD6GNNxobpj8aVxuoUAoHv6AfY98GiVqmiHnz5Cw9w3ZkRXKb5sioYUqk8rkVVFPtMsY68WwrP",
  "key3": "4T2uRURBpQrN3MkLNP7TjpxXEXAKxbDss9FTezzPbA55VEiRitSQvrFYTBRpSLp5c7BPCGTeGqQVMbvyRMEYJy9m",
  "key4": "dFaVZbEUGerkGqCoMAWth9ZVV6DexpqHxLqT9bupZhtK5pTnLpacpFscoLEjD5YYek61a5DXCp7CBcDWoRzhXK1",
  "key5": "7pzEqWGjAYJjq3nehtnvMxctdYMhjyVZWViZWD8oowT83TmmxSaTfnqmQLn22Tv9R1hRoWxFwSAtwUz4MqVXuok",
  "key6": "3HMAoFaEryJ8vbbSyaTZxpkPX2D75yErvFpWaY2DV7vmFek5HWhtXjVnFt4UA5pGuYp831SzqMnnFs8ifZRwmE7p",
  "key7": "4bepUJCp41SQLBngwN6NSKbSSd7vPeMWmoeV7TvjeELyzMkS1d9eQSadHXqa2J596zU6d8QKFncNxnqWZEJ1brFE",
  "key8": "HwoKLnBtDVpgvxMxWJ4cHZY4BrhwAa285QTgbCWKT9pV4ZMrZmpUJov6PSuYcL9T4uv7sW5PWDiTUtyaT74QcAY",
  "key9": "62iPJJoJAh3cxzNXzoL7ZQVoqUzNm7dZxYHQoYDFo1vEWfUNB4vTFWmtCqk8oddzcJ7nDiigitCyQexK76gHMefU",
  "key10": "3nxFPpJUXSxDdTZWUyfwLEZgrQiPJwdQekzRCgtnjH8M7ESBev1zqHcAG71BUviBZsAzYfSxC4FTwsVH9MnuL2c7",
  "key11": "rXwKJbYw4HMbV7jw6zENPaw8i3Y9JC5w2MiTpsRXKAt6zwQdWo57Q4CJfqKs4MwPrfMYhBB5zWRfiv14xVYc6Rw",
  "key12": "36jGHoemnrJSkCK3v6MXadJ6nLsoH7ArZVWgdfbcMkfpoXdtciZD7a35mTa6QthAwGoqTjZ6iUFc7phfbtUM6QWV",
  "key13": "3jHmZShqenYfLUDVFuCBFWDYwzE6Sg3EMUgN26Hxq5MfKaFUDvRhwDrfCk6ADvFBDY7eQyUWocMrCgd1Fhg8LRhy",
  "key14": "3rWwfuPMV4Ve1Rgi9G11gCNmZvmdUw4kpT1gH4uzxtwCRLbR92TN6ye88pLNJsWfD68SdhYrWtKzgeucGtUg4ocS",
  "key15": "coAZ6muooZ4egdwRbutPt265fMzwbWLPReJdyBzkPNj285bCPk8SPvRNDCNd2ESEiSHPBiL6zLZikDasYUBcwBA",
  "key16": "5vmr5CkNtGvGu77DY6vn3iGzZ5fFxS23buTxjAJqXWKYchmk91WLWccPSTeT4QNM3MCZhpfb3TxhEP3PrmpgTUjU",
  "key17": "5Y6K7W4TAJm75xVi2yNHfVszESgra38DzKARHrhAfrC2f8MtGELP5tDMJEA8P9oQsKYFcd7ULShrbRaieWQQ9EQH",
  "key18": "p9xFkxUz8NyyU2uVQrjFKEoraXBewmajoixXP4tmUcvwKeR3czwEaGsy3Atbt9m2f1bswHp9mZbcnRfG6erheCe",
  "key19": "444ZNKEduAKrBo9tphDsmZU5hvZK1hfjvXHrW6kPVxTi48rw4TvBV8dSkurzT6jDFnik1xisHmvPVE77iU5eoFgR",
  "key20": "2iWvFj47GXC2SRi5RTF7u11Vt7ighQGhMP42dS9t1Gw5L9DWXLGUo7Dp6btEcf1V4hsXqY3kP4n1SDgcQEsU2irW",
  "key21": "4cZbwTZ6iqQTH3zYYht36YMTh682vXyMaVTP6ovM1BSv8JdjZwUTb8sWRuTwpYFVSDh83Thy63WeFsbM71naDxET",
  "key22": "4J4Eib2hSLcxiA21oWZEc89isY3jHUzpigrBVjnF46zqLFVPhHV9LVGUWysj7Lnz3sBGMaDBFTFKfKXNHY7y6mAQ",
  "key23": "4nHj4jKVpHinyK24jVB39v1WUcCeSvgySAqbtAU5adouydVAz1zTqNvLzExpSaWDzvC7VxDXHHjcX9sT2TEitQa2",
  "key24": "2MPbwAy2dtnxBMUxW9tXoBz1W2kzhu3awrQUPnwkXtK8aHjzzuMs1sdE2E7zH9A4UypKLQA6PiGKLJiyHTGzGQTx",
  "key25": "MoqY8Hyeb53dHLr93E9CCJXU9N4FmfXp7BByz8gsfhLyQvKuKTY3GM55nFKCMNbxAkMWmdpyCwVWRGaXJjG3fBQ",
  "key26": "5r9MYKrume8ZPbHpoLRCvfBKXPoSjdoMBYkuSzJx8SkXrxhdGVKe8w9kvPKRKDi5K3fRzXc4JPNg6jF7VUsMs9cV",
  "key27": "3mn3BTbNCcowrZSMaMkBn38VGrRpcr6UP8pMndq6QMifkKh2ySFHcsSNJYDbXSusMXpogRC2sNWQpSbFxCTYZm1T",
  "key28": "2NEkUHHFpkWNnudA2cZhaFyLKCZQnJcRFaA4hAjSCJdXkiDbubBU3qbbdY9ogLMS4XwYo595LpVBn7SnNdoCxPSz",
  "key29": "5bz31XeHohfjuby9a2VJmAXHY9h2qF41VMbMpdLvisk44uXahv62b5c6Lj6nwYoZdQ7RpCRrmZwEKk3gwjCfBMsY",
  "key30": "GMp8jH64iLHzNacLx3HiryjFaTGP9ef8qcEVXMWzak6Lj1fjjTpCbbuQQL8bJX7qSPackzEdEcn1J2in3HVhRZj",
  "key31": "4sz2sjcLnqB4DhRT5bKA5Tb7sBL5sdDNguxupjVffyCDbcJpHCYP1XUXvsRYx5j2DpmVctYtF82rDWWSh4tX7KSD",
  "key32": "54xRWvFs7SCiSwx4hiqqGwsDACkDcrQyzius5jnRMVrZ7wiJGRdUbr4fUTF56jZcVx1ktPBkjaYQDdCDNm6azxZc",
  "key33": "3dnK6QHuTMDPVRBMJS4XnAw6qd2xXFQ45v5QDfHsxQY4jCmHAVV44qrKAMcb5dQEFBZbVP2AbyRUPNRT13vZzr9W",
  "key34": "3fJinpgjbguGdruWRYXUM2jqAoKpcadu6hWRa15e4c7Phxf2JSrPHQt4FzGQrrWYhXtP5aJLZvbhFFeYwLgz839X",
  "key35": "5qPCR3xtswBPZGEJWXSiQohxZ7e5sbQEep8oHCnQBZxeejXkFBAgi9hPTD4kKSLtV6GV8dA6ZBw7HnSAkASF4WJw",
  "key36": "32heBo8j462BqfWP7MQKknYULAumA7tRSrBkMPvtutwPoqxYw2bRSn1kvkVvfAFsVJs2WLuDpQdjNAvgye53FoTP",
  "key37": "4MYUcAAjWFFyWKLJe8aDQRx5by2gGhfZK33LHffECVWQgja2PQ6hnGVfr4fCZQYMwbRfE1rKHLfAtP7iBKp9LsNc",
  "key38": "R3LPogcEFjiBWpzgtTfKadcoixZQd4hgN8h9JoHoSkXKfeP8bn9wKUv6XbCijrUhCTaA4xyrZyM2GodLSs9w2YS",
  "key39": "4P6jw38yPEJngUKXv7TSGcSvdoa1rX7CXEGGPjWnsHPZpENkL285Q9KV2bEs2FABBsiQcPynk1zSZXUkmZ5zTFEJ"
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
