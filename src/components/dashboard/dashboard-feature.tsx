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
    "BiNwV2a9fGUUHdH4ziUXp17XC358ZZhEDbrxgZPPjFVML6A23hHPfyZjm4Vpicutb3aKMnFEjbp23pNf32Hhhhi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "267SnahZ4a9QoLxw739qGpCRBf4nvz4mRPeLX5NjUojmWHi2FpxcjnrgZDph4LmTtagsMg7qRrhfw85gHtAiddQm",
  "key1": "vSL7L27FHmet3PCSVdhQAE5WmpeTiVRMrUZ2c8DdELuGvCotgNzGTyp4qNaQksAkYhS5kE42oN9jVFGDGFKLVNy",
  "key2": "3zV41T7MDDErJCakUCBJfhGxzLpoP2bd3hzDotVF1K6LzSu9tSm7AQgW53oTYb47jJpAhtXfoZGySstdmzSentfR",
  "key3": "5xe18kmDvwsXoEGjzuvC6HZz4RTNcN3CRUiuySVR2r7n8HcK7VsgZZgeX7RGFbejXEVVCZsZexddqJykc89Uc5nc",
  "key4": "41UJ3G7egU923iQAZiE99Vpbr5dDUnYwo8vNaQgdDLGEo5qk6RbJDNtMQV2TQ5WFugek38pyrAiU5S84yPZNge7d",
  "key5": "MKG5fb3Bj6M1crL3n2JvxpkgxgL3ozPydSfXkcVGfD4hzGPdrpadsj7j1KvwXbF62hftTdinjKa7ZYG1NfrBCza",
  "key6": "3YhrCPusGy6YooPmaqMVLaEfmWLSWu5UmukEL6Pma3GWWhnZdMVhLJvTuhGCADQPGh1tqS2ZmhwYemPhXKu4u48n",
  "key7": "58qRaRnVzUtu6RXaVGfysJKWDjnzvm8LVdHZ5YT8DS46NJ7yi5HxQUpJaFJYJReZCYAHrsvsGkXqkca4pHUMEhqz",
  "key8": "3PbNjc3oVVASX8YMucBGKxVFh6U5DH3UjBpnjyVDUVhVjzdcw7Zoq6fxzQuEEh5Gqz7DkK39XN2fJJS7AzkWdrXb",
  "key9": "uyT4vpm8ZVjRsai4adLWw72XreEjpbus4XXbjsBtNYNubNG8TskA5rQaEP6M9wTGURA4EXfmuiChpLcmCtFW7G2",
  "key10": "4bz41JkgnCVUK2RGVtTn4ypQZGFbnaqG7nBqy5KExHnVM1jooGi9D7Fu52sEeUNsgSoPrV1JCKEJdGfBqQp78XFd",
  "key11": "MGTQYP71LqtNN716UMS53eeMXtaFB3J9kFLKPJYfnG1cCyQAe1hkQGY1rVfmongwUG2EgZCTRpU3XFJisdabdm4",
  "key12": "2JzFXvetYuWxPRXJBhPpf7gSi1Adb7wktXphYb32VFFVtsne6BE1MMCUCozdLxyMVVJW9FZmYPr5G1E5e2uLtasV",
  "key13": "5ciBtfmhpn7KuRKwAg2Ww6MmnRFktZBMhYfMmF7BdCkioRKfcqP8Qh3msNYE9JmAgXLBUfJztauB4Lh6XfSnAf9r",
  "key14": "4rcfUaE2D6BWN943Er9QySiaLSEdtCKCqczfFf8MTB2Hz1ftHfVQsd6ZMZEAvnycS3CWoce1zF1KpS4SfSwekqTn",
  "key15": "4Afvku9wdLHgjf9MJAcaFjKLWx19Gr1K4Posi92pZqqPXu9p1KNbJvPPu43wx7M8F3diTpMqDwNWck7KNQPSWUMA",
  "key16": "4sNVnsNzUEz2Hs241rjKFtUEGfD2CoaZnbZZUnASo4oEMeAeNvHxin9odspDzACGE898uSDkVZmRmkSFrJCRF1MF",
  "key17": "39fy5EKGGY4yaaidrwQZuB1baWGn3zrUgjxKyiHg5mHsrhcBfyeVQG88eMjxhFPU4M1p9b9PRt7LBxesn6EJ2nzL",
  "key18": "2NGUYVvKoZT42twLxo3741k8j4aRQvSSt4R1xEksccGw56mGWsmtoaV9A8GRVJ48dV7GsKW9VXv9xZpDpZ6ecU6h",
  "key19": "2NhXg11zBsUGrTGv61BEjVqsj5FvSaENEWtY3bYnopybXYZqjkrDqX8ePjyB2tqvoaC4WGo9pqoDjFn41Kns2Wmm",
  "key20": "4mMtgmbveaZPeteV4emLk1QE9k5coywwYxe9EHtczgPQkrigAJvagFXL1zwvHqfJ8zgWMJ8CzFjLeD9zHE1TpavG",
  "key21": "3z43A2Zc6CPVk8zLjLKF2AqFPMoDUbLszALMduWHSmnGP4fJ6uUiTydck8xBfBVCniV61NyGWrYmRem9Ugy9KWWH",
  "key22": "RYXNRnzxaZqR8Qw6SKr2UBnEhdGywoALFD6Xd5j62cyNdE2w68fdngm8q3v2G8de7K5iUEY9HeDZwr9Br5yPajn",
  "key23": "3bSduwbZpVhJL8r1gJWHRBhHUTCUQxBwN3bmVe2uqYYWYU3Nn3ti9mJ5z3TNGcsKnpmdGvbXX5oRPGuu4BRuzJwZ",
  "key24": "4qsN5HHafHU8sBPsx4QXcX2rQAxdNN5bDYmUDLjARQikBcxR8UM6tiDXvxwVDqtPqm7bW2Vok8MZEpwGMfVkKC94",
  "key25": "r7HUjuiCsk23NVWcV9izHoA4jjpnJoTJugeZ1jWh5DPBpKtdCbgN4z56K6Q8GLHdPyXw6txGcdkR8E5GGDxV6ST",
  "key26": "37muqz3QwMMmYfaSdpKXzJMAYP32Ea7HZygxy2NXQz6DVftEipkvbguASjcfZEbP8jhe9KuCCXVzoFRq7pWZXM1w",
  "key27": "4qHpAR8CogYmCqZxSWaDSWQYcycpGsrjJXkYTgxSswhnaQvx8ADKqLYmASVV7YW8pCFfYs5Eu4R9aRxetgnjzNLX",
  "key28": "3Gx81aeHw8ycjcVGJNZuN2iiVun95Q4gTLvbvfCXvRmefTWwDYVWrN7T5jF98FsBT3waxLCevHDPyX2NYNL7vzHX",
  "key29": "2XbjyTwT7KyyDoDUpEe18NKTggaKjBBCzfX41vJLbredaeRQjitwbUxtN5sZtmYKrW8xHVvceSVkyVPfsPijjey4",
  "key30": "4GJUNQDTTr2QeDYgqkJ87HL51JmfKMikoHHAjRYw2iLKviDYopPLneDZpi5pdx1TntjD7ut5Yob69qAhfc12SZBC",
  "key31": "3qE1MQks8WEKbsBY2cH9iPVBNWgA9v8dRwLjNYfx4H6uNeF6BaSFcmq15tMfWsQV43c898C812rTfA3A2UGN1qhs",
  "key32": "2jyJYLmXiBJKTtZfTexci4YCGaRBSue69hykwm37NkJXECHrz1ezt6MZLZuvXJr4quePonEe7wRFexKZQUMNdDuc",
  "key33": "5rQLnYzLd1yHr7SKm8S66ZTVtpbBokcYPinGbL6UEjsHGu1e71NW3zDFaytTF7y92t4ZG8jPsCRXPNLYMiZBWrV5",
  "key34": "BuJ4JuCAon83MAes91dVenFfn2VDFvkmyrPZPeoKHKCiczUkxGrTkZbfcMvpdVjG7Xcj2FKqnnttkmUeFGCQt3P",
  "key35": "4RGdNiNSannogoqcs3meQkSjH7bzFyk7Qb6KqzQkGXGEf47F5G4b7QJLB6Nj6hpYauyB5i9GMQK2BrvfsRg1W1CH",
  "key36": "2AXgyYpRciZuJqzdmcjBfff3hEC8bkFTQUnEeRsV8t2CtKanqkYRiJvKCXH4M5Gwu7uawdaBGfQLUCAZDpgFJJro",
  "key37": "5U6TLNHWESotBLpNpQL2D6WuASD9M4XQ7Jcx7n3jH9YwMsQiZjbgTEp5pGhRAr8PeJqqbTtZh8AHNaXk1ZTiK7bA",
  "key38": "LpFwu7LeoZY9YWAW6x5y6XqYU72gX3FvuVzvvMTWd8m2exqMV375V3ccaJh9ZwXuhGMWHPLsaaFzRHiGJrcLkMR",
  "key39": "43Y5v7fMgCa1Xr39iB2ZzgWYQKM736QLoZ4HQcPwNLUMcxjuJbQW1sQeA1StUqq7uapf7oJn1gXZnq1eDPta1mGR",
  "key40": "eKFPU91KuD7PQLDQ25dHj8pHLRwuYAkU1WN4gDhwJ9Nbz8wd1szNKdqaAAeQMq2yJbjG1hWzdv4xD7qJhAPtvfV"
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
