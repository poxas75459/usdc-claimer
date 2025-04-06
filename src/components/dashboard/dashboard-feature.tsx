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
    "fDceqdVKQKMNnh7F1MEZLQxdWe9mpcPc1YE6CsCmoRy7g8vncr9f1NrtPQ3F85eArNo8bKeZMHEVG35R1U1FwNo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KWghCN1jPubaeHZxS6958iyfk5JavcszYXc6codWs3ej4NfcMuTjPWpJoCz9x6an7qdgou2DKtVb5MeWSSH6ASM",
  "key1": "5Mx2p32h84HCyv398MDkQXv7TgN1Atb91gG1BDVsn7fHopiJwb9k5vQ4P6hazFR45yMApB5jz2Lo6Ywx2S9hzaCF",
  "key2": "2szyG2AwVDtZvjZ4LUN9WomUPZ6FSB9xfN5hmxrSMgXizWsGstK5b6R3EoCrnnXCTcK6poZRQEiAYmXqXDQWr67c",
  "key3": "3UiNBwbWPEdBghobpyas9jETnHfVtNbZyqLCp2FwvsA4owXC47QeiiWx2AHrhBZGg7szGhjryFAdGBUpBZEGaveR",
  "key4": "5v5inLaD9GzESEnM65oaw2bnjaESHceM5ZZiEd6T3qmkaquJhYPVDRCtZp8MpGT1zo4TnuViu42S6LyK4nDRJ1nP",
  "key5": "3BUPW4DPZ9jQTwAi6dRWz32xPkT6s6zvRkBubrKxJzZxZCuZm8BVrHdu1vZBbajeQtdg6MReVFat1XUGuhQTa5Kd",
  "key6": "4FSmL2y4T5rekpAALiCjueiFC3Gvwzh8eAeYAAx3BUoTpFFa1kpW5z3Vz4r9MyM7f4X2mKXTf5BSX6biY2MB7qe2",
  "key7": "5dXgsYMoxoQsP2LAd4xxVMNX5Foma85qgKxVGJGawBP3y4rRnk3ipBgj4wp3Z3QhwVhGWvesmKjzB79KpQ1ZUwsK",
  "key8": "3DwD13EaDx5dJ85WvazAhdBkhDmgYWuqDZQFhxXRzLaxCuefchJdfSaXPR1ixaD7jq4YH53FjXnB19kV4yh1hFvY",
  "key9": "3Evq6A98WRJK3ex6VbsXjaM35UwFcy6pU4DMgA2FcQMycJnw8xYPhyg8t5WQd2imrR1MgawG3twDXojqQngg8vf1",
  "key10": "438293BswayTs2AWn5JkhkGyBcJHXwi9icsjdbVd4ee6VQ2pQ3N1zd1Wukc8Cdxb3RFTYzQKUinaJftwePjXaLdv",
  "key11": "4nVX7diYP6wTcPk9xjfhvoPLukL1xwKabdJyZrJ4hxfo3iVEQogjLMyFJpwzFTd7AYpSrspbabPHsRwfKYGN7rWr",
  "key12": "4atiiCJgjvxYsKyyU6yqgUvi7afWQ21WXG6cc92McTpqUGm4hNgHWf57hFXiFkWafRsaLT99iy8nUqpyevHjfynH",
  "key13": "2tyKfFzaEHEwQnhieqaBmZrPSYXWYCYFYRXMpebgFoABVRKz5CsQgPct3LfUqBG8KWq5NseEU7c6FNAPJKtchjjy",
  "key14": "XLQzQBLMw5sF14i4WRpd1tJD97hryvDfmhJGemaZSBcD73qp6fazrRuN8oaxurqLWXrnbNzYEN7ewzKRyfv6rx9",
  "key15": "4LTsaVTSQbiqEmdjEaFnnbV3syYaPaTX5Xoh4WbXjGbZAgxbKgdTe8sRFSRJH5fnFXWyGHWAHcQtdnB38TSPuPSv",
  "key16": "5EAEfEKyj5KJbsCuxiPZFRRzb19ZtYxRX5ApMFtuRY2wf1zL3bmvie7sJWJ9VGGcYHMu7sMgrhuVY2ZriYKETLrL",
  "key17": "3DmAZ8zn3P4R3fdnd3RC5XtEwiUTPcpj5ToSABHjRsdkdoLSjgz43WUocJbbQNmYNcTy3SefybQgAsZ5hogkf214",
  "key18": "p5C2B8YFJngjDJFp2u3jS3PCr6JnSsCrXjQx759FgmJyMbnyjsrMscsmka4Qs57NY1DeL6rNnoP4nCDhxueYzCj",
  "key19": "23gjFLSYPPSUXSa5TebiKnb87Ui2pUv4DXoQmMDeGiN2iTLtSww3BqqcZNuYpvAqD92XNY3JytNJzEZDLspDs9KW",
  "key20": "436GjjA1w8WP6x7osNGnMJdh2VuEH2vBmyt1fA9uoHKKPrQQjfHwnALff1rkG7TdAgEFpAgzarX4a4tjTTcbmFtJ",
  "key21": "5Ge6nWwRYnFeTyJtDxxMGKeKtPcacs18erC1Bws7zBNSWYXbh72BFQ5m2psD9PLFmB3xMo96rmbxBQLpY3DTKxrm",
  "key22": "4MSH5oJPQsPZNnqTHcQYtKQqJ2LHTaGrZGwJJ5KufxCjVeXKDAQBHX3qftebK4JVdHSLGDNciC2V9Lbdk77pG2VW",
  "key23": "65nsqz6odr7Lxna4ixZ9STgw65K2SsAewdcotENTH6gJwKvH9ghABBf8gqhxXUvYveC7Y9S4mAYDbdH8ixa3KjLq",
  "key24": "3FpsyBPC3hezx7rA8UiNbCTLJ5absLjJdFvLup3mTzGoeiCRm3pYTpCSkjrgeaXbtn9eHj6wXNcBCuELteeq3Qkv",
  "key25": "2zWdrz8C66ZnzHWR5Z221erA3ZfngYJiudfnEYxkyBcnwb5HRe2pTwQbWSPwxGLEhXD4fpZTQz9DfsJcr9kzzXNo",
  "key26": "2yNxPu2V7VpUhwZZH3jZR4q4i7puPAHtoD5FyA19GsUHc78xgLWyfXjnwAEUatZbqYxcbN2C4FvtJzatX7XXyREe",
  "key27": "56UFmqKxtzfVHCbpCt6UXUEu7kRxLNecHBEf7ipY2TQd7skW19WYv1ssyy1PPBHve27mWbF3kjAGvynzbuFHnot",
  "key28": "F99bVDzb7GR491QxiPnuvX3S3hmZ8vPgGWxs7NQ4vfKB9WwMVxLAp9CGsGyu9HJ4PDo5L66G7nDVZr5atXunPpc",
  "key29": "4UHy4b3L1NSCkzvFMWMHotx8ZTDXt58xPYTCcY6yYg8MEubwWbTweiv9h4n3t53n7waS392tBCQhi7EXrLQMc3rz",
  "key30": "2bZ5d67x3mSxUcdv6cjAJScNkMdBpA8Xc5yZqc8yDgZMCT1HBfQXGXJmL8HuaZh3yQYuCRRxGMxV3HsMZsSQL7aR",
  "key31": "2G6zBgk2EmpsoK3tGzPsJaU7hgWFXAzAmQDwVcoxzv5AWG83b1rtRpAP2eA5wUTpM9fcY8WLW3r3tnRZudcqVNQ4",
  "key32": "4RtfEdzaB6iiHyTZ58gQmqZuYYhZpVjLLwLiwTJDfVGRX2SKiCybXCwjk7Mkyd3cJpJf8iu9r4bwxEQdnyQxwq2e",
  "key33": "3oCXXzgDjsZPvKYsiw8M4vxizGTVcp4xJsMLDfAwiCTCLCrktboxFMxnXpimomJBZ3tJzVkMpuSx5oQxP7ZPmp96"
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
