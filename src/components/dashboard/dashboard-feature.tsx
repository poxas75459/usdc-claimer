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
    "5qStLzta2mCcpDP7NSpdDrX4nXymzYUkq5AD3P7frCd2U1K7ZrXvaSWjLUqzBLzHpuiLS4LR5uNC29YVuVBW7gtZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GQcJ6gLAJHyb354WExRdtHvmDSzHdKv2WHf33apLjfG9gRSxxtcSAJ24CQrk8jEMw3Lvy8izh57to1tSoWpiGhv",
  "key1": "dsLY1PAZNHcV2bLJX4KL2tD9yKe3DEvS4yQ6aetArBU4U25XTWBTU127DcvbUUt6VNdcgobPFCgMdHFpHSHqa3Q",
  "key2": "x9QmLLauXUQVQgUTyRfHqSYn1bpp4WFxWNrTsMKEsxfTvZVbEeZbX6xJFwZ5y2T4ogBmH5C6dDuCPXBCc8jTt8G",
  "key3": "37nXngkATznefMwZfqPiRSBxMwrYXFDzZEs3UWJ2B4uYJYHMbDoYwtDo4nWt2KEiTizJsXeHLudzv3577co8srnK",
  "key4": "4k3a2kLqfV9fZuJarttgyx2qraLrQ1E2HAJWXGv1fbxP5Wc7YEFPDDcmCmzJxh8QjRCD6qYLm3kyieuf3r1VVYas",
  "key5": "27yHKU1DA29LcP4eJZpzzsxtahB1k1sZfxtpfEX2iUapstE8cajqBWkQeSKJFS3ejV3YRwTqZo6cAhkVwfAAudNW",
  "key6": "4MZYfNDCB7bp2utyt221CESfqSY5jF7sogPu3f7Kbc8Q7Bj3gsB7rjyoFCE1TXFNknCvKa4V4yy9z4p5TpgC5PB9",
  "key7": "5VqfDT6WBkcpov18hDiuheQJ6bFdKYwNa21TpfpAAS5hLPFiYrBSFYzP9y7tCBM1N5JK7ofLD9c7Jd6DybySGGW5",
  "key8": "479giJMzKeRmEiP7DVDNwnvuiX1kWthWWo9jGDSiFYxHv8MZFzqW5itPSKhFCUfs9wf6bofgEi4PBRhmnGgLBEy2",
  "key9": "3W77p9c14H7DLkLRF8ayHryN5iFhrCk2FzUCnuy1rFEnqzykaUoN9EhVpeQZhoRSRGJhRUiMnp1uhG5zScL5yb6V",
  "key10": "DR9BNTXok1g4zJPpAx2Fjcbzi1nNMaj87JAfcxeQ2n6V57cgvjuV56jgmd1wSY8BRMW3a5e9eeypSrMZ8gTcXpH",
  "key11": "h9ycvET5EbVk4TB8JhVbbDfJBrreEy5NLjeRuK67f6QScoHNFupwSS2SskzK4w9EnzKpu3TQKDG4yrQJCzg984Z",
  "key12": "5EoXx7fGNHZwP94fvKoG8MT6QWrtR4zi1YTm99N3jrnNi6qFQBKy8V33Gd2dT8gGcCswzskC73y37MGZSUfZ4sLz",
  "key13": "2UhwVrsLgdc6JtoqXFyNRdw2bX3H5QpAd79xvFvGi7TgWT7aU7gNRF98KfsDoQDChQd1ddanLgDp39KZbL8rnV3x",
  "key14": "4T7gBJSLEV8rkt8kKx3mdLuKPktsiTg1aWCYd69fv4nmu6TBVoiUCjM1hjN9YYvXwjfDFaArRVPwiWBevKaaTm8Q",
  "key15": "3yV62jDbSvu1GqFJhuPzYYPdNoR57PkAxJf1RC2NckdNrr4U2RFDSouCxgpgocUb1vQn7e4Fc3wThsFe6PBjsk2h",
  "key16": "5ka1QZQYFbxbK7in6EQ5EijQA6f2unNn9LqwSXFAWWPUsTHgYfMPA2TZbJeW9Pq1ppfm44cHkWo9xPwLFY6tPDvT",
  "key17": "24Q5mh16nnuvtdT8TjqA23GU1g79AoGbBsehuQoBRVbgF4tKhtLxRMswKL8jeWhiyCQT413M7XFZ2YujePLVncXD",
  "key18": "5viB2wd4Cgc6MRzT5ZFSm8nctdRGkzeJJ7ZNSbtKJ2rZmzNod3pD2LkSyxRGNA4qtuy34iLHTkXdiyxT2jHZvuJx",
  "key19": "678tHpeZwik6cyJDtFti1dHDfGWjjhZ8uEXbD6FoWzD6YDtGi3LbMMA9cMf4W51CmfcoS4zTmrERiWkCDJ9WqU56",
  "key20": "3vZvviG1FgNimGRpDLKBv5nDatrnPWBV21FESCtEZn9qtEr7cNMqjeAz6FQh6TbYcj1mtQUxY5BT95y73gD69qi3",
  "key21": "4erU4Bf4iwc6UGACz9RjoUWkjBMA1YgkNNzYmnBPdzrnNQRB6SL9RbrstpnpiGXtW6DXao2pKHtjNuqebHZK6r2Z",
  "key22": "2GPskCYqc4dzcbAoMkxQXQMeJoZ8ZAPNz1Px86tPYdXjkVPq5kmmt4r3yfsNt8uVA5n57DUp753HuJAb1Kc3uxUc",
  "key23": "4AXhjp4FtWzPV3Jo3wJ6KRmAvqNfm5Q9FbPn8rrkmnn8NoAmQkutF73iAWF319uccdgogRiC6BJH8HTEWNUTajsX",
  "key24": "64Rbg9possdx36CfUJw5c2oYfhH8Qcsfvwoeh9bfgm5bYZLCJV4JEoXLrnnwtpGMsnn6u5z4qaCQBq1NnEsJabdE",
  "key25": "5qqTGm5Lb8JWrumRpSKA2vcB8h3zscqxUUv6AkjqR3hYKRYbyhgmJDWruvpGeHmymAVU4hX57UdRyHuYTGrBD7Ex",
  "key26": "QeGGRB2BNPL7jYDXqoJqfSeiS3wX4Euqp3FkDKJGzNDhvQL5mr15mUZWRw8uRwKDzPAFGZs3EZdNqPSRd55VFtV",
  "key27": "5FXMQExM7CRwJc86yz6GnP2KqJjnwsdc2RcmT9mFDLGXGLNAh7GaiPYxhbWPA71iX3AzBPq9o7b6KT4HrtzuBo6F",
  "key28": "2vyKBhpDkd11LjKkWKHhCe7z3AcRLaQyYYzvpLUQFcknL2sQL9LurcysPJ3754CRNFze2WoTXD5CjtCzvPsMmz17",
  "key29": "24rumsg5uXyedLBZ7oHzCo7VaPdLuPHiDGGf3BYrWJnVaMktdjF4TLEMEi14Ac3DXSw1XYVqrw7zj3qKiPvFsrJ3",
  "key30": "2QbM1sKJWjpim7aPeD6pWwRGwxJT9MLz16CxeR5k7pyrvvU7w56upmRATc7sBVZb8faZMTNHJuG1mGRQeYC6W1df",
  "key31": "4632vtmHNDFP72aqidSVffNTAGASPaftUKmnaXkEyuSAAzVJbT1S7rc2ZMqTfkN6MMHMx5vbL2kKqWrGvvnWFpmr",
  "key32": "5tvU6izFhZbAkBt4ubPUYxNuvcZavFczehvgdM49w6mtBH9CrQjBM831PK9rDHnBhGJoR6JoPgi7LMyeafeh5BUT",
  "key33": "8sf61PCsuQ4cRGHP9Hu5MYTPWLuKK851c7KBs8JnRqT6hYuWF5ms55BqMz9KvcZ6cH9XdMFXiYtXij6UjSvcYDa",
  "key34": "2suJMJrP6tUMHTzoEfrhsQ3QVtBKRdF9jg2ke2ss7GNnEgT24z8mTEbGChHkUWczTQrJ51aJBgVeCs6EXkkyLfrm",
  "key35": "4zCHYN4tobicBRcrGFRMTFjBTCjcVxXMH8xtHn53YWcJFA4waUwum8g53ZcabEHHneu6x3g6J9upYw8u99fhsgAb",
  "key36": "huRfcYUCy6f1tB1iwtpXKKzF1gT5mdiNkaiVTWaN5qHpPVxVWisg6DP3xvXtLPRASTvB6DZUn6jpxAKFgKHBFnB",
  "key37": "2UgrdXCUZCFKqPomWfSfzC4MTAQ6qXLnW9yBVFLhSiZY3MvJ1YwgqTmxzKKQdHbAHfvoFYQBjqJwVAJdqCSKMt2u"
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
