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
    "3BfCtAw3xoxm5FEDvHo71ojtBDGKuazbz2H3XSTSKnjkYGUweDkLbmFR98fXSDaiKNyi59XoHULrvWCoYgyueWEo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "627tesJ8N955zzojas2zEBjDy1Jcr9mVi3YwLvAqtV23XQjukTFF4pitomcTmEiE8UxWPBzuseKkhfs7oLudwuRp",
  "key1": "5mmdmuXiLVSKKdKLiLLshRhVP6dxcW27xL29LQKvVPvJsr13jxQuRriiZ8UAS4cjTq19dxD9NQTSdfhGNTVrFqgi",
  "key2": "5G25pzRufZWtmuL9ExfHGr1fNLXBr7r54GXq37DQpjiWbxenRcWsjLd8qEqL4HzV97yGnDKdXczsFyQjhnQm57dS",
  "key3": "5YHc6gkp3KWEzZh8EZ338jTEdSTGrwKyEBrgZq5ZJsQL5Dx7wsAquQnpnduXahxRVESTnKjNVHi4VLaosYzgwwuz",
  "key4": "5XHz8NzDSjmbWM9uUcxHcwBga2RpYyAV1MishhHdEBFLAFMLqDzRdFkziSqpPM1CYMKHRKsHQAq83GQ69owefAUT",
  "key5": "4ay5j3vD6uPiJsSqHssEadMKEnwaWBCuXsyP3kYBGfv8D32iA2EVSfM7t189fPJ1FK4MThP3F5b12fkLDrEbdCWB",
  "key6": "3NVqpSssx8daGDDnYhcEWWxDXbjzdakLnR1hVzReREVxp7scQwHx2ejq1bXfqUkeioy76g4GhteaqLFoqRKUSMxf",
  "key7": "21ZTukAcJ24ZJtfXVGz4dJYm4uA7t5ibcuS1vcRvQVHo9jN2wKfspPxV76SXWHsHwReEkxHH2g2YfLxMJqR96dpj",
  "key8": "3cxfdYzJv1VZqV2DB7GfzmMdwe98DTNLSWFS3DQEAjQa5U3Yxym5KfwqKHFuDT3o4FbNJtwyu22KnPdJ6sSLDkJ8",
  "key9": "4ncMLgFXS1bFL34Ah73qZ5SGjNxDpQFwFbyitNX87j6fMzgM7oxpc3NDhNTqjLsU8zrTqWuoSnUFygRT3dv9chcr",
  "key10": "MnKWhCgQhuicQ6bK6eTNPo2zetSUAdzPhQfyHXWdL54F4VehqamgMQnQsMtgBGvWg4qqL5TPj2wKpBR48Jsw7fC",
  "key11": "3y5CPAvBFUSGaysuo7KR4ULJ9uyY72r7ZSQAc3dQUUDVmPcBrALZacdPWrsW1VHW1R1GLjbNusNhME6DejgHsxd3",
  "key12": "24DfAS1kr8x48UA7TpRaUChRwy8xojn9CXJPmRMgw8X3TjThWsxrdp8gFHDcfyeNBQFa3WHBrVMxfRu9VVwAtWoQ",
  "key13": "5jw2xqQv55zMPVrZ95SYgBtcHWjw7xFmJpWQMY9JoETSCUwYmuohKPSN6m3YxcRHkse3MDDvrdDNdB86dKqRr7c9",
  "key14": "5e7iRus9YCUM9JjNrqcjCQ7WRKnH8caKxeuqB4o2YFBDqFeB94uh2jyoBZ1y69TZD2YF11RSu2pUMZKJ1LPCNfvC",
  "key15": "4TosTazVhd9k54BkkdcdyTQKrPeGdCLEEgEifffZN4Q1iYtgCnyY13DnGv1wB5ToUzTuPAaiPMKi4eVo1qKceoik",
  "key16": "4Pk7NgztWwpPqiSk2ZJRKaH7WCnh3MgR4XuGKJ5FjVvjeqnAmxqUPAQ7QQraLEfsZpQRRW2fVfke6C3JvF2mgBz6",
  "key17": "5xLpmApo9JcWB4NinvTL1XiNY1EYZYXDMXBqq9MikrLXnGfjFT3btqBXi7sdSviJjVZcYGH7oCyLfm65bKuv3mM9",
  "key18": "2graKF4njNQ41F7k2ee8B6wgsyj4GwPK9oZQvWF13Q2GLFkarzZSuzg8ap92TxLGDSmBAeygo5bBY4XTAwXC48Qv",
  "key19": "4b8R8Rx23xajLgWU5fVBpyytdJbcg9nsokRCWcUMaofbXjSXPtEgvqfcTKUqezswaeEaAPWdrjaDKrZvN4HAd53G",
  "key20": "4PGAUaNT9jgURGSYTxbQ1V8C5qQXKZDB1CnC88RigiAhS9yaCrUMqKnsfk6cFh4qHqgMs7Y2VVWkm4WdqUsVKdE4",
  "key21": "2DBzbDvdPYan7rjU65Cn9vvTDxogAnhQdoXTCu4AQuc6qKk7T6TeNYBrjE57Z259TfQLNaiHwF59D1jzV7DsRfqT",
  "key22": "3HLC7WqP5EZFg7AcSLv37iCgoKw8gkzFe3P1sC8miWZ1vYe5ETdB8ZHhJGjSjPaXTwxKACSPTAdqrPPSek6WTZFS",
  "key23": "5C2RMWdHzcZeLLF3jEdRQZoNcs5Wbh5UZkH1N7E5yY15VQp8DJWVz8y2mCoAdXRJQmVTDSx8X8wtuQD4yGopDV9p",
  "key24": "x1jGXwk2n9H3HZDz6PH4bh3puAKHoFbwYVEUWFoonTmXZxU4jxs2XQcWLsZv7VnETBQjaiXFG7f1Gwa3czu7P9t",
  "key25": "66vRY7wm96QSh6SVuhRXnDCbqRVkc85qyDHSGZwRZ9EvHdASPggo36ayqswgPxh8bfZW92q9aNULvq3kzaSUTWKy",
  "key26": "u6uJs2Wd42PNwSPiEgx24chFa2n2YrvNDqPAyXFz72m3TnW8FbNgF5ZxswsYud9Cy2N5fMGUGerBa54SLqha5Rq",
  "key27": "behs86EfsvUXnkLNFbrtt4nKsqWV1v28GwfZ293ktuFMjq3oKqPeif63cLRESfg9QNAeWCxtGSBztd2a1aHmDKq",
  "key28": "2n3yKZdDwHNCkNMaGbvshwBcCLhA1QyZkNquwAooG1q3CTd2cX5fuihJydLGo8p3tAh7eS3DFrjDTFRdCWsWGukM",
  "key29": "35VhJhrPUhVoYswzsPk7qgBjojiBKddvqPCWoAdcSLXKJGzMscXAqU4r5RjvgvuQrqN1gcZdf6yTuD1sKwEK1tMU",
  "key30": "5ZqH7capKpDQVpFyA6xEDp33vN1yhvbooMhMEJp4bsWCGcBZ8Y5zcdn6i48aYGgmBvBQKbX2HfXRXUeWeyfU9MuY",
  "key31": "5nQVYtNJoqY3nZCiMmCRpJ59SKBFyxrzMjg3H1pTpp26tzAiruJhW7khU4s36s6bzqp2ApV5yBJXuAVnNKmm85xb",
  "key32": "2GJnbxjWSdVqeziEsoZN7oEuMZLamCcZ3fPEfj84DByUUd6ag6ELpHD93avw1uGTfDweoMKtPMF8s2zUwNEFq6Aq",
  "key33": "3Hc8WU9v5GHsBo5eCwgBAXfUhw9h2rfGDgtea9G8E1zFdYg56NeSFjoeuNX7iy8JJuPCyk8RvJFNmdVCp4pJc976",
  "key34": "3uhGLxNpLv5e5UzfdXACJ4E2WY7xd6DktRQcrY7VgLDUrGA6KgzN9VLCzkxLNMrw6WCbjfgN3GPkgXJ6nJ8j21q6",
  "key35": "3Y2BRQ3a94bZ7jRLjkWeZ8KEsvXgqywPVGtJKTQcgnYCFqGK3cCCacH2NrZvDGmynnFMkiqrgUc2drM4HPU6Qwz9",
  "key36": "JAy5E9xMBeDDeHLUawptfy89CQhk9zfaCnzM5695H3biuHCMsGPuScuoUDS8uUoNinVwLEfD46aKYFPHfhUvd8Q",
  "key37": "4vQEynQtZ2RRWcEYF1ECCGAdh8aXGkMA571VNFnyjgdh6cDNjzqMtmpBTWkrUm9wKDVUD5txHNu68fc8Gpju93AQ",
  "key38": "2MnoUsPaUSPr36NdQAqkBwpaLFpxPNRgo3gmtvMYGBTWdzuupqYrESbqx94Y24gEkesHi95fqcXAhZWdZs7UbQpZ",
  "key39": "4BQ9aYPwocgjbXVD9TMfJ94z4qSG7bRtuvaBhQVzPPQbrcNwUWebJtMsvXKHq7D9CX5QFsywAN1u6S4cxLLphTdC"
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
