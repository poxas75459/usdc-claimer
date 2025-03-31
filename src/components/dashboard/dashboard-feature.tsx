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
    "2UgcUz46JZmkGMkfc8fRP8eNZBtjb9bENfVyMyDKQvXPKbPu6T9mLVNCimQvhbE5u72dxjL1ejVNXNu9bF1fgkWe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VXrzbB8E2kh2bWy4zr9zJ3v2B8NbWQaETq4tw6fVKdXwfEV1ikhZSqsVpgF1DfGm8FL9u5mUrw3ttWRtYajBDmY",
  "key1": "5SDSt4mSP3kDmUw4ynLqPLQWuL9X2yjGij2pNunj4qZGRFCyzLVBMNvGyuCfCebJcs2LJr3JjUGziy8bD7GRH4AG",
  "key2": "45xxnRLE2w9WmbLcbfrE3hWPEiCYW9zW36tLzNj6M3bAMHs6mCxv675crU3x4nA1vV2erRgx2jH4pZnmPuatC5fW",
  "key3": "4DSoHcBD5huj4aT6t5Tdy9qWp92PDZqqxYEhrKtWL4dcEfR7Q2L2TemrsAjUwprNNs1NySZYqrDXqYKwsFtJXnRH",
  "key4": "4k5dzNt7Nxzj6CvhNHZooqcDb8zcgX3xkRSWXiuWh8e28nuEKWwYBu3kHeJU3qXEJwL9QyQ7soFLWCexAmU1ysZw",
  "key5": "5bUvs3nCsv7iUbLvt3whfSKF5kjjuxQrWsiNmK8g2o5xLJgLkyMcRQPtjFTBbD5XbHeJCjaVrr5aYLb7B3MPcsro",
  "key6": "ex7FoKvJMTdCUa6ShEmPpA94MBZ1u7fSi2R634ExHzQoXzRUfAPGFwkyRQPdU6CPAv1wmEPA1QmzJReXpVtz6qu",
  "key7": "3DUAgXcvYiNS1DmTyBYzj9AwVnxHJcLumfpEwSZxkKmgn9vteYYc8qSW5W7U1Lt1mAZKtVC4KsNPetfxaudq7h9B",
  "key8": "2DPRfH6A8td8vbzg62Zvv8ngphnPYAnuLw7pKR4vXdTTuciZKo8L83oeb74xDFq1uHgcvbWStNwhARVTvYpmLx8f",
  "key9": "5AdrY4AVYnMH9FUzTQX161uWX2YxjtrmiryhgTGGpNtK5vRDCbgPxf7jnQk7xqmdKznstSxvncrmzq4gYvS6eSnt",
  "key10": "3PJpLzxFiQewEEnKGncYg16EeTQ9shpAvEtMxG1FDVB963zneuQyrE6GybbiXG6zccHSiyHPJ1T4AgxHchXHCV1T",
  "key11": "vmGfiSChZUU9H6VFJ25rv1NRxjLkHTHMxLpZsVePBU3gMjQXh95fR5sUSiv7Mo5vWtPnLwdm6KL4PxgDLnmaxnx",
  "key12": "2yWhUZE2WqAK6B4k53ruibCF1GfQSdXnQJYSkXw6RpqmpFPWp3VBRVoLQeNSGCv1YftaAYPmGZZeibJHbfiFzeGf",
  "key13": "6DT8jkUhLfLKzhr9NNLvzKHxF1AqmWQ7jAn5EyNrGy6fiRnWJGMVzuRP5KfiNPphizjm8Tk3pkwzyR3APPniAwK",
  "key14": "2Cwy5XNCz3yB6mAwkPeFtxhwDkAvzmgrRBeYki26TtXd2PpsuAnvHQvFFG64wvk4ErZZAHjN43TMu2xusDuD8Js6",
  "key15": "47G4jJuTxWgngYAveiNgEGfzJ55nKeoorRSuVS9CnbdPJZeRj4FiurjeSLVYegXUhHmk5TcNnz8RKLZPbamsnRXi",
  "key16": "2yp4SUWVPUSaSwFVcomWTZERvX1SXEHGYdaq21fRB42SHaqHwAm6EYeDxHjB5aTircwFUbLigSqmmKfdgHn6Q6YW",
  "key17": "5w5ugLT28Lt8VQw1XCXPuefm3tex7qMQZ9xhgw4WQN9S1nShkcoVbPy4K1ch13Fu1DnR844geXFYW2sJNN9nruS9",
  "key18": "8sNYGVRCjS1qHD1mqK4q4BxWjZr6xqiVvniwXonnW5TqT6WEQohMzSwrVzChuNoUU1xoh8WHVLoDfzrEJPjikvC",
  "key19": "ceJQfk32Y63f5aHDAb6hQzqxVod88cCxeLy6STzSeDkRhEs8B57aaMuWvcGn7J92JYz1WapDZqSKHpfGjWPqAns",
  "key20": "eAVfffBwE2PhnB4D3S5nufwEkqLTgviLzkp98wVKDJ5ymV3TGmMAwzgjCu3r5YKoaPS8zAwEKDFPMTarEgJ6B25",
  "key21": "38oQwDot4mm7K3b1CTVsrgGABnumdeCyx6MyVktvftEbttNJPgMHF4pM1zeARKXVmviL1fKyJBtxY1zjDegmbTAU",
  "key22": "3zN1CbhyQmxCg8LWmrdvBiFbc8YLWvRmy9ML9RhyRKRPLvX7kd766xn4cV88gASDjDi3tkU6t2ZdMXBUaKmz43Jm",
  "key23": "K3vLiz1zVzLNoct26YEzYet5Ui9ycroh3Je2z8UjDNCgCTfFfJ1cUri9WPmthBD6az2oxgCG4nkCur9sKWUKQSL",
  "key24": "1Yk33SPffEP8YMDxLky1xAa9qzV582mnUXBQn6bZbm4HoW6PnhqBRwCxoc8B4u4sVJCeoHDeSgpvFxQbmzccwE",
  "key25": "5wLPs8wSn4VPaLUpn1tNtWJJ5mMCWPhY37ipXkcB9XLYxtSDdx5DoyVrzamJssCcGixyJJUGCcNYrwydDy4Hq7tj",
  "key26": "3xYGEZYwfq9K1Fjx4tT5ZWUYhqpHV22FFKDTHH5wYMsiRQFwu4gM8DcC8sn3rCHh735ZzqwMoPKsz7cnPLD6Mhdi",
  "key27": "cZbZdq6RMpjqWX7wshDxgu5Aiu7hxfxd2dpLK2cCiWgC92hRs2DaMVhKEJ8P5aKXpPLJvSjgS62nXyTkj1wWU2z",
  "key28": "3ngJdGUrKwcqRNAravBSnznqTtK2sLE1sgBGrNVjoXp1W6vf8YTcakWTwy8ZE6yoaDTUbQw4U2yy3tTyymTKY4Xi"
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
