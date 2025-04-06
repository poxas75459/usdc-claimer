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
    "2YW1gBWhVXN1d3EdJaDiQsx2MH5H4CbNCgRD9xQqVUCPmETunHoLa2n4jhW38udDQJUpEhjdRoXdNsBETi3v5Gyi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hJofpHDDqKnX3STz8L5ZCRG1MsXxgas3wWTRf7ghD2ZrbMjfQ5BQcTKtSWFqWmuprvfeMkq35rpksuHJUkJxEXu",
  "key1": "4Q3fue9paXh4hgsixbUhdVvtCjDoBJUn5J4zWpidmdSxPiTnUZmbzbm1uuA6YKE5QQmNKxvHpiqe8gzs7mFuDrqq",
  "key2": "wa8NiRNe6dXUi8PFsm17GH9t4g3ZXBVtbNspN5qUYcbvurTTGAQTrux4zY6yyM8JsRrwcRNUUENytMy94a1JrS2",
  "key3": "4PhEHM9EgRSsMAejeXTJUeXQLULXS5Cvqf1JvcHxf8booLmdbi2yg7138QTf6CvZ1HvJms9RPP4fkaepUTwG6Shw",
  "key4": "wUPNNq8defnPi1aNiqC1JWpTEAPcCHcTfw35j1cpZMLsZ8q5wkET15Sue6NjKQWHgG5ZrgYe4Vxtr5wJUtAzMnM",
  "key5": "N5pxNJc245abbuXdwavpBV9MeCwJ4HYeBQJ4o1X2xbdfKLkjMMoLF6QWnLtEKp8rMrDFaBtULRc68wxKDWXExmw",
  "key6": "2PmFWC4umNtbwXs295uT3HUFXufSmyKbgENYG9SWTNBChZNXMs53jrCMDaALd1K7PKu2q8Hd7jkepphJR62K63VP",
  "key7": "3m3yuB9bAg3TKMVXzJtHMgeFvthWfk211id5KDjf3rNfqsRAgyiqDwjmdbUWKjFhZnn6kGo2SaopjavNqjrSrmFn",
  "key8": "tdZmSYDqNvKro3KpcYmHZVwLqm7bfjxthNv4iDeRQGh5fGgYn2mzADwpCMeWfmG3QH3mnDLBmgQQzmZpnam8UEU",
  "key9": "5Z5uGhMMrj5GGxfcxjnAYYTvfmyoVM2gfCCexsDkmvEhFd6NFEECvgT2rpnQLBjLageMeCYpV2x4VPfaj4Nzyz5L",
  "key10": "5Yga1irT3mvs4aZ7pLDaQuzibC3cQXTEuHyJTAvfPZv3brofzgWQCzTkeSVrXtVeJbFPzYRAPzppoBrybqYr4V57",
  "key11": "3eCZCkrsPgua7vE813J9dnQKFYyvfswmW9ntPDbPUfWegPrvi5kw47c9UZS7pN8xBtzSKugCuxwyVUAsznFUAYEd",
  "key12": "5TjLJdzxMqXehRahBGswUm217CM4LDXKBPRtSXmxMzWu5dvkAd3JjokxPVXVBuwXTDuVTdLGePDcVystRqbidkhw",
  "key13": "e9AQnxuDGqnLtzoVyUxHkaou5MedR5qhFGPLWstSKW8CfVBEgNB1HXL7msfyTewDQB5poAYaAa8YLdLuvpSyuD7",
  "key14": "Wi7hgphBspCWPeiUub6CVb7pyLtTCEvgcH2jirwQ3RgCD4ppgkLYBsXkMTHfGssiYiRAPv7knQSg6p9hzVQHCk8",
  "key15": "4dpKeyQsd6Ri7QP1r87bNBvF37ABGGobA65o5gEyhspQBMXAVeyuoPibo9yVrNsVEGHBjfjYCDPmRHrPA4FmcKjd",
  "key16": "4nNAVhdMYLbWh5UdPDc1qZPLPTWPMoAh1KqmesqYaEuCfDFhik3ZrNKSVtqkazMwyhk2t1RGYhPCCkUJ12LDw6WZ",
  "key17": "2SqAR7Ex8FwX2tTUq3NeL8LEGUdTdqiTpJZaBrroxEBiVXLDyJQjEkVV1giz2Y3CpkkagUBLzAaC5ZLoj1DbQ9TX",
  "key18": "2U4YaXgh5Tc9ZxTYCS23fJL5b1r2aNt4Qqvrg8xytTjX8zVcHDq6dxwcP51JoRdqTZncjRRfQPyQBmE2MafMQkjz",
  "key19": "57zYFDfuWMw4A4KS2EEGuEK5u6LMLEzPJuCKfLDLpthkPS92SQvMew9Wx37QFiUJHcJyheuojDuyBK7q9cRXrJJJ",
  "key20": "3cYaxgPupP6EGrKQLhVo2s5RhEHSrk9cDegMo4L8pT8zeDaqwHawEzzCmxGKvFdnpVKkCh3pdXtnJoTqGYPeWRt8",
  "key21": "52R86Qua7ZaQdj8fWJN1dYZheEbVDkQpMpYPNVkSfWL2yJMvyLJC7Hzipqmg7qFiNwrhqYc67ci3YSVzpdnHJvEm",
  "key22": "V7TRe1A3jLwwnKchvAZNm6XkP5fYPHMHw5UiGGJYTdBZVWd438dgVkgxnkoZXadyXMx6RGsiT5GELJhq4gwRdQc",
  "key23": "VSTypKZFjc2iV7BWUvWjyZXarFuKEyNXEBcyuk57tFkLkdm7ysk2esP9qXbB7veUW7c95umY844Ca69emN7bPWU",
  "key24": "5CD5hf3iAJFqRsgUe2PKwQbXn5vTLvA9ABueqayzgAiQstpfKfr5LRzCQ2v8wqT5urSY2FGHqX7i7BvVbZP52M3V",
  "key25": "2B8nzJXVaWqCqES5r2hCR9yfgBXVVxeELcbcPn9y7RGoXdhCtQNTTNCDfTgrsTcprLWf2KDXNhtFvapigyDJEmwf",
  "key26": "3Ar4NFvVPSmzSHMvGLbbYmXMw5vFXRDMQzRZop4as3mfQwHPiaadVjBtq4vor6SzmLynpk4aqDNo8Zv6bnNe6khe",
  "key27": "2iAqsxytwxF3NKBdKkRrv4TikNEod69xz3qzVkngwhGX6HbqG1e5GiiQgDkTB2NP4PqMNr1xoAtwSVG4c45dK5f4",
  "key28": "29bRyZ8ZWkjHaPXisZTcwaGxJxfFVJECfP7wYLrw6ypH78PU1reRWumL2TA3hhpDavn6oT1wWU3DbQVe1KBxKyUo",
  "key29": "3sr2iiWWDffr7GWNcWfNEVqDaDM9eMaLdGUdi4tAyncHjz5dwRNweo5zaAVYntVdbb4Gw9LmS84g3ENUcoLcjRdy",
  "key30": "4Sz2eYdyCjP1Cx1eVP9uCsQf5twuQL9foDY8VdT2UiWLk8rVwKUt5ge7Mejv8HDPqx71hboqj5Tb86Q7g7bj3X6N",
  "key31": "3Pi7cfUF7uM9RkEtN2aeFhuP85fJTqmJRQR6fXmKCNd3X5vicekff9WavBy6Kzex1KdEVccfKWief4sUys3fzxSU",
  "key32": "3BJKs5fELBNKyogyWt61R7D4T6rhXHrKBTfumj2cUE23qDduwrEJYS1wTeHdYbWqR95Q9ezNqh9pmTtQVNLmA8Be",
  "key33": "MwgC6DSQQVJSiBm36S8obw5BFh2KeASjR6JRSoAgVZubn8q6hPe8fJC7FsoQfhVMqsNQiAfVaG5C8xXWLBJ2cCm",
  "key34": "5z2B9RYtWT7wcBpuVuWZS7fMkBUuDg8Fikh7L3X2on4z5ScniuYdyNoevADgMVmBuXHhbX1QT7xEz91xER1r9chk"
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
