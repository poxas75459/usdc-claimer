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
    "22Tv35BmabB11h9UV3yZNqLzf7ztrnUfKCUuhX6ystbLWUnACeYnzyKEjtQGLMfoVCeffmfokzortqvCFNAzrY6K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21Tg7Q8CeLVZQkC5odZhpjhUM2Kqim1CW5YkTUEu4aKgvfn4BS4NhVv3PNFQiPuMpu8mQ8pVApKdhLXKn9wZhm94",
  "key1": "3GvrP1QitSnzYsivBGi5hnn2zxKHkguKqXB2a13oHUSj486yCeAv8F2eF9v1oTaPZ7HoNWdWdhgrmAsZDUQWYyN6",
  "key2": "2mDVU6dtA1a5jCy1pwVp16jVuSs4YW6Ehn93fH6WYHyoujTGJuYVgh6qqiYpxXHqUwe54Ahuign59ZjaC9DYk9rt",
  "key3": "2HpQnYAzcdh6x3GF6Yv9YakAUuW8svMa7PCtDf2jEn7v2AHpP1yDyC9x26TwejBS9PpmBVesncuRjEQgD5uMNivb",
  "key4": "DGB2dW9tBdZ829XCmdBHS9BaF3HexMHJZXCjFGzq31JYqWaofscHpT3mRWnBy7LgBrKHjYNXFR5tcR3Ed2Nrqmw",
  "key5": "5st65iavkEmi5PUvJRPuKfTdJW2NfowJ9qXLW3tHYt7KGG6msBR3xVBthsR3orkBt7eef3MekUvJrTXqULz2kxuW",
  "key6": "38vrPcFmFUcbA9M4R2aHqbN7gUoPVxPiFA45bc97YUP7NrA2QVBY2jMYJRCB1gQwosdneQDDyZT2voSn31bXVpup",
  "key7": "3pJFeUaPFSnKormG3Q8KG5NPB36U81iuaFGk5pSqUqtkHqCKHCDWGxJXm2FSPK3BmAQjMyHeeo6rt7ZMxV4iU5Qj",
  "key8": "3Ub64P5z3UvLdDU6j31BJRsKWNk647EmoTc3iTHGJqLVkfCWSLtxYhoRiYFYc5oEvkm5YvSi9FcfwxP3LFCiVuUn",
  "key9": "2dZ76C1EvWmRmxE1zBr8koS5ME2u2qbZ3wM5mzEBnKu4cj4g3zodCQA2Vh4EqeVJ5VmC8RdyHsi2RNr4wAXqyt8M",
  "key10": "57PSPbAgzRqFq3DAcdxwTo6sfnL4EyXKgf5wsY9Ws6SUS7JqGSYgWYxeDDRGijSw43NxBDjMu2RZ91ZjgoweT3jj",
  "key11": "5PL692QxFKGrmVd7sKMCo3ShzC5fBUadpYzosdp2uNjjjFf4es9tXqVfGN9s8Tz28QdBxVi3JBxGSCZDMAosxFxZ",
  "key12": "24WbrFpkWnxbXhaHyF3xd7RZvswC4nomJ7G7kPKtpdeHKuNZPQ9Cn8v2az7BYUnyu6jNCuvLx8pvNhYWyk4hdEfJ",
  "key13": "4gSxNXDRptmQjpQaQKMQfoKypiaTVhjfFSbo7EZrzzHaEhgEkJqpEWe3RaWx8GegYKbyNCK76xKQRHp8PkeYnwiF",
  "key14": "36QwwLwdmJAE9RDffuZeQag6ZG2XKSpFq9aFUnyxjgGXcPjPkjUGCmp7zjxAiHnE6vM2oXB9bJCywGmJxPNhuA8D",
  "key15": "rBLciW2ijJJUWqokaEP1yvC321gteA6WtahBJ1otiVXPtk4pf6QQpj7ZzDk53SakBh9gQ72uxm36k6mxK2mRs6r",
  "key16": "2A2yHJmZAQ7zLDXPyJxNmpoPcJjiW6TGUGKeccYCZqaDu4QJJxVkLsLgae5CUZNPTpmUeURmyVJj5WucXaYtsS7u",
  "key17": "4cy5MgvDeaxj4xU6CQkL2yc81MAUvZTLSACY3NP6jaDVQeJimgGtnwpc2ddA8EQB3q9e715JKhycCjzJAVqhmNML",
  "key18": "42dYKfJSq1VGZTG38DQ5XxgX9HMRX7tWSa3jiuuZLhziV9PX16XEjddkkYgkmdq2drdLMHhEqE4nfK6s3nYbGt7G",
  "key19": "2UUFPDfS1EorwAYUAAAPqzJHd1ZdZBHRuwk1V6EzoLN2YStD6kxw4cFufkmUf9GxMqp7EVMpvFh2kCXf3cd5NYNR",
  "key20": "4d9zzyjzJeFa4RWA2P9aoX6prU2gRbsNBf7feMsCyCpMNq2FqPp5dxkiv7S4JzQn3T1dHTC7MtjnsyH15PWJQegp",
  "key21": "4qmYSjNBBnDQY7z5v4L5dtHcJPBrQCeLxYP3Q3a7RCou7gjM3PNV6XdMVnQBLN99Xxjif2kJ7M8VriGLuBCtQP63",
  "key22": "4iUPyDEi7JXHpe6piHLJRTu2qnNMW73p7AYb9PrLsoKr1eGgVTeargv1BiBjdHfmT2Nb3dv75u8dME4zRYf2bWYU",
  "key23": "4ya8X9UqsakupjPPNPBGv44kWMteDmTNtQFQ9naRwqVMEdBuMso1YWYzznTQonVNK16svqFxK54y2ssip1y4DLK5",
  "key24": "34y6RraaN4nvisHRoNntUTAAb3KEju3re5NPSpZJGaY2Rd1vsGsxHVT9SpSvdarYkWcea5vaiwKRLNGABWNVrWbS",
  "key25": "67V5T3QY9z11eoRgBCDmRWbWnp1LhmhCgDf3r8VqFbbqdD3Crx4nWN75cRnWzV87qKq4cXPZK45t6r7XwicXqpZn",
  "key26": "5icyfjt5PywA2Ws9rs9mhf99LxSDFKZjtvGXpHv2KCZZgx9ipWo7sDHeLjxNV5zGgXBjYGvrQXAwrNBkcnT1R6wU",
  "key27": "5kFjNnMG7zhAQwQfSVCsZcaNFoM4pG5ETtt5vFCPwBHshiNkpb17yBTW4xNu95qf6XzpFBSGQ997cZenaVrpTH64",
  "key28": "ZZmYS9cvLcAdn9ijWPzEQYFVvVnCZGyoCZcFuKinxkaM3D8j6bW7WBtrTKhnfNJH8BVx6Lm5GSeiZYtWVyRa1uF",
  "key29": "ASDKGZ4xWGthuUy7jDUPYsVNnVb1RYsmcSng3ySsqgfqsCczk1SiSkkXiFrc9khhHhLsBVXVDFxxDVRRb78gRG1",
  "key30": "2UXRha8r9Waf6sUcTFAxcibSrFSovaoNZCN1iohMGyVHFbLtAmmkrsfSgtyjZYYzKRqAV1rntWBokmCM1Mu2nBWz",
  "key31": "4W2ZbV2gqJm7SaAKZN6af2wg175mQmrYHnJspGzEUGeQGYW2EFoMcMxuKNc9WFXUtp8Jq7KawTvgFEUpGPPhk9vX",
  "key32": "5r6xNDjc4xTby3pvPBGeW1N6n3b5xRL1HUFnnfKExPuu8XwMinyTFckUoqZWzfLJUnrs59QWDEjRjfPtjPh3uVex",
  "key33": "3HAcY8mGmH4u9gQSrhRybqfU224jAzv3ZRr5z14vMb9hrviH24mfhXPXkuTqdWukMYthDb7gXhLwASCFg6ajdzky",
  "key34": "59MpHWPoy89Zz3PXqyQzsiRUe21KjyF1tKtwa5LihuDP3CXR9EgPvJ4rtGyMmyNhVNhjtjNfwFACgRMDL7FenKM8",
  "key35": "4Qs3fbKPxCEQ8MVzgukT2RPk5HQGPeBbDkG5b7BTySttHnyw3B7XsWRXFpxsTV83FS666BYJfQsDnAdGydPDv1xR"
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
