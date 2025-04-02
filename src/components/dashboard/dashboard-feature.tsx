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
    "61g21iV42o74Npp1vC1oNKcYtbD5aWGCa43vpro8suzGHrf6VUYt4mkDy2eXCuLTU5ApzxJwLDw12f3QzNY1xQGh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uRv6VyPbc97nCQpJq1opnMBdqv8ENErG42Ctc1qsec8WqFtNA1io5var77bRRhMjsnfAxPSRGTyUYbbFHaeh5Ae",
  "key1": "NVZMzoq2aho8u9YnJNYtKUfXDXCnYKqjxAkoyLCqgfhaCkTWJrLnpYHWz57ZbxahM3C5cV58J6ZrrvNJRofKh4k",
  "key2": "3CAN2Sf9F84MVbJjrWPWss4eBufHLfePwzeMzRuNgr6rwzsbcdnLeX3jEhmewTqcpyL9zTsF5Kp8wwf9A951wyKn",
  "key3": "3ecVKAB9ttrmbovs1deqMwfKTfFbqM2YZFX9UZCszqCmDGkGZtmrjsGJqrhruTL8Mc4N5SNZ3QfN3DwtHEyTFiLz",
  "key4": "591HebUCJRpF6WByC1G3x7kQsygjhDxQAj3iyRtsPQZMJRGHwVTnUfPU13bLfSkxAULBvTDh6oECdZJBfM1sgfzs",
  "key5": "48rrfMLvPUh9Pu8VcypPFcsXYFQfRdD442rCuFBV5rZVtXCgChYN2J1X1UkyjSyo3AJVTArSeah3xrS4HyTnGRy",
  "key6": "4LCEcB9Z9py4buDp2XSdkNbm586z5rJJqmkWJD6ufDJPCAgPvFhfvQvWApSmxEbTsXxFYwG4G4dVmyZPrGQXTKDp",
  "key7": "3DFWhE594XTByn7E6UGojamjevqM45Eka3DGDFfMiEczvTpKzQdoGDjVKUPCQV4SvRAEaft9eEkpT9bJBbcv9yb6",
  "key8": "dq7epiBts5k9QP8Q7cQb8wsWicXmLMi9gYgijnMw4WM7Z9qAqyDLy19BifSScw414UoA6tqhtnrGdCTArSRFid7",
  "key9": "4WJiCaKifJt4ZE58Jipbv9qFbG7aZJtCW2xAXTvVUPQgR7UToEibeXP5cShyxAfzCnym3wLppsAv914bHEaU8tdp",
  "key10": "4a4uEZXpck9XRd5LXLVg7Qred7VLwoE2mtGxqm9i54qo5gpLFvxQ6yWmpefoo3MPwRJBeSSr76e9qBUyHh7P6JYm",
  "key11": "5jJgg7MgS65kvppgzrcpVx3bSt27LnqQVgu8dKGzvwrB7K5ZEXGLmH9T6gsmgHdJofNWFxfew6NyqxbuhUGFAxwL",
  "key12": "49R29g2yZTRNMz5TUfeaGkMN8KSsQJRDzVxn5vYm3dKryhpwF5eBPbUf1qooUoYLjfViWai9Hq6UnNpfqXFjS3ty",
  "key13": "3AE96q3QmzNcS4oUY1DUjf18E7W1jL2oZNyAwwoHoYct9eckGBY2ZzuaiwFJb3HepYrHTcwSaLcQUS4fYwPA2txg",
  "key14": "2m3VHSXzbKeZYtC4LZ1RFqfh6Do4z3S8z1m57TfPhYQsZYyEkAxy5yCEU6uPJjVxjyeVpeQFu2qgMAtHTkQVszxF",
  "key15": "3P9YdygNRjRWVmDYPc5dqXA151VWHyYZKUnTbeBATreAncrmx64kWnLBbeZRmcdsRryx1PYMrtfwT1K8d3bUqesg",
  "key16": "UiH2rJPQWJdcpnaW4nMD2EZrj3z1uZ5TFYRGbSb8T35LufYRY9Xn34zrqMgbRgoqqAW8w2v3FkcFuDU5QCbkeh6",
  "key17": "1rZJCsZ4yF3PWmPFSkJD4pa9wiznrhd6gEuBecSkCpNyS5JeX5FywVsxeQEnMQoy97HWyed9nnkMC7jqhpTbcDx",
  "key18": "2ykAzJFQHApRJ1fgJK6NYn3Ahk5EtE9az3wWr3sc6tBdJnbmuG4HwVEshEpTyXTRr3CF1YrJewYzBbuxeoevMxuQ",
  "key19": "CZ5nrPoX7qJE3NBWdTL5MYt7BVgV7aCrTu8qLucyC2PC2tZyvBzKMzayqStNfZYYApwfCFkKvsaYx5fNS8fcSAw",
  "key20": "3V1PXUxAJRwKY6vPxBnUhNcNxU3R7hAcqztYA22JCbGnAHEvFMXA6zv6veagojCyFnsDzXmdZP9XFvLjYLVSZH4B",
  "key21": "2z1o7mbyETqbo7FtDdA9XYBCnUXBdJciRdChpsyumto6iPErv5UXCmKJM2pv8G9eP4BcU83hhN1UX9x3BfztVzDN",
  "key22": "2Whqu8zy6DGQizF4MWYBMJXGW5bXQp6Sx225YKAVEzKKYksUzAzN18y8PDLcxA16PahySF6tseimSf36YaEnzRkg",
  "key23": "2KZCEWWweB4PuXAqNN7w3inrUkCPDjXDRbMJRq1gsR2mVyo5ZnrEYW1TszMkE48jPZLPW3HjYpLNwuF6fi58JWxW",
  "key24": "4fwkfm8QhrzJKW1667E9TvU5FKsW1uXKstwmkKPMnojjPCG2rgj5yMCtYNezLRgUqsXRENVN4SfuEb9pTjnshHeo",
  "key25": "4DoxvuVizQ3nJgoUpAsb3frnT7HsXPemoieZaibyXnnfxES3C1EKqvC5kJs6LmMtAMmBqG14ByRHXZ6CguXiVPF8",
  "key26": "36xgwMjg4p5ZmKSaw9wfk48ar77PJAiBEqizqvH2FAivyrz3bGFu5RBASgAwjWMxuWrLaRhg1vWLKrH6t5ncPfkt",
  "key27": "4pLQZ7mtgUWUmqj8BXwRvUonoNszASxZuG65vjtBPwhRaPsLjVYaDbnBbGNpYMBUW1VTCZbHSc8uXS9hi5UJzSSb",
  "key28": "kKtFYUikmnj8DgKvbLy1syAt3Ze3RQGYNv142U1LvjBhHhPmLT9kPd2nx6d4eENQSaqs2RkhxtoYtJtfGwdERRe",
  "key29": "4bjhpDgxkGypU9AScq9aKWwD3VUy9tx1Ru3XR47vnSSkpBwJ4W3JBLZ6LRoA7bgzj12cyTL9Z7cxneKkDt1jmBCj"
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
