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
    "Kye9DGncPFno6rbN5R9bnny1KNSKLtAqwRZCmfrvnUG97AmsswNrUSkx1X6njGytNczvZ8Y8hgxCwRZimSQNitJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aegNLzHfU8KHcgozikbYv6ezLtCo67xpxQrSTiZ7JZN99XafSAoZpfZGBDb2skZpunWDPKiR2Wb2t6hdZSJMxHK",
  "key1": "cLtafa9QX2sY6UmymWfDXqKAUFs182tF1e9tzW5os8pyu9evPYKG9Qoe8Qtej3Kawo1EqpWegFiqY52hx79zDNc",
  "key2": "5CqnKV5PTPVwJfw2bpXLz1TJNisKVtuVLf2bSWkX4ZYMXsyzLL1jJgoRtCvHyWfFA3JNcsXfDrGZo5HTWQgtjZGx",
  "key3": "3MMmyxWF2ZHjWEe8zsYF5hCsPcfKEJRZCBmdX1Qv9zwFjcnaAMBjUiHdQkuZ1P1ubwxeRRiJVnQZt9DYYY4FTaQJ",
  "key4": "4h3jCtPZ9EV75ojMmmyYCN4s3cdUx8agvQQkQUVe3DaXsFYqQafnWohxjyj4BtPNUAwWvGLc3xSMzH265vJ5afvv",
  "key5": "5CDTCZVfYd3JJMHxCc4xVFaPLT24VorKfnyS9ew3dXBteFcPqnup3uonFTosrgo8QKcRD4P2zoYiW8seKFAi3rQF",
  "key6": "3MXe4rTucsrLDPywiW3p4xPM34si5ZL7vpzoK2bSVKaQuGvK4SL1wupuinBPw9NposLPLndd7dG2LDWz2WVKdxFp",
  "key7": "3SkVBwm9FErAZfz1tHuAmU1e1NTFRhaC6eaya5dmD9tCusaYRbNAEqPnpbayhHDjKPMjGv5HZVTgKPnftF1ebexU",
  "key8": "4Pt1545TWZjaM7n6bjGJ5GfVBTq1Q5STB2QNLxWZX2YYFDcNuNo9YR8ScBpW3iJV1zY3PnLTeBMWdLzA2aucncS6",
  "key9": "KwkrcdxoeKJ2HPHCMn7y8ACHc6cbASTcKkE3AQ5VoPKGoaLUFQj6kyS4a1mPR8W7mGUyV73RQSRmh5RpQP6qDkn",
  "key10": "7NUbB9cBUVLLNmPXt5WdRWk9rLUiHewReTzgLWeHa4WBbBgHf7GnmbuJdippC3UY3ppe8eVAB9u6db7DcfhWoMF",
  "key11": "49Gvy81ePxyCsqEc2z7kJEPU5LP8mY9jsT7uFtFEsJjLTeD6sPrkXgNiwKDDBaY6ycju31K9qsJYpB36331BMwXU",
  "key12": "4m6WxuSzHK2g7Lznkck3eiN37EvCXTaw1uy6HSBqAKcNt6tPqD2jDWxirmNPuMee9q1UaiRbj4BK3L7AbrMLe5TY",
  "key13": "2LJBnyZnKX5sbtgSyEXZA6VuHDGTCNDw97AeKkK5wQcP8BibWhJhbFYbrXg6iKP1DQmJ5tVXTjxASzoLqc4dZ2n8",
  "key14": "62uSU9kk76eKNeN1iXqmGYkzL91t6ssVVrJx2BEkUsAmpcNKATtgtc3r3wkafs9CsrsbRQZFzLKz3Cw3x5Bi9SQz",
  "key15": "5hn9MPTBKLEYjS9BSvYssQQsccS11xMaGK7bvmjB68367chRY1o34QUJeHA2sRq1ExX7oX8ve7ZTkAQaAiJMGDnt",
  "key16": "4nxJV6Vb5VHwssyW9hZFXw5X9BhbHhbxDG3VsZc9vyaUL5PAVBa37pmzamFWGbHx7VvTYALnXnm1ygrFnPNLAw6J",
  "key17": "3WMrA5g5LXmK2J8Y4M6iUBbRxy2AWPyXAdLdFjdapZxBx8XcqNpbdyJVYk7QqmxkCXMBSx4ctHmzBsHZtHJfWCth",
  "key18": "2rRW6toT8zvReVJiCTjKPth5xU2Dxqz2sJHoc33WPRQq84fLduPMW9iRDEDM4KHsZVZKxir8VKv1wHbwfrzcYGyp",
  "key19": "Mhw1hAkZRyDZ1ewXqPdtebBoP3HJTE6NNcnU2HX7J71b9UGdpDBZnH2QqmEMDko8h9DY14vq6QFyCZGJVSYjw5Z",
  "key20": "2rSFGHEQB6hdpVTTL2UbPFxHqEpHDkU4Qh6fbuiDwHnXtahjCfAnh57s4KoFxc5NP9Kkx7jpkbwiQCJgDWgv7rHf",
  "key21": "45AG3s4QzVXFMWfn4ZAx3eEgsyFueFf6WA1yTAXh4UTRYrpVrfScaGWXPLVEvwp3ScYGN45B2hYUWNa5Fezw8kpr",
  "key22": "2LaLkq3SDQhL6qFt5TPnXrQhYM16ttc2a7aZRVBS2iDFP1N6grU98irzVenNjbnVdceNiT2X5qjb9MN4caCqSWVm",
  "key23": "nJAziHyuu7mnZAA46nBqouLJwBQV2xirL9zLeuUVu7q5zAP7H89yyqx18UuFkWZsB3VzvZAY8oC28wwKPjoNktM",
  "key24": "4Yo6Jpu7TwiArhyxXRAtyNAjf8R37dEN5c6sVSNgdw1HS2DLaQatZrTdd9anb2yh91EiZ4Wm386XaT8eMdcnfE8d",
  "key25": "5b5DSTJAkhNQ1J8zKK8Kfso6cgk9R2haRvKpyr8tQZABauhA9MzuHM4JagfdAvdhpmaW6voEky6E9nYuc2vXi5Zz",
  "key26": "2c96WaNzDjMZCuNnXjtpiQbzERLSnCErTYRr9rAPfVafNAirjsr47LiLnyXGuxCCGDx6xBcnAdg9vYyvHK1V6pnG",
  "key27": "5qWRx5WyFQq8qe84m6Q7mUch9RRSDECANQ6AE63XYEUFQTpPRyjLS5ewhjgYWxHk1pnpuVvnj9LXJtHjLcgXqges",
  "key28": "5qDaEp9Et185jEbq2hpc2yxrasiEPccfaEJfosWFYM8pjX2Ky5vmnjeQQu6sDNL8nmYmR4gAWemzi54TtpaXWSzK",
  "key29": "4pAskxEk1xFtpYZXUDvRpLFSCtHcifBSFNxzgBQpKjgMcaf8aJGb4jPkNE8DnHS2jr1AwmNgi3o1UgntJJmcf1dK",
  "key30": "AYpj1S6BkEgcVZkjp8TSPtZuYMpGL4q8FxqAxofukvdMtNfwKQMA56N3vmPL3HGSdibiADbt37aigN7j8kbjwvq",
  "key31": "Z4AF3n53nQb1553jmJ6pfHdZ3WkxDJEuRCSvH7dC4AiTdLSPgGvcHbotBXV6bBZeHVoa67uJ4hVU7jcopnQq3oa",
  "key32": "57JjvGhGgKuQ98chFdggGdbPGusChK29UYW2QGZDtZQGUBE2qZuRy5bd8jvGqjT5AGvaeLZpqn26BcQ2SuzzHmAY",
  "key33": "2Jq1JvnLfKhrJKGz8dpmQ214RFMfVUpfS3YUcZ6RgPVfor4cWTwysDJRT71cHhc43WbGt5tvY3gJ6CUhGFhDw4Fd",
  "key34": "7nMytaeoyjrfJgReAuzjUGwT6j6HAoT4W75LjtKUGb4GFdrADnboEN6YFmTFBfd4pXGy9RZgibapCjoF53LJPaa",
  "key35": "23C9qVqH8SD6Rg7sBDwpxGbEqZMxXqwKjCPVfzyPLJJCas9G5hvB9DRKdHQ593MjKvtbso4jcnZebtAteEKiiVYm",
  "key36": "4izMJJheAEEHP43PDGYw5ojdgECktNRPDfusVcTmG4tK7HR597UvSDWK7HBsrTL7da5ZbnhfeayMdCmdDJLEDusm",
  "key37": "q6XvfgwvqHBEeBpQw4KTdNPvBGhpy3w1GK4B5ZkYdp7cBkw4rWhfcmYSZ2eYhHoucvcqU7cne8aEAWdMT92nTJe",
  "key38": "5ye63mpuymbjqBSTngQWqKdBEAuv9skdKuxSwjKjS2VsvzGDg9ci8ZqHkCgeciBfcvciULsCEAQWJKCxhUqYzzoG"
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
