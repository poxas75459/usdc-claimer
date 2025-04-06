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
    "5Z6C8bbzYiH36NGCtauG6GMzkh4ucbPUbqdAviPFCwDTzsLZ1izP5dc8WBipu1EEickz9DTEzLByyuD8a4yP7uVy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41st5kBFh2eQgGkMjwsHNNT89WitkPanWja3smdh72P8WapBUuKCbJzctfi1YYg3gDbPZ3nJ1woxMaZPsbu3rypw",
  "key1": "443zXygrdWehfnn1EPVkUUwTg2TfzXR1qW2kyuCVDJ3af2owcL33xkGrzev5S3zuRhdnWC34CFGeZnByKteubk6N",
  "key2": "2Xamm6pjipVhneH7TYGY5An1MVatk1snHQGz5awqPeDWvafjvbhFAsSCwGkFDF84uD7ipk3yj3y1AicP6jpbzKNp",
  "key3": "25uN6HGyV9xULHeogiqqsJ28FFXthV5F8nJwq2FkoYZQPuCWiKRYRZb3woiFNvDPUmUwYKS2AbmcdbpVqYic5VEU",
  "key4": "WoGsmHCYay7e4dYB95itaje8qNCgzhnhM9YWESYT7j3Y3AgMJqwp85WNRw4aAQYy7NHdHSEvXLR1vHA3vZRqj8b",
  "key5": "LWSJjKXw6TMPhxLWiH7KxPKTTBNCZS4Pmwe7TJFBJ4ZBZNDwAfSWQUvRXQQXVVHMSCzHWGo473hpWBkL24EN5WQ",
  "key6": "5MtQxxyBHQBS7Utf8QVnx51ZXSJ3h2EDVxHdBrXy98zE2rHmuxkLWtLrsnpL2KXZbxtzqUfGn1MLcSzwZvtm6iD7",
  "key7": "n4tadNeBRRstxTfriKQPj2s4xwYB6BvdKz9uiv6dJTXXUEstiCKCphjd19u98xTpwBHniDEo6A8yoJd81qjh8bV",
  "key8": "5WQsKLgT8QNKFhFN5eGkqy2PkjJmFLgqA3KsCeuRZJ4wA1E4CzVpgEXRQGzVms7iJsz1QwsDnM9rrB2mKpTsAwas",
  "key9": "3S8S4XQDA4wWCaJtXf8p5r5KekuKooT1bgbJiaqh8kGhtt8ijwbu8Zj3a9527f1fwzHWBvfueMbvcnyMjK52VYnH",
  "key10": "A3EztaPqA6qtxaV6wtdeR29mFdyLrn2WX86JWfUQ1n8BDXzX5ice9G4BkR2v9Yd7Ga9kkEQY1KsJLL5quE6gZrH",
  "key11": "roBZoBUZ5RxC5RudfP4DVZQDs6tFZyNzrGxxspS9toQRETEctfjyqcJP7z1xWXe7U2Yb7gDMjZsGoX5fubmqpsf",
  "key12": "4dzQKicues7YNsQycF6K54HDp1KsdRz2Ku2YhzEywSPQLuXP5DYy2kLA7Xr7mFMojRssMsR2zr73GxR6bN7LBi6d",
  "key13": "2Y6bPSUEdjtMcHDgJUooHStKrDKVLfxUKfeT7rNVrbugKsToe5qF6UsoXb7UKCx31zoYnwjgTnwp2LdeYY3U1z8N",
  "key14": "2fWK4kctve5vKxQfd8ckyq295zNTgQrqJTXzEXQnaUKwPHdrqZd9WQ7sZb3MjygUriQ51kx8HgpdKnRqmdzhH8zH",
  "key15": "3EMyruKdGqJx1mha53seP3qWT26JMwvkzWTkwPmzCS5Qm4rUWzoQMBWNeV8QKANgTFLzcEqr6sDXeL7qHU3iVX7u",
  "key16": "3qkN7X3sNPWP9mMmVWmhX9SZNb95FBpHufjsPXY4AAH7wfMr9Kn9uTswpumB1KHrqP39aFVSkfPz9CPAUmBiFzaG",
  "key17": "4m8huPHwmc83RL8WfCU7KTiv4WSUkad6CbGKQzz3MMCQjuSNK42DnyEbA47nAZaGJR7GFKMDsrVoVUwGzt3yocqM",
  "key18": "5E2vb5brSaLXGBGGbgCLoEgHx2ZzfGzDe8AkCBKWc2gis1QErzAyGd1eDGga4UkRoFNXZYPiEnN7m576WCfy9PRC",
  "key19": "28cNvoxSsXLzn1jwbktAYrqtATpVnwRqN4amS61cCKGbNXQKRbtq1H3qcSB5Y2EPkVwiR7YcbT7JnqJH7vwSeffV",
  "key20": "4ujW5fxCJEqsfGhT4C2sH4bvPkYe1rBfKfEwuuftdH3FsYuiDY3fpNLmddRFgVJbRjKW1637kyih1cp1JLfJdyyY",
  "key21": "5xZGAoCjDNzxQfkfzN1V5HS4dz9koAGY3ydrHa2rWtcvVaxrg3PckzYe7PQSWyHHkr348pf2HYURDSnEiSsBQUK3",
  "key22": "2FtCBSrRQFak8MQVx45GjvhqFVbpGK5HajhURbCdZoPet3QtaFQ88jLr2KSJyDEiznPbVUNrS4ytYXwNtmqSkiCK",
  "key23": "yui6CG952vttJdP5D5DhTT9Yx7e3P6TNKhssTSRJYacFm3iauWcsn1N2Sh3izNN4QJsZJrX5PRo8TY1e43wBQ4c",
  "key24": "4Vyoum1QeoVB3PC5TB9S9jVsmo9ndPDXud3NUGiXCWT6eYArUS6RzDtZxvFuTxqwAwCo4t3g6EURQPSPuuLvuFJH",
  "key25": "3Ad6yusknpiGDhABMDq4kpQeiySuKxEUS3Xu4cJuXLTUn4JjvBr8Undd65ewM25PpADZaftvhZw4PuhvKdT9daCF",
  "key26": "4mnC4N67tGrBdmEZggXHhkJENyiuDmR74V4tX9T1ooPDRZPKRBFPwNeqyRUN7bu6mHxnbC2eoywDFeTuDbEetfNA",
  "key27": "21w6EULjsoHMtHgbSaeFTpwydwVnUdQYRwq5zKuXWJSppPyUELh76fhS1JDLF4dYx6Wa7VxZSEcHvaSM4Apnmhuk",
  "key28": "DikBsSJoNVW7btMmr8fqE4SovDfmaGw63fp8WNbc61y9aCVwgGNmdLhyS83VjdfPMTbubSd1xVQcf8gka77LYcD",
  "key29": "3EtE59q31W5tr78t3kvXdDMeUAo7udQr6ZhaaEMxpAuBJW3HNkp23FuSeDJnmuNL9q1QHkofjkw3Rhvh619Jjwyk",
  "key30": "3Fx3GVzjdhNEtCxD9dMN2tH6mRpT59zxuwWrzCRLXntNDqNGEXJLnLm1pPjsNmjuNdaDjZEjyD3My1SwTMQAjECt",
  "key31": "29igPCMAfGPqCuKE5x8SBbxdJsH9mKRQA9414mokMkDyPpteMK4MkQMe2SMR6CgcNE8iEyRe7LnPxN8LbNmH5WQs",
  "key32": "4nYtqeYtTdQd771A3DUwhBTWE5R8DsyKyCMZ3ss6T8HMZB8mjAgGFH8VTFwMk7YoNtpHLzvPV1wk1PaG9mmxWsex"
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
