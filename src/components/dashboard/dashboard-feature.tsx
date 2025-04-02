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
    "5odU3yZWu3GUtA12rauqpVFZ65ZVny1FPZgeSNxqUzd48rb2Px686jNvdacbyF4N9TcHnmWhNsrUTCEjDob6ct1E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39RHecYmbqwYqdtsFvAxTacgmYUW1GAJCCR4kTs2kWzBveaFgsoLDdxDjCQjgznPP5HfG3JFXv2FkeBTA28yqCum",
  "key1": "4a7zJXeT9DULjbQB31HPtV9bYXpsK3CDgGwqsdCRGsYvazSJ6VCMarfeGX3MjkYJMx5MrztLXtmJTwQnt3Fmt6Vk",
  "key2": "EuKCLe4mdJXR5xgZZpHSZRJJi3RDaUz8c5pMed95WCVAK1wvrkNkurvKNGqnmjH4Sik76U7nNkBZGcsM9Qsp8R2",
  "key3": "5LB1fLQMqR73Mn9TfT6u5UmPhhsXfPSHcJxyx5Jm9aiqEGS86jt4xLFQ6p5Mktw7Ny5FeurMp58zLj1yguM2iEiw",
  "key4": "49F51B99V7ooZVgYPvAENZNTaK1jib3QwVcgsaXP2NXkewqrVTLQiQaroMEj4WjdLP5RY9LZShyVzmoNpVvgZF86",
  "key5": "h3uCRsFFwpdbG3ux38mokjzQ7XH3KCZunQHoDjnEyYXnCiEnv46EqW7HxqD2YPQc7cqTUYiFzynFKjaYt52fXFA",
  "key6": "3NYFVxCwyDW8ffbAgabv4ZxpxHmwHVEoF5o4SVWQf3WPNQ83aqhsUPrLC5DPVBkqVqKRdhmE8MBYcWq4Ja4CUQ3N",
  "key7": "2zN9ZVijG5kzJhmxgusPEH6kjiwzDQuA6KzfaNj1xoBUEb1ezJFUEDry6vHhami9NwV2jhLDvMaRmjSgDuYnmkVr",
  "key8": "35fFwQxw7D1i6zz9p3yhMibzLuHssPBnGv1w3H3Hd7p91tyMfNNrpwibjZqsJSTfCG3sN1h3waLkKoAk9HgFSidN",
  "key9": "2qpyQ9mXXYJieQr5TxrVMS7xTPCZzpkqsMxRxDyHYHVYXZnrRtDXxqN8sx2pWgzfmdn62dBWEg1hhdVbuZzGfUUi",
  "key10": "2SYZ5c8V2J4zcXKsr8M4NwWbTpkDKRWXj7wFJ7FwPjfrH12dMFwi4WNmUhxZwXEYqSgAKct89qpeysdnZHmPkc14",
  "key11": "F2K4DM989ZKTj8uxbFn5EHPffSicXbYctAwc3VB4pGnxtGqiEuRAH2rdSUULpG2FytUzW9QUPsyQB3ot2aP7oxp",
  "key12": "u5rXQtNSuphoqRgegLL2mUkyg9Wy53b3c4omnhscZVTJBuZ5r6UUcK7i9LMhhfFLXiRdHkLx77wcH1PHRn24VFt",
  "key13": "53SiPrYMWg1mpPPybJBq7Tjk34u7ZjFXWAxDT8v7j49n434YbhhihPLwNKNh3muwhZbgdqMnKMzvQwbeah14Avno",
  "key14": "3B4NUVhvK92xrdHWpGZDa4aDNzTFo6z6iDjVU12EzdJnmTWHZDwQJaP3BXJWc9vg7bq4CBXQLvWgfjw4Z9gzHeMm",
  "key15": "2w24jteKegYheoy6ETCEbGAtktNhZ54ga8Pxws19c87omwVe8FXZMb9PnyyR6tiettP59pBVHXcwb3ZBXrDTAhrY",
  "key16": "ELfFunBwxS1mzRa6u8WSiBzp9ANszW3A5bVNgcdAuV3bCp1vwtrtjvMv43EQAYzCzVJLrfLgLPYEBZCDcBRxLAa",
  "key17": "4cS3naFXh4JazCDeon7A77tgy1yaBbPzr6BTeMXDTu68mBz65k7ie91NdYZc1QzBShYPd3Xu5cyxuanNE1ShyCGp",
  "key18": "3RA4pq5cRgHEudLvmfR1rRNS5G3U7THpLzohoSMG6tBb42WGmEDqsaQbc57GsJQcVdqYzkMBoFx8bM9HYRrtPB6j",
  "key19": "WJZRmoUevU93uHsyK8SBetpz9Vy9u4X2iuo6XxLKnJkhD1PRdKJgEE2f9xtmPUrg7UGBW9Z9Rc2EQSk1Dw7CPLs",
  "key20": "4B56vAqbN5D8jL9LgdbSNkYQ6J3tSJ81weHt9j8rAwMm5rs5pNNUXinuKa9q9vdYCTwRU9duQCC9cHyhf7WwcGH6",
  "key21": "5Qw9rkd1RANrADnvNKV9A9KbMH6oG9XeYcAJmfsTrXy8K33WJzsNSpVctCuJwQiCZ1xtnXUbtgPVfqdsxXpTohLT",
  "key22": "4e8M4Mh3KsRikJaaRgQQx88WpEdLPTsTSe7LTshAc3kXvxeYWJvFc1fHyAzjFdwMZDqABbMgfKvbvemmJgZHjRap",
  "key23": "2YWnmkvADQoZyHQxFuFb6mabmwTxz85vLvTi7n3VmqaHuokzxv7ryFM7dnssg7EVrk46hhNJu6JL19dfcY8wBZq5",
  "key24": "2kuMuQX63RLTyeAjaFZdfSmj6xcanL9JoHiNQJT4zq92sZVqgoc3tJPWwBvbxxxauEV7R5iTuebpbcoGaA1EctUy",
  "key25": "4ATcJ9gPD9X2WmHkhYJt5JZHK6mSssHGgoug82aCUKAJEE6YezA2kj8XtesKeiTGiVXxVPUj3txw8T7BtoQuyZa",
  "key26": "2hak4P6sESxbDQgR85rf9t6vqvVwzt6NC9Abzg6eREPnVKSqLTxsLN9JChPsaSZ8jtDRR8jRzy3Un2FyzP5y6Ln5",
  "key27": "mtD3DQNbizhCPBPnmBxx929kJcnmGiKQubnr4wExmZ4kt5YVHDVbBKep7yMXXwomzhiCaPdxcTzRjnUyxt1VmwH",
  "key28": "3HtJwd6uXeiij1YxBTTodHVVzrSEKhBqeTsPUo7BdneRASNriWhJj8FnwTkC2tfu7eTR4oBvonUao14jnDRSP9ym",
  "key29": "3kVgGiomQJLnNyQNXFKMG6JetjHQwtSAfExWzzkVju6kMXZ3bqp4mREGm8gCtPnVjSwMToa8mJqsZ9z72sdfTZsH",
  "key30": "27Xn2VFY7N9eSuK33Hdefepk2Bhk3FpaD1FKHRTCMkrTo8iM6XNSwJ5si5jTYVAqk2iaXVifCjgZ5yUcHnHWaF6q",
  "key31": "4mKkkJ8YxqDWpDQ4vSF875AdhpQSfP945vpMkdHkjm1oCerVWXGT7NwPMuRxVuXBpo5XeqEwr6UJ5kehH6vFPPyV",
  "key32": "5UrQdEBaCqBv8tPcWe3UY4mfRdRwJBani9sDHUME7JaqHfuVf9xFpRrznQCfenpsuPGiqoZ3nKYYuup7ndkCtXg",
  "key33": "4oufeertEhw1BakX8AgLJg2jWEa8fdcpZ8WAqd7PcvTFNVh59TRgVdiKpRaSYRMEVKJLFERPNP41FpUTDxsku9or",
  "key34": "27rSQoebRRX8emMJuJ993814bLEL9GthYPYntk4hYkqBDYbLub2Dh1ePtBxEtkcQ221EBGVe953q2HZM9bbahBUv",
  "key35": "2fNv9cESs1RLLWzz6ckWJjToq23F9iSkSBXeaT5sZza8EkvH5rek9iVtTzVBHgswoXo4vXqzf1J1PQJVoakiCt7E",
  "key36": "5kYgykhWXtX11JbLPXmw9nkivyqoDu8J1qLUJRyMkzT8kM4ZFuiNfmpxuTghQamhQfcyYxzeCCWgKiEsbZ2ZPxaC",
  "key37": "VPX12EGasTysPGJm4ZmZhRFEWa3NnFAdWaonWLiLVyjxpMMZk7Gu3rG3D4zPr7dzqDfzPeBtpgjRFUF8R9omCzn",
  "key38": "5ZASKU6w1VRGVBfhECNhJXVXiQ9CR1QNKpsbTK9BPWsafZ5igMs8hP68zf7XGmGeCwkeAWBYdGWZxEja6eGpT9u7",
  "key39": "3t2TuqEv4dHR9e6Y6XUUyECi9DptXviSsJBhmHZ7HSrNRS2jtKUxTXC2Du4koJkmJpJnv5tK4xsN2qSFCeCWputT",
  "key40": "287WtgiTfvUj22uEnufCJTdZgNiczRhH3az4HHYSGkpfB1UdQZQtvdf2yhwCpdpk2fsMkELbFn6S8XQurUKbKXVB",
  "key41": "4WKnZbhHeQ4FKkqvfmofDRqjmkMgQgC8LGJ2VTDzBmHoy9UFvk4qwBH2Np18SJLcf9RB24XHmEkZxWwsTu78vBx1",
  "key42": "4kdQNxQVTg678Kbs8RGnaty7aQ9GN5X8qAgpazjGFR4mAmNNnfbz1vdm9mCndYxwGsgD5HuNDPTaw4n6axaQ2co6",
  "key43": "5rgLrmhV5rM4ddduFnHzd34bFgmQfJP14y6wREe4WaSCcrKTzhTuWwaEZn3CNquTMdSWjKcZ56Q2yqnJPCexPpgY",
  "key44": "2AoBTMp3QgPpTPJFegy8SVHKXZ7vc2sf5P2XqYLod3aGVsJoRk3YZ5nfSUFgA7r7kDCCevGPd3cn7N2WLsFnKjr6",
  "key45": "24FiboEfomaMY4dCYALroPhtg1CyCRGQEJdPnRPbbg93ks2tP5gkkyuKnadefMKZRAFg4ax4pUrgPdBo8BwPZ8oi",
  "key46": "5giAtyhaJVoLMfTxXMy9CbncHwQqLAiT849nsBLNusvkavG9V23gaPvTZEX48R993Aht17VvQji92fU8WFSaq9WE",
  "key47": "63cM7Jmj4NBr6ZqfozdTv7Qh1ZbGsBrDKXcb1voQ8szpPjgkrn9YG6sE4gnZ1Yw33nfLZhos6MY7FgvCgwrbTHBw",
  "key48": "PYju8eDQcgNSPFZBT7y1s92S3eFvgVRg3gk367qPKme7sdo2R3wXr2SKiWZfwcEpMxf9EiEJPoZS6sd6Jqmo24q"
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
