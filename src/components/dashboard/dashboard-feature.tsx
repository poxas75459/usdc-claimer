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
    "5USkna1jbAXaTXzpFX5PJR1rMzLNdqTo8LX5uSxYG6Q8HAkudr6rc5ARmztRwEk2kGuLqVbVGHun9KijiBzzzRtJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a8irpsoX64Y1SUXZDMyPfpCUgxskqUXCeHZieEkbchk2iCMkxp7i8na8WEaNUNEWjkBvud58RPNmAz8qnsg9WgY",
  "key1": "ToBrBoznuQzCEbGt78ov3T6FeGLxukhC3WXmh95xDYFxtXt9wfmhoGqFxTDLNzpXKMjxw5RZQnzkQBetcrB8zoW",
  "key2": "5s6nrZpwLjc1ovrwT95BsxZ9JZBFcFtYJWmE1Qn5G58655NPpjHMrywKQ75bzLyMo4xYNbJgYyYCoDaNwEUYwUxq",
  "key3": "JXY1quxXtSHQiMr6MK25zixrYfUwMLpPh12UgWeJW52kb5FExaHtG4Y7g6RoSF6G8y2hJGS17EvBXv8CtVvawRN",
  "key4": "4h38WhQXdp9ABuLRk5KCrVfAnpfiisbs5pU3QuD7enuF2mpDTwqx6R1vweNhTqfqcbWNAK3L6M97FWxVRhaErcbP",
  "key5": "2HYKRBr7Vng5iS9koZVPnwfFcG1LgJTNewob9TAUMha5CdVEoUPE2nfV1BwwnmgATrZ2368fZNUumQUEptNX7ipT",
  "key6": "AQq2enYoCM3b1AnWhVXwkCYQqaPy29LEkBUUPDFYE4Y84B6uwNfDFw1xBdE4JhYA5U4Yidxe62U34smsq1QyMrA",
  "key7": "iXSherexbZVeZ4PZYfnxTkH536YVwooxePV6uUTffsp3PpX9g3HrhE73N43FCGrvtKCJBAHfN2esC8arA3e47tu",
  "key8": "5j4h14GPRcUc9x23JfwjoM4da5WuyPEmpvL4GGaLtmjHXQpaGZbKDJRQReBim1Be7AFCZHfYGEoN6igum7Jpc8x7",
  "key9": "3Yxj9FXZgftF1KhPwzodfuD5tWove7hVWsgqAy6eR72QWbSQDULHF9ttwgVnacSPZoY7TJ989BwKnPhMbi7M6inr",
  "key10": "2UVeGJqdECiFn8uDVY8BMi7kfte9SrnkJnTPoQR8ppMYbPRZTszBoSgkuGNkSojEsMeZiUmz6qHgVBaSW2hfKd7o",
  "key11": "2wSbzySbcVY2kwtVMjJiBXQEiSRAjej7xmgs6U9s1fABxeLjwmcRMdqw53SskXt2cEuvrdhacbkxbLo2hdUXqUnE",
  "key12": "2ATNBuVZ8CuQwZYmuPnpQ5q9iFxqrBvqqriQfmh5vvzFS9x1X5VJu4EbvnhRCiisZ5bniwXi616NQyRPvWEXAgJT",
  "key13": "5aMPwAKRNyicqiZhofEQFzCxALWSZMDXm2EyPvxxryeJ2yEWC8pkfyoRR67jDHPxmSgHmC91Qe7ine2kTQrTgwNE",
  "key14": "5sGhEkqg8G9KJNPkaMS5QhATkCv2B2jU4CdvaLMEbeEA1yT4fnoerjZ24zD1mHJnqsFCpjgr7LkadRhVztRYACB3",
  "key15": "4MUJooEz5NKcHP4oKaNX2KNqsp7Q21iYf6AwheoL2UNX5giU7QZ7BcJHf55D4vbqXYLTttUVrKpACfkVZFEKLYmv",
  "key16": "4sS8c7VRWgLEtM3dagv7UXrZaKee3boyY5BYzRm15xMozLbbWXJhjs2pdViN7wtgATdqDCndgjRBoyoBLYhX7YCv",
  "key17": "45YT3x8LHn2bQ9Ek6d7mpvXzFDC9bQpRSvki8Vbov5u6rdFXqmki1g2n6EyKaMUmcrB4zvXfzpkEkEsF7B1xRBti",
  "key18": "2cRjcMeApDvRyfHufH2Fd7CGuroLGMFF5w2e74ZgfVrwRpV3rxT1MucEX35BjVjJeEqDM1HKEoTvrWjggnxCz9LW",
  "key19": "3bu23cBjusX4kyFjodgUmcfjaJgPTYmrrkcJETgwpzmeXC2AhswPE2EYsUf1AuyPGJkxpDY2n4breFe7yBdUqqVZ",
  "key20": "zuitMSPnke89ytreFYCKPf9onZsd5upYiYnTu2QxyraTDywn2D8tDGqAyrvYdX2kCGBziuiAYbgFuFVVqFU5L67",
  "key21": "2UvFyKJb8xNMKACgraAB9jyHkze4Zde9cLHJGG3vmquv1rGHoNSHcvwfgKX8BuPjjKsvRZ2Yo3v4xBBa5HUDNqtf",
  "key22": "4wTLycZbEHcKbjUrivTbzgRxuCQNnsyAZPtfxa6LLSxtqjfrWUtkR7gkUdM1GomKVMQGYZB1498h9MEyU1DKajTD",
  "key23": "5FsoVj7ekXVVwvNT4Whhb8aC4hkqkpYExLVaKBMTVN4WR7Z8zokBDBmAfsUQCFb8fVaVWzqubJsPm3fpYZDhvfPb",
  "key24": "5nY7rZQByVjncSaoJqL8TNq7fA2gqFz8zUehGysUJ8cswKZkAHEcR79c4aWN5Z97M4n5jMMiavMySr4G6yfVPygh",
  "key25": "2P9PKtiDYFtQ6H4XJT32uupz8kpuhPgk3k34anbAkLkR4dAeAs8kgpFH7ncLKpJi7bZYDkCDg8XsBV1mxMscaDFJ"
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
