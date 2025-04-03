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
    "46MnzZuAm4csUMPQC9FkX18NJbmHj3mMuPVuCUCLyzgrwPuUpkps9nY6v5ZnJ2ybAU61qmcaEQCgyzSUD9FN9BnG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4opxvvuvZnsGmmPFpi2r2v8SMnYYVTW5pwudreAicSK4fZAmWhZZXP2vfA3C48SUZ716KyhXAoaV5d5ES2WDRitM",
  "key1": "2WR5mri7tTdQcDet9v3ddKx2rBqnZ3vGWTqj2kECQKR4jd6EDTZgBNTXcjchVro4e3vZybpbSLwycg87MBWa7weP",
  "key2": "2NsQoZ7WZsgfb1Pb4KKphXjdbKGefE35pdgGabFMzDBPcs7dGRfAwKFihWvdNNWC9bZekv7Xk33puBXRchZFiDCY",
  "key3": "xmuVwLtirh3TaR573nxQsRRzynpF6czY1psaTZ4uLPwHZeYjAS6Evau2gWyqrUs4aLJxYV4eDh22S6ztRsDthgu",
  "key4": "2caewmjDyGxRM2NXsjenjHex4CnBknrSWLQfwRN1Y1Q44P1NxKKfDRmmJECaVCjiV3x4QEzeJYAy4wjvsfx6noug",
  "key5": "4Y2vD5f9iYoyZ7RQe6WSAjAY5QDGvQQrixTvVN7GuE1h5S7t24FdcRDbhYSCdj7iQTkjpJM1o3HW6PJgmiwbiaN4",
  "key6": "49MwFhHTQrHXnFPWFEUPh2GoYvqjoBBLLGJfsgwhFR5d3VSEDVeycoJu3QAgAReTcNhwqnjJaHhGm16obHbgBGwb",
  "key7": "2PKSVnpCUdRfJLQ7jSF7t7iz7W3oNLDDEBrCqgZSGbSU1BJVWCNUowGmVBbbGT438RkNQV3L5kQmt8ALuSwi8b5Q",
  "key8": "3sWxjyJK4AHJ7GeGFuALRR1mmy9gk6SRvgJEzbjP9pKwmFegs9dJ4Eh9M48ikqzoypaswA345A4CrQciiJor4aCp",
  "key9": "1V6KFKbVVZRQZRHHGvN2bGrM8vovsv9pKqBGrTio7ryRRUWZ1nd4v8SHczXvKNj12M4hqbj8GVK3CCA24tZ1SNL",
  "key10": "4xw2mx3MTbbWFzXxFCDyVWKkDYbQPLhFwVJVD3oRqXWrJwc4yrp1zESaGsx3rGJNRHTehHjfn7sMX2YGXwMtEY4E",
  "key11": "xCExKm62XNTZmex8m2RYHJqdeaFJqdKoceeTCXDY7PJnmSXyCXWLhBbBA6tEw8h7qCyyRzRoX6WuUd2W9JKuQi4",
  "key12": "sQp3AM7cLWkXHdxNA791NBd6E56ApaWpEb2WoB1vWCKnBH8eDn6cN2f3mCrAqN61QTg3pTyBynFqgbUJ9kQ9PXX",
  "key13": "B6rDsoMqoryL6trMbUSMjxnyz5EeYM2jGGcxNRakzxi6p6XVJt9o8QtZbDqa14nRnpLoF1X7kN57f7g73WuKRaR",
  "key14": "5NAqkG2CmapTud27aHmk1oCYPbyKzd8Ce3hFST8yucGRL9aQXSDBCuUWoscgXcF3GCPKYNe5nZ8PWeNd1f3c3qg9",
  "key15": "2ZETWnKwG42T6H1JRX3U2SFLsJ5cHtXFzPxtV9AuiGa47LzZ7xnr8VshBD8CCrbuujpe5fwjAUG8SkXjVXHQYfJu",
  "key16": "285jCdG5jQ1BRCguVLQMQPj2FZxw3v9h4SmhtQCriGbi3dntXHPrDkLd6nMboG1PSheBn2cjaTHbRoZSDUSmCRpG",
  "key17": "4FeL4KgW13CcFzntX2WZEMDEZJvmqc5CnsLm3kyuJCUDajqdGWHfVxyHPy9zqBJoHzA8LtuBR5S48994HgMXaNb8",
  "key18": "5zNUfzF82PDphvYVZuHp5XoUkNTPqkUDV2a8oYbEPJrGQaZxY3NoMDf3UCZGaime9tHUzavZ2vEMCU1XgPUBP6uw",
  "key19": "677VQx9pTVNhsKDdNZLnDAhz4n7Xgq8CbZVXLxJhJwWb6qhCXtT38LbaNwfGjVfe7U3B9he6wVWX23Rf22rkuR7u",
  "key20": "3NEtmFWZQ74gUEwuFGrvLHp6VoJ9wPwNXForPAZCXxD7TL7a7z2btEcEdwhPbqkyhMVBZvB5HhS2uxa1KZ8r7mB3",
  "key21": "2ZrK6K5GD4sr62GbBJabyJgbjYDRCD9X8V2ZZBTyJj2HCcdGtX8ryX7vmvwpFssR9u24iNmo5RWuzcTb2XX6XynS",
  "key22": "27mXHreHwUyDZjfLsuw4XsDEuPhYdRzRvmzWKgv9Ajs1AQrQPM1sBir9FAHVE8YNZo8Tgrj4EaYvvxcLZHjzWYQf",
  "key23": "67ByVPHDzpx1XwdrR8cSmwjSD2AcVAqGryhKnLAHk9wu3Kjru74ZMy7wgecjjRbeVCz16GhgLwb89FaRQy3rCG9g",
  "key24": "5zfK9Uo5SnjPva9RzD8Eu3SHUqc7q36xH2wMW2kmN81oC1paY2mvh1LHmJgkjy9Phnen7epYCVumvBswRhHxECF3",
  "key25": "pWePG1Ju3SeLn9GfN839M3b1vn7YxV2mmwHcJzg5cjsQ5WB3b966geCYviULKJPTp8KcpokfgLnmCS9mFmNik5K",
  "key26": "5MqgJq3eJfH42c9LS5sR4LkDLfjgENWzTbdguojxVsBEtiMwFM981H9fyer97djNkSDJ3CPxsL3GXC6zDLPU8tox"
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
