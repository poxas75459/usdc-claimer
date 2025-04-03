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
    "67hEv4vmCtfWrnRgAD2i3MDAhZYHsZQxrYioeDVa366onV8fgNeup6RDFPnLLnbJjgpektXDNSPpDFaxRrH3ZChk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VQDhVDEhoPSaY6UCuBcEKwgyH7RUZKtfv4SLRWqfmtP9gZ3azAeHTp7ESuncxERRFcVbe1T1AzjecgxQhTb6gGh",
  "key1": "3eJztL8PgfBECC3AyLK2B51cHZ9C9zwYTeq4TRRw8t7Ckbk7pztLsCHY7yWvtAF93A9XWHe4cf3Fcf668Fbch4Ue",
  "key2": "2CZwbjEvFimSWwwtEWmTuHzi6uQqSXfTKyahaSbRdRGHGuj4thJrV9knSNt5HGSSr77MkbQLcPYo1p4aMm8Kg2Ea",
  "key3": "4rxCfVEhxtA6rFrxumPDnz4hbtUViW6pLozTQxTTsfALVP5sYobikuyQHRAFXQrpL6ENgCMpLowQSoa3p6qPxEy9",
  "key4": "2z9M9KLAd2CD34sNupXLSAdUFWwqcKnjuRDz4u8HrChEP5rtXum2y94Zc8PsESjLMtK1o7ZoJLRSPBqwoKNyQecd",
  "key5": "4jksgi6zBFn6RufAjSouqP1WXXCQYe2SLyzJPeKpwbAMec7Uv2HivXJYds7UTC9UCQqxFN1mRJe3oYUBo1zEa3r6",
  "key6": "3P5DExPwSfN52jSBKAhScTqebwPin3wwwSvjmdagKPsihKBYV5Q8tEvdxAgykTbPnAYkVasXKw1QAA222dnvu6MZ",
  "key7": "2UrBuK3NGNQe6rFGm8nADsSQ3KczXLD3pj8Y3F6yP4QZrHbBjLERcJk9oW9FeAaXqQMjVg2DzTyXQWAtq7hmFPNn",
  "key8": "129vWJy4B8AcqkTngGio7dmPHUvFp1fwnBNSGJJajawnSRA5mFVrm8NdxDEZZqtQhLiQfwic5CUwLfuRpqZaEUss",
  "key9": "2PbYt6oRmfzNXDLfUHi7xEzmot7x5Sf9YoHiNS51uKTamE1QSc3XC2fwTn7x5LV4bxMrsNCuu7bMEewpLNarCDiZ",
  "key10": "4o23U7N4tWmcknrbY9xqgzTGnXjn9r7td7fkbtxbuwDn45KVQiZKLWEcqZgJzEqGSoLRjiJjqT6KvzfTkPxHBnpS",
  "key11": "5uZeiZNMffcXDUDJB2kkhpp5fB6PHUstHgbQ6gNmNHATQ8GKXK19oxt3VNUHYeBEtzcxeigLZqZDwS2YaLyZjPzh",
  "key12": "4j8nsNBqQ1RnmKwXE7X1soBzJ4UvyQpSFdBVG2LzBngFnmryekCjazSXoWat2EvvaqHChYyg3jbGGwcyD3Sim9hL",
  "key13": "41eD7c56SAKmrhVFxTZh55sH2GQvmybMQPdEGPnUqVckVLGPD9ouuYjq66KcNzCRXRCVuVog3cquxyYNKuJ6zG9G",
  "key14": "2YTSqYs61uXXYdtpMaUbCaui2MCoomtCNBv9DaT4oFTKVqEF3QW37zwxrA3vjRk1UQis9E4w2ZJGr2Kq7dUApqWJ",
  "key15": "51K7rUoYi1rTksPM8mB3RFQFZctXCdMb9d34nLSmdfq9qai9KbSdPTtrHWndDAaCgVHt7XkLNTRZfLHZvpnz2b9n",
  "key16": "65z6NwPmUiMqXHqW3xdsZAhXoDfeZ4SVemW7tXwCyAT1ZEcdsyfwgb84VzS6MQKzMY6GnWAfP8pzzA9J3EYQc9HM",
  "key17": "4ihLfgdAYH5qvmJsrnqQwzdwV4ioG4chrF7sWatoH8EgwuoUnY8FWiKJUpZZUMP5bUarUbewDgWhcp5cdEky9fBo",
  "key18": "563is6Dat5rV4fp3EiQpooTNK3BKoPxUAvnjpYaoXeRF2cVNAcVVtMtTppA5vPKerTAprKkg5pfF2GGqqanPYRGt",
  "key19": "d6LvDeeBCruk9v2N3zHerhXQgnKj559AhbcHF2LUY35FjdaG3SbiZnMY7Qnw2Cm8vatnQerpPXSgWPyBpM9uqtj",
  "key20": "2HWdfYtCNB56y6nM8Z29s2HGW5rWCMYpofqb4zrm1rZLdfLL8g3QEFwXdK8n5fA1PV7VEDmMuPGHjfkbtJtWZyUN",
  "key21": "BP13Q1WfnH3vYSenfYPSVnGcjkuojxWLEH6ctFr1D9NZ75BvU9V5xpUqLntQB7YuYCgnbbeCH39ujASa3Nn9e4F",
  "key22": "2faSgWKCSJgimoR9BUFiuMwBQu5B6yhYjjm8eJAzRvRV1K24omYUcLhZMpZnJL6fmRbbioMmSatcTmzDbT1pB5y",
  "key23": "4FRwPp4NgnS4msdZAws6fZax49aqVCJSDioLVPpBa6LoPp4E4P4xX57t7cByJUr1F8yoX1SWXYj9m3KuuFPjfMhq",
  "key24": "5aE7HiksEEYZU2gSY2fvuEgZiYGEP6w9QxLHQet3WvmUoCesq78P2wxM5ektj4dRT2U2x7repm2UQWd1basDF23Z",
  "key25": "4pzfJz67ziikk4iQM51uoPKuTnpRRQUrVL71ozVNf68UJHwLQnd9vPV8nB66PavhCrxQ2kk29PjQU18WTm7ZB1Hq",
  "key26": "33u8WJBPuiCURgKDkcQqtHLu991DP6PQJXmcXK5kJRrNzR7Xjx3ENYwLwsaF5jEP4czgVdD8C9i4U9iwuAAk6Wn1",
  "key27": "xQQiVAEKJyz4w92BSSAkauFfuwoLmaH5riezvxaNztgBz6QXhRBjcofhtAUcAhmBYJiq95xnJ3vABBgJmUB7RPX",
  "key28": "3PVVQNU7guj68g5intV28Rm3TrPmqLGpubUxqwwh25i8AeaREzcYdSHGGZwNCwYBwkZeAPjnh9McFtfKeweTd3R5",
  "key29": "3BHisL664BjfsNWqeGFrbkD1xbPERDSxZHq5YzdcAJ3UC1qz1rWCA3es5AyLSdGucPHsQbV6FQgGdjtnUrj7RRcz",
  "key30": "49xMtjPjKtq7pgKyT8HrhkptjmxNJ7gTeayfMWAS7DQrPXJBC8Eu5Scc5EV5kRqDSL9RiQcJYkyK3P8KFF965Ahg",
  "key31": "bDs4vej62szZViDWytsLC5fXiCqppzozPBvHckdYSpVbrDdQjxXwRqhd3KSyKc7t1oEk7cL38Zh4cpP7gRs5wUf",
  "key32": "3UmMBUH9jsaFD4WrZ9YFeDStzzQi1rBsjNcDZ7c5s8o3deeXBg5QTehy4xmCvL92jM9mE5o1pZVHfEFFZtNHtFin",
  "key33": "2vr8t3qFVGgPWjtKvyBxBDhV62sk1JQeW4svpvRQoA1Q6Mu6yhkXmaLTtNEkfwBJrayBCQSVV7KCMY1jD8R2cxfm",
  "key34": "4WSWXwSvEyMqFduaE7dcKAEs2ZYZ9hsgYoKiHJtZQfnavz5MK8cAyBF6eKws8zvHwebmiK5BRYzjm9frVZfwYZ6E",
  "key35": "45KVLRmEpE5DjnygaQTBVpPFTurViVnmmB5dcN9SUkyoMqxcnXJexF8a8tMHaYHrDaYFU2uaLSuWMfKiL9MjYXmU",
  "key36": "2SRkX9juTcMcBxvBgB7hax33HABv9WToFtVzFqqdagdBzmttM85z5aSkq3ctMx2HdxUwqisff7eoDwVVm7KnokVs",
  "key37": "7Xb4kg1fK61S481MThZss5LYYhz7x5V6AWBkq2tuh7yDojTWgmZ7QdR3ipxdiSYv9jxgkzeDdsJRXvYLBG5Rj5S",
  "key38": "C74nftfSLmM2Ez7NRES4ovMpT51Uo38rR7HVX4i2aeA3TFnuE9MQ5Wt8F1m3vaGNCG2m4quqW8Npzn2UhUkd3Bg",
  "key39": "5oegkr2vYhCE4PGXHRLQcmwbL2NpaER3VNro1Sg7DiHVe6i8a2inUNYMGdF4Q3zZCX2Rvo8Doj5r9d9oUtHPabUN"
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
