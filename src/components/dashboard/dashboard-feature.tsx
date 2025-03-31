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
    "33ueNVzdgjocJ4qtX3Hoyfw4dKkA3xPiWn8mPhJ2i8kTmxgmBEUtDPVE6r11RvSg1ij6L757gXDtn4PYmidYrXF7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rreeuZFw3D7HrAiYLxrrzST6tfrtuK4XUREKXysggHMV1cszhQwYgBvRS2h99Yst8DpyYqo6D1THMMNSpgaHtTJ",
  "key1": "4x8RNcKuiX19LsTW6ssTidVBXyU4VASHjuM5hwtzXKHKEGayfSr4SwuW293dkQ43xqZKV6MmgRCmijg8NbJUWZy9",
  "key2": "5nsCkTaYd7ozWWRH832BtTRTMxrrxysMxesQ5bpHSnq9p23HNFuR6BF5UCoGJ1yToodvRNXUrsLVz8aarmijv8Wk",
  "key3": "3bXnXkjTXoR12piFnVtz1ixFxfK94UHzB8zEWocF5HBdp6k7Hj2xmXG8mULPLgAqybK5eWnp5oSD84myXdg8yu2x",
  "key4": "45RUZqdyEw2DNm6aPRKUzMLX3JZwCsVXU3oaCzduF7qKG8QhXEXoakiiM4zUVMTi3X3hB9sCQ2gjLMLhm8QTPcZk",
  "key5": "5MUVbwUafGRxbAjNHnFuBHJPKoregDDi2uQxgqDqv91JPnRgtLszSfKuo5vU8kTAUMnj8r1PdWv4PndaDvorbBVE",
  "key6": "5t1qGFJNWgKd7e8uW6JJpFKPXRK8R7TXmjSZiTM2p78cvgpBDDcMtSAiRVBRbeBUDavK3y9WAAveX8wa9ffQ17jV",
  "key7": "3kdCA77TQUaGtpa6PMcnqi6UoGhkfuHMo3oadbNPRwwtekKHTLrVfkiHRd5LDsVeAhPeF9FLku91Z3x4iRP4bBP9",
  "key8": "3TMdjeE9Ua1cA1P1YFR1Fxj6dsFfzm3uXsNRvFgsi47RDRnRA5NiWoVeBG1HQ8ri82XQu7qqftTHkbXzi5v8o1ep",
  "key9": "efUHkm6rbubuHMz6dZmy79JnqhmHUP5C7NToQdD3xHGnF2DmqF6vfUUwkiimPfSA4CSGBKueWhNFYNwwznCqV6e",
  "key10": "4JVzLLUc9f1pPGw28RhqKRPuJPctae3XpuVS2X7Z4U9vgGx656qbMNP2Y7tqePyjsMUCN388uBobLQTqsF4qeD9r",
  "key11": "22M29VbHidrudqFJK1tXZqyn8ehViY8yT8bNpzen4hfqrCXLbJueXfxWGVMv5yxYhZYYMb8ThoNJXkiMdKiXgDSb",
  "key12": "2cQVkhXp9RekWgpyJgz6ddEyorKJr98KtEAB4bEbLsVAQEz4kid7rWWkCnH7n4fVSQ4WkwSwzaRP8EfPF8ZMEHqq",
  "key13": "P7Jfk1ofDoVRakfRKz7MENk3rDKGLEqVNx53NCfGzmk6nPpVmofUvQqn4XBKgJgvDQKWDTifKqi3uFNv6bDHhLD",
  "key14": "65bFoPf6T9UDnAzd811tsWNq834RfX9E4PJQ221cwe4jVs3Mknc9SrPZUbWEB6SqKcdyJBcqEdJtN4KDbBpxXyNa",
  "key15": "49Qmu2qL49Y4fZGzme5TReYqXuwhmFAEUanaz85ZJn1DbA6xebLqt1r2EwwroJGw8iVXfVhgxsQV8PLhxDFmA7j4",
  "key16": "28tJ96d8nKp7Jk7s1ccM8zeAkUfRd766bS38fvbqVVcShx4JJVDXL2hcDMqdf7spjuosN1qpQdN7aXVicPHRe8XG",
  "key17": "2kUMDq3nCwub8oyWDJdtW23g9UACivuKXWa5f2qENL3JVRGJEujrHiF1jHpf2HPsABHLsVNQRqG6w6CESnWrS2fT",
  "key18": "mkC3btqBRRYnNMmqkjZYdjfuZrxi8tmV39HcK5QqaCe7MZkun1s2yiwLC75UtntJE94UdtnLZsignQqQa7bDK86",
  "key19": "Wn9hws6vxqXKi8GCpaFrWHTjx37Lw5FdM1RqDkybZiBByMc7y55E8Jc6qmFDYkS8t9ZsW9XN1azQDqimknYtjri",
  "key20": "4ctTmfaXW5pLVTSZivrhbeCJVuatZz9X59DA6fhjmwG1PN4UXFR43NkNTeTxNUQ6svG77rEAPuui8tD9suGNwPgK",
  "key21": "5XKPCqr3XXdcMxD8Cgz9YAheV1GzYqxKuBGwiiwtfPV7xRPMt2XG919Y8cDsDvkN7DX4mPYH5Bj7tdmRSNisUuSf",
  "key22": "3SgDoFT5tHwd5q9aAsfQnG8ZzhHYcQm1jBHFAhCDBiuCcxT8AT28PXCw7wv4e6tDvjhTfro94bVPKF5rft7h78A7",
  "key23": "eTAzcnaLXRSjWNSD31pxhq6S2A5k8BSXwgGDuSwjb8ymL5sfy5xjkyp6wVP9Pt4Xs9CdBuyQDmhLmEF9tWNJW3y",
  "key24": "3cmNiwSUWBKemEMxhQfjPziypH17QeLX3JnAGhBEZNiaK4CCF4e9nT25tFk9hqz2CqKiRAKLsKbXpeyeMyzfN9Sh"
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
