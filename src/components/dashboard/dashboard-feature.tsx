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
    "2HViN2csEFSmbB6kKCgLx7iWJjc6rZWZwca1C9WzfXsCqLw96o24Gsf2oaFtodpMZ8jCm1V74G9Ko8autAsqewgY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AUZZi6s1JhoxYt12AULhgKJSUVbGE78UqcbcmNRWMkNDi2H5JJR8eHoZmMrteWnpjis4ZYHjpEuXC1awUUwddJr",
  "key1": "4z5SwZgSghorQgkK4Rg2tq3hckuFE5GP3bBEd2mdxLkiVg1sGJNsHEcgKvV1NhYxUZWKeov4m1BMjLYU58JSuWFb",
  "key2": "5CjNnShQaRDkMrFn5yQejTGsv8hJ1DSeLzexCEzaoZT14eW2wM6oB6x44C8C2HJzVrsE6WaXHoBrumjCV8DbEiSL",
  "key3": "5ACgj7sG1tAsgm986T2JeCCeXZhd9BhkAN19rB2XV8yiLFpLEe9RUfD26G5PgjAJjdBihUne4qAKvNvnvEtvKyYx",
  "key4": "ffR4KttzoDTcbZxBsY6JWdipD6NbCck6CpS1QEztHGacgHLATqgwdSnrvFuMpkJwVvFau9ttLL5iFkgK9bv5gJq",
  "key5": "4aLs1VZZ9YJ6G8XjRg9azE9ZEzQEwB9d2RQc9CB5JXF3MZhXTtUsXwvrYC4jFnQqC58JTcn6jsGD4AYkFUazqY2f",
  "key6": "NEgg8guHazy7ASHXKfcpWXrQubUCkc9wpPcggNyQaUf4JSqnWiQQRevgYbx7uUxdMwr9GFdDnme4CybgT1nd7Rj",
  "key7": "3F3xc9CqPBzMBhuXdfeVSCgsbjrKdo6SQFJ8mHiYmdBDFrXVKREdVmXsjk4cKNhNseabNQKeNJz1pyGPdsxsA8SC",
  "key8": "65mdN3KyuL566YdXjSNms8KUSXRRzJXXC7HqiC2gNye6Fq49uZfCQCBXofGyfdSXjtUA5wfTQZS9MSdE8kratRvf",
  "key9": "3PJhqDzadWVLhFDvVKpJ7x6GtHwH2hvQ6XMkJbT2bJM4nik9QqGw9ye7a5uBCUWqSpDKAF16baxjYciNVPEey1V",
  "key10": "3J5a7CrSbkYmM7R27fx8uHDf31MSWUbaYAMxDqEBtSgChcWEAsceuVh3Df9wQL6X8327h5o9APo7R7FbAtxagxTN",
  "key11": "5HbKiqeg6J1pSFqauGMpAN5ArcUeSHsFzwwrbM8vVoUp1iLtdqUEs1PtckU7rY9YfuSf5pD31o882TsfoKbiXynA",
  "key12": "3EborvsRKKpU5CoDNfUVE3K24edzk1AtVANZrYFDFnFSCquYK1JZWn2L7dGe1H9AktD39oBAmjUav41V1CbZC8NV",
  "key13": "5Dx3xSiM4Y7WWNVQbguoae7iMvuKE3PgophkpcfiP41W8o5XtD9x7GGHGjT3RvfyqahQrR63dCw3DfqwYbADWbXS",
  "key14": "2x2mANbaXkeEsL8RGpniqfcwB4GsLGrhHCS2okVLJARHsQeGPwJqTypfoCVBoeZfnWEw1MRAut7LxdGVtWcsr4GN",
  "key15": "5U23HN9gAvSWKiTShdTSWWcfMSYs1cSGB1prAiXfRQmQFNkdYLS8dds7MWCuhzUuDDWST1QbpsnALtwe7XgQpurt",
  "key16": "3GRZcDrUbtHGX25Ykn3ZjVbQJX58qeqvEJcDnj65ipz1fTYw9jcb9awVDUrLzr2ECQ3uTDKThMPcENDmhGnC9T1u",
  "key17": "5JHpBcug8rdhzCLEXBJxD11a1bPRumZzALnX43fZoDaYdoi7dBRi1j2AreDarTev3H2E2nLCE4Kmqovme3b4UD5p",
  "key18": "3WcYLJ4Ynyc6HWUYTKwonurEJwoPYEcXeWvStQLV171qUupzVWwpdA9rYdnCngHmxmmeRCy35qefq9hRcZkbEwSm",
  "key19": "3t7ixSkbSFzTLVCXXNsWCaYa8SX93wJXBbJxPf1nFcLXV2PH8Vq7qRvjrrxoZNPT7XoTJrhsHcLq4RXo8bg8yz1d",
  "key20": "2d8tqf1NBr6yLMnBNN61bRiWyFCjZmfBu9xAd2CapauMax2VpadoMyAN1EUgJ8kRxB54rYJKGW7tq7WcFJPKTHJt",
  "key21": "4gyGmLCSWsyBWQ3uGGhzRiLtMLxqbU7isvCWuqSijUekTxAtAWdLyCRQhQ8hUavXirVsdwCJPWSwMpMiW4rVDs53",
  "key22": "2VRRfRi4qV6HJoU9kRtzW1DUBkVX8igaTYPgJZf38W85wRHy8t7R35eSX7uCo2dYdZ8Y35FChpgWDKarbHpDhx5n",
  "key23": "5bFUyZbzvUysDc5XjUgBgMezY8XYrowmcrRM8PnrXjX87eB7W2zTwqZN6R8JNDyMDmLfXS4u2NmN88rbPf4Y8P8g",
  "key24": "G9VnSZfAdQM8Lt3E6QmngeJTvDmc2nTygneZty9g9eHsKn8h58kTnhZBiHX86AZUpumoFCidqXykdbPNdFtnBGi",
  "key25": "2knwQciD7J683bGhhFGuGy5a9751gfS58YKGLZEa5KFaFPqEqG4sxEQftgifnx7wnYiDAyAVB1bFjpWzXwd77XZ7",
  "key26": "5LPwL81ZkFYL8GKXXP1e7QpYgfDwLD21SMmHj7wZTsxjS2We4wWEZDrEx4wmNZ3NJgynNhYx4c5SmjYe4zUawJxw",
  "key27": "sAc6h41wwzKD7GPbeuv3JkM9VdAm2Hej6HaNmED2qTWXobYY3CVBcGRK1nQe72BwSuUeLhvSkE3Bfgs7bCiJMzM",
  "key28": "5Zetj6xyX7TLAGZ2j7WCZRHnigev3xXSyBeLJMhLkk4nfd93dQxiir2EoyP7Cg3zSgbCxvmZMByZDztPbxcpJyFq",
  "key29": "3S7Q69bDb43YA8xsZXj7PsQQoD1cHUnHBEgdkMiZAs8iA7FMBDrvSpZUQgKmxEDSGoeoaERSLmVoczXy8d5MXWAg"
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
