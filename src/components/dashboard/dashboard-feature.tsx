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
    "2tanhBTcUbbzQVqFYRYcpCKG5KtoNc8AtCzfNwADzDT4FPjttGVBsRqwuhYcgKxHQGJPhDEp79UQkHnz2anNtWUD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N4K7uy8mnQrh1SP2YUY3np5939dUEX3zWUwG6JmQNhGJL1CtkRmPHWAJfBCQsLfxBLkD2C8AaxVnv4W1Qcan6mt",
  "key1": "DEjhzuw9kqHAcQvvg9A9LadqJGopvd4j3egMZChCJmVtn7R9ohM9F96WqNKA2E7avqbJNp2cAkdQXRE8iqzcb19",
  "key2": "3ER3mFWWg9V2W1beSEdxKMCF6kLKE1i12qhFX2D1bhq9zwkFGYr4pNpxFheTt6oADBmkm8BLiwgmBJcU5dPMe63j",
  "key3": "5DFwWaZqpDdbGGK7RavARGLQrtuuHHWrYnd89Nf1cfjozQo6VM3UE6vCaLMKW1cZjmX5NoMoErV95uWf4ULbcuhS",
  "key4": "3WhozZ8hrkcXbKCMUxgnnQ5jsvuH4YhSHNs9FgyNxCsgBzrHmrTCW4z78J7dgiWQiMdN4fNfdt9M58NFSYS5qDyc",
  "key5": "4ANTux25Mx5RAfrGCeWZWbQf9uFTksW31uhdbFkZUKiY1MmMjzuMJ5yKD5iCvdDCByvc943avqkVNw5L8YxFHHy7",
  "key6": "gx1BYHrzrbTPAEjvhyG3wuYpx6umPRVghHXadZTLH7pUEQ52XaJRKyBWaKh4pWUc8gNTCwcQ9xszRTrnYahj8J3",
  "key7": "HY9YxcR2zzw8LeKQ6gxAf9fJiCvT23swzdgTL92ruKSJHfKrAQUAcjMKJ2UAFTgX5NMjCQz5fnNkAFEx1XVvBTC",
  "key8": "2wcDVTSC7yKE1c94qYW7aeHEeBNvK4A9NhQAct1UbosyiJEiEKnTzZbmo9o8it3DKUn3vCyie7m772k21nuQPJmo",
  "key9": "WzCRvqEFVKnU7s9ez8txWkpnmNWVCzSE6QKTfuevmCLFHTgRxsstqNyGn6mL4VKdtzCCsXJvi6EtEEMFZjMsHQ8",
  "key10": "4atSXQL3qBrExRjrPepuRkx44mzAiGMuZan1bXgDAL7Cwg4RHVL7idjepGMBvTQh9zfGKNUsfcj3jff3fdCu1GJY",
  "key11": "24XaxMRh5SpEDYh1yMwzzJSY6bZ4cghKaXe26kPYwqQPrRyEjatmkst4rUPDFGhzRZa44w9ye8BHMpFHu4AwHByd",
  "key12": "2iPRp3xajMPdy9HrYTCLrnVbHNn11vuznX6QKV96NRjd2QF7Tbe1Lpuoj2WT9ceH35XaZydLxzVtaqHynHUqNMBo",
  "key13": "3V8sdmUwDyx9Pq4Bi7iYpAWQ6f4j6U6qszYQuFMqTmHgM41FL6NutusjEiZ2bnRZqo36V3Bc2BaamwDjnrFRTyWb",
  "key14": "3U8roVP1y7T5wnPtAPr3wnZM8Dx7v8nkwD78ANctG2zn8MFC9UcYp4jr8o3jf7WDsCFdwd2tETPgi6o76LhoSeTG",
  "key15": "3KTebVyJVoj3F5WqX3cZiR9YUbYtrv3Ey9M8RH3119HU8hpJEVCoeJN5jL2TGUXM4Yair5V71eWeHYnQzb6mXSmn",
  "key16": "3Bxvzj534mqS1Pqm3o8xXbw4YDU3sKVJhaHhVyGrGipLmmgJWsz4Z2gAunsC5khsbdr8Ccn9Ag7rc17PK3BprA8u",
  "key17": "2YzQ4w5cXgL1Nh8NEqZWALkiqNu4yxNW15x3K9oZM9LLDGF52PgytCvzF98MRPDTNUEVZkHuWNfs5fCK8AZjkYGU",
  "key18": "5Yvwt9nn5tWcFHi2ZumvhX47WnvLhuqikc9Ff7YfbNLDn3rsxZB13EnWF4nxdfWzMSxr8wF3VMoXyWxNq9nTDEWH",
  "key19": "3jsACLjsBHzmRNXhJrLSva9u8Po7CUGGkWgfTuxegc14oKYr3oJJMNTKKEuSLbukURNEyzMUdQp1EAzPh7rHpPU",
  "key20": "2sCmHJPqZRbbn2wPchH7fwDMnXXTrGHiEEzRzrd9na9Wathsnxma8GYqSQ1abbEeVZ6y9fCddyPTb8qBZBXoxvj1",
  "key21": "3x2JBt6SACdi8SpjRY9wwzNg9CBvACUnn7RMm82VLbZaAsVTBJsuuQFk9orztU8RzJHbRs5ADJPhRSL88rQkL4aY",
  "key22": "kiYoL1YLhNtEC3MBqmiBsvuasqYR3qYh3KtknsuXiMT4jfAziVx42yrPfbGXLPRg3kpM3SCo1yYBDZEeefejM5A",
  "key23": "5rVUC3GSCBf463RDwpjFqNqLBGJYtjcsHubgbWykSRSoGRUGakVMtSd5QFXdKaA3jnKySvS6pH6YVs2HhqnZprH",
  "key24": "s5qwfPehFtk7BbjAaHSqEhY3b2WdDevp1SDgEh8zTt69Ba5nmXPtngVbRfEcCCYwToiTz41b5RoQgg9drsG545m",
  "key25": "256oxC4G98LWXeXiJZKEysw4rtoMeS4ypKzjMRbPWqoqruFtKdSNfadbwY5XKK4TLQVaFn2bYTmwEi3QSFo74NrP",
  "key26": "5h67FWYGXQwFZbyTvbHnfikaVio4Czf42rvJeSJ72XvHZUnRxJmFFqs4qE1pMhj4i4hRh6f7arJAHiquci8todan",
  "key27": "2SgbjCzWSqVNYMWgLJpU37hqkgKVyJwVJqh3yxBdgj7Sc67cBR8tnCeYFu5jZ2cjGWX25KbtJQLBQonTM3p5c7Rr",
  "key28": "4pSVT7zdx3F7MDHBQ4SJcqLh2NTRPrtvziQ8D43CXwa7DeoobM3KAWkbbBDu9o7XYF36sFKqy1hu5zL6aDu3cdEh",
  "key29": "3C64hLktSu2xFh2iguaJw5RWR6SSfqMQoKyFPLbFS1fwXHMsYCWgadN77rsHBEDJSQWBb4kkzF4RFEhA82KdsJuS",
  "key30": "3xuXzQYniBoNfUXRQNLm4epwFWrEtTTB7wFqoV2J8SZcZWpJ9NAXXG5g3HbSzccx9S8cuDvJG8bcAvqdoSyaHVks",
  "key31": "2ZCT7vxgaw9nMkKgSBLymMSK93cz9qGLXm3LqEzEPqXEpGA6ejQr7YNUDrvdNZxwGWELLUDinqct8FLfD8MmZwaD",
  "key32": "3MVoR6wA4DWh7bzMyBoUd1XxQbcheqKLcKKQbc4g6UhmK5vRCYuvCixzofa7n59pqMU1rpakRQm3qS4x5UjBNvix",
  "key33": "4Nks7WHN5YkSQdqzdb53YYXg9saPgspZibyodye83zoaiLtvH6b6S4jum9WPN9WWpm7F88g5v44Wpgad6hiy8uUN",
  "key34": "5Hg1f9yPvCdduUbafFtHTADeGxQNjmPR1taaFSd8W3BqfVWKdZxTxP183zX6LU3fsu4PZaykuLT7m8GUXgNzLi71",
  "key35": "2wDTLqVW8pJjDvLN6t36wuyP4PQLeFzHtANUhmdeNwTytVHnwNJ3aFSAagLfBQmeskhYNXQAoo2YXcegYZ2SvKFh",
  "key36": "67QpiV2RbBtAMKirKCPny4WcEtNqqJkBU3QY4TuNwRv1ichJ7Zh8NXEAdB1aoRcRDZHntFBoeEvkyrbkWXivLGJu",
  "key37": "4XyJtLhCLcY6dkpDf5ewBDPPY3UyevY1mk2fSb2bx8WEihBZpgaNDDPkc1mfnm2rpiqVVpw6LRWg4Tdmjj2m7AK1",
  "key38": "rPd9nQMTtfyEMC44BkLqTW3Cme7bLHtw31axoQ8x27YGPhwRcxoL5ws7wE1pm2S6iCVHdKHvu5Yvj5JFxK5PJUh",
  "key39": "3uC7TCAB5Y7hpih1n3iws3Gy3Bof7urtiF671tQXfVGTeLj4i78QEVk3LEZJ9YSVESMbfdYRMx5oFCFodRmzonFU",
  "key40": "5RQ8PUdoUSXjFqAQ2rauisFWzejohnDTiS8L61bCXE2LVinZu4XC9bHtdzWds6esXcxYMWuNsYUMsY86eSUT5PSi",
  "key41": "2pUJfGCVewLRSzTe1BRfJn1EmE5vw2aa9K12dSnTyKEWBRJwHx2hJtG4vNRLK2jZhRCLx7Wk6F11KD6QiTPobaFV",
  "key42": "2ajaEufRQCpPqD9E74x2W9of5bpWKzzahRt7LRsrwwLM4tjy7ihpZ5J5TiAK6ACH63KPVb7GJ9NfsH5qYkSksqCi",
  "key43": "3vFGAwhpUVSCdRZ29FeEjCDKXB8d4Fnakb9vbhApq6zNifdivd9NUmEqqytiPrA2ocuM7RJrPQ78hBxQxHS2FbQR"
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
