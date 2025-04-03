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
    "2SrNTnHNmS2EW416zc2q46GJcx6csveRtji9d8dx4LHZjxTrjMewQZSoTnRZgvb6tMC3qWEY3exDXCyQEvZW1euy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hrJ2SVVMbFMYDQe8AznQsieGbTjXn8rDeiaoNiMi91C9iWojP9oQ776xmqC2xK2pinyrCvGKLGg1kftkacvSiMf",
  "key1": "2sQDH5HeMuJcx3w1UhyCFNWjS9L8x6uXJPS3N7xUyoXPwVCnAH9dwawMKW7Dnv9xvrX3x5ZKeZHx8yZjd3qyDKuA",
  "key2": "YAK8dwa1s3RJ1gEXjJdXcfhvnEpMnvX3Bd1Mhet6qENvQT1oVKtaCZrSfQ3wrj1XJZNJdYLg8MZ9xohLnMv7m5w",
  "key3": "3cVwDyPX25QULjLwnNj56LwA72KjAS271q4edipEEftPe3Ebt3zT2tE3bKd1oomHqX1ifkwsaHkCVuFb1GgEbnGo",
  "key4": "2Q5Ev4hAhbj2uQk3ZUS779NnAxFVpzrNeT9CqUDB6oEstoAeM5HvGs92RNaNsMemDfsZpo4yqVGuHyfYezTgEnf1",
  "key5": "4dRUh3PRYAwBNnBiHVdZzLQu419h84YH3MXh8jdnZm7jwczdk5uujVrGUDv7uwQ3ms7LryV3GhEqWFTRKwwy4wUy",
  "key6": "4KQJYYGWrrVAwjquoZ5J54EUqKbHThmR6HXbYfe9XSiNuLXFFN5HNpux2K8wqnofV33uxGjSx6YS6kYE82DwXqi9",
  "key7": "5Anzc2cmU7k5ZeUEUtux8GmcaeBXHUe8cBRuxswUeAXzFtGy2NxzFZxsnpLDbDchKtT9UgYjV4hd1Q6oaMcuvfZn",
  "key8": "3Gh6THqyQMMnZt4x1QotmMfHAt2tfJyi5bxmGAs2iAGbhhWx1yn5bX7CgTNoFZDCyVqQg63B8UXnPwbNNVmy8B6L",
  "key9": "26sDsfvcWfep5YJYVnbee3MJrEx2HfeqPQWNopa2Fvw9wHX6WjrFFL8Wcn4eT3g1KPkVWAih9J3jnuy4SGzovPgL",
  "key10": "3mGS7E4GA5qTDWSueMngqXSgf63rqsYkMHX3Wua6HoHdrbBodHqre5b8yTcCDURPRh7EwbFLFtArEDkJxitFAAcT",
  "key11": "2sFXpCXv68yysgjGhysAf1H3JjzonZKsw3HNzFe9wTku7urUur2WYcrfGFEunsm4UN3i5qy2Jnu5BpTZYLA4aQ6Z",
  "key12": "sbSBJVSjHa6xK5WRGC1a8mrhkcLDyz8AGbzvqttCRXViVXKC1rTVUPtFGUfJNFsAncfn4V2XUFqhfWR3fKJS9mZ",
  "key13": "2ynqE58326i3HkFY2w3rr6RXDoX5TZWrGrKjBPj2G3F8WQLuFqQdbXqZXsMEFSM9y6Cg9CjCkNsbHkkY6a6zj76L",
  "key14": "4R5MuZYSm8YzW1vJeXAHymmAroQc3zNjmtNj7VDGDczyKH2hxomBD5x3RsqwBCvvBqKxa2nNbAsQ9uZxqC6AJP3D",
  "key15": "3rrsTtSXKSsMuVWhbYk7orsXfm1VUrUNBh4nUTCVbHpzGa7P1dj5wYUkxV2trqp7go3Din6hn9noXSfRbNCLEWHd",
  "key16": "44rVXkTSqgTto7rNqaQx4iVNHK4WXwhZANMZyWMRnuuftfZzkAMMpyKKyQnmZ33CTLgpo5frMST6Ebuwo7VhdWDh",
  "key17": "5D2h3PuYNn3FW5X8BbEhTqsMq6a4Gk5FCjtcUk1i7UpC8uoaVHiLcG6mgWyJ7DEyZiY1TXFWBqxxphHpX9wQs3q6",
  "key18": "4iBx8FFbR9HDVcwam1DGefd1NBKzEyrm749BZPbKh17BWiNAo1Xvp7MNYYDsH1HVWYgA8b4W77zCQdQ3J2F4fB6E",
  "key19": "3vaB2nwoTXjnxMW1eGQJSUDrpnmP5B49xxsRqNeZ7kEhjvbY6nhzCR1XPH3jE4UuejMn9h3AQppKRkCQL821vBMW",
  "key20": "4ddMcGszVXcAAS1UJpWV93pSyYxb2Zdz6DVW3htJJuGWY4v2BYSSmTUMegd5J2JJ8daxcyWyXr2rWVghkhdr44QE",
  "key21": "ECX6mJVuud8qBPURTjyhP35vgANe4U9S14o4czGFF2bxrqcbkT8gaGJdeEHT9GNb7uzjB6txHq6TGRniaDFKRHW",
  "key22": "2jQg1w6x1H8eQiTvAB1CGW7jhYN8xcVMDa3D9T1MgQwLJzinwMvUPmLCp2ZepGgU1UdYaAYnSXyGqQF93axucCeb",
  "key23": "pZ3BqapZntxQnUeRaMa2cdhPV8ZSYwjqj7VF1NJkFcM5jvvGGP223gX8h1KkfMfSX7VG5jS2oyEeyvmCopB53Ev",
  "key24": "3TF5j4r1GLB8yNSAUTWZefDsuQVYbM3yoC62K9vRqDopBZVzA2EWRT4LszJeiLHxSmhQYrjLjTf6yNfvxfUqxuuZ",
  "key25": "HciAfHbJjDhbF4kyorHDDfysRdk4rXfGvG3DXNkgJ15FpoaKxHBxjzFdU82Ys7Pdfvi2jo5yKM8fieNgQ9YqZ8a",
  "key26": "w7fU8Qhg5PnxiEdcntnGm4641p56J7hP86SQMjDqEfwEddBwaVEHgp3Cez16o22F2pWtXgMqfDKPRMzuyL5CWsF",
  "key27": "2d35qkZmP5UDMHRfVaGj3j6QVhwWb8rbYCtVSs5RHkrEXy6T65EXt9LZqoaYjcU7wk9FiopEn6r9wQxC6KxtbwRK",
  "key28": "5Ra8PcYnjHJ3EG7b8M2G5mSCmFLALbX61yn3hn2a2qLh5hGYwppNp6vg85tm4xXVZ3yH6GhnYLn58GU6R6M9k5Gk",
  "key29": "4RLqAXaNCT52nraeENAAoasohJfWMiTuHHJH5e87UVB8hpiHR3oJNv5jjPH6myNfZvHmvYLj7omdxj4i31t6F6Bk",
  "key30": "TNzgF8Mh3BYCyc9e5PD33AcmQvDEEGPvThHH4pqzaYSk9o5eEZCSuTJBLx95qikYegsKdfQB19HWECKTkANuUDk",
  "key31": "4nmwHwjbdEs4a2f7Qnw61t5YmWANYff17t97fHzoKjooJ5EnTFQQSpjRfp6Z2c9KgRpeY51z8gDKfLAqdSwGshdp",
  "key32": "4cwiEmtCvC2PUdE8WJVcEvMAcxz2ZMbRrvfeuGzA56igqpS1P6sjdpGvaremsHjNPyvKzkFGnmHG9TYdWZcVPg76",
  "key33": "xXpKmTkG28R7UVmGzhGP88CtrJYQdBC7KWEXJHJ2QdkgFpHVMesdGGmMVZ42oTbEtzU5D4VdjbcWS3BojzdA89Z",
  "key34": "4DHFjCSkMNEyveJLbfhxgqwUEZs6ZfYuFamghgCNFq61kMFiQiRrn9fnm9xPYWTptSR9XXtHgC1Ycu5fgtostSKy",
  "key35": "4Ho1LSB4ZK5j8SBis8QPUUcns9aQ7BBsgea2PBwp5m5YdPAJ1re2fZCBznEmRcrXCpdgJJdpGPQc8zxCuELRaoKK"
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
