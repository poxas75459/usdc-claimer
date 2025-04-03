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
    "669Fa2WEgk9RFBjxiqqAR8KK1GYEozSUzsrm7pmDFpzrseiVd9gmDk76N7ExHZhZxcszVUxcdcVcwwWAa75cxmyY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tLZ9vGA7z4pmTF6RhFJc1HiBZX41eNzpznjvedXcfaw84hFC9wp41BfT32RCe7pMP9L5BFLisDB9QXvz5sjEn5b",
  "key1": "5bBRQu9tuJABjyhU8KxZorwrdBRC6nzg9YF4nmAooSc8aTpCtzDC1uGMANDPCmCpWtCiorwwTAsuk9RSCAceAnnN",
  "key2": "5C3kzJfWFBFNgosVCZFRggRJACrSFBqqDgk57WC4NdZjXFS8kxdakBXSAALdDdkVvbbeLtjNQEVrfWVmNBQFHQbN",
  "key3": "41hzfGaEwbCL2iFv5VnhHTizjeC5noWmoRQuhPo3ZzdbWAPPQgjzGPiFntt1uNwEx4cUZUpe3WRzZTGZf89Kt4mC",
  "key4": "2wyU4URArRWnuJAFdNNaKeLjfGM2DX7aqnrrhkeZpHhP2QH4fi6cUx4QDHMxHyr4NWXtzNeMN6o6ghMxyUC5BUd4",
  "key5": "2V1z6GhtxwoYymawCvLeECUKhv5DwroJJim1QMiMAifX8qoLUdbTUHamNZ8BXq1biWHbGjQTkVNsPT18iGi4KJk2",
  "key6": "5ijWSiihomQ8C7V6GRtSgtik6sAZ9LtQJYHykfptgpnWKG8g2s53yEGvTs7nXuhxboRpRuDbaLjva8WYFVdwRFUJ",
  "key7": "WrZiQhLUoc1PCd3QrvQGtzRwz252JcCrg5iYnNvZWoQzSiwQwdDF23c4wT2UEZrEgB8rqhoZmKVtUdZuNKJbShc",
  "key8": "4f6LMLwk9ApyJh9xgj52znaYxtTQysz2GmmbCgLzYXSEuVYa5RubVi42nrX5F6nBgWCciGvm9nvePkqjPmo6KuPd",
  "key9": "Bfw9juYbMwzahLs2yX1LMuphQGHDs1JTAnLhMmUpWKY37pbisTqdk4pzGykFnVUmYoTLpE7ojPQwyJSQkpi6eE8",
  "key10": "t7hE3teUEDNDSuz2yhN47fzRKzopXTXoYTnArg2SoRZJZ5YSThUSKWKzKLJ85dmG3xHFVuYGBiF7AYNy2Nt7tVx",
  "key11": "4wGttwtZNbhCosFKfdfVTjddVFn3P7xZRGZcB9ox6vefqR2cGF9wzxorJvcnXwQ2JoibaLdGhYePD3ifp8Joo4gL",
  "key12": "2KRh6dp42f6YKoat5XdRt7Krdcgu1R4j2vgX9TSmq7Z4bjA6nDfDF6rC5RKDhw4JT61JSjzRMgjr2TW9g8nJv8xb",
  "key13": "3Xen9HJgMpSB6JaXA1ULQ6jcA7cE93WBcrCBXVSVHrcNFsw1o4zjFDdPKVqBuYTCvJ2S2hqBJkq69rJs8dzSKEKC",
  "key14": "5vwrMbSYejT92xjJJFrswHZPbnyoPkYwMxoQmQGvGxXhX2b6jUzkRsCNnVKWxPiYYB6k41C9bE2HjENRvLbaaunR",
  "key15": "Y9YTzANLJNkn9YeuR2BaBAqPxjuMFxwoumB6pwHt7jRhShrkFrQXTezTwXjqYkDSdu3BsLTu7wfL5D6ykddnoQP",
  "key16": "4niANxQhjWNDgpmceKhxHC9YJAcGFTwd5SXtRKkFr2hZPbnc3VV4w3ezLKZfsif2mCzZ4XwN4hAp8nZTXbLUwV4y",
  "key17": "xhLoUUTX4HRpRz2UkPYhi3wz5sggZwrh4Zb3AJSrwk8yeUXXkmYrKYoYNMb4FfCejTqU1bMvgCesETyTk4bucxM",
  "key18": "2WC26ASnKaxHh4ZsqeiykkFaDhfDZ7Hx5P5TfSfJeKynAnVSazq4Dg3RUQvcj8GdioFgLoAAnNfVx4QFoUFtJuRF",
  "key19": "4cKQdGH7boxvi8fcSLhTmX6HrshaKrve4Bj8vmauBmurXRs3KBMj2JjgWBaosp4t7hjCqFZCrH2disPeccaw1Dmj",
  "key20": "29dEfDCtt1FLhj8VfQjvzwoV4rTzap96GFJ8iq6JJmitDvRDbhgz5z6MPCQc7aEMK2PkHGYVqBfjjJyin1EJoSHM",
  "key21": "4DQaALm3LFtHhCWj2asizizbjo4kRhePyE9bgk9pzzME56VvqvcdQdQ1yE44npgsMnWN5K4zdZhi7UUGCwYqgUMR",
  "key22": "Ky7hrjh4WJwWwfg7k5qJeMMYUChcp3MKGhpexorXuuGchKNT5DHtJoyDzMR5ZbyMPPy9x3s2dmcQtyub2cVFnC9",
  "key23": "EW1NyMiyTfidERZjsD4eZVCRHxMtRZRkkeXFBmZq3QT9PJ2NeoarrfnvmSG9P9QE3L2EowNEBB2fYx1XBFpC9qn",
  "key24": "n9Jnnev3Gj412w7pK7DYfsobTCRb9JUzc7LQy8xHmUHroSqJJRBjJfWAVsDpdqHQAkYdn2GieeB87Y8KB5dsBgV",
  "key25": "LSvn7ajHkq8e5WbJJheDUZkU9BtoU7HHjPRwgFYWKq57G8ErWruCgK3UgkQYLtBfhghQhjeLAU8TWhSSjTv5wuB",
  "key26": "2DYuxHDWvPgevZDRc2KxX2TZs9GWoqp6eQguf8C5w79sKZt6vEGaibAs5mKMEDwWJUD2y7Jtq7AG3A7cohQLfSz5",
  "key27": "5S9AQgs9RwJhCYRdJNs2AyvGvWYFVq1Hx6D9aSLdgZgD1rTkPxBSQGYdUVCnnMtUnRuhmbRfH8ERXurBLwEst4jr",
  "key28": "2FfFXTqwobNNbyGFSSmJnc9kCCLqQoZRUHXaAdatZG4spCPcczMHUEnKZ9YY2wyDYiuCMr95VqxcyhChcYfAqdLq",
  "key29": "2PZsdQPuDgVJFmQZQ6rMvjGAp1nT3wWeyNGyrk9e4KSq6qbSUT6QhiuExr6TC6vRVuqPZMLQwZz3aPLLYuY8r7vX",
  "key30": "31UH1MDj66Qg2CArsHwab4WymJL1wZpbhWFa4iP2unYkSaqoANz9kjeK3D54jbuZayevzQsZp2XTydPqSVUUtazF",
  "key31": "2438tpUf2YMBaQeyBc6TQ843F5CgckFcTfxkWYpUKEPP9ytAyaECRRVQQi2TWKnK2J5YXVYkiiki4MadpGLVqELQ"
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
