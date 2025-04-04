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
    "5sQr1BiBh7SXwb3iZ2Ds9tc7xDB6JR2QZ8yyBnmCe3FJ5eKUQfEkGajD5jqwVFVqihNEnbygedKLtoWLkiN5QM9H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J8F4iCjjqbzCDgm3ejGpCxicYtFL2k7zNzSxnVkhUp9aKN75QQWXWVPUW5tbhaj4pFEVQ3Vyvk295HeNi1AXHSc",
  "key1": "3Fttur3zbgKeaD3956XhzeBDzSsaCUaELctos1TSQgffQLie3k2dDa11dYwDgYvEH2RANX9eKg4YFEB82zC4ZjHU",
  "key2": "3PgByCFRjhWNQyX5Ne4j2g5KtQuckLMTFa8zRzQV1mPrEJb55qBT3xRvPwHDXRR1CUUGmpEGocJLxDHBWCTziEzV",
  "key3": "26hewuSHYFcShZGpb8UgTL8hskKEAwnRLPMe83BCmAEEWVvB8utfr7wVQzfetRGPW67MAjNqQngJ62xnBeM7hmhd",
  "key4": "stcWnYtXH3H5pJfFaK19TWqQNmngTR7zEMXd8f6cAe2ARzjZR6H1gtbNEsxajnC8NQUcYEQQUFJndDHkUPRTCxV",
  "key5": "4CGuBXVYnAiYFjPmwUjkEFhGPntssqZY7VjE4x7xd1tU7aNYs3QyfMsXCPyeaA3sHvVupmeKJAUjK6eHW117FoMx",
  "key6": "4gh3Yjbn4ZpBjmiQLAyF2g2UTwmARF4GnDKCAbs9zZt8XdxA7Fvuxg641pyARLddFZ7pFiDuz9h1b7FePcsb16QD",
  "key7": "2Nv2jFkbq2o8xUGQzCXZNKY8szGtvzpPaq6om6HxJ1e6marqrxachSkivZKiLXvH7RFf1rxkuAE2o5xzHfDof7cD",
  "key8": "429TFvC7Nd65T4jBYP1e5Jf7Z4jvsgdBfhuwwAmJHLFe6eteH9L4rSip6JJ71mCeJKsNqKWNuFe8EeLjWKs29AZG",
  "key9": "5HqrsDUus8RKGnsaThwQJpFjQNsMZV6D9AM65Vfo9QY7y1rmLTQLHikrnsipT9U7w4H7kFLYNvTifNFnohjznkRu",
  "key10": "3B1nYQFgnrQHkPjg9KGBwKpUYQpEdLEteR1CM26SH9ac2cJm2N1SpMG2BqYDC2M4U95AztEzvadZWbyFJMhnykb8",
  "key11": "52aeaVacV15D6Lm9RgJcsXXwdsd66zNq2wCWxAn2CZ5JregquJomoX4eoQPmtt4hB9b5DhgTHMYSDYTbbyYpN6X4",
  "key12": "2YcmgDBZXpV2odh9YHrHNqzuXBaVxL9vcL59Z3eXaS2ydZirSEUrHchQuLykv4nHPCuc6QgZ1b1MSbQmDe7vbQU6",
  "key13": "2QMpnuguPotEZAaWrx1hnS1BKr4ieDHktSQYtEMU7TzakjeGQff2MLPUzrTf4iYtkqb8h3aiKbeZSfnNchFmznBR",
  "key14": "4EqotWfC1MD1ktgSZNa8UwoKgwpPc98rPU4Uxhqj3wqgo5WvALN7znj5P7WMoP2e7tFAeDtAURf31cqLvDvNRme7",
  "key15": "5BsDRDe7bep4q2V1tdq34soPoD26nkHU9KoQWFSJDDbYADLQcZKKGgqepN2qeVbKfrRkpKTDxZm552ek2msgdr6z",
  "key16": "3K49C6AFyybU2CBz8VFNTmmvFd2ZPuop7Yst546BySbdXkheJsuxZL2uVML7g7wYRLx9aQYLFiHuh8czTqCPWkFh",
  "key17": "5gTuXD9WRk7JnXZ1c5JHJJLVFD2H24JKHr2Ddeiw8bcqPHqM8LdewE5rbvpjsuqjtBZBmBmw8wj1YHbEQtwysLM9",
  "key18": "5czQpNGqQ8LriV2CyE1sfbZmKJZmeyr6EhUaqk2oG5iVVAcBcPe7dkgzTYbnx5jUQNUbLuJ1zKbTH9qyKmTga4z3",
  "key19": "2oRAkRatLajXAKo41MqMQvAeAiyC1Aoxg6kG4QcoL383uag3jXcZhJ575VbYMzVpJAUnnpaXHBBQP5oDsuNdppNk",
  "key20": "2gPGrdCi5utdtt8h3Z2F8xPq4NkLR1F4Yu8zFzwbv5FBqZ3sbXbedUNnnSysycQWsNifmuQYSdUym6G1PxaUmXwJ",
  "key21": "5SmZYak8kQ5C52C3wXKdJ1wpGfQyMymj369MrW1RVeghzYDZwqwtXDgTsvSthjCpJmkCujQTWDPys1RcKKYq9d8E",
  "key22": "2jsEzdE2pgSdU6vJJS23xUZf4CUaDWgY5c6b1C5TBEkCJ8LANpvjxXAT9kHEyaKScqh7niWHG7trmPgnGcysEu65",
  "key23": "3g7KHEYLuTXb7mQAsA3cBnr6adanCGagze7upRwEePZYFdT2sRFdabW6f8hc6ZadQwzfMwzMRXT2bfJ4KJ17pWUn",
  "key24": "5ry1t3aeeVraqn9kSjzr8LSRREMv3EyEJEK4oMDuteSHmzp5geub9W2NN5aeVA91QjJbTMwomR8TCk2edf2dhwkF",
  "key25": "5UtvnE4KXbDypB3z47MDqsYw3nTqxtKd7URCzSPbbkDBpNQnrrs33B6mvSMYXaGX5g3h5jdVMY5pBxfyEt9SaJSQ",
  "key26": "tShAT8h1w11dYGbM2iRytfutozexpk5XnuARqeyMHLS5kKGeqnHpsffYfGUYGcMeJz9Gndom3eYDYfx94cUKCe9",
  "key27": "5Cx4TeAVRvA7Xh2c49G7ESydXbhE58SV8gLzrQ9X1Bg1tzBHqXdidU62qkMzpQw1Zq6smda1givyZ2N24gmiP3Av",
  "key28": "2FALr8bpcXNmWGuaBqtyhFhwmB7PqvL9PVKigkPuCcDP3MAgGEm2GShNhtifHiWLCzyGHyM4WU2M98CTVRUEApRj",
  "key29": "3JvcXSqc7YcmfCKmM1uFuBE6vo63iyoyZTrRu3EYW2xvrjAh75ia4V6QMUK2PEAttFMonXHfLtrgiGh7ecYX6zZN",
  "key30": "6mCVyrcSbSo44R7zLbtKYR84cBwYGJZuLEx4urPnFXVsc1Do1pndwFd8LkEpa311yiMq1BYMJd5kkwcTGFS6mUp",
  "key31": "3A6cK8A3cDXNqz59fuCq3foHTj3bTHMXKJpXZXmenJE4ucJRXQ1kPiyK9578mVVbK7ZtBeohGKnw4Ujm1bue3VzS",
  "key32": "5BNDRFGwXzGvouc6YbPrMtEG4DRYDwYuy3BYhkt3TitppH23rnjNKm85X4Q5QHz8wWQNdoixNX2KqaTcPxqoihHo",
  "key33": "2b9uSUG3oD5qf1yUEbS9ScjgpMYJcF1GJhPHn1SYvqQAiizptEFonoAcq7AjcmNJYAQsHSVbTgCc5SzqPVGZ361X",
  "key34": "3sC4QZaqwc8omowvyt5BzXTgRF8bq1WxBUCEfzhfoJSr1UKTAb4wusC92VP7x3aowyTFT8RY4UET68dsHFRfMGWZ",
  "key35": "5MRLvYbgu4aBXvEEmK7qcDQCKHEj53aoGkAfAkXNf5jzdf6EKwTU2YJu29yz84iZHpFDtrzyPVecLtG7DX4RQHqW"
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
