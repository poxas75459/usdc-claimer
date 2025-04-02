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
    "4ooGWrdadYzd3B9R8jwi1frgiEngdsB4HiGuD1jkXz9AJnogrnEezdTc7fxN1jCzjpMGnWVY6GSBhEEV5MgEKuAg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PUmGiMdUFtpqMv7VDukKs5ap3p9vMTzeTWAjR69Kc3xFKUug1tuJhESBzny5CTLyjg2fxx9vZxbYr9BeXEj3EHV",
  "key1": "yEvNL2MUyFyyoBHqxvX4WxCYtwfqdQJJ7SpmEmqJvyB7LXthDSfazPuz7FNUPwAMbPdkkYzk5QnR7pr5ycw7TWo",
  "key2": "2eH3GMCLjZX1MEhqKSxQ6r1tsEELikxcrLW99h7m1eu2Q7CKQ63gkhD5ttwqoq1pvuMNg74RSQMQqEqwgethCdnB",
  "key3": "2Cm89xStQ8t3z5JDYFowFRUApBc9eZ38x1icNkwdfebmSx8b3o6bz64wmfxSJcVD8At28C2P3ppxMrb9Z72XBR6j",
  "key4": "wm3WCpcXxQFuLcinswm5TBT7NooJqnsxYkhDAGZtCiE1og3ipr96cbrBuRnJkMEgfEE8EtW3aNuNBHzZetTMUhZ",
  "key5": "2DFfSY3vnQ5oFAeemjeQNc6fozoCwaKk7JBdLpXgHx2gBaDsg2EcTNbZRuCcc2bnco5JezqaQPhhXmBxVuUJp7Wj",
  "key6": "D9aHnpFatLJ1i8jVVwxB2CwXSJdiqt2EdGDf8abBRA2KkZaR5nuG6TN54pPUbYhWj5Nez7X4pv3F8XioyXmfksh",
  "key7": "4ZU1riExUVDUkfB2Sk3qUsMLaGEf3nMBmdHxyw74c99gv1o6E4edkBv9nhanqcgqT8oHtAvnzBbi32XqSVJ3ZDAD",
  "key8": "4TYsYYZ8AHsg6uMdkCiJHsPjgLyGMqxruxpDiEVyz846qERsxSJE8wEnN9z4Mjafzr92J9mMwdX5WVMHSxbwzyHH",
  "key9": "L3mcs3wLG2dg9kfudoeSUur3wKHuRKpJaqNw524xvv6J8Cj65gbqWFAwughLDyaCUTYKRNA9bTCi1zVvxUQhX11",
  "key10": "3F3U3hbNRFZpyDppErQmZQn5jSZ2v1Lx5aH8HpYRdYJPiPCbUjPZwiNpJa6FgT5YobBCNnB3Rj3coK7ZaH32qRG6",
  "key11": "2Tou7iuKWLDEob2886vFq6QGmMNe6cUFpdhaZMb9osHKT9Q3uN48E2UbFaaY2DQX5KKDtYPeecK6vFtrwKPL22kd",
  "key12": "vvgtZ2fFrQMMzWATC7ZMNgmeK6PDV2u8EsQMwFuUJKpf2QxqZqcHSsyKPgFwKBy71vpecpQvC4fBk43YgjQHzsk",
  "key13": "39nUZwoq2Nx6cwBMDB5AwU1GLQvYEN83Y33zV9Xssiqm8DSZrAF87yR6vMPCJmjvt3Yzw2xfUi2vkp4dYN2arkkQ",
  "key14": "8m234VMcdmy57dBCzQNDBuZTgNqvGXWFbVZZtgCoWc2PYZgkWC4Qt6jYKcgZy1MkTWd7v61uLUQUFJBcHm8gpdF",
  "key15": "2hMjmoEPLKcBmWJxNYCYAaQV2ofsynQ3thp2o2Y6mtrCepJJ4UL4CfqnYDzFrbGD7mFjsEAaMAe7mDgGWGtYmWNi",
  "key16": "2eBSyMR1X22auxHTuix128Jxwf5i49aSPKfDiKzRPDBtVADLmfBcuzMX7AwbwkAsaiVVRARDF7iboPJgZ5A9zFyt",
  "key17": "5eXudwD3iwpyxcMw7XHWw4KumgTWVJwxyynX9btuKjodHmosYDHn4pbx34RJMqY36UZjdgwzs9x1M8vmRa5DihKv",
  "key18": "3PYFajCXeK8h4jyn5uyCzE4n96mTnCbqtai9Ac8g2w4jEe64xjx2LX3P6h1Ur2vCUB3PGBPHiVgj69GrQwRQpz2D",
  "key19": "21hnCGHUvzZotQNPsZQiye9p5d1bvqHNnLzi89z4p89qwPYNtS48ejfr3Uo1PVPf7sJvWjYgdvmHmZMqryegup7p",
  "key20": "35nvF6jwbDYReRcSqvCZzQv1PQKYGfYbFAaFCfe3HobKHvpx9ruFzctVWwtZFtYvBPEXq3FRLmZazUfuDrKhoxtw",
  "key21": "4PDrTfFfVGsFNvhAqnkrCwb81WWNnWqCxMf5GEbbyMUuSTQcNPym58Wq1Ynennr21egZTHcCvPtvh5RaHNdwkoTX",
  "key22": "GLLeqGLSdgoznZrt77sc3PjySVhnnh122xrCfmuRmUMZzBV5na67qTnTk2EvbrMAj3VAQCdc6vmAdoExNorkBBh",
  "key23": "4yH1Tcb6KqS6p4X51gmkqHJPsytednyv7cgZ6dwtzDEPLcDBgs4fa2qxhtdwroJybFRfiUvZJJu77yR8jbCaRYXM",
  "key24": "2y2uoqkHqBJyqy2VuVQfzpCuVpiX7WWNjJChfhwqMS1AGKaLsmtbypKPTcEEzn3QxzNzyKKf2eSDD8TtY8Vri7mC",
  "key25": "4fVMmsFzgH3EvR2Tuz6fsfhqFRKAVDqQNE9XEWEFC1Q3T5Q8sJNC8fXbTN1pNQn81qRfjjo2GYwnVE1HKW8c9aJh",
  "key26": "3NnvwNJH2VrKxRYSnAS2sWfo4G6y2MueEH738XVrrfxRD7rhtGRyecxTTHcYkZcYiDhLj4ohu4LY2n1ZzsCYZpNt",
  "key27": "2c46DSsW1YnHCf88rTis9GsNBJkQFKkmbtJfjhkjzU815z19rFK16XdGqBNF6dwmhWswzkG6y8EM79xVfjPocZ5W",
  "key28": "2E7EfCjciHR4Qou9JSKd1f517N4EHsZmPKFk2ZcCWW8HBD7CUEzrYndktsWxoroBH9fCoUtfzhaPYCszRJsVAyGY"
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
