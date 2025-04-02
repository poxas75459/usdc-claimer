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
    "5RBKqfHkkbw2NP7Ag4BFZRNeKfa3cUho2bDCnDTyFwtdMKV2rQEUBygcyaASeuBcJfi4dFEPDchKvXFiMHcAEAFM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26ffePs9mK4B71oxhnSbVo9qcBnLXo8zB6Wzm3UAwjTT86fHwGvHFMs5CYYmu287YogsWswG4QWDxu9fpq7ntcma",
  "key1": "QeSk8bzmEijdsU3VAEr43RA8ipQXHZTHJu4LKdUwXyow8XspFLF8tDaYTfE3bWG4fHADCDDuLWoyiUjWmdmcNGM",
  "key2": "3Gf47yyzE5vMtVqybUyRPy7y1gSyUimnESJTVwerqp8XUe9jfJK6KDYjNa7KWerzH4YHhWrXQxwKjysVkM4KDbBc",
  "key3": "Tobo9kNUeZG1Wkf7kpMxQ9tsgnaToNY1F9WmbCNkdXXx3qZ7b3BfPftFibrXxDw7APRFJPeLKEeZd3TGoou47aJ",
  "key4": "5oAUJonVKeoFMxf7sDzyUf6sptTtcBy9gCGdyBSpCDYmCQWDoCsDXVMkezKRPfQNsxBgCLNR2t9kcCKKxaLhKaqS",
  "key5": "48eKEDjmzbfj8JoXyZHqViqjxtK3zC19631oQvNC5Zn5ofJk5Yz8HPFwad6XTXTGf8tzjfXvaWSR2VAAru1Kt9TK",
  "key6": "49rt89KGXAAjc8WSPxEoaj7ycGxFh9MYtiSqmTycF9zMUbFPFwHhttLp2ebTQ1ayvKU8nnaya2w6Gd1RjNbiu9zf",
  "key7": "2JqPu9pWVN9qtx3d9GxZNLWPBJqaKguSW2Csjxnc8gqABp7WttsXFnKvtKKsDxmxaE7o4zfkBdCXjiHbUGLdixvB",
  "key8": "4Gc7CzAHVaWLcdqX4LfMsdES7LaxyyhoftscAN7maXZBkQhywma9f8gjNk7A5EfeJXLr8CM6s6BT9qvA3HZns713",
  "key9": "DiYKwVMWGpsoTgMtUECMKqUA4kyd9cFgQx3mGz4gt4sVtWmmGEy6RTZ58yenNfh6252oPQMXz7fsdiqbKdPUjUY",
  "key10": "2AvUtzVhbEH4NxbVktQ6Xbb8KvDJpiJkdQ1eA7o249JrXcGGFbRdcGLLVPBxvRfTkeyuwX5CTbo7BbANLBVYNGxs",
  "key11": "3C2L8V83nUoUq3tPPtE4NJ7HuhhpHyiWUn5fuhDKJZP6KKW3q7Fku3HR6uwn8sX6zAKGBDLYejTmHT8Je9zTmxKW",
  "key12": "4fttchZnqm98iebjjWgxML1T1HokTfXYkiT3hrK5MpTxhxpq4Z345o391efsruAGG1gbrh8tiwaCHYPT8q6fdjoW",
  "key13": "4ssaXkXLgwo1wgo7Vuk62UAfmThkuLdaZNYxYyra3PBWRSKX547p3S2ZUf6JQSKAL5NSB953a8CvhT1t2sqeqjoj",
  "key14": "5bhcvSLmpu1G772HnYuEC2A9WeEVxanLyH8XVZsz9WrPyzdtPkv1abvfHtgN6u5mGC87HS7jyrsV9w2bgJzE5aJ2",
  "key15": "65gQas957KprHUeedzZz3BrDC11xrEe9M5EGAGB5z9qNAgDsm1y8NMWG7apwg5qywfzmtXb5BkYGRm5zKeZnLbsY",
  "key16": "QssLVX4b7c7WxQaxmYpXFRiciq7dcT6fgabj3wYfKxYqYpP1z5rR1T7NLA9Twpk2EVjTUJDbpFX2ifSLvBgBAAp",
  "key17": "267kHNAnRBKWJcvPNGfPGioo1RZCVHkxT6ujbNA8SzKtccFx7HVB3wpmux63rEUaLQH4uBR6oJnXpNNLP61q5P4B",
  "key18": "2Lyx5RKWoHHz147WvRcoSGLXnfjN1cUUQ8wcDhbNkVwLu4Ek9MdLvM9zXwc4KybnTAUXRZzkGuWrU1zAMVm3kREA",
  "key19": "ep86eDzYGzrvgGbfbvu1DPEo3yzPnyvq55Qyb9g4VvyuAMdbdPkYAxTK1sysmQuiFD67a7jZRNCKJmjCWU5bQyq",
  "key20": "ytQnrdr1yLSvtiGALbSwRYsFJQQt9qWVNZogGwqKTunKYP5NxakZ42qbsV3G6JG4QB49qEUitFDqM3Tsbqmaqyi",
  "key21": "JtEM9cF3ViQxEtZFKwne571hQgy68xEzVNqtGjHASQfzWV91vWhriW8LFYAhw3vnnBU32WDFYTKFhQ3b4euDa5A",
  "key22": "26epvwXFgTaeT71MDKyHEHATm16pXBsxT81wkxpiz8muerHZfLWmCVMnLkexQ8Ko6kKxsfcWoV94eYXhs5uZKx8z",
  "key23": "kdbkHWn1yZHYDox4Tp6VpW9LrN3ULMCKdZH3opSt3661RFg51dhFx85Ya1j8kt494jJTKyS443ACP4od1fBe2mo",
  "key24": "ET4HngYXxGEytDKfiFxTxtuedhTQcdXxz7Fk5CFYJmr5SDKruexRKNxmqk8StWvyW6ra1KUCYY7JMhJuFywZK2c",
  "key25": "5CfVcb51uz2VnpDNF3zcTgrL8Ls5EtYbpwzfA3GWUYXdssFJmu4F6WYrLJefLUpWGMuCaoVR1oF82EGvcfsrJeNe",
  "key26": "3YCP6a2qbvQSmZgt8CyvmSSJhQkGVVcYxEDk9FXA3MK2DDqX1nESdyArNF9a7yWvZ3AAw7uGdBq5HCUBHX3NnZ9A",
  "key27": "5nY3PhBEiofa9mLEiAEhfjVbco4rq1pHdx8W2c9egoqPSVGRzWN2KunuPeff9KsTU8xqqg4AxyPuVjhszzAPmcJP",
  "key28": "5aX2GA1rcZKgm4DB3VqvNPtvEhQt2VuQrNZPKzSEMR3zPWLuKY5zo9P2kkJaNJviExdYsGW1BKQoWTjaHZgms24R",
  "key29": "4CXx3eCYcdKYdnXBHb1K2C4rJp8iqrVtwhDq7APyq6rHZizbsyBt6q2XTHR9kwZrAsWZn9KidFN82fsPSdMyoZXv",
  "key30": "2nUWVcpBAXpKRXy8NyFtdQP2nx3pkjfAzbzQ2Du6R2PGn5eE5KaLKLPHPLfHDfkXncGCUQu2YhkqjdDLs5Q9LqjH"
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
